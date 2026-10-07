import { r as e } from "./rolldown-runtime-B0aSnxlc.js";
import { $n as t, $t as n, A as r, An as i, At as a, B as o, Bn as s, C as c, Cn as l, Ct as u, Dt as d, En as f, Et as p, Fn as m, Gn as h, Gt as g, H as _, Hn as v, Ht as y, I as b, In as x, J as S, Jn as C, K as w, Kn as T, Kt as E, L as D, Ln as O, M as k, Mn as A, Mt as j, N as M, Nn as N, Nt as P, On as F, Ot as I, P as L, Pn as R, Pt as z, Qn as ee, Qt as te, R as ne, Rn as re, Sn as B, St as ie, T as ae, Tn as oe, Tt as se, U as ce, Un as le, Ut as ue, V as de, Vn as V, W as fe, Wn as pe, Wt as H, Xn as me, Y as U, Yn as he, Yt as ge, Zn as _e, Zt as ve, _n as ye, _t as be, a as xe, an as Se, ar as W, at as Ce, bn as we, bt as Te, c as Ee, cn as G, cr as De, ct as Oe, dn as ke, dr as K, dt as Ae, en as je, er as Me, et as Ne, f as Pe, fn as q, fr as Fe, ft as Ie, g as J, gn as Le, gr as Re, gt as ze, h as Be, hn as Ve, hr as He, ht as Ue, i as Y, in as We, ir as Ge, j as Ke, jn as qe, jt as Je, k as Ye, kn as Xe, kt as Ze, ln as Qe, lr as $e, lt as et, mn as tt, mr as X, mt as nt, n as rt, nn as it, nr as at, o as ot, on as st, or as ct, ot as lt, p as ut, pn as dt, pr as ft, pt, q as mt, qn as ht, qt as gt, r as _t, rn as vt, rr as yt, s as bt, sn as Z, sr as xt, st as St, t as Ct, tr as wt, tt as Tt, u as Et, un as Dt, ur as Ot, ut as kt, vn as At, vr as jt, vt as Mt, w as Nt, wn as Pt, wt as Ft, x as It, xn as Lt, xt as Rt, yn as zt, yr as Bt, yt as Vt, z as Ht, zn as Ut } from "./ShortcutDeviceIcon-BYrUAyEC.js";
//#region packages/engine/src/home-project/floor-operations.ts
var Wt = (e, t) => {
	let { project: n } = e;
	if (!t.trim() || n.floors.some((e) => e.id === t)) throw Error("Choose a unique floor ID.");
	let r = n.floors.at(-1);
	if (!r) throw Error("A building requires a ground floor.");
	let i = {
		id: t,
		name: `Floor ${n.floors.length}`,
		coordinates: n.coordinates,
		floorToFloorHeightMeters: r.floorToFloorHeightMeters,
		defaultWallHeightMeters: r.defaultWallHeightMeters,
		defaultCeilingHeightMeters: r.defaultCeilingHeightMeters,
		footprint: [],
		rooms: [],
		walls: [],
		wallJunctions: [],
		openings: [],
		ceilings: []
	};
	return {
		...e,
		project: {
			...n,
			floors: [...n.floors, i]
		}
	};
}, Gt = (e, t, n) => {
	if (!e.project.floors.some((e) => e.id === t)) throw Error("The floor no longer exists.");
	return {
		...e,
		project: {
			...e.project,
			floors: e.project.floors.map((e) => e.id === t ? n(e) : e)
		}
	};
}, Kt = (e, t, n) => {
	if (!n.trim()) throw Error("Enter a floor name.");
	return Gt(e, t, (e) => ({
		...e,
		name: n.trim()
	}));
}, qt = (e, t, n) => {
	if (!Number.isFinite(n) || n <= 0) throw Error("Floor height must be positive finite metres.");
	return Gt(e, t, (e) => ({
		...e,
		floorToFloorHeightMeters: n
	}));
}, Jt = (e) => {
	let { project: t } = e;
	if (t.floors.length <= 1) throw Error("The ground floor cannot be removed.");
	let n = t.floors.at(-1), r = new Set(n.rooms.map((e) => e.id)), i = new Set(n.openings.map((e) => e.id)), a = [
		...n.rooms.flatMap((e) => t.roomProfiles[e.id]?.dashboardSlots.map((e) => e.id) ?? []),
		...n.openings.flatMap((e) => [t.openingProfiles[e.id]?.contactSlot?.id, t.openingProfiles[e.id]?.coverSlot?.id].filter((e) => !!e)),
		...t.sceneItems.flatMap((e) => e.floorId === n.id && e.kind === "device" ? e.entitySlots.map((e) => e.id) : [])
	], o = g(e.bindings, a);
	return {
		project: {
			...t,
			floors: t.floors.slice(0, -1),
			home: t.home.walkStart?.floorId === n.id ? (({ walkStart: e, ...t }) => t)(t.home) : t.home,
			sceneItems: t.sceneItems.filter((e) => e.floorId !== n.id),
			stairs: t.stairs.filter((e) => e.lowerFloorId !== n.id && e.upperFloorId !== n.id),
			roomProfiles: Object.fromEntries(Object.entries(t.roomProfiles).filter(([e]) => !r.has(e))),
			openingProfiles: Object.fromEntries(Object.entries(t.openingProfiles).filter(([e]) => !i.has(e)))
		},
		bindings: Object.fromEntries(Object.entries(o).map(([e, t]) => [e, {
			...t,
			draft: {
				...t.draft,
				roomAreaIds: Object.fromEntries(Object.entries(t.draft.roomAreaIds).filter(([e]) => !r.has(e)))
			},
			manualRoomIds: t.manualRoomIds.filter((e) => !r.has(e))
		}]))
	};
}, Q = /* @__PURE__ */ e(Bt(), 1);
//#endregion
//#region apps/web/src/editor-onboarding/build-tutorial-progress.ts
function Yt(e, t, n) {
	let r = n[0] - t[0], i = n[1] - t[1], a = Math.hypot(r, i);
	if (a < 1e-8) return !1;
	let o = ((e[0] - t[0]) * r + (e[1] - t[1]) * i) / a;
	return o >= -1e-5 && o <= a + 1e-5 && Math.abs((e[0] - t[0]) * i - (e[1] - t[1]) * r) / a < 1e-5;
}
function Xt(e, t, n) {
	return e.openings.some((r) => {
		if (r.kind !== n) return !1;
		let i = e.walls.find((e) => e.id === r.wallId);
		if (!i) return !1;
		let a = Math.hypot(i.to[0] - i.from[0], i.to[1] - i.from[1]);
		if (!a) return !1;
		let o = r.offsetFromWallStartPlanUnits + r.widthPlanUnits / 2, s = [i.from[0] + (i.to[0] - i.from[0]) * o / a, i.from[1] + (i.to[1] - i.from[1]) * o / a];
		return t.polygon.some((e, n) => Yt(s, e, t.polygon[(n + 1) % t.polygon.length]));
	});
}
function Zt(e, t, n) {
	if (e.status !== "active") return e;
	let r = t.floors.flatMap((e) => e.rooms.map((t) => ({
		floor: e,
		room: t
	}))), i = r.find(({ floor: t, room: n }) => t.id === e.target?.floorId && n.id === e.target.roomId) ?? r[0], a = {
		walls: !!i,
		door: !!(i && Xt(i.floor, i.room, "door")),
		window: !!(i && Xt(i.floor, i.room, "window")),
		name: !!i?.room.name.trim(),
		arrange: e.readyToConnect,
		connect: n === "connect"
	}, o = Ne.find((t) => !a[t] && !e.skipped.includes(t));
	return {
		...e,
		target: i ? {
			floorId: i.floor.id,
			roomId: i.room.id
		} : void 0,
		step: o ?? "connect",
		status: o ? "active" : "completed"
	};
}
//#endregion
//#region apps/web/src/editor-onboarding/useBuildTutorial.ts
function Qt(e, t) {
	let n = e.home.id, [i, a] = (0, Q.useState)(() => Ye(n)), o = i.state ? Zt(i.state, e, t) : void 0, s = (e) => {
		let t = r(n, e);
		a({
			state: e,
			durable: t
		});
	}, c = JSON.stringify(o);
	return (0, Q.useEffect)(() => {
		o && c !== JSON.stringify(i.state) && s(o);
	}, [c]), {
		state: o,
		warning: i.durable ? null : "Tutorial progress could not be saved. Your home is still editable.",
		dismiss: () => o && s({
			...o,
			status: "dismissed"
		}),
		skip: () => o && s({
			...o,
			skipped: [.../* @__PURE__ */ new Set([...o.skipped, o.step])]
		}),
		ready: () => o && s({
			...o,
			readyToConnect: !0
		}),
		restart: () => s(Tt())
	};
}
((e) => ({
	type: "object",
	additionalProperties: !1,
	required: Object.keys(e),
	properties: e
}))({});
//#endregion
//#region apps/web/src/editor-plan-import/PlanImportActions.tsx
var $ = i(), $t = {
	walls: [
		"Create your first room",
		"Click to start a wall, then click each corner. Return to the first corner to close your room.",
		"Select Wall"
	],
	door: [
		"Add a door",
		"Choose Door, then click a wall of your first room to place it.",
		"Select Door"
	],
	window: [
		"Add a window",
		"Choose Window, then click a wall of your first room to let the light in.",
		"Select Window"
	],
	name: [
		"Name your room",
		"Click “Name room” on the plan and give this space a name.",
		"Name room"
	],
	arrange: [
		"Make it your room",
		"Go to Arrange to add furniture and devices. Take your time; continue whenever you’re ready.",
		"Go to Arrange"
	],
	connect: [
		"Connect your home",
		"Link your rooms and devices to Home Assistant. You can keep editing your home later.",
		"Go to Connect"
	]
};
function en({ state: e, mode: t, disabled: n, warning: r, onAction: i, onSkip: a, onDismiss: o }) {
	let [s, c, l] = $t[e.step];
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		className: "build-tutorial",
		"aria-label": "Build your first room",
		children: [
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "build-tutorial__heading",
				children: [/* @__PURE__ */ (0, $.jsxs)("span", { children: [
					"Getting started · ",
					Ne.indexOf(e.step) + 1,
					" of 6"
				] }), /* @__PURE__ */ (0, $.jsx)("button", {
					type: "button",
					"aria-label": "Dismiss tutorial",
					title: "Dismiss tutorial",
					onClick: o,
					children: "×"
				})]
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				"aria-live": "polite",
				"aria-atomic": "true",
				children: [/* @__PURE__ */ (0, $.jsx)("h2", { children: s }), /* @__PURE__ */ (0, $.jsx)("p", { children: c })]
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "build-tutorial__actions",
				children: [/* @__PURE__ */ (0, $.jsx)("button", {
					className: "build-tutorial__primary",
					type: "button",
					disabled: n,
					onClick: i,
					children: e.step === "arrange" && t === "furnish" ? "I’m ready" : l
				}), /* @__PURE__ */ (0, $.jsx)("button", {
					type: "button",
					disabled: n,
					onClick: a,
					children: "Skip step"
				})]
			}),
			r && /* @__PURE__ */ (0, $.jsx)("p", {
				role: "status",
				children: r
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/contextual-validation.ts
var tn = {
	walls: "wall",
	openings: "opening",
	rooms: "room",
	pools: "pool",
	ceilings: "ceiling",
	wallJunctions: "junction",
	sceneItems: "scene-item"
}, nn = {
	"floor-zone.polygon": "Move a corner until the floor area is simple and has visible area.",
	"floor-zone.outside-room": "Move or delete the floor area so it stays inside its room.",
	"ground-zone.inside-footprint": "Move the outdoor area so it stays outside the building.",
	"project.outdoor-placement": "Move the outdoor item outside the building, keeping it on the ground.",
	"pool.polygon": "Move a corner until the outline no longer crosses itself, or undo the edit.",
	"pool.building-overlap": "Move the pool outdoors, leaving room for its 0.25 m rim beside house walls.",
	"pool.overlap": "Move or reshape a pool so their rims do not touch.",
	"topology.walls-required": "Draw at least three walls around a closed room.",
	"topology.wall-id": "Give every wall a unique, non-empty ID.",
	"topology.wall-length": "Move an endpoint or remove the zero-length wall.",
	"topology.wall-overlap": "Move, shorten, or remove one of the overlapping walls.",
	"topology.no-rooms": "Connect the wall endpoints to close a room.",
	"topology.incomplete-shell": "Complete or remove the open wall component.",
	"topology.hole": "Split the layout into supported room faces without an enclosed hole.",
	"topology.room-merge": "Choose the room identity to retain after the merge.",
	"topology.room-name": "Give the room a name before publishing.",
	"topology.opening-wall": "Move the opening onto an existing wall or remove it.",
	"topology.opening-containment": "Move or resize the opening so it fits inside its wall.",
	"topology.opening-split": "Move the opening fully onto one homogeneous wall section.",
	"room.polygon-invalid": "Undo the last structural move, or move the crossing corner until the room outline no longer crosses itself.",
	"wall-junction.opening-overlap": "Move or resize the opening away from this corner, or move the corner itself.",
	"editor.ceiling-support-missing": "Move the item into a room or restore its ceiling support.",
	"editor.ceiling-support-ambiguous": "Move the item away from the shared room boundary."
}, rn = (e, t) => e === "sceneItems" ? t.sceneItems ?? [] : t.floor[e] ?? [], an = (e) => {
	let t = "walls|wallJunctions|openings|rooms|ceilings|pools|sceneItems", n = e.match(RegExp(`(?:^|\\.)(?<collection>${t})(?:\\[(?<bracket>[^\\]]+)\\]|\\.(?<dotted>[^.\\[]+))`));
	if (n?.groups) return {
		collection: n.groups.collection,
		reference: (n.groups.bracket ?? n.groups.dotted).replace(/^["']|["']$/g, "")
	};
	let r = e.match(RegExp(`(?:^|/)(?<collection>${t})/(?<reference>[^/]+)`));
	return r?.groups ? {
		collection: r.groups.collection,
		reference: r.groups.reference
	} : void 0;
}, on = (e, t) => {
	let n = e.match(/(?:^|\.)rooms\[(\d+)\]\.floorZones\[(\d+)\]/);
	if (n) {
		let e = t.floor.rooms[Number(n[1])]?.floorZones?.[Number(n[2])];
		if (e) return {
			kind: "floor-zone",
			id: e.id
		};
	}
	let r = e.match(/(?:^|\.)groundZones\[(\d+)\]/);
	if (r) {
		let e = t.floor.groundZones?.[Number(r[1])];
		if (e) return {
			kind: "floor-zone",
			id: e.id
		};
	}
	let i = an(e);
	if (!i) return;
	let a = rn(i.collection, t), o = /^(?:0|[1-9]\d*)$/.test(i.reference) ? Number(i.reference) : void 0, s = o === void 0 ? a.find((e) => e.id === i.reference) : a[o];
	if (s) return {
		kind: tn[i.collection],
		id: s.id
	};
}, sn = {
	fatal: 0,
	error: 1,
	warning: 2
}, cn = {
	topology: 0,
	project: 1,
	dependency: 2,
	navigation: 3
}, ln = (e) => [
	e.code,
	e.path,
	e.message,
	e.target?.kind ?? "",
	e.target?.id ?? ""
].join("\0"), un = (e, t, n) => {
	let r = e.target ?? on(e.path, n);
	return r?.kind === "room" && (e.code === "topology.room-name" || e.code === "room.name" || e.code === "project.string" && /(?:\.name|\/name)$/.test(e.path)) ? {
		...e,
		code: "room.name",
		path: `rooms[${JSON.stringify(r.id)}].name`,
		message: "This room needs a name.",
		source: t,
		target: r,
		suggestion: "Click “Name room” on the plan, or enter a name in the room panel before applying."
	} : {
		...e,
		source: t,
		target: r,
		suggestion: e.suggestion ?? nn[e.code] ?? "Review the highlighted context and correct this issue before publishing."
	};
}, dn = /* @__PURE__ */ new Set([
	"topology.walls-required",
	"topology.no-rooms",
	"topology.incomplete-shell",
	"topology.room-name",
	"room.name"
]), fn = (e) => !e.walls.length && !e.rooms.length && !e.footprint.length && !e.openings.length && !e.ceilings?.length && !e.wallJunctions?.length && !e.pools?.length && !e.groundZones?.length && !e.hedges?.length, pn = (e, t, n) => {
	let r = e.filter((e) => t !== null && n && fn(n.floor) && !n.hasItems && (e.code === "topology.walls-required" && e.source === "topology" || e.code === "project.floor-empty" && e.path === `floors[${n.floorIndex}].footprint`) ? !1 : t !== "wall" || !dn.has(e.code));
	return r.length === e.length ? e : r;
}, mn = (e) => {
	let t = [
		...(e.topologyIssues ?? []).map((t) => un(t, "topology", e)),
		...(e.projectIssues ?? []).map((t) => un(t, "project", e)),
		...(e.dependencyIssues ?? []).map((t) => un(t, "dependency", e)),
		...(e.navigationIssues ?? []).map((t) => un(t, "navigation", e))
	], n = /* @__PURE__ */ new Map();
	for (let e of t) {
		let t = ln(e), r = n.get(t);
		(!r || sn[e.severity] < sn[r.severity]) && n.set(t, e);
	}
	return [...n.values()].sort((e, t) => sn[e.severity] - sn[t.severity] || cn[e.source] - cn[t.source] || e.path.localeCompare(t.path) || e.code.localeCompare(t.code) || e.message.localeCompare(t.message));
}, hn = {
	construct: {
		title: "Construct",
		description: "Draw your floor plan, then select walls, rooms or openings to edit them."
	},
	furnish: {
		title: "Arrange",
		description: "Choose furniture and devices from the catalog, then place them in your home."
	},
	connect: {
		title: "Connect",
		description: "Link your rooms and devices to Home Assistant to control them from Home."
	},
	shortcuts: {
		title: "Shortcuts",
		description: "Customize the action bar on Home with your favorite actions, rooms and devices."
	}
};
function gn({ mode: e }) {
	let { title: t, description: n } = hn[e];
	return /* @__PURE__ */ (0, $.jsxs)("header", {
		className: "editor-mode-introduction",
		children: [/* @__PURE__ */ (0, $.jsx)("h2", { children: t }), /* @__PURE__ */ (0, $.jsx)("p", { children: n })]
	});
}
//#endregion
//#region apps/web/src/editor-floors/stair-candidate-validation.ts
function _n(e, t) {
	return {
		...e,
		stairs: [...e.stairs.filter((e) => e.id !== t.id), t]
	};
}
function vn(e, t) {
	let n = _n(e, t);
	return G(n).filter((e) => e.path === `stairs[${n.stairs.length - 1}]`);
}
function yn(e, t) {
	return Qe(e, t) !== null;
}
//#endregion
//#region apps/web/src/editor-chrome/EditorActionButton.tsx
var bn = jt();
function xn({ icon: e, label: t, shortcut: n, keyShortcuts: r, showLabel: i = !1, pressed: a, disabled: o, disabledReason: s, warning: c, onClick: l }) {
	let u = Xe(), d = (0, Q.useId)(), [f, p] = (0, Q.useState)(null), m = (e) => {
		if (o) return;
		let t = e.currentTarget.getBoundingClientRect(), n = u.root === document ? null : u.portalContainer.getBoundingClientRect(), r = n?.width ?? window.innerWidth, i = Math.min(112, r / 2);
		p({
			left: Math.max(i, Math.min(r - i, t.left + t.width / 2 - (n?.left ?? 0))),
			top: t.bottom + 9 - (n?.top ?? 0)
		});
	};
	return (0, Q.useEffect)(() => {
		if (!f) return;
		let e = () => p(null), t = (t) => {
			t.key === "Escape" && e();
		};
		return window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), u.events.addEventListener("keydown", t), () => {
			window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0), u.events.removeEventListener("keydown", t);
		};
	}, [f]), /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("button", {
		type: "button",
		className: "editor-action-button",
		"aria-label": t,
		title: o ? s : void 0,
		"aria-description": o ? s : c,
		"aria-pressed": a,
		"aria-keyshortcuts": r,
		disabled: o,
		"aria-describedby": f && !o ? d : void 0,
		onClick: l,
		onFocus: m,
		onBlur: () => p(null),
		onMouseEnter: m,
		onMouseLeave: (e) => {
			u.root.activeElement !== e.currentTarget && p(null);
		},
		children: [
			/* @__PURE__ */ (0, $.jsx)(J, { name: e }),
			i && /* @__PURE__ */ (0, $.jsx)("span", { children: t }),
			c && /* @__PURE__ */ (0, $.jsx)("span", {
				className: "editor-action-button__warning",
				children: /* @__PURE__ */ (0, $.jsx)(J, { name: "warning" })
			})
		]
	}), f && !o && (0, bn.createPortal)(/* @__PURE__ */ (0, $.jsxs)("div", {
		role: "tooltip",
		id: d,
		className: "editor-action-tooltip",
		style: f,
		children: [c ?? t, n && /* @__PURE__ */ (0, $.jsx)("kbd", { children: n })]
	}), u.portalContainer)] });
}
//#endregion
//#region apps/web/src/editor-chrome/SelectionDetailsPanel.tsx
function Sn({ children: e, title: t, subtitle: n, label: r, mode: i = "furnish", onClose: a }) {
	let o = Xe(), s = (0, Q.useRef)(null);
	return (0, Q.useEffect)(() => {
		let e = o.root.activeElement instanceof HTMLElement ? o.root.activeElement : null;
		return s.current?.focus(), () => {
			e?.isConnected && e.focus();
		};
	}, []), /* @__PURE__ */ (0, $.jsx)("aside", {
		ref: s,
		className: "selection-details",
		"data-mode": i,
		"aria-label": r,
		tabIndex: -1,
		onKeyDown: (e) => {
			e.key === "Escape" && e.target.tagName !== "INPUT" && (e.preventDefault(), e.stopPropagation(), a());
		},
		children: /* @__PURE__ */ (0, $.jsx)("div", {
			className: "furnishing-editor-inspector",
			children: /* @__PURE__ */ (0, $.jsxs)("section", { children: [/* @__PURE__ */ (0, $.jsxs)("header", { children: [/* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsx)("small", { children: n }), /* @__PURE__ */ (0, $.jsx)("strong", { children: t })] }), /* @__PURE__ */ (0, $.jsx)(xn, {
				icon: "close",
				label: "Close details",
				onClick: a
			})] }), e] })
		})
	});
}
//#endregion
//#region apps/web/src/editor-chrome/CommittedNumberInput.tsx
function Cn({ label: e, value: t, min: n, step: r = .1, onCommit: i }) {
	let [a, o] = (0, Q.useState)(String(t)), s = (0, Q.useRef)(!1);
	return (0, Q.useEffect)(() => o(String(t)), [t]), /* @__PURE__ */ (0, $.jsx)("input", {
		"aria-label": e,
		type: "number",
		min: n,
		step: r,
		value: a,
		onChange: (e) => o(e.target.value),
		onBlur: () => {
			if (s.current) {
				s.current = !1;
				return;
			}
			let e = Number(a);
			Number.isFinite(e) && e !== t ? i(e) : o(String(t));
		},
		onKeyDown: (e) => {
			e.key === "Enter" && e.currentTarget.blur(), e.key === "Escape" && (s.current = !0, o(String(t)), e.currentTarget.blur());
		}
	});
}
//#endregion
//#region apps/web/src/editor-floors/StairDetails.tsx
function wn({ project: e, stair: t, onSave: n, onCancel: r }) {
	let [i, a] = (0, Q.useState)(t);
	(0, Q.useEffect)(() => a(t), [t]);
	let o = vn(e, i), s = (t) => {
		a(t), yn(e, t) && n(t);
	}, c = (e, t, n, r) => /* @__PURE__ */ (0, $.jsxs)("label", {
		className: "construction-inspector__single-control",
		children: [e, /* @__PURE__ */ (0, $.jsx)(Cn, {
			label: e,
			value: Number(t.toFixed(2)),
			min: r,
			onCommit: n
		})]
	});
	return /* @__PURE__ */ (0, $.jsxs)(Sn, {
		mode: "construct",
		title: "Stairs",
		subtitle: `To ${e.floors.find((e) => e.id === i.upperFloorId)?.name}`,
		label: "Stair properties",
		onClose: r,
		children: [
			c("Width (m)", i.widthMeters, (e) => s({
				...i,
				widthMeters: e
			}), .1),
			c("Length (m)", i.runMeters, (e) => s({
				...i,
				runMeters: e
			}), .1),
			/* @__PURE__ */ (0, $.jsxs)("details", {
				className: "selection-details-advanced",
				children: [
					/* @__PURE__ */ (0, $.jsx)("summary", { children: "Advanced" }),
					c("Rotation (degrees)", i.rotationYRadians * 180 / Math.PI, (e) => s({
						...i,
						rotationYRadians: e * Math.PI / 180
					})),
					c("Start X (plan units)", i.at[0], (e) => s({
						...i,
						at: [e, i.at[1]]
					})),
					c("Start Y (plan units)", i.at[1], (e) => s({
						...i,
						at: [i.at[0], e]
					}))
				]
			}),
			o.map((e) => /* @__PURE__ */ (0, $.jsx)("p", {
				role: "alert",
				children: e.message
			}, e.code))
		]
	});
}
//#endregion
//#region apps/web/src/editor-floors/FloorManagementDialog.tsx
function Tn({ action: e, name: t, itemCount: n, stairCount: r, height: i, onSave: a, onCancel: o }) {
	let s = Xe(), c = (0, Q.useRef)(null), [l, u] = (0, Q.useState)(t), [d, f] = (0, Q.useState)(String(i));
	return (0, Q.useEffect)(() => {
		let e = s.root.activeElement;
		return c.current?.showModal?.(), () => e?.focus();
	}, []), /* @__PURE__ */ (0, $.jsx)("dialog", {
		ref: c,
		className: "floor-paint-confirmation",
		"aria-labelledby": "floor-management-title",
		onCancel: (e) => {
			e.preventDefault(), o();
		},
		children: /* @__PURE__ */ (0, $.jsxs)("form", {
			onSubmit: (e) => {
				e.preventDefault(), a(l.trim(), Number(d));
			},
			style: {
				display: "grid",
				gap: 12,
				padding: 20
			},
			children: [
				/* @__PURE__ */ (0, $.jsx)("h2", {
					id: "floor-management-title",
					children: e === "remove" ? `Remove ${t}?` : "Floor settings"
				}),
				e === "remove" ? /* @__PURE__ */ (0, $.jsxs)("p", { children: [
					"This removes the top floor, its ",
					n,
					" items and ",
					r,
					" connecting stairs. You can undo this change."
				] }) : /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Floor name", /* @__PURE__ */ (0, $.jsx)("input", {
					autoFocus: !0,
					required: !0,
					value: l,
					onChange: (e) => u(e.target.value)
				})] }), /* @__PURE__ */ (0, $.jsxs)("label", { children: ["Floor-to-floor height (m)", /* @__PURE__ */ (0, $.jsx)("input", {
					type: "number",
					required: !0,
					min: "0.1",
					step: "0.01",
					value: d,
					onChange: (e) => f(e.target.value)
				})] })] }),
				/* @__PURE__ */ (0, $.jsx)("button", {
					type: "submit",
					disabled: e === "rename" && (!l.trim() || !Number.isFinite(Number(d)) || Number(d) <= 0),
					children: e === "remove" ? "Remove top floor" : "Save floor"
				}),
				/* @__PURE__ */ (0, $.jsx)("button", {
					type: "button",
					onClick: o,
					children: "Cancel"
				})
			]
		})
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/OpeningOrientationControls.tsx
function En({ opening: e, onChange: t, disabled: n, showLabel: r = !1 }) {
	if (e.kind === "passage") return null;
	let i = ye(e);
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		i.canSwapHinge && /* @__PURE__ */ (0, $.jsx)(xn, {
			icon: "swapHinge",
			label: "Swap hinge side",
			showLabel: r,
			disabled: n,
			onClick: () => t("hinge")
		}),
		i.canReverseSlide && /* @__PURE__ */ (0, $.jsx)(xn, {
			icon: "reverseSlide",
			label: "Reverse slide direction",
			showLabel: r,
			disabled: n,
			onClick: () => t("slide")
		}),
		i.canSwitchSide && /* @__PURE__ */ (0, $.jsx)(xn, {
			icon: "switchSide",
			label: e.operation === "sliding" ? "Switch wall side" : "Reverse opening direction",
			showLabel: r,
			disabled: n,
			onClick: () => t("side")
		})
	] });
}
//#endregion
//#region apps/web/src/editor-preview/openings/opening-preview-entry.tsx
function Dn(e, t) {
	let n = e.floors.find((e) => e.openings.some((e) => e.id === t)), r = n?.openings.find((e) => e.id === t), i = n?.walls.find((e) => e.id === r?.wallId);
	return !n || !r || !i || r.kind === "passage" ? null : On(r, n, i, r.visualModel ? e.extensions.openingModels[r.visualModel] : void 0);
}
function On(e, t, n, r) {
	let i = e.widthPlanUnits * t.coordinates.metersPerPlanUnit, a = {
		...e,
		offsetFromWallStartPlanUnits: 0,
		widthPlanUnits: i,
		sillHeightMeters: 0
	}, o = {
		...n,
		from: [0, 0],
		to: [i, 0]
	}, s = {
		...t,
		coordinates: {
			...t.coordinates,
			origin: [0, 0],
			metersPerPlanUnit: 1
		}
	}, c = a.kind === "door" && a.operation === "sliding" && a.variant === "plank", l = o.thicknessMeters / 2 + .18;
	return {
		key: `opening:${JSON.stringify([
			a,
			o.thicknessMeters,
			o.exteriorColor,
			o.faceColors
		])}`,
		kind: "procedural",
		definition: {
			bounds: {
				min: [
					c ? -i : -.1,
					-.08,
					-l
				],
				max: [
					c ? i * 2 : i + .1,
					a.openingHeightMeters + .15,
					l
				]
			},
			component: () => {
				let e = {
					wall: o,
					floor: s,
					position: 0,
					reducedMotion: !0
				};
				return r ? /* @__PURE__ */ (0, $.jsx)(r, {
					...e,
					opening: a
				}) : a.kind === "door" ? /* @__PURE__ */ (0, $.jsx)(Ee, {
					...e,
					opening: a
				}) : /* @__PURE__ */ (0, $.jsx)(bt, {
					...e,
					opening: a
				});
			}
		}
	};
}
//#endregion
//#region apps/web/src/editor-preview/construct/DoorPresetPalette.tsx
var kn = {
	id: "door-preview",
	name: "Door preview",
	floorToFloorHeightMeters: 3,
	coordinates: {
		origin: [0, 0],
		metersPerPlanUnit: 1,
		scaleBasis: "inferred"
	},
	defaultWallHeightMeters: 3,
	defaultCeilingHeightMeters: 3,
	footprint: [],
	walls: [],
	rooms: [],
	openings: [],
	wallJunctions: []
}, An = xe.map((e) => ({
	preset: e,
	entry: On(Je(e.configuration, 1, {
		id: e.id,
		wallId: "preview-wall",
		offsetFromWallStartPlanUnits: 0
	}), kn, {
		id: "preview-wall",
		from: [0, 0],
		to: [e.configuration.widthMeters, 0],
		classification: "interior",
		thicknessMeters: .16
	})
})), jn = (e, t) => e.operation === t.operation && e.variant === t.variant && (e.openingSide ?? "right") === (t.openingSide ?? "right") && (e.hingeSide ?? "start") === (t.hingeSide ?? "start") && (e.slideDirection ?? "start") === (t.slideDirection ?? "start") && e.finish === t.finish && e.leafCount === t.leafCount && Math.abs(e.widthMeters - t.widthMeters) < 1e-6 && Math.abs(e.heightMeters - t.heightMeters) < 1e-6;
function Mn({ value: e, onChange: t }) {
	let n = (0, Q.useRef)(null), r = An.find(({ preset: t }) => jn(e, t.configuration))?.preset.id;
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		className: "door-preset-palette",
		"aria-label": "Door type",
		children: [/* @__PURE__ */ (0, $.jsx)(Y, {
			scrollRoot: n,
			enabled: !0,
			children: /* @__PURE__ */ (0, $.jsx)("div", {
				className: "floor-finish-palette__grid door-preset-palette__grid",
				ref: n,
				role: "group",
				"aria-label": "Door presets",
				children: An.map(({ preset: e, entry: n }) => /* @__PURE__ */ (0, $.jsxs)("button", {
					type: "button",
					"aria-label": e.label,
					"aria-pressed": r === e.id,
					onClick: () => t({ ...e.configuration }),
					children: [/* @__PURE__ */ (0, $.jsx)(_t, {
						entry: n,
						showAdd: !1,
						fallback: /* @__PURE__ */ (0, $.jsx)("span", { children: "Preview unavailable" })
					}), /* @__PURE__ */ (0, $.jsx)("small", { children: e.label })]
				}, e.id))
			})
		}), !r && /* @__PURE__ */ (0, $.jsx)("p", {
			className: "construction-inspector__tool-hint",
			children: "Custom"
		})]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/DoorDesignFields.tsx
function Nn({ value: e, onChange: t, showSize: n = !0 }) {
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [n && /* @__PURE__ */ (0, $.jsxs)("fieldset", { children: [
		/* @__PURE__ */ (0, $.jsx)("legend", { children: "Size" }),
		/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Width", /* @__PURE__ */ (0, $.jsx)(Cn, {
			label: "Door width",
			min: .3,
			value: e.widthMeters,
			onCommit: (n) => t({
				...e,
				widthMeters: n
			})
		})] }),
		/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Height", /* @__PURE__ */ (0, $.jsx)(Cn, {
			label: "Door height",
			min: .3,
			value: e.heightMeters,
			onCommit: (n) => t({
				...e,
				heightMeters: n
			})
		})] })
	] }), /* @__PURE__ */ (0, $.jsxs)("fieldset", {
		className: "construction-inspector__variants",
		children: [
			/* @__PURE__ */ (0, $.jsx)("legend", { children: "Door design" }),
			/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Motion", /* @__PURE__ */ (0, $.jsxs)("select", {
				"aria-label": "Door operation",
				value: e.operation,
				onChange: (n) => {
					let r = {
						kind: "door",
						finish: e.finish,
						openingSide: e.openingSide,
						widthMeters: e.widthMeters,
						heightMeters: e.heightMeters
					};
					n.target.value === "roll-up" ? t({
						...r,
						operation: "roll-up",
						variant: "slatted"
					}) : n.target.value === "sliding" ? t({
						...r,
						operation: "sliding",
						variant: e.operation === "roll-up" ? "panel" : e.variant,
						leafCount: e.leafCount ?? 1
					}) : t({
						...r,
						operation: "hinged",
						variant: e.operation === "roll-up" ? "panel" : e.variant,
						leafCount: e.leafCount ?? 1
					});
				},
				children: [
					/* @__PURE__ */ (0, $.jsx)("option", {
						value: "hinged",
						children: "Hinged"
					}),
					/* @__PURE__ */ (0, $.jsx)("option", {
						value: "sliding",
						children: "Sliding"
					}),
					/* @__PURE__ */ (0, $.jsx)("option", {
						value: "roll-up",
						children: "Roll-up"
					})
				]
			})] }),
			e.operation === "roll-up" ? /* @__PURE__ */ (0, $.jsxs)("label", { children: ["Style", /* @__PURE__ */ (0, $.jsx)("select", {
				"aria-label": "Door style",
				value: "slatted",
				disabled: !0,
				children: /* @__PURE__ */ (0, $.jsx)("option", {
					value: "slatted",
					children: "Slatted"
				})
			})] }) : /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Style", /* @__PURE__ */ (0, $.jsxs)("select", {
				"aria-label": "Door style",
				value: e.variant,
				onChange: (n) => t({
					...e,
					variant: n.target.value
				}),
				children: [
					/* @__PURE__ */ (0, $.jsx)("option", {
						value: "panel",
						children: "Panel"
					}),
					/* @__PURE__ */ (0, $.jsx)("option", {
						value: "french",
						children: "French"
					}),
					/* @__PURE__ */ (0, $.jsx)("option", {
						value: "full-glass",
						children: "Full glass"
					}),
					/* @__PURE__ */ (0, $.jsx)("option", {
						value: "plank",
						children: "Plank"
					})
				]
			})] }), /* @__PURE__ */ (0, $.jsxs)("label", { children: ["Leaves", /* @__PURE__ */ (0, $.jsxs)("select", {
				"aria-label": "Door leaf count",
				value: e.leafCount,
				onChange: (n) => t({
					...e,
					leafCount: Number(n.target.value)
				}),
				children: [/* @__PURE__ */ (0, $.jsx)("option", {
					value: 1,
					children: "Single"
				}), /* @__PURE__ */ (0, $.jsx)("option", {
					value: 2,
					children: "Double"
				})]
			})] })] }),
			/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Finish", /* @__PURE__ */ (0, $.jsxs)("select", {
				"aria-label": "Door finish",
				value: e.finish,
				onChange: (n) => t({
					...e,
					finish: n.target.value
				}),
				children: [/* @__PURE__ */ (0, $.jsx)("option", {
					value: "wood",
					children: "Wood"
				}), /* @__PURE__ */ (0, $.jsx)("option", {
					value: "white",
					children: "White"
				})]
			})] })
		]
	})] });
}
//#endregion
//#region apps/web/src/editor-preview/construct/OpeningProperties.tsx
function Pn({ opening: e, editor: t, advanced: n }) {
	let r = /* @__PURE__ */ (0, $.jsxs)("fieldset", { children: [
		/* @__PURE__ */ (0, $.jsx)("legend", { children: "Wall position" }),
		/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Offset", /* @__PURE__ */ (0, $.jsx)(Cn, {
			label: "Opening wall offset",
			min: 0,
			value: e.offsetPlanUnits,
			onCommit: (e) => t.updateSelectedOpening({ offsetPlanUnits: e })
		})] }),
		/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Wall", /* @__PURE__ */ (0, $.jsx)("input", {
			"aria-label": "Opening wall identifier",
			type: "text",
			value: e.wallId,
			readOnly: !0
		})] })
	] });
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		/* @__PURE__ */ (0, $.jsxs)("fieldset", { children: [
			/* @__PURE__ */ (0, $.jsx)("legend", { children: "Size" }),
			/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Width", /* @__PURE__ */ (0, $.jsx)(Cn, {
				label: "Opening width",
				min: .3,
				value: e.widthPlanUnits * t.previewFloor.coordinates.metersPerPlanUnit,
				onCommit: (e) => t.updateSelectedOpening({ widthPlanUnits: e / t.previewFloor.coordinates.metersPerPlanUnit })
			})] }),
			/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Height", /* @__PURE__ */ (0, $.jsx)(Cn, {
				label: "Opening height",
				min: .3,
				value: e.openingHeightMeters,
				onCommit: (e) => t.updateSelectedOpening({ openingHeightMeters: e })
			})] })
		] }),
		e.kind === "window" && /* @__PURE__ */ (0, $.jsxs)("label", {
			className: "construction-inspector__single-control",
			children: ["Height from floor", /* @__PURE__ */ (0, $.jsx)(Cn, {
				label: "Window height from floor",
				min: 0,
				value: e.sillHeightMeters,
				onCommit: (e) => t.updateSelectedOpening({ sillHeightMeters: e })
			})]
		}),
		e.kind === "door" && (() => {
			let n = t.previewFloor.coordinates.metersPerPlanUnit, r = a({
				...e,
				offsetFromWallStartPlanUnits: e.offsetPlanUnits
			}, n), i = (r) => {
				let { offsetFromWallStartPlanUnits: i, ...a } = Je(r, n, {
					id: e.id,
					wallId: e.wallId,
					offsetFromWallStartPlanUnits: e.offsetPlanUnits
				});
				t.replaceSelectedOpening({
					...a,
					offsetPlanUnits: i
				});
			};
			return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
				/* @__PURE__ */ (0, $.jsx)(Mn, {
					value: r,
					onChange: i
				}),
				/* @__PURE__ */ (0, $.jsx)(Nn, {
					value: r,
					onChange: i,
					showSize: !1
				}),
				t.openingError && /* @__PURE__ */ (0, $.jsx)("p", {
					role: "alert",
					children: t.openingError
				})
			] });
		})(),
		e.kind === "window" && /* @__PURE__ */ (0, $.jsxs)("fieldset", {
			className: "construction-inspector__variants",
			children: [
				/* @__PURE__ */ (0, $.jsx)("legend", { children: "Window design" }),
				/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Motion", /* @__PURE__ */ (0, $.jsxs)("select", {
					"aria-label": "Window operation",
					value: e.operation,
					onChange: (n) => t.replaceSelectedOpening({
						...e,
						operation: n.target.value
					}),
					children: [/* @__PURE__ */ (0, $.jsx)("option", {
						value: "fixed",
						children: "Fixed"
					}), /* @__PURE__ */ (0, $.jsx)("option", {
						value: "casement",
						children: "Casement"
					})]
				})] }),
				/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Style", /* @__PURE__ */ (0, $.jsxs)("select", {
					"aria-label": "Window style",
					value: e.variant,
					onChange: (n) => {
						let r = n.target.value;
						t.replaceSelectedOpening({
							...e,
							variant: r,
							muntins: r === "muntined" ? e.muntins ?? {
								columns: 2,
								rows: 2
							} : void 0
						});
					},
					children: [/* @__PURE__ */ (0, $.jsx)("option", {
						value: "plain",
						children: "Plain"
					}), /* @__PURE__ */ (0, $.jsx)("option", {
						value: "muntined",
						children: "Muntined"
					})]
				})] }),
				/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Glass", /* @__PURE__ */ (0, $.jsxs)("select", {
					"aria-label": "Window glazing",
					value: e.glazing,
					onChange: (n) => t.replaceSelectedOpening({
						...e,
						glazing: n.target.value
					}),
					children: [/* @__PURE__ */ (0, $.jsx)("option", {
						value: "clear",
						children: "Clear"
					}), /* @__PURE__ */ (0, $.jsx)("option", {
						value: "privacy",
						children: "Privacy"
					})]
				})] }),
				/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Panels", /* @__PURE__ */ (0, $.jsxs)("select", {
					"aria-label": "Window panel count",
					value: e.panelCount,
					onChange: (n) => t.replaceSelectedOpening({
						...e,
						panelCount: Number(n.target.value)
					}),
					children: [/* @__PURE__ */ (0, $.jsx)("option", {
						value: 1,
						children: "One"
					}), /* @__PURE__ */ (0, $.jsx)("option", {
						value: 2,
						children: "Two"
					})]
				})] }),
				e.variant === "muntined" && /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Columns", /* @__PURE__ */ (0, $.jsx)(Cn, {
					label: "Muntin columns",
					min: 1,
					step: 1,
					value: e.muntins?.columns ?? 2,
					onCommit: (n) => t.replaceSelectedOpening({
						...e,
						muntins: {
							columns: Math.max(1, Math.round(n)),
							rows: e.muntins?.rows ?? 2
						}
					})
				})] }), /* @__PURE__ */ (0, $.jsxs)("label", { children: ["Rows", /* @__PURE__ */ (0, $.jsx)(Cn, {
					label: "Muntin rows",
					min: 1,
					step: 1,
					value: e.muntins?.rows ?? 2,
					onCommit: (n) => t.replaceSelectedOpening({
						...e,
						muntins: {
							columns: e.muntins?.columns ?? 2,
							rows: Math.max(1, Math.round(n))
						}
					})
				})] })] })
			]
		}),
		e.kind === "passage" && /* @__PURE__ */ (0, $.jsxs)("fieldset", {
			className: "construction-inspector__variants",
			children: [
				/* @__PURE__ */ (0, $.jsx)("legend", { children: "Passage design" }),
				/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Shape", /* @__PURE__ */ (0, $.jsxs)("select", {
					"aria-label": "Passage shape",
					value: e.variant,
					onChange: (n) => {
						if (n.target.value === "arched") t.replaceSelectedOpening({
							...e,
							variant: "arched",
							archRiseMeters: .12
						});
						else {
							let { archRiseMeters: n, ...r } = e;
							t.replaceSelectedOpening({
								...r,
								variant: "rectangular"
							});
						}
					},
					children: [/* @__PURE__ */ (0, $.jsx)("option", {
						value: "rectangular",
						children: "Rectangular"
					}), /* @__PURE__ */ (0, $.jsx)("option", {
						value: "arched",
						children: "Arched"
					})]
				})] }),
				e.variant === "arched" && /* @__PURE__ */ (0, $.jsxs)("label", { children: ["Arch rise", /* @__PURE__ */ (0, $.jsx)(Cn, {
					label: "Passage arch rise",
					min: .05,
					step: .01,
					value: e.archRiseMeters,
					onCommit: (n) => t.replaceSelectedOpening({
						...e,
						archRiseMeters: n
					})
				})] })
			]
		}),
		n === void 0 ? /* @__PURE__ */ (0, $.jsxs)("details", {
			className: "opening-properties__advanced",
			children: [/* @__PURE__ */ (0, $.jsx)("summary", { children: "Advanced" }), r]
		}) : n && r
	] });
}
//#endregion
//#region apps/web/src/editor-preview/construct/opening-plan-symbol.ts
function Fn(e, t, n) {
	let r = [], i = (e, t, n, i) => {
		r.push({
			from: e,
			to: t,
			color: n,
			width: i
		});
	};
	if (i([0, -n / 2], [0, n / 2], "#596057"), i([t, -n / 2], [t, n / 2], "#596057"), e.kind === "passage") return r;
	if (e.kind === "door" && e.operation === "roll-up") {
		for (let e of [-.035, .035]) i([0, e], [t, e], "#7d8581", .025);
		return r;
	}
	let a = ye(e), o = e.kind === "window" ? "#789a98" : "#94765e";
	if (e.kind === "window") {
		for (let e of [-1, 1]) i([0, e * n * .23], [t, e * n * .23], o);
		if (e.operation === "fixed") return r;
	}
	for (let r of a.leaves) {
		let s = t * r.widthRatio;
		if (e.operation === "sliding") {
			let e = a.sideSign * (n / 2 + .06), c = t * r.startRatio;
			i([c, e], [c + s, e], o, .04);
			let l = c + s / 2, u = l + r.slideSign * s * .38, d = e + a.sideSign * .15;
			i([l - r.slideSign * s * .25, d], [u, d], o);
			for (let e of [-1, 1]) i([u - r.slideSign * s * .13, d + e * .07], [u, d], o);
		} else {
			let n = r.pivotRatio * t, c = e.kind === "window" ? Math.PI / 4 : Math.PI / 2, l = Array.from({ length: 17 }, (e, t) => [n + r.extentSign * s * Math.cos(t * c / 16), a.sideSign * s * Math.sin(t * c / 16)]);
			i([n, 0], l[16], o), l.slice(1).forEach((e, t) => i(l[t], e, o, .015));
		}
	}
	return r;
}
//#endregion
//#region apps/web/src/editor-preview/construct/OpeningDetails.tsx
function In({ opening: e, editor: t, disabled: n, onClose: r }) {
	let i = e.widthPlanUnits * t.draft.coordinates.metersPerPlanUnit, a = t.draft.walls.find((t) => t.id === e.wallId)?.thicknessMeters ?? t.draft.interiorWallThicknessMeters, o = Fn(e, i, a), s = o.flatMap((e) => [e.from, e.to]), c = Math.min(0, ...s.map((e) => e[0])) - .2, l = Math.max(i, ...s.map((e) => e[0])) + .2, u = Math.max(.3, ...s.map((e) => Math.abs(e[1]))) + .12, d = ye(e).canSwitchSide, f = e.kind === "door" ? "Door" : "Window";
	return /* @__PURE__ */ (0, $.jsx)(Sn, {
		mode: "construct",
		title: `${f} properties`,
		subtitle: "Selected opening",
		label: `${f} properties`,
		onClose: r,
		children: /* @__PURE__ */ (0, $.jsxs)("div", {
			inert: n,
			children: [d && /* @__PURE__ */ (0, $.jsxs)("fieldset", {
				className: "opening-direction",
				children: [
					/* @__PURE__ */ (0, $.jsx)("legend", { children: "Opening direction" }),
					/* @__PURE__ */ (0, $.jsxs)("svg", {
						className: "opening-direction__diagram",
						viewBox: `${c} ${-u} ${l - c} ${u * 2}`,
						role: "img",
						"aria-label": `${f} opening direction in plan view`,
						children: [/* @__PURE__ */ (0, $.jsx)("path", {
							d: `M${c} 0H0M${i} 0H${l}`,
							stroke: "#596057",
							strokeWidth: a
						}), o.map((e, t) => /* @__PURE__ */ (0, $.jsx)("line", {
							x1: e.from[0],
							y1: e.from[1],
							x2: e.to[0],
							y2: e.to[1],
							stroke: e.color,
							strokeWidth: e.width ?? .025
						}, t))]
					}),
					/* @__PURE__ */ (0, $.jsx)(En, {
						opening: e,
						showLabel: !0,
						disabled: n,
						onChange: (n) => t.dispatch({
							type: "reorient-opening",
							openingId: e.id,
							change: n
						})
					})
				]
			}), /* @__PURE__ */ (0, $.jsx)(Pn, {
				opening: e,
				editor: t
			})]
		})
	});
}
var Ln = (e, t) => ({
	dragActive: !1,
	dragClientFrom: t,
	pointerId: e
}), Rn = (e, t, n) => !e || e.pointerId !== t ? null : e.dragActive ? {
	drag: e,
	started: !1
} : Math.hypot(n[0] - e.dragClientFrom[0], n[1] - e.dragClientFrom[1]) < 8 ? null : {
	drag: {
		...e,
		dragActive: !0
	},
	started: !0
};
//#endregion
//#region apps/web/src/editor-preview/construct/segment-gesture.ts
function zn(e, t, n, r) {
	return r ? null : {
		pointerId: e,
		client: t,
		point: n
	};
}
function Bn(e, t, n) {
	return e?.pointerId === t && Math.hypot(n[0] - e.client[0], n[1] - e.client[1]) < 8;
}
//#endregion
//#region apps/web/src/editor-preview/construct/drag-geometry.ts
var Vn = (e) => Number(e.toFixed(6)), Hn = (e, t) => [Vn(e.x / t.metersPerPlanUnit + t.origin[0]), Vn(e.z / t.metersPerPlanUnit + t.origin[1])], Un = (e, t) => [Vn((e[0] - t.origin[0]) * t.metersPerPlanUnit), Vn((e[1] - t.origin[1]) * t.metersPerPlanUnit)], Wn = (e, t = !1, n = .1, r = [0, 0]) => t || !Number.isFinite(n) || n <= 0 ? e : [Vn(r[0] + Math.round((e[0] - r[0]) / n) * n), Vn(r[1] + Math.round((e[1] - r[1]) / n) * n)], Gn = ({ point: e, coordinates: t, absolute: n = !1, snapStepMeters: r = .1 }) => Wn(Hn(e, t), n, r / t.metersPerPlanUnit, t.origin), Kn = ({ point: e, coordinates: t, walls: n, pixelsPerMeter: r, pointerType: i, snapRadiusPixels: a, angleOrigin: o, angleReferenceRadians: s, movingEndpoint: c, onSnap: l, absolute: u = !1 }) => {
	let d = Hn(e, t);
	if (u) return l?.(null), d;
	let f = Mt({
		candidate: d,
		walls: n,
		pixelsPerMeter: r,
		pointerType: i,
		snapRadiusPixels: a,
		angleOrigin: o,
		angleReferenceRadians: s,
		movingEndpoint: c,
		coordinates: t
	});
	return l?.(f), f.point;
}, qn = (e, t, n) => {
	let [r, i] = Un(e, n), [a, o] = Un(t, n), s = -Math.atan2(o - i, a - r);
	return {
		center: [(r + a) / 2, (i + o) / 2],
		length: Math.hypot(a - r, o - i),
		rotationYRadians: Object.is(s, -0) ? 0 : s
	};
}, Jn = (e, t, n = .42) => {
	let r = e.to[0] - e.from[0], i = e.to[1] - e.from[1], a = Math.hypot(r, i), o = a * t.metersPerPlanUnit, s = a === 0 ? 0 : (Math.atan2(i, r) * 180 / Math.PI + 360) % 360, [c, l] = Un(e.from, t), [u, d] = Un(e.to, t), f = a === 0 ? 0 : -i / a, p = a === 0 ? 1 : r / a;
	return {
		planLength: a,
		lengthMeters: o,
		directionDegrees: s,
		label: `${o.toFixed(2)} m`,
		guideCenter: [(c + u) / 2 + f * n, (l + d) / 2 + p * n],
		rotationYRadians: -Math.atan2(d - l, u - c)
	};
}, Yn = (e, t) => {
	let n = t.to[0] - t.from[0], r = t.to[1] - t.from[1], i = Math.hypot(n, r);
	return i === 0 ? 0 : Math.max(0, Math.min(i, ((e[0] - t.from[0]) * n + (e[1] - t.from[1]) * r) / i));
}, Xn = ({ point: e, walls: t, widthPlanUnits: n, metersPerPlanUnit: r, maxDistanceMeters: i = .75 }) => t.map((t) => {
	let i = Math.hypot(t.to[0] - t.from[0], t.to[1] - t.from[1]), a = Yn(e, t), o = i === 0 ? 0 : a / i, s = [t.from[0] + (t.to[0] - t.from[0]) * o, t.from[1] + (t.to[1] - t.from[1]) * o];
	return {
		wallId: t.id,
		wallLengthPlanUnits: i,
		offsetPlanUnits: Math.max(0, Math.min(Math.max(0, i - n), a - n / 2)),
		distanceMeters: Math.hypot(e[0] - s[0], e[1] - s[1]) * r
	};
}).filter(({ distanceMeters: e, wallLengthPlanUnits: t }) => e <= i && t >= n).sort((e, t) => e.distanceMeters - t.distanceMeters)[0] ?? null, Zn = ({ walls: e, openings: t, wallId: n, offsetPlanUnits: r, widthPlanUnits: i, excludeOpeningId: a, clearancePlanUnits: o = .08 }) => {
	let s = e.find((e) => e.id === n);
	if (!s) return !1;
	let c = Math.hypot(s.to[0] - s.from[0], s.to[1] - s.from[1]);
	return r < 0 || r + i > c ? !1 : !t.some((e) => e.id !== a && e.wallId === n && r < e.offsetPlanUnits + e.widthPlanUnits + o && r + i + o > e.offsetPlanUnits);
}, Qn = ({ offsetPlanUnits: e, widthPlanUnits: t, edge: n, cursorOffsetPlanUnits: r, wallLengthPlanUnits: i, anchorOpposite: a, minimumWidthPlanUnits: o = .3 }) => {
	if (a) {
		let a = n === "start" ? e + t : e, s = n === "start" ? Math.min(a - o, Math.max(0, r)) : Math.max(a + o, Math.min(i, r));
		return n === "start" ? {
			offsetPlanUnits: Vn(s),
			widthPlanUnits: Vn(a - s)
		} : {
			offsetPlanUnits: Vn(a),
			widthPlanUnits: Vn(s - a)
		};
	}
	let s = e + t / 2, c = n === "start" ? s - r : r - s, l = Math.min(s, i - s), u = Math.max(o / 2, Math.min(l, c));
	return {
		offsetPlanUnits: Vn(s - u),
		widthPlanUnits: Vn(u * 2)
	};
}, $n = () => void 0;
function er({ color: e = "#fff7f1", ...t }) {
	return /* @__PURE__ */ (0, $.jsx)(zt, {
		...t,
		color: "#000000",
		emissive: e,
		emissiveIntensity: 1,
		toneMapped: !1
	});
}
function tr({ color: e, opacity: t = 1, overlay: n = !1 }) {
	return /* @__PURE__ */ (0, $.jsx)(zt, {
		color: "#000000",
		emissive: e,
		emissiveIntensity: 1,
		toneMapped: !1,
		side: 2,
		transparent: t < 1,
		opacity: t,
		depthTest: !n,
		depthWrite: !n && t === 1
	});
}
var nr = (0, Q.memo)(function({ from: e, to: t, color: n, width: r = .025, elevation: i = .045, overlay: a = !1 }) {
	let o = t[0] - e[0], s = t[1] - e[1];
	return /* @__PURE__ */ (0, $.jsxs)("mesh", {
		position: [
			(e[0] + t[0]) / 2,
			i,
			(e[1] + t[1]) / 2
		],
		rotation: [
			-Math.PI / 2,
			0,
			-Math.atan2(s, o)
		],
		raycast: $n,
		renderOrder: a ? 30 : 0,
		children: [/* @__PURE__ */ (0, $.jsx)("planeGeometry", { args: [Math.hypot(o, s), r] }), /* @__PURE__ */ (0, $.jsx)(tr, {
			color: n,
			overlay: a
		})]
	});
});
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionAlignmentGuide.tsx
function rr({ snap: e, coordinates: t }) {
	return e?.guideFrom ? /* @__PURE__ */ (0, $.jsx)("group", {
		name: "construction-alignment-guide",
		children: /* @__PURE__ */ (0, $.jsx)(nr, {
			from: Un(e.guideFrom, t),
			to: Un(e.point, t),
			color: "#cf6648",
			width: .018,
			elevation: .8
		})
	}) : null;
}
//#endregion
//#region apps/web/src/editor-preview/construct/PlanStrokeBatch.tsx
function ir(e) {
	let { from: t, to: n, width: r = .025, elevation: i = .045 } = e, a = n[0] - t[0], o = n[1] - t[1], s = Math.hypot(a, o);
	if (s === 0) return [];
	let c = -o / s * r / 2, l = a / s * r / 2, u = [
		t[0] + c,
		i,
		t[1] + l
	], d = [
		n[0] + c,
		i,
		n[1] + l
	], f = [
		n[0] - c,
		i,
		n[1] - l
	], p = [
		t[0] - c,
		i,
		t[1] - l
	];
	return [
		...u,
		...d,
		...f,
		...u,
		...f,
		...p
	];
}
function ar({ strokes: e, name: t }) {
	let n = (0, Q.useMemo)(() => {
		let t = /* @__PURE__ */ new Map();
		for (let n of e) {
			let e = JSON.stringify([n.color, !!n.overlay]);
			t.has(e) || t.set(e, {
				color: n.color,
				overlay: !!n.overlay,
				positions: []
			}), t.get(e).positions.push(...ir(n));
		}
		return [...t].map(([e, { positions: t, ...n }]) => {
			let r = new le();
			return r.setAttribute("position", new pe(t, 3)), r.computeVertexNormals(), r.computeBoundingSphere(), {
				key: e,
				geometry: r,
				...n
			};
		});
	}, [e]);
	return (0, Q.useEffect)(() => () => n.forEach((e) => e.geometry.dispose()), [n]), /* @__PURE__ */ (0, $.jsx)("group", {
		name: t,
		children: n.map((e) => /* @__PURE__ */ (0, $.jsx)("mesh", {
			geometry: e.geometry,
			raycast: $n,
			renderOrder: e.overlay ? 30 : 0,
			children: /* @__PURE__ */ (0, $.jsx)(tr, {
				color: e.color,
				overlay: e.overlay
			})
		}, e.key))
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionPlanWallJoints.tsx
var or = 1e-7, sr = (e, t) => e[0] * t[1] - e[1] * t[0];
function cr(e) {
	let t = e.coordinates.metersPerPlanUnit, n = e.walls.flatMap((n) => {
		let r = W(n.from, e.coordinates), i = W(n.to, e.coordinates), a = Math.hypot(i[0] - r[0], i[1] - r[1]);
		return a < or ? [] : [{
			from: r,
			to: i,
			length: a,
			direction: [(i[0] - r[0]) / a, (i[1] - r[1]) / a],
			halfWidth: (n.thicknessMeters ?? e.interiorWallThicknessMeters) / 2,
			gaps: e.openings.filter((e) => e.wallId === n.id).map((e) => [e.offsetPlanUnits * t, (e.offsetPlanUnits + e.widthPlanUnits) * t])
		}];
	}), r = [];
	for (let e of n.flatMap((e) => [e.from, e.to])) r.some((t) => Math.hypot(e[0] - t[0], e[1] - t[1]) < or) || r.push(e);
	let i = [];
	for (let e of r) {
		let t = n.flatMap((t) => {
			let n = [e[0] - t.from[0], e[1] - t.from[1]], r = n[0] * t.direction[0] + n[1] * t.direction[1];
			return Math.abs(sr(n, t.direction)) > or || r < -1e-7 || r > t.length + or ? [] : [1, -1].flatMap((e) => {
				let n = r + e * or;
				if (n < 0 || n > t.length || t.gaps.some(([e, t]) => n > e && n < t)) return [];
				let i = [t.direction[0] * e, t.direction[1] * e];
				return [{
					direction: i,
					halfWidth: t.halfWidth,
					angle: Math.atan2(i[1], i[0])
				}];
			});
		}).sort((e, t) => e.angle - t.angle);
		if (!(t.length < 2)) for (let n = 0; n < t.length; n += 1) {
			let r = t[n], a = t[(n + 1) % t.length];
			if ((a.angle - r.angle + Math.PI * 2) % (Math.PI * 2) <= Math.PI + or) continue;
			let o = [-r.direction[1] * r.halfWidth, r.direction[0] * r.halfWidth], s = [a.direction[1] * a.halfWidth, -a.direction[0] * a.halfWidth], c = sr(r.direction, a.direction), l = [[0, 0], o];
			if (Math.abs(c) > or) {
				let e = sr([s[0] - o[0], s[1] - o[1]], a.direction) / c, t = [o[0] + e * r.direction[0], o[1] + e * r.direction[1]];
				Math.hypot(...t) <= 4 * Math.max(r.halfWidth, a.halfWidth) && l.push(t);
			}
			l.push(s);
			for (let t = 1; t < l.length - 1; t += 1) for (let n of [
				l[0],
				l[t],
				l[t + 1]
			]) i.push(e[0] + n[0], .035, e[1] + n[1]);
		}
	}
	return i;
}
var lr = (0, Q.memo)(function({ draft: e }) {
	let t = (0, Q.useMemo)(() => {
		let t = new le();
		return t.setAttribute("position", new pe(cr(e), 3)), t.computeVertexNormals(), t;
	}, [
		e.walls,
		e.openings,
		e.coordinates,
		e.interiorWallThicknessMeters
	]);
	return (0, Q.useEffect)(() => () => t.dispose(), [t]), /* @__PURE__ */ (0, $.jsx)("mesh", {
		name: "plan-wall-joints",
		geometry: t,
		raycast: $n,
		children: /* @__PURE__ */ (0, $.jsx)(tr, { color: "#596057" })
	});
}), ur = (0, Q.memo)(function({ draft: e }) {
	let t = (0, Q.useMemo)(() => {
		let t = [];
		for (let n of e.walls) {
			let r = W(n.from, e.coordinates), i = W(n.to, e.coordinates), a = Math.hypot(i[0] - r[0], i[1] - r[1]);
			if (a < 1e-4) continue;
			let o = e.openings.filter((e) => e.wallId === n.id).sort((e, t) => e.offsetPlanUnits - t.offsetPlanUnits), s = e.coordinates.metersPerPlanUnit, c = [], l = 0;
			for (let e of o) {
				let t = Math.max(0, Math.min(a, e.offsetPlanUnits * s));
				t > l && c.push([l, t]), l = Math.max(l, Math.min(a, (e.offsetPlanUnits + e.widthPlanUnits) * s));
			}
			l < a && c.push([l, a]);
			let u = (e) => [r[0] + (i[0] - r[0]) * e / a, r[1] + (i[1] - r[1]) * e / a], d = n.thicknessMeters ?? e.interiorWallThicknessMeters;
			for (let [e, n] of c) t.push({
				from: u(e),
				to: u(n),
				width: d,
				color: "#596057",
				elevation: .035
			});
			for (let e of o) {
				let n = e.widthPlanUnits * s, o = u(e.offsetPlanUnits * s), c = (i[0] - r[0]) / a, l = (i[1] - r[1]) / a, f = (e) => [o[0] + c * e[0] - l * e[1], o[1] + l * e[0] + c * e[1]];
				for (let r of Fn(e, n, d)) t.push({
					...r,
					from: f(r.from),
					to: f(r.to)
				});
			}
		}
		return t;
	}, [
		e.walls,
		e.openings,
		e.coordinates,
		e.interiorWallThicknessMeters
	]);
	return /* @__PURE__ */ (0, $.jsxs)("group", {
		name: "construction-plan-walls",
		children: [/* @__PURE__ */ (0, $.jsx)(lr, { draft: e }), /* @__PURE__ */ (0, $.jsx)(ar, {
			name: "wall-and-opening-strokes",
			strokes: t
		})]
	});
});
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionDistanceLabel.tsx
function dr({ label: e, ariaLabel: t = "Measurement", copyText: n = e, onCopy: r }) {
	return r ? /* @__PURE__ */ (0, $.jsx)("button", {
		type: "button",
		className: "construction-measure-label",
		"aria-label": `Copy measurement: ${e}`,
		title: "Copy measurement",
		onPointerDown: (e) => e.stopPropagation(),
		onClick: (e) => {
			e.stopPropagation(), r(n);
		},
		children: e
	}) : /* @__PURE__ */ (0, $.jsx)("output", {
		className: "construction-measure-label",
		"aria-label": t,
		children: e
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/plan-screen-scale.ts
var fr = (e, t, n = 82) => {
	if (!(e instanceof T)) return n;
	let r = t * e.zoom / (e.top - e.bottom);
	return Number.isFinite(r) && r > 0 ? r : n;
}, pr = (e = "mouse") => e === "touch" ? 36 : e === "pen" ? 28 : 24;
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionAngleGuide.tsx
function mr({ angle: e, coordinates: n, planMode: r, labelKind: i = "Wall" }) {
	let a = r ? er : zt, o = (0, Q.useRef)(null), s = (0, Q.useRef)(null), c = (0, Q.useMemo)(() => new t(), []), [l, u] = Un(e.junction, n), d = e.startRadians + e.sweepRadians / 2, f = Math.cos(d) * 56, p = Math.sin(d) * 56;
	return oe(({ camera: e, size: t }) => {
		let n = 1 / fr(e, t.height);
		o.current?.scale.setScalar(n);
		let r = s.current;
		if (!r) return;
		c.set(l + f * n, .24, u + p * n).project(e);
		let i = (c.x + 1) * t.width / 2, a = (1 - c.y) * t.height / 2, d = r.offsetWidth / 2, m = r.offsetHeight / 2, h = Math.max(d + 8, Math.min(t.width - d - 8, i)) - i, g = Math.max(m + 8, Math.min(t.height - m - 8, a)) - a;
		r.style.transform = `translate(${h}px, ${g}px)`;
	}), /* @__PURE__ */ (0, $.jsx)("group", {
		name: "construction-angle-guide",
		position: [
			l,
			.24,
			u
		],
		userData: e,
		children: /* @__PURE__ */ (0, $.jsxs)("group", {
			ref: o,
			name: "construction-angle-screen-scale",
			children: [/* @__PURE__ */ (0, $.jsxs)("mesh", {
				rotation: [
					-Math.PI / 2,
					0,
					0
				],
				raycast: $n,
				renderOrder: 32,
				children: [/* @__PURE__ */ (0, $.jsx)("ringGeometry", { args: [
					31,
					32.5,
					Math.max(8, Math.ceil(e.degrees / 5)),
					1,
					-e.startRadians - e.sweepRadians,
					e.sweepRadians
				] }), /* @__PURE__ */ (0, $.jsx)(a, {
					color: "#ff754d",
					side: 2,
					depthTest: !1,
					depthWrite: !1
				})]
			}), typeof document < "u" && /* @__PURE__ */ (0, $.jsx)(B, {
				position: [
					f,
					0,
					p
				],
				center: !0,
				zIndexRange: [14, 0],
				style: { pointerEvents: "none" },
				children: /* @__PURE__ */ (0, $.jsx)("div", {
					ref: s,
					style: { pointerEvents: "none" },
					children: /* @__PURE__ */ (0, $.jsx)(dr, {
						label: e.label,
						ariaLabel: `${i} angle`
					})
				})
			})]
		})
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionPointMarker.tsx
function hr({ name: e, position: t, planMode: n = !1, radiusPixels: r }) {
	let i = (0, Q.useRef)(null), a = n ? er : zt;
	return oe(({ camera: e, size: t }) => {
		i.current && r !== void 0 && i.current.scale.setScalar(r / (.055 * fr(e, t.height)));
	}), /* @__PURE__ */ (0, $.jsxs)("group", {
		ref: i,
		name: e,
		position: t,
		children: [/* @__PURE__ */ (0, $.jsxs)("mesh", {
			renderOrder: 30,
			raycast: $n,
			children: [/* @__PURE__ */ (0, $.jsx)("cylinderGeometry", { args: [
				.055,
				.055,
				.025,
				18
			] }), /* @__PURE__ */ (0, $.jsx)(a, {
				color: "#fff7f1",
				depthTest: !1,
				depthWrite: !1
			})]
		}), /* @__PURE__ */ (0, $.jsxs)("mesh", {
			position: [
				0,
				.014,
				0
			],
			renderOrder: 31,
			raycast: $n,
			children: [/* @__PURE__ */ (0, $.jsx)("cylinderGeometry", { args: [
				.028,
				.028,
				.027,
				18
			] }), /* @__PURE__ */ (0, $.jsx)(a, {
				color: "#ff754d",
				depthTest: !1,
				depthWrite: !1
			})]
		})]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/measure-geometry.ts
var gr = 2, _r = 1e-6, vr = () => ({
	start: null,
	preview: null,
	end: null
}), yr = (e) => [e[0], e[1]], br = (e) => e.end ? "complete" : e.start ? "drawing" : "idle", xr = (e, t) => {
	switch (t.type) {
		case "place": return !e.start || e.end ? {
			start: yr(t.point),
			preview: null,
			end: null
		} : {
			start: e.start,
			preview: null,
			end: yr(t.point)
		};
		case "preview": return !e.start || e.end ? e : {
			...e,
			preview: yr(t.point)
		};
		case "cancel":
		case "reset": return vr();
	}
}, Sr = (e) => {
	if (!e.start) return null;
	let t = e.end ?? e.preview;
	return t ? [e.start, t] : null;
}, Cr = (e) => {
	let t = Number(e.toFixed(gr));
	return (Object.is(t, -0) ? 0 : t).toFixed(gr);
}, wr = (e, t, n) => {
	let r = [t[0] - e[0], t[1] - e[1]], i = Math.hypot(...r), a = i * n.metersPerPlanUnit, o = Un(e, n), s = Un(t, n), c = `${Cr(i)} plan units · ${Cr(a)} m`;
	return {
		from: e,
		to: t,
		deltaPlanUnits: r,
		distancePlanUnits: i,
		distanceMeters: a,
		label: c,
		copyText: c,
		world: {
			from: o,
			to: s,
			center: [(o[0] + s[0]) / 2, (o[1] + s[1]) / 2],
			lengthMeters: a,
			rotationYRadians: a <= _r ? 0 : -Math.atan2(s[1] - o[1], s[0] - o[0])
		}
	};
}, Tr = (e, t) => {
	let n = Sr(e);
	return n ? wr(n[0], n[1], t) : null;
}, Er = (e) => !!(e && e.world.lengthMeters > _r);
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionWallGuide.tsx
function Dr({ name: e = "construction-wall-guide", wallId: n, from: r, to: i, coordinates: a, planMode: o, showMarkers: s = !1, wallThicknessMeters: c = .12, labelKind: l = "Wall", labelAvoidPoint: u }) {
	let d = (0, Q.useMemo)(() => wr(r, i, a), [
		r,
		i,
		a
	]), f = Er(d), p = `${Cr(d.distanceMeters)} m`, m = (0, Q.useRef)(null), h = (0, Q.useMemo)(() => [
		new t(),
		new t(),
		new t()
	], []);
	return oe(({ camera: e, size: t }) => {
		let n = m.current;
		if (!n) return;
		let r = h[0].set(d.world.from[0], .25, d.world.from[1]).project(e), i = h[1].set(d.world.to[0], .25, d.world.to[1]).project(e), o = (i.x - r.x) * t.width, s = (r.y - i.y) * t.height, l = Math.hypot(o, s);
		if (l <= 1e-6) return;
		let f = o < 0 ? -1 : 1, p = s / l * f, g = -o / l * f;
		if (u) {
			let [n, o] = Un(u, a), s = h[2].set(n, .25, o).project(e);
			p * (s.x - (r.x + i.x) / 2) * t.width - g * (s.y - (r.y + i.y) / 2) * t.height > 0 && (p = -p, g = -g);
		}
		let _ = n.offsetWidth / 2, v = n.offsetHeight / 2, y = Math.abs(p) * _ + Math.abs(g) * v + 12 + c * fr(e, t.height) / 2, b = ((r.x + i.x) / 4 + .5) * t.width, x = (.5 - (r.y + i.y) / 4) * t.height, S = (e, t, n) => Math.max(t + 8, Math.min(n - t - 8, e)), C = S(b + p * y, _, t.width) - b, w = S(x + g * y, v, t.height) - x;
		n.style.transform = `translate(${C}px, ${w}px)`;
	}), /* @__PURE__ */ (0, $.jsxs)("group", {
		name: e,
		userData: {
			wallId: n,
			from: r,
			to: i,
			label: p,
			lengthMeters: d.distanceMeters,
			labelVisible: f
		},
		children: [s && /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(hr, {
			name: "construction-wall-start-marker",
			planMode: o,
			position: [
				d.world.from[0],
				.18,
				d.world.from[1]
			],
			radiusPixels: 4
		}), f && /* @__PURE__ */ (0, $.jsx)(hr, {
			name: "construction-wall-tip-marker",
			planMode: o,
			position: [
				d.world.to[0],
				.18,
				d.world.to[1]
			],
			radiusPixels: 7
		})] }), f && typeof document < "u" && /* @__PURE__ */ (0, $.jsx)(B, {
			position: [
				d.world.center[0],
				.25,
				d.world.center[1]
			],
			center: !0,
			zIndexRange: [12, 0],
			style: { pointerEvents: "none" },
			children: /* @__PURE__ */ (0, $.jsx)("div", {
				ref: m,
				style: {
					transform: "translateY(-28px)",
					pointerEvents: "none"
				},
				children: /* @__PURE__ */ (0, $.jsx)(dr, {
					label: p,
					ariaLabel: `${l} length`
				})
			})
		})]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/wall-connection-measurements.ts
var Or = Math.PI * 2, kr = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[1]), Ar = (e, t, n) => {
	let r = e.to[0] - e.from[0], i = e.to[1] - e.from[1], a = Math.hypot(r, i);
	if (a <= n) return !1;
	let o = t[0] - e.from[0], s = t[1] - e.from[1], c = (o * r + s * i) / a;
	return c >= -n && c <= a + n && Math.abs(o * i - s * r) / a <= n;
};
function jr({ walls: e, primary: t, junctions: n, coordinates: r }) {
	let i = 1e-6 / r.metersPerPlanUnit, a = [{
		...t,
		key: "primary",
		primary: !0
	}], o = [];
	if (t.id === void 0 && kr(t.from, t.to) <= i) return {
		lengths: a,
		angles: o
	};
	let s = n.filter((e, t) => n.findIndex((t) => kr(e, t) <= i) === t);
	for (let n of e) n.id !== t.id && s.some((e) => Ar(n, e, i)) && a.push({
		...n,
		key: `wall:${n.id}`,
		primary: !1
	});
	s.forEach((e, n) => {
		let r = [];
		for (let t of a) if (Ar(t, e, i)) for (let n of [t.from, t.to]) {
			if (kr(e, n) <= i) continue;
			let a = (Math.atan2(n[1] - e[1], n[0] - e[0]) + Or) % Or, o = r.find((e) => Math.abs(Math.atan2(Math.sin(a - e.heading), Math.cos(a - e.heading))) < 1e-8);
			o ? o.keys.push(t.key) : r.push({
				heading: a,
				keys: [t.key]
			});
		}
		r.sort((e, t) => e.heading - t.heading), !(r.length < 2) && r.forEach((i, a) => {
			let s = r[(a + 1) % r.length], c = (s.heading - i.heading + Or) % Or;
			if (c > Math.PI + 1e-8 || r.length === 2 && a === 1 && Math.abs(c - Math.PI) < 1e-8) return;
			let l = [.../* @__PURE__ */ new Set([...i.keys, ...s.keys])];
			if (t.id === void 0 && !l.includes("primary")) return;
			let u = Math.min(180, c * 180 / Math.PI);
			o.push({
				key: `${n}:${a}`,
				junction: e,
				startRadians: i.heading,
				sweepRadians: c,
				degrees: u,
				label: `${Number(u.toFixed(1))}°`,
				wallKeys: l
			});
		});
	});
	for (let e of a) {
		let t = o.find((t) => t.wallKeys.includes(e.key));
		if (!t) continue;
		let n = t.startRadians + t.sweepRadians / 2;
		e.avoidPoint = [t.junction[0] + Math.cos(n), t.junction[1] + Math.sin(n)];
	}
	return {
		lengths: a,
		angles: o
	};
}
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionWallMeasurements.tsx
function Mr({ walls: e, primary: t, junctions: n, coordinates: r, planMode: i, defaultThicknessMeters: a, labelKind: o = "Wall" }) {
	let s = (0, Q.useMemo)(() => jr({
		walls: e,
		primary: t,
		junctions: n,
		coordinates: r
	}), [
		e,
		t,
		n,
		r
	]);
	return /* @__PURE__ */ (0, $.jsxs)("group", {
		name: "construction-wall-measurements",
		children: [s.lengths.map((e) => /* @__PURE__ */ (0, $.jsx)(Dr, {
			name: e.primary ? "construction-wall-guide" : `construction-wall-guide-${e.id}`,
			labelKind: o,
			wallId: e.id,
			from: e.from,
			to: e.to,
			coordinates: r,
			planMode: i,
			showMarkers: e.primary && t.id === void 0,
			labelAvoidPoint: e.avoidPoint,
			wallThicknessMeters: e.thicknessMeters ?? a
		}, e.key)), s.angles.map((e) => /* @__PURE__ */ (0, $.jsx)(mr, {
			labelKind: o,
			angle: e,
			coordinates: r,
			planMode: i
		}, e.key))]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/construction-pointer-events.ts
var Nr = new ht(new t(0, 1, 0), 0), Pr = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[1]) <= 1e-7, Fr = (e) => {
	e.stopPropagation();
}, Ir = (e) => {
	e.stopPropagation(), e.target?.setPointerCapture?.(e.pointerId);
}, Lr = (e) => {
	e.stopPropagation();
	let t = e.target;
	t?.hasPointerCapture?.(e.pointerId) !== !1 && t?.releasePointerCapture?.(e.pointerId);
};
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionOpeningTargets.tsx
function Rr({ draft: e, draggingOpening: t, resizingOpening: n, previewPoint: r, coordinates: i, highlightedSelection: a, directlySelected: o, planMode: s, tool: c, onSelectOpening: l, setDraggingOpening: u, capturedSelectDrag: f, clientPointForEvent: p, onDraggingChange: m, openingPlacementFromEvent: h, finishOpeningDrag: g, cancelOpeningDrag: _, ToonMaterial: v, setResizingOpening: y, resizedOpeningForEvent: b, finishOpeningResize: x, cancelOpeningResize: S }) {
	return /* @__PURE__ */ (0, $.jsx)($.Fragment, { children: e.openings.map((C) => {
		let w = t?.openingId === C.id ? t : null, T = n?.openingId === C.id ? n : null, E = w?.wallId ?? C.wallId, D = e.walls.find((e) => e.id === E);
		if (!D) return null;
		let O = {
			...D,
			from: r(D.from),
			to: r(D.to)
		}, k = !Pr(O.from, D.from) || !Pr(O.to, D.to), [A, j] = Un(O.from, i), [M, N] = Un(O.to, i), P = Math.hypot(O.to[0] - O.from[0], O.to[1] - O.from[1]);
		if (P <= 0) return null;
		let F = T?.offsetPlanUnits ?? w?.offsetPlanUnits ?? C.offsetPlanUnits, I = T?.widthPlanUnits ?? C.widthPlanUnits, L = (F + I / 2) / P, R = F + I / 2, z = .08 / i.metersPerPlanUnit, ee = e.openings.filter((e) => e.id !== C.id && e.wallId === E), te = F < 0 || F + I > P || ee.some((e) => F < e.offsetPlanUnits + e.widthPlanUnits + z && F + I + z > e.offsetPlanUnits), ne = A + (M - A) * L, re = j + (N - j) * L, B = -Math.atan2(N - j, M - A), ie = d(a, "opening", C.id), ae = o?.kind === "opening" && o.id === C.id;
		return /* @__PURE__ */ (0, $.jsxs)("group", {
			position: [
				ne,
				s ? .5 : C.sillHeightMeters + C.openingHeightMeters / 2,
				re
			],
			rotation: [
				0,
				B,
				0
			],
			children: [
				/* @__PURE__ */ (0, $.jsxs)("mesh", {
					name: `construction-opening-target-${C.id}`,
					userData: {
						validPlacement: !te,
						wallId: E
					},
					renderOrder: ie ? 24 : 19,
					onPointerDown: (e) => {
						c !== "select" || e.nativeEvent?.shiftKey || (Ir(e), l(C.id), u({
							...f(e),
							openingId: C.id,
							wallId: O.id,
							offsetPlanUnits: C.offsetPlanUnits
						}));
					},
					onPointerMove: (e) => {
						if (t?.openingId !== C.id) return;
						Fr(e);
						let n = Rn(t, e.pointerId, p(e));
						if (!n) return;
						n.started && m?.(!0);
						let r = h(e, C.widthPlanUnits);
						r && u((e) => e?.openingId === C.id ? {
							...n.drag,
							...r
						} : e);
					},
					onPointerUp: g,
					onPointerCancel: _,
					children: [/* @__PURE__ */ (0, $.jsx)("boxGeometry", { args: [
						I * i.metersPerPlanUnit,
						s ? .08 : C.openingHeightMeters,
						s ? Math.max(O.thicknessMeters ?? e.interiorWallThicknessMeters, .28) + .12 : ie ? .1 : .24
					] }), /* @__PURE__ */ (0, $.jsx)(v, {
						visible: ie || k || E !== C.wallId,
						color: te ? "#c45345" : ie || k || E !== C.wallId ? "#ff754d" : "#ffffff",
						transparent: !0,
						opacity: ie ? .18 : k || E !== C.wallId ? .12 : .001,
						wireframe: !s && (ie || k || E !== C.wallId),
						depthTest: !1,
						depthWrite: !1
					})]
				}),
				ae && /* @__PURE__ */ (0, $.jsxs)("group", {
					name: `construction-opening-clearances-${C.id}`,
					position: [
						0,
						s ? -.08 : -C.sillHeightMeters - C.openingHeightMeters / 2 + .07,
						0
					],
					children: [ee.map((e) => /* @__PURE__ */ (0, $.jsxs)("mesh", {
						position: [
							(e.offsetPlanUnits + e.widthPlanUnits / 2 - R) * i.metersPerPlanUnit,
							0,
							0
						],
						renderOrder: 23,
						children: [/* @__PURE__ */ (0, $.jsx)("boxGeometry", { args: [
							(e.widthPlanUnits + z * 2) * i.metersPerPlanUnit,
							.018,
							.18
						] }), /* @__PURE__ */ (0, $.jsx)(v, {
							color: "#7d4e42",
							transparent: !0,
							opacity: .52,
							depthTest: !1
						})]
					}, e.id)), [z / 2, P - z / 2].map((e) => /* @__PURE__ */ (0, $.jsxs)("mesh", {
						position: [
							(e - R) * i.metersPerPlanUnit,
							0,
							0
						],
						renderOrder: 23,
						children: [/* @__PURE__ */ (0, $.jsx)("boxGeometry", { args: [
							z * i.metersPerPlanUnit,
							.02,
							.24
						] }), /* @__PURE__ */ (0, $.jsx)(v, {
							color: "#27312e",
							transparent: !0,
							opacity: .6,
							depthTest: !1
						})]
					}, e))]
				}),
				ae && !w && ["start", "end"].map((e) => /* @__PURE__ */ (0, $.jsxs)("mesh", {
					name: `construction-opening-resize-${C.id}-${e}`,
					position: [
						(e === "start" ? -1 : 1) * I * i.metersPerPlanUnit / 2,
						0,
						0
					],
					renderOrder: 26,
					onPointerDown: (t) => {
						t.nativeEvent?.shiftKey || (Ir(t), y({
							...f(t),
							openingId: C.id,
							wallId: O.id,
							edge: e,
							originalOffsetPlanUnits: C.offsetPlanUnits,
							originalWidthPlanUnits: C.widthPlanUnits,
							offsetPlanUnits: C.offsetPlanUnits,
							widthPlanUnits: C.widthPlanUnits
						}));
					},
					onPointerMove: (t) => {
						if (n?.openingId !== C.id || n.edge !== e) return;
						Fr(t);
						let r = Rn(n, t.pointerId, p(t));
						if (!r) return;
						r.started && m?.(!0);
						let i = b(t, r.drag);
						i && y((e) => e?.openingId === C.id ? {
							...r.drag,
							...i
						} : e);
					},
					onPointerUp: x,
					onPointerCancel: S,
					children: [/* @__PURE__ */ (0, $.jsx)("octahedronGeometry", { args: [.15, 0] }), /* @__PURE__ */ (0, $.jsx)(v, {
						color: "#fff7f1",
						depthTest: !1
					})]
				}, e))
			]
		}, C.id);
	}) });
}
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionWallTargets.tsx
function zr({ draft: e, highlightedSelection: t, directlySelected: n, draggingEndpoint: r, draggingWall: i, previewPoint: a, coordinates: o, openingTool: s, placeOpeningFromEvent: c, tool: l, onSelectWall: u, setOpeningPreview: d, placementPreviewFromEvent: f, ToonMaterial: p, planMode: m, translationPointForEvent: h, setDraggingWall: g, capturedSelectDrag: _, clientPointForEvent: v, onDraggingChange: y, wallDeltaForEvent: b, finishWallDrag: x, cancelWallDrag: S, setDraggingEndpoint: C, pointForEvent: w, finishEndpointDrag: T, cancelEndpointDrag: E }) {
	return /* @__PURE__ */ (0, $.jsx)($.Fragment, { children: e.walls.map((e) => {
		let D = I(t).filter((t) => t.kind === "wall" && t.id === e.id), O = D.some((e) => e.kind === "wall" && !e.span), k = n?.kind === "wall" && n.id === e.id, A = r !== null && (Pr(e.from, r.origin) || Pr(e.to, r.origin)) || i !== null && (Pr(e.from, i.from) || Pr(e.to, i.from) || Pr(e.from, i.to) || Pr(e.to, i.to)), j = r || i ? {
			...e,
			from: a(e.from),
			to: a(e.to)
		} : e, M = qn(j.from, j.to, o), N = Jn(j, o);
		return /* @__PURE__ */ (0, $.jsxs)("group", { children: [
			D.map((t, n) => {
				if (t.kind !== "wall" || !t.span) return null;
				let r = (t) => Un([e.from[0] + (e.to[0] - e.from[0]) * t, e.from[1] + (e.to[1] - e.from[1]) * t], o);
				return /* @__PURE__ */ (0, $.jsx)(nr, {
					from: r(t.span[0]),
					to: r(t.span[1]),
					color: "#ff754d",
					width: .11,
					elevation: .21
				}, n);
			}),
			/* @__PURE__ */ (0, $.jsxs)("mesh", {
				name: `construction-wall-target-${e.id}`,
				position: [
					M.center[0],
					.1,
					M.center[1]
				],
				rotation: [
					0,
					M.rotationYRadians,
					0
				],
				onPointerDown: (t) => {
					if (s) return c(t);
					l !== "select" || t.nativeEvent?.shiftKey || (Fr(t), u(e.id));
				},
				onPointerMove: (e) => {
					s && (Fr(e), d(f(e, s)));
				},
				children: [/* @__PURE__ */ (0, $.jsx)("boxGeometry", { args: [
					M.length,
					.18,
					O || A ? .11 : .28
				] }), /* @__PURE__ */ (0, $.jsx)(p, {
					visible: O || A,
					color: O || A ? "#ff754d" : "#ffffff",
					transparent: !0,
					opacity: O ? m ? .24 : .95 : A ? .68 : .001,
					depthTest: !1
				})]
			}),
			k && l === "select" && /* @__PURE__ */ (0, $.jsxs)("group", {
				name: `construction-wall-measurement-${e.id}`,
				position: [
					N.guideCenter[0],
					.08,
					N.guideCenter[1]
				],
				rotation: [
					0,
					N.rotationYRadians,
					0
				],
				userData: {
					label: N.label,
					lengthMeters: N.lengthMeters,
					directionDegrees: N.directionDegrees
				},
				children: [/* @__PURE__ */ (0, $.jsxs)("mesh", {
					renderOrder: 22,
					children: [/* @__PURE__ */ (0, $.jsx)("boxGeometry", { args: [
						N.lengthMeters,
						.018,
						.018
					] }), /* @__PURE__ */ (0, $.jsx)(p, {
						color: "#27312e",
						depthTest: !1
					})]
				}), [-1, 1].map((e) => /* @__PURE__ */ (0, $.jsxs)("mesh", {
					position: [
						e * N.lengthMeters / 2,
						0,
						0
					],
					renderOrder: 22,
					children: [/* @__PURE__ */ (0, $.jsx)("boxGeometry", { args: [
						.018,
						.022,
						.18
					] }), /* @__PURE__ */ (0, $.jsx)(p, {
						color: "#ff754d",
						depthTest: !1
					})]
				}, e))]
			}),
			k && l === "select" && /* @__PURE__ */ (0, $.jsxs)("mesh", {
				name: `construction-wall-center-${e.id}`,
				position: [
					M.center[0],
					.25,
					M.center[1]
				],
				renderOrder: 23,
				onPointerDown: (t) => {
					if (t.nativeEvent?.shiftKey) return;
					let n = h(t);
					n && (Ir(t), g({
						..._(t),
						wallId: e.id,
						from: e.from,
						to: e.to,
						grab: n,
						delta: [0, 0]
					}));
				},
				onPointerMove: (t) => {
					if (i?.wallId !== e.id) return;
					Fr(t);
					let n = Rn(i, t.pointerId, v(t));
					if (!n) return;
					n.started && y?.(!0);
					let r = b(t, n.drag.grab);
					r && g((t) => t?.wallId === e.id ? {
						...n.drag,
						delta: r
					} : t);
				},
				onPointerUp: x,
				onPointerCancel: S,
				children: [/* @__PURE__ */ (0, $.jsx)("octahedronGeometry", { args: [.2, 0] }), /* @__PURE__ */ (0, $.jsx)(p, {
					color: "#27312e",
					depthTest: !1
				})]
			}),
			k && l === "select" && ["from", "to"].map((t) => {
				let [n, i] = Un(j[t], o);
				return /* @__PURE__ */ (0, $.jsxs)("mesh", {
					name: `construction-wall-endpoint-${e.id}-${t}`,
					position: [
						n,
						.18,
						i
					],
					renderOrder: 20,
					onPointerDown: (n) => {
						n.nativeEvent?.shiftKey || (Ir(n), C({
							..._(n),
							wallId: e.id,
							endpoint: t,
							origin: e[t],
							angleOrigin: e[t === "from" ? "to" : "from"],
							point: e[t]
						}));
					},
					onPointerMove: (n) => {
						if (r?.wallId !== e.id || r.endpoint !== t) return;
						Fr(n);
						let i = Rn(r, n.pointerId, v(n));
						if (!i) return;
						i.started && y?.(!0);
						let a = w(n);
						a && C((n) => n && n.wallId === e.id && n.endpoint === t ? {
							...i.drag,
							point: a
						} : n);
					},
					onPointerUp: T,
					onPointerCancel: E,
					children: [/* @__PURE__ */ (0, $.jsx)("sphereGeometry", { args: [
						.13,
						18,
						12
					] }), /* @__PURE__ */ (0, $.jsx)(p, {
						color: "#fff7f1",
						depthTest: !1
					})]
				}, t);
			})
		] }, e.id);
	}) });
}
//#endregion
//#region apps/web/src/editor-preview/construct/selection-geometry.ts
var Br = 1e-7, Vr = (e, t) => ({
	minX: Math.min(e[0], t[0]),
	maxX: Math.max(e[0], t[0]),
	minY: Math.min(e[1], t[1]),
	maxY: Math.max(e[1], t[1])
}), Hr = (e) => [
	[e.minX, e.minY],
	[e.maxX, e.minY],
	[e.maxX, e.maxY],
	[e.minX, e.maxY]
], Ur = (e, t) => e[0] >= t.minX - Br && e[0] <= t.maxX + Br && e[1] >= t.minY - Br && e[1] <= t.maxY + Br, Wr = (e, t, n) => {
	if (Ur(e, n) || Ur(t, n)) return !0;
	let r = Hr(n);
	return r.some((n, i) => $e(e, t, n, r[(i + 1) % r.length]));
}, Gr = (e, t) => e.some((e) => Ur(e, t)) || Hr(t).some((t) => ct(t, e)) ? !0 : e.some((n, r) => Wr(n, e[(r + 1) % e.length], t)), Kr = (e, t) => {
	let n = t.walls.find((t) => t.id === e.wallId);
	if (!n) return null;
	let r = n.to[0] - n.from[0], i = n.to[1] - n.from[1], a = Math.hypot(r, i);
	if (a <= Br) return null;
	let o = [r / a, i / a], s = (e) => [n.from[0] + o[0] * e, n.from[1] + o[1] * e];
	return [s(e.offsetPlanUnits), s(e.offsetPlanUnits + e.widthPlanUnits)];
}, qr = ({ from: e, to: t, draft: n, rooms: r }) => {
	let i = Vr(e, t), a = r.filter((e) => Ur(xt(e.polygon), i)).map((e) => ({
		kind: "room",
		id: e.id
	})), o = n.walls.filter((e) => Wr(e.from, e.to, i)).map((e) => ({
		kind: "wall",
		id: e.id
	})), s = n.openings.filter((e) => {
		let t = Kr(e, n);
		return t ? Wr(t[0], t[1], i) : !1;
	}).map((e) => ({
		kind: "opening",
		id: e.id
	})), c = (n.pools ?? []).filter((e) => Gr(e.polygon, i)).map((e) => ({
		kind: "pool",
		id: e.id
	})), l = [...n.groundZones ?? [], ...n.rooms.flatMap((e) => e.floorZones ?? [])].filter((e) => e.polygon.every((e) => Ur(e, i))).map((e) => ({
		kind: "floor-zone",
		id: e.id
	}));
	return I(p([
		...a,
		...o,
		...s,
		...(n.hedges ?? []).filter((e) => Wr(e.from, e.to, i)).map((e) => ({
			kind: "hedge",
			id: e.id
		})),
		...c,
		...l
	]));
}, Jr = (e, t, n, r) => {
	let i = t[0] - e[0], a = t[1] - e[1], o = i * (n[1] - e[1]) - a * (n[0] - e[0]), s = i * (r[1] - e[1]) - a * (r[0] - e[0]), c = Br * Math.max(1, Math.hypot(i, a));
	if (Math.abs(o) > c || Math.abs(s) > c) return !1;
	let l = Math.abs(i) >= Math.abs(a), u = [l ? e[0] : e[1], l ? t[0] : t[1]].sort((e, t) => e - t), d = [l ? n[0] : n[1], l ? r[0] : r[1]].sort((e, t) => e - t);
	return Math.min(u[1], d[1]) - Math.max(u[0], d[0]) > Br;
}, Yr = ({ selection: e, draft: t, previewFloor: n, wallRuns: r }) => {
	let i = Array.isArray(e) ? e : I(e), a = new Set(i.filter((e) => e.kind === "room").map((e) => e.id)), o = new Set(i.filter((e) => e.kind === "opening").map((e) => e.id)), s = new Set(i.filter((e) => e.kind === "pool").map((e) => e.id)), c = new Set(i.filter((e) => e.kind === "floor-zone").map((e) => e.id)), l = (e) => t.walls.some((t) => t.id === e) ? e : r.find((t) => t.wallId === e)?.sourceWallId, u = [], d = n.rooms, f = d.filter((e) => a.has(e.id)), m = d.filter((e) => !a.has(e.id)), h = new Set(i.filter((e) => e.kind === "wall").map((e) => l(e.id)));
	for (let e of t.walls) {
		let n = e.to[0] - e.from[0], r = e.to[1] - e.from[1], i = n * n + r * r;
		if (i <= Br * Br) continue;
		let s = (t) => ((t[0] - e.from[0]) * n + (t[1] - e.from[1]) * r) / i, c = (t) => t.flatMap((t) => t.polygon.flatMap((n, r) => {
			let i = t.polygon[(r + 1) % t.polygon.length];
			return Jr(e.from, e.to, n, i) ? [[Math.max(0, Math.min(s(n), s(i))), Math.min(1, Math.max(s(n), s(i)))]] : [];
		})), l = c(f), d = a.size ? c(m) : [];
		for (let n of t.openings.filter((t) => t.wallId === e.id)) {
			let e = n.offsetPlanUnits / Math.sqrt(i), t = e + n.widthPlanUnits / Math.sqrt(i);
			d.some(([n, r]) => t > n + Br && e < r - Br) && d.push([e, t]);
		}
		let p = [.../* @__PURE__ */ new Set([
			0,
			1,
			...l.flat(),
			...d.flat()
		])].sort((e, t) => e - t), g = [];
		for (let t = 1; t < p.length; t++) {
			let n = p[t - 1], r = p[t], i = (n + r) / 2;
			r - n < Br || d.some(([e, t]) => i > e && i < t) || !h.has(e.id) && !l.some(([e, t]) => i > e && i < t) || (g.at(-1)?.[1] === n ? g[g.length - 1][1] = r : g.push([n, r]));
		}
		for (let t of g) u.push(t[0] === 0 && t[1] === 1 ? {
			kind: "wall",
			id: e.id
		} : {
			kind: "wall",
			id: e.id,
			span: t
		});
		for (let n of t.openings.filter((t) => t.wallId === e.id)) {
			let e = n.offsetPlanUnits / Math.sqrt(i), t = e + n.widthPlanUnits / Math.sqrt(i);
			d.some(([n, r]) => t > n + Br && e < r - Br) ? o.delete(n.id) : g.some(([n, r]) => t > n + Br && e < r - Br) && o.add(n.id);
		}
	}
	for (let e of f) u.some((n) => {
		if (n.kind !== "wall") return !1;
		let r = t.walls.find((e) => e.id === n.id), i = (e) => [r.from[0] + (r.to[0] - r.from[0]) * e, r.from[1] + (r.to[1] - r.from[1]) * e];
		return e.polygon.some((t, r) => Jr(i(n.span?.[0] ?? 0), i(n.span?.[1] ?? 1), t, e.polygon[(r + 1) % e.polygon.length]));
	}) || a.delete(e.id);
	return I(p([
		...i.filter((e) => e.kind === "hedge" && t.hedges?.some((t) => t.id === e.id)),
		...[...a].map((e) => ({
			kind: "room",
			id: e
		})),
		...u,
		...t.openings.filter((e) => o.has(e.id)).map((e) => ({
			kind: "opening",
			id: e.id
		})),
		...(t.pools ?? []).filter((e) => s.has(e.id)).map((e) => ({
			kind: "pool",
			id: e.id
		})),
		...[...t.groundZones ?? [], ...t.rooms.flatMap((e) => e.floorZones ?? [])].filter((e) => c.has(e.id)).map((e) => ({
			kind: "floor-zone",
			id: e.id
		}))
	]));
};
//#endregion
//#region apps/web/src/editor-preview/construct/useConstructionPointerController.ts
function Xr({ doorConfiguration: e = Ze, planMode: n = !1, referenceWalls: r = [], draft: i, coordinates: a, rooms: o, selection: s, deletionTargets: c = I(s), previewFloor: l, wallRuns: u = [], tool: d, drawStart: m = null, drawPreview: h = null, drawAngleReferenceRadians: g = null, wallExteriorColor: _ = "#c97370", poolPoints: v = [], floorPaintTarget: y = "room", floorZonePoints: b = [], floorZonePreview: x = null, onCancelFloorZone: S, measurePhase: C = "idle", onSelectWall: w, onSelectOpening: T, onSelectRoom: E, onSelectMany: D, onClearSelection: O, onMoveEndpoint: k, onTranslateWall: A, onMoveOpening: j, onResizeOpening: M, onPlaceOpening: N, onBeginWall: P, onPreviewWall: F, onAddWall: L, onCancelWall: R, onPlaceMeasure: z, onPreviewMeasure: te, onPlaceFloorZonePoint: ne, onPreviewFloorZonePoint: re, onDraggingChange: B, onMarqueeChange: ie }) {
	let ae = Xe(), oe = n ? er : zt, se = f((e) => e.get), ce = (0, Q.useRef)(new t()), [ue, de] = (0, Q.useState)(null);
	(0, Q.useEffect)(() => de(null), [
		d,
		m,
		b.length,
		s
	]);
	let [V, fe] = (0, Q.useState)(null), [H, me] = (0, Q.useState)(null), [U, he] = (0, Q.useState)(null), [ge, ve] = (0, Q.useState)(null), [ye, be] = (0, Q.useState)(null), [xe, Se] = (0, Q.useState)(null), W = (0, Q.useRef)(null), Ce = (0, Q.useCallback)((e) => {
		W.current = e, Se(e);
	}, []), we = (0, Q.useCallback)(() => {
		let e = W.current;
		e?.target.hasPointerCapture?.(e.pointerId) !== !1 && e?.target.releasePointerCapture?.(e.pointerId), Ce(null), B?.(!1), ie?.(!1);
	}, [
		Ce,
		B,
		ie
	]);
	(0, Q.useEffect)(() => {
		if (!V || d === "select" && s?.kind === "wall" && s.id === V.wallId) return;
		let { target: e, pointerId: t } = V;
		e.hasPointerCapture?.(t) !== !1 && e.releasePointerCapture?.(t), fe(null), de(null), V.dragActive && B?.(!1);
	}, [
		d,
		s,
		V,
		B
	]), (0, Q.useEffect)(() => {
		d !== "select" && W.current && we();
	}, [we, d]), (0, Q.useEffect)(() => {
		if (typeof globalThis.addEventListener != "function") return;
		let e = (e) => {
			e.key !== "Escape" || !W.current || (e.preventDefault(), we());
		};
		return ae.events.addEventListener("keydown", e, !0), () => ae.events.removeEventListener("keydown", e, !0);
	}, [we]), (0, Q.useEffect)(() => () => {
		let e = W.current;
		e?.target.hasPointerCapture?.(e.pointerId) !== !1 && e?.target.releasePointerCapture?.(e.pointerId);
	}, []);
	let Te = d === "door" || d === "window" || d === "passage" ? d : null;
	(0, Q.useEffect)(() => be(null), [d]);
	let Ee = d === "floor" && y === "custom-area", G = d === "wall" || d === "hedge" || d === "pool" || Ee, De = d === "pool" ? v : Ee ? b : [], Oe = Ee ? b.at(-1) ?? null : m, ke = Ee ? x : h, Ae = Ee ? ne : P, je = Ee ? re : F, Me = Ee ? ne : L, Ne = Ee ? S : R, Pe = De.slice(1).map((e, t) => ({
		id: `construction-draft-${t}`,
		from: De[t],
		to: e
	})), q = [...i.walls, ...r], Fe = [
		...q,
		...i.hedges ?? [],
		...Pe
	], Ie = Pe.at(-1), J = Ie ? Math.atan2(Ie.to[1] - Ie.from[1], Ie.to[0] - Ie.from[0]) : g ?? void 0, Le = (0, Q.useMemo)(() => {
		let e = [
			...i.walls.flatMap((e) => [e.from, e.to]),
			...(i.pools ?? []).flatMap((e) => e.polygon),
			...v,
			...b
		];
		return Math.max(20, ...e.flatMap((e) => e.map(Math.abs))) * 4 * a.metersPerPlanUnit;
	}, [
		a.metersPerPlanUnit,
		i.walls,
		i.pools,
		v,
		b
	]), Re = (xe ? Math.hypot(xe.clientTo[0] - xe.clientFrom[0], xe.clientTo[1] - xe.clientFrom[1]) : 0) >= 4, ze = (0, Q.useMemo)(() => Re && xe ? qr({
		from: xe.from,
		to: xe.to,
		draft: i,
		rooms: o
	}) : [], [
		i,
		xe,
		Re,
		o
	]), Be = (0, Q.useMemo)(() => Re && l ? Yr({
		selection: ze,
		draft: i,
		previewFloor: l,
		wallRuns: u
	}) : ze, [
		i,
		Re,
		ze,
		l,
		u
	]), Ve = (0, Q.useMemo)(() => p(Re ? Be : c), [
		c,
		Re,
		Be
	]), He = Re || s?.kind === "multiple" ? null : s, Ue = (0, Q.useMemo)(() => o.map((e) => {
		let t = e.polygon.map((e) => {
			let [t, n] = Un(e, a);
			return new ee(t, n);
		}), n = _e.triangulateShape(t, []).flatMap((e) => e.flatMap((e) => [
			t[e].x,
			.018,
			t[e].y
		])), r = new le();
		return r.setAttribute("position", new pe(n, 3)), r.computeVertexNormals(), {
			room: e,
			geometry: r
		};
	}), [a, o]);
	(0, Q.useEffect)(() => () => {
		Ue.forEach(({ geometry: e }) => e.dispose());
	}, [Ue]);
	let Y = (e) => {
		let t = e.ray.intersectPlane(Nr, ce.current);
		if (!t) return null;
		let n = G || V !== null, { camera: r, size: o } = se(), s = n ? fr(r, o.height, i.view.pixelsPerMeter) : i.view.pixelsPerMeter;
		if (De.length >= 3 && !e.nativeEvent.altKey) {
			let [n, r] = Un(De[0], a);
			if (Math.hypot(t.x - n, t.z - r) * s <= pr(e.nativeEvent.pointerType)) return de(null), De[0];
		}
		return Kn({
			point: t,
			coordinates: a,
			walls: G || V ? Fe : q,
			onSnap: de,
			pixelsPerMeter: s,
			snapRadiusPixels: n ? pr(e.nativeEvent.pointerType) : void 0,
			pointerType: e.nativeEvent.pointerType,
			angleOrigin: V?.angleOrigin ?? (G ? Oe ?? void 0 : void 0),
			angleReferenceRadians: V ? void 0 : J,
			movingEndpoint: V?.origin,
			absolute: e.nativeEvent.altKey
		});
	}, We = (e) => {
		let t = e.ray.intersectPlane(Nr, ce.current);
		return t ? K({
			x: t.x,
			z: t.z
		}, a) : null;
	}, Ge = (e) => [e.nativeEvent.clientX, e.nativeEvent.clientY], Ke = (e) => ({
		...Ln(e.pointerId, Ge(e)),
		target: e.target
	}), qe = (e, t) => {
		let n = We(e);
		return n ? {
			...t,
			to: n,
			clientTo: Ge(e)
		} : t;
	}, Je = (e) => {
		let t = W.current;
		if (!t || t.pointerId !== e.pointerId) return;
		e.stopPropagation();
		let n = qe(e, t);
		Math.hypot(n.clientTo[0] - n.clientFrom[0], n.clientTo[1] - n.clientFrom[1]) >= 4 && D?.(qr({
			from: n.from,
			to: n.to,
			draft: i,
			rooms: o
		})), we();
	}, Ye = (e) => {
		let t = e.ray.intersectPlane(Nr, ce.current);
		return t ? Gn({
			point: t,
			coordinates: a,
			absolute: e.nativeEvent.altKey
		}) : null;
	}, Qe = (e, t) => {
		let n = Ye(e);
		return n ? [Number((n[0] - t[0]).toFixed(4)), Number((n[1] - t[1]).toFixed(4))] : null;
	}, $e = (e, t) => {
		let n = Ye(e);
		return n ? Xn({
			point: n,
			walls: q,
			widthPlanUnits: t,
			metersPerPlanUnit: a.metersPerPlanUnit
		}) : null;
	}, et = (t, n) => {
		let r = (n === "door" ? e.widthMeters : n === "window" ? 1.2 : .9) / a.metersPerPlanUnit, o = $e(t, r);
		return o ? {
			wallId: o.wallId,
			offsetPlanUnits: o.offsetPlanUnits,
			valid: (n !== "door" || e.heightMeters <= (i.walls.find((e) => e.id === o.wallId)?.heightMeters ?? i.defaultWallHeightMeters)) && Zn({
				walls: q,
				openings: i.openings,
				wallId: o.wallId,
				offsetPlanUnits: o.offsetPlanUnits,
				widthPlanUnits: r,
				clearancePlanUnits: .08 / a.metersPerPlanUnit
			})
		} : null;
	}, tt = (e) => {
		if (!Te) return;
		Fr(e);
		let t = et(e, Te);
		be(null), t?.valid && N(Te, t.wallId, t.offsetPlanUnits);
	}, X = (e, t) => {
		let n = i.walls.find((e) => e.id === t.wallId), r = Ye(e);
		return !n || !r ? null : Qn({
			offsetPlanUnits: t.originalOffsetPlanUnits,
			widthPlanUnits: t.originalWidthPlanUnits,
			edge: t.edge,
			cursorOffsetPlanUnits: Yn(r, n),
			wallLengthPlanUnits: Math.hypot(n.to[0] - n.from[0], n.to[1] - n.from[1]),
			anchorOpposite: e.nativeEvent.altKey,
			minimumWidthPlanUnits: .3 / a.metersPerPlanUnit
		});
	}, nt = (e) => {
		if (!V) return;
		let t = V.dragActive ? Y(e) : null;
		Lr(e), fe(null), de(null), V.dragActive && B?.(!1), t && k(V.wallId, V.endpoint, t);
	}, rt = (e) => {
		if (!U) return;
		let t = U.dragActive ? i.openings.find((e) => e.id === U.openingId) : null, n = t ? $e(e, t.widthPlanUnits) ?? U : null;
		Lr(e), he(null), U.dragActive && B?.(!1), n && j(U.openingId, n.wallId, n.offsetPlanUnits);
	}, it = (e) => {
		if (!ge) return;
		let t = ge.dragActive ? X(e, ge) ?? ge : null;
		Lr(e), ve(null), ge.dragActive && B?.(!1), t && M(t.offsetPlanUnits, t.widthPlanUnits);
	}, at = (e) => {
		if (!H) return;
		let t = H.dragActive ? Qe(e, H.grab) : null;
		Lr(e), me(null), H.dragActive && B?.(!1), t && (t[0] !== 0 || t[1] !== 0) && A(H.wallId, t);
	}, ot = (e) => {
		V && (Lr(e), fe(null), de(null), V.dragActive && B?.(!1));
	}, st = (e) => {
		U && (Lr(e), he(null), U.dragActive && B?.(!1));
	}, ct = (e) => {
		ge && (Lr(e), ve(null), ge.dragActive && B?.(!1));
	}, lt = (e) => {
		H && (Lr(e), me(null), H.dragActive && B?.(!1));
	}, ut = (e) => {
		if (V && Pr(e, V.origin)) return V.point;
		if (H) {
			if (Pr(e, H.from)) return [H.from[0] + H.delta[0], H.from[1] + H.delta[1]];
			if (Pr(e, H.to)) return [H.to[0] + H.delta[0], H.to[1] + H.delta[1]];
		}
		return e;
	}, dt = G && Oe && ke ? qn(Oe, ke, a) : null, ft = Te && ye ? (() => {
		let t = i.walls.find((e) => e.id === ye.wallId);
		if (!t) return null;
		let n = (Te === "door" ? e.widthMeters : Te === "window" ? 1.2 : .9) / a.metersPerPlanUnit, r = Te === "door" ? e.heightMeters : Te === "window" ? 1.2 : 2.04, o = Te === "window" ? .9 : 0, [s, c] = Un(t.from, a), [l, u] = Un(t.to, a), d = Math.hypot(t.to[0] - t.from[0], t.to[1] - t.from[1]), f = (ye.offsetPlanUnits + n / 2) / d;
		return {
			...ye,
			widthMeters: n * a.metersPerPlanUnit,
			openingHeightMeters: r,
			sillHeightMeters: o,
			x: s + (l - s) * f,
			z: c + (u - c) * f,
			rotationY: -Math.atan2(u - c, l - s)
		};
	})() : null, pt = (0, Q.useMemo)(() => ({
		...i,
		walls: V || H ? i.walls.map((e) => ({
			...e,
			from: ut(e.from),
			to: ut(e.to)
		})) : i.walls,
		openings: U || ge ? i.openings.map((e) => U?.openingId === e.id ? {
			...e,
			wallId: U.wallId,
			offsetPlanUnits: U.offsetPlanUnits
		} : ge?.openingId === e.id ? {
			...e,
			offsetPlanUnits: ge.offsetPlanUnits,
			widthPlanUnits: ge.widthPlanUnits
		} : e) : i.openings
	}), [
		i.walls,
		i.openings,
		i.coordinates,
		i.interiorWallThicknessMeters,
		V,
		H,
		U,
		ge
	]), mt = V ? pt.walls.find((e) => e.id === V.wallId) : null;
	return {
		snap: ue,
		drawing: G,
		segmentStart: Oe,
		segmentPreview: ke,
		beginSegment: Ae,
		previewSegment: je,
		commitSegment: Me,
		cancelDrawing: Ne,
		drawingWalls: Fe,
		tool: d,
		rawPlanPointForEvent: We,
		clientPointForEvent: Ge,
		changeMarquee: Ce,
		onDraggingChange: B,
		onMarqueeChange: ie,
		activeMarquee: W,
		updateMarqueeForEvent: qe,
		finishMarquee: Je,
		releaseMarquee: we,
		floorSpan: Le,
		marqueeWorldRectangle: Re && xe ? (() => {
			let e = Vr(xe.from, xe.to), [t, n] = Un([e.minX, e.minY], a), [r, i] = Un([e.maxX, e.maxY], a);
			return {
				minX: t,
				maxX: r,
				minZ: n,
				maxZ: i,
				center: [(t + r) / 2, (n + i) / 2],
				width: Math.max(.001, r - t),
				depth: Math.max(.001, i - n)
			};
		})() : null,
		marqueeActive: Re,
		draft: i,
		highlightedSelection: Ve,
		coordinates: a,
		planMode: n,
		displayedDraft: pt,
		roomTargets: Ue,
		onSelectRoom: E,
		ToonMaterial: oe,
		directlySelected: He,
		draggingEndpoint: V,
		draggingWall: H,
		previewPoint: ut,
		openingTool: Te,
		placeOpeningFromEvent: tt,
		onSelectWall: w,
		setOpeningPreview: be,
		placementPreviewFromEvent: et,
		translationPointForEvent: Ye,
		setDraggingWall: me,
		capturedSelectDrag: Ke,
		wallDeltaForEvent: Qe,
		finishWallDrag: at,
		cancelWallDrag: lt,
		setDraggingEndpoint: fe,
		pointForEvent: Y,
		finishEndpointDrag: nt,
		cancelEndpointDrag: ot,
		draggingOpening: U,
		resizingOpening: ge,
		onSelectOpening: T,
		setDraggingOpening: he,
		openingPlacementFromEvent: $e,
		finishOpeningDrag: rt,
		cancelOpeningDrag: st,
		setResizingOpening: ve,
		resizedOpeningForEvent: X,
		finishOpeningResize: it,
		cancelOpeningResize: ct,
		preview: dt,
		wallExteriorColor: _,
		drawStart: m,
		drawPreview: h,
		resizedWall: mt,
		placementPreview: ft,
		onClearSelection: O,
		onPlaceMeasure: z,
		drawingFloorZone: Ee,
		onPreviewWall: F,
		onBeginWall: P,
		measurePhase: C,
		onPreviewMeasure: te,
		onPreviewFloorZonePoint: re,
		onPlaceFloorZonePoint: ne,
		onAddWall: L,
		onCancelWall: R
	};
}
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionInteractionLayer.tsx
function Zr(e) {
	let { snap: t, drawing: n, segmentStart: r, segmentPreview: i, beginSegment: a, previewSegment: o, commitSegment: s, cancelDrawing: c, drawingWalls: l, tool: u, rawPlanPointForEvent: f, clientPointForEvent: p, changeMarquee: m, onDraggingChange: h, onMarqueeChange: g, activeMarquee: _, updateMarqueeForEvent: v, finishMarquee: y, releaseMarquee: b, floorSpan: x, marqueeWorldRectangle: S, marqueeActive: C, draft: w, highlightedSelection: T, coordinates: E, planMode: D, displayedDraft: O, roomTargets: k, onSelectRoom: A, ToonMaterial: j, directlySelected: M, draggingEndpoint: N, draggingWall: P, previewPoint: F, openingTool: I, placeOpeningFromEvent: L, onSelectWall: R, setOpeningPreview: z, placementPreviewFromEvent: ee, translationPointForEvent: te, setDraggingWall: ne, capturedSelectDrag: re, wallDeltaForEvent: B, finishWallDrag: ie, cancelWallDrag: ae, setDraggingEndpoint: oe, pointForEvent: se, finishEndpointDrag: ce, cancelEndpointDrag: le, draggingOpening: ue, resizingOpening: de, onSelectOpening: V, setDraggingOpening: fe, openingPlacementFromEvent: pe, finishOpeningDrag: H, cancelOpeningDrag: me, setResizingOpening: U, resizedOpeningForEvent: he, finishOpeningResize: ge, cancelOpeningResize: _e, preview: ve, wallExteriorColor: ye, drawStart: be, drawPreview: xe, resizedWall: Se, placementPreview: W, onClearSelection: Ce, onPlaceMeasure: we, drawingFloorZone: Te, onPreviewWall: Ee, onBeginWall: G, measurePhase: De, onPreviewMeasure: Oe, onPreviewFloorZonePoint: ke, onPlaceFloorZonePoint: K, onAddWall: Ae, onCancelWall: je } = Xr(e), Me = (0, Q.useRef)(null);
	return (0, Q.useEffect)(() => {
		Me.current = null;
	}, [u]), /* @__PURE__ */ (0, $.jsxs)("group", {
		name: "construction-edit-layer",
		children: [
			/* @__PURE__ */ (0, $.jsx)(rr, {
				snap: t,
				coordinates: E
			}),
			/* @__PURE__ */ (0, $.jsxs)("mesh", {
				name: "construction-marquee-surface",
				position: [
					0,
					.002,
					0
				],
				rotation: [
					-Math.PI / 2,
					0,
					0
				],
				renderOrder: 39,
				onPointerDown: (e) => {
					if (u !== "select" || e.button !== 0 || !e.nativeEvent?.shiftKey || e.nativeEvent.metaKey || e.nativeEvent.ctrlKey || e.nativeEvent.altKey) return;
					let t = f(e);
					if (!t) return;
					Ir(e);
					let n = p(e);
					m({
						from: t,
						to: t,
						clientFrom: n,
						clientTo: n,
						pointerId: e.pointerId,
						target: e.target
					}), h?.(!0), g?.(!0);
				},
				onPointerMove: (e) => {
					let t = _.current;
					!t || t.pointerId !== e.pointerId || (e.stopPropagation(), m(v(e, t)));
				},
				onPointerUp: y,
				onPointerCancel: (e) => {
					let t = _.current;
					!t || t.pointerId !== e.pointerId || (e.stopPropagation(), b());
				},
				children: [/* @__PURE__ */ (0, $.jsx)("planeGeometry", { args: [x, x] }), /* @__PURE__ */ (0, $.jsx)(er, {
					visible: !1,
					transparent: !0,
					opacity: 0,
					depthTest: !1,
					depthWrite: !1,
					side: 2
				})]
			}),
			S && /* @__PURE__ */ (0, $.jsxs)("group", {
				name: "construction-marquee-preview",
				children: [
					/* @__PURE__ */ (0, $.jsxs)("mesh", {
						position: [
							S.center[0],
							.76,
							S.center[1]
						],
						rotation: [
							-Math.PI / 2,
							0,
							0
						],
						renderOrder: 40,
						raycast: $n,
						children: [/* @__PURE__ */ (0, $.jsx)("planeGeometry", { args: [S.width, S.depth] }), /* @__PURE__ */ (0, $.jsx)(er, {
							color: "#ff754d",
							transparent: !0,
							opacity: .11,
							depthTest: !1,
							depthWrite: !1,
							side: 2
						})]
					}),
					/* @__PURE__ */ (0, $.jsx)(nr, {
						from: [S.minX, S.minZ],
						to: [S.maxX, S.minZ],
						color: "#cf6648",
						width: .035,
						elevation: .78
					}),
					/* @__PURE__ */ (0, $.jsx)(nr, {
						from: [S.maxX, S.minZ],
						to: [S.maxX, S.maxZ],
						color: "#cf6648",
						width: .035,
						elevation: .78
					}),
					/* @__PURE__ */ (0, $.jsx)(nr, {
						from: [S.maxX, S.maxZ],
						to: [S.minX, S.maxZ],
						color: "#cf6648",
						width: .035,
						elevation: .78
					}),
					/* @__PURE__ */ (0, $.jsx)(nr, {
						from: [S.minX, S.maxZ],
						to: [S.minX, S.minZ],
						color: "#cf6648",
						width: .035,
						elevation: .78
					})
				]
			}),
			C && (w.pools ?? []).filter((e) => d(T, "pool", e.id)).map((e) => /* @__PURE__ */ (0, $.jsx)("group", {
				name: `construction-marquee-pool-${e.id}`,
				children: e.polygon.map((t, n) => /* @__PURE__ */ (0, $.jsx)(nr, {
					from: Un(t, E),
					to: Un(e.polygon[(n + 1) % e.polygon.length], E),
					color: "#ff754d",
					width: .065,
					elevation: .79
				}, n))
			}, e.id)),
			D && /* @__PURE__ */ (0, $.jsx)(ur, { draft: O }),
			k.map(({ room: e, geometry: t }) => {
				let n = d(T, "room", e.id);
				return /* @__PURE__ */ (0, $.jsx)("mesh", {
					name: `construction-room-target-${e.id}`,
					geometry: t,
					renderOrder: n ? 12 : 1,
					userData: { roomId: e.id },
					onPointerDown: (t) => {
						u !== "select" || t.nativeEvent?.shiftKey || (Fr(t), A(e.id));
					},
					children: /* @__PURE__ */ (0, $.jsx)(j, {
						color: "#ff754d",
						transparent: !0,
						visible: n,
						opacity: n ? .12 : 0,
						side: 2,
						depthTest: !n,
						depthWrite: !1
					})
				}, e.id);
			}),
			/* @__PURE__ */ (0, $.jsx)(zr, {
				draft: w,
				highlightedSelection: T,
				directlySelected: M,
				draggingEndpoint: N,
				draggingWall: P,
				previewPoint: F,
				coordinates: E,
				openingTool: I,
				placeOpeningFromEvent: L,
				tool: u,
				onSelectWall: R,
				setOpeningPreview: z,
				placementPreviewFromEvent: ee,
				ToonMaterial: j,
				planMode: D,
				translationPointForEvent: te,
				setDraggingWall: ne,
				capturedSelectDrag: re,
				clientPointForEvent: p,
				onDraggingChange: h,
				wallDeltaForEvent: B,
				finishWallDrag: ie,
				cancelWallDrag: ae,
				setDraggingEndpoint: oe,
				pointForEvent: se,
				finishEndpointDrag: ce,
				cancelEndpointDrag: le
			}),
			/* @__PURE__ */ (0, $.jsx)(Rr, {
				draft: w,
				draggingOpening: ue,
				resizingOpening: de,
				previewPoint: F,
				coordinates: E,
				highlightedSelection: T,
				directlySelected: M,
				planMode: D,
				tool: u,
				onSelectOpening: V,
				setDraggingOpening: fe,
				capturedSelectDrag: re,
				clientPointForEvent: p,
				onDraggingChange: h,
				openingPlacementFromEvent: pe,
				finishOpeningDrag: H,
				cancelOpeningDrag: me,
				ToonMaterial: j,
				setResizingOpening: U,
				resizedOpeningForEvent: he,
				finishOpeningResize: ge,
				cancelOpeningResize: _e
			}),
			ve && ve.length > .001 && /* @__PURE__ */ (0, $.jsxs)("mesh", {
				name: `construction-${u}-preview`,
				raycast: $n,
				position: [
					ve.center[0],
					.12,
					ve.center[1]
				],
				rotation: [
					0,
					ve.rotationYRadians,
					0
				],
				renderOrder: 22,
				children: [/* @__PURE__ */ (0, $.jsx)("boxGeometry", { args: [
					ve.length,
					.2,
					.12
				] }), /* @__PURE__ */ (0, $.jsx)(j, {
					color: u === "wall" ? ye : "#ff754d",
					transparent: !0,
					opacity: .72,
					depthTest: !1
				})]
			}),
			n && r && i && /* @__PURE__ */ (0, $.jsx)(Mr, {
				walls: l,
				primary: {
					from: r,
					to: i
				},
				junctions: [r, i],
				coordinates: E,
				planMode: D,
				defaultThicknessMeters: u === "wall" ? w.interiorWallThicknessMeters : .055,
				labelKind: u === "hedge" ? "Hedge" : u === "wall" ? "Wall" : u === "pool" ? "Pool edge" : "Floor edge"
			}),
			Se && N && u === "select" && /* @__PURE__ */ (0, $.jsx)(Mr, {
				walls: O.walls,
				primary: Se,
				junctions: [N.point],
				coordinates: E,
				planMode: D,
				defaultThicknessMeters: w.interiorWallThicknessMeters
			}),
			W && /* @__PURE__ */ (0, $.jsxs)("group", {
				name: `construction-opening-placement-preview-${I}`,
				position: [
					W.x,
					W.sillHeightMeters + W.openingHeightMeters / 2,
					W.z
				],
				rotation: [
					0,
					W.rotationY,
					0
				],
				userData: {
					validPlacement: W.valid,
					wallId: W.wallId,
					offsetPlanUnits: W.offsetPlanUnits
				},
				children: [/* @__PURE__ */ (0, $.jsxs)("mesh", {
					renderOrder: 28,
					children: [/* @__PURE__ */ (0, $.jsx)("boxGeometry", { args: [
						W.widthMeters,
						W.openingHeightMeters,
						.15
					] }), /* @__PURE__ */ (0, $.jsx)(j, {
						color: W.valid ? "#ff754d" : "#c45345",
						transparent: !0,
						opacity: .34,
						wireframe: !0,
						depthTest: !1,
						depthWrite: !1
					})]
				}), /* @__PURE__ */ (0, $.jsxs)("mesh", {
					position: [
						0,
						-W.openingHeightMeters / 2 - W.sillHeightMeters + .055,
						0
					],
					renderOrder: 27,
					children: [/* @__PURE__ */ (0, $.jsx)("boxGeometry", { args: [
						W.widthMeters,
						.025,
						.28
					] }), /* @__PURE__ */ (0, $.jsx)(j, {
						color: W.valid ? "#ff754d" : "#c45345",
						transparent: !0,
						opacity: .72,
						depthTest: !1
					})]
				})]
			}),
			/* @__PURE__ */ (0, $.jsxs)("mesh", {
				name: "construction-placement-surface",
				position: [
					0,
					-.015,
					0
				],
				rotation: [
					-Math.PI / 2,
					0,
					0
				],
				onPointerDown: (e) => {
					if (u === "select") {
						e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && (Fr(e), Ce?.());
						return;
					}
					if (I) return L(e);
					if (u === "measure") {
						Fr(e);
						let t = se(e);
						t && we?.(t);
						return;
					}
					if (!n || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
					Ir(e);
					let t = se(e);
					t && (h?.(!0), Me.current = zn(e.pointerId, p(e), t, !!r), r ? o?.(t) : a?.(t));
				},
				onPointerMove: (e) => {
					if (I) {
						z(ee(e, I));
						return;
					}
					if (u === "measure" && De === "drawing") {
						Fr(e);
						let t = se(e);
						t && Oe?.(t);
						return;
					}
					if (!n || !r) return;
					Fr(e);
					let t = se(e);
					t && o?.(t);
				},
				onPointerUp: (e) => {
					if (!n || !r) return;
					let t = Me.current;
					Me.current = null;
					let i = p(e), a = Bn(t, e.pointerId, i), c = a ? null : se(e);
					Lr(e), a ? o?.(t.point) : c && s?.(c), h?.(!1);
				},
				onPointerCancel: (e) => {
					if (I) {
						Fr(e), z(null);
						return;
					}
					n && (Me.current = null, Lr(e), c?.(), h?.(!1));
				},
				children: [/* @__PURE__ */ (0, $.jsx)("planeGeometry", { args: [x, x] }), /* @__PURE__ */ (0, $.jsx)(j, {
					visible: !1,
					transparent: !0,
					opacity: 0,
					depthWrite: !1
				})]
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionOutlineHandle.tsx
var Qr = function(e, t) {
	this.updateWorldMatrix(!0, !1), h.prototype.raycast.call(this, e, t);
};
function $r({ at: e, name: t, handlers: n }) {
	let r = (0, Q.useRef)(null), { camera: i, size: a } = f(), o = () => {
		r.current && (r.current.scale.setScalar(1 / fr(i, a.height)), r.current.updateWorldMatrix(!0, !0));
	};
	return (0, Q.useLayoutEffect)(o), oe(o), /* @__PURE__ */ (0, $.jsxs)("group", {
		ref: r,
		position: e,
		children: [/* @__PURE__ */ (0, $.jsxs)("mesh", {
			name: t,
			raycast: Qr,
			...n,
			children: [/* @__PURE__ */ (0, $.jsx)("sphereGeometry", { args: [
				22,
				12,
				8
			] }), /* @__PURE__ */ (0, $.jsx)(er, {
				visible: !1,
				transparent: !0,
				opacity: 0,
				depthWrite: !1
			})]
		}), /* @__PURE__ */ (0, $.jsxs)("mesh", {
			raycast: $n,
			renderOrder: 32,
			children: [/* @__PURE__ */ (0, $.jsx)("sphereGeometry", { args: [
				6,
				12,
				8
			] }), /* @__PURE__ */ (0, $.jsx)(er, {
				color: "#fff7f1",
				depthTest: !1
			})]
		})]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionOutlineMeasurements.tsx
function ei({ polygon: e, corner: t, coordinates: n, labelKind: r }) {
	let i = e.map((t, n) => ({
		id: `outline-edge-${n}`,
		from: t,
		to: e[(n + 1) % e.length]
	})), a = i[t ?? 0];
	return /* @__PURE__ */ (0, $.jsx)(Mr, {
		walls: i,
		primary: a,
		junctions: t === null ? e : [e[t]],
		coordinates: n,
		planMode: !0,
		defaultThicknessMeters: .055,
		labelKind: r
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/useConstructionOutlineDrag.ts
var ti = new ht(new t(0, 1, 0), 0);
function ni({ draft: e, selection: n, selectionKind: r, tool: i, onSelect: a, onUpdate: o, onDraggingChange: s }) {
	let c = f((e) => e.get), l = (0, Q.useRef)(new t()), [u, d] = (0, Q.useState)(null), [p, m] = (0, Q.useState)(null), h = (0, Q.useRef)(null), g = (e) => {
		h.current = e, m(e);
	}, _ = () => {
		let e = h.current;
		e && e.target.hasPointerCapture?.(e.pointerId) !== !1 && e.target.releasePointerCapture?.(e.pointerId), g(null), d(null), e?.dragActive && s?.(!1);
	};
	(0, Q.useEffect)(() => {
		h.current && (i !== "select" || n?.kind !== r || n.id !== h.current.id) && _();
	}, [i, n]), (0, Q.useEffect)(() => () => {
		let e = h.current;
		e && e.target.hasPointerCapture?.(e.pointerId) !== !1 && e.target.releasePointerCapture?.(e.pointerId);
	}, []);
	let v = (t, n, i) => {
		let a = t.ray.intersectPlane(ti, l.current);
		if (!a) return null;
		if (!n) return Gn({
			point: a,
			coordinates: e.coordinates,
			absolute: t.nativeEvent.altKey
		});
		let { camera: o, size: s } = c(), u = i && r !== "hedge" ? i.original.map((e, t) => ({
			id: `outline-${t}`,
			from: e,
			to: i.original[(t + 1) % i.original.length]
		})) : [];
		return Kn({
			point: a,
			coordinates: e.coordinates,
			walls: [
				...e.walls,
				...e.hedges ?? [],
				...u
			],
			onSnap: d,
			movingEndpoint: i?.corner == null ? void 0 : i.original[i.corner],
			pixelsPerMeter: fr(o, s.height),
			snapRadiusPixels: pr(t.nativeEvent.pointerType),
			angleOrigin: i?.corner == null ? void 0 : i.original[(i.corner + i.original.length - 1) % i.original.length],
			pointerType: t.nativeEvent.pointerType,
			absolute: t.nativeEvent.altKey
		});
	}, y = (e, t) => {
		let n = v(e, t.corner !== null, t);
		return n ? t.original.map((e, r) => t.corner === null ? [Number((e[0] + n[0] - t.grab[0]).toFixed(4)), Number((e[1] + n[1] - t.grab[1]).toFixed(4))] : r === t.corner ? n : e) : t.polygon;
	};
	return {
		snap: u,
		drag: p,
		handlers: (e, t, n = null) => ({
			onPointerDown: (r) => {
				if (i !== "select" || r.button !== 0 || r.metaKey || r.ctrlKey || r.shiftKey) return;
				let o = v(r, !1);
				if (!o) return;
				r.stopPropagation();
				let s = r.target;
				s.setPointerCapture?.(r.pointerId), a(e), g({
					...Ln(r.pointerId, [r.nativeEvent.clientX, r.nativeEvent.clientY]),
					id: e,
					corner: n,
					original: t,
					polygon: t,
					grab: o,
					target: s
				});
			},
			onPointerMove: (e) => {
				let t = h.current;
				if (!t || t.pointerId !== e.pointerId) return;
				e.stopPropagation();
				let n = Rn(t, e.pointerId, [e.nativeEvent.clientX, e.nativeEvent.clientY]);
				n && (n.started && s?.(!0), g({
					...n.drag,
					polygon: y(e, n.drag)
				}));
			},
			onPointerUp: (e) => {
				let t = h.current;
				!t || t.pointerId !== e.pointerId || (e.stopPropagation(), t.dragActive && o(t.id, y(e, t)), _());
			},
			onPointerCancel: (e) => {
				e.stopPropagation(), _();
			}
		})
	};
}
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionPoolLayer.tsx
function ri({ polygon: e, draft: t, name: n, color: r, handlers: i }) {
	let a = (0, Q.useMemo)(() => {
		if (!Me(e)) return null;
		let n = new he();
		return e.forEach((e, r) => {
			let [i, a] = W(e, t.coordinates);
			r === 0 ? n.moveTo(i, -a) : n.lineTo(i, -a);
		}), n.closePath(), new me(n);
	}, [e, t.coordinates]);
	return (0, Q.useEffect)(() => () => a?.dispose(), [a]), a ? /* @__PURE__ */ (0, $.jsx)("mesh", {
		name: n,
		geometry: a,
		position: [
			0,
			.03,
			0
		],
		rotation: [
			-Math.PI / 2,
			0,
			0
		],
		...i,
		...i ? {} : { raycast: $n },
		children: /* @__PURE__ */ (0, $.jsx)(tr, { color: r })
	}) : null;
}
function ii({ draft: e, selection: t, tool: n, points: r = [], preview: i = null, deletionTargets: a, onSelect: o, onUpdate: s, onDraggingChange: c }) {
	let { snap: l, drag: u, handlers: f } = ni({
		draft: e,
		selection: t,
		selectionKind: "pool",
		tool: n,
		onSelect: o,
		onUpdate: s,
		onDraggingChange: c
	}), p = i && r.length && Math.hypot(i[0] - r.at(-1)[0], i[1] - r.at(-1)[1]) > 1e-7 ? [...r, i] : r;
	return /* @__PURE__ */ (0, $.jsxs)("group", {
		name: "construction-pools",
		children: [
			/* @__PURE__ */ (0, $.jsx)(rr, {
				snap: l,
				coordinates: e.coordinates
			}),
			(e.pools ?? []).map((r) => {
				let i = u?.id === r.id ? u.polygon : r.polygon, o = a ? a.some((e) => e.kind === "pool" && e.id === r.id) : d(t, "pool", r.id), s = t?.kind === "pool" && t.id === r.id, c = Me(i);
				return /* @__PURE__ */ (0, $.jsxs)("group", {
					name: `plan-pool-${r.id}`,
					children: [
						/* @__PURE__ */ (0, $.jsx)(ri, {
							name: `construction-pool-${r.id}`,
							polygon: i,
							draft: e,
							color: o ? "#9bcace" : "#bddadb",
							handlers: n === "select" ? f(r.id, i) : void 0
						}),
						i.map((t, a) => {
							let s = i[(a + 1) % i.length], l = qn(t, s, e.coordinates);
							return /* @__PURE__ */ (0, $.jsxs)("group", { children: [/* @__PURE__ */ (0, $.jsx)(nr, {
								from: W(t, e.coordinates),
								to: W(s, e.coordinates),
								color: c ? o ? "#ff754d" : "#689ba1" : "#c53f32",
								width: o ? .065 : .035,
								elevation: .06
							}), n === "select" && /* @__PURE__ */ (0, $.jsxs)("mesh", {
								name: `construction-pool-edge-${r.id}-${a}`,
								position: [
									l.center[0],
									.07,
									l.center[1]
								],
								rotation: [
									0,
									l.rotationYRadians,
									0
								],
								...f(r.id, i),
								children: [/* @__PURE__ */ (0, $.jsx)("boxGeometry", { args: [
									l.length,
									.02,
									.18
								] }), /* @__PURE__ */ (0, $.jsx)(er, {
									visible: !1,
									transparent: !0,
									opacity: 0,
									depthWrite: !1,
									side: 2
								})]
							})] }, a);
						}),
						s && n === "select" && i.map((t, n) => {
							let [i, a] = W(t, e.coordinates);
							return /* @__PURE__ */ (0, $.jsx)($r, {
								name: `construction-pool-corner-${r.id}-${n}`,
								at: [
									i,
									.12,
									a
								],
								handlers: f(r.id, r.polygon, n)
							}, n);
						})
					]
				}, r.id);
			}),
			u?.dragActive && /* @__PURE__ */ (0, $.jsx)(ei, {
				polygon: u.polygon,
				corner: u.corner,
				coordinates: e.coordinates,
				labelKind: "Pool edge"
			}),
			n === "pool" && /* @__PURE__ */ (0, $.jsxs)("group", {
				name: "construction-pool-draft",
				children: [
					/* @__PURE__ */ (0, $.jsx)(ri, {
						polygon: p,
						draft: e,
						name: "construction-pool-draft-fill",
						color: "#d5e4df"
					}),
					r.slice(1).map((t, n) => /* @__PURE__ */ (0, $.jsx)(nr, {
						from: W(r[n], e.coordinates),
						to: W(t, e.coordinates),
						color: "#689ba1",
						width: .055,
						elevation: .08
					}, n)),
					r.map((t, n) => {
						let [r, i] = W(t, e.coordinates);
						return /* @__PURE__ */ (0, $.jsx)(hr, {
							name: `construction-pool-point-${n}`,
							position: [
								r,
								.18,
								i
							],
							planMode: !0,
							radiusPixels: n === 0 ? 9 : 4
						}, n);
					})
				]
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionFloorLayer.tsx
function ai({ at: e, name: t, handlers: n }) {
	let r = (0, Q.useRef)(null);
	return oe(({ camera: e, size: t }) => {
		r.current?.scale.setScalar(1 / fr(e, t.height));
	}), /* @__PURE__ */ (0, $.jsxs)("group", {
		ref: r,
		position: e,
		children: [/* @__PURE__ */ (0, $.jsxs)("mesh", {
			name: t,
			...n,
			children: [/* @__PURE__ */ (0, $.jsx)("sphereGeometry", { args: [
				22,
				12,
				8
			] }), /* @__PURE__ */ (0, $.jsx)(er, {
				visible: !1,
				transparent: !0,
				opacity: 0,
				depthWrite: !1
			})]
		}), /* @__PURE__ */ (0, $.jsxs)("mesh", {
			raycast: $n,
			renderOrder: 42,
			children: [/* @__PURE__ */ (0, $.jsx)("sphereGeometry", { args: [
				6,
				12,
				8
			] }), /* @__PURE__ */ (0, $.jsx)(er, {
				color: "#fff7f1",
				depthTest: !1
			})]
		})]
	});
}
function oi({ floor: e, polygon: t, name: n, elevation: r, selected: i, handlers: a }) {
	let o = (0, Q.useMemo)(() => s(t) ? m(t, e.coordinates, 1) : null, [e.coordinates, t]);
	return (0, Q.useEffect)(() => () => o?.dispose(), [o]), o ? /* @__PURE__ */ (0, $.jsx)("mesh", {
		name: n,
		geometry: o,
		position: [
			0,
			r,
			0
		],
		rotation: [
			-Math.PI / 2,
			0,
			0
		],
		renderOrder: i ? 41 : 40,
		...a,
		...a ? {} : { raycast: $n },
		children: /* @__PURE__ */ (0, $.jsx)(er, {
			color: "#ff754d",
			transparent: !0,
			visible: i,
			opacity: i ? .12 : 0,
			depthTest: !1,
			depthWrite: !1,
			side: 2
		})
	}) : null;
}
function si({ draft: e, floor: t, selection: n, deletionTargets: r, tool: i, paintTarget: a, drawingPoints: o, drawingPreview: c, drawingRoomId: l, onPaintRoom: u, onSelectZone: f, onUpdateZone: p, onDraggingChange: m }) {
	let { snap: h, drag: g, handlers: _ } = ni({
		draft: e,
		selection: n,
		selectionKind: "floor-zone",
		tool: i,
		onSelect: f,
		onUpdate: p,
		onDraggingChange: m
	}), v = t.rooms.find((e) => e.id === l), y = !c || !v ? !c || Ut(c, t) : x(c, v.polygon), b = c && o.length ? [...o, c] : o, S = [...t.groundZones ?? [], ...t.rooms.flatMap((e) => e.floorZones ?? [])];
	return /* @__PURE__ */ (0, $.jsxs)("group", {
		name: "construction-floors",
		children: [
			/* @__PURE__ */ (0, $.jsx)(rr, {
				snap: h,
				coordinates: e.coordinates
			}),
			g?.dragActive && /* @__PURE__ */ (0, $.jsx)(ei, {
				polygon: g.polygon,
				corner: g.corner,
				coordinates: e.coordinates,
				labelKind: "Floor edge"
			}),
			i === "floor" && a === "room" && t.rooms.map((e) => /* @__PURE__ */ (0, $.jsx)(oi, {
				floor: t,
				polygon: e.polygon,
				name: `construction-floor-room-${e.id}`,
				elevation: .09,
				handlers: { onPointerDown: (t) => {
					t.button !== 0 || t.metaKey || t.ctrlKey || t.shiftKey || (t.stopPropagation(), u(e.id));
				} }
			}, e.id)),
			[...S].reverse().map((a, o) => {
				let c = g?.id === a.id ? g.polygon : a.polygon, l = r ? r.some((e) => e.kind === "floor-zone" && e.id === a.id) : d(n, "floor-zone", a.id), u = n?.kind === "floor-zone" && n.id === a.id, f = s(c);
				return /* @__PURE__ */ (0, $.jsxs)("group", {
					name: `plan-floor-zone-${a.id}`,
					children: [
						/* @__PURE__ */ (0, $.jsx)(oi, {
							floor: t,
							polygon: c,
							name: `floor-zone-hit-${a.id}`,
							elevation: .12 + (S.length - o) * 1e-4,
							selected: l,
							handlers: i === "select" ? _(a.id, c) : void 0
						}),
						/* @__PURE__ */ (0, $.jsx)(ar, {
							name: "floor-zone-outline",
							strokes: c.map((t, n) => ({
								from: W(t, e.coordinates),
								to: W(c[(n + 1) % c.length], e.coordinates),
								color: f ? l ? "#ff754d" : "#8d8b80" : "#c53f32",
								width: l ? .055 : .018,
								elevation: .14
							}))
						}),
						u && i === "select" && c.map((t, n) => {
							let [r, i] = W(t, e.coordinates);
							return /* @__PURE__ */ (0, $.jsx)(ai, {
								name: `floor-zone-corner-${a.id}-${n}`,
								at: [
									r,
									.18,
									i
								],
								handlers: _(a.id, a.polygon, n)
							}, n);
						})
					]
				}, a.id);
			}),
			i === "floor" && a === "custom-area" && /* @__PURE__ */ (0, $.jsxs)("group", {
				name: "construction-floor-draft",
				children: [b.slice(1).map((t, n) => /* @__PURE__ */ (0, $.jsx)(nr, {
					from: W(b[n], e.coordinates),
					to: W(t, e.coordinates),
					color: y ? "#ff754d" : "#c53f32",
					width: .055,
					elevation: .18
				}, n)), o.map((t, n) => {
					let [r, i] = W(t, e.coordinates);
					return /* @__PURE__ */ (0, $.jsx)(hr, {
						name: `construction-floor-point-${n}`,
						position: [
							r,
							.2,
							i
						],
						planMode: !0,
						radiusPixels: n === 0 ? 9 : 4
					}, n);
				})]
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/useFloorZoneDrawing.ts
var ci = {
	roomId: null,
	points: [],
	future: [],
	preview: null,
	error: null
}, li = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[1]) <= 1e-7, ui = (e, t, n) => {
	if (t.type === "cancel") return { state: ci };
	if (t.type === "preview") return { state: {
		...e,
		preview: t.point
	} };
	if (t.type === "undo") {
		if (!e.points.length) return { state: e };
		let t = e.points.slice(0, -1);
		return { state: {
			roomId: t.length ? e.roomId : null,
			points: t,
			future: [e.points.at(-1), ...e.future],
			preview: null,
			error: null
		} };
	}
	if (t.type === "redo") return e.future.length ? { state: {
		...e,
		points: [...e.points, e.future[0]],
		future: e.future.slice(1),
		preview: e.future[0],
		error: null
	} } : { state: e };
	let r = t.point, i = n.rooms;
	if (!r.every(Number.isFinite)) return { state: e };
	if (!e.points.length) {
		let t = i.find((e) => x(r, e.polygon));
		return t ? { state: {
			roomId: t.id,
			points: [r],
			future: [],
			preview: r,
			error: null
		} } : Ut(r, n) ? { state: {
			roomId: null,
			points: [r],
			future: [],
			preview: r,
			error: null
		} } : { state: {
			...e,
			error: "Start inside a room or outside the building."
		} };
	}
	if (li(r, e.points.at(-1))) return { state: e };
	let a = i.find((t) => t.id === e.roomId);
	if (e.points.length >= 3 && li(r, e.points[0])) {
		let t = e.points;
		return s(t) ? a && !O(t, a.polygon) ? { state: {
			...e,
			error: `Keep the complete area inside ${a.name}.`
		} } : !a && !re(t, n) ? { state: {
			...e,
			error: "Keep the complete outdoor area outside the building."
		} } : {
			state: ci,
			completed: {
				roomId: a?.id ?? null,
				polygon: t
			}
		} : { state: {
			...e,
			error: "The area crosses itself or has no area."
		} };
	}
	return a && !x(r, a.polygon) ? { state: {
		...e,
		error: `Keep every corner inside ${a.name}.`
	} } : !a && !Ut(r, n) ? { state: {
		...e,
		error: "Keep every outdoor corner outside the building."
	} } : e.points.some((e) => li(e, r)) ? { state: {
		...e,
		error: "Return to the first corner to close the area."
	} } : { state: {
		...e,
		points: [...e.points, r],
		future: [],
		preview: r,
		error: null
	} };
};
function di(e, t) {
	let [n, r] = (0, Q.useState)(ci), i = (0, Q.useRef)(n), a = (0, Q.useRef)(t);
	a.current = t;
	let o = (0, Q.useCallback)((t) => {
		let n = ui(i.current, t, e);
		i.current = n.state, r(n.state), n.completed && a.current(n.completed.roomId, n.completed.polygon);
	}, [e]);
	return {
		...n,
		active: n.points.length > 0 || n.future.length > 0,
		place: (0, Q.useCallback)((e) => o({
			type: "point",
			point: e
		}), [o]),
		previewPoint: (0, Q.useCallback)((e) => o({
			type: "preview",
			point: e
		}), [o]),
		undo: (0, Q.useCallback)(() => o({ type: "undo" }), [o]),
		redo: (0, Q.useCallback)(() => o({ type: "redo" }), [o]),
		cancel: (0, Q.useCallback)(() => o({ type: "cancel" }), [o])
	};
}
//#endregion
//#region apps/web/src/editor-preview/construct/FloorFinishPalette.tsx
var fi = (e) => e.kind === "solid" ? "solid" : e.preset;
function pi({ preset: e }) {
	let t = (0, Q.useRef)(null);
	return (0, Q.useEffect)(() => {
		let n;
		try {
			n = t.current?.getContext("2d");
		} catch {
			n = null;
		}
		n && N(n, e.id, "plan");
	}, [e]), /* @__PURE__ */ (0, $.jsx)("canvas", {
		ref: t,
		width: 64,
		height: 64,
		"aria-hidden": "true"
	});
}
function mi({ value: e, onChange: t, target: n, onTargetChange: r, showTarget: i = !0 }) {
	let a = fi(e), o = e.kind === "solid" ? e.color : "#d3cec5";
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		className: "floor-finish-palette",
		"aria-label": "Floor finish",
		children: [
			i && /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "floor-finish-palette__targets",
				role: "group",
				"aria-label": "Paint target",
				children: [/* @__PURE__ */ (0, $.jsx)("button", {
					type: "button",
					"aria-label": "Whole room",
					"aria-pressed": n === "room",
					onClick: () => r("room"),
					children: "Whole room"
				}), /* @__PURE__ */ (0, $.jsx)("button", {
					type: "button",
					"aria-label": "Custom area",
					"aria-pressed": n === "custom-area",
					onClick: () => r("custom-area"),
					children: "Custom area"
				})]
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "floor-finish-palette__grid",
				children: [/* @__PURE__ */ (0, $.jsxs)("button", {
					type: "button",
					"aria-label": "Solid color",
					"aria-pressed": a === "solid",
					onClick: () => t({
						kind: "solid",
						color: o
					}),
					children: [/* @__PURE__ */ (0, $.jsx)("span", {
						style: { background: o },
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, $.jsx)("small", { children: "Solid" })]
				}), qe.map((e) => /* @__PURE__ */ (0, $.jsxs)("button", {
					type: "button",
					"aria-label": e.label,
					"aria-pressed": a === e.id,
					onClick: () => t({
						kind: "preset",
						preset: e.id
					}),
					children: [/* @__PURE__ */ (0, $.jsx)(pi, { preset: e }), /* @__PURE__ */ (0, $.jsx)("small", { children: e.label })]
				}, e.id))]
			}),
			a === "solid" && /* @__PURE__ */ (0, $.jsxs)("label", { children: ["Solid color", /* @__PURE__ */ (0, $.jsx)("input", {
				type: "color",
				"aria-label": "Solid floor color",
				value: o,
				onChange: (e) => t({
					kind: "solid",
					color: e.target.value
				})
			})] })
		]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/FloorPaintConfirmation.tsx
function hi({ roomName: e, onKeepZones: t, onReplaceEverything: n, onCancel: r }) {
	let i = Xe(), a = (0, Q.useRef)(null), o = (0, Q.useRef)(null), s = (0, Q.useRef)(null);
	return (0, Q.useEffect)(() => {
		let e = a.current;
		if (e) return s.current = i.root.activeElement, typeof e.showModal == "function" ? e.showModal() : e.setAttribute("open", ""), o.current?.focus(), () => {
			e.open && typeof e.close == "function" ? e.close() : e.removeAttribute("open"), s.current?.focus();
		};
	}, []), /* @__PURE__ */ (0, $.jsx)("dialog", {
		ref: a,
		className: "floor-paint-confirmation",
		"aria-labelledby": "floor-paint-confirmation-title",
		onCancel: (e) => {
			e.preventDefault(), r();
		},
		children: /* @__PURE__ */ (0, $.jsxs)("div", { children: [
			/* @__PURE__ */ (0, $.jsxs)("h2", {
				id: "floor-paint-confirmation-title",
				children: [
					"Paint all of ",
					e,
					"?"
				]
			}),
			/* @__PURE__ */ (0, $.jsx)("p", { children: "This room already contains custom floor areas." }),
			/* @__PURE__ */ (0, $.jsx)("button", {
				ref: o,
				type: "button",
				onClick: t,
				children: "Keep custom areas"
			}),
			/* @__PURE__ */ (0, $.jsx)("button", {
				type: "button",
				onClick: n,
				children: "Replace everything"
			}),
			/* @__PURE__ */ (0, $.jsx)("button", {
				type: "button",
				onClick: r,
				children: "Cancel"
			})
		] })
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/HedgeStyleGrid.tsx
var gi = yt.map((e) => ({
	style: e,
	entry: {
		key: `hedge:${e.id}:v2`,
		kind: "procedural",
		definition: {
			bounds: {
				min: [
					-1.65,
					0,
					-e.widthMeters * .65
				],
				max: [
					1.65,
					e.heightMeters * 1.1,
					e.widthMeters * .65
				]
			},
			component: () => /* @__PURE__ */ (0, $.jsx)(S, {
				style: e.id,
				length: 3,
				height: e.heightMeters,
				width: e.widthMeters
			})
		}
	}
}));
function _i({ value: e, onChoose: t }) {
	let n = (0, Q.useRef)(null);
	return /* @__PURE__ */ (0, $.jsx)(Y, {
		scrollRoot: n,
		enabled: !0,
		children: /* @__PURE__ */ (0, $.jsx)("div", {
			className: "catalog-grid hedge-style-grid",
			ref: n,
			role: "group",
			"aria-label": "Hedge styles",
			children: gi.map(({ style: n, entry: r }) => /* @__PURE__ */ (0, $.jsxs)("button", {
				type: "button",
				className: "catalog-card",
				"aria-label": n.label,
				"aria-pressed": e === n.id,
				onClick: () => t(n),
				children: [
					/* @__PURE__ */ (0, $.jsx)(_t, {
						entry: r,
						showAdd: !1
					}),
					/* @__PURE__ */ (0, $.jsx)("strong", { children: n.label }),
					/* @__PURE__ */ (0, $.jsx)("small", { children: n.description })
				]
			}, n.id))
		})
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/HedgeProperties.tsx
function vi({ editor: e }) {
	let t = e.selection?.kind === "hedge" ? e.draft.hedges?.find((t) => e.selection?.kind === "hedge" && t.id === e.selection.id) : void 0;
	if (e.tool !== "hedge" && !t) return null;
	let n = t ?? e.hedgeSettings, r = (r) => {
		t ? e.dispatch({
			type: "update-hedge",
			id: t.id,
			changes: r
		}) : e.setHedgeSettings({
			...n,
			...r
		});
	};
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "construction-inspector__selection",
		children: [
			/* @__PURE__ */ (0, $.jsx)("header", { children: /* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsx)("small", { children: t ? "Selected hedge" : "Hedge tool" }), /* @__PURE__ */ (0, $.jsx)("strong", { children: "Hedgerow" })] }) }),
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "construction-inspector__tool-hint",
				children: "Drag to draw a hedge. Continue from its endpoint for a connected row. Escape finishes drawing."
			}),
			/* @__PURE__ */ (0, $.jsx)(_i, {
				value: n.style,
				onChoose: (e) => r(t ? { style: e.id } : {
					style: e.id,
					heightMeters: e.heightMeters,
					widthMeters: e.widthMeters
				})
			}),
			/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Height (m)", /* @__PURE__ */ (0, $.jsx)(Cn, {
				label: "Hedge height",
				value: n.heightMeters,
				min: .2,
				step: .1,
				onCommit: (e) => r({ heightMeters: Math.min(5, Math.max(.2, e)) })
			})] }),
			/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Width (m)", /* @__PURE__ */ (0, $.jsx)(Cn, {
				label: "Hedge width",
				value: n.widthMeters,
				min: .2,
				step: .1,
				onCommit: (e) => r({ widthMeters: Math.min(3, Math.max(.2, e)) })
			})] }),
			t && /* @__PURE__ */ (0, $.jsx)("button", {
				type: "button",
				onClick: e.deleteSelected,
				children: "Delete hedge"
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/DebouncedColorInput.tsx
function yi({ label: e, value: t, disabled: n = !1, onCommit: r }) {
	let [i, a] = (0, Q.useState)(t), o = (0, Q.useRef)(null), s = (0, Q.useRef)(t), c = (0, Q.useRef)(r);
	return (0, Q.useEffect)(() => {
		a(t), s.current = t;
	}, [t]), (0, Q.useEffect)(() => {
		c.current = r;
	}, [r]), (0, Q.useEffect)(() => () => {
		o.current && clearTimeout(o.current);
	}, []), /* @__PURE__ */ (0, $.jsx)("input", {
		"aria-label": e,
		type: "color",
		value: i,
		disabled: n,
		onInput: (e) => {
			let t = e.currentTarget.value;
			s.current = t, a(t), o.current && clearTimeout(o.current), o.current = setTimeout(() => {
				o.current = null, c.current(s.current);
			}, 160);
		},
		onBlur: () => {
			o.current && clearTimeout(o.current), o.current = null, s.current !== t && c.current(s.current);
		}
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/RoofSettingsEditor.tsx
function bi({ value: e = ft, onChange: t }) {
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		className: "construction-inspector__floor-settings",
		"aria-label": "Roof settings",
		children: [
			/* @__PURE__ */ (0, $.jsx)("header", { children: /* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsx)("small", { children: "Whole building" }), /* @__PURE__ */ (0, $.jsx)("strong", { children: "Gable roof" })] }) }),
			/* @__PURE__ */ (0, $.jsx)("p", { children: "One direction and palette for every roof section. Use Show roof in Home to see the result after Save." }),
			/* @__PURE__ */ (0, $.jsxs)("fieldset", { children: [
				/* @__PURE__ */ (0, $.jsx)("legend", { children: "Direction & colors" }),
				/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Ridge direction", /* @__PURE__ */ (0, $.jsxs)("select", {
					"aria-label": "Roof ridge direction",
					value: e.direction,
					onChange: (n) => t({
						...e,
						direction: n.target.value
					}),
					children: [/* @__PURE__ */ (0, $.jsx)("option", {
						value: "left-right",
						children: "Left–right ↔"
					}), /* @__PURE__ */ (0, $.jsx)("option", {
						value: "front-back",
						children: "Front–back ↕"
					})]
				})] }),
				/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Roof color", /* @__PURE__ */ (0, $.jsx)(yi, {
					label: "Roof color",
					value: e.color,
					onCommit: (n) => t({
						...e,
						color: n
					})
				})] }),
				/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Trim color", /* @__PURE__ */ (0, $.jsx)(yi, {
					label: "Roof trim color",
					value: e.edgeColor,
					onCommit: (n) => t({
						...e,
						edgeColor: n
					})
				})] })
			] })
		]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/PoolProperties.tsx
function xi({ pool: e, editor: t }) {
	let n = t.draft.coordinates.metersPerPlanUnit, r = e.polygon.reduce((t, r, i) => {
		let a = e.polygon[(i + 1) % e.polygon.length];
		return t + Math.hypot(r[0] - a[0], r[1] - a[1]) * n;
	}, 0);
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "construction-inspector__selection",
		children: [
			/* @__PURE__ */ (0, $.jsx)("header", { children: /* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsx)("small", { children: "Selected pool" }), /* @__PURE__ */ (0, $.jsx)("strong", { children: "Pool outline" })] }) }),
			/* @__PURE__ */ (0, $.jsxs)("dl", {
				className: "construction-inspector__wall-facts construction-inspector__pool-facts",
				children: [/* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsx)("dt", { children: "Area" }), /* @__PURE__ */ (0, $.jsxs)("dd", { children: [(Math.abs(De(e.polygon)) * n ** 2).toFixed(1), " m²"] })] }), /* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsx)("dt", { children: "Perimeter" }), /* @__PURE__ */ (0, $.jsxs)("dd", { children: [r.toFixed(2), " m"] })] })]
			}),
			/* @__PURE__ */ (0, $.jsx)("p", { children: "Drag the pool to move it, or drag a corner to reshape it." }),
			e.polygon.map((n, r) => /* @__PURE__ */ (0, $.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, $.jsxs)("legend", { children: [
				"Corner ",
				r + 1,
				" · plan units"
			] }), [0, 1].map((i) => /* @__PURE__ */ (0, $.jsxs)("label", { children: [i === 0 ? "X" : "Y", /* @__PURE__ */ (0, $.jsx)(Cn, {
				label: `Pool corner ${r + 1} ${i === 0 ? "X" : "Y"}`,
				step: .1,
				value: Number(n[i].toPrecision(15)),
				onCommit: (n) => t.updatePool(e.id, wt(e.polygon, (e, t) => t === r ? i === 0 ? [n, e[1]] : [e[0], n] : e))
			})] }, i))] }, r)),
			/* @__PURE__ */ (0, $.jsx)("button", {
				type: "button",
				onClick: t.deleteSelected,
				children: "Delete pool"
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/validation-visuals.ts
var Si = (e, t) => e.includes(`"${t}"`) || e.includes(`“${t}”`), Ci = (e) => `${e.kind}:${e.id}`, wi = (e) => `${e.code}:${e.path}:${e.message}`, Ti = (e, t, n) => {
	let r = e.target ? [e.target] : [], i = (e) => {
		r.some((t) => Ci(t) === Ci(e)) || r.push(e);
	};
	t.walls.forEach((t) => {
		Si(e.message, t.id) && i({
			kind: "wall",
			id: t.id
		});
	}), t.openings.forEach((t) => {
		Si(e.message, t.id) && i({
			kind: "opening",
			id: t.id
		});
	}), t.rooms.forEach((t) => {
		Si(e.message, t.id) && i({
			kind: "room",
			id: t.id
		}), t.floorZones?.forEach((t) => {
			Si(e.message, t.id) && i({
				kind: "floor-zone",
				id: t.id
			});
		});
	}), t.groundZones?.forEach((t) => {
		Si(e.message, t.id) && i({
			kind: "floor-zone",
			id: t.id
		});
	}), t.pools?.forEach((t) => {
		Si(e.message, t.id) && i({
			kind: "pool",
			id: t.id
		});
	}), n.forEach((t) => {
		Si(e.message, t.id) && i({
			kind: "scene-item",
			id: t.id
		});
	});
	for (let e of [...r]) {
		if (e.kind === "junction" && t.wallJunctions.find((t) => t.id === e.id)?.wallIds.forEach((e) => i({
			kind: "wall",
			id: e
		})), e.kind === "opening") {
			let n = t.openings.find((t) => t.id === e.id);
			n && i({
				kind: "wall",
				id: n.wallId
			});
		}
		if (e.kind === "scene-item") {
			let t = n.find((t) => t.id === e.id);
			t?.placement.kind === "wall" && i({
				kind: "wall",
				id: t.placement.wallId
			});
		}
	}
	return r;
}, Ei = (e) => {
	if (e.length === 0) return [0, 0];
	let t = e.reduce((e, t) => [e[0] + t[0], e[1] + t[1]], [0, 0]);
	return [t[0] / e.length, t[1] / e.length];
}, Di = (e, t, n, r) => {
	let i = t[0] - e[0], a = t[1] - e[1], o = r[0] - n[0], s = r[1] - n[1], c = i * s - a * o;
	if (Math.abs(c) <= 1e-9) return null;
	let l = n[0] - e[0], u = n[1] - e[1], d = (l * s - u * o) / c, f = (l * a - u * i) / c;
	return d <= 1e-7 || d >= 1 - 1e-7 || f <= 1e-7 || f >= 1 - 1e-7 ? null : [e[0] + i * d, e[1] + a * d];
}, Oi = (e) => {
	for (let t = 0; t < e.length; t += 1) {
		let n = (t + 1) % e.length;
		for (let r = t + 1; r < e.length; r += 1) {
			let i = (r + 1) % e.length;
			if (t === r || n === r || i === t) continue;
			let a = Di(e[t], e[n], e[r], e[i]);
			if (a) return a;
		}
	}
	return null;
}, ki = (e, t, n) => {
	if (e.kind === "wall") {
		let n = t.walls.find((t) => t.id === e.id);
		return n ? [(n.from[0] + n.to[0]) / 2, (n.from[1] + n.to[1]) / 2] : null;
	}
	if (e.kind === "junction") return t.wallJunctions.find((t) => t.id === e.id)?.at ?? null;
	if (e.kind === "opening") {
		let n = t.openings.find((t) => t.id === e.id), r = n && t.walls.find((e) => e.id === n.wallId);
		if (!n || !r) return null;
		let i = Math.hypot(r.to[0] - r.from[0], r.to[1] - r.from[1]);
		if (i <= 1e-9) return r.from;
		let a = (n.offsetFromWallStartPlanUnits + n.widthPlanUnits / 2) / i;
		return [r.from[0] + (r.to[0] - r.from[0]) * a, r.from[1] + (r.to[1] - r.from[1]) * a];
	}
	if (e.kind === "room") {
		let n = t.rooms.find((t) => t.id === e.id);
		return n ? Ei(n.polygon) : null;
	}
	if (e.kind === "floor-zone") {
		let n = [...t.groundZones ?? [], ...t.rooms.flatMap((e) => e.floorZones ?? [])].find((t) => t.id === e.id);
		return n ? Ei(n.polygon) : null;
	}
	if (e.kind === "pool") {
		let n = t.pools?.find((t) => t.id === e.id);
		return n ? Ei(n.polygon) : null;
	}
	if (e.kind === "ceiling") {
		let n = t.ceilings?.find((t) => t.id === e.id), r = n && t.rooms.find((e) => n.roomIds.includes(e.id));
		return r ? Ei(r.polygon) : null;
	}
	let r = n.find((t) => t.id === e.id);
	if (!r) return null;
	let i = r.placement;
	if (i.kind !== "wall") return i.at;
	let a = t.walls.find((e) => e.id === i.wallId);
	if (!a) return null;
	let o = Math.hypot(a.to[0] - a.from[0], a.to[1] - a.from[1]);
	if (o <= 1e-9) return a.from;
	let s = i.offsetFromWallStartPlanUnits / o;
	return [a.from[0] + (a.to[0] - a.from[0]) * s, a.from[1] + (a.to[1] - a.from[1]) * s];
}, Ai = (e) => e.code === "floor-zone.polygon" ? "Floor area crosses itself" : e.code === "floor-zone.outside-room" ? "Floor area leaves its room" : e.code === "ground-zone.inside-footprint" ? "Outdoor area crosses the building" : e.target?.kind === "floor-zone" ? "Check this floor area" : e.code === "pool.polygon" ? "Check the pool outline" : e.code === "pool.building-overlap" ? "Pool is too close to the house" : e.code === "pool.overlap" ? "Pool rims overlap" : e.target?.kind === "pool" ? "Check this pool" : e.code === "room.name" || e.code === "topology.room-name" ? "Name this room" : e.code === "room.polygon-invalid" ? "Room outline crosses itself" : e.code === "wall-junction.opening-overlap" ? "Opening is too close to this corner" : e.code === "project.outdoor-placement" ? "Outdoor item is inside the house" : e.target?.kind === "opening" ? "Check this opening" : e.target?.kind === "wall" ? "Check this wall" : e.target?.kind === "room" ? "Check this room" : e.target?.kind === "scene-item" ? "Check this object" : "Check this area", ji = (e, t, n) => {
	if (e.code === "room.polygon-invalid" && e.target?.kind === "room") {
		let n = t.rooms.find((t) => t.id === e.target?.id);
		if (n) return Oi(n.polygon) ?? Ei(n.polygon);
	}
	let r = Ti(e, t, n)[0];
	return r ? ki(r, t, n) : null;
};
//#endregion
//#region apps/web/src/editor-preview/construct/CommittedTextInput.tsx
function Mi({ label: e, value: t, placeholder: n, onCommit: r }) {
	let [i, a] = (0, Q.useState)(t), o = (0, Q.useRef)(!1);
	return (0, Q.useEffect)(() => a(t), [t]), /* @__PURE__ */ (0, $.jsx)("input", {
		"aria-label": e,
		type: "text",
		maxLength: 80,
		value: i,
		placeholder: n,
		onChange: (e) => a(e.target.value),
		onBlur: () => {
			if (o.current) {
				o.current = !1;
				return;
			}
			let e = i.trim();
			e !== t && r(e);
		},
		onKeyDown: (e) => {
			e.key === "Enter" && e.currentTarget.blur(), e.key === "Escape" && (o.current = !0, a(t), e.currentTarget.blur());
		}
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/FloorSettingsEditor.tsx
function Ni({ editor: e }) {
	let [t, n] = (0, Q.useState)(e.draft.coordinates.origin[0]), [r, i] = (0, Q.useState)(e.draft.coordinates.origin[1]), [a, o] = (0, Q.useState)(e.draft.coordinates.metersPerPlanUnit), [s, c] = (0, Q.useState)(e.draft.coordinates.scaleBasis), [l, u] = (0, Q.useState)(e.draft.defaultWallHeightMeters), [d, f] = (0, Q.useState)(e.draft.defaultCeilingHeightMeters), [p, m] = (0, Q.useState)(!1);
	(0, Q.useEffect)(() => {
		n(e.draft.coordinates.origin[0]), i(e.draft.coordinates.origin[1]), o(e.draft.coordinates.metersPerPlanUnit), c(e.draft.coordinates.scaleBasis), u(e.draft.defaultWallHeightMeters), f(e.draft.defaultCeilingHeightMeters), m(!1);
	}, [
		e.draft.coordinates,
		e.draft.defaultCeilingHeightMeters,
		e.draft.defaultWallHeightMeters
	]);
	let h = a !== e.draft.coordinates.metersPerPlanUnit, g = h || t !== e.draft.coordinates.origin[0] || r !== e.draft.coordinates.origin[1] || s !== e.draft.coordinates.scaleBasis || l !== e.draft.defaultWallHeightMeters || d !== e.draft.defaultCeilingHeightMeters, _ = [
		t,
		r,
		a,
		l,
		d
	].every(Number.isFinite) && a > 0 && l > 0 && d > 0, v = (e) => (t) => {
		e(t), m(!1);
	};
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		className: "construction-inspector__floor-settings",
		"aria-label": "Floor settings",
		children: [
			/* @__PURE__ */ (0, $.jsxs)("header", { children: [/* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsx)("small", { children: "Whole floor" }), /* @__PURE__ */ (0, $.jsx)("strong", { children: "Scale & defaults" })] }), /* @__PURE__ */ (0, $.jsx)("span", { children: e.draft.coordinates.scaleBasis })] }),
			/* @__PURE__ */ (0, $.jsx)("p", { children: "Scale changes resize the complete house while keeping its plan geometry intact." }),
			/* @__PURE__ */ (0, $.jsxs)("fieldset", { children: [
				/* @__PURE__ */ (0, $.jsx)("legend", { children: "Coordinate system" }),
				/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Scale", /* @__PURE__ */ (0, $.jsx)(Cn, {
					label: "Meters per plan unit",
					min: .001,
					step: .01,
					value: a,
					onCommit: v(o)
				})] }),
				/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Basis", /* @__PURE__ */ (0, $.jsxs)("select", {
					"aria-label": "Floor scale basis",
					value: s,
					onChange: (e) => {
						c(e.target.value), m(!1);
					},
					children: [/* @__PURE__ */ (0, $.jsx)("option", {
						value: "measured",
						children: "Measured"
					}), /* @__PURE__ */ (0, $.jsx)("option", {
						value: "inferred",
						children: "Estimated"
					})]
				})] }),
				/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Origin X", /* @__PURE__ */ (0, $.jsx)(Cn, {
					label: "Floor origin X",
					step: .1,
					value: t,
					onCommit: v(n)
				})] }),
				/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Origin Y", /* @__PURE__ */ (0, $.jsx)(Cn, {
					label: "Floor origin Y",
					step: .1,
					value: r,
					onCommit: v(i)
				})] })
			] }),
			/* @__PURE__ */ (0, $.jsxs)("fieldset", { children: [
				/* @__PURE__ */ (0, $.jsx)("legend", { children: "Default heights" }),
				/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Wall", /* @__PURE__ */ (0, $.jsx)(Cn, {
					label: "Default wall height",
					min: .3,
					step: .05,
					value: l,
					onCommit: v(u)
				})] }),
				/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Ceiling", /* @__PURE__ */ (0, $.jsx)(Cn, {
					label: "Default ceiling height",
					min: .3,
					step: .05,
					value: d,
					onCommit: v(f)
				})] })
			] }),
			p && /* @__PURE__ */ (0, $.jsx)("p", {
				className: "construction-inspector__scale-warning",
				role: "alert",
				children: "This will rescale the architecture and reposition plan-authored items. Click again to confirm."
			}),
			/* @__PURE__ */ (0, $.jsx)("button", {
				type: "button",
				disabled: !g || !_,
				onClick: () => {
					if (!(!g || !_)) {
						if (h && !p) {
							m(!0);
							return;
						}
						e.updateFloorSettings({
							coordinates: {
								origin: [t, r],
								metersPerPlanUnit: a,
								scaleBasis: s
							},
							defaultWallHeightMeters: l,
							defaultCeilingHeightMeters: d
						});
					}
				},
				children: p ? "Confirm whole-floor rescale" : "Apply floor settings"
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/inspector-number-format.ts
var Pi = (e) => Number.isInteger(e) ? e.toFixed(0) : e.toFixed(2).replace(/0+$/, "");
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionInspector.tsx
function Fi({ planImportControls: e, tutorialControls: t, walkStartControls: n, roof: r, onRoofChange: i, editor: a, dependencyIssues: o = [], contextualIssues: s, onIssueFocus: c, floorPainting: l }) {
	let [u, d] = (0, Q.useState)(!1), f = (0, Q.useId)(), p = a.selection?.kind === "wall" ? a.selection.id : null, m = a.selection?.kind === "pool" ? a.selection.id : null, h = a.selection?.kind === "opening" ? a.selection.id : null, g = a.selection?.kind === "room" ? a.selection.id : null, _ = a.selection?.kind === "floor-zone" ? a.selection.id : null, v = p ? a.draft.walls.find((e) => e.id === p) : void 0, y = m ? a.draft.pools?.find((e) => e.id === m) : void 0, b = h ? a.draft.openings.find((e) => e.id === h) : void 0, x = g ? a.previewFloor.rooms.find((e) => e.id === g) : void 0, S = x ? a.draft.rooms.find((e) => e.id === x.id) : void 0, C = _ ? [...a.draft.groundZones ?? [], ...a.draft.rooms.flatMap((e) => e.floorZones ?? [])].find((e) => e.id === _) : void 0, w = x ? a.draft.rooms.filter((e) => ct(e.anchor, x.polygon)) : [], T = (0, Q.useMemo)(() => x ? Le(x, a.previewFloor) : 0, [x, a.previewFloor]), E = S?.ceilingHeightMeters ?? a.draft.defaultCeilingHeightMeters, D = v ? a.previewFloor.walls.find((e) => e.id === v.id) : void 0, O = v && (D?.classification === "exterior" || a.wallRuns.some((e) => e.sourceWallId === v.id && e.classification === "exterior")), k = v ? Jn(v, a.previewFloor.coordinates) : void 0, j = v?.heightMeters ?? a.draft.defaultWallHeightMeters, M = v?.thicknessMeters ?? D?.thicknessMeters ?? a.draft.exteriorWallThicknessMeters, N = a.selection?.kind === "multiple", P = (0, Q.useMemo)(() => {
		let e = {
			hedge: 0,
			wall: 0,
			opening: 0,
			room: 0,
			pool: 0,
			"floor-zone": 0
		}, t = /* @__PURE__ */ new Set();
		for (let n of a.deletionTargets ?? []) {
			let r = `${n.kind}:${n.id}`;
			t.has(r) || e[n.kind]++, t.add(r);
		}
		return e;
	}, [a.deletionTargets]), F = Object.values(P).reduce((e, t) => e + t, 0), I = s ?? [...o, ...a.canUndo ? a.topologyIssues : []], L = I.filter((e) => e.severity !== "warning").length, z = I.length - L, ee = (e) => {
		if (c && "source" in e) {
			c(e);
			return;
		}
		e.target && (e.target.kind === "wall" && a.selectWall(e.target.id), e.target.kind === "opening" && a.selectOpening(e.target.id), e.target.kind === "room" && a.selectRoom(e.target.id), e.target.kind === "pool" && a.selectPool(e.target.id), e.target.kind === "floor-zone" && a.selectFloorZone(e.target.id));
	};
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		className: "construction-inspector",
		"aria-label": "Construction inspector",
		children: [
			/* @__PURE__ */ (0, $.jsx)(vi, { editor: a }),
			a.tool === "wall" && /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "construction-inspector__selection",
				children: [
					/* @__PURE__ */ (0, $.jsx)("header", { children: /* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsx)("small", { children: "Wall tool" }), /* @__PURE__ */ (0, $.jsx)("strong", { children: "Draw walls" })] }) }),
					/* @__PURE__ */ (0, $.jsx)("p", {
						className: "construction-inspector__tool-hint",
						children: "Click and drag a wall segment. Continue from its endpoint to draw a connected wall."
					}),
					/* @__PURE__ */ (0, $.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, $.jsx)("legend", { children: "Finish" }), /* @__PURE__ */ (0, $.jsxs)("label", { children: ["Exterior", /* @__PURE__ */ (0, $.jsx)(yi, {
						label: "New wall exterior color",
						value: a.exteriorWallColor,
						onCommit: (e) => {
							a.setExteriorWallColor(e), v && a.updateSelectedWallMetadata({ exteriorColor: e });
						}
					})] })] })
				]
			}),
			a.tool === "door" && /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "construction-inspector__selection",
				children: [
					/* @__PURE__ */ (0, $.jsx)("header", { children: /* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsx)("small", { children: "Door tool" }), /* @__PURE__ */ (0, $.jsx)("strong", { children: "Place a door" })] }) }),
					/* @__PURE__ */ (0, $.jsx)("p", {
						className: "construction-inspector__tool-hint",
						children: "Choose a door type, then click a wall."
					}),
					/* @__PURE__ */ (0, $.jsx)(Mn, {
						value: a.doorConfiguration,
						onChange: a.setDoorConfiguration
					}),
					/* @__PURE__ */ (0, $.jsx)(Nn, {
						value: a.doorConfiguration,
						onChange: a.setDoorConfiguration
					}),
					a.openingError && /* @__PURE__ */ (0, $.jsx)("p", {
						role: "alert",
						children: a.openingError
					})
				]
			}),
			a.tool === "floor" && l && /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "construction-inspector__selection",
				children: [
					/* @__PURE__ */ (0, $.jsx)("header", { children: /* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsx)("small", { children: "Floor tool" }), /* @__PURE__ */ (0, $.jsx)("strong", { children: "Paint a floor" })] }) }),
					/* @__PURE__ */ (0, $.jsx)("p", {
						className: "construction-inspector__tool-hint",
						children: "Choose a finish, then click a room or close an area inside or outside the building."
					}),
					/* @__PURE__ */ (0, $.jsx)(mi, {
						value: l.finish,
						onChange: l.onFinishChange,
						target: l.target,
						onTargetChange: l.onTargetChange
					}),
					l.target === "custom-area" && /* @__PURE__ */ (0, $.jsx)("p", {
						role: "status",
						children: "Start inside a room for an inset, or outside the building for a path or ground patch. Return to the first point to close it. Escape cancels."
					}),
					l.drawingError && /* @__PURE__ */ (0, $.jsx)("p", {
						role: "alert",
						children: l.drawingError
					}),
					l.drawingActive && /* @__PURE__ */ (0, $.jsx)("button", {
						type: "button",
						onClick: l.onCancelDrawing,
						children: "Cancel area"
					})
				]
			}),
			a.tool === "pool" && /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "construction-inspector__selection",
				role: "status",
				children: [
					/* @__PURE__ */ (0, $.jsx)("header", { children: /* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsx)("small", { children: "Outdoor pool" }), /* @__PURE__ */ (0, $.jsx)("strong", { children: "Close the outline" })] }) }),
					/* @__PURE__ */ (0, $.jsx)("p", {
						className: "construction-inspector__tool-hint",
						children: "Click to add corners, then return to the first corner to close the pool. Undo removes the last corner. Escape cancels."
					}),
					a.poolDrawing?.error && /* @__PURE__ */ (0, $.jsx)("p", {
						role: "alert",
						children: a.poolDrawing.error
					}),
					a.poolDrawing?.active && /* @__PURE__ */ (0, $.jsx)("button", {
						type: "button",
						onClick: a.poolDrawing.cancel,
						children: "Cancel pool"
					})
				]
			}),
			a.tool === "select" && !a.selection && /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "construction-inspector__selection construction-inspector__selection-hint",
				role: "status",
				children: [/* @__PURE__ */ (0, $.jsx)("header", { children: /* @__PURE__ */ (0, $.jsx)("h3", { children: "Edit the plan" }) }), /* @__PURE__ */ (0, $.jsx)("p", {
					className: "construction-inspector__tool-hint",
					children: "Select an element to see its properties. Hold Shift and drag to select several; Delete or Backspace removes them."
				})]
			}),
			N && /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "construction-inspector__selection construction-inspector__bulk-selection",
				children: [
					/* @__PURE__ */ (0, $.jsx)("header", { children: /* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsx)("small", { children: "Multiple selection" }), /* @__PURE__ */ (0, $.jsxs)("strong", { children: [F, " elements selected"] })] }) }),
					/* @__PURE__ */ (0, $.jsx)("p", { children: "Whole source walls and their attached openings are included. Shift-drag again to replace this selection." }),
					/* @__PURE__ */ (0, $.jsxs)("dl", {
						className: "construction-inspector__bulk-facts",
						"aria-label": "Elements selected for deletion",
						children: [
							P.room > 0 && /* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsx)("dt", { children: "Rooms" }), /* @__PURE__ */ (0, $.jsx)("dd", { children: P.room })] }),
							P.wall > 0 && /* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsx)("dt", { children: "Walls" }), /* @__PURE__ */ (0, $.jsx)("dd", { children: P.wall })] }),
							P.opening > 0 && /* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsx)("dt", { children: "Openings" }), /* @__PURE__ */ (0, $.jsx)("dd", { children: P.opening })] }),
							P.hedge > 0 && /* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsx)("dt", { children: "Hedges" }), /* @__PURE__ */ (0, $.jsx)("dd", { children: P.hedge })] }),
							P.pool > 0 && /* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsx)("dt", { children: "Pools" }), /* @__PURE__ */ (0, $.jsx)("dd", { children: P.pool })] }),
							P["floor-zone"] > 0 && /* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsx)("dt", { children: "Floor areas" }), /* @__PURE__ */ (0, $.jsx)("dd", { children: P["floor-zone"] })] })
						]
					}),
					/* @__PURE__ */ (0, $.jsx)("button", {
						type: "button",
						onClick: a.deleteSelected,
						children: "Delete selection"
					})
				]
			}),
			y && /* @__PURE__ */ (0, $.jsx)(xi, {
				pool: y,
				editor: a
			}),
			C && /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "construction-inspector__selection",
				children: [
					/* @__PURE__ */ (0, $.jsx)("header", { children: /* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsx)("small", { children: "Selected floor area" }), /* @__PURE__ */ (0, $.jsx)("strong", { children: "Floor finish" })] }) }),
					/* @__PURE__ */ (0, $.jsx)(mi, {
						value: C.finish,
						onChange: (e) => a.updateFloorZone(C.id, { finish: e }),
						target: "room",
						onTargetChange: () => void 0,
						showTarget: !1
					}),
					/* @__PURE__ */ (0, $.jsx)("button", {
						type: "button",
						onClick: a.deleteSelected,
						children: "Delete floor area"
					})
				]
			}),
			v && /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "construction-inspector__selection",
				children: [
					/* @__PURE__ */ (0, $.jsx)("header", { children: /* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsx)("small", { children: "Selected wall" }), /* @__PURE__ */ (0, $.jsx)("strong", { children: "Wall properties" })] }) }),
					/* @__PURE__ */ (0, $.jsxs)("dl", {
						className: "construction-inspector__wall-facts",
						children: [
							/* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsx)("dt", { children: "Length" }), /* @__PURE__ */ (0, $.jsx)("dd", { children: k?.label })] }),
							/* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsx)("dt", { children: "Direction" }), /* @__PURE__ */ (0, $.jsxs)("dd", { children: [k?.directionDegrees.toFixed(1), "°"] })] }),
							/* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsx)("dt", { children: "Type" }), /* @__PURE__ */ (0, $.jsx)("dd", { children: D?.classification ?? "Pending" })] })
						]
					}),
					/* @__PURE__ */ (0, $.jsxs)("fieldset", { children: [
						/* @__PURE__ */ (0, $.jsx)("legend", { children: "Dimensions · m" }),
						/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Thickness", /* @__PURE__ */ (0, $.jsx)(Cn, {
							label: "Wall thickness",
							min: .04,
							step: .01,
							value: M,
							onCommit: (e) => a.updateSelectedWallMetadata({ thicknessMeters: e })
						})] }),
						/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Height", /* @__PURE__ */ (0, $.jsx)(Cn, {
							label: "Wall height",
							min: .3,
							step: .05,
							value: j,
							onCommit: (e) => a.updateSelectedWallMetadata({ heightMeters: e })
						})] })
					] }),
					a.tool !== "wall" && O && /* @__PURE__ */ (0, $.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, $.jsx)("legend", { children: "Finish" }), /* @__PURE__ */ (0, $.jsxs)("label", { children: ["Exterior", /* @__PURE__ */ (0, $.jsx)(yi, {
						label: "Wall exterior color",
						value: v.exteriorColor ?? a.defaultExteriorWallColor,
						onCommit: (e) => {
							a.setExteriorWallColor(e), a.updateSelectedWallMetadata({ exteriorColor: e });
						}
					})] })] }),
					u && ["from", "to"].map((e) => /* @__PURE__ */ (0, $.jsxs)("fieldset", { children: [
						/* @__PURE__ */ (0, $.jsx)("legend", { children: e === "from" ? "Start point" : "End point" }),
						/* @__PURE__ */ (0, $.jsxs)("label", { children: ["X", /* @__PURE__ */ (0, $.jsx)(Cn, {
							label: `${e} X coordinate`,
							value: v[e][0],
							onCommit: (t) => a.updateWallEndpoint(v.id, e, [t, v[e][1]])
						})] }),
						/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Y", /* @__PURE__ */ (0, $.jsx)(Cn, {
							label: `${e} Y coordinate`,
							value: v[e][1],
							onCommit: (t) => a.updateWallEndpoint(v.id, e, [v[e][0], t])
						})] })
					] }, e)),
					u && /* @__PURE__ */ (0, $.jsx)($.Fragment, { children: /* @__PURE__ */ (0, $.jsxs)("fieldset", {
						className: "construction-inspector__face-colors",
						children: [
							/* @__PURE__ */ (0, $.jsx)("legend", { children: "Directed faces" }),
							/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Left", /* @__PURE__ */ (0, $.jsx)(yi, {
								label: "Left wall face color",
								value: v.faceColors?.left ?? "#e8ded0",
								onCommit: (e) => a.updateSelectedWallMetadata({ faceColors: {
									...v.faceColors,
									left: e
								} })
							})] }),
							/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Right", /* @__PURE__ */ (0, $.jsx)(yi, {
								label: "Right wall face color",
								value: v.faceColors?.right ?? "#e8ded0",
								onCommit: (e) => a.updateSelectedWallMetadata({ faceColors: {
									...v.faceColors,
									right: e
								} })
							})] })
						]
					}) }),
					/* @__PURE__ */ (0, $.jsx)("button", {
						type: "button",
						onClick: a.deleteSelected,
						children: "Delete wall"
					})
				]
			}),
			x && /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "construction-inspector__selection",
				children: [
					/* @__PURE__ */ (0, $.jsxs)("header", { children: [/* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsx)("small", { children: "Selected room" }), /* @__PURE__ */ (0, $.jsx)("strong", { children: x.name || "Unnamed room" })] }), /* @__PURE__ */ (0, $.jsxs)("span", {
						title: "Interior floor area",
						"aria-label": `Interior floor area: ${T.toFixed(1)} square meters`,
						children: [T.toFixed(1), " m²"]
					})] }),
					w.length > 1 && /* @__PURE__ */ (0, $.jsxs)("div", {
						className: "construction-inspector__merge",
						role: "alert",
						children: [
							/* @__PURE__ */ (0, $.jsx)("strong", { children: "Choose the room to keep" }),
							/* @__PURE__ */ (0, $.jsx)("p", { children: "This wall change joined existing rooms. Keep one identity before continuing." }),
							/* @__PURE__ */ (0, $.jsx)("div", { children: w.map((e) => /* @__PURE__ */ (0, $.jsxs)("button", {
								type: "button",
								onClick: () => a.resolveRoomMerge(e.id),
								children: ["Keep ", e.name || e.id]
							}, e.id)) })
						]
					}),
					/* @__PURE__ */ (0, $.jsxs)("fieldset", { children: [
						/* @__PURE__ */ (0, $.jsx)("legend", { children: "Room" }),
						/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Name", /* @__PURE__ */ (0, $.jsx)(Mi, {
							label: "Room name",
							value: S?.name ?? x.name,
							placeholder: "e.g. Living room",
							onCommit: (e) => a.updateSelectedRoom({ name: e })
						})] }),
						/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Accent", /* @__PURE__ */ (0, $.jsx)(yi, {
							label: "Room accent color",
							value: S?.accent ?? x.accent,
							onCommit: (e) => a.updateSelectedRoom({ accent: e })
						})] })
					] }),
					/* @__PURE__ */ (0, $.jsxs)("fieldset", {
						className: "construction-inspector__room-surfaces",
						children: [
							/* @__PURE__ */ (0, $.jsx)("legend", { children: "Surfaces" }),
							/* @__PURE__ */ (0, $.jsxs)("div", {
								className: "construction-inspector__surface-summary",
								children: [/* @__PURE__ */ (0, $.jsx)("span", { children: "Floor" }), /* @__PURE__ */ (0, $.jsx)("strong", { children: (() => {
									let e = R(x);
									return e.kind === "solid" ? "Solid color" : A(e.preset).label;
								})() })]
							}),
							/* @__PURE__ */ (0, $.jsx)("button", {
								type: "button",
								onClick: () => a.setTool("floor"),
								children: "Paint floor"
							}),
							/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Ceiling", /* @__PURE__ */ (0, $.jsx)(Cn, {
								label: "Room ceiling height",
								min: .3,
								step: .05,
								value: E,
								onCommit: (e) => a.updateSelectedRoom({ ceilingHeightMeters: e })
							})] })
						]
					}),
					u && /* @__PURE__ */ (0, $.jsxs)("fieldset", { children: [
						/* @__PURE__ */ (0, $.jsx)("legend", { children: "Room identity" }),
						/* @__PURE__ */ (0, $.jsxs)("label", { children: ["ID", /* @__PURE__ */ (0, $.jsx)("input", {
							"aria-label": "Room identifier",
							type: "text",
							value: x.id,
							readOnly: !0
						})] }),
						/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Anchor", /* @__PURE__ */ (0, $.jsx)("input", {
							"aria-label": "Room identity anchor",
							type: "text",
							value: S?.anchor.map(Pi).join(", ") ?? "Generated",
							readOnly: !0
						})] })
					] }),
					a.deletionTargets?.some((e) => e.kind === "room" && e.id === x.id) === !1 && /* @__PURE__ */ (0, $.jsx)("p", {
						role: "status",
						children: "All enclosing walls are shared. Edit the walls to remove this room."
					}),
					/* @__PURE__ */ (0, $.jsx)("button", {
						type: "button",
						disabled: a.deletionTargets?.some((e) => e.kind === "room" && e.id === x.id) === !1,
						onClick: a.deleteSelected,
						children: "Delete room"
					})
				]
			}),
			b?.kind === "passage" && /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "construction-inspector__selection",
				children: [
					/* @__PURE__ */ (0, $.jsx)("header", { children: /* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsx)("small", { children: "Selected opening" }), /* @__PURE__ */ (0, $.jsx)("strong", { children: "Passage properties" })] }) }),
					/* @__PURE__ */ (0, $.jsx)(Pn, {
						opening: b,
						editor: a,
						advanced: u
					}),
					/* @__PURE__ */ (0, $.jsx)("button", {
						type: "button",
						onClick: a.deleteSelected,
						children: "Delete opening"
					})
				]
			}),
			I.length > 0 && /* @__PURE__ */ (0, $.jsxs)("section", {
				className: "construction-inspector__validation",
				"aria-label": "Construction validation",
				"aria-live": "polite",
				children: [/* @__PURE__ */ (0, $.jsxs)("header", { children: [/* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsx)("small", { children: "Needs attention" }), /* @__PURE__ */ (0, $.jsxs)("strong", { children: [
					I.length,
					" ",
					I.length === 1 ? "issue" : "issues"
				] })] }), /* @__PURE__ */ (0, $.jsxs)("span", { children: [
					L > 0 && `${L} ${L === 1 ? "error" : "errors"}`,
					L > 0 && z > 0 && " · ",
					z > 0 && `${z} ${z === 1 ? "warning" : "warnings"}`
				] })] }), /* @__PURE__ */ (0, $.jsx)("ul", { children: I.map((e, t) => {
					let n = e.target && (c || e.target.kind === "wall" || e.target.kind === "opening" || e.target.kind === "room" || e.target.kind === "pool" || e.target.kind === "floor-zone") ? e.target : void 0, r = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
						/* @__PURE__ */ (0, $.jsx)("span", {
							className: "construction-inspector__validation-marker",
							"aria-hidden": "true",
							children: e.severity === "warning" ? "!" : "×"
						}),
						/* @__PURE__ */ (0, $.jsxs)("span", { children: [/* @__PURE__ */ (0, $.jsx)("strong", { children: "source" in e ? Ai(e) : e.message }), /* @__PURE__ */ (0, $.jsxs)("small", { children: ["source" in e && `${e.message} `, e.suggestion] })] }),
						n && /* @__PURE__ */ (0, $.jsx)("span", {
							className: "construction-inspector__validation-arrow",
							"aria-hidden": "true",
							children: "Locate →"
						})
					] });
					return /* @__PURE__ */ (0, $.jsx)("li", {
						"data-severity": e.severity,
						children: n ? /* @__PURE__ */ (0, $.jsx)("button", {
							type: "button",
							"aria-label": `Select ${n.kind} ${n.id}: ${e.message}`,
							onClick: () => ee(e),
							children: r
						}) : /* @__PURE__ */ (0, $.jsx)("div", { children: r })
					}, `${e.code}:${e.path ?? ""}:${e.target?.kind ?? ""}:${e.target?.id ?? ""}:${t}`);
				}) })]
			}),
			e,
			/* @__PURE__ */ (0, $.jsxs)("details", {
				className: "construction-inspector__floor-disclosure",
				children: [/* @__PURE__ */ (0, $.jsxs)("summary", { children: ["Floor settings", /* @__PURE__ */ (0, $.jsx)(J, { name: "chevron" })] }), /* @__PURE__ */ (0, $.jsx)(Ni, { editor: a })]
			}),
			i && /* @__PURE__ */ (0, $.jsxs)("details", {
				className: "construction-inspector__floor-disclosure",
				children: [/* @__PURE__ */ (0, $.jsxs)("summary", { children: ["Roof", /* @__PURE__ */ (0, $.jsx)(J, { name: "chevron" })] }), /* @__PURE__ */ (0, $.jsx)(bi, {
					value: r,
					onChange: i
				})]
			}),
			n,
			t,
			/* @__PURE__ */ (0, $.jsxs)("button", {
				type: "button",
				className: "construction-inspector__expert-toggle",
				"aria-expanded": u,
				"aria-controls": f,
				onClick: () => d((e) => !e),
				children: [/* @__PURE__ */ (0, $.jsx)("span", { children: "Advanced" }), /* @__PURE__ */ (0, $.jsx)(J, { name: "chevron" })]
			}),
			u && /* @__PURE__ */ (0, $.jsxs)("section", {
				id: f,
				className: "construction-inspector__expert",
				"aria-label": "Expert construction data",
				children: [
					/* @__PURE__ */ (0, $.jsxs)("header", { children: [/* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsx)("small", { children: "Structure data" }), /* @__PURE__ */ (0, $.jsx)("strong", { children: "Walls & openings" })] }), /* @__PURE__ */ (0, $.jsx)("span", { children: "plan units" })] }),
					/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "construction-inspector__expert-group",
						children: [/* @__PURE__ */ (0, $.jsx)("h3", { children: "Walls" }), /* @__PURE__ */ (0, $.jsx)("div", {
							className: "construction-inspector__technical-list",
							children: a.draft.walls.map((e) => /* @__PURE__ */ (0, $.jsxs)("button", {
								type: "button",
								"aria-pressed": v?.id === e.id,
								onClick: () => a.selectWall(e.id),
								children: [/* @__PURE__ */ (0, $.jsx)("strong", { children: e.id }), /* @__PURE__ */ (0, $.jsxs)("small", { children: [
									Pi(e.from[0]),
									", ",
									Pi(e.from[1]),
									" → ",
									Pi(e.to[0]),
									", ",
									Pi(e.to[1])
								] })]
							}, e.id))
						})]
					}),
					/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "construction-inspector__expert-group",
						children: [/* @__PURE__ */ (0, $.jsx)("h3", { children: "Openings" }), /* @__PURE__ */ (0, $.jsx)("div", {
							className: "construction-inspector__technical-list",
							children: a.draft.openings.map((e) => /* @__PURE__ */ (0, $.jsxs)("button", {
								type: "button",
								"aria-pressed": b?.id === e.id,
								onClick: () => a.selectOpening(e.id),
								children: [/* @__PURE__ */ (0, $.jsxs)("strong", { children: [
									e.kind,
									" · ",
									e.id
								] }), /* @__PURE__ */ (0, $.jsxs)("small", { children: [
									e.wallId,
									" · offset ",
									Pi(e.offsetPlanUnits),
									" · width ",
									Pi(e.widthPlanUnits)
								] })]
							}, e.id))
						})]
					}),
					!!a.draft.pools?.length && /* @__PURE__ */ (0, $.jsxs)("div", {
						className: "construction-inspector__expert-group",
						children: [/* @__PURE__ */ (0, $.jsx)("h3", { children: "Pools" }), /* @__PURE__ */ (0, $.jsx)("div", {
							className: "construction-inspector__technical-list",
							children: a.draft.pools.map((e) => /* @__PURE__ */ (0, $.jsx)("button", {
								type: "button",
								"aria-pressed": y?.id === e.id,
								onClick: () => a.selectPool(e.id),
								children: e.id
							}, e.id))
						})]
					})
				]
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionMeasureOverlay.tsx
function Ii({ planMode: e = !1, measurement: t, preview: n = !1, showLabel: r = !0, onCopy: i }) {
	let a = e ? er : zt;
	return !t || !Er(t) ? null : /* @__PURE__ */ (0, $.jsxs)("group", {
		name: "construction-measure-guide",
		position: [
			t.world.center[0],
			.11,
			t.world.center[1]
		],
		rotation: [
			0,
			t.world.rotationYRadians,
			0
		],
		userData: {
			distancePlanUnits: t.distancePlanUnits,
			distanceMeters: t.distanceMeters,
			label: t.label,
			preview: n
		},
		children: [
			/* @__PURE__ */ (0, $.jsxs)("mesh", {
				name: "construction-measure-guide-line",
				renderOrder: 29,
				raycast: $n,
				children: [/* @__PURE__ */ (0, $.jsx)("boxGeometry", { args: [
					t.world.lengthMeters,
					.018,
					.025
				] }), /* @__PURE__ */ (0, $.jsx)(a, {
					color: "#ff754d",
					transparent: !0,
					opacity: n ? .72 : .96,
					depthTest: !1,
					depthWrite: !1
				})]
			}),
			[-1, 1].map((n) => /* @__PURE__ */ (0, $.jsx)(hr, {
				position: [
					n * t.world.lengthMeters / 2,
					0,
					0
				],
				planMode: e
			}, n)),
			r && /* @__PURE__ */ (0, $.jsx)(B, {
				position: [
					0,
					.14,
					0
				],
				center: !0,
				zIndexRange: [12, 0],
				pointerEvents: i ? "auto" : "none",
				children: /* @__PURE__ */ (0, $.jsx)(dr, {
					label: t.label,
					copyText: t.copyText,
					onCopy: i
				})
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/useValidationLabels.ts
function Li(e, t, n) {
	let [r, i] = (0, Q.useState)(() => /* @__PURE__ */ new Set());
	return (0, Q.useEffect)(() => {
		let t = new Set(e.map(wi));
		i((e) => {
			let n = [...e].filter((e) => t.has(e));
			return n.length === e.size ? e : new Set(n);
		});
	}, [e]), (0, Q.useEffect)(() => {
		t && i((e) => {
			if (!e.has(t)) return e;
			let n = new Set(e);
			return n.delete(t), n;
		});
	}, [t, n]), {
		hiddenKeys: r,
		hide: (e) => i((t) => /* @__PURE__ */ new Set([...t, ...e]))
	};
}
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionValidationOverlay.tsx
function Ri({ planMode: e = !1, floor: t, sceneItems: n, issues: r, activeIssueKey: i, focusVersion: a = 0, showLabels: o = !0, onActivate: s }) {
	let c = e ? er : zt, { hiddenKeys: l, hide: u } = Li(r, i, a), d = (0, Q.useMemo)(() => r.filter((e) => e.severity !== "warning"), [r]), f = (0, Q.useMemo)(() => d.flatMap((e) => Ti(e, t, n).map((t) => ({
		issue: e,
		target: t
	}))), [
		d,
		t,
		n
	]), p = (0, Q.useMemo)(() => f.flatMap(({ issue: e, target: n }) => {
		let r = n.kind === "pool" ? t.pools?.find((e) => e.id === n.id) : n.kind === "room" ? t.rooms.find((e) => e.id === n.id) : n.kind === "floor-zone" ? [...t.groundZones ?? [], ...t.rooms.flatMap((e) => e.floorZones ?? [])].find((e) => e.id === n.id) : void 0;
		return r ? r.polygon.map((i, a) => ({
			issue: e,
			target: n,
			edgeIndex: a,
			transform: qn(i, r.polygon[(a + 1) % r.polygon.length], t.coordinates)
		})) : [];
	}), [t, f]), m = (0, Q.useMemo)(() => {
		let e = /* @__PURE__ */ new Map();
		return d.forEach((r) => {
			if (l.has(wi(r))) return;
			let i = ji(r, t, n);
			if (!i) return;
			let a = `${i[0].toFixed(4)}:${i[1].toFixed(4)}`, o = e.get(a);
			o ? o.issues.push(r) : e.set(a, {
				point: i,
				issues: [r]
			});
		}), [...e.values()];
	}, [
		l,
		d,
		t,
		n
	]);
	return /* @__PURE__ */ (0, $.jsxs)("group", {
		name: "construction-validation-overlay",
		children: [
			f.map(({ issue: e, target: r }, i) => {
				if (r.kind === "wall") {
					let n = t.walls.find((e) => e.id === r.id);
					if (!n) return null;
					let a = qn(n.from, n.to, t.coordinates), o = n.heightMeters ?? t.defaultWallHeightMeters;
					return /* @__PURE__ */ (0, $.jsxs)("mesh", {
						name: `validation-wall-${r.id}`,
						position: [
							a.center[0],
							o / 2 + i * .002,
							a.center[1]
						],
						rotation: [
							0,
							a.rotationYRadians,
							0
						],
						renderOrder: 31,
						children: [/* @__PURE__ */ (0, $.jsx)("boxGeometry", { args: [
							a.length + .06,
							o + .08,
							n.thicknessMeters + .1
						] }), /* @__PURE__ */ (0, $.jsx)(c, {
							color: "#c53f32",
							transparent: !0,
							opacity: .7,
							wireframe: !0,
							depthTest: !1,
							depthWrite: !1
						})]
					}, `${wi(e)}:${r.kind}:${r.id}`);
				}
				if (r.kind === "opening") {
					let i = t.openings.find((e) => e.id === r.id), a = i && t.walls.find((e) => e.id === i.wallId), o = ki(r, t, n);
					if (!i || !a || !o) return null;
					let [s, l] = Un(o, t.coordinates), u = -Math.atan2(a.to[1] - a.from[1], a.to[0] - a.from[0]);
					return /* @__PURE__ */ (0, $.jsxs)("mesh", {
						name: `validation-opening-${r.id}`,
						position: [
							s,
							i.sillHeightMeters + i.openingHeightMeters / 2,
							l
						],
						rotation: [
							0,
							u,
							0
						],
						renderOrder: 32,
						children: [/* @__PURE__ */ (0, $.jsx)("boxGeometry", { args: [
							i.widthPlanUnits * t.coordinates.metersPerPlanUnit + .08,
							i.openingHeightMeters + .08,
							.24
						] }), /* @__PURE__ */ (0, $.jsx)(c, {
							color: "#d94738",
							transparent: !0,
							opacity: .78,
							wireframe: !0,
							depthTest: !1,
							depthWrite: !1
						})]
					}, `${wi(e)}:${r.kind}:${r.id}`);
				}
				if (r.kind === "junction") {
					let i = ki(r, t, n);
					if (!i) return null;
					let [a, o] = Un(i, t.coordinates);
					return /* @__PURE__ */ (0, $.jsxs)("mesh", {
						name: `validation-junction-${r.id}`,
						position: [
							a,
							.12,
							o
						],
						rotation: [
							-Math.PI / 2,
							0,
							0
						],
						renderOrder: 33,
						children: [/* @__PURE__ */ (0, $.jsx)("ringGeometry", { args: [
							.2,
							.31,
							28
						] }), /* @__PURE__ */ (0, $.jsx)(c, {
							color: "#d94738",
							transparent: !0,
							opacity: .95,
							side: 2,
							depthTest: !1,
							depthWrite: !1
						})]
					}, `${wi(e)}:${r.kind}:${r.id}`);
				}
				if (r.kind === "scene-item") {
					let i = n.find((e) => e.id === r.id), a = ki(r, t, n);
					if (!i || !a) return null;
					let [o, s] = Un(a, t.coordinates), l = 0, u = i.placement.kind === "ceiling" ? t.defaultCeilingHeightMeters - i.placement.dropMeters : i.placement.elevationMeters;
					try {
						let e = q(i.placement, t);
						l = e.rotationYRadians, u = e.position[1];
					} catch {}
					return /* @__PURE__ */ (0, $.jsxs)("mesh", {
						name: `validation-item-${r.id}`,
						position: [
							o,
							Math.max(.15, u + i.size[1] / 2),
							s
						],
						rotation: [
							0,
							l,
							0
						],
						renderOrder: 31,
						children: [/* @__PURE__ */ (0, $.jsx)("boxGeometry", { args: [
							i.size[0] + .12,
							i.size[1] + .12,
							i.size[2] + .12
						] }), /* @__PURE__ */ (0, $.jsx)(c, {
							color: "#d94738",
							transparent: !0,
							opacity: .68,
							wireframe: !0,
							depthTest: !1,
							depthWrite: !1
						})]
					}, `${wi(e)}:${r.kind}:${r.id}`);
				}
				return null;
			}),
			p.map(({ issue: e, target: t, edgeIndex: n, transform: r }) => /* @__PURE__ */ (0, $.jsxs)("mesh", {
				name: `validation-${t.kind}-${t.id}-edge-${n}`,
				position: [
					r.center[0],
					.06,
					r.center[1]
				],
				rotation: [
					0,
					r.rotationYRadians,
					0
				],
				renderOrder: 30,
				children: [/* @__PURE__ */ (0, $.jsx)("boxGeometry", { args: [
					r.length + .035,
					.055,
					.09
				] }), /* @__PURE__ */ (0, $.jsx)(c, {
					color: "#c53f32",
					transparent: !0,
					opacity: .84,
					side: 2,
					depthTest: !1,
					depthWrite: !1
				})]
			}, `${wi(e)}:${t.id}:${n}`)),
			o && m.map(({ point: e, issues: n }, r) => {
				let [a, o] = Un(e, t.coordinates), c = n[0], l = n.some((e) => wi(e) === i), d = n.length === 1 ? Ai(c) : `${n.length} issues here`;
				return /* @__PURE__ */ (0, $.jsx)(B, {
					position: [
						a,
						.55,
						o
					],
					center: !0,
					zIndexRange: [90, 70],
					wrapperClass: "construction-validation-overlay-label",
					style: { pointerEvents: "none" },
					children: /* @__PURE__ */ (0, $.jsxs)("div", {
						className: `construction-validation-marker ${l ? "is-active" : ""}`,
						role: "group",
						"aria-label": d,
						onPointerDown: (e) => e.stopPropagation(),
						onPointerUp: (e) => e.stopPropagation(),
						children: [/* @__PURE__ */ (0, $.jsxs)("button", {
							type: "button",
							className: "construction-validation-marker__details",
							"aria-label": `${d}. ${n.map((e) => e.message).join(" ")}`,
							title: n.map((e) => e.message).join("\n"),
							onClick: (e) => {
								e.stopPropagation(), s(c);
							},
							children: [/* @__PURE__ */ (0, $.jsx)("span", { children: r + 1 }), /* @__PURE__ */ (0, $.jsx)("strong", { children: d })]
						}), /* @__PURE__ */ (0, $.jsx)("button", {
							type: "button",
							className: "construction-validation-marker__dismiss",
							"aria-label": `Hide error label: ${d}`,
							title: "Hide this label. Use Locate in the issue list to show it again.",
							onClick: (e) => {
								e.stopPropagation(), u(n.map(wi));
							},
							children: /* @__PURE__ */ (0, $.jsx)("span", {
								"aria-hidden": "true",
								children: "×"
							})
						})]
					})
				}, `${a}:${o}`);
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/scene-item-dependencies.ts
var zi = (e, t, n) => e.flatMap((e) => {
	let r = e.placement;
	if (r.kind !== "wall") return [e];
	let i = t.walls.find((e) => e.id === r.wallId);
	if (i) {
		let a = i.to[0] - i.from[0], o = i.to[1] - i.from[1], s = Math.hypot(a, o), c = n.get(r.wallId), l = c ? c.to[0] - c.from[0] : a, u = c ? c.to[1] - c.from[1] : o, d = Math.hypot(l, u), f = s < d - 1e-8, p = r.offsetFromWallStartPlanUnits;
		if (f && c && s > 0 && d > 0) {
			let e = i.from[0] - c.from[0], t = i.from[1] - c.from[1];
			a * l + o * u > 0 && Math.abs(a * u - o * l) < 1e-8 && Math.abs(e * u - t * l) < 1e-8 && (p -= (e * l + t * u) / d);
		}
		let m = f ? e.size[0] / t.coordinates.metersPerPlanUnit / 2 : 0;
		return p - m < -1e-8 || p + m > s + 1e-8 ? [] : p === r.offsetFromWallStartPlanUnits ? [e] : [{
			...e,
			placement: {
				...r,
				offsetFromWallStartPlanUnits: p
			}
		}];
	}
	let a = n.get(r.wallId);
	if (!a) return [];
	let o = q(r, {
		...t,
		walls: [...t.walls.filter((e) => e.id !== r.wallId), a]
	}), s = K({
		x: o.position[0],
		z: o.position[2]
	}, t.coordinates);
	return [{
		...e,
		placement: {
			kind: "absolute",
			at: s,
			elevationMeters: o.position[1],
			rotationYRadians: o.rotationYRadians
		}
	}];
}), Bi = (e, t, n, r) => zi(e.map((e) => {
	let t = e.placement;
	if (t.kind !== "wall") return e;
	let n = ie(r, t.wallId, t.offsetFromWallStartPlanUnits);
	return !n || n.wallId === t.wallId && n.offsetFromWallStartPlanUnits === t.offsetFromWallStartPlanUnits ? e : {
		...e,
		placement: {
			...t,
			wallId: n.wallId,
			offsetFromWallStartPlanUnits: n.offsetFromWallStartPlanUnits
		}
	};
}), t, n), Vi = (e, t) => {
	let n = [];
	return {
		items: e.map((e, r) => {
			let i = e.placement;
			if (i.kind !== "ceiling") return e;
			let a = t.rooms.filter((e) => ct(i.at, e.polygon));
			if (a.length === 0) return n.push({
				code: "editor.ceiling-support-missing",
				severity: "error",
				path: `sceneItems[${r}].placement`,
				message: `Ceiling item “${e.id}” is not inside a room after the floor-plan change. Move it into a room or restore its ceiling support.`
			}), e;
			if (a.length > 1) return n.push({
				code: "editor.ceiling-support-ambiguous",
				severity: "error",
				path: `sceneItems[${r}].placement`,
				message: `Ceiling item “${e.id}” belongs to more than one room after the floor-plan change. Move it away from the shared boundary.`
			}), e;
			let o = a[0].id;
			return i.roomId === o ? e : {
				...e,
				placement: {
					...i,
					roomId: o
				}
			};
		}),
		issues: n
	};
};
//#endregion
//#region apps/web/src/editor-preview/construct/incomplete-floor-preview.ts
function Hi(e, t) {
	return {
		...t,
		id: e.floorId,
		name: e.floorName,
		floorToFloorHeightMeters: e.floorToFloorHeightMeters ?? t.floorToFloorHeightMeters,
		coordinates: e.coordinates,
		defaultWallHeightMeters: e.defaultWallHeightMeters,
		defaultCeilingHeightMeters: e.defaultCeilingHeightMeters,
		footprint: [],
		footprintRegions: [],
		rooms: [],
		ceilings: [],
		walls: e.walls.map((t) => ({
			...t,
			classification: "exterior",
			thicknessMeters: t.thicknessMeters ?? e.exteriorWallThicknessMeters
		})),
		wallJunctions: e.junctions,
		openings: e.openings.map(({ offsetPlanUnits: e, ...t }) => ({
			...t,
			offsetFromWallStartPlanUnits: e
		})),
		...e.hedges ? { hedges: e.hedges } : {},
		...e.pools ? { pools: e.pools } : {},
		...e.groundZones ? { groundZones: e.groundZones } : {}
	};
}
//#endregion
//#region apps/web/src/editor-preview/construct/opening-orientation-floor.ts
var Ui = (e) => {
	if (e.kind === "passage") return e;
	let { hingeSide: t, openingSide: n, ...r } = e;
	if (r.kind === "window") return r;
	let { slideDirection: i, ...a } = r;
	return a;
};
function Wi(e, t, n) {
	if ([
		"walls",
		"rooms",
		"junctions",
		"coordinates",
		"floorId",
		"floorName",
		"defaultWallHeightMeters",
		"defaultCeilingHeightMeters",
		"exteriorWallThicknessMeters",
		"interiorWallThicknessMeters"
	].some((n) => e[n] !== t[n]) || e.openings.length !== t.openings.length || e.openings.some((e, n) => e !== t.openings[n] && JSON.stringify(Ui(e)) !== JSON.stringify(Ui(t.openings[n])))) return null;
	let r = new Map(t.openings.filter((t, n) => t !== e.openings[n]).map((e) => [e.id, e])), i = e.pools === t.pools ? n : {
		...n,
		pools: t.pools
	};
	return e.hedges !== t.hedges && (i = {
		...i,
		hedges: t.hedges
	}), e.groundZones !== t.groundZones && (i = {
		...i,
		groundZones: t.groundZones
	}), r.size ? {
		...i,
		openings: n.openings.map((e) => {
			let t = r.get(e.id);
			if (!t || t.kind === "passage" || e.kind === "passage" || t.kind !== e.kind) return e;
			let n = { ...e };
			delete n.hingeSide, delete n.openingSide, n.kind === "door" && delete n.slideDirection;
			let i = t.openingSide === void 0 ? {} : { openingSide: t.openingSide };
			if (n.kind === "door" && t.kind === "door") {
				if (n.operation === "hinged" && t.operation === "hinged") return {
					...n,
					...i,
					...t.hingeSide === void 0 ? {} : { hingeSide: t.hingeSide }
				};
				if (n.operation === "sliding" && t.operation === "sliding") return {
					...n,
					...i,
					...t.slideDirection === void 0 ? {} : { slideDirection: t.slideDirection }
				};
				if (n.operation === "roll-up" && t.operation === "roll-up") return {
					...n,
					...i
				};
			}
			return n.kind === "window" && t.kind === "window" ? {
				...n,
				...i,
				...t.hingeSide === void 0 ? {} : { hingeSide: t.hingeSide }
			} : e;
		})
	} : i;
}
//#endregion
//#region apps/web/src/editor-preview/construct/construct-controller-reducer.ts
var Gi = (e) => Te({
	floorToFloorHeightMeters: e.floorToFloorHeightMeters,
	floorId: e.floorId,
	floorName: e.floorName,
	coordinates: e.coordinates,
	walls: e.walls,
	openings: e.openings,
	rooms: e.rooms,
	junctions: e.junctions,
	hedges: e.hedges,
	pools: e.pools,
	groundZones: e.groundZones,
	defaultWallHeightMeters: e.defaultWallHeightMeters,
	defaultCeilingHeightMeters: e.defaultCeilingHeightMeters,
	exteriorWallThicknessMeters: e.exteriorWallThicknessMeters,
	interiorWallThicknessMeters: e.interiorWallThicknessMeters
}), Ki = (e) => `${e.code}:${e.path}:${e.message}`, qi = (e, t) => {
	if (t.type === "replace-floor") return null;
	if (t.type === "move-wall-endpoint") {
		let n = e.present.walls.find((e) => e.id === t.wallId);
		return n ? {
			type: "move-endpoint",
			from: n[t.endpoint],
			to: t.point
		} : null;
	}
	if (t.type === "update-selected-opening" || t.type === "replace-selected-opening") {
		let n = e.present.selection, r = n?.kind === "opening" ? e.present.openings.find((e) => e.id === n.id) : void 0;
		if (!r) return null;
		let i = t.type === "replace-selected-opening" ? t.opening : {
			...r,
			...t.patch
		};
		if (i.id !== r.id || i.kind !== r.kind) return null;
		let a = se(i.offsetPlanUnits, u({
			draft: e.present,
			wallId: i.wallId,
			widthPlanUnits: i.widthPlanUnits,
			excludeOpeningId: i.id
		}));
		return a === void 0 ? null : {
			type: "update-opening",
			opening: {
				...i,
				offsetPlanUnits: a
			}
		};
	}
	return t;
}, Ji = (e, t) => {
	if (t.type === "replace-floor") return ze(Vt(t.floor));
	let n = qi(e, t);
	return n ? be(e, n) : e;
}, Yi = {
	points: [],
	future: [],
	preview: null,
	error: null
}, Xi = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[1]) <= 1e-7;
function Zi(e, t) {
	if (t.type === "cancel") return { state: Yi };
	if (t.type === "preview") return { state: {
		...e,
		preview: t.point
	} };
	if (t.type === "undo") return e.points.length ? { state: {
		points: e.points.slice(0, -1),
		future: [e.points.at(-1), ...e.future],
		preview: null,
		error: null
	} } : { state: e };
	if (t.type === "redo") return e.future.length ? { state: {
		points: [...e.points, e.future[0]],
		future: e.future.slice(1),
		preview: e.future[0],
		error: null
	} } : { state: e };
	let n = t.point;
	return !n.every(Number.isFinite) || e.points.length && Xi(n, e.points.at(-1)) ? { state: e } : e.points.length >= 3 && Xi(n, e.points[0]) ? Me(e.points) ? {
		state: Yi,
		completed: e.points
	} : { state: {
		...e,
		error: "The outline crosses itself or has no area. Undo a corner and try again."
	} } : e.points.some((e) => Xi(e, n)) ? { state: {
		...e,
		error: "Add at least three distinct corners, then return to the first corner to close the pool."
	} } : { state: {
		points: [...e.points, n],
		future: [],
		preview: n,
		error: null
	} };
}
function Qi(e) {
	let [t, n] = (0, Q.useState)(Yi), r = (0, Q.useRef)(t), i = (0, Q.useRef)(e);
	i.current = e;
	let a = (0, Q.useCallback)((e) => {
		let t = Zi(r.current, e);
		r.current = t.state, n(t.state), t.completed && i.current(t.completed);
	}, []);
	return {
		...t,
		active: t.points.length > 0 || t.future.length > 0,
		place: (0, Q.useCallback)((e) => a({
			type: "point",
			point: e
		}), [a]),
		previewPoint: (0, Q.useCallback)((e) => a({
			type: "preview",
			point: e
		}), [a]),
		undo: (0, Q.useCallback)(() => a({ type: "undo" }), [a]),
		redo: (0, Q.useCallback)(() => a({ type: "redo" }), [a]),
		cancel: (0, Q.useCallback)(() => a({ type: "cancel" }), [a])
	};
}
//#endregion
//#region apps/web/src/editor-preview/construct/wall-loop-closure.ts
var $i = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[1]) <= 1e-7, ea = (e, t) => e[0] * t[1] - e[1] * t[0], ta = (e, t) => {
	let n = [t.to[0] - t.from[0], t.to[1] - t.from[1]], r = [e[0] - t.from[0], e[1] - t.from[1]], i = n[0] ** 2 + n[1] ** 2;
	if (i <= 1e-14) return $i(e, t.from);
	let a = 1e-7 * Math.max(1, Math.sqrt(i));
	if (Math.abs(ea(n, r)) > a) return !1;
	let o = r[0] * n[0] + r[1] * n[1];
	return o >= -a && o <= i + a;
}, na = (e, t) => {
	let n = [e.to[0] - e.from[0], e.to[1] - e.from[1]], r = [t.to[0] - t.from[0], t.to[1] - t.from[1]], i = [t.from[0] - e.from[0], t.from[1] - e.from[1]], a = ea(n, r);
	if (Math.abs(a) <= 1e-10) return ta(e.from, t) || ta(e.to, t) || ta(t.from, e) || ta(t.to, e);
	let o = ea(i, r) / a, s = ea(i, n) / a;
	return o >= -1e-7 && o <= 1 + 1e-7 && s >= -1e-7 && s <= 1 + 1e-7;
}, ra = (e, t, n) => {
	if ($i(t, n)) return !1;
	let r = new Set(e.map((e, t) => ta(n, e) ? t : -1).filter((e) => e >= 0));
	if (r.size === 0) return !1;
	let i = e.map((e, n) => ta(t, e) ? n : -1).filter((e) => e >= 0), a = /* @__PURE__ */ new Set();
	for (; i.length > 0;) {
		let t = i.pop();
		if (!a.has(t)) {
			if (r.has(t)) return !0;
			a.add(t);
			for (let n = 0; n < e.length; n += 1) !a.has(n) && na(e[t], e[n]) && i.push(n);
		}
	}
	return !1;
}, ia = (e, t = e, n = "#c97370", r = "select") => {
	let [i, a] = (0, Q.useReducer)(Ji, e, (e) => ze({
		...Vt(e),
		tool: r
	})), [o] = (0, Q.useState)(() => new Set(Gi(Vt(t)).issues.map(Ki))), [s] = (0, Q.useState)(() => {
		let t = Gi(Vt(e));
		return {
			previewFloor: e,
			topologyIssues: t.issues.filter((e) => !o.has(Ki(e))),
			wallRuns: t.wallRuns
		};
	}), [c, l] = (0, Q.useState)(Ze), [d, f] = (0, Q.useState)(null), [m, h] = (0, Q.useState)({
		style: "clipped",
		heightMeters: 1.4,
		widthMeters: .65
	}), [g, _] = (0, Q.useState)(null), [v, y] = (0, Q.useState)(n), b = Qi((e) => a({
		type: "add-pool",
		polygon: e
	})), [x, S] = (0, Q.useState)(null), [C, w] = (0, Q.useState)(null), T = (0, Q.useRef)(null), E = i.present, D = (0, Q.useRef)(null), O = (0, Q.useRef)(E), k = (0, Q.useRef)(s.previewFloor), A = (0, Q.useRef)({
		draft: E,
		value: s
	}), j = (0, Q.useMemo)(() => {
		let e = (e) => (A.current = {
			draft: E,
			value: e
		}, e), t = D.current;
		if (t && (t.draft === null || t.draft === E)) {
			t.draft = E, k.current = t.floor;
			let n = Gi(E);
			return e({
				previewFloor: t.floor,
				topologyIssues: n.issues.filter((e) => !o.has(Ki(e))),
				wallRuns: n.wallRuns
			});
		}
		if (D.current = null, E === O.current) return e(s);
		let n = A.current, r = Wi(n.draft, E, n.value.previewFloor);
		if (r) return k.current = r, e({
			...n.value,
			previewFloor: r
		});
		let i = Gi(E);
		return i.floor && (k.current = i.floor), e({
			previewFloor: i.floor ?? (i.faces.length === 0 ? Hi(E, k.current) : k.current),
			topologyIssues: i.issues.filter((e) => !o.has(Ki(e))),
			wallRuns: i.wallRuns
		});
	}, [
		E.defaultCeilingHeightMeters,
		E.defaultWallHeightMeters,
		E.coordinates,
		E.exteriorWallThicknessMeters,
		E.floorId,
		E.floorToFloorHeightMeters,
		E.floorName,
		E.interiorWallThicknessMeters,
		E.junctions,
		E.openings,
		E.hedges,
		E.pools,
		E.groundZones,
		E.rooms,
		E.walls,
		o
	]), M = (0, Q.useCallback)((e) => {
		b.cancel(), T.current = null, _(null), S(null), w(null), a({
			type: "set-tool",
			tool: e
		});
	}, [b.cancel]), N = (0, Q.useCallback)((e) => {
		a({
			type: "select",
			selection: e
		});
	}, []), P = (0, Q.useCallback)((e) => {
		T.current = e, _(e), S(e), w(null);
	}, []), F = (0, Q.useCallback)((e) => {
		let t = T.current;
		if (!t) return;
		if (i.present.tool === "hedge") {
			a({
				type: "add-hedge",
				hedge: {
					from: t,
					to: e,
					...m
				}
			}), T.current = e, _(e), S(e), w(Math.atan2(e[1] - t[1], e[0] - t[0]));
			return;
		}
		let n = ra(i.present.walls, t, e);
		if (a({
			type: "add-wall",
			from: t,
			to: e,
			exteriorColor: v
		}), n) {
			a({
				type: "set-tool",
				tool: "select"
			}), T.current = null, _(null), S(null), w(null);
			return;
		}
		T.current = e, _(e), S(e), w(Math.atan2(e[1] - t[1], e[0] - t[0]));
	}, [
		v,
		i.present.walls,
		i.present.tool,
		m
	]), L = (0, Q.useCallback)(() => {
		T.current = null, _(null), S(null), w(null);
	}, []), R = (0, Q.useCallback)((e) => {
		let t = i.present.selection;
		if (t?.kind !== "wall") return;
		let n = i.present.walls.find((e) => e.id === t.id);
		if (!n) return;
		let r = (e === "door" ? c.widthMeters : e === "window" ? 1.2 : .9) / i.present.coordinates.metersPerPlanUnit, o = Math.hypot(n.to[0] - n.from[0], n.to[1] - n.from[1]), s = se(Math.max(0, (o - r) / 2), u({
			draft: i.present,
			wallId: n.id,
			widthPlanUnits: r
		}));
		if (s === void 0 || e === "door" && c.heightMeters > (n.heightMeters ?? i.present.defaultWallHeightMeters)) {
			f("The door does not fit on this wall.");
			return;
		}
		a({
			type: "add-opening",
			wallId: n.id,
			kind: e,
			doorConfiguration: c,
			offsetPlanUnits: s
		});
	}, [i.present, c]), z = (0, Q.useCallback)((e, t, n) => {
		let r = (e === "door" ? c.widthMeters : e === "window" ? 1.2 : .9) / i.present.coordinates.metersPerPlanUnit, o = u({
			draft: i.present,
			wallId: t,
			widthPlanUnits: r
		}).some((e) => n >= e.min && n <= e.max), s = i.present.walls.find((e) => e.id === t);
		if (!o || e === "door" && c.heightMeters > (s?.heightMeters ?? i.present.defaultWallHeightMeters)) {
			f("The door does not fit on this wall.");
			return;
		}
		f(null), a({
			type: "set-tool",
			tool: "select"
		}), a({
			type: "add-opening",
			wallId: t,
			kind: e,
			offsetPlanUnits: n,
			doorConfiguration: c
		});
	}, [i.present, c]), ee = (0, Q.useCallback)((e, t) => {
		let n = j.previewFloor.rooms.find((t) => t.id === e);
		if (!n) return;
		let r = i.present.rooms.find((e) => e.id === n.id);
		a({
			type: "update-room-metadata",
			roomId: n.id,
			anchor: Rt(n.polygon),
			changes: r ? t : {
				name: n.name,
				accent: n.accent,
				...n.floorFinish ? { floorFinish: n.floorFinish } : {},
				...n.floorZones ? { floorZones: [...n.floorZones] } : {},
				...t
			}
		});
	}, [i.present, j.previewFloor.rooms]), te = (0, Q.useCallback)((e, t, n) => {
		let r = j.previewFloor.rooms.find((t) => t.id === e);
		r && a({
			type: "update-room-metadata",
			roomId: e,
			anchor: Rt(r.polygon),
			changes: {
				floorFinish: t,
				...n ? { floorZones: [] } : {}
			}
		});
	}, [j.previewFloor.rooms]), ne = (0, Q.useCallback)((e, t, n) => {
		let r = j.previewFloor.rooms.find((t) => t.id === e);
		r && a({
			type: "add-floor-zone",
			room: {
				id: r.id,
				name: r.name,
				accent: r.accent,
				anchor: Rt(r.polygon)
			},
			polygon: t,
			finish: n
		});
	}, [j.previewFloor.rooms]), re = (0, Q.useCallback)((e) => {
		let t = i.present.selection;
		if (t?.kind !== "room") return;
		let n = j.previewFloor.rooms.find((e) => e.id === t.id);
		if (!n) return;
		let r = i.present.rooms.filter((e) => ct(e.anchor, n.polygon)).map((e) => e.id);
		r.length < 2 || !r.includes(e) || a({
			type: "resolve-room-merge",
			survivorId: e,
			mergedRoomIds: r,
			anchor: Rt(n.polygon)
		});
	}, [i.present, j.previewFloor.rooms]), B = (0, Q.useMemo)(() => I(E.selection), [E.selection]), ie = (0, Q.useMemo)(() => Yr({
		selection: E.selection,
		draft: E,
		previewFloor: j.previewFloor,
		wallRuns: j.wallRuns
	}), [
		E,
		j.previewFloor,
		j.wallRuns
	]);
	return {
		history: i,
		doorConfiguration: c,
		setDoorConfiguration: l,
		openingError: d,
		hedgeSettings: m,
		setHedgeSettings: h,
		poolDrawing: b,
		selectPool: (e) => N({
			kind: "pool",
			id: e
		}),
		selectFloorZone: (e) => N({
			kind: "floor-zone",
			id: e
		}),
		updatePool: (e, t) => a({
			type: "update-pool",
			poolId: e,
			polygon: t
		}),
		paintRoomFloor: te,
		addFloorZone: ne,
		addGroundZone: (e, t) => a({
			type: "add-ground-zone",
			polygon: e,
			finish: t
		}),
		updateFloorZone: (e, t) => a({
			type: "update-floor-zone",
			zoneId: e,
			changes: t
		}),
		...j,
		isSettling: !1,
		draft: E,
		selection: E.selection,
		selectionTargets: B,
		deletionTargets: ie,
		tool: E.tool,
		drawStart: g,
		drawPreview: x,
		drawAngleReferenceRadians: C,
		exteriorWallColor: v,
		defaultExteriorWallColor: n,
		canUndo: i.past.length > 0,
		canRedo: i.future.length > 0,
		dispatch: a,
		setTool: M,
		selectWall: (e) => N({
			kind: "wall",
			id: e
		}),
		selectOpening: (e) => N({
			kind: "opening",
			id: e
		}),
		selectRoom: (e) => N({
			kind: "room",
			id: e
		}),
		selectMany: (e) => N(p(e)),
		clearSelection: () => N(null),
		setExteriorWallColor: y,
		updateWallEndpoint: (e, t, n) => a({
			type: "move-wall-endpoint",
			wallId: e,
			endpoint: t,
			point: n
		}),
		updateSelectedWallMetadata: (e) => {
			let t = i.present.selection;
			t?.kind === "wall" && a({
				type: "update-wall-metadata",
				wallId: t.id,
				changes: e
			});
		},
		updateFloorSettings: (e) => a({
			type: "update-floor-settings",
			settings: e
		}),
		updateRoom: ee,
		updateSelectedRoom: (e) => {
			i.present.selection?.kind === "room" && ee(i.present.selection.id, e);
		},
		resolveRoomMerge: re,
		translateWall: (e, t) => a({
			type: "translate-wall",
			wallId: e,
			delta: t
		}),
		beginWall: P,
		previewWall: S,
		addWall: F,
		cancelWall: L,
		addOpening: R,
		placeOpening: z,
		updateSelectedOpening: (e) => a({
			type: "update-selected-opening",
			patch: e
		}),
		replaceSelectedOpening: (e) => {
			let t = E.walls.find((t) => t.id === e.wallId);
			if (!u({
				draft: E,
				wallId: e.wallId,
				widthPlanUnits: e.widthPlanUnits,
				excludeOpeningId: e.id
			}).some(({ min: t, max: n }) => e.offsetPlanUnits >= t && e.offsetPlanUnits <= n) || !t || e.openingHeightMeters + e.sillHeightMeters > (t.heightMeters ?? E.defaultWallHeightMeters)) {
				f("This door does not fit here. Choose a smaller size or another wall position.");
				return;
			}
			f(null), a({
				type: "replace-selected-opening",
				opening: e
			});
		},
		resizeSelectedOpening: (e, t) => a({
			type: "update-selected-opening",
			patch: {
				offsetPlanUnits: e,
				widthPlanUnits: t
			}
		}),
		moveOpening: (e, t, n) => {
			let r = i.present.openings.find((t) => t.id === e);
			if (!r) return;
			let o = se(n, u({
				draft: i.present,
				wallId: t,
				widthPlanUnits: r.widthPlanUnits,
				excludeOpeningId: e
			}));
			o !== void 0 && a({
				type: "move-opening",
				openingId: e,
				wallId: t,
				offsetPlanUnits: o
			});
		},
		canDuplicateOpening: (e) => Ft(i.present, e) !== void 0,
		duplicateOpening: (e) => Ft(i.present, e) !== void 0 && (a({
			type: "duplicate-opening",
			openingId: e
		}), !0),
		deleteSelected: () => a({
			type: "delete-elements",
			targets: ie
		}),
		undo: () => a({ type: "undo" }),
		redo: () => a({ type: "redo" }),
		replaceFloor: (e) => {
			L(), b.cancel(), D.current = {
				floor: e,
				draft: null
			}, a({
				type: "replace-floor",
				floor: e
			});
		}
	};
}, aa = (e) => {
	let [t, n] = (0, Q.useReducer)(xr, void 0, vr);
	return {
		state: t,
		phase: br(t),
		measurement: (0, Q.useMemo)(() => Tr(t, e), [e, t]),
		place: (0, Q.useCallback)((e) => n({
			type: "place",
			point: e
		}), []),
		preview: (0, Q.useCallback)((e) => n({
			type: "preview",
			point: e
		}), []),
		cancel: (0, Q.useCallback)(() => n({ type: "cancel" }), []),
		reset: (0, Q.useCallback)(() => n({ type: "reset" }), [])
	};
};
//#endregion
//#region apps/web/src/editor-preview/furnish/placement/wall-room-inset.ts
function oa(e, t) {
	let n = (e) => {
		let { position: n } = q(e, t), r = K({
			x: n[0],
			z: n[2]
		}, t.coordinates);
		return t.rooms.some((e) => ct(r, e.polygon));
	};
	if (n(e)) return e;
	for (let t = .005; t <= .05; t += .005) {
		let r = {
			...e,
			depthOffsetMeters: e.depthOffsetMeters + t
		};
		if (n(r)) return r;
	}
	return e;
}
//#endregion
//#region apps/web/src/editor-preview/furnish/placement/placement-candidate.ts
var sa = (e) => ({
	placement: null,
	error: e
});
function ca(e, t, n) {
	let r = e.definition, i = r.placementEnvironment === "outdoor", a = t.coordinates.metersPerPlanUnit;
	if (!n.at.every(Number.isFinite) || !(a > 0)) return sa("Enter a valid position.");
	let o = (e, r) => n.raw ? e : t.coordinates.origin[r] + Math.round((e - t.coordinates.origin[r]) * a * 10) / (10 * a), s = [o(n.at[0], 0), o(n.at[1], 1)], c = t.walls.flatMap((e) => {
		let t = e.to[0] - e.from[0], n = e.to[1] - e.from[1], r = Math.hypot(t, n);
		if (r <= 0) return [];
		let i = ((s[0] - e.from[0]) * t + (s[1] - e.from[1]) * n) / r, o = Math.max(0, Math.min(r, i)), c = [e.from[0] + t * o / r, e.from[1] + n * o / r], l = (s[0] - c[0]) * -n + (s[1] - c[1]) * t;
		return [{
			wall: e,
			length: r,
			offset: o,
			distance: Math.hypot(s[0] - c[0], s[1] - c[1]) * a,
			face: l < 0 ? "left" : "right"
		}];
	}).sort((e, t) => e.distance - t.distance), l = n.wallId ? c.find((e) => e.wall.id === n.wallId) : c[0];
	if (i && n.kind && n.kind !== "absolute") return sa("Outdoor items use ground placement.");
	let u = i ? "absolute" : n.kind ?? (n.wallId || !n.raw && l && l.distance <= .55 ? "wall" : r.preferredPlacement), d;
	if (u === "wall") {
		if (!l || !n.wallId && l.distance > .55) return sa("Choose a wall to place this item.");
		let e = Math.max(Math.abs(r.bounds.min[0]), Math.abs(r.bounds.max[0])) / a, i = n.offset ?? Math.max(e, Math.min(l.length - e, l.offset));
		if (!Number.isFinite(i) || i < e || i + e > l.length) return sa("This item needs more space along the wall.");
		let o = l.wall.heightMeters ?? t.defaultWallHeightMeters, s = Math.max(0, -r.bounds.min[1]), c = o - Math.max(0, r.bounds.max[1]), f = n.elevation ?? Math.max(s, Math.min(c, r.defaultSize[1] > 1.5 ? s : 1.25));
		if (!Number.isFinite(f) || f < s || f > c) return sa("The item must fit between the floor and wall top.");
		d = {
			kind: u,
			wallId: l.wall.id,
			face: n.face ?? l.face,
			offsetFromWallStartPlanUnits: i,
			elevationMeters: f,
			depthOffsetMeters: Math.max(0, -r.bounds.min[2]) + .003,
			rotationOffsetRadians: 0
		};
	} else {
		let e = t.rooms.filter((e) => ct(s, e.polygon));
		if (i) {
			if (!V(s, t)) return sa("Choose a position outside the building.");
		} else if (u === "ceiling" && e.length !== 1) return sa("Choose a position inside one room.");
		if (u === "ceiling") {
			let i = t.ceilings?.find((t) => t.roomIds.includes(e[0].id)), a = i?.kind === "flat" ? i.heightMeters : t.defaultCeilingHeightMeters, o = n.drop ?? Math.max(0, r.bounds.max[1]) + .003;
			if (!Number.isFinite(o) || o < Math.max(0, r.bounds.max[1]) || o > a || a - o + r.bounds.min[1] < 0) return sa("The item must fit below the ceiling and above the floor.");
			d = {
				kind: u,
				roomId: e[0].id,
				at: s,
				dropMeters: o,
				rotationYRadians: 0
			};
		} else {
			let e = n.elevation ?? Math.max(0, -r.bounds.min[1]) + .001;
			if (!Number.isFinite(e) || e < Math.max(0, -r.bounds.min[1])) return sa("The item must stay above the floor.");
			d = {
				kind: u,
				at: s,
				elevationMeters: e,
				rotationYRadians: 0
			};
		}
	}
	let f = (e) => {
		let n = q(e, t), r = [n.position[0] / a + t.coordinates.origin[0], n.position[2] / a + t.coordinates.origin[1]];
		return t.rooms.filter((e) => ct(r, e.polygon)).length;
	};
	if (d.kind === "wall" && (d = oa(d, t)), i) {
		if (d.kind !== "absolute" || !V(d.at, t)) return sa("Choose a position outside the building.");
	} else if (f(d) > 1) return sa("Choose a position belonging to at most one room.");
	return {
		placement: d,
		error: null
	};
}
//#endregion
//#region apps/web/src/editor-preview/furnish/placement/window-placement.ts
function la(e, t, n, r) {
	let i = e.windowFit;
	if (!i) return [];
	let a = t.coordinates.metersPerPlanUnit, o = [];
	for (let s of t.openings) {
		if (s.kind !== "window") continue;
		let c = r ?? [
			s.widthPlanUnits * a / i.openingWidthRatio,
			s.openingHeightMeters / i.openingHeightRatio,
			e.defaultSize[2]
		], l = c.map((t, n) => t / e.defaultSize[n]), u = {
			...e,
			defaultSize: c,
			bounds: {
				min: e.bounds.min.map((e, t) => e * l[t]),
				max: e.bounds.max.map((e, t) => e * l[t])
			}
		}, d = s.sillHeightMeters + s.openingHeightMeters - c[1] * i.openingHeightRatio;
		for (let e of ["left", "right"]) {
			let r = ca({ definition: u }, t, {
				at: n,
				kind: "wall",
				wallId: s.wallId,
				face: e,
				raw: !0,
				offset: s.offsetFromWallStartPlanUnits + s.widthPlanUnits / 2,
				elevation: Math.abs(d) < 1e-10 ? 0 : d
			});
			if (r.placement?.kind !== "wall") continue;
			let l = {
				...r.placement,
				depthOffsetMeters: Math.max(r.placement.depthOffsetMeters, i.depthOffsetMeters)
			}, f = q(l, t), p = [f.position[0] / a + t.coordinates.origin[0], f.position[2] / a + t.coordinates.origin[1]], m = t.rooms.find((e) => ct(p, e.polygon))?.name ?? "Window";
			o.push({
				openingId: s.id,
				roomName: m,
				placement: l,
				size: c,
				distanceMeters: Math.hypot(p[0] - n[0], p[1] - n[1]) * a
			});
		}
	}
	return o.sort((e, t) => e.distanceMeters - t.distanceMeters);
}
//#endregion
//#region apps/web/src/editor-preview/furnish/placement/wall-drag-placement.ts
var ua = 1e-7, da = (e, t) => e[0] * t[0] + e[1] * t[1], fa = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[1]) <= ua, pa = (e, t, n) => {
	let r = t.to[0] - t.from[0], i = t.to[1] - t.from[1], a = r * r + i * i;
	if (a <= ua * ua) return null;
	let o = Math.sqrt(a), s = Math.max(0, Math.min(o, ((e[0] - t.from[0]) * r + (e[1] - t.from[1]) * i) / o)), c = s / o, l = [t.from[0] + r * c, t.from[1] + i * c], u = [r / o, i / o];
	return {
		wall: t,
		lengthPlanUnits: o,
		projected: l,
		offsetPlanUnits: s,
		distanceMeters: Math.hypot(e[0] - l[0], e[1] - l[1]) * n,
		tangent: u,
		rightNormal: [-u[1], u[0]]
	};
}, ma = (e, t) => da([e[0] - t.projected[0], e[1] - t.projected[1]], t.rightNormal) < 0 ? "left" : "right", ha = (e, t) => t === "right" ? e.rightNormal : [-e.rightNormal[0], -e.rightNormal[1]], ga = (e, t, n) => {
	let r = fa(e.wall.from, t) ? e.wall.to : fa(e.wall.to, t) ? e.wall.from : null;
	if (!r) return null;
	let i = r[0] - t[0], a = r[1] - t[1], o = Math.hypot(i, a);
	return o <= ua ? null : {
		direction: [i / o, a / o],
		lengthMeters: o * n
	};
}, _a = (e, t) => ({
	minX: t.bounds.min[0] * e.size[0] / t.defaultSize[0],
	maxX: t.bounds.max[0] * e.size[0] / t.defaultSize[0],
	minZ: t.bounds.min[2] * e.size[2] / t.defaultSize[2],
	maxZ: t.bounds.max[2] * e.size[2] / t.defaultSize[2]
}), va = (e, t, n, r) => {
	let i = q(e, r), a = _a(t, n), o = Math.cos(i.rotationYRadians), s = Math.sin(i.rotationYRadians);
	return [a.minX, a.maxX].flatMap((e) => [a.minZ, a.maxZ].map((t) => [i.position[0] + e * o + t * s, i.position[2] - e * s + t * o]));
}, ya = (e, t, n, r, i) => {
	let a = ma(t, e), o = n.placement.kind === "wall" && n.placement.wallId === e.wall.id && n.placement.face === a, s = _a(n, r);
	return oa({
		kind: "wall",
		wallId: e.wall.id,
		face: a,
		offsetFromWallStartPlanUnits: Number(e.offsetPlanUnits.toFixed(4)),
		elevationMeters: q(n.placement, i).position[1],
		depthOffsetMeters: o ? n.placement.kind === "wall" ? n.placement.depthOffsetMeters : Math.max(0, -s.minZ) : Math.max(r.windowFit?.depthOffsetMeters ?? 0, -s.minZ),
		rotationOffsetRadians: o && n.placement.kind === "wall" ? n.placement.rotationOffsetRadians : 0
	}, i);
}, ba = (e, t, n, r, i) => {
	let a = e.map((e) => da([e[0] - t[0], e[1] - t[1]], n)), o = Math.min(...a), s = e.filter((e, t) => a[t] <= o + 1e-4).map((e) => da([e[0] - r[0], e[1] - r[1]], i.direction));
	return Math.min(...s) >= -1e-7 && Math.max(...s) <= i.lengthMeters + ua;
}, xa = (e, t) => {
	let { position: n } = q(e, t), r = t.coordinates.metersPerPlanUnit, i = [n[0] / r + t.coordinates.origin[0], n[2] / r + t.coordinates.origin[1]];
	return t.rooms.filter((e) => ct(i, e.polygon)).length;
}, Sa = ({ rawAt: e, item: t, definition: n, floor: r, primary: i, candidatesByWallId: a, cornerSnapDistanceMeters: o }) => {
	let s = r.coordinates.metersPerPlanUnit, c = ya(i, e, t, n, r), l = q(c, r), u = va(c, t, n, r);
	return r.wallJunctions.flatMap((e) => {
		if (e.wallIds.length !== 2 || !e.wallIds.includes(i.wall.id)) return [];
		let d = e.wallIds.find((e) => e !== i.wall.id), f = d ? a.get(d) : void 0;
		if (!f) return [];
		let p = ga(i, e.at, s), m = ga(f, e.at, s);
		if (!p || !m) return [];
		let h = p.direction[0] * m.direction[1] - p.direction[1] * m.direction[0];
		if (Math.abs(h) <= 1e-4) return [];
		let g = W(e.at, r.coordinates), _ = ha(f, da([l.position[0] - g[0], l.position[2] - g[1]], f.rightNormal) < 0 ? "left" : "right"), v = [g[0] + _[0] * f.wall.thicknessMeters / 2, g[1] + _[1] * f.wall.thicknessMeters / 2], y = u.map((e) => da([e[0] - v[0], e[1] - v[1]], _)), b = Math.min(...y), x = Math.max(...y), S = b > 0 ? b : x < 0 ? -x : 0;
		if (S > o + ua) return [];
		let C = da(i.tangent, _);
		if (Math.abs(C) <= ua) return [];
		let w = -b / C, T = c.offsetFromWallStartPlanUnits + w / s;
		if (T < -1e-7 || T > i.lengthPlanUnits + ua) return [];
		let E = {
			...c,
			offsetFromWallStartPlanUnits: Number(T.toFixed(4))
		}, D = va(E, t, n, r), O = D.map((e) => da([e[0] - v[0], e[1] - v[1]], _)), k = ha(i, E.face), A = [g[0] + k[0] * i.wall.thicknessMeters / 2, g[1] + k[1] * i.wall.thicknessMeters / 2];
		return Math.min(...O) < -1e-4 || !ba(D, A, k, g, p) || !ba(D, v, _, g, m) || xa(E, r) !== 1 ? [] : [{
			placement: E,
			gapMeters: S,
			adjustmentMeters: Math.abs(w),
			junctionId: e.id
		}];
	}).sort((e, t) => e.gapMeters - t.gapMeters || e.adjustmentMeters - t.adjustmentMeters || e.junctionId.localeCompare(t.junctionId))[0] ?? null;
}, Ca = ({ rawAt: e, item: t, definition: n, floor: r, wallSnapDistanceMeters: i = .55, cornerSnapDistanceMeters: a = .2 }) => {
	let o = r.walls.flatMap((t) => {
		let n = pa(e, t, r.coordinates.metersPerPlanUnit);
		return n ? [n] : [];
	}).sort((e, t) => e.distanceMeters - t.distanceMeters || e.wall.id.localeCompare(t.wall.id)), s = o[0];
	if (!s || s.distanceMeters > i) return null;
	let c = t.placement.kind === "wall" ? t.placement.wallId : null, l = [c ? o.find((e) => e.wall.id === c && e.distanceMeters <= i) : void 0, s].filter((e, t, n) => e !== void 0 && n.findIndex((t) => t?.wall.id === e.wall.id) === t), u = new Map(o.map((e) => [e.wall.id, e]));
	for (let i of l) {
		let o = Sa({
			rawAt: e,
			item: t,
			definition: n,
			floor: r,
			primary: i,
			candidatesByWallId: u,
			cornerSnapDistanceMeters: a
		});
		if (o) return o.placement;
	}
	return ya(s, e, t, n, r);
}, wa = (e, t) => {
	let n = new Set(t);
	if (!n.has(e)) return e;
	let r = 2;
	for (; n.has(`${e}-${r}`);) r += 1;
	return `${e}-${r}`;
}, Ta = (e, t) => {
	let n = e.placement, r = .25 / (t?.coordinates.metersPerPlanUnit ?? 1);
	if (n.kind === "wall") {
		let e = t?.walls.find((e) => e.id === n.wallId);
		if (!e) return { ...n };
		let i = Math.hypot(e.to[0] - e.from[0], e.to[1] - e.from[1]);
		for (let e of [r, -r]) {
			let t = n.offsetFromWallStartPlanUnits + e;
			if (t >= 0 && t <= i) return {
				...n,
				offsetFromWallStartPlanUnits: t
			};
		}
		return { ...n };
	}
	for (let [e, i] of [
		[r, r],
		[-r, r],
		[r, -r],
		[-r, -r]
	]) {
		let r = [n.at[0] + e, n.at[1] + i];
		if (t) {
			let e = t.rooms.filter((e) => ct(r, e.polygon));
			if (e.length !== 1 || n.kind === "ceiling" && e[0].id !== n.roomId) continue;
		}
		return {
			...n,
			at: r
		};
	}
	return {
		...n,
		at: [...n.at]
	};
}, Ea = (e, t, n, r = []) => {
	let i = /* @__PURE__ */ new Set([
		...t.map((e) => e.id),
		...r,
		...t.flatMap((e) => e.kind === "device" ? e.entitySlots.map((e) => e.id) : [])
	]), a = wa(`${e.id}-copy`, i);
	i.add(a);
	let o = Ta(e, n);
	if (n && o.kind === "wall") {
		let { position: t } = q(o, n), r = [t[0] / n.coordinates.metersPerPlanUnit + n.coordinates.origin[0], t[2] / n.coordinates.metersPerPlanUnit + n.coordinates.origin[1]];
		n.rooms.filter((e) => ct(r, e.polygon)).length !== 1 && (o = { ...e.placement });
	}
	let s = {
		...e,
		id: a,
		size: [...e.size],
		placement: o
	};
	return e.kind === "device" ? {
		...s,
		kind: "device",
		entitySlots: e.entitySlots.map((e) => {
			let t = wa(`${e.id}-copy`, i);
			return i.add(t), {
				...structuredClone(e),
				id: t
			};
		})
	} : {
		...s,
		kind: "furnishing"
	};
}, Da = .01, Oa = (e, t = .1) => Math.round(e / t) * t, ka = (e, t, n, r = .1) => {
	let i = n ? e.x : Oa(e.x, r), a = n ? e.z : Oa(e.z, r);
	return [i / t.metersPerPlanUnit + t.origin[0], a / t.metersPerPlanUnit + t.origin[1]];
}, Aa = ({ world: e, item: t, definition: n, floor: r, raw: i, wallSnapDistanceMeters: a = .55 }) => {
	let o = q(t.placement, r), s = ka(e, r.coordinates, i), c = ka(e, r.coordinates, !0), l = n.placementEnvironment === "outdoor";
	if (!i && !l && n.windowFit) {
		let e = la(n, r, c, t.size)[0];
		if (e && e.distanceMeters <= a) return e.placement;
	}
	if (!i && !l) {
		let e = Ca({
			rawAt: c,
			item: t,
			definition: n,
			floor: r,
			wallSnapDistanceMeters: a
		});
		if (e) return e;
	}
	let u = t.placement.kind === "ceiling" ? t.placement.roomId : null;
	return t.placement.kind === "ceiling" && r.rooms.some((e) => e.id === u && ct(s, e.polygon)) ? {
		...t.placement,
		at: s
	} : {
		kind: "absolute",
		at: s,
		elevationMeters: o.position[1],
		rotationYRadians: o.rotationYRadians
	};
}, ja = (e, t) => Number.isFinite(e) && e > 0 ? Math.max(Da, e) : t, Ma = (e, t, n) => {
	let r = t.map((t, n) => ja(t, e[n]));
	if (n.kind === "fixed") return [...e];
	if (n.kind === "planar") return [
		r[0],
		e[1],
		r[2]
	];
	if (n.kind === "axes") {
		let t = new Set(n.axes);
		return [
			t.has("width") ? r[0] : e[0],
			t.has("height") ? r[1] : e[1],
			t.has("depth") ? r[2] : e[2]
		];
	}
	if (n.kind === "custom") return n.normalize(e, r);
	let i = r.findIndex((t, n) => Math.abs(t / e[n] - 1) > 1e-9), a = i < 0 ? 1 : r[i] / e[i];
	return e.map((e) => e * a);
}, Na = (e, t, n = 0) => {
	let r = e.size.map((e, n) => e / t.defaultSize[n]), i = t.bounds.min.map((e, t) => e * r[t]), a = t.bounds.max.map((e, t) => e * r[t]);
	return {
		center: i.map((e, t) => (e + a[t]) / 2),
		size: i.map((e, t) => Math.max(.04, a[t] - e + n * 2))
	};
}, Pa = (e) => ({
	items: [...e],
	selectedId: null,
	past: [],
	future: [],
	transaction: null
}), Fa = (e) => ({
	items: e.items,
	selectedId: e.selectedId
}), Ia = (e, t) => ({
	...e,
	...t,
	past: e.transaction ? e.past : [...e.past, Fa(e)],
	future: e.transaction ? e.future : []
}), La = (e, t, n) => {
	let r = !1, i = e.items.map((e) => {
		if (e.id !== t) return e;
		let i = n(e);
		return JSON.stringify(i) === JSON.stringify(e) ? e : (r = !0, i);
	});
	return r ? Ia(e, {
		items: i,
		selectedId: t
	}) : e;
}, Ra = (e, t) => e.kind === "absolute" || e.kind === "ceiling" ? {
	...e,
	rotationYRadians: t
} : {
	...e,
	rotationOffsetRadians: t
}, za = (e, t, n) => n || {
	kind: "absolute",
	at: t,
	elevationMeters: 0,
	rotationYRadians: 0
}, Ba = (e, t) => {
	switch (t.type) {
		case "add-item": return Ia(e, {
			items: [...e.items, t.item],
			selectedId: t.item.id
		});
		case "replace-items": return {
			...Pa(t.items),
			selectedId: t.selectedId ?? null
		};
		case "select": return e.selectedId === t.id ? e : {
			...e,
			selectedId: t.id
		};
		case "begin-transaction": return e.transaction ? e : {
			...e,
			transaction: Fa(e)
		};
		case "commit-transaction": return e.transaction ? e.transaction.items === e.items && e.transaction.selectedId === e.selectedId ? {
			...e,
			transaction: null
		} : {
			...e,
			past: [...e.past, e.transaction],
			future: [],
			transaction: null
		} : e;
		case "cancel-transaction": return e.transaction ? {
			...e,
			...e.transaction,
			transaction: null
		} : e;
		case "update-variant": return tt(t.definition).some((e) => e.id === t.variant) ? La(e, t.id, (e) => ({
			...e,
			variant: t.variant
		})) : e;
		case "update-light-state": return La(e, t.id, (e) => e.kind === "device" ? {
			...e,
			lightState: t.lightState
		} : e);
		case "update-placements": {
			let n = e.items.map((e) => {
				let n = t.placements[e.id];
				return n && JSON.stringify(n) !== JSON.stringify(e.placement) ? {
					...e,
					placement: n
				} : e;
			});
			return n.some((t, n) => t !== e.items[n]) ? Ia(e, {
				items: n,
				selectedId: e.selectedId
			}) : e;
		}
		case "update-placement": return La(e, t.id, (e) => ({
			...e,
			placement: t.placement
		}));
		case "update-size": return La(e, t.id, (e) => ({
			...e,
			size: Ma(t.definition.defaultSize, t.size, t.definition.resizePolicy)
		}));
		case "rotate": return La(e, t.id, (e) => ({
			...e,
			placement: Ra(e.placement, t.rotationYRadians)
		}));
		case "duplicate": {
			let n = e.items.find((e) => e.id === t.id);
			if (!n) return e;
			let r = Ea(n, e.items, t.floor, t.reservedSlotIds);
			return Ia(e, {
				items: [...e.items, r],
				selectedId: r.id
			});
		}
		case "delete-items": {
			let n = new Set(t.ids), r = e.items.filter((e) => !n.has(e.id));
			return r.length === e.items.length ? e : Ia(e, {
				items: r,
				selectedId: e.selectedId && n.has(e.selectedId) ? null : e.selectedId
			});
		}
		case "delete": return e.items.findIndex((e) => e.id === t.id) < 0 ? e : Ia(e, {
			items: e.items.filter((e) => e.id !== t.id),
			selectedId: e.selectedId === t.id ? null : e.selectedId
		});
		case "add-preset": {
			let n = wa(t.modelId, e.items.map((e) => e.id)), r = {
				id: n,
				kind: "furnishing",
				floorId: t.floorId,
				modelId: t.modelId,
				placement: za(t.definition, t.planCenter, t.placement),
				size: [...t.definition.defaultSize]
			};
			return Ia(e, {
				items: [...e.items, r],
				selectedId: n
			});
		}
		case "undo": {
			let t = e.past.at(-1);
			return t ? {
				...e,
				...t,
				past: e.past.slice(0, -1),
				future: [Fa(e), ...e.future],
				transaction: null
			} : e;
		}
		case "redo": {
			let t = e.future[0];
			return t ? {
				...e,
				...t,
				past: [...e.past, Fa(e)],
				future: e.future.slice(1),
				transaction: null
			} : e;
		}
	}
}, Va = (e) => {
	let [t, n] = (0, Q.useReducer)(Ba, e, Pa), [r, i] = (0, Q.useState)([]), a = t.selectedId ? [t.selectedId] : r.filter((e) => t.items.some((t) => t.id === e)), o = (0, Q.useMemo)(() => t.items.find((e) => e.id === t.selectedId) ?? null, [t.items, t.selectedId]);
	return {
		...t,
		selectedIds: a,
		selectMany: (0, Q.useCallback)((e) => {
			i(e), n({
				type: "select",
				id: e.length === 1 ? e[0] : null
			});
		}, []),
		addItem: (0, Q.useCallback)((e) => n({
			type: "add-item",
			item: e
		}), []),
		selectedItem: o,
		canUndo: t.past.length > 0,
		canRedo: t.future.length > 0,
		select: (0, Q.useCallback)((e) => {
			i([]), n({
				type: "select",
				id: e
			});
		}, []),
		beginTransaction: (0, Q.useCallback)(() => n({ type: "begin-transaction" }), []),
		commitTransaction: (0, Q.useCallback)(() => n({ type: "commit-transaction" }), []),
		cancelTransaction: (0, Q.useCallback)(() => n({ type: "cancel-transaction" }), []),
		updateVariant: (0, Q.useCallback)((e, t, r) => n({
			type: "update-variant",
			id: e,
			variant: t,
			definition: r
		}), []),
		updateLightState: (0, Q.useCallback)((e, t) => n({
			type: "update-light-state",
			id: e,
			lightState: t
		}), []),
		updatePlacements: (0, Q.useCallback)((e) => n({
			type: "update-placements",
			placements: e
		}), []),
		updatePlacement: (0, Q.useCallback)((e, t) => n({
			type: "update-placement",
			id: e,
			placement: t
		}), []),
		updateSize: (0, Q.useCallback)((e, t, r) => n({
			type: "update-size",
			id: e,
			size: t,
			definition: r
		}), []),
		rotate: (0, Q.useCallback)((e, t) => n({
			type: "rotate",
			id: e,
			rotationYRadians: t
		}), []),
		duplicate: (0, Q.useCallback)((e, t, r) => n({
			type: "duplicate",
			id: e,
			floor: t,
			reservedSlotIds: r
		}), []),
		deleteItems: (0, Q.useCallback)((e) => n({
			type: "delete-items",
			ids: e
		}), []),
		deleteItem: (0, Q.useCallback)((e) => n({
			type: "delete",
			id: e
		}), []),
		addPreset: (0, Q.useCallback)((e, t, r, i, a) => n({
			type: "add-preset",
			floorId: e,
			modelId: t,
			definition: r,
			planCenter: i,
			placement: a
		}), []),
		undo: (0, Q.useCallback)(() => n({ type: "undo" }), []),
		redo: (0, Q.useCallback)(() => n({ type: "redo" }), []),
		replaceItems: (0, Q.useCallback)((e, t) => {
			i([]), n({
				type: "replace-items",
				items: e,
				selectedId: t
			});
		}, [])
	};
}, Ha = 8, Ua = (e) => !!((e.nativeEvent?.metaKey || e.nativeEvent?.ctrlKey) && !e.nativeEvent?.shiftKey && !e.nativeEvent?.altKey), Wa = (e) => !!e.nativeEvent?.shiftKey, Ga = (e) => e.nativeEvent.altKey, Ka = (e) => e.target;
function qa({ items: e, floor: n, furnishingModels: r, deviceModels: i, selectedId: a, selectedIds: o = a ? [a] : [], onSelectMany: s, selectionOnly: c = !1, onSelect: l, onMovePlacement: u, onMovePlacements: d, onDragStart: f, onDragEnd: p, onDragCancel: m, onDraggingChange: h }) {
	let g = Xe(), [_, y] = (0, Q.useState)(null), b = (0, Q.useRef)(null), x = (0, Q.useRef)(null), S = (0, Q.useRef)(new ht(new t(0, 1, 0), 0)), C = (0, Q.useRef)(new t()), w = (0, Q.useRef)({
		onDragEnd: p,
		onDragCancel: m,
		onDraggingChange: h
	});
	(0, Q.useLayoutEffect)(() => {
		w.current = {
			onDragEnd: p,
			onDragCancel: m,
			onDraggingChange: h
		};
	});
	let T = (0, Q.useMemo)(() => new v(1, 1, 1), []);
	(0, Q.useEffect)(() => () => T.dispose(), [T]);
	let E = (e, t) => (S.current.constant = -t, e.ray.intersectPlane(S.current, C.current)), D = (t) => {
		if (b.current) {
			let r = b.current;
			b.current = null, y(null), t || s?.(e.filter((e) => {
				let [t, , i] = q(e.placement, n).position;
				return t >= Math.min(r.from.x, r.to.x) && t <= Math.max(r.from.x, r.to.x) && i >= Math.min(r.from.z, r.to.z) && i <= Math.max(r.from.z, r.to.z);
			}).map((e) => e.id)), w.current.onDraggingChange?.(!1), r.target?.releasePointerCapture?.(r.pointerId);
		}
		if (!x.current) return;
		let { active: r, id: i, pointerId: a, target: o } = x.current;
		x.current = null, r && (w.current.onDraggingChange?.(!1), t ? w.current.onDragCancel?.(i) : w.current.onDragEnd?.(i)), o?.releasePointerCapture?.(a);
	}, O = (e) => {
		!x.current || e.pointerId !== x.current.pointerId || (e.stopPropagation(), D(!1));
	};
	return (0, Q.useEffect)(() => {
		if (typeof window > "u") return;
		let e = (e) => {
			e.key !== "Escape" || !x.current && !b.current || (e.preventDefault(), e.stopPropagation(), D(!0));
		}, t = () => D(!0);
		return g.events.addEventListener("keydown", e, !0), window.addEventListener("blur", t), () => {
			g.events.removeEventListener("keydown", e, !0), window.removeEventListener("blur", t), D(!0);
		};
	}, []), /* @__PURE__ */ (0, $.jsxs)("group", {
		name: "furnishing-edit-layer",
		children: [
			!c && s && /* @__PURE__ */ (0, $.jsxs)("mesh", {
				name: "arrange-marquee-surface",
				onClick: (e) => {
					e.stopPropagation(), !Ua(e) && !Wa(e) && s([]);
				},
				rotation: [
					-Math.PI / 2,
					0,
					0
				],
				onPointerDown: (e) => {
					if (e.button !== 0 || !Ua(e)) return;
					let t = E(e, 0);
					t && (e.stopPropagation(), b.current = {
						from: t.clone(),
						to: t.clone(),
						pointerId: e.pointerId,
						target: Ka(e)
					}, y(b.current), Ka(e)?.setPointerCapture?.(e.pointerId), h?.(!0));
				},
				onPointerMove: (e) => {
					let t = b.current;
					if (!t || t.pointerId !== e.pointerId) return;
					e.stopPropagation();
					let n = E(e, 0);
					n && (t.to = n.clone(), y({ ...t }));
				},
				onPointerUp: (e) => {
					b.current?.pointerId === e.pointerId && (e.stopPropagation(), D(!1));
				},
				onPointerCancel: () => D(!0),
				onLostPointerCapture: () => D(!0),
				children: [/* @__PURE__ */ (0, $.jsx)("planeGeometry", { args: [1e4, 1e4] }), /* @__PURE__ */ (0, $.jsx)(er, {
					visible: !1,
					transparent: !0,
					opacity: 0,
					depthWrite: !1,
					side: 2
				})]
			}),
			_ && /* @__PURE__ */ (0, $.jsxs)("mesh", {
				name: "arrange-marquee-preview",
				raycast: $n,
				rotation: [
					-Math.PI / 2,
					0,
					0
				],
				position: [
					(_.from.x + _.to.x) / 2,
					.02,
					(_.from.z + _.to.z) / 2
				],
				renderOrder: 40,
				children: [/* @__PURE__ */ (0, $.jsx)("planeGeometry", { args: [Math.abs(_.to.x - _.from.x), Math.abs(_.to.z - _.from.z)] }), /* @__PURE__ */ (0, $.jsx)(er, {
					color: "#6b896c",
					transparent: !0,
					opacity: .25,
					depthTest: !1,
					depthWrite: !1,
					side: 2
				})]
			}),
			e.map((a) => {
				let s = a.kind === "device" ? i[a.modelId] : r[a.modelId];
				if (!s) return null;
				let p = q(a.placement, n), m = Na(a, s, .035), g = o.includes(a.id);
				return /* @__PURE__ */ (0, $.jsx)("group", {
					name: `furnishing-edit-target-${a.id}`,
					position: p.position,
					rotation: [
						0,
						p.rotationYRadians,
						0
					],
					children: /* @__PURE__ */ (0, $.jsx)("mesh", {
						position: m.center,
						scale: m.size,
						geometry: T,
						onClick: (e) => {
							e.stopPropagation(), !Wa(e) && !Ua(e) && !g && l(a.id);
						},
						onPointerDown: (n) => {
							if (n.button !== 0 || Wa(n) || Ua(n) || x.current || c) return;
							n.stopPropagation(), !Wa(n) && !Ua(n) && !g && l(a.id);
							let r = E(n, p.position[1]);
							r && (x.current = {
								items: g ? e.filter((e) => o.includes(e.id)) : [a],
								origin: new t(...p.position),
								active: !1,
								id: a.id,
								elevation: p.position[1],
								offsetX: p.position[0] - r.x,
								offsetZ: p.position[2] - r.z,
								pointerId: n.pointerId,
								startClientX: n.nativeEvent.clientX,
								startClientY: n.nativeEvent.clientY,
								target: Ka(n)
							}, Ka(n)?.setPointerCapture?.(n.pointerId));
						},
						onPointerMove: (e) => {
							let t = x.current;
							if (!t || t.id !== a.id || t.pointerId !== e.pointerId) return;
							if (e.stopPropagation(), !t.active) {
								if (Math.hypot(e.nativeEvent.clientX - t.startClientX, e.nativeEvent.clientY - t.startClientY) < Ha) return;
								t.active = !0, h?.(!0), f?.(a.id);
							}
							let o = E(e, t.elevation);
							if (o) {
								if (t.items.length > 1) {
									let a = o.x + t.offsetX - t.origin.x, s = o.z + t.offsetZ - t.origin.z, c = Ga(e) ? a : Math.round(a * 10) / 10, l = Ga(e) ? s : Math.round(s * 10) / 10, u = {};
									for (let e of t.items) {
										let t = e.kind === "device" ? i[e.modelId] : r[e.modelId];
										if (!t) continue;
										let [a, , o] = q(e.placement, n).position;
										u[e.id] = Aa({
											world: {
												x: a + c,
												z: o + l
											},
											item: e,
											definition: t,
											floor: n,
											raw: !0
										});
									}
									d?.(u);
									return;
								}
								u(a.id, Aa({
									world: {
										x: o.x + t.offsetX,
										z: o.z + t.offsetZ
									},
									item: a,
									definition: s,
									floor: n,
									raw: Ga(e)
								}));
							}
						},
						onPointerUp: O,
						onPointerCancel: () => D(!0),
						onLostPointerCapture: () => D(!0),
						renderOrder: 20,
						children: /* @__PURE__ */ (0, $.jsx)(zt, {
							color: g ? "#6b896c" : "#ffffff",
							transparent: !0,
							visible: g,
							opacity: g ? .18 : .001,
							depthWrite: !1
						})
					})
				}, a.id);
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-preview/furnish/FurnishingProperties.tsx
var Ja = [
	"width",
	"height",
	"depth"
], Ya = ({ label: e, value: t, disabled: n, onChange: r }) => /* @__PURE__ */ (0, $.jsxs)("label", { children: [/* @__PURE__ */ (0, $.jsx)("span", { children: e }), /* @__PURE__ */ (0, $.jsx)("input", {
	type: "number",
	step: "0.01",
	value: Number(t.toFixed(4)),
	disabled: n,
	onChange: (e) => {
		let t = e.currentTarget.valueAsNumber;
		Number.isFinite(t) && r(t);
	}
})] }), Xa = (e) => e.kind === "wall" ? e.rotationOffsetRadians : e.rotationYRadians;
function Za({ selected: e, definition: t, onPlacementChange: n, onSizeChange: r, onLightStateChange: i, onVariantChange: a, onClose: o, floor: s, onWindowFit: c }) {
	let l = (t) => n(e.id, {
		...e.placement,
		...t
	}), u = (n, i) => {
		let a = [...e.size];
		a[n] = i, r(e.id, a, t);
	}, d = s && t.windowFit ? la(t, s, s.coordinates.origin) : [];
	return /* @__PURE__ */ (0, $.jsxs)(Sn, {
		label: e.kind === "device" ? "Selected device" : "Selected furnishing",
		title: t.label,
		subtitle: t.category,
		onClose: o,
		children: [
			tt(t).length > 1 && a && /* @__PURE__ */ (0, $.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, $.jsx)("legend", { children: "Appearance" }), /* @__PURE__ */ (0, $.jsxs)("label", { children: [/* @__PURE__ */ (0, $.jsx)("span", { children: "Variant" }), /* @__PURE__ */ (0, $.jsx)("select", {
				value: Ve(t, e.variant).id,
				onChange: (n) => a(e.id, n.currentTarget.value, t),
				children: tt(t).map((e) => /* @__PURE__ */ (0, $.jsx)("option", {
					value: e.id,
					children: e.label
				}, e.id))
			})] })] }),
			t.windowFit && c && /* @__PURE__ */ (0, $.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, $.jsx)("legend", { children: "Window" }), /* @__PURE__ */ (0, $.jsxs)("label", { children: [/* @__PURE__ */ (0, $.jsx)("span", { children: "Fit to window" }), /* @__PURE__ */ (0, $.jsxs)("select", {
				value: "",
				disabled: d.length === 0,
				onChange: (n) => {
					let r = d[Number(n.currentTarget.value)];
					r && c(e.id, r.placement, r.size, t);
				},
				children: [/* @__PURE__ */ (0, $.jsx)("option", {
					value: "",
					children: d.length ? "Choose a window…" : "No suitable window"
				}), d.map((e, t) => /* @__PURE__ */ (0, $.jsxs)("option", {
					value: t,
					children: [
						e.roomName,
						" · ",
						e.openingId
					]
				}, `${e.openingId}-${t}`))]
			})] })] }),
			e.placement.kind === "absolute" && /* @__PURE__ */ (0, $.jsxs)("fieldset", { children: [
				/* @__PURE__ */ (0, $.jsx)("legend", { children: "Position" }),
				/* @__PURE__ */ (0, $.jsx)(Ya, {
					label: "X",
					value: e.placement.at[0],
					onChange: (t) => l({ at: [t, e.placement.kind === "absolute" ? e.placement.at[1] : 0] })
				}),
				/* @__PURE__ */ (0, $.jsx)(Ya, {
					label: "Z",
					value: e.placement.at[1],
					onChange: (t) => l({ at: [e.placement.kind === "absolute" ? e.placement.at[0] : 0, t] })
				}),
				/* @__PURE__ */ (0, $.jsx)(Ya, {
					label: "Elevation",
					value: e.placement.elevationMeters,
					onChange: (e) => l({ elevationMeters: e })
				})
			] }),
			e.placement.kind === "wall" && /* @__PURE__ */ (0, $.jsxs)("fieldset", { children: [
				/* @__PURE__ */ (0, $.jsxs)("legend", { children: [
					"Wall support · ",
					e.placement.wallId,
					" · ",
					e.placement.face
				] }),
				/* @__PURE__ */ (0, $.jsx)(Ya, {
					label: "Offset",
					value: e.placement.offsetFromWallStartPlanUnits,
					onChange: (e) => l({ offsetFromWallStartPlanUnits: e })
				}),
				/* @__PURE__ */ (0, $.jsx)(Ya, {
					label: "Elevation",
					value: e.placement.elevationMeters,
					onChange: (e) => l({ elevationMeters: e })
				}),
				/* @__PURE__ */ (0, $.jsx)(Ya, {
					label: "Depth offset",
					value: e.placement.depthOffsetMeters,
					onChange: (e) => l({ depthOffsetMeters: e })
				})
			] }),
			e.placement.kind === "ceiling" && /* @__PURE__ */ (0, $.jsxs)("fieldset", { children: [
				/* @__PURE__ */ (0, $.jsxs)("legend", { children: ["Ceiling support · ", e.placement.roomId] }),
				/* @__PURE__ */ (0, $.jsx)(Ya, {
					label: "X",
					value: e.placement.at[0],
					onChange: (t) => l({ at: [t, e.placement.kind === "ceiling" ? e.placement.at[1] : 0] })
				}),
				/* @__PURE__ */ (0, $.jsx)(Ya, {
					label: "Z",
					value: e.placement.at[1],
					onChange: (t) => l({ at: [e.placement.kind === "ceiling" ? e.placement.at[0] : 0, t] })
				}),
				/* @__PURE__ */ (0, $.jsx)(Ya, {
					label: "Drop",
					value: e.placement.dropMeters,
					onChange: (e) => l({ dropMeters: e })
				})
			] }),
			e.kind === "device" && Ve(t, e.variant).sceneLight !== !1 && e.entitySlots.some((e) => e.deviceRole === "primary" && e.compatibleDomains.includes("light")) && i && /* @__PURE__ */ (0, $.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, $.jsx)("legend", { children: "Light" }), /* @__PURE__ */ (0, $.jsxs)("label", { children: [/* @__PURE__ */ (0, $.jsx)("span", { children: "State" }), /* @__PURE__ */ (0, $.jsxs)("select", {
				value: e.lightState ?? "connected",
				onChange: (t) => i(e.id, t.currentTarget.value),
				children: [
					/* @__PURE__ */ (0, $.jsx)("option", {
						value: "always-off",
						children: "Always off"
					}),
					/* @__PURE__ */ (0, $.jsx)("option", {
						value: "always-on",
						children: "Always on"
					}),
					/* @__PURE__ */ (0, $.jsx)("option", {
						value: "night-only",
						children: "Night only"
					}),
					/* @__PURE__ */ (0, $.jsx)("option", {
						value: "connected",
						children: "Connected"
					})
				]
			})] })] }),
			/* @__PURE__ */ (0, $.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, $.jsx)("legend", { children: "Rotation" }), /* @__PURE__ */ (0, $.jsx)(Ya, {
				label: "Degrees",
				value: Xa(e.placement) * 180 / Math.PI,
				onChange: (t) => {
					let n = t * Math.PI / 180;
					l(e.placement.kind === "wall" ? { rotationOffsetRadians: n } : { rotationYRadians: n });
				}
			})] }),
			/* @__PURE__ */ (0, $.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, $.jsxs)("legend", { children: ["Size · ", t.resizePolicy.kind] }), t.resizePolicy.kind === "uniform" ? /* @__PURE__ */ (0, $.jsx)(Ya, {
				label: "Scale",
				value: e.size[0] / t.defaultSize[0],
				onChange: (n) => r(e.id, t.defaultSize.map((e) => e * n), t)
			}) : Ja.map((n, r) => {
				let i = t.resizePolicy.kind === "planar" ? n !== "height" : t.resizePolicy.kind === "axes" ? t.resizePolicy.axes.includes(n) : t.resizePolicy.kind === "custom";
				return /* @__PURE__ */ (0, $.jsx)(Ya, {
					label: n,
					value: e.size[r],
					disabled: !i,
					onChange: (e) => u(r, e)
				}, n);
			})] })
		]
	});
}
//#endregion
//#region apps/web/src/editor-preview/furnish/FurnishingInspector.tsx
function Qa({ items: e, selectedId: t, furnishingModels: n, deviceModels: r, floor: i, onWindowFit: a, onPlacementChange: o, onSizeChange: s, onLightStateChange: c, onVariantChange: l, onClose: u }) {
	let d = e.find((e) => e.id === t), f = d && (d.kind === "device" ? r : n)[d.modelId];
	return d && f ? /* @__PURE__ */ (0, $.jsx)(Za, {
		selected: d,
		definition: f,
		floor: i,
		onWindowFit: a,
		onLightStateChange: c,
		onVariantChange: l,
		onPlacementChange: o,
		onSizeChange: s,
		onClose: u
	}) : null;
}
//#endregion
//#region apps/web/src/editor-preview/furnish/ArrangePlanOpenings.tsx
var $a = (0, Q.memo)(function({ floor: e }) {
	return /* @__PURE__ */ (0, $.jsx)("group", {
		name: "arrange-plan-openings",
		children: e.openings.map((t) => {
			if (t.kind !== "door") return null;
			let n = e.walls.find((e) => e.id === t.wallId);
			if (!n) return null;
			let r = Ge(n, t, e.coordinates);
			return /* @__PURE__ */ (0, $.jsx)("group", {
				name: `arrange-plan-opening-${t.id}`,
				position: [
					r.start[0],
					0,
					r.start[1]
				],
				rotation: [
					0,
					r.rotationY,
					0
				],
				children: Fn(t, r.widthMeters, n.thicknessMeters).map((e, t) => /* @__PURE__ */ (0, $.jsx)(nr, {
					...e,
					overlay: !0
				}, t))
			}, t.id);
		})
	});
});
//#endregion
//#region apps/web/src/editor-connect/ConnectDeviceGrid.tsx
function eo({ relationship: e, models: t, manifest: n, selected: r = !1 }) {
	let i = e.kind === "modeled-device" ? t[e.device.model] : void 0, a = e.kind === "modeled-device" ? e.device.model : "", o = e.kind === "entity-slot" ? e.descriptor.openingId : void 0, s = (0, Q.useMemo)(() => o ? Dn(n, o) : i ? {
		key: `device:${a}`,
		kind: "device",
		modelId: a,
		definition: i
	} : null, [
		i,
		a,
		n,
		o
	]), c = e.kind === "modeled-device" ? e.device.entitySlots.find((e) => e.deviceRole === "primary")?.compatibleDomains[0] ?? e.device.entitySlots[0]?.compatibleDomains[0] : e.descriptor.spec.compatibleDomains[0], l = /* @__PURE__ */ (0, $.jsx)(Ue, {
		domain: c ?? "unknown",
		size: 30
	});
	return /* @__PURE__ */ (0, $.jsx)("span", {
		className: `connect-device-preview${r ? " is-selected-preview" : ""}`,
		"aria-hidden": "true",
		children: s ? /* @__PURE__ */ (0, $.jsx)(_t, {
			entry: s,
			showAdd: !1,
			fallback: l
		}) : /* @__PURE__ */ (0, $.jsx)("span", {
			className: "connect-device-preview__icon",
			children: l
		})
	});
}
function to({ editor: e, manifest: t, models: n, onOpen: r, onTrigger: i }) {
	return e.room ? /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "connect-device-grid",
		children: [e.groups.map((a) => /* @__PURE__ */ (0, $.jsx)(nt, {
			group: a,
			children: a.relationships.map((a) => {
				let o = {
					room: e.room,
					profile: e.profile,
					runtime: e.displayRuntime,
					disabled: !1,
					selected: !1,
					onOpen: () => r(a.id),
					onTriggerElement: (e) => i(a.id, e),
					preview: /* @__PURE__ */ (0, $.jsx)(eo, {
						relationship: a,
						models: n,
						manifest: t
					})
				};
				return a.kind === "modeled-device" ? /* @__PURE__ */ (0, $.jsx)(Ae, {
					...o,
					manifest: t,
					device: a.device
				}, a.id) : /* @__PURE__ */ (0, $.jsx)(Ie, {
					...o,
					descriptor: a.descriptor
				}, a.id);
			})
		}, a.id)), e.groups.length === 0 && /* @__PURE__ */ (0, $.jsx)("p", {
			className: "connect-empty",
			children: "This room has no devices or controls to connect. Add a device in Arrange to get started."
		})]
	}) : null;
}
//#endregion
//#region apps/web/src/editor-connect/ConnectInspector.tsx
var no = {};
function ro({ editor: e, manifest: t, runtime: n, deviceModels: r = no, homeAssistantUrl: i, onSettings: a }) {
	let o = () => a?.(), s = (0, Q.useRef)(null), c = (0, Q.useRef)(/* @__PURE__ */ new Map()), l = (0, Q.useRef)(null);
	e.disconnected || (l.current = i);
	let u = Object.keys(e.profile.roomAreaIds).length > 0 || Object.keys(e.profile.entityIdsBySlotId).length > 0, d = !(i && (u || l.current === i)), f = [
		"authenticating",
		"connecting",
		"reconnecting"
	].includes(n.status);
	(0, Q.useEffect)(() => {
		s.current && (s.current.scrollTop = 0);
	}, [
		e.roomId,
		e.relationshipId,
		d
	]), (0, Q.useEffect)(() => {
		if (!e.relationshipId || d) return;
		let t = requestAnimationFrame(() => s.current?.querySelector(".device-mapping-inspector__collapse")?.focus({ preventScroll: !0 }));
		return () => cancelAnimationFrame(t);
	}, [e.relationshipId, d]);
	let p = () => {
		let t = e.relationshipId;
		e.selectRelationship(null), requestAnimationFrame(() => {
			t && c.current.get(t)?.focus();
		});
	}, m = e.room;
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "connect-inspector",
		children: [
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "connect-inspector__scroll",
				ref: s,
				children: [
					/* @__PURE__ */ (0, $.jsx)(Y, {
						scrollRoot: s,
						enabled: !d && e.view === "devices",
						children: d ? /* @__PURE__ */ (0, $.jsxs)("section", {
							className: "connect-setup",
							children: [
								/* @__PURE__ */ (0, $.jsx)("h3", { children: "Connect your home" }),
								/* @__PURE__ */ (0, $.jsx)("p", {
									className: "connect-copy",
									children: "Set up Home Assistant to link rooms and devices."
								}),
								/* @__PURE__ */ (0, $.jsxs)("button", {
									type: "button",
									className: "connect-primary",
									onClick: o,
									children: ["Set up Home Assistant", /* @__PURE__ */ (0, $.jsx)(J, { name: "chevron" })]
								})
							]
						}) : /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
							e.disconnected && /* @__PURE__ */ (0, $.jsxs)("p", {
								className: "connect-offline",
								children: [f ? "Reconnecting to Home Assistant…" : "Home Assistant is not connected.", " Your saved connections are retained."]
							}),
							!e.relationship && /* @__PURE__ */ (0, $.jsx)("header", {
								className: "connect-inspector__heading",
								children: /* @__PURE__ */ (0, $.jsxs)("label", {
									className: "connect-room-picker",
									children: [/* @__PURE__ */ (0, $.jsx)("span", { children: e.view === "rooms" ? "Room to connect" : "Show devices in" }), /* @__PURE__ */ (0, $.jsxs)("select", {
										"aria-label": e.view === "rooms" ? "Room to connect" : "Show devices in",
										value: e.roomId ?? "",
										onChange: (t) => e.selectRoom(t.target.value),
										children: [/* @__PURE__ */ (0, $.jsx)("option", {
											value: "",
											disabled: !0,
											children: "Select a room"
										}), (e.view === "rooms" ? e.rooms : e.deviceRooms).map((e) => /* @__PURE__ */ (0, $.jsx)("option", {
											value: e.id,
											children: e.name
										}, e.id))]
									})]
								})
							}),
							m ? e.view === "rooms" && e.rooms.some((e) => e.id === m.id) ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
								/* @__PURE__ */ (0, $.jsxs)("label", {
									className: "connect-room-select",
									children: ["Home Assistant area", /* @__PURE__ */ (0, $.jsxs)("select", {
										"aria-label": `Home Assistant area for ${m.name}`,
										value: e.profile.roomAreaIds[m.id] ?? "",
										onChange: (t) => e.assignArea(t.target.value),
										children: [
											/* @__PURE__ */ (0, $.jsx)("option", {
												value: "",
												children: "Not connected"
											}),
											e.profile.roomAreaIds[m.id] && !e.displayRuntime.areas.some((t) => t.area_id === e.profile.roomAreaIds[m.id]) && /* @__PURE__ */ (0, $.jsx)("option", {
												value: e.profile.roomAreaIds[m.id],
												disabled: !0,
												children: "Saved area unavailable"
											}),
											e.displayRuntime.areas.map((t) => /* @__PURE__ */ (0, $.jsx)("option", {
												value: t.area_id,
												disabled: e.disconnected || Object.entries(e.profile.roomAreaIds).some(([e, n]) => e !== m.id && n === t.area_id),
												children: t.name
											}, t.area_id))
										]
									})]
								}),
								/* @__PURE__ */ (0, $.jsx)("p", {
									className: "connect-note",
									children: "This links the room in your plan to a Home Assistant area."
								}),
								/* @__PURE__ */ (0, $.jsxs)("button", {
									className: "connect-room-devices",
									type: "button",
									onClick: () => e.setView("devices"),
									children: [
										/* @__PURE__ */ (0, $.jsx)(J, { name: "devices" }),
										"Connect devices in this room",
										/* @__PURE__ */ (0, $.jsx)(J, { name: "chevron" })
									]
								})
							] }) : e.relationship ? /* @__PURE__ */ (0, $.jsx)(pt, {
								inline: !0,
								manifest: t,
								room: m,
								relationship: e.relationship,
								profile: e.profile,
								runtime: e.displayRuntime,
								disabled: e.disconnected,
								preview: /* @__PURE__ */ (0, $.jsx)(eo, {
									selected: !0,
									relationship: e.relationship,
									models: r,
									manifest: t
								}),
								state: "open",
								onEntityIdsBySlotIdChange: e.assignEntities,
								onSelectionMade: p,
								onCollapse: p,
								onReopen: () => void 0
							}, e.relationship.id) : /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [e.groups.length > 0 && /* @__PURE__ */ (0, $.jsx)("p", {
								className: "connect-copy",
								children: "Select a device or control below to link it to a Home Assistant entity."
							}), /* @__PURE__ */ (0, $.jsx)(to, {
								editor: e,
								manifest: t,
								models: r,
								onOpen: e.selectRelationship,
								onTrigger: (e, t) => {
									t ? c.current.set(e, t) : c.current.delete(e);
								}
							})] }) : /* @__PURE__ */ (0, $.jsxs)("p", {
								className: "connect-empty",
								children: [
									"Select a room on the map to ",
									e.view === "rooms" ? "choose its Home Assistant area" : "connect its devices",
									"."
								]
							}),
							e.pendingAreaChange && /* @__PURE__ */ (0, $.jsxs)("section", {
								className: "connect-confirm",
								role: "alertdialog",
								"aria-label": "Change room area",
								children: [
									/* @__PURE__ */ (0, $.jsx)("h3", { children: "Change this room’s area?" }),
									/* @__PURE__ */ (0, $.jsxs)("p", { children: [
										"This clears ",
										e.pendingAreaChange.clearedSlotIds.length,
										" draft connection",
										e.pendingAreaChange.clearedSlotIds.length === 1 ? "" : "s",
										". Applied connections stay unchanged."
									] }),
									/* @__PURE__ */ (0, $.jsx)("button", {
										type: "button",
										onClick: e.cancelAreaChange,
										children: "Cancel"
									}),
									/* @__PURE__ */ (0, $.jsx)("button", {
										type: "button",
										onClick: e.confirmAreaChange,
										children: "Change area"
									})
								]
							})
						] })
					}),
					(n.error || n.refreshError) && /* @__PURE__ */ (0, $.jsx)("p", {
						className: "connect-error",
						role: "alert",
						children: n.refreshError ?? n.error
					}),
					e.message && e.message !== "Draft changes" && /* @__PURE__ */ (0, $.jsx)("p", {
						className: "connect-feedback",
						role: "status",
						children: e.message
					})
				]
			}),
			/* @__PURE__ */ (0, $.jsxs)("footer", {
				className: "connect-footer",
				children: [
					/* @__PURE__ */ (0, $.jsx)("i", {
						className: e.disconnected ? "" : "is-connected",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "connect-footer__status",
						role: "status",
						children: [/* @__PURE__ */ (0, $.jsx)("span", { children: f ? "Connecting to Home Assistant…" : e.disconnected ? "Home Assistant not connected" : "Home Assistant connected" }), i && /* @__PURE__ */ (0, $.jsx)("small", {
							title: i,
							children: i.replace(/^https?:\/\//, "")
						})]
					}),
					/* @__PURE__ */ (0, $.jsx)("button", {
						type: "button",
						className: "connect-settings-button",
						title: "Connection settings",
						"aria-label": "Connection settings",
						onClick: o,
						children: /* @__PURE__ */ (0, $.jsx)(J, { name: "settings" })
					})
				]
			}),
			/* @__PURE__ */ (0, $.jsx)("span", {
				className: "connect-announcement",
				role: "status",
				children: e.message === "Draft changes" ? e.message : ""
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-preview/furnish/catalog/catalog.ts
function io(e, t) {
	return [...Object.entries(e).filter(([, e]) => !e.legacyOnly).map(([e, t]) => ({
		key: `furnishing:${e}`,
		kind: "furnishing",
		modelId: e,
		definition: t
	})), ...Object.entries(t).map(([e, t]) => ({
		key: `device:${e}`,
		kind: "device",
		modelId: e,
		definition: t
	}))].sort((e, t) => e.definition.label.localeCompare(t.definition.label, "en") || e.key.localeCompare(t.key, "en"));
}
function ao(e, t, n) {
	let r = n.trim().toLocaleLowerCase("en").split(/\s+/).filter(Boolean);
	return e.filter((e) => {
		if (t === "devices" && e.kind !== "device" || t !== "all" && t !== "devices" && e.definition.defaultRoomType !== t) return !1;
		let n = Fe.find((t) => t.id === e.definition.defaultRoomType)?.label ?? "", i = [
			e.modelId,
			e.definition.label,
			e.definition.category,
			...e.definition.variants?.map((e) => e.label) ?? [],
			e.kind === "furnishing" ? "Furniture furnishing" : "Device",
			n
		].join(" ").toLocaleLowerCase("en");
		return r.every((e) => i.includes(e));
	});
}
//#endregion
//#region apps/web/src/editor-preview/furnish/catalog/ArrangeCatalog.tsx
var oo = {
	all: "grid",
	devices: "devices",
	"living-room": "furnish",
	kitchen: "kitchen",
	bedroom: "bed",
	bathroom: "bath",
	"dining-room": "dining",
	office: "monitor",
	entryway: "door",
	hallway: "hallway",
	laundry: "laundry",
	outdoor: "outdoor"
}, so = [{
	id: "all",
	label: "All items"
}, ...Fe], co = [...so, {
	id: "devices",
	label: "Devices"
}];
function lo({ furnishingModels: e, deviceModels: t, browsing: n, onBrowse: r, error: i, onChoose: a, enabled: o = !0 }) {
	let s = (0, Q.useRef)(null), c = (0, Q.useMemo)(() => io(e, t), [e, t]), l = (0, Q.useMemo)(() => ao(c, n.room, n.query), [c, n]), u = co.find((e) => e.id === n.room)?.label ?? "All items", d = (e) => {
		r({
			room: e,
			query: ""
		}), s.current && (s.current.scrollTop = 0);
	};
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "arrange-catalog",
		"aria-label": "Item catalog",
		children: [i && /* @__PURE__ */ (0, $.jsx)("p", {
			className: "catalog-add-error",
			role: "alert",
			children: i
		}), /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "arrange-catalog__body",
			children: [/* @__PURE__ */ (0, $.jsxs)("nav", {
				className: "catalog-rooms",
				"aria-label": "Catalog room types",
				children: [so.map((e) => /* @__PURE__ */ (0, $.jsxs)("button", {
					type: "button",
					"aria-pressed": n.room === e.id,
					onClick: () => d(e.id),
					children: [/* @__PURE__ */ (0, $.jsx)(J, { name: oo[e.id] }), /* @__PURE__ */ (0, $.jsx)("span", { children: e.label })]
				}, e.id)), /* @__PURE__ */ (0, $.jsx)("div", {
					className: "catalog-device-filter",
					children: /* @__PURE__ */ (0, $.jsxs)("button", {
						type: "button",
						"aria-pressed": n.room === "devices",
						onClick: () => d("devices"),
						children: [/* @__PURE__ */ (0, $.jsx)(J, { name: "devices" }), /* @__PURE__ */ (0, $.jsx)("span", { children: "Devices" })]
					})
				})]
			}), /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "catalog-results",
				children: [
					/* @__PURE__ */ (0, $.jsxs)("label", {
						className: "catalog-room-select",
						children: [/* @__PURE__ */ (0, $.jsx)("span", { children: "Filter" }), /* @__PURE__ */ (0, $.jsx)("select", {
							value: n.room,
							onChange: (e) => d(e.target.value),
							children: co.map((e) => /* @__PURE__ */ (0, $.jsx)("option", {
								value: e.id,
								children: e.label
							}, e.id))
						})]
					}),
					/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "catalog-search",
						children: [
							/* @__PURE__ */ (0, $.jsx)(J, { name: "search" }),
							/* @__PURE__ */ (0, $.jsx)("input", {
								type: "search",
								"aria-label": `Search ${u.toLowerCase()}`,
								value: n.query,
								placeholder: `Search ${u.toLowerCase()}…`,
								onChange: (e) => r({
									...n,
									query: e.target.value
								})
							}),
							n.query && /* @__PURE__ */ (0, $.jsx)("button", {
								type: "button",
								"aria-label": "Clear search",
								onClick: () => r({
									...n,
									query: ""
								}),
								children: /* @__PURE__ */ (0, $.jsx)(J, { name: "close" })
							})
						]
					}),
					/* @__PURE__ */ (0, $.jsx)(Y, {
						scrollRoot: s,
						enabled: o,
						children: /* @__PURE__ */ (0, $.jsxs)("div", {
							className: "catalog-grid",
							ref: s,
							"aria-label": `${u} catalog`,
							children: [l.map((e) => /* @__PURE__ */ (0, $.jsxs)("button", {
								type: "button",
								className: "catalog-card",
								"aria-label": `Add ${e.definition.label}`,
								disabled: e.kind === "device" && e.definition.supportedDomains.length === 0,
								onClick: () => a(e),
								children: [
									/* @__PURE__ */ (0, $.jsx)(_t, { entry: e }),
									/* @__PURE__ */ (0, $.jsx)("strong", { children: e.definition.label }),
									/* @__PURE__ */ (0, $.jsx)("small", { children: e.kind === "device" ? "Device" : "Furniture" })
								]
							}, e.key)), l.length === 0 && /* @__PURE__ */ (0, $.jsxs)("div", {
								className: "catalog-empty",
								role: "status",
								children: [/* @__PURE__ */ (0, $.jsx)("p", { children: n.query.trim() ? "No matching items" : "No items for this room type yet" }), /* @__PURE__ */ (0, $.jsx)("button", {
									type: "button",
									onClick: () => n.query.trim() ? r({
										...n,
										query: ""
									}) : d("all"),
									children: n.query.trim() ? "Clear search" : "Browse all items"
								})]
							})]
						})
					})
				]
			})]
		})]
	});
}
//#endregion
//#region apps/web/src/editor-chrome/EditorActionBar.tsx
var uo = [
	{
		tool: "select",
		label: "Select",
		key: "V"
	},
	{
		tool: "wall",
		label: "Wall",
		key: "W"
	},
	{
		tool: "door",
		label: "Door",
		key: "D"
	},
	{
		tool: "window",
		label: "Window",
		key: "N"
	},
	{
		tool: "passage",
		label: "Passage",
		key: "A"
	},
	{
		tool: "floor",
		label: "Floor",
		key: "F"
	},
	{
		tool: "hedge",
		label: "Hedge",
		key: "H"
	},
	{
		tool: "pool",
		label: "Pool",
		key: "P"
	},
	{
		tool: "measure",
		label: "Measure",
		key: "M"
	}
];
function fo({ mode: e, tool: t, onToolChange: n, canUndo: r, canRedo: i, onUndo: a, onRedo: o, onStairs: s, stairsActive: c, stairsDisabledReason: l }) {
	let u = e === "construct";
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "editor-action-bar",
		role: "group",
		"data-mode": e,
		"aria-label": u ? "Construction actions" : "Edit history",
		children: [
			u && /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [uo.flatMap((e) => [/* @__PURE__ */ (0, $.jsx)(xn, {
				icon: e.tool,
				label: e.label,
				showLabel: !0,
				pressed: !c && t === e.tool,
				shortcut: e.key,
				keyShortcuts: e.key,
				onClick: () => n(e.tool)
			}, e.tool), ...e.tool === "wall" && s ? [/* @__PURE__ */ (0, $.jsx)(xn, {
				icon: "stairs",
				label: "Stairs",
				showLabel: !0,
				pressed: c,
				disabled: !!l,
				disabledReason: l,
				onClick: s
			}, "stairs")] : []]), /* @__PURE__ */ (0, $.jsx)("span", {
				className: "editor-action-bar__separator",
				"aria-hidden": "true"
			})] }),
			/* @__PURE__ */ (0, $.jsx)(xn, {
				icon: "undo",
				label: "Undo",
				disabled: !r,
				onClick: a,
				shortcut: "⌘/Ctrl Z",
				keyShortcuts: "Control+Z Meta+Z"
			}),
			/* @__PURE__ */ (0, $.jsx)(xn, {
				icon: "redo",
				label: "Redo",
				disabled: !i,
				onClick: o,
				shortcut: "⌘/Ctrl Shift Z · Ctrl Y",
				keyShortcuts: "Control+Shift+Z Meta+Shift+Z Control+Y"
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-chrome/EditorModeNav.tsx
function po({ mode: e, onModeChange: t }) {
	return /* @__PURE__ */ (0, $.jsxs)("nav", {
		className: "direction-modes",
		"aria-label": "Editor mode",
		children: [
			/* @__PURE__ */ (0, $.jsxs)("button", {
				type: "button",
				"data-mode": "construct",
				"aria-pressed": e === "construct",
				onClick: () => t("construct"),
				children: [/* @__PURE__ */ (0, $.jsx)(J, { name: "construct" }), "Construct"]
			}),
			/* @__PURE__ */ (0, $.jsxs)("button", {
				type: "button",
				"data-mode": "furnish",
				"aria-pressed": e === "furnish",
				onClick: () => t("furnish"),
				children: [/* @__PURE__ */ (0, $.jsx)(J, { name: "furnish" }), "Arrange"]
			}),
			/* @__PURE__ */ (0, $.jsxs)("button", {
				type: "button",
				"data-mode": "connect",
				"aria-pressed": e === "connect",
				onClick: () => t("connect"),
				children: [/* @__PURE__ */ (0, $.jsx)(J, { name: "connect" }), "Connect"]
			}),
			/* @__PURE__ */ (0, $.jsxs)("button", {
				type: "button",
				"data-mode": "shortcuts",
				"aria-pressed": e === "shortcuts",
				onClick: () => t("shortcuts"),
				children: [/* @__PURE__ */ (0, $.jsx)(J, { name: "grid" }), "Shortcuts"]
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-connect/ConnectActionBar.tsx
function mo({ view: e, onViewChange: t, refreshing: n, disconnected: r, hasUnmappedRooms: i, onRefresh: a }) {
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "editor-action-bar connect-action-bar",
		role: "group",
		"aria-label": "Connection actions",
		"data-mode": "connect",
		"aria-busy": n,
		children: [
			/* @__PURE__ */ (0, $.jsx)(xn, {
				icon: "rooms",
				label: "Rooms",
				showLabel: !0,
				pressed: e === "rooms",
				warning: i ? "Some rooms are not mapped to Home Assistant areas." : void 0,
				onClick: () => t("rooms")
			}),
			/* @__PURE__ */ (0, $.jsx)(xn, {
				icon: "devices",
				label: "Devices",
				showLabel: !0,
				pressed: e === "devices",
				onClick: () => t("devices")
			}),
			/* @__PURE__ */ (0, $.jsx)("span", {
				className: "editor-action-bar__separator",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, $.jsx)(xn, {
				icon: "refresh",
				label: "Refresh from Home Assistant",
				disabled: r || n,
				onClick: a
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-workspace/HomeEditorHeader.tsx
function ho({ activeFloorId: e, stairPlacement: t, setStairPlacement: n, startStairs: r, snapshot: i, editingLocked: a, publishOpen: o, previewOpen: s, mode: c, cameraView: l, setCameraView: u, walkButton: d, unsettled: f, setPreviewOpen: p, selectMode: m, closeEditor: h, closing: g, setPublishMessage: _, setPublishOpen: v, connect: y, runtime: b, constructEditor: x, dragging: S, floorZoneDrawing: C, poolDrawing: w, workspace: T, undoProject: E, redoProject: O, shortcutsMode: k, onModeTabChange: A, replaceEditorsFromProject: j }) {
	let [M, N] = (0, Q.useState)(null), P = T.record.publishedAt !== 0, F = (0, Q.useMemo)(() => JSON.stringify(i.project) !== JSON.stringify(T.record.published) || Object.values(i.bindings).some((e) => JSON.stringify(e.draft) !== JSON.stringify(e.published)), [
		i.project,
		i.bindings,
		T.record.published
	]);
	return /* @__PURE__ */ (0, $.jsxs)("header", {
		className: "editor-header",
		inert: a || o || s,
		children: [
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "editor-navigation",
				children: [/* @__PURE__ */ (0, $.jsxs)("button", {
					type: "button",
					className: "editor-close",
					disabled: a || f || !P,
					title: P ? "Back to Home" : "Save your home before returning to Home",
					onClick: () => void h(),
					children: [/* @__PURE__ */ (0, $.jsx)(J, { name: "back" }), g ? "Returning…" : "Back"]
				}), c !== "connect" && /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "direction-camera",
					role: "group",
					"aria-label": "Camera controls",
					children: [c === "construct" ? /* @__PURE__ */ (0, $.jsxs)("span", {
						className: "construction-plan__indicator",
						title: "2D floor plan",
						children: [/* @__PURE__ */ (0, $.jsx)(J, { name: "plan" }), "2D"]
					}) : /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("button", {
						type: "button",
						title: "View the home in 3D",
						"aria-pressed": l === "3d",
						onClick: () => u("3d"),
						children: [/* @__PURE__ */ (0, $.jsx)(J, { name: "cube" }), "3D"]
					}), /* @__PURE__ */ (0, $.jsxs)("button", {
						type: "button",
						title: "View the floor plan",
						"aria-pressed": l === "top",
						onClick: () => u("top"),
						children: [/* @__PURE__ */ (0, $.jsx)(J, { name: "plan" }), "2D"]
					})] }), /* @__PURE__ */ (0, $.jsxs)("button", {
						ref: d,
						type: "button",
						title: "Walk through the draft at eye level",
						"aria-haspopup": "dialog",
						disabled: a || f,
						onClick: async (e) => {
							if (N(null), window.matchMedia("(pointer: coarse)").matches) {
								p(!0);
								return;
							}
							let t = e.currentTarget.closest("main");
							try {
								if (!t) throw Error("Pointer lock unavailable");
								await D(t), p(!0);
							} catch {
								N("Allow pointer lock in your browser to explore this home.");
							}
						},
						children: [/* @__PURE__ */ (0, $.jsx)(J, { name: "walk" }), "Explore"]
					})]
				})]
			}),
			M && /* @__PURE__ */ (0, $.jsx)("p", {
				role: "alert",
				children: M
			}),
			/* @__PURE__ */ (0, $.jsx)(po, {
				mode: k ? "shortcuts" : c,
				onModeChange: A
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "direction-project-actions",
				role: "group",
				"aria-label": "Project actions",
				children: [/* @__PURE__ */ (0, $.jsxs)("button", {
					type: "button",
					className: "editor-reset-changes",
					"aria-label": "Reset changes",
					disabled: a || f || !F,
					title: "Discard draft changes and restore the saved version",
					onClick: async () => {
						if (!window.confirm("Reset changes? This discards all draft home and connection changes and restores the last saved version.")) return;
						let e = await T.resetDraftToPublished();
						e.status === "saved" && j(e.record.draft);
					},
					children: [/* @__PURE__ */ (0, $.jsx)(J, { name: "reset" }), "Reset"]
				}), /* @__PURE__ */ (0, $.jsxs)("button", {
					type: "button",
					className: "is-primary",
					disabled: a || f,
					onClick: () => {
						_(null), v(!0);
					},
					children: [/* @__PURE__ */ (0, $.jsx)(J, { name: "save" }), "Save"]
				})]
			}),
			c === "connect" ? /* @__PURE__ */ (0, $.jsx)(mo, {
				view: y.view,
				onViewChange: y.setView,
				hasUnmappedRooms: y.hasUnmappedRooms,
				refreshing: b.refreshing,
				disconnected: y.disconnected,
				onRefresh: () => void y.refresh()
			}) : /* @__PURE__ */ (0, $.jsx)(fo, {
				mode: c,
				tool: x.tool,
				onToolChange: (e) => {
					n(null), x.setTool(e);
				},
				onStairs: r,
				stairsActive: !!t,
				stairsDisabledReason: i.project.floors.at(-1)?.id === e ? "Add a floor above first, then place stairs from this floor." : a || f ? "Finish the current edit first." : void 0,
				canUndo: !a && !S && (C.active ? C.points.length > 0 : w.active ? w.points.length > 0 : T.canUndo && !f),
				canRedo: !a && !S && (C.active ? C.future.length > 0 : w.active ? w.future.length > 0 : T.canRedo && !f),
				onUndo: E,
				onRedo: O
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionGrid.tsx
function go() {
	let e = (0, Q.useRef)(null), t = (0, Q.useMemo)(() => ({ cellSize: { value: j } }), []);
	return oe(({ camera: t }) => {
		e.current && e.current.position.set(t.position.x, -.04, t.position.z);
	}), /* @__PURE__ */ (0, $.jsxs)("mesh", {
		ref: e,
		name: "construction-grid",
		rotation: [
			-Math.PI / 2,
			0,
			0
		],
		raycast: () => {},
		renderOrder: -100,
		children: [/* @__PURE__ */ (0, $.jsx)("planeGeometry", { args: [2e4, 2e4] }), /* @__PURE__ */ (0, $.jsx)("shaderMaterial", {
			transparent: !0,
			depthWrite: !1,
			uniforms: t,
			vertexShader: "varying vec2 worldPoint;\n        void main() {\n          vec4 world = modelMatrix * vec4(position, 1.0);\n          worldPoint = world.xz;\n          gl_Position = projectionMatrix * viewMatrix * world;\n        }",
			fragmentShader: "varying vec2 worldPoint;\n        uniform float cellSize;\n        float line(vec2 point, float spacing) {\n          vec2 p = point / spacing;\n          vec2 width = max(fwidth(p), vec2(0.00001));\n          vec2 distanceToLine = abs(fract(p - 0.5) - 0.5) / width;\n          return 1.0 - min(min(distanceToLine.x, distanceToLine.y), 1.0);\n        }\n        void main() {\n          float metersPerPixel = max(fwidth(worldPoint.x), fwidth(worldPoint.y));\n          float fineVisibility = (1.0 - smoothstep(0.008, 0.025, metersPerPixel));\n          float majorVisibility = 1.0 - smoothstep(0.15, 0.4, metersPerPixel);\n          float alpha = max(line(worldPoint, cellSize) * 0.09 * fineVisibility,\n            line(worldPoint, 1.0) * 0.19 * majorVisibility);\n          gl_FragColor = vec4(0.48, 0.48, 0.42, alpha);\n        }"
		})]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/WalkStartPointer.tsx
function _o({ floor: e, start: t, placing: n, onPlace: r }) {
	let i = t?.floorId === e.id ? W(t.at, e.coordinates) : null;
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [n && /* @__PURE__ */ (0, $.jsxs)("mesh", {
		rotation: [
			-Math.PI / 2,
			0,
			0
		],
		position: [
			0,
			10,
			0
		],
		onPointerDown: (e) => e.stopPropagation(),
		onPointerUp: (e) => e.stopPropagation(),
		onPointerMove: (e) => e.stopPropagation(),
		onClick: (t) => {
			if (t.stopPropagation(), t.button !== 0) return;
			let n = K(t.point, e.coordinates);
			ct(n, e.footprint) && r(n);
		},
		children: [/* @__PURE__ */ (0, $.jsx)("planeGeometry", { args: [1e4, 1e4] }), /* @__PURE__ */ (0, $.jsx)(er, {
			visible: !1,
			transparent: !0,
			opacity: 0,
			depthWrite: !1
		})]
	}), i && /* @__PURE__ */ (0, $.jsxs)("group", {
		position: [
			i[0],
			.2,
			i[1]
		],
		children: [/* @__PURE__ */ (0, $.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			renderOrder: 100,
			raycast: $n,
			children: [/* @__PURE__ */ (0, $.jsx)("ringGeometry", { args: [
				.18,
				.25,
				32
			] }), /* @__PURE__ */ (0, $.jsx)(er, {
				color: "#d16c39",
				depthTest: !1,
				depthWrite: !1
			})]
		}), /* @__PURE__ */ (0, $.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			renderOrder: 101,
			raycast: $n,
			children: [/* @__PURE__ */ (0, $.jsx)("circleGeometry", { args: [.14, 3] }), /* @__PURE__ */ (0, $.jsx)(er, {
				color: "#d16c39",
				depthTest: !1,
				depthWrite: !1
			})]
		})]
	})] });
}
//#endregion
//#region apps/web/src/editor-floors/stair-placement-geometry.ts
function vo(e, t, n, r) {
	let i = r.x - n.x, a = r.z - n.z, o = Math.hypot(i, a);
	return !Number.isFinite(o) || o < .1 ? null : {
		...e,
		at: K(n, t),
		runMeters: Number(o.toFixed(2)),
		rotationYRadians: Math.atan2(i, a)
	};
}
function yo(e, t, n, r, i, a) {
	let o = {
		x: Math.sin(e.rotationYRadians),
		z: Math.cos(e.rotationYRadians)
	}, s = {
		x: n.x + o.x * e.runMeters,
		z: n.z + o.z * e.runMeters
	};
	if (a === "body") return {
		...e,
		at: K({
			x: n.x + i.x - r.x,
			z: n.z + i.z - r.z
		}, t)
	};
	if (a === "bottom") return vo(e, t, i, s);
	if (a === "top") return vo(e, t, n, i);
	let c = (i.x - n.x) * o.z - (i.z - n.z) * o.x, l = Number((Math.abs(c) * 2).toFixed(2));
	return l >= .1 ? {
		...e,
		widthMeters: l
	} : null;
}
//#endregion
//#region apps/web/src/editor-floors/useStairValidation.ts
function bo(e, t) {
	let [n, r] = (0, Q.useState)([]), i = (0, Q.useRef)({
		building: e,
		candidate: t
	});
	i.current = {
		building: e,
		candidate: t
	};
	let a = (0, Q.useRef)(null), o = (0, Q.useRef)(-Infinity), s = () => {
		a.current !== null && clearTimeout(a.current), a.current = null;
	}, c = (e = i.current.candidate) => {
		s(), o.current = performance.now();
		let t = e ? vn(i.current.building, e) : [];
		return r(t), t;
	};
	return (0, Q.useEffect)(() => {
		let e = 100 - (performance.now() - o.current);
		e <= 0 ? c() : a.current === null && (a.current = setTimeout(() => c(), e));
	}, [e, t]), (0, Q.useEffect)(() => s, []), {
		issues: n,
		flush: c,
		cancel: s
	};
}
//#endregion
//#region apps/web/src/editor-floors/StairFeedback.tsx
function xo({ flight: e, issues: t, measurements: n = !0 }) {
	return /* @__PURE__ */ (0, $.jsxs)(B, {
		position: [
			e.startWorld[0] - e.forward[0] * .65,
			.3,
			e.startWorld[1] - e.forward[1] * .65
		],
		center: !0,
		style: {
			pointerEvents: "none",
			width: 250,
			textAlign: "center"
		},
		children: [n && /* @__PURE__ */ (0, $.jsx)(dr, {
			label: `${e.runMeters.toFixed(2)} m × ${e.widthMeters.toFixed(2)} m`,
			ariaLabel: "Stair length and width"
		}), t.length > 0 && /* @__PURE__ */ (0, $.jsx)("div", {
			role: "status",
			className: "stair-placement-error",
			children: Array.from(new Set(t.map((e) => e.message))).map((e) => /* @__PURE__ */ (0, $.jsx)("div", { children: e }, e))
		})]
	});
}
//#endregion
//#region apps/web/src/editor-floors/ConnectedFloorGuide.tsx
function So({ floor: e }) {
	let t = (t, n) => t.map((r, i) => /* @__PURE__ */ (0, $.jsx)(nr, {
		from: W(r, e.coordinates),
		to: W(t[(i + 1) % t.length], e.coordinates),
		color: "#b4bcb9",
		width: .025,
		elevation: .11,
		overlay: !0
	}, `${n}-${i}`)), n = e.footprint[0] ? W(e.footprint[0], e.coordinates) : [0, 0];
	return /* @__PURE__ */ (0, $.jsxs)("group", {
		name: "connected-floor-guide",
		children: [
			t(e.footprint, "footprint"),
			e.walls.map((t) => /* @__PURE__ */ (0, $.jsx)(nr, {
				from: W(t.from, e.coordinates),
				to: W(t.to, e.coordinates),
				color: "#b4bcb9",
				width: .045,
				elevation: .11,
				overlay: !0
			}, t.id)),
			e.openings.map((t) => {
				let n = e.walls.find((e) => e.id === t.wallId);
				if (!n) return null;
				let r = W(n.from, e.coordinates), i = W(n.to, e.coordinates), a = Math.hypot(i[0] - r[0], i[1] - r[1]);
				if (!a) return null;
				let o = t.offsetFromWallStartPlanUnits * e.coordinates.metersPerPlanUnit, s = (e) => [r[0] + (i[0] - r[0]) * e / a, r[1] + (i[1] - r[1]) * e / a];
				return /* @__PURE__ */ (0, $.jsx)(nr, {
					from: s(o),
					to: s(o + t.widthPlanUnits * e.coordinates.metersPerPlanUnit),
					color: "#d8dfdc",
					width: .1,
					elevation: .115,
					overlay: !0
				}, t.id);
			}),
			(e.pools ?? []).flatMap((e) => t(e.polygon, e.id)),
			/* @__PURE__ */ (0, $.jsxs)(B, {
				position: [
					n[0],
					.12,
					n[1]
				],
				style: {
					pointerEvents: "none",
					whiteSpace: "nowrap",
					color: "#667773"
				},
				children: [e.name, " · reference"]
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-chrome/SelectionActionBar.tsx
var Co = (0, Q.forwardRef)(function({ children: e, label: t, mode: n = "furnish" }, r) {
	return /* @__PURE__ */ (0, $.jsx)("div", {
		ref: r,
		className: "selected-item-actions",
		"data-mode": n,
		role: "group",
		"aria-label": t,
		onPointerDown: (e) => e.stopPropagation(),
		onClick: (e) => e.stopPropagation(),
		children: e
	});
}), wo = ({ centerX: e, itemTop: t, itemBottom: n, width: r, height: i, toolbarWidth: a, toolbarHeight: o, topInset: s }) => {
	let c = Math.max(8, i - o - 8), l = Math.min(c, Math.max(8, s)), u = t - o - 18;
	return {
		x: Math.max(8, Math.min(r - a - 8, e - a / 2)),
		y: Math.max(l, Math.min(c, u >= l ? u : n + 18))
	};
};
//#endregion
//#region apps/web/src/editor-floors/SelectedStairControls.tsx
function To({ flight: e, destinationName: n, onGoToFloor: r, onDelete: i }) {
	let { camera: a, gl: o, size: s, invalidate: c } = f(), l = (0, Q.useRef)(null), u = (0, Q.useRef)(null), d = (0, Q.useMemo)(() => new t(), []);
	return (0, Q.useLayoutEffect)(() => {
		c();
	}, [
		c,
		e,
		s
	]), oe(() => {
		if (!l.current || !u.current) return;
		let t = (t, n) => (d.set(e.startWorld[0] + e.forward[0] * t + e.side[0] * n, .13, e.startWorld[1] + e.forward[1] * t + e.side[1] * n).project(a), {
			x: (d.x + 1) * s.width / 2,
			y: (1 - d.y) * s.height / 2,
			z: d.z
		}), n = t(e.runMeters / 2, 0);
		if (u.current.style.visibility = "hidden", n.z < -1 || n.z > 1 || n.x < 0 || n.x > s.width || n.y < 0 || n.y > s.height) return;
		let r = [
			t(0, -e.widthMeters / 2),
			t(0, e.widthMeters / 2),
			t(e.runMeters, -e.widthMeters / 2),
			t(e.runMeters, e.widthMeters / 2)
		], i = o.domElement.closest(".direction-preview")?.querySelector(".editor-header")?.getBoundingClientRect(), c = wo({
			centerX: n.x,
			itemTop: Math.min(...r.map((e) => e.y)),
			itemBottom: Math.max(...r.map((e) => e.y)),
			width: s.width,
			height: s.height,
			toolbarWidth: l.current.offsetWidth,
			toolbarHeight: l.current.offsetHeight,
			topInset: i ? i.bottom - o.domElement.getBoundingClientRect().top + 8 : 8
		});
		u.current.style.visibility = "visible", l.current.style.transform = `translate(${c.x}px, ${c.y}px)`;
	}), /* @__PURE__ */ (0, $.jsx)(B, {
		fullscreen: !0,
		calculatePosition: (e, t, n) => [n.width / 2, n.height / 2],
		zIndexRange: [6, 6],
		style: { pointerEvents: "none" },
		children: /* @__PURE__ */ (0, $.jsx)("div", {
			ref: u,
			className: "selected-item-controls",
			children: /* @__PURE__ */ (0, $.jsxs)(Co, {
				ref: l,
				mode: "construct",
				label: "Selected stair actions",
				children: [
					/* @__PURE__ */ (0, $.jsx)(xn, {
						icon: "floor",
						label: `Go to ${n}`,
						onClick: r
					}),
					/* @__PURE__ */ (0, $.jsx)("span", {
						className: "selected-item-actions__separator",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, $.jsx)(xn, {
						icon: "delete",
						label: "Delete stairs",
						onClick: i
					})
				]
			})
		})
	});
}
//#endregion
//#region apps/web/src/editor-floors/EditableStair.tsx
function Eo({ building: e, stair: n, activeFloorId: r, selected: i, enabled: a, onSelect: o, onCommit: s, onDraggingChange: c, onGoToFloor: l, onDelete: u }) {
	let { camera: d, size: p, gl: m, get: h } = f(), g = (0, Q.useRef)(null), [_, v] = (0, Q.useState)(null), [y, b] = (0, Q.useState)(null), x = (0, Q.useRef)(null), S = _ ?? n, C = bo(e, S), w = Qe(e, S), T = (0, Q.useRef)({
		onDraggingChange: c,
		validation: C
	});
	T.current = {
		onDraggingChange: c,
		validation: C
	};
	let E = () => {
		let e = x.current;
		x.current = null, e?.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId), v(null), b(null), T.current.validation.cancel(), g.current &&= (g.current.enabled = !0, null), e && T.current.onDraggingChange(!1);
	}, D = (0, Q.useRef)(E);
	D.current = E;
	let O = Xe();
	(0, Q.useEffect)(() => {
		(!a || !i) && D.current();
	}, [
		a,
		i,
		n
	]), (0, Q.useEffect)(() => {
		let e = (e) => {
			e.key === "Escape" && x.current && (e.preventDefault(), e.stopImmediatePropagation(), D.current());
		}, t = (e) => {
			x.current?.pointerId === e.pointerId && D.current();
		};
		return O.events.addEventListener("keydown", e, !0), m.domElement.addEventListener("lostpointercapture", t), () => {
			O.events.removeEventListener("keydown", e, !0), m.domElement.removeEventListener("lostpointercapture", t), D.current();
		};
	}, [m]);
	let k = (r, i) => {
		let a = r.ray.intersectPlane(new ht(new t(0, 1, 0), 0), new t());
		if (!a) return null;
		let o = e.coordinates, s = i && (i.handle === "bottom" || i.handle === "top"), c = i && Qe(e, i.original), l = c && (i?.handle === "bottom" ? {
			x: c.startWorld[0] + c.forward[0] * c.runMeters,
			z: c.startWorld[1] + c.forward[1] * c.runMeters
		} : {
			x: c.startWorld[0],
			z: c.startWorld[1]
		}), u = s ? Kn({
			point: a,
			coordinates: o,
			walls: e.floors.filter((e) => e.id === n.lowerFloorId || e.id === n.upperFloorId).flatMap((e) => e.walls),
			onSnap: b,
			pixelsPerMeter: fr(d, p.height),
			pointerType: r.nativeEvent.pointerType,
			absolute: r.altKey,
			angleOrigin: l ? K(l, o) : void 0
		}) : Gn({
			point: a,
			coordinates: o,
			absolute: r.altKey
		}), [f, m] = W(u, o);
		return {
			x: f,
			z: m
		};
	}, A = (t, n) => {
		let r = k(t, n);
		return r ? yo(n.original, e.coordinates, n.start, n.grab, r, n.handle) : null;
	}, j = (e) => ({
		onPointerDown: (t) => {
			if (!a || t.button !== 0 || t.metaKey || t.ctrlKey || t.shiftKey || x.current) return;
			let r = k(t);
			if (!r || !w) return;
			t.stopPropagation(), o();
			let i = h().controls;
			i?.enabled && (i.enabled = !1, g.current = i), c(!0);
			let s = t.target;
			s.setPointerCapture(t.pointerId), x.current = {
				...Ln(t.pointerId, [t.nativeEvent.clientX, t.nativeEvent.clientY]),
				original: n,
				candidate: n,
				start: {
					x: w.startWorld[0],
					z: w.startWorld[1]
				},
				grab: r,
				handle: e,
				target: s
			};
		},
		onPointerMove: (e) => {
			let t = x.current;
			if (!t || t.pointerId !== e.pointerId) return;
			e.stopPropagation();
			let n = Rn(t, e.pointerId, [e.nativeEvent.clientX, e.nativeEvent.clientY]);
			if (!n) return;
			n.started && c(!0);
			let r = A(e, n.drag) ?? n.drag.candidate;
			x.current = {
				...n.drag,
				candidate: r
			}, v(r);
		},
		onPointerUp: (e) => {
			let t = x.current;
			if (!t || t.pointerId !== e.pointerId) return;
			e.stopPropagation();
			let n = m.domElement.getBoundingClientRect(), r = e.nativeEvent.clientX >= n.left && e.nativeEvent.clientX <= n.right && e.nativeEvent.clientY >= n.top && e.nativeEvent.clientY <= n.bottom, i = t.dragActive && r ? A(e, t) ?? t.candidate : null;
			i && (C.flush(i), s(i)), E();
		},
		onPointerCancel: (e) => {
			x.current?.pointerId === e.pointerId && (e.stopPropagation(), E());
		}
	});
	if (!w) return null;
	let M = e.floors.find((e) => e.id === (r === n.lowerFloorId ? n.upperFloorId : n.lowerFloorId)), N = (e, t) => [
		w.startWorld[0] + w.forward[0] * e + w.side[0] * t,
		.25,
		w.startWorld[1] + w.forward[1] * e + w.side[1] * t
	];
	return /* @__PURE__ */ (0, $.jsxs)("group", {
		name: `editable-stair-${n.id}`,
		children: [
			_ && /* @__PURE__ */ (0, $.jsx)(So, { floor: M }),
			/* @__PURE__ */ (0, $.jsx)(U, {
				flight: w,
				upper: r === n.upperFloorId,
				selected: i,
				invalid: C.issues.length > 0,
				handlers: a ? j("body") : void 0
			}),
			/* @__PURE__ */ (0, $.jsx)(rr, {
				snap: y,
				coordinates: e.coordinates
			}),
			i && /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
				[
					"bottom",
					"top",
					"left",
					"right"
				].map((e) => /* @__PURE__ */ (0, $.jsx)($r, {
					name: `stair-${e}-${n.id}`,
					handlers: j(e),
					at: e === "bottom" ? N(0, 0) : e === "top" ? N(w.runMeters, 0) : N(w.runMeters / 2, (e === "left" ? -1 : 1) * w.widthMeters / 2)
				}, e)),
				/* @__PURE__ */ (0, $.jsx)(xo, {
					flight: w,
					issues: C.issues
				}),
				!_ && /* @__PURE__ */ (0, $.jsx)(To, {
					flight: w,
					destinationName: M.name,
					onGoToFloor: l,
					onDelete: u
				})
			] })
		]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/SelectedRoomControls.tsx
function Do({ editor: e, disabled: t }) {
	let n = I(e.selection).filter((e) => e.kind === "room"), r = e.previewFloor.rooms.filter((e) => n.some((t) => t.id === e.id));
	if (!r.length) return null;
	let i = r.flatMap((e) => e.polygon), [a, o] = W(xt(r[0].polygon), e.draft.coordinates), [, s] = W([i[0][0], Math.min(...i.map((e) => e[1]))], e.draft.coordinates), c = !e.deletionTargets.some((e) => e.kind === "room");
	return /* @__PURE__ */ (0, $.jsx)(B, {
		center: !0,
		position: [
			a,
			.85,
			(o + s) / 2
		],
		zIndexRange: [6, 6],
		children: /* @__PURE__ */ (0, $.jsx)("div", {
			className: "selected-room-controls",
			children: /* @__PURE__ */ (0, $.jsx)(Co, {
				mode: "construct",
				label: "Selected room actions",
				children: /* @__PURE__ */ (0, $.jsx)(xn, {
					icon: "delete",
					showLabel: !0,
					label: e.selection?.kind === "multiple" ? "Delete selection" : "Delete room",
					disabled: t || c,
					disabledReason: c ? "All enclosing walls are shared. Edit the walls to remove this room." : void 0,
					onClick: e.deleteSelected
				})
			})
		})
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionHedgeLayer.tsx
function Oo({ editor: e, onDraggingChange: t }) {
	let { draft: n, selection: r, tool: i } = e, { snap: a, drag: o, handlers: s } = ni({
		draft: n,
		selection: r,
		tool: i,
		selectionKind: "hedge",
		onSelect: (t) => e.dispatch({
			type: "select",
			selection: {
				kind: "hedge",
				id: t
			}
		}),
		onUpdate: (t, n) => e.dispatch({
			type: "update-hedge",
			id: t,
			changes: {
				from: n[0],
				to: n[1]
			}
		}),
		onDraggingChange: t
	});
	return /* @__PURE__ */ (0, $.jsxs)("group", {
		name: "construction-hedges",
		children: [/* @__PURE__ */ (0, $.jsx)(rr, {
			snap: a,
			coordinates: n.coordinates
		}), (n.hedges ?? []).map((e) => {
			let t = o?.id === e.id ? o.polygon : [e.from, e.to], a = qn(t[0], t[1], n.coordinates), c = r?.kind === "hedge" && r.id === e.id;
			return /* @__PURE__ */ (0, $.jsxs)("group", { children: [/* @__PURE__ */ (0, $.jsxs)("mesh", {
				name: `construction-hedge-${e.id}`,
				position: [
					a.center[0],
					.09,
					a.center[1]
				],
				rotation: [
					0,
					a.rotationYRadians,
					0
				],
				...i === "select" ? s(e.id, t) : {},
				children: [/* @__PURE__ */ (0, $.jsx)("boxGeometry", { args: [
					a.length,
					.04,
					e.widthMeters
				] }), /* @__PURE__ */ (0, $.jsx)(tr, { color: c ? "#84a661" : "#597e43" })]
			}), c && /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(nr, {
				from: W(t[0], n.coordinates),
				to: W(t[1], n.coordinates),
				width: .035,
				elevation: .13,
				color: "#ff754d"
			}), t.map((r, i) => {
				let [a, o] = W(r, n.coordinates);
				return /* @__PURE__ */ (0, $.jsx)($r, {
					name: `construction-hedge-endpoint-${e.id}-${i}`,
					at: [
						a,
						.15,
						o
					],
					handlers: s(e.id, t, i)
				}, i);
			})] })] }, e.id);
		})]
	});
}
//#endregion
//#region apps/web/src/editor-floors/StairPlacement.tsx
function ko({ stair: e, coordinates: n, building: r, onComplete: i, onCancel: a, onDraggingChange: o }) {
	let { gl: s, camera: c } = f(), [l, u] = (0, Q.useState)(null), [d, p] = (0, Q.useState)(null), m = bo(r, l), h = (0, Q.useRef)({
		stair: e,
		coordinates: n,
		building: r,
		onComplete: i,
		onCancel: a,
		onDraggingChange: o,
		validation: m
	});
	h.current = {
		stair: e,
		coordinates: n,
		building: r,
		onComplete: i,
		onCancel: a,
		onDraggingChange: o,
		validation: m
	};
	let g = l ? Qe(r, l) : null, _ = Xe();
	(0, Q.useEffect)(() => {
		let e = s.domElement, n = new C(), r = new ht(new t(0, 1, 0), 0), i = null, a = null, o = null, l = (a) => {
			let { building: o, stair: s, coordinates: l } = h.current, u = e.getBoundingClientRect();
			n.setFromCamera(new ee((a.clientX - u.left) / u.width * 2 - 1, 1 - (a.clientY - u.top) / u.height * 2), c);
			let d = n.ray.intersectPlane(r, new t());
			if (!d) return null;
			let f = Kn({
				point: d,
				coordinates: l,
				walls: o.floors.filter((e) => e.id === s.lowerFloorId || e.id === s.upperFloorId).flatMap((e) => e.walls),
				onSnap: p,
				pixelsPerMeter: fr(c, u.height),
				pointerType: a.pointerType,
				absolute: a.altKey,
				angleOrigin: i ? K(i, l) : void 0
			}), [m, g] = W(f, l);
			return {
				x: m,
				z: g
			};
		}, d = (e) => {
			if (!i) return null;
			let t = vo(h.current.stair, h.current.coordinates, i, e);
			return u(t), t;
		}, f = () => {
			let t = a;
			a = null, t !== null && e.hasPointerCapture(t) && e.releasePointerCapture(t), h.current.onDraggingChange(!1);
		}, m = () => {
			f(), h.current.validation.cancel(), h.current.onCancel();
		}, g = (t) => {
			if (t.stopImmediatePropagation(), t.button !== 0 || a !== null || t.metaKey || t.ctrlKey || t.shiftKey) return;
			let n = l(t);
			n && (t.preventDefault(), o = zn(t.pointerId, [t.clientX, t.clientY], K(n, h.current.coordinates), !!i), i ??= n, a = t.pointerId, e.setPointerCapture(a), h.current.onDraggingChange(!0), d(n));
		}, v = (e) => {
			if (e.stopImmediatePropagation(), !i || a !== null && a !== e.pointerId) return;
			let t = l(e);
			t && d(t);
		}, y = (t) => {
			if (t.stopImmediatePropagation(), a !== t.pointerId) return;
			let n = Bn(o, t.pointerId, [t.clientX, t.clientY]), r = e.getBoundingClientRect();
			if (t.clientX < r.left || t.clientX > r.right || t.clientY < r.top || t.clientY > r.bottom) {
				m();
				return;
			}
			let i = l(t);
			if (f(), n) {
				u(null);
				return;
			}
			let s = i && d(i);
			s && (h.current.validation.flush(s), h.current.onComplete(s));
		}, b = (e) => {
			a === e.pointerId && m();
		}, x = (e) => {
			e.key === "Escape" && (e.preventDefault(), e.stopImmediatePropagation(), m());
		};
		return e.addEventListener("pointerdown", g, !0), e.addEventListener("pointermove", v, !0), e.addEventListener("pointerup", y, !0), e.addEventListener("pointercancel", b, !0), e.addEventListener("lostpointercapture", b, !0), _.events.addEventListener("keydown", x, !0), () => {
			e.removeEventListener("pointerdown", g, !0), e.removeEventListener("pointermove", v, !0), e.removeEventListener("pointerup", y, !0), e.removeEventListener("pointercancel", b, !0), e.removeEventListener("lostpointercapture", b, !0), _.events.removeEventListener("keydown", x, !0), f();
		};
	}, [s, c]);
	let v = r.floors.find((t) => t.id === e.upperFloorId);
	return /* @__PURE__ */ (0, $.jsxs)("group", {
		name: "stair-placement-preview",
		children: [
			v && /* @__PURE__ */ (0, $.jsx)(So, { floor: v }),
			/* @__PURE__ */ (0, $.jsx)(rr, {
				snap: d,
				coordinates: n
			}),
			g && /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(U, {
				flight: g,
				invalid: m.issues.length > 0
			}), /* @__PURE__ */ (0, $.jsx)(xo, {
				flight: g,
				issues: m.issues
			})] })
		]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/LowerFloorGuide.tsx
function Ao({ floor: e }) {
	return /* @__PURE__ */ (0, $.jsx)("group", {
		name: "lower-floor-guide",
		children: e.walls.map((t) => /* @__PURE__ */ (0, $.jsx)(nr, {
			from: W(t.from, e.coordinates),
			to: W(t.to, e.coordinates),
			color: "#c6c9bd",
			width: .035,
			elevation: -.012
		}, t.id))
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/SelectedOpeningControls.tsx
var jo = (0, Q.forwardRef)(function({ opening: e, detailsOpen: t, disabled: n, canDuplicate: r, onDetails: i, onChange: a, onDuplicate: o, onDelete: s }, c) {
	return /* @__PURE__ */ (0, $.jsxs)(Co, {
		ref: c,
		mode: "construct",
		label: "Selected opening actions",
		children: [
			e.kind !== "passage" && /* @__PURE__ */ (0, $.jsx)(xn, {
				icon: "details",
				label: "Details",
				pressed: t,
				disabled: n,
				onClick: i
			}),
			/* @__PURE__ */ (0, $.jsx)(xn, {
				icon: "duplicate",
				label: "Duplicate",
				disabled: n || !r,
				disabledReason: r ? void 0 : "No free space on this wall.",
				onClick: o
			}),
			/* @__PURE__ */ (0, $.jsx)(En, {
				opening: e,
				onChange: a,
				disabled: n
			}),
			/* @__PURE__ */ (0, $.jsx)("span", {
				className: "selected-item-actions__separator",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, $.jsx)(xn, {
				icon: "delete",
				label: "Delete",
				disabled: n,
				onClick: s
			})
		]
	});
});
function Mo({ opening: e, draft: n, detailsOpen: r, disabled: i, canDuplicate: a, onDetails: o, onChange: s, onDuplicate: c, onDelete: l }) {
	let { camera: u, gl: d, size: p, invalidate: m } = f(), h = (0, Q.useRef)(null), g = (0, Q.useRef)(null), _ = (0, Q.useMemo)(() => new t(), []), v = n.walls.find((t) => t.id === e.wallId);
	return (0, Q.useLayoutEffect)(() => {
		m();
	}, [
		m,
		e,
		v,
		p,
		r
	]), oe(() => {
		if (!h.current || !g.current || (g.current.style.visibility = "hidden", !v)) return;
		let t = W(v.from, n.coordinates), r = W(v.to, n.coordinates), i = Math.hypot(r[0] - t[0], r[1] - t[1]);
		if (i < 1e-4) return;
		let a = (r[0] - t[0]) / i, o = (r[1] - t[1]) / i, s = n.coordinates.metersPerPlanUnit, c = e.offsetPlanUnits * s, l = e.widthPlanUnits * s, f = (e, n) => (_.set(t[0] + a * (c + e) - o * n, .05, t[1] + o * (c + e) + a * n).project(u), {
			x: (_.x + 1) * p.width / 2,
			y: (1 - _.y) * p.height / 2,
			z: _.z
		}), m = f(l / 2, 0);
		if (m.z < -1 || m.z > 1 || m.x < 0 || m.x > p.width || m.y < 0 || m.y > p.height) return;
		let y = Fn(e, l, v.thicknessMeters ?? n.interiorWallThicknessMeters).flatMap((e) => [f(...e.from), f(...e.to)]), b = d.domElement.closest(".direction-preview")?.querySelector(".editor-header")?.getBoundingClientRect(), x = wo({
			centerX: m.x,
			itemTop: Math.min(...y.map((e) => e.y)),
			itemBottom: Math.max(...y.map((e) => e.y)),
			width: p.width,
			height: p.height,
			toolbarWidth: h.current.offsetWidth,
			toolbarHeight: h.current.offsetHeight,
			topInset: b ? b.bottom - d.domElement.getBoundingClientRect().top + 8 : 8
		});
		g.current.style.visibility = "visible", h.current.style.transform = `translate(${x.x}px, ${x.y}px)`;
	}), /* @__PURE__ */ (0, $.jsx)(B, {
		fullscreen: !0,
		calculatePosition: (e, t, n) => [n.width / 2, n.height / 2],
		zIndexRange: [6, 6],
		style: { pointerEvents: "none" },
		children: /* @__PURE__ */ (0, $.jsx)("div", {
			ref: g,
			className: "selected-item-controls",
			"data-opening-id": e.id,
			children: /* @__PURE__ */ (0, $.jsx)(jo, {
				ref: h,
				opening: e,
				detailsOpen: r,
				disabled: i,
				canDuplicate: a,
				onDetails: o,
				onChange: s,
				onDuplicate: c,
				onDelete: l
			})
		})
	});
}
//#endregion
//#region apps/web/src/editor-workspace/RetainedArrangeScene.tsx
function No({ active: e, children: t }) {
	let [n, r] = (0, Q.useState)(null);
	return e && n !== t && r(t), /* @__PURE__ */ (0, $.jsx)("group", {
		name: "retained-arrange-scene",
		visible: e,
		children: e ? t : n
	});
}
//#endregion
//#region apps/web/src/editor-preview/furnish/selection-geometry.ts
var Po = (e) => e.kind === "wall" ? e.rotationOffsetRadians : e.rotationYRadians, Fo = (e) => {
	let t = Math.PI * 2;
	return (e % t + t) % t;
}, Io = (e, t) => Math.atan2(Math.sin(e - t), Math.cos(e - t)), Lo = (e, t) => {
	let n = Na(e, t);
	return Math.hypot(Math.abs(n.center[0]) + n.size[0] / 2, Math.abs(n.center[2]) + n.size[2] / 2) + .12;
}, Ro = (0, Q.forwardRef)(function({ detailsOpen: e, isDevice: t, disabled: n, onDetails: r, onDuplicate: i, onDelete: a, onMap: o }, s) {
	return /* @__PURE__ */ (0, $.jsxs)(Co, {
		ref: s,
		label: "Selected item actions",
		children: [
			/* @__PURE__ */ (0, $.jsx)(xn, {
				icon: "details",
				label: "Details",
				pressed: e,
				disabled: n,
				onClick: r
			}),
			/* @__PURE__ */ (0, $.jsx)(xn, {
				icon: "duplicate",
				label: "Duplicate",
				disabled: n,
				onClick: i
			}),
			t && o && /* @__PURE__ */ (0, $.jsx)(xn, {
				icon: "connect",
				label: "Connect device",
				disabled: n,
				onClick: () => o?.()
			}),
			/* @__PURE__ */ (0, $.jsx)("span", {
				className: "selected-item-actions__separator",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, $.jsx)(xn, {
				icon: "delete",
				label: "Delete",
				disabled: n,
				onClick: a
			})
		]
	});
});
//#endregion
//#region apps/web/src/editor-preview/furnish/SelectedItemControls.tsx
function zo({ item: e, definition: n, floor: r, actions: i, busy: a, onRotate: o, onMovePlacement: s, onSelect: c, onBegin: l, onCommit: u, onCancel: d }) {
	let { camera: p, gl: m, size: h, invalidate: g } = f(), _ = (0, Q.useRef)(null), v = (0, Q.useRef)(null), y = (0, Q.useRef)(null), b = (0, Q.useRef)(null), x = (0, Q.useRef)(null), S = (0, Q.useRef)(null), w = (0, Q.useRef)(null), T = (0, Q.useRef)(null), E = (0, Q.useRef)(null), [D, O] = (0, Q.useState)(!1), [k, A] = (0, Q.useState)(!1), j = q(e.placement, r), M = Na(e, n), N = Lo(e, n), P = (0, Q.useMemo)(() => new t(), []), F = (0, Q.useMemo)(() => new C(), []), I = (0, Q.useMemo)(() => new ee(), []), L = (0, Q.useMemo)(() => new ht(new t(0, 1, 0)), []), R = (0, Q.useRef)({
		onCancel: d,
		onCommit: u
	});
	(0, Q.useLayoutEffect)(() => {
		R.current = {
			onCancel: d,
			onCommit: u
		};
	});
	let z = (e) => {
		let t = E.current;
		t && (E.current = null, O(!1), A(!1), e ? R.current.onCancel() : R.current.onCommit(), t.target.hasPointerCapture?.(t.pointerId) && t.target.releasePointerCapture(t.pointerId));
	}, te = Xe();
	(0, Q.useEffect)(() => {
		let e = (e) => {
			e.key !== "Escape" || !E.current || (e.preventDefault(), e.stopPropagation(), z(!0));
		}, t = () => z(!0);
		return te.events.addEventListener("keydown", e, !0), window.addEventListener("blur", t), () => {
			te.events.removeEventListener("keydown", e, !0), window.removeEventListener("blur", t), E.current && (E.current = null, R.current.onCancel());
		};
	}, []), (0, Q.useLayoutEffect)(() => {
		g();
	}, [
		p,
		g,
		e,
		h
	]);
	let ne = (e, t) => {
		let n = m.domElement.getBoundingClientRect();
		return F.setFromCamera(I.set((e.clientX - n.left) / n.width * 2 - 1, -(e.clientY - n.top) / n.height * 2 + 1), p), L.constant = -t, F.ray.intersectPlane(L, P);
	}, re = (e) => {
		let t = ne(e, j.position[1]);
		return t ? Math.atan2(t.z - j.position[2], t.x - j.position[0]) : null;
	};
	oe(() => {
		if (!_.current || !v.current) return;
		let e = (e, t, n) => (P.set(e, t, n).project(p), {
			x: (P.x + 1) * h.width / 2,
			y: (1 - P.y) * h.height / 2,
			z: P.z
		}), [t, n, r] = j.position, i = e(t, n, r), a = i.z >= -1 && i.z <= 1 && i.x >= 0 && i.x <= h.width && i.y >= 0 && i.y <= h.height;
		if (_.current.style.visibility = a ? "visible" : "hidden", !a) return;
		let o = e(t + 1, n, r), s = e(t, n, r + 1), c = Math.max(Math.hypot(o.x - i.x, o.y - i.y), Math.hypot(s.x - i.x, s.y - i.y), 1), l = Math.max(N, 72 / c), u = Array.from({ length: 65 }, (i, a) => {
			let o = a / 64 * Math.PI * 2;
			return e(t + Math.cos(o) * l, n, r + Math.sin(o) * l);
		}), d = u.map((e, t) => `${t ? "L" : "M"}${e.x.toFixed(2)},${e.y.toFixed(2)}`).join(" ") + " Z";
		y.current?.setAttribute("d", d), b.current?.setAttribute("d", d);
		let f = u.reduce((e, t) => e.x < t.x ? e : t), g = u.reduce((e, t) => e.x > t.x ? e : t), C = u.reduce((e, t) => e.y < t.y ? e : t), E = u.reduce((e, t) => e.y > t.y ? e : t), D = (e, t) => {
			e && (e.style.transform = `translate(${Math.max(24, Math.min(h.width - 24, t.x))}px, ${Math.max(24, Math.min(h.height - 24, t.y))}px) translate(-50%, -50%)`);
		};
		D(x.current, f), D(S.current, i), D(w.current, g);
		let O = [], k = Math.cos(j.rotationYRadians), A = Math.sin(j.rotationYRadians);
		for (let i of [-1, 1]) for (let a of [-1, 1]) for (let o of [-1, 1]) {
			let s = M.center[0] + i * M.size[0] / 2, c = M.center[2] + o * M.size[2] / 2;
			O.push(e(t + s * k + c * A, n + M.center[1] + a * M.size[1] / 2, r - s * A + c * k));
		}
		let F = m.domElement.getBoundingClientRect(), I = m.domElement.closest(".direction-preview")?.querySelector(".editor-header")?.getBoundingClientRect(), L = wo({
			centerX: (Math.min(...O.map((e) => e.x)) + Math.max(...O.map((e) => e.x))) / 2,
			itemTop: Math.min(...O.map((e) => e.y)),
			itemBottom: Math.max(...O.map((e) => e.y)),
			width: h.width,
			height: h.height,
			toolbarWidth: v.current.offsetWidth,
			toolbarHeight: v.current.offsetHeight,
			topInset: I ? I.bottom - F.top + 8 : 8
		});
		v.current.style.transform = `translate(${L.x}px, ${L.y}px)`;
		let R = Math.min(h.height - 24, E.y + 25), z = E.x + 24 > L.x && E.x - 24 < L.x + v.current.offsetWidth && R + 14 > L.y && R - 14 < L.y + v.current.offsetHeight;
		D(T.current, z ? {
			x: C.x,
			y: C.y - 25
		} : {
			x: E.x,
			y: R
		});
	});
	let ie = Po(e.placement), ae = (t) => o(e.id, Fo(ie + t * Math.PI / 2));
	return /* @__PURE__ */ (0, $.jsx)(B, {
		fullscreen: !0,
		calculatePosition: (e, t, n) => [n.width / 2, n.height / 2],
		zIndexRange: [6, 6],
		style: { pointerEvents: "none" },
		children: /* @__PURE__ */ (0, $.jsxs)("div", {
			ref: _,
			className: "selected-item-controls",
			"data-item-id": e.id,
			"data-rotating": D,
			"data-moving": k,
			onPointerDown: (e) => e.stopPropagation(),
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, $.jsxs)("svg", {
					className: "selected-item-ring",
					"aria-label": `Rotation ring for ${n.label}`,
					children: [/* @__PURE__ */ (0, $.jsx)("path", {
						ref: y,
						className: "selected-item-ring__line"
					}), /* @__PURE__ */ (0, $.jsx)("path", {
						ref: b,
						className: "selected-item-ring__target",
						style: { pointerEvents: a && !D ? "none" : void 0 },
						onClick: (e) => e.stopPropagation(),
						onPointerDown: (e) => {
							if (e.button !== 0 || a || E.current) return;
							e.preventDefault(), e.stopPropagation();
							let t = re(e);
							t !== null && (e.currentTarget.setPointerCapture(e.pointerId), E.current = {
								kind: "rotation",
								pointerId: e.pointerId,
								target: e.currentTarget,
								previousAngle: t,
								rotation: ie
							}, O(!0), l());
						},
						onPointerMove: (t) => {
							let n = E.current;
							if (n?.kind !== "rotation" || n.pointerId !== t.pointerId) return;
							t.stopPropagation();
							let r = re(t);
							r !== null && (n.rotation += Io(n.previousAngle, r), n.previousAngle = r, o(e.id, Fo(n.rotation)));
						},
						onPointerUp: (e) => {
							e.stopPropagation(), e.pointerId === E.current?.pointerId && z(!1);
						},
						onPointerCancel: () => z(!0),
						onLostPointerCapture: () => z(!0)
					})]
				}),
				/* @__PURE__ */ (0, $.jsx)("div", {
					ref: x,
					className: "selected-item-rotation-button",
					children: /* @__PURE__ */ (0, $.jsx)(xn, {
						icon: "rotateLeft",
						label: "Rotate counterclockwise 90°",
						disabled: a,
						onClick: () => ae(1)
					})
				}),
				/* @__PURE__ */ (0, $.jsx)("div", {
					ref: S,
					className: "selected-item-rotation-button selected-item-move-button",
					onPointerDown: (t) => {
						if (t.button !== 0 || a || E.current) return;
						t.preventDefault(), t.stopPropagation();
						let n = ne(t, j.position[1]);
						n && (t.currentTarget.setPointerCapture(t.pointerId), E.current = {
							kind: "move",
							pointerId: t.pointerId,
							target: t.currentTarget,
							elevation: j.position[1],
							offsetX: j.position[0] - n.x,
							offsetZ: j.position[2] - n.z
						}, A(!0), c(e.id), l());
					},
					onPointerMove: (t) => {
						let i = E.current;
						if (i?.kind !== "move" || i.pointerId !== t.pointerId) return;
						t.stopPropagation();
						let a = ne(t, i.elevation);
						a && s(e.id, Aa({
							world: {
								x: a.x + i.offsetX,
								z: a.z + i.offsetZ
							},
							item: e,
							definition: n,
							floor: r,
							raw: t.altKey
						}));
					},
					onPointerUp: (e) => {
						e.stopPropagation(), e.pointerId === E.current?.pointerId && z(!1);
					},
					onPointerCancel: () => z(!0),
					onLostPointerCapture: () => z(!0),
					children: /* @__PURE__ */ (0, $.jsx)(xn, {
						icon: "move",
						label: "Drag to move",
						disabled: a && !k,
						onClick: () => c(e.id)
					})
				}),
				/* @__PURE__ */ (0, $.jsx)("div", {
					ref: w,
					className: "selected-item-rotation-button",
					children: /* @__PURE__ */ (0, $.jsx)(xn, {
						icon: "rotateRight",
						label: "Rotate clockwise 90°",
						disabled: a,
						onClick: () => ae(-1)
					})
				}),
				/* @__PURE__ */ (0, $.jsxs)("output", {
					ref: T,
					className: "selected-item-angle",
					"aria-label": "Rotation angle",
					children: [Number((Fo(ie) * 180 / Math.PI).toFixed(1)), "°"]
				}),
				/* @__PURE__ */ (0, $.jsx)(Ro, {
					ref: v,
					...i,
					isDevice: e.kind === "device",
					disabled: a
				})
			]
		})
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/RoomNameControl.tsx
function Bo({ roomId: e, name: t, disabled: n, focusRequest: r, onFocusRequestHandled: i, onCommit: a }) {
	let [o, s] = (0, Q.useState)(!1), [c, l] = (0, Q.useState)(t), u = (0, Q.useRef)(!1), d = (0, Q.useRef)(null), f = (0, Q.useRef)(null);
	return (0, Q.useLayoutEffect)(() => {
		r?.roomId === e && !n && (u.current = !1, l(t), s(!0), i?.());
	}, [r]), (0, Q.useLayoutEffect)(() => {
		o && (d.current?.focus({ preventScroll: !0 }), d.current?.select());
	}, [o]), (0, Q.useEffect)(() => {
		n && (u.current = !0, s(!1));
	}, [n]), /* @__PURE__ */ (0, $.jsx)("span", {
		className: "construction-room-name",
		style: { pointerEvents: n ? "none" : "auto" },
		onPointerDown: (e) => e.stopPropagation(),
		onPointerUp: (e) => e.stopPropagation(),
		onClick: (e) => e.stopPropagation(),
		onDoubleClick: (e) => e.stopPropagation(),
		onKeyDown: (e) => e.stopPropagation(),
		children: o ? /* @__PURE__ */ (0, $.jsx)("input", {
			ref: d,
			"aria-label": "Room name on plan",
			maxLength: 80,
			value: c,
			placeholder: "e.g. Living room",
			onChange: (e) => l(e.target.value),
			onBlur: () => {
				!u.current && !n && c.trim() && c.trim() !== t && a(c.trim()), u.current = !1, s(!1);
			},
			onKeyDown: (e) => {
				(e.key === "Enter" || e.key === "Escape") && (e.preventDefault(), u.current = e.key === "Escape", e.currentTarget.blur(), requestAnimationFrame(() => f.current?.focus({ preventScroll: !0 })));
			}
		}) : /* @__PURE__ */ (0, $.jsxs)("button", {
			ref: f,
			type: "button",
			disabled: n,
			"aria-label": t ? `Rename ${t}` : "Name room",
			onClick: () => {
				u.current = !1, l(t), s(!0);
			},
			children: [t || "Name room", /* @__PURE__ */ (0, $.jsx)("span", {
				"aria-hidden": "true",
				children: " ✎"
			})]
		})
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionPlan.tsx
var Vo = (0, Q.memo)(function({ room: e, coordinates: t, namingDisabled: n, nameFocusRequest: r, onNameFocusHandled: i, onRoomNameChange: a }) {
	let o = Xe(), s = (0, Q.useRef)(null), c = (0, Q.useMemo)(() => Ot(e.polygon, t), [e.polygon, t]), l = (0, Q.useMemo)(() => Math.abs(De(e.polygon)) * t.metersPerPlanUnit ** 2, [e.polygon, t.metersPerPlanUnit]);
	oe(({ camera: e }) => {
		if (!s.current || !("zoom" in e)) return;
		let t = c.width * Number(e.zoom), n = c.depth * Number(e.zoom), r = !!s.current.querySelector("input") || s.current.contains(o.root.activeElement);
		s.current.style.visibility = !r && (t < 56 || n < 28) ? "hidden" : "visible", s.current.style.maxWidth = `${Math.min(130, t * .85)}px`, s.current.style.fontSize = t < 100 ? "9px" : "11px";
	});
	let [u, d] = W(Rt(e.polygon), t);
	return /* @__PURE__ */ (0, $.jsx)("group", {
		name: `plan-room-${e.id}`,
		children: typeof document < "u" && /* @__PURE__ */ (0, $.jsx)(B, {
			position: [
				u,
				.025,
				d
			],
			center: !0,
			zIndexRange: [2, 0],
			style: { pointerEvents: "none" },
			children: /* @__PURE__ */ (0, $.jsxs)("span", {
				ref: s,
				className: "construction-plan__room-label",
				children: [a ? /* @__PURE__ */ (0, $.jsx)(Bo, {
					roomId: e.id,
					name: e.name,
					disabled: !!n,
					focusRequest: r,
					onFocusRequestHandled: i,
					onCommit: (t) => a(e.id, t)
				}) : e.name, /* @__PURE__ */ (0, $.jsxs)("span", {
					className: "construction-plan__room-area",
					children: [l.toFixed(1), " m²"]
				})]
			})
		})
	});
}), Ho = (0, Q.memo)(function({ floor: e, items: t, furnishingModels: n, deviceModels: r, ...i }) {
	let a = (0, Q.useMemo)(() => {
		let i = [];
		for (let a of t) {
			let t = a.kind === "device" ? r[a.modelId] : n[a.modelId];
			if (!t) continue;
			let o;
			try {
				o = q(a.placement, e);
			} catch {
				continue;
			}
			let s = Na(a, a.kind === "device" ? {
				...t,
				defaultSize: t.bounds.max.map((e, n) => e - t.bounds.min[n])
			} : t), [c, , l] = s.center, [u, , d] = s.size, f = [
				[c - u / 2, l - d / 2],
				[c + u / 2, l - d / 2],
				[c + u / 2, l + d / 2],
				[c - u / 2, l + d / 2]
			], p = Math.cos(o.rotationYRadians), m = Math.sin(o.rotationYRadians), h = (e) => [o.position[0] + p * e[0] + m * e[1], o.position[2] - m * e[0] + p * e[1]];
			f.forEach((e, t) => i.push({
				from: h(e),
				to: h(f[(t + 1) % 4]),
				color: "#b6b5a8",
				width: .018,
				elevation: .009
			}));
		}
		return i;
	}, [
		t,
		e,
		n,
		r
	]);
	return /* @__PURE__ */ (0, $.jsxs)("group", {
		name: "construction-plan",
		children: [
			/* @__PURE__ */ (0, $.jsx)(At, {
				floor: e,
				variant: "plan"
			}),
			e.rooms.map((t) => /* @__PURE__ */ (0, $.jsx)(Vo, {
				room: t,
				coordinates: e.coordinates,
				...i
			}, t.id)),
			/* @__PURE__ */ (0, $.jsx)(ar, {
				name: "plan-footprints",
				strokes: a
			})
		]
	});
});
//#endregion
//#region apps/web/src/editor-preview/construct/plan-wheel-navigation.ts
function Uo(e, n, r, i, a, o) {
	if (!i.width || !i.height) return;
	let s = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? i.height : 1;
	n.updateMatrixWorld();
	let c = new t().setFromMatrixColumn(n.matrixWorld, 0), l = new t().setFromMatrixColumn(n.matrixWorld, 1), u = (n.right - n.left) / n.zoom, d = (n.top - n.bottom) / n.zoom, f = new t();
	if (e.ctrlKey || e.metaKey) {
		let t = n.zoom;
		n.zoom = Math.max(a, Math.min(o, t * Math.exp(-e.deltaY * s * .01)));
		let r = 1 - t / n.zoom;
		f.addScaledVector(c, ((e.clientX - i.left) / i.width - .5) * u * r), f.addScaledVector(l, (.5 - (e.clientY - i.top) / i.height) * d * r), n.updateProjectionMatrix();
	} else f.addScaledVector(c, e.deltaX * s * u / i.width), f.addScaledVector(l, -e.deltaY * s * d / i.height);
	n.position.add(f), r.add(f);
}
//#endregion
//#region apps/web/src/editor-preview/PreviewCamera.tsx
function Wo(e) {
	let { view: t, resetKey: n, savedCamera: r, floor: i } = e, a = (0, Q.useRef)(i.id), o = (0, Q.useRef)(r.current), s = (0, Q.useRef)(n);
	a.current !== i.id && (a.current = i.id, o.current = r.current, s.current = n);
	let c = s.current === n && o.current?.view === t ? o.current : null;
	return /* @__PURE__ */ (0, $.jsx)(Go, {
		...e,
		restored: c
	}, `${t}-${n}`);
}
function Go({ view: e, floor: n, controlsEnabled: r, focusPoint: i, focusRoomId: a, onTargetChange: o, savedCamera: s, restored: c, planWheelNavigation: l }) {
	let { width: u, height: d } = f((e) => e.size), p = f((e) => e.gl.domElement), m = f((e) => e.invalidate), h = (0, Q.useRef)(null), { origin: [g, _], metersPerPlanUnit: v } = n.coordinates, y = (0, Q.useCallback)(() => {
		let n = h.current?.target, r = h.current?.object;
		n && r && (s.current = {
			view: e,
			position: r.position.toArray(),
			target: n.toArray(),
			zoom: r.zoom
		}), n && r && o([n.x / v + g, n.z / v + _], (e) => {
			let n = new t(e[0], e[1], e[2]).project(r);
			return Math.abs(n.x) < .9 && Math.abs(n.y) < .9 && n.z >= -1 && n.z <= 1;
		});
	}, [
		v,
		o,
		g,
		_,
		s,
		e
	]);
	(0, Q.useEffect)(() => {
		if (!l || e !== "top") return;
		let t = (e) => {
			let t = h.current, n = t?.object;
			!t || !n?.isOrthographicCamera || (e.preventDefault(), e.stopImmediatePropagation(), Uo(e, n, t.target, p.getBoundingClientRect(), t.minZoom, t.maxZoom), t.update(), y(), m());
		};
		return p.addEventListener("wheel", t, {
			capture: !0,
			passive: !1
		}), () => p.removeEventListener("wheel", t, !0);
	}, [
		p,
		y,
		m,
		l,
		e
	]);
	let [b] = (0, Q.useState)(() => {
		if (c) return c;
		let t = n.rooms.find((e) => e.id === a), r = t ? Ot(t.polygon, n.coordinates) : at(n), o = Math.max(r.width, r.depth, 2), s = Math.max(8, Math.min(110, u / (r.width * 1.48), d / (r.depth * 1.58))), l = i ? (i[0] - n.coordinates.origin[0]) * n.coordinates.metersPerPlanUnit : r.centerX, f = i ? (i[1] - n.coordinates.origin[1]) * n.coordinates.metersPerPlanUnit : r.centerZ;
		return {
			position: e === "top" ? [
				l,
				o * 2.2 + 4,
				f + .001
			] : [
				l + o * .42,
				o * .72 + 2.8,
				f + o * .48
			],
			target: [
				l,
				.2,
				f
			],
			zoom: t && e === "3d" ? s * .7 : i && !t ? Math.min(180, s * 2.25) : s
		};
	});
	return /* @__PURE__ */ (0, $.jsxs)("group", { children: [/* @__PURE__ */ (0, $.jsx)(Lt, {
		makeDefault: !0,
		position: b.position,
		zoom: b.zoom,
		near: .1,
		far: 150
	}), /* @__PURE__ */ (0, $.jsx)(we, {
		ref: h,
		makeDefault: !0,
		enabled: r,
		target: b.target,
		onChange: y,
		enablePan: !0,
		enableRotate: e === "3d",
		enableZoom: !0,
		minPolarAngle: 0,
		maxPolarAngle: e === "top" ? .01 : 1.28,
		minZoom: 8,
		maxZoom: 180,
		zoomToCursor: !0
	})] });
}
//#endregion
//#region apps/web/src/editor-workspace/HomeEditorScene.tsx
var Ko = () => void 0;
function qo({ onNameFocusHandled: e, cameraFocusRoomId: t, nameFocusRequest: n, placingWalkStart: r, onWalkStartPlaced: i, selectSceneItem: a, stairDialog: o, floorNavigation: s, activeFloorId: c, stairPlacement: u, setStairPlacement: d, setStairDialog: f, showFloorBelow: p, lowerFloor: m, commit: h, snapshot: g, connectFloor: _, mode: v, editingLocked: y, publishOpen: b, previewOpen: x, connectManifest: S, connect: C, clearConstructionSelection: T, clearFurnishingSelection: E, cameraView: D, cameraResetKey: O, constructEditor: k, dragging: A, cameraFocusPoint: j, handleCameraTargetChange: M, savedCamera: N, previewSceneItems: P, displayedContextualIssues: F, activeIssueKey: I, issueFocusVersion: L, poolDrawing: R, floorZoneDrawing: z, focusIssue: ee, furnishingModels: te, deviceModels: ne, visualManifest: re, selectedRoomId: B, editorResolvedBindings: ie, marqueeSelecting: ae, floorPaintTarget: oe, requestRoomPaint: se, setDragging: ce, constructMeasure: le, setSelectedRoomId: ue, setMarqueeSelecting: de, selectedOpening: V, detailsOpeningId: fe, setDetailsOpeningId: pe, duplicateConstructionOpening: H, visualSceneItems: me, furnishingEditor: U, selectedItem: he, selectedDefinition: ge, detailsItemId: _e, setDetailsItemId: ve, unsettled: ye, selectMode: be, duplicateArrangeItem: xe, deleteSceneItem: Se }) {
	let W = dt(re.floors), Ce = W.find((e) => e.floorId === c)?.elevationMeters ?? 0;
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: `direction-preview__model${v === "connect" ? " connect-map" : ""}`,
		"aria-label": v === "connect" ? "Home connection map" : v === "construct" ? "2D construction plan" : "3D home editor",
		inert: y || b || x,
		children: [v === "connect" && /* @__PURE__ */ (0, $.jsx)(et, {
			floor: _,
			selectedRoomId: C.roomId,
			roomDeviceSummaries: C.roomDeviceSummaries,
			inspectorOpen: !1,
			showFitControl: !1,
			onActivateRoom: C.selectRoom,
			connectedRoomIds: new Set(_.rooms.filter((e) => C.displayRuntime.areas.some((t) => t.area_id === C.profile.roomAreaIds[e.id])).map((e) => e.id)),
			relationshipLabels: Object.fromEntries(_.rooms.map((e) => [e.id, C.displayRuntime.areas.find((t) => t.area_id === C.profile.roomAreaIds[e.id])?.name ?? (C.profile.roomAreaIds[e.id] ? "Saved area unavailable" : "Not connected")])),
			roomIcons: Object.fromEntries(_.rooms.map((e) => [e.id, C.displayRuntime.areas.find((t) => t.area_id === C.profile.roomAreaIds[e.id])?.icon ?? null]))
		}), /* @__PURE__ */ (0, $.jsx)("div", {
			hidden: v === "connect",
			style: {
				width: "100%",
				height: "100%"
			},
			children: /* @__PURE__ */ (0, $.jsx)(Pt, {
				events: w,
				tabIndex: 0,
				"aria-label": "Home editor canvas",
				onPointerDownCapture: (e) => {
					e.target instanceof HTMLCanvasElement && e.currentTarget.focus({ preventScroll: !0 });
				},
				onPointerMissed: (e) => {
					e.type === "click" && e.button === 0 && (v === "construct" ? T() : v === "furnish" && E());
				},
				shadows: !1,
				dpr: 1,
				frameloop: "demand",
				gl: {
					antialias: !0,
					powerPreference: "high-performance"
				},
				children: /* @__PURE__ */ (0, $.jsxs)(Q.Suspense, {
					fallback: null,
					children: [/* @__PURE__ */ (0, $.jsxs)(l, {
						active: v === "furnish",
						children: [
							v !== "construct" && /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("hemisphereLight", { args: [
								"#ecf4ff",
								"#768b93",
								.95
							] }), /* @__PURE__ */ (0, $.jsx)("directionalLight", {
								position: [
									7,
									12,
									8
								],
								color: "#fff0d7",
								intensity: 1.8,
								castShadow: !1
							})] }),
							v === "construct" && /* @__PURE__ */ (0, $.jsx)(_o, {
								floor: k.previewFloor,
								start: g.project.home.walkStart,
								placing: r,
								onPlace: (e) => {
									h({
										...g,
										project: {
											...g.project,
											home: {
												...g.project.home,
												walkStart: {
													floorId: c,
													at: e
												}
											}
										}
									}), i();
								}
							}),
							v === "construct" && /* @__PURE__ */ (0, $.jsx)(go, {}),
							/* @__PURE__ */ (0, $.jsx)(Wo, {
								planWheelNavigation: v === "construct" || v === "furnish",
								view: v === "construct" ? "top" : D,
								resetKey: O,
								floor: k.previewFloor,
								controlsEnabled: !A && !r,
								focusPoint: j,
								focusRoomId: t,
								onTargetChange: M,
								savedCamera: N
							}),
							/* @__PURE__ */ (0, $.jsx)(Ri, {
								planMode: v === "construct",
								floor: k.previewFloor,
								sceneItems: P,
								issues: v === "construct" ? F.filter((e) => e.code !== "room.name" && e.code !== "topology.room-name") : F,
								activeIssueKey: I,
								focusVersion: L,
								showLabels: v !== "construct" || !A && !k.drawStart && !R.active && !z.active,
								onActivate: ee
							}),
							v === "construct" && p && !u && !(A && o) && m && /* @__PURE__ */ (0, $.jsx)(Ao, { floor: m }),
							v === "construct" && g.project.stairs.map((e) => {
								if (e.lowerFloorId !== c && e.upperFloorId !== c) return null;
								let t = o?.id === e.id && k.tool === "select" && !u, n = e.lowerFloorId === c ? e.upperFloorId : e.lowerFloorId;
								return /* @__PURE__ */ (0, $.jsx)(Eo, {
									building: g.project,
									stair: e,
									activeFloorId: c,
									selected: t,
									enabled: k.tool === "select" && !u && !y,
									onSelect: () => {
										T(), f(e);
									},
									onDraggingChange: ce,
									onCommit: (e) => h({
										...g,
										project: {
											...g.project,
											stairs: g.project.stairs.map((t) => t.id === e.id ? e : t)
										}
									}),
									onGoToFloor: () => s.selectFloor(n),
									onDelete: () => {
										h({
											...g,
											project: {
												...g.project,
												stairs: g.project.stairs.filter((t) => t.id !== e.id)
											}
										}), f(null);
									}
								}, e.id);
							}),
							v === "construct" ? /* @__PURE__ */ (0, $.jsx)(Ho, {
								nameFocusRequest: n,
								onNameFocusHandled: e,
								namingDisabled: y || b || x || ye || !!k.drawStart || r || ae,
								onRoomNameChange: (e, t) => k.updateRoom(e, { name: t }),
								floor: k.previewFloor,
								items: P,
								furnishingModels: te,
								deviceModels: ne
							}) : null,
							/* @__PURE__ */ (0, $.jsx)(No, {
								active: v === "furnish",
								children: /* @__PURE__ */ (0, $.jsx)(mt, {
									manifest: re,
									activeFloorId: c,
									floorView: D === "top" ? "plan" : "cutaway",
									interactionMode: "editor",
									architectureModels: ot,
									selectedRoomId: B,
									walkMode: !1,
									wallFadeEnabled: D === "3d",
									reducedMotion: !0,
									resolvedBindings: ie,
									deviceModels: ne,
									openingPositions: {},
									onInteract: Ko
								})
							}),
							v === "construct" && /* @__PURE__ */ (0, $.jsx)(si, {
								draft: k.draft,
								floor: k.previewFloor,
								selection: ae ? null : k.selection,
								deletionTargets: ae ? [] : k.deletionTargets,
								tool: k.tool,
								paintTarget: oe,
								drawingPoints: z.points,
								drawingPreview: z.preview,
								drawingRoomId: z.roomId,
								onPaintRoom: se,
								onSelectZone: k.selectFloorZone,
								onUpdateZone: (e, t) => k.updateFloorZone(e, { polygon: t }),
								onDraggingChange: ce
							}),
							v === "construct" && /* @__PURE__ */ (0, $.jsx)(Zr, {
								doorConfiguration: k.doorConfiguration,
								referenceWalls: p ? m?.walls : void 0,
								planMode: !0,
								draft: k.draft,
								coordinates: k.previewFloor.coordinates,
								rooms: k.previewFloor.rooms,
								selection: k.selection,
								deletionTargets: k.deletionTargets,
								previewFloor: k.previewFloor,
								wallRuns: k.wallRuns,
								tool: k.tool,
								drawStart: k.tool === "pool" ? R.points.at(-1) ?? null : k.drawStart,
								drawPreview: k.tool === "pool" ? R.preview : k.drawPreview,
								drawAngleReferenceRadians: k.tool === "wall" ? k.drawAngleReferenceRadians : null,
								wallExteriorColor: k.exteriorWallColor,
								poolPoints: R.points,
								floorPaintTarget: oe,
								floorZonePoints: z.points,
								floorZonePreview: z.preview,
								onCancelFloorZone: z.cancel,
								measurePhase: le.phase,
								onSelectWall: (e) => {
									ue(null), k.selectWall(e);
								},
								onSelectOpening: (e) => {
									ue(null), k.selectOpening(e);
								},
								onSelectRoom: k.selectRoom,
								onSelectMany: k.selectMany,
								onClearSelection: T,
								onMoveEndpoint: k.updateWallEndpoint,
								onTranslateWall: k.translateWall,
								onMoveOpening: k.moveOpening,
								onResizeOpening: k.resizeSelectedOpening,
								onPlaceOpening: k.placeOpening,
								onBeginWall: k.tool === "pool" ? R.place : k.beginWall,
								onPreviewWall: k.tool === "pool" ? R.previewPoint : k.previewWall,
								onAddWall: k.tool === "pool" ? R.place : k.addWall,
								onCancelWall: k.tool === "pool" ? R.cancel : k.cancelWall,
								onPlaceMeasure: le.place,
								onPreviewMeasure: le.preview,
								onPlaceFloorZonePoint: z.place,
								onPreviewFloorZonePoint: z.previewPoint,
								onDraggingChange: ce,
								onMarqueeChange: de
							}),
							v === "construct" && !y && /* @__PURE__ */ (0, $.jsx)(Oo, {
								editor: k,
								onDraggingChange: ce
							}),
							v === "construct" && /* @__PURE__ */ (0, $.jsx)(ii, {
								draft: k.draft,
								selection: ae ? null : k.selection,
								tool: k.tool,
								points: R.points,
								preview: R.preview,
								deletionTargets: ae ? [] : k.deletionTargets,
								onSelect: k.selectPool,
								onUpdate: k.updatePool,
								onDraggingChange: ce
							}),
							v === "construct" && !ae && /* @__PURE__ */ (0, $.jsx)(Do, {
								editor: k,
								disabled: A || y
							}),
							v === "construct" && !ae && V && /* @__PURE__ */ (0, $.jsx)(Mo, {
								opening: V,
								draft: k.draft,
								detailsOpen: fe === V.id,
								disabled: A || y,
								canDuplicate: k.canDuplicateOpening(V.id),
								onDetails: () => pe((e) => e === V.id ? null : V.id),
								onChange: (e) => k.dispatch({
									type: "reorient-opening",
									openingId: V.id,
									change: e
								}),
								onDuplicate: () => H(V.id),
								onDelete: k.deleteSelected
							}, V.id),
							v === "construct" && k.tool === "measure" && /* @__PURE__ */ (0, $.jsx)(Ii, {
								planMode: !0,
								measurement: le.measurement,
								preview: le.phase === "drawing",
								onCopy: (e) => void navigator.clipboard?.writeText(e)
							}),
							v === "furnish" && D === "top" && /* @__PURE__ */ (0, $.jsx)($a, { floor: k.previewFloor }),
							v === "furnish" && D === "3d" && re.floors.slice(0, re.floors.findIndex((e) => e.id === c)).map((e) => /* @__PURE__ */ (0, $.jsx)("group", {
								position: [
									0,
									(W.find((t) => t.floorId === e.id)?.elevationMeters ?? 0) - Ce,
									0
								],
								children: /* @__PURE__ */ (0, $.jsx)(qa, {
									items: re.sceneItems.filter((t) => t.floorId === e.id),
									floor: e,
									furnishingModels: te,
									deviceModels: ne,
									selectedId: null,
									selectionOnly: !0,
									onSelect: a,
									onMovePlacement: Ko
								})
							}, e.id)),
							v === "furnish" && /* @__PURE__ */ (0, $.jsx)(qa, {
								items: me,
								floor: k.previewFloor,
								furnishingModels: te,
								deviceModels: ne,
								selectedId: U.selectedId,
								selectedIds: U.selectedIds,
								onSelectMany: U.selectMany,
								onSelect: U.select,
								onMovePlacements: U.updatePlacements,
								onMovePlacement: U.updatePlacement,
								onDragStart: U.beginTransaction,
								onDragEnd: U.commitTransaction,
								onDragCancel: U.cancelTransaction,
								onDraggingChange: ce
							}),
							v === "furnish" && he && ge && /* @__PURE__ */ (0, $.jsx)(zo, {
								item: he,
								definition: ge,
								floor: k.previewFloor,
								busy: A || !!U.transaction,
								onRotate: U.rotate,
								onMovePlacement: U.updatePlacement,
								onSelect: U.select,
								onBegin: () => {
									U.beginTransaction(), ce(!0);
								},
								onCommit: () => {
									U.commitTransaction(), ce(!1);
								},
								onCancel: () => {
									U.cancelTransaction(), ce(!1);
								},
								actions: {
									detailsOpen: _e === he.id,
									onDetails: () => ve((e) => e === he.id ? null : he.id),
									onMap: he.kind === "device" && he.entitySlots.length > 0 && !ye ? () => {
										C.selectDevice(he.id) && be("connect", !0);
									} : void 0,
									onDuplicate: () => xe(he.id),
									onDelete: () => Se(he.id)
								}
							}, he.id)
						]
					}), u && /* @__PURE__ */ (0, $.jsx)(ko, {
						building: g.project,
						stair: u,
						coordinates: g.project.coordinates,
						onDraggingChange: ce,
						onCancel: () => d(null),
						onComplete: (e) => {
							let t = {
								...g.project,
								stairs: [...g.project.stairs, e]
							};
							h({
								...g,
								project: t
							}), d(null), f(e);
						}
					})]
				})
			})
		})]
	});
}
//#endregion
//#region apps/web/src/editor-workspace/useEditorValidation.ts
function Jo({ editorProject: e, constructEditor: t, previewSceneItems: n, ceilingDependencies: r, walkNavigation: i, mode: a }) {
	let o = (0, Q.useMemo)(() => {
		try {
			return Se(e, Nt);
		} catch {
			return {
				valid: !1,
				issues: [{
					code: "project.publish-validation",
					path: "$",
					message: "The draft could not be validated for applying.",
					severity: "error"
				}]
			};
		}
	}, [e]), s = (0, Q.useMemo)(() => mn({
		floor: t.previewFloor,
		sceneItems: n,
		topologyIssues: t.topologyIssues,
		projectIssues: o.issues,
		dependencyIssues: r.issues,
		navigationIssues: i.diagnostics
	}), [
		r.issues,
		t.previewFloor,
		t.topologyIssues,
		n,
		o.issues,
		i.diagnostics
	]);
	return {
		contextualIssues: s,
		displayedContextualIssues: (0, Q.useMemo)(() => pn(s, a === "construct" ? t.tool : null, {
			floor: t.previewFloor,
			floorIndex: e.floors.findIndex((e) => e.id === t.previewFloor.id),
			hasItems: n.length > 0
		}), [
			s,
			a,
			t.tool,
			t.previewFloor,
			e.floors,
			n.length
		])
	};
}
//#endregion
//#region apps/web/src/editor-workspace/useHomeEditorShortcuts.ts
function Yo({ clearConstructionSelection: e, clearFurnishingSelection: t, constructEditor: n, constructMeasure: r, dragging: i, duplicateArrangeItem: a, duplicateConstructionOpening: o, editingLocked: s, floorZoneDrawing: c, furnishingEditor: l, marqueeSelecting: u, mode: d, pendingRoomPaintId: f, previewOpen: p, publishOpen: m, redoProject: h, selectedOpening: g, undoProject: _, setPendingRoomPaintId: v, setDragging: y }) {
	let b = Xe(), x = (0, Q.useRef)(null);
	(0, Q.useEffect)(() => {
		if (s || p || m) return;
		let S = (s) => {
			if (s.defaultPrevented || s.isComposing || d === "furnish" && l.transaction) return;
			let p = s.target;
			if (p instanceof HTMLElement && (p.closest("input, textarea, select, dialog[open]") || p.isContentEditable) || p instanceof HTMLElement && p.closest(".construction-room-name, .build-tutorial") && !s.metaKey && !s.ctrlKey) return;
			let m = s.key.toLowerCase(), S = (s.metaKey || s.ctrlKey) && !s.altKey;
			if (S && m === "z") {
				s.preventDefault(), s.shiftKey ? h() : _();
				return;
			}
			if (s.ctrlKey && !s.metaKey && !s.altKey && m === "y") {
				s.preventDefault(), h();
				return;
			}
			if (!b.root.querySelector(".shortcuts-workspace") && d !== "connect") {
				if (S && !s.shiftKey && (m === "c" || m === "v")) {
					if (i) return;
					if (m === "c") {
						d === "construct" && g ? (x.current = {
							mode: d,
							id: g.id
						}, s.preventDefault()) : d === "furnish" && l.selectedItem && (x.current = {
							mode: d,
							id: l.selectedItem.id
						}, s.preventDefault());
						return;
					}
					let e = x.current;
					if (!e || e.mode !== d) return;
					s.preventDefault(), d === "construct" ? o(e.id) : a(e.id);
					return;
				}
				if (!(s.metaKey || s.ctrlKey || s.altKey || s.repeat)) {
					if (d === "furnish") {
						m === "escape" ? (s.preventDefault(), t()) : (m === "delete" || m === "backspace") && l.selectedIds.length > 0 && (s.preventDefault(), l.deleteItems(l.selectedIds), t());
						return;
					}
					if (m === "escape") {
						if (s.preventDefault(), u) return;
						f ? v(null) : c.active ? c.cancel() : n.tool === "floor" ? n.setTool("select") : n.tool === "measure" && r.phase !== "idle" ? r.cancel() : n.tool === "measure" ? n.setTool("select") : n.poolDrawing.active ? n.poolDrawing.cancel() : n.drawStart ? n.cancelWall() : [
							"door",
							"window",
							"passage",
							"hedge",
							"pool"
						].includes(n.tool) ? n.setTool("select") : e(), y(!1);
						return;
					}
					if (m === "enter" && n.drawStart) {
						s.preventDefault(), n.cancelWall(), y(!1);
						return;
					}
					m === "v" ? n.setTool("select") : m === "w" ? n.setTool("wall") : m === "d" ? n.setTool("door") : m === "n" ? n.setTool("window") : m === "a" ? n.setTool("passage") : m === "f" ? n.setTool("floor") : m === "h" ? n.setTool("hedge") : m === "p" ? n.setTool("pool") : m === "m" ? n.setTool("measure") : (m === "delete" || m === "backspace") && n.selection && (s.preventDefault(), n.deleteSelected());
				}
			}
		};
		return b.events.addEventListener("keydown", S, !0), () => b.events.removeEventListener("keydown", S, !0);
	}, [
		e,
		t,
		n,
		r,
		i,
		a,
		o,
		s,
		c,
		l,
		u,
		d,
		f,
		p,
		m,
		h,
		g,
		_
	]);
}
//#endregion
//#region apps/web/src/editor-preview/construct/useSceneItemDependencies.ts
var Xo = (e, t, n) => {
	let r = (0, Q.useRef)(new Map(t.walls.map((e) => [e.id, e]))), i = e.transaction?.items ?? e.items, a = (0, Q.useMemo)(() => Bi(i, t, r.current, n), [
		i,
		t,
		n
	]), o = (0, Q.useMemo)(() => Vi(a, t), [a, t]);
	return (0, Q.useLayoutEffect)(() => {
		if (e.transaction || (t.walls.forEach((e) => r.current.set(e.id, e)), o.items.length === e.items.length && o.items.every((t, n) => t === e.items[n]))) return;
		let n = o.items.some((t) => t.id === e.selectedId) ? e.selectedId : null;
		e.replaceItems(o.items, n);
	}, [
		t,
		o.items,
		e.items,
		e.transaction,
		e.selectedId,
		e.replaceItems
	]), o;
}, Zo = (e, t) => Object.is(e, t) || JSON.stringify(e) === JSON.stringify(t), Qo = (e, t, n, r = e.floors[0]?.id) => ({
	floorChanged: !Zo(e.floors.find((e) => e.id === r), t.floors.find((e) => e.id === r)),
	selectedItemId: t.sceneItems.find((t) => !e.sceneItems.some((e) => e.id === t.id))?.id ?? (t.sceneItems.some((e) => e.id === n) ? n : null)
}), $o = /* @__PURE__ */ new WeakMap(), es = (e) => {
	let t = $o.get(e);
	if (t) return t;
	let n = {
		...e,
		ceilings: e.ceilings?.filter((e) => e.kind === "flat"),
		rooms: e.rooms.map((e) => {
			let { furnishings: t, dashboardSlots: n, devices: r, ...i } = e;
			return {
				...i,
				dashboardSlots: [],
				devices: []
			};
		}),
		openings: e.openings.map((e) => {
			let { contactSlot: t, coverSlot: n, ...r } = e;
			return r;
		})
	};
	return $o.set(e, n), n;
}, ts = (e, t, n) => {
	let r = es(t), i = e.floors.find((e) => e.id === t.id);
	if (!i) return e;
	let a = Zo(r, i) ? i : r, o = a === i ? e.floors : e.floors.map((e) => e.id === t.id ? a : e), s = Object.fromEntries(o.flatMap((e) => e.rooms).map((t) => [t.id, e.roomProfiles[t.id] ?? { dashboardSlots: [] }])), c = Object.fromEntries(o.flatMap((e) => e.openings).map((t) => [t.id, t.kind === "door" && t.operation === "roll-up" ? e.openingProfiles[t.id] ?? {} : (() => {
		let { coverSlot: n, ...r } = e.openingProfiles[t.id] ?? {};
		return r;
	})()])), l = Zo(s, e.roomProfiles) ? e.roomProfiles : s, u = Zo(c, e.openingProfiles) ? e.openingProfiles : c, d = [...e.sceneItems.filter((e) => e.floorId !== t.id), ...n.filter((e) => e.floorId === t.id)], f = new Map(e.sceneItems.map((e, t) => [e.id, t])), p = d.sort((e, t) => (f.get(e.id) ?? Infinity) - (f.get(t.id) ?? Infinity)), m = Zo(p, e.sceneItems) ? e.sceneItems : Zo(p, n) ? n : p;
	return o === e.floors && m === e.sceneItems && l === e.roomProfiles && u === e.openingProfiles ? e : {
		...e,
		floors: o,
		sceneItems: m,
		roomProfiles: l,
		openingProfiles: u
	};
}, ns = (e, t, n, r, i = []) => {
	let a = ts(e.project, t, n), o = new Set(a.sceneItems.flatMap((e) => e.kind === "device" ? e.entitySlots.map((e) => e.id) : [])), s = e.project.sceneItems.flatMap((e) => e.kind === "device" ? e.entitySlots.map((e) => e.id).filter((e) => !o.has(e)) : []), c = g(e.bindings, s);
	try {
		[...Se(a, r).issues, ...i].some((e) => e.severity === "error") || (c = H(c, vt(a, {
			furnishingModels: {},
			deviceModels: {},
			openingModels: {}
		})));
	} catch {}
	return {
		project: a,
		bindings: c
	};
}, rs = (e) => ({
	project: e.draft,
	bindings: e.bindings
}), is = (e) => e instanceof Error ? e : /* @__PURE__ */ Error("Workspace storage failed.");
function as({ initialRecord: e, lifecycle: t, autosaveDelayMs: n = 280 }) {
	let [r, i] = (0, Q.useState)(() => k(rs(e))), a = (0, Q.useRef)(r), [o, s] = (0, Q.useState)(e), c = (0, Q.useRef)(o), [l, u] = (0, Q.useState)(!1), [d, f] = (0, Q.useState)(null), [p, m] = (0, Q.useState)(!1), h = (0, Q.useRef)(!1), g = (0, Q.useRef)(!0), _ = (0, Q.useRef)(0), v = (0, Q.useRef)(0), b = (0, Q.useRef)(0), x = (0, Q.useRef)(Promise.resolve()), S = (0, Q.useRef)(null), C = (0, Q.useRef)(null), w = (0, Q.useCallback)(() => {
		S.current !== null && globalThis.clearTimeout(S.current), S.current = null;
	}, []), T = (0, Q.useCallback)((e) => {
		c.current = e, g.current && s(e);
	}, []), E = (0, Q.useCallback)((e) => (C.current = e.status === "storage-error" ? e : null, g.current && (u(!1), f(e.status === "storage-error" ? e.error : /* @__PURE__ */ Error("The draft could not be saved."))), e), []), D = (0, Q.useCallback)((e) => {
		b.current += 1;
		let t = x.current.then(e);
		return x.current = t.catch(() => void 0).finally(() => {
			--b.current;
		}), t;
	}, []), O = (0, Q.useCallback)(async (e, n, r = !1) => {
		if (r && C.current?.status === "storage-error" && !(C.current.error instanceof y) && (C.current = null), C.current) return C.current;
		if (n <= v.current) return g.current && r && (f(null), u(!1)), {
			status: "saved",
			record: c.current
		};
		try {
			let r = await t.autosave(c.current, e.project, void 0, e.bindings);
			return r.status === "saved" ? (T(r.record), v.current = n, g.current && (f(null), u(v.current !== _.current)), r) : E(r);
		} catch (e) {
			return E({
				status: "storage-error",
				record: c.current,
				error: is(e)
			});
		}
	}, [
		T,
		t,
		E
	]), A = (0, Q.useCallback)((e) => {
		w();
		let t = _.current, n = structuredClone(a.current.present), r = e && C.current !== null;
		return D(() => O(n, t, r));
	}, [
		w,
		D,
		O
	]);
	(0, Q.useEffect)(() => (g.current = !0, _.current !== v.current && S.current === null && !C.current && (S.current = globalThis.setTimeout(() => {
		S.current = null, A(!1);
	}, n)), () => {
		g.current = !1, w();
	}), [
		n,
		w,
		A
	]);
	let j = (0, Q.useCallback)(() => A(!0), [A]), N = (0, Q.useCallback)((e) => h.current || e === a.current ? null : (a.current = e, _.current += 1, i(e), w(), C.current || (u(!0), S.current = globalThis.setTimeout(() => {
		S.current = null, A(!1);
	}, n)), e.present), [
		n,
		w,
		A
	]), P = (0, Q.useCallback)((e) => !h.current && N(Ke(a.current, e)) !== null, [N]), F = (0, Q.useCallback)(() => N(L(a.current)), [N]), I = (0, Q.useCallback)(() => N(M(a.current)), [N]), R = (0, Q.useCallback)(async (e = {}) => {
		if (h.current) return {
			status: "blocked",
			errors: [],
			warnings: []
		};
		h.current = !0, m(!0), w();
		let n = structuredClone(a.current.present), r = _.current, i = C.current !== null;
		try {
			return await D(async () => {
				let a = await O(n, r, i);
				if (a.status !== "saved") return {
					status: "storage-error",
					errors: [],
					warnings: [],
					error: a.status === "storage-error" ? a.error : /* @__PURE__ */ Error("The draft could not be saved.")
				};
				let o = await t.publish(c.current, e);
				return o.status === "published" ? T(o.record) : o.status === "storage-error" && E({
					...o,
					record: c.current
				}), o;
			});
		} catch (e) {
			let t = is(e);
			return E({
				status: "storage-error",
				record: c.current,
				error: t
			}), {
				status: "storage-error",
				errors: [],
				warnings: [],
				error: t
			};
		} finally {
			h.current = !1, g.current && m(!1);
		}
	}, [
		T,
		w,
		D,
		t,
		O,
		E
	]), z = (0, Q.useCallback)((e) => {
		let t = k(rs(e));
		a.current = t, v.current = ++_.current, C.current = null, T(e), g.current && (i(t), u(!1), f(null));
	}, [T]), ee = (0, Q.useCallback)(async (e) => {
		if (h.current) return {
			status: "storage-error",
			record: c.current,
			error: /* @__PURE__ */ Error("The workspace is busy.")
		};
		h.current = !0, m(!0), w();
		try {
			return await D(async () => {
				let n = await t[e](c.current);
				return n.status === "saved" ? z(n.record) : E(n), n;
			});
		} catch (e) {
			return E({
				status: "storage-error",
				record: c.current,
				error: is(e)
			});
		} finally {
			h.current = !1, g.current && m(!1);
		}
	}, [
		w,
		D,
		z,
		t,
		E
	]), te = (0, Q.useCallback)(() => ee("resetDraftToPublished"), [ee]), ne = (0, Q.useCallback)(() => ee("resetToSeed"), [ee]), re = (0, Q.useCallback)(() => c.current, []), B = (0, Q.useCallback)((e) => h.current || b.current > 0 || S.current !== null || _.current !== v.current || e.homeId !== c.current.homeId || e.revision < c.current.revision ? !1 : (z(e), !0), [z]);
	return {
		record: o,
		snapshot: r.present,
		commit: P,
		undo: F,
		redo: I,
		canUndo: r.past.length > 0,
		canRedo: r.future.length > 0,
		flush: j,
		publish: R,
		saving: l,
		error: d,
		busy: p,
		resetDraftToPublished: te,
		resetToSeed: ne,
		getRecord: re,
		adoptRecord: B
	};
}
//#endregion
//#region apps/web/src/editor-connect/useConnectEditor.ts
function os({ manifest: e, bindings: t, runtime: r, origin: i, active: a, onChange: o, initialRequest: s, routeView: c, onViewChange: l, floorId: u }) {
	let d = i ? ue(i) : null, f = (0, Q.useMemo)(() => gt(e.home.id), [e.home.id]), p = d ? t[d] : void 0, m = p?.draft ?? f, h = (e.floors.find((e) => e.id === u) ?? e.floors[0])?.rooms ?? [], g = h.some((e) => !m.roomAreaIds[e.id]), _ = h.length > 0 && !g ? "devices" : "rooms", [v, y] = (0, Q.useState)(s?.relationshipId ? "devices" : s?.view ?? _), b = l ? c ?? _ : v, x = (e) => {
		y(e), l?.(e);
	}, [S, C] = (0, Q.useState)(() => (s?.relationshipId ? ut(e, s.relationshipId)?.id : null) ?? s?.roomId ?? null), [w, T] = (0, Q.useState)(s?.relationshipId ?? null), [E, D] = (0, Q.useState)(null), [O, k] = (0, Q.useState)(null), A = r.status !== "connected" || r.origin !== d, j = (0, Q.useRef)(null);
	!A && d && (j.current = {
		origin: d,
		runtime: r
	});
	let M = A && j.current?.origin === d ? j.current.runtime : r, N = n(e, u ?? e.floors[0]?.id), P = N.find((e) => e.id === S) ?? null, F = (0, Q.useMemo)(() => Object.fromEntries(N.map((t) => [t.id, kt(e, t.id)])), [e, u]), I = P ? F[P.id] : [], L = (0, Q.useMemo)(() => Object.fromEntries(h.map((e) => {
		let t = F[e.id].map((e) => ({
			...e,
			relationships: e.relationships.filter((e) => e.kind !== "entity-slot" || e.slotKind !== "opening-contact" && e.slotKind !== "opening-cover" || e.slotIds.some((e) => !!m.entityIdsBySlotId[e]))
		})).filter((e) => e.relationships.length > 0), n = t.flatMap((e) => e.relationships);
		return [e.id, {
			mapped: n.filter((e) => e.slotIds.some((e) => !!m.entityIdsBySlotId[e])).length,
			total: n.length,
			categories: t
		}];
	})), [F, m.entityIdsBySlotId]), R = I.flatMap((e) => e.relationships).find((e) => e.id === w) ?? null, z = (0, Q.useRef)({
		manifest: e,
		bindings: t,
		state: p,
		profile: m,
		onChange: o,
		key: d,
		runtime: r,
		disconnected: A
	});
	z.current = {
		manifest: e,
		bindings: t,
		state: p,
		profile: m,
		onChange: o,
		key: d,
		runtime: r,
		disconnected: A
	}, (0, Q.useEffect)(() => {
		s?.relationshipId ? (C(ut(e, s.relationshipId)?.id ?? s.roomId ?? null), T(s.relationshipId)) : s?.roomId && C(s.roomId);
	}, [s]);
	let ee = (e, t = [], n = []) => {
		let r = z.current;
		r.key && (r.onChange({
			...r.bindings,
			[r.key]: {
				draft: e,
				published: r.state?.published ?? f,
				manualRoomIds: [.../* @__PURE__ */ new Set([...r.state?.manualRoomIds ?? [], ...t])],
				manualSlotIds: [.../* @__PURE__ */ new Set([...r.state?.manualSlotIds ?? [], ...n])]
			}
		}), k("Draft changes"));
	}, ne = JSON.stringify([
		d,
		e,
		r.areas,
		r.devices,
		r.entityRegistry
	]), re = (0, Q.useRef)(null);
	(0, Q.useEffect)(() => {
		let e = z.current;
		if (!a || e.disconnected || !e.key || re.current === ne) return;
		re.current = ne;
		let t = te(e.manifest, e.profile, e.runtime, e.state);
		t.applied.length && ee(t.profile);
	}, [
		ne,
		a,
		A
	]), (0, Q.useEffect)(() => {
		if (w && !R) {
			let t = ut(e, w);
			if (t) {
				C(t.id);
				return;
			}
			k("This device is no longer in the draft. Select another device to connect."), T(null);
		}
		P || C(null);
	}, [
		e,
		P,
		R,
		w
	]);
	let B = ve(m, e, A ? void 0 : r).issues.map((e) => ({
		...e,
		severity: [
			"profile.area-missing",
			"profile.entity-missing",
			"profile.device-class"
		].includes(e.code) ? "warning" : "error"
	}));
	return A && (Object.keys(m.roomAreaIds).length || Object.keys(m.entityIdsBySlotId).length) && B.push({
		code: "connect.offline",
		path: "bindings",
		message: "Home Assistant is offline. Saved connections will be retained without registry verification.",
		severity: "warning"
	}), {
		view: b,
		defaultView: _,
		hasUnmappedRooms: g,
		setView: (e) => {
			x(e), T(null), e === "rooms" && !h.some((e) => e.id === S) && C(null);
		},
		rooms: h,
		deviceRooms: N,
		roomId: P?.id ?? null,
		room: P,
		selectRoom: (e) => {
			C(e), T(null), D(null);
		},
		relationshipId: w,
		relationship: R,
		selectRelationship: T,
		groups: I,
		roomDeviceSummaries: L,
		profile: m,
		selectDevice: (t) => {
			let n = ut(e, t);
			return x("devices"), D(null), n ? (C(n.id), T(t), k(null), !0) : (T(null), k("This device is no longer in the draft. Select another device to connect."), !1);
		},
		publishedProfile: p?.published ?? f,
		displayRuntime: M,
		disconnected: A,
		issues: B,
		message: O,
		pendingAreaChange: E,
		assignArea: (t) => {
			if (!P || !d || A && t || t && (!r.areas.some((e) => e.area_id === t) || Object.entries(m.roomAreaIds).some(([e, n]) => e !== P.id && n === t))) return;
			let n = ge(m, P.id, t || null), i = Oe({
				manifest: e,
				savedProfile: m,
				roomAreaIds: n.roomAreaIds
			});
			i.clearedSlotIds.length ? D(i) : ee(i.profile, [P.id]);
		},
		confirmAreaChange: () => {
			E && (ee(E.profile, E.changedRoomIds, E.clearedSlotIds), D(null));
		},
		cancelAreaChange: () => D(null),
		assignEntities: (e) => {
			let t = [.../* @__PURE__ */ new Set([...Object.keys(m.entityIdsBySlotId), ...Object.keys(e)])].filter((t) => m.entityIdsBySlotId[t] !== e[t]);
			A && t.some((t) => e[t]) || ee({
				...m,
				entityIdsBySlotId: e
			}, [], [...t, ...R?.slotIds ?? []]);
		},
		refresh: async () => {
			if (!A) try {
				await r.refresh();
			} catch {
				k("Refresh failed. Your draft choices are unchanged.");
			}
		},
		importProfile: (n) => {
			if (!d) throw Error("Set a Home Assistant address before importing a profile.");
			o(Et(t, d, n, e)), k("Connections imported into the draft. Save to activate them.");
		}
	};
}
//#endregion
//#region apps/web/src/editor-preview/furnish/placement/item-creation.ts
function ss(e, t, n, r, i) {
	let a = wa(e.modelId, [
		...r,
		...n.map((e) => e.id),
		...n.flatMap((e) => e.kind === "device" ? e.entitySlots.map((e) => e.id) : [])
	]), o = {
		variant: Ve(e.definition).id,
		id: a,
		floorId: i,
		modelId: e.modelId,
		placement: t,
		size: e.definition.defaultSize
	};
	if (e.kind === "furnishing") return {
		...o,
		kind: "furnishing"
	};
	let s = e.definition.supportedDomains[0];
	if (!s) throw Error(`${e.definition.label} has no supported device domain.`);
	let c = wa(`${a}-primary`, [
		...r,
		a,
		...n.map((e) => e.id),
		...n.flatMap((e) => e.kind === "device" ? e.entitySlots.map((e) => e.id) : [])
	]), l = e.definition.supportedDeviceClasses?.[s], u = {
		id: c,
		compatibleDomains: e.definition.supportedDomains.filter((t) => {
			let n = e.definition.supportedDeviceClasses?.[t];
			return (l?.length ?? 0) === (n?.length ?? 0) && (l ?? []).every((e) => n?.includes(e));
		}),
		...l ? { compatibleDeviceClasses: l } : {},
		required: !0,
		autoMap: "manual",
		deviceRole: "primary",
		presentation: {
			label: e.definition.label,
			dashboardRole: "primary"
		}
	};
	return {
		...o,
		kind: "device",
		entitySlots: [u]
	};
}
//#endregion
//#region apps/web/src/editor-preview/furnish/placement/catalog-start-placement.ts
var cs = (e, t, n) => {
	let r = q(e.placement, n), i = Na(e, t, .035), a = Math.cos(r.rotationYRadians), o = Math.sin(r.rotationYRadians);
	return {
		x: r.position[0] + i.center[0] * a + i.center[2] * o,
		z: r.position[2] - i.center[0] * o + i.center[2] * a,
		width: Math.abs(a) * i.size[0] + Math.abs(o) * i.size[2],
		depth: Math.abs(o) * i.size[0] + Math.abs(a) * i.size[2]
	};
};
function ls(e, t, n, r, i) {
	let a = (n, r = e.definition.defaultSize) => {
		if (!i) return !0;
		let a = q(n, t), o = Na({ size: r }, e.definition, .035), s = Math.cos(a.rotationYRadians), c = Math.sin(a.rotationYRadians);
		return i([
			a.position[0] + o.center[0] * s + o.center[2] * c,
			a.position[1] + o.center[1],
			a.position[2] - o.center[0] * c + o.center[2] * s
		]);
	}, o = (...e) => {
		let t = ca(...e);
		return t.placement && !a(t.placement) ? {
			placement: null,
			error: "No suitable support in the current view. Pan or zoom out and try again."
		} : t;
	};
	if (e.definition.windowFit) {
		let i = la(e.definition, t, n).filter((e) => a(e.placement, e.size)), o = i.find((t) => !r?.items.some((n) => n.modelId === e.modelId && n.placement.kind === "wall" && t.placement.kind === "wall" && n.placement.wallId === t.placement.wallId && n.placement.face === t.placement.face && Math.abs(n.placement.offsetFromWallStartPlanUnits - t.placement.offsetFromWallStartPlanUnits) < .01)) ?? i[0];
		return o ? {
			placement: o.placement,
			size: o.size,
			error: null
		} : {
			placement: null,
			error: "No suitable window in the current view. Pan to a window with space above it or zoom out."
		};
	}
	let { origin: s, metersPerPlanUnit: c } = t.coordinates, l = r?.items.flatMap((e) => {
		let n = (e.kind === "device" ? r.deviceModels : r.furnishingModels)[e.modelId];
		return n ? [cs(e, n, t)] : [];
	}) ?? [], u = l.map((e, t) => ({
		kind: "box",
		id: String(t),
		minX: e.x - e.width / 2,
		maxX: e.x + e.width / 2,
		minZ: e.z - e.depth / 2,
		maxZ: e.z + e.depth / 2
	})), { min: d, max: f } = e.definition.bounds, p = Math.hypot(Math.max(Math.abs(d[0]), Math.abs(f[0])), Math.max(Math.abs(d[2]), Math.abs(f[2]))) + .035, m = (n) => {
		let r = cs({
			placement: n,
			size: e.definition.defaultSize
		}, e.definition, t);
		return l.every((e) => Math.abs(r.x - e.x) >= (r.width + e.width) / 2 || Math.abs(r.z - e.z) >= (r.depth + e.depth) / 2);
	};
	if (e.definition.placementEnvironment === "outdoor") {
		let r = (t.footprintRegions ?? [t.footprint]).flat(), i = r.map((e) => e[0]), a = r.map((e) => e[1]), s = Math.min(...i), l = Math.max(...i), u = Math.min(...a), d = Math.max(...a), f = (p + .45) / c, h = (e, t, n) => Math.max(t, Math.min(n, e)), g = [];
		V(n, t) && g.push(n), g.push([h(n[0], s, l), u - f], [l + f, h(n[1], u, d)], [h(n[0], s, l), d + f], [s - f, h(n[1], u, d)]);
		for (let e = 0; e <= 4; e += 1) {
			let t = e / 4;
			g.push([s + (l - s) * t, u - f], [l + f, u + (d - u) * t], [l - (l - s) * t, d + f], [s - f, d - (d - u) * t]);
		}
		let _ = g.filter((e, t) => g.findIndex((t) => Math.hypot(t[0] - e[0], t[1] - e[1]) < 1e-7) === t).sort((e, t) => Math.hypot(e[0] - n[0], e[1] - n[1]) - Math.hypot(t[0] - n[0], t[1] - n[1])), v = null;
		for (let n of _) {
			let r = o(e, t, {
				at: n,
				kind: "absolute",
				raw: !0
			});
			if (r.placement && (v ??= r, m(r.placement))) return r;
		}
		return v ?? {
			placement: null,
			error: "No clear outdoor ground is available for this item."
		};
	}
	let h = t.rooms.flatMap((e) => {
		let r = ke(e, t, [], 0);
		if (!r) return [];
		let i = [r.x / c + s[0], r.z / c + s[1]];
		return [{
			room: e,
			at: i,
			distance: Math.hypot(i[0] - n[0], i[1] - n[1])
		}];
	}).sort((e, t) => Number(ct(n, t.room.polygon)) - Number(ct(n, e.room.polygon)) || e.distance - t.distance), g = e.definition.preferredPlacement, _ = null;
	for (let { room: r, at: i } of h) {
		let a = [];
		for (let e of [
			0,
			.5,
			1,
			1.5,
			2
		]) for (let t = 0; t < (e ? 8 : 1); t += 1) {
			let i = [n[0] + Math.cos(t * Math.PI / 4) * e / c, n[1] + Math.sin(t * Math.PI / 4) * e / c];
			ct(i, r.polygon) && a.push(i);
		}
		if (a.push(i), l.length) {
			let e = ke(r, t, u, p);
			e && a.push([e.x / c + s[0], e.z / c + s[1]]);
		}
		for (let n of a) {
			if (g !== "wall") {
				let r = o(e, t, {
					at: n,
					kind: g,
					raw: !0
				});
				if (r.placement && (_ ??= r, m(r.placement))) return r;
				continue;
			}
			let r = t.walls.flatMap((r) => {
				let i = o(e, t, {
					at: n,
					kind: g,
					wallId: r.id,
					raw: !0
				});
				if (!i.placement) return [];
				let { position: a } = q(i.placement, t);
				return [{
					candidate: i,
					distance: Math.hypot(a[0] - (n[0] - s[0]) * c, a[2] - (n[1] - s[1]) * c)
				}];
			}).sort((e, t) => e.distance - t.distance);
			for (let { candidate: e } of r) if (_ ??= e, m(e.placement)) return e;
		}
	}
	return _ ?? {
		placement: null,
		error: "No suitable room or support in the current view. Pan or zoom out and try again."
	};
}
//#endregion
//#region apps/web/src/editor-workspace/useHomeEditorController.ts
function us({ initialRecord: e, lifecycle: t, onClose: n, onWorkspaces: r, autosaveDelayMs: i, initialRequest: a, navigation: o, homeAssistantUrl: s = null, onPrepareOrigin: l }) {
	let u = Xe(), [d, f] = (0, Q.useState)(a?.mode ?? "construct"), p = o?.request.mode ?? d, m = as({
		initialRecord: e,
		lifecycle: t,
		autosaveDelayMs: i
	}), { snapshot: h, commit: g, undo: _, redo: v, flush: y, publish: b } = m, x = fe(h.project.floors), S = x.activeFloorId;
	(0, Q.useEffect)(() => {
		let e = a;
		if (!e) return;
		let t = e.floorId ?? h.project.sceneItems.find((t) => t.id === e.relationshipId || t.id === e.arrange?.selectedItemId)?.floorId ?? h.project.floors.find((t) => t.rooms.some((t) => t.id === e.roomId))?.id;
		t && h.project.floors.some((e) => e.id === t) && x.selectFloor(t, "target");
	}, [a]);
	let [C, w] = (0, Q.useState)(null), [T, D] = (0, Q.useState)(null);
	(0, Q.useEffect)(() => {
		D((e) => e && !h.project.stairs.some((t) => t.id === e.id) ? null : e);
	}, [h.project.stairs]), (0, Q.useEffect)(() => {
		D((e) => p !== "construct" || e && ![e.lowerFloorId, e.upperFloorId].includes(S) ? null : e);
	}, [S, p]);
	let [O, k] = (0, Q.useState)(null), [A, j] = (0, Q.useState)(!0), M = h.project.floors[h.project.floors.findIndex((e) => e.id === S) - 1], N = St(), [P, F] = (0, Q.useState)(!1), [I, L] = (0, Q.useState)(a?.arrange?.camera?.view ?? "3d"), R = (0, Q.useRef)(a?.arrange?.camera ?? null), [z, ee] = (0, Q.useState)(0), [te, ne] = (0, Q.useState)(null), [re, B] = (0, Q.useState)(null), [ie, oe] = (0, Q.useState)(null), [se, ce] = (0, Q.useState)(0), [le, ue] = (0, Q.useState)(null), [de, V] = (0, Q.useState)(null), [pe, H] = (0, Q.useState)(null), [me, U] = (0, Q.useState)(!1), [he, ge] = (0, Q.useState)(!1), [_e, ve] = (0, Q.useState)({
		room: "all",
		query: ""
	}), [ye, be] = (0, Q.useState)(null), [xe, Se] = (0, Q.useState)(""), W = (0, Q.useRef)(null), we = (0, Q.useRef)(() => !1), Te = (0, Q.useCallback)((e, t) => {
		W.current = e, we.current = t;
	}, []), Ee = e.draft.floors.find((e) => e.id === S) ?? e.draft.floors[0], G = ia(Ee, ae.floors.find((e) => e.id === Ee.id) ?? Ee, e.draft.home.palette.exterior, je(e.draft) && e.draft.floors.every(fn) ? "wall" : "select"), De = G.selection?.kind === "opening" ? G.selection.id : null, Oe = De ? G.draft.openings.find((e) => e.id === De) : void 0;
	(0, Q.useEffect)(() => {
		V(null);
	}, [p, Oe?.id]);
	let ke = aa(G.previewFloor.coordinates), K = Va(e.draft.sceneItems.filter((e) => e.floorId === Ee.id));
	(0, Q.useEffect)(() => {
		let t = a?.arrange?.selectedItemId;
		t && e.draft.sceneItems.some((e) => e.id === t) && K.select(t);
	}, []), (0, Q.useEffect)(() => {
		H(null);
	}, [p, K.selectedId]);
	let Ae = ae.extensions.furnishingModels, Me = c, Ne = m.error ? "error" : m.saving ? "saving" : "saved", [q, Fe] = (0, Q.useState)(!1), [Ie, J] = (0, Q.useState)(!1);
	(0, Q.useEffect)(() => {
		J(!1);
	}, [p]);
	let Le = (0, Q.useRef)(null), ze = (0, Q.useCallback)(() => {
		u.root.pointerLockElement && document.exitPointerLock(), J(!1), requestAnimationFrame(() => Le.current?.focus());
	}, []), [Ve, He] = (0, Q.useState)(!1), Ue = m.busy, [Y, Ge] = (0, Q.useState)(null), Ke = G.poolDrawing, [qe, Je] = (0, Q.useState)({
		kind: "preset",
		preset: "light-oak"
	}), [Ye, Ze] = (0, Q.useState)("room"), [Qe, $e] = (0, Q.useState)(null), et = di(G.previewFloor, (e, t) => e ? G.addFloorZone(e, t, qe) : G.addGroundZone(t, qe)), tt = !!C || me || G.isSettling || !!K.transaction || Ke.active || et.active || Qe !== null, X = m.busy || q || P, nt = (0, Q.useRef)(null), rt = (0, Q.useRef)(null), at = (e) => {
		if (tt || X) return;
		let t = h.project.sceneItems.find((t) => t.id === e);
		t && (t.floorId === S ? K.select(e) : (rt.current = e, x.selectFloor(t.floorId)));
	}, ot = (0, Q.useCallback)((e) => {
		let t = h.project, n = Qo(t, e, K.selectedId, S), r = e.floors.find((e) => e.id === S) ?? e.floors.at(-1);
		n.floorChanged ||= r.id !== G.draft.floorId, nt.current = {
			draft: G.draft,
			items: K.items,
			floorChanged: n.floorChanged
		}, n.floorChanged && G.replaceFloor(r), K.replaceItems(e.sceneItems.filter((e) => e.floorId === r.id), rt.current ?? n.selectedItemId), rt.current = null, H(null), ue(null), U(!1), ge(!1);
	}, [
		S,
		h.project,
		G.draft,
		G.replaceFloor,
		K.items,
		K.replaceItems,
		K.selectedId
	]);
	(0, Q.useEffect)(() => {
		G.draft.floorId !== S && (ot(h.project), V(null), H(null), B(null), ne(null));
	}, [
		S,
		G.draft.floorId,
		ot,
		h.project
	]);
	let st = (0, Q.useCallback)(() => {
		if (!X && !me && et.active) {
			et.undo();
			return;
		}
		if (!X && !me && Ke.active) {
			Ke.undo();
			return;
		}
		if (tt || X) return;
		let e = _();
		e && ot(e.project);
	}, [
		X,
		ot,
		_,
		tt,
		me,
		Ke,
		et
	]), ct = (0, Q.useCallback)(() => {
		if (!X && !me && et.active) {
			et.redo();
			return;
		}
		if (!X && !me && Ke.active) {
			Ke.redo();
			return;
		}
		if (tt || X) return;
		let e = v();
		e && ot(e.project);
	}, [
		X,
		v,
		ot,
		tt,
		me,
		Ke,
		et
	]);
	(0, Q.useEffect)(() => {
		(G.selection || G.tool !== "select") && D(null);
	}, [G.selection, G.tool]);
	let lt = (0, Q.useCallback)(() => {
		D(null), G.clearSelection(), oe(null);
	}, [G.clearSelection]), ut = (0, Q.useCallback)(() => {
		H(null), K.select(null), ue(null), oe(null);
	}, [K.select]), dt = (0, Q.useCallback)((e) => {
		K.deleteItem(e), ut();
	}, [ut, K.deleteItem]);
	(0, Q.useEffect)(() => {
		(p !== "construct" || G.tool !== "measure") && ke.cancel();
	}, [
		G.tool,
		ke.cancel,
		p
	]), (0, Q.useEffect)(() => {
		(p !== "construct" || G.tool !== "floor") && (et.cancel(), $e(null));
	}, [
		G.tool,
		et.cancel,
		p
	]);
	let ft = (e, t = !1) => {
		X || (be(null), K.transaction && K.cancelTransaction(), H(null), e !== "construct" && (G.cancelWall(), Ke.cancel(), et.cancel(), $e(null)), U(!1), ge(!1), o ? t || o.go({ mode: e }) : e === "connect" && p !== "connect" && !t && Ft.setView(Ft.defaultView), f(e));
	}, pt = (0, Q.useCallback)((e) => {
		let t = G.previewFloor.rooms.find((t) => t.id === e);
		if (t) {
			if (t.floorZones?.length) {
				$e(e);
				return;
			}
			G.paintRoomFloor(e, qe, !1);
		}
	}, [G, qe]), mt = (0, Q.useCallback)((e) => {
		Qe && (G.paintRoomFloor(Qe, qe, e), $e(null));
	}, [
		G,
		qe,
		Qe
	]), ht = Xo(K, G.previewFloor, G.wallRuns), gt = ht.items, _t = K.transaction ? K.items : gt, vt = _t.find((e) => e.id === K.selectedId), yt = vt && (vt.kind === "device" ? Me : Ae)[vt.modelId], bt = (0, Q.useMemo)(() => Dt(G.previewFloor), [G.previewFloor]), Z = (0, Q.useMemo)(() => ts(h.project, G.previewFloor, gt), [
		G.previewFloor,
		gt,
		h.project
	]), Ct = (0, Q.useMemo)(() => JSON.stringify(Z), [Z]), wt = (0, Q.useCallback)((e) => {
		X || tt || g({
			...h,
			project: {
				...Z,
				actionBar: { items: e }
			}
		});
	}, [
		g,
		X,
		Z,
		h,
		tt
	]), Tt = (0, Q.useCallback)((e) => {
		if (!K.items.some((t) => t.id === e)) return !1;
		H(null);
		let t = [...Object.values(Z.roomProfiles).flatMap((e) => e.dashboardSlots.map((e) => e.id)), ...Object.values(Z.openingProfiles).flatMap((e) => [e.contactSlot?.id, e.coverSlot?.id].filter((e) => !!e))];
		return K.duplicate(e, G.previewFloor, t), !0;
	}, [
		G.previewFloor,
		Z.openingProfiles,
		Z.roomProfiles,
		K
	]), Et = (0, Q.useCallback)((e) => (V(null), G.duplicateOpening(e)), [G.duplicateOpening]);
	Yo({
		clearConstructionSelection: lt,
		clearFurnishingSelection: ut,
		constructEditor: G,
		constructMeasure: ke,
		dragging: me,
		duplicateArrangeItem: Tt,
		duplicateConstructionOpening: Et,
		editingLocked: X,
		floorZoneDrawing: et,
		furnishingEditor: K,
		marqueeSelecting: he,
		mode: p,
		pendingRoomPaintId: Qe,
		previewOpen: Ie,
		publishOpen: Ve,
		redoProject: ct,
		selectedOpening: Oe,
		undoProject: st,
		setPendingRoomPaintId: $e,
		setDragging: U
	}), (0, Q.useEffect)(() => {
		if (tt || X || G.draft.floorId !== S) return;
		let e = nt.current;
		if (e) {
			(!e.floorChanged || G.draft !== e.draft) && K.items !== e.items && (nt.current = null);
			return;
		}
		g(ns(h, G.previewFloor, gt, Nt, G.topologyIssues.map((e) => ({
			...e,
			severity: "error"
		}))));
	}, [
		G.draft,
		G.previewFloor,
		Ct,
		G.topologyIssues,
		X,
		tt,
		g,
		h,
		K.items,
		K.transaction,
		p,
		gt
	]);
	let Ot = () => {
		if (X || tt) return;
		G.setTool("select"), lt();
		let e = h.project.floors.findIndex((e) => e.id === S), t = h.project.floors[e], n = h.project.stairs.find((e) => e.lowerFloorId === S);
		if (n) {
			D(n);
			return;
		}
		w({
			id: `stairs-${Re()}`,
			lowerFloorId: S,
			upperFloorId: h.project.floors[e + 1].id,
			at: t.footprint[0] ?? t.coordinates.origin,
			widthMeters: 1,
			runMeters: t.floorToFloorHeightMeters * 1.5,
			rotationYRadians: 0
		});
	}, kt = (0, Q.useCallback)(async () => {
		if (X || tt) return;
		Fe(!0);
		let e = await y();
		if (e.status === "saved") {
			n(e.record, "draft-saved");
			return;
		}
		Fe(!1);
	}, [
		X,
		y,
		n,
		tt
	]), At = (0, Q.useRef)(!1);
	(0, Q.useEffect)(() => {
		if (!o?.exitRequested) {
			At.current = !1;
			return;
		}
		!X && !tt && !At.current && (At.current = !0, kt());
	}, [
		o?.exitRequested,
		X,
		tt,
		kt
	]);
	let jt = (0, Q.useMemo)(() => We(Z, ae.extensions).manifest, [Z]), Mt = (0, Q.useMemo)(() => it(h.project, ae.extensions), [h.project]), Pt = Mt.floors.find((e) => e.id === S) ?? Mt.floors[0], Ft = os({
		manifest: Mt,
		floorId: S,
		bindings: h.bindings,
		runtime: N,
		origin: s,
		active: p === "connect" && !X && !tt && !Ve,
		onChange: (e) => g({
			...h,
			bindings: e
		}),
		initialRequest: a,
		routeView: o?.request.view,
		onViewChange: o ? (e) => o.go({
			mode: "connect",
			view: e
		}) : void 0
	});
	(0, Q.useEffect)(() => {
		o?.request.mode === "connect" && !o.request.view && (Ft.selectRelationship(null), o.go({
			...o.request,
			view: Ft.defaultView
		}, !0));
	}, [o, Ft.defaultView]);
	let Lt = Ce(), zt = Be(N, async (t) => {
		F(!0);
		try {
			if ((await y()).status !== "saved") throw Error("The draft could not be saved. Sign-in has not started.");
			if (t !== s) {
				if (!l) throw Error("Connection settings are unavailable in this preview.");
				let e = await l(m.getRecord(), t);
				if (!m.adoptRecord(e)) throw Error("The workspace changed while connecting. Reopen Connect to retry.");
			}
			if (Lt) return;
			let n = {
				floorId: S,
				mode: "connect",
				view: Ft.view,
				roomId: Ft.roomId,
				relationshipId: Ft.relationshipId,
				arrange: {
					selectedItemId: K.selectedId,
					...R.current ? { camera: R.current } : {}
				}
			};
			try {
				window.sessionStorage.setItem(Pe, JSON.stringify({
					...n,
					workspaceId: e.homeId
				}));
			} catch {
				throw Error("The sign-in return could not be saved in this browser. Allow session storage and try again.");
			}
		} finally {
			F(!1);
		}
	}), Bt = (0, Q.useMemo)(() => [...E(h.bindings, Mt, it(m.getRecord().published, ae.extensions)), ...Ft.issues], [
		h.bindings,
		Mt,
		Ft.issues
	]), Vt = JSON.stringify(jt.floors.flatMap((e) => e.rooms).map((e) => [
		e.id,
		e.name,
		e.devices.map(({ id: e, model: t, entitySlots: n }) => ({
			id: e,
			model: t,
			entitySlots: n
		}))
	])), Ht = (0, Q.useMemo)(() => It(jt), [Vt]), Ut = (0, Q.useMemo)(() => _t === jt.sceneItems ? jt : {
		...jt,
		sceneItems: [...jt.sceneItems.filter((e) => e.floorId !== S), ..._t]
	}, [jt, _t]), Wt = (e) => {
		if (X || tt) return;
		let t = ls(e, G.previewFloor, W.current ?? xt(G.previewFloor.footprint), {
			items: _t,
			furnishingModels: Ae,
			deviceModels: Me
		}, we.current);
		if (be(t.error), !t.placement) return;
		let n = [
			...Z.floors.flatMap((e) => [
				e.id,
				...e.rooms.map((e) => e.id),
				...e.walls.map((e) => e.id),
				...e.wallJunctions.map((e) => e.id),
				...e.openings.map((e) => e.id),
				...(e.ceilings ?? []).map((e) => e.id),
				...(e.groundZones ?? []).map((e) => e.id)
			]),
			...Z.shortcuts.map((e) => e.id),
			...Object.values(Z.roomProfiles).flatMap((e) => e.dashboardSlots.map((e) => e.id)),
			...Object.values(Z.openingProfiles).flatMap((e) => [e.contactSlot?.id, e.coverSlot?.id].filter((e) => !!e))
		], r = ss(e, t.placement, K.items, n, G.previewFloor.id);
		K.addItem(t.size ? {
			...r,
			size: t.size
		} : r), H(null), Se(`${e.definition.label} added. Drag to move it; use Undo to remove it.`);
	}, { contextualIssues: Gt, displayedContextualIssues: Kt } = Jo({
		editorProject: Z,
		constructEditor: G,
		furnishingModels: Ae,
		deviceModels: Me,
		previewSceneItems: gt,
		ceilingDependencies: ht,
		walkNavigation: bt,
		mode: p
	}), qt = (0, Q.useCallback)((e) => {
		ne(null);
		let t = Ti(e, G.previewFloor, gt), n = t.find((e) => e.kind === "scene-item");
		if (n) ft("furnish"), K.select(n.id);
		else {
			ft("construct"), G.setTool("select");
			let e = t.find((e) => e.kind === "opening"), n = t.find((e) => e.kind === "room"), r = t.find((e) => e.kind === "wall"), i = t.find((e) => e.kind === "pool");
			e ? G.selectOpening(e.id) : i ? G.selectPool(i.id) : n ? G.selectRoom(n.id) : r && G.selectWall(G.wallRuns.find((e) => e.wallId === r.id)?.sourceWallId ?? r.id);
		}
		oe(wi(e)), ce((e) => e + 1), B(ji(e, G.previewFloor, gt)), ee((e) => e + 1);
	}, [
		G,
		K,
		gt
	]), Jt = (0, Q.useMemo)(() => [...Bt, ...Gt.map((e) => ({
		code: e.code,
		path: e.path,
		message: e.message,
		severity: e.severity
	}))].filter((e, t, n) => n.findIndex((t) => t.code === e.code && t.path === e.path && t.message === e.message) === t), [Gt, Bt]), Yt = Jt.filter((e) => e.severity !== "warning");
	return {
		editorProject: Z,
		setActionBarItems: wt,
		cameraFocusRoomId: te,
		focusRoom: (e) => {
			let t = G.previewFloor.rooms.find((t) => t.id === e);
			t && (ue(e), ne(e), B(Rt(t.polygon)), ee((e) => e + 1));
		},
		selectSceneItem: at,
		floorNavigation: x,
		activeFloorId: S,
		stairPlacement: C,
		setStairPlacement: w,
		stairDialog: T,
		setStairDialog: D,
		floorDialog: O,
		setFloorDialog: k,
		showFloorBelow: A,
		setShowFloorBelow: j,
		lowerFloor: M,
		startStairs: Ot,
		connectFloor: Pt,
		mode: p,
		editingLocked: X,
		publishOpen: Ve,
		previewOpen: Ie,
		connectManifest: Mt,
		connect: Ft,
		clearConstructionSelection: lt,
		clearFurnishingSelection: ut,
		cameraView: I,
		cameraResetKey: z,
		constructEditor: G,
		dragging: me,
		cameraFocusPoint: re,
		handleCameraTargetChange: Te,
		savedCamera: R,
		previewSceneItems: gt,
		displayedContextualIssues: Kt,
		activeIssueKey: ie,
		issueFocusVersion: se,
		poolDrawing: Ke,
		floorZoneDrawing: et,
		focusIssue: qt,
		furnishingModels: Ae,
		deviceModels: Me,
		visualManifest: Ut,
		selectedRoomId: le,
		editorResolvedBindings: Ht,
		marqueeSelecting: he,
		floorPaintTarget: Ye,
		requestRoomPaint: pt,
		setDragging: U,
		constructMeasure: ke,
		setSelectedRoomId: ue,
		setMarqueeSelecting: ge,
		selectedOpening: Oe,
		detailsOpeningId: de,
		setDetailsOpeningId: V,
		duplicateConstructionOpening: Et,
		visualSceneItems: _t,
		furnishingEditor: K,
		selectedItem: vt,
		selectedDefinition: yt,
		detailsItemId: pe,
		setDetailsItemId: H,
		unsettled: tt,
		selectMode: ft,
		duplicateArrangeItem: Tt,
		deleteSceneItem: dt,
		setCameraView: L,
		walkButton: Le,
		setPreviewOpen: J,
		closeEditor: kt,
		onWorkspaces: r,
		closing: q,
		setPublishMessage: Ge,
		setPublishOpen: He,
		runtime: N,
		workspace: m,
		undoProject: st,
		redoProject: ct,
		floorFinish: qe,
		setFloorFinish: Je,
		setFloorPaintTarget: Ze,
		homeAssistantUrl: s,
		signIn: zt,
		snapshot: h,
		flush: y,
		lifecycle: t,
		commit: g,
		replaceEditorsFromProject: ot,
		catalogBrowsing: _e,
		setCatalogBrowsing: ve,
		catalogError: ye,
		addCatalogItem: Wt,
		arrangeAnnouncement: xe,
		pendingRoomPaintId: Qe,
		confirmRoomPaint: mt,
		setPendingRoomPaintId: $e,
		autosaveStatus: Ne,
		editedManifest: jt,
		closeWalk: ze,
		publishErrors: Yt,
		publishWarnings: Jt.filter((e) => e.severity === "warning"),
		publishIssues: Jt,
		publishMessage: Y,
		publishing: Ue,
		publishProject: (0, Q.useCallback)(async () => {
			if (Yt.length > 0 || X || tt) return;
			Ge(null);
			let e = await b({
				confirmWarnings: !0,
				bindingIssues: Bt
			});
			if (e.status === "published") {
				He(!1), n(e.record, "applied");
				return;
			}
			if (e.status === "storage-error") {
				Ge("Could not save changes in browser storage. The previous home is unchanged.");
				return;
			}
			Ge("The draft changed while saving. Review the issues and try again.");
		}, [
			X,
			n,
			b,
			Yt.length,
			tt,
			Bt
		])
	};
}
//#endregion
//#region apps/web/src/editor-action-bar/action-bar-edits.ts
var ds = (e, t) => e.kind === t.kind && (e.kind === "built-in" && t.kind === "built-in" ? e.action === t.action : e.kind === "room" && t.kind === "room" ? e.roomId === t.roomId : e.kind === "device" && t.kind === "device" && e.deviceId === t.deviceId);
function fs(e, t, n, r) {
	return e.some((e) => e.id !== t && ds(e.target, n)) ? e : t === null ? [...e, {
		id: r(),
		target: n
	}] : e.map((e) => e.id === t ? {
		...e,
		target: n
	} : e);
}
function ps(e, t, n) {
	let r = e.findIndex((e) => e.id === t), i = r + n;
	if (r < 0 || i < 0 || i >= e.length) return e;
	let a = [...e];
	return [a[r], a[i]] = [a[i], a[r]], a;
}
function ms(e, t) {
	return e.filter((e) => e.id !== t);
}
//#endregion
//#region apps/web/src/editor-action-bar/ActionBarEditor.tsx
var hs = [
	"build",
	"walk",
	"night",
	"view",
	"all-lights"
];
function gs({ project: e, deviceModels: t, roomPictures: n, roomNames: r = {}, deviceNames: i = {}, disabled: a, canUndo: s, canRedo: c, onUndo: l, onRedo: u, onChange: d }) {
	let f = Xe(), [p, m] = (0, Q.useState)(null), [h, g] = (0, Q.useState)(null), [_, v] = (0, Q.useState)(""), [y, b] = (0, Q.useState)(!1), [x, S] = (0, Q.useState)(null), C = (0, Q.useRef)(null), w = (0, Q.useRef)(null), T = He(e.actionBar), E = e.floors.flatMap((e) => e.rooms), D = e.sceneItems.filter((t) => t.kind === "device" && st(e, t.id)), O = T.find((e) => e.id === p), k = T.filter((e) => {
		let t = e.target;
		return t.kind === "room" ? !E.some((e) => e.id === t.roomId) : t.kind === "device" && !D.some((e) => e.id === t.deviceId);
	}).length;
	(0, Q.useEffect)(() => {
		let e = () => {
			if (!C.current) return;
			if (C.current.clientWidth <= 0) {
				S(null);
				return;
			}
			let e = Number.parseFloat(window.getComputedStyle(C.current).getPropertyValue("--scene-action-size")) || 64;
			S(Math.max(2, Math.floor((C.current.clientWidth - 10 + 6) / (e + 6))));
		};
		e();
		let t = typeof ResizeObserver > "u" ? null : new ResizeObserver(e);
		return C.current && t?.observe(C.current), window.addEventListener("resize", e), () => {
			t?.disconnect(), window.removeEventListener("resize", e);
		};
	}, []), (0, Q.useEffect)(() => {
		let e = (e) => {
			e.key !== "Escape" || !h && p === null && !y || (e.preventDefault(), h ? g(null) : y ? b(!1) : m(null));
		};
		return f.events.addEventListener("keydown", e), () => f.events.removeEventListener("keydown", e);
	}, [
		h,
		p,
		y
	]);
	let A = x !== null && T.length + 1 > x, j = A ? T.slice(0, Math.max(0, x - 2)) : T, M = A ? T.slice(j.length) : [], N = (e) => {
		let n = e.target;
		if (n.kind === "built-in") return de[n.action];
		if (n.kind === "room") return r[n.roomId] ?? E.find((e) => e.id === n.roomId)?.name ?? "Missing room";
		let a = D.find((e) => e.id === n.deviceId);
		return a ? i[a.id] ?? t[a.modelId]?.label ?? a.modelId.replaceAll("-", " ") : "Missing device";
	}, P = (e) => {
		let r = e.target;
		if (r.kind === "built-in") return /* @__PURE__ */ (0, $.jsx)(ne, { action: r.action });
		if (r.kind === "room") return /* @__PURE__ */ (0, $.jsx)(Ht, {
			name: N(e),
			pictureUrl: n[r.roomId]
		});
		let i = D.find((e) => e.id === r.deviceId);
		return i ? /* @__PURE__ */ (0, $.jsx)(Ct, {
			modelId: i.modelId,
			models: t
		}) : /* @__PURE__ */ (0, $.jsx)(J, { name: "devices" });
	}, F = (e) => /* @__PURE__ */ (0, $.jsx)("button", {
		type: "button",
		className: "scene-action-slot is-filled",
		"aria-label": `Edit ${N(e)} shortcut`,
		"aria-pressed": p === e.id,
		disabled: a,
		onClick: () => {
			m(e.id), g(null);
		},
		onKeyDown: (t) => {
			t.key === "ArrowUp" && (t.preventDefault(), m(e.id), requestAnimationFrame(() => w.current?.querySelector("button")?.focus()));
		},
		children: /* @__PURE__ */ (0, $.jsx)(o, {
			icon: P(e),
			label: N(e),
			shortcut: e.target.kind === "built-in" ? {
				build: "B",
				walk: "W",
				night: "N",
				view: "V",
				"all-lights": "L"
			}[e.target.action] : void 0,
			chevron: e.target.kind === "built-in" && (e.target.action === "build" || e.target.action === "view")
		})
	}, e.id), I = (e) => {
		h && (d(fs(T, h.replacingId, e, Re)), m(null), g(null), v(""), b(!1));
	}, L = (e) => {
		g({
			kind: e,
			replacingId: O?.id ?? null
		}), v("");
	}, R = (e) => e.toLocaleLowerCase().includes(_.trim().toLocaleLowerCase()), z = (e) => T.some((t) => t.id !== h?.replacingId && JSON.stringify(t.target) === JSON.stringify(e));
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		className: "shortcuts-workspace",
		"aria-label": "Customize shortcuts",
		children: [
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "shortcuts-workspace__intro",
				children: [/* @__PURE__ */ (0, $.jsx)("h2", { children: "Home action bar" }), /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "shortcuts-workspace__history",
					role: "group",
					"aria-label": "Shortcut history",
					children: [
						/* @__PURE__ */ (0, $.jsxs)("button", {
							type: "button",
							disabled: a || !s,
							onClick: l,
							children: [/* @__PURE__ */ (0, $.jsx)(J, { name: "undo" }), "Undo"]
						}),
						/* @__PURE__ */ (0, $.jsxs)("button", {
							type: "button",
							disabled: a || !c,
							onClick: u,
							children: [/* @__PURE__ */ (0, $.jsx)(J, { name: "redo" }), "Redo"]
						}),
						/* @__PURE__ */ (0, $.jsx)("button", {
							type: "button",
							"aria-label": "Restore defaults",
							disabled: a,
							onClick: () => {
								d(X.map((e) => ({
									...e,
									target: { ...e.target }
								}))), m(null), g(null);
							},
							children: "Restore defaults"
						})
					]
				})]
			}),
			k > 0 && /* @__PURE__ */ (0, $.jsxs)("p", {
				className: "shortcuts-workspace__warning",
				role: "alert",
				children: [
					k,
					" shortcut target",
					k === 1 ? " is" : "s are",
					" missing. Replace or remove before Save."
				]
			}),
			/* @__PURE__ */ (0, $.jsx)("div", {
				className: "shortcuts-workspace__canvas",
				children: h ? /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "shortcuts-picker",
					children: [
						/* @__PURE__ */ (0, $.jsxs)("div", {
							className: "shortcuts-picker__heading",
							children: [/* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsx)("h2", { children: h.kind === "built-in" ? "Choose an action" : h.kind === "room" ? "Choose a room" : "Choose a device" }), /* @__PURE__ */ (0, $.jsx)("p", { children: h.replacingId ? "Replace the selected shortcut" : "Add a shortcut to the bar" })] }), /* @__PURE__ */ (0, $.jsx)("button", {
								type: "button",
								onClick: () => g(null),
								"aria-label": "Close choices",
								children: /* @__PURE__ */ (0, $.jsx)(J, { name: "close" })
							})]
						}),
						/* @__PURE__ */ (0, $.jsxs)("label", {
							className: "shortcuts-picker__search",
							children: [/* @__PURE__ */ (0, $.jsx)(J, { name: "search" }), /* @__PURE__ */ (0, $.jsx)("input", {
								type: "search",
								value: _,
								placeholder: "Search…",
								"aria-label": "Search shortcut choices",
								onChange: (e) => v(e.target.value)
							})]
						}),
						/* @__PURE__ */ (0, $.jsxs)("div", {
							className: "shortcuts-picker__grid",
							children: [
								h.kind === "built-in" && hs.filter((e) => R(de[e])).map((e) => {
									let t = {
										kind: "built-in",
										action: e
									};
									return /* @__PURE__ */ (0, $.jsxs)("button", {
										type: "button",
										"aria-label": de[e],
										disabled: a || z(t),
										onClick: () => I(t),
										children: [/* @__PURE__ */ (0, $.jsx)("span", {
											className: "shortcuts-picker__icon",
											children: /* @__PURE__ */ (0, $.jsx)(ne, { action: e })
										}), /* @__PURE__ */ (0, $.jsx)("strong", { children: de[e] })]
									}, e);
								}),
								h.kind === "room" && E.filter((e) => R(r[e.id] ?? e.name)).map((e) => {
									let t = {
										kind: "room",
										roomId: e.id
									};
									return /* @__PURE__ */ (0, $.jsxs)("button", {
										type: "button",
										"aria-label": r[e.id] ?? e.name,
										disabled: a || z(t),
										onClick: () => I(t),
										children: [/* @__PURE__ */ (0, $.jsx)("span", {
											className: "shortcuts-picker__icon",
											children: /* @__PURE__ */ (0, $.jsx)(Ht, {
												name: r[e.id] ?? e.name,
												pictureUrl: n[e.id]
											})
										}), /* @__PURE__ */ (0, $.jsx)("strong", { children: r[e.id] ?? e.name })]
									}, e.id);
								}),
								h.kind === "device" && E.map((n) => {
									let o = r[n.id] ?? n.name, s = D.filter((t) => Z(t, e) === n.id).filter((e) => R(o) || R(i[e.id] ?? t[e.modelId]?.label ?? e.modelId));
									return s.length ? /* @__PURE__ */ (0, $.jsxs)("section", {
										className: "shortcuts-picker__room",
										"aria-label": o,
										children: [/* @__PURE__ */ (0, $.jsx)("h3", { children: o }), /* @__PURE__ */ (0, $.jsx)("div", {
											className: "shortcuts-picker__room-grid",
											children: s.map((e) => {
												let n = {
													kind: "device",
													deviceId: e.id
												}, r = i[e.id] ?? t[e.modelId]?.label ?? e.modelId.replaceAll("-", " ");
												return /* @__PURE__ */ (0, $.jsxs)("button", {
													type: "button",
													"aria-label": `${r} · ${o}`,
													disabled: a || z(n),
													onClick: () => I(n),
													children: [/* @__PURE__ */ (0, $.jsx)("span", {
														className: "shortcuts-picker__icon",
														children: /* @__PURE__ */ (0, $.jsx)(Ct, {
															modelId: e.modelId,
															models: t
														})
													}), /* @__PURE__ */ (0, $.jsx)("strong", { children: r })]
												}, e.id);
											})
										})]
									}, n.id) : null;
								}),
								h.kind === "device" && D.length === 0 && /* @__PURE__ */ (0, $.jsx)("p", { children: "No room devices are available. Add one in Arrange first." })
							]
						})
					]
				}) : /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "shortcuts-workspace__prompt",
					children: [/* @__PURE__ */ (0, $.jsx)("h2", { children: "Choose a shortcut" }), /* @__PURE__ */ (0, $.jsx)("p", { children: "Select a shortcut below to edit it, or select Add to create one." })]
				})
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "shortcuts-workspace__bar-zone",
				children: [/* @__PURE__ */ (0, $.jsx)("div", {
					className: "shortcuts-workspace__bar-measure",
					ref: C,
					children: /* @__PURE__ */ (0, $.jsx)("nav", {
						className: "scene-action-dock",
						"aria-label": "Draft action bar",
						children: /* @__PURE__ */ (0, $.jsxs)("div", {
							className: "scene-action-bar",
							style: { "--scene-action-count": j.length + +!!A + 1 },
							children: [
								j.map(F),
								A && /* @__PURE__ */ (0, $.jsxs)("div", {
									className: "scene-action-overflow",
									children: [/* @__PURE__ */ (0, $.jsx)("button", {
										type: "button",
										className: "scene-action-slot is-filled",
										"aria-label": "More shortcuts",
										"aria-expanded": y,
										onClick: () => b(!y),
										children: /* @__PURE__ */ (0, $.jsx)(o, {
											icon: "•••",
											label: "More"
										})
									}), y && /* @__PURE__ */ (0, $.jsx)("div", {
										className: "scene-action-overflow__tray",
										role: "group",
										"aria-label": "More shortcuts",
										children: M.map(F)
									})]
								}),
								/* @__PURE__ */ (0, $.jsx)("button", {
									type: "button",
									className: "scene-action-slot shortcuts-workspace__empty",
									"aria-label": "Add shortcut",
									"aria-pressed": p === "",
									disabled: a,
									onClick: () => {
										m(""), g(null);
									},
									onKeyDown: (e) => {
										e.key === "ArrowUp" && (e.preventDefault(), m(""), requestAnimationFrame(() => w.current?.querySelector("button")?.focus()));
									},
									children: /* @__PURE__ */ (0, $.jsx)(o, {
										icon: /* @__PURE__ */ (0, $.jsx)(J, { name: "plus" }),
										label: "Add"
									})
								})
							]
						})
					})
				}), p !== null && !h && /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "shortcuts-workspace__tray",
					ref: w,
					role: "group",
					"aria-label": O ? `Edit ${N(O)}` : "Add shortcut",
					children: [
						/* @__PURE__ */ (0, $.jsxs)("button", {
							type: "button",
							disabled: a,
							onClick: () => L("built-in"),
							children: [/* @__PURE__ */ (0, $.jsx)(J, { name: "grid" }), O ? "Replace with action" : "Add action"]
						}),
						/* @__PURE__ */ (0, $.jsxs)("button", {
							type: "button",
							disabled: a,
							onClick: () => L("room"),
							children: [/* @__PURE__ */ (0, $.jsx)(J, { name: "rooms" }), O ? "Replace with room" : "Add room"]
						}),
						/* @__PURE__ */ (0, $.jsxs)("button", {
							type: "button",
							disabled: a,
							onClick: () => L("device"),
							children: [/* @__PURE__ */ (0, $.jsx)(J, { name: "devices" }), O ? "Replace with device" : "Add device"]
						}),
						O && /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
							/* @__PURE__ */ (0, $.jsx)("span", { className: "shortcuts-workspace__tray-separator" }),
							/* @__PURE__ */ (0, $.jsx)("button", {
								type: "button",
								"aria-label": "Move left",
								disabled: a || T[0]?.id === O.id,
								onClick: () => d(ps(T, O.id, -1)),
								children: /* @__PURE__ */ (0, $.jsx)(J, { name: "chevronLeft" })
							}),
							/* @__PURE__ */ (0, $.jsx)("button", {
								type: "button",
								"aria-label": "Move right",
								disabled: a || T.at(-1)?.id === O.id,
								onClick: () => d(ps(T, O.id, 1)),
								children: /* @__PURE__ */ (0, $.jsx)(J, { name: "chevron" })
							}),
							/* @__PURE__ */ (0, $.jsx)("button", {
								type: "button",
								"aria-label": "Remove shortcut",
								disabled: a,
								onClick: () => {
									d(ms(T, O.id)), m(null);
								},
								children: /* @__PURE__ */ (0, $.jsx)(J, { name: "delete" })
							})
						] })
					]
				})]
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-workspace/EditorWorkspace.tsx
var _s = !1;
function vs(e) {
	let { editorProject: t, setActionBarItems: n, cameraFocusRoomId: r, focusRoom: i, selectSceneItem: a, floorNavigation: o, activeFloorId: s, stairPlacement: c, setStairPlacement: l, stairDialog: u, setStairDialog: d, floorDialog: f, setFloorDialog: p, showFloorBelow: m, setShowFloorBelow: h, lowerFloor: g, startStairs: v, connectFloor: y, mode: x, editingLocked: S, publishOpen: C, previewOpen: w, connectManifest: T, connect: E, clearConstructionSelection: D, clearFurnishingSelection: O, cameraView: k, cameraResetKey: A, constructEditor: j, dragging: M, cameraFocusPoint: N, handleCameraTargetChange: I, savedCamera: L, previewSceneItems: R, displayedContextualIssues: ee, activeIssueKey: te, issueFocusVersion: ne, poolDrawing: re, floorZoneDrawing: B, focusIssue: ie, furnishingModels: ae, deviceModels: oe, visualManifest: se, selectedRoomId: le, editorResolvedBindings: de, marqueeSelecting: V, floorPaintTarget: fe, requestRoomPaint: pe, setDragging: H, constructMeasure: me, setSelectedRoomId: U, setMarqueeSelecting: he, selectedOpening: ge, detailsOpeningId: _e, setDetailsOpeningId: ve, duplicateConstructionOpening: ye, visualSceneItems: be, furnishingEditor: xe, selectedItem: Se, selectedDefinition: W, detailsItemId: Ce, setDetailsItemId: we, unsettled: Te, selectMode: Ee, duplicateArrangeItem: G, deleteSceneItem: De, setCameraView: Oe, walkButton: ke, setPreviewOpen: K, closeEditor: Ae, onWorkspaces: je, closing: Me, setPublishMessage: Ne, setPublishOpen: Pe, runtime: q, workspace: Fe, undoProject: Ie, redoProject: Le, floorFinish: ze, setFloorFinish: Be, setFloorPaintTarget: Ve, homeAssistantUrl: He, signIn: Ue, snapshot: Y, flush: We, lifecycle: Ge, commit: Ke, replaceEditorsFromProject: qe, catalogBrowsing: Je, setCatalogBrowsing: Ye, catalogError: Ze, addCatalogItem: Qe, arrangeAnnouncement: $e, pendingRoomPaintId: et, confirmRoomPaint: tt, setPendingRoomPaintId: X, autosaveStatus: nt, editedManifest: it, closeWalk: at, publishErrors: st, publishWarnings: ct, publishIssues: ut, publishMessage: dt, publishing: ft, publishProject: pt } = us(e), mt = Qt(t, x), ht = e.navigation?.request.panel === "action-bar" || e.initialRequest?.panel === "action-bar", [_t, vt] = (0, Q.useState)(ht), yt = Xe(), bt = F("cabane-icon.png");
	(0, Q.useEffect)(() => {
		vt(ht);
	}, [ht]);
	let Z = e.navigation ? ht : _t, xt = (0, Q.useRef)(null);
	(0, Q.useEffect)(() => {
		xt.current && (xt.current.scrollTop = 0);
	}, [x, Z]);
	let St = (t) => {
		t === "shortcuts" ? (vt(!0), e.navigation?.go({
			mode: "construct",
			panel: "action-bar"
		})) : (vt(!1), Ee(t));
	}, Ct = He ? ue(He) : null, wt = Ct ? Y.bindings[Ct]?.draft.roomAreaIds : void 0, Tt = Object.fromEntries(t.floors.flatMap((e) => e.rooms.map((e) => {
		let t = q.areas.find((t) => t.area_id === wt?.[e.id]);
		return [e.id, z(t?.picture, q.origin)];
	}))), Et = Object.fromEntries(t.floors.flatMap((e) => e.rooms.map((e) => {
		let t = q.areas.find((t) => t.area_id === wt?.[e.id]);
		return [e.id, t?.name?.trim() || e.name];
	}))), Dt = (0, Q.useMemo)(() => P(it, E.profile, q, oe), [
		it,
		E.profile,
		q,
		oe
	]), Ot = Object.fromEntries(Object.values(Dt.rooms).flatMap((e) => e.devices.flatMap((e) => e.displayName ? [[e.slot.id, e.displayName]] : []))), [kt, At] = (0, Q.useState)(null), [jt, Mt] = (0, Q.useState)(null), Nt = S || Te || !!j.drawStart || C || w, Pt = () => {
		let e = mt.state;
		if (!e || Nt) return;
		if (e.step === "arrange" && x === "furnish") {
			mt.ready();
			return;
		}
		let t = e.step === "arrange" ? "furnish" : e.step === "connect" ? "connect" : "construct";
		e.target && o.selectFloor(e.target.floorId), Ee(t), Mt({
			step: e.step,
			target: e.target
		});
	};
	(0, Q.useEffect)(() => {
		if (!jt || Nt) return;
		let { step: e, target: t } = jt;
		x !== (e === "arrange" ? "furnish" : e === "connect" ? "connect" : "construct") || t && (s !== t.floorId || j.previewFloor.id !== t.floorId) || (t && i(t.roomId), e === "walls" && j.setTool("wall"), (e === "door" || e === "window") && j.setTool(e), e === "name" && t && (j.setTool("select"), j.selectRoom(t.roomId), At({
			roomId: t.roomId,
			serial: Date.now()
		})), Mt(null));
	}, [
		jt,
		Nt,
		x,
		s,
		j.previewFloor.id
	]);
	let [Ft, It] = (0, Q.useState)(null);
	(0, Q.useEffect)(() => {
		It(null);
	}, [x, s]), (0, Q.useEffect)(() => {
		let e = (e) => {
			e.key === "Escape" && It(null);
		};
		return yt.events.addEventListener("keydown", e), () => yt.events.removeEventListener("keydown", e);
	}, []), (0, Q.useEffect)(() => {
		(j.tool !== "select" || c) && It(null);
	}, [j.tool, c]);
	let Lt = x === "construct" && Ft === s;
	return /* @__PURE__ */ (0, $.jsxs)("main", {
		className: `direction-preview${Z ? " is-shortcuts" : x === "connect" ? " is-connect" : x === "construct" ? " is-plan" : ""}`,
		"data-editor-mode": Z ? "shortcuts" : x,
		children: [
			!Z && /* @__PURE__ */ (0, $.jsx)(qo, {
				onNameFocusHandled: () => At(null),
				cameraFocusRoomId: r,
				nameFocusRequest: kt,
				placingWalkStart: Lt,
				onWalkStartPlaced: () => It(null),
				selectSceneItem: a,
				stairDialog: u,
				floorNavigation: o,
				activeFloorId: s,
				stairPlacement: c,
				setStairPlacement: l,
				setStairDialog: d,
				showFloorBelow: m,
				lowerFloor: g,
				commit: Ke,
				snapshot: Y,
				connectFloor: y,
				mode: x,
				editingLocked: S,
				publishOpen: C,
				previewOpen: w,
				connectManifest: T,
				connect: E,
				clearConstructionSelection: D,
				clearFurnishingSelection: O,
				cameraView: k,
				cameraResetKey: A,
				constructEditor: j,
				dragging: M,
				cameraFocusPoint: N,
				handleCameraTargetChange: I,
				savedCamera: L,
				previewSceneItems: R,
				displayedContextualIssues: ee,
				activeIssueKey: te,
				issueFocusVersion: ne,
				poolDrawing: re,
				floorZoneDrawing: B,
				focusIssue: ie,
				furnishingModels: ae,
				deviceModels: oe,
				visualManifest: se,
				selectedRoomId: le,
				editorResolvedBindings: de,
				marqueeSelecting: V,
				floorPaintTarget: fe,
				requestRoomPaint: pe,
				setDragging: H,
				constructMeasure: me,
				setSelectedRoomId: U,
				setMarqueeSelecting: he,
				selectedOpening: ge,
				detailsOpeningId: _e,
				setDetailsOpeningId: ve,
				duplicateConstructionOpening: ye,
				visualSceneItems: be,
				furnishingEditor: xe,
				selectedItem: Se,
				selectedDefinition: W,
				detailsItemId: Ce,
				setDetailsItemId: we,
				unsettled: Te,
				selectMode: Ee,
				duplicateArrangeItem: G,
				deleteSceneItem: De
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "editor-floor-controls",
				inert: C || w,
				children: [
					/* @__PURE__ */ (0, $.jsx)(_, {
						floors: Y.project.floors,
						selectedId: s,
						disabled: S || Te || !!f,
						onSelect: (e) => o.selectFloor(e),
						onAdd: x === "construct" ? () => {
							let e = Wt(Y, `floor-${Re()}`);
							Ke(e), o.selectFloor(e.project.floors.at(-1).id), j.replaceFloor(e.project.floors.at(-1)), xe.replaceItems([]);
						} : void 0,
						onRename: x === "construct" ? () => p("rename") : void 0,
						onRemove: x === "construct" && Y.project.floors.length > 1 && s === Y.project.floors.at(-1)?.id ? () => p("remove") : void 0
					}),
					c && /* @__PURE__ */ (0, $.jsxs)("div", {
						role: "status",
						children: ["Drag from bottom to top, or click each endpoint. Escape cancels.", /* @__PURE__ */ (0, $.jsx)("button", {
							type: "button",
							onClick: () => l(null),
							children: "Cancel stairs"
						})]
					}),
					x === "construct" && g && /* @__PURE__ */ (0, $.jsxs)("label", { children: [/* @__PURE__ */ (0, $.jsx)("input", {
						type: "checkbox",
						checked: m,
						onChange: (e) => h(e.target.checked)
					}), "Show floor below"] })
				]
			}),
			u && /* @__PURE__ */ (0, $.jsx)(wn, {
				project: Y.project,
				stair: Y.project.stairs.find((e) => e.id === u.id) ?? u,
				onCancel: () => d(null),
				onSave: (e) => {
					Ke({
						...Y,
						project: {
							...Y.project,
							stairs: [...Y.project.stairs.filter((t) => t.id !== e.id), e]
						}
					});
				}
			}, u.id),
			f && /* @__PURE__ */ (0, $.jsx)(Tn, {
				action: f,
				name: Y.project.floors.find((e) => e.id === s).name,
				height: Y.project.floors.find((e) => e.id === s).floorToFloorHeightMeters,
				itemCount: Y.project.sceneItems.filter((e) => e.floorId === s).length,
				stairCount: Y.project.stairs.filter((e) => e.upperFloorId === s).length,
				onCancel: () => p(null),
				onSave: (e, t) => {
					let n = f === "remove" ? Jt(Y) : qt(Kt(Y, s, e), s, t);
					Ke(n), qe(n.project), p(null);
				}
			}),
			/* @__PURE__ */ (0, $.jsx)(ho, {
				activeFloorId: s,
				stairPlacement: c,
				setStairPlacement: l,
				startStairs: v,
				snapshot: Y,
				editingLocked: S,
				publishOpen: C,
				previewOpen: w,
				mode: x,
				cameraView: k,
				setCameraView: Oe,
				walkButton: ke,
				unsettled: Te,
				setPreviewOpen: K,
				selectMode: Ee,
				closeEditor: Ae,
				closing: Me,
				setPublishMessage: Ne,
				setPublishOpen: Pe,
				connect: E,
				replaceEditorsFromProject: qe,
				runtime: q,
				constructEditor: j,
				dragging: M,
				floorZoneDrawing: B,
				poolDrawing: re,
				workspace: Fe,
				undoProject: Ie,
				redoProject: Le,
				shortcutsMode: Z,
				onModeTabChange: St
			}),
			Z && /* @__PURE__ */ (0, $.jsx)(rt, { children: /* @__PURE__ */ (0, $.jsx)(gs, {
				project: t,
				deviceModels: oe,
				roomPictures: Tt,
				roomNames: Et,
				deviceNames: Ot,
				disabled: S || Te || C || w,
				canUndo: Fe.canUndo && !Te,
				canRedo: Fe.canRedo && !Te,
				onUndo: Ie,
				onRedo: Le,
				onChange: n
			}) }),
			/* @__PURE__ */ (0, $.jsxs)("aside", {
				ref: xt,
				className: "direction-rail",
				inert: S || C || w,
				children: [
					/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "direction-rail__brand",
						children: [/* @__PURE__ */ (0, $.jsx)("img", {
							src: bt,
							alt: "",
							width: "43",
							height: "51"
						}), /* @__PURE__ */ (0, $.jsxs)("div", {
							className: "direction-rail__identity",
							children: [/* @__PURE__ */ (0, $.jsx)("h1", { children: "Cabane" }), je && /* @__PURE__ */ (0, $.jsxs)("button", {
								type: "button",
								className: "editor-workspace-link",
								title: `Switch workspace · ${Y.project.home.name}`,
								"aria-label": `Workspaces: ${Y.project.home.name}`,
								disabled: S || Te,
								onClick: je,
								children: [/* @__PURE__ */ (0, $.jsx)("span", { children: Y.project.home.name }), /* @__PURE__ */ (0, $.jsx)(J, { name: "chevron" })]
							})]
						})]
					}),
					/* @__PURE__ */ (0, $.jsx)(gn, { mode: Z ? "shortcuts" : x }),
					Z && /* @__PURE__ */ (0, $.jsxs)("div", {
						className: "shortcuts-guide",
						children: [
							/* @__PURE__ */ (0, $.jsx)("h3", { children: "Add a shortcut" }),
							/* @__PURE__ */ (0, $.jsx)("p", { children: "Select the empty slot in the bar, then choose an action, room or device." }),
							/* @__PURE__ */ (0, $.jsx)("h3", { children: "Edit your bar" }),
							/* @__PURE__ */ (0, $.jsx)("p", { children: "Select a shortcut to replace, move or remove it." }),
							/* @__PURE__ */ (0, $.jsx)("h3", { children: "Update Home" }),
							/* @__PURE__ */ (0, $.jsx)("p", { children: "Your changes save as a draft. Choose Save when your bar is ready." })
						]
					}),
					!Z && mt.state?.status === "active" && /* @__PURE__ */ (0, $.jsx)(en, {
						state: mt.state,
						mode: x,
						disabled: Nt,
						warning: mt.warning,
						onAction: Pt,
						onSkip: mt.skip,
						onDismiss: mt.dismiss
					}),
					!Z && x === "construct" && mt.state?.status !== "active" && fn(j.previewFloor) && /* @__PURE__ */ (0, $.jsx)("p", {
						className: "construction-empty-hint",
						children: "Your plan starts here. Choose Wall, then click each corner to draw your first room."
					}),
					!Z && x === "construct" && /* @__PURE__ */ (0, $.jsx)(Fi, {
						planImportControls: _s,
						tutorialControls: mt.state?.status !== "active" && /* @__PURE__ */ (0, $.jsxs)("details", {
							className: "construction-inspector__floor-disclosure",
							children: [
								/* @__PURE__ */ (0, $.jsxs)("summary", { children: ["Build tutorial", /* @__PURE__ */ (0, $.jsx)(J, { name: "chevron" })] }),
								/* @__PURE__ */ (0, $.jsx)("p", {
									className: "construction-inspector__tool-hint",
									children: "A guided introduction to drawing and furnishing your first room."
								}),
								/* @__PURE__ */ (0, $.jsx)("button", {
									type: "button",
									className: "editor-tutorial-restart",
									disabled: Nt,
									onClick: mt.restart,
									children: "Restart tutorial"
								})
							]
						}),
						walkStartControls: /* @__PURE__ */ (0, $.jsxs)("details", {
							className: "construction-inspector__floor-disclosure",
							children: [/* @__PURE__ */ (0, $.jsxs)("summary", { children: ["Walkthrough", /* @__PURE__ */ (0, $.jsx)(J, { name: "chevron" })] }), /* @__PURE__ */ (0, $.jsxs)("div", {
								className: "construction-walk-start",
								role: "group",
								"aria-label": "Walk starting point",
								children: [
									/* @__PURE__ */ (0, $.jsx)("p", { children: "Choose where you enter your home when you select Explore." }),
									/* @__PURE__ */ (0, $.jsx)("button", {
										type: "button",
										"aria-pressed": Lt,
										disabled: Te && !Lt,
										onClick: () => {
											D(), j.setTool("select"), It(Lt ? null : s);
										},
										children: Lt ? "Cancel" : Y.project.home.walkStart ? "Move starting point" : "Set starting point"
									}),
									Lt && /* @__PURE__ */ (0, $.jsx)("p", {
										role: "status",
										children: "Click inside the floor to set your starting point. Escape cancels."
									}),
									Y.project.home.walkStart && /* @__PURE__ */ (0, $.jsx)("button", {
										type: "button",
										onClick: () => {
											let { walkStart: e, ...t } = Y.project.home;
											Ke({
												...Y,
												project: {
													...Y.project,
													home: t
												}
											}), It(null);
										},
										children: "Use automatic start"
									})
								]
							})]
						}),
						roof: Y.project.home.roof,
						onRoofChange: (e) => Ke({
							...Y,
							project: {
								...Y.project,
								home: {
									...Y.project.home,
									roof: e
								}
							}
						}),
						editor: j,
						contextualIssues: ee,
						onIssueFocus: ie,
						floorPainting: {
							finish: ze,
							target: fe,
							drawingActive: B.active,
							drawingError: B.error,
							onFinishChange: Be,
							onTargetChange: (e) => {
								B.cancel(), Ve(e);
							},
							onCancelDrawing: B.cancel
						}
					}),
					!Z && x === "connect" && /* @__PURE__ */ (0, $.jsx)(ro, {
						editor: E,
						manifest: T,
						runtime: q,
						deviceModels: oe,
						homeAssistantUrl: He,
						onSettings: e.onHomeAssistantSettings
					}),
					/* @__PURE__ */ (0, $.jsx)("div", {
						className: "arrange-catalog-mount",
						hidden: Z || x !== "furnish",
						children: /* @__PURE__ */ (0, $.jsx)(lo, {
							enabled: !Z && x === "furnish",
							furnishingModels: ae,
							deviceModels: oe,
							browsing: Je,
							onBrowse: Ye,
							error: Ze,
							onChoose: Qe
						})
					})
				]
			}),
			x === "furnish" && Se && Ce === Se.id && /* @__PURE__ */ (0, $.jsx)("div", {
				inert: S || C || w,
				children: /* @__PURE__ */ (0, $.jsx)(Qa, {
					items: be,
					selectedId: xe.selectedId,
					floor: j.previewFloor,
					onWindowFit: (e, t, n, r) => {
						xe.beginTransaction(), xe.updatePlacement(e, t), xe.updateSize(e, n, r), xe.commitTransaction();
					},
					furnishingModels: ae,
					deviceModels: oe,
					onPlacementChange: xe.updatePlacement,
					onSizeChange: xe.updateSize,
					onLightStateChange: xe.updateLightState,
					onVariantChange: xe.updateVariant,
					onClose: () => we(null)
				})
			}),
			x === "construct" && !V && ge && ge.kind !== "passage" && _e === ge.id && /* @__PURE__ */ (0, $.jsx)("div", {
				inert: S || C || w,
				children: /* @__PURE__ */ (0, $.jsx)(In, {
					opening: ge,
					editor: j,
					disabled: M || S,
					onClose: () => ve(null)
				}, ge.id)
			}),
			/* @__PURE__ */ (0, $.jsx)("div", {
				className: "arrange-announcement",
				role: "status",
				children: $e
			}),
			et && (() => {
				let e = j.previewFloor.rooms.find((e) => e.id === et);
				return e ? /* @__PURE__ */ (0, $.jsx)(hi, {
					roomName: e.name || "this room",
					onKeepZones: () => tt(!1),
					onReplaceEverything: () => tt(!0),
					onCancel: () => X(null)
				}) : null;
			})(),
			nt !== "saved" && /* @__PURE__ */ (0, $.jsxs)("div", {
				className: `direction-status is-${nt}`,
				children: [
					/* @__PURE__ */ (0, $.jsx)("span", {}),
					nt === "saving" && "Saving draft…",
					nt === "error" && "Could not save · Changes kept in memory"
				]
			}),
			w && x !== "connect" && /* @__PURE__ */ (0, $.jsxs)("section", {
				className: "direction-preview-dialog",
				role: "dialog",
				"aria-modal": "true",
				"aria-label": "Explore draft",
				children: [/* @__PURE__ */ (0, $.jsx)(ce, {
					initialFloorId: s,
					children: /* @__PURE__ */ (0, $.jsx)(lt, {
						value: {
							...q,
							status: "unconfigured",
							configured: !1,
							canMutate: !1,
							origin: null,
							areas: [],
							devices: [],
							entityRegistry: [],
							entityStates: {},
							cameraClient: null,
							connect: () => void 0,
							retry: () => void 0,
							disconnect: async () => void 0,
							refresh: async () => void 0,
							callService: async () => {
								throw Error("Draft preview is non-operative.");
							}
						},
						children: /* @__PURE__ */ (0, $.jsx)(b, {
							manifest: it,
							architectureModels: ot,
							deviceModels: oe,
							bindingManager: {
								profile: gt(it.home.id),
								loaded: !0,
								hasStoredProfile: !1,
								save: () => void 0
							},
							walkthrough: {
								onExit: at,
								pointerLockTarget: ke.current?.closest("main")
							}
						})
					})
				}), /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "direction-dialog-bar",
					children: [/* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsx)("small", { children: "Explore draft" }), /* @__PURE__ */ (0, $.jsx)("strong", { children: "Check your changes at eye level." })] }), /* @__PURE__ */ (0, $.jsxs)("button", {
						type: "button",
						autoFocus: !0,
						"aria-keyshortcuts": "Escape",
						onClick: at,
						children: ["Back to editor", /* @__PURE__ */ (0, $.jsx)("kbd", {
							"aria-hidden": "true",
							children: "Esc"
						})]
					})]
				})]
			}),
			C && /* @__PURE__ */ (0, $.jsx)("div", {
				className: "direction-publish-backdrop",
				role: "presentation",
				children: /* @__PURE__ */ (0, $.jsxs)("section", {
					className: "direction-publish-dialog",
					role: "dialog",
					"aria-modal": "true",
					"aria-labelledby": "publish-title",
					children: [
						/* @__PURE__ */ (0, $.jsx)("p", { children: "Save home" }),
						/* @__PURE__ */ (0, $.jsx)("h2", {
							id: "publish-title",
							children: st.length > 0 ? `${st.length} issue${st.length === 1 ? "" : "s"} to fix` : ct.length > 0 ? "Ready with warnings" : "Ready to save"
						}),
						/* @__PURE__ */ (0, $.jsx)("p", {
							className: "direction-publish-dialog__summary",
							children: st.length > 0 ? "The current draft stays saved, but it cannot replace your live home yet." : "Saving replaces the version used by Home. Your draft remains editable."
						}),
						ut.length > 0 && /* @__PURE__ */ (0, $.jsx)("ul", { children: ut.map((e) => /* @__PURE__ */ (0, $.jsxs)("li", {
							"data-severity": e.severity,
							children: [/* @__PURE__ */ (0, $.jsx)("span", { children: e.severity === "error" ? "×" : "!" }), /* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsx)("strong", { children: e.message }), /* @__PURE__ */ (0, $.jsx)("small", { children: e.path })] })]
						}, `${e.code}:${e.path}:${e.message}`)) }),
						dt && /* @__PURE__ */ (0, $.jsx)("div", {
							className: "direction-publish-dialog__result",
							role: "status",
							children: dt
						}),
						/* @__PURE__ */ (0, $.jsxs)("footer", { children: [/* @__PURE__ */ (0, $.jsx)("button", {
							type: "button",
							disabled: ft,
							onClick: () => Pe(!1),
							children: "Cancel"
						}), /* @__PURE__ */ (0, $.jsx)("button", {
							type: "button",
							className: "is-primary",
							disabled: st.length > 0 || S || Te,
							onClick: () => void pt(),
							children: ft ? "Saving…" : ct.length > 0 ? "Save anyway" : "Save changes"
						})] })
					]
				})
			})
		]
	});
}
//#endregion
//#region apps/web/src/HomeEditor.tsx
var ys = (e, t) => {
	let n = URL.createObjectURL(new Blob([t], { type: "application/json" })), r = document.createElement("a");
	r.href = n, r.download = `${e}.corrupt-project.json`, r.click(), URL.revokeObjectURL(n);
};
function bs({ initialRecord: e, lifecycle: t, recoveryMessage: n, recoveryRaw: r, onClose: i, autosaveDelayMs: a, ...o }) {
	let [s, c] = (0, Q.useState)(() => ({
		record: e,
		recoveryMessage: n,
		recoveryRaw: r,
		resetError: null
	}));
	return s.recoveryMessage ? /* @__PURE__ */ (0, $.jsxs)("main", {
		className: "direction-project-loading is-error",
		children: [
			/* @__PURE__ */ (0, $.jsx)("strong", { children: "Your saved project needs recovery." }),
			/* @__PURE__ */ (0, $.jsx)("span", { children: s.resetError ?? s.recoveryMessage }),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "direction-project-loading__actions",
				children: [
					/* @__PURE__ */ (0, $.jsx)("button", {
						type: "button",
						onClick: () => ys(s.record.homeId, s.recoveryRaw ?? ""),
						children: "Download recovery data"
					}),
					/* @__PURE__ */ (0, $.jsx)("button", {
						type: "button",
						onClick: () => (o.onRecoveryWorkspaces ?? o.onWorkspaces)?.(),
						children: "Workspaces"
					}),
					/* @__PURE__ */ (0, $.jsx)("button", {
						type: "button",
						disabled: s.recoveryRaw === void 0,
						onClick: () => {
							s.recoveryRaw === void 0 || !window.confirm("Reset this workspace to an empty home? Download recovery data first if you want to keep a copy.") || t.recoverToSeed(s.record, s.recoveryRaw).then((e) => {
								e.status === "saved" ? c({
									record: e.record,
									recoveryMessage: void 0,
									recoveryRaw: void 0,
									resetError: null
								}) : c((t) => ({
									...t,
									resetError: e.status === "storage-error" ? e.error.message : "The project could not be reset in browser storage."
								}));
							});
						},
						children: "Reset to empty home"
					}),
					/* @__PURE__ */ (0, $.jsx)("button", {
						type: "button",
						className: "is-primary",
						disabled: s.recoveryRaw === void 0,
						onClick: () => {
							s.recoveryRaw !== void 0 && t.recoverWithoutMissingSceneItems(s.record, s.recoveryRaw).then((e) => {
								e.status === "saved" ? c({
									record: e.record,
									recoveryMessage: void 0,
									recoveryRaw: void 0,
									resetError: null
								}) : c((t) => ({
									...t,
									resetError: e.status === "storage-error" ? e.error.message : "The unavailable items could not be removed from browser storage."
								}));
							});
						},
						children: "Remove unavailable items and continue"
					})
				]
			})
		]
	}) : /* @__PURE__ */ (0, $.jsx)(vs, {
		initialRecord: s.record,
		lifecycle: t,
		onClose: i,
		autosaveDelayMs: a,
		...o
	});
}
//#endregion
export { bs as HomeEditor };
