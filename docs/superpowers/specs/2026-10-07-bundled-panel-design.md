# Bundled native panel distribution

The authorized direction is one HACS integration containing workspace storage and
all native frontend assets. No www copy, panel_custom YAML, separate server, or
second sign-in. This replaces the manual distribution section of the frontend
proposal at smart-home-3d commit 5ef07ff.

The integration owns setup and distribution; the frontend owns rendering and the
borrowed connection. Add a single-instance UI config flow and import existing
`cabane:` YAML automatically. Initialize existing storage commands once per HA
process, retaining their data and behavior through panel unload/reload. Removing
the entry removes its sidebar panel, not saved workspaces. Remaining YAML imports
it again on restart, so users should remove that line after migration.

Validate a self-contained native artifact before panel registration. Serve it at
`/cabane_static/<manifest-sha256>/`, register `cabane-panel` at sidebar path
`cabane`, and reject path collisions without replacing another panel. Register
static paths once per process; HA does not offer static route unregistration.
Only public application files may appear there. Unload removes the owned panel;
static files and storage commands persist until restart. Updates require a full
HA restart and client reload.

Artifact contract v1 lives in docs/frontend-artifact.md. Release packaging must
verify every file and reject missing artifacts, a standalone web build, changed
hashes, symlinks, traversal, and undeclared files. HACS consumes a release zip
containing the integration's files at its root. Releases are assembled from
reviewed vendored frontend files in the tagged integration tree, never downloaded
at HA startup. No fabricated frontend or placeholder panel is a release candidate.

The actual native frontend and host-session adapter are absent from the inspected
frontend repository. This change provides the integration side and enforceable
packaging, not that missing implementation or real-device acceptance. Existing
storage is usable even when a development checkout lacks frontend assets.
