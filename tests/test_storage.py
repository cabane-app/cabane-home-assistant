import asyncio
import json
import unittest

from custom_components.cabane.storage import WorkspaceStore, ConflictError, InvalidDocumentError


def document(home_id="home-1"):
    return json.dumps({"format": "cabane-workspace", "version": 1,
                       "workspace": {"name": "Home", "homeAssistantUrl": None, "hasPublished": False},
                       "record": {"homeId": home_id, "schemaVersion": 2, "draft": {}, "published": {}}})


class MemoryStore:
    def __init__(self):
        self.value = None

    async def async_load(self):
        return self.value

    async def async_save(self, value):
        self.value = value


class FailingStore(MemoryStore):
    async def async_save(self, value):
        raise OSError("disk full")


class WorkspaceStoreTests(unittest.IsolatedAsyncioTestCase):
    async def test_round_trip_and_reload(self):
        backend = MemoryStore()
        store = WorkspaceStore(backend)
        self.assertEqual(await store.put("home-1", document(), None), 1)
        self.assertEqual((await store.get("home-1"))["document"], document())
        self.assertEqual((await WorkspaceStore(backend).list())[0]["home_id"], "home-1")

    async def test_stale_and_concurrent_writes(self):
        store = WorkspaceStore(MemoryStore())
        await store.put("home-1", document(), None)
        results = await asyncio.gather(store.put("home-1", document(), 1),
                                       store.put("home-1", document(), 1), return_exceptions=True)
        self.assertEqual(sum(isinstance(result, ConflictError) for result in results), 1)
        self.assertEqual((await store.get("home-1"))["version"], 2)

    async def test_delete_keeps_tombstone(self):
        store = WorkspaceStore(MemoryStore())
        await store.put("home-1", document(), None)
        await store.delete("home-1", 1)
        self.assertEqual(await store.get("home-1"), {"version": 2, "document": None})
        with self.assertRaises(ConflictError):
            await store.put("home-1", document(), None)
        self.assertEqual(await store.put("home-1", document(), 2), 3)

    async def test_bad_document_is_rejected(self):
        store = WorkspaceStore(MemoryStore())
        for payload in ["{}", document("other"), "x" * (5 * 1024 * 1024 + 1)]:
            with self.assertRaises(InvalidDocumentError):
                await store.put("home-1", payload, None)

    async def test_failed_write_does_not_change_saved_document(self):
        backend = MemoryStore()
        store = WorkspaceStore(backend)
        await store.put("home-1", document(), None)
        saved = backend.value
        store._backend = FailingStore()
        store._backend.value = saved
        with self.assertRaises(OSError):
            await store.put("home-1", document(), 1)
        self.assertEqual(saved["versions"]["home-1"], 1)

    async def test_corrupt_saved_document_can_be_downloaded_but_not_overwritten(self):
        backend = MemoryStore()
        backend.value = {"documents": {"home-1": "{broken"}, "versions": {"home-1": 7}}
        store = WorkspaceStore(backend)
        self.assertEqual(await store.get("home-1"), {"version": 7, "document": "{broken", "corrupt": True})
        self.assertTrue((await store.list())[0]["corrupt"])
        with self.assertRaises(InvalidDocumentError):
            await store.put("home-1", document()[:-1] + ',"oauth_token":"secret"}', 7)
        with self.assertRaises(Exception):
            await store.put("home-1", document(), 7)
        self.assertEqual(backend.value["documents"]["home-1"], "{broken")
