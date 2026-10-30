import asyncio
import unittest
from unittest.mock import patch

from custom_components.cabane.agent_relay import (
    AgentRelay,
    RelayError,
    MAX_REQUEST_BYTES,
    MAX_RESPONSE_BYTES,
)


class RelayTests(unittest.IsolatedAsyncioTestCase):
    def setUp(self):
        self.now = 0
        self.relay = AgentRelay(lambda: self.now)
        self.owner = object()
        self.events = []

    def open(self, owner=None, workspace="home"):
        event = self.relay.open(owner or self.owner, workspace, self.events.append)
        return event, self.relay.pair(event["code"])

    def session(self, credentials):
        return self.relay.authenticate(
            credentials["sessionId"], credentials["token"], credentials["workspaceId"]
        )

    async def test_pairing_is_one_use_scoped_and_does_not_expose_ha_credentials(self):
        event, credentials = self.open()
        self.assertNotIn("token", event)
        self.assertEqual(self.events[-1], {"type": "paired"})
        self.assertEqual(self.session(credentials).workspace_id, "home")
        with self.assertRaises(RelayError):
            self.relay.pair(event["code"])
        with self.assertRaises(RelayError):
            self.relay.pair("MCBN-é")
        for session_id, token, workspace in [
            (credentials["sessionId"], "wrong", "home"),
            (credentials["sessionId"], "é", "home"),
            ("wrong", credentials["token"], "home"),
            (credentials["sessionId"], credentials["token"], "other"),
            ([], credentials["token"], "home"),
        ]:
            with self.assertRaises(RelayError):
                self.relay.authenticate(session_id, token, workspace)

    async def test_pairing_and_session_expire_without_persisted_state(self):
        event = self.relay.open(self.owner, "home", self.events.append)
        self.now = 301
        with self.assertRaises(RelayError):
            self.relay.pair(event["code"])
        _, credentials = self.open()
        self.now += 8 * 3600
        with self.assertRaises(RelayError):
            self.session(credentials)
        self.assertEqual(self.relay.sessions, {})

    async def test_request_roundtrip_and_owner_isolation(self):
        _, credentials = self.open()
        session = self.session(credentials)
        task = asyncio.create_task(
            self.relay.request(session, "execute_action", {"action": {"type": "undo"}})
        )
        await asyncio.sleep(0)
        request = self.events[-1]
        self.assertEqual(request["method"], "execute_action")
        with self.assertRaises(RelayError):
            self.relay.respond(session.id, object(), request["requestId"], {"ok": True})
        self.relay.respond(
            session.id,
            self.owner,
            request["requestId"],
            {"ok": True, "result": {"changed": True}},
        )
        self.assertEqual(await task, {"ok": True, "result": {"changed": True}})
        with self.assertRaises(RelayError):
            self.relay.respond(
                session.id, self.owner, request["requestId"], {"ok": True}
            )
        self.assertEqual(session.pending, {})

    async def test_other_tabs_are_independent_and_reopening_revokes_only_owner(self):
        _, first = self.open()
        other = object()
        _, second = self.open(other, "other")
        self.relay.open(self.owner, "new", self.events.append)
        with self.assertRaises(RelayError):
            self.session(first)
        self.assertEqual(self.session(second).owner, other)

    async def test_disconnect_rejects_waiter_and_late_response(self):
        _, credentials = self.open()
        session = self.session(credentials)
        task = asyncio.create_task(self.relay.request(session, "inspect_workspace", {}))
        await asyncio.sleep(0)
        request_id = self.events[-1]["requestId"]
        self.relay.close(session.id)
        with self.assertRaisesRegex(RelayError, "disconnected"):
            await task
        with self.assertRaises(RelayError):
            self.relay.respond(session.id, self.owner, request_id, {"ok": True})

    async def test_timeout_cleans_request_without_retrying_mutations(self):
        _, credentials = self.open()
        session = self.session(credentials)
        with patch("custom_components.cabane.agent_relay.REQUEST_SECONDS", 0.001):
            with self.assertRaisesRegex(RelayError, "Inspect before retrying"):
                await self.relay.request(session, "execute_action", {})
        self.assertEqual(session.pending, {})
        self.assertEqual(sum(e.get("type") == "request" for e in self.events), 1)

    async def test_request_json_size_and_rate_limits(self):
        _, credentials = self.open()
        session = self.session(credentials)
        for params in (
            [],
            None,
            {"bad": float("nan")},
            {"data": "x" * MAX_REQUEST_BYTES},
        ):
            with self.assertRaises(RelayError):
                await self.relay.request(session, "inspect_workspace", params)
        self.assertEqual(session.pending, {})
        for _ in range(59):
            with self.assertRaises(RelayError):
                self.relay.pair("wrong")
        with self.assertRaises(RelayError) as caught:
            self.relay.pair("wrong")
        self.assertEqual(caught.exception.status, 429)
        self.now = 61
        event = self.relay.open(object(), "fresh", self.events.append)
        self.assertEqual(self.relay.pair(event["code"])["workspaceId"], "fresh")

    async def test_bounded_queue_and_large_inspection_response(self):
        _, credentials = self.open()
        session = self.session(credentials)
        tasks = [
            asyncio.create_task(self.relay.request(session, "inspect_workspace", {}))
            for _ in range(16)
        ]
        await asyncio.sleep(0)
        with self.assertRaises(RelayError) as caught:
            await self.relay.request(session, "inspect_workspace", {})
        self.assertEqual(caught.exception.status, 429)
        request_id = next(iter(session.pending))
        with self.assertRaises(RelayError) as caught:
            self.relay.respond(
                session.id,
                self.owner,
                request_id,
                {"ok": True, "result": {"data": "x" * MAX_RESPONSE_BYTES}},
            )
        self.assertEqual(caught.exception.status, 413)
        self.assertFalse(session.pending[request_id].done())
        self.relay.respond(
            session.id,
            self.owner,
            request_id,
            {"ok": True, "result": {"data": "x" * 256000}},
        )
        self.assertEqual(len((await tasks[0])["result"]["data"]), 256000)
        self.relay.close(session.id)
        results = await asyncio.gather(*tasks[1:], return_exceptions=True)
        self.assertTrue(all(isinstance(result, RelayError) for result in results))
