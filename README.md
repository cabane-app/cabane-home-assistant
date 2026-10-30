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

## Open Cabane directly

The **Cabane** sidebar entry opens the panel in your browser or the Home Assistant
Companion app, using your existing Home Assistant login.

- **Browser:** bookmark your Home Assistant URL with `/cabane` at the end, for
  example `https://your-home-assistant.example/cabane`.
- **Companion app:** create a phone shortcut that opens
  `homeassistant://navigate/cabane`. If you have multiple servers, add
  `?server=Your%20Server%20Name`. See the
  [Companion app URL handler](https://companion.home-assistant.io/docs/integrations/url-handler/)
  for details.

Cabane is a custom sidebar panel and does not appear in Home Assistant's default
dashboard picker. The bookmark or shortcut opens it directly.

If your home is on cabane.my, [import it into the panel once](#moving-from-cabanemy).

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

### Personal models

In Arrange, **Import GLB** adds a personal furniture/device model to the active
home. Original materials and embedded textures are preserved. **Download AI
skill** provides standalone Blender/Three.js examples and a local validator;
the Cabane aesthetic is optional.

GLB 2.0 files must be self-contained: 10 MiB per file, 100 MiB of distinct assets
per home, 100,000 triangles and 128 meshes per model. Animations, embedded lights
and cameras are ignored; the Light and Camera profiles use Cabane's existing
controls and viewer. No custom JavaScript is executed.

Model files live in `.storage/cabane-assets`, addressed by SHA-256. Authenticated
256 KiB transfers upload missing files before the workspace document. Moving
instances only updates the document; interrupted uploads preserve the previous
copy. Unreferenced files are removed after 24 hours. Include both the workspace
store and this asset directory in HA backups. Complete Cabane exports use
`.cabane` ZIP archives; old JSON imports remain supported.

Update the integration and frontend together. Older integrations can save native
homes but display an update request for homes containing personal GLBs. The
[asset protocol](docs/model-assets.md) documents the commands and integrity rules.

### Moving from cabane.my

The website and sidebar panel have separate browser storage. To move a home,
save it to Home Assistant or export a private workspace backup on cabane.my,
then import it in the panel. If the workspace connects to a different Home
Assistant instance, change that connection explicitly.

## Connect an LLM agent

The Cabane panel can pair an external agent with its open workspace. Choose
**Connect LLM agent → Generate pairing code** from that workspace's menu, then
run the displayed `npm run agent:pair` command in a matching Cabane checkout.
The agent and browser may use different devices that can reach this HA instance.

The relay runs inside this integration. It forwards requests over the panel's
existing HA WebSocket, and the panel executes the same editing actions as the UI.
The agent receives a temporary Cabane relay token, never your HA access token.
Pairing codes expire after five minutes and can be used once. Sessions expire
after eight hours and are revoked when the editor disconnects or HA restarts.
Keep the paired editor open. Changes stay in the draft until explicitly saved.

This feature requires the matching agent-enabled frontend and CLI (protocol 3).
See [the relay protocol](docs/agent-relay.md) for transport and security details.

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
| Loading reports that `outdoorPlatforms` or `edgeColor` is not part of the HomeProject schema | The receiving frontend is older than the saved home. Update the integration to 0.3.4 or newer, restart HA and reload the panel. On cabane.my, reload the website in the receiving browser. Keep the saved copy; no manual JSON edits are needed. |

### Where to report an issue

- **[Home Assistant integration](https://github.com/cabane-app/cabane-home-assistant/issues/new/choose):**
  HACS installation or updates, integration setup, the sidebar panel failing to
  load, and workspace storage or sync on Home Assistant.
- **[Cabane app](https://github.com/cabane-app/cabane/issues/new/choose):**
  floor plans, 3D rendering, furniture, models, lighting, device controls, and app
  feature requests. Use this repository even if you use Cabane inside Home Assistant.

If you are unsure, report it in the main Cabane repository and we can help route it.
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

The bundled frontend is built from [cabane-app/cabane](https://github.com/cabane-app/cabane).
HACS downloads this integration repository's complete `cabane.zip` release.

Integration code: [MIT license](LICENSE). Bundled Cabane frontend:
[PolyForm Noncommercial 1.0.0](https://github.com/cabane-app/cabane/blob/main/LICENSE),
with its own third-party notices included in `frontend/`.
