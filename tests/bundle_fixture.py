"""Synthetic distribution fixtures, never used as a real Cabane frontend."""
import hashlib
import json


def write_bundle(root, marker="one"):
    root.mkdir(parents=True, exist_ok=True)
    files = {
        "cabane-panel.js": f'import "./assets/chunk.js"; // {marker}\n'.encode(),
        "assets/chunk.js": b'export const fixture = true;\n',
        "assets/panel.css": b'@font-face { src: url("./font.woff2"); }\n',
        "assets/font.woff2": b'synthetic-font',
    }
    for name, content in files.items():
        path = root / name
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_bytes(content)
    metadata = {
        "schema_version": 1,
        "kind": "cabane-native-ha-panel",
        "element": "cabane-panel",
        "entrypoint": "cabane-panel.js",
        "source_commit": "a" * 40,
        "files": {name: hashlib.sha256(content).hexdigest() for name, content in files.items()},
    }
    (root / "manifest.json").write_text(json.dumps(metadata), encoding="utf-8")
    return metadata
