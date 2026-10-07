"""Vendor an already-built native frontend artifact for a reviewed integration release."""

import argparse
from pathlib import Path
import shutil
import sys
import tempfile

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
from custom_components.cabane.bundle import load_bundle  # noqa: E402


def vendor_frontend(source: Path, destination: Path) -> None:
    """Validate before replacing the entire tree so old chunks never accumulate."""
    load_bundle(source)
    destination.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(dir=destination.parent, prefix=".cabane-build-") as temp:
        staged = Path(temp) / "frontend"
        shutil.copytree(source, staged)
        load_bundle(staged)
        previous = Path(temp) / "previous"
        if destination.exists():
            destination.rename(previous)
        try:
            staged.rename(destination)
        except OSError:
            if previous.exists():
                previous.rename(destination)
            raise


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("frontend", type=Path)
    args = parser.parse_args()
    try:
        vendor_frontend(args.frontend, ROOT / "custom_components/cabane/frontend")
    except (OSError, ValueError) as err:
        parser.exit(1, f"Cannot vendor frontend: {err}\n")
    print("Vendored native frontend. Review and commit it with the integration release.")


if __name__ == "__main__":
    main()
