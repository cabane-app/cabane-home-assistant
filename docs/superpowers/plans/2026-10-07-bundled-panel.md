# Bundled panel implementation plan

> Execution: inline in the authorized integration chat, using test-first changes.

**Goal:** Support a HACS-delivered native Cabane panel without manual asset setup.
**Architecture:** Single UI entry plus legacy YAML import; process-owned workspace
storage and versioned static assets; entry-owned panel registration.
**Tech stack:** Python, HA config entries/frontend/http, unittest, GitHub Actions.
**Spec:** ../specs/2026-10-07-bundled-panel-design.md

## Constraints and review focus

- Preserve workspace storage, including across unload and missing frontend builds.
- No token handling, household access, deployment, or frontend stand-in.
- Reject duplicate panels/entries; never remove someone else's panel.
- Failed setup must be retryable without duplicate HTTP routes.
- Release updates must change all asset URLs and remove obsolete packaged files.
- Hash metadata proves package integrity, not native session correctness.

## Tasks

- [x] Artifact validation and release packaging: write failing tests using tiny
  synthetic asset trees; implement `load_bundle(Path)` and
  `build_release(Path, Path, Path)`; verify nested assets, changes, missing files,
  symlinks, path traversal, standalone rejection, and zip install/update layout.
- [x] Lifecycle: write failing tests against HA boundary doubles; implement
  async setup/unload using modern static-path and panel APIs; verify reload,
  conflict, missing bundle, failed registration retry, storage continuity.
- [x] Config flow: write failing user/import/deduplication tests; add flow,
  manifest metadata, English strings and YAML import; verify no credentials.
- [x] Document exact artifact/build/release contract, current frontend blocker,
  owner installation/update/import instructions and acceptance matrix; add
  gated release workflow and run full unittest suite and packaging checks.

## Verification outcome

The initial integration phase passed 34 tests and correctly rejected absent
frontend assets. The follow-on [native implementation](2026-10-07-native-ha-panel-implementation.md)
completes the frontend producer and borrowed runtime, vendors the real artifact,
and adds development-build rejection (35 integration tests total). Real HA install
and iOS Companion acceptance remain separate release checks.
