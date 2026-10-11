import asyncio
import importlib
import sys
import types
import unittest
from unittest.mock import patch

from custom_components.cabane.storage import WorkspaceStore
from test_storage import MemoryStore, document


class Connection:
    def __init__(self):
        self.result = None
        self.error = None

    def send_result(self, message_id, value):
        self.result = (message_id, value)

    def send_error(self, message_id, code, message):
        self.error = (message_id, code)


class WebsocketTests(unittest.IsolatedAsyncioTestCase):
    async def test_commands_register_and_reject_stale_write(self):
        handlers = []
        ws = types.ModuleType("homeassistant.components.websocket_api")
        ws.websocket_command = lambda schema: lambda function: function
        ws.async_response = lambda function: function
        ws.async_register_command = lambda hass, function: handlers.append(function)
        components = types.ModuleType("homeassistant.components")
        components.websocket_api = ws
        vol = types.ModuleType("voluptuous")
        vol.Required = lambda value: value
        vol.Optional = lambda value: value
        vol.Any = lambda *values: values
        with patch.dict(
            sys.modules,
            {
                "homeassistant": types.ModuleType("homeassistant"),
                "homeassistant.components": components,
                "homeassistant.components.websocket_api": ws,
                "voluptuous": vol,
            },
        ):
            module = importlib.import_module("custom_components.cabane.websocket")
            module.register_commands(None, WorkspaceStore(MemoryStore()))
            connection = Connection()
            await handlers[2](
                None, connection, {"id": 1, "home_id": "home-1", "document": document()}
            )
            self.assertEqual(connection.result, (1, 1))
            await handlers[2](
                None, connection, {"id": 2, "home_id": "home-1", "document": document()}
            )
            self.assertEqual(connection.error, (2, "conflict"))
            self.assertEqual(len(handlers), 4)

    async def test_asset_commands_use_authenticated_user_and_report_integrity_errors(
        self,
    ):
        from pathlib import Path
        import tempfile
        from custom_components.cabane.model_assets import ModelAssetStore, CHUNK_BYTES

        handlers = []
        ws = types.ModuleType("homeassistant.components.websocket_api")
        ws.websocket_command = lambda schema: lambda function: function
        ws.async_response = lambda function: function
        ws.async_register_command = lambda hass, function: handlers.append(function)
        components = types.ModuleType("homeassistant.components")
        components.websocket_api = ws
        vol = types.ModuleType("voluptuous")
        vol.Required = lambda value: value
        with (
            tempfile.TemporaryDirectory() as directory,
            patch.dict(
                sys.modules,
                {
                    "homeassistant": types.ModuleType("homeassistant"),
                    "homeassistant.components": components,
                    "homeassistant.components.websocket_api": ws,
                    "voluptuous": vol,
                },
            ),
        ):
            module = importlib.reload(
                importlib.import_module("custom_components.cabane.asset_websocket")
            )
            module.register_asset_commands(None, ModelAssetStore(Path(directory)))
            connection = Connection()
            connection.user = types.SimpleNamespace(id="authenticated-one")
            await handlers[0](None, connection, {"id": 1})
            self.assertEqual(connection.result[1]["chunk_bytes"], CHUNK_BYTES)
            self.assertEqual(connection.result[1]["version"], 1)
            await handlers[2](
                None, connection, {"id": 2, "sha256": "a" * 64, "byte_length": 64}
            )
            upload_id = connection.result[1]["upload_id"]
            connection.user = types.SimpleNamespace(id="authenticated-two")
            await handlers[3](
                None,
                connection,
                {"id": 3, "upload_id": upload_id, "offset": 0, "data": "AAAA"},
            )
            self.assertEqual(connection.error[1], "invalid_asset")
            await handlers[5](
                None, connection, {"id": 4, "sha256": "../secret", "offset": 0}
            )
            self.assertEqual(connection.error[1], "invalid_asset")
            self.assertEqual(len(handlers), 6)
