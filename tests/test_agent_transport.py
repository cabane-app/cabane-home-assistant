import asyncio
import importlib
import json
import sys
import types
import unittest
from unittest.mock import patch

from custom_components.cabane.agent_relay import MAX_REQUEST_BYTES


class AgentTransportTests(unittest.IsolatedAsyncioTestCase):
    async def asyncSetUp(self):
        handlers, views, timers = {}, [], []
        ws = types.ModuleType("homeassistant.components.websocket_api")

        def command(schema):
            def decorate(fn):
                handlers[schema["type"]] = fn
                return fn

            return decorate

        ws.websocket_command = command
        ws.async_register_command = lambda *args: None
        http = types.ModuleType("homeassistant.components.http")
        http.HomeAssistantView = type("HomeAssistantView", (), {})
        core = types.ModuleType("homeassistant.core")
        core.callback = lambda fn: fn
        events = types.ModuleType("homeassistant.helpers.event")
        events.async_track_time_interval = lambda hass, fn, interval: timers.append(fn)
        components = types.ModuleType("homeassistant.components")
        components.websocket_api = ws
        aiohttp = types.ModuleType("aiohttp")
        aiohttp.web = types.SimpleNamespace(
            json_response=lambda body, status=200, headers=None: types.SimpleNamespace(
                body=body, status=status, headers=headers
            )
        )
        vol = types.ModuleType("voluptuous")
        vol.Required = lambda key: key
        modules = {
            "homeassistant": types.ModuleType("homeassistant"),
            "homeassistant.components": components,
            "homeassistant.components.websocket_api": ws,
            "homeassistant.components.http": http,
            "homeassistant.core": core,
            "homeassistant.helpers": types.ModuleType("homeassistant.helpers"),
            "homeassistant.helpers.event": events,
            "voluptuous": vol,
            "aiohttp": aiohttp,
        }
        self.modules = patch.dict(sys.modules, modules)
        self.modules.start()
        self.addCleanup(self.modules.stop)
        module = importlib.reload(
            importlib.import_module("custom_components.cabane.agent_transport")
        )
        self.hass = types.SimpleNamespace(
            data={}, http=types.SimpleNamespace(register_view=views.append)
        )
        module.register_agent_relay(self.hass)
        self.handlers, self.view, self.timers = handlers, views[0], timers
        self.events = []
        self.connection = types.SimpleNamespace(
            subscriptions={},
            send_result=lambda *a: None,
            send_error=lambda *a: self.fail(a),
            send_event=lambda _id, event: self.events.append(event),
        )
        handlers["cabane/agent/open"](
            self.hass, self.connection, {"id": 1, "workspace_id": "home"}
        )
        self.event = self.events[-1]

    async def post(self, operation, body, headers=None, raw=None):
        data = json.dumps(body).encode() if raw is None else raw

        async def chunks(_size):
            yield data

        request = types.SimpleNamespace(
            headers=headers or {},
            content_type="application/json",
            content=types.SimpleNamespace(iter_chunked=chunks),
        )
        return await self.view.post(request, operation)

    async def pair(self):
        result = await self.post("pair", {"code": self.event["code"]})
        self.assertEqual(result.status, 200)
        creds = result.body
        return {"sessionId": creds["sessionId"], "workspaceId": creds["workspaceId"]}, {
            "X-Cabane-Agent-Token": creds["token"]
        }

    async def test_only_authenticated_ws_creates_editor_subscription(self):
        self.assertEqual(
            set(self.handlers), {"cabane/agent/open", "cabane/agent/respond"}
        )
        self.assertIn(1, self.connection.subscriptions)
        self.assertFalse(self.view.requires_auth)
        self.assertFalse(self.view.cors_allowed)
        self.assertNotIn("token", self.event)
        self.assertEqual(len(self.timers), 1)

    async def test_browser_http_and_missing_or_wrong_scoped_token_are_rejected(self):
        self.assertEqual(
            (
                await self.post(
                    "pair",
                    {"code": self.event["code"]},
                    {"Origin": "https://evil.test"},
                )
            ).status,
            403,
        )
        body, headers = await self.pair()
        self.assertEqual((await self.post("status", body)).status, 401)
        self.assertEqual(
            (
                await self.post("status", {**body, "workspaceId": "other"}, headers)
            ).status,
            401,
        )
        result = await self.post("status", body, headers)
        self.assertEqual(result.body["paired"], True)
        self.assertEqual(result.headers["Cache-Control"], "no-store")

    async def test_cli_request_crosses_editor_subscription_and_returns_result(self):
        body, headers = await self.pair()
        task = asyncio.create_task(
            self.post(
                "request",
                {**body, "method": "inspect_workspace", "params": {}},
                headers,
            )
        )
        await asyncio.sleep(0)
        event = self.events[-1]
        self.handlers["cabane/agent/respond"](
            self.hass,
            self.connection,
            {
                "id": 2,
                "session_id": body["sessionId"],
                "request_id": event["requestId"],
                "response": {"ok": True, "result": {"home": "draft"}},
            },
        )
        self.assertEqual((await task).body, {"ok": True, "result": {"home": "draft"}})

    async def test_subscription_cleanup_revokes_token_and_inflight_request(self):
        body, headers = await self.pair()
        task = asyncio.create_task(
            self.post("request", {**body, "method": "inspect_workspace"}, headers)
        )
        await asyncio.sleep(0)
        self.connection.subscriptions[1]()
        self.assertEqual((await task).status, 409)
        self.assertEqual((await self.post("status", body, headers)).status, 401)

    async def test_disconnect_and_malformed_json(self):
        body, headers = await self.pair()
        self.assertEqual((await self.post("disconnect", body, headers)).status, 200)
        for raw in (b"[]", b"null", b"invalid", b"[" * 2000 + b"]" * 2000):
            self.assertEqual((await self.post("pair", {}, raw=raw)).status, 400)
        self.assertEqual(
            (await self.post("pair", {}, raw=b"x" * (MAX_REQUEST_BYTES + 1))).status,
            413,
        )
