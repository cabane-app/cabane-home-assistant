import asyncio
import base64
import hashlib
import json
import os
from pathlib import Path
import struct
import tempfile
import unittest

from custom_components.cabane.model_assets import (
    AssetError,
    ModelAssetStore,
    CHUNK_BYTES,
    ORPHAN_DELAY,
)
from custom_components.cabane.storage import WorkspaceStore, ConflictError
from test_storage import MemoryStore, FailingStore, document


def glb(size=CHUNK_BYTES * 2 + 44):
    payload = b'{"asset":{"version":"2.0"}}'
    payload += b" " * (-len(payload) % 4)
    binary = bytes(max(4, size - 28 - len(payload)))
    binary += bytes(-len(binary) % 4)
    return (
        struct.pack("<III", 0x46546C67, 2, 28 + len(payload) + len(binary))
        + struct.pack("<II", len(payload), 0x4E4F534A)
        + payload
        + struct.pack("<II", len(binary), 0x004E4942)
        + binary
    )


def with_asset(data, home_id="home-1"):
    value = json.loads(document(home_id))
    reference = {
        "asset": {"sha256": hashlib.sha256(data).hexdigest(), "byteLength": len(data)}
    }
    value["record"]["draft"]["customModels"] = [reference, reference]
    return json.dumps(value)


async def upload(store, data, owner="one"):
    sha = hashlib.sha256(data).hexdigest()
    key = (await store.begin(sha, len(data), owner))["upload_id"]
    for offset in range(0, len(data), CHUNK_BYTES):
        block = data[offset : offset + CHUNK_BYTES]
        result = await store.upload(
            key, offset, base64.b64encode(block).decode(), owner
        )
        assert result["offset"] == offset + len(block)
    assert await store.finish(key, owner) == {"sha256": sha, "byte_length": len(data)}
    return sha


