# Native frontend artifact and release contract (v1)

## Current delivery status

The native custom element, borrowed-connection runtime, local asset build, and
integration consumer are implemented. The complete real build is vendored under
`custom_components/cabane/frontend/`; its `manifest.json` records the exact clean
frontend source commit and every asset digest. Standalone `dist` is not accepted.

Automated frontend regressions and an isolated browser host exercise native
rendering and session ownership. Disposable HA installation/HACS updates and real
iOS Companion checks below are still required before publishing a release.

## Producer contract

The frontend repository provides **`npm run build:panel`**, outputting `apps/web/dist-panel/` with:

```text
dist-panel/
  manifest.json
  cabane-panel.js
  assets/                 # all dependent chunks, CSS, fonts, images, workers, etc.
```

The entry is an ES module that defines the `cabane-panel` custom element. HA
assigns `hass`, `panel`, `narrow`, and `route` properties. Render the actual Cabane
workspace application using the explicit host-session adapter. No iframe,
standalone HTML bootstrap, public-site analytics, runtime CDN imports, or service
worker registration. Registration must be safe if the module is loaded again.

Use a relative Vite base (`./`) with asset URLs resolved from the importing
module, or `new URL(relativePath, import.meta.url)`. CSS URLs resolve relative to
the stylesheet. Do not use `/assets`, `/local`, `/cabane`, or the browser's current
location as the asset base. Eager and lazy chunks, styles, fonts, worker imports,
icons and catalog data must load from the same supplied directory at arbitrary
URL depth. JS must install its CSS into the panel shadow root (a JS library build
with an unreferenced sidecar CSS file is insufficient). Use scoped overlay/portal
containers and a memory router; preserve HA's URL, menu and navigation. Avoid
Cabane's global document zoom handlers. HA retains safe-area padding.

Write UTF-8 JSON metadata after the final build:

| Field | Required value |
| --- | --- |
| `schema_version` | integer `1` |
| `kind` | `cabane-native-ha-panel` |
| `element` | `cabane-panel` |
| `entrypoint` | `cabane-panel.js` |
| `source_commit` | full lowercase 40-character frontend Git commit SHA |
| `files` | object mapping every relative asset filename to its SHA-256 hex digest |

The `files` inventory includes all emitted files except `manifest.json`. No
symlinks, absolute paths, traversal, query strings, fragments, or undeclared files.
Keep licenses for bundled dependencies in the inventory. The directory is public
static application code: do not include household data, tokens, backups, build
environment files, or private source maps. The manifest's SHA-256 becomes the URL
namespace for the **whole tree**, so changed metadata or asset digests invalidate
entry and dependency caches together. Digests establish integrity and provenance
metadata; they do not prove frontend semantics or substitute for the tests below.

## Host-session guarantees

- Pass a typed `{ connection, origin }` adapter explicitly into the engine;
  use the HA page's normalized origin. Do not retain the whole `hass` object.
- Borrow the existing connection. Never extract, persist, copy or forward host
  tokens; never invoke OAuth, open another authenticated socket, close the host
  socket, or revoke credentials. Leave standalone OAuth ownership unchanged.
- Dispose only Cabane subscriptions/listeners/pending work on unmount. Repeated
  assignments of the same connection must not restart the runtime. Safely handle
  host replacement, disconnect/reconnect, Strict Mode and late stale results.
- Keep demo fully simulated. Select the host explicitly for an unconfigured home;
  auto-attach only to homes with the same normalized origin. A foreign instance
  requires a clear mismatch and explicit connection change. Detach affects only
  Cabane, not HA's session. Apply the same rules to import/open flows.
- Preserve guarded controls, registry/entity normalization, authenticated camera
  and storage operations, and the existing HTTPS/paired-loopback transport policy.
  Merely mounting or refreshing must never dispatch device controls.
- Keep namespaced browser persistence and private backup/HA storage imports.
  Homes stored under cabane.my's origin do not migrate automatically to HA.

## Maintainer build and release procedure

Use the implemented producer and complete the release checks:

1. Build from a clean, reviewed, immutable frontend commit using `npm ci` and
   `npm run build:panel` in that repository. Ensure the metadata identifies that
   exact source revision. Run `npm run verify`, `npm run fixture:verify:scale`,
   and `node scripts/verify-panel.mjs`. A dirty development build requires
   `CABANE_PANEL_ALLOW_DIRTY=1` and is rejected by the integration/release tools.
2. In this integration repository, run:

   ```sh
   python3 scripts/vendor_frontend.py /path/to/smart-home-3d/apps/web/dist-panel
   python3 -m unittest discover -s tests -v
   python3 scripts/package_release.py --version v0.2.0
   ```

   Vendoring replaces the complete frontend tree, dropping old chunks. Review
   and commit `custom_components/cabane/frontend/` with the integration changes.
   These are maintainer steps; end users never copy frontend assets.
3. Test the resulting `dist/cabane.zip` on a disposable HA instance. The archive
   has integration files at its root, including `frontend/` and translations;
   it must be extracted into `custom_components/cabane/`, not `/config`.
4. Tag that integration commit with its manifest version. The tag workflow runs
   tests, verifies the native bundle, checks tag/version agreement, and creates
   a **draft** GitHub release containing `cabane.zip`. Publish only after the
   acceptance checks. HACS is configured with `zip_release`, `filename` and
   `hide_default_branch` so users receive the full archive rather than a partial
   source checkout. Do not publish GitHub's source archive as the install asset.

For a local packaging check without vendoring, use
`python3 scripts/package_release.py --frontend /path/to/dist-panel --output /tmp/cabane.zip`.
HA never downloads frontend assets during startup. An update needs a full HA
restart followed by a browser/Companion frontend reload. Hot-swapping assets while
HA is running is unsupported: its existing static route still points to the old
installation directory. Remove old manual `panel_custom` entries or external
iframe dashboards yourself when adopting the native panel; the integration does
not modify user dashboards.

## Acceptance matrix

| Layer | Covered here | Still required before native release |
| --- | --- | --- |
| Artifact | digests, safe inventory, real producer, nested-path browser loading | release-source review |
| Packaging | zip extraction, update namespace, stale vendor removal, missing/development-build gate | HACS download/install/update |
| HA lifecycle | API doubles: register, unload/reload, retry, collision ownership | disposable HA setup, YAML migration, removal/restart |
| Storage | validation/conflicts/WS tests; borrowed frontend import/save browser fixture | real HA save/load/import |
| Session | no token/OAuth/close; replacement, reconnect, stale cleanup, native migration isolation | actual HA host lifecycle |
| UI | real browser library/editor/demo/navigation; focused mismatch, camera and guarded-control tests | disposable HA browser acceptance |
| Standalone | auth, privacy, transport, production build, scale regressions | release smoke check |
| iOS | no real-device testing | owner-device Companion open/import, navigate away/back, reconnect, explicit control |

The earlier null-`window.opener` OAuth callback reproduction was a local mock,
not an iPhone test. Do not label it or this integration test suite as real iOS
acceptance. Do not access live household registries/devices for these checks.

## Upstream APIs

The implementation uses HA's
[async static-path API](https://developers.home-assistant.io/blog/2024/06/18/async_register_static_paths/),
[custom panel registration](https://github.com/home-assistant/core/blob/dev/homeassistant/components/panel_custom/__init__.py),
[config flows](https://developers.home-assistant.io/docs/core/integration/config_flow/),
and [HACS release settings](https://www.hacs.xyz/docs/publish/start/).
