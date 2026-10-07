"""Entry-owned sidebar panel with process-owned public static routes."""

from pathlib import Path

from homeassistant.components import frontend, panel_custom
from homeassistant.components.http import StaticPathConfig
from homeassistant.exceptions import ConfigEntryError

from .bundle import load_bundle

FRONTEND_DIR = Path(__file__).parent / "frontend"
DATA_PANEL = "cabane_panel"
PANEL_PATH = "cabane"


async def async_setup_panel(hass, entry):
    state = hass.data.setdefault(DATA_PANEL, {"paths": set(), "owner": None, "panel": None})
    panels = hass.data.get(frontend.DATA_PANELS, {})
    if state["owner"] == entry.entry_id and panels.get(PANEL_PATH) is state["panel"]:
        return
    if PANEL_PATH in panels or state["owner"] is not None:
        raise ConfigEntryError(
            "The cabane sidebar path is already registered. Remove the conflicting "
            "manual panel configuration and restart Home Assistant."
        )
    try:
        bundle = await hass.async_add_executor_job(load_bundle, FRONTEND_DIR)
    except ValueError as err:
        raise ConfigEntryError(str(err)) from err
    if bundle.url_path not in state["paths"]:
        await hass.http.async_register_static_paths([
            StaticPathConfig(bundle.url_path, str(bundle.directory), True)
        ])
        # HTTP routes cannot be removed; keep this even if panel registration fails.
        state["paths"].add(bundle.url_path)
    try:
        await panel_custom.async_register_panel(
            hass,
            frontend_url_path=PANEL_PATH,
            webcomponent_name="cabane-panel",
            sidebar_title="Cabane",
            sidebar_icon="mdi:home-outline",
            module_url=bundle.module_url,
            embed_iframe=False,
            require_admin=False,
        )
    except ValueError as err:
        raise ConfigEntryError(f"Could not register the Cabane panel: {err}") from err
    state["owner"] = entry.entry_id
    state["panel"] = hass.data[frontend.DATA_PANELS][PANEL_PATH]


def async_unload_panel(hass, entry):
    state = hass.data.get(DATA_PANEL)
    if not state or state["owner"] != entry.entry_id:
        return
    # Do not remove a panel another integration replaced after our setup.
    if hass.data.get(frontend.DATA_PANELS, {}).get(PANEL_PATH) is state["panel"]:
        frontend.async_remove_panel(hass, PANEL_PATH)
    state["owner"] = state["panel"] = None
