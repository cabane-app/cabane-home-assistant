"""Authenticated WebSocket commands for Cabane workspace storage."""

from homeassistant.components import websocket_api
import voluptuous as vol

from .storage import ConflictError, CorruptStorageError, InvalidDocumentError


def register_commands(hass, store):
    async def run(connection, msg, action):
        try:
            result = await action()
            connection.send_result(msg["id"], result)
        except ConflictError:
            connection.send_error(msg["id"], "conflict", "The workspace changed on Home Assistant.")
        except InvalidDocumentError:
            connection.send_error(msg["id"], "invalid_document", "The workspace document is invalid.")
        except CorruptStorageError:
            connection.send_error(msg["id"], "corrupt_storage", "Cabane storage needs recovery.")

    @websocket_api.websocket_command({vol.Required("type"): "cabane/workspaces/list"})
    @websocket_api.async_response
    async def list_workspaces(hass, connection, msg):
        await run(connection, msg, store.list)

    @websocket_api.websocket_command({vol.Required("type"): "cabane/workspaces/get", vol.Required("home_id"): str})
    @websocket_api.async_response
    async def get_workspace(hass, connection, msg):
        await run(connection, msg, lambda: store.get(msg["home_id"]))

    @websocket_api.websocket_command({vol.Required("type"): "cabane/workspaces/put", vol.Required("home_id"): str,
                                       vol.Required("document"): str, vol.Optional("expected_version"): vol.Any(int, None)})
    @websocket_api.async_response
    async def put_workspace(hass, connection, msg):
        await run(connection, msg, lambda: store.put(msg["home_id"], msg["document"], msg.get("expected_version")))

    @websocket_api.websocket_command({vol.Required("type"): "cabane/workspaces/delete", vol.Required("home_id"): str,
                                       vol.Required("expected_version"): int})
    @websocket_api.async_response
    async def delete_workspace(hass, connection, msg):
        await run(connection, msg, lambda: store.delete(msg["home_id"], msg["expected_version"]))

    for handler in (list_workspaces, get_workspace, put_workspace, delete_workspace):
        websocket_api.async_register_command(hass, handler)
