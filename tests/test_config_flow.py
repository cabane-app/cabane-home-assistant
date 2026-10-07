import importlib
import sys
import types
import unittest
from unittest.mock import patch


class AbortFlow(Exception):
    pass


class ConfigFlowTests(unittest.IsolatedAsyncioTestCase):
    def setUp(self):
        self.entries = set()
        entries = self.entries

        class ConfigFlow:
            def __init_subclass__(cls, **kwargs):
                pass

            async def async_set_unique_id(self, unique_id):
                self.unique_id = unique_id

            def _abort_if_unique_id_configured(self):
                if self.unique_id in entries:
                    raise AbortFlow("already_configured")

            def async_show_form(self, *, step_id, **kwargs):
                return {"type": "form", "step_id": step_id, **kwargs}

            def async_create_entry(self, *, title, data):
                entries.add(self.unique_id)
                return {"type": "create_entry", "title": title, "data": data}

        module = types.ModuleType("homeassistant.config_entries")
        module.ConfigFlow = ConfigFlow
        ha = types.ModuleType("homeassistant")
        ha.config_entries = module
        self.patch = patch.dict(sys.modules, {"homeassistant": ha, "homeassistant.config_entries": module})
        self.patch.start()
        self.addCleanup(self.patch.stop)
        self.module = importlib.import_module("custom_components.cabane.config_flow")
        importlib.reload(self.module)

    async def test_user_confirms_without_credentials(self):
        flow = self.module.CabaneConfigFlow()
        form = await flow.async_step_user()
        self.assertEqual(form["type"], "form")
        self.assertEqual(form["step_id"], "user")
        result = await flow.async_step_user({})
        self.assertEqual(result, {"type": "create_entry", "title": "Cabane", "data": {}})

    async def test_yaml_import_does_not_require_form(self):
        result = await self.module.CabaneConfigFlow().async_step_import({})
        self.assertEqual(result["type"], "create_entry")
        self.assertEqual(result["data"], {})

    async def test_ui_and_yaml_cannot_create_duplicate_entries(self):
        await self.module.CabaneConfigFlow().async_step_user({})
        for method in ("async_step_user", "async_step_import"):
            with self.assertRaisesRegex(AbortFlow, "already_configured"):
                await getattr(self.module.CabaneConfigFlow(), method)({})
