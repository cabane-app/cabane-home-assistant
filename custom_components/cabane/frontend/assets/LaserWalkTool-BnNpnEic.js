import { r as e } from "./rolldown-runtime-B0aSnxlc.js";
import { Ba as t, Bi as n, Ea as r, Fa as i, Fi as a, Ia as o, Ii as s, In as c, Ji as l, La as u, Mi as d, Pi as f, Qi as p, Ra as m, Sa as h, Ua as g, Vi as _, Wa as v, Xi as y, _a as b, a as x, ai as S, da as ee, di as te, ei as ne, ga as C, gr as w, ji as T, ka as re, la as ie, si as E, t as ae, ua as D, va as O, wa as oe, xa as k } from "./LaserIcon-fW9B5Wd7.js";
//#region packages/engine/src/walk-tools/raycast-walk-scene.ts
function A(e, t) {
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
var j = /* @__PURE__ */ e(v(), 1), M = .58, N = 1.1, P = 1.18, F = .72, I = (e) => e === "blue" ? "gold" : "blue", L = {
	blue: "#42cfff",
	gold: "#efa632"
}, R = g();
function z({ veil: e, iris: t }) {
	return /* @__PURE__ */ (0, R.jsx)(te, {
		fullscreen: !0,
		calculatePosition: (e, t, n) => [n.width / 2, n.height / 2],
		zIndexRange: [20, 0],
		style: { pointerEvents: "none" },
		children: /* @__PURE__ */ (0, R.jsx)("div", {
			ref: e,
			className: "walk-portal-transit",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, R.jsx)("div", {
				ref: t,
				className: "walk-portal-transit__iris"
			})
		})
	});
}
//#endregion
//#region packages/walk-laser/src/portals/usePortalAppearance.ts
function B(e, t, n = !1, r) {
	let i = (0, j.useRef)(null), o = (0, j.useRef)(null), s = (0, j.useRef)(0), c = (0, j.useRef)(!1);
	return (0, j.useLayoutEffect)(() => {
		s.current = 0, c.current = !1, i.current?.scale.setScalar(n || t ? 1 : 0), o.current && (o.current.visible = !1);
	}, [
		e,
		t,
		n
	]), a((e, a) => {
		if (s.current += a, n) {
			let e = t ? .12 : .4, n = Math.min(1, s.current / e), a = t ? 1 : (1 - n ** 3) * (1 + .12 * Math.sin(n * Math.PI));
			i.current?.scale.setScalar(Math.max(0, a)), o.current && (o.current.visible = !t && n < 1, o.current.scale.setScalar(1.3 - n * .5), o.current.material.opacity = .65 * (1 - n)), n === 1 && !c.current && (c.current = !0, r?.());
			return;
		}
		let l = Math.min(1, s.current / .55) - 1, u = 1 + 2.4 * l ** 3 + 1.4 * l ** 2;
		i.current?.scale.setScalar(t ? 1 : Math.max(0, u)), o.current && (o.current.visible = !t && s.current < .8, o.current.scale.setScalar(.7 + Math.min(1, s.current / .8) * .75), o.current.material.opacity = .7 * Math.max(0, 1 - s.current / .8) ** 2);
	}), {
		opening: i,
		ripple: o
	};
}
//#endregion
//#region packages/walk-laser/src/portals/portal-view-camera.ts
function se() {
	let e = new b(), t = new D(), n = new D(), r = new D(), i = new D().makeRotationY(Math.PI), a = new o(1, 1, 1), s = new o(), c = new o(), l = new y(), d = new D(), f = new re(new o(), N * 1.15), p = new O(), m = new u(), h = new u();
	return {
		camera: e,
		update(o, u, g) {
			if (!o.isPerspectiveCamera || (o.updateWorldMatrix(!0, !1), s.setFromMatrixPosition(o.matrixWorld), c.subVectors(s, u.center).dot(u.normal) <= .01) || (d.multiplyMatrices(o.projectionMatrix, o.matrixWorldInverse), l.setFromProjectionMatrix(d), f.center.copy(u.center), !l.intersectsSphere(f))) return !1;
			t.compose(u.center, u.rotation, a), n.compose(g.center, g.rotation, a), r.copy(n).multiply(i).multiply(t.invert()).multiply(o.matrixWorld), r.decompose(e.position, e.quaternion, a), a.set(1, 1, 1), e.near = o.near, e.far = o.far, e.layers.mask = o.layers.mask, e.updateMatrixWorld(!0), e.projectionMatrix.copy(o.projectionMatrix), p.setFromNormalAndCoplanarPoint(g.normal, g.center).applyMatrix4(e.matrixWorldInverse), m.set(p.normal.x, p.normal.y, p.normal.z, p.constant);
			let _ = e.projectionMatrix.elements;
			h.set((Math.sign(m.x) + _[8]) / _[0], (Math.sign(m.y) + _[9]) / _[5], -1, (1 + _[10]) / _[14]);
			let v = m.dot(h);
			return v <= 1e-6 ? !1 : (m.multiplyScalar(2 / v), _[2] = m.x, _[6] = m.y, _[10] = m.z + 1, _[14] = m.w, e.projectionMatrixInverse.copy(e.projectionMatrix).invert(), !0);
		}
	};
}
//#endregion
//#region packages/walk-laser/src/portals/portal-view-renderer.ts
function ce() {
	let e = new m(1, 1, {
		type: p,
		depthBuffer: !0
	});
	e.texture.name = "portal-destination-view";
	let t = new i(), n = new u(), r = new u(), a = [];
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
function le(e, t) {
	let n = (0, j.useRef)(null), r = (0, j.useMemo)(se, []), i = (0, j.useMemo)(ce, []);
	return (0, j.useEffect)(() => () => i.dispose(), [i]), a(({ camera: a, scene: o, gl: s }) => {
		n.current && (n.current.visible = !1, r.update(a, e, t) && (i.render(s, o, r.camera, t), n.current.visible = !0));
	}, .5), {
		surface: n,
		texture: i.target.texture
	};
}
//#endregion
//#region packages/walk-laser/src/portals/PortalView.tsx
function ue({ entry: e, exit: t }) {
	let { surface: n, texture: r } = le(e, t), i = (0, j.useMemo)(() => ({ destination: { value: r } }), [r]);
	return /* @__PURE__ */ (0, R.jsxs)("mesh", {
		ref: n,
		name: "portal-live-view",
		userData: { portalLiveView: !0 },
		position: [
			0,
			0,
			.002
		],
		raycast: () => void 0,
		children: [/* @__PURE__ */ (0, R.jsx)("circleGeometry", { args: [1, 64] }), /* @__PURE__ */ (0, R.jsx)("shaderMaterial", {
			uniforms: i,
			vertexShader: "varying vec4 portalClip;\n        void main() {\n          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n          portalClip = gl_Position;\n        }",
			fragmentShader: "uniform sampler2D destination;\n        varying vec4 portalClip;\n        void main() {\n          vec2 uv = portalClip.xy / portalClip.w * 0.5 + 0.5;\n          gl_FragColor = vec4(texture2D(destination, uv).rgb, 1.0);\n          #include <tonemapping_fragment>\n          #include <colorspace_fragment>\n        }"
		})]
	});
}
//#endregion
//#region packages/walk-laser/src/portals/PortalSurface.tsx
var V = () => void 0;
function de({ anchor: e, color: t, exit: n, reducedMotion: r, closing: i = !1, onClosed: o }) {
	let s = !!n, c = (0, j.useRef)(null), { opening: l, ripple: u } = B(e, r, i, o), d = L[t];
	return a((e, n) => {
		c.current && !r && (c.current.rotation.z += n * (t === "blue" ? .3 : -.3));
	}), /* @__PURE__ */ (0, R.jsx)("group", {
		name: i ? `gun-portal-closing-${t}` : `gun-portal-${t}`,
		position: e.center.toArray(),
		quaternion: e.rotation.toArray(),
		userData: {
			walkToolVisual: !0,
			portalAnchor: e
		},
		children: /* @__PURE__ */ (0, R.jsx)("group", {
			ref: l,
			name: "portal-opening",
			children: /* @__PURE__ */ (0, R.jsxs)("group", {
				scale: [
					M,
					N,
					1
				],
				children: [
					/* @__PURE__ */ (0, R.jsxs)("mesh", {
						raycast: V,
						children: [/* @__PURE__ */ (0, R.jsx)("circleGeometry", { args: [1, 64] }), /* @__PURE__ */ (0, R.jsx)(E, {
							color: t === "blue" ? "#102d49" : "#443024",
							emissive: d,
							emissiveIntensity: s ? .12 : .025,
							side: 2
						})]
					}),
					n && /* @__PURE__ */ (0, R.jsx)(ue, {
						entry: e,
						exit: n
					}),
					/* @__PURE__ */ (0, R.jsxs)("mesh", {
						raycast: V,
						position: [
							0,
							0,
							.012
						],
						children: [/* @__PURE__ */ (0, R.jsx)("torusGeometry", { args: [
							1,
							.045,
							8,
							64
						] }), /* @__PURE__ */ (0, R.jsx)(E, {
							color: d,
							emissive: d,
							emissiveIntensity: s ? 1.5 : .45,
							toneMapped: !1
						})]
					}),
					/* @__PURE__ */ (0, R.jsxs)("mesh", {
						raycast: V,
						position: [
							0,
							0,
							.014
						],
						children: [/* @__PURE__ */ (0, R.jsx)("torusGeometry", { args: [
							.94,
							.012,
							6,
							64
						] }), /* @__PURE__ */ (0, R.jsx)(E, {
							color: "#fff0d5",
							emissive: d,
							emissiveIntensity: 1,
							toneMapped: !1
						})]
					}),
					/* @__PURE__ */ (0, R.jsxs)("mesh", {
						ref: u,
						name: "portal-arrival-ripple",
						position: [
							0,
							0,
							.028
						],
						raycast: V,
						visible: !1,
						children: [/* @__PURE__ */ (0, R.jsx)("torusGeometry", { args: [
							1,
							.025,
							6,
							64
						] }), /* @__PURE__ */ (0, R.jsx)(E, {
							color: d,
							emissive: d,
							emissiveIntensity: 2,
							transparent: !0,
							opacity: 0,
							depthWrite: !1,
							toneMapped: !1
						})]
					}),
					/* @__PURE__ */ (0, R.jsx)("group", {
						ref: c,
						position: [
							0,
							0,
							.022
						],
						visible: !s,
						children: [
							.36,
							.61,
							.82
						].map((e, t) => /* @__PURE__ */ (0, R.jsxs)("mesh", {
							rotation: [
								0,
								0,
								t * 2.1
							],
							raycast: V,
							children: [/* @__PURE__ */ (0, R.jsx)("torusGeometry", { args: [
								e,
								.012,
								6,
								32,
								Math.PI * 1.15
							] }), /* @__PURE__ */ (0, R.jsx)(E, {
								color: d,
								emissive: d,
								emissiveIntensity: .7,
								transparent: !0,
								opacity: s ? .55 : .16,
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
		for (let r of t) ee.prototype.raycast.call(r, e, n);
		return n.sort((e, t) => e.distance - t.distance), { hit: n[0] ?? null };
	};
}
//#endregion
//#region packages/walk-laser/src/portals/portal-placement.ts
var pe = (e) => e.face?.normal.clone().applyMatrix3(new ie().getNormalMatrix(e.object.matrixWorld)).normalize();
function me(e, t, n, r = A) {
	let i = pe(e);
	if (!i || Math.abs(i.y) > .05 && i.y < .98) return null;
	for (let t = e.object; t; t = t.parent) if (t.userData.walkDeviceInteraction || t.userData.walkCollider) return null;
	let a = i.y > .98;
	i.set(i.x, +!!a, i.z).normalize();
	let s = e.point.clone().addScaledVector(i, a ? 0 : F);
	a || (s.y -= P);
	let c = n.resolveLanding(s);
	if (!c || a && Math.abs(c.elevation - e.point.y) > .12) return null;
	let l = e.point.clone();
	a || (l.y = c.elevation + P);
	let u = new k().setFromUnitVectors(new o(0, 0, 1), i), d = new h();
	for (let e = -1; e < 24; e++) {
		let n = e * Math.PI / 12, a = (e < 0 ? new o() : new o(Math.cos(n) * (M + .04), Math.sin(n) * (N + .04), 0)).applyQuaternion(u).add(l);
		d.set(a.clone().addScaledVector(i, .08), i.clone().negate()), d.far = .16;
		let s = r(d, t).hit;
		if (!s || Math.abs(s.point.clone().sub(a).dot(i)) > .025 || (pe(s)?.dot(i) ?? 0) < .98) return null;
	}
	return {
		center: l.addScaledVector(i, .018),
		normal: i,
		rotation: u,
		landing: c
	};
}
function he(e, t) {
	return e.center.distanceTo(t.center) < M * 2 + .18;
}
//#endregion
//#region packages/walk-laser/src/portals/portal-restoration.ts
function ge(e, t, n) {
	let r = {}, i = new h();
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
			let t = n[I(r)];
			return t && he(e, t) ? null : (n = {
				...n,
				[r]: e
			}, r = I(r), n);
		}
	};
}
//#endregion
//#region packages/walk-laser/src/portals/portal-traversal.ts
function H(e, t) {
	let n = t.clone();
	return n.y -= c - (e.normal.y > .98 ? 0 : P), n.sub(e.center).applyQuaternion(e.rotation.clone().invert());
}
function ve(e) {
	return (e.x / (M - .22)) ** 2 + (e.y / (N - .22)) ** 2 < 1;
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
			t && n[t] && H(n[t], r).length() > 1.4 && (t = null);
			for (let s of ["blue", "gold"]) {
				if (s === t) continue;
				let c = n[s], l = n[I(s)], u = H(c, r), d = H(c, o), f = u.z < d.z - 1e-4;
				if (!(c.normal.y > .98 ? !ve(d) || d.z > .25 && f : f && d.z > .32) || u.z < -.08 || u.z > .32 || !ve(u)) continue;
				let p = Math.atan2(-l.normal.x, -l.normal.z), m = Math.atan2(-c.normal.x, -c.normal.z), h = l.normal.y > .98 ? i.yaw : c.normal.y > .98 ? p : i.yaw + p - m + Math.PI;
				return a({
					landing: l.landing,
					facing: {
						yaw: Math.atan2(Math.sin(h), Math.cos(h)),
						pitch: i.pitch
					},
					entry: s,
					exit: I(s)
				}) ? (t = I(s), e = null, !0) : !1;
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
	let { camera: i } = s(), o = (0, j.useMemo)(be, []), c = (0, j.useRef)(null), l = (0, j.useRef)(null), u = (0, j.useRef)(null), d = (0, j.useCallback)(() => {
		if (u.current === null) return;
		let e = i;
		e.fov = u.current, e.updateProjectionMatrix(), u.current = null;
	}, [i]);
	(0, j.useEffect)(() => () => {
		o.cancel(), d();
	}, [o, d]);
	let f = (0, j.useCallback)((e) => o.start(e, t), [o, t]);
	return a((t, a) => {
		e || o.cancel();
		let s = o.advance(a, (e) => {
			let t = n.teleport(e.landing, e.facing);
			return t || r(), t;
		});
		if (c.current && (c.current.style.opacity = String(s.opacity), c.current.style.visibility = s.opacity > 0 ? "visible" : "hidden", c.current.style.setProperty("--portal-color", L[s.color])), l.current && (l.current.style.display = s.reduced ? "none" : "block", l.current.style.transform = `translate(-50%, -50%) scale(${s.ringScale})`), s.fovOffset > 0 && i.isPerspectiveCamera) {
			let e = i;
			u.current ??= e.fov, e.fov = u.current + s.fovOffset, e.updateProjectionMatrix();
		} else d();
	}), {
		transition: o,
		travel: f,
		veil: c,
		iris: l
	};
}
//#endregion
//#region packages/walk-laser/src/portals/usePortalInput.ts
function Se(e, t) {
	let n = w();
	(0, j.useEffect)(() => {
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
var Ce = "cabane.laser", U = (e) => !!e && typeof e == "object" && !Array.isArray(e), we = (e, t) => Array.isArray(e) && e.length === t && e.every((e) => typeof e == "number" && Number.isFinite(e) && Math.abs(e) < 1e6);
function Te(e) {
	if (!U(e) || !we(e.center, 3) || !we(e.normal, 3) || !we(e.rotation, 4) || !U(e.landing)) return;
	let { x: t, z: n, elevation: r, floorId: i } = e.landing;
	if (![
		t,
		n,
		r
	].every((e) => typeof e == "number" && Number.isFinite(e) && Math.abs(e) < 1e6) || typeof i != "string" || !i) return;
	let a = new o().fromArray(e.normal), s = new k().fromArray(e.rotation);
	if (!(Math.abs(a.length() - 1) > .001 || Math.abs(s.length() - 1) > .001 || Math.abs(a.y) > .001 && a.y < .999 || new o(0, 0, 1).applyQuaternion(s).dot(a) < .999)) return {
		center: new o().fromArray(e.center),
		normal: a,
		rotation: s,
		landing: {
			x: t,
			z: n,
			elevation: r,
			floorId: i
		}
	};
}
function Ee(e) {
	if (!U(e) || e.version !== 1 || !U(e.pair)) return {
		pair: {},
		next: "blue"
	};
	let t = {};
	for (let n of ["blue", "gold"]) {
		let r = Te(e.pair[n]);
		r && (t[n] = r);
	}
	return t.blue && t.gold && he(t.blue, t.gold) && delete t.gold, {
		pair: t,
		next: e.next === "gold" ? "gold" : "blue"
	};
}
function De({ pair: e, next: t }) {
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
function Oe() {
	let e = ne(), [t, n] = (0, j.useState)(() => Ee(e?.read(Ce))), r = (0, j.useRef)(t), i = (0, j.useRef)(!1);
	return {
		state: t,
		current: r,
		pending: i,
		commit: (0, j.useCallback)(async (t) => {
			if (i.current) return !1;
			let a = r.current;
			i.current = !0, r.current = t, n(t);
			try {
				return await e?.write(Ce, De(t)), !0;
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
function ke(e, t, n = 30) {
	let r = Math.min(30, n + .025), i = null;
	for (let n of ["blue", "gold"]) {
		let a = t[n];
		if (!a || e.direction.dot(a.normal) >= -.001) continue;
		let s = e.intersectPlane(new O().setFromNormalAndCoplanarPoint(a.normal, a.center), new o());
		if (!s) continue;
		let c = s.distanceTo(e.origin), l = s.clone().sub(a.center).applyQuaternion(a.rotation.clone().invert());
		c > r || (l.x / .58) ** 2 + (l.y / 1.1) ** 2 > 1 || (r = c, i = {
			color: n,
			point: s,
			normal: a.normal
		});
	}
	return i;
}
//#endregion
//#region packages/walk-laser/src/portals/useGunPortals.ts
function Ae(e, t, n, r) {
	let { camera: o, scene: c } = s(), { state: l, current: u, pending: d, commit: f } = Oe(), [p, m] = (0, j.useState)({}), g = (0, j.useRef)(!1), _ = (0, j.useMemo)(() => new h(), []), v = (0, j.useMemo)(ye, []), y = xe(e, r, t, v.reset), b = (0, j.useCallback)((t, n) => {
		let r = ke(t, {
			...p,
			...u.current.pair
		}, n);
		if (!r) return null;
		if (!e || p[r.color] || d.current || y.transition.busy) return r;
		let { pair: i, next: a } = u.current, o = { ...i };
		return delete o[r.color], v.reset(), m((e) => ({
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
		v,
		y.transition,
		p
	]), x = (0, j.useCallback)((e) => {
		m((t) => {
			let n = { ...t };
			return delete n[e], n;
		});
	}, []), S = (0, j.useCallback)(() => {
		if (!e || d.current || y.transition.busy) return;
		c.updateMatrixWorld(!0), _.setFromCamera(new i(), o), _.far = 30;
		let r = A(_, c).hit, a = b(_.ray, r?.distance ?? 30);
		if (a) {
			n(a.point, a.normal, L[a.color], u.current.next);
			return;
		}
		if (Object.keys(p).length) return;
		let s = r && me(r, c, t);
		if (!s) return;
		let l = _e(u.current.pair, u.current.next), m = l.nextColor, h = l.place(s);
		h && (v.reset(), f({
			pair: h,
			next: l.nextColor
		}), n(s.center, s.normal, L[m], l.nextColor));
	}, [
		e,
		o,
		c,
		_,
		t,
		v,
		n,
		y.transition,
		u,
		d,
		f,
		b,
		p
	]);
	return Se(e, S), a(() => {
		if (!e) {
			v.reset();
			return;
		}
		if (!g.current) {
			g.current = !0;
			let e = ge(u.current.pair, c, t);
			if (Object.keys(e).length !== Object.keys(u.current.pair).length) {
				f({
					...u.current,
					pair: e
				});
				return;
			}
		}
		y.transition.busy || d.current || v.step(u.current.pair, o.position, {
			yaw: o.rotation.y,
			pitch: o.rotation.x
		}, y.travel);
	}), {
		pair: l.pair,
		next: l.next,
		closing: p,
		closed: x,
		remove: b,
		place: S,
		veil: y.veil,
		iris: y.iris
	};
}
//#endregion
//#region packages/walk-laser/src/portals/GunPortals.tsx
function je({ active: e, navigation: t, reducedMotion: n, onPlaced: r, controls: i, onNextColor: a }) {
	let { pair: o, next: s, closing: c, closed: l, remove: u, place: d, veil: f, iris: p } = Ae(e, t, r, n);
	return (0, j.useImperativeHandle)(i, () => ({
		place: d,
		remove: u
	}), [d, u]), (0, j.useEffect)(() => {
		a?.(s);
	}, [s, a]), /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [
		/* @__PURE__ */ (0, R.jsx)(z, {
			veil: f,
			iris: p
		}),
		["blue", "gold"].map((e) => o[e] && /* @__PURE__ */ (0, R.jsx)(de, {
			color: e,
			anchor: o[e],
			exit: o[I(e)],
			reducedMotion: n
		}, e)),
		["blue", "gold"].map((e) => c[e] && /* @__PURE__ */ (0, R.jsx)(de, {
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
var Me = "cabane.walk-laser.tutorial.v1", Ne = !1;
function Pe() {
	if (Ne) return !0;
	try {
		return window.localStorage.getItem(Me) === "dismissed";
	} catch {
		return !1;
	}
}
function Fe({ coarsePointer: e }) {
	let t = w(), [n, r] = (0, j.useState)(Pe), i = (0, j.useCallback)(() => {
		Ne = !0, r(!0);
		try {
			window.localStorage.setItem(Me, "dismissed");
		} catch {}
	}, []);
	return (0, j.useEffect)(() => {
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
	]), n ? null : /* @__PURE__ */ (0, R.jsxs)("section", {
		className: "walk-laser-tutorial",
		"aria-label": "How to use the gun",
		onPointerDown: (e) => e.stopPropagation(),
		onClick: (e) => e.stopPropagation(),
		children: [
			/* @__PURE__ */ (0, R.jsxs)("div", {
				className: "walk-laser-tutorial__heading",
				children: [/* @__PURE__ */ (0, R.jsx)(ae, {}), /* @__PURE__ */ (0, R.jsxs)("div", { children: [/* @__PURE__ */ (0, R.jsx)("h2", { children: "Pew pew!" }), /* @__PURE__ */ (0, R.jsx)("p", { children: "Your home, a little more playful." })] })]
			}),
			/* @__PURE__ */ (0, R.jsxs)("p", { children: [
				/* @__PURE__ */ (0, R.jsx)("strong", { children: "Toggle devices." }),
				" Aim at a connected light, fan, AC, sprinkler, or TV, then",
				" ",
				e ? "tap the lightning button" : "left-click or press F",
				" to turn it on or off."
			] }),
			/* @__PURE__ */ (0, R.jsxs)("p", { children: [
				/* @__PURE__ */ (0, R.jsx)("strong", { children: "Make a shortcut." }),
				" Aim at a clear wall and",
				" ",
				e ? "tap the portal button" : "right-click",
				" to place a portal. Place a second portal elsewhere, then walk into either one to travel between them."
			] }),
			/* @__PURE__ */ (0, R.jsx)("p", { children: "Put the pair in spots you visit often. Zap a portal to remove it." }),
			/* @__PURE__ */ (0, R.jsx)("button", {
				type: "button",
				onClick: i,
				children: e ? "Got it" : "Got it · Enter"
			})
		]
	});
}
//#endregion
//#region packages/walk-laser/src/LaserTouchActions.tsx
function Ie({ ready: e, nextPortal: t, zap: n, portal: r }) {
	return /* @__PURE__ */ (0, R.jsx)("div", {
		className: "walk-laser-touch",
		role: "group",
		"aria-label": "Gun actions",
		children: ["zap", "portal"].map((i) => /* @__PURE__ */ (0, R.jsx)("button", {
			type: "button",
			className: "walk-laser-touch__action",
			"data-action": i,
			disabled: !e,
			"aria-label": i === "zap" ? "Fire zap" : `Create ${t} portal`,
			style: { color: i === "zap" ? "#51e8f3" : L[t] },
			onPointerDown: (e) => {
				e.button === 0 && (e.preventDefault(), e.stopPropagation(), (i === "zap" ? n : r)());
			},
			onClick: (e) => {
				e.stopPropagation(), e.detail === 0 && (i === "zap" ? n : r)();
			},
			onContextMenu: (e) => e.preventDefault(),
			children: /* @__PURE__ */ (0, R.jsx)("svg", {
				viewBox: "0 0 24 24",
				"aria-hidden": "true",
				children: i === "zap" ? /* @__PURE__ */ (0, R.jsx)("path", { d: "M14 2 5 13h6l-1 9 9-12h-6z" }) : /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsx)("ellipse", {
					cx: "12",
					cy: "12",
					rx: "6.5",
					ry: "10",
					transform: "rotate(18 12 12)"
				}), /* @__PURE__ */ (0, R.jsx)("path", { d: "M13 5c-4 2-6 10-3 14M11 2l2 3 3-1M8 20l3-1 2 3" })] })
			})
		}, i))
	});
}
//#endregion
//#region packages/walk-laser/src/LaserCrosshair.tsx
function Le({ target: e, desktop: t, ready: n, nextPortal: r }) {
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: "walk-laser-crosshair",
		"data-ready": n,
		role: "img",
		"aria-label": t ? `Left click: zap. Right click: ${r} portal.` : "Zap crosshair",
		children: [
			t && /* @__PURE__ */ (0, R.jsxs)("div", {
				className: "walk-laser-crosshair__action",
				"data-action": "zap",
				style: { color: "#51e8f3" },
				"aria-hidden": "true",
				children: [/* @__PURE__ */ (0, R.jsx)("svg", {
					className: "walk-laser-crosshair__ability",
					viewBox: "0 0 24 24",
					children: /* @__PURE__ */ (0, R.jsx)("path", { d: "M14 2 5 13h6l-1 9 9-12h-6z" })
				}), /* @__PURE__ */ (0, R.jsx)(Re, { side: "left" })]
			}),
			/* @__PURE__ */ (0, R.jsxs)("svg", {
				className: "walk-laser__sight",
				"data-target": e,
				"aria-hidden": "true",
				viewBox: "0 0 32 32",
				children: [
					/* @__PURE__ */ (0, R.jsx)("path", {
						className: "walk-laser__ticks",
						d: "M16 3v6 M16 23v6 M3 16h6 M23 16h6"
					}),
					/* @__PURE__ */ (0, R.jsx)("path", {
						className: "walk-laser__lock",
						d: "M7 11V7h4 M21 7h4v4 M25 21v4h-4 M11 25H7v-4"
					}),
					/* @__PURE__ */ (0, R.jsx)("circle", {
						cx: "16",
						cy: "16",
						r: "1.3",
						fill: "currentColor",
						stroke: "none"
					})
				]
			}),
			t && /* @__PURE__ */ (0, R.jsxs)("div", {
				className: "walk-laser-crosshair__action",
				"data-action": "portal",
				"data-next-portal": r,
				style: { color: L[r] },
				"aria-hidden": "true",
				children: [/* @__PURE__ */ (0, R.jsxs)("svg", {
					className: "walk-laser-crosshair__ability",
					viewBox: "0 0 24 24",
					children: [/* @__PURE__ */ (0, R.jsx)("ellipse", {
						cx: "12",
						cy: "12",
						rx: "6.5",
						ry: "10",
						transform: "rotate(18 12 12)"
					}), /* @__PURE__ */ (0, R.jsx)("path", { d: "M13 5c-4 2-6 10-3 14M11 2l2 3 3-1M8 20l3-1 2 3" })]
				}), /* @__PURE__ */ (0, R.jsx)(Re, { side: "right" })]
			})
		]
	});
}
function Re({ side: e }) {
	return /* @__PURE__ */ (0, R.jsxs)("svg", {
		className: "walk-laser-crosshair__mouse",
		viewBox: "0 0 16 22",
		children: [
			/* @__PURE__ */ (0, R.jsx)("path", {
				d: e === "left" ? "M8 2H6a4 4 0 0 0-4 4v4h6z" : "M8 2h2a4 4 0 0 1 4 4v4H8z",
				fill: "currentColor",
				stroke: "none"
			}),
			/* @__PURE__ */ (0, R.jsx)("rect", {
				x: "2",
				y: "2",
				width: "12",
				height: "18",
				rx: "5"
			}),
			/* @__PURE__ */ (0, R.jsx)("path", { d: "M8 2v8M2 10h12" })
		]
	});
}
//#endregion
//#region packages/walk-laser/src/laser-gun/BlasterFinish.tsx
function W({ kind: e }) {
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
	return /* @__PURE__ */ (0, R.jsx)(E, {
		color: t,
		emissive: n ? t : "#000000",
		emissiveIntensity: n ? .65 : 0,
		toneMapped: !n
	});
}
//#endregion
//#region packages/walk-laser/src/laser-gun/BlasterReactor.tsx
function ze({ side: e }) {
	return /* @__PURE__ */ (0, R.jsxs)("group", {
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
			/* @__PURE__ */ (0, R.jsxs)("mesh", {
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, R.jsx)("cylinderGeometry", { args: [
					.062,
					.062,
					.022,
					40
				] }), /* @__PURE__ */ (0, R.jsx)(W, { kind: "chassis" })]
			}),
			/* @__PURE__ */ (0, R.jsxs)("mesh", {
				position: [
					0,
					0,
					.009
				],
				children: [/* @__PURE__ */ (0, R.jsx)("torusGeometry", { args: [
					.047,
					.012,
					12,
					40
				] }), /* @__PURE__ */ (0, R.jsx)(W, { kind: "trim" })]
			}),
			/* @__PURE__ */ (0, R.jsxs)("mesh", {
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
				children: [/* @__PURE__ */ (0, R.jsx)("sphereGeometry", { args: [
					.037,
					32,
					16
				] }), /* @__PURE__ */ (0, R.jsx)(W, { kind: "energy" })]
			}),
			/* @__PURE__ */ (0, R.jsxs)("mesh", {
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
				children: [/* @__PURE__ */ (0, R.jsx)("sphereGeometry", { args: [
					.009,
					16,
					8
				] }), /* @__PURE__ */ (0, R.jsx)(W, { kind: "glint" })]
			}),
			/* @__PURE__ */ (0, R.jsxs)("mesh", {
				position: [
					0,
					0,
					.017
				],
				children: [/* @__PURE__ */ (0, R.jsx)("torusGeometry", { args: [
					.036,
					.0035,
					8,
					32
				] }), /* @__PURE__ */ (0, R.jsx)(W, { kind: "energy" })]
			})
		]
	});
}
//#endregion
//#region packages/walk-laser/src/laser-gun/blaster-contours.ts
var G = new r();
G.moveTo(-.205, .045), G.bezierCurveTo(-.225, .13, -.165, .16, -.105, .145), G.lineTo(.29, .12), G.quadraticCurveTo(.335, .1, .3, .015), G.quadraticCurveTo(.285, -.04, .21, -.053), G.lineTo(.045, -.065), G.quadraticCurveTo(-.02, -.085, -.105, -.065), G.quadraticCurveTo(-.215, -.065, -.205, .045), G.closePath();
var K = new r();
K.moveTo(-.205, .075), K.bezierCurveTo(-.213, .135, -.174, .163, -.105, .157), K.quadraticCurveTo(-.075, .155, -.039, .121), K.lineTo(.228, .116), K.quadraticCurveTo(.258, .12, .27, .147), K.lineTo(.318, .145), K.quadraticCurveTo(.335, .138, .32, .097), K.lineTo(.288, .018), K.quadraticCurveTo(.275, -.015, .235, -.014), K.lineTo(.139, -.022), K.quadraticCurveTo(.111, -.023, .09, .003), K.lineTo(.047, .047), K.lineTo(-.025, .044), K.bezierCurveTo(-.054, .094, -.098, .118, -.143, .093), K.quadraticCurveTo(-.184, .068, -.205, .075), K.closePath();
var q = new r();
q.moveTo(-.155, -.037), q.quadraticCurveTo(-.1, -.029, -.055, -.073), q.quadraticCurveTo(-.068, -.124, -.094, -.185), q.lineTo(-.127, -.293), q.quadraticCurveTo(-.124, -.322, -.158, -.325), q.lineTo(-.269, -.292), q.quadraticCurveTo(-.28, -.284, -.264, -.257), q.lineTo(-.188, -.087), q.quadraticCurveTo(-.19, -.048, -.155, -.037), q.closePath();
var J = new r();
J.moveTo(-.157, -.07), J.quadraticCurveTo(-.104, -.075, -.087, -.1), J.quadraticCurveTo(-.096, -.172, -.152, -.282), J.quadraticCurveTo(-.184, -.292, -.245, -.265), J.lineTo(-.179, -.112), J.quadraticCurveTo(-.17, -.073, -.157, -.07), J.closePath();
var Y = new r();
Y.moveTo(-.27, -.261), Y.quadraticCurveTo(-.218, -.29, -.139, -.284), Y.quadraticCurveTo(-.12, -.287, -.116, -.318), Y.quadraticCurveTo(-.106, -.357, -.15, -.361), Y.quadraticCurveTo(-.235, -.351, -.299, -.318), Y.quadraticCurveTo(-.31, -.3, -.287, -.277), Y.closePath();
var X = new r();
X.moveTo(-.085, -.055), X.lineTo(.11, -.053), X.bezierCurveTo(.166, -.09, .145, -.182, .076, -.186), X.lineTo(-.082, -.17), X.quadraticCurveTo(-.12, -.125, -.085, -.055), X.closePath();
var Z = new C();
Z.moveTo(-.065, -.08), Z.quadraticCurveTo(-.085, -.115, -.065, -.146), Z.lineTo(.064, -.158), Z.bezierCurveTo(.112, -.159, .14, -.116, .1, -.08), Z.closePath(), X.holes.push(Z);
var Q = new r();
Q.moveTo(-.017, -.058), Q.lineTo(.014, -.06), Q.quadraticCurveTo(-.004, -.115, .025, -.145), Q.quadraticCurveTo(-.013, -.152, -.032, -.111), Q.quadraticCurveTo(-.042, -.077, -.017, -.058), Q.closePath();
var Be = {
	receiver: G,
	armor: K,
	grip: q,
	gripInset: J,
	heel: Y,
	guard: X,
	trigger: Q
};
//#endregion
//#region packages/walk-laser/src/laser-gun/SculptedBlasterPart.tsx
function $({ contour: e, depth: t, bevel: n, finish: r, x: i = 0 }) {
	let a = (0, j.useMemo)(() => {
		let r = new l(Be[e], {
			depth: t,
			steps: 1,
			curveSegments: 16,
			bevelEnabled: !0,
			bevelThickness: n,
			bevelSize: n,
			bevelSegments: 6
		});
		r.translate(0, 0, -t / 2), r.deleteAttribute("normal"), r.deleteAttribute("uv");
		let i = T(r, 1e-5);
		return i.computeVertexNormals(), r.dispose(), i;
	}, [
		e,
		t,
		n
	]);
	return (0, j.useEffect)(() => () => a.dispose(), [a]), /* @__PURE__ */ (0, R.jsx)("mesh", {
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
		children: /* @__PURE__ */ (0, R.jsx)(W, { kind: r })
	});
}
//#endregion
//#region packages/walk-laser/src/laser-gun/BlasterReceiver.tsx
function Ve() {
	return /* @__PURE__ */ (0, R.jsxs)("group", {
		name: "blaster-receiver",
		children: [
			/* @__PURE__ */ (0, R.jsx)($, {
				contour: "receiver",
				depth: .12,
				bevel: .024,
				finish: "chassis"
			}),
			[-1, 1].map((e) => /* @__PURE__ */ (0, R.jsxs)("group", { children: [
				/* @__PURE__ */ (0, R.jsx)($, {
					contour: "armor",
					depth: .012,
					bevel: .014,
					finish: "trim",
					x: e * .074
				}),
				/* @__PURE__ */ (0, R.jsx)($, {
					contour: "armor",
					depth: .012,
					bevel: .009,
					finish: "armor",
					x: e * .09
				}),
				/* @__PURE__ */ (0, R.jsx)(ze, { side: e }),
				[
					.1,
					.15,
					.2
				].map((t) => /* @__PURE__ */ (0, R.jsxs)("group", {
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
					children: [/* @__PURE__ */ (0, R.jsx)(x, {
						args: [
							.01,
							.06,
							.023
						],
						radius: .004,
						children: /* @__PURE__ */ (0, R.jsx)(W, { kind: "trim" })
					}), /* @__PURE__ */ (0, R.jsx)(x, {
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
						children: /* @__PURE__ */ (0, R.jsx)(W, { kind: "recess" })
					})]
				}, t))
			] }, e)),
			/* @__PURE__ */ (0, R.jsx)(x, {
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
				children: /* @__PURE__ */ (0, R.jsx)(W, { kind: "trim" })
			}),
			/* @__PURE__ */ (0, R.jsx)(x, {
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
				children: /* @__PURE__ */ (0, R.jsx)(W, { kind: "chassis" })
			}),
			/* @__PURE__ */ (0, R.jsx)(x, {
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
				children: /* @__PURE__ */ (0, R.jsx)(W, { kind: "energy" })
			}),
			/* @__PURE__ */ (0, R.jsx)(x, {
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
				children: /* @__PURE__ */ (0, R.jsx)(W, { kind: "armor" })
			})
		]
	});
}
//#endregion
//#region packages/walk-laser/src/laser-gun/MuzzleFlash.tsx
function He({ shotId: e }) {
	let t = (0, j.useRef)(null), n = (0, j.useRef)(Infinity);
	return (0, j.useEffect)(() => {
		e > 0 && (n.current = 0);
	}, [e]), a((e, r) => {
		if (n.current += r, !t.current) return;
		let i = Math.max(0, 1 - n.current / .045);
		t.current.visible = i > 0, t.current.scale.setScalar(.7 + (1 - i) * .7);
		for (let e of t.current.children) e.isMesh && (e.material.opacity = i * (e.userData.glowOpacity ?? 1));
	}), /* @__PURE__ */ (0, R.jsxs)("group", {
		ref: t,
		visible: !1,
		name: "laser-muzzle-flash",
		children: [
			/* @__PURE__ */ (0, R.jsxs)("mesh", {
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
				children: [/* @__PURE__ */ (0, R.jsx)("octahedronGeometry", { args: [1, 0] }), /* @__PURE__ */ (0, R.jsx)(E, {
					color: "#eeffff",
					emissive: "#acffff",
					emissiveIntensity: 4,
					toneMapped: !1,
					transparent: !0,
					blending: 2,
					depthWrite: !1
				})]
			}),
			/* @__PURE__ */ (0, R.jsxs)("mesh", {
				userData: { glowOpacity: .2 },
				scale: [
					.075,
					.075,
					.075
				],
				children: [/* @__PURE__ */ (0, R.jsx)("sphereGeometry", { args: [
					1,
					8,
					6
				] }), /* @__PURE__ */ (0, R.jsx)(E, {
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
				return /* @__PURE__ */ (0, R.jsxs)("mesh", {
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
					children: [/* @__PURE__ */ (0, R.jsx)("coneGeometry", { args: [
						.008,
						.09,
						4
					] }), /* @__PURE__ */ (0, R.jsx)(E, {
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
function Ue() {
	let e = (0, j.useMemo)(() => [
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
	].map(([e, t]) => new i(e, t)), []);
	return /* @__PURE__ */ (0, R.jsxs)("group", {
		name: "blaster-muzzle",
		position: [
			0,
			.075,
			-.409
		],
		children: [
			/* @__PURE__ */ (0, R.jsxs)("mesh", {
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, R.jsx)("latheGeometry", { args: [e, 48] }), /* @__PURE__ */ (0, R.jsx)(W, { kind: "trim" })]
			}),
			/* @__PURE__ */ (0, R.jsxs)("mesh", {
				position: [
					0,
					0,
					-.052
				],
				children: [/* @__PURE__ */ (0, R.jsx)("torusGeometry", { args: [
					.058,
					.008,
					12,
					40
				] }), /* @__PURE__ */ (0, R.jsx)(W, { kind: "energy" })]
			}),
			/* @__PURE__ */ (0, R.jsxs)("mesh", {
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
				children: [/* @__PURE__ */ (0, R.jsx)("cylinderGeometry", { args: [
					.05,
					.05,
					.005,
					40
				] }), /* @__PURE__ */ (0, R.jsx)(W, { kind: "recess" })]
			}),
			/* @__PURE__ */ (0, R.jsxs)("mesh", {
				position: [
					0,
					0,
					-.014
				],
				children: [/* @__PURE__ */ (0, R.jsx)("torusGeometry", { args: [
					.042,
					.003,
					8,
					32
				] }), /* @__PURE__ */ (0, R.jsx)(W, { kind: "energy" })]
			})
		]
	});
}
//#endregion
//#region packages/walk-laser/src/laser-gun/BlasterBarrel.tsx
function We({ muzzleRef: e, shotId: t }) {
	return /* @__PURE__ */ (0, R.jsxs)("group", {
		name: "blaster-barrel",
		children: [
			/* @__PURE__ */ (0, R.jsxs)("mesh", {
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
				children: [/* @__PURE__ */ (0, R.jsx)("cylinderGeometry", { args: [
					.089,
					.089,
					.11,
					40
				] }), /* @__PURE__ */ (0, R.jsx)(W, { kind: "chassis" })]
			}),
			/* @__PURE__ */ (0, R.jsx)(x, {
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
				children: /* @__PURE__ */ (0, R.jsx)(W, { kind: "chassis" })
			}),
			/* @__PURE__ */ (0, R.jsx)(x, {
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
				children: /* @__PURE__ */ (0, R.jsx)(W, { kind: "energy" })
			}),
			[-1, 1].map((e) => /* @__PURE__ */ (0, R.jsx)(x, {
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
				children: /* @__PURE__ */ (0, R.jsx)(W, { kind: "trim" })
			}, e)),
			/* @__PURE__ */ (0, R.jsx)(x, {
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
				children: /* @__PURE__ */ (0, R.jsx)(W, { kind: "armor" })
			}),
			/* @__PURE__ */ (0, R.jsx)(x, {
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
				children: /* @__PURE__ */ (0, R.jsx)(W, { kind: "armor" })
			}),
			/* @__PURE__ */ (0, R.jsx)(Ue, {}),
			/* @__PURE__ */ (0, R.jsx)("group", {
				...d({ ref: e }),
				position: [
					0,
					.075,
					-.476
				],
				children: /* @__PURE__ */ (0, R.jsx)(He, { shotId: t })
			})
		]
	});
}
//#endregion
//#region packages/walk-laser/src/laser-gun/BlasterGrip.tsx
function Ge() {
	return /* @__PURE__ */ (0, R.jsxs)("group", {
		name: "blaster-grip",
		children: [
			/* @__PURE__ */ (0, R.jsx)($, {
				contour: "guard",
				depth: .035,
				bevel: .012,
				finish: "trim"
			}),
			/* @__PURE__ */ (0, R.jsx)($, {
				contour: "trigger",
				depth: .033,
				bevel: .009,
				finish: "hot"
			}),
			/* @__PURE__ */ (0, R.jsx)($, {
				contour: "grip",
				depth: .077,
				bevel: .016,
				finish: "trim"
			}),
			[-1, 1].map((e) => /* @__PURE__ */ (0, R.jsx)($, {
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
			].map((e) => /* @__PURE__ */ (0, R.jsx)(x, {
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
				children: /* @__PURE__ */ (0, R.jsx)(W, { kind: "chassis" })
			}, e)),
			/* @__PURE__ */ (0, R.jsx)($, {
				contour: "heel",
				depth: .105,
				bevel: .017,
				finish: "armor"
			}),
			/* @__PURE__ */ (0, R.jsx)(x, {
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
				children: /* @__PURE__ */ (0, R.jsx)(W, { kind: "energy" })
			})
		]
	});
}
//#endregion
//#region packages/walk-laser/src/laser-gun/BlasterGlove.tsx
function Ke() {
	return /* @__PURE__ */ (0, R.jsxs)("group", {
		name: "blaster-gloved-hand",
		children: [
			/* @__PURE__ */ (0, R.jsxs)("group", {
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
					/* @__PURE__ */ (0, R.jsxs)("mesh", {
						scale: [
							.066,
							.13,
							.067
						],
						children: [/* @__PURE__ */ (0, R.jsx)("sphereGeometry", { args: [
							1,
							24,
							16
						] }), /* @__PURE__ */ (0, R.jsx)(W, { kind: "grip" })]
					}),
					/* @__PURE__ */ (0, R.jsx)(x, {
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
						children: /* @__PURE__ */ (0, R.jsx)(W, { kind: "armor" })
					}),
					/* @__PURE__ */ (0, R.jsx)(x, {
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
						children: /* @__PURE__ */ (0, R.jsx)(W, { kind: "trim" })
					}),
					/* @__PURE__ */ (0, R.jsx)(x, {
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
						children: /* @__PURE__ */ (0, R.jsx)(W, { kind: "energy" })
					})
				]
			}),
			/* @__PURE__ */ (0, R.jsxs)("mesh", {
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
				children: [/* @__PURE__ */ (0, R.jsx)("sphereGeometry", { args: [
					1,
					24,
					16
				] }), /* @__PURE__ */ (0, R.jsx)(W, { kind: "grip" })]
			}),
			/* @__PURE__ */ (0, R.jsx)(x, {
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
				children: /* @__PURE__ */ (0, R.jsx)(W, { kind: "armor" })
			}),
			[
				0,
				1,
				2
			].map((e) => /* @__PURE__ */ (0, R.jsxs)("group", {
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
				children: [/* @__PURE__ */ (0, R.jsx)(x, {
					args: [
						.137,
						.032,
						.063
					],
					radius: .015,
					children: /* @__PURE__ */ (0, R.jsx)(W, { kind: "grip" })
				}), /* @__PURE__ */ (0, R.jsx)(x, {
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
					children: /* @__PURE__ */ (0, R.jsx)(W, { kind: "armor" })
				})]
			}, e)),
			/* @__PURE__ */ (0, R.jsx)(x, {
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
				children: /* @__PURE__ */ (0, R.jsx)(W, { kind: "grip" })
			}),
			/* @__PURE__ */ (0, R.jsxs)("mesh", {
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
				children: [/* @__PURE__ */ (0, R.jsx)("sphereGeometry", { args: [
					1,
					20,
					12
				] }), /* @__PURE__ */ (0, R.jsx)(W, { kind: "grip" })]
			})
		]
	});
}
//#endregion
//#region packages/walk-laser/src/LaserGun.tsx
function qe({ muzzleRef: e, shotId: t = 0 }) {
	return /* @__PURE__ */ (0, R.jsxs)("group", {
		name: "cartoon-laser-gun",
		userData: { walkToolVisual: !0 },
		rotation: [
			0,
			.25,
			-.055
		],
		children: [
			/* @__PURE__ */ (0, R.jsx)(Ve, {}),
			/* @__PURE__ */ (0, R.jsx)(We, {
				muzzleRef: e,
				shotId: t
			}),
			/* @__PURE__ */ (0, R.jsx)(Ge, {}),
			/* @__PURE__ */ (0, R.jsx)(Ke, {})
		]
	});
}
//#endregion
//#region packages/walk-laser/src/useLaserShots.ts
function Je(e, t, n) {
	let [r, i] = (0, j.useState)([]), [a, s] = (0, j.useState)({ id: 0 }), c = (0, j.useRef)(0), l = (0, j.useRef)(0);
	(0, j.useEffect)(() => {
		if (!r.length) return;
		let e = window.setTimeout(() => i((e) => e.filter((e) => performance.now() - (e.createdAt ?? 0) < 3400)), 250);
		return () => window.clearTimeout(e);
	}, [r]);
	let u = (0, j.useCallback)((r) => {
		let a = ++c.current;
		if (s({
			id: a,
			...r.color === void 0 ? {} : { color: r.color }
		}), n) return;
		e.current?.updateWorldMatrix(!0, !1);
		let u = e.current?.getWorldPosition(new o()) ?? t.position.clone(), d = {
			...r,
			start: u,
			id: a,
			createdAt: performance.now()
		};
		i((e) => [...e.slice(-11), d]), l.current = .055;
	}, [
		e,
		t,
		n
	]);
	return {
		shots: r,
		triggerId: a.id,
		triggerColor: a.color,
		recoil: l,
		emitShot: u
	};
}
//#endregion
//#region packages/walk-laser/src/ElectricArc.tsx
function Ye({ start: e, end: t, duration: r, color: i }) {
	let s = (0, j.useRef)(null), c = (0, j.useRef)(0), l = (0, j.useMemo)(() => {
		let e = new _();
		return e.setAttribute("position", new n(/* @__PURE__ */ new Float32Array(576), 3)), e.setAttribute("normal", new n(/* @__PURE__ */ new Float32Array(576), 3)), e;
	}, []);
	(0, j.useEffect)(() => () => l.dispose(), [l]);
	let u = (0, j.useMemo)(() => ({
		direction: new o(),
		side: new o(),
		up: new o(),
		view: new o(),
		a: new o(),
		b: new o()
	}), []);
	return a(({ camera: n }, i) => {
		if (c.current += i, !s.current || (s.current.visible = c.current < r, !s.current.visible)) return;
		let { direction: a, side: o, up: d, view: f, a: p, b: m } = u;
		a.subVectors(t, e).normalize(), f.subVectors(n.position, e).normalize(), o.crossVectors(a, f), o.lengthSq() < .001 && o.set(1, 0, 0).applyQuaternion(n.quaternion), o.normalize(), d.crossVectors(a, o).normalize();
		let h = l.attributes.position, g = Math.floor(c.current * 30), _ = (e) => Math.sin(e * 127.1 + g * 39.7) * Math.cos(e * 71.3 + g * 11.9), v = (n, r) => r.copy(e).lerp(t, n / 24).addScaledVector(o, _(n) * .095 * Math.sin(Math.PI * n / 24)).addScaledVector(d, _(n + 30) * .065 * Math.sin(Math.PI * n / 24)), y = .009 + .005 * (1 - c.current / r);
		for (let e = 0; e < 32; e++) e < 24 ? (v(e, p), v(e + 1, m)) : (v(3 + (e - 24) * 2, p), m.copy(p).addScaledVector(o, _(e + 80) * .24).addScaledVector(d, _(e + 90) * .2).addScaledVector(a, .13)), [
			[p, -1],
			[p, 1],
			[m, -1],
			[m, -1],
			[p, 1],
			[m, 1]
		].forEach(([t, n], r) => {
			let i = t, a = n * y;
			h.setXYZ(e * 6 + r, i.x + o.x * a, i.y + o.y * a, i.z + o.z * a);
		});
		h.needsUpdate = !0, l.computeVertexNormals();
	}), /* @__PURE__ */ (0, R.jsx)("mesh", {
		name: "laser-electric-arc",
		ref: s,
		geometry: l,
		frustumCulled: !1,
		raycast: () => void 0,
		children: /* @__PURE__ */ (0, R.jsx)(E, {
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
function Xe({ delay: e, lifetime: t }) {
	let n = (0, j.useRef)(null), r = (0, j.useRef)(0);
	return a((i, a) => {
		if (r.current += a, !n.current) return;
		let o = r.current - e;
		n.current.visible = o >= 0 && o < t;
		for (let e of n.current.children) {
			let n = e.material;
			n.opacity = e.userData.char ? .62 * Math.min(1, (t - o) / 1.5) : Math.max(0, 1 - o / 1.5) * (.7 + .3 * Math.sin(o * 32));
		}
	}), /* @__PURE__ */ (0, R.jsxs)("group", {
		ref: n,
		name: "electric-scorch",
		visible: !1,
		children: [/* @__PURE__ */ (0, R.jsxs)("mesh", {
			userData: { char: !0 },
			scale: [
				1,
				.83,
				1
			],
			raycast: () => void 0,
			children: [/* @__PURE__ */ (0, R.jsx)("circleGeometry", { args: [.115, 11] }), /* @__PURE__ */ (0, R.jsx)(E, {
				color: "#272b43",
				transparent: !0,
				opacity: .62,
				depthWrite: !1,
				polygonOffset: !0,
				polygonOffsetFactor: -2
			})]
		}), Array.from({ length: 9 }, (e, t) => {
			let n = t * Math.PI * 2 / 9;
			return /* @__PURE__ */ (0, R.jsxs)("mesh", {
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
				children: [/* @__PURE__ */ (0, R.jsx)("planeGeometry", { args: [.05 + t % 3 * .016, .005] }), /* @__PURE__ */ (0, R.jsx)(E, {
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
var Ze = .8, Qe = .55;
function $e(e, t) {
	let n = Math.max(.16, e / 55), r = e * Math.min(1, Math.max(0, t / n)), i = Math.max(0, r - Ze), a = t - n;
	return {
		head: r,
		tail: i,
		traveling: t >= 0 && t < n,
		travelSeconds: n,
		impact: a >= 0 && a < .55,
		impactProgress: Math.max(0, Math.min(1, a / Qe)),
		muzzleOpacity: Math.max(0, 1 - t / .045),
		done: t >= n + Qe
	};
}
//#endregion
//#region packages/walk-laser/src/LaserShot.tsx
var et = () => void 0;
function tt({ shot: e }) {
	let t = (0, j.useRef)(null), n = (0, j.useRef)(0), r = (0, j.useMemo)(() => {
		let t = e.end.clone().sub(e.start), n = t.length();
		return t.normalize(), {
			distance: n,
			direction: t,
			rotation: new k().setFromUnitVectors(new o(0, 0, 1), t)
		};
	}, [e]);
	a((i, a) => {
		n.current += a;
		let o = $e(r.distance, n.current);
		t.current && (t.current.visible = o.traveling, t.current.position.copy(e.start).addScaledVector(r.direction, (o.head + o.tail) / 2), t.current.scale.set(1, 1, Math.max(.001, o.head - o.tail)));
	});
	let i = new k().setFromUnitVectors(new o(0, 0, 1), e.normal ?? r.direction.clone().negate()), s = e.end.clone().addScaledVector(e.normal ?? r.direction.clone().negate(), .004);
	return /* @__PURE__ */ (0, R.jsxs)("group", {
		userData: { walkToolVisual: !0 },
		children: [
			/* @__PURE__ */ (0, R.jsx)(Ye, {
				start: e.start,
				end: e.end,
				duration: .3,
				color: e.color
			}),
			e.hit && e.scorch !== !1 && /* @__PURE__ */ (0, R.jsx)("group", {
				position: s.toArray(),
				quaternion: i.toArray(),
				children: /* @__PURE__ */ (0, R.jsx)(Xe, {
					delay: 0,
					lifetime: 3.2
				})
			}),
			/* @__PURE__ */ (0, R.jsxs)("group", {
				name: "laser-pulse",
				ref: t,
				quaternion: r.rotation.toArray(),
				visible: !1,
				children: [/* @__PURE__ */ (0, R.jsxs)("mesh", {
					raycast: et,
					scale: [
						.02,
						.02,
						.5
					],
					children: [/* @__PURE__ */ (0, R.jsx)("sphereGeometry", { args: [
						1,
						8,
						6
					] }), /* @__PURE__ */ (0, R.jsx)(E, {
						color: "#f5ffff",
						emissive: e.color ?? "#caffff",
						emissiveIntensity: 4,
						toneMapped: !1,
						transparent: !0,
						blending: 2,
						depthWrite: !1
					})]
				}), /* @__PURE__ */ (0, R.jsxs)("mesh", {
					raycast: et,
					scale: [
						.06,
						.06,
						.55
					],
					children: [/* @__PURE__ */ (0, R.jsx)("sphereGeometry", { args: [
						1,
						8,
						6
					] }), /* @__PURE__ */ (0, R.jsx)(E, {
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
			e.hit && /* @__PURE__ */ (0, R.jsx)("group", {
				position: s.toArray(),
				quaternion: i.toArray(),
				children: /* @__PURE__ */ (0, R.jsx)(S, {
					color: e.color,
					delay: $e(r.distance, 0).travelSeconds
				})
			})
		]
	});
}
//#endregion
//#region packages/walk-laser/src/LaserShotWarmup.tsx
function nt() {
	let { gl: e, camera: t, scene: n } = s(), r = (0, j.useMemo)(() => new oe(), []), i = (0, j.useMemo)(() => ({
		id: 0,
		start: new o(),
		end: new o(0, 0, -1),
		hit: !0
	}), []);
	return (0, j.useEffect)(() => {
		e.compileAsync(r, t, n);
		let i = new m(1, 1), a = e.getRenderTarget();
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
	]), f(/* @__PURE__ */ (0, R.jsx)(tt, { shot: i }), r);
}
//#endregion
//#region packages/walk-laser/src/shot-gate.ts
function rt(e = 300) {
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
//#region packages/walk-laser/src/comic-pew/useMuzzleAnchor.ts
function it(e) {
	let t = (0, j.useRef)(null), n = (0, j.useMemo)(() => new o(), []);
	return a(({ camera: r, size: i }) => {
		if (!t.current || !e.current) return;
		e.current.updateWorldMatrix(!0, !1), e.current.getWorldPosition(n).project(r);
		let a = Math.min(250, Math.max(148, i.width * .23)) * .7, o = Math.max(a / 2 + 12, Math.min(i.width - a / 2 - 12, (n.x + 1) * i.width / 2)), s = Math.max(a * .6 + 16, (1 - n.y) * i.height / 2 - 14);
		t.current.style.transform = `translate3d(${o}px, ${s}px, 0)`, t.current.style.width = `${a}px`;
	}, 1), t;
}
//#endregion
//#region packages/walk-laser/src/LaserWalkTool.tsx
function at({ enabled: e, pointerLocked: n, coarsePointer: r, reducedMotion: c, navigation: l, canActivateTarget: u, activateTarget: d }) {
	let { camera: p, scene: m, gl: g } = s(), _ = w(), v = (0, j.useRef)(null), y = (0, j.useRef)(null), b = (0, j.useRef)(null), x = (0, j.useMemo)(() => new oe(), []);
	(0, j.useEffect)(() => {
		g.compileAsync(x, p);
	}, [
		g,
		x,
		p
	]);
	let { shots: S, triggerId: ee, triggerColor: ne, recoil: C, emitShot: T } = Je(y, p, c), re = it(y), E = S.at(-1), [ae, D] = (0, j.useState)("blue"), [O, k] = (0, j.useState)(null), M = (0, j.useRef)(null), N = (0, j.useRef)({
		previous: p.position.clone(),
		speed: 0,
		phase: 0,
		time: 0
	}), P = (0, j.useMemo)(() => rt(), []), F = (0, j.useMemo)(() => new h(), []), I = (0, j.useMemo)(() => new i(), []), L = e && (r || n), z = (0, j.useRef)(L);
	z.current = L, a((e, t) => {
		let n = N.current, r = Math.hypot(p.position.x - n.previous.x, p.position.z - n.previous.z), i = L && t > 0 && r < .5 ? r / t : 0;
		n.previous.copy(p.position), n.speed += (Math.min(i, 5) - n.speed) * (1 - Math.exp(-10 * t)), n.time += t, n.phase += t * (7 + n.speed * 2.5);
		let a = c ? 0 : Math.min(n.speed / 2, 1.6), o = c ? 0 : Math.sin(n.time * 1.6) * .0015 + Math.sin(n.phase) * .004 * a, s = c ? 0 : Math.cos(n.time * 2) * .0015 + Math.cos(n.phase * 2) * .003 * a;
		if (v.current) {
			C.current *= Math.exp(-18 * t);
			let e = p, n = 1.2 * Math.tan(e.fov * Math.PI / 360), r = n * e.aspect;
			v.current.scale.setScalar(Math.min(.58, r * .56)), v.current.position.set(r * .29 + o, -n * .19 + s - a * .004, -.6 + (c ? 0 : C.current)), v.current.position.applyQuaternion(p.quaternion).add(p.position), v.current.quaternion.copy(p.quaternion), c || (v.current.rotateX(C.current * .9), v.current.rotateZ(o * 2));
		}
		if (!L) {
			M.current !== null && (M.current = null, k(null));
			return;
		}
		F.setFromCamera(I, p);
		let { target: l } = A(F, m), d = l && u(l) ? l.label : null;
		d !== M.current && (M.current = d, k(d));
	}), a(({ gl: t }) => {
		if (!e) return;
		let n = t.autoClear;
		try {
			t.autoClear = !1, t.clearDepth(), t.render(x, p);
		} finally {
			t.autoClear = n;
		}
	}, 2);
	let B = (0, j.useCallback)(() => {
		z.current && P(performance.now(), async () => {
			m.updateMatrixWorld(!0), F.setFromCamera(I, p);
			let { hit: e, target: t } = A(F, m), n = b.current?.remove(F.ray, e?.distance ?? 30);
			if (n) {
				T({
					end: n.point,
					normal: n.normal,
					hit: !0,
					scorch: !1
				});
				return;
			}
			let r = e?.point.clone() ?? F.ray.at(30, new o()), i = e?.face?.normal.clone().applyMatrix3(new ie().getNormalMatrix(e.object.matrixWorld)).normalize();
			i && i.dot(F.ray.direction) > 0 && i.negate(), T({
				end: r,
				hit: !!e,
				...i === void 0 ? {} : { normal: i }
			}), t && await d(t);
		});
	}, [
		d,
		p,
		I,
		P,
		F,
		T,
		m
	]);
	(0, j.useEffect)(() => {
		let e = (e) => {
			!z.current || r || e.button !== 0 || !_.root.pointerLockElement || (e.preventDefault(), B());
		}, t = (e) => {
			!z.current || e.code !== "KeyF" || e.repeat || e.ctrlKey || e.metaKey || e.altKey || e.target instanceof HTMLElement && e.target.closest("input, textarea, select, [contenteditable=true]") || (e.preventDefault(), B());
		};
		return _.events.addEventListener("pointerdown", e), _.events.addEventListener("keydown", t), () => {
			_.events.removeEventListener("pointerdown", e), _.events.removeEventListener("keydown", t);
		};
	}, [
		r,
		_.events,
		_.root,
		B
	]);
	let se = (0, j.useCallback)((e, t, n, r) => {
		D(r), T({
			end: e,
			normal: t,
			color: n,
			hit: !0,
			scorch: !1
		});
	}, [T]);
	return /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [
		/* @__PURE__ */ (0, R.jsx)(je, {
			active: L,
			navigation: l,
			reducedMotion: c,
			onPlaced: se,
			onNextColor: D,
			controls: b
		}),
		f(/* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [
			/* @__PURE__ */ (0, R.jsx)("ambientLight", { intensity: 1.1 }),
			/* @__PURE__ */ (0, R.jsx)("directionalLight", {
				position: [
					-2,
					4,
					3
				],
				intensity: 2.2
			}),
			/* @__PURE__ */ (0, R.jsx)("group", {
				ref: v,
				children: /* @__PURE__ */ (0, R.jsx)(qe, {
					muzzleRef: y,
					shotId: E?.id ?? 0
				})
			})
		] }), x),
		!c && /* @__PURE__ */ (0, R.jsx)(nt, {}),
		S.map((e) => /* @__PURE__ */ (0, R.jsx)(tt, { shot: e }, e.id)),
		/* @__PURE__ */ (0, R.jsx)(te, {
			onOcclude: () => void 0,
			fullscreen: !0,
			calculatePosition: (e, t, n) => [n.width / 2, n.height / 2],
			zIndexRange: [10, 0],
			style: { pointerEvents: "none" },
			children: e && /* @__PURE__ */ (0, R.jsxs)("div", {
				className: "walk-laser",
				"data-ready": L,
				children: [
					/* @__PURE__ */ (0, R.jsx)(Fe, { coarsePointer: r }),
					/* @__PURE__ */ (0, R.jsx)(t, {
						shotId: ee,
						shotColor: ne,
						anchor: re,
						reducedMotion: c
					}),
					/* @__PURE__ */ (0, R.jsx)(Le, {
						target: !!O,
						desktop: !r,
						ready: L,
						nextPortal: ae
					}),
					r && /* @__PURE__ */ (0, R.jsx)(Ie, {
						ready: L,
						nextPortal: ae,
						zap: B,
						portal: () => b.current?.place()
					})
				]
			})
		})
	] });
}
//#endregion
export { at as LaserWalkTool };
