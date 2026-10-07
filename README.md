# Cabane for Home Assistant

Cabane runs as a native Home Assistant sidebar panel and stores your homes on
Home Assistant. The bundled frontend uses your existing HA session without a
second login, a separate server, or an iframe.

The native frontend, borrowed-session runtime, integration setup, and release
packaging are implemented. Automated tests include a browser host fixture;
disposable Home Assistant installation and real iOS Companion acceptance remain
release checks. See the [build and acceptance contract](docs/frontend-artifact.md).

## Install a complete native-panel release

Home Assistant 2024.7 or newer is required by the static asset API.
Use HTTPS; plain HTTP is supported only for paired loopback development origins.

1. Open **HACS → Custom repositories** and add
   `https://github.com/cabane-app/cabane-home-assistant` as an **Integration**.
2. Download **Cabane**, selecting a complete release, then restart Home Assistant.
3. Open **Settings → Devices & services → Add integration → Cabane** and confirm.
4. Open **Cabane** from the Home Assistant sidebar.

The integration registers the panel and serves its bundled files locally. No
`www` copy, manual `panel_custom` YAML, separate Cabane server, or second HA
sign-in is needed. HACS downloads files; the HA setup step enables the integration.
This is a custom repository, not a listing in HACS's default catalog.

For manual installation, download the release's **cabane.zip** asset and extract
its contents into `/config/custom_components/cabane/` (or your HA configuration
directory's equivalent), then restart and use the same setup flow. The folder must
contain `__init__.py`, `manifest.json`, the other Python modules, `translations/`
and the complete `frontend/` directory. GitHub's automatic source-code zip is not
the native-panel installation asset.

## Existing installations and updates

Existing `cabane:` YAML is imported into a single UI entry on startup. Your saved
workspaces stay in `.storage/cabane.workspaces`. After confirming the entry appears
in **Devices & services**, remove the old `cabane:` line; otherwise deleting the
UI entry will cause it to be imported again on the next restart.

Update through HACS, fully restart Home Assistant, then reload the browser or
Companion frontend. Reloading YAML alone does not update Python code or already
loaded JS. Each frontend build has a new asset URL namespace.

A manually configured panel already using `/cabane` must be removed before the
native panel can register. The integration reports that conflict and does not
replace another panel. Existing external iframe dashboard cards are not converted
automatically; open the native sidebar entry instead.

Removing or disabling the UI entry removes the sidebar panel. It does not delete
saved workspaces. Static application routes and storage WebSocket handlers remain
until the next HA restart. To fully disable the integration, remove its YAML and
UI entry, then restart. Remove saved copies explicitly in Cabane if desired.

## Bring your home into the panel

Browser storage under **cabane.my** is separate from storage under Home Assistant's
origin. Opening the panel will not automatically reveal homes created on cabane.my.
Before switching, save the home to HA storage or export a private workspace backup.
In the native panel, import from that same HA instance or from the private backup.
Existing workspace connections to a different HA instance must be explicitly
changed; they must not silently attach to the host instance.

Both native and standalone Cabane support these storage features:

- **Save** uploads the whole workspace: published home, draft, and device mappings.
- **Load** brings the saved copy into this browser. Cabane downloads the current
  browser copy before replacing it.
- **Sync automatically** keeps changes in sync while the workspace is open. Save
  once before enabling it. Offline edits stay in the browser until reconnection.
- **Delete saved copy** removes the HA copy and turns off sync; the browser copy stays.

To use storage, enable this integration. In Cabane's workspace **Home Assistant**
page, choose **Use this Home Assistant** in the native panel, or sign in to your
instance in standalone Cabane, then choose
**Enable HA storage → Save**. On another browser use **Workspaces → Import → From
Home Assistant**. Standalone Cabane still uses its own OAuth sign-in; the native
panel uses HA's session instead. Conflicts ask which copy to keep.

## Sharing and privacy

All signed-in users of this HA instance can read, change, or delete its saved
Cabane workspaces. Use separate workspaces for independent homes. Workspace
backups contain household area/entity mappings, but no OAuth credentials or tokens.
The integration makes no external network requests and stores workspaces locally.
Keep HA backups that include the configuration directory; sync is not a backup.

Bundled application files are public static code, separate from authenticated
workspace storage. The native frontend contract forbids public-site analytics,
forwarding HA tokens to cabane.my, and closing or revoking HA's session when Cabane
unmounts. The panel disposes its own subscriptions when closed and leaves HA connected.

## Troubleshooting

| Problem | What to do |
| --- | --- |
| Native frontend bundle missing or invalid | Reinstall a complete release and restart HA. Do not substitute the standalone web build. |
| Cabane absent from Add integration | Restart HA after HACS installation and reload the frontend; confirm the integration files exist. |
| Sidebar path already registered | Remove the conflicting manual panel configuration and restart HA. |
| Home missing in the panel | Import from HA storage or a private backup; cabane.my browser storage is a different origin. |
| Old UI after update | Restart HA and reload the browser or Companion frontend. |
| Standalone sign-in fails | Use HTTPS for Cabane and HA; HTTP development is supported only for paired loopback addresses. Allow the OAuth popup. |
| Load is disabled | Save once, or import a different saved workspace from the Workspaces screen. |
| Changes absent on another device | Open the same workspace and enable auto-sync, or use Load. |

[Open an issue](https://github.com/cabane-app/cabane-home-assistant/issues) for help.
Do not attach credentials or private workspace backups.

## Development

```sh
python3 -m unittest discover -s tests -v
```

Tests cover storage validation/conflicts, WebSocket registration, native artifact
validation, install/update archive layout, config flow and panel lifecycle against
HA API doubles. The real frontend is bundled, with its source revision and asset digests. No live
HA instance, household device, or real iOS Companion acceptance has been exercised.
See [the build/release contract](docs/frontend-artifact.md) for maintainer commands
and the remaining HA installation and owner-device checks.

Licensed under the [MIT license](LICENSE).
