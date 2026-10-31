import { r as e } from "./rolldown-runtime-B0aSnxlc.js";
import { $i as t, Ei as n, Fr as r, Ii as i, Li as a, Ma as o, Mi as s, Na as c, Ni as l, Nr as u, Nt as d, Pr as f, Qi as p, Rr as m, Ta as h, Ti as g, Vi as _, Wi as v, Xi as y, Zi as b, di as x, dr as S, i as C, ji as ee, jr as te, li as w, ni as T, pi as ne, sr as E, t as D, ti as O, wi as re, zi as ie, zr as ae } from "./LaserIcon--oJ4-Fng.js";
//#region packages/engine/src/walk-tools/raycast-walk-scene.ts
function k(e, t) {
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
var A = /* @__PURE__ */ e(c(), 1), j = .58, M = 1.1, N = 1.18, oe = .72, P = (e) => e === "blue" ? "gold" : "blue", F = {
	blue: "#42cfff",
	gold: "#efa632"
}, I = o();
function L({ veil: e, iris: t }) {
	return /* @__PURE__ */ (0, I.jsx)(S, {
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
	let i = (0, A.useRef)(null), a = (0, A.useRef)(null), o = (0, A.useRef)(0), s = (0, A.useRef)(!1);
	return (0, A.useLayoutEffect)(() => {
		o.current = 0, s.current = !1, i.current?.scale.setScalar(n || t ? 1 : 0), a.current && (a.current.visible = !1);
	}, [
		e,
		t,
		n
	]), f((e, c) => {
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
	let e = new s(), t = new g(), n = new g(), r = new g(), i = new g().makeRotationY(Math.PI), a = new b(1, 1, 1), o = new b(), c = new b(), u = new x(), d = new g(), f = new v(new b(), M * 1.15), m = new l(), h = new p(), _ = new p();
	return {
		camera: e,
		update(s, l, p) {
			if (!s.isPerspectiveCamera || (s.updateWorldMatrix(!0, !1), o.setFromMatrixPosition(s.matrixWorld), c.subVectors(o, l.center).dot(l.normal) <= .01) || (d.multiplyMatrices(s.projectionMatrix, s.matrixWorldInverse), u.setFromProjectionMatrix(d), f.center.copy(l.center), !u.intersectsSphere(f))) return !1;
			t.compose(l.center, l.rotation, a), n.compose(p.center, p.rotation, a), r.copy(n).multiply(i).multiply(t.invert()).multiply(s.matrixWorld), r.decompose(e.position, e.quaternion, a), a.set(1, 1, 1), e.near = s.near, e.far = s.far, e.layers.mask = s.layers.mask, e.updateMatrixWorld(!0), e.projectionMatrix.copy(s.projectionMatrix), m.setFromNormalAndCoplanarPoint(p.normal, p.center).applyMatrix4(e.matrixWorldInverse), h.set(m.normal.x, m.normal.y, m.normal.z, m.constant);
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
	let e = new t(1, 1, {
		type: ne,
		depthBuffer: !0
	});
	e.texture.name = "portal-destination-view";
	let n = new y(), r = new p(), i = new p(), a = [];
	return {
		target: e,
		render(t, o, s, c) {
			t.getDrawingBufferSize(n);
			let l = Math.min(1, 1024 / Math.max(n.x, n.y)), u = Math.max(1, Math.round(n.x * l)), d = Math.max(1, Math.round(n.y * l));
			(e.width !== u || e.height !== d) && e.setSize(u, d);
			let f = t.getRenderTarget(), p = t.getActiveCubeFace(), m = t.getActiveMipmapLevel();
			t.getViewport(r), t.getScissor(i);
			let h = t.getScissorTest(), g = t.autoClear, _ = t.xr.enabled, v = t.shadowMap.autoUpdate, y = t.shadowMap.needsUpdate;
			try {
				o.traverse((e) => {
					(e.userData.portalLiveView || e.userData.portalAnchor === c) && e.visible && (a.push(e), e.visible = !1);
				}), t.xr.enabled = !1, t.shadowMap.autoUpdate = !1, t.shadowMap.needsUpdate = !1, t.autoClear = !0, t.setRenderTarget(e), t.setScissorTest(!1), t.render(o, s);
			} finally {
				for (let e of a) e.visible = !0;
				a.length = 0, t.xr.enabled = _, t.shadowMap.autoUpdate = v, t.shadowMap.needsUpdate = y, t.autoClear = g, t.setRenderTarget(f, p, m), t.setViewport(r), t.setScissor(i), t.setScissorTest(h);
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
	let n = (0, A.useRef)(null), r = (0, A.useMemo)(z, []), i = (0, A.useMemo)(se, []);
	return (0, A.useEffect)(() => () => i.dispose(), [i]), f(({ camera: a, scene: o, gl: s }) => {
		n.current && (n.current.visible = !1, r.update(a, e, t) && (i.render(s, o, r.camera, t), n.current.visible = !0));
	}, .5), {
		surface: n,
		texture: i.target.texture
	};
}
//#endregion
//#region packages/walk-laser/src/portals/PortalView.tsx
function le({ entry: e, exit: t }) {
	let { surface: n, texture: r } = ce(e, t), i = (0, A.useMemo)(() => ({ destination: { value: r } }), [r]);
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
	let o = !!n, s = (0, A.useRef)(null), { opening: c, ripple: l } = R(e, r, i, a), u = F[t];
	return f((e, n) => {
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
					j,
					M,
					1
				],
				children: [
					/* @__PURE__ */ (0, I.jsxs)("mesh", {
						raycast: B,
						children: [/* @__PURE__ */ (0, I.jsx)("circleGeometry", { args: [1, 64] }), /* @__PURE__ */ (0, I.jsx)(E, {
							color: t === "blue" ? "#102d49" : "#443024",
							emissive: u,
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
						] }), /* @__PURE__ */ (0, I.jsx)(E, {
							color: u,
							emissive: u,
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
						] }), /* @__PURE__ */ (0, I.jsx)(E, {
							color: "#fff0d5",
							emissive: u,
							emissiveIntensity: 1,
							toneMapped: !1
						})]
					}),
					/* @__PURE__ */ (0, I.jsxs)("mesh", {
						ref: l,
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
						] }), /* @__PURE__ */ (0, I.jsx)(E, {
							color: u,
							emissive: u,
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
							] }), /* @__PURE__ */ (0, I.jsx)(E, {
								color: u,
								emissive: u,
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
		let r = [];
		for (let i of t) n.prototype.raycast.call(i, e, r);
		return r.sort((e, t) => e.distance - t.distance), { hit: r[0] ?? null };
	};
}
//#endregion
//#region packages/walk-laser/src/portals/portal-placement.ts
var fe = (e) => e.face?.normal.clone().applyMatrix3(new re().getNormalMatrix(e.object.matrixWorld)).normalize();
function pe(e, t, n, r = k) {
	let o = fe(e);
	if (!o || Math.abs(o.y) > .05 && o.y < .98) return null;
	for (let t = e.object; t; t = t.parent) if (t.userData.walkDeviceInteraction || t.userData.walkCollider) return null;
	let s = o.y > .98;
	o.set(o.x, +!!s, o.z).normalize();
	let c = e.point.clone().addScaledVector(o, s ? 0 : oe);
	s || (c.y -= N);
	let l = n.resolveLanding(c);
	if (!l || s && Math.abs(l.elevation - e.point.y) > .12) return null;
	let u = e.point.clone();
	s || (u.y = l.elevation + N);
	let d = new i().setFromUnitVectors(new b(0, 0, 1), o), f = new a();
	for (let e = -1; e < 24; e++) {
		let n = e * Math.PI / 12, i = (e < 0 ? new b() : new b(Math.cos(n) * (j + .04), Math.sin(n) * (M + .04), 0)).applyQuaternion(d).add(u);
		f.set(i.clone().addScaledVector(o, .08), o.clone().negate()), f.far = .16;
		let a = r(f, t).hit;
		if (!a || Math.abs(a.point.clone().sub(i).dot(o)) > .025 || (fe(a)?.dot(o) ?? 0) < .98) return null;
	}
	return {
		center: u.addScaledVector(o, .018),
		normal: o,
		rotation: d,
		landing: l
	};
}
function me(e, t) {
	return e.center.distanceTo(t.center) < j * 2 + .18;
}
//#endregion
//#region packages/walk-laser/src/portals/portal-restoration.ts
function he(e, t, n) {
	let r = {}, i = new a();
	t.updateMatrixWorld(!0);
	let o = de(t);
	for (let a of ["blue", "gold"]) {
		let s = e[a];
		if (!s) continue;
		i.set(s.center.clone().addScaledVector(s.normal, .1), s.normal.clone().negate()), i.far = .2;
		let c = o(i).hit, l = c && pe(c, t, n, o);
		l && l.center.distanceTo(s.center) < .025 && l.normal.dot(s.normal) > .999 && l.landing.floorId === s.landing.floorId && Math.abs(l.landing.elevation - s.landing.elevation) < .025 && Math.hypot(l.landing.x - s.landing.x, l.landing.z - s.landing.z) < .025 && (r[a] = s);
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
	return n.y -= d - (e.normal.y > .98 ? 0 : N), n.sub(e.center).applyQuaternion(e.rotation.clone().invert());
}
function _e(e) {
	return (e.x / (j - .22)) ** 2 + (e.y / (M - .22)) ** 2 < 1;
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
function be(e, t, n, i) {
	let { camera: a } = r(), o = (0, A.useMemo)(ye, []), s = (0, A.useRef)(null), c = (0, A.useRef)(null), l = (0, A.useRef)(null), u = (0, A.useCallback)(() => {
		if (l.current === null) return;
		let e = a;
		e.fov = l.current, e.updateProjectionMatrix(), l.current = null;
	}, [a]);
	(0, A.useEffect)(() => () => {
		o.cancel(), u();
	}, [o, u]);
	let d = (0, A.useCallback)((e) => o.start(e, t), [o, t]);
	return f((t, r) => {
		e || o.cancel();
		let d = o.advance(r, (e) => {
			let t = n.teleport(e.landing, e.facing);
			return t || i(), t;
		});
		if (s.current && (s.current.style.opacity = String(d.opacity), s.current.style.visibility = d.opacity > 0 ? "visible" : "hidden", s.current.style.setProperty("--portal-color", F[d.color])), c.current && (c.current.style.display = d.reduced ? "none" : "block", c.current.style.transform = `translate(-50%, -50%) scale(${d.ringScale})`), d.fovOffset > 0 && a.isPerspectiveCamera) {
			let e = a;
			l.current ??= e.fov, e.fov = l.current + d.fovOffset, e.updateProjectionMatrix();
		} else u();
	}), {
		transition: o,
		travel: d,
		veil: s,
		iris: c
	};
}
//#endregion
//#region packages/walk-laser/src/portals/usePortalInput.ts
function xe(e, t) {
	let n = m();
	(0, A.useEffect)(() => {
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
	let { x: t, z: n, elevation: r, floorId: a } = e.landing;
	if (![
		t,
		n,
		r
	].every((e) => typeof e == "number" && Number.isFinite(e) && Math.abs(e) < 1e6) || typeof a != "string" || !a) return;
	let o = new b().fromArray(e.normal), s = new i().fromArray(e.rotation);
	if (!(Math.abs(o.length() - 1) > .001 || Math.abs(s.length() - 1) > .001 || Math.abs(o.y) > .001 && o.y < .999 || new b(0, 0, 1).applyQuaternion(s).dot(o) < .999)) return {
		center: new b().fromArray(e.center),
		normal: o,
		rotation: s,
		landing: {
			x: t,
			z: n,
			elevation: r,
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
	let e = h(), [t, n] = (0, A.useState)(() => Te(e?.read(Se))), r = (0, A.useRef)(t), i = (0, A.useRef)(!1);
	return {
		state: t,
		current: r,
		pending: i,
		commit: (0, A.useCallback)(async (t) => {
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
function Oe(e, t, n = 30) {
	let r = Math.min(30, n + .025), i = null;
	for (let n of ["blue", "gold"]) {
		let a = t[n];
		if (!a || e.direction.dot(a.normal) >= -.001) continue;
		let o = e.intersectPlane(new l().setFromNormalAndCoplanarPoint(a.normal, a.center), new b());
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
function ke(e, t, n, i) {
	let { camera: o, scene: s } = r(), { state: c, current: l, pending: u, commit: d } = De(), [p, m] = (0, A.useState)({}), h = (0, A.useRef)(!1), g = (0, A.useMemo)(() => new a(), []), _ = (0, A.useMemo)(ve, []), v = be(e, i, t, _.reset), b = (0, A.useCallback)((t, n) => {
		let r = Oe(t, {
			...p,
			...l.current.pair
		}, n);
		if (!r) return null;
		if (!e || p[r.color] || u.current || v.transition.busy) return r;
		let { pair: i, next: a } = l.current, o = { ...i };
		return delete o[r.color], _.reset(), m((e) => ({
			...e,
			[r.color]: i[r.color]
		})), d({
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
		l,
		u,
		d,
		_,
		v.transition,
		p
	]), x = (0, A.useCallback)((e) => {
		m((t) => {
			let n = { ...t };
			return delete n[e], n;
		});
	}, []), S = (0, A.useCallback)(() => {
		if (!e || u.current || v.transition.busy) return;
		s.updateMatrixWorld(!0), g.setFromCamera(new y(), o), g.far = 30;
		let r = k(g, s).hit, i = b(g.ray, r?.distance ?? 30);
		if (i) {
			n(i.point, i.normal, F[i.color], l.current.next);
			return;
		}
		if (Object.keys(p).length) return;
		let a = r && pe(r, s, t);
		if (!a) return;
		let c = ge(l.current.pair, l.current.next), f = c.nextColor, m = c.place(a);
		m && (_.reset(), d({
			pair: m,
			next: c.nextColor
		}), n(a.center, a.normal, F[f], c.nextColor));
	}, [
		e,
		o,
		s,
		g,
		t,
		_,
		n,
		v.transition,
		l,
		u,
		d,
		b,
		p
	]);
	return xe(e, S), f(() => {
		if (!e) {
			_.reset();
			return;
		}
		if (!h.current) {
			h.current = !0;
			let e = he(l.current.pair, s, t);
			if (Object.keys(e).length !== Object.keys(l.current.pair).length) {
				d({
					...l.current,
					pair: e
				});
				return;
			}
		}
		v.transition.busy || u.current || _.step(l.current.pair, o.position, {
			yaw: o.rotation.y,
			pitch: o.rotation.x
		}, v.travel);
	}), {
		pair: c.pair,
		next: c.next,
		closing: p,
		closed: x,
		remove: b,
		place: S,
		veil: v.veil,
		iris: v.iris
	};
}
//#endregion
//#region packages/walk-laser/src/portals/GunPortals.tsx
function Ae({ active: e, navigation: t, reducedMotion: n, onPlaced: r, controls: i, onNextColor: a }) {
	let { pair: o, next: s, closing: c, closed: l, remove: u, place: d, veil: f, iris: p } = ke(e, t, r, n);
	return (0, A.useImperativeHandle)(i, () => ({
		place: d,
		remove: u
	}), [d, u]), (0, A.useEffect)(() => {
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
	let t = m(), [n, r] = (0, A.useState)(Ne), i = (0, A.useCallback)(() => {
		Me = !0, r(!0);
		try {
			window.localStorage.setItem(je, "dismissed");
		} catch {}
	}, []);
	return (0, A.useEffect)(() => {
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
				children: [/* @__PURE__ */ (0, I.jsx)(D, {}), /* @__PURE__ */ (0, I.jsxs)("div", { children: [/* @__PURE__ */ (0, I.jsx)("h2", { children: "Pew pew!" }), /* @__PURE__ */ (0, I.jsx)("p", { children: "Your home, a little more playful." })] })]
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
	return /* @__PURE__ */ (0, I.jsx)(E, {
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
var W = new _();
W.moveTo(-.205, .045), W.bezierCurveTo(-.225, .13, -.165, .16, -.105, .145), W.lineTo(.29, .12), W.quadraticCurveTo(.335, .1, .3, .015), W.quadraticCurveTo(.285, -.04, .21, -.053), W.lineTo(.045, -.065), W.quadraticCurveTo(-.02, -.085, -.105, -.065), W.quadraticCurveTo(-.215, -.065, -.205, .045), W.closePath();
var G = new _();
G.moveTo(-.205, .075), G.bezierCurveTo(-.213, .135, -.174, .163, -.105, .157), G.quadraticCurveTo(-.075, .155, -.039, .121), G.lineTo(.228, .116), G.quadraticCurveTo(.258, .12, .27, .147), G.lineTo(.318, .145), G.quadraticCurveTo(.335, .138, .32, .097), G.lineTo(.288, .018), G.quadraticCurveTo(.275, -.015, .235, -.014), G.lineTo(.139, -.022), G.quadraticCurveTo(.111, -.023, .09, .003), G.lineTo(.047, .047), G.lineTo(-.025, .044), G.bezierCurveTo(-.054, .094, -.098, .118, -.143, .093), G.quadraticCurveTo(-.184, .068, -.205, .075), G.closePath();
var K = new _();
K.moveTo(-.155, -.037), K.quadraticCurveTo(-.1, -.029, -.055, -.073), K.quadraticCurveTo(-.068, -.124, -.094, -.185), K.lineTo(-.127, -.293), K.quadraticCurveTo(-.124, -.322, -.158, -.325), K.lineTo(-.269, -.292), K.quadraticCurveTo(-.28, -.284, -.264, -.257), K.lineTo(-.188, -.087), K.quadraticCurveTo(-.19, -.048, -.155, -.037), K.closePath();
var q = new _();
q.moveTo(-.157, -.07), q.quadraticCurveTo(-.104, -.075, -.087, -.1), q.quadraticCurveTo(-.096, -.172, -.152, -.282), q.quadraticCurveTo(-.184, -.292, -.245, -.265), q.lineTo(-.179, -.112), q.quadraticCurveTo(-.17, -.073, -.157, -.07), q.closePath();
var J = new _();
J.moveTo(-.27, -.261), J.quadraticCurveTo(-.218, -.29, -.139, -.284), J.quadraticCurveTo(-.12, -.287, -.116, -.318), J.quadraticCurveTo(-.106, -.357, -.15, -.361), J.quadraticCurveTo(-.235, -.351, -.299, -.318), J.quadraticCurveTo(-.31, -.3, -.287, -.277), J.closePath();
var Y = new _();
Y.moveTo(-.085, -.055), Y.lineTo(.11, -.053), Y.bezierCurveTo(.166, -.09, .145, -.182, .076, -.186), Y.lineTo(-.082, -.17), Y.quadraticCurveTo(-.12, -.125, -.085, -.055), Y.closePath();
var X = new ee();
X.moveTo(-.065, -.08), X.quadraticCurveTo(-.085, -.115, -.065, -.146), X.lineTo(.064, -.158), X.bezierCurveTo(.112, -.159, .14, -.116, .1, -.08), X.closePath(), Y.holes.push(X);
var Z = new _();
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
	let a = (0, A.useMemo)(() => {
		let r = new w(ze[e], {
			depth: t,
			steps: 1,
			curveSegments: 16,
			bevelEnabled: !0,
			bevelThickness: n,
			bevelSize: n,
			bevelSegments: 6
		});
		r.translate(0, 0, -t / 2), r.deleteAttribute("normal"), r.deleteAttribute("uv");
		let i = te(r, 1e-5);
		return i.computeVertexNormals(), r.dispose(), i;
	}, [
		e,
		t,
		n
	]);
	return (0, A.useEffect)(() => () => a.dispose(), [a]), /* @__PURE__ */ (0, I.jsx)("mesh", {
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
					children: [/* @__PURE__ */ (0, I.jsx)(C, {
						args: [
							.01,
							.06,
							.023
						],
						radius: .004,
						children: /* @__PURE__ */ (0, I.jsx)(U, { kind: "trim" })
					}), /* @__PURE__ */ (0, I.jsx)(C, {
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
			/* @__PURE__ */ (0, I.jsx)(C, {
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
			/* @__PURE__ */ (0, I.jsx)(C, {
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
			/* @__PURE__ */ (0, I.jsx)(C, {
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
			/* @__PURE__ */ (0, I.jsx)(C, {
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
	let t = (0, A.useRef)(null), n = (0, A.useRef)(Infinity);
	return (0, A.useEffect)(() => {
		e > 0 && (n.current = 0);
	}, [e]), f((e, r) => {
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
				children: [/* @__PURE__ */ (0, I.jsx)("octahedronGeometry", { args: [1, 0] }), /* @__PURE__ */ (0, I.jsx)(E, {
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
				] }), /* @__PURE__ */ (0, I.jsx)(E, {
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
					] }), /* @__PURE__ */ (0, I.jsx)(E, {
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
	let e = (0, A.useMemo)(() => [
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
	].map(([e, t]) => new y(e, t)), []);
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
			/* @__PURE__ */ (0, I.jsx)(C, {
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
			/* @__PURE__ */ (0, I.jsx)(C, {
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
			[-1, 1].map((e) => /* @__PURE__ */ (0, I.jsx)(C, {
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
			/* @__PURE__ */ (0, I.jsx)(C, {
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
			/* @__PURE__ */ (0, I.jsx)(C, {
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
				...ae({ ref: e }),
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
			].map((e) => /* @__PURE__ */ (0, I.jsx)(C, {
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
			/* @__PURE__ */ (0, I.jsx)(C, {
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
					/* @__PURE__ */ (0, I.jsx)(C, {
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
					/* @__PURE__ */ (0, I.jsx)(C, {
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
					/* @__PURE__ */ (0, I.jsx)(C, {
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
			/* @__PURE__ */ (0, I.jsx)(C, {
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
				children: [/* @__PURE__ */ (0, I.jsx)(C, {
					args: [
						.137,
						.032,
						.063
					],
					radius: .015,
					children: /* @__PURE__ */ (0, I.jsx)(U, { kind: "grip" })
				}), /* @__PURE__ */ (0, I.jsx)(C, {
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
			/* @__PURE__ */ (0, I.jsx)(C, {
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
function qe(e, t, n) {
	let [r, i] = (0, A.useState)([]), [a, o] = (0, A.useState)({ id: 0 }), s = (0, A.useRef)(0), c = (0, A.useRef)(0);
	(0, A.useEffect)(() => {
		if (!r.length) return;
		let e = window.setTimeout(() => i((e) => e.filter((e) => performance.now() - (e.createdAt ?? 0) < 3400)), 250);
		return () => window.clearTimeout(e);
	}, [r]);
	let l = (0, A.useCallback)((r) => {
		let a = ++s.current;
		if (o({
			id: a,
			...r.color === void 0 ? {} : { color: r.color }
		}), n) return;
		e.current?.updateWorldMatrix(!0, !1);
		let l = e.current?.getWorldPosition(new b()) ?? t.position.clone(), u = {
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
function Je({ start: e, end: t, duration: n, color: r }) {
	let i = (0, A.useRef)(null), a = (0, A.useRef)(0), o = (0, A.useMemo)(() => {
		let e = new T();
		return e.setAttribute("position", new O(/* @__PURE__ */ new Float32Array(576), 3)), e.setAttribute("normal", new O(/* @__PURE__ */ new Float32Array(576), 3)), e;
	}, []);
	(0, A.useEffect)(() => () => o.dispose(), [o]);
	let s = (0, A.useMemo)(() => ({
		direction: new b(),
		side: new b(),
		up: new b(),
		view: new b(),
		a: new b(),
		b: new b()
	}), []);
	return f(({ camera: r }, c) => {
		if (a.current += c, !i.current || (i.current.visible = a.current < n, !i.current.visible)) return;
		let { direction: l, side: u, up: d, view: f, a: p, b: m } = s;
		l.subVectors(t, e).normalize(), f.subVectors(r.position, e).normalize(), u.crossVectors(l, f), u.lengthSq() < .001 && u.set(1, 0, 0).applyQuaternion(r.quaternion), u.normalize(), d.crossVectors(l, u).normalize();
		let h = o.attributes.position, g = Math.floor(a.current * 30), _ = (e) => Math.sin(e * 127.1 + g * 39.7) * Math.cos(e * 71.3 + g * 11.9), v = (n, r) => r.copy(e).lerp(t, n / 24).addScaledVector(u, _(n) * .095 * Math.sin(Math.PI * n / 24)).addScaledVector(d, _(n + 30) * .065 * Math.sin(Math.PI * n / 24)), y = .009 + .005 * (1 - a.current / n);
		for (let e = 0; e < 32; e++) e < 24 ? (v(e, p), v(e + 1, m)) : (v(3 + (e - 24) * 2, p), m.copy(p).addScaledVector(u, _(e + 80) * .24).addScaledVector(d, _(e + 90) * .2).addScaledVector(l, .13)), [
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
		h.needsUpdate = !0, o.computeVertexNormals();
	}), /* @__PURE__ */ (0, I.jsx)("mesh", {
		name: "laser-electric-arc",
		ref: i,
		geometry: o,
		frustumCulled: !1,
		raycast: () => void 0,
		children: /* @__PURE__ */ (0, I.jsx)(E, {
			color: r ?? "#9beaff",
			emissive: r ?? "#219bff",
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
	let n = (0, A.useRef)(null), r = (0, A.useRef)(0);
	return f((i, a) => {
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
			children: [/* @__PURE__ */ (0, I.jsx)("circleGeometry", { args: [.115, 11] }), /* @__PURE__ */ (0, I.jsx)(E, {
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
				children: [/* @__PURE__ */ (0, I.jsx)("planeGeometry", { args: [.05 + t % 3 * .016, .005] }), /* @__PURE__ */ (0, I.jsx)(E, {
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
	let t = (0, A.useRef)(null), n = (0, A.useRef)(null), r = (0, A.useRef)(null), a = (0, A.useRef)(0), o = (0, A.useMemo)(() => {
		let t = e.end.clone().sub(e.start), n = t.length();
		return t.normalize(), {
			distance: n,
			direction: t,
			rotation: new i().setFromUnitVectors(new b(0, 0, 1), t)
		};
	}, [e]);
	f((i, s) => {
		a.current += s;
		let c = Qe(o.distance, a.current);
		if (t.current && (t.current.visible = c.traveling, t.current.position.copy(e.start).addScaledVector(o.direction, (c.head + c.tail) / 2), t.current.scale.set(1, 1, Math.max(.001, c.head - c.tail))), n.current) {
			n.current.visible = e.hit && c.impact;
			let t = .5 + c.impactProgress * 2;
			n.current.scale.setScalar(t), r.current && r.current.scale.setScalar(1 + c.impactProgress);
			for (let e of n.current.children) e.isMesh && (e.material.opacity = (e.userData.glowOpacity ?? 1) * (1 - c.impactProgress) ** 2);
		}
	});
	let s = new i().setFromUnitVectors(new b(0, 0, 1), e.normal ?? o.direction.clone().negate()), c = e.end.clone().addScaledVector(e.normal ?? o.direction.clone().negate(), .004);
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
				ref: t,
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
					] }), /* @__PURE__ */ (0, I.jsx)(E, {
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
					] }), /* @__PURE__ */ (0, I.jsx)(E, {
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
				ref: n,
				position: c.toArray(),
				quaternion: s.toArray(),
				visible: !1,
				children: [
					/* @__PURE__ */ (0, I.jsxs)("mesh", {
						raycast: $,
						children: [/* @__PURE__ */ (0, I.jsx)("icosahedronGeometry", { args: [.045, 1] }), /* @__PURE__ */ (0, I.jsx)(E, {
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
						ref: r,
						raycast: $,
						children: [/* @__PURE__ */ (0, I.jsx)("torusGeometry", { args: [
							.052,
							.006,
							5,
							20
						] }), /* @__PURE__ */ (0, I.jsx)(E, {
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
						] }), /* @__PURE__ */ (0, I.jsx)(E, {
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
							] }), /* @__PURE__ */ (0, I.jsx)(E, {
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
	let { gl: e, camera: n, scene: i } = r(), a = (0, A.useMemo)(() => new ie(), []), o = (0, A.useMemo)(() => ({
		id: 0,
		start: new b(),
		end: new b(0, 0, -1),
		hit: !0
	}), []);
	return (0, A.useEffect)(() => {
		e.compileAsync(a, n, i);
		let r = new t(1, 1), o = e.getRenderTarget();
		try {
			e.setRenderTarget(r), e.compileAsync(a, n, i);
		} finally {
			e.setRenderTarget(o), r.dispose();
		}
	}, [
		e,
		n,
		i,
		a
	]), u(/* @__PURE__ */ (0, I.jsx)($e, { shot: o }), a);
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
	let t = (0, A.useRef)(null), n = (0, A.useMemo)(() => new b(), []);
	return f(({ camera: r, size: i }) => {
		if (!t.current || !e.current) return;
		e.current.updateWorldMatrix(!0, !1), e.current.getWorldPosition(n).project(r);
		let a = Math.min(250, Math.max(148, i.width * .23)) * .7, o = Math.max(a / 2 + 12, Math.min(i.width - a / 2 - 12, (n.x + 1) * i.width / 2)), s = Math.max(a * .6 + 16, (1 - n.y) * i.height / 2 - 14);
		t.current.style.transform = `translate3d(${o}px, ${s}px, 0)`, t.current.style.width = `${a}px`;
	}, 1), t;
}
//#endregion
//#region packages/walk-laser/src/LaserWalkTool.tsx
function ct({ enabled: e, pointerLocked: t, coarsePointer: n, reducedMotion: i, navigation: o, canActivateTarget: s, activateTarget: c }) {
	let { camera: l, scene: d, gl: p } = r(), h = m(), g = (0, A.useRef)(null), _ = (0, A.useRef)(null), v = (0, A.useRef)(null), x = (0, A.useMemo)(() => new ie(), []);
	(0, A.useEffect)(() => {
		p.compileAsync(x, l);
	}, [
		p,
		x,
		l
	]);
	let { shots: C, triggerId: ee, triggerColor: te, recoil: w, emitShot: T } = qe(_, l, i), ne = st(_), E = C.at(-1), [D, O] = (0, A.useState)("blue"), [ae, j] = (0, A.useState)(null), M = (0, A.useRef)(null), N = (0, A.useRef)({
		previous: l.position.clone(),
		speed: 0,
		phase: 0,
		time: 0
	}), oe = (0, A.useMemo)(() => tt(), []), P = (0, A.useMemo)(() => new a(), []), F = (0, A.useMemo)(() => new y(), []), L = e && (n || t), R = (0, A.useRef)(L);
	R.current = L, f((e, t) => {
		let n = N.current, r = Math.hypot(l.position.x - n.previous.x, l.position.z - n.previous.z), a = L && t > 0 && r < .5 ? r / t : 0;
		n.previous.copy(l.position), n.speed += (Math.min(a, 5) - n.speed) * (1 - Math.exp(-10 * t)), n.time += t, n.phase += t * (7 + n.speed * 2.5);
		let o = i ? 0 : Math.min(n.speed / 2, 1.6), c = i ? 0 : Math.sin(n.time * 1.6) * .0015 + Math.sin(n.phase) * .004 * o, u = i ? 0 : Math.cos(n.time * 2) * .0015 + Math.cos(n.phase * 2) * .003 * o;
		if (g.current) {
			w.current *= Math.exp(-18 * t);
			let e = l, n = 1.2 * Math.tan(e.fov * Math.PI / 360), r = n * e.aspect;
			g.current.scale.setScalar(Math.min(.58, r * .56)), g.current.position.set(r * .29 + c, -n * .19 + u - o * .004, -.6 + (i ? 0 : w.current)), g.current.position.applyQuaternion(l.quaternion).add(l.position), g.current.quaternion.copy(l.quaternion), i || (g.current.rotateX(w.current * .9), g.current.rotateZ(c * 2));
		}
		if (!L) {
			M.current !== null && (M.current = null, j(null));
			return;
		}
		P.setFromCamera(F, l);
		let { target: f } = k(P, d), p = f && s(f) ? f.label : null;
		p !== M.current && (M.current = p, j(p));
	}), f(({ gl: t }) => {
		if (!e) return;
		let n = t.autoClear;
		try {
			t.autoClear = !1, t.clearDepth(), t.render(x, l);
		} finally {
			t.autoClear = n;
		}
	}, 2);
	let z = (0, A.useCallback)(() => {
		R.current && oe(performance.now(), async () => {
			d.updateMatrixWorld(!0), P.setFromCamera(F, l);
			let { hit: e, target: t } = k(P, d), n = v.current?.remove(P.ray, e?.distance ?? 30);
			if (n) {
				T({
					end: n.point,
					normal: n.normal,
					hit: !0,
					scorch: !1
				});
				return;
			}
			let r = e?.point.clone() ?? P.ray.at(30, new b()), i = e?.face?.normal.clone().applyMatrix3(new re().getNormalMatrix(e.object.matrixWorld)).normalize();
			i && i.dot(P.ray.direction) > 0 && i.negate(), T({
				end: r,
				hit: !!e,
				...i === void 0 ? {} : { normal: i }
			}), t && await c(t);
		});
	}, [
		c,
		l,
		F,
		oe,
		P,
		T,
		d
	]);
	(0, A.useEffect)(() => {
		let e = (e) => {
			!R.current || n || e.button !== 0 || !h.root.pointerLockElement || (e.preventDefault(), z());
		}, t = (e) => {
			!R.current || e.code !== "KeyF" || e.repeat || e.ctrlKey || e.metaKey || e.altKey || e.target instanceof HTMLElement && e.target.closest("input, textarea, select, [contenteditable=true]") || (e.preventDefault(), z());
		};
		return h.events.addEventListener("pointerdown", e), h.events.addEventListener("keydown", t), () => {
			h.events.removeEventListener("pointerdown", e), h.events.removeEventListener("keydown", t);
		};
	}, [
		n,
		h.events,
		h.root,
		z
	]);
	let se = (0, A.useCallback)((e, t, n, r) => {
		O(r), T({
			end: e,
			normal: t,
			color: n,
			hit: !0,
			scorch: !1
		});
	}, [T]);
	return /* @__PURE__ */ (0, I.jsxs)(I.Fragment, { children: [
		/* @__PURE__ */ (0, I.jsx)(Ae, {
			active: L,
			navigation: o,
			reducedMotion: i,
			onPlaced: se,
			onNextColor: O,
			controls: v
		}),
		u(/* @__PURE__ */ (0, I.jsxs)(I.Fragment, { children: [
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
					shotId: E?.id ?? 0
				})
			})
		] }), x),
		!i && /* @__PURE__ */ (0, I.jsx)(et, {}),
		C.map((e) => /* @__PURE__ */ (0, I.jsx)($e, { shot: e }, e.id)),
		/* @__PURE__ */ (0, I.jsx)(S, {
			onOcclude: () => void 0,
			fullscreen: !0,
			calculatePosition: (e, t, n) => [n.width / 2, n.height / 2],
			zIndexRange: [10, 0],
			style: { pointerEvents: "none" },
			children: e && /* @__PURE__ */ (0, I.jsxs)("div", {
				className: "walk-laser",
				"data-ready": L,
				children: [
					/* @__PURE__ */ (0, I.jsx)(Pe, { coarsePointer: n }),
					/* @__PURE__ */ (0, I.jsx)(ot, {
						shotId: ee,
						shotColor: te,
						anchor: ne,
						reducedMotion: i
					}),
					/* @__PURE__ */ (0, I.jsx)(Ie, {
						target: !!ae,
						desktop: !n,
						ready: L,
						nextPortal: D
					}),
					n && /* @__PURE__ */ (0, I.jsx)(Fe, {
						ready: L,
						nextPortal: D,
						zap: z,
						portal: () => v.current?.place()
					})
				]
			})
		})
	] });
}
//#endregion
export { ct as LaserWalkTool };
