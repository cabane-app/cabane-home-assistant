import { r as e } from "./rolldown-runtime-B0aSnxlc.js";
import { Ai as t, Cr as n, Gr as r, Mi as i, Or as a, Qr as o, Tr as s, Wr as c, Zn as l, _i as u, bi as d, ca as f, ci as p, ei as m, fi as h, ji as g, jt as _, ki as v, kr as y, li as b, mi as x, ni as ee, pi as te, r as S, ra as C, sa as ne, si as re, t as ie, tr as ae, vi as w, wi as T, wr as E, xi as D, xr as oe } from "./LaserIcon-C8fw9i7U.js";
//#region packages/engine/src/walk-tools/raycast-walk-scene.ts
function O(e, t) {
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
var k = /* @__PURE__ */ e(f(), 1), A = .58, j = 1.1, M = 1.18, N = .72, P = (e) => e === "blue" ? "gold" : "blue", F = {
	blue: "#42cfff",
	gold: "#efa632"
}, I = ne();
function L({ veil: e, iris: t }) {
	return /* @__PURE__ */ (0, I.jsx)(ae, {
		fullscreen: !0,
		calculatePosition: (e, t, n) => [n.width / 2, n.height / 2],
		zIndexRange: [20, 0],
		style: { pointerEvents: "none" },
		children: /* @__PURE__ */ (0, I.jsx)("div", {
			ref: e,
			className: "walk-portal-transit",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, I.jsx)("div", {
				ref: t,
				className: "walk-portal-transit__iris"
			})
		})
	});
}
//#endregion
//#region packages/walk-laser/src/portals/usePortalAppearance.ts
function R(e, t, n = !1, r) {
	let i = (0, k.useRef)(null), a = (0, k.useRef)(null), o = (0, k.useRef)(0), s = (0, k.useRef)(!1);
	return (0, k.useLayoutEffect)(() => {
		o.current = 0, s.current = !1, i.current?.scale.setScalar(n || t ? 1 : 0), a.current && (a.current.visible = !1);
	}, [
		e,
		t,
		n
	]), E((e, c) => {
		if (o.current += c, n) {
			let e = t ? .12 : .4, n = Math.min(1, o.current / e), c = t ? 1 : (1 - n ** 3) * (1 + .12 * Math.sin(n * Math.PI));
			i.current?.scale.setScalar(Math.max(0, c)), a.current && (a.current.visible = !t && n < 1, a.current.scale.setScalar(1.3 - n * .5), a.current.material.opacity = .65 * (1 - n)), n === 1 && !s.current && (s.current = !0, r?.());
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
function z() {
	let e = new te(), n = new p(), r = new p(), i = new p(), a = new p().makeRotationY(Math.PI), o = new t(1, 1, 1), s = new t(), c = new t(), l = new m(), u = new p(), d = new T(new t(), j * 1.15), f = new x(), h = new g(), _ = new g();
	return {
		camera: e,
		update(t, p, m) {
			if (!t.isPerspectiveCamera || (t.updateWorldMatrix(!0, !1), s.setFromMatrixPosition(t.matrixWorld), c.subVectors(s, p.center).dot(p.normal) <= .01) || (u.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), l.setFromProjectionMatrix(u), d.center.copy(p.center), !l.intersectsSphere(d))) return !1;
			n.compose(p.center, p.rotation, o), r.compose(m.center, m.rotation, o), i.copy(r).multiply(a).multiply(n.invert()).multiply(t.matrixWorld), i.decompose(e.position, e.quaternion, o), o.set(1, 1, 1), e.near = t.near, e.far = t.far, e.layers.mask = t.layers.mask, e.updateMatrixWorld(!0), e.projectionMatrix.copy(t.projectionMatrix), f.setFromNormalAndCoplanarPoint(m.normal, m.center).applyMatrix4(e.matrixWorldInverse), h.set(f.normal.x, f.normal.y, f.normal.z, f.constant);
			let g = e.projectionMatrix.elements;
			_.set((Math.sign(h.x) + g[8]) / g[0], (Math.sign(h.y) + g[9]) / g[5], -1, (1 + g[10]) / g[14]);
			let v = h.dot(_);
			return v <= 1e-6 ? !1 : (h.multiplyScalar(2 / v), g[2] = h.x, g[6] = h.y, g[10] = h.z + 1, g[14] = h.w, e.projectionMatrixInverse.copy(e.projectionMatrix).invert(), !0);
		}
	};
}
//#endregion
//#region packages/walk-laser/src/portals/portal-view-renderer.ts
function se() {
	let e = new i(1, 1, {
		type: ee,
		depthBuffer: !0
	});
	e.texture.name = "portal-destination-view";
	let t = new v(), n = new g(), r = new g(), a = [];
	return {
		target: e,
		render(i, o, s, c) {
			i.getDrawingBufferSize(t);
			let l = Math.min(1, 1024 / Math.max(t.x, t.y)), u = Math.max(1, Math.round(t.x * l)), d = Math.max(1, Math.round(t.y * l));
			(e.width !== u || e.height !== d) && e.setSize(u, d);
			let f = i.getRenderTarget(), p = i.getActiveCubeFace(), m = i.getActiveMipmapLevel();
			i.getViewport(n), i.getScissor(r);
			let h = i.getScissorTest(), g = i.autoClear, _ = i.xr.enabled, v = i.shadowMap.autoUpdate, y = i.shadowMap.needsUpdate;
			try {
				o.traverse((e) => {
					(e.userData.portalLiveView || e.userData.portalAnchor === c) && e.visible && (a.push(e), e.visible = !1);
				}), i.xr.enabled = !1, i.shadowMap.autoUpdate = !1, i.shadowMap.needsUpdate = !1, i.autoClear = !0, i.setRenderTarget(e), i.setScissorTest(!1), i.render(o, s);
			} finally {
				for (let e of a) e.visible = !0;
				a.length = 0, i.xr.enabled = _, i.shadowMap.autoUpdate = v, i.shadowMap.needsUpdate = y, i.autoClear = g, i.setRenderTarget(f, p, m), i.setViewport(n), i.setScissor(r), i.setScissorTest(h);
			}
		},
		dispose() {
			e.dispose();
		}
	};
}
//#endregion
//#region packages/walk-laser/src/portals/usePortalView.ts
function ce(e, t) {
	let n = (0, k.useRef)(null), r = (0, k.useMemo)(z, []), i = (0, k.useMemo)(se, []);
	return (0, k.useEffect)(() => () => i.dispose(), [i]), E(({ camera: a, scene: o, gl: s }) => {
		n.current && (n.current.visible = !1, r.update(a, e, t) && (i.render(s, o, r.camera, t), n.current.visible = !0));
	}, .5), {
		surface: n,
		texture: i.target.texture
	};
}
//#endregion
//#region packages/walk-laser/src/portals/PortalView.tsx
function le({ entry: e, exit: t }) {
	let { surface: n, texture: r } = ce(e, t), i = (0, k.useMemo)(() => ({ destination: { value: r } }), [r]);
	return /* @__PURE__ */ (0, I.jsxs)("mesh", {
		ref: n,
		name: "portal-live-view",
		userData: { portalLiveView: !0 },
		position: [
			0,
			0,
			.002
		],
		raycast: () => void 0,
		children: [/* @__PURE__ */ (0, I.jsx)("circleGeometry", { args: [1, 64] }), /* @__PURE__ */ (0, I.jsx)("shaderMaterial", {
			uniforms: i,
			vertexShader: "varying vec4 portalClip;\n        void main() {\n          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n          portalClip = gl_Position;\n        }",
			fragmentShader: "uniform sampler2D destination;\n        varying vec4 portalClip;\n        void main() {\n          vec2 uv = portalClip.xy / portalClip.w * 0.5 + 0.5;\n          gl_FragColor = vec4(texture2D(destination, uv).rgb, 1.0);\n          #include <tonemapping_fragment>\n          #include <colorspace_fragment>\n        }"
		})]
	});
}
//#endregion
//#region packages/walk-laser/src/portals/PortalSurface.tsx
var B = () => void 0;
function ue({ anchor: e, color: t, exit: n, reducedMotion: r, closing: i = !1, onClosed: a }) {
	let o = !!n, s = (0, k.useRef)(null), { opening: c, ripple: u } = R(e, r, i, a), d = F[t];
	return E((e, n) => {
		s.current && !r && (s.current.rotation.z += n * (t === "blue" ? .3 : -.3));
	}), /* @__PURE__ */ (0, I.jsx)("group", {
		name: i ? `gun-portal-closing-${t}` : `gun-portal-${t}`,
		position: e.center.toArray(),
		quaternion: e.rotation.toArray(),
		userData: {
			walkToolVisual: !0,
			portalAnchor: e
		},
		children: /* @__PURE__ */ (0, I.jsx)("group", {
			ref: c,
			name: "portal-opening",
			children: /* @__PURE__ */ (0, I.jsxs)("group", {
				scale: [
					A,
					j,
					1
				],
				children: [
					/* @__PURE__ */ (0, I.jsxs)("mesh", {
						raycast: B,
						children: [/* @__PURE__ */ (0, I.jsx)("circleGeometry", { args: [1, 64] }), /* @__PURE__ */ (0, I.jsx)(l, {
							color: t === "blue" ? "#102d49" : "#443024",
							emissive: d,
							emissiveIntensity: o ? .12 : .025,
							side: 2
						})]
					}),
					n && /* @__PURE__ */ (0, I.jsx)(le, {
						entry: e,
						exit: n
					}),
					/* @__PURE__ */ (0, I.jsxs)("mesh", {
						raycast: B,
						position: [
							0,
							0,
							.012
						],
						children: [/* @__PURE__ */ (0, I.jsx)("torusGeometry", { args: [
							1,
							.045,
							8,
							64
						] }), /* @__PURE__ */ (0, I.jsx)(l, {
							color: d,
							emissive: d,
							emissiveIntensity: o ? 1.5 : .45,
							toneMapped: !1
						})]
					}),
					/* @__PURE__ */ (0, I.jsxs)("mesh", {
						raycast: B,
						position: [
							0,
							0,
							.014
						],
						children: [/* @__PURE__ */ (0, I.jsx)("torusGeometry", { args: [
							.94,
							.012,
							6,
							64
						] }), /* @__PURE__ */ (0, I.jsx)(l, {
							color: "#fff0d5",
							emissive: d,
							emissiveIntensity: 1,
							toneMapped: !1
						})]
					}),
					/* @__PURE__ */ (0, I.jsxs)("mesh", {
						ref: u,
						name: "portal-arrival-ripple",
						position: [
							0,
							0,
							.028
						],
						raycast: B,
						visible: !1,
						children: [/* @__PURE__ */ (0, I.jsx)("torusGeometry", { args: [
							1,
							.025,
							6,
							64
						] }), /* @__PURE__ */ (0, I.jsx)(l, {
							color: d,
							emissive: d,
							emissiveIntensity: 2,
							transparent: !0,
							opacity: 0,
							depthWrite: !1,
							toneMapped: !1
						})]
					}),
					/* @__PURE__ */ (0, I.jsx)("group", {
						ref: s,
						position: [
							0,
							0,
							.022
						],
						visible: !o,
						children: [
							.36,
							.61,
							.82
						].map((e, t) => /* @__PURE__ */ (0, I.jsxs)("mesh", {
							rotation: [
								0,
								0,
								t * 2.1
							],
							raycast: B,
							children: [/* @__PURE__ */ (0, I.jsx)("torusGeometry", { args: [
								e,
								.012,
								6,
								32,
								Math.PI * 1.15
							] }), /* @__PURE__ */ (0, I.jsx)(l, {
								color: d,
								emissive: d,
								emissiveIntensity: .7,
								transparent: !0,
								opacity: o ? .55 : .16,
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
function de(e) {
	let t = [];
	return e.traverse((e) => {
		if (!e.isMesh) return;
		for (let t = e; t; t = t.parent) if (!t.visible || t.userData.walkToolVisual) return;
		let n = e;
		(Array.isArray(n.material) ? n.material : [n.material]).every((e) => !e.visible || e.transparent && e.opacity === 0) || t.push(n);
	}), (e) => {
		let n = [];
		for (let r of t) b.prototype.raycast.call(r, e, n);
		return n.sort((e, t) => e.distance - t.distance), { hit: n[0] ?? null };
	};
}
//#endregion
//#region packages/walk-laser/src/portals/portal-placement.ts
var fe = (e) => e.face?.normal.clone().applyMatrix3(new re().getNormalMatrix(e.object.matrixWorld)).normalize();
function pe(e, n, r, i = O) {
	let a = fe(e);
	if (!a || Math.abs(a.y) > .05 && a.y < .98) return null;
	for (let t = e.object; t; t = t.parent) if (t.userData.walkDeviceInteraction || t.userData.walkCollider) return null;
	let o = a.y > .98;
	a.set(a.x, +!!o, a.z).normalize();
	let s = e.point.clone().addScaledVector(a, o ? 0 : N);
	o || (s.y -= M);
	let c = r.resolveLanding(s);
	if (!c || o && Math.abs(c.elevation - e.point.y) > .12) return null;
	let l = e.point.clone();
	o || (l.y = c.elevation + M);
	let d = new u().setFromUnitVectors(new t(0, 0, 1), a), f = new w();
	for (let e = -1; e < 24; e++) {
		let r = e * Math.PI / 12, o = (e < 0 ? new t() : new t(Math.cos(r) * (A + .04), Math.sin(r) * (j + .04), 0)).applyQuaternion(d).add(l);
		f.set(o.clone().addScaledVector(a, .08), a.clone().negate()), f.far = .16;
		let s = i(f, n).hit;
		if (!s || Math.abs(s.point.clone().sub(o).dot(a)) > .025 || (fe(s)?.dot(a) ?? 0) < .98) return null;
	}
	return {
		center: l.addScaledVector(a, .018),
		normal: a,
		rotation: d,
		landing: c
	};
}
function me(e, t) {
	return e.center.distanceTo(t.center) < A * 2 + .18;
}
//#endregion
//#region packages/walk-laser/src/portals/portal-restoration.ts
function he(e, t, n) {
	let r = {}, i = new w();
	t.updateMatrixWorld(!0);
	let a = de(t);
	for (let o of ["blue", "gold"]) {
		let s = e[o];
		if (!s) continue;
		i.set(s.center.clone().addScaledVector(s.normal, .1), s.normal.clone().negate()), i.far = .2;
		let c = a(i).hit, l = c && pe(c, t, n, a);
		l && l.center.distanceTo(s.center) < .025 && l.normal.dot(s.normal) > .999 && l.landing.floorId === s.landing.floorId && Math.abs(l.landing.elevation - s.landing.elevation) < .025 && Math.hypot(l.landing.x - s.landing.x, l.landing.z - s.landing.z) < .025 && (r[o] = s);
	}
	return r;
}
//#endregion
//#region packages/walk-laser/src/portals/portal-pair.ts
function ge(e = {}, t = "blue") {
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
			let t = n[P(r)];
			return t && me(e, t) ? null : (n = {
				...n,
				[r]: e
			}, r = P(r), n);
		}
	};
}
//#endregion
//#region packages/walk-laser/src/portals/portal-traversal.ts
function V(e, t) {
	let n = t.clone();
	return n.y -= _ - (e.normal.y > .98 ? 0 : M), n.sub(e.center).applyQuaternion(e.rotation.clone().invert());
}
function _e(e) {
	return (e.x / (A - .22)) ** 2 + (e.y / (j - .22)) ** 2 < 1;
}
function ve() {
	let e = null, t = null;
	return {
		reset() {
			e = null, t = null;
		},
		step(n, r, i, a) {
			let o = e;
			if (e = r.clone(), !n.blue || !n.gold || !o || o.distanceTo(r) > 1) return !1;
			t && n[t] && V(n[t], r).length() > 1.4 && (t = null);
			for (let s of ["blue", "gold"]) {
				if (s === t) continue;
				let c = n[s], l = n[P(s)], u = V(c, r), d = V(c, o), f = u.z < d.z - 1e-4;
				if (!(c.normal.y > .98 ? !_e(d) || d.z > .25 && f : f && d.z > .32) || u.z < -.08 || u.z > .32 || !_e(u)) continue;
				let p = Math.atan2(-l.normal.x, -l.normal.z), m = Math.atan2(-c.normal.x, -c.normal.z), h = l.normal.y > .98 ? i.yaw : c.normal.y > .98 ? p : i.yaw + p - m + Math.PI;
				return a({
					landing: l.landing,
					facing: {
						yaw: Math.atan2(Math.sin(h), Math.cos(h)),
						pitch: i.pitch
					},
					entry: s,
					exit: P(s)
				}) ? (t = P(s), e = null, !0) : !1;
			}
			return !1;
		}
	};
}
//#endregion
//#region packages/walk-laser/src/portals/portal-transition.ts
function ye() {
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
function be(e, t, n, r) {
	let { camera: i } = s(), a = (0, k.useMemo)(ye, []), o = (0, k.useRef)(null), c = (0, k.useRef)(null), l = (0, k.useRef)(null), u = (0, k.useCallback)(() => {
		if (l.current === null) return;
		let e = i;
		e.fov = l.current, e.updateProjectionMatrix(), l.current = null;
	}, [i]);
	(0, k.useEffect)(() => () => {
		a.cancel(), u();
	}, [a, u]);
	let d = (0, k.useCallback)((e) => a.start(e, t), [a, t]);
	return E((t, s) => {
		e || a.cancel();
		let d = a.advance(s, (e) => {
			let t = n.teleport(e.landing, e.facing);
			return t || r(), t;
		});
		if (o.current && (o.current.style.opacity = String(d.opacity), o.current.style.visibility = d.opacity > 0 ? "visible" : "hidden", o.current.style.setProperty("--portal-color", F[d.color])), c.current && (c.current.style.display = d.reduced ? "none" : "block", c.current.style.transform = `translate(-50%, -50%) scale(${d.ringScale})`), d.fovOffset > 0 && i.isPerspectiveCamera) {
			let e = i;
			l.current ??= e.fov, e.fov = l.current + d.fovOffset, e.updateProjectionMatrix();
		} else u();
	}), {
		transition: a,
		travel: d,
		veil: o,
		iris: c
	};
}
//#endregion
//#region packages/walk-laser/src/portals/usePortalInput.ts
function xe(e, t) {
	let n = a();
	(0, k.useEffect)(() => {
		let r = (r) => {
			!e || !n.root.pointerLockElement || r.button !== 2 || (r.preventDefault(), t());
		}, i = (t) => {
			e && n.root.pointerLockElement && t.preventDefault();
		};
		return n.events.addEventListener("pointerdown", r), n.events.addEventListener("contextmenu", i), () => {
			n.events.removeEventListener("pointerdown", r), n.events.removeEventListener("contextmenu", i);
		};
	}, [
		e,
		n.events,
		n.root,
		t
	]);
}
//#endregion
//#region packages/walk-laser/src/portals/portal-state-codec.ts
var Se = "cabane.laser", H = (e) => !!e && typeof e == "object" && !Array.isArray(e), Ce = (e, t) => Array.isArray(e) && e.length === t && e.every((e) => typeof e == "number" && Number.isFinite(e) && Math.abs(e) < 1e6);
function we(e) {
	if (!H(e) || !Ce(e.center, 3) || !Ce(e.normal, 3) || !Ce(e.rotation, 4) || !H(e.landing)) return;
	let { x: n, z: r, elevation: i, floorId: a } = e.landing;
	if (![
		n,
		r,
		i
	].every((e) => typeof e == "number" && Number.isFinite(e) && Math.abs(e) < 1e6) || typeof a != "string" || !a) return;
	let o = new t().fromArray(e.normal), s = new u().fromArray(e.rotation);
	if (!(Math.abs(o.length() - 1) > .001 || Math.abs(s.length() - 1) > .001 || Math.abs(o.y) > .001 && o.y < .999 || new t(0, 0, 1).applyQuaternion(s).dot(o) < .999)) return {
		center: new t().fromArray(e.center),
		normal: o,
		rotation: s,
		landing: {
			x: n,
			z: r,
			elevation: i,
			floorId: a
		}
	};
}
function Te(e) {
	if (!H(e) || e.version !== 1 || !H(e.pair)) return {
		pair: {},
		next: "blue"
	};
	let t = {};
	for (let n of ["blue", "gold"]) {
		let r = we(e.pair[n]);
		r && (t[n] = r);
	}
	return t.blue && t.gold && me(t.blue, t.gold) && delete t.gold, {
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
	let e = C(), [t, n] = (0, k.useState)(() => Te(e?.read(Se))), r = (0, k.useRef)(t), i = (0, k.useRef)(!1);
	return {
		state: t,
		current: r,
		pending: i,
		commit: (0, k.useCallback)(async (t) => {
			if (i.current) return !1;
			let a = r.current;
			i.current = !0, r.current = t, n(t);
			try {
				return await e?.write(Se, Ee(t)), !0;
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
function Oe(e, n, r = 30) {
	let i = Math.min(30, r + .025), a = null;
	for (let r of ["blue", "gold"]) {
		let o = n[r];
		if (!o || e.direction.dot(o.normal) >= -.001) continue;
		let s = e.intersectPlane(new x().setFromNormalAndCoplanarPoint(o.normal, o.center), new t());
		if (!s) continue;
		let c = s.distanceTo(e.origin), l = s.clone().sub(o.center).applyQuaternion(o.rotation.clone().invert());
		c > i || (l.x / .58) ** 2 + (l.y / 1.1) ** 2 > 1 || (i = c, a = {
			color: r,
			point: s,
			normal: o.normal
		});
	}
	return a;
}
//#endregion
//#region packages/walk-laser/src/portals/useGunPortals.ts
function ke(e, t, n, r) {
	let { camera: i, scene: a } = s(), { state: o, current: c, pending: l, commit: u } = De(), [d, f] = (0, k.useState)({}), p = (0, k.useRef)(!1), m = (0, k.useMemo)(() => new w(), []), h = (0, k.useMemo)(ve, []), g = be(e, r, t, h.reset), _ = (0, k.useCallback)((t, n) => {
		let r = Oe(t, {
			...d,
			...c.current.pair
		}, n);
		if (!r) return null;
		if (!e || d[r.color] || l.current || g.transition.busy) return r;
		let { pair: i, next: a } = c.current, o = { ...i };
		return delete o[r.color], h.reset(), f((e) => ({
			...e,
			[r.color]: i[r.color]
		})), u({
			pair: o,
			next: a
		}).then((e) => {
			e || f((e) => {
				let t = { ...e };
				return delete t[r.color], t;
			});
		}), r;
	}, [
		e,
		c,
		l,
		u,
		h,
		g.transition,
		d
	]), y = (0, k.useCallback)((e) => {
		f((t) => {
			let n = { ...t };
			return delete n[e], n;
		});
	}, []), b = (0, k.useCallback)(() => {
		if (!e || l.current || g.transition.busy) return;
		a.updateMatrixWorld(!0), m.setFromCamera(new v(), i), m.far = 30;
		let r = O(m, a).hit, o = _(m.ray, r?.distance ?? 30);
		if (o) {
			n(o.point, o.normal, F[o.color], c.current.next);
			return;
		}
		if (Object.keys(d).length) return;
		let s = r && pe(r, a, t);
		if (!s) return;
		let f = ge(c.current.pair, c.current.next), p = f.nextColor, y = f.place(s);
		y && (h.reset(), u({
			pair: y,
			next: f.nextColor
		}), n(s.center, s.normal, F[p], f.nextColor));
	}, [
		e,
		i,
		a,
		m,
		t,
		h,
		n,
		g.transition,
		c,
		l,
		u,
		_,
		d
	]);
	return xe(e, b), E(() => {
		if (!e) {
			h.reset();
			return;
		}
		if (!p.current) {
			p.current = !0;
			let e = he(c.current.pair, a, t);
			if (Object.keys(e).length !== Object.keys(c.current.pair).length) {
				u({
					...c.current,
					pair: e
				});
				return;
			}
		}
		g.transition.busy || l.current || h.step(c.current.pair, i.position, {
			yaw: i.rotation.y,
			pitch: i.rotation.x
		}, g.travel);
	}), {
		pair: o.pair,
		next: o.next,
		closing: d,
		closed: y,
		remove: _,
		place: b,
		veil: g.veil,
		iris: g.iris
	};
}
//#endregion
//#region packages/walk-laser/src/portals/GunPortals.tsx
function Ae({ active: e, navigation: t, reducedMotion: n, onPlaced: r, controls: i, onNextColor: a }) {
	let { pair: o, next: s, closing: c, closed: l, remove: u, place: d, veil: f, iris: p } = ke(e, t, r, n);
	return (0, k.useImperativeHandle)(i, () => ({
		place: d,
		remove: u
	}), [d, u]), (0, k.useEffect)(() => {
		a?.(s);
	}, [s, a]), /* @__PURE__ */ (0, I.jsxs)(I.Fragment, { children: [
		/* @__PURE__ */ (0, I.jsx)(L, {
			veil: f,
			iris: p
		}),
		["blue", "gold"].map((e) => o[e] && /* @__PURE__ */ (0, I.jsx)(ue, {
			color: e,
			anchor: o[e],
			exit: o[P(e)],
			reducedMotion: n
		}, e)),
		["blue", "gold"].map((e) => c[e] && /* @__PURE__ */ (0, I.jsx)(ue, {
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
	let t = a(), [n, r] = (0, k.useState)(Ne), i = (0, k.useCallback)(() => {
		Me = !0, r(!0);
		try {
			window.localStorage.setItem(je, "dismissed");
		} catch {}
	}, []);
	return (0, k.useEffect)(() => {
		if (n) return;
		let e = (e) => {
			e.code !== "Enter" || e.repeat || e.ctrlKey || e.metaKey || e.altKey || !t.root.pointerLockElement || (e.preventDefault(), i());
		};
		return t.events.addEventListener("keydown", e), () => t.events.removeEventListener("keydown", e);
	}, [
		i,
		n,
		t.events,
		t.root
	]), n ? null : /* @__PURE__ */ (0, I.jsxs)("section", {
		className: "walk-laser-tutorial",
		"aria-label": "How to use the gun",
		onPointerDown: (e) => e.stopPropagation(),
		onClick: (e) => e.stopPropagation(),
		children: [
			/* @__PURE__ */ (0, I.jsxs)("div", {
				className: "walk-laser-tutorial__heading",
				children: [/* @__PURE__ */ (0, I.jsx)(ie, {}), /* @__PURE__ */ (0, I.jsxs)("div", { children: [/* @__PURE__ */ (0, I.jsx)("h2", { children: "Pew pew!" }), /* @__PURE__ */ (0, I.jsx)("p", { children: "Your home, a little more playful." })] })]
			}),
			/* @__PURE__ */ (0, I.jsxs)("p", { children: [
				/* @__PURE__ */ (0, I.jsx)("strong", { children: "Toggle devices." }),
				" Aim at a connected light, fan, AC, sprinkler, or TV, then",
				" ",
				e ? "tap the lightning button" : "left-click or press F",
				" to turn it on or off."
			] }),
			/* @__PURE__ */ (0, I.jsxs)("p", { children: [
				/* @__PURE__ */ (0, I.jsx)("strong", { children: "Make a shortcut." }),
				" Aim at a clear wall and",
				" ",
				e ? "tap the portal button" : "right-click",
				" to place a portal. Place a second portal elsewhere, then walk into either one to travel between them."
			] }),
			/* @__PURE__ */ (0, I.jsx)("p", { children: "Put the pair in spots you visit often. Zap a portal to remove it." }),
			/* @__PURE__ */ (0, I.jsx)("button", {
				type: "button",
				onClick: i,
				children: e ? "Got it" : "Got it · Enter"
			})
		]
	});
}
//#endregion
//#region packages/walk-laser/src/LaserTouchActions.tsx
function Fe({ ready: e, nextPortal: t, zap: n, portal: r }) {
	return /* @__PURE__ */ (0, I.jsx)("div", {
		className: "walk-laser-touch",
		role: "group",
		"aria-label": "Gun actions",
		children: ["zap", "portal"].map((i) => /* @__PURE__ */ (0, I.jsx)("button", {
			type: "button",
			className: "walk-laser-touch__action",
			"data-action": i,
			disabled: !e,
			"aria-label": i === "zap" ? "Fire zap" : `Create ${t} portal`,
			style: { color: i === "zap" ? "#51e8f3" : F[t] },
			onPointerDown: (e) => {
				e.button === 0 && (e.preventDefault(), e.stopPropagation(), (i === "zap" ? n : r)());
			},
			onClick: (e) => {
				e.stopPropagation(), e.detail === 0 && (i === "zap" ? n : r)();
			},
			onContextMenu: (e) => e.preventDefault(),
			children: /* @__PURE__ */ (0, I.jsx)("svg", {
				viewBox: "0 0 24 24",
				"aria-hidden": "true",
				children: i === "zap" ? /* @__PURE__ */ (0, I.jsx)("path", { d: "M14 2 5 13h6l-1 9 9-12h-6z" }) : /* @__PURE__ */ (0, I.jsxs)(I.Fragment, { children: [/* @__PURE__ */ (0, I.jsx)("ellipse", {
					cx: "12",
					cy: "12",
					rx: "6.5",
					ry: "10",
					transform: "rotate(18 12 12)"
				}), /* @__PURE__ */ (0, I.jsx)("path", { d: "M13 5c-4 2-6 10-3 14M11 2l2 3 3-1M8 20l3-1 2 3" })] })
			})
		}, i))
	});
}
//#endregion
//#region packages/walk-laser/src/LaserCrosshair.tsx
function Ie({ target: e, desktop: t, ready: n, nextPortal: r }) {
	return /* @__PURE__ */ (0, I.jsxs)("div", {
		className: "walk-laser-crosshair",
		"data-ready": n,
		role: "img",
		"aria-label": t ? `Left click: zap. Right click: ${r} portal.` : "Zap crosshair",
		children: [
			t && /* @__PURE__ */ (0, I.jsxs)("div", {
				className: "walk-laser-crosshair__action",
				"data-action": "zap",
				style: { color: "#51e8f3" },
				"aria-hidden": "true",
				children: [/* @__PURE__ */ (0, I.jsx)("svg", {
					className: "walk-laser-crosshair__ability",
					viewBox: "0 0 24 24",
					children: /* @__PURE__ */ (0, I.jsx)("path", { d: "M14 2 5 13h6l-1 9 9-12h-6z" })
				}), /* @__PURE__ */ (0, I.jsx)(Le, { side: "left" })]
			}),
			/* @__PURE__ */ (0, I.jsxs)("svg", {
				className: "walk-laser__sight",
				"data-target": e,
				"aria-hidden": "true",
				viewBox: "0 0 32 32",
				children: [
					/* @__PURE__ */ (0, I.jsx)("path", {
						className: "walk-laser__ticks",
						d: "M16 3v6 M16 23v6 M3 16h6 M23 16h6"
					}),
					/* @__PURE__ */ (0, I.jsx)("path", {
						className: "walk-laser__lock",
						d: "M7 11V7h4 M21 7h4v4 M25 21v4h-4 M11 25H7v-4"
					}),
					/* @__PURE__ */ (0, I.jsx)("circle", {
						cx: "16",
						cy: "16",
						r: "1.3",
						fill: "currentColor",
						stroke: "none"
					})
				]
			}),
			t && /* @__PURE__ */ (0, I.jsxs)("div", {
				className: "walk-laser-crosshair__action",
				"data-action": "portal",
				"data-next-portal": r,
				style: { color: F[r] },
				"aria-hidden": "true",
				children: [/* @__PURE__ */ (0, I.jsxs)("svg", {
					className: "walk-laser-crosshair__ability",
					viewBox: "0 0 24 24",
					children: [/* @__PURE__ */ (0, I.jsx)("ellipse", {
						cx: "12",
						cy: "12",
						rx: "6.5",
						ry: "10",
						transform: "rotate(18 12 12)"
					}), /* @__PURE__ */ (0, I.jsx)("path", { d: "M13 5c-4 2-6 10-3 14M11 2l2 3 3-1M8 20l3-1 2 3" })]
				}), /* @__PURE__ */ (0, I.jsx)(Le, { side: "right" })]
			})
		]
	});
}
function Le({ side: e }) {
	return /* @__PURE__ */ (0, I.jsxs)("svg", {
		className: "walk-laser-crosshair__mouse",
		viewBox: "0 0 16 22",
		children: [
			/* @__PURE__ */ (0, I.jsx)("path", {
				d: e === "left" ? "M8 2H6a4 4 0 0 0-4 4v4h6z" : "M8 2h2a4 4 0 0 1 4 4v4H8z",
				fill: "currentColor",
				stroke: "none"
			}),
			/* @__PURE__ */ (0, I.jsx)("rect", {
				x: "2",
				y: "2",
				width: "12",
				height: "18",
				rx: "5"
			}),
			/* @__PURE__ */ (0, I.jsx)("path", { d: "M8 2v8M2 10h12" })
		]
	});
}
//#endregion
//#region packages/walk-laser/src/laser-gun/BlasterFinish.tsx
function U({ kind: e }) {
	let t = {
		armor: "#fff0d5",
		chassis: "#44384d",
		trim: "#efa632",
		grip: "#514052",
		energy: "#51e8f3",
		hot: "#f26a35",
		recess: "#231c2b",
		glint: "#f2ffff"
	}[e], n = e === "energy" || e === "hot" || e === "glint";
	return /* @__PURE__ */ (0, I.jsx)(l, {
		color: t,
		emissive: n ? t : "#000000",
		emissiveIntensity: n ? .65 : 0,
		toneMapped: !n
	});
}
//#endregion
//#region packages/walk-laser/src/laser-gun/BlasterReactor.tsx
function Re({ side: e }) {
	return /* @__PURE__ */ (0, I.jsxs)("group", {
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
			/* @__PURE__ */ (0, I.jsxs)("mesh", {
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, I.jsx)("cylinderGeometry", { args: [
					.062,
					.062,
					.022,
					40
				] }), /* @__PURE__ */ (0, I.jsx)(U, { kind: "chassis" })]
			}),
			/* @__PURE__ */ (0, I.jsxs)("mesh", {
				position: [
					0,
					0,
					.009
				],
				children: [/* @__PURE__ */ (0, I.jsx)("torusGeometry", { args: [
					.047,
					.012,
					12,
					40
				] }), /* @__PURE__ */ (0, I.jsx)(U, { kind: "trim" })]
			}),
			/* @__PURE__ */ (0, I.jsxs)("mesh", {
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
				children: [/* @__PURE__ */ (0, I.jsx)("sphereGeometry", { args: [
					.037,
					32,
					16
				] }), /* @__PURE__ */ (0, I.jsx)(U, { kind: "energy" })]
			}),
			/* @__PURE__ */ (0, I.jsxs)("mesh", {
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
				children: [/* @__PURE__ */ (0, I.jsx)("sphereGeometry", { args: [
					.009,
					16,
					8
				] }), /* @__PURE__ */ (0, I.jsx)(U, { kind: "glint" })]
			}),
			/* @__PURE__ */ (0, I.jsxs)("mesh", {
				position: [
					0,
					0,
					.017
				],
				children: [/* @__PURE__ */ (0, I.jsx)("torusGeometry", { args: [
					.036,
					.0035,
					8,
					32
				] }), /* @__PURE__ */ (0, I.jsx)(U, { kind: "energy" })]
			})
		]
	});
}
//#endregion
//#region packages/walk-laser/src/laser-gun/blaster-contours.ts
var W = new D();
W.moveTo(-.205, .045), W.bezierCurveTo(-.225, .13, -.165, .16, -.105, .145), W.lineTo(.29, .12), W.quadraticCurveTo(.335, .1, .3, .015), W.quadraticCurveTo(.285, -.04, .21, -.053), W.lineTo(.045, -.065), W.quadraticCurveTo(-.02, -.085, -.105, -.065), W.quadraticCurveTo(-.215, -.065, -.205, .045), W.closePath();
var G = new D();
G.moveTo(-.205, .075), G.bezierCurveTo(-.213, .135, -.174, .163, -.105, .157), G.quadraticCurveTo(-.075, .155, -.039, .121), G.lineTo(.228, .116), G.quadraticCurveTo(.258, .12, .27, .147), G.lineTo(.318, .145), G.quadraticCurveTo(.335, .138, .32, .097), G.lineTo(.288, .018), G.quadraticCurveTo(.275, -.015, .235, -.014), G.lineTo(.139, -.022), G.quadraticCurveTo(.111, -.023, .09, .003), G.lineTo(.047, .047), G.lineTo(-.025, .044), G.bezierCurveTo(-.054, .094, -.098, .118, -.143, .093), G.quadraticCurveTo(-.184, .068, -.205, .075), G.closePath();
var K = new D();
K.moveTo(-.155, -.037), K.quadraticCurveTo(-.1, -.029, -.055, -.073), K.quadraticCurveTo(-.068, -.124, -.094, -.185), K.lineTo(-.127, -.293), K.quadraticCurveTo(-.124, -.322, -.158, -.325), K.lineTo(-.269, -.292), K.quadraticCurveTo(-.28, -.284, -.264, -.257), K.lineTo(-.188, -.087), K.quadraticCurveTo(-.19, -.048, -.155, -.037), K.closePath();
var q = new D();
q.moveTo(-.157, -.07), q.quadraticCurveTo(-.104, -.075, -.087, -.1), q.quadraticCurveTo(-.096, -.172, -.152, -.282), q.quadraticCurveTo(-.184, -.292, -.245, -.265), q.lineTo(-.179, -.112), q.quadraticCurveTo(-.17, -.073, -.157, -.07), q.closePath();
var J = new D();
J.moveTo(-.27, -.261), J.quadraticCurveTo(-.218, -.29, -.139, -.284), J.quadraticCurveTo(-.12, -.287, -.116, -.318), J.quadraticCurveTo(-.106, -.357, -.15, -.361), J.quadraticCurveTo(-.235, -.351, -.299, -.318), J.quadraticCurveTo(-.31, -.3, -.287, -.277), J.closePath();
var Y = new D();
Y.moveTo(-.085, -.055), Y.lineTo(.11, -.053), Y.bezierCurveTo(.166, -.09, .145, -.182, .076, -.186), Y.lineTo(-.082, -.17), Y.quadraticCurveTo(-.12, -.125, -.085, -.055), Y.closePath();
var X = new h();
X.moveTo(-.065, -.08), X.quadraticCurveTo(-.085, -.115, -.065, -.146), X.lineTo(.064, -.158), X.bezierCurveTo(.112, -.159, .14, -.116, .1, -.08), X.closePath(), Y.holes.push(X);
var Z = new D();
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
	let a = (0, k.useMemo)(() => {
		let r = new o(ze[e], {
			depth: t,
			steps: 1,
			curveSegments: 16,
			bevelEnabled: !0,
			bevelThickness: n,
			bevelSize: n,
			bevelSegments: 6
		});
		r.translate(0, 0, -t / 2), r.deleteAttribute("normal"), r.deleteAttribute("uv");
		let i = oe(r, 1e-5);
		return i.computeVertexNormals(), r.dispose(), i;
	}, [
		e,
		t,
		n
	]);
	return (0, k.useEffect)(() => () => a.dispose(), [a]), /* @__PURE__ */ (0, I.jsx)("mesh", {
		name: `blaster-${e}`,
		geometry: a,
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
		children: /* @__PURE__ */ (0, I.jsx)(U, { kind: r })
	});
}
//#endregion
//#region packages/walk-laser/src/laser-gun/BlasterReceiver.tsx
function Be() {
	return /* @__PURE__ */ (0, I.jsxs)("group", {
		name: "blaster-receiver",
		children: [
			/* @__PURE__ */ (0, I.jsx)(Q, {
				contour: "receiver",
				depth: .12,
				bevel: .024,
				finish: "chassis"
			}),
			[-1, 1].map((e) => /* @__PURE__ */ (0, I.jsxs)("group", { children: [
				/* @__PURE__ */ (0, I.jsx)(Q, {
					contour: "armor",
					depth: .012,
					bevel: .014,
					finish: "trim",
					x: e * .074
				}),
				/* @__PURE__ */ (0, I.jsx)(Q, {
					contour: "armor",
					depth: .012,
					bevel: .009,
					finish: "armor",
					x: e * .09
				}),
				/* @__PURE__ */ (0, I.jsx)(Re, { side: e }),
				[
					.1,
					.15,
					.2
				].map((t) => /* @__PURE__ */ (0, I.jsxs)("group", {
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
					children: [/* @__PURE__ */ (0, I.jsx)(S, {
						args: [
							.01,
							.06,
							.023
						],
						radius: .004,
						children: /* @__PURE__ */ (0, I.jsx)(U, { kind: "trim" })
					}), /* @__PURE__ */ (0, I.jsx)(S, {
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
						children: /* @__PURE__ */ (0, I.jsx)(U, { kind: "recess" })
					})]
				}, t))
			] }, e)),
			/* @__PURE__ */ (0, I.jsx)(S, {
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
				children: /* @__PURE__ */ (0, I.jsx)(U, { kind: "trim" })
			}),
			/* @__PURE__ */ (0, I.jsx)(S, {
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
				children: /* @__PURE__ */ (0, I.jsx)(U, { kind: "chassis" })
			}),
			/* @__PURE__ */ (0, I.jsx)(S, {
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
				children: /* @__PURE__ */ (0, I.jsx)(U, { kind: "energy" })
			}),
			/* @__PURE__ */ (0, I.jsx)(S, {
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
				children: /* @__PURE__ */ (0, I.jsx)(U, { kind: "armor" })
			})
		]
	});
}
//#endregion
//#region packages/walk-laser/src/laser-gun/MuzzleFlash.tsx
function Ve({ shotId: e }) {
	let t = (0, k.useRef)(null), n = (0, k.useRef)(Infinity);
	return (0, k.useEffect)(() => {
		e > 0 && (n.current = 0);
	}, [e]), E((e, r) => {
		if (n.current += r, !t.current) return;
		let i = Math.max(0, 1 - n.current / .045);
		t.current.visible = i > 0, t.current.scale.setScalar(.7 + (1 - i) * .7);
		for (let e of t.current.children) e.isMesh && (e.material.opacity = i * (e.userData.glowOpacity ?? 1));
	}), /* @__PURE__ */ (0, I.jsxs)("group", {
		ref: t,
		visible: !1,
		name: "laser-muzzle-flash",
		children: [
			/* @__PURE__ */ (0, I.jsxs)("mesh", {
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
				children: [/* @__PURE__ */ (0, I.jsx)("octahedronGeometry", { args: [1, 0] }), /* @__PURE__ */ (0, I.jsx)(l, {
					color: "#eeffff",
					emissive: "#acffff",
					emissiveIntensity: 4,
					toneMapped: !1,
					transparent: !0,
					blending: 2,
					depthWrite: !1
				})]
			}),
			/* @__PURE__ */ (0, I.jsxs)("mesh", {
				userData: { glowOpacity: .2 },
				scale: [
					.075,
					.075,
					.075
				],
				children: [/* @__PURE__ */ (0, I.jsx)("sphereGeometry", { args: [
					1,
					8,
					6
				] }), /* @__PURE__ */ (0, I.jsx)(l, {
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
			Array.from({ length: 5 }, (e, t) => {
				let n = t * Math.PI * 2 / 5;
				return /* @__PURE__ */ (0, I.jsxs)("mesh", {
					position: [
						Math.cos(n) * .026,
						Math.sin(n) * .026,
						-.009
					],
					rotation: [
						0,
						0,
						n - Math.PI / 2
					],
					children: [/* @__PURE__ */ (0, I.jsx)("coneGeometry", { args: [
						.008,
						.09,
						4
					] }), /* @__PURE__ */ (0, I.jsx)(l, {
						color: "#fff2cd",
						emissive: "#ffe1a0",
						emissiveIntensity: 2,
						toneMapped: !1,
						transparent: !0,
						blending: 2,
						depthWrite: !1
					})]
				}, t);
			})
		]
	});
}
//#endregion
//#region packages/walk-laser/src/laser-gun/BlasterMuzzle.tsx
function He() {
	let e = (0, k.useMemo)(() => [
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
	].map(([e, t]) => new v(e, t)), []);
	return /* @__PURE__ */ (0, I.jsxs)("group", {
		name: "blaster-muzzle",
		position: [
			0,
			.075,
			-.409
		],
		children: [
			/* @__PURE__ */ (0, I.jsxs)("mesh", {
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, I.jsx)("latheGeometry", { args: [e, 48] }), /* @__PURE__ */ (0, I.jsx)(U, { kind: "trim" })]
			}),
			/* @__PURE__ */ (0, I.jsxs)("mesh", {
				position: [
					0,
					0,
					-.052
				],
				children: [/* @__PURE__ */ (0, I.jsx)("torusGeometry", { args: [
					.058,
					.008,
					12,
					40
				] }), /* @__PURE__ */ (0, I.jsx)(U, { kind: "energy" })]
			}),
			/* @__PURE__ */ (0, I.jsxs)("mesh", {
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
				children: [/* @__PURE__ */ (0, I.jsx)("cylinderGeometry", { args: [
					.05,
					.05,
					.005,
					40
				] }), /* @__PURE__ */ (0, I.jsx)(U, { kind: "recess" })]
			}),
			/* @__PURE__ */ (0, I.jsxs)("mesh", {
				position: [
					0,
					0,
					-.014
				],
				children: [/* @__PURE__ */ (0, I.jsx)("torusGeometry", { args: [
					.042,
					.003,
					8,
					32
				] }), /* @__PURE__ */ (0, I.jsx)(U, { kind: "energy" })]
			})
		]
	});
}
//#endregion
//#region packages/walk-laser/src/laser-gun/BlasterBarrel.tsx
function Ue({ muzzleRef: e, shotId: t }) {
	return /* @__PURE__ */ (0, I.jsxs)("group", {
		name: "blaster-barrel",
		children: [
			/* @__PURE__ */ (0, I.jsxs)("mesh", {
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
				children: [/* @__PURE__ */ (0, I.jsx)("cylinderGeometry", { args: [
					.089,
					.089,
					.11,
					40
				] }), /* @__PURE__ */ (0, I.jsx)(U, { kind: "chassis" })]
			}),
			/* @__PURE__ */ (0, I.jsx)(S, {
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
				children: /* @__PURE__ */ (0, I.jsx)(U, { kind: "chassis" })
			}),
			/* @__PURE__ */ (0, I.jsx)(S, {
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
				children: /* @__PURE__ */ (0, I.jsx)(U, { kind: "energy" })
			}),
			[-1, 1].map((e) => /* @__PURE__ */ (0, I.jsx)(S, {
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
				children: /* @__PURE__ */ (0, I.jsx)(U, { kind: "trim" })
			}, e)),
			/* @__PURE__ */ (0, I.jsx)(S, {
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
				children: /* @__PURE__ */ (0, I.jsx)(U, { kind: "armor" })
			}),
			/* @__PURE__ */ (0, I.jsx)(S, {
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
				children: /* @__PURE__ */ (0, I.jsx)(U, { kind: "armor" })
			}),
			/* @__PURE__ */ (0, I.jsx)(He, {}),
			/* @__PURE__ */ (0, I.jsx)("group", {
				...y({ ref: e }),
				position: [
					0,
					.075,
					-.476
				],
				children: /* @__PURE__ */ (0, I.jsx)(Ve, { shotId: t })
			})
		]
	});
}
//#endregion
//#region packages/walk-laser/src/laser-gun/BlasterGrip.tsx
function We() {
	return /* @__PURE__ */ (0, I.jsxs)("group", {
		name: "blaster-grip",
		children: [
			/* @__PURE__ */ (0, I.jsx)(Q, {
				contour: "guard",
				depth: .035,
				bevel: .012,
				finish: "trim"
			}),
			/* @__PURE__ */ (0, I.jsx)(Q, {
				contour: "trigger",
				depth: .033,
				bevel: .009,
				finish: "hot"
			}),
			/* @__PURE__ */ (0, I.jsx)(Q, {
				contour: "grip",
				depth: .077,
				bevel: .016,
				finish: "trim"
			}),
			[-1, 1].map((e) => /* @__PURE__ */ (0, I.jsx)(Q, {
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
			].map((e) => /* @__PURE__ */ (0, I.jsx)(S, {
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
				children: /* @__PURE__ */ (0, I.jsx)(U, { kind: "chassis" })
			}, e)),
			/* @__PURE__ */ (0, I.jsx)(Q, {
				contour: "heel",
				depth: .105,
				bevel: .017,
				finish: "armor"
			}),
			/* @__PURE__ */ (0, I.jsx)(S, {
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
				children: /* @__PURE__ */ (0, I.jsx)(U, { kind: "energy" })
			})
		]
	});
}
//#endregion
//#region packages/walk-laser/src/laser-gun/BlasterGlove.tsx
function Ge() {
	return /* @__PURE__ */ (0, I.jsxs)("group", {
		name: "blaster-gloved-hand",
		children: [
			/* @__PURE__ */ (0, I.jsxs)("group", {
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
					/* @__PURE__ */ (0, I.jsxs)("mesh", {
						scale: [
							.066,
							.13,
							.067
						],
						children: [/* @__PURE__ */ (0, I.jsx)("sphereGeometry", { args: [
							1,
							24,
							16
						] }), /* @__PURE__ */ (0, I.jsx)(U, { kind: "grip" })]
					}),
					/* @__PURE__ */ (0, I.jsx)(S, {
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
						children: /* @__PURE__ */ (0, I.jsx)(U, { kind: "armor" })
					}),
					/* @__PURE__ */ (0, I.jsx)(S, {
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
						children: /* @__PURE__ */ (0, I.jsx)(U, { kind: "trim" })
					}),
					/* @__PURE__ */ (0, I.jsx)(S, {
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
						children: /* @__PURE__ */ (0, I.jsx)(U, { kind: "energy" })
					})
				]
			}),
			/* @__PURE__ */ (0, I.jsxs)("mesh", {
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
				children: [/* @__PURE__ */ (0, I.jsx)("sphereGeometry", { args: [
					1,
					24,
					16
				] }), /* @__PURE__ */ (0, I.jsx)(U, { kind: "grip" })]
			}),
			/* @__PURE__ */ (0, I.jsx)(S, {
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
				children: /* @__PURE__ */ (0, I.jsx)(U, { kind: "armor" })
			}),
			[
				0,
				1,
				2
			].map((e) => /* @__PURE__ */ (0, I.jsxs)("group", {
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
				children: [/* @__PURE__ */ (0, I.jsx)(S, {
					args: [
						.137,
						.032,
						.063
					],
					radius: .015,
					children: /* @__PURE__ */ (0, I.jsx)(U, { kind: "grip" })
				}), /* @__PURE__ */ (0, I.jsx)(S, {
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
					children: /* @__PURE__ */ (0, I.jsx)(U, { kind: "armor" })
				})]
			}, e)),
			/* @__PURE__ */ (0, I.jsx)(S, {
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
				children: /* @__PURE__ */ (0, I.jsx)(U, { kind: "grip" })
			}),
			/* @__PURE__ */ (0, I.jsxs)("mesh", {
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
				children: [/* @__PURE__ */ (0, I.jsx)("sphereGeometry", { args: [
					1,
					20,
					12
				] }), /* @__PURE__ */ (0, I.jsx)(U, { kind: "grip" })]
			})
		]
	});
}
//#endregion
//#region packages/walk-laser/src/LaserGun.tsx
function Ke({ muzzleRef: e, shotId: t = 0 }) {
	return /* @__PURE__ */ (0, I.jsxs)("group", {
		name: "cartoon-laser-gun",
		userData: { walkToolVisual: !0 },
		rotation: [
			0,
			.25,
			-.055
		],
		children: [
			/* @__PURE__ */ (0, I.jsx)(Be, {}),
			/* @__PURE__ */ (0, I.jsx)(Ue, {
				muzzleRef: e,
				shotId: t
			}),
			/* @__PURE__ */ (0, I.jsx)(We, {}),
			/* @__PURE__ */ (0, I.jsx)(Ge, {})
		]
	});
}
//#endregion
//#region packages/walk-laser/src/useLaserShots.ts
function qe(e, n, r) {
	let [i, a] = (0, k.useState)([]), [o, s] = (0, k.useState)({ id: 0 }), c = (0, k.useRef)(0), l = (0, k.useRef)(0);
	(0, k.useEffect)(() => {
		if (!i.length) return;
		let e = window.setTimeout(() => a((e) => e.filter((e) => performance.now() - (e.createdAt ?? 0) < 3400)), 250);
		return () => window.clearTimeout(e);
	}, [i]);
	let u = (0, k.useCallback)((i) => {
		let o = ++c.current;
		if (s({
			id: o,
			...i.color === void 0 ? {} : { color: i.color }
		}), r) return;
		e.current?.updateWorldMatrix(!0, !1);
		let u = e.current?.getWorldPosition(new t()) ?? n.position.clone(), d = {
			...i,
			start: u,
			id: o,
			createdAt: performance.now()
		};
		a((e) => [...e.slice(-11), d]), l.current = .055;
	}, [
		e,
		n,
		r
	]);
	return {
		shots: i,
		triggerId: o.id,
		triggerColor: o.color,
		recoil: l,
		emitShot: u
	};
}
//#endregion
//#region packages/walk-laser/src/ElectricArc.tsx
function Je({ start: e, end: n, duration: i, color: a }) {
	let o = (0, k.useRef)(null), s = (0, k.useRef)(0), u = (0, k.useMemo)(() => {
		let e = new r();
		return e.setAttribute("position", new c(/* @__PURE__ */ new Float32Array(576), 3)), e.setAttribute("normal", new c(/* @__PURE__ */ new Float32Array(576), 3)), e;
	}, []);
	(0, k.useEffect)(() => () => u.dispose(), [u]);
	let d = (0, k.useMemo)(() => ({
		direction: new t(),
		side: new t(),
		up: new t(),
		view: new t(),
		a: new t(),
		b: new t()
	}), []);
	return E(({ camera: t }, r) => {
		if (s.current += r, !o.current || (o.current.visible = s.current < i, !o.current.visible)) return;
		let { direction: a, side: c, up: l, view: f, a: p, b: m } = d;
		a.subVectors(n, e).normalize(), f.subVectors(t.position, e).normalize(), c.crossVectors(a, f), c.lengthSq() < .001 && c.set(1, 0, 0).applyQuaternion(t.quaternion), c.normalize(), l.crossVectors(a, c).normalize();
		let h = u.attributes.position, g = Math.floor(s.current * 30), _ = (e) => Math.sin(e * 127.1 + g * 39.7) * Math.cos(e * 71.3 + g * 11.9), v = (t, r) => r.copy(e).lerp(n, t / 24).addScaledVector(c, _(t) * .095 * Math.sin(Math.PI * t / 24)).addScaledVector(l, _(t + 30) * .065 * Math.sin(Math.PI * t / 24)), y = .009 + .005 * (1 - s.current / i);
		for (let e = 0; e < 32; e++) e < 24 ? (v(e, p), v(e + 1, m)) : (v(3 + (e - 24) * 2, p), m.copy(p).addScaledVector(c, _(e + 80) * .24).addScaledVector(l, _(e + 90) * .2).addScaledVector(a, .13)), [
			[p, -1],
			[p, 1],
			[m, -1],
			[m, -1],
			[p, 1],
			[m, 1]
		].forEach(([t, n], r) => {
			let i = t, a = n * y;
			h.setXYZ(e * 6 + r, i.x + c.x * a, i.y + c.y * a, i.z + c.z * a);
		});
		h.needsUpdate = !0, u.computeVertexNormals();
	}), /* @__PURE__ */ (0, I.jsx)("mesh", {
		name: "laser-electric-arc",
		ref: o,
		geometry: u,
		frustumCulled: !1,
		raycast: () => void 0,
		children: /* @__PURE__ */ (0, I.jsx)(l, {
			color: a ?? "#9beaff",
			emissive: a ?? "#219bff",
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
function Ye({ delay: e, lifetime: t }) {
	let n = (0, k.useRef)(null), r = (0, k.useRef)(0);
	return E((i, a) => {
		if (r.current += a, !n.current) return;
		let o = r.current - e;
		n.current.visible = o >= 0 && o < t;
		for (let e of n.current.children) {
			let n = e.material;
			n.opacity = e.userData.char ? .62 * Math.min(1, (t - o) / 1.5) : Math.max(0, 1 - o / 1.5) * (.7 + .3 * Math.sin(o * 32));
		}
	}), /* @__PURE__ */ (0, I.jsxs)("group", {
		ref: n,
		name: "electric-scorch",
		visible: !1,
		children: [/* @__PURE__ */ (0, I.jsxs)("mesh", {
			userData: { char: !0 },
			scale: [
				1,
				.83,
				1
			],
			raycast: () => void 0,
			children: [/* @__PURE__ */ (0, I.jsx)("circleGeometry", { args: [.115, 11] }), /* @__PURE__ */ (0, I.jsx)(l, {
				color: "#272b43",
				transparent: !0,
				opacity: .62,
				depthWrite: !1,
				polygonOffset: !0,
				polygonOffsetFactor: -2
			})]
		}), Array.from({ length: 9 }, (e, t) => {
			let n = t * Math.PI * 2 / 9;
			return /* @__PURE__ */ (0, I.jsxs)("mesh", {
				position: [
					Math.cos(n) * .055,
					Math.sin(n) * .055,
					.001
				],
				rotation: [
					0,
					0,
					n
				],
				raycast: () => void 0,
				children: [/* @__PURE__ */ (0, I.jsx)("planeGeometry", { args: [.05 + t % 3 * .016, .005] }), /* @__PURE__ */ (0, I.jsx)(l, {
					color: "#b6eeff",
					emissive: "#188fff",
					emissiveIntensity: 4,
					toneMapped: !1,
					transparent: !0,
					blending: 2,
					depthWrite: !1
				})]
			}, t);
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
	let n = (0, k.useRef)(null), r = (0, k.useRef)(null), i = (0, k.useRef)(null), a = (0, k.useRef)(0), o = (0, k.useMemo)(() => {
		let n = e.end.clone().sub(e.start), r = n.length();
		return n.normalize(), {
			distance: r,
			direction: n,
			rotation: new u().setFromUnitVectors(new t(0, 0, 1), n)
		};
	}, [e]);
	E((t, s) => {
		a.current += s;
		let c = Qe(o.distance, a.current);
		if (n.current && (n.current.visible = c.traveling, n.current.position.copy(e.start).addScaledVector(o.direction, (c.head + c.tail) / 2), n.current.scale.set(1, 1, Math.max(.001, c.head - c.tail))), r.current) {
			r.current.visible = e.hit && c.impact;
			let t = .5 + c.impactProgress * 2;
			r.current.scale.setScalar(t), i.current && i.current.scale.setScalar(1 + c.impactProgress);
			for (let e of r.current.children) e.isMesh && (e.material.opacity = (e.userData.glowOpacity ?? 1) * (1 - c.impactProgress) ** 2);
		}
	});
	let s = new u().setFromUnitVectors(new t(0, 0, 1), e.normal ?? o.direction.clone().negate()), c = e.end.clone().addScaledVector(e.normal ?? o.direction.clone().negate(), .004);
	return /* @__PURE__ */ (0, I.jsxs)("group", {
		userData: { walkToolVisual: !0 },
		children: [
			/* @__PURE__ */ (0, I.jsx)(Je, {
				start: e.start,
				end: e.end,
				duration: .3,
				color: e.color
			}),
			e.hit && e.scorch !== !1 && /* @__PURE__ */ (0, I.jsx)("group", {
				position: c.toArray(),
				quaternion: s.toArray(),
				children: /* @__PURE__ */ (0, I.jsx)(Ye, {
					delay: 0,
					lifetime: 3.2
				})
			}),
			/* @__PURE__ */ (0, I.jsxs)("group", {
				name: "laser-pulse",
				ref: n,
				quaternion: o.rotation.toArray(),
				visible: !1,
				children: [/* @__PURE__ */ (0, I.jsxs)("mesh", {
					raycast: $,
					scale: [
						.02,
						.02,
						.5
					],
					children: [/* @__PURE__ */ (0, I.jsx)("sphereGeometry", { args: [
						1,
						8,
						6
					] }), /* @__PURE__ */ (0, I.jsx)(l, {
						color: "#f5ffff",
						emissive: e.color ?? "#caffff",
						emissiveIntensity: 4,
						toneMapped: !1,
						transparent: !0,
						blending: 2,
						depthWrite: !1
					})]
				}), /* @__PURE__ */ (0, I.jsxs)("mesh", {
					raycast: $,
					scale: [
						.06,
						.06,
						.55
					],
					children: [/* @__PURE__ */ (0, I.jsx)("sphereGeometry", { args: [
						1,
						8,
						6
					] }), /* @__PURE__ */ (0, I.jsx)(l, {
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
			/* @__PURE__ */ (0, I.jsxs)("group", {
				name: "laser-impact",
				ref: r,
				position: c.toArray(),
				quaternion: s.toArray(),
				visible: !1,
				children: [
					/* @__PURE__ */ (0, I.jsxs)("mesh", {
						raycast: $,
						children: [/* @__PURE__ */ (0, I.jsx)("icosahedronGeometry", { args: [.045, 1] }), /* @__PURE__ */ (0, I.jsx)(l, {
							color: e.color ?? "#d5f6ff",
							emissive: e.color ?? "#168fff",
							emissiveIntensity: 3,
							toneMapped: !1,
							transparent: !0,
							depthWrite: !1,
							blending: 2
						})]
					}),
					/* @__PURE__ */ (0, I.jsxs)("mesh", {
						ref: i,
						raycast: $,
						children: [/* @__PURE__ */ (0, I.jsx)("torusGeometry", { args: [
							.052,
							.006,
							5,
							20
						] }), /* @__PURE__ */ (0, I.jsx)(l, {
							color: e.color ?? "#6dcaff",
							emissive: e.color ?? "#6dcaff",
							emissiveIntensity: 2,
							toneMapped: !1,
							transparent: !0,
							depthWrite: !1,
							blending: 2
						})]
					}),
					/* @__PURE__ */ (0, I.jsxs)("mesh", {
						userData: { glowOpacity: .24 },
						raycast: $,
						children: [/* @__PURE__ */ (0, I.jsx)("sphereGeometry", { args: [
							.09,
							8,
							6
						] }), /* @__PURE__ */ (0, I.jsx)(l, {
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
					Array.from({ length: 7 }, (t, n) => {
						let r = n * Math.PI * 2 / 7;
						return /* @__PURE__ */ (0, I.jsxs)("mesh", {
							position: [
								Math.cos(r) * .07,
								Math.sin(r) * .07,
								-.008
							],
							rotation: [
								0,
								0,
								r - Math.PI / 2
							],
							raycast: $,
							children: [/* @__PURE__ */ (0, I.jsx)("coneGeometry", { args: [
								.009,
								.06,
								4
							] }), /* @__PURE__ */ (0, I.jsx)(l, {
								color: e.color ?? "#d5f6ff",
								emissive: e.color ?? "#218fff",
								emissiveIntensity: 2,
								toneMapped: !1,
								transparent: !0,
								depthWrite: !1,
								blending: 2
							})]
						}, n);
					})
				]
			})
		]
	});
}
//#endregion
//#region packages/walk-laser/src/LaserShotWarmup.tsx
function et() {
	let { gl: e, camera: r, scene: a } = s(), o = (0, k.useMemo)(() => new d(), []), c = (0, k.useMemo)(() => ({
		id: 0,
		start: new t(),
		end: new t(0, 0, -1),
		hit: !0
	}), []);
	return (0, k.useEffect)(() => {
		e.compileAsync(o, r, a);
		let t = new i(1, 1), n = e.getRenderTarget();
		try {
			e.setRenderTarget(t), e.compileAsync(o, r, a);
		} finally {
			e.setRenderTarget(n), t.dispose();
		}
	}, [
		e,
		r,
		a,
		o
	]), n(/* @__PURE__ */ (0, I.jsx)($e, { shot: c }), o);
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
		shade: t === F.gold ? "#bd7322" : "#279fc7",
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
	return /* @__PURE__ */ (0, I.jsx)("div", {
		ref: n,
		className: "comic-pew-anchor",
		"aria-hidden": "true",
		children: e > 0 && /* @__PURE__ */ (0, I.jsx)("div", {
			className: "comic-pew",
			"data-shot": e,
			"data-reduced-motion": r,
			style: a,
			children: /* @__PURE__ */ (0, I.jsxs)("svg", {
				viewBox: "-18 -20 316 174",
				className: "comic-pew__art",
				focusable: "false",
				children: [/* @__PURE__ */ (0, I.jsx)("title", { children: i.label }), /* @__PURE__ */ (0, I.jsxs)("g", {
					stroke: "#202036",
					strokeWidth: "4",
					strokeLinejoin: "round",
					children: [
						/* @__PURE__ */ (0, I.jsxs)("g", {
							className: "comic-pew__burst",
							children: [
								/* @__PURE__ */ (0, I.jsx)("polygon", {
									points: i.points,
									fill: "#202036",
									transform: "translate(4 7)"
								}),
								/* @__PURE__ */ (0, I.jsx)("polygon", {
									points: i.points,
									fill: i.paper
								}),
								/* @__PURE__ */ (0, I.jsx)("path", {
									d: "M38 81L66 91L59 99L111 91L142 108L154 92L202 94L219 77L247 70L225 97L201 101L185 117L151 104L130 115L107 101L73 108L73 94Z",
									fill: i.shade,
									stroke: "none"
								}),
								/* @__PURE__ */ (0, I.jsx)("path", {
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
								].map((e) => /* @__PURE__ */ (0, I.jsx)("circle", {
									cx: 81 + e * 18,
									cy: 99 + e % 2 * 3,
									r: "2",
									fill: "#202036",
									stroke: "none",
									opacity: ".35"
								}, e))
							]
						}),
						/* @__PURE__ */ (0, I.jsxs)("g", {
							className: "comic-pew__rays",
							fill: i.paper,
							children: [/* @__PURE__ */ (0, I.jsx)("path", { d: "M15 30L-9 15L3 37Z M48 9L43 -10L59 13Z M263 21L285 4L277 29Z M268 93L290 101L267 104Z" }), /* @__PURE__ */ (0, I.jsx)("path", {
								d: "M6 74L-9 82M242 121L253 132",
								fill: "none",
								strokeWidth: "5",
								strokeLinecap: "round"
							})]
						}),
						/* @__PURE__ */ (0, I.jsxs)("g", {
							className: "comic-pew__letters",
							transform: "translate(10 0) skewX(-10)",
							children: [
								/* @__PURE__ */ (0, I.jsx)("path", {
									d: i.letters,
									transform: "translate(2 5)",
									fill: "#202036",
									strokeWidth: "7",
									fillRule: "evenodd"
								}),
								/* @__PURE__ */ (0, I.jsx)("path", {
									d: i.letters,
									fill: i.ink,
									strokeWidth: "5",
									fillRule: "evenodd"
								}),
								/* @__PURE__ */ (0, I.jsx)("path", {
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
	let n = (0, k.useRef)(null), r = (0, k.useMemo)(() => new t(), []);
	return E(({ camera: t, size: i }) => {
		if (!n.current || !e.current) return;
		e.current.updateWorldMatrix(!0, !1), e.current.getWorldPosition(r).project(t);
		let a = Math.min(250, Math.max(148, i.width * .23)) * .7, o = Math.max(a / 2 + 12, Math.min(i.width - a / 2 - 12, (r.x + 1) * i.width / 2)), s = Math.max(a * .6 + 16, (1 - r.y) * i.height / 2 - 14);
		n.current.style.transform = `translate3d(${o}px, ${s}px, 0)`, n.current.style.width = `${a}px`;
	}, 1), n;
}
//#endregion
//#region packages/walk-laser/src/LaserWalkTool.tsx
function ct({ enabled: e, pointerLocked: r, coarsePointer: i, reducedMotion: o, navigation: c, canActivateTarget: l, activateTarget: u }) {
	let { camera: f, scene: p, gl: m } = s(), h = a(), g = (0, k.useRef)(null), _ = (0, k.useRef)(null), y = (0, k.useRef)(null), b = (0, k.useMemo)(() => new d(), []);
	(0, k.useEffect)(() => {
		m.compileAsync(b, f);
	}, [
		m,
		b,
		f
	]);
	let { shots: x, triggerId: ee, triggerColor: te, recoil: S, emitShot: C } = qe(_, f, o), ne = st(_), ie = x.at(-1), [T, D] = (0, k.useState)("blue"), [oe, A] = (0, k.useState)(null), j = (0, k.useRef)(null), M = (0, k.useRef)({
		previous: f.position.clone(),
		speed: 0,
		phase: 0,
		time: 0
	}), N = (0, k.useMemo)(() => tt(), []), P = (0, k.useMemo)(() => new w(), []), F = (0, k.useMemo)(() => new v(), []), L = e && (i || r), R = (0, k.useRef)(L);
	R.current = L, E((e, t) => {
		let n = M.current, r = Math.hypot(f.position.x - n.previous.x, f.position.z - n.previous.z), i = L && t > 0 && r < .5 ? r / t : 0;
		n.previous.copy(f.position), n.speed += (Math.min(i, 5) - n.speed) * (1 - Math.exp(-10 * t)), n.time += t, n.phase += t * (7 + n.speed * 2.5);
		let a = o ? 0 : Math.min(n.speed / 2, 1.6), s = o ? 0 : Math.sin(n.time * 1.6) * .0015 + Math.sin(n.phase) * .004 * a, c = o ? 0 : Math.cos(n.time * 2) * .0015 + Math.cos(n.phase * 2) * .003 * a;
		if (g.current) {
			S.current *= Math.exp(-18 * t);
			let e = f, n = 1.2 * Math.tan(e.fov * Math.PI / 360), r = n * e.aspect;
			g.current.scale.setScalar(Math.min(.58, r * .56)), g.current.position.set(r * .29 + s, -n * .19 + c - a * .004, -.6 + (o ? 0 : S.current)), g.current.position.applyQuaternion(f.quaternion).add(f.position), g.current.quaternion.copy(f.quaternion), o || (g.current.rotateX(S.current * .9), g.current.rotateZ(s * 2));
		}
		if (!L) {
			j.current !== null && (j.current = null, A(null));
			return;
		}
		P.setFromCamera(F, f);
		let { target: u } = O(P, p), d = u && l(u) ? u.label : null;
		d !== j.current && (j.current = d, A(d));
	}), E(({ gl: t }) => {
		if (!e) return;
		let n = t.autoClear;
		try {
			t.autoClear = !1, t.clearDepth(), t.render(b, f);
		} finally {
			t.autoClear = n;
		}
	}, 2);
	let z = (0, k.useCallback)(() => {
		R.current && N(performance.now(), async () => {
			p.updateMatrixWorld(!0), P.setFromCamera(F, f);
			let { hit: e, target: n } = O(P, p), r = y.current?.remove(P.ray, e?.distance ?? 30);
			if (r) {
				C({
					end: r.point,
					normal: r.normal,
					hit: !0,
					scorch: !1
				});
				return;
			}
			let i = e?.point.clone() ?? P.ray.at(30, new t()), a = e?.face?.normal.clone().applyMatrix3(new re().getNormalMatrix(e.object.matrixWorld)).normalize();
			a && a.dot(P.ray.direction) > 0 && a.negate(), C({
				end: i,
				hit: !!e,
				...a === void 0 ? {} : { normal: a }
			}), n && await u(n);
		});
	}, [
		u,
		f,
		F,
		N,
		P,
		C,
		p
	]);
	(0, k.useEffect)(() => {
		let e = (e) => {
			!R.current || i || e.button !== 0 || !h.root.pointerLockElement || (e.preventDefault(), z());
		}, t = (e) => {
			!R.current || e.code !== "KeyF" || e.repeat || e.ctrlKey || e.metaKey || e.altKey || e.target instanceof HTMLElement && e.target.closest("input, textarea, select, [contenteditable=true]") || (e.preventDefault(), z());
		};
		return h.events.addEventListener("pointerdown", e), h.events.addEventListener("keydown", t), () => {
			h.events.removeEventListener("pointerdown", e), h.events.removeEventListener("keydown", t);
		};
	}, [
		i,
		h.events,
		h.root,
		z
	]);
	let se = (0, k.useCallback)((e, t, n, r) => {
		D(r), C({
			end: e,
			normal: t,
			color: n,
			hit: !0,
			scorch: !1
		});
	}, [C]);
	return /* @__PURE__ */ (0, I.jsxs)(I.Fragment, { children: [
		/* @__PURE__ */ (0, I.jsx)(Ae, {
			active: L,
			navigation: c,
			reducedMotion: o,
			onPlaced: se,
			onNextColor: D,
			controls: y
		}),
		n(/* @__PURE__ */ (0, I.jsxs)(I.Fragment, { children: [
			/* @__PURE__ */ (0, I.jsx)("ambientLight", { intensity: 1.1 }),
			/* @__PURE__ */ (0, I.jsx)("directionalLight", {
				position: [
					-2,
					4,
					3
				],
				intensity: 2.2
			}),
			/* @__PURE__ */ (0, I.jsx)("group", {
				ref: g,
				children: /* @__PURE__ */ (0, I.jsx)(Ke, {
					muzzleRef: _,
					shotId: ie?.id ?? 0
				})
			})
		] }), b),
		!o && /* @__PURE__ */ (0, I.jsx)(et, {}),
		x.map((e) => /* @__PURE__ */ (0, I.jsx)($e, { shot: e }, e.id)),
		/* @__PURE__ */ (0, I.jsx)(ae, {
			onOcclude: () => void 0,
			fullscreen: !0,
			calculatePosition: (e, t, n) => [n.width / 2, n.height / 2],
			zIndexRange: [10, 0],
			style: { pointerEvents: "none" },
			children: e && /* @__PURE__ */ (0, I.jsxs)("div", {
				className: "walk-laser",
				"data-ready": L,
				children: [
					/* @__PURE__ */ (0, I.jsx)(Pe, { coarsePointer: i }),
					/* @__PURE__ */ (0, I.jsx)(ot, {
						shotId: ee,
						shotColor: te,
						anchor: ne,
						reducedMotion: o
					}),
					/* @__PURE__ */ (0, I.jsx)(Ie, {
						target: !!oe,
						desktop: !i,
						ready: L,
						nextPortal: T
					}),
					i && /* @__PURE__ */ (0, I.jsx)(Fe, {
						ready: L,
						nextPortal: T,
						zap: z,
						portal: () => y.current?.place()
					})
				]
			})
		})
	] });
}
//#endregion
export { ct as LaserWalkTool };