class ModelAssetTests(unittest.IsolatedAsyncioTestCase):
    async def asyncSetUp(self):
        temporary = tempfile.TemporaryDirectory()
        self.addCleanup(temporary.cleanup)
        self.directory = Path(temporary.name)
        self.now = 1000000
        self.assets = ModelAssetStore(self.directory, lambda: self.now)
        self.backend = MemoryStore()
        self.store = WorkspaceStore(self.backend, self.assets)

    async def test_block_round_trip_deduplication_and_document_only_movements(self):
        data = glb()
        sha = await upload(self.assets, data)
        self.assertEqual(await self.assets.has([sha]), {"missing": []})
        read = bytearray()
        for offset in range(0, len(data), CHUNK_BYTES):
            block = await self.assets.get(sha, offset)
            decoded = base64.b64decode(block["data"])
            self.assertLessEqual(len(decoded), CHUNK_BYTES)
            read.extend(decoded)
        self.assertEqual(bytes(read), data)
        await upload(self.assets, data, "second")
        self.assertEqual(len(list(self.directory.glob("*.glb"))), 1)
        self.assertEqual(await self.store.put("home-1", with_asset(data), None), 1)
        self.assertEqual(await self.store.put("home-1", with_asset(data), 1), 2)
        reloaded = WorkspaceStore(self.backend, ModelAssetStore(self.directory))
        self.assertEqual((await reloaded.get("home-1"))["version"], 2)

    async def test_missing_and_interrupted_assets_preserve_previous_copy_and_allow_retry(
        self,
    ):
        await self.store.put("home-1", document(), None)
        data = glb()
        sha = hashlib.sha256(data).hexdigest()
        key = (await self.assets.begin(sha, len(data), "one"))["upload_id"]
        await self.assets.upload(
            key, 0, base64.b64encode(data[:CHUNK_BYTES]).decode(), "one"
        )
        with self.assertRaises(AssetError):
            await self.assets.finish(key, "one")
        with self.assertRaises(AssetError):
            await self.store.put("home-1", with_asset(data), 1)
        self.assertEqual((await self.store.get("home-1"))["document"], document())
        await upload(self.assets, data)
        self.assertEqual(await self.store.put("home-1", with_asset(data), 1), 2)

    async def test_digest_block_size_traversal_and_upload_owner_are_checked(self):
        data = glb(64)
        key = (await self.assets.begin("f" * 64, len(data), "one"))["upload_id"]
        with self.assertRaises(AssetError):
            await self.assets.upload(key, 0, base64.b64encode(data).decode(), "two")
        with self.assertRaises(AssetError):
            await self.assets.upload(
                key, 0, base64.b64encode(bytes(CHUNK_BYTES + 1)).decode(), "one"
            )
        await self.assets.upload(key, 0, base64.b64encode(data).decode(), "one")
        with self.assertRaises(AssetError):
            await self.assets.finish(key, "one")
        self.assertEqual(list(self.directory.glob("*.glb")), [])
        for invalid in ["../secret", "A" * 64, "x"]:
            with self.assertRaises(AssetError):
                await self.assets.get(invalid, 0)
        with self.assertRaises(AssetError):
            await self.assets.begin("a" * 64, 10 * 1024 * 1024 + 1, "one")

    async def test_two_clients_conflict_without_overwriting_or_losing_assets(self):
        data = glb(64)
        await asyncio.gather(
            upload(self.assets, data, "one"), upload(self.assets, data, "two")
        )
        await self.store.put("home-1", with_asset(data), None)
        results = await asyncio.gather(
            self.store.put("home-1", with_asset(data), 1),
            self.store.put("home-1", document(), 1),
            return_exceptions=True,
        )
        self.assertEqual(
            sum(isinstance(result, ConflictError) for result in results), 1
        )
        self.assertEqual(len(list(self.directory.glob("*.glb"))), 1)

    async def test_disk_failure_preserves_previous_document(self):
        data = glb(64)
        await upload(self.assets, data)
        await self.store.put("home-1", document(), None)
        saved = self.backend.value
        self.store._backend = FailingStore()
        self.store._backend.value = saved
        with self.assertRaises(OSError):
            await self.store.put("home-1", with_asset(data), 1)
        self.assertEqual(saved["documents"]["home-1"], document())

    async def test_gc_waits_24_hours_and_preserves_both_versions_and_other_houses(self):
        data = glb(64)
        sha = await upload(self.assets, data)
        await self.store.cleanup_assets()
        self.now += ORPHAN_DELAY - 1
        await self.store.cleanup_assets()
        self.assertTrue((self.directory / f"{sha}.glb").exists())
        # Linking a formerly orphaned file clears its orphan clock transactionally.
        await self.store.put("home-1", with_asset(data), None)
        self.now += ORPHAN_DELAY
        await self.store.cleanup_assets()
        self.assertTrue((self.directory / f"{sha}.glb").exists())
        await self.store.put("home-2", with_asset(data, "home-2"), None)
        await self.store.delete("home-1", 1)
        await self.store.cleanup_assets()
        self.assertTrue((self.directory / f"{sha}.glb").exists())
        await self.store.delete("home-2", 1)
        await self.store.cleanup_assets()
        self.now += ORPHAN_DELAY
        await self.store.cleanup_assets()
        self.assertFalse((self.directory / f"{sha}.glb").exists())

    async def test_corrupt_documents_stop_gc_to_keep_recovery_files(self):
        data = glb(64)
        sha = await upload(self.assets, data)
        await self.store.cleanup_assets()
        self.backend.value = {
            "documents": {"home-1": "broken"},
            "versions": {"home-1": 1},
        }
        self.now += ORPHAN_DELAY
        await self.store.cleanup_assets()
        self.assertTrue((self.directory / f"{sha}.glb").exists())

    async def test_cleanup_resumes_after_restart_and_expires_abandoned_uploads(self):
        data = glb(64)
        sha = await upload(self.assets, data)
        pending = await self.assets.begin("a" * 64, len(data), "one")
        path = self.directory / "uploads" / pending["upload_id"]
        os.utime(path, (self.now, self.now))
        await self.assets.cleanup(set())
        self.now += ORPHAN_DELAY
        restarted = ModelAssetStore(self.directory, lambda: self.now)
        await restarted.cleanup(set())
        self.assertFalse((self.directory / f"{sha}.glb").exists())
        self.assertFalse(path.exists())
