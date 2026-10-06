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
        with patch.dict(sys.modules, {"homeassistant": types.ModuleType("homeassistant"),
                                      "homeassistant.components": components,
                                      "homeassistant.components.websocket_api": ws,
                                      "voluptuous": vol}):
            module = importlib.import_module("custom_components.cabane.websocket")
            module.register_commands(None, WorkspaceStore(MemoryStore()))
            connection = Connection()
            await handlers[2](None, connection, {"id": 1, "home_id": "home-1", "document": document()})
            self.assertEqual(connection.result, (1, 1))
            await handlers[2](None, connection, {"id": 2, "home_id": "home-1", "document": document()})
            self.assertEqual(connection.error, (2, "conflict"))
            self.assertEqual(len(handlers), 4)
