import asyncio
import base64
import hashlib
import json
import os
from pathlib import Path
import struct
import tempfile
import unittest
from unittest.mock import MagicMock, patch

from custom_components.cabane.model_assets import (
    AssetError,
    ModelAssetStore,
    CHUNK_BYTES,
    MAX_FILE_BYTES,
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

    async def test_download_reads_one_verification_pass_then_only_requested_ranges(self):
        data = bytearray(glb(MAX_FILE_BYTES))
        for index, offset in enumerate(range(CHUNK_BYTES, len(data), CHUNK_BYTES)):
            data[offset : offset + 4] = struct.pack("<I", index + 1)
        data = bytes(data)
        sha = await upload(self.assets, data)
        # A fresh process has not verified the file yet.
        assets = ModelAssetStore(self.directory)
        path = self.directory / f"{sha}.glb"
        original_open = Path.open
        bytes_read = 0

        def counted_open(opened_path, *args, **kwargs):
            stream = original_open(opened_path, *args, **kwargs)
            if opened_path != path:
                return stream
            reader = MagicMock(wraps=stream)
            reader.__enter__.return_value = reader
            reader.__exit__.side_effect = stream.__exit__

            def read(*read_args, **read_kwargs):
                nonlocal bytes_read
                block = stream.read(*read_args, **read_kwargs)
                bytes_read += len(block)
                return block

            reader.read.side_effect = read
            return reader

        with patch.object(Path, "open", counted_open):
            for offset in range(0, len(data), CHUNK_BYTES):
                result = await assets.get(sha, offset)
                self.assertEqual(result["offset"], offset)
                self.assertEqual(result["byte_length"], len(data))
                self.assertEqual(
                    base64.b64decode(result["data"]), data[offset : offset + CHUNK_BYTES]
                )
            self.assertLessEqual(bytes_read, len(data) * 2)
            bytes_read = 0
            for offset in range(0, len(data), CHUNK_BYTES):
                await assets.get(sha, offset)
            self.assertEqual(bytes_read, len(data))
            bytes_read = 0
            # Unaligned, repeated and tail requests must remain bounded too.
            for offset in (CHUNK_BYTES + 3, 0, len(data) - 7, 0):
                result = await assets.get(sha, offset)
                self.assertEqual(
                    base64.b64decode(result["data"]), data[offset : offset + CHUNK_BYTES]
                )
            self.assertEqual(bytes_read, CHUNK_BYTES * 3 + 7)

    async def test_download_rechecks_integrity_after_file_changes_or_replacement(self):
        data = glb()
        sha = await upload(self.assets, data)
        path = self.directory / f"{sha}.glb"
        corrupt = data[:-1] + b"\xff"
        for replace in (False, True):
            with self.subTest(replace=replace):
                path.write_bytes(data)
                assets = ModelAssetStore(self.directory)
                await assets.get(sha, 0)
                previous = path.stat()
                target = self.directory / "replacement.glb" if replace else path
                target.write_bytes(corrupt)
                # Preserve size and mtime: ctime/inode must invalidate verification.
                os.utime(target, ns=(previous.st_atime_ns, previous.st_mtime_ns))
                if replace:
                    os.replace(target, path)
                with self.assertRaisesRegex(AssetError, "integrity"):
                    await assets.get(sha, CHUNK_BYTES)
                with self.assertRaisesRegex(AssetError, "integrity"):
                    await assets.has([sha])
                with self.assertRaisesRegex(AssetError, "integrity"):
                    await self.store.put("home-1", with_asset(data), None)

    async def test_download_rejects_invalid_offsets_missing_files_and_symlinks(self):
        data = glb(64)
        sha = await upload(self.assets, data)
        for offset in (-1, True, len(data), len(data) + 1):
            with self.subTest(offset=offset):
                with self.assertRaisesRegex(AssetError, "offset"):
                    await self.assets.get(sha, offset)
        missing = "a" * 64
        with self.assertRaisesRegex(AssetError, "Missing GLB"):
            await self.assets.get(missing, 0)
        (self.directory / f"{missing}.glb").symlink_to(self.directory / f"{sha}.glb")
        with self.assertRaisesRegex(AssetError, "storage entry"):
            await self.assets.get(missing, 0)

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
