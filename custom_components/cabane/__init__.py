"""Cabane workspace storage integration."""

DOMAIN = "cabane"


async def async_setup(hass, config):
    from homeassistant.helpers.storage import Store
    from .storage import WorkspaceStore
    from .websocket import register_commands
    store = WorkspaceStore(Store(hass, 1, "cabane.workspaces"))
    hass.data[DOMAIN] = store
    register_commands(hass, store)
    return True
