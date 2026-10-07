"""Build the HACS cabane.zip asset from integration code and a native panel build."""

import argparse
import json
from pathlib import Path
import sys
import zipfile

# Also support `python scripts/package_release.py` from any working directory.
ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
from custom_components.cabane.bundle import load_bundle  # noqa: E402


def build_release(integration: Path, frontend: Path, output: Path) -> None:
    """Write only a complete validated distribution, with files at the zip root."""
    bundle = load_bundle(frontend)
    payload = {}
    for path in sorted(integration.rglob("*")):
        relative = path.relative_to(integration)
        if relative.parts[0] == "frontend" or "__pycache__" in relative.parts:
            continue
        if path.is_symlink():
            raise ValueError("integration contains a symlink")
        if path.is_file() and path.suffix in (".py", ".json"):
            payload[relative.as_posix()] = path.read_bytes()
    for required in ("__init__.py", "manifest.json", "panel.py", "config_flow.py", "strings.json", "translations/en.json"):
        if required not in payload:
            raise ValueError(f"integration is missing {required}")
    for name in bundle.files:
        payload[f"frontend/{name}"] = (frontend / name).read_bytes()
    payload["LICENSE"] = (ROOT / "LICENSE").read_bytes()
    output.parent.mkdir(parents=True, exist_ok=True)
    temporary = output.with_suffix(".tmp")
    try:
        with zipfile.ZipFile(temporary, "w", compression=zipfile.ZIP_DEFLATED) as archive:
            for name, content in sorted(payload.items()):
                info = zipfile.ZipInfo(name)
                info.compress_type = zipfile.ZIP_DEFLATED
                info.external_attr = 0o100644 << 16
                archive.writestr(info, content)
        temporary.replace(output)
    finally:
        temporary.unlink(missing_ok=True)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--frontend", type=Path, default=ROOT / "custom_components/cabane/frontend")
    parser.add_argument("--output", type=Path, default=ROOT / "dist/cabane.zip")
    parser.add_argument("--version", help="Require the integration version to match this release tag (v prefix allowed)")
    args = parser.parse_args()
    integration = ROOT / "custom_components/cabane"
    try:
        if args.version:
            version = json.loads((integration / "manifest.json").read_text())["version"]
            if args.version.removeprefix("v") != version:
                raise ValueError("release tag does not match integration manifest version")
        build_release(integration, args.frontend, args.output)
    except (OSError, ValueError) as err:
        parser.exit(1, f"Cannot package release: {err}\n")
    print(f"Built {args.output}")


if __name__ == "__main__":
    main()
