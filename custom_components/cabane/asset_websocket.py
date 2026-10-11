"""Asset commands use Home Assistant's authenticated WebSocket registry."""

from homeassistant.components import websocket_api
import voluptuous as vol

from .model_assets import AssetError, CHUNK_BYTES, MAX_FILE_BYTES, MAX_HOME_BYTES


def register_asset_commands(hass, assets):
    async def run(connection, msg, action):
        try:
            connection.send_result(msg["id"], await action())
        except AssetError as error:
            connection.send_error(msg["id"], "invalid_asset", str(error))
        except OSError:
            connection.send_error(
                msg["id"],
                "asset_storage_error",
                "Could not store the GLB. The previous home is unchanged.",
            )

    def owner(connection):
        return connection.user.id

    @websocket_api.websocket_command(
        {vol.Required("type"): "cabane/assets/capabilities"}
    )
    @websocket_api.async_response
    async def capabilities(hass, connection, msg):
        connection.send_result(
            msg["id"],
            {
                "version": 1,
                "chunk_bytes": CHUNK_BYTES,
                "max_file_bytes": MAX_FILE_BYTES,
                "max_home_bytes": MAX_HOME_BYTES,
            },
        )

    @websocket_api.websocket_command(
        {vol.Required("type"): "cabane/assets/has", vol.Required("hashes"): [str]}
    )
    @websocket_api.async_response
    async def has(hass, connection, msg):
        await run(connection, msg, lambda: assets.has(msg["hashes"]))

    @websocket_api.websocket_command(
        {
            vol.Required("type"): "cabane/assets/begin",
            vol.Required("sha256"): str,
            vol.Required("byte_length"): int,
        }
    )
    @websocket_api.async_response
    async def begin(hass, connection, msg):
        await run(
            connection,
            msg,
            lambda: assets.begin(msg["sha256"], msg["byte_length"], owner(connection)),
        )

    @websocket_api.websocket_command(
        {
            vol.Required("type"): "cabane/assets/upload",
            vol.Required("upload_id"): str,
            vol.Required("offset"): int,
            vol.Required("data"): str,
        }
    )
    @websocket_api.async_response
    async def upload(hass, connection, msg):
        await run(
            connection,
            msg,
            lambda: assets.upload(
                msg["upload_id"], msg["offset"], msg["data"], owner(connection)
            ),
        )

    @websocket_api.websocket_command(
        {vol.Required("type"): "cabane/assets/finish", vol.Required("upload_id"): str}
    )
    @websocket_api.async_response
    async def finish(hass, connection, msg):
        await run(
            connection, msg, lambda: assets.finish(msg["upload_id"], owner(connection))
        )

    @websocket_api.websocket_command(
        {
            vol.Required("type"): "cabane/assets/get",
            vol.Required("sha256"): str,
            vol.Required("offset"): int,
        }
    )
    @websocket_api.async_response
    async def get(hass, connection, msg):
        await run(connection, msg, lambda: assets.get(msg["sha256"], msg["offset"]))

    for handler in (capabilities, has, begin, upload, finish, get):
        websocket_api.async_register_command(hass, handler)
