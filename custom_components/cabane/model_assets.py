"""Immutable SHA-256 GLB files and bounded, authenticated block transfers."""

import asyncio
import base64
import hashlib
import json
import os
from pathlib import Path
import re
import struct
import time
import uuid

MAX_FILE_BYTES = 10 * 1024 * 1024
MAX_HOME_BYTES = 100 * 1024 * 1024
CHUNK_BYTES = 256 * 1024
ORPHAN_DELAY = 24 * 60 * 60
SHA256 = re.compile(r"^[a-f0-9]{64}$")


class AssetError(Exception):
    """An invalid, missing or incomplete GLB transfer."""


def document_references(document):
    """Return a house's distinct draft + published references, including its library."""
    try:
        value = json.loads(document)
    except (TypeError, ValueError) as exc:
        raise AssetError("Invalid project document.") from exc
    record = value.get("record") if isinstance(value, dict) else None
    if not isinstance(record, dict):
        raise AssetError("Invalid project document.")
    references = {}
    for project in (record.get("draft"), record.get("published")):
        if not isinstance(project, dict):
            raise AssetError("Invalid project document.")
        models = project.get("customModels", [])
        if not isinstance(models, list):
            raise AssetError("Invalid custom model catalogue.")
        for model in models:
            if not isinstance(model, dict) or not isinstance(model.get("asset"), dict):
                raise AssetError("Invalid GLB reference.")
            asset = model["asset"]
            sha, size = asset.get("sha256"), asset.get("byteLength")
            if (
                not isinstance(sha, str)
                or not SHA256.fullmatch(sha)
                or type(size) is not int
                or not 0 < size <= MAX_FILE_BYTES
            ):
                raise AssetError("Invalid GLB reference.")
            if sha in references and references[sha] != size:
                raise AssetError("Inconsistent GLB sizes.")
            references[sha] = size
    if sum(references.values()) > MAX_HOME_BYTES:
        raise AssetError("A house may contain at most 100 MiB of distinct GLB assets.")
    return references


