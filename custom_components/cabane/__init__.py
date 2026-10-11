"""Cabane native panel and workspace storage integration."""

DOMAIN = "cabane"


def CONFIG_SCHEMA(config):
    """Keep accepting the original empty YAML setup while importing a UI entry."""
    from homeassistant.helpers import config_validation as cv

    return cv.empty_config_schema(DOMAIN)(config)


async def async_setup(hass, config):
    from homeassistant.config_entries import SOURCE_IMPORT
    from homeassistant.helpers.storage import Store

    from datetime import timedelta
    from homeassistant.helpers.event import async_track_time_interval
    from .model_assets import ModelAssetStore
    from .storage import WorkspaceStore
    from .websocket import register_commands

    # Commands capture this store, so both must live for the HA process lifetime.
    # Panel failure/unload must not reset storage or register duplicate handlers.
    if DOMAIN not in hass.data:
        assets = ModelAssetStore(hass.config.path(".storage", "cabane-assets"))
        store = WorkspaceStore(Store(hass, 1, "cabane.workspaces"), assets)

        async def cleanup(_now):
            await store.cleanup_assets()

        # Storage and cleanup live for the HA process lifetime, like the commands.
        async_track_time_interval(hass, cleanup, timedelta(hours=1))
        register_commands(hass, store)
        hass.data[DOMAIN] = store
    if DOMAIN in config:
        hass.async_create_task(
            hass.config_entries.flow.async_init(
                DOMAIN, context={"source": SOURCE_IMPORT}, data={}
            )
        )
    return True


async def async_setup_entry(hass, entry):
    from .panel import async_setup_panel

    await async_setup_panel(hass, entry)
    return True


async def async_unload_entry(hass, entry):
    from .panel import async_unload_panel

    async_unload_panel(hass, entry)
    return True
