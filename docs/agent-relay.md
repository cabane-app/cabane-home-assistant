# Cabane agent relay

Cabane's native HA panel owns the editable workspace. This integration only
routes commands between a CLI and that editor over its authenticated HA
WebSocket connection. It never edits homes, reads workspace storage or calls
HA services for the agent.

## Pairing

Open **Connect LLM agent** from the workspace menu and generate a pairing code.
Run the command displayed by the panel in a Cabane source checkout:

```sh
npm run agent:pair -- --url https://your-home-assistant --code MCBN-CODE
npm run agent:request -- --method get_capabilities --pretty
```

The browser and agent may use different devices that can reach the same HA.
Both the panel and integration must implement relay protocol `3`. The CLI needs
no HA API token. It keeps the Cabane session token in an owner-only local file.
Keep the editor open while using the agent. Closing the pairing dialog keeps the
session; leaving the editor, disconnecting, losing its HA connection, expiry or
restarting HA revokes it. Pair again to reconnect.

## Transport

| Interface | Authentication | Purpose |
| --- | --- | --- |
| WS `cabane/agent/open` | Existing HA connection | Subscribe for one workspace and receive a one-use code |
| WS `cabane/agent/respond` | Owning HA connection | Complete a pending request |
| POST `/api/cabane/agent/pair` | One-use code | Receive a Cabane token, session ID and workspace ID |
| POST `/api/cabane/agent/request` | Cabane token | Forward `method` and `params`, await the editor's response |
| POST `/api/cabane/agent/status` | Cabane token | Check the session |
| POST `/api/cabane/agent/disconnect` | Cabane token | Revoke the session |

All HTTP requests use JSON. After pairing, include `sessionId` and `workspaceId`
in the body and the token in `X-Cabane-Agent-Token`. These routes reject browser
Origin headers and do not enable CORS. The panel uses HA's existing WebSocket,
so no browser-to-localhost connection or separate local bridge is needed.

Codes expire in five minutes and work once. Sessions expire after eight hours
and are scoped to one editor connection and workspace. They grant no authority
to other HA endpoints or the Cabane workspace store. Only the owning connection
can answer requests. Sessions, codes, tokens and request contents stay in memory
and are not logged or persisted by the relay.

The relay limits pairing to 60 attempts per minute, 32 open sessions, 16 pending
requests per session, 128 KiB requests and 2 MiB responses. The panel rejects
oversized responses before sending them to keep HA's WebSocket connected. A request times out
after 30 seconds and is never retried automatically. An accepted edit may still
finish after a timeout; inspect the draft before repeating a mutation.

`agent_relay.py` owns sessions and pending responses. `agent_transport.py` adapts
HA WebSocket subscriptions and HTTP calls. The frontend command contract and
shared editor actions remain in the [Cabane repository](https://github.com/cabane-app/cabane/blob/main/docs/product/agent-pilot.md).