class ModelAssetStore:
    def __init__(self, directory, clock=time.time):
        self.directory = Path(directory)
        self.lock = asyncio.Lock()
        self._uploads = {}
        self._verified = {}
        self._clock = clock

    def _path(self, sha):
        if not isinstance(sha, str) or not SHA256.fullmatch(sha):
            raise AssetError("Invalid GLB hash.")
        path = self.directory / f"{sha}.glb"
        if path.is_symlink():
            raise AssetError("Invalid GLB storage entry.")
        return path

    def _verify(self, sha):
        """Hash a new or changed file once, without retaining its contents."""
        path = self._path(sha)
        if not path.exists():
            raise AssetError(
                "Missing GLB asset. Retry the upload before saving the home."
            )
        stat = path.stat()
        stamp = (stat.st_mtime_ns, stat.st_ctime_ns, stat.st_size, stat.st_ino)
        if stat.st_size > MAX_FILE_BYTES:
            raise AssetError("GLB storage is damaged.")
        if self._verified.get(sha) != stamp:
            digest = hashlib.sha256()
            with path.open("rb") as stream:
                while block := stream.read(CHUNK_BYTES):
                    digest.update(block)
            if digest.hexdigest() != sha:
                raise AssetError("GLB integrity check failed.")
            self._verified[sha] = stamp
        return path, stat.st_size

    async def has(self, hashes):
        if not isinstance(hashes, list) or len(hashes) > 1024:
            raise AssetError("Invalid asset list.")
        async with self.lock:

            def missing():
                result = []
                for sha in hashes:
                    path = self._path(sha)
                    if not path.exists():
                        result.append(sha)
                    else:
                        self._verify(sha)
                return {"missing": result}

            return await asyncio.to_thread(missing)

    async def begin(self, sha, size, owner):
        if type(size) is not int or not 0 < size <= MAX_FILE_BYTES:
            raise AssetError("GLB files must be at most 10 MiB.")
        async with self.lock:
            self._path(sha)
            # Expired partial transfers are not required by any document.
            now = self._clock()
            for key, entry in list(self._uploads.items()):
                if now - entry["updated"] >= ORPHAN_DELAY:
                    await asyncio.to_thread(entry["path"].unlink, missing_ok=True)
                    del self._uploads[key]
            if (
                sum(entry["size"] for entry in self._uploads.values()) + size
                > MAX_HOME_BYTES
            ):
                raise AssetError("Too many unfinished uploads. Finish or retry later.")
            upload_id = uuid.uuid4().hex
            path = self.directory / "uploads" / upload_id
            await asyncio.to_thread(path.parent.mkdir, parents=True, exist_ok=True)
            await asyncio.to_thread(path.write_bytes, b"")
            self._uploads[upload_id] = {
                "sha": sha,
                "size": size,
                "path": path,
                "offset": 0,
                "owner": owner,
                "updated": now,
            }
            return {"upload_id": upload_id}

    def _upload(self, upload_id, owner):
        entry = self._uploads.get(upload_id)
        if not entry or entry["owner"] != owner:
            raise AssetError("Upload expired. Retry synchronization.")
        return entry

    async def upload(self, upload_id, offset, data, owner):
        if not isinstance(data, str) or len(data) > ((CHUNK_BYTES + 2) // 3) * 4:
            raise AssetError("Upload blocks must fit 256 KiB.")
        try:
            block = base64.b64decode(data, validate=True)
        except (ValueError, TypeError) as exc:
            raise AssetError("Invalid upload block.") from exc
        if not 0 < len(block) <= CHUNK_BYTES or type(offset) is not int or offset < 0:
            raise AssetError("Invalid upload block.")
        async with self.lock:
            entry = self._upload(upload_id, owner)
            if offset != entry["offset"] or offset + len(block) > entry["size"]:
                raise AssetError("Unexpected upload offset. Retry synchronization.")

            def append():
                with entry["path"].open("ab") as stream:
                    stream.write(block)

            await asyncio.to_thread(append)
            entry["offset"] += len(block)
            entry["updated"] = self._clock()
            return {"offset": entry["offset"]}

    async def finish(self, upload_id, owner):
        async with self.lock:
            entry = self._upload(upload_id, owner)
            if entry["offset"] != entry["size"]:
                raise AssetError("The GLB upload is incomplete.")

            def publish():
                data = entry["path"].read_bytes()
                if hashlib.sha256(data).hexdigest() != entry["sha"]:
                    raise AssetError("GLB integrity check failed.")
                if len(data) < 20 or struct.unpack_from("<III", data) != (
                    0x46546C67,
                    2,
                    len(data),
                ):
                    raise AssetError("Only GLB 2.0 files are accepted.")
                target = self._path(entry["sha"])
                if target.exists():
                    self._verify(entry["sha"])
                    entry["path"].unlink()
                else:
                    os.replace(entry["path"], target)

            await asyncio.to_thread(publish)
            del self._uploads[upload_id]
            return {"sha256": entry["sha"], "byte_length": entry["size"]}

    async def get(self, sha, offset):
        if type(offset) is not int or offset < 0:
            raise AssetError("Invalid download offset.")
        async with self.lock:

            def read_chunk():
                path, size = self._verify(sha)
                if offset >= size:
                    raise AssetError("Invalid download offset.")
                with path.open("rb") as stream:
                    stream.seek(offset)
                    block = stream.read(CHUNK_BYTES)
                if len(block) != min(CHUNK_BYTES, size - offset):
                    raise AssetError("GLB storage is damaged.")
                return block, size

            block, size = await asyncio.to_thread(read_chunk)
            return {
                "offset": offset,
                "byte_length": size,
                "data": base64.b64encode(block).decode("ascii"),
            }

    async def verify_locked(self, references):
        """Caller holds asset lock through document commit to exclude cleanup."""

        def verify():
            for sha, size in references.items():
                _, actual_size = self._verify(sha)
                if actual_size != size:
                    raise AssetError("GLB size does not match the home document.")
            ledger_path = self.directory / "orphans.json"
            try:
                ledger = json.loads(ledger_path.read_text())
            except (OSError, ValueError):
                ledger = {}
            if isinstance(ledger, dict) and any(sha in ledger for sha in references):
                ledger = {
                    sha: since for sha, since in ledger.items() if sha not in references
                }
                temporary = self.directory / "orphans.tmp"
                temporary.write_text(json.dumps(ledger))
                os.replace(temporary, ledger_path)

        await asyncio.to_thread(verify)

    async def cleanup(self, referenced):
        async with self.lock:

            def collect():
                self.directory.mkdir(parents=True, exist_ok=True)
                ledger_path = self.directory / "orphans.json"
                try:
                    ledger = json.loads(ledger_path.read_text())
                    if not isinstance(ledger, dict):
                        ledger = {}
                except (OSError, ValueError):
                    ledger = {}
                now, next_ledger = self._clock(), {}
                for path in self.directory.glob("*.glb"):
                    sha = path.stem
                    if (
                        not SHA256.fullmatch(sha)
                        or path.is_symlink()
                        or sha in referenced
                    ):
                        continue
                    since = ledger.get(sha, now)
                    if not isinstance(since, (int, float)) or since > now:
                        since = now
                    if now - since >= ORPHAN_DELAY:
                        path.unlink()
                    else:
                        next_ledger[sha] = since
                temporary = self.directory / "orphans.tmp"
                temporary.write_text(json.dumps(next_ledger))
                os.replace(temporary, ledger_path)
                for path in (self.directory / "uploads").glob("*"):
                    if (
                        not path.is_symlink()
                        and now - path.stat().st_mtime >= ORPHAN_DELAY
                    ):
                        path.unlink()

            await asyncio.to_thread(collect)
