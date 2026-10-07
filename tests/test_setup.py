import asyncio
import sys
import types
import unittest
from unittest.mock import AsyncMock, patch

from test_storage import MemoryStore, document
from custom_components import cabane


class SetupTests(unittest.IsolatedAsyncioTestCase):
    async def asyncSetUp(self):
        self.handlers = []
        self.tasks = []
        store_module = types.ModuleType("homeassistant.helpers.storage")
        store_module.Store = lambda hass, version, key: MemoryStore()
        websocket = types.ModuleType("custom_components.cabane.websocket")
        websocket.register_commands = lambda hass, store: self.handlers.append(store)
        config_entries = types.ModuleType("homeassistant.config_entries")
        config_entries.SOURCE_IMPORT = "import"
        self.panel = types.ModuleType("custom_components.cabane.panel")
        self.panel.async_setup_panel = AsyncMock()
        self.panel.async_unload_panel = lambda hass, entry: None
        modules = {
            "homeassistant": types.ModuleType("homeassistant"),
            "homeassistant.helpers": types.ModuleType("homeassistant.helpers"),
            "homeassistant.helpers.storage": store_module,
            "homeassistant.config_entries": config_entries,
            "custom_components.cabane.websocket": websocket,
            "custom_components.cabane.panel": self.panel,
        }
        self.module_patch = patch.dict(sys.modules, modules)
        self.module_patch.start()
        self.addCleanup(self.module_patch.stop)
        self.imports = AsyncMock()

        def create_task(coroutine):
            task = asyncio.create_task(coroutine)
            self.tasks.append(task)
            return task

        self.hass = types.SimpleNamespace(data={}, async_create_task=create_task,
            config_entries=types.SimpleNamespace(flow=types.SimpleNamespace(async_init=self.imports)))

    async def test_storage_survives_panel_unload_reload_without_reregistering(self):
        await cabane.async_setup(self.hass, {})
        store = self.hass.data["cabane"]
        await store.put("home-1", document(), None)
        entry = types.SimpleNamespace(entry_id="one")
        await cabane.async_setup_entry(self.hass, entry)
        self.assertTrue(await cabane.async_unload_entry(self.hass, entry))
        await cabane.async_setup(self.hass, {})
        await cabane.async_setup_entry(self.hass, entry)
        self.assertIs(self.hass.data["cabane"], store)
        self.assertIsNotNone(await store.get("home-1"))
        self.assertEqual(len(self.handlers), 1)

    async def test_existing_yaml_imports_ui_entry(self):
        await cabane.async_setup(self.hass, {"cabane": {}})
        await asyncio.gather(*self.tasks)
        self.imports.assert_awaited_once_with("cabane", context={"source": "import"}, data={})

    async def test_ui_setup_does_not_start_yaml_import(self):
        await cabane.async_setup(self.hass, {})
        self.imports.assert_not_awaited()

    async def test_panel_failure_preserves_storage(self):
        await cabane.async_setup(self.hass, {})
        self.panel.async_setup_panel.side_effect = ValueError("missing bundle")
        with self.assertRaisesRegex(ValueError, "missing bundle"):
            await cabane.async_setup_entry(self.hass, types.SimpleNamespace(entry_id="one"))
        store = self.hass.data["cabane"]
        self.assertEqual(await store.put("home-1", document(), None), 1)
