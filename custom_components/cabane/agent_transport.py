"""HA-authenticated editor subscriptions and a Cabane-token-only CLI endpoint."""

import json
from datetime import timedelta

from aiohttp import web
from homeassistant.components import websocket_api
from homeassistant.components.http import HomeAssistantView
from homeassistant.core import callback
from homeassistant.helpers.event import async_track_time_interval
import voluptuous as vol

from .agent_relay import AgentRelay, RelayError, MAX_REQUEST_BYTES

DATA_KEY = "cabane_agent_relay"


def register_agent_relay(hass):
    relay = AgentRelay()
    hass.data[DATA_KEY] = relay

    @websocket_api.websocket_command(
        {
            vol.Required("type"): "cabane/agent/open",
            vol.Required("workspace_id"): str,
        }
    )
    @callback
    def open_session(hass, connection, msg):
        try:
            event = relay.open(
                connection,
                msg["workspace_id"],
                lambda data: connection.send_event(msg["id"], data),
            )
            connection.subscriptions[msg["id"]] = lambda: relay.close(
                event["sessionId"]
            )
            connection.send_result(msg["id"])
            connection.send_event(msg["id"], event)
        except RelayError as error:
            connection.send_error(msg["id"], "agent_relay", str(error))

    @websocket_api.websocket_command(
        {
            vol.Required("type"): "cabane/agent/respond",
            vol.Required("session_id"): str,
            vol.Required("request_id"): str,
            vol.Required("response"): dict,
        }
    )
    @callback
    def respond(hass, connection, msg):
        try:
            relay.respond(
                msg["session_id"], connection, msg["request_id"], msg["response"]
            )
            connection.send_result(msg["id"])
        except RelayError as error:
            connection.send_error(
                msg["id"],
                "request_expired" if error.status == 404 else "agent_relay",
                str(error),
            )

    for command in (open_session, respond):
        websocket_api.async_register_command(hass, command)
    hass.http.register_view(AgentView(relay))

    @callback
    def cleanup(_now):
        relay.cleanup()

    async_track_time_interval(hass, cleanup, timedelta(seconds=30))


class AgentView(HomeAssistantView):
    url = "/api/cabane/agent/{operation}"
    name = "api:cabane:agent"
    # Only /pair uses its one-use code. All other operations require the scoped
    # Cabane token below, which grants no HA API or workspace-storage authority.
    requires_auth = False
    cors_allowed = False

    def __init__(self, relay):
        self.relay = relay

    async def post(self, request, operation):
        try:
            if "Origin" in request.headers:
                raise RelayError(
                    "Agent endpoints are for CLI clients, not browser requests.", 403
                )
            if request.content_type != "application/json":
                raise RelayError("Content-Type must be application/json.", 415)
            data = bytearray()
            async for chunk in request.content.iter_chunked(16384):
                data.extend(chunk)
                if len(data) > MAX_REQUEST_BYTES:
                    raise RelayError("The relay message is too large.", 413)
            try:
                body = json.loads(data)
            except (ValueError, UnicodeError, RecursionError) as error:
                raise RelayError("Request body must be JSON.") from error
            if not isinstance(body, dict):
                raise RelayError("Request body must be an object.")
            if operation == "pair":
                result = self.relay.pair(body.get("code"))
            elif operation in ("request", "status", "disconnect"):
                session = self.relay.authenticate(
                    body.get("sessionId"),
                    request.headers.get("X-Cabane-Agent-Token"),
                    body.get("workspaceId"),
                )
                if operation == "request":
                    result = await self.relay.request(
                        session, body.get("method"), body.get("params", {})
                    )
                elif operation == "disconnect":
                    self.relay.close(session.id, "The agent disconnected.")
                    result = {"ok": True}
                else:
                    result = {
                        "ok": True,
                        "paired": True,
                        "workspaceId": session.workspace_id,
                    }
            else:
                raise RelayError("Unknown agent endpoint.", 404)
            return web.json_response(result, headers={"Cache-Control": "no-store"})
        except RelayError as error:
            return web.json_response(
                {"ok": False, "error": {"message": str(error)}},
                status=error.status,
                headers={"Cache-Control": "no-store"},
            )
