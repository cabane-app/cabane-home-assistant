"""Validate the public, self-contained native panel distribution (no HA imports)."""

from dataclasses import dataclass
import hashlib
import json
from pathlib import Path
import re


@dataclass(frozen=True)
class Bundle:
    directory: Path
    revision: str
    files: tuple[str, ...]

    @property
    def url_path(self):
        return f"/cabane_static/{self.revision}"

    @property
    def module_url(self):
        return f"{self.url_path}/cabane-panel.js"


def load_bundle(directory: Path) -> Bundle:
    """Verify every asset before serving or releasing it; never accept a web build."""
    try:
        return _load_bundle(directory)
    except (OSError, ValueError, TypeError) as err:
        raise ValueError(
            "Cabane native frontend bundle is missing or invalid. "
            "Install a complete Cabane integration release and restart Home Assistant. "
            f"({err})"
        ) from err


def _load_bundle(directory):
    if directory.is_symlink():
        raise ValueError("bundle directory is a symlink")
    raw = (directory / "manifest.json").read_bytes()
    manifest = json.loads(raw)
    if not isinstance(manifest, dict):
        raise ValueError("manifest must be an object")
    if manifest.get("development"):
        raise ValueError("development builds cannot be installed or released")
    expected = {
        "schema_version": 1,
        "kind": "cabane-native-ha-panel",
        "element": "cabane-panel",
        "entrypoint": "cabane-panel.js",
    }
    if any(type(manifest.get(key)) is not type(value) or manifest[key] != value
           for key, value in expected.items()):
        raise ValueError("unsupported native panel contract")
    if not re.fullmatch(r"[a-f0-9]{40}", str(manifest.get("source_commit", ""))):
        raise ValueError("source_commit must identify the exact frontend source")
    files = manifest.get("files")
    if not isinstance(files, dict) or "cabane-panel.js" not in files:
        raise ValueError("files must include cabane-panel.js")
    for name, digest in files.items():
        if (not re.fullmatch(r"[A-Za-z0-9_@][A-Za-z0-9_@.+/-]*", name)
                or any(part in ("", ".", "..") for part in name.split("/"))
                or name == "manifest.json"):
            raise ValueError("unsafe asset path")
        if not re.fullmatch(r"[a-f0-9]{64}", str(digest)):
            raise ValueError("invalid asset digest")
    actual = set()
    for path in directory.rglob("*"):
        if path.is_symlink():
            raise ValueError("symlinks are not allowed")
        if path.is_file():
            actual.add(path.relative_to(directory).as_posix())
        elif not path.is_dir():
            raise ValueError("non-regular asset")
    if actual != set(files) | {"manifest.json"}:
        raise ValueError("asset inventory differs from manifest")
    for name, digest in files.items():
        if hashlib.sha256((directory / name).read_bytes()).hexdigest() != digest:
            raise ValueError(f"asset checksum mismatch: {name}")
    return Bundle(directory, hashlib.sha256(raw).hexdigest(), tuple(sorted(actual)))
