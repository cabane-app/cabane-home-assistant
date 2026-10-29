import { r as e } from "./rolldown-runtime-B0aSnxlc.js";
import { $n as t, Ar as n, Ca as r, Ci as i, Cr as a, Dr as o, Er as s, Gi as c, Hi as l, Ii as u, Jr as d, Ni as f, Oi as p, Sa as m, Ti as h, Tr as g, Ui as _, Wi as v, _a as y, _i as b, ai as x, gi as ee, ji as te, jr as ne, jt as re, ki as S, qr as C, r as w, ri as ie, rr as ae, t as oe, ti as T, vi as E, wi as se } from "./LaserIcon-B2Ih7KnM.js";
//#region packages/engine/src/walk-tools/raycast-walk-scene.ts
function D(e, t) {
	let n = e.intersectObjects(t.children, !0).find((e) => {
		for (let t = e.object; t; t = t.parent) if (!t.visible || t.userData.walkToolVisual === !0) return !1;
		return !0;
	}), r = null;
	for (let e = n?.object ?? null; e; e = e.parent) if (e.userData.walkDeviceInteraction) {
		r = e.userData.walkDeviceInteraction;
		break;
	}
	return {
		hit: n ?? null,
		target: r
	};
}
//#endregion
//#region packages/walk-laser/src/portals/portal-contract.ts
var O = /* @__PURE__ */ e(r(), 1), k = .58, A = 1.1, j = 1.18, M = .72, N = (e) => e === "blue" ? "gold" : "blue", P = {
	blue: "#42cfff",
	gold: "#efa632"
}, F = m();
function I({ veil: e, iris: t }) {
	return /* @__PURE__ */ (0, F.jsx)(ae, {
		fullscreen: !0,
		calculatePosition: (e, t, n) => [n.width / 2, n.height / 2],
		zIndexRange: [20, 0],
		style: { pointerEvents: "none" },
		children: /* @__PURE__ */ (0, F.jsx)("div", {
			ref: e,
			className: "walk-portal-transit",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, F.jsx)("div", {
				ref: t,
				className: "walk-portal-transit__iris"
			})
		})
	});
}
//#endregion
//#region packages/walk-laser/src/portals/usePortalAppearance.ts
function L(e, t, n = !1, r) {
	let i = (0, O.useRef)(null), a = (0, O.useRef)(null), o = (0, O.useRef)(0), c = (0, O.useRef)(!1);
	return (0, O.useLayoutEffect)(() => {
		o.current = 0, c.current = !1, i.current?.scale.setScalar(n || t ? 1 : 0), a.current && (a.current.visible = !1);
	}, [
		e,
		t,
		n
	]), s((e, s) => {
		if (o.current += s, n) {
			let e = t ? .12 : .4, n = Math.min(1, o.current / e), s = t ? 1 : (1 - n ** 3) * (1 + .12 * Math.sin(n * Math.PI));
			i.current?.scale.setScalar(Math.max(0, s)), a.current && (a.current.visible = !t && n < 1, a.current.scale.setScalar(1.3 - n * .5), a.current.material.opacity = .65 * (1 - n)), n === 1 && !c.current && (c.current = !0, r?.());
			return;
		}
		let l = Math.min(1, o.current / .55) - 1, u = 1 + 2.4 * l ** 3 + 1.4 * l ** 2;
		i.current?.scale.setScalar(t ? 1 : Math.max(0, u)), a.current && (a.current.visible = !t && o.current < .8, a.current.scale.setScalar(.7 + Math.min(1, o.current / .8) * .75), a.current.material.opacity = .7 * Math.max(0, 1 - o.current / .8) ** 2);
	}), {
		opening: i,
		ripple: a
	};
}
//#endregion
//#region packages/walk-laser/src/portals/portal-view-camera.ts
function R() {
	let e = new se(), t = new b(), n = new b(), r = new b(), i = new b().makeRotationY(Math.PI), a = new _(1, 1, 1), o = new _(), s = new _(), c = new ie(), l = new b(), d = new u(new _(), A * 1.15), f = new h(), p = new v(), m = new v();
	return {
		camera: e,
		update(u, h, g) {
			if (!u.isPerspectiveCamera || (u.updateWorldMatrix(!0, !1), o.setFromMatrixPosition(u.matrixWorld), s.subVectors(o, h.center).dot(h.normal) <= .01) || (l.multiplyMatrices(u.projectionMatrix, u.matrixWorldInverse), c.setFromProjectionMatrix(l), d.center.copy(h.center), !c.intersectsSphere(d))) return !1;
			t.compose(h.center, h.rotation, a), n.compose(g.center, g.rotation, a), r.copy(n).multiply(i).multiply(t.invert()).multiply(u.matrixWorld), r.decompose(e.position, e.quaternion, a), a.set(1, 1, 1), e.near = u.near, e.far = u.far, e.layers.mask = u.layers.mask, e.updateMatrixWorld(!0), e.projectionMatrix.copy(u.projectionMatrix), f.setFromNormalAndCoplanarPoint(g.normal, g.center).applyMatrix4(e.matrixWorldInverse), p.set(f.normal.x, f.normal.y, f.normal.z, f.constant);
			let _ = e.projectionMatrix.elements;
			m.set((Math.sign(p.x) + _[8]) / _[0], (Math.sign(p.y) + _[9]) / _[5], -1, (1 + _[10]) / _[14]);
			let v = p.dot(m);
			return v <= 1e-6 ? !1 : (p.multiplyScalar(2 / v), _[2] = p.x, _[6] = p.y, _[10] = p.z + 1, _[14] = p.w, e.projectionMatrixInverse.copy(e.projectionMatrix).invert(), !0);
		}
	};
}
//#endregion
//#region packages/walk-laser/src/portals/portal-view-renderer.ts
function ce() {
	let e = new c(1, 1, {
		type: x,
		depthBuffer: !0
	});
	e.texture.name = "portal-destination-view";
	let t = new l(), n = new v(), r = new v(), i = [];
	return {
		target: e,
		render(a, o, s, c) {
			a.getDrawingBufferSize(t);
			let l = Math.min(1, 1024 / Math.max(t.x, t.y)), u = Math.max(1, Math.round(t.x * l)), d = Math.max(1, Math.round(t.y * l));
			(e.width !== u || e.height !== d) && e.setSize(u, d);
			let f = a.getRenderTarget(), p = a.getActiveCubeFace(), m = a.getActiveMipmapLevel();
			a.getViewport(n), a.getScissor(r);
			let h = a.getScissorTest(), g = a.autoClear, _ = a.xr.enabled, v = a.shadowMap.autoUpdate, y = a.shadowMap.needsUpdate;
			try {
				o.traverse((e) => {
					(e.userData.portalLiveView || e.userData.portalAnchor === c) && e.visible && (i.push(e), e.visible = !1);
				}), a.xr.enabled = !1, a.shadowMap.autoUpdate = !1, a.shadowMap.needsUpdate = !1, a.autoClear = !0, a.setRenderTarget(e), a.setScissorTest(!1), a.render(o, s);
			} finally {
				for (let e of i) e.visible = !0;
				i.length = 0, a.xr.enabled = _, a.shadowMap.autoUpdate = v, a.shadowMap.needsUpdate = y, a.autoClear = g, a.setRenderTarget(f, p, m), a.setViewport(n), a.setScissor(r), a.setScissorTest(h);
			}
		},
		dispose() {
			e.dispose();
		}
	};
}
//#endregion
//#region packages/walk-laser/src/portals/usePortalView.ts
function le(e, t) {
	let n = (0, O.useRef)(null), r = (0, O.useMemo)(R, []), i = (0, O.useMemo)(ce, []);
	return (0, O.useEffect)(() => () => i.dispose(), [i]), s(({ camera: a, scene: o, gl: s }) => {
		n.current && (n.current.visible = !1, r.update(a, e, t) && (i.render(s, o, r.camera, t), n.current.visible = !0));
	}, .5), {
		surface: n,
		texture: i.target.texture
	};
}
//#endregion
//#region packages/walk-laser/src/portals/PortalView.tsx
function ue({ entry: e, exit: t }) {
	let { surface: n, texture: r } = le(e, t), i = (0, O.useMemo)(() => ({ destination: { value: r } }), [r]);
	return /* @__PURE__ */ (0, F.jsxs)("mesh", {
		ref: n,
		name: "portal-live-view",
		userData: { portalLiveView: !0 },
		position: [
			0,
			0,
			.002
		],
		raycast: () => void 0,
		children: [/* @__PURE__ */ (0, F.jsx)("circleGeometry", { args: [1, 64] }), /* @__PURE__ */ (0, F.jsx)("shaderMaterial", {
			uniforms: i,
			vertexShader: "varying vec4 portalClip;\n        void main() {\n          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n          portalClip = gl_Position;\n        }",
			fragmentShader: "uniform sampler2D destination;\n        varying vec4 portalClip;\n        void main() {\n          vec2 uv = portalClip.xy / portalClip.w * 0.5 + 0.5;\n          gl_FragColor = vec4(texture2D(destination, uv).rgb, 1.0);\n          #include <tonemapping_fragment>\n          #include <colorspace_fragment>\n        }"
		})]
	});
}
//#endregion
//#region packages/walk-laser/src/portals/PortalSurface.tsx
var z = () => void 0;
function de({ anchor: e, color: n, exit: r, reducedMotion: i, closing: a = !1, onClosed: o }) {
	let c = !!r, l = (0, O.useRef)(null), { opening: u, ripple: d } = L(e, i, a, o), f = P[n];
	return s((e, t) => {
		l.current && !i && (l.current.rotation.z += t * (n === "blue" ? .3 : -.3));
	}), /* @__PURE__ */ (0, F.jsx)("group", {
		name: a ? `gun-portal-closing-${n}` : `gun-portal-${n}`,
		position: e.center.toArray(),
		quaternion: e.rotation.toArray(),
		userData: {
			walkToolVisual: !0,
			portalAnchor: e
		},
		children: /* @__PURE__ */ (0, F.jsx)("group", {
			ref: u,
			name: "portal-opening",
			children: /* @__PURE__ */ (0, F.jsxs)("group", {
				scale: [
					k,
					A,
					1
				],
				children: [
					/* @__PURE__ */ (0, F.jsxs)("mesh", {
						raycast: z,
						children: [/* @__PURE__ */ (0, F.jsx)("circleGeometry", { args: [1, 64] }), /* @__PURE__ */ (0, F.jsx)(t, {
							color: n === "blue" ? "#102d49" : "#443024",
							emissive: f,
							emissiveIntensity: c ? .12 : .025,
							side: 2
						})]
					}),
					r && /* @__PURE__ */ (0, F.jsx)(ue, {
						entry: e,
						exit: r
					}),
					/* @__PURE__ */ (0, F.jsxs)("mesh", {
						raycast: z,
						position: [
							0,
							0,
							.012
						],
						children: [/* @__PURE__ */ (0, F.jsx)("torusGeometry", { args: [
							1,
							.045,
							8,
							64
						] }), /* @__PURE__ */ (0, F.jsx)(t, {
							color: f,
							emissive: f,
							emissiveIntensity: c ? 1.5 : .45,
							toneMapped: !1
						})]
					}),
					/* @__PURE__ */ (0, F.jsxs)("mesh", {
						raycast: z,
						position: [
							0,
							0,
							.014
						],
						children: [/* @__PURE__ */ (0, F.jsx)("torusGeometry", { args: [
							.94,
							.012,
							6,
							64
						] }), /* @__PURE__ */ (0, F.jsx)(t, {
							color: "#fff0d5",
							emissive: f,
							emissiveIntensity: 1,
							toneMapped: !1
						})]
					}),
					/* @__PURE__ */ (0, F.jsxs)("mesh", {
						ref: d,
						name: "portal-arrival-ripple",
						position: [
							0,
							0,
							.028
						],
						raycast: z,
						visible: !1,
						children: [/* @__PURE__ */ (0, F.jsx)("torusGeometry", { args: [
							1,
							.025,
							6,
							64
						] }), /* @__PURE__ */ (0, F.jsx)(t, {
							color: f,
							emissive: f,
							emissiveIntensity: 2,
							transparent: !0,
							opacity: 0,
							depthWrite: !1,
							toneMapped: !1
						})]
					}),
					/* @__PURE__ */ (0, F.jsx)("group", {
						ref: l,
						position: [
							0,
							0,
							.022
						],
						visible: !c,
						children: [
							.36,
							.61,
							.82
						].map((e, n) => /* @__PURE__ */ (0, F.jsxs)("mesh", {
							rotation: [
								0,
								0,
								n * 2.1
							],
							raycast: z,
							children: [/* @__PURE__ */ (0, F.jsx)("torusGeometry", { args: [
								e,
								.012,
								6,
								32,
								Math.PI * 1.15
							] }), /* @__PURE__ */ (0, F.jsx)(t, {
								color: f,
								emissive: f,
								emissiveIntensity: .7,
								transparent: !0,
								opacity: c ? .55 : .16,
								depthWrite: !1,
								toneMapped: !1
							})]
						}, e))
					})
				]
			})
		})
	});
}
//#endregion
//#region packages/walk-laser/src/portals/portal-support-query.ts
function fe(e) {
	let t = [];
	return e.traverse((e) => {
		if (!e.isMesh) return;
		for (let t = e; t; t = t.parent) if (!t.visible || t.userData.walkToolVisual) return;
		let n = e;
		(Array.isArray(n.material) ? n.material : [n.material]).every((e) => !e.visible || e.transparent && e.opacity === 0) || t.push(n);
	}), (e) => {
		let n = [];
		for (let r of t) E.prototype.raycast.call(r, e, n);
		return n.sort((e, t) => e.distance - t.distance), { hit: n[0] ?? null };
	};
}
//#endregion
//#region packages/walk-laser/src/portals/portal-placement.ts
var pe = (e) => e.face?.normal.clone().applyMatrix3(new ee().getNormalMatrix(e.object.matrixWorld)).normalize();
function me(e, t, n, r = D) {
	let i = pe(e);
	if (!i || Math.abs(i.y) > .05 && i.y < .98) return null;
	for (let t = e.object; t; t = t.parent) if (t.userData.walkDeviceInteraction || t.userData.walkCollider) return null;
	let a = i.y > .98;
	i.set(i.x, +!!a, i.z).normalize();
	let o = e.point.clone().addScaledVector(i, a ? 0 : M);
	a || (o.y -= j);
	let s = n.resolveLanding(o);
	if (!s || a && Math.abs(s.elevation - e.point.y) > .12) return null;
	let c = e.point.clone();
	a || (c.y = s.elevation + j);
	let l = new p().setFromUnitVectors(new _(0, 0, 1), i), u = new S();
	for (let e = -1; e < 24; e++) {
		let n = e * Math.PI / 12, a = (e < 0 ? new _() : new _(Math.cos(n) * (k + .04), Math.sin(n) * (A + .04), 0)).applyQuaternion(l).add(c);
		u.set(a.clone().addScaledVector(i, .08), i.clone().negate()), u.far = .16;
		let o = r(u, t).hit;
		if (!o || Math.abs(o.point.clone().sub(a).dot(i)) > .025 || (pe(o)?.dot(i) ?? 0) < .98) return null;
	}
	return {
		center: c.addScaledVector(i, .018),
		normal: i,
		rotation: l,
		landing: s
	};
}
function he(e, t) {
	return e.center.distanceTo(t.center) < k * 2 + .18;
}
//#endregion
//#region packages/walk-laser/src/portals/portal-restoration.ts
function ge(e, t, n) {
	let r = {}, i = new S();
	t.updateMatrixWorld(!0);
	let a = fe(t);
	for (let o of ["blue", "gold"]) {
		let s = e[o];
		if (!s) continue;
		i.set(s.center.clone().addScaledVector(s.normal, .1), s.normal.clone().negate()), i.far = .2;
		let c = a(i).hit, l = c && me(c, t, n, a);
		l && l.center.distanceTo(s.center) < .025 && l.normal.dot(s.normal) > .999 && l.landing.floorId === s.landing.floorId && Math.abs(l.landing.elevation - s.landing.elevation) < .025 && Math.hypot(l.landing.x - s.landing.x, l.landing.z - s.landing.z) < .025 && (r[o] = s);
	}
	return r;
}
//#endregion
//#region packages/walk-laser/src/portals/portal-pair.ts
function _e(e = {}, t = "blue") {
	let n = e, r = t;
	return {
		get current() {
			return n;
		},
		get nextColor() {
			return r;
		},
		place(e) {
			if (!e) return null;
			let t = n[N(r)];
			return t && he(e, t) ? null : (n = {
				...n,
				[r]: e
			}, r = N(r), n);
		}
	};
}
//#endregion
//#region packages/walk-laser/src/portals/portal-traversal.ts
function B(e, t) {
	let n = t.clone();
	return n.y -= re - (e.normal.y > .98 ? 0 : j), n.sub(e.center).applyQuaternion(e.rotation.clone().invert());
}
function ve(e) {
	return (e.x / (k - .22)) ** 2 + (e.y / (A - .22)) ** 2 < 1;
}
function ye() {
	let e = null, t = null;
	return {
		reset() {
			e = null, t = null;
		},
		step(n, r, i, a) {
			let o = e;
			if (e = r.clone(), !n.blue || !n.gold || !o || o.distanceTo(r) > 1) return !1;
			t && n[t] && B(n[t], r).length() > 1.4 && (t = null);
			for (let s of ["blue", "gold"]) {
				if (s === t) continue;
				let c = n[s], l = n[N(s)], u = B(c, r), d = B(c, o), f = u.z < d.z - 1e-4;
				if (!(c.normal.y > .98 ? !ve(d) || d.z > .25 && f : f && d.z > .32) || u.z < -.08 || u.z > .32 || !ve(u)) continue;
				let p = Math.atan2(-l.normal.x, -l.normal.z), m = Math.atan2(-c.normal.x, -c.normal.z), h = l.normal.y > .98 ? i.yaw : c.normal.y > .98 ? p : i.yaw + p - m + Math.PI;
				return a({
					landing: l.landing,
					facing: {
						yaw: Math.atan2(Math.sin(h), Math.cos(h)),
						pitch: i.pitch
					},
					entry: s,
					exit: N(s)
				}) ? (t = N(s), e = null, !0) : !1;
			}
			return !1;
		}
	};
}
//#endregion
//#region packages/walk-laser/src/portals/portal-transition.ts
function be() {
	let e = null, t = "cover", n = 0, r = !1, i = !1, a = {
		opacity: 0,
		fovOffset: 0,
		ringScale: 1,
		color: "blue",
		reduced: !1
	};
	return {
		get busy() {
			return e !== null;
		},
		start(a, o) {
			return !e && (e = a, t = o ? "commit" : "cover", n = 0, r = o, i = !1, !0);
		},
		cancel() {
			e = null;
		},
		advance(o, s) {
			if (!e) return a;
			n += Math.min(.05, Math.max(0, o)), t === "commit" && (i = s(e), t = "reveal", n = 0);
			let c = Math.min(1, n / (t === "cover" ? .095 : r ? .12 : .32)), l = t === "cover" ? c * c * (3 - 2 * c) : (1 - c) ** 3, u = {
				opacity: l * (r ? .18 : 1),
				fovOffset: r ? 0 : 3 * l,
				ringScale: t === "cover" ? 1.2 - .4 * c : .8 + .8 * c,
				color: i ? e.exit : e.entry,
				reduced: r
			};
			return c === 1 && (t === "cover" ? (t = "commit", n = 0) : e = null), u;
		}
	};
}
//#endregion
//#region packages/walk-laser/src/portals/usePortalTransition.ts
function xe(e, t, n, r) {
	let { camera: i } = o(), a = (0, O.useMemo)(be, []), c = (0, O.useRef)(null), l = (0, O.useRef)(null), u = (0, O.useRef)(null), d = (0, O.useCallback)(() => {
		if (u.current === null) return;
		let e = i;
		e.fov = u.current, e.updateProjectionMatrix(), u.current = null;
	}, [i]);
	(0, O.useEffect)(() => () => {
		a.cancel(), d();
	}, [a, d]);
	let f = (0, O.useCallback)((e) => a.start(e, t), [a, t]);
	return s((t, o) => {
		e || a.cancel();
		let s = a.advance(o, (e) => {
			let t = n.teleport(e.landing, e.facing);
			return t || r(), t;
		});
		if (c.current && (c.current.style.opacity = String(s.opacity), c.current.style.visibility = s.opacity > 0 ? "visible" : "hidden", c.current.style.setProperty("--portal-color", P[s.color])), l.current && (l.current.style.display = s.reduced ? "none" : "block", l.current.style.transform = `translate(-50%, -50%) scale(${s.ringScale})`), s.fovOffset > 0 && i.isPerspectiveCamera) {
			let e = i;
			u.current ??= e.fov, e.fov = u.current + s.fovOffset, e.updateProjectionMatrix();
		} else d();
	}), {
		transition: a,
		travel: f,
		veil: c,
		iris: l
	};
}
//#endregion
//#region packages/walk-laser/src/portals/usePortalInput.ts
function Se(e, t) {
	let r = n();
	(0, O.useEffect)(() => {
		let n = (n) => {
			!e || !r.root.pointerLockElement || n.button !== 2 || (n.preventDefault(), t());
		}, i = (t) => {
			e && r.root.pointerLockElement && t.preventDefault();
		};
		return r.events.addEventListener("pointerdown", n), r.events.addEventListener("contextmenu", i), () => {
			r.events.removeEventListener("pointerdown", n), r.events.removeEventListener("contextmenu", i);
		};
	}, [
		e,
		r.events,
		r.root,
		t
	]);
}
//#endregion
//#region packages/walk-laser/src/portals/portal-state-codec.ts
var Ce = "cabane.laser", V = (e) => !!e && typeof e == "object" && !Array.isArray(e), H = (e, t) => Array.isArray(e) && e.length === t && e.every((e) => typeof e == "number" && Number.isFinite(e) && Math.abs(e) < 1e6);
function we(e) {
	if (!V(e) || !H(e.center, 3) || !H(e.normal, 3) || !H(e.rotation, 4) || !V(e.landing)) return;
	let { x: t, z: n, elevation: r, floorId: i } = e.landing;
	if (![
		t,
		n,
		r
	].every((e) => typeof e == "number" && Number.isFinite(e) && Math.abs(e) < 1e6) || typeof i != "string" || !i) return;
	let a = new _().fromArray(e.normal), o = new p().fromArray(e.rotation);
	if (!(Math.abs(a.length() - 1) > .001 || Math.abs(o.length() - 1) > .001 || Math.abs(a.y) > .001 && a.y < .999 || new _(0, 0, 1).applyQuaternion(o).dot(a) < .999)) return {
		center: new _().fromArray(e.center),
		normal: a,
		rotation: o,
		landing: {
			x: t,
			z: n,
			elevation: r,
			floorId: i
		}
	};
}
function Te(e) {
	if (!V(e) || e.version !== 1 || !V(e.pair)) return {
		pair: {},
		next: "blue"
	};
	let t = {};
	for (let n of ["blue", "gold"]) {
		let r = we(e.pair[n]);
		r && (t[n] = r);
	}
	return t.blue && t.gold && he(t.blue, t.gold) && delete t.gold, {
		pair: t,
		next: e.next === "gold" ? "gold" : "blue"
	};
}
function Ee({ pair: e, next: t }) {
	return {
		version: 1,
		next: t,
		pair: Object.fromEntries(Object.entries(e).map(([e, t]) => [e, {
			center: t.center.toArray(),
			normal: t.normal.toArray(),
			rotation: t.rotation.toArray(),
			landing: { ...t.landing }
		}]))
	};
}
//#endregion
//#region packages/walk-laser/src/portals/usePortalState.ts
function De() {
	let e = y(), [t, n] = (0, O.useState)(() => Te(e?.read(Ce))), r = (0, O.useRef)(t), i = (0, O.useRef)(!1);
	return {
		state: t,
		current: r,
		pending: i,
		commit: (0, O.useCallback)(async (t) => {
			if (i.current) return !1;
			let a = r.current;
			i.current = !0, r.current = t, n(t);
			try {
				return await e?.write(Ce, Ee(t)), !0;
			} catch {
				return r.current = a, n(a), !1;
			} finally {
				i.current = !1;
			}
		}, [e])
	};
}
//#endregion
//#region packages/walk-laser/src/portals/portal-target.ts
function Oe(e, t, n = 30) {
	let r = Math.min(30, n + .025), i = null;
	for (let n of ["blue", "gold"]) {
		let a = t[n];
		if (!a || e.direction.dot(a.normal) >= -.001) continue;
		let o = e.intersectPlane(new h().setFromNormalAndCoplanarPoint(a.normal, a.center), new _());
		if (!o) continue;
		let s = o.distanceTo(e.origin), c = o.clone().sub(a.center).applyQuaternion(a.rotation.clone().invert());
		s > r || (c.x / .58) ** 2 + (c.y / 1.1) ** 2 > 1 || (r = s, i = {
			color: n,
			point: o,
			normal: a.normal
		});
	}
	return i;
}
//#endregion
//#region packages/walk-laser/src/portals/useGunPortals.ts
function ke(e, t, n, r) {
	let { camera: i, scene: a } = o(), { state: c, current: u, pending: d, commit: f } = De(), [p, m] = (0, O.useState)({}), h = (0, O.useRef)(!1), g = (0, O.useMemo)(() => new S(), []), _ = (0, O.useMemo)(ye, []), v = xe(e, r, t, _.reset), y = (0, O.useCallback)((t, n) => {
		let r = Oe(t, {
			...p,
			...u.current.pair
		}, n);
		if (!r) return null;
		if (!e || p[r.color] || d.current || v.transition.busy) return r;
		let { pair: i, next: a } = u.current, o = { ...i };
		return delete o[r.color], _.reset(), m((e) => ({
			...e,
			[r.color]: i[r.color]
		})), f({
			pair: o,
			next: a
		}).then((e) => {
			e || m((e) => {
				let t = { ...e };
				return delete t[r.color], t;
			});
		}), r;
	}, [
		e,
		u,
		d,
		f,
		_,
		v.transition,
		p
	]), b = (0, O.useCallback)((e) => {
		m((t) => {
			let n = { ...t };
			return delete n[e], n;
		});
	}, []), x = (0, O.useCallback)(() => {
		if (!e || d.current || v.transition.busy) return;
		a.updateMatrixWorld(!0), g.setFromCamera(new l(), i), g.far = 30;
		let r = D(g, a).hit, o = y(g.ray, r?.distance ?? 30);
		if (o) {
			n(o.point, o.normal, P[o.color], u.current.next);
			return;
		}
		if (Object.keys(p).length) return;
		let s = r && me(r, a, t);
		if (!s) return;
		let c = _e(u.current.pair, u.current.next), m = c.nextColor, h = c.place(s);
		h && (_.reset(), f({
			pair: h,
			next: c.nextColor
		}), n(s.center, s.normal, P[m], c.nextColor));
	}, [
		e,
		i,
		a,
		g,
		t,
		_,
		n,
		v.transition,
		u,
		d,
		f,
		y,
		p
	]);
	return Se(e, x), s(() => {
		if (!e) {
			_.reset();
			return;
		}
		if (!h.current) {
			h.current = !0;
			let e = ge(u.current.pair, a, t);
			if (Object.keys(e).length !== Object.keys(u.current.pair).length) {
				f({
					...u.current,
					pair: e
				});
				return;
			}
		}
		v.transition.busy || d.current || _.step(u.current.pair, i.position, {
			yaw: i.rotation.y,
			pitch: i.rotation.x
		}, v.travel);
	}), {
		pair: c.pair,
		next: c.next,
		closing: p,
		closed: b,
		remove: y,
		place: x,
		veil: v.veil,
		iris: v.iris
	};
}
//#endregion
//#region packages/walk-laser/src/portals/GunPortals.tsx
function Ae({ active: e, navigation: t, reducedMotion: n, onPlaced: r, controls: i, onNextColor: a }) {
	let { pair: o, next: s, closing: c, closed: l, remove: u, place: d, veil: f, iris: p } = ke(e, t, r, n);
	return (0, O.useImperativeHandle)(i, () => ({
		place: d,
		remove: u
	}), [d, u]), (0, O.useEffect)(() => {
		a?.(s);
	}, [s, a]), /* @__PURE__ */ (0, F.jsxs)(F.Fragment, { children: [
		/* @__PURE__ */ (0, F.jsx)(I, {
			veil: f,
			iris: p
		}),
		["blue", "gold"].map((e) => o[e] && /* @__PURE__ */ (0, F.jsx)(de, {
			color: e,
			anchor: o[e],
			exit: o[N(e)],
			reducedMotion: n
		}, e)),
		["blue", "gold"].map((e) => c[e] && /* @__PURE__ */ (0, F.jsx)(de, {
			color: e,
			anchor: c[e],
			reducedMotion: n,
			closing: !0,
			onClosed: () => l(e)
		}, `closing-${e}`))
	] });
}
//#endregion
//#region packages/walk-laser/src/LaserTutorial.tsx
var je = "cabane.walk-laser.tutorial.v1", Me = !1;
function Ne() {
	if (Me) return !0;
	try {
		return window.localStorage.getItem(je) === "dismissed";
	} catch {
		return !1;
	}
}
function Pe({ coarsePointer: e }) {
	let t = n(), [r, i] = (0, O.useState)(Ne), a = (0, O.useCallback)(() => {
		Me = !0, i(!0);
		try {
			window.localStorage.setItem(je, "dismissed");
		} catch {}
	}, []);
	return (0, O.useEffect)(() => {
		if (r) return;
		let e = (e) => {
			e.code !== "Enter" || e.repeat || e.ctrlKey || e.metaKey || e.altKey || !t.root.pointerLockElement || (e.preventDefault(), a());
		};
		return t.events.addEventListener("keydown", e), () => t.events.removeEventListener("keydown", e);
	}, [
		a,
		r,
		t.events,
		t.root
	]), r ? null : /* @__PURE__ */ (0, F.jsxs)("section", {
		className: "walk-laser-tutorial",
		"aria-label": "How to use the gun",
		onPointerDown: (e) => e.stopPropagation(),
		onClick: (e) => e.stopPropagation(),
		children: [
			/* @__PURE__ */ (0, F.jsxs)("div", {
				className: "walk-laser-tutorial__heading",
				children: [/* @__PURE__ */ (0, F.jsx)(oe, {}), /* @__PURE__ */ (0, F.jsxs)("div", { children: [/* @__PURE__ */ (0, F.jsx)("h2", { children: "Pew pew!" }), /* @__PURE__ */ (0, F.jsx)("p", { children: "Your home, a little more playful." })] })]
			}),
			/* @__PURE__ */ (0, F.jsxs)("p", { children: [
				/* @__PURE__ */ (0, F.jsx)("strong", { children: "Toggle devices." }),
				" Aim at a connected light, fan, AC, sprinkler, or TV, then",
				" ",
				e ? "tap the lightning button" : "left-click or press F",
				" to turn it on or off."
			] }),
			/* @__PURE__ */ (0, F.jsxs)("p", { children: [
				/* @__PURE__ */ (0, F.jsx)("strong", { children: "Make a shortcut." }),
				" Aim at a clear wall and",
				" ",
				e ? "tap the portal button" : "right-click",
				" to place a portal. Place a second portal elsewhere, then walk into either one to travel between them."
			] }),
			/* @__PURE__ */ (0, F.jsx)("p", { children: "Put the pair in spots you visit often. Zap a portal to remove it." }),
			/* @__PURE__ */ (0, F.jsx)("button", {
				type: "button",
				onClick: a,
				children: e ? "Got it" : "Got it · Enter"
			})
		]
	});
}
//#endregion
//#region packages/walk-laser/src/LaserTouchActions.tsx
function Fe({ ready: e, nextPortal: t, zap: n, portal: r }) {
	return /* @__PURE__ */ (0, F.jsx)("div", {
		className: "walk-laser-touch",
		role: "group",
		"aria-label": "Gun actions",
		children: ["zap", "portal"].map((i) => /* @__PURE__ */ (0, F.jsx)("button", {
			type: "button",
			className: "walk-laser-touch__action",
			"data-action": i,
			disabled: !e,
			"aria-label": i === "zap" ? "Fire zap" : `Create ${t} portal`,
			style: { color: i === "zap" ? "#51e8f3" : P[t] },
			onPointerDown: (e) => {
				e.button === 0 && (e.preventDefault(), e.stopPropagation(), (i === "zap" ? n : r)());
			},
			onClick: (e) => {
				e.stopPropagation(), e.detail === 0 && (i === "zap" ? n : r)();
			},
			onContextMenu: (e) => e.preventDefault(),
			children: /* @__PURE__ */ (0, F.jsx)("svg", {
				viewBox: "0 0 24 24",
				"aria-hidden": "true",
				children: i === "zap" ? /* @__PURE__ */ (0, F.jsx)("path", { d: "M14 2 5 13h6l-1 9 9-12h-6z" }) : /* @__PURE__ */ (0, F.jsxs)(F.Fragment, { children: [/* @__PURE__ */ (0, F.jsx)("ellipse", {
					cx: "12",
					cy: "12",
					rx: "6.5",
					ry: "10",
					transform: "rotate(18 12 12)"
				}), /* @__PURE__ */ (0, F.jsx)("path", { d: "M13 5c-4 2-6 10-3 14M11 2l2 3 3-1M8 20l3-1 2 3" })] })
			})
		}, i))
	});
}
//#endregion
//#region packages/walk-laser/src/LaserCrosshair.tsx
function Ie({ target: e, desktop: t, ready: n, nextPortal: r }) {
	return /* @__PURE__ */ (0, F.jsxs)("div", {
		className: "walk-laser-crosshair",
		"data-ready": n,
		role: "img",
		"aria-label": t ? `Left click: zap. Right click: ${r} portal.` : "Zap crosshair",
		children: [
			t && /* @__PURE__ */ (0, F.jsxs)("div", {
				className: "walk-laser-crosshair__action",
				"data-action": "zap",
				style: { color: "#51e8f3" },
				"aria-hidden": "true",
				children: [/* @__PURE__ */ (0, F.jsx)("svg", {
					className: "walk-laser-crosshair__ability",
					viewBox: "0 0 24 24",
					children: /* @__PURE__ */ (0, F.jsx)("path", { d: "M14 2 5 13h6l-1 9 9-12h-6z" })
				}), /* @__PURE__ */ (0, F.jsx)(Le, { side: "left" })]
			}),
			/* @__PURE__ */ (0, F.jsxs)("svg", {
				className: "walk-laser__sight",
				"data-target": e,
				"aria-hidden": "true",
				viewBox: "0 0 32 32",
				children: [
					/* @__PURE__ */ (0, F.jsx)("path", {
						className: "walk-laser__ticks",
						d: "M16 3v6 M16 23v6 M3 16h6 M23 16h6"
					}),
					/* @__PURE__ */ (0, F.jsx)("path", {
						className: "walk-laser__lock",
						d: "M7 11V7h4 M21 7h4v4 M25 21v4h-4 M11 25H7v-4"
					}),
					/* @__PURE__ */ (0, F.jsx)("circle", {
						cx: "16",
						cy: "16",
						r: "1.3",
						fill: "currentColor",
						stroke: "none"
					})
				]
			}),
			t && /* @__PURE__ */ (0, F.jsxs)("div", {
				className: "walk-laser-crosshair__action",
				"data-action": "portal",
				"data-next-portal": r,
				style: { color: P[r] },
				"aria-hidden": "true",
				children: [/* @__PURE__ */ (0, F.jsxs)("svg", {
					className: "walk-laser-crosshair__ability",
					viewBox: "0 0 24 24",
					children: [/* @__PURE__ */ (0, F.jsx)("ellipse", {
						cx: "12",
						cy: "12",
						rx: "6.5",
						ry: "10",
						transform: "rotate(18 12 12)"
					}), /* @__PURE__ */ (0, F.jsx)("path", { d: "M13 5c-4 2-6 10-3 14M11 2l2 3 3-1M8 20l3-1 2 3" })]
				}), /* @__PURE__ */ (0, F.jsx)(Le, { side: "right" })]
			})
		]
	});
}
function Le({ side: e }) {
	return /* @__PURE__ */ (0, F.jsxs)("svg", {
		className: "walk-laser-crosshair__mouse",
		viewBox: "0 0 16 22",
		children: [
			/* @__PURE__ */ (0, F.jsx)("path", {
				d: e === "left" ? "M8 2H6a4 4 0 0 0-4 4v4h6z" : "M8 2h2a4 4 0 0 1 4 4v4H8z",
				fill: "currentColor",
				stroke: "none"
			}),
			/* @__PURE__ */ (0, F.jsx)("rect", {
				x: "2",
				y: "2",
				width: "12",
				height: "18",
				rx: "5"
			}),
			/* @__PURE__ */ (0, F.jsx)("path", { d: "M8 2v8M2 10h12" })
		]
	});
}
//#endregion
//#region packages/walk-laser/src/laser-gun/BlasterFinish.tsx
function U({ kind: e }) {
	let n = {
		armor: "#fff0d5",
		chassis: "#44384d",
		trim: "#efa632",
		grip: "#514052",
		energy: "#51e8f3",
		hot: "#f26a35",
		recess: "#231c2b",
		glint: "#f2ffff"
	}[e], r = e === "energy" || e === "hot" || e === "glint";
	return /* @__PURE__ */ (0, F.jsx)(t, {
		color: n,
		emissive: r ? n : "#000000",
		emissiveIntensity: r ? .65 : 0,
		toneMapped: !r
	});
}
//#endregion
//#region packages/walk-laser/src/laser-gun/BlasterReactor.tsx
function Re({ side: e }) {
	return /* @__PURE__ */ (0, F.jsxs)("group", {
		name: "blaster-side-reactor",
		position: [
			e * .103,
			.035,
			.125
		],
		rotation: [
			0,
			e * Math.PI / 2,
			0
		],
		children: [
			/* @__PURE__ */ (0, F.jsxs)("mesh", {
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, F.jsx)("cylinderGeometry", { args: [
					.062,
					.062,
					.022,
					40
				] }), /* @__PURE__ */ (0, F.jsx)(U, { kind: "chassis" })]
			}),
			/* @__PURE__ */ (0, F.jsxs)("mesh", {
				position: [
					0,
					0,
					.009
				],
				children: [/* @__PURE__ */ (0, F.jsx)("torusGeometry", { args: [
					.047,
					.012,
					12,
					40
				] }), /* @__PURE__ */ (0, F.jsx)(U, { kind: "trim" })]
			}),
			/* @__PURE__ */ (0, F.jsxs)("mesh", {
				position: [
					0,
					0,
					.01
				],
				scale: [
					1,
					1,
					.48
				],
				children: [/* @__PURE__ */ (0, F.jsx)("sphereGeometry", { args: [
					.037,
					32,
					16
				] }), /* @__PURE__ */ (0, F.jsx)(U, { kind: "energy" })]
			}),
			/* @__PURE__ */ (0, F.jsxs)("mesh", {
				position: [
					-.011,
					.014,
					.027
				],
				scale: [
					1,
					.65,
					.35
				],
				children: [/* @__PURE__ */ (0, F.jsx)("sphereGeometry", { args: [
					.009,
					16,
					8
				] }), /* @__PURE__ */ (0, F.jsx)(U, { kind: "glint" })]
			}),
			/* @__PURE__ */ (0, F.jsxs)("mesh", {
				position: [
					0,
					0,
					.017
				],
				children: [/* @__PURE__ */ (0, F.jsx)("torusGeometry", { args: [
					.036,
					.0035,
					8,
					32
				] }), /* @__PURE__ */ (0, F.jsx)(U, { kind: "energy" })]
			})
		]
	});
}
//#endregion
//#region packages/walk-laser/src/laser-gun/blaster-contours.ts
var W = new f();
W.moveTo(-.205, .045), W.bezierCurveTo(-.225, .13, -.165, .16, -.105, .145), W.lineTo(.29, .12), W.quadraticCurveTo(.335, .1, .3, .015), W.quadraticCurveTo(.285, -.04, .21, -.053), W.lineTo(.045, -.065), W.quadraticCurveTo(-.02, -.085, -.105, -.065), W.quadraticCurveTo(-.215, -.065, -.205, .045), W.closePath();
var G = new f();
G.moveTo(-.205, .075), G.bezierCurveTo(-.213, .135, -.174, .163, -.105, .157), G.quadraticCurveTo(-.075, .155, -.039, .121), G.lineTo(.228, .116), G.quadraticCurveTo(.258, .12, .27, .147), G.lineTo(.318, .145), G.quadraticCurveTo(.335, .138, .32, .097), G.lineTo(.288, .018), G.quadraticCurveTo(.275, -.015, .235, -.014), G.lineTo(.139, -.022), G.quadraticCurveTo(.111, -.023, .09, .003), G.lineTo(.047, .047), G.lineTo(-.025, .044), G.bezierCurveTo(-.054, .094, -.098, .118, -.143, .093), G.quadraticCurveTo(-.184, .068, -.205, .075), G.closePath();
var K = new f();
K.moveTo(-.155, -.037), K.quadraticCurveTo(-.1, -.029, -.055, -.073), K.quadraticCurveTo(-.068, -.124, -.094, -.185), K.lineTo(-.127, -.293), K.quadraticCurveTo(-.124, -.322, -.158, -.325), K.lineTo(-.269, -.292), K.quadraticCurveTo(-.28, -.284, -.264, -.257), K.lineTo(-.188, -.087), K.quadraticCurveTo(-.19, -.048, -.155, -.037), K.closePath();
var q = new f();
q.moveTo(-.157, -.07), q.quadraticCurveTo(-.104, -.075, -.087, -.1), q.quadraticCurveTo(-.096, -.172, -.152, -.282), q.quadraticCurveTo(-.184, -.292, -.245, -.265), q.lineTo(-.179, -.112), q.quadraticCurveTo(-.17, -.073, -.157, -.07), q.closePath();
var J = new f();
J.moveTo(-.27, -.261), J.quadraticCurveTo(-.218, -.29, -.139, -.284), J.quadraticCurveTo(-.12, -.287, -.116, -.318), J.quadraticCurveTo(-.106, -.357, -.15, -.361), J.quadraticCurveTo(-.235, -.351, -.299, -.318), J.quadraticCurveTo(-.31, -.3, -.287, -.277), J.closePath();
var Y = new f();
Y.moveTo(-.085, -.055), Y.lineTo(.11, -.053), Y.bezierCurveTo(.166, -.09, .145, -.182, .076, -.186), Y.lineTo(-.082, -.17), Y.quadraticCurveTo(-.12, -.125, -.085, -.055), Y.closePath();
var X = new i();
X.moveTo(-.065, -.08), X.quadraticCurveTo(-.085, -.115, -.065, -.146), X.lineTo(.064, -.158), X.bezierCurveTo(.112, -.159, .14, -.116, .1, -.08), X.closePath(), Y.holes.push(X);
var Z = new f();
Z.moveTo(-.017, -.058), Z.lineTo(.014, -.06), Z.quadraticCurveTo(-.004, -.115, .025, -.145), Z.quadraticCurveTo(-.013, -.152, -.032, -.111), Z.quadraticCurveTo(-.042, -.077, -.017, -.058), Z.closePath();
var ze = {
	receiver: W,
	armor: G,
	grip: K,
	gripInset: q,
	heel: J,
	guard: Y,
	trigger: Z
};
//#endregion
//#region packages/walk-laser/src/laser-gun/SculptedBlasterPart.tsx
function Q({ contour: e, depth: t, bevel: n, finish: r, x: i = 0 }) {
	let o = (0, O.useMemo)(() => {
		let r = new T(ze[e], {
			depth: t,
			steps: 1,
			curveSegments: 16,
			bevelEnabled: !0,
			bevelThickness: n,
			bevelSize: n,
			bevelSegments: 6
		});
		r.translate(0, 0, -t / 2), r.deleteAttribute("normal"), r.deleteAttribute("uv");
		let i = a(r, 1e-5);
		return i.computeVertexNormals(), r.dispose(), i;
	}, [
		e,
		t,
		n
	]);
	return (0, O.useEffect)(() => () => o.dispose(), [o]), /* @__PURE__ */ (0, F.jsx)("mesh", {
		name: `blaster-${e}`,
		geometry: o,
		position: [
			i,
			0,
			0
		],
		rotation: [
			0,
			Math.PI / 2,
			0
		],
		children: /* @__PURE__ */ (0, F.jsx)(U, { kind: r })
	});
}
//#endregion
//#region packages/walk-laser/src/laser-gun/BlasterReceiver.tsx
function Be() {
	return /* @__PURE__ */ (0, F.jsxs)("group", {
		name: "blaster-receiver",
		children: [
			/* @__PURE__ */ (0, F.jsx)(Q, {
				contour: "receiver",
				depth: .12,
				bevel: .024,
				finish: "chassis"
			}),
			[-1, 1].map((e) => /* @__PURE__ */ (0, F.jsxs)("group", { children: [
				/* @__PURE__ */ (0, F.jsx)(Q, {
					contour: "armor",
					depth: .012,
					bevel: .014,
					finish: "trim",
					x: e * .074
				}),
				/* @__PURE__ */ (0, F.jsx)(Q, {
					contour: "armor",
					depth: .012,
					bevel: .009,
					finish: "armor",
					x: e * .09
				}),
				/* @__PURE__ */ (0, F.jsx)(Re, { side: e }),
				[
					.1,
					.15,
					.2
				].map((t) => /* @__PURE__ */ (0, F.jsxs)("group", {
					position: [
						e * .111,
						.048,
						-t
					],
					rotation: [
						.38,
						0,
						0
					],
					children: [/* @__PURE__ */ (0, F.jsx)(w, {
						args: [
							.01,
							.06,
							.023
						],
						radius: .004,
						children: /* @__PURE__ */ (0, F.jsx)(U, { kind: "trim" })
					}), /* @__PURE__ */ (0, F.jsx)(w, {
						args: [
							.013,
							.045,
							.014
						],
						radius: .004,
						position: [
							e * .003,
							0,
							0
						],
						children: /* @__PURE__ */ (0, F.jsx)(U, { kind: "recess" })
					})]
				}, t))
			] }, e)),
			/* @__PURE__ */ (0, F.jsx)(w, {
				args: [
					.155,
					.14,
					.055
				],
				radius: .023,
				position: [
					0,
					.041,
					.211
				],
				children: /* @__PURE__ */ (0, F.jsx)(U, { kind: "trim" })
			}),
			/* @__PURE__ */ (0, F.jsx)(w, {
				args: [
					.102,
					.091,
					.03
				],
				radius: .013,
				position: [
					0,
					.044,
					.241
				],
				children: /* @__PURE__ */ (0, F.jsx)(U, { kind: "chassis" })
			}),
			/* @__PURE__ */ (0, F.jsx)(w, {
				args: [
					.039,
					.038,
					.012
				],
				radius: .005,
				position: [
					0,
					.05,
					.259
				],
				children: /* @__PURE__ */ (0, F.jsx)(U, { kind: "energy" })
			}),
			/* @__PURE__ */ (0, F.jsx)(w, {
				args: [
					.17,
					.052,
					.13
				],
				radius: .024,
				position: [
					0,
					.153,
					.108
				],
				rotation: [
					-.12,
					0,
					0
				],
				children: /* @__PURE__ */ (0, F.jsx)(U, { kind: "armor" })
			})
		]
	});
}
//#endregion
//#region packages/walk-laser/src/laser-gun/MuzzleFlash.tsx
function Ve({ shotId: e }) {
	let n = (0, O.useRef)(null), r = (0, O.useRef)(Infinity);
	return (0, O.useEffect)(() => {
		e > 0 && (r.current = 0);
	}, [e]), s((e, t) => {
		if (r.current += t, !n.current) return;
		let i = Math.max(0, 1 - r.current / .045);
		n.current.visible = i > 0, n.current.scale.setScalar(.7 + (1 - i) * .7);
		for (let e of n.current.children) e.isMesh && (e.material.opacity = i * (e.userData.glowOpacity ?? 1));
	}), /* @__PURE__ */ (0, F.jsxs)("group", {
		ref: n,
		visible: !1,
		name: "laser-muzzle-flash",
		children: [
			/* @__PURE__ */ (0, F.jsxs)("mesh", {
				position: [
					0,
					0,
					-.035
				],
				scale: [
					.03,
					.03,
					.09
				],
				children: [/* @__PURE__ */ (0, F.jsx)("octahedronGeometry", { args: [1, 0] }), /* @__PURE__ */ (0, F.jsx)(t, {
					color: "#eeffff",
					emissive: "#acffff",
					emissiveIntensity: 4,
					toneMapped: !1,
					transparent: !0,
					blending: 2,
					depthWrite: !1
				})]
			}),
			/* @__PURE__ */ (0, F.jsxs)("mesh", {
				userData: { glowOpacity: .2 },
				scale: [
					.075,
					.075,
					.075
				],
				children: [/* @__PURE__ */ (0, F.jsx)("sphereGeometry", { args: [
					1,
					8,
					6
				] }), /* @__PURE__ */ (0, F.jsx)(t, {
					color: "#45e4ff",
					emissive: "#45e4ff",
					emissiveIntensity: 2,
					toneMapped: !1,
					transparent: !0,
					opacity: .2,
					blending: 2,
					depthWrite: !1
				})]
			}),
			Array.from({ length: 5 }, (e, n) => {
				let r = n * Math.PI * 2 / 5;
				return /* @__PURE__ */ (0, F.jsxs)("mesh", {
					position: [
						Math.cos(r) * .026,
						Math.sin(r) * .026,
						-.009
					],
					rotation: [
						0,
						0,
						r - Math.PI / 2
					],
					children: [/* @__PURE__ */ (0, F.jsx)("coneGeometry", { args: [
						.008,
						.09,
						4
					] }), /* @__PURE__ */ (0, F.jsx)(t, {
						color: "#fff2cd",
						emissive: "#ffe1a0",
						emissiveIntensity: 2,
						toneMapped: !1,
						transparent: !0,
						blending: 2,
						depthWrite: !1
					})]
				}, n);
			})
		]
	});
}
//#endregion
//#region packages/walk-laser/src/laser-gun/BlasterMuzzle.tsx
function He() {
	let e = (0, O.useMemo)(() => [
		[.055, -.042],
		[.057, -.05],
		[.068, -.053],
		[.084, -.05],
		[.096, -.04],
		[.101, -.025],
		[.101, .023],
		[.096, .039],
		[.085, .047],
		[.065, .047],
		[.056, .038],
		[.055, -.042]
	].map(([e, t]) => new l(e, t)), []);
	return /* @__PURE__ */ (0, F.jsxs)("group", {
		name: "blaster-muzzle",
		position: [
			0,
			.075,
			-.409
		],
		children: [
			/* @__PURE__ */ (0, F.jsxs)("mesh", {
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, F.jsx)("latheGeometry", { args: [e, 48] }), /* @__PURE__ */ (0, F.jsx)(U, { kind: "trim" })]
			}),
			/* @__PURE__ */ (0, F.jsxs)("mesh", {
				position: [
					0,
					0,
					-.052
				],
				children: [/* @__PURE__ */ (0, F.jsx)("torusGeometry", { args: [
					.058,
					.008,
					12,
					40
				] }), /* @__PURE__ */ (0, F.jsx)(U, { kind: "energy" })]
			}),
			/* @__PURE__ */ (0, F.jsxs)("mesh", {
				position: [
					0,
					0,
					-.015
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, F.jsx)("cylinderGeometry", { args: [
					.05,
					.05,
					.005,
					40
				] }), /* @__PURE__ */ (0, F.jsx)(U, { kind: "recess" })]
			}),
			/* @__PURE__ */ (0, F.jsxs)("mesh", {
				position: [
					0,
					0,
					-.014
				],
				children: [/* @__PURE__ */ (0, F.jsx)("torusGeometry", { args: [
					.042,
					.003,
					8,
					32
				] }), /* @__PURE__ */ (0, F.jsx)(U, { kind: "energy" })]
			})
		]
	});
}
//#endregion
//#region packages/walk-laser/src/laser-gun/BlasterBarrel.tsx
function Ue({ muzzleRef: e, shotId: t }) {
	return /* @__PURE__ */ (0, F.jsxs)("group", {
		name: "blaster-barrel",
		children: [
			/* @__PURE__ */ (0, F.jsxs)("mesh", {
				position: [
					0,
					.075,
					-.327
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, F.jsx)("cylinderGeometry", { args: [
					.089,
					.089,
					.11,
					40
				] }), /* @__PURE__ */ (0, F.jsx)(U, { kind: "chassis" })]
			}),
			/* @__PURE__ */ (0, F.jsx)(w, {
				args: [
					.112,
					.055,
					.35
				],
				radius: .024,
				position: [
					0,
					.125,
					-.125
				],
				children: /* @__PURE__ */ (0, F.jsx)(U, { kind: "chassis" })
			}),
			/* @__PURE__ */ (0, F.jsx)(w, {
				args: [
					.076,
					.027,
					.337
				],
				radius: .012,
				position: [
					0,
					.158,
					-.127
				],
				children: /* @__PURE__ */ (0, F.jsx)(U, { kind: "energy" })
			}),
			[-1, 1].map((e) => /* @__PURE__ */ (0, F.jsx)(w, {
				args: [
					.019,
					.025,
					.34
				],
				radius: .009,
				position: [
					e * .054,
					.157,
					-.125
				],
				children: /* @__PURE__ */ (0, F.jsx)(U, { kind: "trim" })
			}, e)),
			/* @__PURE__ */ (0, F.jsx)(w, {
				args: [
					.176,
					.065,
					.147
				],
				radius: .03,
				position: [
					0,
					.179,
					-.298
				],
				rotation: [
					.08,
					0,
					0
				],
				children: /* @__PURE__ */ (0, F.jsx)(U, { kind: "armor" })
			}),
			/* @__PURE__ */ (0, F.jsx)(w, {
				args: [
					.157,
					.045,
					.14
				],
				radius: .02,
				position: [
					0,
					-.021,
					-.295
				],
				rotation: [
					-.1,
					0,
					0
				],
				children: /* @__PURE__ */ (0, F.jsx)(U, { kind: "armor" })
			}),
			/* @__PURE__ */ (0, F.jsx)(He, {}),
			/* @__PURE__ */ (0, F.jsx)("group", {
				...ne({ ref: e }),
				position: [
					0,
					.075,
					-.476
				],
				children: /* @__PURE__ */ (0, F.jsx)(Ve, { shotId: t })
			})
		]
	});
}
//#endregion
//#region packages/walk-laser/src/laser-gun/BlasterGrip.tsx
function We() {
	return /* @__PURE__ */ (0, F.jsxs)("group", {
		name: "blaster-grip",
		children: [
			/* @__PURE__ */ (0, F.jsx)(Q, {
				contour: "guard",
				depth: .035,
				bevel: .012,
				finish: "trim"
			}),
			/* @__PURE__ */ (0, F.jsx)(Q, {
				contour: "trigger",
				depth: .033,
				bevel: .009,
				finish: "hot"
			}),
			/* @__PURE__ */ (0, F.jsx)(Q, {
				contour: "grip",
				depth: .077,
				bevel: .016,
				finish: "trim"
			}),
			[-1, 1].map((e) => /* @__PURE__ */ (0, F.jsx)(Q, {
				contour: "gripInset",
				depth: .012,
				bevel: .012,
				finish: "grip",
				x: e * .05
			}, e)),
			[
				0,
				1,
				2,
				3
			].map((e) => /* @__PURE__ */ (0, F.jsx)(w, {
				args: [
					.13,
					.007,
					.091
				],
				radius: .003,
				position: [
					0,
					-.131 - e * .035,
					.138 + e * .017
				],
				rotation: [
					-.32,
					0,
					0
				],
				children: /* @__PURE__ */ (0, F.jsx)(U, { kind: "chassis" })
			}, e)),
			/* @__PURE__ */ (0, F.jsx)(Q, {
				contour: "heel",
				depth: .105,
				bevel: .017,
				finish: "armor"
			}),
			/* @__PURE__ */ (0, F.jsx)(w, {
				args: [
					.138,
					.012,
					.112
				],
				radius: .005,
				position: [
					0,
					-.291,
					.207
				],
				rotation: [
					-.29,
					0,
					0
				],
				children: /* @__PURE__ */ (0, F.jsx)(U, { kind: "energy" })
			})
		]
	});
}
//#endregion
//#region packages/walk-laser/src/laser-gun/BlasterGlove.tsx
function Ge() {
	return /* @__PURE__ */ (0, F.jsxs)("group", {
		name: "blaster-gloved-hand",
		children: [
			/* @__PURE__ */ (0, F.jsxs)("group", {
				position: [
					.065,
					-.285,
					.285
				],
				rotation: [
					-.5,
					0,
					-.18
				],
				children: [
					/* @__PURE__ */ (0, F.jsxs)("mesh", {
						scale: [
							.066,
							.13,
							.067
						],
						children: [/* @__PURE__ */ (0, F.jsx)("sphereGeometry", { args: [
							1,
							24,
							16
						] }), /* @__PURE__ */ (0, F.jsx)(U, { kind: "grip" })]
					}),
					/* @__PURE__ */ (0, F.jsx)(w, {
						args: [
							.145,
							.065,
							.14
						],
						radius: .024,
						position: [
							0,
							-.065,
							0
						],
						children: /* @__PURE__ */ (0, F.jsx)(U, { kind: "armor" })
					}),
					/* @__PURE__ */ (0, F.jsx)(w, {
						args: [
							.151,
							.015,
							.145
						],
						radius: .006,
						position: [
							0,
							-.046,
							0
						],
						children: /* @__PURE__ */ (0, F.jsx)(U, { kind: "trim" })
					}),
					/* @__PURE__ */ (0, F.jsx)(w, {
						args: [
							.062,
							.024,
							.013
						],
						radius: .006,
						position: [
							0,
							-.062,
							.075
						],
						children: /* @__PURE__ */ (0, F.jsx)(U, { kind: "energy" })
					})
				]
			}),
			/* @__PURE__ */ (0, F.jsxs)("mesh", {
				position: [
					.057,
					-.177,
					.205
				],
				rotation: [
					-.3,
					0,
					-.1
				],
				scale: [
					.072,
					.103,
					.065
				],
				children: [/* @__PURE__ */ (0, F.jsx)("sphereGeometry", { args: [
					1,
					24,
					16
				] }), /* @__PURE__ */ (0, F.jsx)(U, { kind: "grip" })]
			}),
			/* @__PURE__ */ (0, F.jsx)(w, {
				args: [
					.086,
					.107,
					.033
				],
				radius: .016,
				position: [
					.077,
					-.167,
					.255
				],
				rotation: [
					-.3,
					-.2,
					-.12
				],
				children: /* @__PURE__ */ (0, F.jsx)(U, { kind: "armor" })
			}),
			[
				0,
				1,
				2
			].map((e) => /* @__PURE__ */ (0, F.jsxs)("group", {
				position: [
					0,
					-.151 - e * .036,
					.126 + e * .016
				],
				rotation: [
					-.3,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, F.jsx)(w, {
					args: [
						.137,
						.032,
						.063
					],
					radius: .015,
					children: /* @__PURE__ */ (0, F.jsx)(U, { kind: "grip" })
				}), /* @__PURE__ */ (0, F.jsx)(w, {
					args: [
						.037,
						.025,
						.051
					],
					radius: .01,
					position: [
						.058,
						0,
						.007
					],
					children: /* @__PURE__ */ (0, F.jsx)(U, { kind: "armor" })
				})]
			}, e)),
			/* @__PURE__ */ (0, F.jsx)(w, {
				args: [
					.038,
					.037,
					.104
				],
				radius: .016,
				position: [
					.046,
					-.101,
					.055
				],
				rotation: [
					.18,
					-.25,
					0
				],
				children: /* @__PURE__ */ (0, F.jsx)(U, { kind: "grip" })
			}),
			/* @__PURE__ */ (0, F.jsxs)("mesh", {
				position: [
					-.055,
					-.101,
					.165
				],
				rotation: [
					.4,
					0,
					-.3
				],
				scale: [
					.029,
					.06,
					.034
				],
				children: [/* @__PURE__ */ (0, F.jsx)("sphereGeometry", { args: [
					1,
					20,
					12
				] }), /* @__PURE__ */ (0, F.jsx)(U, { kind: "grip" })]
			})
		]
	});
}
//#endregion
//#region packages/walk-laser/src/LaserGun.tsx
function Ke({ muzzleRef: e, shotId: t = 0 }) {
	return /* @__PURE__ */ (0, F.jsxs)("group", {
		name: "cartoon-laser-gun",
		userData: { walkToolVisual: !0 },
		rotation: [
			0,
			.25,
			-.055
		],
		children: [
			/* @__PURE__ */ (0, F.jsx)(Be, {}),
			/* @__PURE__ */ (0, F.jsx)(Ue, {
				muzzleRef: e,
				shotId: t
			}),
			/* @__PURE__ */ (0, F.jsx)(We, {}),
			/* @__PURE__ */ (0, F.jsx)(Ge, {})
		]
	});
}
//#endregion
//#region packages/walk-laser/src/useLaserShots.ts
function qe(e, t, n) {
	let [r, i] = (0, O.useState)([]), [a, o] = (0, O.useState)({ id: 0 }), s = (0, O.useRef)(0), c = (0, O.useRef)(0);
	(0, O.useEffect)(() => {
		if (!r.length) return;
		let e = window.setTimeout(() => i((e) => e.filter((e) => performance.now() - (e.createdAt ?? 0) < 3400)), 250);
		return () => window.clearTimeout(e);
	}, [r]);
	let l = (0, O.useCallback)((r) => {
		let a = ++s.current;
		if (o({
			id: a,
			...r.color === void 0 ? {} : { color: r.color }
		}), n) return;
		e.current?.updateWorldMatrix(!0, !1);
		let l = e.current?.getWorldPosition(new _()) ?? t.position.clone(), u = {
			...r,
			start: l,
			id: a,
			createdAt: performance.now()
		};
		i((e) => [...e.slice(-11), u]), c.current = .055;
	}, [
		e,
		t,
		n
	]);
	return {
		shots: r,
		triggerId: a.id,
		triggerColor: a.color,
		recoil: c,
		emitShot: l
	};
}
//#endregion
//#region packages/walk-laser/src/ElectricArc.tsx
function Je({ start: e, end: n, duration: r, color: i }) {
	let a = (0, O.useRef)(null), o = (0, O.useRef)(0), c = (0, O.useMemo)(() => {
		let e = new d();
		return e.setAttribute("position", new C(/* @__PURE__ */ new Float32Array(576), 3)), e.setAttribute("normal", new C(/* @__PURE__ */ new Float32Array(576), 3)), e;
	}, []);
	(0, O.useEffect)(() => () => c.dispose(), [c]);
	let l = (0, O.useMemo)(() => ({
		direction: new _(),
		side: new _(),
		up: new _(),
		view: new _(),
		a: new _(),
		b: new _()
	}), []);
	return s(({ camera: t }, i) => {
		if (o.current += i, !a.current || (a.current.visible = o.current < r, !a.current.visible)) return;
		let { direction: s, side: u, up: d, view: f, a: p, b: m } = l;
		s.subVectors(n, e).normalize(), f.subVectors(t.position, e).normalize(), u.crossVectors(s, f), u.lengthSq() < .001 && u.set(1, 0, 0).applyQuaternion(t.quaternion), u.normalize(), d.crossVectors(s, u).normalize();
		let h = c.attributes.position, g = Math.floor(o.current * 30), _ = (e) => Math.sin(e * 127.1 + g * 39.7) * Math.cos(e * 71.3 + g * 11.9), v = (t, r) => r.copy(e).lerp(n, t / 24).addScaledVector(u, _(t) * .095 * Math.sin(Math.PI * t / 24)).addScaledVector(d, _(t + 30) * .065 * Math.sin(Math.PI * t / 24)), y = .009 + .005 * (1 - o.current / r);
		for (let e = 0; e < 32; e++) e < 24 ? (v(e, p), v(e + 1, m)) : (v(3 + (e - 24) * 2, p), m.copy(p).addScaledVector(u, _(e + 80) * .24).addScaledVector(d, _(e + 90) * .2).addScaledVector(s, .13)), [
			[p, -1],
			[p, 1],
			[m, -1],
			[m, -1],
			[p, 1],
			[m, 1]
		].forEach(([t, n], r) => {
			let i = t, a = n * y;
			h.setXYZ(e * 6 + r, i.x + u.x * a, i.y + u.y * a, i.z + u.z * a);
		});
		h.needsUpdate = !0, c.computeVertexNormals();
	}), /* @__PURE__ */ (0, F.jsx)("mesh", {
		name: "laser-electric-arc",
		ref: a,
		geometry: c,
		frustumCulled: !1,
		raycast: () => void 0,
		children: /* @__PURE__ */ (0, F.jsx)(t, {
			color: i ?? "#9beaff",
			emissive: i ?? "#219bff",
			emissiveIntensity: 5,
			toneMapped: !1,
			transparent: !0,
			opacity: .9,
			blending: 2,
			depthWrite: !1,
			side: 2
		})
	});
}
//#endregion
//#region packages/walk-laser/src/ElectricScorch.tsx
function Ye({ delay: e, lifetime: n }) {
	let r = (0, O.useRef)(null), i = (0, O.useRef)(0);
	return s((t, a) => {
		if (i.current += a, !r.current) return;
		let o = i.current - e;
		r.current.visible = o >= 0 && o < n;
		for (let e of r.current.children) {
			let t = e.material;
			t.opacity = e.userData.char ? .62 * Math.min(1, (n - o) / 1.5) : Math.max(0, 1 - o / 1.5) * (.7 + .3 * Math.sin(o * 32));
		}
	}), /* @__PURE__ */ (0, F.jsxs)("group", {
		ref: r,
		name: "electric-scorch",
		visible: !1,
		children: [/* @__PURE__ */ (0, F.jsxs)("mesh", {
			userData: { char: !0 },
			scale: [
				1,
				.83,
				1
			],
			raycast: () => void 0,
			children: [/* @__PURE__ */ (0, F.jsx)("circleGeometry", { args: [.115, 11] }), /* @__PURE__ */ (0, F.jsx)(t, {
				color: "#272b43",
				transparent: !0,
				opacity: .62,
				depthWrite: !1,
				polygonOffset: !0,
				polygonOffsetFactor: -2
			})]
		}), Array.from({ length: 9 }, (e, n) => {
			let r = n * Math.PI * 2 / 9;
			return /* @__PURE__ */ (0, F.jsxs)("mesh", {
				position: [
					Math.cos(r) * .055,
					Math.sin(r) * .055,
					.001
				],
				rotation: [
					0,
					0,
					r
				],
				raycast: () => void 0,
				children: [/* @__PURE__ */ (0, F.jsx)("planeGeometry", { args: [.05 + n % 3 * .016, .005] }), /* @__PURE__ */ (0, F.jsx)(t, {
					color: "#b6eeff",
					emissive: "#188fff",
					emissiveIntensity: 4,
					toneMapped: !1,
					transparent: !0,
					blending: 2,
					depthWrite: !1
				})]
			}, n);
		})]
	});
}
var Xe = .8, Ze = .55;
function Qe(e, t) {
	let n = Math.max(.16, e / 55), r = e * Math.min(1, Math.max(0, t / n)), i = Math.max(0, r - Xe), a = t - n;
	return {
		head: r,
		tail: i,
		traveling: t >= 0 && t < n,
		travelSeconds: n,
		impact: a >= 0 && a < .55,
		impactProgress: Math.max(0, Math.min(1, a / Ze)),
		muzzleOpacity: Math.max(0, 1 - t / .045),
		done: t >= n + Ze
	};
}
//#endregion
//#region packages/walk-laser/src/LaserShot.tsx
var $ = () => void 0;
function $e({ shot: e }) {
	let n = (0, O.useRef)(null), r = (0, O.useRef)(null), i = (0, O.useRef)(null), a = (0, O.useRef)(0), o = (0, O.useMemo)(() => {
		let t = e.end.clone().sub(e.start), n = t.length();
		return t.normalize(), {
			distance: n,
			direction: t,
			rotation: new p().setFromUnitVectors(new _(0, 0, 1), t)
		};
	}, [e]);
	s((t, s) => {
		a.current += s;
		let c = Qe(o.distance, a.current);
		if (n.current && (n.current.visible = c.traveling, n.current.position.copy(e.start).addScaledVector(o.direction, (c.head + c.tail) / 2), n.current.scale.set(1, 1, Math.max(.001, c.head - c.tail))), r.current) {
			r.current.visible = e.hit && c.impact;
			let t = .5 + c.impactProgress * 2;
			r.current.scale.setScalar(t), i.current && i.current.scale.setScalar(1 + c.impactProgress);
			for (let e of r.current.children) e.isMesh && (e.material.opacity = (e.userData.glowOpacity ?? 1) * (1 - c.impactProgress) ** 2);
		}
	});
	let c = new p().setFromUnitVectors(new _(0, 0, 1), e.normal ?? o.direction.clone().negate()), l = e.end.clone().addScaledVector(e.normal ?? o.direction.clone().negate(), .004);
	return /* @__PURE__ */ (0, F.jsxs)("group", {
		userData: { walkToolVisual: !0 },
		children: [
			/* @__PURE__ */ (0, F.jsx)(Je, {
				start: e.start,
				end: e.end,
				duration: .3,
				color: e.color
			}),
			e.hit && e.scorch !== !1 && /* @__PURE__ */ (0, F.jsx)("group", {
				position: l.toArray(),
				quaternion: c.toArray(),
				children: /* @__PURE__ */ (0, F.jsx)(Ye, {
					delay: 0,
					lifetime: 3.2
				})
			}),
			/* @__PURE__ */ (0, F.jsxs)("group", {
				name: "laser-pulse",
				ref: n,
				quaternion: o.rotation.toArray(),
				visible: !1,
				children: [/* @__PURE__ */ (0, F.jsxs)("mesh", {
					raycast: $,
					scale: [
						.02,
						.02,
						.5
					],
					children: [/* @__PURE__ */ (0, F.jsx)("sphereGeometry", { args: [
						1,
						8,
						6
					] }), /* @__PURE__ */ (0, F.jsx)(t, {
						color: "#f5ffff",
						emissive: e.color ?? "#caffff",
						emissiveIntensity: 4,
						toneMapped: !1,
						transparent: !0,
						blending: 2,
						depthWrite: !1
					})]
				}), /* @__PURE__ */ (0, F.jsxs)("mesh", {
					raycast: $,
					scale: [
						.06,
						.06,
						.55
					],
					children: [/* @__PURE__ */ (0, F.jsx)("sphereGeometry", { args: [
						1,
						8,
						6
					] }), /* @__PURE__ */ (0, F.jsx)(t, {
						color: e.color ?? "#41dfff",
						emissive: e.color ?? "#41dfff",
						emissiveIntensity: 2,
						toneMapped: !1,
						transparent: !0,
						opacity: .22,
						blending: 2,
						depthWrite: !1
					})]
				})]
			}),
			/* @__PURE__ */ (0, F.jsxs)("group", {
				name: "laser-impact",
				ref: r,
				position: l.toArray(),
				quaternion: c.toArray(),
				visible: !1,
				children: [
					/* @__PURE__ */ (0, F.jsxs)("mesh", {
						raycast: $,
						children: [/* @__PURE__ */ (0, F.jsx)("icosahedronGeometry", { args: [.045, 1] }), /* @__PURE__ */ (0, F.jsx)(t, {
							color: e.color ?? "#d5f6ff",
							emissive: e.color ?? "#168fff",
							emissiveIntensity: 3,
							toneMapped: !1,
							transparent: !0,
							depthWrite: !1,
							blending: 2
						})]
					}),
					/* @__PURE__ */ (0, F.jsxs)("mesh", {
						ref: i,
						raycast: $,
						children: [/* @__PURE__ */ (0, F.jsx)("torusGeometry", { args: [
							.052,
							.006,
							5,
							20
						] }), /* @__PURE__ */ (0, F.jsx)(t, {
							color: e.color ?? "#6dcaff",
							emissive: e.color ?? "#6dcaff",
							emissiveIntensity: 2,
							toneMapped: !1,
							transparent: !0,
							depthWrite: !1,
							blending: 2
						})]
					}),
					/* @__PURE__ */ (0, F.jsxs)("mesh", {
						userData: { glowOpacity: .24 },
						raycast: $,
						children: [/* @__PURE__ */ (0, F.jsx)("sphereGeometry", { args: [
							.09,
							8,
							6
						] }), /* @__PURE__ */ (0, F.jsx)(t, {
							color: e.color ?? "#47eaff",
							emissive: e.color ?? "#47eaff",
							emissiveIntensity: 2,
							toneMapped: !1,
							transparent: !0,
							opacity: .24,
							depthWrite: !1,
							blending: 2
						})]
					}),
					Array.from({ length: 7 }, (n, r) => {
						let i = r * Math.PI * 2 / 7;
						return /* @__PURE__ */ (0, F.jsxs)("mesh", {
							position: [
								Math.cos(i) * .07,
								Math.sin(i) * .07,
								-.008
							],
							rotation: [
								0,
								0,
								i - Math.PI / 2
							],
							raycast: $,
							children: [/* @__PURE__ */ (0, F.jsx)("coneGeometry", { args: [
								.009,
								.06,
								4
							] }), /* @__PURE__ */ (0, F.jsx)(t, {
								color: e.color ?? "#d5f6ff",
								emissive: e.color ?? "#218fff",
								emissiveIntensity: 2,
								toneMapped: !1,
								transparent: !0,
								depthWrite: !1,
								blending: 2
							})]
						}, r);
					})
				]
			})
		]
	});
}
//#endregion
//#region packages/walk-laser/src/LaserShotWarmup.tsx
function et() {
	let { gl: e, camera: t, scene: n } = o(), r = (0, O.useMemo)(() => new te(), []), i = (0, O.useMemo)(() => ({
		id: 0,
		start: new _(),
		end: new _(0, 0, -1),
		hit: !0
	}), []);
	return (0, O.useEffect)(() => {
		e.compileAsync(r, t, n);
		let i = new c(1, 1), a = e.getRenderTarget();
		try {
			e.setRenderTarget(i), e.compileAsync(r, t, n);
		} finally {
			e.setRenderTarget(a), i.dispose();
		}
	}, [
		e,
		t,
		n,
		r
	]), g(/* @__PURE__ */ (0, F.jsx)($e, { shot: i }), r);
}
//#endregion
//#region packages/walk-laser/src/shot-gate.ts
function tt(e = 300) {
	let t = !1, n = 0;
	return async (r, i) => {
		if (t || r < n) return !1;
		t = !0, n = r + e;
		try {
			await i();
		} finally {
			t = !1;
		}
		return !0;
	};
}
//#endregion
//#region packages/walk-laser/src/comic-pew/pew-art.ts
var nt = " M222 35H237L229 69H219Z M218 76H231L228 88H215Z", rt = [
	{
		label: "PEW!",
		letters: "M48 88V35H73Q93 35 93 53Q93 71 72 71H64V88ZM64 48V58H72Q78 58 78 53Q78 48 72 48Z M99 35H137V48H115V55H134V67H115V75H138V88H99Z M143 35H159L162 64L171 42H184L187 64L197 35H213L192 88H177L174 64L164 88H149Z",
		highlights: "M51 40V62M103 40H129M148 40L151 55M225 40H230"
	},
	{
		label: "ZAP!",
		letters: "M48 35H94V47L68 74H94V88H47V75L73 49H48Z M99 88L116 35H135L152 88H136L133 78H116L113 88ZM120 65H129L124 48Z M159 88V35H184Q207 35 207 53Q207 72 183 72H175V88ZM175 48V59H183Q191 59 191 53Q191 48 183 48Z",
		highlights: "M53 40H84M118 41L111 63M163 40V61M225 40H230"
	},
	{
		label: "POW!",
		letters: "M48 88V35H73Q93 35 93 53Q93 71 72 71H64V88ZM64 48V58H72Q78 58 78 53Q78 48 72 48Z M119 34Q141 34 141 61Q141 89 119 89Q97 89 97 61Q97 34 119 34ZM119 48Q112 48 112 61Q112 75 119 75Q126 75 126 61Q126 48 119 48Z M143 35H159L162 64L171 42H184L187 64L197 35H213L192 88H177L174 64L164 88H149Z",
		highlights: "M51 40V62M107 48Q110 40 120 40M148 40L151 55M225 40H230"
	}
], it = [
	{
		paper: "#ffe15a",
		shade: "#f39436",
		ink: "#fff9dd"
	},
	{
		paper: "#6cecf3",
		shade: "#279fc7",
		ink: "#fffceb"
	},
	{
		paper: "#ff967c",
		shade: "#d64d72",
		ink: "#fff4cf"
	},
	{
		paper: "#ccadff",
		shade: "#8b65d3",
		ink: "#fff5a8"
	}
];
function at(e, t) {
	let n = rt[Math.max(0, e - 1) % rt.length], r = t ? {
		paper: t,
		shade: t === P.gold ? "#bd7322" : "#279fc7",
		ink: "#fffceb"
	} : it[e % it.length], i = e * .61803398875 % 1, a = 10 + e % 3, o = Array.from({ length: a * 2 }, (t, n) => {
		let r = n * Math.PI / a, i = n % 2 ? .69 + .08 * Math.sin(n + e) : .94 + .06 * Math.cos(n * 3 + e);
		return `${(140 + Math.cos(r) * 128 * i).toFixed(1)},${(64 + Math.sin(r) * 58 * i).toFixed(1)}`;
	}).join(" ");
	return {
		...r,
		...n,
		letters: n.letters + nt,
		points: o,
		angle: -13 + i * 21,
		drift: -18 + i * 36,
		lift: -20 - i * 14,
		scale: .94 + i * .12
	};
}
//#endregion
//#region packages/walk-laser/src/comic-pew/ComicPew.tsx
function ot({ shotId: e, shotColor: t, anchor: n, reducedMotion: r }) {
	let i = at(e, t), a = {
		"--pew-angle": `${i.angle}deg`,
		"--pew-drift": `${i.drift}px`,
		"--pew-lift": `${i.lift}px`,
		"--pew-scale": i.scale
	};
	return /* @__PURE__ */ (0, F.jsx)("div", {
		ref: n,
		className: "comic-pew-anchor",
		"aria-hidden": "true",
		children: e > 0 && /* @__PURE__ */ (0, F.jsx)("div", {
			className: "comic-pew",
			"data-shot": e,
			"data-reduced-motion": r,
			style: a,
			children: /* @__PURE__ */ (0, F.jsxs)("svg", {
				viewBox: "-18 -20 316 174",
				className: "comic-pew__art",
				focusable: "false",
				children: [/* @__PURE__ */ (0, F.jsx)("title", { children: i.label }), /* @__PURE__ */ (0, F.jsxs)("g", {
					stroke: "#202036",
					strokeWidth: "4",
					strokeLinejoin: "round",
					children: [
						/* @__PURE__ */ (0, F.jsxs)("g", {
							className: "comic-pew__burst",
							children: [
								/* @__PURE__ */ (0, F.jsx)("polygon", {
									points: i.points,
									fill: "#202036",
									transform: "translate(4 7)"
								}),
								/* @__PURE__ */ (0, F.jsx)("polygon", {
									points: i.points,
									fill: i.paper
								}),
								/* @__PURE__ */ (0, F.jsx)("path", {
									d: "M38 81L66 91L59 99L111 91L142 108L154 92L202 94L219 77L247 70L225 97L201 101L185 117L151 104L130 115L107 101L73 108L73 94Z",
									fill: i.shade,
									stroke: "none"
								}),
								/* @__PURE__ */ (0, F.jsx)("path", {
									d: "M29 58L50 52M58 22L69 34M121 13L123 26M242 45L254 38",
									fill: "none",
									stroke: "#fffdf0",
									strokeWidth: "4"
								}),
								[
									0,
									1,
									2,
									3,
									4
								].map((e) => /* @__PURE__ */ (0, F.jsx)("circle", {
									cx: 81 + e * 18,
									cy: 99 + e % 2 * 3,
									r: "2",
									fill: "#202036",
									stroke: "none",
									opacity: ".35"
								}, e))
							]
						}),
						/* @__PURE__ */ (0, F.jsxs)("g", {
							className: "comic-pew__rays",
							fill: i.paper,
							children: [/* @__PURE__ */ (0, F.jsx)("path", { d: "M15 30L-9 15L3 37Z M48 9L43 -10L59 13Z M263 21L285 4L277 29Z M268 93L290 101L267 104Z" }), /* @__PURE__ */ (0, F.jsx)("path", {
								d: "M6 74L-9 82M242 121L253 132",
								fill: "none",
								strokeWidth: "5",
								strokeLinecap: "round"
							})]
						}),
						/* @__PURE__ */ (0, F.jsxs)("g", {
							className: "comic-pew__letters",
							transform: "translate(10 0) skewX(-10)",
							children: [
								/* @__PURE__ */ (0, F.jsx)("path", {
									d: i.letters,
									transform: "translate(2 5)",
									fill: "#202036",
									strokeWidth: "7",
									fillRule: "evenodd"
								}),
								/* @__PURE__ */ (0, F.jsx)("path", {
									d: i.letters,
									fill: i.ink,
									strokeWidth: "5",
									fillRule: "evenodd"
								}),
								/* @__PURE__ */ (0, F.jsx)("path", {
									d: i.highlights,
									fill: "none",
									stroke: "white",
									strokeWidth: "2",
									strokeLinecap: "round"
								})
							]
						})
					]
				})]
			})
		}, e)
	});
}
//#endregion
//#region packages/walk-laser/src/comic-pew/useMuzzleAnchor.ts
function st(e) {
	let t = (0, O.useRef)(null), n = (0, O.useMemo)(() => new _(), []);
	return s(({ camera: r, size: i }) => {
		if (!t.current || !e.current) return;
		e.current.updateWorldMatrix(!0, !1), e.current.getWorldPosition(n).project(r);
		let a = Math.min(250, Math.max(148, i.width * .23)) * .7, o = Math.max(a / 2 + 12, Math.min(i.width - a / 2 - 12, (n.x + 1) * i.width / 2)), s = Math.max(a * .6 + 16, (1 - n.y) * i.height / 2 - 14);
		t.current.style.transform = `translate3d(${o}px, ${s}px, 0)`, t.current.style.width = `${a}px`;
	}, 1), t;
}
//#endregion
//#region packages/walk-laser/src/LaserWalkTool.tsx
function ct({ enabled: e, pointerLocked: t, coarsePointer: r, reducedMotion: i, navigation: a, canActivateTarget: c, activateTarget: u }) {
	let { camera: d, scene: f, gl: p } = o(), m = n(), h = (0, O.useRef)(null), v = (0, O.useRef)(null), y = (0, O.useRef)(null), b = (0, O.useMemo)(() => new te(), []);
	(0, O.useEffect)(() => {
		p.compileAsync(b, d);
	}, [
		p,
		b,
		d
	]);
	let { shots: x, triggerId: ne, triggerColor: re, recoil: C, emitShot: w } = qe(v, d, i), ie = st(v), oe = x.at(-1), [T, E] = (0, O.useState)("blue"), [se, k] = (0, O.useState)(null), A = (0, O.useRef)(null), j = (0, O.useRef)({
		previous: d.position.clone(),
		speed: 0,
		phase: 0,
		time: 0
	}), M = (0, O.useMemo)(() => tt(), []), N = (0, O.useMemo)(() => new S(), []), P = (0, O.useMemo)(() => new l(), []), I = e && (r || t), L = (0, O.useRef)(I);
	L.current = I, s((e, t) => {
		let n = j.current, r = Math.hypot(d.position.x - n.previous.x, d.position.z - n.previous.z), a = I && t > 0 && r < .5 ? r / t : 0;
		n.previous.copy(d.position), n.speed += (Math.min(a, 5) - n.speed) * (1 - Math.exp(-10 * t)), n.time += t, n.phase += t * (7 + n.speed * 2.5);
		let o = i ? 0 : Math.min(n.speed / 2, 1.6), s = i ? 0 : Math.sin(n.time * 1.6) * .0015 + Math.sin(n.phase) * .004 * o, l = i ? 0 : Math.cos(n.time * 2) * .0015 + Math.cos(n.phase * 2) * .003 * o;
		if (h.current) {
			C.current *= Math.exp(-18 * t);
			let e = d, n = 1.2 * Math.tan(e.fov * Math.PI / 360), r = n * e.aspect;
			h.current.scale.setScalar(Math.min(.58, r * .56)), h.current.position.set(r * .29 + s, -n * .19 + l - o * .004, -.6 + (i ? 0 : C.current)), h.current.position.applyQuaternion(d.quaternion).add(d.position), h.current.quaternion.copy(d.quaternion), i || (h.current.rotateX(C.current * .9), h.current.rotateZ(s * 2));
		}
		if (!I) {
			A.current !== null && (A.current = null, k(null));
			return;
		}
		N.setFromCamera(P, d);
		let { target: u } = D(N, f), p = u && c(u) ? u.label : null;
		p !== A.current && (A.current = p, k(p));
	}), s(({ gl: t }) => {
		if (!e) return;
		let n = t.autoClear;
		try {
			t.autoClear = !1, t.clearDepth(), t.render(b, d);
		} finally {
			t.autoClear = n;
		}
	}, 2);
	let R = (0, O.useCallback)(() => {
		L.current && M(performance.now(), async () => {
			f.updateMatrixWorld(!0), N.setFromCamera(P, d);
			let { hit: e, target: t } = D(N, f), n = y.current?.remove(N.ray, e?.distance ?? 30);
			if (n) {
				w({
					end: n.point,
					normal: n.normal,
					hit: !0,
					scorch: !1
				});
				return;
			}
			let r = e?.point.clone() ?? N.ray.at(30, new _()), i = e?.face?.normal.clone().applyMatrix3(new ee().getNormalMatrix(e.object.matrixWorld)).normalize();
			i && i.dot(N.ray.direction) > 0 && i.negate(), w({
				end: r,
				hit: !!e,
				...i === void 0 ? {} : { normal: i }
			}), t && await u(t);
		});
	}, [
		u,
		d,
		P,
		M,
		N,
		w,
		f
	]);
	(0, O.useEffect)(() => {
		let e = (e) => {
			!L.current || r || e.button !== 0 || !m.root.pointerLockElement || (e.preventDefault(), R());
		}, t = (e) => {
			!L.current || e.code !== "KeyF" || e.repeat || e.ctrlKey || e.metaKey || e.altKey || e.target instanceof HTMLElement && e.target.closest("input, textarea, select, [contenteditable=true]") || (e.preventDefault(), R());
		};
		return m.events.addEventListener("pointerdown", e), m.events.addEventListener("keydown", t), () => {
			m.events.removeEventListener("pointerdown", e), m.events.removeEventListener("keydown", t);
		};
	}, [
		r,
		m.events,
		m.root,
		R
	]);
	let ce = (0, O.useCallback)((e, t, n, r) => {
		E(r), w({
			end: e,
			normal: t,
			color: n,
			hit: !0,
			scorch: !1
		});
	}, [w]);
	return /* @__PURE__ */ (0, F.jsxs)(F.Fragment, { children: [
		/* @__PURE__ */ (0, F.jsx)(Ae, {
			active: I,
			navigation: a,
			reducedMotion: i,
			onPlaced: ce,
			onNextColor: E,
			controls: y
		}),
		g(/* @__PURE__ */ (0, F.jsxs)(F.Fragment, { children: [
			/* @__PURE__ */ (0, F.jsx)("ambientLight", { intensity: 1.1 }),
			/* @__PURE__ */ (0, F.jsx)("directionalLight", {
				position: [
					-2,
					4,
					3
				],
				intensity: 2.2
			}),
			/* @__PURE__ */ (0, F.jsx)("group", {
				ref: h,
				children: /* @__PURE__ */ (0, F.jsx)(Ke, {
					muzzleRef: v,
					shotId: oe?.id ?? 0
				})
			})
		] }), b),
		!i && /* @__PURE__ */ (0, F.jsx)(et, {}),
		x.map((e) => /* @__PURE__ */ (0, F.jsx)($e, { shot: e }, e.id)),
		/* @__PURE__ */ (0, F.jsx)(ae, {
			onOcclude: () => void 0,
			fullscreen: !0,
			calculatePosition: (e, t, n) => [n.width / 2, n.height / 2],
			zIndexRange: [10, 0],
			style: { pointerEvents: "none" },
			children: e && /* @__PURE__ */ (0, F.jsxs)("div", {
				className: "walk-laser",
				"data-ready": I,
				children: [
					/* @__PURE__ */ (0, F.jsx)(Pe, { coarsePointer: r }),
					/* @__PURE__ */ (0, F.jsx)(ot, {
						shotId: ne,
						shotColor: re,
						anchor: ie,
						reducedMotion: i
					}),
					/* @__PURE__ */ (0, F.jsx)(Ie, {
						target: !!se,
						desktop: !r,
						ready: I,
						nextPortal: T
					}),
					r && /* @__PURE__ */ (0, F.jsx)(Fe, {
						ready: I,
						nextPortal: T,
						zap: R,
						portal: () => y.current?.place()
					})
				]
			})
		})
	] });
}
//#endregion
export { ct as LaserWalkTool };
