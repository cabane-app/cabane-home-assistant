import json
from pathlib import Path
import tempfile
import unittest
import zipfile

from bundle_fixture import write_bundle


class BundleTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name) / "frontend"
        self.metadata = write_bundle(self.root)

    def load(self):
        from custom_components.cabane.bundle import load_bundle
        return load_bundle(self.root)

    def save_manifest(self):
        (self.root / "manifest.json").write_text(json.dumps(self.metadata))

    def test_native_bundle_gets_versioned_local_entrypoint(self):
        bundle = self.load()
        self.assertRegex(bundle.url_path, r"^/cabane_static/[a-f0-9]{64}$")
        self.assertEqual(bundle.module_url, bundle.url_path + "/cabane-panel.js")
        self.assertEqual(bundle.directory, self.root)

    def test_update_changes_asset_namespace(self):
        previous = self.load().url_path
        write_bundle(self.root, "two")
        self.assertNotEqual(self.load().url_path, previous)

    def test_missing_artifact_is_actionable(self):
        (self.root / "manifest.json").unlink()
        with self.assertRaisesRegex(ValueError, "native frontend bundle"):
            self.load()

    def test_rejects_uncommitted_development_build(self):
        self.metadata["development"] = True
        self.save_manifest()
        with self.assertRaisesRegex(ValueError, "development"):
            self.load()

    def test_rejects_standalone_web_artifact(self):
        self.metadata["kind"] = "web"
        self.save_manifest()
        with self.assertRaises(ValueError):
            self.load()

    def test_rejects_corrupt_or_missing_files(self):
        asset = self.root / "assets/chunk.js"
        asset.write_text("corrupted")
        with self.assertRaises(ValueError):
            self.load()
        asset.unlink()
        with self.assertRaises(ValueError):
            self.load()

    def test_rejects_unlisted_files(self):
        (self.root / "private.json").write_text('{}')
        with self.assertRaises(ValueError):
            self.load()

    def test_rejects_symlinks_including_directories(self):
        outside = Path(self.temp.name) / "external"
        outside.mkdir()
        (self.root / "linked").symlink_to(outside, target_is_directory=True)
        with self.assertRaises(ValueError):
            self.load()

    def test_rejects_unsafe_asset_names(self):
        for name in ("../private", "/absolute", "assets/../private", "a\\b", "a?x", "a#x", "a//b"):
            with self.subTest(name=name):
                self.metadata["files"] = {name: "a" * 64}
                self.save_manifest()
                with self.assertRaises(ValueError):
                    self.load()

    def test_rejects_invalid_manifest_shapes(self):
        for value in ([], None, {**self.metadata, "files": []},
                      {**self.metadata, "schema_version": True},
                      {**self.metadata, "source_commit": "main"},
                      {**self.metadata, "entrypoint": "index.html"}):
            with self.subTest(value=value):
                (self.root / "manifest.json").write_text(json.dumps(value))
                with self.assertRaises(ValueError):
                    self.load()

    def test_release_archive_installs_and_updates_complete_asset_tree(self):
        from scripts.package_release import build_release
        integration = Path(__file__).resolve().parents[1] / "custom_components/cabane"
        archive = Path(self.temp.name) / "cabane.zip"
        build_release(integration, self.root, archive)
        with zipfile.ZipFile(archive) as package:
            names = package.namelist()
            self.assertIn("__init__.py", names)
            self.assertIn("manifest.json", names)
            self.assertIn("frontend/assets/font.woff2", names)
            self.assertFalse(any("__pycache__" in name or name.startswith("custom_components/") for name in names))
            install = Path(self.temp.name) / "install"
            package.extractall(install)
        from custom_components.cabane.bundle import load_bundle
        old_url = load_bundle(install / "frontend").url_path
        write_bundle(self.root, "two")
        build_release(integration, self.root, archive)
        with zipfile.ZipFile(archive) as package:
            package.extractall(install)
        self.assertNotEqual(load_bundle(install / "frontend").url_path, old_url)

    def test_release_refuses_missing_bundle_without_creating_archive(self):
        from scripts.package_release import build_release
        archive = Path(self.temp.name) / "cabane.zip"
        with self.assertRaises(ValueError):
            build_release(Path("custom_components/cabane"), self.root / "missing", archive)
        self.assertFalse(archive.exists())
