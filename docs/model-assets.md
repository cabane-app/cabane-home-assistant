# Personal model asset protocol v1

Home Assistant's authenticated WebSocket registry owns every command. As with
workspaces, any signed-in user of this instance may read its shared assets.
Upload sessions are additionally scoped to the initiating user's ID. No tokens
or household service calls are introduced.

| Command | Input | Result |
| --- | --- | --- |
| `cabane/assets/capabilities` | None | `version: 1`, `chunk_bytes: 262144`, file/home byte limits |
| `cabane/assets/has` | `hashes: string[]` | `missing: string[]` |
| `cabane/assets/begin` | `sha256`, `byte_length` | `upload_id` |
| `cabane/assets/upload` | `upload_id`, sequential `offset`, base64 `data` | Next `offset` |
| `cabane/assets/finish` | `upload_id` | `sha256`, `byte_length` |
| `cabane/assets/get` | `sha256`, `offset` | Base64 `data`, `byte_length` |

Files use lowercase 64-character SHA-256 names, with at most 10 MiB per file and
256 KiB decoded bytes per block. Uploads write partial files first. Finish
checks total size, digest and the GLB 2.0 container header before publishing an
immutable file. Retries may create a new upload; equal hashes deduplicate. Invalid
hashes, offsets, blocks, sessions and cross-user upload attempts return
`invalid_asset`. Disk errors return `asset_storage_error`.

Downloads verify each file's SHA-256 once per process and again when its file
metadata changes. Verification streams the file in bounded blocks; subsequent
download requests seek to the requested offset and read at most 256 KiB. The
verification cache stores metadata only, not GLB contents.

Workspace documents retain their existing 5 MiB limit and expected-version
contract. `customModels[].asset` references in both draft and published slices
must have consistent sizes, total at most 100 MiB of distinct files, and resolve
to verified files before `async_save`. Asset verification and document commit
hold the shared asset lock, excluding cleanup. Missing/corrupt assets return
`invalid_asset`; stale revisions return `conflict`. Transfer or storage failures
never replace the last workspace document. Documents without custom models
remain backward compatible.

Cleanup runs hourly. It retains references from every stored draft and published
document. A persistent orphan ledger starts a 24-hour delay when a file first
becomes unreferenced; publishing a reference clears that timer. Abandoned partial
uploads expire after 24 hours, including after restart. A corrupt workspace
document suspends deletion so recovery assets are retained.

The frontend probes capabilities for GLB homes, uploads missing files first,
then writes the lightweight document. Downloads verify bytes and SHA-256 before
restoring assets and the local record transactionally. Session replacement or HA
origin changes cancel stale transfer work. Older integrations return
`unknown_command`; the frontend requests an update without changing the saved
copy. Publication and deployment are separate maintainer actions.
