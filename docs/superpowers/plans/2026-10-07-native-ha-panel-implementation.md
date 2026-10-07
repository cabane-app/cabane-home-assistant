# Native HA panel implementation

The user explicitly requested completion of the native frontend and borrowed
runtime, using the already agreed bundled HACS distribution. This extends the
integration-side work; manual www/panel_custom setup is superseded.

- [x] Add explicit host-session context and a borrowed runtime that never owns
  authentication or transport teardown; preserve standalone runtime tests.
- [x] Select the current HA instance explicitly, handle foreign workspace origins,
  detach locally, reuse host storage import, and keep demo isolated.
- [x] Add a native custom element with shadow styles/portals, memory routing,
  host-menu navigation, local public assets and isolated DOM event handling.
- [x] Build a versioned frontend artifact with checksums and exact committed source
  revision; disallow development builds in integration release packaging.
- [x] Exercise native browser flow with a synthetic host connection, including
  editor, import, storage, reconnect, remount and local asset loading.
- [x] Complete frontend regression suite, standalone production build, source and
  boundary policy, representative scale check, and final review.
- [x] Vendor the committed production artifact into the HA integration, package
  cabane.zip, verify installation tree and integration suite, update documentation.

No live household data, credentials or devices are accessed. Real iOS Companion
and owner HA installation acceptance cannot be claimed from the local fixture.

Verification: 965 frontend tests, 35 integration tests, type/boundary/source checks,
standalone production build, furnishing checks and representative scale passed.
Native browser fixture passed repeated remounts, local nested assets, session
ownership, storage, routing and panel-responsive sizing. Clean frontend source:
`64966730d9b34e636dc7d8091121c7f301e87ad5`. The production artifact is vendored and
`dist/cabane.zip` was extracted and revalidated as an installation tree.
