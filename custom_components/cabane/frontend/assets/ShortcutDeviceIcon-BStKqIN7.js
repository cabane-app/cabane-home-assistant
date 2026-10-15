import { r as e } from "./rolldown-runtime-B0aSnxlc.js";
import { $t as t, A as n, An as r, Ar as i, Bn as a, Br as o, Bt as s, Ct as c, Dn as l, Dr as u, Er as d, Fi as f, Fr as p, Hn as m, Hr as h, Ht as g, Ii as _, In as v, Ir as y, It as b, Jn as x, Jr as S, Jt as C, Kn as w, Kr as T, Kt as ee, Lr as E, Lt as te, O as ne, On as re, Or as ie, P as ae, R as D, Rr as oe, Rt as O, Si as se, Sn as ce, Sr as le, Tr as k, U as ue, Un as A, Ur as de, Ut as fe, Vn as pe, Vt as me, Wn as he, Wt as ge, Xt as _e, Zn as ve, Zr as j, Zt as ye, _t as be, ai as M, an as xe, ar as Se, cn as Ce, en as we, er as N, fi as P, gi as Te, gt as Ee, hi as De, ii as Oe, ir as F, it as ke, j as Ae, jn as I, jr as je, kr as Me, ln as Ne, lr as Pe, mi as Fe, n as L, ni as Ie, nr as Le, on as Re, pi as ze, pn as Be, qn as Ve, qr as He, qt as Ue, ri as We, rn as Ge, t as Ke, ti as qe, tn as Je, vt as Ye, wn as Xe, wr as Ze, wt as Qe, xr as $e, xt as et, y as tt, zn as nt } from "./LaserIcon-DRDYMTYZ.js";
//#region node_modules/@react-three/drei/core/Billboard.js
var R = /* @__PURE__ */ e(_()), rt = /* @__PURE__ */ R.forwardRef(function({ children: e, follow: t = !0, lockX: n = !1, lockY: r = !1, lockZ: i = !1, ...a }, o) {
	let s = R.useRef(null), c = R.useRef(null), l = new S();
	return F(({ camera: e }) => {
		if (!t || !c.current) return;
		let a = s.current.rotation.clone();
		c.current.updateMatrix(), c.current.updateWorldMatrix(!1, !1), c.current.getWorldQuaternion(l), e.getWorldQuaternion(s.current.quaternion).premultiply(l.invert()), n && (s.current.rotation.x = a.x), r && (s.current.rotation.y = a.y), i && (s.current.rotation.z = a.z);
	}), R.useImperativeHandle(o, () => c.current, []), /*#__PURE__*/ R.createElement("group", v({ ref: c }, a), /*#__PURE__*/ R.createElement("group", { ref: s }, e));
}), z = (e) => e, it = (e) => e, at = (e) => {
	if (e === void 0) return null;
	if (typeof e != "string") throw Error("The stored project record is not serialized JSON.");
	return e;
}, ot = (e) => {
	let t = async (t, n, r) => {
		let i = [];
		if (n !== null) {
			let e;
			try {
				e = JSON.parse(n);
			} catch {}
			e?.draft && e.published && (i = pe(e));
		}
		return i.length && await nt(e).verify(i), Ve(e, "readwrite", [
			he,
			w,
			A
		], (e, o, s) => {
			let c = e.objectStore(he), l = () => o(c.get(t), (e) => {
				if (at(e) !== n) throw Error("Project record verification failed after storage write.");
				s(!0);
			}), u = () => {
				n === null ? o(c.delete(t), l) : o(c.put(n, t), () => {
					let r = e.objectStore(w);
					o(r.get(t), (e) => {
						if (!e) {
							l();
							return;
						}
						let i = JSON.parse(n);
						o(r.put({
							...e,
							name: i.draft.home.name,
							hasPublished: i.publishedAt !== 0
						}, t), l);
					});
				});
			}, d = () => a(e, o, i, u);
			r === void 0 ? d() : o(c.get(t), (e) => {
				at(e) === r ? d() : s(!1);
			});
		});
	};
	return {
		read: (t) => Ve(e, "readonly", he, (e, n, r) => {
			n(e.objectStore(he).get(t), (e) => r(at(e)));
		}),
		write: (e, n) => t(e, n).then(() => void 0),
		compareAndSwap: (e, n, r) => t(e, r, n),
		delete: (e) => t(e, null).then(() => void 0)
	};
}, B = Uint8Array, st = Uint16Array, ct = Int32Array, lt = new B([
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	1,
	1,
	1,
	1,
	2,
	2,
	2,
	2,
	3,
	3,
	3,
	3,
	4,
	4,
	4,
	4,
	5,
	5,
	5,
	5,
	0,
	0,
	0,
	0
]), ut = new B([
	0,
	0,
	0,
	0,
	1,
	1,
	2,
	2,
	3,
	3,
	4,
	4,
	5,
	5,
	6,
	6,
	7,
	7,
	8,
	8,
	9,
	9,
	10,
	10,
	11,
	11,
	12,
	12,
	13,
	13,
	0,
	0
]), dt = new B([
	16,
	17,
	18,
	0,
	8,
	7,
	9,
	6,
	10,
	5,
	11,
	4,
	12,
	3,
	13,
	2,
	14,
	1,
	15
]), ft = function(e, t) {
	for (var n = new st(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1];
	for (var i = new ct(n[30]), r = 1; r < 30; ++r) for (var a = n[r]; a < n[r + 1]; ++a) i[a] = a - n[r] << 5 | r;
	return {
		b: n,
		r: i
	};
}, pt = ft(lt, 2), mt = pt.b, ht = pt.r;
mt[28] = 258, ht[258] = 28;
for (var gt = ft(ut, 0), _t = gt.b, vt = gt.r, yt = new st(32768), V = 0; V < 32768; ++V) {
	var bt = (V & 43690) >> 1 | (V & 21845) << 1;
	bt = (bt & 52428) >> 2 | (bt & 13107) << 2, bt = (bt & 61680) >> 4 | (bt & 3855) << 4, yt[V] = ((bt & 65280) >> 8 | (bt & 255) << 8) >> 1;
}
for (var xt = (function(e, t, n) {
	for (var r = e.length, i = 0, a = new st(t); i < r; ++i) e[i] && ++a[e[i] - 1];
	var o = new st(t);
	for (i = 1; i < t; ++i) o[i] = o[i - 1] + a[i - 1] << 1;
	var s;
	if (n) {
		s = new st(1 << t);
		var c = 15 - t;
		for (i = 0; i < r; ++i) if (e[i]) for (var l = i << 4 | e[i], u = t - e[i], d = o[e[i] - 1]++ << u, f = d | (1 << u) - 1; d <= f; ++d) s[yt[d] >> c] = l;
	} else for (s = new st(r), i = 0; i < r; ++i) e[i] && (s[i] = yt[o[e[i] - 1]++] >> 15 - e[i]);
	return s;
}), St = new B(288), V = 0; V < 144; ++V) St[V] = 8;
for (var V = 144; V < 256; ++V) St[V] = 9;
for (var V = 256; V < 280; ++V) St[V] = 7;
for (var V = 280; V < 288; ++V) St[V] = 8;
for (var Ct = new B(32), V = 0; V < 32; ++V) Ct[V] = 5;
var wt = /*#__PURE__*/ xt(St, 9, 0), Tt = /*#__PURE__*/ xt(St, 9, 1), Et = /*#__PURE__*/ xt(Ct, 5, 0), Dt = /*#__PURE__*/ xt(Ct, 5, 1), Ot = function(e) {
	for (var t = e[0], n = 1; n < e.length; ++n) e[n] > t && (t = e[n]);
	return t;
}, kt = function(e, t, n) {
	var r = t / 8 | 0;
	return (e[r] | e[r + 1] << 8) >> (t & 7) & n;
}, At = function(e, t) {
	var n = t / 8 | 0;
	return (e[n] | e[n + 1] << 8 | e[n + 2] << 16) >> (t & 7);
}, jt = function(e) {
	return (e + 7) / 8 | 0;
}, Mt = function(e, t, n) {
	return (t == null || t < 0) && (t = 0), (n == null || n > e.length) && (n = e.length), new B(e.subarray(t, n));
}, Nt = [
	"unexpected EOF",
	"invalid block type",
	"invalid length/literal",
	"invalid distance",
	"stream finished",
	"no stream handler",
	,
	"no callback",
	"invalid UTF-8 data",
	"extra field too long",
	"date not in range 1980-2099",
	"filename too long",
	"stream finishing",
	"invalid zip data"
], Pt = function(e, t, n) {
	var r = Error(t || Nt[e]);
	if (r.code = e, Error.captureStackTrace && Error.captureStackTrace(r, Pt), !n) throw r;
	return r;
}, Ft = function(e, t, n, r) {
	var i = e.length, a = r ? r.length : 0;
	if (!i || t.f && !t.l) return n || new B(0);
	var o = !n, s = o || t.i != 2, c = t.i;
	o && (n = new B(i * 3));
	var l = function(e) {
		var t = n.length;
		if (e > t) {
			var r = new B(Math.max(t * 2, e));
			r.set(n), n = r;
		}
	}, u = t.f || 0, d = t.p || 0, f = t.b || 0, p = t.l, m = t.d, h = t.m, g = t.n, _ = i * 8;
	do {
		if (!p) {
			u = kt(e, d, 1);
			var v = kt(e, d + 1, 3);
			if (d += 3, !v) {
				var y = jt(d) + 4, b = e[y - 4] | e[y - 3] << 8, x = y + b;
				if (x > i) {
					c && Pt(0);
					break;
				}
				s && l(f + b), n.set(e.subarray(y, x), f), t.b = f += b, t.p = d = x * 8, t.f = u;
				continue;
			}
			if (v == 1) p = Tt, m = Dt, h = 9, g = 5;
			else if (v == 2) {
				var S = kt(e, d, 31) + 257, C = kt(e, d + 10, 15) + 4, w = S + kt(e, d + 5, 31) + 1;
				d += 14;
				for (var T = new B(w), ee = new B(19), E = 0; E < C; ++E) ee[dt[E]] = kt(e, d + E * 3, 7);
				d += C * 3;
				for (var te = Ot(ee), ne = (1 << te) - 1, re = xt(ee, te, 1), E = 0; E < w;) {
					var ie = re[kt(e, d, ne)];
					d += ie & 15;
					var y = ie >> 4;
					if (y < 16) T[E++] = y;
					else {
						var ae = 0, D = 0;
						for (y == 16 ? (D = 3 + kt(e, d, 3), d += 2, ae = T[E - 1]) : y == 17 ? (D = 3 + kt(e, d, 7), d += 3) : y == 18 && (D = 11 + kt(e, d, 127), d += 7); D--;) T[E++] = ae;
					}
				}
				var oe = T.subarray(0, S), O = T.subarray(S);
				h = Ot(oe), g = Ot(O), p = xt(oe, h, 1), m = xt(O, g, 1);
			} else Pt(1);
			if (d > _) {
				c && Pt(0);
				break;
			}
		}
		s && l(f + 131072);
		for (var se = (1 << h) - 1, ce = (1 << g) - 1, le = d;; le = d) {
			var ae = p[At(e, d) & se], k = ae >> 4;
			if (d += ae & 15, d > _) {
				c && Pt(0);
				break;
			}
			if (ae || Pt(2), k < 256) n[f++] = k;
			else if (k == 256) {
				le = d, p = null;
				break;
			} else {
				var ue = k - 254;
				if (k > 264) {
					var E = k - 257, A = lt[E];
					ue = kt(e, d, (1 << A) - 1) + mt[E], d += A;
				}
				var de = m[At(e, d) & ce], fe = de >> 4;
				de || Pt(3), d += de & 15;
				var O = _t[fe];
				if (fe > 3) {
					var A = ut[fe];
					O += At(e, d) & (1 << A) - 1, d += A;
				}
				if (d > _) {
					c && Pt(0);
					break;
				}
				s && l(f + 131072);
				var pe = f + ue;
				if (f < O) {
					var me = a - O, he = Math.min(O, pe);
					for (me + f < 0 && Pt(3); f < he; ++f) n[f] = r[me + f];
				}
				for (; f < pe; ++f) n[f] = n[f - O];
			}
		}
		t.l = p, t.p = le, t.b = f, t.f = u, p && (u = 1, t.m = h, t.d = m, t.n = g);
	} while (!u);
	return f != n.length && o ? Mt(n, 0, f) : n.subarray(0, f);
}, It = function(e, t, n) {
	n <<= t & 7;
	var r = t / 8 | 0;
	e[r] |= n, e[r + 1] |= n >> 8;
}, Lt = function(e, t, n) {
	n <<= t & 7;
	var r = t / 8 | 0;
	e[r] |= n, e[r + 1] |= n >> 8, e[r + 2] |= n >> 16;
}, Rt = function(e, t) {
	for (var n = [], r = 0; r < e.length; ++r) e[r] && n.push({
		s: r,
		f: e[r]
	});
	var i = n.length, a = n.slice();
	if (!i) return {
		t: Gt,
		l: 0
	};
	if (i == 1) {
		var o = new B(n[0].s + 1);
		return o[n[0].s] = 1, {
			t: o,
			l: 1
		};
	}
	n.sort(function(e, t) {
		return e.f - t.f;
	}), n.push({
		s: -1,
		f: 25001
	});
	var s = n[0], c = n[1], l = 0, u = 1, d = 2;
	for (n[0] = {
		s: -1,
		f: s.f + c.f,
		l: s,
		r: c
	}; u != i - 1;) s = n[n[l].f < n[d].f ? l++ : d++], c = n[l != u && n[l].f < n[d].f ? l++ : d++], n[u++] = {
		s: -1,
		f: s.f + c.f,
		l: s,
		r: c
	};
	for (var f = a[0].s, r = 1; r < i; ++r) a[r].s > f && (f = a[r].s);
	var p = new st(f + 1), m = zt(n[u - 1], p, 0);
	if (m > t) {
		var r = 0, h = 0, g = m - t, _ = 1 << g;
		for (a.sort(function(e, t) {
			return p[t.s] - p[e.s] || e.f - t.f;
		}); r < i; ++r) {
			var v = a[r].s;
			if (p[v] > t) h += _ - (1 << m - p[v]), p[v] = t;
			else break;
		}
		for (h >>= g; h > 0;) {
			var y = a[r].s;
			p[y] < t ? h -= 1 << t - p[y]++ - 1 : ++r;
		}
		for (; r >= 0 && h; --r) {
			var b = a[r].s;
			p[b] == t && (--p[b], ++h);
		}
		m = t;
	}
	return {
		t: new B(p),
		l: m
	};
}, zt = function(e, t, n) {
	return e.s == -1 ? Math.max(zt(e.l, t, n + 1), zt(e.r, t, n + 1)) : t[e.s] = n;
}, Bt = function(e) {
	for (var t = e.length; t && !e[--t];);
	for (var n = new st(++t), r = 0, i = e[0], a = 1, o = function(e) {
		n[r++] = e;
	}, s = 1; s <= t; ++s) if (e[s] == i && s != t) ++a;
	else {
		if (!i && a > 2) {
			for (; a > 138; a -= 138) o(32754);
			a > 2 && (o(a > 10 ? a - 11 << 5 | 28690 : a - 3 << 5 | 12305), a = 0);
		} else if (a > 3) {
			for (o(i), --a; a > 6; a -= 6) o(8304);
			a > 2 && (o(a - 3 << 5 | 8208), a = 0);
		}
		for (; a--;) o(i);
		a = 1, i = e[s];
	}
	return {
		c: n.subarray(0, r),
		n: t
	};
}, Vt = function(e, t) {
	for (var n = 0, r = 0; r < t.length; ++r) n += e[r] * t[r];
	return n;
}, Ht = function(e, t, n) {
	var r = n.length, i = jt(t + 2);
	e[i] = r & 255, e[i + 1] = r >> 8, e[i + 2] = e[i] ^ 255, e[i + 3] = e[i + 1] ^ 255;
	for (var a = 0; a < r; ++a) e[i + a + 4] = n[a];
	return (i + 4 + r) * 8;
}, Ut = function(e, t, n, r, i, a, o, s, c, l, u) {
	It(t, u++, n), ++i[256];
	for (var d = Rt(i, 15), f = d.t, p = d.l, m = Rt(a, 15), h = m.t, g = m.l, _ = Bt(f), v = _.c, y = _.n, b = Bt(h), x = b.c, S = b.n, C = new st(19), w = 0; w < v.length; ++w) ++C[v[w] & 31];
	for (var w = 0; w < x.length; ++w) ++C[x[w] & 31];
	for (var T = Rt(C, 7), ee = T.t, E = T.l, te = 19; te > 4 && !ee[dt[te - 1]]; --te);
	var ne = l + 5 << 3, re = Vt(i, St) + Vt(a, Ct) + o, ie = Vt(i, f) + Vt(a, h) + o + 14 + 3 * te + Vt(C, ee) + 2 * C[16] + 3 * C[17] + 7 * C[18];
	if (c >= 0 && ne <= re && ne <= ie) return Ht(t, u, e.subarray(c, c + l));
	var ae, D, oe, O;
	if (It(t, u, 1 + (ie < re)), u += 2, ie < re) {
		ae = xt(f, p, 0), D = f, oe = xt(h, g, 0), O = h;
		var se = xt(ee, E, 0);
		It(t, u, y - 257), It(t, u + 5, S - 1), It(t, u + 10, te - 4), u += 14;
		for (var w = 0; w < te; ++w) It(t, u + 3 * w, ee[dt[w]]);
		u += 3 * te;
		for (var ce = [v, x], le = 0; le < 2; ++le) for (var k = ce[le], w = 0; w < k.length; ++w) {
			var ue = k[w] & 31;
			It(t, u, se[ue]), u += ee[ue], ue > 15 && (It(t, u, k[w] >> 5 & 127), u += k[w] >> 12);
		}
	} else ae = wt, D = St, oe = Et, O = Ct;
	for (var w = 0; w < s; ++w) {
		var A = r[w];
		if (A > 255) {
			var ue = A >> 18 & 31;
			Lt(t, u, ae[ue + 257]), u += D[ue + 257], ue > 7 && (It(t, u, A >> 23 & 31), u += lt[ue]);
			var de = A & 31;
			Lt(t, u, oe[de]), u += O[de], de > 3 && (Lt(t, u, A >> 5 & 8191), u += ut[de]);
		} else Lt(t, u, ae[A]), u += D[A];
	}
	return Lt(t, u, ae[256]), u + D[256];
}, Wt = /*#__PURE__*/ new ct([
	65540,
	131080,
	131088,
	131104,
	262176,
	1048704,
	1048832,
	2114560,
	2117632
]), Gt = /*#__PURE__*/ new B(0), Kt = function(e, t, n, r, i, a) {
	var o = a.z || e.length, s = new B(r + o + 5 * (1 + Math.ceil(o / 7e3)) + i), c = s.subarray(r, s.length - i), l = a.l, u = (a.r || 0) & 7;
	if (t) {
		u && (c[0] = a.r >> 3);
		for (var d = Wt[t - 1], f = d >> 13, p = d & 8191, m = (1 << n) - 1, h = a.p || new st(32768), g = a.h || new st(m + 1), _ = Math.ceil(n / 3), v = 2 * _, y = function(t) {
			return (e[t] ^ e[t + 1] << _ ^ e[t + 2] << v) & m;
		}, b = new ct(25e3), x = new st(288), S = new st(32), C = 0, w = 0, T = a.i || 0, ee = 0, E = a.w || 0, te = 0; T + 2 < o; ++T) {
			var ne = y(T), re = T & 32767, ie = g[ne];
			if (h[re] = ie, g[ne] = re, E <= T) {
				var ae = o - T;
				if ((C > 7e3 || ee > 24576) && (ae > 423 || !l)) {
					u = Ut(e, c, 0, b, x, S, w, ee, te, T - te, u), ee = C = w = 0, te = T;
					for (var D = 0; D < 286; ++D) x[D] = 0;
					for (var D = 0; D < 30; ++D) S[D] = 0;
				}
				var oe = 2, O = 0, se = p, ce = re - ie & 32767;
				if (ae > 2 && ne == y(T - ce)) for (var le = Math.min(f, ae) - 1, k = Math.min(32767, T), ue = Math.min(258, ae); ce <= k && --se && re != ie;) {
					if (e[T + oe] == e[T + oe - ce]) {
						for (var A = 0; A < ue && e[T + A] == e[T + A - ce]; ++A);
						if (A > oe) {
							if (oe = A, O = ce, A > le) break;
							for (var de = Math.min(ce, A - 2), fe = 0, D = 0; D < de; ++D) {
								var pe = T - ce + D & 32767, me = pe - h[pe] & 32767;
								me > fe && (fe = me, ie = pe);
							}
						}
					}
					re = ie, ie = h[re], ce += re - ie & 32767;
				}
				if (O) {
					b[ee++] = 268435456 | ht[oe] << 18 | vt[O];
					var he = ht[oe] & 31, ge = vt[O] & 31;
					w += lt[he] + ut[ge], ++x[257 + he], ++S[ge], E = T + oe, ++C;
				} else b[ee++] = e[T], ++x[e[T]];
			}
		}
		for (T = Math.max(T, E); T < o; ++T) b[ee++] = e[T], ++x[e[T]];
		u = Ut(e, c, l, b, x, S, w, ee, te, T - te, u), l || (a.r = u & 7 | c[u / 8 | 0] << 3, u -= 7, a.h = g, a.p = h, a.i = T, a.w = E);
	} else {
		for (var T = a.w || 0; T < o + l; T += 65535) {
			var _e = T + 65535;
			_e >= o && (c[u / 8 | 0] = l, _e = o), u = Ht(c, u + 1, e.subarray(T, _e));
		}
		a.i = o;
	}
	return Mt(s, 0, r + jt(u) + i);
}, qt = /*#__PURE__*/ (function() {
	for (var e = /* @__PURE__ */ new Int32Array(256), t = 0; t < 256; ++t) {
		for (var n = t, r = 9; --r;) n = (n & 1 && -306674912) ^ n >>> 1;
		e[t] = n;
	}
	return e;
})(), Jt = function() {
	var e = -1;
	return {
		p: function(t) {
			for (var n = e, r = 0; r < t.length; ++r) n = qt[n & 255 ^ t[r]] ^ n >>> 8;
			e = n;
		},
		d: function() {
			return ~e;
		}
	};
}, Yt = function(e, t, n, r, i) {
	if (!i && (i = { l: 1 }, t.dictionary)) {
		var a = t.dictionary.subarray(-32768), o = new B(a.length + e.length);
		o.set(a), o.set(e, a.length), e = o, i.w = a.length;
	}
	return Kt(e, t.level == null ? 6 : t.level, t.mem == null ? i.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(e.length))) * 1.5) : 20 : 12 + t.mem, n, r, i);
}, Xt = function(e, t) {
	var n = {};
	for (var r in e) n[r] = e[r];
	for (var r in t) n[r] = t[r];
	return n;
}, Zt = function(e, t) {
	return e[t] | e[t + 1] << 8;
}, Qt = function(e, t) {
	return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0;
}, $t = function(e, t) {
	return Qt(e, t) + Qt(e, t + 4) * 4294967296;
}, H = function(e, t, n) {
	for (; n; ++t) e[t] = n, n >>>= 8;
};
function en(e, t) {
	return Yt(e, t || {}, 0, 0);
}
function tn(e, t) {
	return Ft(e, { i: 2 }, t && t.out, t && t.dictionary);
}
var nn = function(e, t, n, r) {
	for (var i in e) {
		var a = e[i], o = t + i, s = r;
		Array.isArray(a) && (s = Xt(r, a[1]), a = a[0]), ArrayBuffer.isView(a) ? n[o] = [a, s] : (n[o += "/"] = [new B(0), s], nn(a, o, n, r));
	}
}, rn = typeof TextEncoder < "u" && /*#__PURE__*/ new TextEncoder(), an = typeof TextDecoder < "u" && /*#__PURE__*/ new TextDecoder();
try {
	an.decode(Gt, { stream: !0 });
} catch {}
var on = function(e) {
	for (var t = "", n = 0;;) {
		var r = e[n++], i = (r > 127) + (r > 223) + (r > 239);
		if (n + i > e.length) return {
			s: t,
			r: Mt(e, n - 1)
		};
		i ? i == 3 ? (r = ((r & 15) << 18 | (e[n++] & 63) << 12 | (e[n++] & 63) << 6 | e[n++] & 63) - 65536, t += String.fromCharCode(55296 | r >> 10, 56320 | r & 1023)) : i & 1 ? t += String.fromCharCode((r & 31) << 6 | e[n++] & 63) : t += String.fromCharCode((r & 15) << 12 | (e[n++] & 63) << 6 | e[n++] & 63) : t += String.fromCharCode(r);
	}
};
function sn(e, t) {
	if (t) {
		for (var n = new B(e.length), r = 0; r < e.length; ++r) n[r] = e.charCodeAt(r);
		return n;
	}
	if (rn) return rn.encode(e);
	for (var i = e.length, a = new B(e.length + (e.length >> 1)), o = 0, s = function(e) {
		a[o++] = e;
	}, r = 0; r < i; ++r) {
		if (o + 5 > a.length) {
			var c = new B(o + 8 + (i - r << 1));
			c.set(a), a = c;
		}
		var l = e.charCodeAt(r);
		l < 128 || t ? s(l) : l < 2048 ? (s(192 | l >> 6), s(128 | l & 63)) : l > 55295 && l < 57344 ? (l = 65536 + (l & 1047552) | e.charCodeAt(++r) & 1023, s(240 | l >> 18), s(128 | l >> 12 & 63), s(128 | l >> 6 & 63), s(128 | l & 63)) : (s(224 | l >> 12), s(128 | l >> 6 & 63), s(128 | l & 63));
	}
	return Mt(a, 0, o);
}
function cn(e, t) {
	if (t) {
		for (var n = "", r = 0; r < e.length; r += 16384) n += String.fromCharCode.apply(null, e.subarray(r, r + 16384));
		return n;
	}
	if (an) return an.decode(e);
	var i = on(e), a = i.s, n = i.r;
	return n.length && Pt(8), a;
}
var ln = function(e, t) {
	return t + 30 + Zt(e, t + 26) + Zt(e, t + 28);
}, un = function(e, t, n) {
	var r = Zt(e, t + 28), i = Zt(e, t + 30), a = cn(e.subarray(t + 46, t + 46 + r), !(Zt(e, t + 8) & 2048)), o = t + 46 + r, s = dn(e, o, i, n, Qt(e, t + 20), Qt(e, t + 24), Qt(e, t + 42)), c = s[0], l = s[1], u = s[2];
	return [
		Zt(e, t + 10),
		c,
		l,
		a,
		o + i + Zt(e, t + 32),
		u
	];
}, dn = function(e, t, n, r, i, a, o) {
	var s = i == 4294967295, c = a == 4294967295, l = o == 4294967295, u = t + n, d = s + c + l;
	if (r && d) {
		for (; t + 4 < u; t += 4 + Zt(e, t + 2)) if (Zt(e, t) == 1) return [
			s ? $t(e, t + 4 + 8 * c) : i,
			c ? $t(e, t + 4) : a,
			l ? $t(e, t + 4 + 8 * (c + s)) : o,
			1
		];
		r < 2 && Pt(13);
	}
	return [
		i,
		a,
		o,
		0
	];
}, fn = function(e) {
	var t = 0;
	if (e) for (var n in e) {
		var r = e[n].length;
		r > 65535 && Pt(9), t += r + 4;
	}
	return t;
}, pn = function(e, t, n, r, i, a, o, s) {
	var c = r.length, l = n.extra, u = s && s.length, d = fn(l);
	H(e, t, o == null ? 67324752 : 33639248), t += 4, o != null && (e[t++] = 20, e[t++] = n.os), e[t] = 20, t += 2, e[t++] = n.flag << 1 | (a < 0 && 8), e[t++] = i && 8, e[t++] = n.compression & 255, e[t++] = n.compression >> 8;
	var f = new Date(n.mtime == null ? Date.now() : n.mtime), p = f.getFullYear() - 1980;
	if ((p < 0 || p > 119) && Pt(10), H(e, t, p << 25 | f.getMonth() + 1 << 21 | f.getDate() << 16 | f.getHours() << 11 | f.getMinutes() << 5 | f.getSeconds() >> 1), t += 4, a != -1 && (H(e, t, n.crc), H(e, t + 4, a < 0 ? -a - 2 : a), H(e, t + 8, n.size)), H(e, t + 12, c), H(e, t + 14, d), t += 16, o != null && (H(e, t, u), H(e, t + 6, n.attrs), H(e, t + 10, o), t += 14), e.set(r, t), t += c, d) for (var m in l) {
		var h = l[m], g = h.length;
		H(e, t, +m), H(e, t + 2, g), e.set(h, t + 4), t += 4 + g;
	}
	return u && (e.set(s, t), t += u), t;
}, mn = function(e, t, n, r, i) {
	H(e, t, 101010256), H(e, t + 8, n), H(e, t + 10, n), H(e, t + 12, r), H(e, t + 16, i);
};
function hn(e, t) {
	t ||= {};
	var n = {}, r = [];
	nn(e, "", n, t);
	var i = 0, a = 0;
	for (var o in n) {
		var s = n[o], c = s[0], l = s[1], u = l.level == 0 ? 0 : 8, d = sn(o), f = d.length, p = l.comment, m = p && sn(p), h = m && m.length, g = fn(l.extra);
		f > 65535 && Pt(11);
		var _ = u ? en(c, l) : c, v = _.length, y = Jt();
		y.p(c), r.push(Xt(l, {
			size: c.length,
			crc: y.d(),
			c: _,
			f: d,
			m,
			u: f != o.length || m && p.length != h,
			o: i,
			compression: u
		})), i += 30 + f + g + v, a += 76 + 2 * (f + g) + (h || 0) + v;
	}
	for (var b = new B(a + 22), x = i, S = a - i, C = 0; C < r.length; ++C) {
		var d = r[C];
		pn(b, d.o, d, d.f, d.u, d.c.length);
		var w = 30 + d.f.length + fn(d.extra);
		b.set(d.c, d.o + w), pn(b, i, d, d.f, d.u, d.c.length, d.o, d.m), i += 16 + w + (d.m ? d.m.length : 0);
	}
	return mn(b, i, r.length, S, x), b;
}
function gn(e, t) {
	for (var n = {}, r = e.length - 22; Qt(e, r) != 101010256; --r) (!r || e.length - r > 65558) && Pt(13);
	var i = Zt(e, r + 8);
	if (!i) return {};
	var a = Qt(e, r + 16), o = Qt(e, r - 20) == 117853008;
	if (o) {
		var s = Qt(e, r - 12);
		o = Qt(e, s) == 101075792, o && (i = Qt(e, s + 32), a = Qt(e, s + 48));
	}
	for (var c = t && t.filter, l = 0; l < i; ++l) {
		var u = un(e, a, o), d = u[0], f = u[1], p = u[2], m = u[3], h = u[4], g = u[5], _ = ln(e, g);
		a = h, (!c || c({
			name: m,
			size: f,
			originalSize: p,
			compression: d
		})) && (d ? d == 8 ? n[m] = tn(e.subarray(_, _ + f), { out: new B(p) }) : Pt(14, "unknown compression type " + d) : n[m] = Mt(e, _, _ + f));
	}
	return n;
}
//#endregion
//#region packages/engine/src/imported-models/archive.ts
var _n = 5242880, vn = "cabane-model-pack", yn = 1, bn = (e) => {
	let t = [];
	Ne(e, t, "models");
	let n = t.find((e) => e.severity === "error");
	return n ? Error(n.message) : null;
}, xn = (e, t) => {
	let n = ve([{ customModels: e }]), r = /* @__PURE__ */ new Map();
	for (let e of t) {
		if (r.has(e.sha256)) throw Error(`Duplicate GLB asset ${e.sha256}.`);
		r.set(e.sha256, e);
	}
	let i = n.map((e) => {
		let t = r.get(e.sha256);
		if (!t) throw Error(`The model pack is missing GLB ${e.sha256}.`);
		if (t.byteLength !== e.byteLength || t.bytes.byteLength !== e.byteLength) throw Error(`GLB size does not match its reference ${e.sha256}.`);
		return t;
	});
	if (r.size !== n.length) throw Error("The model pack contains an unreferenced GLB asset.");
	if (i.reduce((e, t) => e + t.byteLength, 0) > x.homeBytes) throw Error("A model pack may contain at most 100 MiB of distinct GLB assets.");
	return i;
};
function Sn(e) {
	let t = JSON.parse(e);
	if (!t || typeof t != "object") throw Error("Invalid home document.");
	let n = t.record ?? t, r = n.draft && n.published ? [n.draft, n.published] : [n], i = /* @__PURE__ */ new Map();
	for (let e of r) {
		if (!e || typeof e != "object") throw Error("Invalid project document.");
		let t = e.customModels ?? [];
		if (!Array.isArray(t)) throw Error("Invalid custom model catalogue.");
		for (let e of t) {
			let t = e && typeof e == "object" && "asset" in e ? e.asset : void 0;
			if (!t || typeof t.sha256 != "string" || !/^[a-f0-9]{64}$/.test(t.sha256) || !Number.isSafeInteger(t.byteLength) || t.byteLength <= 0 || t.byteLength > x.fileBytes) throw Error("Invalid GLB reference in the home document.");
			if (i.has(t.sha256) && i.get(t.sha256).byteLength !== t.byteLength) throw Error("Inconsistent GLB asset sizes.");
			i.set(t.sha256, {
				sha256: t.sha256,
				byteLength: t.byteLength
			});
		}
	}
	if ([...i.values()].reduce((e, t) => e + t.byteLength, 0) > x.homeBytes) throw Error("The home exceeds 100 MiB of distinct GLB assets.");
	return [...i.values()];
}
function Cn(e, t) {
	let n = sn(e);
	if (n.byteLength > _n) throw Error("The home document exceeds 5 MiB.");
	let r = { "project.json": n };
	for (let e of t) r[`assets/${e.sha256}.glb`] = e.bytes;
	return hn(r, { level: 0 });
}
function wn(e, t) {
	let n = bn(e);
	if (n) throw n;
	let r = xn(e, t), i = sn(JSON.stringify({
		format: vn,
		version: yn,
		models: e
	}));
	if (i.byteLength > _n) throw Error("The model pack manifest exceeds 5 MiB.");
	let a = { "manifest.json": i };
	for (let e of r) a[`assets/${e.sha256}.glb`] = e.bytes;
	return hn(a, { level: 0 });
}
async function Tn(e) {
	if (e.byteLength > x.homeBytes + _n + 1048576) throw Error("The model pack exceeds the house asset limit.");
	let t = /* @__PURE__ */ new Set(), n = 0, r = gn(e, { filter: (e) => {
		if (t.has(e.name) || e.name !== "manifest.json" && !/^assets\/[a-f0-9]{64}\.glb$/.test(e.name)) throw Error("The model pack contains an unexpected or duplicate file.");
		if (t.add(e.name), n += e.originalSize, e.originalSize > (e.name === "manifest.json" ? _n : x.fileBytes) || n > x.homeBytes + _n) throw Error("The model pack exceeds the model limits.");
		return !0;
	} }), i = r["manifest.json"];
	if (!i) throw Error("The model pack is missing manifest.json.");
	let a;
	try {
		a = JSON.parse(cn(i));
	} catch {
		throw Error("The model pack manifest is not valid JSON.");
	}
	if (!Be(a) || a.format !== vn || a.version !== yn || Object.keys(a).some((e) => ![
		"format",
		"version",
		"models"
	].includes(e))) throw Error("Unsupported model pack manifest.");
	let o = bn(a.models);
	if (o) throw o;
	let s = a.models, c = ve([{ customModels: s }]), l = c.map((e) => {
		let t = r[`assets/${e.sha256}.glb`];
		if (!t) throw Error(`The model pack is missing GLB ${e.sha256}.`);
		return {
			...e,
			bytes: t
		};
	});
	if (t.size !== c.length + 1) throw Error("The model pack contains an unreferenced GLB file.");
	return await m(l), {
		models: s,
		assets: l
	};
}
async function En(e) {
	if (e.byteLength > x.homeBytes + _n + 1048576) throw Error("The archive exceeds the house asset limit.");
	let t = 0, n = /* @__PURE__ */ new Set(), r = gn(e, { filter: (e) => {
		if (n.has(e.name) || e.name !== "project.json" && !/^assets\/[a-f0-9]{64}\.glb$/.test(e.name)) throw Error("The .cabane archive contains an unexpected or duplicate file.");
		if (n.add(e.name), t += e.originalSize, e.originalSize > (e.name === "project.json" ? _n : x.fileBytes) || t > x.homeBytes + _n) throw Error("The .cabane archive exceeds the model limits.");
		return !0;
	} });
	if (!r["project.json"]) throw Error("The .cabane archive is missing project.json.");
	let i = cn(r["project.json"]), a = Sn(i), o = a.map((e) => {
		let t = r[`assets/${e.sha256}.glb`];
		if (!t) throw Error(`The .cabane archive is missing GLB ${e.sha256}.`);
		return {
			...e,
			bytes: t
		};
	});
	if (n.size !== a.length + 1) throw Error("The .cabane archive contains unreferenced GLB files.");
	return await m(o), {
		json: i,
		assets: o
	};
}
async function Dn(e) {
	let t = new Uint8Array(await e.arrayBuffer());
	if (t[0] === 80 && t[1] === 75) return En(t);
	if (t.byteLength > _n) throw Error("The JSON document exceeds 5 MiB.");
	return {
		json: new TextDecoder("utf-8", { fatal: !0 }).decode(t),
		assets: []
	};
}
function On(e, t, n = "application/octet-stream") {
	let r = URL.createObjectURL(new Blob([new Uint8Array(e).buffer], { type: n })), i = document.createElement("a");
	i.href = r, i.download = t, i.click(), globalThis.setTimeout(() => URL.revokeObjectURL(r), 1e3);
}
//#endregion
//#region apps/web/src/workspaces/workspace-transfer.ts
var U = f(), kn = (e) => typeof e == "object" && !!e && !Array.isArray(e);
function An(e, t) {
	let n;
	try {
		n = JSON.parse(e);
	} catch {
		throw Error("Choose a valid Cabane JSON project or backup.");
	}
	if (!kn(n)) throw Error("Expected a Cabane project or backup object.");
	if (n.format === "cabane-workspace") {
		if (n.version !== 1 || Object.keys(n).some((e) => ![
			"format",
			"version",
			"workspace",
			"record"
		].includes(e))) throw Error("Unsupported workspace backup format.");
		let e = n.workspace;
		if (!kn(e) || Object.keys(e).some((e) => ![
			"name",
			"homeAssistantUrl",
			"hasPublished"
		].includes(e)) || typeof e.name != "string" || !e.name.trim() || typeof e.hasPublished != "boolean" || e.homeAssistantUrl !== null && typeof e.homeAssistantUrl != "string") throw Error("The workspace backup metadata is invalid.");
		let r = me(JSON.stringify(n.record), t);
		if (!r.valid) throw Error(r.issues[0]?.message ?? "Invalid workspace backup.");
		if (e.hasPublished !== (r.record.publishedAt !== 0)) throw Error("Backup applied status does not match its record.");
		return {
			record: r.record,
			name: e.name.trim(),
			hasPublished: e.hasPublished,
			homeAssistantUrl: e.homeAssistantUrl === null ? null : fe(e.homeAssistantUrl)
		};
	}
	if ("draft" in n || "published" in n) {
		let r = me(e, t);
		if (!r.valid) throw Error(r.issues[0]?.message ?? "Invalid workspace backup.");
		if (!("bindings" in n) && !("revision" in n)) {
			let e = r.record;
			return e.published = Je(e.homeId, e.draft.home.name), e.published.seedRevision = e.seedRevision, e.publishedAt = 0, {
				record: e,
				name: e.draft.home.name,
				homeAssistantUrl: null,
				hasPublished: !1
			};
		}
		let i = Object.keys(r.record.bindings);
		return {
			record: r.record,
			name: r.record.draft.home.name,
			hasPublished: r.record.publishedAt !== 0,
			homeAssistantUrl: i.length === 1 ? i[0] : null
		};
	}
	let r = Ge(e);
	if (!r.valid) throw Error(r.issues[0]?.message ?? "Invalid home project.");
	let i = Ce(r.project, t).issues.filter((e) => e.severity === "error" && e.code !== "project.floor-empty");
	if (i.length) throw Error(i[0].message);
	let a = s(r.project);
	return a.published = Je(r.project.home.id, r.project.home.name), a.published.seedRevision = a.seedRevision, a.publishedAt = 0, {
		record: a,
		name: r.project.home.name,
		homeAssistantUrl: null,
		hasPublished: !1
	};
}
function jn(e) {
	return JSON.stringify({
		schemaVersion: e.schemaVersion,
		homeId: e.homeId,
		seedRevision: e.seedRevision,
		revision: e.revision,
		draft: e.draft,
		published: e.published,
		bindings: e.bindings,
		draftUpdatedAt: e.draftUpdatedAt,
		publishedAt: e.publishedAt
	}, null, 2);
}
function Mn(e, t) {
	return JSON.stringify({
		format: "cabane-workspace",
		version: 1,
		workspace: {
			name: e.name,
			homeAssistantUrl: e.homeAssistantUrl,
			hasPublished: e.hasPublished
		},
		record: JSON.parse(jn(t))
	}, null, 2);
}
//#endregion
//#region packages/catalog/src/device/climate-airflow.ts
var Nn = /* @__PURE__ */ new Set([
	"off",
	"idle",
	"standby",
	"unavailable",
	"unknown"
]), Pn = (e) => {
	if (!e || Nn.has(e.state)) return null;
	let t = e.attributes?.hvac_action;
	if (t === "heating") return "heat";
	if (t === "cooling") return "cool";
	if (t === "drying") return "dry";
	if (t === "fan") return "fan";
	switch (e.state) {
		case "heat": return "heat";
		case "cool": return "cool";
		case "dry": return "dry";
		case "fan_only": return "fan";
		default: return "auto";
	}
};
//#endregion
//#region packages/catalog/src/device/presets/appliances/laundry-drum.tsx
function Fn({ reducedMotion: e, position: t, radius: n }) {
	let r = (0, R.useRef)(null);
	return F(({ invalidate: t }, n) => {
		e || !r.current || (r.current.rotation.z -= Math.min(n, .05) * 1.5, t());
	}), /* @__PURE__ */ (0, U.jsx)("group", {
		position: t,
		children: /* @__PURE__ */ (0, U.jsx)("group", {
			ref: r,
			name: "laundry-drum",
			children: ["#e8c6a5", "#89bbb8"].map((e, t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					Math.cos(t * Math.PI) * n * .43,
					Math.sin(t * Math.PI) * n * .43,
					0
				],
				rotation: [
					0,
					0,
					t * 2
				],
				scale: [
					1,
					.65,
					1
				],
				raycast: () => void 0,
				children: [/* @__PURE__ */ (0, U.jsx)("circleGeometry", { args: [n * .44, 12] }), /* @__PURE__ */ (0, U.jsx)(I, { color: e })]
			}, e))
		})
	});
}
//#endregion
//#region packages/catalog/src/device/visuals/device-visual-state.tsx
var W = {
	body: "#e7e1d5",
	bodyDark: "#bac2b9",
	charcoal: "#52605b",
	coral: "#d96e4d",
	green: "#729b87",
	amber: "#d4a04c",
	muted: "#8b918c",
	paleBlue: "#9dbfc0"
}, In = (e) => {
	switch (e) {
		case "connected-active": return W.coral;
		case "connected-inactive": return W.green;
		case "unavailable": return W.amber;
		case "disconnected": return W.muted;
	}
};
function G({ visualState: e, position: t, scale: n = 1 }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: `device-state-${e}`,
		position: t,
		scale: n,
		children: [
			e === "disconnected" && /* @__PURE__ */ (0, U.jsxs)("mesh", {
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
					.018,
					.005,
					6,
					12,
					Math.PI * 1.55
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: In(e) })]
			}),
			e === "unavailable" && /* @__PURE__ */ (0, U.jsxs)("mesh", {
				rotation: [
					0,
					0,
					Math.PI / 4
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.026,
					.026,
					.012
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: In(e) })]
			}),
			e === "connected-inactive" && /* @__PURE__ */ (0, U.jsxs)("mesh", { children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
				.014,
				10,
				6
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: In(e) })] }),
			e === "connected-active" && /* @__PURE__ */ (0, U.jsxs)("group", { children: [/* @__PURE__ */ (0, U.jsxs)("mesh", { children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
				.016,
				10,
				6
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: In(e) })] }), /* @__PURE__ */ (0, U.jsxs)("mesh", {
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
					.026,
					.004,
					5,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: In(e) })]
			})] })
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/appliances/washing-machine.tsx
function Ln({ visualState: e, reducedMotion: t }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-washing-machine",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.43,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.62,
						.86,
						.58
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#e8e7e2" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#777b78",
						thickness: .006
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.35,
					.302
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.235,
						.235,
						.05,
						28
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#202827" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#111716",
						thickness: .005
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.35,
					.329
				],
				children: [/* @__PURE__ */ (0, U.jsx)("circleGeometry", { args: [.175, 24] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: "#789091",
					transparent: !0,
					opacity: .72
				})]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					-.19,
					.72,
					.299
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.17,
					.08,
					.018
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#d0d2ce" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					.05,
					.72,
					.31
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.055,
					.055,
					.025,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#303837" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					.205,
					.72,
					.305
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.15,
					.075,
					.02
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#283231" })]
			}),
			e === "connected-active" && /* @__PURE__ */ (0, U.jsx)(Fn, {
				position: [
					0,
					.35,
					.33
				],
				radius: .17,
				reducedMotion: t
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					.255,
					.755,
					.314
				],
				scale: .7
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					.23,
					.09,
					.301
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.11,
					.13,
					.018
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#deded9" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/construction/rounded-furniture-panel.tsx
function K({ size: e, position: t = [
	0,
	0,
	0
], rotation: n = [
	0,
	0,
	0
], color: i, radius: a = .006, outline: o = !0, outlineColor: s = "#716657", name: c, creaseAngle: l = .4 }) {
	return /* @__PURE__ */ (0, U.jsxs)(L, {
		...Pe({ name: c }),
		args: e,
		position: t,
		rotation: n,
		radius: Math.min(a, ...e.map((e) => e / 2 - 1e-4)),
		smoothness: 2,
		bevelSegments: 2,
		creaseAngle: l,
		castShadow: !0,
		receiveShadow: !0,
		children: [/* @__PURE__ */ (0, U.jsx)(I, { color: i }), o && /* @__PURE__ */ (0, U.jsx)(r, {
			color: s,
			thickness: .0015,
			screenspace: !1
		})]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/appliances/tumble-dryer.tsx
function Rn({ visualState: e, reducedMotion: t }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-tumble-dryer",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.6,
					.82,
					.6
				],
				position: [
					0,
					.44,
					-.025
				],
				color: "#e8e7e2",
				radius: .009,
				outlineColor: "#777b78"
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "dryer-plinth",
				position: [
					0,
					.015,
					-.025
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.54,
					.03,
					.55
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#596360" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "dryer-door-rim",
				position: [
					0,
					.43,
					.293
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
						.197,
						.019,
						6,
						24
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#c1c8c7" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#697572",
						thickness: .0015
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.43,
					.287
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.188,
					.188,
					.012,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#536f74" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "dryer-door-grip",
				size: [
					.028,
					.1,
					.02
				],
				position: [
					.194,
					.43,
					.315
				],
				radius: .005,
				color: "#303a39",
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.568,
					.105,
					.01
				],
				position: [
					0,
					.775,
					.28
				],
				color: "#d8dbd7",
				radius: .002,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "dryer-condensate-drawer",
				size: [
					.18,
					.067,
					.012
				],
				position: [
					-.176,
					.775,
					.289
				],
				color: "#eeeee8",
				radius: .003
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					-.02,
					.777,
					.297
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.033,
					.033,
					.022,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#46534f" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.16,
					.057,
					.012
				],
				position: [
					.171,
					.777,
					.29
				],
				color: "#283231",
				radius: .003,
				outline: !1
			}),
			e === "connected-active" && /* @__PURE__ */ (0, U.jsx)(Fn, {
				position: [
					0,
					.43,
					.3
				],
				radius: .17,
				reducedMotion: t
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					.22,
					.779,
					.303
				],
				scale: .5
			}),
			[
				.091,
				.113,
				.135
			].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "dryer-condenser-vent",
				position: [
					0,
					e,
					.277
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.43,
					.008,
					.008
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#7a8580" })]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/device/visuals/activity-hologram.tsx
function zn({ visualState: e, reducedMotion: t, position: n, scale: r = 1 }) {
	let i = (0, R.useRef)(null), a = (0, R.useRef)(0), o = e === "connected-active";
	return F(({ invalidate: e }, n) => {
		!o || t || !i.current || (a.current += Math.min(n, .05), i.current.position.y = Math.sin(a.current * 1.8) * .025, e());
	}), o ? /* @__PURE__ */ (0, U.jsx)("group", {
		name: "activity-hologram",
		position: n,
		scale: r,
		children: /* @__PURE__ */ (0, U.jsx)(rt, { children: /* @__PURE__ */ (0, U.jsxs)("group", {
			ref: i,
			name: "activity-hologram-float",
			children: [
				/* @__PURE__ */ (0, U.jsxs)("mesh", {
					raycast: () => void 0,
					children: [/* @__PURE__ */ (0, U.jsx)("circleGeometry", { args: [.14, 32] }), /* @__PURE__ */ (0, U.jsx)(I, {
						color: "#245958",
						emissive: "#245958",
						emissiveIntensity: .35,
						transparent: !0,
						opacity: .7,
						depthWrite: !1
					})]
				}),
				/* @__PURE__ */ (0, U.jsxs)("mesh", {
					position: [
						0,
						0,
						.002
					],
					raycast: () => void 0,
					children: [/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
						.14,
						.006,
						5,
						32
					] }), /* @__PURE__ */ (0, U.jsx)(I, {
						color: "#9debdc",
						emissive: "#67cdb9",
						emissiveIntensity: .7
					})]
				}),
				/* @__PURE__ */ (0, U.jsxs)("mesh", {
					position: [
						0,
						-.008,
						.008
					],
					rotation: [
						0,
						0,
						Math.PI * .72
					],
					raycast: () => void 0,
					children: [/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
						.063,
						.009,
						6,
						24,
						Math.PI * 1.56
					] }), /* @__PURE__ */ (0, U.jsx)(I, {
						color: "#d5fff0",
						emissive: "#9debdc",
						emissiveIntensity: .7
					})]
				}),
				/* @__PURE__ */ (0, U.jsxs)("mesh", {
					position: [
						0,
						.052,
						.008
					],
					raycast: () => void 0,
					children: [/* @__PURE__ */ (0, U.jsx)("capsuleGeometry", { args: [
						.009,
						.065,
						3,
						6
					] }), /* @__PURE__ */ (0, U.jsx)(I, {
						color: "#d5fff0",
						emissive: "#9debdc",
						emissiveIntensity: .7
					})]
				})
			]
		}) })
	}) : null;
}
//#endregion
//#region packages/catalog/src/furnishing/presets/kitchen/kitchen-finish.ts
var Bn = [
	{
		id: "default",
		label: "White"
	},
	{
		id: "black",
		label: "Black"
	},
	{
		id: "wood",
		label: "Wood"
	}
];
function Vn(e = "default") {
	return e === "black" ? "#303331" : e === "wood" ? "#bc9362" : "#f4f2ec";
}
//#endregion
//#region packages/catalog/src/device/presets/appliances/appliance-pull.tsx
function Hn({ width: e, position: t }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "appliance-door-pull",
		position: t,
		children: [[-1, 1].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
			position: [
				t * (e / 2 - .025),
				0,
				.013
			],
			castShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
				.022,
				.022,
				.026
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#9ca4a4" })]
		}, t)), /* @__PURE__ */ (0, U.jsx)(K, {
			size: [
				e,
				.026,
				.026
			],
			position: [
				0,
				0,
				.029
			],
			radius: .006,
			color: "#c2c8c7",
			outlineColor: "#596360"
		})]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/appliances/dishwasher.tsx
function Un({ visualState: e, variant: t, reducedMotion: n }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-dishwasher",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.6,
					.79,
					.6
				],
				position: [
					0,
					.425,
					-.025
				],
				color: Vn(t),
				radius: .006,
				outlineColor: "#777b78"
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "dishwasher-plinth",
				position: [
					0,
					.035,
					-.025
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.54,
					.07,
					.53
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#596360" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "dishwasher-top",
				size: [
					.6,
					.03,
					.6
				],
				position: [
					0,
					.835,
					-.025
				],
				color: "#f0eee8",
				radius: .004
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "dishwasher-door",
				size: [
					.568,
					.635,
					.024
				],
				position: [
					0,
					.3925,
					.271
				],
				color: Vn(t),
				radius: .004
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.568,
					.095,
					.024
				],
				position: [
					0,
					.7645,
					.271
				],
				color: "#cbd1cd",
				radius: .004,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(Hn, {
				width: .37,
				position: [
					0,
					.671,
					.283
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					-.213,
					.765,
					.292
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.024,
					.024,
					.012,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#53615c" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.2,
					.05,
					.009
				],
				position: [
					.135,
					.765,
					.2875
				],
				color: "#283231",
				radius: .003,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(zn, {
				visualState: e,
				reducedMotion: n,
				position: [
					0,
					1.05,
					.34
				],
				scale: 1
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					.198,
					.765,
					.3
				],
				scale: .5
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/appliances/oven.tsx
function Wn({ visualState: e }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-oven",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "oven-housing",
				position: [
					0,
					.295,
					-.03
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.56,
					.59,
					.56
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#747f7d" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "oven-front-frame",
				size: [
					.6,
					.6,
					.025
				],
				position: [
					0,
					.3,
					.2415
				],
				color: "#b5bdbc",
				radius: .004,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "oven-glass-door",
				size: [
					.552,
					.446,
					.014
				],
				position: [
					0,
					.246,
					.261
				],
				color: "#293434",
				radius: .005,
				outlineColor: "#515e5a"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "oven-viewing-window",
				size: [
					.44,
					.265,
					.005
				],
				position: [
					0,
					.224,
					.2705
				],
				color: e === "connected-active" ? "#e6a359" : "#495e60",
				radius: .007,
				outline: !1
			}),
			[.17, .25].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "oven-rack",
				position: [
					0,
					e,
					.274
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.398,
					.006,
					.002
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#8b9a97" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(Hn, {
				width: .47,
				position: [
					0,
					.428,
					.268
				]
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.552,
					.091,
					.012
				],
				position: [
					0,
					.5385,
					.26
				],
				color: "#293434",
				radius: .003,
				outline: !1
			}),
			[-.201, .201].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.54,
					.277
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.032,
					.032,
					.022,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#bdc5c3" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					0,
					.54,
					.275
				],
				scale: .6
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/appliances/water-heater.tsx
function Gn({ visualState: e, reducedMotion: t }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-water-heater",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.79,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.56,
						1.14,
						.4
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#e8e5dc" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#797b76",
						thickness: .006
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					1.36,
					0
				],
				scale: [
					1,
					.34,
					.72
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
						.28,
						18,
						10
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#ddd9cf" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#797b76",
						thickness: .005
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.42,
					.205
				],
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.16,
						.12,
						.02
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#26302f" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#171d1c",
						thickness: .003
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					0,
					.42,
					.218
				]
			}),
			/* @__PURE__ */ (0, U.jsx)(zn, {
				visualState: e,
				reducedMotion: t,
				position: [
					0,
					1.65,
					.24
				]
			}),
			[-.13, .13].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.11,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.018,
					.018,
					.22,
					10
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#9da4a1" })]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/appliances/refrigerator.tsx
function Kn({ visualState: e }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-refrigerator",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsxs)(L, {
				args: [
					.7,
					1.85,
					.69
				],
				radius: .025,
				smoothness: 2,
				position: [
					0,
					.925,
					-.015
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)(I, { color: "#dfe3df" }), /* @__PURE__ */ (0, U.jsx)(r, {
					color: W.charcoal,
					thickness: .006
				})]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					1.305,
					.345
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.67,
					1.04,
					.024
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#e9ece8" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.39,
					.345
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.67,
					.72,
					.024
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#d8ddda" })]
			}),
			[.39, 1.305].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					.285,
					e,
					.351
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.025,
					e > 1 ? .58 : .36,
					.018
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#717b77" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					.18,
					1.58,
					.351
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.16,
					.09,
					.018
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: "#31413f",
					emissive: "#5d9993",
					emissiveIntensity: .15
				})]
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					.25,
					1.58,
					.345
				],
				scale: .38
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/appliances/humidifier-dehumidifier.tsx
function qn({ visualState: e, reducedMotion: t }) {
	let n = e === "connected-active";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-humidifier-dehumidifier",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsxs)(L, {
				args: [
					.32,
					.6,
					.274
				],
				radius: .035,
				smoothness: 2,
				position: [
					0,
					.3,
					-.003
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)(I, { color: W.body }), /* @__PURE__ */ (0, U.jsx)(r, {
					color: W.charcoal,
					thickness: .005
				})]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "humidity-appliance-water-tank",
				position: [
					0,
					.135,
					.138
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.17,
					.17,
					.004
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: "#9dbfc0",
					opacity: .72,
					transparent: !0
				})]
			}),
			[
				.36,
				.39,
				.42,
				.45
			].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					e,
					.138
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.2,
					.012,
					.004
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#929d98" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.597,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.2,
					.006,
					.14
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#6d7974" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.535,
					.138
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.105,
					.042,
					.004
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: "#33423f",
					emissive: n ? W.paleBlue : "#41514e",
					emissiveIntensity: n ? .38 : .08
				})]
			}),
			/* @__PURE__ */ (0, U.jsx)(zn, {
				visualState: e,
				reducedMotion: t,
				position: [
					0,
					.8,
					.1
				],
				scale: .8
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					.105,
					.558,
					.126
				],
				scale: .25
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/appliances/robot-vacuum.tsx
function Jn({ visualState: e, reducedMotion: t }) {
	let n = e === "connected-active";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-robot-vacuum",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.035,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.175,
						.175,
						.07,
						28
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#59635f" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#2f3936",
						thickness: .004
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.048,
					0
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
					.15,
					.025,
					6,
					28
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#7d8782" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.073,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.15,
					.15,
					.006,
					28
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: W.bodyDark })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "robot-vacuum-lidar",
				position: [
					-.045,
					.083,
					-.025
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.045,
					.045,
					.014,
					20
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#45524e" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "robot-vacuum-front-sensor",
				position: [
					0,
					.04,
					.172
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.08,
					.025,
					.006
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: "#24312f",
					emissive: n ? W.paleBlue : "#24312f",
					emissiveIntensity: n ? .3 : 0
				})]
			}),
			[-.115, .115].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.025,
					0
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.025,
					.025,
					.018,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#2f3936" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(zn, {
				visualState: e,
				reducedMotion: t,
				position: [
					0,
					.32,
					0
				],
				scale: .8
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					.075,
					.077,
					.065
				],
				scale: .18
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/appliances/microwave.tsx
function Yn({ visualState: e }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-microwave",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "microwave-housing",
				size: [
					.52,
					.31,
					.38
				],
				position: [
					0,
					.155,
					-.01
				],
				color: "#d7dcda",
				radius: .012,
				outlineColor: "#56615e"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "microwave-door",
				size: [
					.36,
					.245,
					.01
				],
				position: [
					-.055,
					.145,
					.19
				],
				color: "#4d5c5c",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "microwave-window",
				size: [
					.302,
					.186,
					.004
				],
				position: [
					-.067,
					.145,
					.198
				],
				color: e === "connected-active" ? "#e6a359" : "#263434",
				radius: .004,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "microwave-control-panel",
				size: [
					.105,
					.245,
					.01
				],
				position: [
					.19,
					.145,
					.19
				],
				color: "#c2c9c6",
				radius: .004,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "microwave-display",
				size: [
					.075,
					.04,
					.003
				],
				position: [
					.19,
					.229,
					.1985
				],
				color: "#31413f",
				radius: .002,
				outline: !1
			}),
			[
				.17,
				.122,
				.074
			].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					.19,
					e,
					.198
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.014,
					.014,
					.004,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#697671" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					.122,
					.145,
					.198
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.018,
					.16,
					.004
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#bac2c0" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					.218,
					.23,
					.194
				],
				scale: .22
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/appliances/appliance-steam.tsx
function Xn({ reducedMotion: e, position: t }) {
	let n = (0, R.useRef)(null), r = (0, R.useRef)(0);
	return F(({ invalidate: t }, i) => {
		e || !n.current || (r.current += Math.min(i, .05), n.current.children.forEach((e, t) => {
			let n = (r.current * .45 + t / 3) % 1;
			e.position.set(Math.sin(n * 5 + t) * .025, n * .25, 0), e.scale.setScalar(.65 + n * .8), e.material.opacity = Math.sin(n * Math.PI) * .55;
		}), t());
	}), /* @__PURE__ */ (0, U.jsx)("group", {
		ref: n,
		name: "appliance-steam",
		position: t,
		children: [
			0,
			1,
			2
		].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
			position: [
				e % 2 * .02,
				.04 + e * .07,
				0
			],
			raycast: () => void 0,
			children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
				.025,
				8,
				6
			] }), /* @__PURE__ */ (0, U.jsx)(I, {
				color: "#d8f3ed",
				emissive: "#a4d7cf",
				emissiveIntensity: .3,
				transparent: !0,
				opacity: .4,
				depthWrite: !1
			})]
		}, e))
	});
}
//#endregion
//#region packages/catalog/src/device/presets/appliances/coffee-maker.tsx
function Zn({ visualState: e, reducedMotion: t }) {
	let n = e === "connected-active";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-coffee-maker",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.24,
					.025,
					.34
				],
				position: [
					0,
					.0125,
					0
				],
				color: "#59635f",
				radius: .006,
				outlineColor: "#35413e"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.2,
					.31,
					.16
				],
				position: [
					0,
					.18,
					-.075
				],
				color: "#e3e1da",
				radius: .018,
				outlineColor: "#64706c"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.2,
					.025,
					.16
				],
				position: [
					0,
					.3475,
					-.075
				],
				color: "#c5ccc8",
				radius: .008,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "coffee-maker-brew-head",
				size: [
					.16,
					.05,
					.12
				],
				position: [
					0,
					.274,
					.055
				],
				color: "#59635f",
				radius: .008,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "coffee-maker-carafe",
				position: [
					0,
					.105,
					.075
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.063,
						.074,
						.15,
						16
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, {
						color: "#9cb4b1",
						transparent: !0,
						opacity: .68
					}),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#52605b",
						thickness: .002
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "coffee-maker-carafe-handle",
				position: [
					.075,
					.13,
					.075
				],
				children: [/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
					.035,
					.008,
					6,
					16,
					Math.PI * 1.75
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#46514e" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "coffee-maker-display",
				size: [
					.09,
					.035,
					.004
				],
				position: [
					0,
					.218,
					.007
				],
				color: "#31413f",
				radius: .002,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					-.067,
					.218,
					.01
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.013,
					.013,
					.004,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: "#718078",
					emissive: n ? "#d96e4d" : "#718078",
					emissiveIntensity: n ? .3 : 0
				})]
			}),
			e === "connected-active" && /* @__PURE__ */ (0, U.jsx)(Xn, {
				position: [
					0,
					.3,
					.08
				],
				reducedMotion: t
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					.07,
					.218,
					.01
				],
				scale: .2
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/appliances/electric-kettle.tsx
function Qn({ visualState: e, reducedMotion: t }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-electric-kettle",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.22,
					.02,
					.2
				],
				position: [
					0,
					.01,
					0
				],
				color: "#505b57",
				radius: .01,
				outlineColor: "#34403d"
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "kettle-body",
				position: [
					0,
					.12,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.067,
						.088,
						.2,
						18
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#d8ddda" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#596560",
						thickness: .003
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "kettle-lid",
				position: [
					0,
					.218,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.069,
					.069,
					.016,
					18
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#8d9893" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "kettle-lid-knob",
				position: [
					0,
					.242,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
					.018,
					12,
					8
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#52605b" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "kettle-spout",
				position: [
					-.05,
					.18,
					0
				],
				rotation: [
					0,
					0,
					Math.PI / 3
				],
				children: [/* @__PURE__ */ (0, U.jsx)("coneGeometry", { args: [
					.03,
					.1,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#c7cecb" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "kettle-handle",
				position: [
					.058,
					.145,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
					.04,
					.009,
					6,
					16,
					Math.PI * 1.55
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#46514e" })]
			}),
			e === "connected-active" && /* @__PURE__ */ (0, U.jsx)(Xn, {
				position: [
					-.09,
					.23,
					0
				],
				reducedMotion: t
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					.073,
					.045,
					.087
				],
				scale: .22
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/appliances/freezer.tsx
function $n({ visualState: e }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-freezer",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.65,
					1.75,
					.656
				],
				position: [
					0,
					.875,
					-.012
				],
				color: "#dfe3df",
				radius: .025,
				outlineColor: "#52605b"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "freezer-door",
				size: [
					.62,
					1.68,
					.012
				],
				position: [
					0,
					.875,
					.322
				],
				color: "#ebede9",
				radius: .012,
				outline: !1
			}),
			[
				.4,
				.75,
				1.1,
				1.45
			].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "freezer-drawer-line",
				position: [
					0,
					e,
					.33
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.54,
					.012,
					.002
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#bdc5c1" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "freezer-handle",
				size: [
					.026,
					.72,
					.01
				],
				position: [
					.275,
					1.05,
					.335
				],
				color: "#7b8681",
				radius: .008,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "freezer-display",
				size: [
					.13,
					.065,
					.004
				],
				position: [
					.14,
					1.58,
					.332
				],
				color: "#31413f",
				radius: .004,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					.185,
					1.58,
					.332
				],
				scale: .28
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/appliances/pet-feeder.tsx
function er({ visualState: e, reducedMotion: t }) {
	let n = e === "connected-active";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-pet-feeder",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.24,
					.12,
					.36
				],
				position: [
					0,
					.06,
					0
				],
				color: "#d9ddd8",
				radius: .03,
				outlineColor: "#596560"
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "pet-feeder-hopper",
				position: [
					0,
					.225,
					-.07
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.082,
						.095,
						.21,
						18
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#dfe3df" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#596560",
						thickness: .003
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "pet-feeder-lid",
				position: [
					0,
					.34,
					-.07
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.1,
					.1,
					.02,
					18
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#8e9a94" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "pet-feeder-bowl",
				position: [
					0,
					.13,
					.09
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.075,
					.062,
					.025,
					18
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#9aa6a1" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "pet-feeder-chute",
				position: [
					0,
					.17,
					.035
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.032,
					.045,
					.06,
					14
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#596560" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "pet-feeder-display",
				size: [
					.09,
					.04,
					.004
				],
				position: [
					0,
					.085,
					.177
				],
				color: "#31413f",
				radius: .003,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					-.075,
					.085,
					.177
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.014,
					.014,
					.004,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: "#66736e",
					emissive: n ? "#d96e4d" : "#66736e",
					emissiveIntensity: n ? .3 : 0
				})]
			}),
			/* @__PURE__ */ (0, U.jsx)(zn, {
				visualState: e,
				reducedMotion: t,
				position: [
					0,
					.55,
					.12
				],
				scale: .8
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					.07,
					.085,
					.173
				],
				scale: .2
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/construction/four-leg-oak-table.tsx
function tr({ width: e, height: t, depth: n, topThickness: r, legWidth: i, topColor: a = "#d9b987" }) {
	let o = t - r, s = e / 2 - i / 2 - .065, c = n / 2 - i / 2 - .065;
	return /* @__PURE__ */ (0, U.jsxs)("group", { children: [
		/* @__PURE__ */ (0, U.jsx)(K, {
			name: "oak-table-top",
			size: [
				e,
				r,
				n
			],
			position: [
				0,
				t - r / 2,
				0
			],
			color: a,
			radius: .008
		}),
		[-s, s].flatMap((e) => [-c, c].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: "oak-table-leg",
			position: [
				e,
				o / 2,
				t
			],
			castShadow: !0,
			receiveShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
				i,
				o,
				i
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#c8a675" })]
		}, `${e}-${t}`))),
		[-c, c].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
			position: [
				0,
				o - .035,
				e
			],
			castShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
				2 * s - i,
				.07,
				.025
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#c6a372" })]
		}, e)),
		[-s, s].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
			position: [
				e,
				o - .035,
				0
			],
			castShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
				.025,
				.07,
				2 * c - i
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#c6a372" })]
		}, e))
	] });
}
//#endregion
//#region packages/catalog/src/device/presets/appliances/built-in-microwave.tsx
function nr({ visualState: e }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-built-in-microwave",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "microwave-built-in-housing",
				position: [
					0,
					.185,
					-.036
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.56,
					.37,
					.278
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#727a77" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "microwave-built-in-frame",
				size: [
					.6,
					.39,
					.022
				],
				position: [
					0,
					.195,
					.114
				],
				color: "#b7bdbb",
				radius: .003,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "microwave-built-in-glass",
				size: [
					.552,
					.276,
					.008
				],
				position: [
					0,
					.15,
					.129
				],
				color: "#293434",
				radius: .004,
				outlineColor: "#515e5a"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "microwave-built-in-window",
				size: [
					.41,
					.17,
					.003
				],
				position: [
					0,
					.139,
					.1345
				],
				color: e === "connected-active" ? "#e6a359" : "#263434",
				radius: .005,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(Hn, {
				width: .46,
				position: [
					0,
					.265,
					.133
				]
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "microwave-built-in-control-panel",
				size: [
					.552,
					.075,
					.008
				],
				position: [
					0,
					.338,
					.129
				],
				color: "#293434",
				radius: .002,
				outline: !1
			}),
			[-.2, .2].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.338,
					.144
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.024,
					.024,
					.022,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#b7bdbb" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "microwave-built-in-display",
				position: [
					0,
					.338,
					.1345
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.06,
					.025,
					.003
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#546863" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/visuals/airflow-waves.tsx
var rr = {
	cool: {
		color: "#58c8ff",
		emissive: "#147fc4"
	},
	heat: {
		color: "#ff6d58",
		emissive: "#b82f24"
	},
	dry: {
		color: "#5ed6c1",
		emissive: "#208d7c"
	},
	fan: {
		color: "#b8e8e5",
		emissive: "#579b98"
	},
	auto: {
		color: "#ba9cff",
		emissive: "#7250bc"
	}
}, ir = 5, ar = (e) => {
	let t = .78 + e * .36, n = Math.sin(e * Math.PI);
	return {
		progress: e,
		position: [
			0,
			-.2 - e * .43,
			.2 + e * .82
		],
		scale: [
			t,
			1,
			1
		],
		opacity: .14 + n * .76
	};
}, or = (e, t) => ar((e * .42 + t / ir) % 1), sr = (e, t = 48, n = 6) => {
	let r = e * .34, i = Array.from({ length: 25 }, (e, t) => {
		let n = t / 24;
		return new M(-r + n * r * 2, Math.sin(n * Math.PI * 4) * .035, 0);
	});
	return new We(new k(i), t, .014, n, !1);
};
function cr({ mode: e, width: t, reducedMotion: n, forward: r = !1 }) {
	let i = (0, R.useRef)(null), a = rr[e], o = (0, R.useMemo)(() => r ? sr(t, 32, 4) : sr(t), [t, r]), s = (e) => r ? [
		0,
		0,
		.16 + e.progress * .95
	] : e.position;
	return (0, R.useEffect)(() => () => {
		o.dispose();
	}, [o]), F(({ clock: e, invalidate: t }) => {
		!i.current || n || (i.current.children.forEach((t, n) => {
			let r = t, i = or(e.elapsedTime, n);
			r.position.set(...s(i)), r.scale.set(...i.scale), r.material.opacity = i.opacity;
		}), t());
	}), /* @__PURE__ */ (0, U.jsx)("group", {
		ref: i,
		name: r ? "fan-airflow-waves" : `flux-climatisation-${e}`,
		children: Array.from({ length: ir }, (e, t) => {
			let i = ar((t + 1) / 6);
			return /* @__PURE__ */ (0, U.jsx)("mesh", {
				geometry: o,
				...Pe({ position: n || r ? s(i) : void 0 }),
				...Pe({ scale: n || r ? i.scale : void 0 }),
				renderOrder: 2,
				children: /* @__PURE__ */ (0, U.jsx)(I, {
					color: a.color,
					emissive: a.emissive,
					emissiveIntensity: .75,
					transparent: !0,
					opacity: n ? i.opacity : .8,
					depthWrite: !1
				})
			}, t);
		})
	});
}
//#endregion
//#region packages/catalog/src/device/presets/climate/indoor-ac.tsx
function lr({ state: e, visualState: t, reducedMotion: n }) {
	let i = t === "connected-active", a = i ? Pn(e) : null;
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-indoor-ac",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.14,
					.085
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.84,
						.27,
						.17,
						2,
						2,
						1
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: W.body }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: W.charcoal,
						thickness: .007
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.065,
					.177
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.68,
					.055,
					.015
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: W.charcoal })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.045,
					.19
				],
				rotation: [
					i ? -.32 : -.08,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.62,
					.018,
					.07
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: W.bodyDark })]
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: t,
				position: [
					.32,
					.16,
					.178
				]
			}),
			a && /* @__PURE__ */ (0, U.jsx)(cr, {
				mode: a,
				width: .84,
				reducedMotion: n
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/climate/dense-white-towel-rail.tsx
function ur({ visualState: e, variant: t }) {
	let n = t === "dense-black", r = n ? "#292c2a" : "#e8e8df", i = (0, R.useMemo)(() => {
		let e = (n ? [
			...Array.from({ length: 9 }, (e, t) => .04 + t * .04),
			...Array.from({ length: 10 }, (e, t) => .46 + t * .04),
			...Array.from({ length: 5 }, (e, t) => .96 + t * .054)
		] : [...Array.from({ length: 18 }, (e, t) => .04 + t * .046), ...Array.from({ length: 6 }, (e, t) => .93 + t * .046)]).map((e) => new Me(.012, .012, .57, 12).applyMatrix4(new o().makeRotationZ(Math.PI / 2).setPosition(0, e, .06))), t = N(e);
		return e.forEach((e) => e.dispose()), t;
	}, [n]);
	return (0, R.useEffect)(() => () => i.dispose(), [i]), /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "dense-white-towel-rail",
		children: [
			[-.285, .285].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "towel-rail-upright",
				position: [
					e,
					.6,
					.06
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.015,
					.015,
					1.2,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: r })]
			}, e)),
			/* @__PURE__ */ (0, U.jsx)("mesh", {
				name: "towel-rail-rungs",
				geometry: i,
				children: /* @__PURE__ */ (0, U.jsx)(I, { color: n ? r : "#efeee7" })
			}),
			[-.285, .285].flatMap((e) => [.15, 1.05].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "towel-rail-wall-mount",
				position: [
					e,
					t,
					.025
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.013,
					.013,
					.05,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: r })]
			}, `${e}-${t}`))),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					.25,
					.035,
					.0975
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.065,
					.07,
					.045
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: n ? r : "#d8dad2" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					.25,
					.078,
					.1105
				],
				scale: .3
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/climate/heat-exchanger-bars.tsx
function dr({ horizontal: e }) {
	let t = (0, R.useMemo)(() => {
		let t = Array.from({ length: 8 }, (t, n) => {
			let r = e ? new le(.54, .025, .055) : new le(.018, .47, .016);
			return r.translate(e ? 0 : -.39 + n * .112, e ? .12 + n * .145 : .31, e ? .062 : .11), r;
		}), n = N(t);
		return t.forEach((e) => e.dispose()), n;
	}, [e]);
	return (0, R.useEffect)(() => () => t.dispose(), [t]), /* @__PURE__ */ (0, U.jsxs)("mesh", {
		geometry: t,
		castShadow: !0,
		children: [/* @__PURE__ */ (0, U.jsx)(I, { color: e ? "#f0eee9" : "#d6d7d2" }), e && /* @__PURE__ */ (0, U.jsx)(r, {
			color: "#7d8380",
			thickness: .003
		})]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/climate/heated-towel-rail.tsx
function fr({ visualState: e }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", { children: [
		[-.24, .24].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
			position: [
				e,
				.6,
				.01
			],
			children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
				.06,
				.9,
				.02
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#aeb4af" })]
		}, `bracket-${e}`)),
		[-.285, .285].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
			position: [
				e,
				.59,
				.055
			],
			castShadow: !0,
			children: [
				/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.03,
					1.18,
					.05
				] }),
				/* @__PURE__ */ (0, U.jsx)(I, { color: "#e8e7e2" }),
				/* @__PURE__ */ (0, U.jsx)(r, {
					color: "#747b79",
					thickness: .004
				})
			]
		}, e)),
		/* @__PURE__ */ (0, U.jsx)(dr, { horizontal: !0 }),
		/* @__PURE__ */ (0, U.jsxs)("mesh", {
			position: [
				0,
				1.18,
				.055
			],
			castShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
				.6,
				.04,
				.05
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#e8e7e2" })]
		}),
		/* @__PURE__ */ (0, U.jsxs)("mesh", {
			position: [
				.235,
				.09,
				.095
			],
			castShadow: !0,
			children: [
				/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.095,
					.14,
					.05
				] }),
				/* @__PURE__ */ (0, U.jsx)(I, { color: W.charcoal }),
				/* @__PURE__ */ (0, U.jsx)(r, {
					color: "#303836",
					thickness: .003
				})
			]
		}),
		/* @__PURE__ */ (0, U.jsx)(G, {
			visualState: e,
			position: [
				.235,
				.105,
				.095
			],
			scale: .55
		})
	] });
}
function pr({ visualState: e, reducedMotion: t, variant: n }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-heated-towel-rail",
		children: [n === "dense-white" || n === "dense-black" ? /* @__PURE__ */ (0, U.jsx)(ur, {
			visualState: e,
			variant: n
		}) : /* @__PURE__ */ (0, U.jsx)(fr, { visualState: e }), /* @__PURE__ */ (0, U.jsx)(zn, {
			visualState: e,
			reducedMotion: t,
			position: [
				0,
				1.4,
				.15
			],
			scale: 1
		})]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/climate/smart-panel-radiator.tsx
function mr({ visualState: e, reducedMotion: t }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-smart-panel-radiator",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.28,
					.05
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.976,
						.56,
						.1
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#eeeae2" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#7f817c",
						thickness: .005
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsx)(dr, { horizontal: !1 }),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.58,
					.055
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					1,
					.04,
					.11
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#c9ccc7" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					.44,
					.095,
					.105
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.1,
					.15,
					.03
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: W.charcoal })]
			}),
			/* @__PURE__ */ (0, U.jsx)(zn, {
				visualState: e,
				reducedMotion: t,
				position: [
					0,
					.8,
					.16
				],
				scale: 1
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					.44,
					.11,
					.106
				],
				scale: .45
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/climate/smart-thermostat.tsx
function hr({ state: e, visualState: t }) {
	let n = typeof e?.attributes.current_temperature == "number" ? Math.round(e.attributes.current_temperature) : 21;
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-smart-thermostat",
		children: [
			/* @__PURE__ */ (0, U.jsxs)(L, {
				args: [
					.12,
					.12,
					.025
				],
				radius: .018,
				smoothness: 2,
				position: [
					0,
					.06,
					.0125
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)(I, { color: W.body }), /* @__PURE__ */ (0, U.jsx)(r, {
					color: W.charcoal,
					thickness: .003
				})]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.068,
					.03
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.074,
					.052,
					.01
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: "#31413f",
					emissive: "#5d9993",
					emissiveIntensity: .18
				})]
			}),
			Array.from({ length: Math.max(1, Math.min(3, n - 19)) }, (e, t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					-.018 + t * .018,
					.068,
					.035
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.01,
					.022 + t * .006,
					.001
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: "#a8ddd5",
					emissive: "#5fb4aa",
					emissiveIntensity: .45
				})]
			}, t)),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: t,
				position: [
					.042,
					.022,
					.028
				],
				scale: .24
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/controls/wall-switch.tsx
function gr({ visualState: e }) {
	let t = e === "connected-active";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-wall-switch",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.075,
					.012
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.115,
						.15,
						.024
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: W.body }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: W.charcoal,
						thickness: .005
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.077,
					.03
				],
				rotation: [
					t ? -.09 : .09,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.064,
					.08,
					.018
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: t ? W.coral : W.bodyDark })]
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					.038,
					.126,
					.039
				],
				scale: .65
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/controls/smart-plug.tsx
function _r({ visualState: e, reducedMotion: t }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-smart-plug",
		children: [
			/* @__PURE__ */ (0, U.jsxs)(L, {
				args: [
					.07,
					.07,
					.049
				],
				radius: .012,
				smoothness: 2,
				position: [
					0,
					.035,
					.0245
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)(I, { color: W.body }), /* @__PURE__ */ (0, U.jsx)(r, {
					color: W.charcoal,
					thickness: .0025
				})]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.038,
					.052
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.021,
					.021,
					.006,
					18
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#d1d4ce" })]
			}),
			[-.008, .008].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.04,
					.055
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.004,
					.014,
					.001
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#39413f" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(zn, {
				visualState: e,
				reducedMotion: t,
				position: [
					0,
					.24,
					.09
				],
				scale: .65
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					.022,
					.015,
					.047
				],
				scale: .22
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/controls/smart-power-strip.tsx
function vr({ visualState: e, reducedMotion: t }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-smart-power-strip",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsxs)(L, {
				args: [
					.34,
					.052,
					.065
				],
				radius: .014,
				smoothness: 2,
				position: [
					0,
					.026,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)(I, { color: W.body }), /* @__PURE__ */ (0, U.jsx)(r, {
					color: W.charcoal,
					thickness: .003
				})]
			}),
			[
				-.115,
				-.058,
				0,
				.058,
				.115
			].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.052,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.021,
					.021,
					.006,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#aeb4af" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					.148,
					.052,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.011,
					.011,
					.006,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: e === "connected-active" ? W.coral : W.green })]
			}),
			/* @__PURE__ */ (0, U.jsx)(zn, {
				visualState: e,
				reducedMotion: t,
				position: [
					0,
					.26,
					0
				],
				scale: .75
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					.148,
					.047,
					0
				],
				scale: .12
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/controls/motorized-valve.tsx
function yr({ visualState: e }) {
	let t = e === "connected-active";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-motorized-valve",
		children: [
			/* @__PURE__ */ (0, U.jsxs)(L, {
				args: [
					.12,
					.22,
					.04
				],
				radius: .012,
				smoothness: 2,
				position: [
					0,
					.11,
					.02
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)(I, { color: "#a9b1ac" }), /* @__PURE__ */ (0, U.jsx)(r, {
					color: W.charcoal,
					thickness: .003
				})]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "motorized-valve-pipe",
				position: [
					0,
					.055,
					.06
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.035,
					.035,
					.24,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#77827d" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.055,
					.06
				],
				children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
					.055,
					16,
					10
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#9b754e" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(L, {
				args: [
					.12,
					.12,
					.074
				],
				radius: .016,
				smoothness: 2,
				position: [
					0,
					.15,
					.08
				],
				children: /* @__PURE__ */ (0, U.jsx)(I, { color: W.body })
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.151,
					.118
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.062,
					.034,
					.004
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: t ? W.green : "#46534f",
					emissive: W.green,
					emissiveIntensity: t ? .3 : .04
				})]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.102,
					.06
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.012,
					.012,
					.04,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#59645f" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					.04,
					.19,
					.114
				],
				scale: .15
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/controls/smart-button.tsx
function br({ visualState: e }) {
	let t = e === "connected-active";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-smart-button",
		children: [
			/* @__PURE__ */ (0, U.jsxs)(L, {
				args: [
					.09,
					.09,
					.025
				],
				radius: .014,
				smoothness: 2,
				position: [
					0,
					.045,
					.0125
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)(I, { color: W.body }), /* @__PURE__ */ (0, U.jsx)(r, {
					color: W.charcoal,
					thickness: .0025
				})]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "smart-button-control",
				position: [
					0,
					.045,
					.03
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.032,
						.032,
						.01,
						22
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: t ? W.coral : W.bodyDark }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: W.charcoal,
						thickness: .002
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.045,
					.0345
				],
				children: [/* @__PURE__ */ (0, U.jsx)("ringGeometry", { args: [
					.012,
					.017,
					18
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: t ? "#fff0df" : "#65706b" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					.029,
					.074,
					.03
				],
				scale: .1
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/covers/blind-fabric.tsx
var xr = 1.44, Sr = 1.48;
function Cr({ position: e, reducedMotion: t }) {
	let n = (0, R.useRef)(null), i = (0, R.useRef)(null), a = (0, R.useRef)((e ?? 50) / 100), o = (0, R.useRef)(a.current), s = Se((e) => e.invalidate), c = (e) => {
		n.current && (n.current.scale.y = Math.max(1e-5, 1 - e), n.current.visible = e < .99999), i.current && (i.current.position.y = .02 + xr * e);
	};
	return (0, R.useLayoutEffect)(() => {
		o.current = e === null ? a.current : e / 100, t && (a.current = o.current), c(a.current), s();
	}, [
		e,
		t,
		s
	]), F((e, t) => {
		let n = o.current - a.current;
		Math.abs(n) < 1e-4 || (a.current = Math.abs(n) < .001 ? o.current : a.current + n * (1 - Math.exp(-10 * Math.min(t, .1))), c(a.current), s());
	}), /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "blind-moving-cover",
		children: [/* @__PURE__ */ (0, U.jsx)("group", {
			ref: n,
			name: "blind-fabric",
			position: [
				0,
				Sr,
				.072
			],
			children: /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					-1.44 / 2,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					1.12,
					xr,
					.008
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#d9d4c6" })]
			})
		}), /* @__PURE__ */ (0, U.jsx)("group", {
			ref: i,
			name: "blind-bottom-rail",
			position: [
				0,
				.02,
				.072
			],
			children: /* @__PURE__ */ (0, U.jsxs)("mesh", {
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						1.14,
						.04,
						.028
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#b8bcb2" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#59605a",
						thickness: .0015,
						screenspace: !1
					})
				]
			})
		})]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/covers/motorized-blind.tsx
var wr = [
	1.2,
	1.6,
	.12
];
function Tr({ state: e, visualState: t, reducedMotion: n }) {
	let i = t === "disconnected" || t === "unavailable" ? null : Ee(e);
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-motorized-blind",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "blind-headbox",
				position: [
					0,
					1.54,
					.09
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						1.156,
						.12,
						.06
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#e7e5dc" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#59605a",
						thickness: .0015,
						screenspace: !1
					})
				]
			}),
			[-.59, .59].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					1.54,
					.09
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.02,
					.112,
					.058
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#bac0b7" })]
			}, e)),
			[-.5, .5].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					1.54,
					.035
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.05,
					.07,
					.07
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#bac0b7" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(Cr, {
				position: i,
				reducedMotion: n
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: t,
				position: [
					.52,
					1.54,
					.106
				],
				scale: .4
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/covers/motorized-curtain.tsx
function Er({ state: e, visualState: t, color: n }) {
	let i = ((t === "disconnected" || t === "unavailable" ? null : Ee(e)) ?? 35) / 100, a = .94 - i * .7, o = .48 + i * .35;
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-motorized-curtain",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					2.36,
					.1
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						2,
						.08,
						.112
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#dedbd3" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#666c68",
						thickness: .004
					})
				]
			}),
			[-.86, .86].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					2.36,
					.02
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.08,
					.08,
					.04
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#aeb4af" })]
			}, e)),
			[-1, 1].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e * o,
					1.14,
					.125
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						a,
						2.28,
						.064
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: n ?? (e < 0 ? "#d8c8ad" : "#dfcfb6") }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#81745f",
						thickness: .004
					})
				]
			}, e)),
			[
				-.6,
				-.2,
				.2,
				.6
			].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					1.14,
					.158
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.012,
					2.22,
					.004
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: n ?? "#b6a78f" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					.91,
					2.29,
					.123
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.12,
					.14,
					.074
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#707873" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: t,
				position: [
					.91,
					2.3,
					.153
				],
				scale: .28
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/fans/fan-operation.ts
function Dr({ state: e, visualState: t }) {
	if (t !== "connected-active" || e?.state !== "on") return 0;
	let n = e.attributes.percentage;
	return typeof n == "number" && Number.isFinite(n) ? Math.max(0, Math.min(100, n)) / 100 : .5;
}
//#endregion
//#region packages/catalog/src/device/presets/fans/fan-rotor.tsx
function Or({ radius: e, count: t, color: n, state: a, visualState: o, reducedMotion: s }) {
	let c = (0, R.useRef)(null), l = (0, R.useMemo)(() => {
		let t = new j();
		t.moveTo(e * .12, -e * .07), t.quadraticCurveTo(e * .55, -e * .22, e * .85, -e * .14), t.quadraticCurveTo(e, -e * .1, e, 0), t.quadraticCurveTo(e * .96, e * .16, e * .78, e * .18), t.lineTo(e * .16, e * .09), t.closePath();
		let n = new i(t, {
			depth: e * .03,
			bevelEnabled: !1,
			curveSegments: 4,
			steps: 1
		});
		return n.translate(0, 0, -e * .015), n;
	}, [e]);
	(0, R.useEffect)(() => () => l.dispose(), [l]);
	let u = Dr({
		...a === void 0 ? {} : { state: a },
		visualState: o
	});
	return F(({ invalidate: e }, t) => {
		!c.current || s || u === 0 || (c.current.rotation.z = (c.current.rotation.z - Math.min(t, .05) * u * 12) % (Math.PI * 2), e());
	}), /* @__PURE__ */ (0, U.jsx)("group", {
		ref: c,
		name: "fan-rotor",
		children: Array.from({ length: t }, (e, i) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: `fan-blade-${i}`,
			geometry: l,
			rotation: [
				0,
				0,
				i * Math.PI * 2 / t
			],
			castShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)(I, { color: n }), /* @__PURE__ */ (0, U.jsx)(r, {
				color: "#52605b",
				thickness: .0015,
				screenspace: !1
			})]
		}, i))
	});
}
//#endregion
//#region packages/catalog/src/device/presets/fans/ceiling-fan.tsx
function kr(e) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-ceiling-fan",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "fan-canopy",
				position: [
					0,
					.375,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.08,
					.055,
					.05,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: W.body })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "fan-downrod",
				position: [
					0,
					.245,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.014,
					.014,
					.24,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: W.charcoal })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "fan-motor",
				position: [
					0,
					.07,
					0
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.09,
						.07,
						.14,
						24
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: W.body }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: W.charcoal,
						thickness: .0015,
						screenspace: !1
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsx)("group", {
				position: [
					0,
					.1,
					0
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: /* @__PURE__ */ (0, U.jsx)(Or, {
					...e,
					radius: .6,
					count: 4,
					color: "#b99367"
				})
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e.visualState,
				position: [
					0,
					.045,
					.078
				],
				scale: .45
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/fans/fan-guard.tsx
function Ar() {
	let e = (0, R.useMemo)(() => {
		let e = [], t = (t, n) => {
			let r = n.clone().sub(t), i = new Me(.0016, .0016, r.length(), 4);
			i.applyQuaternion(new S().setFromUnitVectors(new M(0, 1, 0), r.normalize())), i.translate(...t.clone().add(n).multiplyScalar(.5).toArray()), e.push(i);
		};
		for (let n of [-.025, .045]) {
			for (let t of [
				.067,
				.12,
				.175
			]) {
				let r = new Ie(t, t === .175 ? .005 : .0016, 4, 32);
				r.translate(0, 0, n), e.push(r);
			}
			for (let e = 0; e < 16; e++) {
				let r = e * Math.PI / 8;
				t(new M(.028 * Math.cos(r), .028 * Math.sin(r), n), new M(.175 * Math.cos(r), .175 * Math.sin(r), n));
			}
		}
		for (let e = 0; e < 8; e++) {
			let n = e * Math.PI / 4;
			t(new M(.175 * Math.cos(n), .175 * Math.sin(n), -.025), new M(.175 * Math.cos(n), .175 * Math.sin(n), .045));
		}
		let n = N(e);
		return e.forEach((e) => e.dispose()), n;
	}, []);
	return (0, R.useEffect)(() => () => e.dispose(), [e]), /* @__PURE__ */ (0, U.jsx)("mesh", {
		name: "fan-guard",
		geometry: e,
		castShadow: !0,
		children: /* @__PURE__ */ (0, U.jsx)(I, { color: W.charcoal })
	});
}
//#endregion
//#region packages/catalog/src/device/presets/fans/fan-head.tsx
function jr(e) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "fan-head",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "fan-motor",
				position: [
					0,
					0,
					-.065
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.055,
						.05,
						.1,
						20
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: W.body }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: W.charcoal,
						thickness: .0015,
						screenspace: !1
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsx)("group", {
				position: [
					0,
					0,
					.012
				],
				children: /* @__PURE__ */ (0, U.jsx)(Or, {
					...e,
					radius: .153,
					count: 3,
					color: W.bodyDark
				})
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "fan-hub",
				position: [
					0,
					0,
					.012
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.033,
						.033,
						.075,
						20
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: W.body }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: W.charcoal,
						thickness: .0015,
						screenspace: !1
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsx)(Ar, {})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/fans/fan-airflow.tsx
function Mr(e) {
	return Dr(e) === 0 ? null : /* @__PURE__ */ (0, U.jsx)("group", {
		name: "fan-airflow",
		scale: .5,
		children: /* @__PURE__ */ (0, U.jsx)(cr, {
			mode: "cool",
			width: .7,
			reducedMotion: e.reducedMotion,
			forward: !0
		})
	});
}
//#endregion
//#region packages/catalog/src/device/presets/fans/table-fan.tsx
function Nr(e) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-table-fan",
		children: [/* @__PURE__ */ (0, U.jsxs)("group", {
			name: "fan-body",
			userData: { walkCollider: !0 },
			children: [
				/* @__PURE__ */ (0, U.jsxs)("mesh", {
					name: "fan-base",
					position: [
						0,
						.013,
						0
					],
					castShadow: !0,
					receiveShadow: !0,
					children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.105,
						.12,
						.026,
						32
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: W.body })]
				}),
				/* @__PURE__ */ (0, U.jsxs)("mesh", {
					name: "fan-neck",
					position: [
						0,
						.16,
						-.075
					],
					castShadow: !0,
					children: [
						/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
							.02,
							.032,
							.28,
							16
						] }),
						/* @__PURE__ */ (0, U.jsx)(I, { color: W.body }),
						/* @__PURE__ */ (0, U.jsx)(r, {
							color: W.charcoal,
							thickness: .0015,
							screenspace: !1
						})
					]
				}),
				/* @__PURE__ */ (0, U.jsx)("group", {
					position: [
						0,
						.3,
						0
					],
					children: /* @__PURE__ */ (0, U.jsx)(jr, { ...e })
				}),
				/* @__PURE__ */ (0, U.jsx)(G, {
					visualState: e.visualState,
					position: [
						0,
						.027,
						.065
					],
					scale: .45
				})
			]
		}), /* @__PURE__ */ (0, U.jsx)("group", {
			position: [
				0,
				.3,
				0
			],
			children: /* @__PURE__ */ (0, U.jsx)(Mr, { ...e })
		})]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/fans/pedestal-fan.tsx
function Pr(e) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-pedestal-fan",
		children: [/* @__PURE__ */ (0, U.jsxs)("group", {
			name: "fan-body",
			userData: { walkCollider: !0 },
			children: [
				/* @__PURE__ */ (0, U.jsxs)("mesh", {
					name: "fan-base",
					position: [
						0,
						.025,
						0
					],
					castShadow: !0,
					receiveShadow: !0,
					children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.17,
						.2,
						.05,
						32
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: W.body })]
				}),
				/* @__PURE__ */ (0, U.jsxs)("mesh", {
					name: "fan-lower-post",
					position: [
						0,
						.395,
						-.075
					],
					castShadow: !0,
					children: [
						/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
							.026,
							.037,
							.71,
							16
						] }),
						/* @__PURE__ */ (0, U.jsx)(I, { color: W.body }),
						/* @__PURE__ */ (0, U.jsx)(r, {
							color: W.charcoal,
							thickness: .0015,
							screenspace: !1
						})
					]
				}),
				/* @__PURE__ */ (0, U.jsxs)("mesh", {
					name: "fan-upper-post",
					position: [
						0,
						.92,
						-.075
					],
					castShadow: !0,
					children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.017,
						.017,
						.41,
						12
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: W.charcoal })]
				}),
				/* @__PURE__ */ (0, U.jsx)("group", {
					position: [
						0,
						1.125,
						0
					],
					scale: 1.25,
					children: /* @__PURE__ */ (0, U.jsx)(jr, { ...e })
				}),
				/* @__PURE__ */ (0, U.jsx)(G, {
					visualState: e.visualState,
					position: [
						0,
						.64,
						-.043
					],
					scale: .5
				})
			]
		}), /* @__PURE__ */ (0, U.jsx)("group", {
			position: [
				0,
				1.125,
				0
			],
			scale: 1.25,
			children: /* @__PURE__ */ (0, U.jsx)(Mr, { ...e })
		})]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/fans/air-purifier.tsx
function Fr({ visualState: e, reducedMotion: t }) {
	let n = e === "connected-active";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-air-purifier",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.235,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.135,
						.135,
						.47,
						24
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: W.body }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: W.charcoal,
						thickness: .005
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.495,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.135,
					.125,
					.05,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#68736f" })]
			}),
			Array.from({ length: 6 }, (e, t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.09 + t * .048,
					.131
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.19,
					.012,
					.008
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#9ba49f" })]
			}, t)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.495,
					0
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
					.07,
					.008,
					8,
					20
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: n ? W.green : W.muted,
					emissive: W.green,
					emissiveIntensity: n ? .3 : 0
				})]
			}),
			/* @__PURE__ */ (0, U.jsx)(zn, {
				visualState: e,
				reducedMotion: t,
				position: [
					0,
					.85,
					.1
				],
				scale: .8
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					.08,
					.445,
					.09
				],
				scale: .35
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/fans/bathroom-extractor-fan.tsx
function Ir({ visualState: e, reducedMotion: t }) {
	let n = e === "connected-active";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-bathroom-extractor-fan",
		children: [
			/* @__PURE__ */ (0, U.jsxs)(L, {
				args: [
					.18,
					.18,
					.05
				],
				radius: .018,
				smoothness: 2,
				position: [
					0,
					.09,
					.025
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)(I, { color: W.body }), /* @__PURE__ */ (0, U.jsx)(r, {
					color: W.charcoal,
					thickness: .003
				})]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.09,
					.062
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.07,
					.07,
					.044,
					20
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: n ? "#849c95" : "#9ba29e" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.09,
					.087
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.014,
					.014,
					.002,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#596460" })]
			}),
			[
				-.052,
				-.017,
				.017,
				.052
			].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.09 + e,
					.0895
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.135,
					.007,
					.001
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#d3d5cf" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(zn, {
				visualState: e,
				reducedMotion: t,
				position: [
					0,
					.36,
					.12
				],
				scale: .65
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					.065,
					.152,
					.074
				],
				scale: .22
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/lighting/floor-lamp.tsx
var Lr = (e) => {
	switch (e) {
		case "connected-active": return "#f2cf72";
		case "connected-inactive": return "#a99666";
		case "unavailable": return "#b28b69";
		case "disconnected": return "#e2c685";
	}
};
function Rr({ state: e, visualState: t }) {
	let n = c(e);
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-floor-lamp",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.035,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.2,
					.23,
					.07,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#596660" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.78,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.025,
					.03,
					1.5,
					10
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#596660" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "floor-lamp-emitter",
				position: [
					0,
					1.55,
					0
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("coneGeometry", { args: [
						.32,
						.48,
						16,
						1,
						!0
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, {
						color: Lr(t),
						emissive: "#e6a94d",
						emissiveIntensity: n * .65,
						side: 2
					}),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#7a6844",
						thickness: .006
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: t,
				position: [
					.16,
					.08,
					0
				],
				scale: .8
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/lighting/terracotta-pendant.tsx
var zr = "#ad5436", Br = "#c86a46", Vr = "#6f321f", Hr = (e) => {
	switch (e) {
		case "connected-active": return {
			color: "#ffe8b9",
			emissive: "#e5a54d",
			intensity: .9
		};
		case "unavailable": return {
			color: "#b28b69",
			emissive: "#4f3526",
			intensity: .18
		};
		case "connected-inactive": return {
			color: "#b8ab92",
			emissive: "#000000",
			intensity: 0
		};
		case "disconnected": return {
			color: "#c7b99e",
			emissive: "#000000",
			intensity: 0
		};
	}
};
function Ur({ state: e, visualState: t }) {
	let n = Hr(t), i = c(e);
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-terracotta-pendant",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				castShadow: !0,
				position: [
					0,
					.608,
					0
				],
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.055,
						.075,
						.064,
						24
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: Vr }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#43251d",
						thickness: .005,
						screenspace: !1
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				castShadow: !0,
				position: [
					0,
					.49,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.007,
					.007,
					.19,
					10
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#574b44" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				castShadow: !0,
				position: [
					0,
					.375,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.055,
					.072,
					.1,
					28
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: Vr })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				castShadow: !0,
				position: [
					0,
					.3,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.072,
					.19,
					.1,
					32,
					1,
					!0
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: Br,
					side: 2
				})]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				castShadow: !0,
				position: [
					0,
					.175,
					0
				],
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.19,
						.315,
						.2,
						36,
						1,
						!0
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, {
						color: zr,
						side: 2
					}),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: Vr,
						thickness: .008,
						screenspace: !1
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				castShadow: !0,
				position: [
					0,
					.068,
					0
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
					.298,
					.021,
					10,
					36
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: Vr })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.135,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.026,
					.035,
					.105,
					18
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#6f5c49" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "terracotta-pendant-emitter",
				position: [
					0,
					.065,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
					.066,
					20,
					14
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: n.color,
					emissive: n.emissive,
					emissiveIntensity: n.intensity * i
				})]
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: t,
				position: [
					.07,
					.515,
					0
				],
				scale: .6
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/lighting/connected-light-finish.ts
var Wr = (e) => {
	switch (e) {
		case "connected-active": return {
			color: "#fff0bd",
			emissiveIntensity: .72
		};
		case "connected-inactive": return {
			color: "#ded7c4",
			emissiveIntensity: 0
		};
		case "unavailable": return {
			color: "#d3bc9d",
			emissiveIntensity: .08
		};
		case "disconnected": return {
			color: "#e4dac2",
			emissiveIntensity: .03
		};
	}
};
function Gr(e, t) {
	let n = Wr(e);
	return {
		...n,
		emissiveIntensity: n.emissiveIntensity * c(t)
	};
}
//#endregion
//#region packages/catalog/src/device/presets/lighting/table-lamp.tsx
var Kr = [
	.32,
	.52,
	.32
];
function qr({ state: e, visualState: t }) {
	let n = Wr(t);
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: `device-state-${t}`,
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "table-lamp-base",
				position: [
					0,
					.08,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.09,
					.12,
					.16,
					20
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#ded7c8" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "table-lamp-neck",
				position: [
					0,
					.245,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.018,
					.018,
					.19,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#8d867b" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "table-lamp-shade",
				position: [
					0,
					.39,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.12,
					.16,
					.26,
					24,
					1,
					!0
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: n.color,
					emissive: "#f2c66d",
					emissiveIntensity: n.emissiveIntensity * .45 * c(e),
					side: 2
				})]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "table-lamp-shade-top",
				position: [
					0,
					.52,
					0
				],
				rotation: [
					-Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("ringGeometry", { args: [
					.018,
					.12,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: n.color,
					side: 2
				})]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/lighting/woven-pendant.tsx
function Jr({ brightness: e = 0 }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "woven-pendant",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					-.2,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.008,
					.008,
					.4,
					8
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#5b5147" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					-.48,
					0
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.1,
						.43,
						.2,
						18,
						1,
						!0
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, {
						color: "#b4895d",
						transparent: !0,
						opacity: .82
					}),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#6e5139",
						thickness: .005
					})
				]
			}),
			[
				-.39,
				-.45,
				-.51,
				-.57
			].map((e, t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					e,
					0
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
					.13 + t * .075,
					.009,
					6,
					18
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#7d5b3e" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					-.47,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
					.055,
					12,
					8
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: "#f2d69a",
					emissive: "#d49b48",
					emissiveIntensity: e
				})]
			})
		]
	});
}
function Yr({ state: e, visualState: t }) {
	let n = Wr(t);
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: `device-state-${t}`,
		children: /* @__PURE__ */ (0, U.jsx)(Jr, { brightness: n.emissiveIntensity * c(e) })
	});
}
//#endregion
//#region packages/catalog/src/device/presets/lighting/children-pendant.tsx
function Xr({ y: e, top: t, bottom: n, color: i }) {
	return /* @__PURE__ */ (0, U.jsxs)("mesh", {
		position: [
			0,
			e,
			0
		],
		castShadow: !0,
		children: [
			/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
				t,
				n,
				.12,
				24,
				1,
				!0
			] }),
			/* @__PURE__ */ (0, U.jsx)(I, {
				color: i,
				transparent: !0,
				opacity: .58,
				depthWrite: !1,
				side: 2
			}),
			/* @__PURE__ */ (0, U.jsx)(r, {
				color: "#6d4f34",
				thickness: .005,
				screenspace: !1
			})
		]
	});
}
function Zr({ color: e = "#b88958", brightness: t = .35 }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "suspension-rotin-etagee-chambre-enfant",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					-.075,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.007,
					.007,
					.15,
					10
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#796955" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					-.145,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.045,
					.06,
					.055,
					20
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#76533a" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(Xr, {
				y: -.2,
				top: .14,
				bottom: .23,
				color: e
			}),
			/* @__PURE__ */ (0, U.jsx)(Xr, {
				y: -.305,
				top: .22,
				bottom: .29,
				color: e
			}),
			/* @__PURE__ */ (0, U.jsx)(Xr, {
				y: -.41,
				top: .27,
				bottom: .21,
				color: e
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					-.47,
					0
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
					.21,
					.01,
					6,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#795638" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					-.37,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
					.052,
					18,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: "#f1d59b",
					emissive: "#d49b48",
					emissiveIntensity: t
				})]
			})
		]
	});
}
function Qr({ state: e, visualState: t }) {
	let n = Wr(t);
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: `device-state-${t}`,
		children: /* @__PURE__ */ (0, U.jsx)(Zr, { brightness: n.emissiveIntensity * c(e) })
	});
}
//#endregion
//#region packages/catalog/src/device/presets/lighting/ceiling-light.tsx
function $r({ state: e, visualState: t }) {
	let n = Wr(t);
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-ceiling-light",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.08,
					0
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.2,
						.2,
						.08,
						24
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#a8aaa4" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: W.charcoal,
						thickness: .004
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.04,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.18,
					.19,
					.08,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: n.color,
					emissive: "#f2c66d",
					emissiveIntensity: n.emissiveIntensity * c(e)
				})]
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: t,
				position: [
					.13,
					.075,
					0
				],
				scale: .3
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/lighting/recessed-downlight.tsx
function ei({ state: e, visualState: t }) {
	let n = Wr(t);
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-recessed-downlight",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.034,
					0
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.05,
						.05,
						.012,
						20
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: W.body }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: W.charcoal,
						thickness: .002
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.014,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.038,
					.045,
					.028,
					20
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: n.color,
					emissive: "#f2c66d",
					emissiveIntensity: n.emissiveIntensity * c(e)
				})]
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: t,
				position: [
					.028,
					.033,
					0
				],
				scale: .18
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/lighting/wall-sconce.tsx
function ti({ state: e, visualState: t }) {
	let n = Wr(t);
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-wall-sconce",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.16,
					.0125
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.12,
						.32,
						.025
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#8b928e" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: W.charcoal,
						thickness: .003
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.16,
					.0475
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.035,
					.035,
					.07
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#737d78" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)(L, {
				args: [
					.22,
					.22,
					.135
				],
				radius: .035,
				smoothness: 2,
				position: [
					0,
					.17,
					.0925
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)(I, {
					color: n.color,
					emissive: "#f2c66d",
					emissiveIntensity: n.emissiveIntensity * c(e),
					transparent: !0,
					opacity: .94
				}), /* @__PURE__ */ (0, U.jsx)(r, {
					color: "#8b7e64",
					thickness: .004
				})]
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: t,
				position: [
					.04,
					.035,
					.023
				],
				scale: .2
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/lighting/illuminated-round-mirror.tsx
var ni = [
	.8,
	.8,
	.045
];
function ri({ state: e, visualState: t }) {
	let n = Wr(t);
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-illuminated-round-mirror",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.4,
					.006
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.4,
						.4,
						.012,
						32
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#d7d3cb" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#8f918d",
						thickness: .003
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.4,
					.045
				],
				children: [/* @__PURE__ */ (0, U.jsx)("circleGeometry", { args: [.356, 32] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#afc5c7" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "illuminated-mirror-light-ring",
				position: [
					0,
					.4,
					.026
				],
				children: [
					/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
						.382,
						.018,
						8,
						32
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, {
						color: n.color,
						emissive: "#f5dba1",
						emissiveIntensity: n.emissiveIntensity * c(e)
					}),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#b3a98e",
						thickness: .002
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: t,
				position: [
					0,
					.08,
					.0415
				],
				scale: .15
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/lighting/garden-lantern-geometry.tsx
function ii({ state: e, visualState: t, height: n }) {
	let r = Gr(t, e);
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: `device-state-${t}`,
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.035,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.05,
					.065,
					.07,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#252e30" })]
			}),
			n > .35 && /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					(n - .35) / 2 + .065,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.023,
					.03,
					n - .35,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#30383a" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("group", {
				position: [
					0,
					n - .9,
					0
				],
				children: [
					/* @__PURE__ */ (0, U.jsxs)("mesh", {
						position: [
							0,
							.615,
							0
						],
						castShadow: !0,
						children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
							.085,
							.035,
							.04,
							4
						] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#252e30" })]
					}),
					/* @__PURE__ */ (0, U.jsxs)("group", {
						rotation: [
							0,
							Math.PI / 4,
							0
						],
						children: [
							/* @__PURE__ */ (0, U.jsxs)("mesh", {
								position: [
									0,
									.64,
									0
								],
								castShadow: !0,
								children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
									.1,
									.1,
									.02,
									4
								] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#252e30" })]
							}),
							/* @__PURE__ */ (0, U.jsxs)("mesh", {
								position: [
									0,
									.735,
									0
								],
								children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
									.142,
									.095,
									.17,
									4,
									1,
									!0
								] }), /* @__PURE__ */ (0, U.jsx)(I, {
									color: "#d8e6df",
									transparent: !0,
									opacity: .2,
									depthWrite: !1,
									side: 2
								})]
							}),
							[
								0,
								1,
								2,
								3
							].map((e) => /* @__PURE__ */ (0, U.jsx)("group", {
								rotation: [
									0,
									e * Math.PI / 2,
									0
								],
								children: /* @__PURE__ */ (0, U.jsxs)("mesh", {
									position: [
										0,
										.735,
										.121
									],
									rotation: [
										-.255,
										0,
										0
									],
									castShadow: !0,
									children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
										.012,
										.179,
										.012
									] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#252e30" })]
								})
							}, e)),
							/* @__PURE__ */ (0, U.jsxs)("mesh", {
								position: [
									0,
									.8275,
									0
								],
								castShadow: !0,
								children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
									.1697056275,
									.1697056275,
									.015,
									4
								] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#252e30" })]
							}),
							/* @__PURE__ */ (0, U.jsxs)("mesh", {
								position: [
									0,
									.86,
									0
								],
								castShadow: !0,
								children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
									.055,
									.1697056275,
									.05,
									4
								] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#364044" })]
							})
						]
					}),
					/* @__PURE__ */ (0, U.jsxs)("mesh", {
						position: [
							0,
							.8925,
							0
						],
						castShadow: !0,
						children: [/* @__PURE__ */ (0, U.jsx)("coneGeometry", { args: [
							.013,
							.015,
							8
						] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#252e30" })]
					}),
					/* @__PURE__ */ (0, U.jsxs)("mesh", {
						position: [
							0,
							.669,
							0
						],
						children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
							.019,
							.023,
							.04,
							12
						] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#515654" })]
					}),
					/* @__PURE__ */ (0, U.jsxs)("mesh", {
						name: "garden-lantern-bulb",
						position: [
							0,
							.724,
							0
						],
						children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
							.027,
							12,
							8
						] }), /* @__PURE__ */ (0, U.jsx)(I, {
							color: r.color,
							emissive: "#ffd28c",
							emissiveIntensity: r.emissiveIntensity
						})]
					})
				]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/lighting/garden-lantern-pole.tsx
var ai = [
	.24,
	.8,
	.24
];
function oi(e) {
	return /* @__PURE__ */ (0, U.jsx)(ii, {
		...e,
		height: .8
	});
}
//#endregion
//#region packages/catalog/src/device/presets/lighting/low-garden-lantern.tsx
var si = [
	.24,
	.35,
	.24
];
function ci(e) {
	return /* @__PURE__ */ (0, U.jsx)(ii, {
		...e,
		height: .35
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/wrought-iron-pergola/pergola-geometry.ts
function li() {
	let e = [], t = [], n = [
		[],
		[],
		[]
	], r = [], i = [], a = [], o = [], s = (e, t, n, r, i, a) => new le(r, i, a).translate(e, t, n), c = (e, t, n = 32) => new We(new k(e), n, t, 5, !1);
	for (let t of [-1.46, 1.46]) e.push(s(0, 2.65, t, 4, .1, .08));
	for (let t of [-1.96, 1.96]) e.push(s(t, 2.65, 0, .08, .1, 3));
	for (let t = 0; t < 9; t++) e.push(s(-1.8 + t * .45, 2.61, 0, .024, .035, 2.9));
	for (let t of [
		-.8,
		0,
		.8
	]) e.push(s(0, 2.63, t, 3.9, .022, .022));
	for (let r of [-1.88, 1.88]) for (let i of [-1.38, 1.38]) {
		e.push(s(r, .12, i, .11, .06, .11), s(r, 2.48, i, .105, .065, .105));
		for (let t of [0, 2]) {
			let n = (t === 0 ? r : i) > 0 ? -1 : 1, a = Array.from({ length: 25 }, (e, a) => {
				let o = a / 24, s = new M(r, 2.03 + .55 * Math.sin(o * Math.PI / 2), i);
				return s.setComponent(t, s.getComponent(t) + n * .56 * (1 - Math.cos(o * Math.PI / 2))), s;
			});
			e.push(c(a, .016));
			let o = Array.from({ length: 33 }, (e, a) => {
				let o = a / 32, s = o * Math.PI * 2.2, c = .14 * (1 - o * .78), l = new M(r, 2.35 + Math.sin(s) * c, i);
				return l.setComponent(t, l.getComponent(t) + n * (.24 + Math.cos(s) * c)), l;
			});
			e.push(c(o, .011));
		}
		let a = Array.from({ length: 49 }, (e, t) => {
			let n = t / 48;
			return new M(r + Math.sin(n * 19) * .065, .02 + n * 2.53, i + Math.cos(n * 19) * .065);
		});
		t.push(c(a, .018, 48));
		for (let e = 9; e < 47; e += 2) {
			let t = a[e];
			n[e % 3].push(new p(1, 0).scale(.045, .025, .055).rotateY(e * 2.4).rotateZ(e * .7).translate(t.x, t.y, t.z));
		}
	}
	for (let e = 0; e < 6; e++) {
		let i = -.98 + e * .39, a = Array.from({ length: 49 }, (t, n) => {
			let r = -1.86 + n / 48 * 3.72;
			return new M(r, 2.54 + Math.sin(n * .37 + e) * .035, i + Math.sin(n * .28 + e) * .12);
		});
		t.push(c(a, .012, 48)), a.forEach((t, i) => {
			if (!((i + e * 3) % 7 < 2)) {
				for (let r of [-1, 1]) n[(i + e) % 3].push(new p(1, 0).scale(.105, .024, .058).rotateY(r * .65 + i * .4).translate(t.x, t.y + .035, t.z + r * .07));
				if (i % 9 == e % 9) for (let e = 0; e < 7; e++) r.push(new p(1, 0).scale(.04 * (1 - e * .09), .038, .04 * (1 - e * .09)).translate(t.x + Math.sin(e * 2) * .017, t.y - .04 - e * .042, t.z));
			}
		});
	}
	for (let e = 0; e < 3; e++) {
		let t = -.98 + e * .98, n = (e) => new M(-1.88 + e * 3.76, 2.52 - .28 * Math.sin(e * Math.PI), t);
		i.push(c(Array.from({ length: 33 }, (e, t) => n(t / 32)), .006));
		for (let e = 1; e < 10; e++) {
			let t = n(e / 10);
			o.push(s(t.x, t.y - .025, t.z, .025, .05, .025)), a.push(new qe(.034, 8, 6).scale(1, 1.25, 1).translate(t.x, t.y - .083, t.z));
		}
	}
	let l = (e) => {
		let t = N(e);
		return e.forEach((e) => e.dispose()), t;
	};
	return {
		iron: l(e),
		wood: l(t),
		leaves: n.map(l),
		flowers: l(r),
		cable: l(i),
		bulbs: l(a),
		sockets: l(o)
	};
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/wrought-iron-pergola/pergola-frame.tsx
var ui = [
	4,
	2.7,
	3
];
function di({ children: e, bulbFinish: t }) {
	let n = (0, R.useMemo)(li, []);
	return (0, R.useEffect)(() => () => {
		Object.values(n).flat().forEach((e) => e.dispose());
	}, [n]), /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "provencal-wrought-iron-pergola",
		children: [
			[-1.88, 1.88].flatMap((e) => [-1.38, 1.38].map((t) => /* @__PURE__ */ (0, U.jsxs)("group", {
				userData: { walkCollider: !0 },
				children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
					position: [
						e,
						1.31,
						t
					],
					castShadow: !0,
					children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.065,
						2.62,
						.065
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#303b36" })]
				}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
					position: [
						e,
						.025,
						t
					],
					castShadow: !0,
					children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.17,
						.05,
						.17
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#303b36" })]
				})]
			}, `${e}-${t}`))),
			/* @__PURE__ */ (0, U.jsx)("mesh", {
				geometry: n.iron,
				castShadow: !0,
				children: /* @__PURE__ */ (0, U.jsx)(I, { color: "#303b36" })
			}),
			/* @__PURE__ */ (0, U.jsx)("mesh", {
				geometry: n.wood,
				castShadow: !0,
				children: /* @__PURE__ */ (0, U.jsx)(I, { color: "#766044" })
			}),
			n.leaves.map((e, t) => /* @__PURE__ */ (0, U.jsx)("mesh", {
				geometry: e,
				castShadow: !0,
				children: /* @__PURE__ */ (0, U.jsx)(I, { color: [
					"#61754a",
					"#82945b",
					"#425e42"
				][t] })
			}, t)),
			/* @__PURE__ */ (0, U.jsx)("mesh", {
				geometry: n.flowers,
				castShadow: !0,
				children: /* @__PURE__ */ (0, U.jsx)(I, { color: "#baa3cc" })
			}),
			t && /* @__PURE__ */ (0, U.jsxs)("group", {
				name: "pergola-string-lights",
				children: [
					/* @__PURE__ */ (0, U.jsx)("mesh", {
						geometry: n.cable,
						children: /* @__PURE__ */ (0, U.jsx)(I, { color: "#343a31" })
					}),
					/* @__PURE__ */ (0, U.jsx)("mesh", {
						geometry: n.sockets,
						children: /* @__PURE__ */ (0, U.jsx)(I, { color: "#343a31" })
					}),
					/* @__PURE__ */ (0, U.jsx)("mesh", {
						geometry: n.bulbs,
						children: /* @__PURE__ */ (0, U.jsx)(I, {
							color: t.color,
							emissive: "#ffd28c",
							emissiveIntensity: t.emissiveIntensity
						})
					})
				]
			}),
			e
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/wrought-iron-pergola/wrought-iron-pergola.tsx
function fi({ size: e = ui }) {
	return /* @__PURE__ */ (0, U.jsx)("group", {
		scale: [
			e[0] / 4,
			e[1] / 2.7,
			e[2] / 3
		],
		children: /* @__PURE__ */ (0, U.jsx)(di, {})
	});
}
//#endregion
//#region packages/catalog/src/device/presets/lighting/pergola-string-lights.tsx
function pi({ state: e, visualState: t, variant: n }) {
	return /* @__PURE__ */ (0, U.jsx)(di, { bulbFinish: n === "plain" ? void 0 : Gr(t, e) });
}
//#endregion
//#region packages/catalog/src/device/presets/lighting/rattan-bell-pendant/bulb-position.ts
var mi = [
	0,
	.22,
	0
], hi = new k([
	new M(.246, .004, 0),
	new M(.244, .09, 0),
	new M(.218, .19, 0),
	new M(.155, .28, 0),
	new M(.075, .355, 0),
	new M(.039, .405, 0),
	new M(.037, .48, 0)
]);
function gi() {
	let e = [
		[],
		[],
		[]
	];
	for (let t = 0; t < 80; t++) {
		let n = t / 80 * Math.PI * 2, r = Array.from({ length: 33 }, (e, r) => {
			let i = r / 32, a = hi.getPoint(i), o = a.x + Math.sin(i * Math.PI * 24 + t * Math.PI) * .001;
			return new M(Math.cos(n) * o, a.y, Math.sin(n) * o);
		});
		e[t % 3].push(new We(new k(r), 40, .0022, 4, !1));
	}
	for (let t = 0; t <= 12; t++) {
		let n = hi.getPoint(t / 12), r = new Ie(n.x, t === 0 ? .004 : .0026, 6, 80);
		r.rotateX(Math.PI / 2), r.translate(0, n.y, 0), e[t % 3].push(r);
	}
	return e.map((e) => {
		let t = N(e);
		return e.forEach((e) => e.dispose()), t;
	});
}
//#endregion
//#region packages/catalog/src/device/presets/lighting/rattan-bell-pendant/rattan-bell-pendant.tsx
var _i = [
	.5,
	1.2,
	.5
], vi = [
	"#bc9461",
	"#cba574",
	"#c29c69"
];
function yi({ size: e = _i, brightness: t = 0 }) {
	let n = (0, R.useMemo)(gi, []);
	return (0, R.useEffect)(() => () => n.forEach((e) => e.dispose()), [n]), /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "rattan-bell-pendant",
		scale: [
			e[0] / .5,
			e[1] / 1.2,
			e[2] / .5
		],
		children: [
			n.map((e, t) => /* @__PURE__ */ (0, U.jsx)("mesh", {
				name: "open-rattan-weave",
				geometry: e,
				castShadow: !0,
				receiveShadow: !0,
				children: /* @__PURE__ */ (0, U.jsx)(I, { color: vi[t] })
			}, t)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "white-ceiling-rose",
				position: [
					0,
					1.185,
					0
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.055,
						.04,
						.03,
						32
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#eeeae2" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#bab3a8",
						thickness: .001,
						screenspace: !1
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "white-pendant-cord",
				position: [
					0,
					.7375,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.003,
					.003,
					.875,
					8
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#e5e0d6" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "bulb-socket",
				position: [
					0,
					.285,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.018,
					.021,
					.07,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#e5e0d6" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "opal-bulb",
				position: mi,
				scale: [
					1,
					1.25,
					1
				],
				children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
					.034,
					20,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: "#f4ead4",
					emissive: "#ffe1a3",
					emissiveIntensity: t
				})]
			}),
			[
				0,
				1,
				2
			].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "shade-support-spoke",
				position: [
					0,
					.455,
					0
				],
				rotation: [
					0,
					e * Math.PI * 2 / 3,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.074,
					.003,
					.003
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#c7b899" })]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/lighting/rattan-bell-pendant/model.tsx
function bi({ state: e, visualState: t }) {
	let n = t === "connected-active" ? .18 * c(e) : 0;
	return /* @__PURE__ */ (0, U.jsx)(yi, { brightness: n });
}
//#endregion
//#region packages/catalog/src/device/presets/lighting/under-cabinet-led-strip.tsx
var xi = [
	1,
	.015,
	.025
];
function Si({ state: e, visualState: t }) {
	let n = t === "connected-active" ? c(e) : 0;
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "under-cabinet-led-strip",
		children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: "led-strip-channel",
			position: [
				0,
				.0095,
				0
			],
			castShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
				1,
				.011,
				.025
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#e4e2d8" })]
		}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: "led-strip-diffuser",
			position: [
				0,
				.002,
				0
			],
			children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
				.984,
				.004,
				.019
			] }), /* @__PURE__ */ (0, U.jsx)(I, {
				color: n > 0 ? "#fff0ca" : "#ddd8c8",
				emissive: "#ffd99b",
				emissiveIntensity: n * .6
			})]
		})]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/lighting/white-dome-pendant.tsx
var Ci = [
	[.25, 0],
	[.25, .05],
	[.24, .1],
	[.2, .165],
	[.12, .2],
	[.06, .215],
	[.04, .22]
].map(([e, t]) => new Oe(e, t)), wi = [
	[.04, .214],
	[.06, .209],
	[.118, .194],
	[.196, .159],
	[.235, .097],
	[.244, .05],
	[.244, .003]
].map(([e, t]) => new Oe(e, t));
function Ti({ state: e, visualState: t }) {
	let n = Wr(t);
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-white-dome-pendant",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "white-dome-outer-shade",
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("latheGeometry", { args: [Ci, 32] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: "#eeede7",
					side: 2
				})]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "brass-dome-inner-shade",
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("latheGeometry", { args: [wi, 32] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: "#c3a260",
					side: 2
				})]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.004,
					0
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
					.247,
					.003,
					6,
					32
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#c3a260" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "oak-pendant-crown",
				position: [
					0,
					.245,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.04,
					.04,
					.05,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#c7a67b" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "pendant-cord",
				position: [
					0,
					.6225,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.002,
					.002,
					.705,
					8
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#dedbd2" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "ceiling-canopy",
				position: [
					0,
					.9875,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.035,
					.035,
					.025,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#eeede7" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "white-dome-pendant-emitter",
				position: [
					0,
					.06,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
					.035,
					16,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: n.color,
					emissive: "#f2c66d",
					emissiveIntensity: n.emissiveIntensity * c(e)
				})]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/media/camera-screen-display.ts
var Ei = .9, Di = .54, Oi = .012, ki = .04, Ai = .98, ji = .006, Mi = .002, Ni = 5.6, Pi = .035, Fi = .96, Ii = (e, t) => {
	if (t) return {
		verticalOffset: 0,
		normalOffset: 0,
		glowPulse: .5
	};
	let n = e * Math.PI * 2 / Ni;
	return {
		verticalOffset: Math.sin(n) * ji,
		normalOffset: Math.cos(n) * Mi,
		glowPulse: .5 + Math.sin(n * .75) * .5
	};
}, Li = .78, Ri = Li * 9 / 16, zi = .31, Bi = ki + Oi / 2, Vi = Oi / 2 + .004, Hi = Vi + .004, Ui = Hi + .004;
function Wi({ position: e, size: t }) {
	return /* @__PURE__ */ (0, U.jsxs)("mesh", {
		position: e,
		renderOrder: 12,
		children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: t }), /* @__PURE__ */ (0, U.jsx)(I, {
			color: "#78fff5",
			emissive: "#2de1d7",
			emissiveIntensity: .8,
			transparent: !0,
			opacity: .7,
			depthWrite: !1,
			toneMapped: !1
		})]
	});
}
var Gi = [
	/* @__PURE__ */ (0, U.jsx)(Wi, {
		position: [
			-.405,
			.252,
			Ui
		],
		size: [
			.055,
			.003,
			.002
		]
	}, "tl-h"),
	/* @__PURE__ */ (0, U.jsx)(Wi, {
		position: [
			-.432,
			.212,
			Ui
		],
		size: [
			.003,
			.06,
			.002
		]
	}, "tl-v"),
	/* @__PURE__ */ (0, U.jsx)(Wi, {
		position: [
			.405,
			.252,
			Ui
		],
		size: [
			.055,
			.003,
			.002
		]
	}, "tr-h"),
	/* @__PURE__ */ (0, U.jsx)(Wi, {
		position: [
			.432,
			.212,
			Ui
		],
		size: [
			.003,
			.06,
			.002
		]
	}, "tr-v"),
	/* @__PURE__ */ (0, U.jsx)(Wi, {
		position: [
			-.405,
			-.252,
			Ui
		],
		size: [
			.055,
			.003,
			.002
		]
	}, "bl-h"),
	/* @__PURE__ */ (0, U.jsx)(Wi, {
		position: [
			-.432,
			-.212,
			Ui
		],
		size: [
			.003,
			.06,
			.002
		]
	}, "bl-v"),
	/* @__PURE__ */ (0, U.jsx)(Wi, {
		position: [
			.405,
			-.252,
			Ui
		],
		size: [
			.055,
			.003,
			.002
		]
	}, "br-h"),
	/* @__PURE__ */ (0, U.jsx)(Wi, {
		position: [
			.432,
			-.212,
			Ui
		],
		size: [
			.003,
			.06,
			.002
		]
	}, "br-v")
];
function Ki({ liveMedia: e, visualState: t, reducedMotion: n }) {
	let r = (0, R.useRef)(null), { invalidate: i } = Se(), a = e?.state === "playing", o = e?.state === "connecting", s = e?.previewState === "cors-blocked", c = a && !s ? "#9afff6" : o ? "#f3b562" : s ? "#f0a56a" : "#6f958f";
	return (0, R.useEffect)(() => {
		if (n) return;
		let e = globalThis.setInterval(() => i(), 1e3 / 12);
		return () => globalThis.clearInterval(e);
	}, [i, n]), (0, R.useEffect)(() => {
		n && (r.current?.position.set(0, 0, Bi), i());
	}, [i, n]), F(({ clock: e }) => {
		if (!r.current) return;
		let t = Ii(e.elapsedTime, n);
		r.current.position.set(0, t.verticalOffset, Bi + t.normalOffset);
	}), /* @__PURE__ */ (0, U.jsx)("group", {
		name: "catalog-camera-screen",
		children: /* @__PURE__ */ (0, U.jsxs)("group", {
			name: `device-state-${t}`,
			children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					zi,
					-.001
				],
				renderOrder: 2,
				children: [/* @__PURE__ */ (0, U.jsx)("planeGeometry", { args: [Ai, .62] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: "#65d8ce",
					emissive: "#2e9e98",
					emissiveIntensity: .38,
					transparent: !0,
					opacity: .045,
					depthWrite: !1,
					toneMapped: !1
				})]
			}), /* @__PURE__ */ (0, U.jsxs)("group", {
				ref: r,
				position: [
					0,
					0,
					Bi
				],
				children: [
					/* @__PURE__ */ (0, U.jsx)(L, {
						args: [
							Ei,
							Di,
							Oi
						],
						radius: .012,
						smoothness: 2,
						position: [
							0,
							zi,
							0
						],
						renderOrder: 5,
						children: /* @__PURE__ */ (0, U.jsx)(I, {
							color: "#64cfc7",
							emissive: "#298f8a",
							emissiveIntensity: .4,
							transparent: !0,
							opacity: Pi,
							depthWrite: !1,
							toneMapped: !1
						})
					}),
					/* @__PURE__ */ (0, U.jsx)(L, {
						args: [
							.808,
							.46675000000000005,
							.004
						],
						radius: .016,
						smoothness: 1,
						position: [
							0,
							zi,
							Vi
						],
						renderOrder: 7,
						children: /* @__PURE__ */ (0, U.jsx)(I, {
							color: "#45beb7",
							emissive: "#278d88",
							emissiveIntensity: .52,
							transparent: !0,
							opacity: .045,
							depthWrite: !1,
							toneMapped: !1
						})
					}),
					/* @__PURE__ */ (0, U.jsx)("group", {
						position: [
							0,
							zi,
							Hi
						],
						children: /* @__PURE__ */ (0, U.jsx)(be, {
							media: e,
							width: Li,
							height: Ri,
							opacity: Fi
						})
					}),
					/* @__PURE__ */ (0, U.jsxs)("group", {
						name: "camera-screen-holographic-reticle",
						position: [
							0,
							zi,
							0
						],
						children: [
							Gi,
							/* @__PURE__ */ (0, U.jsx)(Wi, {
								position: [
									.06,
									.268,
									Ui
								],
								size: [
									.48,
									.0015,
									.001
								]
							}),
							/* @__PURE__ */ (0, U.jsx)(Wi, {
								position: [
									-.08,
									-.268,
									Ui
								],
								size: [
									.55,
									.0015,
									.001
								]
							}),
							/* @__PURE__ */ (0, U.jsx)(Wi, {
								position: [
									-.449,
									0,
									Ui
								],
								size: [
									.0015,
									.28,
									.001
								]
							}),
							/* @__PURE__ */ (0, U.jsx)(Wi, {
								position: [
									.449,
									.035,
									Ui
								],
								size: [
									.0015,
									.21,
									.001
								]
							}),
							Array.from({ length: 7 }, (e, t) => /* @__PURE__ */ (0, U.jsx)(Wi, {
								position: [
									-.415,
									-.09 + t * .025,
									Ui
								],
								size: [
									t % 3 == 0 ? .014 : .007,
									.0015,
									.001
								]
							}, t)),
							[
								.025,
								.012,
								.006
							].map((e, t) => /* @__PURE__ */ (0, U.jsx)(Wi, {
								position: [
									-.3 + t * .035,
									-.249,
									Ui
								],
								size: [
									e,
									.003,
									.001
								]
							}, t))
						]
					}),
					/* @__PURE__ */ (0, U.jsxs)("mesh", {
						position: [
							-.19,
							.563,
							Ui
						],
						renderOrder: 12,
						children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
							.16,
							.003,
							.002
						] }), /* @__PURE__ */ (0, U.jsx)(I, {
							color: "#b6eee8",
							emissive: "#47bdb5",
							emissiveIntensity: .9,
							transparent: !0,
							opacity: .58,
							depthWrite: !1,
							toneMapped: !1
						})]
					}),
					/* @__PURE__ */ (0, U.jsxs)("mesh", {
						position: [
							.425,
							.063,
							Ui + .003
						],
						renderOrder: 13,
						children: [/* @__PURE__ */ (0, U.jsx)("ringGeometry", { args: [
							.012,
							.014,
							32
						] }), /* @__PURE__ */ (0, U.jsx)(I, {
							color: c,
							emissive: c,
							emissiveIntensity: a || o ? 1.2 : .38,
							transparent: !0,
							opacity: .92,
							depthWrite: !1,
							toneMapped: !1
						})]
					})
				]
			})]
		})
	});
}
//#endregion
//#region packages/catalog/src/device/presets/media/connected-frame.tsx
var qi = [
	.72,
	.52,
	.045
], Ji = qi[0], Yi = qi[1], Xi = qi[2], Zi = .045, Qi = Ji - Zi * 2, $i = Yi - Zi * 2, ea = Xi / 2 - .001, ta = (e) => e === "oak" ? {
	vertical: "#b9824f",
	horizontal: "#c99863",
	outline: "#5f402a",
	inset: "#332d27"
} : {
	vertical: "#252a29",
	horizontal: "#303534",
	outline: "#111514",
	inset: "#171b1a"
};
function na({ finish: e, liveMedia: t, visualState: n }) {
	let i = ta(e), a = (e, t, n, a) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
		name: e,
		position: t,
		castShadow: !0,
		receiveShadow: !0,
		children: [
			/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: n }),
			/* @__PURE__ */ (0, U.jsx)(I, { color: a }),
			/* @__PURE__ */ (0, U.jsx)(r, {
				color: i.outline,
				thickness: .0025,
				screenspace: !1
			})
		]
	});
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: `catalog-connected-frame-${e}`,
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "connected-frame-screen-inset",
				position: [
					0,
					Yi / 2,
					.005
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					Qi,
					$i,
					.012
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: i.inset })]
			}),
			/* @__PURE__ */ (0, U.jsx)("group", {
				position: [
					0,
					Yi / 2,
					.012
				],
				children: /* @__PURE__ */ (0, U.jsx)(be, {
					media: t,
					width: Qi - .012,
					height: $i - .012,
					opacity: .9
				})
			}),
			a("connected-frame-left-rail", [
				-Ji / 2 + Zi / 2,
				Yi / 2,
				ea
			], [
				Zi,
				Yi,
				Xi
			], i.vertical),
			a("connected-frame-right-rail", [
				Ji / 2 - Zi / 2,
				Yi / 2,
				ea
			], [
				Zi,
				Yi,
				Xi
			], i.vertical),
			a("connected-frame-top-rail", [
				0,
				Yi - Zi / 2,
				ea
			], [
				Qi,
				Zi,
				Xi
			], i.horizontal),
			a("connected-frame-bottom-rail", [
				0,
				Zi / 2,
				ea
			], [
				Qi,
				Zi,
				Xi
			], i.horizontal),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: n,
				position: [
					Ji / 2 - .0225,
					.0225,
					.037
				],
				scale: .22
			})
		]
	});
}
function ra(e) {
	return /* @__PURE__ */ (0, U.jsx)(na, {
		...e,
		finish: "oak"
	});
}
function ia(e) {
	return /* @__PURE__ */ (0, U.jsx)(na, {
		...e,
		finish: "black"
	});
}
//#endregion
//#region packages/catalog/src/device/presets/media/speaker.tsx
function aa({ visualState: e, reducedMotion: t }) {
	let n = e === "connected-active", i = (0, R.useRef)(null);
	return F(({ clock: e, invalidate: r }) => {
		if (!i.current) return;
		let a = n && !t ? 1 + .16 * Math.sin(e.elapsedTime * 6) : 1;
		i.current.scale.set(a, 1, 1), n && !t && r();
	}), /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-speaker",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.18,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.115,
						.125,
						.36,
						18
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: W.charcoal }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#39433f",
						thickness: .006
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsx)("group", {
				ref: i,
				name: "speaker-sound-bands",
				position: [
					0,
					0,
					.124
				],
				children: [
					.08,
					.14,
					.2,
					.26
				].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
					position: [
						0,
						e,
						0
					],
					children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.125,
						.009,
						.004
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: n ? W.coral : W.bodyDark })]
				}, e))
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.365,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.08,
					.105,
					.015,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: W.body })]
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					0,
					.375,
					0
				],
				scale: .85
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/media/television-comic-patch.tsx
function q({ points: e, color: t, layer: n }) {
	let r = (0, R.useMemo)(() => {
		let t = new j();
		return e.forEach(([e, n], r) => r ? t.lineTo(e, n) : t.moveTo(e, n)), t.closePath(), t;
	}, [e]);
	return /* @__PURE__ */ (0, U.jsx)(Ye, {
		layer: n,
		color: t,
		emissive: t,
		emissiveIntensity: .85,
		children: /* @__PURE__ */ (0, U.jsx)("shapeGeometry", { args: [r] })
	});
}
//#endregion
//#region packages/catalog/src/device/presets/media/television-superman.tsx
var oa = "#15253d";
function sa({ reducedMotion: e }) {
	let t = (0, R.useRef)(null), n = (0, R.useRef)(0);
	return F((r, i) => {
		e || !t.current || (n.current += Math.min(i, .05), t.current.scale.y = 1 + Math.sin(n.current * 3) * .09);
	}), /* @__PURE__ */ (0, U.jsxs)("group", { children: [
		/* @__PURE__ */ (0, U.jsxs)("group", {
			ref: t,
			children: [
				/* @__PURE__ */ (0, U.jsx)(q, {
					layer: 10,
					color: oa,
					points: [
						[.16, .13],
						[-.18, .2],
						[-.48, .08],
						[-.7, .11],
						[-.58, -.06],
						[-.7, -.15],
						[-.39, -.18],
						[.12, -.01]
					]
				}),
				/* @__PURE__ */ (0, U.jsx)(q, {
					layer: 11,
					color: "#e44440",
					points: [
						[.12, .11],
						[-.18, .17],
						[-.47, .05],
						[-.64, .08],
						[-.53, -.06],
						[-.63, -.12],
						[-.4, -.14],
						[.1, .01]
					]
				}),
				/* @__PURE__ */ (0, U.jsx)(q, {
					layer: 12,
					color: "#a8273d",
					points: [
						[-.1, .1],
						[-.52, -.1],
						[-.37, -.1],
						[.1, .07]
					]
				})
			]
		}),
		/* @__PURE__ */ (0, U.jsx)(q, {
			layer: 13,
			color: oa,
			points: [
				[-.15, .02],
				[-.47, -.02],
				[-.62, -.1],
				[-.58, -.16],
				[-.4, -.1],
				[-.13, -.1],
				[.1, -.04],
				[.22, .09],
				[.1, .16],
				[-.13, .11]
			]
		}),
		/* @__PURE__ */ (0, U.jsx)(q, {
			layer: 14,
			color: "#237aca",
			points: [
				[-.13, .01],
				[-.45, -.04],
				[-.49, -.09],
				[-.4, -.07],
				[-.13, -.07],
				[.08, -.01],
				[.17, .08],
				[.09, .13],
				[-.11, .09]
			]
		}),
		/* @__PURE__ */ (0, U.jsx)(q, {
			layer: 15,
			color: "#ed4943",
			points: [
				[-.48, -.035],
				[-.6, -.105],
				[-.57, -.13],
				[-.43, -.085]
			]
		}),
		/* @__PURE__ */ (0, U.jsx)(q, {
			layer: 16,
			color: oa,
			points: [
				[-.12, .01],
				[-.4, .03],
				[-.58, 0],
				[-.61, -.055],
				[-.39, -.04],
				[-.1, -.07]
			]
		}),
		/* @__PURE__ */ (0, U.jsx)(q, {
			layer: 17,
			color: "#329ce0",
			points: [
				[-.13, -.01],
				[-.4, .01],
				[-.55, -.015],
				[-.56, -.033],
				[-.39, -.02],
				[-.11, -.05]
			]
		}),
		/* @__PURE__ */ (0, U.jsx)(q, {
			layer: 18,
			color: "#ef5144",
			points: [
				[-.45, .01],
				[-.58, -.005],
				[-.59, -.04],
				[-.44, -.025]
			]
		}),
		/* @__PURE__ */ (0, U.jsx)(q, {
			layer: 19,
			color: "#e83c40",
			points: [
				[-.17, .08],
				[-.09, .09],
				[-.09, -.05],
				[-.17, -.06]
			]
		}),
		/* @__PURE__ */ (0, U.jsx)(q, {
			layer: 20,
			color: "#ffd367",
			points: [
				[-.1, .09],
				[-.07, .1],
				[-.05, -.03],
				[-.08, -.05]
			]
		}),
		/* @__PURE__ */ (0, U.jsx)(q, {
			layer: 21,
			color: oa,
			points: [
				[.06, .11],
				[.2, .17],
				[.43, .14],
				[.49, .17],
				[.55, .14],
				[.55, .09],
				[.44, .075],
				[.19, .09],
				[.1, .04]
			]
		}),
		/* @__PURE__ */ (0, U.jsx)(q, {
			layer: 22,
			color: "#3c9ee0",
			points: [
				[.09, .11],
				[.2, .145],
				[.42, .12],
				[.42, .095],
				[.19, .11],
				[.11, .065]
			]
		}),
		/* @__PURE__ */ (0, U.jsx)(q, {
			layer: 23,
			color: "#ffca95",
			points: [
				[.44, .12],
				[.49, .145],
				[.53, .13],
				[.53, .105],
				[.45, .095]
			]
		}),
		/* @__PURE__ */ (0, U.jsx)(q, {
			layer: 24,
			color: oa,
			points: [
				[.15, .11],
				[.14, .22],
				[.19, .27],
				[.28, .26],
				[.31, .22],
				[.31, .19],
				[.34, .16],
				[.3, .145],
				[.29, .11],
				[.22, .095]
			]
		}),
		/* @__PURE__ */ (0, U.jsx)(q, {
			layer: 25,
			color: "#ffca95",
			points: [
				[.18, .17],
				[.19, .225],
				[.27, .23],
				[.29, .205],
				[.29, .18],
				[.315, .16],
				[.28, .155],
				[.27, .125],
				[.22, .12]
			]
		}),
		/* @__PURE__ */ (0, U.jsx)(q, {
			layer: 26,
			color: oa,
			points: [
				[.16, .18],
				[.15, .23],
				[.2, .255],
				[.28, .245],
				[.285, .215],
				[.25, .23],
				[.23, .2],
				[.215, .215],
				[.19, .215],
				[.19, .17]
			]
		}),
		/* @__PURE__ */ (0, U.jsx)(q, {
			layer: 27,
			color: oa,
			points: [
				[.265, .192],
				[.285, .188],
				[.28, .18],
				[.265, .183]
			]
		}),
		/* @__PURE__ */ (0, U.jsx)(q, {
			layer: 28,
			color: oa,
			points: [
				[0, .105],
				[.07, .12],
				[.115, .065],
				[.055, -.005],
				[-.015, .06]
			]
		}),
		/* @__PURE__ */ (0, U.jsx)(q, {
			layer: 29,
			color: "#ffd35d",
			points: [
				[.01, .09],
				[.065, .102],
				[.095, .064],
				[.053, .015],
				[.005, .06]
			]
		}),
		/* @__PURE__ */ (0, U.jsx)(q, {
			layer: 30,
			color: "#dc343c",
			points: [
				[.072, .087],
				[.027, .082],
				[.02, .06],
				[.061, .05],
				[.055, .038],
				[.035, .047],
				[.046, .027],
				[.073, .049],
				[.067, .064],
				[.035, .068],
				[.04, .075],
				[.082, .071]
			]
		})
	] });
}
//#endregion
//#region packages/catalog/src/device/presets/media/television-picture.tsx
var ca = [
	[-.15, -.025],
	[-.14, .015],
	[-.1, .03],
	[-.075, .075],
	[-.02, .085],
	[.025, .055],
	[.06, .06],
	[.1, .025],
	[.14, .015],
	[.16, -.025]
];
function la({ width: e, height: t, reducedMotion: n }) {
	let r = (0, R.useRef)(null), i = (0, R.useRef)(null), a = (0, R.useRef)(0);
	return F(({ invalidate: e }, t) => {
		n || !r.current || !i.current || (a.current += Math.min(t, .05), r.current.position.y = Math.sin(a.current * 1.4) * .025, r.current.rotation.z = Math.sin(a.current * .7) * .025, i.current.children.forEach((e, t) => {
			let n = (a.current * .045 + t * .37) % 1;
			e.position.x = .31 - n * .62, e.scale.setScalar(Math.min(1, n * 12, (1 - n) * 12));
		}), e());
	}), /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "television-picture",
		scale: [
			e,
			t,
			1
		],
		children: [
			/* @__PURE__ */ (0, U.jsx)(q, {
				layer: 1,
				color: "#428fbd",
				points: [
					[-.5, -.5],
					[.5, -.5],
					[.5, .5],
					[-.5, .5]
				]
			}),
			/* @__PURE__ */ (0, U.jsx)(q, {
				layer: 2,
				color: "#63b6d3",
				points: [
					[-.5, -.5],
					[.5, -.5],
					[.5, .03],
					[-.5, -.25]
				]
			}),
			/* @__PURE__ */ (0, U.jsx)("group", {
				ref: i,
				children: [
					-.33,
					.29,
					.36
				].map((e, t) => /* @__PURE__ */ (0, U.jsx)("group", {
					position: [
						(t - 1) * .27,
						e,
						0
					],
					children: /* @__PURE__ */ (0, U.jsx)(q, {
						layer: 3 + t,
						color: t === 2 ? "#bce1e6" : "#fff5da",
						points: ca
					})
				}, e))
			}),
			/* @__PURE__ */ (0, U.jsx)("group", {
				ref: r,
				name: "television-picture-motion",
				children: /* @__PURE__ */ (0, U.jsx)("group", {
					scale: [
						t / e,
						1,
						1
					],
					position: [
						.035,
						-.025,
						0
					],
					children: /* @__PURE__ */ (0, U.jsx)(sa, { reducedMotion: n })
				})
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/media/television.tsx
var ua = "#28312f", da = "#596360", fa = (e) => {
	switch (e) {
		case "connected-active": return {
			screen: "#6f9aa3",
			reflection: "#a9c1c3"
		};
		case "connected-inactive": return {
			screen: "#1f2b29",
			reflection: "#50615d"
		};
		case "unavailable": return {
			screen: "#806852",
			reflection: "#b49a7c"
		};
		case "disconnected": return {
			screen: "#465450",
			reflection: "#7b8b86"
		};
	}
};
function pa() {
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: "catalog-television-rounded-shell",
		position: [
			0,
			.515,
			0
		],
		children: /* @__PURE__ */ (0, U.jsx)(L, {
			args: [
				1.54,
				.84,
				.06
			],
			radius: .025,
			smoothness: 2,
			castShadow: !0,
			receiveShadow: !0,
			children: /* @__PURE__ */ (0, U.jsx)(I, { color: ua })
		})
	});
}
function ma({ visualState: e, liveMedia: t, reducedMotion: n }) {
	let i = fa(e);
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-television",
		children: [
			/* @__PURE__ */ (0, U.jsx)(pa, {}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.515,
					.036
				],
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					1.405,
					.675,
					.014
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: i.screen })]
			}),
			t ? /* @__PURE__ */ (0, U.jsx)("group", {
				position: [
					0,
					.515,
					.047
				],
				children: /* @__PURE__ */ (0, U.jsx)(be, {
					media: t,
					width: 1.405,
					height: .675,
					opacity: 1
				})
			}) : e === "connected-active" ? /* @__PURE__ */ (0, U.jsx)("group", {
				position: [
					0,
					.515,
					.047
				],
				children: /* @__PURE__ */ (0, U.jsx)(la, {
					width: 1.405,
					height: .675,
					reducedMotion: n
				})
			}) : /* @__PURE__ */ (0, U.jsxs)("group", { children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					-.38,
					.69,
					.047
				],
				rotation: [
					0,
					0,
					-.1
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.42,
					.018,
					.006
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: i.reflection,
					transparent: !0,
					opacity: .34
				})]
			}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					-.23,
					.62,
					.048
				],
				rotation: [
					0,
					0,
					-.1
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.21,
					.009,
					.006
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: i.reflection,
					transparent: !0,
					opacity: .22
				})]
			})] }),
			[-.54, .54].map((e) => /* @__PURE__ */ (0, U.jsxs)("group", {
				position: [
					e,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
					position: [
						0,
						.075,
						0
					],
					rotation: [
						0,
						0,
						e < 0 ? -.25 : .25
					],
					castShadow: !0,
					children: [/* @__PURE__ */ (0, U.jsx)("capsuleGeometry", { args: [
						.024,
						.1,
						5,
						12
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: da })]
				}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
					position: [
						0,
						.014,
						.018
					],
					castShadow: !0,
					children: [
						/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
							.25,
							.028,
							.15
						] }),
						/* @__PURE__ */ (0, U.jsx)(I, { color: da }),
						/* @__PURE__ */ (0, U.jsx)(r, {
							color: "#303937",
							thickness: .004,
							screenspace: !1
						})
					]
				})]
			}, e)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.119,
					.046
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.25,
					.025,
					.014
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#222928" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					.65,
					.122,
					.057
				],
				scale: .7
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/media/wall-television.tsx
var ha = [
	2.4,
	1.36,
	.07
];
function ga({ visualState: e, reducedMotion: t }) {
	let n = e === "connected-active";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-wall-television",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "wall-television-shell",
				position: [
					0,
					.68,
					.032
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						2.4,
						1.36,
						.064
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#252b30" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#394247",
						thickness: .0015,
						screenspace: !1
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "wall-television-screen",
				position: [
					0,
					.68,
					.067
				],
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					2.352,
					1.312,
					.003
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: n ? "#457a88" : "#1c3039" })]
			}),
			n && /* @__PURE__ */ (0, U.jsx)("group", {
				position: [
					0,
					.68,
					.069
				],
				children: /* @__PURE__ */ (0, U.jsx)(la, {
					width: 2.352,
					height: 1.312,
					reducedMotion: t
				})
			}),
			!n && /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "wall-television-reflection",
				position: [
					-.42,
					.96,
					.0692
				],
				rotation: [
					0,
					0,
					-.12
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.62,
					.018,
					.001
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: "#8db6bf",
					transparent: !0,
					opacity: .24
				})]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/media/compact-wall-television.tsx
var _a = [
	1.58,
	.9,
	.07
];
function va(e) {
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: "compact-wall-television",
		scale: [
			1.58 / 2.4,
			.9 / 1.36,
			1
		],
		children: /* @__PURE__ */ (0, U.jsx)(ga, { ...e })
	});
}
//#endregion
//#region packages/catalog/src/device/presets/security/video-doorbell.tsx
function ya({ visualState: e }) {
	let t = e === "connected-active";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-video-doorbell",
		children: [
			/* @__PURE__ */ (0, U.jsxs)(L, {
				args: [
					.05,
					.135,
					.03
				],
				radius: .01,
				smoothness: 2,
				position: [
					0,
					.0675,
					.015
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)(I, { color: "#4d5855" }), /* @__PURE__ */ (0, U.jsx)(r, {
					color: "#252d2b",
					thickness: .002
				})]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.098,
					.0315
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.014,
						.014,
						.007,
						18
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, {
						color: "#182322",
						emissive: "#3f7775",
						emissiveIntensity: t ? .35 : .05
					}),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#111716",
						thickness: .0015
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.038,
					.0315
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.012,
					.012,
					.007,
					18
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: t ? W.coral : W.bodyDark })]
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					.017,
					.118,
					.029
				],
				scale: .14
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/security/indoor-security-camera.tsx
function ba({ visualState: e }) {
	let t = e === "connected-active";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-indoor-security-camera",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.0125,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.05,
						.05,
						.025,
						20
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: W.bodyDark }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: W.charcoal,
						thickness: .003
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.055,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.018,
					.025,
					.06,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#88918d" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.11,
					0
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
						.05,
						20,
						12
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: W.body }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: W.charcoal,
						thickness: .003
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.112,
					.047
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.022,
					.022,
					.006,
					20
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: "#182322",
					emissive: "#477b78",
					emissiveIntensity: t ? .4 : .04
				})]
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					.026,
					.085,
					.043
				],
				scale: .18
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/security/smart-lock.tsx
function xa({ visualState: e }) {
	let t = e === "connected-active";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-smart-lock",
		children: [
			/* @__PURE__ */ (0, U.jsxs)(L, {
				args: [
					.07,
					.18,
					.035
				],
				radius: .012,
				smoothness: 2,
				position: [
					0,
					.09,
					.0175
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)(I, { color: W.body }), /* @__PURE__ */ (0, U.jsx)(r, {
					color: W.charcoal,
					thickness: .0025
				})]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.142,
					.0375
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.034,
					.022,
					.005
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: t ? W.green : "#42504c",
					emissive: W.green,
					emissiveIntensity: t ? .3 : .04
				})]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "smart-lock-thumbturn",
				position: [
					0,
					.065,
					.05
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.025,
					.025,
					.016,
					18
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#69736f" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.065,
					.059
				],
				rotation: [
					0,
					0,
					t ? Math.PI / 2 : 0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.012,
					.044,
					.002
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#394541" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					.021,
					.16,
					.037
				],
				scale: .12
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/security/alarm-keypad.tsx
var Sa = Array.from({ length: 12 }, (e, t) => ({
	x: (t % 3 - 1) * .044,
	y: .134 - Math.floor(t / 3) * .034
}));
function Ca({ visualState: e }) {
	let t = e === "connected-active";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-alarm-keypad",
		children: [
			/* @__PURE__ */ (0, U.jsxs)(L, {
				args: [
					.18,
					.25,
					.028
				],
				radius: .018,
				smoothness: 2,
				position: [
					0,
					.125,
					.014
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)(I, { color: W.body }), /* @__PURE__ */ (0, U.jsx)(r, {
					color: W.charcoal,
					thickness: .003
				})]
			}),
			/* @__PURE__ */ (0, U.jsx)(L, {
				args: [
					.13,
					.05,
					.005
				],
				radius: .006,
				smoothness: 2,
				position: [
					0,
					.205,
					.0305
				],
				children: /* @__PURE__ */ (0, U.jsx)(I, {
					color: "#33423f",
					emissive: t ? W.green : "#52635e",
					emissiveIntensity: t ? .32 : .06
				})
			}),
			Sa.map(({ x: e, y: t }, n) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: `alarm-key-${n + 1}`,
				position: [
					e,
					t,
					.0315
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.028,
					.021,
					.007
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: n >= 9 ? "#9daba5" : W.bodyDark })]
			}, n)),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					.065,
					.226,
					.031
				],
				scale: .1
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/security/siren.tsx
function wa({ visualState: e }) {
	let t = e === "connected-active";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-siren",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.08,
					.02
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.08,
						.08,
						.04,
						24
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: W.body }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: W.charcoal,
						thickness: .003
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.08,
					.053
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.055,
					.075,
					.026,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: t ? "#d95f4b" : "#bdc5bf" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.08,
					.0675
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.028,
					.028,
					.005,
					18
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: t ? W.coral : W.charcoal,
					emissive: W.coral,
					emissiveIntensity: t ? .42 : .03
				})]
			}),
			[-.038, .038].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.08,
					.068
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.012,
					.05,
					.004
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#69746f" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					0,
					.08,
					.066
				],
				scale: .1
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/sensors/leak-sensor.tsx
function Ta({ visualState: e }) {
	let t = e === "connected-active";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-leak-sensor",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.028,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.09,
						.095,
						.056,
						16
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: W.body }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: W.charcoal,
						thickness: .005
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.06,
					0
				],
				scale: [
					.56,
					.85,
					.56
				],
				children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
					.052,
					12,
					7
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: t ? W.coral : W.paleBlue })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.105,
					0
				],
				rotation: [
					0,
					0,
					Math.PI / 4
				],
				children: [/* @__PURE__ */ (0, U.jsx)("coneGeometry", { args: [
					.027,
					.06,
					10
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: t ? W.coral : W.paleBlue })]
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					.062,
					.055,
					0
				],
				scale: .55
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/sensors/motion-sensor.tsx
function Ea({ visualState: e }) {
	let t = e === "connected-active";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-motion-sensor",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.065,
					.018
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.065,
						.065,
						.035,
						18
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: W.body }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: W.charcoal,
						thickness: .005
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.068,
					.047
				],
				scale: [
					1,
					.72,
					.5
				],
				children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
					.048,
					14,
					8
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: t ? W.paleBlue : W.bodyDark })]
			}),
			t && /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.068,
					.074
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
					.058,
					.005,
					5,
					14
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: W.coral })]
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					.04,
					.108,
					.045
				],
				scale: .5
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/sensors/opening-contact.tsx
function Da({ visualState: e }) {
	let t = e === "connected-active";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-opening-contact",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					-.042,
					.055,
					.015
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.055,
						.11,
						.03
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: W.body }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: W.charcoal,
						thickness: .004
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					t ? .055 : .028,
					.055,
					.012
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.026,
						.082,
						.024
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: t ? W.coral : W.bodyDark }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: W.charcoal,
						thickness: .003
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					-.042,
					.092,
					.034
				],
				scale: .55
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/sensors/thermometer.tsx
var Oa = (e) => {
	let t = Number(e?.state);
	return Number.isFinite(t) ? t : 20;
};
function ka({ state: e, visualState: t }) {
	let n = ((Math.max(-10, Math.min(40, Oa(e))) + 10) / 50 - .5) * Math.PI * 1.3;
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-thermometer",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.08,
					.022
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.075,
						.075,
						.035,
						18
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: W.body }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: W.charcoal,
						thickness: .005
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.08,
					.043
				],
				rotation: [
					0,
					0,
					-n
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.008,
					.052,
					.008
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: W.coral })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.08,
					.048
				],
				children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
					.013,
					10,
					6
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: W.charcoal })]
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: t,
				position: [
					.045,
					.035,
					.046
				],
				scale: .55
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/sensors/smoke-alarm.tsx
function Aa({ visualState: e }) {
	let t = e === "connected-active";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-smoke-alarm",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.0175,
					0
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.06,
						.06,
						.035,
						24
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: W.body }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: W.charcoal,
						thickness: .0025
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.039,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.052,
					.056,
					.008,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#d5d5cf" })]
			}),
			[
				-.03,
				-.01,
				.01,
				.03
			].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.0445,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.006,
					.001,
					.055
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#78807c" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.038,
					.045
				],
				children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
					.006,
					10,
					6
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: t ? W.coral : W.green,
					emissive: t ? W.coral : W.green,
					emissiveIntensity: .35
				})]
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					.036,
					.038,
					0
				],
				scale: .12
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/sensors/carbon-monoxide-alarm.tsx
function ja({ visualState: e }) {
	let t = e === "connected-active";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-carbon-monoxide-alarm",
		children: [
			/* @__PURE__ */ (0, U.jsxs)(L, {
				args: [
					.11,
					.11,
					.03
				],
				radius: .015,
				smoothness: 2,
				position: [
					0,
					.055,
					.015
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)(I, { color: W.body }), /* @__PURE__ */ (0, U.jsx)(r, {
					color: W.charcoal,
					thickness: .0025
				})]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.068,
					.0325
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.052,
					.026,
					.005
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: "#34413f",
					emissive: t ? W.coral : "#6fa096",
					emissiveIntensity: .22
				})]
			}),
			[
				-.028,
				-.014,
				0,
				.014,
				.028
			].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.034,
					.033
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.006,
					.022,
					.004
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#909792" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					.039,
					.092,
					.028
				],
				scale: .15
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/sensors/humidity-sensor.tsx
function Ma({ state: e, visualState: t }) {
	let n = typeof e?.attributes.native_value == "number" ? e.attributes.native_value : Number(e?.state ?? 50), i = Number.isFinite(n) && n >= 65;
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-humidity-sensor",
		children: [
			/* @__PURE__ */ (0, U.jsxs)(L, {
				args: [
					.085,
					.085,
					.025
				],
				radius: .012,
				smoothness: 2,
				position: [
					0,
					.0425,
					.0125
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)(I, { color: W.body }), /* @__PURE__ */ (0, U.jsx)(r, {
					color: W.charcoal,
					thickness: .002
				})]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.05,
					.0275
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.05,
					.026,
					.005
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: "#354441",
					emissive: i ? W.coral : W.paleBlue,
					emissiveIntensity: .2
				})]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					-.023,
					.018,
					.025
				],
				rotation: [
					0,
					0,
					Math.PI
				],
				children: [/* @__PURE__ */ (0, U.jsx)("coneGeometry", { args: [
					.005,
					.016,
					10
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: i ? W.coral : W.paleBlue })]
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: t,
				position: [
					.027,
					.018,
					.025
				],
				scale: .13
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/sensors/air-quality-monitor.tsx
function Na({ state: e, visualState: t }) {
	let n = Number(e?.state), i = Number.isFinite(n) && n > 1e3;
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-air-quality-monitor",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsxs)(L, {
				args: [
					.1,
					.16,
					.056
				],
				radius: .014,
				smoothness: 2,
				position: [
					0,
					.08,
					-.002
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)(I, { color: W.body }), /* @__PURE__ */ (0, U.jsx)(r, {
					color: W.charcoal,
					thickness: .0025
				})]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.105,
					.029
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.072,
					.052,
					.002
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: "#31413f",
					emissive: i ? W.coral : W.green,
					emissiveIntensity: .24
				})]
			}),
			[
				-.026,
				-.013,
				0,
				.013,
				.026
			].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.045,
					.029
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.006,
					.034,
					.002
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#8d9691" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: t,
				position: [
					.035,
					.138,
					.023
				],
				scale: .16
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/sensors/energy-monitor.tsx
function Pa({ visualState: e }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-energy-monitor",
		children: [
			/* @__PURE__ */ (0, U.jsxs)(L, {
				args: [
					.2,
					.3,
					.08
				],
				radius: .018,
				smoothness: 2,
				position: [
					0,
					.15,
					.04
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)(I, { color: "#d8ddd7" }), /* @__PURE__ */ (0, U.jsx)(r, {
					color: W.charcoal,
					thickness: .004
				})]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.205,
					.085
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.13,
					.07,
					.01
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: "#293936",
					emissive: "#4f9a8e",
					emissiveIntensity: .2
				})]
			}),
			[
				-.045,
				0,
				.045
			].map((e, t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.09,
					.085
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.028,
					.07 + t * .018,
					.01
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: t === 1 ? W.coral : W.paleBlue })]
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					.068,
					.265,
					.075
				],
				scale: .28
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/sensors/weather-station.tsx
function Fa({ state: e, visualState: t }) {
	let n = Number(e?.state), r = t === "connected-active" && Number.isFinite(n);
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-weather-station",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.18,
					.12,
					.034
				],
				position: [
					0,
					.06,
					-.003
				],
				color: "#d9ded9",
				radius: .012,
				outlineColor: "#52605b"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "weather-station-display",
				size: [
					.148,
					.09,
					.002
				],
				position: [
					0,
					.064,
					.017
				],
				color: "#344644",
				radius: .005,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "weather-station-sun",
				position: [
					-.043,
					.082,
					.019
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.015,
					.015,
					.002,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: W.amber,
					emissive: r ? W.amber : "#7a806f",
					emissiveIntensity: r ? .3 : .04
				})]
			}),
			[
				.035,
				.05,
				.065
			].map((e, t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.044 + t * .008,
					.019
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.009,
					.026 + t * .012,
					.002
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: r ? W.paleBlue : W.muted })]
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: t,
				position: [
					.07,
					.101,
					.014
				],
				scale: .16
			})
		]
	});
}
//#endregion
//#region node_modules/three/examples/jsm/geometries/RoundedBoxGeometry.js
var Ia = new M();
function La(e, t, n, r, i, a) {
	let o = 2 * Math.PI * i / 4, s = Math.max(a - 2 * i, 0), c = Math.PI / 4;
	Ia.copy(t), Ia[r] = 0, Ia.normalize();
	let l = .5 * o / (o + s), u = 1 - Ia.angleTo(e) / c;
	return Math.sign(Ia[n]) === 1 ? u * l : s / (o + s) + l + l * (1 - u);
}
var Ra = class e extends le {
	constructor(e = 1, t = 1, n = 1, r = 2, i = .1) {
		let a = r * 2 + 1;
		if (i = Math.min(e / 2, t / 2, n / 2, i), super(1, 1, 1, a, a, a), this.type = "RoundedBoxGeometry", this.parameters = {
			width: e,
			height: t,
			depth: n,
			segments: r,
			radius: i
		}, a === 1) return;
		let o = this.toNonIndexed();
		this.index = null, this.attributes.position = o.attributes.position, this.attributes.normal = o.attributes.normal, this.attributes.uv = o.attributes.uv;
		let s = new M(), c = new M(), l = new M(e, t, n).divideScalar(2).subScalar(i), u = this.attributes.position.array, d = this.attributes.normal.array, f = this.attributes.uv.array, p = u.length / 6, m = new M(), h = .5 / a;
		for (let r = 0, a = 0; r < u.length; r += 3, a += 2) switch (s.fromArray(u, r), c.copy(s), c.x -= Math.sign(c.x) * h, c.y -= Math.sign(c.y) * h, c.z -= Math.sign(c.z) * h, c.normalize(), u[r + 0] = l.x * Math.sign(s.x) + c.x * i, u[r + 1] = l.y * Math.sign(s.y) + c.y * i, u[r + 2] = l.z * Math.sign(s.z) + c.z * i, d[r + 0] = c.x, d[r + 1] = c.y, d[r + 2] = c.z, Math.floor(r / p)) {
			case 0:
				m.set(1, 0, 0), f[a + 0] = La(m, c, "z", "y", i, n), f[a + 1] = 1 - La(m, c, "y", "z", i, t);
				break;
			case 1:
				m.set(-1, 0, 0), f[a + 0] = 1 - La(m, c, "z", "y", i, n), f[a + 1] = 1 - La(m, c, "y", "z", i, t);
				break;
			case 2:
				m.set(0, 1, 0), f[a + 0] = 1 - La(m, c, "x", "z", i, e), f[a + 1] = La(m, c, "z", "x", i, n);
				break;
			case 3:
				m.set(0, -1, 0), f[a + 0] = 1 - La(m, c, "x", "z", i, e), f[a + 1] = 1 - La(m, c, "z", "x", i, n);
				break;
			case 4:
				m.set(0, 0, 1), f[a + 0] = 1 - La(m, c, "x", "y", i, e), f[a + 1] = 1 - La(m, c, "y", "x", i, t);
				break;
			case 5: m.set(0, 0, -1), f[a + 0] = La(m, c, "x", "y", i, e), f[a + 1] = 1 - La(m, c, "y", "x", i, t);
		}
	}
	static fromJSON(t) {
		return new e(t.width, t.height, t.depth, t.segments, t.radius);
	}
}, J = {
	rubber: "#283036",
	trim: "#344048",
	glass: "#496874",
	glint: "#88a6ad",
	alloy: "#c4cbd0",
	recess: "#202b32",
	lens: "#f5edd2",
	red: "#b95245"
};
function Y(e, t, n, r = .018) {
	return {
		geometry: (r > 0 ? new Ra(...e, 1, Math.min(r, ...e.map((e) => e / 2))) : new le(...e)).translate(...t),
		color: n
	};
}
function X(e, t = J.trim, n = .005) {
	return {
		geometry: new We(new k(e.map((e) => new M(...e)), !1, "catmullrom", 0), Math.max(6, e.length * 5), n, 5, !1),
		color: t
	};
}
function za(e, t) {
	let n = e.flat(), r = [];
	for (let t = 1; t < e.length - 1; t++) r.push(0, t, t + 1);
	let i = [...r, ...r.flatMap((e, t, n) => t % 3 == 0 ? [
		n[t],
		n[t + 2],
		n[t + 1]
	] : [])], a = new Ze();
	return a.setAttribute("position", new je(i.flatMap((e) => n.slice(e * 3, e * 3 + 3)), 3)), a.computeVertexNormals(), {
		geometry: a,
		color: t
	};
}
function Ba(e, t, n, r = .025, a) {
	let o = new i(e, {
		depth: t * 2,
		bevelEnabled: r > 0,
		bevelThickness: r,
		bevelSize: r,
		bevelSegments: 3,
		curveSegments: 16,
		steps: 1
	}), s = o.attributes.position;
	for (let e = 0; e < s.count; e++) {
		let n = s.getX(e), r = s.getY(e), i = s.getZ(e) - t;
		a && (i *= 1 - Math.max(0, r - a.belt) * a.slope / t), s.setXYZ(e, i, r, n);
	}
	for (let e = 0; e < s.count; e += 3) {
		let t = new M().fromBufferAttribute(s, e + 1);
		s.setXYZ(e + 1, s.getX(e + 2), s.getY(e + 2), s.getZ(e + 2)), s.setXYZ(e + 2, t.x, t.y, t.z);
	}
	return o.deleteAttribute("normal"), o.computeVertexNormals(), {
		geometry: o,
		color: n
	};
}
function Va({ halfLength: e, halfWidth: t, sill: n, shoulder: r, axles: i, tireRadius: a, color: o }) {
	let s = a + .055, c = [], l = [], u = new Set(Array.from({ length: 73 }, (t, n) => -e + n * e * 2 / 72));
	for (let e of i) {
		for (let t = 0; t <= 32; t++) u.add(e + Math.cos(t * Math.PI / 32) * s);
		u.add(e - s - .001), u.add(e + s + .001);
	}
	let d = [...r].reverse(), f = (e) => {
		for (let t = 1; t < d.length; t++) if (e <= d[t][0]) {
			let [n, r] = [d[t - 1], d[t]];
			return n[1] + (r[1] - n[1]) * (e - n[0]) / (r[0] - n[0]);
		}
		return d[d.length - 1][1];
	}, p = [...u].sort((e, t) => e - t);
	for (let r of p) {
		let o = n;
		for (let e of i) Math.abs(r - e) <= s + 1e-8 && (o = Math.max(o, a + Math.sqrt(Math.max(0, s * s - (r - e) ** 2))));
		let l = Math.max(f(r), o + .07), u = Math.max(0, (Math.abs(r) - (e - .48)) / .48), d = (t + .025) * (1 - .13 * Math.min(1, u * u)), p = Math.min(.035, (l - o) / 3), m = [
			[-d + p, o],
			[d - p, o],
			[d - p * .3, o + p * .3],
			[d, o + p],
			[d, l - p],
			[d - p * .3, l - p * .3],
			[d - p, l],
			[d * .5, l + .012],
			[0, l + .018],
			[-d * .5, l + .012],
			[-d + p, l],
			[-d + p * .3, l - p * .3],
			[-d, l - p],
			[-d, o + p],
			[-d + p * .3, o + p * .3],
			[-d + p, o]
		];
		for (let [e, t] of m) c.push(e, t, r);
	}
	for (let e = 0; e < p.length - 1; e++) for (let t = 0; t < 15; t++) {
		let n = e * 16 + t, r = n + 1;
		l.push(n, r, r + 16, n, r + 16, n + 16);
	}
	for (let e = 1; e < 14; e++) {
		l.push(0, e + 1, e);
		let t = (p.length - 1) * 16;
		l.push(t, t + e, t + e + 1);
	}
	let m = new Ze();
	return m.setAttribute("position", new je(c, 3)), m.setIndex(l), m.computeVertexNormals(), {
		geometry: m,
		color: o
	};
}
function Ha(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let { geometry: t, color: r } of e) {
		let e = t.index ? t.toNonIndexed() : t.clone();
		e.deleteAttribute("uv");
		let i = n.get(r) ?? [];
		i.push(e), n.set(r, i), t.dispose();
	}
	return [...n].map(([e, n], r) => {
		let i = N(n);
		return n.forEach((e) => e.dispose()), {
			geometry: i,
			color: e,
			name: `${t}-finish-${r}`
		};
	});
}
function Ua({ batches: e }) {
	return /* @__PURE__ */ (0, U.jsx)("group", {
		dispose: null,
		children: e.map(({ name: e, geometry: t, color: n }) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: e,
			geometry: t,
			castShadow: !0,
			receiveShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)(I, { color: n }), ![
				...Object.values(J),
				"#77848b",
				"#536069"
			].includes(n) && /* @__PURE__ */ (0, U.jsx)(r, {
				color: "#28353b",
				thickness: .0015,
				screenspace: !1
			})]
		}, e))
	});
}
//#endregion
//#region packages/catalog/src/device/presets/vehicles/vehicle-cabin.ts
function Wa(e) {
	let { rearBase: t, rearTop: n, frontTop: r, frontBase: i, belt: a, roof: o, halfWidth: s, split: c, color: l } = e, u = new j();
	u.moveTo(t, a), u.lineTo(i, a), u.lineTo(r + .08, o - .1), u.quadraticCurveTo(r + .03, o - .025, r - .04, o - .025), u.lineTo(n + .06, o - .025), u.quadraticCurveTo(n, o - .025, n - .05, o - .1), u.closePath();
	let d = [Ba(u, s, l, .025, {
		belt: a,
		slope: .22
	})], f = (e) => (s + .025) * (1 - (e - a) * .22 / s) + .003, p = o - .115, m = a + .075;
	for (let e of [-1, 1]) {
		let o = (t, n, r = 0) => [
			e * (f(n) + r),
			n,
			t
		], s = [[
			[t + .14, m],
			[n + .085, p],
			[c - .045, p],
			[c - .045, m]
		], [
			[c + .045, m],
			[c + .045, p],
			[r - .04, p],
			[i - .16, m]
		]];
		for (let e of s) {
			let t = e.map(([e, t]) => o(e, t));
			d.push(za(t, J.glass)), d.push(X([...t, t[0]], J.trim, .01));
			let [n, r, i] = [
				e[0],
				e[1],
				e[2]
			];
			d.push(za([
				o(n[0] * .12 + r[0] * .88, n[1] * .12 + r[1] * .88, .002),
				o(r[0] * .88 + i[0] * .12, r[1], .002),
				o(r[0] * .65 + i[0] * .35, r[1], .002),
				o(n[0] * .3 + r[0] * .7, n[1] * .3 + r[1] * .7, .002)
			], J.glint));
		}
		d.push(X([
			o(t + .1, a + .035),
			o(c, a + .035),
			o(i - .12, a + .035)
		], J.alloy, .006));
	}
	for (let e of [!1, !0]) {
		let s = e ? i : t, c = e ? r + .08 : n - .05, l = a + .1, u = o - .14, p = (t) => s + (c - s) * (t - a) / (o - .1 - a) + (e ? .058 : -.058), m = [
			[
				-f(l) + .06,
				l,
				p(l)
			],
			[
				f(l) - .06,
				l,
				p(l)
			],
			[
				f(u) - .05,
				u,
				p(u)
			],
			[
				-f(u) + .05,
				u,
				p(u)
			]
		];
		if (d.push(za(m, J.glass), X([...m, m[0]], J.trim, .012)), e) for (let e of [-1, 1]) d.push(X([[
			e * .48,
			l + .012,
			p(l) + .013
		], [
			e * .13,
			l + .045,
			p(l + .045) + .013
		]], J.recess, .008));
	}
	return e.glassRoof && d.push(za([
		[
			-s * .75,
			o + 3e-4,
			n + .12
		],
		[
			s * .75,
			o + 3e-4,
			n + .12
		],
		[
			s * .75,
			o + 3e-4,
			r - .12
		],
		[
			-s * .75,
			o + 3e-4,
			r - .12
		]
	], J.glass)), d;
}
//#endregion
//#region packages/catalog/src/device/presets/vehicles/vehicle-trim.ts
function Ga({ halfWidth: e, mirrorWidth: t, belt: n, frontDoor: r, rearDoor: i, rearEdge: a, axles: o, tireRadius: s, color: c, rugged: l = !1 }) {
	let u = [];
	for (let d of [-1, 1]) {
		let f = d * (e + .028);
		for (let e of [
			r,
			i,
			a
		]) u.push(X([
			[
				f,
				n - .025,
				e
			],
			[
				f,
				n - .2,
				e
			],
			[
				f,
				.4,
				e - .04
			]
		], J.trim, .004));
		u.push(X([
			[
				f,
				n - .12,
				a
			],
			[
				f,
				n - .14,
				i
			],
			[
				f,
				n - .12,
				r
			]
		], c, .013));
		for (let e of [i + .15, a + .16]) u.push(Y([
			.017,
			.045,
			.19
		], [
			f,
			n - .085,
			e
		], J.trim, .009)), u.push(Y([
			.025,
			.021,
			.15
		], [
			f + d * .008,
			n - .083,
			e
		], l ? J.alloy : c, .008));
		let p = r - .1, m = n + .1;
		u.push(X([[
			d * (e - .06),
			m - .045,
			p
		], [
			d * (t / 2 - .11),
			m,
			p
		]], J.trim, .022)), u.push(Y([
			.19,
			l ? .18 : .115,
			.23
		], [
			d * (t / 2 - .095),
			m + .02,
			p
		], c, .045)), u.push(Y([
			.142,
			l ? .135 : .078,
			.012
		], [
			d * (t / 2 - .095),
			m + .02,
			p - .114
		], J.glint, .016));
		for (let e of o) {
			let t = s + .067, n = Array.from({ length: 19 }, (n, r) => {
				let i = Math.PI * r / 18;
				return [
					f,
					s + Math.sin(i) * t,
					e + Math.cos(i) * t
				];
			});
			u.push(X(n, l ? J.trim : c, l ? .03 : .013));
		}
		if (l) {
			u.push(Y([
				.13,
				.065,
				1.48
			], [
				d * (e + .065),
				.34,
				.22
			], J.trim, .025));
			for (let t of [-.38, .76]) u.push(Y([
				.17,
				.08,
				.065
			], [
				d * (e - .01),
				.38,
				t
			], J.trim, .008));
		} else u.push(Y([
			.045,
			.085,
			o[1] - o[0] - .8
		], [
			f,
			.29,
			(o[0] + o[1]) / 2
		], J.trim, .016));
	}
	return u;
}
//#endregion
//#region packages/catalog/src/device/presets/vehicles/vehicle-wheels.tsx
function Ka({ radius: e, track: t, axles: n, spokes: r = 10, rugged: i = !1 }) {
	let a = [], o = i ? .27 : .23;
	for (let s of [-1, 1]) for (let c of n) {
		let n = s * t / 2, l = (t, r, i, o, l = 32) => {
			a.push({
				geometry: new Me(t, t, r, l).rotateZ(Math.PI / 2).translate(n + s * i, e, c),
				color: o
			});
		}, u = new Ie(e * .77, e * .23, 10, 32);
		u.scale(1, 1, o / (e * .46)), u.rotateY(Math.PI / 2).translate(n, e, c), a.push({
			geometry: u,
			color: J.rubber
		}), l(e * .73, .024, o / 2 - .025, J.trim), l(e * .56, .018, o / 2 - .015, "#77848b"), l(e * .19, .035, o / 2 + .008, J.alloy, 16);
		let d = new Ie(e * .65, .013, 6, 32).rotateY(Math.PI / 2).translate(n + s * o / 2, e, c);
		a.push({
			geometry: d,
			color: J.alloy
		});
		for (let t = 0; t < r; t++) {
			let l = t * Math.PI * 2 / r, u = Y([
				.022,
				e * .48,
				i ? .035 : .026
			], [
				0,
				e * .39,
				0
			], J.alloy, .008);
			u.geometry.rotateX(l).translate(n + s * o / 2, e, c), a.push(u);
		}
		for (let t = 0; t < 5; t++) {
			let r = t * Math.PI * 2 / 5;
			a.push({
				geometry: new Me(.013, .013, .012, 6).rotateZ(Math.PI / 2).translate(n + s * (o / 2 + .025), e + Math.cos(r) * e * .12, c + Math.sin(r) * e * .12),
				color: J.trim
			});
		}
		for (let t = 0; t < 32; t++) for (let r of [-1, 1]) {
			let s = (t + (r + 1) * .2) * Math.PI / 16, l = Y([
				o * .35,
				.012,
				i ? .047 : .025
			], [
				r * o * .22,
				e - .011,
				0
			], J.trim, 0);
			l.geometry.rotateX(s).translate(n, e, c), a.push(l);
		}
	}
	return Ha(a, "vehicle-wheels");
}
//#endregion
//#region packages/catalog/src/device/presets/vehicles/compact-car.tsx
var qa = [
	1.94,
	1.5,
	4
], Ja = "#5c91b0", Ya = [-1.26, 1.25], Xa = Ha([
	Va({
		halfLength: 1.925,
		halfWidth: .835,
		sill: .27,
		axles: Ya,
		tireRadius: .3,
		color: Ja,
		shoulder: [
			[1.925, .73],
			[1.72, .86],
			[1.02, .97],
			[-1.57, .97],
			[-1.925, .84]
		]
	}),
	...Wa({
		rearBase: -1.68,
		rearTop: -1.14,
		frontTop: .32,
		frontBase: 1.02,
		belt: .94,
		roof: 1.5,
		halfWidth: .755,
		split: -.35,
		color: Ja
	}),
	...Ga({
		halfWidth: .835,
		mirrorWidth: 1.94,
		belt: .94,
		frontDoor: .83,
		rearDoor: -.25,
		rearEdge: -.83,
		axles: Ya,
		tireRadius: .3,
		color: Ja
	}),
	Y([
		1.55,
		.19,
		.15
	], [
		0,
		.44,
		1.91
	], Ja, .065),
	Y([
		1.25,
		.12,
		.022
	], [
		0,
		.44,
		1.983
	], J.recess, .04),
	Y([
		.75,
		.095,
		.055
	], [
		0,
		.7,
		1.94
	], J.trim, .03),
	Y([
		.42,
		.105,
		.012
	], [
		0,
		.5,
		1.994
	], J.alloy, .008),
	Y([
		1.53,
		.17,
		.15
	], [
		0,
		.43,
		-1.91
	], Ja, .06),
	Y([
		1.28,
		.07,
		.04
	], [
		0,
		.36,
		-1.98
	], J.trim, .015),
	Y([
		.43,
		.115,
		.02
	], [
		0,
		.66,
		-1.95
	], J.alloy, .008),
	Y([
		.25,
		.032,
		.025
	], [
		0,
		.83,
		-1.949
	], J.trim, .01),
	X([
		[
			-.69,
			.89,
			-1.84
		],
		[
			-.62,
			.96,
			-1.61
		],
		[
			0,
			.96,
			-1.64
		],
		[
			.62,
			.96,
			-1.61
		],
		[
			.69,
			.89,
			-1.84
		]
	], J.trim, .005),
	X([
		[
			-.68,
			.969,
			1.01
		],
		[
			-.64,
			.924,
			1.3
		],
		[
			-.59,
			.86,
			1.7
		]
	], Ja, .01),
	X([
		[
			.68,
			.969,
			1.01
		],
		[
			.64,
			.924,
			1.3
		],
		[
			.59,
			.86,
			1.7
		]
	], Ja, .01),
	Y([
		1.28,
		.035,
		.14
	], [
		0,
		1.451,
		-1.13
	], Ja, .016),
	...[-1, 1].flatMap((e) => [
		Y([
			.41,
			.15,
			.072
		], [
			e * .57,
			.727,
			1.892
		], J.trim, .05),
		Y([
			.35,
			.098,
			.031
		], [
			e * .57,
			.734,
			1.936
		], J.lens, .035),
		Y([
			.255,
			.014,
			.013
		], [
			e * .58,
			.765,
			1.957
		], J.alloy, .006),
		Y([
			.13,
			.066,
			.024
		], [
			e * .6,
			.43,
			1.984
		], J.lens, .02),
		Y([
			.18,
			.28,
			.059
		], [
			e * .64,
			.776,
			-1.92
		], J.red, .035),
		Y([
			.125,
			.04,
			.015
		], [
			e * .64,
			.73,
			-1.957
		], J.lens, .008)
	])
], "compact-body"), Za = Ka({
	radius: .3,
	track: 1.55,
	axles: Ya,
	spokes: 8
});
function Qa({ visualState: e }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-compact-car",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(Ua, { batches: Xa }),
			/* @__PURE__ */ (0, U.jsx)(Ua, { batches: Za }),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					0,
					.7,
					1.973
				],
				scale: .4
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/vehicles/electric-sedan.tsx
var $a = [
	2.08,
	1.45,
	4.7
], eo = "#e1e5e0", to = [-1.48, 1.43], no = Ha([
	Va({
		halfLength: 2.275,
		halfWidth: .895,
		sill: .255,
		axles: to,
		tireRadius: .33,
		color: eo,
		shoulder: [
			[2.275, .7],
			[1.96, .81],
			[1.28, .925],
			[-1.54, .925],
			[-2.275, .81]
		]
	}),
	...Wa({
		rearBase: -1.78,
		rearTop: -.76,
		frontTop: .36,
		frontBase: 1.25,
		belt: .905,
		roof: 1.45,
		halfWidth: .795,
		split: -.27,
		color: eo,
		glassRoof: !0
	}),
	...Ga({
		halfWidth: .895,
		mirrorWidth: 2.08,
		belt: .905,
		frontDoor: .97,
		rearDoor: -.18,
		rearEdge: -1.02,
		axles: to,
		tireRadius: .33,
		color: eo
	}),
	Y([
		1.72,
		.2,
		.15
	], [
		0,
		.45,
		2.26
	], eo, .07),
	Y([
		1.29,
		.058,
		.024
	], [
		0,
		.365,
		2.334
	], J.recess, .022),
	Y([
		.42,
		.11,
		.015
	], [
		0,
		.48,
		2.3425
	], J.alloy, .008),
	Y([
		1.71,
		.19,
		.15
	], [
		0,
		.45,
		-2.26
	], eo, .075),
	Y([
		1.36,
		.078,
		.025
	], [
		0,
		.367,
		-2.3375
	], J.trim, .02),
	Y([
		.43,
		.11,
		.018
	], [
		0,
		.66,
		-2.3
	], J.alloy, .008),
	X([
		[
			-.71,
			.835,
			-2.23
		],
		[
			-.42,
			.847,
			-2.26
		],
		[
			.42,
			.847,
			-2.26
		],
		[
			.71,
			.835,
			-2.23
		]
	], eo, .018),
	X([
		[
			-.7,
			.905,
			1.22
		],
		[
			-.65,
			.86,
			1.63
		],
		[
			-.56,
			.795,
			2.04
		]
	], eo, .012),
	X([
		[
			.7,
			.905,
			1.22
		],
		[
			.65,
			.86,
			1.63
		],
		[
			.56,
			.795,
			2.04
		]
	], eo, .012),
	...[-1, 1].flatMap((e) => [
		Y([
			.45,
			.082,
			.09
		], [
			e * .62,
			.762,
			2.18
		], J.trim, .035),
		Y([
			.39,
			.044,
			.026
		], [
			e * .62,
			.771,
			2.236
		], J.lens, .018),
		X([
			[
				e * .79,
				.775,
				2.247
			],
			[
				e * .6,
				.798,
				2.249
			],
			[
				e * .44,
				.785,
				2.249
			]
		], J.lens, .01),
		Y([
			.055,
			.13,
			.025
		], [
			e * .72,
			.48,
			2.317
		], J.trim, .015),
		Y([
			.51,
			.085,
			.041
		], [
			e * .56,
			.785,
			-2.279
		], J.red, .025),
		Y([
			.42,
			.018,
			.013
		], [
			e * .56,
			.805,
			-2.306
		], "#dc8171", .006)
	]),
	X([
		[
			-.923,
			.81,
			-1.91
		],
		[
			-.923,
			.85,
			-1.83
		],
		[
			-.923,
			.85,
			-1.69
		],
		[
			-.923,
			.77,
			-1.69
		],
		[
			-.923,
			.77,
			-1.83
		],
		[
			-.923,
			.81,
			-1.91
		]
	], J.trim, .004)
], "electric-body"), ro = Ka({
	radius: .33,
	track: 1.69,
	axles: to,
	spokes: 10
});
function io({ visualState: e }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-electric-sedan",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(Ua, { batches: no }),
			/* @__PURE__ */ (0, U.jsx)(Ua, { batches: ro }),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					0,
					.63,
					2.296
				],
				scale: .4
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/vehicles/pickup-bed.ts
function ao(e) {
	return [
		Y([
			1.74,
			.07,
			1.86
		], [
			0,
			.73,
			-1.6
		], J.trim, .015),
		Y([
			1.77,
			.4,
			.085
		], [
			0,
			.94,
			-.69
		], e, .02),
		Y([
			1.93,
			.43,
			.12
		], [
			0,
			.955,
			-2.51
		], e, .025),
		Y([
			1.77,
			.31,
			.018
		], [
			0,
			.94,
			-2.435
		], J.trim, .012),
		Y([
			.31,
			.06,
			.032
		], [
			0,
			1.066,
			-2.58
		], J.trim, .015),
		X([
			[
				-.91,
				1.13,
				-2.58
			],
			[
				-.91,
				.78,
				-2.58
			],
			[
				.91,
				.78,
				-2.58
			],
			[
				.91,
				1.13,
				-2.58
			]
		], J.trim, .005),
		...[-1, 1].flatMap((t) => [
			Y([
				.125,
				.43,
				1.93
			], [
				t * .9025,
				.955,
				-1.6
			], e, .025),
			Y([
				.145,
				.032,
				1.94
			], [
				t * .9025,
				1.178,
				-1.6
			], J.trim, .014),
			Y([
				.27,
				.19,
				.84
			], [
				t * .75,
				.79,
				-1.75
			], J.trim, .075),
			Y([
				.055,
				.08,
				.055
			], [
				t * .8,
				1.04,
				-.86
			], J.alloy, .01),
			Y([
				.055,
				.08,
				.055
			], [
				t * .8,
				1.04,
				-2.28
			], J.alloy, .01)
		]),
		...Array.from({ length: 9 }, (e, t) => Y([
			.025,
			.017,
			1.68
		], [
			(t - 4) * .15,
			.773,
			-1.6
		], "#536069", .007))
	];
}
//#endregion
//#region packages/catalog/src/device/presets/vehicles/pickup-truck.tsx
var oo = [
	2.24,
	1.86,
	5.4
], so = "#687d79", co = [-1.75, 1.75], lo = Ha([
	Va({
		halfLength: 2.58,
		halfWidth: .955,
		sill: .4,
		axles: co,
		tireRadius: .4,
		color: so,
		shoulder: [
			[2.58, 1.01],
			[2.22, 1.14],
			[1.44, 1.18],
			[-.62, 1.14],
			[-.68, .72],
			[-2.58, .72]
		]
	}),
	...Wa({
		rearBase: -.62,
		rearTop: -.48,
		frontTop: .73,
		frontBase: 1.42,
		belt: 1.13,
		roof: 1.86,
		halfWidth: .84,
		split: .08,
		color: so
	}),
	...Ga({
		halfWidth: .955,
		mirrorWidth: 2.24,
		belt: 1.13,
		frontDoor: 1.15,
		rearDoor: .15,
		rearEdge: -.55,
		axles: co,
		tireRadius: .4,
		color: so,
		rugged: !0
	}),
	...ao(so),
	Y([
		1.98,
		.22,
		.2
	], [
		0,
		.53,
		2.586
	], J.trim, .055),
	Y([
		1.49,
		.3,
		.06
	], [
		0,
		.91,
		2.585
	], J.alloy, .055),
	Y([
		1.33,
		.23,
		.026
	], [
		0,
		.91,
		2.626
	], J.recess, .036),
	...Array.from({ length: 7 }, (e, t) => Y([
		.045,
		.185,
		.018
	], [
		(t - 3) * .175,
		.91,
		2.649
	], J.alloy, .012)),
	Y([
		.44,
		.11,
		.018
	], [
		0,
		.54,
		2.691
	], J.alloy, .008),
	Y([
		.79,
		.052,
		.044
	], [
		0,
		.4,
		2.616
	], J.alloy, .018),
	Y([
		1.98,
		.18,
		.2
	], [
		0,
		.51,
		-2.586
	], J.trim, .045),
	Y([
		.42,
		.11,
		.018
	], [
		0,
		.53,
		-2.691
	], J.alloy, .008),
	X([
		[
			-.76,
			1.16,
			1.46
		],
		[
			-.69,
			1.15,
			1.98
		],
		[
			-.65,
			1.07,
			2.38
		]
	], so, .018),
	X([
		[
			.76,
			1.16,
			1.46
		],
		[
			.69,
			1.15,
			1.98
		],
		[
			.65,
			1.07,
			2.38
		]
	], so, .018),
	...[-1, 1].flatMap((e) => [
		Y([
			.34,
			.25,
			.09
		], [
			e * .78,
			.975,
			2.55
		], J.trim, .035),
		Y([
			.25,
			.16,
			.038
		], [
			e * .78,
			.99,
			2.608
		], J.lens, .025),
		Y([
			.18,
			.032,
			.026
		], [
			e * .78,
			.915,
			2.634
		], "#d9a566", .008),
		Y([
			.14,
			.07,
			.03
		], [
			e * .76,
			.54,
			2.685
		], J.lens, .016),
		Y([
			.16,
			.3,
			.06
		], [
			e * .87,
			.975,
			-2.564
		], J.red, .025),
		Y([
			.115,
			.047,
			.02
		], [
			e * .87,
			.94,
			-2.604
		], J.lens, .01)
	])
], "pickup-body"), uo = Ka({
	radius: .4,
	track: 1.84,
	axles: co,
	spokes: 6,
	rugged: !0
});
function fo({ visualState: e }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-pickup-truck",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(Ua, { batches: lo }),
			/* @__PURE__ */ (0, U.jsx)(Ua, { batches: uo }),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					0,
					.91,
					2.653
				],
				scale: .45
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/irrigation/sprinkler-spray.tsx
function po({ reducedMotion: e }) {
	let t = (0, R.useRef)(null), n = (0, R.useRef)(0);
	return F(({ invalidate: r }, i) => {
		e || !t.current || (n.current += Math.min(i, .05), t.current.children.forEach((e, t) => {
			let r = (t % 8 / 8 + n.current * .8) % 1, i = Math.floor(t / 8) * Math.PI / 4 + n.current * .25, a = .025 + r * 1.15;
			e.position.set(Math.cos(i) * a, .055 + .9 * r - 1.08 * r * r, Math.sin(i) * a);
		}), r());
	}), /* @__PURE__ */ (0, U.jsx)("group", {
		ref: t,
		name: "sprinkler-water",
		userData: { decorative: !0 },
		children: Array.from({ length: 64 }, (e, t) => {
			let n = t % 8 / 8, r = Math.floor(t / 8) * Math.PI / 4, i = .025 + n * 1.15;
			return /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					Math.cos(r) * i,
					.055 + .9 * n - 1.08 * n * n,
					Math.sin(r) * i
				],
				raycast: () => {},
				children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
					.012,
					6,
					4
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: "#79cfee",
					transparent: !0,
					opacity: .7
				})]
			}, t);
		})
	});
}
//#endregion
//#region packages/catalog/src/device/presets/irrigation/pop-up-sprinkler.tsx
function mo({ visualState: e, reducedMotion: t }) {
	let n = e === "connected-active", i = (0, R.useRef)(null), a = (0, R.useRef)([
		1,
		n ? 1 : .08,
		1
	]), o = Se((e) => e.invalidate);
	return (0, R.useEffect)(() => {
		o();
	}, [
		n,
		t,
		o
	]), F((e, r) => {
		if (!i.current) return;
		let a = n ? 1 : .08;
		i.current.scale.y = t ? a : oe.damp(i.current.scale.y, a, 9, Math.min(r, .05)), Math.abs(i.current.scale.y - a) > 1e-4 && o();
	}), /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-pop-up-sprinkler",
		children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
			position: [
				0,
				.015,
				0
			],
			children: [
				/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.07,
					.065,
					.03,
					24
				] }),
				/* @__PURE__ */ (0, U.jsx)(I, { color: "#34433e" }),
				/* @__PURE__ */ (0, U.jsx)(r, {
					color: "#24312c",
					thickness: .001,
					screenspace: !1
				})
			]
		}), /* @__PURE__ */ (0, U.jsxs)("group", {
			ref: i,
			name: "sprinkler-riser",
			position: [
				0,
				.03,
				0
			],
			scale: a.current,
			children: [
				/* @__PURE__ */ (0, U.jsxs)("mesh", {
					position: [
						0,
						.065,
						0
					],
					children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.018,
						.022,
						.13,
						16
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#899b99" })]
				}),
				/* @__PURE__ */ (0, U.jsxs)("mesh", {
					position: [
						0,
						.14,
						0
					],
					children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.03,
						.03,
						.02,
						20
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#283c32" })]
				}),
				/* @__PURE__ */ (0, U.jsxs)("mesh", {
					position: [
						0,
						.151,
						0
					],
					children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.016,
						.016,
						.002,
						16
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: n ? "#73c398" : "#60876b" })]
				}),
				n && /* @__PURE__ */ (0, U.jsx)("group", {
					position: [
						0,
						.1,
						0
					],
					children: /* @__PURE__ */ (0, U.jsx)(po, { reducedMotion: t ?? !1 })
				})
			]
		})]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/irrigation/rotating-sprinkler.tsx
function ho({ visualState: e, reducedMotion: t }) {
	let n = (0, R.useRef)(null), r = e === "connected-active";
	return F(({ invalidate: e }, i) => {
		!r || t || !n.current || (n.current.rotation.y += Math.min(i, .05) * 1.5, e());
	}), /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-rotating-sprinkler",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.02,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.14,
					.14,
					.04,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#466b51" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.075,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.022,
					.03,
					.11,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#687d77" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("group", {
				ref: n,
				name: "sprinkler-rotor",
				position: [
					0,
					.14,
					0
				],
				children: [[
					0,
					1,
					2
				].map((e) => /* @__PURE__ */ (0, U.jsxs)("group", {
					rotation: [
						0,
						e * Math.PI * 2 / 3,
						0
					],
					children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
						position: [
							.052,
							0,
							0
						],
						rotation: [
							0,
							0,
							Math.PI / 2
						],
						children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
							.012,
							.012,
							.12,
							12
						] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#a4b4ae" })]
					}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
						position: [
							.105,
							.012,
							0
						],
						children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
							.015,
							.012,
							.024,
							12
						] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#334f3d" })]
					})]
				}, e)), r && /* @__PURE__ */ (0, U.jsx)(po, { reducedMotion: t ?? !1 })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/irrigation/smart-hose-timer.tsx
function go({ visualState: e }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-smart-hose-timer",
		children: [
			/* @__PURE__ */ (0, U.jsx)(L, {
				args: [
					.09,
					.12,
					.055
				],
				radius: .012,
				smoothness: 2,
				position: [
					0,
					.1,
					.0275
				],
				children: /* @__PURE__ */ (0, U.jsx)(I, { color: "#d6dfd1" })
			}),
			[.02, .18].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					e,
					.0275
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.018,
					.018,
					.04,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#8e9e91" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.115,
					.057
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.054,
					.028,
					.004
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: e === "connected-active" ? "#6dbed3" : "#445953" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.075,
					.058
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.013,
					.013,
					.01,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#526e50" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					.028,
					.145,
					.057
				],
				scale: .1
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/irrigation/soil-moisture-sensor.tsx
function _o({ visualState: e }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-soil-moisture-sensor",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.025,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.012,
					.01,
					.05,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#697b6e" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(L, {
				args: [
					.065,
					.075,
					.04
				],
				radius: .012,
				smoothness: 2,
				position: [
					0,
					.0825,
					0
				],
				children: /* @__PURE__ */ (0, U.jsx)(I, { color: "#bdcbb5" })
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.084,
					.022
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.035,
					.021,
					.004
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#3c6054" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: e,
				position: [
					0,
					.107,
					.022
				],
				scale: .1
			})
		]
	});
}
var vo = P({
	defaultRoomType: "bathroom",
	component: pr,
	label: "Heated towel rail",
	variants: [
		{
			id: "default",
			label: "Standard"
		},
		{
			id: "dense-white",
			label: "Dense white"
		},
		{
			id: "dense-black",
			label: "Dense black"
		}
	],
	category: "Climate",
	defaultSize: [
		.6,
		1.2,
		.12
	],
	resizePolicy: {
		kind: "axes",
		axes: ["width", "height"]
	},
	preferredPlacement: "wall",
	supportedDomains: ["climate", "switch"],
	mountKind: "wall",
	bounds: {
		min: [
			-.3,
			0,
			0
		],
		max: [
			.3,
			1.2,
			.12
		]
	},
	outlineContact: !0,
	interaction: {
		target: "device-dashboard",
		tapTolerancePixels: 10
	},
	complexity: {
		visibleMeshes: 16,
		triangles: 2e3
	}
}), yo = P({
	component: Si,
	label: "Under-cabinet LED strip",
	category: "Lighting",
	defaultRoomType: "kitchen",
	defaultSize: xi,
	bounds: {
		min: [
			-.5,
			0,
			-.0125
		],
		max: [
			.5,
			.015,
			.0125
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: ["width"]
	},
	preferredPlacement: "absolute",
	supportedDomains: ["light"],
	mountKind: "surface",
	outlineContact: !1,
	sceneLight: {
		position: [
			0,
			.002,
			0
		],
		color: "#ffd99b",
		maxIntensity: 3,
		distance: 2.5
	},
	interaction: {
		target: "device-dashboard",
		tapTolerancePixels: 10
	},
	complexity: {
		visibleMeshes: 2,
		triangles: 24
	}
}), bo = P({
	component: nr,
	label: "Built-in microwave",
	category: "Appliances",
	defaultRoomType: "kitchen",
	defaultSize: [
		.6,
		.39,
		.35
	],
	resizePolicy: { kind: "fixed" },
	preferredPlacement: "absolute",
	supportedDomains: [
		"switch",
		"sensor",
		"select",
		"number",
		"button"
	],
	mountKind: "surface",
	bounds: {
		min: [
			-.3,
			0,
			-.175
		],
		max: [
			.3,
			.39,
			.175
		]
	},
	outlineContact: !0,
	interaction: {
		target: "device-dashboard",
		tapTolerancePixels: 10
	},
	complexity: {
		visibleMeshes: 12,
		triangles: 2400
	}
}), xo = P({
	defaultRoomType: "kitchen",
	component: Yn,
	label: "Microwave",
	category: "Appliances",
	defaultSize: [
		.52,
		.31,
		.4
	],
	resizePolicy: { kind: "fixed" },
	preferredPlacement: "absolute",
	supportedDomains: [
		"switch",
		"sensor",
		"select",
		"number",
		"button"
	],
	mountKind: "surface",
	bounds: {
		min: [
			-.26,
			0,
			-.2
		],
		max: [
			.26,
			.31,
			.2
		]
	},
	outlineContact: !0,
	interaction: {
		target: "device-dashboard",
		tapTolerancePixels: 10
	},
	complexity: {
		visibleMeshes: 12,
		triangles: 2400
	}
}), So = P({
	defaultRoomType: "dining-room",
	component: Ur,
	label: "Terracotta pendant",
	category: "Lighting",
	defaultSize: [
		.66,
		.64,
		.66
	],
	resizePolicy: { kind: "uniform" },
	preferredPlacement: "ceiling",
	supportedDomains: ["light"],
	mountKind: "surface",
	bounds: {
		min: [
			-.33,
			0,
			-.33
		],
		max: [
			.33,
			.64,
			.33
		]
	},
	outlineContact: !1,
	sceneLight: {
		position: [
			0,
			.02,
			0
		],
		color: "#ffd79a",
		maxIntensity: 5,
		distance: 5
	},
	interaction: {
		target: "device-dashboard",
		tapTolerancePixels: 10
	},
	complexity: {
		visibleMeshes: 8,
		triangles: 2200
	}
}), Co = P({
	defaultRoomType: "dining-room",
	component: Ti,
	label: "White dome pendant",
	category: "Lighting",
	defaultSize: [
		.5,
		1,
		.5
	],
	resizePolicy: { kind: "uniform" },
	preferredPlacement: "ceiling",
	supportedDomains: ["light"],
	mountKind: "surface",
	bounds: {
		min: [
			-.25,
			0,
			-.25
		],
		max: [
			.25,
			1,
			.25
		]
	},
	outlineContact: !1,
	sceneLight: {
		position: [
			0,
			.04,
			0
		],
		color: "#ffd79a",
		maxIntensity: 5,
		distance: 5
	},
	interaction: {
		target: "device-dashboard",
		tapTolerancePixels: 10
	},
	complexity: {
		visibleMeshes: 7,
		triangles: 2200
	}
}), wo = P({
	component: bi,
	label: "Rattan bell pendant",
	category: "Lighting",
	defaultRoomType: "dining-room",
	defaultSize: _i,
	bounds: {
		min: [
			-.25,
			0,
			-.25
		],
		max: [
			.25,
			1.2,
			.25
		]
	},
	resizePolicy: { kind: "uniform" },
	preferredPlacement: "ceiling",
	supportedDomains: ["light"],
	mountKind: "surface",
	outlineContact: !0,
	sceneLight: {
		position: mi,
		color: "#ffe1a3",
		maxIntensity: .45,
		distance: 3
	},
	interaction: {
		target: "device-dashboard",
		tapTolerancePixels: 10
	},
	complexity: {
		visibleMeshes: 10,
		triangles: 4e4
	}
}), To = {
	target: "device-dashboard",
	tapTolerancePixels: 10
}, Eo = P({
	component: va,
	label: "Compact wall television",
	category: "Media",
	defaultRoomType: "living-room",
	defaultSize: _a,
	bounds: {
		min: [
			-.79,
			0,
			0
		],
		max: [
			.79,
			.9,
			.07
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: ["width", "height"]
	},
	preferredPlacement: "wall",
	supportedDomains: ["media_player"],
	mountKind: "wall",
	outlineContact: !0,
	interaction: To,
	complexity: {
		visibleMeshes: 7,
		triangles: 160
	}
}), Do = P({
	defaultRoomType: "living-room",
	component: ga,
	label: "Wall television · 110 inch",
	category: "Media",
	defaultSize: ha,
	resizePolicy: { kind: "fixed" },
	preferredPlacement: "wall",
	supportedDomains: ["media_player"],
	mountKind: "wall",
	bounds: {
		min: [
			-1.2,
			0,
			0
		],
		max: [
			1.2,
			1.36,
			.07
		]
	},
	outlineContact: !0,
	interaction: To,
	complexity: {
		visibleMeshes: 7,
		triangles: 160
	}
}), Z = {
	target: "device-dashboard",
	tapTolerancePixels: 10
}, Oo = ze({
	"indoor-ac": P({
		defaultRoomType: "bedroom",
		component: lr,
		label: "Indoor AC",
		category: "Climate",
		defaultSize: [
			.86,
			.28,
			.206
		],
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "wall",
		supportedDomains: ["climate"],
		mountKind: "wall",
		bounds: {
			min: [
				-.43,
				0,
				-.001
			],
			max: [
				.43,
				.28,
				.205
			]
		},
		outlineContact: !0,
		interaction: Z,
		complexity: {
			visibleMeshes: 12,
			triangles: 3600
		}
	}),
	"washing-machine": P({
		defaultRoomType: "laundry",
		component: Ln,
		label: "Washing machine",
		category: "Appliances",
		defaultSize: [
			.632,
			.865,
			.63
		],
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "absolute",
		supportedDomains: [
			"switch",
			"sensor",
			"select",
			"number",
			"button"
		],
		mountKind: "surface",
		bounds: {
			min: [
				-.316,
				0,
				-.295
			],
			max: [
				.316,
				.865,
				.335
			]
		},
		outlineContact: !1,
		interaction: Z,
		complexity: {
			visibleMeshes: 11,
			triangles: 936
		}
	}),
	"tumble-dryer": P({
		defaultRoomType: "laundry",
		component: Rn,
		label: "Tumble dryer",
		category: "Appliances",
		defaultSize: [
			.6,
			.85,
			.65
		],
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "absolute",
		supportedDomains: [
			"switch",
			"sensor",
			"select",
			"number",
			"button"
		],
		mountKind: "surface",
		bounds: {
			min: [
				-.3,
				0,
				-.325
			],
			max: [
				.3,
				.85,
				.325
			]
		},
		outlineContact: !0,
		interaction: Z,
		complexity: {
			visibleMeshes: 16,
			triangles: 2836
		}
	}),
	dishwasher: P({
		variants: Bn,
		defaultRoomType: "kitchen",
		component: Un,
		label: "Dishwasher",
		category: "Appliances",
		defaultSize: [
			.6,
			.85,
			.65
		],
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "absolute",
		supportedDomains: [
			"switch",
			"sensor",
			"select",
			"number",
			"button"
		],
		mountKind: "surface",
		bounds: {
			min: [
				-.3,
				0,
				-.325
			],
			max: [
				.3,
				.85,
				.325
			]
		},
		outlineContact: !0,
		interaction: Z,
		complexity: {
			visibleMeshes: 16,
			triangles: 3600
		}
	}),
	oven: P({
		defaultRoomType: "kitchen",
		component: Wn,
		label: "Oven",
		category: "Appliances",
		defaultSize: [
			.6,
			.6,
			.62
		],
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "absolute",
		supportedDomains: [
			"switch",
			"sensor",
			"select",
			"number",
			"button"
		],
		mountKind: "surface",
		bounds: {
			min: [
				-.3,
				0,
				-.31
			],
			max: [
				.3,
				.6,
				.31
			]
		},
		outlineContact: !0,
		interaction: Z,
		complexity: {
			visibleMeshes: 14,
			triangles: 2500
		}
	}),
	"water-heater": P({
		defaultRoomType: "laundry",
		component: Gn,
		label: "Water heater",
		category: "Appliances",
		defaultSize: [
			.572,
			1.456,
			.43
		],
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "wall",
		supportedDomains: [
			"switch",
			"sensor",
			"water_heater"
		],
		supportedDeviceClasses: { sensor: ["temperature"] },
		mountKind: "wall",
		bounds: {
			min: [
				-.286,
				0,
				-.206
			],
			max: [
				.286,
				1.456,
				.224
			]
		},
		outlineContact: !0,
		interaction: Z,
		complexity: {
			visibleMeshes: 13,
			triangles: 1750
		}
	}),
	speaker: P({
		defaultRoomType: "living-room",
		component: aa,
		label: "Speaker",
		category: "Media",
		defaultSize: [
			.26,
			.39,
			.26
		],
		resizePolicy: { kind: "uniform" },
		preferredPlacement: "absolute",
		supportedDomains: ["media_player"],
		mountKind: "surface",
		bounds: {
			min: [
				-.13,
				0,
				-.13
			],
			max: [
				.13,
				.39,
				.13
			]
		},
		outlineContact: !1,
		interaction: Z,
		complexity: {
			visibleMeshes: 9,
			triangles: 1200
		}
	}),
	television: P({
		defaultRoomType: "living-room",
		component: ma,
		label: "Television",
		category: "Media",
		defaultSize: [
			1.58,
			.95,
			.18
		],
		resizePolicy: {
			kind: "axes",
			axes: ["width", "height"]
		},
		preferredPlacement: "absolute",
		supportedDomains: ["camera", "media_player"],
		mountKind: "surface",
		bounds: {
			min: [
				-.79,
				0,
				-.1
			],
			max: [
				.79,
				.95,
				.08
			]
		},
		outlineContact: !1,
		liveMedia: {
			kind: "camera-stream",
			slotRole: "primary"
		},
		interaction: {
			target: "camera-viewer",
			tapTolerancePixels: 10
		},
		complexity: {
			visibleMeshes: 14,
			triangles: 4260
		}
	}),
	"under-cabinet-led-strip": yo,
	"compact-wall-television": Eo,
	"wall-television": Do,
	"camera-screen": P({
		defaultRoomType: "entryway",
		component: Ki,
		label: "Camera screen",
		category: "Media",
		defaultSize: [
			.98,
			.62,
			.061
		],
		resizePolicy: { kind: "uniform" },
		preferredPlacement: "absolute",
		supportedDomains: ["camera"],
		mountKind: "wall",
		bounds: {
			min: [
				-.49,
				0,
				-.001
			],
			max: [
				.49,
				.62,
				.06
			]
		},
		outlineContact: !0,
		liveMedia: {
			kind: "camera-stream",
			slotRole: "primary"
		},
		interaction: {
			target: "camera-viewer",
			tapTolerancePixels: 10
		},
		complexity: {
			visibleMeshes: 15,
			triangles: 4200
		}
	}),
	"connected-frame-oak": P({
		defaultRoomType: "living-room",
		component: ra,
		label: "Connected frame · Oak",
		category: "Media",
		defaultSize: qi,
		resizePolicy: { kind: "uniform" },
		preferredPlacement: "wall",
		supportedDomains: ["camera"],
		mountKind: "wall",
		bounds: {
			min: [
				-.36,
				0,
				-.001
			],
			max: [
				.36,
				.52,
				.044
			]
		},
		outlineContact: !0,
		liveMedia: {
			kind: "camera-stream",
			slotRole: "primary"
		},
		interaction: {
			target: "camera-viewer",
			tapTolerancePixels: 10
		},
		complexity: {
			visibleMeshes: 8,
			triangles: 1e3
		}
	}),
	"connected-frame-black": P({
		defaultRoomType: "living-room",
		component: ia,
		label: "Connected frame · Black",
		category: "Media",
		defaultSize: qi,
		resizePolicy: { kind: "uniform" },
		preferredPlacement: "wall",
		supportedDomains: ["camera"],
		mountKind: "wall",
		bounds: {
			min: [
				-.36,
				0,
				-.001
			],
			max: [
				.36,
				.52,
				.044
			]
		},
		outlineContact: !0,
		liveMedia: {
			kind: "camera-stream",
			slotRole: "primary"
		},
		interaction: {
			target: "camera-viewer",
			tapTolerancePixels: 10
		},
		complexity: {
			visibleMeshes: 8,
			triangles: 1e3
		}
	}),
	"floor-lamp": P({
		defaultRoomType: "living-room",
		component: Rr,
		label: "Floor lamp",
		category: "Lighting",
		defaultSize: [
			.652,
			1.796,
			.652
		],
		resizePolicy: { kind: "uniform" },
		preferredPlacement: "absolute",
		supportedDomains: ["light"],
		mountKind: "surface",
		bounds: {
			min: [
				-.326,
				0,
				-.326
			],
			max: [
				.326,
				1.796,
				.326
			]
		},
		outlineContact: !1,
		sceneLight: {
			position: [
				0,
				1.47,
				0
			],
			color: "#ffdba0",
			maxIntensity: 5,
			distance: 4.5
		},
		interaction: Z,
		complexity: {
			visibleMeshes: 5,
			triangles: 420
		}
	}),
	"rattan-bell-pendant": wo,
	"terracotta-pendant": So,
	"white-dome-pendant": Co,
	"low-garden-lantern": P({
		defaultRoomType: "outdoor",
		component: ci,
		label: "Low garden lantern",
		category: "Lighting",
		defaultSize: si,
		resizePolicy: { kind: "uniform" },
		preferredPlacement: "absolute",
		placementEnvironment: "outdoor",
		supportedDomains: ["light"],
		mountKind: "surface",
		bounds: {
			min: [
				-.12,
				0,
				-.12
			],
			max: [
				.12,
				.35,
				.12
			]
		},
		outlineContact: !1,
		sceneLight: {
			position: [
				0,
				.174,
				0
			],
			color: "#ffd28c",
			maxIntensity: 1.4,
			distance: 2.5
		},
		interaction: Z,
		complexity: {
			visibleMeshes: 14,
			triangles: 700
		}
	}),
	"pergola-string-lights": P({
		component: pi,
		label: "Wrought-iron pergola",
		variants: [{
			id: "string-lights",
			label: "String lights"
		}, {
			id: "plain",
			label: "Plain",
			sceneLight: !1
		}],
		category: "Garden structures",
		defaultRoomType: "outdoor",
		defaultSize: [
			4,
			2.7,
			3
		],
		bounds: {
			min: [
				-2,
				0,
				-1.5
			],
			max: [
				2,
				2.7,
				1.5
			]
		},
		resizePolicy: { kind: "planar" },
		preferredPlacement: "absolute",
		placementEnvironment: "outdoor",
		supportedDomains: ["light"],
		mountKind: "surface",
		outlineContact: !1,
		sceneLight: {
			position: [
				0,
				2.2,
				0
			],
			color: "#ffd28c",
			maxIntensity: 9,
			distance: 5
		},
		interaction: Z,
		complexity: {
			visibleMeshes: 17,
			triangles: 28e3
		}
	}),
	"garden-lantern-pole": P({
		defaultRoomType: "outdoor",
		component: oi,
		label: "Garden lantern pole",
		category: "Lighting",
		defaultSize: ai,
		resizePolicy: { kind: "uniform" },
		preferredPlacement: "absolute",
		placementEnvironment: "outdoor",
		supportedDomains: ["light"],
		mountKind: "surface",
		bounds: {
			min: [
				-.12,
				0,
				-.12
			],
			max: [
				.12,
				.8,
				.12
			]
		},
		outlineContact: !1,
		sceneLight: {
			position: [
				0,
				.624,
				0
			],
			color: "#ffd28c",
			maxIntensity: 1.4,
			distance: 2.5
		},
		interaction: Z,
		complexity: {
			visibleMeshes: 14,
			triangles: 700
		}
	}),
	"table-lamp": P({
		defaultRoomType: "bedroom",
		component: qr,
		label: "Table lamp",
		category: "Lighting",
		defaultSize: Kr,
		resizePolicy: { kind: "uniform" },
		preferredPlacement: "absolute",
		supportedDomains: ["light"],
		mountKind: "surface",
		bounds: {
			min: [
				-.16,
				0,
				-.16
			],
			max: [
				.16,
				.52,
				.16
			]
		},
		outlineContact: !1,
		sceneLight: {
			position: [
				0,
				.42,
				0
			],
			color: "#f2d69a",
			maxIntensity: 1.8,
			distance: 2.5
		},
		interaction: Z,
		complexity: {
			visibleMeshes: 4,
			triangles: 2e3
		}
	}),
	"woven-pendant": P({
		defaultRoomType: "dining-room",
		component: Yr,
		label: "Woven pendant",
		category: "Lighting",
		defaultSize: [
			.847,
			.58,
			.86
		],
		resizePolicy: { kind: "uniform" },
		preferredPlacement: "ceiling",
		supportedDomains: ["light"],
		mountKind: "surface",
		bounds: {
			min: [
				-.4235,
				-.58,
				-.43
			],
			max: [
				.4235,
				0,
				.43
			]
		},
		outlineContact: !1,
		sceneLight: {
			position: [
				0,
				-.5,
				0
			],
			color: "#f2d69a",
			maxIntensity: 4,
			distance: 4
		},
		interaction: Z,
		complexity: {
			visibleMeshes: 7,
			triangles: 2e3
		}
	}),
	"children-pendant": P({
		defaultRoomType: "bedroom",
		component: Qr,
		label: "Children's pendant",
		category: "Lighting",
		defaultSize: [
			.58,
			.479,
			.58
		],
		resizePolicy: { kind: "uniform" },
		preferredPlacement: "ceiling",
		supportedDomains: ["light"],
		mountKind: "surface",
		bounds: {
			min: [
				-.29,
				-.479,
				-.29
			],
			max: [
				.29,
				0,
				.29
			]
		},
		outlineContact: !1,
		sceneLight: {
			position: [
				0,
				-.37,
				0
			],
			color: "#f1d59b",
			maxIntensity: 3.5,
			distance: 3.5
		},
		interaction: Z,
		complexity: {
			visibleMeshes: 7,
			triangles: 4e3
		}
	}),
	"wall-switch": P({
		defaultRoomType: "entryway",
		component: gr,
		label: "Wall switch",
		category: "Controls",
		defaultSize: [
			.122,
			.152,
			.048
		],
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "wall",
		supportedDomains: [
			"light",
			"switch",
			"input_boolean"
		],
		mountKind: "wall",
		bounds: {
			min: [
				-.061,
				0,
				-.001
			],
			max: [
				.061,
				.152,
				.047
			]
		},
		outlineContact: !0,
		interaction: Z,
		complexity: {
			visibleMeshes: 6,
			triangles: 420
		}
	}),
	"opening-contact": P({
		defaultRoomType: "entryway",
		component: Da,
		label: "Opening contact",
		category: "Sensors",
		defaultSize: [
			.15,
			.112,
			.046
		],
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "wall",
		supportedDomains: ["binary_sensor"],
		supportedDeviceClasses: { binary_sensor: [
			"door",
			"garage_door",
			"opening",
			"window"
		] },
		mountKind: "wall",
		bounds: {
			min: [
				-.075,
				0,
				-.001
			],
			max: [
				.075,
				.112,
				.045
			]
		},
		outlineContact: !0,
		interaction: Z,
		complexity: {
			visibleMeshes: 6,
			triangles: 380
		}
	}),
	thermometer: P({
		defaultRoomType: "bedroom",
		component: ka,
		label: "Thermometer",
		category: "Sensors",
		defaultSize: [
			.16,
			.16,
			.056
		],
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "absolute",
		supportedDomains: ["sensor"],
		supportedDeviceClasses: { sensor: ["temperature"] },
		mountKind: "wall",
		bounds: {
			min: [
				-.08,
				0,
				-.001
			],
			max: [
				.08,
				.16,
				.055
			]
		},
		outlineContact: !0,
		interaction: Z,
		complexity: {
			visibleMeshes: 7,
			triangles: 900
		}
	}),
	"motion-sensor": P({
		defaultRoomType: "hallway",
		component: Ea,
		label: "Motion sensor",
		category: "Sensors",
		defaultSize: [
			.14,
			.135,
			.081
		],
		resizePolicy: { kind: "uniform" },
		preferredPlacement: "ceiling",
		supportedDomains: ["binary_sensor"],
		supportedDeviceClasses: { binary_sensor: [
			"motion",
			"occupancy",
			"presence"
		] },
		mountKind: "wall",
		bounds: {
			min: [
				-.07,
				0,
				-.001
			],
			max: [
				.07,
				.135,
				.08
			]
		},
		outlineContact: !0,
		interaction: Z,
		complexity: {
			visibleMeshes: 6,
			triangles: 900
		}
	}),
	"motorized-blind": P({
		defaultRoomType: "living-room",
		component: Tr,
		label: "Motorized blind",
		category: "Covers",
		defaultSize: wr,
		resizePolicy: {
			kind: "axes",
			axes: ["width", "height"]
		},
		preferredPlacement: "wall",
		windowFit: {
			openingWidthRatio: 1.12 / 1.2,
			openingHeightRatio: 1.48 / 1.6,
			depthOffsetMeters: .003
		},
		supportedDomains: ["cover"],
		mountKind: "wall",
		bounds: {
			min: [
				-.6,
				0,
				0
			],
			max: [
				.6,
				1.6,
				.12
			]
		},
		outlineContact: !0,
		interaction: Z,
		complexity: {
			visibleMeshes: 9,
			triangles: 360
		}
	}),
	"leak-sensor": P({
		defaultRoomType: "bathroom",
		component: Ta,
		label: "Leak sensor",
		category: "Sensors",
		defaultSize: [
			.2,
			.14,
			.2
		],
		resizePolicy: { kind: "uniform" },
		preferredPlacement: "absolute",
		supportedDomains: ["binary_sensor"],
		supportedDeviceClasses: { binary_sensor: ["moisture"] },
		mountKind: "surface",
		bounds: {
			min: [
				-.1,
				0,
				-.1
			],
			max: [
				.1,
				.14,
				.1
			]
		},
		outlineContact: !1,
		interaction: Z,
		complexity: {
			visibleMeshes: 6,
			triangles: 920
		}
	}),
	"ceiling-fan": P({
		defaultRoomType: "living-room",
		component: kr,
		label: "Ceiling fan",
		category: "Climate",
		defaultSize: [
			1.2,
			.4,
			1.2
		],
		resizePolicy: { kind: "uniform" },
		preferredPlacement: "ceiling",
		supportedDomains: ["fan"],
		mountKind: "surface",
		bounds: {
			min: [
				-.6,
				0,
				-.6
			],
			max: [
				.6,
				.4,
				.6
			]
		},
		outlineContact: !1,
		interaction: Z,
		complexity: {
			visibleMeshes: 9,
			triangles: 1e3
		}
	}),
	"table-fan": P({
		defaultRoomType: "office",
		component: Nr,
		label: "Table fan",
		category: "Climate",
		defaultSize: [
			.36,
			.48,
			.24
		],
		resizePolicy: { kind: "uniform" },
		preferredPlacement: "absolute",
		supportedDomains: ["fan"],
		mountKind: "surface",
		bounds: {
			min: [
				-.18,
				0,
				-.12
			],
			max: [
				.18,
				.48,
				.12
			]
		},
		outlineContact: !1,
		interaction: Z,
		complexity: {
			visibleMeshes: 15,
			triangles: 4400
		}
	}),
	"pedestal-fan": P({
		defaultRoomType: "bedroom",
		component: Pr,
		label: "Pedestal fan",
		category: "Climate",
		defaultSize: [
			.45,
			1.35,
			.4
		],
		resizePolicy: { kind: "uniform" },
		preferredPlacement: "absolute",
		supportedDomains: ["fan"],
		mountKind: "surface",
		bounds: {
			min: [
				-.225,
				0,
				-.2
			],
			max: [
				.225,
				1.35,
				.2
			]
		},
		outlineContact: !1,
		interaction: Z,
		complexity: {
			visibleMeshes: 16,
			triangles: 4500
		}
	}),
	"heated-towel-rail": vo,
	"smart-panel-radiator": P({
		defaultRoomType: "living-room",
		component: mr,
		label: "Electric heater",
		category: "Climate",
		defaultSize: [
			1,
			.6,
			.12
		],
		resizePolicy: {
			kind: "axes",
			axes: ["width"]
		},
		preferredPlacement: "wall",
		supportedDomains: ["climate", "switch"],
		mountKind: "wall",
		bounds: {
			min: [
				-.5,
				0,
				0
			],
			max: [
				.5,
				.6,
				.12
			]
		},
		outlineContact: !0,
		interaction: Z,
		complexity: {
			visibleMeshes: 10,
			triangles: 1900
		}
	}),
	"smart-thermostat": P({
		defaultRoomType: "hallway",
		component: hr,
		label: "Smart thermostat",
		category: "Climate",
		defaultSize: [
			.12,
			.12,
			.035
		],
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "wall",
		supportedDomains: ["climate"],
		mountKind: "wall",
		bounds: {
			min: [
				-.06,
				0,
				0
			],
			max: [
				.06,
				.12,
				.035
			]
		},
		outlineContact: !0,
		interaction: Z,
		complexity: {
			visibleMeshes: 9,
			triangles: 1800
		}
	}),
	"smart-plug": P({
		defaultRoomType: "living-room",
		component: _r,
		label: "Smart plug",
		category: "Power",
		defaultSize: [
			.07,
			.07,
			.055
		],
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "wall",
		supportedDomains: ["switch"],
		supportedDeviceClasses: { switch: ["outlet"] },
		mountKind: "wall",
		bounds: {
			min: [
				-.035,
				0,
				0
			],
			max: [
				.035,
				.07,
				.055
			]
		},
		outlineContact: !0,
		interaction: Z,
		complexity: {
			visibleMeshes: 11,
			triangles: 2400
		}
	}),
	"ceiling-light": P({
		defaultRoomType: "living-room",
		component: $r,
		label: "Ceiling light",
		category: "Lighting",
		defaultSize: [
			.4,
			.12,
			.4
		],
		resizePolicy: { kind: "uniform" },
		preferredPlacement: "ceiling",
		supportedDomains: ["light"],
		mountKind: "surface",
		bounds: {
			min: [
				-.2,
				0,
				-.2
			],
			max: [
				.2,
				.12,
				.2
			]
		},
		outlineContact: !1,
		sceneLight: {
			position: [
				0,
				.02,
				0
			],
			color: "#ffe4a3",
			maxIntensity: 5,
			distance: 5
		},
		interaction: Z,
		complexity: {
			visibleMeshes: 4,
			triangles: 1e3
		}
	}),
	"recessed-downlight": P({
		defaultRoomType: "hallway",
		component: ei,
		label: "Recessed downlight",
		category: "Lighting",
		defaultSize: [
			.1,
			.04,
			.1
		],
		resizePolicy: { kind: "uniform" },
		preferredPlacement: "ceiling",
		supportedDomains: ["light"],
		mountKind: "surface",
		bounds: {
			min: [
				-.05,
				0,
				-.05
			],
			max: [
				.05,
				.04,
				.05
			]
		},
		outlineContact: !1,
		sceneLight: {
			position: [
				0,
				.005,
				0
			],
			color: "#ffe7aa",
			maxIntensity: 4,
			distance: 3.5
		},
		interaction: Z,
		complexity: {
			visibleMeshes: 4,
			triangles: 900
		}
	}),
	"wall-sconce": P({
		defaultRoomType: "bedroom",
		component: ti,
		label: "Wall sconce",
		category: "Lighting",
		defaultSize: [
			.22,
			.32,
			.16
		],
		resizePolicy: { kind: "uniform" },
		preferredPlacement: "wall",
		supportedDomains: ["light"],
		mountKind: "wall",
		bounds: {
			min: [
				-.11,
				0,
				0
			],
			max: [
				.11,
				.32,
				.16
			]
		},
		outlineContact: !0,
		sceneLight: {
			position: [
				0,
				.16,
				.15
			],
			color: "#ffdda0",
			maxIntensity: 3,
			distance: 3
		},
		interaction: Z,
		complexity: {
			visibleMeshes: 5,
			triangles: 1800
		}
	}),
	"illuminated-round-mirror": P({
		defaultRoomType: "bathroom",
		component: ri,
		label: "Illuminated round mirror",
		category: "Lighting",
		defaultSize: ni,
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "wall",
		supportedDomains: ["light"],
		mountKind: "wall",
		bounds: {
			min: [
				-.4,
				0,
				0
			],
			max: [
				.4,
				.8,
				.045
			]
		},
		outlineContact: !0,
		sceneLight: {
			position: [
				0,
				.4,
				.12
			],
			color: "#f5dba1",
			maxIntensity: 3,
			distance: 3.5
		},
		interaction: Z,
		complexity: {
			visibleMeshes: 5,
			triangles: 1500
		}
	}),
	"motorized-curtain": P({
		defaultRoomType: "living-room",
		component: Er,
		label: "Motorized curtain",
		defaultColor: "#d8c8ad",
		category: "Covers",
		defaultSize: [
			2,
			2.4,
			.16
		],
		resizePolicy: {
			kind: "axes",
			axes: ["width", "height"]
		},
		preferredPlacement: "wall",
		windowFit: {
			openingWidthRatio: .95,
			openingHeightRatio: .95,
			depthOffsetMeters: .003
		},
		supportedDomains: ["cover"],
		supportedDeviceClasses: { cover: ["curtain"] },
		mountKind: "wall",
		bounds: {
			min: [
				-1,
				0,
				0
			],
			max: [
				1,
				2.4,
				.16
			]
		},
		outlineContact: !0,
		interaction: Z,
		complexity: {
			visibleMeshes: 13,
			triangles: 1600
		}
	}),
	"video-doorbell": P({
		defaultRoomType: "entryway",
		component: ya,
		label: "Video doorbell",
		category: "Security",
		defaultSize: [
			.05,
			.135,
			.035
		],
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "wall",
		supportedDomains: ["camera"],
		mountKind: "wall",
		bounds: {
			min: [
				-.025,
				0,
				0
			],
			max: [
				.025,
				.135,
				.035
			]
		},
		outlineContact: !0,
		liveMedia: {
			kind: "camera-stream",
			slotRole: "primary"
		},
		interaction: {
			target: "camera-viewer",
			tapTolerancePixels: 10
		},
		complexity: {
			visibleMeshes: 6,
			triangles: 1600
		}
	}),
	"indoor-security-camera": P({
		defaultRoomType: "living-room",
		component: ba,
		label: "Indoor security camera",
		category: "Security",
		defaultSize: [
			.1,
			.16,
			.1
		],
		resizePolicy: { kind: "uniform" },
		preferredPlacement: "absolute",
		supportedDomains: ["camera"],
		mountKind: "surface",
		bounds: {
			min: [
				-.05,
				0,
				-.05
			],
			max: [
				.05,
				.16,
				.05
			]
		},
		outlineContact: !1,
		liveMedia: {
			kind: "camera-stream",
			slotRole: "primary"
		},
		interaction: {
			target: "camera-viewer",
			tapTolerancePixels: 10
		},
		complexity: {
			visibleMeshes: 7,
			triangles: 2400
		}
	}),
	"smoke-alarm": P({
		defaultRoomType: "hallway",
		component: Aa,
		label: "Smoke alarm",
		category: "Safety",
		defaultSize: [
			.12,
			.045,
			.12
		],
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "ceiling",
		supportedDomains: ["binary_sensor"],
		supportedDeviceClasses: { binary_sensor: ["smoke"] },
		mountKind: "surface",
		bounds: {
			min: [
				-.06,
				0,
				-.06
			],
			max: [
				.06,
				.045,
				.06
			]
		},
		outlineContact: !1,
		interaction: Z,
		complexity: {
			visibleMeshes: 10,
			triangles: 1400
		}
	}),
	"carbon-monoxide-alarm": P({
		defaultRoomType: "hallway",
		component: ja,
		label: "Carbon monoxide alarm",
		category: "Safety",
		defaultSize: [
			.11,
			.11,
			.035
		],
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "wall",
		supportedDomains: ["binary_sensor"],
		supportedDeviceClasses: { binary_sensor: ["carbon_monoxide"] },
		mountKind: "wall",
		bounds: {
			min: [
				-.055,
				0,
				0
			],
			max: [
				.055,
				.11,
				.035
			]
		},
		outlineContact: !0,
		interaction: Z,
		complexity: {
			visibleMeshes: 10,
			triangles: 1900
		}
	}),
	"humidity-sensor": P({
		defaultRoomType: "bathroom",
		component: Ma,
		label: "Humidity sensor",
		category: "Sensors",
		defaultSize: [
			.085,
			.085,
			.03
		],
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "wall",
		supportedDomains: ["sensor"],
		supportedDeviceClasses: { sensor: ["humidity"] },
		mountKind: "wall",
		bounds: {
			min: [
				-.0425,
				0,
				0
			],
			max: [
				.0425,
				.085,
				.03
			]
		},
		outlineContact: !0,
		interaction: Z,
		complexity: {
			visibleMeshes: 6,
			triangles: 1700
		}
	}),
	"air-quality-monitor": P({
		defaultRoomType: "bedroom",
		component: Na,
		label: "Air quality monitor",
		category: "Sensors",
		defaultSize: [
			.1,
			.16,
			.06
		],
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "absolute",
		supportedDomains: ["sensor"],
		supportedDeviceClasses: { sensor: [
			"aqi",
			"carbon_dioxide",
			"pm25",
			"volatile_organic_compounds"
		] },
		mountKind: "surface",
		bounds: {
			min: [
				-.05,
				0,
				-.03
			],
			max: [
				.05,
				.16,
				.03
			]
		},
		outlineContact: !1,
		interaction: Z,
		complexity: {
			visibleMeshes: 10,
			triangles: 2e3
		}
	}),
	"energy-monitor": P({
		defaultRoomType: "laundry",
		component: Pa,
		label: "Energy monitor",
		category: "Energy",
		defaultSize: [
			.2,
			.3,
			.09
		],
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "wall",
		supportedDomains: ["sensor"],
		supportedDeviceClasses: { sensor: [
			"power",
			"energy",
			"current",
			"voltage"
		] },
		mountKind: "wall",
		bounds: {
			min: [
				-.1,
				0,
				0
			],
			max: [
				.1,
				.3,
				.09
			]
		},
		outlineContact: !0,
		interaction: Z,
		complexity: {
			visibleMeshes: 8,
			triangles: 1900
		}
	}),
	"air-purifier": P({
		defaultRoomType: "bedroom",
		component: Fr,
		label: "Air purifier",
		category: "Climate",
		defaultSize: [
			.27,
			.52,
			.27
		],
		resizePolicy: { kind: "uniform" },
		preferredPlacement: "absolute",
		supportedDomains: ["fan", "switch"],
		mountKind: "surface",
		bounds: {
			min: [
				-.135,
				0,
				-.135
			],
			max: [
				.135,
				.52,
				.135
			]
		},
		outlineContact: !1,
		interaction: Z,
		complexity: {
			visibleMeshes: 16,
			triangles: 3e3
		}
	}),
	"bathroom-extractor-fan": P({
		defaultRoomType: "bathroom",
		component: Ir,
		label: "Bathroom extractor fan",
		category: "Climate",
		defaultSize: [
			.18,
			.18,
			.09
		],
		resizePolicy: { kind: "uniform" },
		preferredPlacement: "wall",
		supportedDomains: ["fan", "switch"],
		mountKind: "wall",
		bounds: {
			min: [
				-.09,
				0,
				0
			],
			max: [
				.09,
				.18,
				.09
			]
		},
		outlineContact: !0,
		interaction: Z,
		complexity: {
			visibleMeshes: 14,
			triangles: 2800
		}
	}),
	refrigerator: P({
		defaultRoomType: "kitchen",
		component: Kn,
		label: "Refrigerator",
		category: "Appliances",
		defaultSize: [
			.7,
			1.85,
			.72
		],
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "absolute",
		supportedDomains: ["sensor"],
		supportedDeviceClasses: { sensor: ["temperature"] },
		mountKind: "surface",
		bounds: {
			min: [
				-.35,
				0,
				-.36
			],
			max: [
				.35,
				1.85,
				.36
			]
		},
		outlineContact: !1,
		interaction: Z,
		complexity: {
			visibleMeshes: 9,
			triangles: 2300
		}
	}),
	"smart-power-strip": P({
		defaultRoomType: "office",
		component: vr,
		label: "Smart power strip",
		category: "Power",
		defaultSize: [
			.34,
			.055,
			.065
		],
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "absolute",
		supportedDomains: ["switch"],
		supportedDeviceClasses: { switch: ["outlet"] },
		mountKind: "surface",
		bounds: {
			min: [
				-.17,
				0,
				-.0325
			],
			max: [
				.17,
				.055,
				.0325
			]
		},
		outlineContact: !1,
		interaction: Z,
		complexity: {
			visibleMeshes: 14,
			triangles: 2900
		}
	}),
	"humidifier-dehumidifier": P({
		defaultRoomType: "bedroom",
		component: qn,
		label: "Humidifier / dehumidifier",
		category: "Climate",
		defaultSize: [
			.32,
			.6,
			.28
		],
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "absolute",
		supportedDomains: ["humidifier"],
		mountKind: "surface",
		bounds: {
			min: [
				-.16,
				0,
				-.14
			],
			max: [
				.16,
				.6,
				.14
			]
		},
		outlineContact: !1,
		interaction: Z,
		complexity: {
			visibleMeshes: 15,
			triangles: 3300
		}
	}),
	"robot-vacuum": P({
		defaultRoomType: "living-room",
		component: Jn,
		label: "Robot vacuum",
		category: "Appliances",
		defaultSize: [
			.35,
			.09,
			.35
		],
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "absolute",
		supportedDomains: ["vacuum"],
		mountKind: "surface",
		bounds: {
			min: [
				-.175,
				0,
				-.175
			],
			max: [
				.175,
				.09,
				.175
			]
		},
		outlineContact: !1,
		interaction: Z,
		complexity: {
			visibleMeshes: 14,
			triangles: 3200
		}
	}),
	"smart-lock": P({
		defaultRoomType: "entryway",
		component: xa,
		label: "Smart lock",
		category: "Security",
		defaultSize: [
			.07,
			.18,
			.06
		],
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "wall",
		supportedDomains: ["lock"],
		mountKind: "wall",
		bounds: {
			min: [
				-.035,
				0,
				0
			],
			max: [
				.035,
				.18,
				.06
			]
		},
		outlineContact: !0,
		interaction: Z,
		complexity: {
			visibleMeshes: 7,
			triangles: 1900
		}
	}),
	"alarm-keypad": P({
		defaultRoomType: "entryway",
		component: Ca,
		label: "Alarm keypad",
		category: "Security",
		defaultSize: [
			.18,
			.25,
			.035
		],
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "wall",
		supportedDomains: ["alarm_control_panel"],
		mountKind: "wall",
		bounds: {
			min: [
				-.09,
				0,
				0
			],
			max: [
				.09,
				.25,
				.035
			]
		},
		outlineContact: !0,
		interaction: Z,
		complexity: {
			visibleMeshes: 16,
			triangles: 3500
		}
	}),
	"rotating-sprinkler": P({
		component: ho,
		label: "Rotating sprinkler",
		category: "Irrigation",
		defaultRoomType: "outdoor",
		placementEnvironment: "outdoor",
		defaultSize: [
			.28,
			.164,
			.28
		],
		bounds: {
			min: [
				-.14,
				0,
				-.14
			],
			max: [
				.14,
				.164,
				.14
			]
		},
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "absolute",
		supportedDomains: ["valve", "switch"],
		mountKind: "surface",
		outlineContact: !1,
		interaction: Z,
		complexity: {
			visibleMeshes: 72,
			triangles: 4e3
		}
	}),
	"smart-hose-timer": P({
		component: go,
		label: "Smart hose timer",
		category: "Irrigation",
		defaultRoomType: "outdoor",
		placementEnvironment: "outdoor",
		defaultSize: [
			.09,
			.2,
			.063
		],
		bounds: {
			min: [
				-.045,
				0,
				0
			],
			max: [
				.045,
				.2,
				.063
			]
		},
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "wall",
		supportedDomains: ["valve", "switch"],
		mountKind: "wall",
		outlineContact: !1,
		interaction: Z,
		complexity: {
			visibleMeshes: 9,
			triangles: 2500
		}
	}),
	"soil-moisture-sensor": P({
		component: _o,
		label: "Soil moisture sensor",
		category: "Irrigation",
		defaultRoomType: "outdoor",
		placementEnvironment: "outdoor",
		defaultSize: [
			.065,
			.12,
			.044
		],
		bounds: {
			min: [
				-.0325,
				0,
				-.02
			],
			max: [
				.0325,
				.12,
				.024
			]
		},
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "absolute",
		supportedDomains: ["sensor"],
		supportedDeviceClasses: { sensor: ["moisture"] },
		mountKind: "surface",
		outlineContact: !1,
		interaction: Z,
		complexity: {
			visibleMeshes: 6,
			triangles: 2e3
		}
	}),
	"pop-up-sprinkler": P({
		defaultRoomType: "outdoor",
		component: mo,
		label: "Pop-up sprinkler",
		category: "Irrigation",
		defaultSize: [
			.14,
			.182,
			.14
		],
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "absolute",
		placementEnvironment: "outdoor",
		supportedDomains: ["valve", "switch"],
		mountKind: "surface",
		bounds: {
			min: [
				-.07,
				0,
				-.07
			],
			max: [
				.07,
				.182,
				.07
			]
		},
		outlineContact: !0,
		interaction: Z,
		complexity: {
			visibleMeshes: 68,
			triangles: 3500
		}
	}),
	"motorized-valve": P({
		defaultRoomType: "laundry",
		component: yr,
		label: "Motorized valve",
		category: "Utilities",
		defaultSize: [
			.24,
			.22,
			.12
		],
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "wall",
		supportedDomains: ["valve"],
		mountKind: "wall",
		bounds: {
			min: [
				-.12,
				0,
				0
			],
			max: [
				.12,
				.22,
				.12
			]
		},
		outlineContact: !0,
		interaction: Z,
		complexity: {
			visibleMeshes: 9,
			triangles: 2500
		}
	}),
	siren: P({
		defaultRoomType: "hallway",
		component: wa,
		label: "Siren",
		category: "Safety",
		defaultSize: [
			.16,
			.16,
			.07
		],
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "wall",
		supportedDomains: ["siren"],
		mountKind: "wall",
		bounds: {
			min: [
				-.08,
				0,
				0
			],
			max: [
				.08,
				.16,
				.07
			]
		},
		outlineContact: !0,
		interaction: Z,
		complexity: {
			visibleMeshes: 8,
			triangles: 2100
		}
	}),
	"smart-button": P({
		defaultRoomType: "living-room",
		component: br,
		label: "Smart button",
		category: "Controls",
		defaultSize: [
			.09,
			.09,
			.035
		],
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "wall",
		supportedDomains: ["button"],
		mountKind: "wall",
		bounds: {
			min: [
				-.045,
				0,
				0
			],
			max: [
				.045,
				.09,
				.035
			]
		},
		outlineContact: !0,
		interaction: Z,
		complexity: {
			visibleMeshes: 6,
			triangles: 1900
		}
	}),
	"built-in-microwave": bo,
	microwave: xo,
	"coffee-maker": P({
		defaultRoomType: "kitchen",
		component: Zn,
		label: "Coffee maker",
		category: "Appliances",
		defaultSize: [
			.24,
			.36,
			.34
		],
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "absolute",
		supportedDomains: [
			"switch",
			"sensor",
			"select",
			"number",
			"button"
		],
		mountKind: "surface",
		bounds: {
			min: [
				-.12,
				0,
				-.17
			],
			max: [
				.12,
				.36,
				.17
			]
		},
		outlineContact: !0,
		interaction: Z,
		complexity: {
			visibleMeshes: 14,
			triangles: 2840
		}
	}),
	"electric-kettle": P({
		defaultRoomType: "kitchen",
		component: Qn,
		label: "Electric kettle",
		category: "Appliances",
		defaultSize: [
			.22,
			.26,
			.2
		],
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "absolute",
		supportedDomains: [
			"switch",
			"sensor",
			"button"
		],
		mountKind: "surface",
		bounds: {
			min: [
				-.11,
				0,
				-.1
			],
			max: [
				.11,
				.26,
				.1
			]
		},
		outlineContact: !0,
		interaction: Z,
		complexity: {
			visibleMeshes: 12,
			triangles: 2440
		}
	}),
	freezer: P({
		defaultRoomType: "kitchen",
		component: $n,
		label: "Freezer",
		category: "Appliances",
		defaultSize: [
			.65,
			1.75,
			.68
		],
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "absolute",
		supportedDomains: ["sensor"],
		supportedDeviceClasses: { sensor: ["temperature"] },
		mountKind: "surface",
		bounds: {
			min: [
				-.325,
				0,
				-.34
			],
			max: [
				.325,
				1.75,
				.34
			]
		},
		outlineContact: !0,
		interaction: Z,
		complexity: {
			visibleMeshes: 11,
			triangles: 2200
		}
	}),
	"pet-feeder": P({
		defaultRoomType: "kitchen",
		component: er,
		label: "Pet feeder",
		category: "Appliances",
		defaultSize: [
			.24,
			.35,
			.36
		],
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "absolute",
		supportedDomains: [
			"button",
			"switch",
			"sensor",
			"number",
			"select"
		],
		mountKind: "surface",
		bounds: {
			min: [
				-.12,
				0,
				-.18
			],
			max: [
				.12,
				.35,
				.18
			]
		},
		outlineContact: !0,
		interaction: Z,
		complexity: {
			visibleMeshes: 14,
			triangles: 3200
		}
	}),
	"weather-station": P({
		defaultRoomType: "living-room",
		component: Fa,
		label: "Weather station",
		category: "Sensors",
		defaultSize: [
			.18,
			.12,
			.04
		],
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "absolute",
		supportedDomains: ["sensor"],
		supportedDeviceClasses: { sensor: [
			"temperature",
			"humidity",
			"atmospheric_pressure"
		] },
		mountKind: "surface",
		bounds: {
			min: [
				-.09,
				0,
				-.02
			],
			max: [
				.09,
				.12,
				.02
			]
		},
		outlineContact: !0,
		interaction: Z,
		complexity: {
			visibleMeshes: 9,
			triangles: 1900
		}
	}),
	"compact-car": P({
		component: Qa,
		label: "Compact European car",
		category: "Vehicles",
		defaultRoomType: "outdoor",
		placementEnvironment: "indoor-outdoor",
		defaultSize: qa,
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "absolute",
		mountKind: "surface",
		supportedDomains: ["sensor"],
		bounds: {
			min: [
				-.97,
				0,
				-2
			],
			max: [
				.97,
				1.5,
				2
			]
		},
		outlineContact: !0,
		interaction: Z,
		complexity: {
			visibleMeshes: 14,
			triangles: 31e3
		}
	}),
	"electric-sedan": P({
		component: io,
		label: "Tesla-like electric sedan",
		category: "Vehicles",
		defaultRoomType: "outdoor",
		placementEnvironment: "indoor-outdoor",
		defaultSize: $a,
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "absolute",
		mountKind: "surface",
		supportedDomains: ["sensor"],
		bounds: {
			min: [
				-1.04,
				0,
				-2.35
			],
			max: [
				1.04,
				1.45,
				2.35
			]
		},
		outlineContact: !0,
		interaction: Z,
		complexity: {
			visibleMeshes: 15,
			triangles: 32e3
		}
	}),
	"pickup-truck": P({
		component: fo,
		label: "Pickup truck",
		category: "Vehicles",
		defaultRoomType: "outdoor",
		placementEnvironment: "indoor-outdoor",
		defaultSize: oo,
		resizePolicy: { kind: "fixed" },
		preferredPlacement: "absolute",
		mountKind: "surface",
		supportedDomains: ["sensor"],
		bounds: {
			min: [
				-1.12,
				0,
				-2.7
			],
			max: [
				1.12,
				1.86,
				2.7
			]
		},
		outlineContact: !0,
		interaction: Z,
		complexity: {
			visibleMeshes: 16,
			triangles: 34e3
		}
	})
});
Object.freeze(Object.keys(Oo));
//#endregion
//#region packages/catalog/src/furnishing/presets/bathroom/arched-mirror.tsx
function ko() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "arched-wood-mirror",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.39,
					0
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.54,
						.78,
						.03
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#875d42" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#533b2d",
						thickness: .005
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.4,
					.018
				],
				children: [/* @__PURE__ */ (0, U.jsx)("planeGeometry", { args: [.44, .7] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#b8cbca" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.78,
					0
				],
				children: [
					/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
						.24,
						.03,
						8,
						24,
						Math.PI
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#875d42" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#533b2d",
						thickness: .004
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.78,
					.018
				],
				children: [/* @__PURE__ */ (0, U.jsx)("circleGeometry", { args: [
					.21,
					24,
					0,
					Math.PI
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#b8cbca" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bathroom/dark-oak-vessel-vanity.tsx
var Ao = [
	.8,
	1.23,
	.52
];
function jo({ size: e = Ao }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "dark-oak-vessel-vanity",
		scale: [
			e[0] / .8,
			e[1] / 1.23,
			e[2] / .52
		],
		userData: { walkCollider: !0 },
		children: [
			[-.33, .33].flatMap((e) => [-.21, .21].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.05,
					t
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.055,
					.1,
					.055
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#32251f" })]
			}, `${e}-${t}`))),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.46,
					-.01
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.76,
						.72,
						.48
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#3b2922" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#1e1815",
						thickness: .005
					})
				]
			}),
			[-.19, .19].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "dark-oak-vanity-door",
				position: [
					e,
					.46,
					.24
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.372,
						.66,
						.02
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: e < 0 ? "#493229" : "#422d25" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#241b17",
						thickness: .003
					})
				]
			}, e)),
			[-.035, .035].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.48,
					.255
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.018,
					.24,
					.01
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#171a19" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.84,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.8,
						.04,
						.52
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#50372c" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#241b17",
						thickness: .004
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "vanity-vessel-basin",
				position: [
					-.04,
					.94,
					.015
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.23,
						.19,
						.16,
						24
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#eee9dd" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#969186",
						thickness: .004
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					-.04,
					1.021,
					.015
				],
				rotation: [
					-Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("circleGeometry", { args: [.175, 24] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#d6d2c9" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "vanity-matte-black-faucet",
				position: [
					.25,
					1.045,
					-.09
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.024,
						.027,
						.37,
						10
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#202422" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#101211",
						thickness: .0025
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					.145,
					1.195,
					-.09
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.017,
					.019,
					.21,
					10
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#202422" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					.045,
					1.175,
					-.09
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.015,
					.015,
					.05,
					10
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#202422" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					.29,
					1.18,
					-.09
				],
				rotation: [
					0,
					0,
					-.35
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.018,
					.09,
					.018
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#202422" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bathroom/concealed-toilet-bowl.tsx
var Mo = [
	[0, .19],
	[.075, .19],
	[.13, .22],
	[.178, .29],
	[.2, .375],
	[.2, .413],
	[.192, .423],
	[.169, .423],
	[.16, .407],
	[.143, .34],
	[.09, .285],
	[.045, .265],
	[0, .265]
].map(([e, t]) => new Oe(e, t)), No = [
	[.166, .426],
	[.193, .426],
	[.2, .433],
	[.2, .444],
	[.193, .451],
	[.158, .451],
	[.152, .444],
	[.152, .433],
	[.166, .426]
].map(([e, t]) => new Oe(e, t));
function Po({ ceramicColor: e = "#e9e7e0", seatColor: t = "#faf9f4", supportColor: n = "#d8d6cf" } = {}) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		position: [
			.438,
			0,
			0
		],
		scale: [
			1.4,
			1,
			1
		],
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "hollow-ceramic-bowl",
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("latheGeometry", { args: [Mo, 32] }), /* @__PURE__ */ (0, U.jsx)(I, { color: e })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "open-toilet-seat",
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("latheGeometry", { args: [No, 32] }), /* @__PURE__ */ (0, U.jsx)(I, { color: t })]
			}),
			[-.11, .11].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "seat-support",
				position: [
					-.145,
					.425,
					e
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.025,
					.012,
					.025
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: n })]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bathroom/concealed-cistern-toilet.tsx
function Fo() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "concealed-cistern-toilet",
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "cistern-enclosure",
				size: [
					.21,
					1.16,
					.58
				],
				position: [
					.095,
					.58,
					0
				],
				color: "#e7e3da",
				radius: .006,
				outlineColor: "#aaa69e"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "dual-flush-plate",
				size: [
					.014,
					.14,
					.22
				],
				position: [
					.205,
					.91,
					0
				],
				color: "#d4d6d3",
				radius: .005,
				outline: !1
			}),
			[{
				z: -.043,
				radius: .033
			}, {
				z: .047,
				radius: .024
			}].map(({ z: e, radius: t }) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "flush-button",
				position: [
					.214,
					.91,
					e
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					t,
					t,
					.008,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#f0f1ed" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "bowl-wall-connection",
				size: [
					.14,
					.18,
					.28
				],
				position: [
					.23,
					.31,
					0
				],
				color: "#e9e7e0",
				radius: .025,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(Po, {})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bathroom/towel-rail.tsx
function Io() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "towel-rail",
		children: [
			[-.29, .29].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					.026,
					0,
					e
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.018,
					.018,
					.052,
					10
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#909794" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					.055,
					0,
					0
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.014,
					.014,
					.62,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#aeb5b2" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					.08,
					-.25,
					0
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.035,
						.48,
						.52
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#e6dfd2" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#938d82",
						thickness: .003
					})
				]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bathroom/vanity-accessories.tsx
function Lo() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "vanity-accessories",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.12,
					0
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.055,
						.06,
						.24,
						14
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#e1d9ca" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#8b857c",
						thickness: .003
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.27,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.018,
					.018,
					.08,
					10
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#9da4a1" })]
			}),
			[-.13, .13].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.1,
					e
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.07,
						.06,
						.2,
						14
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#eee9df" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#969088",
						thickness: .003
					})
				]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bathroom/vessel-sink-and-faucet.tsx
function Ro() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "vessel-sink-and-faucet",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.1,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.24,
						.2,
						.2,
						24
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#eee6d5" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#8c8475",
						thickness: .005
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.203,
					0
				],
				rotation: [
					-Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("circleGeometry", { args: [.18, 24] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#d7ccba" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					.18,
					.18,
					0
				],
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.018,
						.018,
						.36,
						10
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#aeb5b2" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#59605e",
						thickness: .003
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					.1,
					.34,
					0
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.015,
					.015,
					.17,
					10
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#b9c0bd" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					.02,
					.31,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.014,
					.014,
					.08,
					10
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#aeb5b2" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bathroom/wicker-hamper.tsx
function zo() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "wicker-hamper",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.28,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.44,
						.56,
						.42
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#a9784f" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#604431",
						thickness: .006
					})
				]
			}),
			[
				.1,
				.18,
				.26,
				.34,
				.42,
				.5
			].map((e) => /* @__PURE__ */ (0, U.jsxs)("group", { children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					-.224,
					e,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.012,
					.025,
					.39
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#704b34" })]
			}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					e,
					-.214
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.41,
					.025,
					.012
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#704b34" })]
			})] }, e)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.575,
					0
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.48,
						.035,
						.46
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#b98a61" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#604431",
						thickness: .004
					})
				]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bathroom/wicker-towel-basket.tsx
function Bo() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "wicker-towel-basket",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.12,
					0
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.38,
						.24,
						.3
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#a97952" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#67462f",
						thickness: .004
					})
				]
			}),
			[
				.05,
				.1,
				.15,
				.2
			].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					e,
					.154
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.35,
					.014,
					.012
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#745039" })]
			}, e)),
			[
				-.11,
				0,
				.11
			].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.27,
					0
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.045,
						.045,
						.24,
						12
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#eeeae1" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#9c9992",
						thickness: .003
					})
				]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bathroom/wooden-vanity.tsx
var Vo = [
	-.72,
	-.24,
	.24,
	.72
], Ho = [
	.2,
	.25,
	.3,
	.35,
	.4,
	.45,
	.5,
	.55,
	.6
];
function Uo() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "wooden-vanity",
		children: [
			[-.78, .78].flatMap((e) => [-.17, .17].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					t,
					.06,
					e
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.07,
					.12,
					.07
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#684735" })]
			}, `${t}-${e}`))),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.42,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.48,
						.68,
						2.12
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#9a6745" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#5f3e2e",
						thickness: .006
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					-.247,
					.43,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.018,
					.58,
					2.01
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#a87550" })]
			}),
			Vo.flatMap((e) => Ho.map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					-.26,
					t,
					e
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.018,
					.018,
					.38
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: Math.round(t * 100) % 10 == 0 ? "#704a35" : "#7f563d" })]
			}, `${e}-${t}`))),
			Vo.map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					-.278,
					.44,
					e + .16
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.022,
					.022,
					.035,
					10
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#4b4039" })]
			}, `handle-${e}`)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.78,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.52,
						.05,
						2.18
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#a97650" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#5f3e2e",
						thickness: .005
					})
				]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bathroom/freestanding-bathtub.tsx
var Wo = [
	1.7,
	.6,
	.78
];
function Go({ size: e = Wo }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "freestanding-bathtub",
		scale: [
			e[0] / 1.7,
			e[1] / .6,
			e[2] / .78
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "bathtub-base",
				size: [
					1.7,
					.14,
					.78
				],
				position: [
					0,
					.07,
					0
				],
				color: "#eeeae0",
				radius: .08
			}),
			[-.81, .81].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				name: "bathtub-side",
				size: [
					.08,
					.46,
					.78
				],
				position: [
					e,
					.37,
					0
				],
				color: "#f1ede4",
				radius: .035
			}, e)),
			[-.35, .35].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				name: "bathtub-end",
				size: [
					1.54,
					.46,
					.08
				],
				position: [
					0,
					.37,
					e
				],
				color: "#f1ede4",
				radius: .035
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "bathtub-inner-basin",
				size: [
					1.42,
					.07,
					.54
				],
				position: [
					0,
					.19,
					0
				],
				color: "#cbd8d7",
				radius: .09,
				outlineColor: "#8a9997"
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "bathtub-drain",
				position: [
					.42,
					.228,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.038,
					.038,
					.008,
					20
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#7e8b89" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "bathtub-overflow",
				position: [
					-.73,
					.39,
					.311
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.028,
					.028,
					.012,
					18
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#7e8b89" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/construction/rounded-suite-panel.tsx
function Q({ size: e, position: t, color: n, outline: i = "#77726b", rotation: a = [
	0,
	0,
	0
] }) {
	return /* @__PURE__ */ (0, U.jsxs)("mesh", {
		position: t,
		rotation: a,
		castShadow: !0,
		receiveShadow: !0,
		children: [
			/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: e }),
			/* @__PURE__ */ (0, U.jsx)(I, { color: n }),
			/* @__PURE__ */ (0, U.jsx)(r, {
				thickness: .005,
				color: i,
				screenspace: !1
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bathroom/compact-toilet.tsx
function Ko() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "toilettes-suite-parentale-custom",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(Q, {
				size: [
					.34,
					.34,
					.42
				],
				position: [
					0,
					.19,
					-.03
				],
				color: "#ebece8",
				outline: "#8e9693"
			}),
			/* @__PURE__ */ (0, U.jsx)(Q, {
				size: [
					.39,
					.48,
					.2
				],
				position: [
					0,
					.48,
					.2
				],
				color: "#f0f1ed",
				outline: "#8e9693"
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.38,
					-.07
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				scale: [
					1,
					1.3,
					1
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
						.15,
						.027,
						10,
						24
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#d5d9d5" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						thickness: .004,
						color: "#7f8885",
						screenspace: !1
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.38,
					-.07
				],
				scale: [
					1,
					1,
					1.3
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.115,
					.115,
					.018,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#59615f" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.735,
					.2
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.035,
					.035,
					.018,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#8c9391" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bathroom/family-bathtub.tsx
var qo = "#eeeae3", Jo = "#f8f5ef", Yo = "#918d86", Xo = "#858d8b";
function Zo() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "family-bathroom-bathtub",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.265,
					.3575
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						1.64,
						.53,
						.065
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: qo }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: Yo,
						thickness: .004,
						screenspace: !1
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.265,
					-.3575
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					1.64,
					.53,
					.065
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: qo })]
			}),
			[-.7875, .7875].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.265,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.065,
						.53,
						.65
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: qo }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: Yo,
						thickness: .004,
						screenspace: !1
					})
				]
			}, e)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.085,
					0
				],
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					1.51,
					.17,
					.65
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: Jo })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.184,
					0
				],
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					1.43,
					.012,
					.55
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: "#c7d9d9",
					transparent: !0,
					opacity: .72
				})]
			}),
			[-.355, .355].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.545,
					e
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						1.62,
						.04,
						.06
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: Jo }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: Yo,
						thickness: .003,
						screenspace: !1
					})
				]
			}, e)),
			[-.78, .78].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.545,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.06,
					.04,
					.64
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: Jo })]
			}, e)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					-.5,
					.197,
					.12
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.045,
					.045,
					.012,
					18
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: Xo })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("group", {
				position: [
					.46,
					.55,
					-.31
				],
				children: [
					[-.14, .14].map((e) => /* @__PURE__ */ (0, U.jsxs)("group", {
						position: [
							e,
							0,
							0
						],
						children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
							position: [
								0,
								.075,
								0
							],
							castShadow: !0,
							children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
								.025,
								.025,
								.15,
								12
							] }), /* @__PURE__ */ (0, U.jsx)(I, { color: Xo })]
						}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
							position: [
								0,
								.16,
								0
							],
							castShadow: !0,
							children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
								.055,
								.055,
								.025,
								14
							] }), /* @__PURE__ */ (0, U.jsx)(I, { color: Xo })]
						})]
					}, e)),
					/* @__PURE__ */ (0, U.jsxs)("mesh", {
						position: [
							0,
							.105,
							0
						],
						castShadow: !0,
						children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
							.032,
							.032,
							.21,
							12
						] }), /* @__PURE__ */ (0, U.jsx)(I, { color: Xo })]
					}),
					/* @__PURE__ */ (0, U.jsxs)("mesh", {
						position: [
							0,
							.2,
							.09
						],
						rotation: [
							Math.PI / 2,
							0,
							0
						],
						castShadow: !0,
						children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
							.032,
							.032,
							.18,
							12
						] }), /* @__PURE__ */ (0, U.jsx)(I, { color: Xo })]
					})
				]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bathroom/wide-shower-tray.tsx
function Qo() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "receveur-douche-suite-parentale-custom",
		userData: { walkCollider: !0 },
		children: [/* @__PURE__ */ (0, U.jsx)(Q, {
			size: [
				2,
				.045,
				.89
			],
			position: [
				0,
				.0225,
				0
			],
			color: "#f1f2ef",
			outline: "#aeb5b2"
		}), /* @__PURE__ */ (0, U.jsx)(Q, {
			size: [
				.13,
				.018,
				.13
			],
			position: [
				-.72,
				.054,
				.24
			],
			color: "#909895",
			outline: "#606865"
		})]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bathroom/frameless-shower-screen.tsx
function $o() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "frameless-walk-in-shower-screen",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					.41,
					1.095,
					.002
				],
				children: [/* @__PURE__ */ (0, U.jsx)("planeGeometry", { args: [1.18, 2.1] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: "#c6e0e3",
					transparent: !0,
					opacity: .16,
					depthWrite: !1,
					side: 2
				})]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					1,
					1.095,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.035,
					2.1,
					.035
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#6d7474" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					-.17,
					2.115,
					-.42
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.012,
					.012,
					.84,
					10
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#747875" })]
			}),
			[.42, 1.74].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					1 - .095 / 2,
					e,
					.005
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.06,
					.09,
					.025
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#747875" })]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bathroom/shower-column.tsx
function es() {
	let e = "#4c4d4b", t = "#747875", n = "#262725";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "wall-mounted-rain-shower-column",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					-.055,
					1.64,
					0
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.018,
						.018,
						1.28,
						12
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: t }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						thickness: .004,
						color: n,
						screenspace: !1
					})
				]
			}),
			[1.28, 1.98].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					-.0175,
					e,
					0
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.014,
					.014,
					.075,
					10
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: t })]
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(Q, {
				size: [
					.11,
					.105,
					.46
				],
				position: [
					-.09,
					1.03,
					0
				],
				color: e,
				outline: n
			}),
			[-1, 1].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					-.095,
					1.03,
					e * .2
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.055,
					.055,
					.055,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: t })]
			}, e)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					-.25,
					2.282,
					0
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.018,
					.018,
					.4,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: t })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					-.45,
					2.245,
					0
				],
				scale: [
					1,
					1,
					.78
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.22,
						.22,
						.045,
						20
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: e }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						thickness: .005,
						color: n,
						screenspace: !1
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("group", {
				position: [
					-.17,
					1.62,
					.1
				],
				rotation: [
					0,
					0,
					-.24
				],
				children: [/* @__PURE__ */ (0, U.jsx)(Q, {
					size: [
						.065,
						.3,
						.075
					],
					position: [
						0,
						-.09,
						0
					],
					color: t,
					outline: n
				}), /* @__PURE__ */ (0, U.jsx)(Q, {
					size: [
						.11,
						.17,
						.15
					],
					position: [
						0,
						.12,
						0
					],
					color: e,
					outline: n
				})]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bathroom/shower-assembly.tsx
var ts = [
	2.018,
	2.3,
	.908
];
function ns({ size: e = ts }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "shower-assembly",
		scale: [
			e[0] / ts[0],
			e[1] / ts[1],
			e[2] / ts[2]
		],
		children: [
			/* @__PURE__ */ (0, U.jsx)(Qo, {}),
			/* @__PURE__ */ (0, U.jsx)("group", {
				position: [
					0,
					0,
					.445
				],
				children: /* @__PURE__ */ (0, U.jsx)($o, {})
			}),
			/* @__PURE__ */ (0, U.jsx)("group", {
				position: [
					.98,
					0,
					-.035
				],
				children: /* @__PURE__ */ (0, U.jsx)(es, {})
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bathroom/transparent-bath-screen.tsx
function rs() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "family-bathroom-transparent-bath-screen",
		children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
			position: [
				0,
				1.25,
				0
			],
			receiveShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
				.92,
				1.42,
				.024
			] }), /* @__PURE__ */ (0, U.jsx)(I, {
				color: "#9bcbd2",
				transparent: !0,
				opacity: .48,
				depthWrite: !1
			})]
		}), [.68, 1.72].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
			position: [
				.46,
				e,
				-.012
			],
			castShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
				.025,
				.12,
				.032
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#929b99" })]
		}, e))]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bathroom/toilet-paper-holder.tsx
var is = [
	.18,
	.12,
	.14
];
function as({ size: e = is, variant: t = "default" } = {}) {
	let n = t === "covered-black";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "toilet-paper-holder",
		scale: [
			e[0] / .18,
			e[1] / .12,
			e[2] / .14
		],
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "wall-plate",
				size: [
					.18,
					.12,
					.015
				],
				position: [
					0,
					.06,
					.0075
				],
				color: n ? "#282c28" : "#606b70",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "bracket",
				size: [
					.02,
					.02,
					.12
				],
				position: [
					-.08,
					.06,
					.08
				],
				color: n ? "#282c28" : "#606b70",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "bracket",
				size: [
					.02,
					.02,
					.12
				],
				position: [
					.08,
					.06,
					.08
				],
				color: n ? "#282c28" : "#606b70",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "paper-roll",
				position: [
					0,
					.06,
					.085
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.05,
					.05,
					.125,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#e8e5dc" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "spindle",
				position: [
					0,
					.06,
					.085
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.008,
					.008,
					.16,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: n ? "#282c28" : "#606b70" })]
			}),
			(t === "covered" || t === "covered-black") && /* @__PURE__ */ (0, U.jsx)(K, {
				name: "roll-cover",
				size: [
					.18,
					.008,
					.14
				],
				position: [
					0,
					.108,
					.07
				],
				color: n ? "#282c28" : "#606b70",
				radius: .002,
				outline: !1
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bathroom/medicine-cabinet.tsx
var os = [
	.5,
	.65,
	.16
];
function ss({ size: e = os } = {}) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "medicine-cabinet",
		scale: [
			e[0] / .5,
			e[1] / .65,
			e[2] / .16
		],
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "bottom",
				size: [
					.5,
					.025,
					.15
				],
				position: [
					0,
					.0125,
					.075
				],
				color: "#e8e5dc",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "top",
				size: [
					.5,
					.025,
					.15
				],
				position: [
					0,
					.6375000000000001,
					.075
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "side",
				size: [
					.025,
					.6,
					.15
				],
				position: [
					-.2375,
					.325,
					.075
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "side",
				size: [
					.025,
					.6,
					.15
				],
				position: [
					.2375,
					.325,
					.075
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "back",
				size: [
					.45,
					.6,
					.02
				],
				position: [
					0,
					.325,
					.009999999999999995
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "door",
				size: [
					.45,
					.6,
					.015
				],
				position: [
					0,
					.325,
					.1475
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "mirror",
				size: [
					.39,
					.54,
					.004
				],
				position: [
					0,
					.325,
					.157
				],
				color: "#b4cbd0",
				radius: .003
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "pull",
				size: [
					.016,
					.12,
					.008
				],
				position: [
					.216,
					.325,
					.156
				],
				color: "#606b70",
				radius: .006
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/french-door-curtains.tsx
function cs({ color: e } = {}) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "rideaux-porte-fenetre-chambre-enfant",
		children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
			position: [
				0,
				2.26,
				.015
			],
			rotation: [
				0,
				0,
				Math.PI / 2
			],
			castShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
				.025,
				.025,
				1.76,
				10
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#d9d2c8" })]
		}), [-.76, .76].map((t) => /* @__PURE__ */ (0, U.jsxs)("group", {
			position: [
				t,
				0,
				.035
			],
			children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					1.12,
					0
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.38,
						2.08,
						.035
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, {
						color: e ?? "#d8d0c4",
						transparent: !0,
						opacity: .9
					}),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#81776c",
						thickness: .004,
						screenspace: !1
					})
				]
			}), [
				-.12,
				0,
				.12
			].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					t,
					1.12,
					.022
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.018,
					1.98,
					.018
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: e ?? "#bfb5a8" })]
			}, t))]
		}, t))]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/rounded-bedroom-furniture-block.tsx
function ls({ size: e, position: t, color: n, rotation: i = [
	0,
	0,
	0
], outlineColor: a = "#655957", outlineThickness: o = .006, receiveShadow: s = !1 }) {
	return /* @__PURE__ */ (0, U.jsxs)("mesh", {
		position: t,
		rotation: i,
		castShadow: !0,
		receiveShadow: s,
		children: [
			/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: e }),
			/* @__PURE__ */ (0, U.jsx)(I, { color: n }),
			/* @__PURE__ */ (0, U.jsx)(r, {
				thickness: o,
				color: a,
				screenspace: !1
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/narrow-toy-shelf.tsx
function us() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		position: [
			-.1,
			.84,
			0
		],
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.055,
					0
				],
				scale: [
					.08,
					.09,
					.065
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
						1,
						16,
						10
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#c88e78" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#6f5147",
						thickness: .003,
						screenspace: !1
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.16,
					0
				],
				scale: [
					.065,
					.06,
					.055
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
					1,
					16,
					10
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#d19a83" })]
			}),
			[-.045, .045].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.2,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
					.025,
					10,
					8
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#b77868" })]
			}, e))
		]
	});
}
function ds() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		position: [
			.02,
			.5,
			0
		],
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.055,
					0
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.25,
						.1,
						.12,
						2,
						1,
						1
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#8eafa0" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#536c63",
						thickness: .003,
						screenspace: !1
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					-.055,
					.13,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.1,
					.08,
					.1
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#d3aa6d" })]
			}),
			[-.075, .075].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.015,
					-.067
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.035,
					.035,
					.018,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#665244" })]
			}, e))
		]
	});
}
function fs() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		position: [
			-.02,
			.17,
			0
		],
		children: [[
			.055,
			.045,
			.035
		].map((e, t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
			position: [
				0,
				t * .045,
				0
			],
			castShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
				e,
				.018,
				7,
				18
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: [
				"#d49590",
				"#ddb873",
				"#90aa9d"
			][t] })]
		}, e)), /* @__PURE__ */ (0, U.jsxs)("mesh", {
			position: [
				0,
				.08,
				0
			],
			children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
				.01,
				.014,
				.18,
				8
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#9b6f48" })]
		})]
	});
}
function ps() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "etagere-jouets-etroite-photo",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(ls, {
				size: [
					.43,
					.94,
					.025
				],
				position: [
					0,
					.51,
					.132
				],
				color: "#e6e0d6",
				radius: .012,
				outlineColor: "#73736d",
				outlineThickness: .004
			}),
			[-.23, .23].map((e) => /* @__PURE__ */ (0, U.jsx)(ls, {
				size: [
					.045,
					1.02,
					.28
				],
				position: [
					e,
					.51,
					0
				],
				color: "#f0ece4",
				radius: .015,
				outlineColor: "#73736d"
			}, e)),
			[
				.025,
				.34,
				.67,
				1
			].map((e) => /* @__PURE__ */ (0, U.jsx)(ls, {
				size: [
					.415,
					.05,
					.28
				],
				position: [
					0,
					e,
					0
				],
				color: "#f3efe7",
				radius: .015,
				outlineColor: "#73736d"
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(fs, {}),
			/* @__PURE__ */ (0, U.jsx)(ds, {}),
			/* @__PURE__ */ (0, U.jsx)(us, {})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/toddler-table-set.tsx
var ms = "#c8945b", hs = "#dfb77f", gs = "#67482f";
function _s({ position: e, rotationY: t }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		position: e,
		rotation: [
			0,
			t,
			0
		],
		children: [
			[-.13, .13].flatMap((e) => [-.11, .11].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.17,
					t
				],
				rotation: [
					t < 0 ? -.04 : .04,
					0,
					e < 0 ? -.035 : .035
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("capsuleGeometry", { args: [
					.024,
					.29,
					5,
					10
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: ms })]
			}, `${e}-${t}`))),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.34,
					0
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.19,
						.2,
						.055,
						28
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: hs }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: gs,
						thickness: .005,
						screenspace: !1
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.371,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.16,
					.16,
					.012,
					28
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#d7b98e" })]
			}),
			[-.14, .14].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.52,
					-.13
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("capsuleGeometry", { args: [
					.022,
					.25,
					5,
					10
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: ms })]
			}, e)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.665,
					-.13
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
						.145,
						.027,
						8,
						28,
						Math.PI
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: hs }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: gs,
						thickness: .004,
						screenspace: !1
					})
				]
			}),
			[
				-.09,
				0,
				.09
			].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.56,
					-.13
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("capsuleGeometry", { args: [
					.012,
					.15,
					4,
					8
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: hs })]
			}, e))
		]
	});
}
function vs() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "table-et-chaises-enfant-photo",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.45,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.34,
						.36,
						.065,
						32
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: hs }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: gs,
						thickness: .006,
						screenspace: !1
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.486,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.3,
					.3,
					.012,
					32
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#e6c594" })]
			}),
			[-.18, .18].flatMap((e) => [-.18, .18].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.225,
					t
				],
				rotation: [
					t < 0 ? -.035 : .035,
					0,
					e < 0 ? -.035 : .035
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("capsuleGeometry", { args: [
					.025,
					.39,
					5,
					10
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: ms })]
			}, `${e}-${t}`))),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					.05,
					.525,
					-.03
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.055,
						.045,
						.07,
						18
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#d4938b" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#7e5d58",
						thickness: .003,
						screenspace: !1
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsx)(_s, {
				position: [
					-.52,
					0,
					.03
				],
				rotationY: Math.PI / 2
			}),
			/* @__PURE__ */ (0, U.jsx)(_s, {
				position: [
					.05,
					0,
					.56
				],
				rotationY: Math.PI
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/woven-floor-basket.tsx
var ys = "#b78958", bs = "#d2a66f", xs = "#6d4c31", Ss = [
	[0, 0],
	[.34, 0],
	[.29, .48],
	[.305, .495],
	[.305, .505],
	[.298, .512],
	[.28, .512],
	[.273, .505],
	[.273, .485],
	[.313, .03],
	[0, .03]
].map(([e, t]) => new Oe(e, t));
function Cs() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "panier-de-sol-tresse-photo",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "basket-hollow-shell",
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("latheGeometry", { args: [Ss, 32] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: ys }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: xs,
						thickness: .006,
						screenspace: !1
					})
				]
			}),
			Array.from({ length: 12 }, (e, t) => {
				let n = t / 12 * Math.PI * 2;
				return /* @__PURE__ */ (0, U.jsxs)("mesh", {
					position: [
						Math.cos(n) * .312,
						.2,
						Math.sin(n) * .312
					],
					rotation: [
						0,
						-n,
						Math.sin(n) * .04
					],
					children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.006,
						.008,
						.36,
						6
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: t % 2 == 0 ? bs : "#c4935f" })]
				}, n);
			}),
			[
				.06,
				.13,
				.2,
				.27,
				.34
			].map((e, t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					e,
					0
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
					.327 - t * .009,
					.009,
					6,
					32
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: t % 2 == 0 ? bs : xs })]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/wooden-crib.tsx
var ws = [
	.76,
	.95,
	1.46
];
function Ts({ size: e = ws }) {
	let t = [
		-.56,
		-.37,
		-.18,
		.01,
		.2,
		.39,
		.58
	];
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "wooden-crib",
		scale: [
			e[0] / .76,
			e[1] / .95,
			e[2] / 1.46
		],
		userData: { walkCollider: !0 },
		children: [
			[-.34, .34].flatMap((e) => [-.7, .7].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.475,
					t
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.08,
					.95,
					.06
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#c89f6d" })]
			}, `${e}-${t}`))),
			[-.7, .7].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				name: "crib-end",
				size: [
					.6,
					.3,
					.06
				],
				position: [
					0,
					.8,
					e
				],
				color: "#d4b17e",
				radius: .015
			}, e)),
			[-.365, .365].flatMap((e) => t.map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "crib-side-slat",
				position: [
					e,
					.64,
					t
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.025,
					.48,
					.035
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#c8a06e" })]
			}, `${e}-${t}`))),
			[-.37, .37].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				name: "crib-top-rail",
				size: [
					.02,
					.07,
					1.34
				],
				position: [
					e,
					.91,
					0
				],
				color: "#d0aa77",
				radius: .009
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "crib-mattress-70x140",
				size: [
					.7,
					.14,
					1.4
				],
				position: [
					0,
					.38,
					0
				],
				color: "#f1ece0",
				radius: .035,
				outlineColor: "#aaa08c"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "crib-blanket",
				size: [
					.66,
					.035,
					.62
				],
				position: [
					0,
					.468,
					.26
				],
				color: "#d8d3bd",
				radius: .012,
				outlineColor: "#a39d86"
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/cabin-bed/cabin-bed-finish.ts
var Es = "#c9985f", Ds = "#dfb37a", Os = "#68482f", ks = "#dda5a4", As = "#edc9c4";
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/cabin-bed/timber.tsx
function js({ length: e, position: t, rotation: n = [
	0,
	0,
	0
], radius: i = .036 }) {
	return /* @__PURE__ */ (0, U.jsxs)("mesh", {
		position: t,
		rotation: n,
		castShadow: !0,
		children: [
			/* @__PURE__ */ (0, U.jsx)("capsuleGeometry", { args: [
				i,
				Math.max(.01, e - i * 2),
				6,
				12
			] }),
			/* @__PURE__ */ (0, U.jsx)(I, { color: Ds }),
			/* @__PURE__ */ (0, U.jsx)(r, {
				color: Os,
				thickness: .005,
				screenspace: !1
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/cabin-bed/cushion.tsx
function Ms({ position: e, color: t, scale: n, rotationY: i = 0 }) {
	return /* @__PURE__ */ (0, U.jsxs)("mesh", {
		position: e,
		rotation: [
			0,
			i,
			0
		],
		scale: n,
		castShadow: !0,
		children: [
			/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
				.5,
				24,
				16
			] }),
			/* @__PURE__ */ (0, U.jsx)(I, { color: t }),
			/* @__PURE__ */ (0, U.jsx)(r, {
				color: "#795b58",
				thickness: .005,
				screenspace: !1
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/cabin-bed/plush-bear.tsx
function Ns() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		position: [
			-.23,
			.48,
			.76
		],
		rotation: [
			.04,
			.25,
			0
		],
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				castShadow: !0,
				position: [
					0,
					.12,
					0
				],
				scale: [
					.13,
					.15,
					.1
				],
				children: [
					/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
						1,
						18,
						12
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#a9785d" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						thickness: .005,
						color: "#553d31",
						screenspace: !1
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				castShadow: !0,
				position: [
					0,
					.3,
					0
				],
				scale: [
					.105,
					.1,
					.09
				],
				children: [
					/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
						1,
						18,
						12
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#b48367" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						thickness: .005,
						color: "#553d31",
						screenspace: !1
					})
				]
			}),
			[-.076, .076].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				castShadow: !0,
				position: [
					e,
					.365,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
					.042,
					12,
					8
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#986b52" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.283,
					-.083
				],
				scale: [
					.045,
					.032,
					.018
				],
				children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
					1,
					12,
					8
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#e1b89b" })]
			}),
			[-.035, .035].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.32,
					-.085
				],
				children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
					.009,
					8,
					6
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#3f322b" })]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/cabin-bed/canopy-roof.tsx
function Ps({ side: e, roofAngle: t, roofBeamLength: n }) {
	return /* @__PURE__ */ (0, U.jsx)("group", { children: Array.from({ length: 9 }, (r, i) => {
		let a = -1.02 + i * .255, o = i % 2 == 0 ? -.012 : 0;
		return /* @__PURE__ */ (0, U.jsxs)("mesh", {
			position: [
				e * .278,
				1.385 + o,
				a
			],
			rotation: [
				0,
				0,
				e < 0 ? t : -t
			],
			castShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
				n * .96,
				.014,
				.25,
				2,
				1,
				2
			] }), /* @__PURE__ */ (0, U.jsx)(I, {
				color: i % 2 == 0 ? As : ks,
				side: 2
			})]
		}, a);
	}) });
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/cabin-bed/guard-rail.tsx
function Fs({ z: e }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		position: [
			-.565,
			0,
			e
		],
		children: [[.25, .62].map((e) => /* @__PURE__ */ (0, U.jsx)(js, {
			length: .64,
			radius: .024,
			position: [
				0,
				e,
				0
			],
			rotation: [
				Math.PI / 2,
				0,
				0
			]
		}, e)), [
			-.22,
			-.11,
			0,
			.11,
			.22
		].map((e) => /* @__PURE__ */ (0, U.jsx)(js, {
			length: .35,
			radius: .018,
			position: [
				0,
				.435,
				e
			]
		}, e))]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/cabin-bed/cabin-bed.tsx
function Is() {
	let e = .55, t = 1.18, n = 1.12, i = Math.atan2(.5399999999999998, e), a = Math.hypot(.5399999999999998, e);
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "lit-cabane-bedroom-three-custom",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.14,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						1.08,
						.18,
						2.34,
						3,
						1,
						6
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: Es }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						thickness: .007,
						color: Os,
						screenspace: !1
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.28,
					0
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						1.01,
						.14,
						2.25,
						4,
						2,
						8
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#e9bcb9" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						thickness: .006,
						color: "#785b58",
						screenspace: !1
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.37,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.96,
					.035,
					2.16,
					4,
					1,
					8
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#f0d0ca" })]
			}),
			[-.55, e].flatMap((e) => [-1.18, t].map((t) => /* @__PURE__ */ (0, U.jsx)(js, {
				length: n,
				position: [
					e,
					n / 2,
					t
				]
			}, `${e}-${t}`))),
			[-.55, e].map((e) => /* @__PURE__ */ (0, U.jsx)(js, {
				length: t * 2,
				radius: .035,
				position: [
					e,
					.16,
					0
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				]
			}, `base-${e}`)),
			[-.55, e].map((e) => /* @__PURE__ */ (0, U.jsx)(js, {
				length: t * 2,
				position: [
					e,
					n,
					0
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				]
			}, `eave-${e}`)),
			/* @__PURE__ */ (0, U.jsx)(js, {
				length: t * 2,
				position: [
					0,
					1.66,
					0
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				]
			}),
			[-1.18, t].flatMap((t) => [-1, 1].map((n) => /* @__PURE__ */ (0, U.jsx)(js, {
				length: a,
				position: [
					n * e * .5,
					2.7800000000000002 / 2,
					t
				],
				rotation: [
					0,
					0,
					n * (Math.PI / 2 - i)
				]
			}, `${t}-${n}`))),
			/* @__PURE__ */ (0, U.jsx)(Ps, {
				side: -1,
				roofAngle: i,
				roofBeamLength: a
			}),
			/* @__PURE__ */ (0, U.jsx)(Ps, {
				side: 1,
				roofAngle: i,
				roofBeamLength: a
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					.535,
					.69,
					.03
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.018,
					.82,
					2.18,
					1,
					5,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: As,
					side: 2
				})]
			}),
			[-.83, .83].map((e, t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					-.555,
					.71,
					e
				],
				rotation: [
					0,
					t === 0 ? -.08 : .08,
					t === 0 ? -.025 : .025
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.018,
						.78,
						.58,
						1,
						6,
						5
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, {
						color: As,
						side: 2
					}),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#a36f70",
						thickness: .003,
						screenspace: !1
					})
				]
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(Fs, { z: -.82 }),
			/* @__PURE__ */ (0, U.jsx)(Fs, { z: .82 }),
			/* @__PURE__ */ (0, U.jsx)(Ms, {
				position: [
					-.28,
					.5,
					-.78
				],
				color: "#f0ded5",
				scale: [
					.34,
					.22,
					.42
				],
				rotationY: -.08
			}),
			/* @__PURE__ */ (0, U.jsx)(Ms, {
				position: [
					.05,
					.49,
					-.76
				],
				color: "#c78c91",
				scale: [
					.33,
					.22,
					.41
				],
				rotationY: .05
			}),
			/* @__PURE__ */ (0, U.jsx)(Ms, {
				position: [
					.31,
					.5,
					-.73
				],
				color: "#e5bdb2",
				scale: [
					.31,
					.2,
					.38
				],
				rotationY: .1
			}),
			/* @__PURE__ */ (0, U.jsx)(Ns, {})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/changing-table/changing-table-finish.ts
var Ls = "#eeeae5", Rs = "#f5f1eb", zs = "#b59573", Bs = "#b9956b", Vs = "#d3b58d", Hs = "#776960";
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/changing-table/tapered-changing-leg.tsx
function Us({ x: e, z: t }) {
	return /* @__PURE__ */ (0, U.jsxs)("mesh", {
		position: [
			e,
			.1,
			t
		],
		rotation: [
			t < 0 ? -.05 : .05,
			0,
			e < 0 ? .05 : -.05
		],
		castShadow: !0,
		children: [
			/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
				.022,
				.034,
				.2,
				10
			] }),
			/* @__PURE__ */ (0, U.jsx)(I, { color: zs }),
			/* @__PURE__ */ (0, U.jsx)(r, {
				color: "#6e513b",
				thickness: .004,
				screenspace: !1
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/changing-table/wicker-front.tsx
function Ws() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		position: [
			0,
			.43,
			.226
		],
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.56,
						.3,
						.028
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: Bs }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#75563c",
						thickness: .004,
						screenspace: !1
					})
				]
			}),
			[
				-.22,
				-.146,
				-.073,
				0,
				.073,
				.146,
				.22
			].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					0,
					.019
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.005,
					.005,
					.265,
					6
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: Vs })]
			}, `wicker-v-${e}`)),
			[
				-.105,
				-.035,
				.035,
				.105
			].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					e,
					.021
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.005,
					.005,
					.52,
					6
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#96714d" })]
			}, `wicker-h-${e}`)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.105,
					.03
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.1,
					.025,
					.012
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#6f563f" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/changing-table/changing-table.tsx
function Gs() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "meuble-a-langer-bedroom-two-custom",
		userData: { walkCollider: !0 },
		children: [
			[
				[-.31, -.15],
				[.31, -.15],
				[-.31, .15],
				[.31, .15]
			].map(([e, t]) => /* @__PURE__ */ (0, U.jsx)(Us, {
				x: e,
				z: t
			}, `${e}-${t}`)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.49,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.74,
						.57,
						.42
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: Ls }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: Hs,
						thickness: .006,
						screenspace: !1
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.65,
					.224
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.6,
					.12,
					.02
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#e5dfd7" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.715,
					.229
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.24,
					.018,
					.012
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#b4a99d" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(Ws, {}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.79,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.81,
						.075,
						.47
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: Rs }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: Hs,
						thickness: .006,
						screenspace: !1
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.852,
					.005
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.67,
					.055,
					.385
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#dfbbb7" })]
			}),
			[-.325, .325].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.91,
					.005
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("capsuleGeometry", { args: [
						.034,
						.31,
						6,
						12
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#efd7d1" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#9d7773",
						thickness: .004,
						screenspace: !1
					})
				]
			}, e)),
			[-.17, .17].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.895,
					e
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("capsuleGeometry", { args: [
					.025,
					.58,
					5,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#efd7d1" })]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/cube-storage/cube-storage-finish.ts
var Ks = "#efede8", qs = "#77716a", Js = "#b98f62", Ys = "#d4b181";
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/cube-storage/woven-cube-bin.tsx
function Xs({ x: e, y: t }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		position: [
			e,
			t,
			.038
		],
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.31,
						.27,
						.285
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: Js }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#745438",
						thickness: .004,
						screenspace: !1
					})
				]
			}),
			[
				-.11,
				-.055,
				0,
				.055,
				.11
			].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					0,
					.151
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.009,
					.235,
					.01
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: Ys })]
			}, e)),
			[
				-.09,
				-.03,
				.03,
				.09
			].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					e,
					.153
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.275,
					.009,
					.01
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#956f49" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.095,
					.161
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.09,
					.025,
					.014
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#68503b" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/cube-storage/fox-fabric-bin.tsx
function Zs() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		position: [
			-.195,
			.565,
			.04
		],
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.31,
						.27,
						.285
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#a95f59" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#6e4645",
						thickness: .004,
						screenspace: !1
					})
				]
			}),
			[-.095, .095].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.17,
					.12
				],
				rotation: [
					0,
					0,
					e < 0 ? -.22 : .22
				],
				children: [/* @__PURE__ */ (0, U.jsx)("coneGeometry", { args: [
					.06,
					.13,
					4
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#a95f59" })]
			}, e)),
			[-.065, .065].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.045,
					.153
				],
				children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
					.014,
					10,
					6
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#3f3634" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					-.035,
					.15
				],
				scale: [
					1.35,
					.75,
					.55
				],
				children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
					.07,
					14,
					8
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#ead9ca" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					-.025,
					.191
				],
				children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
					.012,
					10,
					6
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#4a3b39" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/cube-storage/storage-top-giraffe.tsx
function Qs() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "peluche-girafe-rangement-bedroom-two",
		position: [
			.25,
			.82,
			0
		],
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.13,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("capsuleGeometry", { args: [
					.04,
					.16,
					5,
					10
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#c7834f" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.27,
					0
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
						.07,
						14,
						9
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#d9a267" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#765139",
						thickness: .004,
						screenspace: !1
					})
				]
			}),
			[-.032, .032].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.35,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("capsuleGeometry", { args: [
					.009,
					.045,
					4,
					8
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#8d5b3e" })]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/cube-storage/cube-storage.tsx
function $s() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "kallax-bedroom-two-custom",
		userData: { walkCollider: !0 },
		children: [
			[-.39, .39].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.39,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.07,
						.78,
						.34
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: Ks }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: qs,
						thickness: .005,
						screenspace: !1
					})
				]
			}, e)),
			[
				.035,
				.39,
				.745
			].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					e,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.78,
						.07,
						.34
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: Ks }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: qs,
						thickness: .005,
						screenspace: !1
					})
				]
			}, e)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.39,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.07,
					.71,
					.34
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: Ks })]
			}),
			/* @__PURE__ */ (0, U.jsx)(Xs, {
				x: -.195,
				y: .215
			}),
			/* @__PURE__ */ (0, U.jsx)(Xs, {
				x: .195,
				y: .215
			}),
			/* @__PURE__ */ (0, U.jsx)(Xs, {
				x: .195,
				y: .565
			}),
			/* @__PURE__ */ (0, U.jsx)(Zs, {}),
			/* @__PURE__ */ (0, U.jsx)(Qs, {})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/round-wall-display.tsx
function ec() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "etagere-ronde-bedroom-two-photo",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				children: [
					/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
						.36,
						.025,
						8,
						28
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#b17e4a" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#654326",
						thickness: .005,
						screenspace: !1
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					-.08,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.58,
					.035,
					.11
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#c28f57" })]
			}),
			[-.2, .15].map((e, t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.05 + t * .08,
					.07
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
						.09 + t * .015,
						12,
						8
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: t === 0 ? "#dfc9b8" : "#d79aae" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#745c58",
						thickness: .004,
						screenspace: !1
					})
				]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/two-tier-wall-shelves.tsx
function tc() {
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: "etagere-murale-bedroom-two-photo",
		children: [{
			y: 0,
			z: 0
		}, {
			y: .34,
			z: .28
		}].map((e, t) => /* @__PURE__ */ (0, U.jsxs)("group", {
			position: [
				0,
				e.y,
				e.z
			],
			children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.3,
						.045,
						.58
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#ba8050" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#68462c",
						thickness: .005,
						screenspace: !1
					})
				]
			}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					.08,
					.11,
					t === 0 ? -.08 : .08
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
						.095,
						12,
						8
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: t === 0 ? "#eee1d5" : "#d3a89c" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#76645d",
						thickness: .004,
						screenspace: !1
					})
				]
			})]
		}, e.y))
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/shelf-plush.tsx
function nc({ position: e, color: t }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		position: e,
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.055,
					0
				],
				scale: [
					.06,
					.075,
					.052
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
						1,
						14,
						10
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: t }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#75615b",
						thickness: .003,
						screenspace: !1
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.145,
					0
				],
				scale: [
					.052,
					.048,
					.045
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
					1,
					14,
					10
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: t })]
			}),
			[-.038, .038].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.18,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
					.021,
					10,
					8
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: t })]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/three-tier-wall-shelves.tsx
function rc() {
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: "etageres-murales-bedroom-three-photo",
		children: [
			0,
			.36,
			.72
		].map((e, t) => /* @__PURE__ */ (0, U.jsxs)("group", {
			position: [
				0,
				e,
				t * .15
			],
			children: [
				/* @__PURE__ */ (0, U.jsxs)("mesh", {
					castShadow: !0,
					children: [
						/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
							.3,
							.045,
							.58
						] }),
						/* @__PURE__ */ (0, U.jsx)(I, { color: "#b97e4c" }),
						/* @__PURE__ */ (0, U.jsx)(r, {
							color: "#654327",
							thickness: .005,
							screenspace: !1
						})
					]
				}),
				/* @__PURE__ */ (0, U.jsxs)("mesh", {
					position: [
						.125,
						.028,
						0
					],
					rotation: [
						Math.PI / 2,
						0,
						0
					],
					castShadow: !0,
					children: [/* @__PURE__ */ (0, U.jsx)("capsuleGeometry", { args: [
						.012,
						.54,
						4,
						8
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#d6a16f" })]
				}),
				[-.13, .13].slice(0, t === 2 ? 2 : 1).map((e, n) => /* @__PURE__ */ (0, U.jsx)(nc, {
					position: [
						.08,
						.045,
						e
					],
					color: [
						["#d79d9c", "#efe1d2"],
						["#e3c0b2", "#b98c78"],
						["#9eafa2", "#d6a06c"]
					][t][n]
				}, e))
			]
		}, e))
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/slatted-single-bed.tsx
function ic({ size: e }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "slatted-single-bed",
		userData: { walkCollider: !0 },
		scale: [
			e[0] / .98,
			e[1] / .73,
			e[2] / 2.08
		],
		children: [
			[-.46, .46].flatMap((e) => [-1, 1].map((t) => /* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.06,
					.73,
					.08
				],
				position: [
					e,
					.365,
					t
				],
				color: "#f0eee8",
				radius: .003
			}, `${e}-${t}`))),
			[-.46, .46].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.04,
					.16,
					2
				],
				position: [
					e,
					.29,
					0
				],
				color: "#efede7"
			}, e)),
			[-1, 1].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.86,
					.1,
					.04
				],
				position: [
					0,
					.66,
					e
				],
				color: "#f0eee8"
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.9,
					.08,
					2
				],
				position: [
					0,
					.29,
					0
				],
				color: "#c5b495"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.9,
					.16,
					2
				],
				position: [
					0,
					.41,
					0
				],
				color: "#f1eadf",
				radius: .025
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.88,
					.035,
					1.55
				],
				position: [
					0,
					.5075,
					.21
				],
				color: "#e2c9ce",
				radius: .009
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.7,
					.12,
					.4
				],
				position: [
					0,
					.54,
					-.74
				],
				color: "#e5dfcc",
				radius: .035
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.025,
					.14,
					1
				],
				position: [
					.46,
					.6,
					-.44
				],
				color: "#f0eee8"
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/wood-bunk-bed.tsx
function ac({ size: e }) {
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: "wood-bunk-bed",
		userData: { walkCollider: !0 },
		scale: [
			e[0] / 1.015,
			e[1] / 1.6,
			e[2] / 2.08
		],
		children: /* @__PURE__ */ (0, U.jsxs)("group", {
			position: [
				-.0175,
				0,
				0
			],
			children: [
				[-.46, .46].flatMap((e) => [-1, 1].map((t) => /* @__PURE__ */ (0, U.jsx)(K, {
					size: [
						.06,
						1.6,
						.08
					],
					position: [
						e,
						.8,
						t
					],
					color: "#d4bf98",
					radius: .003
				}, `${e}-${t}`))),
				[.29, 1.25].map((e, t) => /* @__PURE__ */ (0, U.jsxs)("group", { children: [
					/* @__PURE__ */ (0, U.jsx)(K, {
						size: [
							.92,
							.06,
							2
						],
						position: [
							0,
							e,
							0
						],
						color: "#c9b089"
					}),
					/* @__PURE__ */ (0, U.jsx)(K, {
						size: [
							.9,
							.14,
							1.98
						],
						position: [
							0,
							e + .1,
							0
						],
						color: t === 0 ? "#647f90" : "#eee1c8",
						radius: .02
					}),
					/* @__PURE__ */ (0, U.jsx)(K, {
						size: [
							.68,
							.1,
							.38
						],
						position: [
							0,
							e + .22,
							-.72
						],
						color: t === 0 ? "#c4c1b7" : "#e4dbc4"
					}),
					[-.46, .46].map((t) => /* @__PURE__ */ (0, U.jsx)(K, {
						size: [
							.04,
							.14,
							2
						],
						position: [
							t,
							e + .11,
							0
						],
						color: "#d4bf98"
					}, t))
				] }, e)),
				[-.46, .46].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
					size: [
						.03,
						.08,
						2
					],
					position: [
						e,
						1.56,
						0
					],
					color: "#d4bf98"
				}, e)),
				[-1, 1].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
					size: [
						.88,
						.08,
						.03
					],
					position: [
						0,
						1.56,
						e
					],
					color: "#d4bf98"
				}, e)),
				[-.22, .22].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
					name: "bunk-ladder-post",
					size: [
						.035,
						1.57,
						.045
					],
					position: [
						.5025,
						.785,
						e + .53
					],
					color: "#d4bf98"
				}, e)),
				[
					.28,
					.57,
					.86,
					1.15
				].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
					name: "bunk-ladder-rung",
					size: [
						.045,
						.045,
						.44
					],
					position: [
						.5025,
						e,
						.53
					],
					color: "#d4bf98"
				}, e))
			]
		})
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/student-storage-desk.tsx
function oc({ size: e }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "student-storage-desk",
		userData: { walkCollider: !0 },
		scale: [
			e[0] / 1.05,
			e[1] / .75,
			e[2] / .5
		],
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					1.05,
					.03,
					.5
				],
				position: [
					0,
					.735,
					0
				],
				color: "#efeee7"
			}),
			[
				-.5125,
				-.2375,
				.5125,
				.2375
			].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.025,
					.72,
					.48
				],
				position: [
					e,
					.36,
					0
				],
				color: "#efeee7"
			}, e)),
			[-.375, .375].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.25,
					.025,
					.48
				],
				position: [
					e,
					.0125,
					0
				],
				color: "#efeee7"
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					1,
					.11,
					.02
				],
				position: [
					0,
					.635,
					-.222
				],
				color: "#e8e5de"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					1,
					.02,
					.48
				],
				position: [
					0,
					.57,
					0
				],
				color: "#efeee7"
			}),
			[
				.16,
				.32,
				.48
			].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.25,
					.145,
					.02
				],
				position: [
					-.375,
					e,
					.23
				],
				color: "#c4a985"
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.25,
					.51,
					.02
				],
				position: [
					.375,
					.3,
					.23
				],
				color: "#c4a985"
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/child-swivel-chair.tsx
function sc({ size: e }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "child-swivel-chair",
		userData: { walkCollider: !0 },
		scale: [
			e[0] / .44,
			e[1] / .79,
			e[2] / .44
		],
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.39,
					.04,
					.37
				],
				position: [
					0,
					.435,
					.02
				],
				color: "#eeeae0",
				radius: .018
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.36,
					.32,
					.025
				],
				position: [
					0,
					.63,
					-.17
				],
				color: "#eeeae0",
				radius: .025
			}),
			[-.07, .07].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.715,
					-.153
				],
				children: [/* @__PURE__ */ (0, U.jsx)("circleGeometry", { args: [.023, 16] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#b6b4a8" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.035,
					.39,
					.035
				],
				position: [
					0,
					.215,
					0
				],
				color: "#e4e0d7"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.44,
					.03,
					.045
				],
				position: [
					0,
					.015,
					0
				],
				color: "#e4e0d7"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.045,
					.03,
					.44
				],
				position: [
					0,
					.015,
					0
				],
				color: "#e4e0d7"
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/keyboard-cross-stand.tsx
function cc() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "keyboard-cross-stand",
		children: [[-.07, .07].flatMap((e) => [-1, 1].map((t) => {
			let n = new M(-.43 * t, .035, e), r = new M(.43 * t, .735, e), i = r.clone().sub(n);
			return /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: n.clone().add(r).multiplyScalar(.5).toArray(),
				quaternion: new S().setFromUnitVectors(new M(0, 1, 0), i.clone().normalize()).toArray(),
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.035,
					i.length(),
					.035
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#24282b" })]
			}, `${e}-${t}`);
		})), [-.43, .43].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
			position: [
				e,
				.0175,
				0
			],
			castShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
				.08,
				.035,
				.34
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#24282b" })]
		}, e))]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/portable-digital-piano.tsx
function lc({ size: e }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "portable-digital-piano",
		userData: { walkCollider: !0 },
		scale: [
			e[0] / 1.3,
			e[1] / .84,
			e[2] / .34
		],
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					1.3,
					.075,
					.31
				],
				position: [
					0,
					.7725,
					0
				],
				color: "#292b2c"
			}),
			Array.from({ length: 52 }, (e, t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					-.596 + t * .0234,
					.817,
					.08
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.022,
					.014,
					.135
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#f1eee5" })]
			}, t)),
			Array.from({ length: 51 }, (e, t) => [
				0,
				1,
				3,
				4,
				5
			].includes(t % 7) ? /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					-.584 + t * .0234,
					.8335,
					.0525
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.012,
					.013,
					.08
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#1d2123" })]
			}, t) : null),
			/* @__PURE__ */ (0, U.jsx)(cc, {})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/split-door-wardrobe.tsx
function uc({ size: e, variant: t }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "split-door-wardrobe",
		userData: { walkCollider: !0 },
		scale: [
			e[0] / 2,
			e[1] / 2.52,
			e[2] / .6
		],
		children: [/* @__PURE__ */ (0, U.jsx)(K, {
			size: [
				2,
				2.52,
				.55
			],
			position: [
				0,
				1.26,
				-.025
			],
			color: t === "sage" ? "#9dA38c" : "#c1bea0",
			radius: .003
		}), [
			-.75,
			-.25,
			.25,
			.75
		].map((e, n) => /* @__PURE__ */ (0, U.jsxs)("group", { children: [[[1.025, 1.946], [2.28, .474]].map(([n, r]) => /* @__PURE__ */ (0, U.jsx)(K, {
			size: [
				.496,
				r,
				.024
			],
			position: [
				e,
				n,
				.262
			],
			color: t === "sage" ? "#949b84" : "#bcb99b",
			radius: .002
		}, n)), [1.05, 2.06].map((r) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
			position: [
				e + (n % 2 == 0 ? .225 : -.225),
				r,
				.284
			],
			rotation: [
				Math.PI / 2,
				0,
				0
			],
			children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
				.016,
				.016,
				.032,
				12
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: t === "sage" ? "#c6b989" : "#353732" })]
		}, r))] }, e))]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/open-cube-bookcase.tsx
function dc({ size: e }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "open-cube-bookcase",
		userData: { walkCollider: !0 },
		scale: [
			e[0] / .8,
			e[1] / 1.5,
			e[2] / .28
		],
		children: [
			[-.39, .39].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.02,
					1.5,
					.28
				],
				position: [
					e,
					.75,
					0
				],
				color: "#8d9788",
				radius: .002
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.76,
					1.5,
					.012
				],
				position: [
					0,
					.75,
					-.134
				],
				color: "#89917f",
				radius: .002
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.02,
					1.5,
					.268
				],
				position: [
					0,
					.75,
					.006
				],
				color: "#8d9788",
				radius: .002
			}),
			[
				.01,
				.38,
				.75,
				1.12,
				1.49
			].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.76,
					.02,
					.268
				],
				position: [
					0,
					e,
					.006
				],
				color: "#8d9788",
				radius: .002
			}, e)),
			[
				.08,
				.45,
				.82,
				1.19
			].flatMap((e) => [
				-.34,
				-.28,
				-.22,
				-.16,
				.08,
				.14,
				.2,
				.26
			].map((t, n) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					t,
					e + .125,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.045,
					.25,
					.18
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: [
					"#476479",
					"#d3bc94",
					"#b67867",
					"#e4dfd0"
				][n % 4] })]
			}, `${e}-${t}`)))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/round-banded-rug.tsx
function fc({ size: e }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "round-banded-rug",
		scale: [
			e[0] / 1.2,
			e[1] / .008,
			e[2] / 1.2
		],
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.002,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.6,
					.6,
					.004,
					64
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#dec9bb" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				rotation: [
					-Math.PI / 2,
					0,
					0
				],
				position: [
					0,
					.006,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("ringGeometry", { args: [
					.49,
					.54,
					64
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#bb9c6c" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				rotation: [
					-Math.PI / 2,
					0,
					0
				],
				position: [
					0,
					.007,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("ringGeometry", { args: [
					.35,
					.41,
					64
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#bb9c6c" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				rotation: [
					-Math.PI / 2,
					0,
					0
				],
				position: [
					0,
					.008,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("circleGeometry", { args: [.29, 64] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#bb9c6c" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/piano-bench.tsx
function pc({ size: e }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "piano-bench",
		userData: { walkCollider: !0 },
		scale: [
			e[0] / .6,
			e[1] / .48,
			e[2] / .32
		],
		children: [/* @__PURE__ */ (0, U.jsx)(K, {
			size: [
				.6,
				.06,
				.32
			],
			position: [
				0,
				.45,
				0
			],
			color: "#292b2c",
			radius: .025
		}), [-.23, .23].flatMap((e) => [-.1, .1].map((t) => /* @__PURE__ */ (0, U.jsx)(K, {
			size: [
				.04,
				.42,
				.04
			],
			position: [
				e,
				.21,
				t
			],
			color: "#24282b"
		}, `${e}-${t}`)))]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/children-wall-poster.tsx
function mc({ size: e, variant: t }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "children-wall-poster",
		scale: [
			e[0] / .3,
			e[1] / .42,
			e[2] / .012
		],
		children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
			position: [
				0,
				.21,
				.001
			],
			children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
				.3,
				.42,
				.002
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#eee9da" })]
		}), /* @__PURE__ */ (0, U.jsx)("group", {
			"position-z": .0021,
			children: t === "rainbow" ? /* @__PURE__ */ (0, U.jsx)("group", {
				"position-y": .18,
				children: [
					"#d5a8ad",
					"#e5cca2",
					"#d4d5aa",
					"#bdd5c8",
					"#b8cbd4"
				].map((e, t) => /* @__PURE__ */ (0, U.jsx)(Ye, {
					layer: 1,
					color: e,
					children: /* @__PURE__ */ (0, U.jsx)("ringGeometry", { args: [
						.117 - t * .018,
						.133 - t * .018,
						32,
						1,
						0,
						Math.PI
					] })
				}, e))
			}) : /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [
				/* @__PURE__ */ (0, U.jsx)("group", {
					"position-y": .22,
					children: /* @__PURE__ */ (0, U.jsx)(Ye, {
						layer: 0,
						color: t === "blue" ? "#526c8c" : "#b56c5d",
						children: /* @__PURE__ */ (0, U.jsx)("planeGeometry", { args: [.24, .31] })
					})
				}),
				/* @__PURE__ */ (0, U.jsx)("group", {
					"position-y": .25,
					children: /* @__PURE__ */ (0, U.jsx)(Ye, {
						layer: 1,
						color: "#e3e1d3",
						children: /* @__PURE__ */ (0, U.jsx)("planeGeometry", { args: [.1, .11] })
					})
				}),
				/* @__PURE__ */ (0, U.jsx)("group", {
					"position-y": .335,
					children: /* @__PURE__ */ (0, U.jsx)(Ye, {
						layer: 1,
						color: "#ceb39a",
						children: /* @__PURE__ */ (0, U.jsx)("circleGeometry", { args: [.03, 16] })
					})
				}),
				/* @__PURE__ */ (0, U.jsx)("group", {
					"position-y": .14,
					children: /* @__PURE__ */ (0, U.jsx)(Ye, {
						layer: 1,
						color: "#e9e5dc",
						children: /* @__PURE__ */ (0, U.jsx)("circleGeometry", { args: [.033, 12] })
					})
				})
			] })
		})]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/square-cube-storage.tsx
function hc({ size: e, variant: t }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "square-cube-storage",
		userData: { walkCollider: !0 },
		scale: [
			e[0] / .77,
			e[1] / .77,
			e[2] / .39
		],
		children: [
			[-.375, .375].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.02,
					.77,
					.39
				],
				position: [
					e,
					.385,
					0
				],
				color: "#f1eee5"
			}, e)),
			[.01, .76].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.73,
					.02,
					.39
				],
				position: [
					0,
					e,
					0
				],
				color: "#f1eee5"
			}, e)),
			t !== "two-compartment" && /* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.73,
					.02,
					.37
				],
				position: [
					0,
					.385,
					0
				],
				color: "#f1eee5"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.02,
					.73,
					.37
				],
				position: [
					0,
					.385,
					0
				],
				color: "#f1eee5"
			}),
			t === "two-compartment" ? /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [
				/* @__PURE__ */ (0, U.jsx)(K, {
					size: [
						.73,
						.73,
						.01
					],
					position: [
						0,
						.385,
						-.19
					],
					color: "#e9e5dc"
				}),
				/* @__PURE__ */ (0, U.jsx)(K, {
					size: [
						.35,
						.69,
						.016
					],
					position: [
						.185,
						.385,
						.181
					],
					color: "#c3a57e"
				}),
				/* @__PURE__ */ (0, U.jsx)(K, {
					size: [
						.32,
						.29,
						.33
					],
					position: [
						-.185,
						.22,
						.01
					],
					color: "#dfdcd1",
					radius: .018
				})
			] }) : /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [[.575, .195].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.33,
					.33,
					.016
				],
				position: [
					.185,
					e,
					.181
				],
				color: "#c3a57e"
			}, e)), [.541, .166].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.32,
					.29,
					.33
				],
				position: [
					-.185,
					e,
					.01
				],
				color: "#dfdcd1",
				radius: .018
			}, e))] })
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/decor/pampas-vase.tsx
function gc() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "vase-pampa-salon",
		children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
			castShadow: !0,
			position: [
				0,
				.13,
				0
			],
			children: [
				/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.08,
					.065,
					.26,
					14
				] }),
				/* @__PURE__ */ (0, U.jsx)(I, { color: "#59705d" }),
				/* @__PURE__ */ (0, U.jsx)(r, {
					color: "#35453a",
					thickness: .006,
					screenspace: !1
				})
			]
		}), [
			-.2,
			-.1,
			0,
			.1,
			.2
		].map((e, t) => /* @__PURE__ */ (0, U.jsxs)("group", {
			rotation: [
				e * .14,
				0,
				e
			],
			children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
				castShadow: !0,
				position: [
					e * .2,
					.49,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.006,
					.008,
					.55,
					6
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#9a7b54" })]
			}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
				castShadow: !0,
				position: [
					e * .42,
					.77,
					0
				],
				rotation: [
					0,
					0,
					e * .8
				],
				scale: [
					.48,
					1.5,
					.48
				],
				children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
					.09,
					10,
					7
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: t % 2 == 0 ? "#d8bc91" : "#c9aa7c" })]
			})]
		}, e))]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/decor/potted-plant.tsx
function _c({ potColor: e = "#c6785e", potOutlineColor: t = "#75493c" }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "potted-plant",
		children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
			position: [
				0,
				.18,
				0
			],
			castShadow: !0,
			receiveShadow: !0,
			children: [
				/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.22,
					.16,
					.36,
					14
				] }),
				/* @__PURE__ */ (0, U.jsx)(I, { color: e }),
				/* @__PURE__ */ (0, U.jsx)(r, {
					color: t,
					thickness: .006
				})
			]
		}), [
			[
				-.12,
				.54,
				0
			],
			[
				.12,
				.62,
				.03
			],
			[
				0,
				.78,
				-.06
			]
		].map((e, t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
			position: e,
			scale: [
				.75,
				1.3,
				.55
			],
			castShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
				.25,
				12,
				8
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: t === 1 ? "#789767" : "#66885c" })]
		}, t))]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/decor/framed-wall-art.tsx
var vc = [
	.8,
	.6,
	.04
];
function yc({ size: e = vc }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "framed-wall-art",
		scale: [
			e[0] / .8,
			e[1] / .6,
			e[2] / .04
		],
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "wall-art-backing",
				size: [
					.8,
					.6,
					.025
				],
				position: [
					0,
					.3,
					.0125
				],
				color: "#b88e5e",
				radius: .01
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "wall-art-canvas",
				size: [
					.7,
					.5,
					.018
				],
				position: [
					0,
					.3,
					.028
				],
				color: "#eee8da",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "wall-art-sun",
				position: [
					-.17,
					.37,
					.039
				],
				children: [/* @__PURE__ */ (0, U.jsx)("circleGeometry", { args: [.105, 24] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#c88762" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "wall-art-sage-plane",
				position: [
					.16,
					.25,
					.039
				],
				rotation: [
					0,
					0,
					-.2
				],
				children: [/* @__PURE__ */ (0, U.jsx)("planeGeometry", { args: [.26, .26] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#8f9c86" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "wall-art-earth-plane",
				position: [
					.04,
					.14,
					.04
				],
				rotation: [
					0,
					0,
					.12
				],
				children: [/* @__PURE__ */ (0, U.jsx)("planeGeometry", { args: [.48, .12] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#b9a07c" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/decor/organic-wall-mirror.tsx
function bc() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "miroir-organique-couloir-custom",
		children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
			scale: [
				.38,
				.55,
				.035
			],
			castShadow: !0,
			children: [
				/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
					1,
					24,
					18
				] }),
				/* @__PURE__ */ (0, U.jsx)(I, { color: "#8e8981" }),
				/* @__PURE__ */ (0, U.jsx)(r, {
					thickness: .005,
					color: "#5f5953",
					screenspace: !1
				})
			]
		}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
			position: [
				0,
				0,
				.04
			],
			scale: [
				.31,
				.46,
				.015
			],
			children: [
				/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
					1,
					24,
					18
				] }),
				/* @__PURE__ */ (0, U.jsx)(I, {
					color: "#9fb2b5",
					emissive: "#dce7e8",
					emissiveIntensity: .12
				}),
				/* @__PURE__ */ (0, U.jsx)(r, {
					thickness: .003,
					color: "#6d7778",
					screenspace: !1
				})
			]
		})]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/decor/tall-ficus.tsx
function xc() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "grand-ficus-salon-custom",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				castShadow: !0,
				position: [
					0,
					.17,
					0
				],
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.19,
						.15,
						.34,
						16
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#8b765b" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#524839",
						thickness: .008,
						screenspace: !1
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				castShadow: !0,
				position: [
					0,
					.88,
					0
				],
				rotation: [
					0,
					0,
					-.04
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.025,
					.045,
					1.15,
					9
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#72543a" })]
			}),
			[
				[
					-.19,
					1.05,
					0,
					-.55
				],
				[
					.18,
					1.15,
					-.03,
					.65
				],
				[
					-.13,
					1.33,
					.04,
					-.25
				],
				[
					.16,
					1.43,
					0,
					.35
				],
				[
					0,
					1.55,
					-.02,
					0
				]
			].map(([e, t, n, r], i) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				castShadow: !0,
				position: [
					e,
					t,
					n
				],
				rotation: [
					0,
					r,
					r * .3
				],
				scale: [
					1.4,
					.58,
					.78
				],
				children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
					.16,
					12,
					8
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: i % 2 == 0 ? "#4b6d38" : "#637f43" })]
			}, i))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/decor/ring-ceramic-vase.tsx
var Sc = [
	.18,
	.3,
	.06
];
function Cc({ size: e = Sc }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "ring-ceramic-vase",
		scale: [
			e[0] / .18,
			e[1] / .3,
			e[2] / .06
		],
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.12,
					.025,
					.06
				],
				position: [
					0,
					.0125,
					0
				],
				color: "#eeeee3",
				radius: .008,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.11,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
					.065,
					.025,
					12,
					32
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#eeeee3" })]
			}),
			[
				-.018,
				0,
				.018
			].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.25,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.002,
					.002,
					.1,
					6
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#b7aa8b" })]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/decor/decorative-globe.tsx
var wc = [
	.278,
	.339,
	.24
];
function Tc({ size: e = wc }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "decorative-globe",
		scale: [
			e[0] / .278,
			e[1] / .339,
			e[2] / .24
		],
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.006,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.075,
					.075,
					.012,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#b39d70" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.046,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.008,
					.008,
					.074,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#b39d70" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.2,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
					.12,
					24,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#e5e5da" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.2,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
					.135,
					.004,
					6,
					36
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#a79570" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/decor/trailing-shelf-plant.tsx
var Ec = [
	.26,
	.57,
	.18
];
function Dc({ size: e = Ec }) {
	let t = [
		[
			-.1,
			.185,
			0
		],
		[
			.1,
			.185,
			0
		],
		[
			-.025,
			.06,
			.08
		],
		[
			.025,
			-.015,
			.09
		],
		[
			-.025,
			-.09,
			.098
		],
		[
			.025,
			-.165,
			.098
		],
		[
			-.025,
			-.24,
			.098
		],
		[
			.025,
			-.315,
			.098
		]
	];
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "trailing-shelf-plant",
		scale: [
			e[0] / .26,
			e[1] / .57,
			e[2] / .18
		],
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.06,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.065,
					.05,
					.12,
					20
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#dfdfd4" })]
			}),
			t.map(([e, t, n], r) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					t,
					n
				],
				scale: [
					.03,
					.035,
					.017
				],
				children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
					1,
					12,
					8
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: r % 2 ? "#668567" : "#476849" })]
			}, r)),
			t.map((e, t) => {
				let n = new M(0, .1, 0), r = new M(...e), i = r.clone().sub(n), a = r.clone().add(n).multiplyScalar(.5), o = new S().setFromUnitVectors(new M(0, 1, 0), i.clone().normalize());
				return /* @__PURE__ */ (0, U.jsxs)("mesh", {
					position: [
						a.x,
						a.y,
						a.z
					],
					quaternion: [
						o.x,
						o.y,
						o.z,
						o.w
					],
					children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.002,
						.002,
						i.length(),
						8
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#526e45" })]
				}, t);
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/decor/abstract-relief-wall-art.tsx
var Oc = [
	.45,
	.65,
	.035
];
function kc({ size: e = Oc, variant: t = "black" }) {
	let n = t === "rose", r = t === "ivory", i = n ? "#986f75" : r ? "#bbbcb9" : "#d9d6cd", a = n ? "#a78087" : r ? "#deded9" : "#242425", o = (e, t, n, r, i, o = 0, s = .014) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
		name: e,
		position: [
			r,
			i,
			.028
		],
		rotation: [
			0,
			0,
			o
		],
		castShadow: !0,
		children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
			t,
			n,
			s
		] }), /* @__PURE__ */ (0, U.jsx)(I, { color: a })]
	}, e);
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "abstract-relief-wall-art",
		scale: [
			e[0] / .45,
			e[1] / .65,
			e[2] / .035
		],
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.325,
					.01
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.45,
					.65,
					.02
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#242628" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.325,
					.021
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.425,
					.625,
					.002
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: i })]
			}),
			r ? /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [
				o("relief-vertical", .08, .3, -.025, .36),
				/* @__PURE__ */ (0, U.jsx)("group", {
					position: [
						0,
						.41,
						.028
					],
					children: /* @__PURE__ */ (0, U.jsx)(Ye, {
						layer: 0,
						color: a,
						children: /* @__PURE__ */ (0, U.jsx)("ringGeometry", { args: [
							.065,
							.13,
							36,
							1,
							0,
							Math.PI
						] })
					})
				}),
				/* @__PURE__ */ (0, U.jsx)("group", {
					position: [
						.012,
						.25,
						.028
					],
					rotation: [
						0,
						0,
						Math.PI
					],
					children: /* @__PURE__ */ (0, U.jsx)(Ye, {
						layer: 0,
						color: a,
						children: /* @__PURE__ */ (0, U.jsx)("ringGeometry", { args: [
							.065,
							.13,
							36,
							1,
							0,
							Math.PI
						] })
					})
				}),
				o("relief-eye", .062, .012, .045, .408)
			] }) : n ? /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [
				o("relief-rose-upper", .15, .19, -.05, .47, .04, .012),
				o("relief-rose-middle", .28, .17, 0, .31, .12),
				o("relief-rose-lower", .17, .14, .07, .14, -.05),
				/* @__PURE__ */ (0, U.jsx)("group", {
					position: [
						-.073,
						.44,
						.035
					],
					children: /* @__PURE__ */ (0, U.jsx)(Ye, {
						layer: 1,
						color: "#4d363d",
						children: /* @__PURE__ */ (0, U.jsx)("ringGeometry", { args: [
							.045,
							.049,
							32
						] })
					})
				})
			] }) : /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [
				o("relief-black-upper", .34, .22, 0, .48),
				o("relief-black-lower", .34, .27, 0, .205),
				o("relief-black-crossbar", .395, .042, 0, .36),
				o("relief-black-stem", .018, .52, .01, .315)
			] })
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/decor/line-portrait-wall-art.tsx
var Ac = [
	.42,
	.62,
	.025
];
function jc({ size: e = Ac, variant: t = "default" }) {
	let n = (0, R.useMemo)(() => {
		let e = t === "mirrored" ? -1 : 1;
		return [
			[
				[-.13, .08],
				[-.04, .13],
				[-.09, .24],
				[-.12, .36],
				[-.08, .49],
				[.02, .53],
				[.11, .47],
				[.09, .37],
				[.03, .34],
				[.07, .29],
				[.01, .27],
				[.03, .21],
				[.12, .13],
				[.13, .07]
			],
			[
				[-.06, .4],
				[0, .42],
				[.015, .39],
				[.065, .4]
			],
			[
				[-.065, .35],
				[-.055, .29],
				[-.02, .28],
				[.04, .27]
			],
			[
				[-.04, .24],
				[0, .235],
				[.04, .245]
			]
		].map((t) => new k(t.map(([t, n]) => new M(t * e, n, .0225))));
	}, [t]);
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "line-portrait-wall-art",
		scale: [
			e[0] / .42,
			e[1] / .62,
			e[2] / .025
		],
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.31,
					.009
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.42,
					.62,
					.018
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#242626" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.31,
					.019
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.403,
					.603,
					.002
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#535555" })]
			}),
			n.map((e, t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "portrait-line",
				children: [/* @__PURE__ */ (0, U.jsx)("tubeGeometry", { args: [
					e,
					40,
					.0025,
					6,
					!1
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#e1e1d9" })]
			}, t))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/sofa-upholstery/tailored-cushion.tsx
function Mc({ size: e, position: t, rotation: n = [
	0,
	0,
	0
], color: r, name: i }) {
	let [a, o, s] = e, c = (0, R.useMemo)(() => {
		let e = Math.min(.055, a / 5, s / 5), t = [];
		for (let n = 0; n < 4; n++) {
			let r = n * Math.PI / 2, i = (n === 0 || n === 3 ? 1 : -1) * (a / 2 - e - .002), o = (n < 2 ? 1 : -1) * (s / 2 - e - .002);
			for (let n = 0; n <= 4; n++) {
				let a = r + n / 4 * Math.PI / 2;
				t.push(new M(i + Math.cos(a) * e, 0, o + Math.sin(a) * e));
			}
		}
		let n = new We(new k(t, !0), 64, .002, 4, !0);
		n.computeBoundingBox();
		let r = n.boundingBox;
		return n.scale(a / (r.max.x - r.min.x), 1, s / (r.max.z - r.min.z)), n;
	}, [a, s]);
	return (0, R.useEffect)(() => () => c.dispose(), [c]), /* @__PURE__ */ (0, U.jsxs)("group", {
		name: i,
		position: t,
		rotation: n,
		children: [/* @__PURE__ */ (0, U.jsx)(K, {
			size: e,
			color: r,
			radius: Math.min(.07, o * .45),
			outlineColor: "#958775"
		}), /* @__PURE__ */ (0, U.jsx)("mesh", {
			geometry: c,
			dispose: null,
			castShadow: !0,
			children: /* @__PURE__ */ (0, U.jsx)(I, { color: "#bbae98" })
		})]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/sofa-upholstery/cozy-sofa-cushions.tsx
function Nc() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "cozy-sofa-cushions",
		children: [
			/* @__PURE__ */ (0, U.jsx)(Mc, {
				name: "terracotta-throw-cushion",
				size: [
					.43,
					.16,
					.43
				],
				position: [
					-1.02,
					.884,
					-.005
				],
				rotation: [
					1.28,
					-.08,
					-.12
				],
				color: "#bf7658"
			}),
			/* @__PURE__ */ (0, U.jsx)(Mc, {
				name: "beige-throw-cushion",
				size: [
					.4,
					.15,
					.4
				],
				position: [
					1.04,
					.876,
					.005
				],
				rotation: [
					1.3,
					.12,
					.15
				],
				color: "#e4cfaa"
			}),
			/* @__PURE__ */ (0, U.jsx)(Mc, {
				name: "clay-lumbar-cushion",
				size: [
					.48,
					.18,
					.26
				],
				position: [
					.55,
					.813,
					.09
				],
				rotation: [
					1.15,
					-.08,
					-.06
				],
				color: "#b86b50"
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/three-seat-sofa.tsx
var Pc = [
	2.2,
	.84,
	.94
];
function Fc({ size: e = Pc, color: t }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "three-seat-sofa",
		scale: [
			e[0] / 2.2,
			e[1] / .84,
			e[2] / .94
		],
		userData: { walkCollider: !0 },
		children: [
			[-.94, .94].flatMap((e) => [-.33, .33].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.065,
					t
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.035,
					.028,
					.13,
					10
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#9d7953" })]
			}, `${e}-${t}`))),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "recessed-oak-base",
				size: [
					2.04,
					.055,
					.79
				],
				position: [
					0,
					.1375,
					.01
				],
				color: "#a78054",
				radius: .012
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					2.12,
					.25,
					.88
				],
				position: [
					0,
					.235,
					.01
				],
				color: t ?? "#c8b9a1",
				radius: .055
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					1.86,
					.47,
					.16
				],
				position: [
					0,
					.545,
					-.38
				],
				color: t ?? "#cbbda7",
				radius: .035
			}),
			[-1, 1].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				name: "sofa-arm",
				size: [
					.22,
					.47,
					.94
				],
				position: [
					e * .99,
					.415,
					0
				],
				color: t ?? "#d6c8b2",
				radius: .07
			}, e)),
			[
				-.596,
				0,
				.596
			].map((e) => /* @__PURE__ */ (0, U.jsxs)("group", { children: [/* @__PURE__ */ (0, U.jsx)(Mc, {
				name: "sofa-seat-cushion",
				size: [
					.582,
					.145,
					.67
				],
				position: [
					e,
					.4175,
					.08
				],
				color: t ?? "#e2d5bf"
			}), /* @__PURE__ */ (0, U.jsx)(Mc, {
				name: "sofa-back-cushion",
				size: [
					.582,
					.17,
					.4
				],
				position: [
					e,
					.631,
					-.275
				],
				rotation: [
					Math.PI / 2 - .12,
					0,
					0
				],
				color: t ?? "#ded0b9"
			})] }, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/rectangular-coffee-table.tsx
var Ic = [
	1.1,
	.4,
	.6
];
function Lc({ size: e = Ic }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "rectangular-coffee-table",
		scale: [
			e[0] / 1.1,
			e[1] / .4,
			e[2] / .6
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "coffee-table-top",
				size: [
					1.1,
					.05,
					.6
				],
				position: [
					0,
					.375,
					0
				],
				color: "#d7b783",
				radius: .018
			}),
			[-.45, .45].flatMap((e) => [-.2, .2].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "coffee-table-leg",
				position: [
					e,
					.175,
					t
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.055,
					.35,
					.055
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#b98f5e" })]
			}, `${e}-${t}`))),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "coffee-table-lower-rail",
				size: [
					.88,
					.035,
					.42
				],
				position: [
					0,
					.13,
					0
				],
				color: "#c9a370",
				radius: .008
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/upholstered-armchair.tsx
var Rc = [
	.85,
	.9,
	.88
];
function zc({ size: e = Rc }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "upholstered-armchair",
		scale: [
			e[0] / .85,
			e[1] / .9,
			e[2] / .88
		],
		userData: { walkCollider: !0 },
		children: [
			[-.31, .31].flatMap((e) => [-.32, .32].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "armchair-foot",
				position: [
					e,
					.07,
					t
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.06,
					.14,
					.06
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#a87d50" })]
			}, `${e}-${t}`))),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.77,
					.19,
					.76
				],
				position: [
					0,
					.245,
					.03
				],
				color: "#c8b9a2",
				radius: .045
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "armchair-seat",
				size: [
					.56,
					.15,
					.58
				],
				position: [
					0,
					.405,
					.09
				],
				color: "#dfd2bc",
				radius: .055
			}),
			[-.335, .335].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				name: "armchair-arm",
				size: [
					.18,
					.58,
					.88
				],
				position: [
					e,
					.36,
					0
				],
				color: "#d2c4ad",
				radius: .07
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "armchair-back",
				size: [
					.67,
					.63,
					.16
				],
				position: [
					0,
					.585,
					-.36
				],
				color: "#d9ccb6",
				radius: .06
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "armchair-back-cushion",
				size: [
					.54,
					.48,
					.12
				],
				position: [
					0,
					.61,
					-.265
				],
				color: "#e4d8c5",
				radius: .055
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/fluffy-rug-layers.tsx
function Bc() {
	let e = (0, R.useMemo)(() => {
		let e = new T(1.99, 2.99, 80, 120);
		e.rotateX(-Math.PI / 2);
		let t = e.attributes.position;
		for (let e = 0; e < t.count; e += 1) {
			let n = t.getX(e), r = t.getZ(e), i = Math.min(1, (.995 - Math.abs(n)) * 40, (1.495 - Math.abs(r)) * 40), a = Math.sin(e * 12.9898 + 78.233) * 43758.5453;
			t.setY(e, .011 + Math.max(0, i) * (.002 + (a - Math.floor(a)) * .002));
		}
		return e.computeVertexNormals(), e;
	}, []);
	return (0, R.useEffect)(() => () => e.dispose(), [e]), /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [/* @__PURE__ */ (0, U.jsx)(K, {
		name: "area-rug-fluffy-base",
		size: [
			2,
			.011,
			3
		],
		position: [
			0,
			.0055,
			0
		],
		color: "#ffffff",
		radius: .005,
		outline: !1
	}), /* @__PURE__ */ (0, U.jsx)("mesh", {
		name: "area-rug-fluffy-pile",
		geometry: e,
		receiveShadow: !0,
		children: /* @__PURE__ */ (0, U.jsx)(I, { color: "#ffffff" })
	})] });
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/rug-patterns.ts
var Vc = {
	terracotta: {
		field: "#dfcdb6",
		outline: "#8d5d49",
		border: "#a85f45",
		blocks: [
			[
				-.54,
				-.66,
				.34,
				.84,
				"#c97858"
			],
			[
				0,
				0,
				.46,
				.62,
				"#9d5945"
			],
			[
				.54,
				.66,
				.34,
				.84,
				"#c97858"
			],
			[
				-.5,
				.78,
				.26,
				.3,
				"#eddcc6"
			],
			[
				.5,
				-.78,
				.26,
				.3,
				"#eddcc6"
			]
		]
	},
	sage: {
		field: "#d7d5bd",
		outline: "#5f6c59",
		border: "#78866b",
		blocks: [
			[
				-.56,
				-.72,
				.42,
				.68,
				"#9baa8a"
			],
			[
				.28,
				-.78,
				.66,
				.3,
				"#b8bea1"
			],
			[
				-.22,
				.04,
				.7,
				.38,
				"#879677"
			],
			[
				.52,
				.52,
				.36,
				.86,
				"#a8b397"
			],
			[
				-.58,
				.82,
				.3,
				.4,
				"#eee5cf"
			]
		]
	},
	ocean: {
		field: "#d5dedc",
		outline: "#476774",
		border: "#587d88",
		blocks: [
			[
				-.42,
				-1,
				.72,
				.24,
				"#7ea3aa"
			],
			[
				.4,
				-.58,
				.74,
				.24,
				"#9bb8ba"
			],
			[
				-.4,
				-.12,
				.74,
				.24,
				"#668c97"
			],
			[
				.4,
				.34,
				.74,
				.24,
				"#86a9ae"
			],
			[
				-.4,
				.8,
				.74,
				.24,
				"#527985"
			]
		]
	},
	playful: {
		field: "#eadfc9",
		outline: "#705f56",
		border: "#94715f",
		blocks: [
			[
				-.55,
				-.86,
				.4,
				.48,
				"#cf7758"
			],
			[
				.02,
				-.9,
				.42,
				.32,
				"#dbad62"
			],
			[
				.58,
				-.62,
				.3,
				.7,
				"#6f9493"
			],
			[
				-.42,
				-.08,
				.62,
				.3,
				"#8fa27e"
			],
			[
				.32,
				.08,
				.46,
				.48,
				"#c58a76"
			],
			[
				-.58,
				.62,
				.28,
				.7,
				"#75939e"
			],
			[
				.18,
				.72,
				.72,
				.32,
				"#d4a554"
			]
		]
	},
	jute: {
		field: "#bd965d",
		outline: "#85643d",
		border: "#a9824c",
		blocks: Array.from({ length: 23 }, (e, t) => [
			0,
			-1.32 + t * .12,
			1.78,
			.045,
			t % 2 ? "#cba66f" : "#d5b783"
		])
	},
	sisal: {
		field: "#c9b891",
		outline: "#827253",
		border: "#665c49",
		blocks: Array.from({ length: 17 }, (e, t) => [
			-.8 + t * .1,
			0,
			.035,
			2.72,
			"#b5a37c"
		])
	},
	persian: {
		field: "#843f3c",
		outline: "#493744",
		border: "#d5ad76",
		blocks: [[
			0,
			0,
			.72,
			.72,
			"#d9b981",
			Math.PI / 4
		], ...[-.62, .62].flatMap((e) => [
			-1.1,
			-.55,
			0,
			.55,
			1.1
		].map((t) => [
			e,
			t,
			.13,
			.13,
			"#344c61",
			Math.PI / 4
		]))]
	},
	kilim: {
		field: "#c49165",
		outline: "#80543c",
		border: "#8d493b",
		blocks: [
			-.9,
			0,
			.9
		].flatMap((e) => [-.44, .44].map((t) => [
			t,
			e,
			.46,
			.46,
			e === 0 ? "#516f70" : "#e0ba7b",
			Math.PI / 4
		]))
	},
	moroccan: {
		field: "#eee3cc",
		outline: "#b2a48a",
		border: "#e0d2b6",
		blocks: [
			-.87,
			0,
			.87
		].flatMap((e) => [-1, 1].flatMap((t) => [-1, 1].map((n) => [
			t * .2,
			e + n * .2,
			.025,
			.53,
			"#5c5249",
			-t * n * Math.PI / 4
		])))
	},
	shag: {
		field: "#e6d8c7",
		outline: "#bcaa95",
		border: "#dccab4",
		blocks: Array.from({ length: 9 }, (e, t) => Array.from({ length: 7 }, (e, n) => [
			-.75 + n * .25,
			-1.2 + t * .3,
			.13,
			.2,
			(t + n) % 2 ? "#efe4d4" : "#d4c2ac"
		])).flat()
	},
	braided: {
		field: "#b6a080",
		outline: "#75634f",
		border: "#91765c",
		blocks: Array.from({ length: 13 }, (e, t) => [-1, 1].map((e) => [
			e * .34,
			-1.2 + t * .2,
			.63,
			.065,
			t % 2 ? "#d0b793" : "#887b61",
			e * .2
		])).flat()
	},
	striped: {
		field: "#eee5d3",
		outline: "#8b9a9c",
		border: "#d3c9b4",
		blocks: Array.from({ length: 7 }, (e, t) => [
			0,
			-1.2 + t * .4,
			1.78,
			.18,
			"#486877"
		])
	},
	checkered: {
		field: "#ede1ce",
		outline: "#8f775e",
		border: "#bfaa8c",
		blocks: Array.from({ length: 8 }, (e, t) => Array.from({ length: 4 }, (e, n) => [
			-.63 + n * .42,
			-1.155 + t * .33,
			.42,
			.33,
			"#9e795b"
		]).filter((e, n) => (t + n) % 2 == 0)).flat()
	},
	scandinavian: {
		field: "#dcded8",
		outline: "#949b96",
		border: "#c4cbc5",
		blocks: [
			[
				-.48,
				-.8,
				.5,
				.75,
				"#889b9a"
			],
			[
				.35,
				0,
				.68,
				.48,
				"#b1a38f"
			],
			[
				-.4,
				.8,
				.45,
				.6,
				"#727f83"
			]
		]
	}
}, Hc = [
	2,
	.015,
	3
], Uc = (e) => Object.hasOwn(Vc, e);
function Wc() {
	return /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [
		/* @__PURE__ */ (0, U.jsx)(K, {
			name: "area-rug-field",
			size: [
				2,
				.01,
				3
			],
			position: [
				0,
				.005,
				0
			],
			color: "#d8cfbd",
			radius: .015,
			outlineColor: "#9b907e"
		}),
		/* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: "area-rug-border",
			position: [
				0,
				.011,
				0
			],
			receiveShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
				1.91,
				.002,
				2.91
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#c5b79f" })]
		}),
		[
			-.54,
			0,
			.54
		].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: "area-rug-band",
			position: [
				e,
				.013,
				0
			],
			receiveShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
				.05,
				.004,
				2.76
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#aaa48d" })]
		}, e))
	] });
}
function Gc({ variant: e }) {
	let t = Vc[e];
	return /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [
		/* @__PURE__ */ (0, U.jsx)(K, {
			name: "area-rug-field",
			size: [
				2,
				.013,
				3
			],
			position: [
				0,
				.0065,
				0
			],
			color: t.field,
			radius: .015,
			outlineColor: t.outline
		}),
		[-.945, .945].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: "area-rug-border-side",
			position: [
				e,
				.014,
				0
			],
			receiveShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
				.06,
				.002,
				2.91
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: t.border })]
		}, `side-${e}`)),
		[-1.425, 1.425].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: "area-rug-border-end",
			position: [
				0,
				.014,
				e
			],
			receiveShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
				1.83,
				.002,
				.06
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: t.border })]
		}, `end-${e}`)),
		t.blocks.map(([t, n, r, i, a, o = 0], s) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: `area-rug-${e}-block`,
			position: [
				t,
				.014,
				n
			],
			rotation: [
				0,
				o,
				0
			],
			receiveShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
				r,
				.002,
				i
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: a })]
		}, `${e}-${s}`))
	] });
}
function Kc({ size: e = Hc, variant: t = "default" }) {
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: "neutral-area-rug",
		scale: [
			e[0] / 2,
			e[1] / .015,
			e[2] / 3
		],
		children: t === "fluffy" ? /* @__PURE__ */ (0, U.jsx)(Bc, {}) : Uc(t) ? /* @__PURE__ */ (0, U.jsx)(Gc, { variant: t }) : /* @__PURE__ */ (0, U.jsx)(Wc, {})
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/low-media-console.tsx
var qc = [
	1.6,
	.55,
	.42
];
function Jc({ size: e = qc }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "low-media-console",
		scale: [
			e[0] / 1.6,
			e[1] / .55,
			e[2] / .42
		],
		userData: { walkCollider: !0 },
		children: [
			[-.68, .68].flatMap((e) => [-.15, .15].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.035,
					t
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.05,
					.07,
					.05
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#9d754c" })]
			}, `${e}-${t}`))),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					1.6,
					.45,
					.38
				],
				position: [
					0,
					.295,
					-.01
				],
				color: "#d7b782",
				radius: .012
			}),
			[-.54, .54].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				name: "media-console-door",
				size: [
					.45,
					.34,
					.03
				],
				position: [
					e,
					.3,
					.195
				],
				color: "#e5dfd2",
				radius: .008
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "media-console-open-niche",
				size: [
					.45,
					.27,
					.03
				],
				position: [
					0,
					.335,
					.195
				],
				color: "#9b7a52",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "media-console-cable-port",
				position: [
					0,
					.39,
					-.205
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.035,
					.035,
					.01,
					14
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#594f43" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					1.6,
					.03,
					.42
				],
				position: [
					0,
					.535,
					0
				],
				color: "#cfa873",
				radius: .006
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/upholstered-ottoman.tsx
var Yc = [
	.7,
	.42,
	.55
];
function Xc({ size: e = Yc }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "upholstered-ottoman",
		scale: [
			e[0] / .7,
			e[1] / .42,
			e[2] / .55
		],
		userData: { walkCollider: !0 },
		children: [
			[-.27, .27].flatMap((e) => [-.195, .195].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "ottoman-foot",
				position: [
					e,
					.045,
					t
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.055,
					.09,
					.055
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#a67d51" })]
			}, `${e}-${t}`))),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.64,
					.23,
					.49
				],
				position: [
					0,
					.205,
					0
				],
				color: "#c9b9a1",
				radius: .045
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "ottoman-cushion",
				size: [
					.7,
					.17,
					.55
				],
				position: [
					0,
					.335,
					0
				],
				color: "#ded1ba",
				radius: .065
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "ottoman-seam",
				position: [
					0,
					.405,
					.273
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.58,
					.008,
					.004
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#aa9c85" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/sectional-sofa.tsx
function Zc({ variant: e = "default", color: t } = {}) {
	let n = e === "right" || e === "cozy-right", r = e === "cozy" || e === "cozy-right";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "canape-salon-custom",
		scale: [
			n ? -1 : 1,
			1,
			1
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					2.72,
					.32,
					.72
				],
				position: [
					0,
					.31,
					.02
				],
				color: t ?? "#d2ccbd",
				radius: .055
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.88,
					.32,
					1.56
				],
				position: [
					-.91,
					.31,
					.43
				],
				color: t ?? "#d2ccbd",
				radius: .055
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "upholstered-back-frame",
				size: [
					2.55,
					.65,
					.16
				],
				position: [
					0,
					.675,
					-.33
				],
				color: t ?? "#d2ccbd",
				radius: .045
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "oak-front-rail",
				size: [
					1.77,
					.055,
					.64
				],
				position: [
					.455,
					.1575,
					.02
				],
				color: "#ad895b",
				radius: .012
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "oak-chaise-rail",
				size: [
					.82,
					.055,
					1.48
				],
				position: [
					-.91,
					.1575,
					.43
				],
				color: "#ad895b",
				radius: .012
			}),
			/* @__PURE__ */ (0, U.jsx)(Mc, {
				name: "chaise-seat-cushion",
				size: [
					.84,
					.2,
					1.39
				],
				position: [
					-.91,
					.57,
					.39
				],
				color: t ?? "#eee7d8"
			}),
			[-.02, .84].map((e) => /* @__PURE__ */ (0, U.jsx)(Mc, {
				name: "sectional-seat-cushion",
				size: [
					.8,
					.2,
					.63
				],
				position: [
					e,
					.57,
					.08
				],
				color: t ?? "#e9e4d7"
			}, e)),
			[
				-.91,
				-.02,
				.84
			].map((e) => /* @__PURE__ */ (0, U.jsx)(Mc, {
				name: "sectional-back-cushion",
				size: [
					.81,
					.2,
					.6
				],
				position: [
					e,
					.927,
					-.29
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				color: t ?? "#e9e4d7"
			}, e)),
			[-1.37, 1.37].map((e) => /* @__PURE__ */ (0, U.jsxs)("group", { children: [/* @__PURE__ */ (0, U.jsx)(K, {
				name: "sectional-arm",
				size: [
					.19,
					.59,
					.86
				],
				position: [
					e,
					.455,
					.01
				],
				color: t ?? "#ded9ca",
				radius: .065
			}), /* @__PURE__ */ (0, U.jsx)(Mc, {
				name: "sectional-arm-pad",
				size: [
					.18,
					.13,
					.84
				],
				position: [
					e,
					.765,
					.01
				],
				color: t ?? "#eee7d8"
			})] }, e)),
			r && /* @__PURE__ */ (0, U.jsx)(Nc, {}),
			[
				[-1.23, -.25],
				[-.55, -.25],
				[.48, -.25],
				[1.23, -.25],
				[-1.23, 1.04],
				[-.58, 1.04],
				[.48, .27],
				[1.23, .27]
			].map(([e, t]) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.085,
					t
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.05,
					.035,
					.17,
					10
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#b38d59" })]
			}, `${e}-${t}`))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/media-wall/cabinet-box.tsx
function Qc({ size: e, position: t, color: n, outlineThickness: i = .006 }) {
	return /* @__PURE__ */ (0, U.jsxs)("mesh", {
		position: t,
		castShadow: !0,
		receiveShadow: !0,
		children: [
			/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [...e] }),
			/* @__PURE__ */ (0, U.jsx)(I, { color: n }),
			/* @__PURE__ */ (0, U.jsx)(r, {
				color: "#777066",
				thickness: i,
				screenspace: !1
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/media-wall/cabinet-joint.tsx
function $c({ size: e, position: t }) {
	return /* @__PURE__ */ (0, U.jsxs)("mesh", {
		position: t,
		children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [...e] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#aaa49a" })]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/media-wall/media-wall.tsx
function el() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "mur-tv-salon-custom",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(Qc, {
				size: [
					2.25,
					.4,
					.38
				],
				position: [
					0,
					.2,
					0
				],
				color: "#eeeae1"
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.2,
					-.201
				],
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					2.18,
					.34,
					.018
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#f7f4ed" })]
			}),
			[-.38, .38].map((e) => /* @__PURE__ */ (0, U.jsx)($c, {
				size: [
					.006,
					.32,
					.008
				],
				position: [
					e,
					.2,
					-.214
				]
			}, e)),
			/* @__PURE__ */ (0, U.jsx)($c, {
				size: [
					2.18,
					.006,
					.008
				],
				position: [
					0,
					.2,
					-.214
				]
			}),
			/* @__PURE__ */ (0, U.jsx)(Qc, {
				size: [
					2.31,
					.065,
					.43
				],
				position: [
					0,
					.4325,
					0
				],
				color: "#f4f0e8",
				outlineThickness: .007
			}),
			/* @__PURE__ */ (0, U.jsxs)("group", {
				position: [
					-1.65,
					0,
					0
				],
				children: [
					/* @__PURE__ */ (0, U.jsx)(Qc, {
						size: [
							1.05,
							.72,
							.38
						],
						position: [
							0,
							.36,
							0
						],
						color: "#eeeae1"
					}),
					/* @__PURE__ */ (0, U.jsxs)("mesh", {
						position: [
							0,
							.36,
							-.201
						],
						receiveShadow: !0,
						children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
							.99,
							.66,
							.018
						] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#f7f4ed" })]
					}),
					/* @__PURE__ */ (0, U.jsx)($c, {
						size: [
							.006,
							.64,
							.008
						],
						position: [
							0,
							.36,
							-.214
						]
					}),
					/* @__PURE__ */ (0, U.jsx)($c, {
						size: [
							.98,
							.006,
							.008
						],
						position: [
							0,
							.36,
							-.214
						]
					}),
					/* @__PURE__ */ (0, U.jsx)(Qc, {
						size: [
							1.09,
							.06,
							.42
						],
						position: [
							0,
							.75,
							0
						],
						color: "#f4f0e8",
						outlineThickness: .006
					}),
					/* @__PURE__ */ (0, U.jsxs)("mesh", {
						castShadow: !0,
						position: [
							.22,
							.89,
							-.04
						],
						children: [
							/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
								.08,
								.1,
								.22,
								12
							] }),
							/* @__PURE__ */ (0, U.jsx)(I, { color: "#d6c0a2" }),
							/* @__PURE__ */ (0, U.jsx)(r, {
								color: "#75644f",
								thickness: .005,
								screenspace: !1
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsx)("group", {
				position: [
					.92,
					.465,
					-.08
				],
				children: /* @__PURE__ */ (0, U.jsx)(gc, {})
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/round-coffee-table.tsx
function tl() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "petite-table-basse-salon-custom",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				castShadow: !0,
				receiveShadow: !0,
				position: [
					0,
					.34,
					0
				],
				scale: [
					1,
					1,
					.9
				],
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.34,
						.34,
						.06,
						36
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#d0a16a" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#654728",
						thickness: .008,
						screenspace: !1
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				castShadow: !0,
				receiveShadow: !0,
				position: [
					0,
					.376,
					0
				],
				scale: [
					1,
					1,
					.9
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.325,
					.335,
					.018,
					36
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#ddb27f" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.305,
					0
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				scale: [
					1,
					1,
					.9
				],
				children: [/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
					.28,
					.018,
					7,
					32
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#9b7045" })]
			}),
			[
				0,
				Math.PI * 2 / 3,
				Math.PI * 4 / 3
			].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					Math.cos(e) * .16,
					.155,
					Math.sin(e) * .13
				],
				rotation: [
					Math.sin(e) * .08,
					0,
					Math.cos(e) * .08
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.022,
						.032,
						.307,
						10
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#b9854f" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#654728",
						thickness: .004,
						screenspace: !1
					})
				]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/two-seat-loveseat.tsx
var nl = [
	1.6,
	.82,
	.88
];
function rl({ size: e = nl } = {}) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "two-seat-loveseat",
		scale: [
			e[0] / 1.6,
			e[1] / .82,
			e[2] / .88
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "foot",
				size: [
					.06,
					.14,
					.06
				],
				position: [
					-.65,
					.07,
					-.32
				],
				color: "#bd9367",
				radius: .003,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "foot",
				size: [
					.06,
					.14,
					.06
				],
				position: [
					-.65,
					.07,
					.32
				],
				color: "#bd9367",
				radius: .003,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "foot",
				size: [
					.06,
					.14,
					.06
				],
				position: [
					.65,
					.07,
					-.32
				],
				color: "#bd9367",
				radius: .003,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "foot",
				size: [
					.06,
					.14,
					.06
				],
				position: [
					.65,
					.07,
					.32
				],
				color: "#bd9367",
				radius: .003,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "base",
				size: [
					1.5,
					.2,
					.8
				],
				position: [
					0,
					.24,
					0
				],
				color: "#64796b",
				radius: .04
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "back",
				size: [
					1.36,
					.48,
					.16
				],
				position: [
					0,
					.58,
					-.36
				],
				color: "#64796b",
				radius: .05
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "arm",
				size: [
					.15,
					.4,
					.88
				],
				position: [
					-.725,
					.42,
					0
				],
				color: "#718775",
				radius: .05
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "arm",
				size: [
					.15,
					.4,
					.88
				],
				position: [
					.725,
					.42,
					0
				],
				color: "#718775",
				radius: .05
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "seat-cushion",
				size: [
					.64,
					.16,
					.65
				],
				position: [
					-.33,
					.42,
					.075
				],
				color: "#91a18b",
				radius: .045
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "seat-cushion",
				size: [
					.64,
					.16,
					.65
				],
				position: [
					.33,
					.42,
					.075
				],
				color: "#91a18b",
				radius: .045
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "back-cushion",
				size: [
					.64,
					.34,
					.14
				],
				position: [
					-.33,
					.63,
					-.22
				],
				color: "#91a18b",
				radius: .04
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "back-cushion",
				size: [
					.64,
					.34,
					.14
				],
				position: [
					.33,
					.63,
					-.22
				],
				color: "#91a18b",
				radius: .04
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/indoor-chaise-longue.tsx
var il = [
	.8,
	.8,
	1.65
];
function al({ size: e = il } = {}) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "indoor-chaise-longue",
		scale: [
			e[0] / .8,
			e[1] / .8,
			e[2] / 1.65
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "foot",
				size: [
					.06,
					.15,
					.06
				],
				position: [
					-.3,
					.075,
					-.68
				],
				color: "#bd9367",
				radius: .003,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "foot",
				size: [
					.06,
					.15,
					.06
				],
				position: [
					-.3,
					.075,
					.68
				],
				color: "#bd9367",
				radius: .003,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "foot",
				size: [
					.06,
					.15,
					.06
				],
				position: [
					.3,
					.075,
					-.68
				],
				color: "#bd9367",
				radius: .003,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "foot",
				size: [
					.06,
					.15,
					.06
				],
				position: [
					.3,
					.075,
					.68
				],
				color: "#bd9367",
				radius: .003,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "frame",
				size: [
					.8,
					.15,
					1.65
				],
				position: [
					0,
					.225,
					0
				],
				color: "#996b4b",
				radius: .025
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "chaise-cushion",
				size: [
					.8,
					.17,
					1.65
				],
				position: [
					0,
					.385,
					0
				],
				color: "#ba7960",
				radius: .06
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "headrest",
				size: [
					.8,
					.33,
					.3
				],
				position: [
					0,
					.635,
					-.675
				],
				color: "#c68b70",
				radius: .07
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/pedestal-side-table.tsx
var ol = [
	.5,
	.55,
	.5
];
function sl({ size: e = ol } = {}) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "pedestal-side-table",
		scale: [
			e[0] / .5,
			e[1] / .55,
			e[2] / .5
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.525,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.25,
					.25,
					.05,
					32
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#cba67c" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.265,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.065,
					.085,
					.47,
					20
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#ae8058" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.015,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.2,
					.2,
					.03,
					32
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#ae8058" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/c-shaped-sofa-table.tsx
var cl = [
	.4,
	.62,
	.45
];
function ll({ size: e = cl } = {}) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "c-shaped-sofa-table",
		scale: [
			e[0] / .4,
			e[1] / .62,
			e[2] / .45
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "top",
				size: [
					.4,
					.035,
					.45
				],
				position: [
					0,
					.6025,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "floor-plate",
				size: [
					.36,
					.025,
					.43
				],
				position: [
					0,
					.0125,
					0
				],
				color: "#424748",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "rear-upright",
				size: [
					.035,
					.56,
					.035
				],
				position: [
					0,
					.305,
					-.1975
				],
				color: "#424748",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "top-bracket",
				size: [
					.3,
					.025,
					.035
				],
				position: [
					0,
					.5725,
					-.1975
				],
				color: "#424748",
				radius: .006
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/blanket-storage-trunk.tsx
var ul = [
	.95,
	.46,
	.48
];
function dl({ size: e = ul } = {}) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "blanket-storage-trunk",
		scale: [
			e[0] / .95,
			e[1] / .46,
			e[2] / .48
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "foot",
				size: [
					.06,
					.06,
					.06
				],
				position: [
					-.38,
					.03,
					-.15
				],
				color: "#bd9367",
				radius: .003,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "foot",
				size: [
					.06,
					.06,
					.06
				],
				position: [
					-.38,
					.03,
					.15
				],
				color: "#bd9367",
				radius: .003,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "foot",
				size: [
					.06,
					.06,
					.06
				],
				position: [
					.38,
					.03,
					-.15
				],
				color: "#bd9367",
				radius: .003,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "foot",
				size: [
					.06,
					.06,
					.06
				],
				position: [
					.38,
					.03,
					.15
				],
				color: "#bd9367",
				radius: .003,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "chest",
				size: [
					.93,
					.36,
					.45
				],
				position: [
					0,
					.24,
					-.005
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "lid",
				size: [
					.95,
					.04,
					.48
				],
				position: [
					0,
					.44,
					0
				],
				color: "#cbaa82",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "latch",
				size: [
					.055,
					.07,
					.02
				],
				position: [
					0,
					.38,
					.23
				],
				color: "#9b7840",
				radius: .003
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/floor-magazine-rack.tsx
var fl = [
	.42,
	.45,
	.3
];
function pl({ size: e = fl } = {}) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "floor-magazine-rack",
		scale: [
			e[0] / .42,
			e[1] / .45,
			e[2] / .3
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "bottom",
				size: [
					.42,
					.035,
					.3
				],
				position: [
					0,
					.0175,
					0
				],
				color: "#bd9367",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "front",
				size: [
					.38,
					.19,
					.025
				],
				position: [
					0,
					.13,
					.1375
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "back",
				size: [
					.38,
					.27,
					.025
				],
				position: [
					0,
					.17,
					-.1375
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "side-cheek",
				size: [
					.02,
					.42,
					.3
				],
				position: [
					-.2,
					.225,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "side-cheek",
				size: [
					.02,
					.42,
					.3
				],
				position: [
					.2,
					.225,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "carry-bar",
				size: [
					.38,
					.035,
					.035
				],
				position: [
					0,
					.4325,
					0
				],
				color: "#bd9367",
				radius: .006
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/vinyl-record-cabinet.tsx
var ml = [
	.9,
	.7,
	.4
];
function hl({ size: e = ml } = {}) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "vinyl-record-cabinet",
		scale: [
			e[0] / .9,
			e[1] / .7,
			e[2] / .4
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "foot",
				size: [
					.06,
					.12,
					.06
				],
				position: [
					-.36,
					.06,
					-.12
				],
				color: "#bd9367",
				radius: .003,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "foot",
				size: [
					.06,
					.12,
					.06
				],
				position: [
					-.36,
					.06,
					.12
				],
				color: "#bd9367",
				radius: .003,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "foot",
				size: [
					.06,
					.12,
					.06
				],
				position: [
					.36,
					.06,
					-.12
				],
				color: "#bd9367",
				radius: .003,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "foot",
				size: [
					.06,
					.12,
					.06
				],
				position: [
					.36,
					.06,
					.12
				],
				color: "#bd9367",
				radius: .003,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "bottom",
				size: [
					.9,
					.03,
					.4
				],
				position: [
					0,
					.135,
					0
				],
				color: "#805c46",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "top",
				size: [
					.9,
					.03,
					.4
				],
				position: [
					0,
					.685,
					0
				],
				color: "#956e51",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "side",
				size: [
					.03,
					.52,
					.4
				],
				position: [
					-.435,
					.41,
					0
				],
				color: "#805c46",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "side",
				size: [
					.03,
					.52,
					.4
				],
				position: [
					.435,
					.41,
					0
				],
				color: "#805c46",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "back",
				size: [
					.84,
					.52,
					.02
				],
				position: [
					0,
					.41,
					-.19
				],
				color: "#684a39",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "record-divider",
				size: [
					.02,
					.52,
					.38
				],
				position: [
					-.22,
					.41,
					.01
				],
				color: "#956e51",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "record-divider",
				size: [
					.02,
					.52,
					.38
				],
				position: [
					0,
					.41,
					.01
				],
				color: "#956e51",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "record-divider",
				size: [
					.02,
					.52,
					.38
				],
				position: [
					.22,
					.41,
					.01
				],
				color: "#956e51",
				radius: .006
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/open-display-bookcase.tsx
var gl = [
	1,
	1.6,
	.35
];
function _l({ size: e = gl } = {}) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "open-display-bookcase",
		scale: [
			e[0] / 1,
			e[1] / 1.6,
			e[2] / .35
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "side",
				size: [
					.035,
					1.6,
					.35
				],
				position: [
					-.4825,
					.8,
					0
				],
				color: "#bd9367",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "side",
				size: [
					.035,
					1.6,
					.35
				],
				position: [
					.4825,
					.8,
					0
				],
				color: "#bd9367",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "shelf",
				size: [
					.93,
					.03,
					.35
				],
				position: [
					0,
					.035,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "shelf",
				size: [
					.93,
					.03,
					.35
				],
				position: [
					0,
					.42,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "shelf",
				size: [
					.93,
					.03,
					.35
				],
				position: [
					0,
					.805,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "shelf",
				size: [
					.93,
					.03,
					.35
				],
				position: [
					0,
					1.19,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "shelf",
				size: [
					.93,
					.03,
					.35
				],
				position: [
					0,
					1.585,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "divider",
				size: [
					.03,
					.355,
					.35
				],
				position: [
					-.15,
					.2275,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "divider",
				size: [
					.03,
					.355,
					.35
				],
				position: [
					.18,
					.6125,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "divider",
				size: [
					.03,
					.355,
					.35
				],
				position: [
					-.15,
					.9975,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "divider",
				size: [
					.03,
					.355,
					.35
				],
				position: [
					.18,
					1.3825,
					0
				],
				color: "#bd9367",
				radius: .006
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/two-tier-bar-cart.tsx
var vl = [
	.7,
	.8,
	.42
];
function yl({ size: e = vl } = {}) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "two-tier-bar-cart",
		scale: [
			e[0] / .7,
			e[1] / .8,
			e[2] / .42
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "wheel",
				position: [
					-.29,
					.04,
					-.15
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.04,
					.04,
					.03,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#414442" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "wheel",
				position: [
					-.29,
					.04,
					.15
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.04,
					.04,
					.03,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#414442" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "wheel",
				position: [
					.29,
					.04,
					-.15
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.04,
					.04,
					.03,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#414442" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "wheel",
				position: [
					.29,
					.04,
					.15
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.04,
					.04,
					.03,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#414442" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "post",
				size: [
					.025,
					.66,
					.025
				],
				position: [
					-.3,
					.41,
					-.17
				],
				color: "#aa8851",
				radius: .004
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "post",
				size: [
					.025,
					.66,
					.025
				],
				position: [
					-.3,
					.41,
					.17
				],
				color: "#aa8851",
				radius: .004
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "post",
				size: [
					.025,
					.66,
					.025
				],
				position: [
					.3,
					.41,
					-.17
				],
				color: "#aa8851",
				radius: .004
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "post",
				size: [
					.025,
					.66,
					.025
				],
				position: [
					.3,
					.41,
					.17
				],
				color: "#aa8851",
				radius: .004
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "tray",
				size: [
					.7,
					.035,
					.42
				],
				position: [
					0,
					.14,
					0
				],
				color: "#795943",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "tray",
				size: [
					.7,
					.035,
					.42
				],
				position: [
					0,
					.65,
					0
				],
				color: "#795943",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "tray-rim",
				size: [
					.7,
					.05,
					.02
				],
				position: [
					0,
					.1825,
					-.2
				],
				color: "#aa8851",
				radius: .004
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "tray-rim",
				size: [
					.7,
					.05,
					.02
				],
				position: [
					0,
					.1825,
					.2
				],
				color: "#aa8851",
				radius: .004
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "tray-rim",
				size: [
					.7,
					.05,
					.02
				],
				position: [
					0,
					.6925,
					-.2
				],
				color: "#aa8851",
				radius: .004
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "tray-rim",
				size: [
					.7,
					.05,
					.02
				],
				position: [
					0,
					.6925,
					.2
				],
				color: "#aa8851",
				radius: .004
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "handle-support",
				size: [
					.025,
					.13,
					.025
				],
				position: [
					.3,
					.735,
					-.17
				],
				color: "#aa8851",
				radius: .004
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "handle-support",
				size: [
					.025,
					.13,
					.025
				],
				position: [
					.3,
					.735,
					.17
				],
				color: "#aa8851",
				radius: .004
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "push-handle",
				size: [
					.025,
					.025,
					.365
				],
				position: [
					.3,
					.7875,
					0
				],
				color: "#aa8851",
				radius: .004
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/slatted-room-divider.tsx
var bl = [
	1.2,
	1.8,
	.4
];
function xl({ size: e = bl } = {}) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "slatted-room-divider",
		scale: [
			e[0] / 1.2,
			e[1] / 1.8,
			e[2] / .4
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "stabilizing-foot",
				size: [
					.14,
					.04,
					.4
				],
				position: [
					-.45,
					.02,
					0
				],
				color: "#bd9367",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "stabilizing-foot",
				size: [
					.14,
					.04,
					.4
				],
				position: [
					.45,
					.02,
					0
				],
				color: "#bd9367",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "bottom-rail",
				size: [
					1.2,
					.08,
					.06
				],
				position: [
					0,
					.08,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "top-rail",
				size: [
					1.2,
					.06,
					.06
				],
				position: [
					0,
					1.77,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "vertical-slat",
				size: [
					.045,
					1.62,
					.045
				],
				position: [
					-.55,
					.93,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "vertical-slat",
				size: [
					.045,
					1.62,
					.045
				],
				position: [
					-.45,
					.93,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "vertical-slat",
				size: [
					.045,
					1.62,
					.045
				],
				position: [
					-.35,
					.93,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "vertical-slat",
				size: [
					.045,
					1.62,
					.045
				],
				position: [
					-.25,
					.93,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "vertical-slat",
				size: [
					.045,
					1.62,
					.045
				],
				position: [
					-.15,
					.93,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "vertical-slat",
				size: [
					.045,
					1.62,
					.045
				],
				position: [
					-.05,
					.93,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "vertical-slat",
				size: [
					.045,
					1.62,
					.045
				],
				position: [
					.05,
					.93,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "vertical-slat",
				size: [
					.045,
					1.62,
					.045
				],
				position: [
					.15,
					.93,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "vertical-slat",
				size: [
					.045,
					1.62,
					.045
				],
				position: [
					.25,
					.93,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "vertical-slat",
				size: [
					.045,
					1.62,
					.045
				],
				position: [
					.35,
					.93,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "vertical-slat",
				size: [
					.045,
					1.62,
					.045
				],
				position: [
					.45,
					.93,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "vertical-slat",
				size: [
					.045,
					1.62,
					.045
				],
				position: [
					.55,
					.93,
					0
				],
				color: "#bd9367",
				radius: .006
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/curved-sofa-base.tsx
function Sl() {
	let e = (0, R.useMemo)(() => {
		let e = new j();
		return e.moveTo(-1.28, -.3), e.bezierCurveTo(-1.28, -.53, -.5, -.53, 0, -.53), e.bezierCurveTo(.5, -.53, 1.28, -.53, 1.28, -.3), e.lineTo(1.28, .28), e.bezierCurveTo(1.28, .53, .4, .53, 0, .53), e.bezierCurveTo(-.4, .53, -1.28, .53, -1.28, .28), e.closePath(), e;
	}, []);
	return /* @__PURE__ */ (0, U.jsxs)("group", { children: [[-1, 1].flatMap((e) => [-.35, .35].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
		position: [
			e,
			.05,
			t
		],
		children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
			.055,
			.1,
			.055
		] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#545851" })]
	}, `${e}-${t}`))), /* @__PURE__ */ (0, U.jsxs)("mesh", {
		name: "curved-sofa-continuous-base",
		rotation: [
			-Math.PI / 2,
			0,
			0
		],
		position: [
			0,
			.1,
			0
		],
		castShadow: !0,
		receiveShadow: !0,
		children: [/* @__PURE__ */ (0, U.jsx)("extrudeGeometry", { args: [e, {
			depth: .23,
			bevelEnabled: !0,
			bevelThickness: .02,
			bevelSize: .02,
			bevelSegments: 2,
			curveSegments: 20
		}] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#a9aca5" })]
	})] });
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/curved-three-seat-sofa.tsx
var Cl = [
	2.6,
	.88,
	1.1
];
function wl({ size: e = Cl }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "curved-three-seat-sofa",
		scale: [
			e[0] / 2.6,
			e[1] / .88,
			e[2] / 1.1
		],
		userData: { walkCollider: !0 },
		children: [/* @__PURE__ */ (0, U.jsx)(Sl, {}), [
			-.8,
			0,
			.8
		].map((e, t) => /* @__PURE__ */ (0, U.jsxs)("group", {
			position: [
				e,
				0,
				t === 1 ? -.04 : .04
			],
			rotation: [
				0,
				t === 0 ? .15 : t === 2 ? -.15 : 0,
				0
			],
			children: [/* @__PURE__ */ (0, U.jsx)(K, {
				name: "curved-sofa-seat",
				size: [
					.76,
					.18,
					.75
				],
				position: [
					0,
					.43,
					.08
				],
				color: "#b4b5b0",
				radius: .075,
				outlineColor: "#898d88"
			}), /* @__PURE__ */ (0, U.jsx)(K, {
				name: "curved-sofa-back",
				size: [
					.78,
					.54,
					.29
				],
				position: [
					0,
					.61,
					-.28
				],
				color: "#b8bab5",
				radius: .125,
				outlineColor: "#898d88"
			})]
		}, e))]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/sage-tub-armchair.tsx
var Tl = [
	.78,
	.86,
	.8
];
function El({ size: e = Tl }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "sage-tub-armchair",
		scale: [
			e[0] / .78,
			e[1] / .86,
			e[2] / .8
		],
		userData: { walkCollider: !0 },
		children: [
			[-.27, .27].flatMap((e) => [-.28, .28].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.06,
					t
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.055,
					.12,
					.055
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#bb976d" })]
			}, `${e}-${t}`))),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.65,
					.24,
					.7
				],
				position: [
					0,
					.24,
					.03
				],
				color: "#748e81",
				radius: .065,
				outlineColor: "#526e61"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.53,
					.15,
					.65
				],
				position: [
					0,
					.435,
					.075
				],
				color: "#819b8d",
				radius: .07,
				outlineColor: "#617d6e"
			}),
			[-.305, .305].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.17,
					.58,
					.7
				],
				position: [
					e,
					.57,
					0
				],
				color: "#789486",
				radius: .08,
				outlineColor: "#617d6e"
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.63,
					.64,
					.18
				],
				position: [
					0,
					.54,
					-.31
				],
				color: "#789486",
				radius: .085,
				outlineColor: "#617d6e"
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/sage-rounded-footstool.tsx
var Dl = [
	.48,
	.45,
	.46
];
function Ol({ size: e = Dl }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "sage-rounded-footstool",
		scale: [
			e[0] / .48,
			e[1] / .45,
			e[2] / .46
		],
		userData: { walkCollider: !0 },
		children: [[-.17, .17].flatMap((e) => [-.16, .16].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
			position: [
				e,
				.06,
				t
			],
			children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
				.04,
				.12,
				.04
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#bb976d" })]
		}, `${e}-${t}`))), /* @__PURE__ */ (0, U.jsx)(K, {
			size: [
				.48,
				.34,
				.46
			],
			position: [
				0,
				.28,
				0
			],
			color: "#819b8d",
			radius: .085,
			outlineColor: "#617d6e"
		})]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/hexagonal-side-table.tsx
var kl = [
	.6,
	.43,
	.5196152423
];
function Al({ size: e = kl, variant: t = "default" }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "hexagonal-side-table",
		scale: [
			e[0] / .6,
			e[1] / .43,
			e[2] / .5196152423
		],
		userData: { walkCollider: !0 },
		children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
			position: [
				0,
				.2,
				0
			],
			children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
				.285,
				.285,
				.4,
				6,
				1,
				!1,
				Math.PI / 6
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: t === "oak-top" ? "#e2e1d9" : "#bd986c" })]
		}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: "hex-table-top",
			position: [
				0,
				.415,
				0
			],
			children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
				.3,
				.3,
				.03,
				6,
				1,
				!1,
				Math.PI / 6
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: t === "oak-top" ? "#c6a579" : "#f0efe7" })]
		})]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/six-door-oak-sideboard.tsx
var jl = [
	3,
	.74,
	.42
];
function Ml({ size: e = jl }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "six-door-oak-sideboard",
		scale: [
			e[0] / 3,
			e[1] / .74,
			e[2] / .42
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					3,
					.7,
					.37
				],
				position: [
					0,
					.35,
					-.025
				],
				color: "#bd986c",
				radius: .003
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					3,
					.04,
					.42
				],
				position: [
					0,
					.72,
					0
				],
				color: "#c7a67b",
				radius: .003
			}),
			Array.from({ length: 6 }, (e, t) => /* @__PURE__ */ (0, U.jsxs)("group", { children: [/* @__PURE__ */ (0, U.jsx)(K, {
				name: "oak-sideboard-door",
				size: [
					.494,
					.66,
					.024
				],
				position: [
					-1.25 + t * .5,
					.35,
					.175
				],
				color: t % 2 ? "#c5a277" : "#caa87d",
				radius: .003
			}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					-1.25 + t * .5 + (t % 2 == 0 ? .2 : -.2),
					.61,
					.2
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.014,
					.014,
					.02,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#282b28" })]
			})] }, t))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/arched-bookcase-frame.tsx
function Nl() {
	let e = (0, R.useMemo)(() => {
		let e = new j();
		e.moveTo(-.5, 0), e.lineTo(.5, 0), e.lineTo(.5, 1.73), e.lineTo(-.5, 1.73), e.closePath();
		for (let t of [-.245, .245]) {
			let n = new de();
			n.moveTo(t - .215, .025), n.lineTo(t - .215, 1.47), n.absarc(t, 1.47, .215, Math.PI, 0, !0), n.lineTo(t + .215, .025), n.closePath(), e.holes.push(n);
		}
		return e;
	}, []);
	return /* @__PURE__ */ (0, U.jsxs)("group", { children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
		name: "double-arched-case",
		position: [
			0,
			0,
			-.18
		],
		castShadow: !0,
		receiveShadow: !0,
		children: [/* @__PURE__ */ (0, U.jsx)("extrudeGeometry", { args: [e, {
			depth: .36,
			bevelEnabled: !1,
			curveSegments: 24
		}] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#eeeee5" })]
	}), /* @__PURE__ */ (0, U.jsx)(K, {
		size: [
			.94,
			1.68,
			.02
		],
		position: [
			0,
			.865,
			-.155
		],
		color: "#c5c2b6",
		radius: .002,
		outline: !1
	})] });
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/double-arched-bookcase.tsx
var Pl = [
	1,
	1.73,
	.36
];
function Fl({ size: e = Pl }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "double-arched-bookcase",
		scale: [
			e[0] / 1,
			e[1] / 1.73,
			e[2] / .36
		],
		children: [/* @__PURE__ */ (0, U.jsx)(Nl, {}), [-.245, .245].map((e, t) => /* @__PURE__ */ (0, U.jsx)("group", { children: (t === 0 ? [.62, 1.16] : [
			.48,
			.98,
			1.39
		]).map((t) => /* @__PURE__ */ (0, U.jsx)(K, {
			name: "arched-bookcase-shelf",
			size: [
				.44,
				.025,
				.34
			],
			position: [
				e,
				t,
				0
			],
			color: "#c7a67b",
			radius: .002,
			outlineColor: "#9c7c58"
		}, t)) }, e))]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/media-shelf-surround.tsx
var Il = [
	2,
	1.73,
	.36
];
function Ll({ size: e = Il }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "media-shelf-surround",
		scale: [
			e[0] / 2,
			e[1] / 1.73,
			e[2] / .36
		],
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					1.92,
					1.68,
					.02
				],
				position: [
					0,
					.865,
					-.155
				],
				color: "#ccc8bc",
				radius: .002,
				outline: !1
			}),
			[-.9825, .9825].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.035,
					1.73,
					.36
				],
				position: [
					e,
					.865,
					0
				],
				color: "#eeeee5",
				radius: .002
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					1.93,
					.035,
					.36
				],
				position: [
					0,
					1.7125,
					0
				],
				color: "#eeeee5",
				radius: .002
			}),
			[1.05, 1.52].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				name: "media-surround-shelf",
				size: [
					1.93,
					.025,
					.34
				],
				position: [
					0,
					e,
					0
				],
				color: "#c7a67b",
				radius: .002,
				outlineColor: "#9c7c58"
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/slim-soundbar.tsx
var Rl = [
	1.05,
	.065,
	.12
];
function zl({ size: e = Rl }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "slim-soundbar",
		scale: [
			e[0] / 1.05,
			e[1] / .065,
			e[2] / .12
		],
		children: [/* @__PURE__ */ (0, U.jsx)(K, {
			size: [
				1.05,
				.065,
				.116
			],
			position: [
				0,
				.0325,
				-.002
			],
			color: "#373e3c",
			radius: .01,
			outlineColor: "#535957"
		}), /* @__PURE__ */ (0, U.jsx)(K, {
			size: [
				.015,
				.002,
				.003
			],
			position: [
				0,
				.034,
				.0585
			],
			color: "#626864",
			radius: .001,
			outline: !1
		})]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/globe-lamp-arm.tsx
function Bl({ end: e }) {
	let t = new M(0, .18, 0), n = new M(...e), r = n.clone().sub(t), i = n.clone().add(t).multiplyScalar(.5), a = new S().setFromUnitVectors(new M(0, 1, 0), r.clone().normalize());
	return /* @__PURE__ */ (0, U.jsxs)("mesh", {
		name: "ceiling-lamp-arm",
		position: [
			i.x,
			i.y,
			i.z
		],
		quaternion: [
			a.x,
			a.y,
			a.z,
			a.w
		],
		children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
			.006,
			.006,
			r.length(),
			12
		] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#a79165" })]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/six-globe-ceiling-lamp.tsx
var Vl = [
	.9,
	.42,
	.8062177826
];
function Hl({ size: e = Vl }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "six-globe-ceiling-lamp",
		scale: [
			e[0] / .9,
			e[1] / .42,
			e[2] / .8062177826
		],
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.4075,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.055,
					.055,
					.025,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#ac9770" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.285,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.013,
					.013,
					.22,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#ac9770" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.18,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.065,
					.065,
					.03,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#c4b089" })]
			}),
			Array.from({ length: 6 }, (e, t) => {
				let n = t * Math.PI / 3, r = Math.cos(n) * .35, i = Math.sin(n) * .35;
				return /* @__PURE__ */ (0, U.jsxs)("group", { children: [/* @__PURE__ */ (0, U.jsx)(Bl, { end: [
					r,
					.13,
					i
				] }), /* @__PURE__ */ (0, U.jsxs)("mesh", {
					name: "ceiling-lamp-globe",
					position: [
						r,
						.1,
						i
					],
					children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
						.1,
						20,
						12
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#eeeee5" })]
				})] }, t);
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/book-row.tsx
var Ul = [
	.4,
	.28,
	.18
];
function Wl({ size: e = Ul }) {
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: "book-row",
		scale: [
			e[0] / .4,
			e[1] / .28,
			e[2] / .18
		],
		children: Array.from({ length: 10 }, (e, t) => {
			let n = t === 3 ? .28 : .2 + t % 4 * .02;
			return /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					-.18 + t * .04,
					n / 2,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.04,
					n,
					.18
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: [
					"#e5dfcc",
					"#c1c7b9",
					"#364940",
					"#d3aa60",
					"#b46d53"
				][t % 5] })]
			}, t);
		})
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/white-tapered-wall-sconce.tsx
var Gl = [
	.18,
	.23,
	.12
];
function Kl({ size: e = Gl }) {
	let t = (0, R.useMemo)(() => {
		let e = new Ze();
		e.setAttribute("position", new je([
			-.05,
			0,
			-.035,
			.05,
			0,
			-.035,
			.05,
			0,
			.035,
			-.05,
			0,
			.035,
			-.09,
			.23,
			-.06,
			.09,
			.23,
			-.06,
			.09,
			.23,
			.06,
			-.09,
			.23,
			.06,
			-.082,
			.23,
			-.052,
			.082,
			.23,
			-.052,
			.082,
			.23,
			.052,
			-.082,
			.23,
			.052,
			-.043,
			.008,
			-.028,
			.043,
			.008,
			-.028,
			.043,
			.008,
			.028,
			-.043,
			.008,
			.028
		], 3));
		let t = [], n = (e, n, r, i) => t.push(e, n, r, e, r, i);
		for (let e = 0; e < 4; e++) {
			let t = (e + 1) % 4;
			n(e, t, t + 4, e + 4), n(e + 12, e + 8, t + 8, t + 12), n(e + 4, t + 4, t + 8, e + 8);
		}
		return n(0, 3, 2, 1), n(12, 13, 14, 15), e.setIndex(t), e.computeVertexNormals(), e;
	}, []);
	return (0, R.useEffect)(() => () => t.dispose(), [t]), /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "white-tapered-wall-sconce",
		scale: [
			e[0] / .18,
			e[1] / .23,
			e[2] / .12
		],
		children: [/* @__PURE__ */ (0, U.jsx)(K, {
			size: [
				.07,
				.15,
				.02
			],
			position: [
				0,
				.1,
				-.05
			],
			color: "#e4e3d9",
			radius: .002
		}), /* @__PURE__ */ (0, U.jsx)("mesh", {
			geometry: t,
			castShadow: !0,
			receiveShadow: !0,
			children: /* @__PURE__ */ (0, U.jsx)(I, { color: "#eeeee5" })
		})]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/tufted-diamond-rug.tsx
var ql = [
	2.6,
	.016,
	2
];
function Jl({ size: e = ql }) {
	let t = (0, R.useMemo)(() => {
		let e = new j();
		e.moveTo(0, .3), e.lineTo(.22, 0), e.lineTo(0, -.3), e.lineTo(-.22, 0), e.closePath();
		let t = new de();
		return t.moveTo(0, .24), t.lineTo(-.17, 0), t.lineTo(0, -.24), t.lineTo(.17, 0), t.closePath(), e.holes.push(t), e;
	}, []);
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "tufted-diamond-rug",
		scale: [
			e[0] / 2.6,
			e[1] / .016,
			e[2] / 2
		],
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					2.4,
					.012,
					2
				],
				position: [
					0,
					.006,
					0
				],
				color: "#ddd7c8",
				radius: .004,
				outline: !1
			}),
			[
				-.72,
				0,
				.72
			].flatMap((e) => [-.52, .52].map((n) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "raised-rug-diamond",
				position: [
					e,
					.012,
					n
				],
				rotation: [
					-Math.PI / 2,
					0,
					0
				],
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("extrudeGeometry", { args: [t, {
					depth: .004,
					bevelEnabled: !1
				}] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#c9c2b0" })]
			}, `${e}-${n}`))),
			[-1.25, 1.25].flatMap((e) => Array.from({ length: 25 }, (t, n) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.003,
					-.96 + n * .08
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.003,
					.003,
					.1,
					6
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#e9e3d6" })]
			}, `${e}-${n}`)))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/white-display-column.tsx
var Yl = [
	.6,
	2.4,
	.3
];
function Xl({ size: e = Yl }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "white-display-column",
		scale: [
			e[0] / .6,
			e[1] / 2.4,
			e[2] / .3
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.55,
					2.35,
					.02
				],
				position: [
					0,
					1.2,
					-.12
				],
				color: "#d8d6cc",
				radius: .002,
				outline: !1
			}),
			[-.2875, .2875].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.025,
					2.4,
					.3
				],
				position: [
					e,
					1.2,
					0
				],
				color: "#eeeee6",
				radius: .002
			}, e)),
			[
				.0125,
				.6,
				1.2,
				1.8,
				2.3875
			].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.55,
					.025,
					.3
				],
				position: [
					0,
					e,
					0
				],
				color: "#eeeee6",
				radius: .002
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/astro-parallel-wall-light.tsx
var Zl = [
	.32,
	.13,
	.11
];
function Ql({ size: e = Zl }) {
	let t = (0, R.useMemo)(() => {
		let e = new j(), t = Math.atan2(.12, -.16), n = Math.atan2(.12, .16);
		e.moveTo(-.16, 0), e.lineTo(-.16, .03), e.absarc(0, -.09, .2, t, n, !0), e.lineTo(.16, 0), e.closePath();
		let r = .192, i = .15, a = Math.sqrt(r ** 2 - i ** 2) - .09, o = new de();
		return o.moveTo(-.15, .008), o.lineTo(i, .008), o.lineTo(i, a), o.absarc(0, -.09, r, Math.atan2(a + .09, i), Math.atan2(a + .09, -.15), !1), o.lineTo(-.15, .008), o.closePath(), e.holes.push(o), e;
	}, []);
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: "astro-parallel-wall-light",
		scale: [
			e[0] / .32,
			e[1] / .13,
			e[2] / .11
		],
		children: /* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: "parallel-ceramic-shell",
			position: [
				0,
				.13,
				0
			],
			rotation: [
				Math.PI / 2,
				0,
				0
			],
			castShadow: !0,
			receiveShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)("extrudeGeometry", { args: [t, {
				depth: .13,
				bevelEnabled: !1,
				curveSegments: 24
			}] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#eeeee8" })]
		})
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/dining-room/rectangular-dining-table.tsx
var $l = [
	1.8,
	.75,
	.9
];
function eu({ size: e = $l, variant: t = "default" }) {
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: "rectangular-dining-table",
		scale: [
			e[0] / 1.8,
			e[1] / .75,
			e[2] / .9
		],
		userData: { walkCollider: !0 },
		children: /* @__PURE__ */ (0, U.jsx)(tr, {
			topColor: t === "pale-stone" ? "#eceae5" : "#d9b987",
			width: 1.8,
			height: .75,
			depth: .9,
			topThickness: .035,
			legWidth: .055
		})
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/dining-room/curved-chair-back.tsx
function tu() {
	let e = (0, R.useMemo)(() => {
		let e = new j();
		return e.moveTo(-.245, -.125), e.quadraticCurveTo(0, -.325, .245, -.125), e.lineTo(.232, -.1), e.quadraticCurveTo(0, -.289, -.232, -.1), e.closePath(), e;
	}, []);
	return /* @__PURE__ */ (0, U.jsxs)("mesh", {
		name: "curved-oak-backrest",
		position: [
			0,
			.82,
			-.025
		],
		rotation: [
			Math.PI / 2,
			0,
			0
		],
		castShadow: !0,
		receiveShadow: !0,
		children: [
			/* @__PURE__ */ (0, U.jsx)("extrudeGeometry", { args: [e, {
				depth: .16,
				steps: 1,
				bevelEnabled: !1,
				curveSegments: 16
			}] }),
			/* @__PURE__ */ (0, U.jsx)(I, { color: "#d5b17e" }),
			/* @__PURE__ */ (0, U.jsx)(r, {
				color: "#82694b",
				thickness: .0015,
				screenspace: !1
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/dining-room/oak-dining-chair.tsx
var nu = [
	.49,
	.82,
	.5
];
function ru({ size: e = nu }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "oak-dining-chair",
		scale: [
			e[0] / .49,
			e[1] / .82,
			e[2] / .5
		],
		userData: { walkCollider: !0 },
		children: [
			[-.18, .18].flatMap((e) => [-.165, .17].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "dining-chair-leg",
				position: [
					e,
					.21,
					t
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.022,
					.016,
					.42,
					10
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#c7a16d" })]
			}, `${e}-${t}`))),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.46,
					.045,
					.47
				],
				position: [
					0,
					.4175,
					.015
				],
				color: "#c8a572",
				radius: .018
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "dining-chair-upholstered-seat",
				size: [
					.445,
					.045,
					.435
				],
				position: [
					0,
					.4625,
					.0225
				],
				color: "#e3d7c2",
				radius: .019
			}),
			[-.185, .185].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.5725,
					-.19
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.018,
					.023,
					.31,
					10
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#c9a674" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(tu, {})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/dining-room/three-door-sideboard.tsx
var iu = [
	1.6,
	.82,
	.45
];
function au({ size: e = iu }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "three-door-sideboard",
		scale: [
			e[0] / 1.6,
			e[1] / .82,
			e[2] / .45
		],
		userData: { walkCollider: !0 },
		children: [
			[-.68, .68].flatMap((e) => [-.17, .17].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.07,
					t
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.055,
					.14,
					.055
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#a67d50" })]
			}, `${e}-${t}`))),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					1.5,
					.62,
					.39
				],
				position: [
					0,
					.45,
					-.02
				],
				color: "#d0ac79",
				radius: .012
			}),
			[
				-.5,
				0,
				.5
			].map((e) => /* @__PURE__ */ (0, U.jsxs)("group", { children: [/* @__PURE__ */ (0, U.jsx)(K, {
				name: "sideboard-door",
				size: [
					.47,
					.54,
					.04
				],
				position: [
					e,
					.46,
					.195
				],
				color: "#d9b987",
				radius: .008
			}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "sideboard-handle",
				position: [
					e + .14,
					.47,
					.22
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.025,
					.13,
					.01
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#8c7560" })]
			})] }, e)),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					1.6,
					.05,
					.45
				],
				position: [
					0,
					.795,
					0
				],
				color: "#d8b47e",
				radius: .009
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/dining-room/photo-dining-set/dining-construction/oak-frame.tsx
function ou(e, t, n, r = n) {
	let i = new M(...e), a = new M(...t), o = new Me(r, n, i.distanceTo(a), 10);
	if (o.applyQuaternion(new S().setFromUnitVectors(new M(0, 1, 0), a.clone().sub(i).normalize())), o.translate(...i.clone().add(a).multiplyScalar(.5).toArray()), e[1] === 0) {
		let e = o.attributes.position;
		for (let t = 0; t < e.count; t++) e.getY(t) < n * 2 && e.setY(t, 0);
		o.computeVertexNormals();
	}
	return o;
}
function su(e, t, n = 16) {
	return new We(new k(e.map((e) => new M(...e))), n, t, 5, !1);
}
function cu() {
	let e = new k([
		new M(-.232, .675, .135),
		new M(-.257, .716, -.04),
		new M(-.206, .765, -.17),
		new M(0, .781, -.205),
		new M(.206, .765, -.17),
		new M(.257, .716, -.04),
		new M(.232, .675, .135)
	]), t = [], n = [];
	for (let r = 0; r <= 40; r++) {
		let i = e.getPoint(r / 40), a = e.getTangent(r / 40), o = new M(-a.z, 0, a.x).normalize();
		for (let [e, n] of [
			[-1, -1],
			[1, -1],
			[1, 1],
			[-1, 1]
		]) t.push(i.x + o.x * e * .0192, i.y + n * .024, i.z + o.z * e * .0192);
		if (r < 40) for (let e = 0; e < 4; e++) {
			let t = r * 4 + e, i = r * 4 + (e + 1) % 4;
			n.push(t, i, i + 4, t, i + 4, t + 4);
		}
	}
	n.push(0, 2, 1, 0, 3, 2, 160, 161, 162, 160, 162, 163);
	let r = new Ze();
	return r.setAttribute("position", new je(t, 3)), r.setIndex(n), r.computeVertexNormals(), r;
}
function lu({ geometry: e, color: t = "#bd905b", outline: n = !0, name: i }) {
	return /* @__PURE__ */ (0, U.jsxs)("mesh", {
		name: i,
		geometry: e,
		castShadow: !0,
		receiveShadow: !0,
		children: [/* @__PURE__ */ (0, U.jsx)(I, { color: t }), n && /* @__PURE__ */ (0, U.jsx)(r, {
			color: "#6f5033",
			thickness: .0015,
			screenspace: !1
		})]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/dining-room/photo-dining-set/dining-construction/woven-seat.tsx
var uu = Array.from({ length: 28 }, (e, t) => {
	let n = .215 - t * .0073, r = .181 - t * .0061, i = .454 + .004 * Math.sin(t * .7);
	return su([
		[
			-n,
			i,
			-r
		],
		[
			0,
			i,
			-r
		],
		[
			n,
			i,
			-r
		],
		[
			n,
			i,
			0
		],
		[
			n,
			i,
			r
		],
		[
			0,
			i,
			r
		],
		[
			-n,
			i,
			r
		],
		[
			-n,
			i,
			0
		],
		[
			-n,
			i,
			-r
		]
	], .0038, 32);
}), du = new le(.416, .018, .358);
du.translate(0, .442, 0);
var fu = N([du, ...uu.filter((e, t) => t % 2 == 0)]);
du.dispose();
var pu = N(uu.filter((e, t) => t % 2 == 1));
uu.forEach((e) => e.dispose());
function mu() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "envelope-woven-rush-seat",
		children: [/* @__PURE__ */ (0, U.jsx)(lu, {
			name: "rush-natural",
			geometry: fu,
			color: "#b58e56",
			outline: !1
		}), /* @__PURE__ */ (0, U.jsx)(lu, {
			name: "rush-light",
			geometry: pu,
			color: "#c5a36d",
			outline: !1
		})]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/dining-room/photo-dining-set/dining-chair.tsx
var hu = [-1, 1].flatMap((e) => [
	ou([
		e * .222,
		0,
		.182
	], [
		e * .211,
		.671,
		.13
	], .013, .019),
	ou([
		e * .205,
		0,
		-.181
	], [
		e * .191,
		.748,
		-.174
	], .013, .021),
	ou([
		e * .205,
		.425,
		-.168
	], [
		e * .216,
		.425,
		.171
	], .019),
	ou([
		e * .212,
		.235,
		-.166
	], [
		e * .216,
		.235,
		.163
	], .011)
]);
hu.push(ou([
	-.213,
	.425,
	.171
], [
	.213,
	.425,
	.171
], .021), ou([
	-.201,
	.425,
	-.168
], [
	.201,
	.425,
	-.168
], .018), ou([
	-.212,
	.255,
	-.166
], [
	.212,
	.255,
	-.166
], .011), su([
	[
		0,
		.442,
		-.17
	],
	[
		0,
		.574,
		-.187
	],
	[
		-.048,
		.67,
		-.2
	],
	[
		-.104,
		.754,
		-.202
	]
], .013, 14), su([
	[
		0,
		.568,
		-.187
	],
	[
		.048,
		.67,
		-.2
	],
	[
		.104,
		.754,
		-.202
	]
], .013, 10));
var gu = N(hu);
hu.forEach((e) => e.dispose());
var _u = cu();
function vu({ position: e, rotationY: t }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "chaise-repas-cannee-custom",
		position: e,
		rotation: [
			0,
			t,
			0
		],
		children: [
			/* @__PURE__ */ (0, U.jsx)(lu, {
				name: "wishbone-chair-joined-frame",
				geometry: gu
			}),
			/* @__PURE__ */ (0, U.jsx)(lu, {
				name: "continuous-bentwood-back-and-arms",
				geometry: _u,
				color: "#cba16b"
			}),
			/* @__PURE__ */ (0, U.jsx)(mu, {})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/dining-room/photo-dining-set/dining-table.tsx
var yu = new y([
	[0, .728],
	[.571, .728],
	[.591, .733],
	[.599, .744],
	[.6, .752],
	[.598, .757],
	[.592, .761],
	[0, .761]
].map((e) => new Oe(...e)), 64), bu = [-1, 1].flatMap((e) => [-1, 1].map((t) => ou([
	e * .382,
	0,
	t * .332
], [
	e * .322,
	.737,
	t * .272
], .017, .032)));
for (let e of [-1, 1]) bu.push(ou([
	-.325,
	.696,
	e * .274
], [
	.325,
	.696,
	e * .274
], .027)), bu.push(ou([
	e * .323,
	.696,
	-.274
], [
	e * .323,
	.696,
	.274
], .027));
var xu = N(bu);
bu.forEach((e) => e.dispose());
var Su = [
	-.42,
	-.29,
	-.13,
	.09,
	.26,
	.41
].map((e, t) => {
	let n = Math.sqrt(.576 ** 2 - e * e);
	return su([
		[
			-n,
			.7622,
			e
		],
		[
			-n * .5,
			.7622,
			e + .005 * Math.sin(t)
		],
		[
			0,
			.7622,
			e - .004
		],
		[
			n * .5,
			.7622,
			e + .003
		],
		[
			n,
			.7622,
			e
		]
	], 6e-4, 20);
}), Cu = N(Su);
Su.forEach((e) => e.dispose());
function wu() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "thin-rounded-oak-dining-table",
		children: [
			/* @__PURE__ */ (0, U.jsx)(lu, {
				name: "tapered-table-legs-and-aprons",
				geometry: xu,
				color: "#af7f49"
			}),
			/* @__PURE__ */ (0, U.jsx)(lu, {
				name: "soft-bevel-solid-oak-top",
				geometry: yu,
				color: "#b48650"
			}),
			/* @__PURE__ */ (0, U.jsx)(lu, {
				name: "subtle-longitudinal-oak-grain",
				geometry: Cu,
				color: "#9e743f",
				outline: !1
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/dining-room/photo-dining-set/table-plant.tsx
var Tu = Array.from({ length: 25 }, (e, t) => {
	let n = new Ie(.018 + t * .008, .0045, 5, 48);
	return n.rotateX(Math.PI / 2), n.scale(1, 1, .76), n.translate(0, .766, 0), n;
}), Eu = N(Tu);
Tu.forEach((e) => e.dispose());
var Du = new y([
	[0, .773],
	[.065, .773],
	[.079, .789],
	[.09, .893],
	[.094, .906],
	[.089, .915],
	[.082, .915],
	[.08, .895],
	[0, .895]
].map((e) => new Oe(...e)), 32), Ou = Array.from({ length: 24 }, (e, t) => {
	let n = t * Math.PI / 12;
	return su([
		[
			.067 * Math.cos(n),
			.784,
			.067 * Math.sin(n)
		],
		[
			.078 * Math.cos(n),
			.825,
			.078 * Math.sin(n)
		],
		[
			.09 * Math.cos(n),
			.902,
			.09 * Math.sin(n)
		]
	], .003, 6);
}), ku = N(Ou);
Ou.forEach((e) => e.dispose());
var Au = new Me(.081, .081, .006, 24);
Au.translate(0, .897, 0);
var ju = [], Mu = [];
for (let e = 0; e < 26; e++) {
	let t = e * 2.39996, n = .045 + e % 5 * .019, r = .939 + e % 7 * .021, i = Math.cos(t) * n, a = Math.sin(t) * n;
	ju.push(su([
		[
			0,
			.899,
			0
		],
		[
			i * .45,
			r - .025,
			a * .45
		],
		[
			i,
			r,
			a
		]
	], .002, 6));
	let o = new qe(1, 8, 6);
	o.scale(.026, .006, .045), o.rotateX(.2 + e % 4 * .23), o.rotateY(-t + .5), o.translate(i, r, a), Mu.push(o);
}
var Nu = new qe(1, 8, 6);
Nu.scale(.019, .03, .009), Nu.translate(.01, 1.09, 0), Mu.push(Nu), ju.push(su([
	[
		0,
		.9,
		0
	],
	[
		.008,
		1.02,
		0
	],
	[
		.01,
		1.09,
		0
	]
], .002, 8));
var Pu = N(ju), Fu = N(Mu.filter((e, t) => t % 2 == 0)), Iu = N(Mu.filter((e, t) => t % 2 == 1));
[...ju, ...Mu].forEach((e) => e.dispose());
function Lu() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "plante-table-salon",
		children: [
			/* @__PURE__ */ (0, U.jsx)(lu, {
				name: "coiled-woven-table-mat",
				geometry: Eu,
				color: "#a27a43",
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(lu, {
				name: "sage-ceramic-planter",
				geometry: Du,
				color: "#87934d"
			}),
			/* @__PURE__ */ (0, U.jsx)(lu, {
				name: "vertical-planter-fluting",
				geometry: ku,
				color: "#98a15b",
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(lu, {
				name: "potting-soil",
				geometry: Au,
				color: "#403a25",
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(lu, {
				name: "connected-plant-stems",
				geometry: Pu,
				color: "#48532d",
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(lu, {
				name: "individual-dark-leaves",
				geometry: Fu,
				color: "#344a29",
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(lu, {
				name: "individual-light-leaves",
				geometry: Iu,
				color: "#506334",
				outline: !1
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/dining-room/photo-dining-set/dining-set.tsx
function Ru({ footprintScale: e = 1 }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "coin-repas-salon-custom",
		scale: [
			e,
			1,
			e
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(wu, {}),
			/* @__PURE__ */ (0, U.jsx)(Lu, {}),
			/* @__PURE__ */ (0, U.jsx)(vu, {
				position: [
					0,
					0,
					-.79
				],
				rotationY: 0
			}),
			/* @__PURE__ */ (0, U.jsx)(vu, {
				position: [
					0,
					0,
					.79
				],
				rotationY: Math.PI
			}),
			/* @__PURE__ */ (0, U.jsx)(vu, {
				position: [
					-.79,
					0,
					0
				],
				rotationY: Math.PI / 2
			}),
			/* @__PURE__ */ (0, U.jsx)(vu, {
				position: [
					.79,
					0,
					0
				],
				rotationY: -Math.PI / 2
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/dining-room/white-chair-shell.ts
var zu = [
	[
		.455,
		.242,
		.19
	],
	[
		.445,
		.2,
		.215
	],
	[
		.435,
		.08,
		.225
	],
	[
		.44,
		-.08,
		.225
	],
	[
		.47,
		-.18,
		.225
	],
	[
		.6,
		-.21,
		.215
	],
	[
		.74,
		-.25,
		.205
	],
	[
		.8185,
		-.2762,
		.18
	]
];
function Bu() {
	let e = [], t = [], n = zu.length, r = n * 13;
	for (let t of [-1, 1]) for (let r = 0; r < n; r++) {
		let [i, a, o] = zu[r], s = zu[Math.max(0, r - 1)], c = zu[Math.min(n - 1, r + 1)], l = c[0] - s[0], u = c[1] - s[1], d = Math.hypot(l, u);
		for (let n = 0; n <= 12; n++) {
			let s = 2 * n / 12 - 1;
			e.push(o * s, i + .02 * s * s - t * .004 * u / d, a + (r >= 4 ? .04 * s * s : 0) + t * .004 * l / d);
		}
	}
	for (let e = 0; e < 2; e++) for (let i = 0; i < n - 1; i++) for (let n = 0; n < 12; n++) {
		let a = e * r + i * 13 + n, o = a + 1, s = a + 12 + 1, c = s + 1;
		t.push(...e === 0 ? [
			a,
			s,
			o,
			o,
			s,
			c
		] : [
			a,
			o,
			s,
			o,
			c,
			s
		]);
	}
	let i = [];
	for (let e = 0; e <= 12; e++) i.push(e);
	for (let e = 1; e < n; e++) i.push(e * 13 + 12);
	for (let e = 11; e >= 0; e--) i.push((n - 1) * 13 + e);
	for (let e = n - 2; e > 0; e--) i.push(e * 13);
	for (let e = 0; e < i.length; e++) {
		let n = i[e], a = i[(e + 1) % i.length];
		t.push(n, a, n + r, a, a + r, n + r);
	}
	let a = new Ze();
	return a.setAttribute("position", new je(e, 3)), a.setIndex(t), a.computeVertexNormals(), a;
}
var Vu = Bu(), Hu = [-1, 1].flatMap((e) => [-1, 1].map((t) => ou([
	e * .2156,
	0,
	t * .2456
], [
	e * .155,
	.438,
	t * .12
], .015, .022))), Uu = N(Hu);
Hu.forEach((e) => e.dispose());
//#endregion
//#region packages/catalog/src/furnishing/presets/dining-room/white-shell-dining-chair.tsx
var Wu = [
	.46,
	.84,
	.54
];
function Gu({ size: e = Wu }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "white-shell-dining-chair",
		scale: [
			e[0] / .46,
			e[1] / .84,
			e[2] / .54
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "continuous-white-seat-and-back",
				geometry: Vu,
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)(I, { color: "#eeede7" }), /* @__PURE__ */ (0, U.jsx)(r, {
					color: "#bbb8ad",
					thickness: .0015,
					screenspace: !1
				})]
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "oak-chair-seat-mount",
				size: [
					.34,
					.02,
					.28
				],
				position: [
					0,
					.43,
					0
				],
				color: "#c7a67b",
				radius: .002,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)("mesh", {
				name: "four-splayed-oak-chair-legs",
				geometry: Uu,
				castShadow: !0,
				receiveShadow: !0,
				children: /* @__PURE__ */ (0, U.jsx)(I, { color: "#c7a67b" })
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bedroom/oak-nightstand.tsx
var Ku = [
	.45,
	.5,
	.4
];
function qu({ size: e = Ku }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "oak-nightstand",
		scale: [
			e[0] / .45,
			e[1] / .5,
			e[2] / .4
		],
		userData: { walkCollider: !0 },
		children: [
			[-.178, .178].flatMap((e) => [-.145, .145].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.06,
					t
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.035,
					.12,
					.035
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#b99262" })]
			}, `${e}-${t}`))),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.45,
					.025,
					.4
				],
				position: [
					0,
					.4875,
					0
				],
				color: "#dbbc8d"
			}),
			[-.2125, .2125].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.025,
					.37,
					.4
				],
				position: [
					e,
					.29,
					0
				],
				color: "#cfad7b",
				radius: .004
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.4,
					.025,
					.375
				],
				position: [
					0,
					.1225,
					-.0125
				],
				color: "#cba674",
				radius: .004
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.4,
					.34,
					.018
				],
				position: [
					0,
					.305,
					-.191
				],
				color: "#b69262",
				radius: .003,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.4,
					.024,
					.36
				],
				position: [
					0,
					.291,
					-.012
				],
				color: "#c7a16e",
				radius: .003
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "nightstand-drawer",
				size: [
					.394,
					.163,
					.022
				],
				position: [
					0,
					.38,
					.18
				],
				color: "#d6b584",
				radius: .004
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "nightstand-finger-pull",
				position: [
					0,
					.432,
					.193
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.1,
					.012,
					.004
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#846748" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bedroom/flat-door-wardrobe.tsx
var Ju = [
	2,
	2.2,
	.6
];
function Yu({ size: e = Ju }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "flat-door-wardrobe",
		scale: [
			e[0] / 2,
			e[1] / 2.2,
			e[2] / .6
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.04,
					-.015
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					1.86,
					.08,
					.51
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#b49368" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					2,
					2.12,
					.57
				],
				position: [
					0,
					1.14,
					-.015
				],
				color: "#d4b586",
				radius: .008
			}),
			[
				-.7365,
				-.2455,
				.2455,
				.7365
			].map((e, t) => /* @__PURE__ */ (0, U.jsxs)("group", { children: [/* @__PURE__ */ (0, U.jsx)(K, {
				name: "wardrobe-flat-door",
				size: [
					.485,
					2.064,
					.022
				],
				position: [
					e,
					1.14,
					.283
				],
				color: "#eeeade",
				radius: .003,
				outlineColor: "#a49b88"
			}), /* @__PURE__ */ (0, U.jsx)(K, {
				name: "wardrobe-oak-pull",
				size: [
					.018,
					.27,
					.018
				],
				position: [
					e + (t % 2 == 0 ? .185 : -.185),
					1.08,
					.291
				],
				color: "#bf9967",
				radius: .004,
				outline: !1
			})] }, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bedroom/single-bed.tsx
var Xu = [
	1,
	.95,
	2.1
];
function Zu({ size: e = Xu }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "single-bed",
		scale: [
			e[0],
			e[1] / .95,
			e[2] / 2.1
		],
		userData: { walkCollider: !0 },
		children: [
			[-.413, .413].flatMap((e) => [-.89, .89].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.095,
					t
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.055,
					.19,
					.055
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#bf9a68" })]
			}, `${e}-${t}`))),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.99,
					.19,
					2.06
				],
				position: [
					0,
					.255,
					.02
				],
				color: "#d0ae7c",
				radius: .012
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "single-bed-headboard",
				size: [
					1,
					.78,
					.055
				],
				position: [
					0,
					.56,
					-1.0225
				],
				color: "#d3b484",
				radius: .017
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "single-bed-padded-headboard",
				size: [
					.9,
					.49,
					.06
				],
				position: [
					0,
					.67,
					-.975
				],
				color: "#cfc0a8",
				radius: .027
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "single-bed-90x200-mattress",
				size: [
					.9,
					.19,
					2
				],
				position: [
					0,
					.445,
					.03
				],
				color: "#efebdf",
				radius: .036,
				outlineColor: "#a8a08e"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "single-bed-duvet",
				size: [
					.94,
					.085,
					1.48
				],
				position: [
					0,
					.5525,
					.285
				],
				color: "#e3d8c4",
				radius: .035,
				outlineColor: "#a99c85"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "single-bed-pillow",
				size: [
					.61,
					.105,
					.36
				],
				position: [
					0,
					.59,
					-.69
				],
				color: "#f2eee4",
				radius: .045,
				outlineColor: "#b5ac9b"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "single-bed-folded-throw",
				size: [
					.942,
					.035,
					.38
				],
				position: [
					0,
					.6135,
					.62
				],
				color: "#afa88d",
				radius: .012,
				outlineColor: "#817e6b"
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bedroom/cozy-bed-cover.tsx
function Qu({ name: e, back: t, front: n, lift: r, thickness: i, color: a, plush: o = !1 }) {
	let s = (0, R.useMemo)(() => {
		let e = [], a = [];
		for (let a = 0; a < 2; a++) for (let s = 0; s <= 24; s++) {
			let c = s / 24, l = t + (n - t) * c;
			for (let t = 0; t <= 32; t++) {
				let n = t / 32 * 2 - 1, s = n * .838, c = Math.max(0, (Math.abs(s) - .75) / .088), u = Math.max(0, (l - .93) / .13), d = .007 * Math.sin(n * 19 + l * 5) + .004 * Math.cos(l * 24 - n * 7), f = o ? .004 * Math.sin(n * 67 + l * 39) ** 2 : 0, p = .605 + r - .19 * c ** 1.5 - .19 * u ** 1.5 + d + f;
				e.push(s, p - a * i, l);
			}
		}
		for (let e = 0; e < 24; e++) for (let t = 0; t < 32; t++) {
			let n = e * 33 + t, r = n + 1, i = n + 32 + 1, o = i + 1;
			a.push(n, i, r, r, i, o), a.push(n + 825, r + 825, i + 825, r + 825, o + 825, i + 825);
		}
		let s = [
			...Array.from({ length: 33 }, (e, t) => t),
			...Array.from({ length: 24 }, (e, t) => (t + 1) * 33 + 32),
			...Array.from({ length: 32 }, (e, t) => 824 - t - 1),
			...Array.from({ length: 23 }, (e, t) => (24 - t - 1) * 33)
		];
		s.forEach((e, t) => {
			let n = s[(t + 1) % s.length];
			a.push(e, n, e + 825, n, n + 825, e + 825);
		});
		let c = new Ze();
		return c.setAttribute("position", new je(e, 3)), c.setIndex(a), c.computeVertexNormals(), c;
	}, [
		t,
		n,
		r,
		i,
		o
	]);
	return (0, R.useEffect)(() => () => s.dispose(), [s]), /* @__PURE__ */ (0, U.jsx)("mesh", {
		name: e,
		geometry: s,
		dispose: null,
		castShadow: !0,
		receiveShadow: !0,
		children: /* @__PURE__ */ (0, U.jsx)(I, { color: a })
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bedroom/cozy-white-blue-bed.tsx
function $u() {
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: "cozy-timber-headboard",
		children: [
			"#97734f",
			"#a17b53",
			"#93704c",
			"#a47f56"
		].map((e, t) => /* @__PURE__ */ (0, U.jsx)(K, {
			name: "cozy-headboard-plank",
			size: [
				1.7,
				.19025,
				.08
			],
			position: [
				0,
				.425125 + t * .19325,
				-1.03
			],
			color: e,
			radius: .006,
			outlineColor: "#75593e"
		}, e))
	});
}
function ed() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "cozy-white-blue-bedding",
		children: [
			/* @__PURE__ */ (0, U.jsx)(Qu, {
				name: "cozy-ivory-duvet",
				back: -.61,
				front: 1.06,
				lift: 0,
				thickness: .04,
				color: "#e6dfd1"
			}),
			/* @__PURE__ */ (0, U.jsx)(Qu, {
				name: "cozy-navy-throw",
				back: .27,
				front: 1.063,
				lift: .033,
				thickness: .018,
				color: "#242e43"
			}),
			/* @__PURE__ */ (0, U.jsx)(Qu, {
				name: "cozy-plush-white-blanket",
				back: .55,
				front: 1.066,
				lift: .074,
				thickness: .026,
				color: "#f6f0e5",
				plush: !0
			}),
			[-.39, .39].map((e) => /* @__PURE__ */ (0, U.jsxs)("group", { children: [
				/* @__PURE__ */ (0, U.jsx)(K, {
					name: "cozy-sleeping-pillow",
					size: [
						.7,
						.14,
						.4
					],
					position: [
						e,
						.614,
						-.72
					],
					color: "#e9e1d3",
					radius: .065,
					outlineColor: "#b7ad9c"
				}),
				/* @__PURE__ */ (0, U.jsx)(K, {
					name: "cozy-ivory-cushion",
					size: [
						.48,
						.16,
						.47
					],
					position: [
						e,
						.77,
						-.55
					],
					rotation: [
						1.02,
						e < 0 ? -.12 : .12,
						e < 0 ? -.1 : .1
					],
					color: "#f3ecdf",
					radius: .07,
					outlineColor: "#b9af9d"
				}),
				/* @__PURE__ */ (0, U.jsx)(K, {
					name: "cozy-navy-cushion",
					size: [
						.4,
						.15,
						.4
					],
					position: [
						e * 1.18,
						.738,
						-.27
					],
					rotation: [
						.98,
						e < 0 ? -.16 : .16,
						e < 0 ? -.13 : .13
					],
					color: "#283249",
					radius: .065,
					outlineColor: "#1c2435"
				})
			] }, e)),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "cozy-ivory-lumbar-cushion",
				size: [
					.43,
					.14,
					.28
				],
				position: [
					0,
					.714,
					-.2
				],
				rotation: [
					.46,
					0,
					-.08
				],
				color: "#e9dfc9",
				radius: .055,
				outlineColor: "#b9aa91"
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bedroom/double-bed.tsx
var td = [
	1.7,
	1.1,
	2.15
];
function nd({ size: e = td, variant: t = "default" }) {
	let n = t === "cozy-white-blue";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "double-bed",
		scale: [
			e[0] / 1.7,
			e[1] / 1.1,
			e[2] / 2.15
		],
		userData: { walkCollider: !0 },
		children: [
			[-.7, .7].flatMap((e) => [-.9, .9].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.085,
					t
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.065,
					.17,
					.065
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#b58d5e" })]
			}, `${e}-${t}`))),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					1.7,
					.22,
					2.15
				],
				position: [
					0,
					.22,
					0
				],
				color: "#cfaa76",
				radius: .014
			}),
			n ? /* @__PURE__ */ (0, U.jsx)($u, {}) : /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [/* @__PURE__ */ (0, U.jsx)(K, {
				name: "double-bed-headboard",
				size: [
					1.7,
					.88,
					.08
				],
				position: [
					0,
					.66,
					-1.03
				],
				color: "#c9a571",
				radius: .022
			}), /* @__PURE__ */ (0, U.jsx)(K, {
				name: "double-bed-padded-headboard",
				size: [
					1.56,
					.62,
					.07
				],
				position: [
					0,
					.74,
					-.985
				],
				color: "#d4c6af",
				radius: .035
			})] }),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "double-bed-160x200-mattress",
				size: [
					1.6,
					.2,
					2
				],
				position: [
					0,
					.43,
					.035
				],
				color: "#efebe0",
				radius: .04,
				outlineColor: "#aaa18f"
			}),
			n ? /* @__PURE__ */ (0, U.jsx)(ed, {}) : /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [/* @__PURE__ */ (0, U.jsx)(K, {
				name: "double-bed-duvet",
				size: [
					1.64,
					.1,
					1.48
				],
				position: [
					0,
					.57,
					.27
				],
				color: "#ded3c1",
				radius: .045,
				outlineColor: "#a79b87"
			}), [-.4, .4].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				name: "double-bed-pillow",
				size: [
					.68,
					.11,
					.39
				],
				position: [
					e,
					.6,
					-.68
				],
				color: "#f4f0e6",
				radius: .05,
				outlineColor: "#b6ad9c"
			}, e))] })
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bedroom/oak-floating-shelf.tsx
var rd = [
	1.1,
	.035,
	.24
];
function id({ size: e = rd }) {
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: "oak-floating-shelf",
		scale: [
			e[0] / 1.1,
			e[1] / .035,
			e[2] / .24
		],
		children: /* @__PURE__ */ (0, U.jsx)(K, {
			name: "oak-floating-shelf-board",
			size: [
				1.1,
				.035,
				.24
			],
			position: [
				0,
				.0175,
				.12
			],
			color: "#b18a5c",
			radius: .003,
			outlineColor: "#806341"
		})
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bedroom/chest-of-drawers.tsx
var ad = [
	1,
	.9,
	.45
];
function od({ size: e = ad }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "chest-of-drawers",
		scale: [
			e[0],
			e[1] / .9,
			e[2] / .45
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.02,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					1,
					.04,
					.41
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#a98256" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					1,
					.82,
					.42
				],
				position: [
					0,
					.45,
					-.015
				],
				color: "#d2af7d",
				radius: .012
			}),
			[
				.15,
				.34,
				.53,
				.72
			].map((e) => /* @__PURE__ */ (0, U.jsxs)("group", { children: [/* @__PURE__ */ (0, U.jsx)(K, {
				name: "dresser-drawer",
				size: [
					.91,
					.16,
					.018
				],
				position: [
					0,
					e,
					.204
				],
				color: "#e6dfd2",
				radius: .008
			}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "dresser-recessed-pull",
				position: [
					0,
					e + .012,
					.213
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.22,
					.028,
					.024
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#9c8366" })]
			})] }, e)),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					1,
					.04,
					.45
				],
				position: [
					0,
					.88,
					0
				],
				color: "#cda672",
				radius: .008
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bedroom/dresser-with-tv.tsx
function sd() {
	let e = "#c79a69", t = "#5f432f", n = "#242526";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "commode-pin-et-television-parentale-custom",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(Q, {
				size: [
					1.05,
					.72,
					.49
				],
				position: [
					0,
					.42,
					0
				],
				color: "#b78a5d",
				outline: t
			}),
			[-1, 1].map((n) => /* @__PURE__ */ (0, U.jsx)(Q, {
				size: [
					.095,
					.82,
					.52
				],
				position: [
					n * (1.24 / 2 - .0475),
					.41,
					0
				],
				color: e,
				outline: t
			}, n)),
			/* @__PURE__ */ (0, U.jsx)(Q, {
				size: [
					1.32,
					.11,
					.55
				],
				position: [
					0,
					.805,
					0
				],
				color: e,
				outline: t
			}),
			[.25, .59].map((r) => /* @__PURE__ */ (0, U.jsxs)("group", {
				position: [
					0,
					r,
					.257
				],
				children: [/* @__PURE__ */ (0, U.jsx)(Q, {
					size: [
						1.1,
						.285,
						.035
					],
					position: [
						0,
						0,
						0
					],
					color: e,
					outline: t
				}), /* @__PURE__ */ (0, U.jsx)(Q, {
					size: [
						.48,
						.035,
						.035
					],
					position: [
						0,
						.055,
						.045
					],
					color: n,
					outline: "#111213"
				})]
			}, r)),
			[-.48, .48].map((e) => /* @__PURE__ */ (0, U.jsx)(Q, {
				size: [
					.16,
					.08,
					.39
				],
				position: [
					e,
					.04,
					-.015
				],
				color: "#936942",
				outline: t
			}, e)),
			/* @__PURE__ */ (0, U.jsxs)("group", {
				name: "television-parentale-custom",
				position: [
					0,
					.86,
					.035
				],
				children: [
					/* @__PURE__ */ (0, U.jsx)(Q, {
						size: [
							.48,
							.035,
							.2
						],
						position: [
							0,
							.0175,
							0
						],
						color: n,
						outline: "#0f1113"
					}),
					/* @__PURE__ */ (0, U.jsx)(Q, {
						size: [
							.075,
							.17,
							.075
						],
						position: [
							0,
							.105,
							0
						],
						color: "#303235",
						outline: "#0f1113"
					}),
					/* @__PURE__ */ (0, U.jsx)(Q, {
						size: [
							.9,
							.54,
							.055
						],
						position: [
							0,
							.39,
							0
						],
						color: "#1b1d20",
						outline: "#090a0c"
					}),
					/* @__PURE__ */ (0, U.jsx)(Q, {
						size: [
							.842,
							.476,
							.006
						],
						position: [
							0,
							.4,
							.0325
						],
						color: "#17232d",
						outline: "#0b1117"
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.985,
					.0765
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.075,
					.018,
					.008
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#aeb4b7" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bedroom/knob-door-wardrobe.tsx
var cd = [
	1,
	2.4,
	.6
];
function ld({ size: e = cd, variant: t = "default" }) {
	let n = t === "single-left" || t === "single-right", r = n ? [0] : [-.25, .25];
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "knob-door-wardrobe",
		scale: [
			e[0],
			e[1] / 2.4,
			e[2] / .6
		],
		userData: { walkCollider: !0 },
		children: [/* @__PURE__ */ (0, U.jsx)(K, {
			size: [
				1,
				2.4,
				.54
			],
			position: [
				0,
				1.2,
				-.03
			],
			color: "#dcd9d1"
		}), r.map((e, r) => /* @__PURE__ */ (0, U.jsxs)("group", { children: [/* @__PURE__ */ (0, U.jsx)(K, {
			name: "wardrobe-door",
			size: [
				n ? .994 : .494,
				2.34,
				.025
			],
			position: [
				e,
				1.23,
				.2525
			],
			color: "#e7e4dc",
			radius: .003
		}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: "wardrobe-knob",
			position: [
				n ? t === "single-left" ? -.445 : .445 : r === 0 ? -.025 : .025,
				1.05,
				.28
			],
			rotation: [
				Math.PI / 2,
				0,
				0
			],
			children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
				.018,
				.018,
				.04,
				16
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#302e2a" })]
		})] }, e))]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bedroom/overbed-bridge-cabinet.tsx
var ud = [
	2,
	.65,
	.4
];
function dd({ size: e = ud }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "overbed-bridge-cabinet",
		scale: [
			e[0] / 2,
			e[1] / .65,
			e[2] / .4
		],
		children: [/* @__PURE__ */ (0, U.jsx)(K, {
			size: [
				2,
				.65,
				.36
			],
			position: [
				0,
				.325,
				-.02
			],
			color: "#dcd9d1"
		}), [
			-2 / 3,
			0,
			2 / 3
		].map((e, t) => /* @__PURE__ */ (0, U.jsxs)("group", { children: [/* @__PURE__ */ (0, U.jsx)(K, {
			name: "bridge-door",
			size: [
				2 / 3 - .006,
				.61,
				.025
			],
			position: [
				e,
				.335,
				.1725
			],
			color: "#e7e4dc",
			radius: .003
		}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
			position: [
				e + (t === 0 ? .28 : -.28),
				.1,
				.19
			],
			rotation: [
				Math.PI / 2,
				0,
				0
			],
			children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
				.015,
				.015,
				.02,
				16
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#302e2a" })]
		})] }, e))]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bedroom/shelf-headboard.tsx
var fd = [
	2,
	1.15,
	.22
];
function pd({ size: e = fd }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "shelf-headboard",
		scale: [
			e[0] / 2,
			e[1] / 1.15,
			e[2] / .22
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					2,
					1.125,
					.05
				],
				position: [
					0,
					.5625,
					-.085
				],
				color: "#bd976d"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					2,
					.025,
					.22
				],
				position: [
					0,
					1.1375,
					0
				],
				color: "#c5a47a"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					1.58,
					.72,
					.025
				],
				position: [
					0,
					.43,
					-.0475
				],
				color: "#efeee8",
				radius: .004
			}),
			[-.9, .9].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.17,
					.025,
					.16
				],
				position: [
					e,
					.3,
					.025
				],
				color: "#c5a47a"
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bedroom/headboard-free-double-bed.tsx
var md = [
	1.64,
	.66,
	2.04
];
function hd({ size: e = md }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "headboard-free-double-bed",
		scale: [
			e[0] / 1.64,
			e[1] / .66,
			e[2] / 2.04
		],
		userData: { walkCollider: !0 },
		children: [
			[-.7, .7].flatMap((e) => [-.9, .9].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.1,
					t
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.06,
					.2,
					.06
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#dfddd5" })]
			}, `${e}-${t}`))),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					1.64,
					.2,
					2.04
				],
				position: [
					0,
					.25,
					0
				],
				color: "#e6e3da"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					1.6,
					.22,
					2
				],
				position: [
					0,
					.45,
					0
				],
				color: "#f3f0e7",
				radius: .035
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					1.64,
					.09,
					1.55
				],
				position: [
					0,
					.565,
					.245
				],
				color: "#ded9cd",
				radius: .04
			}),
			[-.4, .4].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.69,
					.1,
					.43
				],
				position: [
					e,
					.61,
					-.72
				],
				color: "#e7e2d6",
				radius: .04
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bedroom/round-globe-wall-lamp.tsx
var gd = [
	.24,
	.24,
	.16
];
function _d({ size: e = gd }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "round-globe-wall-lamp",
		scale: [
			e[0] / .24,
			e[1] / .24,
			e[2] / .16
		],
		children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
			position: [
				0,
				.12,
				-.05
			],
			rotation: [
				Math.PI / 2,
				0,
				0
			],
			children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
				.12,
				.12,
				.06,
				32
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#e9e8df" })]
		}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
			position: [
				0,
				.12,
				.015
			],
			children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
				.065,
				24,
				16
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#f7f6ee" })]
		})]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bedroom/wall-reading-spot.tsx
var vd = [
	.09,
	.12,
	.13
];
function yd({ size: e = vd }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "wall-reading-spot",
		scale: [
			e[0] / .09,
			e[1] / .12,
			e[2] / .13
		],
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.075,
					-.045
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.045,
					.045,
					.04,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#eeeee6" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.025,
					.025,
					.04
				],
				position: [
					0,
					.075,
					-.01
				],
				color: "#e2e2db",
				radius: .004,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.055,
					.0217
				],
				rotation: [
					-.5,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.022,
					.022,
					.1,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#f0f0e8" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bedroom/oak-wall-uplight.tsx
var bd = [
	.12,
	.25,
	.09
];
function xd({ size: e = bd }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "oak-wall-uplight",
		scale: [
			e[0] / .12,
			e[1] / .25,
			e[2] / .09
		],
		children: [/* @__PURE__ */ (0, U.jsx)(K, {
			size: [
				.075,
				.25,
				.025
			],
			position: [
				0,
				.125,
				-.0325
			],
			color: "#c5a47a",
			radius: .003
		}), [.11, .17].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
			size: [
				.12,
				.04,
				.07
			],
			position: [
				0,
				e,
				.01
			],
			color: "#eeeee8",
			radius: .003
		}, e))]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bedroom/clip-reading-lamp.tsx
var Sd = [
	.07,
	.48,
	.186125
], Cd = [
	new M(0, .12, .032),
	new M(0, .145, .105),
	new M(0, .22, .14),
	new M(0, .32, .13),
	new M(0, .4, .09)
];
function wd({ size: e = Sd }) {
	let t = (0, R.useMemo)(() => new We(new k(Cd), 24, .005, 6, !1), []);
	return (0, R.useEffect)(() => () => t.dispose(), [t]), /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "clip-reading-lamp",
		scale: [
			e[0] / .07,
			e[1] / .48,
			e[2] / .186125
		],
		children: [
			[-1, 1].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				name: `clip-jaw-${e}`,
				size: [
					.07,
					.12,
					.02
				],
				position: [
					0,
					.06,
					e * .03
				],
				color: "#f1f0e9",
				radius: .003,
				outline: !1
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "clip-bridge",
				size: [
					.07,
					.012,
					.08
				],
				position: [
					0,
					.126,
					0
				],
				color: "#f1f0e9",
				radius: .002,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)("mesh", {
				name: "clip-flexible-neck",
				geometry: t,
				castShadow: !0,
				receiveShadow: !0,
				children: /* @__PURE__ */ (0, U.jsx)(I, { color: "#e9e8e2" })
			}),
			/* @__PURE__ */ (0, U.jsxs)("group", {
				position: [
					0,
					.4335,
					.072
				],
				rotation: [
					-.5,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
					name: "clip-lamp-shade",
					castShadow: !0,
					receiveShadow: !0,
					children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.026,
						.009,
						.078,
						16
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#f2f1eb" })]
				}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
					name: "clip-lamp-diffuser",
					position: [
						0,
						.0395,
						0
					],
					children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.023,
						.023,
						.001,
						16
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#fff9df" })]
				})]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/office/oak-desk.tsx
var Td = [
	1.4,
	.74,
	.7
];
function Ed({ size: e = Td }) {
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: "oak-desk",
		scale: [
			e[0] / 1.4,
			e[1] / .74,
			e[2] / .7
		],
		userData: { walkCollider: !0 },
		children: /* @__PURE__ */ (0, U.jsx)(tr, {
			width: 1.4,
			height: .74,
			depth: .7,
			topThickness: .025,
			legWidth: .045
		})
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/office/office-chair-base.tsx
function Dd() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "office-chair-base",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.285,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.022,
					.027,
					.29,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#777a76" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.175,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.045,
					.057,
					.12,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#444944" })]
			}),
			Array.from({ length: 5 }, (e, t) => /* @__PURE__ */ (0, U.jsxs)("group", {
				rotation: [
					0,
					t * Math.PI * 2 / 5,
					0
				],
				children: [
					/* @__PURE__ */ (0, U.jsx)(K, {
						size: [
							.044,
							.04,
							.306
						],
						position: [
							0,
							.119,
							.153
						],
						rotation: [
							.12,
							0,
							0
						],
						color: "#50564f",
						radius: .012,
						outline: !1
					}),
					/* @__PURE__ */ (0, U.jsxs)("mesh", {
						position: [
							0,
							.074,
							.308
						],
						castShadow: !0,
						children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
							.032,
							.054,
							.027
						] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#555b53" })]
					}),
					[-.022, .022].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
						position: [
							e,
							.032,
							.308
						],
						rotation: [
							0,
							0,
							Math.PI / 2
						],
						castShadow: !0,
						children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
							.032,
							.032,
							.024,
							12
						] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#343934" })]
					}, e))
				]
			}, t))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/office/ergonomic-office-chair.tsx
var Od = [
	.68,
	1.04,
	.68
];
function kd({ size: e = Od }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "ergonomic-office-chair",
		scale: [
			e[0] / .68,
			e[1] / 1.04,
			e[2] / .68
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(Dd, {}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.43,
					.045,
					.43
				],
				position: [
					0,
					.4375,
					.015
				],
				color: "#646b64",
				radius: .02,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "office-chair-seat",
				size: [
					.51,
					.085,
					.49
				],
				position: [
					0,
					.5,
					.025
				],
				color: "#ddd4c2",
				radius: .039
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.075,
					.27,
					.048
				],
				position: [
					0,
					.59,
					-.23
				],
				rotation: [
					-.12,
					0,
					0
				],
				color: "#61685f",
				radius: .014,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "office-chair-back-shell",
				size: [
					.465,
					.47,
					.057
				],
				position: [
					0,
					.8033,
					-.2813
				],
				rotation: [
					-.13,
					0,
					0
				],
				color: "#899086",
				radius: .025
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "office-chair-padded-back",
				size: [
					.423,
					.428,
					.065
				],
				position: [
					0,
					.8093,
					-.2413
				],
				rotation: [
					-.13,
					0,
					0
				],
				color: "#e0d8c8",
				radius: .03
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "office-chair-lumbar-pad",
				size: [
					.34,
					.09,
					.045
				],
				position: [
					0,
					.6543,
					-.1973
				],
				color: "#c9c1ae",
				radius: .019,
				outline: !1
			}),
			[-.3025, .3025].map((e) => /* @__PURE__ */ (0, U.jsxs)("group", { children: [
				/* @__PURE__ */ (0, U.jsxs)("mesh", {
					name: "office-chair-arm-bracket",
					position: [
						Math.sign(e) * .26,
						.458,
						.005
					],
					castShadow: !0,
					children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.115,
						.035,
						.04
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#787f75" })]
				}),
				/* @__PURE__ */ (0, U.jsx)(K, {
					size: [
						.032,
						.21,
						.036
					],
					position: [
						e,
						.56,
						.005
					],
					color: "#787f75",
					radius: .01,
					outline: !1
				}),
				/* @__PURE__ */ (0, U.jsx)(K, {
					name: "office-chair-armrest",
					size: [
						.075,
						.04,
						.265
					],
					position: [
						e,
						.67,
						.035
					],
					color: "#555d54",
					radius: .017
				})
			] }, e)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "office-chair-height-lever",
				position: [
					.23,
					.423,
					-.04
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.012,
					.012,
					.14,
					8
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#444b42" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/office/drawer-pedestal-desk.tsx
var Ad = [
	1.8,
	.75,
	.6
];
function jd({ size: e = Ad }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "drawer-pedestal-desk",
		scale: [
			e[0] / 1.8,
			e[1] / .75,
			e[2] / .6
		],
		userData: { walkCollider: !0 },
		children: [/* @__PURE__ */ (0, U.jsx)(K, {
			size: [
				1.8,
				.03,
				.6
			],
			position: [
				0,
				.735,
				0
			],
			color: "#bf9663",
			radius: .005
		}), [-.69, .69].map((e) => /* @__PURE__ */ (0, U.jsxs)("group", { children: [/* @__PURE__ */ (0, U.jsx)(K, {
			size: [
				.42,
				.72,
				.55
			],
			position: [
				e,
				.36,
				-.025
			],
			color: "#deded7",
			radius: .003
		}), [
			.09,
			.235,
			.38,
			.525,
			.66
		].map((t, n) => /* @__PURE__ */ (0, U.jsxs)("group", { children: [/* @__PURE__ */ (0, U.jsx)(K, {
			size: [
				.405,
				n === 4 ? .1 : .135,
				.025
			],
			position: [
				e,
				t,
				.2625
			],
			color: "#f1f0e9",
			radius: .002
		}), /* @__PURE__ */ (0, U.jsx)(K, {
			size: [
				.14,
				.014,
				.015
			],
			position: [
				e,
				t + .045,
				.2925
			],
			color: "#494945",
			radius: .005,
			outline: !1
		})] }, t))] }, e))]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/office/folding-chair-frame.tsx
function Md() {
	return /* @__PURE__ */ (0, U.jsx)("group", { children: [-.205, .205].map((e) => /* @__PURE__ */ (0, U.jsxs)("group", { children: [[-.25, .25].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
		name: "folding-chair-foot",
		position: [
			e,
			.01,
			t
		],
		children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
			.026,
			.02,
			.02
		] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#8c9391" })]
	}, t)), [[
		.25,
		.78,
		-.175
	], [
		-.25,
		.44,
		.15
	]].map(([t, n, r]) => {
		let i = new M(e, .01, t), a = new M(e, n, r), o = a.clone().sub(i), s = i.clone().add(a).multiplyScalar(.5), c = new S().setFromUnitVectors(new M(0, 1, 0), o.clone().normalize());
		return /* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: "folding-chair-support",
			position: [
				s.x,
				s.y,
				s.z
			],
			quaternion: [
				c.x,
				c.y,
				c.z,
				c.w
			],
			children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
				.01,
				.01,
				o.length(),
				12
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#a6aaa7" })]
		}, t);
	})] }, e)) });
}
//#endregion
//#region packages/catalog/src/furnishing/presets/office/white-folding-chair.tsx
var Nd = [
	.46,
	.8,
	.52
];
function Pd({ size: e = Nd }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "white-folding-chair",
		scale: [
			e[0] / .46,
			e[1] / .8,
			e[2] / .52
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(Md, {}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "folding-chair-seat",
				size: [
					.46,
					.04,
					.42
				],
				position: [
					0,
					.44,
					.05
				],
				color: "#eeeee7",
				radius: .017
			}),
			[
				.65,
				.73,
				.78
			].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				name: "folding-chair-back-slat",
				size: [
					.46,
					.04,
					.035
				],
				position: [
					0,
					e,
					-.175
				],
				color: "#eeeee7",
				radius: .01
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/office/desktop-monitor.tsx
var Fd = [
	.54,
	.42,
	.18
];
function Id({ size: e = Fd }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "desktop-monitor",
		scale: [
			e[0] / .54,
			e[1] / .42,
			e[2] / .18
		],
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.25,
					.018,
					.18
				],
				position: [
					0,
					.009,
					0
				],
				color: "#353a3b",
				radius: .01
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.035,
					.15,
					.035
				],
				position: [
					0,
					.085,
					-.035
				],
				color: "#404546"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.54,
					.3,
					.025
				],
				position: [
					0,
					.27,
					-.035
				],
				color: "#292f31",
				radius: .005
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.514,
					.274,
					.003
				],
				position: [
					0,
					.27,
					-.021
				],
				color: "#87b4b9",
				radius: .002,
				outline: !1
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/office/open-laptop.tsx
var Ld = [
	.34,
	.24,
	.24
];
function Rd({ size: e = Ld }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "open-laptop",
		scale: [
			e[0] / .34,
			e[1] / .24,
			e[2] / .24
		],
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.34,
					.018,
					.24
				],
				position: [
					0,
					.009,
					0
				],
				color: "#474a49",
				radius: .005
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.34,
					.222,
					.015
				],
				position: [
					0,
					.129,
					-.1
				],
				color: "#333838",
				radius: .004
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.318,
					.198,
					.002
				],
				position: [
					0,
					.129,
					-.091
				],
				color: "#718c93",
				radius: .002,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.28,
					.002,
					.09
				],
				position: [
					0,
					.02,
					-.013
				],
				color: "#262b2a",
				radius: .001,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.1,
					.002,
					.04
				],
				position: [
					0,
					.02,
					.073
				],
				color: "#636865",
				radius: .001,
				outline: !1
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/storage/oak-bookshelf.tsx
var zd = [
	.8,
	1.9,
	.3
];
function Bd({ size: e = zd }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "oak-bookshelf",
		scale: [
			e[0] / .8,
			e[1] / 1.9,
			e[2] / .3
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.0325,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.73,
					.065,
					.25
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#b28f5f" })]
			}),
			[-.3875, .3875].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.025,
					1.85,
					.3
				],
				position: [
					e,
					.975,
					0
				],
				color: "#d1ae7c",
				radius: .004
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.75,
					1.8,
					.012
				],
				position: [
					0,
					.968,
					-.144
				],
				color: "#b99768",
				radius: .003,
				outline: !1
			}),
			[
				.08,
				.44,
				.8,
				1.16,
				1.52
			].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				name: "bookshelf-shelf",
				size: [
					.75,
					.026,
					.28
				],
				position: [
					0,
					e,
					0
				],
				color: "#dabc8e",
				radius: .004
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.8,
					.026,
					.28
				],
				position: [
					0,
					1.887,
					0
				],
				color: "#dabc8e",
				radius: .004
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/storage/white-corner-wardrobe.tsx
var Vd = [
	1.8,
	2.35,
	1.2
];
function Hd({ size: e = Vd }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "white-corner-wardrobe",
		scale: [
			e[0] / 1.8,
			e[1] / 2.35,
			e[2] / 1.2
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					1.185,
					-.3
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						1.8,
						2.29,
						.6
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#e8e6df" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#aaa89f",
						thickness: .004
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					-.6,
					1.185,
					.3
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.6,
						2.29,
						.6
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#e8e6df" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#aaa89f",
						thickness: .004
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.02,
					-.3
				],
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					1.8,
					.04,
					.6
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#cbc9c1" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					-.6,
					.02,
					.3
				],
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.6,
					.04,
					.6
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#cbc9c1" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					2.34,
					-.3
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					1.8,
					.02,
					.6
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#f1efe9" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					-.6,
					2.34,
					.3
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.6,
					.02,
					.6
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#f1efe9" })]
			}),
			[
				-.6,
				0,
				.6
			].map((e) => /* @__PURE__ */ (0, U.jsxs)("group", { children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "corner-wardrobe-long-door",
				position: [
					e,
					1.18,
					.01
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.586,
						2.24,
						.02
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#f3f1eb" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#b8b5ad",
						thickness: .0025
					})
				]
			}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e + (e === .6 ? -.22 : .22),
					1.15,
					.024
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.018,
					.25,
					.008
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#d7d4cc" })]
			})] }, e)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "corner-wardrobe-return-door",
				position: [
					-.292,
					1.18,
					.3
				],
				rotation: [
					0,
					Math.PI / 2,
					0
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.586,
						2.24,
						.016
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#f3f1eb" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#b8b5ad",
						thickness: .0025
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					-.278,
					1.15,
					.49
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.008,
					.25,
					.018
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#d7d4cc" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/storage/rounded-storage-panel.tsx
function Ud({ size: e, position: t, color: n, outline: i = "#716760", castShadow: a = !1 }) {
	return /* @__PURE__ */ (0, U.jsxs)("mesh", {
		position: t,
		castShadow: a,
		receiveShadow: !0,
		children: [
			/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: e }),
			/* @__PURE__ */ (0, U.jsx)(I, { color: n }),
			/* @__PURE__ */ (0, U.jsx)(r, {
				thickness: .0045,
				color: i,
				screenspace: !1
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/storage/cane-wardrobe/woven-inset.tsx
function Wd({ width: e, height: t, y: n, z: r }) {
	let i = Math.max(4, Math.round(t / .12));
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		position: [
			0,
			n,
			r
		],
		children: [
			/* @__PURE__ */ (0, U.jsx)(Ud, {
				size: [
					e,
					t,
					.018
				],
				position: [
					0,
					0,
					0
				],
				color: "#c6a47d",
				outline: "#8c6e53"
			}),
			Array.from({ length: 7 }, (n, r) => {
				let i = -e / 2 + (r + 1) * e / 8;
				return /* @__PURE__ */ (0, U.jsxs)("mesh", {
					position: [
						i,
						0,
						.012
					],
					children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.014,
						t * .88,
						.008
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#e0c8a8" })]
				}, `vertical-${r}`);
			}),
			Array.from({ length: i }, (n, r) => {
				let a = -t / 2 + (r + 1) * t / (i + 1);
				return /* @__PURE__ */ (0, U.jsxs)("mesh", {
					position: [
						0,
						a,
						.014
					],
					children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						e * .9,
						.012,
						.008
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#9d7a59" })]
				}, `horizontal-${r}`);
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/storage/cane-wardrobe/cane-door.tsx
function Gd({ width: e, height: t, frontZ: n }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", { children: [
		/* @__PURE__ */ (0, U.jsx)(Ud, {
			size: [
				e,
				t,
				.038
			],
			position: [
				0,
				t / 2,
				n
			],
			color: "#e7ddd5",
			outline: "#756b65"
		}),
		/* @__PURE__ */ (0, U.jsx)(Wd, {
			width: e - .13,
			height: .78,
			y: t - .48,
			z: n + .025
		}),
		/* @__PURE__ */ (0, U.jsx)(Wd, {
			width: e - .13,
			height: .68,
			y: .48,
			z: n + .025
		})
	] });
}
//#endregion
//#region packages/catalog/src/furnishing/presets/storage/cane-wardrobe/cane-wardrobe.tsx
function Kd({ width: e }) {
	let t = 2.15, n = .38, r = e / 2 - .025;
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "placard-cannage-couloir-custom",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(Ud, {
				size: [
					e - .11,
					2.0949999999999998,
					.035
				],
				position: [
					0,
					2.0949999999999998 / 2,
					-.38 / 2 + .018
				],
				color: "#ded5ce"
			}),
			[-1, 1].map((r) => /* @__PURE__ */ (0, U.jsx)(Ud, {
				size: [
					.055,
					t,
					n
				],
				position: [
					r * (e / 2 - .0275),
					t / 2,
					0
				],
				color: "#e8dfd8"
			}, r)),
			/* @__PURE__ */ (0, U.jsx)(Ud, {
				size: [
					e,
					.055,
					n
				],
				position: [
					0,
					2.1225,
					0
				],
				color: "#e8dfd8"
			}),
			[-1, 1].map((e) => /* @__PURE__ */ (0, U.jsxs)("group", {
				position: [
					e * (r / 2 + .0125),
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)(Gd, {
					width: r,
					height: 2.07,
					frontZ: .21
				}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
					position: [
						-e * (r / 2 - .055),
						1.02,
						.256
					],
					rotation: [
						Math.PI / 2,
						0,
						0
					],
					children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.025,
						.025,
						.055,
						14
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#8b765d" })]
				})]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/storage/open-shelf-closet.tsx
function qd() {
	let e = 2.15;
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "placard-etageres-couloir-custom",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(Ud, {
				size: [
					.63,
					2.14,
					.032
				],
				position: [
					0,
					1.0799999999999998,
					-.174
				],
				color: "#e9e5df"
			}),
			[-1, 1].map((t) => /* @__PURE__ */ (0, U.jsx)(Ud, {
				size: [
					.045,
					e,
					.38
				],
				position: [
					t * (.72 / 2 - .0225),
					e / 2,
					0
				],
				color: "#eeeae5"
			}, t)),
			/* @__PURE__ */ (0, U.jsx)(Ud, {
				size: [
					.63,
					.64,
					.34
				],
				position: [
					0,
					.32,
					.01
				],
				color: "#ebe7e1"
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.34,
					.202
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.018,
					.085,
					.022
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#9c8b78" })]
			}),
			[
				.72,
				1.08,
				1.44,
				1.8,
				2.12
			].map((e) => /* @__PURE__ */ (0, U.jsx)(Ud, {
				size: [
					.6599999999999999,
					.035,
					.355
				],
				position: [
					0,
					e,
					.005
				],
				color: "#c99f72",
				outline: "#806247"
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/storage/utility-shelving.tsx
var Jd = [
	.9,
	1.8,
	.45
];
function Yd({ size: e = Jd } = {}) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "utility-shelving",
		scale: [
			e[0] / .9,
			e[1] / 1.8,
			e[2] / .45
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "upright",
				size: [
					.03,
					1.8,
					.03
				],
				position: [
					-.435,
					.9,
					-.21
				],
				color: "#606b70",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "upright",
				size: [
					.03,
					1.8,
					.03
				],
				position: [
					-.435,
					.9,
					.21
				],
				color: "#606b70",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "upright",
				size: [
					.03,
					1.8,
					.03
				],
				position: [
					.435,
					.9,
					-.21
				],
				color: "#606b70",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "upright",
				size: [
					.03,
					1.8,
					.03
				],
				position: [
					.435,
					.9,
					.21
				],
				color: "#606b70",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "shelf",
				size: [
					.86,
					.03,
					.41
				],
				position: [
					0,
					.06,
					0
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "shelf",
				size: [
					.86,
					.03,
					.41
				],
				position: [
					0,
					.48,
					0
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "shelf",
				size: [
					.86,
					.03,
					.41
				],
				position: [
					0,
					.9,
					0
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "shelf",
				size: [
					.86,
					.03,
					.41
				],
				position: [
					0,
					1.32,
					0
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "shelf",
				size: [
					.86,
					.03,
					.41
				],
				position: [
					0,
					1.785,
					0
				],
				color: "#e8e5dc",
				radius: .006
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/storage/workbench.tsx
var Xd = [
	1.5,
	.9,
	.65
];
function Zd({ size: e = Xd } = {}) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "workbench",
		scale: [
			e[0] / 1.5,
			e[1] / .9,
			e[2] / .65
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "worktop",
				size: [
					1.5,
					.06,
					.65
				],
				position: [
					0,
					.87,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "leg",
				size: [
					.035,
					.84,
					.035
				],
				position: [
					-.68,
					.42,
					-.255
				],
				color: "#606b70",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "leg",
				size: [
					.035,
					.84,
					.035
				],
				position: [
					-.68,
					.42,
					.255
				],
				color: "#606b70",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "leg",
				size: [
					.035,
					.84,
					.035
				],
				position: [
					.68,
					.42,
					-.255
				],
				color: "#606b70",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "leg",
				size: [
					.035,
					.84,
					.035
				],
				position: [
					.68,
					.42,
					.255
				],
				color: "#606b70",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "lower-shelf",
				size: [
					1.35,
					.035,
					.5
				],
				position: [
					0,
					.22,
					0
				],
				color: "#bd9367",
				radius: .006
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/storage/toolbox.tsx
var Qd = [
	.45,
	.3,
	.24
];
function $d({ size: e = Qd } = {}) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "toolbox",
		scale: [
			e[0] / .45,
			e[1] / .3,
			e[2] / .24
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "case",
				size: [
					.45,
					.2,
					.24
				],
				position: [
					0,
					.1,
					0
				],
				color: "#57758c",
				radius: .02,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "lid",
				size: [
					.45,
					.032,
					.24
				],
				position: [
					0,
					.216,
					0
				],
				color: "#57758c",
				radius: .01
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "handle-support",
				size: [
					.025,
					.053,
					.025
				],
				position: [
					-.09,
					.2585,
					0
				],
				color: "#606b70",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "handle-support",
				size: [
					.025,
					.053,
					.025
				],
				position: [
					.09,
					.2585,
					0
				],
				color: "#606b70",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "handle",
				size: [
					.205,
					.025,
					.035
				],
				position: [
					0,
					.2875,
					0
				],
				color: "#606b70",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "latch",
				size: [
					.035,
					.055,
					.012
				],
				position: [
					-.15,
					.2,
					.123
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "latch",
				size: [
					.035,
					.055,
					.012
				],
				position: [
					.15,
					.2,
					.123
				],
				color: "#e8e5dc",
				radius: .006
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/kitchen/kitchen-base-cabinet-case.tsx
function ef({ width: e, depth: t, frontColor: n = "#f4f2ec", worktopColor: r = "#d6b984" }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "kitchen-base-cabinet-case",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.045,
					-.015
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					e,
					.09,
					t - .03
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#9a8b77" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					e,
					.77,
					t - .04
				],
				position: [
					0,
					.475,
					-.02
				],
				color: n,
				radius: .008
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "kitchen-worktop",
				size: [
					e,
					.04,
					t
				],
				position: [
					0,
					.88,
					0
				],
				color: r,
				radius: .006
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/kitchen/kitchen-base-cabinet.tsx
var tf = [
	.6,
	.9,
	.63
];
function nf({ size: e = tf, variant: t = "default" }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "kitchen-base-cabinet",
		scale: [
			e[0] / .8,
			e[1] / .9,
			e[2] / .63
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(ef, {
				frontColor: Vn(t),
				width: .8,
				depth: .63
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "kitchen-base-drawer",
				size: [
					.72,
					.17,
					.03
				],
				position: [
					0,
					.72,
					.29
				],
				color: Vn(t),
				radius: .006
			}),
			[-.19, .19].map((e) => /* @__PURE__ */ (0, U.jsxs)("group", { children: [/* @__PURE__ */ (0, U.jsx)(K, {
				name: "kitchen-base-door",
				size: [
					.35,
					.46,
					.03
				],
				position: [
					e,
					.39,
					.29
				],
				color: Vn(t),
				radius: .006
			}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "kitchen-cabinet-pull",
				position: [
					e > 0 ? .055 : -.055,
					.5,
					.31
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.025,
					.12,
					.01
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#7f817b" })]
			})] }, e)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "kitchen-drawer-pull",
				position: [
					0,
					.72,
					.31
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.22,
					.018,
					.01
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#7f817b" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/kitchen/kitchen-sink-cabinet.tsx
var rf = [
	.6,
	1.12,
	.63
];
function af({ size: e = rf, variant: t = "default" }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "kitchen-sink-cabinet",
		scale: [
			e[0],
			e[1] / 1.12,
			e[2] / .63
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(ef, {
				frontColor: Vn(t),
				width: 1,
				depth: .63,
				worktopColor: "#ddd8ca"
			}),
			[-.24, .24].map((e) => /* @__PURE__ */ (0, U.jsxs)("group", { children: [/* @__PURE__ */ (0, U.jsx)(K, {
				name: "sink-cabinet-door",
				size: [
					.45,
					.64,
					.03
				],
				position: [
					e,
					.48,
					.29
				],
				color: Vn(t),
				radius: .006
			}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "sink-cabinet-pull",
				position: [
					e > 0 ? .08 : -.08,
					.62,
					.31
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.025,
					.15,
					.01
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#7f817b" })]
			})] }, e)),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "kitchen-sink-basin",
				size: [
					.55,
					.035,
					.36
				],
				position: [
					0,
					.905,
					.02
				],
				color: "#aeb9b7",
				radius: .045,
				outlineColor: "#6f7b79"
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "kitchen-sink-drain",
				position: [
					0,
					.925,
					.02
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.035,
					.035,
					.006,
					18
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#677775" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "kitchen-faucet-stem",
				position: [
					0,
					1,
					-.19
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.018,
					.022,
					.24,
					14
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#8d9997" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "kitchen-faucet-spout",
				position: [
					0,
					1.08,
					-.11
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.015,
					.015,
					.16,
					14
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#8d9997" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/kitchen/kitchen-wall-cabinet.tsx
var of = [
	.6,
	.8,
	.35
];
function sf({ size: e = of, variant: t = "default" }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "kitchen-wall-cabinet",
		scale: [
			e[0] / .8,
			e[1] / .8,
			e[2] / .35
		],
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.8,
					.8,
					.31
				],
				position: [
					0,
					.4,
					.155
				],
				color: Vn(t),
				radius: .009
			}),
			[-.195, .195].map((e) => /* @__PURE__ */ (0, U.jsxs)("group", { children: [/* @__PURE__ */ (0, U.jsx)(K, {
				name: "kitchen-wall-cabinet-door",
				size: [
					.37,
					.72,
					.03
				],
				position: [
					e,
					.4,
					.325
				],
				color: Vn(t),
				radius: .006
			}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "kitchen-wall-cabinet-pull",
				position: [
					e > 0 ? .055 : -.055,
					.12,
					.345
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.022,
					.12,
					.01
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#7f817b" })]
			})] }, e)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "kitchen-wall-cabinet-bottom-shadow",
				position: [
					0,
					.014,
					.18
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.72,
					.025,
					.3
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#c7c0b3" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/kitchen/counter-stool.tsx
var cf = [
	.48,
	.92,
	.5
];
function lf({ size: e = cf }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "counter-stool",
		scale: [
			e[0] / .48,
			e[1] / .92,
			e[2] / .5
		],
		userData: { walkCollider: !0 },
		children: [
			[-.19, .19].flatMap((e) => [-.2, .2].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "counter-stool-leg",
				position: [
					e,
					.31,
					t
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.045,
					.62,
					.045
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#b58b5b" })]
			}, `${e}-${t}`))),
			[
				[
					-.19,
					0,
					.4,
					.03
				],
				[
					.19,
					0,
					.4,
					.03
				],
				[
					0,
					-.2,
					.38,
					.03
				],
				[
					0,
					.2,
					.38,
					.03
				]
			].map((e, t) => t < 2 ? /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "counter-stool-footrail",
				position: [
					e[0],
					e[2],
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.025,
					.035,
					.4
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#9b754e" })]
			}, t) : /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "counter-stool-footrail",
				position: [
					0,
					e[2],
					e[1]
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.38,
					.035,
					.025
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#9b754e" })]
			}, t)),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "counter-stool-seat",
				size: [
					.48,
					.1,
					.5
				],
				position: [
					0,
					.65,
					0
				],
				color: "#d9cbb4",
				radius: .045
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "counter-stool-back",
				size: [
					.48,
					.25,
					.07
				],
				position: [
					0,
					.795,
					-.215
				],
				color: "#d0ad78",
				radius: .025
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/kitchen/kitchen-pantry-cabinet.tsx
var uf = [
	.6,
	2.1,
	.63
];
function df({ size: e = uf, variant: t = "default" }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "kitchen-pantry-cabinet",
		scale: [
			e[0] / .6,
			e[1] / 2.1,
			e[2] / .63
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "pantry-plinth",
				size: [
					.56,
					.1,
					.56
				],
				position: [
					0,
					.05,
					0
				],
				color: "#716a60",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "pantry-case",
				size: [
					.6,
					2,
					.6
				],
				position: [
					0,
					1.1,
					-.015
				],
				color: Vn(t),
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "pantry-door",
				size: [
					.56,
					1.25,
					.025
				],
				position: [
					0,
					.75,
					.285
				],
				color: Vn(t),
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "pantry-handle",
				size: [
					.025,
					.16,
					.025
				],
				position: [
					.21,
					.75,
					.3025
				],
				color: "#777d77",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "pantry-door",
				size: [
					.56,
					.65,
					.025
				],
				position: [
					0,
					1.75,
					.285
				],
				color: Vn(t),
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "pantry-handle",
				size: [
					.025,
					.16,
					.025
				],
				position: [
					.21,
					1.75,
					.3025
				],
				color: "#777d77",
				radius: .006
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/kitchen/kitchen-island.tsx
var ff = [
	1.5,
	.9,
	.9
];
function pf({ size: e = ff, variant: t = "default" }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "kitchen-island",
		scale: [
			e[0] / 1.5,
			e[1] / .9,
			e[2] / .9
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "island-plinth",
				size: [
					1.28,
					.1,
					.64
				],
				position: [
					0,
					.05,
					-.1
				],
				color: "#716a60",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "island-case",
				size: [
					1.36,
					.76,
					.7
				],
				position: [
					0,
					.48,
					-.1
				],
				color: Vn(t),
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "island-worktop",
				size: [
					1.5,
					.04,
					.9
				],
				position: [
					0,
					.88,
					0
				],
				color: "#d6b984",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "island-door",
				size: [
					.42,
					.68,
					.022
				],
				position: [
					-.45,
					.48,
					.261
				],
				color: Vn(t),
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "island-pull",
				size: [
					.18,
					.022,
					.025
				],
				position: [
					-.45,
					.72,
					.282
				],
				color: "#777d77",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "island-door",
				size: [
					.42,
					.68,
					.022
				],
				position: [
					0,
					.48,
					.261
				],
				color: Vn(t),
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "island-pull",
				size: [
					.18,
					.022,
					.025
				],
				position: [
					0,
					.72,
					.282
				],
				color: "#777d77",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "island-door",
				size: [
					.42,
					.68,
					.022
				],
				position: [
					.45,
					.48,
					.261
				],
				color: Vn(t),
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "island-pull",
				size: [
					.18,
					.022,
					.025
				],
				position: [
					.45,
					.72,
					.282
				],
				color: "#777d77",
				radius: .006
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/kitchen/induction-cooktop.tsx
var mf = [
	.54,
	.01,
	.48
];
function hf({ size: e = mf }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "induction-cooktop",
		scale: [
			e[0] / .54,
			e[1] / .01,
			e[2] / .48
		],
		children: [/* @__PURE__ */ (0, U.jsx)(K, {
			name: "hob-glass",
			size: [
				.54,
				.008,
				.48
			],
			position: [
				0,
				.004,
				0
			],
			color: "#252e2d",
			radius: .003
		}), [-.14, .14].flatMap((e) => [-.12, .12].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: "hob-ring-marking",
			position: [
				e,
				.01,
				t
			],
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			children: [/* @__PURE__ */ (0, U.jsx)("ringGeometry", { args: [
				.068,
				.073,
				24
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#89928b" })]
		}, e + "-" + t)))]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/kitchen/kitchen-hob-cabinet.tsx
var gf = [
	.6,
	.91,
	.63
];
function _f({ size: e = gf, variant: t = "default" }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "kitchen-hob-cabinet",
		scale: [
			e[0] / .6,
			e[1] / .91,
			e[2] / .63
		],
		userData: { walkCollider: !0 },
		children: [/* @__PURE__ */ (0, U.jsx)(nf, {
			size: [
				.6,
				.9,
				.63
			],
			variant: t
		}), /* @__PURE__ */ (0, U.jsx)("group", {
			position: [
				0,
				.9,
				0
			],
			children: /* @__PURE__ */ (0, U.jsx)(hf, {})
		})]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/kitchen/two-step-stool.tsx
var vf = [
	.45,
	.45,
	.5
];
function yf({ size: e = vf } = {}) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "two-step-stool",
		scale: [
			e[0] / .45,
			e[1] / .45,
			e[2] / .5
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "upper-step",
				size: [
					.45,
					.035,
					.25
				],
				position: [
					0,
					.4325,
					-.125
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "lower-step",
				size: [
					.45,
					.035,
					.25
				],
				position: [
					0,
					.2125,
					.125
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "rear-leg",
				size: [
					.04,
					.415,
					.04
				],
				position: [
					-.19,
					.2075,
					-.22
				],
				color: "#bd9367",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "front-leg",
				size: [
					.04,
					.195,
					.04
				],
				position: [
					-.19,
					.0975,
					.22
				],
				color: "#bd9367",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "step-support",
				size: [
					.04,
					.415,
					.04
				],
				position: [
					-.19,
					.2075,
					-.02
				],
				color: "#bd9367",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "rear-leg",
				size: [
					.04,
					.415,
					.04
				],
				position: [
					.19,
					.2075,
					-.22
				],
				color: "#bd9367",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "front-leg",
				size: [
					.04,
					.195,
					.04
				],
				position: [
					.19,
					.0975,
					.22
				],
				color: "#bd9367",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "step-support",
				size: [
					.04,
					.415,
					.04
				],
				position: [
					.19,
					.2075,
					-.02
				],
				color: "#bd9367",
				radius: .006,
				outline: !1
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/kitchen/kitchen-trolley.tsx
var bf = [
	.7,
	.9,
	.45
];
function xf({ size: e = bf } = {}) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "kitchen-trolley",
		scale: [
			e[0] / .7,
			e[1] / .9,
			e[2] / .45
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "worktop",
				size: [
					.7,
					.04,
					.45
				],
				position: [
					0,
					.88,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "leg",
				size: [
					.035,
					.78,
					.035
				],
				position: [
					-.3,
					.47000000000000003,
					-.175
				],
				color: "#606b70",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "leg",
				size: [
					.035,
					.78,
					.035
				],
				position: [
					-.3,
					.47000000000000003,
					.175
				],
				color: "#606b70",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "leg",
				size: [
					.035,
					.78,
					.035
				],
				position: [
					.3,
					.47000000000000003,
					-.175
				],
				color: "#606b70",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "leg",
				size: [
					.035,
					.78,
					.035
				],
				position: [
					.3,
					.47000000000000003,
					.175
				],
				color: "#606b70",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "shelf",
				size: [
					.6,
					.025,
					.35
				],
				position: [
					0,
					.14,
					0
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "shelf",
				size: [
					.6,
					.025,
					.35
				],
				position: [
					0,
					.48,
					0
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "caster-fork",
				size: [
					.025,
					.05,
					.03
				],
				position: [
					-.3,
					.075,
					-.175
				],
				color: "#606b70",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "wheel",
				position: [
					-.3,
					.04,
					-.175
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.04,
					.04,
					.025,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#606b70" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "caster-fork",
				size: [
					.025,
					.05,
					.03
				],
				position: [
					-.3,
					.075,
					.175
				],
				color: "#606b70",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "wheel",
				position: [
					-.3,
					.04,
					.175
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.04,
					.04,
					.025,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#606b70" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "caster-fork",
				size: [
					.025,
					.05,
					.03
				],
				position: [
					.3,
					.075,
					-.175
				],
				color: "#606b70",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "wheel",
				position: [
					.3,
					.04,
					-.175
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.04,
					.04,
					.025,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#606b70" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "caster-fork",
				size: [
					.025,
					.05,
					.03
				],
				position: [
					.3,
					.075,
					.175
				],
				color: "#606b70",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "wheel",
				position: [
					.3,
					.04,
					.175
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.04,
					.04,
					.025,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#606b70" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/kitchen/bread-bin.tsx
var Sf = [
	.4,
	.25,
	.25
];
function Cf({ size: e = Sf } = {}) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "bread-bin",
		scale: [
			e[0] / .4,
			e[1] / .25,
			e[2] / .25
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "box",
				size: [
					.4,
					.215,
					.235
				],
				position: [
					0,
					.1075,
					-.0075
				],
				color: "#e8e5dc",
				radius: .025,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "lid",
				size: [
					.4,
					.035,
					.235
				],
				position: [
					0,
					.2325,
					-.0075
				],
				color: "#e8e5dc",
				radius: .014
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "pull",
				size: [
					.14,
					.022,
					.02
				],
				position: [
					0,
					.2,
					.115
				],
				color: "#bd9367",
				radius: .006
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/kitchen/dish-drying-rack.tsx
var wf = [
	.45,
	.15,
	.32
];
function Tf({ size: e = wf } = {}) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "dish-drying-rack",
		scale: [
			e[0] / .45,
			e[1] / .15,
			e[2] / .32
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "drain-tray",
				size: [
					.45,
					.02,
					.32
				],
				position: [
					0,
					.01,
					0
				],
				color: "#81958a",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "divider-post",
				size: [
					.008,
					.13,
					.008
				],
				position: [
					-.19,
					.085,
					-.115
				],
				color: "#606b70",
				radius: .003
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "divider-post",
				size: [
					.008,
					.13,
					.008
				],
				position: [
					-.19,
					.085,
					.115
				],
				color: "#606b70",
				radius: .003
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "divider-top",
				size: [
					.008,
					.008,
					.238
				],
				position: [
					-.19,
					.146,
					0
				],
				color: "#606b70",
				radius: .003
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "divider-post",
				size: [
					.008,
					.13,
					.008
				],
				position: [
					-.1357143,
					.085,
					-.115
				],
				color: "#606b70",
				radius: .003
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "divider-post",
				size: [
					.008,
					.13,
					.008
				],
				position: [
					-.1357143,
					.085,
					.115
				],
				color: "#606b70",
				radius: .003
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "divider-top",
				size: [
					.008,
					.008,
					.238
				],
				position: [
					-.1357143,
					.146,
					0
				],
				color: "#606b70",
				radius: .003
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "divider-post",
				size: [
					.008,
					.13,
					.008
				],
				position: [
					-.0814286,
					.085,
					-.115
				],
				color: "#606b70",
				radius: .003
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "divider-post",
				size: [
					.008,
					.13,
					.008
				],
				position: [
					-.0814286,
					.085,
					.115
				],
				color: "#606b70",
				radius: .003
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "divider-top",
				size: [
					.008,
					.008,
					.238
				],
				position: [
					-.0814286,
					.146,
					0
				],
				color: "#606b70",
				radius: .003
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "divider-post",
				size: [
					.008,
					.13,
					.008
				],
				position: [
					-.027142899999999998,
					.085,
					-.115
				],
				color: "#606b70",
				radius: .003
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "divider-post",
				size: [
					.008,
					.13,
					.008
				],
				position: [
					-.027142899999999998,
					.085,
					.115
				],
				color: "#606b70",
				radius: .003
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "divider-top",
				size: [
					.008,
					.008,
					.238
				],
				position: [
					-.027142899999999998,
					.146,
					0
				],
				color: "#606b70",
				radius: .003
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "divider-post",
				size: [
					.008,
					.13,
					.008
				],
				position: [
					.027142799999999995,
					.085,
					-.115
				],
				color: "#606b70",
				radius: .003
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "divider-post",
				size: [
					.008,
					.13,
					.008
				],
				position: [
					.027142799999999995,
					.085,
					.115
				],
				color: "#606b70",
				radius: .003
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "divider-top",
				size: [
					.008,
					.008,
					.238
				],
				position: [
					.027142799999999995,
					.146,
					0
				],
				color: "#606b70",
				radius: .003
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "divider-post",
				size: [
					.008,
					.13,
					.008
				],
				position: [
					.08142850000000001,
					.085,
					-.115
				],
				color: "#606b70",
				radius: .003
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "divider-post",
				size: [
					.008,
					.13,
					.008
				],
				position: [
					.08142850000000001,
					.085,
					.115
				],
				color: "#606b70",
				radius: .003
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "divider-top",
				size: [
					.008,
					.008,
					.238
				],
				position: [
					.08142850000000001,
					.146,
					0
				],
				color: "#606b70",
				radius: .003
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "divider-post",
				size: [
					.008,
					.13,
					.008
				],
				position: [
					.1357142,
					.085,
					-.115
				],
				color: "#606b70",
				radius: .003
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "divider-post",
				size: [
					.008,
					.13,
					.008
				],
				position: [
					.1357142,
					.085,
					.115
				],
				color: "#606b70",
				radius: .003
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "divider-top",
				size: [
					.008,
					.008,
					.238
				],
				position: [
					.1357142,
					.146,
					0
				],
				color: "#606b70",
				radius: .003
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "divider-post",
				size: [
					.008,
					.13,
					.008
				],
				position: [
					.1899999,
					.085,
					-.115
				],
				color: "#606b70",
				radius: .003
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "divider-post",
				size: [
					.008,
					.13,
					.008
				],
				position: [
					.1899999,
					.085,
					.115
				],
				color: "#606b70",
				radius: .003
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "divider-top",
				size: [
					.008,
					.008,
					.238
				],
				position: [
					.1899999,
					.146,
					0
				],
				color: "#606b70",
				radius: .003
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "side-rail",
				size: [
					.4,
					.012,
					.012
				],
				position: [
					0,
					.05,
					-.13
				],
				color: "#606b70",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "side-rail",
				size: [
					.4,
					.012,
					.012
				],
				position: [
					0,
					.05,
					.13
				],
				color: "#606b70",
				radius: .006
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/entryway/entryway-shoe-bench.tsx
var Ef = [
	1,
	.5,
	.38
];
function Df({ size: e = Ef }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "entryway-shoe-bench",
		scale: [
			e[0],
			e[1] / .5,
			e[2] / .38
		],
		userData: { walkCollider: !0 },
		children: [
			[-.44, .44].flatMap((e) => [-.15, .15].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.19,
					t
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.055,
					.38,
					.055
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#b88f5e" })]
			}, `${e}-${t}`))),
			[
				-.13,
				-.065,
				0,
				.065,
				.13
			].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				name: "shoe-bench-slat",
				size: [
					.86,
					.028,
					.035
				],
				position: [
					0,
					.12,
					e
				],
				color: "#cda775",
				radius: .005
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "shoe-bench-seat",
				size: [
					1,
					.12,
					.38
				],
				position: [
					0,
					.44,
					0
				],
				color: "#d8cbb5",
				radius: .035
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/entryway/wall-coat-rack.tsx
var Of = [
	.8,
	.32,
	.22
];
function kf({ size: e = Of }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "wall-coat-rack",
		scale: [
			e[0] / .8,
			e[1] / .32,
			e[2] / .22
		],
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					.8,
					.3,
					.035
				],
				position: [
					0,
					.15,
					.0175
				],
				color: "#cfaa76",
				radius: .008
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "coat-rack-top-shelf",
				size: [
					.78,
					.05,
					.22
				],
				position: [
					0,
					.295,
					.11
				],
				color: "#d9b682",
				radius: .007
			}),
			[
				-.3,
				-.15,
				0,
				.15,
				.3
			].map((e) => /* @__PURE__ */ (0, U.jsxs)("group", {
				position: [
					e,
					.14,
					.04
				],
				children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
					name: "coat-hook-support",
					position: [
						0,
						0,
						.035
					],
					rotation: [
						Math.PI / 2,
						0,
						0
					],
					children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.018,
						.018,
						.07,
						10
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#707975" })]
				}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
					name: "coat-hook-tip",
					position: [
						0,
						.038,
						.075
					],
					children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.014,
						.014,
						.08,
						10
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#707975" })]
				})]
			}, e))
		]
	});
}
var Af = 1.6515, jf = Af / 3, Mf = 1.68, Nf = "#d5ae79", Pf = "#e8c994", Ff = "#b98755", If = "#8e653f";
//#endregion
//#region packages/catalog/src/furnishing/presets/entryway/louvered-closet/closet-panel-block.tsx
function Lf({ size: e, position: t, color: n, rotation: i = [
	0,
	0,
	0
], outline: a = If }) {
	return /* @__PURE__ */ (0, U.jsxs)("mesh", {
		position: t,
		rotation: i,
		castShadow: !0,
		receiveShadow: !0,
		children: [
			/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: e }),
			/* @__PURE__ */ (0, U.jsx)(I, { color: n }),
			/* @__PURE__ */ (0, U.jsx)(r, {
				thickness: .0045,
				color: a,
				screenspace: !1
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/entryway/louvered-closet/louver-band.tsx
function Rf({ bottom: e, top: t }) {
	let n = .062, r = Math.floor((t - e) / n);
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: "lames-persienne-entree",
		children: Array.from({ length: r }, (t, r) => {
			let i = e + n * (r + .5);
			return /* @__PURE__ */ (0, U.jsx)(Lf, {
				size: [
					.052,
					.026,
					jf - .15
				],
				position: [
					.036,
					i,
					0
				],
				rotation: [
					0,
					0,
					-.2
				],
				color: r % 3 == 1 ? Pf : Nf,
				outline: "#795137"
			}, i);
		})
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/entryway/louvered-closet/sliding-louver-panel.tsx
function zf({ position: e }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "panneau-coulissant-persienne-entree",
		position: e,
		children: [
			/* @__PURE__ */ (0, U.jsx)(Lf, {
				size: [
					.038,
					Mf - .16,
					jf - .12
				],
				position: [
					-.012,
					Mf / 2,
					0
				],
				color: Ff
			}),
			/* @__PURE__ */ (0, U.jsx)(Rf, {
				bottom: .16,
				top: .73
			}),
			/* @__PURE__ */ (0, U.jsx)(Rf, {
				bottom: .88,
				top: 1.62
			}),
			[-1, 1].map((e) => /* @__PURE__ */ (0, U.jsx)(Lf, {
				size: [
					.064,
					Mf,
					.07
				],
				position: [
					.012,
					Mf / 2,
					e * (jf / 2 - .035)
				],
				color: Nf
			}, e)),
			[.0525, Mf - .0525].map((e) => /* @__PURE__ */ (0, U.jsx)(Lf, {
				size: [
					.064,
					.105,
					jf
				],
				position: [
					.012,
					e,
					0
				],
				color: Nf
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(Lf, {
				size: [
					.068,
					.13,
					jf - .07
				],
				position: [
					.018,
					.805,
					0
				],
				color: Nf
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/entryway/louvered-closet/louvered-closet.tsx
function Bf() {
	let e = Array.from({ length: 3 }, (e, t) => (t - 1) * jf);
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "portes-coulissantes-placard-entree-custom",
		userData: { walkCollider: !0 },
		children: [[.0275, Mf + .0275].map((e) => /* @__PURE__ */ (0, U.jsx)(Lf, {
			size: [
				.075,
				.055,
				Af - .07
			],
			position: [
				.015,
				e,
				0
			],
			color: Ff
		}, e)), e.map((e, t) => /* @__PURE__ */ (0, U.jsx)(zf, { position: [
			t === 1 ? .018 : 0,
			0,
			e
		] }, e))]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/entryway/shoe-cabinet.tsx
var Vf = [
	.8,
	1.1,
	.3
];
function Hf({ size: e = Vf } = {}) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "shoe-cabinet",
		scale: [
			e[0] / .8,
			e[1] / 1.1,
			e[2] / .3
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "bottom",
				size: [
					.8,
					.025,
					.3
				],
				position: [
					0,
					.0125,
					0
				],
				color: "#bd9367",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "top",
				size: [
					.8,
					.025,
					.3
				],
				position: [
					0,
					1.0875000000000001,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "side",
				size: [
					.025,
					1.05,
					.3
				],
				position: [
					-.3875,
					.55,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "side",
				size: [
					.025,
					1.05,
					.3
				],
				position: [
					.3875,
					.55,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "back",
				size: [
					.75,
					1.05,
					.02
				],
				position: [
					0,
					.55,
					-.13999999999999999
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "tilt-front",
				size: [
					.744,
					.325,
					.02
				],
				position: [
					0,
					.205,
					.14
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "recessed-pull",
				size: [
					.2,
					.015,
					.002
				],
				position: [
					0,
					.32499999999999996,
					.153
				],
				color: "#606b70",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "tilt-front",
				size: [
					.744,
					.325,
					.02
				],
				position: [
					0,
					.55,
					.14
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "recessed-pull",
				size: [
					.2,
					.015,
					.002
				],
				position: [
					0,
					.67,
					.153
				],
				color: "#606b70",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "tilt-front",
				size: [
					.744,
					.325,
					.02
				],
				position: [
					0,
					.895,
					.14
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "recessed-pull",
				size: [
					.2,
					.015,
					.002
				],
				position: [
					0,
					1.0150000000000001,
					.153
				],
				color: "#606b70",
				radius: .006
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/entryway/umbrella-stand.tsx
var Uf = [
	.28,
	.55,
	.28
];
function Wf({ size: e = Uf } = {}) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "umbrella-stand",
		scale: [
			e[0] / .28,
			e[1] / .55,
			e[2] / .28
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "drip-tray",
				size: [
					.28,
					.035,
					.28
				],
				position: [
					0,
					.0175,
					0
				],
				color: "#81958a",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.03,
					.515,
					.02
				],
				position: [
					-.09,
					.2925,
					-.125
				],
				color: "#81958a",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.02,
					.515,
					.03
				],
				position: [
					-.125,
					.2925,
					-.09
				],
				color: "#81958a",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.03,
					.515,
					.02
				],
				position: [
					0,
					.2925,
					-.125
				],
				color: "#81958a",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.02,
					.515,
					.03
				],
				position: [
					-.125,
					.2925,
					0
				],
				color: "#81958a",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.03,
					.515,
					.02
				],
				position: [
					.09,
					.2925,
					-.125
				],
				color: "#81958a",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.02,
					.515,
					.03
				],
				position: [
					-.125,
					.2925,
					.09
				],
				color: "#81958a",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.03,
					.515,
					.02
				],
				position: [
					-.09,
					.2925,
					.125
				],
				color: "#81958a",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.02,
					.515,
					.03
				],
				position: [
					.125,
					.2925,
					-.09
				],
				color: "#81958a",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.03,
					.515,
					.02
				],
				position: [
					0,
					.2925,
					.125
				],
				color: "#81958a",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.02,
					.515,
					.03
				],
				position: [
					.125,
					.2925,
					0
				],
				color: "#81958a",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.03,
					.515,
					.02
				],
				position: [
					.09,
					.2925,
					.125
				],
				color: "#81958a",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.02,
					.515,
					.03
				],
				position: [
					.125,
					.2925,
					.09
				],
				color: "#81958a",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "rim",
				size: [
					.28,
					.03,
					.02
				],
				position: [
					0,
					.535,
					-.13
				],
				color: "#81958a",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "rim",
				size: [
					.28,
					.03,
					.02
				],
				position: [
					0,
					.535,
					.13
				],
				color: "#81958a",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "rim",
				size: [
					.02,
					.03,
					.24
				],
				position: [
					-.13,
					.535,
					0
				],
				color: "#81958a",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "rim",
				size: [
					.02,
					.03,
					.24
				],
				position: [
					.13,
					.535,
					0
				],
				color: "#81958a",
				radius: .006
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/entryway/freestanding-coat-stand.tsx
var Gf = [
	.5,
	1.75,
	.5
];
function Kf({ size: e = Gf } = {}) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "freestanding-coat-stand",
		scale: [
			e[0] / .5,
			e[1] / 1.75,
			e[2] / .5
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "foot",
				size: [
					.5,
					.04,
					.07
				],
				position: [
					0,
					.02,
					0
				],
				color: "#bd9367",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "foot",
				size: [
					.07,
					.04,
					.5
				],
				position: [
					0,
					.02,
					0
				],
				color: "#bd9367",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "post",
				size: [
					.055,
					1.71,
					.055
				],
				position: [
					0,
					.895,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "peg-bar",
				size: [
					.42,
					.03,
					.03
				],
				position: [
					0,
					1.3,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "peg-tip",
				size: [
					.03,
					.06,
					.03
				],
				position: [
					-.195,
					1.315,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "peg-tip",
				size: [
					.03,
					.06,
					.03
				],
				position: [
					.195,
					1.315,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "peg-bar",
				size: [
					.03,
					.03,
					.42
				],
				position: [
					0,
					1.5,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "peg-tip",
				size: [
					.03,
					.06,
					.03
				],
				position: [
					0,
					1.515,
					-.195
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "peg-tip",
				size: [
					.03,
					.06,
					.03
				],
				position: [
					0,
					1.515,
					.195
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "peg-bar",
				size: [
					.42,
					.03,
					.03
				],
				position: [
					0,
					1.68,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "peg-tip",
				size: [
					.03,
					.06,
					.03
				],
				position: [
					-.195,
					1.6949999999999998,
					0
				],
				color: "#bd9367",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "peg-tip",
				size: [
					.03,
					.06,
					.03
				],
				position: [
					.195,
					1.6949999999999998,
					0
				],
				color: "#bd9367",
				radius: .006
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/entryway/oak-slab-bench.tsx
var qf = [
	1.4,
	.45,
	.32
];
function Jf({ size: e = qf }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "oak-slab-bench",
		scale: [
			e[0] / 1.4,
			e[1] / .45,
			e[2] / .32
		],
		userData: { walkCollider: !0 },
		children: [/* @__PURE__ */ (0, U.jsx)(K, {
			name: "bench-oak-seat",
			size: [
				1.4,
				.045,
				.32
			],
			position: [
				0,
				.4275,
				0
			],
			color: "#b89d78",
			radius: .003,
			outline: !1
		}), [-.52, .52].map((e) => /* @__PURE__ */ (0, U.jsxs)("group", {
			name: "bench-steel-leg-frame",
			children: [[-.13, .13].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.2025,
					t
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.025,
					.405,
					.025
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#292b29" })]
			}, t)), /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.018,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.025,
					.036,
					.285
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#292b29" })]
			})]
		}, e))]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/hallway/hallway-console-table.tsx
var Yf = [
	1.1,
	.8,
	.35
];
function Xf({ size: e = Yf }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "hallway-console-table",
		scale: [
			e[0] / 1.1,
			e[1] / .8,
			e[2] / .35
		],
		userData: { walkCollider: !0 },
		children: [
			[-.45, .45].flatMap((e) => [-.12, .12].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.345,
					t
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.05,
					.69,
					.05
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#b58b59" })]
			}, `${e}-${t}`))),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					1.1,
					.045,
					.35
				],
				position: [
					0,
					.7775,
					0
				],
				color: "#d5b27d",
				radius: .008
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				size: [
					1.02,
					.15,
					.31
				],
				position: [
					0,
					.68,
					0
				],
				color: "#cda873",
				radius: .008
			}),
			[-.25, .25].map((e) => /* @__PURE__ */ (0, U.jsxs)("group", { children: [/* @__PURE__ */ (0, U.jsx)(K, {
				name: "console-drawer",
				size: [
					.46,
					.12,
					.018
				],
				position: [
					e,
					.69,
					.158
				],
				color: "#ddc092",
				radius: .006
			}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "console-drawer-knob",
				position: [
					e,
					.69,
					.167
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.018,
					.018,
					.016,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#7e7568" })]
			})] }, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/hallway/floating-wall-shelf.tsx
var Zf = [
	.8,
	.22,
	.25
];
function Qf({ size: e = Zf }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "floating-wall-shelf",
		scale: [
			e[0] / .8,
			e[1] / .22,
			e[2] / .25
		],
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "floating-shelf-board",
				size: [
					.8,
					.06,
					.25
				],
				position: [
					0,
					.19,
					.125
				],
				color: "#d4af7a",
				radius: .008
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "floating-shelf-back-lip",
				size: [
					.78,
					.13,
					.035
				],
				position: [
					0,
					.15,
					.0175
				],
				color: "#c49a68",
				radius: .006
			}),
			[-.27, .27].map((e) => /* @__PURE__ */ (0, U.jsxs)("group", { children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "shelf-wall-bracket",
				position: [
					e,
					.09,
					.025
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.03,
					.18,
					.05
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#747a75" })]
			}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "shelf-depth-bracket",
				position: [
					e,
					.075,
					.115
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.03,
					.035,
					.18
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#747a75" })]
			})] }, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/deciduous-tree/deciduous-crown-geometry.ts
var $f = [
	[
		-.61,
		2.65,
		.12,
		.57,
		.57,
		.65
	],
	[
		.55,
		2.76,
		.22,
		.63,
		.6,
		.62
	],
	[
		-.12,
		2.77,
		-.55,
		.66,
		.61,
		.58
	],
	[
		.08,
		2.55,
		.59,
		.59,
		.48,
		.52
	],
	[
		-.48,
		3.25,
		-.18,
		.65,
		.62,
		.66
	],
	[
		.42,
		3.31,
		-.23,
		.66,
		.61,
		.62
	],
	[
		-.2,
		3.28,
		.48,
		.66,
		.61,
		.62
	],
	[
		.02,
		3.75,
		-.01,
		.57,
		.45,
		.56
	]
], ep = [
	"#568743",
	"#669747",
	"#487b45",
	"#598941",
	"#79a54d",
	"#83ab51",
	"#6e9b47",
	"#92b65c"
];
function tp() {
	let e = $f.flatMap(([e, t, n, r, i, a], o) => Array.from({ length: 4 }, (s, c) => {
		let l = o * 1.7 + c * 2.39996, u = c > 0, f = new p(1, 2), m = f.getAttribute("position");
		for (let s = 0; s < m.count; s++) {
			let c = m.getX(s), d = m.getY(s), f = m.getZ(s), p = 1 + .075 * Math.sin(c * 7 + o) * Math.cos(f * 6 - d * 5), h = u ? .48 : 1;
			m.setXYZ(s, e + c * r * p * h + (u ? Math.cos(l) * r * .68 : 0), t + d * i * p * h + (u ? .12 * Math.sin(l * 2) : 0), n + f * a * p * h + (u ? Math.sin(l) * a * .68 : 0));
		}
		let h = new d(ep[o]).multiplyScalar(u ? 1.025 : 1);
		return f.setAttribute("color", new je(Array.from({ length: m.count }, () => [
			h.r,
			h.g,
			h.b
		]).flat(), 3)), f;
	})), t = N(e);
	return e.forEach((e) => e.dispose()), t;
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/deciduous-tree/deciduous-wood-geometry.ts
function np() {
	let e = [], t = (t, n, r, i = 9) => {
		let a = new k(t.map((e) => new M(...e)));
		for (let t = 0; t < i; t++) {
			let o = a.getPoint(t / i), s = a.getPoint((t + 1) / i), c = s.clone().sub(o), l = (e) => r + (n - r) * (1 - e) ** 1.15, u = new Me(l((t + 1) / i), l(t / i), c.length() + .012, 9);
			u.applyQuaternion(new S().setFromUnitVectors(new M(0, 1, 0), c.normalize())), u.translate(...o.add(s).multiplyScalar(.5).toArray()), e.push(u);
		}
	};
	t([
		[
			0,
			.08,
			0
		],
		[
			-.07,
			.65,
			.03
		],
		[
			.03,
			1.3,
			0
		],
		[
			-.1,
			1.95,
			-.04
		],
		[
			.04,
			2.8,
			-.12
		],
		[
			.02,
			3.65,
			0
		]
	], .24, .025, 18), t([
		[
			-.02,
			1.25,
			0
		],
		[
			-.3,
			1.8,
			.02
		],
		[
			-.61,
			2.14,
			.12
		],
		[
			-.82,
			2.75,
			.16
		]
	], .14, .018), t([
		[
			-.08,
			1.72,
			-.02
		],
		[
			.23,
			2.07,
			.06
		],
		[
			.59,
			2.37,
			.2
		],
		[
			.78,
			2.94,
			.22
		]
	], .125, .018), t([
		[
			0,
			1.43,
			0
		],
		[
			.12,
			1.95,
			.28
		],
		[
			.03,
			2.3,
			.54
		],
		[
			.1,
			2.8,
			.72
		]
	], .115, .015), t([
		[
			-.08,
			1.9,
			-.04
		],
		[
			-.18,
			2.21,
			-.32
		],
		[
			-.22,
			2.68,
			-.62
		],
		[
			-.35,
			3.14,
			-.71
		]
	], .1, .015);
	for (let e = 0; e < 5; e++) {
		let n = e * Math.PI * 2 / 5 + .3;
		t([
			[
				0,
				.34,
				0
			],
			[
				Math.cos(n) * .23,
				.12,
				Math.sin(n) * .23
			],
			[
				Math.cos(n + .15) * .46,
				.025,
				Math.sin(n + .15) * .46
			]
		], .105, .008, 5);
	}
	let n = N(e);
	return e.forEach((e) => e.dispose()), n;
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/deciduous-tree/deciduous-tree.tsx
var rp = [
	2.4,
	4.2,
	2.4
];
function ip({ size: e }) {
	let t = (0, R.useMemo)(() => {
		let e = {
			wood: np(),
			crown: tp()
		}, t = new $e();
		Object.values(e).forEach((e) => {
			e.computeBoundingBox(), t.union(e.boundingBox);
		});
		let n = t.getSize(new M()), r = t.getCenter(new M()), i = new o().makeScale(2.4 / n.x, 4.2 / n.y, 2.4 / n.z).multiply(new o().makeTranslation(-r.x, -t.min.y, -r.z));
		return Object.values(e).forEach((e) => e.applyMatrix4(i)), e;
	}, []);
	return (0, R.useEffect)(() => () => Object.values(t).forEach((e) => e.dispose()), [t]), /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "deciduous-tree",
		scale: [
			e[0] / 2.4,
			e[1] / 4.2,
			e[2] / 2.4
		],
		children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: "deciduous-roots-trunk-and-boughs",
			geometry: t.wood,
			castShadow: !0,
			receiveShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)(I, { color: "#896547" }), /* @__PURE__ */ (0, U.jsx)(r, {
				color: "#4c4030",
				thickness: .003
			})]
		}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: "deciduous-layered-crown",
			geometry: t.crown,
			castShadow: !0,
			receiveShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)(I, { vertexColors: !0 }), /* @__PURE__ */ (0, U.jsx)(r, {
				color: "#354f32",
				thickness: .002
			})]
		})]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/garden-hedge/hedge-foliage.tsx
var ap = "#68825b", op = "#485f43", sp = [
	[
		-.7,
		.42,
		.291,
		.34,
		.22,
		"#78936a"
	],
	[
		-.2,
		.92,
		.291,
		.42,
		.28,
		"#5d7953"
	],
	[
		.35,
		.48,
		.291,
		.38,
		.25,
		"#718d63"
	],
	[
		.72,
		1.02,
		.291,
		.28,
		.2,
		"#58734f"
	]
];
function cp() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "garden-hedge-clipped-foliage",
		children: [/* @__PURE__ */ (0, U.jsx)(K, {
			name: "garden-hedge-main-crown",
			size: [
				2,
				1.32,
				.56
			],
			position: [
				0,
				.74,
				0
			],
			color: ap,
			outlineColor: op,
			radius: .08
		}), [-1, 1].flatMap((e) => sp.map(([t, n, r, i, a, o], s) => /* @__PURE__ */ (0, U.jsx)(K, {
			name: "garden-hedge-foliage-patch",
			size: [
				i,
				a,
				.018
			],
			position: [
				t,
				n,
				e * r
			],
			rotation: [
				0,
				0,
				(s % 2 ? 1 : -1) * .08
			],
			color: o,
			radius: .035,
			outline: !1
		}, `${e}-${s}`)))]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/garden-hedge/garden-hedge.tsx
var lp = [
	2,
	1.4,
	.6
];
function up({ size: e = lp }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "garden-hedge",
		userData: { walkCollider: !0 },
		scale: [
			e[0] / lp[0],
			e[1] / lp[1],
			e[2] / lp[2]
		],
		children: [[
			-.66,
			-.22,
			.22,
			.66
		].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: "garden-hedge-trunk",
			position: [
				e,
				.12,
				0
			],
			castShadow: !0,
			receiveShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
				.035,
				.05,
				.24,
				8
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#70563b" })]
		}, e)), /* @__PURE__ */ (0, U.jsx)(cp, {})]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/garden-shrub.tsx
var dp = [
	1.35,
	.92,
	1.15
], fp = [
	[
		-.275,
		.4,
		0,
		.4,
		"#557a4c"
	],
	[
		.275,
		.42,
		.1,
		.4,
		"#668b57"
	],
	[
		0,
		.52,
		-.175,
		.4,
		"#739760"
	],
	[
		-.05,
		.3,
		.275,
		.3,
		"#4f7148"
	]
];
function pp({ size: e }) {
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: "garden-shrub",
		scale: [
			e[0] / dp[0],
			e[1] / dp[1],
			e[2] / dp[2]
		],
		children: fp.map(([e, t, n, r, i], a) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
			position: [
				e,
				t,
				n
			],
			castShadow: !0,
			receiveShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
				r,
				8,
				6
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: i })]
		}, a))
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/olive-tree/olive-tree-structure.ts
var mp = [
	[
		0,
		.06,
		0,
		.36
	],
	[
		-.17,
		.45,
		.06,
		.29
	],
	[
		-.2,
		.92,
		-.05,
		.25
	],
	[
		.03,
		1.38,
		-.02,
		.21
	],
	[
		.1,
		1.72,
		.03,
		.14
	]
], hp = [
	{
		center: [
			-1.12,
			2.22,
			.12
		],
		radius: [
			.6,
			.38,
			.54
		],
		fork: [
			-.1,
			1.15,
			-.02
		]
	},
	{
		center: [
			-.76,
			2.65,
			-.5
		],
		radius: [
			.62,
			.4,
			.51
		],
		fork: [
			.02,
			1.4,
			-.02
		]
	},
	{
		center: [
			-.28,
			2.97,
			-.22
		],
		radius: [
			.55,
			.42,
			.49
		],
		fork: [
			.1,
			1.7,
			.03
		]
	},
	{
		center: [
			.48,
			3.06,
			-.33
		],
		radius: [
			.61,
			.39,
			.52
		],
		fork: [
			.1,
			1.7,
			.03
		]
	},
	{
		center: [
			1.03,
			2.64,
			.02
		],
		radius: [
			.65,
			.44,
			.54
		],
		fork: [
			.02,
			1.4,
			-.02
		]
	},
	{
		center: [
			1.18,
			2.2,
			.55
		],
		radius: [
			.57,
			.34,
			.48
		],
		fork: [
			.02,
			1.4,
			-.02
		]
	},
	{
		center: [
			.46,
			2.46,
			.84
		],
		radius: [
			.62,
			.36,
			.53
		],
		fork: [
			.1,
			1.7,
			.03
		]
	},
	{
		center: [
			-.4,
			2.43,
			.8
		],
		radius: [
			.56,
			.38,
			.51
		],
		fork: [
			.02,
			1.4,
			-.02
		]
	},
	{
		center: [
			-1.01,
			2.27,
			-.75
		],
		radius: [
			.52,
			.36,
			.48
		],
		fork: [
			-.1,
			1.15,
			-.02
		]
	},
	{
		center: [
			.05,
			2.5,
			-1
		],
		radius: [
			.63,
			.35,
			.43
		],
		fork: [
			.1,
			1.7,
			.03
		]
	},
	{
		center: [
			.82,
			2.35,
			-.88
		],
		radius: [
			.53,
			.35,
			.47
		],
		fork: [
			.02,
			1.4,
			-.02
		]
	},
	{
		center: [
			-.2,
			2.9,
			.45
		],
		radius: [
			.51,
			.34,
			.48
		],
		fork: [
			.1,
			1.7,
			.03
		]
	}
], gp = [
	"#829365",
	"#9daa7e",
	"#bbc49b"
].map((e) => new d(e));
function _p() {
	let e = [], t = [], n = [], r = (n, r) => {
		e.push(n.x, n.y, n.z), t.push(r.r, r.g, r.b);
	};
	hp.forEach(({ center: t, radius: i }, a) => {
		let o = new M(...t);
		for (let t = 0; t < 22; t++) {
			let s = t * 2.399963 + a * .71, c = -.7 + 1.6 * (t + .5) / 22, l = Math.sqrt(1 - c * c), u = new M(Math.cos(s) * l, c, Math.sin(s) * l), d = new M(u.x * i[0], u.y * i[1], u.z * i[2]), f = new M(-u.z, 0, u.x).normalize(), p = f.clone().cross(u).normalize();
			for (let i = 0; i < 5; i++) {
				let s = i % 2 == 0 ? 1 : -1, c = o.clone().addScaledVector(d, .45 + i * .105), l = u.clone().multiplyScalar(.8).addScaledVector(f, i === 4 ? 0 : s * .65).normalize(), m = p.clone().cross(l).normalize(), h = .31 + .035 * Math.sin(t + a * 2 + i), g = c.clone().addScaledVector(l, h * .5), _ = gp[(t + a) % gp.length], v = e.length / 3;
				r(g.clone().addScaledVector(p, .008), _);
				for (let e = 0; e < 12; e++) {
					let t = e / 12 * Math.PI * 2;
					r(g.clone().addScaledVector(l, Math.cos(t) * h * .5).addScaledVector(m, Math.sin(t) * h * .22), _), n.push(v, v + 1 + e, v + 1 + (e + 1) % 12);
				}
			}
		}
	});
	let i = new Ze();
	return i.setAttribute("position", new je(e, 3)), i.setAttribute("color", new je(t, 3)), i.setIndex(n), i.computeVertexNormals(), i;
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/olive-tree/olive-crown-geometry.ts
function vp() {
	let e = hp.flatMap(({ center: e, radius: t }, n) => [-1, 1].map((r) => {
		let i = new p(1, 1);
		i.scale(.043, .062, .043), i.translate(e[0] + r * t[0] * .34, e[1] - t[1] * .62, e[2] + t[2] * .2);
		let a = new d(n % 3 == 0 ? "#8b914e" : "#424039");
		return i.setAttribute("color", new je(Array.from({ length: i.getAttribute("position").count }, () => [
			a.r,
			a.g,
			a.b
		]).flat(), 3)), i;
	})), t = _p(), n = N(e);
	return e.forEach((e) => e.dispose()), {
		leaves: t,
		olives: n
	};
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/olive-tree/olive-branch-geometry.ts
function yp(e, t = 12, n = 12, r = .13) {
	let i = new k(e.map(([e, t, n]) => new M(e, t, n))), a = i.computeFrenetFrames(t, !1), o = [], s = [], c = [], l = new d("#665847"), u = new d("#a99677");
	for (let d = 0; d <= t; d++) {
		let f = d / t, p = i.getPoint(f), m = Math.min(e.length - 2, Math.floor(f * (e.length - 1))), h = f * (e.length - 1) - m, g = e[m][3] * (1 - h) + e[m + 1][3] * h;
		for (let e = 0; e < n; e++) {
			let i = e / n * Math.PI * 2, m = Math.cos(i * 5 + f * 5.5), h = g * (1 + m * r), _ = p.clone().addScaledVector(a.normals[d], Math.cos(i) * h).addScaledVector(a.binormals[d], Math.sin(i) * h);
			o.push(_.x, Math.max(0, _.y), _.z);
			let v = l.clone().lerp(u, .35 + .3 * m + .12 * Math.sin(i));
			if (s.push(v.r, v.g, v.b), d < t) {
				let t = d * n + e, r = d * n + (e + 1) % n;
				c.push(t, r, t + n, r, r + n, t + n);
			}
		}
	}
	for (let e = 1; e < n - 1; e++) {
		c.push(0, e + 1, e);
		let r = t * n;
		c.push(r, r + e, r + e + 1);
	}
	let f = new Ze();
	return f.setAttribute("position", new je(o, 3)), f.setAttribute("color", new je(s, 3)), f.setIndex(c), f.computeVertexNormals(), f;
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/olive-tree/olive-wood-geometry.ts
function bp() {
	let e = Array.from({ length: 7 }, (e, t) => {
		let n = t * Math.PI * 2 / 7 + .23, r = .48 + .09 * Math.sin(t * 3);
		return yp([
			[
				-.05,
				.29,
				0,
				.16
			],
			[
				Math.cos(n) * .26,
				.12,
				Math.sin(n) * .26,
				.12
			],
			[
				Math.cos(n) * r,
				.025,
				Math.sin(n) * r,
				.025
			]
		], 6, 12, .03);
	}), t = [yp(mp, 24, 16, .09), ...e], n = hp.map(({ center: e, fork: t }, n) => {
		let r = n % 2 == 0 ? -.13 : .14;
		return yp([
			[...t, .135],
			[
				t[0] * .45 + e[0] * .55,
				t[1] + .28,
				t[2] * .45 + e[2] * .55,
				.095
			],
			[
				e[0] * .86,
				e[1] - .21,
				e[2] + r,
				.052
			],
			[...e, .016]
		], 12, 12, .03);
	}), r = N(t), i = N(n);
	return [...t, ...n].forEach((e) => e.dispose()), {
		trunk: r,
		boughs: i
	};
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/olive-tree/olive-tree.tsx
var xp = [
	3.8,
	3.6,
	3.2
];
function Sp({ size: e = xp }) {
	let t = (0, R.useMemo)(() => {
		let e = {
			...bp(),
			...vp()
		}, t = new $e();
		for (let n of Object.values(e)) n.computeBoundingBox(), t.union(n.boundingBox);
		let n = t.getSize(new M()), r = t.getCenter(new M()), i = new o().makeScale(3.8 / n.x, 3.6 / n.y, 3.2 / n.z).multiply(new o().makeTranslation(-r.x, -t.min.y, -r.z));
		return Object.values(e).forEach((e) => e.applyMatrix4(i)), e;
	}, []);
	return (0, R.useEffect)(() => () => Object.values(t).forEach((e) => e.dispose()), [t]), /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "olive-tree",
		scale: [
			e[0] / 3.8,
			e[1] / 3.6,
			e[2] / 3.2
		],
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "olive-root-flare-and-twisted-trunk",
				geometry: t.trunk,
				castShadow: !0,
				receiveShadow: !0,
				userData: { walkCollider: !0 },
				children: [/* @__PURE__ */ (0, U.jsx)(I, { color: "#92816a" }), /* @__PURE__ */ (0, U.jsx)(r, {
					color: "#514a3d",
					thickness: .0015
				})]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "olive-sculpted-boughs",
				geometry: t.boughs,
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)(I, { color: "#92816a" }), /* @__PURE__ */ (0, U.jsx)(r, {
					color: "#514a3d",
					thickness: .0015
				})]
			}),
			/* @__PURE__ */ (0, U.jsx)("mesh", {
				name: "olive-rounded-leaf-sprays",
				geometry: t.leaves,
				castShadow: !0,
				receiveShadow: !0,
				children: /* @__PURE__ */ (0, U.jsx)(I, {
					vertexColors: !0,
					side: 2
				})
			}),
			/* @__PURE__ */ (0, U.jsx)("mesh", {
				name: "olive-fruit",
				geometry: t.olives,
				castShadow: !0,
				children: /* @__PURE__ */ (0, U.jsx)(I, { vertexColors: !0 })
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/pool-chaise-longue/chaise-upholstery.tsx
var Cp = 42 * Math.PI / 180, wp = .72, Tp = .09, Ep = wp / 2, Dp = Tp / 2, Op = Ep * Math.sin(Cp) + Dp * Math.cos(Cp), kp = Ep * Math.cos(Cp) + Dp * Math.sin(Cp), Ap = [
	0,
	.85 - Op,
	-1.05 + kp
], jp = "#94a58c", Mp = "#687662";
function Np() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "pool-chaise-upholstery",
		children: [/* @__PURE__ */ (0, U.jsx)(K, {
			name: "pool-chaise-seat-cushion",
			size: [
				.68,
				.09,
				1.5
			],
			position: [
				0,
				.255,
				.3
			],
			color: jp,
			outlineColor: Mp,
			radius: .035
		}), /* @__PURE__ */ (0, U.jsx)(K, {
			name: "pool-chaise-reclined-back-cushion",
			size: [
				.68,
				Tp,
				wp
			],
			position: [...Ap],
			rotation: [
				Cp,
				0,
				0
			],
			color: jp,
			outlineColor: Mp,
			radius: .035
		})]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/pool-chaise-longue/chaise-frame.tsx
var Pp = "#a87745", Fp = "#6d4a2c", Ip = (e, t, n, r = [
	0,
	0,
	0
]) => /* @__PURE__ */ (0, U.jsx)(K, {
	name: e,
	size: t,
	position: n,
	rotation: r,
	color: Pp,
	outlineColor: Fp,
	radius: .015
}, e);
function Lp() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "pool-chaise-teak-frame",
		children: [
			[-.36, .36].map((e) => Ip(`pool-chaise-side-rail-${e}`, [
				.08,
				.08,
				1.5
			], [
				e,
				.17,
				.3
			])),
			[-.39, .98].map((e) => Ip(`pool-chaise-cross-rail-${e}`, [
				.64,
				.08,
				.08
			], [
				0,
				.17,
				e
			])),
			[-.36, .36].flatMap((e) => [-.35, .82].map((t) => Ip(`pool-chaise-leg-${e}-${t}`, [
				.08,
				.17,
				.08
			], [
				e,
				.085,
				t
			]))),
			[-.285, .285].map((e) => Ip(`pool-chaise-back-support-${e}`, [
				.05,
				.05,
				.64
			], [
				e,
				Ap[1] - .045,
				Ap[2] - .04
			], [
				Cp,
				0,
				0
			])),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "pool-chaise-back-hinge",
				position: [
					0,
					.27,
					-.5
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.06,
						.06,
						.72,
						16
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: Fp }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#55402d",
						thickness: .0015,
						screenspace: !1
					})
				]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/pool-chaise-longue/pool-chaise-longue.tsx
var Rp = [
	.8,
	.85,
	2.1
];
function zp({ size: e = Rp }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "pool-chaise-longue",
		userData: { walkCollider: !0 },
		scale: [
			e[0] / Rp[0],
			e[1] / Rp[1],
			e[2] / Rp[2]
		],
		children: [/* @__PURE__ */ (0, U.jsx)(Lp, {}), /* @__PURE__ */ (0, U.jsx)(Np, {})]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/outdoor-bbq.tsx
var Bp = [
	1.2,
	1.1,
	.6
];
function Vp({ size: e = Bp }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "outdoor-bbq",
		scale: [
			e[0] / 1.2,
			e[1] / 1.1,
			e[2] / .6
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "bbq-cart",
				size: [
					.65,
					.08,
					.48
				],
				position: [
					0,
					.19,
					0
				],
				color: "#353e3b",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "bbq-leg",
				size: [
					.045,
					.68,
					.045
				],
				position: [
					-.28,
					.34,
					-.22
				],
				color: "#414a46",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "bbq-leg",
				size: [
					.045,
					.68,
					.045
				],
				position: [
					-.28,
					.34,
					.22
				],
				color: "#414a46",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "bbq-leg",
				size: [
					.045,
					.68,
					.045
				],
				position: [
					.28,
					.34,
					-.22
				],
				color: "#414a46",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "bbq-leg",
				size: [
					.045,
					.68,
					.045
				],
				position: [
					.28,
					.34,
					.22
				],
				color: "#414a46",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "bbq-firebox",
				size: [
					.72,
					.25,
					.57
				],
				position: [
					0,
					.755,
					-.015
				],
				color: "#343c39",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "bbq-lid",
				size: [
					.72,
					.19,
					.56
				],
				position: [
					0,
					.975,
					-.02
				],
				color: "#4c5952",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "bbq-side-shelf",
				size: [
					.24,
					.035,
					.48
				],
				position: [
					-.48,
					.79,
					0
				],
				color: "#b89564",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "bbq-side-shelf",
				size: [
					.24,
					.035,
					.48
				],
				position: [
					.48,
					.79,
					0
				],
				color: "#b89564",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "bbq-lid-pull",
				size: [
					.3,
					.03,
					.04
				],
				position: [
					0,
					.94,
					.28
				],
				color: "#aeb7af",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "bbq-thermometer",
				size: [
					.07,
					.03,
					.04
				],
				position: [
					0,
					1.085,
					.08
				],
				color: "#c4cec5",
				radius: .006
			}),
			[
				-.18,
				0,
				.18
			].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "bbq-control-knob",
				position: [
					e,
					.76,
					.285
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.025,
					.025,
					.03,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#bdc4b9" })]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/wooden-garden-swing.tsx
var Hp = [
	2.2,
	2.1,
	1.4
];
function Up({ size: e = Hp }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "wooden-garden-swing",
		scale: [
			e[0] / 2.2,
			e[1] / 2.1,
			e[2] / 1.4
		],
		userData: { walkCollider: !0 },
		children: [
			[-1, 1].flatMap((e) => [-1, 1].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "swing-frame-leg",
				position: [
					e,
					1.01,
					t * .32
				],
				rotation: [
					-t * .307,
					0,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.1,
					2.086,
					.1
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#a87e4e" })]
			}, `${e}-${t}`))),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "swing-crossbeam",
				size: [
					2.2,
					.12,
					.14
				],
				position: [
					0,
					2.04,
					0
				],
				color: "#b58b59",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "swing-foot",
				size: [
					.18,
					.06,
					1.4
				],
				position: [
					-1,
					.03,
					0
				],
				color: "#a87e4e",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "swing-foot",
				size: [
					.18,
					.06,
					1.4
				],
				position: [
					1,
					.03,
					0
				],
				color: "#a87e4e",
				radius: .006
			}),
			[-.57, .57].flatMap((e) => [-.18, .18].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					1.27,
					t
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.01,
					.01,
					1.46,
					8
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#d7ccb0" })]
			}, `${e}-${t}`))),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "swing-seat-slat",
				size: [
					1.3,
					.04,
					.085
				],
				position: [
					0,
					.54,
					-.18
				],
				color: "#c69c68",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "swing-seat-slat",
				size: [
					1.3,
					.04,
					.085
				],
				position: [
					0,
					.54,
					-.09
				],
				color: "#c69c68",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "swing-seat-slat",
				size: [
					1.3,
					.04,
					.085
				],
				position: [
					0,
					.54,
					0
				],
				color: "#c69c68",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "swing-seat-slat",
				size: [
					1.3,
					.04,
					.085
				],
				position: [
					0,
					.54,
					.09
				],
				color: "#c69c68",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "swing-seat-slat",
				size: [
					1.3,
					.04,
					.085
				],
				position: [
					0,
					.54,
					.18
				],
				color: "#c69c68",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "swing-back-slat",
				size: [
					1.3,
					.09,
					.04
				],
				position: [
					0,
					.66,
					-.205
				],
				color: "#c69c68",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "swing-back-slat",
				size: [
					1.3,
					.09,
					.04
				],
				position: [
					0,
					.77,
					-.205
				],
				color: "#c69c68",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "swing-back-slat",
				size: [
					1.3,
					.09,
					.04
				],
				position: [
					0,
					.88,
					-.205
				],
				color: "#c69c68",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "swing-back-support",
				size: [
					.05,
					.4,
					.05
				],
				position: [
					-.57,
					.72,
					-.19
				],
				color: "#a87e4e",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "swing-seat-support",
				size: [
					.06,
					.05,
					.48
				],
				position: [
					-.57,
					.505,
					0
				],
				color: "#a87e4e",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "swing-back-support",
				size: [
					.05,
					.4,
					.05
				],
				position: [
					.57,
					.72,
					-.19
				],
				color: "#a87e4e",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "swing-seat-support",
				size: [
					.06,
					.05,
					.48
				],
				position: [
					.57,
					.505,
					0
				],
				color: "#a87e4e",
				radius: .006
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/outdoor-dining-table.tsx
var Wp = [
	1.6,
	.75,
	.9
];
function Gp({ size: e = Wp }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "outdoor-dining-table",
		scale: [
			e[0] / 1.6,
			e[1] / .75,
			e[2] / .9
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "leg",
				size: [
					.06,
					.7,
					.06
				],
				position: [
					-.69,
					.35,
					-.34
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "leg",
				size: [
					.06,
					.7,
					.06
				],
				position: [
					-.69,
					.35,
					.34
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "leg",
				size: [
					.06,
					.7,
					.06
				],
				position: [
					.69,
					.35,
					-.34
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "leg",
				size: [
					.06,
					.7,
					.06
				],
				position: [
					.69,
					.35,
					.34
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "apron",
				size: [
					1.48,
					.08,
					.68
				],
				position: [
					0,
					.66,
					0
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "tabletop-slat",
				size: [
					1.6,
					.05,
					.14
				],
				position: [
					0,
					.725,
					-.38
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "tabletop-slat",
				size: [
					1.6,
					.05,
					.14
				],
				position: [
					0,
					.725,
					-.228
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "tabletop-slat",
				size: [
					1.6,
					.05,
					.14
				],
				position: [
					0,
					.725,
					-.076
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "tabletop-slat",
				size: [
					1.6,
					.05,
					.14
				],
				position: [
					0,
					.725,
					.076
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "tabletop-slat",
				size: [
					1.6,
					.05,
					.14
				],
				position: [
					0,
					.725,
					.228
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "tabletop-slat",
				size: [
					1.6,
					.05,
					.14
				],
				position: [
					0,
					.725,
					.38
				],
				color: "#b58a58"
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/outdoor-dining-chair.tsx
var Kp = [
	.56,
	.85,
	.58
];
function qp({ size: e = Kp }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "outdoor-dining-chair",
		scale: [
			e[0] / .56,
			e[1] / .85,
			e[2] / .58
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "leg",
				size: [
					.06,
					.44,
					.06
				],
				position: [
					-.19,
					.22,
					-.2
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "leg",
				size: [
					.06,
					.44,
					.06
				],
				position: [
					-.19,
					.22,
					.2
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "leg",
				size: [
					.06,
					.44,
					.06
				],
				position: [
					.19,
					.22,
					-.2
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "leg",
				size: [
					.06,
					.44,
					.06
				],
				position: [
					.19,
					.22,
					.2
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "seat-slat",
				size: [
					.5,
					.04,
					.1
				],
				position: [
					0,
					.44,
					-.2
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "seat-slat",
				size: [
					.5,
					.04,
					.1
				],
				position: [
					0,
					.44,
					-.08
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "seat-slat",
				size: [
					.5,
					.04,
					.1
				],
				position: [
					0,
					.44,
					.04
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "seat-slat",
				size: [
					.5,
					.04,
					.1
				],
				position: [
					0,
					.44,
					.16
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "back-post",
				size: [
					.04,
					.83,
					.04
				],
				position: [
					-.23,
					.415,
					-.27
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "back-post",
				size: [
					.04,
					.83,
					.04
				],
				position: [
					.23,
					.415,
					-.27
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "back-slat",
				size: [
					.46,
					.085,
					.04
				],
				position: [
					0,
					.59,
					-.265
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "back-slat",
				size: [
					.46,
					.085,
					.04
				],
				position: [
					0,
					.7,
					-.265
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "back-slat",
				size: [
					.46,
					.085,
					.04
				],
				position: [
					0,
					.8075,
					-.265
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "armrest",
				size: [
					.06,
					.04,
					.54
				],
				position: [
					-.25,
					.65,
					.02
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "armrest",
				size: [
					.06,
					.04,
					.54
				],
				position: [
					.25,
					.65,
					.02
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "arm-post",
				size: [
					.04,
					.2,
					.04
				],
				position: [
					-.25,
					.54,
					.2
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "arm-post",
				size: [
					.04,
					.2,
					.04
				],
				position: [
					.25,
					.54,
					.2
				],
				color: "#414e49"
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/garden-bench.tsx
var Jp = [
	1.5,
	.9,
	.6
];
function Yp({ size: e = Jp }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "garden-bench",
		scale: [
			e[0] / 1.5,
			e[1] / .9,
			e[2] / .6
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "leg",
				size: [
					.06,
					.44,
					.06
				],
				position: [
					-.6399999999999999,
					.22,
					-.21500000000000002
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "leg",
				size: [
					.06,
					.44,
					.06
				],
				position: [
					-.6399999999999999,
					.22,
					.21500000000000002
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "leg",
				size: [
					.06,
					.44,
					.06
				],
				position: [
					.6399999999999999,
					.22,
					-.21500000000000002
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "leg",
				size: [
					.06,
					.44,
					.06
				],
				position: [
					.6399999999999999,
					.22,
					.21500000000000002
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "seat-slat",
				size: [
					1.5,
					.05,
					.1
				],
				position: [
					0,
					.455,
					-.24
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "seat-slat",
				size: [
					1.5,
					.05,
					.1
				],
				position: [
					0,
					.455,
					-.12
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "seat-slat",
				size: [
					1.5,
					.05,
					.1
				],
				position: [
					0,
					.455,
					0
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "seat-slat",
				size: [
					1.5,
					.05,
					.1
				],
				position: [
					0,
					.455,
					.12
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "seat-slat",
				size: [
					1.5,
					.05,
					.1
				],
				position: [
					0,
					.455,
					.24
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "back-post",
				size: [
					.05,
					.88,
					.05
				],
				position: [
					-.65,
					.44,
					-.275
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "back-post",
				size: [
					.05,
					.88,
					.05
				],
				position: [
					.65,
					.44,
					-.275
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "back-slat",
				size: [
					1.5,
					.09,
					.04
				],
				position: [
					0,
					.6,
					-.275
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "back-slat",
				size: [
					1.5,
					.09,
					.04
				],
				position: [
					0,
					.71,
					-.275
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "back-slat",
				size: [
					1.5,
					.09,
					.04
				],
				position: [
					0,
					.855,
					-.275
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "armrest",
				size: [
					.06,
					.05,
					.6
				],
				position: [
					-.7,
					.66,
					0
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "armrest",
				size: [
					.06,
					.05,
					.6
				],
				position: [
					.7,
					.66,
					0
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "arm-post",
				size: [
					.05,
					.23,
					.05
				],
				position: [
					-.7,
					.55,
					.24
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "arm-post",
				size: [
					.05,
					.23,
					.05
				],
				position: [
					.7,
					.55,
					.24
				],
				color: "#414e49"
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/outdoor-side-table.tsx
var Xp = [
	.5,
	.45,
	.5
];
function Zp({ size: e = Xp }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "outdoor-side-table",
		scale: [
			e[0] / .5,
			e[1] / .45,
			e[2] / .5
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "top",
				position: [
					0,
					.43,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.25,
					.25,
					.04,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#b58a58" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "stem",
				position: [
					0,
					.225,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.035,
					.035,
					.39,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#414e49" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "base",
				position: [
					0,
					.03,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.2,
					.22,
					.06,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#414e49" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/patio-parasol.tsx
var Qp = [
	2.4,
	2.5,
	2.4
];
function $p({ size: e = Qp }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "patio-parasol",
		scale: [
			e[0] / 2.4,
			e[1] / 2.5,
			e[2] / 2.4
		],
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				userData: { walkCollider: !0 },
				name: "base",
				position: [
					0,
					.05,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.29,
					.32,
					.1,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#414e49" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				userData: { walkCollider: !0 },
				name: "pole",
				position: [
					0,
					1.28,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.023,
					.023,
					2.36,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#b58a58" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "canopy",
				position: [
					0,
					2.27,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.04,
					1.2,
					.34,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#e4d8ba" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "finial",
				position: [
					0,
					2.47,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.035,
					.035,
					.06,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#b58a58" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/outdoor-basin.tsx
function em({ name: e, radius: t, height: n, position: r, color: i }) {
	let a = [
		[0, 0],
		[t * .66, 0],
		[t, n * .92],
		[t, n],
		[t - .025, n],
		[t * .66 - .025, .035],
		[0, .035]
	];
	return /* @__PURE__ */ (0, U.jsxs)("mesh", {
		name: e,
		position: r,
		castShadow: !0,
		receiveShadow: !0,
		children: [/* @__PURE__ */ (0, U.jsx)("latheGeometry", { args: [a.map(([e, t]) => new Oe(e, t)), 24] }), /* @__PURE__ */ (0, U.jsx)(I, { color: i })]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/terracotta-planter.tsx
var tm = [
	.5,
	.5,
	.5
];
function nm({ size: e = tm }) {
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: "terracotta-planter",
		scale: [
			e[0] / .5,
			e[1] / .5,
			e[2] / .5
		],
		userData: { walkCollider: !0 },
		children: /* @__PURE__ */ (0, U.jsx)(em, {
			name: "planter",
			radius: .25,
			height: .5,
			position: [
				0,
				0,
				0
			],
			color: "#b96e50"
		})
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/raised-garden-bed.tsx
var rm = [
	1.2,
	.4,
	.8
];
function im({ size: e = rm }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "raised-garden-bed",
		scale: [
			e[0] / 1.2,
			e[1] / .4,
			e[2] / .8
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "end-wall",
				size: [
					.05,
					.4,
					.8
				],
				position: [
					-.575,
					.2,
					0
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "end-wall",
				size: [
					.05,
					.4,
					.8
				],
				position: [
					.575,
					.2,
					0
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "side-wall",
				size: [
					1.1,
					.4,
					.05
				],
				position: [
					0,
					.2,
					-.375
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "side-wall",
				size: [
					1.1,
					.4,
					.05
				],
				position: [
					0,
					.2,
					.375
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "soil",
				size: [
					1.1,
					.3,
					.7
				],
				position: [
					0,
					.15,
					0
				],
				color: "#68503b"
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/outdoor-storage-box.tsx
var am = [
	1.2,
	.6,
	.55
];
function om({ size: e = am }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "outdoor-storage-box",
		scale: [
			e[0] / 1.2,
			e[1] / .6,
			e[2] / .55
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "case",
				size: [
					1.16,
					.54,
					.51
				],
				position: [
					0,
					.27,
					0
				],
				color: "#6d8063"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "lid",
				size: [
					1.2,
					.06,
					.55
				],
				position: [
					0,
					.57,
					0
				],
				color: "#7e906f"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "grip",
				size: [
					.2,
					.03,
					.025
				],
				position: [
					0,
					.48,
					.2625
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "panel-seam",
				size: [
					1.1,
					.008,
					.005
				],
				position: [
					0,
					.12,
					.2575
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "panel-seam",
				size: [
					1.1,
					.008,
					.005
				],
				position: [
					0,
					.24,
					.2575
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "panel-seam",
				size: [
					1.1,
					.008,
					.005
				],
				position: [
					0,
					.36,
					.2575
				],
				color: "#414e49"
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/garden-hose-reel.tsx
var sm = [
	.48,
	.6,
	.42
];
function cm({ size: e = sm }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "garden-hose-reel",
		scale: [
			e[0] / .48,
			e[1] / .6,
			e[2] / .42
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "foot",
				size: [
					.48,
					.04,
					.4
				],
				position: [
					0,
					.02,
					0
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "upright",
				size: [
					.035,
					.43,
					.035
				],
				position: [
					-.2,
					.245,
					0
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "upright",
				size: [
					.035,
					.43,
					.035
				],
				position: [
					.2,
					.245,
					0
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "spool",
				position: [
					0,
					.39,
					0
				],
				rotation: [
					0,
					0,
					1.5707963267948966
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.16,
					.16,
					.32,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#6d8063" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "reel-flange",
				position: [
					-.1725,
					.39,
					0
				],
				rotation: [
					0,
					0,
					1.5707963267948966
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.21,
					.21,
					.025,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#414e49" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "reel-flange",
				position: [
					.1725,
					.39,
					0
				],
				rotation: [
					0,
					0,
					1.5707963267948966
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.21,
					.21,
					.025,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#414e49" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "crank",
				size: [
					.035,
					.12,
					.035
				],
				position: [
					.215,
					.39,
					.04
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "axle",
				size: [
					.1,
					.025,
					.025
				],
				position: [
					.19,
					.44,
					0
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "hose-coil",
				position: [
					-.12,
					.39,
					0
				],
				rotation: [
					0,
					1.5707963267948966,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
					.16,
					.012,
					8,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#6d8063" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "hose-coil",
				position: [
					-.08,
					.39,
					0
				],
				rotation: [
					0,
					1.5707963267948966,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
					.16,
					.012,
					8,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#6d8063" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "hose-coil",
				position: [
					-.04,
					.39,
					0
				],
				rotation: [
					0,
					1.5707963267948966,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
					.16,
					.012,
					8,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#6d8063" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "hose-coil",
				position: [
					0,
					.39,
					0
				],
				rotation: [
					0,
					1.5707963267948966,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
					.16,
					.012,
					8,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#6d8063" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "hose-coil",
				position: [
					.04,
					.39,
					0
				],
				rotation: [
					0,
					1.5707963267948966,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
					.16,
					.012,
					8,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#6d8063" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "hose-coil",
				position: [
					.08,
					.39,
					0
				],
				rotation: [
					0,
					1.5707963267948966,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
					.16,
					.012,
					8,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#6d8063" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "hose-coil",
				position: [
					.12,
					.39,
					0
				],
				rotation: [
					0,
					1.5707963267948966,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
					.16,
					.012,
					8,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#6d8063" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/watering-can.tsx
var lm = [
	.54,
	.36,
	.22
];
function um({ size: e = lm }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "watering-can",
		scale: [
			e[0] / .54,
			e[1] / .36,
			e[2] / .22
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "body",
				position: [
					-.08,
					.12,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.105,
					.11,
					.24,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#6d8063" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "carry-handle",
				position: [
					-.08,
					.265,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
					.08,
					.015,
					8,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#414e49" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "spout",
				size: [
					.25,
					.035,
					.04
				],
				position: [
					.125,
					.15,
					0
				],
				color: "#6d8063"
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "rose",
				position: [
					.25,
					.15,
					0
				],
				rotation: [
					0,
					0,
					1.5707963267948966
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.045,
					.03,
					.04,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#414e49" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "rear-handle",
				position: [
					-.19,
					.15,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
					.065,
					.015,
					8,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#6d8063" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/garden-birdbath.tsx
var dm = [
	.6,
	.8,
	.6
];
function fm({ size: e = dm }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "garden-birdbath",
		scale: [
			e[0] / .6,
			e[1] / .8,
			e[2] / .6
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "foot",
				position: [
					0,
					.04,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.19,
					.24,
					.08,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#b6b5a3" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "pedestal",
				position: [
					0,
					.375,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.08,
					.12,
					.59,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#c8c4b0" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(em, {
				name: "basin",
				radius: .3,
				height: .14,
				position: [
					0,
					.66,
					0
				],
				color: "#c8c4b0"
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/outdoor-fire-pit.tsx
var pm = [
	.8,
	.4,
	.8
];
function mm({ size: e = pm }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "outdoor-fire-pit",
		scale: [
			e[0] / .8,
			e[1] / .4,
			e[2] / .8
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(em, {
				name: "fire-bowl",
				radius: .4,
				height: .26,
				position: [
					0,
					.14,
					0
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "foot",
				size: [
					.07,
					.2,
					.07
				],
				position: [
					-.22,
					.1,
					.16
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "foot",
				size: [
					.07,
					.2,
					.07
				],
				position: [
					.22,
					.1,
					.16
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "foot",
				size: [
					.07,
					.2,
					.07
				],
				position: [
					0,
					.1,
					-.24
				],
				color: "#414e49"
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/garden-compost-bin.tsx
var hm = [
	.8,
	1,
	.8
];
function gm({ size: e = hm }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "garden-compost-bin",
		scale: [
			e[0] / .8,
			e[1] / 1,
			e[2] / .8
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "body",
				size: [
					.76,
					.94,
					.76
				],
				position: [
					0,
					.47,
					0
				],
				color: "#6d8063"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "lid",
				size: [
					.8,
					.06,
					.8
				],
				position: [
					0,
					.97,
					0
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "access-hatch",
				size: [
					.45,
					.28,
					.02
				],
				position: [
					0,
					.17,
					.39
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "vent",
				size: [
					.54,
					.018,
					.005
				],
				position: [
					0,
					.48,
					.3825
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "vent",
				size: [
					.54,
					.018,
					.005
				],
				position: [
					0,
					.6,
					.3825
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "vent",
				size: [
					.54,
					.018,
					.005
				],
				position: [
					0,
					.72,
					.3825
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "vent",
				size: [
					.54,
					.018,
					.005
				],
				position: [
					0,
					.84,
					.3825
				],
				color: "#414e49"
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/wheelie-bin.tsx
var _m = [
	.58,
	1.05,
	.64
];
function vm({ size: e = _m }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "wheelie-bin",
		scale: [
			e[0] / .58,
			e[1] / 1.05,
			e[2] / .64
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "bin-body",
				size: [
					.52,
					.9,
					.53
				],
				position: [
					0,
					.52,
					.005
				],
				color: "#6d8063"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "lid",
				size: [
					.58,
					.06,
					.64
				],
				position: [
					0,
					1.02,
					0
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "rear-handle",
				size: [
					.38,
					.04,
					.06
				],
				position: [
					0,
					.93,
					-.29
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "wheel",
				position: [
					-.26,
					.1,
					-.2
				],
				rotation: [
					0,
					0,
					1.5707963267948966
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.1,
					.1,
					.06,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#414e49" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "wheel",
				position: [
					.26,
					.1,
					-.2
				],
				rotation: [
					0,
					0,
					1.5707963267948966
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.1,
					.1,
					.06,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#414e49" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "front-foot",
				size: [
					.38,
					.07,
					.05
				],
				position: [
					0,
					.035,
					.23
				],
				color: "#6d8063"
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/garden-trellis.tsx
var ym = [
	.9,
	1.8,
	.12
];
function bm({ size: e = ym }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "garden-trellis",
		scale: [
			e[0] / .9,
			e[1] / 1.8,
			e[2] / .12
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "post",
				size: [
					.055,
					1.8,
					.055
				],
				position: [
					-.4225,
					.9,
					0
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "post",
				size: [
					.055,
					1.8,
					.055
				],
				position: [
					.4225,
					.9,
					0
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "foot",
				size: [
					.09,
					.04,
					.12
				],
				position: [
					-.4,
					.02,
					0
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "foot",
				size: [
					.09,
					.04,
					.12
				],
				position: [
					.4,
					.02,
					0
				],
				color: "#414e49"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "vertical-lattice",
				size: [
					.022,
					1.55,
					.022
				],
				position: [
					-.3,
					1,
					0
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "vertical-lattice",
				size: [
					.022,
					1.55,
					.022
				],
				position: [
					-.15,
					1,
					0
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "vertical-lattice",
				size: [
					.022,
					1.55,
					.022
				],
				position: [
					0,
					1,
					0
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "vertical-lattice",
				size: [
					.022,
					1.55,
					.022
				],
				position: [
					.15,
					1,
					0
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "vertical-lattice",
				size: [
					.022,
					1.55,
					.022
				],
				position: [
					.3,
					1,
					0
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "horizontal-lattice",
				size: [
					.85,
					.025,
					.022
				],
				position: [
					0,
					.25,
					.022
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "horizontal-lattice",
				size: [
					.85,
					.025,
					.022
				],
				position: [
					0,
					.5,
					.022
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "horizontal-lattice",
				size: [
					.85,
					.025,
					.022
				],
				position: [
					0,
					.75,
					.022
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "horizontal-lattice",
				size: [
					.85,
					.025,
					.022
				],
				position: [
					0,
					1,
					.022
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "horizontal-lattice",
				size: [
					.85,
					.025,
					.022
				],
				position: [
					0,
					1.25,
					.022
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "horizontal-lattice",
				size: [
					.85,
					.025,
					.022
				],
				position: [
					0,
					1.5,
					.022
				],
				color: "#b58a58"
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "horizontal-lattice",
				size: [
					.85,
					.025,
					.022
				],
				position: [
					0,
					1.775,
					.022
				],
				color: "#b58a58"
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/bistro/folding-frame-strip.tsx
function xm({ name: e, from: t, to: n }) {
	let r = new M(...t), i = new M(...n), a = i.clone().sub(r), o = r.clone().add(i).multiplyScalar(.5), s = new S().setFromUnitVectors(new M(0, 1, 0), a.clone().normalize());
	return /* @__PURE__ */ (0, U.jsxs)("mesh", {
		name: e,
		position: [
			o.x,
			o.y,
			o.z
		],
		quaternion: [
			s.x,
			s.y,
			s.z,
			s.w
		],
		userData: { frameEndpoints: [t, n] },
		castShadow: !0,
		receiveShadow: !0,
		children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
			.018,
			a.length(),
			.012
		] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#343936" })]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/bistro/slatted-folding-table.tsx
var Sm = [
	.6,
	.72,
	.6
];
function Cm({ size: e = Sm }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "slatted-folding-table",
		userData: { walkCollider: !0 },
		scale: [
			e[0] / .6,
			e[1] / .72,
			e[2] / .6
		],
		children: [
			Array.from({ length: 7 }, (e, t) => /* @__PURE__ */ (0, U.jsx)(K, {
				name: "bistro-table-top-slat",
				size: [
					.6,
					.03,
					.54 / 7
				],
				position: [
					0,
					.705,
					-.3 + .54 / 14 + t * (.54 / 7 + .01)
				],
				color: "#b28a5d",
				radius: .003
			}, t)),
			[-.25, .25].map((e) => /* @__PURE__ */ (0, U.jsxs)("group", { children: [
				[-.255, .255].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
					name: "bistro-table-foot",
					position: [
						e,
						.012,
						t
					],
					children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.024,
						.024,
						.034
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#303632" })]
				}, t)),
				/* @__PURE__ */ (0, U.jsx)(xm, {
					name: "bistro-table-cross-leg",
					from: [
						e,
						.018,
						-.255
					],
					to: [
						e,
						.69,
						.255
					]
				}),
				/* @__PURE__ */ (0, U.jsx)(xm, {
					name: "bistro-table-cross-leg",
					from: [
						e,
						.018,
						.255
					],
					to: [
						e,
						.69,
						-.255
					]
				}),
				/* @__PURE__ */ (0, U.jsxs)("mesh", {
					name: "bistro-table-hinge",
					position: [
						e,
						.354,
						0
					],
					rotation: [
						0,
						0,
						Math.PI / 2
					],
					children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.012,
						.012,
						.026,
						12
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#414741" })]
				})
			] }, e)),
			[-.255, .255].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				name: "bistro-table-top-crossbar",
				size: [
					.518,
					.022,
					.024
				],
				position: [
					0,
					.684,
					e
				],
				color: "#343936",
				radius: .001
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/bistro/slatted-folding-chair.tsx
var wm = [
	.4,
	.82,
	.5
];
function Tm({ size: e = wm }) {
	let t = -.4525 / .794, n = Math.atan(t);
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "slatted-folding-chair",
		userData: { walkCollider: !0 },
		scale: [
			e[0] / .4,
			e[1] / .82,
			e[2] / .5
		],
		children: [
			Array.from({ length: 5 }, (e, t) => /* @__PURE__ */ (0, U.jsx)(K, {
				name: "bistro-chair-seat-slat",
				size: [
					.4,
					.026,
					.068
				],
				position: [
					0,
					.447,
					-.166 + t * .078
				],
				color: "#b28a5d",
				radius: .003
			}, t)),
			[.652, .7815].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				name: "bistro-chair-back-slat",
				size: [
					.4,
					.076,
					.022
				],
				position: [
					0,
					e,
					.2375 + t * (e - .018)
				],
				rotation: [
					n,
					0,
					0
				],
				color: "#b28a5d",
				radius: .003
			}, e)),
			[-.181, .181].map((e) => /* @__PURE__ */ (0, U.jsxs)("group", { children: [
				[-.2375, .2375].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
					name: "bistro-chair-foot",
					position: [
						e,
						.012,
						t
					],
					children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.025,
						.024,
						.025
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#303632" })]
				}, t)),
				/* @__PURE__ */ (0, U.jsx)(xm, {
					name: "bistro-chair-back-support",
					from: [
						e,
						.018,
						.2375
					],
					to: [
						e,
						.812,
						-.215
					]
				}),
				/* @__PURE__ */ (0, U.jsx)(xm, {
					name: "bistro-chair-seat-support",
					from: [
						e,
						.018,
						-.2375
					],
					to: [
						e,
						.434,
						.166
					]
				}),
				/* @__PURE__ */ (0, U.jsxs)("mesh", {
					name: "bistro-chair-hinge",
					position: [
						e,
						.3272,
						.0613
					],
					rotation: [
						0,
						0,
						Math.PI / 2
					],
					children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.011,
						.011,
						.027,
						12
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#414741" })]
				})
			] }, e)),
			[-.15, .166].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				name: "bistro-chair-seat-crossbar",
				size: [
					.38,
					.018,
					.022
				],
				position: [
					0,
					.429,
					e
				],
				color: "#343936",
				radius: .001
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/retractable-awning.tsx
var Em = [
	3.6,
	.45,
	1
];
function Dm({ size: e = Em }) {
	let t = (0, R.useMemo)(() => {
		let e = new j();
		e.moveTo(-1.8, .205), e.lineTo(1.8, .205), e.lineTo(1.8, .035);
		for (let t = 0; t < 12; t++) {
			let n = 1.8 - t * .3;
			e.quadraticCurveTo(n - .075, 0, n - .15, 0), e.quadraticCurveTo(n - .225, 0, n - .3, .035);
		}
		return e.closePath(), e;
	}, []);
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "retractable-awning",
		scale: [
			e[0] / 3.6,
			e[1] / .45,
			e[2]
		],
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "awning-cassette",
				position: [
					0,
					.41,
					-.46
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.04,
					.04,
					3.6,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#414641" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "awning-canvas",
				size: [
					3.6,
					.016,
					Math.hypot(.97, .22)
				],
				position: [
					0,
					.315,
					-.005
				],
				rotation: [
					Math.atan2(.22, .97),
					0,
					0
				],
				color: "#293e60",
				radius: .002
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "awning-valance",
				position: [
					0,
					0,
					.49
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("extrudeGeometry", { args: [t, {
					depth: .01,
					bevelEnabled: !1,
					curveSegments: 5
				}] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#293e60" })]
			}),
			[-1.45, 1.45].map((e) => /* @__PURE__ */ (0, U.jsxs)("group", { children: [
				/* @__PURE__ */ (0, U.jsx)(xm, {
					name: "awning-wall-arm",
					from: [
						e,
						.38,
						-.46
					],
					to: [
						e + .08,
						.278,
						.02
					]
				}),
				/* @__PURE__ */ (0, U.jsx)(xm, {
					name: "awning-front-arm",
					from: [
						e + .08,
						.278,
						.02
					],
					to: [
						e,
						.185,
						.475
					]
				}),
				/* @__PURE__ */ (0, U.jsx)(K, {
					name: "awning-mount",
					size: [
						.045,
						.11,
						.055
					],
					position: [
						e,
						.39,
						-.4725
					],
					color: "#414641",
					radius: .001
				})
			] }, e)),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "awning-front-rail",
				size: [
					3.58,
					.026,
					.026
				],
				position: [
					0,
					.195,
					.476
				],
				color: "#414641",
				radius: .002
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/laundry/drying-rack.tsx
var Om = [
	1.2,
	.95,
	.6
];
function km({ size: e = Om } = {}) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "drying-rack",
		scale: [
			e[0] / 1.2,
			e[1] / .95,
			e[2] / .6
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "leg",
				size: [
					.035,
					.915,
					.035
				],
				position: [
					-.48,
					.4575,
					-.25
				],
				color: "#606b70",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "leg",
				size: [
					.035,
					.915,
					.035
				],
				position: [
					-.48,
					.4575,
					.25
				],
				color: "#606b70",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "leg",
				size: [
					.035,
					.915,
					.035
				],
				position: [
					.48,
					.4575,
					-.25
				],
				color: "#606b70",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "leg",
				size: [
					.035,
					.915,
					.035
				],
				position: [
					.48,
					.4575,
					.25
				],
				color: "#606b70",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "top-side",
				size: [
					.02,
					.035,
					.6
				],
				position: [
					-.59,
					.9325,
					0
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "top-side",
				size: [
					.02,
					.035,
					.6
				],
				position: [
					.59,
					.9325,
					0
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "top-end",
				size: [
					1.16,
					.035,
					.02
				],
				position: [
					0,
					.9325,
					-.29
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "top-end",
				size: [
					1.16,
					.035,
					.02
				],
				position: [
					0,
					.9325,
					.29
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "drying-rail",
				size: [
					.012,
					.012,
					.56
				],
				position: [
					-.51,
					.93,
					0
				],
				color: "#e8e5dc",
				radius: .004
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "drying-rail",
				size: [
					.012,
					.012,
					.56
				],
				position: [
					-.396667,
					.93,
					0
				],
				color: "#e8e5dc",
				radius: .004
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "drying-rail",
				size: [
					.012,
					.012,
					.56
				],
				position: [
					-.283334,
					.93,
					0
				],
				color: "#e8e5dc",
				radius: .004
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "drying-rail",
				size: [
					.012,
					.012,
					.56
				],
				position: [
					-.170001,
					.93,
					0
				],
				color: "#e8e5dc",
				radius: .004
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "drying-rail",
				size: [
					.012,
					.012,
					.56
				],
				position: [
					-.056667999999999996,
					.93,
					0
				],
				color: "#e8e5dc",
				radius: .004
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "drying-rail",
				size: [
					.012,
					.012,
					.56
				],
				position: [
					.056664999999999965,
					.93,
					0
				],
				color: "#e8e5dc",
				radius: .004
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "drying-rail",
				size: [
					.012,
					.012,
					.56
				],
				position: [
					.16999799999999998,
					.93,
					0
				],
				color: "#e8e5dc",
				radius: .004
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "drying-rail",
				size: [
					.012,
					.012,
					.56
				],
				position: [
					.283331,
					.93,
					0
				],
				color: "#e8e5dc",
				radius: .004
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "drying-rail",
				size: [
					.012,
					.012,
					.56
				],
				position: [
					.396664,
					.93,
					0
				],
				color: "#e8e5dc",
				radius: .004
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "drying-rail",
				size: [
					.012,
					.012,
					.56
				],
				position: [
					.509997,
					.93,
					0
				],
				color: "#e8e5dc",
				radius: .004
			}),
			[-.25, .25].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				name: "trestle-support",
				size: [
					1.18,
					.035,
					.025
				],
				position: [
					0,
					.8975,
					e
				],
				color: "#e8e5dc"
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/laundry/ironing-board.tsx
var Am = [
	1.2,
	.9,
	.4
];
function jm({ size: e = Am } = {}) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "ironing-board",
		scale: [
			e[0] / 1.2,
			e[1] / .9,
			e[2] / .4
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "padded-board",
				size: [
					1.2,
					.045,
					.4
				],
				position: [
					0,
					.8775,
					0
				],
				color: "#81958a",
				radius: .09
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "leg",
				size: [
					.035,
					.855,
					.035
				],
				position: [
					-.4,
					.4275,
					-.15
				],
				color: "#606b70",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "leg",
				size: [
					.035,
					.855,
					.035
				],
				position: [
					-.4,
					.4275,
					.15
				],
				color: "#606b70",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "leg",
				size: [
					.035,
					.855,
					.035
				],
				position: [
					.4,
					.4275,
					-.15
				],
				color: "#606b70",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "leg",
				size: [
					.035,
					.855,
					.035
				],
				position: [
					.4,
					.4275,
					.15
				],
				color: "#606b70",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "brace",
				size: [
					.835,
					.035,
					.035
				],
				position: [
					0,
					.35,
					0
				],
				color: "#606b70",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "trestle-crossbar",
				size: [
					.035,
					.035,
					.335
				],
				position: [
					-.4,
					.35,
					0
				],
				color: "#606b70",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "trestle-crossbar",
				size: [
					.035,
					.035,
					.335
				],
				position: [
					.4,
					.35,
					0
				],
				color: "#606b70",
				radius: .006
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/laundry/laundry-carry-basket.tsx
var Mm = [
	.6,
	.35,
	.4
];
function Nm({ size: e = Mm } = {}) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "laundry-carry-basket",
		scale: [
			e[0] / .6,
			e[1] / .35,
			e[2] / .4
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "base",
				size: [
					.6,
					.025,
					.4
				],
				position: [
					0,
					.0125,
					0
				],
				color: "#e8e5dc",
				radius: .006,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "grip-rim",
				size: [
					.6,
					.045,
					.02
				],
				position: [
					0,
					.3275,
					-.19
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.025,
					.285,
					.02
				],
				position: [
					-.27,
					.1675,
					-.19
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.025,
					.285,
					.02
				],
				position: [
					-.21600000000000003,
					.1675,
					-.19
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.025,
					.285,
					.02
				],
				position: [
					-.16200000000000003,
					.1675,
					-.19
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.025,
					.285,
					.02
				],
				position: [
					-.10800000000000001,
					.1675,
					-.19
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.025,
					.285,
					.02
				],
				position: [
					-.05400000000000002,
					.1675,
					-.19
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.025,
					.285,
					.02
				],
				position: [
					0,
					.1675,
					-.19
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.025,
					.285,
					.02
				],
				position: [
					.05399999999999999,
					.1675,
					-.19
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.025,
					.285,
					.02
				],
				position: [
					.10799999999999998,
					.1675,
					-.19
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.025,
					.285,
					.02
				],
				position: [
					.16199999999999998,
					.1675,
					-.19
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.025,
					.285,
					.02
				],
				position: [
					.21599999999999997,
					.1675,
					-.19
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.025,
					.285,
					.02
				],
				position: [
					.27,
					.1675,
					-.19
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "grip-rim",
				size: [
					.6,
					.045,
					.02
				],
				position: [
					0,
					.3275,
					.19
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.025,
					.285,
					.02
				],
				position: [
					-.27,
					.1675,
					.19
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.025,
					.285,
					.02
				],
				position: [
					-.21600000000000003,
					.1675,
					.19
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.025,
					.285,
					.02
				],
				position: [
					-.16200000000000003,
					.1675,
					.19
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.025,
					.285,
					.02
				],
				position: [
					-.10800000000000001,
					.1675,
					.19
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.025,
					.285,
					.02
				],
				position: [
					-.05400000000000002,
					.1675,
					.19
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.025,
					.285,
					.02
				],
				position: [
					0,
					.1675,
					.19
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.025,
					.285,
					.02
				],
				position: [
					.05399999999999999,
					.1675,
					.19
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.025,
					.285,
					.02
				],
				position: [
					.10799999999999998,
					.1675,
					.19
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.025,
					.285,
					.02
				],
				position: [
					.16199999999999998,
					.1675,
					.19
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.025,
					.285,
					.02
				],
				position: [
					.21599999999999997,
					.1675,
					.19
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.025,
					.285,
					.02
				],
				position: [
					.27,
					.1675,
					.19
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "grip-rim",
				size: [
					.02,
					.045,
					.36
				],
				position: [
					-.29,
					.3275,
					0
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.02,
					.285,
					.025
				],
				position: [
					-.29,
					.1675,
					-.16
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.02,
					.285,
					.025
				],
				position: [
					-.29,
					.1675,
					-.10666700000000001
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.02,
					.285,
					.025
				],
				position: [
					-.29,
					.1675,
					-.053334000000000006
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.02,
					.285,
					.025
				],
				position: [
					-.29,
					.1675,
					-1000000000001e-18
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.02,
					.285,
					.025
				],
				position: [
					-.29,
					.1675,
					.05333199999999999
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.02,
					.285,
					.025
				],
				position: [
					-.29,
					.1675,
					.10666499999999998
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.02,
					.285,
					.025
				],
				position: [
					-.29,
					.1675,
					.159998
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "grip-rim",
				size: [
					.02,
					.045,
					.36
				],
				position: [
					.29,
					.3275,
					0
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.02,
					.285,
					.025
				],
				position: [
					.29,
					.1675,
					-.16
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.02,
					.285,
					.025
				],
				position: [
					.29,
					.1675,
					-.10666700000000001
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.02,
					.285,
					.025
				],
				position: [
					.29,
					.1675,
					-.053334000000000006
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.02,
					.285,
					.025
				],
				position: [
					.29,
					.1675,
					-1000000000001e-18
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.02,
					.285,
					.025
				],
				position: [
					.29,
					.1675,
					.05333199999999999
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.02,
					.285,
					.025
				],
				position: [
					.29,
					.1675,
					.10666499999999998
				],
				color: "#e8e5dc",
				radius: .006
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "slat",
				size: [
					.02,
					.285,
					.025
				],
				position: [
					.29,
					.1675,
					.159998
				],
				color: "#e8e5dc",
				radius: .006
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/laundry/lifting-rack-tray.tsx
function Pm({ name: e, height: t }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: e,
		position: [
			0,
			t,
			0
		],
		children: [
			[-1, 1].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: `${e}-arm-${t}`,
				position: [
					t * .575,
					0,
					.2925
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.02,
					.02,
					.515
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#9da5a3" })]
			}, t)),
			Array.from({ length: 9 }, (t, n) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: `${e}-rod-${n}`,
				position: [
					0,
					0,
					.05 + n * .06175
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.006,
					.006,
					1.15,
					8
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#b5bab5" })]
			}, n)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: `${e}-rear-brace`,
				position: [
					0,
					0,
					.045
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					1.15,
					.018,
					.02
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#9da5a3" })]
			}),
			[-1, 1].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: `${e}-rail-bracket-${t}`,
				position: [
					t * .54,
					0,
					.035
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.03,
					.03,
					.03
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#8f9896" })]
			}, t))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/laundry/lifting-rack-chain.tsx
function Fm() {
	let e = (0, R.useMemo)(() => {
		let e = new ie(), t = (e, t) => new M(e, t, .065);
		return e.add(new E(t(-.59, 1.52), t(-.59, .2))), e.add(new u(t(-.59, .2), t(-.59, .177909), t(-.572091, .16), t(-.55, .16))), e.add(new u(t(-.55, .16), t(-.527909, .16), t(-.51, .177909), t(-.51, .2))), e.add(new E(t(-.51, .2), t(-.51, 1.52))), e.add(new u(t(-.51, 1.52), t(-.51, 1.542091), t(-.527909, 1.56), t(-.55, 1.56))), e.add(new u(t(-.55, 1.56), t(-.572091, 1.56), t(-.59, 1.542091), t(-.59, 1.52))), new We(e, 64, .0012, 4, !0);
	}, []);
	return (0, R.useEffect)(() => () => e.dispose(), [e]), /* @__PURE__ */ (0, U.jsx)("mesh", {
		name: "lifting-rack-chain",
		geometry: e,
		children: /* @__PURE__ */ (0, U.jsx)(I, { color: "#dad8cf" })
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/laundry/wall-lifting-drying-rack.tsx
var Im = [
	1.2,
	1.6,
	.55
];
function Lm({ size: e = Im }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "wall-lifting-drying-rack",
		scale: [
			e[0] / 1.2,
			e[1] / 1.6,
			e[2] / .55
		],
		children: [
			[-1, 1].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: `lifting-rack-guide-${e}`,
				position: [
					e * .54,
					.7925,
					.02
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.024,
					1.585,
					.04
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#b5bab5" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "lifting-rack-top-bar",
				position: [
					0,
					1.585,
					.0175
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					1.2,
					.03,
					.035
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#9da5a3" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "lifting-rack-pulley",
				position: [
					-.55,
					1.52,
					.05
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.04,
					.04,
					.03,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#aaaead" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(Fm, {}),
			/* @__PURE__ */ (0, U.jsx)(Pm, {
				name: "lifting-rack-lower-tray",
				height: .32
			}),
			/* @__PURE__ */ (0, U.jsx)(Pm, {
				name: "lifting-rack-upper-tray",
				height: 1.2
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/laundry/wall-cleaning-tool-rack.tsx
var Rm = [
	.22,
	1.3,
	.12
], zm = [
	{
		x: -.05,
		headBottom: 0,
		height: 1.2,
		color: "#458fb3",
		headWidth: .14,
		headDepth: .12,
		headHeight: .02
	},
	{
		x: 0,
		headBottom: .05,
		height: 1.3,
		color: "#af5141",
		headWidth: .11,
		headDepth: .065,
		headHeight: .035
	},
	{
		x: .05,
		headBottom: .12,
		height: .96,
		color: "#343b37",
		headWidth: .1,
		headDepth: .065,
		headHeight: .02
	}
];
function Bm({ size: e = Rm }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "wall-cleaning-tool-rack",
		scale: [
			e[0] / .22,
			e[1] / 1.3,
			e[2] / .12
		],
		children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: "cleaning-tool-holder",
			position: [
				0,
				.8,
				.0125
			],
			castShadow: !0,
			receiveShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
				.16,
				.035,
				.025
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#252b29" })]
		}), zm.map((e, t) => /* @__PURE__ */ (0, U.jsxs)("group", { children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: `cleaning-head-${t}`,
				size: [
					e.headWidth,
					e.headHeight,
					e.headDepth
				],
				position: [
					e.x,
					e.headBottom + e.headHeight / 2,
					e.headDepth / 2
				],
				radius: .005,
				color: t === 0 ? "#8b9ea2" : "#929a90",
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: `cleaning-shaft-${t}`,
				position: [
					e.x,
					(e.headBottom + .015 + e.height - .16) / 2,
					.043
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.006,
					.006,
					e.height - .175 - e.headBottom,
					8
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#b3bbb7" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: `cleaning-grip-${t}`,
				position: [
					e.x,
					e.height - .1,
					.043
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.008,
					.008,
					.2,
					8
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: e.color })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: `cleaning-clamp-${t}`,
				position: [
					e.x,
					.8,
					.043
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
					.009,
					.003,
					4,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#252b29" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: `cleaning-clamp-bridge-${t}`,
				position: [
					e.x,
					.8,
					.026
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.022,
					.03,
					.015
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#252b29" })]
			})
		] }, t))]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/curtains/single-window-curtain.tsx
function Vm({ size: e, variant: t, color: n }) {
	let i = t === "right" ? 1 : -1;
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "single-window-curtain",
		scale: [
			e[0] / 1.2,
			e[1] / 2.4,
			e[2] / .12
		],
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					2.36,
					.06
				],
				castShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						1.2,
						.08,
						.12
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#dedbd3" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#aaa399",
						thickness: .0015,
						screenspace: !1
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					i * .37,
					1.16,
					.075
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.42,
						2.32,
						.05
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: n ?? "#d8c8ad" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						color: "#a4957e",
						thickness: .0015,
						screenspace: !1
					})
				]
			}),
			[
				-.15,
				-.05,
				.05,
				.15
			].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					i * .37 + e,
					1.16,
					.102
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.018,
					2.3,
					.012
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: n ?? "#c4b497" })]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/countertop-appliances/multicooker.tsx
var Hm = [
	.38,
	.34,
	.325
], Um = [
	[.15, .278],
	[.15, .287],
	[.13, .3],
	[.08, .315],
	[0, .315]
].map(([e, t]) => new Oe(e, t));
function Wm({ size: e = Hm }) {
	return /* @__PURE__ */ (0, U.jsx)("group", {
		userData: { walkCollider: !0 },
		name: "multicooker",
		scale: [
			e[0] / .38,
			e[1] / .34,
			e[2] / .325
		],
		children: /* @__PURE__ */ (0, U.jsxs)("group", {
			position: [
				0,
				0,
				-.0125
			],
			children: [
				/* @__PURE__ */ (0, U.jsxs)("mesh", {
					position: [
						0,
						.15,
						0
					],
					scale: [
						1.1,
						1,
						1
					],
					castShadow: !0,
					children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.15,
						.13,
						.265,
						32
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#eeede8" })]
				}),
				[-.095, .095].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
					position: [
						e,
						.01,
						0
					],
					children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.018,
						.018,
						.02,
						12
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#323638" })]
				}, e)),
				/* @__PURE__ */ (0, U.jsxs)("mesh", {
					castShadow: !0,
					children: [/* @__PURE__ */ (0, U.jsx)("latheGeometry", { args: [Um, 32] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#e8e8e1" })]
				}),
				[-.175, .175].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
					position: [
						e,
						.255,
						0
					],
					scale: [
						.015,
						.018,
						.075
					],
					children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
						1,
						16,
						8
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#323638" })]
				}, e)),
				/* @__PURE__ */ (0, U.jsx)(K, {
					name: "lid-grip",
					size: [
						.1,
						.025,
						.065
					],
					position: [
						0,
						.3275,
						0
					],
					color: "#545a5b",
					radius: .012,
					outline: !1
				}),
				/* @__PURE__ */ (0, U.jsx)(K, {
					name: "control-face",
					size: [
						.085,
						.105,
						.02
					],
					position: [
						0,
						.16,
						.159
					],
					color: "#303536",
					radius: .02,
					outline: !1
				}),
				/* @__PURE__ */ (0, U.jsx)(K, {
					size: [
						.052,
						.027,
						.003
					],
					position: [
						0,
						.18,
						.172
					],
					color: "#171e21",
					radius: .003,
					outline: !1
				}),
				/* @__PURE__ */ (0, U.jsxs)("mesh", {
					position: [
						0,
						.135,
						.172
					],
					rotation: [
						Math.PI / 2,
						0,
						0
					],
					children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.016,
						.016,
						.006,
						20
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#bbbdb8" })]
				})
			]
		})
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/countertop-appliances/capsule-coffee-machine.tsx
var Gm = [
	.2,
	.3,
	.35
];
function Km({ size: e = Gm }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		userData: { walkCollider: !0 },
		name: "capsule-coffee-machine",
		scale: [
			e[0] / .2,
			e[1] / .3,
			e[2] / .35
		],
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "machine-body",
				size: [
					.2,
					.28,
					.235
				],
				position: [
					0,
					.16,
					-.0575
				],
				color: "#e8e8e3",
				radius: .02
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "drip-tray",
				size: [
					.17,
					.022,
					.35
				],
				position: [
					0,
					.011,
					0
				],
				color: "#909895",
				radius: .009,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "dispensing-recess",
				size: [
					.095,
					.195,
					.004
				],
				position: [
					0,
					.1275,
					.062
				],
				color: "#323a3b",
				radius: .005,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "capsule-lever",
				size: [
					.08,
					.008,
					.19
				],
				position: [
					0,
					.286,
					-.045
				],
				color: "#8a918f",
				radius: .003,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.203,
					.075
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.012,
					.012,
					.024,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#767f7e" })]
			}),
			[
				0,
				1,
				2,
				3
			].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.024,
					.09 + e * .019
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.12,
					.002,
					.003
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#596364" })]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/countertop-appliances/two-slot-toaster.tsx
var qm = [
	.28,
	.19,
	.18
];
function Jm({ size: e = qm }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		userData: { walkCollider: !0 },
		name: "two-slot-toaster",
		scale: [
			e[0] / .28,
			e[1] / .19,
			e[2] / .18
		],
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "toaster-body",
				size: [
					.28,
					.175,
					.18
				],
				position: [
					0,
					.0975,
					0
				],
				color: "#a9afad",
				radius: .023
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "base",
				size: [
					.25,
					.014,
					.15
				],
				position: [
					0,
					.007,
					0
				],
				color: "#383e3e",
				radius: .006,
				outline: !1
			}),
			[-.04, .04].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				name: "toast-slot",
				size: [
					.21,
					.003,
					.023
				],
				position: [
					0,
					.1885,
					e
				],
				color: "#222a2b",
				radius: .01,
				outline: !1
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "lever-guide",
				size: [
					.003,
					.08,
					.015
				],
				position: [
					.1385,
					.103,
					0
				],
				color: "#515958",
				radius: .001,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					.127,
					.07,
					.055
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.016,
					.016,
					.025,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#485351" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/countertop-appliances/mixing-bowl.tsx
var Ym = [
	[.035, .035],
	[.085, .075],
	[.12, .16],
	[.135, .255],
	[.129, .255],
	[.114, .16],
	[.08, .079],
	[.032, .045],
	[0, .045],
	[0, .035]
].map(([e, t]) => new Oe(e, t));
function Xm() {
	return /* @__PURE__ */ (0, U.jsxs)("mesh", {
		name: "open-mixing-bowl",
		position: [
			0,
			0,
			.065
		],
		castShadow: !0,
		children: [/* @__PURE__ */ (0, U.jsx)("latheGeometry", { args: [Ym, 32] }), /* @__PURE__ */ (0, U.jsx)(I, {
			color: "#a5acaa",
			side: 2
		})]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/countertop-appliances/stand-mixer.tsx
var Zm = [
	.28,
	.4,
	.4
];
function Qm({ size: e = Zm, variant: t = "default" }) {
	let n = t === "black" ? "#303436" : "#853c48";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		userData: { walkCollider: !0 },
		name: "stand-mixer",
		scale: [
			e[0] / Zm[0],
			e[1] / Zm[1],
			e[2] / Zm[2]
		],
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "mixer-base",
				size: [
					.28,
					.035,
					.4
				],
				position: [
					0,
					.0175,
					0
				],
				color: n,
				radius: .015
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "rear-column",
				size: [
					.1,
					.29,
					.11
				],
				position: [
					0,
					.175,
					-.115
				],
				color: n,
				radius: .022
			}),
			/* @__PURE__ */ (0, U.jsxs)("group", {
				name: "tilting-head",
				position: [
					0,
					.335,
					-.14
				],
				children: [/* @__PURE__ */ (0, U.jsx)(K, {
					name: "motor-head",
					size: [
						.13,
						.11,
						.36
					],
					position: [
						0,
						.01,
						.145
					],
					color: n,
					radius: .035
				}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
					name: "mixing-shaft",
					position: [
						0,
						-.06,
						.205
					],
					children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.005,
						.005,
						.08,
						12
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#abb2ae" })]
				})]
			}),
			/* @__PURE__ */ (0, U.jsx)(Xm, {}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "hinge",
				position: [
					.052,
					.335,
					-.14
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.019,
					.019,
					.009,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#969f9a" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/compact-sanitary/integrated-compact-basin.tsx
var $m = new j();
$m.moveTo(-.3, -.175), $m.lineTo(.3, -.175), $m.lineTo(.3, .145), $m.quadraticCurveTo(.3, .175, .27, .175), $m.lineTo(-.27, .175), $m.quadraticCurveTo(-.3, .175, -.3, .145), $m.closePath();
var eh = new de();
eh.absellipse(0, .025, .25, .115, 0, Math.PI * 2, !0), $m.holes.push(eh);
var th = [
	[.255, .478],
	[.25, .475],
	[.23, .44],
	[.18, .375],
	[.07, .36],
	[0, .36],
	[0, .345],
	[.075, .345],
	[.19, .363],
	[.24, .433],
	[.26, .478]
].map(([e, t]) => new Oe(e, t));
function nh() {
	return /* @__PURE__ */ (0, U.jsxs)("group", { children: [
		/* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: "basin-rim",
			position: [
				0,
				.5,
				0
			],
			rotation: [
				Math.PI / 2,
				0,
				0
			],
			children: [/* @__PURE__ */ (0, U.jsx)("extrudeGeometry", { args: [$m, {
				depth: .025,
				bevelEnabled: !1,
				curveSegments: 20
			}] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#f0efea" })]
		}),
		/* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: "basin-bowl",
			position: [
				0,
				0,
				.025
			],
			scale: [
				1,
				1,
				.46
			],
			children: [/* @__PURE__ */ (0, U.jsx)("latheGeometry", { args: [th, 32] }), /* @__PURE__ */ (0, U.jsx)(I, {
				color: "#eeede7",
				side: 2
			})]
		}),
		/* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: "basin-drain",
			position: [
				0,
				.361,
				.025
			],
			children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
				.015,
				.015,
				.002,
				16
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#a6aeab" })]
		})
	] });
}
//#endregion
//#region packages/catalog/src/furnishing/presets/compact-sanitary/compact-two-door-vanity.tsx
var rh = [
	.6,
	.5,
	.35
];
function ih({ size: e = rh }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "compact-two-door-vanity",
		scale: [
			e[0] / .6,
			e[1] / .5,
			e[2] / .35
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "back",
				size: [
					.568,
					.44,
					.014
				],
				position: [
					0,
					.238,
					-.16
				],
				color: "#dedfd8",
				radius: .004,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "bottom",
				size: [
					.568,
					.018,
					.318
				],
				position: [
					0,
					.009,
					-.006
				],
				color: "#e8e8e2",
				radius: .004,
				outline: !1
			}),
			[-.287, .287].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				name: "side",
				size: [
					.018,
					.477,
					.325
				],
				position: [
					e,
					.2385,
					-.0125
				],
				color: "#e8e8e2",
				radius: .006,
				outline: !1
			}, e)),
			[-.15, .15].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				name: "vanity-door",
				size: [
					.296,
					.46,
					.018
				],
				position: [
					e,
					.238,
					.156
				],
				color: "#eaeae4",
				radius: .012,
				outline: !1
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(nh, {})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/compact-sanitary/thin-arched-mirror.tsx
var ah = [
	.5,
	.8,
	.018
];
function oh(e) {
	let t = new j(), n = .25 - e;
	return t.moveTo(-n, e), t.lineTo(n, e), t.lineTo(n, .55), t.absarc(0, .55, n, 0, Math.PI, !1), t.lineTo(-n, e), t.closePath(), t;
}
var sh = oh(0), ch = oh(.006);
sh.holes.push(new de(ch.getPoints(24)));
function lh({ size: e = ah, variant: t = "default" }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "thin-arched-mirror",
		scale: [
			e[0] / .5,
			e[1] / .8,
			e[2] / .018
		],
		children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: "mirror-frame",
			children: [/* @__PURE__ */ (0, U.jsx)("extrudeGeometry", { args: [sh, {
				depth: .018,
				bevelEnabled: !1,
				curveSegments: 24
			}] }), /* @__PURE__ */ (0, U.jsx)(I, { color: t === "brass" ? "#bfa26c" : "#303936" })]
		}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: "mirror-face",
			position: [
				0,
				0,
				.002
			],
			children: [/* @__PURE__ */ (0, U.jsx)("extrudeGeometry", { args: [ch, {
				depth: .014,
				bevelEnabled: !1,
				curveSegments: 24
			}] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#becfcd" })]
		})]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/compact-sanitary/wall-hung-toilet.tsx
var uh = [
	.4,
	.715,
	.56
], dh = new j();
dh.absellipse(0, .48, .185, .235, 0, Math.PI * 2, !1);
function fh({ size: e = uh, variant: t = "default" }) {
	let n = t === "black";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "wall-hung-toilet",
		scale: [
			e[0] / .4,
			e[1] / .715,
			e[2] / .56
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)("group", {
				position: [
					0,
					-.19,
					-.158
				],
				rotation: [
					0,
					-Math.PI / 2,
					0
				],
				children: /* @__PURE__ */ (0, U.jsx)(Po, {
					ceramicColor: n ? "#242824" : "#e9e7e0",
					seatColor: n ? "#292c29" : "#faf9f4",
					supportColor: n ? "#353b34" : "#d8d6cf"
				})
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "wall-connection",
				size: [
					.28,
					.12,
					.12
				],
				position: [
					0,
					.14,
					.06
				],
				color: n ? "#242824" : "#ecece6",
				radius: .018,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "raised-toilet-lid",
				position: [
					0,
					0,
					.0475
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("extrudeGeometry", { args: [dh, {
					depth: .015,
					bevelEnabled: !1,
					curveSegments: 24
				}] }), /* @__PURE__ */ (0, U.jsx)(I, { color: n ? "#292c29" : "#f5f4ec" })]
			}),
			[-.11, .11].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "lid-hinge",
				position: [
					e,
					.251,
					.055
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.009,
					.009,
					.045,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: n ? "#353b34" : "#deded7" })]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/compact-sanitary/cabinet-meeting-pulls.tsx
var ph = new j();
ph.moveTo(0, -.022), ph.absarc(0, 0, .022, -Math.PI / 2, Math.PI / 2, !1), ph.lineTo(0, -.022), ph.closePath();
function mh({ height: e = .033, color: t = "#bfa068" }) {
	return /* @__PURE__ */ (0, U.jsx)("group", {
		position: [
			0,
			e,
			.248
		],
		children: [-1, 1].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
			position: [
				e * .002,
				0,
				0
			],
			scale: [
				e,
				1,
				1
			],
			children: [/* @__PURE__ */ (0, U.jsx)("extrudeGeometry", { args: [ph, {
				depth: .027,
				bevelEnabled: !1,
				curveSegments: 16
			}] }), /* @__PURE__ */ (0, U.jsx)(I, {
				color: t,
				side: 2
			})]
		}, e))
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/compact-sanitary/two-door-wall-cabinet.tsx
var hh = [
	.85,
	1.32,
	.275
];
function gh({ size: e = hh, variant: t = "default", pullHeightRatio: n = .033 / 1.32, showPulls: r = !0 }) {
	let i = t === "oak" ? "#c7a67b" : t === "charcoal" ? "#303430" : t === "white" ? "#e9e8e1" : "#26364d";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "two-door-wall-cabinet",
		scale: [
			e[0] / .85,
			e[1] / 1.32,
			e[2] / .275
		],
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "cabinet-back",
				size: [
					.85,
					1.32,
					.012
				],
				position: [
					0,
					.66,
					.006
				],
				color: i,
				radius: .002,
				outline: !1
			}),
			[-.418, .418].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				name: "cabinet-side",
				size: [
					.014,
					1.32,
					.226
				],
				position: [
					e,
					.66,
					.125
				],
				color: i,
				radius: .002,
				outline: !1
			}, e)),
			[.008, 1.312].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				name: "cabinet-horizontal",
				size: [
					.822,
					.016,
					.226
				],
				position: [
					0,
					e,
					.125
				],
				color: i,
				radius: .002,
				outline: !1
			}, e)),
			[-.2135, .2135].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				name: "cabinet-door",
				size: [
					.423,
					1.314,
					.012
				],
				position: [
					e,
					.66,
					.244
				],
				color: i,
				radius: .002,
				outline: !1
			}, e)),
			r && /* @__PURE__ */ (0, U.jsx)(mh, {
				height: n * 1.32,
				color: t === "charcoal" || t === "oak" ? "#252a25" : "#bfa068"
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/compact-sanitary/two-drawer-basin-vanity.tsx
var _h = [
	.83,
	.64,
	.49
];
function vh({ size: e = _h }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "two-drawer-basin-vanity",
		scale: [
			e[0] / .83,
			e[1] / .64,
			e[2] / .49
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "drawer-case-back",
				size: [
					.794,
					.6,
					.016
				],
				position: [
					0,
					.31,
					-.237
				],
				color: "#e8e8e2",
				radius: .003,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "drawer-case-bottom",
				size: [
					.794,
					.02,
					.445
				],
				position: [
					0,
					.01,
					-.0145
				],
				color: "#e8e8e2",
				radius: .003,
				outline: !1
			}),
			[-.403, .403].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				name: "drawer-case-side",
				size: [
					.02,
					.617,
					.445
				],
				position: [
					e,
					.3085,
					-.0225
				],
				color: "#e8e8e2",
				radius: .004,
				outline: !1
			}, e)),
			[.155, .46].map((e) => /* @__PURE__ */ (0, U.jsxs)("group", { children: [/* @__PURE__ */ (0, U.jsx)(K, {
				name: "vanity-drawer-front",
				size: [
					.802,
					.298,
					.018
				],
				position: [
					0,
					e,
					.21
				],
				color: "#efeee8",
				radius: .004,
				outline: !1
			}), /* @__PURE__ */ (0, U.jsx)(K, {
				name: "vanity-drawer-pull",
				size: [
					.16,
					.024,
					.027
				],
				position: [
					0,
					e + .134,
					.2305
				],
				color: "#f5f4ec",
				radius: .004,
				outline: !1
			})] }, e)),
			/* @__PURE__ */ (0, U.jsx)("group", {
				position: [
					0,
					.14,
					0
				],
				scale: [
					.83 / .6,
					1,
					.49 / .35
				],
				children: /* @__PURE__ */ (0, U.jsx)(nh, {})
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/compact-sanitary/empty-rectangular-bathtub.tsx
var yh = [
	1.6,
	.56,
	.7
], bh = new j();
bh.moveTo(-.775, -.35), bh.lineTo(.775, -.35), bh.quadraticCurveTo(.8, -.35, .8, -.325), bh.lineTo(.8, .325), bh.quadraticCurveTo(.8, .35, .775, .35), bh.lineTo(-.775, .35), bh.quadraticCurveTo(-.8, .35, -.8, .325), bh.lineTo(-.8, -.325), bh.quadraticCurveTo(-.8, -.35, -.775, -.35), bh.closePath();
var xh = new de();
xh.absellipse(0, 0, .73, .29, 0, Math.PI * 2, !0), bh.holes.push(xh);
var Sh = [
	[.745, .538],
	[.73, .535],
	[.69, .46],
	[.61, .18],
	[.57, .12],
	[0, .12],
	[0, .1],
	[.58, .1],
	[.63, .17],
	[.71, .46],
	[.751, .538]
].map(([e, t]) => new Oe(e, t));
function Ch({ size: e = yh }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "empty-rectangular-bathtub",
		scale: [
			e[0] / 1.6,
			e[1] / .56,
			e[2] / .7
		],
		userData: { walkCollider: !0 },
		children: [
			[-.339, .339].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				name: "bath-long-apron",
				size: [
					1.6,
					.535,
					.022
				],
				position: [
					0,
					.2675,
					e
				],
				color: "#eeece4",
				radius: .003,
				outline: !1
			}, e)),
			[-.789, .789].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				name: "bath-end-apron",
				size: [
					.022,
					.535,
					.654
				],
				position: [
					e,
					.2675,
					0
				],
				color: "#eeece4",
				radius: .003,
				outline: !1
			}, e)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "bath-rim",
				position: [
					0,
					.56,
					0
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("extrudeGeometry", { args: [bh, {
					depth: .025,
					bevelEnabled: !1,
					curveSegments: 24
				}] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#f4f2eb" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "bath-interior",
				scale: [
					1,
					1,
					.29 / .73
				],
				children: [/* @__PURE__ */ (0, U.jsx)("latheGeometry", { args: [Sh, 48] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: "#f0eee7",
					side: 2
				})]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "bath-drain",
				position: [
					.48,
					.122,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.025,
					.025,
					.003,
					20
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#a8b0a9" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/compact-sanitary/folded-bath-screen.tsx
var wh = [
	.42,
	1.5,
	.055
];
function Th({ size: e = wh }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "folded-bath-screen",
		scale: [
			e[0] / .42,
			e[1] / 1.5,
			e[2] / .055
		],
		children: [[
			.006,
			.026,
			.046
		].map((e) => /* @__PURE__ */ (0, U.jsxs)("group", { children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: "folded-screen-glass",
			position: [
				0,
				.75,
				e
			],
			children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
				.396,
				1.5,
				.006
			] }), /* @__PURE__ */ (0, U.jsx)(I, {
				color: "#b4d0cf",
				transparent: !0,
				opacity: .2,
				depthWrite: !1
			})]
		}), [-.204, .204].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: "screen-edge",
			position: [
				t,
				.75,
				e
			],
			children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
				.006,
				.006,
				1.5,
				12
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#a5b1b0" })]
		}, t))] }, e)), [.15, 1.35].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
			name: "screen-fold-hinge",
			size: [
				.015,
				.07,
				.055
			],
			position: [
				-.2025,
				e,
				.0275
			],
			color: "#a5b1b0",
			radius: .002,
			outline: !1
		}, e))]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/compact-sanitary/brass-bath-shower-column.tsx
var Eh = [
	.27,
	1.341,
	.38
], Dh = (e, t) => new M(0, e, t), Oh = new ie();
Oh.add(new E(Dh(.04, .08), Dh(1.25, .08))), Oh.add(new He(Dh(1.25, .08), Dh(1.33, .08), Dh(1.33, .16))), Oh.add(new E(Dh(1.33, .16), Dh(1.33, .26)));
var kh = new He(new M(.065, .54, .11), new M(.12, -.115, .22), new M(-.08, .03, .11));
function Ah({ size: e = Eh, variant: t = "default" }) {
	let n = t === "black" ? "#292c2a" : "#bfa26c", r = t === "black" ? "#363a36" : "#c8ab72", i = t === "black" ? "#303430" : "#b59b65";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "brass-bath-shower-column",
		scale: [
			e[0] / .27,
			e[1] / 1.341,
			e[2] / .38
		],
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "thermostatic-mixer",
				position: [
					0,
					.03,
					.08
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.03,
					.03,
					.27,
					20
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: n })]
			}),
			[-.07, .07].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "mixer-wall-connection",
				position: [
					e,
					.03,
					.025
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.02,
					.02,
					.05,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: n })]
			}, e)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "shower-riser",
				children: [/* @__PURE__ */ (0, U.jsx)("tubeGeometry", { args: [
					Oh,
					48,
					.011,
					8,
					!1
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: r })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "rain-head-stem",
				position: [
					0,
					1.32,
					.26
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.008,
					.008,
					.04,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: n })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "rain-head",
				position: [
					0,
					1.3,
					.26
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.12,
					.12,
					.03,
					32
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: n })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "tube-hand-shower",
				position: [
					.065,
					.66,
					.11
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.01,
					.01,
					.24,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: r })]
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "hand-shower-clip",
				size: [
					.065,
					.025,
					.042
				],
				position: [
					.0325,
					.59,
					.11
				],
				color: n,
				radius: .003,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "shower-hose",
				children: [/* @__PURE__ */ (0, U.jsx)("tubeGeometry", { args: [
					kh,
					32,
					.003,
					6,
					!1
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: i })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/compact-sanitary/concealed-mount-shelf.tsx
var jh = [
	.63,
	.03,
	.37
];
function Mh({ size: e = jh, variant: t = "default" }) {
	return /* @__PURE__ */ (0, U.jsx)(K, {
		name: "concealed-mount-shelf",
		size: [
			e[0],
			e[1],
			e[2]
		],
		position: [
			0,
			e[1] / 2,
			e[2] / 2
		],
		color: t === "oak" ? "#c7a67b" : t === "white" ? "#eae8df" : "#9da7a7",
		radius: Math.min(.003, e[1] / 4),
		outline: !1
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/compact-sanitary/tall-two-door-storage.tsx
var Nh = [
	1,
	2.364,
	.425
];
function Ph({ size: e = Nh, variant: t = "default" }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "tall-two-door-storage",
		scale: [
			e[0],
			e[1] / 2.364,
			e[2] / .425
		],
		userData: { walkCollider: !0 },
		children: [/* @__PURE__ */ (0, U.jsx)(gh, {
			size: [
				1,
				2.364,
				.38 * .275 / .238
			],
			variant: t === "oak" ? "oak" : "white",
			showPulls: !1
		}), /* @__PURE__ */ (0, U.jsx)("group", {
			position: [
				0,
				1.017,
				.15
			],
			children: /* @__PURE__ */ (0, U.jsx)(mh, { color: t === "oak" ? "#252a25" : "#bfa068" })
		})]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/compact-sanitary/round-countertop-basin.tsx
var Fh = [
	.45,
	.15,
	.45
], Ih = [
	[0, 0],
	[.19, 0],
	[.205, .018],
	[.225, .15],
	[.214, .15],
	[.195, .025],
	[0, .025]
].map(([e, t]) => new Oe(e, t));
function Lh({ size: e = Fh }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "round-countertop-basin",
		scale: [
			e[0] / .45,
			e[1] / .15,
			e[2] / .45
		],
		children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: "vessel-bowl",
			children: [/* @__PURE__ */ (0, U.jsx)("latheGeometry", { args: [Ih, 48] }), /* @__PURE__ */ (0, U.jsx)(I, {
				color: "#f4f2eb",
				side: 2
			})]
		}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: "basin-drain",
			position: [
				0,
				.026,
				0
			],
			children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
				.026,
				.026,
				.002,
				24
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#303331" })]
		})]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/compact-sanitary/oak-two-drawer-vanity.tsx
var Rh = [
	.62,
	.64,
	.49
];
function zh({ size: e = Rh }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "oak-two-drawer-vanity",
		scale: [
			e[0] / .62,
			e[1] / .64,
			e[2] / .49
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "drawer-case-back",
				position: [
					0,
					.309,
					-.237
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.584,
					.618,
					.016
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#a3845e" })]
			}),
			[-.301, .301].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				name: "drawer-case-side",
				size: [
					.018,
					.62,
					.452
				],
				position: [
					e,
					.31,
					-.003
				],
				color: "#a3845e",
				radius: .002,
				outline: !1
			}, e)),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "drawer-case-bottom",
				position: [
					0,
					.009,
					-.011
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.584,
					.018,
					.434
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#a3845e" })]
			}),
			[.151, .459].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				name: "oak-drawer-front",
				size: [
					.58,
					.294,
					.018
				],
				position: [
					0,
					e,
					.232
				],
				color: "#b49870",
				radius: .002,
				outline: !1
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "white-worktop",
				size: [
					.62,
					.02,
					.49
				],
				position: [
					0,
					.63,
					0
				],
				color: "#f1efe8",
				radius: .002,
				outline: !1
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/compact-sanitary/slim-rectangular-mirror.tsx
var Bh = [
	.6,
	.8,
	.018
];
function Vh({ size: e = Bh }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "slim-rectangular-mirror",
		scale: [
			e[0] / .6,
			e[1] / .8,
			e[2] / .018
		],
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "mirror-back",
				position: [
					0,
					.4,
					.003
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.6,
					.8,
					.006
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#9fa6a1" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "mirror-glass",
				position: [
					0,
					.4,
					.009
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.588,
					.788,
					.006
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#aabbb7" })]
			}),
			[-.297, .297].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "mirror-frame",
				position: [
					e,
					.4,
					.012
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.006,
					.8,
					.012
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#c7cbc6" })]
			}, e)),
			[.003, .797].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "mirror-frame",
				position: [
					0,
					e,
					.012
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.588,
					.006,
					.012
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#c7cbc6" })]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/compact-sanitary/narrow-black-shower-door.tsx
var Hh = [
	.65,
	2,
	.075
];
function Uh({ size: e = Hh, variant: t = "default" }) {
	let n = t.startsWith("inox") ? "#969f9c" : "#292c2a";
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: "narrow-black-shower-door",
		scale: [
			e[0] / .65,
			e[1] / 2,
			e[2] / .075
		],
		userData: { walkCollider: !0 },
		children: /* @__PURE__ */ (0, U.jsxs)("group", {
			scale: [
				t.endsWith("right-hinge") ? -1 : 1,
				1,
				1
			],
			children: [
				/* @__PURE__ */ (0, U.jsxs)("mesh", {
					name: "shower-door-glass",
					position: [
						0,
						1,
						0
					],
					children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.614,
						1.97,
						.008
					] }), /* @__PURE__ */ (0, U.jsx)(I, {
						color: "#c7d8d5",
						transparent: !0,
						opacity: .15,
						depthWrite: !1
					})]
				}),
				[-.316, .316].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
					name: "shower-door-jamb",
					position: [
						e,
						1,
						0
					],
					children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.018,
						2,
						.028
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: n })]
				}, e)),
				[.38, 1.62].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
					name: "shower-door-hinge",
					position: [
						-.2975,
						e,
						0
					],
					children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.04,
						.07,
						.024
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: n })]
				}, e)),
				[-1, 1].map((e) => /* @__PURE__ */ (0, U.jsxs)("group", { children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
					name: "shower-door-pull",
					position: [
						.252,
						1,
						e * .0285
					],
					children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.009,
						.009,
						.32,
						16
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: n })]
				}), [.89, 1.11].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
					name: "shower-door-pull-mount",
					position: [
						.252,
						t,
						e * .017
					],
					rotation: [
						Math.PI / 2,
						0,
						0
					],
					children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						.007,
						.007,
						.026,
						12
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: n })]
				}, t))] }, e))
			]
		})
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/compact-sanitary/mosaic-shower-base.tsx
var Wh = [
	.8,
	.1,
	.98
];
function Gh({ size: e = Wh, variant: t = "default" }) {
	let [n, r, i] = e, a = Math.min(.1, n * .2, i * .2), s = n * .25, c = i * .25, l = r * .9, u = r * .93, d = (0, R.useMemo)(() => {
		let e = Math.min(32, Math.ceil(n / .05)), t = Math.min(Math.floor(512 / e), Math.ceil(i / .05)), l = n / e, u = i / t, d = [], f = s - a / 2, p = s + a / 2, m = c - a / 2, h = c + a / 2, g = (e, t, n, i) => {
			t - e < 1e-4 || i - n < 1e-4 || d.push(new le(t - e, r * .1, i - n).applyMatrix4(new o().makeTranslation((e + t) / 2, r * .95, (n + i) / 2)));
		};
		for (let r = 0; r < e; r++) for (let e = 0; e < t; e++) {
			let t = Math.min(.002, l * .1, u * .1), a = -n / 2 + r * l + t / 2, o = a + l - t, s = -i / 2 + e * u + t / 2, c = s + u - t;
			if (o <= f || a >= p || c <= m || s >= h) {
				g(a, o, s, c);
				continue;
			}
			g(a, Math.min(o, f), s, c), g(Math.max(a, p), o, s, c);
			let d = Math.max(a, f), _ = Math.min(o, p);
			g(d, _, s, Math.min(c, m)), g(d, _, Math.max(s, h), c);
		}
		let _ = N(d);
		return d.forEach((e) => e.dispose()), _;
	}, [
		n,
		r,
		i,
		a,
		s,
		c
	]);
	(0, R.useEffect)(() => () => d.dispose(), [d]);
	let f = a * .06, p = a - 2 * f;
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "mosaic-shower-base",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "shower-base-bed",
				position: [
					0,
					l / 2,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					n,
					l,
					i
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: t === "grey" ? "#686e65" : "#d5d1c7" })]
			}),
			/* @__PURE__ */ (0, U.jsx)("mesh", {
				name: "mosaic-tiles",
				geometry: d,
				receiveShadow: !0,
				children: /* @__PURE__ */ (0, U.jsx)(I, { color: t === "grey" ? "#7c8077" : "#eeece4" })
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "drain-recess",
				position: [
					s,
					(l + u) / 2,
					c
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					a,
					u - l,
					a
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#686e68" })]
			}),
			[-1, 1].flatMap((e) => [/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "drain-frame",
				position: [
					s + e * (a - f) / 2,
					(u + r) / 2,
					c
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					f,
					r - u,
					a
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#afb4ae" })]
			}, "x" + e), /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "drain-frame",
				position: [
					s,
					(u + r) / 2,
					c + e * (a - f) / 2
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					p,
					r - u,
					f
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#afb4ae" })]
			}, "z" + e)]),
			Array.from({ length: 7 }, (e, t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "drain-grate-bar",
				position: [
					s,
					(u + r) / 2,
					c + (t - 3) * p / 8
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					p,
					r - u,
					a * .04
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#afb4ae" })]
			}, t))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/compact-sanitary/narrow-single-door-vanity.tsx
var Kh = [
	.335,
	.56,
	.295
];
function qh({ size: e = Kh }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "narrow-single-door-vanity",
		scale: [
			e[0] / .335,
			e[1] / .56,
			e[2] / .295
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "small-vanity-back",
				size: [
					.323,
					.535,
					.014
				],
				position: [
					0,
					.2675,
					-.1405
				],
				color: "#282b28",
				radius: .002,
				outline: !1
			}),
			[-.1555, .1555].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
				name: "small-vanity-side",
				size: [
					.012,
					.535,
					.264
				],
				position: [
					e,
					.2675,
					-.0085
				],
				color: "#282b28",
				radius: .002,
				outline: !1
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "small-vanity-bottom",
				size: [
					.311,
					.014,
					.264
				],
				position: [
					0,
					.007,
					-.0085
				],
				color: "#282b28",
				radius: .002,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "single-vanity-door",
				size: [
					.319,
					.526,
					.012
				],
				position: [
					0,
					.268,
					.1285
				],
				color: "#282b28",
				radius: .002,
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)("group", {
				position: [
					0,
					.06,
					0
				],
				scale: [
					.335 / .6,
					1,
					.295 / .35
				],
				children: /* @__PURE__ */ (0, U.jsx)(nh, {})
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/compact-sanitary/thin-oval-mirror.tsx
var Jh = [
	.4,
	.7,
	.012
], Yh = new j();
Yh.absellipse(0, .35, .2, .35, 0, Math.PI * 2, !1);
var Xh = new de();
Xh.absellipse(0, .35, .195, .345, 0, Math.PI * 2, !0), Yh.holes.push(Xh);
var Zh = new j();
Zh.absellipse(0, .35, .195, .345, 0, Math.PI * 2, !1);
function Qh({ size: e = Jh }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "thin-oval-mirror",
		scale: [
			e[0] / .4,
			e[1] / .7,
			e[2] / .012
		],
		children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: "oval-mirror-rim",
			children: [/* @__PURE__ */ (0, U.jsx)("extrudeGeometry", { args: [Yh, {
				depth: .012,
				bevelEnabled: !1,
				curveSegments: 48
			}] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#aaaead" })]
		}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: "oval-mirror-glass",
			position: [
				0,
				0,
				.002
			],
			children: [/* @__PURE__ */ (0, U.jsx)("extrudeGeometry", { args: [Zh, {
				depth: .006,
				bevelEnabled: !1,
				curveSegments: 48
			}] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#a7bab6" })]
		})]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/compact-sanitary/two-door-mirror-cabinet.tsx
var $h = [
	.7,
	.96,
	.14
];
function eg({ size: e = $h }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "two-door-mirror-cabinet",
		scale: [
			e[0] / .7,
			e[1] / .96,
			e[2] / .14
		],
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "mirror-case-back",
				position: [
					0,
					.48,
					.006
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.7,
					.96,
					.012
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#e8e6df" })]
			}),
			[-.343, .343].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "mirror-case-side",
				position: [
					e,
					.48,
					.069
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.014,
					.96,
					.114
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#e8e6df" })]
			}, e)),
			[.007, .953].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "mirror-case-horizontal",
				position: [
					0,
					e,
					.069
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.672,
					.014,
					.114
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#e8e6df" })]
			}, e)),
			[-.175, .175].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "mirror-door",
				position: [
					e,
					.48,
					.133
				],
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.346,
					.956,
					.014
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#b6c5c0" })]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/compact-sanitary/tubular-wall-lamp.tsx
var tg = [
	.07,
	.32,
	.12
];
function ng({ size: e = tg }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "tubular-wall-lamp",
		scale: [
			e[0] / .07,
			e[1] / .32,
			e[2] / .12
		],
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "lamp-wall-plate",
				position: [
					0,
					.03,
					.01
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.06,
					.06,
					.02
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#929b98" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "lamp-standoff",
				position: [
					0,
					.03,
					.0525
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.02,
					.02,
					.07
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#929b98" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "tube-metal-base",
				position: [
					0,
					.0325,
					.085
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.035,
					.035,
					.065,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#929b98" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "opal-tube",
				position: [
					0,
					.1925,
					.085
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("capsuleGeometry", { args: [
					.03,
					.195,
					4,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#f8f2db" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/compact-sanitary/fixed-shower-panel.tsx
var rg = [
	.4,
	2,
	.025
];
function ig({ size: e = rg }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "fixed-shower-panel",
		scale: [
			e[0] / .4,
			e[1] / 2,
			e[2] / .025
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "fixed-shower-glass",
				position: [
					.002,
					1,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.392,
					1.982,
					.008
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: "#c7d8d5",
					transparent: !0,
					opacity: .15,
					depthWrite: !1
				})]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "fixed-wall-jamb",
				position: [
					-.194,
					1,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.012,
					2,
					.025
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#969f9c" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "fixed-top-rail",
				position: [
					.006,
					1.994,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.388,
					.012,
					.025
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#969f9c" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/curtain-definition.tsx
var ag = z({
	defaultRoomType: "bedroom",
	component: ({ size: e, color: t }) => /* @__PURE__ */ (0, U.jsx)("group", {
		scale: [
			e[0] / 1.9,
			e[1] / 2.205,
			e[2] / .076
		],
		children: /* @__PURE__ */ (0, U.jsx)(cs, { color: t })
	}),
	label: "Children's curtains",
	defaultColor: "#d8d0c4",
	category: "Children",
	defaultSize: [
		1.9,
		2.205,
		.076
	],
	bounds: {
		min: [
			-.95,
			.08,
			-.01
		],
		max: [
			.95,
			2.285,
			.066
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "wall",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 12,
		triangles: 3200
	}
}), og = z({
	defaultRoomType: "living-room",
	component: Vm,
	label: "Single window curtain",
	defaultColor: "#d8c8ad",
	category: "Decor",
	variants: [{
		id: "left",
		label: "Gathered left"
	}, {
		id: "right",
		label: "Gathered right"
	}],
	defaultSize: [
		1.2,
		2.4,
		.12
	],
	bounds: {
		min: [
			-.6,
			0,
			0
		],
		max: [
			.6,
			2.4,
			.12
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "wall",
	windowFit: {
		openingWidthRatio: .95,
		openingHeightRatio: 2.32 / 2.4,
		depthOffsetMeters: .003
	},
	outlineContact: !0,
	complexity: {
		visibleMeshes: 6,
		triangles: 72
	}
}), sg = z({
	component: wd,
	label: "Clip reading lamp",
	category: "Lighting",
	defaultRoomType: "bedroom",
	defaultSize: Sd,
	bounds: {
		min: [
			-.035,
			0,
			-.04
		],
		max: [
			.035,
			.48,
			.146125
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !1,
	complexity: {
		visibleMeshes: 6,
		triangles: 1700
	}
}), cg = z({
	component: Lm,
	label: "Wall lifting drying rack",
	category: "Laundry",
	defaultRoomType: "laundry",
	defaultSize: Im,
	bounds: {
		min: [
			-.6,
			0,
			0
		],
		max: [
			.6,
			1.6,
			.55
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "wall",
	outlineContact: !1,
	complexity: {
		visibleMeshes: 33,
		triangles: 1400
	}
}), lg = { "wall-cleaning-tool-rack": z({
	category: "Laundry",
	defaultRoomType: "laundry",
	preferredPlacement: "wall",
	outlineContact: !1,
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	component: Bm,
	label: "Wall cleaning tool rack",
	defaultSize: Rm,
	bounds: {
		min: [
			-.12,
			0,
			0
		],
		max: [
			.1,
			1.3,
			.12
		]
	},
	complexity: {
		visibleMeshes: 16,
		triangles: 1800
	}
}) }, ug = {
	"slatted-folding-table": z({
		component: Cm,
		label: "Slatted folding table",
		category: "Tables",
		defaultRoomType: "outdoor",
		defaultSize: Sm,
		bounds: {
			min: [
				-.3,
				0,
				-.3
			],
			max: [
				.3,
				.72,
				.3
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		placementEnvironment: "outdoor",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 19,
			triangles: 5e3
		}
	}),
	"slatted-folding-chair": z({
		component: Tm,
		label: "Slatted folding chair",
		category: "Seating",
		defaultRoomType: "outdoor",
		defaultSize: wm,
		bounds: {
			min: [
				-.2,
				0,
				-.25
			],
			max: [
				.2,
				.82,
				.25
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		placementEnvironment: "outdoor",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 19,
			triangles: 5e3
		}
	}),
	"retractable-awning": z({
		component: Dm,
		label: "Retractable awning",
		category: "Garden structures",
		defaultRoomType: "outdoor",
		defaultSize: Em,
		bounds: {
			min: [
				-1.8,
				0,
				-.5
			],
			max: [
				1.8,
				.45,
				.5
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "wall",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 11,
			triangles: 3500
		}
	})
}, dg = z({
	component: hc,
	label: "Square cube storage",
	variants: [{
		id: "default",
		label: "Four compartments"
	}, {
		id: "two-compartment",
		label: "Two compartments"
	}],
	category: "Children",
	defaultRoomType: "bedroom",
	defaultSize: [
		.77,
		.77,
		.39
	],
	bounds: {
		min: [
			-.385,
			0,
			-.195
		],
		max: [
			.385,
			.77,
			.195
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 10,
		triangles: 4200
	}
}), fg = z({
	component: mc,
	label: "Children wall poster",
	category: "Decor",
	defaultRoomType: "bedroom",
	defaultSize: [
		.3,
		.42,
		.012
	],
	bounds: {
		min: [
			-.15,
			0,
			0
		],
		max: [
			.15,
			.42,
			.012
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "wall",
	outlineContact: !1,
	variants: [
		{
			id: "default",
			label: "Sport · red"
		},
		{
			id: "blue",
			label: "Sport · blue"
		},
		{
			id: "rainbow",
			label: "Pastel rainbow"
		}
	],
	complexity: {
		visibleMeshes: 6,
		triangles: 2100
	}
}), pg = z({
	component: pc,
	label: "Piano bench",
	category: "Children",
	defaultRoomType: "bedroom",
	defaultSize: [
		.6,
		.48,
		.32
	],
	bounds: {
		min: [
			-.3,
			0,
			-.16
		],
		max: [
			.3,
			.48,
			.16
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 5,
		triangles: 2e3
	}
}), mg = z({
	component: ic,
	label: "Slatted single bed",
	category: "Children",
	defaultRoomType: "bedroom",
	defaultSize: [
		.98,
		.73,
		2.08
	],
	bounds: {
		min: [
			-.49,
			0,
			-1.04
		],
		max: [
			.49,
			.73,
			1.04
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 13,
		triangles: 5200
	}
}), hg = z({
	component: ac,
	label: "Wood bunk bed",
	category: "Children",
	defaultRoomType: "bedroom",
	defaultSize: [
		1.015,
		1.6,
		2.08
	],
	bounds: {
		min: [
			-.5075,
			0,
			-1.04
		],
		max: [
			.5075,
			1.6,
			1.04
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 24,
		triangles: 9600
	}
}), gg = z({
	component: oc,
	label: "Student storage desk",
	category: "Children",
	defaultRoomType: "bedroom",
	defaultSize: [
		1.26,
		.756,
		.55
	],
	bounds: {
		min: [
			-.63,
			0,
			-.275
		],
		max: [
			.63,
			.756,
			.275
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 13,
		triangles: 5200
	}
}), _g = z({
	component: sc,
	label: "Child swivel chair",
	category: "Children",
	defaultRoomType: "bedroom",
	defaultSize: [
		.44,
		.79,
		.44
	],
	bounds: {
		min: [
			-.22,
			0,
			-.22
		],
		max: [
			.22,
			.79,
			.22
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 7,
		triangles: 2100
	}
}), vg = z({
	component: lc,
	label: "Portable digital piano",
	category: "Children",
	defaultRoomType: "bedroom",
	defaultSize: [
		1.3,
		.84,
		.34
	],
	bounds: {
		min: [
			-.65,
			0,
			-.17
		],
		max: [
			.65,
			.84,
			.17
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 96,
		triangles: 3500
	}
}), yg = z({
	component: uc,
	label: "Split door wardrobe",
	category: "Children",
	defaultRoomType: "bedroom",
	defaultSize: [
		2,
		2.52,
		.6
	],
	bounds: {
		min: [
			-1,
			0,
			-.3
		],
		max: [
			1,
			2.52,
			.3
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 17,
		triangles: 4e3
	},
	variants: [{
		id: "default",
		label: "Stone"
	}, {
		id: "sage",
		label: "Sage"
	}]
}), bg = z({
	component: dc,
	label: "Open cube bookcase",
	category: "Children",
	defaultRoomType: "bedroom",
	defaultSize: [
		.8,
		1.5,
		.28
	],
	bounds: {
		min: [
			-.4,
			0,
			-.14
		],
		max: [
			.4,
			1.5,
			.14
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 41,
		triangles: 4e3
	}
}), xg = z({
	component: fc,
	label: "Round banded rug",
	category: "Children",
	defaultRoomType: "bedroom",
	defaultSize: [
		1.2,
		.01,
		1.2
	],
	bounds: {
		min: [
			-.6,
			0,
			-.6
		],
		max: [
			.6,
			.01,
			.6
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 4,
		triangles: 600
	}
}), Sg = z({
	component: Ql,
	label: "Astro Parallel wall light",
	category: "Lighting",
	defaultRoomType: "living-room",
	defaultSize: Zl,
	bounds: {
		min: [
			-.16,
			0,
			0
		],
		max: [
			.16,
			.13,
			.11
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "wall",
	outlineContact: !1,
	complexity: {
		visibleMeshes: 1,
		triangles: 450
	}
}), Cg = { "oak-slab-bench": z({
	component: Jf,
	label: "Oak slab bench",
	category: "Entryway",
	defaultRoomType: "entryway",
	defaultSize: qf,
	bounds: {
		min: [
			-.7,
			0,
			-.16
		],
		max: [
			.7,
			.45,
			.16
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !1,
	complexity: {
		visibleMeshes: 20,
		triangles: 8e3
	}
}) }, wg = {
	"abstract-relief-wall-art": z({
		component: kc,
		label: "Abstract relief wall art",
		category: "Decor",
		defaultRoomType: "living-room",
		defaultSize: Oc,
		bounds: {
			min: [
				-.225,
				0,
				0
			],
			max: [
				.225,
				.65,
				.035
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "wall",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 20,
			triangles: 8e3
		},
		variants: [
			{
				id: "black",
				label: "Black"
			},
			{
				id: "ivory",
				label: "Ivory"
			},
			{
				id: "rose",
				label: "Rose"
			}
		]
	}),
	"line-portrait-wall-art": z({
		component: jc,
		label: "Line portrait wall art",
		category: "Decor",
		defaultRoomType: "entryway",
		defaultSize: Ac,
		bounds: {
			min: [
				-.21,
				0,
				0
			],
			max: [
				.21,
				.62,
				.025
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "wall",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 20,
			triangles: 8e3
		},
		variants: [{
			id: "default",
			label: "Portrait"
		}, {
			id: "mirrored",
			label: "Mirrored portrait"
		}]
	})
}, Tg = {
	multicooker: z({
		component: Wm,
		label: "Multicooker",
		category: "Kitchen",
		defaultRoomType: "kitchen",
		defaultSize: Hm,
		bounds: {
			min: [
				-.19,
				0,
				-.1625
			],
			max: [
				.19,
				.34,
				.1625
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 10,
			triangles: 2300
		}
	}),
	"capsule-coffee-machine": z({
		component: Km,
		label: "Capsule coffee machine",
		category: "Kitchen",
		defaultRoomType: "kitchen",
		defaultSize: Gm,
		bounds: {
			min: [
				-.1,
				0,
				-.175
			],
			max: [
				.1,
				.3,
				.175
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 9,
			triangles: 2200
		}
	}),
	"two-slot-toaster": z({
		component: Jm,
		label: "Two slot toaster",
		category: "Kitchen",
		defaultRoomType: "kitchen",
		defaultSize: qm,
		bounds: {
			min: [
				-.14,
				0,
				-.09
			],
			max: [
				.14,
				.19,
				.09
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 6,
			triangles: 2100
		}
	}),
	"stand-mixer": z({
		component: Qm,
		label: "Stand mixer",
		category: "Kitchen",
		defaultRoomType: "kitchen",
		defaultSize: Zm,
		bounds: {
			min: [
				-.14,
				0,
				-.2
			],
			max: [
				.14,
				.4,
				.2
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 6,
			triangles: 2200
		},
		variants: [{
			id: "default",
			label: "Red"
		}, {
			id: "black",
			label: "Black"
		}]
	})
}, Eg = z({
	defaultRoomType: "living-room",
	component: ({ size: e, variant: t }) => /* @__PURE__ */ (0, U.jsx)("group", {
		scale: [
			e[0] / .615,
			e[1] / 1.105,
			e[2] / .44
		],
		children: /* @__PURE__ */ (0, U.jsx)(_c, { ...t === "white" ? {
			potColor: "#eeeae1",
			potOutlineColor: "#a6a399"
		} : {} })
	}),
	label: "Potted plant",
	category: "Decor",
	variants: [{
		id: "default",
		label: "Terracotta pot"
	}, {
		id: "white",
		label: "White pot"
	}],
	defaultSize: [
		.615,
		1.105,
		.44
	],
	bounds: {
		min: [
			-.3075,
			0,
			-.22
		],
		max: [
			.3075,
			1.105,
			.22
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !1,
	complexity: {
		visibleMeshes: 4,
		triangles: 1200
	}
}), Dg = z({
	component: hf,
	label: "Induction cooktop",
	category: "Kitchen",
	defaultRoomType: "kitchen",
	defaultSize: mf,
	bounds: {
		min: [
			-.27,
			0,
			-.24
		],
		max: [
			.27,
			.01,
			.24
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 5,
		triangles: 650
	}
}), Og = z({
	component: Gu,
	label: "White shell dining chair",
	category: "Seating",
	defaultRoomType: "dining-room",
	defaultSize: Wu,
	bounds: {
		min: [
			-.23,
			0,
			-.28
		],
		max: [
			.23,
			.84,
			.26
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !1,
	complexity: {
		visibleMeshes: 3,
		triangles: 1500
	}
}), kg = {
	"mosaic-shower-base": z({
		component: Gh,
		label: "Mosaic shower base",
		category: "Bathroom",
		defaultRoomType: "bathroom",
		variants: [{
			id: "default",
			label: "White"
		}, {
			id: "grey",
			label: "Grey mosaic"
		}],
		defaultSize: Wh,
		bounds: {
			min: [
				-.4,
				0,
				-.49
			],
			max: [
				.4,
				.1,
				.49
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 14,
			triangles: 6600
		}
	}),
	"narrow-black-shower-door": z({
		component: Uh,
		label: "Narrow black shower door",
		category: "Bathroom",
		defaultRoomType: "bathroom",
		defaultSize: Hh,
		bounds: {
			min: [
				-.325,
				0,
				-.0375
			],
			max: [
				.325,
				2,
				.0375
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 11,
			triangles: 500
		},
		variants: [
			{
				id: "inox",
				label: "Inox / left hinge"
			},
			{
				id: "inox-right-hinge",
				label: "Inox / right hinge"
			},
			{
				id: "default",
				label: "Left hinge"
			},
			{
				id: "right-hinge",
				label: "Right hinge"
			}
		]
	}),
	"round-countertop-basin": z({
		component: Lh,
		label: "Round countertop basin",
		category: "Bathroom",
		defaultRoomType: "bathroom",
		defaultSize: Fh,
		bounds: {
			min: [
				-.225,
				0,
				-.225
			],
			max: [
				.225,
				.15,
				.225
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 2,
			triangles: 1e3
		}
	}),
	"empty-rectangular-bathtub": z({
		component: Ch,
		label: "Empty rectangular bathtub",
		category: "Bathroom",
		defaultRoomType: "bathroom",
		defaultSize: yh,
		bounds: {
			min: [
				-.8,
				0,
				-.35
			],
			max: [
				.8,
				.56,
				.35
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 7,
			triangles: 4200
		}
	}),
	"folded-bath-screen": z({
		component: Th,
		label: "Folded bath screen",
		category: "Bathroom",
		defaultRoomType: "bathroom",
		defaultSize: wh,
		bounds: {
			min: [
				-.21,
				0,
				0
			],
			max: [
				.21,
				1.5,
				.055
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 11,
			triangles: 2500
		}
	}),
	"brass-bath-shower-column": z({
		component: Ah,
		label: "Thermostatic bath shower column",
		variants: [{
			id: "default",
			label: "Brass"
		}, {
			id: "black",
			label: "Matte black"
		}],
		category: "Bathroom",
		defaultRoomType: "bathroom",
		defaultSize: Eh,
		bounds: {
			min: [
				-.135,
				0,
				0
			],
			max: [
				.135,
				1.341,
				.38
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "wall",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 9,
			triangles: 2400
		}
	}),
	"toilet-paper-holder": z({
		component: as,
		variants: [
			{
				id: "default",
				label: "Open roll"
			},
			{
				id: "covered",
				label: "Covered roll"
			},
			{
				id: "covered-black",
				label: "Black covered roll"
			}
		],
		label: "Toilet paper holder",
		category: "Bathroom",
		defaultRoomType: "bathroom",
		defaultSize: is,
		bounds: {
			min: [
				-.09,
				0,
				0
			],
			max: [
				.09,
				.12,
				.14
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "wall",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 6,
			triangles: 1800
		}
	}),
	"fixed-shower-panel": z({
		component: ig,
		label: "Fixed shower panel",
		category: "Bathroom",
		defaultRoomType: "bathroom",
		defaultSize: rg,
		bounds: {
			min: [
				-.2,
				0,
				-.0125
			],
			max: [
				.2,
				2,
				.0125
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 3,
			triangles: 100
		}
	}),
	"wall-hung-toilet": z({
		component: fh,
		variants: [{
			id: "default",
			label: "Standard"
		}, {
			id: "black",
			label: "Matte black"
		}],
		label: "Wall hung toilet",
		category: "Bathroom",
		defaultRoomType: "bathroom",
		defaultSize: uh,
		bounds: {
			min: [
				-.2,
				0,
				0
			],
			max: [
				.2,
				.715,
				.56
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "wall",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 8,
			triangles: 3200
		}
	})
}, Ag = {
	"oak-two-drawer-vanity": z({
		component: zh,
		label: "Oak two drawer vanity",
		category: "Bathroom",
		defaultRoomType: "bathroom",
		defaultSize: Rh,
		bounds: {
			min: [
				-.31,
				0,
				-.245
			],
			max: [
				.31,
				.64,
				.245
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 7,
			triangles: 2200
		}
	}),
	"slim-rectangular-mirror": z({
		component: Vh,
		label: "Slim rectangular mirror",
		category: "Bathroom",
		defaultRoomType: "bathroom",
		defaultSize: Bh,
		bounds: {
			min: [
				-.3,
				0,
				0
			],
			max: [
				.3,
				.8,
				.018
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "wall",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 6,
			triangles: 100
		}
	}),
	"two-drawer-basin-vanity": z({
		component: vh,
		label: "Two drawer basin vanity",
		category: "Bathroom",
		defaultRoomType: "bathroom",
		defaultSize: _h,
		bounds: {
			min: [
				-.415,
				0,
				-.245
			],
			max: [
				.415,
				.64,
				.245
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "wall",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 11,
			triangles: 5e3
		}
	}),
	"concealed-mount-shelf": z({
		component: Mh,
		label: "Concealed mount shelf",
		category: "Bathroom",
		defaultRoomType: "bathroom",
		defaultSize: jh,
		bounds: {
			min: [
				-.315,
				0,
				0
			],
			max: [
				.315,
				.03,
				.37
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "wall",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 1,
			triangles: 500
		},
		variants: [
			{
				id: "default",
				label: "Grey"
			},
			{
				id: "white",
				label: "White"
			},
			{
				id: "oak",
				label: "Oak"
			}
		]
	}),
	"tall-two-door-storage": z({
		component: Ph,
		label: "Tall two door storage",
		category: "Bathroom",
		defaultRoomType: "bathroom",
		variants: [{
			id: "default",
			label: "Original finish"
		}, {
			id: "oak",
			label: "Oak / black pulls"
		}],
		defaultSize: Nh,
		bounds: {
			min: [
				-.5,
				0,
				0
			],
			max: [
				.5,
				2.364,
				.425
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "wall",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 9,
			triangles: 3300
		}
	}),
	"compact-two-door-vanity": z({
		component: ih,
		label: "Compact two door vanity",
		category: "Bathroom",
		defaultRoomType: "bathroom",
		defaultSize: rh,
		bounds: {
			min: [
				-.3,
				0,
				-.175
			],
			max: [
				.3,
				.5,
				.175
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "wall",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 9,
			triangles: 3600
		}
	}),
	"thin-arched-mirror": z({
		component: lh,
		label: "Thin arched mirror",
		category: "Bathroom",
		defaultRoomType: "bathroom",
		defaultSize: ah,
		bounds: {
			min: [
				-.25,
				0,
				0
			],
			max: [
				.25,
				.8,
				.018
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "wall",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 2,
			triangles: 850
		},
		variants: [{
			id: "default",
			label: "Black"
		}, {
			id: "brass",
			label: "Brass"
		}]
	}),
	"two-door-mirror-cabinet": z({
		component: eg,
		label: "Two door mirror cabinet",
		category: "Bathroom",
		defaultRoomType: "bathroom",
		defaultSize: $h,
		bounds: {
			min: [
				-.35,
				0,
				0
			],
			max: [
				.35,
				.96,
				.14
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "wall",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 7,
			triangles: 100
		}
	}),
	"two-door-wall-cabinet": z({
		component: gh,
		label: "Two door wall cabinet",
		category: "Bathroom",
		defaultRoomType: "bathroom",
		defaultSize: hh,
		bounds: {
			min: [
				-.425,
				0,
				0
			],
			max: [
				.425,
				1.32,
				.275
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "wall",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 9,
			triangles: 3300
		},
		variants: [
			{
				id: "default",
				label: "Navy"
			},
			{
				id: "white",
				label: "White"
			},
			{
				id: "charcoal",
				label: "Charcoal with black pulls"
			},
			{
				id: "oak",
				label: "Oak / black pulls"
			}
		]
	}),
	"narrow-single-door-vanity": z({
		component: qh,
		label: "Narrow single door vanity",
		category: "Bathroom",
		defaultRoomType: "bathroom",
		defaultSize: Kh,
		bounds: {
			min: [
				-.1675,
				0,
				-.1475
			],
			max: [
				.1675,
				.56,
				.1475
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 8,
			triangles: 3200
		}
	}),
	"thin-oval-mirror": z({
		component: Qh,
		label: "Thin oval mirror",
		category: "Bathroom",
		defaultRoomType: "bathroom",
		defaultSize: Jh,
		bounds: {
			min: [
				-.2,
				0,
				0
			],
			max: [
				.2,
				.7,
				.012
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "wall",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 2,
			triangles: 1400
		}
	})
}, jg = { "tubular-wall-lamp": z({
	component: ng,
	label: "Tubular wall lamp",
	category: "Bathroom",
	defaultRoomType: "bathroom",
	defaultSize: tg,
	bounds: {
		min: [
			-.035,
			0,
			0
		],
		max: [
			.035,
			.32,
			.12
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "wall",
	outlineContact: !1,
	complexity: {
		visibleMeshes: 4,
		triangles: 700
	}
}) }, Mg = z({
	legacyOnly: !0,
	component: yi,
	label: "Rattan bell pendant",
	category: "Lighting",
	defaultRoomType: "dining-room",
	defaultSize: _i,
	bounds: {
		min: [
			-.25,
			0,
			-.25
		],
		max: [
			.25,
			1.2,
			.25
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "ceiling",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 10,
		triangles: 4e4
	}
}), Ng = z({
	component: Xl,
	label: "White display column",
	category: "Storage",
	defaultRoomType: "living-room",
	defaultSize: Yl,
	bounds: {
		min: [
			-.3,
			0,
			-.15
		],
		max: [
			.3,
			2.4,
			.15
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 8,
		triangles: 3500
	}
}), Pg = z({
	component: Dc,
	label: "Trailing shelf plant",
	category: "Decor",
	defaultRoomType: "living-room",
	defaultSize: Ec,
	bounds: {
		min: [
			-.13,
			-.35,
			-.065
		],
		max: [
			.13,
			.22,
			.115
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !1,
	complexity: {
		visibleMeshes: 17,
		triangles: 1800
	}
}), Fg = z({
	component: Tc,
	label: "Decorative globe",
	category: "Decor",
	defaultRoomType: "living-room",
	defaultSize: wc,
	bounds: {
		min: [
			-.139,
			0,
			-.12
		],
		max: [
			.139,
			.339,
			.12
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !1,
	complexity: {
		visibleMeshes: 4,
		triangles: 1500
	}
}), Ig = z({
	component: Cc,
	label: "Ring ceramic vase",
	category: "Decor",
	defaultRoomType: "living-room",
	defaultSize: Sc,
	bounds: {
		min: [
			-.09,
			0,
			-.03
		],
		max: [
			.09,
			.3,
			.03
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !1,
	complexity: {
		visibleMeshes: 5,
		triangles: 1400
	}
}), Lg = z({
	component: Jl,
	label: "Tufted diamond rug",
	category: "Decor",
	defaultRoomType: "living-room",
	defaultSize: ql,
	bounds: {
		min: [
			-1.3,
			0,
			-1
		],
		max: [
			1.3,
			.016,
			1
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !1,
	complexity: {
		visibleMeshes: 57,
		triangles: 2500
	}
}), Rg = z({
	component: Kl,
	label: "White tapered wall sconce",
	category: "Lighting",
	defaultRoomType: "living-room",
	defaultSize: Gl,
	bounds: {
		min: [
			-.09,
			0,
			-.06
		],
		max: [
			.09,
			.23,
			.06
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 2,
		triangles: 500
	}
}), zg = z({
	component: Wl,
	label: "Book row",
	category: "Decor",
	defaultRoomType: "living-room",
	defaultSize: Ul,
	bounds: {
		min: [
			-.2,
			0,
			-.09
		],
		max: [
			.2,
			.28,
			.09
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 10,
		triangles: 150
	}
}), Bg = z({
	component: Hl,
	label: "Six globe ceiling lamp",
	category: "Lighting",
	defaultRoomType: "living-room",
	defaultSize: Vl,
	bounds: {
		min: [
			-.45,
			0,
			-.4031088913
		],
		max: [
			.45,
			.42,
			.4031088913
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "ceiling",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 15,
		triangles: 3600
	}
}), Vg = z({
	component: zl,
	label: "Slim soundbar",
	category: "Media",
	defaultRoomType: "living-room",
	defaultSize: Rl,
	bounds: {
		min: [
			-.525,
			0,
			-.06
		],
		max: [
			.525,
			.065,
			.06
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 2,
		triangles: 900
	}
}), Hg = z({
	component: Ll,
	label: "Media shelf surround",
	category: "Storage",
	defaultRoomType: "living-room",
	defaultSize: Il,
	bounds: {
		min: [
			-1,
			0,
			-.18
		],
		max: [
			1,
			1.73,
			.18
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 6,
		triangles: 2600
	}
}), Ug = z({
	component: Fl,
	label: "Double arched bookcase",
	category: "Storage",
	defaultRoomType: "living-room",
	defaultSize: Pl,
	bounds: {
		min: [
			-.5,
			0,
			-.18
		],
		max: [
			.5,
			1.73,
			.18
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 7,
		triangles: 3200
	}
}), Wg = z({
	component: Ml,
	label: "Six door oak sideboard",
	category: "Storage",
	defaultRoomType: "living-room",
	defaultSize: jl,
	bounds: {
		min: [
			-1.5,
			0,
			-.21
		],
		max: [
			1.5,
			.74,
			.21
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 14,
		triangles: 4e3
	}
}), Gg = z({
	component: Al,
	label: "Hexagonal side table",
	category: "Tables",
	defaultRoomType: "living-room",
	defaultSize: kl,
	bounds: {
		min: [
			-.3,
			0,
			-.25980762115
		],
		max: [
			.3,
			.43,
			.25980762115
		]
	},
	variants: [{
		id: "default",
		label: "White top · Oak body"
	}, {
		id: "oak-top",
		label: "Oak top · White body"
	}],
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 2,
		triangles: 60
	}
}), Kg = z({
	component: Ol,
	label: "Sage rounded footstool",
	category: "Seating",
	defaultRoomType: "living-room",
	defaultSize: Dl,
	bounds: {
		min: [
			-.24,
			0,
			-.23
		],
		max: [
			.24,
			.45,
			.23
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 5,
		triangles: 500
	}
}), qg = z({
	component: El,
	label: "Sage tub armchair",
	category: "Seating",
	defaultRoomType: "living-room",
	defaultSize: Tl,
	bounds: {
		min: [
			-.39,
			0,
			-.4
		],
		max: [
			.39,
			.86,
			.4
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 9,
		triangles: 2300
	}
}), Jg = z({
	component: wl,
	label: "Curved three seat sofa",
	category: "Seating",
	defaultRoomType: "living-room",
	defaultSize: Cl,
	bounds: {
		min: [
			-1.3,
			0,
			-.55
		],
		max: [
			1.3,
			.88,
			.55
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 11,
		triangles: 3800
	}
}), Yg = z({
	component: xd,
	label: "Oak wall uplight",
	category: "Lighting",
	defaultRoomType: "bedroom",
	defaultSize: bd,
	bounds: {
		min: [
			-.06,
			0,
			-.045
		],
		max: [
			.06,
			.25,
			.045
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 3,
		triangles: 1200
	}
}), Xg = z({
	component: yd,
	label: "Wall reading spot",
	category: "Lighting",
	defaultRoomType: "bedroom",
	defaultSize: vd,
	bounds: {
		min: [
			-.045,
			0,
			-.065
		],
		max: [
			.045,
			.12,
			.065
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !1,
	complexity: {
		visibleMeshes: 3,
		triangles: 650
	}
}), Zg = z({
	component: Rd,
	label: "Open laptop",
	category: "Office",
	defaultRoomType: "bedroom",
	defaultSize: [
		.34,
		.24,
		.24
	],
	bounds: {
		min: [
			-.17,
			0,
			-.12
		],
		max: [
			.17,
			.24,
			.12
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !1,
	complexity: {
		visibleMeshes: 5,
		triangles: 2100
	}
}), Qg = z({
	component: _d,
	label: "Round globe wall lamp",
	category: "Lighting",
	defaultRoomType: "bedroom",
	defaultSize: [
		.24,
		.24,
		.16
	],
	bounds: {
		min: [
			-.12,
			0,
			-.08
		],
		max: [
			.12,
			.24,
			.08
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !1,
	complexity: {
		visibleMeshes: 2,
		triangles: 1700
	}
}), $g = z({
	component: ld,
	label: "Knob door wardrobe",
	category: "Storage",
	defaultRoomType: "bedroom",
	variants: [
		{
			id: "default",
			label: "Two doors"
		},
		{
			id: "single-left",
			label: "One door · left knob"
		},
		{
			id: "single-right",
			label: "One door · right knob"
		}
	],
	defaultSize: [
		1,
		2.4,
		.6
	],
	bounds: {
		min: [
			-.5,
			0,
			-.3
		],
		max: [
			.5,
			2.4,
			.3
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 5,
		triangles: 1500
	}
}), e_ = z({
	component: dd,
	label: "Overbed bridge cabinet",
	category: "Storage",
	defaultRoomType: "bedroom",
	defaultSize: [
		2,
		.65,
		.4
	],
	bounds: {
		min: [
			-1,
			0,
			-.2
		],
		max: [
			1,
			.65,
			.2
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 7,
		triangles: 2e3
	}
}), t_ = z({
	component: pd,
	label: "Shelf headboard",
	category: "Bedroom",
	defaultRoomType: "bedroom",
	defaultSize: [
		2,
		1.15,
		.22
	],
	bounds: {
		min: [
			-1,
			0,
			-.11
		],
		max: [
			1,
			1.15,
			.11
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 5,
		triangles: 2200
	}
}), n_ = z({
	component: hd,
	label: "Headboard free double bed",
	category: "Bedroom",
	defaultRoomType: "bedroom",
	defaultSize: [
		1.64,
		.66,
		2.04
	],
	bounds: {
		min: [
			-.82,
			0,
			-1.02
		],
		max: [
			.82,
			.66,
			1.02
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 9,
		triangles: 2300
	}
}), r_ = z({
	component: jd,
	label: "Drawer pedestal desk",
	category: "Office",
	defaultRoomType: "bedroom",
	defaultSize: [
		1.8,
		.75,
		.6
	],
	bounds: {
		min: [
			-.9,
			0,
			-.3
		],
		max: [
			.9,
			.75,
			.3
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 23,
		triangles: 1e4
	}
}), i_ = z({
	component: Pd,
	label: "White folding chair",
	category: "Office",
	defaultRoomType: "bedroom",
	defaultSize: [
		.46,
		.8,
		.52
	],
	bounds: {
		min: [
			-.23,
			0,
			-.26
		],
		max: [
			.23,
			.8,
			.26
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 12,
		triangles: 2400
	}
}), a_ = z({
	component: Id,
	label: "Desktop monitor",
	category: "Office",
	defaultRoomType: "bedroom",
	defaultSize: [
		.54,
		.42,
		.18
	],
	bounds: {
		min: [
			-.27,
			0,
			-.09
		],
		max: [
			.27,
			.42,
			.09
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 4,
		triangles: 1800
	}
}), o_ = z({
	defaultRoomType: "entryway",
	component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
		rotation: [
			0,
			-Math.PI / 2,
			0
		],
		scale: [
			e[2] / .113,
			e[1] / 1.735,
			e[0] / 1.6515
		],
		children: /* @__PURE__ */ (0, U.jsx)(Bf, {})
	}),
	label: "Louvered closet",
	category: "Entrance",
	defaultSize: [
		1.6515,
		1.735,
		.113
	],
	bounds: {
		min: [
			-.82575,
			0,
			-.031
		],
		max: [
			.82575,
			1.735,
			.082
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "wall",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 120,
		triangles: 18e3
	}
}), s_ = z({
	defaultRoomType: "bathroom",
	component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
		scale: [
			e[0] / 1.64,
			e[1] / .782,
			e[2] / .78
		],
		children: /* @__PURE__ */ (0, U.jsx)(Zo, {})
	}),
	label: "Family bathtub",
	category: "Bathroom",
	defaultSize: [
		1.64,
		.782,
		.78
	],
	bounds: {
		min: [
			-.82,
			0,
			-.39
		],
		max: [
			.82,
			.782,
			.39
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !1,
	complexity: {
		visibleMeshes: 18,
		triangles: 4e3
	}
}), c_ = z({
	defaultRoomType: "bathroom",
	component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
		scale: [
			e[0] / .933,
			e[1] / 1.42,
			e[2] / .04
		],
		children: /* @__PURE__ */ (0, U.jsx)(rs, {})
	}),
	label: "Bath screen",
	category: "Bathroom",
	defaultSize: [
		.933,
		1.42,
		.04
	],
	bounds: {
		min: [
			-.46,
			.54,
			-.028
		],
		max: [
			.473,
			1.96,
			.012
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !1,
	complexity: {
		visibleMeshes: 3,
		triangles: 36
	}
}), l_ = z({
	defaultRoomType: "hallway",
	component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
		scale: [
			1,
			e[1] / 2.15,
			e[2] / .474
		],
		children: /* @__PURE__ */ (0, U.jsx)(Kd, { width: e[0] })
	}),
	label: "Cane wardrobe",
	category: "Hallway",
	defaultSize: [
		1.55,
		2.15,
		.474
	],
	bounds: {
		min: [
			-.775,
			0,
			-.19
		],
		max: [
			.775,
			2.15,
			.284
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "wall",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 80,
		triangles: 12e3
	}
}), u_ = z({
	defaultRoomType: "hallway",
	component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
		scale: [
			e[0] / .72,
			e[1] / 2.15,
			e[2] / .403
		],
		children: /* @__PURE__ */ (0, U.jsx)(qd, {})
	}),
	label: "Open hallway shelf",
	category: "Hallway",
	defaultSize: [
		.72,
		2.15,
		.403
	],
	bounds: {
		min: [
			-.36,
			0,
			-.19
		],
		max: [
			.36,
			2.15,
			.213
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "wall",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 24,
		triangles: 4800
	}
}), d_ = z({
	defaultRoomType: "hallway",
	component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
		scale: [
			e[0] / .76,
			e[1] / 1.1,
			e[2] / .09
		],
		children: /* @__PURE__ */ (0, U.jsx)(bc, {})
	}),
	label: "Organic wall mirror",
	category: "Hallway",
	defaultSize: [
		.76,
		1.1,
		.09
	],
	bounds: {
		min: [
			-.38,
			-.55,
			-.035
		],
		max: [
			.38,
			.55,
			.055
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "wall",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 4,
		triangles: 1200
	}
}), f_ = z({
	defaultRoomType: "living-room",
	component: ({ size: e, variant: t, color: n }) => /* @__PURE__ */ (0, U.jsx)("group", {
		scale: [
			e[0] / 2.93,
			e[1] / 1.227,
			e[2] / 1.63
		],
		children: /* @__PURE__ */ (0, U.jsx)(Zc, {
			variant: t,
			color: n
		})
	}),
	variants: [
		{
			id: "default",
			label: "Classic — left chaise (front view)"
		},
		{
			id: "cozy",
			label: "Cozy — left chaise (front view)"
		},
		{
			id: "right",
			label: "Classic — right chaise (front view)"
		},
		{
			id: "cozy-right",
			label: "Cozy — right chaise (front view)"
		}
	],
	label: "Sectional sofa",
	defaultColor: "#e9e4d7",
	category: "Living room",
	defaultSize: [
		2.93,
		1.227,
		1.63
	],
	bounds: {
		min: [
			-1.465,
			0,
			-.42
		],
		max: [
			1.465,
			1.227,
			1.21
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !1,
	complexity: {
		visibleMeshes: 37,
		triangles: 15e3
	}
}), p_ = z({
	defaultRoomType: "dining-room",
	component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
		scale: [
			e[0] / 1.785,
			e[1] / 1.12,
			e[2] / 1.785
		],
		children: /* @__PURE__ */ (0, U.jsx)(Ru, { footprintScale: .88 })
	}),
	label: "Dining set",
	category: "Living room",
	defaultSize: [
		1.785,
		1.12,
		1.785
	],
	bounds: {
		min: [
			-.8925,
			0,
			-.8925
		],
		max: [
			.8925,
			1.12,
			.8925
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !1,
	complexity: {
		visibleMeshes: 26,
		triangles: 65e3
	}
}), m_ = z({
	defaultRoomType: "living-room",
	component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
		rotation: [
			0,
			Math.PI,
			0
		],
		scale: [
			e[0] / 3.35,
			e[1] / 1.378,
			e[2] / .433
		],
		children: /* @__PURE__ */ (0, U.jsx)(el, {})
	}),
	label: "Media wall",
	category: "Living room",
	defaultSize: [
		3.35,
		1.378,
		.433
	],
	bounds: {
		min: [
			-1.155,
			0,
			-.215
		],
		max: [
			2.195,
			1.378,
			.218
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "wall",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 32,
		triangles: 6e3
	}
}), h_ = z({
	defaultRoomType: "living-room",
	component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
		scale: [
			e[0] / .68,
			e[1] / .386,
			e[2] / .612
		],
		children: /* @__PURE__ */ (0, U.jsx)(tl, {})
	}),
	label: "Round coffee table",
	category: "Living room",
	defaultSize: [
		.68,
		.386,
		.612
	],
	bounds: {
		min: [
			-.34,
			-.001,
			-.306
		],
		max: [
			.34,
			.385,
			.306
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !1,
	complexity: {
		visibleMeshes: 8,
		triangles: 2e3
	}
}), g_ = z({
	defaultRoomType: "living-room",
	component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
		scale: [
			e[0] / .901,
			e[1] / 1.643,
			e[2] / .503
		],
		children: /* @__PURE__ */ (0, U.jsx)(xc, {})
	}),
	label: "Tall ficus",
	category: "Living room",
	defaultSize: [
		.901,
		1.643,
		.503
	],
	bounds: {
		min: [
			-.457,
			0,
			-.273
		],
		max: [
			.444,
			1.643,
			.23
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !1,
	complexity: {
		visibleMeshes: 16,
		triangles: 4e3
	}
}), __ = z({
	defaultRoomType: "bedroom",
	component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
		scale: [
			e[0] / 1.32,
			e[1] / 1.52,
			e[2] / .595
		],
		children: /* @__PURE__ */ (0, U.jsx)(sd, {})
	}),
	label: "Dresser with TV",
	category: "Primary suite",
	defaultSize: [
		1.32,
		1.52,
		.595
	],
	bounds: {
		min: [
			-.66,
			0,
			-.275
		],
		max: [
			.66,
			1.52,
			.32
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "wall",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 28,
		triangles: 5e3
	}
}), v_ = z({
	defaultRoomType: "bathroom",
	component: ns,
	label: "Shower assembly",
	category: "Bathroom",
	defaultSize: ts,
	bounds: {
		min: [
			-1,
			0,
			-.445
		],
		max: [
			1.018,
			2.3,
			.463
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !1,
	complexity: {
		visibleMeshes: 20,
		triangles: 4e3
	}
}), y_ = z({
	defaultRoomType: "bathroom",
	component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
		scale: [
			e[0] / .39,
			e[1] / .724,
			e[2] / .6
		],
		children: /* @__PURE__ */ (0, U.jsx)(Ko, {})
	}),
	label: "Compact toilet",
	category: "Primary suite",
	defaultSize: [
		.39,
		.724,
		.6
	],
	bounds: {
		min: [
			-.195,
			.02,
			-.3
		],
		max: [
			.195,
			.744,
			.3
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !1,
	complexity: {
		visibleMeshes: 12,
		triangles: 3e3
	}
}), b_ = z({
	defaultRoomType: "bedroom",
	component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
		scale: [
			e[0] / .81,
			e[1] / .947,
			e[2] / .497
		],
		children: /* @__PURE__ */ (0, U.jsx)(Gs, {})
	}),
	label: "Changing table",
	category: "Children",
	defaultSize: [
		.81,
		.947,
		.497
	],
	bounds: {
		min: [
			-.405,
			-.003,
			-.235
		],
		max: [
			.405,
			.944,
			.262
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !1,
	complexity: {
		visibleMeshes: 28,
		triangles: 5e3
	}
}), x_ = z({
	defaultRoomType: "bedroom",
	component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
		scale: [
			e[0] / .85,
			e[1] / 1.202,
			e[2] / .412
		],
		children: /* @__PURE__ */ (0, U.jsx)($s, {})
	}),
	label: "Cube storage",
	category: "Children",
	defaultSize: [
		.85,
		1.202,
		.412
	],
	bounds: {
		min: [
			-.425,
			0,
			-.17
		],
		max: [
			.425,
			1.202,
			.242
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !1,
	complexity: {
		visibleMeshes: 24,
		triangles: 4500
	}
}), S_ = z({
	defaultRoomType: "bedroom",
	component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
		scale: [
			e[0] / 1.183,
			e[1] / 1.696,
			e[2] / 2.432
		],
		children: /* @__PURE__ */ (0, U.jsx)(Is, {})
	}),
	label: "Cabin bed",
	category: "Children",
	defaultSize: [
		1.183,
		1.696,
		2.432
	],
	bounds: {
		min: [
			-.597,
			0,
			-1.216
		],
		max: [
			.586,
			1.696,
			1.216
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "absolute",
	outlineContact: !1,
	complexity: {
		visibleMeshes: 50,
		triangles: 9e3
	}
}), C_ = z({
	defaultRoomType: "bedroom",
	component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
		scale: [
			e[0] / .325,
			e[1] / .568,
			e[2] / .86
		],
		children: /* @__PURE__ */ (0, U.jsx)(tc, {})
	}),
	label: "Two-tier wall shelves",
	category: "Children",
	defaultSize: [
		.325,
		.568,
		.86
	],
	bounds: {
		min: [
			-.15,
			-.023,
			-.29
		],
		max: [
			.175,
			.545,
			.57
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "wall",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 4,
		triangles: 1e3
	}
}), w_ = z({
	defaultRoomType: "bedroom",
	component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
		scale: [
			e[0] / .77,
			e[1] / .77,
			e[2] / .23
		],
		children: /* @__PURE__ */ (0, U.jsx)(ec, {})
	}),
	label: "Round wall display",
	category: "Children",
	defaultSize: [
		.77,
		.77,
		.23
	],
	bounds: {
		min: [
			-.385,
			-.385,
			-.055
		],
		max: [
			.385,
			.385,
			.175
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "wall",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 4,
		triangles: 1200
	}
}), T_ = z({
	defaultRoomType: "bedroom",
	component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
		scale: [
			e[0] / .3,
			e[1] / .989,
			e[2] / .88
		],
		children: /* @__PURE__ */ (0, U.jsx)(rc, {})
	}),
	label: "Three-tier wall shelves",
	category: "Children",
	defaultSize: [
		.3,
		.989,
		.88
	],
	bounds: {
		min: [
			-.15,
			-.023,
			-.29
		],
		max: [
			.15,
			.966,
			.59
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: [
			"width",
			"height",
			"depth"
		]
	},
	preferredPlacement: "wall",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 18,
		triangles: 3600
	}
}), E_ = {
	...lg,
	"wall-lifting-drying-rack": cg,
	"clip-reading-lamp": sg,
	...ug,
	"children-wall-poster": fg,
	"square-cube-storage": dg,
	"piano-bench": pg,
	"slatted-single-bed": mg,
	"wood-bunk-bed": hg,
	"student-storage-desk": gg,
	"child-swivel-chair": _g,
	"portable-digital-piano": vg,
	"split-door-wardrobe": yg,
	"open-cube-bookcase": bg,
	"round-banded-rug": xg,
	"astro-parallel-wall-light": Sg,
	...Cg,
	...wg,
	...Tg,
	"potted-plant": Eg,
	"induction-cooktop": Dg,
	"white-shell-dining-chair": Og,
	...kg,
	...Ag,
	...jg,
	"rattan-bell-pendant": Mg,
	"white-display-column": Ng,
	"trailing-shelf-plant": Pg,
	"decorative-globe": Fg,
	"ring-ceramic-vase": Ig,
	"tufted-diamond-rug": Lg,
	"white-tapered-wall-sconce": Rg,
	"book-row": zg,
	"six-globe-ceiling-lamp": Bg,
	"slim-soundbar": Vg,
	"media-shelf-surround": Hg,
	"double-arched-bookcase": Ug,
	"six-door-oak-sideboard": Wg,
	"hexagonal-side-table": Gg,
	"sage-rounded-footstool": Kg,
	"sage-tub-armchair": qg,
	"curved-three-seat-sofa": Jg,
	"oak-wall-uplight": Yg,
	"wall-reading-spot": Xg,
	"open-laptop": Zg,
	"round-globe-wall-lamp": Qg,
	"knob-door-wardrobe": $g,
	"overbed-bridge-cabinet": e_,
	"shelf-headboard": t_,
	"headboard-free-double-bed": n_,
	"drawer-pedestal-desk": r_,
	"white-folding-chair": i_,
	"desktop-monitor": a_,
	"louvered-closet": o_,
	"family-bathtub": s_,
	"bath-screen": c_,
	"cane-wardrobe": l_,
	"open-shelf-closet": u_,
	"organic-wall-mirror": d_,
	"sectional-sofa": f_,
	"dining-set": p_,
	"media-wall": m_,
	"round-coffee-table": h_,
	"tall-ficus": g_,
	"dresser-with-tv": __,
	"shower-assembly": v_,
	"compact-toilet": y_,
	"changing-table": b_,
	"cube-storage": x_,
	"cabin-bed": S_,
	"two-tier-wall-shelves": C_,
	"round-wall-display": w_,
	"three-tier-wall-shelves": T_
}, D_ = {
	"table-lamp": z({
		legacyOnly: !0,
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / .32,
				e[1] / .52,
				e[2] / .32
			],
			children: /* @__PURE__ */ (0, U.jsx)(qr, { visualState: "connected-inactive" })
		}),
		label: "Table lamp",
		category: "Lighting",
		defaultRoomType: "bedroom",
		defaultSize: Kr,
		bounds: {
			min: [
				-.16,
				0,
				-.16
			],
			max: [
				.16,
				.52,
				.16
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 4,
			triangles: 2e3
		}
	}),
	"woven-pendant": z({
		legacyOnly: !0,
		defaultRoomType: "dining-room",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / .847,
				e[1] / .58,
				e[2] / .86
			],
			children: /* @__PURE__ */ (0, U.jsx)(Jr, {})
		}),
		label: "Woven pendant",
		category: "Lighting",
		defaultSize: [
			.847,
			.58,
			.86
		],
		bounds: {
			min: [
				-.4235,
				-.58,
				-.43
			],
			max: [
				.4235,
				0,
				.43
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "ceiling",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 22,
			triangles: 5800
		}
	}),
	"children-pendant": z({
		legacyOnly: !0,
		defaultRoomType: "bedroom",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / .58,
				e[1] / .479,
				e[2] / .58
			],
			children: /* @__PURE__ */ (0, U.jsx)(Zr, {})
		}),
		label: "Children's pendant",
		category: "Children",
		defaultSize: [
			.58,
			.479,
			.58
		],
		bounds: {
			min: [
				-.29,
				-.479,
				-.29
			],
			max: [
				.29,
				0,
				.29
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "ceiling",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 40,
			triangles: 8e3
		}
	})
}, O_ = {
	"drying-rack": z({
		component: km,
		label: "Drying rack",
		category: "Household",
		defaultRoomType: "laundry",
		defaultSize: Om,
		bounds: {
			min: [
				-.6,
				0,
				-.3
			],
			max: [
				.6,
				.95,
				.3
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 20,
			triangles: 8e3
		}
	}),
	"ironing-board": z({
		component: jm,
		label: "Ironing board",
		category: "Household",
		defaultRoomType: "laundry",
		defaultSize: Am,
		bounds: {
			min: [
				-.6,
				0,
				-.2
			],
			max: [
				.6,
				.9,
				.2
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 8,
			triangles: 3500
		}
	}),
	"two-step-stool": z({
		component: yf,
		label: "Two step stool",
		category: "Household",
		defaultRoomType: "kitchen",
		defaultSize: vf,
		bounds: {
			min: [
				-.225,
				0,
				-.25
			],
			max: [
				.225,
				.45,
				.25
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 8,
			triangles: 3500
		}
	}),
	"utility-shelving": z({
		component: Yd,
		label: "Utility shelving",
		category: "Storage",
		defaultRoomType: "laundry",
		defaultSize: Jd,
		bounds: {
			min: [
				-.45,
				0,
				-.225
			],
			max: [
				.45,
				1.8,
				.225
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 9,
			triangles: 4e3
		}
	}),
	workbench: z({
		component: Zd,
		label: "Workbench",
		category: "Storage",
		defaultRoomType: "laundry",
		defaultSize: Xd,
		bounds: {
			min: [
				-.75,
				0,
				-.325
			],
			max: [
				.75,
				.9,
				.325
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 6,
			triangles: 2500
		}
	}),
	toolbox: z({
		component: $d,
		label: "Toolbox",
		category: "Storage",
		defaultRoomType: "laundry",
		defaultSize: Qd,
		bounds: {
			min: [
				-.225,
				0,
				-.12
			],
			max: [
				.225,
				.3,
				.12
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 7,
			triangles: 3e3
		}
	}),
	"shoe-cabinet": z({
		component: Hf,
		label: "Shoe cabinet",
		category: "Storage",
		defaultRoomType: "entryway",
		defaultSize: Vf,
		bounds: {
			min: [
				-.4,
				0,
				-.15
			],
			max: [
				.4,
				1.1,
				.15
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 11,
			triangles: 4500
		}
	}),
	"umbrella-stand": z({
		component: Wf,
		label: "Umbrella stand",
		category: "Storage",
		defaultRoomType: "entryway",
		defaultSize: Uf,
		bounds: {
			min: [
				-.14,
				0,
				-.14
			],
			max: [
				.14,
				.55,
				.14
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 17,
			triangles: 7e3
		}
	}),
	"freestanding-coat-stand": z({
		component: Kf,
		label: "Freestanding coat stand",
		category: "Storage",
		defaultRoomType: "entryway",
		defaultSize: Gf,
		bounds: {
			min: [
				-.25,
				0,
				-.25
			],
			max: [
				.25,
				1.75,
				.25
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 12,
			triangles: 5e3
		}
	}),
	"laundry-carry-basket": z({
		component: Nm,
		label: "Laundry carry basket",
		category: "Household",
		defaultRoomType: "laundry",
		defaultSize: Mm,
		bounds: {
			min: [
				-.3,
				0,
				-.2
			],
			max: [
				.3,
				.35,
				.2
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 41,
			triangles: 16500
		}
	}),
	"kitchen-trolley": z({
		component: xf,
		label: "Kitchen trolley",
		category: "Household",
		defaultRoomType: "kitchen",
		defaultSize: bf,
		bounds: {
			min: [
				-.35,
				0,
				-.225
			],
			max: [
				.35,
				.9,
				.225
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 15,
			triangles: 5e3
		}
	}),
	"bread-bin": z({
		component: Cf,
		label: "Bread bin",
		category: "Household",
		defaultRoomType: "kitchen",
		defaultSize: Sf,
		bounds: {
			min: [
				-.2,
				0,
				-.125
			],
			max: [
				.2,
				.25,
				.125
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 3,
			triangles: 1500
		}
	}),
	"dish-drying-rack": z({
		component: Tf,
		label: "Dish drying rack",
		category: "Household",
		defaultRoomType: "kitchen",
		defaultSize: wf,
		bounds: {
			min: [
				-.225,
				0,
				-.16
			],
			max: [
				.225,
				.15,
				.16
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 27,
			triangles: 11e3
		}
	}),
	"medicine-cabinet": z({
		component: ss,
		label: "Medicine cabinet",
		category: "Bathroom",
		defaultRoomType: "bathroom",
		defaultSize: os,
		bounds: {
			min: [
				-.25,
				0,
				0
			],
			max: [
				.25,
				.65,
				.16
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "wall",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 8,
			triangles: 3500
		}
	}),
	"two-seat-loveseat": z({
		component: rl,
		label: "Two seat loveseat",
		category: "Seating",
		defaultRoomType: "living-room",
		defaultSize: nl,
		bounds: {
			min: [
				-.8,
				0,
				-.44
			],
			max: [
				.8,
				.82,
				.44
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 12,
			triangles: 6e3
		}
	}),
	"indoor-chaise-longue": z({
		component: al,
		label: "Indoor chaise longue",
		category: "Seating",
		defaultRoomType: "living-room",
		defaultSize: il,
		bounds: {
			min: [
				-.4,
				0,
				-.825
			],
			max: [
				.4,
				.8,
				.825
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 7,
			triangles: 3500
		}
	}),
	"pedestal-side-table": z({
		component: sl,
		label: "Pedestal side table",
		category: "Tables",
		defaultRoomType: "living-room",
		defaultSize: ol,
		bounds: {
			min: [
				-.25,
				0,
				-.25
			],
			max: [
				.25,
				.55,
				.25
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 3,
			triangles: 450
		}
	}),
	"c-shaped-sofa-table": z({
		component: ll,
		label: "C shaped sofa table",
		category: "Tables",
		defaultRoomType: "living-room",
		defaultSize: cl,
		bounds: {
			min: [
				-.2,
				0,
				-.225
			],
			max: [
				.2,
				.62,
				.225
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 4,
			triangles: 2e3
		}
	}),
	"blanket-storage-trunk": z({
		component: dl,
		label: "Blanket storage trunk",
		category: "Storage",
		defaultRoomType: "living-room",
		defaultSize: ul,
		bounds: {
			min: [
				-.475,
				0,
				-.24
			],
			max: [
				.475,
				.46,
				.24
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 7,
			triangles: 3500
		}
	}),
	"floor-magazine-rack": z({
		component: pl,
		label: "Floor magazine rack",
		category: "Storage",
		defaultRoomType: "living-room",
		defaultSize: fl,
		bounds: {
			min: [
				-.21,
				0,
				-.15
			],
			max: [
				.21,
				.45,
				.15
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 6,
			triangles: 3e3
		}
	}),
	"vinyl-record-cabinet": z({
		component: hl,
		label: "Vinyl record cabinet",
		category: "Storage",
		defaultRoomType: "living-room",
		defaultSize: ml,
		bounds: {
			min: [
				-.45,
				0,
				-.2
			],
			max: [
				.45,
				.7,
				.2
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 12,
			triangles: 6e3
		}
	}),
	"open-display-bookcase": z({
		component: _l,
		label: "Open display bookcase",
		category: "Storage",
		defaultRoomType: "living-room",
		defaultSize: gl,
		bounds: {
			min: [
				-.5,
				0,
				-.175
			],
			max: [
				.5,
				1.6,
				.175
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 11,
			triangles: 5500
		}
	}),
	"two-tier-bar-cart": z({
		component: yl,
		label: "Two tier bar cart",
		category: "Tables",
		defaultRoomType: "living-room",
		defaultSize: vl,
		bounds: {
			min: [
				-.35,
				0,
				-.21
			],
			max: [
				.35,
				.8,
				.21
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 17,
			triangles: 7100
		}
	}),
	"slatted-room-divider": z({
		component: xl,
		label: "Slatted room divider",
		category: "Decor",
		defaultRoomType: "living-room",
		defaultSize: bl,
		bounds: {
			min: [
				-.6,
				0,
				-.2
			],
			max: [
				.6,
				1.8,
				.2
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 16,
			triangles: 8e3
		}
	}),
	...E_,
	"outdoor-dining-table": z({
		component: Gp,
		label: "Outdoor dining table",
		category: "Tables",
		defaultRoomType: "outdoor",
		defaultSize: Wp,
		bounds: {
			min: [
				-.8,
				0,
				-.45
			],
			max: [
				.8,
				.75,
				.45
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		placementEnvironment: "outdoor",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 11,
			triangles: 4800
		}
	}),
	"outdoor-dining-chair": z({
		component: qp,
		label: "Outdoor dining chair",
		category: "Seating",
		defaultRoomType: "outdoor",
		defaultSize: Kp,
		bounds: {
			min: [
				-.28,
				0,
				-.29
			],
			max: [
				.28,
				.85,
				.29
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		placementEnvironment: "outdoor",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 17,
			triangles: 7500
		}
	}),
	"garden-bench": z({
		component: Yp,
		label: "Garden bench",
		category: "Seating",
		defaultRoomType: "outdoor",
		defaultSize: Jp,
		bounds: {
			min: [
				-.75,
				0,
				-.3
			],
			max: [
				.75,
				.9,
				.3
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		placementEnvironment: "outdoor",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 18,
			triangles: 7900
		}
	}),
	"outdoor-side-table": z({
		component: Zp,
		label: "Outdoor side table",
		category: "Tables",
		defaultRoomType: "outdoor",
		defaultSize: Xp,
		bounds: {
			min: [
				-.25,
				0,
				-.25
			],
			max: [
				.25,
				.45,
				.25
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		placementEnvironment: "outdoor",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 3,
			triangles: 400
		}
	}),
	"patio-parasol": z({
		component: $p,
		label: "Patio parasol",
		category: "Garden structures",
		defaultRoomType: "outdoor",
		defaultSize: Qp,
		bounds: {
			min: [
				-1.2,
				0,
				-1.2
			],
			max: [
				1.2,
				2.5,
				1.2
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		placementEnvironment: "outdoor",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 4,
			triangles: 500
		}
	}),
	"terracotta-planter": z({
		component: nm,
		label: "Terracotta planter",
		category: "Vegetation",
		defaultRoomType: "outdoor",
		defaultSize: tm,
		bounds: {
			min: [
				-.25,
				0,
				-.25
			],
			max: [
				.25,
				.5,
				.25
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		placementEnvironment: "outdoor",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 1,
			triangles: 400
		}
	}),
	"raised-garden-bed": z({
		component: im,
		label: "Raised garden bed",
		category: "Garden structures",
		defaultRoomType: "outdoor",
		defaultSize: rm,
		bounds: {
			min: [
				-.6,
				0,
				-.4
			],
			max: [
				.6,
				.4,
				.4
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		placementEnvironment: "outdoor",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 5,
			triangles: 2200
		}
	}),
	"outdoor-storage-box": z({
		component: om,
		label: "Outdoor storage box",
		category: "Storage",
		defaultRoomType: "outdoor",
		defaultSize: am,
		bounds: {
			min: [
				-.6,
				0,
				-.275
			],
			max: [
				.6,
				.6,
				.275
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		placementEnvironment: "outdoor",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 6,
			triangles: 2700
		}
	}),
	"garden-hose-reel": z({
		component: cm,
		label: "Garden hose reel",
		category: "Garden tools",
		defaultRoomType: "outdoor",
		defaultSize: sm,
		bounds: {
			min: [
				-.24,
				0,
				-.21
			],
			max: [
				.24,
				.6,
				.21
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		placementEnvironment: "outdoor",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 15,
			triangles: 5500
		}
	}),
	"watering-can": z({
		component: um,
		label: "Watering can",
		category: "Garden tools",
		defaultRoomType: "outdoor",
		defaultSize: lm,
		bounds: {
			min: [
				-.27,
				0,
				-.11
			],
			max: [
				.27,
				.36,
				.11
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		placementEnvironment: "outdoor",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 5,
			triangles: 1500
		}
	}),
	"garden-birdbath": z({
		component: fm,
		label: "Garden birdbath",
		category: "Decor",
		defaultRoomType: "outdoor",
		defaultSize: dm,
		bounds: {
			min: [
				-.3,
				0,
				-.3
			],
			max: [
				.3,
				.8,
				.3
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		placementEnvironment: "outdoor",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 3,
			triangles: 600
		}
	}),
	"outdoor-fire-pit": z({
		component: mm,
		label: "Outdoor fire pit",
		category: "Garden structures",
		defaultRoomType: "outdoor",
		defaultSize: pm,
		bounds: {
			min: [
				-.4,
				0,
				-.4
			],
			max: [
				.4,
				.4,
				.4
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		placementEnvironment: "outdoor",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 4,
			triangles: 1700
		}
	}),
	"garden-compost-bin": z({
		component: gm,
		label: "Garden compost bin",
		category: "Garden tools",
		defaultRoomType: "outdoor",
		defaultSize: hm,
		bounds: {
			min: [
				-.4,
				0,
				-.4
			],
			max: [
				.4,
				1,
				.4
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		placementEnvironment: "outdoor",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 7,
			triangles: 3100
		}
	}),
	"wheelie-bin": z({
		component: vm,
		label: "Wheelie bin",
		category: "Garden tools",
		defaultRoomType: "outdoor",
		defaultSize: _m,
		bounds: {
			min: [
				-.29,
				0,
				-.32
			],
			max: [
				.29,
				1.05,
				.32
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		placementEnvironment: "outdoor",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 6,
			triangles: 2e3
		}
	}),
	"garden-trellis": z({
		component: bm,
		label: "Garden trellis",
		category: "Garden structures",
		defaultRoomType: "outdoor",
		defaultSize: ym,
		bounds: {
			min: [
				-.45,
				0,
				-.06
			],
			max: [
				.45,
				1.8,
				.06
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		placementEnvironment: "outdoor",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 16,
			triangles: 7e3
		}
	}),
	...D_,
	"three-seat-sofa": z({
		component: Fc,
		label: "3-seat sofa",
		defaultColor: "#e2d5bf",
		category: "Seating",
		defaultRoomType: "living-room",
		defaultSize: Pc,
		bounds: {
			min: [
				-1.1,
				0,
				-.47
			],
			max: [
				1.1,
				.84,
				.47
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 21,
			triangles: 1e4
		}
	}),
	"rectangular-dining-table": z({
		component: eu,
		label: "Rectangular dining table",
		category: "Tables",
		defaultRoomType: "dining-room",
		variants: [{
			id: "default",
			label: "Oak"
		}, {
			id: "pale-stone",
			label: "Pale stone"
		}],
		defaultSize: $l,
		bounds: {
			min: [
				-.9,
				0,
				-.45
			],
			max: [
				.9,
				.75,
				.45
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 9,
			triangles: 700
		}
	}),
	"oak-dining-chair": z({
		component: ru,
		label: "Oak dining chair",
		category: "Seating",
		defaultRoomType: "dining-room",
		defaultSize: nu,
		bounds: {
			min: [
				-.245,
				0,
				-.25
			],
			max: [
				.245,
				.82,
				.25
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 9,
			triangles: 1600
		}
	}),
	"oak-nightstand": z({
		component: qu,
		label: "Small oak nightstand",
		category: "Storage",
		defaultRoomType: "bedroom",
		defaultSize: Ku,
		bounds: {
			min: [
				-.225,
				0,
				-.2
			],
			max: [
				.225,
				.5,
				.2
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 12,
			triangles: 4e3
		}
	}),
	"flat-door-wardrobe": z({
		component: Yu,
		label: "Flat-door wardrobe",
		category: "Storage",
		defaultRoomType: "bedroom",
		defaultSize: Ju,
		bounds: {
			min: [
				-1,
				0,
				-.3
			],
			max: [
				1,
				2.2,
				.3
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 10,
			triangles: 5e3
		}
	}),
	"oak-desk": z({
		component: Ed,
		label: "Oak desk",
		category: "Tables",
		defaultRoomType: "office",
		defaultSize: Td,
		bounds: {
			min: [
				-.7,
				0,
				-.35
			],
			max: [
				.7,
				.74,
				.35
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 9,
			triangles: 700
		}
	}),
	"ergonomic-office-chair": z({
		component: kd,
		label: "Ergonomic office chair",
		category: "Seating",
		defaultRoomType: "office",
		defaultSize: Od,
		bounds: {
			min: [
				-.34,
				0,
				-.34
			],
			max: [
				.34,
				1.04,
				.34
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 35,
			triangles: 7e3
		}
	}),
	"oak-bookshelf": z({
		component: Bd,
		label: "Oak bookshelf",
		category: "Storage",
		defaultRoomType: "office",
		defaultSize: zd,
		bounds: {
			min: [
				-.4,
				0,
				-.15
			],
			max: [
				.4,
				1.9,
				.15
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 10,
			triangles: 5e3
		}
	}),
	"single-bed": z({
		component: Zu,
		label: "Single bed · 90 × 200",
		category: "Beds",
		defaultRoomType: "bedroom",
		defaultSize: Xu,
		bounds: {
			min: [
				-.5,
				0,
				-1.05
			],
			max: [
				.5,
				.95,
				1.05
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 11,
			triangles: 4e3
		}
	}),
	"double-bed": z({
		component: nd,
		label: "Double bed · 160 × 200",
		category: "Beds",
		defaultRoomType: "bedroom",
		variants: [{
			id: "default",
			label: "Classic"
		}, {
			id: "cozy-white-blue",
			label: "Cozy white a blue"
		}],
		defaultSize: td,
		bounds: {
			min: [
				-.85,
				0,
				-1.075
			],
			max: [
				.85,
				1.1,
				1.075
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 20,
			triangles: 15500
		}
	}),
	"oak-floating-shelf": z({
		component: id,
		label: "Oak floating shelf",
		category: "Storage",
		defaultRoomType: "bedroom",
		defaultSize: rd,
		bounds: {
			min: [
				-.55,
				0,
				0
			],
			max: [
				.55,
				.035,
				.24
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "wall",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 1,
			triangles: 400
		}
	}),
	"rectangular-coffee-table": z({
		component: Lc,
		label: "Rectangular coffee table",
		category: "Tables",
		defaultRoomType: "living-room",
		defaultSize: Ic,
		bounds: {
			min: [
				-.55,
				0,
				-.3
			],
			max: [
				.55,
				.4,
				.3
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 6,
			triangles: 2e3
		}
	}),
	"upholstered-armchair": z({
		component: zc,
		label: "Upholstered armchair",
		category: "Seating",
		defaultRoomType: "living-room",
		defaultSize: Rc,
		bounds: {
			min: [
				-.425,
				0,
				-.44
			],
			max: [
				.425,
				.9,
				.44
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 10,
			triangles: 4e3
		}
	}),
	"chest-of-drawers": z({
		component: od,
		label: "Chest of drawers",
		category: "Storage",
		defaultRoomType: "bedroom",
		defaultSize: ad,
		bounds: {
			min: [
				-.5,
				0,
				-.225
			],
			max: [
				.5,
				.9,
				.225
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 11,
			triangles: 4e3
		}
	}),
	"neutral-area-rug": z({
		component: Kc,
		label: "Rug",
		category: "Decor",
		defaultRoomType: "living-room",
		variants: [
			{
				id: "default",
				label: "Natural woven"
			},
			{
				id: "terracotta",
				label: "Terracotta"
			},
			{
				id: "sage",
				label: "Sage"
			},
			{
				id: "ocean",
				label: "Ocean blue"
			},
			{
				id: "playful",
				label: "Playful colors"
			},
			{
				id: "jute",
				label: "Jute rug"
			},
			{
				id: "sisal",
				label: "Sisal"
			},
			{
				id: "persian",
				label: "Persian"
			},
			{
				id: "kilim",
				label: "Kilim"
			},
			{
				id: "moroccan",
				label: "Moroccan"
			},
			{
				id: "shag",
				label: "Shag"
			},
			{
				id: "braided",
				label: "Braided"
			},
			{
				id: "striped",
				label: "Striped"
			},
			{
				id: "checkered",
				label: "Checkered"
			},
			{
				id: "scandinavian",
				label: "Scandinavian"
			},
			{
				id: "fluffy",
				label: "Fluffy white"
			}
		],
		defaultSize: Hc,
		bounds: {
			min: [
				-1,
				0,
				-1.5
			],
			max: [
				1,
				.015,
				1.5
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 68,
			triangles: 2e4
		}
	}),
	"low-media-console": z({
		component: Jc,
		label: "Low media console",
		category: "Storage",
		defaultRoomType: "living-room",
		defaultSize: qc,
		bounds: {
			min: [
				-.8,
				0,
				-.21
			],
			max: [
				.8,
				.55,
				.21
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 10,
			triangles: 4e3
		}
	}),
	"three-door-sideboard": z({
		component: au,
		label: "Three-door sideboard",
		category: "Storage",
		defaultRoomType: "dining-room",
		defaultSize: iu,
		bounds: {
			min: [
				-.8,
				0,
				-.225
			],
			max: [
				.8,
				.82,
				.225
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 12,
			triangles: 4e3
		}
	}),
	"kitchen-base-cabinet": z({
		variants: Bn,
		component: nf,
		label: "Kitchen base cabinet",
		category: "Kitchen",
		defaultRoomType: "kitchen",
		defaultSize: tf,
		bounds: {
			min: [
				-.3,
				0,
				-.315
			],
			max: [
				.3,
				.9,
				.315
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 9,
			triangles: 3500
		}
	}),
	"kitchen-sink-cabinet": z({
		variants: Bn,
		component: af,
		label: "Kitchen sink cabinet",
		category: "Kitchen",
		defaultRoomType: "kitchen",
		defaultSize: rf,
		bounds: {
			min: [
				-.3,
				0,
				-.315
			],
			max: [
				.3,
				1.12,
				.315
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 12,
			triangles: 4500
		}
	}),
	"kitchen-wall-cabinet": z({
		variants: Bn,
		component: sf,
		label: "Kitchen wall cabinet",
		category: "Kitchen",
		defaultRoomType: "kitchen",
		defaultSize: of,
		bounds: {
			min: [
				-.3,
				0,
				0
			],
			max: [
				.3,
				.8,
				.35
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "wall",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 6,
			triangles: 3e3
		}
	}),
	"freestanding-bathtub": z({
		component: Go,
		label: "Freestanding bathtub",
		category: "Bathroom",
		defaultRoomType: "bathroom",
		defaultSize: Wo,
		bounds: {
			min: [
				-.85,
				0,
				-.39
			],
			max: [
				.85,
				.6,
				.39
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 8,
			triangles: 4500
		}
	}),
	"dark-oak-vessel-vanity": z({
		component: jo,
		label: "Dark oak vessel vanity · 80 cm",
		category: "Bathroom",
		defaultRoomType: "bathroom",
		defaultSize: Ao,
		bounds: {
			min: [
				-.4,
				0,
				-.26
			],
			max: [
				.4,
				1.23,
				.26
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 16,
			triangles: 3500
		}
	}),
	"white-corner-wardrobe": z({
		component: Hd,
		label: "White corner wardrobe · 180 cm",
		category: "Storage",
		defaultRoomType: "bedroom",
		defaultSize: Vd,
		bounds: {
			min: [
				-.9,
				0,
				-.6
			],
			max: [
				.9,
				2.35,
				.6
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 14,
			triangles: 2500
		}
	}),
	"entryway-shoe-bench": z({
		component: Df,
		label: "Entryway shoe bench",
		category: "Entryway",
		defaultRoomType: "entryway",
		defaultSize: Ef,
		bounds: {
			min: [
				-.5,
				0,
				-.19
			],
			max: [
				.5,
				.5,
				.19
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 10,
			triangles: 3e3
		}
	}),
	"wall-coat-rack": z({
		component: kf,
		label: "Wall coat rack",
		category: "Entryway",
		defaultRoomType: "entryway",
		defaultSize: Of,
		bounds: {
			min: [
				-.4,
				0,
				0
			],
			max: [
				.4,
				.32,
				.22
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "wall",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 12,
			triangles: 4e3
		}
	}),
	"hallway-console-table": z({
		component: Xf,
		label: "Hallway console table",
		category: "Tables",
		defaultRoomType: "hallway",
		defaultSize: Yf,
		bounds: {
			min: [
				-.55,
				0,
				-.175
			],
			max: [
				.55,
				.8,
				.175
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 10,
			triangles: 3500
		}
	}),
	"floating-wall-shelf": z({
		component: Qf,
		label: "Floating wall shelf",
		category: "Storage",
		defaultRoomType: "hallway",
		defaultSize: Zf,
		bounds: {
			min: [
				-.4,
				0,
				0
			],
			max: [
				.4,
				.22,
				.25
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "wall",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 6,
			triangles: 2500
		}
	}),
	"framed-wall-art": z({
		component: yc,
		label: "Framed wall art",
		category: "Decor",
		defaultRoomType: "living-room",
		defaultSize: vc,
		bounds: {
			min: [
				-.4,
				0,
				0
			],
			max: [
				.4,
				.6,
				.04
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "wall",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 5,
			triangles: 2500
		}
	}),
	"wooden-crib": z({
		component: Ts,
		label: "Wooden crib · 70 × 140",
		category: "Children",
		defaultRoomType: "bedroom",
		defaultSize: ws,
		bounds: {
			min: [
				-.38,
				0,
				-.73
			],
			max: [
				.38,
				.95,
				.73
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 24,
			triangles: 6e3
		}
	}),
	"counter-stool": z({
		component: lf,
		label: "Counter stool",
		category: "Seating",
		defaultRoomType: "kitchen",
		defaultSize: cf,
		bounds: {
			min: [
				-.24,
				0,
				-.25
			],
			max: [
				.24,
				.92,
				.25
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 10,
			triangles: 3500
		}
	}),
	"upholstered-ottoman": z({
		component: Xc,
		label: "Upholstered ottoman",
		category: "Seating",
		defaultRoomType: "living-room",
		defaultSize: Yc,
		bounds: {
			min: [
				-.35,
				0,
				-.275
			],
			max: [
				.35,
				.42,
				.275
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 7,
			triangles: 3e3
		}
	}),
	"arched-mirror": z({
		defaultRoomType: "bathroom",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / .54,
				e[1] / 1.05,
				e[2] / .06
			],
			children: /* @__PURE__ */ (0, U.jsx)(ko, {})
		}),
		label: "Arched mirror",
		category: "Bathroom",
		defaultSize: [
			.54,
			1.05,
			.06
		],
		bounds: {
			min: [
				-.27,
				0,
				-.03
			],
			max: [
				.27,
				1.05,
				.03
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "wall",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 5,
			triangles: 1200
		}
	}),
	"concealed-cistern-toilet": z({
		defaultRoomType: "bathroom",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / .728,
				e[1] / 1.16,
				e[2] / .58
			],
			children: /* @__PURE__ */ (0, U.jsx)(Fo, {})
		}),
		label: "Concealed-cistern toilet",
		category: "Bathroom",
		defaultSize: [
			.728,
			1.16,
			.58
		],
		bounds: {
			min: [
				-.01,
				0,
				-.29
			],
			max: [
				.718,
				1.16,
				.29
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 12,
			triangles: 3600
		}
	}),
	"towel-rail": z({
		defaultRoomType: "bathroom",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			rotation: [
				0,
				-Math.PI / 2,
				0
			],
			scale: [
				e[2] / .098,
				e[1] / .507,
				e[0] / .62
			],
			children: /* @__PURE__ */ (0, U.jsx)(Io, {})
		}),
		label: "Towel rail",
		category: "Bathroom",
		defaultSize: [
			.62,
			.507,
			.098
		],
		bounds: {
			min: [
				-.31,
				-.49,
				0
			],
			max: [
				.31,
				.017,
				.098
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "wall",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 6,
			triangles: 1400
		}
	}),
	"vanity-accessories": z({
		defaultRoomType: "bathroom",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / .136,
				e[1] / .31,
				e[2] / .4
			],
			children: /* @__PURE__ */ (0, U.jsx)(Lo, {})
		}),
		label: "Vanity accessories",
		category: "Bathroom",
		defaultSize: [
			.136,
			.31,
			.4
		],
		bounds: {
			min: [
				-.068,
				0,
				-.2
			],
			max: [
				.068,
				.31,
				.2
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 10,
			triangles: 2400
		}
	}),
	"vessel-sink-faucet": z({
		defaultRoomType: "bathroom",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / .48,
				e[1] / .36,
				e[2] / .48
			],
			children: /* @__PURE__ */ (0, U.jsx)(Ro, {})
		}),
		label: "Vessel sink and faucet",
		category: "Bathroom",
		defaultSize: [
			.48,
			.36,
			.48
		],
		bounds: {
			min: [
				-.24,
				0,
				-.24
			],
			max: [
				.24,
				.36,
				.24
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 8,
			triangles: 2200
		}
	}),
	"wicker-hamper": z({
		defaultRoomType: "laundry",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / .48,
				e[1] / .593,
				e[2] / .46
			],
			children: /* @__PURE__ */ (0, U.jsx)(zo, {})
		}),
		label: "Wicker hamper",
		category: "Bathroom",
		defaultSize: [
			.48,
			.593,
			.46
		],
		bounds: {
			min: [
				-.24,
				0,
				-.23
			],
			max: [
				.24,
				.593,
				.23
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 12,
			triangles: 3200
		}
	}),
	"wicker-towel-basket": z({
		defaultRoomType: "bathroom",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / .38,
				e[1] / .315,
				e[2] / .31
			],
			children: /* @__PURE__ */ (0, U.jsx)(Bo, {})
		}),
		label: "Wicker towel basket",
		category: "Bathroom",
		defaultSize: [
			.38,
			.315,
			.31
		],
		bounds: {
			min: [
				-.19,
				0,
				-.15
			],
			max: [
				.19,
				.315,
				.16
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 12,
			triangles: 3200
		}
	}),
	"wooden-vanity": z({
		defaultRoomType: "bathroom",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			rotation: [
				0,
				Math.PI / 2,
				0
			],
			scale: [
				e[2] / .556,
				e[1] / .805,
				e[0] / 2.18
			],
			children: /* @__PURE__ */ (0, U.jsx)(Uo, {})
		}),
		label: "Wooden vanity",
		category: "Bathroom",
		defaultSize: [
			2.18,
			.805,
			.556
		],
		bounds: {
			min: [
				-1.09,
				0,
				-.26
			],
			max: [
				1.09,
				.805,
				.296
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "wall",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 18,
			triangles: 4800
		}
	}),
	"single-window-curtain": og,
	"children-curtains": ag,
	"children-floor-basket": z({
		defaultRoomType: "bedroom",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / .68,
				e[1] / .512,
				e[2] / .68
			],
			children: /* @__PURE__ */ (0, U.jsx)(Cs, {})
		}),
		label: "Children's floor basket",
		category: "Children",
		defaultSize: [
			.68,
			.512,
			.68
		],
		bounds: {
			min: [
				-.34,
				0,
				-.34
			],
			max: [
				.34,
				.512,
				.34
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 18,
			triangles: 4200
		}
	}),
	"children-toy-shelf": z({
		defaultRoomType: "bedroom",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / .505,
				e[1] / 1.065,
				e[2] / .285
			],
			children: /* @__PURE__ */ (0, U.jsx)(ps, {})
		}),
		label: "Children's toy shelf",
		category: "Children",
		defaultSize: [
			.505,
			1.065,
			.285
		],
		bounds: {
			min: [
				-.2525,
				0,
				-.14
			],
			max: [
				.2525,
				1.065,
				.145
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 30,
			triangles: 6e3
		}
	}),
	"children-table-set": z({
		defaultRoomType: "bedroom",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / 1.08,
				e[1] / .838,
				e[2] / 1.12
			],
			children: /* @__PURE__ */ (0, U.jsx)(vs, {})
		}),
		label: "Toddler table set",
		category: "Children",
		defaultSize: [
			1.08,
			.838,
			1.12
		],
		bounds: {
			min: [
				-.72,
				-.001,
				-.36
			],
			max: [
				.36,
				.837,
				.76
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 20,
			triangles: 4e3
		}
	}),
	"deciduous-tree": z({
		component: ip,
		label: "Deciduous tree",
		category: "Vegetation",
		defaultRoomType: "outdoor",
		defaultSize: rp,
		bounds: {
			min: [
				-1.2,
				0,
				-1.2
			],
			max: [
				1.2,
				4.2,
				1.2
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		placementEnvironment: "outdoor",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 7,
			triangles: 1200
		}
	}),
	"olive-tree": z({
		component: Sp,
		label: "Olive tree · Olivier",
		category: "Vegetation",
		defaultRoomType: "outdoor",
		defaultSize: xp,
		bounds: {
			min: [
				-1.9,
				0,
				-1.6
			],
			max: [
				1.9,
				3.6,
				1.6
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		placementEnvironment: "outdoor",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 5,
			triangles: 32e3
		}
	}),
	"wrought-iron-pergola": z({
		legacyOnly: !0,
		component: fi,
		label: "Wrought-iron pergola",
		category: "Garden structures",
		defaultRoomType: "outdoor",
		defaultSize: ui,
		bounds: {
			min: [
				-2,
				0,
				-1.5
			],
			max: [
				2,
				2.7,
				1.5
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		placementEnvironment: "outdoor",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 14,
			triangles: 24e3
		}
	}),
	"garden-shrub": z({
		component: pp,
		label: "Garden shrub",
		category: "Vegetation",
		defaultRoomType: "outdoor",
		defaultSize: dp,
		bounds: {
			min: [
				-.675,
				0,
				-.575
			],
			max: [
				.675,
				.92,
				.575
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		placementEnvironment: "outdoor",
		outlineContact: !1,
		complexity: {
			visibleMeshes: 4,
			triangles: 700
		}
	}),
	"pool-chaise-longue": z({
		component: zp,
		label: "Pool chaise longue",
		category: "Seating",
		defaultRoomType: "outdoor",
		defaultSize: Rp,
		bounds: {
			min: [
				-.4,
				0,
				-1.05
			],
			max: [
				.4,
				.85,
				1.05
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 13,
			triangles: 4900
		}
	}),
	"garden-hedge": z({
		component: up,
		label: "Garden hedge",
		category: "Vegetation",
		defaultRoomType: "outdoor",
		defaultSize: lp,
		bounds: {
			min: [
				-1,
				0,
				-.3
			],
			max: [
				1,
				1.4,
				.3
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		placementEnvironment: "outdoor",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 13,
			triangles: 3800
		}
	}),
	"kitchen-pantry-cabinet": z({
		component: df,
		label: "Kitchen pantry cabinet",
		category: "Kitchen",
		defaultRoomType: "kitchen",
		defaultSize: uf,
		bounds: {
			min: [
				-.3,
				0,
				-.315
			],
			max: [
				.3,
				2.1,
				.315
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		variants: Bn,
		outlineContact: !0,
		complexity: {
			visibleMeshes: 6,
			triangles: 2600
		}
	}),
	"kitchen-island": z({
		component: pf,
		label: "Kitchen island",
		category: "Kitchen",
		defaultRoomType: "kitchen",
		defaultSize: ff,
		bounds: {
			min: [
				-.75,
				0,
				-.45
			],
			max: [
				.75,
				.9,
				.45
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		variants: Bn,
		outlineContact: !0,
		complexity: {
			visibleMeshes: 9,
			triangles: 3800
		}
	}),
	"kitchen-hob-cabinet": z({
		component: _f,
		label: "Kitchen hob cabinet",
		category: "Kitchen",
		defaultRoomType: "kitchen",
		defaultSize: gf,
		bounds: {
			min: [
				-.3,
				0,
				-.315
			],
			max: [
				.3,
				.91,
				.315
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		variants: Bn,
		outlineContact: !0,
		complexity: {
			visibleMeshes: 14,
			triangles: 2800
		}
	}),
	"outdoor-bbq": z({
		component: Vp,
		label: "Outdoor bbq",
		category: "Garden structures",
		defaultRoomType: "outdoor",
		defaultSize: Bp,
		bounds: {
			min: [
				-.6,
				0,
				-.3
			],
			max: [
				.6,
				1.1,
				.3
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		placementEnvironment: "outdoor",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 14,
			triangles: 4700
		}
	}),
	"wooden-garden-swing": z({
		component: Up,
		label: "Wooden garden swing",
		category: "Garden structures",
		defaultRoomType: "outdoor",
		defaultSize: Hp,
		bounds: {
			min: [
				-1.1,
				0,
				-.7
			],
			max: [
				1.1,
				2.1,
				.7
			]
		},
		resizePolicy: {
			kind: "axes",
			axes: [
				"width",
				"height",
				"depth"
			]
		},
		preferredPlacement: "absolute",
		placementEnvironment: "outdoor",
		outlineContact: !0,
		complexity: {
			visibleMeshes: 23,
			triangles: 6300
		}
	})
}, k_ = it(Object.assign(Object.create(null), O_)), A_ = {
	coordinates: {
		metersPerPlanUnit: 1,
		origin: [0, 0],
		scaleBasis: "inferred"
	},
	floors: [{
		ceilings: [
			{
				heightMeters: 3,
				id: "ground-floor:room-1-ceiling",
				kind: "flat",
				roomIds: ["ground-floor:room-1"]
			},
			{
				heightMeters: 3,
				id: "ground-floor-ceiling",
				kind: "flat",
				roomIds: [
					"stair-hall",
					"open-plan-living",
					"pantry"
				]
			},
			{
				heightMeters: 3,
				id: "ground-floor:room-2-ceiling",
				kind: "flat",
				roomIds: ["ground-floor:room-2"]
			}
		],
		coordinates: {
			metersPerPlanUnit: 1,
			origin: [0, 0],
			scaleBasis: "inferred"
		},
		defaultCeilingHeightMeters: 3,
		defaultWallHeightMeters: 3,
		floorToFloorHeightMeters: 3.2,
		footprint: [
			[0, 0],
			[6.5, -.04642857],
			[10, -.07142857],
			[14, -.1],
			[14, 17.9],
			[0, 18]
		],
		groundZones: [
			{
				finish: {
					kind: "preset",
					preset: "travertine"
				},
				id: "south-terrace",
				polygon: [
					[.6, 18],
					[14.2, 18],
					[14.2, 21.9],
					[.6, 21.9]
				]
			},
			{
				finish: {
					kind: "preset",
					preset: "travertine"
				},
				id: "pool-terrace",
				polygon: [
					[4.6, 21.9],
					[14.2, 21.9],
					[14.2, 27.3],
					[4.6, 27.3]
				]
			},
			{
				finish: {
					kind: "preset",
					preset: "limestone"
				},
				id: "front-driveway",
				polygon: [
					[.6, -4.2],
					[5.9, -4.2],
					[5.9, -.2],
					[.6, -.2]
				]
			},
			{
				finish: {
					kind: "preset",
					preset: "limestone"
				},
				id: "front-entry-path",
				polygon: [
					[11.15, -4.1],
					[12.85, -4.1],
					[12.85, -.2],
					[11.15, -.2]
				]
			}
		],
		hedges: [
			{
				from: [14.2, 17.8],
				heightMeters: 1.4,
				id: "ground-floor:hedge-51",
				style: "bushy",
				to: [16.7, 17.8],
				widthMeters: .8
			},
			{
				from: [16.4, 17.6],
				heightMeters: 1.4,
				id: "ground-floor:hedge-52",
				style: "bushy",
				to: [16.4, 30.14182254339],
				widthMeters: .8
			},
			{
				from: [16.404759929296, 30.141805657989],
				heightMeters: 1.4,
				id: "ground-floor:hedge-33",
				style: "bushy",
				to: [0, 30.2],
				widthMeters: .8
			},
			{
				from: [0, 30.2],
				heightMeters: 1.4,
				id: "ground-floor:hedge-34",
				style: "bushy",
				to: [-.04266, 18.174311],
				widthMeters: .8
			}
		],
		id: "ground-floor",
		name: "Ground floor",
		openings: [
			{
				finish: "wood",
				id: "front-entry-door",
				kind: "door",
				leafCount: 2,
				offsetFromWallStartPlanUnits: 11.1454,
				openingHeightMeters: 2.35,
				operation: "hinged",
				sillHeightMeters: 0,
				variant: "french",
				wallId: "ground-north-wall",
				widthPlanUnits: 1.7
			},
			{
				glazing: "clear",
				id: "guest-east-window",
				kind: "window",
				offsetFromWallStartPlanUnits: 1.35,
				openingHeightMeters: 1.45,
				operation: "casement",
				panelCount: 2,
				sillHeightMeters: .8,
				variant: "plain",
				wallId: "ground-east-wall",
				widthPlanUnits: 2.2
			},
			{
				glazing: "clear",
				id: "living-east-window",
				kind: "window",
				offsetFromWallStartPlanUnits: 12.6,
				openingHeightMeters: 1.6,
				operation: "fixed",
				panelCount: 2,
				sillHeightMeters: .7,
				variant: "plain",
				wallId: "ground-east-wall",
				widthPlanUnits: 3.2
			},
			{
				finish: "white",
				id: "living-terrace-slider",
				kind: "door",
				leafCount: 2,
				offsetFromWallStartPlanUnits: 2,
				openingHeightMeters: 2.4,
				operation: "sliding",
				sillHeightMeters: 0,
				variant: "full-glass",
				wallId: "ground-south-wall",
				widthPlanUnits: 4.2
			},
			{
				finish: "white",
				id: "dining-terrace-slider",
				kind: "door",
				leafCount: 2,
				offsetFromWallStartPlanUnits: 8.2,
				openingHeightMeters: 2.4,
				operation: "sliding",
				sillHeightMeters: 0,
				variant: "full-glass",
				wallId: "ground-south-wall",
				widthPlanUnits: 4.2
			},
			{
				glazing: "clear",
				id: "living-west-window",
				kind: "window",
				offsetFromWallStartPlanUnits: 6.3,
				openingHeightMeters: 1.6,
				operation: "fixed",
				panelCount: 2,
				sillHeightMeters: .7,
				variant: "plain",
				wallId: "ground-west-wall",
				widthPlanUnits: 2.8
			},
			{
				glazing: "clear",
				id: "garage-west-window",
				kind: "window",
				offsetFromWallStartPlanUnits: 12.4,
				openingHeightMeters: 1.1,
				operation: "casement",
				panelCount: 2,
				sillHeightMeters: 1.2,
				variant: "plain",
				wallId: "ground-west-wall",
				widthPlanUnits: 2
			},
			{
				finish: "white",
				id: "garage-utility-door",
				kind: "door",
				leafCount: 1,
				offsetFromWallStartPlanUnits: 1.55,
				openingHeightMeters: 2.15,
				operation: "hinged",
				sillHeightMeters: 0,
				variant: "panel",
				wallId: "ground-garage-divider",
				widthPlanUnits: 1
			},
			{
				finish: "white",
				id: "garage-pantry-door",
				kind: "door",
				leafCount: 1,
				offsetFromWallStartPlanUnits: 5.65,
				openingHeightMeters: 2.15,
				operation: "hinged",
				sillHeightMeters: 0,
				variant: "panel",
				wallId: "ground-garage-divider",
				widthPlanUnits: 1
			},
			{
				finish: "white",
				id: "utility-foyer-door",
				kind: "door",
				leafCount: 1,
				offsetFromWallStartPlanUnits: 1.55,
				openingHeightMeters: 2.2,
				operation: "hinged",
				sillHeightMeters: 0,
				variant: "panel",
				wallId: "ground-service-divider",
				widthPlanUnits: 1
			},
			{
				finish: "white",
				id: "pantry-stair-door",
				kind: "door",
				leafCount: 1,
				offsetFromWallStartPlanUnits: 6.05,
				openingHeightMeters: 2.2,
				operation: "hinged",
				sillHeightMeters: 0,
				variant: "panel",
				wallId: "ground-service-divider",
				widthPlanUnits: 1
			},
			{
				id: "kitchen-stair-passage",
				kind: "passage",
				offsetFromWallStartPlanUnits: 9.05,
				openingHeightMeters: 2.5,
				sillHeightMeters: 0,
				variant: "rectangular",
				wallId: "ground-service-divider",
				widthPlanUnits: 1.45
			},
			{
				finish: "white",
				id: "utility-pantry-door",
				kind: "door",
				leafCount: 1,
				offsetFromWallStartPlanUnits: 1.25,
				openingHeightMeters: 2.2,
				operation: "hinged",
				sillHeightMeters: 0,
				variant: "panel",
				wallId: "ground-utility-pantry-wall",
				widthPlanUnits: 1
			},
			{
				finish: "white",
				id: "garage-kitchen-door",
				kind: "door",
				leafCount: 1,
				offsetFromWallStartPlanUnits: 4.45,
				openingHeightMeters: 2.2,
				operation: "hinged",
				sillHeightMeters: 0,
				variant: "panel",
				wallId: "ground-west-day-wall",
				widthPlanUnits: 1.1
			},
			{
				finish: "white",
				id: "pantry-kitchen-door",
				kind: "door",
				leafCount: 1,
				offsetFromWallStartPlanUnits: 8,
				openingHeightMeters: 2.2,
				operation: "hinged",
				sillHeightMeters: 0,
				variant: "panel",
				wallId: "ground-west-day-wall",
				widthPlanUnits: 1
			},
			{
				id: "stair-hall-south-passage",
				kind: "passage",
				offsetFromWallStartPlanUnits: .8,
				openingHeightMeters: 2.55,
				sillHeightMeters: 0,
				variant: "rectangular",
				wallId: "ground-stair-south-wall",
				widthPlanUnits: 2.4
			},
			{
				finish: "white",
				id: "garage-motorized-vehicle-door",
				kind: "door",
				offsetFromWallStartPlanUnits: 1,
				openingHeightMeters: 2.4,
				openingSide: "right",
				operation: "roll-up",
				sillHeightMeters: 0,
				variant: "slatted",
				wallId: "ground-north-wall",
				widthPlanUnits: 4.6
			}
		],
		pools: [{
			id: "villa-pool",
			polygon: [
				[5.9, 22.5],
				[13.5, 22.5],
				[13.5, 26.7],
				[5.9, 26.7]
			]
		}],
		rooms: [
			{
				accent: "#c9a477",
				dashboardSlots: [],
				devices: [],
				id: "ground-floor:room-1",
				name: "Garage",
				polygon: [
					[0, 0],
					[6.5, -.04642857],
					[6.5, 4.5],
					[6.5, 8.5],
					[0, 8.5]
				]
			},
			{
				accent: "#c3a98b",
				dashboardSlots: [],
				devices: [],
				floorFinish: {
					kind: "preset",
					preset: "terrazzo"
				},
				id: "stair-hall",
				name: "Central stair hall",
				polygon: [
					[6.5, -.04642857],
					[10, -.07142857],
					[10, 4.5],
					[6.5, 4.5]
				]
			},
			{
				accent: "#c9a477",
				dashboardSlots: [],
				devices: [],
				floorFinish: {
					kind: "preset",
					preset: "light-oak"
				},
				id: "ground-floor:room-2",
				name: "Stair hall",
				polygon: [
					[10, -.07142857],
					[14, -.1],
					[14, 11],
					[10, 11],
					[10, 8.5],
					[10, 4.5]
				]
			},
			{
				accent: "#d49668",
				dashboardSlots: [],
				devices: [],
				floorFinish: {
					kind: "preset",
					preset: "light-oak"
				},
				id: "open-plan-living",
				name: "Open kitchen, dining and living room",
				polygon: [
					[14, 11],
					[14, 17.9],
					[0, 18],
					[0, 8.5],
					[6.5, 8.5],
					[10, 8.5],
					[10, 11]
				]
			},
			{
				accent: "#c4ad83",
				dashboardSlots: [],
				devices: [],
				floorFinish: {
					color: "#d8cbb5",
					kind: "solid"
				},
				id: "pantry",
				name: "Walk-in pantry",
				polygon: [
					[6.5, 8.5],
					[6.5, 4.5],
					[10, 4.5],
					[10, 8.5]
				]
			}
		],
		wallJunctions: [
			{
				at: [0, 0],
				id: "ground-north-west-junction",
				wallIds: ["ground-north-wall", "ground-west-wall"]
			},
			{
				at: [6.5, -.04642857],
				id: "junction-ground-garage-divider-ground-north-wall-6_5--0_04642857",
				wallIds: ["ground-garage-divider", "ground-north-wall"]
			},
			{
				at: [10, -.07142857],
				id: "junction-ground-north-wall-ground-service-divider-10--0_07142857",
				wallIds: ["ground-north-wall", "ground-service-divider"]
			},
			{
				at: [14, -.1],
				id: "junction-ground-east-wall-ground-north-wall-14--0_1",
				wallIds: ["ground-east-wall", "ground-north-wall"]
			},
			{
				at: [14, 11],
				id: "junction-ground-east-wall-ground-stair-south-wall-14-11",
				wallIds: ["ground-east-wall", "ground-stair-south-wall"]
			},
			{
				at: [14, 17.9],
				id: "junction-ground-east-wall-ground-south-wall-14-17_9",
				wallIds: ["ground-east-wall", "ground-south-wall"]
			},
			{
				at: [0, 18],
				id: "ground-south-west-junction",
				wallIds: ["ground-south-wall", "ground-west-wall"]
			},
			{
				at: [0, 8.5],
				id: "ground-west-day-junction",
				wallIds: ["ground-west-day-wall", "ground-west-wall"]
			},
			{
				at: [6.5, 4.5],
				id: "ground-utility-west-junction",
				wallIds: ["ground-garage-divider", "ground-utility-pantry-wall"]
			},
			{
				at: [6.5, 8.5],
				id: "ground-garage-day-junction",
				wallIds: ["ground-garage-divider", "ground-west-day-wall"]
			},
			{
				at: [10, 4.5],
				id: "ground-utility-east-junction",
				wallIds: ["ground-service-divider", "ground-utility-pantry-wall"]
			},
			{
				at: [10, 8.5],
				id: "ground-service-day-junction",
				wallIds: ["ground-service-divider", "ground-west-day-wall"]
			},
			{
				at: [10, 11],
				id: "ground-service-stair-junction",
				wallIds: ["ground-service-divider", "ground-stair-south-wall"]
			}
		],
		walls: [
			{
				classification: "exterior",
				from: [0, 0],
				id: "ground-north-wall",
				thicknessMeters: .32,
				to: [14, -.1]
			},
			{
				classification: "exterior",
				from: [14, -.1],
				id: "ground-east-wall",
				thicknessMeters: .32,
				to: [14, 17.9]
			},
			{
				classification: "exterior",
				from: [14, 17.9],
				id: "ground-south-wall",
				thicknessMeters: .32,
				to: [0, 18]
			},
			{
				classification: "exterior",
				from: [0, 18],
				id: "ground-west-wall",
				thicknessMeters: .32,
				to: [0, 0]
			},
			{
				classification: "interior",
				from: [6.5, -.04642857],
				id: "ground-garage-divider",
				thicknessMeters: .16,
				to: [6.5, 8.5]
			},
			{
				classification: "interior",
				from: [10, -.07142857],
				id: "ground-service-divider",
				thicknessMeters: .16,
				to: [10, 11]
			},
			{
				classification: "interior",
				from: [6.5, 4.5],
				id: "ground-utility-pantry-wall",
				thicknessMeters: .16,
				to: [10, 4.5]
			},
			{
				classification: "interior",
				from: [0, 8.5],
				id: "ground-west-day-wall",
				thicknessMeters: .16,
				to: [10, 8.5]
			},
			{
				classification: "interior",
				from: [10, 11],
				id: "ground-stair-south-wall",
				thicknessMeters: .16,
				to: [14, 11]
			}
		]
	}, {
		ceilings: [{
			heightMeters: 2.9,
			id: "first-floor-ceiling",
			kind: "flat",
			roomIds: [
				"primary-bedroom",
				"upper-landing",
				"bedroom-four",
				"primary-bathroom",
				"primary-dressing"
			]
		}],
		coordinates: {
			metersPerPlanUnit: 1,
			origin: [0, 0],
			scaleBasis: "inferred"
		},
		defaultCeilingHeightMeters: 2.9,
		defaultWallHeightMeters: 2.9,
		floorToFloorHeightMeters: 3.1,
		footprint: [
			[2, 0],
			[14, 0],
			[14, 16],
			[2, 16]
		],
		id: "first-floor",
		name: "First floor",
		openings: [
			{
				glazing: "clear",
				id: "primary-north-window",
				kind: "window",
				offsetFromWallStartPlanUnits: 1.5,
				openingHeightMeters: 1.5,
				operation: "casement",
				panelCount: 2,
				sillHeightMeters: .75,
				variant: "plain",
				wallId: "first-north-wall",
				widthPlanUnits: 3
			},
			{
				glazing: "clear",
				id: "landing-north-window",
				kind: "window",
				offsetFromWallStartPlanUnits: 9,
				openingHeightMeters: 1.8,
				operation: "fixed",
				panelCount: 2,
				sillHeightMeters: .55,
				variant: "plain",
				wallId: "first-north-wall",
				widthPlanUnits: 2
			},
			{
				finish: "white",
				id: "bedroom-four-west-window",
				kind: "door",
				leafCount: 2,
				offsetFromWallStartPlanUnits: 1.2,
				openingHeightMeters: 2.3,
				operation: "hinged",
				sillHeightMeters: 0,
				variant: "french",
				wallId: "first-west-wall",
				widthPlanUnits: 2.4
			},
			{
				glazing: "privacy",
				id: "primary-bathroom-west-window",
				kind: "window",
				offsetFromWallStartPlanUnits: 5.1,
				openingHeightMeters: 1.1,
				operation: "fixed",
				panelCount: 1,
				sillHeightMeters: 1.2,
				variant: "plain",
				wallId: "first-west-wall",
				widthPlanUnits: 1.8
			},
			{
				finish: "white",
				id: "primary-west-window",
				kind: "door",
				leafCount: 2,
				offsetFromWallStartPlanUnits: 10.2,
				openingHeightMeters: 2.3,
				operation: "hinged",
				sillHeightMeters: 0,
				variant: "french",
				wallId: "first-west-wall",
				widthPlanUnits: 3
			},
			{
				finish: "wood",
				id: "primary-bedroom-door",
				kind: "door",
				leafCount: 1,
				offsetFromWallStartPlanUnits: 2,
				openingHeightMeters: 2.25,
				operation: "hinged",
				sillHeightMeters: 0,
				variant: "panel",
				wallId: "first-west-gallery-wall",
				widthPlanUnits: 1
			},
			{
				finish: "wood",
				id: "dressing-landing-door",
				kind: "door",
				leafCount: 1,
				offsetFromWallStartPlanUnits: 9.5,
				openingHeightMeters: 2.25,
				operation: "sliding",
				sillHeightMeters: 0,
				variant: "plank",
				wallId: "first-west-gallery-wall",
				widthPlanUnits: 1
			},
			{
				finish: "wood",
				id: "bedroom-four-door",
				kind: "door",
				leafCount: 1,
				offsetFromWallStartPlanUnits: 13,
				openingHeightMeters: 2.25,
				operation: "hinged",
				sillHeightMeters: 0,
				variant: "panel",
				wallId: "first-west-gallery-wall",
				widthPlanUnits: 1
			},
			{
				finish: "wood",
				id: "primary-bathroom-door",
				kind: "door",
				leafCount: 1,
				offsetFromWallStartPlanUnits: 1.15,
				openingHeightMeters: 2.25,
				operation: "sliding",
				sillHeightMeters: 0,
				variant: "plank",
				wallId: "first-primary-suite-wall",
				widthPlanUnits: 1
			},
			{
				finish: "wood",
				id: "primary-dressing-door",
				kind: "door",
				leafCount: 1,
				offsetFromWallStartPlanUnits: 5.15,
				openingHeightMeters: 2.25,
				operation: "sliding",
				sillHeightMeters: 0,
				variant: "plank",
				wallId: "first-primary-suite-wall",
				widthPlanUnits: 1
			},
			{
				finish: "white",
				id: "primary-bath-dressing-door",
				kind: "door",
				leafCount: 1,
				offsetFromWallStartPlanUnits: 1.45,
				openingHeightMeters: 2.25,
				operation: "hinged",
				sillHeightMeters: 0,
				variant: "panel",
				wallId: "first-primary-bath-divider",
				widthPlanUnits: 1
			},
			{
				finish: "white",
				id: "first-floor:window-26",
				kind: "door",
				leafCount: 2,
				offsetFromWallStartPlanUnits: 8.9,
				openingHeightMeters: 2.3,
				operation: "hinged",
				sillHeightMeters: 0,
				variant: "french",
				wallId: "first-floor:wall-28",
				widthPlanUnits: 2
			}
		],
		outdoorPlatforms: [{
			defaultEdge: {
				heightMeters: 1,
				kind: "railing"
			},
			edges: [
				{ id: "first-floor:platform-27:edge-1" },
				{ id: "first-floor:platform-27:edge-2" },
				{ id: "first-floor:platform-27:edge-3" },
				{ id: "first-floor:platform-27:edge-4" },
				{ id: "first-floor:platform-27:edge-5" },
				{ id: "first-floor:platform-27:edge-6" }
			],
			finish: {
				kind: "preset",
				preset: "travertine"
			},
			id: "first-floor:platform-27",
			polygon: [
				[14, 16],
				[14, 17.9],
				[0, 18],
				[0, 0],
				[2, 0],
				[2, 16]
			]
		}],
		rooms: [
			{
				accent: "#a8b59c",
				dashboardSlots: [],
				devices: [],
				floorFinish: {
					kind: "preset",
					preset: "dark-walnut"
				},
				id: "primary-bedroom",
				name: "Primary bedroom",
				polygon: [
					[2, 0],
					[10, 0],
					[10, 8],
					[6, 8],
					[2, 8]
				]
			},
			{
				accent: "#c4aa87",
				dashboardSlots: [],
				devices: [],
				floorFinish: {
					kind: "preset",
					preset: "light-oak"
				},
				id: "upper-landing",
				name: "Gallery landing",
				polygon: [
					[10, 0],
					[14, 0],
					[14, 12],
					[14, 16],
					[10, 16],
					[10, 12],
					[10, 8]
				]
			},
			{
				accent: "#bea3ad",
				dashboardSlots: [],
				devices: [],
				floorFinish: {
					kind: "preset",
					preset: "light-oak-horizontal"
				},
				id: "bedroom-four",
				name: "Bedroom four",
				polygon: [
					[2, 16],
					[2, 12],
					[6, 12],
					[10, 12],
					[10, 16]
				]
			},
			{
				accent: "#8db3b1",
				dashboardSlots: [],
				devices: [],
				floorFinish: {
					kind: "preset",
					preset: "square-tile"
				},
				id: "primary-bathroom",
				name: "Primary bathroom",
				polygon: [
					[2, 12],
					[2, 8],
					[6, 8],
					[6, 12]
				]
			},
			{
				accent: "#c3ad91",
				dashboardSlots: [],
				devices: [],
				floorFinish: {
					kind: "preset",
					preset: "dark-walnut"
				},
				id: "primary-dressing",
				name: "Primary dressing room",
				polygon: [
					[10, 8],
					[10, 12],
					[6, 12],
					[6, 8]
				]
			}
		],
		wallJunctions: [
			{
				at: [2, 0],
				id: "first-north-west-junction",
				wallIds: ["first-north-wall", "first-west-wall"]
			},
			{
				at: [10, 0],
				id: "first-north-west-gallery-junction",
				wallIds: ["first-north-wall", "first-west-gallery-wall"]
			},
			{
				at: [14, 0],
				id: "first-north-east-gallery-junction",
				wallIds: ["first-east-gallery-wall", "first-north-wall"]
			},
			{
				at: [2, 16],
				id: "junction-first-floor:wall-28-first-west-wall-2-16",
				wallIds: ["first-floor:wall-28", "first-west-wall"]
			},
			{
				at: [2, 12],
				id: "first-west-bedroom-junction",
				wallIds: ["first-west-bedroom-wall", "first-west-wall"]
			},
			{
				at: [2, 8],
				id: "first-west-primary-junction",
				wallIds: ["first-primary-suite-wall", "first-west-wall"]
			},
			{
				at: [10, 8],
				id: "first-gallery-primary-junction",
				wallIds: ["first-primary-suite-wall", "first-west-gallery-wall"]
			},
			{
				at: [10, 12],
				id: "first-gallery-west-bedroom-junction",
				wallIds: ["first-west-bedroom-wall", "first-west-gallery-wall"]
			},
			{
				at: [10, 16],
				id: "junction-first-floor:wall-28-first-west-gallery-wall-10-16",
				wallIds: ["first-floor:wall-28", "first-west-gallery-wall"]
			},
			{
				at: [14, 12],
				id: "junction-first-east-gallery-wall-first-east-gallery-wall--split-3-14-12",
				wallIds: ["first-east-gallery-wall", "first-east-gallery-wall--split-3"]
			},
			{
				at: [14, 16],
				id: "junction-first-east-gallery-wall--split-3-first-floor:wall-28-14-16",
				wallIds: ["first-east-gallery-wall--split-3", "first-floor:wall-28"]
			},
			{
				at: [6, 8],
				id: "first-primary-bath-north-junction",
				wallIds: ["first-primary-bath-divider", "first-primary-suite-wall"]
			},
			{
				at: [6, 12],
				id: "first-primary-bath-south-junction",
				wallIds: ["first-primary-bath-divider", "first-west-bedroom-wall"]
			}
		],
		walls: [
			{
				classification: "exterior",
				from: [2, 0],
				id: "first-north-wall",
				thicknessMeters: .32,
				to: [14, 0]
			},
			{
				classification: "exterior",
				from: [2, 16],
				id: "first-west-wall",
				thicknessMeters: .32,
				to: [2, 0]
			},
			{
				classification: "interior",
				from: [10, 0],
				id: "first-west-gallery-wall",
				thicknessMeters: .16,
				to: [10, 16]
			},
			{
				classification: "exterior",
				from: [14, 0],
				id: "first-east-gallery-wall",
				thicknessMeters: .16,
				to: [14, 12]
			},
			{
				classification: "exterior",
				from: [14, 12],
				id: "first-east-gallery-wall--split-3",
				thicknessMeters: .16,
				to: [14, 16]
			},
			{
				classification: "interior",
				from: [2, 8],
				id: "first-primary-suite-wall",
				thicknessMeters: .16,
				to: [10, 8]
			},
			{
				classification: "interior",
				from: [6, 8],
				id: "first-primary-bath-divider",
				thicknessMeters: .16,
				to: [6, 12]
			},
			{
				classification: "interior",
				from: [2, 12],
				id: "first-west-bedroom-wall",
				thicknessMeters: .16,
				to: [10, 12]
			},
			{
				classification: "exterior",
				exteriorColor: "#d6c3aa",
				from: [2, 16],
				id: "first-floor:wall-28",
				thicknessMeters: .32,
				to: [14, 16]
			}
		]
	}],
	stairs: [{
		at: [13.3, 5.099999999999999],
		id: "central-stair",
		lowerFloorId: "ground-floor",
		lowerRunMeters: 2.7,
		railings: "left",
		rotationYRadians: 0,
		shape: "l-shaped",
		turn: "left",
		upperFloorId: "first-floor",
		upperRunMeters: 1.2,
		widthMeters: 1
	}]
}, j_ = /*#__PURE__*/ JSON.parse("[{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"villa-garden-dining-pergola-light-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"Pergola string lights\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"villa-garden-dining-pergola\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"pergola-string-lights\",\"placement\":{\"at\":[10,19.8],\"elevationMeters\":-0.043,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[5,2.7,3],\"variant\":\"string-lights\"},{\"floorId\":\"ground-floor\",\"id\":\"villa-garden-dining-table\",\"kind\":\"furnishing\",\"modelId\":\"rectangular-dining-table\",\"placement\":{\"at\":[10,19.8],\"elevationMeters\":-0.043,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[2.4,0.75,0.9]},{\"floorId\":\"ground-floor\",\"id\":\"villa-garden-dining-chair-north-0\",\"kind\":\"furnishing\",\"modelId\":\"oak-dining-chair\",\"placement\":{\"at\":[9.3,19.200000000000003],\"elevationMeters\":-0.043,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.49,0.82,0.5]},{\"floorId\":\"ground-floor\",\"id\":\"villa-garden-dining-chair-south-0\",\"kind\":\"furnishing\",\"modelId\":\"oak-dining-chair\",\"placement\":{\"at\":[9.3,20.400000000000002],\"elevationMeters\":-0.043,\"kind\":\"absolute\",\"rotationYRadians\":3.141592653589793},\"size\":[0.49,0.82,0.5]},{\"floorId\":\"ground-floor\",\"id\":\"villa-garden-dining-chair-north-1\",\"kind\":\"furnishing\",\"modelId\":\"oak-dining-chair\",\"placement\":{\"at\":[10,19.200000000000003],\"elevationMeters\":-0.043,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.49,0.82,0.5]},{\"floorId\":\"ground-floor\",\"id\":\"villa-garden-dining-chair-south-1\",\"kind\":\"furnishing\",\"modelId\":\"oak-dining-chair\",\"placement\":{\"at\":[10,20.400000000000002],\"elevationMeters\":-0.043,\"kind\":\"absolute\",\"rotationYRadians\":3.141592653589793},\"size\":[0.49,0.82,0.5]},{\"floorId\":\"ground-floor\",\"id\":\"villa-garden-dining-chair-north-2\",\"kind\":\"furnishing\",\"modelId\":\"oak-dining-chair\",\"placement\":{\"at\":[10.700000000000001,19.200000000000003],\"elevationMeters\":-0.043,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.49,0.82,0.5]},{\"floorId\":\"ground-floor\",\"id\":\"villa-garden-dining-chair-south-2\",\"kind\":\"furnishing\",\"modelId\":\"oak-dining-chair\",\"placement\":{\"at\":[10.700000000000001,20.400000000000002],\"elevationMeters\":-0.043,\"kind\":\"absolute\",\"rotationYRadians\":3.141592653589793},\"size\":[0.49,0.82,0.5]},{\"floorId\":\"ground-floor\",\"id\":\"villa-garden-lounger-0-1\",\"kind\":\"furnishing\",\"modelId\":\"pool-chaise-longue\",\"placement\":{\"at\":[3,23.400000000000002],\"elevationMeters\":-0.049,\"kind\":\"absolute\",\"rotationYRadians\":1.5707963267948966},\"size\":[0.8,0.85,2.1]},{\"floorId\":\"ground-floor\",\"id\":\"villa-garden-lounger-0-2\",\"kind\":\"furnishing\",\"modelId\":\"pool-chaise-longue\",\"placement\":{\"at\":[3.1,25.5],\"elevationMeters\":-0.049,\"kind\":\"absolute\",\"rotationYRadians\":1.5707963267948966},\"size\":[0.8,0.85,2.1]},{\"floorId\":\"ground-floor\",\"id\":\"villa-garden-pool-table-0\",\"kind\":\"furnishing\",\"modelId\":\"rectangular-coffee-table\",\"placement\":{\"at\":[2.6,24.400000000000002],\"elevationMeters\":-0.049,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.6,0.4,0.4]},{\"floorId\":\"ground-floor\",\"id\":\"villa-garden-olive-0\",\"kind\":\"furnishing\",\"modelId\":\"olive-tree\",\"placement\":{\"at\":[0.9,23.5],\"elevationMeters\":-0.049,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[3.8,3.6,3.2]},{\"floorId\":\"ground-floor\",\"id\":\"villa-garden-olive-2\",\"kind\":\"furnishing\",\"modelId\":\"olive-tree\",\"placement\":{\"at\":[2.5,28],\"elevationMeters\":-0.049,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[3.8,3.6,3.2]},{\"floorId\":\"ground-floor\",\"id\":\"villa-garden-shrub-2\",\"kind\":\"furnishing\",\"modelId\":\"garden-shrub\",\"placement\":{\"at\":[6,-2.5],\"elevationMeters\":-0.049,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[1.35,0.92,1.15]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"sensor\"],\"deviceRole\":\"primary\",\"id\":\"garage-compact-car-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Compact car status\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"garage-compact-car\",\"kind\":\"device\",\"modelId\":\"compact-car\",\"placement\":{\"at\":[1.35,4.25],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":3.141592653589793},\"size\":[1.94,1.5,4]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"sensor\"],\"deviceRole\":\"primary\",\"id\":\"garage-electric-sedan-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Electric sedan status\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"garage-electric-sedan\",\"kind\":\"device\",\"modelId\":\"electric-sedan\",\"placement\":{\"at\":[4.15,4.5],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":3.141592653589793},\"size\":[2.08,1.45,4.7]},{\"floorId\":\"ground-floor\",\"id\":\"garage-storage-shelf-west\",\"kind\":\"furnishing\",\"modelId\":\"oak-bookshelf\",\"placement\":{\"at\":[0.72,8.267],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.8,1.9,0.3]},{\"floorId\":\"ground-floor\",\"id\":\"garage-workbench\",\"kind\":\"furnishing\",\"modelId\":\"oak-desk\",\"placement\":{\"at\":[2.05,8.067],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[1.4,0.74,0.7]},{\"floorId\":\"ground-floor\",\"id\":\"garage-storage-shelf-east\",\"kind\":\"furnishing\",\"modelId\":\"oak-bookshelf\",\"placement\":{\"at\":[3.43,8.267],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.8,1.9,0.3]},{\"floorId\":\"ground-floor\",\"id\":\"garage-workbench-tool-shelf\",\"kind\":\"furnishing\",\"modelId\":\"floating-wall-shelf\",\"placement\":{\"depthOffsetMeters\":0.003,\"elevationMeters\":1.35,\"face\":\"left\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":2.05,\"rotationOffsetRadians\":0,\"wallId\":\"ground-west-day-wall\"},\"size\":[1.4,0.22,0.25]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"garage-ceiling-light-1-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"Garage ceiling light 1\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"garage-ceiling-light-1\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"ceiling-light\",\"placement\":{\"at\":[1.55,4.35],\"dropMeters\":0.122,\"kind\":\"ceiling\",\"roomId\":\"ground-floor:room-1\",\"rotationYRadians\":0},\"size\":[0.4,0.12,0.4]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"garage-ceiling-light-2-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"Garage ceiling light 2\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"garage-ceiling-light-2\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"ceiling-light\",\"placement\":{\"at\":[4.55,4.35],\"dropMeters\":0.122,\"kind\":\"ceiling\",\"roomId\":\"ground-floor:room-1\",\"rotationYRadians\":0},\"size\":[0.4,0.12,0.4]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDeviceClasses\":[\"carbon_monoxide\"],\"compatibleDomains\":[\"binary_sensor\"],\"deviceRole\":\"primary\",\"id\":\"garage-carbon-monoxide-alarm-entity\",\"presentation\":{\"dashboardRole\":\"diagnostic\",\"label\":\"Garage carbon monoxide alarm\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"garage-carbon-monoxide-alarm\",\"kind\":\"device\",\"modelId\":\"carbon-monoxide-alarm\",\"placement\":{\"depthOffsetMeters\":0.003,\"elevationMeters\":1.6,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":10.6,\"rotationOffsetRadians\":0,\"wallId\":\"ground-west-wall\"},\"size\":[0.11,0.11,0.035]},{\"floorId\":\"ground-floor\",\"id\":\"utility-laundry-tall-storage\",\"kind\":\"furnishing\",\"modelId\":\"flat-door-wardrobe\",\"placement\":{\"at\":[6.883,3.28],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":1.5707963267948966},\"size\":[1,2.2,0.6]},{\"floorId\":\"ground-floor\",\"id\":\"utility-laundry-folding-cabinet\",\"kind\":\"furnishing\",\"modelId\":\"kitchen-base-cabinet\",\"placement\":{\"at\":[8.6,4.102],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":3.141592653589793},\"size\":[0.6,0.9,0.63]},{\"floorId\":\"ground-floor\",\"id\":\"utility-laundry-sink-cabinet\",\"kind\":\"furnishing\",\"modelId\":\"kitchen-sink-cabinet\",\"placement\":{\"at\":[9.4,4.102],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":3.141592653589793},\"size\":[1,1.12,0.63]},{\"floorId\":\"ground-floor\",\"id\":\"utility-laundry-folding-basket\",\"kind\":\"furnishing\",\"modelId\":\"wicker-towel-basket\",\"placement\":{\"at\":[8.6,4.02],\"elevationMeters\":0.902,\"kind\":\"absolute\",\"rotationYRadians\":3.141592653589793},\"size\":[0.38,0.315,0.31]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"switch\"],\"deviceRole\":\"primary\",\"id\":\"utility-laundry-washing-machine-power\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Washing machine\"},\"required\":true},{\"autoMap\":\"manual\",\"compatibleDomains\":[\"sensor\"],\"deviceRole\":\"secondary\",\"id\":\"utility-laundry-washing-machine-status\",\"presentation\":{\"dashboardRole\":\"diagnostic\",\"label\":\"Washing machine status\"},\"required\":false}],\"floorId\":\"ground-floor\",\"id\":\"utility-laundry-washing-machine\",\"kind\":\"device\",\"modelId\":\"washing-machine\",\"placement\":{\"at\":[8.4,0.458],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.632,0.865,0.63]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"switch\"],\"deviceRole\":\"primary\",\"id\":\"utility-laundry-tumble-dryer-power\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Tumble dryer\"},\"required\":true},{\"autoMap\":\"manual\",\"compatibleDomains\":[\"sensor\"],\"deviceRole\":\"secondary\",\"id\":\"utility-laundry-tumble-dryer-status\",\"presentation\":{\"dashboardRole\":\"diagnostic\",\"label\":\"Tumble dryer status\"},\"required\":false}],\"floorId\":\"ground-floor\",\"id\":\"utility-laundry-tumble-dryer\",\"kind\":\"device\",\"modelId\":\"tumble-dryer\",\"placement\":{\"at\":[9.1,0.488],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.6,0.85,0.65]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"water_heater\",\"switch\"],\"deviceRole\":\"primary\",\"id\":\"utility-laundry-water-heater-control\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Water heater\"},\"required\":true},{\"autoMap\":\"manual\",\"compatibleDeviceClasses\":[\"temperature\"],\"compatibleDomains\":[\"sensor\"],\"deviceRole\":\"secondary\",\"id\":\"utility-laundry-water-heater-temperature\",\"presentation\":{\"dashboardRole\":\"diagnostic\",\"label\":\"Water heater temperature\"},\"required\":false}],\"floorId\":\"ground-floor\",\"id\":\"utility-laundry-water-heater\",\"kind\":\"device\",\"modelId\":\"water-heater\",\"placement\":{\"depthOffsetMeters\":0.209,\"elevationMeters\":0.85,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":2.9,\"rotationOffsetRadians\":0,\"wallId\":\"ground-service-divider\"},\"size\":[0.572,1.456,0.43]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"utility-laundry-ceiling-light-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Utility room light\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"utility-laundry-ceiling-light\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"ceiling-light\",\"placement\":{\"at\":[8.25,2.3],\"dropMeters\":0,\"kind\":\"ceiling\",\"roomId\":\"stair-hall\",\"rotationYRadians\":0},\"size\":[0.4,0.12,0.4]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDeviceClasses\":[\"moisture\"],\"compatibleDomains\":[\"binary_sensor\"],\"deviceRole\":\"primary\",\"id\":\"utility-laundry-leak-sensor-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"Laundry leak sensor\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"utility-laundry-leak-sensor\",\"kind\":\"device\",\"modelId\":\"leak-sensor\",\"placement\":{\"at\":[8.68,0.96],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.2,0.14,0.2]},{\"floorId\":\"ground-floor\",\"id\":\"pantry-north-west-shelving\",\"kind\":\"furnishing\",\"modelId\":\"oak-bookshelf\",\"placement\":{\"at\":[6.734,5.08],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":1.5707963267948966},\"size\":[0.8,1.9,0.3]},{\"floorId\":\"ground-floor\",\"id\":\"pantry-south-east-shelving\",\"kind\":\"furnishing\",\"modelId\":\"oak-bookshelf\",\"placement\":{\"at\":[9.766,7.78],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":-1.5707963267948966},\"size\":[0.8,1.9,0.3]},{\"floorId\":\"ground-floor\",\"id\":\"pantry-preparation-counter\",\"kind\":\"furnishing\",\"modelId\":\"kitchen-base-cabinet\",\"placement\":{\"at\":[7.2,8.101],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[1.1,0.9,0.63]},{\"floorId\":\"ground-floor\",\"id\":\"pantry-wall-cabinet\",\"kind\":\"furnishing\",\"modelId\":\"kitchen-wall-cabinet\",\"placement\":{\"depthOffsetMeters\":0.004,\"elevationMeters\":1.38,\"face\":\"left\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":7.2,\"rotationOffsetRadians\":0,\"wallId\":\"ground-west-day-wall\"},\"size\":[1.1,0.8,0.35]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDeviceClasses\":[\"temperature\"],\"compatibleDomains\":[\"sensor\"],\"deviceRole\":\"primary\",\"id\":\"pantry-freezer-entity\",\"presentation\":{\"dashboardRole\":\"diagnostic\",\"label\":\"Pantry freezer temperature\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"pantry-freezer\",\"kind\":\"device\",\"modelId\":\"freezer\",\"placement\":{\"at\":[9.576,5.3],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":4.71238898038469},\"size\":[0.65,1.75,0.68]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"pantry-downlight-1-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Pantry downlight 1\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"pantry-downlight-1\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"recessed-downlight\",\"placement\":{\"at\":[7.35,6.5],\"dropMeters\":0.04,\"kind\":\"ceiling\",\"roomId\":\"pantry\",\"rotationYRadians\":0},\"size\":[0.1,0.04,0.1]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"pantry-downlight-2-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Pantry downlight 2\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"pantry-downlight-2\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"recessed-downlight\",\"placement\":{\"at\":[9.15,6.5],\"dropMeters\":0.04,\"kind\":\"ceiling\",\"roomId\":\"pantry\",\"rotationYRadians\":0},\"size\":[0.1,0.04,0.1]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDeviceClasses\":[\"motion\",\"occupancy\",\"presence\"],\"compatibleDomains\":[\"binary_sensor\"],\"deviceRole\":\"primary\",\"id\":\"pantry-motion-sensor-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"Pantry presence\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"pantry-motion-sensor\",\"kind\":\"device\",\"modelId\":\"motion-sensor\",\"placement\":{\"depthOffsetMeters\":0.004,\"elevationMeters\":2.35,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":2.75,\"rotationOffsetRadians\":0,\"wallId\":\"ground-utility-pantry-wall\"},\"size\":[0.14,0.135,0.081]},{\"floorId\":\"ground-floor\",\"id\":\"foyer-shoe-bench\",\"kind\":\"furnishing\",\"modelId\":\"entryway-shoe-bench\",\"placement\":{\"at\":[10.274,3.65],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":1.5707963267948966},\"size\":[1,0.5,0.38]},{\"floorId\":\"ground-floor\",\"id\":\"foyer-console\",\"kind\":\"furnishing\",\"modelId\":\"hallway-console-table\",\"placement\":{\"depthOffsetMeters\":0.175,\"elevationMeters\":0.001,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":8.7919,\"rotationOffsetRadians\":0,\"wallId\":\"ground-east-wall\"},\"size\":[1.1,0.8,0.35]},{\"floorId\":\"ground-floor\",\"id\":\"foyer-framed-art\",\"kind\":\"furnishing\",\"modelId\":\"framed-wall-art\",\"placement\":{\"depthOffsetMeters\":0,\"elevationMeters\":1.35,\"face\":\"left\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":3.7423,\"rotationOffsetRadians\":0,\"wallId\":\"ground-service-divider\"},\"size\":[0.7993947603124634,0.5995460702343475,0.03996973801562317]},{\"floorId\":\"ground-floor\",\"id\":\"foyer-potted-plant\",\"kind\":\"furnishing\",\"modelId\":\"potted-plant\",\"placement\":{\"at\":[10.65,0.62],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":-0.39269908169872414},\"size\":[0.615,1.105,0.44]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"foyer-pendant-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Foyer pendant\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"foyer-pendant\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"terracotta-pendant\",\"placement\":{\"at\":[12,2.86],\"dropMeters\":0.82,\"kind\":\"ceiling\",\"roomId\":\"ground-floor:room-2\",\"rotationYRadians\":0},\"size\":[0.66,0.64,0.66]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDomains\":[\"camera\"],\"deviceRole\":\"primary\",\"id\":\"foyer-camera-screen-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"Entry camera screen\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"foyer-camera-screen\",\"kind\":\"device\",\"modelId\":\"camera-screen\",\"placement\":{\"at\":[13.916,0.78],\"elevationMeters\":1.2,\"kind\":\"absolute\",\"rotationYRadians\":-1.5707963267948966},\"size\":[0.98,0.62,0.061]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDomains\":[\"alarm_control_panel\"],\"deviceRole\":\"primary\",\"id\":\"foyer-alarm-keypad-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Villa alarm\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"foyer-alarm-keypad\",\"kind\":\"device\",\"modelId\":\"alarm-keypad\",\"placement\":{\"depthOffsetMeters\":0.004,\"elevationMeters\":1.3,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":10.65,\"rotationOffsetRadians\":0,\"wallId\":\"ground-north-wall\"},\"size\":[0.18,0.25,0.035]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDomains\":[\"lock\"],\"deviceRole\":\"primary\",\"id\":\"foyer-smart-lock-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Front door lock\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"foyer-smart-lock\",\"kind\":\"device\",\"modelId\":\"smart-lock\",\"placement\":{\"depthOffsetMeters\":0.004,\"elevationMeters\":0.96,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":12.98,\"rotationOffsetRadians\":0,\"wallId\":\"ground-north-wall\"},\"size\":[0.07,0.18,0.06]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"cover\"],\"deviceRole\":\"primary\",\"id\":\"guest-bedroom-east-blind-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"East window blind\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"guest-bedroom-east-blind\",\"kind\":\"device\",\"modelId\":\"motorized-blind\",\"placement\":{\"depthOffsetMeters\":0.003,\"elevationMeters\":0.8,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":2.45,\"rotationOffsetRadians\":0,\"wallId\":\"ground-east-wall\"},\"size\":[2.05,1.45,0.12]},{\"floorId\":\"ground-floor\",\"id\":\"stair-hall-console\",\"kind\":\"furnishing\",\"modelId\":\"hallway-console-table\",\"placement\":{\"at\":[10.257,8],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":1.5707963267948966},\"size\":[1.1,0.8,0.35]},{\"floorId\":\"ground-floor\",\"id\":\"stair-hall-console-art\",\"kind\":\"furnishing\",\"modelId\":\"framed-wall-art\",\"placement\":{\"at\":[10.083,8],\"elevationMeters\":1.42,\"kind\":\"absolute\",\"rotationYRadians\":1.5707963267948966},\"size\":[0.8,0.62,0.04]},{\"floorId\":\"ground-floor\",\"id\":\"stair-hall-landing-plant\",\"kind\":\"furnishing\",\"modelId\":\"potted-plant\",\"placement\":{\"at\":[13.6,10.5],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":-0.4487989505128276},\"size\":[0.615,1.105,0.44]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"stair-hall-downlight-1-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"Stair hall downlight 1\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"stair-hall-downlight-1\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"recessed-downlight\",\"placement\":{\"at\":[10.6,7.55],\"dropMeters\":0,\"kind\":\"ceiling\",\"roomId\":\"ground-floor:room-2\",\"rotationYRadians\":0},\"size\":[0.1,0.04,0.1]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"stair-hall-downlight-2-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"Stair hall downlight 2\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"stair-hall-downlight-2\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"recessed-downlight\",\"placement\":{\"at\":[13.4,9.25],\"dropMeters\":0,\"kind\":\"ceiling\",\"roomId\":\"ground-floor:room-2\",\"rotationYRadians\":0},\"size\":[0.1,0.04,0.1]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"stair-hall-wall-sconce-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"Stair hall wall sconce\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"stair-hall-wall-sconce\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"wall-sconce\",\"placement\":{\"at\":[13.917,9.65],\"elevationMeters\":1.72,\"kind\":\"absolute\",\"rotationYRadians\":-1.5707963267948966},\"size\":[0.22,0.32,0.16]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDeviceClasses\":[\"motion\",\"occupancy\",\"presence\"],\"compatibleDomains\":[\"binary_sensor\"],\"deviceRole\":\"primary\",\"id\":\"stair-hall-motion-sensor-entity\",\"presentation\":{\"dashboardRole\":\"diagnostic\",\"label\":\"Stair hall motion\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"stair-hall-motion-sensor\",\"kind\":\"device\",\"modelId\":\"motion-sensor\",\"placement\":{\"at\":[13.4,0.7000000000000001],\"elevationMeters\":3,\"kind\":\"absolute\",\"rotationYRadians\":0.007142735669413403},\"size\":[0.14,0.135,0.081]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-equipped-kitchen\",\"kind\":\"furnishing\",\"modelId\":\"equipped-kitchen\",\"placement\":{\"at\":[0.5,9],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[3.89,2.23,2.54]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-counter-stool-1\",\"kind\":\"furnishing\",\"modelId\":\"counter-stool\",\"placement\":{\"at\":[1.55,12.1],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":3.141592653589793},\"size\":[0.502,0.9621666666666667,0.5229166666666667]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-counter-stool-2\",\"kind\":\"furnishing\",\"modelId\":\"counter-stool\",\"placement\":{\"at\":[2.55,12.1],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":3.141592653589793},\"size\":[0.502,0.9621666666666667,0.5229166666666667]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-counter-stool-3\",\"kind\":\"furnishing\",\"modelId\":\"counter-stool\",\"placement\":{\"at\":[3.55,12.1],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":3.141592653589793},\"size\":[0.502,0.9621666666666667,0.5229166666666667]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-dining-table\",\"kind\":\"furnishing\",\"modelId\":\"rectangular-dining-table\",\"placement\":{\"at\":[10.7,14.1],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[2.8,0.75,1.1]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-dining-chair-north-west\",\"kind\":\"furnishing\",\"modelId\":\"oak-dining-chair\",\"placement\":{\"at\":[9.6,13.1],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.49,0.82,0.5]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-dining-chair-north-center\",\"kind\":\"furnishing\",\"modelId\":\"oak-dining-chair\",\"placement\":{\"at\":[10.7,13.1],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.49,0.82,0.5]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-dining-chair-north-east\",\"kind\":\"furnishing\",\"modelId\":\"oak-dining-chair\",\"placement\":{\"at\":[11.8,13.1],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.49,0.82,0.5]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-dining-chair-south-west\",\"kind\":\"furnishing\",\"modelId\":\"oak-dining-chair\",\"placement\":{\"at\":[9.6,15.1],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":3.141592653589793},\"size\":[0.49,0.82,0.5]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-dining-chair-south-center\",\"kind\":\"furnishing\",\"modelId\":\"oak-dining-chair\",\"placement\":{\"at\":[10.7,15.1],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":3.141592653589793},\"size\":[0.49,0.82,0.5]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-dining-chair-south-east\",\"kind\":\"furnishing\",\"modelId\":\"oak-dining-chair\",\"placement\":{\"at\":[11.8,15.1],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":3.141592653589793},\"size\":[0.49,0.82,0.5]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-dining-chair-west\",\"kind\":\"furnishing\",\"modelId\":\"oak-dining-chair\",\"placement\":{\"at\":[8.9,14.1],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":1.5707963267948966},\"size\":[0.49,0.82,0.5]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-dining-chair-east\",\"kind\":\"furnishing\",\"modelId\":\"oak-dining-chair\",\"placement\":{\"at\":[12.5,14.1],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":1.5707963267948966},\"size\":[0.49,0.82,0.5]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-reading-rug\",\"kind\":\"furnishing\",\"modelId\":\"neutral-area-rug\",\"placement\":{\"at\":[3.2,15],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[4.5,0.015,3.6],\"variant\":\"sage\"},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-reading-table\",\"kind\":\"furnishing\",\"modelId\":\"rectangular-coffee-table\",\"placement\":{\"at\":[3.1,15.5],\"elevationMeters\":0.017,\"kind\":\"absolute\",\"rotationYRadians\":4.71238898038469},\"size\":[1.1,0.4,0.6]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-reading-ficus\",\"kind\":\"furnishing\",\"modelId\":\"tall-ficus\",\"placement\":{\"at\":[0.85,16.95],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.901,1.643,0.503]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-dining-sideboard\",\"kind\":\"furnishing\",\"modelId\":\"three-door-sideboard\",\"placement\":{\"at\":[6.85,8.808],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[1.8,0.82,0.45]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-sideboard-plant\",\"kind\":\"furnishing\",\"modelId\":\"potted-plant\",\"placement\":{\"at\":[7.4,8.81],\"elevationMeters\":0.823,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.3075,0.5525,0.22]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-sideboard-art\",\"kind\":\"furnishing\",\"modelId\":\"framed-wall-art\",\"placement\":{\"depthOffsetMeters\":0.004,\"elevationMeters\":1.3,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":7.1,\"rotationOffsetRadians\":0,\"wallId\":\"ground-west-day-wall\"},\"size\":[1.5,1,0.04]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"open-plan-living-kitchen-cabinet-lighting-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Kitchen cabinet lighting\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-kitchen-cabinet-lighting\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"kitchen-cabinet-lighting\",\"placement\":{\"at\":[0.5,9],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[3.89,2.23,2.54]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"open-plan-living-kitchen-pendant-1-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Kitchen pendant 1\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-kitchen-pendant-1\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"woven-pendant\",\"placement\":{\"at\":[1.55,11.25],\"dropMeters\":0,\"kind\":\"ceiling\",\"roomId\":\"open-plan-living\",\"rotationYRadians\":0},\"size\":[0.704,0.482077922077922,0.7148051948051948]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"open-plan-living-kitchen-pendant-2-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Kitchen pendant 2\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-kitchen-pendant-2\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"woven-pendant\",\"placement\":{\"at\":[2.55,11.25],\"dropMeters\":0,\"kind\":\"ceiling\",\"roomId\":\"open-plan-living\",\"rotationYRadians\":0},\"size\":[0.704,0.482077922077922,0.7148051948051948]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"open-plan-living-kitchen-pendant-3-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Kitchen pendant 3\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-kitchen-pendant-3\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"woven-pendant\",\"placement\":{\"at\":[3.55,11.25],\"dropMeters\":0,\"kind\":\"ceiling\",\"roomId\":\"open-plan-living\",\"rotationYRadians\":0},\"size\":[0.704,0.482077922077922,0.7148051948051948]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"open-plan-living-dining-pendant-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Dining pendant\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-dining-pendant\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"woven-pendant\",\"placement\":{\"at\":[10.7,14.1],\"dropMeters\":0.15,\"kind\":\"ceiling\",\"roomId\":\"open-plan-living\",\"rotationYRadians\":0},\"size\":[0.847,0.58,0.86]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDomains\":[\"climate\"],\"deviceRole\":\"primary\",\"id\":\"open-plan-living-ac-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Living room AC\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-ac\",\"kind\":\"device\",\"modelId\":\"indoor-ac\",\"placement\":{\"depthOffsetMeters\":0.001,\"elevationMeters\":2.35,\"face\":\"left\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":5.1857,\"rotationOffsetRadians\":0,\"wallId\":\"ground-service-divider\"},\"size\":[0.86,0.28,0.206]},{\"floorId\":\"first-floor\",\"id\":\"primary-bedroom-rug\",\"kind\":\"furnishing\",\"modelId\":\"neutral-area-rug\",\"placement\":{\"at\":[8,5.2],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[3,0.015,2.8]},{\"floorId\":\"first-floor\",\"id\":\"primary-bedroom-bed\",\"kind\":\"furnishing\",\"modelId\":\"double-bed\",\"placement\":{\"at\":[8.841,5.2],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":-1.5707963267948966},\"size\":[1.7,1.1,2.15]},{\"floorId\":\"first-floor\",\"id\":\"primary-bedroom-north-nightstand\",\"kind\":\"furnishing\",\"modelId\":\"oak-nightstand\",\"placement\":{\"at\":[9.716,4],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":1.5707963267948966},\"size\":[0.45,0.5,0.4]},{\"floorId\":\"first-floor\",\"id\":\"primary-bedroom-south-nightstand\",\"kind\":\"furnishing\",\"modelId\":\"oak-nightstand\",\"placement\":{\"at\":[9.716,6.4],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":1.5707963267948966},\"size\":[0.45,0.5,0.4]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"primary-bedroom-north-table-lamp-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"North bedside lamp\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"primary-bedroom-north-table-lamp\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"table-lamp\",\"placement\":{\"at\":[9.716,4],\"elevationMeters\":0.501,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.32,0.52,0.32]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"primary-bedroom-south-table-lamp-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"South bedside lamp\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"primary-bedroom-south-table-lamp\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"table-lamp\",\"placement\":{\"at\":[9.716,6.4],\"elevationMeters\":0.501,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.32,0.52,0.32]},{\"floorId\":\"first-floor\",\"id\":\"primary-bedroom-bed-bench\",\"kind\":\"furnishing\",\"modelId\":\"upholstered-ottoman\",\"placement\":{\"at\":[7.2,5.2],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":1.5707963267948966},\"size\":[0.7,0.42,0.55]},{\"floorId\":\"first-floor\",\"id\":\"primary-bedroom-sideboard\",\"kind\":\"furnishing\",\"modelId\":\"three-door-sideboard\",\"placement\":{\"at\":[5.65,7.691],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":3.141592653589793},\"size\":[1.6,0.82,0.45]},{\"floorId\":\"first-floor\",\"id\":\"primary-bedroom-art\",\"kind\":\"furnishing\",\"modelId\":\"framed-wall-art\",\"placement\":{\"depthOffsetMeters\":0.004,\"elevationMeters\":1.28,\"face\":\"left\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":3.65,\"rotationOffsetRadians\":0,\"wallId\":\"first-primary-suite-wall\"},\"size\":[1.1,0.72,0.04]},{\"floorId\":\"first-floor\",\"id\":\"primary-bedroom-reading-plant\",\"kind\":\"furnishing\",\"modelId\":\"potted-plant\",\"placement\":{\"at\":[4,0.6000000000000001],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.615,1.105,0.44]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"primary-bedroom-pendant-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Primary bedroom pendant\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"primary-bedroom-pendant\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"woven-pendant\",\"placement\":{\"at\":[6,4],\"dropMeters\":0,\"kind\":\"ceiling\",\"roomId\":\"primary-bedroom\",\"rotationYRadians\":0},\"size\":[0.847,0.58,0.86]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDomains\":[\"climate\"],\"deviceRole\":\"primary\",\"id\":\"primary-bedroom-ac-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Primary bedroom AC\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"primary-bedroom-ac\",\"kind\":\"device\",\"modelId\":\"indoor-ac\",\"placement\":{\"depthOffsetMeters\":0.002,\"elevationMeters\":2.28,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":5.2,\"rotationOffsetRadians\":0,\"wallId\":\"first-west-gallery-wall\"},\"size\":[0.86,0.28,0.206]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"cover\"],\"deviceRole\":\"primary\",\"id\":\"primary-bedroom-north-blind-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"North window blind\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"primary-bedroom-north-blind\",\"kind\":\"device\",\"modelId\":\"motorized-blind\",\"placement\":{\"depthOffsetMeters\":0.003,\"elevationMeters\":0.75,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":3,\"rotationOffsetRadians\":0,\"wallId\":\"first-north-wall\"},\"size\":[2.8,1.425,0.12]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"cover\"],\"deviceRole\":\"primary\",\"id\":\"primary-bedroom-west-blind-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"West window blind\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"primary-bedroom-west-blind\",\"kind\":\"device\",\"modelId\":\"motorized-blind\",\"placement\":{\"depthOffsetMeters\":0.003,\"elevationMeters\":0.75,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":11.7,\"rotationOffsetRadians\":0,\"wallId\":\"first-west-wall\"},\"size\":[2.8,1.425,0.12]},{\"floorId\":\"first-floor\",\"id\":\"primary-bathroom-bathtub\",\"kind\":\"furnishing\",\"modelId\":\"freestanding-bathtub\",\"placement\":{\"at\":[2.553,10],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":1.5707963267948966},\"size\":[1.7,0.6,0.78]},{\"floorId\":\"first-floor\",\"id\":\"primary-bathroom-shower\",\"kind\":\"furnishing\",\"modelId\":\"shower-assembly\",\"placement\":{\"at\":[4.821,11.454],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[2.018,1.57,0.908]},{\"floorId\":\"first-floor\",\"id\":\"primary-bathroom-toilet\",\"kind\":\"furnishing\",\"modelId\":\"compact-toilet\",\"placement\":{\"at\":[2.55,8.383],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.39,0.724,0.6]},{\"floorId\":\"first-floor\",\"id\":\"primary-bathroom-vanity\",\"kind\":\"furnishing\",\"modelId\":\"dark-oak-vessel-vanity\",\"placement\":{\"at\":[5.25,8.343],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.8,1.23,0.52]},{\"floorId\":\"first-floor\",\"id\":\"primary-bathroom-towel-basket\",\"kind\":\"furnishing\",\"modelId\":\"wicker-towel-basket\",\"placement\":{\"at\":[3.32,11.48],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":-0.39269908169872414},\"size\":[0.38,0.315,0.31]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"primary-bathroom-ceiling-light-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Primary bathroom ceiling light\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"primary-bathroom-ceiling-light\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"ceiling-light\",\"placement\":{\"at\":[4.05,10],\"dropMeters\":0.08,\"kind\":\"ceiling\",\"roomId\":\"primary-bathroom\",\"rotationYRadians\":0},\"size\":[0.4,0.12,0.4]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"primary-bathroom-illuminated-mirror-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"Primary bathroom mirror light\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"primary-bathroom-illuminated-mirror\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"illuminated-round-mirror\",\"placement\":{\"depthOffsetMeters\":0.004,\"elevationMeters\":1.3,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":3.25,\"rotationOffsetRadians\":0,\"wallId\":\"first-primary-suite-wall\"},\"size\":[0.8,0.8,0.045]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDomains\":[\"climate\",\"switch\"],\"deviceRole\":\"primary\",\"id\":\"primary-bathroom-heated-towel-rail-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Primary bathroom towel warmer\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"primary-bathroom-heated-towel-rail\",\"kind\":\"device\",\"modelId\":\"heated-towel-rail\",\"placement\":{\"depthOffsetMeters\":0.004,\"elevationMeters\":0.72,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":0.95,\"rotationOffsetRadians\":0,\"wallId\":\"first-primary-bath-divider\"},\"size\":[0.6,1.2,0.12]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDomains\":[\"fan\",\"switch\"],\"deviceRole\":\"primary\",\"id\":\"primary-bathroom-extractor-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"Primary bathroom extractor\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"primary-bathroom-extractor\",\"kind\":\"device\",\"modelId\":\"bathroom-extractor-fan\",\"placement\":{\"depthOffsetMeters\":0.004,\"elevationMeters\":2.52,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":3.45,\"rotationOffsetRadians\":0,\"wallId\":\"first-primary-bath-divider\"},\"size\":[0.18,0.18,0.09]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDeviceClasses\":[\"humidity\"],\"compatibleDomains\":[\"sensor\"],\"deviceRole\":\"primary\",\"id\":\"primary-bathroom-humidity-sensor-entity\",\"presentation\":{\"dashboardRole\":\"diagnostic\",\"label\":\"Primary bathroom humidity\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"primary-bathroom-humidity-sensor\",\"kind\":\"device\",\"modelId\":\"humidity-sensor\",\"placement\":{\"depthOffsetMeters\":0.004,\"elevationMeters\":1.72,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":2.5,\"rotationOffsetRadians\":0,\"wallId\":\"first-primary-suite-wall\"},\"size\":[0.085,0.085,0.03]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDeviceClasses\":[\"moisture\"],\"compatibleDomains\":[\"binary_sensor\"],\"deviceRole\":\"primary\",\"id\":\"primary-bathroom-leak-sensor-entity\",\"presentation\":{\"dashboardRole\":\"diagnostic\",\"label\":\"Primary bathroom leak sensor\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"primary-bathroom-leak-sensor\",\"kind\":\"device\",\"modelId\":\"leak-sensor\",\"placement\":{\"at\":[5.34,8.78],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.2,0.14,0.2]},{\"floorId\":\"first-floor\",\"id\":\"primary-dressing-south-wardrobe\",\"kind\":\"furnishing\",\"modelId\":\"flat-door-wardrobe\",\"placement\":{\"at\":[8,11.617],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":3.141592653589793},\"size\":[3.2,2.2,0.6]},{\"floorId\":\"first-floor\",\"id\":\"primary-dressing-north-chest\",\"kind\":\"furnishing\",\"modelId\":\"chest-of-drawers\",\"placement\":{\"at\":[9.05,8.308],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[1.3,0.9,0.45]},{\"floorId\":\"first-floor\",\"id\":\"primary-dressing-center-rug\",\"kind\":\"furnishing\",\"modelId\":\"neutral-area-rug\",\"placement\":{\"at\":[8.15,9.65],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[1.4,0.015,1.6]},{\"floorId\":\"first-floor\",\"id\":\"primary-dressing-ottoman\",\"kind\":\"furnishing\",\"modelId\":\"upholstered-ottoman\",\"placement\":{\"at\":[8.55,9.15],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.7,0.42,0.55]},{\"floorId\":\"first-floor\",\"id\":\"primary-dressing-mirror\",\"kind\":\"furnishing\",\"modelId\":\"arched-mirror\",\"placement\":{\"depthOffsetMeters\":0.033,\"elevationMeters\":1.15,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":7.05,\"rotationOffsetRadians\":0,\"wallId\":\"first-primary-suite-wall\"},\"size\":[0.54,1.05,0.06]},{\"floorId\":\"first-floor\",\"id\":\"primary-dressing-west-shelf\",\"kind\":\"furnishing\",\"modelId\":\"floating-wall-shelf\",\"placement\":{\"depthOffsetMeters\":0.003,\"elevationMeters\":1.3,\"face\":\"left\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":3.05,\"rotationOffsetRadians\":0,\"wallId\":\"first-primary-bath-divider\"},\"size\":[1,0.22,0.25]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"primary-dressing-downlight-1-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Dressing downlight 1\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"primary-dressing-downlight-1\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"recessed-downlight\",\"placement\":{\"at\":[7.15,9.05],\"dropMeters\":0,\"kind\":\"ceiling\",\"roomId\":\"primary-dressing\",\"rotationYRadians\":0},\"size\":[0.1,0.04,0.1]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"primary-dressing-downlight-2-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"Dressing downlight 2\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"primary-dressing-downlight-2\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"recessed-downlight\",\"placement\":{\"at\":[8.85,10.95],\"dropMeters\":0,\"kind\":\"ceiling\",\"roomId\":\"primary-dressing\",\"rotationYRadians\":0},\"size\":[0.1,0.04,0.1]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDeviceClasses\":[\"motion\",\"occupancy\",\"presence\"],\"compatibleDomains\":[\"binary_sensor\"],\"deviceRole\":\"primary\",\"id\":\"primary-dressing-motion-sensor-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"Dressing occupancy\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"primary-dressing-motion-sensor\",\"kind\":\"device\",\"modelId\":\"motion-sensor\",\"placement\":{\"at\":[8,10],\"dropMeters\":0,\"kind\":\"ceiling\",\"roomId\":\"primary-dressing\",\"rotationYRadians\":0},\"size\":[0.14,0.135,0.081]},{\"floorId\":\"first-floor\",\"id\":\"bedroom-four-bed\",\"kind\":\"furnishing\",\"modelId\":\"single-bed\",\"placement\":{\"at\":[3.5,13.134],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[1,0.95,2.1]},{\"floorId\":\"first-floor\",\"id\":\"bedroom-four-nightstand\",\"kind\":\"furnishing\",\"modelId\":\"oak-nightstand\",\"placement\":{\"at\":[4.35,12.284],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.45,0.5,0.4]},{\"floorId\":\"first-floor\",\"id\":\"bedroom-four-bookshelf\",\"kind\":\"furnishing\",\"modelId\":\"oak-bookshelf\",\"placement\":{\"at\":[5.7,12.234],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.8,1.9,0.3]},{\"floorId\":\"first-floor\",\"id\":\"bedroom-four-desk\",\"kind\":\"furnishing\",\"modelId\":\"oak-desk\",\"placement\":{\"at\":[7.65,12.434],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[1.4,0.74,0.7]},{\"floorId\":\"first-floor\",\"id\":\"bedroom-four-desk-chair\",\"kind\":\"furnishing\",\"modelId\":\"ergonomic-office-chair\",\"placement\":{\"at\":[7.5,12.8],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":3.141592653589793},\"size\":[0.68,1.04,0.68]},{\"floorId\":\"first-floor\",\"id\":\"bedroom-four-wardrobe\",\"kind\":\"furnishing\",\"modelId\":\"flat-door-wardrobe\",\"placement\":{\"depthOffsetMeters\":0.3,\"elevationMeters\":0.001,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":14.9168,\"rotationOffsetRadians\":0,\"wallId\":\"first-west-gallery-wall\"},\"size\":[1.6,2.2,0.6]},{\"floorId\":\"first-floor\",\"id\":\"bedroom-four-rug\",\"kind\":\"furnishing\",\"modelId\":\"neutral-area-rug\",\"placement\":{\"at\":[6,14.65],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":1.5707963267948966},\"size\":[2.5,0.015,1.45]},{\"floorId\":\"first-floor\",\"id\":\"bedroom-four-bed-art\",\"kind\":\"furnishing\",\"modelId\":\"framed-wall-art\",\"placement\":{\"depthOffsetMeters\":0.004,\"elevationMeters\":1.38,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":1.5,\"rotationOffsetRadians\":0,\"wallId\":\"first-west-bedroom-wall\"},\"size\":[0.8,0.6,0.04]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"bedroom-four-bedside-lamp-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"Bedroom four bedside lamp\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"bedroom-four-bedside-lamp\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"table-lamp\",\"placement\":{\"at\":[4.35,12.284],\"elevationMeters\":0.501,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.32,0.52,0.32]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"bedroom-four-pendant-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Bedroom four pendant\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"bedroom-four-pendant\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"children-pendant\",\"placement\":{\"at\":[6.2,14.1],\"dropMeters\":0,\"kind\":\"ceiling\",\"roomId\":\"bedroom-four\",\"rotationYRadians\":0},\"size\":[0.58,0.479,0.58]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDomains\":[\"climate\"],\"deviceRole\":\"primary\",\"id\":\"bedroom-four-ac-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Bedroom four AC\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"bedroom-four-ac\",\"kind\":\"device\",\"modelId\":\"indoor-ac\",\"placement\":{\"depthOffsetMeters\":0.002,\"elevationMeters\":2.3,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":6.8,\"rotationOffsetRadians\":0,\"wallId\":\"first-west-bedroom-wall\"},\"size\":[0.86,0.28,0.206]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"cover\"],\"deviceRole\":\"primary\",\"id\":\"bedroom-four-west-blind-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"Bedroom four west blind\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"bedroom-four-west-blind\",\"kind\":\"device\",\"modelId\":\"motorized-blind\",\"placement\":{\"depthOffsetMeters\":0.003,\"elevationMeters\":0.75,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":2.4,\"rotationOffsetRadians\":0,\"wallId\":\"first-west-wall\"},\"size\":[2.25,1.425,0.12]},{\"floorId\":\"first-floor\",\"id\":\"upper-landing-console\",\"kind\":\"furnishing\",\"modelId\":\"hallway-console-table\",\"placement\":{\"at\":[10.257,4.2],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":1.5707963267948966},\"size\":[1.1,0.8,0.35]},{\"floorId\":\"first-floor\",\"id\":\"upper-landing-console-art\",\"kind\":\"furnishing\",\"modelId\":\"framed-wall-art\",\"placement\":{\"depthOffsetMeters\":0.003,\"elevationMeters\":1.42,\"face\":\"left\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":4.2,\"rotationOffsetRadians\":0,\"wallId\":\"first-west-gallery-wall\"},\"size\":[0.8,0.62,0.04]},{\"floorId\":\"first-floor\",\"id\":\"upper-landing-north-plant\",\"kind\":\"furnishing\",\"modelId\":\"potted-plant\",\"placement\":{\"at\":[10.47,0.55],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0.4487989505128276},\"size\":[0.615,1.105,0.44]},{\"floorId\":\"first-floor\",\"id\":\"upper-landing-gallery-bench\",\"kind\":\"furnishing\",\"modelId\":\"entryway-shoe-bench\",\"placement\":{\"at\":[13.727,11.7],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":1.5707963267948966},\"size\":[1,0.5,0.38]},{\"floorId\":\"first-floor\",\"id\":\"upper-landing-bench-art\",\"kind\":\"furnishing\",\"modelId\":\"framed-wall-art\",\"placement\":{\"at\":[13.917,11.7],\"elevationMeters\":1.25,\"kind\":\"absolute\",\"rotationYRadians\":-1.5707963267948966},\"size\":[0.8,0.62,0.04]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"upper-landing-downlight-1-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"Upper landing downlight 1\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"upper-landing-downlight-1\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"recessed-downlight\",\"placement\":{\"at\":[12,4.65],\"dropMeters\":0,\"kind\":\"ceiling\",\"roomId\":\"upper-landing\",\"rotationYRadians\":0},\"size\":[0.1,0.04,0.1]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"upper-landing-downlight-2-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"Upper landing downlight 2\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"upper-landing-downlight-2\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"recessed-downlight\",\"placement\":{\"at\":[12,11.55],\"dropMeters\":0,\"kind\":\"ceiling\",\"roomId\":\"upper-landing\",\"rotationYRadians\":0},\"size\":[0.1,0.04,0.1]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"upper-landing-north-sconce-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"North gallery wall sconce\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"upper-landing-north-sconce\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"wall-sconce\",\"placement\":{\"depthOffsetMeters\":0.003,\"elevationMeters\":1.72,\"face\":\"left\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":5.18,\"rotationOffsetRadians\":0,\"wallId\":\"first-west-gallery-wall\"},\"size\":[0.22,0.32,0.16]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"upper-landing-south-sconce-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"South gallery wall sconce\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"upper-landing-south-sconce\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"wall-sconce\",\"placement\":{\"depthOffsetMeters\":0.003,\"elevationMeters\":1.72,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":0.45,\"rotationOffsetRadians\":0,\"wallId\":\"first-east-gallery-wall--split-3\"},\"size\":[0.22,0.32,0.16]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDeviceClasses\":[\"motion\",\"occupancy\",\"presence\"],\"compatibleDomains\":[\"binary_sensor\"],\"deviceRole\":\"primary\",\"id\":\"upper-landing-motion-sensor-entity\",\"presentation\":{\"dashboardRole\":\"diagnostic\",\"label\":\"Upper landing motion\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"upper-landing-motion-sensor\",\"kind\":\"device\",\"modelId\":\"motion-sensor\",\"placement\":{\"at\":[13.45,5.42],\"dropMeters\":0,\"kind\":\"ceiling\",\"roomId\":\"upper-landing\",\"rotationYRadians\":0},\"size\":[0.14,0.135,0.081]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"low-garden-lantern-primary\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Low garden lantern\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"low-garden-lantern\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"low-garden-lantern\",\"placement\":{\"at\":[10.700000000000001,-0.8],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.24,0.35,0.24],\"variant\":\"default\"},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"low-garden-lantern-primary-copy\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Low garden lantern\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"low-garden-lantern-copy\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"low-garden-lantern\",\"placement\":{\"at\":[13.200000000000001,-0.8],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.24,0.35,0.24],\"variant\":\"default\"},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"low-garden-lantern-2-primary\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Low garden lantern\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"low-garden-lantern-2\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"low-garden-lantern\",\"placement\":{\"at\":[10.700000000000001,-2.4000000000000004],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.24,0.35,0.24],\"variant\":\"default\"},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"low-garden-lantern-2-primary-copy\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Low garden lantern\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"low-garden-lantern-2-copy\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"low-garden-lantern\",\"placement\":{\"at\":[13.200000000000001,-2.4000000000000004],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.24,0.35,0.24],\"variant\":\"default\"},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"low-garden-lantern-2-primary-copy-copy\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Low garden lantern\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"low-garden-lantern-2-copy-copy\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"low-garden-lantern\",\"placement\":{\"at\":[13.200000000000001,-3.9000000000000004],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.24,0.35,0.24],\"variant\":\"default\"},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"low-garden-lantern-primary-copy-2\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Low garden lantern\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"low-garden-lantern-copy-2\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"low-garden-lantern\",\"placement\":{\"at\":[10.700000000000001,-3.9000000000000004],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.24,0.35,0.24],\"variant\":\"default\"},{\"floorId\":\"ground-floor\",\"id\":\"deciduous-tree\",\"kind\":\"furnishing\",\"modelId\":\"deciduous-tree\",\"placement\":{\"at\":[13.5,28.700000000000003],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[2.4,4.2,2.4],\"variant\":\"default\"},{\"floorId\":\"ground-floor\",\"id\":\"deciduous-tree-copy\",\"kind\":\"furnishing\",\"modelId\":\"deciduous-tree\",\"placement\":{\"at\":[15.200000000000001,25.900000000000002],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":4.71238898038469},\"size\":[2.4,4.2,2.4],\"variant\":\"default\"},{\"floorId\":\"ground-floor\",\"id\":\"deciduous-tree-copy-copy\",\"kind\":\"furnishing\",\"modelId\":\"deciduous-tree\",\"placement\":{\"at\":[0,-1.7000000000000002],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":4.71238898038469},\"size\":[2.4,4.2,2.4],\"variant\":\"default\"},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-reading-rug-copy\",\"kind\":\"furnishing\",\"modelId\":\"neutral-area-rug\",\"placement\":{\"at\":[10.700000000000001,14],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[4.5,0.015,3.6],\"variant\":\"terracotta\"},{\"floorId\":\"ground-floor\",\"id\":\"sectional-sofa\",\"kind\":\"furnishing\",\"modelId\":\"sectional-sofa\",\"placement\":{\"at\":[4.6000000000000005,15.200000000000001],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":4.71238898038469},\"size\":[2.93,1.227,1.63],\"variant\":\"cozy\"},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"media_player\"],\"deviceRole\":\"primary\",\"id\":\"television-primary\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Wall television\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"television\",\"kind\":\"device\",\"modelId\":\"wall-television\",\"placement\":{\"depthOffsetMeters\":0.005,\"elevationMeters\":1.08,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":3.0689,\"rotationOffsetRadians\":0,\"wallId\":\"ground-west-wall\"},\"size\":[2.4,1.36,0.07]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"media_player\"],\"deviceRole\":\"primary\",\"id\":\"open-plan-living-speaker-primary\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Living room speaker\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-speaker\",\"kind\":\"device\",\"modelId\":\"speaker\",\"placement\":{\"depthOffsetMeters\":0.21,\"elevationMeters\":0.55,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":2.45,\"rotationOffsetRadians\":0,\"wallId\":\"ground-west-wall\"},\"size\":[0.26,0.39,0.26]},{\"floorId\":\"ground-floor\",\"id\":\"low-media-console\",\"kind\":\"furnishing\",\"modelId\":\"low-media-console\",\"placement\":{\"depthOffsetMeters\":0.20999999999999996,\"elevationMeters\":0.001,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":3.0659,\"rotationOffsetRadians\":0,\"wallId\":\"ground-west-wall\"},\"size\":[1.6,0.55,0.42],\"variant\":\"default\"},{\"floorId\":\"ground-floor\",\"id\":\"outdoor-bbq\",\"kind\":\"furnishing\",\"modelId\":\"outdoor-bbq\",\"placement\":{\"at\":[1.1,18.900000000000002],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":1.5707963267948966},\"size\":[1.2,1.1,0.6],\"variant\":\"default\"},{\"floorId\":\"ground-floor\",\"id\":\"65f5e5b5-ba59-4c67-9019-2b8ab8cb9fec\",\"kind\":\"furnishing\",\"modelId\":\"neutral-area-rug\",\"placement\":{\"at\":[11.8,2.2],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[2,0.015,3],\"variant\":\"default\"},{\"floorId\":\"ground-floor\",\"id\":\"4e982529-1ef5-4f04-8d19-e9f75b64b2a3\",\"kind\":\"furnishing\",\"modelId\":\"book-row\",\"placement\":{\"depthOffsetMeters\":0.09,\"elevationMeters\":0.8442074652777777,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":6.578,\"rotationOffsetRadians\":0,\"wallId\":\"ground-west-day-wall\"},\"size\":[0.4,0.28,0.18],\"variant\":\"default\"},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"fan\"],\"deviceRole\":\"primary\",\"id\":\"fef4ac62-8237-49f5-b19c-2acf038007b2\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Ceiling fan\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"2c9cc397-ef42-4327-b280-30715919d7e5\",\"kind\":\"device\",\"modelId\":\"ceiling-fan\",\"placement\":{\"at\":[3.6,15.8],\"dropMeters\":0.403,\"kind\":\"ceiling\",\"roomId\":\"open-plan-living\",\"rotationYRadians\":0},\"size\":[1.2,0.4,1.2],\"variant\":\"default\"},{\"floorId\":\"ground-floor\",\"id\":\"foyer-coat-rack\",\"kind\":\"furnishing\",\"modelId\":\"wall-coat-rack\",\"placement\":{\"depthOffsetMeters\":0,\"elevationMeters\":1.25,\"face\":\"left\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":0.9774,\"rotationOffsetRadians\":0,\"wallId\":\"ground-service-divider\"},\"size\":[0.8,0.32,0.22],\"variant\":\"default\"},{\"floorId\":\"ground-floor\",\"id\":\"641f95a6-0ca9-4958-b0e6-f0ac0c3f08af\",\"kind\":\"furnishing\",\"modelId\":\"utility-shelving\",\"placement\":{\"depthOffsetMeters\":0.225,\"elevationMeters\":0.001,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":7.1459,\"rotationOffsetRadians\":0,\"wallId\":\"ground-north-wall\"},\"size\":[0.9,1.8,0.45],\"variant\":\"default\"},{\"floorId\":\"ground-floor\",\"id\":\"bde809ef-5910-40e3-b102-116a726c025f\",\"kind\":\"furnishing\",\"modelId\":\"toolbox\",\"placement\":{\"depthOffsetMeters\":0.12,\"elevationMeters\":1.7850711805555552,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":7.2502,\"rotationOffsetRadians\":0,\"wallId\":\"ground-north-wall\"},\"size\":[0.45,0.3,0.24],\"variant\":\"default\"},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"valve\",\"switch\"],\"deviceRole\":\"primary\",\"id\":\"02848dea-8596-4c2a-9106-99fa3943ccab\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Rotating sprinkler\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"9c927896-91a3-4db7-b905-9458172701a7\",\"kind\":\"device\",\"modelId\":\"rotating-sprinkler\",\"placement\":{\"at\":[8.4,-2.6],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.28,0.164,0.28],\"variant\":\"default\"},{\"floorId\":\"first-floor\",\"id\":\"ae250fd9-b5de-48dd-9a71-e8a9c7d818d5\",\"kind\":\"furnishing\",\"modelId\":\"neutral-area-rug\",\"placement\":{\"at\":[4.2,3.8000000000000003],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":6.283001142274436},\"size\":[2.4710575181141143,0.018532931385855857,3.7065862771711715],\"variant\":\"kilim\"},{\"floorId\":\"first-floor\",\"id\":\"primary-bedroom-reading-chair\",\"kind\":\"furnishing\",\"modelId\":\"sage-tub-armchair\",\"placement\":{\"at\":[2.9000000000000004,0.6000000000000001],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0.3325130789452819},\"size\":[0.78,0.86,0.8],\"variant\":\"default\"},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"camera\"],\"deviceRole\":\"primary\",\"id\":\"8547d43a-5958-4eac-a9ca-de5c8b12b891\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Indoor security camera\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"ef74193a-a255-4cdd-9186-801f7882ae7d\",\"kind\":\"device\",\"modelId\":\"indoor-security-camera\",\"placement\":{\"depthOffsetMeters\":0.05000000000000001,\"elevationMeters\":1.4475060763888883,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":0.8981,\"rotationOffsetRadians\":0,\"wallId\":\"first-north-wall\"},\"size\":[0.1,0.16,0.1],\"variant\":\"default\"},{\"id\":\"living-west-ac\",\"kind\":\"device\",\"modelId\":\"indoor-ac\",\"floorId\":\"ground-floor\",\"size\":[0.86,0.28,0.206],\"placement\":{\"kind\":\"wall\",\"wallId\":\"ground-west-wall\",\"face\":\"right\",\"offsetFromWallStartPlanUnits\":5.3177,\"elevationMeters\":1.8898,\"depthOffsetMeters\":0.004,\"rotationOffsetRadians\":0},\"entitySlots\":[{\"id\":\"living-west-ac-entity\",\"autoMap\":\"manual\",\"compatibleDomains\":[\"climate\"],\"deviceRole\":\"primary\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"West living room AC\"},\"required\":true}]},{\"id\":\"dining-pedestal-fan\",\"kind\":\"device\",\"modelId\":\"pedestal-fan\",\"floorId\":\"ground-floor\",\"size\":[0.45,1.35,0.4],\"placement\":{\"kind\":\"absolute\",\"at\":[13.5207,17.5304],\"elevationMeters\":0.001,\"rotationYRadians\":-2.235508463075441},\"entitySlots\":[{\"id\":\"dining-pedestal-fan-entity\",\"autoMap\":\"manual\",\"compatibleDomains\":[\"fan\"],\"deviceRole\":\"primary\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Dining pedestal fan\"},\"required\":true}]},{\"id\":\"living-west-floor-lamp\",\"kind\":\"device\",\"modelId\":\"floor-lamp\",\"floorId\":\"ground-floor\",\"size\":[0.652,1.796,0.652],\"placement\":{\"kind\":\"absolute\",\"at\":[0.5129,17.5525],\"elevationMeters\":0.001,\"rotationYRadians\":0},\"entitySlots\":[{\"id\":\"living-west-floor-lamp-entity\",\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Living room floor lamp\"},\"required\":true}]}]"), M_ = Ge(JSON.stringify({
	assumptions: [
		{
			basis: "user",
			id: "villa-mediterranean-refinement",
			subjectId: "south-garden-villa",
			summary: "The requested premium villa styling uses terracotta and sage rugs, a west reading lounge, dining storage, four pool loungers, a six-seat terrace table under the existing pergola, four olive trees and perimeter hedges. The pergola now uses the catalog string-lights device with a manual light slot and night-only scene state, retaining its existing placement and dimensions. Dimensions and finishes are inferred generic designs. Lawn contact is -49 mm and paved terrace contact -43 mm relative to the indoor datum, each allowing a 1 mm support gap."
		},
		{
			basis: "inferred",
			id: "villa-large-child-room",
			subjectId: "bedroom-two",
			summary: "The large northeast bedroom is interpreted as the requested child room; the primary suite remains the adult bedroom. A cabin bed, reading and play zones, toy storage and a colorful rug are inferred without child age or reference photos. Room identity and architecture are preserved."
		},
		{
			basis: "inferred",
			id: "villa-scale-and-orientation",
			subjectId: "south-garden-villa",
			summary: "No measured plan was supplied. The villa uses metre plan units with origin [0, 0], north at decreasing plan Y/front, and the garden at increasing plan Y/south. The ground shell is inferred as 24 by 18 m and the inset first floor as 20 by 16 m."
		},
		{
			basis: "inferred",
			id: "villa-vertical-dimensions",
			subjectId: "south-garden-villa",
			summary: "Ground walls and ceilings are inferred at 3.0 m with a 3.2 m floor-to-floor height. First-floor walls and ceilings are inferred at 2.9 m with a 3.1 m upper storey height. Exterior walls are 0.32 m and interior partitions are 0.16 m thick."
		},
		{
			basis: "inferred",
			id: "villa-layout-program",
			subjectId: "south-garden-villa",
			summary: "The ground floor prioritizes arrival and service rooms on the north, a central stair, a guest suite and study, and a large south-facing open kitchen/dining/living room. The first floor contains a primary suite, three additional bedrooms, a family bathroom, linen room, and central gallery landing."
		},
		{
			basis: "user",
			id: "villa-outdoor-layout",
			subjectId: "ground-floor",
			summary: "The rear garden keeps broad lawn margins around a compact 17 by 3.3 m house terrace and a 12.4 by 6.2 m pool surround. The 10 by 4.2 m pool is centered behind the house. At the street side, hardscape is limited to a 5.3 by 4 m garage approach and a 1.7 by 2.8 m entry path."
		},
		{
			basis: "inferred",
			id: "villa-surface-colors",
			subjectId: "south-garden-villa",
			summary: "The accepted demo export uses light oak in the main stair hall, open-plan living room and gallery, horizontal light oak in bedroom four, dark walnut in the primary bedroom and dressing room, square tile in the primary bathroom, and terrazzo in the central stair hall. The front driveway and entry path use limestone; terrace finishes are retained."
		},
		{
			basis: "user",
			id: "villa-layout-stage",
			subjectId: "south-garden-villa",
			summary: "The accepted architecture is preserved. All eighteen interior rooms are equipped in this revision, including two connected vehicles in the double garage. No Home Assistant area, entity, credential, or binding data is encoded."
		},
		{
			basis: "inferred",
			id: "open-plan-living-equipment",
			subjectId: "open-plan-living",
			summary: "With no reference photos supplied, the 220 m² open room is inferred as a west kitchen with peninsula, a central eight-seat dining area, and an east lounge facing a 2.4 m wall-mounted television above a low media console. Furniture keeps the three south terrace sliders and the main internal passages clear."
		},
		{
			basis: "inferred",
			id: "open-plan-living-device-slots",
			subjectId: "open-plan-living",
			summary: "Kitchen lighting, four pendants, wall television, speaker, floor lamp, and indoor AC use local typed slots only. The television and speaker map to separate simulated media players in the demo; household mapping remains manual. The single climate device may use unique-compatible mapping after the room is explicitly connected in the browser."
		},
		{
			basis: "user",
			id: "villa-wraparound-balcony",
			subjectId: "first-floor:platform-27",
			summary: "The default home includes the first-floor wraparound balcony from the supplied project export, with travertine finish and 1 m railings. Balcony access uses double white French doors at the existing south-facing window and the west-facing primary bedroom and bedroom four windows. Opening IDs and widths are retained; the 2.3 m door height is inferred."
		},
		{
			basis: "user",
			id: "demo-home-export-v5",
			subjectId: "a9654d69-cdb3-4f98-9ac1-39159767dbd6",
			summary: "The accepted Demo home export replaces the central stair with a 1 m wide left-turning L-shaped stair and left railing, removes the east-wall guest-bathroom window, updates room finishes and furnishings, and adds a ceiling fan, front-garden rotating sprinkler and primary-bedroom camera. Exported dimensions and positions are retained. The replacement coat rack and reading chair retain their previous repository IDs. Fan and sprinkler use local typed slots; demo simulation starts the fan at 50% speed and the sprinkler open. The camera has no simulated feed."
		},
		{
			id: "demo-living-comfort-v6",
			basis: "user",
			subjectId: "open-plan-living",
			summary: "The requested first floor is interpreted as the ground-floor living/dining level matching the supplied coordinates and television. Added a west-wall AC between the TV and window at offset 5.3177 m, elevation 1.8898 m and depth offset 0.004 m; a pedestal fan at [13.5207, 17.5304] rotated -128.0852 degrees; and a connected floor lamp at [0.5129, 17.5525]. Catalog default dimensions and 1 mm floor support gaps are inferred. Local slots use existing demo simulation: AC starts heating, fan starts at 50%, and lamp starts on at night."
		}
	],
	home: {
		id: "a9654d69-cdb3-4f98-9ac1-39159767dbd6",
		locale: "en",
		name: "Demo home",
		palette: {
			accent: "#d58b5d",
			exterior: "#d6c3aa",
			ground: "#8fa879",
			interior: "#eee7dc",
			secondary: "#78958a"
		},
		walkStart: {
			at: [5.41489357118754, 11.963419222707985],
			floorId: "ground-floor"
		}
	},
	openingProfiles: {
		"bedroom-four-door": {},
		"bedroom-four-west-window": {},
		"dining-terrace-slider": {},
		"dressing-landing-door": {},
		"first-floor:window-26": {},
		"front-entry-door": {},
		"garage-kitchen-door": {},
		"garage-motorized-vehicle-door": { coverSlot: {
			autoMap: "unique-compatible",
			id: "garage-motorized-vehicle-door-entity"
		} },
		"garage-pantry-door": {},
		"garage-utility-door": {},
		"garage-west-window": {},
		"guest-east-window": {},
		"kitchen-stair-passage": {},
		"landing-north-window": {},
		"living-east-window": {},
		"living-terrace-slider": {},
		"living-west-window": {},
		"pantry-kitchen-door": {},
		"pantry-stair-door": {},
		"primary-bath-dressing-door": {},
		"primary-bathroom-door": {},
		"primary-bathroom-west-window": {},
		"primary-bedroom-door": {},
		"primary-dressing-door": {},
		"primary-north-window": {},
		"primary-west-window": {},
		"stair-hall-south-passage": {},
		"utility-foyer-door": {},
		"utility-pantry-door": {}
	},
	roomProfiles: {
		"bedroom-four": { dashboardSlots: [] },
		"ground-floor:room-1": { dashboardSlots: [] },
		"ground-floor:room-2": { dashboardSlots: [] },
		"open-plan-living": { dashboardSlots: [] },
		pantry: { dashboardSlots: [] },
		"primary-bathroom": { dashboardSlots: [] },
		"primary-bedroom": { dashboardSlots: [] },
		"primary-dressing": { dashboardSlots: [] },
		"stair-hall": { dashboardSlots: [] },
		"upper-landing": { dashboardSlots: [] }
	},
	schemaVersion: 2,
	seedRevision: "demo-home-living-comfort-v6",
	shortcuts: [
		{
			action: "construct-mode",
			context: "overview",
			id: "villa-construct-mode",
			order: 0
		},
		{
			action: "arrange-mode",
			context: "overview",
			id: "villa-arrange-mode",
			order: 1
		},
		{
			action: "connect-mode",
			context: "overview",
			id: "villa-connect-mode",
			order: 2
		},
		{
			action: "walk-mode",
			context: "both",
			id: "villa-walk-mode",
			order: 3
		},
		{
			action: "lighting-mode",
			context: "both",
			id: "villa-lighting-mode",
			order: 4
		},
		{
			action: "wall-fade",
			context: "both",
			id: "villa-wall-fade",
			order: 5
		},
		{
			action: "all-lights",
			context: "both",
			id: "villa-all-lights",
			order: 6
		}
	],
	...A_,
	sceneItems: j_
}));
if (!M_.valid) throw Error(M_.issues.map((e) => e.message).join("\n"));
var N_ = M_.project, P_ = "#eee9de", F_ = "#f5f2eb", I_ = "#eee8dc", L_ = "#d3c9bc", R_ = "#b77b43", z_ = "#d09a62", B_ = "#b78332", V_ = "#292b2a", H_ = "#665c50";
function $({ size: e, position: t, color: n, outline: i = H_, receiveShadow: a = !1 }) {
	return /* @__PURE__ */ (0, U.jsxs)("mesh", {
		position: t,
		castShadow: !0,
		receiveShadow: a,
		children: [
			/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [...e] }),
			/* @__PURE__ */ (0, U.jsx)(I, { color: n }),
			/* @__PURE__ */ (0, U.jsx)(r, {
				thickness: .006,
				color: i,
				screenspace: !1
			})
		]
	});
}
function U_({ width: e, height: t, position: n }) {
	return /* @__PURE__ */ (0, U.jsxs)("mesh", {
		position: n,
		receiveShadow: !0,
		children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
			e,
			t,
			.018
		] }), /* @__PURE__ */ (0, U.jsx)(I, { color: F_ })]
	});
}
//#endregion
//#region home/src/extensions/kitchen/brass-cabinet-handle.tsx
function W_({ position: e, vertical: t = !1 }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		position: e,
		children: [/* @__PURE__ */ (0, U.jsx)($, {
			size: t ? [
				.024,
				.2,
				.024
			] : [
				.2,
				.024,
				.024
			],
			position: [
				0,
				0,
				0
			],
			color: B_,
			outline: "#6f4d20"
		}), [-1, 1].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
			castShadow: !0,
			position: t ? [
				0,
				e * .075,
				-.018
			] : [
				e * .075,
				0,
				-.018
			],
			children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
				.018,
				.018,
				.045
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: B_ })]
		}, e))]
	});
}
//#endregion
//#region home/src/extensions/kitchen/cabinet-joint.tsx
function G_({ from: e, to: t, color: n, thickness: r = .006 }) {
	let i = t[0] - e[0], a = t[1] - e[1], o = t[2] - e[2], s = Math.hypot(i, a, o), c = Math.hypot(i, o), l = -Math.atan2(o, i), u = Math.atan2(a, c);
	return /* @__PURE__ */ (0, U.jsxs)("mesh", {
		position: [
			(e[0] + t[0]) / 2,
			(e[1] + t[1]) / 2,
			(e[2] + t[2]) / 2
		],
		rotation: [
			0,
			l,
			u
		],
		children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
			s,
			r,
			r
		] }), /* @__PURE__ */ (0, U.jsx)(I, { color: n })]
	});
}
//#endregion
//#region home/src/extensions/kitchen/stone-vein.tsx
function K_({ points: e, width: t }) {
	return e.slice(1).map((n, r) => /* @__PURE__ */ (0, U.jsx)(G_, {
		from: e[r],
		to: n,
		color: L_,
		thickness: t
	}, `${n[0]}-${n[2]}`));
}
//#endregion
//#region home/src/extensions/kitchen/kitchen-cabinetry.tsx
var q_ = .55, J_ = .66, Y_ = 1.9000000000000001, X_ = 2.23, Z_ = 1.5550000000000002, Q_ = X_, $_ = Q_ / 1.65, ev = [
	{
		center: 1.09,
		width: .58,
		kind: "oven"
	},
	{
		center: 1.71,
		width: .66,
		kind: "door"
	},
	{
		center: 2.37,
		width: .66,
		kind: "door"
	},
	{
		center: 3.03,
		width: .66,
		kind: "door"
	},
	{
		center: 3.535,
		width: .35,
		kind: "door"
	}
], tv = [
	{
		center: 1.115,
		width: .67,
		kind: "solid"
	},
	{
		center: 1.64,
		width: .38,
		kind: "solid"
	},
	{
		center: 2.11,
		width: .56,
		kind: "microwave"
	},
	{
		center: 2.56,
		width: .34,
		kind: "glass",
		handleSide: 1
	},
	{
		center: 2.9,
		width: .34,
		kind: "glass",
		handleSide: -1
	},
	{
		center: 3.2,
		width: .26,
		kind: "glass",
		handleSide: 1
	},
	{
		center: 3.46,
		width: .26,
		kind: "glass",
		handleSide: -1
	},
	{
		center: 3.705,
		width: .23,
		kind: "solid"
	}
];
function nv() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "colonne-garde-manger",
		position: [
			.42,
			0,
			.3
		],
		children: [
			/* @__PURE__ */ (0, U.jsx)($, {
				size: [
					.72,
					Q_,
					.54
				],
				position: [
					0,
					Q_ / 2,
					0
				],
				color: P_
			}),
			/* @__PURE__ */ (0, U.jsx)(U_, {
				width: .68,
				height: 2.16,
				position: [
					0,
					Q_ / 2,
					.28
				]
			}),
			/* @__PURE__ */ (0, U.jsx)(G_, {
				from: [
					-.34,
					1.04 * $_,
					.291
				],
				to: [
					.34,
					1.04 * $_,
					.291
				],
				color: "#a69e93"
			}),
			/* @__PURE__ */ (0, U.jsx)(W_, {
				position: [
					.25,
					1.32 * $_,
					.335
				],
				vertical: !0
			}),
			/* @__PURE__ */ (0, U.jsx)(W_, {
				position: [
					.25,
					.68 * $_,
					.335
				],
				vertical: !0
			})
		]
	});
}
function rv({ width: e, position: t }) {
	let n = .64, r = .028;
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		position: t,
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					0,
					-.016
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					e - .035,
					.605,
					.018
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#69685f" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					0,
					.002
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					e - .045,
					.595,
					.008
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: "#c9cfca",
					transparent: !0,
					opacity: .24,
					depthWrite: !1,
					side: 2
				})]
			}),
			[-1, 1].map((t) => /* @__PURE__ */ (0, U.jsx)($, {
				size: [
					r,
					n,
					.026
				],
				position: [
					t * (e / 2 - r / 2),
					0,
					.018
				],
				color: F_,
				outline: "#a49c90"
			}, `vertical-${t}`)),
			[-1, 1].map((t) => /* @__PURE__ */ (0, U.jsx)($, {
				size: [
					e,
					r,
					.026
				],
				position: [
					0,
					t * (n / 2 - r / 2),
					.018
				],
				color: F_,
				outline: "#a49c90"
			}, `edge-${t}`)),
			/* @__PURE__ */ (0, U.jsx)($, {
				size: [
					r * .8,
					n - r * 2,
					.024
				],
				position: [
					0,
					0,
					.02
				],
				color: F_,
				outline: "#a49c90"
			}),
			[-1, 1].map((t) => /* @__PURE__ */ (0, U.jsx)($, {
				size: [
					e - r * 2,
					r * .8,
					.024
				],
				position: [
					0,
					n / 6 * t,
					.02
				],
				color: F_,
				outline: "#a49c90"
			}, `row-${t}`))
		]
	});
}
function iv({ center: e, width: t }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		position: [
			e,
			0,
			.31
		],
		children: [
			/* @__PURE__ */ (0, U.jsx)(U_, {
				width: t,
				height: .78,
				position: [
					0,
					.415,
					.291
				]
			}),
			/* @__PURE__ */ (0, U.jsx)(G_, {
				from: [
					-t / 2,
					.63,
					.304
				],
				to: [
					t / 2,
					.63,
					.304
				],
				color: "#aaa298"
			}),
			/* @__PURE__ */ (0, U.jsx)(W_, { position: [
				0,
				.7,
				.335
			] })
		]
	});
}
function av({ cabinet: e }) {
	return e.kind === "microwave" ? null : e.kind === "glass" ? /* @__PURE__ */ (0, U.jsxs)("group", {
		position: [
			e.center,
			q_,
			.25
		],
		children: [/* @__PURE__ */ (0, U.jsx)(rv, {
			width: e.width,
			position: [
				0,
				1.35,
				.235
			]
		}), /* @__PURE__ */ (0, U.jsx)(W_, {
			position: [
				e.handleSide * (e.width / 2 - .055),
				1.13,
				.285
			],
			vertical: !0
		})]
	}) : /* @__PURE__ */ (0, U.jsxs)("group", {
		position: [
			e.center,
			q_,
			.25
		],
		children: [/* @__PURE__ */ (0, U.jsx)(U_, {
			width: e.width,
			height: .64,
			position: [
				0,
				1.35,
				.211
			]
		}), /* @__PURE__ */ (0, U.jsx)(W_, {
			position: [
				(e.center < 2.8 ? 1 : -1) * (e.width / 2 - .055),
				1.13,
				.255
			],
			vertical: !0
		})]
	});
}
function ov() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "custom-kitchen-cabinetry",
		children: [
			/* @__PURE__ */ (0, U.jsx)(nv, {}),
			/* @__PURE__ */ (0, U.jsx)($, {
				size: [
					2.93,
					.79,
					.56
				],
				position: [
					2.245,
					.415,
					.31
				],
				color: P_
			}),
			ev.filter((e) => e.kind === "door").map((e) => /* @__PURE__ */ (0, U.jsx)(iv, {
				center: e.center,
				width: e.width
			}, e.center)),
			[
				1.38,
				2.04,
				2.7,
				3.36
			].map((e) => /* @__PURE__ */ (0, U.jsx)(G_, {
				from: [
					e,
					.035,
					.614
				],
				to: [
					e,
					.805,
					.614
				],
				color: "#aaa298"
			}, e)),
			/* @__PURE__ */ (0, U.jsx)($, {
				size: [
					3.04,
					J_,
					.4
				],
				position: [
					2.3,
					Y_,
					.25
				],
				color: P_
			}),
			tv.map((e) => /* @__PURE__ */ (0, U.jsx)(av, { cabinet: e }, e.center)),
			[
				1.45,
				1.83,
				2.39,
				2.73,
				3.07,
				3.33,
				3.59
			].map((e) => /* @__PURE__ */ (0, U.jsx)(G_, {
				from: [
					e,
					1.58,
					.474
				],
				to: [
					e,
					2.2199999999999998,
					.474
				],
				color: "#aaa298"
			}, e)),
			/* @__PURE__ */ (0, U.jsx)($, {
				size: [
					2.98,
					.085,
					.64
				],
				position: [
					2.27,
					.875,
					.33
				],
				color: I_,
				outline: "#81776b",
				receiveShadow: !0
			}),
			/* @__PURE__ */ (0, U.jsx)($, {
				size: [
					2.98,
					.19,
					.035
				],
				position: [
					2.27,
					1.005,
					.035
				],
				color: I_,
				outline: "#94897d"
			}),
			/* @__PURE__ */ (0, U.jsx)(K_, {
				points: [
					[
						1.43,
						.923,
						.08
					],
					[
						1.57,
						.925,
						.17
					],
					[
						1.7,
						.924,
						.31
					],
					[
						1.91,
						.927,
						.4
					],
					[
						2.1,
						.926,
						.56
					]
				],
				width: .007
			}),
			/* @__PURE__ */ (0, U.jsx)(K_, {
				points: [
					[
						2.86,
						.925,
						.09
					],
					[
						3.01,
						.927,
						.17
					],
					[
						3.09,
						.924,
						.31
					],
					[
						3.3,
						.927,
						.38
					],
					[
						3.5,
						.926,
						.52
					]
				],
				width: .006
			})
		]
	});
}
//#endregion
//#region home/src/extensions/kitchen/oven-and-hob.tsx
function sv() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "four-et-plaque-induction-custom",
		children: [
			/* @__PURE__ */ (0, U.jsx)($, {
				size: [
					.5,
					.57,
					.035
				],
				position: [
					1.09,
					.37,
					.612
				],
				color: V_,
				outline: "#171817"
			}),
			/* @__PURE__ */ (0, U.jsx)($, {
				size: [
					.43,
					.32,
					.018
				],
				position: [
					1.09,
					.29,
					.638
				],
				color: "#3d4543",
				outline: "#171817"
			}),
			/* @__PURE__ */ (0, U.jsx)($, {
				size: [
					.42,
					.035,
					.035
				],
				position: [
					1.09,
					.57,
					.655
				],
				color: "#8e8b83",
				outline: "#474640"
			}),
			[.93, 1.25].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.68,
					.645
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.035,
					.035,
					.025,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#a5a098" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsx)($, {
				size: [
					.5,
					.025,
					.42
				],
				position: [
					1.09,
					.93,
					.34
				],
				color: "#252827",
				outline: "#111312"
			}),
			[.96, 1.22].flatMap((e) => [.23, .45].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.95,
					t
				],
				rotation: [
					-Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("ringGeometry", { args: [
					.062,
					.078,
					24
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#454a48" })]
			}, `${e}-${t}`)))
		]
	});
}
//#endregion
//#region home/src/extensions/kitchen/integrated-microwave.tsx
function cv() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "micro-ondes-integre-custom",
		children: [
			/* @__PURE__ */ (0, U.jsx)($, {
				size: [
					.52,
					.43,
					.035
				],
				position: [
					2.11,
					1.8,
					.47
				],
				color: V_,
				outline: "#171817"
			}),
			/* @__PURE__ */ (0, U.jsx)($, {
				size: [
					.39,
					.24,
					.016
				],
				position: [
					2.11,
					1.77,
					.496
				],
				color: "#414846",
				outline: "#171817"
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					2.26,
					2,
					.498
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.13,
					.035,
					.014
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#6f756f" })]
			})
		]
	});
}
//#endregion
//#region home/src/extensions/kitchen/kitchen-sink.tsx
function lv() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "evier-et-robinet-custom",
		children: [
			/* @__PURE__ */ (0, U.jsx)($, {
				size: [
					.54,
					.022,
					.38
				],
				position: [
					2.55,
					.934,
					.34
				],
				color: "#aeb6b1",
				outline: "#66706c"
			}),
			/* @__PURE__ */ (0, U.jsx)($, {
				size: [
					.43,
					.018,
					.29
				],
				position: [
					2.55,
					.947,
					.34
				],
				color: "#77817d",
				outline: "#5a625f"
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					2.35,
					1.07,
					.19
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.022,
					.026,
					.28,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: B_ })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					2.45,
					1.2,
					.19
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("torusGeometry", { args: [
					.1,
					.022,
					8,
					18,
					Math.PI
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: B_ })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					2.55,
					1.12,
					.19
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.018,
					.018,
					.14,
					10
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: B_ })]
			})
		]
	});
}
//#endregion
//#region home/src/extensions/kitchen/kitchen-peninsula.tsx
function uv() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "retour-et-barre-du-u-custom",
		children: [
			/* @__PURE__ */ (0, U.jsx)($, {
				size: [
					.56,
					.83,
					1.7
				],
				position: [
					3.59,
					.425,
					1.15
				],
				color: P_,
				outline: "#71685d"
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					3.298,
					.43,
					1.15
				],
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.018,
					.72,
					1.64
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: F_ })]
			}),
			[
				.74,
				1.16,
				1.58
			].map((e) => /* @__PURE__ */ (0, U.jsx)(G_, {
				from: [
					3.286,
					.07,
					e
				],
				to: [
					3.286,
					.79,
					e
				],
				color: "#aaa298"
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(G_, {
				from: [
					3.286,
					.63,
					.34
				],
				to: [
					3.286,
					.63,
					1.96
				],
				color: "#aaa298"
			}),
			[
				.53,
				.95,
				1.37,
				1.79
			].map((e) => /* @__PURE__ */ (0, U.jsx)("group", {
				position: [
					3.255,
					.7,
					e
				],
				rotation: [
					0,
					Math.PI / 2,
					0
				],
				children: /* @__PURE__ */ (0, U.jsx)(W_, { position: [
					0,
					0,
					0
				] })
			}, e)),
			/* @__PURE__ */ (0, U.jsx)($, {
				size: [
					2.4,
					.83,
					.56
				],
				position: [
					2.59,
					.425,
					2.16
				],
				color: R_,
				outline: "#664326"
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					2.59,
					.43,
					2.449
				],
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					2.34,
					.72,
					.018
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: z_ })]
			}),
			[
				1.79,
				2.59,
				3.39
			].map((e) => /* @__PURE__ */ (0, U.jsx)(G_, {
				from: [
					e,
					.07,
					2.461
				],
				to: [
					e,
					.79,
					2.461
				],
				color: "#815b39"
			}, e)),
			/* @__PURE__ */ (0, U.jsx)($, {
				size: [
					.82,
					.095,
					1.9
				],
				position: [
					3.54,
					.89,
					1.2
				],
				color: I_,
				outline: "#81776b",
				receiveShadow: !0
			}),
			/* @__PURE__ */ (0, U.jsx)($, {
				size: [
					2.72,
					.095,
					.9
				],
				position: [
					2.59,
					.89,
					2.1
				],
				color: I_,
				outline: "#81776b",
				receiveShadow: !0
			}),
			/* @__PURE__ */ (0, U.jsx)(K_, {
				points: [
					[
						3.2,
						.942,
						.51
					],
					[
						3.34,
						.944,
						.72
					],
					[
						3.31,
						.943,
						.98
					],
					[
						3.53,
						.945,
						1.24
					],
					[
						3.62,
						.944,
						1.5
					],
					[
						3.83,
						.944,
						1.68
					]
				],
				width: .007
			}),
			/* @__PURE__ */ (0, U.jsx)(K_, {
				points: [
					[
						1.35,
						.944,
						1.82
					],
					[
						1.61,
						.945,
						1.93
					],
					[
						1.88,
						.943,
						1.98
					],
					[
						2.16,
						.945,
						2.13
					],
					[
						2.47,
						.944,
						2.18
					],
					[
						2.76,
						.946,
						2.34
					],
					[
						3.02,
						.944,
						2.38
					]
				],
				width: .006
			})
		]
	});
}
//#endregion
//#region home/src/extensions/kitchen/model.tsx
function dv({ size: e }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "equipped-kitchen-model",
		scale: [
			e[0] / 3.89,
			e[1] / 2.23,
			e[2] / 2.54
		],
		children: [
			/* @__PURE__ */ (0, U.jsx)(ov, {}),
			/* @__PURE__ */ (0, U.jsx)(sv, {}),
			/* @__PURE__ */ (0, U.jsx)(cv, {}),
			/* @__PURE__ */ (0, U.jsx)(lv, {}),
			/* @__PURE__ */ (0, U.jsx)(uv, {})
		]
	});
}
var fv = z({
	defaultRoomType: "kitchen",
	component: dv,
	label: "Equipped kitchen",
	category: "Kitchen",
	defaultSize: [
		3.89,
		2.23,
		2.54
	],
	bounds: {
		min: [
			.06,
			0,
			.01
		],
		max: [
			3.95,
			2.23,
			2.55
		]
	},
	resizePolicy: {
		kind: "axes",
		axes: ["width", "depth"]
	},
	preferredPlacement: "wall",
	outlineContact: !0,
	complexity: {
		visibleMeshes: 180,
		triangles: 34e3
	}
}), pv = "#fff2c8", mv = "#f2b75c", hv = 1.35 + .66 / 2 - .022;
function gv({ state: e }) {
	let t = c(e);
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "eclairage-cuisine-custom",
		children: [
			tv.filter((e) => e.kind === "glass").map((e) => /* @__PURE__ */ (0, U.jsxs)("group", {
				position: [
					e.center,
					q_,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
					position: [
						0,
						hv,
						.45
					],
					rotation: [
						Math.PI / 2,
						0,
						0
					],
					children: [/* @__PURE__ */ (0, U.jsx)("ringGeometry", { args: [
						.017,
						.027,
						20
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#ddd7ca" })]
				}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
					position: [
						0,
						1.6570000000000003,
						.45
					],
					rotation: [
						Math.PI / 2,
						0,
						0
					],
					children: [/* @__PURE__ */ (0, U.jsx)("circleGeometry", { args: [.016, 20] }), /* @__PURE__ */ (0, U.jsx)(I, {
						color: t > 0 ? pv : "#b9b1a0",
						emissive: mv,
						emissiveIntensity: t * .15
					})]
				})]
			}, e.center)),
			/* @__PURE__ */ (0, U.jsx)($, {
				size: [
					2.96,
					.025,
					.055
				],
				position: [
					2.27,
					Z_,
					.38
				],
				color: "#d9d4ca",
				outline: "#746e65"
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "kitchen-light-strip-emitter",
				position: [
					2.27,
					Z_ - .017,
					.38
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					2.9,
					.008,
					.038
				] }), /* @__PURE__ */ (0, U.jsx)(I, {
					color: t > 0 ? pv : "#b9b1a0",
					emissive: mv,
					emissiveIntensity: t * .27
				})]
			})
		]
	});
}
//#endregion
//#region home/src/extensions/kitchen/lighting-model.tsx
function _v({ state: e, visualState: t }) {
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: `device-state-${t}`,
		children: /* @__PURE__ */ (0, U.jsx)(gv, { state: e })
	});
}
var vv = P({
	defaultRoomType: "kitchen",
	component: _v,
	label: "Kitchen cabinet lighting",
	category: "Lighting",
	defaultSize: [
		3.89,
		2.23,
		2.54
	],
	bounds: {
		min: [
			0,
			0,
			0
		],
		max: [
			3.89,
			2.23,
			2.54
		]
	},
	resizePolicy: { kind: "fixed" },
	preferredPlacement: "absolute",
	supportedDomains: ["light"],
	mountKind: "surface",
	outlineContact: !1,
	sceneLight: {
		position: [
			2.27,
			2,
			2.1
		],
		color: "#ffd99b",
		maxIntensity: 5,
		distance: 6
	},
	interaction: {
		target: "device-dashboard",
		tapTolerancePixels: 10
	},
	complexity: {
		visibleMeshes: 11,
		triangles: 2e3
	}
}), yv = Fe({
	furnishingModels: {
		...k_,
		"equipped-kitchen": fv
	},
	deviceModels: { "kitchen-cabinet-lighting": vv },
	roomFurnishings: {},
	openingModels: {}
}), bv = Re(N_, yv), xv = De(Oo, bv.extensions.deviceModels), Sv = {
	furnishingModels: Object.assign(Object.create(null), k_, bv.extensions.furnishingModels),
	deviceModels: xv
}, Cv = (e) => Re(e, bv.extensions), wv = (e) => ({
	rooms: Object.fromEntries(e.floors.flatMap((e) => e.rooms).map((e) => [e.id, {
		room: e,
		displayName: e.name,
		pictureUrl: null,
		sections: {
			primary: [],
			secondary: [],
			diagnostic: []
		},
		devices: e.devices.map((e) => ({
			slot: e,
			entities: [],
			issues: []
		})),
		issues: []
	}])),
	openings: {},
	issues: []
}), Tv = (e, t) => {
	let n = O(ot(e), Sv), r = Qe(e, Sv), i = Je(t, "Home");
	return {
		...b(n, i),
		resetToSeed: (e) => te(n, e, Je(t, e.draft.home.name), 0),
		load: async () => {
			let e = await r.read(t);
			if (!e) throw Error("This workspace no longer exists.");
			if (e.record) return {
				status: "ready",
				record: e.record,
				source: "indexeddb"
			};
			let i = await n.readRaw(t);
			if (i === null) throw Error("This workspace is missing its saved home.");
			let a = Je(t, e.metadata.name);
			return {
				status: "recovery",
				record: {
					homeId: t,
					schemaVersion: 2,
					seedRevision: a.seedRevision,
					draft: a,
					published: structuredClone(a),
					draftUpdatedAt: Date.now(),
					publishedAt: 0,
					revision: 0,
					bindings: {}
				},
				raw: i,
				reason: e.error ?? "This home needs recovery.",
				issues: []
			};
		},
		recoverToSeed: async (e, r) => {
			try {
				let i = Je(t, e.draft.home.name);
				return {
					status: "saved",
					record: await n.recover(i, r, 0)
				};
			} catch (t) {
				return {
					status: "storage-error",
					record: e,
					error: t instanceof Error ? t : /* @__PURE__ */ Error("Recovery failed.")
				};
			}
		}
	};
};
async function Ev(e, t, n, r) {
	if (!t) return e;
	let i = fe(t);
	if (e.bindings[i]) return e;
	let a = n.getItem(_e(i, e.homeId)) ?? n.getItem(C(i, e.homeId));
	if (a === null) return e;
	let o = Cv(e.published), s = JSON.parse(a), c = ye(s, o);
	if (!c.valid || !c.profile) throw Error(`Saved connections need recovery: ${c.issues[0]?.message ?? "Invalid profile"}`);
	let l = ge(g(e.bindings, i, s, o, o), Cv(e.draft));
	return r({
		...e,
		bindings: l
	}, e.revision);
}
async function Dv(e, t) {
	let n = O(ot(window.indexedDB), Sv);
	return Ev(e, t, window.localStorage, (e, t) => n.replace(e, t));
}
//#endregion
//#region apps/web/src/editor-connect/profile-transfer.ts
function Ov(e, n, r, i) {
	let a = fe(n), o = JSON.parse(r), s = ye(o, i);
	if (!s.valid || !s.profile) throw Error(s.issues[0]?.message ?? "Invalid profile.");
	let c = {
		...e,
		[a]: {
			draft: o,
			published: e[a]?.published ?? Ue(i.home.id),
			manualRoomIds: i.floors.flatMap((e) => e.rooms).map((e) => e.id),
			manualSlotIds: t(i).map((e) => e.slotId)
		}
	}, l = ee({ [a]: {
		...c[a],
		published: s.profile
	} }, i, i);
	if (l.length) throw Error(l[0].message);
	return c;
}
function kv(e, n, r) {
	let i = An(n, r);
	if (i.record.homeId !== e.homeId) throw Error("This backup belongs to another home.");
	let a = i.record.draft, o = xe(a, {
		furnishingModels: {},
		deviceModels: {},
		openingModels: {}
	});
	return {
		project: a,
		bindings: {
			...ge(e.bindings, o),
			...Object.fromEntries(Object.entries(i.record.bindings).map(([n, r]) => [n, {
				...r,
				published: e.bindings[n]?.published ?? Ue(e.homeId),
				manualRoomIds: o.floors.flatMap((e) => e.rooms).map((e) => e.id),
				manualSlotIds: t(o).map((e) => e.slotId)
			}]))
		}
	};
}
function Av(e, t) {
	let n = URL.createObjectURL(new Blob([e], { type: "application/json" })), r = document.createElement("a");
	r.href = n, r.download = t, r.click(), URL.revokeObjectURL(n);
}
//#endregion
//#region apps/web/src/editor-chrome/EditorIcon.tsx
var jv = {
	niche: /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [/* @__PURE__ */ (0, U.jsx)("path", { d: "M3 21V3h18v18M6 18V6h12v12Z" }), /* @__PURE__ */ (0, U.jsx)("path", { d: "M6 12h12" })] }),
	decorations: /* @__PURE__ */ (0, U.jsx)(U.Fragment, { children: /* @__PURE__ */ (0, U.jsx)("path", { d: "M3 21h18M5 21V9h14v12M8 9V5h8v4M8 15h8" }) }),
	check: /* @__PURE__ */ (0, U.jsx)("path", { d: "m5 12 4 4L19 6" }),
	roof: /* @__PURE__ */ (0, U.jsx)("path", { d: "m2 12 10-8 10 8M5 10v10h14V10M2 12h20" }),
	spawn: /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [/* @__PURE__ */ (0, U.jsx)("path", { d: "M18 9c0 5-6 11-6 11S6 14 6 9a6 6 0 1 1 12 0Z" }), /* @__PURE__ */ (0, U.jsx)("circle", {
		cx: "12",
		cy: "9",
		r: "2"
	})] }),
	tutorial: /* @__PURE__ */ (0, U.jsx)(U.Fragment, { children: /* @__PURE__ */ (0, U.jsx)("path", { d: "M12 5v16M12 5C9 3 5 3 2 4v15c3-1 7-1 10 2 3-3 7-3 10-2V4c-3-1-7-1-10 1Z" }) }),
	stairs: /* @__PURE__ */ (0, U.jsx)("path", { d: "M3 21v-6h6V9h6V3h6M3 21h18V3" }),
	cube: /* @__PURE__ */ (0, U.jsx)("path", { d: "m12 3 9 5v8l-9 5-9-5V8Zm0 10 9-5M12 13 3 8m9 5v8" }),
	plan: /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [/* @__PURE__ */ (0, U.jsx)("rect", {
		x: "3",
		y: "3",
		width: "18",
		height: "18",
		rx: "1"
	}), /* @__PURE__ */ (0, U.jsx)("path", { d: "M10 3v8H3m7 0h5m-5 5v5m5-10h6" })] }),
	walk: /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [/* @__PURE__ */ (0, U.jsx)("circle", {
		cx: "12",
		cy: "4.6",
		r: "2"
	}), /* @__PURE__ */ (0, U.jsx)("path", { d: "m10.5 8-2 5 3 2.2-1.5 5M13.4 8.4l2.1 4.1 3 .5M11.5 15.2l4.3 4.3" })] }),
	back: /* @__PURE__ */ (0, U.jsx)("path", { d: "m10 5-7 7 7 7M3 12h18" }),
	external: /* @__PURE__ */ (0, U.jsx)("path", { d: "M14 3h7v7m0-7-11 11M9 4H4v16h16v-5" }),
	settings: /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [/* @__PURE__ */ (0, U.jsx)("circle", {
		cx: "12",
		cy: "12",
		r: "3"
	}), /* @__PURE__ */ (0, U.jsx)("path", { d: "M9 3h6l1 3 3 1 2 5-2 5-3 1-1 3H9l-1-3-3-1-2-5 2-5 3-1Z" })] }),
	import: /* @__PURE__ */ (0, U.jsx)("path", { d: "M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" }),
	export: /* @__PURE__ */ (0, U.jsx)("path", { d: "M12 15V3m-5 5 5-5 5 5M4 16v5h16v-5" }),
	grid: /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [
		/* @__PURE__ */ (0, U.jsx)("rect", {
			x: "3",
			y: "3",
			width: "7",
			height: "7",
			rx: "1"
		}),
		/* @__PURE__ */ (0, U.jsx)("rect", {
			x: "14",
			y: "3",
			width: "7",
			height: "7",
			rx: "1"
		}),
		/* @__PURE__ */ (0, U.jsx)("rect", {
			x: "3",
			y: "14",
			width: "7",
			height: "7",
			rx: "1"
		}),
		/* @__PURE__ */ (0, U.jsx)("rect", {
			x: "14",
			y: "14",
			width: "7",
			height: "7",
			rx: "1"
		})
	] }),
	kitchen: /* @__PURE__ */ (0, U.jsx)("path", { d: "M5 3v18M2 3v8h6V3m10 0q-5 4-4 10h4m0-10v18" }),
	bed: /* @__PURE__ */ (0, U.jsx)("path", { d: "M3 21V7m18 14V7M3 16h18M3 11h18v5M6 11V6h12v5M12 6v5" }),
	bath: /* @__PURE__ */ (0, U.jsx)("path", { d: "M2 11h20M4 11v4a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-4M6 19v2m12-2v2M5 11V5a3 3 0 0 1 6 0" }),
	dining: /* @__PURE__ */ (0, U.jsx)("path", { d: "M5 10h14v3H5zm2 3v8m10-8v8M2 4v13h3m17-13v13h-3" }),
	monitor: /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [/* @__PURE__ */ (0, U.jsx)("rect", {
		x: "4",
		y: "3",
		width: "16",
		height: "11",
		rx: "1"
	}), /* @__PURE__ */ (0, U.jsx)("path", { d: "M12 14v4m-5 0h10M2 21h20" })] }),
	hallway: /* @__PURE__ */ (0, U.jsx)("path", { d: "M3 21V3h18v18M8 21V8h8v13M3 3l5 5m13-5-5 5" }),
	laundry: /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [
		/* @__PURE__ */ (0, U.jsx)("rect", {
			x: "4",
			y: "2",
			width: "16",
			height: "20",
			rx: "2"
		}),
		/* @__PURE__ */ (0, U.jsx)("circle", {
			cx: "12",
			cy: "14",
			r: "5"
		}),
		/* @__PURE__ */ (0, U.jsx)("path", { d: "M4 7h16M7 4.5h.1M10 4.5h.1m-2 10q4-3 8 0" })
	] }),
	outdoor: /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [
		/* @__PURE__ */ (0, U.jsx)("path", { d: "M12 21v-8" }),
		/* @__PURE__ */ (0, U.jsx)("path", { d: "M12 13 7 16m5-3 5 3" }),
		/* @__PURE__ */ (0, U.jsx)("path", { d: "M5 12a4 4 0 0 1 3-6 4.5 4.5 0 0 1 8 0 4 4 0 0 1 3 6Z" })
	] }),
	search: /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [/* @__PURE__ */ (0, U.jsx)("circle", {
		cx: "10",
		cy: "10",
		r: "6"
	}), /* @__PURE__ */ (0, U.jsx)("path", { d: "m15 15 6 6" })] }),
	save: /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [/* @__PURE__ */ (0, U.jsx)("path", { d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12l4 4v12a2 2 0 0 1-2 2Z" }), /* @__PURE__ */ (0, U.jsx)("path", { d: "M7 3v6h10V3M7 21v-8h10v8" })] }),
	reset: /* @__PURE__ */ (0, U.jsx)("path", { d: "M3 4v6h6M3 10a9 9 0 1 1 2.5 8" }),
	close: /* @__PURE__ */ (0, U.jsx)("path", { d: "m6 6 12 12M6 18 18 6" }),
	details: /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [/* @__PURE__ */ (0, U.jsx)("circle", {
		cx: "12",
		cy: "12",
		r: "9"
	}), /* @__PURE__ */ (0, U.jsx)("path", { d: "M12 11v6m0-10v.1" })] }),
	duplicate: /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [/* @__PURE__ */ (0, U.jsx)("rect", {
		x: "8",
		y: "8",
		width: "12",
		height: "12",
		rx: "2"
	}), /* @__PURE__ */ (0, U.jsx)("path", { d: "M16 8V4H4v12h4" })] }),
	delete: /* @__PURE__ */ (0, U.jsx)("path", { d: "M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 10v7m4-7v7" }),
	rotateLeft: /* @__PURE__ */ (0, U.jsx)("path", { d: "M4 11a8 8 0 1 1 2 7M4 5v6h6" }),
	rotateRight: /* @__PURE__ */ (0, U.jsx)("path", { d: "M20 11a8 8 0 1 0-2 7m2-13v6h-6" }),
	swapHinge: /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [
		/* @__PURE__ */ (0, U.jsx)("path", { d: "M4 20V4h5m11 16V4h-5M7 12h10m-7-3-3 3 3 3m4-6 3 3-3 3" }),
		/* @__PURE__ */ (0, U.jsx)("circle", {
			cx: "4",
			cy: "20",
			r: "1"
		}),
		/* @__PURE__ */ (0, U.jsx)("circle", {
			cx: "20",
			cy: "20",
			r: "1"
		})
	] }),
	reverseSlide: /* @__PURE__ */ (0, U.jsx)("path", { d: "M3 7h18m-4-4 4 4-4 4M21 17H3m4-4-4 4 4 4" }),
	switchSide: /* @__PURE__ */ (0, U.jsx)("path", { d: "M3 10h18M3 14h18M12 2v6m-3-3 3-3 3 3M12 16v6m-3-3 3 3 3-3" }),
	resize: /* @__PURE__ */ (0, U.jsx)("path", { d: "M4 10V4h6M14 20h6v-6M4 4l16 16" }),
	elevation: /* @__PURE__ */ (0, U.jsx)("path", { d: "M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4" }),
	move: /* @__PURE__ */ (0, U.jsx)("path", { d: "M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3" }),
	select: /* @__PURE__ */ (0, U.jsx)("path", { d: "m5 3 14 10-7 1-3 7z" }),
	wall: /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [/* @__PURE__ */ (0, U.jsx)("rect", {
		x: "3",
		y: "5",
		width: "18",
		height: "14",
		rx: "1"
	}), /* @__PURE__ */ (0, U.jsx)("path", { d: "M3 12h18M9 5v7m6 0v7" })] }),
	door: /* @__PURE__ */ (0, U.jsx)("path", { d: "M4 21V3h16v18M7 21V6l10-2v17zM13 13h.1" }),
	window: /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [/* @__PURE__ */ (0, U.jsx)("rect", {
		x: "4",
		y: "4",
		width: "16",
		height: "16",
		rx: "1"
	}), /* @__PURE__ */ (0, U.jsx)("path", { d: "M12 4v16M4 12h16" })] }),
	passage: /* @__PURE__ */ (0, U.jsx)("path", { d: "M3 21h5V8a4 4 0 0 1 8 0v13h5M3 3h18M5 3v18m14-18v18" }),
	floor: /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [/* @__PURE__ */ (0, U.jsx)("path", { d: "M4 8 12 4l8 4-8 4-8-4Z" }), /* @__PURE__ */ (0, U.jsx)("path", { d: "m4 12 8 4 8-4M4 16l8 4 8-4" })] }),
	hedge: /* @__PURE__ */ (0, U.jsx)(U.Fragment, { children: /* @__PURE__ */ (0, U.jsx)("path", { d: "M3 18V9l3-3h12l3 3v9zM7 18v3m10-3v3M3 12h18M8 6v6m8-6v6" }) }),
	pool: /* @__PURE__ */ (0, U.jsx)(U.Fragment, { children: /* @__PURE__ */ (0, U.jsx)("path", { d: "M5 13V5a2 2 0 0 1 4 0m3 8V5a2 2 0 0 1 4 0M5 8h7M5 12h7M3 17q2-2 4 0t4 0 4 0 4 0m-16 4q2-2 4 0t4 0 4 0 4 0" }) }),
	measure: /* @__PURE__ */ (0, U.jsx)("path", { d: "m3 16 13-13 5 5L8 21zM8 11l2 2m2-6 2 2m2-6 2 2" }),
	undo: /* @__PURE__ */ (0, U.jsx)("path", { d: "m8 4-5 5 5 5M3 9h11a6 6 0 0 1 0 12h-3" }),
	redo: /* @__PURE__ */ (0, U.jsx)("path", { d: "m16 4 5 5-5 5m5-5H10a6 6 0 0 0 0 12h3" }),
	rooms: /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [/* @__PURE__ */ (0, U.jsx)("rect", {
		x: "3",
		y: "3",
		width: "18",
		height: "18",
		rx: "1"
	}), /* @__PURE__ */ (0, U.jsx)("path", { d: "M12 3v7m0 4v7M3 12h5m8 0h5" })] }),
	devices: /* @__PURE__ */ (0, U.jsx)("path", { d: "M9 3v6m6-6v6M6 9h12v3a6 6 0 0 1-12 0Zm6 9v3" }),
	refresh: /* @__PURE__ */ (0, U.jsx)("path", { d: "M20 4v6h-6M4 20v-6h6M19 8a7 7 0 0 0-12-3L4 8m1 8a7 7 0 0 0 12 3l3-3" }),
	warning: /* @__PURE__ */ (0, U.jsx)("path", { d: "M12 3 2 21h20ZM12 9v5m0 3v.1" }),
	plus: /* @__PURE__ */ (0, U.jsx)("path", { d: "M12 5v14M5 12h14" }),
	chevronLeft: /* @__PURE__ */ (0, U.jsx)("path", { d: "m15 5-7 7 7 7" }),
	chevron: /* @__PURE__ */ (0, U.jsx)("path", { d: "m9 5 7 7-7 7" })
};
function Mv({ name: e }) {
	return e === "construct" || e === "furnish" || e === "connect" ? /* @__PURE__ */ (0, U.jsx)(ne, {
		name: e,
		className: "editor-icon"
	}) : /* @__PURE__ */ (0, U.jsx)("svg", {
		className: "editor-icon",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.65",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": "true",
		focusable: "false",
		children: jv[e]
	});
}
//#endregion
//#region apps/web/src/editor-reference-plan/reference-storage.ts
var Nv = "cabane-reference-plans-v1";
async function Pv(e, t) {
	let n = await new Promise((e, t) => {
		let n = indexedDB.open(Nv, 1);
		n.onupgradeneeded = () => {
			n.result.createObjectStore("homes"), n.result.createObjectStore("assets");
		}, n.onsuccess = () => e(n.result), n.onerror = () => t(n.error ?? /* @__PURE__ */ Error("IndexedDB request failed."));
	});
	return new Promise((r, i) => {
		let a = n.transaction(["homes", "assets"], e), o;
		a.oncomplete = () => {
			n.close(), r(o);
		}, a.onerror = a.onabort = () => {
			n.close(), i(a.error ?? /* @__PURE__ */ Error("Reference storage failed."));
		};
		try {
			t(a, (e) => {
				o = e;
			});
		} catch (e) {
			a.abort(), i(e instanceof Error ? e : Error("Operation failed.", { cause: e }));
		}
	});
}
var Fv = (e) => Pv("readonly", (t, n) => {
	let r = t.objectStore("homes").get(e);
	r.onsuccess = () => n(r.result ?? {
		plans: {},
		preferences: {}
	});
}), Iv = (e, t, n) => Pv("readwrite", (r) => {
	for (let [t, i] of n) r.objectStore("assets").put(i, [e, t]);
	r.objectStore("homes").put(t, e);
}), Lv = (e, t) => Pv("readonly", (n, r) => {
	let i = n.objectStore("assets").get([e, t]);
	i.onsuccess = () => r(i.result);
}), Rv = (e, t) => Pv("readwrite", (n) => {
	let r = new Set(t), i = n.objectStore("assets").openKeyCursor();
	i.onsuccess = () => {
		let t = i.result;
		if (!t) return;
		let a = t.key;
		a[0] === e && !r.has(a[1]) && n.objectStore("assets").delete(t.key), t.continue();
	};
}), zv = (e) => Pv("readwrite", (t) => {
	t.objectStore("homes").delete(e);
	let n = t.objectStore("assets").openKeyCursor();
	n.onsuccess = () => {
		let r = n.result;
		r && (r.key[0] === e && t.objectStore("assets").delete(r.key), r.continue());
	};
}), Bv = /* @__PURE__ */ new Map();
function Vv(e) {
	if (Bv.has(e)) return Bv.get(e);
	try {
		let t = n(window.localStorage, e);
		return {
			state: t.record.buildTutorial,
			durable: t.durable
		};
	} catch {
		return {
			state: void 0,
			durable: !1
		};
	}
}
function Hv(e, t) {
	let r = !1;
	try {
		let { record: i } = n(window.localStorage, e);
		r = Ae(window.localStorage, e, {
			...i,
			buildTutorial: t
		});
	} catch {}
	return Bv.set(e, {
		state: t,
		durable: r
	}), r;
}
function Uv(e) {
	let t = Vv(e);
	return t.state ? t.durable : Hv(e, ae());
}
function Wv(e) {
	Bv.delete(e);
}
//#endregion
//#region apps/web/src/walk-tools.ts
var Gv = [{
	id: "cabane.laser",
	label: "Laser",
	defaultShortcut: !0,
	shortcutKey: "G",
	Icon: Ke,
	Scene: (0, R.lazy)(() => import("./LaserWalkTool-uqeX5C-9.js").then((e) => ({ default: e.LaserWalkTool })))
}];
//#endregion
//#region apps/web/src/editor-connect/useConnectSignIn.ts
function Kv(e, t) {
	let n = D(), [r, i] = (0, R.useState)(null), a = (0, R.useRef)(!1);
	return (0, R.useEffect)(() => {
		!r || e.origin !== r || e.status === "unconfigured" || [
			"authenticating",
			"connecting",
			"reconnecting"
		].includes(e.status) || (i(null), e.status !== "connected" && e.connect());
	}, [r, e]), async (o) => {
		if (!(a.current || r)) {
			a.current = !0;
			try {
				await t(o), n ? o === n.origin && e.origin === o && ["error", "disconnected"].includes(e.status) && e.retry() : i(o);
			} finally {
				a.current = !1;
			}
		}
	};
}
//#endregion
//#region apps/web/src/editor-connect/connect-navigation.ts
var qv = "cabane:editor-return:v1";
function Jv(e, t) {
	return we(e).find((n) => ue(e, n.id).some((e) => e.relationships.some((e) => e.id === t)));
}
function Yv(e, t) {
	try {
		if (!e) return null;
		let n = JSON.parse(e);
		if (!n || typeof n != "object" || Array.isArray(n)) return null;
		let r = n;
		if (!r || r.mode !== "connect" || typeof r.workspaceId != "string" || !r.workspaceId.trim() || t !== void 0 && r.workspaceId !== t) return null;
		let i = {
			workspaceId: r.workspaceId,
			...typeof r.floorId == "string" ? { floorId: r.floorId } : {},
			...r.panel === "home-assistant" ? { panel: "home-assistant" } : {},
			...[
				"sync",
				"dashboard",
				"device"
			].includes(String(r.destination)) ? { destination: r.destination } : {},
			mode: "connect",
			view: r.view === "devices" ? "devices" : "rooms",
			roomId: typeof r.roomId == "string" ? r.roomId : null,
			relationshipId: typeof r.relationshipId == "string" ? r.relationshipId : null
		};
		if (r.arrange && typeof r.arrange == "object") {
			let e = r.arrange;
			i.arrange = { selectedItemId: typeof e.selectedItemId == "string" ? e.selectedItemId : null };
			let t = e.camera, n = t && typeof t == "object" ? t : null, a = (e) => Array.isArray(e) && e.length === 3 && e.every((e) => typeof e == "number" && Number.isFinite(e));
			n && (n.view === "3d" || n.view === "top") && a(n.position) && a(n.target) && typeof n.zoom == "number" && Number.isFinite(n.zoom) && n.zoom >= 8 && n.zoom <= 180 && (i.arrange.camera = {
				view: n.view,
				position: n.position,
				target: n.target,
				zoom: n.zoom
			});
		}
		return i;
	} catch {
		return null;
	}
}
function Xv(e) {
	try {
		return typeof window > "u" ? null : Yv(window.sessionStorage.getItem(qv), e);
	} catch {
		return null;
	}
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/doors/door-frame-dimensions.ts
var Zv = .07, Qv = .025, $v = .003, ey = .003;
function ty(e, t, n, r, i, a = r / 2) {
	let o = Math.min(Zv / 2 + $v, e / 4), s = (e - 2 * o - (t === 2 ? ey : 0)) / t, c = t === 2 ? e / 2 - o - ey / 2 : e - o - Zv / 2 - .001, l = Math.sqrt(Math.max(0, c ** 2 - r ** 2));
	return {
		inset: o,
		leafWidth: Math.max(.08, Math.min(s, l)),
		pivotZ: i * (n + Qv) / 2,
		leafZ: -i * a
	};
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/doors/roll-up-door-frame.tsx
function ny({ width: e, color: t, height: n, depth: r, jambWidth: i, headerHeight: a }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "roll-up-door-frame",
		children: [[i / 2, e - i / 2].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
			position: [
				e,
				n / 2,
				0
			],
			castShadow: !0,
			receiveShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
				i,
				n,
				r
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: t ?? "#7d8581" })]
		}, e)), /* @__PURE__ */ (0, U.jsxs)("mesh", {
			position: [
				e / 2,
				n - a / 2,
				0
			],
			castShadow: !0,
			receiveShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
				e - i * 2,
				a,
				r
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: t ?? "#dddcd6" })]
		})]
	});
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/doors/roll-up-door-slats.tsx
function ry(e, t, n) {
	let r = t / (e.children.length - 1);
	e.children.forEach((e, i) => {
		if (e.name === "roll-up-door-handle") {
			e.position.y = .85 + n, e.visible = e.position.y + .025 < t;
			return;
		}
		let a = i * r + n, o = Math.max(0, Math.min(r, t - a));
		e.position.y = a + o / 2, e.scale.y = o / r, e.visible = o > 1e-6;
	});
}
function iy({ width: e, clearHeight: t, travel: n, finish: r, color: i, side: a, reducedMotion: o }) {
	let s = (0, R.useRef)(null), c = (0, R.useRef)(n), l = Se((e) => e.invalidate), u = Math.max(1, Math.ceil(t / .16)), d = t / u;
	return (0, R.useLayoutEffect)(() => {
		o && (c.current = n), c.current = Math.min(t, c.current), s.current && ry(s.current, t, c.current), l();
	}, [
		t,
		n,
		o,
		a,
		l
	]), F((e, r) => {
		if (!s.current || c.current === n) return;
		let i = n - c.current;
		c.current = o || Math.abs(i) < 1e-4 ? n : c.current + i * (1 - Math.exp(-5 * Math.min(r, .1))), ry(s.current, t, c.current), c.current !== n && l();
	}), /* @__PURE__ */ (0, U.jsxs)("group", {
		ref: s,
		name: "roll-up-door-slats",
		children: [Array.from({ length: u }, (t, n) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
			castShadow: !0,
			receiveShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
				e,
				d,
				.045
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: i ?? (r === "wood" ? n % 2 ? "#ba9365" : "#ad8559" : n % 2 ? "#e8e6df" : "#dddcd6") })]
		}, n)), /* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: "roll-up-door-handle",
			position: [
				0,
				0,
				a * .03
			],
			castShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
				Math.min(.32, e / 2),
				.04,
				.015
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#646b68" })]
		})]
	});
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/doors/roll-up-door-model.tsx
function ay({ wall: e, opening: t, floor: n, position: r, reducedMotion: i }) {
	let a = Te(e, t, n.coordinates), o = a.widthMeters, s = t.openingHeightMeters, c = et(o, s, r);
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "opening-roll-up-door",
		position: [
			a.start[0],
			t.sillHeightMeters,
			a.start[1]
		],
		rotation: [
			0,
			a.rotationY,
			0
		],
		children: [/* @__PURE__ */ (0, U.jsx)(ny, {
			...Pe({ color: t.color }),
			width: o,
			height: s,
			depth: e.thicknessMeters,
			...c
		}), /* @__PURE__ */ (0, U.jsx)("group", {
			position: [
				o / 2,
				0,
				0
			],
			children: /* @__PURE__ */ (0, U.jsx)(iy, {
				reducedMotion: i,
				width: c.clearWidth,
				...c,
				finish: t.finish,
				...Pe({ color: t.color }),
				side: t.openingSide === "left" ? -1 : 1
			})
		})]
	});
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/animation/animated-opening-leaf.tsx
function oy({ operation: e, open: t, reducedMotion: n, direction: r, travel: i, children: a }) {
	let o = (0, R.useRef)(null), { invalidate: s } = Se();
	return (0, R.useEffect)(() => {
		s();
	}, [
		s,
		t,
		e,
		n,
		r,
		i
	]), F((a, c) => {
		if (!o.current) return;
		let l = t && (e === "hinged" || e === "casement") ? r * (e === "hinged" ? Math.PI * .48 : .34) : 0, u = t && e === "sliding" ? r * i : 0, d = n ? 1 : 1 - Math.exp(-9 * c);
		o.current.rotation.y += (l - o.current.rotation.y) * d, o.current.position.x += (u - o.current.position.x) * d, (Math.abs(o.current.rotation.y - l) > .002 || Math.abs(o.current.position.x - u) > .002) && s();
	}), /* @__PURE__ */ (0, U.jsx)("group", {
		ref: o,
		name: "opening-leaf-motion",
		children: a
	});
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/doors/door-frame.tsx
function sy({ wall: e, width: t, height: n, color: i = "#d8d2c6" }) {
	return /* @__PURE__ */ (0, U.jsx)(U.Fragment, { children: [
		[
			0,
			n / 2,
			Zv,
			n + .08
		],
		[
			t,
			n / 2,
			Zv,
			n + .08
		],
		[
			t / 2,
			n + .031,
			t + Zv,
			.078
		]
	].map(([t, n, a, o], s) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
		name: `opening-door-frame-${s}`,
		position: [
			t,
			n,
			0
		],
		castShadow: !0,
		children: [
			/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
				a,
				o,
				e.thicknessMeters + Qv
			] }),
			/* @__PURE__ */ (0, U.jsx)(I, { color: i }),
			/* @__PURE__ */ (0, U.jsx)(r, {
				color: "#676965",
				thickness: .006,
				screenspace: !1
			})
		]
	}, s)) });
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/doors/white-lever-door-handles.tsx
function cy({ width: e, side: t }) {
	let n = Math.min(.027, e * .15), i = Math.min(.095, e * .5), a = Math.min(.035, e * .18);
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: "opening-white-lever-handles",
		position: [
			t * (e / 2 - Math.min(.08, e * .24)),
			-.01,
			0
		],
		children: [-1, 1].map((e) => /* @__PURE__ */ (0, U.jsxs)("group", { children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "white-lever-rosette",
				position: [
					0,
					0,
					e * .03
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					n,
					n,
					.01,
					16
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#f1f0eb" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "white-lever-neck",
				position: [
					0,
					0,
					e * .043
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.011,
					.011,
					.02,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#f1f0eb" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)(L, {
				name: "white-lever-arm",
				args: [
					i,
					.026,
					.02
				],
				position: [
					-t * a,
					0,
					e * .054
				],
				radius: .008,
				smoothness: 2,
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)(I, { color: "#f1f0eb" }), /* @__PURE__ */ (0, U.jsx)(r, {
					thickness: .0015,
					color: "#b9b7af",
					screenspace: !1
				})]
			})
		] }, e))
	});
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/doors/panel-door-handles.tsx
function ly({ width: e, side: t = 1 }) {
	let n = Math.min(.035, e * .15), i = Math.min(.16, e * .5), a = Math.min(.055, e * .18);
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: "opening-door-handles",
		position: [
			t * (e / 2 - Math.min(.13, e * .24)),
			-.01,
			0
		],
		children: [-1, 1].map((e) => /* @__PURE__ */ (0, U.jsxs)("group", { children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "opening-door-handle-rosette",
				castShadow: !0,
				position: [
					0,
					0,
					e * .034
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [
					/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
						n,
						n,
						.018,
						18
					] }),
					/* @__PURE__ */ (0, U.jsx)(I, { color: "#aeb4b2" }),
					/* @__PURE__ */ (0, U.jsx)(r, {
						thickness: .004,
						color: "#555b59",
						screenspace: !1
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				castShadow: !0,
				position: [
					0,
					0,
					e * .052
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.014,
					.014,
					.04,
					14
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#c3c7c5" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)(L, {
				args: [
					i,
					.026,
					.028
				],
				radius: .011,
				smoothness: 3,
				position: [
					-a * t,
					0,
					e * .076
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)(I, { color: "#b8bdbb" }), /* @__PURE__ */ (0, U.jsx)(r, {
					thickness: .004,
					color: "#555b59",
					screenspace: !1
				})]
			})
		] }, e))
	});
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/doors/concealed-door-leaf.tsx
function uy({ width: e, height: t, finish: n, color: r, handleSide: i }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "concealed-door-leaf",
		children: [/* @__PURE__ */ (0, U.jsx)(L, {
			args: [
				e,
				t,
				.05
			],
			radius: .002,
			smoothness: 2,
			castShadow: !0,
			children: /* @__PURE__ */ (0, U.jsx)(I, { color: r ?? (n === "white" ? "#f1f0eb" : "#b89a73") })
		}), /* @__PURE__ */ (0, U.jsx)(ly, {
			width: e,
			side: i
		})]
	});
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/doors/flush-door-leaf.tsx
function dy({ width: e, height: t, finish: n, color: r, handleSide: i = 1, knob: a = !1 }) {
	let o = Math.min(.36, e * .65);
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "flush-door-leaf",
		children: [/* @__PURE__ */ (0, U.jsx)(L, {
			args: [
				e,
				t,
				.02
			],
			radius: .002,
			smoothness: 2,
			castShadow: !0,
			children: /* @__PURE__ */ (0, U.jsx)(I, { color: r ?? (n === "white" ? "#e9e8e2" : "#b89a73") })
		}), a ? /* @__PURE__ */ (0, U.jsxs)("group", {
			name: "flush-door-knob",
			position: [
				i * (e / 2 - Math.min(.04, e * .2)),
				Math.min(1.05, t * .45) - t / 2,
				0
			],
			children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					0,
					.016
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
					.005,
					.005,
					.012,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#292c29" })]
			}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					0,
					.028
				],
				children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
					.012,
					16,
					10
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#292c29" })]
			})]
		}) : /* @__PURE__ */ (0, U.jsxs)("group", {
			name: "flush-door-pull",
			position: [
				0,
				Math.min(1.05, t * .45) - t / 2,
				0
			],
			children: [[-o * .4, o * .4].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					0,
					.0225
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.012,
					.012,
					.025
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#292c29" })]
			}, e)), /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					0,
					.044
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					o,
					.012,
					.018
				] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#292c29" })]
			})]
		})]
	});
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/opening-frame-box.tsx
function fy({ size: e, position: t, color: n = "#e7e2d8" }) {
	return /* @__PURE__ */ (0, U.jsxs)(L, {
		args: e,
		position: t,
		radius: Math.min(.008, ...e.map((e) => e / 2)),
		smoothness: 2,
		castShadow: !0,
		children: [/* @__PURE__ */ (0, U.jsx)(I, { color: n }), /* @__PURE__ */ (0, U.jsx)(r, {
			thickness: .004,
			color: "#77736d",
			screenspace: !1
		})]
	});
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/windows/framed-glass-panel.tsx
function py({ width: e, height: t, columns: n, rows: r, privacy: i = !1, frameDepth: a = .065, frameColor: o = "#e7e2d8" }) {
	let s = Math.min(.055, e * .14, t * .14), c = Math.max(.02, e - s * 2), l = Math.max(.02, t - s * 2), u = i && r === 2 ? [-l * .18] : Array.from({ length: Math.max(0, r - 1) }, (e, t) => -l / 2 + l * ((t + 1) / r));
	return /* @__PURE__ */ (0, U.jsxs)("group", { children: [
		/* @__PURE__ */ (0, U.jsxs)("mesh", {
			receiveShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
				c,
				l,
				.024
			] }), /* @__PURE__ */ (0, U.jsx)(I, {
				color: i ? "#aed8dc" : "#9bcbd2",
				transparent: !0,
				opacity: i ? .43 : .48,
				depthWrite: !1
			})]
		}),
		[-1, 1].map((n) => /* @__PURE__ */ (0, U.jsx)(fy, {
			size: [
				s,
				t,
				a
			],
			position: [
				n * (e / 2 - s / 2),
				0,
				0
			],
			color: o
		}, `vertical-${n}`)),
		[-1, 1].map((n) => /* @__PURE__ */ (0, U.jsx)(fy, {
			size: [
				e,
				s,
				a
			],
			position: [
				0,
				n * (t / 2 - s / 2),
				0
			],
			color: o
		}, `horizontal-${n}`)),
		Array.from({ length: Math.max(0, n - 1) }, (e, t) => /* @__PURE__ */ (0, U.jsx)(fy, {
			size: [
				.026,
				l,
				a * .7
			],
			position: [
				-c / 2 + c * ((t + 1) / n),
				0,
				.014
			],
			color: o
		}, `column-${t}`)),
		u.map((e, t) => /* @__PURE__ */ (0, U.jsx)(fy, {
			size: [
				c,
				i ? .022 : .026,
				a * .7
			],
			position: [
				0,
				e,
				.014
			],
			color: o
		}, `row-${t}`))
	] });
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/steel-glazing/arched-steel-glass-panel.tsx
function my({ width: e, height: t, privacy: n = !1, frameColor: r = "#292e2d" }) {
	let i = (0, R.useMemo)(() => {
		let n = e * .4, r = Math.min(.022, e * .055), i = -t / 2 + .055, a = t / 2 - .065 - n, o = new j();
		return o.moveTo(-n, i), o.lineTo(-n, a), o.absarc(0, a, n, Math.PI, 0, !0), o.lineTo(n, i), o.lineTo(n - r, i), o.lineTo(n - r, a), o.absarc(0, a, n - r, 0, Math.PI, !1), o.lineTo(-n + r, i), o.closePath(), o;
	}, [e, t]);
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "arched-steel-glass-panel",
		children: [/* @__PURE__ */ (0, U.jsx)(py, {
			width: e,
			height: t,
			columns: 1,
			rows: 1,
			privacy: n,
			frameDepth: .045,
			frameColor: r
		}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: "steel-arch",
			position: [
				0,
				0,
				-.018
			],
			castShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)("extrudeGeometry", { args: [i, {
				depth: .036,
				bevelEnabled: !1,
				curveSegments: 32
			}] }), /* @__PURE__ */ (0, U.jsx)(I, { color: r })]
		})]
	});
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/doors/glass-door-handle.tsx
function hy({ width: e, side: t }) {
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: "opening-glass-door-handle",
		position: [
			t * (e / 2 - Math.min(.1, e * .22)),
			-.02,
			0
		],
		children: [-1, 1].map((e) => /* @__PURE__ */ (0, U.jsxs)(L, {
			args: [
				.025,
				.24,
				.026
			],
			radius: .008,
			smoothness: 2,
			position: [
				0,
				0,
				e * .075
			],
			castShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)(I, { color: "#4f5655" }), /* @__PURE__ */ (0, U.jsx)(r, {
				thickness: .004,
				color: "#353938",
				screenspace: !1
			})]
		}, e))
	});
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/doors/plank-door-leaf.tsx
var gy = .065;
function _y({ width: e, height: t, handleSide: n, finish: i, color: a, railHangers: o = !0, depthScale: s = 1 }) {
	let c = i === "white", l = a ?? (c ? "#e6e3dc" : "#85583b"), u = a ?? (c ? "#f1f0eb" : "#9c6b49"), d = c ? "#bdbbb5" : "#68432e", f = Math.max(.02, e - Math.min(.12, e * .3)), p = Math.min(.1, e * .22), m = Math.min(.075, e * .22), h = Math.max(.2, t - .16), g = Math.max(4, Math.round(e / .096)), _ = f / g, v = Math.hypot(f, h), y = Math.atan2(h, f);
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		scale: [
			1,
			1,
			s
		],
		children: [
			/* @__PURE__ */ (0, U.jsxs)(L, {
				args: [
					e,
					t,
					gy
				],
				radius: .018,
				smoothness: 3,
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)(I, { color: l }), /* @__PURE__ */ (0, U.jsx)(r, {
					thickness: .006,
					color: d,
					screenspace: !1
				})]
			}),
			Array.from({ length: g }, (e, t) => {
				let n = -f / 2 + _ * (t + .5);
				return /* @__PURE__ */ (0, U.jsxs)("group", { children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
					position: [
						n,
						0,
						.04
					],
					castShadow: !0,
					children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						Math.max(.01, _ - .008),
						h,
						.018
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: t % 3 == 1 ? u : l })]
				}), t < g - 1 && /* @__PURE__ */ (0, U.jsxs)("mesh", {
					position: [
						n + _ / 2,
						0,
						.052
					],
					children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
						.006,
						h - .01,
						.009
					] }), /* @__PURE__ */ (0, U.jsx)(I, { color: d })]
				})] }, t);
			}),
			[-1, 1].map((n) => /* @__PURE__ */ (0, U.jsx)(fy, {
				size: [
					e - Math.min(.04, e * .12),
					.1,
					.045
				],
				position: [
					0,
					n * (t / 2 - .07),
					.068
				],
				color: d
			}, `plank-horizontal-${n}`)),
			[-1, 1].map((n) => /* @__PURE__ */ (0, U.jsx)(fy, {
				size: [
					p,
					t - .1,
					.045
				],
				position: [
					n * (e / 2 - p / 2),
					0,
					.068
				],
				color: d
			}, `plank-vertical-${n}`)),
			[-1, 1].map((e) => /* @__PURE__ */ (0, U.jsxs)(L, {
				args: [
					v,
					m,
					.045
				],
				radius: Math.min(.014, m / 4),
				smoothness: 2,
				rotation: [
					0,
					0,
					e * y
				],
				position: [
					0,
					0,
					.096
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)(I, { color: u }), /* @__PURE__ */ (0, U.jsx)(r, {
					thickness: .004,
					color: d,
					screenspace: !1
				})]
			}, e)),
			/* @__PURE__ */ (0, U.jsxs)("group", {
				name: "opening-plank-pull",
				position: [
					n * (e / 2 - Math.min(.17, e * .3)),
					0,
					.135
				],
				children: [[-1, 1].map((t) => /* @__PURE__ */ (0, U.jsx)(fy, {
					size: [
						Math.min(.07, e * .35),
						.08,
						.035
					],
					position: [
						0,
						t * .14,
						.014
					],
					color: "#747a79"
				}, t)), /* @__PURE__ */ (0, U.jsx)(fy, {
					size: [
						Math.min(.045, e * .25),
						.34,
						.045
					],
					position: [
						0,
						0,
						-.045
					],
					color: "#909695"
				})]
			}),
			o && [-.36, .36].map((n) => /* @__PURE__ */ (0, U.jsxs)("group", {
				name: "opening-plank-rail-hanger",
				position: [
					n * e,
					t / 2 + .06,
					.075
				],
				children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
					rotation: [
						Math.PI / 2,
						0,
						0
					],
					castShadow: !0,
					children: [
						/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
							.085,
							.085,
							.045,
							16
						] }),
						/* @__PURE__ */ (0, U.jsx)(I, { color: "#242525" }),
						/* @__PURE__ */ (0, U.jsx)(r, {
							thickness: .006,
							color: "#111212",
							screenspace: !1
						})
					]
				}), /* @__PURE__ */ (0, U.jsx)(fy, {
					size: [
						.075,
						.34,
						.04
					],
					position: [
						0,
						-.15,
						.02
					],
					color: "#242525"
				})]
			}, n))
		]
	});
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/doors/door-leaf.tsx
function vy({ opening: e, width: t, height: n, handleSide: i, plankDepthScale: a = 1 }) {
	let o = e.finish === "white", s = e.color ?? (o ? "#d8d2c6" : "#9c6b49");
	return e.variant === "concealed" ? /* @__PURE__ */ (0, U.jsx)(uy, {
		width: t,
		height: n,
		finish: e.finish,
		...Pe({ color: e.color }),
		handleSide: i
	}) : e.variant === "flush" || e.variant === "flush-knob" ? /* @__PURE__ */ (0, U.jsx)(dy, {
		width: t,
		height: n,
		finish: e.finish,
		...Pe({ color: e.color }),
		handleSide: i,
		knob: e.variant === "flush-knob"
	}) : e.variant === "steel-arched" ? /* @__PURE__ */ (0, U.jsxs)("group", { children: [/* @__PURE__ */ (0, U.jsx)(my, {
		width: t,
		height: n,
		...Pe({ frameColor: e.color })
	}), /* @__PURE__ */ (0, U.jsx)(hy, {
		width: t,
		side: i
	})] }) : e.variant === "french" || e.variant === "full-glass" ? /* @__PURE__ */ (0, U.jsxs)("group", { children: [/* @__PURE__ */ (0, U.jsx)(py, {
		width: t,
		height: n,
		columns: e.variant === "french" ? 2 : 1,
		rows: e.variant === "french" ? 5 : 1,
		frameColor: s
	}), e.variant === "french" ? /* @__PURE__ */ (0, U.jsx)(ly, {
		width: t,
		side: i
	}) : /* @__PURE__ */ (0, U.jsx)(hy, {
		width: t,
		side: i
	})] }) : e.variant === "plank" ? /* @__PURE__ */ (0, U.jsx)(_y, {
		width: t,
		height: n,
		handleSide: i,
		finish: e.finish,
		...Pe({ color: e.color }),
		depthScale: a,
		railHangers: e.operation === "sliding"
	}) : /* @__PURE__ */ (0, U.jsxs)("group", { children: [/* @__PURE__ */ (0, U.jsxs)(L, {
		args: [
			t,
			n,
			.05
		],
		radius: .018,
		smoothness: 3,
		castShadow: !0,
		children: [/* @__PURE__ */ (0, U.jsx)(I, { color: e.color ?? (o ? "#f1f0eb" : "#b89a73") }), /* @__PURE__ */ (0, U.jsx)(r, {
			color: o ? "#676965" : "#493c31",
			thickness: o ? .008 : .01,
			screenspace: !1
		})]
	}), e.variant === "panel-white-lever" ? /* @__PURE__ */ (0, U.jsx)(cy, {
		width: t,
		side: i
	}) : /* @__PURE__ */ (0, U.jsx)(ly, {
		width: t,
		side: i
	})] });
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/doors/plank-door-rail.tsx
var yy = .055, by = .004, xy = .04;
function Sy({ openingWidth: e, leafWidth: t, orientation: n }) {
	let r = Infinity, i = -Infinity;
	for (let a of n.leaves) {
		let n = a.startRatio * e, o = n + t, s = a.slideSign, c = n + s * t, l = o + s * t;
		r = Math.min(r, n, c), i = Math.max(i, o, l);
	}
	return {
		startX: r - xy,
		endX: i + xy
	};
}
function Cy({ width: e, height: t, wallThickness: n, leafWidth: r, orientation: i }) {
	let { startX: a, endX: o } = Sy({
		openingWidth: e,
		leafWidth: r,
		orientation: i
	}), s = o - a, c = (a + o) / 2, l = n / 2 + by + yy / 2;
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "opening-plank-rail",
		position: [
			0,
			0,
			l * i.sideSign
		],
		children: [/* @__PURE__ */ (0, U.jsx)("group", {
			name: "opening-plank-rail-bar",
			position: [
				c,
				0,
				0
			],
			children: /* @__PURE__ */ (0, U.jsx)(fy, {
				size: [
					s,
					.065,
					yy
				],
				position: [
					0,
					t + .13,
					0
				],
				color: "#242525"
			})
		}), [a, o].map((e) => /* @__PURE__ */ (0, U.jsx)(fy, {
			size: [
				.075,
				.13,
				yy
			],
			position: [
				e,
				t + .13,
				0
			],
			color: "#242525"
		}, e))]
	});
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/doors/door-model.tsx
var wy = .004;
function Ty({ wall: e, opening: t, floor: n, position: r, reducedMotion: i }) {
	if (t.operation === "roll-up") return /* @__PURE__ */ (0, U.jsx)(ay, {
		wall: e,
		opening: t,
		floor: n,
		position: r,
		reducedMotion: i
	});
	let a = Te(e, t, n.coordinates), o = re(t), s = t.leafCount === 2, c = t.variant === "concealed", l = t.frontSide === void 0 ? o.sideSign : t.frontSide === "left" ? -1 : 1, u = t.variant === "flush" || t.variant === "flush-knob", d = s ? 0 : u || c ? .006 : .018, f = u && t.variant !== "flush-knob" && !s ? Math.max(0, Math.min(t.frontOverlayMeters ?? .03, t.offsetFromWallStartPlanUnits * n.coordinates.metersPerPlanUnit, (se(e) - t.offsetFromWallStartPlanUnits - t.widthPlanUnits) * n.coordinates.metersPerPlanUnit)) : 0, p = t.operation === "hinged" && !u && !c && t.variant !== "full-glass" && t.variant !== "steel-arched", m = p && t.variant === "plank" ? Math.min(1, a.widthMeters / t.leafCount / .4) : 1, h = p ? ty(a.widthMeters, t.leafCount, e.thicknessMeters, t.variant === "panel" || t.variant === "panel-white-lever" ? .05 : t.variant === "plank" ? .151 * m : .065, o.sideSign, t.variant === "plank" ? .1185 * m : void 0) : null, g = h?.leafWidth ?? Math.max(.08, a.widthMeters / t.leafCount - d + 2 * f), _ = f > 0 ? f - d / 2 : 0, v = Math.max(.08, t.openingHeightMeters - (u || c ? .026 : .03)), y = t.operation === "sliding" && t.variant === "plank", b = e.thicknessMeters / 2 + wy + gy / 2;
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: `opening-model-${t.variant}`,
		position: [
			a.start[0],
			t.sillHeightMeters,
			a.start[1]
		],
		rotation: [
			0,
			a.rotationY,
			0
		],
		children: [
			t.variant !== "full-glass" && t.variant !== "steel-arched" && !u && !c && /* @__PURE__ */ (0, U.jsx)(sy, {
				...Pe({ color: t.color }),
				wall: e,
				width: a.widthMeters,
				height: t.openingHeightMeters
			}),
			t.operation === "sliding" && t.variant === "plank" && /* @__PURE__ */ (0, U.jsx)(Cy, {
				width: a.widthMeters,
				height: t.openingHeightMeters,
				wallThickness: e.thicknessMeters,
				leafWidth: g,
				orientation: o
			}),
			o.leaves.map((n, d) => {
				let f = t.operation === "hinged", p = f && n.hingeAtEnd, x = n.startRatio * a.widthMeters, S = f ? n.pivotRatio * a.widthMeters + (h ? p ? -h.inset : h.inset : p ? _ : -_) : x - _, C = p ? -g / 2 : g / 2, w = f ? n.rotationSign : n.slideSign;
				return /* @__PURE__ */ (0, U.jsx)("group", {
					...Pe({ name: y ? "opening-plank-sliding-leaf-mount" : void 0 }),
					position: [
						S,
						t.openingHeightMeters / 2,
						y ? b * o.sideSign : c ? (e.thicknessMeters / 2 - .025) * l : u ? (e.thicknessMeters / 2 + (t.frontOverlayMeters === 0 ? -.01 : .012)) * o.sideSign : h?.pivotZ ?? (s ? 0 : d % 2 == 0 ? -.016 : .016) * o.sideSign
					],
					children: /* @__PURE__ */ (0, U.jsx)(oy, {
						operation: t.operation,
						open: r > 0,
						reducedMotion: i,
						direction: w,
						travel: g,
						children: /* @__PURE__ */ (0, U.jsx)("group", {
							position: [
								C,
								0,
								h?.leafZ ?? 0
							],
							scale: [
								1,
								1,
								o.sideSign
							],
							children: /* @__PURE__ */ (0, U.jsx)(vy, {
								opening: t,
								width: g,
								height: v,
								plankDepthScale: m,
								handleSide: f ? n.extentSign : -n.slideSign
							})
						})
					})
				}, d);
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/passages/arched-passage-spandrel.ts
var Ey = (e, t) => {
	let n = e.openingHeightMeters - e.archRiseMeters, r = new j();
	return r.moveTo(0, n), r.quadraticCurveTo(t * .22, e.openingHeightMeters, t / 2, e.openingHeightMeters), r.quadraticCurveTo(t * .78, e.openingHeightMeters, t, n), r.lineTo(t, e.openingHeightMeters), r.lineTo(0, e.openingHeightMeters), r.closePath(), r;
};
//#endregion
//#region packages/catalog/src/architecture/presets/openings/passages/passage-model.tsx
function Dy({ wall: e, opening: t, floor: n }) {
	let r = Te(e, t, n.coordinates), { openingHeightMeters: i, variant: a } = t, o = t.variant === "arched" ? t.archRiseMeters : 0, s = (0, R.useMemo)(() => a === "arched" ? Ey({
		openingHeightMeters: i,
		archRiseMeters: o
	}, r.widthMeters) : null, [
		i,
		a,
		o,
		r.widthMeters
	]);
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: `opening-model-${t.variant}`,
		position: [
			r.start[0],
			t.sillHeightMeters,
			r.start[1]
		],
		rotation: [
			0,
			r.rotationY,
			0
		],
		children: s && /* @__PURE__ */ (0, U.jsxs)("mesh", {
			position: [
				0,
				0,
				-e.thicknessMeters / 2
			],
			castShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)("extrudeGeometry", { args: [s, {
				depth: e.thicknessMeters,
				bevelEnabled: !1
			}] }), /* @__PURE__ */ (0, U.jsx)(I, { color: l.interior })]
		})
	});
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/windows/window-handle.tsx
function Oy({ handleSide: e, faceSide: t, width: n, glazing: i }) {
	return i === "clear" ? /* @__PURE__ */ (0, U.jsx)("group", {
		name: "opening-window-handle-clear",
		position: [
			e * (n / 2 - Math.min(.07, n * .2)),
			-.02,
			t * .075
		],
		scale: [
			1,
			1,
			t
		],
		children: /* @__PURE__ */ (0, U.jsx)(fy, {
			size: [
				.045,
				.2,
				.055
			],
			position: [
				0,
				0,
				0
			]
		})
	}) : /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "opening-window-handle-privacy",
		position: [
			e * (n / 2 - Math.min(.07, n * .2)),
			-.08,
			t * .085
		],
		scale: [
			1,
			1,
			t
		],
		children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
			rotation: [
				Math.PI / 2,
				0,
				0
			],
			castShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)("cylinderGeometry", { args: [
				.025,
				.025,
				.03,
				12
			] }), /* @__PURE__ */ (0, U.jsx)(I, { color: "#747a79" })]
		}), /* @__PURE__ */ (0, U.jsxs)(L, {
			args: [
				.025,
				.16,
				.032
			],
			radius: .012,
			smoothness: 2,
			position: [
				0,
				-.055,
				.02
			],
			castShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)(I, { color: "#747a79" }), /* @__PURE__ */ (0, U.jsx)(r, {
				thickness: .004,
				color: "#353938",
				screenspace: !1
			})]
		})]
	});
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/windows/window-model.tsx
function ky({ wall: e, opening: t, floor: n, position: r, reducedMotion: i }) {
	let a = Te(e, t, n.coordinates), o = re(t), s = a.widthMeters / t.panelCount, c = t.variant === "muntined" ? t.muntins.columns : 1, l = t.variant === "muntined" ? t.muntins.rows : 1;
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: `opening-model-${t.variant}`,
		position: [
			a.start[0],
			t.sillHeightMeters + t.openingHeightMeters / 2,
			a.start[1]
		],
		rotation: [
			0,
			a.rotationY,
			0
		],
		children: [o.leaves.map((e, n) => {
			let u = e.pivotRatio * a.widthMeters, d = e.extentSign * s / 2;
			return /* @__PURE__ */ (0, U.jsx)("group", {
				position: [
					u,
					0,
					0
				],
				children: /* @__PURE__ */ (0, U.jsx)(oy, {
					operation: t.operation,
					open: r > 0,
					reducedMotion: i,
					direction: e.rotationSign,
					travel: 0,
					children: /* @__PURE__ */ (0, U.jsxs)("group", {
						position: [
							d,
							0,
							0
						],
						children: [t.variant === "steel-arched" ? /* @__PURE__ */ (0, U.jsx)(my, {
							width: Math.max(.08, s),
							height: t.openingHeightMeters,
							privacy: t.glazing === "privacy",
							...Pe({ frameColor: t.color })
						}) : /* @__PURE__ */ (0, U.jsx)(py, {
							width: Math.max(.08, s),
							height: t.openingHeightMeters,
							columns: c,
							rows: l,
							privacy: t.glazing === "privacy",
							...Pe({ frameColor: t.color }),
							frameDepth: t.glazing === "privacy" ? .105 : .09
						}), t.operation === "casement" && /* @__PURE__ */ (0, U.jsx)(Oy, {
							width: s,
							glazing: t.glazing,
							handleSide: e.extentSign,
							faceSide: o.sideSign
						})]
					})
				})
			}, n);
		}), t.variant !== "steel-arched" && /* @__PURE__ */ (0, U.jsx)(fy, {
			size: [
				a.widthMeters + .08,
				.055,
				e.thicknessMeters + .06
			],
			position: [
				a.widthMeters / 2,
				-t.openingHeightMeters / 2 - .02,
				0
			],
			...Pe({ color: t.color })
		})]
	});
}
//#endregion
//#region packages/catalog/src/architecture/registry.ts
var Ay = Xe({
	door: Ty,
	window: ky,
	passage: Dy
}), jy = [
	{
		id: "panel-wood",
		label: "Panel wood",
		configuration: ke
	},
	{
		id: "panel-white",
		label: "Panel white",
		configuration: {
			kind: "door",
			operation: "hinged",
			variant: "panel",
			finish: "white",
			leafCount: 1,
			widthMeters: .9,
			heightMeters: 2.04
		}
	},
	{
		id: "panel-white-lever",
		label: "Panel white · Compact lever",
		configuration: {
			kind: "door",
			operation: "hinged",
			variant: "panel-white-lever",
			finish: "white",
			leafCount: 1,
			widthMeters: .9,
			heightMeters: 2.04
		}
	},
	{
		id: "french",
		label: "French",
		configuration: {
			kind: "door",
			operation: "hinged",
			variant: "french",
			finish: "white",
			leafCount: 2,
			widthMeters: 1.6,
			heightMeters: 2.04
		}
	},
	{
		id: "full-glass",
		label: "Full glass",
		configuration: {
			kind: "door",
			operation: "hinged",
			variant: "full-glass",
			finish: "white",
			leafCount: 1,
			widthMeters: .9,
			heightMeters: 2.04
		}
	},
	{
		id: "sliding-wood",
		label: "Sliding wood",
		configuration: {
			kind: "door",
			operation: "sliding",
			variant: "plank",
			finish: "wood",
			leafCount: 1,
			widthMeters: .9,
			heightMeters: 2.04
		}
	},
	{
		id: "garage-door",
		label: "Garage door",
		configuration: {
			kind: "door",
			operation: "roll-up",
			variant: "slatted",
			finish: "white",
			widthMeters: 2.4,
			heightMeters: 2.1
		}
	},
	{
		id: "steel-arched",
		label: "Arched steel glass",
		configuration: {
			kind: "door",
			operation: "hinged",
			variant: "steel-arched",
			finish: "white",
			leafCount: 1,
			widthMeters: .9,
			heightMeters: 2.3
		}
	}
], My = () => void 0, Ny = {};
function Py({ entry: e }) {
	if (e.kind === "procedural") {
		let t = e.definition.component;
		return /* @__PURE__ */ (0, U.jsx)(t, {});
	}
	if (e.kind === "furnishing") {
		let t = e.definition.component;
		return /* @__PURE__ */ (0, U.jsx)(t, {
			variant: ce(e.definition).id,
			size: e.definition.defaultSize,
			entityStatesBySlotId: Ny,
			reducedMotion: !0,
			walkMode: !1,
			onInteract: My
		});
	}
	let t = e.definition.component;
	return /* @__PURE__ */ (0, U.jsx)(t, {
		variant: ce(e.definition).id,
		visualState: "disconnected",
		reducedMotion: !0,
		walkMode: !1,
		onInteract: My,
		slot: {
			id: `preview-${e.key}`,
			model: e.modelId,
			entitySlots: [],
			placement: {
				at: [0, 0],
				elevationMeters: 0,
				support: { kind: "surface" }
			}
		}
	});
}
//#endregion
//#region apps/web/src/editor-preview/furnish/catalog/thumbnailCache.ts
var Fy = "cabane-model-previews-7ab3a0a2812497e583db", Iy = /* @__PURE__ */ new Map(), Ly = 400;
function Ry(e, t) {
	Iy.delete(e), Iy.set(e, t), Iy.size > Ly && Iy.delete(Iy.keys().next().value);
}
async function zy() {
	return await caches.open(Fy);
}
async function By(e) {
	let t = Iy.get(e);
	if (t) return t;
	try {
		let t = await (await (await zy()).match(e))?.blob();
		return t && Ry(e, t), t;
	} catch {
		return;
	}
}
function Vy(e, t) {
	t.toBlob((t) => {
		t && (Ry(e, t), (async () => {
			try {
				let n = await zy();
				await n.put(e, new Response(t));
				let r = await n.keys();
				for (let e of r.slice(0, Math.max(0, r.length - Ly))) await n.delete(e);
				for (let e of await caches.keys()) e.startsWith("cabane-model-previews-") && e !== Fy && await caches.delete(e);
			} catch {}
		})());
	}, "image/png");
}
async function Hy(e, t, n, r, i) {
	let a = URL.createObjectURL(e);
	try {
		let e = new Image();
		if (e.src = a, await e.decode(), !i()) return !1;
		let o = t.getContext("2d");
		return o ? (t.width = n, t.height = r, o.drawImage(e, 0, 0, n, r), !0) : !1;
	} catch {
		return !1;
	} finally {
		URL.revokeObjectURL(a);
	}
}
//#endregion
//#region apps/web/src/editor-preview/furnish/catalog/ModelThumbnailRenderer.tsx
var Uy = (0, R.createContext)(() => () => void 0), Wy = class extends R.Component {
	state = { failed: !1 };
	static getDerivedStateFromError() {
		return { failed: !0 };
	}
	componentDidCatch() {
		this.props.onError();
	}
	render() {
		return this.state.failed ? null : this.props.children;
	}
};
function Gy({ onError: e }) {
	let t = Se((e) => e.gl);
	return (0, R.useEffect)(() => {
		let n = t.domElement;
		return n.addEventListener("webglcontextlost", e), () => n.removeEventListener("webglcontextlost", e);
	}, [t, e]), null;
}
function Ky({ request: e, aspect: t, done: n }) {
	let { invalidate: r, size: i } = Se(), a = (0, R.useRef)(new h(-1, 1, 1, -1, .01, 100)), o = (0, R.useRef)(!1), { min: s, max: c } = e.entry.definition.bounds, l = Math.max(...c.map((e, t) => e - s[t]), .01), u = s.map((e, t) => (e + c[t]) / 2), d = c.map((e, t) => (e - s[t]) / l);
	return (0, R.useLayoutEffect)(() => {
		let { min: t, max: n } = e.entry.definition.bounds, s = Math.max(...n.map((e, n) => e - t[n]), .01), c = n.map((e, n) => (e - t[n]) / s), l = a.current;
		l.position.set(3, 2.6, 4), l.lookAt(0, 0, 0), l.updateMatrixWorld(!0);
		let u = 0, d = 0;
		for (let e of [-1, 1]) for (let t of [-1, 1]) for (let n of [-1, 1]) {
			let r = new M(e * c[0] / 2, t * c[1] / 2, n * c[2] / 2).applyMatrix4(l.matrixWorldInverse);
			u = Math.max(u, Math.abs(r.x)), d = Math.max(d, Math.abs(r.y));
		}
		let f = i.width / i.height, p = Math.max(d, u / f, .1) * 1.3;
		l.left = -p * f, l.right = p * f, l.top = p, l.bottom = -p, l.updateProjectionMatrix(), o.current = !1, r();
	}, [
		e,
		i.width,
		i.height,
		r
	]), F(({ gl: r, scene: s }) => {
		if (o.current) return;
		let c = !1;
		if (s.traverse((e) => {
			e.name === "loading-imported-model" && (c = !0);
		}), !c && !(Math.abs(i.width - i.height * t) > 1)) {
			o.current = !0;
			try {
				r.setClearColor("#ebe9df", +!e.transparent), r.render(s, a.current);
				let t = e.canvas;
				if (t.isConnected) {
					let n = t.getBoundingClientRect(), i = Math.min(globalThis.devicePixelRatio || 1, 1.5);
					t.width = Math.max(1, Math.round(n.width * i)), t.height = Math.max(1, Math.round(n.height * i));
					let a = t.getContext("2d");
					if (!a) throw Error("Preview canvas unavailable");
					a.drawImage(r.domElement, 0, 0, t.width, t.height), e.cacheKey && Vy(e.cacheKey.replace(/[^/]+$/, `${t.width}:${t.height}`), t);
				}
				n(!1);
			} catch {
				n(!0);
			}
		}
	}, 1), /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [
		/* @__PURE__ */ (0, U.jsx)("hemisphereLight", { args: [
			"#fff8e9",
			"#c1c9b1",
			1.5
		] }),
		/* @__PURE__ */ (0, U.jsx)("directionalLight", {
			position: [
				3,
				7,
				5
			],
			intensity: 2.1
		}),
		/* @__PURE__ */ (0, U.jsx)("group", {
			scale: 1 / l,
			children: /* @__PURE__ */ (0, U.jsx)("group", {
				position: [
					-u[0],
					-u[1],
					-u[2]
				],
				children: /* @__PURE__ */ (0, U.jsx)(Py, { entry: e.entry })
			})
		}),
		[
			0,
			1,
			2,
			3,
			4
		].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
			position: [
				.01,
				-d[1] / 2 - .012 - e * .001,
				.01
			],
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			scale: [
				Math.max(d[0] * .52, .13) * (1 + e * .12),
				Math.max(d[2] * .5, .1) * (1 + e * .12),
				1
			],
			children: [/* @__PURE__ */ (0, U.jsx)("circleGeometry", { args: [1, 40] }), /* @__PURE__ */ (0, U.jsx)(I, {
				color: "#aebba0",
				transparent: !0,
				opacity: .045,
				depthWrite: !1
			})]
		}, e))
	] });
}
function qy({ children: e, scrollRoot: t, enabled: n }) {
	let r = (0, R.useRef)(/* @__PURE__ */ new Map()), i = (0, R.useRef)(null), a = (0, R.useRef)(!0), [o, s] = (0, R.useState)(null), [c, l] = (0, R.useState)(0), [u, d] = (0, R.useState)(!1), f = (0, R.useCallback)(() => {
		if (!a.current || i.current) return;
		let e = r.current.values().next().value;
		e && (r.current.delete(e.canvas), i.current = e, s(e), l((e) => e + 1));
	}, []), p = (0, R.useCallback)((e, t) => {
		i.current === e && (e.canvas.isConnected && e.report(t), queueMicrotask(() => {
			!a.current || i.current !== e || (i.current = null, s(null), f());
		}));
	}, [f]);
	(0, R.useEffect)(() => {
		a.current = !0;
		let e = r.current;
		return () => {
			a.current = !1, e.clear(), i.current = null;
		};
	}, []), (0, R.useEffect)(() => {
		n || (r.current.clear(), i.current = null, s(null), d(!1));
	}, [n]);
	let m = (0, R.useCallback)(() => {
		i.current?.report(!0), i.current = null, r.current.forEach((e) => e.report(!0)), r.current.clear(), s(null), d(!0);
	}, []), h = (0, R.useCallback)((e) => {
		if (!n || u) return u && e.report(!0), () => void 0;
		let i = !1, a = !1, o = 0, s = "", c = () => {
			if (!i) return;
			let t = e.canvas.getBoundingClientRect(), n = Math.min(globalThis.devicePixelRatio || 1, 1.5), c = Math.max(1, Math.round(t.width * n)), l = Math.max(1, Math.round(t.height * n)), u = `${c}:${l}`;
			if (t.width <= 0 || t.height <= 0 || u === s) return;
			s = u;
			let d = ++o, p = new URL(`/__cabane_preview__/${encodeURIComponent(e.entry.key)}/${e.transparent ? "clear" : "opaque"}/${u}`, location.origin).href, m = () => !a && i && o === d && e.canvas.isConnected;
			(async () => {
				let t = await By(p);
				if (m()) {
					if (t && await Hy(t, e.canvas, c, l, m)) {
						e.report(!1);
						return;
					}
					m() && (r.current.set(e.canvas, {
						...e,
						cacheKey: p
					}), f());
				}
			})();
		}, l = new IntersectionObserver(([t]) => {
			i = t.isIntersecting, i ? c() : (o++, r.current.delete(e.canvas), s = "");
		}, {
			root: t.current,
			rootMargin: "145px 0px"
		});
		l.observe(e.canvas);
		let d = new ResizeObserver(c);
		return d.observe(e.canvas), () => {
			a = !0, o++, l.disconnect(), d.disconnect(), r.current.delete(e.canvas);
		};
	}, [
		f,
		t,
		n,
		u
	]), g = o?.canvas.getBoundingClientRect(), _ = g && g.height > 0 ? g.width / g.height : 1.2;
	return /* @__PURE__ */ (0, U.jsxs)(Uy.Provider, {
		value: h,
		children: [e, n && !u && c > 0 && /* @__PURE__ */ (0, U.jsx)("div", {
			"aria-hidden": "true",
			className: "catalog-thumbnail-renderer",
			style: {
				width: 160 * _,
				height: 160
			},
			children: /* @__PURE__ */ (0, U.jsx)(Wy, {
				onError: m,
				children: /* @__PURE__ */ (0, U.jsxs)(Le, {
					events: tt,
					orthographic: !0,
					frameloop: "demand",
					dpr: Math.min(globalThis.devicePixelRatio || 1, 1.5),
					gl: {
						antialias: !0,
						alpha: !0,
						powerPreference: "low-power"
					},
					fallback: /* @__PURE__ */ (0, U.jsx)("span", { children: "Preview unavailable" }),
					children: [/* @__PURE__ */ (0, U.jsx)(Gy, { onError: m }), o && /* @__PURE__ */ (0, U.jsx)(Wy, {
						onError: () => p(o, !0),
						children: /* @__PURE__ */ (0, U.jsx)(Ky, {
							request: o,
							aspect: _,
							done: (e) => p(o, e)
						})
					}, c)]
				})
			})
		})]
	});
}
function Jy({ entry: e, showAdd: t = !0, fallback: n, transparent: r = !1 }) {
	let i = (0, R.useRef)(null), a = (0, R.useContext)(Uy), [o, s] = (0, R.useState)(!1);
	return (0, R.useEffect)(() => {
		if (i.current) return s(!1), a({
			canvas: i.current,
			entry: e,
			transparent: r,
			report: s
		});
	}, [
		e,
		a,
		r
	]), /* @__PURE__ */ (0, U.jsxs)("span", {
		className: "catalog-card__preview",
		children: [
			/* @__PURE__ */ (0, U.jsx)("canvas", {
				ref: i,
				"aria-hidden": "true"
			}),
			o && /* @__PURE__ */ (0, U.jsx)("span", {
				className: "catalog-card__fallback",
				children: n ?? "Preview unavailable"
			}),
			t && /* @__PURE__ */ (0, U.jsx)("span", {
				className: "catalog-card__plus",
				"aria-hidden": "true",
				children: "+"
			})
		]
	});
}
//#endregion
//#region apps/web/src/editor-action-bar/ShortcutDeviceIcon.tsx
function Yy({ children: e }) {
	let t = (0, R.useRef)(null);
	return /* @__PURE__ */ (0, U.jsx)(qy, {
		scrollRoot: t,
		enabled: !0,
		children: e
	});
}
function Xy({ modelId: e, models: t }) {
	let n = t[e], r = (0, R.useMemo)(() => n ? {
		key: `device:${e}`,
		kind: "device",
		modelId: e,
		definition: n
	} : null, [n, e]);
	return /* @__PURE__ */ (0, U.jsx)("span", {
		className: "scene-action-device-preview",
		children: r ? /* @__PURE__ */ (0, U.jsx)(Jy, {
			entry: r,
			showAdd: !1,
			transparent: !0,
			fallback: /* @__PURE__ */ (0, U.jsx)(Mv, { name: "devices" })
		}) : /* @__PURE__ */ (0, U.jsx)(Mv, { name: "devices" })
	});
}
//#endregion
export { Dv as A, Dn as B, Mv as C, Cv as D, kv as E, An as F, ot as H, Cn as I, wn as L, bv as M, N_ as N, Tv as O, Mn as P, Sn as R, Iv as S, Ov as T, Tn as V, Hv as _, jy as a, Lv as b, Ty as c, Xv as d, Kv as f, Vv as g, Wv as h, qy as i, Sv as j, wv as k, qv as l, Uv as m, Yy as n, Ay as o, Gv as p, Jy as r, ky as s, Xy as t, Jv as u, Rv as v, Av as w, Fv as x, zv as y, On as z };
