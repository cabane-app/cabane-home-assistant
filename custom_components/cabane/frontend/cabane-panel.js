import { r as e } from "./assets/rolldown-runtime-B0aSnxlc.js";
import { $a as t, Bt as n, Ci as r, Fi as i, Gn as a, It as o, J as s, Lt as c, Qa as l, Rt as u, Vt as d, X as f, Xa as p, Xt as m, Y as h, br as g, et as _, ii as v, it as y, nn as b, nt as x, on as S, q as C, sn as w, tt as T, u as E, un as D, v as O, vr as k, x as ee, yn as A, yr as j, zt as te } from "./assets/LaserIcon-3dFPAmth.js";
import { $ as M, A as N, E as ne, F as re, G as P, I as F, K as ie, L as ae, M as I, N as oe, P as se, S as ce, V as L, W as R, Y as le, Z as z, _t as ue, a as de, at as fe, b as pe, bt as B, dt as me, et as he, f as ge, ft as V, gt as _e, ht as ve, it as ye, j as be, lt as xe, m as Se, mt as H, n as Ce, nt as we, o as Te, ot as U, pt as W, q as Ee, rt as G, tt as De, u as Oe, v as ke, vt as Ae, x as je, xt as Me, y as Ne, yt as K, z as Pe } from "./assets/WorkspaceHaStorage-DFb0geWv.js";
//#region apps/web/src/ApplicationErrorBoundary.tsx
var q = /* @__PURE__ */ e(t(), 1), J = l();
function Fe() {
	return /* @__PURE__ */ (0, J.jsxs)("main", {
		className: "direction-project-loading is-error application-error",
		role: "alert",
		children: [
			/* @__PURE__ */ (0, J.jsx)("h1", { children: "Cabane couldn’t open this view" }),
			/* @__PURE__ */ (0, J.jsx)("p", { children: "Something went wrong. Reload the page to try again. Any changes that weren’t saved may be lost." }),
			/* @__PURE__ */ (0, J.jsx)("button", {
				type: "button",
				onClick: () => window.location.reload(),
				children: "Reload page"
			})
		]
	});
}
function Ie() {
	let e = Me();
	return (0, q.useEffect)(() => {
		console.error("Cabane route failed:", e);
	}, [e]), /* @__PURE__ */ (0, J.jsx)(Fe, {});
}
var Le = class extends q.Component {
	state = { hasError: !1 };
	static getDerivedStateFromError() {
		return { hasError: !0 };
	}
	componentDidCatch(e, t) {
		console.error("Cabane application failed:", e, t.componentStack);
	}
	render() {
		return this.state.hasError ? /* @__PURE__ */ (0, J.jsx)(Fe, {}) : this.props.children;
	}
}, Re = /* @__PURE__ */ e(p(), 1);
//#endregion
//#region apps/web/src/workspaces/WorkspaceDialog.tsx
function Y({ title: e, titleIcon: t, busy: n, error: r, onCancel: i, children: a }) {
	let o = g(), s = (0, q.useRef)(null), c = (0, q.useId)();
	return (0, q.useEffect)(() => {
		let e = o.root.activeElement;
		return s.current?.showModal?.(), () => e?.focus();
	}, [o]), /* @__PURE__ */ (0, J.jsxs)("dialog", {
		ref: s,
		className: "workspace-dialog",
		"aria-labelledby": c,
		onCancel: (e) => {
			e.preventDefault(), n || i();
		},
		children: [
			/* @__PURE__ */ (0, J.jsxs)("h2", {
				id: c,
				children: [t, e]
			}),
			a,
			r && /* @__PURE__ */ (0, J.jsx)("p", {
				role: "alert",
				className: "workspace-error",
				children: r
			}),
			/* @__PURE__ */ (0, J.jsx)("button", {
				type: "button",
				disabled: n,
				onClick: i,
				children: "Cancel"
			})
		]
	});
}
//#endregion
//#region apps/web/src/workspaces/HomeAssistantIcon.tsx
function X() {
	return /* @__PURE__ */ (0, J.jsx)("svg", {
		className: "workspace-ha-icon",
		viewBox: "0 0 24 24",
		fill: "#18bcf2",
		"aria-hidden": "true",
		focusable: "false",
		children: /* @__PURE__ */ (0, J.jsx)("path", { d: "m12.151 1.5882c-.3262 0-.6523.1291-.8996.3867l-8.3848 8.7354c-.0619.0644-.1223.1368-.1807.2154-.0588.0789-.1151.1638-.1688.2534-.2593.4325-.4552.9749-.5232 1.4555-.0026.018-.0076.0369-.0094.0548-.0121.0987-.0184.1944-.0184.2857v8.0124a1.2731 1.2731 0 001.2731 1.2731h7.8313l-3.4484-3.593a1.7399 1.7399 0 111.0803-1.125l2.6847 2.7972v-10.248a1.7399 1.7399 0 111.5276-0v7.187l2.6702-2.782a1.7399 1.7399 0 111.0566 1.1505l-3.7269 3.8831v2.7299h8.174a1.2471 1.2471 0 001.2471-1.2471v-8.0375c0-.0912-.0059-.1868-.0184-.2855-.0603-.4935-.2636-1.0617-.5326-1.5105-.0537-.0896-.1101-.1745-.1684-.253-.0588-.079-.1191-.1513-.181-.2158l-8.3848-8.7363c-.2473-.2577-.5735-.3866-.8995-.3864" })
	});
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceDeleteDialog.tsx
function ze({ name: e, busy: t, error: n, onDelete: r, onCancel: i, onBackup: a, local: o = !0, remote: s = "absent", server: c, onRetry: l }) {
	let u = s !== "absent";
	return /* @__PURE__ */ (0, J.jsxs)(Y, {
		title: `Delete ${e}?`,
		busy: t,
		error: n,
		onCancel: i,
		children: [
			/* @__PURE__ */ (0, J.jsx)("p", { children: o && u ? "Remove it from this browser, or delete the saved Home Assistant copy too. Permanent deletion cannot be undone." : o ? "Permanently removes this workspace, its design, and mappings from this browser. There is no undo." : "Permanently removes the saved Home Assistant copy. There is no undo." }),
			c && /* @__PURE__ */ (0, J.jsxs)("p", {
				className: "workspace-delete-server",
				children: ["Home Assistant: ", c]
			}),
			s === "checking" && /* @__PURE__ */ (0, J.jsx)("p", {
				role: "status",
				children: "Checking the Home Assistant copy…"
			}),
			s === "error" && /* @__PURE__ */ (0, J.jsx)("button", {
				type: "button",
				disabled: t,
				onClick: l,
				children: "Retry Home Assistant"
			}),
			s === "present" && /* @__PURE__ */ (0, J.jsx)("p", { children: "Other devices may still have browser copies." }),
			/* @__PURE__ */ (0, J.jsxs)("div", {
				className: "workspace-delete-actions",
				children: [o && u && /* @__PURE__ */ (0, J.jsx)("button", {
					type: "button",
					disabled: t,
					onClick: () => r("local"),
					children: "Remove locally"
				}), /* @__PURE__ */ (0, J.jsx)("button", {
					type: "button",
					className: "workspace-danger",
					disabled: t || (u ? s !== "present" : !o),
					onClick: () => r("permanent"),
					children: "Delete permanently"
				})]
			}),
			/* @__PURE__ */ (0, J.jsx)("button", {
				type: "button",
				disabled: t,
				onClick: a,
				children: "Download backup"
			}),
			t && /* @__PURE__ */ (0, J.jsx)("p", {
				role: "status",
				children: "Working…"
			})
		]
	});
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceDeletion.tsx
function Be(e) {
	let t = x()?.origin ?? e.target.entry?.metadata.homeAssistantUrl ?? e.target.origin ?? null;
	return /* @__PURE__ */ (0, J.jsx)(_, {
		homeAssistantUrl: t,
		children: /* @__PURE__ */ (0, J.jsx)(Ve, { ...e })
	});
}
function Ve({ repository: e, target: t, onDeleteLocal: n, onDeleted: r, onCancel: i, onBusyChange: a }) {
	let o = y(), s = x(), { client: c } = P(e), l = (0, q.useMemo)(() => fe(o.sendStorageMessage), [o.sendStorageMessage]), u = t.entry, d = u?.metadata.id ?? t.saved.home_id, f = u?.metadata.name ?? t.saved.name, p = s?.origin ?? o.origin ?? u?.metadata.homeAssistantUrl ?? t.origin ?? null, [m, h] = (0, q.useState)(t.saved ? "present" : p ? "checking" : "absent"), [g, _] = (0, q.useState)(t.saved?.version ?? null), [v, b] = (0, q.useState)(!1), [S, C] = (0, q.useState)(null), [w, T] = (0, q.useState)(0);
	(0, q.useEffect)(() => {
		if (!p || t.saved && w === 0) return;
		if (o.status !== "connected") {
			h("error");
			return;
		}
		let e = !0;
		return h("checking"), l.get(d).then((t) => {
			e && (_(t?.document ? t.version : null), h(t?.document ? "present" : "absent"), C(null));
		}).catch((t) => {
			e && (h("error"), C(t instanceof Error ? t.message : "Could not check the Home Assistant copy."));
		}), () => {
			e = !1;
		};
	}, [
		p,
		d,
		l,
		o.status,
		t.saved,
		w
	]);
	let E = async (e) => {
		b(!0), a(!0), C(null);
		try {
			await e();
		} catch (e) {
			C(e instanceof Error ? e.message : "Could not complete this action. Try again.");
		} finally {
			b(!1), a(!1);
		}
	}, D = async () => {
		if (u) {
			let t = await e.read(d);
			if (t?.record) await U(G(t.metadata, t.record), `${d}-backup.cabane`);
			else {
				let t = await e.readRaw(d);
				if (t === null) throw Error("No saved record exists.");
				L(t, `${d}-recovery.json`);
			}
		} else {
			let e = await l.get(d);
			if (!e?.document) throw Error("No Home Assistant copy exists.");
			if (e.corrupt) L(e.document, `${d}-ha-recovery.json`);
			else {
				let e = await c.get(d);
				if (!e?.document) throw Error("No Home Assistant copy exists.");
				await U(e.document, `${d}-backup.cabane`);
			}
		}
	}, O = async (t) => {
		if (u) {
			let t = await e.read(d);
			if (!t || t.record?.revision !== u.record?.revision) throw Error("This workspace changed. Cancel and reopen Delete to review it.");
		}
		if (t === "permanent" && p && m !== "absent") {
			if (m !== "present" || g === null) throw Error("Check the Home Assistant copy before deleting it.");
			try {
				await l.delete(d, g);
			} catch (e) {
				throw h("error"), e;
			}
			h("absent"), _(null);
		}
		let i = /* @__PURE__ */ new Set([p, u?.metadata.homeAssistantUrl]);
		for (let e of i) e && await he(window.indexedDB, e, d);
		u && await n(), await r();
	}, k = (0, q.useCallback)(() => {
		C(null), T((e) => e + 1), o.status !== "connected" && (o.status === "disconnected" || o.status === "unconfigured" ? o.connect() : o.retry());
	}, [o]);
	return /* @__PURE__ */ (0, J.jsx)(ze, {
		name: f,
		local: !!u,
		remote: m,
		server: p,
		busy: v,
		error: S ?? (m === "error" ? o.error ?? "Connect to Home Assistant to check or delete its saved copy. Local removal is still available." : null),
		onCancel: i,
		onRetry: k,
		onBackup: () => void E(D),
		onDelete: (e) => void E(() => O(e))
	});
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceHaLibrary.tsx
function He({ repository: e, onRestored: t, onBusyChange: n, localWorkspaceIds: r, disabled: i = !1 }) {
	let a = x(), { runtime: o, client: s, coordinator: c } = P(e), [l, u] = (0, q.useState)([]), [d, f] = (0, q.useState)(null), [p, m] = (0, q.useState)(null), [h, g] = (0, q.useState)(!1), [_, v] = (0, q.useState)(null), y = _ !== null || h;
	(0, q.useEffect)(() => {
		n?.(y);
	}, [y, n]);
	let b = (0, q.useCallback)(async () => {
		try {
			u(await s.list()), f(null);
		} catch (e) {
			f(e instanceof Error ? e.message : "Could not list HA workspaces.");
		}
	}, [s]), S = r?.join("\0");
	(0, q.useEffect)(() => {
		if (o.status !== "connected") return;
		b();
		let e = () => void b();
		return window.addEventListener("focus", e), () => window.removeEventListener("focus", e);
	}, [
		o.status,
		b,
		S
	]);
	let C = async (e) => {
		v(e.home_id), f(null);
		try {
			if ((await c.openRemote(e.home_id, o.origin)).kind === "conflict") throw Error("This browser has different changes. Open the local workspace to review its saved copies.");
			await t(e.home_id);
		} catch (e) {
			f(e instanceof Error ? e.message : "Could not restore this workspace.");
		} finally {
			v(null);
		}
	}, w = async (e) => {
		try {
			let t = await s.get(e.home_id);
			if (!t?.document) throw Error("No HA copy exists.");
			L(t.document, `${e.home_id}-ha-recovery.json`);
		} catch (e) {
			f(e instanceof Error ? e.message : "Could not download HA data.");
		}
	}, T = p && /* @__PURE__ */ (0, J.jsx)(Be, {
		repository: e,
		target: {
			saved: p,
			origin: o.origin
		},
		onCancel: () => m(null),
		onBusyChange: g,
		onDeleted: async () => {
			u((e) => e.filter((e) => e.home_id !== p.home_id)), m(null), f(null);
		}
	});
	if (r) {
		let e = l.filter((e) => !e.corrupt && !r.includes(e.home_id));
		return /* @__PURE__ */ (0, J.jsxs)(J.Fragment, { children: [
			o.status === "connected" && e.map((e) => /* @__PURE__ */ (0, J.jsxs)("article", {
				className: "workspace-card workspace-card--suggested",
				children: [
					/* @__PURE__ */ (0, J.jsx)("button", {
						type: "button",
						className: "workspace-card-target",
						disabled: y || i,
						"aria-label": `Add ${e.name} from Home Assistant`,
						"aria-busy": _ === e.home_id,
						onClick: () => void C(e)
					}),
					/* @__PURE__ */ (0, J.jsxs)("details", { children: [/* @__PURE__ */ (0, J.jsx)("summary", {
						"aria-label": `Actions for ${e.name}`,
						children: "•••"
					}), /* @__PURE__ */ (0, J.jsx)("div", {
						className: "workspace-menu",
						children: /* @__PURE__ */ (0, J.jsx)("button", {
							type: "button",
							disabled: y || i,
							onClick: () => m(e),
							children: "Delete"
						})
					})] }),
					/* @__PURE__ */ (0, J.jsx)("h2", { children: e.name }),
					/* @__PURE__ */ (0, J.jsx)("p", {
						className: "workspace-suggestion-description",
						children: "Saved in Home Assistant"
					}),
					/* @__PURE__ */ (0, J.jsxs)("p", {
						className: "workspace-server workspace-suggestion-server",
						children: [/* @__PURE__ */ (0, J.jsx)(X, {}), /* @__PURE__ */ (0, J.jsx)("span", { children: new URL(o.origin).host })]
					}),
					/* @__PURE__ */ (0, J.jsx)("div", {
						className: "workspace-card-footer",
						children: /* @__PURE__ */ (0, J.jsxs)("span", {
							className: "workspace-suggestion-action",
							children: [/* @__PURE__ */ (0, J.jsx)(R, { name: "plus" }), _ === e.home_id ? "Adding workspace…" : "Add workspace"]
						})
					})
				]
			}, e.home_id)),
			T,
			(d || o.error) && /* @__PURE__ */ (0, J.jsxs)("div", {
				className: "workspace-suggestion-error",
				children: [/* @__PURE__ */ (0, J.jsx)("p", {
					role: "alert",
					className: "workspace-error",
					children: d ?? o.error
				}), /* @__PURE__ */ (0, J.jsx)("button", {
					type: "button",
					disabled: y || i,
					onClick: () => {
						o.status === "connected" ? b() : o.retry();
					},
					children: "Retry suggested workspaces"
				})]
			})
		] });
	}
	return /* @__PURE__ */ (0, J.jsxs)("div", {
		className: "workspace-ha-library-content",
		children: [
			o.status === "connected" ? /* @__PURE__ */ (0, J.jsxs)(J.Fragment, { children: [
				/* @__PURE__ */ (0, J.jsx)("button", {
					type: "button",
					onClick: () => void b(),
					children: "Refresh"
				}),
				l.length === 0 && !d && /* @__PURE__ */ (0, J.jsx)("p", { children: "No Cabane workspaces saved on this HA instance." }),
				l.map((e) => /* @__PURE__ */ (0, J.jsxs)("div", { children: [
					/* @__PURE__ */ (0, J.jsx)("span", { children: e.name }),
					/* @__PURE__ */ (0, J.jsx)("button", {
						type: "button",
						disabled: y,
						onClick: () => void (e.corrupt ? w(e) : C(e)),
						children: e.corrupt ? "Download raw data" : "Open"
					}),
					/* @__PURE__ */ (0, J.jsx)("button", {
						type: "button",
						disabled: y,
						onClick: () => m(e),
						children: "Delete"
					})
				] }, e.home_id))
			] }) : a ? /* @__PURE__ */ (0, J.jsxs)("div", { children: [/* @__PURE__ */ (0, J.jsx)("p", {
				role: "status",
				children: o.error ?? "Waiting for Home Assistant…"
			}), ["error", "disconnected"].includes(o.status) && /* @__PURE__ */ (0, J.jsx)("button", {
				type: "button",
				onClick: o.retry,
				children: "Retry connection"
			})] }) : /* @__PURE__ */ (0, J.jsx)("button", {
				type: "button",
				onClick: o.connect,
				children: "Sign in to Home Assistant"
			}),
			T,
			o.error && /* @__PURE__ */ (0, J.jsx)("p", {
				role: "alert",
				children: o.error
			}),
			d && /* @__PURE__ */ (0, J.jsx)("p", {
				role: "alert",
				children: d
			})
		]
	});
}
function Ue({ repository: e, onRestored: t, initialOrigin: r, onBusyChange: i }) {
	let a = x(), [o, s] = (0, q.useState)(() => window.sessionStorage.getItem("cabane:ha-library-origin") ?? r ?? ""), c = a?.origin ?? n(o);
	return (0, q.useEffect)(() => {
		c && !a && window.sessionStorage.setItem("cabane:ha-library-origin", c);
	}, [c, a]), /* @__PURE__ */ (0, J.jsxs)("section", {
		className: "workspace-ha-library",
		children: [
			a ? /* @__PURE__ */ (0, J.jsxs)("p", { children: [
				"Choose a workspace saved on ",
				a.origin,
				". Sign-in is managed by Home Assistant."
			] }) : /* @__PURE__ */ (0, J.jsx)("p", { children: "Sign in to choose a saved workspace." }),
			!a && /* @__PURE__ */ (0, J.jsxs)("label", { children: ["Home Assistant address", /* @__PURE__ */ (0, J.jsx)("input", {
				value: o,
				onChange: (e) => s(e.target.value),
				placeholder: "Enter HTTPS address"
			})] }),
			c && /* @__PURE__ */ (0, J.jsx)(_, {
				homeAssistantUrl: c,
				children: /* @__PURE__ */ (0, J.jsx)(He, {
					repository: e,
					onRestored: t,
					onBusyChange: i
				})
			}, c)
		]
	});
}
function We({ repository: e, onRestored: t, localWorkspaceIds: n, busy: r, onBusyChange: i }) {
	let a = x();
	return a ? /* @__PURE__ */ (0, J.jsx)(_, {
		homeAssistantUrl: a.origin,
		children: /* @__PURE__ */ (0, J.jsx)(He, {
			repository: e,
			onRestored: t,
			localWorkspaceIds: n,
			disabled: r,
			onBusyChange: i
		})
	}, a.origin) : null;
}
//#endregion
//#region apps/web/src/workspaces/NativeWorkspaceWelcome.tsx
function Ge({ session: e, repository: t, onRestored: n, onBuild: r, onExplore: i, onCancel: a }) {
	let [o, s] = (0, q.useState)({ kind: "checking" }), [l, u] = (0, q.useState)(!1), [d, f] = (0, q.useState)(0);
	return (0, q.useEffect)(() => {
		let t = !0;
		s({ kind: "checking" });
		let n = window.setTimeout(() => {
			t = !1, s({
				kind: "error",
				message: "Home Assistant took too long to check saved homes. Try again."
			});
		}, 1e4);
		return (async () => {
			let t = c(window.location.href, e.origin);
			if (t) throw Error(t);
			if (e.connection.connected === !1) throw Error("Home Assistant is disconnected. Reconnect and try again.");
			return fe((t) => e.connection.sendMessagePromise(t)).list();
		})().then((e) => {
			t && s({ kind: e.length ? "saved" : "empty" });
		}).catch((e) => {
			t && s({
				kind: "error",
				message: e instanceof Error ? e.message : "Could not check saved homes on Home Assistant."
			});
		}).finally(() => window.clearTimeout(n)), () => {
			t = !1, window.clearTimeout(n);
		};
	}, [
		e.connection,
		e.origin,
		d
	]), o.kind === "checking" ? /* @__PURE__ */ (0, J.jsx)("main", {
		className: "direction-project-loading",
		role: "status",
		children: "Checking for homes saved on Home Assistant…"
	}) : o.kind === "empty" ? /* @__PURE__ */ (0, J.jsx)(W, {
		to: "/welcome",
		replace: !0
	}) : /* @__PURE__ */ (0, J.jsx)("main", {
		className: "workspace-library",
		children: /* @__PURE__ */ (0, J.jsxs)(Y, {
			title: "Import a workspace",
			busy: l,
			error: o.kind === "error" ? o.message : null,
			onCancel: () => void a(),
			children: [o.kind === "saved" ? /* @__PURE__ */ (0, J.jsx)(Ue, {
				repository: t,
				onRestored: n,
				initialOrigin: e.origin,
				onBusyChange: u
			}) : /* @__PURE__ */ (0, J.jsxs)(J.Fragment, { children: [/* @__PURE__ */ (0, J.jsx)("p", { children: "Could not check your saved homes." }), /* @__PURE__ */ (0, J.jsx)("button", {
				type: "button",
				onClick: () => f((e) => e + 1),
				children: "Try again"
			})] }), /* @__PURE__ */ (0, J.jsxs)("div", {
				className: "workspace-library-actions",
				children: [/* @__PURE__ */ (0, J.jsx)("button", {
					type: "button",
					disabled: l,
					onClick: () => void r(),
					children: "Create a new home"
				}), /* @__PURE__ */ (0, J.jsx)("button", {
					type: "button",
					disabled: l,
					onClick: () => void i(),
					children: "Explore the demo"
				})]
			})]
		})
	});
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceOpenPage.tsx
function Ke({ repository: e, target: t, onOpened: n }) {
	let { runtime: r, coordinator: i } = P(e, t.origin), a = (0, q.useRef)(!1), [o, s] = (0, q.useState)(!1), [c, l] = (0, q.useState)(null), [u, d] = (0, q.useState)(!1), f = (0, q.useCallback)(async () => {
		s(!0), l(null), d(!1);
		try {
			if ((await i.openRemote(t.homeId, t.origin)).kind === "conflict") {
				d(!0), l("This browser has different changes. Review the copies before syncing.");
				return;
			}
			await n(t.homeId);
		} catch (e) {
			l(e instanceof Error ? e.message : "Could not open this saved home.");
		} finally {
			s(!1);
		}
	}, [
		i,
		t.homeId,
		t.origin,
		n
	]);
	(0, q.useEffect)(() => {
		r.status === "connected" && !a.current && (a.current = !0, f());
	}, [r.status, f]);
	let p = [
		"authenticating",
		"connecting",
		"reconnecting"
	].includes(r.status);
	return /* @__PURE__ */ (0, J.jsxs)(J.Fragment, { children: [/* @__PURE__ */ (0, J.jsxs)("header", {
		className: "ha-page__header",
		children: [/* @__PURE__ */ (0, J.jsx)("h1", { children: "Open your home" }), /* @__PURE__ */ (0, J.jsx)("p", { children: t.origin })]
	}), /* @__PURE__ */ (0, J.jsxs)("section", {
		className: "ha-section",
		children: [
			o ? /* @__PURE__ */ (0, J.jsx)("p", {
				role: "status",
				children: "Opening your saved home…"
			}) : r.status === "connected" ? c && !u ? /* @__PURE__ */ (0, J.jsx)("button", {
				className: "ha-primary",
				onClick: () => void f(),
				children: "Try again"
			}) : null : /* @__PURE__ */ (0, J.jsxs)(J.Fragment, { children: [/* @__PURE__ */ (0, J.jsx)("p", { children: "Sign in to Home Assistant to open this home here." }), /* @__PURE__ */ (0, J.jsxs)("button", {
				className: "ha-primary",
				disabled: p,
				onClick: r.connect,
				children: [p ? "Signing in…" : "Sign in & open", /* @__PURE__ */ (0, J.jsx)(R, { name: "external" })]
			})] }),
			r.error && /* @__PURE__ */ (0, J.jsx)("p", {
				role: "alert",
				className: "ha-error",
				children: r.error
			}),
			c && /* @__PURE__ */ (0, J.jsx)("p", {
				role: "alert",
				className: "ha-error",
				children: c
			}),
			u && /* @__PURE__ */ (0, J.jsxs)("div", {
				className: "ha-actions",
				children: [/* @__PURE__ */ (0, J.jsx)(V, {
					to: `${F(t.homeId)}/home-assistant?action=sync`,
					children: "Review copies"
				}), /* @__PURE__ */ (0, J.jsx)(V, {
					to: F(t.homeId),
					children: "Open browser copy"
				})]
			}),
			/* @__PURE__ */ (0, J.jsx)("p", {
				className: "ha-help",
				children: "This browser will stay in sync. Access requires your Home Assistant sign-in."
			})
		]
	})] });
}
function qe({ repository: e, onOpened: t }) {
	let n = K(), r = Pe(new URL(`${n.pathname}${n.search}`, window.location.origin).href);
	return /* @__PURE__ */ (0, J.jsx)("main", {
		className: "ha-page",
		children: /* @__PURE__ */ (0, J.jsxs)("div", {
			className: "ha-page__content",
			children: [/* @__PURE__ */ (0, J.jsx)("nav", {
				className: "ha-page__nav",
				children: /* @__PURE__ */ (0, J.jsxs)(V, {
					to: "/workspaces",
					children: [/* @__PURE__ */ (0, J.jsx)(R, { name: "back" }), "Workspaces"]
				})
			}), r ? /* @__PURE__ */ (0, J.jsx)(_, {
				homeAssistantUrl: r.origin,
				children: /* @__PURE__ */ (0, J.jsx)(Ke, {
					repository: e,
					target: r,
					onOpened: t
				})
			}, `${r.origin}/${r.homeId}`) : /* @__PURE__ */ (0, J.jsxs)("header", {
				className: "ha-page__header",
				children: [
					/* @__PURE__ */ (0, J.jsx)("h1", { children: "This link is incomplete" }),
					/* @__PURE__ */ (0, J.jsx)("p", { children: "Open the home from your Home Assistant library." }),
					/* @__PURE__ */ (0, J.jsx)(V, {
						to: "/workspaces?import=home-assistant",
						children: "Open from Home Assistant"
					})
				]
			})]
		})
	});
}
//#endregion
//#region apps/web/src/workspaces/workspace-presentation.ts
var Z = "cabane:last-opened-workspace", Q = (e) => `cabane:workspace-preview:rgba:${e}`, $ = (e) => `cabane:workspace-preview:${e}`;
function Je() {
	try {
		return window.localStorage.getItem(Z);
	} catch {
		return null;
	}
}
function Ye(e) {
	try {
		window.localStorage.setItem(Z, e);
	} catch {}
}
function Xe(e) {
	try {
		return window.localStorage.removeItem($(e)), window.localStorage.getItem(Q(e));
	} catch {
		return null;
	}
}
function Ze(e, t) {
	if (!(!t.width || !t.height)) try {
		let n = document.createElement("canvas"), r = Math.min(640 / t.width, 480 / t.height, 1);
		n.width = Math.max(1, Math.round(t.width * r)), n.height = Math.max(1, Math.round(t.height * r)), pe(t, n), window.localStorage.removeItem($(e)), window.localStorage.setItem(Q(e), n.toDataURL("image/webp", .75));
	} catch {}
}
function Qe(e) {
	try {
		window.localStorage.removeItem($(e)), window.localStorage.removeItem(Q(e)), Je() === e && window.localStorage.removeItem(Z);
	} catch {}
}
//#endregion
//#region apps/web/src/onboarding-config.ts
var $e = {
	available: !1,
	source: "https://github.com/cabane-app/cabane",
	selfHost: "https://github.com/cabane-app/cabane#readme"
};
//#endregion
//#region apps/web/src/workspaces/first-onboarding-light.ts
function et(e, t) {
	let n = e.floors.flatMap((e) => e.rooms), r = [...n.filter((e) => e.id === t), ...n.filter((e) => e.id !== t)];
	for (let e of r) for (let t of e.devices) {
		let n = t.entitySlots.find((e) => e.compatibleDomains.includes("light") && e.deviceRole === "primary");
		if (n) return {
			roomId: e.id,
			deviceId: t.id,
			slotId: n.id
		};
	}
}
//#endregion
//#region apps/web/src/workspaces/useWorkspaceOnboarding.ts
function tt(e) {
	let t = B(), n = K(), [r, i] = (0, q.useState)(null), [a, o] = (0, q.useState)(!1), [c, l] = (0, q.useState)(!1), u = (0, q.useRef)(!1), [f, p] = (0, q.useState)(null), [m, g] = (0, q.useState)(null), _ = (0, q.useCallback)(async () => {
		if (e) try {
			i(await e.readOnboarding());
		} catch {
			p("Getting-started preferences are unavailable. Your workspaces are still available.");
		} finally {
			o(!0);
		}
	}, [e]);
	return (0, q.useEffect)(() => {
		_();
		let e = () => {
			_();
		};
		return window.addEventListener("focus", e), () => window.removeEventListener("focus", e);
	}, [_]), {
		state: r,
		loaded: a,
		busy: c,
		error: f,
		deleted: m,
		dismiss: (0, q.useCallback)(async (t) => {
			i((e) => e && {
				...e,
				[t === "welcome" ? "welcomeDismissed" : "nudgeDismissed"]: !0
			});
			try {
				await e?.dismissOnboarding(t);
			} catch {
				p("This preference could not be saved. You can keep using your home.");
			}
		}, [e]),
		start: (0, q.useCallback)(async (r, i) => {
			if (!(!e || u.current)) {
				u.current = !0, l(!0), p(null), g(null);
				try {
					let a = await e.readOnboarding(), o = await e.startOnboarding(r, { ...i === void 0 ? {} : { replaceDeletedId: i } });
					if (!o.record) throw Error(o.error ?? "Open Workspaces to recover this home.");
					let c = C();
					try {
						c = s(window.localStorage, o.metadata.id).record;
					} catch {}
					let l = c.launch?.target ?? (r === "connect" && o.record.publishedAt !== 0 ? et(ie(o.record.published), "open-plan-living") : void 0), u = {
						...c,
						launch: {
							entry: r,
							introductionDismissed: !0,
							starterConsumed: !0,
							nudgeDismissed: !0,
							firstControlConfirmed: c.launch?.firstControlConfirmed ?? !1,
							...l ? { target: l } : {}
						}
					}, d = !1;
					try {
						d = h(window.localStorage, o.metadata.id, u);
					} catch {}
					if (d || p("Setup progress could not be saved. Your new home is safe in Workspaces."), r === "build" && a?.destinations.build !== o.metadata.id && je(o.metadata.id), await _(), r === "build") {
						n.pathname !== "/build" && await t("/build");
						return;
					}
					l && o.metadata.homeAssistantUrl && o.record.bindings[o.metadata.homeAssistantUrl]?.published.entityIdsBySlotId[l.slotId] ? await t(F(o.metadata.id)) : await t(I({
						mode: "connect",
						view: "devices",
						...l?.roomId === void 0 ? {} : { roomId: l?.roomId },
						...l?.deviceId === void 0 ? {} : { relationshipId: l?.deviceId }
					}, o.metadata.id), { state: { editorRequest: {
						mode: "connect",
						view: "devices",
						roomId: l?.roomId,
						relationshipId: l?.deviceId
					} } });
				} catch (e) {
					p(e instanceof Error ? e.message : "Could not open your home. Please try again."), e instanceof d && g({
						path: r,
						id: e.workspaceId
					});
				} finally {
					u.current = !1, l(!1);
				}
			}
		}, [
			e,
			t,
			_,
			n.pathname
		]),
		clearError: () => {
			p(null), g(null);
		}
	};
}
//#endregion
//#region apps/web/src/workspaces/workspace-availability.ts
function nt(e, t = !1, n) {
	return e ? e.enabled ? n?.kind === "conflict" ? {
		label: "Sync needs attention",
		icon: "warning"
	} : n?.kind === "disconnected" || n?.kind === "unavailable" ? {
		label: "Sync interrupted",
		icon: "warning"
	} : t || n?.kind === "pending" ? {
		label: "Changes pending",
		icon: "refresh"
	} : n?.kind === "synced" ? {
		label: "Synced with HA",
		icon: "refresh"
	} : {
		label: "Sync enabled",
		icon: "refresh"
	} : {
		label: "Saved to HA · sync off",
		icon: "save"
	} : {
		label: "Local only",
		icon: "monitor"
	};
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceCard.tsx
function rt({ entry: e, busy: t, onOpen: n, onAction: r, onRecover: i, onExportRaw: a }) {
	let { metadata: o, record: s, error: c } = e, l = x(), [u, d] = (0, q.useState)(null), [f, p] = (0, q.useState)(!1), [m, h] = (0, q.useState)(!1), [g, _] = (0, q.useState)(!o.homeAssistantUrl);
	(0, q.useEffect)(() => {
		let e = !0;
		d(null), p(!1), h(!1), _(!o.homeAssistantUrl);
		let t = () => {
			o.homeAssistantUrl && we(window.indexedDB, o.homeAssistantUrl, o.id).then(async (t) => {
				let n = !!(t && s && await De(o, s) !== t.acknowledgedFingerprint);
				e && (d(t), p(n), _(!0));
			}).catch(() => {
				e && (h(!0), _(!0));
			});
		};
		return t(), window.addEventListener("focus", t), () => {
			e = !1, window.removeEventListener("focus", t);
		};
	}, [
		o.id,
		o.homeAssistantUrl,
		s,
		o
	]);
	let v = nt(u, f), y = {
		settings: "Home Assistant settings",
		sync: "Sync with Home Assistant",
		dashboard: "Add to Home Assistant",
		device: "Open on another device",
		"agent-pilot": "Connect LLM agent",
		rename: "Rename",
		duplicate: "Duplicate",
		export: "Export",
		delete: "Delete"
	}, b = Xe(o.id), S = s && JSON.stringify(s.draft) !== JSON.stringify(s.published);
	return /* @__PURE__ */ (0, J.jsxs)("article", {
		className: `workspace-card${c ? " workspace-card--recovery" : ""}`,
		children: [
			!c && /* @__PURE__ */ (0, J.jsx)("button", {
				className: "workspace-card-target",
				disabled: t,
				onClick: n,
				"aria-label": `Open ${o.name}`
			}),
			/* @__PURE__ */ (0, J.jsxs)("details", { children: [/* @__PURE__ */ (0, J.jsx)("summary", {
				"aria-label": `Actions for ${o.name}`,
				children: "•••"
			}), /* @__PURE__ */ (0, J.jsx)("div", {
				className: "workspace-menu",
				children: [
					"settings",
					"sync",
					"dashboard",
					"device",
					"agent-pilot",
					"rename",
					"duplicate",
					"export",
					"delete"
				].filter((e) => (e !== "sync" || !u?.enabled) && (e !== "agent-pilot" || !!l)).map((e) => /* @__PURE__ */ (0, J.jsx)("button", {
					disabled: t || !!(c && e !== "delete"),
					onClick: (t) => {
						let n = t.currentTarget.closest("details");
						n?.removeAttribute("open"), n?.querySelector("summary")?.focus(), r(e);
					},
					children: y[e]
				}, e))
			})] }),
			b && /* @__PURE__ */ (0, J.jsx)("img", {
				className: "workspace-preview",
				src: b,
				alt: `Preview of ${o.name}`,
				loading: "lazy"
			}),
			/* @__PURE__ */ (0, J.jsx)("h2", { children: o.name }),
			/* @__PURE__ */ (0, J.jsxs)("dl", {
				className: "workspace-availability",
				children: [/* @__PURE__ */ (0, J.jsxs)("div", { children: [/* @__PURE__ */ (0, J.jsx)("dt", { children: "Connection" }), /* @__PURE__ */ (0, J.jsxs)("dd", { children: [/* @__PURE__ */ (0, J.jsx)(R, { name: "devices" }), o.homeAssistantUrl ? "HA configured" : "HA not connected"] })] }), /* @__PURE__ */ (0, J.jsxs)("div", { children: [/* @__PURE__ */ (0, J.jsx)("dt", { children: "Storage" }), /* @__PURE__ */ (0, J.jsxs)("dd", { children: [/* @__PURE__ */ (0, J.jsx)(R, { name: m ? "warning" : v.icon }), m ? "Storage unavailable" : g ? v.label : "Checking storage…"] })] })]
			}),
			(c || !o.hasPublished || S) && /* @__PURE__ */ (0, J.jsx)("p", {
				className: "workspace-status",
				children: c ? "Needs recovery" : o.hasPublished ? "Unapplied changes" : "Draft"
			}),
			/* @__PURE__ */ (0, J.jsxs)("div", {
				className: "workspace-card-footer",
				children: [/* @__PURE__ */ (0, J.jsx)("p", {
					className: "workspace-server",
					children: o.homeAssistantUrl && /* @__PURE__ */ (0, J.jsxs)(J.Fragment, { children: [/* @__PURE__ */ (0, J.jsx)(X, {}), /* @__PURE__ */ (0, J.jsx)("span", { children: new URL(o.homeAssistantUrl).host })] })
				}), !c && /* @__PURE__ */ (0, J.jsx)("span", {
					className: "workspace-card-arrow",
					"aria-hidden": "true",
					children: "→"
				})]
			}),
			c ? /* @__PURE__ */ (0, J.jsxs)(J.Fragment, { children: [/* @__PURE__ */ (0, J.jsx)("p", {
				className: "workspace-error",
				children: c
			}), /* @__PURE__ */ (0, J.jsxs)("div", {
				className: "workspace-card-recovery",
				children: [/* @__PURE__ */ (0, J.jsx)("button", {
					disabled: t,
					onClick: i,
					children: "Recover workspace"
				}), /* @__PURE__ */ (0, J.jsx)("button", {
					disabled: t,
					onClick: a,
					children: "Export raw data"
				})]
			})] }) : null
		]
	});
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceNameDialog.tsx
function it({ action: e, initialName: t, busy: n, error: r, onSave: i, onCancel: a }) {
	let [o, s] = (0, q.useState)(t);
	return /* @__PURE__ */ (0, J.jsx)(Y, {
		title: e === "create" ? "New workspace" : e === "rename" ? "Rename workspace" : "Duplicate workspace",
		busy: n,
		error: r,
		onCancel: a,
		children: /* @__PURE__ */ (0, J.jsxs)("form", {
			onSubmit: (e) => {
				e.preventDefault(), o.trim() && i(o.trim());
			},
			children: [
				/* @__PURE__ */ (0, J.jsxs)("label", { children: ["Workspace name", /* @__PURE__ */ (0, J.jsx)("input", {
					autoFocus: !0,
					required: !0,
					value: o,
					onChange: (e) => s(e.target.value)
				})] }),
				e === "duplicate" && /* @__PURE__ */ (0, J.jsx)("p", { children: "The copy includes the saved design, connection, and mappings." }),
				/* @__PURE__ */ (0, J.jsx)("button", {
					className: "workspace-primary",
					disabled: n || !o.trim(),
					children: n ? "Saving…" : e === "rename" ? "Save name" : e === "duplicate" ? "Duplicate" : "Create workspace"
				})
			]
		})
	});
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceTransferDialog.tsx
function at({ mode: e, busy: t, error: n, onImport: r, onExport: i, onCancel: a, remoteImport: o }) {
	let s = K(), c = B(), [l, u] = (0, q.useState)(() => new URLSearchParams(s.search).get("import") === "home-assistant" ? "ha" : "file"), [d, f] = (0, q.useState)(""), [p, m] = (0, q.useState)(null);
	return /* @__PURE__ */ (0, J.jsxs)(Y, {
		title: e === "import" ? "Import workspace" : "Export workspace",
		titleIcon: e === "import" ? /* @__PURE__ */ (0, J.jsx)(R, { name: "import" }) : void 0,
		busy: t,
		error: p ?? n,
		onCancel: a,
		children: [e === "import" && o && /* @__PURE__ */ (0, J.jsxs)("div", {
			className: "workspace-import-sources",
			"aria-label": "Import source",
			children: [/* @__PURE__ */ (0, J.jsxs)("button", {
				"aria-pressed": l === "file",
				onClick: () => {
					c("/workspaces", { replace: !0 }), u("file");
				},
				children: [/* @__PURE__ */ (0, J.jsx)(R, { name: "file" }), "From file"]
			}), /* @__PURE__ */ (0, J.jsxs)("button", {
				"aria-pressed": l === "ha",
				onClick: () => {
					c("/workspaces?import=home-assistant", { replace: !0 }), u("ha");
				},
				children: [/* @__PURE__ */ (0, J.jsx)(X, {}), "From Home Assistant"]
			})]
		}), e === "import" && l === "ha" ? o : e === "import" ? /* @__PURE__ */ (0, J.jsxs)("form", {
			onSubmit: (e) => {
				e.preventDefault(), r(d);
			},
			children: [
				/* @__PURE__ */ (0, J.jsx)("p", { children: "A project or backup creates a new workspace." }),
				/* @__PURE__ */ (0, J.jsxs)("label", { children: ["Cabane archive or JSON file", /* @__PURE__ */ (0, J.jsx)("input", {
					type: "file",
					accept: ".cabane,.json,application/zip,application/json",
					disabled: t,
					onChange: (e) => {
						(async () => {
							let t = e.target.files?.[0];
							if (m(null), f(""), t) try {
								f((await xe(t)).json);
							} catch (e) {
								m(e instanceof Error ? e.message : "Could not read that file. Please choose it again.");
							}
						})();
					}
				})] }),
				/* @__PURE__ */ (0, J.jsxs)("button", {
					className: "workspace-primary",
					disabled: t || !d,
					children: [/* @__PURE__ */ (0, J.jsx)(R, { name: "import" }), t ? "Importing…" : "Import workspace"]
				})
			]
		}) : /* @__PURE__ */ (0, J.jsxs)("div", {
			className: "workspace-export-options",
			children: [
				/* @__PURE__ */ (0, J.jsx)("p", { children: "Export the latest saved version." }),
				/* @__PURE__ */ (0, J.jsxs)("button", {
					disabled: t,
					onClick: () => i(!1),
					children: ["Portable design", /* @__PURE__ */ (0, J.jsx)("span", { children: "Design only, without connection or mappings." })]
				}),
				/* @__PURE__ */ (0, J.jsxs)("button", {
					disabled: t,
					onClick: () => i(!0),
					children: ["Private backup", /* @__PURE__ */ (0, J.jsx)("span", { children: "Design, drafts, connection, and mappings. No credentials." })]
				})
			]
		})]
	});
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceLibrary.tsx
function ot(e) {
	let t = x(), n = j("cabane-icon.png"), r = K(), i = B(), [a, o] = (0, q.useState)(() => new URLSearchParams(r.search).get("import") === "home-assistant" ? { action: "import" } : null), [s, c] = (0, q.useState)(!1), [l, u] = (0, q.useState)(null), d = (e) => {
		u(null), o(e);
	}, f = async (e) => {
		c(!0), u(null);
		try {
			await e(), o(null);
		} catch (e) {
			u(e instanceof Error ? e.message : "Could not complete this action. Please try again.");
		} finally {
			c(!1);
		}
	}, p = e.entries.filter((t) => !t.error && t.metadata.id !== e.demoWorkspaceId), m = () => {
		p.length === 1 ? f(() => e.onSettings(p[0].metadata.id, "dashboard")) : d({ action: "setup-ha" });
	}, h = () => {
		o(null), u(null), i("/workspaces", { replace: !0 });
	};
	return /* @__PURE__ */ (0, J.jsxs)("main", {
		className: "workspace-library",
		children: [
			/* @__PURE__ */ (0, J.jsxs)("header", {
				className: "workspace-library-header",
				children: [/* @__PURE__ */ (0, J.jsxs)("div", { children: [/* @__PURE__ */ (0, J.jsxs)("p", {
					className: "workspace-brand",
					children: [/* @__PURE__ */ (0, J.jsx)("img", {
						src: n,
						alt: "",
						width: "28",
						height: "33"
					}), "Cabane"]
				}), /* @__PURE__ */ (0, J.jsx)("h1", { children: "Your workspaces" })] }), /* @__PURE__ */ (0, J.jsxs)("div", {
					className: "workspace-library-actions",
					children: [/* @__PURE__ */ (0, J.jsxs)("button", {
						className: "workspace-primary",
						disabled: s,
						onClick: () => d({ action: "create" }),
						children: [/* @__PURE__ */ (0, J.jsx)(R, { name: "plus" }), "New workspace"]
					}), /* @__PURE__ */ (0, J.jsxs)("button", {
						disabled: s,
						onClick: () => d({ action: "import" }),
						children: [/* @__PURE__ */ (0, J.jsx)(R, { name: "import" }), "Import workspace"]
					})]
				})]
			}),
			e.onSettings && !t && /* @__PURE__ */ (0, J.jsx)("div", {
				className: "workspace-ha-entry",
				children: /* @__PURE__ */ (0, J.jsxs)("button", {
					disabled: s,
					onClick: m,
					children: ["Add Cabane to Home Assistant", /* @__PURE__ */ (0, J.jsx)(R, { name: "chevron" })]
				})
			}),
			!a && l && /* @__PURE__ */ (0, J.jsx)("p", {
				role: "alert",
				className: "workspace-error",
				children: l
			}),
			!e.entries.length && /* @__PURE__ */ (0, J.jsxs)("section", {
				className: "workspace-empty",
				children: [/* @__PURE__ */ (0, J.jsx)("h2", { children: "A place for your next home" }), /* @__PURE__ */ (0, J.jsx)("p", { children: "Create a workspace from scratch, or import a saved Cabane project." })]
			}),
			/* @__PURE__ */ (0, J.jsxs)("section", {
				className: "workspace-grid",
				"aria-label": "Homes",
				children: [e.entries.map((t) => /* @__PURE__ */ (0, J.jsx)(rt, {
					entry: t,
					busy: s,
					onOpen: () => void f(() => e.onOpen(t.metadata.id)),
					onAction: (n) => [
						"settings",
						"sync",
						"dashboard",
						"device"
					].includes(n) ? void f(() => e.onSettings?.(t.metadata.id, n === "settings" ? void 0 : n) ?? Promise.resolve()) : n === "agent-pilot" ? void f(() => e.onAgentPilot(t.metadata.id)) : d({
						action: n,
						entry: t
					}),
					onRecover: () => void f(() => e.onRecover(t.metadata.id)),
					onExportRaw: () => void f(() => e.onExportRaw(t.metadata.id))
				}, t.metadata.id)), e.renderSuggestions?.(s, c)]
			}),
			a?.action === "setup-ha" && /* @__PURE__ */ (0, J.jsxs)(Y, {
				title: "Add Cabane to Home Assistant",
				busy: s,
				error: l,
				onCancel: h,
				children: [
					/* @__PURE__ */ (0, J.jsx)("p", { children: p.length ? "Choose the home to sync with Home Assistant." : "Create or import a home first. You can keep using Cabane in this browser." }),
					/* @__PURE__ */ (0, J.jsx)("div", {
						className: "workspace-setup-homes",
						children: p.map((t) => /* @__PURE__ */ (0, J.jsx)("button", {
							disabled: s,
							onClick: () => void f(() => e.onSettings(t.metadata.id, "dashboard")),
							children: t.metadata.name
						}, t.metadata.id))
					}),
					!p.length && /* @__PURE__ */ (0, J.jsx)("button", {
						onClick: () => d({ action: "create" }),
						children: "Create a home"
					})
				]
			}),
			a && (a.action === "create" || a.action === "rename" || a.action === "duplicate") && /* @__PURE__ */ (0, J.jsx)(it, {
				action: a.action,
				initialName: a.action === "create" ? "" : `${a.entry.metadata.name}${a.action === "duplicate" ? " copy" : ""}`,
				busy: s,
				error: l,
				onCancel: h,
				onSave: (t) => void f(() => a.action === "create" ? e.onCreate(t) : a.action === "rename" ? e.onRename(a.entry.metadata.id, t) : e.onDuplicate(a.entry.metadata.id, t))
			}),
			a?.action === "delete" && e.renderDelete(a.entry, h, c),
			(a?.action === "import" || a?.action === "export") && /* @__PURE__ */ (0, J.jsx)(at, {
				mode: a.action,
				busy: s,
				error: l,
				onCancel: h,
				remoteImport: e.remoteImport,
				onImport: (t) => void f(() => e.onImport(t)),
				onExport: (t) => void f(() => e.onExport(a.entry.metadata.id, t))
			})
		]
	});
}
//#endregion
//#region apps/web/src/workspaces/workspace-tool-state.ts
function st(e, t, n) {
	if (!/^[a-z0-9]+(?:[.-][a-z0-9]+)+$/.test(t)) throw Error("Tool storage requires a namespaced ID.");
	let r = (e) => ({
		...e,
		toolState: {
			...e.toolState,
			[t]: structuredClone(n)
		}
	});
	return {
		...e,
		draft: r(e.draft),
		published: r(e.published),
		draftUpdatedAt: Date.now()
	};
}
//#endregion
//#region apps/web/src/workspaces/useWorkspaceToolStorage.ts
function ct(e, t, n) {
	let r = (0, q.useRef)(e), i = (0, q.useRef)({
		onSaved: t,
		onError: n
	});
	(0, q.useLayoutEffect)(() => {
		r.current = e;
	}, [e]), (0, q.useLayoutEffect)(() => {
		i.current = {
			onSaved: t,
			onError: n
		};
	});
	let a = (0, q.useMemo)(() => m(me(window.indexedDB), z), []);
	return (0, q.useMemo)(() => {
		let e = Promise.resolve();
		return {
			storage: {
				read: (e) => r.current.published.toolState?.[e],
				write: (t, n) => {
					let o = structuredClone(n), s = e.then(async () => {
						let e = r.current, n = await a.replace(st(e, t, o), e.revision);
						r.current = n, i.current.onSaved(n);
					});
					return e = s.catch((e) => {
						i.current.onError(`Could not save tool changes. Reopen this home and try again. ${e instanceof Error ? e.message : "Storage is unavailable."}`);
					}), s;
				}
			},
			flush: () => e,
			saveWeatherSource: (t, n) => {
				let o = r.current.homeId, s = e.then(async () => {
					let e = r.current;
					if (e.homeId !== o) throw Error("This home is no longer active.");
					let s = await a.replace(Ne(e, t, n), e.revision);
					r.current = s, i.current.onSaved(s);
				});
				return e = s.catch(() => void 0), s;
			}
		};
	}, [a]);
}
//#endregion
//#region apps/web/src/RoutedHomeEditor.tsx
var lt = (0, q.lazy)(() => import("./assets/HomeEditor-iBVCPzZG.js").then((e) => ({ default: e.HomeEditor })));
function ut({ onClose: e, ...t }) {
	let n = K(), r = B(), i = (0, q.useMemo)(() => ({
		...n.state?.editorRequest,
		...oe(n.pathname)
	}), [n.pathname, n.state]), a = be(n.search), o = () => {
		let e = new URLSearchParams(n.search);
		e.delete("agent-pilot"), r(`${n.pathname}${e.size ? `?${e}` : ""}`, { replace: !0 });
	}, s = (0, q.useRef)(!1), c = Ae(({ nextLocation: e }) => !s.current && re(t.initialRecord.homeId, e.pathname)), l = (e, n = !1) => {
		r(I(e, t.initialRecord.homeId), {
			replace: n,
			state: { editorRequest: e }
		});
	};
	return /* @__PURE__ */ (0, J.jsx)(q.Suspense, {
		fallback: /* @__PURE__ */ (0, J.jsx)("main", {
			className: "direction-project-loading",
			children: "Opening the editor…"
		}),
		children: /* @__PURE__ */ (0, J.jsx)(lt, {
			...t,
			agentPilotOpen: a,
			onAgentPilotClose: o,
			initialRequest: i,
			onWorkspaces: () => void r("/workspaces"),
			onHomeAssistantSettings: () => l({
				mode: "construct",
				panel: "settings",
				settingsSection: "home-assistant"
			}),
			onRecoveryWorkspaces: () => {
				s.current = !0, r("/workspaces");
			},
			navigation: {
				request: i,
				go: l,
				exitRequested: c.state === "blocked",
				cancelExit: () => {
					c.state === "blocked" && c.reset();
				}
			},
			onClose: (n, i) => {
				s.current = !0, e(n, i), c.state === "blocked" ? c.proceed() : r(F(t.initialRecord.homeId));
			}
		})
	});
}
//#endregion
//#region apps/web/src/ConnectedProduct.tsx
function dt({ record: e, lifecycle: t, homeAssistantUrl: n, onHomeAssistantUrlChange: r, recoveryMessage: i, recoveryRaw: o, initialRequest: s, onboarding: c }) {
	let [l, u] = (0, q.useState)(e), d = (0, q.useMemo)(() => l.publishedAt === 0 ? null : ie(l.published), [l.published, l.publishedAt]), f = (0, q.useMemo)(() => a(l.published, z).deviceModels, [l.published]), [p, m] = (0, q.useState)({
		message: i,
		raw: o
	}), [h, g] = (0, q.useState)(null), _ = ct(l, u, g), [y, C] = (0, q.useState)(!1), w = B(), T = K(), D = x(), [k] = (0, q.useState)(() => s ?? (D ? null : ge(e.homeId))), ee = (0, q.useEffectEvent)(() => {
		if (k) {
			let e = new URLSearchParams(T.search);
			k.destination && e.set("action", k.destination), w(`${I(k, l.homeId)}${e.size ? `?${e}` : ""}`, {
				replace: !0,
				state: { editorRequest: k }
			}), window.sessionStorage.removeItem(Oe);
		}
	});
	(0, q.useEffect)(() => {
		ee();
	}, []);
	let A = async (e) => {
		await _.flush();
		let t = I(e, l.homeId);
		w(t, { state: { editorRequest: e } });
	}, j = n ? b(n) : null, te = (0, q.useMemo)(() => ({
		profile: (j ? l.bindings[j]?.published : void 0) ?? S(l.homeId),
		saveWeatherSource: j ? (e) => _.saveWeatherSource(j, e) : void 0,
		loaded: !0,
		hasStoredProfile: !!(j && l.bindings[j]),
		save: () => void 0
	}), [
		j,
		l,
		_
	]), M = /* @__PURE__ */ (0, J.jsx)(ut, {
		initialRecord: l,
		lifecycle: t,
		recoveryMessage: p.message,
		recoveryRaw: p.raw,
		homeAssistantUrl: n,
		isDemo: c?.isDemo ?? !1,
		onCreatePersonal: () => {
			c?.start("connect");
		},
		onPrepareOrigin: async (e, t) => {
			let n = await r(t, e) ?? e;
			return u(n), n;
		},
		onClose: (e, t) => {
			m({
				message: void 0,
				raw: void 0
			}), u(e), C(t === "applied"), window.sessionStorage.removeItem(Oe);
		}
	}), N = l.publishedAt === 0 ? /* @__PURE__ */ (0, J.jsx)(W, {
		to: I({ mode: "construct" }, l.homeId),
		replace: !0
	}) : /* @__PURE__ */ (0, J.jsx)(v, {
		storage: _.storage,
		children: /* @__PURE__ */ (0, J.jsx)(Te, { children: /* @__PURE__ */ (0, J.jsx)(E, {
			manifest: d,
			architectureModels: Se,
			onboarding: c,
			walkTools: ke,
			deviceModels: f,
			homeAssistantUrl: n,
			onHomeAssistantUrlChange: (e) => {
				g(null), Promise.resolve().then(() => r(e, l)).then((e) => {
					e && u(e);
				}).catch((e) => g(e instanceof Error ? e.message : "Connection settings could not be saved."));
			},
			onOpenSettings: () => {
				A({
					mode: "construct",
					panel: "settings"
				});
			},
			onHomeAssistantSettings: () => {
				A({
					mode: "construct",
					panel: "home-assistant"
				});
			},
			onWorkspaces: () => void w("/workspaces"),
			renderActionBarDeviceIcon: (e) => /* @__PURE__ */ (0, J.jsx)(de, {
				modelId: e,
				models: f
			}),
			bindingManager: te,
			constructionApplied: y,
			onEditHome: (e = "construct") => {
				A({ mode: e });
			},
			onCustomizeActionBar: () => {
				A({
					mode: "construct",
					panel: "action-bar"
				});
			},
			onOpenConnect: (e, t) => {
				A({
					mode: "connect",
					view: e,
					...t === void 0 ? {} : { roomId: t }
				});
			},
			onExportBrowserData: () => U(G({
				name: l.draft.home.name,
				homeAssistantUrl: n,
				hasPublished: l.publishedAt !== 0
			}, l), `${l.homeId}-backup.cabane`).catch((e) => {
				g(e instanceof Error ? e.message : "Could not download the backup. Try again.");
			})
		}) })
	});
	return /* @__PURE__ */ (0, J.jsxs)(O, {
		storageKey: `cabane:selected-floor:${l.homeId}`,
		children: [h && /* @__PURE__ */ (0, J.jsxs)("div", {
			className: "workspace-connection-error",
			role: "alert",
			children: [h, /* @__PURE__ */ (0, J.jsx)("button", {
				type: "button",
				onClick: () => g(null),
				children: "Dismiss"
			})]
		}), /* @__PURE__ */ (0, J.jsxs)(_e, { children: [
			/* @__PURE__ */ (0, J.jsx)(H, {
				path: "/welcome",
				element: N
			}),
			/* @__PURE__ */ (0, J.jsx)(H, {
				path: "/demo",
				element: N
			}),
			/* @__PURE__ */ (0, J.jsx)(H, {
				path: "/workspaces/:workspaceId",
				element: N
			}),
			/* @__PURE__ */ (0, J.jsx)(H, {
				path: "/workspaces/:workspaceId/mobile-editor",
				element: /* @__PURE__ */ (0, J.jsx)(W, {
					to: I({ mode: new URLSearchParams(T.search).get("mode") === "arrange" ? "furnish" : "construct" }, l.homeId),
					replace: !0
				})
			}),
			se.map(({ path: e }) => /* @__PURE__ */ (0, J.jsx)(H, {
				path: e,
				element: M
			}, e)),
			/* @__PURE__ */ (0, J.jsx)(H, {
				path: "*",
				element: /* @__PURE__ */ (0, J.jsx)(W, {
					to: F(l.homeId),
					replace: !0
				})
			})
		] })]
	}, l.homeId);
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceModelAssetNotice.tsx
function ft({ record: e, id: t }) {
	let [n, a] = (0, q.useState)(!1);
	return (0, q.useEffect)(() => {
		let t = !0;
		a(!1);
		let n = i([e.draft, e.published]);
		return n.length && r(window.indexedDB).verify(n).catch(() => {
			t && a(!0);
		}), () => {
			t = !1;
		};
	}, [e]), n ? /* @__PURE__ */ (0, J.jsxs)("div", {
		className: "workspace-connection-error workspace-model-assets-error",
		role: "alert",
		children: [
			/* @__PURE__ */ (0, J.jsx)("strong", { children: "Some personal models could not load." }),
			/* @__PURE__ */ (0, J.jsx)("span", { children: "A GLB file is missing, damaged, or unavailable. Restore a complete .cabane backup or load the saved home from Home Assistant." }),
			/* @__PURE__ */ (0, J.jsxs)("div", { children: [
				/* @__PURE__ */ (0, J.jsx)(V, {
					to: "/workspaces",
					children: "Workspaces"
				}),
				/* @__PURE__ */ (0, J.jsx)(V, {
					to: `/workspaces/${encodeURIComponent(t)}/home-assistant`,
					children: "Home Assistant"
				}),
				/* @__PURE__ */ (0, J.jsx)("button", {
					onClick: () => window.location.reload(),
					children: "Try again"
				})
			] })
		]
	}) : null;
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceHost.tsx
function pt({ id: e, repository: t, onboarding: n }) {
	let r = K(), i = B(), a = (0, q.useCallback)((t) => Ze(e, t), [e]), o = n.state?.demoWorkspaceId === e, [s] = (0, q.useState)(() => Ee(window.indexedDB, e)), [c, l] = (0, q.useState)(null), [u, d] = (0, q.useState)(null);
	return (0, q.useEffect)(() => {
		let n = !0;
		return t.read(e).then(async (t) => {
			let r = t?.record ? {
				status: "ready",
				record: t.record
			} : await s.load();
			if (n) {
				if (!t) {
					d("This workspace is not saved in this browser.");
					return;
				}
				Ye(e), l({
					record: r.record,
					metadata: t.metadata,
					...r.status === "recovery" ? {
						recoveryMessage: r.reason,
						recoveryRaw: r.raw
					} : {}
				});
			}
		}).catch((e) => {
			n && d(e instanceof Error ? e.message : "Could not load this home.");
		}), () => {
			n = !1;
		};
	}, [
		e,
		s,
		t
	]), (0, q.useEffect)(() => {
		let n = !0, r = () => {
			t.read(e).then((e) => {
				n && (e ? c && e.metadata.homeAssistantUrl !== c.metadata.homeAssistantUrl && d("This workspace's connection changed in another tab. Reopen it from Workspaces.") : d("This workspace was deleted in another tab."));
			}).catch(() => {
				n && d("Could not verify this workspace. Reopen it from Workspaces.");
			});
		};
		return window.addEventListener("focus", r), () => {
			n = !1, window.removeEventListener("focus", r);
		};
	}, [
		e,
		t,
		c
	]), u ? /* @__PURE__ */ (0, J.jsxs)("main", {
		className: "direction-project-loading is-error",
		children: [
			/* @__PURE__ */ (0, J.jsx)("strong", { children: "Could not open this workspace." }),
			/* @__PURE__ */ (0, J.jsx)("p", { children: u }),
			/* @__PURE__ */ (0, J.jsx)(V, {
				to: "/workspaces?import=home-assistant",
				children: "Open from Home Assistant"
			}),
			/* @__PURE__ */ (0, J.jsx)(V, {
				to: "/workspaces",
				children: "Workspaces"
			})
		]
	}) : c ? /* @__PURE__ */ (0, J.jsx)(ee.Provider, {
		value: a,
		children: /* @__PURE__ */ (0, J.jsx)(_, {
			hostSession: o ? null : void 0,
			homeAssistantUrl: o ? null : c.metadata.homeAssistantUrl,
			children: /* @__PURE__ */ (0, J.jsxs)(Ce, {
				id: e,
				origin: c.metadata.homeAssistantUrl,
				repository: t,
				hidden: o,
				children: [/* @__PURE__ */ (0, J.jsx)(ft, {
					record: c.record,
					id: e
				}), /* @__PURE__ */ (0, J.jsx)(dt, {
					onboarding: {
						isDemo: o,
						welcome: o && r.pathname === "/welcome",
						nudgeDismissed: n.state?.nudgeDismissed ?? !0,
						busy: n.busy,
						start: n.start,
						dismiss: async (e) => {
							e === "welcome" && i("/demo"), await n.dismiss(e);
						},
						openWelcome: () => void i("/welcome"),
						links: $e
					},
					record: c.record,
					lifecycle: s,
					recoveryMessage: c.recoveryMessage,
					recoveryRaw: c.recoveryRaw,
					homeAssistantUrl: c.metadata.homeAssistantUrl,
					onHomeAssistantUrlChange: async (n, r) => {
						let i = await t.setConnection(e, (r ?? c.record).revision, n);
						if (!i.record) throw Error("Could not save the connection.");
						return l((e) => e && {
							...e,
							metadata: i.metadata,
							record: i.record
						}), i.record;
					}
				})]
			})
		})
	}) : /* @__PURE__ */ (0, J.jsx)("main", {
		className: "direction-project-loading",
		children: "Loading your home…"
	});
}
//#endregion
//#region apps/web/src/workspaces/BuildWorkspaceEntry.tsx
function mt({ onboarding: e }) {
	let t = (0, q.useRef)(!1);
	return (0, q.useEffect)(() => {
		t.current || (t.current = !0, e.start("build"));
	}, [e, e.start]), /* @__PURE__ */ (0, J.jsx)("main", {
		className: "direction-project-loading",
		children: e.error ? /* @__PURE__ */ (0, J.jsxs)(J.Fragment, { children: [
			/* @__PURE__ */ (0, J.jsx)("strong", { children: "Could not start your home." }),
			/* @__PURE__ */ (0, J.jsx)("p", { children: e.error }),
			/* @__PURE__ */ (0, J.jsx)("button", {
				disabled: e.busy,
				onClick: () => void e.start("build"),
				children: "Try again"
			}),
			/* @__PURE__ */ (0, J.jsx)(V, {
				to: "/workspaces",
				children: "Workspaces"
			})
		] }) : "Opening your home…"
	});
}
//#endregion
//#region apps/web/src/workspaces/migrate-single-home-storage.ts
var ht = "cabane:ha-url:v1", gt = "cabane:ha-auth:v1";
function _t(e) {
	return n(e.getItem(ht));
}
async function vt(e, t, r) {
	if (await e.migrationDone()) return;
	let i = await e.read(t);
	if (i?.error) return;
	let a = _t(r);
	i?.record && a && !i.metadata.homeAssistantUrl && (i = await e.setConnection(t, i.record.revision, a)), i?.record && a && await le(i.record, a);
	let o = r.getItem(gt);
	if (o) {
		let e = JSON.parse(o), t = n(e.hassUrl);
		if (!t || !e.clientId) throw Error("The saved Home Assistant sign-in needs recovery.");
		let i = u(t, e.clientId);
		if (r.getItem(i) === null && r.setItem(i, o), !te(r, t, e.clientId)) throw Error("Could not preserve the saved Home Assistant sign-in.");
	}
	r.removeItem(gt), r.removeItem(ht), i?.record && a && (r.removeItem(D(a, t)), r.removeItem(w(a, t))), await e.finishMigration();
}
//#endregion
//#region apps/web/src/workspaces/initialize-workspaces.ts
async function yt(e, t, { skipLegacyMigration: n = !1 } = {}) {
	let r = o(e, z), i, a = null;
	try {
		!n && !await r.migrationDone() && (a = _t(t));
	} catch (e) {
		i = e instanceof Error ? e.message : "Saved connection data needs recovery.";
	}
	let s = {
		...M,
		home: {
			...M.home,
			name: "Demo home"
		}
	};
	await r.initialize(s, a);
	try {
		n || await vt(r, M.home.id, t);
	} catch (e) {
		i = e instanceof Error ? e.message : "Saved connection data needs recovery.";
	}
	return {
		repository: r,
		migrationError: i
	};
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceApplication.tsx
function bt() {
	let e = K(), t = x(), n = B(), [r, i] = (0, q.useState)(null);
	(0, q.useEffect)(() => {
		e.pathname !== "/" && i(null);
	}, [e.pathname]);
	let [a, o] = (0, q.useState)(null), s = tt(a), [c, l] = (0, q.useState)(null), [u, d] = (0, q.useState)(null), [p, m] = (0, q.useState)(), [h] = (0, q.useState)(() => !!t), [g] = (0, q.useState)(() => t ? null : ge());
	(0, q.useEffect)(() => {
		let e = !0;
		return yt(window.indexedDB, window.localStorage, { skipLegacyMigration: h }).then(async (t) => {
			let n = await t.repository.list();
			e && (o(t.repository), l(n), m(t.migrationError));
		}).catch((t) => {
			e && d(t instanceof Error ? t.message : "Browser storage is unavailable.");
		}), () => {
			e = !1;
		};
	}, [h]);
	let _ = (0, q.useCallback)(async () => {
		a && l(await a.list());
	}, [a]);
	(0, q.useEffect)(() => {
		if (e.pathname !== "/" && e.pathname !== "/workspaces") return;
		let t = () => {
			_().catch((e) => d(String(e)));
		};
		return t(), window.addEventListener("focus", t), () => window.removeEventListener("focus", t);
	}, [_, e.pathname]);
	let v = (0, q.useCallback)(async (e) => {
		await _(), await n(F(e), { replace: !0 });
	}, [_, n]);
	if (u) return /* @__PURE__ */ (0, J.jsxs)("main", {
		className: "direction-project-loading is-error",
		children: [
			/* @__PURE__ */ (0, J.jsx)("strong", { children: "Could not load your workspaces." }),
			/* @__PURE__ */ (0, J.jsx)("p", { children: u }),
			/* @__PURE__ */ (0, J.jsx)("button", {
				onClick: () => window.location.reload(),
				children: "Try again"
			})
		]
	});
	if (!a || !c) return /* @__PURE__ */ (0, J.jsx)("main", {
		className: "direction-project-loading",
		children: "Loading your workspaces…"
	});
	if (e.pathname.startsWith("/open/")) return /* @__PURE__ */ (0, J.jsx)(qe, {
		repository: a,
		onOpened: v
	});
	let y = !t && e.pathname !== "/workspaces" && new URLSearchParams(e.search).has("auth_callback"), b = y ? g : null;
	if (y) {
		if (!b || !c.some((e) => e.metadata.id === b.workspaceId)) return /* @__PURE__ */ (0, J.jsxs)("main", {
			className: "direction-project-loading is-error",
			children: [
				/* @__PURE__ */ (0, J.jsx)("strong", { children: "This sign-in no longer has a workspace." }),
				/* @__PURE__ */ (0, J.jsx)("p", { children: "Open the intended workspace and sign in again." }),
				/* @__PURE__ */ (0, J.jsx)("button", {
					onClick: () => void n("/workspaces", { replace: !0 }),
					children: "Workspaces"
				})
			]
		});
		if (ae(e.pathname) !== b.workspaceId) return /* @__PURE__ */ (0, J.jsx)(W, {
			to: `${F(b.workspaceId)}${e.search}`,
			replace: !0
		});
	}
	if (e.pathname === "/") {
		if (r) return /* @__PURE__ */ (0, J.jsx)(W, {
			to: r,
			replace: !0
		});
		if (!s.loaded) return /* @__PURE__ */ (0, J.jsx)("main", {
			className: "direction-project-loading",
			children: "Loading your home…"
		});
		if (t && s.state && !s.state.welcomeDismissed && c.length === 1 && c[0].metadata.id === s.state.demoWorkspaceId) return /* @__PURE__ */ (0, J.jsx)(Ge, {
			session: t,
			repository: a,
			onRestored: async (e) => {
				i(F(e)), await _(), await s.dismiss("welcome");
			},
			onBuild: async () => {
				i("/build");
			},
			onExplore: async () => {
				i("/demo"), await s.dismiss("welcome");
			},
			onCancel: async () => {
				i("/workspaces"), await s.dismiss("welcome");
			}
		});
		let e = c.find((e) => e.metadata.id === Je()) ?? (c.length === 1 ? c[0] : void 0);
		return e && s.state && e.metadata.id === s.state.demoWorkspaceId ? /* @__PURE__ */ (0, J.jsx)(W, {
			to: s.state.welcomeDismissed ? "/demo" : "/welcome",
			replace: !0
		}) : /* @__PURE__ */ (0, J.jsx)(W, {
			to: e ? F(e.metadata.id) : "/workspaces",
			replace: !0
		});
	}
	let S = e.pathname === "/welcome" || e.pathname === "/demo", C = e.pathname === "/build";
	if ((S || C) && !s.loaded) return /* @__PURE__ */ (0, J.jsx)("main", {
		className: "direction-project-loading",
		children: "Loading your home…"
	});
	if (S && !c.some((e) => e.metadata.id === s.state?.demoWorkspaceId)) return /* @__PURE__ */ (0, J.jsxs)("main", {
		className: "direction-project-loading is-error",
		children: [/* @__PURE__ */ (0, J.jsx)("strong", { children: "The demo home is no longer in this browser." }), /* @__PURE__ */ (0, J.jsx)(V, {
			to: "/workspaces",
			children: "Workspaces"
		})]
	});
	if (C && !s.state?.destinations.build) return /* @__PURE__ */ (0, J.jsx)(mt, { onboarding: s });
	let w = S ? s.state?.demoWorkspaceId : C ? s.state?.destinations.build : ae(e.pathname);
	if (w) return /* @__PURE__ */ (0, J.jsxs)(J.Fragment, { children: [s.error && /* @__PURE__ */ (0, J.jsxs)("div", {
		className: "workspace-connection-error",
		role: "alert",
		children: [
			s.error,
			s.deleted && /* @__PURE__ */ (0, J.jsx)("button", {
				disabled: s.busy,
				onClick: () => void s.start(s.deleted.path, s.deleted.id),
				children: "Create a new home"
			}),
			/* @__PURE__ */ (0, J.jsx)("button", {
				onClick: () => void n("/workspaces"),
				children: "Workspaces"
			}),
			/* @__PURE__ */ (0, J.jsx)("button", {
				onClick: s.clearError,
				children: "Dismiss"
			})
		]
	}), s.loaded ? /* @__PURE__ */ (0, J.jsx)(pt, {
		id: w,
		repository: a,
		onboarding: s
	}, w) : /* @__PURE__ */ (0, J.jsx)("main", {
		className: "direction-project-loading",
		children: "Loading your home…"
	})] });
	if (e.pathname !== "/workspaces") return /* @__PURE__ */ (0, J.jsx)(W, {
		to: "/",
		replace: !0
	});
	let T = (e) => {
		let t = c.find((t) => t.metadata.id === e);
		if (!t) throw Error("Workspace no longer exists. Refresh the library.");
		return t;
	}, E = (e) => {
		let t = T(e);
		if (!t.record) throw Error(t.error ?? "This home needs recovery.");
		return t.record;
	}, D = async (e) => {
		await n(F(e));
	}, O = async (e) => {
		let t = T(e), n = await a.readRaw(e);
		if (t.record && (await a.read(e))?.record?.revision !== t.record.revision) throw Error("This workspace changed. Refresh before deleting it.");
		await a.delete(e, n), await ne(e), Qe(e), ce(e);
		try {
			window.localStorage.removeItem(f(e));
		} catch {}
	};
	return /* @__PURE__ */ (0, J.jsxs)(J.Fragment, { children: [p && /* @__PURE__ */ (0, J.jsxs)("p", {
		role: "alert",
		className: "workspace-error",
		children: [p, " Your saved source data has been retained."]
	}), /* @__PURE__ */ (0, J.jsx)(ot, {
		demoWorkspaceId: s.state?.demoWorkspaceId,
		onSettings: async (e, t) => {
			await n(`${F(e)}/home-assistant${t ? `?action=${t}` : ""}`);
		},
		onAgentPilot: async (e) => {
			await n(N(e));
		},
		entries: c,
		onOpen: D,
		onRecover: D,
		onCreate: async (e) => {
			let t = await a.createBlank(e);
			je(t.metadata.id), await _(), await D(t.metadata.id);
		},
		onRename: async (e, t) => {
			await a.rename(e, E(e).revision, t), await _();
		},
		onDuplicate: async (e, t) => {
			await a.duplicate(e, E(e).revision, t), await _();
		},
		renderDelete: (e, t, n) => /* @__PURE__ */ (0, J.jsx)(Be, {
			repository: a,
			target: { entry: e },
			onDeleteLocal: () => O(e.metadata.id),
			onDeleted: async () => {
				await _(), t();
			},
			onCancel: t,
			onBusyChange: n
		}),
		onImport: async (e) => {
			let t = ye(e, z), n = await a.create(t.record, t);
			await _(), await D(n.metadata.id);
		},
		onExport: async (e, t) => {
			let n = T(e), r = E(e), i = t ? G(n.metadata, r) : A(r.draft);
			await U(i, `${e}-${t ? "backup" : "project"}.cabane`);
		},
		onExportRaw: async (e) => {
			let t = await a.readRaw(e);
			if (t === null) throw Error("No saved record exists.");
			L(t, `${e}-recovery.json`);
		},
		renderSuggestions: (e, t) => /* @__PURE__ */ (0, J.jsx)(We, {
			repository: a,
			onRestored: v,
			localWorkspaceIds: c.map((e) => e.metadata.id),
			busy: e,
			onBusyChange: t
		}),
		remoteImport: /* @__PURE__ */ (0, J.jsx)(Ue, {
			repository: a,
			onRestored: async (e) => {
				await _(), await D(e);
			},
			initialOrigin: c.find((e) => e.metadata.homeAssistantUrl)?.metadata.homeAssistantUrl ?? null
		})
	})] });
}
//#endregion
//#region apps/web/src/panel/panel-element.ts
var xt = /* @__PURE__ */ new WeakMap();
function St(e, t) {
	let n = xt.get(e);
	n || xt.set(e, n = /* @__PURE__ */ new Map());
	let r = n.get(t);
	if (!r) {
		let i = e.createElement("link");
		i.rel = "stylesheet", i.href = t, i.dataset.cabaneFonts = "", e.head.append(i), n.set(t, r = {
			link: i,
			count: 0
		});
	}
	return r.count++, () => {
		--r.count === 0 && (r.link.remove(), n.delete(t));
	};
}
function Ct(e) {
	return class extends HTMLElement {
		#e = null;
		#t = null;
		#n = null;
		#r = null;
		#i;
		#a;
		#o;
		#s;
		#c = () => this.#l();
		constructor() {
			super();
			let t = this.ownerDocument, n = this.attachShadow({ mode: "open" }), r = t.createElement("link");
			r.rel = "stylesheet", r.href = new URL("cabane-panel.css", e.assetBaseUrl).href;
			let i = t.createElement("style");
			i.textContent = "\n        :host { display:grid; grid-template-rows:48px minmax(0,1fr); height:calc(100dvh - var(--cabane-panel-top, 0px) - var(--safe-area-inset-bottom, 0px)); min-height:0; min-width:0; contain:layout paint; }\n        .panel-toolbar { display:flex; gap:12px; align-items:center; background:var(--app-header-background-color,#f4efe5); color:var(--app-header-text-color,#35433a); font:500 16px system-ui; padding:0 12px; border-bottom:1px solid #80808030; }\n        .panel-toolbar button { display:grid; place-items:center; background:none; border:0; color:inherit; width:40px; height:40px; padding:8px; border-radius:8px; }\n        .panel-toolbar svg { width:24px; height:24px; fill:currentColor; }\n        .panel-content { position:relative; min-width:0; min-height:0; overflow:hidden; contain:layout paint; container:cabane / size; }\n        #root { position:relative; inset:auto; width:100%; height:100%; min-width:0; margin:0; overflow:hidden; }\n        #cabane-portals { position:absolute; inset:0; pointer-events:none; z-index:1000; }\n        #cabane-portals > * { pointer-events:auto; }\n        .panel-waiting { position:absolute; inset:0; display:grid; place-items:center; padding:24px; font:14px system-ui; background:#f4efe5; color:#35433a; }\n        .panel-waiting[hidden] { display:none; }\n      ";
			let a = t.createElement("header");
			a.className = "panel-toolbar";
			let o = t.createElement("button");
			o.type = "button", o.setAttribute("aria-label", "Open Home Assistant menu"), o.innerHTML = "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z\"/></svg>", o.addEventListener("click", () => this.dispatchEvent(new this.ownerDocument.defaultView.CustomEvent("hass-toggle-menu", {
				bubbles: !0,
				composed: !0
			}))), a.append(o, t.createTextNode("Cabane")), this.#i = t.createElement("div"), this.#i.className = "panel-content", this.#a = t.createElement("div"), this.#a.id = "root", this.#o = t.createElement("div"), this.#o.id = "cabane-portals", this.#s = t.createElement("div"), this.#s.className = "panel-waiting", this.#s.setAttribute("role", "status"), this.#s.textContent = "Waiting for the Home Assistant session…", r.addEventListener("error", () => {
				this.#s.hidden = !1, this.#s.textContent = "Cabane’s files could not load. Reload Home Assistant after updating the integration.";
			}), this.#i.append(this.#a, this.#o, this.#s), n.append(r, i, a, this.#i);
		}
		set hass(e) {
			let t = e?.connection;
			t !== this.#e?.connection && (this.#e = t ? {
				connection: t,
				origin: this.ownerDocument.location.origin
			} : null, this.#u());
		}
		set narrow(e) {
			this.toggleAttribute("narrow", e);
		}
		set route(e) {}
		set panel(e) {}
		connectedCallback() {
			this.ownerDocument.defaultView?.addEventListener("resize", this.#c), this.#r ??= St(this.ownerDocument, new URL("cabane-fonts.css", e.assetBaseUrl).href), typeof ResizeObserver < "u" && (this.#n = new ResizeObserver(() => this.#l()), this.#n.observe(this.#i)), this.#l(), this.#u();
		}
		disconnectedCallback() {
			this.ownerDocument.defaultView?.removeEventListener("resize", this.#c), this.#t?.dispose(), this.#t = null, this.#n?.disconnect(), this.#n = null, this.#r?.(), this.#r = null, this.#o.replaceChildren();
		}
		#l() {
			this.style.setProperty("--cabane-panel-top", `${Math.max(0, this.getBoundingClientRect().top)}px`);
			let { width: e, height: t } = this.#i.getBoundingClientRect();
			e > 0 && this.style.setProperty("--cabane-panel-width", `${e}px`), t > 0 && this.style.setProperty("--cabane-panel-height", `${t}px`);
		}
		#u() {
			if (this.isConnected) {
				if (this.#s.hidden = !!this.#e, !this.#e) {
					this.#t?.dispose(), this.#t = null;
					return;
				}
				this.#t ? this.#t.update(this.#e) : this.#t = e.mount({
					container: this.#a,
					portalContainer: this.#o,
					root: this.shadowRoot,
					assetBaseUrl: e.assetBaseUrl,
					session: this.#e
				});
			}
		}
	};
}
//#endregion
//#region apps/web/src/panel/main.tsx
var wt = new URL(
	/* @vite-ignore */
	"./",
	import.meta.url
).href;
customElements.get("cabane-panel") || customElements.define("cabane-panel", Ct({
	assetBaseUrl: wt,
	mount({ container: e, portalContainer: t, root: n, session: r }) {
		let i = (0, Re.createRoot)(e), a = ue([{
			path: "*",
			errorElement: /* @__PURE__ */ (0, J.jsx)(Ie, {}),
			element: /* @__PURE__ */ (0, J.jsx)(bt, {})
		}], { initialEntries: ["/"] }), o = {
			root: n,
			container: e,
			portalContainer: t,
			eventTarget: n,
			assetBaseUrl: wt
		}, s = (e) => i.render(/* @__PURE__ */ (0, J.jsx)(q.StrictMode, { children: /* @__PURE__ */ (0, J.jsx)(Le, { children: /* @__PURE__ */ (0, J.jsx)(k, {
			environment: o,
			children: /* @__PURE__ */ (0, J.jsx)(T, {
				session: e,
				children: /* @__PURE__ */ (0, J.jsx)(ve, { router: a })
			})
		}) }) }));
		return s(r), {
			update: s,
			dispose() {
				i.unmount(), a.dispose();
			}
		};
	}
}));
//#endregion
