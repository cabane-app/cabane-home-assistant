# Cabane for Home Assistant

Add Cabane to your Home Assistant sidebar and save your homes on your own
instance. The panel runs locally and uses your existing Home Assistant session.

## What is Cabane?

[Cabane](https://cabane.my/) is a visual interface for your smart home. Draw your
floor plan, view it in 3D, and connect rooms and devices to Home Assistant.

You can use it in your browser at **[cabane.my](https://cabane.my/)** or install
this integration to open it inside Home Assistant. The integration also lets you
save and sync workspaces across browsers. A workspace includes your home, draft,
and device mappings.

## Install

Requires **Home Assistant 2024.7 or newer** and **HTTPS**.

1. In **HACS → Custom repositories**, add
   `https://github.com/cabane-app/cabane-home-assistant` as an **Integration**.
2. Download **Cabane** and restart Home Assistant.
3. Go to **Settings → Devices & services → Add integration → Cabane** and confirm.
4. Open **Cabane** from the sidebar.

Cabane is a HACS custom repository, not part of the default catalog. No manual
panel configuration or separate server is needed.

For manual installation, download **cabane.zip** from the
[latest release](https://github.com/cabane-app/cabane-home-assistant/releases/latest)
and extract it into `/config/custom_components/cabane/`. Keep the full archive
contents, including `frontend/`. Restart Home Assistant, then follow steps 3–4.
Use **cabane.zip**, not GitHub's source-code archive.

## Save and sync

In your workspace's **Home Assistant** page, choose **Use this Home Assistant**,
then **Enable HA storage → Save**. On cabane.my, sign in to your Home Assistant
instance first.

- **Save** uploads the whole workspace to Home Assistant.
- **Load** replaces the browser copy with the saved version, downloading a backup
  of the browser copy first.
- **Sync automatically** syncs changes while the workspace is open. Save once to
  enable it. Offline edits stay in the browser until you reconnect.
- **Delete saved copy** removes the Home Assistant copy and turns off sync. The
  browser copy stays.

On another browser, choose **Workspaces → Import → From Home Assistant**.
If copies conflict, Cabane asks which one to keep.

### Moving from cabane.my

The website and sidebar panel have separate browser storage. To move a home,
save it to Home Assistant or export a private workspace backup on cabane.my,
then import it in the panel. If the workspace connects to a different Home
Assistant instance, change that connection explicitly.

## Updates and migration

Update through HACS, restart Home Assistant, then reload your browser or the
Companion app. Reloading YAML alone is not enough.

If you previously added `cabane:` to your YAML, the integration imports it on
startup. Once Cabane appears in **Devices & services**, remove that YAML line.
Saved workspaces remain in `.storage/cabane.workspaces`.

Remove any manual panel using `/cabane` before installing. Existing iframe cards
are not migrated; use the sidebar entry instead.

To uninstall, remove the integration entry and any `cabane:` YAML, then restart
Home Assistant. Saved workspaces remain unless you delete them in Cabane.

## Privacy and access

Workspaces are stored locally on Home Assistant. **Every signed-in user on that
instance can read, edit, and delete them.** Backups include room and device
mappings, but no OAuth credentials or tokens.

The integration makes no external network requests. The sidebar panel uses Home
Assistant's session; standalone Cabane signs in through OAuth.

Include your Home Assistant configuration directory in your backups. Sync is
not a backup.

## Troubleshooting

| Problem | Fix |
| --- | --- |
| Cabane is missing from Add integration | Restart Home Assistant after installation and reload the frontend. |
| Frontend bundle is missing or invalid | Reinstall the full **cabane.zip** release and restart. |
| Sidebar path is already registered | Remove the manual panel using `/cabane` and restart. |
| Home is missing in the panel | Import it from Home Assistant storage or a private backup. |
| Old UI after an update | Restart Home Assistant and reload the browser or Companion app. |
| Standalone sign-in fails | Use HTTPS for both Cabane and Home Assistant, and allow the sign-in popup. |
| Load is disabled | Save once, or import a saved workspace from the Workspaces screen. |
| Changes are missing on another device | Open the same workspace and enable auto-sync, or choose Load. |

Still stuck? [Open an issue](https://github.com/cabane-app/cabane-home-assistant/issues).
Do not attach credentials or private workspace backups.

## Development

Run the tests:

```sh
python3 -m unittest discover -s tests -v
```

See the [build and release guide](docs/frontend-artifact.md) for frontend bundling,
packaging, and acceptance checks. Automated tests use Home Assistant API doubles;
live installation and iOS Companion checks are separate release steps. Plain HTTP
is supported only for paired loopback development origins.

[MIT license](LICENSE).
