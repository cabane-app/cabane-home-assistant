"""HA boundary tests: real integration lifecycle, fake HTTP/frontend services."""
import importlib
from pathlib import Path
import sys
import tempfile
import types
import unittest
from unittest.mock import AsyncMock, patch

from bundle_fixture import write_bundle


class ConfigEntryError(Exception):
    pass


class PanelTests(unittest.IsolatedAsyncioTestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        write_bundle(self.root)
        self.paths = []
        self.panels = {}
        self.removed = []
        self.registration_failure = False

        async def register_static(paths):
            for path in paths:
                if any(existing.url_path == path.url_path for existing in self.paths):
                    raise RuntimeError("duplicate static route")
                self.paths.append(path)

        async def register_panel(hass, **kwargs):
            if self.registration_failure:
                raise ValueError("registration failed")
            self.panels[kwargs["frontend_url_path"]] = kwargs

        def remove_panel(hass, path):
            self.removed.append(path)
            self.panels.pop(path)

        async def executor(function, *args):
            return function(*args)

        class StaticPathConfig:
            def __init__(self, url_path, path, cache_headers):
                self.url_path, self.path, self.cache_headers = url_path, path, cache_headers

        self.hass = types.SimpleNamespace(
            data={"frontend_panels": self.panels},
            http=types.SimpleNamespace(async_register_static_paths=register_static),
            async_add_executor_job=executor,
        )
        frontend = types.ModuleType("homeassistant.components.frontend")
        frontend.DATA_PANELS = "frontend_panels"
        frontend.async_panel_exists = lambda hass, path: path in self.panels
        frontend.async_remove_panel = remove_panel
        panel_custom = types.ModuleType("homeassistant.components.panel_custom")
        panel_custom.async_register_panel = register_panel
        http = types.ModuleType("homeassistant.components.http")
        http.StaticPathConfig = StaticPathConfig
        exceptions = types.ModuleType("homeassistant.exceptions")
        exceptions.ConfigEntryError = ConfigEntryError
        components = types.ModuleType("homeassistant.components")
        components.frontend, components.panel_custom = frontend, panel_custom
        modules = {
            "homeassistant": types.ModuleType("homeassistant"),
            "homeassistant.components": components,
            "homeassistant.components.frontend": frontend,
            "homeassistant.components.panel_custom": panel_custom,
            "homeassistant.components.http": http,
            "homeassistant.exceptions": exceptions,
        }
        self.patch = patch.dict(sys.modules, modules)
        self.patch.start()
        self.addCleanup(self.patch.stop)
        self.module = importlib.import_module("custom_components.cabane.panel")
        importlib.reload(self.module)
        self.directory_patch = patch.object(self.module, "FRONTEND_DIR", self.root)
        self.directory_patch.start()
        self.addCleanup(self.directory_patch.stop)
        self.entry = types.SimpleNamespace(entry_id="entry-one")

    async def test_registers_local_native_panel_and_all_nested_assets(self):
        await self.module.async_setup_panel(self.hass, self.entry)
        panel = self.panels["cabane"]
        self.assertEqual(panel["webcomponent_name"], "cabane-panel")
        self.assertFalse(panel["embed_iframe"])
        self.assertFalse(panel["require_admin"])
        self.assertEqual(panel["sidebar_title"], "Cabane")
        self.assertEqual(panel["module_url"], self.paths[0].url_path + "/cabane-panel.js")
        self.assertEqual(self.paths[0].path, str(self.root))
        self.assertTrue(self.paths[0].cache_headers)

    async def test_reload_removes_panel_without_duplicate_static_route(self):
        await self.module.async_setup_panel(self.hass, self.entry)
        await self.module.async_setup_panel(self.hass, self.entry)
        self.module.async_unload_panel(self.hass, self.entry)
        self.assertNotIn("cabane", self.panels)
        await self.module.async_setup_panel(self.hass, self.entry)
        self.assertIn("cabane", self.panels)
        self.assertEqual(len(self.paths), 1)

    async def test_conflict_does_not_overwrite_or_remove_existing_panel(self):
        existing = self.panels["cabane"] = {"owner": "someone else"}
        with self.assertRaisesRegex(ConfigEntryError, "already"):
            await self.module.async_setup_panel(self.hass, self.entry)
        self.module.async_unload_panel(self.hass, self.entry)
        self.assertIs(self.panels["cabane"], existing)
        self.assertEqual(self.paths, [])
        self.assertEqual(self.removed, [])

    async def test_wrong_entry_or_replaced_panel_is_not_removed(self):
        await self.module.async_setup_panel(self.hass, self.entry)
        self.module.async_unload_panel(self.hass, types.SimpleNamespace(entry_id="other"))
        self.assertIn("cabane", self.panels)
        replacement = self.panels["cabane"] = {"owner": "replacement"}
        self.module.async_unload_panel(self.hass, self.entry)
        self.assertIs(self.panels["cabane"], replacement)

    async def test_missing_artifact_does_not_register_broken_panel(self):
        (self.root / "manifest.json").unlink()
        with self.assertRaisesRegex(ConfigEntryError, "native frontend bundle"):
            await self.module.async_setup_panel(self.hass, self.entry)
        self.assertEqual(self.paths, [])
        self.assertEqual(self.panels, {})

    async def test_retry_after_failed_panel_registration_reuses_static_route(self):
        self.registration_failure = True
        with self.assertRaises(ConfigEntryError):
            await self.module.async_setup_panel(self.hass, self.entry)
        self.registration_failure = False
        await self.module.async_setup_panel(self.hass, self.entry)
        self.assertIn("cabane", self.panels)
        self.assertEqual(len(self.paths), 1)

    async def test_restart_with_new_bundle_uses_new_urls(self):
        await self.module.async_setup_panel(self.hass, self.entry)
        old_url = self.panels["cabane"]["module_url"]
        self.module.async_unload_panel(self.hass, self.entry)
        write_bundle(self.root, "two")
        self.hass.data.pop("cabane_panel")
        self.paths.clear()
        await self.module.async_setup_panel(self.hass, self.entry)
        self.assertNotEqual(self.panels["cabane"]["module_url"], old_url)
