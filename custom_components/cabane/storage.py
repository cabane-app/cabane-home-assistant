"""Versioned, instance-wide Cabane workspace documents."""

import asyncio
import copy
import json
import re

MAX_DOCUMENT_BYTES = 5 * 1024 * 1024
HOME_ID = re.compile(r"^[A-Za-z0-9_-]{1,128}$")


class ConflictError(Exception):
    """The caller's version is stale."""


class InvalidDocumentError(Exception):
    """The supplied document cannot be stored."""


class CorruptStorageError(Exception):
    """Persisted data is damaged and must not be overwritten."""


def validate_document(home_id: str, document: str) -> None:
    if not isinstance(home_id, str) or not HOME_ID.fullmatch(home_id) or not isinstance(document, str):
        raise InvalidDocumentError()
    if len(document.encode("utf-8")) > MAX_DOCUMENT_BYTES:
        raise InvalidDocumentError()
    try:
        value = json.loads(document)
    except (ValueError, TypeError) as exc:
        raise InvalidDocumentError() from exc
    if not isinstance(value, dict) or value.get("format") != "cabane-workspace" or value.get("version") != 1:
        raise InvalidDocumentError()
    if set(value) != {"format", "version", "workspace", "record"}:
        raise InvalidDocumentError()
    metadata, record = value.get("workspace"), value.get("record")
    if not isinstance(metadata, dict) or not isinstance(record, dict) or record.get("homeId") != home_id:
        raise InvalidDocumentError()
    if set(metadata) != {"name", "homeAssistantUrl", "hasPublished"}:
        raise InvalidDocumentError()
    if not set(record) <= {"schemaVersion", "homeId", "seedRevision", "revision", "draft", "published", "bindings", "draftUpdatedAt", "publishedAt"}:
        raise InvalidDocumentError()
    if not isinstance(metadata.get("name"), str) or not metadata["name"].strip():
        raise InvalidDocumentError()
    if not (metadata.get("homeAssistantUrl") is None or isinstance(metadata.get("homeAssistantUrl"), str)):
        raise InvalidDocumentError()
    if not isinstance(metadata.get("hasPublished"), bool) or record.get("schemaVersion") != 2:
        raise InvalidDocumentError()


class WorkspaceStore:
    """Uses one HA Store and one lock for atomic version checks."""

    def __init__(self, backend):
        self._backend = backend
        self._lock = asyncio.Lock()

    async def _load(self):
        data = await self._backend.async_load()
        if data is None:
            return {"documents": {}, "versions": {}}
        if not isinstance(data, dict) or not isinstance(data.get("documents"), dict) or not isinstance(data.get("versions"), dict):
            raise CorruptStorageError()
        return copy.deepcopy(data)

    async def list(self) -> list[dict]:
        async with self._lock:
            data = await self._load()
            result = []
            for home_id, document in data["documents"].items():
                try:
                    validate_document(home_id, document)
                    metadata = json.loads(document)["workspace"]
                    version = data["versions"][home_id]
                except (KeyError, TypeError, InvalidDocumentError, ValueError):
                    result.append({"home_id": home_id, "name": "Damaged workspace", "version": data["versions"].get(home_id), "corrupt": True})
                    continue
                result.append({"home_id": home_id, "name": metadata["name"], "version": version})
            return sorted(result, key=lambda item: item["name"].lower())

    async def get(self, home_id: str) -> dict | None:
        if not isinstance(home_id, str) or not HOME_ID.fullmatch(home_id):
            raise InvalidDocumentError()
        async with self._lock:
            data = await self._load()
            document = data["documents"].get(home_id)
            if document is None:
                version = data["versions"].get(home_id)
                return None if version is None else {"version": version, "document": None}
            version = data["versions"].get(home_id)
            if not isinstance(version, int):
                raise CorruptStorageError()
            try:
                validate_document(home_id, document)
            except InvalidDocumentError:
                return {"version": version, "document": document, "corrupt": True}
            return {"version": version, "document": document}

    async def put(self, home_id: str, document: str, expected_version: int | None) -> int:
        validate_document(home_id, document)
        async with self._lock:
            data = await self._load()
            current = data["versions"].get(home_id)
            if current != expected_version:
                raise ConflictError()
            if home_id in data["documents"]:
                try:
                    validate_document(home_id, data["documents"][home_id])
                except InvalidDocumentError as exc:
                    raise CorruptStorageError() from exc
            version = (current or 0) + 1
            data["versions"][home_id] = version
            data["documents"][home_id] = document
            await self._backend.async_save(data)
            return version

    async def delete(self, home_id: str, expected_version: int) -> None:
        if not isinstance(home_id, str) or not HOME_ID.fullmatch(home_id):
            raise InvalidDocumentError()
        async with self._lock:
            data = await self._load()
            if home_id not in data["documents"] or data["versions"].get(home_id) != expected_version:
                raise ConflictError()
            del data["documents"][home_id]
            data["versions"][home_id] = expected_version + 1
            await self._backend.async_save(data)
