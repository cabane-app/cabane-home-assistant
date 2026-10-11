import { r as e } from "./rolldown-runtime-B0aSnxlc.js";
import { $ as t, $r as n, $t as r, An as i, Ar as a, At as o, B as s, Br as c, Bt as l, C as u, Ci as d, D as f, Dn as p, Dt as m, E as h, En as g, Fn as _, Fr as v, G as y, H as b, Hn as x, Ht as S, Ir as C, It as w, J as T, Jt as E, K as D, Kn as O, Kr as k, Kt as A, Lr as j, Mn as M, Mr as N, Mt as P, N as F, On as I, Ot as L, P as R, Q as z, Qn as B, Qr as V, R as H, S as U, Si as W, Sn as ee, Sr as te, T as ne, Tn as re, U as ie, Ut as G, V as ae, Vn as K, Vr as oe, Vt as se, W as ce, Wn as le, Wt as ue, X as de, Xr as fe, Y as pe, Yn as me, Yt as he, Z as ge, Zn as q, Zr as _e, Zt as ve, _ as ye, _n as be, _r as xe, _t as Se, a as Ce, ai as J, an as we, ar as Te, at as Ee, b as De, bn as Oe, c as ke, ci as Ae, cn as je, cr as Me, ct as Ne, d as Pe, di as Fe, dn as Ie, dr as Le, dt as Re, er as ze, et as Be, f as Ve, fi as He, fn as Ue, fr as We, ft as Ge, g as Ke, gi as qe, gn as Je, gt as Ye, h as Xe, hi as Ze, hn as Qe, hr as $e, i as et, ii as tt, in as nt, ir as rt, it, jn as at, jr as ot, jt as st, kn as ct, kt as lt, l as ut, li as dt, ln as ft, lr as pt, lt as mt, m as ht, mi as gt, mn as _t, mr as vt, nn as yt, nr as bt, nt as xt, o as St, oi as Ct, on as wt, or as Tt, ot as Et, p as Dt, pi as Ot, pn as kt, pr as At, pt as jt, q as Mt, qr as Y, r as Nt, rn as Pt, rr as Ft, rt as It, si as Lt, sn as Rt, sr as zt, st as Bt, tn as Vt, tr as Ht, tt as Ut, u as Wt, ui as Gt, un as Kt, ur as qt, ut as Jt, vn as Yt, w as Xt, wn as Zt, wr as Qt, x as $t, xi as en, xn as tn, y as nn, yi as rn, z as an, zr as on } from "./LaserIcon-BMR5EwND.js";
import { C as X, E as sn, L as cn, M as ln, S as un, T as dn, _ as fn, a as pn, b as mn, c as hn, f as gn, g as _n, i as vn, j as yn, k as bn, l as xn, n as Sn, o as Cn, p as wn, r as Tn, s as En, t as Dn, u as On, v as kn, x as An, z as jn } from "./ShortcutDeviceIcon-aWhGlv9D.js";
//#region node_modules/@react-three/drei/core/OrbitControls.js
var Z = /* @__PURE__ */ e(d()), Mn = /* @__PURE__ */ Z.forwardRef(({ makeDefault: e, camera: t, regress: n, domElement: r, enableDamping: i = !0, keyEvents: a = !1, onChange: o, onStart: s, onEnd: c, ...l }, u) => {
	let d = B((e) => e.invalidate), f = B((e) => e.camera), m = B((e) => e.gl), h = B((e) => e.events), g = B((e) => e.setEvents), _ = B((e) => e.set), v = B((e) => e.get), y = B((e) => e.performance), b = t || f, x = r || h.connected || m.domElement, S = Z.useMemo(() => new p(b), [b]);
	return q(() => {
		S.enabled && S.update();
	}, -1), Z.useEffect(() => (a && S.connect(a === !0 ? x : a), S.connect(x), () => void S.dispose()), [
		a,
		x,
		n,
		S,
		d
	]), Z.useEffect(() => {
		let e = (e) => {
			d(), n && y.regress(), o && o(e);
		}, t = (e) => {
			s && s(e);
		}, r = (e) => {
			c && c(e);
		};
		return S.addEventListener("change", e), S.addEventListener("start", t), S.addEventListener("end", r), () => {
			S.removeEventListener("start", t), S.removeEventListener("end", r), S.removeEventListener("change", e);
		};
	}, [
		o,
		s,
		c,
		S,
		d,
		g
	]), Z.useEffect(() => {
		if (e) {
			let e = v().controls;
			return _({ controls: S }), () => _({ controls: e });
		}
	}, [e, S]), /*#__PURE__*/ Z.createElement("primitive", ct({
		ref: u,
		object: S,
		enableDamping: i
	}, l));
}), Nn = /*#__PURE__*/ function(e) {
	return e[e.NONE = 0] = "NONE", e[e.START = 1] = "START", e[e.ACTIVE = 2] = "ACTIVE", e;
}(Nn || {}), Pn = (e) => e && e.isOrthographicCamera, Fn = (e) => e && e.isBox3, In = (e) => 1 - Math.exp(-5 * e) + .007 * e, Ln = /*#__PURE__*/ Z.createContext(null);
function Rn({ children: e, maxDuration: t = 1, margin: n = 1.2, observe: r, fit: i, clip: o, interpolateFunc: s = In, onFit: c }) {
	let l = Z.useRef(null), { camera: u, size: d, invalidate: f } = B(), p = B((e) => e.controls), m = Z.useRef(c);
	m.current = c;
	let h = Z.useRef({
		camPos: new Y(),
		camRot: new C(),
		camZoom: 1
	}), g = Z.useRef({
		camPos: void 0,
		camRot: void 0,
		camZoom: void 0,
		camUp: void 0,
		target: void 0
	}), _ = Z.useRef(Nn.NONE), v = Z.useRef(0), [y] = Z.useState(() => new vt()), b = Z.useMemo(() => {
		function e() {
			let e = y.getSize(new Y()), t = y.getCenter(new Y()), r = Math.max(e.x, e.y, e.z), i = Pn(u) ? r * 4 : r / (2 * Math.atan(Math.PI * u.fov / 360)), a = Pn(u) ? r * 4 : i / u.aspect, o = n * Math.max(i, a);
			return {
				box: y,
				size: e,
				center: t,
				distance: o
			};
		}
		return {
			getSize: e,
			refresh(e) {
				if (Fn(e)) y.copy(e);
				else {
					let t = e || l.current;
					if (!t) return this;
					t.updateWorldMatrix(!0, !0), y.setFromObject(t);
				}
				if (y.isEmpty()) {
					let e = u.position.length() || 10;
					y.setFromCenterAndSize(new Y(), new Y(e, e, e));
				}
				return h.current.camPos.copy(u.position), h.current.camRot.copy(u.quaternion), Pn(u) && (h.current.camZoom = u.zoom), g.current.camPos = void 0, g.current.camRot = void 0, g.current.camZoom = void 0, g.current.camUp = void 0, g.current.target = void 0, this;
			},
			reset() {
				let { center: t, distance: n } = e(), r = u.position.clone().sub(t).normalize();
				g.current.camPos = t.clone().addScaledVector(r, n), g.current.target = t.clone();
				let i = new a().lookAt(g.current.camPos, g.current.target, u.up);
				return g.current.camRot = new C().setFromRotationMatrix(i), _.current = Nn.START, v.current = 0, this;
			},
			moveTo(e) {
				return g.current.camPos = Array.isArray(e) ? new Y(...e) : e.clone(), _.current = Nn.START, v.current = 0, this;
			},
			lookAt({ target: e, up: t }) {
				g.current.target = Array.isArray(e) ? new Y(...e) : e.clone(), t ? g.current.camUp = Array.isArray(t) ? new Y(...t) : t.clone() : g.current.camUp = u.up.clone();
				let n = new a().lookAt(g.current.camPos || u.position, g.current.target, g.current.camUp);
				return g.current.camRot = new C().setFromRotationMatrix(n), _.current = Nn.START, v.current = 0, this;
			},
			to({ position: e, target: t }) {
				return this.moveTo(e).lookAt({ target: t });
			},
			fit() {
				if (!Pn(u)) return this.reset();
				let e = 0, t = 0, r = [
					new Y(y.min.x, y.min.y, y.min.z),
					new Y(y.min.x, y.max.y, y.min.z),
					new Y(y.min.x, y.min.y, y.max.z),
					new Y(y.min.x, y.max.y, y.max.z),
					new Y(y.max.x, y.max.y, y.max.z),
					new Y(y.max.x, y.max.y, y.min.z),
					new Y(y.max.x, y.min.y, y.max.z),
					new Y(y.max.x, y.min.y, y.min.z)
				], i = g.current.camPos || u.position, o = g.current.target || p?.target, s = g.current.camUp || u.up, c = o ? new a().lookAt(i, o, s).setPosition(i).invert() : u.matrixWorldInverse;
				for (let n of r) n.applyMatrix4(c), e = Math.max(e, Math.abs(n.y)), t = Math.max(t, Math.abs(n.x));
				e *= 2, t *= 2;
				let l = (u.top - u.bottom) / e, d = (u.right - u.left) / t;
				return g.current.camZoom = Math.min(l, d) / n, _.current = Nn.START, v.current = 0, m.current && m.current(this.getSize()), this;
			},
			clip() {
				let { distance: t } = e();
				return u.near = t / 100, u.far = t * 100, u.updateProjectionMatrix(), p && (p.maxDistance = t * 10, p.update()), f(), this;
			}
		};
	}, [
		y,
		u,
		p,
		n,
		f
	]);
	Z.useLayoutEffect(() => {
		if (p) {
			let e = () => {
				if (p && g.current.target && _.current !== Nn.NONE) {
					let e = new Y().setFromMatrixColumn(u.matrix, 2), t = h.current.camPos.distanceTo(p.target), n = (g.current.camPos || h.current.camPos).distanceTo(g.current.target), r = (1 - v.current) * t + v.current * n;
					p.target.copy(u.position).addScaledVector(e, -r), p.update();
				}
				_.current = Nn.NONE;
			};
			return p.addEventListener("start", e), () => p.removeEventListener("start", e);
		}
	}, [p]);
	let x = Z.useRef(0);
	return Z.useLayoutEffect(() => {
		(r || x.current++ === 0) && (b.refresh(), i && b.reset().fit(), o && b.clip());
	}, [
		d,
		o,
		i,
		r,
		u,
		p
	]), q((e, n) => {
		if (_.current === Nn.START) _.current = Nn.ACTIVE, f();
		else if (_.current === Nn.ACTIVE) {
			if (v.current += n / t, v.current >= 1) g.current.camPos && u.position.copy(g.current.camPos), g.current.camRot && u.quaternion.copy(g.current.camRot), g.current.camUp && u.up.copy(g.current.camUp), g.current.camZoom && Pn(u) && (u.zoom = g.current.camZoom), u.updateMatrixWorld(), u.updateProjectionMatrix(), p && g.current.target && (p.target.copy(g.current.target), p.update()), _.current = Nn.NONE;
			else {
				let e = s(v.current);
				g.current.camPos && u.position.lerpVectors(h.current.camPos, g.current.camPos, e), g.current.camRot && u.quaternion.slerpQuaternions(h.current.camRot, g.current.camRot, e), g.current.camUp && u.up.set(0, 1, 0).applyQuaternion(u.quaternion), g.current.camZoom && Pn(u) && (u.zoom = (1 - e) * h.current.camZoom + e * g.current.camZoom), u.updateMatrixWorld(), u.updateProjectionMatrix();
			}
			f();
		}
	}), /*#__PURE__*/ Z.createElement("group", { ref: l }, /*#__PURE__*/ Z.createElement(Ln.Provider, { value: b }, e));
}
//#endregion
//#region packages/engine/src/imported-models/normalization.ts
function zn(e, t, n = [
	0,
	0,
	0
], r = 1) {
	if (!Number.isFinite(r) || r <= 0 || n.some((e) => !Number.isFinite(e))) throw Error("Orientation and scale must be finite; scale must be positive.");
	let i = new Qt();
	i.rotation.set(...n), i.scale.setScalar(r), i.add(O(e));
	let a = new vt().setFromObject(i, !0), o = a.getCenter(new Y()), s = [
		-o.x,
		t === "floor" ? -a.min.y : t === "ceiling" ? -a.max.y : -o.y,
		t === "wall" ? -a.min.z : -o.z
	];
	a.translate(new Y(...s));
	for (let e of [
		"x",
		"y",
		"z"
	]) a.max[e] - a.min[e] < .001 && (a.max[e] = a.min[e] + .001);
	return {
		rotation: n,
		scale: r,
		offset: s,
		size: a.getSize(new Y()).toArray(),
		bounds: {
			min: a.min.toArray(),
			max: a.max.toArray()
		}
	};
}
//#endregion
//#region apps/web/src/editor-chrome/EditorButton.tsx
var Q = W();
function $({ variant: e = "secondary", className: t = "", type: n = "button", ...r }) {
	return /* @__PURE__ */ (0, Q.jsx)("button", {
		...r,
		type: n,
		className: `editor-button ${t}`.trim(),
		"data-variant": e
	});
}
//#endregion
//#region apps/web/src/editor-floors/FloorManagementDialog.tsx
function Bn({ action: e, name: t, itemCount: n, stairCount: r, height: i, onSave: a, onCancel: o, onRemove: s, removeDisabledReason: c }) {
	let l = Ht(), u = (0, Z.useRef)(null), d = (0, Z.useId)(), f = (0, Z.useId)(), p = (0, Z.useId)(), [m, h] = (0, Z.useState)(t), [g, _] = (0, Z.useState)(String(i)), v = e === "rename" && (!m.trim() || !Number.isFinite(Number(g)) || Number(g) <= 0);
	return (0, Z.useEffect)(() => {
		let e = l.root.activeElement;
		return u.current?.showModal?.(), () => {
			e?.isConnected && e.focus();
		};
	}, [l]), /* @__PURE__ */ (0, Q.jsx)("dialog", {
		ref: u,
		className: "floor-management-dialog",
		"aria-labelledby": d,
		onCancel: (e) => {
			e.preventDefault(), o();
		},
		children: /* @__PURE__ */ (0, Q.jsxs)("form", {
			onSubmit: (e) => {
				e.preventDefault(), v || a(m.trim(), Number(g));
			},
			children: [
				/* @__PURE__ */ (0, Q.jsxs)("header", { children: [/* @__PURE__ */ (0, Q.jsx)("h2", {
					id: d,
					children: e === "remove" ? `Remove ${t}?` : "Floor settings"
				}), /* @__PURE__ */ (0, Q.jsx)($, {
					"aria-label": "Close floor settings",
					onClick: o,
					children: /* @__PURE__ */ (0, Q.jsx)(X, { name: "close" })
				})] }),
				e === "remove" ? /* @__PURE__ */ (0, Q.jsxs)("p", { children: [
					"This removes this floor, its ",
					n,
					" items and ",
					r,
					" connecting stairs. You can undo this change."
				] }) : /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "floor-management-dialog__fields",
					children: [
						/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Floor name", /* @__PURE__ */ (0, Q.jsx)("input", {
							autoFocus: !0,
							required: !0,
							value: m,
							onChange: (e) => h(e.target.value)
						})] }),
						/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Floor-to-floor height (m)", /* @__PURE__ */ (0, Q.jsx)("input", {
							type: "number",
							required: !0,
							min: "0.1",
							step: "0.01",
							"aria-describedby": f,
							value: g,
							onChange: (e) => _(e.target.value)
						})] }),
						/* @__PURE__ */ (0, Q.jsx)("p", {
							id: f,
							className: "floor-management-dialog__hint",
							children: "Distance from this floor to the floor above."
						})
					]
				}),
				/* @__PURE__ */ (0, Q.jsxs)("footer", { children: [
					e === "rename" && /* @__PURE__ */ (0, Q.jsx)($, {
						className: "floor-management-dialog__delete",
						disabled: !s,
						"aria-describedby": c ? p : void 0,
						onClick: s,
						children: "Delete floor"
					}),
					/* @__PURE__ */ (0, Q.jsx)($, {
						onClick: o,
						children: "Cancel"
					}),
					/* @__PURE__ */ (0, Q.jsx)($, {
						type: "submit",
						variant: "primary",
						disabled: v,
						className: e === "remove" ? "floor-management-dialog__remove" : void 0,
						children: e === "remove" ? "Remove floor" : "Save floor"
					})
				] }),
				e === "rename" && c && /* @__PURE__ */ (0, Q.jsx)("p", {
					id: p,
					className: "floor-management-dialog__delete-hint",
					children: c
				})
			]
		})
	});
}
//#endregion
//#region apps/web/src/editor-floors/ConstructFloorControls.tsx
function Vn({ floors: e, selectedId: t, disabled: n, onSelect: r, onAdd: i, onAddBelow: a, onSettings: o }) {
	let [s, c] = (0, Z.useState)(!1), l = (0, Z.useRef)(null), u = (0, Z.useRef)(null), d = (0, Z.useRef)(null), f = (0, Z.useId)(), p = s && !n, m = (e = !1) => {
		c(!1), e && u.current?.focus();
	};
	return (0, Z.useEffect)(() => {
		if (!p) return;
		d.current?.querySelector("[aria-checked=\"true\"]")?.focus();
		let e = (e) => {
			l.current?.contains(e.target) || c(!1);
		};
		return document.addEventListener("pointerdown", e), () => document.removeEventListener("pointerdown", e);
	}, [p]), (0, Z.useEffect)(() => {
		c(!1);
	}, [t, n]), /* @__PURE__ */ (0, Q.jsxs)("div", {
		ref: l,
		className: "construct-floor-controls",
		role: "group",
		"aria-label": "Floor controls",
		onBlur: (e) => {
			e.currentTarget.contains(e.relatedTarget) || m();
		},
		children: [
			/* @__PURE__ */ (0, Q.jsxs)("button", {
				ref: u,
				type: "button",
				className: "construct-floor-controls__trigger",
				"aria-label": "Current floor",
				"aria-description": e.find((e) => e.id === t)?.name,
				title: e.find((e) => e.id === t)?.name,
				"data-floor-id": t,
				"aria-haspopup": "menu",
				"aria-expanded": p,
				"aria-controls": p ? f : void 0,
				disabled: n,
				onClick: () => c(!p),
				onKeyDown: (e) => {
					(e.key === "ArrowDown" || e.key === "ArrowUp") && (e.preventDefault(), c(!0));
				},
				children: [/* @__PURE__ */ (0, Q.jsx)("span", { children: e.find((e) => e.id === t)?.name }), /* @__PURE__ */ (0, Q.jsx)(X, { name: "chevron" })]
			}),
			/* @__PURE__ */ (0, Q.jsx)($, {
				"aria-label": "Floor settings",
				title: "Floor settings",
				disabled: n,
				onClick: () => {
					m(), o();
				},
				children: /* @__PURE__ */ (0, Q.jsx)(X, { name: "settings" })
			}),
			p && /* @__PURE__ */ (0, Q.jsxs)("div", {
				ref: d,
				id: f,
				className: "construct-floor-controls__menu",
				role: "menu",
				"aria-label": "Floors",
				onKeyDown: (e) => {
					if (e.key === "Escape") {
						e.preventDefault(), e.stopPropagation(), m(!0);
						return;
					}
					let t = Array.from(d.current?.querySelectorAll("button") ?? []), n = t.indexOf(document.activeElement), r = e.key === "ArrowDown" ? (n + 1) % t.length : e.key === "ArrowUp" ? (n + t.length - 1) % t.length : e.key === "Home" ? 0 : e.key === "End" ? t.length - 1 : null;
					r !== null && (e.preventDefault(), e.stopPropagation(), t[r]?.focus());
				},
				children: [
					[...e].reverse().map((e) => /* @__PURE__ */ (0, Q.jsxs)("button", {
						type: "button",
						role: "menuitemradio",
						"aria-checked": e.id === t,
						tabIndex: -1,
						onClick: () => {
							m(!0), r(e.id);
						},
						children: [/* @__PURE__ */ (0, Q.jsx)("span", { children: e.name }), e.id === t && /* @__PURE__ */ (0, Q.jsx)(X, { name: "check" })]
					}, e.id)),
					/* @__PURE__ */ (0, Q.jsx)("div", { role: "separator" }),
					/* @__PURE__ */ (0, Q.jsxs)("button", {
						type: "button",
						role: "menuitem",
						tabIndex: -1,
						onClick: () => {
							m(!0), i();
						},
						children: [/* @__PURE__ */ (0, Q.jsx)(X, { name: "plus" }), /* @__PURE__ */ (0, Q.jsx)("span", { children: "Add floor above" })]
					}),
					a && /* @__PURE__ */ (0, Q.jsxs)("button", {
						type: "button",
						role: "menuitem",
						tabIndex: -1,
						onClick: () => {
							m(!0), a();
						},
						children: [/* @__PURE__ */ (0, Q.jsx)(X, { name: "plus" }), /* @__PURE__ */ (0, Q.jsx)("span", { children: "Add floor below" })]
					})
				]
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-floors/StairWarnings.tsx
function Hn({ issues: e, compact: t = !1 }) {
	let n = [...new Set(e.filter((e) => e.severity === "warning").map((e) => e.message))];
	if (!n.length) return null;
	let r = /* @__PURE__ */ (0, Q.jsx)("ul", { children: n.map((e) => /* @__PURE__ */ (0, Q.jsx)("li", { children: e }, e)) });
	return t ? /* @__PURE__ */ (0, Q.jsxs)("details", {
		className: "stair-warnings",
		"aria-label": "Stair warnings",
		children: [/* @__PURE__ */ (0, Q.jsxs)("summary", { children: [
			n.length,
			" ",
			n.length === 1 ? "warning" : "warnings"
		] }), r]
	}) : /* @__PURE__ */ (0, Q.jsxs)("section", {
		className: "stair-warnings",
		"aria-label": "Stair warnings",
		children: [/* @__PURE__ */ (0, Q.jsx)("h4", { children: n.length === 1 ? "Warning" : "Warnings" }), r]
	});
}
//#endregion
//#region apps/web/src/editor-floors/stair-preview-entries.tsx
var Un = {
	origin: [0, 0],
	metersPerPlanUnit: 1,
	scaleBasis: "inferred"
}, Wn = {
	id: "lower",
	name: "Preview",
	coordinates: Un,
	floorToFloorHeightMeters: 3,
	defaultWallHeightMeters: 3,
	defaultCeilingHeightMeters: 3,
	footprint: [],
	rooms: [],
	walls: [],
	openings: [],
	wallJunctions: []
}, Gn = {
	coordinates: Un,
	floors: [Wn, {
		...Wn,
		id: "upper"
	}],
	stairs: [],
	sceneItems: []
}, Kn = {
	id: "preview",
	lowerFloorId: "lower",
	upperFloorId: "upper",
	at: [0, 0],
	rotationYRadians: Math.PI
}, qn = [
	{
		label: "Straight",
		stair: {
			...Kn,
			shape: "straight",
			widthMeters: 1,
			runMeters: 4.5
		}
	},
	{
		label: "L-shaped",
		stair: {
			...Kn,
			shape: "l-shaped",
			widthMeters: 1,
			lowerRunMeters: 2.25,
			upperRunMeters: 2.25,
			turn: "right"
		}
	},
	{
		label: "U-shaped",
		stair: {
			...Kn,
			shape: "u-shaped",
			widthMeters: 1,
			lowerRunMeters: 2.25,
			upperRunMeters: 2.25,
			turn: "right"
		}
	},
	{
		label: "Spiral",
		stair: {
			...Kn,
			shape: "spiral",
			diameterMeters: 2,
			totalTurnDegrees: 360,
			direction: "clockwise"
		}
	}
].map(({ label: e, stair: t }) => {
	let n = Ie(Gn, t), r = [...n.footprintWorld, ...n.upperLanding], i = {
		key: `stair-preview-v1:${t.shape}`,
		kind: "procedural",
		definition: {
			bounds: {
				min: [
					Math.min(...r.map((e) => e[0])) - .1,
					-.1,
					Math.min(...r.map((e) => e[1])) - .1
				],
				max: [
					Math.max(...r.map((e) => e[0])) + .1,
					4.1,
					Math.max(...r.map((e) => e[1])) + .1
				]
			},
			component: () => t.shape === "spiral" ? /* @__PURE__ */ (0, Q.jsx)(Xt, {
				flight: n,
				coordinates: Un,
				showUpperGuard: !1
			}) : t.shape === "u-shaped" ? /* @__PURE__ */ (0, Q.jsx)(u, {
				flight: n,
				coordinates: Un,
				showUpperGuard: !1
			}) : t.shape === "l-shaped" ? /* @__PURE__ */ (0, Q.jsx)(ne, {
				flight: n,
				coordinates: Un,
				showUpperGuard: !1
			}) : /* @__PURE__ */ (0, Q.jsx)(h, {
				flight: n,
				showUpperGuard: !1
			})
		}
	};
	return {
		shape: t.shape,
		label: e,
		entry: i
	};
});
//#endregion
//#region apps/web/src/editor-floors/StairPlacementPanel.tsx
function Jn({ shape: e, issues: t = [], onChange: n, onCancel: r }) {
	let i = (0, Z.useRef)(null);
	return /* @__PURE__ */ (0, Q.jsxs)("section", {
		className: "construction-inspector__selection",
		"aria-label": "Staircase",
		children: [
			/* @__PURE__ */ (0, Q.jsx)("header", { children: /* @__PURE__ */ (0, Q.jsx)("h3", { children: "Staircase" }) }),
			/* @__PURE__ */ (0, Q.jsx)(vn, {
				scrollRoot: i,
				enabled: !0,
				children: /* @__PURE__ */ (0, Q.jsx)("div", {
					className: "floor-finish-palette__grid door-preset-palette__grid",
					ref: i,
					role: "group",
					"aria-label": "Stair shape",
					children: qn.map(({ shape: t, label: r, entry: i }) => /* @__PURE__ */ (0, Q.jsxs)("button", {
						type: "button",
						"aria-label": r,
						"aria-pressed": e === t,
						onClick: () => n(t),
						children: [/* @__PURE__ */ (0, Q.jsx)(Tn, {
							entry: i,
							showAdd: !1,
							fallback: /* @__PURE__ */ (0, Q.jsx)("span", { children: "Preview unavailable" })
						}), /* @__PURE__ */ (0, Q.jsx)("small", { children: r })]
					}, t))
				})
			}),
			/* @__PURE__ */ (0, Q.jsx)("p", {
				className: "construction-inspector__tool-hint",
				role: "status",
				children: e === "spiral" ? "Click the center, then the outer edge to set diameter and rotation. Escape cancels." : e === "l-shaped" || e === "u-shaped" ? "Click the bottom, landing center, then the upper endpoint. Escape cancels." : "Drag from bottom to top, or click each endpoint. Escape cancels."
			}),
			/* @__PURE__ */ (0, Q.jsx)(Hn, {
				issues: t,
				compact: !0
			}),
			/* @__PURE__ */ (0, Q.jsx)($, {
				variant: "text",
				onClick: r,
				children: "Cancel stairs"
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-floors/StairShapeSelect.tsx
function Yn({ value: e, onChange: t }) {
	return /* @__PURE__ */ (0, Q.jsxs)("label", {
		className: "construction-inspector__single-control",
		children: ["Shape", /* @__PURE__ */ (0, Q.jsxs)("select", {
			"aria-label": "Stair shape",
			value: e,
			onChange: (e) => t(e.target.value),
			children: [
				/* @__PURE__ */ (0, Q.jsx)("option", {
					value: "straight",
					children: "Straight"
				}),
				/* @__PURE__ */ (0, Q.jsx)("option", {
					value: "l-shaped",
					children: "L-shaped"
				}),
				/* @__PURE__ */ (0, Q.jsx)("option", {
					value: "u-shaped",
					children: "U-shaped"
				}),
				/* @__PURE__ */ (0, Q.jsx)("option", {
					value: "spiral",
					children: "Spiral"
				})
			]
		})]
	});
}
//#endregion
//#region apps/web/src/editor-floors/stair-placement-geometry.ts
var Xn = (e) => Number(e.toFixed(2));
function Zn(e, t, n, r) {
	let i = r.x - n.x, a = r.z - n.z, o = Math.hypot(i, a);
	if (!Number.isFinite(o) || o < .1) return null;
	let s = Fe(n, t);
	return e.shape === "spiral" ? {
		...e,
		at: s,
		diameterMeters: Xn(2 * o),
		rotationYRadians: -Math.atan2(a, i)
	} : e.shape === "l-shaped" || e.shape === "u-shaped" ? o - e.widthMeters / 2 >= .1 ? {
		...e,
		at: s,
		lowerRunMeters: Xn(o - e.widthMeters / 2),
		rotationYRadians: Math.atan2(i, a)
	} : null : {
		...e,
		at: s,
		runMeters: Xn(o),
		rotationYRadians: Math.atan2(i, a)
	};
}
function Qn(e, t, n, r, i) {
	let a = Zn(e, t, n, r);
	if (!a || a.shape !== "l-shaped" && a.shape !== "u-shaped") return null;
	let o = (i.x - r.x) * Math.cos(a.rotationYRadians) - (i.z - r.z) * Math.sin(a.rotationYRadians), s = (i.x - r.x) * Math.sin(a.rotationYRadians) + (i.z - r.z) * Math.cos(a.rotationYRadians), c = a.shape === "u-shaped" ? -s - e.widthMeters / 2 : Math.abs(o) - e.widthMeters / 2;
	return c >= .1 ? {
		...a,
		upperRunMeters: Xn(c),
		turn: o >= 0 ? "right" : "left"
	} : null;
}
function $n(e, t, n, r, i, a) {
	let o = {
		x: Math.sin(e.rotationYRadians),
		z: Math.cos(e.rotationYRadians)
	};
	if (a === "body") return {
		...e,
		at: Fe({
			x: n.x + i.x - r.x,
			z: n.z + i.z - r.z
		}, t)
	};
	if (e.shape === "spiral") {
		let t = Math.hypot(i.x - n.x, i.z - n.z);
		return t <= .1 ? null : a === "rotation" ? {
			...e,
			rotationYRadians: -Math.atan2(i.z - n.z, i.x - n.x)
		} : {
			...e,
			diameterMeters: Xn(t * 2)
		};
	}
	if (e.shape === "l-shaped" || e.shape === "u-shaped") {
		let r = {
			x: n.x + o.x * (e.lowerRunMeters + e.widthMeters / 2),
			z: n.z + o.z * (e.lowerRunMeters + e.widthMeters / 2)
		};
		if (a === "bottom") return Zn(e, t, i, r);
		if (a === "corner") return Zn(e, t, n, i);
		if (a === "top") return Qn(e, t, n, r, i);
	} else {
		let r = {
			x: n.x + o.x * e.runMeters,
			z: n.z + o.z * e.runMeters
		};
		if (a === "bottom") return Zn(e, t, i, r);
		if (a === "top") return Zn(e, t, n, i);
	}
	let s = (i.x - n.x) * o.z - (i.z - n.z) * o.x, c = Xn(Math.abs(s) * 2);
	return c >= .1 ? {
		...e,
		widthMeters: c
	} : null;
}
function er(e, t, n) {
	if ((t.shape ?? "straight") === n) return t;
	let r = Ie(e, t)?.startWorld ?? J(t.at, e.coordinates), i = {
		id: t.id,
		railings: t.railings,
		lowerFloorId: t.lowerFloorId,
		upperFloorId: t.upperFloorId,
		at: Fe({
			x: r[0],
			z: r[1]
		}, e.coordinates),
		rotationYRadians: t.rotationYRadians
	}, a = e.floors.find((e) => e.id === t.lowerFloorId).floorToFloorHeightMeters;
	return bt(n === "spiral" ? {
		...i,
		shape: n,
		at: Fe({
			x: r[0] - .55 * Math.cos(i.rotationYRadians),
			z: r[1] + .55 * Math.sin(i.rotationYRadians)
		}, e.coordinates),
		diameterMeters: 2,
		totalTurnDegrees: 360,
		direction: "clockwise"
	} : n === "l-shaped" || n === "u-shaped" ? {
		...i,
		shape: n,
		widthMeters: 1,
		lowerRunMeters: Xn(a * .75),
		upperRunMeters: Xn(a * .75),
		turn: "right"
	} : {
		...i,
		shape: n,
		widthMeters: 1,
		runMeters: Xn(a * 1.5)
	});
}
function tr(e) {
	let t = (e, t) => [
		e,
		.25,
		t
	], n = e.path[0], r = e.path[e.path.length - 1];
	if (e.spec.shape === "spiral") {
		let [n, r] = e.originWorld, i = e.spec.diameterMeters / 2;
		return [{
			handle: "diameter",
			at: t(n - e.side[0] * i, r - e.side[1] * i)
		}, {
			handle: "rotation",
			at: t(n + e.side[0] * i, r + e.side[1] * i)
		}];
	}
	let i = e.spec.shape === "l-shaped" || e.spec.shape === "u-shaped" ? e.spec.lowerRunMeters : e.runMeters;
	return [
		{
			handle: "bottom",
			at: t(n.x, n.z)
		},
		{
			handle: "top",
			at: t(r.x, r.z)
		},
		...[-1, 1].map((r) => ({
			handle: r === -1 ? "left" : "right",
			at: t(n.x + e.forward[0] * i / 2 + e.side[0] * r * e.widthMeters / 2, n.z + e.forward[1] * i / 2 + e.side[1] * r * e.widthMeters / 2)
		})),
		...e.spec.shape === "l-shaped" || e.spec.shape === "u-shaped" ? [{
			handle: "corner",
			at: t(e.path[2].x, e.path[2].z)
		}] : []
	];
}
//#endregion
//#region apps/web/src/editor-floors/stair-candidate-validation.ts
function nr(e, t) {
	return {
		...e,
		stairs: [...e.stairs.filter((e) => e.id !== t.id), t]
	};
}
function rr(e, t, n) {
	let r = nr(e, t);
	return Kt(r, n).filter((e) => e.path === `stairs[${r.stairs.length - 1}]`);
}
function ir(e, t) {
	return Ie(e, t) !== null;
}
//#endregion
//#region apps/web/src/editor-chrome/EditorActionButton.tsx
var ar = en();
function or({ icon: e, label: t, shortcut: n, keyShortcuts: r, showLabel: i = !1, pressed: a, disabled: o, disabledReason: s, warning: c, onClick: l }) {
	let u = Ht(), d = (0, Z.useId)(), [f, p] = (0, Z.useState)(null), m = (e) => {
		if (o) return;
		let t = e.currentTarget.getBoundingClientRect(), n = u.root === document ? null : u.portalContainer.getBoundingClientRect(), r = n?.width ?? window.innerWidth, i = Math.min(112, r / 2);
		p({
			left: Math.max(i, Math.min(r - i, t.left + t.width / 2 - (n?.left ?? 0))),
			top: t.bottom + 9 - (n?.top ?? 0)
		});
	};
	return (0, Z.useEffect)(() => {
		if (!f) return;
		let e = () => p(null), t = (t) => {
			t.key === "Escape" && e();
		};
		return window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), u.events.addEventListener("keydown", t), () => {
			window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0), u.events.removeEventListener("keydown", t);
		};
	}, [f, u]), /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("button", {
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
			/* @__PURE__ */ (0, Q.jsx)(X, { name: e }),
			i && /* @__PURE__ */ (0, Q.jsx)("span", { children: t }),
			c && /* @__PURE__ */ (0, Q.jsx)("span", {
				className: "editor-action-button__warning",
				children: /* @__PURE__ */ (0, Q.jsx)(X, { name: "warning" })
			})
		]
	}), f && !o && (0, ar.createPortal)(/* @__PURE__ */ (0, Q.jsxs)("div", {
		role: "tooltip",
		id: d,
		className: "editor-action-tooltip",
		style: f,
		children: [c ?? t, n && /* @__PURE__ */ (0, Q.jsx)("kbd", { children: n })]
	}), u.portalContainer)] });
}
//#endregion
//#region apps/web/src/editor-chrome/SelectionDetailsPanel.tsx
function sr({ children: e, title: t, subtitle: n, label: r, mode: i = "furnish", onClose: a }) {
	let o = Ht(), s = (0, Z.useRef)(null);
	return (0, Z.useEffect)(() => {
		let e = o.root.activeElement instanceof HTMLElement ? o.root.activeElement : null;
		return s.current?.focus(), () => {
			e?.isConnected && e.focus();
		};
	}, [o]), /* @__PURE__ */ (0, Q.jsx)("aside", {
		ref: s,
		className: "selection-details",
		"data-mode": i,
		"aria-label": r,
		tabIndex: -1,
		onKeyDown: (e) => {
			e.key === "Escape" && e.target.tagName !== "INPUT" && (e.preventDefault(), e.stopPropagation(), a());
		},
		children: /* @__PURE__ */ (0, Q.jsx)("div", {
			className: "furnishing-editor-inspector",
			children: /* @__PURE__ */ (0, Q.jsxs)("section", { children: [/* @__PURE__ */ (0, Q.jsxs)("header", { children: [/* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("small", { children: n }), /* @__PURE__ */ (0, Q.jsx)("strong", { children: t })] }), /* @__PURE__ */ (0, Q.jsx)(or, {
				icon: "close",
				label: "Close details",
				onClick: a
			})] }), e] })
		})
	});
}
//#endregion
//#region apps/web/src/editor-floors/StairNumberField.tsx
function cr({ label: e, value: t, onCommit: n, minimum: r, maximum: i }) {
	let [a, o] = (0, Z.useState)(String(Number(t.toFixed(2)))), [s, c] = (0, Z.useState)(null), l = (0, Z.useId)();
	(0, Z.useEffect)(() => {
		o(String(Number(t.toFixed(2)))), c(null);
	}, [t]);
	let u = (e) => {
		if (e === String(Number(t.toFixed(2)))) {
			c(null);
			return;
		}
		let a = e.trim() ? Number(e) : NaN, o = Number.isFinite(a) ? r !== void 0 && a <= r ? `Enter a value greater than ${r}.` : i !== void 0 && a > i ? `Enter a value of ${i} or less.` : null : "Enter a finite number.";
		c(o), !o && a !== t && n(a);
	};
	return /* @__PURE__ */ (0, Q.jsxs)("label", {
		className: "construction-inspector__single-control stair-number-field",
		children: [
			e,
			/* @__PURE__ */ (0, Q.jsx)("input", {
				"aria-label": e,
				type: "number",
				step: "any",
				value: a,
				"aria-invalid": s ? !0 : void 0,
				"aria-describedby": s ? l : void 0,
				onChange: (e) => o(e.target.value),
				onBlur: (e) => u(e.currentTarget.value),
				onKeyDown: (e) => {
					e.key === "Enter" && e.currentTarget.blur(), e.key === "Escape" && (e.stopPropagation(), e.currentTarget.value = String(Number(t.toFixed(2))), o(e.currentTarget.value), c(null), e.currentTarget.blur());
				}
			}),
			s && /* @__PURE__ */ (0, Q.jsx)("span", {
				id: l,
				className: "stair-number-field__error",
				role: "alert",
				children: s
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-floors/StairDetails.tsx
function lr({ project: e, stair: t, registries: n, liveIssues: r, onSave: i, onCancel: a }) {
	let [o, s] = (0, Z.useState)(t);
	(0, Z.useEffect)(() => s(t), [t]);
	let c = (0, Z.useMemo)(() => rr(e, o, n), [
		e,
		o,
		n
	]), l = r ?? c, u = (t) => {
		s(t), ir(e, t) && i(t);
	}, d = (e, t, n, r, i) => /* @__PURE__ */ (0, Q.jsx)(cr, {
		label: e,
		value: t,
		minimum: r,
		maximum: i,
		onCommit: n
	}, e);
	return /* @__PURE__ */ (0, Q.jsxs)(sr, {
		mode: "construct",
		title: "Stairs",
		subtitle: `To ${e.floors.find((e) => e.id === o.upperFloorId)?.name}`,
		label: "Stair properties",
		onClose: a,
		children: [
			/* @__PURE__ */ (0, Q.jsx)(Yn, {
				value: o.shape ?? "straight",
				onChange: (t) => u(er(e, o, t))
			}),
			o.shape === "spiral" ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
				d("Diameter (m)", o.diameterMeters, (e) => u({
					...o,
					diameterMeters: e
				}), .2),
				d("Total turn (degrees)", o.totalTurnDegrees, (e) => u({
					...o,
					totalTurnDegrees: e
				}), 0, 360),
				/* @__PURE__ */ (0, Q.jsxs)("label", {
					className: "construction-inspector__single-control stair-direction-control",
					children: ["Direction", /* @__PURE__ */ (0, Q.jsxs)("select", {
						"aria-label": "Spiral direction",
						value: o.direction,
						onChange: (e) => u({
							...o,
							direction: e.target.value
						}),
						children: [/* @__PURE__ */ (0, Q.jsx)("option", {
							value: "clockwise",
							children: "Clockwise"
						}), /* @__PURE__ */ (0, Q.jsx)("option", {
							value: "counterclockwise",
							children: "Counterclockwise"
						})]
					})]
				})
			] }) : /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [d("Width (m)", o.widthMeters, (e) => u({
				...o,
				widthMeters: e
			}), 0), o.shape === "l-shaped" || o.shape === "u-shaped" ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
				d("Lower flight length (m)", o.lowerRunMeters, (e) => u({
					...o,
					lowerRunMeters: e
				}), 0),
				d("Upper flight length (m)", o.upperRunMeters, (e) => u({
					...o,
					upperRunMeters: e
				}), 0),
				/* @__PURE__ */ (0, Q.jsxs)("label", {
					className: "construction-inspector__single-control",
					children: ["Turn", /* @__PURE__ */ (0, Q.jsxs)("select", {
						"aria-label": "Stair turn",
						value: o.turn,
						onChange: (e) => u({
							...o,
							turn: e.target.value
						}),
						children: [/* @__PURE__ */ (0, Q.jsx)("option", {
							value: "right",
							children: "Right"
						}), /* @__PURE__ */ (0, Q.jsx)("option", {
							value: "left",
							children: "Left"
						})]
					})]
				})
			] }) : d("Length (m)", o.runMeters, (e) => u({
				...o,
				runMeters: e
			}), 0)] }),
			/* @__PURE__ */ (0, Q.jsxs)("label", {
				className: "construction-inspector__single-control",
				children: [
					"Railings",
					/* @__PURE__ */ (0, Q.jsxs)("select", {
						"aria-label": "Stair railings",
						value: o.railings ?? "both",
						onChange: (e) => u(bt({
							...o,
							...e.target.value === void 0 ? {} : { railings: e.target.value }
						})),
						children: [
							/* @__PURE__ */ (0, Q.jsx)("option", {
								value: "both",
								children: "Both sides"
							}),
							/* @__PURE__ */ (0, Q.jsx)("option", {
								value: "left",
								children: "Left side"
							}),
							/* @__PURE__ */ (0, Q.jsx)("option", {
								value: "right",
								children: "Right side"
							}),
							/* @__PURE__ */ (0, Q.jsx)("option", {
								value: "none",
								children: "None"
							})
						]
					}),
					/* @__PURE__ */ (0, Q.jsx)("span", { children: "Left and right when walking upstairs." })
				]
			}),
			/* @__PURE__ */ (0, Q.jsxs)("details", {
				className: "selection-details-advanced",
				children: [
					/* @__PURE__ */ (0, Q.jsx)("summary", { children: "Advanced" }),
					d("Rotation (degrees)", o.rotationYRadians * 180 / Math.PI, (e) => u({
						...o,
						rotationYRadians: e * Math.PI / 180
					})),
					d(o.shape === "spiral" ? "Center X (plan units)" : "Start X (plan units)", o.at[0], (e) => u({
						...o,
						at: [e, o.at[1]]
					})),
					d(o.shape === "spiral" ? "Center Y (plan units)" : "Start Y (plan units)", o.at[1], (e) => u({
						...o,
						at: [o.at[0], e]
					}))
				]
			}),
			/* @__PURE__ */ (0, Q.jsx)(Hn, { issues: l }),
			l.filter((e) => e.severity !== "warning").map((e, t) => /* @__PURE__ */ (0, Q.jsx)("p", {
				role: "alert",
				children: e.message
			}, `${e.code}:${t}`))
		]
	});
}
//#endregion
//#region apps/web/src/editor-onboarding/build-tutorial-progress.ts
function ur(e, t, n) {
	let r = n[0] - t[0], i = n[1] - t[1], a = Math.hypot(r, i);
	if (a < 1e-8) return !1;
	let o = ((e[0] - t[0]) * r + (e[1] - t[1]) * i) / a;
	return o >= -1e-5 && o <= a + 1e-5 && Math.abs((e[0] - t[0]) * i - (e[1] - t[1]) * r) / a < 1e-5;
}
function dr(e, t, n) {
	return e.openings.some((r) => {
		if (r.kind !== n) return !1;
		let i = e.walls.find((e) => e.id === r.wallId);
		if (!i) return !1;
		let a = Math.hypot(i.to[0] - i.from[0], i.to[1] - i.from[1]);
		if (!a) return !1;
		let o = r.offsetFromWallStartPlanUnits + r.widthPlanUnits / 2, s = [i.from[0] + (i.to[0] - i.from[0]) * o / a, i.from[1] + (i.to[1] - i.from[1]) * o / a];
		return t.polygon.some((e, n) => ur(s, e, t.polygon[(n + 1) % t.polygon.length]));
	});
}
function fr(e, t, n, r = !1) {
	if (e.status !== "active") return e;
	let i = t.floors.flatMap((e) => e.rooms.map((t) => ({
		floor: e,
		room: t
	}))), a = i.find(({ floor: t, room: n }) => t.id === e.target?.floorId && n.id === e.target.roomId) ?? i[0], o = {
		reference: r || e.step !== "reference" || t.floors.some((e) => e.walls.length > 0),
		walls: !!a,
		door: !!(a && dr(a.floor, a.room, "door")),
		window: !!(a && dr(a.floor, a.room, "window")),
		name: !!a?.room.name.trim(),
		arrange: e.readyToConnect,
		connect: n === "connect"
	}, s = F.find((t) => !o[t] && !e.skipped.includes(t));
	return bt({
		...e,
		target: a ? {
			floorId: a.floor.id,
			roomId: a.room.id
		} : void 0,
		step: s ?? "connect",
		status: s ? "active" : "completed"
	});
}
//#endregion
//#region apps/web/src/editor-onboarding/useBuildTutorial.ts
function pr(e, t, n = !1) {
	let r = e.home.id, [i, a] = (0, Z.useState)(() => _n(r)), o = i.state ? fr(i.state, e, t, n) : void 0, s = (0, Z.useCallback)((e) => {
		let t = fn(r, e);
		a({
			state: e,
			durable: t
		});
	}, [r]), c = JSON.stringify(o);
	return (0, Z.useEffect)(() => {
		o && c !== JSON.stringify(i.state) && s(o);
	}, [
		c,
		o,
		i.state,
		s
	]), {
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
		restart: () => s(R())
	};
}
//#endregion
//#region apps/web/src/editor-workspace/EditorCompletionDialogs.tsx
function mr({ activeFloorId: e, mode: t, editingLocked: n, publishOpen: r, previewOpen: i, deviceModels: a, unsettled: o, walkButton: s, setPublishOpen: c, runtime: l, editedManifest: u, closeWalk: d, publishErrors: f, publishWarnings: p, publishIssues: m, publishMessage: h, publishing: g, publishProject: _ }) {
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [i && t !== "connect" && /* @__PURE__ */ (0, Q.jsxs)("section", {
		className: "direction-preview-dialog",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "Explore draft",
		children: [/* @__PURE__ */ (0, Q.jsx)(Xe, {
			initialFloorId: e,
			children: /* @__PURE__ */ (0, Q.jsx)(an, {
				value: {
					...l,
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
				children: /* @__PURE__ */ (0, Q.jsx)(ke, {
					manifest: u,
					architectureModels: Cn,
					deviceModels: a,
					bindingManager: {
						profile: ue(u.home.id),
						loaded: !0,
						hasStoredProfile: !1,
						save: () => void 0
					},
					walkthrough: {
						onExit: d,
						pointerLockTarget: s.current?.closest("main")
					}
				})
			})
		}), /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "direction-dialog-bar",
			children: [/* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("small", { children: "Explore draft" }), /* @__PURE__ */ (0, Q.jsx)("strong", { children: "Check your changes at eye level." })] }), /* @__PURE__ */ (0, Q.jsxs)("button", {
				type: "button",
				autoFocus: !0,
				"aria-keyshortcuts": "Escape",
				onClick: d,
				children: ["Back to editor", /* @__PURE__ */ (0, Q.jsx)("kbd", {
					"aria-hidden": "true",
					children: "Esc"
				})]
			})]
		})]
	}), r && /* @__PURE__ */ (0, Q.jsx)("div", {
		className: "direction-publish-backdrop",
		role: "presentation",
		children: /* @__PURE__ */ (0, Q.jsxs)("section", {
			className: "direction-publish-dialog",
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "publish-title",
			children: [
				/* @__PURE__ */ (0, Q.jsx)("p", { children: "Save home" }),
				/* @__PURE__ */ (0, Q.jsx)("h2", {
					id: "publish-title",
					children: f.length > 0 ? `${f.length} issue${f.length === 1 ? "" : "s"} to fix` : p.length > 0 ? "Ready with warnings" : "Ready to save"
				}),
				/* @__PURE__ */ (0, Q.jsx)("p", {
					className: "direction-publish-dialog__summary",
					children: f.length > 0 ? "The current draft stays saved, but it cannot replace your live home yet." : "Saving replaces the version used by Home. Your draft remains editable."
				}),
				m.length > 0 && /* @__PURE__ */ (0, Q.jsx)("ul", { children: m.map((e) => /* @__PURE__ */ (0, Q.jsxs)("li", {
					"data-severity": e.severity,
					children: [/* @__PURE__ */ (0, Q.jsx)("span", { children: e.severity === "error" ? "×" : "!" }), /* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("strong", { children: e.message }), /* @__PURE__ */ (0, Q.jsx)("small", { children: e.path })] })]
				}, `${e.code}:${e.path}:${e.message}`)) }),
				h && /* @__PURE__ */ (0, Q.jsx)("div", {
					className: "direction-publish-dialog__result",
					role: "status",
					children: h
				}),
				/* @__PURE__ */ (0, Q.jsxs)("footer", { children: [/* @__PURE__ */ (0, Q.jsx)("button", {
					type: "button",
					disabled: g,
					onClick: () => c(!1),
					children: "Cancel"
				}), /* @__PURE__ */ (0, Q.jsx)("button", {
					type: "button",
					className: "is-primary",
					disabled: f.length > 0 || n || o,
					onClick: () => void _(),
					children: g ? "Saving…" : p.length > 0 ? "Save anyway" : "Save changes"
				})] })
			]
		})
	})] });
}
//#endregion
//#region apps/web/src/editor-preview/construct/OpeningOrientationControls.tsx
function hr({ opening: e, onChange: t, disabled: n, showLabel: r = !1 }) {
	if (e.kind === "passage") return null;
	let i = tn(e);
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		i.canSwapHinge && /* @__PURE__ */ (0, Q.jsx)(or, {
			icon: "swapHinge",
			label: "Swap hinge side",
			showLabel: r,
			disabled: n,
			onClick: () => t("hinge")
		}),
		i.canReverseSlide && /* @__PURE__ */ (0, Q.jsx)(or, {
			icon: "reverseSlide",
			label: "Reverse slide direction",
			showLabel: r,
			disabled: n,
			onClick: () => t("slide")
		}),
		i.canSwitchSide && /* @__PURE__ */ (0, Q.jsx)(or, {
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
function gr(e, t) {
	let n = e.floors.find((e) => e.openings.some((e) => e.id === t)), r = n?.openings.find((e) => e.id === t), i = n?.walls.find((e) => e.id === r?.wallId);
	return !n || !r || !i || r.kind === "passage" ? null : _r(r, n, i, r.visualModel ? e.extensions.openingModels[r.visualModel] : void 0);
}
function _r(e, t, n, r) {
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
				return r ? /* @__PURE__ */ (0, Q.jsx)(r, {
					...e,
					opening: a
				}) : a.kind === "door" ? /* @__PURE__ */ (0, Q.jsx)(hn, {
					...e,
					opening: a
				}) : /* @__PURE__ */ (0, Q.jsx)(En, {
					...e,
					opening: a
				});
			}
		}
	};
}
//#endregion
//#region apps/web/src/editor-preview/construct/DoorPresetPalette.tsx
var vr = {
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
}, yr = pn.map((e) => ({
	preset: e,
	entry: _r(Jt(e.configuration, 1, {
		id: e.id,
		wallId: "preview-wall",
		offsetFromWallStartPlanUnits: 0
	}), vr, {
		id: "preview-wall",
		from: [0, 0],
		to: [e.configuration.widthMeters, 0],
		classification: "interior",
		thicknessMeters: .16
	})
})), br = (e, t) => e.operation === t.operation && e.variant === t.variant && (e.openingSide ?? "right") === (t.openingSide ?? "right") && (e.hingeSide ?? "start") === (t.hingeSide ?? "start") && (e.slideDirection ?? "start") === (t.slideDirection ?? "start") && e.finish === t.finish && e.leafCount === t.leafCount && Math.abs(e.widthMeters - t.widthMeters) < 1e-6 && Math.abs(e.heightMeters - t.heightMeters) < 1e-6;
function xr({ value: e, onChange: t }) {
	let n = (0, Z.useRef)(null), r = yr.find(({ preset: t }) => br(e, t.configuration))?.preset.id;
	return /* @__PURE__ */ (0, Q.jsxs)("section", {
		className: "door-preset-palette",
		"aria-label": "Door type",
		children: [/* @__PURE__ */ (0, Q.jsx)(vn, {
			scrollRoot: n,
			enabled: !0,
			children: /* @__PURE__ */ (0, Q.jsx)("div", {
				className: "floor-finish-palette__grid door-preset-palette__grid",
				ref: n,
				role: "group",
				"aria-label": "Door presets",
				children: yr.map(({ preset: e, entry: n }) => /* @__PURE__ */ (0, Q.jsxs)("button", {
					type: "button",
					"aria-label": e.label,
					"aria-pressed": r === e.id,
					onClick: () => t({ ...e.configuration }),
					children: [/* @__PURE__ */ (0, Q.jsx)(Tn, {
						entry: n,
						showAdd: !1,
						fallback: /* @__PURE__ */ (0, Q.jsx)("span", { children: "Preview unavailable" })
					}), /* @__PURE__ */ (0, Q.jsx)("small", { children: e.label })]
				}, e.id))
			})
		}), !r && /* @__PURE__ */ (0, Q.jsx)("p", {
			className: "construction-inspector__tool-hint",
			children: "Custom"
		})]
	});
}
//#endregion
//#region apps/web/src/editor-chrome/CommittedNumberInput.tsx
function Sr({ label: e, value: t, min: n, step: r = .1, onCommit: i, commitOnChange: a = !1 }) {
	let [o, s] = (0, Z.useState)(String(t)), c = (0, Z.useRef)(!1);
	return (0, Z.useEffect)(() => s(String(t)), [t]), /* @__PURE__ */ (0, Q.jsx)("input", {
		"aria-label": e,
		type: "number",
		min: n,
		step: r,
		value: o,
		onChange: (e) => {
			let r = e.target.value;
			s(r);
			let o = e.target.valueAsNumber;
			a && Number.isFinite(o) && (n === void 0 || o >= n) && o !== t && i(o);
		},
		onBlur: () => {
			if (c.current) {
				c.current = !1;
				return;
			}
			if (a) {
				s(String(t));
				return;
			}
			let e = Number(o);
			Number.isFinite(e) && e !== t ? i(e) : s(String(t));
		},
		onKeyDown: (e) => {
			e.key === "Enter" && e.currentTarget.blur(), e.key === "Escape" && (c.current = !0, s(String(t)), e.currentTarget.blur());
		}
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/DoorDesignFields.tsx
function Cr({ value: e, onChange: t, showSize: n = !0 }) {
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [n && /* @__PURE__ */ (0, Q.jsxs)("fieldset", { children: [
		/* @__PURE__ */ (0, Q.jsx)("legend", { children: "Size" }),
		/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Width", /* @__PURE__ */ (0, Q.jsx)(Sr, {
			label: "Door width",
			min: .3,
			value: e.widthMeters,
			onCommit: (n) => t({
				...e,
				widthMeters: n
			})
		})] }),
		/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Height", /* @__PURE__ */ (0, Q.jsx)(Sr, {
			label: "Door height",
			min: .3,
			value: e.heightMeters,
			onCommit: (n) => t({
				...e,
				heightMeters: n
			})
		})] })
	] }), /* @__PURE__ */ (0, Q.jsxs)("fieldset", {
		className: "construction-inspector__variants",
		children: [
			/* @__PURE__ */ (0, Q.jsx)("legend", { children: "Door design" }),
			/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Motion", /* @__PURE__ */ (0, Q.jsxs)("select", {
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
					n.target.value === "roll-up" ? t(bt({
						...r,
						operation: "roll-up",
						variant: "slatted"
					})) : n.target.value === "sliding" ? t(bt({
						...r,
						operation: "sliding",
						variant: e.operation === "roll-up" ? "panel" : e.variant,
						leafCount: e.leafCount ?? 1
					})) : t(bt({
						...r,
						operation: "hinged",
						variant: e.operation === "roll-up" ? "panel" : e.variant,
						leafCount: e.leafCount ?? 1
					}));
				},
				children: [
					/* @__PURE__ */ (0, Q.jsx)("option", {
						value: "hinged",
						children: "Hinged"
					}),
					/* @__PURE__ */ (0, Q.jsx)("option", {
						value: "sliding",
						children: "Sliding"
					}),
					/* @__PURE__ */ (0, Q.jsx)("option", {
						value: "roll-up",
						children: "Roll-up"
					})
				]
			})] }),
			e.operation === "roll-up" ? /* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Style", /* @__PURE__ */ (0, Q.jsx)("select", {
				"aria-label": "Door style",
				value: "slatted",
				disabled: !0,
				children: /* @__PURE__ */ (0, Q.jsx)("option", {
					value: "slatted",
					children: "Slatted"
				})
			})] }) : /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Style", /* @__PURE__ */ (0, Q.jsxs)("select", {
				"aria-label": "Door style",
				value: e.variant,
				onChange: (n) => t({
					...e,
					variant: n.target.value
				}),
				children: [
					/* @__PURE__ */ (0, Q.jsx)("option", {
						value: "panel",
						children: "Panel"
					}),
					/* @__PURE__ */ (0, Q.jsx)("option", {
						value: "french",
						children: "French"
					}),
					/* @__PURE__ */ (0, Q.jsx)("option", {
						value: "full-glass",
						children: "Full glass"
					}),
					/* @__PURE__ */ (0, Q.jsx)("option", {
						value: "plank",
						children: "Plank"
					})
				]
			})] }), /* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Leaves", /* @__PURE__ */ (0, Q.jsxs)("select", {
				"aria-label": "Door leaf count",
				value: e.leafCount,
				onChange: (n) => t({
					...e,
					leafCount: Number(n.target.value)
				}),
				children: [/* @__PURE__ */ (0, Q.jsx)("option", {
					value: 1,
					children: "Single"
				}), /* @__PURE__ */ (0, Q.jsx)("option", {
					value: 2,
					children: "Double"
				})]
			})] })] }),
			/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Finish", /* @__PURE__ */ (0, Q.jsxs)("select", {
				"aria-label": "Door finish",
				value: e.finish,
				onChange: (n) => t({
					...e,
					finish: n.target.value
				}),
				children: [/* @__PURE__ */ (0, Q.jsx)("option", {
					value: "wood",
					children: "Wood"
				}), /* @__PURE__ */ (0, Q.jsx)("option", {
					value: "white",
					children: "White"
				})]
			})] })
		]
	})] });
}
//#endregion
//#region apps/web/src/editor-preview/construct/OpeningProperties.tsx
function wr({ opening: e, editor: t, advanced: n }) {
	let r = /* @__PURE__ */ (0, Q.jsxs)("fieldset", { children: [
		/* @__PURE__ */ (0, Q.jsx)("legend", { children: "Wall position" }),
		/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Offset", /* @__PURE__ */ (0, Q.jsx)(Sr, {
			label: "Opening wall offset",
			min: 0,
			value: e.offsetPlanUnits,
			onCommit: (e) => t.updateSelectedOpening({ offsetPlanUnits: e })
		})] }),
		/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Wall", /* @__PURE__ */ (0, Q.jsx)("input", {
			"aria-label": "Opening wall identifier",
			type: "text",
			value: e.wallId,
			readOnly: !0
		})] })
	] });
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		/* @__PURE__ */ (0, Q.jsxs)("fieldset", { children: [
			/* @__PURE__ */ (0, Q.jsx)("legend", { children: "Size" }),
			/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Width", /* @__PURE__ */ (0, Q.jsx)(Sr, {
				label: "Opening width",
				commitOnChange: !0,
				min: .3,
				value: e.widthPlanUnits * t.previewFloor.coordinates.metersPerPlanUnit,
				onCommit: (e) => t.updateSelectedOpening({ widthPlanUnits: e / t.previewFloor.coordinates.metersPerPlanUnit })
			})] }),
			/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Height", /* @__PURE__ */ (0, Q.jsx)(Sr, {
				label: "Opening height",
				commitOnChange: !0,
				min: .3,
				value: e.openingHeightMeters,
				onCommit: (e) => t.updateSelectedOpening({ openingHeightMeters: e })
			})] })
		] }),
		e.kind === "window" && /* @__PURE__ */ (0, Q.jsxs)("label", {
			className: "construction-inspector__single-control",
			children: ["Height from floor", /* @__PURE__ */ (0, Q.jsx)(Sr, {
				label: "Window height from floor",
				min: 0,
				value: e.sillHeightMeters,
				onCommit: (e) => t.updateSelectedOpening({ sillHeightMeters: e })
			})]
		}),
		e.kind === "door" && (() => {
			let n = t.previewFloor.coordinates.metersPerPlanUnit, r = mt({
				...e,
				offsetFromWallStartPlanUnits: e.offsetPlanUnits
			}, n), i = (r) => {
				let { offsetFromWallStartPlanUnits: i, ...a } = Jt(r, n, {
					id: e.id,
					wallId: e.wallId,
					offsetFromWallStartPlanUnits: e.offsetPlanUnits
				});
				t.replaceSelectedOpening({
					...a,
					offsetPlanUnits: i
				});
			};
			return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(xr, {
				value: r,
				onChange: i
			}), /* @__PURE__ */ (0, Q.jsx)(Cr, {
				value: r,
				onChange: i,
				showSize: !1
			})] });
		})(),
		e.kind === "window" && /* @__PURE__ */ (0, Q.jsxs)("fieldset", {
			className: "construction-inspector__variants",
			children: [
				/* @__PURE__ */ (0, Q.jsx)("legend", { children: "Window design" }),
				/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Motion", /* @__PURE__ */ (0, Q.jsxs)("select", {
					"aria-label": "Window operation",
					value: e.operation,
					onChange: (n) => t.replaceSelectedOpening({
						...e,
						operation: n.target.value
					}),
					children: [/* @__PURE__ */ (0, Q.jsx)("option", {
						value: "fixed",
						children: "Fixed"
					}), /* @__PURE__ */ (0, Q.jsx)("option", {
						value: "casement",
						children: "Casement"
					})]
				})] }),
				/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Style", /* @__PURE__ */ (0, Q.jsxs)("select", {
					"aria-label": "Window style",
					value: e.variant,
					onChange: (n) => {
						let r = n.target.value;
						t.replaceSelectedOpening(bt({
							...e,
							variant: r,
							muntins: r === "muntined" ? e.muntins ?? {
								columns: 2,
								rows: 2
							} : void 0
						}));
					},
					children: [/* @__PURE__ */ (0, Q.jsx)("option", {
						value: "plain",
						children: "Plain"
					}), /* @__PURE__ */ (0, Q.jsx)("option", {
						value: "muntined",
						children: "Muntined"
					})]
				})] }),
				/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Glass", /* @__PURE__ */ (0, Q.jsxs)("select", {
					"aria-label": "Window glazing",
					value: e.glazing,
					onChange: (n) => t.replaceSelectedOpening({
						...e,
						glazing: n.target.value
					}),
					children: [/* @__PURE__ */ (0, Q.jsx)("option", {
						value: "clear",
						children: "Clear"
					}), /* @__PURE__ */ (0, Q.jsx)("option", {
						value: "privacy",
						children: "Privacy"
					})]
				})] }),
				/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Panels", /* @__PURE__ */ (0, Q.jsxs)("select", {
					"aria-label": "Window panel count",
					value: e.panelCount,
					onChange: (n) => t.replaceSelectedOpening({
						...e,
						panelCount: Number(n.target.value)
					}),
					children: [/* @__PURE__ */ (0, Q.jsx)("option", {
						value: 1,
						children: "One"
					}), /* @__PURE__ */ (0, Q.jsx)("option", {
						value: 2,
						children: "Two"
					})]
				})] }),
				e.variant === "muntined" && /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Columns", /* @__PURE__ */ (0, Q.jsx)(Sr, {
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
				})] }), /* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Rows", /* @__PURE__ */ (0, Q.jsx)(Sr, {
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
		e.kind === "passage" && /* @__PURE__ */ (0, Q.jsxs)("fieldset", {
			className: "construction-inspector__variants",
			children: [
				/* @__PURE__ */ (0, Q.jsx)("legend", { children: "Passage design" }),
				/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Shape", /* @__PURE__ */ (0, Q.jsxs)("select", {
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
					children: [/* @__PURE__ */ (0, Q.jsx)("option", {
						value: "rectangular",
						children: "Rectangular"
					}), /* @__PURE__ */ (0, Q.jsx)("option", {
						value: "arched",
						children: "Arched"
					})]
				})] }),
				e.variant === "arched" && /* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Arch rise", /* @__PURE__ */ (0, Q.jsx)(Sr, {
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
		t.openingError && /* @__PURE__ */ (0, Q.jsx)("p", {
			role: "alert",
			children: t.openingError
		}),
		n === void 0 ? /* @__PURE__ */ (0, Q.jsxs)("details", {
			className: "opening-properties__advanced",
			children: [/* @__PURE__ */ (0, Q.jsx)("summary", { children: "Advanced" }), r]
		}) : n && r
	] });
}
//#endregion
//#region apps/web/src/editor-preview/construct/opening-plan-symbol.ts
function Tr(e, t, n) {
	let r = [], i = (e, t, n, i) => {
		r.push({
			from: e,
			to: t,
			color: n,
			...i === void 0 ? {} : { width: i }
		});
	};
	if (i([0, -n / 2], [0, n / 2], "#596057"), i([t, -n / 2], [t, n / 2], "#596057"), e.kind === "passage") return r;
	if (e.kind === "door" && e.operation === "roll-up") {
		for (let e of [-.035, .035]) i([0, e], [t, e], "#7d8581", .025);
		return r;
	}
	let a = tn(e), o = e.kind === "window" ? "#789a98" : "#94765e";
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
function Er({ opening: e, editor: t, disabled: n, onClose: r }) {
	let i = e.widthPlanUnits * t.draft.coordinates.metersPerPlanUnit, a = t.draft.walls.find((t) => t.id === e.wallId)?.thicknessMeters ?? t.draft.interiorWallThicknessMeters, o = Tr(e, i, a), s = o.flatMap((e) => [e.from, e.to]), c = Math.min(0, ...s.map((e) => e[0])) - .2, l = Math.max(i, ...s.map((e) => e[0])) + .2, u = Math.max(.3, ...s.map((e) => Math.abs(e[1]))) + .12, d = e.kind !== "passage" && tn(e).canSwitchSide, f = e.kind === "door" ? "Door" : e.kind === "window" ? "Window" : "Passage";
	return /* @__PURE__ */ (0, Q.jsx)(sr, {
		mode: "construct",
		title: `${f} properties`,
		subtitle: "Selected opening",
		label: `${f} properties`,
		onClose: r,
		children: /* @__PURE__ */ (0, Q.jsxs)("div", {
			inert: n,
			children: [d && /* @__PURE__ */ (0, Q.jsxs)("fieldset", {
				className: "opening-direction",
				children: [
					/* @__PURE__ */ (0, Q.jsx)("legend", { children: "Opening direction" }),
					/* @__PURE__ */ (0, Q.jsxs)("svg", {
						className: "opening-direction__diagram",
						viewBox: `${c} ${-u} ${l - c} ${u * 2}`,
						role: "img",
						"aria-label": `${f} opening direction in plan view`,
						children: [/* @__PURE__ */ (0, Q.jsx)("path", {
							d: `M${c} 0H0M${i} 0H${l}`,
							stroke: "#596057",
							strokeWidth: a
						}), o.map((e, t) => /* @__PURE__ */ (0, Q.jsx)("line", {
							x1: e.from[0],
							y1: e.from[1],
							x2: e.to[0],
							y2: e.to[1],
							stroke: e.color,
							strokeWidth: e.width ?? .025
						}, t))]
					}),
					/* @__PURE__ */ (0, Q.jsx)(hr, {
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
			}), /* @__PURE__ */ (0, Q.jsx)(wr, {
				opening: e,
				editor: t
			})]
		})
	});
}
var Dr = (e, t) => ({
	dragActive: !1,
	dragClientFrom: t,
	pointerId: e
}), Or = (e, t, n) => !e || e.pointerId !== t ? null : e.dragActive ? {
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
function kr(e, t, n, r) {
	return r ? null : {
		pointerId: e,
		client: t,
		point: n
	};
}
function Ar(e, t, n) {
	return e?.pointerId === t && Math.hypot(n[0] - e.client[0], n[1] - e.client[1]) < 8;
}
//#endregion
//#region apps/web/src/editor-preview/construct/drag-geometry.ts
var jr = (e) => Number(e.toFixed(6)), Mr = (e, t) => [jr(e.x / t.metersPerPlanUnit + t.origin[0]), jr(e.z / t.metersPerPlanUnit + t.origin[1])], Nr = (e, t) => [jr((e[0] - t.origin[0]) * t.metersPerPlanUnit), jr((e[1] - t.origin[1]) * t.metersPerPlanUnit)], Pr = (e, t = !1, n = .1, r = [0, 0]) => t || !Number.isFinite(n) || n <= 0 ? e : [jr(r[0] + Math.round((e[0] - r[0]) / n) * n), jr(r[1] + Math.round((e[1] - r[1]) / n) * n)], Fr = ({ point: e, coordinates: t, absolute: n = !1, snapStepMeters: r = .1 }) => Pr(Mr(e, t), n, r / t.metersPerPlanUnit, t.origin), Ir = ({ point: e, coordinates: t, walls: n, pixelsPerMeter: r, pointerType: i, snapRadiusPixels: a, angleOrigin: o, angleReferenceRadians: s, movingEndpoint: c, onSnap: l, absolute: u = !1 }) => {
	let d = Mr(e, t);
	if (u) return l?.(null), d;
	let f = ge(bt({
		candidate: d,
		walls: n,
		pixelsPerMeter: r,
		...i === void 0 ? {} : { pointerType: i },
		...a === void 0 ? {} : { snapRadiusPixels: a },
		...o === void 0 ? {} : { angleOrigin: o },
		angleReferenceRadians: s,
		movingEndpoint: c,
		coordinates: t
	}));
	return l?.(f), f.point;
}, Lr = (e, t, n) => {
	let [r, i] = Nr(e, n), [a, o] = Nr(t, n), s = -Math.atan2(o - i, a - r);
	return {
		center: [(r + a) / 2, (i + o) / 2],
		length: Math.hypot(a - r, o - i),
		rotationYRadians: Object.is(s, -0) ? 0 : s
	};
}, Rr = (e, t, n = .42) => {
	let r = e.to[0] - e.from[0], i = e.to[1] - e.from[1], a = Math.hypot(r, i), o = a * t.metersPerPlanUnit, s = a === 0 ? 0 : (Math.atan2(i, r) * 180 / Math.PI + 360) % 360, [c, l] = Nr(e.from, t), [u, d] = Nr(e.to, t), f = a === 0 ? 0 : -i / a, p = a === 0 ? 1 : r / a;
	return {
		planLength: a,
		lengthMeters: o,
		directionDegrees: s,
		label: `${o.toFixed(2)} m`,
		guideCenter: [(c + u) / 2 + f * n, (l + d) / 2 + p * n],
		rotationYRadians: -Math.atan2(d - l, u - c)
	};
}, zr = (e, t) => {
	let n = t.to[0] - t.from[0], r = t.to[1] - t.from[1], i = Math.hypot(n, r);
	return i === 0 ? 0 : Math.max(0, Math.min(i, ((e[0] - t.from[0]) * n + (e[1] - t.from[1]) * r) / i));
}, Br = ({ point: e, walls: t, widthPlanUnits: n, metersPerPlanUnit: r, maxDistanceMeters: i = .75 }) => t.map((t) => {
	let i = Math.hypot(t.to[0] - t.from[0], t.to[1] - t.from[1]), a = zr(e, t), o = i === 0 ? 0 : a / i, s = [t.from[0] + (t.to[0] - t.from[0]) * o, t.from[1] + (t.to[1] - t.from[1]) * o];
	return {
		wallId: t.id,
		wallLengthPlanUnits: i,
		offsetPlanUnits: Math.max(0, Math.min(Math.max(0, i - n), a - n / 2)),
		distanceMeters: Math.hypot(e[0] - s[0], e[1] - s[1]) * r
	};
}).filter(({ distanceMeters: e, wallLengthPlanUnits: t }) => e <= i && t >= n).sort((e, t) => e.distanceMeters - t.distanceMeters)[0] ?? null, Vr = ({ draft: e, wallId: t, offsetPlanUnits: n, widthPlanUnits: r, sillHeightMeters: i = 0, excludeOpeningId: a }) => Ut({
	draft: e,
	wallId: t,
	widthPlanUnits: r,
	sillHeightMeters: i,
	...a === void 0 ? {} : { excludeOpeningId: a }
}).some(({ min: e, max: t }) => n >= e && n <= t), Hr = ({ offsetPlanUnits: e, widthPlanUnits: t, edge: n, cursorOffsetPlanUnits: r, wallLengthPlanUnits: i, anchorOpposite: a, minimumWidthPlanUnits: o = .3 }) => {
	if (a) {
		let a = n === "start" ? e + t : e, s = n === "start" ? Math.min(a - o, Math.max(0, r)) : Math.max(a + o, Math.min(i, r));
		return n === "start" ? {
			offsetPlanUnits: jr(s),
			widthPlanUnits: jr(a - s)
		} : {
			offsetPlanUnits: jr(a),
			widthPlanUnits: jr(s - a)
		};
	}
	let s = e + t / 2, c = n === "start" ? s - r : r - s, l = Math.min(s, i - s), u = Math.max(o / 2, Math.min(l, c));
	return {
		offsetPlanUnits: jr(s - u),
		widthPlanUnits: jr(u * 2)
	};
}, Ur = () => void 0;
function Wr({ color: e = "#fff7f1", ...t }) {
	return /* @__PURE__ */ (0, Q.jsx)(Zt, {
		...t,
		color: "#000000",
		emissive: e,
		emissiveIntensity: 1,
		toneMapped: !1
	});
}
function Gr({ color: e, opacity: t = 1, overlay: n = !1 }) {
	return /* @__PURE__ */ (0, Q.jsx)(Zt, {
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
var Kr = (0, Z.memo)(function({ from: e, to: t, color: n, width: r = .025, elevation: i = .045, overlay: a = !1 }) {
	let o = t[0] - e[0], s = t[1] - e[1];
	return /* @__PURE__ */ (0, Q.jsxs)("mesh", {
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
		raycast: Ur,
		renderOrder: a ? 30 : 0,
		children: [/* @__PURE__ */ (0, Q.jsx)("planeGeometry", { args: [Math.hypot(o, s), r] }), /* @__PURE__ */ (0, Q.jsx)(Gr, {
			color: n,
			overlay: a
		})]
	});
});
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionAlignmentGuide.tsx
function qr({ snap: e, coordinates: t }) {
	return e?.guideFrom ? /* @__PURE__ */ (0, Q.jsx)("group", {
		name: "construction-alignment-guide",
		children: /* @__PURE__ */ (0, Q.jsx)(Kr, {
			from: Nr(e.guideFrom, t),
			to: Nr(e.point, t),
			color: "#cf6648",
			width: .018,
			elevation: .8
		})
	}) : null;
}
//#endregion
//#region apps/web/src/editor-preview/construct/PlanStrokeBatch.tsx
function Jr(e) {
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
function Yr({ strokes: e, name: t }) {
	let n = (0, Z.useMemo)(() => {
		let t = /* @__PURE__ */ new Map();
		for (let n of e) {
			let e = JSON.stringify([n.color, !!n.overlay]);
			t.has(e) || t.set(e, {
				color: n.color,
				overlay: !!n.overlay,
				positions: []
			}), t.get(e).positions.push(...Jr(n));
		}
		return [...t].map(([e, { positions: t, ...n }]) => {
			let r = new xe();
			return r.setAttribute("position", new te(t, 3)), r.computeVertexNormals(), r.computeBoundingSphere(), {
				key: e,
				geometry: r,
				...n
			};
		});
	}, [e]);
	return (0, Z.useEffect)(() => () => n.forEach((e) => e.geometry.dispose()), [n]), /* @__PURE__ */ (0, Q.jsx)("group", {
		name: t,
		children: n.map((e) => /* @__PURE__ */ (0, Q.jsx)("mesh", {
			geometry: e.geometry,
			raycast: Ur,
			renderOrder: e.overlay ? 30 : 0,
			children: /* @__PURE__ */ (0, Q.jsx)(Gr, {
				color: e.color,
				overlay: e.overlay
			})
		}, e.key))
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionPlanWallJoints.tsx
var Xr = 1e-7, Zr = (e, t) => e[0] * t[1] - e[1] * t[0];
function Qr(e) {
	let t = e.coordinates.metersPerPlanUnit, n = e.walls.flatMap((n) => {
		let r = J(n.from, e.coordinates), i = J(n.to, e.coordinates), a = Math.hypot(i[0] - r[0], i[1] - r[1]);
		return a < Xr ? [] : [{
			from: r,
			to: i,
			length: a,
			direction: [(i[0] - r[0]) / a, (i[1] - r[1]) / a],
			halfWidth: (n.thicknessMeters ?? e.interiorWallThicknessMeters) / 2,
			gaps: e.openings.filter((e) => e.wallId === n.id).map((e) => [e.offsetPlanUnits * t, (e.offsetPlanUnits + e.widthPlanUnits) * t])
		}];
	}), r = [];
	for (let e of n.flatMap((e) => [e.from, e.to])) r.some((t) => Math.hypot(e[0] - t[0], e[1] - t[1]) < Xr) || r.push(e);
	let i = [];
	for (let e of r) {
		let t = n.flatMap((t) => {
			let n = [e[0] - t.from[0], e[1] - t.from[1]], r = n[0] * t.direction[0] + n[1] * t.direction[1];
			return Math.abs(Zr(n, t.direction)) > Xr || r < -1e-7 || r > t.length + Xr ? [] : [1, -1].flatMap((e) => {
				let n = r + e * Xr;
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
			if ((a.angle - r.angle + Math.PI * 2) % (Math.PI * 2) <= Math.PI + Xr) continue;
			let o = [-r.direction[1] * r.halfWidth, r.direction[0] * r.halfWidth], s = [a.direction[1] * a.halfWidth, -a.direction[0] * a.halfWidth], c = Zr(r.direction, a.direction), l = [[0, 0], o];
			if (Math.abs(c) > Xr) {
				let e = Zr([s[0] - o[0], s[1] - o[1]], a.direction) / c, t = [o[0] + e * r.direction[0], o[1] + e * r.direction[1]];
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
var $r = (0, Z.memo)(function({ draft: e }) {
	let t = (0, Z.useMemo)(() => {
		let t = new xe();
		return t.setAttribute("position", new te(Qr(e), 3)), t.computeVertexNormals(), t;
	}, [
		e.walls,
		e.openings,
		e.coordinates,
		e.interiorWallThicknessMeters
	]);
	return (0, Z.useEffect)(() => () => t.dispose(), [t]), /* @__PURE__ */ (0, Q.jsx)("mesh", {
		name: "plan-wall-joints",
		geometry: t,
		raycast: Ur,
		children: /* @__PURE__ */ (0, Q.jsx)(Gr, { color: "#596057" })
	});
}), ei = (0, Z.memo)(function({ draft: e }) {
	let t = (0, Z.useMemo)(() => {
		let t = [];
		for (let n of e.walls) {
			let r = J(n.from, e.coordinates), i = J(n.to, e.coordinates), a = Math.hypot(i[0] - r[0], i[1] - r[1]);
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
				for (let r of Tr(e, n, d)) t.push({
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
	return /* @__PURE__ */ (0, Q.jsxs)("group", {
		name: "construction-plan-walls",
		children: [/* @__PURE__ */ (0, Q.jsx)($r, { draft: e }), /* @__PURE__ */ (0, Q.jsx)(Yr, {
			name: "wall-and-opening-strokes",
			strokes: t
		})]
	});
});
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionDistanceLabel.tsx
function ti({ label: e, ariaLabel: t = "Measurement", copyText: n = e, onCopy: r }) {
	return r ? /* @__PURE__ */ (0, Q.jsx)("button", {
		type: "button",
		className: "construction-measure-label",
		"aria-label": `Copy measurement: ${e}`,
		title: "Copy measurement",
		onPointerDown: (e) => e.stopPropagation(),
		onClick: (e) => {
			e.stopPropagation(), r(n);
		},
		children: e
	}) : /* @__PURE__ */ (0, Q.jsx)("output", {
		className: "construction-measure-label",
		"aria-label": t,
		children: e
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/plan-screen-scale.ts
var ni = (e, t, n = 82) => {
	if (!(e instanceof N)) return n;
	let r = t * e.zoom / (e.top - e.bottom);
	return Number.isFinite(r) && r > 0 ? r : n;
}, ri = (e = "mouse") => e === "touch" ? 36 : e === "pen" ? 28 : 24;
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionAngleGuide.tsx
function ii({ angle: e, coordinates: t, planMode: n, labelKind: r = "Wall" }) {
	let i = n ? Wr : Zt, a = (0, Z.useRef)(null), o = (0, Z.useRef)(null), s = (0, Z.useMemo)(() => new Y(), []), [c, l] = Nr(e.junction, t), u = e.startRadians + e.sweepRadians / 2, d = Math.cos(u) * 56, f = Math.sin(u) * 56;
	return q(({ camera: e, size: t }) => {
		let n = 1 / ni(e, t.height);
		a.current?.scale.setScalar(n);
		let r = o.current;
		if (!r) return;
		s.set(c + d * n, .24, l + f * n).project(e);
		let i = (s.x + 1) * t.width / 2, u = (1 - s.y) * t.height / 2, p = r.offsetWidth / 2, m = r.offsetHeight / 2, h = Math.max(p + 8, Math.min(t.width - p - 8, i)) - i, g = Math.max(m + 8, Math.min(t.height - m - 8, u)) - u;
		r.style.transform = `translate(${h}px, ${g}px)`;
	}), /* @__PURE__ */ (0, Q.jsx)("group", {
		name: "construction-angle-guide",
		position: [
			c,
			.24,
			l
		],
		userData: e,
		children: /* @__PURE__ */ (0, Q.jsxs)("group", {
			ref: a,
			name: "construction-angle-screen-scale",
			children: [/* @__PURE__ */ (0, Q.jsxs)("mesh", {
				rotation: [
					-Math.PI / 2,
					0,
					0
				],
				raycast: Ur,
				renderOrder: 32,
				children: [/* @__PURE__ */ (0, Q.jsx)("ringGeometry", { args: [
					31,
					32.5,
					Math.max(8, Math.ceil(e.degrees / 5)),
					1,
					-e.startRadians - e.sweepRadians,
					e.sweepRadians
				] }), /* @__PURE__ */ (0, Q.jsx)(i, {
					color: "#ff754d",
					side: 2,
					depthTest: !1,
					depthWrite: !1
				})]
			}), typeof document < "u" && /* @__PURE__ */ (0, Q.jsx)(I, {
				position: [
					d,
					0,
					f
				],
				center: !0,
				zIndexRange: [14, 0],
				style: { pointerEvents: "none" },
				children: /* @__PURE__ */ (0, Q.jsx)("div", {
					ref: o,
					style: { pointerEvents: "none" },
					children: /* @__PURE__ */ (0, Q.jsx)(ti, {
						label: e.label,
						ariaLabel: `${r} angle`
					})
				})
			})]
		})
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionPointMarker.tsx
function ai({ name: e, position: t, planMode: n = !1, radiusPixels: r }) {
	let i = (0, Z.useRef)(null), a = n ? Wr : Zt;
	return q(({ camera: e, size: t }) => {
		i.current && r !== void 0 && i.current.scale.setScalar(r / (.055 * ni(e, t.height)));
	}), /* @__PURE__ */ (0, Q.jsxs)("group", {
		ref: i,
		...bt({ name: e }),
		position: t,
		children: [/* @__PURE__ */ (0, Q.jsxs)("mesh", {
			renderOrder: 30,
			raycast: Ur,
			children: [/* @__PURE__ */ (0, Q.jsx)("cylinderGeometry", { args: [
				.055,
				.055,
				.025,
				18
			] }), /* @__PURE__ */ (0, Q.jsx)(a, {
				color: "#fff7f1",
				depthTest: !1,
				depthWrite: !1
			})]
		}), /* @__PURE__ */ (0, Q.jsxs)("mesh", {
			position: [
				0,
				.014,
				0
			],
			renderOrder: 31,
			raycast: Ur,
			children: [/* @__PURE__ */ (0, Q.jsx)("cylinderGeometry", { args: [
				.028,
				.028,
				.027,
				18
			] }), /* @__PURE__ */ (0, Q.jsx)(a, {
				color: "#ff754d",
				depthTest: !1,
				depthWrite: !1
			})]
		})]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/measure-geometry.ts
var oi = 2, si = 1e-6, ci = () => ({
	start: null,
	preview: null,
	end: null
}), li = (e) => [e[0], e[1]], ui = (e) => e.end ? "complete" : e.start ? "drawing" : "idle", di = (e, t) => {
	switch (t.type) {
		case "place": return !e.start || e.end ? {
			start: li(t.point),
			preview: null,
			end: null
		} : {
			start: e.start,
			preview: null,
			end: li(t.point)
		};
		case "preview": return !e.start || e.end ? e : {
			...e,
			preview: li(t.point)
		};
		case "cancel":
		case "reset": return ci();
	}
}, fi = (e) => {
	if (!e.start) return null;
	let t = e.end ?? e.preview;
	return t ? [e.start, t] : null;
}, pi = (e) => {
	let t = Number(e.toFixed(oi));
	return (Object.is(t, -0) ? 0 : t).toFixed(oi);
}, mi = (e, t, n) => {
	let r = [t[0] - e[0], t[1] - e[1]], i = Math.hypot(...r), a = i * n.metersPerPlanUnit, o = Nr(e, n), s = Nr(t, n), c = `${pi(i)} plan units · ${pi(a)} m`;
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
			rotationYRadians: a <= si ? 0 : -Math.atan2(s[1] - o[1], s[0] - o[0])
		}
	};
}, hi = (e, t) => {
	let n = fi(e);
	return n ? mi(n[0], n[1], t) : null;
}, gi = (e) => !!(e && e.world.lengthMeters > si);
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionWallGuide.tsx
function _i({ name: e = "construction-wall-guide", wallId: t, from: n, to: r, coordinates: i, planMode: a, showMarkers: o = !1, wallThicknessMeters: s = .12, labelKind: c = "Wall", labelAvoidPoint: l }) {
	let u = (0, Z.useMemo)(() => mi(n, r, i), [
		n,
		r,
		i
	]), d = gi(u), f = `${pi(u.distanceMeters)} m`, p = (0, Z.useRef)(null), m = (0, Z.useMemo)(() => [
		new Y(),
		new Y(),
		new Y()
	], []);
	return q(({ camera: e, size: t }) => {
		let n = p.current;
		if (!n) return;
		let r = m[0].set(u.world.from[0], .25, u.world.from[1]).project(e), a = m[1].set(u.world.to[0], .25, u.world.to[1]).project(e), o = (a.x - r.x) * t.width, c = (r.y - a.y) * t.height, d = Math.hypot(o, c);
		if (d <= 1e-6) return;
		let f = o < 0 ? -1 : 1, h = c / d * f, g = -o / d * f;
		if (l) {
			let [n, o] = Nr(l, i), s = m[2].set(n, .25, o).project(e);
			h * (s.x - (r.x + a.x) / 2) * t.width - g * (s.y - (r.y + a.y) / 2) * t.height > 0 && (h = -h, g = -g);
		}
		let _ = n.offsetWidth / 2, v = n.offsetHeight / 2, y = Math.abs(h) * _ + Math.abs(g) * v + 12 + s * ni(e, t.height) / 2, b = ((r.x + a.x) / 4 + .5) * t.width, x = (.5 - (r.y + a.y) / 4) * t.height, S = (e, t, n) => Math.max(t + 8, Math.min(n - t - 8, e)), C = S(b + h * y, _, t.width) - b, w = S(x + g * y, v, t.height) - x;
		n.style.transform = `translate(${C}px, ${w}px)`;
	}), /* @__PURE__ */ (0, Q.jsxs)("group", {
		name: e,
		userData: {
			wallId: t,
			from: n,
			to: r,
			label: f,
			lengthMeters: u.distanceMeters,
			labelVisible: d
		},
		children: [o && /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(ai, {
			name: "construction-wall-start-marker",
			planMode: a,
			position: [
				u.world.from[0],
				.18,
				u.world.from[1]
			],
			radiusPixels: 4
		}), d && /* @__PURE__ */ (0, Q.jsx)(ai, {
			name: "construction-wall-tip-marker",
			planMode: a,
			position: [
				u.world.to[0],
				.18,
				u.world.to[1]
			],
			radiusPixels: 7
		})] }), d && typeof document < "u" && /* @__PURE__ */ (0, Q.jsx)(I, {
			position: [
				u.world.center[0],
				.25,
				u.world.center[1]
			],
			center: !0,
			zIndexRange: [12, 0],
			style: { pointerEvents: "none" },
			children: /* @__PURE__ */ (0, Q.jsx)("div", {
				ref: p,
				style: {
					transform: "translateY(-28px)",
					pointerEvents: "none"
				},
				children: /* @__PURE__ */ (0, Q.jsx)(ti, {
					label: f,
					ariaLabel: `${c} length`
				})
			})
		})]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/wall-connection-measurements.ts
var vi = Math.PI * 2, yi = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[1]), bi = (e, t, n) => {
	let r = e.to[0] - e.from[0], i = e.to[1] - e.from[1], a = Math.hypot(r, i);
	if (a <= n) return !1;
	let o = t[0] - e.from[0], s = t[1] - e.from[1], c = (o * r + s * i) / a;
	return c >= -n && c <= a + n && Math.abs(o * i - s * r) / a <= n;
};
function xi({ walls: e, primary: t, junctions: n, coordinates: r }) {
	let i = 1e-6 / r.metersPerPlanUnit, a = [{
		...t,
		key: "primary",
		primary: !0
	}], o = [];
	if (t.id === void 0 && yi(t.from, t.to) <= i) return {
		lengths: a,
		angles: o
	};
	let s = n.filter((e, t) => n.findIndex((t) => yi(e, t) <= i) === t);
	for (let n of e) n.id !== t.id && s.some((e) => bi(n, e, i)) && a.push({
		...n,
		key: `wall:${n.id}`,
		primary: !1
	});
	s.forEach((e, n) => {
		let r = [];
		for (let t of a) if (bi(t, e, i)) for (let n of [t.from, t.to]) {
			if (yi(e, n) <= i) continue;
			let a = (Math.atan2(n[1] - e[1], n[0] - e[0]) + vi) % vi, o = r.find((e) => Math.abs(Math.atan2(Math.sin(a - e.heading), Math.cos(a - e.heading))) < 1e-8);
			o ? o.keys.push(t.key) : r.push({
				heading: a,
				keys: [t.key]
			});
		}
		r.sort((e, t) => e.heading - t.heading), !(r.length < 2) && r.forEach((i, a) => {
			let s = r[(a + 1) % r.length], c = (s.heading - i.heading + vi) % vi;
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
function Si({ walls: e, primary: t, junctions: n, coordinates: r, planMode: i, defaultThicknessMeters: a, labelKind: o = "Wall" }) {
	let s = (0, Z.useMemo)(() => xi({
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
	return /* @__PURE__ */ (0, Q.jsxs)("group", {
		name: "construction-wall-measurements",
		children: [s.lengths.map((e) => /* @__PURE__ */ (0, Q.jsx)(_i, {
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
		}, e.key)), s.angles.map((e) => /* @__PURE__ */ (0, Q.jsx)(ii, {
			labelKind: o,
			angle: e,
			coordinates: r,
			planMode: i
		}, e.key))]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/construction-pointer-events.ts
var Ci = new v(new Y(0, 1, 0), 0), wi = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[1]) <= 1e-7, Ti = (e) => {
	e.stopPropagation();
}, Ei = (e) => {
	e.stopPropagation(), e.target?.setPointerCapture?.(e.pointerId);
}, Di = (e) => {
	e.stopPropagation();
	let t = e.target;
	t?.hasPointerCapture?.(e.pointerId) !== !1 && t?.releasePointerCapture?.(e.pointerId);
};
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionOpeningTargets.tsx
function Oi({ draft: e, draggingOpening: t, resizingOpening: n, previewPoint: r, coordinates: i, highlightedSelection: a, directlySelected: o, planMode: s, tool: c, onSelectOpening: l, setDraggingOpening: u, capturedSelectDrag: d, clientPointForEvent: f, onDraggingChange: p, openingPlacementFromEvent: m, finishOpeningDrag: h, cancelOpeningDrag: g, ToonMaterial: _, setResizingOpening: v, resizedOpeningForEvent: y, finishOpeningResize: b, cancelOpeningResize: x }) {
	return /* @__PURE__ */ (0, Q.jsx)(Q.Fragment, { children: e.openings.map((S) => {
		let C = t?.openingId === S.id ? t : null, w = n?.openingId === S.id ? n : null, T = C?.wallId ?? S.wallId, E = e.walls.find((e) => e.id === T);
		if (!E) return null;
		let D = {
			...E,
			from: r(E.from),
			to: r(E.to)
		}, O = !wi(D.from, E.from) || !wi(D.to, E.to), [k, A] = Nr(D.from, i), [j, M] = Nr(D.to, i), N = Math.hypot(D.to[0] - D.from[0], D.to[1] - D.from[1]);
		if (N <= 0) return null;
		let P = w?.offsetPlanUnits ?? C?.offsetPlanUnits ?? S.offsetPlanUnits, F = w?.widthPlanUnits ?? S.widthPlanUnits, I = (P + F / 2) / N, L = P + F / 2, R = .08 / i.metersPerPlanUnit, z = e.openings.filter((e) => e.id !== S.id && e.wallId === T), B = P < 0 || P + F > N || z.some((e) => P < e.offsetPlanUnits + e.widthPlanUnits + R && P + F + R > e.offsetPlanUnits), V = k + (j - k) * I, H = A + (M - A) * I, U = -Math.atan2(M - A, j - k), W = Et(a, "opening", S.id), ee = o?.kind === "opening" && o.id === S.id;
		return /* @__PURE__ */ (0, Q.jsxs)("group", {
			position: [
				V,
				s ? .5 : S.sillHeightMeters + S.openingHeightMeters / 2,
				H
			],
			rotation: [
				0,
				U,
				0
			],
			children: [
				/* @__PURE__ */ (0, Q.jsxs)("mesh", {
					name: `construction-opening-target-${S.id}`,
					userData: {
						validPlacement: !B,
						wallId: T
					},
					renderOrder: W ? 24 : 19,
					onPointerDown: (e) => {
						c !== "select" || e.nativeEvent?.shiftKey || (Ei(e), l(S.id), u({
							...d(e),
							openingId: S.id,
							wallId: D.id,
							offsetPlanUnits: S.offsetPlanUnits
						}));
					},
					onPointerMove: (e) => {
						if (t?.openingId !== S.id) return;
						Ti(e);
						let n = Or(t, e.pointerId, f(e));
						if (!n) return;
						n.started && p?.(!0);
						let r = m(e, S.widthPlanUnits);
						r && u((e) => e?.openingId === S.id ? {
							...n.drag,
							...r
						} : e);
					},
					onPointerUp: h,
					onPointerCancel: g,
					children: [/* @__PURE__ */ (0, Q.jsx)("boxGeometry", { args: [
						F * i.metersPerPlanUnit,
						s ? .08 : S.openingHeightMeters,
						s ? Math.max(D.thicknessMeters ?? e.interiorWallThicknessMeters, .28) + .12 : W ? .1 : .24
					] }), /* @__PURE__ */ (0, Q.jsx)(_, {
						visible: W || O || T !== S.wallId,
						color: B ? "#c45345" : W || O || T !== S.wallId ? "#ff754d" : "#ffffff",
						transparent: !0,
						opacity: W ? .18 : O || T !== S.wallId ? .12 : .001,
						wireframe: !s && (W || O || T !== S.wallId),
						depthTest: !1,
						depthWrite: !1
					})]
				}),
				ee && /* @__PURE__ */ (0, Q.jsxs)("group", {
					name: `construction-opening-clearances-${S.id}`,
					position: [
						0,
						s ? -.08 : -S.sillHeightMeters - S.openingHeightMeters / 2 + .07,
						0
					],
					children: [z.map((e) => /* @__PURE__ */ (0, Q.jsxs)("mesh", {
						position: [
							(e.offsetPlanUnits + e.widthPlanUnits / 2 - L) * i.metersPerPlanUnit,
							0,
							0
						],
						renderOrder: 23,
						children: [/* @__PURE__ */ (0, Q.jsx)("boxGeometry", { args: [
							(e.widthPlanUnits + R * 2) * i.metersPerPlanUnit,
							.018,
							.18
						] }), /* @__PURE__ */ (0, Q.jsx)(_, {
							color: "#7d4e42",
							transparent: !0,
							opacity: .52,
							depthTest: !1
						})]
					}, e.id)), [R / 2, N - R / 2].map((e) => /* @__PURE__ */ (0, Q.jsxs)("mesh", {
						position: [
							(e - L) * i.metersPerPlanUnit,
							0,
							0
						],
						renderOrder: 23,
						children: [/* @__PURE__ */ (0, Q.jsx)("boxGeometry", { args: [
							R * i.metersPerPlanUnit,
							.02,
							.24
						] }), /* @__PURE__ */ (0, Q.jsx)(_, {
							color: "#27312e",
							transparent: !0,
							opacity: .6,
							depthTest: !1
						})]
					}, e))]
				}),
				ee && !C && ["start", "end"].map((e) => /* @__PURE__ */ (0, Q.jsxs)("mesh", {
					name: `construction-opening-resize-${S.id}-${e}`,
					position: [
						(e === "start" ? -1 : 1) * F * i.metersPerPlanUnit / 2,
						0,
						0
					],
					renderOrder: 26,
					onPointerDown: (t) => {
						t.nativeEvent?.shiftKey || (Ei(t), v({
							...d(t),
							openingId: S.id,
							wallId: D.id,
							edge: e,
							originalOffsetPlanUnits: S.offsetPlanUnits,
							originalWidthPlanUnits: S.widthPlanUnits,
							offsetPlanUnits: S.offsetPlanUnits,
							widthPlanUnits: S.widthPlanUnits
						}));
					},
					onPointerMove: (t) => {
						if (n?.openingId !== S.id || n.edge !== e) return;
						Ti(t);
						let r = Or(n, t.pointerId, f(t));
						if (!r) return;
						r.started && p?.(!0);
						let i = y(t, r.drag);
						i && v((e) => e?.openingId === S.id ? {
							...r.drag,
							...i
						} : e);
					},
					onPointerUp: b,
					onPointerCancel: x,
					children: [/* @__PURE__ */ (0, Q.jsx)("octahedronGeometry", { args: [.15, 0] }), /* @__PURE__ */ (0, Q.jsx)(_, {
						color: "#fff7f1",
						depthTest: !1
					})]
				}, e))
			]
		}, S.id);
	}) });
}
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionWallTargets.tsx
function ki({ draft: e, highlightedSelection: t, directlySelected: n, draggingEndpoint: r, draggingWall: i, previewPoint: a, coordinates: o, openingTool: s, placeOpeningFromEvent: c, tool: l, onSelectWall: u, setOpeningPreview: d, placementPreviewFromEvent: f, ToonMaterial: p, planMode: m, translationPointForEvent: h, setDraggingWall: g, capturedSelectDrag: _, clientPointForEvent: v, onDraggingChange: y, wallDeltaForEvent: b, finishWallDrag: x, cancelWallDrag: S, setDraggingEndpoint: C, pointForEvent: w, finishEndpointDrag: T, cancelEndpointDrag: E }) {
	return /* @__PURE__ */ (0, Q.jsx)(Q.Fragment, { children: e.walls.map((e) => {
		let D = Bt(t).filter((t) => t.kind === "wall" && t.id === e.id), O = D.some((e) => e.kind === "wall" && !e.span), k = n?.kind === "wall" && n.id === e.id, A = r !== null && (wi(e.from, r.origin) || wi(e.to, r.origin)) || i !== null && (wi(e.from, i.from) || wi(e.to, i.from) || wi(e.from, i.to) || wi(e.to, i.to)), j = r || i ? {
			...e,
			from: a(e.from),
			to: a(e.to)
		} : e, M = Lr(j.from, j.to, o), N = Rr(j, o);
		return /* @__PURE__ */ (0, Q.jsxs)("group", { children: [
			D.map((t, n) => {
				if (t.kind !== "wall" || !t.span) return null;
				let r = (t) => Nr([e.from[0] + (e.to[0] - e.from[0]) * t, e.from[1] + (e.to[1] - e.from[1]) * t], o);
				return /* @__PURE__ */ (0, Q.jsx)(Kr, {
					from: r(t.span[0]),
					to: r(t.span[1]),
					color: "#ff754d",
					width: .11,
					elevation: .21
				}, n);
			}),
			/* @__PURE__ */ (0, Q.jsxs)("mesh", {
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
					l !== "select" || t.nativeEvent?.shiftKey || (Ti(t), u(e.id));
				},
				onPointerMove: (e) => {
					s && (Ti(e), d(f(e, s)));
				},
				children: [/* @__PURE__ */ (0, Q.jsx)("boxGeometry", { args: [
					M.length,
					.18,
					O || A ? .11 : .28
				] }), /* @__PURE__ */ (0, Q.jsx)(p, {
					visible: O || A,
					color: O || A ? "#ff754d" : "#ffffff",
					transparent: !0,
					opacity: O ? m ? .24 : .95 : A ? .68 : .001,
					depthTest: !1
				})]
			}),
			k && l === "select" && /* @__PURE__ */ (0, Q.jsxs)("group", {
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
				children: [/* @__PURE__ */ (0, Q.jsxs)("mesh", {
					renderOrder: 22,
					children: [/* @__PURE__ */ (0, Q.jsx)("boxGeometry", { args: [
						N.lengthMeters,
						.018,
						.018
					] }), /* @__PURE__ */ (0, Q.jsx)(p, {
						color: "#27312e",
						depthTest: !1
					})]
				}), [-1, 1].map((e) => /* @__PURE__ */ (0, Q.jsxs)("mesh", {
					position: [
						e * N.lengthMeters / 2,
						0,
						0
					],
					renderOrder: 22,
					children: [/* @__PURE__ */ (0, Q.jsx)("boxGeometry", { args: [
						.018,
						.022,
						.18
					] }), /* @__PURE__ */ (0, Q.jsx)(p, {
						color: "#ff754d",
						depthTest: !1
					})]
				}, e))]
			}),
			k && l === "select" && /* @__PURE__ */ (0, Q.jsxs)("mesh", {
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
					n && (Ei(t), g({
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
					Ti(t);
					let n = Or(i, t.pointerId, v(t));
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
				children: [/* @__PURE__ */ (0, Q.jsx)("octahedronGeometry", { args: [.2, 0] }), /* @__PURE__ */ (0, Q.jsx)(p, {
					color: "#27312e",
					depthTest: !1
				})]
			}),
			k && l === "select" && ["from", "to"].map((t) => {
				let [n, i] = Nr(j[t], o);
				return /* @__PURE__ */ (0, Q.jsxs)("mesh", {
					name: `construction-wall-endpoint-${e.id}-${t}`,
					position: [
						n,
						.18,
						i
					],
					renderOrder: 20,
					onPointerDown: (n) => {
						n.nativeEvent?.shiftKey || (Ei(n), C({
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
						Ti(n);
						let i = Or(r, n.pointerId, v(n));
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
					children: [/* @__PURE__ */ (0, Q.jsx)("sphereGeometry", { args: [
						.13,
						18,
						12
					] }), /* @__PURE__ */ (0, Q.jsx)(p, {
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
var Ai = 1e-7, ji = (e, t) => ({
	minX: Math.min(e[0], t[0]),
	maxX: Math.max(e[0], t[0]),
	minY: Math.min(e[1], t[1]),
	maxY: Math.max(e[1], t[1])
}), Mi = (e) => [
	[e.minX, e.minY],
	[e.maxX, e.minY],
	[e.maxX, e.maxY],
	[e.minX, e.maxY]
], Ni = (e, t) => e[0] >= t.minX - Ai && e[0] <= t.maxX + Ai && e[1] >= t.minY - Ai && e[1] <= t.maxY + Ai, Pi = (e, t, n) => {
	if (Ni(e, n) || Ni(t, n)) return !0;
	let r = Mi(n);
	return r.some((n, i) => dt(e, t, n, r[(i + 1) % r.length]));
}, Fi = (e, t) => e.some((e) => Ni(e, t)) || Mi(t).some((t) => Ct(t, e)) ? !0 : e.some((n, r) => Pi(n, e[(r + 1) % e.length], t)), Ii = (e, t) => {
	let n = t.walls.find((t) => t.id === e.wallId);
	if (!n) return null;
	let r = n.to[0] - n.from[0], i = n.to[1] - n.from[1], a = Math.hypot(r, i);
	if (a <= Ai) return null;
	let o = [r / a, i / a], s = (e) => [n.from[0] + o[0] * e, n.from[1] + o[1] * e];
	return [s(e.offsetPlanUnits), s(e.offsetPlanUnits + e.widthPlanUnits)];
}, Li = ({ from: e, to: t, draft: n, rooms: r }) => {
	let i = ji(e, t), a = r.filter((e) => Ni(Lt(e.polygon), i)).map((e) => ({
		kind: "room",
		id: e.id
	})), o = n.walls.filter((e) => Pi(e.from, e.to, i)).map((e) => ({
		kind: "wall",
		id: e.id
	})), s = n.openings.filter((e) => {
		let t = Ii(e, n);
		return t ? Pi(t[0], t[1], i) : !1;
	}).map((e) => ({
		kind: "opening",
		id: e.id
	})), c = (n.pools ?? []).filter((e) => Fi(e.polygon, i)).map((e) => ({
		kind: "pool",
		id: e.id
	})), l = [...n.groundZones ?? [], ...n.rooms.flatMap((e) => e.floorZones ?? [])].filter((e) => e.polygon.every((e) => Ni(e, i))).map((e) => ({
		kind: "floor-zone",
		id: e.id
	}));
	return Bt(Ee([
		...a,
		...o,
		...s,
		...(n.hedges ?? []).filter((e) => Pi(e.from, e.to, i)).map((e) => ({
			kind: "hedge",
			id: e.id
		})),
		...(n.outdoorPlatforms ?? []).filter((e) => Fi(e.polygon, i)).map((e) => ({
			kind: "outdoor-platform",
			id: e.id
		})),
		...c,
		...l
	]));
}, Ri = (e, t, n, r) => {
	let i = t[0] - e[0], a = t[1] - e[1], o = i * (n[1] - e[1]) - a * (n[0] - e[0]), s = i * (r[1] - e[1]) - a * (r[0] - e[0]), c = Ai * Math.max(1, Math.hypot(i, a));
	if (Math.abs(o) > c || Math.abs(s) > c) return !1;
	let l = Math.abs(i) >= Math.abs(a), u = [l ? e[0] : e[1], l ? t[0] : t[1]].sort((e, t) => e - t), d = [l ? n[0] : n[1], l ? r[0] : r[1]].sort((e, t) => e - t);
	return Math.min(u[1], d[1]) - Math.max(u[0], d[0]) > Ai;
}, zi = ({ selection: e, draft: t, previewFloor: n, wallRuns: r }) => {
	let i = Array.isArray(e) ? e : Bt(e), a = new Set(i.filter((e) => e.kind === "room").map((e) => e.id)), o = new Set(i.filter((e) => e.kind === "opening").map((e) => e.id)), s = new Set(i.filter((e) => e.kind === "pool").map((e) => e.id)), c = new Set(i.filter((e) => e.kind === "floor-zone").map((e) => e.id)), l = (e) => t.walls.some((t) => t.id === e) ? e : r.find((t) => t.wallId === e)?.sourceWallId, u = [], d = n.rooms, f = d.filter((e) => a.has(e.id)), p = d.filter((e) => !a.has(e.id)), m = new Set(i.filter((e) => e.kind === "wall").map((e) => l(e.id)));
	for (let e of t.walls) {
		let n = e.to[0] - e.from[0], r = e.to[1] - e.from[1], i = n * n + r * r;
		if (i <= Ai * Ai) continue;
		let s = (t) => ((t[0] - e.from[0]) * n + (t[1] - e.from[1]) * r) / i, c = (t) => t.flatMap((t) => t.polygon.flatMap((n, r) => {
			let i = t.polygon[(r + 1) % t.polygon.length];
			return Ri(e.from, e.to, n, i) ? [[Math.max(0, Math.min(s(n), s(i))), Math.min(1, Math.max(s(n), s(i)))]] : [];
		})), l = c(f), d = a.size ? c(p) : [];
		for (let n of t.openings.filter((t) => t.wallId === e.id)) {
			let e = n.offsetPlanUnits / Math.sqrt(i), t = e + n.widthPlanUnits / Math.sqrt(i);
			d.some(([n, r]) => t > n + Ai && e < r - Ai) && d.push([e, t]);
		}
		let h = [.../* @__PURE__ */ new Set([
			0,
			1,
			...l.flat(),
			...d.flat()
		])].sort((e, t) => e - t), g = [];
		for (let t = 1; t < h.length; t++) {
			let n = h[t - 1], r = h[t], i = (n + r) / 2;
			r - n < Ai || d.some(([e, t]) => i > e && i < t) || !m.has(e.id) && !l.some(([e, t]) => i > e && i < t) || (g.at(-1)?.[1] === n ? g[g.length - 1][1] = r : g.push([n, r]));
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
			d.some(([n, r]) => t > n + Ai && e < r - Ai) ? o.delete(n.id) : g.some(([n, r]) => t > n + Ai && e < r - Ai) && o.add(n.id);
		}
	}
	for (let e of f) u.some((n) => {
		if (n.kind !== "wall") return !1;
		let r = t.walls.find((e) => e.id === n.id), i = (e) => [r.from[0] + (r.to[0] - r.from[0]) * e, r.from[1] + (r.to[1] - r.from[1]) * e];
		return e.polygon.some((t, r) => Ri(i(n.span?.[0] ?? 0), i(n.span?.[1] ?? 1), t, e.polygon[(r + 1) % e.polygon.length]));
	}) || a.delete(e.id);
	return Bt(Ee([
		...i.filter((e) => e.kind === "outdoor-platform" && t.outdoorPlatforms?.some((t) => t.id === e.id)),
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
function Bi({ doorConfiguration: e = Ne, planMode: t = !1, referenceWalls: n = [], draft: r, coordinates: i, rooms: a, selection: o, deletionTargets: s = Bt(o), previewFloor: c, wallRuns: l = [], tool: u, drawStart: d = null, drawPreview: f = null, drawAngleReferenceRadians: p = null, wallExteriorColor: m = "#c97370", poolPoints: h = [], floorPaintTarget: g = "room", floorZonePoints: _ = [], floorZonePreview: v = null, onCancelFloorZone: y, measurePhase: b = "idle", onSelectWall: x, onSelectOpening: S, onSelectRoom: C, onSelectMany: w, onClearSelection: T, onMoveEndpoint: E, onTranslateWall: D, onMoveOpening: O, onResizeOpening: A, onPlaceOpening: j, onBeginWall: M, onPreviewWall: N, onAddWall: P, onCancelWall: F, onPlaceMeasure: I, onPreviewMeasure: L, onPlaceFloorZonePoint: R, onPreviewFloorZonePoint: z, onDraggingChange: V, onMarqueeChange: H }) {
	let U = Ht(), W = t ? Wr : Zt, ee = B((e) => e.get), ne = (0, Z.useRef)(new Y()), [re, ie] = (0, Z.useState)(null);
	(0, Z.useEffect)(() => ie(null), [
		u,
		d,
		_.length,
		o
	]);
	let [G, ae] = (0, Z.useState)(null), [K, se] = (0, Z.useState)(null), [ce, le] = (0, Z.useState)(null), [ue, de] = (0, Z.useState)(null), [fe, pe] = (0, Z.useState)(null), [me, he] = (0, Z.useState)(null), ge = (0, Z.useRef)(null), q = (0, Z.useCallback)((e) => {
		ge.current = e, he(e);
	}, []), _e = (0, Z.useCallback)(() => {
		let e = ge.current;
		e?.target.hasPointerCapture?.(e.pointerId) !== !1 && e?.target.releasePointerCapture?.(e.pointerId), q(null), V?.(!1), H?.(!1);
	}, [
		q,
		V,
		H
	]);
	(0, Z.useEffect)(() => {
		if (!G || u === "select" && o?.kind === "wall" && o.id === G.wallId) return;
		let { target: e, pointerId: t } = G;
		e.hasPointerCapture?.(t) !== !1 && e.releasePointerCapture?.(t), ae(null), ie(null), G.dragActive && V?.(!1);
	}, [
		u,
		o,
		G,
		V
	]), (0, Z.useEffect)(() => {
		u !== "select" && ge.current && _e();
	}, [_e, u]), (0, Z.useEffect)(() => {
		if (typeof globalThis.addEventListener != "function") return;
		let e = (e) => {
			e.key !== "Escape" || !ge.current || (e.preventDefault(), _e());
		};
		return U.events.addEventListener("keydown", e, !0), () => U.events.removeEventListener("keydown", e, !0);
	}, [_e, U]), (0, Z.useEffect)(() => () => {
		let e = ge.current;
		e?.target.hasPointerCapture?.(e.pointerId) !== !1 && e?.target.releasePointerCapture?.(e.pointerId);
	}, []);
	let ve = u === "door" || u === "window" || u === "passage" ? u : null;
	(0, Z.useEffect)(() => pe(null), [u]);
	let ye = u === "floor" && g === "custom-area", be = u === "wall" || u === "hedge" || u === "pool" || u === "platform" || ye, Se = u === "pool" || u === "platform" ? h : ye ? _ : [], Ce = ye ? _.at(-1) ?? null : d, J = ye ? v : f, we = ye ? R : M, Te = ye ? z : N, De = ye ? R : P, Oe = ye ? y : F, ke = Se.slice(1).map((e, t) => ({
		id: `construction-draft-${t}`,
		from: Se[t],
		to: e
	})), Ae = [...r.walls, ...n], je = [
		...Ae,
		...r.hedges ?? [],
		...ke
	], Me = ke.at(-1), Pe = Me ? Math.atan2(Me.to[1] - Me.from[1], Me.to[0] - Me.from[0]) : p ?? void 0, Ie = (0, Z.useMemo)(() => {
		let e = [
			...r.walls.flatMap((e) => [e.from, e.to]),
			...(r.pools ?? []).flatMap((e) => e.polygon),
			...(r.outdoorPlatforms ?? []).flatMap((e) => e.polygon),
			...h,
			..._
		];
		return Math.max(20, ...e.flatMap((e) => e.map(Math.abs))) * 4 * i.metersPerPlanUnit;
	}, [
		i.metersPerPlanUnit,
		r.walls,
		r.pools,
		r.outdoorPlatforms,
		h,
		_
	]), Le = (me ? Math.hypot(me.clientTo[0] - me.clientFrom[0], me.clientTo[1] - me.clientFrom[1]) : 0) >= 4, Re = (0, Z.useMemo)(() => Le && me ? Li({
		from: me.from,
		to: me.to,
		draft: r,
		rooms: a
	}) : [], [
		r,
		me,
		Le,
		a
	]), ze = (0, Z.useMemo)(() => Le && c ? zi({
		selection: Re,
		draft: r,
		previewFloor: c,
		wallRuns: l
	}) : Re, [
		r,
		Le,
		Re,
		c,
		l
	]), Be = (0, Z.useMemo)(() => Ee(Le ? ze : s), [
		s,
		Le,
		ze
	]), Ve = Le || o?.kind === "multiple" ? null : o, He = (0, Z.useMemo)(() => a.map((e) => {
		let t = e.polygon.map((e) => {
			let [t, n] = Nr(e, i);
			return new k(t, n);
		}), n = oe.triangulateShape(t, []).flatMap((e) => e.flatMap((e) => [
			t[e].x,
			.018,
			t[e].y
		])), r = new xe();
		return r.setAttribute("position", new te(n, 3)), r.computeVertexNormals(), {
			room: e,
			geometry: r
		};
	}), [i, a]);
	(0, Z.useEffect)(() => () => {
		He.forEach(({ geometry: e }) => e.dispose());
	}, [He]);
	let Ue = (e) => {
		let t = e.ray.intersectPlane(Ci, ne.current);
		if (!t) return null;
		let n = be || G !== null, { camera: a, size: o } = ee(), s = n ? ni(a, o.height, r.view.pixelsPerMeter) : r.view.pixelsPerMeter;
		if (Se.length >= 3 && !e.nativeEvent.altKey) {
			let [n, r] = Nr(Se[0], i);
			if (Math.hypot(t.x - n, t.z - r) * s <= ri(e.nativeEvent.pointerType)) return ie(null), Se[0];
		}
		return Ir(bt({
			point: t,
			coordinates: i,
			walls: be || G ? je : Ae,
			onSnap: ie,
			pixelsPerMeter: s,
			snapRadiusPixels: n ? ri(e.nativeEvent.pointerType) : void 0,
			pointerType: e.nativeEvent.pointerType,
			angleOrigin: G?.angleOrigin ?? (be ? Ce ?? void 0 : void 0),
			angleReferenceRadians: G ? void 0 : Pe,
			movingEndpoint: G?.origin,
			absolute: e.nativeEvent.altKey
		}));
	}, We = (e) => {
		let t = e.ray.intersectPlane(Ci, ne.current);
		return t ? Fe({
			x: t.x,
			z: t.z
		}, i) : null;
	}, Ge = (e) => [e.nativeEvent.clientX, e.nativeEvent.clientY], Ke = (e) => ({
		...Dr(e.pointerId, Ge(e)),
		target: e.target
	}), qe = (e, t) => {
		let n = We(e);
		return n ? {
			...t,
			to: n,
			clientTo: Ge(e)
		} : t;
	}, Je = (e) => {
		let t = ge.current;
		if (!t || t.pointerId !== e.pointerId) return;
		e.stopPropagation();
		let n = qe(e, t);
		Math.hypot(n.clientTo[0] - n.clientFrom[0], n.clientTo[1] - n.clientFrom[1]) >= 4 && w?.(Li({
			from: n.from,
			to: n.to,
			draft: r,
			rooms: a
		})), _e();
	}, Ye = (e) => {
		let t = e.ray.intersectPlane(Ci, ne.current);
		return t ? Fr({
			point: t,
			coordinates: i,
			absolute: e.nativeEvent.altKey
		}) : null;
	}, Xe = (e, t) => {
		let n = Ye(e);
		return n ? [Number((n[0] - t[0]).toFixed(4)), Number((n[1] - t[1]).toFixed(4))] : null;
	}, Ze = (e, t) => {
		let n = Ye(e);
		return n ? Br({
			point: n,
			walls: Ae,
			widthPlanUnits: t,
			metersPerPlanUnit: i.metersPerPlanUnit
		}) : null;
	}, Qe = (t, n) => {
		let a = (n === "door" ? e.widthMeters : n === "window" ? 1.2 : .9) / i.metersPerPlanUnit, o = Ze(t, a);
		return o ? {
			wallId: o.wallId,
			offsetPlanUnits: o.offsetPlanUnits,
			valid: (n !== "door" || e.heightMeters <= (r.walls.find((e) => e.id === o.wallId)?.heightMeters ?? r.defaultWallHeightMeters)) && Vr({
				draft: r,
				sillHeightMeters: n === "window" ? .9 : 0,
				wallId: o.wallId,
				offsetPlanUnits: o.offsetPlanUnits,
				widthPlanUnits: a
			})
		} : null;
	}, $e = (e) => {
		if (!ve) return;
		Ti(e);
		let t = Qe(e, ve);
		pe(null), t?.valid && j(ve, t.wallId, t.offsetPlanUnits);
	}, et = (e, t) => {
		let n = r.walls.find((e) => e.id === t.wallId), a = Ye(e);
		return !n || !a ? null : Hr({
			offsetPlanUnits: t.originalOffsetPlanUnits,
			widthPlanUnits: t.originalWidthPlanUnits,
			edge: t.edge,
			cursorOffsetPlanUnits: zr(a, n),
			wallLengthPlanUnits: Math.hypot(n.to[0] - n.from[0], n.to[1] - n.from[1]),
			anchorOpposite: e.nativeEvent.altKey,
			minimumWidthPlanUnits: .3 / i.metersPerPlanUnit
		});
	}, tt = (e) => {
		if (!G) return;
		let t = G.dragActive ? Ue(e) : null;
		Di(e), ae(null), ie(null), G.dragActive && V?.(!1), t && E(G.wallId, G.endpoint, t);
	}, nt = (e) => {
		if (!ce) return;
		let t = ce.dragActive ? r.openings.find((e) => e.id === ce.openingId) : null, n = t ? Ze(e, t.widthPlanUnits) ?? ce : null;
		Di(e), le(null), ce.dragActive && V?.(!1), n && O(ce.openingId, n.wallId, n.offsetPlanUnits);
	}, rt = (e) => {
		if (!ue) return;
		let t = ue.dragActive ? et(e, ue) ?? ue : null;
		Di(e), de(null), ue.dragActive && V?.(!1), t && A(t.offsetPlanUnits, t.widthPlanUnits);
	}, it = (e) => {
		if (!K) return;
		let t = K.dragActive ? Xe(e, K.grab) : null;
		Di(e), se(null), K.dragActive && V?.(!1), t && (t[0] !== 0 || t[1] !== 0) && D(K.wallId, t);
	}, at = (e) => {
		G && (Di(e), ae(null), ie(null), G.dragActive && V?.(!1));
	}, ot = (e) => {
		ce && (Di(e), le(null), ce.dragActive && V?.(!1));
	}, st = (e) => {
		ue && (Di(e), de(null), ue.dragActive && V?.(!1));
	}, ct = (e) => {
		K && (Di(e), se(null), K.dragActive && V?.(!1));
	}, lt = (0, Z.useCallback)((e) => {
		if (G && wi(e, G.origin)) return G.point;
		if (K) {
			if (wi(e, K.from)) return [K.from[0] + K.delta[0], K.from[1] + K.delta[1]];
			if (wi(e, K.to)) return [K.to[0] + K.delta[0], K.to[1] + K.delta[1]];
		}
		return e;
	}, [G, K]), ut = be && Ce && J ? Lr(Ce, J, i) : null, dt = ve && fe ? (() => {
		let t = r.walls.find((e) => e.id === fe.wallId);
		if (!t) return null;
		let n = (ve === "door" ? e.widthMeters : ve === "window" ? 1.2 : .9) / i.metersPerPlanUnit, a = ve === "door" ? e.heightMeters : ve === "window" ? 1.2 : 2.04, o = ve === "window" ? .9 : 0, [s, c] = Nr(t.from, i), [l, u] = Nr(t.to, i), d = Math.hypot(t.to[0] - t.from[0], t.to[1] - t.from[1]), f = (fe.offsetPlanUnits + n / 2) / d;
		return {
			...fe,
			widthMeters: n * i.metersPerPlanUnit,
			openingHeightMeters: a,
			sillHeightMeters: o,
			x: s + (l - s) * f,
			z: c + (u - c) * f,
			rotationY: -Math.atan2(u - c, l - s)
		};
	})() : null, ft = (0, Z.useMemo)(() => ({
		...r,
		walls: G || K ? r.walls.map((e) => ({
			...e,
			from: lt(e.from),
			to: lt(e.to)
		})) : r.walls,
		openings: ce || ue ? r.openings.map((e) => ce?.openingId === e.id ? {
			...e,
			wallId: ce.wallId,
			offsetPlanUnits: ce.offsetPlanUnits
		} : ue?.openingId === e.id ? {
			...e,
			offsetPlanUnits: ue.offsetPlanUnits,
			widthPlanUnits: ue.widthPlanUnits
		} : e) : r.openings
	}), [
		r,
		G,
		K,
		ce,
		ue,
		lt
	]), pt = G ? ft.walls.find((e) => e.id === G.wallId) : null;
	return {
		snap: re,
		drawing: be,
		segmentStart: Ce,
		segmentPreview: J,
		beginSegment: we,
		previewSegment: Te,
		commitSegment: De,
		cancelDrawing: Oe,
		drawingWalls: je,
		tool: u,
		rawPlanPointForEvent: We,
		clientPointForEvent: Ge,
		changeMarquee: q,
		onDraggingChange: V,
		onMarqueeChange: H,
		activeMarquee: ge,
		updateMarqueeForEvent: qe,
		finishMarquee: Je,
		releaseMarquee: _e,
		floorSpan: Ie,
		marqueeWorldRectangle: Le && me ? (() => {
			let e = ji(me.from, me.to), [t, n] = Nr([e.minX, e.minY], i), [r, a] = Nr([e.maxX, e.maxY], i);
			return {
				minX: t,
				maxX: r,
				minZ: n,
				maxZ: a,
				center: [(t + r) / 2, (n + a) / 2],
				width: Math.max(.001, r - t),
				depth: Math.max(.001, a - n)
			};
		})() : null,
		marqueeActive: Le,
		draft: r,
		highlightedSelection: Be,
		coordinates: i,
		planMode: t,
		displayedDraft: ft,
		roomTargets: He,
		onSelectRoom: C,
		ToonMaterial: W,
		directlySelected: Ve,
		draggingEndpoint: G,
		draggingWall: K,
		previewPoint: lt,
		openingTool: ve,
		placeOpeningFromEvent: $e,
		onSelectWall: x,
		setOpeningPreview: pe,
		placementPreviewFromEvent: Qe,
		translationPointForEvent: Ye,
		setDraggingWall: se,
		capturedSelectDrag: Ke,
		wallDeltaForEvent: Xe,
		finishWallDrag: it,
		cancelWallDrag: ct,
		setDraggingEndpoint: ae,
		pointForEvent: Ue,
		finishEndpointDrag: tt,
		cancelEndpointDrag: at,
		draggingOpening: ce,
		resizingOpening: ue,
		onSelectOpening: S,
		setDraggingOpening: le,
		openingPlacementFromEvent: Ze,
		finishOpeningDrag: nt,
		cancelOpeningDrag: ot,
		setResizingOpening: de,
		resizedOpeningForEvent: et,
		finishOpeningResize: rt,
		cancelOpeningResize: st,
		preview: ut,
		wallExteriorColor: m,
		drawStart: d,
		drawPreview: f,
		resizedWall: pt,
		placementPreview: dt,
		onClearSelection: T,
		onPlaceMeasure: I,
		drawingFloorZone: ye,
		onPreviewWall: N,
		onBeginWall: M,
		measurePhase: b,
		onPreviewMeasure: L,
		onPreviewFloorZonePoint: z,
		onPlaceFloorZonePoint: R,
		onAddWall: P,
		onCancelWall: F
	};
}
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionInteractionLayer.tsx
function Vi(e) {
	let { snap: t, drawing: n, segmentStart: r, segmentPreview: i, beginSegment: a, previewSegment: o, commitSegment: s, cancelDrawing: c, drawingWalls: l, tool: u, rawPlanPointForEvent: d, clientPointForEvent: f, changeMarquee: p, onDraggingChange: m, onMarqueeChange: h, activeMarquee: g, updateMarqueeForEvent: _, finishMarquee: v, releaseMarquee: y, floorSpan: b, marqueeWorldRectangle: x, marqueeActive: S, draft: C, highlightedSelection: w, coordinates: T, planMode: E, displayedDraft: D, roomTargets: O, onSelectRoom: k, ToonMaterial: A, directlySelected: j, draggingEndpoint: M, draggingWall: N, previewPoint: P, openingTool: F, placeOpeningFromEvent: I, onSelectWall: L, setOpeningPreview: R, placementPreviewFromEvent: z, translationPointForEvent: B, setDraggingWall: V, capturedSelectDrag: H, wallDeltaForEvent: U, finishWallDrag: W, cancelWallDrag: ee, setDraggingEndpoint: te, pointForEvent: ne, finishEndpointDrag: re, cancelEndpointDrag: ie, draggingOpening: G, resizingOpening: ae, onSelectOpening: K, setDraggingOpening: oe, openingPlacementFromEvent: se, finishOpeningDrag: ce, cancelOpeningDrag: le, setResizingOpening: ue, resizedOpeningForEvent: de, finishOpeningResize: fe, cancelOpeningResize: pe, preview: me, wallExteriorColor: he, resizedWall: ge, placementPreview: q, onClearSelection: _e, onPlaceMeasure: ve, measurePhase: ye, onPreviewMeasure: be } = Bi(e), xe = (0, Z.useRef)(null);
	return (0, Z.useEffect)(() => {
		xe.current = null;
	}, [u]), /* @__PURE__ */ (0, Q.jsxs)("group", {
		name: "construction-edit-layer",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(qr, {
				snap: t,
				coordinates: T
			}),
			/* @__PURE__ */ (0, Q.jsxs)("mesh", {
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
					let t = d(e);
					if (!t) return;
					Ei(e);
					let n = f(e);
					p({
						from: t,
						to: t,
						clientFrom: n,
						clientTo: n,
						pointerId: e.pointerId,
						target: e.target
					}), m?.(!0), h?.(!0);
				},
				onPointerMove: (e) => {
					let t = g.current;
					!t || t.pointerId !== e.pointerId || (e.stopPropagation(), p(_(e, t)));
				},
				onPointerUp: v,
				onPointerCancel: (e) => {
					let t = g.current;
					!t || t.pointerId !== e.pointerId || (e.stopPropagation(), y());
				},
				children: [/* @__PURE__ */ (0, Q.jsx)("planeGeometry", { args: [b, b] }), /* @__PURE__ */ (0, Q.jsx)(Wr, {
					visible: !1,
					transparent: !0,
					opacity: 0,
					depthTest: !1,
					depthWrite: !1,
					side: 2
				})]
			}),
			x && /* @__PURE__ */ (0, Q.jsxs)("group", {
				name: "construction-marquee-preview",
				children: [
					/* @__PURE__ */ (0, Q.jsxs)("mesh", {
						position: [
							x.center[0],
							.76,
							x.center[1]
						],
						rotation: [
							-Math.PI / 2,
							0,
							0
						],
						renderOrder: 40,
						raycast: Ur,
						children: [/* @__PURE__ */ (0, Q.jsx)("planeGeometry", { args: [x.width, x.depth] }), /* @__PURE__ */ (0, Q.jsx)(Wr, {
							color: "#ff754d",
							transparent: !0,
							opacity: .11,
							depthTest: !1,
							depthWrite: !1,
							side: 2
						})]
					}),
					/* @__PURE__ */ (0, Q.jsx)(Kr, {
						from: [x.minX, x.minZ],
						to: [x.maxX, x.minZ],
						color: "#cf6648",
						width: .035,
						elevation: .78
					}),
					/* @__PURE__ */ (0, Q.jsx)(Kr, {
						from: [x.maxX, x.minZ],
						to: [x.maxX, x.maxZ],
						color: "#cf6648",
						width: .035,
						elevation: .78
					}),
					/* @__PURE__ */ (0, Q.jsx)(Kr, {
						from: [x.maxX, x.maxZ],
						to: [x.minX, x.maxZ],
						color: "#cf6648",
						width: .035,
						elevation: .78
					}),
					/* @__PURE__ */ (0, Q.jsx)(Kr, {
						from: [x.minX, x.maxZ],
						to: [x.minX, x.minZ],
						color: "#cf6648",
						width: .035,
						elevation: .78
					})
				]
			}),
			S && (C.pools ?? []).filter((e) => Et(w, "pool", e.id)).map((e) => /* @__PURE__ */ (0, Q.jsx)("group", {
				name: `construction-marquee-pool-${e.id}`,
				children: e.polygon.map((t, n) => /* @__PURE__ */ (0, Q.jsx)(Kr, {
					from: Nr(t, T),
					to: Nr(e.polygon[(n + 1) % e.polygon.length], T),
					color: "#ff754d",
					width: .065,
					elevation: .79
				}, n))
			}, e.id)),
			E && /* @__PURE__ */ (0, Q.jsx)(ei, { draft: D }),
			O.map(({ room: e, geometry: t }) => {
				let n = Et(w, "room", e.id);
				return /* @__PURE__ */ (0, Q.jsx)("mesh", {
					name: `construction-room-target-${e.id}`,
					geometry: t,
					renderOrder: n ? 12 : 1,
					userData: { roomId: e.id },
					onPointerDown: (t) => {
						u !== "select" || t.nativeEvent?.shiftKey || (Ti(t), k(e.id));
					},
					children: /* @__PURE__ */ (0, Q.jsx)(A, {
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
			/* @__PURE__ */ (0, Q.jsx)(ki, {
				draft: C,
				highlightedSelection: w,
				directlySelected: j,
				draggingEndpoint: M,
				draggingWall: N,
				previewPoint: P,
				coordinates: T,
				openingTool: F,
				placeOpeningFromEvent: I,
				tool: u,
				onSelectWall: L,
				setOpeningPreview: R,
				placementPreviewFromEvent: z,
				ToonMaterial: A,
				planMode: E,
				translationPointForEvent: B,
				setDraggingWall: V,
				capturedSelectDrag: H,
				clientPointForEvent: f,
				onDraggingChange: m,
				wallDeltaForEvent: U,
				finishWallDrag: W,
				cancelWallDrag: ee,
				setDraggingEndpoint: te,
				pointForEvent: ne,
				finishEndpointDrag: re,
				cancelEndpointDrag: ie
			}),
			/* @__PURE__ */ (0, Q.jsx)(Oi, {
				draft: C,
				draggingOpening: G,
				resizingOpening: ae,
				previewPoint: P,
				coordinates: T,
				highlightedSelection: w,
				directlySelected: j,
				planMode: E,
				tool: u,
				onSelectOpening: K,
				setDraggingOpening: oe,
				capturedSelectDrag: H,
				clientPointForEvent: f,
				onDraggingChange: m,
				openingPlacementFromEvent: se,
				finishOpeningDrag: ce,
				cancelOpeningDrag: le,
				ToonMaterial: A,
				setResizingOpening: ue,
				resizedOpeningForEvent: de,
				finishOpeningResize: fe,
				cancelOpeningResize: pe
			}),
			me && me.length > .001 && /* @__PURE__ */ (0, Q.jsxs)("mesh", {
				name: `construction-${u}-preview`,
				raycast: Ur,
				position: [
					me.center[0],
					.12,
					me.center[1]
				],
				rotation: [
					0,
					me.rotationYRadians,
					0
				],
				renderOrder: 22,
				children: [/* @__PURE__ */ (0, Q.jsx)("boxGeometry", { args: [
					me.length,
					.2,
					.12
				] }), /* @__PURE__ */ (0, Q.jsx)(A, {
					color: u === "wall" ? he : "#ff754d",
					transparent: !0,
					opacity: .72,
					depthTest: !1
				})]
			}),
			n && r && i && /* @__PURE__ */ (0, Q.jsx)(Si, {
				walls: l,
				primary: {
					from: r,
					to: i
				},
				junctions: [r, i],
				coordinates: T,
				planMode: E,
				defaultThicknessMeters: u === "wall" ? C.interiorWallThicknessMeters : .055,
				labelKind: u === "hedge" ? "Hedge" : u === "wall" ? "Wall" : u === "platform" ? "Platform edge" : u === "pool" ? "Pool edge" : "Floor edge"
			}),
			ge && M && u === "select" && /* @__PURE__ */ (0, Q.jsx)(Si, {
				walls: D.walls,
				primary: ge,
				junctions: [M.point],
				coordinates: T,
				planMode: E,
				defaultThicknessMeters: C.interiorWallThicknessMeters
			}),
			q && /* @__PURE__ */ (0, Q.jsxs)("group", {
				name: `construction-opening-placement-preview-${F}`,
				position: [
					q.x,
					q.sillHeightMeters + q.openingHeightMeters / 2,
					q.z
				],
				rotation: [
					0,
					q.rotationY,
					0
				],
				userData: {
					validPlacement: q.valid,
					wallId: q.wallId,
					offsetPlanUnits: q.offsetPlanUnits
				},
				children: [/* @__PURE__ */ (0, Q.jsxs)("mesh", {
					renderOrder: 28,
					children: [/* @__PURE__ */ (0, Q.jsx)("boxGeometry", { args: [
						q.widthMeters,
						q.openingHeightMeters,
						.15
					] }), /* @__PURE__ */ (0, Q.jsx)(A, {
						color: q.valid ? "#ff754d" : "#c45345",
						transparent: !0,
						opacity: .34,
						wireframe: !0,
						depthTest: !1,
						depthWrite: !1
					})]
				}), /* @__PURE__ */ (0, Q.jsxs)("mesh", {
					position: [
						0,
						-q.openingHeightMeters / 2 - q.sillHeightMeters + .055,
						0
					],
					renderOrder: 27,
					children: [/* @__PURE__ */ (0, Q.jsx)("boxGeometry", { args: [
						q.widthMeters,
						.025,
						.28
					] }), /* @__PURE__ */ (0, Q.jsx)(A, {
						color: q.valid ? "#ff754d" : "#c45345",
						transparent: !0,
						opacity: .72,
						depthTest: !1
					})]
				})]
			}),
			/* @__PURE__ */ (0, Q.jsxs)("mesh", {
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
						e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && (Ti(e), _e?.());
						return;
					}
					if (F) return I(e);
					if (u === "measure") {
						Ti(e);
						let t = ne(e);
						t && ve?.(t);
						return;
					}
					if (!n || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
					Ei(e);
					let t = ne(e);
					t && (m?.(!0), xe.current = kr(e.pointerId, f(e), t, !!r), r ? o?.(t) : a?.(t));
				},
				onPointerMove: (e) => {
					if (F) {
						R(z(e, F));
						return;
					}
					if (u === "measure" && ye === "drawing") {
						Ti(e);
						let t = ne(e);
						t && be?.(t);
						return;
					}
					if (!n || !r) return;
					Ti(e);
					let t = ne(e);
					t && o?.(t);
				},
				onPointerUp: (e) => {
					if (!n || !r) return;
					let t = xe.current;
					xe.current = null;
					let i = f(e), a = Ar(t, e.pointerId, i), c = a ? null : ne(e);
					Di(e), a ? o?.(t.point) : c && s?.(c), m?.(!1);
				},
				onPointerCancel: (e) => {
					if (F) {
						Ti(e), R(null);
						return;
					}
					n && (xe.current = null, Di(e), c?.(), m?.(!1));
				},
				children: [/* @__PURE__ */ (0, Q.jsx)("planeGeometry", { args: [b, b] }), /* @__PURE__ */ (0, Q.jsx)(A, {
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
var Hi = function(e, t) {
	this.updateWorldMatrix(!0, !1), ot.prototype.raycast.call(this, e, t);
};
function Ui({ at: e, name: t, handlers: n }) {
	let r = (0, Z.useRef)(null), { camera: i, size: a } = B(), o = () => {
		r.current && (r.current.scale.setScalar(1 / ni(i, a.height)), r.current.updateWorldMatrix(!0, !0));
	};
	return (0, Z.useLayoutEffect)(o), q(o), /* @__PURE__ */ (0, Q.jsxs)("group", {
		ref: r,
		position: e,
		children: [/* @__PURE__ */ (0, Q.jsxs)("mesh", {
			name: t,
			userData: { constructionEditHandle: !0 },
			raycast: Hi,
			...n,
			children: [/* @__PURE__ */ (0, Q.jsx)("sphereGeometry", { args: [
				22,
				12,
				8
			] }), /* @__PURE__ */ (0, Q.jsx)(Wr, {
				visible: !1,
				transparent: !0,
				opacity: 0,
				depthWrite: !1
			})]
		}), /* @__PURE__ */ (0, Q.jsxs)("mesh", {
			raycast: Ur,
			renderOrder: 32,
			children: [/* @__PURE__ */ (0, Q.jsx)("sphereGeometry", { args: [
				6,
				12,
				8
			] }), /* @__PURE__ */ (0, Q.jsx)(Wr, {
				color: "#fff7f1",
				depthTest: !1
			})]
		})]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionOutlineMeasurements.tsx
function Wi({ polygon: e, corner: t, coordinates: n, labelKind: r }) {
	let i = e.map((t, n) => ({
		id: `outline-edge-${n}`,
		from: t,
		to: e[(n + 1) % e.length]
	})), a = i[t ?? 0];
	return /* @__PURE__ */ (0, Q.jsx)(Si, {
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
var Gi = new v(new Y(0, 1, 0), 0);
function Ki({ draft: e, selection: t, selectionKind: n, tool: r, onSelect: i, onUpdate: a, onDraggingChange: o }) {
	let s = B((e) => e.get), c = (0, Z.useRef)(new Y()), [l, u] = (0, Z.useState)(null), [d, f] = (0, Z.useState)(null), p = (0, Z.useRef)(null), m = (e) => {
		p.current = e, f(e);
	}, h = () => {
		let e = p.current;
		e && e.target.hasPointerCapture?.(e.pointerId) !== !1 && e.target.releasePointerCapture?.(e.pointerId), m(null), u(null), e?.dragActive && o?.(!1);
	}, g = (0, Z.useEffectEvent)(h);
	(0, Z.useEffect)(() => {
		p.current && (r !== "select" || t?.kind !== n || t.id !== p.current.id) && g();
	}, [
		r,
		t,
		n
	]), (0, Z.useEffect)(() => () => {
		let e = p.current;
		e && e.target.hasPointerCapture?.(e.pointerId) !== !1 && e.target.releasePointerCapture?.(e.pointerId);
	}, []);
	let _ = (t, r, i) => {
		let a = t.ray.intersectPlane(Gi, c.current);
		if (!a) return null;
		if (!r) return Fr({
			point: a,
			coordinates: e.coordinates,
			absolute: t.nativeEvent.altKey
		});
		let { camera: o, size: l } = s(), d = i && n !== "hedge" ? i.original.map((e, t) => ({
			id: `outline-${t}`,
			from: e,
			to: i.original[(t + 1) % i.original.length]
		})) : [];
		return Ir(bt({
			point: a,
			coordinates: e.coordinates,
			walls: [
				...e.walls,
				...e.hedges ?? [],
				...d
			],
			onSnap: u,
			movingEndpoint: i?.corner == null ? void 0 : i.original[i.corner],
			pixelsPerMeter: ni(o, l.height),
			snapRadiusPixels: ri(t.nativeEvent.pointerType),
			angleOrigin: i?.corner == null ? void 0 : i.original[(i.corner + i.original.length - 1) % i.original.length],
			pointerType: t.nativeEvent.pointerType,
			absolute: t.nativeEvent.altKey
		}));
	}, v = (e, t) => {
		let n = _(e, t.corner !== null, t);
		return n ? t.original.map((e, r) => t.corner === null ? [Number((e[0] + n[0] - t.grab[0]).toFixed(4)), Number((e[1] + n[1] - t.grab[1]).toFixed(4))] : r === t.corner ? n : e) : t.polygon;
	};
	return {
		snap: l,
		drag: d,
		handlers: (e, t, n = null) => ({
			onPointerDown: (a) => {
				if (r !== "select" || a.button !== 0 || a.metaKey || a.ctrlKey || a.shiftKey) return;
				let o = _(a, !1);
				if (!o) return;
				a.stopPropagation();
				let s = a.target;
				s.setPointerCapture?.(a.pointerId), i(e), m({
					...Dr(a.pointerId, [a.nativeEvent.clientX, a.nativeEvent.clientY]),
					id: e,
					corner: n,
					original: t,
					polygon: t,
					grab: o,
					target: s
				});
			},
			onPointerMove: (e) => {
				let t = p.current;
				if (!t || t.pointerId !== e.pointerId) return;
				e.stopPropagation();
				let n = Or(t, e.pointerId, [e.nativeEvent.clientX, e.nativeEvent.clientY]);
				n && (n.started && o?.(!0), m({
					...n.drag,
					polygon: v(e, n.drag)
				}));
			},
			onPointerUp: (e) => {
				let t = p.current;
				!t || t.pointerId !== e.pointerId || (e.stopPropagation(), t.dragActive && a(t.id, v(e, t)), h());
			},
			onPointerCancel: (e) => {
				e.stopPropagation(), h();
			}
		})
	};
}
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionPoolLayer.tsx
function qi({ polygon: e, draft: t, name: n, color: r, handlers: i }) {
	let a = (0, Z.useMemo)(() => {
		if (!fe(e)) return null;
		let n = new on();
		return e.forEach((e, r) => {
			let [i, a] = J(e, t.coordinates);
			r === 0 ? n.moveTo(i, -a) : n.lineTo(i, -a);
		}), n.closePath(), new c(n);
	}, [e, t.coordinates]);
	return (0, Z.useEffect)(() => () => a?.dispose(), [a]), a ? /* @__PURE__ */ (0, Q.jsx)("mesh", {
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
		...i ? {} : { raycast: Ur },
		children: /* @__PURE__ */ (0, Q.jsx)(Gr, { color: r })
	}) : null;
}
function Ji({ draft: e, selection: t, tool: n, points: r = [], preview: i = null, deletionTargets: a, onSelect: o, onUpdate: s, onDraggingChange: c }) {
	let { snap: l, drag: u, handlers: d } = Ki({
		draft: e,
		selection: t,
		selectionKind: "pool",
		tool: n,
		onSelect: o,
		onUpdate: s,
		...c === void 0 ? {} : { onDraggingChange: c }
	}), f = i && r.length && Math.hypot(i[0] - r.at(-1)[0], i[1] - r.at(-1)[1]) > 1e-7 ? [...r, i] : r;
	return /* @__PURE__ */ (0, Q.jsxs)("group", {
		name: "construction-pools",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(qr, {
				snap: l,
				coordinates: e.coordinates
			}),
			(e.pools ?? []).map((r) => {
				let i = u?.id === r.id ? u.polygon : r.polygon, o = a ? a.some((e) => e.kind === "pool" && e.id === r.id) : Et(t, "pool", r.id), s = t?.kind === "pool" && t.id === r.id, c = fe(i);
				return /* @__PURE__ */ (0, Q.jsxs)("group", {
					name: `plan-pool-${r.id}`,
					children: [
						/* @__PURE__ */ (0, Q.jsx)(qi, {
							name: `construction-pool-${r.id}`,
							polygon: i,
							draft: e,
							color: o ? "#9bcace" : "#bddadb",
							handlers: n === "select" ? d(r.id, i) : void 0
						}),
						i.map((t, a) => {
							let s = i[(a + 1) % i.length], l = Lr(t, s, e.coordinates);
							return /* @__PURE__ */ (0, Q.jsxs)("group", { children: [/* @__PURE__ */ (0, Q.jsx)(Kr, {
								from: J(t, e.coordinates),
								to: J(s, e.coordinates),
								color: c ? o ? "#ff754d" : "#689ba1" : "#c53f32",
								width: o ? .065 : .035,
								elevation: .06
							}), n === "select" && /* @__PURE__ */ (0, Q.jsxs)("mesh", {
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
								...d(r.id, i),
								children: [/* @__PURE__ */ (0, Q.jsx)("boxGeometry", { args: [
									l.length,
									.02,
									.18
								] }), /* @__PURE__ */ (0, Q.jsx)(Wr, {
									visible: !1,
									transparent: !0,
									opacity: 0,
									depthWrite: !1,
									side: 2
								})]
							})] }, a);
						}),
						s && n === "select" && i.map((t, n) => {
							let [i, a] = J(t, e.coordinates);
							return /* @__PURE__ */ (0, Q.jsx)(Ui, {
								name: `construction-pool-corner-${r.id}-${n}`,
								at: [
									i,
									.12,
									a
								],
								handlers: d(r.id, r.polygon, n)
							}, n);
						})
					]
				}, r.id);
			}),
			u?.dragActive && /* @__PURE__ */ (0, Q.jsx)(Wi, {
				polygon: u.polygon,
				corner: u.corner,
				coordinates: e.coordinates,
				labelKind: "Pool edge"
			}),
			n === "pool" && /* @__PURE__ */ (0, Q.jsxs)("group", {
				name: "construction-pool-draft",
				children: [
					/* @__PURE__ */ (0, Q.jsx)(qi, {
						polygon: f,
						draft: e,
						name: "construction-pool-draft-fill",
						color: "#d5e4df"
					}),
					r.slice(1).map((t, n) => /* @__PURE__ */ (0, Q.jsx)(Kr, {
						from: J(r[n], e.coordinates),
						to: J(t, e.coordinates),
						color: "#689ba1",
						width: .055,
						elevation: .08
					}, n)),
					r.map((t, n) => {
						let [r, i] = J(t, e.coordinates);
						return /* @__PURE__ */ (0, Q.jsx)(ai, {
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
function Yi({ at: e, name: t, handlers: n }) {
	let r = (0, Z.useRef)(null);
	return q(({ camera: e, size: t }) => {
		r.current?.scale.setScalar(1 / ni(e, t.height));
	}), /* @__PURE__ */ (0, Q.jsxs)("group", {
		ref: r,
		position: e,
		children: [/* @__PURE__ */ (0, Q.jsxs)("mesh", {
			name: t,
			...n,
			children: [/* @__PURE__ */ (0, Q.jsx)("sphereGeometry", { args: [
				22,
				12,
				8
			] }), /* @__PURE__ */ (0, Q.jsx)(Wr, {
				visible: !1,
				transparent: !0,
				opacity: 0,
				depthWrite: !1
			})]
		}), /* @__PURE__ */ (0, Q.jsxs)("mesh", {
			raycast: Ur,
			renderOrder: 42,
			children: [/* @__PURE__ */ (0, Q.jsx)("sphereGeometry", { args: [
				6,
				12,
				8
			] }), /* @__PURE__ */ (0, Q.jsx)(Wr, {
				color: "#fff7f1",
				depthTest: !1
			})]
		})]
	});
}
function Xi({ floor: e, polygon: t, name: n, elevation: r, selected: i, handlers: a }) {
	let o = (0, Z.useMemo)(() => We(t) ? zt(t, e.coordinates, 1) : null, [e.coordinates, t]);
	return (0, Z.useEffect)(() => () => o?.dispose(), [o]), o ? /* @__PURE__ */ (0, Q.jsx)("mesh", {
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
		...a ? {} : { raycast: Ur },
		children: /* @__PURE__ */ (0, Q.jsx)(Wr, {
			color: "#ff754d",
			transparent: !0,
			...bt({ visible: i }),
			opacity: i ? .12 : 0,
			depthTest: !1,
			depthWrite: !1,
			side: 2
		})
	}) : null;
}
function Zi({ draft: e, floor: t, selection: n, deletionTargets: r, tool: i, paintTarget: a, drawingPoints: o, drawingPreview: s, drawingRoomId: c, onPaintRoom: l, onSelectZone: u, onUpdateZone: d, onDraggingChange: f }) {
	let { snap: p, drag: m, handlers: h } = Ki({
		draft: e,
		selection: n,
		selectionKind: "floor-zone",
		tool: i,
		onSelect: u,
		onUpdate: d,
		...f === void 0 ? {} : { onDraggingChange: f }
	}), g = t.rooms.find((e) => e.id === c), _ = !s || !g ? !s || Le(s, t) : Me(s, g.polygon), v = s && o.length ? [...o, s] : o, y = [...t.groundZones ?? [], ...t.rooms.flatMap((e) => e.floorZones ?? [])];
	return /* @__PURE__ */ (0, Q.jsxs)("group", {
		name: "construction-floors",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(qr, {
				snap: p,
				coordinates: e.coordinates
			}),
			m?.dragActive && /* @__PURE__ */ (0, Q.jsx)(Wi, {
				polygon: m.polygon,
				corner: m.corner,
				coordinates: e.coordinates,
				labelKind: "Floor edge"
			}),
			i === "floor" && a === "room" && t.rooms.map((e) => /* @__PURE__ */ (0, Q.jsx)(Xi, {
				floor: t,
				polygon: e.polygon,
				name: `construction-floor-room-${e.id}`,
				elevation: .09,
				handlers: { onPointerDown: (t) => {
					t.button !== 0 || t.metaKey || t.ctrlKey || t.shiftKey || (t.stopPropagation(), l(e.id));
				} }
			}, e.id)),
			[...y].reverse().map((a, o) => {
				let s = m?.id === a.id ? m.polygon : a.polygon, c = r ? r.some((e) => e.kind === "floor-zone" && e.id === a.id) : Et(n, "floor-zone", a.id), l = n?.kind === "floor-zone" && n.id === a.id, u = We(s);
				return /* @__PURE__ */ (0, Q.jsxs)("group", {
					name: `plan-floor-zone-${a.id}`,
					children: [
						/* @__PURE__ */ (0, Q.jsx)(Xi, {
							floor: t,
							polygon: s,
							name: `floor-zone-hit-${a.id}`,
							elevation: .12 + (y.length - o) * 1e-4,
							selected: c,
							handlers: i === "select" ? h(a.id, s) : void 0
						}),
						/* @__PURE__ */ (0, Q.jsx)(Yr, {
							name: "floor-zone-outline",
							strokes: s.map((t, n) => ({
								from: J(t, e.coordinates),
								to: J(s[(n + 1) % s.length], e.coordinates),
								color: u ? c ? "#ff754d" : "#8d8b80" : "#c53f32",
								width: c ? .055 : .018,
								elevation: .14
							}))
						}),
						l && i === "select" && s.map((t, n) => {
							let [r, i] = J(t, e.coordinates);
							return /* @__PURE__ */ (0, Q.jsx)(Yi, {
								name: `floor-zone-corner-${a.id}-${n}`,
								at: [
									r,
									.18,
									i
								],
								handlers: h(a.id, a.polygon, n)
							}, n);
						})
					]
				}, a.id);
			}),
			i === "floor" && a === "custom-area" && /* @__PURE__ */ (0, Q.jsxs)("group", {
				name: "construction-floor-draft",
				children: [v.slice(1).map((t, n) => /* @__PURE__ */ (0, Q.jsx)(Kr, {
					from: J(v[n], e.coordinates),
					to: J(t, e.coordinates),
					color: _ ? "#ff754d" : "#c53f32",
					width: .055,
					elevation: .18
				}, n)), o.map((t, n) => {
					let [r, i] = J(t, e.coordinates);
					return /* @__PURE__ */ (0, Q.jsx)(ai, {
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
var Qi = {
	roomId: null,
	points: [],
	future: [],
	preview: null,
	error: null
}, $i = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[1]) <= 1e-7, ea = (e, t, n) => {
	if (t.type === "cancel") return { state: Qi };
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
		let t = i.find((e) => Me(r, e.polygon));
		return t ? { state: {
			roomId: t.id,
			points: [r],
			future: [],
			preview: r,
			error: null
		} } : Le(r, n) ? { state: {
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
	if ($i(r, e.points.at(-1))) return { state: e };
	let a = i.find((t) => t.id === e.roomId);
	if (e.points.length >= 3 && $i(r, e.points[0])) {
		let t = e.points;
		return We(t) ? a && !pt(t, a.polygon) ? { state: {
			...e,
			error: `Keep the complete area inside ${a.name}.`
		} } : !a && !qt(t, n) ? { state: {
			...e,
			error: "Keep the complete outdoor area outside the building."
		} } : {
			state: Qi,
			completed: {
				roomId: a?.id ?? null,
				polygon: t
			}
		} : { state: {
			...e,
			error: "The area crosses itself or has no area."
		} };
	}
	return a && !Me(r, a.polygon) ? { state: {
		...e,
		error: `Keep every corner inside ${a.name}.`
	} } : !a && !Le(r, n) ? { state: {
		...e,
		error: "Keep every outdoor corner outside the building."
	} } : e.points.some((e) => $i(e, r)) ? { state: {
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
function ta(e, t) {
	let [n, r] = (0, Z.useState)(Qi), i = (0, Z.useRef)(n), a = (0, Z.useRef)(t);
	a.current = t;
	let o = (0, Z.useCallback)((t) => {
		let n = ea(i.current, t, e);
		i.current = n.state, r(n.state), n.completed && a.current(n.completed.roomId, n.completed.polygon);
	}, [e]);
	return {
		...n,
		active: n.points.length > 0 || n.future.length > 0,
		place: (0, Z.useCallback)((e) => o({
			type: "point",
			point: e
		}), [o]),
		previewPoint: (0, Z.useCallback)((e) => o({
			type: "preview",
			point: e
		}), [o]),
		undo: (0, Z.useCallback)(() => o({ type: "undo" }), [o]),
		redo: (0, Z.useCallback)(() => o({ type: "redo" }), [o]),
		cancel: (0, Z.useCallback)(() => o({ type: "cancel" }), [o])
	};
}
//#endregion
//#region apps/web/src/editor-preview/construct/FloorFinishPalette.tsx
var na = (e) => e.kind === "solid" ? "solid" : e.preset;
function ra({ preset: e }) {
	let t = (0, Z.useRef)(null);
	return (0, Z.useEffect)(() => {
		let n;
		try {
			n = t.current?.getContext("2d");
		} catch {
			n = null;
		}
		n && Te(n, e.id, "plan");
	}, [e]), /* @__PURE__ */ (0, Q.jsx)("canvas", {
		ref: t,
		width: 64,
		height: 64,
		"aria-hidden": "true"
	});
}
function ia({ value: e, onChange: t }) {
	let n = na(e), r = e.kind === "solid" ? e.color : "#d3cec5";
	return /* @__PURE__ */ (0, Q.jsxs)("section", {
		className: "floor-finish-palette",
		"aria-label": "Floor finish",
		children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "floor-finish-palette__grid",
			children: [/* @__PURE__ */ (0, Q.jsxs)("button", {
				type: "button",
				"aria-label": "Solid color",
				"aria-pressed": n === "solid",
				onClick: () => t({
					kind: "solid",
					color: r
				}),
				children: [/* @__PURE__ */ (0, Q.jsx)("span", {
					style: { background: r },
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, Q.jsx)("small", { children: "Solid" })]
			}), Ft.map((e) => /* @__PURE__ */ (0, Q.jsxs)("button", {
				type: "button",
				"aria-label": e.label,
				"aria-pressed": n === e.id,
				onClick: () => t({
					kind: "preset",
					preset: e.id
				}),
				children: [/* @__PURE__ */ (0, Q.jsx)(ra, { preset: e }), /* @__PURE__ */ (0, Q.jsx)("small", { children: e.label })]
			}, e.id))]
		}), n === "solid" && /* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Solid color", /* @__PURE__ */ (0, Q.jsx)("input", {
			type: "color",
			"aria-label": "Solid floor color",
			value: r,
			onChange: (e) => t({
				kind: "solid",
				color: e.target.value
			})
		})] })]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/FloorPaintConfirmation.tsx
function aa({ roomName: e, onKeepZones: t, onReplaceEverything: n, onCancel: r }) {
	let i = Ht(), a = (0, Z.useRef)(null), o = (0, Z.useRef)(null), s = (0, Z.useRef)(null);
	return (0, Z.useEffect)(() => {
		let e = a.current;
		if (e) return s.current = i.root.activeElement, typeof e.showModal == "function" ? e.showModal() : e.setAttribute("open", ""), o.current?.focus(), () => {
			e.open && typeof e.close == "function" ? e.close() : e.removeAttribute("open"), s.current?.focus();
		};
	}, [i]), /* @__PURE__ */ (0, Q.jsx)("dialog", {
		ref: a,
		className: "floor-paint-confirmation",
		"aria-labelledby": "floor-paint-confirmation-title",
		onCancel: (e) => {
			e.preventDefault(), r();
		},
		children: /* @__PURE__ */ (0, Q.jsxs)("div", { children: [
			/* @__PURE__ */ (0, Q.jsxs)("h2", {
				id: "floor-paint-confirmation-title",
				children: [
					"Paint all of ",
					e,
					"?"
				]
			}),
			/* @__PURE__ */ (0, Q.jsx)("p", { children: "This room already contains custom floor areas." }),
			/* @__PURE__ */ (0, Q.jsx)("button", {
				ref: o,
				type: "button",
				onClick: t,
				children: "Keep custom areas"
			}),
			/* @__PURE__ */ (0, Q.jsx)("button", {
				type: "button",
				onClick: n,
				children: "Replace everything"
			}),
			/* @__PURE__ */ (0, Q.jsx)("button", {
				type: "button",
				onClick: r,
				children: "Cancel"
			})
		] })
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/PlatformEdgePalette.tsx
var oa = ft.map((e) => ({
	preset: e,
	entry: {
		kind: "procedural",
		key: `platform-edge-v1:${e.id}`,
		definition: {
			bounds: {
				min: [
					-1,
					-.16,
					-.3
				],
				max: [
					1,
					1,
					.3
				]
			},
			component: () => /* @__PURE__ */ (0, Q.jsxs)("group", { children: [/* @__PURE__ */ (0, Q.jsxs)("mesh", {
				position: [
					0,
					-.08,
					0
				],
				children: [/* @__PURE__ */ (0, Q.jsx)("boxGeometry", { args: [
					2,
					.16,
					.6
				] }), /* @__PURE__ */ (0, Q.jsx)(Zt, { color: "#d4c6ae" })]
			}), /* @__PURE__ */ (0, Q.jsx)(U, {
				from: [-1, 0],
				to: [1, 0],
				configuration: e.configuration
			})] })
		}
	}
}));
function sa({ value: e, onChange: t }) {
	let n = (0, Z.useRef)(null);
	return /* @__PURE__ */ (0, Q.jsx)("section", {
		className: "door-preset-palette",
		"aria-label": "Platform edge style",
		children: /* @__PURE__ */ (0, Q.jsx)(vn, {
			scrollRoot: n,
			enabled: !0,
			children: /* @__PURE__ */ (0, Q.jsx)("div", {
				className: "floor-finish-palette__grid door-preset-palette__grid",
				ref: n,
				role: "group",
				"aria-label": "Platform edge presets",
				children: oa.map(({ preset: n, entry: r }) => /* @__PURE__ */ (0, Q.jsxs)("button", {
					type: "button",
					"aria-label": n.name,
					"aria-pressed": e.kind === n.id,
					onClick: () => t({ ...n.configuration }),
					children: [/* @__PURE__ */ (0, Q.jsx)(Tn, {
						entry: r,
						showAdd: !1,
						fallback: /* @__PURE__ */ (0, Q.jsx)("span", { children: "Preview unavailable" })
					}), /* @__PURE__ */ (0, Q.jsx)("small", { children: n.name })]
				}, n.id))
			})
		})
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/PlatformEdgeFields.tsx
function ca({ value: e, onChange: t }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "platform-edge-fields",
		children: [/* @__PURE__ */ (0, Q.jsx)(sa, {
			value: e,
			onChange: t
		}), e.kind !== "open" && /* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Barrier height (m)", /* @__PURE__ */ (0, Q.jsx)(Sr, {
			label: "Platform barrier height",
			value: e.heightMeters,
			step: .1,
			min: .01,
			onCommit: (n) => {
				n > 0 && t({
					...e,
					heightMeters: n
				});
			}
		})] })]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/PlatformProperties.tsx
function la({ platform: e, editor: t }) {
	let n = e.edges.find((e) => e.id === t.selectedPlatformEdgeId), r = Math.abs(Ae(e.polygon)) * t.draft.coordinates.metersPerPlanUnit ** 2, i = (n) => {
		if (n.length < 3) return;
		let [r, i, a, ...o] = n;
		t.updatePlatform(e.id, { polygon: [
			r,
			i,
			a,
			...o
		] });
	};
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "construction-inspector__selection",
		children: [
			/* @__PURE__ */ (0, Q.jsx)("header", { children: /* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("small", { children: "Selected outdoor platform" }), /* @__PURE__ */ (0, Q.jsxs)("strong", { children: [
				"Outdoor platform · ",
				r.toFixed(1),
				" m²"
			] })] }) }),
			/* @__PURE__ */ (0, Q.jsx)("p", {
				className: "construction-inspector__tool-hint",
				children: "Drag the platform to move it, or a corner to reshape it. Select an edge to change its style."
			}),
			/* @__PURE__ */ (0, Q.jsxs)("fieldset", { children: [
				/* @__PURE__ */ (0, Q.jsx)("legend", { children: "Edges" }),
				/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Apply to", /* @__PURE__ */ (0, Q.jsxs)("select", {
					"aria-label": "Platform edge",
					value: n?.id ?? "",
					onChange: (n) => n.target.value ? t.selectPlatformEdge(e.id, n.target.value) : t.selectPlatform(e.id),
					children: [/* @__PURE__ */ (0, Q.jsx)("option", {
						value: "",
						children: "Default style"
					}), e.edges.map((e, t) => /* @__PURE__ */ (0, Q.jsxs)("option", {
						value: e.id,
						children: ["Edge ", t + 1]
					}, e.id))]
				})] }),
				/* @__PURE__ */ (0, Q.jsx)(ca, {
					value: n?.configuration ?? e.defaultEdge,
					onChange: (r) => {
						n ? t.updatePlatform(e.id, { edges: e.edges.map((e) => e.id === n.id ? {
							...e,
							configuration: r
						} : e) }) : t.updatePlatform(e.id, { defaultEdge: r });
					}
				})
			] }),
			n?.configuration && /* @__PURE__ */ (0, Q.jsx)($, {
				variant: "secondary",
				type: "button",
				onClick: () => t.updatePlatform(e.id, { edges: e.edges.map((e) => e.id === n?.id ? { id: e.id } : e) }),
				children: "Use default edge style"
			}),
			n && /* @__PURE__ */ (0, Q.jsx)($, {
				variant: "secondary",
				type: "button",
				onClick: () => {
					if (!n) return;
					let t = e.edges.indexOf(n), r = e.polygon[t], a = e.polygon[(t + 1) % e.polygon.length];
					i([
						...e.polygon.slice(0, t + 1),
						[(r[0] + a[0]) / 2, (r[1] + a[1]) / 2],
						...e.polygon.slice(t + 1)
					]);
				},
				children: "Add corner on edge"
			}),
			/* @__PURE__ */ (0, Q.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, Q.jsx)("legend", { children: "Floor finish" }), /* @__PURE__ */ (0, Q.jsx)(ia, {
				value: e.finish,
				onChange: (n) => t.updatePlatform(e.id, { finish: n })
			})] }),
			/* @__PURE__ */ (0, Q.jsxs)("fieldset", {
				className: "platform-corners",
				children: [/* @__PURE__ */ (0, Q.jsx)("legend", { children: "Corners · plan units" }), e.polygon.map((n, r) => /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "platform-corner-row",
					children: [
						/* @__PURE__ */ (0, Q.jsx)("span", {
							className: "platform-corner-number",
							"aria-label": `Corner ${r + 1}`,
							children: r + 1
						}),
						[0, 1].map((i) => /* @__PURE__ */ (0, Q.jsxs)("label", { children: [i === 0 ? "X" : "Y", /* @__PURE__ */ (0, Q.jsx)(Sr, {
							label: `Platform corner ${r + 1} ${i === 0 ? "X" : "Y"}`,
							value: n[i],
							step: .1,
							onCommit: (n) => t.updatePlatform(e.id, { polygon: _e(e.polygon, (e, t) => t === r ? i === 0 ? [n, e[1]] : [e[0], n] : e) })
						})] }, i)),
						e.polygon.length > 3 && /* @__PURE__ */ (0, Q.jsx)($, {
							variant: "text",
							type: "button",
							className: "platform-corner-remove",
							"aria-label": `Remove corner ${r + 1}`,
							title: `Remove corner ${r + 1}`,
							onClick: () => i(e.polygon.filter((e, t) => t !== r)),
							children: /* @__PURE__ */ (0, Q.jsx)(X, { name: "delete" })
						})
					]
				}, r))]
			}),
			/* @__PURE__ */ (0, Q.jsx)($, {
				variant: "text",
				type: "button",
				onClick: t.deleteSelected,
				children: "Delete platform"
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/FloorToolProperties.tsx
var ua = [
	{
		id: "room",
		label: "Whole room",
		description: "Change an existing room’s finish."
	},
	{
		id: "custom-area",
		label: "Custom area",
		description: "Draw a finish area or a ground path."
	},
	{
		id: "outdoor-platform",
		label: "Outdoor platform",
		description: "Add a balcony or terrace on this floor."
	}
], da = {
	room: "Choose a finish, then click a room.",
	"custom-area": "Click corners, then return to the first point to close the area. Start inside a room for an inset, or outside for a ground patch.",
	"outdoor-platform": "Click corners, then return to the first point to close the platform. House walls and doorways stay clear."
};
function fa({ editor: e, painting: t }) {
	let n = e.tool === "platform", r = n ? "outdoor-platform" : t.target, i = e.platformSettings, a = n ? e.poolDrawing.error : t.drawingError, o = (n) => {
		n === "outdoor-platform" && e.setPlatformSettings({
			...i,
			finish: t.finish
		}), t.onTargetChange(n);
	};
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "construction-inspector__selection floor-tool-properties",
		children: [
			/* @__PURE__ */ (0, Q.jsx)("header", { children: /* @__PURE__ */ (0, Q.jsx)("h3", { children: "Floor tool" }) }),
			/* @__PURE__ */ (0, Q.jsx)("div", {
				className: "floor-tool-targets",
				role: "group",
				"aria-label": "Paint target",
				children: ua.map((e) => /* @__PURE__ */ (0, Q.jsxs)("button", {
					type: "button",
					"aria-label": e.label,
					"aria-pressed": r === e.id,
					onClick: () => o(e.id),
					children: [/* @__PURE__ */ (0, Q.jsx)("strong", { children: e.label }), /* @__PURE__ */ (0, Q.jsx)("span", { children: e.description })]
				}, e.id))
			}),
			/* @__PURE__ */ (0, Q.jsx)("p", {
				className: "construction-inspector__tool-hint",
				children: da[r]
			}),
			/* @__PURE__ */ (0, Q.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, Q.jsx)("legend", { children: "Floor finish" }), /* @__PURE__ */ (0, Q.jsx)(ia, {
				value: n ? i.finish : t.finish,
				onChange: (r) => n ? e.setPlatformSettings({
					...i,
					finish: r
				}) : t.onFinishChange(r)
			})] }),
			n && /* @__PURE__ */ (0, Q.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, Q.jsx)("legend", { children: "Exposed edges" }), /* @__PURE__ */ (0, Q.jsx)(ca, {
				value: i.defaultEdge,
				onChange: (t) => e.setPlatformSettings({
					...i,
					defaultEdge: t
				})
			})] }),
			a && /* @__PURE__ */ (0, Q.jsx)("p", {
				role: "alert",
				children: a
			}),
			n ? /* @__PURE__ */ (0, Q.jsx)($, {
				variant: "secondary",
				type: "button",
				onClick: () => e.setTool("select"),
				children: "Cancel platform"
			}) : t.drawingActive && /* @__PURE__ */ (0, Q.jsx)($, {
				variant: "secondary",
				type: "button",
				onClick: t.onCancelDrawing,
				children: "Cancel area"
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/HedgeStyleGrid.tsx
var pa = n.map((e) => ({
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
			component: () => /* @__PURE__ */ (0, Q.jsx)($t, {
				style: e.id,
				length: 3,
				height: e.heightMeters,
				width: e.widthMeters
			})
		}
	}
}));
function ma({ value: e, onChoose: t }) {
	let n = (0, Z.useRef)(null);
	return /* @__PURE__ */ (0, Q.jsx)(vn, {
		scrollRoot: n,
		enabled: !0,
		children: /* @__PURE__ */ (0, Q.jsx)("div", {
			className: "catalog-grid hedge-style-grid",
			ref: n,
			role: "group",
			"aria-label": "Hedge styles",
			children: pa.map(({ style: n, entry: r }) => /* @__PURE__ */ (0, Q.jsxs)("button", {
				type: "button",
				className: "catalog-card",
				"aria-label": n.label,
				"aria-pressed": e === n.id,
				onClick: () => t(n),
				children: [
					/* @__PURE__ */ (0, Q.jsx)(Tn, {
						entry: r,
						showAdd: !1
					}),
					/* @__PURE__ */ (0, Q.jsx)("strong", { children: n.label }),
					/* @__PURE__ */ (0, Q.jsx)("small", { children: n.description })
				]
			}, n.id))
		})
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/HedgeProperties.tsx
function ha({ editor: e }) {
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
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "construction-inspector__selection",
		children: [
			/* @__PURE__ */ (0, Q.jsx)("header", { children: /* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("small", { children: t ? "Selected hedge" : "Hedge tool" }), /* @__PURE__ */ (0, Q.jsx)("strong", { children: "Hedgerow" })] }) }),
			/* @__PURE__ */ (0, Q.jsx)("p", {
				className: "construction-inspector__tool-hint",
				children: "Drag to draw a hedge. Continue from its endpoint for a connected row. Escape finishes drawing."
			}),
			/* @__PURE__ */ (0, Q.jsx)(ma, {
				value: n.style,
				onChoose: (e) => r(t ? { style: e.id } : {
					style: e.id,
					heightMeters: e.heightMeters,
					widthMeters: e.widthMeters
				})
			}),
			/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Height (m)", /* @__PURE__ */ (0, Q.jsx)(Sr, {
				label: "Hedge height",
				value: n.heightMeters,
				min: .2,
				step: .1,
				onCommit: (e) => r({ heightMeters: Math.min(5, Math.max(.2, e)) })
			})] }),
			/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Width (m)", /* @__PURE__ */ (0, Q.jsx)(Sr, {
				label: "Hedge width",
				value: n.widthMeters,
				min: .2,
				step: .1,
				onCommit: (e) => r({ widthMeters: Math.min(3, Math.max(.2, e)) })
			})] }),
			t && /* @__PURE__ */ (0, Q.jsx)($, {
				variant: "text",
				type: "button",
				onClick: e.deleteSelected,
				children: "Delete hedge"
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-chrome/SidebarSectionSummary.tsx
function ga({ icon: e, title: t, description: n }) {
	return /* @__PURE__ */ (0, Q.jsxs)("summary", {
		className: "sidebar-section-summary",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(X, { name: e }),
			/* @__PURE__ */ (0, Q.jsxs)("span", {
				className: "sidebar-section-summary__copy",
				children: [/* @__PURE__ */ (0, Q.jsx)("span", { children: t }), /* @__PURE__ */ (0, Q.jsx)("small", { children: n })]
			}),
			/* @__PURE__ */ (0, Q.jsx)("span", {
				className: "sidebar-section-summary__chevron",
				children: /* @__PURE__ */ (0, Q.jsx)(X, { name: "chevron" })
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/DebouncedColorInput.tsx
function _a({ label: e, value: t, disabled: n = !1, onCommit: r }) {
	let [i, a] = (0, Z.useState)(t), o = (0, Z.useRef)(null), s = (0, Z.useRef)(t), c = (0, Z.useRef)(r);
	return (0, Z.useEffect)(() => {
		a(t), s.current = t;
	}, [t]), (0, Z.useEffect)(() => {
		c.current = r;
	}, [r]), (0, Z.useEffect)(() => () => {
		o.current && clearTimeout(o.current);
	}, []), /* @__PURE__ */ (0, Q.jsx)("input", {
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
function va({ value: e = Ot, onChange: t }) {
	return /* @__PURE__ */ (0, Q.jsxs)("section", {
		className: "construction-inspector__floor-settings sidebar-section-content",
		"aria-label": "Roof settings",
		children: [/* @__PURE__ */ (0, Q.jsxs)("fieldset", {
			"aria-label": "Roof appearance",
			children: [
				/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Ridge direction", /* @__PURE__ */ (0, Q.jsxs)("select", {
					"aria-label": "Roof ridge direction",
					value: e.direction,
					onChange: (n) => t({
						...e,
						direction: n.target.value
					}),
					children: [
						/* @__PURE__ */ (0, Q.jsx)("option", {
							value: "left-right",
							children: "Left–right ↔"
						}),
						/* @__PURE__ */ (0, Q.jsx)("option", {
							value: "front-back",
							children: "Front–back ↕"
						}),
						/* @__PURE__ */ (0, Q.jsx)("option", {
							value: "flat",
							children: "Flat"
						})
					]
				})] }),
				/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Roof color", /* @__PURE__ */ (0, Q.jsx)(_a, {
					label: "Roof color",
					value: e.color,
					onCommit: (n) => t({
						...e,
						color: n
					})
				})] }),
				/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Trim color", /* @__PURE__ */ (0, Q.jsx)(_a, {
					label: "Roof trim color",
					value: e.edgeColor,
					onCommit: (n) => t({
						...e,
						edgeColor: n
					})
				})] })
			]
		}), /* @__PURE__ */ (0, Q.jsx)("p", {
			className: "sidebar-section-note",
			children: "To view it, save and turn on Show roof in Home."
		})]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/FloorSettingsEditor.tsx
function ya({ editor: e }) {
	let [t, n] = (0, Z.useState)(e.draft.coordinates.origin[0]), [r, i] = (0, Z.useState)(e.draft.coordinates.origin[1]), [a, o] = (0, Z.useState)(e.draft.coordinates.metersPerPlanUnit), [s, c] = (0, Z.useState)(e.draft.coordinates.scaleBasis), [l, u] = (0, Z.useState)(e.draft.defaultWallHeightMeters), [d, f] = (0, Z.useState)(e.draft.defaultCeilingHeightMeters), [p, m] = (0, Z.useState)(!1);
	(0, Z.useEffect)(() => {
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
	return /* @__PURE__ */ (0, Q.jsxs)("section", {
		className: "construction-inspector__floor-settings sidebar-section-content",
		"aria-label": "Floor settings",
		children: [
			/* @__PURE__ */ (0, Q.jsxs)("fieldset", { children: [
				/* @__PURE__ */ (0, Q.jsx)("legend", { children: "Plan coordinates" }),
				/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Scale (m/unit)", /* @__PURE__ */ (0, Q.jsx)(Sr, {
					label: "Meters per plan unit",
					min: .001,
					step: .01,
					value: a,
					onCommit: v(o)
				})] }),
				/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Basis", /* @__PURE__ */ (0, Q.jsxs)("select", {
					"aria-label": "Floor scale basis",
					value: s,
					onChange: (e) => {
						c(e.target.value), m(!1);
					},
					children: [/* @__PURE__ */ (0, Q.jsx)("option", {
						value: "measured",
						children: "Measured"
					}), /* @__PURE__ */ (0, Q.jsx)("option", {
						value: "inferred",
						children: "Estimated"
					})]
				})] }),
				/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Origin X", /* @__PURE__ */ (0, Q.jsx)(Sr, {
					label: "Floor origin X",
					step: .1,
					value: t,
					onCommit: v(n)
				})] }),
				/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Origin Y", /* @__PURE__ */ (0, Q.jsx)(Sr, {
					label: "Floor origin Y",
					step: .1,
					value: r,
					onCommit: v(i)
				})] })
			] }),
			/* @__PURE__ */ (0, Q.jsxs)("fieldset", { children: [
				/* @__PURE__ */ (0, Q.jsx)("legend", { children: "Default heights" }),
				/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Wall (m)", /* @__PURE__ */ (0, Q.jsx)(Sr, {
					label: "Default wall height",
					min: .3,
					step: .05,
					value: l,
					onCommit: v(u)
				})] }),
				/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Ceiling (m)", /* @__PURE__ */ (0, Q.jsx)(Sr, {
					label: "Default ceiling height",
					min: .3,
					step: .05,
					value: d,
					onCommit: v(f)
				})] })
			] }),
			/* @__PURE__ */ (0, Q.jsx)("p", {
				className: "sidebar-section-note",
				children: "Changing scale resizes the whole house."
			}),
			p && /* @__PURE__ */ (0, Q.jsx)("p", {
				className: "construction-inspector__scale-warning",
				role: "alert",
				children: "This will rescale the architecture and reposition plan-authored items. Click again to confirm."
			}),
			/* @__PURE__ */ (0, Q.jsx)($, {
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
				children: p ? "Confirm whole-floor rescale" : "Apply changes"
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionBuildingSettings.tsx
function ba({ inert: e, planImportControls: t, onRoofChange: n, roof: r, northControls: i, walkStartControls: a, tutorialControls: o, editor: s }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "construction-inspector__context",
		inert: e,
		children: [
			t,
			n && /* @__PURE__ */ (0, Q.jsxs)("details", {
				className: "construction-inspector__floor-disclosure",
				children: [/* @__PURE__ */ (0, Q.jsx)(ga, {
					icon: "roof",
					title: "Roof",
					description: "Set roof direction and colors."
				}), /* @__PURE__ */ (0, Q.jsx)(va, {
					value: r,
					onChange: n
				})]
			}),
			i,
			a,
			/* @__PURE__ */ (0, Q.jsxs)("details", {
				className: "construction-inspector__floor-disclosure",
				children: [/* @__PURE__ */ (0, Q.jsx)(ga, {
					icon: "measure",
					title: "Scale & heights",
					description: "Set plan scale and wall and ceiling heights."
				}), /* @__PURE__ */ (0, Q.jsx)(ya, { editor: s })]
			}),
			o
		]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/PoolProperties.tsx
function xa({ pool: e, editor: t }) {
	let n = t.draft.coordinates.metersPerPlanUnit, r = e.polygon.reduce((t, r, i) => {
		let a = e.polygon[(i + 1) % e.polygon.length];
		return t + Math.hypot(r[0] - a[0], r[1] - a[1]) * n;
	}, 0);
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "construction-inspector__selection",
		children: [
			/* @__PURE__ */ (0, Q.jsx)("header", { children: /* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("small", { children: "Selected pool" }), /* @__PURE__ */ (0, Q.jsx)("strong", { children: "Pool outline" })] }) }),
			/* @__PURE__ */ (0, Q.jsxs)("dl", {
				className: "construction-inspector__wall-facts construction-inspector__pool-facts",
				children: [/* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("dt", { children: "Area" }), /* @__PURE__ */ (0, Q.jsxs)("dd", { children: [(Math.abs(Ae(e.polygon)) * n ** 2).toFixed(1), " m²"] })] }), /* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("dt", { children: "Perimeter" }), /* @__PURE__ */ (0, Q.jsxs)("dd", { children: [r.toFixed(2), " m"] })] })]
			}),
			/* @__PURE__ */ (0, Q.jsx)("p", { children: "Drag the pool to move it, or drag a corner to reshape it." }),
			e.polygon.map((n, r) => /* @__PURE__ */ (0, Q.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, Q.jsxs)("legend", { children: [
				"Corner ",
				r + 1,
				" · plan units"
			] }), [0, 1].map((i) => /* @__PURE__ */ (0, Q.jsxs)("label", { children: [i === 0 ? "X" : "Y", /* @__PURE__ */ (0, Q.jsx)(Sr, {
				label: `Pool corner ${r + 1} ${i === 0 ? "X" : "Y"}`,
				step: .1,
				value: Number(n[i].toPrecision(15)),
				onCommit: (n) => t.updatePool(e.id, _e(e.polygon, (e, t) => t === r ? i === 0 ? [n, e[1]] : [e[0], n] : e))
			})] }, i))] }, r)),
			/* @__PURE__ */ (0, Q.jsx)($, {
				variant: "text",
				type: "button",
				onClick: t.deleteSelected,
				children: "Delete pool"
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/validation-visuals.ts
var Sa = (e, t) => e.includes(`"${t}"`) || e.includes(`“${t}”`), Ca = (e) => `${e.kind}:${e.id}`, wa = (e) => `${e.code}:${e.path}:${e.message}`, Ta = (e, t, n) => {
	let r = e.target ? [e.target] : [], i = (e) => {
		r.some((t) => Ca(t) === Ca(e)) || r.push(e);
	};
	t.walls.forEach((t) => {
		Sa(e.message, t.id) && i({
			kind: "wall",
			id: t.id
		});
	}), t.openings.forEach((t) => {
		Sa(e.message, t.id) && i({
			kind: "opening",
			id: t.id
		});
	}), t.rooms.forEach((t) => {
		Sa(e.message, t.id) && i({
			kind: "room",
			id: t.id
		}), t.floorZones?.forEach((t) => {
			Sa(e.message, t.id) && i({
				kind: "floor-zone",
				id: t.id
			});
		});
	}), t.groundZones?.forEach((t) => {
		Sa(e.message, t.id) && i({
			kind: "floor-zone",
			id: t.id
		});
	}), t.pools?.forEach((t) => {
		Sa(e.message, t.id) && i({
			kind: "pool",
			id: t.id
		});
	}), n.forEach((t) => {
		Sa(e.message, t.id) && i({
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
}, Ea = (e) => {
	if (e.length === 0) return [0, 0];
	let t = e.reduce((e, t) => [e[0] + t[0], e[1] + t[1]], [0, 0]);
	return [t[0] / e.length, t[1] / e.length];
}, Da = (e, t, n, r) => {
	let i = t[0] - e[0], a = t[1] - e[1], o = r[0] - n[0], s = r[1] - n[1], c = i * s - a * o;
	if (Math.abs(c) <= 1e-9) return null;
	let l = n[0] - e[0], u = n[1] - e[1], d = (l * s - u * o) / c, f = (l * a - u * i) / c;
	return d <= 1e-7 || d >= 1 - 1e-7 || f <= 1e-7 || f >= 1 - 1e-7 ? null : [e[0] + i * d, e[1] + a * d];
}, Oa = (e) => {
	for (let t = 0; t < e.length; t += 1) {
		let n = (t + 1) % e.length;
		for (let r = t + 1; r < e.length; r += 1) {
			let i = (r + 1) % e.length;
			if (t === r || n === r || i === t) continue;
			let a = Da(e[t], e[n], e[r], e[i]);
			if (a) return a;
		}
	}
	return null;
}, ka = (e, t, n) => {
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
		return n ? Ea(n.polygon) : null;
	}
	if (e.kind === "floor-zone") {
		let n = [...t.groundZones ?? [], ...t.rooms.flatMap((e) => e.floorZones ?? [])].find((t) => t.id === e.id);
		return n ? Ea(n.polygon) : null;
	}
	if (e.kind === "outdoor-platform") {
		let n = t.outdoorPlatforms?.find((t) => t.id === e.id);
		return n ? Ea(n.polygon) : null;
	}
	if (e.kind === "pool") {
		let n = t.pools?.find((t) => t.id === e.id);
		return n ? Ea(n.polygon) : null;
	}
	if (e.kind === "ceiling") {
		let n = t.ceilings?.find((t) => t.id === e.id), r = n && t.rooms.find((e) => n.roomIds.includes(e.id));
		return r ? Ea(r.polygon) : null;
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
}, Aa = (e) => e.code.startsWith("stair.") ? "Stairs" : e.code === "floor-zone.polygon" ? "Floor area crosses itself" : e.code === "floor-zone.outside-room" ? "Floor area leaves its room" : e.code === "ground-zone.inside-footprint" ? "Outdoor area crosses the building" : e.target?.kind === "floor-zone" ? "Check this floor area" : e.code === "pool.polygon" ? "Check the pool outline" : e.code === "pool.building-overlap" ? "Pool is too close to the house" : e.code === "pool.overlap" ? "Pool rims overlap" : e.target?.kind === "pool" ? "Check this pool" : e.code === "room.name" || e.code === "topology.room-name" ? "Name this room" : e.code === "room.polygon-invalid" ? "Room outline crosses itself" : e.code === "wall-junction.opening-overlap" ? "Opening is too close to this corner" : e.code === "project.outdoor-placement" ? "Outdoor item is inside the house" : e.target?.kind === "opening" ? "Check this opening" : e.target?.kind === "wall" ? "Check this wall" : e.target?.kind === "room" ? "Check this room" : e.target?.kind === "scene-item" ? "Check this object" : "Check this area", ja = (e, t, n) => {
	if (e.code === "room.polygon-invalid" && e.target?.kind === "room") {
		let n = t.rooms.find((t) => t.id === e.target?.id);
		if (n) return Oa(n.polygon) ?? Ea(n.polygon);
	}
	let r = Ta(e, t, n)[0];
	return r ? ka(r, t, n) : null;
};
//#endregion
//#region apps/web/src/editor-preview/construct/CommittedTextInput.tsx
function Ma({ label: e, value: t, placeholder: n, onCommit: r }) {
	let [i, a] = (0, Z.useState)(t), o = (0, Z.useRef)(!1);
	return (0, Z.useEffect)(() => a(t), [t]), /* @__PURE__ */ (0, Q.jsx)("input", {
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
//#region apps/web/src/editor-preview/construct/ConstructionInspector.tsx
function Na({ inert: e, referencePlanControls: t, planImportControls: n, tutorialControls: r, walkStartControls: i, northControls: a, roof: o, onRoofChange: s, editor: c, dependencyIssues: l = [], contextualIssues: u, onIssueFocus: d, floorPainting: f }) {
	let p = c.selection?.kind === "wall" ? c.selection.id : null, m = c.selection?.kind === "pool" ? c.selection.id : null, h = c.selection?.kind === "room" ? c.selection.id : null, g = c.selection?.kind === "floor-zone" ? c.selection.id : null, _ = p ? c.draft.walls.find((e) => e.id === p) : void 0, v = m ? c.draft.pools?.find((e) => e.id === m) : void 0, y = h ? c.previewFloor.rooms.find((e) => e.id === h) : void 0, b = y ? c.draft.rooms.find((e) => e.id === y.id) : void 0, x = g ? [...c.draft.groundZones ?? [], ...c.draft.rooms.flatMap((e) => e.floorZones ?? [])].find((e) => e.id === g) : void 0, S = y ? c.draft.rooms.filter((e) => Ct(e.anchor, y.polygon)) : [], C = (0, Z.useMemo)(() => y ? Oe(y, c.previewFloor) : 0, [y, c.previewFloor]), w = b?.ceilingHeightMeters ?? c.draft.defaultCeilingHeightMeters, T = _ ? c.previewFloor.walls.find((e) => e.id === _.id) : void 0, E = _ && (T?.classification === "exterior" || c.wallRuns.some((e) => e.sourceWallId === _.id && e.classification === "exterior")), D = _ ? Rr(_, c.previewFloor.coordinates) : void 0, O = _?.heightMeters ?? c.draft.defaultWallHeightMeters, k = _?.thicknessMeters ?? T?.thicknessMeters ?? c.draft.exteriorWallThicknessMeters, A = c.selection?.kind === "outdoor-platform" ? c.selection.id : void 0, j = c.tool === "select" && A ? c.draft.outdoorPlatforms?.find((e) => e.id === A) : void 0, M = c.selection?.kind === "multiple", N = (0, Z.useMemo)(() => {
		let e = {
			"outdoor-platform": 0,
			hedge: 0,
			wall: 0,
			opening: 0,
			room: 0,
			pool: 0,
			"floor-zone": 0
		}, t = /* @__PURE__ */ new Set();
		for (let n of c.deletionTargets ?? []) {
			let r = `${n.kind}:${n.id}`;
			t.has(r) || e[n.kind]++, t.add(r);
		}
		return e;
	}, [c.deletionTargets]), P = Object.values(N).reduce((e, t) => e + t, 0), F = u ?? [...l, ...c.canUndo ? c.topologyIssues : []], I = F.filter((e) => e.severity !== "warning").length, L = F.length - I, R = (e) => {
		if (d && "source" in e) {
			d(e);
			return;
		}
		e.target && (e.target.kind === "wall" && c.selectWall(e.target.id), e.target.kind === "opening" && c.selectOpening(e.target.id), e.target.kind === "room" && c.selectRoom(e.target.id), e.target.kind === "outdoor-platform" && c.selectPlatform(e.target.id), e.target.kind === "pool" && c.selectPool(e.target.id), e.target.kind === "floor-zone" && c.selectFloorZone(e.target.id));
	};
	return /* @__PURE__ */ (0, Q.jsxs)("section", {
		className: "construction-inspector",
		"aria-label": "Construction inspector",
		children: [
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "construction-inspector__context",
				inert: e,
				children: [
					/* @__PURE__ */ (0, Q.jsx)(ha, { editor: c }),
					(c.tool === "floor" || c.tool === "platform") && f && /* @__PURE__ */ (0, Q.jsx)(fa, {
						editor: c,
						painting: f
					}),
					j && /* @__PURE__ */ (0, Q.jsx)(la, {
						platform: j,
						editor: c
					}),
					c.tool === "wall" && /* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "construction-inspector__selection",
						children: [
							/* @__PURE__ */ (0, Q.jsx)("header", { children: /* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("small", { children: "Wall tool" }), /* @__PURE__ */ (0, Q.jsx)("strong", { children: "Draw walls" })] }) }),
							/* @__PURE__ */ (0, Q.jsx)("p", {
								className: "construction-inspector__tool-hint",
								children: "Click and drag a wall segment. Continue from its endpoint to draw a connected wall."
							}),
							/* @__PURE__ */ (0, Q.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, Q.jsx)("legend", { children: "Finish" }), /* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Exterior", /* @__PURE__ */ (0, Q.jsx)(_a, {
								label: "New wall exterior color",
								value: c.exteriorWallColor,
								onCommit: (e) => {
									c.setExteriorWallColor(e), _ && c.updateSelectedWallMetadata({ exteriorColor: e });
								}
							})] })] })
						]
					}),
					c.tool === "door" && /* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "construction-inspector__selection",
						children: [
							/* @__PURE__ */ (0, Q.jsx)("header", { children: /* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("small", { children: "Door tool" }), /* @__PURE__ */ (0, Q.jsx)("strong", { children: "Place a door" })] }) }),
							/* @__PURE__ */ (0, Q.jsx)("p", {
								className: "construction-inspector__tool-hint",
								children: "Choose a door type, then click a wall."
							}),
							/* @__PURE__ */ (0, Q.jsx)(xr, {
								value: c.doorConfiguration,
								onChange: c.setDoorConfiguration
							}),
							/* @__PURE__ */ (0, Q.jsx)(Cr, {
								value: c.doorConfiguration,
								onChange: c.setDoorConfiguration
							}),
							c.openingError && /* @__PURE__ */ (0, Q.jsx)("p", {
								role: "alert",
								children: c.openingError
							})
						]
					}),
					c.tool === "pool" && /* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "construction-inspector__selection",
						role: "status",
						children: [
							/* @__PURE__ */ (0, Q.jsx)("header", { children: /* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("small", { children: "Outdoor pool" }), /* @__PURE__ */ (0, Q.jsx)("strong", { children: "Close the outline" })] }) }),
							/* @__PURE__ */ (0, Q.jsx)("p", {
								className: "construction-inspector__tool-hint",
								children: "Click to add corners, then return to the first corner to close the pool. Undo removes the last corner. Escape cancels."
							}),
							c.poolDrawing?.error && /* @__PURE__ */ (0, Q.jsx)("p", {
								role: "alert",
								children: c.poolDrawing.error
							}),
							c.poolDrawing?.active && /* @__PURE__ */ (0, Q.jsx)($, {
								variant: "secondary",
								type: "button",
								onClick: c.poolDrawing.cancel,
								children: "Cancel pool"
							})
						]
					}),
					c.tool === "select" && !c.selection && /* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "construction-inspector__selection construction-inspector__selection-hint",
						role: "status",
						children: [/* @__PURE__ */ (0, Q.jsx)("header", { children: /* @__PURE__ */ (0, Q.jsx)("h3", { children: "Edit the plan" }) }), /* @__PURE__ */ (0, Q.jsx)("p", {
							className: "construction-inspector__tool-hint",
							children: "Select an element to see its properties. Hold Shift and drag to select several; Delete or Backspace removes them."
						})]
					}),
					M && /* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "construction-inspector__selection construction-inspector__bulk-selection",
						children: [
							/* @__PURE__ */ (0, Q.jsx)("header", { children: /* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("small", { children: "Multiple selection" }), /* @__PURE__ */ (0, Q.jsxs)("strong", { children: [P, " elements selected"] })] }) }),
							/* @__PURE__ */ (0, Q.jsx)("p", { children: "Whole source walls and their attached openings are included. Shift-drag again to replace this selection." }),
							/* @__PURE__ */ (0, Q.jsxs)("dl", {
								className: "construction-inspector__bulk-facts",
								"aria-label": "Elements selected for deletion",
								children: [
									N.room > 0 && /* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("dt", { children: "Rooms" }), /* @__PURE__ */ (0, Q.jsx)("dd", { children: N.room })] }),
									N.wall > 0 && /* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("dt", { children: "Walls" }), /* @__PURE__ */ (0, Q.jsx)("dd", { children: N.wall })] }),
									N.opening > 0 && /* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("dt", { children: "Openings" }), /* @__PURE__ */ (0, Q.jsx)("dd", { children: N.opening })] }),
									N.hedge > 0 && /* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("dt", { children: "Hedges" }), /* @__PURE__ */ (0, Q.jsx)("dd", { children: N.hedge })] }),
									N.pool > 0 && /* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("dt", { children: "Pools" }), /* @__PURE__ */ (0, Q.jsx)("dd", { children: N.pool })] }),
									N["floor-zone"] > 0 && /* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("dt", { children: "Floor areas" }), /* @__PURE__ */ (0, Q.jsx)("dd", { children: N["floor-zone"] })] })
								]
							}),
							/* @__PURE__ */ (0, Q.jsx)($, {
								variant: "text",
								type: "button",
								onClick: c.deleteSelected,
								children: "Delete selection"
							})
						]
					}),
					v && /* @__PURE__ */ (0, Q.jsx)(xa, {
						pool: v,
						editor: c
					}),
					x && /* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "construction-inspector__selection",
						children: [
							/* @__PURE__ */ (0, Q.jsx)("header", { children: /* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("small", { children: "Selected floor area" }), /* @__PURE__ */ (0, Q.jsx)("strong", { children: "Floor finish" })] }) }),
							/* @__PURE__ */ (0, Q.jsx)(ia, {
								value: x.finish,
								onChange: (e) => c.updateFloorZone(x.id, { finish: e })
							}),
							/* @__PURE__ */ (0, Q.jsx)($, {
								variant: "text",
								type: "button",
								onClick: c.deleteSelected,
								children: "Delete floor area"
							})
						]
					}),
					_ && /* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "construction-inspector__selection",
						children: [
							/* @__PURE__ */ (0, Q.jsx)("header", { children: /* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("small", { children: "Selected wall" }), /* @__PURE__ */ (0, Q.jsx)("strong", { children: "Wall properties" })] }) }),
							/* @__PURE__ */ (0, Q.jsxs)("dl", {
								className: "construction-inspector__wall-facts",
								children: [
									/* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("dt", { children: "Length" }), /* @__PURE__ */ (0, Q.jsx)("dd", { children: D?.label })] }),
									/* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("dt", { children: "Direction" }), /* @__PURE__ */ (0, Q.jsxs)("dd", { children: [D?.directionDegrees.toFixed(1), "°"] })] }),
									/* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("dt", { children: "Type" }), /* @__PURE__ */ (0, Q.jsx)("dd", { children: T?.classification ?? "Pending" })] })
								]
							}),
							/* @__PURE__ */ (0, Q.jsxs)("fieldset", { children: [
								/* @__PURE__ */ (0, Q.jsx)("legend", { children: "Dimensions · m" }),
								/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Thickness", /* @__PURE__ */ (0, Q.jsx)(Sr, {
									label: "Wall thickness",
									min: .04,
									step: .01,
									value: k,
									onCommit: (e) => c.updateSelectedWallMetadata({ thicknessMeters: e })
								})] }),
								/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Height", /* @__PURE__ */ (0, Q.jsx)(Sr, {
									label: "Wall height",
									min: .3,
									step: .05,
									value: O,
									onCommit: (e) => c.updateSelectedWallMetadata({ heightMeters: e })
								})] })
							] }),
							c.tool !== "wall" && E && /* @__PURE__ */ (0, Q.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, Q.jsx)("legend", { children: "Finish" }), /* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Exterior", /* @__PURE__ */ (0, Q.jsx)(_a, {
								label: "Wall exterior color",
								value: _.exteriorColor ?? c.defaultExteriorWallColor,
								onCommit: (e) => {
									c.setExteriorWallColor(e), c.updateSelectedWallMetadata({ exteriorColor: e });
								}
							})] })] }),
							/* @__PURE__ */ (0, Q.jsx)($, {
								variant: "text",
								type: "button",
								onClick: c.deleteSelected,
								children: "Delete wall"
							})
						]
					}),
					y && /* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "construction-inspector__selection",
						children: [
							/* @__PURE__ */ (0, Q.jsxs)("header", { children: [/* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("small", { children: "Selected room" }), /* @__PURE__ */ (0, Q.jsx)("strong", { children: y.name || "Unnamed room" })] }), /* @__PURE__ */ (0, Q.jsxs)("span", {
								title: "Interior floor area",
								"aria-label": `Interior floor area: ${C.toFixed(1)} square meters`,
								children: [C.toFixed(1), " m²"]
							})] }),
							S.length > 1 && /* @__PURE__ */ (0, Q.jsxs)("div", {
								className: "construction-inspector__merge",
								role: "alert",
								children: [
									/* @__PURE__ */ (0, Q.jsx)("strong", { children: "Choose the room to keep" }),
									/* @__PURE__ */ (0, Q.jsx)("p", { children: "This wall change joined existing rooms. Keep one identity before continuing." }),
									/* @__PURE__ */ (0, Q.jsx)("div", { children: S.map((e) => /* @__PURE__ */ (0, Q.jsxs)($, {
										variant: "secondary",
										type: "button",
										onClick: () => c.resolveRoomMerge(e.id),
										children: ["Keep ", e.name || e.id]
									}, e.id)) })
								]
							}),
							/* @__PURE__ */ (0, Q.jsxs)("fieldset", { children: [
								/* @__PURE__ */ (0, Q.jsx)("legend", { children: "Room" }),
								/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Name", /* @__PURE__ */ (0, Q.jsx)(Ma, {
									label: "Room name",
									value: b?.name ?? y.name,
									placeholder: "e.g. Living room",
									onCommit: (e) => c.updateSelectedRoom({ name: e })
								})] }),
								/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Accent", /* @__PURE__ */ (0, Q.jsx)(_a, {
									label: "Room accent color",
									value: b?.accent ?? y.accent,
									onCommit: (e) => c.updateSelectedRoom({ accent: e })
								})] })
							] }),
							/* @__PURE__ */ (0, Q.jsxs)("fieldset", {
								className: "construction-inspector__room-surfaces",
								children: [
									/* @__PURE__ */ (0, Q.jsx)("legend", { children: "Surfaces" }),
									/* @__PURE__ */ (0, Q.jsxs)("div", {
										className: "construction-inspector__surface-summary",
										children: [/* @__PURE__ */ (0, Q.jsx)("span", { children: "Floor" }), /* @__PURE__ */ (0, Q.jsx)("strong", { children: (() => {
											let e = Tt(y);
											return e.kind === "solid" ? "Solid color" : rt(e.preset).label;
										})() })]
									}),
									/* @__PURE__ */ (0, Q.jsx)($, {
										variant: "secondary",
										type: "button",
										onClick: () => f ? f.onTargetChange("room") : c.setFloorPaintTarget("room"),
										children: "Paint floor"
									}),
									/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Ceiling", /* @__PURE__ */ (0, Q.jsx)(Sr, {
										label: "Room ceiling height",
										min: .3,
										step: .05,
										value: w,
										onCommit: (e) => c.updateSelectedRoom({ ceilingHeightMeters: e })
									})] })
								]
							}),
							c.deletionTargets?.some((e) => e.kind === "room" && e.id === y.id) === !1 && /* @__PURE__ */ (0, Q.jsx)("p", {
								role: "status",
								children: "All enclosing walls are shared. Edit the walls to remove this room."
							}),
							/* @__PURE__ */ (0, Q.jsx)($, {
								variant: "text",
								type: "button",
								disabled: c.deletionTargets?.some((e) => e.kind === "room" && e.id === y.id) === !1,
								onClick: c.deleteSelected,
								children: "Delete room"
							})
						]
					}),
					F.length > 0 && /* @__PURE__ */ (0, Q.jsxs)("section", {
						className: "construction-inspector__validation",
						"aria-label": "Construction validation",
						"aria-live": "polite",
						children: [/* @__PURE__ */ (0, Q.jsxs)("header", { children: [/* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("small", { children: "Needs attention" }), /* @__PURE__ */ (0, Q.jsxs)("strong", { children: [
							F.length,
							" ",
							F.length === 1 ? "issue" : "issues"
						] })] }), /* @__PURE__ */ (0, Q.jsxs)("span", { children: [
							I > 0 && `${I} ${I === 1 ? "error" : "errors"}`,
							I > 0 && L > 0 && " · ",
							L > 0 && `${L} ${L === 1 ? "warning" : "warnings"}`
						] })] }), /* @__PURE__ */ (0, Q.jsx)("ul", { children: F.map((e, t) => {
							let n = e.target && (d || e.target.kind === "wall" || e.target.kind === "opening" || e.target.kind === "room" || e.target.kind === "pool" || e.target.kind === "floor-zone") ? e.target : void 0, r = /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
								/* @__PURE__ */ (0, Q.jsx)("span", {
									className: "construction-inspector__validation-marker",
									"aria-hidden": "true",
									children: e.severity === "warning" ? "!" : "×"
								}),
								/* @__PURE__ */ (0, Q.jsxs)("span", { children: [/* @__PURE__ */ (0, Q.jsx)("strong", { children: "source" in e ? Aa(e) : e.message }), /* @__PURE__ */ (0, Q.jsxs)("small", { children: ["source" in e && `${e.message} `, e.suggestion] })] }),
								n && /* @__PURE__ */ (0, Q.jsx)("span", {
									className: "construction-inspector__validation-arrow",
									"aria-hidden": "true",
									children: "Locate →"
								})
							] });
							return /* @__PURE__ */ (0, Q.jsx)("li", {
								"data-severity": e.severity,
								children: n ? /* @__PURE__ */ (0, Q.jsx)("button", {
									type: "button",
									"aria-label": `Select ${n.kind} ${n.id}: ${e.message}`,
									onClick: () => R(e),
									children: r
								}) : /* @__PURE__ */ (0, Q.jsx)("div", { children: r })
							}, `${e.code}:${e.path ?? ""}:${e.target?.kind ?? ""}:${e.target?.id ?? ""}:${t}`);
						}) })]
					})
				]
			}),
			t,
			/* @__PURE__ */ (0, Q.jsx)(ba, {
				inert: e,
				planImportControls: n,
				onRoofChange: s,
				roof: o,
				northControls: a,
				walkStartControls: i,
				tutorialControls: r,
				editor: c
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionMeasureOverlay.tsx
function Pa({ planMode: e = !1, measurement: t, preview: n = !1, showLabel: r = !0, onCopy: i }) {
	let a = e ? Wr : Zt;
	return !t || !gi(t) ? null : /* @__PURE__ */ (0, Q.jsxs)("group", {
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
			/* @__PURE__ */ (0, Q.jsxs)("mesh", {
				name: "construction-measure-guide-line",
				renderOrder: 29,
				raycast: Ur,
				children: [/* @__PURE__ */ (0, Q.jsx)("boxGeometry", { args: [
					t.world.lengthMeters,
					.018,
					.025
				] }), /* @__PURE__ */ (0, Q.jsx)(a, {
					color: "#ff754d",
					transparent: !0,
					opacity: n ? .72 : .96,
					depthTest: !1,
					depthWrite: !1
				})]
			}),
			[-1, 1].map((n) => /* @__PURE__ */ (0, Q.jsx)(ai, {
				position: [
					n * t.world.lengthMeters / 2,
					0,
					0
				],
				planMode: e
			}, n)),
			r && /* @__PURE__ */ (0, Q.jsx)(I, {
				position: [
					0,
					.14,
					0
				],
				center: !0,
				zIndexRange: [12, 0],
				pointerEvents: i ? "auto" : "none",
				children: /* @__PURE__ */ (0, Q.jsx)(ti, {
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
function Fa(e, t, n) {
	let [r, i] = (0, Z.useState)(() => /* @__PURE__ */ new Set());
	return (0, Z.useEffect)(() => {
		let t = new Set(e.map(wa));
		i((e) => {
			let n = [...e].filter((e) => t.has(e));
			return n.length === e.size ? e : new Set(n);
		});
	}, [e]), (0, Z.useEffect)(() => {
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
function Ia({ planMode: e = !1, floor: t, sceneItems: n, issues: r, activeIssueKey: i, focusVersion: a = 0, showLabels: o = !0, onActivate: s }) {
	let c = e ? Wr : Zt, { hiddenKeys: l, hide: u } = Fa(r, i, a), d = (0, Z.useMemo)(() => r.filter((e) => e.severity !== "warning"), [r]), f = (0, Z.useMemo)(() => d.flatMap((e) => Ta(e, t, n).map((t) => ({
		issue: e,
		target: t
	}))), [
		d,
		t,
		n
	]), p = (0, Z.useMemo)(() => f.flatMap(({ issue: e, target: n }) => {
		let r = n.kind === "outdoor-platform" ? t.outdoorPlatforms?.find((e) => e.id === n.id) : n.kind === "pool" ? t.pools?.find((e) => e.id === n.id) : n.kind === "room" ? t.rooms.find((e) => e.id === n.id) : n.kind === "floor-zone" ? [...t.groundZones ?? [], ...t.rooms.flatMap((e) => e.floorZones ?? [])].find((e) => e.id === n.id) : void 0;
		return r ? r.polygon.map((i, a) => ({
			issue: e,
			target: n,
			edgeIndex: a,
			transform: Lr(i, r.polygon[(a + 1) % r.polygon.length], t.coordinates)
		})) : [];
	}), [t, f]), m = (0, Z.useMemo)(() => {
		let e = /* @__PURE__ */ new Map();
		return d.forEach((r) => {
			if (l.has(wa(r))) return;
			let i = ja(r, t, n);
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
	return /* @__PURE__ */ (0, Q.jsxs)("group", {
		name: "construction-validation-overlay",
		children: [
			f.map(({ issue: e, target: r }, i) => {
				if (r.kind === "wall") {
					let n = t.walls.find((e) => e.id === r.id);
					if (!n) return null;
					let a = Lr(n.from, n.to, t.coordinates), o = n.heightMeters ?? t.defaultWallHeightMeters;
					return /* @__PURE__ */ (0, Q.jsxs)("mesh", {
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
						children: [/* @__PURE__ */ (0, Q.jsx)("boxGeometry", { args: [
							a.length + .06,
							o + .08,
							n.thicknessMeters + .1
						] }), /* @__PURE__ */ (0, Q.jsx)(c, {
							color: "#c53f32",
							transparent: !0,
							opacity: .7,
							wireframe: !0,
							depthTest: !1,
							depthWrite: !1
						})]
					}, `${wa(e)}:${r.kind}:${r.id}`);
				}
				if (r.kind === "opening") {
					let i = t.openings.find((e) => e.id === r.id), a = i && t.walls.find((e) => e.id === i.wallId), o = ka(r, t, n);
					if (!i || !a || !o) return null;
					let [s, l] = Nr(o, t.coordinates), u = -Math.atan2(a.to[1] - a.from[1], a.to[0] - a.from[0]);
					return /* @__PURE__ */ (0, Q.jsxs)("mesh", {
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
						children: [/* @__PURE__ */ (0, Q.jsx)("boxGeometry", { args: [
							i.widthPlanUnits * t.coordinates.metersPerPlanUnit + .08,
							i.openingHeightMeters + .08,
							.24
						] }), /* @__PURE__ */ (0, Q.jsx)(c, {
							color: "#d94738",
							transparent: !0,
							opacity: .78,
							wireframe: !0,
							depthTest: !1,
							depthWrite: !1
						})]
					}, `${wa(e)}:${r.kind}:${r.id}`);
				}
				if (r.kind === "junction") {
					let i = ka(r, t, n);
					if (!i) return null;
					let [a, o] = Nr(i, t.coordinates);
					return /* @__PURE__ */ (0, Q.jsxs)("mesh", {
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
						children: [/* @__PURE__ */ (0, Q.jsx)("ringGeometry", { args: [
							.2,
							.31,
							28
						] }), /* @__PURE__ */ (0, Q.jsx)(c, {
							color: "#d94738",
							transparent: !0,
							opacity: .95,
							side: 2,
							depthTest: !1,
							depthWrite: !1
						})]
					}, `${wa(e)}:${r.kind}:${r.id}`);
				}
				if (r.kind === "scene-item") {
					let i = n.find((e) => e.id === r.id), a = ka(r, t, n);
					if (!i || !a) return null;
					let [o, s] = Nr(a, t.coordinates), l = 0, u = i.placement.kind === "ceiling" ? t.defaultCeilingHeightMeters - i.placement.dropMeters : i.placement.elevationMeters;
					try {
						let e = Qe(i.placement, t);
						l = e.rotationYRadians, u = e.position[1];
					} catch {}
					return /* @__PURE__ */ (0, Q.jsxs)("mesh", {
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
						children: [/* @__PURE__ */ (0, Q.jsx)("boxGeometry", { args: [
							i.size[0] + .12,
							i.size[1] + .12,
							i.size[2] + .12
						] }), /* @__PURE__ */ (0, Q.jsx)(c, {
							color: "#d94738",
							transparent: !0,
							opacity: .68,
							wireframe: !0,
							depthTest: !1,
							depthWrite: !1
						})]
					}, `${wa(e)}:${r.kind}:${r.id}`);
				}
				return null;
			}),
			p.map(({ issue: e, target: t, edgeIndex: n, transform: r }) => /* @__PURE__ */ (0, Q.jsxs)("mesh", {
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
				children: [/* @__PURE__ */ (0, Q.jsx)("boxGeometry", { args: [
					r.length + .035,
					.055,
					.09
				] }), /* @__PURE__ */ (0, Q.jsx)(c, {
					color: "#c53f32",
					transparent: !0,
					opacity: .84,
					side: 2,
					depthTest: !1,
					depthWrite: !1
				})]
			}, `${wa(e)}:${t.id}:${n}`)),
			o && m.map(({ point: e, issues: n }, r) => {
				let [a, o] = Nr(e, t.coordinates), c = n[0], l = n.some((e) => wa(e) === i), d = n.length === 1 ? Aa(c) : `${n.length} issues here`;
				return /* @__PURE__ */ (0, Q.jsx)(I, {
					position: [
						a,
						.55,
						o
					],
					center: !0,
					zIndexRange: [90, 70],
					wrapperClass: "construction-validation-overlay-label",
					style: { pointerEvents: "none" },
					children: /* @__PURE__ */ (0, Q.jsxs)("div", {
						className: `construction-validation-marker ${l ? "is-active" : ""}`,
						role: "group",
						"aria-label": d,
						onPointerDown: (e) => e.stopPropagation(),
						onPointerUp: (e) => e.stopPropagation(),
						children: [/* @__PURE__ */ (0, Q.jsxs)("button", {
							type: "button",
							className: "construction-validation-marker__details",
							"aria-label": `${d}. ${n.map((e) => e.message).join(" ")}`,
							title: n.map((e) => e.message).join("\n"),
							onClick: (e) => {
								e.stopPropagation(), s(c);
							},
							children: [/* @__PURE__ */ (0, Q.jsx)("span", { children: r + 1 }), /* @__PURE__ */ (0, Q.jsx)("strong", { children: d })]
						}), /* @__PURE__ */ (0, Q.jsx)("button", {
							type: "button",
							className: "construction-validation-marker__dismiss",
							"aria-label": `Hide error label: ${d}`,
							title: "Hide this label. Use Locate in the issue list to show it again.",
							onClick: (e) => {
								e.stopPropagation(), u(n.map(wa));
							},
							children: /* @__PURE__ */ (0, Q.jsx)("span", {
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
//#region apps/web/src/editor-preview/construct/contextual-validation.ts
var La = {
	walls: "wall",
	openings: "opening",
	rooms: "room",
	pools: "pool",
	outdoorPlatforms: "outdoor-platform",
	ceilings: "ceiling",
	wallJunctions: "junction",
	sceneItems: "scene-item"
}, Ra = {
	"floor-zone.polygon": "Move a corner until the floor area is simple and has visible area.",
	"floor-zone.outside-room": "Move or delete the floor area so it stays inside its room.",
	"ground-zone.inside-footprint": "Move the outdoor area so it stays outside the building.",
	"project.outdoor-placement": "Move the outdoor item outside the building, keeping it on the ground.",
	"platform.room-overlap": "Move or reshape the platform so its interior stays outside rooms on this level.",
	"platform.polygon": "Move a corner until the platform has a simple, closed outline.",
	"platform.overlap": "Move or reshape the platforms so their interiors do not overlap.",
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
}, za = (e, t) => e === "sceneItems" ? t.sceneItems ?? [] : t.floor[e] ?? [], Ba = (e) => {
	let t = "walls|wallJunctions|openings|rooms|ceilings|pools|outdoorPlatforms|sceneItems", n = e.match(RegExp(`(?:^|\\.)(?<collection>${t})(?:\\[(?<bracket>[^\\]]+)\\]|\\.(?<dotted>[^.\\[]+))`));
	if (n?.groups) return {
		collection: n.groups.collection,
		reference: (n.groups.bracket ?? n.groups.dotted).replace(/^["']|["']$/g, "")
	};
	let r = e.match(RegExp(`(?:^|/)(?<collection>${t})/(?<reference>[^/]+)`));
	return r?.groups ? {
		collection: r.groups.collection,
		reference: r.groups.reference
	} : void 0;
}, Va = (e, t) => {
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
	let i = Ba(e);
	if (!i) return;
	let a = za(i.collection, t), o = /^(?:0|[1-9]\d*)$/.test(i.reference) ? Number(i.reference) : void 0, s = o === void 0 ? a.find((e) => e.id === i.reference) : a[o];
	if (s) return {
		kind: La[i.collection],
		id: s.id
	};
}, Ha = {
	fatal: 0,
	error: 1,
	warning: 2
}, Ua = {
	topology: 0,
	project: 1,
	dependency: 2,
	navigation: 3
}, Wa = (e) => [
	e.code,
	e.path,
	e.message,
	e.target?.kind ?? "",
	e.target?.id ?? ""
].join("\0"), Ga = (e, t, n) => {
	let r = e.target ?? Va(e.path, n);
	return r?.kind === "room" && (e.code === "topology.room-name" || e.code === "room.name" || e.code === "project.string" && /(?:\.name|\/name)$/.test(e.path)) ? {
		...e,
		code: "room.name",
		path: `rooms[${JSON.stringify(r.id)}].name`,
		message: "This room needs a name.",
		source: t,
		target: r,
		suggestion: "Click “Name room” on the plan, or enter a name in the room panel before applying."
	} : bt({
		...e,
		source: t,
		target: r,
		suggestion: e.suggestion ?? (e.code.startsWith("stair.") && e.severity === "warning" ? "You can keep this layout and save with warnings." : void 0) ?? Ra[e.code] ?? "Review the highlighted context and correct this issue before publishing."
	});
}, Ka = /* @__PURE__ */ new Set([
	"topology.walls-required",
	"topology.no-rooms",
	"topology.incomplete-shell",
	"topology.room-name",
	"room.name"
]), qa = (e) => !e.walls.length && !e.rooms.length && !e.footprint.length && !e.openings.length && !e.ceilings?.length && !e.wallJunctions?.length && !e.pools?.length && !e.outdoorPlatforms?.length && !e.groundZones?.length && !e.hedges?.length, Ja = (e, t, n) => {
	let r = e.filter((e) => t !== null && n && qa(n.floor) && !n.hasItems && (e.code === "topology.walls-required" && e.source === "topology" || e.code === "project.floor-empty" && e.path === `floors[${n.floorIndex}].footprint`) ? !1 : t !== "wall" || !Ka.has(e.code));
	return r.length === e.length ? e : r;
}, Ya = (e) => {
	let t = [
		...(e.topologyIssues ?? []).map((t) => Ga(t, "topology", e)),
		...(e.projectIssues ?? []).map((t) => Ga(t, "project", e)),
		...(e.dependencyIssues ?? []).map((t) => Ga(t, "dependency", e)),
		...(e.navigationIssues ?? []).map((t) => Ga(t, "navigation", e))
	], n = /* @__PURE__ */ new Map();
	for (let e of t) {
		let t = Wa(e), r = n.get(t);
		(!r || Ha[e.severity] < Ha[r.severity]) && n.set(t, e);
	}
	return [...n.values()].sort((e, t) => Ha[e.severity] - Ha[t.severity] || Ua[e.source] - Ua[t.source] || e.path.localeCompare(t.path) || e.code.localeCompare(t.code) || e.message.localeCompare(t.message));
}, Xa = (e, t, n) => e.flatMap((e) => {
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
	let o = Qe(r, {
		...t,
		walls: [...t.walls.filter((e) => e.id !== r.wallId), a]
	}), s = Fe({
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
}), Za = (e, t, n, r) => Xa(e.map((e) => {
	let t = e.placement;
	if (t.kind !== "wall") return e;
	let n = it(r, t.wallId, t.offsetFromWallStartPlanUnits);
	return !n || n.wallId === t.wallId && n.offsetFromWallStartPlanUnits === t.offsetFromWallStartPlanUnits ? e : {
		...e,
		placement: {
			...t,
			wallId: n.wallId,
			offsetFromWallStartPlanUnits: n.offsetFromWallStartPlanUnits
		}
	};
}), t, n), Qa = (e, t) => {
	let n = [];
	return {
		items: e.map((e, r) => {
			let i = e.placement;
			if (i.kind !== "ceiling") return e;
			let a = t.rooms.filter((e) => Ct(i.at, e.polygon));
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
function $a(e, t) {
	return {
		...t,
		id: e.floorId,
		name: e.floorName,
		floorToFloorHeightMeters: e.floorToFloorHeightMeters ?? t.floorToFloorHeightMeters,
		...e.belowGround === void 0 ? {} : { belowGround: e.belowGround },
		coordinates: e.coordinates,
		defaultWallHeightMeters: e.defaultWallHeightMeters,
		defaultCeilingHeightMeters: e.defaultCeilingHeightMeters,
		footprint: [],
		footprintRegions: [],
		rooms: [],
		ceilings: [],
		walls: e.walls.map((t) => bt({
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
		...e.outdoorPlatforms ? { outdoorPlatforms: e.outdoorPlatforms } : {},
		...e.pools ? { pools: e.pools } : {},
		...e.groundZones ? { groundZones: e.groundZones } : {}
	};
}
//#endregion
//#region apps/web/src/editor-preview/construct/opening-orientation-floor.ts
var eo = (e) => {
	if (e.kind === "passage") return e;
	let { hingeSide: t, openingSide: n, ...r } = e;
	if (r.kind === "window") return r;
	let { slideDirection: i, ...a } = r;
	return a;
};
function to(e, t, n) {
	if (!n.rooms.length && e.outdoorPlatforms !== t.outdoorPlatforms || [
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
	].some((n) => e[n] !== t[n]) || e.openings.length !== t.openings.length || e.openings.some((e, n) => e !== t.openings[n] && JSON.stringify(eo(e)) !== JSON.stringify(eo(t.openings[n])))) return null;
	let r = new Map(t.openings.filter((t, n) => t !== e.openings[n]).map((e) => [e.id, e])), i = e.pools === t.pools ? n : {
		...n,
		pools: t.pools ?? []
	};
	return e.outdoorPlatforms !== t.outdoorPlatforms && (i = {
		...i,
		outdoorPlatforms: t.outdoorPlatforms ?? []
	}), e.hedges !== t.hedges && (i = {
		...i,
		hedges: t.hedges ?? []
	}), e.groundZones !== t.groundZones && (i = {
		...i,
		groundZones: t.groundZones ?? []
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
var no = (e, n = []) => t(bt({
	...e.floorToFloorHeightMeters === void 0 ? {} : { floorToFloorHeightMeters: e.floorToFloorHeightMeters },
	...e.belowGround === void 0 ? {} : { belowGround: e.belowGround },
	floorId: e.floorId,
	floorName: e.floorName,
	coordinates: e.coordinates,
	walls: e.walls,
	openings: e.openings,
	rooms: e.rooms,
	reservedRoomNames: n,
	junctions: e.junctions,
	...e.hedges === void 0 ? {} : { hedges: e.hedges },
	pools: e.pools,
	outdoorPlatforms: e.outdoorPlatforms,
	groundZones: e.groundZones,
	defaultWallHeightMeters: e.defaultWallHeightMeters,
	defaultCeilingHeightMeters: e.defaultCeilingHeightMeters,
	exteriorWallThicknessMeters: e.exteriorWallThicknessMeters,
	interiorWallThicknessMeters: e.interiorWallThicknessMeters
})), ro = (e) => `${e.code}:${e.path}:${e.message}`, io = (e, t) => {
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
		let a = It(i.offsetPlanUnits, Ut({
			draft: e.present,
			wallId: i.wallId,
			widthPlanUnits: i.widthPlanUnits,
			sillHeightMeters: i.sillHeightMeters,
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
}, ao = (e, t) => {
	if (t.type === "replace-floor") return pe(z(t.floor));
	let n = io(e, t);
	return n ? de(e, n) : e;
}, oo = {
	points: [],
	future: [],
	preview: null,
	error: null
}, so = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[1]) <= 1e-7;
function co(e, t, n = "outline") {
	if (t.type === "cancel") return { state: oo };
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
	let r = t.point;
	return !r.every(Number.isFinite) || e.points.length && so(r, e.points.at(-1)) ? { state: e } : e.points.length >= 3 && so(r, e.points[0]) ? fe(e.points) ? {
		state: oo,
		completed: e.points
	} : { state: {
		...e,
		error: "The outline crosses itself or has no area. Undo a corner and try again."
	} } : e.points.some((e) => so(e, r)) ? { state: {
		...e,
		error: `Add at least three distinct corners, then return to the first corner to close the ${n}.`
	} } : { state: {
		points: [...e.points, r],
		future: [],
		preview: r,
		error: null
	} };
}
function lo(e, t = "outline") {
	let [n, r] = (0, Z.useState)(oo), i = (0, Z.useRef)(n), a = (0, Z.useRef)(t);
	a.current = t;
	let o = (0, Z.useRef)(e);
	o.current = e;
	let s = (0, Z.useCallback)((e) => {
		let t = co(i.current, e, a.current);
		i.current = t.state, r(t.state), t.completed && o.current(t.completed);
	}, []);
	return {
		...n,
		active: n.points.length > 0 || n.future.length > 0,
		place: (0, Z.useCallback)((e) => s({
			type: "point",
			point: e
		}), [s]),
		previewPoint: (0, Z.useCallback)((e) => s({
			type: "preview",
			point: e
		}), [s]),
		undo: (0, Z.useCallback)(() => s({ type: "undo" }), [s]),
		redo: (0, Z.useCallback)(() => s({ type: "redo" }), [s]),
		cancel: (0, Z.useCallback)(() => s({ type: "cancel" }), [s])
	};
}
//#endregion
//#region apps/web/src/editor-preview/construct/wall-loop-closure.ts
var uo = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[1]) <= 1e-7, fo = (e, t) => e[0] * t[1] - e[1] * t[0], po = (e, t) => {
	let n = [t.to[0] - t.from[0], t.to[1] - t.from[1]], r = [e[0] - t.from[0], e[1] - t.from[1]], i = n[0] ** 2 + n[1] ** 2;
	if (i <= 1e-14) return uo(e, t.from);
	let a = 1e-7 * Math.max(1, Math.sqrt(i));
	if (Math.abs(fo(n, r)) > a) return !1;
	let o = r[0] * n[0] + r[1] * n[1];
	return o >= -a && o <= i + a;
}, mo = (e, t) => {
	let n = [e.to[0] - e.from[0], e.to[1] - e.from[1]], r = [t.to[0] - t.from[0], t.to[1] - t.from[1]], i = [t.from[0] - e.from[0], t.from[1] - e.from[1]], a = fo(n, r);
	if (Math.abs(a) <= 1e-10) return po(e.from, t) || po(e.to, t) || po(t.from, e) || po(t.to, e);
	let o = fo(i, r) / a, s = fo(i, n) / a;
	return o >= -1e-7 && o <= 1 + 1e-7 && s >= -1e-7 && s <= 1 + 1e-7;
}, ho = (e, t, n) => {
	if (uo(t, n)) return !1;
	let r = new Set(e.map((e, t) => po(n, e) ? t : -1).filter((e) => e >= 0));
	if (r.size === 0) return !1;
	let i = e.map((e, n) => po(t, e) ? n : -1).filter((e) => e >= 0), a = /* @__PURE__ */ new Set();
	for (; i.length > 0;) {
		let t = i.pop();
		if (!a.has(t)) {
			if (r.has(t)) return !0;
			a.add(t);
			for (let n = 0; n < e.length; n += 1) !a.has(n) && mo(e[t], e[n]) && i.push(n);
		}
	}
	return !1;
}, go = (e, t = e, n = "#c97370", r = "select", i = []) => {
	let a = JSON.stringify(i), o = (0, Z.useCallback)((e) => no(e, JSON.parse(a)), [a]), [s, c] = (0, Z.useReducer)(ao, e, (e) => pe({
		...z(e),
		tool: r
	})), [l] = (0, Z.useState)(() => new Set(o(z(t)).issues.map(ro))), [u] = (0, Z.useState)(() => {
		let t = o(z(e));
		return {
			previewFloor: e,
			topologyIssues: t.issues.filter((e) => !l.has(ro(e))),
			wallRuns: t.wallRuns
		};
	}), [d, f] = (0, Z.useState)(Ne), [p, m] = (0, Z.useState)(null), [h, g] = (0, Z.useState)({
		style: "clipped",
		heightMeters: 1.4,
		widthMeters: .65
	}), [_, v] = (0, Z.useState)(null), [y, b] = (0, Z.useState)(n), [x, S] = (0, Z.useState)({
		finish: {
			kind: "solid",
			color: "#c8b79b"
		},
		defaultEdge: {
			kind: "railing",
			heightMeters: 1
		}
	}), [C, w] = (0, Z.useState)(null), [T, E] = (0, Z.useState)(r === "platform" ? "outdoor-platform" : "room"), D = (0, Z.useRef)(s.present.tool);
	D.current = s.present.tool;
	let O = lo((e) => c(D.current === "platform" ? {
		type: "add-outdoor-platform",
		polygon: e,
		...x
	} : {
		type: "add-pool",
		polygon: e
	}), s.present.tool === "platform" ? "platform" : "pool"), { cancel: k } = O, [A, j] = (0, Z.useState)(null), [M, N] = (0, Z.useState)(null), P = (0, Z.useRef)(null), F = s.present, I = (0, Z.useRef)(null), L = (0, Z.useRef)(F), R = (0, Z.useRef)(u.previewFloor), B = (0, Z.useRef)({
		draft: F,
		value: u
	}), V = (0, Z.useMemo)(() => {
		let e = (e) => (B.current = {
			draft: F,
			value: e
		}, e), t = I.current;
		if (t && (t.draft === null || t.draft === F)) {
			t.draft = F, R.current = t.floor;
			let n = o(F);
			return e({
				previewFloor: t.floor,
				topologyIssues: n.issues.filter((e) => !l.has(ro(e))),
				wallRuns: n.wallRuns
			});
		}
		if (I.current = null, F === L.current) return e(u);
		let n = B.current, r = to(n.draft, F, n.value.previewFloor);
		if (r) return R.current = r, e({
			...n.value,
			previewFloor: r
		});
		let i = o(F);
		return i.floor && (R.current = i.floor), e({
			previewFloor: i.floor ?? (i.faces.length === 0 ? $a(F, R.current) : R.current),
			topologyIssues: i.issues.filter((e) => !l.has(ro(e))),
			wallRuns: i.wallRuns
		});
	}, [
		F.defaultCeilingHeightMeters,
		F.defaultWallHeightMeters,
		F.coordinates,
		F.exteriorWallThicknessMeters,
		F.floorId,
		F.floorToFloorHeightMeters,
		F.belowGround,
		F.floorName,
		F.interiorWallThicknessMeters,
		F.junctions,
		F.openings,
		F.hedges,
		F.pools,
		F.outdoorPlatforms,
		F.groundZones,
		F.rooms,
		F.walls,
		l,
		o
	]), H = (0, Z.useCallback)((e) => {
		k(), P.current = null, v(null), j(null), N(null), e === "platform" && E("outdoor-platform"), c({
			type: "set-tool",
			tool: e === "floor" && T === "outdoor-platform" ? "platform" : e
		});
	}, [k, T]), U = (0, Z.useCallback)((e) => {
		E(e), k(), P.current = null, v(null), j(null), N(null), c({
			type: "set-tool",
			tool: e === "outdoor-platform" ? "platform" : "floor"
		});
	}, [k]), W = (0, Z.useCallback)((e) => {
		m(null), c({
			type: "select",
			selection: e
		});
	}, []), ee = (0, Z.useCallback)((e) => {
		P.current = e, v(e), j(e), N(null);
	}, []), te = (0, Z.useCallback)((e) => {
		let t = P.current;
		if (!t) return;
		if (s.present.tool === "hedge") {
			c({
				type: "add-hedge",
				hedge: {
					from: t,
					to: e,
					...h
				}
			}), P.current = e, v(e), j(e), N(Math.atan2(e[1] - t[1], e[0] - t[0]));
			return;
		}
		let n = ho(s.present.walls, t, e);
		if (c({
			type: "add-wall",
			from: t,
			to: e,
			exteriorColor: y
		}), n) {
			c({
				type: "set-tool",
				tool: "select"
			}), P.current = null, v(null), j(null), N(null);
			return;
		}
		P.current = e, v(e), j(e), N(Math.atan2(e[1] - t[1], e[0] - t[0]));
	}, [
		y,
		s.present.walls,
		s.present.tool,
		h
	]), ne = (0, Z.useCallback)(() => {
		P.current = null, v(null), j(null), N(null);
	}, []), re = (0, Z.useCallback)((e) => {
		let t = s.present.selection;
		if (t?.kind !== "wall") return;
		let n = s.present.walls.find((e) => e.id === t.id);
		if (!n) return;
		let r = (e === "door" ? d.widthMeters : e === "window" ? 1.2 : .9) / s.present.coordinates.metersPerPlanUnit, i = Math.hypot(n.to[0] - n.from[0], n.to[1] - n.from[1]), a = It(Math.max(0, (i - r) / 2), Ut({
			draft: s.present,
			wallId: n.id,
			widthPlanUnits: r,
			sillHeightMeters: e === "window" ? .9 : 0
		}));
		if (a === void 0 || e === "door" && d.heightMeters > (n.heightMeters ?? s.present.defaultWallHeightMeters)) {
			m("The door does not fit on this wall.");
			return;
		}
		c({
			type: "add-opening",
			wallId: n.id,
			kind: e,
			doorConfiguration: d,
			offsetPlanUnits: a
		});
	}, [s.present, d]), ie = (0, Z.useCallback)((e, t, n) => {
		let r = (e === "door" ? d.widthMeters : e === "window" ? 1.2 : .9) / s.present.coordinates.metersPerPlanUnit, i = Ut({
			draft: s.present,
			wallId: t,
			widthPlanUnits: r,
			sillHeightMeters: e === "window" ? .9 : 0
		}).some((e) => n >= e.min && n <= e.max), a = s.present.walls.find((e) => e.id === t);
		if (!i || e === "door" && d.heightMeters > (a?.heightMeters ?? s.present.defaultWallHeightMeters)) {
			m("The door does not fit on this wall.");
			return;
		}
		m(null), c({
			type: "set-tool",
			tool: "select"
		}), c({
			type: "add-opening",
			wallId: t,
			kind: e,
			offsetPlanUnits: n,
			doorConfiguration: d
		});
	}, [s.present, d]), G = (0, Z.useCallback)((e, t) => {
		let n = V.previewFloor.rooms.find((t) => t.id === e);
		if (!n) return;
		let r = s.present.rooms.find((e) => e.id === n.id);
		c({
			type: "update-room-metadata",
			roomId: n.id,
			anchor: Be(n.polygon),
			changes: r ? t : {
				name: n.name,
				accent: n.accent,
				...n.floorFinish ? { floorFinish: n.floorFinish } : {},
				...n.floorZones ? { floorZones: [...n.floorZones] } : {},
				...t
			}
		});
	}, [s.present, V.previewFloor.rooms]), ae = (0, Z.useCallback)((e, t, n) => {
		let r = V.previewFloor.rooms.find((t) => t.id === e);
		r && c({
			type: "update-room-metadata",
			roomId: e,
			anchor: Be(r.polygon),
			changes: {
				floorFinish: t,
				...n ? { floorZones: [] } : {}
			}
		});
	}, [V.previewFloor.rooms]), K = (0, Z.useCallback)((e, t, n) => {
		let r = V.previewFloor.rooms.find((t) => t.id === e);
		r && c({
			type: "add-floor-zone",
			room: {
				id: r.id,
				name: r.name,
				accent: r.accent,
				anchor: Be(r.polygon)
			},
			polygon: t,
			finish: n
		});
	}, [V.previewFloor.rooms]), oe = (0, Z.useCallback)((e) => {
		let t = s.present.selection;
		if (t?.kind !== "room") return;
		let n = V.previewFloor.rooms.find((e) => e.id === t.id);
		if (!n) return;
		let r = s.present.rooms.filter((e) => Ct(e.anchor, n.polygon)).map((e) => e.id);
		r.length < 2 || !r.includes(e) || c({
			type: "resolve-room-merge",
			survivorId: e,
			mergedRoomIds: r,
			anchor: Be(n.polygon)
		});
	}, [s.present, V.previewFloor.rooms]), se = (0, Z.useMemo)(() => Bt(F.selection), [F.selection]), ce = (0, Z.useMemo)(() => zi({
		selection: F.selection,
		draft: F,
		previewFloor: V.previewFloor,
		wallRuns: V.wallRuns
	}), [
		F,
		V.previewFloor,
		V.wallRuns
	]);
	return {
		history: s,
		doorConfiguration: d,
		setDoorConfiguration: f,
		openingError: p,
		hedgeSettings: h,
		setHedgeSettings: g,
		platformSettings: x,
		setPlatformSettings: S,
		selectedPlatformEdgeId: C,
		selectPlatform: (e) => {
			w(null), W({
				kind: "outdoor-platform",
				id: e
			});
		},
		selectPlatformEdge: (e, t) => {
			w(t), W({
				kind: "outdoor-platform",
				id: e
			});
		},
		updatePlatform: (e, t) => c({
			type: "update-outdoor-platform",
			id: e,
			changes: t
		}),
		poolDrawing: O,
		selectPool: (e) => W({
			kind: "pool",
			id: e
		}),
		selectFloorZone: (e) => W({
			kind: "floor-zone",
			id: e
		}),
		updatePool: (e, t) => c({
			type: "update-pool",
			poolId: e,
			polygon: t
		}),
		paintRoomFloor: ae,
		addFloorZone: K,
		addGroundZone: (e, t) => c({
			type: "add-ground-zone",
			polygon: e,
			finish: t
		}),
		updateFloorZone: (e, t) => c({
			type: "update-floor-zone",
			zoneId: e,
			changes: t
		}),
		...V,
		isSettling: !1,
		draft: F,
		selection: F.selection,
		selectionTargets: se,
		deletionTargets: ce,
		tool: F.tool,
		drawStart: _,
		drawPreview: A,
		drawAngleReferenceRadians: M,
		exteriorWallColor: y,
		defaultExteriorWallColor: n,
		canUndo: s.past.length > 0,
		canRedo: s.future.length > 0,
		dispatch: c,
		setTool: H,
		floorPaintTarget: T,
		setFloorPaintTarget: U,
		selectWall: (e) => W({
			kind: "wall",
			id: e
		}),
		selectOpening: (e) => W({
			kind: "opening",
			id: e
		}),
		selectRoom: (e) => W({
			kind: "room",
			id: e
		}),
		selectMany: (e) => W(Ee(e)),
		clearSelection: () => W(null),
		setExteriorWallColor: b,
		updateWallEndpoint: (e, t, n) => c({
			type: "move-wall-endpoint",
			wallId: e,
			endpoint: t,
			point: n
		}),
		updateSelectedWallMetadata: (e) => {
			let t = s.present.selection;
			t?.kind === "wall" && c({
				type: "update-wall-metadata",
				wallId: t.id,
				changes: e
			});
		},
		updateFloorSettings: (e) => c({
			type: "update-floor-settings",
			settings: e
		}),
		updateRoom: G,
		updateSelectedRoom: (e) => {
			s.present.selection?.kind === "room" && G(s.present.selection.id, e);
		},
		resolveRoomMerge: oe,
		translateWall: (e, t) => c({
			type: "translate-wall",
			wallId: e,
			delta: t
		}),
		beginWall: ee,
		previewWall: j,
		addWall: te,
		cancelWall: ne,
		addOpening: re,
		placeOpening: ie,
		updateSelectedOpening: (e) => {
			let t = F.selection, n = t?.kind === "opening" ? F.openings.find((e) => e.id === t.id) : void 0;
			if (!n) return;
			let r = {
				...n,
				...e
			}, i = F.walls.find((e) => e.id === r.wallId);
			if (!(Ut({
				draft: F,
				wallId: r.wallId,
				widthPlanUnits: r.widthPlanUnits,
				sillHeightMeters: r.sillHeightMeters,
				excludeOpeningId: r.id
			}).length > 0) || !i || r.openingHeightMeters + r.sillHeightMeters > (i.heightMeters ?? F.defaultWallHeightMeters)) {
				m("This opening does not fit here. Choose a smaller size or another wall position.");
				return;
			}
			m(null), c({
				type: "update-selected-opening",
				patch: e
			});
		},
		replaceSelectedOpening: (e) => {
			let t = F.walls.find((t) => t.id === e.wallId);
			if (!Ut({
				draft: F,
				wallId: e.wallId,
				widthPlanUnits: e.widthPlanUnits,
				sillHeightMeters: e.sillHeightMeters,
				excludeOpeningId: e.id
			}).some(({ min: t, max: n }) => e.offsetPlanUnits >= t && e.offsetPlanUnits <= n) || !t || e.openingHeightMeters + e.sillHeightMeters > (t.heightMeters ?? F.defaultWallHeightMeters)) {
				m("This door does not fit here. Choose a smaller size or another wall position.");
				return;
			}
			m(null), c({
				type: "replace-selected-opening",
				opening: e
			});
		},
		resizeSelectedOpening: (e, t) => {
			m(null), c({
				type: "update-selected-opening",
				patch: {
					offsetPlanUnits: e,
					widthPlanUnits: t
				}
			});
		},
		moveOpening: (e, t, n) => {
			let r = s.present.openings.find((t) => t.id === e);
			if (!r) return;
			let i = It(n, Ut({
				draft: s.present,
				wallId: t,
				widthPlanUnits: r.widthPlanUnits,
				sillHeightMeters: r.sillHeightMeters,
				excludeOpeningId: e
			}));
			i !== void 0 && c({
				type: "move-opening",
				openingId: e,
				wallId: t,
				offsetPlanUnits: i
			});
		},
		canDuplicateOpening: (e) => xt(s.present, e) !== void 0,
		duplicateOpening: (e) => xt(s.present, e) !== void 0 && (c({
			type: "duplicate-opening",
			openingId: e
		}), !0),
		deleteSelected: () => c({
			type: "delete-elements",
			targets: ce
		}),
		undo: () => c({ type: "undo" }),
		redo: () => c({ type: "redo" }),
		replaceFloor: (e) => {
			ne(), k(), I.current = {
				floor: e,
				draft: null
			}, c({
				type: "replace-floor",
				floor: e
			});
		}
	};
}, _o = (e) => {
	let [t, n] = (0, Z.useReducer)(di, void 0, ci);
	return {
		state: t,
		phase: ui(t),
		measurement: (0, Z.useMemo)(() => hi(t, e), [e, t]),
		place: (0, Z.useCallback)((e) => n({
			type: "place",
			point: e
		}), []),
		preview: (0, Z.useCallback)((e) => n({
			type: "preview",
			point: e
		}), []),
		cancel: (0, Z.useCallback)(() => n({ type: "cancel" }), []),
		reset: (0, Z.useCallback)(() => n({ type: "reset" }), [])
	};
};
//#endregion
//#region apps/web/src/editor-preview/furnish/placement/wall-room-inset.ts
function vo(e, t) {
	let n = (e) => {
		let { position: n } = Qe(e, t), r = Fe({
			x: n[0],
			z: n[2]
		}, t.coordinates);
		return t.rooms.some((e) => Ct(r, e.polygon));
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
var yo = (e) => ({
	placement: null,
	error: e
});
function bo(e, t, n) {
	let r = e.definition, i = (t.elevationMeters ?? 0) > 0, a = r.placementEnvironment === "outdoor", o = t.coordinates.metersPerPlanUnit;
	if (!n.at.every(Number.isFinite) || !(o > 0)) return yo("Enter a valid position.");
	let s = (e, r) => n.raw ? e : t.coordinates.origin[r] + Math.round((e - t.coordinates.origin[r]) * o * 10) / (10 * o), c = [s(n.at[0], 0), s(n.at[1], 1)], l = t.walls.flatMap((e) => {
		let t = e.to[0] - e.from[0], n = e.to[1] - e.from[1], r = Math.hypot(t, n);
		if (r <= 0) return [];
		let i = ((c[0] - e.from[0]) * t + (c[1] - e.from[1]) * n) / r, a = Math.max(0, Math.min(r, i)), s = [e.from[0] + t * a / r, e.from[1] + n * a / r], l = (c[0] - s[0]) * -n + (c[1] - s[1]) * t;
		return [{
			wall: e,
			length: r,
			offset: a,
			distance: Math.hypot(c[0] - s[0], c[1] - s[1]) * o,
			face: l < 0 ? "left" : "right"
		}];
	}).sort((e, t) => e.distance - t.distance), u = n.wallId ? l.find((e) => e.wall.id === n.wallId) : l[0];
	if (a && n.kind && n.kind !== "absolute") return yo("Outdoor items use ground placement.");
	let d = a ? "absolute" : n.kind ?? (n.wallId || !n.raw && u && u.distance <= .55 ? "wall" : r.preferredPlacement), f;
	if (d === "wall") {
		if (!u || !n.wallId && u.distance > .55) return yo("Choose a wall to place this item.");
		let e = Math.max(Math.abs(r.bounds.min[0]), Math.abs(r.bounds.max[0])) / o, i = n.offset ?? Math.max(e, Math.min(u.length - e, u.offset));
		if (!Number.isFinite(i) || i < e || i + e > u.length) return yo("This item needs more space along the wall.");
		let a = u.wall.heightMeters ?? t.defaultWallHeightMeters, s = Math.max(0, -r.bounds.min[1]), c = a - Math.max(0, r.bounds.max[1]), l = n.elevation ?? Math.max(s, Math.min(c, r.defaultSize[1] > 1.5 ? s : 1.25));
		if (!Number.isFinite(l) || l < s || l > c) return yo("The item must fit between the floor and wall top.");
		f = {
			kind: d,
			wallId: u.wall.id,
			face: n.face ?? u.face,
			offsetFromWallStartPlanUnits: i,
			elevationMeters: l,
			depthOffsetMeters: Math.max(0, -r.bounds.min[2]) + .003,
			rotationOffsetRadians: 0
		};
	} else {
		let e = t.rooms.filter((e) => Ct(c, e.polygon));
		if (a) {
			if (!t.outdoorPlatforms?.some((e) => Ct(c, e.polygon)) && !At(c, t)) return yo("Choose a position outside the building.");
		} else if (d === "ceiling" && e.length !== 1) return yo("Choose a position inside one room.");
		if (d === "ceiling") {
			let i = t.ceilings?.find((t) => t.roomIds.includes(e[0].id)), a = i?.kind === "flat" ? i.heightMeters : t.defaultCeilingHeightMeters, o = n.drop ?? Math.max(0, r.bounds.max[1]) + .003;
			if (!Number.isFinite(o) || o < Math.max(0, r.bounds.max[1]) || o > a || a - o + r.bounds.min[1] < 0) return yo("The item must fit below the ceiling and above the floor.");
			f = {
				kind: d,
				roomId: e[0].id,
				at: c,
				dropMeters: o,
				rotationYRadians: 0
			};
		} else {
			if (i && !kt(c, t)) return yo("Choose a room floor or outdoor platform on this level.");
			let e = n.elevation ?? Math.max(0, -r.bounds.min[1]) + .001;
			if (!Number.isFinite(e) || e < Math.max(0, -r.bounds.min[1])) return yo("The item must stay above the floor.");
			f = {
				kind: d,
				at: c,
				elevationMeters: e,
				rotationYRadians: 0
			};
		}
	}
	let p = (e) => {
		let n = Qe(e, t), r = [n.position[0] / o + t.coordinates.origin[0], n.position[2] / o + t.coordinates.origin[1]];
		return t.rooms.filter((e) => Ct(r, e.polygon)).length;
	};
	if (f.kind === "wall" && (f = vo(f, t)), a) {
		if (f.kind !== "absolute" || !t.outdoorPlatforms?.some((e) => Ct(f.at, e.polygon)) && !At(f.at, t)) return yo("Choose a position outside the building.");
	} else if (p(f) > 1) return yo("Choose a position belonging to at most one room.");
	return {
		placement: f,
		error: null
	};
}
//#endregion
//#region apps/web/src/editor-preview/furnish/placement/window-placement.ts
function xo(e, t, n, r) {
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
			let r = bo({ definition: u }, t, {
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
			}, f = Qe(l, t), p = [f.position[0] / a + t.coordinates.origin[0], f.position[2] / a + t.coordinates.origin[1]], m = t.rooms.find((e) => Ct(p, e.polygon))?.name ?? "Window";
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
var So = 1e-7, Co = (e, t) => e[0] * t[0] + e[1] * t[1], wo = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[1]) <= So, To = (e, t, n) => {
	let r = t.to[0] - t.from[0], i = t.to[1] - t.from[1], a = r * r + i * i;
	if (a <= So * So) return null;
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
}, Eo = (e, t) => Co([e[0] - t.projected[0], e[1] - t.projected[1]], t.rightNormal) < 0 ? "left" : "right", Do = (e, t) => t === "right" ? e.rightNormal : [-e.rightNormal[0], -e.rightNormal[1]], Oo = (e, t, n) => {
	let r = wo(e.wall.from, t) ? e.wall.to : wo(e.wall.to, t) ? e.wall.from : null;
	if (!r) return null;
	let i = r[0] - t[0], a = r[1] - t[1], o = Math.hypot(i, a);
	return o <= So ? null : {
		direction: [i / o, a / o],
		lengthMeters: o * n
	};
}, ko = (e, t) => ({
	minX: t.bounds.min[0] * e.size[0] / t.defaultSize[0],
	maxX: t.bounds.max[0] * e.size[0] / t.defaultSize[0],
	minZ: t.bounds.min[2] * e.size[2] / t.defaultSize[2],
	maxZ: t.bounds.max[2] * e.size[2] / t.defaultSize[2]
}), Ao = (e, t, n, r) => {
	let i = Qe(e, r), a = ko(t, n), o = Math.cos(i.rotationYRadians), s = Math.sin(i.rotationYRadians);
	return [a.minX, a.maxX].flatMap((e) => [a.minZ, a.maxZ].map((t) => [i.position[0] + e * o + t * s, i.position[2] - e * s + t * o]));
}, jo = (e, t, n, r, i) => {
	let a = Eo(t, e), o = n.placement.kind === "wall" && n.placement.wallId === e.wall.id && n.placement.face === a, s = ko(n, r);
	return vo({
		kind: "wall",
		wallId: e.wall.id,
		face: a,
		offsetFromWallStartPlanUnits: Number(e.offsetPlanUnits.toFixed(4)),
		elevationMeters: Qe(n.placement, i).position[1],
		depthOffsetMeters: o ? n.placement.kind === "wall" ? n.placement.depthOffsetMeters : Math.max(0, -s.minZ) : Math.max(r.windowFit?.depthOffsetMeters ?? 0, -s.minZ),
		rotationOffsetRadians: o && n.placement.kind === "wall" ? n.placement.rotationOffsetRadians : 0
	}, i);
}, Mo = (e, t, n, r, i) => {
	let a = e.map((e) => Co([e[0] - t[0], e[1] - t[1]], n)), o = Math.min(...a), s = e.filter((e, t) => a[t] <= o + 1e-4).map((e) => Co([e[0] - r[0], e[1] - r[1]], i.direction));
	return Math.min(...s) >= -1e-7 && Math.max(...s) <= i.lengthMeters + So;
}, No = (e, t) => {
	let { position: n } = Qe(e, t), r = t.coordinates.metersPerPlanUnit, i = [n[0] / r + t.coordinates.origin[0], n[2] / r + t.coordinates.origin[1]];
	return t.rooms.filter((e) => Ct(i, e.polygon)).length;
}, Po = ({ rawAt: e, item: t, definition: n, floor: r, primary: i, candidatesByWallId: a, cornerSnapDistanceMeters: o }) => {
	let s = r.coordinates.metersPerPlanUnit, c = jo(i, e, t, n, r), l = Qe(c, r), u = Ao(c, t, n, r);
	return r.wallJunctions.flatMap((e) => {
		if (e.wallIds.length !== 2 || !e.wallIds.includes(i.wall.id)) return [];
		let d = e.wallIds.find((e) => e !== i.wall.id), f = d ? a.get(d) : void 0;
		if (!f) return [];
		let p = Oo(i, e.at, s), m = Oo(f, e.at, s);
		if (!p || !m) return [];
		let h = p.direction[0] * m.direction[1] - p.direction[1] * m.direction[0];
		if (Math.abs(h) <= 1e-4) return [];
		let g = J(e.at, r.coordinates), _ = Do(f, Co([l.position[0] - g[0], l.position[2] - g[1]], f.rightNormal) < 0 ? "left" : "right"), v = [g[0] + _[0] * f.wall.thicknessMeters / 2, g[1] + _[1] * f.wall.thicknessMeters / 2], y = u.map((e) => Co([e[0] - v[0], e[1] - v[1]], _)), b = Math.min(...y), x = Math.max(...y), S = b > 0 ? b : x < 0 ? -x : 0;
		if (S > o + So) return [];
		let C = Co(i.tangent, _);
		if (Math.abs(C) <= So) return [];
		let w = -b / C, T = c.offsetFromWallStartPlanUnits + w / s;
		if (T < -1e-7 || T > i.lengthPlanUnits + So) return [];
		let E = {
			...c,
			offsetFromWallStartPlanUnits: Number(T.toFixed(4))
		}, D = Ao(E, t, n, r), O = D.map((e) => Co([e[0] - v[0], e[1] - v[1]], _)), k = Do(i, E.face), A = [g[0] + k[0] * i.wall.thicknessMeters / 2, g[1] + k[1] * i.wall.thicknessMeters / 2];
		return Math.min(...O) < -1e-4 || !Mo(D, A, k, g, p) || !Mo(D, v, _, g, m) || No(E, r) !== 1 ? [] : [{
			placement: E,
			gapMeters: S,
			adjustmentMeters: Math.abs(w),
			junctionId: e.id
		}];
	}).sort((e, t) => e.gapMeters - t.gapMeters || e.adjustmentMeters - t.adjustmentMeters || e.junctionId.localeCompare(t.junctionId))[0] ?? null;
}, Fo = ({ rawAt: e, item: t, definition: n, floor: r, wallSnapDistanceMeters: i = .55, cornerSnapDistanceMeters: a = .2 }) => {
	let o = r.walls.flatMap((t) => {
		let n = To(e, t, r.coordinates.metersPerPlanUnit);
		return n ? [n] : [];
	}).sort((e, t) => e.distanceMeters - t.distanceMeters || e.wall.id.localeCompare(t.wall.id)), s = o[0];
	if (!s || s.distanceMeters > i) return null;
	let c = t.placement.kind === "wall" ? t.placement.wallId : null, l = [c ? o.find((e) => e.wall.id === c && e.distanceMeters <= i) : void 0, s].filter((e, t, n) => e !== void 0 && n.findIndex((t) => t?.wall.id === e.wall.id) === t), u = new Map(o.map((e) => [e.wall.id, e]));
	for (let i of l) {
		let o = Po({
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
	return jo(s, e, t, n, r);
}, Io = (e) => {
	let t = new Set(e), n = rn();
	for (; t.has(n);) n = rn();
	return n;
}, Lo = (e, t) => {
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
			let e = t.rooms.filter((e) => Ct(r, e.polygon));
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
}, Ro = (e, t, n, r = []) => {
	let i = /* @__PURE__ */ new Set([
		...t.map((e) => e.id),
		...r,
		...t.flatMap((e) => e.kind === "device" ? e.entitySlots.map((e) => e.id) : [])
	]), a = Io(i);
	i.add(a);
	let o = Lo(e, n);
	if (n && o.kind === "wall") {
		let { position: t } = Qe(o, n), r = [t[0] / n.coordinates.metersPerPlanUnit + n.coordinates.origin[0], t[2] / n.coordinates.metersPerPlanUnit + n.coordinates.origin[1]];
		n.rooms.filter((e) => Ct(r, e.polygon)).length !== 1 && (o = { ...e.placement });
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
			let t = Io(i);
			return i.add(t), {
				...structuredClone(e),
				id: t
			};
		})
	} : {
		...s,
		kind: "furnishing"
	};
}, zo = .01, Bo = (e, t = .1) => Math.round(e / t) * t, Vo = (e, t, n, r = .1) => {
	let i = n ? e.x : Bo(e.x, r), a = n ? e.z : Bo(e.z, r);
	return [i / t.metersPerPlanUnit + t.origin[0], a / t.metersPerPlanUnit + t.origin[1]];
}, Ho = ({ world: e, item: t, definition: n, floor: r, raw: i, wallSnapDistanceMeters: a = .55 }) => {
	let o = Qe(t.placement, r), s = Vo(e, r.coordinates, i), c = Vo(e, r.coordinates, !0), l = n.placementEnvironment === "outdoor";
	if (!i && !l && n.windowFit) {
		let e = xo(n, r, c, t.size)[0];
		if (e && e.distanceMeters <= a) return e.placement;
	}
	if (!i && !l) {
		let e = Fo({
			rawAt: c,
			item: t,
			definition: n,
			floor: r,
			wallSnapDistanceMeters: a
		});
		if (e) return e;
	}
	let u = t.placement.kind === "ceiling" ? t.placement.roomId : null;
	return t.placement.kind === "ceiling" && r.rooms.some((e) => e.id === u && Ct(s, e.polygon)) ? {
		...t.placement,
		at: s
	} : {
		kind: "absolute",
		at: s,
		elevationMeters: o.position[1],
		rotationYRadians: o.rotationYRadians
	};
}, Uo = (e, t) => Number.isFinite(e) && e > 0 ? Math.max(zo, e) : t, Wo = (e, t, n) => {
	let r = t.map((t, n) => Uo(t, e[n]));
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
}, Go = (e, t, n = 0) => {
	let r = e.size.map((e, n) => e / t.defaultSize[n]), i = t.bounds.min.map((e, t) => e * r[t]), a = t.bounds.max.map((e, t) => e * r[t]);
	return {
		center: i.map((e, t) => (e + a[t]) / 2),
		size: i.map((e, t) => Math.max(.04, a[t] - e + n * 2))
	};
}, Ko = (e) => ({
	items: [...e],
	selectedId: null,
	past: [],
	future: [],
	transaction: null
}), qo = (e) => ({
	items: e.items,
	selectedId: e.selectedId
}), Jo = (e, t) => ({
	...e,
	...t,
	past: e.transaction ? e.past : [...e.past, qo(e)],
	future: e.transaction ? e.future : []
}), Yo = (e, t, n) => {
	let r = !1, i = e.items.map((e) => {
		if (e.id !== t) return e;
		let i = n(e);
		return JSON.stringify(i) === JSON.stringify(e) ? e : (r = !0, i);
	});
	return r ? Jo(e, {
		items: i,
		selectedId: t
	}) : e;
}, Xo = (e, t) => e.kind === "absolute" || e.kind === "ceiling" ? {
	...e,
	rotationYRadians: t
} : {
	...e,
	rotationOffsetRadians: t
}, Zo = (e, t, n) => n || {
	kind: "absolute",
	at: t,
	elevationMeters: 0,
	rotationYRadians: 0
}, Qo = (e, t) => {
	switch (t.type) {
		case "add-item": return Jo(e, {
			items: [...e.items, t.item],
			selectedId: t.item.id
		});
		case "replace-items": return {
			...Ko(t.items),
			selectedId: t.selectedId ?? null
		};
		case "select": return e.selectedId === t.id ? e : {
			...e,
			selectedId: t.id
		};
		case "begin-transaction": return e.transaction ? e : {
			...e,
			transaction: qo(e)
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
		case "update-variant": return Je(t.definition).some((e) => e.id === t.variant) ? Yo(e, t.id, (e) => ({
			...e,
			variant: t.variant
		})) : e;
		case "update-light-state": return Yo(e, t.id, (e) => e.kind === "device" ? {
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
			return n.some((t, n) => t !== e.items[n]) ? Jo(e, {
				items: n,
				selectedId: e.selectedId
			}) : e;
		}
		case "update-placement": return Yo(e, t.id, (e) => ({
			...e,
			placement: t.placement
		}));
		case "update-size": return Yo(e, t.id, (e) => ({
			...e,
			size: Wo(t.definition.defaultSize, t.size, t.definition.resizePolicy)
		}));
		case "rotate": return Yo(e, t.id, (e) => ({
			...e,
			placement: Xo(e.placement, t.rotationYRadians)
		}));
		case "duplicate": {
			let n = e.items.find((e) => e.id === t.id);
			if (!n) return e;
			let r = Ro(n, e.items, t.floor, t.reservedSlotIds);
			return Jo(e, {
				items: [...e.items, r],
				selectedId: r.id
			});
		}
		case "delete-items": {
			let n = new Set(t.ids), r = e.items.filter((e) => !n.has(e.id));
			return r.length === e.items.length ? e : Jo(e, {
				items: r,
				selectedId: e.selectedId && n.has(e.selectedId) ? null : e.selectedId
			});
		}
		case "delete": return e.items.findIndex((e) => e.id === t.id) < 0 ? e : Jo(e, {
			items: e.items.filter((e) => e.id !== t.id),
			selectedId: e.selectedId === t.id ? null : e.selectedId
		});
		case "add-preset": {
			let n = Io(e.items.flatMap((e) => [e.id, ...e.kind === "device" ? e.entitySlots.map((e) => e.id) : []])), r = {
				id: n,
				kind: "furnishing",
				floorId: t.floorId,
				modelId: t.modelId,
				placement: Zo(t.definition, t.planCenter, t.placement),
				size: [...t.definition.defaultSize]
			};
			return Jo(e, {
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
				future: [qo(e), ...e.future],
				transaction: null
			} : e;
		}
		case "redo": {
			let t = e.future[0];
			return t ? {
				...e,
				...t,
				past: [...e.past, qo(e)],
				future: e.future.slice(1),
				transaction: null
			} : e;
		}
	}
}, $o = (e) => {
	let [t, n] = (0, Z.useReducer)(Qo, e, Ko), [r, i] = (0, Z.useState)([]), a = t.selectedId ? [t.selectedId] : r.filter((e) => t.items.some((t) => t.id === e)), o = (0, Z.useMemo)(() => t.items.find((e) => e.id === t.selectedId) ?? null, [t.items, t.selectedId]);
	return {
		...t,
		selectedIds: a,
		selectMany: (0, Z.useCallback)((e) => {
			i(e), n({
				type: "select",
				id: e.length === 1 ? e[0] : null
			});
		}, []),
		addItem: (0, Z.useCallback)((e) => n({
			type: "add-item",
			item: e
		}), []),
		selectedItem: o,
		canUndo: t.past.length > 0,
		canRedo: t.future.length > 0,
		select: (0, Z.useCallback)((e) => {
			i([]), n({
				type: "select",
				id: e
			});
		}, []),
		beginTransaction: (0, Z.useCallback)(() => n({ type: "begin-transaction" }), []),
		commitTransaction: (0, Z.useCallback)(() => n({ type: "commit-transaction" }), []),
		cancelTransaction: (0, Z.useCallback)(() => n({ type: "cancel-transaction" }), []),
		updateVariant: (0, Z.useCallback)((e, t, r) => n({
			type: "update-variant",
			id: e,
			variant: t,
			definition: r
		}), []),
		updateLightState: (0, Z.useCallback)((e, t) => n({
			type: "update-light-state",
			id: e,
			lightState: t
		}), []),
		updatePlacements: (0, Z.useCallback)((e) => n({
			type: "update-placements",
			placements: e
		}), []),
		updatePlacement: (0, Z.useCallback)((e, t) => n({
			type: "update-placement",
			id: e,
			placement: t
		}), []),
		updateSize: (0, Z.useCallback)((e, t, r) => n({
			type: "update-size",
			id: e,
			size: t,
			definition: r
		}), []),
		rotate: (0, Z.useCallback)((e, t) => n({
			type: "rotate",
			id: e,
			rotationYRadians: t
		}), []),
		duplicate: (0, Z.useCallback)((e, t, r) => n({
			type: "duplicate",
			id: e,
			...t === void 0 ? {} : { floor: t },
			...r === void 0 ? {} : { reservedSlotIds: r }
		}), []),
		deleteItems: (0, Z.useCallback)((e) => n({
			type: "delete-items",
			ids: e
		}), []),
		deleteItem: (0, Z.useCallback)((e) => n({
			type: "delete",
			id: e
		}), []),
		addPreset: (0, Z.useCallback)((e, t, r, i, a) => n({
			type: "add-preset",
			floorId: e,
			modelId: t,
			definition: r,
			planCenter: i,
			...a === void 0 ? {} : { placement: a }
		}), []),
		undo: (0, Z.useCallback)(() => n({ type: "undo" }), []),
		redo: (0, Z.useCallback)(() => n({ type: "redo" }), []),
		replaceItems: (0, Z.useCallback)((e, t) => {
			i([]), n({
				type: "replace-items",
				items: e,
				...t === void 0 ? {} : { selectedId: t }
			});
		}, [])
	};
}, es = 8, ts = (e) => !!((e.nativeEvent?.metaKey || e.nativeEvent?.ctrlKey) && !e.nativeEvent?.shiftKey && !e.nativeEvent?.altKey), ns = (e) => !!e.nativeEvent?.shiftKey, rs = (e) => e.nativeEvent.altKey, is = (e) => e.target;
function as({ items: e, floor: t, furnishingModels: n, deviceModels: r, selectedId: i, selectedIds: a = i ? [i] : [], onSelectMany: o, selectionOnly: s = !1, onSelect: c, onMovePlacement: l, onMovePlacements: u, onDragStart: d, onDragEnd: f, onDragCancel: p, onDraggingChange: m }) {
	let h = Ht(), [g, _] = (0, Z.useState)(null), y = (0, Z.useRef)(null), b = (0, Z.useRef)(null), x = (0, Z.useRef)(new v(new Y(0, 1, 0), 0)), S = (0, Z.useRef)(new Y()), C = (0, Z.useRef)({
		onDragEnd: f,
		onDragCancel: p,
		onDraggingChange: m
	});
	(0, Z.useLayoutEffect)(() => {
		C.current = {
			onDragEnd: f,
			onDragCancel: p,
			onDraggingChange: m
		};
	});
	let w = (0, Z.useMemo)(() => new $e(1, 1, 1), []);
	(0, Z.useEffect)(() => () => w.dispose(), [w]);
	let T = (e, t) => (x.current.constant = -t, e.ray.intersectPlane(x.current, S.current)), E = (n) => {
		if (y.current) {
			let r = y.current;
			y.current = null, _(null), n || o?.(e.filter((e) => {
				let [n, , i] = Qe(e.placement, t).position;
				return n >= Math.min(r.from.x, r.to.x) && n <= Math.max(r.from.x, r.to.x) && i >= Math.min(r.from.z, r.to.z) && i <= Math.max(r.from.z, r.to.z);
			}).map((e) => e.id)), C.current.onDraggingChange?.(!1), r.target?.releasePointerCapture?.(r.pointerId);
		}
		if (!b.current) return;
		let { active: r, id: i, pointerId: a, target: s } = b.current;
		b.current = null, r && (C.current.onDraggingChange?.(!1), n ? C.current.onDragCancel?.(i) : C.current.onDragEnd?.(i)), s?.releasePointerCapture?.(a);
	}, D = (e) => {
		!b.current || e.pointerId !== b.current.pointerId || (e.stopPropagation(), E(!1));
	}, O = (0, Z.useEffectEvent)(() => E(!0));
	return (0, Z.useEffect)(() => {
		if (typeof window > "u") return;
		let e = (e) => {
			e.key !== "Escape" || !b.current && !y.current || (e.preventDefault(), e.stopPropagation(), O());
		}, t = () => O();
		return h.events.addEventListener("keydown", e, !0), window.addEventListener("blur", t), () => {
			h.events.removeEventListener("keydown", e, !0), window.removeEventListener("blur", t), O();
		};
	}, [h]), /* @__PURE__ */ (0, Q.jsxs)("group", {
		name: "furnishing-edit-layer",
		children: [
			!s && o && /* @__PURE__ */ (0, Q.jsxs)("mesh", {
				name: "arrange-marquee-surface",
				onClick: (e) => {
					e.stopPropagation(), !ts(e) && !ns(e) && o([]);
				},
				rotation: [
					-Math.PI / 2,
					0,
					0
				],
				onPointerDown: (e) => {
					if (e.button !== 0 || !ts(e)) return;
					let t = T(e, 0);
					t && (e.stopPropagation(), y.current = {
						from: t.clone(),
						to: t.clone(),
						pointerId: e.pointerId,
						target: is(e)
					}, _(y.current), is(e)?.setPointerCapture?.(e.pointerId), m?.(!0));
				},
				onPointerMove: (e) => {
					let t = y.current;
					if (!t || t.pointerId !== e.pointerId) return;
					e.stopPropagation();
					let n = T(e, 0);
					n && (t.to = n.clone(), _({ ...t }));
				},
				onPointerUp: (e) => {
					y.current?.pointerId === e.pointerId && (e.stopPropagation(), E(!1));
				},
				onPointerCancel: () => E(!0),
				onLostPointerCapture: () => E(!0),
				children: [/* @__PURE__ */ (0, Q.jsx)("planeGeometry", { args: [1e4, 1e4] }), /* @__PURE__ */ (0, Q.jsx)(Wr, {
					visible: !1,
					transparent: !0,
					opacity: 0,
					depthWrite: !1,
					side: 2
				})]
			}),
			g && /* @__PURE__ */ (0, Q.jsxs)("mesh", {
				name: "arrange-marquee-preview",
				raycast: Ur,
				rotation: [
					-Math.PI / 2,
					0,
					0
				],
				position: [
					(g.from.x + g.to.x) / 2,
					.02,
					(g.from.z + g.to.z) / 2
				],
				renderOrder: 40,
				children: [/* @__PURE__ */ (0, Q.jsx)("planeGeometry", { args: [Math.abs(g.to.x - g.from.x), Math.abs(g.to.z - g.from.z)] }), /* @__PURE__ */ (0, Q.jsx)(Wr, {
					color: "#6b896c",
					transparent: !0,
					opacity: .25,
					depthTest: !1,
					depthWrite: !1,
					side: 2
				})]
			}),
			e.map((i) => {
				let o = i.kind === "device" ? r[i.modelId] : n[i.modelId];
				if (!o) return null;
				let f = Qe(i.placement, t), p = Go(i, o, .035), h = a.includes(i.id);
				return /* @__PURE__ */ (0, Q.jsx)("group", {
					name: `furnishing-edit-target-${i.id}`,
					position: f.position,
					rotation: [
						0,
						f.rotationYRadians,
						0
					],
					children: /* @__PURE__ */ (0, Q.jsx)("mesh", {
						position: p.center,
						scale: p.size,
						geometry: w,
						onClick: (e) => {
							e.stopPropagation(), !ns(e) && !ts(e) && !h && c(i.id);
						},
						onPointerDown: (t) => {
							if (t.button !== 0 || ns(t) || ts(t) || b.current || s) return;
							t.stopPropagation(), !ns(t) && !ts(t) && !h && c(i.id);
							let n = T(t, f.position[1]);
							n && (b.current = {
								items: h ? e.filter((e) => a.includes(e.id)) : [i],
								origin: new Y(...f.position),
								active: !1,
								id: i.id,
								elevation: f.position[1],
								offsetX: f.position[0] - n.x,
								offsetZ: f.position[2] - n.z,
								pointerId: t.pointerId,
								startClientX: t.nativeEvent.clientX,
								startClientY: t.nativeEvent.clientY,
								target: is(t)
							}, is(t)?.setPointerCapture?.(t.pointerId));
						},
						onPointerMove: (e) => {
							let a = b.current;
							if (!a || a.id !== i.id || a.pointerId !== e.pointerId) return;
							if (e.stopPropagation(), !a.active) {
								if (Math.hypot(e.nativeEvent.clientX - a.startClientX, e.nativeEvent.clientY - a.startClientY) < es) return;
								a.active = !0, m?.(!0), d?.(i.id);
							}
							let s = T(e, a.elevation);
							if (s) {
								if (a.items.length > 1) {
									let i = s.x + a.offsetX - a.origin.x, o = s.z + a.offsetZ - a.origin.z, c = rs(e) ? i : Math.round(i * 10) / 10, l = rs(e) ? o : Math.round(o * 10) / 10, d = {};
									for (let e of a.items) {
										let i = e.kind === "device" ? r[e.modelId] : n[e.modelId];
										if (!i) continue;
										let [a, , o] = Qe(e.placement, t).position;
										d[e.id] = Ho({
											world: {
												x: a + c,
												z: o + l
											},
											item: e,
											definition: i,
											floor: t,
											raw: !0
										});
									}
									u?.(d);
									return;
								}
								l(i.id, Ho({
									world: {
										x: s.x + a.offsetX,
										z: s.z + a.offsetZ
									},
									item: i,
									definition: o,
									floor: t,
									raw: rs(e)
								}));
							}
						},
						onPointerUp: D,
						onPointerCancel: () => E(!0),
						onLostPointerCapture: () => E(!0),
						renderOrder: 20,
						children: /* @__PURE__ */ (0, Q.jsx)(Zt, {
							color: h ? "#6b896c" : "#ffffff",
							transparent: !0,
							visible: h,
							opacity: h ? .18 : .001,
							depthWrite: !1
						})
					})
				}, i.id);
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-preview/furnish/FurnishingProperties.tsx
var os = [
	"width",
	"height",
	"depth"
], ss = ({ label: e, value: t, disabled: n, onChange: r }) => /* @__PURE__ */ (0, Q.jsxs)("label", { children: [/* @__PURE__ */ (0, Q.jsx)("span", { children: e }), /* @__PURE__ */ (0, Q.jsx)("input", {
	type: "number",
	step: "0.01",
	value: Number(t.toFixed(4)),
	disabled: n,
	onChange: (e) => {
		let t = e.currentTarget.valueAsNumber;
		Number.isFinite(t) && r(t);
	}
})] }), cs = (e) => e.kind === "wall" ? e.rotationOffsetRadians : e.rotationYRadians;
function ls({ selected: e, definition: t, onPlacementChange: n, onSizeChange: r, onLightStateChange: i, onVariantChange: a, onClose: o, floor: s, onWindowFit: c }) {
	let l = (t) => n(e.id, {
		...e.placement,
		...t
	}), u = (n, i) => {
		let a = [...e.size];
		a[n] = i, r(e.id, a, t);
	}, d = s && t.windowFit ? xo(t, s, s.coordinates.origin) : [];
	return /* @__PURE__ */ (0, Q.jsxs)(sr, {
		label: e.kind === "device" ? "Selected device" : "Selected furnishing",
		title: t.label,
		subtitle: t.category,
		onClose: o,
		children: [
			Je(t).length > 1 && a && /* @__PURE__ */ (0, Q.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, Q.jsx)("legend", { children: "Appearance" }), /* @__PURE__ */ (0, Q.jsxs)("label", { children: [/* @__PURE__ */ (0, Q.jsx)("span", { children: "Variant" }), /* @__PURE__ */ (0, Q.jsx)("select", {
				value: be(t, e.variant).id,
				onChange: (n) => a(e.id, n.currentTarget.value, t),
				children: Je(t).map((e) => /* @__PURE__ */ (0, Q.jsx)("option", {
					value: e.id,
					children: e.label
				}, e.id))
			})] })] }),
			t.windowFit && c && /* @__PURE__ */ (0, Q.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, Q.jsx)("legend", { children: "Window" }), /* @__PURE__ */ (0, Q.jsxs)("label", { children: [/* @__PURE__ */ (0, Q.jsx)("span", { children: "Fit to window" }), /* @__PURE__ */ (0, Q.jsxs)("select", {
				value: "",
				disabled: d.length === 0,
				onChange: (n) => {
					let r = d[Number(n.currentTarget.value)];
					r && c(e.id, r.placement, r.size, t);
				},
				children: [/* @__PURE__ */ (0, Q.jsx)("option", {
					value: "",
					children: d.length ? "Choose a window…" : "No suitable window"
				}), d.map((e, t) => /* @__PURE__ */ (0, Q.jsxs)("option", {
					value: t,
					children: [
						e.roomName,
						" · ",
						e.openingId
					]
				}, `${e.openingId}-${t}`))]
			})] })] }),
			e.placement.kind === "absolute" && /* @__PURE__ */ (0, Q.jsxs)("fieldset", { children: [
				/* @__PURE__ */ (0, Q.jsx)("legend", { children: "Position" }),
				/* @__PURE__ */ (0, Q.jsx)(ss, {
					label: "X",
					value: e.placement.at[0],
					onChange: (t) => l({ at: [t, e.placement.kind === "absolute" ? e.placement.at[1] : 0] })
				}),
				/* @__PURE__ */ (0, Q.jsx)(ss, {
					label: "Z",
					value: e.placement.at[1],
					onChange: (t) => l({ at: [e.placement.kind === "absolute" ? e.placement.at[0] : 0, t] })
				}),
				/* @__PURE__ */ (0, Q.jsx)(ss, {
					label: "Elevation",
					value: e.placement.elevationMeters,
					onChange: (e) => l({ elevationMeters: e })
				})
			] }),
			e.placement.kind === "wall" && /* @__PURE__ */ (0, Q.jsxs)("fieldset", { children: [
				/* @__PURE__ */ (0, Q.jsxs)("legend", { children: [
					"Wall support · ",
					e.placement.wallId,
					" · ",
					e.placement.face
				] }),
				/* @__PURE__ */ (0, Q.jsx)(ss, {
					label: "Offset",
					value: e.placement.offsetFromWallStartPlanUnits,
					onChange: (e) => l({ offsetFromWallStartPlanUnits: e })
				}),
				/* @__PURE__ */ (0, Q.jsx)(ss, {
					label: "Elevation",
					value: e.placement.elevationMeters,
					onChange: (e) => l({ elevationMeters: e })
				}),
				/* @__PURE__ */ (0, Q.jsx)(ss, {
					label: "Depth offset",
					value: e.placement.depthOffsetMeters,
					onChange: (e) => l({ depthOffsetMeters: e })
				})
			] }),
			e.placement.kind === "ceiling" && /* @__PURE__ */ (0, Q.jsxs)("fieldset", { children: [
				/* @__PURE__ */ (0, Q.jsxs)("legend", { children: ["Ceiling support · ", e.placement.roomId] }),
				/* @__PURE__ */ (0, Q.jsx)(ss, {
					label: "X",
					value: e.placement.at[0],
					onChange: (t) => l({ at: [t, e.placement.kind === "ceiling" ? e.placement.at[1] : 0] })
				}),
				/* @__PURE__ */ (0, Q.jsx)(ss, {
					label: "Z",
					value: e.placement.at[1],
					onChange: (t) => l({ at: [e.placement.kind === "ceiling" ? e.placement.at[0] : 0, t] })
				}),
				/* @__PURE__ */ (0, Q.jsx)(ss, {
					label: "Drop",
					value: e.placement.dropMeters,
					onChange: (e) => l({ dropMeters: e })
				})
			] }),
			e.kind === "device" && be(t, e.variant).sceneLight !== !1 && e.entitySlots.some((e) => e.deviceRole === "primary" && e.compatibleDomains.includes("light")) && i && /* @__PURE__ */ (0, Q.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, Q.jsx)("legend", { children: "Light" }), /* @__PURE__ */ (0, Q.jsxs)("label", { children: [/* @__PURE__ */ (0, Q.jsx)("span", { children: "State" }), /* @__PURE__ */ (0, Q.jsxs)("select", {
				value: e.lightState ?? "connected",
				onChange: (t) => i(e.id, t.currentTarget.value),
				children: [
					/* @__PURE__ */ (0, Q.jsx)("option", {
						value: "always-off",
						children: "Always off"
					}),
					/* @__PURE__ */ (0, Q.jsx)("option", {
						value: "always-on",
						children: "Always on"
					}),
					/* @__PURE__ */ (0, Q.jsx)("option", {
						value: "night-only",
						children: "Night only"
					}),
					/* @__PURE__ */ (0, Q.jsx)("option", {
						value: "connected",
						children: "Connected"
					})
				]
			})] })] }),
			/* @__PURE__ */ (0, Q.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, Q.jsx)("legend", { children: "Rotation" }), /* @__PURE__ */ (0, Q.jsx)(ss, {
				label: "Degrees",
				value: cs(e.placement) * 180 / Math.PI,
				onChange: (t) => {
					let n = t * Math.PI / 180;
					l(e.placement.kind === "wall" ? { rotationOffsetRadians: n } : { rotationYRadians: n });
				}
			})] }),
			/* @__PURE__ */ (0, Q.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, Q.jsxs)("legend", { children: ["Size · ", t.resizePolicy.kind] }), t.resizePolicy.kind === "uniform" ? /* @__PURE__ */ (0, Q.jsx)(ss, {
				label: "Scale",
				value: e.size[0] / t.defaultSize[0],
				onChange: (n) => r(e.id, t.defaultSize.map((e) => e * n), t)
			}) : os.map((n, r) => {
				let i = t.resizePolicy.kind === "planar" ? n !== "height" : t.resizePolicy.kind === "axes" ? t.resizePolicy.axes.includes(n) : t.resizePolicy.kind === "custom";
				return /* @__PURE__ */ (0, Q.jsx)(ss, {
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
function us({ items: e, selectedId: t, furnishingModels: n, deviceModels: r, floor: i, onWindowFit: a, onPlacementChange: o, onSizeChange: s, onLightStateChange: c, onVariantChange: l, onClose: u }) {
	let d = e.find((e) => e.id === t), f = d && (d.kind === "device" ? r : n)[d.modelId];
	return d && f ? /* @__PURE__ */ (0, Q.jsx)(ls, {
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
var ds = (0, Z.memo)(function({ floor: e }) {
	return /* @__PURE__ */ (0, Q.jsx)("group", {
		name: "arrange-plan-openings",
		children: e.openings.map((t) => {
			if (t.kind !== "door") return null;
			let n = e.walls.find((e) => e.id === t.wallId);
			if (!n) return null;
			let r = tt(n, t, e.coordinates);
			return /* @__PURE__ */ (0, Q.jsx)("group", {
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
				children: Tr(t, r.widthMeters, n.thicknessMeters).map((e, t) => /* @__PURE__ */ (0, Q.jsx)(Kr, {
					...e,
					overlay: !0
				}, t))
			}, t.id);
		})
	});
});
//#endregion
//#region apps/web/src/editor-workspace/EditorSelectionDetails.tsx
function fs({ mode: e, editingLocked: t, publishOpen: n, previewOpen: r, constructEditor: i, dragging: a, placementFloor: o, furnishingModels: s, deviceModels: c, marqueeSelecting: l, selectedOpening: u, detailsOpeningId: d, setDetailsOpeningId: f, visualSceneItems: p, furnishingEditor: m, selectedItem: h, detailsItemId: g, setDetailsItemId: _, arrangeAnnouncement: v, pendingRoomPaintId: y, confirmRoomPaint: b, setPendingRoomPaintId: x }) {
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		e === "furnish" && h && g === h.id && /* @__PURE__ */ (0, Q.jsx)("div", {
			inert: t || n || r,
			children: /* @__PURE__ */ (0, Q.jsx)(us, {
				items: p,
				selectedId: m.selectedId,
				floor: o,
				onWindowFit: (e, t, n, r) => {
					m.beginTransaction(), m.updatePlacement(e, t), m.updateSize(e, n, r), m.commitTransaction();
				},
				furnishingModels: s,
				deviceModels: c,
				onPlacementChange: m.updatePlacement,
				onSizeChange: m.updateSize,
				onLightStateChange: m.updateLightState,
				onVariantChange: m.updateVariant,
				onClose: () => _(null)
			})
		}),
		e === "construct" && !l && u && d === u.id && /* @__PURE__ */ (0, Q.jsx)("div", {
			inert: t || n || r,
			children: /* @__PURE__ */ (0, Q.jsx)(Er, {
				opening: u,
				editor: i,
				disabled: a || t,
				onClose: () => f(null)
			}, u.id)
		}),
		/* @__PURE__ */ (0, Q.jsx)("div", {
			className: "arrange-announcement",
			role: "status",
			children: v
		}),
		y && (() => {
			let e = i.previewFloor.rooms.find((e) => e.id === y);
			return e ? /* @__PURE__ */ (0, Q.jsx)(aa, {
				roomName: e.name || "this room",
				onKeepZones: () => b(!1),
				onReplaceEverything: () => b(!0),
				onCancel: () => x(null)
			}) : null;
		})()
	] });
}
//#endregion
//#region apps/web/src/custom-models/ModelImportPreview.tsx
function ps({ root: e, normalization: t, light: n }) {
	let r = Math.max(...t.size), i = (0, Z.useMemo)(() => t.bounds.min.map((e, n) => -(e + t.bounds.max[n]) / 2), [t]);
	return /* @__PURE__ */ (0, Q.jsx)("div", {
		className: "model-import-preview",
		"aria-label": "3D model preview",
		children: /* @__PURE__ */ (0, Q.jsxs)(me, {
			frameloop: "demand",
			camera: {
				fov: 40,
				position: [
					r * 1.8,
					r * 1.4,
					r * 2
				],
				near: Math.max(.001, r / 1e3),
				far: Math.max(100, r * 20)
			},
			children: [
				/* @__PURE__ */ (0, Q.jsx)("ambientLight", { intensity: .8 }),
				/* @__PURE__ */ (0, Q.jsx)("hemisphereLight", { args: [
					"#f4f5ff",
					"#7a7166",
					2
				] }),
				/* @__PURE__ */ (0, Q.jsx)("directionalLight", {
					position: [
						4,
						6,
						5
					],
					intensity: 3
				}),
				/* @__PURE__ */ (0, Q.jsx)(Rn, {
					fit: !0,
					clip: !0,
					observe: !0,
					margin: 1.4,
					children: /* @__PURE__ */ (0, Q.jsxs)("group", {
						position: i,
						children: [/* @__PURE__ */ (0, Q.jsx)("group", {
							position: t.offset,
							children: /* @__PURE__ */ (0, Q.jsx)("group", {
								rotation: t.rotation,
								scale: t.scale,
								children: /* @__PURE__ */ (0, Q.jsx)("primitive", {
									object: e,
									dispose: null
								})
							})
						}), n && /* @__PURE__ */ (0, Q.jsxs)("group", {
							position: n.position,
							children: [/* @__PURE__ */ (0, Q.jsxs)("mesh", { children: [/* @__PURE__ */ (0, Q.jsx)("sphereGeometry", { args: [
								Math.max(.015, r * .025),
								12,
								8
							] }), /* @__PURE__ */ (0, Q.jsx)("meshBasicMaterial", { color: n.color })] }), /* @__PURE__ */ (0, Q.jsx)("pointLight", {
								color: n.color,
								intensity: n.maxIntensity,
								distance: n.distance
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(Mn, {
					makeDefault: !0,
					enablePan: !1
				})
			]
		})
	});
}
//#endregion
//#region apps/web/src/custom-models/ModelImportDialog.tsx
function ms({ file: e, onImport: t, onCancel: n }) {
	let r = Ht(), i = (0, Z.useRef)(null), a = (0, Z.useId)(), [o] = (0, Z.useState)(() => `custom:${rn()}`), [s, c] = (0, Z.useState)(null), [l, u] = (0, Z.useState)(null), [d, f] = (0, Z.useState)(!1), [p, m] = (0, Z.useState)(e.name.replace(/\.glb$/i, "")), [h, g] = (0, Z.useState)("floor"), [_, v] = (0, Z.useState)("furniture"), [y, b] = (0, Z.useState)([
		0,
		0,
		0
	]), [S, C] = (0, Z.useState)(1), [w, T] = (0, Z.useState)([
		0,
		0,
		0
	]), [E, D] = (0, Z.useState)("#ffe3b4"), [O, k] = (0, Z.useState)(2), [A, j] = (0, Z.useState)(5);
	(0, Z.useEffect)(() => {
		let e = r.root.activeElement;
		return i.current?.showModal?.(), () => {
			e?.isConnected && e.focus();
		};
	}, [r]), (0, Z.useEffect)(() => {
		let t = !0, n;
		return (async () => {
			let r = new Uint8Array(await e.arrayBuffer());
			n = await at(r), t ? c(n) : n.release();
		})().catch((e) => {
			t && u(e instanceof Error ? e.message : "Could not read this GLB. Choose another file.");
		}), () => {
			t = !1, n && n.release();
		};
	}, [e]);
	let M = (0, Z.useMemo)(() => s ? zn(s.root, h, y, S) : null, [
		s,
		h,
		y,
		S
	]), N = _ === "light" ? {
		position: w,
		color: E,
		maxIntensity: O,
		distance: A
	} : void 0, P = p.trim() && s && M && S > 0, F = (e, t, n) => e.map((e, r) => r === t ? n : e);
	return /* @__PURE__ */ (0, Q.jsx)("dialog", {
		ref: i,
		className: "model-import-dialog",
		"aria-labelledby": a,
		onCancel: (e) => {
			e.preventDefault(), d || n();
		},
		children: /* @__PURE__ */ (0, Q.jsxs)("form", {
			onSubmit: (e) => {
				if (e.preventDefault(), !P || !s || !M || d) return;
				f(!0), u(null);
				let { bytes: n, ...r } = s.asset;
				t({
					id: o,
					name: p.trim(),
					placement: h,
					profile: _,
					asset: r,
					normalization: M,
					complexity: s.complexity,
					...N ? { light: N } : {}
				}, s.asset).catch((e) => u(e instanceof Error ? e.message : "Could not save the model. Try again.")).finally(() => f(!1));
			},
			children: [
				/* @__PURE__ */ (0, Q.jsxs)("header", { children: [/* @__PURE__ */ (0, Q.jsx)("h2", {
					id: a,
					children: "Import GLB"
				}), /* @__PURE__ */ (0, Q.jsx)($, {
					"aria-label": "Close import",
					disabled: d,
					onClick: n,
					children: /* @__PURE__ */ (0, Q.jsx)(X, { name: "close" })
				})] }),
				s && M ? /* @__PURE__ */ (0, Q.jsx)(ps, {
					root: s.root,
					normalization: M,
					light: N
				}) : !l && /* @__PURE__ */ (0, Q.jsx)("p", {
					role: "status",
					children: "Reading model…"
				}),
				/* @__PURE__ */ (0, Q.jsxs)("fieldset", {
					disabled: d,
					className: "model-import-fields",
					children: [
						/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Name", /* @__PURE__ */ (0, Q.jsx)("input", {
							autoFocus: !0,
							required: !0,
							value: p,
							onChange: (e) => m(e.target.value)
						})] }),
						/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Preferred placement", /* @__PURE__ */ (0, Q.jsxs)("select", {
							"aria-label": "Preferred placement",
							value: h,
							onChange: (e) => g(e.target.value),
							children: [
								/* @__PURE__ */ (0, Q.jsx)("option", {
									value: "floor",
									children: "Floor"
								}),
								/* @__PURE__ */ (0, Q.jsx)("option", {
									value: "wall",
									children: "Wall"
								}),
								/* @__PURE__ */ (0, Q.jsx)("option", {
									value: "ceiling",
									children: "Ceiling"
								})
							]
						})] }),
						/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Profile", /* @__PURE__ */ (0, Q.jsx)("select", {
							"aria-label": "Profile",
							value: _,
							onChange: (e) => {
								v(e.target.value), M && T([
									0,
									(M.bounds.min[1] + M.bounds.max[1]) / 2,
									M.bounds.max[2]
								]);
							},
							children: x.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)("option", {
								value: e,
								children: t
							}, e))
						})] })
					]
				}),
				M && /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("fieldset", {
					disabled: d,
					className: "model-import-vectors",
					children: [/* @__PURE__ */ (0, Q.jsx)("legend", { children: "Dimensions (m) · uniform scale" }), [
						"Width",
						"Height",
						"Depth"
					].map((e, t) => /* @__PURE__ */ (0, Q.jsxs)("label", { children: [e, /* @__PURE__ */ (0, Q.jsx)("input", {
						type: "number",
						min: "0.001",
						step: "any",
						required: !0,
						value: Number(M.size[t].toFixed(4)),
						onChange: (e) => {
							let n = Number(e.target.value);
							n > 0 && Number.isFinite(n) && C(S * n / M.size[t]);
						}
					})] }, e))]
				}), /* @__PURE__ */ (0, Q.jsxs)("fieldset", {
					disabled: d,
					className: "model-import-vectors",
					children: [/* @__PURE__ */ (0, Q.jsx)("legend", { children: "Orientation (degrees)" }), [
						"X",
						"Y",
						"Z"
					].map((e, t) => /* @__PURE__ */ (0, Q.jsxs)("label", { children: [e, /* @__PURE__ */ (0, Q.jsx)("input", {
						type: "number",
						step: "any",
						value: Number((y[t] * 180 / Math.PI).toFixed(2)),
						onChange: (e) => {
							let n = Number(e.target.value);
							Number.isFinite(n) && b(F(y, t, n * Math.PI / 180));
						}
					})] }, e))]
				})] }),
				N && /* @__PURE__ */ (0, Q.jsxs)("fieldset", {
					disabled: d,
					className: "model-import-vectors",
					children: [
						/* @__PURE__ */ (0, Q.jsx)("legend", { children: "Light source · position in metres" }),
						[
							"Light X",
							"Light Y",
							"Light Z"
						].map((e, t) => /* @__PURE__ */ (0, Q.jsxs)("label", { children: [e, /* @__PURE__ */ (0, Q.jsx)("input", {
							type: "number",
							step: "any",
							value: w[t],
							onChange: (e) => {
								let n = Number(e.target.value);
								Number.isFinite(n) && T(F(w, t, n));
							}
						})] }, e)),
						/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Color", /* @__PURE__ */ (0, Q.jsx)("input", {
							type: "color",
							value: E,
							onChange: (e) => D(e.target.value)
						})] }),
						/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Intensity", /* @__PURE__ */ (0, Q.jsx)("input", {
							type: "number",
							min: "0",
							step: "0.1",
							required: !0,
							value: O,
							onChange: (e) => k(Number(e.target.value))
						})] }),
						/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Range (m)", /* @__PURE__ */ (0, Q.jsx)("input", {
							type: "number",
							min: "0",
							step: "0.1",
							required: !0,
							value: A,
							onChange: (e) => j(Number(e.target.value))
						})] })
					]
				}),
				s && /* @__PURE__ */ (0, Q.jsxs)("p", {
					className: "model-import-hint",
					children: [
						s.complexity.triangles.toLocaleString("en"),
						" triangles ·",
						" ",
						s.complexity.visibleMeshes,
						" meshes. Original materials and textures are preserved."
					]
				}),
				s?.notices.map((e) => /* @__PURE__ */ (0, Q.jsx)("p", {
					className: "model-import-hint",
					children: e
				}, e)),
				_ !== "furniture" && _ !== "light" && /* @__PURE__ */ (0, Q.jsxs)("p", {
					className: "model-import-hint",
					children: [
						"Geometry stays static. Connect uses the existing",
						" ",
						x.find(([e]) => e === _)?.[1],
						" controls."
					]
				}),
				l && /* @__PURE__ */ (0, Q.jsx)("p", {
					role: "alert",
					className: "catalog-add-error",
					children: l
				}),
				/* @__PURE__ */ (0, Q.jsxs)("footer", { children: [/* @__PURE__ */ (0, Q.jsx)($, {
					disabled: d,
					onClick: n,
					children: "Cancel"
				}), /* @__PURE__ */ (0, Q.jsx)($, {
					type: "submit",
					variant: "primary",
					disabled: !P || d,
					children: d ? "Importing…" : "Add to My models"
				})] })
			]
		})
	});
}
//#endregion
//#region .agents/skills/create-cabane-model/SKILL.md?raw
var hs = "---\nname: create-cabane-model\ndescription: Create a self-contained GLB furniture or device model for import into hosted Cabane. Use for a personal chair, table, appliance, lamp, sensor, camera, or other visible object, with Blender or Three.js. Works independently of the Cabane repository.\n---\n\n# Create a Cabane model\n\nProduce a standard GLB 2.0 file that the user can import through Arrange → Import GLB.\nUse the user's description and reference images to establish shape and real dimensions.\nAsk only for missing information that materially changes the model. State inferred dimensions.\n\nRecommend Cabane's simplified proportions, warm restrained palette and matte finishes by\ndefault. Follow an explicitly requested alternative style, including realistic PBR and textures.\nStyle is optional. Preserve useful detail at the scale the object occupies in a room.\n\n## Deliver\n\n- One self-contained `.glb`, with embedded buffers and images, in metres.\n- A short handoff with dimensions, the suggested Floor / Wall / Ceiling support and an\n  existing device profile, or Furniture. These are chosen in Cabane; no extra manifest is needed.\n- Run `python3 scripts/validate_glb.py model.glb` and report its result.\n- Ask the user to inspect the file in Cabane's import preview, correct size/orientation if\n  needed, then add it to My models. For a Light, configure its light point in the preview.\n\nThe file must fit 10 MiB, 100,000 triangles and 128 mesh primitives/scene occurrences.\nCabane allows 100 MiB of distinct assets per house. Use modest embedded PNG/JPEG textures.\nUse triangle meshes, standard glTF PBR or unlit materials and a default scene.\nAvoid Draco, KTX2 and required extensions outside the list in [export.md](references/export.md).\nUse static initial geometry: Cabane ignores embedded animations, cameras and lights.\nFor a lamp, model its shade/bulb; Cabane adds the controlled light independently.\n\nUse local modelling tools available to the user. [export.md](references/export.md) describes\nunits, contact conventions and all profiles. Adapt the independent examples:\n\n- `examples/blender.py`: run with Blender's background Python interface.\n- `examples/three.mjs`: run with Node and Three.js installed in a local modelling folder.\n\nReference photos remain inputs. Do not include photos, HA entity IDs, connection data or\ncredentials in the GLB or handoff. Remind the user that their agent provider may process\nthe supplied references. Deliver only the model and necessary modelling source.\n", gs = "# Export conventions\n\nGLB 2.0 is the only model format required by Cabane. The name, support and profile are\nentered in the app. Each import creates a separate model; multiple models may share the\nsame immutable file. Furniture and device instances can be placed, uniformly resized,\nrotated, duplicated and saved like native items.\n\nUse metres. glTF uses right-handed coordinates: +Y up, +X right, front toward +Z.\nBlender's glTF exporter converts its +Z-up coordinates automatically.\n\nThe preview computes an envelope after your orientation correction and normalizes contact:\n\n| Support | Contact origin                                       |\n| ------- | ---------------------------------------------------- |\n| Floor   | Bottom at Y=0, centred on X/Z                        |\n| Wall    | Back at Z=0, centred on X/Y; model extends toward +Z |\n| Ceiling | Top at Y=0, centred on X/Z; model extends toward −Y  |\n\nOrigins in the source file need not match these conventions. Check the preview after\nnormalization. Width, height and depth corrections all apply a uniform scale. Floor objects\nhave a simple envelope collision, rather than a detailed walkable interior.\n\n## Materials and files\n\nKeep the object's original glTF PBR or unlit materials. Embedded textures are allowed.\nExport meshes and embedded PNG/JPEG/WebP images into a single GLB. External image,\nbuffer, URL and data-URI references are rejected. Cabane does not play animations or\nimport scene cameras/lights. Export the desired rest pose and apply modifiers first.\n\nCabane accepts these required extensions: KHR_materials_unlit, KHR_materials_clearcoat,\nKHR_materials_transmission, KHR_materials_ior, KHR_materials_specular, KHR_materials_sheen,\nKHR_materials_volume, KHR_materials_emissive_strength, KHR_materials_iridescence,\nKHR_materials_anisotropy, KHR_materials_dispersion, KHR_texture_transform,\nKHR_mesh_quantization, KHR_lights_punctual, EXT_texture_webp,\nEXT_mesh_gpu_instancing. Required Meshopt, Draco and KTX2 compression are unsupported;\nexport without them. Prefer the plain format for portability.\n\nLimits: 10 MiB/file, 100 MiB distinct assets/house, 100,000 rendered triangles/model and\n128 mesh primitives/model. Instanced triangles count for every visible occurrence.\nThe local validator checks the container and declared geometry; Cabane also checks decoded\ngeometry, materials, bounds and successful loading in the preview.\n\n## Profiles\n\nChoose Furniture for an object without a connected function. Existing HA profiles are\nLight, Sensor, Binary sensor, Camera, Cover, Switch, Toggle (input_boolean), Climate, Fan,\nMedia player, Humidifier, Water heater, Vacuum, Lock, Alarm, Valve, Siren, Select, Number,\nand Button. Cabane creates one fresh primary connection slot per device instance.\n\nLight adds an independently configured point light, controlled by availability, brightness,\ncolour and the app's light-state rules. Camera opens the existing viewer. Other profiles use\nexisting controls and retain static geometry, including Cover. Choosing a profile does not\nconnect to HA; mapping happens privately in Cabane after authentication.\n\n## Run the examples\n\nBlender (installed locally):\n\n```sh\nblender --background --python examples/blender.py -- desk.glb\npython3 scripts/validate_glb.py desk.glb\n```\n\nThree.js (Node 20 or newer, in a local modelling folder):\n\n```sh\nnpm install --no-save three@0.182.0\nnode examples/three.mjs desk.glb\npython3 scripts/validate_glb.py desk.glb\n```\n\nIn Cabane, open Arrange → Import GLB, choose the file, review it from multiple angles,\nenter its name/support/profile, and add it. Save the home and export a `.cabane` archive\nto transfer the design and its deduplicated GLB files together.\n", _s = "\"\"\"Standalone Blender example; no Cabane repository or HA data required.\"\"\"\n\nimport sys\nimport bpy\n\nbpy.ops.object.select_all(action=\"SELECT\")\nbpy.ops.object.delete(use_global=False)\n\n\ndef material(name, color):\n    result = bpy.data.materials.new(name)\n    result.use_nodes = True\n    shader = result.node_tree.nodes.get(\"Principled BSDF\")\n    shader.inputs[\"Base Color\"].default_value = (*color, 1)\n    shader.inputs[\"Roughness\"].default_value = 0.85\n    return result\n\n\nwood = material(\"Warm oak\", (0.50, 0.30, 0.14))\nframe = material(\"Sage frame\", (0.11, 0.16, 0.11))\n\n\ndef box(name, size, at, finish):\n    bpy.ops.mesh.primitive_cube_add(size=1, location=at)\n    obj = bpy.context.object\n    obj.name = name\n    obj.dimensions = size\n    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)\n    obj.data.materials.append(finish)\n\n\n# Blender is Z-up. The exporter emits glTF Y-up in metres.\nbox(\"Desktop\", (1.2, 0.65, 0.05), (0, 0, 0.725), wood)\nfor x in (-0.52, 0.52):\n    for y in (-0.25, 0.25):\n        box(\"Leg\", (0.055, 0.055, 0.7), (x, y, 0.35), frame)\n\nbpy.context.scene.unit_settings.system = \"METRIC\"\nbpy.context.scene.unit_settings.scale_length = 1\nargs = sys.argv[sys.argv.index(\"--\") + 1 :] if \"--\" in sys.argv else []\noutput = args[0] if args else \"desk.glb\"\nbpy.ops.export_scene.gltf(\n    filepath=output,\n    export_format=\"GLB\",\n    export_animations=False,\n    export_cameras=False,\n    export_lights=False,\n    export_yup=True,\n)\nprint(f\"Saved {output}: 1.20 × 0.75 × 0.65 m, Floor, Furniture.\")\n", vs = "import * as THREE from \"three\";\nimport { GLTFExporter } from \"three/addons/exporters/GLTFExporter.js\";\nimport { writeFile } from \"node:fs/promises\";\n\n// GLTFExporter uses the browser FileReader API. This minimal Node adapter only\n// reads exporter-created Blobs; it performs no network or application calls.\nglobalThis.FileReader = class {\n  result = null;\n  onloadend = null;\n  readAsArrayBuffer(blob) {\n    blob.arrayBuffer().then((value) => {\n      this.result = value;\n      this.onloadend?.();\n    });\n  }\n  readAsDataURL(blob) {\n    blob.arrayBuffer().then((value) => {\n      this.result = `data:${blob.type};base64,${Buffer.from(value).toString(\"base64\")}`;\n      this.onloadend?.();\n    });\n  }\n};\n\nconst desk = new THREE.Group();\ndesk.name = \"Warm oak desk\";\nconst wood = new THREE.MeshStandardMaterial({ color: \"#bc9368\", roughness: 0.85, metalness: 0 });\nconst frame = new THREE.MeshStandardMaterial({\n  color: \"#5e705e\",\n  roughness: 0.75,\n  metalness: 0.05,\n});\nfunction box(name, size, position, material) {\n  const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), material);\n  mesh.name = name;\n  mesh.position.set(...position);\n  desk.add(mesh);\n}\nbox(\"Desktop\", [1.2, 0.05, 0.65], [0, 0.725, 0], wood);\nfor (const x of [-0.52, 0.52])\n  for (const z of [-0.25, 0.25]) box(\"Leg\", [0.055, 0.7, 0.055], [x, 0.35, z], frame);\ndesk.updateMatrixWorld(true);\nconst buffer = await new GLTFExporter().parseAsync(desk, {\n  binary: true,\n  onlyVisible: true,\n  animations: [],\n});\nconst output = process.argv[2] ?? \"desk.glb\";\nawait writeFile(output, new Uint8Array(buffer));\nconsole.log(`Saved ${output}: 1.20 × 0.75 × 0.65 m, Floor, Furniture.`);\n", ys = "\"\"\"Validate a standalone Cabane GLB using only the Python standard library.\"\"\"\n\nimport hashlib\nimport json\nimport struct\nimport sys\nfrom pathlib import Path\n\nSUPPORTED = set(\n    \"KHR_materials_unlit KHR_materials_clearcoat KHR_materials_transmission KHR_materials_ior KHR_materials_specular KHR_materials_sheen KHR_materials_volume KHR_materials_emissive_strength KHR_materials_iridescence KHR_materials_anisotropy KHR_materials_dispersion KHR_texture_transform KHR_mesh_quantization KHR_lights_punctual EXT_texture_webp EXT_mesh_gpu_instancing\".split()\n)\n\n\ndef validate(path):\n    if Path(path).stat().st_size > 10 * 1024 * 1024:\n        raise ValueError(\"GLB must fit 10 MiB.\")\n    data = Path(path).read_bytes()\n    if not 20 <= len(data) <= 10 * 1024 * 1024:\n        raise ValueError(\"GLB must fit 10 MiB and contain a complete header.\")\n    if struct.unpack_from(\"<III\", data) != (0x46546C67, 2, len(data)):\n        raise ValueError(\"Expected a GLB 2.0 container.\")\n    offset, document, binary_size = 12, None, 0\n    while offset < len(data):\n        size, kind = struct.unpack_from(\"<II\", data, offset)\n        if size % 4 or offset + 8 + size > len(data):\n            raise ValueError(\"Invalid chunk length.\")\n        if offset == 12 and kind != 0x4E4F534A:\n            raise ValueError(\"The first chunk must be JSON.\")\n        if kind == 0x4E4F534A:\n            if document is not None:\n                raise ValueError(\"Duplicate JSON chunk.\")\n            document = json.loads(data[offset + 8 : offset + 8 + size])\n        elif kind == 0x004E4942:\n            if binary_size:\n                raise ValueError(\"Duplicate binary chunk.\")\n            binary_size = size\n        offset += 8 + size\n    if not document or document.get(\"asset\", {}).get(\"version\") != \"2.0\":\n        raise ValueError(\"Expected glTF 2.0 metadata.\")\n\n    def inspect(value, depth=0):\n        if depth > 64:\n            raise ValueError(\"Excessive nesting.\")\n        if isinstance(value, dict):\n            for key, child in value.items():\n                if key in (\"uri\", \"url\") and isinstance(child, str):\n                    raise ValueError(\n                        \"Embed every buffer and image; external references are rejected.\"\n                    )\n                inspect(child, depth + 1)\n        elif isinstance(value, list):\n            for child in value:\n                inspect(child, depth + 1)\n\n    inspect(document)\n    unsupported = set(document.get(\"extensionsRequired\", [])) - SUPPORTED\n    if unsupported:\n        raise ValueError(\n            f\"Unsupported required extensions: {', '.join(sorted(unsupported))}\"\n        )\n    if set(document.get(\"extensionsRequired\", [])) - set(\n        document.get(\"extensionsUsed\", [])\n    ):\n        raise ValueError(\"Required extensions must also be declared in extensionsUsed.\")\n    buffers = document.get(\"buffers\", [])\n    if (\n        len(buffers) != 1\n        or not binary_size - 3 <= buffers[0][\"byteLength\"] <= binary_size\n    ):\n        raise ValueError(\"Expected one embedded binary buffer.\")\n    for image in document.get(\"images\", []):\n        if \"bufferView\" not in image or image.get(\"mimeType\") not in (\n            \"image/png\",\n            \"image/jpeg\",\n            \"image/webp\",\n        ):\n            raise ValueError(\"Expected embedded PNG/JPEG/WebP images.\")\n    for view in document.get(\"bufferViews\", []):\n        if (\n            view.get(\"buffer\") != 0\n            or view.get(\"byteOffset\", 0) < 0\n            or view[\"byteLength\"] < 0\n            or view.get(\"byteOffset\", 0) + view[\"byteLength\"] > binary_size\n        ):\n            raise ValueError(\"A buffer view is outside the embedded file.\")\n    triangles, meshes = 0, 0\n    active = set()\n    visited = set()\n\n    def visit(index, depth=0):\n        nonlocal triangles, meshes\n        if index in active or depth > 64:\n            raise ValueError(\"Scene cycle or excessive nesting.\")\n        if index in visited:\n            raise ValueError(\"Scene nodes cannot have multiple parents.\")\n        visited.add(index)\n        active.add(index)\n        node = document[\"nodes\"][index]\n        if \"mesh\" in node:\n            instancing = node.get(\"extensions\", {}).get(\"EXT_mesh_gpu_instancing\")\n            count = (\n                document[\"accessors\"][next(iter(instancing[\"attributes\"].values()))][\n                    \"count\"\n                ]\n                if instancing\n                else 1\n            )\n            for primitive in document[\"meshes\"][node[\"mesh\"]][\"primitives\"]:\n                if primitive.get(\"mode\", 4) != 4:\n                    raise ValueError(\"Export triangle meshes.\")\n                accessor = primitive.get(\"indices\", primitive[\"attributes\"][\"POSITION\"])\n                vertices = document[\"accessors\"][accessor][\"count\"]\n                if vertices <= 0 or vertices % 3:\n                    raise ValueError(\"Invalid triangle count.\")\n                triangles += vertices // 3 * count\n                meshes += 1\n                if triangles > 100_000 or meshes > 128:\n                    raise ValueError(\n                        \"Limit: 100,000 triangles and 128 mesh primitives.\"\n                    )\n        for child in node.get(\"children\", []):\n            visit(child, depth + 1)\n        active.remove(index)\n\n    for node in document[\"scenes\"][document.get(\"scene\", 0)][\"nodes\"]:\n        visit(node)\n    if not meshes:\n        raise ValueError(\"No triangle meshes in the default scene.\")\n    print(\n        f\"OK: {len(data)} bytes, {triangles} triangles, {meshes} meshes; SHA-256 {hashlib.sha256(data).hexdigest()}\"\n    )\n    if document.get(\"animations\"):\n        print(\"Cabane shows the initial pose and ignores animations.\")\n    print(\n        \"Next: inspect dimensions, support contact and materials in Cabane → Arrange → Import GLB.\"\n    )\n\n\nif __name__ == \"__main__\":\n    try:\n        validate(sys.argv[1])\n    except (\n        ValueError,\n        KeyError,\n        IndexError,\n        TypeError,\n        OSError,\n        struct.error,\n    ) as error:\n        print(f\"Invalid GLB: {error}\", file=sys.stderr)\n        sys.exit(1)\n";
//#endregion
//#region apps/web/src/custom-models/ai-skill-download.ts
async function bs() {
	jn(cn({
		"create-cabane-model/SKILL.md": hs,
		"create-cabane-model/references/export.md": gs,
		"create-cabane-model/examples/blender.py": _s,
		"create-cabane-model/examples/three.mjs": vs,
		"create-cabane-model/scripts/validate_glb.py": ys
	}), "create-cabane-model.zip", "application/zip");
}
//#endregion
//#region apps/web/src/custom-models/CustomModelLibrary.tsx
function xs({ workspace: e, disabled: t, onBrowse: n }) {
	let r = (0, Z.useRef)(null), [i, a] = (0, Z.useState)(null), [o, s] = (0, Z.useState)(null), [c, l] = (0, Z.useState)(null), u = e.snapshot.project.customModels ?? [], d = (t) => e.commit({
		...e.snapshot,
		project: {
			...e.snapshot.project,
			customModels: t
		}
	});
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "custom-model-library",
		children: [
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "custom-model-actions",
				children: [/* @__PURE__ */ (0, Q.jsx)($, {
					disabled: t,
					onClick: () => r.current?.click(),
					children: "Import GLB"
				}), /* @__PURE__ */ (0, Q.jsx)($, {
					disabled: t,
					onClick: () => {
						bs().catch(() => s("Could not download the skill. Try again."));
					},
					children: "Download AI skill"
				})]
			}),
			/* @__PURE__ */ (0, Q.jsx)("input", {
				ref: r,
				type: "file",
				accept: ".glb,model/gltf-binary",
				hidden: !0,
				onChange: (e) => {
					let t = e.target.files?.[0];
					e.target.value = "", s(null), t && t.size > K.fileBytes ? s("GLB files must be at most 10 MiB.") : t && a(t);
				}
			}),
			/* @__PURE__ */ (0, Q.jsxs)("details", {
				className: "custom-model-management",
				children: [
					/* @__PURE__ */ (0, Q.jsxs)("summary", { children: [
						"Manage My models (",
						u.length,
						")"
					] }),
					!u.length && /* @__PURE__ */ (0, Q.jsx)("p", { children: "Generate a GLB with your own AI, then import it here." }),
					u.map((n) => /* @__PURE__ */ (0, Q.jsx)("div", {
						className: "custom-model-row",
						children: c?.id === n.id ? /* @__PURE__ */ (0, Q.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault(), c.name.trim() && (d(u.map((e) => e.id === n.id ? {
									...e,
									name: c.name.trim()
								} : e)), l(null));
							},
							children: [
								/* @__PURE__ */ (0, Q.jsx)("input", {
									"aria-label": "Model name",
									required: !0,
									autoFocus: !0,
									value: c.name,
									onChange: (e) => l({
										...c,
										name: e.target.value
									})
								}),
								/* @__PURE__ */ (0, Q.jsx)($, {
									type: "submit",
									children: "Rename"
								}),
								/* @__PURE__ */ (0, Q.jsx)($, {
									onClick: () => l(null),
									children: "Cancel"
								})
							]
						}) : /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("strong", { children: n.name }), /* @__PURE__ */ (0, Q.jsxs)("div", { children: [
							/* @__PURE__ */ (0, Q.jsx)($, {
								variant: "text",
								disabled: t,
								onClick: () => l({
									id: n.id,
									name: n.name
								}),
								children: "Rename"
							}),
							/* @__PURE__ */ (0, Q.jsx)($, {
								variant: "text",
								disabled: t,
								onClick: () => {
									M(window.indexedDB).verify([n.asset]).then(([e]) => jn(e.bytes, `${n.name.replace(/[^a-z0-9-]/gi, "_")}.glb`, "model/gltf-binary")).catch((e) => s(e instanceof Error ? e.message : "Could not download this model."));
								},
								children: "Download GLB"
							}),
							/* @__PURE__ */ (0, Q.jsx)($, {
								variant: "text",
								disabled: t || e.snapshot.project.sceneItems.some((e) => e.modelId === n.id),
								title: e.snapshot.project.sceneItems.some((e) => e.modelId === n.id) ? "Remove this model's instances first." : "Remove unused model",
								onClick: () => d(u.filter((e) => e.id !== n.id)),
								children: "Delete"
							})
						] })] })
					}, n.id))
				]
			}),
			o && /* @__PURE__ */ (0, Q.jsx)("p", {
				role: "alert",
				className: "catalog-add-error",
				children: o
			}),
			i && /* @__PURE__ */ (0, Q.jsx)(ms, {
				file: i,
				onCancel: () => a(null),
				onImport: async (t, r) => {
					let i = new Map(e.modelAssetReferences.map((e) => [e.sha256, e.byteLength]));
					if (i.set(r.sha256, r.byteLength), [...i.values()].reduce((e, t) => e + t, 0) > K.homeBytes) throw Error("This house and its active history exceed 100 MiB of distinct assets. Save and reopen the editor before importing more.");
					if (await _([r]), d([...u.filter((e) => e.id !== t.id), t]), (await e.flush()).status !== "saved") throw Error("Could not save the model. Your draft is kept in memory. Try again.");
					a(null), n();
				}
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-chrome/EditorModeIntroduction.tsx
var Ss = {
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
		description: "Customize the action bar on Home with your favorite actions, rooms, devices, scenes and scripts."
	}
};
function Cs({ mode: e }) {
	let { title: t, description: n } = Ss[e];
	return /* @__PURE__ */ (0, Q.jsxs)("header", {
		className: "editor-mode-introduction",
		children: [/* @__PURE__ */ (0, Q.jsx)("h2", { children: t }), /* @__PURE__ */ (0, Q.jsx)("p", { children: n })]
	});
}
//#endregion
//#region apps/web/src/editor-onboarding/BuildTutorial.tsx
var ws = {
	reference: [
		"Add a reference plan",
		"Have a floor plan? Add an image, set its scale, then trace it. You can also skip this and draw from scratch.",
		"Add image"
	],
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
function Ts({ state: e, mode: t, disabled: n, warning: r, onAction: i, onSkip: a, onDismiss: o }) {
	let [s, c, l] = ws[e.step];
	return /* @__PURE__ */ (0, Q.jsxs)("section", {
		className: "build-tutorial",
		"aria-label": "Build your first room",
		children: [
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "build-tutorial__heading",
				children: [/* @__PURE__ */ (0, Q.jsx)("span", { children: e.step === "reference" ? "Before you start · Optional" : `Getting started · ${F.indexOf(e.step)} of ${F.length - 1}` }), /* @__PURE__ */ (0, Q.jsx)("button", {
					type: "button",
					"aria-label": "Dismiss tutorial",
					title: "Dismiss tutorial",
					onClick: o,
					children: "×"
				})]
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				"aria-live": "polite",
				"aria-atomic": "true",
				children: [/* @__PURE__ */ (0, Q.jsx)("h2", { children: s }), /* @__PURE__ */ (0, Q.jsx)("p", { children: c })]
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "build-tutorial__actions",
				children: [/* @__PURE__ */ (0, Q.jsx)($, {
					variant: "primary",
					type: "button",
					disabled: n,
					onClick: i,
					children: e.step === "arrange" && t === "furnish" ? "I’m ready" : l
				}), /* @__PURE__ */ (0, Q.jsx)($, {
					variant: "text",
					disabled: n,
					onClick: a,
					children: e.step === "reference" ? "Skip — draw walls" : "Skip step"
				})]
			}),
			r && /* @__PURE__ */ (0, Q.jsx)("p", {
				role: "status",
				children: r
			})
		]
	});
}
((e) => ({
	type: "object",
	additionalProperties: !1,
	required: Object.keys(e),
	properties: e
}))({});
//#endregion
//#region apps/web/src/editor-reference-plan/ReferencePlanPanel.tsx
function Es({ reference: e, floorName: t }) {
	let n = e.input, [r, i] = (0, Z.useState)(""), a = e.plan;
	return /* @__PURE__ */ (0, Q.jsxs)("section", {
		className: "reference-plan",
		"aria-label": "Reference plan",
		children: [
			/* @__PURE__ */ (0, Q.jsx)("input", {
				ref: n,
				hidden: !0,
				type: "file",
				accept: "image/png,image/jpeg,image/webp,image/svg+xml",
				onChange: (t) => {
					t.target.files?.length && e.upload(t.target.files), t.target.value = "";
				}
			}),
			/* @__PURE__ */ (0, Q.jsxs)("details", {
				className: "construction-inspector__floor-disclosure",
				open: e.expanded || e.adjusting,
				onToggle: (t) => {
					e.adjusting ? t.currentTarget.open || (t.currentTarget.open = !0) : e.setExpanded(t.currentTarget.open);
				},
				children: [/* @__PURE__ */ (0, Q.jsx)(ga, {
					icon: "plan",
					title: "Reference plan",
					description: "Add a floor plan image to trace."
				}), a ? /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "reference-plan__content sidebar-section-content",
					children: [
						/* @__PURE__ */ (0, Q.jsx)("p", {
							className: "reference-plan__filename",
							title: a.name,
							children: a.name
						}),
						/* @__PURE__ */ (0, Q.jsxs)("p", {
							className: "reference-plan__storage",
							children: [t, " · Saved in this browser only"]
						}),
						/* @__PURE__ */ (0, Q.jsxs)("label", {
							className: "reference-plan__visible",
							children: [/* @__PURE__ */ (0, Q.jsx)("input", {
								type: "checkbox",
								checked: e.preference.visible,
								disabled: e.adjusting,
								onChange: (t) => e.setPreference({ visible: t.target.checked })
							}), "Show reference plan"]
						}),
						/* @__PURE__ */ (0, Q.jsxs)("label", {
							className: "reference-plan__opacity",
							children: [
								"Opacity",
								" ",
								/* @__PURE__ */ (0, Q.jsx)("input", {
									type: "range",
									min: "0",
									max: "100",
									value: Math.round(e.preference.opacity * 100),
									onChange: (t) => e.setPreference({ opacity: Number(t.target.value) / 100 })
								}),
								/* @__PURE__ */ (0, Q.jsxs)("output", { children: [Math.round(e.preference.opacity * 100), "%"] })
							]
						}),
						e.adjusting ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
							/* @__PURE__ */ (0, Q.jsx)("p", {
								role: "status",
								children: e.calibrating ? e.points.length < 2 ? "Click two points on the image with a known distance between them." : "Enter the real distance between these points." : "Drag to move. Use corner handles to resize and the top handle to rotate."
							}),
							e.calibrating ? /* @__PURE__ */ (0, Q.jsxs)("form", {
								onSubmit: (t) => {
									t.preventDefault(), e.calibrate(Number(r));
								},
								children: [/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Distance (m)", /* @__PURE__ */ (0, Q.jsx)("input", {
									"aria-label": "Reference distance in metres",
									type: "number",
									min: "0.0001",
									step: "any",
									required: !0,
									value: r,
									onChange: (e) => i(e.target.value)
								})] }), /* @__PURE__ */ (0, Q.jsx)($, {
									type: "submit",
									variant: "primary",
									disabled: e.points.length !== 2,
									children: "Apply scale"
								})]
							}) : /* @__PURE__ */ (0, Q.jsx)($, {
								onClick: () => e.begin(!0),
								children: "Set scale"
							}),
							/* @__PURE__ */ (0, Q.jsxs)("div", {
								className: "reference-plan__actions",
								children: [/* @__PURE__ */ (0, Q.jsx)($, {
									variant: "primary",
									onClick: e.done,
									disabled: e.calibrating,
									children: "Done"
								}), /* @__PURE__ */ (0, Q.jsx)($, {
									onClick: e.cancel,
									children: "Cancel"
								})]
							})
						] }) : /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
							className: "reference-plan__actions",
							children: [/* @__PURE__ */ (0, Q.jsx)($, {
								disabled: e.disabled,
								onClick: () => e.begin(),
								children: "Adjust"
							}), /* @__PURE__ */ (0, Q.jsx)($, {
								disabled: e.disabled,
								onClick: () => e.begin(!0),
								children: "Set scale"
							})]
						}), /* @__PURE__ */ (0, Q.jsxs)("div", {
							className: "reference-plan__secondary",
							children: [/* @__PURE__ */ (0, Q.jsx)($, {
								variant: "text",
								disabled: e.disabled,
								onClick: e.openPicker,
								children: "Replace image"
							}), /* @__PURE__ */ (0, Q.jsx)($, {
								variant: "text",
								disabled: e.disabled,
								onClick: e.remove,
								children: "Remove"
							})]
						})] })
					]
				}) : /* @__PURE__ */ (0, Q.jsx)("div", {
					className: "reference-plan__content sidebar-section-content",
					children: /* @__PURE__ */ (0, Q.jsx)($, {
						disabled: e.disabled,
						onClick: e.openPicker,
						children: "Add image"
					})
				})]
			}),
			e.loading && /* @__PURE__ */ (0, Q.jsx)("p", {
				role: "status",
				children: "Opening image…"
			}),
			e.error && /* @__PURE__ */ (0, Q.jsx)("p", {
				role: "alert",
				className: "reference-plan__error",
				children: e.error
			}),
			e.storage.error && /* @__PURE__ */ (0, Q.jsxs)("div", {
				role: "alert",
				className: "reference-plan__error",
				children: [/* @__PURE__ */ (0, Q.jsx)("p", { children: e.storage.error }), /* @__PURE__ */ (0, Q.jsx)($, {
					onClick: e.storage.retry,
					children: "Retry"
				})]
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/NorthSettingsEditor.tsx
function Ds({ value: e, onEdit: t, disabled: n }) {
	return /* @__PURE__ */ (0, Q.jsxs)("details", {
		className: "construction-inspector__floor-disclosure",
		children: [/* @__PURE__ */ (0, Q.jsx)(ga, {
			icon: "spawn",
			title: "North",
			description: "Orient the compass around your plan."
		}), /* @__PURE__ */ (0, Q.jsxs)("section", {
			className: "construction-inspector__floor-settings sidebar-section-content",
			"aria-label": "North orientation",
			children: [/* @__PURE__ */ (0, Q.jsx)($, {
				disabled: n,
				onClick: t,
				children: "Set north on plan"
			}), /* @__PURE__ */ (0, Q.jsxs)("p", {
				className: "sidebar-section-note",
				children: [
					"Current direction: ",
					e,
					"° clockwise from the top of the plan. Shared by all floors."
				]
			})]
		})]
	});
}
//#endregion
//#region apps/web/src/editor-connect/ConnectDeviceGrid.tsx
function Os({ relationship: e, models: t, manifest: n, selected: r = !1 }) {
	let i = e.kind === "modeled-device" ? t[e.device.model] : void 0, a = e.kind === "modeled-device" ? e.device.model : "", o = e.kind === "entity-slot" ? e.descriptor.openingId : void 0, s = (0, Z.useMemo)(() => o ? gr(n, o) : i ? {
		key: `device:${a}`,
		kind: "device",
		modelId: a,
		definition: i
	} : null, [
		i,
		a,
		n,
		o
	]), c = e.kind === "modeled-device" ? e.device.entitySlots.find((e) => e.deviceRole === "primary")?.compatibleDomains[0] ?? e.device.entitySlots[0]?.compatibleDomains[0] : e.descriptor.spec.compatibleDomains[0], l = /* @__PURE__ */ (0, Q.jsx)(T, {
		domain: c ?? "unknown",
		size: 30
	});
	return /* @__PURE__ */ (0, Q.jsx)("span", {
		className: `connect-device-preview${r ? " is-selected-preview" : ""}`,
		"aria-hidden": "true",
		children: s ? /* @__PURE__ */ (0, Q.jsx)(Tn, {
			entry: s,
			showAdd: !1,
			fallback: l
		}) : /* @__PURE__ */ (0, Q.jsx)("span", {
			className: "connect-device-preview__icon",
			children: l
		})
	});
}
function ks({ editor: e, manifest: t, models: n, onOpen: r, onTrigger: i }) {
	return e.room ? /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "connect-device-grid",
		children: [e.groups.map((a) => /* @__PURE__ */ (0, Q.jsx)(Mt, {
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
					preview: /* @__PURE__ */ (0, Q.jsx)(Os, {
						relationship: a,
						models: n,
						manifest: t
					})
				};
				return a.kind === "modeled-device" ? /* @__PURE__ */ (0, Q.jsx)(ce, {
					...o,
					manifest: t,
					device: a.device
				}, a.id) : /* @__PURE__ */ (0, Q.jsx)(y, {
					...o,
					descriptor: a.descriptor
				}, a.id);
			})
		}, a.id)), e.groups.length === 0 && /* @__PURE__ */ (0, Q.jsx)("p", {
			className: "connect-empty",
			children: "This room has no devices or controls to connect. Add a device in Arrange to get started."
		})]
	}) : null;
}
//#endregion
//#region apps/web/src/editor-connect/ConnectInspector.tsx
var As = {};
function js({ editor: e, manifest: t, runtime: n, deviceModels: r = As, homeAssistantUrl: i, onSettings: a }) {
	let o = () => a?.(), s = (0, Z.useRef)(null), c = (0, Z.useRef)(/* @__PURE__ */ new Map()), l = (0, Z.useRef)(null);
	e.disconnected || (l.current = i);
	let u = Object.keys(e.profile.roomAreaIds).length > 0 || Object.keys(e.profile.entityIdsBySlotId).length > 0, d = !(i && (u || l.current === i)), f = [
		"authenticating",
		"connecting",
		"reconnecting"
	].includes(n.status);
	(0, Z.useEffect)(() => {
		s.current && (s.current.scrollTop = 0);
	}, [
		e.roomId,
		e.relationshipId,
		d
	]), (0, Z.useEffect)(() => {
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
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "connect-inspector",
		children: [
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "connect-inspector__scroll",
				ref: s,
				children: [
					/* @__PURE__ */ (0, Q.jsx)(vn, {
						scrollRoot: s,
						enabled: !d && e.view === "devices",
						children: d ? /* @__PURE__ */ (0, Q.jsxs)("section", {
							className: "connect-setup",
							children: [
								/* @__PURE__ */ (0, Q.jsx)("h3", { children: "Connect your home" }),
								/* @__PURE__ */ (0, Q.jsx)("p", {
									className: "connect-copy",
									children: "Set up Home Assistant to link rooms and devices."
								}),
								/* @__PURE__ */ (0, Q.jsxs)("button", {
									type: "button",
									className: "connect-primary",
									onClick: o,
									children: ["Set up Home Assistant", /* @__PURE__ */ (0, Q.jsx)(X, { name: "chevron" })]
								})
							]
						}) : /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
							e.disconnected && /* @__PURE__ */ (0, Q.jsxs)("p", {
								className: "connect-offline",
								children: [
									f ? "Reconnecting to Home Assistant…" : "Home Assistant is not connected.",
									" ",
									"Your saved connections are retained."
								]
							}),
							!e.relationship && /* @__PURE__ */ (0, Q.jsx)("header", {
								className: "connect-inspector__heading",
								children: /* @__PURE__ */ (0, Q.jsxs)("label", {
									className: "connect-room-picker",
									children: [/* @__PURE__ */ (0, Q.jsx)("span", { children: e.view === "rooms" ? "Room to connect" : "Show devices in" }), /* @__PURE__ */ (0, Q.jsxs)("select", {
										"aria-label": e.view === "rooms" ? "Room to connect" : "Show devices in",
										value: e.roomId ?? "",
										onChange: (t) => e.selectRoom(t.target.value),
										children: [/* @__PURE__ */ (0, Q.jsx)("option", {
											value: "",
											disabled: !0,
											children: "Select a room"
										}), (e.view === "rooms" ? e.rooms : e.deviceRooms).map((e) => /* @__PURE__ */ (0, Q.jsx)("option", {
											value: e.id,
											children: e.name
										}, e.id))]
									})]
								})
							}),
							m ? e.view === "rooms" && e.rooms.some((e) => e.id === m.id) ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
								/* @__PURE__ */ (0, Q.jsxs)("label", {
									className: "connect-room-select",
									children: ["Home Assistant area", /* @__PURE__ */ (0, Q.jsxs)("select", {
										"aria-label": `Home Assistant area for ${m.name}`,
										value: e.profile.roomAreaIds[m.id] ?? "",
										onChange: (t) => e.assignArea(t.target.value),
										children: [
											/* @__PURE__ */ (0, Q.jsx)("option", {
												value: "",
												children: "Not connected"
											}),
											e.profile.roomAreaIds[m.id] && !e.displayRuntime.areas.some((t) => t.area_id === e.profile.roomAreaIds[m.id]) && /* @__PURE__ */ (0, Q.jsx)("option", {
												value: e.profile.roomAreaIds[m.id],
												disabled: !0,
												children: "Saved area unavailable"
											}),
											e.displayRuntime.areas.map((t) => /* @__PURE__ */ (0, Q.jsx)("option", {
												value: t.area_id,
												disabled: e.disconnected || Object.entries(e.profile.roomAreaIds).some(([e, n]) => e !== m.id && n === t.area_id),
												children: t.name
											}, t.area_id))
										]
									})]
								}),
								/* @__PURE__ */ (0, Q.jsx)("p", {
									className: "connect-note",
									children: "This links the room in your plan to a Home Assistant area."
								}),
								/* @__PURE__ */ (0, Q.jsxs)("button", {
									className: "connect-room-devices",
									type: "button",
									onClick: () => e.setView("devices"),
									children: [
										/* @__PURE__ */ (0, Q.jsx)(X, { name: "devices" }),
										"Connect devices in this room",
										/* @__PURE__ */ (0, Q.jsx)(X, { name: "chevron" })
									]
								})
							] }) : e.relationship ? /* @__PURE__ */ (0, Q.jsx)(D, {
								inline: !0,
								manifest: t,
								room: m,
								relationship: e.relationship,
								profile: e.profile,
								runtime: e.displayRuntime,
								disabled: e.disconnected,
								preview: /* @__PURE__ */ (0, Q.jsx)(Os, {
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
							}, e.relationship.id) : /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [e.groups.length > 0 && /* @__PURE__ */ (0, Q.jsx)("p", {
								className: "connect-copy",
								children: "Select a device or control below to link it to a Home Assistant entity."
							}), /* @__PURE__ */ (0, Q.jsx)(ks, {
								editor: e,
								manifest: t,
								models: r,
								onOpen: e.selectRelationship,
								onTrigger: (e, t) => {
									t ? c.current.set(e, t) : c.current.delete(e);
								}
							})] }) : /* @__PURE__ */ (0, Q.jsxs)("p", {
								className: "connect-empty",
								children: [
									"Select a room on the map to",
									" ",
									e.view === "rooms" ? "choose its Home Assistant area" : "connect its devices",
									"."
								]
							}),
							e.pendingAreaChange && /* @__PURE__ */ (0, Q.jsxs)("section", {
								className: "connect-confirm",
								role: "alertdialog",
								"aria-label": "Change room area",
								children: [
									/* @__PURE__ */ (0, Q.jsx)("h3", { children: "Change this room’s area?" }),
									/* @__PURE__ */ (0, Q.jsxs)("p", { children: [
										"This clears ",
										e.pendingAreaChange.clearedSlotIds.length,
										" draft connection",
										e.pendingAreaChange.clearedSlotIds.length === 1 ? "" : "s",
										". Applied connections stay unchanged."
									] }),
									/* @__PURE__ */ (0, Q.jsx)("button", {
										type: "button",
										onClick: e.cancelAreaChange,
										children: "Cancel"
									}),
									/* @__PURE__ */ (0, Q.jsx)("button", {
										type: "button",
										onClick: e.confirmAreaChange,
										children: "Change area"
									})
								]
							})
						] })
					}),
					(n.error || n.refreshError) && /* @__PURE__ */ (0, Q.jsx)("p", {
						className: "connect-error",
						role: "alert",
						children: n.refreshError ?? n.error
					}),
					e.message && e.message !== "Draft changes" && /* @__PURE__ */ (0, Q.jsx)("p", {
						className: "connect-feedback",
						role: "status",
						children: e.message
					})
				]
			}),
			/* @__PURE__ */ (0, Q.jsxs)("footer", {
				className: "connect-footer",
				children: [
					/* @__PURE__ */ (0, Q.jsx)("i", {
						className: e.disconnected ? "" : "is-connected",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "connect-footer__status",
						role: "status",
						children: [/* @__PURE__ */ (0, Q.jsx)("span", { children: f ? "Connecting to Home Assistant…" : e.disconnected ? "Home Assistant not connected" : "Home Assistant connected" }), i && /* @__PURE__ */ (0, Q.jsx)("small", {
							title: i,
							children: i.replace(/^https?:\/\//, "")
						})]
					}),
					/* @__PURE__ */ (0, Q.jsx)("button", {
						type: "button",
						className: "connect-settings-button",
						title: "Connection settings",
						"aria-label": "Connection settings",
						onClick: o,
						children: /* @__PURE__ */ (0, Q.jsx)(X, { name: "settings" })
					})
				]
			}),
			/* @__PURE__ */ (0, Q.jsx)("span", {
				className: "connect-announcement",
				role: "status",
				children: e.message === "Draft changes" ? e.message : ""
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-preview/furnish/catalog/catalog.ts
function Ms(e, t) {
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
function Ns(e, t, n) {
	let r = n.trim().toLocaleLowerCase("en").split(/\s+/).filter(Boolean);
	return e.filter((e) => {
		if (t === "my-models" && !e.modelId.startsWith("custom:") || t === "devices" && e.kind !== "device" || t !== "all" && t !== "devices" && t !== "my-models" && e.definition.defaultRoomType !== t) return !1;
		let n = He.find((t) => t.id === e.definition.defaultRoomType)?.label ?? "", i = [
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
var Ps = {
	all: "grid",
	devices: "devices",
	"my-models": "furnish",
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
}, Fs = [{
	id: "all",
	label: "All items"
}, ...He], Is = [
	...Fs,
	{
		id: "devices",
		label: "Devices"
	},
	{
		id: "my-models",
		label: "My models"
	}
];
function Ls({ furnishingModels: e, deviceModels: t, browsing: n, onBrowse: r, error: i, onChoose: a, enabled: o = !0, customModels: s }) {
	let c = (0, Z.useRef)(null), l = (0, Z.useMemo)(() => Ms(e, t), [e, t]), u = (0, Z.useMemo)(() => Ns(l, n.room, n.query), [l, n]), d = Is.find((e) => e.id === n.room)?.label ?? "All items", f = (e) => {
		r({
			room: e,
			query: ""
		}), c.current && (c.current.scrollTop = 0);
	};
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "arrange-catalog",
		"aria-label": "Item catalog",
		children: [
			i && /* @__PURE__ */ (0, Q.jsx)("p", {
				className: "catalog-add-error",
				role: "alert",
				children: i
			}),
			s,
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "arrange-catalog__body",
				children: [/* @__PURE__ */ (0, Q.jsxs)("nav", {
					className: "catalog-rooms",
					"aria-label": "Catalog room types",
					children: [Fs.map((e) => /* @__PURE__ */ (0, Q.jsxs)("button", {
						type: "button",
						"aria-pressed": n.room === e.id,
						onClick: () => f(e.id),
						children: [/* @__PURE__ */ (0, Q.jsx)(X, { name: Ps[e.id] }), /* @__PURE__ */ (0, Q.jsx)("span", { children: e.label })]
					}, e.id)), /* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "catalog-device-filter",
						children: [/* @__PURE__ */ (0, Q.jsxs)("button", {
							type: "button",
							"aria-pressed": n.room === "my-models",
							onClick: () => f("my-models"),
							children: [/* @__PURE__ */ (0, Q.jsx)(X, { name: "furnish" }), /* @__PURE__ */ (0, Q.jsx)("span", { children: "My models" })]
						}), /* @__PURE__ */ (0, Q.jsxs)("button", {
							type: "button",
							"aria-pressed": n.room === "devices",
							onClick: () => f("devices"),
							children: [/* @__PURE__ */ (0, Q.jsx)(X, { name: "devices" }), /* @__PURE__ */ (0, Q.jsx)("span", { children: "Devices" })]
						})]
					})]
				}), /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "catalog-results",
					children: [
						/* @__PURE__ */ (0, Q.jsxs)("label", {
							className: "catalog-room-select",
							children: [/* @__PURE__ */ (0, Q.jsx)("span", { children: "Filter" }), /* @__PURE__ */ (0, Q.jsx)("select", {
								value: n.room,
								onChange: (e) => f(e.target.value),
								children: Is.map((e) => /* @__PURE__ */ (0, Q.jsx)("option", {
									value: e.id,
									children: e.label
								}, e.id))
							})]
						}),
						/* @__PURE__ */ (0, Q.jsxs)("div", {
							className: "catalog-search",
							children: [
								/* @__PURE__ */ (0, Q.jsx)(X, { name: "search" }),
								/* @__PURE__ */ (0, Q.jsx)("input", {
									type: "search",
									"aria-label": `Search ${d.toLowerCase()}`,
									value: n.query,
									placeholder: `Search ${d.toLowerCase()}…`,
									onChange: (e) => r({
										...n,
										query: e.target.value
									})
								}),
								n.query && /* @__PURE__ */ (0, Q.jsx)("button", {
									type: "button",
									"aria-label": "Clear search",
									onClick: () => r({
										...n,
										query: ""
									}),
									children: /* @__PURE__ */ (0, Q.jsx)(X, { name: "close" })
								})
							]
						}),
						/* @__PURE__ */ (0, Q.jsx)(vn, {
							scrollRoot: c,
							enabled: o,
							children: /* @__PURE__ */ (0, Q.jsxs)("div", {
								className: "catalog-grid",
								ref: c,
								"aria-label": `${d} catalog`,
								children: [u.map((e) => /* @__PURE__ */ (0, Q.jsxs)("button", {
									type: "button",
									className: "catalog-card",
									"aria-label": `Add ${e.definition.label}`,
									disabled: e.kind === "device" && e.definition.supportedDomains.length === 0,
									onClick: () => a(e),
									children: [
										/* @__PURE__ */ (0, Q.jsx)(Tn, { entry: e }),
										/* @__PURE__ */ (0, Q.jsx)("strong", { children: e.definition.label }),
										/* @__PURE__ */ (0, Q.jsx)("small", { children: e.kind === "device" ? "Device" : "Furniture" })
									]
								}, e.key)), u.length === 0 && /* @__PURE__ */ (0, Q.jsxs)("div", {
									className: "catalog-empty",
									role: "status",
									children: [/* @__PURE__ */ (0, Q.jsx)("p", { children: n.query.trim() ? "No matching items" : n.room === "my-models" ? "Import your first GLB model" : "No items for this room type yet" }), /* @__PURE__ */ (0, Q.jsx)($, {
										onClick: () => n.query.trim() ? r({
											...n,
											query: ""
										}) : f("all"),
										children: n.query.trim() ? "Clear search" : "Browse all items"
									})]
								})]
							})
						})
					]
				})]
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-workspace/EditorSidebar.tsx
var Rs = !1;
function zs({ northOrientation: e, floorNavigation: t, activeFloorId: n, stairPlacement: r, setStairPlacement: i, setFloorDialog: a, mode: o, editingLocked: s, publishOpen: c, previewOpen: l, connectManifest: u, connect: d, clearConstructionSelection: f, constructEditor: p, floorZoneDrawing: m, focusIssue: h, furnishingModels: g, deviceModels: _, floorPaintTarget: v, unsettled: y, onWorkspaces: b, workspace: x, runtime: S, reference: C, floorFinish: w, setFloorFinish: T, setFloorPaintTarget: E, homeAssistantUrl: D, snapshot: O, commit: k, catalogBrowsing: A, setCatalogBrowsing: j, catalogError: M, addCatalogItem: N, sidebar: P, iconUrl: F, shortcutsMode: I, floorControlsDisabled: L, addFloorAbove: R, addFloorBelow: z, tutorial: B, tutorialBusy: V, activateTutorial: H, stairLiveIssues: U, importWorkspace: W, placingWalkStart: ee, setWalkStartFloor: te, sidebarIssues: ne, onHomeAssistantSettings: re }) {
	return /* @__PURE__ */ (0, Q.jsx)(Q.Fragment, { children: /* @__PURE__ */ (0, Q.jsxs)("aside", {
		ref: P,
		className: "direction-rail",
		inert: s || c || l || e.active,
		children: [
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "direction-rail__brand",
				children: [/* @__PURE__ */ (0, Q.jsx)("img", {
					src: F,
					alt: "",
					width: "43",
					height: "51"
				}), /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "direction-rail__identity",
					children: [/* @__PURE__ */ (0, Q.jsx)("h1", { children: "Cabane" }), b && /* @__PURE__ */ (0, Q.jsxs)("button", {
						type: "button",
						className: "editor-workspace-link",
						title: `Switch workspace · ${O.project.home.name}`,
						"aria-label": `Workspaces: ${O.project.home.name}`,
						disabled: s || y,
						onClick: b,
						children: [/* @__PURE__ */ (0, Q.jsx)("span", { children: O.project.home.name }), /* @__PURE__ */ (0, Q.jsx)(X, { name: "chevron" })]
					})]
				})]
			}),
			!I && o === "construct" && /* @__PURE__ */ (0, Q.jsx)(Vn, {
				floors: O.project.floors,
				selectedId: n,
				disabled: L,
				onSelect: (e) => t.selectFloor(e),
				onAdd: R,
				onAddBelow: z,
				onSettings: () => a("rename")
			}),
			/* @__PURE__ */ (0, Q.jsx)(Cs, { mode: I ? "shortcuts" : o }),
			I && /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "shortcuts-guide",
				children: [
					/* @__PURE__ */ (0, Q.jsx)("h3", { children: "Add a shortcut" }),
					/* @__PURE__ */ (0, Q.jsx)("p", { children: "Select the empty slot in the bar, then choose an action, room, device, scene or script." }),
					/* @__PURE__ */ (0, Q.jsx)("h3", { children: "Edit your bar" }),
					/* @__PURE__ */ (0, Q.jsx)("p", { children: "Select a shortcut to replace, move or remove it." }),
					/* @__PURE__ */ (0, Q.jsx)("h3", { children: "Update Home" }),
					/* @__PURE__ */ (0, Q.jsx)("p", { children: "Your changes save as a draft. Choose Save when your bar is ready." })
				]
			}),
			!I && B.state?.status === "active" && /* @__PURE__ */ (0, Q.jsx)(Ts, {
				state: B.state,
				mode: o,
				disabled: V,
				warning: B.warning,
				onAction: H,
				onSkip: B.skip,
				onDismiss: B.dismiss
			}),
			!I && o === "construct" && B.state?.status !== "active" && qa(p.previewFloor) && /* @__PURE__ */ (0, Q.jsx)("p", {
				className: "construction-empty-hint",
				children: "Your plan starts here. Choose Wall, then click each corner to draw your first room."
			}),
			!I && o === "construct" && r && /* @__PURE__ */ (0, Q.jsx)(Jn, {
				shape: r.shape ?? "straight",
				issues: U ?? [],
				onChange: (e) => i(er(O.project, r, e)),
				onCancel: () => i(null)
			}),
			!I && o === "construct" && !r && /* @__PURE__ */ (0, Q.jsx)(Na, {
				inert: C.adjusting,
				referencePlanControls: /* @__PURE__ */ (0, Q.jsx)(Es, {
					reference: C,
					floorName: p.previewFloor.name
				}),
				planImportControls: Rs,
				tutorialControls: B.state?.status !== "active" && /* @__PURE__ */ (0, Q.jsxs)("details", {
					className: "construction-inspector__floor-disclosure",
					children: [/* @__PURE__ */ (0, Q.jsx)(ga, {
						icon: "tutorial",
						title: "Tutorial",
						description: "Learn to draw and furnish your first room."
					}), /* @__PURE__ */ (0, Q.jsx)("div", {
						className: "sidebar-section-content",
						children: /* @__PURE__ */ (0, Q.jsx)($, {
							disabled: V,
							onClick: B.restart,
							children: "Restart tutorial"
						})
					})]
				}),
				walkStartControls: /* @__PURE__ */ (0, Q.jsxs)("details", {
					className: "construction-inspector__floor-disclosure",
					children: [/* @__PURE__ */ (0, Q.jsx)(ga, {
						icon: "spawn",
						title: "Spawn area",
						description: "Choose where you start in Explore."
					}), /* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "construction-walk-start sidebar-section-content",
						role: "group",
						"aria-label": "Walk starting point",
						children: [
							/* @__PURE__ */ (0, Q.jsx)($, {
								"aria-pressed": ee,
								disabled: y && !ee,
								onClick: () => {
									f(), p.setTool("select"), te(ee ? null : n);
								},
								children: ee ? "Cancel" : O.project.home.walkStart ? "Move starting point" : "Set starting point"
							}),
							ee && /* @__PURE__ */ (0, Q.jsx)("p", {
								role: "status",
								children: "Click inside the floor to set your starting point. Escape cancels."
							}),
							O.project.home.walkStart && /* @__PURE__ */ (0, Q.jsx)($, {
								variant: "text",
								onClick: () => {
									let { walkStart: e, ...t } = O.project.home;
									k({
										...O,
										project: {
											...O.project,
											home: t
										}
									}), te(null);
								},
								children: "Use automatic start"
							})
						]
					})]
				}),
				northControls: /* @__PURE__ */ (0, Q.jsx)(Ds, {
					value: O.project.home.northAngleDegrees ?? 0,
					disabled: s || y || C.adjusting,
					onEdit: e.start
				}),
				roof: O.project.home.roof,
				onRoofChange: (e) => k({
					...O,
					project: {
						...O.project,
						home: {
							...O.project.home,
							roof: e
						}
					}
				}),
				editor: p,
				contextualIssues: ne,
				onIssueFocus: h,
				floorPainting: {
					finish: w,
					target: v,
					drawingActive: m.active,
					drawingError: m.error,
					onFinishChange: T,
					onTargetChange: (e) => {
						m.cancel(), E(e);
					},
					onCancelDrawing: m.cancel
				}
			}),
			!I && o === "connect" && /* @__PURE__ */ (0, Q.jsx)(js, {
				editor: d,
				manifest: u,
				runtime: S,
				deviceModels: _,
				homeAssistantUrl: D,
				onSettings: re
			}),
			/* @__PURE__ */ (0, Q.jsx)("div", {
				className: "arrange-catalog-mount",
				hidden: I || o !== "furnish",
				children: /* @__PURE__ */ (0, Q.jsx)(Ls, {
					enabled: !I && o === "furnish",
					furnishingModels: g,
					deviceModels: _,
					browsing: A,
					onBrowse: j,
					error: M,
					onChoose: N,
					customModels: /* @__PURE__ */ (0, Q.jsx)(xs, {
						workspace: x,
						disabled: s || y,
						onBrowse: () => j({
							room: "my-models",
							query: ""
						})
					})
				})
			})
		]
	}) });
}
//#endregion
//#region apps/web/src/editor-action-bar/ShortcutPicker.tsx
var Bs = [
	"build",
	"walk",
	"night",
	"view",
	"all-lights"
];
function Vs({ picker: e, project: t, runtime: n, profile: r, actionMappingEnabled: i, deviceModels: a, walkTools: o, roomPictures: s, roomNames: c, deviceNames: l, disabled: u, rooms: d, devices: f, query: p, setQuery: m, matching: h, duplicate: g, choose: _, onClose: v }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "shortcuts-picker",
		children: [
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "shortcuts-picker__heading",
				children: [/* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("h2", { children: e.kind === "built-in" ? "Choose an action" : e.kind === "room" ? "Choose a room" : e.kind === "device" ? "Choose a device" : `Choose a ${e.kind}` }), /* @__PURE__ */ (0, Q.jsx)("p", { children: e.replacingId ? "Replace the selected shortcut" : "Add a shortcut to the bar" })] }), /* @__PURE__ */ (0, Q.jsx)("button", {
					type: "button",
					onClick: v,
					"aria-label": "Close choices",
					children: /* @__PURE__ */ (0, Q.jsx)(X, { name: "close" })
				})]
			}),
			/* @__PURE__ */ (0, Q.jsxs)("label", {
				className: "shortcuts-picker__search",
				children: [/* @__PURE__ */ (0, Q.jsx)(X, { name: "search" }), /* @__PURE__ */ (0, Q.jsx)("input", {
					type: "search",
					value: p,
					placeholder: "Search…",
					"aria-label": "Search shortcut choices",
					onChange: (e) => m(e.target.value)
				})]
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "shortcuts-picker__grid",
				children: [
					(e.kind === "scene" || e.kind === "script") && /* @__PURE__ */ (0, Q.jsx)(Q.Fragment, { children: !i || n?.status !== "connected" ? /* @__PURE__ */ (0, Q.jsx)("p", { children: "Connect to Home Assistant to choose scenes and scripts." }) : /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [gt(e.kind, n).filter((e) => h(e.label) || h(e.entityId)).map((t) => /* @__PURE__ */ (0, Q.jsxs)("button", {
						type: "button",
						"aria-label": t.label,
						title: t.reason,
						disabled: u || !t.available || Object.entries(r?.actionEntityIdsByShortcutId ?? {}).some(([n, r]) => n !== e.replacingId && r === t.entityId),
						onClick: () => _({ kind: e.kind }, t.entityId),
						children: [
							/* @__PURE__ */ (0, Q.jsx)("span", {
								className: "shortcuts-picker__icon",
								children: /* @__PURE__ */ (0, Q.jsx)(X, { name: e.kind === "scene" ? "grid" : "chevron" })
							}),
							/* @__PURE__ */ (0, Q.jsx)("strong", { children: t.label }),
							/* @__PURE__ */ (0, Q.jsx)("small", { children: t.entityId }),
							!t.available && /* @__PURE__ */ (0, Q.jsx)("small", { children: "Unavailable" })
						]
					}, t.entityId)), gt(e.kind, n).length === 0 && /* @__PURE__ */ (0, Q.jsxs)("p", { children: [
						"No ",
						e.kind,
						"s are available in Home Assistant."
					] })] }) }),
					e.kind === "built-in" && Bs.filter((e) => h(Dt[e])).map((e) => {
						let t = {
							kind: "built-in",
							action: e
						};
						return /* @__PURE__ */ (0, Q.jsxs)("button", {
							type: "button",
							"aria-label": Dt[e],
							disabled: u || g(t),
							onClick: () => _(t),
							children: [/* @__PURE__ */ (0, Q.jsx)("span", {
								className: "shortcuts-picker__icon",
								children: /* @__PURE__ */ (0, Q.jsx)(Wt, { action: e })
							}), /* @__PURE__ */ (0, Q.jsx)("strong", { children: Dt[e] })]
						}, e);
					}),
					e.kind === "built-in" && o.filter((e) => h(e.label)).map((e) => {
						let t = {
							kind: "walk-tool",
							toolId: e.id
						};
						return /* @__PURE__ */ (0, Q.jsxs)("button", {
							type: "button",
							"aria-label": e.label,
							disabled: u || g(t),
							onClick: () => _(t),
							children: [
								/* @__PURE__ */ (0, Q.jsx)("span", {
									className: "shortcuts-picker__icon",
									children: /* @__PURE__ */ (0, Q.jsx)(e.Icon, {})
								}),
								/* @__PURE__ */ (0, Q.jsx)("strong", { children: e.label }),
								/* @__PURE__ */ (0, Q.jsx)("small", { children: "Walk mode" })
							]
						}, e.id);
					}),
					e.kind === "room" && d.filter((e) => h(c[e.id] ?? e.name)).map((e) => {
						let t = {
							kind: "room",
							roomId: e.id
						};
						return /* @__PURE__ */ (0, Q.jsxs)("button", {
							type: "button",
							"aria-label": c[e.id] ?? e.name,
							disabled: u || g(t),
							onClick: () => _(t),
							children: [/* @__PURE__ */ (0, Q.jsx)("span", {
								className: "shortcuts-picker__icon",
								children: /* @__PURE__ */ (0, Q.jsx)(Pe, {
									name: c[e.id] ?? e.name,
									pictureUrl: s[e.id]
								})
							}), /* @__PURE__ */ (0, Q.jsx)("strong", { children: c[e.id] ?? e.name })]
						}, e.id);
					}),
					e.kind === "device" && d.map((e) => {
						let n = c[e.id] ?? e.name, r = f.filter((n) => Rt(n, t) === e.id).filter((e) => h(n) || h(l[e.id] ?? a[e.modelId]?.label ?? e.modelId));
						return r.length ? /* @__PURE__ */ (0, Q.jsxs)("section", {
							className: "shortcuts-picker__room",
							"aria-label": n,
							children: [/* @__PURE__ */ (0, Q.jsx)("h3", { children: n }), /* @__PURE__ */ (0, Q.jsx)("div", {
								className: "shortcuts-picker__room-grid",
								children: r.map((e) => {
									let t = {
										kind: "device",
										deviceId: e.id
									}, r = l[e.id] ?? a[e.modelId]?.label ?? e.modelId.replaceAll("-", " ");
									return /* @__PURE__ */ (0, Q.jsxs)("button", {
										type: "button",
										"aria-label": `${r} · ${n}`,
										disabled: u || g(t),
										onClick: () => _(t),
										children: [/* @__PURE__ */ (0, Q.jsx)("span", {
											className: "shortcuts-picker__icon",
											children: /* @__PURE__ */ (0, Q.jsx)(Dn, {
												modelId: e.modelId,
												models: a
											})
										}), /* @__PURE__ */ (0, Q.jsx)("strong", { children: r })]
									}, e.id);
								})
							})]
						}, e.id) : null;
					}),
					e.kind === "device" && f.length === 0 && /* @__PURE__ */ (0, Q.jsx)("p", { children: "No room devices are available. Add one in Arrange first." })
				]
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-action-bar/action-bar-edits.ts
var Hs = (e, t) => e.kind === t.kind && (e.kind === "built-in" && t.kind === "built-in" ? e.action === t.action : e.kind === "walk-tool" && t.kind === "walk-tool" ? e.toolId === t.toolId : e.kind === "room" && t.kind === "room" ? e.roomId === t.roomId : e.kind === "device" && t.kind === "device" && e.deviceId === t.deviceId);
function Us(e, t, n, r) {
	return e.some((e) => e.id !== t && Hs(e.target, n)) ? e : t === null ? [...e, {
		id: r(),
		target: n
	}] : e.map((e) => e.id === t ? {
		...e,
		target: n
	} : e);
}
function Ws(e, t, n) {
	let r = e.findIndex((e) => e.id === t), i = r + n;
	if (r < 0 || i < 0 || i >= e.length) return e;
	let a = [...e];
	return [a[r], a[i]] = [a[i], a[r]], a;
}
function Gs(e, t) {
	return e.filter((e) => e.id !== t);
}
//#endregion
//#region apps/web/src/editor-action-bar/ActionBarEditor.tsx
function Ks({ project: e, runtime: t, profile: n, actionMappingEnabled: r = !1, deviceModels: i, walkTools: a = [], roomPictures: o, roomNames: s = {}, deviceNames: c = {}, disabled: l, canUndo: u, canRedo: d, onUndo: f, onRedo: p, onChange: m }) {
	let h = Ht(), [g, _] = (0, Z.useState)(null), [v, y] = (0, Z.useState)(null), [b, x] = (0, Z.useState)(""), [S, C] = (0, Z.useState)(!1), [w, T] = (0, Z.useState)(null), E = (0, Z.useRef)(null), D = (0, Z.useRef)(null), O = qe(e.actionBar, a), k = e.floors.flatMap((e) => e.rooms), A = e.sceneItems.filter((t) => t.kind === "device" && wt(e, t.id)), j = O.find((e) => e.id === g), M = t && n ? O.filter((e) => e.target.kind === "scene" || e.target.kind === "script").map((e) => Ze(e, n, t)).filter((e) => !e.available) : [], N = O.filter((e) => {
		let t = e.target;
		return t.kind === "room" ? !k.some((e) => e.id === t.roomId) : t.kind === "device" && !A.some((e) => e.id === t.deviceId);
	}).length;
	(0, Z.useEffect)(() => {
		let e = () => {
			if (!E.current) return;
			if (E.current.clientWidth <= 0) {
				T(null);
				return;
			}
			let e = Number.parseFloat(window.getComputedStyle(E.current).getPropertyValue("--scene-action-size")) || 64;
			T(Math.max(2, Math.floor((E.current.clientWidth - 10 + 6) / (e + 6))));
		};
		e();
		let t = typeof ResizeObserver > "u" ? null : new ResizeObserver(e);
		return E.current && t?.observe(E.current), window.addEventListener("resize", e), () => {
			t?.disconnect(), window.removeEventListener("resize", e);
		};
	}, []), (0, Z.useEffect)(() => {
		let e = (e) => {
			e.key !== "Escape" || !v && g === null && !S || (e.preventDefault(), v ? y(null) : S ? C(!1) : _(null));
		};
		return h.events.addEventListener("keydown", e), () => h.events.removeEventListener("keydown", e);
	}, [
		v,
		g,
		S,
		h
	]);
	let P = w !== null && O.length + 1 > w, F = P ? O.slice(0, Math.max(0, w - 2)) : O, I = P ? O.slice(F.length) : [], L = (e) => {
		let r = e.target;
		if (r.kind === "built-in") return Dt[r.action];
		if (r.kind === "walk-tool") return a.find((e) => e.id === r.toolId)?.label ?? "Unavailable tool";
		if (r.kind === "room") return s[r.roomId] ?? k.find((e) => e.id === r.roomId)?.name ?? "Missing room";
		if (r.kind === "scene" || r.kind === "script") return t && n ? Ze(e, n, t).label : `Unmapped ${r.kind}`;
		let o = A.find((e) => e.id === r.deviceId);
		return o ? c[o.id] ?? i[o.modelId]?.label ?? o.modelId.replaceAll("-", " ") : "Missing device";
	}, R = (e) => {
		let t = e.target;
		if (t.kind === "built-in") return /* @__PURE__ */ (0, Q.jsx)(Wt, { action: t.action });
		if (t.kind === "walk-tool") {
			let e = a.find((e) => e.id === t.toolId);
			return e ? /* @__PURE__ */ (0, Q.jsx)(e.Icon, {}) : /* @__PURE__ */ (0, Q.jsx)(X, { name: "devices" });
		}
		if (t.kind === "room") return /* @__PURE__ */ (0, Q.jsx)(Pe, {
			name: L(e),
			pictureUrl: o[t.roomId]
		});
		if (t.kind === "scene" || t.kind === "script") return /* @__PURE__ */ (0, Q.jsx)(X, { name: t.kind === "scene" ? "grid" : "chevron" });
		let n = A.find((e) => e.id === t.deviceId);
		return n ? /* @__PURE__ */ (0, Q.jsx)(Dn, {
			modelId: n.modelId,
			models: i
		}) : /* @__PURE__ */ (0, Q.jsx)(X, { name: "devices" });
	}, z = (e) => /* @__PURE__ */ (0, Q.jsx)("button", {
		type: "button",
		className: "scene-action-slot is-filled",
		"aria-label": `Edit ${L(e)} shortcut`,
		"aria-pressed": g === e.id,
		disabled: l,
		onClick: () => {
			_(e.id), y(null);
		},
		onKeyDown: (t) => {
			t.key === "ArrowUp" && (t.preventDefault(), _(e.id), requestAnimationFrame(() => D.current?.querySelector("button")?.focus()));
		},
		children: /* @__PURE__ */ (0, Q.jsx)(Ve, {
			icon: R(e),
			label: L(e),
			shortcut: e.target.kind === "built-in" ? {
				build: "B",
				walk: "W",
				night: "N",
				view: "V",
				"all-lights": "L"
			}[e.target.action] : e.target.kind === "walk-tool" ? a.find((t) => e.target.kind === "walk-tool" && t.id === e.target.toolId)?.shortcutKey : void 0,
			chevron: e.target.kind === "built-in" && (e.target.action === "build" || e.target.action === "view")
		})
	}, e.id), B = (e, t) => {
		if (!v) return;
		let n = v.replacingId ?? rn();
		m(Us(O, v.replacingId, e, () => n), t ? {
			id: n,
			entityId: t
		} : void 0), _(null), y(null), x(""), C(!1);
	}, V = (e) => {
		y({
			kind: e,
			replacingId: j?.id ?? null
		}), x("");
	};
	return /* @__PURE__ */ (0, Q.jsxs)("section", {
		className: "shortcuts-workspace",
		"aria-label": "Customize shortcuts",
		children: [
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "shortcuts-workspace__intro",
				children: [/* @__PURE__ */ (0, Q.jsx)("h2", { children: "Home action bar" }), /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "shortcuts-workspace__history",
					role: "group",
					"aria-label": "Shortcut history",
					children: [
						/* @__PURE__ */ (0, Q.jsxs)("button", {
							type: "button",
							disabled: l || !u,
							onClick: f,
							children: [/* @__PURE__ */ (0, Q.jsx)(X, { name: "undo" }), "Undo"]
						}),
						/* @__PURE__ */ (0, Q.jsxs)("button", {
							type: "button",
							disabled: l || !d,
							onClick: p,
							children: [/* @__PURE__ */ (0, Q.jsx)(X, { name: "redo" }), "Redo"]
						}),
						/* @__PURE__ */ (0, Q.jsx)("button", {
							type: "button",
							"aria-label": "Restore defaults",
							disabled: l,
							onClick: () => {
								m(qe(void 0, a).map((e) => ({
									...e,
									target: { ...e.target }
								}))), _(null), y(null);
							},
							children: "Restore defaults"
						})
					]
				})]
			}),
			N > 0 && /* @__PURE__ */ (0, Q.jsxs)("p", {
				className: "shortcuts-workspace__warning",
				role: "alert",
				children: [
					N,
					" shortcut target",
					N === 1 ? " is" : "s are",
					" missing. Replace or remove before Save."
				]
			}),
			M.length > 0 && /* @__PURE__ */ (0, Q.jsx)("p", {
				className: "shortcuts-workspace__warning",
				role: "status",
				children: M.map((e) => `${e.label}: ${e.reason}`).join(" ")
			}),
			/* @__PURE__ */ (0, Q.jsx)("div", {
				className: "shortcuts-workspace__canvas",
				children: v ? /* @__PURE__ */ (0, Q.jsx)(Vs, {
					picker: v,
					project: e,
					runtime: t,
					profile: n,
					actionMappingEnabled: r,
					deviceModels: i,
					walkTools: a,
					roomPictures: o,
					roomNames: s,
					deviceNames: c,
					disabled: l,
					rooms: k,
					devices: A,
					query: b,
					setQuery: x,
					matching: (e) => e.toLocaleLowerCase().includes(b.trim().toLocaleLowerCase()),
					duplicate: (e) => O.some((t) => t.id !== v?.replacingId && JSON.stringify(t.target) === JSON.stringify(e)),
					choose: B,
					onClose: () => y(null)
				}) : /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "shortcuts-workspace__prompt",
					children: [/* @__PURE__ */ (0, Q.jsx)("h2", { children: "Choose a shortcut" }), /* @__PURE__ */ (0, Q.jsx)("p", { children: "Select a shortcut below to edit it, or select Add to create one." })]
				})
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "shortcuts-workspace__bar-zone",
				children: [/* @__PURE__ */ (0, Q.jsx)("div", {
					className: "shortcuts-workspace__bar-measure",
					ref: E,
					children: /* @__PURE__ */ (0, Q.jsx)("nav", {
						className: "scene-action-dock",
						"aria-label": "Draft action bar",
						children: /* @__PURE__ */ (0, Q.jsxs)("div", {
							className: "scene-action-bar",
							style: { "--scene-action-count": F.length + +!!P + 1 },
							children: [
								F.map(z),
								P && /* @__PURE__ */ (0, Q.jsxs)("div", {
									className: "scene-action-overflow",
									children: [/* @__PURE__ */ (0, Q.jsx)("button", {
										type: "button",
										className: "scene-action-slot is-filled",
										"aria-label": "More shortcuts",
										"aria-expanded": S,
										onClick: () => C(!S),
										children: /* @__PURE__ */ (0, Q.jsx)(Ve, {
											icon: "•••",
											label: "More"
										})
									}), S && /* @__PURE__ */ (0, Q.jsx)("div", {
										className: "scene-action-overflow__tray",
										role: "group",
										"aria-label": "More shortcuts",
										children: I.map(z)
									})]
								}),
								/* @__PURE__ */ (0, Q.jsx)("button", {
									type: "button",
									className: "scene-action-slot shortcuts-workspace__empty",
									"aria-label": "Add shortcut",
									"aria-pressed": g === "",
									disabled: l,
									onClick: () => {
										_(""), y(null);
									},
									onKeyDown: (e) => {
										e.key === "ArrowUp" && (e.preventDefault(), _(""), requestAnimationFrame(() => D.current?.querySelector("button")?.focus()));
									},
									children: /* @__PURE__ */ (0, Q.jsx)(Ve, {
										icon: /* @__PURE__ */ (0, Q.jsx)(X, { name: "plus" }),
										label: "Add"
									})
								})
							]
						})
					})
				}), g !== null && !v && /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "shortcuts-workspace__tray",
					ref: D,
					role: "group",
					"aria-label": j ? `Edit ${L(j)}` : "Add shortcut",
					children: [
						/* @__PURE__ */ (0, Q.jsxs)("button", {
							type: "button",
							disabled: l,
							onClick: () => V("built-in"),
							children: [/* @__PURE__ */ (0, Q.jsx)(X, { name: "grid" }), j ? "Replace with action" : "Add action"]
						}),
						/* @__PURE__ */ (0, Q.jsxs)("button", {
							type: "button",
							disabled: l,
							onClick: () => V("room"),
							children: [/* @__PURE__ */ (0, Q.jsx)(X, { name: "rooms" }), j ? "Replace with room" : "Add room"]
						}),
						/* @__PURE__ */ (0, Q.jsxs)("button", {
							type: "button",
							disabled: l,
							onClick: () => V("device"),
							children: [/* @__PURE__ */ (0, Q.jsx)(X, { name: "devices" }), j ? "Replace with device" : "Add device"]
						}),
						["scene", "script"].map((e) => /* @__PURE__ */ (0, Q.jsxs)("button", {
							type: "button",
							disabled: l,
							onClick: () => V(e),
							children: [/* @__PURE__ */ (0, Q.jsx)(X, { name: e === "scene" ? "grid" : "chevron" }), j ? `Replace with ${e}` : `Add ${e}`]
						}, e)),
						j && /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
							/* @__PURE__ */ (0, Q.jsx)("span", { className: "shortcuts-workspace__tray-separator" }),
							/* @__PURE__ */ (0, Q.jsx)("button", {
								type: "button",
								"aria-label": "Move left",
								disabled: l || O[0]?.id === j.id,
								onClick: () => m(Ws(O, j.id, -1)),
								children: /* @__PURE__ */ (0, Q.jsx)(X, { name: "chevronLeft" })
							}),
							/* @__PURE__ */ (0, Q.jsx)("button", {
								type: "button",
								"aria-label": "Move right",
								disabled: l || O.at(-1)?.id === j.id,
								onClick: () => m(Ws(O, j.id, 1)),
								children: /* @__PURE__ */ (0, Q.jsx)(X, { name: "chevron" })
							}),
							/* @__PURE__ */ (0, Q.jsx)("button", {
								type: "button",
								"aria-label": "Remove shortcut",
								disabled: l,
								onClick: () => {
									m(Gs(O, j.id)), _(null);
								},
								children: /* @__PURE__ */ (0, Q.jsx)(X, { name: "delete" })
							})
						] })
					]
				})]
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-chrome/EditorActionBar.tsx
var qs = [
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
function Js({ inert: e, mode: t, tool: n, onToolChange: r, canUndo: i, canRedo: a, onUndo: o, onRedo: s, onStairs: c, stairsActive: l, stairsDisabledReason: u }) {
	let d = t === "construct";
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		inert: e,
		className: "editor-action-bar",
		role: "group",
		"data-mode": t,
		"aria-label": d ? "Construction actions" : "Edit history",
		children: [
			d && /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [qs.flatMap((e) => [/* @__PURE__ */ (0, Q.jsx)(or, {
				icon: e.tool,
				label: e.label,
				showLabel: !0,
				pressed: !l && (n === e.tool || n === "platform" && e.tool === "floor"),
				shortcut: e.key,
				keyShortcuts: e.key,
				onClick: () => r(e.tool)
			}, e.tool), ...e.tool === "wall" && c ? [/* @__PURE__ */ (0, Q.jsx)(or, {
				icon: "stairs",
				label: "Stairs",
				showLabel: !0,
				pressed: l,
				disabled: !!u,
				disabledReason: u,
				onClick: c
			}, "stairs")] : []]), /* @__PURE__ */ (0, Q.jsx)("span", {
				className: "editor-action-bar__separator",
				"aria-hidden": "true"
			})] }),
			/* @__PURE__ */ (0, Q.jsx)(or, {
				icon: "undo",
				label: "Undo",
				disabled: !i,
				onClick: o,
				shortcut: "⌘/Ctrl Z",
				keyShortcuts: "Control+Z Meta+Z"
			}),
			/* @__PURE__ */ (0, Q.jsx)(or, {
				icon: "redo",
				label: "Redo",
				disabled: !a,
				onClick: s,
				shortcut: "⌘/Ctrl Shift Z · Ctrl Y",
				keyShortcuts: "Control+Shift+Z Meta+Shift+Z Control+Y"
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-chrome/EditorModeNav.tsx
function Ys({ mode: e, onModeChange: t }) {
	return /* @__PURE__ */ (0, Q.jsxs)("nav", {
		className: "direction-modes",
		"aria-label": "Editor mode",
		children: [
			/* @__PURE__ */ (0, Q.jsxs)("button", {
				type: "button",
				"data-mode": "construct",
				"aria-pressed": e === "construct",
				onClick: () => t("construct"),
				children: [/* @__PURE__ */ (0, Q.jsx)(X, { name: "construct" }), "Construct"]
			}),
			/* @__PURE__ */ (0, Q.jsxs)("button", {
				type: "button",
				"data-mode": "furnish",
				"aria-pressed": e === "furnish",
				onClick: () => t("furnish"),
				children: [/* @__PURE__ */ (0, Q.jsx)(X, { name: "furnish" }), "Arrange"]
			}),
			/* @__PURE__ */ (0, Q.jsxs)("button", {
				type: "button",
				"data-mode": "connect",
				"aria-pressed": e === "connect",
				onClick: () => t("connect"),
				children: [/* @__PURE__ */ (0, Q.jsx)(X, { name: "connect" }), "Connect"]
			}),
			/* @__PURE__ */ (0, Q.jsxs)("button", {
				type: "button",
				"data-mode": "shortcuts",
				"aria-pressed": e === "shortcuts",
				onClick: () => t("shortcuts"),
				children: [/* @__PURE__ */ (0, Q.jsx)(X, { name: "grid" }), "Shortcuts"]
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-connect/ConnectActionBar.tsx
function Xs({ view: e, onViewChange: t, refreshing: n, disconnected: r, hasUnmappedRooms: i, onRefresh: a }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "editor-action-bar connect-action-bar",
		role: "group",
		"aria-label": "Connection actions",
		"data-mode": "connect",
		"aria-busy": n,
		children: [
			/* @__PURE__ */ (0, Q.jsx)(or, {
				icon: "rooms",
				label: "Rooms",
				showLabel: !0,
				pressed: e === "rooms",
				warning: i ? "Some rooms are not mapped to Home Assistant areas." : void 0,
				onClick: () => t("rooms")
			}),
			/* @__PURE__ */ (0, Q.jsx)(or, {
				icon: "devices",
				label: "Devices",
				showLabel: !0,
				pressed: e === "devices",
				onClick: () => t("devices")
			}),
			/* @__PURE__ */ (0, Q.jsx)("span", {
				className: "editor-action-bar__separator",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, Q.jsx)(or, {
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
function Zs({ referenceAdjusting: e, activeFloorId: t, stairPlacement: n, setStairPlacement: r, startStairs: i, snapshot: a, editingLocked: o, publishOpen: s, previewOpen: c, mode: l, cameraView: u, setCameraView: d, walkButton: f, unsettled: p, setPreviewOpen: m, closeEditor: h, closing: g, setPublishMessage: _, setPublishOpen: v, connect: y, runtime: b, constructEditor: x, dragging: S, floorZoneDrawing: C, poolDrawing: w, workspace: T, undoProject: E, redoProject: D, shortcutsMode: O, onModeTabChange: k, replaceEditorsFromProject: A }) {
	let [j, M] = (0, Z.useState)(null), N = T.record.publishedAt !== 0, P = (0, Z.useMemo)(() => JSON.stringify(a.project) !== JSON.stringify(T.record.published) || Object.values(a.bindings).some((e) => JSON.stringify(e.draft) !== JSON.stringify(e.published)), [
		a.project,
		a.bindings,
		T.record.published
	]);
	return /* @__PURE__ */ (0, Q.jsxs)("header", {
		className: "editor-header",
		inert: o || s || c,
		children: [
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "editor-navigation",
				children: [/* @__PURE__ */ (0, Q.jsxs)("button", {
					type: "button",
					className: "editor-close",
					disabled: o || p || !N,
					title: N ? "Back to Home" : "Save your home before returning to Home",
					onClick: () => void h(),
					children: [/* @__PURE__ */ (0, Q.jsx)(X, { name: "back" }), g ? "Returning…" : "Back"]
				}), l !== "connect" && /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "direction-camera",
					role: "group",
					"aria-label": "Camera controls",
					children: [l === "construct" ? /* @__PURE__ */ (0, Q.jsxs)("span", {
						className: "construction-plan__indicator",
						title: "2D floor plan",
						children: [/* @__PURE__ */ (0, Q.jsx)(X, { name: "plan" }), "2D"]
					}) : /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("button", {
						type: "button",
						title: "View the home in 3D",
						"aria-pressed": u === "3d",
						onClick: () => d("3d"),
						children: [/* @__PURE__ */ (0, Q.jsx)(X, { name: "cube" }), "3D"]
					}), /* @__PURE__ */ (0, Q.jsxs)("button", {
						type: "button",
						title: "View the floor plan",
						"aria-pressed": u === "top",
						onClick: () => d("top"),
						children: [/* @__PURE__ */ (0, Q.jsx)(X, { name: "plan" }), "2D"]
					})] }), /* @__PURE__ */ (0, Q.jsxs)("button", {
						ref: f,
						type: "button",
						title: "Walk through the draft at eye level",
						"aria-haspopup": "dialog",
						disabled: o || p,
						onClick: (e) => {
							(async () => {
								if (M(null), window.matchMedia("(pointer: coarse)").matches) {
									m(!0);
									return;
								}
								let t = e.currentTarget.closest("main");
								try {
									if (!t) throw Error("Pointer lock unavailable");
									await ut(t), m(!0);
								} catch {
									M("Allow pointer lock in your browser to explore this home.");
								}
							})();
						},
						children: [/* @__PURE__ */ (0, Q.jsx)(X, { name: "walk" }), "Explore"]
					})]
				})]
			}),
			j && /* @__PURE__ */ (0, Q.jsx)("p", {
				role: "alert",
				children: j
			}),
			/* @__PURE__ */ (0, Q.jsx)(Ys, {
				mode: O ? "shortcuts" : l,
				onModeChange: k
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "direction-project-actions",
				role: "group",
				"aria-label": "Project actions",
				children: [/* @__PURE__ */ (0, Q.jsxs)("button", {
					type: "button",
					className: "editor-reset-changes",
					"aria-label": "Reset changes",
					disabled: o || p || !P,
					title: "Discard draft changes and restore the saved version",
					onClick: () => {
						(async () => {
							if (!window.confirm("Reset changes? This discards all draft home and connection changes and restores the last saved version.")) return;
							let e = await T.resetDraftToPublished();
							e.status === "saved" && A(e.record.draft);
						})();
					},
					children: [/* @__PURE__ */ (0, Q.jsx)(X, { name: "reset" }), "Reset"]
				}), /* @__PURE__ */ (0, Q.jsxs)($, {
					variant: "primary",
					disabled: o || p,
					onClick: () => {
						_(null), v(!0);
					},
					children: [/* @__PURE__ */ (0, Q.jsx)(X, { name: "save" }), "Save"]
				})]
			}),
			l === "connect" ? /* @__PURE__ */ (0, Q.jsx)(Xs, {
				view: y.view,
				onViewChange: y.setView,
				hasUnmappedRooms: y.hasUnmappedRooms,
				refreshing: b.refreshing,
				disconnected: y.disconnected,
				onRefresh: () => void y.refresh()
			}) : /* @__PURE__ */ (0, Q.jsx)(Js, {
				inert: e,
				mode: l,
				tool: x.tool,
				onToolChange: (e) => {
					r(null), x.setTool(e);
				},
				onStairs: i,
				stairsActive: !!n,
				stairsDisabledReason: a.project.floors.at(-1)?.id === t ? "Add a floor above first, then place stairs from this floor." : o || p ? "Finish the current edit first." : void 0,
				canUndo: !o && !S && (C.active ? C.points.length > 0 : w.active ? w.points.length > 0 : T.canUndo && !p),
				canRedo: !o && !S && (C.active ? C.future.length > 0 : w.active ? w.future.length > 0 : T.canRedo && !p),
				onUndo: E,
				onRedo: D
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-workspace/EditorConnectionMap.tsx
function Qs({ connectFloor: e, connect: t }) {
	return /* @__PURE__ */ (0, Q.jsx)(b, {
		floor: e,
		selectedRoomId: t.roomId,
		roomDeviceSummaries: t.roomDeviceSummaries,
		inspectorOpen: !1,
		showFitControl: !1,
		onActivateRoom: t.selectRoom,
		connectedRoomIds: new Set(e.rooms.filter((e) => t.displayRuntime.areas.some((n) => n.area_id === t.profile.roomAreaIds[e.id])).map((e) => e.id)),
		relationshipLabels: Object.fromEntries(e.rooms.map((e) => [e.id, t.displayRuntime.areas.find((n) => n.area_id === t.profile.roomAreaIds[e.id])?.name ?? (t.profile.roomAreaIds[e.id] ? "Saved area unavailable" : "Not connected")])),
		roomIcons: Object.fromEntries(e.rooms.map((e) => [e.id, t.displayRuntime.areas.find((n) => n.area_id === t.profile.roomAreaIds[e.id])?.icon ?? null]))
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/NorthOrientationOverlay.tsx
var $s = (e) => (e % 360 + 360) % 360, ec = (e, t) => {
	let n = e * Math.PI / 180;
	return {
		x: 200 + Math.sin(n) * t,
		y: 200 - Math.cos(n) * t
	};
};
function tc({ angle: e, onRotate: t, onConfirm: n, onCancel: r }) {
	let i = Ht(), a = (0, Z.useRef)(null), o = (0, Z.useRef)(null), s = (0, Z.useRef)(null), c = (0, Z.useRef)(null), [l, u] = (0, Z.useState)(0);
	(0, Z.useEffect)(() => {
		let e = a.current;
		if (!e) return;
		let t = new ResizeObserver(([e]) => u(Math.max(0, Math.min(e.contentRect.width, e.contentRect.height))));
		return t.observe(e), () => t.disconnect();
	}, []), (0, Z.useEffect)(() => {
		let e = i.root.activeElement instanceof HTMLElement ? i.root.activeElement : null;
		return o.current?.focus(), () => {
			e?.isConnected && e.focus();
		};
	}, [i]);
	let d = (e) => {
		let t = e.currentTarget.getBoundingClientRect(), n = e.clientX - t.left - t.width / 2, r = e.clientY - t.top - t.height / 2;
		return Math.hypot(n, r) < 12 ? null : Math.atan2(n, -r) * 180 / Math.PI;
	}, f = (e) => {
		let n = c.current, r = d(e);
		if (!n || n.pointerId !== e.pointerId || r === null) return;
		let i = Math.atan2(Math.sin((r - n.bearing) * Math.PI / 180), Math.cos((r - n.bearing) * Math.PI / 180)) * 180 / Math.PI;
		t($s(Math.round(n.angle + i)));
	};
	return /* @__PURE__ */ (0, Q.jsxs)("dialog", {
		open: !0,
		ref: s,
		className: "north-orientation",
		"aria-modal": "true",
		"aria-labelledby": "north-orientation-title",
		onKeyDown: (e) => {
			if (e.key === "Escape" && (e.preventDefault(), r()), e.key === "Tab") {
				let t = Array.from(s.current?.querySelectorAll("button") ?? []), n = t[0], r = t.at(-1);
				e.shiftKey && i.root.activeElement === n ? (e.preventDefault(), r?.focus()) : !e.shiftKey && i.root.activeElement === r && (e.preventDefault(), n?.focus());
			}
		},
		children: [
			/* @__PURE__ */ (0, Q.jsxs)("header", {
				className: "north-orientation__heading",
				children: [/* @__PURE__ */ (0, Q.jsx)("strong", {
					id: "north-orientation-title",
					children: "Orient your home"
				}), /* @__PURE__ */ (0, Q.jsx)("span", {
					id: "north-orientation-hint",
					children: "Rotate the compass so N points toward geographic north on your plan."
				})]
			}),
			/* @__PURE__ */ (0, Q.jsx)("div", {
				ref: a,
				className: "north-orientation__area",
				children: /* @__PURE__ */ (0, Q.jsx)("button", {
					ref: o,
					type: "button",
					role: "slider",
					className: "north-orientation__dial",
					"aria-label": "Rotate compass",
					"aria-valuemin": 0,
					"aria-valuemax": 359,
					"aria-valuenow": e,
					"aria-valuetext": `${e} degrees clockwise from plan up`,
					"aria-describedby": "north-orientation-hint",
					style: {
						width: l,
						height: l
					},
					onPointerDown: (t) => {
						if (t.button !== 0 || c.current) return;
						let n = d(t);
						n !== null && (t.preventDefault(), t.currentTarget.focus(), t.currentTarget.setPointerCapture(t.pointerId), c.current = {
							pointerId: t.pointerId,
							bearing: n,
							angle: e
						});
					},
					onPointerMove: f,
					onPointerUp: (e) => {
						f(e), c.current = null;
					},
					onPointerCancel: () => {
						c.current && t(c.current.angle), c.current = null;
					},
					onLostPointerCapture: () => {
						c.current && t(c.current.angle), c.current = null;
					},
					onKeyDown: (n) => {
						let r = n.shiftKey ? 1 : 5, i = ["ArrowRight", "ArrowDown"].includes(n.key) ? r : ["ArrowLeft", "ArrowUp"].includes(n.key) ? -r : null;
						i !== null && (n.preventDefault(), t($s(e + i))), n.key === "Home" && (n.preventDefault(), t(0));
					},
					children: /* @__PURE__ */ (0, Q.jsxs)("svg", {
						viewBox: "0 0 400 400",
						"aria-hidden": "true",
						children: [
							/* @__PURE__ */ (0, Q.jsx)("circle", {
								cx: "200",
								cy: "200",
								r: "177",
								className: "north-orientation__ring"
							}),
							Array.from({ length: 72 }, (t, n) => {
								let r = e + n * 5, i = ec(r, 177), a = ec(r, n % 18 == 0 ? 157 : n % 3 == 0 ? 163 : 170);
								return /* @__PURE__ */ (0, Q.jsx)("line", {
									x1: a.x,
									y1: a.y,
									x2: i.x,
									y2: i.y,
									className: n % 18 == 0 ? "north-orientation__major" : "north-orientation__tick"
								}, n);
							}),
							[
								"N",
								"E",
								"S",
								"W"
							].map((t, n) => {
								let r = ec(e + n * 90, 193);
								return /* @__PURE__ */ (0, Q.jsx)("text", {
									x: r.x,
									y: r.y,
									textAnchor: "middle",
									dominantBaseline: "central",
									className: t === "N" ? "north-orientation__north" : "north-orientation__cardinal",
									children: t
								}, t);
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, Q.jsxs)("footer", {
				className: "north-orientation__actions",
				children: [
					/* @__PURE__ */ (0, Q.jsxs)("span", {
						className: "north-orientation__angle",
						"aria-live": "polite",
						children: [e, "°"]
					}),
					/* @__PURE__ */ (0, Q.jsx)($, {
						onClick: r,
						children: "Cancel"
					}),
					/* @__PURE__ */ (0, Q.jsx)($, {
						variant: "primary",
						onClick: n,
						children: "Confirm direction"
					})
				]
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-workspace/editor-canvas-events.ts
function nc(e) {
	let t = nn(e);
	return t.filter = (e) => [...e].sort((e, t) => Number(t.object.userData.constructionEditHandle === !0) - Number(e.object.userData.constructionEditHandle === !0)), t;
}
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionPlatformLayer.tsx
function rc({ polygon: e, draft: t, name: n, color: r, opacity: i = 1, handlers: a }) {
	let o = (0, Z.useMemo)(() => {
		if (!Ue(e)) return null;
		let n = new on();
		return e.forEach((e, r) => {
			let [i, a] = J(e, t.coordinates);
			r === 0 ? n.moveTo(i, -a) : n.lineTo(i, -a);
		}), n.closePath(), new c(n);
	}, [e, t.coordinates]);
	return (0, Z.useEffect)(() => () => o?.dispose(), [o]), o ? /* @__PURE__ */ (0, Q.jsx)("mesh", {
		name: n,
		geometry: o,
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
		...a,
		...a ? {} : { raycast: Ur },
		children: /* @__PURE__ */ (0, Q.jsx)(Gr, {
			color: r,
			opacity: i
		})
	}) : null;
}
function ic({ draft: e, selection: t, tool: n, points: r = [], preview: i = null, deletionTargets: a, selectedEdgeId: o, onSelectEdge: s, onSelect: c, onUpdate: l, onDraggingChange: u }) {
	let { snap: d, drag: f, handlers: p } = Ki({
		draft: e,
		selection: t,
		selectionKind: "outdoor-platform",
		tool: n,
		onSelect: c,
		onUpdate: l,
		...u === void 0 ? {} : { onDraggingChange: u }
	}), m = i && r.length && Math.hypot(i[0] - r.at(-1)[0], i[1] - r.at(-1)[1]) > 1e-7 ? [...r, i] : r;
	return /* @__PURE__ */ (0, Q.jsxs)("group", {
		name: "construction-platforms",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(qr, {
				snap: d,
				coordinates: e.coordinates
			}),
			(e.outdoorPlatforms ?? []).map((r) => {
				let i = f?.id === r.id ? f.polygon : r.polygon, c = a ? a.some((e) => e.kind === "outdoor-platform" && e.id === r.id) : Et(t, "outdoor-platform", r.id), l = t?.kind === "outdoor-platform" && t.id === r.id, u = Ue(i);
				return /* @__PURE__ */ (0, Q.jsxs)("group", {
					name: `plan-platform-${r.id}`,
					children: [
						/* @__PURE__ */ (0, Q.jsx)(rc, {
							name: `construction-platform-${r.id}`,
							polygon: i,
							draft: e,
							color: c ? "#d8c4a4" : "#ded1bc",
							opacity: c ? .12 : 0,
							handlers: n === "select" ? p(r.id, i) : void 0
						}),
						i.map((t, a) => {
							let l = i[(a + 1) % i.length], d = Lr(t, l, e.coordinates);
							return /* @__PURE__ */ (0, Q.jsxs)("group", { children: [/* @__PURE__ */ (0, Q.jsx)(Kr, {
								from: J(t, e.coordinates),
								to: J(l, e.coordinates),
								color: u ? o === r.edges[a]?.id ? "#bc653c" : c ? "#ff754d" : "#8d806e" : "#c53f32",
								width: c ? .065 : .035,
								elevation: .06
							}), n === "select" && /* @__PURE__ */ (0, Q.jsxs)("mesh", {
								name: `construction-platform-edge-${r.id}-${a}`,
								position: [
									d.center[0],
									.07,
									d.center[1]
								],
								rotation: [
									0,
									d.rotationYRadians,
									0
								],
								...p(r.id, i),
								onPointerDown: (e) => {
									p(r.id, i).onPointerDown(e);
									let t = r.edges[a];
									!e.nativeEvent.shiftKey && n === "select" && t && s(r.id, t.id);
								},
								children: [/* @__PURE__ */ (0, Q.jsx)("boxGeometry", { args: [
									d.length,
									.02,
									.18
								] }), /* @__PURE__ */ (0, Q.jsx)(Wr, {
									visible: !1,
									transparent: !0,
									opacity: 0,
									depthWrite: !1,
									side: 2
								})]
							})] }, a);
						}),
						l && n === "select" && i.map((t, n) => {
							let [i, a] = J(t, e.coordinates);
							return /* @__PURE__ */ (0, Q.jsx)(Ui, {
								name: `construction-platform-corner-${r.id}-${n}`,
								at: [
									i,
									.12,
									a
								],
								handlers: p(r.id, r.polygon, n)
							}, n);
						})
					]
				}, r.id);
			}),
			f?.dragActive && /* @__PURE__ */ (0, Q.jsx)(Wi, {
				polygon: f.polygon,
				corner: f.corner,
				coordinates: e.coordinates,
				labelKind: "Platform edge"
			}),
			n === "platform" && /* @__PURE__ */ (0, Q.jsxs)("group", {
				name: "construction-platform-draft",
				children: [
					/* @__PURE__ */ (0, Q.jsx)(rc, {
						polygon: m,
						draft: e,
						name: "construction-platform-draft-fill",
						color: "#d5e4df"
					}),
					r.slice(1).map((t, n) => /* @__PURE__ */ (0, Q.jsx)(Kr, {
						from: J(r[n], e.coordinates),
						to: J(t, e.coordinates),
						color: "#689ba1",
						width: .055,
						elevation: .08
					}, n)),
					r.map((t, n) => {
						let [r, i] = J(t, e.coordinates);
						return /* @__PURE__ */ (0, Q.jsx)(ai, {
							name: `construction-platform-point-${n}`,
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
//#region apps/web/src/editor-preview/construct/ConstructionGrid.tsx
function ac() {
	let e = (0, Z.useRef)(null), t = (0, Z.useMemo)(() => ({ cellSize: { value: Re } }), []);
	return q(({ camera: t }) => {
		e.current && e.current.position.set(t.position.x, -.04, t.position.z);
	}), /* @__PURE__ */ (0, Q.jsxs)("mesh", {
		ref: e,
		name: "construction-grid",
		rotation: [
			-Math.PI / 2,
			0,
			0
		],
		raycast: () => {},
		renderOrder: -100,
		children: [/* @__PURE__ */ (0, Q.jsx)("planeGeometry", { args: [2e4, 2e4] }), /* @__PURE__ */ (0, Q.jsx)("shaderMaterial", {
			transparent: !0,
			depthWrite: !1,
			uniforms: t,
			vertexShader: "varying vec2 worldPoint;\n        void main() {\n          vec4 world = modelMatrix * vec4(position, 1.0);\n          worldPoint = world.xz;\n          gl_Position = projectionMatrix * viewMatrix * world;\n        }",
			fragmentShader: "varying vec2 worldPoint;\n        uniform float cellSize;\n        float line(vec2 point, float spacing) {\n          vec2 p = point / spacing;\n          vec2 width = max(fwidth(p), vec2(0.00001));\n          vec2 distanceToLine = abs(fract(p - 0.5) - 0.5) / width;\n          return 1.0 - min(min(distanceToLine.x, distanceToLine.y), 1.0);\n        }\n        void main() {\n          float metersPerPixel = max(fwidth(worldPoint.x), fwidth(worldPoint.y));\n          float fineVisibility = (1.0 - smoothstep(0.008, 0.025, metersPerPixel));\n          float majorVisibility = 1.0 - smoothstep(0.15, 0.4, metersPerPixel);\n          float alpha = max(line(worldPoint, cellSize) * 0.09 * fineVisibility,\n            line(worldPoint, 1.0) * 0.19 * majorVisibility);\n          gl_FragColor = vec4(0.48, 0.48, 0.42, alpha);\n        }"
		})]
	});
}
//#endregion
//#region apps/web/src/editor-reference-plan/reference-plan.ts
var oc = {
	visible: !0,
	opacity: .5
}, sc = (e) => e.width * e.pixelHeight / e.pixelWidth, cc = ([e, t], n) => {
	let r = n * Math.PI / 180;
	return [e * Math.cos(r) - t * Math.sin(r), e * Math.sin(r) + t * Math.cos(r)];
}, lc = (e, [t, n]) => {
	let [r, i] = cc([(t - .5) * e.width, (n - .5) * sc(e)], e.angle);
	return [e.center[0] + r, e.center[1] + i];
}, uc = (e, t) => {
	let [n, r] = cc([t[0] - e.center[0], t[1] - e.center[1]], -e.angle);
	return [n / e.width + .5, r / sc(e) + .5];
};
function dc(e, t, n, r) {
	let i = lc(e, t), a = lc(e, n), o = Math.hypot(a[0] - i[0], a[1] - i[1]);
	if (!Number.isFinite(r) || r <= 0) throw Error("Enter a distance greater than zero in metres.");
	if (o < 1e-6) throw Error("Choose two different points on the image.");
	let s = r / o;
	return {
		...e,
		width: e.width * s,
		center: [i[0] + (e.center[0] - i[0]) * s, i[1] + (e.center[1] - i[1]) * s]
	};
}
function fc(e, t, n) {
	let r = lc(e, [1 - t[0], 1 - t[1]]), i = lc(e, t), a = i[0] - r[0], o = i[1] - r[1], s = Math.max(.01 / e.width, ((n[0] - r[0]) * a + (n[1] - r[1]) * o) / (a * a + o * o));
	return {
		...e,
		width: e.width * s,
		center: [r[0] + a * s / 2, r[1] + o * s / 2]
	};
}
//#endregion
//#region apps/web/src/editor-reference-plan/ReferenceCanvasLayers.tsx
var pc = [
	[0, 0],
	[1, 0],
	[1, 1],
	[0, 1]
], mc = new v(new Y(0, 1, 0), 0);
function hc(e, t, n, r) {
	let i = new Y(e[0], 0, e[1]).project(t);
	return [(i.x + 1) * n / 2, (1 - i.y) * r / 2];
}
function gc(e, t) {
	if (!t.canvas || !t.camera) return null;
	let n = t.canvas.getBoundingClientRect(), r = new j();
	r.setFromCamera(new k((e[0] - n.left) / n.width * 2 - 1, 1 - (e[1] - n.top) / n.height * 2), t.camera);
	let i = r.ray.intersectPlane(mc, new Y());
	return i ? [i.x, i.z] : null;
}
function _c({ projection: e }) {
	let { set: t, invalidate: n } = B();
	return (0, Z.useEffect)(() => {
		let r = (e) => {
			t({ camera: e }), n();
		}, i = e.current;
		return i.background = r, i.camera && r(i.camera), () => {
			i.background = null;
		};
	}, [
		e,
		t,
		n
	]), null;
}
function vc({ projection: e, reference: t, image: n, outline: r }) {
	let { setEvents: i, invalidate: a } = B();
	return (0, Z.useEffect)(() => (i({ enabled: !t.adjusting }), () => i({ enabled: !0 })), [t.adjusting, i]), (0, Z.useEffect)(() => {
		a();
	}), q(({ camera: i, size: a, gl: o }) => {
		e.current.camera = i, e.current.canvas = o.domElement, e.current.background?.(i);
		let s = gc([a.width / 2 + o.domElement.getBoundingClientRect().left, a.height / 2 + o.domElement.getBoundingClientRect().top], e.current), c = "zoom" in i ? Number(i.zoom) : 1;
		s && (t.viewport.current = {
			center: s,
			width: a.width / c,
			height: a.height / c
		});
		let l = t.plan;
		if (!l) return;
		let u = (e) => hc(lc(l, e), i, a.width, a.height), d = pc.map(u), [f, p, , m] = d;
		n.current && (n.current.style.transform = `matrix(${(p[0] - f[0]) / l.pixelWidth},${(p[1] - f[1]) / l.pixelWidth},${(m[0] - f[0]) / l.pixelHeight},${(m[1] - f[1]) / l.pixelHeight},${f[0]},${f[1]})`);
		let h = r.current;
		if (!h) return;
		h.querySelector("polygon")?.setAttribute("points", d.map((e) => e.join(",")).join(" ")), d.forEach((e, t) => {
			let n = h.querySelector(`[data-handle="${t}"]`);
			n?.setAttribute("cx", String(e[0])), n?.setAttribute("cy", String(e[1]));
		});
		let g = u([.5, 0]), _ = u([.5, .5]), v = Math.hypot(g[0] - _[0], g[1] - _[1]) || 1, y = [g[0] + (g[0] - _[0]) * 28 / v, g[1] + (g[1] - _[1]) * 28 / v], b = h.querySelector("[data-handle=\"rotate\"]");
		b?.setAttribute("cx", String(y[0])), b?.setAttribute("cy", String(y[1]));
		let x = h.querySelector("line");
		x?.setAttribute("x1", String(g[0])), x?.setAttribute("y1", String(g[1])), x?.setAttribute("x2", String(y[0])), x?.setAttribute("y2", String(y[1])), t.points.forEach((e, t) => {
			let n = u(e);
			h.querySelector(`[data-point="${t}"]`)?.setAttribute("transform", `translate(${n[0]},${n[1]})`);
		});
	}), null;
}
function yc(e, t, n) {
	let r = (0, Z.useRef)({
		camera: null,
		canvas: null,
		background: null
	}), i = (0, Z.useRef)(null), a = (0, Z.useRef)(null), [o, s] = (0, Z.useState)(null), [c, l] = (0, Z.useState)(null), u = e.plan?.assetId, { getAsset: d } = e.storage;
	(0, Z.useEffect)(() => {
		let e = !0, t;
		return l(null), u && d(u).then((n) => {
			e && (t = URL.createObjectURL(n), s({
				id: u,
				value: t
			}));
		}).catch((t) => {
			e && l(t instanceof Error ? t.message : "Could not load the reference plan.");
		}), () => {
			e = !1, t && URL.revokeObjectURL(t);
		};
	}, [u, d]);
	let f = !!(n && e.plan && e.preference.visible && o?.id === u), p = (0, Z.useRef)(null), m = () => {
		let t = p.current;
		p.current = null, e.gestureCancel.current = null, t?.target.hasPointerCapture(t.pointerId) && t.target.releasePointerCapture(t.pointerId);
	}, h = {
		onPointerDownCapture: (t) => {
			if (!e.adjusting || !e.plan || t.button !== 0) return;
			t.stopPropagation(), t.preventDefault(), t.currentTarget.focus();
			let n = gc([t.clientX, t.clientY], r.current);
			if (!n) return;
			if (e.calibrating) {
				e.pickPoint(uc(e.plan, n));
				return;
			}
			let i = r.current.canvas.getBoundingClientRect(), o = [t.clientX - i.left, t.clientY - i.top], s = "move";
			for (let e of a.current?.querySelectorAll("[data-handle]") ?? []) if (Math.hypot(Number(e.getAttribute("cx")) - o[0], Number(e.getAttribute("cy")) - o[1]) <= 16) {
				let t = e.getAttribute("data-handle");
				s = t === "rotate" ? "rotate" : Number(t);
				break;
			}
			let c = uc(e.plan, n);
			s === "move" && c.some((e) => e < 0 || e > 1) || (p.current = {
				plan: e.plan,
				start: n,
				kind: s,
				target: t.currentTarget,
				pointerId: t.pointerId
			}, t.currentTarget.setPointerCapture(t.pointerId), e.gestureCancel.current = () => {
				let t = p.current;
				m(), t && e.update(t.plan);
			});
		},
		onPointerMoveCapture: (t) => {
			let n = p.current;
			if (!n || n.pointerId !== t.pointerId) return;
			t.stopPropagation();
			let i = gc([t.clientX, t.clientY], r.current);
			if (!i) return;
			let { plan: a, start: o, kind: s } = n;
			s === "move" ? e.update({
				...a,
				center: [a.center[0] + i[0] - o[0], a.center[1] + i[1] - o[1]]
			}) : s === "rotate" ? e.update({
				...a,
				angle: a.angle + (Math.atan2(i[1] - a.center[1], i[0] - a.center[0]) - Math.atan2(o[1] - a.center[1], o[0] - a.center[0])) * 180 / Math.PI
			}) : e.update(fc(a, pc[s], i));
		},
		onPointerUpCapture: (e) => {
			p.current?.pointerId === e.pointerId && (e.stopPropagation(), m());
		},
		onPointerCancel: () => e.gestureCancel.current?.(),
		onLostPointerCapture: () => e.gestureCancel.current?.()
	};
	return {
		visible: f,
		background: f ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("div", {
			className: "reference-canvas-layer",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, Q.jsxs)(me, {
				frameloop: "demand",
				dpr: 1,
				gl: {
					antialias: !0,
					alpha: !0
				},
				...bt({ events: void 0 }),
				children: [
					/* @__PURE__ */ (0, Q.jsx)(_c, { projection: r }),
					/* @__PURE__ */ (0, Q.jsx)(ac, {}),
					/* @__PURE__ */ (0, Q.jsx)(ee, {
						floor: t,
						variant: "plan"
					})
				]
			})
		}), /* @__PURE__ */ (0, Q.jsx)("div", {
			className: "reference-canvas-layer",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, Q.jsx)("img", {
				ref: i,
				className: "reference-image",
				src: o.value,
				alt: "",
				draggable: !1,
				width: e.plan.pixelWidth,
				height: e.plan.pixelHeight,
				style: { opacity: e.preference.opacity }
			})
		})] }) : null,
		controls: n && e.adjusting ? /* @__PURE__ */ (0, Q.jsx)("div", {
			className: "reference-canvas-layer reference-adjustment",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, Q.jsxs)("svg", {
				ref: a,
				children: [/* @__PURE__ */ (0, Q.jsxs)("g", {
					visibility: e.calibrating ? "hidden" : "visible",
					children: [
						/* @__PURE__ */ (0, Q.jsx)("polygon", {}),
						pc.map((e, t) => /* @__PURE__ */ (0, Q.jsx)("circle", {
							"data-handle": t,
							r: "7"
						}, t)),
						/* @__PURE__ */ (0, Q.jsx)("line", {}),
						/* @__PURE__ */ (0, Q.jsx)("circle", {
							"data-handle": "rotate",
							r: "7"
						})
					]
				}), e.points.map((e, t) => /* @__PURE__ */ (0, Q.jsxs)("g", {
					"data-point": t,
					children: [/* @__PURE__ */ (0, Q.jsx)("circle", { r: "6" }), /* @__PURE__ */ (0, Q.jsx)("text", {
						x: "10",
						y: "-10",
						children: t + 1
					})]
				}, t))]
			})
		}) : null,
		handlers: h,
		assetError: c,
		bridge: n ? /* @__PURE__ */ (0, Q.jsx)(vc, {
			projection: r,
			reference: e,
			image: i,
			outline: a
		}) : null
	};
}
//#endregion
//#region apps/web/src/editor-preview/construct/WalkStartPointer.tsx
function bc({ floor: e, start: t, placing: n, onPlace: r }) {
	let i = t?.floorId === e.id ? J(t.at, e.coordinates) : null;
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [n && /* @__PURE__ */ (0, Q.jsxs)("mesh", {
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
			let n = Fe(t.point, e.coordinates);
			kt(n, e) && r(n);
		},
		children: [/* @__PURE__ */ (0, Q.jsx)("planeGeometry", { args: [1e4, 1e4] }), /* @__PURE__ */ (0, Q.jsx)(Wr, {
			visible: !1,
			transparent: !0,
			opacity: 0,
			depthWrite: !1
		})]
	}), i && /* @__PURE__ */ (0, Q.jsxs)("group", {
		position: [
			i[0],
			.2,
			i[1]
		],
		children: [/* @__PURE__ */ (0, Q.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			renderOrder: 100,
			raycast: Ur,
			children: [/* @__PURE__ */ (0, Q.jsx)("ringGeometry", { args: [
				.18,
				.25,
				32
			] }), /* @__PURE__ */ (0, Q.jsx)(Wr, {
				color: "#d16c39",
				depthTest: !1,
				depthWrite: !1
			})]
		}), /* @__PURE__ */ (0, Q.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			renderOrder: 101,
			raycast: Ur,
			children: [/* @__PURE__ */ (0, Q.jsx)("circleGeometry", { args: [.14, 3] }), /* @__PURE__ */ (0, Q.jsx)(Wr, {
				color: "#d16c39",
				depthTest: !1,
				depthWrite: !1
			})]
		})]
	})] });
}
//#endregion
//#region apps/web/src/editor-floors/useStairValidation.ts
var xc = [];
function Sc(e, t, n) {
	let [r, i] = (0, Z.useState)(xc), a = (0, Z.useRef)({
		building: e,
		candidate: t,
		registries: n
	});
	a.current = {
		building: e,
		candidate: t,
		registries: n
	};
	let o = (0, Z.useRef)(null), s = (0, Z.useRef)(-Infinity), c = (0, Z.useCallback)(() => {
		o.current !== null && clearTimeout(o.current), o.current = null;
	}, []), l = (0, Z.useCallback)(() => {
		c(), s.current = -Infinity, i(xc);
	}, [c]), u = (0, Z.useCallback)((e = a.current.candidate) => {
		c(), s.current = performance.now();
		let t = e ? rr(a.current.building, e, a.current.registries) : xc;
		return i(t), t;
	}, [c]);
	return (0, Z.useEffect)(() => {
		if (!t) {
			l();
			return;
		}
		let e = 100 - (performance.now() - s.current);
		e <= 0 ? u() : o.current === null && (o.current = setTimeout(() => u(), e));
	}, [
		e,
		t,
		n,
		l,
		u
	]), (0, Z.useEffect)(() => c, [c]), {
		issues: t ? r : xc,
		flush: u,
		cancel: l
	};
}
//#endregion
//#region apps/web/src/editor-floors/StairFeedback.tsx
function Cc({ flight: e }) {
	return /* @__PURE__ */ (0, Q.jsx)(I, {
		position: [
			(Math.min(...e.footprintWorld.map((e) => e[0])) + Math.max(...e.footprintWorld.map((e) => e[0]))) / 2,
			.3,
			Math.max(...e.footprintWorld.map((e) => e[1])) + .65
		],
		center: !0,
		style: {
			pointerEvents: "none",
			width: 250,
			textAlign: "center"
		},
		children: /* @__PURE__ */ (0, Q.jsx)(ti, {
			label: e.spec.shape === "spiral" ? `Ø ${e.spec.diameterMeters.toFixed(2)} m · ${e.spec.totalTurnDegrees}°` : e.spec.shape === "l-shaped" || e.spec.shape === "u-shaped" ? `${e.spec.lowerRunMeters.toFixed(2)} + ${e.spec.upperRunMeters.toFixed(2)} m × ${e.widthMeters.toFixed(2)} m` : `${e.runMeters.toFixed(2)} m × ${e.widthMeters.toFixed(2)} m`,
			ariaLabel: "Stair length and width"
		})
	});
}
//#endregion
//#region apps/web/src/editor-floors/ConnectedFloorGuide.tsx
function wc({ floor: e }) {
	let t = (t, n) => t.map((r, i) => /* @__PURE__ */ (0, Q.jsx)(Kr, {
		from: J(r, e.coordinates),
		to: J(t[(i + 1) % t.length], e.coordinates),
		color: "#b4bcb9",
		width: .025,
		elevation: .11,
		overlay: !0
	}, `${n}-${i}`)), n = e.footprint[0] ? J(e.footprint[0], e.coordinates) : [0, 0];
	return /* @__PURE__ */ (0, Q.jsxs)("group", {
		name: "connected-floor-guide",
		children: [
			t(e.footprint, "footprint"),
			e.walls.map((t) => /* @__PURE__ */ (0, Q.jsx)(Kr, {
				from: J(t.from, e.coordinates),
				to: J(t.to, e.coordinates),
				color: "#b4bcb9",
				width: .045,
				elevation: .11,
				overlay: !0
			}, t.id)),
			e.openings.map((t) => {
				let n = e.walls.find((e) => e.id === t.wallId);
				if (!n) return null;
				let r = J(n.from, e.coordinates), i = J(n.to, e.coordinates), a = Math.hypot(i[0] - r[0], i[1] - r[1]);
				if (!a) return null;
				let o = t.offsetFromWallStartPlanUnits * e.coordinates.metersPerPlanUnit, s = (e) => [r[0] + (i[0] - r[0]) * e / a, r[1] + (i[1] - r[1]) * e / a];
				return /* @__PURE__ */ (0, Q.jsx)(Kr, {
					from: s(o),
					to: s(o + t.widthPlanUnits * e.coordinates.metersPerPlanUnit),
					color: "#d8dfdc",
					width: .1,
					elevation: .115,
					overlay: !0
				}, t.id);
			}),
			(e.pools ?? []).flatMap((e) => t(e.polygon, e.id)),
			/* @__PURE__ */ (0, Q.jsxs)(I, {
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
var Tc = (0, Z.forwardRef)(function({ children: e, label: t, mode: n = "furnish" }, r) {
	return /* @__PURE__ */ (0, Q.jsx)("div", {
		ref: r,
		className: "selected-item-actions",
		"data-mode": n,
		role: "group",
		"aria-label": t,
		onPointerDown: (e) => e.stopPropagation(),
		onClick: (e) => e.stopPropagation(),
		children: e
	});
}), Ec = ({ centerX: e, itemTop: t, itemBottom: n, width: r, height: i, toolbarWidth: a, toolbarHeight: o, topInset: s }) => {
	let c = Math.max(8, i - o - 8), l = Math.min(c, Math.max(8, s)), u = t - o - 18;
	return {
		x: Math.max(8, Math.min(r - a - 8, e - a / 2)),
		y: Math.max(l, Math.min(c, u >= l ? u : n + 18))
	};
};
//#endregion
//#region apps/web/src/editor-floors/SelectedStairControls.tsx
function Dc({ flight: e, destinationName: t, onGoToFloor: n, onDelete: r }) {
	let { camera: i, gl: a, size: o, invalidate: s } = B(), c = (0, Z.useRef)(null), l = (0, Z.useRef)(null), u = (0, Z.useMemo)(() => new Y(), []), d = (0, Z.useMemo)(() => [(Math.min(...e.footprintWorld.map((e) => e[0])) + Math.max(...e.footprintWorld.map((e) => e[0]))) / 2, (Math.min(...e.footprintWorld.map((e) => e[1])) + Math.max(...e.footprintWorld.map((e) => e[1]))) / 2], [e]);
	return (0, Z.useLayoutEffect)(() => {
		s();
	}, [
		s,
		e,
		o
	]), q(() => {
		if (!c.current || !l.current) return;
		let t = (e, t) => (u.set(e, .13, t).project(i), {
			x: (u.x + 1) * o.width / 2,
			y: (1 - u.y) * o.height / 2,
			z: u.z
		}), n = e.footprintWorld.map(([e, n]) => t(e, n)), r = t(...d);
		if (l.current.style.visibility = "hidden", r.z < -1 || r.z > 1 || r.x < 0 || r.x > o.width || r.y < 0 || r.y > o.height) return;
		let s = a.domElement.closest(".direction-preview")?.querySelector(".editor-header")?.getBoundingClientRect(), f = Ec({
			centerX: r.x,
			itemTop: Math.min(...n.map((e) => e.y)),
			itemBottom: Math.max(...n.map((e) => e.y)),
			width: o.width,
			height: o.height,
			toolbarWidth: c.current.offsetWidth,
			toolbarHeight: c.current.offsetHeight,
			topInset: s ? s.bottom - a.domElement.getBoundingClientRect().top + 8 : 8
		});
		l.current.style.visibility = "visible", c.current.style.transform = `translate(${f.x}px, ${f.y}px)`;
	}), /* @__PURE__ */ (0, Q.jsx)(I, {
		fullscreen: !0,
		calculatePosition: (e, t, n) => [n.width / 2, n.height / 2],
		zIndexRange: [6, 6],
		style: { pointerEvents: "none" },
		children: /* @__PURE__ */ (0, Q.jsx)("div", {
			ref: l,
			className: "selected-item-controls",
			children: /* @__PURE__ */ (0, Q.jsxs)(Tc, {
				ref: c,
				mode: "construct",
				label: "Selected stair actions",
				children: [
					/* @__PURE__ */ (0, Q.jsx)(or, {
						icon: "floor",
						label: `Go to ${t}`,
						onClick: n
					}),
					/* @__PURE__ */ (0, Q.jsx)("span", {
						className: "selected-item-actions__separator",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, Q.jsx)(or, {
						icon: "delete",
						label: "Delete stairs",
						onClick: r
					})
				]
			})
		})
	});
}
//#endregion
//#region apps/web/src/editor-floors/EditableStair.tsx
function Oc({ building: e, stair: t, activeFloorId: n, selected: r, enabled: i, registries: a, onIssuesChange: o, onSelect: s, onCommit: c, onDraggingChange: l, onGoToFloor: u, onDelete: d }) {
	let { camera: p, size: m, gl: h, get: g } = B(), _ = (0, Z.useRef)(null), [y, b] = (0, Z.useState)(null), [x, S] = (0, Z.useState)(null), C = (0, Z.useRef)(null), w = y ?? t, T = Sc(e, r && i ? w : null, a), E = !!y;
	(0, Z.useEffect)(() => (o?.(r && E ? T.issues : null), () => o?.(null)), [
		o,
		r,
		E,
		T.issues
	]);
	let D = Ie(e, w), O = (0, Z.useRef)({
		onDraggingChange: l,
		validation: T
	});
	O.current = {
		onDraggingChange: l,
		validation: T
	};
	let k = () => {
		let e = C.current;
		C.current = null, e?.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId), b(null), S(null), O.current.validation.cancel(), _.current &&= (_.current.enabled = !0, null), e && O.current.onDraggingChange(!1);
	}, A = (0, Z.useRef)(k);
	A.current = k;
	let j = Ht();
	(0, Z.useEffect)(() => {
		(!i || !r) && A.current();
	}, [
		i,
		r,
		t
	]), (0, Z.useEffect)(() => {
		let e = (e) => {
			e.key === "Escape" && C.current && (e.preventDefault(), e.stopImmediatePropagation(), A.current());
		}, t = (e) => {
			C.current?.pointerId === e.pointerId && A.current();
		};
		return j.events.addEventListener("keydown", e, !0), h.domElement.addEventListener("lostpointercapture", t), () => {
			j.events.removeEventListener("keydown", e, !0), h.domElement.removeEventListener("lostpointercapture", t), A.current();
		};
	}, [h, j]);
	let M = (n, r) => {
		let i = n.ray.intersectPlane(new v(new Y(0, 1, 0), 0), new Y());
		if (!i) return null;
		let a = e.coordinates, o = r && (r.handle === "bottom" || r.handle === "top"), s = r && Ie(e, r.original), c = s && (r?.handle === "bottom" ? s.path[s.path.length - 1] : s.path[0]), l = o ? Ir({
			point: i,
			coordinates: a,
			walls: e.floors.filter((e) => e.id === t.lowerFloorId || e.id === t.upperFloorId).flatMap((e) => e.walls),
			onSnap: S,
			pixelsPerMeter: ni(p, m.height),
			pointerType: n.nativeEvent.pointerType,
			absolute: n.altKey,
			angleOrigin: c ? Fe(c, a) : void 0
		}) : Fr({
			point: i,
			coordinates: a,
			absolute: n.altKey
		}), [u, d] = J(l, a);
		return {
			x: u,
			z: d
		};
	}, N = (t, n) => {
		let r = M(t, n);
		return r ? $n(n.original, e.coordinates, n.start, n.grab, r, n.handle) : null;
	}, P = (e) => ({
		onPointerDown: (n) => {
			if (!i || n.button !== 0 || n.metaKey || n.ctrlKey || n.shiftKey || C.current) return;
			let r = M(n);
			if (!r || !D) return;
			n.stopPropagation(), s();
			let a = g().controls;
			a?.enabled && (a.enabled = !1, _.current = a), l(!0);
			let o = n.target;
			o.setPointerCapture(n.pointerId), C.current = {
				...Dr(n.pointerId, [n.nativeEvent.clientX, n.nativeEvent.clientY]),
				original: t,
				candidate: t,
				start: {
					x: D.originWorld[0],
					z: D.originWorld[1]
				},
				grab: r,
				handle: e,
				target: o
			};
		},
		onPointerMove: (e) => {
			let t = C.current;
			if (!t || t.pointerId !== e.pointerId) return;
			e.stopPropagation();
			let n = Or(t, e.pointerId, [e.nativeEvent.clientX, e.nativeEvent.clientY]);
			if (!n) return;
			n.started && l(!0);
			let r = N(e, n.drag) ?? n.drag.candidate;
			C.current = {
				...n.drag,
				candidate: r
			}, b(r);
		},
		onPointerUp: (e) => {
			let t = C.current;
			if (!t || t.pointerId !== e.pointerId) return;
			e.stopPropagation();
			let n = h.domElement.getBoundingClientRect(), r = e.nativeEvent.clientX >= n.left && e.nativeEvent.clientX <= n.right && e.nativeEvent.clientY >= n.top && e.nativeEvent.clientY <= n.bottom, i = t.dragActive && r ? N(e, t) ?? t.candidate : null;
			i && (T.flush(i), c(i)), k();
		},
		onPointerCancel: (e) => {
			C.current?.pointerId === e.pointerId && (e.stopPropagation(), k());
		}
	});
	if (!D) return null;
	let F = e.floors.find((e) => e.id === (n === t.lowerFloorId ? t.upperFloorId : t.lowerFloorId));
	return /* @__PURE__ */ (0, Q.jsxs)("group", {
		name: `editable-stair-${t.id}`,
		children: [
			y && /* @__PURE__ */ (0, Q.jsx)(wc, { floor: F }),
			/* @__PURE__ */ (0, Q.jsx)(f, {
				flight: D,
				upper: n === t.upperFloorId,
				selected: r,
				invalid: T.issues.some((e) => e.severity !== "warning"),
				handlers: i ? P("body") : void 0
			}),
			/* @__PURE__ */ (0, Q.jsx)(qr, {
				snap: x,
				coordinates: e.coordinates
			}),
			r && /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
				tr(D).map(({ handle: e, at: n }) => /* @__PURE__ */ (0, Q.jsx)(Ui, {
					name: `stair-${e}-${t.id}`,
					handlers: P(e),
					at: n
				}, e)),
				y && /* @__PURE__ */ (0, Q.jsx)(Cc, { flight: D }),
				!y && /* @__PURE__ */ (0, Q.jsx)(Dc, {
					flight: D,
					destinationName: F.name,
					onGoToFloor: u,
					onDelete: d
				})
			] })
		]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/SelectedRoomControls.tsx
function kc({ editor: e, disabled: t }) {
	let n = Bt(e.selection).filter((e) => e.kind === "room"), r = e.previewFloor.rooms.filter((e) => n.some((t) => t.id === e.id));
	if (!r.length) return null;
	let i = r.flatMap((e) => e.polygon), [a, o] = J(Lt(r[0].polygon), e.draft.coordinates), [, s] = J([i[0][0], Math.min(...i.map((e) => e[1]))], e.draft.coordinates), c = !e.deletionTargets.some((e) => e.kind === "room");
	return /* @__PURE__ */ (0, Q.jsx)(I, {
		center: !0,
		position: [
			a,
			.85,
			(o + s) / 2
		],
		zIndexRange: [6, 6],
		children: /* @__PURE__ */ (0, Q.jsx)("div", {
			className: "selected-room-controls",
			children: /* @__PURE__ */ (0, Q.jsx)(Tc, {
				mode: "construct",
				label: "Selected room actions",
				children: /* @__PURE__ */ (0, Q.jsx)(or, {
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
function Ac({ editor: e, onDraggingChange: t }) {
	let { draft: n, selection: r, tool: i } = e, { snap: a, drag: o, handlers: s } = Ki({
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
	return /* @__PURE__ */ (0, Q.jsxs)("group", {
		name: "construction-hedges",
		children: [/* @__PURE__ */ (0, Q.jsx)(qr, {
			snap: a,
			coordinates: n.coordinates
		}), (n.hedges ?? []).map((e) => {
			let t = o?.id === e.id ? o.polygon : [e.from, e.to], a = Lr(t[0], t[1], n.coordinates), c = r?.kind === "hedge" && r.id === e.id;
			return /* @__PURE__ */ (0, Q.jsxs)("group", { children: [/* @__PURE__ */ (0, Q.jsxs)("mesh", {
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
				children: [/* @__PURE__ */ (0, Q.jsx)("boxGeometry", { args: [
					a.length,
					.04,
					e.widthMeters
				] }), /* @__PURE__ */ (0, Q.jsx)(Gr, { color: c ? "#84a661" : "#597e43" })]
			}), c && /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(Kr, {
				from: J(t[0], n.coordinates),
				to: J(t[1], n.coordinates),
				width: .035,
				elevation: .13,
				color: "#ff754d"
			}), t.map((r, i) => {
				let [a, o] = J(r, n.coordinates);
				return /* @__PURE__ */ (0, Q.jsx)(Ui, {
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
function jc({ stair: e, coordinates: t, building: n, registries: r, onIssuesChange: i, onComplete: a, onCancel: o, onDraggingChange: s }) {
	let { gl: c, camera: l } = B(), [u, d] = (0, Z.useState)(null), [p, m] = (0, Z.useState)(null), h = Sc(n, u, r);
	(0, Z.useEffect)(() => (i?.(h.issues), () => i?.(null)), [i, h.issues]);
	let g = (0, Z.useRef)({
		stair: e,
		coordinates: t,
		building: n,
		onComplete: a,
		onCancel: o,
		onDraggingChange: s,
		validation: h
	});
	g.current = {
		stair: e,
		coordinates: t,
		building: n,
		onComplete: a,
		onCancel: o,
		onDraggingChange: s,
		validation: h
	};
	let _ = u ? Ie(n, u) : null, y = Ht();
	(0, Z.useEffect)(() => {
		let e = c.domElement, t = new j(), n = new v(new Y(0, 1, 0), 0), r = null, i = null, a = null, o = null, s = (a) => {
			let { building: o, stair: s, coordinates: c } = g.current, u = e.getBoundingClientRect();
			t.setFromCamera(new k((a.clientX - u.left) / u.width * 2 - 1, 1 - (a.clientY - u.top) / u.height * 2), l);
			let d = t.ray.intersectPlane(n, new Y());
			if (!d) return null;
			let f = o.floors.filter((e) => e.id === s.lowerFloorId || e.id === s.upperFloorId).flatMap((e) => e.walls), p = Ir(bt({
				point: d,
				coordinates: c,
				walls: f,
				onSnap: m,
				pixelsPerMeter: ni(l, u.height),
				pointerType: a.pointerType,
				absolute: a.altKey,
				angleOrigin: i ?? r ? Fe(i ?? r, c) : void 0
			})), [h, _] = J(p, c);
			return {
				x: h,
				z: _
			};
		}, u = (e) => {
			if (!r) return null;
			let t = g.current.stair, n = i && (t.shape === "l-shaped" || t.shape === "u-shaped") ? Qn(t, g.current.coordinates, r, i, e) : Zn(t, g.current.coordinates, r, e);
			return d(n), n;
		}, f = () => {
			let t = a;
			a = null, t !== null && e.hasPointerCapture(t) && e.releasePointerCapture(t), g.current.onDraggingChange(!1);
		}, p = () => {
			f(), g.current.validation.cancel(), g.current.onCancel();
		}, h = (t) => {
			if (t.stopImmediatePropagation(), t.button !== 0 || a !== null || t.metaKey || t.ctrlKey || t.shiftKey) return;
			let n = s(t);
			n && (t.preventDefault(), o = kr(t.pointerId, [t.clientX, t.clientY], Fe(n, g.current.coordinates), !!r), r ??= n, a = t.pointerId, e.setPointerCapture(a), g.current.onDraggingChange(!0), u(n));
		}, _ = (e) => {
			if (e.stopImmediatePropagation(), !r || a !== null && a !== e.pointerId) return;
			let t = s(e);
			t && u(t);
		}, b = (t) => {
			if (t.stopImmediatePropagation(), a !== t.pointerId) return;
			let n = Ar(o, t.pointerId, [t.clientX, t.clientY]), r = e.getBoundingClientRect();
			if (t.clientX < r.left || t.clientX > r.right || t.clientY < r.top || t.clientY > r.bottom) {
				p();
				return;
			}
			let c = s(t);
			if (f(), n) {
				d(null);
				return;
			}
			let l = c && u(c);
			if (l) {
				if ((g.current.stair.shape === "l-shaped" || g.current.stair.shape === "u-shaped") && !i) {
					i = c, m(null);
					return;
				}
				g.current.validation.flush(l), g.current.onComplete(l);
			}
		}, x = (e) => {
			a === e.pointerId && p();
		}, S = (e) => {
			e.key === "Escape" && (e.preventDefault(), e.stopImmediatePropagation(), p());
		};
		return e.addEventListener("pointerdown", h, !0), e.addEventListener("pointermove", _, !0), e.addEventListener("pointerup", b, !0), e.addEventListener("pointercancel", x, !0), e.addEventListener("lostpointercapture", x, !0), y.events.addEventListener("keydown", S, !0), () => {
			e.removeEventListener("pointerdown", h, !0), e.removeEventListener("pointermove", _, !0), e.removeEventListener("pointerup", b, !0), e.removeEventListener("pointercancel", x, !0), e.removeEventListener("lostpointercapture", x, !0), y.events.removeEventListener("keydown", S, !0), f();
		};
	}, [
		c,
		l,
		y
	]);
	let b = n.floors.find((t) => t.id === e.upperFloorId);
	return /* @__PURE__ */ (0, Q.jsxs)("group", {
		name: "stair-placement-preview",
		children: [
			b && /* @__PURE__ */ (0, Q.jsx)(wc, { floor: b }),
			/* @__PURE__ */ (0, Q.jsx)(qr, {
				snap: p,
				coordinates: t
			}),
			_ && /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(f, {
				flight: _,
				invalid: h.issues.some((e) => e.severity !== "warning")
			}), /* @__PURE__ */ (0, Q.jsx)(Cc, { flight: _ })] })
		]
	});
}
//#endregion
//#region apps/web/src/editor-floors/AdjacentFloorGuide.tsx
function Mc({ floor: e, direction: t }) {
	let n = t === "above" ? "#b7c4cc" : "#c6c9bd";
	return /* @__PURE__ */ (0, Q.jsxs)("group", {
		name: `adjacent-floor-guide-${t}`,
		userData: { floorId: e.id },
		children: [e.walls.map((t) => /* @__PURE__ */ (0, Q.jsx)(Kr, {
			from: J(t.from, e.coordinates),
			to: J(t.to, e.coordinates),
			color: n,
			width: .035,
			elevation: -.012
		}, t.id)), (e.outdoorPlatforms ?? []).map((t) => /* @__PURE__ */ (0, Q.jsx)("group", {
			name: `adjacent-platform-${t.id}`,
			children: t.polygon.map((t, r, i) => /* @__PURE__ */ (0, Q.jsx)(Kr, {
				from: J(t, e.coordinates),
				to: J(i[(r + 1) % i.length], e.coordinates),
				color: n,
				width: .035,
				elevation: -.012
			}, r))
		}, t.id))]
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/SelectedOpeningControls.tsx
var Nc = (0, Z.forwardRef)(function({ opening: e, detailsOpen: t, disabled: n, canDuplicate: r, onDetails: i, onChange: a, onDuplicate: o, onDelete: s }, c) {
	return /* @__PURE__ */ (0, Q.jsxs)(Tc, {
		ref: c,
		mode: "construct",
		label: "Selected opening actions",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(or, {
				icon: "details",
				label: "Details",
				pressed: t,
				disabled: n,
				onClick: i
			}),
			/* @__PURE__ */ (0, Q.jsx)(or, {
				icon: "duplicate",
				label: "Duplicate",
				disabled: n || !r,
				disabledReason: r ? void 0 : "No free space on this wall.",
				onClick: o
			}),
			/* @__PURE__ */ (0, Q.jsx)(hr, {
				opening: e,
				onChange: a,
				disabled: n
			}),
			/* @__PURE__ */ (0, Q.jsx)("span", {
				className: "selected-item-actions__separator",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, Q.jsx)(or, {
				icon: "delete",
				label: "Delete",
				disabled: n,
				onClick: s
			})
		]
	});
});
function Pc({ opening: e, draft: t, detailsOpen: n, disabled: r, canDuplicate: i, onDetails: a, onChange: o, onDuplicate: s, onDelete: c }) {
	let { camera: l, gl: u, size: d, invalidate: f } = B(), p = (0, Z.useRef)(null), m = (0, Z.useRef)(null), h = (0, Z.useMemo)(() => new Y(), []), g = t.walls.find((t) => t.id === e.wallId);
	return (0, Z.useLayoutEffect)(() => {
		f();
	}, [
		f,
		e,
		g,
		d,
		n
	]), q(() => {
		if (!p.current || !m.current || (m.current.style.visibility = "hidden", !g)) return;
		let n = J(g.from, t.coordinates), r = J(g.to, t.coordinates), i = Math.hypot(r[0] - n[0], r[1] - n[1]);
		if (i < 1e-4) return;
		let a = (r[0] - n[0]) / i, o = (r[1] - n[1]) / i, s = t.coordinates.metersPerPlanUnit, c = e.offsetPlanUnits * s, f = e.widthPlanUnits * s, _ = (e, t) => (h.set(n[0] + a * (c + e) - o * t, .05, n[1] + o * (c + e) + a * t).project(l), {
			x: (h.x + 1) * d.width / 2,
			y: (1 - h.y) * d.height / 2,
			z: h.z
		}), v = _(f / 2, 0);
		if (v.z < -1 || v.z > 1 || v.x < 0 || v.x > d.width || v.y < 0 || v.y > d.height) return;
		let y = Tr(e, f, g.thicknessMeters ?? t.interiorWallThicknessMeters).flatMap((e) => [_(...e.from), _(...e.to)]), b = u.domElement.closest(".direction-preview")?.querySelector(".editor-header")?.getBoundingClientRect(), x = Ec({
			centerX: v.x,
			itemTop: Math.min(...y.map((e) => e.y)),
			itemBottom: Math.max(...y.map((e) => e.y)),
			width: d.width,
			height: d.height,
			toolbarWidth: p.current.offsetWidth,
			toolbarHeight: p.current.offsetHeight,
			topInset: b ? b.bottom - u.domElement.getBoundingClientRect().top + 8 : 8
		});
		m.current.style.visibility = "visible", p.current.style.transform = `translate(${x.x}px, ${x.y}px)`;
	}), /* @__PURE__ */ (0, Q.jsx)(I, {
		fullscreen: !0,
		calculatePosition: (e, t, n) => [n.width / 2, n.height / 2],
		zIndexRange: [6, 6],
		style: { pointerEvents: "none" },
		children: /* @__PURE__ */ (0, Q.jsx)("div", {
			ref: m,
			className: "selected-item-controls",
			"data-opening-id": e.id,
			children: /* @__PURE__ */ (0, Q.jsx)(Nc, {
				ref: p,
				opening: e,
				detailsOpen: n,
				disabled: r,
				canDuplicate: i,
				onDetails: a,
				onChange: o,
				onDuplicate: s,
				onDelete: c
			})
		})
	});
}
//#endregion
//#region apps/web/src/editor-workspace/RetainedArrangeScene.tsx
function Fc({ active: e, children: t }) {
	let [n, r] = (0, Z.useState)(null);
	return e && n !== t && r(t), /* @__PURE__ */ (0, Q.jsx)("group", {
		name: "retained-arrange-scene",
		visible: e,
		children: e ? t : n
	});
}
//#endregion
//#region apps/web/src/editor-preview/furnish/selection-geometry.ts
var Ic = (e) => e.kind === "wall" ? e.rotationOffsetRadians : e.rotationYRadians, Lc = (e) => {
	let t = Math.PI * 2;
	return (e % t + t) % t;
}, Rc = (e, t) => Math.atan2(Math.sin(e - t), Math.cos(e - t)), zc = (e, t) => {
	let n = Go(e, t);
	return Math.hypot(Math.abs(n.center[0]) + n.size[0] / 2, Math.abs(n.center[2]) + n.size[2] / 2) + .12;
}, Bc = (0, Z.forwardRef)(function({ detailsOpen: e, isDevice: t, disabled: n, onDetails: r, onDuplicate: i, onDelete: a, onMap: o }, s) {
	return /* @__PURE__ */ (0, Q.jsxs)(Tc, {
		ref: s,
		label: "Selected item actions",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(or, {
				icon: "details",
				label: "Details",
				pressed: e,
				disabled: n,
				onClick: r
			}),
			/* @__PURE__ */ (0, Q.jsx)(or, {
				icon: "duplicate",
				label: "Duplicate",
				disabled: n,
				onClick: i
			}),
			t && o && /* @__PURE__ */ (0, Q.jsx)(or, {
				icon: "connect",
				label: "Connect device",
				disabled: n,
				onClick: () => o?.()
			}),
			/* @__PURE__ */ (0, Q.jsx)("span", {
				className: "selected-item-actions__separator",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, Q.jsx)(or, {
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
function Vc({ item: e, definition: t, floor: n, actions: r, busy: i, onRotate: a, onMovePlacement: o, onSelect: s, onBegin: c, onCommit: l, onCancel: u }) {
	let { camera: d, gl: f, size: p, invalidate: m } = B(), h = (0, Z.useRef)(null), g = (0, Z.useRef)(null), _ = (0, Z.useRef)(null), y = (0, Z.useRef)(null), b = (0, Z.useRef)(null), x = (0, Z.useRef)(null), S = (0, Z.useRef)(null), C = (0, Z.useRef)(null), w = (0, Z.useRef)(null), [T, E] = (0, Z.useState)(!1), [D, O] = (0, Z.useState)(!1), A = Qe(e.placement, n), M = Go(e, t), N = zc(e, t), P = (0, Z.useMemo)(() => new Y(), []), F = (0, Z.useMemo)(() => new j(), []), L = (0, Z.useMemo)(() => new k(), []), R = (0, Z.useMemo)(() => new v(new Y(0, 1, 0)), []), z = (0, Z.useRef)({
		onCancel: u,
		onCommit: l
	});
	(0, Z.useLayoutEffect)(() => {
		z.current = {
			onCancel: u,
			onCommit: l
		};
	});
	let V = (e) => {
		let t = w.current;
		t && (w.current = null, E(!1), O(!1), e ? z.current.onCancel() : z.current.onCommit(), t.target.hasPointerCapture?.(t.pointerId) && t.target.releasePointerCapture(t.pointerId));
	}, H = Ht();
	(0, Z.useEffect)(() => {
		let e = (e) => {
			e.key !== "Escape" || !w.current || (e.preventDefault(), e.stopPropagation(), V(!0));
		}, t = () => V(!0);
		return H.events.addEventListener("keydown", e, !0), window.addEventListener("blur", t), () => {
			H.events.removeEventListener("keydown", e, !0), window.removeEventListener("blur", t), w.current && (w.current = null, z.current.onCancel());
		};
	}, [H]), (0, Z.useLayoutEffect)(() => {
		m();
	}, [
		d,
		m,
		e,
		p
	]);
	let U = (e, t) => {
		let n = f.domElement.getBoundingClientRect();
		return F.setFromCamera(L.set((e.clientX - n.left) / n.width * 2 - 1, -(e.clientY - n.top) / n.height * 2 + 1), d), R.constant = -t, F.ray.intersectPlane(R, P);
	}, W = (e) => {
		let t = U(e, A.position[1]);
		return t ? Math.atan2(t.z - A.position[2], t.x - A.position[0]) : null;
	};
	q(() => {
		if (!h.current || !g.current) return;
		let e = (e, t, n) => (P.set(e, t, n).project(d), {
			x: (P.x + 1) * p.width / 2,
			y: (1 - P.y) * p.height / 2,
			z: P.z
		}), [t, n, r] = A.position, i = e(t, n, r), a = i.z >= -1 && i.z <= 1 && i.x >= 0 && i.x <= p.width && i.y >= 0 && i.y <= p.height;
		if (h.current.style.visibility = a ? "visible" : "hidden", !a) return;
		let o = e(t + 1, n, r), s = e(t, n, r + 1), c = Math.max(Math.hypot(o.x - i.x, o.y - i.y), Math.hypot(s.x - i.x, s.y - i.y), 1), l = Math.max(N, 72 / c), u = Array.from({ length: 65 }, (i, a) => {
			let o = a / 64 * Math.PI * 2;
			return e(t + Math.cos(o) * l, n, r + Math.sin(o) * l);
		}), m = u.map((e, t) => `${t ? "L" : "M"}${e.x.toFixed(2)},${e.y.toFixed(2)}`).join(" ") + " Z";
		_.current?.setAttribute("d", m), y.current?.setAttribute("d", m);
		let v = u.reduce((e, t) => e.x < t.x ? e : t), w = u.reduce((e, t) => e.x > t.x ? e : t), T = u.reduce((e, t) => e.y < t.y ? e : t), E = u.reduce((e, t) => e.y > t.y ? e : t), D = (e, t) => {
			e && (e.style.transform = `translate(${Math.max(24, Math.min(p.width - 24, t.x))}px, ${Math.max(24, Math.min(p.height - 24, t.y))}px) translate(-50%, -50%)`);
		};
		D(b.current, v), D(x.current, i), D(S.current, w);
		let O = [], k = Math.cos(A.rotationYRadians), j = Math.sin(A.rotationYRadians);
		for (let i of [-1, 1]) for (let a of [-1, 1]) for (let o of [-1, 1]) {
			let s = M.center[0] + i * M.size[0] / 2, c = M.center[2] + o * M.size[2] / 2;
			O.push(e(t + s * k + c * j, n + M.center[1] + a * M.size[1] / 2, r - s * j + c * k));
		}
		let F = f.domElement.getBoundingClientRect(), I = f.domElement.closest(".direction-preview")?.querySelector(".editor-header")?.getBoundingClientRect(), L = Ec({
			centerX: (Math.min(...O.map((e) => e.x)) + Math.max(...O.map((e) => e.x))) / 2,
			itemTop: Math.min(...O.map((e) => e.y)),
			itemBottom: Math.max(...O.map((e) => e.y)),
			width: p.width,
			height: p.height,
			toolbarWidth: g.current.offsetWidth,
			toolbarHeight: g.current.offsetHeight,
			topInset: I ? I.bottom - F.top + 8 : 8
		});
		g.current.style.transform = `translate(${L.x}px, ${L.y}px)`;
		let R = Math.min(p.height - 24, E.y + 25), z = E.x + 24 > L.x && E.x - 24 < L.x + g.current.offsetWidth && R + 14 > L.y && R - 14 < L.y + g.current.offsetHeight;
		D(C.current, z ? {
			x: T.x,
			y: T.y - 25
		} : {
			x: E.x,
			y: R
		});
	});
	let ee = Ic(e.placement), te = (t) => a(e.id, Lc(ee + t * Math.PI / 2));
	return /* @__PURE__ */ (0, Q.jsx)(I, {
		fullscreen: !0,
		calculatePosition: (e, t, n) => [n.width / 2, n.height / 2],
		zIndexRange: [6, 6],
		style: { pointerEvents: "none" },
		children: /* @__PURE__ */ (0, Q.jsxs)("div", {
			ref: h,
			className: "selected-item-controls",
			"data-item-id": e.id,
			"data-rotating": T,
			"data-moving": D,
			onPointerDown: (e) => e.stopPropagation(),
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, Q.jsxs)("svg", {
					className: "selected-item-ring",
					"aria-label": `Rotation ring for ${t.label}`,
					children: [/* @__PURE__ */ (0, Q.jsx)("path", {
						ref: _,
						className: "selected-item-ring__line"
					}), /* @__PURE__ */ (0, Q.jsx)("path", {
						ref: y,
						className: "selected-item-ring__target",
						style: { pointerEvents: i && !T ? "none" : void 0 },
						onClick: (e) => e.stopPropagation(),
						onPointerDown: (e) => {
							if (e.button !== 0 || i || w.current) return;
							e.preventDefault(), e.stopPropagation();
							let t = W(e);
							t !== null && (e.currentTarget.setPointerCapture(e.pointerId), w.current = {
								kind: "rotation",
								pointerId: e.pointerId,
								target: e.currentTarget,
								previousAngle: t,
								rotation: ee
							}, E(!0), c());
						},
						onPointerMove: (t) => {
							let n = w.current;
							if (n?.kind !== "rotation" || n.pointerId !== t.pointerId) return;
							t.stopPropagation();
							let r = W(t);
							r !== null && (n.rotation += Rc(n.previousAngle, r), n.previousAngle = r, a(e.id, Lc(n.rotation)));
						},
						onPointerUp: (e) => {
							e.stopPropagation(), e.pointerId === w.current?.pointerId && V(!1);
						},
						onPointerCancel: () => V(!0),
						onLostPointerCapture: () => V(!0)
					})]
				}),
				/* @__PURE__ */ (0, Q.jsx)("div", {
					ref: b,
					className: "selected-item-rotation-button",
					children: /* @__PURE__ */ (0, Q.jsx)(or, {
						icon: "rotateLeft",
						label: "Rotate counterclockwise 90°",
						disabled: i,
						onClick: () => te(1)
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)("div", {
					ref: x,
					className: "selected-item-rotation-button selected-item-move-button",
					onPointerDown: (t) => {
						if (t.button !== 0 || i || w.current) return;
						t.preventDefault(), t.stopPropagation();
						let n = U(t, A.position[1]);
						n && (t.currentTarget.setPointerCapture(t.pointerId), w.current = {
							kind: "move",
							pointerId: t.pointerId,
							target: t.currentTarget,
							elevation: A.position[1],
							offsetX: A.position[0] - n.x,
							offsetZ: A.position[2] - n.z
						}, O(!0), s(e.id), c());
					},
					onPointerMove: (r) => {
						let i = w.current;
						if (i?.kind !== "move" || i.pointerId !== r.pointerId) return;
						r.stopPropagation();
						let a = U(r, i.elevation);
						a && o(e.id, Ho({
							world: {
								x: a.x + i.offsetX,
								z: a.z + i.offsetZ
							},
							item: e,
							definition: t,
							floor: n,
							raw: r.altKey
						}));
					},
					onPointerUp: (e) => {
						e.stopPropagation(), e.pointerId === w.current?.pointerId && V(!1);
					},
					onPointerCancel: () => V(!0),
					onLostPointerCapture: () => V(!0),
					children: /* @__PURE__ */ (0, Q.jsx)(or, {
						icon: "move",
						label: "Drag to move",
						disabled: i && !D,
						onClick: () => s(e.id)
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)("div", {
					ref: S,
					className: "selected-item-rotation-button",
					children: /* @__PURE__ */ (0, Q.jsx)(or, {
						icon: "rotateRight",
						label: "Rotate clockwise 90°",
						disabled: i,
						onClick: () => te(-1)
					})
				}),
				/* @__PURE__ */ (0, Q.jsxs)("output", {
					ref: C,
					className: "selected-item-angle",
					"aria-label": "Rotation angle",
					children: [Number((Lc(ee) * 180 / Math.PI).toFixed(1)), "°"]
				}),
				/* @__PURE__ */ (0, Q.jsx)(Bc, {
					ref: g,
					...r,
					isDevice: e.kind === "device",
					disabled: i
				})
			]
		})
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/RoomNameControl.tsx
function Hc({ roomId: e, name: t, disabled: n, focusRequest: r, onFocusRequestHandled: i, onCommit: a }) {
	let [o, s] = (0, Z.useState)(!1), [c, l] = (0, Z.useState)(t), u = (0, Z.useRef)(!1), d = (0, Z.useRef)(null), f = (0, Z.useRef)(null);
	return (0, Z.useLayoutEffect)(() => {
		r?.roomId === e && !n && (u.current = !1, l(t), s(!0), i?.());
	}, [
		n,
		r,
		t,
		i,
		e
	]), (0, Z.useLayoutEffect)(() => {
		o && (d.current?.focus({ preventScroll: !0 }), d.current?.select());
	}, [o]), (0, Z.useEffect)(() => {
		n && (u.current = !0, s(!1));
	}, [n]), /* @__PURE__ */ (0, Q.jsx)("span", {
		className: "construction-room-name",
		style: { pointerEvents: n ? "none" : "auto" },
		onPointerDown: (e) => e.stopPropagation(),
		onPointerUp: (e) => e.stopPropagation(),
		onClick: (e) => e.stopPropagation(),
		onDoubleClick: (e) => e.stopPropagation(),
		onKeyDown: (e) => e.stopPropagation(),
		children: o ? /* @__PURE__ */ (0, Q.jsx)("input", {
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
		}) : /* @__PURE__ */ (0, Q.jsxs)("button", {
			ref: f,
			type: "button",
			disabled: n,
			"aria-label": t ? `Rename ${t}` : "Name room",
			onClick: () => {
				u.current = !1, l(t), s(!0);
			},
			children: [t || "Name room", /* @__PURE__ */ (0, Q.jsx)("span", {
				"aria-hidden": "true",
				children: " ✎"
			})]
		})
	});
}
//#endregion
//#region apps/web/src/editor-preview/construct/ConstructionPlan.tsx
var Uc = (0, Z.memo)(function({ room: e, coordinates: t, namingDisabled: n, nameFocusRequest: r, onNameFocusHandled: i, onRoomNameChange: a }) {
	let o = Ht(), s = (0, Z.useRef)(null), c = (0, Z.useMemo)(() => Gt(e.polygon, t), [e.polygon, t]), l = (0, Z.useMemo)(() => Math.abs(Ae(e.polygon)) * t.metersPerPlanUnit ** 2, [e.polygon, t.metersPerPlanUnit]);
	q(({ camera: e }) => {
		if (!s.current || !("zoom" in e)) return;
		let t = c.width * Number(e.zoom), n = c.depth * Number(e.zoom), r = !!s.current.querySelector("input") || s.current.contains(o.root.activeElement);
		s.current.style.visibility = !r && (t < 56 || n < 28) ? "hidden" : "visible", s.current.style.maxWidth = `${Math.min(130, t * .85)}px`, s.current.style.fontSize = t < 100 ? "9px" : "11px";
	});
	let [u, d] = J(Be(e.polygon), t);
	return /* @__PURE__ */ (0, Q.jsx)("group", {
		name: `plan-room-${e.id}`,
		children: typeof document < "u" && /* @__PURE__ */ (0, Q.jsx)(I, {
			position: [
				u,
				.025,
				d
			],
			center: !0,
			zIndexRange: [2, 0],
			style: { pointerEvents: "none" },
			children: /* @__PURE__ */ (0, Q.jsxs)("span", {
				ref: s,
				className: "construction-plan__room-label",
				children: [a ? /* @__PURE__ */ (0, Q.jsx)(Hc, {
					roomId: e.id,
					name: e.name,
					disabled: !!n,
					focusRequest: r,
					onFocusRequestHandled: i,
					onCommit: (t) => a(e.id, t)
				}) : e.name, /* @__PURE__ */ (0, Q.jsxs)("span", {
					className: "construction-plan__room-area",
					children: [l.toFixed(1), " m²"]
				})]
			})
		})
	});
}), Wc = (0, Z.memo)(function({ floor: e, items: t, furnishingModels: n, deviceModels: r, showFinishes: i = !0, ...a }) {
	let o = (0, Z.useMemo)(() => {
		let i = [];
		for (let a of t) {
			let t = a.kind === "device" ? r[a.modelId] : n[a.modelId];
			if (!t) continue;
			let o;
			try {
				o = Qe(a.placement, e);
			} catch {
				continue;
			}
			let s = Go(a, a.kind === "device" ? {
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
	return /* @__PURE__ */ (0, Q.jsxs)("group", {
		name: "construction-plan",
		children: [
			i && /* @__PURE__ */ (0, Q.jsx)(ee, {
				floor: e,
				variant: "plan"
			}),
			e.rooms.map((t) => /* @__PURE__ */ (0, Q.jsx)(Uc, {
				room: t,
				coordinates: e.coordinates,
				...a
			}, t.id)),
			/* @__PURE__ */ (0, Q.jsx)(Yr, {
				name: "plan-footprints",
				strokes: o
			})
		]
	});
});
//#endregion
//#region apps/web/src/editor-preview/construct/plan-wheel-navigation.ts
function Gc(e, t, n, r, i, a) {
	if (!r.width || !r.height) return;
	let o = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? r.height : 1;
	t.updateMatrixWorld();
	let s = new Y().setFromMatrixColumn(t.matrixWorld, 0), c = new Y().setFromMatrixColumn(t.matrixWorld, 1), l = (t.right - t.left) / t.zoom, u = (t.top - t.bottom) / t.zoom, d = new Y();
	if (e.ctrlKey || e.metaKey) {
		let n = t.zoom;
		t.zoom = Math.max(i, Math.min(a, n * Math.exp(-e.deltaY * o * .01)));
		let f = 1 - n / t.zoom;
		d.addScaledVector(s, ((e.clientX - r.left) / r.width - .5) * l * f), d.addScaledVector(c, (.5 - (e.clientY - r.top) / r.height) * u * f), t.updateProjectionMatrix();
	} else d.addScaledVector(s, e.deltaX * o * l / r.width), d.addScaledVector(c, -e.deltaY * o * u / r.height);
	t.position.add(d), n.add(d);
}
//#endregion
//#region apps/web/src/editor-preview/PreviewCamera.tsx
function Kc(e) {
	let { view: t, resetKey: n, savedCamera: r, floor: i, northOrientation: a = !1 } = e, o = (0, Z.useRef)(null), s = (0, Z.useRef)(a), c = (0, Z.useRef)(i.id), l = (0, Z.useRef)(r.current), u = (0, Z.useRef)(n);
	s.current !== a && (s.current = a, l.current = r.current, u.current = n), c.current !== i.id && (c.current = i.id, l.current = r.current, u.current = n);
	let d = !a && u.current === n && l.current?.view === t ? l.current : null;
	return /* @__PURE__ */ (0, Q.jsx)(qc, {
		...e,
		savedCamera: a ? o : r,
		onTargetChange: a ? () => void 0 : e.onTargetChange,
		planWheelNavigation: !a && e.planWheelNavigation === !0,
		restored: d
	}, `${t}-${n}-${a}`);
}
function qc({ view: e, floor: t, controlsEnabled: n, focusPoint: r, focusRoomId: i, onTargetChange: a, savedCamera: o, restored: s, planWheelNavigation: c, northOrientation: l }) {
	let { width: u, height: d } = B((e) => e.size), f = B((e) => e.gl.domElement), p = B((e) => e.invalidate), m = (0, Z.useRef)(null), { origin: [h, _], metersPerPlanUnit: v } = t.coordinates, y = (0, Z.useCallback)(() => {
		let t = m.current?.target, n = m.current?.object;
		t && n && (o.current = {
			view: e,
			position: n.position.toArray(),
			target: t.toArray(),
			zoom: n.zoom
		}), t && n && a([t.x / v + h, t.z / v + _], (e) => {
			let t = new Y(e[0], e[1], e[2]).project(n);
			return Math.abs(t.x) < .9 && Math.abs(t.y) < .9 && t.z >= -1 && t.z <= 1;
		});
	}, [
		v,
		a,
		h,
		_,
		o,
		e
	]), b = (0, Z.useRef)(!1);
	q(() => {
		l || b.current || !m.current || m.current.object.isOrthographicCamera && (b.current = !0, y());
	}), (0, Z.useEffect)(() => {
		if (!c || e !== "top") return;
		let t = (e) => {
			let t = m.current, n = t?.object;
			!t || !n?.isOrthographicCamera || (e.preventDefault(), e.stopImmediatePropagation(), Gc(e, n, t.target, f.getBoundingClientRect(), t.minZoom, t.maxZoom), t.update(), y(), p());
		};
		return f.addEventListener("wheel", t, {
			capture: !0,
			passive: !1
		}), () => f.removeEventListener("wheel", t, !0);
	}, [
		f,
		y,
		p,
		c,
		e
	]), (0, Z.useEffect)(() => {
		if (!l || !m.current) return;
		let e = m.current.object, n = V(t), r = f.ownerDocument.defaultView?.matchMedia("(max-width: 760px)").matches, i = Math.min(u - (r ? 24 : 48), d - (r ? 128 : 162));
		e.zoom = Math.max(.1, i * .68 / Math.max(2, Math.hypot(n.width, n.depth)));
		let a = Math.max(n.width, n.depth, 2);
		e.position.set(n.centerX, a * 2.2 + 4, n.centerZ + .001), m.current.target.set(n.centerX, .2, n.centerZ), e.updateProjectionMatrix(), m.current.update(), p();
	}, [
		l,
		u,
		d,
		t,
		f,
		p
	]);
	let [x] = (0, Z.useState)(() => {
		if (s) return s;
		let n = !l && t.rooms.find((e) => e.id === i), a = n ? Gt(n.polygon, t.coordinates) : V(t), o = Math.max(a.width, a.depth, 2), c = l ? Math.max(.1, Math.min(u - 48, d - 162) * .68 / Math.max(2, Math.hypot(a.width, a.depth))) : Math.max(8, Math.min(110, u / (a.width * 1.48), d / (a.depth * 1.58))), f = !l && r ? (r[0] - t.coordinates.origin[0]) * t.coordinates.metersPerPlanUnit : a.centerX, p = !l && r ? (r[1] - t.coordinates.origin[1]) * t.coordinates.metersPerPlanUnit : a.centerZ;
		return {
			position: e === "top" ? [
				f,
				o * 2.2 + 4,
				p + .001
			] : [
				f + o * .42,
				o * .72 + 2.8,
				p + o * .48
			],
			target: [
				f,
				.2,
				p
			],
			zoom: n && e === "3d" ? c * .7 : !l && r && !n ? Math.min(180, c * 2.25) : c
		};
	});
	return /* @__PURE__ */ (0, Q.jsxs)("group", { children: [/* @__PURE__ */ (0, Q.jsx)(g, {
		makeDefault: !0,
		position: x.position,
		zoom: x.zoom,
		near: .1,
		far: 150
	}), /* @__PURE__ */ (0, Q.jsx)(re, {
		ref: m,
		makeDefault: !0,
		enabled: n,
		target: x.target,
		onChange: y,
		enablePan: !0,
		enableRotate: e === "3d",
		enableZoom: !0,
		minPolarAngle: 0,
		maxPolarAngle: e === "top" ? .01 : 1.28,
		minZoom: l ? .1 : 8,
		maxZoom: 180,
		zoomToCursor: !0
	})] });
}
//#endregion
//#region apps/web/src/editor-workspace/HomeEditorScene.tsx
var Jc = () => void 0;
function Yc({ reference: e, northOrientation: t, onStairIssuesChange: n, onNameFocusHandled: r, cameraFocusRoomId: a, nameFocusRequest: o, placingWalkStart: s, onWalkStartPlaced: c, placementFloor: l, selectSceneItem: u, stairDialog: d, floorNavigation: f, activeFloorId: p, stairPlacement: m, setStairPlacement: h, setStairDialog: g, floorReferences: _, commit: v, snapshot: y, connectFloor: b, mode: x, editingLocked: S, publishOpen: C, previewOpen: w, connect: T, clearConstructionSelection: E, clearFurnishingSelection: D, cameraView: O, cameraResetKey: k, constructEditor: A, dragging: j, cameraFocusPoint: M, handleCameraTargetChange: N, savedCamera: P, previewSceneItems: F, displayedContextualIssues: I, activeIssueKey: L, issueFocusVersion: R, poolDrawing: z, floorZoneDrawing: B, focusIssue: V, furnishingModels: H, deviceModels: U, visualManifest: W, selectedRoomId: ee, editorResolvedBindings: te, marqueeSelecting: ne, floorPaintTarget: re, requestRoomPaint: ie, setDragging: G, constructMeasure: ae, setSelectedRoomId: K, setMarqueeSelecting: oe, selectedOpening: se, detailsOpeningId: ce, setDetailsOpeningId: le, duplicateConstructionOpening: ue, visualSceneItems: de, furnishingEditor: fe, selectedItem: pe, selectedDefinition: he, detailsItemId: ge, setDetailsItemId: q, unsettled: _e, selectMode: ve, duplicateArrangeItem: ye, deleteSceneItem: be }) {
	let xe = (0, Z.useMemo)(() => ({
		furnishingModels: H,
		deviceModels: U
	}), [H, U]), Se = yc(e, A.previewFloor, x === "construct"), Ce = Yt(W.floors), J = Ce.find((e) => e.floorId === p)?.elevationMeters ?? 0;
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		...Se.handlers,
		tabIndex: -1,
		onDragOver: (e) => {
			x === "construct" && e.dataTransfer.types.includes("Files") && e.preventDefault();
		},
		onDrop: (t) => {
			x === "construct" && (t.preventDefault(), e.upload(t.dataTransfer.files));
		},
		className: `direction-preview__model${x === "connect" ? " connect-map" : ""}`,
		"aria-label": x === "connect" ? "Home connection map" : x === "construct" ? "2D construction plan" : "3D home editor",
		inert: S || C || w,
		children: [
			x === "connect" && /* @__PURE__ */ (0, Q.jsx)(Qs, {
				connectFloor: b,
				connect: T
			}),
			Se.background,
			/* @__PURE__ */ (0, Q.jsx)("div", {
				inert: t.active,
				hidden: x === "connect",
				style: {
					width: "100%",
					height: "100%",
					position: "relative"
				},
				children: /* @__PURE__ */ (0, Q.jsx)(me, {
					events: nc,
					tabIndex: 0,
					"aria-label": "Home editor canvas",
					onPointerDownCapture: (e) => {
						e.target instanceof HTMLCanvasElement && e.currentTarget.focus({ preventScroll: !0 });
					},
					onPointerMissed: (e) => {
						e.type === "click" && e.button === 0 && (x === "construct" ? E() : x === "furnish" && D());
					},
					shadows: !1,
					dpr: 1,
					frameloop: "demand",
					gl: {
						antialias: !0,
						powerPreference: "high-performance"
					},
					children: /* @__PURE__ */ (0, Q.jsxs)(Z.Suspense, {
						fallback: null,
						children: [
							Se.bridge,
							/* @__PURE__ */ (0, Q.jsxs)(i, {
								active: x === "furnish",
								children: [
									x !== "construct" && /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("hemisphereLight", { args: [
										"#ecf4ff",
										"#768b93",
										.95
									] }), /* @__PURE__ */ (0, Q.jsx)("directionalLight", {
										position: [
											7,
											12,
											8
										],
										color: "#fff0d7",
										intensity: 1.8,
										castShadow: !1
									})] }),
									x === "construct" && /* @__PURE__ */ (0, Q.jsx)(bc, {
										floor: A.previewFloor,
										start: y.project.home.walkStart,
										placing: s,
										onPlace: (e) => {
											v({
												...y,
												project: {
													...y.project,
													home: {
														...y.project.home,
														walkStart: {
															floorId: p,
															at: e
														}
													}
												}
											}), c();
										}
									}),
									x === "construct" && !Se.visible && /* @__PURE__ */ (0, Q.jsx)(ac, {}),
									/* @__PURE__ */ (0, Q.jsx)(Kc, {
										northOrientation: t.active,
										planWheelNavigation: x === "construct" || x === "furnish",
										view: x === "construct" ? "top" : O,
										resetKey: k,
										floor: A.previewFloor,
										controlsEnabled: !j && !s && !t.active,
										focusPoint: M,
										focusRoomId: a,
										onTargetChange: N,
										savedCamera: P
									}),
									/* @__PURE__ */ (0, Q.jsx)(Ia, {
										planMode: x === "construct",
										floor: A.previewFloor,
										sceneItems: F,
										issues: x === "construct" ? I.filter((e) => !e.code.startsWith("stair.") && e.code !== "room.name" && e.code !== "topology.room-name") : I,
										activeIssueKey: L,
										focusVersion: R,
										showLabels: x !== "construct" || !j && !A.drawStart && !z.active && !B.active,
										onActivate: V
									}),
									x === "construct" && !m && !(j && d) && _.references.map(({ direction: e, floor: t, visible: n }) => n && /* @__PURE__ */ (0, Q.jsx)(Mc, {
										floor: t,
										direction: e
									}, e)),
									x === "construct" && y.project.stairs.map((e) => {
										if (e.lowerFloorId !== p && e.upperFloorId !== p) return null;
										let t = d?.id === e.id && A.tool === "select" && !m, r = e.lowerFloorId === p ? e.upperFloorId : e.lowerFloorId;
										return /* @__PURE__ */ (0, Q.jsx)(Oc, {
											registries: xe,
											onIssuesChange: t ? n : void 0,
											building: y.project,
											stair: e,
											activeFloorId: p,
											selected: t,
											enabled: A.tool === "select" && !m && !S,
											onSelect: () => {
												E(), g(e);
											},
											onDraggingChange: G,
											onCommit: (e) => v({
												...y,
												project: {
													...y.project,
													stairs: y.project.stairs.map((t) => t.id === e.id ? e : t)
												}
											}),
											onGoToFloor: () => f.selectFloor(r),
											onDelete: () => {
												v({
													...y,
													project: {
														...y.project,
														stairs: y.project.stairs.filter((t) => t.id !== e.id)
													}
												}), g(null);
											}
										}, `${p}:${e.id}`);
									}),
									x === "construct" ? /* @__PURE__ */ (0, Q.jsx)(Wc, {
										showFinishes: !Se.visible,
										nameFocusRequest: o,
										onNameFocusHandled: r,
										namingDisabled: e.adjusting || S || C || w || _e || !!A.drawStart || s || ne,
										onRoomNameChange: (e, t) => A.updateRoom(e, { name: t }),
										floor: A.previewFloor,
										items: F,
										furnishingModels: H,
										deviceModels: U
									}) : null,
									/* @__PURE__ */ (0, Q.jsx)(Fc, {
										active: x === "furnish",
										children: /* @__PURE__ */ (0, Q.jsx)(De, {
											manifest: W,
											activeFloorId: p,
											floorView: O === "top" ? "plan" : "cutaway",
											interactionMode: "editor",
											architectureModels: Cn,
											selectedRoomId: ee,
											walkMode: !1,
											wallFadeEnabled: O === "3d",
											reducedMotion: !0,
											resolvedBindings: te,
											deviceModels: U,
											openingPositions: {},
											onInteract: Jc
										})
									}),
									x === "construct" && /* @__PURE__ */ (0, Q.jsx)(Zi, {
										draft: A.draft,
										floor: A.previewFloor,
										selection: ne ? null : A.selection,
										deletionTargets: ne ? [] : A.deletionTargets,
										tool: A.tool,
										paintTarget: re,
										drawingPoints: B.points,
										drawingPreview: B.preview,
										drawingRoomId: B.roomId,
										onPaintRoom: ie,
										onSelectZone: A.selectFloorZone,
										onUpdateZone: (e, t) => A.updateFloorZone(e, { polygon: t }),
										onDraggingChange: G
									}),
									x === "construct" && /* @__PURE__ */ (0, Q.jsx)(Vi, {
										doorConfiguration: A.doorConfiguration,
										referenceWalls: _.referenceWalls,
										planMode: !0,
										draft: A.draft,
										coordinates: A.previewFloor.coordinates,
										rooms: A.previewFloor.rooms,
										selection: A.selection,
										deletionTargets: A.deletionTargets,
										previewFloor: A.previewFloor,
										wallRuns: A.wallRuns,
										tool: A.tool,
										drawStart: A.tool === "pool" || A.tool === "platform" ? z.points.at(-1) ?? null : A.drawStart,
										drawPreview: A.tool === "pool" || A.tool === "platform" ? z.preview : A.drawPreview,
										drawAngleReferenceRadians: A.tool === "wall" ? A.drawAngleReferenceRadians : null,
										wallExteriorColor: A.exteriorWallColor,
										poolPoints: z.points,
										floorPaintTarget: re,
										floorZonePoints: B.points,
										floorZonePreview: B.preview,
										onCancelFloorZone: B.cancel,
										measurePhase: ae.phase,
										onSelectWall: (e) => {
											K(null), A.selectWall(e);
										},
										onSelectOpening: (e) => {
											K(null), A.selectOpening(e);
										},
										onSelectRoom: A.selectRoom,
										onSelectMany: A.selectMany,
										onClearSelection: E,
										onMoveEndpoint: A.updateWallEndpoint,
										onTranslateWall: A.translateWall,
										onMoveOpening: A.moveOpening,
										onResizeOpening: A.resizeSelectedOpening,
										onPlaceOpening: A.placeOpening,
										onBeginWall: A.tool === "pool" || A.tool === "platform" ? z.place : A.beginWall,
										onPreviewWall: A.tool === "pool" || A.tool === "platform" ? z.previewPoint : A.previewWall,
										onAddWall: A.tool === "pool" || A.tool === "platform" ? z.place : A.addWall,
										onCancelWall: A.tool === "pool" || A.tool === "platform" ? z.cancel : A.cancelWall,
										onPlaceMeasure: ae.place,
										onPreviewMeasure: ae.preview,
										onPlaceFloorZonePoint: B.place,
										onPreviewFloorZonePoint: B.previewPoint,
										onDraggingChange: G,
										onMarqueeChange: oe
									}),
									x === "construct" && !S && /* @__PURE__ */ (0, Q.jsx)(Ac, {
										editor: A,
										onDraggingChange: G
									}),
									x === "construct" && /* @__PURE__ */ (0, Q.jsx)(ic, {
										draft: A.draft,
										selection: ne ? null : A.selection,
										tool: A.tool,
										points: z.points,
										preview: z.preview,
										deletionTargets: A.deletionTargets,
										selectedEdgeId: A.selectedPlatformEdgeId,
										onSelect: A.selectPlatform,
										onSelectEdge: A.selectPlatformEdge,
										onUpdate: (e, t) => A.updatePlatform(e, { polygon: t }),
										onDraggingChange: G
									}),
									x === "construct" && /* @__PURE__ */ (0, Q.jsx)(Ji, {
										draft: A.draft,
										selection: ne ? null : A.selection,
										tool: A.tool,
										points: z.points,
										preview: z.preview,
										deletionTargets: ne ? [] : A.deletionTargets,
										onSelect: A.selectPool,
										onUpdate: A.updatePool,
										onDraggingChange: G
									}),
									x === "construct" && !ne && /* @__PURE__ */ (0, Q.jsx)(kc, {
										editor: A,
										disabled: j || S
									}),
									x === "construct" && !ne && se && /* @__PURE__ */ (0, Q.jsx)(Pc, {
										opening: se,
										draft: A.draft,
										detailsOpen: ce === se.id,
										disabled: j || S,
										canDuplicate: A.canDuplicateOpening(se.id),
										onDetails: () => le((e) => e === se.id ? null : se.id),
										onChange: (e) => A.dispatch({
											type: "reorient-opening",
											openingId: se.id,
											change: e
										}),
										onDuplicate: () => ue(se.id),
										onDelete: A.deleteSelected
									}, se.id),
									x === "construct" && A.tool === "measure" && /* @__PURE__ */ (0, Q.jsx)(Pa, {
										planMode: !0,
										measurement: ae.measurement,
										preview: ae.phase === "drawing",
										onCopy: (e) => void navigator.clipboard?.writeText(e)
									}),
									x === "furnish" && O === "top" && /* @__PURE__ */ (0, Q.jsx)(ds, { floor: A.previewFloor }),
									x === "furnish" && O === "3d" && W.floors.slice(0, W.floors.findIndex((e) => e.id === p)).map((e) => /* @__PURE__ */ (0, Q.jsx)("group", {
										position: [
											0,
											(Ce.find((t) => t.floorId === e.id)?.elevationMeters ?? 0) - J,
											0
										],
										children: /* @__PURE__ */ (0, Q.jsx)(as, {
											items: W.sceneItems.filter((t) => t.floorId === e.id),
											floor: e,
											furnishingModels: H,
											deviceModels: U,
											selectedId: null,
											selectionOnly: !0,
											onSelect: u,
											onMovePlacement: Jc
										})
									}, e.id)),
									x === "furnish" && /* @__PURE__ */ (0, Q.jsx)(as, {
										items: de,
										floor: l,
										furnishingModels: H,
										deviceModels: U,
										selectedId: fe.selectedId,
										selectedIds: fe.selectedIds,
										onSelectMany: fe.selectMany,
										onSelect: fe.select,
										onMovePlacements: fe.updatePlacements,
										onMovePlacement: fe.updatePlacement,
										onDragStart: fe.beginTransaction,
										onDragEnd: fe.commitTransaction,
										onDragCancel: fe.cancelTransaction,
										onDraggingChange: G
									}),
									x === "furnish" && pe && he && /* @__PURE__ */ (0, Q.jsx)(Vc, {
										item: pe,
										definition: he,
										floor: l,
										busy: j || !!fe.transaction,
										onRotate: fe.rotate,
										onMovePlacement: fe.updatePlacement,
										onSelect: fe.select,
										onBegin: () => {
											fe.beginTransaction(), G(!0);
										},
										onCommit: () => {
											fe.commitTransaction(), G(!1);
										},
										onCancel: () => {
											fe.cancelTransaction(), G(!1);
										},
										actions: {
											detailsOpen: ge === pe.id,
											onDetails: () => q((e) => e === pe.id ? null : pe.id),
											onMap: pe.kind === "device" && pe.entitySlots.length > 0 && !_e ? () => {
												T.selectDevice(pe.id) && ve("connect", !0);
											} : void 0,
											onDuplicate: () => ye(pe.id),
											onDelete: () => be(pe.id)
										}
									}, pe.id)
								]
							}),
							x === "construct" && m && /* @__PURE__ */ (0, Q.jsx)(jc, {
								registries: xe,
								onIssuesChange: n,
								building: y.project,
								stair: m,
								coordinates: y.project.coordinates,
								onDraggingChange: G,
								onCancel: () => h(null),
								onComplete: (e) => {
									let t = {
										...y.project,
										stairs: [...y.project.stairs, e]
									};
									v({
										...y,
										project: t
									}), h(null), g(e);
								}
							}, `${p}:${m.shape ?? "straight"}`)
						]
					})
				})
			}),
			t.active && /* @__PURE__ */ (0, Q.jsx)(tc, {
				angle: t.angle,
				onRotate: t.rotate,
				onCancel: t.cancel,
				onConfirm: t.confirm
			}),
			Se.controls,
			Se.assetError && x === "construct" && /* @__PURE__ */ (0, Q.jsx)("p", {
				className: "reference-asset-error",
				role: "alert",
				children: Se.assetError
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-workspace/useNorthOrientation.ts
function Xc({ scope: e, enabled: t, snapshot: n, commit: r }) {
	let [i, a] = (0, Z.useState)(null);
	(0, Z.useEffect)(() => a(null), [e]);
	let o = t && i?.scope === e, s = i?.angle ?? n.project.home.northAngleDegrees ?? 0;
	return {
		active: o,
		angle: s,
		start: () => {
			t && a({
				scope: e,
				angle: n.project.home.northAngleDegrees ?? 0
			});
		},
		rotate: (e) => a((t) => t ? {
			...t,
			angle: (e % 360 + 360) % 360
		} : null),
		cancel: () => a(null),
		confirm: () => {
			o && s !== (n.project.home.northAngleDegrees ?? 0) && r({
				...n,
				project: {
					...n.project,
					home: {
						...n.project.home,
						northAngleDegrees: s
					}
				}
			}), a(null);
		}
	};
}
//#endregion
//#region apps/web/src/editor-floors/useAdjacentFloorReferences.ts
var Zc = ["above", "below"];
function Qc(e, t) {
	let [n, r] = (0, Z.useState)({
		above: !0,
		below: !0
	}), i = (0, Z.useMemo)(() => {
		let r = e.findIndex((e) => e.id === t);
		return r < 0 ? [] : Zc.flatMap((t) => {
			let i = e[r + (t === "above" ? 1 : -1)];
			return i ? [{
				direction: t,
				floor: i,
				visible: n[t]
			}] : [];
		});
	}, [
		e,
		t,
		n
	]);
	return {
		references: i,
		referenceWalls: (0, Z.useMemo)(() => i.flatMap((e) => e.visible ? e.floor.walls : []), [i]),
		setVisible: (e, t) => {
			r((n) => ({
				...n,
				[e]: t
			}));
		}
	};
}
var $c = /* @__PURE__ */ new Set([
	"image/png",
	"image/jpeg",
	"image/webp",
	"image/svg+xml"
]);
function el(e, t) {
	if (!Number.isFinite(e * t) || e <= 0 || t <= 0 || e * t > 32e6) throw Error("Choose an image with positive dimensions and no more than 32 megapixels.");
}
function tl(e) {
	if (/<!DOCTYPE|<!ENTITY/i.test(e)) throw Error("SVG declarations are unsupported. Export a plain SVG or PNG.");
	let t = new DOMParser().parseFromString(e, "image/svg+xml");
	if (t.querySelector("parsererror") || t.documentElement.localName !== "svg") throw Error("This SVG could not be read. Export it again or choose a PNG.");
	for (let e of t.querySelectorAll("*")) {
		if ([
			"script",
			"foreignobject",
			"image",
			"feimage",
			"animate",
			"animatetransform",
			"animatemotion",
			"set",
			"iframe",
			"audio",
			"video"
		].includes(e.localName.toLowerCase())) throw Error("This SVG contains embedded or active content. Export a plain SVG or PNG.");
		for (let t of Array.from(e.attributes)) if (/^on/i.test(t.name) || t.name === "xml:base" || /href$/i.test(t.name) && !t.value.startsWith("#")) throw Error("This SVG contains scripts or external resources. Export a plain SVG or PNG.");
	}
	let n = [...t.querySelectorAll("style")].map((e) => e.textContent).join("\n") + [...t.querySelectorAll("*")].flatMap((e) => Array.from(e.attributes, (e) => e.value)).join("\n");
	if (/@import|@font-face|\\|\/\*/i.test(n) || /url\(\s*["']?(?!#)/i.test(n.replace(/url\(\s*(['"])(#[^'"]+)\1\s*\)/gi, "url($2)"))) throw Error("This SVG uses unsupported styles or external resources. Export a plain SVG or PNG.");
	if (t.createTreeWalker(t, 64).nextNode()) throw Error("SVG processing instructions are unsupported. Export a plain SVG or PNG.");
}
async function nl(e) {
	if (e.size > 20971520) throw Error("Choose an image smaller than 20 MB.");
	let t = e.name.split(".").at(-1)?.toLowerCase(), n = e.type || {
		png: "image/png",
		jpg: "image/jpeg",
		jpeg: "image/jpeg",
		webp: "image/webp",
		svg: "image/svg+xml"
	}[t ?? ""];
	if (!n || !$c.has(n)) throw Error("Choose a PNG, JPEG, WebP, or SVG image.");
	let r = e.slice(0, e.size, n);
	if (n === "image/svg+xml") tl(await r.text());
	else {
		let e = new Uint8Array(await r.slice(0, 12).arrayBuffer());
		if (!(n === "image/png" ? [
			137,
			80,
			78,
			71,
			13,
			10,
			26,
			10
		].every((t, n) => e[n] === t) : n === "image/jpeg" ? e[0] === 255 && e[1] === 216 && e[2] === 255 : String.fromCharCode(...e.slice(0, 4)) === "RIFF" && String.fromCharCode(...e.slice(8, 12)) === "WEBP")) throw Error("The image contents do not match its format. Export it again as PNG, JPEG, WebP, or SVG.");
	}
	let i = URL.createObjectURL(r);
	try {
		let e = new Image();
		return e.src = i, await e.decode().catch(() => {
			throw Error("This image could not be read. Export it again or choose another image.");
		}), el(e.naturalWidth, e.naturalHeight), {
			blob: r,
			width: e.naturalWidth,
			height: e.naturalHeight
		};
	} finally {
		URL.revokeObjectURL(i);
	}
}
//#endregion
//#region apps/web/src/editor-reference-plan/useReferencePlan.ts
function rl(e, t, n, r) {
	let { events: i } = Ht(), a = e.referenceStorage, { preferences: o, setPreference: s, ready: c, addAsset: l } = a, u = (0, Z.useRef)(null), d = e.snapshot.references?.[t], f = o[t] ?? oc, [p, m] = (0, Z.useState)(null), [h, g] = (0, Z.useState)(!1), [_, v] = (0, Z.useState)([]), [y, b] = (0, Z.useState)(null), [x, S] = (0, Z.useState)(!1), [C, w] = (0, Z.useState)(!0), T = (0, Z.useRef)({
		center: [0, 0],
		width: 15,
		height: 10
	}), E = (0, Z.useRef)(0), D = (0, Z.useRef)(null), O = (0, Z.useRef)(null), k = p?.floorId === t ? p.plan : d, A = !!(n && p?.floorId === t), j = (0, Z.useCallback)(() => {
		O.current?.(), O.current = null, D.current && s(D.current.floorId, D.current.value), D.current = null, m(null), g(!1), v([]), b(null);
	}, [s]);
	(0, Z.useEffect)(() => (E.current += 1, j(), S(!1), () => {
		E.current += 1;
	}), [
		n,
		t,
		j
	]);
	let M = (e = !1) => {
		!k || r || !c || (D.current ??= {
			floorId: t,
			value: f
		}, m({
			floorId: t,
			plan: k
		}), w(!0), g(e), v([]), b(null), s(t, {
			...f,
			visible: !0
		}));
	}, N = (e) => {
		if (!Number.isFinite(e.width) || e.width < .01 || !Number.isFinite(e.angle) || !e.center.every(Number.isFinite)) {
			b("Enter a positive width of at least 0.01 m and finite coordinates.");
			return;
		}
		m({
			floorId: t,
			plan: e
		}), b(null);
	};
	return (0, Z.useEffect)(() => {
		if (!A) return;
		let e = (e) => {
			e.key === "Escape" && (e.target instanceof HTMLElement && e.target.closest("input") || (e.preventDefault(), e.stopImmediatePropagation(), O.current ? (O.current(), O.current = null) : j()));
		};
		return i.addEventListener("keydown", e, !0), () => i.removeEventListener("keydown", e, !0);
	}, [
		A,
		j,
		i
	]), {
		input: u,
		openPicker: () => {
			!r && c && (w(!0), u.current?.click());
		},
		plan: k,
		preference: f,
		adjusting: A,
		expanded: C,
		setExpanded: w,
		loading: x,
		error: y,
		storage: a,
		viewport: T,
		gestureCancel: O,
		points: _,
		calibrating: h,
		disabled: r || x || !c,
		begin: M,
		update: N,
		cancel: j,
		done: () => {
			!p || O.current || (e.commitReferences({
				...e.snapshot.references,
				[t]: p.plan
			}), D.current = null, j());
		},
		upload: async (e) => {
			if (!n || r || A || !c) return;
			if (e.length !== 1) {
				b("Choose one reference image for this floor.");
				return;
			}
			let i = e[0], a = ++E.current;
			S(!0), b(null);
			try {
				let e = await nl(i);
				if (a !== E.current) return;
				let n = rn();
				l(n, e.blob);
				let r = T.current, o = .8 * Math.min(r.width, r.height * e.width / e.height);
				D.current = {
					floorId: t,
					value: f
				}, m({
					floorId: t,
					plan: {
						assetId: n,
						name: i.name,
						pixelWidth: e.width,
						pixelHeight: e.height,
						center: r.center,
						width: o,
						angle: 0
					}
				}), w(!0), g(!1), v([]), s(t, oc);
			} catch (e) {
				a === E.current && b(e instanceof Error ? e.message : "Could not open this image.");
			} finally {
				a === E.current && S(!1);
			}
		},
		calibrate: (e) => {
			if (!(!k || _.length !== 2)) try {
				let t = dc(k, _[0], _[1], e);
				if (!Number.isFinite(t.width) || t.width < .01 || !t.center.every(Number.isFinite)) throw Error("This scale is outside the supported range. The image width must be at least 0.01 m.");
				N(t), g(!1), v([]);
			} catch (e) {
				b(e.message);
			}
		},
		pickPoint: (e) => {
			if (!e.some((e) => e < 0 || e > 1)) {
				if (_.length === 1 && Math.hypot((e[0] - _[0][0]) * (k?.pixelWidth ?? 1), (e[1] - _[0][1]) * (k?.pixelHeight ?? 1)) < 1) {
					b("Choose two different points on the image.");
					return;
				}
				b(null), v((t) => t.length < 2 ? [...t, e] : [e]);
			}
		},
		remove: () => {
			e.commitReferences(Object.fromEntries(Object.entries(e.snapshot.references ?? {}).filter(([e]) => e !== t))), j();
		},
		setPreference: (e) => s(t, {
			...f,
			...e
		})
	};
}
//#endregion
//#region apps/web/src/editor-workspace/useEditorCamera.ts
function il({ initialRequest: e, constructEditor: t, furnishingEditor: n, previewSceneItems: r }) {
	let { previewFloor: i, selectOpening: a, selectPool: o, selectRoom: s, selectWall: c, setTool: l, wallRuns: u } = t, { select: d } = n, [f, p] = (0, Z.useState)(e?.arrange?.camera?.view ?? "3d"), m = (0, Z.useRef)(e?.arrange?.camera ?? null), [h, g] = (0, Z.useState)(0), [_, v] = (0, Z.useState)(null), [y, b] = (0, Z.useState)(null), [x, S] = (0, Z.useState)(null), [C, w] = (0, Z.useState)(0), [T, E] = (0, Z.useState)(null);
	return {
		cameraView: f,
		setCameraView: p,
		savedCamera: m,
		cameraResetKey: h,
		setCameraResetKey: g,
		cameraFocusRoomId: _,
		setCameraFocusRoomId: v,
		cameraFocusPoint: y,
		setCameraFocusPoint: b,
		activeIssueKey: x,
		setActiveIssueKey: S,
		issueFocusVersion: C,
		selectedRoomId: T,
		setSelectedRoomId: E,
		focusRoom: (e) => {
			let t = i.rooms.find((t) => t.id === e);
			t && (E(e), v(e), b(Be(t.polygon)), g((e) => e + 1));
		},
		focusIssue: (0, Z.useCallback)((e, t) => {
			v(null);
			let n = Ta(e, i, r), f = n.find((e) => e.kind === "scene-item");
			if (f) t("furnish"), d(f.id);
			else {
				t("construct"), l("select");
				let e = n.find((e) => e.kind === "opening"), r = n.find((e) => e.kind === "room"), i = n.find((e) => e.kind === "wall"), d = n.find((e) => e.kind === "pool");
				e ? a(e.id) : d ? o(d.id) : r ? s(r.id) : i && c(u.find((e) => e.wallId === i.id)?.sourceWallId ?? i.id);
			}
			S(wa(e)), w((e) => e + 1), b(ja(e, i, r)), g((e) => e + 1);
		}, [
			i,
			a,
			o,
			s,
			c,
			l,
			u,
			d,
			r
		])
	};
}
//#endregion
//#region apps/web/src/editor-preview/furnish/placement/item-creation.ts
function al(e, t, n, r, i) {
	let a = Io([
		...r,
		...n.map((e) => e.id),
		...n.flatMap((e) => e.kind === "device" ? e.entitySlots.map((e) => e.id) : [])
	]), o = {
		variant: be(e.definition).id,
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
	let c = Io([
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
var ol = (e, t, n) => {
	let r = Qe(e.placement, n), i = Go(e, t, .035), a = Math.cos(r.rotationYRadians), o = Math.sin(r.rotationYRadians);
	return {
		x: r.position[0] + i.center[0] * a + i.center[2] * o,
		z: r.position[2] - i.center[0] * o + i.center[2] * a,
		width: Math.abs(a) * i.size[0] + Math.abs(o) * i.size[2],
		depth: Math.abs(o) * i.size[0] + Math.abs(a) * i.size[2]
	};
};
function sl(e, t, n, r, i) {
	let a = (n, r = e.definition.defaultSize) => {
		if (!i) return !0;
		let a = Qe(n, t), o = Go({ size: r }, e.definition, .035), s = Math.cos(a.rotationYRadians), c = Math.sin(a.rotationYRadians);
		return i([
			a.position[0] + o.center[0] * s + o.center[2] * c,
			a.position[1] + o.center[1],
			a.position[2] - o.center[0] * c + o.center[2] * s
		]);
	}, o = (...e) => {
		let t = bo(...e);
		return t.placement && !a(t.placement) ? {
			placement: null,
			error: "No suitable support in the current view. Pan or zoom out and try again."
		} : t;
	};
	if (e.definition.windowFit) {
		let i = xo(e.definition, t, n).filter((e) => a(e.placement, e.size)), o = i.find((t) => !r?.items.some((n) => n.modelId === e.modelId && n.placement.kind === "wall" && t.placement.kind === "wall" && n.placement.wallId === t.placement.wallId && n.placement.face === t.placement.face && Math.abs(n.placement.offsetFromWallStartPlanUnits - t.placement.offsetFromWallStartPlanUnits) < .01)) ?? i[0];
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
		return n ? [ol(e, n, t)] : [];
	}) ?? [], u = l.map((e, t) => ({
		kind: "box",
		id: String(t),
		minX: e.x - e.width / 2,
		maxX: e.x + e.width / 2,
		minZ: e.z - e.depth / 2,
		maxZ: e.z + e.depth / 2
	})), { min: d, max: f } = e.definition.bounds, p = Math.hypot(Math.max(Math.abs(d[0]), Math.abs(f[0])), Math.max(Math.abs(d[2]), Math.abs(f[2]))) + .035, m = (n) => {
		let r = ol({
			placement: n,
			size: e.definition.defaultSize
		}, e.definition, t);
		return l.every((e) => Math.abs(r.x - e.x) >= (r.width + e.width) / 2 || Math.abs(r.z - e.z) >= (r.depth + e.depth) / 2);
	};
	if (e.definition.placementEnvironment === "outdoor") {
		let r = (t.footprintRegions ?? [t.footprint]).flat(), i = r.map((e) => e[0]), a = r.map((e) => e[1]), s = Math.min(...i), l = Math.max(...i), u = Math.min(...a), d = Math.max(...a), f = (p + .45) / c, h = (e, t, n) => Math.max(t, Math.min(n, e)), g = (t.outdoorPlatforms ?? []).flatMap((e) => {
			let t = [];
			Ct(n, e.polygon) && t.push(n);
			let r = [e.polygon.reduce((e, t) => e + t[0], 0) / e.polygon.length, e.polygon.reduce((e, t) => e + t[1], 0) / e.polygon.length];
			return Ct(r, e.polygon) && t.push(r), t;
		});
		At(n, t) && g.push(n), g.push([h(n[0], s, l), u - f], [l + f, h(n[1], u, d)], [h(n[0], s, l), d + f], [s - f, h(n[1], u, d)]);
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
		let r = Se(e, t, [], 0);
		if (!r) return [];
		let i = [r.x / c + s[0], r.z / c + s[1]];
		return [{
			room: e,
			at: i,
			distance: Math.hypot(i[0] - n[0], i[1] - n[1])
		}];
	}).sort((e, t) => Number(Ct(n, t.room.polygon)) - Number(Ct(n, e.room.polygon)) || e.distance - t.distance), g = e.definition.preferredPlacement, _ = null;
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
			Ct(i, r.polygon) && a.push(i);
		}
		if (a.push(i), l.length) {
			let e = Se(r, t, u, p);
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
				let { position: a } = Qe(i.placement, t);
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
//#region apps/web/src/editor-workspace/useEditorCatalog.ts
function cl({ projection: e, furnishingEditor: t, disabled: n, onAdded: r }) {
	let { placementFloor: i, visualSceneItems: a, furnishingModels: o, deviceModels: s, editorProject: c } = e, { items: l, addItem: u } = t, d = (0, Z.useRef)(null), f = (0, Z.useRef)(() => !1), p = (0, Z.useCallback)((e, t) => {
		d.current = e, f.current = t;
	}, []), [m, h] = (0, Z.useState)({
		room: "all",
		query: ""
	}), [g, _] = (0, Z.useState)(null), [v, y] = (0, Z.useState)("");
	return {
		catalogBrowsing: m,
		setCatalogBrowsing: h,
		catalogError: g,
		setCatalogError: _,
		arrangeAnnouncement: v,
		addCatalogItem: (e) => {
			if (n) return;
			let t = sl(e, i, d.current ?? Lt(i.footprint), {
				items: a,
				furnishingModels: o,
				deviceModels: s
			}, f.current);
			if (_(t.error), !t.placement) return;
			let p = al(e, t.placement, l, je(c), i.id);
			u(t.size ? {
				...p,
				size: t.size
			} : p), r(), y(`${e.definition.label} added. Drag to move it; use Undo to remove it.`);
		},
		handleCameraTargetChange: p
	};
}
//#endregion
//#region apps/web/src/editor-connect/useConnectEditor.ts
function ll({ manifest: e, bindings: t, runtime: n, origin: r, active: i, onChange: a, initialRequest: o, routeView: s, onViewChange: c, floorId: u }) {
	let d = r ? l(r) : null, f = (0, Z.useMemo)(() => ue(e.home.id), [e.home.id]), p = d ? t[d] : void 0, m = p?.draft ?? f, h = (0, Z.useMemo)(() => (e.floors.find((e) => e.id === u) ?? e.floors[0])?.rooms ?? [], [e.floors, u]), g = h.some((e) => !m.roomAreaIds[e.id]), _ = h.length > 0 && !g ? "devices" : "rooms", [v, y] = (0, Z.useState)(o?.relationshipId ? "devices" : o?.view ?? _), b = c ? s ?? _ : v, x = (e) => {
		y(e), c?.(e);
	}, [S, C] = (0, Z.useState)(() => (o?.relationshipId ? On(e, o.relationshipId)?.id : null) ?? o?.roomId ?? null), [w, T] = (0, Z.useState)(o?.relationshipId ?? null), [D, O] = (0, Z.useState)(null), [k, j] = (0, Z.useState)(null), M = n.status !== "connected" || n.origin !== d, N = (0, Z.useRef)(null);
	!M && d && (N.current = {
		origin: d,
		runtime: n
	});
	let P = M && N.current?.origin === d ? N.current.runtime : n, F = (0, Z.useMemo)(() => ve(e, u ?? e.floors[0]?.id), [e, u]), I = F.find((e) => e.id === S) ?? null, L = (0, Z.useMemo)(() => Object.fromEntries(F.map((t) => [t.id, ie(e, t.id)])), [e, F]), R = I ? L[I.id] : [], z = (0, Z.useMemo)(() => Object.fromEntries(h.map((e) => {
		let t = L[e.id].map((e) => ({
			...e,
			relationships: e.relationships.filter((e) => e.kind !== "entity-slot" || e.slotKind !== "opening-contact" && e.slotKind !== "opening-cover" || e.slotIds.some((e) => !!m.entityIdsBySlotId[e]))
		})).filter((e) => e.relationships.length > 0), n = t.flatMap((e) => e.relationships);
		return [e.id, {
			mapped: n.filter((e) => e.slotIds.some((e) => !!m.entityIdsBySlotId[e])).length,
			total: n.length,
			categories: t
		}];
	})), [
		L,
		m.entityIdsBySlotId,
		h
	]), B = R.flatMap((e) => e.relationships).find((e) => e.id === w) ?? null, V = (0, Z.useRef)({
		manifest: e,
		bindings: t,
		state: p,
		profile: m,
		onChange: a,
		key: d,
		runtime: n,
		disconnected: M
	});
	V.current = {
		manifest: e,
		bindings: t,
		state: p,
		profile: m,
		onChange: a,
		key: d,
		runtime: n,
		disconnected: M
	}, (0, Z.useEffect)(() => {
		o?.relationshipId ? (C(On(V.current.manifest, o.relationshipId)?.id ?? o.roomId ?? null), T(o.relationshipId)) : o?.roomId && C(o.roomId);
	}, [o]);
	let H = (0, Z.useCallback)((e, t = [], n = []) => {
		let r = V.current;
		r.key && (r.onChange({
			...r.bindings,
			[r.key]: {
				draft: e,
				published: r.state?.published ?? f,
				manualRoomIds: [.../* @__PURE__ */ new Set([...r.state?.manualRoomIds ?? [], ...t])],
				manualSlotIds: [.../* @__PURE__ */ new Set([...r.state?.manualSlotIds ?? [], ...n])]
			}
		}), j("Draft changes"));
	}, [f]), U = JSON.stringify([
		d,
		e,
		n.areas,
		n.devices,
		n.entityRegistry
	]), W = (0, Z.useRef)(null);
	(0, Z.useEffect)(() => {
		let e = V.current;
		if (!i || e.disconnected || !e.key || W.current === U) return;
		W.current = U;
		let t = he(e.manifest, e.profile, e.runtime, e.state);
		t.applied.length && H(t.profile);
	}, [
		U,
		i,
		M,
		H
	]), (0, Z.useEffect)(() => {
		if (w && !B) {
			let t = On(e, w);
			if (t) {
				C(t.id);
				return;
			}
			j("This device is no longer in the draft. Select another device to connect."), T(null);
		}
		I || C(null);
	}, [
		e,
		I,
		B,
		w
	]);
	let ee = E(m, e, M ? void 0 : n).issues.map((e) => ({
		...e,
		severity: [
			"profile.area-missing",
			"profile.entity-missing",
			"profile.device-class"
		].includes(e.code) ? "warning" : "error"
	}));
	return M && (Object.keys(m.roomAreaIds).length || Object.keys(m.entityIdsBySlotId).length) && ee.push({
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
		deviceRooms: F,
		roomId: I?.id ?? null,
		room: I,
		selectRoom: (e) => {
			C(e), T(null), O(null);
		},
		relationshipId: w,
		relationship: B,
		selectRelationship: T,
		groups: R,
		roomDeviceSummaries: z,
		profile: m,
		selectDevice: (t) => {
			let n = On(e, t);
			return x("devices"), O(null), n ? (C(n.id), T(t), j(null), !0) : (T(null), j("This device is no longer in the draft. Select another device to connect."), !1);
		},
		publishedProfile: p?.published ?? f,
		displayRuntime: P,
		disconnected: M,
		issues: ee,
		message: k,
		pendingAreaChange: D,
		assignArea: (t) => {
			if (!I || !d || M && t || t && (!n.areas.some((e) => e.area_id === t) || Object.entries(m.roomAreaIds).some(([e, n]) => e !== I.id && n === t))) return;
			let r = A(m, I.id, t || null), i = ae({
				manifest: e,
				savedProfile: m,
				roomAreaIds: r.roomAreaIds
			});
			i.clearedSlotIds.length ? O(i) : H(i.profile, [I.id]);
		},
		confirmAreaChange: () => {
			D && (H(D.profile, D.changedRoomIds, D.clearedSlotIds), O(null));
		},
		cancelAreaChange: () => O(null),
		assignEntities: (e) => {
			let t = [.../* @__PURE__ */ new Set([...Object.keys(m.entityIdsBySlotId), ...Object.keys(e)])].filter((t) => m.entityIdsBySlotId[t] !== e[t]);
			M && t.some((t) => e[t]) || H({
				...m,
				entityIdsBySlotId: e
			}, [], [...t, ...B?.slotIds ?? []]);
		},
		refresh: async () => {
			if (!M) try {
				await n.refresh();
			} catch {
				j("Refresh failed. Your draft choices are unchanged.");
			}
		},
		importProfile: (n) => {
			if (!d) throw Error("Set a Home Assistant address before importing a profile.");
			a(dn(t, d, n, e)), j("Connections imported into the draft. Save to activate them.");
		}
	};
}
//#endregion
//#region apps/web/src/editor-workspace/useEditorConnection.ts
function ul({ workspace: e, activeFloorId: t, runtime: n, mode: r, editingLocked: i, unsettled: a, publishOpen: o, initialRequest: s, navigation: c, homeAssistantUrl: l, onPrepareOrigin: u, savedCamera: d, furnishingEditorSelectedId: f, setConnectionBusy: p, homeId: m }) {
	let { snapshot: h, commit: g, flush: _, getRecord: v, adoptRecord: y } = e, b = (0, Z.useMemo)(() => yt(h.project, ln.extensions), [h.project]), x = b.floors.find((e) => e.id === t) ?? b.floors[0], S = ll({
		manifest: b,
		floorId: t,
		bindings: h.bindings,
		runtime: n,
		origin: l,
		active: r === "connect" && !i && !a && !o,
		onChange: (e) => g({
			...h,
			bindings: e
		}),
		...s === void 0 ? {} : { initialRequest: s },
		...c?.request.view === void 0 ? {} : { routeView: c?.request.view },
		onViewChange: c ? (e) => c.go({
			mode: "connect",
			view: e
		}) : void 0
	}), { issues: C, view: w, roomId: T, relationshipId: E } = S, { selectRelationship: D, defaultView: O } = S;
	(0, Z.useEffect)(() => {
		c?.request.mode === "connect" && !c.request.view && (D(null), c.go({
			...c.request,
			view: O
		}, !0));
	}, [
		c,
		O,
		D
	]);
	let k = H();
	return {
		connect: S,
		connectManifest: b,
		connectFloor: x,
		signIn: gn(n, async (e) => {
			p(!0);
			try {
				if ((await _()).status !== "saved") throw Error("The draft could not be saved. Sign-in has not started.");
				if (e !== l) {
					if (!u) throw Error("Connection settings are unavailable in this preview.");
					let t = await u(v(), e);
					if (!y(t)) throw Error("The workspace changed while connecting. Reopen Connect to retry.");
				}
				if (k) return;
				let n = {
					floorId: t,
					mode: "connect",
					view: w,
					roomId: T,
					relationshipId: E,
					arrange: {
						selectedItemId: f,
						...d.current ? { camera: d.current } : {}
					}
				};
				try {
					window.sessionStorage.setItem(xn, JSON.stringify({
						...n,
						workspaceId: m
					}));
				} catch {
					throw Error("The sign-in return could not be saved in this browser. Allow session storage and try again.");
				}
			} finally {
				p(!1);
			}
		}),
		bindingIssues: (0, Z.useMemo)(() => [...G(h.bindings, b, yt(v().published, ln.extensions)), ...C], [
			h.bindings,
			b,
			v,
			C
		])
	};
}
//#endregion
//#region apps/web/src/editor-workspace/useEditorConstructionTools.ts
function dl(e, t, n, r) {
	let { selection: i, draft: a, previewFloor: o, tool: s, clearSelection: c, setTool: l, addFloorZone: u, addGroundZone: d, paintRoomFloor: f } = r, [p, m] = (0, Z.useState)(null), [h, g] = (0, Z.useState)(null);
	(0, Z.useEffect)(() => {
		g((t) => t && !e.stairs.some((e) => e.id === t.id) ? null : t);
	}, [e.stairs]), (0, Z.useEffect)(() => {
		g((e) => n !== "construct" || e && ![e.lowerFloorId, e.upperFloorId].includes(t) ? null : e);
	}, [t, n]);
	let [_, v] = (0, Z.useState)(null), [y, b] = (0, Z.useState)(null), x = i?.kind === "opening" ? i.id : null, S = x ? a.openings.find((e) => e.id === x) : void 0;
	(0, Z.useEffect)(() => {
		b(null);
	}, [n, S?.id]);
	let C = _o(o.coordinates), { cancel: w } = C, [T, E] = (0, Z.useState)({
		kind: "preset",
		preset: "light-oak"
	}), { floorPaintTarget: D, setFloorPaintTarget: O } = r, [k, A] = (0, Z.useState)(null), j = ta(o, (e, t) => e ? u(e, t, T) : d(t, T)), { cancel: M } = j;
	return (0, Z.useEffect)(() => {
		(i || s !== "select") && g(null);
	}, [i, s]), (0, Z.useEffect)(() => {
		(n !== "construct" || s !== "measure") && w();
	}, [
		s,
		w,
		n
	]), (0, Z.useEffect)(() => {
		(n !== "construct" || s !== "floor") && (M(), A(null));
	}, [
		s,
		M,
		n
	]), {
		stairPlacement: p,
		setStairPlacement: m,
		stairDialog: h,
		setStairDialog: g,
		floorDialog: _,
		setFloorDialog: v,
		selectedOpening: S,
		detailsOpeningId: y,
		setDetailsOpeningId: b,
		constructMeasure: C,
		floorFinish: T,
		setFloorFinish: E,
		floorPaintTarget: D,
		setFloorPaintTarget: O,
		pendingRoomPaintId: k,
		setPendingRoomPaintId: A,
		floorZoneDrawing: j,
		requestRoomPaint: (0, Z.useCallback)((e) => {
			let t = o.rooms.find((t) => t.id === e);
			if (t) {
				if (t.floorZones?.length) {
					A(e);
					return;
				}
				f(e, T, !1);
			}
		}, [
			f,
			o.rooms,
			T
		]),
		confirmRoomPaint: (0, Z.useCallback)((e) => {
			k && (f(k, T, e), A(null));
		}, [
			f,
			T,
			k
		]),
		beginStairPlacement: () => {
			l("select"), c();
			let n = e.floors.findIndex((e) => e.id === t), r = e.floors[n], i = e.floors[n + 1];
			!r || !i || (g(null), m({
				id: `stairs-${rn()}`,
				lowerFloorId: t,
				upperFloorId: i.id,
				at: r.footprint[0] ?? r.coordinates.origin,
				widthMeters: 1,
				runMeters: r.floorToFloorHeightMeters * 1.5,
				rotationYRadians: 0
			}));
		}
	};
}
//#endregion
//#region apps/web/src/editor-workspace/useEditorEntryRequest.ts
function fl(e, t, n, r, i) {
	let a = (0, Z.useEffectEvent)(() => {
		let n = e;
		if (!n) return;
		let i = n.floorId ?? t.sceneItems.find((e) => e.id === n.relationshipId || e.id === n.arrange?.selectedItemId)?.floorId ?? t.floors.find((e) => e.rooms.some((e) => e.id === n.roomId))?.id;
		i && t.floors.some((e) => e.id === i) && r(i, "target");
	});
	(0, Z.useEffect)(() => {
		a();
	}, [e]);
	let o = (0, Z.useEffectEvent)(() => {
		let t = e?.arrange?.selectedItemId;
		t && n.some((e) => e.id === t) && i(t);
	});
	(0, Z.useEffect)(() => {
		o();
	}, []);
}
//#endregion
//#region apps/web/src/editor-workspace/useEditorItemActions.ts
function pl({ furnishingEditor: e, projection: t, mode: n, clearFocus: r, floor: i }) {
	let { select: a, selectedId: o, deleteItem: s, duplicate: c, items: l } = e, { editorProject: u } = t, [d, f] = (0, Z.useState)(null);
	(0, Z.useEffect)(() => {
		f(null);
	}, [n, o]);
	let p = (0, Z.useCallback)(() => {
		f(null), a(null), r();
	}, [a, r]);
	return {
		detailsItemId: d,
		setDetailsItemId: f,
		clearFurnishingSelection: p,
		deleteSceneItem: (0, Z.useCallback)((e) => {
			s(e), p();
		}, [p, s]),
		duplicateArrangeItem: (0, Z.useCallback)((e) => l.some((t) => t.id === e) ? (f(null), c(e, i, je(u)), !0) : !1, [
			i,
			u,
			c,
			l
		])
	};
}
//#endregion
//#region apps/web/src/editor-preview/project-sync.ts
var ml = (e, t) => Object.is(e, t) || JSON.stringify(e) === JSON.stringify(t), hl = (e, t, n, r = e.floors[0]?.id) => ({
	floorChanged: !ml(e.floors.find((e) => e.id === r), t.floors.find((e) => e.id === r)),
	selectedItemId: t.sceneItems.find((t) => !e.sceneItems.some((e) => e.id === t.id))?.id ?? (t.sceneItems.some((e) => e.id === n) ? n : null)
}), gl = /* @__PURE__ */ new WeakMap(), _l = (e) => {
	let t = gl.get(e);
	if (t) return t;
	let { ceilings: n, ...r } = e, i = {
		...r,
		...e.ceilings ? { ceilings: e.ceilings.filter((e) => e.kind === "flat") } : {},
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
	return gl.set(e, i), i;
}, vl = (e, t, n) => {
	let r = _l(t), i = e.floors.find((e) => e.id === t.id);
	if (!i) return e;
	let a = ml(r, i) ? i : r, o = a === i ? e.floors : e.floors.map((e) => e.id === t.id ? a : e), s = Object.fromEntries(o.flatMap((e) => e.rooms).map((t) => [t.id, e.roomProfiles[t.id] ?? { dashboardSlots: [] }])), c = Object.fromEntries(o.flatMap((e) => e.openings).map((t) => [t.id, t.kind === "door" && t.operation === "roll-up" ? e.openingProfiles[t.id] ?? {} : (() => {
		let { coverSlot: n, ...r } = e.openingProfiles[t.id] ?? {};
		return r;
	})()])), l = ml(s, e.roomProfiles) ? e.roomProfiles : s, u = ml(c, e.openingProfiles) ? e.openingProfiles : c, d = [...e.sceneItems.filter((e) => e.floorId !== t.id), ...n.filter((e) => e.floorId === t.id)], f = new Map(e.sceneItems.map((e, t) => [e.id, t])), p = d.sort((e, t) => (f.get(e.id) ?? Infinity) - (f.get(t.id) ?? Infinity)), m = ml(p, e.sceneItems) ? e.sceneItems : ml(p, n) ? n : p;
	return o === e.floors && m === e.sceneItems && l === e.roomProfiles && u === e.openingProfiles ? e : {
		...e,
		floors: o,
		sceneItems: m,
		roomProfiles: l,
		openingProfiles: u
	};
}, yl = (e, t, n, r, i = []) => {
	let a = vl(e.project, t, n), o = new Set(a.sceneItems.flatMap((e) => e.kind === "device" ? e.entitySlots.map((e) => e.id) : [])), s = e.project.sceneItems.flatMap((e) => e.kind === "device" ? e.entitySlots.map((e) => e.id).filter((e) => !o.has(e)) : []), c = S(e.bindings, s);
	try {
		[...we(a, r).issues, ...i].some((e) => e.severity === "error") || (c = se(c, Pt(a, {
			furnishingModels: {},
			deviceModels: {},
			openingModels: {}
		})));
	} catch {}
	return {
		project: a,
		bindings: c
	};
};
//#endregion
//#region apps/web/src/editor-workspace/useEditorProjectHistory.ts
function bl({ runtime: e, homeAssistantUrl: t, workspace: n, constructEditor: r, furnishingEditor: i, floorZoneDrawing: a, activeFloorId: o, selectFloor: s, editingLocked: c, unsettled: u, dragging: d, previewSceneItems: f, editorProjectJson: p, editorProject: m, mode: h, onRestore: g }) {
	let { snapshot: _, commit: v, undo: y, redo: b } = n, { draft: x, replaceFloor: S, previewFloor: C, topologyIssues: w, poolDrawing: T } = r, { selectedId: E, items: D, replaceItems: O, select: k, transaction: A } = i, { active: j, undo: M, redo: N } = a, P = (0, Z.useRef)(null), F = (0, Z.useRef)(null), I = (e) => {
		if (u || c) return;
		let t = _.project.sceneItems.find((t) => t.id === e);
		t && (t.floorId === o ? k(e) : (F.current = e, s(t.floorId)));
	}, L = (0, Z.useCallback)((e) => {
		let t = _.project, n = hl(t, e, E, o), r = ye({
			activeFloorId: o,
			wholeBuilding: !1
		}, t.floors.map((e) => e.id), e.floors.map((e) => e.id)).activeFloorId, i = e.floors.find((e) => e.id === r);
		n.floorChanged ||= i.id !== x.floorId, P.current = {
			draft: x,
			items: D,
			floorChanged: n.floorChanged
		}, n.floorChanged && S(i), O(e.sceneItems.filter((e) => e.floorId === i.id), F.current ?? n.selectedItemId), F.current = null, g();
	}, [
		o,
		g,
		_.project,
		x,
		S,
		D,
		O,
		E
	]), R = (0, Z.useCallback)(() => {
		if (!c && !d && j) {
			M();
			return;
		}
		if (!c && !d && T.active) {
			T.undo();
			return;
		}
		if (u || c) return;
		let e = y();
		e && L(e.project);
	}, [
		c,
		d,
		j,
		T,
		u,
		y,
		L,
		M
	]), z = (0, Z.useCallback)(() => {
		if (!c && !d && j) {
			N();
			return;
		}
		if (!c && !d && T.active) {
			T.redo();
			return;
		}
		if (u || c) return;
		let e = b();
		e && L(e.project);
	}, [
		c,
		d,
		j,
		T,
		u,
		b,
		L,
		N
	]);
	return (0, Z.useEffect)(() => {
		if (u || c || x.floorId !== o) return;
		let e = P.current;
		if (e) {
			(!e.floorChanged || x !== e.draft) && D !== e.items && (P.current = null);
			return;
		}
		v(yl(_, C, f, yn, w.map((e) => ({
			...e,
			severity: "error"
		}))));
	}, [
		x,
		C,
		p,
		w,
		c,
		u,
		v,
		_,
		D,
		A,
		h,
		f,
		o
	]), {
		setActionBarItems: (0, Z.useCallback)((n, r) => {
			if (c || u) return;
			let i = _.bindings;
			if (r) {
				if (!t || e.status !== "connected" || e.origin !== l(t)) return;
				let n = l(t), a = i[n] ?? {
					draft: ue(m.home.id),
					published: ue(m.home.id),
					manualRoomIds: [],
					manualSlotIds: []
				};
				i = {
					...i,
					[n]: {
						...a,
						draft: {
							...a.draft,
							actionEntityIdsByShortcutId: {
								...a.draft.actionEntityIdsByShortcutId,
								[r.id]: r.entityId
							}
						}
					}
				};
			}
			i = Object.fromEntries(Object.entries(i).map(([e, t]) => [e, {
				...t,
				draft: {
					...t.draft,
					...t.draft.actionEntityIdsByShortcutId ? { actionEntityIdsByShortcutId: Object.fromEntries(Object.entries(t.draft.actionEntityIdsByShortcutId).filter(([e, t]) => n.some((n) => n.id === e && (n.target.kind === "scene" || n.target.kind === "script") && t.startsWith(`${n.target.kind}.`)))) } : {}
				}
			}])), v({
				..._,
				bindings: i,
				project: {
					...m,
					actionBar: { items: n }
				}
			});
		}, [
			v,
			c,
			m,
			_,
			u,
			t,
			e
		]),
		replaceEditorsFromProject: L,
		undoProject: R,
		redoProject: z,
		selectSceneItem: I
	};
}
//#endregion
//#region apps/web/src/editor-preview/construct/useSceneItemDependencies.ts
var xl = (e, t, n) => {
	let { transaction: r, items: i, selectedId: a, replaceItems: o } = e, s = (0, Z.useRef)(new Map(t.walls.map((e) => [e.id, e]))), c = r?.items ?? i, l = (0, Z.useMemo)(() => Za(c, t, s.current, n), [
		c,
		t,
		n
	]), u = (0, Z.useMemo)(() => Qa(l, t), [l, t]);
	return (0, Z.useLayoutEffect)(() => {
		if (r || (t.walls.forEach((e) => s.current.set(e.id, e)), u.items.length === i.length && u.items.every((e, t) => e === i[t]))) return;
		let e = u.items.some((e) => e.id === a) ? a : null;
		o(u.items, e);
	}, [
		t,
		u.items,
		i,
		r,
		a,
		o
	]), u;
};
//#endregion
//#region apps/web/src/editor-workspace/useEditorSceneProjection.ts
function Sl({ project: e, constructEditor: t, furnishingEditor: n, activeFloorId: r }) {
	let { previewFloor: i, wallRuns: a } = t, { transaction: o, items: s, selectedId: c } = n, { furnishingModels: l, deviceModels: u } = (0, Z.useMemo)(() => _t(e, yn), [e]), d = xl(n, i, a), f = d.items, p = o ? s : f, m = p.find((e) => e.id === c), h = m && (m.kind === "device" ? u : l)[m.modelId], g = (0, Z.useMemo)(() => Ye(i), [i]), _ = (0, Z.useMemo)(() => vl(e, i, f), [
		i,
		f,
		e
	]), v = (0, Z.useMemo)(() => JSON.stringify(_), [_]), y = (0, Z.useMemo)(() => nt(_, ln.extensions).manifest, [_]), b = (0, Z.useMemo)(() => ({
		...i,
		elevationMeters: Yt(e.floors).find((e) => e.floorId === r)?.elevationMeters ?? 0
	}), [
		i,
		e.floors,
		r
	]), x = JSON.stringify(y.floors.flatMap((e) => e.rooms).map((e) => [
		e.id,
		e.name,
		e.devices.map(({ id: e, model: t, entitySlots: n }) => ({
			id: e,
			model: t,
			entitySlots: n
		}))
	]));
	return {
		furnishingModels: l,
		deviceModels: u,
		ceilingDependencies: d,
		previewSceneItems: f,
		visualSceneItems: p,
		selectedItem: m,
		selectedDefinition: h,
		walkNavigation: g,
		editorProject: _,
		editorProjectJson: v,
		editedManifest: y,
		placementFloor: b,
		editorResolvedBindings: (0, Z.useMemo)(() => bn(y), [x]),
		visualManifest: (0, Z.useMemo)(() => p === y.sceneItems ? y : {
			...y,
			sceneItems: [...y.sceneItems.filter((e) => e.floorId !== r), ...p]
		}, [
			r,
			y,
			p
		])
	};
}
//#endregion
//#region apps/web/src/editor-workspace/useEditorSession.ts
function Cl(e, t, n) {
	let r = Ht(), { flush: i, publish: a } = e, [o, s] = (0, Z.useState)(!1), [c, l] = (0, Z.useState)(!1);
	(0, Z.useEffect)(() => {
		l(!1);
	}, [t]);
	let u = (0, Z.useRef)(null), d = (0, Z.useCallback)(() => {
		r.root.pointerLockElement && document.exitPointerLock(), l(!1), requestAnimationFrame(() => u.current?.focus());
	}, [r]), [f, p] = (0, Z.useState)(!1), m = e.busy, [h, g] = (0, Z.useState)(null);
	return {
		closing: o,
		previewOpen: c,
		setPreviewOpen: l,
		walkButton: u,
		closeWalk: d,
		publishOpen: f,
		setPublishOpen: p,
		publishing: m,
		publishMessage: h,
		setPublishMessage: g,
		saveDraft: (0, Z.useCallback)(async () => {
			s(!0);
			let e = await i();
			if (e.status === "saved") {
				n(e.record, "draft-saved");
				return;
			}
			s(!1);
		}, [i, n]),
		applyDraft: (0, Z.useCallback)(async (e) => {
			g(null);
			let t = await a({
				confirmWarnings: !0,
				bindingIssues: e
			});
			if (t.status === "published") {
				p(!1), n(t.record, "applied");
				return;
			}
			if (t.status === "storage-error") {
				g("Could not save changes in browser storage. The previous home is unchanged.");
				return;
			}
			g("The draft changed while saving. Review the issues and try again.");
		}, [n, a])
	};
}
function wl(e, t) {
	let n = (0, Z.useMemo)(() => [...t, ...e.map((e) => ({
		code: e.code,
		path: e.path,
		message: e.message,
		severity: e.severity
	}))].filter((e, t, n) => n.findIndex((t) => t.code === e.code && t.path === e.path && t.message === e.message) === t), [e, t]);
	return {
		publishIssues: n,
		publishErrors: n.filter((e) => e.severity !== "warning"),
		publishWarnings: n.filter((e) => e.severity === "warning")
	};
}
function Tl(e, t, n) {
	let r = (0, Z.useRef)(!1);
	(0, Z.useEffect)(() => {
		if (!e) {
			r.current = !1;
			return;
		}
		!t && !r.current && (r.current = !0, n());
	}, [
		e,
		t,
		n
	]);
}
//#endregion
//#region apps/web/src/editor-workspace/useEditorValidation.ts
function El({ editorProject: e, constructEditor: t, previewSceneItems: n, ceilingDependencies: r, walkNavigation: i, mode: a }) {
	let o = (0, Z.useMemo)(() => {
		try {
			return we(e, yn);
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
	}, [e]), s = (0, Z.useMemo)(() => Ya({
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
		displayedContextualIssues: (0, Z.useMemo)(() => Ja(s, a === "construct" ? t.tool : null, {
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
function Dl({ clearConstructionSelection: e, clearFurnishingSelection: t, constructEditor: n, constructMeasure: r, dragging: i, duplicateArrangeItem: a, duplicateConstructionOpening: o, editingLocked: s, floorZoneDrawing: c, furnishingEditor: l, marqueeSelecting: u, mode: d, pendingRoomPaintId: f, previewOpen: p, publishOpen: m, redoProject: h, selectedOpening: g, undoProject: _, setPendingRoomPaintId: v, setDragging: y }) {
	let b = Ht(), x = (0, Z.useRef)(null);
	(0, Z.useEffect)(() => {
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
						f ? v(null) : c.active ? c.cancel() : n.tool === "platform" && n.poolDrawing.active ? n.poolDrawing.cancel() : n.tool === "platform" || n.tool === "floor" ? n.setTool("select") : n.tool === "measure" && r.phase !== "idle" ? r.cancel() : n.tool === "measure" ? n.setTool("select") : n.poolDrawing.active ? n.poolDrawing.cancel() : n.drawStart ? n.cancelWall() : [
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
		_,
		b,
		v,
		y
	]);
}
//#endregion
//#region apps/web/src/editor-reference-plan/reference-history.ts
var Ol = (e) => et(e), kl = (e, t) => Vt({
	project: e.project,
	bindings: e.bindings
}) !== Vt({
	project: t.project,
	bindings: t.bindings
});
//#endregion
//#region apps/web/src/editor-reference-plan/useReferencePersistence.ts
function Al(e, t, n) {
	let [r, i] = (0, Z.useState)(!1), [a, o] = (0, Z.useState)(null), [s, c] = (0, Z.useState)({}), l = (0, Z.useRef)(/* @__PURE__ */ new Map()), u = (0, Z.useRef)(/* @__PURE__ */ new Map()), d = (0, Z.useRef)(Promise.resolve()), f = (0, Z.useRef)(!1), p = (0, Z.useRef)({
		plans: t,
		preferences: s
	});
	p.current = {
		plans: t,
		preferences: s
	};
	let m = (0, Z.useRef)(!0), h = (0, Z.useRef)(0), g = (0, Z.useCallback)(async () => {
		let t = ++h.current;
		try {
			let r = await An(e);
			if (!m.current || t !== h.current) return;
			c(r.preferences);
			let a = n(r.plans);
			d.current = d.current.then(async () => {
				await un(e, {
					plans: a,
					preferences: r.preferences
				}, /* @__PURE__ */ new Map()), await kn(e, Object.values(a).map((e) => e.assetId));
			}).catch(() => void 0), i(!0), o(null);
		} catch {
			m.current && t === h.current && o("Reference plans could not be loaded from this browser. Retry to use your saved plans.");
		}
	}, [e, n]);
	(0, Z.useEffect)(() => (m.current = !0, g(), () => {
		m.current = !1, h.current += 1;
	}), [g]);
	let _ = (0, Z.useCallback)(() => {
		let t = p.current;
		if (!t.plans) return;
		let n = new Map(u.current);
		d.current = d.current.catch(() => void 0).then(async () => {
			await un(e, {
				plans: t.plans,
				preferences: t.preferences
			}, n);
			for (let [e, t] of n) u.current.get(e) === t && u.current.delete(e);
			f.current = !1, m.current && o(null);
		}).catch(() => {
			f.current = !0, m.current && o("The reference plan could not be saved in this browser. Free some storage, then Retry. Keep this editor open to retain your changes.");
		});
	}, [e]), v = JSON.stringify({
		plans: t,
		preferences: s
	});
	return (0, Z.useEffect)(() => {
		r && _();
	}, [
		v,
		r,
		_
	]), {
		ready: r,
		error: a,
		preferences: s,
		getAsset: (0, Z.useCallback)(async (t) => {
			let n = l.current.get(t);
			if (n) return n;
			let r = await mn(e, t);
			if (!r) throw Error("The saved reference image is missing. Replace the image to continue tracing.");
			return l.current.set(t, r), r;
		}, [e]),
		addAsset: (0, Z.useCallback)((e, t) => {
			l.current.set(e, t), u.current.set(e, t);
		}, []),
		setPreference: (0, Z.useCallback)((e, t) => c((n) => ({
			...n,
			[e]: t
		})), []),
		cleanup: (0, Z.useCallback)((t) => {
			d.current = d.current.then(async () => {
				if (f.current) return;
				let n = Object.fromEntries(Object.entries(p.current.preferences).filter(([e]) => e in t));
				await un(e, {
					plans: t,
					preferences: n
				}, /* @__PURE__ */ new Map()), await kn(e, Object.values(t).map((e) => e.assetId));
			}).catch(() => void 0);
		}, [e]),
		retry: () => {
			r ? _() : g();
		}
	};
}
//#endregion
//#region apps/web/src/editor-preview/useEditorWorkspace.ts
var jl = (e) => ({
	project: e.draft,
	bindings: e.bindings
}), Ml = (e) => e instanceof Error ? e : /* @__PURE__ */ Error("Workspace storage failed.");
function Nl({ initialRecord: e, lifecycle: t, autosaveDelayMs: n = 280 }) {
	let [r, i] = (0, Z.useState)(() => Ol(jl(e))), a = (0, Z.useRef)(r), o = (0, Z.useCallback)((e) => {
		let t = a.current, n = Object.fromEntries(Object.entries(e).filter(([e]) => t.present.project.floors.some((t) => t.id === e))), r = (e) => ({
			...e,
			references: n
		}), o = {
			present: r(t.present),
			past: t.past.map(r),
			future: t.future.map(r)
		};
		return a.current = o, i(o), n;
	}, []), s = Al(e.homeId, r.present.references, o), { cleanup: c } = s, l = (0, Z.useRef)(r);
	l.current = r, (0, Z.useEffect)(() => () => {
		let e = l.current.present;
		if (!e.references) return;
		let t = new Set(e.project.floors.map((e) => e.id));
		c(Object.fromEntries(Object.entries(e.references).filter(([e]) => t.has(e))));
	}, [c]);
	let [u, d] = (0, Z.useState)(e), f = (0, Z.useRef)(u), [p, m] = (0, Z.useState)(!1), [h, g] = (0, Z.useState)(null), [_, v] = (0, Z.useState)(!1), y = (0, Z.useRef)(!1), b = (0, Z.useRef)(!0), x = (0, Z.useRef)(0), S = (0, Z.useRef)(0), C = (0, Z.useRef)(0), T = (0, Z.useRef)(Promise.resolve()), E = (0, Z.useRef)(null), D = (0, Z.useRef)(null), O = (0, Z.useCallback)(() => {
		E.current !== null && globalThis.clearTimeout(E.current), E.current = null;
	}, []), k = (0, Z.useCallback)((e) => {
		f.current = e, b.current && d(e);
	}, []), A = (0, Z.useCallback)((e) => (D.current = e.status === "storage-error" ? e : null, b.current && (m(!1), g(e.status === "storage-error" ? e.error : /* @__PURE__ */ Error("The draft could not be saved."))), e), []), j = (0, Z.useCallback)((e) => {
		C.current += 1;
		let t = T.current.then(e);
		return T.current = t.catch(() => void 0).finally(() => {
			--C.current;
		}), t;
	}, []), M = (0, Z.useCallback)(async (e, n, r = !1) => {
		if (r && D.current?.status === "storage-error" && !(D.current.error instanceof w) && (D.current = null), D.current) return D.current;
		if (n <= S.current) return b.current && r && (g(null), m(!1)), {
			status: "saved",
			record: f.current
		};
		try {
			let r = await t.autosave(f.current, e.project, void 0, e.bindings);
			return r.status === "saved" ? (k(r.record), S.current = n, b.current && (g(null), m(S.current !== x.current)), r) : A(r);
		} catch (e) {
			return A({
				status: "storage-error",
				record: f.current,
				error: Ml(e)
			});
		}
	}, [
		k,
		t,
		A
	]), N = (0, Z.useCallback)((e) => {
		O();
		let t = x.current, n = structuredClone(a.current.present), r = e && D.current !== null;
		return j(() => M(n, t, r));
	}, [
		O,
		j,
		M
	]);
	(0, Z.useEffect)(() => (b.current = !0, x.current !== S.current && E.current === null && !D.current && (E.current = globalThis.setTimeout(() => {
		E.current = null, N(!1);
	}, n)), () => {
		b.current = !1, O();
	}), [
		n,
		O,
		N
	]);
	let P = (0, Z.useCallback)(() => N(!0), [N]), F = (0, Z.useCallback)((e) => {
		if (y.current || e === a.current) return null;
		let t = kl(a.current.present, e.present);
		return a.current = e, i(e), t ? (x.current += 1, O(), D.current || (m(!0), E.current = globalThis.setTimeout(() => {
			E.current = null, N(!1);
		}, n)), e.present) : e.present;
	}, [
		n,
		O,
		N
	]), I = (0, Z.useCallback)((e) => !y.current && F(Nt(a.current, {
		...e,
		...a.current.present.references === void 0 ? {} : { references: a.current.present.references }
	})) !== null, [F]), L = (0, Z.useCallback)((e) => !y.current && F(Nt(a.current, {
		...a.current.present,
		references: e
	})) !== null, [F]), R = (0, Z.useCallback)(() => F(St(a.current)), [F]), z = (0, Z.useCallback)(() => F(Ce(a.current)), [F]), B = (0, Z.useCallback)(async (e = {}) => {
		if (y.current) return {
			status: "blocked",
			errors: [],
			warnings: []
		};
		y.current = !0, v(!0), O();
		let n = structuredClone(a.current.present), r = x.current, i = D.current !== null;
		try {
			return await j(async () => {
				let a = await M(n, r, i);
				if (a.status !== "saved") return {
					status: "storage-error",
					errors: [],
					warnings: [],
					error: a.status === "storage-error" ? a.error : /* @__PURE__ */ Error("The draft could not be saved.")
				};
				let o = await t.publish(f.current, e);
				return o.status === "published" ? k(o.record) : o.status === "storage-error" && A({
					...o,
					record: f.current
				}), o;
			});
		} catch (e) {
			let t = Ml(e);
			return A({
				status: "storage-error",
				record: f.current,
				error: t
			}), {
				status: "storage-error",
				errors: [],
				warnings: [],
				error: t
			};
		} finally {
			y.current = !1, b.current && v(!1);
		}
	}, [
		k,
		O,
		j,
		t,
		M,
		A
	]), V = (0, Z.useCallback)((e) => {
		let t = Object.fromEntries(Object.entries(a.current.present.references ?? {}).filter(([t]) => e.draft.floors.some((e) => e.id === t))), n = Ol({
			...jl(e),
			...a.current.present.references ? { references: t } : {}
		});
		a.current = n, n.present.references && c(t), S.current = ++x.current, D.current = null, k(e), b.current && (i(n), m(!1), g(null));
	}, [k, c]), H = (0, Z.useCallback)(async (e) => {
		if (y.current) return {
			status: "storage-error",
			record: f.current,
			error: /* @__PURE__ */ Error("The workspace is busy.")
		};
		y.current = !0, v(!0), O();
		try {
			return await j(async () => {
				let n = await t[e](f.current);
				return n.status === "saved" ? V(n.record) : A(n), n;
			});
		} catch (e) {
			return A({
				status: "storage-error",
				record: f.current,
				error: Ml(e)
			});
		} finally {
			y.current = !1, b.current && v(!1);
		}
	}, [
		O,
		j,
		V,
		t,
		A
	]), U = (0, Z.useCallback)(() => H("resetDraftToPublished"), [H]), W = (0, Z.useCallback)(() => H("resetToSeed"), [H]), ee = (0, Z.useCallback)(() => f.current, []), te = (0, Z.useCallback)((e) => y.current || C.current > 0 || E.current !== null || x.current !== S.current || e.homeId !== f.current.homeId || e.revision < f.current.revision ? !1 : (V(e), !0), [V]);
	return {
		record: u,
		modelAssetReferences: le([
			u.published,
			...r.past.map((e) => e.project),
			r.present.project,
			...r.future.map((e) => e.project)
		]),
		snapshot: r.present,
		commit: I,
		undo: R,
		redo: z,
		commitReferences: L,
		referenceStorage: s,
		canUndo: r.past.length > 0,
		canRedo: r.future.length > 0,
		flush: P,
		publish: B,
		saving: p,
		error: h,
		busy: _,
		resetDraftToPublished: U,
		resetToSeed: W,
		getRecord: ee,
		adoptRecord: te
	};
}
//#endregion
//#region apps/web/src/editor-workspace/useHomeEditorController.ts
function Pl({ initialRecord: e, lifecycle: t, onClose: n, onWorkspaces: i, autosaveDelayMs: a, initialRequest: o, navigation: c, homeAssistantUrl: l = null, onPrepareOrigin: u }) {
	let [d, f] = (0, Z.useState)(o?.mode ?? "construct"), p = c?.request.mode ?? d, m = Nl({
		initialRecord: e,
		lifecycle: t,
		...a === void 0 ? {} : { autosaveDelayMs: a }
	}), { error: h, saving: g, busy: _ } = m, { snapshot: v, commit: y, flush: b } = m, x = Ke(v.project.floors), { activeFloorId: S, selectFloor: C } = x, w = S, T = Qc(v.project.floors, w), E = s(), [D, O] = (0, Z.useState)(!1), [k, A] = (0, Z.useState)(!1), [j, M] = (0, Z.useState)(!1), N = e.draft.floors.find((e) => e.id === w) ?? e.draft.floors[0], P = go(N, ln.floors.find((e) => e.id === N.id) ?? N, e.draft.home.palette.exterior, r(e.draft) && e.draft.floors.every(qa) ? "wall" : "select", v.project.floors.filter((e) => e.id !== w).flatMap((e) => e.rooms.map((e) => e.name))), { draft: F, previewFloor: I, poolDrawing: L, isSettling: R, drawStart: z, clearSelection: B, cancelWall: V, duplicateOpening: H } = P, U = $o(e.draft.sceneItems.filter((e) => e.floorId === N.id)), { select: W, selectedId: ee, transaction: te, cancelTransaction: ne } = U, re = Sl({
		project: v.project,
		constructEditor: P,
		furnishingEditor: U,
		activeFloorId: w
	}), { furnishingModels: ie, deviceModels: G, ceilingDependencies: ae, previewSceneItems: K, visualSceneItems: oe, selectedItem: se, selectedDefinition: ce, walkNavigation: le, editorProject: ue, editorProjectJson: de, editedManifest: fe, placementFloor: pe, editorResolvedBindings: me, visualManifest: he } = re, { cameraView: ge, setCameraView: q, savedCamera: _e, cameraResetKey: ve, cameraFocusRoomId: ye, setCameraFocusRoomId: be, cameraFocusPoint: xe, setCameraFocusPoint: Se, activeIssueKey: Ce, setActiveIssueKey: J, issueFocusVersion: we, selectedRoomId: Te, setSelectedRoomId: Ee, focusRoom: De, focusIssue: Oe } = il({
		initialRequest: o,
		constructEditor: P,
		furnishingEditor: U,
		previewSceneItems: K
	});
	fl(o, v.project, e.draft.sceneItems, C, W);
	let { detailsItemId: ke, setDetailsItemId: Ae, clearFurnishingSelection: je, deleteSceneItem: Me, duplicateArrangeItem: Ne } = pl({
		furnishingEditor: U,
		projection: re,
		mode: p,
		clearFocus: (0, Z.useCallback)(() => {
			Ee(null), J(null);
		}, [Ee, J]),
		floor: I
	}), Pe = h ? "error" : g ? "saving" : "saved", { closing: Fe, previewOpen: Ie, setPreviewOpen: Le, walkButton: Re, closeWalk: ze, publishOpen: Be, setPublishOpen: Ve, publishing: He, publishMessage: Ue, setPublishMessage: We, saveDraft: Ge, applyDraft: qe } = Cl(m, p, n), Je = L, { beginStairPlacement: Ye, ...Xe } = dl(v.project, w, p, P), { stairPlacement: Ze, setStairDialog: Qe, selectedOpening: $e, setDetailsOpeningId: et, constructMeasure: tt, pendingRoomPaintId: nt, setPendingRoomPaintId: rt, floorZoneDrawing: it } = Xe, { active: at, cancel: ot } = it, st = !!Ze || k || R || !!te || Je.active || at || nt !== null, ct = _ || Fe || D, lt = ct || st || Be || Ie, ut = rl(m, w, p === "construct", lt || !!z), dt = Xc({
		scope: `${p}:${w}`,
		enabled: p === "construct" && !lt && !ut.adjusting,
		snapshot: v,
		commit: y
	}), ft = st || ut.adjusting || dt.active, pt = (0, Z.useCallback)(() => Ae(null), [Ae]), { catalogBrowsing: mt, setCatalogBrowsing: ht, catalogError: gt, setCatalogError: _t, arrangeAnnouncement: vt, addCatalogItem: yt, handleCameraTargetChange: bt } = cl({
		projection: re,
		furnishingEditor: U,
		disabled: ct || ft,
		onAdded: pt
	}), xt = (0, Z.useCallback)(() => {
		Qe(null), B(), J(null);
	}, [
		B,
		J,
		Qe
	]), St = (0, Z.useCallback)((e) => (et(null), H(e)), [H, et]), { setActionBarItems: Ct, replaceEditorsFromProject: wt, undoProject: Tt, redoProject: Et, selectSceneItem: Dt } = bl({
		runtime: E,
		homeAssistantUrl: l,
		workspace: m,
		constructEditor: P,
		furnishingEditor: U,
		floorZoneDrawing: it,
		activeFloorId: w,
		selectFloor: C,
		editingLocked: ct,
		unsettled: ft,
		dragging: k,
		previewSceneItems: K,
		editorProjectJson: de,
		editorProject: ue,
		mode: p,
		onRestore: (0, Z.useCallback)(() => {
			Ae(null), Ee(null), A(!1), M(!1);
		}, [Ee, Ae])
	});
	(0, Z.useEffect)(() => {
		F.floorId !== w && (wt(v.project), et(null), Ae(null), Se(null), be(null));
	}, [
		w,
		F.floorId,
		wt,
		v.project,
		Se,
		be,
		et,
		Ae
	]), Dl({
		clearConstructionSelection: xt,
		clearFurnishingSelection: je,
		constructEditor: P,
		constructMeasure: tt,
		dragging: k,
		duplicateArrangeItem: Ne,
		duplicateConstructionOpening: St,
		editingLocked: ct || ut.adjusting || dt.active,
		floorZoneDrawing: it,
		furnishingEditor: U,
		marqueeSelecting: j,
		mode: p,
		pendingRoomPaintId: nt,
		previewOpen: Ie,
		publishOpen: Be,
		redoProject: Et,
		selectedOpening: $e,
		undoProject: Tt,
		setPendingRoomPaintId: rt,
		setDragging: A
	});
	let Ot = () => {
		ct || ft || (J(null), Ye());
	}, kt = (0, Z.useCallback)(async () => {
		ct || ft || await Ge();
	}, [
		ct,
		ft,
		Ge
	]);
	Tl(c?.exitRequested, ct || ft, kt);
	let { connect: At, connectManifest: jt, connectFloor: Mt, signIn: Y, bindingIssues: Nt } = ul({
		workspace: m,
		activeFloorId: w,
		runtime: E,
		mode: p,
		editingLocked: ct,
		unsettled: ft,
		publishOpen: Be,
		initialRequest: o,
		navigation: c,
		homeAssistantUrl: l,
		onPrepareOrigin: u,
		savedCamera: _e,
		furnishingEditorSelectedId: ee,
		setConnectionBusy: O,
		homeId: e.homeId
	}), { setView: Pt, defaultView: Ft } = At, { cancel: It } = Je, Lt = (0, Z.useCallback)((e, t = !1) => {
		ct || (_t(null), te && ne(), Ae(null), e !== "construct" && (V(), It(), ot(), rt(null)), A(!1), M(!1), c ? t || c.go({ mode: e }) : e === "connect" && p !== "connect" && !t && Pt(Ft), f(e));
	}, [
		ct,
		te,
		ne,
		V,
		It,
		ot,
		c,
		p,
		Pt,
		Ft,
		_t,
		rt,
		Ae
	]), { contextualIssues: Rt, displayedContextualIssues: zt } = El({
		editorProject: ue,
		constructEditor: P,
		furnishingModels: ie,
		deviceModels: G,
		previewSceneItems: K,
		ceilingDependencies: ae,
		walkNavigation: le,
		mode: p
	}), Bt = (0, Z.useCallback)((e) => Oe(e, Lt), [Oe, Lt]), { publishIssues: Vt, publishErrors: Ht, publishWarnings: Ut } = wl(Rt, Nt), Wt = (0, Z.useCallback)(async () => {
		Ht.length || ct || ft || await qe(Nt);
	}, [
		Ht.length,
		ct,
		ft,
		qe,
		Nt
	]);
	return {
		northOrientation: dt,
		...Xe,
		editorProject: ue,
		setActionBarItems: Ct,
		cameraFocusRoomId: ye,
		focusRoom: De,
		placementFloor: pe,
		selectSceneItem: Dt,
		floorNavigation: x,
		activeFloorId: w,
		floorReferences: T,
		startStairs: Ot,
		connectFloor: Mt,
		mode: p,
		editingLocked: ct,
		publishOpen: Be,
		previewOpen: Ie,
		connectManifest: jt,
		connect: At,
		clearConstructionSelection: xt,
		clearFurnishingSelection: je,
		cameraView: ge,
		cameraResetKey: ve,
		constructEditor: P,
		dragging: k,
		cameraFocusPoint: xe,
		handleCameraTargetChange: bt,
		savedCamera: _e,
		previewSceneItems: K,
		displayedContextualIssues: zt,
		activeIssueKey: Ce,
		issueFocusVersion: we,
		poolDrawing: Je,
		focusIssue: Bt,
		furnishingModels: ie,
		deviceModels: G,
		visualManifest: he,
		selectedRoomId: Te,
		editorResolvedBindings: me,
		marqueeSelecting: j,
		setDragging: A,
		setSelectedRoomId: Ee,
		setMarqueeSelecting: M,
		duplicateConstructionOpening: St,
		visualSceneItems: oe,
		furnishingEditor: U,
		selectedItem: se,
		selectedDefinition: ce,
		detailsItemId: ke,
		setDetailsItemId: Ae,
		unsettled: ft,
		selectMode: Lt,
		duplicateArrangeItem: Ne,
		deleteSceneItem: Me,
		setCameraView: q,
		walkButton: Re,
		setPreviewOpen: Le,
		closeEditor: kt,
		onWorkspaces: i,
		closing: Fe,
		setPublishMessage: We,
		setPublishOpen: Ve,
		runtime: E,
		reference: ut,
		workspace: m,
		undoProject: Tt,
		redoProject: Et,
		homeAssistantUrl: l,
		signIn: Y,
		snapshot: v,
		flush: b,
		lifecycle: t,
		commit: y,
		replaceEditorsFromProject: wt,
		catalogBrowsing: mt,
		setCatalogBrowsing: ht,
		catalogError: gt,
		addCatalogItem: yt,
		arrangeAnnouncement: vt,
		autosaveStatus: Pe,
		editedManifest: fe,
		closeWalk: ze,
		publishErrors: Ht,
		publishWarnings: Ut,
		publishIssues: Vt,
		publishMessage: Ue,
		publishing: He,
		publishProject: Wt
	};
}
//#endregion
//#region apps/web/src/editor-workspace/EditorWorkspace.tsx
function Fl(e) {
	let t = Pl(e), { editorProject: n, northOrientation: r, setActionBarItems: i, focusRoom: a, floorNavigation: s, activeFloorId: c, stairPlacement: u, stairDialog: d, setStairDialog: f, floorDialog: p, setFloorDialog: h, floorReferences: g, mode: _, editingLocked: v, publishOpen: y, previewOpen: b, connect: x, constructEditor: S, displayedContextualIssues: C, furnishingModels: w, deviceModels: T, furnishingEditor: E, unsettled: D, selectMode: O, runtime: k, reference: A, workspace: j, undoProject: M, redoProject: N, homeAssistantUrl: F, snapshot: I, commit: R, replaceEditorsFromProject: z, autosaveStatus: B, editedManifest: V } = t, [H, U] = (0, Z.useState)(null), W = (0, Z.useMemo)(() => ({
		furnishingModels: w,
		deviceModels: T
	}), [w, T]);
	(0, Z.useEffect)(() => {
		U(null);
	}, [
		_,
		c,
		d?.id,
		u?.shape
	]);
	let ee = d ? `stairs[${I.project.stairs.findIndex((e) => e.id === d.id)}]` : null, te = ee ? C.filter((e) => e.path !== ee && !e.path.startsWith(`${ee}.`)) : C, ne = pr(n, _, Object.keys(j.snapshot.references ?? {}).length > 0), re = e.navigation?.request.panel === "action-bar" || e.initialRequest?.panel === "action-bar", [ie, G] = (0, Z.useState)(re), ae = Ht(), K = ze("cabane-icon.png");
	(0, Z.useEffect)(() => {
		G(re);
	}, [re]);
	let oe = e.navigation ? re : ie, se = (0, Z.useRef)(null);
	(0, Z.useEffect)(() => {
		se.current && (se.current.scrollTop = 0);
	}, [_, oe]);
	let ce = (t) => {
		A.cancel(), t === "shortcuts" ? (G(!0), e.navigation?.go({
			mode: "construct",
			panel: "action-bar"
		})) : (G(!1), O(t));
	}, le = F ? l(F) : null, ue = le ? I.bindings[le]?.draft.roomAreaIds : void 0, de = Object.fromEntries(n.floors.flatMap((e) => e.rooms.map((e) => {
		let t = k.areas.find((t) => t.area_id === ue?.[e.id]);
		return [e.id, jt(t?.picture, k.origin)];
	}))), fe = Object.fromEntries(n.floors.flatMap((e) => e.rooms.map((e) => {
		let t = k.areas.find((t) => t.area_id === ue?.[e.id]);
		return [e.id, t?.name?.trim() || e.name];
	}))), pe = (0, Z.useMemo)(() => Ge(V, x.profile, k, T), [
		V,
		x.profile,
		k,
		T
	]), me = Object.fromEntries(Object.values(pe.rooms).flatMap((e) => e.devices.flatMap((e) => e.displayName ? [[e.slot.id, e.displayName]] : []))), [he, ge] = (0, Z.useState)(null), [q, _e] = (0, Z.useState)(null), ve = ne.state?.step === "reference" && !A.storage.ready || v || D || !!S.drawStart || y || b, ye = (e) => {
		let t = sn({
			...j.getRecord(),
			draft: I.project,
			bindings: I.bindings
		}, e, yn);
		R(t), z(t.project);
	}, be = () => {
		let e = ne.state;
		if (!e || ve) return;
		if (e.step === "reference") {
			A.openPicker();
			return;
		}
		if (e.step === "arrange" && _ === "furnish") {
			ne.ready();
			return;
		}
		let t = e.step === "arrange" ? "furnish" : e.step === "connect" ? "connect" : "construct";
		e.target && s.selectFloor(e.target.floorId), O(t), _e({
			step: e.step,
			...e.target === void 0 ? {} : { target: e.target }
		});
	};
	(0, Z.useEffect)(() => {
		if (!q || ve) return;
		let { step: e, target: t } = q;
		_ !== (e === "arrange" ? "furnish" : e === "connect" ? "connect" : "construct") || t && (c !== t.floorId || S.previewFloor.id !== t.floorId) || (t && a(t.roomId), e === "walls" && S.setTool("wall"), (e === "door" || e === "window") && S.setTool(e), e === "name" && t && (S.setTool("select"), S.selectRoom(t.roomId), ge({
			roomId: t.roomId,
			serial: Date.now()
		})), _e(null));
	}, [
		q,
		ve,
		_,
		c,
		S.previewFloor.id,
		S,
		a
	]);
	let [xe, Se] = (0, Z.useState)(null);
	(0, Z.useEffect)(() => {
		Se(null);
	}, [
		_,
		c,
		A.adjusting
	]), (0, Z.useEffect)(() => {
		let e = (e) => {
			e.key === "Escape" && Se(null);
		};
		return ae.events.addEventListener("keydown", e), () => ae.events.removeEventListener("keydown", e);
	}, [ae]), (0, Z.useEffect)(() => {
		(S.tool !== "select" || u) && Se(null);
	}, [S.tool, u]);
	let Ce = _ === "construct" && xe === c, J = v || r.active || D && !A.adjusting || !!p, we = lt(I.project.floors, c), Te = () => {
		let e = m(I, `floor-${rn()}`);
		R(e), s.selectFloor(e.project.floors[0].id), S.replaceFloor(e.project.floors[0]), E.replaceItems([]);
	}, Ee = () => {
		let e = L(I, `floor-${rn()}`);
		R(e), s.selectFloor(e.project.floors.at(-1).id), S.replaceFloor(e.project.floors.at(-1)), E.replaceItems([]);
	};
	return /* @__PURE__ */ (0, Q.jsxs)("main", {
		className: `direction-preview${r.active ? " is-orienting-north" : ""}${oe ? " is-shortcuts" : _ === "connect" ? " is-connect" : _ === "construct" ? " is-plan" : ""}`,
		"data-editor-mode": oe ? "shortcuts" : _,
		children: [
			!oe && /* @__PURE__ */ (0, Q.jsx)(Yc, {
				onStairIssuesChange: U,
				onNameFocusHandled: () => ge(null),
				nameFocusRequest: he,
				placingWalkStart: Ce,
				onWalkStartPlaced: () => Se(null),
				...t
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "editor-floor-controls",
				inert: y || b || r.active,
				children: [/* @__PURE__ */ (0, Q.jsx)(ht, {
					floors: I.project.floors,
					selectedId: c,
					disabled: J,
					onSelect: (e) => s.selectFloor(e),
					onAdd: _ === "construct" ? Ee : void 0,
					onAddBelow: _ === "construct" ? Te : void 0,
					onRename: _ === "construct" ? () => h("rename") : void 0,
					onRemove: _ === "construct" && !we ? () => h("remove") : void 0
				}), _ === "construct" && g.references.map(({ direction: e, floor: t, visible: n }) => /* @__PURE__ */ (0, Q.jsxs)("label", {
					title: t.name,
					children: [
						/* @__PURE__ */ (0, Q.jsx)("input", {
							type: "checkbox",
							checked: n,
							onChange: (t) => g.setVisible(e, t.target.checked)
						}),
						"Show floor ",
						e
					]
				}, e))]
			}),
			_ === "construct" && d && /* @__PURE__ */ (0, Q.jsx)(lr, {
				registries: W,
				liveIssues: H,
				project: I.project,
				stair: I.project.stairs.find((e) => e.id === d.id) ?? d,
				onCancel: () => f(null),
				onSave: (e) => {
					R({
						...I,
						project: {
							...I.project,
							stairs: [...I.project.stairs.filter((t) => t.id !== e.id), e]
						}
					});
				}
			}, `${c}:${d.id}`),
			p && /* @__PURE__ */ (0, Q.jsx)(Bn, {
				action: p,
				onRemove: we ? void 0 : () => h("remove"),
				removeDisabledReason: we,
				name: I.project.floors.find((e) => e.id === c).name,
				height: I.project.floors.find((e) => e.id === c).floorToFloorHeightMeters,
				itemCount: I.project.sceneItems.filter((e) => e.floorId === c).length,
				stairCount: I.project.stairs.filter((e) => e.upperFloorId === c || e.lowerFloorId === c).length,
				onCancel: () => h(null),
				onSave: (e, t) => {
					let n = p === "remove" ? o(I, c) : P(st(I, c, e), c, t);
					R(n), z(n.project), h(null);
				}
			}),
			/* @__PURE__ */ (0, Q.jsx)(Zs, {
				referenceAdjusting: A.adjusting,
				...t,
				editingLocked: v || r.active,
				shortcutsMode: oe,
				onModeTabChange: ce
			}),
			oe && /* @__PURE__ */ (0, Q.jsx)(Sn, { children: /* @__PURE__ */ (0, Q.jsx)(Ks, {
				walkTools: wn,
				project: n,
				runtime: k,
				profile: x.profile,
				actionMappingEnabled: !!le && k.origin === le,
				deviceModels: T,
				roomPictures: de,
				roomNames: fe,
				deviceNames: me,
				disabled: v || D || y || b,
				canUndo: j.canUndo && !D,
				canRedo: j.canRedo && !D,
				onUndo: M,
				onRedo: N,
				onChange: i
			}) }),
			/* @__PURE__ */ (0, Q.jsx)(zs, {
				...t,
				sidebar: se,
				iconUrl: K,
				shortcutsMode: oe,
				floorControlsDisabled: J,
				addFloorAbove: Ee,
				addFloorBelow: Te,
				tutorial: ne,
				tutorialBusy: ve,
				activateTutorial: be,
				stairLiveIssues: H,
				importWorkspace: ye,
				placingWalkStart: Ce,
				setWalkStartFloor: Se,
				sidebarIssues: te,
				onHomeAssistantSettings: e.onHomeAssistantSettings
			}),
			/* @__PURE__ */ (0, Q.jsx)(fs, { ...t }),
			B !== "saved" && /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: `direction-status is-${B}`,
				children: [
					/* @__PURE__ */ (0, Q.jsx)("span", {}),
					B === "saving" && "Saving draft…",
					B === "error" && "Could not save · Changes kept in memory"
				]
			}),
			/* @__PURE__ */ (0, Q.jsx)(mr, { ...t })
		]
	});
}
//#endregion
//#region apps/web/src/HomeEditor.tsx
var Il = (e, t) => {
	let n = URL.createObjectURL(new Blob([t], { type: "application/json" })), r = document.createElement("a");
	r.href = n, r.download = `${e}.corrupt-project.json`, r.click(), URL.revokeObjectURL(n);
};
function Ll({ initialRecord: e, lifecycle: t, recoveryMessage: n, recoveryRaw: r, onClose: i, autosaveDelayMs: a, ...o }) {
	let [s, c] = (0, Z.useState)(() => ({
		record: e,
		recoveryMessage: n,
		recoveryRaw: r,
		resetError: null
	}));
	return s.recoveryMessage ? /* @__PURE__ */ (0, Q.jsxs)("main", {
		className: "direction-project-loading is-error",
		children: [
			/* @__PURE__ */ (0, Q.jsx)("strong", { children: "Your saved project needs recovery." }),
			/* @__PURE__ */ (0, Q.jsx)("span", { children: s.resetError ?? s.recoveryMessage }),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "direction-project-loading__actions",
				children: [
					/* @__PURE__ */ (0, Q.jsx)("button", {
						type: "button",
						onClick: () => Il(s.record.homeId, s.recoveryRaw ?? ""),
						children: "Download recovery data"
					}),
					/* @__PURE__ */ (0, Q.jsx)("button", {
						type: "button",
						onClick: () => (o.onRecoveryWorkspaces ?? o.onWorkspaces)?.(),
						children: "Workspaces"
					}),
					/* @__PURE__ */ (0, Q.jsx)("button", {
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
					/* @__PURE__ */ (0, Q.jsx)("button", {
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
	}) : /* @__PURE__ */ (0, Q.jsx)(Fl, {
		initialRecord: s.record,
		lifecycle: t,
		onClose: i,
		autosaveDelayMs: a,
		...o
	});
}
//#endregion
export { Ll as HomeEditor };
