import { r as e } from "./rolldown-runtime-B0aSnxlc.js";
import { $r as t, $t as n, A as r, An as i, Bn as a, Br as o, Bt as s, Ct as c, Dn as l, Dr as u, Er as d, Fr as f, Hn as p, Ht as m, In as h, It as g, Jn as _, Jt as v, Kn as y, Kt as b, Lr as x, Lt as ee, Mi as S, Nr as C, O as w, On as T, Or as E, P as te, Pr as ne, Qr as re, R as ie, Rt as ae, Sn as D, Sr as O, Tr as k, U as oe, Un as se, Ur as ce, Ut as le, Vn as ue, Vt as A, Wn as de, Wr as fe, Wt as pe, Xt as me, Zn as he, Zr as ge, Zt as _e, _t as ve, an as ye, ar as be, ci as j, cn as xe, di as Se, ei as Ce, en as we, er as M, fi as Te, gt as Ee, ir as N, it as De, j as Oe, ji as ke, jn as P, kr as Ae, li as je, ln as Me, lr as Ne, n as F, nr as Pe, on as Fe, pn as Ie, qn as Le, qr as Re, qt as ze, rn as Be, t as Ve, ti as I, tn as He, ui as Ue, vi as We, vt as Ge, wn as Ke, wr as qe, wt as Je, xr as Ye, xt as Xe, y as Ze, zn as Qe, zr as $e } from "./LaserIcon-Den3PeOf.js";
//#region node_modules/@react-three/drei/core/Billboard.js
var L = /* @__PURE__ */ e(S()), et = /* @__PURE__ */ L.forwardRef(function({ children: e, follow: t = !0, lockX: n = !1, lockY: r = !1, lockZ: i = !1, ...a }, o) {
	let s = L.useRef(null), c = L.useRef(null), l = new fe();
	return N(({ camera: e }) => {
		if (!t || !c.current) return;
		let a = s.current.rotation.clone();
		c.current.updateMatrix(), c.current.updateWorldMatrix(!1, !1), c.current.getWorldQuaternion(l), e.getWorldQuaternion(s.current.quaternion).premultiply(l.invert()), n && (s.current.rotation.x = a.x), r && (s.current.rotation.y = a.y), i && (s.current.rotation.z = a.z);
	}), L.useImperativeHandle(o, () => c.current, []), /*#__PURE__*/ L.createElement("group", h({ ref: c }, a), /*#__PURE__*/ L.createElement("group", { ref: s }, e));
}), R = (e) => e, tt = (e) => e, nt = (e) => {
	if (e === void 0) return null;
	if (typeof e != "string") throw Error("The stored project record is not serialized JSON.");
	return e;
}, rt = (e) => {
	let t = async (t, n, r) => {
		let i = [];
		if (n !== null) {
			let e;
			try {
				e = JSON.parse(n);
			} catch {}
			e?.draft && e.published && (i = ue(e));
		}
		return i.length && await Qe(e).verify(i), Le(e, "readwrite", [
			de,
			y,
			se
		], (e, o, s) => {
			let c = e.objectStore(de), l = () => o(c.get(t), (e) => {
				if (nt(e) !== n) throw Error("Project record verification failed after storage write.");
				s(!0);
			}), u = () => {
				n === null ? o(c.delete(t), l) : o(c.put(n, t), () => {
					let r = e.objectStore(y);
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
				nt(e) === r ? d() : s(!1);
			});
		});
	};
	return {
		read: (t) => Le(e, "readonly", de, (e, n, r) => {
			n(e.objectStore(de).get(t), (e) => r(nt(e)));
		}),
		write: (e, n) => t(e, n).then(() => void 0),
		compareAndSwap: (e, n, r) => t(e, r, n),
		delete: (e) => t(e, null).then(() => void 0)
	};
}, z = Uint8Array, it = Uint16Array, at = Int32Array, ot = new z([
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
]), st = new z([
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
]), ct = new z([
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
]), lt = function(e, t) {
	for (var n = new it(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1];
	for (var i = new at(n[30]), r = 1; r < 30; ++r) for (var a = n[r]; a < n[r + 1]; ++a) i[a] = a - n[r] << 5 | r;
	return {
		b: n,
		r: i
	};
}, ut = lt(ot, 2), dt = ut.b, ft = ut.r;
dt[28] = 258, ft[258] = 28;
for (var pt = lt(st, 0), mt = pt.b, ht = pt.r, gt = new it(32768), B = 0; B < 32768; ++B) {
	var _t = (B & 43690) >> 1 | (B & 21845) << 1;
	_t = (_t & 52428) >> 2 | (_t & 13107) << 2, _t = (_t & 61680) >> 4 | (_t & 3855) << 4, gt[B] = ((_t & 65280) >> 8 | (_t & 255) << 8) >> 1;
}
for (var vt = (function(e, t, n) {
	for (var r = e.length, i = 0, a = new it(t); i < r; ++i) e[i] && ++a[e[i] - 1];
	var o = new it(t);
	for (i = 1; i < t; ++i) o[i] = o[i - 1] + a[i - 1] << 1;
	var s;
	if (n) {
		s = new it(1 << t);
		var c = 15 - t;
		for (i = 0; i < r; ++i) if (e[i]) for (var l = i << 4 | e[i], u = t - e[i], d = o[e[i] - 1]++ << u, f = d | (1 << u) - 1; d <= f; ++d) s[gt[d] >> c] = l;
	} else for (s = new it(r), i = 0; i < r; ++i) e[i] && (s[i] = gt[o[e[i] - 1]++] >> 15 - e[i]);
	return s;
}), yt = new z(288), B = 0; B < 144; ++B) yt[B] = 8;
for (var B = 144; B < 256; ++B) yt[B] = 9;
for (var B = 256; B < 280; ++B) yt[B] = 7;
for (var B = 280; B < 288; ++B) yt[B] = 8;
for (var bt = new z(32), B = 0; B < 32; ++B) bt[B] = 5;
var xt = /*#__PURE__*/ vt(yt, 9, 0), St = /*#__PURE__*/ vt(yt, 9, 1), Ct = /*#__PURE__*/ vt(bt, 5, 0), wt = /*#__PURE__*/ vt(bt, 5, 1), Tt = function(e) {
	for (var t = e[0], n = 1; n < e.length; ++n) e[n] > t && (t = e[n]);
	return t;
}, Et = function(e, t, n) {
	var r = t / 8 | 0;
	return (e[r] | e[r + 1] << 8) >> (t & 7) & n;
}, Dt = function(e, t) {
	var n = t / 8 | 0;
	return (e[n] | e[n + 1] << 8 | e[n + 2] << 16) >> (t & 7);
}, Ot = function(e) {
	return (e + 7) / 8 | 0;
}, kt = function(e, t, n) {
	return (t == null || t < 0) && (t = 0), (n == null || n > e.length) && (n = e.length), new z(e.subarray(t, n));
}, At = [
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
], V = function(e, t, n) {
	var r = Error(t || At[e]);
	if (r.code = e, Error.captureStackTrace && Error.captureStackTrace(r, V), !n) throw r;
	return r;
}, jt = function(e, t, n, r) {
	var i = e.length, a = r ? r.length : 0;
	if (!i || t.f && !t.l) return n || new z(0);
	var o = !n, s = o || t.i != 2, c = t.i;
	o && (n = new z(i * 3));
	var l = function(e) {
		var t = n.length;
		if (e > t) {
			var r = new z(Math.max(t * 2, e));
			r.set(n), n = r;
		}
	}, u = t.f || 0, d = t.p || 0, f = t.b || 0, p = t.l, m = t.d, h = t.m, g = t.n, _ = i * 8;
	do {
		if (!p) {
			u = Et(e, d, 1);
			var v = Et(e, d + 1, 3);
			if (d += 3, !v) {
				var y = Ot(d) + 4, b = e[y - 4] | e[y - 3] << 8, x = y + b;
				if (x > i) {
					c && V(0);
					break;
				}
				s && l(f + b), n.set(e.subarray(y, x), f), t.b = f += b, t.p = d = x * 8, t.f = u;
				continue;
			}
			if (v == 1) p = St, m = wt, h = 9, g = 5;
			else if (v == 2) {
				var ee = Et(e, d, 31) + 257, S = Et(e, d + 10, 15) + 4, C = ee + Et(e, d + 5, 31) + 1;
				d += 14;
				for (var w = new z(C), T = new z(19), E = 0; E < S; ++E) T[ct[E]] = Et(e, d + E * 3, 7);
				d += S * 3;
				for (var te = Tt(T), ne = (1 << te) - 1, re = vt(T, te, 1), E = 0; E < C;) {
					var ie = re[Et(e, d, ne)];
					d += ie & 15;
					var y = ie >> 4;
					if (y < 16) w[E++] = y;
					else {
						var ae = 0, D = 0;
						for (y == 16 ? (D = 3 + Et(e, d, 3), d += 2, ae = w[E - 1]) : y == 17 ? (D = 3 + Et(e, d, 7), d += 3) : y == 18 && (D = 11 + Et(e, d, 127), d += 7); D--;) w[E++] = ae;
					}
				}
				var O = w.subarray(0, ee), k = w.subarray(ee);
				h = Tt(O), g = Tt(k), p = vt(O, h, 1), m = vt(k, g, 1);
			} else V(1);
			if (d > _) {
				c && V(0);
				break;
			}
		}
		s && l(f + 131072);
		for (var oe = (1 << h) - 1, se = (1 << g) - 1, ce = d;; ce = d) {
			var ae = p[Dt(e, d) & oe], le = ae >> 4;
			if (d += ae & 15, d > _) {
				c && V(0);
				break;
			}
			if (ae || V(2), le < 256) n[f++] = le;
			else if (le == 256) {
				ce = d, p = null;
				break;
			} else {
				var ue = le - 254;
				if (le > 264) {
					var E = le - 257, A = ot[E];
					ue = Et(e, d, (1 << A) - 1) + dt[E], d += A;
				}
				var de = m[Dt(e, d) & se], fe = de >> 4;
				de || V(3), d += de & 15;
				var k = mt[fe];
				if (fe > 3) {
					var A = st[fe];
					k += Dt(e, d) & (1 << A) - 1, d += A;
				}
				if (d > _) {
					c && V(0);
					break;
				}
				s && l(f + 131072);
				var pe = f + ue;
				if (f < k) {
					var me = a - k, he = Math.min(k, pe);
					for (me + f < 0 && V(3); f < he; ++f) n[f] = r[me + f];
				}
				for (; f < pe; ++f) n[f] = n[f - k];
			}
		}
		t.l = p, t.p = ce, t.b = f, t.f = u, p && (u = 1, t.m = h, t.d = m, t.n = g);
	} while (!u);
	return f != n.length && o ? kt(n, 0, f) : n.subarray(0, f);
}, Mt = function(e, t, n) {
	n <<= t & 7;
	var r = t / 8 | 0;
	e[r] |= n, e[r + 1] |= n >> 8;
}, Nt = function(e, t, n) {
	n <<= t & 7;
	var r = t / 8 | 0;
	e[r] |= n, e[r + 1] |= n >> 8, e[r + 2] |= n >> 16;
}, Pt = function(e, t) {
	for (var n = [], r = 0; r < e.length; ++r) e[r] && n.push({
		s: r,
		f: e[r]
	});
	var i = n.length, a = n.slice();
	if (!i) return {
		t: Vt,
		l: 0
	};
	if (i == 1) {
		var o = new z(n[0].s + 1);
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
	var p = new it(f + 1), m = Ft(n[u - 1], p, 0);
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
		t: new z(p),
		l: m
	};
}, Ft = function(e, t, n) {
	return e.s == -1 ? Math.max(Ft(e.l, t, n + 1), Ft(e.r, t, n + 1)) : t[e.s] = n;
}, It = function(e) {
	for (var t = e.length; t && !e[--t];);
	for (var n = new it(++t), r = 0, i = e[0], a = 1, o = function(e) {
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
}, Lt = function(e, t) {
	for (var n = 0, r = 0; r < t.length; ++r) n += e[r] * t[r];
	return n;
}, Rt = function(e, t, n) {
	var r = n.length, i = Ot(t + 2);
	e[i] = r & 255, e[i + 1] = r >> 8, e[i + 2] = e[i] ^ 255, e[i + 3] = e[i + 1] ^ 255;
	for (var a = 0; a < r; ++a) e[i + a + 4] = n[a];
	return (i + 4 + r) * 8;
}, zt = function(e, t, n, r, i, a, o, s, c, l, u) {
	Mt(t, u++, n), ++i[256];
	for (var d = Pt(i, 15), f = d.t, p = d.l, m = Pt(a, 15), h = m.t, g = m.l, _ = It(f), v = _.c, y = _.n, b = It(h), x = b.c, ee = b.n, S = new it(19), C = 0; C < v.length; ++C) ++S[v[C] & 31];
	for (var C = 0; C < x.length; ++C) ++S[x[C] & 31];
	for (var w = Pt(S, 7), T = w.t, E = w.l, te = 19; te > 4 && !T[ct[te - 1]]; --te);
	var ne = l + 5 << 3, re = Lt(i, yt) + Lt(a, bt) + o, ie = Lt(i, f) + Lt(a, h) + o + 14 + 3 * te + Lt(S, T) + 2 * S[16] + 3 * S[17] + 7 * S[18];
	if (c >= 0 && ne <= re && ne <= ie) return Rt(t, u, e.subarray(c, c + l));
	var ae, D, O, k;
	if (Mt(t, u, 1 + (ie < re)), u += 2, ie < re) {
		ae = vt(f, p, 0), D = f, O = vt(h, g, 0), k = h;
		var oe = vt(T, E, 0);
		Mt(t, u, y - 257), Mt(t, u + 5, ee - 1), Mt(t, u + 10, te - 4), u += 14;
		for (var C = 0; C < te; ++C) Mt(t, u + 3 * C, T[ct[C]]);
		u += 3 * te;
		for (var se = [v, x], ce = 0; ce < 2; ++ce) for (var le = se[ce], C = 0; C < le.length; ++C) {
			var ue = le[C] & 31;
			Mt(t, u, oe[ue]), u += T[ue], ue > 15 && (Mt(t, u, le[C] >> 5 & 127), u += le[C] >> 12);
		}
	} else ae = xt, D = yt, O = Ct, k = bt;
	for (var C = 0; C < s; ++C) {
		var A = r[C];
		if (A > 255) {
			var ue = A >> 18 & 31;
			Nt(t, u, ae[ue + 257]), u += D[ue + 257], ue > 7 && (Mt(t, u, A >> 23 & 31), u += ot[ue]);
			var de = A & 31;
			Nt(t, u, O[de]), u += k[de], de > 3 && (Nt(t, u, A >> 5 & 8191), u += st[de]);
		} else Nt(t, u, ae[A]), u += D[A];
	}
	return Nt(t, u, ae[256]), u + D[256];
}, Bt = /*#__PURE__*/ new at([
	65540,
	131080,
	131088,
	131104,
	262176,
	1048704,
	1048832,
	2114560,
	2117632
]), Vt = /*#__PURE__*/ new z(0), Ht = function(e, t, n, r, i, a) {
	var o = a.z || e.length, s = new z(r + o + 5 * (1 + Math.ceil(o / 7e3)) + i), c = s.subarray(r, s.length - i), l = a.l, u = (a.r || 0) & 7;
	if (t) {
		u && (c[0] = a.r >> 3);
		for (var d = Bt[t - 1], f = d >> 13, p = d & 8191, m = (1 << n) - 1, h = a.p || new it(32768), g = a.h || new it(m + 1), _ = Math.ceil(n / 3), v = 2 * _, y = function(t) {
			return (e[t] ^ e[t + 1] << _ ^ e[t + 2] << v) & m;
		}, b = new at(25e3), x = new it(288), ee = new it(32), S = 0, C = 0, w = a.i || 0, T = 0, E = a.w || 0, te = 0; w + 2 < o; ++w) {
			var ne = y(w), re = w & 32767, ie = g[ne];
			if (h[re] = ie, g[ne] = re, E <= w) {
				var ae = o - w;
				if ((S > 7e3 || T > 24576) && (ae > 423 || !l)) {
					u = zt(e, c, 0, b, x, ee, C, T, te, w - te, u), T = S = C = 0, te = w;
					for (var D = 0; D < 286; ++D) x[D] = 0;
					for (var D = 0; D < 30; ++D) ee[D] = 0;
				}
				var O = 2, k = 0, oe = p, se = re - ie & 32767;
				if (ae > 2 && ne == y(w - se)) for (var ce = Math.min(f, ae) - 1, le = Math.min(32767, w), ue = Math.min(258, ae); se <= le && --oe && re != ie;) {
					if (e[w + O] == e[w + O - se]) {
						for (var A = 0; A < ue && e[w + A] == e[w + A - se]; ++A);
						if (A > O) {
							if (O = A, k = se, A > ce) break;
							for (var de = Math.min(se, A - 2), fe = 0, D = 0; D < de; ++D) {
								var pe = w - se + D & 32767, me = pe - h[pe] & 32767;
								me > fe && (fe = me, ie = pe);
							}
						}
					}
					re = ie, ie = h[re], se += re - ie & 32767;
				}
				if (k) {
					b[T++] = 268435456 | ft[O] << 18 | ht[k];
					var he = ft[O] & 31, ge = ht[k] & 31;
					C += ot[he] + st[ge], ++x[257 + he], ++ee[ge], E = w + O, ++S;
				} else b[T++] = e[w], ++x[e[w]];
			}
		}
		for (w = Math.max(w, E); w < o; ++w) b[T++] = e[w], ++x[e[w]];
		u = zt(e, c, l, b, x, ee, C, T, te, w - te, u), l || (a.r = u & 7 | c[u / 8 | 0] << 3, u -= 7, a.h = g, a.p = h, a.i = w, a.w = E);
	} else {
		for (var w = a.w || 0; w < o + l; w += 65535) {
			var _e = w + 65535;
			_e >= o && (c[u / 8 | 0] = l, _e = o), u = Rt(c, u + 1, e.subarray(w, _e));
		}
		a.i = o;
	}
	return kt(s, 0, r + Ot(u) + i);
}, Ut = /*#__PURE__*/ (function() {
	for (var e = /* @__PURE__ */ new Int32Array(256), t = 0; t < 256; ++t) {
		for (var n = t, r = 9; --r;) n = (n & 1 && -306674912) ^ n >>> 1;
		e[t] = n;
	}
	return e;
})(), Wt = function() {
	var e = -1;
	return {
		p: function(t) {
			for (var n = e, r = 0; r < t.length; ++r) n = Ut[n & 255 ^ t[r]] ^ n >>> 8;
			e = n;
		},
		d: function() {
			return ~e;
		}
	};
}, Gt = function(e, t, n, r, i) {
	if (!i && (i = { l: 1 }, t.dictionary)) {
		var a = t.dictionary.subarray(-32768), o = new z(a.length + e.length);
		o.set(a), o.set(e, a.length), e = o, i.w = a.length;
	}
	return Ht(e, t.level == null ? 6 : t.level, t.mem == null ? i.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(e.length))) * 1.5) : 20 : 12 + t.mem, n, r, i);
}, Kt = function(e, t) {
	var n = {};
	for (var r in e) n[r] = e[r];
	for (var r in t) n[r] = t[r];
	return n;
}, qt = function(e, t) {
	return e[t] | e[t + 1] << 8;
}, Jt = function(e, t) {
	return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0;
}, Yt = function(e, t) {
	return Jt(e, t) + Jt(e, t + 4) * 4294967296;
}, H = function(e, t, n) {
	for (; n; ++t) e[t] = n, n >>>= 8;
};
function Xt(e, t) {
	return Gt(e, t || {}, 0, 0);
}
function Zt(e, t) {
	return jt(e, { i: 2 }, t && t.out, t && t.dictionary);
}
var Qt = function(e, t, n, r) {
	for (var i in e) {
		var a = e[i], o = t + i, s = r;
		Array.isArray(a) && (s = Kt(r, a[1]), a = a[0]), ArrayBuffer.isView(a) ? n[o] = [a, s] : (n[o += "/"] = [new z(0), s], Qt(a, o, n, r));
	}
}, $t = typeof TextEncoder < "u" && /*#__PURE__*/ new TextEncoder(), en = typeof TextDecoder < "u" && /*#__PURE__*/ new TextDecoder();
try {
	en.decode(Vt, { stream: !0 });
} catch {}
var tn = function(e) {
	for (var t = "", n = 0;;) {
		var r = e[n++], i = (r > 127) + (r > 223) + (r > 239);
		if (n + i > e.length) return {
			s: t,
			r: kt(e, n - 1)
		};
		i ? i == 3 ? (r = ((r & 15) << 18 | (e[n++] & 63) << 12 | (e[n++] & 63) << 6 | e[n++] & 63) - 65536, t += String.fromCharCode(55296 | r >> 10, 56320 | r & 1023)) : i & 1 ? t += String.fromCharCode((r & 31) << 6 | e[n++] & 63) : t += String.fromCharCode((r & 15) << 12 | (e[n++] & 63) << 6 | e[n++] & 63) : t += String.fromCharCode(r);
	}
};
function nn(e, t) {
	if (t) {
		for (var n = new z(e.length), r = 0; r < e.length; ++r) n[r] = e.charCodeAt(r);
		return n;
	}
	if ($t) return $t.encode(e);
	for (var i = e.length, a = new z(e.length + (e.length >> 1)), o = 0, s = function(e) {
		a[o++] = e;
	}, r = 0; r < i; ++r) {
		if (o + 5 > a.length) {
			var c = new z(o + 8 + (i - r << 1));
			c.set(a), a = c;
		}
		var l = e.charCodeAt(r);
		l < 128 || t ? s(l) : l < 2048 ? (s(192 | l >> 6), s(128 | l & 63)) : l > 55295 && l < 57344 ? (l = 65536 + (l & 1047552) | e.charCodeAt(++r) & 1023, s(240 | l >> 18), s(128 | l >> 12 & 63), s(128 | l >> 6 & 63), s(128 | l & 63)) : (s(224 | l >> 12), s(128 | l >> 6 & 63), s(128 | l & 63));
	}
	return kt(a, 0, o);
}
function rn(e, t) {
	if (t) {
		for (var n = "", r = 0; r < e.length; r += 16384) n += String.fromCharCode.apply(null, e.subarray(r, r + 16384));
		return n;
	}
	if (en) return en.decode(e);
	var i = tn(e), a = i.s, n = i.r;
	return n.length && V(8), a;
}
var an = function(e, t) {
	return t + 30 + qt(e, t + 26) + qt(e, t + 28);
}, on = function(e, t, n) {
	var r = qt(e, t + 28), i = qt(e, t + 30), a = rn(e.subarray(t + 46, t + 46 + r), !(qt(e, t + 8) & 2048)), o = t + 46 + r, s = sn(e, o, i, n, Jt(e, t + 20), Jt(e, t + 24), Jt(e, t + 42)), c = s[0], l = s[1], u = s[2];
	return [
		qt(e, t + 10),
		c,
		l,
		a,
		o + i + qt(e, t + 32),
		u
	];
}, sn = function(e, t, n, r, i, a, o) {
	var s = i == 4294967295, c = a == 4294967295, l = o == 4294967295, u = t + n, d = s + c + l;
	if (r && d) {
		for (; t + 4 < u; t += 4 + qt(e, t + 2)) if (qt(e, t) == 1) return [
			s ? Yt(e, t + 4 + 8 * c) : i,
			c ? Yt(e, t + 4) : a,
			l ? Yt(e, t + 4 + 8 * (c + s)) : o,
			1
		];
		r < 2 && V(13);
	}
	return [
		i,
		a,
		o,
		0
	];
}, cn = function(e) {
	var t = 0;
	if (e) for (var n in e) {
		var r = e[n].length;
		r > 65535 && V(9), t += r + 4;
	}
	return t;
}, ln = function(e, t, n, r, i, a, o, s) {
	var c = r.length, l = n.extra, u = s && s.length, d = cn(l);
	H(e, t, o == null ? 67324752 : 33639248), t += 4, o != null && (e[t++] = 20, e[t++] = n.os), e[t] = 20, t += 2, e[t++] = n.flag << 1 | (a < 0 && 8), e[t++] = i && 8, e[t++] = n.compression & 255, e[t++] = n.compression >> 8;
	var f = new Date(n.mtime == null ? Date.now() : n.mtime), p = f.getFullYear() - 1980;
	if ((p < 0 || p > 119) && V(10), H(e, t, p << 25 | f.getMonth() + 1 << 21 | f.getDate() << 16 | f.getHours() << 11 | f.getMinutes() << 5 | f.getSeconds() >> 1), t += 4, a != -1 && (H(e, t, n.crc), H(e, t + 4, a < 0 ? -a - 2 : a), H(e, t + 8, n.size)), H(e, t + 12, c), H(e, t + 14, d), t += 16, o != null && (H(e, t, u), H(e, t + 6, n.attrs), H(e, t + 10, o), t += 14), e.set(r, t), t += c, d) for (var m in l) {
		var h = l[m], g = h.length;
		H(e, t, +m), H(e, t + 2, g), e.set(h, t + 4), t += 4 + g;
	}
	return u && (e.set(s, t), t += u), t;
}, un = function(e, t, n, r, i) {
	H(e, t, 101010256), H(e, t + 8, n), H(e, t + 10, n), H(e, t + 12, r), H(e, t + 16, i);
};
function dn(e, t) {
	t ||= {};
	var n = {}, r = [];
	Qt(e, "", n, t);
	var i = 0, a = 0;
	for (var o in n) {
		var s = n[o], c = s[0], l = s[1], u = l.level == 0 ? 0 : 8, d = nn(o), f = d.length, p = l.comment, m = p && nn(p), h = m && m.length, g = cn(l.extra);
		f > 65535 && V(11);
		var _ = u ? Xt(c, l) : c, v = _.length, y = Wt();
		y.p(c), r.push(Kt(l, {
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
	for (var b = new z(a + 22), x = i, ee = a - i, S = 0; S < r.length; ++S) {
		var d = r[S];
		ln(b, d.o, d, d.f, d.u, d.c.length);
		var C = 30 + d.f.length + cn(d.extra);
		b.set(d.c, d.o + C), ln(b, i, d, d.f, d.u, d.c.length, d.o, d.m), i += 16 + C + (d.m ? d.m.length : 0);
	}
	return un(b, i, r.length, ee, x), b;
}
function fn(e, t) {
	for (var n = {}, r = e.length - 22; Jt(e, r) != 101010256; --r) (!r || e.length - r > 65558) && V(13);
	var i = qt(e, r + 8);
	if (!i) return {};
	var a = Jt(e, r + 16), o = Jt(e, r - 20) == 117853008;
	if (o) {
		var s = Jt(e, r - 12);
		o = Jt(e, s) == 101075792, o && (i = Jt(e, s + 32), a = Jt(e, s + 48));
	}
	for (var c = t && t.filter, l = 0; l < i; ++l) {
		var u = on(e, a, o), d = u[0], f = u[1], p = u[2], m = u[3], h = u[4], g = u[5], _ = an(e, g);
		a = h, (!c || c({
			name: m,
			size: f,
			originalSize: p,
			compression: d
		})) && (d ? d == 8 ? n[m] = Zt(e.subarray(_, _ + f), { out: new z(p) }) : V(14, "unknown compression type " + d) : n[m] = kt(e, _, _ + f));
	}
	return n;
}
//#endregion
//#region packages/engine/src/imported-models/archive.ts
var pn = 5242880, mn = "cabane-model-pack", hn = 1, gn = (e) => {
	let t = [];
	Me(e, t, "models");
	let n = t.find((e) => e.severity === "error");
	return n ? Error(n.message) : null;
}, _n = (e, t) => {
	let n = he([{ customModels: e }]), r = /* @__PURE__ */ new Map();
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
	if (i.reduce((e, t) => e + t.byteLength, 0) > _.homeBytes) throw Error("A model pack may contain at most 100 MiB of distinct GLB assets.");
	return i;
};
function vn(e) {
	let t = JSON.parse(e);
	if (!t || typeof t != "object") throw Error("Invalid home document.");
	let n = t.record ?? t, r = n.draft && n.published ? [n.draft, n.published] : [n], i = /* @__PURE__ */ new Map();
	for (let e of r) {
		if (!e || typeof e != "object") throw Error("Invalid project document.");
		let t = e.customModels ?? [];
		if (!Array.isArray(t)) throw Error("Invalid custom model catalogue.");
		for (let e of t) {
			let t = e && typeof e == "object" && "asset" in e ? e.asset : void 0;
			if (!t || typeof t.sha256 != "string" || !/^[a-f0-9]{64}$/.test(t.sha256) || !Number.isSafeInteger(t.byteLength) || t.byteLength <= 0 || t.byteLength > _.fileBytes) throw Error("Invalid GLB reference in the home document.");
			if (i.has(t.sha256) && i.get(t.sha256).byteLength !== t.byteLength) throw Error("Inconsistent GLB asset sizes.");
			i.set(t.sha256, {
				sha256: t.sha256,
				byteLength: t.byteLength
			});
		}
	}
	if ([...i.values()].reduce((e, t) => e + t.byteLength, 0) > _.homeBytes) throw Error("The home exceeds 100 MiB of distinct GLB assets.");
	return [...i.values()];
}
function yn(e, t) {
	let n = nn(e);
	if (n.byteLength > pn) throw Error("The home document exceeds 5 MiB.");
	let r = { "project.json": n };
	for (let e of t) r[`assets/${e.sha256}.glb`] = e.bytes;
	return dn(r, { level: 0 });
}
function bn(e, t) {
	let n = gn(e);
	if (n) throw n;
	let r = _n(e, t), i = nn(JSON.stringify({
		format: mn,
		version: hn,
		models: e
	}));
	if (i.byteLength > pn) throw Error("The model pack manifest exceeds 5 MiB.");
	let a = { "manifest.json": i };
	for (let e of r) a[`assets/${e.sha256}.glb`] = e.bytes;
	return dn(a, { level: 0 });
}
async function xn(e) {
	if (e.byteLength > _.homeBytes + pn + 1048576) throw Error("The model pack exceeds the house asset limit.");
	let t = /* @__PURE__ */ new Set(), n = 0, r = fn(e, { filter: (e) => {
		if (t.has(e.name) || e.name !== "manifest.json" && !/^assets\/[a-f0-9]{64}\.glb$/.test(e.name)) throw Error("The model pack contains an unexpected or duplicate file.");
		if (t.add(e.name), n += e.originalSize, e.originalSize > (e.name === "manifest.json" ? pn : _.fileBytes) || n > _.homeBytes + pn) throw Error("The model pack exceeds the model limits.");
		return !0;
	} }), i = r["manifest.json"];
	if (!i) throw Error("The model pack is missing manifest.json.");
	let a;
	try {
		a = JSON.parse(rn(i));
	} catch {
		throw Error("The model pack manifest is not valid JSON.");
	}
	if (!Ie(a) || a.format !== mn || a.version !== hn || Object.keys(a).some((e) => ![
		"format",
		"version",
		"models"
	].includes(e))) throw Error("Unsupported model pack manifest.");
	let o = gn(a.models);
	if (o) throw o;
	let s = a.models, c = he([{ customModels: s }]), l = c.map((e) => {
		let t = r[`assets/${e.sha256}.glb`];
		if (!t) throw Error(`The model pack is missing GLB ${e.sha256}.`);
		return {
			...e,
			bytes: t
		};
	});
	if (t.size !== c.length + 1) throw Error("The model pack contains an unreferenced GLB file.");
	return await p(l), {
		models: s,
		assets: l
	};
}
async function Sn(e) {
	if (e.byteLength > _.homeBytes + pn + 1048576) throw Error("The archive exceeds the house asset limit.");
	let t = 0, n = /* @__PURE__ */ new Set(), r = fn(e, { filter: (e) => {
		if (n.has(e.name) || e.name !== "project.json" && !/^assets\/[a-f0-9]{64}\.glb$/.test(e.name)) throw Error("The .cabane archive contains an unexpected or duplicate file.");
		if (n.add(e.name), t += e.originalSize, e.originalSize > (e.name === "project.json" ? pn : _.fileBytes) || t > _.homeBytes + pn) throw Error("The .cabane archive exceeds the model limits.");
		return !0;
	} });
	if (!r["project.json"]) throw Error("The .cabane archive is missing project.json.");
	let i = rn(r["project.json"]), a = vn(i), o = a.map((e) => {
		let t = r[`assets/${e.sha256}.glb`];
		if (!t) throw Error(`The .cabane archive is missing GLB ${e.sha256}.`);
		return {
			...e,
			bytes: t
		};
	});
	if (n.size !== a.length + 1) throw Error("The .cabane archive contains unreferenced GLB files.");
	return await p(o), {
		json: i,
		assets: o
	};
}
async function Cn(e) {
	let t = new Uint8Array(await e.arrayBuffer());
	if (t[0] === 80 && t[1] === 75) return Sn(t);
	if (t.byteLength > pn) throw Error("The JSON document exceeds 5 MiB.");
	return {
		json: new TextDecoder("utf-8", { fatal: !0 }).decode(t),
		assets: []
	};
}
function wn(e, t, n = "application/octet-stream") {
	let r = URL.createObjectURL(new Blob([new Uint8Array(e).buffer], { type: n })), i = document.createElement("a");
	i.href = r, i.download = t, i.click(), globalThis.setTimeout(() => URL.revokeObjectURL(r), 1e3);
}
//#endregion
//#region apps/web/src/workspaces/workspace-transfer.ts
var U = ke(), Tn = (e) => typeof e == "object" && !!e && !Array.isArray(e);
function En(e, t) {
	let n;
	try {
		n = JSON.parse(e);
	} catch {
		throw Error("Choose a valid Cabane JSON project or backup.");
	}
	if (!Tn(n)) throw Error("Expected a Cabane project or backup object.");
	if (n.format === "cabane-workspace") {
		if (n.version !== 1 || Object.keys(n).some((e) => ![
			"format",
			"version",
			"workspace",
			"record"
		].includes(e))) throw Error("Unsupported workspace backup format.");
		let e = n.workspace;
		if (!Tn(e) || Object.keys(e).some((e) => ![
			"name",
			"homeAssistantUrl",
			"hasPublished"
		].includes(e)) || typeof e.name != "string" || !e.name.trim() || typeof e.hasPublished != "boolean" || e.homeAssistantUrl !== null && typeof e.homeAssistantUrl != "string") throw Error("The workspace backup metadata is invalid.");
		let r = A(JSON.stringify(n.record), t);
		if (!r.valid) throw Error(r.issues[0]?.message ?? "Invalid workspace backup.");
		if (e.hasPublished !== (r.record.publishedAt !== 0)) throw Error("Backup applied status does not match its record.");
		return {
			record: r.record,
			name: e.name.trim(),
			hasPublished: e.hasPublished,
			homeAssistantUrl: e.homeAssistantUrl === null ? null : le(e.homeAssistantUrl)
		};
	}
	if ("draft" in n || "published" in n) {
		let r = A(e, t);
		if (!r.valid) throw Error(r.issues[0]?.message ?? "Invalid workspace backup.");
		if (!("bindings" in n) && !("revision" in n)) {
			let e = r.record;
			return e.published = He(e.homeId, e.draft.home.name), e.published.seedRevision = e.seedRevision, e.publishedAt = 0, {
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
	let r = Be(e);
	if (!r.valid) throw Error(r.issues[0]?.message ?? "Invalid home project.");
	let i = xe(r.project, t).issues.filter((e) => e.severity === "error" && e.code !== "project.floor-empty");
	if (i.length) throw Error(i[0].message);
	let a = s(r.project);
	return a.published = He(r.project.home.id, r.project.home.name), a.published.seedRevision = a.seedRevision, a.publishedAt = 0, {
		record: a,
		name: r.project.home.name,
		homeAssistantUrl: null,
		hasPublished: !1
	};
}
function Dn(e) {
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
function On(e, t) {
	return JSON.stringify({
		format: "cabane-workspace",
		version: 1,
		workspace: {
			name: e.name,
			homeAssistantUrl: e.homeAssistantUrl,
			hasPublished: e.hasPublished
		},
		record: JSON.parse(Dn(t))
	}, null, 2);
}
//#endregion
//#region packages/catalog/src/device/climate-airflow.ts
var kn = /* @__PURE__ */ new Set([
	"off",
	"idle",
	"standby",
	"unavailable",
	"unknown"
]), An = (e) => {
	if (!e || kn.has(e.state)) return null;
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
function jn({ reducedMotion: e, position: t, radius: n }) {
	let r = (0, L.useRef)(null);
	return N(({ invalidate: t }, n) => {
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
				children: [/* @__PURE__ */ (0, U.jsx)("circleGeometry", { args: [n * .44, 12] }), /* @__PURE__ */ (0, U.jsx)(P, { color: e })]
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
}, Mn = (e) => {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: Mn(e) })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: Mn(e) })]
			}),
			e === "connected-inactive" && /* @__PURE__ */ (0, U.jsxs)("mesh", { children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
				.014,
				10,
				6
			] }), /* @__PURE__ */ (0, U.jsx)(P, { color: Mn(e) })] }),
			e === "connected-active" && /* @__PURE__ */ (0, U.jsxs)("group", { children: [/* @__PURE__ */ (0, U.jsxs)("mesh", { children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
				.016,
				10,
				6
			] }), /* @__PURE__ */ (0, U.jsx)(P, { color: Mn(e) })] }), /* @__PURE__ */ (0, U.jsxs)("mesh", {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: Mn(e) })]
			})] })
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/appliances/washing-machine.tsx
function Nn({ visualState: e, reducedMotion: t }) {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#e8e7e2" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#202827" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				children: [/* @__PURE__ */ (0, U.jsx)("circleGeometry", { args: [.175, 24] }), /* @__PURE__ */ (0, U.jsx)(P, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#d0d2ce" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#303837" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#283231" })]
			}),
			e === "connected-active" && /* @__PURE__ */ (0, U.jsx)(jn, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#deded9" })]
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
], color: r, radius: a = .006, outline: o = !0, outlineColor: s = "#716657", name: c }) {
	return /* @__PURE__ */ (0, U.jsxs)(F, {
		...Ne({ name: c }),
		args: e,
		position: t,
		rotation: n,
		radius: Math.min(a, ...e.map((e) => e / 2 - 1e-4)),
		smoothness: 2,
		bevelSegments: 2,
		castShadow: !0,
		receiveShadow: !0,
		children: [/* @__PURE__ */ (0, U.jsx)(P, { color: r }), o && /* @__PURE__ */ (0, U.jsx)(i, {
			color: s,
			thickness: .0015,
			screenspace: !1
		})]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/appliances/tumble-dryer.tsx
function Pn({ visualState: e, reducedMotion: t }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#596360" })]
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#c1c8c7" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#536f74" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#46534f" })]
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
			e === "connected-active" && /* @__PURE__ */ (0, U.jsx)(jn, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#7a8580" })]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/device/visuals/activity-hologram.tsx
function Fn({ visualState: e, reducedMotion: t, position: n, scale: r = 1 }) {
	let i = (0, L.useRef)(null), a = (0, L.useRef)(0), o = e === "connected-active";
	return N(({ invalidate: e }, n) => {
		!o || t || !i.current || (a.current += Math.min(n, .05), i.current.position.y = Math.sin(a.current * 1.8) * .025, e());
	}), o ? /* @__PURE__ */ (0, U.jsx)("group", {
		name: "activity-hologram",
		position: n,
		scale: r,
		children: /* @__PURE__ */ (0, U.jsx)(et, { children: /* @__PURE__ */ (0, U.jsxs)("group", {
			ref: i,
			name: "activity-hologram-float",
			children: [
				/* @__PURE__ */ (0, U.jsxs)("mesh", {
					raycast: () => void 0,
					children: [/* @__PURE__ */ (0, U.jsx)("circleGeometry", { args: [.14, 32] }), /* @__PURE__ */ (0, U.jsx)(P, {
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
					] }), /* @__PURE__ */ (0, U.jsx)(P, {
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
					] }), /* @__PURE__ */ (0, U.jsx)(P, {
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
					] }), /* @__PURE__ */ (0, U.jsx)(P, {
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
var In = [
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
function Ln(e = "default") {
	return e === "black" ? "#303331" : e === "wood" ? "#bc9362" : "#f4f2ec";
}
//#endregion
//#region packages/catalog/src/device/presets/appliances/appliance-pull.tsx
function Rn({ width: e, position: t }) {
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
			] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#9ca4a4" })]
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
function zn({ visualState: e, variant: t, reducedMotion: n }) {
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
				color: Ln(t),
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#596360" })]
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
				color: Ln(t),
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
			/* @__PURE__ */ (0, U.jsx)(Rn, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#53615c" })]
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
			/* @__PURE__ */ (0, U.jsx)(Fn, {
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
function Bn({ visualState: e }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#747f7d" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#8b9a97" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(Rn, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#bdc5c3" })]
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
function Vn({ visualState: e, reducedMotion: t }) {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#e8e5dc" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#ddd9cf" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#26302f" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
			/* @__PURE__ */ (0, U.jsx)(Fn, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#9da4a1" })]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/appliances/refrigerator.tsx
function Hn({ visualState: e }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-refrigerator",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsxs)(F, {
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
				children: [/* @__PURE__ */ (0, U.jsx)(P, { color: "#dfe3df" }), /* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#e9ece8" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#d8ddda" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#717b77" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
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
function Un({ visualState: e, reducedMotion: t }) {
	let n = e === "connected-active";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-humidifier-dehumidifier",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsxs)(F, {
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
				children: [/* @__PURE__ */ (0, U.jsx)(P, { color: W.body }), /* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#929d98" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#6d7974" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
					color: "#33423f",
					emissive: n ? W.paleBlue : "#41514e",
					emissiveIntensity: n ? .38 : .08
				})]
			}),
			/* @__PURE__ */ (0, U.jsx)(Fn, {
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
function Wn({ visualState: e, reducedMotion: t }) {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#59635f" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#7d8782" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: W.bodyDark })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#45524e" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#2f3936" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(Fn, {
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
function Gn({ visualState: e }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#697671" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#bac2c0" })]
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
function Kn({ reducedMotion: e, position: t }) {
	let n = (0, L.useRef)(null), r = (0, L.useRef)(0);
	return N(({ invalidate: t }, i) => {
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
			] }), /* @__PURE__ */ (0, U.jsx)(P, {
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
function qn({ visualState: e, reducedMotion: t }) {
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
					/* @__PURE__ */ (0, U.jsx)(P, {
						color: "#9cb4b1",
						transparent: !0,
						opacity: .68
					}),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#46514e" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
					color: "#718078",
					emissive: n ? "#d96e4d" : "#718078",
					emissiveIntensity: n ? .3 : 0
				})]
			}),
			e === "connected-active" && /* @__PURE__ */ (0, U.jsx)(Kn, {
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
function Jn({ visualState: e, reducedMotion: t }) {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#d8ddda" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#8d9893" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#52605b" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#c7cecb" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#46514e" })]
			}),
			e === "connected-active" && /* @__PURE__ */ (0, U.jsx)(Kn, {
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
function Yn({ visualState: e }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#bdc5c1" })]
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
function Xn({ visualState: e, reducedMotion: t }) {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#dfe3df" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#8e9a94" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#9aa6a1" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#596560" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
					color: "#66736e",
					emissive: n ? "#d96e4d" : "#66736e",
					emissiveIntensity: n ? .3 : 0
				})]
			}),
			/* @__PURE__ */ (0, U.jsx)(Fn, {
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
//#region packages/catalog/src/device/visuals/airflow-waves.tsx
var Zn = {
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
}, Qn = 5, $n = (e) => {
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
}, er = (e, t) => $n((e * .42 + t / Qn) % 1), tr = (e, n = 48, r = 6) => {
	let i = e * .34, a = Array.from({ length: 25 }, (e, t) => {
		let n = t / 24;
		return new I(-i + n * i * 2, Math.sin(n * Math.PI * 4) * .035, 0);
	});
	return new t(new k(a), n, .014, r, !1);
};
function nr({ mode: e, width: t, reducedMotion: n, forward: r = !1 }) {
	let i = (0, L.useRef)(null), a = Zn[e], o = (0, L.useMemo)(() => r ? tr(t, 32, 4) : tr(t), [t, r]), s = (e) => r ? [
		0,
		0,
		.16 + e.progress * .95
	] : e.position;
	return (0, L.useEffect)(() => () => {
		o.dispose();
	}, [o]), N(({ clock: e, invalidate: t }) => {
		!i.current || n || (i.current.children.forEach((t, n) => {
			let r = t, i = er(e.elapsedTime, n);
			r.position.set(...s(i)), r.scale.set(...i.scale), r.material.opacity = i.opacity;
		}), t());
	}), /* @__PURE__ */ (0, U.jsx)("group", {
		ref: i,
		name: r ? "fan-airflow-waves" : `flux-climatisation-${e}`,
		children: Array.from({ length: Qn }, (e, t) => {
			let i = $n((t + 1) / 6);
			return /* @__PURE__ */ (0, U.jsx)("mesh", {
				geometry: o,
				...Ne({ position: n || r ? s(i) : void 0 }),
				...Ne({ scale: n || r ? i.scale : void 0 }),
				renderOrder: 2,
				children: /* @__PURE__ */ (0, U.jsx)(P, {
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
function rr({ state: e, visualState: t, reducedMotion: n }) {
	let r = t === "connected-active", a = r ? An(e) : null;
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: W.body }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: W.charcoal })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					.045,
					.19
				],
				rotation: [
					r ? -.32 : -.08,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.62,
					.018,
					.07
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: W.bodyDark })]
			}),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: t,
				position: [
					.32,
					.16,
					.178
				]
			}),
			a && /* @__PURE__ */ (0, U.jsx)(nr, {
				mode: a,
				width: .84,
				reducedMotion: n
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/climate/heat-exchanger-bars.tsx
function ir({ horizontal: e }) {
	let t = (0, L.useMemo)(() => {
		let t = Array.from({ length: 8 }, (t, n) => {
			let r = e ? new O(.54, .025, .055) : new O(.018, .47, .016);
			return r.translate(e ? 0 : -.39 + n * .112, e ? .12 + n * .145 : .31, e ? .062 : .11), r;
		}), n = M(t);
		return t.forEach((e) => e.dispose()), n;
	}, [e]);
	return (0, L.useEffect)(() => () => t.dispose(), [t]), /* @__PURE__ */ (0, U.jsxs)("mesh", {
		geometry: t,
		castShadow: !0,
		children: [/* @__PURE__ */ (0, U.jsx)(P, { color: e ? "#f0eee9" : "#d6d7d2" }), e && /* @__PURE__ */ (0, U.jsx)(i, {
			color: "#7d8380",
			thickness: .003
		})]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/climate/heated-towel-rail.tsx
function ar({ visualState: e, reducedMotion: t }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-heated-towel-rail",
		children: [
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#aeb4af" })]
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#e8e7e2" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
						color: "#747b79",
						thickness: .004
					})
				]
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(ir, { horizontal: !0 }),
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#e8e7e2" })]
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: W.charcoal }),
					/* @__PURE__ */ (0, U.jsx)(i, {
						color: "#303836",
						thickness: .003
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsx)(Fn, {
				visualState: e,
				reducedMotion: t,
				position: [
					0,
					1.4,
					.15
				],
				scale: 1
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
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/climate/smart-panel-radiator.tsx
function or({ visualState: e, reducedMotion: t }) {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#eeeae2" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
						color: "#7f817c",
						thickness: .005
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsx)(ir, { horizontal: !1 }),
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#c9ccc7" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: W.charcoal })]
			}),
			/* @__PURE__ */ (0, U.jsx)(Fn, {
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
function sr({ state: e, visualState: t }) {
	let n = typeof e?.attributes.current_temperature == "number" ? Math.round(e.attributes.current_temperature) : 21;
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-smart-thermostat",
		children: [
			/* @__PURE__ */ (0, U.jsxs)(F, {
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
				children: [/* @__PURE__ */ (0, U.jsx)(P, { color: W.body }), /* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
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
function cr({ visualState: e }) {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: W.body }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: t ? W.coral : W.bodyDark })]
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
function lr({ visualState: e, reducedMotion: t }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-smart-plug",
		children: [
			/* @__PURE__ */ (0, U.jsxs)(F, {
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
				children: [/* @__PURE__ */ (0, U.jsx)(P, { color: W.body }), /* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#d1d4ce" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#39413f" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(Fn, {
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
function ur({ visualState: e, reducedMotion: t }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-smart-power-strip",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsxs)(F, {
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
				children: [/* @__PURE__ */ (0, U.jsx)(P, { color: W.body }), /* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#aeb4af" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: e === "connected-active" ? W.coral : W.green })]
			}),
			/* @__PURE__ */ (0, U.jsx)(Fn, {
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
function dr({ visualState: e }) {
	let t = e === "connected-active";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-motorized-valve",
		children: [
			/* @__PURE__ */ (0, U.jsxs)(F, {
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
				children: [/* @__PURE__ */ (0, U.jsx)(P, { color: "#a9b1ac" }), /* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#77827d" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#9b754e" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(F, {
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
				children: /* @__PURE__ */ (0, U.jsx)(P, { color: W.body })
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#59645f" })]
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
function fr({ visualState: e }) {
	let t = e === "connected-active";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-smart-button",
		children: [
			/* @__PURE__ */ (0, U.jsxs)(F, {
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
				children: [/* @__PURE__ */ (0, U.jsx)(P, { color: W.body }), /* @__PURE__ */ (0, U.jsx)(i, {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: t ? W.coral : W.bodyDark }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: t ? "#fff0df" : "#65706b" })]
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
var pr = 1.44, mr = 1.48;
function hr({ position: e, reducedMotion: t }) {
	let n = (0, L.useRef)(null), r = (0, L.useRef)(null), a = (0, L.useRef)((e ?? 50) / 100), o = (0, L.useRef)(a.current), s = be((e) => e.invalidate), c = (e) => {
		n.current && (n.current.scale.y = Math.max(1e-5, 1 - e), n.current.visible = e < .99999), r.current && (r.current.position.y = .02 + pr * e);
	};
	return (0, L.useLayoutEffect)(() => {
		o.current = e === null ? a.current : e / 100, t && (a.current = o.current), c(a.current), s();
	}, [
		e,
		t,
		s
	]), N((e, t) => {
		let n = o.current - a.current;
		Math.abs(n) < 1e-4 || (a.current = Math.abs(n) < .001 ? o.current : a.current + n * (1 - Math.exp(-10 * Math.min(t, .1))), c(a.current), s());
	}), /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "blind-moving-cover",
		children: [/* @__PURE__ */ (0, U.jsx)("group", {
			ref: n,
			name: "blind-fabric",
			position: [
				0,
				mr,
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
					pr,
					.008
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#d9d4c6" })]
			})
		}), /* @__PURE__ */ (0, U.jsx)("group", {
			ref: r,
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#b8bcb2" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
var gr = [
	1.2,
	1.6,
	.12
];
function _r({ state: e, visualState: t, reducedMotion: n }) {
	let r = t === "disconnected" || t === "unavailable" ? null : Ee(e);
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#e7e5dc" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#bac0b7" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#bac0b7" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(hr, {
				position: r,
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
function vr({ state: e, visualState: t, color: n }) {
	let r = ((t === "disconnected" || t === "unavailable" ? null : Ee(e)) ?? 35) / 100, a = .94 - r * .7, o = .48 + r * .35;
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#dedbd3" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#aeb4af" })]
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: n ?? (e < 0 ? "#d8c8ad" : "#dfcfb6") }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: n ?? "#b6a78f" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#707873" })]
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
function yr({ state: e, visualState: t }) {
	if (t !== "connected-active" || e?.state !== "on") return 0;
	let n = e.attributes.percentage;
	return typeof n == "number" && Number.isFinite(n) ? Math.max(0, Math.min(100, n)) / 100 : .5;
}
//#endregion
//#region packages/catalog/src/device/presets/fans/fan-rotor.tsx
function br({ radius: e, count: t, color: n, state: r, visualState: a, reducedMotion: o }) {
	let s = (0, L.useRef)(null), c = (0, L.useMemo)(() => {
		let t = new Re();
		t.moveTo(e * .12, -e * .07), t.quadraticCurveTo(e * .55, -e * .22, e * .85, -e * .14), t.quadraticCurveTo(e, -e * .1, e, 0), t.quadraticCurveTo(e * .96, e * .16, e * .78, e * .18), t.lineTo(e * .16, e * .09), t.closePath();
		let n = new E(t, {
			depth: e * .03,
			bevelEnabled: !1,
			curveSegments: 4,
			steps: 1
		});
		return n.translate(0, 0, -e * .015), n;
	}, [e]);
	(0, L.useEffect)(() => () => c.dispose(), [c]);
	let l = yr({
		...r === void 0 ? {} : { state: r },
		visualState: a
	});
	return N(({ invalidate: e }, t) => {
		!s.current || o || l === 0 || (s.current.rotation.z = (s.current.rotation.z - Math.min(t, .05) * l * 12) % (Math.PI * 2), e());
	}), /* @__PURE__ */ (0, U.jsx)("group", {
		ref: s,
		name: "fan-rotor",
		children: Array.from({ length: t }, (e, r) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: `fan-blade-${r}`,
			geometry: c,
			rotation: [
				0,
				0,
				r * Math.PI * 2 / t
			],
			castShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)(P, { color: n }), /* @__PURE__ */ (0, U.jsx)(i, {
				color: "#52605b",
				thickness: .0015,
				screenspace: !1
			})]
		}, r))
	});
}
//#endregion
//#region packages/catalog/src/device/presets/fans/ceiling-fan.tsx
function xr(e) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: W.body })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: W.charcoal })]
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: W.body }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				children: /* @__PURE__ */ (0, U.jsx)(br, {
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
function Sr() {
	let e = (0, L.useMemo)(() => {
		let e = [], t = (t, n) => {
			let r = n.clone().sub(t), i = new u(.0016, .0016, r.length(), 4);
			i.applyQuaternion(new fe().setFromUnitVectors(new I(0, 1, 0), r.normalize())), i.translate(...t.clone().add(n).multiplyScalar(.5).toArray()), e.push(i);
		};
		for (let n of [-.025, .045]) {
			for (let t of [
				.067,
				.12,
				.175
			]) {
				let r = new re(t, t === .175 ? .005 : .0016, 4, 32);
				r.translate(0, 0, n), e.push(r);
			}
			for (let e = 0; e < 16; e++) {
				let r = e * Math.PI / 8;
				t(new I(.028 * Math.cos(r), .028 * Math.sin(r), n), new I(.175 * Math.cos(r), .175 * Math.sin(r), n));
			}
		}
		for (let e = 0; e < 8; e++) {
			let n = e * Math.PI / 4;
			t(new I(.175 * Math.cos(n), .175 * Math.sin(n), -.025), new I(.175 * Math.cos(n), .175 * Math.sin(n), .045));
		}
		let n = M(e);
		return e.forEach((e) => e.dispose()), n;
	}, []);
	return (0, L.useEffect)(() => () => e.dispose(), [e]), /* @__PURE__ */ (0, U.jsx)("mesh", {
		name: "fan-guard",
		geometry: e,
		castShadow: !0,
		children: /* @__PURE__ */ (0, U.jsx)(P, { color: W.charcoal })
	});
}
//#endregion
//#region packages/catalog/src/device/presets/fans/fan-head.tsx
function Cr(e) {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: W.body }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				children: /* @__PURE__ */ (0, U.jsx)(br, {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: W.body }),
					/* @__PURE__ */ (0, U.jsx)(i, {
						color: W.charcoal,
						thickness: .0015,
						screenspace: !1
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsx)(Sr, {})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/fans/fan-airflow.tsx
function wr(e) {
	return yr(e) === 0 ? null : /* @__PURE__ */ (0, U.jsx)("group", {
		name: "fan-airflow",
		scale: .5,
		children: /* @__PURE__ */ (0, U.jsx)(nr, {
			mode: "cool",
			width: .7,
			reducedMotion: e.reducedMotion,
			forward: !0
		})
	});
}
//#endregion
//#region packages/catalog/src/device/presets/fans/table-fan.tsx
function Tr(e) {
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
					] }), /* @__PURE__ */ (0, U.jsx)(P, { color: W.body })]
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
						/* @__PURE__ */ (0, U.jsx)(P, { color: W.body }),
						/* @__PURE__ */ (0, U.jsx)(i, {
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
					children: /* @__PURE__ */ (0, U.jsx)(Cr, { ...e })
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
			children: /* @__PURE__ */ (0, U.jsx)(wr, { ...e })
		})]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/fans/pedestal-fan.tsx
function Er(e) {
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
					] }), /* @__PURE__ */ (0, U.jsx)(P, { color: W.body })]
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
						/* @__PURE__ */ (0, U.jsx)(P, { color: W.body }),
						/* @__PURE__ */ (0, U.jsx)(i, {
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
					] }), /* @__PURE__ */ (0, U.jsx)(P, { color: W.charcoal })]
				}),
				/* @__PURE__ */ (0, U.jsx)("group", {
					position: [
						0,
						1.125,
						0
					],
					scale: 1.25,
					children: /* @__PURE__ */ (0, U.jsx)(Cr, { ...e })
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
			children: /* @__PURE__ */ (0, U.jsx)(wr, { ...e })
		})]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/fans/air-purifier.tsx
function Dr({ visualState: e, reducedMotion: t }) {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: W.body }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#68736f" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#9ba49f" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
					color: n ? W.green : W.muted,
					emissive: W.green,
					emissiveIntensity: n ? .3 : 0
				})]
			}),
			/* @__PURE__ */ (0, U.jsx)(Fn, {
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
function Or({ visualState: e, reducedMotion: t }) {
	let n = e === "connected-active";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-bathroom-extractor-fan",
		children: [
			/* @__PURE__ */ (0, U.jsxs)(F, {
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
				children: [/* @__PURE__ */ (0, U.jsx)(P, { color: W.body }), /* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: n ? "#849c95" : "#9ba29e" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#596460" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#d3d5cf" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(Fn, {
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
var kr = (e) => {
	switch (e) {
		case "connected-active": return "#f2cf72";
		case "connected-inactive": return "#a99666";
		case "unavailable": return "#b28b69";
		case "disconnected": return "#e2c685";
	}
};
function Ar({ state: e, visualState: t }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#596660" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#596660" })]
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
					/* @__PURE__ */ (0, U.jsx)(P, {
						color: kr(t),
						emissive: "#e6a94d",
						emissiveIntensity: n * .65,
						side: 2
					}),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
var jr = "#ad5436", Mr = "#c86a46", Nr = "#6f321f", Pr = (e) => {
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
function Fr({ state: e, visualState: t }) {
	let n = Pr(t), r = c(e);
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: Nr }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#574b44" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: Nr })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
					color: Mr,
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
					/* @__PURE__ */ (0, U.jsx)(P, {
						color: jr,
						side: 2
					}),
					/* @__PURE__ */ (0, U.jsx)(i, {
						color: Nr,
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: Nr })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#6f5c49" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
					color: n.color,
					emissive: n.emissive,
					emissiveIntensity: n.intensity * r
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
var Ir = (e) => {
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
function Lr(e, t) {
	let n = Ir(e);
	return {
		...n,
		emissiveIntensity: n.emissiveIntensity * c(t)
	};
}
//#endregion
//#region packages/catalog/src/device/presets/lighting/table-lamp.tsx
var Rr = [
	.32,
	.52,
	.32
];
function zr({ state: e, visualState: t }) {
	let n = Ir(t);
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#ded7c8" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#8d867b" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
					color: n.color,
					side: 2
				})]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/lighting/woven-pendant.tsx
function Br({ brightness: e = 0 }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#5b5147" })]
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
					/* @__PURE__ */ (0, U.jsx)(P, {
						color: "#b4895d",
						transparent: !0,
						opacity: .82
					}),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#7d5b3e" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
					color: "#f2d69a",
					emissive: "#d49b48",
					emissiveIntensity: e
				})]
			})
		]
	});
}
function Vr({ state: e, visualState: t }) {
	let n = Ir(t);
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: `device-state-${t}`,
		children: /* @__PURE__ */ (0, U.jsx)(Br, { brightness: n.emissiveIntensity * c(e) })
	});
}
//#endregion
//#region packages/catalog/src/device/presets/lighting/children-pendant.tsx
function Hr({ y: e, top: t, bottom: n, color: r }) {
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
			/* @__PURE__ */ (0, U.jsx)(P, {
				color: r,
				transparent: !0,
				opacity: .58,
				depthWrite: !1,
				side: 2
			}),
			/* @__PURE__ */ (0, U.jsx)(i, {
				color: "#6d4f34",
				thickness: .005,
				screenspace: !1
			})
		]
	});
}
function Ur({ color: e = "#b88958", brightness: t = .35 }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#796955" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#76533a" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(Hr, {
				y: -.2,
				top: .14,
				bottom: .23,
				color: e
			}),
			/* @__PURE__ */ (0, U.jsx)(Hr, {
				y: -.305,
				top: .22,
				bottom: .29,
				color: e
			}),
			/* @__PURE__ */ (0, U.jsx)(Hr, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#795638" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
					color: "#f1d59b",
					emissive: "#d49b48",
					emissiveIntensity: t
				})]
			})
		]
	});
}
function Wr({ state: e, visualState: t }) {
	let n = Ir(t);
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: `device-state-${t}`,
		children: /* @__PURE__ */ (0, U.jsx)(Ur, { brightness: n.emissiveIntensity * c(e) })
	});
}
//#endregion
//#region packages/catalog/src/device/presets/lighting/ceiling-light.tsx
function Gr({ state: e, visualState: t }) {
	let n = Ir(t);
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#a8aaa4" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
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
function Kr({ state: e, visualState: t }) {
	let n = Ir(t);
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: W.body }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
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
function qr({ state: e, visualState: t }) {
	let n = Ir(t);
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#8b928e" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#737d78" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)(F, {
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
				children: [/* @__PURE__ */ (0, U.jsx)(P, {
					color: n.color,
					emissive: "#f2c66d",
					emissiveIntensity: n.emissiveIntensity * c(e),
					transparent: !0,
					opacity: .94
				}), /* @__PURE__ */ (0, U.jsx)(i, {
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
var Jr = [
	.8,
	.8,
	.045
];
function Yr({ state: e, visualState: t }) {
	let n = Ir(t);
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#d7d3cb" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				children: [/* @__PURE__ */ (0, U.jsx)("circleGeometry", { args: [.356, 32] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#afc5c7" })]
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
					/* @__PURE__ */ (0, U.jsx)(P, {
						color: n.color,
						emissive: "#f5dba1",
						emissiveIntensity: n.emissiveIntensity * c(e)
					}),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
function Xr({ state: e, visualState: t, height: n }) {
	let r = Lr(t, e);
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#252e30" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#30383a" })]
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
						] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#252e30" })]
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
								] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#252e30" })]
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
								] }), /* @__PURE__ */ (0, U.jsx)(P, {
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
									] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#252e30" })]
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
								] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#252e30" })]
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
								] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#364044" })]
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
						] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#252e30" })]
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
						] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#515654" })]
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
						] }), /* @__PURE__ */ (0, U.jsx)(P, {
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
var Zr = [
	.24,
	.8,
	.24
];
function Qr(e) {
	return /* @__PURE__ */ (0, U.jsx)(Xr, {
		...e,
		height: .8
	});
}
//#endregion
//#region packages/catalog/src/device/presets/lighting/low-garden-lantern.tsx
var $r = [
	.24,
	.35,
	.24
];
function ei(e) {
	return /* @__PURE__ */ (0, U.jsx)(Xr, {
		...e,
		height: .35
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/wrought-iron-pergola/pergola-geometry.ts
function ti() {
	let e = [], n = [], r = [
		[],
		[],
		[]
	], i = [], a = [], o = [], s = [], c = (e, t, n, r, i, a) => new O(r, i, a).translate(e, t, n), l = (e, n, r = 32) => new t(new k(e), r, n, 5, !1);
	for (let t of [-1.46, 1.46]) e.push(c(0, 2.65, t, 4, .1, .08));
	for (let t of [-1.96, 1.96]) e.push(c(t, 2.65, 0, .08, .1, 3));
	for (let t = 0; t < 9; t++) e.push(c(-1.8 + t * .45, 2.61, 0, .024, .035, 2.9));
	for (let t of [
		-.8,
		0,
		.8
	]) e.push(c(0, 2.63, t, 3.9, .022, .022));
	for (let t of [-1.88, 1.88]) for (let i of [-1.38, 1.38]) {
		e.push(c(t, .12, i, .11, .06, .11), c(t, 2.48, i, .105, .065, .105));
		for (let n of [0, 2]) {
			let r = (n === 0 ? t : i) > 0 ? -1 : 1, a = Array.from({ length: 25 }, (e, a) => {
				let o = a / 24, s = new I(t, 2.03 + .55 * Math.sin(o * Math.PI / 2), i);
				return s.setComponent(n, s.getComponent(n) + r * .56 * (1 - Math.cos(o * Math.PI / 2))), s;
			});
			e.push(l(a, .016));
			let o = Array.from({ length: 33 }, (e, a) => {
				let o = a / 32, s = o * Math.PI * 2.2, c = .14 * (1 - o * .78), l = new I(t, 2.35 + Math.sin(s) * c, i);
				return l.setComponent(n, l.getComponent(n) + r * (.24 + Math.cos(s) * c)), l;
			});
			e.push(l(o, .011));
		}
		let a = Array.from({ length: 49 }, (e, n) => {
			let r = n / 48;
			return new I(t + Math.sin(r * 19) * .065, .02 + r * 2.53, i + Math.cos(r * 19) * .065);
		});
		n.push(l(a, .018, 48));
		for (let e = 9; e < 47; e += 2) {
			let t = a[e];
			r[e % 3].push(new C(1, 0).scale(.045, .025, .055).rotateY(e * 2.4).rotateZ(e * .7).translate(t.x, t.y, t.z));
		}
	}
	for (let e = 0; e < 6; e++) {
		let t = -.98 + e * .39, a = Array.from({ length: 49 }, (n, r) => {
			let i = -1.86 + r / 48 * 3.72;
			return new I(i, 2.54 + Math.sin(r * .37 + e) * .035, t + Math.sin(r * .28 + e) * .12);
		});
		n.push(l(a, .012, 48)), a.forEach((t, n) => {
			if (!((n + e * 3) % 7 < 2)) {
				for (let i of [-1, 1]) r[(n + e) % 3].push(new C(1, 0).scale(.105, .024, .058).rotateY(i * .65 + n * .4).translate(t.x, t.y + .035, t.z + i * .07));
				if (n % 9 == e % 9) for (let e = 0; e < 7; e++) i.push(new C(1, 0).scale(.04 * (1 - e * .09), .038, .04 * (1 - e * .09)).translate(t.x + Math.sin(e * 2) * .017, t.y - .04 - e * .042, t.z));
			}
		});
	}
	for (let e = 0; e < 3; e++) {
		let t = -.98 + e * .98, n = (e) => new I(-1.88 + e * 3.76, 2.52 - .28 * Math.sin(e * Math.PI), t);
		a.push(l(Array.from({ length: 33 }, (e, t) => n(t / 32)), .006));
		for (let e = 1; e < 10; e++) {
			let t = n(e / 10);
			s.push(c(t.x, t.y - .025, t.z, .025, .05, .025)), o.push(new ge(.034, 8, 6).scale(1, 1.25, 1).translate(t.x, t.y - .083, t.z));
		}
	}
	let u = (e) => {
		let t = M(e);
		return e.forEach((e) => e.dispose()), t;
	};
	return {
		iron: u(e),
		wood: u(n),
		leaves: r.map(u),
		flowers: u(i),
		cable: u(a),
		bulbs: u(o),
		sockets: u(s)
	};
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/wrought-iron-pergola/pergola-frame.tsx
var ni = [
	4,
	2.7,
	3
];
function ri({ children: e, bulbFinish: t }) {
	let n = (0, L.useMemo)(ti, []);
	return (0, L.useEffect)(() => () => {
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
					] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#303b36" })]
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
					] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#303b36" })]
				})]
			}, `${e}-${t}`))),
			/* @__PURE__ */ (0, U.jsx)("mesh", {
				geometry: n.iron,
				castShadow: !0,
				children: /* @__PURE__ */ (0, U.jsx)(P, { color: "#303b36" })
			}),
			/* @__PURE__ */ (0, U.jsx)("mesh", {
				geometry: n.wood,
				castShadow: !0,
				children: /* @__PURE__ */ (0, U.jsx)(P, { color: "#766044" })
			}),
			n.leaves.map((e, t) => /* @__PURE__ */ (0, U.jsx)("mesh", {
				geometry: e,
				castShadow: !0,
				children: /* @__PURE__ */ (0, U.jsx)(P, { color: [
					"#61754a",
					"#82945b",
					"#425e42"
				][t] })
			}, t)),
			/* @__PURE__ */ (0, U.jsx)("mesh", {
				geometry: n.flowers,
				castShadow: !0,
				children: /* @__PURE__ */ (0, U.jsx)(P, { color: "#baa3cc" })
			}),
			t && /* @__PURE__ */ (0, U.jsxs)("group", {
				name: "pergola-string-lights",
				children: [
					/* @__PURE__ */ (0, U.jsx)("mesh", {
						geometry: n.cable,
						children: /* @__PURE__ */ (0, U.jsx)(P, { color: "#343a31" })
					}),
					/* @__PURE__ */ (0, U.jsx)("mesh", {
						geometry: n.sockets,
						children: /* @__PURE__ */ (0, U.jsx)(P, { color: "#343a31" })
					}),
					/* @__PURE__ */ (0, U.jsx)("mesh", {
						geometry: n.bulbs,
						children: /* @__PURE__ */ (0, U.jsx)(P, {
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
function ii({ size: e = ni }) {
	return /* @__PURE__ */ (0, U.jsx)("group", {
		scale: [
			e[0] / 4,
			e[1] / 2.7,
			e[2] / 3
		],
		children: /* @__PURE__ */ (0, U.jsx)(ri, {})
	});
}
//#endregion
//#region packages/catalog/src/device/presets/lighting/pergola-string-lights.tsx
function ai({ state: e, visualState: t, variant: n }) {
	return /* @__PURE__ */ (0, U.jsx)(ri, { bulbFinish: n === "plain" ? void 0 : Lr(t, e) });
}
//#endregion
//#region packages/catalog/src/device/presets/lighting/rattan-bell-pendant/bulb-position.ts
var oi = [
	0,
	.22,
	0
], si = new k([
	new I(.246, .004, 0),
	new I(.244, .09, 0),
	new I(.218, .19, 0),
	new I(.155, .28, 0),
	new I(.075, .355, 0),
	new I(.039, .405, 0),
	new I(.037, .48, 0)
]);
function ci() {
	let e = [
		[],
		[],
		[]
	];
	for (let n = 0; n < 80; n++) {
		let r = n / 80 * Math.PI * 2, i = Array.from({ length: 33 }, (e, t) => {
			let i = t / 32, a = si.getPoint(i), o = a.x + Math.sin(i * Math.PI * 24 + n * Math.PI) * .001;
			return new I(Math.cos(r) * o, a.y, Math.sin(r) * o);
		});
		e[n % 3].push(new t(new k(i), 40, .0022, 4, !1));
	}
	for (let t = 0; t <= 12; t++) {
		let n = si.getPoint(t / 12), r = new re(n.x, t === 0 ? .004 : .0026, 6, 80);
		r.rotateX(Math.PI / 2), r.translate(0, n.y, 0), e[t % 3].push(r);
	}
	return e.map((e) => {
		let t = M(e);
		return e.forEach((e) => e.dispose()), t;
	});
}
//#endregion
//#region packages/catalog/src/device/presets/lighting/rattan-bell-pendant/rattan-bell-pendant.tsx
var li = [
	.5,
	1.2,
	.5
], ui = [
	"#bc9461",
	"#cba574",
	"#c29c69"
];
function di({ size: e = li, brightness: t = 0 }) {
	let n = (0, L.useMemo)(ci, []);
	return (0, L.useEffect)(() => () => n.forEach((e) => e.dispose()), [n]), /* @__PURE__ */ (0, U.jsxs)("group", {
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
				children: /* @__PURE__ */ (0, U.jsx)(P, { color: ui[t] })
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#eeeae2" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#e5e0d6" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#e5e0d6" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "opal-bulb",
				position: oi,
				scale: [
					1,
					1.25,
					1
				],
				children: [/* @__PURE__ */ (0, U.jsx)("sphereGeometry", { args: [
					.034,
					20,
					12
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#c7b899" })]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/lighting/rattan-bell-pendant/model.tsx
function fi({ state: e, visualState: t }) {
	let n = t === "connected-active" ? .18 * c(e) : 0;
	return /* @__PURE__ */ (0, U.jsx)(di, { brightness: n });
}
//#endregion
//#region packages/catalog/src/device/presets/media/camera-screen-display.ts
var pi = .9, mi = .54, hi = .012, gi = .04, _i = .98, vi = .006, yi = .002, bi = 5.6, xi = .035, Si = .96, Ci = (e, t) => {
	if (t) return {
		verticalOffset: 0,
		normalOffset: 0,
		glowPulse: .5
	};
	let n = e * Math.PI * 2 / bi;
	return {
		verticalOffset: Math.sin(n) * vi,
		normalOffset: Math.cos(n) * yi,
		glowPulse: .5 + Math.sin(n * .75) * .5
	};
}, wi = .78, Ti = wi * 9 / 16, Ei = .31, Di = gi + hi / 2, Oi = hi / 2 + .004, ki = Oi + .004, Ai = ki + .004;
function ji({ position: e, size: t }) {
	return /* @__PURE__ */ (0, U.jsxs)("mesh", {
		position: e,
		renderOrder: 12,
		children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: t }), /* @__PURE__ */ (0, U.jsx)(P, {
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
var Mi = [
	/* @__PURE__ */ (0, U.jsx)(ji, {
		position: [
			-.405,
			.252,
			Ai
		],
		size: [
			.055,
			.003,
			.002
		]
	}, "tl-h"),
	/* @__PURE__ */ (0, U.jsx)(ji, {
		position: [
			-.432,
			.212,
			Ai
		],
		size: [
			.003,
			.06,
			.002
		]
	}, "tl-v"),
	/* @__PURE__ */ (0, U.jsx)(ji, {
		position: [
			.405,
			.252,
			Ai
		],
		size: [
			.055,
			.003,
			.002
		]
	}, "tr-h"),
	/* @__PURE__ */ (0, U.jsx)(ji, {
		position: [
			.432,
			.212,
			Ai
		],
		size: [
			.003,
			.06,
			.002
		]
	}, "tr-v"),
	/* @__PURE__ */ (0, U.jsx)(ji, {
		position: [
			-.405,
			-.252,
			Ai
		],
		size: [
			.055,
			.003,
			.002
		]
	}, "bl-h"),
	/* @__PURE__ */ (0, U.jsx)(ji, {
		position: [
			-.432,
			-.212,
			Ai
		],
		size: [
			.003,
			.06,
			.002
		]
	}, "bl-v"),
	/* @__PURE__ */ (0, U.jsx)(ji, {
		position: [
			.405,
			-.252,
			Ai
		],
		size: [
			.055,
			.003,
			.002
		]
	}, "br-h"),
	/* @__PURE__ */ (0, U.jsx)(ji, {
		position: [
			.432,
			-.212,
			Ai
		],
		size: [
			.003,
			.06,
			.002
		]
	}, "br-v")
];
function Ni({ liveMedia: e, visualState: t, reducedMotion: n }) {
	let r = (0, L.useRef)(null), { invalidate: i } = be(), a = e?.state === "playing", o = e?.state === "connecting", s = e?.previewState === "cors-blocked", c = a && !s ? "#9afff6" : o ? "#f3b562" : s ? "#f0a56a" : "#6f958f";
	return (0, L.useEffect)(() => {
		if (n) return;
		let e = globalThis.setInterval(() => i(), 1e3 / 12);
		return () => globalThis.clearInterval(e);
	}, [i, n]), (0, L.useEffect)(() => {
		n && (r.current?.position.set(0, 0, Di), i());
	}, [i, n]), N(({ clock: e }) => {
		if (!r.current) return;
		let t = Ci(e.elapsedTime, n);
		r.current.position.set(0, t.verticalOffset, Di + t.normalOffset);
	}), /* @__PURE__ */ (0, U.jsx)("group", {
		name: "catalog-camera-screen",
		children: /* @__PURE__ */ (0, U.jsxs)("group", {
			name: `device-state-${t}`,
			children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					0,
					Ei,
					-.001
				],
				renderOrder: 2,
				children: [/* @__PURE__ */ (0, U.jsx)("planeGeometry", { args: [_i, .62] }), /* @__PURE__ */ (0, U.jsx)(P, {
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
					Di
				],
				children: [
					/* @__PURE__ */ (0, U.jsx)(F, {
						args: [
							pi,
							mi,
							hi
						],
						radius: .012,
						smoothness: 2,
						position: [
							0,
							Ei,
							0
						],
						renderOrder: 5,
						children: /* @__PURE__ */ (0, U.jsx)(P, {
							color: "#64cfc7",
							emissive: "#298f8a",
							emissiveIntensity: .4,
							transparent: !0,
							opacity: xi,
							depthWrite: !1,
							toneMapped: !1
						})
					}),
					/* @__PURE__ */ (0, U.jsx)(F, {
						args: [
							.808,
							.46675000000000005,
							.004
						],
						radius: .016,
						smoothness: 1,
						position: [
							0,
							Ei,
							Oi
						],
						renderOrder: 7,
						children: /* @__PURE__ */ (0, U.jsx)(P, {
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
							Ei,
							ki
						],
						children: /* @__PURE__ */ (0, U.jsx)(ve, {
							media: e,
							width: wi,
							height: Ti,
							opacity: Si
						})
					}),
					/* @__PURE__ */ (0, U.jsxs)("group", {
						name: "camera-screen-holographic-reticle",
						position: [
							0,
							Ei,
							0
						],
						children: [
							Mi,
							/* @__PURE__ */ (0, U.jsx)(ji, {
								position: [
									.06,
									.268,
									Ai
								],
								size: [
									.48,
									.0015,
									.001
								]
							}),
							/* @__PURE__ */ (0, U.jsx)(ji, {
								position: [
									-.08,
									-.268,
									Ai
								],
								size: [
									.55,
									.0015,
									.001
								]
							}),
							/* @__PURE__ */ (0, U.jsx)(ji, {
								position: [
									-.449,
									0,
									Ai
								],
								size: [
									.0015,
									.28,
									.001
								]
							}),
							/* @__PURE__ */ (0, U.jsx)(ji, {
								position: [
									.449,
									.035,
									Ai
								],
								size: [
									.0015,
									.21,
									.001
								]
							}),
							Array.from({ length: 7 }, (e, t) => /* @__PURE__ */ (0, U.jsx)(ji, {
								position: [
									-.415,
									-.09 + t * .025,
									Ai
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
							].map((e, t) => /* @__PURE__ */ (0, U.jsx)(ji, {
								position: [
									-.3 + t * .035,
									-.249,
									Ai
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
							Ai
						],
						renderOrder: 12,
						children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
							.16,
							.003,
							.002
						] }), /* @__PURE__ */ (0, U.jsx)(P, {
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
							Ai + .003
						],
						renderOrder: 13,
						children: [/* @__PURE__ */ (0, U.jsx)("ringGeometry", { args: [
							.012,
							.014,
							32
						] }), /* @__PURE__ */ (0, U.jsx)(P, {
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
var Pi = [
	.72,
	.52,
	.045
], Fi = Pi[0], Ii = Pi[1], Li = Pi[2], Ri = .045, zi = Fi - Ri * 2, Bi = Ii - Ri * 2, Vi = Li / 2 - .001, Hi = (e) => e === "oak" ? {
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
function Ui({ finish: e, liveMedia: t, visualState: n }) {
	let r = Hi(e), a = (e, t, n, a) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
		name: e,
		position: t,
		castShadow: !0,
		receiveShadow: !0,
		children: [
			/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: n }),
			/* @__PURE__ */ (0, U.jsx)(P, { color: a }),
			/* @__PURE__ */ (0, U.jsx)(i, {
				color: r.outline,
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
					Ii / 2,
					.005
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					zi,
					Bi,
					.012
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: r.inset })]
			}),
			/* @__PURE__ */ (0, U.jsx)("group", {
				position: [
					0,
					Ii / 2,
					.012
				],
				children: /* @__PURE__ */ (0, U.jsx)(ve, {
					media: t,
					width: zi - .012,
					height: Bi - .012,
					opacity: .9
				})
			}),
			a("connected-frame-left-rail", [
				-Fi / 2 + Ri / 2,
				Ii / 2,
				Vi
			], [
				Ri,
				Ii,
				Li
			], r.vertical),
			a("connected-frame-right-rail", [
				Fi / 2 - Ri / 2,
				Ii / 2,
				Vi
			], [
				Ri,
				Ii,
				Li
			], r.vertical),
			a("connected-frame-top-rail", [
				0,
				Ii - Ri / 2,
				Vi
			], [
				zi,
				Ri,
				Li
			], r.horizontal),
			a("connected-frame-bottom-rail", [
				0,
				Ri / 2,
				Vi
			], [
				zi,
				Ri,
				Li
			], r.horizontal),
			/* @__PURE__ */ (0, U.jsx)(G, {
				visualState: n,
				position: [
					Fi / 2 - .0225,
					.0225,
					.037
				],
				scale: .22
			})
		]
	});
}
function Wi(e) {
	return /* @__PURE__ */ (0, U.jsx)(Ui, {
		...e,
		finish: "oak"
	});
}
function Gi(e) {
	return /* @__PURE__ */ (0, U.jsx)(Ui, {
		...e,
		finish: "black"
	});
}
//#endregion
//#region packages/catalog/src/device/presets/media/speaker.tsx
function Ki({ visualState: e, reducedMotion: t }) {
	let n = e === "connected-active", r = (0, L.useRef)(null);
	return N(({ clock: e, invalidate: i }) => {
		if (!r.current) return;
		let a = n && !t ? 1 + .16 * Math.sin(e.elapsedTime * 6) : 1;
		r.current.scale.set(a, 1, 1), n && !t && i();
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: W.charcoal }),
					/* @__PURE__ */ (0, U.jsx)(i, {
						color: "#39433f",
						thickness: .006
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsx)("group", {
				ref: r,
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
					] }), /* @__PURE__ */ (0, U.jsx)(P, { color: n ? W.coral : W.bodyDark })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: W.body })]
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
	let r = (0, L.useMemo)(() => {
		let t = new Re();
		return e.forEach(([e, n], r) => r ? t.lineTo(e, n) : t.moveTo(e, n)), t.closePath(), t;
	}, [e]);
	return /* @__PURE__ */ (0, U.jsx)(Ge, {
		layer: n,
		color: t,
		emissive: t,
		emissiveIntensity: .85,
		children: /* @__PURE__ */ (0, U.jsx)("shapeGeometry", { args: [r] })
	});
}
//#endregion
//#region packages/catalog/src/device/presets/media/television-superman.tsx
var qi = "#15253d";
function Ji({ reducedMotion: e }) {
	let t = (0, L.useRef)(null), n = (0, L.useRef)(0);
	return N((r, i) => {
		e || !t.current || (n.current += Math.min(i, .05), t.current.scale.y = 1 + Math.sin(n.current * 3) * .09);
	}), /* @__PURE__ */ (0, U.jsxs)("group", { children: [
		/* @__PURE__ */ (0, U.jsxs)("group", {
			ref: t,
			children: [
				/* @__PURE__ */ (0, U.jsx)(q, {
					layer: 10,
					color: qi,
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
			color: qi,
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
			color: qi,
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
			color: qi,
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
			color: qi,
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
			color: qi,
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
			color: qi,
			points: [
				[.265, .192],
				[.285, .188],
				[.28, .18],
				[.265, .183]
			]
		}),
		/* @__PURE__ */ (0, U.jsx)(q, {
			layer: 28,
			color: qi,
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
var Yi = [
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
function Xi({ width: e, height: t, reducedMotion: n }) {
	let r = (0, L.useRef)(null), i = (0, L.useRef)(null), a = (0, L.useRef)(0);
	return N(({ invalidate: e }, t) => {
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
						points: Yi
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
					children: /* @__PURE__ */ (0, U.jsx)(Ji, { reducedMotion: n })
				})
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/media/television.tsx
var Zi = "#28312f", Qi = "#596360", $i = (e) => {
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
function ea() {
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: "catalog-television-rounded-shell",
		position: [
			0,
			.515,
			0
		],
		children: /* @__PURE__ */ (0, U.jsx)(F, {
			args: [
				1.54,
				.84,
				.06
			],
			radius: .025,
			smoothness: 2,
			castShadow: !0,
			receiveShadow: !0,
			children: /* @__PURE__ */ (0, U.jsx)(P, { color: Zi })
		})
	});
}
function ta({ visualState: e, liveMedia: t, reducedMotion: n }) {
	let r = $i(e);
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-television",
		children: [
			/* @__PURE__ */ (0, U.jsx)(ea, {}),
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: r.screen })]
			}),
			t ? /* @__PURE__ */ (0, U.jsx)("group", {
				position: [
					0,
					.515,
					.047
				],
				children: /* @__PURE__ */ (0, U.jsx)(ve, {
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
				children: /* @__PURE__ */ (0, U.jsx)(Xi, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
					color: r.reflection,
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
					color: r.reflection,
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
					] }), /* @__PURE__ */ (0, U.jsx)(P, { color: Qi })]
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
						/* @__PURE__ */ (0, U.jsx)(P, { color: Qi }),
						/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#222928" })]
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
var na = [
	2.4,
	1.36,
	.07
];
function ra({ visualState: e, reducedMotion: t }) {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#252b30" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: n ? "#457a88" : "#1c3039" })]
			}),
			n && /* @__PURE__ */ (0, U.jsx)("group", {
				position: [
					0,
					.68,
					.069
				],
				children: /* @__PURE__ */ (0, U.jsx)(Xi, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
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
var ia = [
	1.58,
	.9,
	.07
];
function aa(e) {
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: "compact-wall-television",
		scale: [
			1.58 / 2.4,
			.9 / 1.36,
			1
		],
		children: /* @__PURE__ */ (0, U.jsx)(ra, { ...e })
	});
}
//#endregion
//#region packages/catalog/src/device/presets/security/video-doorbell.tsx
function oa({ visualState: e }) {
	let t = e === "connected-active";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-video-doorbell",
		children: [
			/* @__PURE__ */ (0, U.jsxs)(F, {
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
				children: [/* @__PURE__ */ (0, U.jsx)(P, { color: "#4d5855" }), /* @__PURE__ */ (0, U.jsx)(i, {
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
					/* @__PURE__ */ (0, U.jsx)(P, {
						color: "#182322",
						emissive: "#3f7775",
						emissiveIntensity: t ? .35 : .05
					}),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: t ? W.coral : W.bodyDark })]
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
function sa({ visualState: e }) {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: W.bodyDark }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#88918d" })]
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: W.body }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
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
function ca({ visualState: e }) {
	let t = e === "connected-active";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-smart-lock",
		children: [
			/* @__PURE__ */ (0, U.jsxs)(F, {
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
				children: [/* @__PURE__ */ (0, U.jsx)(P, { color: W.body }), /* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#69736f" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#394541" })]
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
var la = Array.from({ length: 12 }, (e, t) => ({
	x: (t % 3 - 1) * .044,
	y: .134 - Math.floor(t / 3) * .034
}));
function ua({ visualState: e }) {
	let t = e === "connected-active";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-alarm-keypad",
		children: [
			/* @__PURE__ */ (0, U.jsxs)(F, {
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
				children: [/* @__PURE__ */ (0, U.jsx)(P, { color: W.body }), /* @__PURE__ */ (0, U.jsx)(i, {
					color: W.charcoal,
					thickness: .003
				})]
			}),
			/* @__PURE__ */ (0, U.jsx)(F, {
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
				children: /* @__PURE__ */ (0, U.jsx)(P, {
					color: "#33423f",
					emissive: t ? W.green : "#52635e",
					emissiveIntensity: t ? .32 : .06
				})
			}),
			la.map(({ x: e, y: t }, n) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: n >= 9 ? "#9daba5" : W.bodyDark })]
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
function da({ visualState: e }) {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: W.body }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: t ? "#d95f4b" : "#bdc5bf" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#69746f" })]
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
function fa({ visualState: e }) {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: W.body }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: t ? W.coral : W.paleBlue })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: t ? W.coral : W.paleBlue })]
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
function pa({ visualState: e }) {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: W.body }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: t ? W.paleBlue : W.bodyDark })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: W.coral })]
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
function ma({ visualState: e }) {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: W.body }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: t ? W.coral : W.bodyDark }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
var ha = (e) => {
	let t = Number(e?.state);
	return Number.isFinite(t) ? t : 20;
};
function ga({ state: e, visualState: t }) {
	let n = ((Math.max(-10, Math.min(40, ha(e))) + 10) / 50 - .5) * Math.PI * 1.3;
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: W.body }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: W.coral })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: W.charcoal })]
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
function _a({ visualState: e }) {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: W.body }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#d5d5cf" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#78807c" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
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
function va({ visualState: e }) {
	let t = e === "connected-active";
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-carbon-monoxide-alarm",
		children: [
			/* @__PURE__ */ (0, U.jsxs)(F, {
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
				children: [/* @__PURE__ */ (0, U.jsx)(P, { color: W.body }), /* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#909792" })]
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
function ya({ state: e, visualState: t }) {
	let n = typeof e?.attributes.native_value == "number" ? e.attributes.native_value : Number(e?.state ?? 50), r = Number.isFinite(n) && n >= 65;
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-humidity-sensor",
		children: [
			/* @__PURE__ */ (0, U.jsxs)(F, {
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
				children: [/* @__PURE__ */ (0, U.jsx)(P, { color: W.body }), /* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
					color: "#354441",
					emissive: r ? W.coral : W.paleBlue,
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: r ? W.coral : W.paleBlue })]
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
function ba({ state: e, visualState: t }) {
	let n = Number(e?.state), r = Number.isFinite(n) && n > 1e3;
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-air-quality-monitor",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsxs)(F, {
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
				children: [/* @__PURE__ */ (0, U.jsx)(P, { color: W.body }), /* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
					color: "#31413f",
					emissive: r ? W.coral : W.green,
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#8d9691" })]
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
function xa({ visualState: e }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-energy-monitor",
		children: [
			/* @__PURE__ */ (0, U.jsxs)(F, {
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
				children: [/* @__PURE__ */ (0, U.jsx)(P, { color: "#d8ddd7" }), /* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: t === 1 ? W.coral : W.paleBlue })]
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
function Sa({ state: e, visualState: t }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: r ? W.paleBlue : W.muted })]
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
var Ca = new I();
function wa(e, t, n, r, i, a) {
	let o = 2 * Math.PI * i / 4, s = Math.max(a - 2 * i, 0), c = Math.PI / 4;
	Ca.copy(t), Ca[r] = 0, Ca.normalize();
	let l = .5 * o / (o + s), u = 1 - Ca.angleTo(e) / c;
	return Math.sign(Ca[n]) === 1 ? u * l : s / (o + s) + l + l * (1 - u);
}
var Ta = class e extends O {
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
		let s = new I(), c = new I(), l = new I(e, t, n).divideScalar(2).subScalar(i), u = this.attributes.position.array, d = this.attributes.normal.array, f = this.attributes.uv.array, p = u.length / 6, m = new I(), h = .5 / a;
		for (let r = 0, a = 0; r < u.length; r += 3, a += 2) switch (s.fromArray(u, r), c.copy(s), c.x -= Math.sign(c.x) * h, c.y -= Math.sign(c.y) * h, c.z -= Math.sign(c.z) * h, c.normalize(), u[r + 0] = l.x * Math.sign(s.x) + c.x * i, u[r + 1] = l.y * Math.sign(s.y) + c.y * i, u[r + 2] = l.z * Math.sign(s.z) + c.z * i, d[r + 0] = c.x, d[r + 1] = c.y, d[r + 2] = c.z, Math.floor(r / p)) {
			case 0:
				m.set(1, 0, 0), f[a + 0] = wa(m, c, "z", "y", i, n), f[a + 1] = 1 - wa(m, c, "y", "z", i, t);
				break;
			case 1:
				m.set(-1, 0, 0), f[a + 0] = 1 - wa(m, c, "z", "y", i, n), f[a + 1] = 1 - wa(m, c, "y", "z", i, t);
				break;
			case 2:
				m.set(0, 1, 0), f[a + 0] = 1 - wa(m, c, "x", "z", i, e), f[a + 1] = wa(m, c, "z", "x", i, n);
				break;
			case 3:
				m.set(0, -1, 0), f[a + 0] = 1 - wa(m, c, "x", "z", i, e), f[a + 1] = 1 - wa(m, c, "z", "x", i, n);
				break;
			case 4:
				m.set(0, 0, 1), f[a + 0] = 1 - wa(m, c, "x", "y", i, e), f[a + 1] = 1 - wa(m, c, "y", "x", i, t);
				break;
			case 5: m.set(0, 0, -1), f[a + 0] = wa(m, c, "x", "y", i, e), f[a + 1] = 1 - wa(m, c, "y", "x", i, t);
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
		geometry: (r > 0 ? new Ta(...e, 1, Math.min(r, ...e.map((e) => e / 2))) : new O(...e)).translate(...t),
		color: n
	};
}
function X(e, n = J.trim, r = .005) {
	return {
		geometry: new t(new k(e.map((e) => new I(...e)), !1, "catmullrom", 0), Math.max(6, e.length * 5), r, 5, !1),
		color: n
	};
}
function Ea(e, t) {
	let n = e.flat(), r = [];
	for (let t = 1; t < e.length - 1; t++) r.push(0, t, t + 1);
	let i = [...r, ...r.flatMap((e, t, n) => t % 3 == 0 ? [
		n[t],
		n[t + 2],
		n[t + 1]
	] : [])], a = new qe();
	return a.setAttribute("position", new Ae(i.flatMap((e) => n.slice(e * 3, e * 3 + 3)), 3)), a.computeVertexNormals(), {
		geometry: a,
		color: t
	};
}
function Da(e, t, n, r = .025, i) {
	let a = new E(e, {
		depth: t * 2,
		bevelEnabled: r > 0,
		bevelThickness: r,
		bevelSize: r,
		bevelSegments: 3,
		curveSegments: 16,
		steps: 1
	}), o = a.attributes.position;
	for (let e = 0; e < o.count; e++) {
		let n = o.getX(e), r = o.getY(e), a = o.getZ(e) - t;
		i && (a *= 1 - Math.max(0, r - i.belt) * i.slope / t), o.setXYZ(e, a, r, n);
	}
	for (let e = 0; e < o.count; e += 3) {
		let t = new I().fromBufferAttribute(o, e + 1);
		o.setXYZ(e + 1, o.getX(e + 2), o.getY(e + 2), o.getZ(e + 2)), o.setXYZ(e + 2, t.x, t.y, t.z);
	}
	return a.deleteAttribute("normal"), a.computeVertexNormals(), {
		geometry: a,
		color: n
	};
}
function Oa({ halfLength: e, halfWidth: t, sill: n, shoulder: r, axles: i, tireRadius: a, color: o }) {
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
	let m = new qe();
	return m.setAttribute("position", new Ae(c, 3)), m.setIndex(l), m.computeVertexNormals(), {
		geometry: m,
		color: o
	};
}
function ka(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let { geometry: t, color: r } of e) {
		let e = t.index ? t.toNonIndexed() : t.clone();
		e.deleteAttribute("uv");
		let i = n.get(r) ?? [];
		i.push(e), n.set(r, i), t.dispose();
	}
	return [...n].map(([e, n], r) => {
		let i = M(n);
		return n.forEach((e) => e.dispose()), {
			geometry: i,
			color: e,
			name: `${t}-finish-${r}`
		};
	});
}
function Aa({ batches: e }) {
	return /* @__PURE__ */ (0, U.jsx)("group", {
		dispose: null,
		children: e.map(({ name: e, geometry: t, color: n }) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: e,
			geometry: t,
			castShadow: !0,
			receiveShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)(P, { color: n }), ![
				...Object.values(J),
				"#77848b",
				"#536069"
			].includes(n) && /* @__PURE__ */ (0, U.jsx)(i, {
				color: "#28353b",
				thickness: .0015,
				screenspace: !1
			})]
		}, e))
	});
}
//#endregion
//#region packages/catalog/src/device/presets/vehicles/vehicle-cabin.ts
function ja(e) {
	let { rearBase: t, rearTop: n, frontTop: r, frontBase: i, belt: a, roof: o, halfWidth: s, split: c, color: l } = e, u = new Re();
	u.moveTo(t, a), u.lineTo(i, a), u.lineTo(r + .08, o - .1), u.quadraticCurveTo(r + .03, o - .025, r - .04, o - .025), u.lineTo(n + .06, o - .025), u.quadraticCurveTo(n, o - .025, n - .05, o - .1), u.closePath();
	let d = [Da(u, s, l, .025, {
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
			d.push(Ea(t, J.glass)), d.push(X([...t, t[0]], J.trim, .01));
			let [n, r, i] = [
				e[0],
				e[1],
				e[2]
			];
			d.push(Ea([
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
		if (d.push(Ea(m, J.glass), X([...m, m[0]], J.trim, .012)), e) for (let e of [-1, 1]) d.push(X([[
			e * .48,
			l + .012,
			p(l) + .013
		], [
			e * .13,
			l + .045,
			p(l + .045) + .013
		]], J.recess, .008));
	}
	return e.glassRoof && d.push(Ea([
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
function Ma({ halfWidth: e, mirrorWidth: t, belt: n, frontDoor: r, rearDoor: i, rearEdge: a, axles: o, tireRadius: s, color: c, rugged: l = !1 }) {
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
function Na({ radius: e, track: t, axles: n, spokes: r = 10, rugged: i = !1 }) {
	let a = [], o = i ? .27 : .23;
	for (let s of [-1, 1]) for (let c of n) {
		let n = s * t / 2, l = (t, r, i, o, l = 32) => {
			a.push({
				geometry: new u(t, t, r, l).rotateZ(Math.PI / 2).translate(n + s * i, e, c),
				color: o
			});
		}, d = new re(e * .77, e * .23, 10, 32);
		d.scale(1, 1, o / (e * .46)), d.rotateY(Math.PI / 2).translate(n, e, c), a.push({
			geometry: d,
			color: J.rubber
		}), l(e * .73, .024, o / 2 - .025, J.trim), l(e * .56, .018, o / 2 - .015, "#77848b"), l(e * .19, .035, o / 2 + .008, J.alloy, 16);
		let f = new re(e * .65, .013, 6, 32).rotateY(Math.PI / 2).translate(n + s * o / 2, e, c);
		a.push({
			geometry: f,
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
				geometry: new u(.013, .013, .012, 6).rotateZ(Math.PI / 2).translate(n + s * (o / 2 + .025), e + Math.cos(r) * e * .12, c + Math.sin(r) * e * .12),
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
	return ka(a, "vehicle-wheels");
}
//#endregion
//#region packages/catalog/src/device/presets/vehicles/compact-car.tsx
var Pa = [
	1.94,
	1.5,
	4
], Fa = "#5c91b0", Ia = [-1.26, 1.25], La = ka([
	Oa({
		halfLength: 1.925,
		halfWidth: .835,
		sill: .27,
		axles: Ia,
		tireRadius: .3,
		color: Fa,
		shoulder: [
			[1.925, .73],
			[1.72, .86],
			[1.02, .97],
			[-1.57, .97],
			[-1.925, .84]
		]
	}),
	...ja({
		rearBase: -1.68,
		rearTop: -1.14,
		frontTop: .32,
		frontBase: 1.02,
		belt: .94,
		roof: 1.5,
		halfWidth: .755,
		split: -.35,
		color: Fa
	}),
	...Ma({
		halfWidth: .835,
		mirrorWidth: 1.94,
		belt: .94,
		frontDoor: .83,
		rearDoor: -.25,
		rearEdge: -.83,
		axles: Ia,
		tireRadius: .3,
		color: Fa
	}),
	Y([
		1.55,
		.19,
		.15
	], [
		0,
		.44,
		1.91
	], Fa, .065),
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
	], Fa, .06),
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
	], Fa, .01),
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
	], Fa, .01),
	Y([
		1.28,
		.035,
		.14
	], [
		0,
		1.451,
		-1.13
	], Fa, .016),
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
], "compact-body"), Ra = Na({
	radius: .3,
	track: 1.55,
	axles: Ia,
	spokes: 8
});
function za({ visualState: e }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-compact-car",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(Aa, { batches: La }),
			/* @__PURE__ */ (0, U.jsx)(Aa, { batches: Ra }),
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
var Ba = [
	2.08,
	1.45,
	4.7
], Va = "#e1e5e0", Ha = [-1.48, 1.43], Ua = ka([
	Oa({
		halfLength: 2.275,
		halfWidth: .895,
		sill: .255,
		axles: Ha,
		tireRadius: .33,
		color: Va,
		shoulder: [
			[2.275, .7],
			[1.96, .81],
			[1.28, .925],
			[-1.54, .925],
			[-2.275, .81]
		]
	}),
	...ja({
		rearBase: -1.78,
		rearTop: -.76,
		frontTop: .36,
		frontBase: 1.25,
		belt: .905,
		roof: 1.45,
		halfWidth: .795,
		split: -.27,
		color: Va,
		glassRoof: !0
	}),
	...Ma({
		halfWidth: .895,
		mirrorWidth: 2.08,
		belt: .905,
		frontDoor: .97,
		rearDoor: -.18,
		rearEdge: -1.02,
		axles: Ha,
		tireRadius: .33,
		color: Va
	}),
	Y([
		1.72,
		.2,
		.15
	], [
		0,
		.45,
		2.26
	], Va, .07),
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
	], Va, .075),
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
	], Va, .018),
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
	], Va, .012),
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
	], Va, .012),
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
], "electric-body"), Wa = Na({
	radius: .33,
	track: 1.69,
	axles: Ha,
	spokes: 10
});
function Ga({ visualState: e }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-electric-sedan",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(Aa, { batches: Ua }),
			/* @__PURE__ */ (0, U.jsx)(Aa, { batches: Wa }),
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
function Ka(e) {
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
var qa = [
	2.24,
	1.86,
	5.4
], Ja = "#687d79", Ya = [-1.75, 1.75], Xa = ka([
	Oa({
		halfLength: 2.58,
		halfWidth: .955,
		sill: .4,
		axles: Ya,
		tireRadius: .4,
		color: Ja,
		shoulder: [
			[2.58, 1.01],
			[2.22, 1.14],
			[1.44, 1.18],
			[-.62, 1.14],
			[-.68, .72],
			[-2.58, .72]
		]
	}),
	...ja({
		rearBase: -.62,
		rearTop: -.48,
		frontTop: .73,
		frontBase: 1.42,
		belt: 1.13,
		roof: 1.86,
		halfWidth: .84,
		split: .08,
		color: Ja
	}),
	...Ma({
		halfWidth: .955,
		mirrorWidth: 2.24,
		belt: 1.13,
		frontDoor: 1.15,
		rearDoor: .15,
		rearEdge: -.55,
		axles: Ya,
		tireRadius: .4,
		color: Ja,
		rugged: !0
	}),
	...Ka(Ja),
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
	], Ja, .018),
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
	], Ja, .018),
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
], "pickup-body"), Za = Na({
	radius: .4,
	track: 1.84,
	axles: Ya,
	spokes: 6,
	rugged: !0
});
function Qa({ visualState: e }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-pickup-truck",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(Aa, { batches: Xa }),
			/* @__PURE__ */ (0, U.jsx)(Aa, { batches: Za }),
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
function $a({ reducedMotion: e }) {
	let t = (0, L.useRef)(null), n = (0, L.useRef)(0);
	return N(({ invalidate: r }, i) => {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
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
function eo({ visualState: e, reducedMotion: t }) {
	let n = e === "connected-active", r = (0, L.useRef)(null), a = (0, L.useRef)([
		1,
		n ? 1 : .08,
		1
	]), o = be((e) => e.invalidate);
	return (0, L.useEffect)(() => {
		o();
	}, [
		n,
		t,
		o
	]), N((e, i) => {
		if (!r.current) return;
		let a = n ? 1 : .08;
		r.current.scale.y = t ? a : f.damp(r.current.scale.y, a, 9, Math.min(i, .05)), Math.abs(r.current.scale.y - a) > 1e-4 && o();
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
				/* @__PURE__ */ (0, U.jsx)(P, { color: "#34433e" }),
				/* @__PURE__ */ (0, U.jsx)(i, {
					color: "#24312c",
					thickness: .001,
					screenspace: !1
				})
			]
		}), /* @__PURE__ */ (0, U.jsxs)("group", {
			ref: r,
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
					] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#899b99" })]
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
					] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#283c32" })]
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
					] }), /* @__PURE__ */ (0, U.jsx)(P, { color: n ? "#73c398" : "#60876b" })]
				}),
				n && /* @__PURE__ */ (0, U.jsx)("group", {
					position: [
						0,
						.1,
						0
					],
					children: /* @__PURE__ */ (0, U.jsx)($a, { reducedMotion: t ?? !1 })
				})
			]
		})]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/irrigation/rotating-sprinkler.tsx
function to({ visualState: e, reducedMotion: t }) {
	let n = (0, L.useRef)(null), r = e === "connected-active";
	return N(({ invalidate: e }, i) => {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#466b51" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#687d77" })]
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
						] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#a4b4ae" })]
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
						] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#334f3d" })]
					})]
				}, e)), r && /* @__PURE__ */ (0, U.jsx)($a, { reducedMotion: t ?? !1 })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/device/presets/irrigation/smart-hose-timer.tsx
function no({ visualState: e }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "catalog-smart-hose-timer",
		children: [
			/* @__PURE__ */ (0, U.jsx)(F, {
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
				children: /* @__PURE__ */ (0, U.jsx)(P, { color: "#d6dfd1" })
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#8e9e91" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: e === "connected-active" ? "#6dbed3" : "#445953" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#526e50" })]
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
function ro({ visualState: e }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#697b6e" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(F, {
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
				children: /* @__PURE__ */ (0, U.jsx)(P, { color: "#bdcbb5" })
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#3c6054" })]
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
//#endregion
//#region packages/catalog/src/device/definitions/rattan-bell-pendant.ts
var io = j({
	component: fi,
	label: "Rattan bell pendant",
	category: "Lighting",
	defaultRoomType: "dining-room",
	defaultSize: li,
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
		position: oi,
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
}), ao = {
	target: "device-dashboard",
	tapTolerancePixels: 10
}, oo = j({
	component: aa,
	label: "Compact wall television",
	category: "Media",
	defaultRoomType: "living-room",
	defaultSize: ia,
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
	interaction: ao,
	complexity: {
		visibleMeshes: 7,
		triangles: 160
	}
}), so = j({
	defaultRoomType: "living-room",
	component: ra,
	label: "Wall television · 110 inch",
	category: "Media",
	defaultSize: na,
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
	interaction: ao,
	complexity: {
		visibleMeshes: 7,
		triangles: 160
	}
}), Z = {
	target: "device-dashboard",
	tapTolerancePixels: 10
}, co = je({
	"indoor-ac": j({
		defaultRoomType: "bedroom",
		component: rr,
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
	"washing-machine": j({
		defaultRoomType: "laundry",
		component: Nn,
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
	"tumble-dryer": j({
		defaultRoomType: "laundry",
		component: Pn,
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
	dishwasher: j({
		variants: In,
		defaultRoomType: "kitchen",
		component: zn,
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
	oven: j({
		defaultRoomType: "kitchen",
		component: Bn,
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
	"water-heater": j({
		defaultRoomType: "laundry",
		component: Vn,
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
	speaker: j({
		defaultRoomType: "living-room",
		component: Ki,
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
	television: j({
		defaultRoomType: "living-room",
		component: ta,
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
	"compact-wall-television": oo,
	"wall-television": so,
	"camera-screen": j({
		defaultRoomType: "entryway",
		component: Ni,
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
	"connected-frame-oak": j({
		defaultRoomType: "living-room",
		component: Wi,
		label: "Connected frame · Oak",
		category: "Media",
		defaultSize: Pi,
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
	"connected-frame-black": j({
		defaultRoomType: "living-room",
		component: Gi,
		label: "Connected frame · Black",
		category: "Media",
		defaultSize: Pi,
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
	"floor-lamp": j({
		defaultRoomType: "living-room",
		component: Ar,
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
	"rattan-bell-pendant": io,
	"terracotta-pendant": j({
		defaultRoomType: "dining-room",
		component: Fr,
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
		interaction: Z,
		complexity: {
			visibleMeshes: 8,
			triangles: 2200
		}
	}),
	"low-garden-lantern": j({
		defaultRoomType: "outdoor",
		component: ei,
		label: "Low garden lantern",
		category: "Lighting",
		defaultSize: $r,
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
	"pergola-string-lights": j({
		component: ai,
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
	"garden-lantern-pole": j({
		defaultRoomType: "outdoor",
		component: Qr,
		label: "Garden lantern pole",
		category: "Lighting",
		defaultSize: Zr,
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
	"table-lamp": j({
		defaultRoomType: "bedroom",
		component: zr,
		label: "Table lamp",
		category: "Lighting",
		defaultSize: Rr,
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
	"woven-pendant": j({
		defaultRoomType: "dining-room",
		component: Vr,
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
	"children-pendant": j({
		defaultRoomType: "bedroom",
		component: Wr,
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
	"wall-switch": j({
		defaultRoomType: "entryway",
		component: cr,
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
	"opening-contact": j({
		defaultRoomType: "entryway",
		component: ma,
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
	thermometer: j({
		defaultRoomType: "bedroom",
		component: ga,
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
	"motion-sensor": j({
		defaultRoomType: "hallway",
		component: pa,
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
	"motorized-blind": j({
		defaultRoomType: "living-room",
		component: _r,
		label: "Motorized blind",
		category: "Covers",
		defaultSize: gr,
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
	"leak-sensor": j({
		defaultRoomType: "bathroom",
		component: fa,
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
	"ceiling-fan": j({
		defaultRoomType: "living-room",
		component: xr,
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
	"table-fan": j({
		defaultRoomType: "office",
		component: Tr,
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
	"pedestal-fan": j({
		defaultRoomType: "bedroom",
		component: Er,
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
	"heated-towel-rail": j({
		defaultRoomType: "bathroom",
		component: ar,
		label: "Heated towel rail",
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
		interaction: Z,
		complexity: {
			visibleMeshes: 13,
			triangles: 2100
		}
	}),
	"smart-panel-radiator": j({
		defaultRoomType: "living-room",
		component: or,
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
	"smart-thermostat": j({
		defaultRoomType: "hallway",
		component: sr,
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
	"smart-plug": j({
		defaultRoomType: "living-room",
		component: lr,
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
	"ceiling-light": j({
		defaultRoomType: "living-room",
		component: Gr,
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
	"recessed-downlight": j({
		defaultRoomType: "hallway",
		component: Kr,
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
	"wall-sconce": j({
		defaultRoomType: "bedroom",
		component: qr,
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
	"illuminated-round-mirror": j({
		defaultRoomType: "bathroom",
		component: Yr,
		label: "Illuminated round mirror",
		category: "Lighting",
		defaultSize: Jr,
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
	"motorized-curtain": j({
		defaultRoomType: "living-room",
		component: vr,
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
	"video-doorbell": j({
		defaultRoomType: "entryway",
		component: oa,
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
	"indoor-security-camera": j({
		defaultRoomType: "living-room",
		component: sa,
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
	"smoke-alarm": j({
		defaultRoomType: "hallway",
		component: _a,
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
	"carbon-monoxide-alarm": j({
		defaultRoomType: "hallway",
		component: va,
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
	"humidity-sensor": j({
		defaultRoomType: "bathroom",
		component: ya,
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
	"air-quality-monitor": j({
		defaultRoomType: "bedroom",
		component: ba,
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
	"energy-monitor": j({
		defaultRoomType: "laundry",
		component: xa,
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
	"air-purifier": j({
		defaultRoomType: "bedroom",
		component: Dr,
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
	"bathroom-extractor-fan": j({
		defaultRoomType: "bathroom",
		component: Or,
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
	refrigerator: j({
		defaultRoomType: "kitchen",
		component: Hn,
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
	"smart-power-strip": j({
		defaultRoomType: "office",
		component: ur,
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
	"humidifier-dehumidifier": j({
		defaultRoomType: "bedroom",
		component: Un,
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
	"robot-vacuum": j({
		defaultRoomType: "living-room",
		component: Wn,
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
	"smart-lock": j({
		defaultRoomType: "entryway",
		component: ca,
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
	"alarm-keypad": j({
		defaultRoomType: "entryway",
		component: ua,
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
	"rotating-sprinkler": j({
		component: to,
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
	"smart-hose-timer": j({
		component: no,
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
	"soil-moisture-sensor": j({
		component: ro,
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
	"pop-up-sprinkler": j({
		defaultRoomType: "outdoor",
		component: eo,
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
	"motorized-valve": j({
		defaultRoomType: "laundry",
		component: dr,
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
	siren: j({
		defaultRoomType: "hallway",
		component: da,
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
	"smart-button": j({
		defaultRoomType: "living-room",
		component: fr,
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
	microwave: j({
		defaultRoomType: "kitchen",
		component: Gn,
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
		interaction: Z,
		complexity: {
			visibleMeshes: 12,
			triangles: 2400
		}
	}),
	"coffee-maker": j({
		defaultRoomType: "kitchen",
		component: qn,
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
	"electric-kettle": j({
		defaultRoomType: "kitchen",
		component: Jn,
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
	freezer: j({
		defaultRoomType: "kitchen",
		component: Yn,
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
	"pet-feeder": j({
		defaultRoomType: "kitchen",
		component: Xn,
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
	"weather-station": j({
		defaultRoomType: "living-room",
		component: Sa,
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
	"compact-car": j({
		component: za,
		label: "Compact European car",
		category: "Vehicles",
		defaultRoomType: "outdoor",
		placementEnvironment: "indoor-outdoor",
		defaultSize: Pa,
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
	"electric-sedan": j({
		component: Ga,
		label: "Tesla-like electric sedan",
		category: "Vehicles",
		defaultRoomType: "outdoor",
		placementEnvironment: "indoor-outdoor",
		defaultSize: Ba,
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
	"pickup-truck": j({
		component: Qa,
		label: "Pickup truck",
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
Object.freeze(Object.keys(co));
//#endregion
//#region packages/catalog/src/furnishing/presets/bathroom/arched-mirror.tsx
function lo() {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#875d42" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				children: [/* @__PURE__ */ (0, U.jsx)("planeGeometry", { args: [.44, .7] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#b8cbca" })]
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#875d42" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#b8cbca" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bathroom/dark-oak-vessel-vanity.tsx
var uo = [
	.8,
	1.23,
	.52
];
function fo({ size: e = uo }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#32251f" })]
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#3b2922" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: e < 0 ? "#493229" : "#422d25" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#171a19" })]
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#50372c" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#eee9dd" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				children: [/* @__PURE__ */ (0, U.jsx)("circleGeometry", { args: [.175, 24] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#d6d2c9" })]
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#202422" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#202422" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#202422" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#202422" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/construction/four-leg-oak-table.tsx
function po({ width: e, height: t, depth: n, topThickness: r, legWidth: i }) {
	let a = t - r, o = e / 2 - i / 2 - .065, s = n / 2 - i / 2 - .065;
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
			color: "#d9b987",
			radius: .008
		}),
		[-o, o].flatMap((e) => [-s, s].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: "oak-table-leg",
			position: [
				e,
				a / 2,
				t
			],
			castShadow: !0,
			receiveShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
				i,
				a,
				i
			] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#c8a675" })]
		}, `${e}-${t}`))),
		[-s, s].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
			position: [
				0,
				a - .035,
				e
			],
			castShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
				2 * o - i,
				.07,
				.025
			] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#c6a372" })]
		}, e)),
		[-o, o].map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
			position: [
				e,
				a - .035,
				0
			],
			castShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
				.025,
				.07,
				2 * s - i
			] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#c6a372" })]
		}, e))
	] });
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bathroom/concealed-toilet-bowl.tsx
var mo = [
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
].map(([e, t]) => new Ce(e, t)), ho = [
	[.166, .426],
	[.193, .426],
	[.2, .433],
	[.2, .444],
	[.193, .451],
	[.158, .451],
	[.152, .444],
	[.152, .433],
	[.166, .426]
].map(([e, t]) => new Ce(e, t));
function go() {
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
				children: [/* @__PURE__ */ (0, U.jsx)("latheGeometry", { args: [mo, 32] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#e9e7e0" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "open-toilet-seat",
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("latheGeometry", { args: [ho, 32] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#faf9f4" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#d8d6cf" })]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bathroom/concealed-cistern-toilet.tsx
function _o() {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#f0f1ed" })]
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
			/* @__PURE__ */ (0, U.jsx)(go, {})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bathroom/towel-rail.tsx
function vo() {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#909794" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#aeb5b2" })]
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#e6dfd2" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
function yo() {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#e1d9ca" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#9da4a1" })]
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#eee9df" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
function bo() {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#eee6d5" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				children: [/* @__PURE__ */ (0, U.jsx)("circleGeometry", { args: [.18, 24] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#d7ccba" })]
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#aeb5b2" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#b9c0bd" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#aeb5b2" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bathroom/wicker-hamper.tsx
function xo() {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#a9784f" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#704b34" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#704b34" })]
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#b98a61" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
function So() {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#a97952" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#745039" })]
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#eeeae1" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
var Co = [
	-.72,
	-.24,
	.24,
	.72
], wo = [
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
function To() {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#684735" })]
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#9a6745" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#a87550" })]
			}),
			Co.flatMap((e) => wo.map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: Math.round(t * 100) % 10 == 0 ? "#704a35" : "#7f563d" })]
			}, `${e}-${t}`))),
			Co.map((e) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#4b4039" })]
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#a97650" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
var Eo = [
	1.7,
	.6,
	.78
];
function Do({ size: e = Eo }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#7e8b89" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#7e8b89" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/construction/rounded-suite-panel.tsx
function Q({ size: e, position: t, color: n, outline: r = "#77726b", rotation: a = [
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
			/* @__PURE__ */ (0, U.jsx)(P, { color: n }),
			/* @__PURE__ */ (0, U.jsx)(i, {
				thickness: .005,
				color: r,
				screenspace: !1
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bathroom/compact-toilet.tsx
function Oo() {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#d5d9d5" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#59615f" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#8c9391" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bathroom/family-bathtub.tsx
var ko = "#eeeae3", Ao = "#f8f5ef", jo = "#918d86", Mo = "#858d8b";
function No() {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: ko }),
					/* @__PURE__ */ (0, U.jsx)(i, {
						color: jo,
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: ko })]
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: ko }),
					/* @__PURE__ */ (0, U.jsx)(i, {
						color: jo,
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: Ao })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: Ao }),
					/* @__PURE__ */ (0, U.jsx)(i, {
						color: jo,
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: Ao })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: Mo })]
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
							] }), /* @__PURE__ */ (0, U.jsx)(P, { color: Mo })]
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
							] }), /* @__PURE__ */ (0, U.jsx)(P, { color: Mo })]
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
						] }), /* @__PURE__ */ (0, U.jsx)(P, { color: Mo })]
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
						] }), /* @__PURE__ */ (0, U.jsx)(P, { color: Mo })]
					})
				]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bathroom/wide-shower-tray.tsx
function Po() {
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
function Fo() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "frameless-walk-in-shower-screen",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					.41,
					1.095,
					.002
				],
				children: [/* @__PURE__ */ (0, U.jsx)("planeGeometry", { args: [1.18, 2.1] }), /* @__PURE__ */ (0, U.jsx)(P, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#6d7474" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#747875" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#747875" })]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bathroom/shower-column.tsx
function Io() {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: t }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: t })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: t })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: t })]
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: e }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
var Lo = [
	2.018,
	2.3,
	.908
];
function Ro({ size: e = Lo }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "shower-assembly",
		scale: [
			e[0] / Lo[0],
			e[1] / Lo[1],
			e[2] / Lo[2]
		],
		children: [
			/* @__PURE__ */ (0, U.jsx)(Po, {}),
			/* @__PURE__ */ (0, U.jsx)("group", {
				position: [
					0,
					0,
					.445
				],
				children: /* @__PURE__ */ (0, U.jsx)(Fo, {})
			}),
			/* @__PURE__ */ (0, U.jsx)("group", {
				position: [
					.98,
					0,
					-.035
				],
				children: /* @__PURE__ */ (0, U.jsx)(Io, {})
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bathroom/transparent-bath-screen.tsx
function zo() {
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
			] }), /* @__PURE__ */ (0, U.jsx)(P, {
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
			] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#929b99" })]
		}, e))]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bathroom/toilet-paper-holder.tsx
var Bo = [
	.18,
	.12,
	.14
];
function Vo({ size: e = Bo } = {}) {
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
				color: "#606b70",
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
				color: "#606b70",
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
				color: "#606b70",
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#e8e5dc" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#606b70" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bathroom/medicine-cabinet.tsx
var Ho = [
	.5,
	.65,
	.16
];
function Uo({ size: e = Ho } = {}) {
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
function Wo({ color: e } = {}) {
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
			] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#d9d2c8" })]
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
					/* @__PURE__ */ (0, U.jsx)(P, {
						color: e ?? "#d8d0c4",
						transparent: !0,
						opacity: .9
					}),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: e ?? "#bfb5a8" })]
			}, t))]
		}, t))]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/rounded-bedroom-furniture-block.tsx
function Go({ size: e, position: t, color: n, rotation: r = [
	0,
	0,
	0
], outlineColor: a = "#655957", outlineThickness: o = .006, receiveShadow: s = !1 }) {
	return /* @__PURE__ */ (0, U.jsxs)("mesh", {
		position: t,
		rotation: r,
		castShadow: !0,
		receiveShadow: s,
		children: [
			/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: e }),
			/* @__PURE__ */ (0, U.jsx)(P, { color: n }),
			/* @__PURE__ */ (0, U.jsx)(i, {
				thickness: o,
				color: a,
				screenspace: !1
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/narrow-toy-shelf.tsx
function Ko() {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#c88e78" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#d19a83" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#b77868" })]
			}, e))
		]
	});
}
function qo() {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#8eafa0" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#d3aa6d" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#665244" })]
			}, e))
		]
	});
}
function Jo() {
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
			] }), /* @__PURE__ */ (0, U.jsx)(P, { color: [
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
			] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#9b6f48" })]
		})]
	});
}
function Yo() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "etagere-jouets-etroite-photo",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(Go, {
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
			[-.23, .23].map((e) => /* @__PURE__ */ (0, U.jsx)(Go, {
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
			].map((e) => /* @__PURE__ */ (0, U.jsx)(Go, {
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
			/* @__PURE__ */ (0, U.jsx)(Jo, {}),
			/* @__PURE__ */ (0, U.jsx)(qo, {}),
			/* @__PURE__ */ (0, U.jsx)(Ko, {})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/toddler-table-set.tsx
var Xo = "#c8945b", Zo = "#dfb77f", Qo = "#67482f";
function $o({ position: e, rotationY: t }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: Xo })]
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: Zo }),
					/* @__PURE__ */ (0, U.jsx)(i, {
						color: Qo,
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#d7b98e" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: Xo })]
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: Zo }),
					/* @__PURE__ */ (0, U.jsx)(i, {
						color: Qo,
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: Zo })]
			}, e))
		]
	});
}
function es() {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: Zo }),
					/* @__PURE__ */ (0, U.jsx)(i, {
						color: Qo,
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#e6c594" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: Xo })]
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#d4938b" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
						color: "#7e5d58",
						thickness: .003,
						screenspace: !1
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsx)($o, {
				position: [
					-.52,
					0,
					.03
				],
				rotationY: Math.PI / 2
			}),
			/* @__PURE__ */ (0, U.jsx)($o, {
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
var ts = "#b78958", ns = "#d2a66f", rs = "#6d4c31", is = [
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
].map(([e, t]) => new Ce(e, t));
function as() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "panier-de-sol-tresse-photo",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "basket-hollow-shell",
				castShadow: !0,
				receiveShadow: !0,
				children: [
					/* @__PURE__ */ (0, U.jsx)("latheGeometry", { args: [is, 32] }),
					/* @__PURE__ */ (0, U.jsx)(P, { color: ts }),
					/* @__PURE__ */ (0, U.jsx)(i, {
						color: rs,
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
					] }), /* @__PURE__ */ (0, U.jsx)(P, { color: t % 2 == 0 ? ns : "#c4935f" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: t % 2 == 0 ? ns : rs })]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/wooden-crib.tsx
var os = [
	.76,
	.95,
	1.46
];
function ss({ size: e = os }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#c89f6d" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#c8a06e" })]
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
var cs = "#c9985f", ls = "#dfb37a", us = "#68482f", ds = "#dda5a4", fs = "#edc9c4";
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/cabin-bed/timber.tsx
function ps({ length: e, position: t, rotation: n = [
	0,
	0,
	0
], radius: r = .036 }) {
	return /* @__PURE__ */ (0, U.jsxs)("mesh", {
		position: t,
		rotation: n,
		castShadow: !0,
		children: [
			/* @__PURE__ */ (0, U.jsx)("capsuleGeometry", { args: [
				r,
				Math.max(.01, e - r * 2),
				6,
				12
			] }),
			/* @__PURE__ */ (0, U.jsx)(P, { color: ls }),
			/* @__PURE__ */ (0, U.jsx)(i, {
				color: us,
				thickness: .005,
				screenspace: !1
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/cabin-bed/cushion.tsx
function ms({ position: e, color: t, scale: n, rotationY: r = 0 }) {
	return /* @__PURE__ */ (0, U.jsxs)("mesh", {
		position: e,
		rotation: [
			0,
			r,
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
			/* @__PURE__ */ (0, U.jsx)(P, { color: t }),
			/* @__PURE__ */ (0, U.jsx)(i, {
				color: "#795b58",
				thickness: .005,
				screenspace: !1
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/cabin-bed/plush-bear.tsx
function hs() {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#a9785d" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#b48367" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#986b52" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#e1b89b" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#3f322b" })]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/cabin-bed/canopy-roof.tsx
function gs({ side: e, roofAngle: t, roofBeamLength: n }) {
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
			] }), /* @__PURE__ */ (0, U.jsx)(P, {
				color: i % 2 == 0 ? fs : ds,
				side: 2
			})]
		}, a);
	}) });
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/cabin-bed/guard-rail.tsx
function _s({ z: e }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		position: [
			-.565,
			0,
			e
		],
		children: [[.25, .62].map((e) => /* @__PURE__ */ (0, U.jsx)(ps, {
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
		].map((e) => /* @__PURE__ */ (0, U.jsx)(ps, {
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
function vs() {
	let e = .55, t = 1.18, n = 1.12, r = Math.atan2(.5399999999999998, e), a = Math.hypot(.5399999999999998, e);
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: cs }),
					/* @__PURE__ */ (0, U.jsx)(i, {
						thickness: .007,
						color: us,
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#e9bcb9" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#f0d0ca" })]
			}),
			[-.55, e].flatMap((e) => [-1.18, t].map((t) => /* @__PURE__ */ (0, U.jsx)(ps, {
				length: n,
				position: [
					e,
					n / 2,
					t
				]
			}, `${e}-${t}`))),
			[-.55, e].map((e) => /* @__PURE__ */ (0, U.jsx)(ps, {
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
			[-.55, e].map((e) => /* @__PURE__ */ (0, U.jsx)(ps, {
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
			/* @__PURE__ */ (0, U.jsx)(ps, {
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
			[-1.18, t].flatMap((t) => [-1, 1].map((n) => /* @__PURE__ */ (0, U.jsx)(ps, {
				length: a,
				position: [
					n * e * .5,
					2.7800000000000002 / 2,
					t
				],
				rotation: [
					0,
					0,
					n * (Math.PI / 2 - r)
				]
			}, `${t}-${n}`))),
			/* @__PURE__ */ (0, U.jsx)(gs, {
				side: -1,
				roofAngle: r,
				roofBeamLength: a
			}),
			/* @__PURE__ */ (0, U.jsx)(gs, {
				side: 1,
				roofAngle: r,
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
					color: fs,
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
					/* @__PURE__ */ (0, U.jsx)(P, {
						color: fs,
						side: 2
					}),
					/* @__PURE__ */ (0, U.jsx)(i, {
						color: "#a36f70",
						thickness: .003,
						screenspace: !1
					})
				]
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(_s, { z: -.82 }),
			/* @__PURE__ */ (0, U.jsx)(_s, { z: .82 }),
			/* @__PURE__ */ (0, U.jsx)(ms, {
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
			/* @__PURE__ */ (0, U.jsx)(ms, {
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
			/* @__PURE__ */ (0, U.jsx)(ms, {
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
			/* @__PURE__ */ (0, U.jsx)(hs, {})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/changing-table/changing-table-finish.ts
var ys = "#eeeae5", bs = "#f5f1eb", xs = "#b59573", Ss = "#b9956b", Cs = "#d3b58d", ws = "#776960";
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/changing-table/tapered-changing-leg.tsx
function Ts({ x: e, z: t }) {
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
			/* @__PURE__ */ (0, U.jsx)(P, { color: xs }),
			/* @__PURE__ */ (0, U.jsx)(i, {
				color: "#6e513b",
				thickness: .004,
				screenspace: !1
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/changing-table/wicker-front.tsx
function Es() {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: Ss }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: Cs })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#96714d" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#6f563f" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/changing-table/changing-table.tsx
function Ds() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "meuble-a-langer-bedroom-two-custom",
		userData: { walkCollider: !0 },
		children: [
			[
				[-.31, -.15],
				[.31, -.15],
				[-.31, .15],
				[.31, .15]
			].map(([e, t]) => /* @__PURE__ */ (0, U.jsx)(Ts, {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: ys }),
					/* @__PURE__ */ (0, U.jsx)(i, {
						color: ws,
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#e5dfd7" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#b4a99d" })]
			}),
			/* @__PURE__ */ (0, U.jsx)(Es, {}),
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: bs }),
					/* @__PURE__ */ (0, U.jsx)(i, {
						color: ws,
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#dfbbb7" })]
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#efd7d1" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#efd7d1" })]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/cube-storage/cube-storage-finish.ts
var Os = "#efede8", ks = "#77716a", As = "#b98f62", js = "#d4b181";
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/cube-storage/woven-cube-bin.tsx
function Ms({ x: e, y: t }) {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: As }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: js })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#956f49" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#68503b" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/cube-storage/fox-fabric-bin.tsx
function Ns() {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#a95f59" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#a95f59" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#3f3634" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#ead9ca" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#4a3b39" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/cube-storage/storage-top-giraffe.tsx
function Ps() {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#c7834f" })]
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#d9a267" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#8d5b3e" })]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/cube-storage/cube-storage.tsx
function Fs() {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: Os }),
					/* @__PURE__ */ (0, U.jsx)(i, {
						color: ks,
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: Os }),
					/* @__PURE__ */ (0, U.jsx)(i, {
						color: ks,
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: Os })]
			}),
			/* @__PURE__ */ (0, U.jsx)(Ms, {
				x: -.195,
				y: .215
			}),
			/* @__PURE__ */ (0, U.jsx)(Ms, {
				x: .195,
				y: .215
			}),
			/* @__PURE__ */ (0, U.jsx)(Ms, {
				x: .195,
				y: .565
			}),
			/* @__PURE__ */ (0, U.jsx)(Ns, {}),
			/* @__PURE__ */ (0, U.jsx)(Ps, {})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/round-wall-display.tsx
function Is() {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#b17e4a" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#c28f57" })]
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: t === 0 ? "#dfc9b8" : "#d79aae" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
function Ls() {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#ba8050" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: t === 0 ? "#eee1d5" : "#d3a89c" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
function Rs({ position: e, color: t }) {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: t }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: t })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: t })]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/three-tier-wall-shelves.tsx
function zs() {
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
						/* @__PURE__ */ (0, U.jsx)(P, { color: "#b97e4c" }),
						/* @__PURE__ */ (0, U.jsx)(i, {
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
					] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#d6a16f" })]
				}),
				[-.13, .13].slice(0, t === 2 ? 2 : 1).map((e, n) => /* @__PURE__ */ (0, U.jsx)(Rs, {
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
//#region packages/catalog/src/furnishing/presets/decor/pampas-vase.tsx
function Bs() {
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
				/* @__PURE__ */ (0, U.jsx)(P, { color: "#59705d" }),
				/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#9a7b54" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: t % 2 == 0 ? "#d8bc91" : "#c9aa7c" })]
			})]
		}, e))]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/decor/potted-plant.tsx
function Vs({ potColor: e = "#c6785e", potOutlineColor: t = "#75493c" }) {
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
				/* @__PURE__ */ (0, U.jsx)(P, { color: e }),
				/* @__PURE__ */ (0, U.jsx)(i, {
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
			] }), /* @__PURE__ */ (0, U.jsx)(P, { color: t === 1 ? "#789767" : "#66885c" })]
		}, t))]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/decor/framed-wall-art.tsx
var Hs = [
	.8,
	.6,
	.04
];
function Us({ size: e = Hs }) {
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
				children: [/* @__PURE__ */ (0, U.jsx)("circleGeometry", { args: [.105, 24] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#c88762" })]
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
				children: [/* @__PURE__ */ (0, U.jsx)("planeGeometry", { args: [.26, .26] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#8f9c86" })]
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
				children: [/* @__PURE__ */ (0, U.jsx)("planeGeometry", { args: [.48, .12] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#b9a07c" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/decor/organic-wall-mirror.tsx
function Ws() {
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
				/* @__PURE__ */ (0, U.jsx)(P, { color: "#8e8981" }),
				/* @__PURE__ */ (0, U.jsx)(i, {
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
				/* @__PURE__ */ (0, U.jsx)(P, {
					color: "#9fb2b5",
					emissive: "#dce7e8",
					emissiveIntensity: .12
				}),
				/* @__PURE__ */ (0, U.jsx)(i, {
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
function Gs() {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#8b765b" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#72543a" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: i % 2 == 0 ? "#4b6d38" : "#637f43" })]
			}, i))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/decor/ring-ceramic-vase.tsx
var Ks = [
	.18,
	.3,
	.06
];
function qs({ size: e = Ks }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#eeeee3" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#b7aa8b" })]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/decor/decorative-globe.tsx
var Js = [
	.278,
	.339,
	.24
];
function Ys({ size: e = Js }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#b39d70" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#b39d70" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#e5e5da" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#a79570" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/decor/trailing-shelf-plant.tsx
var Xs = [
	.26,
	.57,
	.18
];
function Zs({ size: e = Xs }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#dfdfd4" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: r % 2 ? "#668567" : "#476849" })]
			}, r)),
			t.map((e, t) => {
				let n = new I(0, .1, 0), r = new I(...e), i = r.clone().sub(n), a = r.clone().add(n).multiplyScalar(.5), o = new fe().setFromUnitVectors(new I(0, 1, 0), i.clone().normalize());
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
					] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#526e45" })]
				}, t);
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/sofa-upholstery/tailored-cushion.tsx
function Qs({ size: e, position: n, rotation: r = [
	0,
	0,
	0
], color: i, name: a }) {
	let [o, s, c] = e, l = (0, L.useMemo)(() => {
		let e = Math.min(.055, o / 5, c / 5), n = [];
		for (let t = 0; t < 4; t++) {
			let r = t * Math.PI / 2, i = (t === 0 || t === 3 ? 1 : -1) * (o / 2 - e - .002), a = (t < 2 ? 1 : -1) * (c / 2 - e - .002);
			for (let t = 0; t <= 4; t++) {
				let o = r + t / 4 * Math.PI / 2;
				n.push(new I(i + Math.cos(o) * e, 0, a + Math.sin(o) * e));
			}
		}
		let r = new t(new k(n, !0), 64, .002, 4, !0);
		r.computeBoundingBox();
		let i = r.boundingBox;
		return r.scale(o / (i.max.x - i.min.x), 1, c / (i.max.z - i.min.z)), r;
	}, [o, c]);
	return (0, L.useEffect)(() => () => l.dispose(), [l]), /* @__PURE__ */ (0, U.jsxs)("group", {
		name: a,
		position: n,
		rotation: r,
		children: [/* @__PURE__ */ (0, U.jsx)(K, {
			size: e,
			color: i,
			radius: Math.min(.07, s * .45),
			outlineColor: "#958775"
		}), /* @__PURE__ */ (0, U.jsx)("mesh", {
			geometry: l,
			dispose: null,
			castShadow: !0,
			children: /* @__PURE__ */ (0, U.jsx)(P, { color: "#bbae98" })
		})]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/sofa-upholstery/cozy-sofa-cushions.tsx
function $s() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "cozy-sofa-cushions",
		children: [
			/* @__PURE__ */ (0, U.jsx)(Qs, {
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
			/* @__PURE__ */ (0, U.jsx)(Qs, {
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
			/* @__PURE__ */ (0, U.jsx)(Qs, {
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
var ec = [
	2.2,
	.84,
	.94
];
function tc({ size: e = ec, color: t }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#9d7953" })]
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
			].map((e) => /* @__PURE__ */ (0, U.jsxs)("group", { children: [/* @__PURE__ */ (0, U.jsx)(Qs, {
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
			}), /* @__PURE__ */ (0, U.jsx)(Qs, {
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
var nc = [
	1.1,
	.4,
	.6
];
function rc({ size: e = nc }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#b98f5e" })]
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
var ic = [
	.85,
	.9,
	.88
];
function ac({ size: e = ic }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#a87d50" })]
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
function oc() {
	let e = (0, L.useMemo)(() => {
		let e = new ce(1.99, 2.99, 80, 120);
		e.rotateX(-Math.PI / 2);
		let t = e.attributes.position;
		for (let e = 0; e < t.count; e += 1) {
			let n = t.getX(e), r = t.getZ(e), i = Math.min(1, (.995 - Math.abs(n)) * 40, (1.495 - Math.abs(r)) * 40), a = Math.sin(e * 12.9898 + 78.233) * 43758.5453;
			t.setY(e, .011 + Math.max(0, i) * (.002 + (a - Math.floor(a)) * .002));
		}
		return e.computeVertexNormals(), e;
	}, []);
	return (0, L.useEffect)(() => () => e.dispose(), [e]), /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [/* @__PURE__ */ (0, U.jsx)(K, {
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
		children: /* @__PURE__ */ (0, U.jsx)(P, { color: "#ffffff" })
	})] });
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/rug-patterns.ts
var sc = {
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
}, cc = [
	2,
	.015,
	3
], lc = (e) => Object.hasOwn(sc, e);
function uc() {
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
			] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#c5b79f" })]
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
			] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#aaa48d" })]
		}, e))
	] });
}
function dc({ variant: e }) {
	let t = sc[e];
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
			] }), /* @__PURE__ */ (0, U.jsx)(P, { color: t.border })]
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
			] }), /* @__PURE__ */ (0, U.jsx)(P, { color: t.border })]
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
			] }), /* @__PURE__ */ (0, U.jsx)(P, { color: a })]
		}, `${e}-${s}`))
	] });
}
function fc({ size: e = cc, variant: t = "default" }) {
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: "neutral-area-rug",
		scale: [
			e[0] / 2,
			e[1] / .015,
			e[2] / 3
		],
		children: t === "fluffy" ? /* @__PURE__ */ (0, U.jsx)(oc, {}) : lc(t) ? /* @__PURE__ */ (0, U.jsx)(dc, { variant: t }) : /* @__PURE__ */ (0, U.jsx)(uc, {})
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/low-media-console.tsx
var pc = [
	1.6,
	.55,
	.42
];
function mc({ size: e = pc }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#9d754c" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#594f43" })]
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
var hc = [
	.7,
	.42,
	.55
];
function gc({ size: e = hc }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#a67d51" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#aa9c85" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/sectional-sofa.tsx
function _c({ variant: e = "default", color: t } = {}) {
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
			/* @__PURE__ */ (0, U.jsx)(Qs, {
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
			[-.02, .84].map((e) => /* @__PURE__ */ (0, U.jsx)(Qs, {
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
			].map((e) => /* @__PURE__ */ (0, U.jsx)(Qs, {
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
			}), /* @__PURE__ */ (0, U.jsx)(Qs, {
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
			r && /* @__PURE__ */ (0, U.jsx)($s, {}),
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#b38d59" })]
			}, `${e}-${t}`))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/media-wall/cabinet-box.tsx
function vc({ size: e, position: t, color: n, outlineThickness: r = .006 }) {
	return /* @__PURE__ */ (0, U.jsxs)("mesh", {
		position: t,
		castShadow: !0,
		receiveShadow: !0,
		children: [
			/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [...e] }),
			/* @__PURE__ */ (0, U.jsx)(P, { color: n }),
			/* @__PURE__ */ (0, U.jsx)(i, {
				color: "#777066",
				thickness: r,
				screenspace: !1
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/media-wall/cabinet-joint.tsx
function yc({ size: e, position: t }) {
	return /* @__PURE__ */ (0, U.jsxs)("mesh", {
		position: t,
		children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [...e] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#aaa49a" })]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/media-wall/media-wall.tsx
function bc() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "mur-tv-salon-custom",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(vc, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#f7f4ed" })]
			}),
			[-.38, .38].map((e) => /* @__PURE__ */ (0, U.jsx)(yc, {
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
			/* @__PURE__ */ (0, U.jsx)(yc, {
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
			/* @__PURE__ */ (0, U.jsx)(vc, {
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
					/* @__PURE__ */ (0, U.jsx)(vc, {
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
						] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#f7f4ed" })]
					}),
					/* @__PURE__ */ (0, U.jsx)(yc, {
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
					/* @__PURE__ */ (0, U.jsx)(yc, {
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
					/* @__PURE__ */ (0, U.jsx)(vc, {
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
							/* @__PURE__ */ (0, U.jsx)(P, { color: "#d6c0a2" }),
							/* @__PURE__ */ (0, U.jsx)(i, {
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
				children: /* @__PURE__ */ (0, U.jsx)(Bs, {})
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/round-coffee-table.tsx
function xc() {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#d0a16a" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#ddb27f" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#9b7045" })]
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#b9854f" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
var Sc = [
	1.6,
	.82,
	.88
];
function Cc({ size: e = Sc } = {}) {
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
var wc = [
	.8,
	.8,
	1.65
];
function Tc({ size: e = wc } = {}) {
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
var Ec = [
	.5,
	.55,
	.5
];
function Dc({ size: e = Ec } = {}) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#cba67c" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#ae8058" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#ae8058" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/c-shaped-sofa-table.tsx
var Oc = [
	.4,
	.62,
	.45
];
function kc({ size: e = Oc } = {}) {
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
var Ac = [
	.95,
	.46,
	.48
];
function jc({ size: e = Ac } = {}) {
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
var Mc = [
	.42,
	.45,
	.3
];
function Nc({ size: e = Mc } = {}) {
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
var Pc = [
	.9,
	.7,
	.4
];
function Fc({ size: e = Pc } = {}) {
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
var Ic = [
	1,
	1.6,
	.35
];
function Lc({ size: e = Ic } = {}) {
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
var Rc = [
	.7,
	.8,
	.42
];
function zc({ size: e = Rc } = {}) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#414442" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#414442" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#414442" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#414442" })]
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
var Bc = [
	1.2,
	1.8,
	.4
];
function Vc({ size: e = Bc } = {}) {
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
function Hc() {
	let e = (0, L.useMemo)(() => {
		let e = new Re();
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
		] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#545851" })]
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
		}] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#a9aca5" })]
	})] });
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/curved-three-seat-sofa.tsx
var Uc = [
	2.6,
	.88,
	1.1
];
function Wc({ size: e = Uc }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "curved-three-seat-sofa",
		scale: [
			e[0] / 2.6,
			e[1] / .88,
			e[2] / 1.1
		],
		userData: { walkCollider: !0 },
		children: [/* @__PURE__ */ (0, U.jsx)(Hc, {}), [
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
var Gc = [
	.78,
	.86,
	.8
];
function Kc({ size: e = Gc }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#bb976d" })]
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
var qc = [
	.48,
	.45,
	.46
];
function Jc({ size: e = qc }) {
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
			] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#bb976d" })]
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
var Yc = [
	.6,
	.43,
	.5196152423
];
function Xc({ size: e = Yc, variant: t = "default" }) {
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
			] }), /* @__PURE__ */ (0, U.jsx)(P, { color: t === "oak-top" ? "#e2e1d9" : "#bd986c" })]
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
			] }), /* @__PURE__ */ (0, U.jsx)(P, { color: t === "oak-top" ? "#c6a579" : "#f0efe7" })]
		})]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/six-door-oak-sideboard.tsx
var Zc = [
	3,
	.74,
	.42
];
function Qc({ size: e = Zc }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#282b28" })]
			})] }, t))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/arched-bookcase-frame.tsx
function $c() {
	let e = (0, L.useMemo)(() => {
		let e = new Re();
		e.moveTo(-.5, 0), e.lineTo(.5, 0), e.lineTo(.5, 1.73), e.lineTo(-.5, 1.73), e.closePath();
		for (let t of [-.245, .245]) {
			let n = new o();
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
		}] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#eeeee5" })]
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
var el = [
	1,
	1.73,
	.36
];
function tl({ size: e = el }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "double-arched-bookcase",
		scale: [
			e[0] / 1,
			e[1] / 1.73,
			e[2] / .36
		],
		children: [/* @__PURE__ */ (0, U.jsx)($c, {}), [-.245, .245].map((e, t) => /* @__PURE__ */ (0, U.jsx)("group", { children: (t === 0 ? [.62, 1.16] : [
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
var nl = [
	2,
	1.73,
	.36
];
function rl({ size: e = nl }) {
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
var il = [
	1.05,
	.065,
	.12
];
function al({ size: e = il }) {
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
function ol({ end: e }) {
	let t = new I(0, .18, 0), n = new I(...e), r = n.clone().sub(t), i = n.clone().add(t).multiplyScalar(.5), a = new fe().setFromUnitVectors(new I(0, 1, 0), r.clone().normalize());
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
		] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#a79165" })]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/six-globe-ceiling-lamp.tsx
var sl = [
	.9,
	.42,
	.8062177826
];
function cl({ size: e = sl }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#ac9770" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#ac9770" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#c4b089" })]
			}),
			Array.from({ length: 6 }, (e, t) => {
				let n = t * Math.PI / 3, r = Math.cos(n) * .35, i = Math.sin(n) * .35;
				return /* @__PURE__ */ (0, U.jsxs)("group", { children: [/* @__PURE__ */ (0, U.jsx)(ol, { end: [
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
					] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#eeeee5" })]
				})] }, t);
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/book-row.tsx
var ll = [
	.4,
	.28,
	.18
];
function ul({ size: e = ll }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: [
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
var dl = [
	.18,
	.23,
	.12
];
function fl({ size: e = dl }) {
	let t = (0, L.useMemo)(() => {
		let e = new qe();
		e.setAttribute("position", new Ae([
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
	return (0, L.useEffect)(() => () => t.dispose(), [t]), /* @__PURE__ */ (0, U.jsxs)("group", {
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
			children: /* @__PURE__ */ (0, U.jsx)(P, { color: "#eeeee5" })
		})]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/tufted-diamond-rug.tsx
var pl = [
	2.6,
	.016,
	2
];
function ml({ size: e = pl }) {
	let t = (0, L.useMemo)(() => {
		let e = new Re();
		e.moveTo(0, .3), e.lineTo(.22, 0), e.lineTo(0, -.3), e.lineTo(-.22, 0), e.closePath();
		let t = new o();
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
				}] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#c9c2b0" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#e9e3d6" })]
			}, `${e}-${n}`)))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/living-room/white-display-column.tsx
var hl = [
	.6,
	2.4,
	.3
];
function gl({ size: e = hl }) {
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
//#region packages/catalog/src/furnishing/presets/dining-room/rectangular-dining-table.tsx
var _l = [
	1.8,
	.75,
	.9
];
function vl({ size: e = _l }) {
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: "rectangular-dining-table",
		scale: [
			e[0] / 1.8,
			e[1] / .75,
			e[2] / .9
		],
		userData: { walkCollider: !0 },
		children: /* @__PURE__ */ (0, U.jsx)(po, {
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
function yl() {
	let e = (0, L.useMemo)(() => {
		let e = new Re();
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
			/* @__PURE__ */ (0, U.jsx)(P, { color: "#d5b17e" }),
			/* @__PURE__ */ (0, U.jsx)(i, {
				color: "#82694b",
				thickness: .0015,
				screenspace: !1
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/dining-room/oak-dining-chair.tsx
var bl = [
	.49,
	.82,
	.5
];
function xl({ size: e = bl }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#c7a16d" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#c9a674" })]
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(yl, {})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/dining-room/three-door-sideboard.tsx
var Sl = [
	1.6,
	.82,
	.45
];
function Cl({ size: e = Sl }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#a67d50" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#8c7560" })]
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
function wl(e, t, n, r = n) {
	let i = new I(...e), a = new I(...t), o = new u(r, n, i.distanceTo(a), 10);
	if (o.applyQuaternion(new fe().setFromUnitVectors(new I(0, 1, 0), a.clone().sub(i).normalize())), o.translate(...i.clone().add(a).multiplyScalar(.5).toArray()), e[1] === 0) {
		let e = o.attributes.position;
		for (let t = 0; t < e.count; t++) e.getY(t) < n * 2 && e.setY(t, 0);
		o.computeVertexNormals();
	}
	return o;
}
function Tl(e, n, r = 16) {
	return new t(new k(e.map((e) => new I(...e))), r, n, 5, !1);
}
function El() {
	let e = new k([
		new I(-.232, .675, .135),
		new I(-.257, .716, -.04),
		new I(-.206, .765, -.17),
		new I(0, .781, -.205),
		new I(.206, .765, -.17),
		new I(.257, .716, -.04),
		new I(.232, .675, .135)
	]), t = [], n = [];
	for (let r = 0; r <= 40; r++) {
		let i = e.getPoint(r / 40), a = e.getTangent(r / 40), o = new I(-a.z, 0, a.x).normalize();
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
	let r = new qe();
	return r.setAttribute("position", new Ae(t, 3)), r.setIndex(n), r.computeVertexNormals(), r;
}
function Dl({ geometry: e, color: t = "#bd905b", outline: n = !0, name: r }) {
	return /* @__PURE__ */ (0, U.jsxs)("mesh", {
		name: r,
		geometry: e,
		castShadow: !0,
		receiveShadow: !0,
		children: [/* @__PURE__ */ (0, U.jsx)(P, { color: t }), n && /* @__PURE__ */ (0, U.jsx)(i, {
			color: "#6f5033",
			thickness: .0015,
			screenspace: !1
		})]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/dining-room/photo-dining-set/dining-construction/woven-seat.tsx
var Ol = Array.from({ length: 28 }, (e, t) => {
	let n = .215 - t * .0073, r = .181 - t * .0061, i = .454 + .004 * Math.sin(t * .7);
	return Tl([
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
}), kl = new O(.416, .018, .358);
kl.translate(0, .442, 0);
var Al = M([kl, ...Ol.filter((e, t) => t % 2 == 0)]);
kl.dispose();
var jl = M(Ol.filter((e, t) => t % 2 == 1));
Ol.forEach((e) => e.dispose());
function Ml() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "envelope-woven-rush-seat",
		children: [/* @__PURE__ */ (0, U.jsx)(Dl, {
			name: "rush-natural",
			geometry: Al,
			color: "#b58e56",
			outline: !1
		}), /* @__PURE__ */ (0, U.jsx)(Dl, {
			name: "rush-light",
			geometry: jl,
			color: "#c5a36d",
			outline: !1
		})]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/dining-room/photo-dining-set/dining-chair.tsx
var Nl = [-1, 1].flatMap((e) => [
	wl([
		e * .222,
		0,
		.182
	], [
		e * .211,
		.671,
		.13
	], .013, .019),
	wl([
		e * .205,
		0,
		-.181
	], [
		e * .191,
		.748,
		-.174
	], .013, .021),
	wl([
		e * .205,
		.425,
		-.168
	], [
		e * .216,
		.425,
		.171
	], .019),
	wl([
		e * .212,
		.235,
		-.166
	], [
		e * .216,
		.235,
		.163
	], .011)
]);
Nl.push(wl([
	-.213,
	.425,
	.171
], [
	.213,
	.425,
	.171
], .021), wl([
	-.201,
	.425,
	-.168
], [
	.201,
	.425,
	-.168
], .018), wl([
	-.212,
	.255,
	-.166
], [
	.212,
	.255,
	-.166
], .011), Tl([
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
], .013, 14), Tl([
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
var Pl = M(Nl);
Nl.forEach((e) => e.dispose());
var Fl = El();
function Il({ position: e, rotationY: t }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "chaise-repas-cannee-custom",
		position: e,
		rotation: [
			0,
			t,
			0
		],
		children: [
			/* @__PURE__ */ (0, U.jsx)(Dl, {
				name: "wishbone-chair-joined-frame",
				geometry: Pl
			}),
			/* @__PURE__ */ (0, U.jsx)(Dl, {
				name: "continuous-bentwood-back-and-arms",
				geometry: Fl,
				color: "#cba16b"
			}),
			/* @__PURE__ */ (0, U.jsx)(Ml, {})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/dining-room/photo-dining-set/dining-table.tsx
var Ll = new ne([
	[0, .728],
	[.571, .728],
	[.591, .733],
	[.599, .744],
	[.6, .752],
	[.598, .757],
	[.592, .761],
	[0, .761]
].map((e) => new Ce(...e)), 64), Rl = [-1, 1].flatMap((e) => [-1, 1].map((t) => wl([
	e * .382,
	0,
	t * .332
], [
	e * .322,
	.737,
	t * .272
], .017, .032)));
for (let e of [-1, 1]) Rl.push(wl([
	-.325,
	.696,
	e * .274
], [
	.325,
	.696,
	e * .274
], .027)), Rl.push(wl([
	e * .323,
	.696,
	-.274
], [
	e * .323,
	.696,
	.274
], .027));
var zl = M(Rl);
Rl.forEach((e) => e.dispose());
var Bl = [
	-.42,
	-.29,
	-.13,
	.09,
	.26,
	.41
].map((e, t) => {
	let n = Math.sqrt(.576 ** 2 - e * e);
	return Tl([
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
}), Vl = M(Bl);
Bl.forEach((e) => e.dispose());
function Hl() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "thin-rounded-oak-dining-table",
		children: [
			/* @__PURE__ */ (0, U.jsx)(Dl, {
				name: "tapered-table-legs-and-aprons",
				geometry: zl,
				color: "#af7f49"
			}),
			/* @__PURE__ */ (0, U.jsx)(Dl, {
				name: "soft-bevel-solid-oak-top",
				geometry: Ll,
				color: "#b48650"
			}),
			/* @__PURE__ */ (0, U.jsx)(Dl, {
				name: "subtle-longitudinal-oak-grain",
				geometry: Vl,
				color: "#9e743f",
				outline: !1
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/dining-room/photo-dining-set/table-plant.tsx
var Ul = Array.from({ length: 25 }, (e, t) => {
	let n = new re(.018 + t * .008, .0045, 5, 48);
	return n.rotateX(Math.PI / 2), n.scale(1, 1, .76), n.translate(0, .766, 0), n;
}), Wl = M(Ul);
Ul.forEach((e) => e.dispose());
var Gl = new ne([
	[0, .773],
	[.065, .773],
	[.079, .789],
	[.09, .893],
	[.094, .906],
	[.089, .915],
	[.082, .915],
	[.08, .895],
	[0, .895]
].map((e) => new Ce(...e)), 32), Kl = Array.from({ length: 24 }, (e, t) => {
	let n = t * Math.PI / 12;
	return Tl([
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
}), ql = M(Kl);
Kl.forEach((e) => e.dispose());
var Jl = new u(.081, .081, .006, 24);
Jl.translate(0, .897, 0);
var Yl = [], Xl = [];
for (let e = 0; e < 26; e++) {
	let t = e * 2.39996, n = .045 + e % 5 * .019, r = .939 + e % 7 * .021, i = Math.cos(t) * n, a = Math.sin(t) * n;
	Yl.push(Tl([
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
	let o = new ge(1, 8, 6);
	o.scale(.026, .006, .045), o.rotateX(.2 + e % 4 * .23), o.rotateY(-t + .5), o.translate(i, r, a), Xl.push(o);
}
var Zl = new ge(1, 8, 6);
Zl.scale(.019, .03, .009), Zl.translate(.01, 1.09, 0), Xl.push(Zl), Yl.push(Tl([
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
var Ql = M(Yl), $l = M(Xl.filter((e, t) => t % 2 == 0)), eu = M(Xl.filter((e, t) => t % 2 == 1));
[...Yl, ...Xl].forEach((e) => e.dispose());
function tu() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "plante-table-salon",
		children: [
			/* @__PURE__ */ (0, U.jsx)(Dl, {
				name: "coiled-woven-table-mat",
				geometry: Wl,
				color: "#a27a43",
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(Dl, {
				name: "sage-ceramic-planter",
				geometry: Gl,
				color: "#87934d"
			}),
			/* @__PURE__ */ (0, U.jsx)(Dl, {
				name: "vertical-planter-fluting",
				geometry: ql,
				color: "#98a15b",
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(Dl, {
				name: "potting-soil",
				geometry: Jl,
				color: "#403a25",
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(Dl, {
				name: "connected-plant-stems",
				geometry: Ql,
				color: "#48532d",
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(Dl, {
				name: "individual-dark-leaves",
				geometry: $l,
				color: "#344a29",
				outline: !1
			}),
			/* @__PURE__ */ (0, U.jsx)(Dl, {
				name: "individual-light-leaves",
				geometry: eu,
				color: "#506334",
				outline: !1
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/dining-room/photo-dining-set/dining-set.tsx
function nu({ footprintScale: e = 1 }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "coin-repas-salon-custom",
		scale: [
			e,
			1,
			e
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(Hl, {}),
			/* @__PURE__ */ (0, U.jsx)(tu, {}),
			/* @__PURE__ */ (0, U.jsx)(Il, {
				position: [
					0,
					0,
					-.79
				],
				rotationY: 0
			}),
			/* @__PURE__ */ (0, U.jsx)(Il, {
				position: [
					0,
					0,
					.79
				],
				rotationY: Math.PI
			}),
			/* @__PURE__ */ (0, U.jsx)(Il, {
				position: [
					-.79,
					0,
					0
				],
				rotationY: Math.PI / 2
			}),
			/* @__PURE__ */ (0, U.jsx)(Il, {
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
//#region packages/catalog/src/furnishing/presets/bedroom/oak-nightstand.tsx
var ru = [
	.45,
	.5,
	.4
];
function iu({ size: e = ru }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#b99262" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#846748" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bedroom/flat-door-wardrobe.tsx
var au = [
	2,
	2.2,
	.6
];
function ou({ size: e = au }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#b49368" })]
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
var su = [
	1,
	.95,
	2.1
];
function cu({ size: e = su }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#bf9a68" })]
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
//#region packages/catalog/src/furnishing/presets/bedroom/double-bed.tsx
var lu = [
	1.7,
	1.1,
	2.15
];
function uu({ size: e = lu }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#b58d5e" })]
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
			/* @__PURE__ */ (0, U.jsx)(K, {
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
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
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
			}),
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
			/* @__PURE__ */ (0, U.jsx)(K, {
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
			}),
			[-.4, .4].map((e) => /* @__PURE__ */ (0, U.jsx)(K, {
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
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bedroom/chest-of-drawers.tsx
var du = [
	1,
	.9,
	.45
];
function fu({ size: e = du }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#a98256" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#9c8366" })]
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
function pu() {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#aeb4b7" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bedroom/knob-door-wardrobe.tsx
var mu = [
	1,
	2.4,
	.6
];
function hu({ size: e = mu, variant: t = "default" }) {
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
			] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#302e2a" })]
		})] }, e))]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bedroom/overbed-bridge-cabinet.tsx
var gu = [
	2,
	.65,
	.4
];
function _u({ size: e = gu }) {
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
			] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#302e2a" })]
		})] }, e))]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bedroom/shelf-headboard.tsx
var vu = [
	2,
	1.15,
	.22
];
function yu({ size: e = vu }) {
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
var bu = [
	1.64,
	.66,
	2.04
];
function xu({ size: e = bu }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#dfddd5" })]
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
var Su = [
	.24,
	.24,
	.16
];
function Cu({ size: e = Su }) {
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
			] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#e9e8df" })]
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
			] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#f7f6ee" })]
		})]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bedroom/wall-reading-spot.tsx
var wu = [
	.09,
	.12,
	.13
];
function Tu({ size: e = wu }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#eeeee6" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#f0f0e8" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/bedroom/oak-wall-uplight.tsx
var Eu = [
	.12,
	.25,
	.09
];
function Du({ size: e = Eu }) {
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
//#region packages/catalog/src/furnishing/presets/office/oak-desk.tsx
var Ou = [
	1.4,
	.74,
	.7
];
function ku({ size: e = Ou }) {
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: "oak-desk",
		scale: [
			e[0] / 1.4,
			e[1] / .74,
			e[2] / .7
		],
		userData: { walkCollider: !0 },
		children: /* @__PURE__ */ (0, U.jsx)(po, {
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
function Au() {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#777a76" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#444944" })]
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
						] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#555b53" })]
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
						] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#343934" })]
					}, e))
				]
			}, t))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/office/ergonomic-office-chair.tsx
var ju = [
	.68,
	1.04,
	.68
];
function Mu({ size: e = ju }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "ergonomic-office-chair",
		scale: [
			e[0] / .68,
			e[1] / 1.04,
			e[2] / .68
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(Au, {}),
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
					] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#787f75" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#444b42" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/office/drawer-pedestal-desk.tsx
var Nu = [
	1.8,
	.75,
	.6
];
function Pu({ size: e = Nu }) {
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
function Fu() {
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
		] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#8c9391" })]
	}, t)), [[
		.25,
		.78,
		-.175
	], [
		-.25,
		.44,
		.15
	]].map(([t, n, r]) => {
		let i = new I(e, .01, t), a = new I(e, n, r), o = a.clone().sub(i), s = i.clone().add(a).multiplyScalar(.5), c = new fe().setFromUnitVectors(new I(0, 1, 0), o.clone().normalize());
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
			] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#a6aaa7" })]
		}, t);
	})] }, e)) });
}
//#endregion
//#region packages/catalog/src/furnishing/presets/office/white-folding-chair.tsx
var Iu = [
	.46,
	.8,
	.52
];
function Lu({ size: e = Iu }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "white-folding-chair",
		scale: [
			e[0] / .46,
			e[1] / .8,
			e[2] / .52
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(Fu, {}),
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
var Ru = [
	.54,
	.42,
	.18
];
function zu({ size: e = Ru }) {
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
var Bu = [
	.34,
	.24,
	.24
];
function Vu({ size: e = Bu }) {
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
var Hu = [
	.8,
	1.9,
	.3
];
function Uu({ size: e = Hu }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#b28f5f" })]
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
var Wu = [
	1.8,
	2.35,
	1.2
];
function Gu({ size: e = Wu }) {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#e8e6df" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#e8e6df" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#cbc9c1" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#cbc9c1" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#f1efe9" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#f1efe9" })]
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#f3f1eb" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#d7d4cc" })]
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#f3f1eb" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#d7d4cc" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/storage/rounded-storage-panel.tsx
function Ku({ size: e, position: t, color: n, outline: r = "#716760", castShadow: a = !1 }) {
	return /* @__PURE__ */ (0, U.jsxs)("mesh", {
		position: t,
		castShadow: a,
		receiveShadow: !0,
		children: [
			/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: e }),
			/* @__PURE__ */ (0, U.jsx)(P, { color: n }),
			/* @__PURE__ */ (0, U.jsx)(i, {
				thickness: .0045,
				color: r,
				screenspace: !1
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/storage/cane-wardrobe/woven-inset.tsx
function qu({ width: e, height: t, y: n, z: r }) {
	let i = Math.max(4, Math.round(t / .12));
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		position: [
			0,
			n,
			r
		],
		children: [
			/* @__PURE__ */ (0, U.jsx)(Ku, {
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
					] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#e0c8a8" })]
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
					] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#9d7a59" })]
				}, `horizontal-${r}`);
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/storage/cane-wardrobe/cane-door.tsx
function Ju({ width: e, height: t, frontZ: n }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", { children: [
		/* @__PURE__ */ (0, U.jsx)(Ku, {
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
		/* @__PURE__ */ (0, U.jsx)(qu, {
			width: e - .13,
			height: .78,
			y: t - .48,
			z: n + .025
		}),
		/* @__PURE__ */ (0, U.jsx)(qu, {
			width: e - .13,
			height: .68,
			y: .48,
			z: n + .025
		})
	] });
}
//#endregion
//#region packages/catalog/src/furnishing/presets/storage/cane-wardrobe/cane-wardrobe.tsx
function Yu({ width: e }) {
	let t = 2.15, n = .38, r = e / 2 - .025;
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "placard-cannage-couloir-custom",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(Ku, {
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
			[-1, 1].map((r) => /* @__PURE__ */ (0, U.jsx)(Ku, {
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
			/* @__PURE__ */ (0, U.jsx)(Ku, {
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
				children: [/* @__PURE__ */ (0, U.jsx)(Ju, {
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
					] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#8b765d" })]
				})]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/storage/open-shelf-closet.tsx
function Xu() {
	let e = 2.15;
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "placard-etageres-couloir-custom",
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(Ku, {
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
			[-1, 1].map((t) => /* @__PURE__ */ (0, U.jsx)(Ku, {
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
			/* @__PURE__ */ (0, U.jsx)(Ku, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#9c8b78" })]
			}),
			[
				.72,
				1.08,
				1.44,
				1.8,
				2.12
			].map((e) => /* @__PURE__ */ (0, U.jsx)(Ku, {
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
var Zu = [
	.9,
	1.8,
	.45
];
function Qu({ size: e = Zu } = {}) {
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
var $u = [
	1.5,
	.9,
	.65
];
function ed({ size: e = $u } = {}) {
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
var td = [
	.45,
	.3,
	.24
];
function nd({ size: e = td } = {}) {
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
function rd({ width: e, depth: t, frontColor: n = "#f4f2ec", worktopColor: r = "#d6b984" }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#9a8b77" })]
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
var id = [
	.6,
	.9,
	.63
];
function ad({ size: e = id, variant: t = "default" }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "kitchen-base-cabinet",
		scale: [
			e[0] / .8,
			e[1] / .9,
			e[2] / .63
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(rd, {
				frontColor: Ln(t),
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
				color: Ln(t),
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
				color: Ln(t),
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#7f817b" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#7f817b" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/kitchen/kitchen-sink-cabinet.tsx
var od = [
	.6,
	1.12,
	.63
];
function sd({ size: e = od, variant: t = "default" }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "kitchen-sink-cabinet",
		scale: [
			e[0],
			e[1] / 1.12,
			e[2] / .63
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(rd, {
				frontColor: Ln(t),
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
				color: Ln(t),
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#7f817b" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#677775" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#8d9997" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#8d9997" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/kitchen/kitchen-wall-cabinet.tsx
var cd = [
	.6,
	.8,
	.35
];
function ld({ size: e = cd, variant: t = "default" }) {
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
				color: Ln(t),
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
				color: Ln(t),
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#7f817b" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#c7c0b3" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/kitchen/counter-stool.tsx
var ud = [
	.48,
	.92,
	.5
];
function dd({ size: e = ud }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#b58b5b" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#9b754e" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#9b754e" })]
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
var fd = [
	.6,
	2.1,
	.63
];
function pd({ size: e = fd, variant: t = "default" }) {
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
				color: Ln(t),
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
				color: Ln(t),
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
				color: Ln(t),
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
var md = [
	1.5,
	.9,
	.9
];
function hd({ size: e = md, variant: t = "default" }) {
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
				color: Ln(t),
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
				color: Ln(t),
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
				color: Ln(t),
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
				color: Ln(t),
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
//#region packages/catalog/src/furnishing/presets/kitchen/kitchen-hob-cabinet.tsx
var gd = [
	.6,
	.91,
	.63
];
function _d({ size: e = gd, variant: t = "default" }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "kitchen-hob-cabinet",
		scale: [
			e[0] / .6,
			e[1] / .91,
			e[2] / .63
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)(ad, {
				size: [
					.6,
					.9,
					.63
				],
				variant: t
			}),
			/* @__PURE__ */ (0, U.jsx)(K, {
				name: "hob-glass",
				size: [
					.54,
					.01,
					.48
				],
				position: [
					0,
					.905,
					0
				],
				color: "#252e2d",
				radius: .008
			}),
			[-.14, .14].flatMap((e) => [-.12, .12].map((t) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					e,
					.91,
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#89928b" })]
			}, `${e}-${t}`)))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/kitchen/two-step-stool.tsx
var vd = [
	.45,
	.45,
	.5
];
function yd({ size: e = vd } = {}) {
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
var bd = [
	.7,
	.9,
	.45
];
function xd({ size: e = bd } = {}) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#606b70" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#606b70" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#606b70" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#606b70" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/kitchen/bread-bin.tsx
var Sd = [
	.4,
	.25,
	.25
];
function Cd({ size: e = Sd } = {}) {
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
var wd = [
	.45,
	.15,
	.32
];
function Td({ size: e = wd } = {}) {
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
var Ed = [
	1,
	.5,
	.38
];
function Dd({ size: e = Ed }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#b88f5e" })]
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
var Od = [
	.8,
	.32,
	.22
];
function kd({ size: e = Od }) {
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
					] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#707975" })]
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
					] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#707975" })]
				})]
			}, e))
		]
	});
}
var Ad = 1.6515, jd = Ad / 3, Md = 1.68, Nd = "#d5ae79", Pd = "#e8c994", Fd = "#b98755", Id = "#8e653f";
//#endregion
//#region packages/catalog/src/furnishing/presets/entryway/louvered-closet/closet-panel-block.tsx
function Ld({ size: e, position: t, color: n, rotation: r = [
	0,
	0,
	0
], outline: a = Id }) {
	return /* @__PURE__ */ (0, U.jsxs)("mesh", {
		position: t,
		rotation: r,
		castShadow: !0,
		receiveShadow: !0,
		children: [
			/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: e }),
			/* @__PURE__ */ (0, U.jsx)(P, { color: n }),
			/* @__PURE__ */ (0, U.jsx)(i, {
				thickness: .0045,
				color: a,
				screenspace: !1
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/entryway/louvered-closet/louver-band.tsx
function Rd({ bottom: e, top: t }) {
	let n = .062, r = Math.floor((t - e) / n);
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: "lames-persienne-entree",
		children: Array.from({ length: r }, (t, r) => {
			let i = e + n * (r + .5);
			return /* @__PURE__ */ (0, U.jsx)(Ld, {
				size: [
					.052,
					.026,
					jd - .15
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
				color: r % 3 == 1 ? Pd : Nd,
				outline: "#795137"
			}, i);
		})
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/entryway/louvered-closet/sliding-louver-panel.tsx
function zd({ position: e }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "panneau-coulissant-persienne-entree",
		position: e,
		children: [
			/* @__PURE__ */ (0, U.jsx)(Ld, {
				size: [
					.038,
					Md - .16,
					jd - .12
				],
				position: [
					-.012,
					Md / 2,
					0
				],
				color: Fd
			}),
			/* @__PURE__ */ (0, U.jsx)(Rd, {
				bottom: .16,
				top: .73
			}),
			/* @__PURE__ */ (0, U.jsx)(Rd, {
				bottom: .88,
				top: 1.62
			}),
			[-1, 1].map((e) => /* @__PURE__ */ (0, U.jsx)(Ld, {
				size: [
					.064,
					Md,
					.07
				],
				position: [
					.012,
					Md / 2,
					e * (jd / 2 - .035)
				],
				color: Nd
			}, e)),
			[.0525, Md - .0525].map((e) => /* @__PURE__ */ (0, U.jsx)(Ld, {
				size: [
					.064,
					.105,
					jd
				],
				position: [
					.012,
					e,
					0
				],
				color: Nd
			}, e)),
			/* @__PURE__ */ (0, U.jsx)(Ld, {
				size: [
					.068,
					.13,
					jd - .07
				],
				position: [
					.018,
					.805,
					0
				],
				color: Nd
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/entryway/louvered-closet/louvered-closet.tsx
function Bd() {
	let e = Array.from({ length: 3 }, (e, t) => (t - 1) * jd);
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "portes-coulissantes-placard-entree-custom",
		userData: { walkCollider: !0 },
		children: [[.0275, Md + .0275].map((e) => /* @__PURE__ */ (0, U.jsx)(Ld, {
			size: [
				.075,
				.055,
				Ad - .07
			],
			position: [
				.015,
				e,
				0
			],
			color: Fd
		}, e)), e.map((e, t) => /* @__PURE__ */ (0, U.jsx)(zd, { position: [
			t === 1 ? .018 : 0,
			0,
			e
		] }, e))]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/entryway/shoe-cabinet.tsx
var Vd = [
	.8,
	1.1,
	.3
];
function Hd({ size: e = Vd } = {}) {
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
var Ud = [
	.28,
	.55,
	.28
];
function Wd({ size: e = Ud } = {}) {
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
var Gd = [
	.5,
	1.75,
	.5
];
function Kd({ size: e = Gd } = {}) {
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
//#region packages/catalog/src/furnishing/presets/hallway/hallway-console-table.tsx
var qd = [
	1.1,
	.8,
	.35
];
function Jd({ size: e = qd }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#b58b59" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#7e7568" })]
			})] }, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/hallway/floating-wall-shelf.tsx
var Yd = [
	.8,
	.22,
	.25
];
function Xd({ size: e = Yd }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#747a75" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#747a75" })]
			})] }, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/deciduous-tree/deciduous-crown-geometry.ts
var Zd = [
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
], Qd = [
	"#568743",
	"#669747",
	"#487b45",
	"#598941",
	"#79a54d",
	"#83ab51",
	"#6e9b47",
	"#92b65c"
];
function $d() {
	let e = Zd.flatMap(([e, t, n, r, i, a], o) => Array.from({ length: 4 }, (s, c) => {
		let l = o * 1.7 + c * 2.39996, u = c > 0, f = new C(1, 2), p = f.getAttribute("position");
		for (let s = 0; s < p.count; s++) {
			let c = p.getX(s), d = p.getY(s), f = p.getZ(s), m = 1 + .075 * Math.sin(c * 7 + o) * Math.cos(f * 6 - d * 5), h = u ? .48 : 1;
			p.setXYZ(s, e + c * r * m * h + (u ? Math.cos(l) * r * .68 : 0), t + d * i * m * h + (u ? .12 * Math.sin(l * 2) : 0), n + f * a * m * h + (u ? Math.sin(l) * a * .68 : 0));
		}
		let m = new d(Qd[o]).multiplyScalar(u ? 1.025 : 1);
		return f.setAttribute("color", new Ae(Array.from({ length: p.count }, () => [
			m.r,
			m.g,
			m.b
		]).flat(), 3)), f;
	})), t = M(e);
	return e.forEach((e) => e.dispose()), t;
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/deciduous-tree/deciduous-wood-geometry.ts
function ef() {
	let e = [], t = (t, n, r, i = 9) => {
		let a = new k(t.map((e) => new I(...e)));
		for (let t = 0; t < i; t++) {
			let o = a.getPoint(t / i), s = a.getPoint((t + 1) / i), c = s.clone().sub(o), l = (e) => r + (n - r) * (1 - e) ** 1.15, d = new u(l((t + 1) / i), l(t / i), c.length() + .012, 9);
			d.applyQuaternion(new fe().setFromUnitVectors(new I(0, 1, 0), c.normalize())), d.translate(...o.add(s).multiplyScalar(.5).toArray()), e.push(d);
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
	let n = M(e);
	return e.forEach((e) => e.dispose()), n;
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/deciduous-tree/deciduous-tree.tsx
var tf = [
	2.4,
	4.2,
	2.4
];
function nf({ size: e }) {
	let t = (0, L.useMemo)(() => {
		let e = {
			wood: ef(),
			crown: $d()
		}, t = new Ye();
		Object.values(e).forEach((e) => {
			e.computeBoundingBox(), t.union(e.boundingBox);
		});
		let n = t.getSize(new I()), r = t.getCenter(new I()), i = new x().makeScale(2.4 / n.x, 4.2 / n.y, 2.4 / n.z).multiply(new x().makeTranslation(-r.x, -t.min.y, -r.z));
		return Object.values(e).forEach((e) => e.applyMatrix4(i)), e;
	}, []);
	return (0, L.useEffect)(() => () => Object.values(t).forEach((e) => e.dispose()), [t]), /* @__PURE__ */ (0, U.jsxs)("group", {
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
			children: [/* @__PURE__ */ (0, U.jsx)(P, { color: "#896547" }), /* @__PURE__ */ (0, U.jsx)(i, {
				color: "#4c4030",
				thickness: .003
			})]
		}), /* @__PURE__ */ (0, U.jsxs)("mesh", {
			name: "deciduous-layered-crown",
			geometry: t.crown,
			castShadow: !0,
			receiveShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)(P, { vertexColors: !0 }), /* @__PURE__ */ (0, U.jsx)(i, {
				color: "#354f32",
				thickness: .002
			})]
		})]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/garden-hedge/hedge-foliage.tsx
var rf = "#68825b", af = "#485f43", of = [
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
function sf() {
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
			color: rf,
			outlineColor: af,
			radius: .08
		}), [-1, 1].flatMap((e) => of.map(([t, n, r, i, a, o], s) => /* @__PURE__ */ (0, U.jsx)(K, {
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
var cf = [
	2,
	1.4,
	.6
];
function lf({ size: e = cf }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "garden-hedge",
		userData: { walkCollider: !0 },
		scale: [
			e[0] / cf[0],
			e[1] / cf[1],
			e[2] / cf[2]
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
			] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#70563b" })]
		}, e)), /* @__PURE__ */ (0, U.jsx)(sf, {})]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/garden-shrub.tsx
var uf = [
	1.35,
	.92,
	1.15
], df = [
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
function ff({ size: e }) {
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: "garden-shrub",
		scale: [
			e[0] / uf[0],
			e[1] / uf[1],
			e[2] / uf[2]
		],
		children: df.map(([e, t, n, r, i], a) => /* @__PURE__ */ (0, U.jsxs)("mesh", {
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
			] }), /* @__PURE__ */ (0, U.jsx)(P, { color: i })]
		}, a))
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/olive-tree/olive-tree-structure.ts
var pf = [
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
], mf = [
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
], hf = [
	"#829365",
	"#9daa7e",
	"#bbc49b"
].map((e) => new d(e));
function gf() {
	let e = [], t = [], n = [], r = (n, r) => {
		e.push(n.x, n.y, n.z), t.push(r.r, r.g, r.b);
	};
	mf.forEach(({ center: t, radius: i }, a) => {
		let o = new I(...t);
		for (let t = 0; t < 22; t++) {
			let s = t * 2.399963 + a * .71, c = -.7 + 1.6 * (t + .5) / 22, l = Math.sqrt(1 - c * c), u = new I(Math.cos(s) * l, c, Math.sin(s) * l), d = new I(u.x * i[0], u.y * i[1], u.z * i[2]), f = new I(-u.z, 0, u.x).normalize(), p = f.clone().cross(u).normalize();
			for (let i = 0; i < 5; i++) {
				let s = i % 2 == 0 ? 1 : -1, c = o.clone().addScaledVector(d, .45 + i * .105), l = u.clone().multiplyScalar(.8).addScaledVector(f, i === 4 ? 0 : s * .65).normalize(), m = p.clone().cross(l).normalize(), h = .31 + .035 * Math.sin(t + a * 2 + i), g = c.clone().addScaledVector(l, h * .5), _ = hf[(t + a) % hf.length], v = e.length / 3;
				r(g.clone().addScaledVector(p, .008), _);
				for (let e = 0; e < 12; e++) {
					let t = e / 12 * Math.PI * 2;
					r(g.clone().addScaledVector(l, Math.cos(t) * h * .5).addScaledVector(m, Math.sin(t) * h * .22), _), n.push(v, v + 1 + e, v + 1 + (e + 1) % 12);
				}
			}
		}
	});
	let i = new qe();
	return i.setAttribute("position", new Ae(e, 3)), i.setAttribute("color", new Ae(t, 3)), i.setIndex(n), i.computeVertexNormals(), i;
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/olive-tree/olive-crown-geometry.ts
function _f() {
	let e = mf.flatMap(({ center: e, radius: t }, n) => [-1, 1].map((r) => {
		let i = new C(1, 1);
		i.scale(.043, .062, .043), i.translate(e[0] + r * t[0] * .34, e[1] - t[1] * .62, e[2] + t[2] * .2);
		let a = new d(n % 3 == 0 ? "#8b914e" : "#424039");
		return i.setAttribute("color", new Ae(Array.from({ length: i.getAttribute("position").count }, () => [
			a.r,
			a.g,
			a.b
		]).flat(), 3)), i;
	})), t = gf(), n = M(e);
	return e.forEach((e) => e.dispose()), {
		leaves: t,
		olives: n
	};
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/olive-tree/olive-branch-geometry.ts
function vf(e, t = 12, n = 12, r = .13) {
	let i = new k(e.map(([e, t, n]) => new I(e, t, n))), a = i.computeFrenetFrames(t, !1), o = [], s = [], c = [], l = new d("#665847"), u = new d("#a99677");
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
	let f = new qe();
	return f.setAttribute("position", new Ae(o, 3)), f.setAttribute("color", new Ae(s, 3)), f.setIndex(c), f.computeVertexNormals(), f;
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/olive-tree/olive-wood-geometry.ts
function yf() {
	let e = Array.from({ length: 7 }, (e, t) => {
		let n = t * Math.PI * 2 / 7 + .23, r = .48 + .09 * Math.sin(t * 3);
		return vf([
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
	}), t = [vf(pf, 24, 16, .09), ...e], n = mf.map(({ center: e, fork: t }, n) => {
		let r = n % 2 == 0 ? -.13 : .14;
		return vf([
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
	}), r = M(t), i = M(n);
	return [...t, ...n].forEach((e) => e.dispose()), {
		trunk: r,
		boughs: i
	};
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/olive-tree/olive-tree.tsx
var bf = [
	3.8,
	3.6,
	3.2
];
function xf({ size: e = bf }) {
	let t = (0, L.useMemo)(() => {
		let e = {
			...yf(),
			..._f()
		}, t = new Ye();
		for (let n of Object.values(e)) n.computeBoundingBox(), t.union(n.boundingBox);
		let n = t.getSize(new I()), r = t.getCenter(new I()), i = new x().makeScale(3.8 / n.x, 3.6 / n.y, 3.2 / n.z).multiply(new x().makeTranslation(-r.x, -t.min.y, -r.z));
		return Object.values(e).forEach((e) => e.applyMatrix4(i)), e;
	}, []);
	return (0, L.useEffect)(() => () => Object.values(t).forEach((e) => e.dispose()), [t]), /* @__PURE__ */ (0, U.jsxs)("group", {
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
				children: [/* @__PURE__ */ (0, U.jsx)(P, { color: "#92816a" }), /* @__PURE__ */ (0, U.jsx)(i, {
					color: "#514a3d",
					thickness: .0015
				})]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "olive-sculpted-boughs",
				geometry: t.boughs,
				castShadow: !0,
				receiveShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)(P, { color: "#92816a" }), /* @__PURE__ */ (0, U.jsx)(i, {
					color: "#514a3d",
					thickness: .0015
				})]
			}),
			/* @__PURE__ */ (0, U.jsx)("mesh", {
				name: "olive-rounded-leaf-sprays",
				geometry: t.leaves,
				castShadow: !0,
				receiveShadow: !0,
				children: /* @__PURE__ */ (0, U.jsx)(P, {
					vertexColors: !0,
					side: 2
				})
			}),
			/* @__PURE__ */ (0, U.jsx)("mesh", {
				name: "olive-fruit",
				geometry: t.olives,
				castShadow: !0,
				children: /* @__PURE__ */ (0, U.jsx)(P, { vertexColors: !0 })
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/pool-chaise-longue/chaise-upholstery.tsx
var Sf = 42 * Math.PI / 180, Cf = .72, wf = .09, Tf = Cf / 2, Ef = wf / 2, Df = Tf * Math.sin(Sf) + Ef * Math.cos(Sf), Of = Tf * Math.cos(Sf) + Ef * Math.sin(Sf), kf = [
	0,
	.85 - Df,
	-1.05 + Of
], Af = "#94a58c", jf = "#687662";
function Mf() {
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
			color: Af,
			outlineColor: jf,
			radius: .035
		}), /* @__PURE__ */ (0, U.jsx)(K, {
			name: "pool-chaise-reclined-back-cushion",
			size: [
				.68,
				wf,
				Cf
			],
			position: [...kf],
			rotation: [
				Sf,
				0,
				0
			],
			color: Af,
			outlineColor: jf,
			radius: .035
		})]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/pool-chaise-longue/chaise-frame.tsx
var Nf = "#a87745", Pf = "#6d4a2c", Ff = (e, t, n, r = [
	0,
	0,
	0
]) => /* @__PURE__ */ (0, U.jsx)(K, {
	name: e,
	size: t,
	position: n,
	rotation: r,
	color: Nf,
	outlineColor: Pf,
	radius: .015
}, e);
function If() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "pool-chaise-teak-frame",
		children: [
			[-.36, .36].map((e) => Ff(`pool-chaise-side-rail-${e}`, [
				.08,
				.08,
				1.5
			], [
				e,
				.17,
				.3
			])),
			[-.39, .98].map((e) => Ff(`pool-chaise-cross-rail-${e}`, [
				.64,
				.08,
				.08
			], [
				0,
				.17,
				e
			])),
			[-.36, .36].flatMap((e) => [-.35, .82].map((t) => Ff(`pool-chaise-leg-${e}-${t}`, [
				.08,
				.17,
				.08
			], [
				e,
				.085,
				t
			]))),
			[-.285, .285].map((e) => Ff(`pool-chaise-back-support-${e}`, [
				.05,
				.05,
				.64
			], [
				e,
				kf[1] - .045,
				kf[2] - .04
			], [
				Sf,
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: Pf }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
var Lf = [
	.8,
	.85,
	2.1
];
function Rf({ size: e = Lf }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "pool-chaise-longue",
		userData: { walkCollider: !0 },
		scale: [
			e[0] / Lf[0],
			e[1] / Lf[1],
			e[2] / Lf[2]
		],
		children: [/* @__PURE__ */ (0, U.jsx)(If, {}), /* @__PURE__ */ (0, U.jsx)(Mf, {})]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/outdoor-bbq.tsx
var zf = [
	1.2,
	1.1,
	.6
];
function Bf({ size: e = zf }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#bdc4b9" })]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/wooden-garden-swing.tsx
var Vf = [
	2.2,
	2.1,
	1.4
];
function Hf({ size: e = Vf }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#a87e4e" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#d7ccb0" })]
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
var Uf = [
	1.6,
	.75,
	.9
];
function Wf({ size: e = Uf }) {
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
var Gf = [
	.56,
	.85,
	.58
];
function Kf({ size: e = Gf }) {
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
var qf = [
	1.5,
	.9,
	.6
];
function Jf({ size: e = qf }) {
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
var Yf = [
	.5,
	.45,
	.5
];
function Xf({ size: e = Yf }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#b58a58" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#414e49" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#414e49" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/patio-parasol.tsx
var Zf = [
	2.4,
	2.5,
	2.4
];
function Qf({ size: e = Zf }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#414e49" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#b58a58" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#e4d8ba" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#b58a58" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/outdoor-basin.tsx
function $f({ name: e, radius: t, height: n, position: r, color: i }) {
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
		children: [/* @__PURE__ */ (0, U.jsx)("latheGeometry", { args: [a.map(([e, t]) => new Ce(e, t)), 24] }), /* @__PURE__ */ (0, U.jsx)(P, { color: i })]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/terracotta-planter.tsx
var ep = [
	.5,
	.5,
	.5
];
function tp({ size: e = ep }) {
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: "terracotta-planter",
		scale: [
			e[0] / .5,
			e[1] / .5,
			e[2] / .5
		],
		userData: { walkCollider: !0 },
		children: /* @__PURE__ */ (0, U.jsx)($f, {
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
var np = [
	1.2,
	.4,
	.8
];
function rp({ size: e = np }) {
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
var ip = [
	1.2,
	.6,
	.55
];
function ap({ size: e = ip }) {
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
var op = [
	.48,
	.6,
	.42
];
function sp({ size: e = op }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#6d8063" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#414e49" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#414e49" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#6d8063" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#6d8063" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#6d8063" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#6d8063" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#6d8063" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#6d8063" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#6d8063" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/watering-can.tsx
var cp = [
	.54,
	.36,
	.22
];
function lp({ size: e = cp }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#6d8063" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#414e49" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#414e49" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#6d8063" })]
			})
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/outdoor/garden-birdbath.tsx
var up = [
	.6,
	.8,
	.6
];
function dp({ size: e = up }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#b6b5a3" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#c8c4b0" })]
			}),
			/* @__PURE__ */ (0, U.jsx)($f, {
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
var fp = [
	.8,
	.4,
	.8
];
function pp({ size: e = fp }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "outdoor-fire-pit",
		scale: [
			e[0] / .8,
			e[1] / .4,
			e[2] / .8
		],
		userData: { walkCollider: !0 },
		children: [
			/* @__PURE__ */ (0, U.jsx)($f, {
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
var mp = [
	.8,
	1,
	.8
];
function hp({ size: e = mp }) {
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
var gp = [
	.58,
	1.05,
	.64
];
function _p({ size: e = gp }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#414e49" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#414e49" })]
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
var vp = [
	.9,
	1.8,
	.12
];
function yp({ size: e = vp }) {
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
//#region packages/catalog/src/furnishing/presets/laundry/drying-rack.tsx
var bp = [
	1.2,
	.95,
	.6
];
function xp({ size: e = bp } = {}) {
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
var Sp = [
	1.2,
	.9,
	.4
];
function Cp({ size: e = Sp } = {}) {
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
var wp = [
	.6,
	.35,
	.4
];
function Tp({ size: e = wp } = {}) {
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
//#region packages/catalog/src/furnishing/presets/curtains/single-window-curtain.tsx
function Ep({ size: e, variant: t, color: n }) {
	let r = t === "right" ? 1 : -1;
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#dedbd3" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
						color: "#aaa399",
						thickness: .0015,
						screenspace: !1
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				position: [
					r * .37,
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: n ?? "#d8c8ad" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
					r * .37 + e,
					1.16,
					.102
				],
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					.018,
					2.3,
					.012
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: n ?? "#c4b497" })]
			}, e))
		]
	});
}
//#endregion
//#region packages/catalog/src/furnishing/presets/children-bedroom/curtain-definition.tsx
var Dp = R({
	defaultRoomType: "bedroom",
	component: ({ size: e, color: t }) => /* @__PURE__ */ (0, U.jsx)("group", {
		scale: [
			e[0] / 1.9,
			e[1] / 2.205,
			e[2] / .076
		],
		children: /* @__PURE__ */ (0, U.jsx)(Wo, { color: t })
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
}), Op = R({
	defaultRoomType: "living-room",
	component: Ep,
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
}), kp = {
	"rattan-bell-pendant": R({
		legacyOnly: !0,
		component: di,
		label: "Rattan bell pendant",
		category: "Lighting",
		defaultRoomType: "dining-room",
		defaultSize: li,
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
	}),
	"white-display-column": R({
		component: gl,
		label: "White display column",
		category: "Storage",
		defaultRoomType: "living-room",
		defaultSize: hl,
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
	}),
	"trailing-shelf-plant": R({
		component: Zs,
		label: "Trailing shelf plant",
		category: "Decor",
		defaultRoomType: "living-room",
		defaultSize: Xs,
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
	}),
	"decorative-globe": R({
		component: Ys,
		label: "Decorative globe",
		category: "Decor",
		defaultRoomType: "living-room",
		defaultSize: Js,
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
	}),
	"ring-ceramic-vase": R({
		component: qs,
		label: "Ring ceramic vase",
		category: "Decor",
		defaultRoomType: "living-room",
		defaultSize: Ks,
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
	}),
	"tufted-diamond-rug": R({
		component: ml,
		label: "Tufted diamond rug",
		category: "Decor",
		defaultRoomType: "living-room",
		defaultSize: pl,
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
	}),
	"white-tapered-wall-sconce": R({
		component: fl,
		label: "White tapered wall sconce",
		category: "Lighting",
		defaultRoomType: "living-room",
		defaultSize: dl,
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
	}),
	"book-row": R({
		component: ul,
		label: "Book row",
		category: "Decor",
		defaultRoomType: "living-room",
		defaultSize: ll,
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
	}),
	"six-globe-ceiling-lamp": R({
		component: cl,
		label: "Six globe ceiling lamp",
		category: "Lighting",
		defaultRoomType: "living-room",
		defaultSize: sl,
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
	}),
	"slim-soundbar": R({
		component: al,
		label: "Slim soundbar",
		category: "Media",
		defaultRoomType: "living-room",
		defaultSize: il,
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
	}),
	"media-shelf-surround": R({
		component: rl,
		label: "Media shelf surround",
		category: "Storage",
		defaultRoomType: "living-room",
		defaultSize: nl,
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
	}),
	"double-arched-bookcase": R({
		component: tl,
		label: "Double arched bookcase",
		category: "Storage",
		defaultRoomType: "living-room",
		defaultSize: el,
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
	}),
	"six-door-oak-sideboard": R({
		component: Qc,
		label: "Six door oak sideboard",
		category: "Storage",
		defaultRoomType: "living-room",
		defaultSize: Zc,
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
	}),
	"hexagonal-side-table": R({
		component: Xc,
		label: "Hexagonal side table",
		category: "Tables",
		defaultRoomType: "living-room",
		defaultSize: Yc,
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
	}),
	"sage-rounded-footstool": R({
		component: Jc,
		label: "Sage rounded footstool",
		category: "Seating",
		defaultRoomType: "living-room",
		defaultSize: qc,
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
	}),
	"sage-tub-armchair": R({
		component: Kc,
		label: "Sage tub armchair",
		category: "Seating",
		defaultRoomType: "living-room",
		defaultSize: Gc,
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
	}),
	"curved-three-seat-sofa": R({
		component: Wc,
		label: "Curved three seat sofa",
		category: "Seating",
		defaultRoomType: "living-room",
		defaultSize: Uc,
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
	}),
	"oak-wall-uplight": R({
		component: Du,
		label: "Oak wall uplight",
		category: "Lighting",
		defaultRoomType: "bedroom",
		defaultSize: Eu,
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
	}),
	"wall-reading-spot": R({
		component: Tu,
		label: "Wall reading spot",
		category: "Lighting",
		defaultRoomType: "bedroom",
		defaultSize: wu,
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
	}),
	"open-laptop": R({
		component: Vu,
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
	}),
	"round-globe-wall-lamp": R({
		component: Cu,
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
	}),
	"knob-door-wardrobe": R({
		component: hu,
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
	}),
	"overbed-bridge-cabinet": R({
		component: _u,
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
	}),
	"shelf-headboard": R({
		component: yu,
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
	}),
	"headboard-free-double-bed": R({
		component: xu,
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
	}),
	"drawer-pedestal-desk": R({
		component: Pu,
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
	}),
	"white-folding-chair": R({
		component: Lu,
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
	}),
	"desktop-monitor": R({
		component: zu,
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
	}),
	"louvered-closet": R({
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
			children: /* @__PURE__ */ (0, U.jsx)(Bd, {})
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
	}),
	"family-bathtub": R({
		defaultRoomType: "bathroom",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / 1.64,
				e[1] / .782,
				e[2] / .78
			],
			children: /* @__PURE__ */ (0, U.jsx)(No, {})
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
	}),
	"bath-screen": R({
		defaultRoomType: "bathroom",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / .933,
				e[1] / 1.42,
				e[2] / .04
			],
			children: /* @__PURE__ */ (0, U.jsx)(zo, {})
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
	}),
	"cane-wardrobe": R({
		defaultRoomType: "hallway",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				1,
				e[1] / 2.15,
				e[2] / .474
			],
			children: /* @__PURE__ */ (0, U.jsx)(Yu, { width: e[0] })
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
	}),
	"open-shelf-closet": R({
		defaultRoomType: "hallway",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / .72,
				e[1] / 2.15,
				e[2] / .403
			],
			children: /* @__PURE__ */ (0, U.jsx)(Xu, {})
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
	}),
	"organic-wall-mirror": R({
		defaultRoomType: "hallway",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / .76,
				e[1] / 1.1,
				e[2] / .09
			],
			children: /* @__PURE__ */ (0, U.jsx)(Ws, {})
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
	}),
	"sectional-sofa": R({
		defaultRoomType: "living-room",
		component: ({ size: e, variant: t, color: n }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / 2.93,
				e[1] / 1.227,
				e[2] / 1.63
			],
			children: /* @__PURE__ */ (0, U.jsx)(_c, {
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
	}),
	"dining-set": R({
		defaultRoomType: "dining-room",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / 1.785,
				e[1] / 1.12,
				e[2] / 1.785
			],
			children: /* @__PURE__ */ (0, U.jsx)(nu, { footprintScale: .88 })
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
	}),
	"media-wall": R({
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
			children: /* @__PURE__ */ (0, U.jsx)(bc, {})
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
	}),
	"round-coffee-table": R({
		defaultRoomType: "living-room",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / .68,
				e[1] / .386,
				e[2] / .612
			],
			children: /* @__PURE__ */ (0, U.jsx)(xc, {})
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
	}),
	"tall-ficus": R({
		defaultRoomType: "living-room",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / .901,
				e[1] / 1.643,
				e[2] / .503
			],
			children: /* @__PURE__ */ (0, U.jsx)(Gs, {})
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
	}),
	"dresser-with-tv": R({
		defaultRoomType: "bedroom",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / 1.32,
				e[1] / 1.52,
				e[2] / .595
			],
			children: /* @__PURE__ */ (0, U.jsx)(pu, {})
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
	}),
	"shower-assembly": R({
		defaultRoomType: "bathroom",
		component: Ro,
		label: "Shower assembly",
		category: "Bathroom",
		defaultSize: Lo,
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
	}),
	"compact-toilet": R({
		defaultRoomType: "bathroom",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / .39,
				e[1] / .724,
				e[2] / .6
			],
			children: /* @__PURE__ */ (0, U.jsx)(Oo, {})
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
	}),
	"changing-table": R({
		defaultRoomType: "bedroom",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / .81,
				e[1] / .947,
				e[2] / .497
			],
			children: /* @__PURE__ */ (0, U.jsx)(Ds, {})
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
	}),
	"cube-storage": R({
		defaultRoomType: "bedroom",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / .85,
				e[1] / 1.202,
				e[2] / .412
			],
			children: /* @__PURE__ */ (0, U.jsx)(Fs, {})
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
	}),
	"cabin-bed": R({
		defaultRoomType: "bedroom",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / 1.183,
				e[1] / 1.696,
				e[2] / 2.432
			],
			children: /* @__PURE__ */ (0, U.jsx)(vs, {})
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
	}),
	"two-tier-wall-shelves": R({
		defaultRoomType: "bedroom",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / .325,
				e[1] / .568,
				e[2] / .86
			],
			children: /* @__PURE__ */ (0, U.jsx)(Ls, {})
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
	}),
	"round-wall-display": R({
		defaultRoomType: "bedroom",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / .77,
				e[1] / .77,
				e[2] / .23
			],
			children: /* @__PURE__ */ (0, U.jsx)(Is, {})
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
	}),
	"three-tier-wall-shelves": R({
		defaultRoomType: "bedroom",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / .3,
				e[1] / .989,
				e[2] / .88
			],
			children: /* @__PURE__ */ (0, U.jsx)(zs, {})
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
	})
}, Ap = {
	"table-lamp": R({
		legacyOnly: !0,
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / .32,
				e[1] / .52,
				e[2] / .32
			],
			children: /* @__PURE__ */ (0, U.jsx)(zr, { visualState: "connected-inactive" })
		}),
		label: "Table lamp",
		category: "Lighting",
		defaultRoomType: "bedroom",
		defaultSize: Rr,
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
	"woven-pendant": R({
		legacyOnly: !0,
		defaultRoomType: "dining-room",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / .847,
				e[1] / .58,
				e[2] / .86
			],
			children: /* @__PURE__ */ (0, U.jsx)(Br, {})
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
	"children-pendant": R({
		legacyOnly: !0,
		defaultRoomType: "bedroom",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / .58,
				e[1] / .479,
				e[2] / .58
			],
			children: /* @__PURE__ */ (0, U.jsx)(Ur, {})
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
}, jp = {
	"drying-rack": R({
		component: xp,
		label: "Drying rack",
		category: "Household",
		defaultRoomType: "laundry",
		defaultSize: bp,
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
	"ironing-board": R({
		component: Cp,
		label: "Ironing board",
		category: "Household",
		defaultRoomType: "laundry",
		defaultSize: Sp,
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
	"two-step-stool": R({
		component: yd,
		label: "Two step stool",
		category: "Household",
		defaultRoomType: "kitchen",
		defaultSize: vd,
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
	"utility-shelving": R({
		component: Qu,
		label: "Utility shelving",
		category: "Storage",
		defaultRoomType: "laundry",
		defaultSize: Zu,
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
	workbench: R({
		component: ed,
		label: "Workbench",
		category: "Storage",
		defaultRoomType: "laundry",
		defaultSize: $u,
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
	toolbox: R({
		component: nd,
		label: "Toolbox",
		category: "Storage",
		defaultRoomType: "laundry",
		defaultSize: td,
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
	"shoe-cabinet": R({
		component: Hd,
		label: "Shoe cabinet",
		category: "Storage",
		defaultRoomType: "entryway",
		defaultSize: Vd,
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
	"umbrella-stand": R({
		component: Wd,
		label: "Umbrella stand",
		category: "Storage",
		defaultRoomType: "entryway",
		defaultSize: Ud,
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
	"freestanding-coat-stand": R({
		component: Kd,
		label: "Freestanding coat stand",
		category: "Storage",
		defaultRoomType: "entryway",
		defaultSize: Gd,
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
	"laundry-carry-basket": R({
		component: Tp,
		label: "Laundry carry basket",
		category: "Household",
		defaultRoomType: "laundry",
		defaultSize: wp,
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
	"kitchen-trolley": R({
		component: xd,
		label: "Kitchen trolley",
		category: "Household",
		defaultRoomType: "kitchen",
		defaultSize: bd,
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
	"bread-bin": R({
		component: Cd,
		label: "Bread bin",
		category: "Household",
		defaultRoomType: "kitchen",
		defaultSize: Sd,
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
	"dish-drying-rack": R({
		component: Td,
		label: "Dish drying rack",
		category: "Household",
		defaultRoomType: "kitchen",
		defaultSize: wd,
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
	"toilet-paper-holder": R({
		component: Vo,
		label: "Toilet paper holder",
		category: "Bathroom",
		defaultRoomType: "bathroom",
		defaultSize: Bo,
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
			visibleMeshes: 5,
			triangles: 1500
		}
	}),
	"medicine-cabinet": R({
		component: Uo,
		label: "Medicine cabinet",
		category: "Bathroom",
		defaultRoomType: "bathroom",
		defaultSize: Ho,
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
	"two-seat-loveseat": R({
		component: Cc,
		label: "Two seat loveseat",
		category: "Seating",
		defaultRoomType: "living-room",
		defaultSize: Sc,
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
	"indoor-chaise-longue": R({
		component: Tc,
		label: "Indoor chaise longue",
		category: "Seating",
		defaultRoomType: "living-room",
		defaultSize: wc,
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
	"pedestal-side-table": R({
		component: Dc,
		label: "Pedestal side table",
		category: "Tables",
		defaultRoomType: "living-room",
		defaultSize: Ec,
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
	"c-shaped-sofa-table": R({
		component: kc,
		label: "C shaped sofa table",
		category: "Tables",
		defaultRoomType: "living-room",
		defaultSize: Oc,
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
	"blanket-storage-trunk": R({
		component: jc,
		label: "Blanket storage trunk",
		category: "Storage",
		defaultRoomType: "living-room",
		defaultSize: Ac,
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
	"floor-magazine-rack": R({
		component: Nc,
		label: "Floor magazine rack",
		category: "Storage",
		defaultRoomType: "living-room",
		defaultSize: Mc,
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
	"vinyl-record-cabinet": R({
		component: Fc,
		label: "Vinyl record cabinet",
		category: "Storage",
		defaultRoomType: "living-room",
		defaultSize: Pc,
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
	"open-display-bookcase": R({
		component: Lc,
		label: "Open display bookcase",
		category: "Storage",
		defaultRoomType: "living-room",
		defaultSize: Ic,
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
	"two-tier-bar-cart": R({
		component: zc,
		label: "Two tier bar cart",
		category: "Tables",
		defaultRoomType: "living-room",
		defaultSize: Rc,
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
	"slatted-room-divider": R({
		component: Vc,
		label: "Slatted room divider",
		category: "Decor",
		defaultRoomType: "living-room",
		defaultSize: Bc,
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
	...kp,
	"outdoor-dining-table": R({
		component: Wf,
		label: "Outdoor dining table",
		category: "Tables",
		defaultRoomType: "outdoor",
		defaultSize: Uf,
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
	"outdoor-dining-chair": R({
		component: Kf,
		label: "Outdoor dining chair",
		category: "Seating",
		defaultRoomType: "outdoor",
		defaultSize: Gf,
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
	"garden-bench": R({
		component: Jf,
		label: "Garden bench",
		category: "Seating",
		defaultRoomType: "outdoor",
		defaultSize: qf,
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
	"outdoor-side-table": R({
		component: Xf,
		label: "Outdoor side table",
		category: "Tables",
		defaultRoomType: "outdoor",
		defaultSize: Yf,
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
	"patio-parasol": R({
		component: Qf,
		label: "Patio parasol",
		category: "Garden structures",
		defaultRoomType: "outdoor",
		defaultSize: Zf,
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
	"terracotta-planter": R({
		component: tp,
		label: "Terracotta planter",
		category: "Vegetation",
		defaultRoomType: "outdoor",
		defaultSize: ep,
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
	"raised-garden-bed": R({
		component: rp,
		label: "Raised garden bed",
		category: "Garden structures",
		defaultRoomType: "outdoor",
		defaultSize: np,
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
	"outdoor-storage-box": R({
		component: ap,
		label: "Outdoor storage box",
		category: "Storage",
		defaultRoomType: "outdoor",
		defaultSize: ip,
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
	"garden-hose-reel": R({
		component: sp,
		label: "Garden hose reel",
		category: "Garden tools",
		defaultRoomType: "outdoor",
		defaultSize: op,
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
	"watering-can": R({
		component: lp,
		label: "Watering can",
		category: "Garden tools",
		defaultRoomType: "outdoor",
		defaultSize: cp,
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
	"garden-birdbath": R({
		component: dp,
		label: "Garden birdbath",
		category: "Decor",
		defaultRoomType: "outdoor",
		defaultSize: up,
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
	"outdoor-fire-pit": R({
		component: pp,
		label: "Outdoor fire pit",
		category: "Garden structures",
		defaultRoomType: "outdoor",
		defaultSize: fp,
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
	"garden-compost-bin": R({
		component: hp,
		label: "Garden compost bin",
		category: "Garden tools",
		defaultRoomType: "outdoor",
		defaultSize: mp,
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
	"wheelie-bin": R({
		component: _p,
		label: "Wheelie bin",
		category: "Garden tools",
		defaultRoomType: "outdoor",
		defaultSize: gp,
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
	"garden-trellis": R({
		component: yp,
		label: "Garden trellis",
		category: "Garden structures",
		defaultRoomType: "outdoor",
		defaultSize: vp,
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
	...Ap,
	"three-seat-sofa": R({
		component: tc,
		label: "3-seat sofa",
		defaultColor: "#e2d5bf",
		category: "Seating",
		defaultRoomType: "living-room",
		defaultSize: ec,
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
	"rectangular-dining-table": R({
		component: vl,
		label: "Rectangular dining table",
		category: "Tables",
		defaultRoomType: "dining-room",
		defaultSize: _l,
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
	"oak-dining-chair": R({
		component: xl,
		label: "Oak dining chair",
		category: "Seating",
		defaultRoomType: "dining-room",
		defaultSize: bl,
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
	"oak-nightstand": R({
		component: iu,
		label: "Small oak nightstand",
		category: "Storage",
		defaultRoomType: "bedroom",
		defaultSize: ru,
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
	"flat-door-wardrobe": R({
		component: ou,
		label: "Flat-door wardrobe",
		category: "Storage",
		defaultRoomType: "bedroom",
		defaultSize: au,
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
	"oak-desk": R({
		component: ku,
		label: "Oak desk",
		category: "Tables",
		defaultRoomType: "office",
		defaultSize: Ou,
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
	"ergonomic-office-chair": R({
		component: Mu,
		label: "Ergonomic office chair",
		category: "Seating",
		defaultRoomType: "office",
		defaultSize: ju,
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
	"oak-bookshelf": R({
		component: Uu,
		label: "Oak bookshelf",
		category: "Storage",
		defaultRoomType: "office",
		defaultSize: Hu,
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
	"single-bed": R({
		component: cu,
		label: "Single bed · 90 × 200",
		category: "Beds",
		defaultRoomType: "bedroom",
		defaultSize: su,
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
	"double-bed": R({
		component: uu,
		label: "Double bed · 160 × 200",
		category: "Beds",
		defaultRoomType: "bedroom",
		defaultSize: lu,
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
			visibleMeshes: 11,
			triangles: 4500
		}
	}),
	"rectangular-coffee-table": R({
		component: rc,
		label: "Rectangular coffee table",
		category: "Tables",
		defaultRoomType: "living-room",
		defaultSize: nc,
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
	"upholstered-armchair": R({
		component: ac,
		label: "Upholstered armchair",
		category: "Seating",
		defaultRoomType: "living-room",
		defaultSize: ic,
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
	"chest-of-drawers": R({
		component: fu,
		label: "Chest of drawers",
		category: "Storage",
		defaultRoomType: "bedroom",
		defaultSize: du,
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
	"neutral-area-rug": R({
		component: fc,
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
		defaultSize: cc,
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
	"low-media-console": R({
		component: mc,
		label: "Low media console",
		category: "Storage",
		defaultRoomType: "living-room",
		defaultSize: pc,
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
	"three-door-sideboard": R({
		component: Cl,
		label: "Three-door sideboard",
		category: "Storage",
		defaultRoomType: "dining-room",
		defaultSize: Sl,
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
	"kitchen-base-cabinet": R({
		variants: In,
		component: ad,
		label: "Kitchen base cabinet",
		category: "Kitchen",
		defaultRoomType: "kitchen",
		defaultSize: id,
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
	"kitchen-sink-cabinet": R({
		variants: In,
		component: sd,
		label: "Kitchen sink cabinet",
		category: "Kitchen",
		defaultRoomType: "kitchen",
		defaultSize: od,
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
	"kitchen-wall-cabinet": R({
		variants: In,
		component: ld,
		label: "Kitchen wall cabinet",
		category: "Kitchen",
		defaultRoomType: "kitchen",
		defaultSize: cd,
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
	"freestanding-bathtub": R({
		component: Do,
		label: "Freestanding bathtub",
		category: "Bathroom",
		defaultRoomType: "bathroom",
		defaultSize: Eo,
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
	"dark-oak-vessel-vanity": R({
		component: fo,
		label: "Dark oak vessel vanity · 80 cm",
		category: "Bathroom",
		defaultRoomType: "bathroom",
		defaultSize: uo,
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
	"white-corner-wardrobe": R({
		component: Gu,
		label: "White corner wardrobe · 180 cm",
		category: "Storage",
		defaultRoomType: "bedroom",
		defaultSize: Wu,
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
	"entryway-shoe-bench": R({
		component: Dd,
		label: "Entryway shoe bench",
		category: "Entryway",
		defaultRoomType: "entryway",
		defaultSize: Ed,
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
	"wall-coat-rack": R({
		component: kd,
		label: "Wall coat rack",
		category: "Entryway",
		defaultRoomType: "entryway",
		defaultSize: Od,
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
	"hallway-console-table": R({
		component: Jd,
		label: "Hallway console table",
		category: "Tables",
		defaultRoomType: "hallway",
		defaultSize: qd,
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
	"floating-wall-shelf": R({
		component: Xd,
		label: "Floating wall shelf",
		category: "Storage",
		defaultRoomType: "hallway",
		defaultSize: Yd,
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
	"framed-wall-art": R({
		component: Us,
		label: "Framed wall art",
		category: "Decor",
		defaultRoomType: "living-room",
		defaultSize: Hs,
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
	"wooden-crib": R({
		component: ss,
		label: "Wooden crib · 70 × 140",
		category: "Children",
		defaultRoomType: "bedroom",
		defaultSize: os,
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
	"counter-stool": R({
		component: dd,
		label: "Counter stool",
		category: "Seating",
		defaultRoomType: "kitchen",
		defaultSize: ud,
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
	"upholstered-ottoman": R({
		component: gc,
		label: "Upholstered ottoman",
		category: "Seating",
		defaultRoomType: "living-room",
		defaultSize: hc,
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
	"arched-mirror": R({
		defaultRoomType: "bathroom",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / .54,
				e[1] / 1.05,
				e[2] / .06
			],
			children: /* @__PURE__ */ (0, U.jsx)(lo, {})
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
	"concealed-cistern-toilet": R({
		defaultRoomType: "bathroom",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / .728,
				e[1] / 1.16,
				e[2] / .58
			],
			children: /* @__PURE__ */ (0, U.jsx)(_o, {})
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
	"potted-plant": R({
		defaultRoomType: "living-room",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / .615,
				e[1] / 1.105,
				e[2] / .44
			],
			children: /* @__PURE__ */ (0, U.jsx)(Vs, {})
		}),
		label: "Potted plant",
		category: "Decor",
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
	}),
	"towel-rail": R({
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
			children: /* @__PURE__ */ (0, U.jsx)(vo, {})
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
	"vanity-accessories": R({
		defaultRoomType: "bathroom",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / .136,
				e[1] / .31,
				e[2] / .4
			],
			children: /* @__PURE__ */ (0, U.jsx)(yo, {})
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
	"vessel-sink-faucet": R({
		defaultRoomType: "bathroom",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / .48,
				e[1] / .36,
				e[2] / .48
			],
			children: /* @__PURE__ */ (0, U.jsx)(bo, {})
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
	"wicker-hamper": R({
		defaultRoomType: "laundry",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / .48,
				e[1] / .593,
				e[2] / .46
			],
			children: /* @__PURE__ */ (0, U.jsx)(xo, {})
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
	"wicker-towel-basket": R({
		defaultRoomType: "bathroom",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / .38,
				e[1] / .315,
				e[2] / .31
			],
			children: /* @__PURE__ */ (0, U.jsx)(So, {})
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
	"wooden-vanity": R({
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
			children: /* @__PURE__ */ (0, U.jsx)(To, {})
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
	"single-window-curtain": Op,
	"children-curtains": Dp,
	"children-floor-basket": R({
		defaultRoomType: "bedroom",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / .68,
				e[1] / .512,
				e[2] / .68
			],
			children: /* @__PURE__ */ (0, U.jsx)(as, {})
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
	"children-toy-shelf": R({
		defaultRoomType: "bedroom",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / .505,
				e[1] / 1.065,
				e[2] / .285
			],
			children: /* @__PURE__ */ (0, U.jsx)(Yo, {})
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
	"children-table-set": R({
		defaultRoomType: "bedroom",
		component: ({ size: e }) => /* @__PURE__ */ (0, U.jsx)("group", {
			scale: [
				e[0] / 1.08,
				e[1] / .838,
				e[2] / 1.12
			],
			children: /* @__PURE__ */ (0, U.jsx)(es, {})
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
	"deciduous-tree": R({
		component: nf,
		label: "Deciduous tree",
		category: "Vegetation",
		defaultRoomType: "outdoor",
		defaultSize: tf,
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
	"olive-tree": R({
		component: xf,
		label: "Olive tree · Olivier",
		category: "Vegetation",
		defaultRoomType: "outdoor",
		defaultSize: bf,
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
	"wrought-iron-pergola": R({
		legacyOnly: !0,
		component: ii,
		label: "Wrought-iron pergola",
		category: "Garden structures",
		defaultRoomType: "outdoor",
		defaultSize: ni,
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
	"garden-shrub": R({
		component: ff,
		label: "Garden shrub",
		category: "Vegetation",
		defaultRoomType: "outdoor",
		defaultSize: uf,
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
	"pool-chaise-longue": R({
		component: Rf,
		label: "Pool chaise longue",
		category: "Seating",
		defaultRoomType: "outdoor",
		defaultSize: Lf,
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
	"garden-hedge": R({
		component: lf,
		label: "Garden hedge",
		category: "Vegetation",
		defaultRoomType: "outdoor",
		defaultSize: cf,
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
	"kitchen-pantry-cabinet": R({
		component: pd,
		label: "Kitchen pantry cabinet",
		category: "Kitchen",
		defaultRoomType: "kitchen",
		defaultSize: fd,
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
		variants: In,
		outlineContact: !0,
		complexity: {
			visibleMeshes: 6,
			triangles: 2600
		}
	}),
	"kitchen-island": R({
		component: hd,
		label: "Kitchen island",
		category: "Kitchen",
		defaultRoomType: "kitchen",
		defaultSize: md,
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
		variants: In,
		outlineContact: !0,
		complexity: {
			visibleMeshes: 9,
			triangles: 3800
		}
	}),
	"kitchen-hob-cabinet": R({
		component: _d,
		label: "Kitchen hob cabinet",
		category: "Kitchen",
		defaultRoomType: "kitchen",
		defaultSize: gd,
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
		variants: In,
		outlineContact: !0,
		complexity: {
			visibleMeshes: 14,
			triangles: 2800
		}
	}),
	"outdoor-bbq": R({
		component: Bf,
		label: "Outdoor bbq",
		category: "Garden structures",
		defaultRoomType: "outdoor",
		defaultSize: zf,
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
	"wooden-garden-swing": R({
		component: Hf,
		label: "Wooden garden swing",
		category: "Garden structures",
		defaultRoomType: "outdoor",
		defaultSize: Vf,
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
}, Mp = tt(Object.assign(Object.create(null), jp)), Np = {
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
}, Pp = /*#__PURE__*/ JSON.parse("[{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"villa-garden-dining-pergola-light-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"Pergola string lights\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"villa-garden-dining-pergola\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"pergola-string-lights\",\"placement\":{\"at\":[10,19.8],\"elevationMeters\":-0.043,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[5,2.7,3],\"variant\":\"string-lights\"},{\"floorId\":\"ground-floor\",\"id\":\"villa-garden-dining-table\",\"kind\":\"furnishing\",\"modelId\":\"rectangular-dining-table\",\"placement\":{\"at\":[10,19.8],\"elevationMeters\":-0.043,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[2.4,0.75,0.9]},{\"floorId\":\"ground-floor\",\"id\":\"villa-garden-dining-chair-north-0\",\"kind\":\"furnishing\",\"modelId\":\"oak-dining-chair\",\"placement\":{\"at\":[9.3,19.200000000000003],\"elevationMeters\":-0.043,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.49,0.82,0.5]},{\"floorId\":\"ground-floor\",\"id\":\"villa-garden-dining-chair-south-0\",\"kind\":\"furnishing\",\"modelId\":\"oak-dining-chair\",\"placement\":{\"at\":[9.3,20.400000000000002],\"elevationMeters\":-0.043,\"kind\":\"absolute\",\"rotationYRadians\":3.141592653589793},\"size\":[0.49,0.82,0.5]},{\"floorId\":\"ground-floor\",\"id\":\"villa-garden-dining-chair-north-1\",\"kind\":\"furnishing\",\"modelId\":\"oak-dining-chair\",\"placement\":{\"at\":[10,19.200000000000003],\"elevationMeters\":-0.043,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.49,0.82,0.5]},{\"floorId\":\"ground-floor\",\"id\":\"villa-garden-dining-chair-south-1\",\"kind\":\"furnishing\",\"modelId\":\"oak-dining-chair\",\"placement\":{\"at\":[10,20.400000000000002],\"elevationMeters\":-0.043,\"kind\":\"absolute\",\"rotationYRadians\":3.141592653589793},\"size\":[0.49,0.82,0.5]},{\"floorId\":\"ground-floor\",\"id\":\"villa-garden-dining-chair-north-2\",\"kind\":\"furnishing\",\"modelId\":\"oak-dining-chair\",\"placement\":{\"at\":[10.700000000000001,19.200000000000003],\"elevationMeters\":-0.043,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.49,0.82,0.5]},{\"floorId\":\"ground-floor\",\"id\":\"villa-garden-dining-chair-south-2\",\"kind\":\"furnishing\",\"modelId\":\"oak-dining-chair\",\"placement\":{\"at\":[10.700000000000001,20.400000000000002],\"elevationMeters\":-0.043,\"kind\":\"absolute\",\"rotationYRadians\":3.141592653589793},\"size\":[0.49,0.82,0.5]},{\"floorId\":\"ground-floor\",\"id\":\"villa-garden-lounger-0-1\",\"kind\":\"furnishing\",\"modelId\":\"pool-chaise-longue\",\"placement\":{\"at\":[3,23.400000000000002],\"elevationMeters\":-0.049,\"kind\":\"absolute\",\"rotationYRadians\":1.5707963267948966},\"size\":[0.8,0.85,2.1]},{\"floorId\":\"ground-floor\",\"id\":\"villa-garden-lounger-0-2\",\"kind\":\"furnishing\",\"modelId\":\"pool-chaise-longue\",\"placement\":{\"at\":[3.1,25.5],\"elevationMeters\":-0.049,\"kind\":\"absolute\",\"rotationYRadians\":1.5707963267948966},\"size\":[0.8,0.85,2.1]},{\"floorId\":\"ground-floor\",\"id\":\"villa-garden-pool-table-0\",\"kind\":\"furnishing\",\"modelId\":\"rectangular-coffee-table\",\"placement\":{\"at\":[2.6,24.400000000000002],\"elevationMeters\":-0.049,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.6,0.4,0.4]},{\"floorId\":\"ground-floor\",\"id\":\"villa-garden-olive-0\",\"kind\":\"furnishing\",\"modelId\":\"olive-tree\",\"placement\":{\"at\":[0.9,23.5],\"elevationMeters\":-0.049,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[3.8,3.6,3.2]},{\"floorId\":\"ground-floor\",\"id\":\"villa-garden-olive-2\",\"kind\":\"furnishing\",\"modelId\":\"olive-tree\",\"placement\":{\"at\":[2.5,28],\"elevationMeters\":-0.049,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[3.8,3.6,3.2]},{\"floorId\":\"ground-floor\",\"id\":\"villa-garden-shrub-2\",\"kind\":\"furnishing\",\"modelId\":\"garden-shrub\",\"placement\":{\"at\":[6,-2.5],\"elevationMeters\":-0.049,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[1.35,0.92,1.15]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"sensor\"],\"deviceRole\":\"primary\",\"id\":\"garage-compact-car-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Compact car status\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"garage-compact-car\",\"kind\":\"device\",\"modelId\":\"compact-car\",\"placement\":{\"at\":[1.35,4.25],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":3.141592653589793},\"size\":[1.94,1.5,4]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"sensor\"],\"deviceRole\":\"primary\",\"id\":\"garage-electric-sedan-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Electric sedan status\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"garage-electric-sedan\",\"kind\":\"device\",\"modelId\":\"electric-sedan\",\"placement\":{\"at\":[4.15,4.5],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":3.141592653589793},\"size\":[2.08,1.45,4.7]},{\"floorId\":\"ground-floor\",\"id\":\"garage-storage-shelf-west\",\"kind\":\"furnishing\",\"modelId\":\"oak-bookshelf\",\"placement\":{\"at\":[0.72,8.267],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.8,1.9,0.3]},{\"floorId\":\"ground-floor\",\"id\":\"garage-workbench\",\"kind\":\"furnishing\",\"modelId\":\"oak-desk\",\"placement\":{\"at\":[2.05,8.067],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[1.4,0.74,0.7]},{\"floorId\":\"ground-floor\",\"id\":\"garage-storage-shelf-east\",\"kind\":\"furnishing\",\"modelId\":\"oak-bookshelf\",\"placement\":{\"at\":[3.43,8.267],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.8,1.9,0.3]},{\"floorId\":\"ground-floor\",\"id\":\"garage-workbench-tool-shelf\",\"kind\":\"furnishing\",\"modelId\":\"floating-wall-shelf\",\"placement\":{\"depthOffsetMeters\":0.003,\"elevationMeters\":1.35,\"face\":\"left\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":2.05,\"rotationOffsetRadians\":0,\"wallId\":\"ground-west-day-wall\"},\"size\":[1.4,0.22,0.25]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"garage-ceiling-light-1-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"Garage ceiling light 1\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"garage-ceiling-light-1\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"ceiling-light\",\"placement\":{\"at\":[1.55,4.35],\"dropMeters\":0.122,\"kind\":\"ceiling\",\"roomId\":\"ground-floor:room-1\",\"rotationYRadians\":0},\"size\":[0.4,0.12,0.4]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"garage-ceiling-light-2-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"Garage ceiling light 2\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"garage-ceiling-light-2\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"ceiling-light\",\"placement\":{\"at\":[4.55,4.35],\"dropMeters\":0.122,\"kind\":\"ceiling\",\"roomId\":\"ground-floor:room-1\",\"rotationYRadians\":0},\"size\":[0.4,0.12,0.4]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDeviceClasses\":[\"carbon_monoxide\"],\"compatibleDomains\":[\"binary_sensor\"],\"deviceRole\":\"primary\",\"id\":\"garage-carbon-monoxide-alarm-entity\",\"presentation\":{\"dashboardRole\":\"diagnostic\",\"label\":\"Garage carbon monoxide alarm\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"garage-carbon-monoxide-alarm\",\"kind\":\"device\",\"modelId\":\"carbon-monoxide-alarm\",\"placement\":{\"depthOffsetMeters\":0.003,\"elevationMeters\":1.6,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":10.6,\"rotationOffsetRadians\":0,\"wallId\":\"ground-west-wall\"},\"size\":[0.11,0.11,0.035]},{\"floorId\":\"ground-floor\",\"id\":\"utility-laundry-tall-storage\",\"kind\":\"furnishing\",\"modelId\":\"flat-door-wardrobe\",\"placement\":{\"at\":[6.883,3.28],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":1.5707963267948966},\"size\":[1,2.2,0.6]},{\"floorId\":\"ground-floor\",\"id\":\"utility-laundry-folding-cabinet\",\"kind\":\"furnishing\",\"modelId\":\"kitchen-base-cabinet\",\"placement\":{\"at\":[8.6,4.102],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":3.141592653589793},\"size\":[0.6,0.9,0.63]},{\"floorId\":\"ground-floor\",\"id\":\"utility-laundry-sink-cabinet\",\"kind\":\"furnishing\",\"modelId\":\"kitchen-sink-cabinet\",\"placement\":{\"at\":[9.4,4.102],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":3.141592653589793},\"size\":[1,1.12,0.63]},{\"floorId\":\"ground-floor\",\"id\":\"utility-laundry-folding-basket\",\"kind\":\"furnishing\",\"modelId\":\"wicker-towel-basket\",\"placement\":{\"at\":[8.6,4.02],\"elevationMeters\":0.902,\"kind\":\"absolute\",\"rotationYRadians\":3.141592653589793},\"size\":[0.38,0.315,0.31]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"switch\"],\"deviceRole\":\"primary\",\"id\":\"utility-laundry-washing-machine-power\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Washing machine\"},\"required\":true},{\"autoMap\":\"manual\",\"compatibleDomains\":[\"sensor\"],\"deviceRole\":\"secondary\",\"id\":\"utility-laundry-washing-machine-status\",\"presentation\":{\"dashboardRole\":\"diagnostic\",\"label\":\"Washing machine status\"},\"required\":false}],\"floorId\":\"ground-floor\",\"id\":\"utility-laundry-washing-machine\",\"kind\":\"device\",\"modelId\":\"washing-machine\",\"placement\":{\"at\":[8.4,0.458],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.632,0.865,0.63]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"switch\"],\"deviceRole\":\"primary\",\"id\":\"utility-laundry-tumble-dryer-power\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Tumble dryer\"},\"required\":true},{\"autoMap\":\"manual\",\"compatibleDomains\":[\"sensor\"],\"deviceRole\":\"secondary\",\"id\":\"utility-laundry-tumble-dryer-status\",\"presentation\":{\"dashboardRole\":\"diagnostic\",\"label\":\"Tumble dryer status\"},\"required\":false}],\"floorId\":\"ground-floor\",\"id\":\"utility-laundry-tumble-dryer\",\"kind\":\"device\",\"modelId\":\"tumble-dryer\",\"placement\":{\"at\":[9.1,0.488],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.6,0.85,0.65]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"water_heater\",\"switch\"],\"deviceRole\":\"primary\",\"id\":\"utility-laundry-water-heater-control\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Water heater\"},\"required\":true},{\"autoMap\":\"manual\",\"compatibleDeviceClasses\":[\"temperature\"],\"compatibleDomains\":[\"sensor\"],\"deviceRole\":\"secondary\",\"id\":\"utility-laundry-water-heater-temperature\",\"presentation\":{\"dashboardRole\":\"diagnostic\",\"label\":\"Water heater temperature\"},\"required\":false}],\"floorId\":\"ground-floor\",\"id\":\"utility-laundry-water-heater\",\"kind\":\"device\",\"modelId\":\"water-heater\",\"placement\":{\"depthOffsetMeters\":0.209,\"elevationMeters\":0.85,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":2.9,\"rotationOffsetRadians\":0,\"wallId\":\"ground-service-divider\"},\"size\":[0.572,1.456,0.43]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"utility-laundry-ceiling-light-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Utility room light\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"utility-laundry-ceiling-light\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"ceiling-light\",\"placement\":{\"at\":[8.25,2.3],\"dropMeters\":0,\"kind\":\"ceiling\",\"roomId\":\"stair-hall\",\"rotationYRadians\":0},\"size\":[0.4,0.12,0.4]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDeviceClasses\":[\"moisture\"],\"compatibleDomains\":[\"binary_sensor\"],\"deviceRole\":\"primary\",\"id\":\"utility-laundry-leak-sensor-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"Laundry leak sensor\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"utility-laundry-leak-sensor\",\"kind\":\"device\",\"modelId\":\"leak-sensor\",\"placement\":{\"at\":[8.68,0.96],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.2,0.14,0.2]},{\"floorId\":\"ground-floor\",\"id\":\"pantry-north-west-shelving\",\"kind\":\"furnishing\",\"modelId\":\"oak-bookshelf\",\"placement\":{\"at\":[6.734,5.08],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":1.5707963267948966},\"size\":[0.8,1.9,0.3]},{\"floorId\":\"ground-floor\",\"id\":\"pantry-south-east-shelving\",\"kind\":\"furnishing\",\"modelId\":\"oak-bookshelf\",\"placement\":{\"at\":[9.766,7.78],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":-1.5707963267948966},\"size\":[0.8,1.9,0.3]},{\"floorId\":\"ground-floor\",\"id\":\"pantry-preparation-counter\",\"kind\":\"furnishing\",\"modelId\":\"kitchen-base-cabinet\",\"placement\":{\"at\":[7.2,8.101],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[1.1,0.9,0.63]},{\"floorId\":\"ground-floor\",\"id\":\"pantry-wall-cabinet\",\"kind\":\"furnishing\",\"modelId\":\"kitchen-wall-cabinet\",\"placement\":{\"depthOffsetMeters\":0.004,\"elevationMeters\":1.38,\"face\":\"left\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":7.2,\"rotationOffsetRadians\":0,\"wallId\":\"ground-west-day-wall\"},\"size\":[1.1,0.8,0.35]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDeviceClasses\":[\"temperature\"],\"compatibleDomains\":[\"sensor\"],\"deviceRole\":\"primary\",\"id\":\"pantry-freezer-entity\",\"presentation\":{\"dashboardRole\":\"diagnostic\",\"label\":\"Pantry freezer temperature\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"pantry-freezer\",\"kind\":\"device\",\"modelId\":\"freezer\",\"placement\":{\"at\":[9.576,5.3],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":4.71238898038469},\"size\":[0.65,1.75,0.68]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"pantry-downlight-1-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Pantry downlight 1\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"pantry-downlight-1\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"recessed-downlight\",\"placement\":{\"at\":[7.35,6.5],\"dropMeters\":0.04,\"kind\":\"ceiling\",\"roomId\":\"pantry\",\"rotationYRadians\":0},\"size\":[0.1,0.04,0.1]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"pantry-downlight-2-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Pantry downlight 2\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"pantry-downlight-2\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"recessed-downlight\",\"placement\":{\"at\":[9.15,6.5],\"dropMeters\":0.04,\"kind\":\"ceiling\",\"roomId\":\"pantry\",\"rotationYRadians\":0},\"size\":[0.1,0.04,0.1]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDeviceClasses\":[\"motion\",\"occupancy\",\"presence\"],\"compatibleDomains\":[\"binary_sensor\"],\"deviceRole\":\"primary\",\"id\":\"pantry-motion-sensor-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"Pantry presence\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"pantry-motion-sensor\",\"kind\":\"device\",\"modelId\":\"motion-sensor\",\"placement\":{\"depthOffsetMeters\":0.004,\"elevationMeters\":2.35,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":2.75,\"rotationOffsetRadians\":0,\"wallId\":\"ground-utility-pantry-wall\"},\"size\":[0.14,0.135,0.081]},{\"floorId\":\"ground-floor\",\"id\":\"foyer-shoe-bench\",\"kind\":\"furnishing\",\"modelId\":\"entryway-shoe-bench\",\"placement\":{\"at\":[10.274,3.65],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":1.5707963267948966},\"size\":[1,0.5,0.38]},{\"floorId\":\"ground-floor\",\"id\":\"foyer-console\",\"kind\":\"furnishing\",\"modelId\":\"hallway-console-table\",\"placement\":{\"depthOffsetMeters\":0.175,\"elevationMeters\":0.001,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":8.7919,\"rotationOffsetRadians\":0,\"wallId\":\"ground-east-wall\"},\"size\":[1.1,0.8,0.35]},{\"floorId\":\"ground-floor\",\"id\":\"foyer-framed-art\",\"kind\":\"furnishing\",\"modelId\":\"framed-wall-art\",\"placement\":{\"depthOffsetMeters\":0,\"elevationMeters\":1.35,\"face\":\"left\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":3.7423,\"rotationOffsetRadians\":0,\"wallId\":\"ground-service-divider\"},\"size\":[0.7993947603124634,0.5995460702343475,0.03996973801562317]},{\"floorId\":\"ground-floor\",\"id\":\"foyer-potted-plant\",\"kind\":\"furnishing\",\"modelId\":\"potted-plant\",\"placement\":{\"at\":[10.65,0.62],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":-0.39269908169872414},\"size\":[0.615,1.105,0.44]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"foyer-pendant-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Foyer pendant\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"foyer-pendant\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"terracotta-pendant\",\"placement\":{\"at\":[12,2.86],\"dropMeters\":0.82,\"kind\":\"ceiling\",\"roomId\":\"ground-floor:room-2\",\"rotationYRadians\":0},\"size\":[0.66,0.64,0.66]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDomains\":[\"camera\"],\"deviceRole\":\"primary\",\"id\":\"foyer-camera-screen-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"Entry camera screen\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"foyer-camera-screen\",\"kind\":\"device\",\"modelId\":\"camera-screen\",\"placement\":{\"at\":[13.916,0.78],\"elevationMeters\":1.2,\"kind\":\"absolute\",\"rotationYRadians\":-1.5707963267948966},\"size\":[0.98,0.62,0.061]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDomains\":[\"alarm_control_panel\"],\"deviceRole\":\"primary\",\"id\":\"foyer-alarm-keypad-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Villa alarm\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"foyer-alarm-keypad\",\"kind\":\"device\",\"modelId\":\"alarm-keypad\",\"placement\":{\"depthOffsetMeters\":0.004,\"elevationMeters\":1.3,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":10.65,\"rotationOffsetRadians\":0,\"wallId\":\"ground-north-wall\"},\"size\":[0.18,0.25,0.035]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDomains\":[\"lock\"],\"deviceRole\":\"primary\",\"id\":\"foyer-smart-lock-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Front door lock\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"foyer-smart-lock\",\"kind\":\"device\",\"modelId\":\"smart-lock\",\"placement\":{\"depthOffsetMeters\":0.004,\"elevationMeters\":0.96,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":12.98,\"rotationOffsetRadians\":0,\"wallId\":\"ground-north-wall\"},\"size\":[0.07,0.18,0.06]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"cover\"],\"deviceRole\":\"primary\",\"id\":\"guest-bedroom-east-blind-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"East window blind\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"guest-bedroom-east-blind\",\"kind\":\"device\",\"modelId\":\"motorized-blind\",\"placement\":{\"depthOffsetMeters\":0.003,\"elevationMeters\":0.8,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":2.45,\"rotationOffsetRadians\":0,\"wallId\":\"ground-east-wall\"},\"size\":[2.05,1.45,0.12]},{\"floorId\":\"ground-floor\",\"id\":\"stair-hall-console\",\"kind\":\"furnishing\",\"modelId\":\"hallway-console-table\",\"placement\":{\"at\":[10.257,8],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":1.5707963267948966},\"size\":[1.1,0.8,0.35]},{\"floorId\":\"ground-floor\",\"id\":\"stair-hall-console-art\",\"kind\":\"furnishing\",\"modelId\":\"framed-wall-art\",\"placement\":{\"at\":[10.083,8],\"elevationMeters\":1.42,\"kind\":\"absolute\",\"rotationYRadians\":1.5707963267948966},\"size\":[0.8,0.62,0.04]},{\"floorId\":\"ground-floor\",\"id\":\"stair-hall-landing-plant\",\"kind\":\"furnishing\",\"modelId\":\"potted-plant\",\"placement\":{\"at\":[13.6,10.5],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":-0.4487989505128276},\"size\":[0.615,1.105,0.44]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"stair-hall-downlight-1-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"Stair hall downlight 1\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"stair-hall-downlight-1\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"recessed-downlight\",\"placement\":{\"at\":[10.6,7.55],\"dropMeters\":0,\"kind\":\"ceiling\",\"roomId\":\"ground-floor:room-2\",\"rotationYRadians\":0},\"size\":[0.1,0.04,0.1]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"stair-hall-downlight-2-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"Stair hall downlight 2\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"stair-hall-downlight-2\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"recessed-downlight\",\"placement\":{\"at\":[13.4,9.25],\"dropMeters\":0,\"kind\":\"ceiling\",\"roomId\":\"ground-floor:room-2\",\"rotationYRadians\":0},\"size\":[0.1,0.04,0.1]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"stair-hall-wall-sconce-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"Stair hall wall sconce\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"stair-hall-wall-sconce\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"wall-sconce\",\"placement\":{\"at\":[13.917,9.65],\"elevationMeters\":1.72,\"kind\":\"absolute\",\"rotationYRadians\":-1.5707963267948966},\"size\":[0.22,0.32,0.16]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDeviceClasses\":[\"motion\",\"occupancy\",\"presence\"],\"compatibleDomains\":[\"binary_sensor\"],\"deviceRole\":\"primary\",\"id\":\"stair-hall-motion-sensor-entity\",\"presentation\":{\"dashboardRole\":\"diagnostic\",\"label\":\"Stair hall motion\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"stair-hall-motion-sensor\",\"kind\":\"device\",\"modelId\":\"motion-sensor\",\"placement\":{\"at\":[13.4,0.7000000000000001],\"elevationMeters\":3,\"kind\":\"absolute\",\"rotationYRadians\":0.007142735669413403},\"size\":[0.14,0.135,0.081]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-equipped-kitchen\",\"kind\":\"furnishing\",\"modelId\":\"equipped-kitchen\",\"placement\":{\"at\":[0.5,9],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[3.89,2.23,2.54]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-counter-stool-1\",\"kind\":\"furnishing\",\"modelId\":\"counter-stool\",\"placement\":{\"at\":[1.55,12.1],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":3.141592653589793},\"size\":[0.502,0.9621666666666667,0.5229166666666667]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-counter-stool-2\",\"kind\":\"furnishing\",\"modelId\":\"counter-stool\",\"placement\":{\"at\":[2.55,12.1],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":3.141592653589793},\"size\":[0.502,0.9621666666666667,0.5229166666666667]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-counter-stool-3\",\"kind\":\"furnishing\",\"modelId\":\"counter-stool\",\"placement\":{\"at\":[3.55,12.1],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":3.141592653589793},\"size\":[0.502,0.9621666666666667,0.5229166666666667]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-dining-table\",\"kind\":\"furnishing\",\"modelId\":\"rectangular-dining-table\",\"placement\":{\"at\":[10.7,14.1],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[2.8,0.75,1.1]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-dining-chair-north-west\",\"kind\":\"furnishing\",\"modelId\":\"oak-dining-chair\",\"placement\":{\"at\":[9.6,13.1],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.49,0.82,0.5]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-dining-chair-north-center\",\"kind\":\"furnishing\",\"modelId\":\"oak-dining-chair\",\"placement\":{\"at\":[10.7,13.1],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.49,0.82,0.5]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-dining-chair-north-east\",\"kind\":\"furnishing\",\"modelId\":\"oak-dining-chair\",\"placement\":{\"at\":[11.8,13.1],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.49,0.82,0.5]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-dining-chair-south-west\",\"kind\":\"furnishing\",\"modelId\":\"oak-dining-chair\",\"placement\":{\"at\":[9.6,15.1],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":3.141592653589793},\"size\":[0.49,0.82,0.5]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-dining-chair-south-center\",\"kind\":\"furnishing\",\"modelId\":\"oak-dining-chair\",\"placement\":{\"at\":[10.7,15.1],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":3.141592653589793},\"size\":[0.49,0.82,0.5]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-dining-chair-south-east\",\"kind\":\"furnishing\",\"modelId\":\"oak-dining-chair\",\"placement\":{\"at\":[11.8,15.1],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":3.141592653589793},\"size\":[0.49,0.82,0.5]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-dining-chair-west\",\"kind\":\"furnishing\",\"modelId\":\"oak-dining-chair\",\"placement\":{\"at\":[8.9,14.1],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":1.5707963267948966},\"size\":[0.49,0.82,0.5]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-dining-chair-east\",\"kind\":\"furnishing\",\"modelId\":\"oak-dining-chair\",\"placement\":{\"at\":[12.5,14.1],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":1.5707963267948966},\"size\":[0.49,0.82,0.5]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-reading-rug\",\"kind\":\"furnishing\",\"modelId\":\"neutral-area-rug\",\"placement\":{\"at\":[3.2,15],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[4.5,0.015,3.6],\"variant\":\"sage\"},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-reading-table\",\"kind\":\"furnishing\",\"modelId\":\"rectangular-coffee-table\",\"placement\":{\"at\":[3.1,15.5],\"elevationMeters\":0.017,\"kind\":\"absolute\",\"rotationYRadians\":4.71238898038469},\"size\":[1.1,0.4,0.6]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-reading-ficus\",\"kind\":\"furnishing\",\"modelId\":\"tall-ficus\",\"placement\":{\"at\":[0.85,16.95],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.901,1.643,0.503]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-dining-sideboard\",\"kind\":\"furnishing\",\"modelId\":\"three-door-sideboard\",\"placement\":{\"at\":[6.85,8.808],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[1.8,0.82,0.45]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-sideboard-plant\",\"kind\":\"furnishing\",\"modelId\":\"potted-plant\",\"placement\":{\"at\":[7.4,8.81],\"elevationMeters\":0.823,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.3075,0.5525,0.22]},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-sideboard-art\",\"kind\":\"furnishing\",\"modelId\":\"framed-wall-art\",\"placement\":{\"depthOffsetMeters\":0.004,\"elevationMeters\":1.3,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":7.1,\"rotationOffsetRadians\":0,\"wallId\":\"ground-west-day-wall\"},\"size\":[1.5,1,0.04]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"open-plan-living-kitchen-cabinet-lighting-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Kitchen cabinet lighting\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-kitchen-cabinet-lighting\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"kitchen-cabinet-lighting\",\"placement\":{\"at\":[0.5,9],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[3.89,2.23,2.54]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"open-plan-living-kitchen-pendant-1-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Kitchen pendant 1\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-kitchen-pendant-1\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"woven-pendant\",\"placement\":{\"at\":[1.55,11.25],\"dropMeters\":0,\"kind\":\"ceiling\",\"roomId\":\"open-plan-living\",\"rotationYRadians\":0},\"size\":[0.704,0.482077922077922,0.7148051948051948]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"open-plan-living-kitchen-pendant-2-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Kitchen pendant 2\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-kitchen-pendant-2\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"woven-pendant\",\"placement\":{\"at\":[2.55,11.25],\"dropMeters\":0,\"kind\":\"ceiling\",\"roomId\":\"open-plan-living\",\"rotationYRadians\":0},\"size\":[0.704,0.482077922077922,0.7148051948051948]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"open-plan-living-kitchen-pendant-3-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Kitchen pendant 3\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-kitchen-pendant-3\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"woven-pendant\",\"placement\":{\"at\":[3.55,11.25],\"dropMeters\":0,\"kind\":\"ceiling\",\"roomId\":\"open-plan-living\",\"rotationYRadians\":0},\"size\":[0.704,0.482077922077922,0.7148051948051948]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"open-plan-living-dining-pendant-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Dining pendant\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-dining-pendant\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"woven-pendant\",\"placement\":{\"at\":[10.7,14.1],\"dropMeters\":0.15,\"kind\":\"ceiling\",\"roomId\":\"open-plan-living\",\"rotationYRadians\":0},\"size\":[0.847,0.58,0.86]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDomains\":[\"climate\"],\"deviceRole\":\"primary\",\"id\":\"open-plan-living-ac-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Living room AC\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-ac\",\"kind\":\"device\",\"modelId\":\"indoor-ac\",\"placement\":{\"depthOffsetMeters\":0.001,\"elevationMeters\":2.35,\"face\":\"left\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":5.1857,\"rotationOffsetRadians\":0,\"wallId\":\"ground-service-divider\"},\"size\":[0.86,0.28,0.206]},{\"floorId\":\"first-floor\",\"id\":\"primary-bedroom-rug\",\"kind\":\"furnishing\",\"modelId\":\"neutral-area-rug\",\"placement\":{\"at\":[8,5.2],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[3,0.015,2.8]},{\"floorId\":\"first-floor\",\"id\":\"primary-bedroom-bed\",\"kind\":\"furnishing\",\"modelId\":\"double-bed\",\"placement\":{\"at\":[8.841,5.2],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":-1.5707963267948966},\"size\":[1.7,1.1,2.15]},{\"floorId\":\"first-floor\",\"id\":\"primary-bedroom-north-nightstand\",\"kind\":\"furnishing\",\"modelId\":\"oak-nightstand\",\"placement\":{\"at\":[9.716,4],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":1.5707963267948966},\"size\":[0.45,0.5,0.4]},{\"floorId\":\"first-floor\",\"id\":\"primary-bedroom-south-nightstand\",\"kind\":\"furnishing\",\"modelId\":\"oak-nightstand\",\"placement\":{\"at\":[9.716,6.4],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":1.5707963267948966},\"size\":[0.45,0.5,0.4]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"primary-bedroom-north-table-lamp-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"North bedside lamp\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"primary-bedroom-north-table-lamp\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"table-lamp\",\"placement\":{\"at\":[9.716,4],\"elevationMeters\":0.501,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.32,0.52,0.32]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"primary-bedroom-south-table-lamp-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"South bedside lamp\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"primary-bedroom-south-table-lamp\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"table-lamp\",\"placement\":{\"at\":[9.716,6.4],\"elevationMeters\":0.501,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.32,0.52,0.32]},{\"floorId\":\"first-floor\",\"id\":\"primary-bedroom-bed-bench\",\"kind\":\"furnishing\",\"modelId\":\"upholstered-ottoman\",\"placement\":{\"at\":[7.2,5.2],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":1.5707963267948966},\"size\":[0.7,0.42,0.55]},{\"floorId\":\"first-floor\",\"id\":\"primary-bedroom-sideboard\",\"kind\":\"furnishing\",\"modelId\":\"three-door-sideboard\",\"placement\":{\"at\":[5.65,7.691],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":3.141592653589793},\"size\":[1.6,0.82,0.45]},{\"floorId\":\"first-floor\",\"id\":\"primary-bedroom-art\",\"kind\":\"furnishing\",\"modelId\":\"framed-wall-art\",\"placement\":{\"depthOffsetMeters\":0.004,\"elevationMeters\":1.28,\"face\":\"left\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":3.65,\"rotationOffsetRadians\":0,\"wallId\":\"first-primary-suite-wall\"},\"size\":[1.1,0.72,0.04]},{\"floorId\":\"first-floor\",\"id\":\"primary-bedroom-reading-plant\",\"kind\":\"furnishing\",\"modelId\":\"potted-plant\",\"placement\":{\"at\":[4,0.6000000000000001],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.615,1.105,0.44]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"primary-bedroom-pendant-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Primary bedroom pendant\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"primary-bedroom-pendant\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"woven-pendant\",\"placement\":{\"at\":[6,4],\"dropMeters\":0,\"kind\":\"ceiling\",\"roomId\":\"primary-bedroom\",\"rotationYRadians\":0},\"size\":[0.847,0.58,0.86]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDomains\":[\"climate\"],\"deviceRole\":\"primary\",\"id\":\"primary-bedroom-ac-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Primary bedroom AC\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"primary-bedroom-ac\",\"kind\":\"device\",\"modelId\":\"indoor-ac\",\"placement\":{\"depthOffsetMeters\":0.002,\"elevationMeters\":2.28,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":5.2,\"rotationOffsetRadians\":0,\"wallId\":\"first-west-gallery-wall\"},\"size\":[0.86,0.28,0.206]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"cover\"],\"deviceRole\":\"primary\",\"id\":\"primary-bedroom-north-blind-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"North window blind\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"primary-bedroom-north-blind\",\"kind\":\"device\",\"modelId\":\"motorized-blind\",\"placement\":{\"depthOffsetMeters\":0.003,\"elevationMeters\":0.75,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":3,\"rotationOffsetRadians\":0,\"wallId\":\"first-north-wall\"},\"size\":[2.8,1.425,0.12]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"cover\"],\"deviceRole\":\"primary\",\"id\":\"primary-bedroom-west-blind-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"West window blind\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"primary-bedroom-west-blind\",\"kind\":\"device\",\"modelId\":\"motorized-blind\",\"placement\":{\"depthOffsetMeters\":0.003,\"elevationMeters\":0.75,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":11.7,\"rotationOffsetRadians\":0,\"wallId\":\"first-west-wall\"},\"size\":[2.8,1.425,0.12]},{\"floorId\":\"first-floor\",\"id\":\"primary-bathroom-bathtub\",\"kind\":\"furnishing\",\"modelId\":\"freestanding-bathtub\",\"placement\":{\"at\":[2.553,10],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":1.5707963267948966},\"size\":[1.7,0.6,0.78]},{\"floorId\":\"first-floor\",\"id\":\"primary-bathroom-shower\",\"kind\":\"furnishing\",\"modelId\":\"shower-assembly\",\"placement\":{\"at\":[4.821,11.454],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[2.018,1.57,0.908]},{\"floorId\":\"first-floor\",\"id\":\"primary-bathroom-toilet\",\"kind\":\"furnishing\",\"modelId\":\"compact-toilet\",\"placement\":{\"at\":[2.55,8.383],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.39,0.724,0.6]},{\"floorId\":\"first-floor\",\"id\":\"primary-bathroom-vanity\",\"kind\":\"furnishing\",\"modelId\":\"dark-oak-vessel-vanity\",\"placement\":{\"at\":[5.25,8.343],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.8,1.23,0.52]},{\"floorId\":\"first-floor\",\"id\":\"primary-bathroom-towel-basket\",\"kind\":\"furnishing\",\"modelId\":\"wicker-towel-basket\",\"placement\":{\"at\":[3.32,11.48],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":-0.39269908169872414},\"size\":[0.38,0.315,0.31]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"primary-bathroom-ceiling-light-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Primary bathroom ceiling light\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"primary-bathroom-ceiling-light\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"ceiling-light\",\"placement\":{\"at\":[4.05,10],\"dropMeters\":0.08,\"kind\":\"ceiling\",\"roomId\":\"primary-bathroom\",\"rotationYRadians\":0},\"size\":[0.4,0.12,0.4]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"primary-bathroom-illuminated-mirror-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"Primary bathroom mirror light\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"primary-bathroom-illuminated-mirror\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"illuminated-round-mirror\",\"placement\":{\"depthOffsetMeters\":0.004,\"elevationMeters\":1.3,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":3.25,\"rotationOffsetRadians\":0,\"wallId\":\"first-primary-suite-wall\"},\"size\":[0.8,0.8,0.045]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDomains\":[\"climate\",\"switch\"],\"deviceRole\":\"primary\",\"id\":\"primary-bathroom-heated-towel-rail-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Primary bathroom towel warmer\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"primary-bathroom-heated-towel-rail\",\"kind\":\"device\",\"modelId\":\"heated-towel-rail\",\"placement\":{\"depthOffsetMeters\":0.004,\"elevationMeters\":0.72,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":0.95,\"rotationOffsetRadians\":0,\"wallId\":\"first-primary-bath-divider\"},\"size\":[0.6,1.2,0.12]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDomains\":[\"fan\",\"switch\"],\"deviceRole\":\"primary\",\"id\":\"primary-bathroom-extractor-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"Primary bathroom extractor\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"primary-bathroom-extractor\",\"kind\":\"device\",\"modelId\":\"bathroom-extractor-fan\",\"placement\":{\"depthOffsetMeters\":0.004,\"elevationMeters\":2.52,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":3.45,\"rotationOffsetRadians\":0,\"wallId\":\"first-primary-bath-divider\"},\"size\":[0.18,0.18,0.09]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDeviceClasses\":[\"humidity\"],\"compatibleDomains\":[\"sensor\"],\"deviceRole\":\"primary\",\"id\":\"primary-bathroom-humidity-sensor-entity\",\"presentation\":{\"dashboardRole\":\"diagnostic\",\"label\":\"Primary bathroom humidity\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"primary-bathroom-humidity-sensor\",\"kind\":\"device\",\"modelId\":\"humidity-sensor\",\"placement\":{\"depthOffsetMeters\":0.004,\"elevationMeters\":1.72,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":2.5,\"rotationOffsetRadians\":0,\"wallId\":\"first-primary-suite-wall\"},\"size\":[0.085,0.085,0.03]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDeviceClasses\":[\"moisture\"],\"compatibleDomains\":[\"binary_sensor\"],\"deviceRole\":\"primary\",\"id\":\"primary-bathroom-leak-sensor-entity\",\"presentation\":{\"dashboardRole\":\"diagnostic\",\"label\":\"Primary bathroom leak sensor\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"primary-bathroom-leak-sensor\",\"kind\":\"device\",\"modelId\":\"leak-sensor\",\"placement\":{\"at\":[5.34,8.78],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.2,0.14,0.2]},{\"floorId\":\"first-floor\",\"id\":\"primary-dressing-south-wardrobe\",\"kind\":\"furnishing\",\"modelId\":\"flat-door-wardrobe\",\"placement\":{\"at\":[8,11.617],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":3.141592653589793},\"size\":[3.2,2.2,0.6]},{\"floorId\":\"first-floor\",\"id\":\"primary-dressing-north-chest\",\"kind\":\"furnishing\",\"modelId\":\"chest-of-drawers\",\"placement\":{\"at\":[9.05,8.308],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[1.3,0.9,0.45]},{\"floorId\":\"first-floor\",\"id\":\"primary-dressing-center-rug\",\"kind\":\"furnishing\",\"modelId\":\"neutral-area-rug\",\"placement\":{\"at\":[8.15,9.65],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[1.4,0.015,1.6]},{\"floorId\":\"first-floor\",\"id\":\"primary-dressing-ottoman\",\"kind\":\"furnishing\",\"modelId\":\"upholstered-ottoman\",\"placement\":{\"at\":[8.55,9.15],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.7,0.42,0.55]},{\"floorId\":\"first-floor\",\"id\":\"primary-dressing-mirror\",\"kind\":\"furnishing\",\"modelId\":\"arched-mirror\",\"placement\":{\"depthOffsetMeters\":0.033,\"elevationMeters\":1.15,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":7.05,\"rotationOffsetRadians\":0,\"wallId\":\"first-primary-suite-wall\"},\"size\":[0.54,1.05,0.06]},{\"floorId\":\"first-floor\",\"id\":\"primary-dressing-west-shelf\",\"kind\":\"furnishing\",\"modelId\":\"floating-wall-shelf\",\"placement\":{\"depthOffsetMeters\":0.003,\"elevationMeters\":1.3,\"face\":\"left\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":3.05,\"rotationOffsetRadians\":0,\"wallId\":\"first-primary-bath-divider\"},\"size\":[1,0.22,0.25]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"primary-dressing-downlight-1-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Dressing downlight 1\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"primary-dressing-downlight-1\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"recessed-downlight\",\"placement\":{\"at\":[7.15,9.05],\"dropMeters\":0,\"kind\":\"ceiling\",\"roomId\":\"primary-dressing\",\"rotationYRadians\":0},\"size\":[0.1,0.04,0.1]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"primary-dressing-downlight-2-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"Dressing downlight 2\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"primary-dressing-downlight-2\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"recessed-downlight\",\"placement\":{\"at\":[8.85,10.95],\"dropMeters\":0,\"kind\":\"ceiling\",\"roomId\":\"primary-dressing\",\"rotationYRadians\":0},\"size\":[0.1,0.04,0.1]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDeviceClasses\":[\"motion\",\"occupancy\",\"presence\"],\"compatibleDomains\":[\"binary_sensor\"],\"deviceRole\":\"primary\",\"id\":\"primary-dressing-motion-sensor-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"Dressing occupancy\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"primary-dressing-motion-sensor\",\"kind\":\"device\",\"modelId\":\"motion-sensor\",\"placement\":{\"at\":[8,10],\"dropMeters\":0,\"kind\":\"ceiling\",\"roomId\":\"primary-dressing\",\"rotationYRadians\":0},\"size\":[0.14,0.135,0.081]},{\"floorId\":\"first-floor\",\"id\":\"bedroom-four-bed\",\"kind\":\"furnishing\",\"modelId\":\"single-bed\",\"placement\":{\"at\":[3.5,13.134],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[1,0.95,2.1]},{\"floorId\":\"first-floor\",\"id\":\"bedroom-four-nightstand\",\"kind\":\"furnishing\",\"modelId\":\"oak-nightstand\",\"placement\":{\"at\":[4.35,12.284],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.45,0.5,0.4]},{\"floorId\":\"first-floor\",\"id\":\"bedroom-four-bookshelf\",\"kind\":\"furnishing\",\"modelId\":\"oak-bookshelf\",\"placement\":{\"at\":[5.7,12.234],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.8,1.9,0.3]},{\"floorId\":\"first-floor\",\"id\":\"bedroom-four-desk\",\"kind\":\"furnishing\",\"modelId\":\"oak-desk\",\"placement\":{\"at\":[7.65,12.434],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[1.4,0.74,0.7]},{\"floorId\":\"first-floor\",\"id\":\"bedroom-four-desk-chair\",\"kind\":\"furnishing\",\"modelId\":\"ergonomic-office-chair\",\"placement\":{\"at\":[7.5,12.8],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":3.141592653589793},\"size\":[0.68,1.04,0.68]},{\"floorId\":\"first-floor\",\"id\":\"bedroom-four-wardrobe\",\"kind\":\"furnishing\",\"modelId\":\"flat-door-wardrobe\",\"placement\":{\"depthOffsetMeters\":0.3,\"elevationMeters\":0.001,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":14.9168,\"rotationOffsetRadians\":0,\"wallId\":\"first-west-gallery-wall\"},\"size\":[1.6,2.2,0.6]},{\"floorId\":\"first-floor\",\"id\":\"bedroom-four-rug\",\"kind\":\"furnishing\",\"modelId\":\"neutral-area-rug\",\"placement\":{\"at\":[6,14.65],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":1.5707963267948966},\"size\":[2.5,0.015,1.45]},{\"floorId\":\"first-floor\",\"id\":\"bedroom-four-bed-art\",\"kind\":\"furnishing\",\"modelId\":\"framed-wall-art\",\"placement\":{\"depthOffsetMeters\":0.004,\"elevationMeters\":1.38,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":1.5,\"rotationOffsetRadians\":0,\"wallId\":\"first-west-bedroom-wall\"},\"size\":[0.8,0.6,0.04]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"bedroom-four-bedside-lamp-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"Bedroom four bedside lamp\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"bedroom-four-bedside-lamp\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"table-lamp\",\"placement\":{\"at\":[4.35,12.284],\"elevationMeters\":0.501,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.32,0.52,0.32]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"bedroom-four-pendant-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Bedroom four pendant\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"bedroom-four-pendant\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"children-pendant\",\"placement\":{\"at\":[6.2,14.1],\"dropMeters\":0,\"kind\":\"ceiling\",\"roomId\":\"bedroom-four\",\"rotationYRadians\":0},\"size\":[0.58,0.479,0.58]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDomains\":[\"climate\"],\"deviceRole\":\"primary\",\"id\":\"bedroom-four-ac-entity\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Bedroom four AC\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"bedroom-four-ac\",\"kind\":\"device\",\"modelId\":\"indoor-ac\",\"placement\":{\"depthOffsetMeters\":0.002,\"elevationMeters\":2.3,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":6.8,\"rotationOffsetRadians\":0,\"wallId\":\"first-west-bedroom-wall\"},\"size\":[0.86,0.28,0.206]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"cover\"],\"deviceRole\":\"primary\",\"id\":\"bedroom-four-west-blind-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"Bedroom four west blind\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"bedroom-four-west-blind\",\"kind\":\"device\",\"modelId\":\"motorized-blind\",\"placement\":{\"depthOffsetMeters\":0.003,\"elevationMeters\":0.75,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":2.4,\"rotationOffsetRadians\":0,\"wallId\":\"first-west-wall\"},\"size\":[2.25,1.425,0.12]},{\"floorId\":\"first-floor\",\"id\":\"upper-landing-console\",\"kind\":\"furnishing\",\"modelId\":\"hallway-console-table\",\"placement\":{\"at\":[10.257,4.2],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":1.5707963267948966},\"size\":[1.1,0.8,0.35]},{\"floorId\":\"first-floor\",\"id\":\"upper-landing-console-art\",\"kind\":\"furnishing\",\"modelId\":\"framed-wall-art\",\"placement\":{\"depthOffsetMeters\":0.003,\"elevationMeters\":1.42,\"face\":\"left\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":4.2,\"rotationOffsetRadians\":0,\"wallId\":\"first-west-gallery-wall\"},\"size\":[0.8,0.62,0.04]},{\"floorId\":\"first-floor\",\"id\":\"upper-landing-north-plant\",\"kind\":\"furnishing\",\"modelId\":\"potted-plant\",\"placement\":{\"at\":[10.47,0.55],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0.4487989505128276},\"size\":[0.615,1.105,0.44]},{\"floorId\":\"first-floor\",\"id\":\"upper-landing-gallery-bench\",\"kind\":\"furnishing\",\"modelId\":\"entryway-shoe-bench\",\"placement\":{\"at\":[13.727,11.7],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":1.5707963267948966},\"size\":[1,0.5,0.38]},{\"floorId\":\"first-floor\",\"id\":\"upper-landing-bench-art\",\"kind\":\"furnishing\",\"modelId\":\"framed-wall-art\",\"placement\":{\"at\":[13.917,11.7],\"elevationMeters\":1.25,\"kind\":\"absolute\",\"rotationYRadians\":-1.5707963267948966},\"size\":[0.8,0.62,0.04]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"upper-landing-downlight-1-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"Upper landing downlight 1\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"upper-landing-downlight-1\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"recessed-downlight\",\"placement\":{\"at\":[12,4.65],\"dropMeters\":0,\"kind\":\"ceiling\",\"roomId\":\"upper-landing\",\"rotationYRadians\":0},\"size\":[0.1,0.04,0.1]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"upper-landing-downlight-2-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"Upper landing downlight 2\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"upper-landing-downlight-2\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"recessed-downlight\",\"placement\":{\"at\":[12,11.55],\"dropMeters\":0,\"kind\":\"ceiling\",\"roomId\":\"upper-landing\",\"rotationYRadians\":0},\"size\":[0.1,0.04,0.1]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"upper-landing-north-sconce-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"North gallery wall sconce\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"upper-landing-north-sconce\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"wall-sconce\",\"placement\":{\"depthOffsetMeters\":0.003,\"elevationMeters\":1.72,\"face\":\"left\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":5.18,\"rotationOffsetRadians\":0,\"wallId\":\"first-west-gallery-wall\"},\"size\":[0.22,0.32,0.16]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"upper-landing-south-sconce-entity\",\"presentation\":{\"dashboardRole\":\"secondary\",\"label\":\"South gallery wall sconce\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"upper-landing-south-sconce\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"wall-sconce\",\"placement\":{\"depthOffsetMeters\":0.003,\"elevationMeters\":1.72,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":0.45,\"rotationOffsetRadians\":0,\"wallId\":\"first-east-gallery-wall--split-3\"},\"size\":[0.22,0.32,0.16]},{\"entitySlots\":[{\"autoMap\":\"unique-compatible\",\"compatibleDeviceClasses\":[\"motion\",\"occupancy\",\"presence\"],\"compatibleDomains\":[\"binary_sensor\"],\"deviceRole\":\"primary\",\"id\":\"upper-landing-motion-sensor-entity\",\"presentation\":{\"dashboardRole\":\"diagnostic\",\"label\":\"Upper landing motion\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"upper-landing-motion-sensor\",\"kind\":\"device\",\"modelId\":\"motion-sensor\",\"placement\":{\"at\":[13.45,5.42],\"dropMeters\":0,\"kind\":\"ceiling\",\"roomId\":\"upper-landing\",\"rotationYRadians\":0},\"size\":[0.14,0.135,0.081]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"low-garden-lantern-primary\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Low garden lantern\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"low-garden-lantern\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"low-garden-lantern\",\"placement\":{\"at\":[10.700000000000001,-0.8],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.24,0.35,0.24],\"variant\":\"default\"},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"low-garden-lantern-primary-copy\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Low garden lantern\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"low-garden-lantern-copy\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"low-garden-lantern\",\"placement\":{\"at\":[13.200000000000001,-0.8],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.24,0.35,0.24],\"variant\":\"default\"},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"low-garden-lantern-2-primary\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Low garden lantern\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"low-garden-lantern-2\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"low-garden-lantern\",\"placement\":{\"at\":[10.700000000000001,-2.4000000000000004],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.24,0.35,0.24],\"variant\":\"default\"},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"low-garden-lantern-2-primary-copy\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Low garden lantern\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"low-garden-lantern-2-copy\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"low-garden-lantern\",\"placement\":{\"at\":[13.200000000000001,-2.4000000000000004],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.24,0.35,0.24],\"variant\":\"default\"},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"low-garden-lantern-2-primary-copy-copy\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Low garden lantern\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"low-garden-lantern-2-copy-copy\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"low-garden-lantern\",\"placement\":{\"at\":[13.200000000000001,-3.9000000000000004],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.24,0.35,0.24],\"variant\":\"default\"},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"id\":\"low-garden-lantern-primary-copy-2\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Low garden lantern\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"low-garden-lantern-copy-2\",\"kind\":\"device\",\"lightState\":\"night-only\",\"modelId\":\"low-garden-lantern\",\"placement\":{\"at\":[10.700000000000001,-3.9000000000000004],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.24,0.35,0.24],\"variant\":\"default\"},{\"floorId\":\"ground-floor\",\"id\":\"deciduous-tree\",\"kind\":\"furnishing\",\"modelId\":\"deciduous-tree\",\"placement\":{\"at\":[13.5,28.700000000000003],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[2.4,4.2,2.4],\"variant\":\"default\"},{\"floorId\":\"ground-floor\",\"id\":\"deciduous-tree-copy\",\"kind\":\"furnishing\",\"modelId\":\"deciduous-tree\",\"placement\":{\"at\":[15.200000000000001,25.900000000000002],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":4.71238898038469},\"size\":[2.4,4.2,2.4],\"variant\":\"default\"},{\"floorId\":\"ground-floor\",\"id\":\"deciduous-tree-copy-copy\",\"kind\":\"furnishing\",\"modelId\":\"deciduous-tree\",\"placement\":{\"at\":[0,-1.7000000000000002],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":4.71238898038469},\"size\":[2.4,4.2,2.4],\"variant\":\"default\"},{\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-reading-rug-copy\",\"kind\":\"furnishing\",\"modelId\":\"neutral-area-rug\",\"placement\":{\"at\":[10.700000000000001,14],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[4.5,0.015,3.6],\"variant\":\"terracotta\"},{\"floorId\":\"ground-floor\",\"id\":\"sectional-sofa\",\"kind\":\"furnishing\",\"modelId\":\"sectional-sofa\",\"placement\":{\"at\":[4.6000000000000005,15.200000000000001],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":4.71238898038469},\"size\":[2.93,1.227,1.63],\"variant\":\"cozy\"},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"media_player\"],\"deviceRole\":\"primary\",\"id\":\"television-primary\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Wall television\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"television\",\"kind\":\"device\",\"modelId\":\"wall-television\",\"placement\":{\"depthOffsetMeters\":0.005,\"elevationMeters\":1.08,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":3.0689,\"rotationOffsetRadians\":0,\"wallId\":\"ground-west-wall\"},\"size\":[2.4,1.36,0.07]},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"media_player\"],\"deviceRole\":\"primary\",\"id\":\"open-plan-living-speaker-primary\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Living room speaker\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"open-plan-living-speaker\",\"kind\":\"device\",\"modelId\":\"speaker\",\"placement\":{\"depthOffsetMeters\":0.21,\"elevationMeters\":0.55,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":2.45,\"rotationOffsetRadians\":0,\"wallId\":\"ground-west-wall\"},\"size\":[0.26,0.39,0.26]},{\"floorId\":\"ground-floor\",\"id\":\"low-media-console\",\"kind\":\"furnishing\",\"modelId\":\"low-media-console\",\"placement\":{\"depthOffsetMeters\":0.20999999999999996,\"elevationMeters\":0.001,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":3.0659,\"rotationOffsetRadians\":0,\"wallId\":\"ground-west-wall\"},\"size\":[1.6,0.55,0.42],\"variant\":\"default\"},{\"floorId\":\"ground-floor\",\"id\":\"outdoor-bbq\",\"kind\":\"furnishing\",\"modelId\":\"outdoor-bbq\",\"placement\":{\"at\":[1.1,18.900000000000002],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":1.5707963267948966},\"size\":[1.2,1.1,0.6],\"variant\":\"default\"},{\"floorId\":\"ground-floor\",\"id\":\"65f5e5b5-ba59-4c67-9019-2b8ab8cb9fec\",\"kind\":\"furnishing\",\"modelId\":\"neutral-area-rug\",\"placement\":{\"at\":[11.8,2.2],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[2,0.015,3],\"variant\":\"default\"},{\"floorId\":\"ground-floor\",\"id\":\"4e982529-1ef5-4f04-8d19-e9f75b64b2a3\",\"kind\":\"furnishing\",\"modelId\":\"book-row\",\"placement\":{\"depthOffsetMeters\":0.09,\"elevationMeters\":0.8442074652777777,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":6.578,\"rotationOffsetRadians\":0,\"wallId\":\"ground-west-day-wall\"},\"size\":[0.4,0.28,0.18],\"variant\":\"default\"},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"fan\"],\"deviceRole\":\"primary\",\"id\":\"fef4ac62-8237-49f5-b19c-2acf038007b2\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Ceiling fan\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"2c9cc397-ef42-4327-b280-30715919d7e5\",\"kind\":\"device\",\"modelId\":\"ceiling-fan\",\"placement\":{\"at\":[3.6,15.8],\"dropMeters\":0.403,\"kind\":\"ceiling\",\"roomId\":\"open-plan-living\",\"rotationYRadians\":0},\"size\":[1.2,0.4,1.2],\"variant\":\"default\"},{\"floorId\":\"ground-floor\",\"id\":\"foyer-coat-rack\",\"kind\":\"furnishing\",\"modelId\":\"wall-coat-rack\",\"placement\":{\"depthOffsetMeters\":0,\"elevationMeters\":1.25,\"face\":\"left\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":0.9774,\"rotationOffsetRadians\":0,\"wallId\":\"ground-service-divider\"},\"size\":[0.8,0.32,0.22],\"variant\":\"default\"},{\"floorId\":\"ground-floor\",\"id\":\"641f95a6-0ca9-4958-b0e6-f0ac0c3f08af\",\"kind\":\"furnishing\",\"modelId\":\"utility-shelving\",\"placement\":{\"depthOffsetMeters\":0.225,\"elevationMeters\":0.001,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":7.1459,\"rotationOffsetRadians\":0,\"wallId\":\"ground-north-wall\"},\"size\":[0.9,1.8,0.45],\"variant\":\"default\"},{\"floorId\":\"ground-floor\",\"id\":\"bde809ef-5910-40e3-b102-116a726c025f\",\"kind\":\"furnishing\",\"modelId\":\"toolbox\",\"placement\":{\"depthOffsetMeters\":0.12,\"elevationMeters\":1.7850711805555552,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":7.2502,\"rotationOffsetRadians\":0,\"wallId\":\"ground-north-wall\"},\"size\":[0.45,0.3,0.24],\"variant\":\"default\"},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"valve\",\"switch\"],\"deviceRole\":\"primary\",\"id\":\"02848dea-8596-4c2a-9106-99fa3943ccab\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Rotating sprinkler\"},\"required\":true}],\"floorId\":\"ground-floor\",\"id\":\"9c927896-91a3-4db7-b905-9458172701a7\",\"kind\":\"device\",\"modelId\":\"rotating-sprinkler\",\"placement\":{\"at\":[8.4,-2.6],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0},\"size\":[0.28,0.164,0.28],\"variant\":\"default\"},{\"floorId\":\"first-floor\",\"id\":\"ae250fd9-b5de-48dd-9a71-e8a9c7d818d5\",\"kind\":\"furnishing\",\"modelId\":\"neutral-area-rug\",\"placement\":{\"at\":[4.2,3.8000000000000003],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":6.283001142274436},\"size\":[2.4710575181141143,0.018532931385855857,3.7065862771711715],\"variant\":\"kilim\"},{\"floorId\":\"first-floor\",\"id\":\"primary-bedroom-reading-chair\",\"kind\":\"furnishing\",\"modelId\":\"sage-tub-armchair\",\"placement\":{\"at\":[2.9000000000000004,0.6000000000000001],\"elevationMeters\":0.001,\"kind\":\"absolute\",\"rotationYRadians\":0.3325130789452819},\"size\":[0.78,0.86,0.8],\"variant\":\"default\"},{\"entitySlots\":[{\"autoMap\":\"manual\",\"compatibleDomains\":[\"camera\"],\"deviceRole\":\"primary\",\"id\":\"8547d43a-5958-4eac-a9ca-de5c8b12b891\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Indoor security camera\"},\"required\":true}],\"floorId\":\"first-floor\",\"id\":\"ef74193a-a255-4cdd-9186-801f7882ae7d\",\"kind\":\"device\",\"modelId\":\"indoor-security-camera\",\"placement\":{\"depthOffsetMeters\":0.05000000000000001,\"elevationMeters\":1.4475060763888883,\"face\":\"right\",\"kind\":\"wall\",\"offsetFromWallStartPlanUnits\":0.8981,\"rotationOffsetRadians\":0,\"wallId\":\"first-north-wall\"},\"size\":[0.1,0.16,0.1],\"variant\":\"default\"},{\"id\":\"living-west-ac\",\"kind\":\"device\",\"modelId\":\"indoor-ac\",\"floorId\":\"ground-floor\",\"size\":[0.86,0.28,0.206],\"placement\":{\"kind\":\"wall\",\"wallId\":\"ground-west-wall\",\"face\":\"right\",\"offsetFromWallStartPlanUnits\":5.3177,\"elevationMeters\":1.8898,\"depthOffsetMeters\":0.004,\"rotationOffsetRadians\":0},\"entitySlots\":[{\"id\":\"living-west-ac-entity\",\"autoMap\":\"manual\",\"compatibleDomains\":[\"climate\"],\"deviceRole\":\"primary\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"West living room AC\"},\"required\":true}]},{\"id\":\"dining-pedestal-fan\",\"kind\":\"device\",\"modelId\":\"pedestal-fan\",\"floorId\":\"ground-floor\",\"size\":[0.45,1.35,0.4],\"placement\":{\"kind\":\"absolute\",\"at\":[13.5207,17.5304],\"elevationMeters\":0.001,\"rotationYRadians\":-2.235508463075441},\"entitySlots\":[{\"id\":\"dining-pedestal-fan-entity\",\"autoMap\":\"manual\",\"compatibleDomains\":[\"fan\"],\"deviceRole\":\"primary\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Dining pedestal fan\"},\"required\":true}]},{\"id\":\"living-west-floor-lamp\",\"kind\":\"device\",\"modelId\":\"floor-lamp\",\"floorId\":\"ground-floor\",\"size\":[0.652,1.796,0.652],\"placement\":{\"kind\":\"absolute\",\"at\":[0.5129,17.5525],\"elevationMeters\":0.001,\"rotationYRadians\":0},\"entitySlots\":[{\"id\":\"living-west-floor-lamp-entity\",\"autoMap\":\"manual\",\"compatibleDomains\":[\"light\"],\"deviceRole\":\"primary\",\"presentation\":{\"dashboardRole\":\"primary\",\"label\":\"Living room floor lamp\"},\"required\":true}]}]"), Fp = Be(JSON.stringify({
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
	...Np,
	sceneItems: Pp
}));
if (!Fp.valid) throw Error(Fp.issues.map((e) => e.message).join("\n"));
var Ip = Fp.project, Lp = "#eee9de", Rp = "#f5f2eb", zp = "#eee8dc", Bp = "#d3c9bc", Vp = "#b77b43", Hp = "#d09a62", Up = "#b78332", Wp = "#292b2a", Gp = "#665c50";
function $({ size: e, position: t, color: n, outline: r = Gp, receiveShadow: a = !1 }) {
	return /* @__PURE__ */ (0, U.jsxs)("mesh", {
		position: t,
		castShadow: !0,
		receiveShadow: a,
		children: [
			/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [...e] }),
			/* @__PURE__ */ (0, U.jsx)(P, { color: n }),
			/* @__PURE__ */ (0, U.jsx)(i, {
				thickness: .006,
				color: r,
				screenspace: !1
			})
		]
	});
}
function Kp({ width: e, height: t, position: n }) {
	return /* @__PURE__ */ (0, U.jsxs)("mesh", {
		position: n,
		receiveShadow: !0,
		children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
			e,
			t,
			.018
		] }), /* @__PURE__ */ (0, U.jsx)(P, { color: Rp })]
	});
}
//#endregion
//#region home/src/extensions/kitchen/brass-cabinet-handle.tsx
function qp({ position: e, vertical: t = !1 }) {
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
			color: Up,
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
			] }), /* @__PURE__ */ (0, U.jsx)(P, { color: Up })]
		}, e))]
	});
}
//#endregion
//#region home/src/extensions/kitchen/cabinet-joint.tsx
function Jp({ from: e, to: t, color: n, thickness: r = .006 }) {
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
		] }), /* @__PURE__ */ (0, U.jsx)(P, { color: n })]
	});
}
//#endregion
//#region home/src/extensions/kitchen/stone-vein.tsx
function Yp({ points: e, width: t }) {
	return e.slice(1).map((n, r) => /* @__PURE__ */ (0, U.jsx)(Jp, {
		from: e[r],
		to: n,
		color: Bp,
		thickness: t
	}, `${n[0]}-${n[2]}`));
}
//#endregion
//#region home/src/extensions/kitchen/kitchen-cabinetry.tsx
var Xp = .55, Zp = .66, Qp = 1.9000000000000001, $p = 2.23, em = 1.5550000000000002, tm = $p, nm = tm / 1.65, rm = [
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
], im = [
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
function am() {
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
					tm,
					.54
				],
				position: [
					0,
					tm / 2,
					0
				],
				color: Lp
			}),
			/* @__PURE__ */ (0, U.jsx)(Kp, {
				width: .68,
				height: 2.16,
				position: [
					0,
					tm / 2,
					.28
				]
			}),
			/* @__PURE__ */ (0, U.jsx)(Jp, {
				from: [
					-.34,
					1.04 * nm,
					.291
				],
				to: [
					.34,
					1.04 * nm,
					.291
				],
				color: "#a69e93"
			}),
			/* @__PURE__ */ (0, U.jsx)(qp, {
				position: [
					.25,
					1.32 * nm,
					.335
				],
				vertical: !0
			}),
			/* @__PURE__ */ (0, U.jsx)(qp, {
				position: [
					.25,
					.68 * nm,
					.335
				],
				vertical: !0
			})
		]
	});
}
function om({ width: e, position: t }) {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#69685f" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
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
				color: Rp,
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
				color: Rp,
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
				color: Rp,
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
				color: Rp,
				outline: "#a49c90"
			}, `row-${t}`))
		]
	});
}
function sm({ center: e, width: t }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		position: [
			e,
			0,
			.31
		],
		children: [
			/* @__PURE__ */ (0, U.jsx)(Kp, {
				width: t,
				height: .78,
				position: [
					0,
					.415,
					.291
				]
			}),
			/* @__PURE__ */ (0, U.jsx)(Jp, {
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
			/* @__PURE__ */ (0, U.jsx)(qp, { position: [
				0,
				.7,
				.335
			] })
		]
	});
}
function cm({ cabinet: e }) {
	return e.kind === "microwave" ? null : e.kind === "glass" ? /* @__PURE__ */ (0, U.jsxs)("group", {
		position: [
			e.center,
			Xp,
			.25
		],
		children: [/* @__PURE__ */ (0, U.jsx)(om, {
			width: e.width,
			position: [
				0,
				1.35,
				.235
			]
		}), /* @__PURE__ */ (0, U.jsx)(qp, {
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
			Xp,
			.25
		],
		children: [/* @__PURE__ */ (0, U.jsx)(Kp, {
			width: e.width,
			height: .64,
			position: [
				0,
				1.35,
				.211
			]
		}), /* @__PURE__ */ (0, U.jsx)(qp, {
			position: [
				(e.center < 2.8 ? 1 : -1) * (e.width / 2 - .055),
				1.13,
				.255
			],
			vertical: !0
		})]
	});
}
function lm() {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "custom-kitchen-cabinetry",
		children: [
			/* @__PURE__ */ (0, U.jsx)(am, {}),
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
				color: Lp
			}),
			rm.filter((e) => e.kind === "door").map((e) => /* @__PURE__ */ (0, U.jsx)(sm, {
				center: e.center,
				width: e.width
			}, e.center)),
			[
				1.38,
				2.04,
				2.7,
				3.36
			].map((e) => /* @__PURE__ */ (0, U.jsx)(Jp, {
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
					Zp,
					.4
				],
				position: [
					2.3,
					Qp,
					.25
				],
				color: Lp
			}),
			im.map((e) => /* @__PURE__ */ (0, U.jsx)(cm, { cabinet: e }, e.center)),
			[
				1.45,
				1.83,
				2.39,
				2.73,
				3.07,
				3.33,
				3.59
			].map((e) => /* @__PURE__ */ (0, U.jsx)(Jp, {
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
				color: zp,
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
				color: zp,
				outline: "#94897d"
			}),
			/* @__PURE__ */ (0, U.jsx)(Yp, {
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
			/* @__PURE__ */ (0, U.jsx)(Yp, {
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
function um() {
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
				color: Wp,
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#a5a098" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#454a48" })]
			}, `${e}-${t}`)))
		]
	});
}
//#endregion
//#region home/src/extensions/kitchen/integrated-microwave.tsx
function dm() {
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
				color: Wp,
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#6f756f" })]
			})
		]
	});
}
//#endregion
//#region home/src/extensions/kitchen/kitchen-sink.tsx
function fm() {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: Up })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: Up })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: Up })]
			})
		]
	});
}
//#endregion
//#region home/src/extensions/kitchen/kitchen-peninsula.tsx
function pm() {
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
				color: Lp,
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: Rp })]
			}),
			[
				.74,
				1.16,
				1.58
			].map((e) => /* @__PURE__ */ (0, U.jsx)(Jp, {
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
			/* @__PURE__ */ (0, U.jsx)(Jp, {
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
				children: /* @__PURE__ */ (0, U.jsx)(qp, { position: [
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
				color: Vp,
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: Hp })]
			}),
			[
				1.79,
				2.59,
				3.39
			].map((e) => /* @__PURE__ */ (0, U.jsx)(Jp, {
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
				color: zp,
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
				color: zp,
				outline: "#81776b",
				receiveShadow: !0
			}),
			/* @__PURE__ */ (0, U.jsx)(Yp, {
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
			/* @__PURE__ */ (0, U.jsx)(Yp, {
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
function mm({ size: e }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "equipped-kitchen-model",
		scale: [
			e[0] / 3.89,
			e[1] / 2.23,
			e[2] / 2.54
		],
		children: [
			/* @__PURE__ */ (0, U.jsx)(lm, {}),
			/* @__PURE__ */ (0, U.jsx)(um, {}),
			/* @__PURE__ */ (0, U.jsx)(dm, {}),
			/* @__PURE__ */ (0, U.jsx)(fm, {}),
			/* @__PURE__ */ (0, U.jsx)(pm, {})
		]
	});
}
var hm = R({
	defaultRoomType: "kitchen",
	component: mm,
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
}), gm = "#fff2c8", _m = "#f2b75c", vm = 1.35 + .66 / 2 - .022;
function ym({ state: e }) {
	let t = c(e);
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "eclairage-cuisine-custom",
		children: [
			im.filter((e) => e.kind === "glass").map((e) => /* @__PURE__ */ (0, U.jsxs)("group", {
				position: [
					e.center,
					Xp,
					0
				],
				children: [/* @__PURE__ */ (0, U.jsxs)("mesh", {
					position: [
						0,
						vm,
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
					] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#ddd7ca" })]
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
					children: [/* @__PURE__ */ (0, U.jsx)("circleGeometry", { args: [.016, 20] }), /* @__PURE__ */ (0, U.jsx)(P, {
						color: t > 0 ? gm : "#b9b1a0",
						emissive: _m,
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
					em,
					.38
				],
				color: "#d9d4ca",
				outline: "#746e65"
			}),
			/* @__PURE__ */ (0, U.jsxs)("mesh", {
				name: "kitchen-light-strip-emitter",
				position: [
					2.27,
					em - .017,
					.38
				],
				children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
					2.9,
					.008,
					.038
				] }), /* @__PURE__ */ (0, U.jsx)(P, {
					color: t > 0 ? gm : "#b9b1a0",
					emissive: _m,
					emissiveIntensity: t * .27
				})]
			})
		]
	});
}
//#endregion
//#region home/src/extensions/kitchen/lighting-model.tsx
function bm({ state: e, visualState: t }) {
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: `device-state-${t}`,
		children: /* @__PURE__ */ (0, U.jsx)(ym, { state: e })
	});
}
var xm = j({
	defaultRoomType: "kitchen",
	component: bm,
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
}), Sm = Ue({
	furnishingModels: {
		...Mp,
		"equipped-kitchen": hm
	},
	deviceModels: { "kitchen-cabinet-lighting": xm },
	roomFurnishings: {},
	openingModels: {}
}), Cm = Fe(Ip, Sm), wm = Se(co, Cm.extensions.deviceModels), Tm = {
	furnishingModels: Object.assign(Object.create(null), Mp, Cm.extensions.furnishingModels),
	deviceModels: wm
}, Em = (e) => Fe(e, Cm.extensions), Dm = (e) => ({
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
}), Om = (e, t) => {
	let n = ae(rt(e), Tm), r = Je(e, Tm), i = He(t, "Home");
	return {
		...g(n, i),
		resetToSeed: (e) => ee(n, e, He(t, e.draft.home.name), 0),
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
			let a = He(t, e.metadata.name);
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
				let i = He(t, e.draft.home.name);
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
async function km(e, t, n, r) {
	if (!t) return e;
	let i = le(t);
	if (e.bindings[i]) return e;
	let a = n.getItem(me(i, e.homeId)) ?? n.getItem(v(i, e.homeId));
	if (a === null) return e;
	let o = Em(e.published), s = JSON.parse(a), c = _e(s, o);
	if (!c.valid || !c.profile) throw Error(`Saved connections need recovery: ${c.issues[0]?.message ?? "Invalid profile"}`);
	let l = pe(m(e.bindings, i, s, o, o), Em(e.draft));
	return r({
		...e,
		bindings: l
	}, e.revision);
}
async function Am(e, t) {
	let n = ae(rt(window.indexedDB), Tm);
	return km(e, t, window.localStorage, (e, t) => n.replace(e, t));
}
//#endregion
//#region apps/web/src/editor-connect/profile-transfer.ts
function jm(e, t, r, i) {
	let a = le(t), o = JSON.parse(r), s = _e(o, i);
	if (!s.valid || !s.profile) throw Error(s.issues[0]?.message ?? "Invalid profile.");
	let c = {
		...e,
		[a]: {
			draft: o,
			published: e[a]?.published ?? ze(i.home.id),
			manualRoomIds: i.floors.flatMap((e) => e.rooms).map((e) => e.id),
			manualSlotIds: n(i).map((e) => e.slotId)
		}
	}, l = b({ [a]: {
		...c[a],
		published: s.profile
	} }, i, i);
	if (l.length) throw Error(l[0].message);
	return c;
}
function Mm(e, t, r) {
	let i = En(t, r);
	if (i.record.homeId !== e.homeId) throw Error("This backup belongs to another home.");
	let a = i.record.draft, o = ye(a, {
		furnishingModels: {},
		deviceModels: {},
		openingModels: {}
	});
	return {
		project: a,
		bindings: {
			...pe(e.bindings, o),
			...Object.fromEntries(Object.entries(i.record.bindings).map(([t, r]) => [t, {
				...r,
				published: e.bindings[t]?.published ?? ze(e.homeId),
				manualRoomIds: o.floors.flatMap((e) => e.rooms).map((e) => e.id),
				manualSlotIds: n(o).map((e) => e.slotId)
			}]))
		}
	};
}
function Nm(e, t) {
	let n = URL.createObjectURL(new Blob([e], { type: "application/json" })), r = document.createElement("a");
	r.href = n, r.download = t, r.click(), URL.revokeObjectURL(n);
}
//#endregion
//#region apps/web/src/editor-chrome/EditorIcon.tsx
var Pm = {
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
function Fm({ name: e }) {
	return e === "construct" || e === "furnish" || e === "connect" ? /* @__PURE__ */ (0, U.jsx)(w, {
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
		children: Pm[e]
	});
}
//#endregion
//#region apps/web/src/editor-reference-plan/reference-storage.ts
var Im = "cabane-reference-plans-v1";
async function Lm(e, t) {
	let n = await new Promise((e, t) => {
		let n = indexedDB.open(Im, 1);
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
var Rm = (e) => Lm("readonly", (t, n) => {
	let r = t.objectStore("homes").get(e);
	r.onsuccess = () => n(r.result ?? {
		plans: {},
		preferences: {}
	});
}), zm = (e, t, n) => Lm("readwrite", (r) => {
	for (let [t, i] of n) r.objectStore("assets").put(i, [e, t]);
	r.objectStore("homes").put(t, e);
}), Bm = (e, t) => Lm("readonly", (n, r) => {
	let i = n.objectStore("assets").get([e, t]);
	i.onsuccess = () => r(i.result);
}), Vm = (e, t) => Lm("readwrite", (n) => {
	let r = new Set(t), i = n.objectStore("assets").openKeyCursor();
	i.onsuccess = () => {
		let t = i.result;
		if (!t) return;
		let a = t.key;
		a[0] === e && !r.has(a[1]) && n.objectStore("assets").delete(t.key), t.continue();
	};
}), Hm = (e) => Lm("readwrite", (t) => {
	t.objectStore("homes").delete(e);
	let n = t.objectStore("assets").openKeyCursor();
	n.onsuccess = () => {
		let r = n.result;
		r && (r.key[0] === e && t.objectStore("assets").delete(r.key), r.continue());
	};
}), Um = /* @__PURE__ */ new Map();
function Wm(e) {
	if (Um.has(e)) return Um.get(e);
	try {
		let t = r(window.localStorage, e);
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
function Gm(e, t) {
	let n = !1;
	try {
		let { record: i } = r(window.localStorage, e);
		n = Oe(window.localStorage, e, {
			...i,
			buildTutorial: t
		});
	} catch {}
	return Um.set(e, {
		state: t,
		durable: n
	}), n;
}
function Km(e) {
	let t = Wm(e);
	return t.state ? t.durable : Gm(e, te());
}
function qm(e) {
	Um.delete(e);
}
//#endregion
//#region apps/web/src/walk-tools.ts
var Jm = [{
	id: "cabane.laser",
	label: "Laser",
	defaultShortcut: !0,
	shortcutKey: "G",
	Icon: Ve,
	Scene: (0, L.lazy)(() => import("./LaserWalkTool-Bh_EeubG.js").then((e) => ({ default: e.LaserWalkTool })))
}];
//#endregion
//#region apps/web/src/editor-connect/useConnectSignIn.ts
function Ym(e, t) {
	let n = ie(), [r, i] = (0, L.useState)(null), a = (0, L.useRef)(!1);
	return (0, L.useEffect)(() => {
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
var Xm = "cabane:editor-return:v1";
function Zm(e, t) {
	return we(e).find((n) => oe(e, n.id).some((e) => e.relationships.some((e) => e.id === t)));
}
function Qm(e, t) {
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
function $m(e) {
	try {
		return typeof window > "u" ? null : Qm(window.sessionStorage.getItem(Xm), e);
	} catch {
		return null;
	}
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/doors/door-frame-dimensions.ts
var eh = .07, th = .025, nh = .003, rh = .003;
function ih(e, t, n, r, i, a = r / 2) {
	let o = Math.min(eh / 2 + nh, e / 4), s = (e - 2 * o - (t === 2 ? rh : 0)) / t, c = t === 2 ? e / 2 - o - rh / 2 : e - o - eh / 2 - .001, l = Math.sqrt(Math.max(0, c ** 2 - r ** 2));
	return {
		inset: o,
		leafWidth: Math.max(.08, Math.min(s, l)),
		pivotZ: i * (n + th) / 2,
		leafZ: -i * a
	};
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/doors/roll-up-door-frame.tsx
function ah({ width: e, color: t, height: n, depth: r, jambWidth: i, headerHeight: a }) {
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
			] }), /* @__PURE__ */ (0, U.jsx)(P, { color: t ?? "#7d8581" })]
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
			] }), /* @__PURE__ */ (0, U.jsx)(P, { color: t ?? "#dddcd6" })]
		})]
	});
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/doors/roll-up-door-slats.tsx
function oh(e, t, n) {
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
function sh({ width: e, clearHeight: t, travel: n, finish: r, color: i, side: a, reducedMotion: o }) {
	let s = (0, L.useRef)(null), c = (0, L.useRef)(n), l = be((e) => e.invalidate), u = Math.max(1, Math.ceil(t / .16)), d = t / u;
	return (0, L.useLayoutEffect)(() => {
		o && (c.current = n), c.current = Math.min(t, c.current), s.current && oh(s.current, t, c.current), l();
	}, [
		t,
		n,
		o,
		a,
		l
	]), N((e, r) => {
		if (!s.current || c.current === n) return;
		let i = n - c.current;
		c.current = o || Math.abs(i) < 1e-4 ? n : c.current + i * (1 - Math.exp(-5 * Math.min(r, .1))), oh(s.current, t, c.current), c.current !== n && l();
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
			] }), /* @__PURE__ */ (0, U.jsx)(P, { color: i ?? (r === "wood" ? n % 2 ? "#ba9365" : "#ad8559" : n % 2 ? "#e8e6df" : "#dddcd6") })]
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
			] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#646b68" })]
		})]
	});
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/doors/roll-up-door-model.tsx
function ch({ wall: e, opening: t, floor: n, position: r, reducedMotion: i }) {
	let a = Te(e, t, n.coordinates), o = a.widthMeters, s = t.openingHeightMeters, c = Xe(o, s, r);
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
		children: [/* @__PURE__ */ (0, U.jsx)(ah, {
			...Ne({ color: t.color }),
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
			children: /* @__PURE__ */ (0, U.jsx)(sh, {
				reducedMotion: i,
				width: c.clearWidth,
				...c,
				finish: t.finish,
				...Ne({ color: t.color }),
				side: t.openingSide === "left" ? -1 : 1
			})
		})]
	});
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/animation/animated-opening-leaf.tsx
function lh({ operation: e, open: t, reducedMotion: n, direction: r, travel: i, children: a }) {
	let o = (0, L.useRef)(null), { invalidate: s } = be();
	return (0, L.useEffect)(() => {
		s();
	}, [
		s,
		t,
		e,
		n,
		r,
		i
	]), N((a, c) => {
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
function uh({ wall: e, width: t, height: n, color: r = "#d8d2c6" }) {
	return /* @__PURE__ */ (0, U.jsx)(U.Fragment, { children: [
		[
			0,
			n / 2,
			eh,
			n + .08
		],
		[
			t,
			n / 2,
			eh,
			n + .08
		],
		[
			t / 2,
			n + .031,
			t + eh,
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
				e.thicknessMeters + th
			] }),
			/* @__PURE__ */ (0, U.jsx)(P, { color: r }),
			/* @__PURE__ */ (0, U.jsx)(i, {
				color: "#676965",
				thickness: .006,
				screenspace: !1
			})
		]
	}, s)) });
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/doors/white-lever-door-handles.tsx
function dh({ width: e, side: t }) {
	let n = Math.min(.027, e * .15), r = Math.min(.095, e * .5), a = Math.min(.035, e * .18);
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#f1f0eb" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#f1f0eb" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)(F, {
				name: "white-lever-arm",
				args: [
					r,
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
				children: [/* @__PURE__ */ (0, U.jsx)(P, { color: "#f1f0eb" }), /* @__PURE__ */ (0, U.jsx)(i, {
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
function fh({ width: e, side: t = 1 }) {
	let n = Math.min(.035, e * .15), r = Math.min(.16, e * .5), a = Math.min(.055, e * .18);
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
					/* @__PURE__ */ (0, U.jsx)(P, { color: "#aeb4b2" }),
					/* @__PURE__ */ (0, U.jsx)(i, {
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#c3c7c5" })]
			}),
			/* @__PURE__ */ (0, U.jsxs)(F, {
				args: [
					r,
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
				children: [/* @__PURE__ */ (0, U.jsx)(P, { color: "#b8bdbb" }), /* @__PURE__ */ (0, U.jsx)(i, {
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
function ph({ width: e, height: t, finish: n, color: r, handleSide: i }) {
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "concealed-door-leaf",
		children: [/* @__PURE__ */ (0, U.jsx)(F, {
			args: [
				e,
				t,
				.05
			],
			radius: .002,
			smoothness: 2,
			castShadow: !0,
			children: /* @__PURE__ */ (0, U.jsx)(P, { color: r ?? (n === "white" ? "#f1f0eb" : "#b89a73") })
		}), /* @__PURE__ */ (0, U.jsx)(fh, {
			width: e,
			side: i
		})]
	});
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/doors/flush-door-leaf.tsx
function mh({ width: e, height: t, finish: n, color: r, handleSide: i = 1, knob: a = !1 }) {
	let o = Math.min(.36, e * .65);
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "flush-door-leaf",
		children: [/* @__PURE__ */ (0, U.jsx)(F, {
			args: [
				e,
				t,
				.02
			],
			radius: .002,
			smoothness: 2,
			castShadow: !0,
			children: /* @__PURE__ */ (0, U.jsx)(P, { color: r ?? (n === "white" ? "#e9e8e2" : "#b89a73") })
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#292c29" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#292c29" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#292c29" })]
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
				] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#292c29" })]
			})]
		})]
	});
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/opening-frame-box.tsx
function hh({ size: e, position: t, color: n = "#e7e2d8" }) {
	return /* @__PURE__ */ (0, U.jsxs)(F, {
		args: e,
		position: t,
		radius: Math.min(.008, ...e.map((e) => e / 2)),
		smoothness: 2,
		castShadow: !0,
		children: [/* @__PURE__ */ (0, U.jsx)(P, { color: n }), /* @__PURE__ */ (0, U.jsx)(i, {
			thickness: .004,
			color: "#77736d",
			screenspace: !1
		})]
	});
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/windows/framed-glass-panel.tsx
function gh({ width: e, height: t, columns: n, rows: r, privacy: i = !1, frameDepth: a = .065, frameColor: o = "#e7e2d8" }) {
	let s = Math.min(.055, e * .14, t * .14), c = Math.max(.02, e - s * 2), l = Math.max(.02, t - s * 2), u = i && r === 2 ? [-l * .18] : Array.from({ length: Math.max(0, r - 1) }, (e, t) => -l / 2 + l * ((t + 1) / r));
	return /* @__PURE__ */ (0, U.jsxs)("group", { children: [
		/* @__PURE__ */ (0, U.jsxs)("mesh", {
			receiveShadow: !0,
			children: [/* @__PURE__ */ (0, U.jsx)("boxGeometry", { args: [
				c,
				l,
				.024
			] }), /* @__PURE__ */ (0, U.jsx)(P, {
				color: i ? "#aed8dc" : "#9bcbd2",
				transparent: !0,
				opacity: i ? .43 : .48,
				depthWrite: !1
			})]
		}),
		[-1, 1].map((n) => /* @__PURE__ */ (0, U.jsx)(hh, {
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
		[-1, 1].map((n) => /* @__PURE__ */ (0, U.jsx)(hh, {
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
		Array.from({ length: Math.max(0, n - 1) }, (e, t) => /* @__PURE__ */ (0, U.jsx)(hh, {
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
		u.map((e, t) => /* @__PURE__ */ (0, U.jsx)(hh, {
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
function _h({ width: e, height: t, privacy: n = !1, frameColor: r = "#292e2d" }) {
	let i = (0, L.useMemo)(() => {
		let n = e * .4, r = Math.min(.022, e * .055), i = -t / 2 + .055, a = t / 2 - .065 - n, o = new Re();
		return o.moveTo(-n, i), o.lineTo(-n, a), o.absarc(0, a, n, Math.PI, 0, !0), o.lineTo(n, i), o.lineTo(n - r, i), o.lineTo(n - r, a), o.absarc(0, a, n - r, 0, Math.PI, !1), o.lineTo(-n + r, i), o.closePath(), o;
	}, [e, t]);
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		name: "arched-steel-glass-panel",
		children: [/* @__PURE__ */ (0, U.jsx)(gh, {
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
			}] }), /* @__PURE__ */ (0, U.jsx)(P, { color: r })]
		})]
	});
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/doors/glass-door-handle.tsx
function vh({ width: e, side: t }) {
	return /* @__PURE__ */ (0, U.jsx)("group", {
		name: "opening-glass-door-handle",
		position: [
			t * (e / 2 - Math.min(.1, e * .22)),
			-.02,
			0
		],
		children: [-1, 1].map((e) => /* @__PURE__ */ (0, U.jsxs)(F, {
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
			children: [/* @__PURE__ */ (0, U.jsx)(P, { color: "#4f5655" }), /* @__PURE__ */ (0, U.jsx)(i, {
				thickness: .004,
				color: "#353938",
				screenspace: !1
			})]
		}, e))
	});
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/doors/plank-door-leaf.tsx
var yh = .065;
function bh({ width: e, height: t, handleSide: n, finish: r, color: a, railHangers: o = !0, depthScale: s = 1 }) {
	let c = r === "white", l = a ?? (c ? "#e6e3dc" : "#85583b"), u = a ?? (c ? "#f1f0eb" : "#9c6b49"), d = c ? "#bdbbb5" : "#68432e", f = Math.max(.02, e - Math.min(.12, e * .3)), p = Math.min(.1, e * .22), m = Math.min(.075, e * .22), h = Math.max(.2, t - .16), g = Math.max(4, Math.round(e / .096)), _ = f / g, v = Math.hypot(f, h), y = Math.atan2(h, f);
	return /* @__PURE__ */ (0, U.jsxs)("group", {
		scale: [
			1,
			1,
			s
		],
		children: [
			/* @__PURE__ */ (0, U.jsxs)(F, {
				args: [
					e,
					t,
					yh
				],
				radius: .018,
				smoothness: 3,
				castShadow: !0,
				children: [/* @__PURE__ */ (0, U.jsx)(P, { color: l }), /* @__PURE__ */ (0, U.jsx)(i, {
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
					] }), /* @__PURE__ */ (0, U.jsx)(P, { color: t % 3 == 1 ? u : l })]
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
					] }), /* @__PURE__ */ (0, U.jsx)(P, { color: d })]
				})] }, t);
			}),
			[-1, 1].map((n) => /* @__PURE__ */ (0, U.jsx)(hh, {
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
			[-1, 1].map((n) => /* @__PURE__ */ (0, U.jsx)(hh, {
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
			[-1, 1].map((e) => /* @__PURE__ */ (0, U.jsxs)(F, {
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
				children: [/* @__PURE__ */ (0, U.jsx)(P, { color: u }), /* @__PURE__ */ (0, U.jsx)(i, {
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
				children: [[-1, 1].map((t) => /* @__PURE__ */ (0, U.jsx)(hh, {
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
				}, t)), /* @__PURE__ */ (0, U.jsx)(hh, {
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
						/* @__PURE__ */ (0, U.jsx)(P, { color: "#242525" }),
						/* @__PURE__ */ (0, U.jsx)(i, {
							thickness: .006,
							color: "#111212",
							screenspace: !1
						})
					]
				}), /* @__PURE__ */ (0, U.jsx)(hh, {
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
function xh({ opening: e, width: t, height: n, handleSide: r, plankDepthScale: a = 1 }) {
	let o = e.finish === "white", s = e.color ?? (o ? "#d8d2c6" : "#9c6b49");
	return e.variant === "concealed" ? /* @__PURE__ */ (0, U.jsx)(ph, {
		width: t,
		height: n,
		finish: e.finish,
		...Ne({ color: e.color }),
		handleSide: r
	}) : e.variant === "flush" || e.variant === "flush-knob" ? /* @__PURE__ */ (0, U.jsx)(mh, {
		width: t,
		height: n,
		finish: e.finish,
		...Ne({ color: e.color }),
		handleSide: r,
		knob: e.variant === "flush-knob"
	}) : e.variant === "steel-arched" ? /* @__PURE__ */ (0, U.jsxs)("group", { children: [/* @__PURE__ */ (0, U.jsx)(_h, {
		width: t,
		height: n,
		...Ne({ frameColor: e.color })
	}), /* @__PURE__ */ (0, U.jsx)(vh, {
		width: t,
		side: r
	})] }) : e.variant === "french" || e.variant === "full-glass" ? /* @__PURE__ */ (0, U.jsxs)("group", { children: [/* @__PURE__ */ (0, U.jsx)(gh, {
		width: t,
		height: n,
		columns: e.variant === "french" ? 2 : 1,
		rows: e.variant === "french" ? 5 : 1,
		frameColor: s
	}), e.variant === "french" ? /* @__PURE__ */ (0, U.jsx)(fh, {
		width: t,
		side: r
	}) : /* @__PURE__ */ (0, U.jsx)(vh, {
		width: t,
		side: r
	})] }) : e.variant === "plank" ? /* @__PURE__ */ (0, U.jsx)(bh, {
		width: t,
		height: n,
		handleSide: r,
		finish: e.finish,
		...Ne({ color: e.color }),
		depthScale: a,
		railHangers: e.operation === "sliding"
	}) : /* @__PURE__ */ (0, U.jsxs)("group", { children: [/* @__PURE__ */ (0, U.jsxs)(F, {
		args: [
			t,
			n,
			.05
		],
		radius: .018,
		smoothness: 3,
		castShadow: !0,
		children: [/* @__PURE__ */ (0, U.jsx)(P, { color: e.color ?? (o ? "#f1f0eb" : "#b89a73") }), /* @__PURE__ */ (0, U.jsx)(i, {
			color: o ? "#676965" : "#493c31",
			thickness: o ? .008 : .01,
			screenspace: !1
		})]
	}), e.variant === "panel-white-lever" ? /* @__PURE__ */ (0, U.jsx)(dh, {
		width: t,
		side: r
	}) : /* @__PURE__ */ (0, U.jsx)(fh, {
		width: t,
		side: r
	})] });
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/doors/plank-door-rail.tsx
var Sh = .055, Ch = .004, wh = .04;
function Th({ openingWidth: e, leafWidth: t, orientation: n }) {
	let r = Infinity, i = -Infinity;
	for (let a of n.leaves) {
		let n = a.startRatio * e, o = n + t, s = a.slideSign, c = n + s * t, l = o + s * t;
		r = Math.min(r, n, c), i = Math.max(i, o, l);
	}
	return {
		startX: r - wh,
		endX: i + wh
	};
}
function Eh({ width: e, height: t, wallThickness: n, leafWidth: r, orientation: i }) {
	let { startX: a, endX: o } = Th({
		openingWidth: e,
		leafWidth: r,
		orientation: i
	}), s = o - a, c = (a + o) / 2, l = n / 2 + Ch + Sh / 2;
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
			children: /* @__PURE__ */ (0, U.jsx)(hh, {
				size: [
					s,
					.065,
					Sh
				],
				position: [
					0,
					t + .13,
					0
				],
				color: "#242525"
			})
		}), [a, o].map((e) => /* @__PURE__ */ (0, U.jsx)(hh, {
			size: [
				.075,
				.13,
				Sh
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
var Dh = .004;
function Oh({ wall: e, opening: t, floor: n, position: r, reducedMotion: i }) {
	if (t.operation === "roll-up") return /* @__PURE__ */ (0, U.jsx)(ch, {
		wall: e,
		opening: t,
		floor: n,
		position: r,
		reducedMotion: i
	});
	let a = Te(e, t, n.coordinates), o = T(t), s = t.leafCount === 2, c = t.variant === "concealed", l = t.frontSide === void 0 ? o.sideSign : t.frontSide === "left" ? -1 : 1, u = t.variant === "flush" || t.variant === "flush-knob", d = s ? 0 : u || c ? .006 : .018, f = u && t.variant !== "flush-knob" && !s ? Math.max(0, Math.min(t.frontOverlayMeters ?? .03, t.offsetFromWallStartPlanUnits * n.coordinates.metersPerPlanUnit, (We(e) - t.offsetFromWallStartPlanUnits - t.widthPlanUnits) * n.coordinates.metersPerPlanUnit)) : 0, p = t.operation === "hinged" && !u && !c && t.variant !== "full-glass" && t.variant !== "steel-arched", m = p && t.variant === "plank" ? Math.min(1, a.widthMeters / t.leafCount / .4) : 1, h = p ? ih(a.widthMeters, t.leafCount, e.thicknessMeters, t.variant === "panel" || t.variant === "panel-white-lever" ? .05 : t.variant === "plank" ? .151 * m : .065, o.sideSign, t.variant === "plank" ? .1185 * m : void 0) : null, g = h?.leafWidth ?? Math.max(.08, a.widthMeters / t.leafCount - d + 2 * f), _ = f > 0 ? f - d / 2 : 0, v = Math.max(.08, t.openingHeightMeters - (u || c ? .026 : .03)), y = t.operation === "sliding" && t.variant === "plank", b = e.thicknessMeters / 2 + Dh + yh / 2;
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
			t.variant !== "full-glass" && t.variant !== "steel-arched" && !u && !c && /* @__PURE__ */ (0, U.jsx)(uh, {
				...Ne({ color: t.color }),
				wall: e,
				width: a.widthMeters,
				height: t.openingHeightMeters
			}),
			t.operation === "sliding" && t.variant === "plank" && /* @__PURE__ */ (0, U.jsx)(Eh, {
				width: a.widthMeters,
				height: t.openingHeightMeters,
				wallThickness: e.thicknessMeters,
				leafWidth: g,
				orientation: o
			}),
			o.leaves.map((n, d) => {
				let f = t.operation === "hinged", p = f && n.hingeAtEnd, x = n.startRatio * a.widthMeters, ee = f ? n.pivotRatio * a.widthMeters + (h ? p ? -h.inset : h.inset : p ? _ : -_) : x - _, S = p ? -g / 2 : g / 2, C = f ? n.rotationSign : n.slideSign;
				return /* @__PURE__ */ (0, U.jsx)("group", {
					...Ne({ name: y ? "opening-plank-sliding-leaf-mount" : void 0 }),
					position: [
						ee,
						t.openingHeightMeters / 2,
						y ? b * o.sideSign : c ? (e.thicknessMeters / 2 - .025) * l : u ? (e.thicknessMeters / 2 + (t.frontOverlayMeters === 0 ? -.01 : .012)) * o.sideSign : h?.pivotZ ?? (s ? 0 : d % 2 == 0 ? -.016 : .016) * o.sideSign
					],
					children: /* @__PURE__ */ (0, U.jsx)(lh, {
						operation: t.operation,
						open: r > 0,
						reducedMotion: i,
						direction: C,
						travel: g,
						children: /* @__PURE__ */ (0, U.jsx)("group", {
							position: [
								S,
								0,
								h?.leafZ ?? 0
							],
							scale: [
								1,
								1,
								o.sideSign
							],
							children: /* @__PURE__ */ (0, U.jsx)(xh, {
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
var kh = (e, t) => {
	let n = e.openingHeightMeters - e.archRiseMeters, r = new Re();
	return r.moveTo(0, n), r.quadraticCurveTo(t * .22, e.openingHeightMeters, t / 2, e.openingHeightMeters), r.quadraticCurveTo(t * .78, e.openingHeightMeters, t, n), r.lineTo(t, e.openingHeightMeters), r.lineTo(0, e.openingHeightMeters), r.closePath(), r;
};
//#endregion
//#region packages/catalog/src/architecture/presets/openings/passages/passage-model.tsx
function Ah({ wall: e, opening: t, floor: n }) {
	let r = Te(e, t, n.coordinates), { openingHeightMeters: i, variant: a } = t, o = t.variant === "arched" ? t.archRiseMeters : 0, s = (0, L.useMemo)(() => a === "arched" ? kh({
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
			}] }), /* @__PURE__ */ (0, U.jsx)(P, { color: l.interior })]
		})
	});
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/windows/window-handle.tsx
function jh({ handleSide: e, faceSide: t, width: n, glazing: r }) {
	return r === "clear" ? /* @__PURE__ */ (0, U.jsx)("group", {
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
		children: /* @__PURE__ */ (0, U.jsx)(hh, {
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
			] }), /* @__PURE__ */ (0, U.jsx)(P, { color: "#747a79" })]
		}), /* @__PURE__ */ (0, U.jsxs)(F, {
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
			children: [/* @__PURE__ */ (0, U.jsx)(P, { color: "#747a79" }), /* @__PURE__ */ (0, U.jsx)(i, {
				thickness: .004,
				color: "#353938",
				screenspace: !1
			})]
		})]
	});
}
//#endregion
//#region packages/catalog/src/architecture/presets/openings/windows/window-model.tsx
function Mh({ wall: e, opening: t, floor: n, position: r, reducedMotion: i }) {
	let a = Te(e, t, n.coordinates), o = T(t), s = a.widthMeters / t.panelCount, c = t.variant === "muntined" ? t.muntins.columns : 1, l = t.variant === "muntined" ? t.muntins.rows : 1;
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
				children: /* @__PURE__ */ (0, U.jsx)(lh, {
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
						children: [t.variant === "steel-arched" ? /* @__PURE__ */ (0, U.jsx)(_h, {
							width: Math.max(.08, s),
							height: t.openingHeightMeters,
							privacy: t.glazing === "privacy",
							...Ne({ frameColor: t.color })
						}) : /* @__PURE__ */ (0, U.jsx)(gh, {
							width: Math.max(.08, s),
							height: t.openingHeightMeters,
							columns: c,
							rows: l,
							privacy: t.glazing === "privacy",
							...Ne({ frameColor: t.color }),
							frameDepth: t.glazing === "privacy" ? .105 : .09
						}), t.operation === "casement" && /* @__PURE__ */ (0, U.jsx)(jh, {
							width: s,
							glazing: t.glazing,
							handleSide: e.extentSign,
							faceSide: o.sideSign
						})]
					})
				})
			}, n);
		}), t.variant !== "steel-arched" && /* @__PURE__ */ (0, U.jsx)(hh, {
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
			...Ne({ color: t.color })
		})]
	});
}
//#endregion
//#region packages/catalog/src/architecture/registry.ts
var Nh = Ke({
	door: Oh,
	window: Mh,
	passage: Ah
}), Ph = [
	{
		id: "panel-wood",
		label: "Panel wood",
		configuration: De
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
], Fh = () => void 0, Ih = {};
function Lh({ entry: e }) {
	if (e.kind === "procedural") {
		let t = e.definition.component;
		return /* @__PURE__ */ (0, U.jsx)(t, {});
	}
	if (e.kind === "furnishing") {
		let t = e.definition.component;
		return /* @__PURE__ */ (0, U.jsx)(t, {
			variant: D(e.definition).id,
			size: e.definition.defaultSize,
			entityStatesBySlotId: Ih,
			reducedMotion: !0,
			walkMode: !1,
			onInteract: Fh
		});
	}
	let t = e.definition.component;
	return /* @__PURE__ */ (0, U.jsx)(t, {
		variant: D(e.definition).id,
		visualState: "disconnected",
		reducedMotion: !0,
		walkMode: !1,
		onInteract: Fh,
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
var Rh = "cabane-model-previews-38e4794be48f8be9c8a0", zh = /* @__PURE__ */ new Map(), Bh = 400;
function Vh(e, t) {
	zh.delete(e), zh.set(e, t), zh.size > Bh && zh.delete(zh.keys().next().value);
}
async function Hh() {
	return await caches.open(Rh);
}
async function Uh(e) {
	let t = zh.get(e);
	if (t) return t;
	try {
		let t = await (await (await Hh()).match(e))?.blob();
		return t && Vh(e, t), t;
	} catch {
		return;
	}
}
function Wh(e, t) {
	t.toBlob((t) => {
		t && (Vh(e, t), (async () => {
			try {
				let n = await Hh();
				await n.put(e, new Response(t));
				let r = await n.keys();
				for (let e of r.slice(0, Math.max(0, r.length - Bh))) await n.delete(e);
				for (let e of await caches.keys()) e.startsWith("cabane-model-previews-") && e !== Rh && await caches.delete(e);
			} catch {}
		})());
	}, "image/png");
}
async function Gh(e, t, n, r, i) {
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
var Kh = (0, L.createContext)(() => () => void 0), qh = class extends L.Component {
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
function Jh({ onError: e }) {
	let t = be((e) => e.gl);
	return (0, L.useEffect)(() => {
		let n = t.domElement;
		return n.addEventListener("webglcontextlost", e), () => n.removeEventListener("webglcontextlost", e);
	}, [t, e]), null;
}
function Yh({ request: e, aspect: t, done: n }) {
	let { invalidate: r, size: i } = be(), a = (0, L.useRef)(new $e(-1, 1, 1, -1, .01, 100)), o = (0, L.useRef)(!1), { min: s, max: c } = e.entry.definition.bounds, l = Math.max(...c.map((e, t) => e - s[t]), .01), u = s.map((e, t) => (e + c[t]) / 2), d = c.map((e, t) => (e - s[t]) / l);
	return (0, L.useLayoutEffect)(() => {
		let { min: t, max: n } = e.entry.definition.bounds, s = Math.max(...n.map((e, n) => e - t[n]), .01), c = n.map((e, n) => (e - t[n]) / s), l = a.current;
		l.position.set(3, 2.6, 4), l.lookAt(0, 0, 0), l.updateMatrixWorld(!0);
		let u = 0, d = 0;
		for (let e of [-1, 1]) for (let t of [-1, 1]) for (let n of [-1, 1]) {
			let r = new I(e * c[0] / 2, t * c[1] / 2, n * c[2] / 2).applyMatrix4(l.matrixWorldInverse);
			u = Math.max(u, Math.abs(r.x)), d = Math.max(d, Math.abs(r.y));
		}
		let f = i.width / i.height, p = Math.max(d, u / f, .1) * 1.3;
		l.left = -p * f, l.right = p * f, l.top = p, l.bottom = -p, l.updateProjectionMatrix(), o.current = !1, r();
	}, [
		e,
		i.width,
		i.height,
		r
	]), N(({ gl: r, scene: s }) => {
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
					a.drawImage(r.domElement, 0, 0, t.width, t.height), e.cacheKey && Wh(e.cacheKey.replace(/[^/]+$/, `${t.width}:${t.height}`), t);
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
				children: /* @__PURE__ */ (0, U.jsx)(Lh, { entry: e.entry })
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
			children: [/* @__PURE__ */ (0, U.jsx)("circleGeometry", { args: [1, 40] }), /* @__PURE__ */ (0, U.jsx)(P, {
				color: "#aebba0",
				transparent: !0,
				opacity: .045,
				depthWrite: !1
			})]
		}, e))
	] });
}
function Xh({ children: e, scrollRoot: t, enabled: n }) {
	let r = (0, L.useRef)(/* @__PURE__ */ new Map()), i = (0, L.useRef)(null), a = (0, L.useRef)(!0), [o, s] = (0, L.useState)(null), [c, l] = (0, L.useState)(0), [u, d] = (0, L.useState)(!1), f = (0, L.useCallback)(() => {
		if (!a.current || i.current) return;
		let e = r.current.values().next().value;
		e && (r.current.delete(e.canvas), i.current = e, s(e), l((e) => e + 1));
	}, []), p = (0, L.useCallback)((e, t) => {
		i.current === e && (e.canvas.isConnected && e.report(t), queueMicrotask(() => {
			!a.current || i.current !== e || (i.current = null, s(null), f());
		}));
	}, [f]);
	(0, L.useEffect)(() => {
		a.current = !0;
		let e = r.current;
		return () => {
			a.current = !1, e.clear(), i.current = null;
		};
	}, []), (0, L.useEffect)(() => {
		n || (r.current.clear(), i.current = null, s(null), d(!1));
	}, [n]);
	let m = (0, L.useCallback)(() => {
		i.current?.report(!0), i.current = null, r.current.forEach((e) => e.report(!0)), r.current.clear(), s(null), d(!0);
	}, []), h = (0, L.useCallback)((e) => {
		if (!n || u) return u && e.report(!0), () => void 0;
		let i = !1, a = !1, o = 0, s = "", c = () => {
			if (!i) return;
			let t = e.canvas.getBoundingClientRect(), n = Math.min(globalThis.devicePixelRatio || 1, 1.5), c = Math.max(1, Math.round(t.width * n)), l = Math.max(1, Math.round(t.height * n)), u = `${c}:${l}`;
			if (t.width <= 0 || t.height <= 0 || u === s) return;
			s = u;
			let d = ++o, p = new URL(`/__cabane_preview__/${encodeURIComponent(e.entry.key)}/${e.transparent ? "clear" : "opaque"}/${u}`, location.origin).href, m = () => !a && i && o === d && e.canvas.isConnected;
			(async () => {
				let t = await Uh(p);
				if (m()) {
					if (t && await Gh(t, e.canvas, c, l, m)) {
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
	return /* @__PURE__ */ (0, U.jsxs)(Kh.Provider, {
		value: h,
		children: [e, n && !u && c > 0 && /* @__PURE__ */ (0, U.jsx)("div", {
			"aria-hidden": "true",
			className: "catalog-thumbnail-renderer",
			style: {
				width: 160 * _,
				height: 160
			},
			children: /* @__PURE__ */ (0, U.jsx)(qh, {
				onError: m,
				children: /* @__PURE__ */ (0, U.jsxs)(Pe, {
					events: Ze,
					orthographic: !0,
					frameloop: "demand",
					dpr: Math.min(globalThis.devicePixelRatio || 1, 1.5),
					gl: {
						antialias: !0,
						alpha: !0,
						powerPreference: "low-power"
					},
					fallback: /* @__PURE__ */ (0, U.jsx)("span", { children: "Preview unavailable" }),
					children: [/* @__PURE__ */ (0, U.jsx)(Jh, { onError: m }), o && /* @__PURE__ */ (0, U.jsx)(qh, {
						onError: () => p(o, !0),
						children: /* @__PURE__ */ (0, U.jsx)(Yh, {
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
function Zh({ entry: e, showAdd: t = !0, fallback: n, transparent: r = !1 }) {
	let i = (0, L.useRef)(null), a = (0, L.useContext)(Kh), [o, s] = (0, L.useState)(!1);
	return (0, L.useEffect)(() => {
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
function Qh({ children: e }) {
	let t = (0, L.useRef)(null);
	return /* @__PURE__ */ (0, U.jsx)(Xh, {
		scrollRoot: t,
		enabled: !0,
		children: e
	});
}
function $h({ modelId: e, models: t }) {
	let n = t[e], r = (0, L.useMemo)(() => n ? {
		key: `device:${e}`,
		kind: "device",
		modelId: e,
		definition: n
	} : null, [n, e]);
	return /* @__PURE__ */ (0, U.jsx)("span", {
		className: "scene-action-device-preview",
		children: r ? /* @__PURE__ */ (0, U.jsx)(Zh, {
			entry: r,
			showAdd: !1,
			transparent: !0,
			fallback: /* @__PURE__ */ (0, U.jsx)(Fm, { name: "devices" })
		}) : /* @__PURE__ */ (0, U.jsx)(Fm, { name: "devices" })
	});
}
//#endregion
export { Am as A, Cn as B, Fm as C, Em as D, Mm as E, En as F, rt as H, yn as I, bn as L, Cm as M, Ip as N, Om as O, On as P, vn as R, zm as S, jm as T, xn as V, Gm as _, Ph as a, Bm as b, Oh as c, $m as d, Ym as f, Wm as g, qm as h, Xh as i, Tm as j, Dm as k, Xm as l, Km as m, Qh as n, Nh as o, Jm as p, Zh as r, Mh as s, $h as t, Zm as u, Vm as v, Nm as w, Rm as x, Hm as y, wn as z };
