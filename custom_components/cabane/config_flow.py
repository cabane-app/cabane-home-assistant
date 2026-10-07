"""One local Cabane panel per Home Assistant instance; no credentials required."""

from homeassistant import config_entries

from . import DOMAIN


class CabaneConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    VERSION = 1

    async def async_step_user(self, user_input=None):
        await self.async_set_unique_id(DOMAIN)
        self._abort_if_unique_id_configured()
        if user_input is None:
            return self.async_show_form(step_id="user")
        return self.async_create_entry(title="Cabane", data={})

    async def async_step_import(self, import_data):
        return await self.async_step_user({})
