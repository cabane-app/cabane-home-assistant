from pathlib import Path
import tempfile
import unittest

from bundle_fixture import write_bundle


class VendorTests(unittest.TestCase):
    def test_replacing_bundle_removes_obsolete_assets(self):
        from scripts.vendor_frontend import vendor_frontend
        with tempfile.TemporaryDirectory() as temp:
            root = Path(temp)
            source, destination = root / "build", root / "integration/frontend"
            write_bundle(source)
            vendor_frontend(source, destination)
            (destination / "obsolete.js").write_text("old chunk")
            write_bundle(source, "two")
            vendor_frontend(source, destination)
            self.assertFalse((destination / "obsolete.js").exists())
            self.assertIn("two", (destination / "cabane-panel.js").read_text())

    def test_invalid_build_preserves_previous_bundle(self):
        from scripts.vendor_frontend import vendor_frontend
        with tempfile.TemporaryDirectory() as temp:
            root = Path(temp)
            source, destination = root / "build", root / "integration/frontend"
            write_bundle(source)
            vendor_frontend(source, destination)
            old = (destination / "cabane-panel.js").read_bytes()
            (source / "cabane-panel.js").write_text("invalid")
            with self.assertRaises(ValueError):
                vendor_frontend(source, destination)
            self.assertEqual((destination / "cabane-panel.js").read_bytes(), old)
