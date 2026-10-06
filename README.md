# Cabane for Home Assistant

Save your [Cabane](https://github.com/julien-meichelbeck/smart-home-3d) home on Home Assistant and open it from another browser or device. Save and load manually, or turn on automatic sync.

This is an optional custom integration. Cabane still works with browser storage without it.

## Installation

Choose **HACS** or **manual installation**, then enable the integration below.

### With HACS

1. Open HACS in Home Assistant, open its menu, and choose **Custom repositories**.
2. Add `https://github.com/cabane-app/cabane-home-assistant` with the type **Integration**.
3. Find **Cabane** in HACS and download it.
4. Continue with **Enable the integration** below.

This repository is added manually to HACS; it is not listed in the default catalog. See [HACS custom repository help](https://hacs.dev/docs/faq/custom_repositories/) if the menu differs in your version.

### Manual installation

1. [Download this repository](https://github.com/cabane-app/cabane-home-assistant/archive/refs/heads/main.zip) and unzip it.
2. Find your Home Assistant configuration directory, the one containing `configuration.yaml`. On Home Assistant OS this is usually `/config`, accessible through a file editor or network share.
3. Copy the **cabane** folder from `custom_components` into your Home Assistant `custom_components` directory. Create `custom_components` if needed.

The final structure must be:

```text
config/
├── configuration.yaml
└── custom_components/
    └── cabane/
        ├── __init__.py
        ├── manifest.json
        ├── storage.py
        └── websocket.py
```

### Enable the integration

1. Add this line at the top level of `configuration.yaml` (no indentation):

   ```yaml
   cabane:
   ```

2. Check your configuration and **restart Home Assistant completely**. Reloading YAML is not enough.
3. In Cabane, open your workspace’s **Home Assistant** page from its menu. You can also open it from **Connection settings** at the bottom of Connect.
4. Enter your Home Assistant URL and sign in.
5. Under **Save across devices**, click **Enable HA storage**, then **Save**.

This version is configured with YAML. You do not need to find Cabane in “Add integration”. For help editing the file, see [Home Assistant configuration](https://www.home-assistant.io/docs/configuration/).

## Use it

- **Save** uploads the whole workspace: published home, draft, and device mappings.
- **Load** brings that workspace’s saved copy into this browser. Cabane downloads the current browser copy before replacing it.
- **Sync automatically** keeps changes in sync while the workspace is open. Save once before enabling it. Offline edits stay in the browser until it reconnects.
- **Delete saved copy** removes the Home Assistant copy and turns off sync. Your browser copy stays available.

On another browser or device, open **Workspaces → Import → From Home Assistant**, sign in to the same instance, and choose **Load workspace**. The home appears alongside your other workspaces, with a small storage indicator.

If both copies changed, Cabane asks which one to keep. It does not silently overwrite conflicting edits.

## Sharing and privacy

All signed-in users of this Home Assistant instance can read, change, or delete its saved Cabane workspaces. Use separate workspaces for independent homes.

Workspace backups contain household area/entity mappings. They do **not** contain OAuth credentials or tokens. The integration stores data locally in Home Assistant’s `.storage` directory and makes no external network requests. Keep Home Assistant backups that include the configuration directory; cross-device sync is not a replacement for backups.

## Troubleshooting

| Problem | What to do |
| --- | --- |
| Cabane asks you to install the integration | Confirm the folder structure and `cabane:` line, restart Home Assistant, then click **Check again** in Cabane. |
| Sign-in fails | Use HTTPS for both Cabane and Home Assistant. Local development over HTTP works only when both addresses are loopback on the same machine. Allow the sign-in popup. |
| Integration fails to load | Look for `cabane` under Home Assistant’s system logs. Check that all four integration files are present. |
| Load is disabled | Save this workspace once. To load a different saved workspace, use the Workspaces Import flow. |
| Changes are not appearing on another device | Open the same workspace and enable auto-sync in that browser, or use **Load**. |

If you need help, [open an issue](https://github.com/cabane-app/cabane-home-assistant/issues). Do not attach credentials or private workspace backups.

## Development

```sh
python -m unittest discover -s tests -v
```

Tests cover document validation, storage version conflicts, and WebSocket command registration with stubbed Home Assistant APIs. They do not replace testing installation on a running Home Assistant instance.

Licensed under the [MIT license](LICENSE).
