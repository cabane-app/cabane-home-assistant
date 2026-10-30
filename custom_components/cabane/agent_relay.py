"""Ephemeral, workspace-scoped command routing. Never edits a home or calls HA services."""

from __future__ import annotations

import asyncio
from collections import deque
from dataclasses import dataclass, field
import json
import secrets
import time

PROTOCOL_VERSION = "3"
PAIRING_SECONDS = 300
SESSION_SECONDS = 8 * 60 * 60
REQUEST_SECONDS = 30
MAX_REQUEST_BYTES = 128 * 1024
MAX_RESPONSE_BYTES = 2 * 1024 * 1024


class RelayError(Exception):
    def __init__(self, message, status=400):
        super().__init__(message)
        self.status = status


def json_object(value, limit):
    if not isinstance(value, dict):
        raise RelayError("Expected a JSON object.")
    try:
        if (
            len(
                json.dumps(
                    value, allow_nan=False, ensure_ascii=False, separators=(",", ":")
                ).encode()
            )
            > limit
        ):
            raise RelayError("The relay message is too large.", 413)
    except (TypeError, ValueError, RecursionError) as error:
        raise RelayError("The relay message must be JSON.") from error
    return value


@dataclass
class Session:
    id: str
    owner: object
    workspace_id: str
    emit: object
    code: str
    pair_until: float
    expires_at: float
    token: str | None = None
    pending: dict = field(default_factory=dict)


class AgentRelay:
    def __init__(self, clock=time.monotonic):
        self.clock = clock
        self.sessions = {}
        self.pair_attempts = deque()

    def open(self, owner, workspace_id, emit):
        self.cleanup()
        if (
            not isinstance(workspace_id, str)
            or not workspace_id.strip()
            or len(workspace_id) > 200
        ):
            raise RelayError("A workspace ID is required.")
        for session in list(self.sessions.values()):
            if session.owner is owner:
                self.close(session.id, "A new editor session replaced this connection.")
        if len(self.sessions) >= 32:
            raise RelayError(
                "Too many paired editors. Disconnect another editor first.", 429
            )
        now = self.clock()
        session = Session(
            secrets.token_urlsafe(24),
            owner,
            workspace_id,
            emit,
            "MCBN-" + secrets.token_hex(8).upper(),
            now + PAIRING_SECONDS,
            now + SESSION_SECONDS,
        )
        self.sessions[session.id] = session
        return {
            "type": "session",
            "protocolVersion": PROTOCOL_VERSION,
            "sessionId": session.id,
            "workspaceId": workspace_id,
            "code": session.code,
            "pairingExpiresIn": PAIRING_SECONDS,
        }

    def close(self, session_id, message="The editor disconnected."):
        session = self.sessions.pop(session_id, None)
        if session is None:
            return
        for future in session.pending.values():
            if not future.done():
                future.set_exception(RelayError(message, 409))
        session.pending.clear()
        session.emit({"type": "closed", "message": message})

    def cleanup(self):
        now = self.clock()
        for session in list(self.sessions.values()):
            if now >= session.expires_at or (
                session.token is None and now >= session.pair_until
            ):
                self.close(
                    session.id,
                    "The agent session expired. Generate a new pairing code.",
                )

    def pair(self, code):
        self.cleanup()
        now = self.clock()
        while self.pair_attempts and self.pair_attempts[0] <= now - 60:
            self.pair_attempts.popleft()
        if len(self.pair_attempts) >= 60:
            raise RelayError("Too many pairing attempts. Try again in a minute.", 429)
        self.pair_attempts.append(now)
        if not isinstance(code, str) or not code.isascii() or len(code) > 100:
            raise RelayError("Pairing code is incorrect or expired.", 401)
        code = code.strip().upper()
        session = next(
            (
                s
                for s in self.sessions.values()
                if s.code and secrets.compare_digest(s.code, code)
            ),
            None,
        )
        if session is None or session.token is not None:
            raise RelayError("Pairing code is incorrect or expired.", 401)
        session.code = ""
        session.token = secrets.token_urlsafe(32)
        session.emit({"type": "paired"})
        return {
            "protocolVersion": PROTOCOL_VERSION,
            "sessionId": session.id,
            "workspaceId": session.workspace_id,
            "token": session.token,
            "expiresIn": max(0, int(session.expires_at - now)),
        }

    def authenticate(self, session_id, token, workspace_id):
        self.cleanup()
        session = self.sessions.get(session_id) if isinstance(session_id, str) else None
        if (
            session is None
            or not isinstance(token, str)
            or not token.isascii()
            or not session.token
            or not secrets.compare_digest(session.token, token)
            or workspace_id != session.workspace_id
        ):
            raise RelayError(
                "The agent session is no longer paired. Pair again in Cabane.", 401
            )
        return session

    def editor_session(self, session_id, owner):
        self.cleanup()
        session = self.sessions.get(session_id)
        if session is None or session.owner is not owner:
            raise RelayError("This editor does not own the agent session.", 401)
        return session

    async def request(self, session, method, params):
        if not isinstance(method, str) or not method or len(method) > 100:
            raise RelayError("A command method is required.")
        json_object(params, MAX_REQUEST_BYTES)
        if len(session.pending) >= 16:
            raise RelayError("The editor request queue is full.", 429)
        request_id = secrets.token_urlsafe(24)
        future = asyncio.get_running_loop().create_future()
        session.pending[request_id] = future
        try:
            session.emit(
                {
                    "type": "request",
                    "requestId": request_id,
                    "method": method,
                    "params": params,
                }
            )
            return await asyncio.wait_for(future, REQUEST_SECONDS)
        except asyncio.TimeoutError as error:
            raise RelayError(
                "The editor did not answer in time. Inspect before retrying an edit.",
                504,
            ) from error
        finally:
            session.pending.pop(request_id, None)

    def respond(self, session_id, owner, request_id, response):
        session = self.editor_session(session_id, owner)
        future = session.pending.get(request_id)
        if future is None or future.done():
            raise RelayError("The agent request expired or was not found.", 404)
        json_object(response, MAX_RESPONSE_BYTES)
        if not isinstance(response.get("ok"), bool):
            raise RelayError("The editor response needs an ok flag.")
        future.set_result(response)
