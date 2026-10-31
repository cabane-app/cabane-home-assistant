import { r as e } from "./assets/rolldown-runtime-B0aSnxlc.js";
import { $ as t, Aa as n, Cr as r, D as i, Dr as a, Er as o, Ft as s, G as c, In as l, Ir as u, It as d, Jt as f, K as p, Lr as m, Lt as h, Ma as g, Na as _, Or as v, Pt as y, Q as b, Rr as x, Rt as S, W as C, X as w, Z as T, _n as E, an as D, cn as O, en as k, hr as A, in as j, l as M, q as N, tt as ee, vr as P, w as te, wa as ne, wr as F, xr as I, zr as re, zt as ie } from "./assets/LaserIcon--oJ4-Fng.js";
import { A as L, B as R, E as z, H as ae, I as oe, K as se, L as ce, N as B, O as le, P as V, R as ue, S as de, U as fe, W as pe, _ as me, d as he, f as ge, g as _e, h as ve, j as ye, k as H, m as be, n as xe, s as Se, t as Ce, v as we, z as Te } from "./assets/ShortcutDeviceIcon-DQVpR63m.js";
//#region node_modules/react-router/dist/development/chunk-BV7QT456.mjs
var U = /* @__PURE__ */ e(_(), 1), Ee = (e) => {
	throw TypeError(e);
}, De = (e, t, n) => t.has(e) || Ee("Cannot " + n), W = (e, t, n) => (De(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Oe = (e, t, n) => t.has(e) ? Ee("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ke = (e, t, n, r) => (De(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Ae = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i, je = /^[\\/]{2}/;
function Me(e, t) {
	return t + e.replace(/\\/g, "/");
}
function Ne(e) {
	return typeof e == "object" && !!e && "pathname" in e && "search" in e && "hash" in e && "state" in e && "key" in e;
}
function Pe(e = {}) {
	let { initialEntries: t = ["/"], initialIndex: n, v5Compat: r = !1 } = e, i;
	i = t.map((e, t) => u(e, typeof e == "string" ? null : e.state, t === 0 ? "default" : void 0, typeof e == "string" ? void 0 : e.mask));
	let a = c(n ?? i.length - 1), o = "POP", s = null;
	function c(e) {
		return Math.min(Math.max(e, 0), i.length - 1);
	}
	function l() {
		return i[a];
	}
	function u(e, t = null, n, r) {
		let a = Ie(i ? l().pathname : "/", e, t, n, r);
		return K(a.pathname.charAt(0) === "/", `relative pathnames are not supported in memory history: ${JSON.stringify(e)}`), a;
	}
	function d(e) {
		return typeof e == "string" ? e : q(e);
	}
	return {
		get index() {
			return a;
		},
		get action() {
			return o;
		},
		get location() {
			return l();
		},
		createHref: d,
		createURL(e) {
			return new URL(d(e), "http://localhost");
		},
		encodeLocation(e) {
			let t = typeof e == "string" ? Le(e) : e;
			return {
				pathname: t.pathname || "",
				search: t.search || "",
				hash: t.hash || ""
			};
		},
		push(e, t) {
			o = "PUSH";
			let n = Ne(e) ? e : u(e, t);
			a += 1, i.splice(a, i.length, n), r && s && s({
				action: o,
				location: n,
				delta: 1
			});
		},
		replace(e, t) {
			o = "REPLACE";
			let n = Ne(e) ? e : u(e, t);
			i[a] = n, r && s && s({
				action: o,
				location: n,
				delta: 0
			});
		},
		go(e) {
			o = "POP";
			let t = c(a + e), n = i[t];
			a = t, s && s({
				action: o,
				location: n,
				delta: e
			});
		},
		listen(e) {
			return s = e, () => {
				s = null;
			};
		}
	};
}
function G(e, t) {
	if (e === !1 || e == null) throw Error(t);
}
function K(e, t) {
	if (!e) {
		typeof console < "u" && console.warn(t);
		try {
			throw Error(t);
		} catch {}
	}
}
function Fe() {
	return Math.random().toString(36).substring(2, 10);
}
function Ie(e, t, n = null, r, i) {
	return {
		pathname: typeof e == "string" ? e : e.pathname,
		search: "",
		hash: "",
		...typeof t == "string" ? Le(t) : t,
		state: n,
		key: t && t.key || r || Fe(),
		mask: i
	};
}
function q({ pathname: e = "/", search: t = "", hash: n = "" }) {
	return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n), e;
}
function Le(e) {
	let t = {};
	if (e) {
		let n = e.indexOf("#");
		n >= 0 && (t.hash = e.substring(n), e = e.substring(0, n));
		let r = e.indexOf("?");
		r >= 0 && (t.search = e.substring(r), e = e.substring(0, r)), e && (t.pathname = e);
	}
	return t;
}
function Re(e, t, n = !1) {
	let r = "http://localhost";
	e && (r = e.location.origin === "null" ? e.location.href : e.location.origin), G(r, "No window.location.(origin|href) available to create URL");
	let i = typeof t == "string" ? t : q(t);
	return i = i.replace(/ $/, "%20"), !n && je.test(i) && (i = r + i), new URL(i, r);
}
var ze, Be = class {
	constructor(e) {
		if (Oe(this, ze, /* @__PURE__ */ new Map()), e) for (let [t, n] of e) this.set(t, n);
	}
	get(e) {
		if (W(this, ze).has(e)) return W(this, ze).get(e);
		if (e.defaultValue !== void 0) return e.defaultValue;
		throw Error("No value found for context");
	}
	set(e, t) {
		W(this, ze).set(e, t);
	}
};
ze = /* @__PURE__ */ new WeakMap();
var Ve = /* @__PURE__ */ new Set([
	"lazy",
	"caseSensitive",
	"path",
	"id",
	"index",
	"children"
]);
function He(e) {
	return Ve.has(e);
}
var Ue = /* @__PURE__ */ new Set([
	"lazy",
	"caseSensitive",
	"path",
	"id",
	"index",
	"middleware",
	"children"
]);
function We(e) {
	return Ue.has(e);
}
function Ge(e) {
	return e.index === !0;
}
function Ke(e, t, n = [], r = {}, i = !1) {
	return e.map((e, a) => {
		let o = [...n, String(a)], s = typeof e.id == "string" ? e.id : o.join("-");
		if (G(e.index !== !0 || !e.children, "Cannot specify children on an index route"), G(i || !r[s], `Found a route id collision on id "${s}".  Route id's must be globally unique within Data Router usages`), Ge(e)) {
			let n = {
				...e,
				id: s
			};
			return r[s] = qe(n, t(n)), n;
		}
		{
			let n = {
				...e,
				id: s,
				children: void 0
			};
			return r[s] = qe(n, t(n)), e.children && (n.children = Ke(e.children, t, o, r, i)), n;
		}
	});
}
function qe(e, t) {
	return Object.assign(e, {
		...t,
		...typeof t.lazy == "object" && t.lazy != null ? { lazy: {
			...e.lazy,
			...t.lazy
		} } : {}
	});
}
function Je(e, t, n = "/") {
	return Ye(e, t, n, !1);
}
function Ye(e, t, n, r, i) {
	let a = J((typeof t == "string" ? Le(t) : t).pathname || "/", n);
	if (a == null) return null;
	let o = i ?? Ze(e), s = null, c = mt(a);
	for (let e = 0; s == null && e < o.length; ++e) s = ut(o[e], c, r);
	return s;
}
function Xe(e, t) {
	let { route: n, pathname: r, params: i } = e;
	return {
		id: n.id,
		pathname: r,
		params: i,
		data: t[n.id],
		loaderData: t[n.id],
		handle: n.handle
	};
}
function Ze(e) {
	let t = Qe(e);
	return et(t), t;
}
function Qe(e, t = [], n = [], r = "", i = !1) {
	let a = (e, a, o = i, s) => {
		let c = {
			relativePath: s === void 0 ? e.path || "" : s,
			caseSensitive: e.caseSensitive === !0,
			childrenIndex: a,
			route: e
		};
		if (c.relativePath.startsWith("/")) {
			if (!c.relativePath.startsWith(r) && o) return;
			G(c.relativePath.startsWith(r), `Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), c.relativePath = c.relativePath.slice(r.length);
		}
		let l = wt([r, c.relativePath]), u = n.concat(c);
		e.children && e.children.length > 0 && (G(e.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${l}".`), Qe(e.children, t, u, l, o)), !(e.path == null && !e.index) && t.push({
			path: l,
			score: ct(l, e.index),
			routesMeta: u.map((e, t) => {
				let [n, r] = pt(e.relativePath, e.caseSensitive, t === u.length - 1);
				return {
					...e,
					matcher: n,
					compiledParams: r
				};
			})
		});
	};
	return e.forEach((e, t) => {
		if (e.path === "" || !e.path?.includes("?")) a(e, t);
		else for (let n of $e(e.path)) a(e, t, !0, n);
	}), t;
}
function $e(e) {
	let t = e.split("/");
	if (t.length === 0) return [];
	let [n, ...r] = t, i = n.endsWith("?"), a = n.replace(/\?$/, "");
	if (r.length === 0) return i ? [a, ""] : [a];
	let o = $e(r.join("/")), s = [];
	return s.push(...o.map((e) => e === "" ? a : [a, e].join("/"))), i && s.push(...o), s.map((t) => e.startsWith("/") && t === "" ? "/" : t);
}
function et(e) {
	e.sort((e, t) => e.score === t.score ? lt(e.routesMeta.map((e) => e.childrenIndex), t.routesMeta.map((e) => e.childrenIndex)) : t.score - e.score);
}
var tt = /^:[\w-]+$/, nt = 3, rt = 2, it = 1, at = 10, ot = -2, st = (e) => e === "*";
function ct(e, t) {
	let n = e.split("/"), r = n.length;
	return n.some(st) && (r += ot), t && (r += rt), n.filter((e) => !st(e)).reduce((e, t) => e + (tt.test(t) ? nt : t === "" ? it : at), r);
}
function lt(e, t) {
	return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function ut(e, t, n = !1) {
	let { routesMeta: r } = e, i = {}, a = "/", o = [];
	for (let e = 0; e < r.length; ++e) {
		let s = r[e], c = e === r.length - 1, l = a === "/" ? t : t.slice(a.length) || "/", u = {
			path: s.relativePath,
			caseSensitive: s.caseSensitive,
			end: c
		}, d = s.matcher && s.compiledParams ? ft(u, l, s.matcher, s.compiledParams) : dt(u, l), f = s.route;
		if (!d && c && n && !r[r.length - 1].route.index && (d = dt({
			path: s.relativePath,
			caseSensitive: s.caseSensitive,
			end: !1
		}, l)), !d) return null;
		Object.assign(i, d.params), o.push({
			params: i,
			pathname: wt([a, d.pathname]),
			pathnameBase: Et(wt([a, d.pathnameBase])),
			route: f
		}), d.pathnameBase !== "/" && (a = wt([a, d.pathnameBase]));
	}
	return o;
}
function dt(e, t) {
	typeof e == "string" && (e = {
		path: e,
		caseSensitive: !1,
		end: !0
	});
	let [n, r] = pt(e.path, e.caseSensitive, e.end);
	return ft(e, t, n, r);
}
function ft(e, t, n, r) {
	let i = t.match(n);
	if (!i) return null;
	let a = i[0], o = Tt(a, 1), s = i.slice(1);
	return {
		params: r.reduce((e, { paramName: t, isOptional: n }, r) => {
			if (t === "*") {
				let e = s[r] || "";
				o = Tt(a.slice(0, a.length - e.length), 1);
			}
			let i = s[r];
			return e[t] = n && !i ? void 0 : (i || "").replace(/%2F/g, "/"), e;
		}, {}),
		pathname: a,
		pathnameBase: o,
		pattern: e
	};
}
function pt(e, t = !1, n = !0) {
	K(e === "*" || !e.endsWith("*") || e.endsWith("/*"), `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`);
	let r = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (e, t, n, i, a) => {
		if (r.push({
			paramName: t,
			isOptional: n != null
		}), n) {
			let t = a.charAt(i + e.length);
			return t && t !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
		}
		return "/([^\\/]+)";
	}).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
	return e.endsWith("*") ? (r.push({ paramName: "*" }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r];
}
function mt(e) {
	try {
		return e.split("/").map((e) => decodeURIComponent(e).replace(/\//g, "%2F")).join("/");
	} catch (t) {
		return K(!1, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`), e;
	}
}
function J(e, t) {
	if (t === "/") return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
	return r && r !== "/" ? null : e.slice(n) || "/";
}
function ht({ basename: e, pathname: t }) {
	return t === "/" ? e : wt([e, t]);
}
var gt = (e) => Ae.test(e);
function _t(e, t = "/") {
	let { pathname: n, search: r = "", hash: i = "" } = typeof e == "string" ? Le(e) : e, a;
	return n ? (n = Ct(n), a = n.startsWith("/") || n.startsWith("\\") ? vt(n.substring(1), "/") : vt(n, t)) : a = t, {
		pathname: a,
		search: Dt(r),
		hash: Ot(i)
	};
}
function vt(e, t) {
	let n = Tt(t).split("/");
	return e.split("/").forEach((e) => {
		e === ".." ? n.length > 1 && n.pop() : e !== "." && n.push(e);
	}), n.length > 1 ? n.join("/") : "/";
}
function yt(e, t, n, r) {
	return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function bt(e) {
	return e.filter((e, t) => t === 0 || e.route.path && e.route.path.length > 0);
}
function xt(e) {
	let t = bt(e);
	return t.map((e, n) => n === t.length - 1 ? e.pathname : e.pathnameBase);
}
function St(e, t, n, r = !1) {
	let i;
	typeof e == "string" ? i = Le(e) : (i = { ...e }, G(!i.pathname || !i.pathname.includes("?"), yt("?", "pathname", "search", i)), G(!i.pathname || !i.pathname.includes("#"), yt("#", "pathname", "hash", i)), G(!i.search || !i.search.includes("#"), yt("#", "search", "hash", i)));
	let a = e === "" || i.pathname === "", o = a ? "/" : i.pathname, s;
	if (o == null) s = n;
	else {
		let e = t.length - 1;
		if (!r && o.startsWith("..")) {
			let t = o.split("/");
			for (; t[0] === "..";) t.shift(), --e;
			i.pathname = t.join("/");
		}
		s = e >= 0 ? t[e] : "/";
	}
	let c = _t(i, s), l = o && o !== "/" && o.endsWith("/"), u = (a || o === ".") && n.endsWith("/");
	return !c.pathname.endsWith("/") && (l || u) && (c.pathname += "/"), c;
}
var Ct = (e) => e.replace(/[\\/]{2,}/g, "/"), wt = (e) => Ct(e.join("/"));
function Tt(e, t = 0) {
	let n = e.length;
	for (; n > t && e.charCodeAt(n - 1) === 47;) n--;
	return n === e.length ? e : e.slice(0, n);
}
var Et = (e) => Tt(e).replace(/^\/*/, "/"), Dt = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Ot = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, kt = class {
	constructor(e, t, n, r = !1) {
		this.status = e, this.statusText = t || "", this.internal = r, n instanceof Error ? (this.data = n.toString(), this.error = n) : this.data = n;
	}
};
function At(e) {
	return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
function jt(e) {
	return wt(e.map((e) => e.route.path).filter(Boolean)) || "/";
}
var Mt = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function Nt(e, t) {
	let n = e;
	if (typeof n != "string" || !Ae.test(n)) return {
		absoluteURL: void 0,
		isExternal: !1,
		to: n
	};
	let r = n, i = !1;
	if (Mt) try {
		let e = new URL(window.location.href), r = je.test(n) ? new URL(Me(n, e.protocol)) : new URL(n), a = J(r.pathname, t);
		r.origin === e.origin && a != null ? n = a + r.search + r.hash : i = !0;
	} catch {
		K(!1, `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
	}
	return {
		absoluteURL: r,
		isExternal: i,
		to: n
	};
}
var Pt = Symbol("Uninstrumented");
function Ft(e, t) {
	let n = {
		lazy: [],
		"lazy.loader": [],
		"lazy.action": [],
		"lazy.middleware": [],
		middleware: [],
		loader: [],
		action: []
	};
	e.forEach((e) => e({
		id: t.id,
		index: t.index,
		path: t.path,
		instrument(e) {
			let t = Object.keys(n);
			for (let r of t) e[r] && n[r].push(e[r]);
		}
	}));
	let r = {};
	if (typeof t.lazy == "function" && n.lazy.length > 0) {
		let e = Lt(n.lazy, t.lazy, () => void 0);
		e && (r.lazy = e);
	}
	if (typeof t.lazy == "object") {
		let e = t.lazy;
		[
			"middleware",
			"loader",
			"action"
		].forEach((t) => {
			let i = e[t], a = n[`lazy.${t}`];
			if (typeof i == "function" && a.length > 0) {
				let e = Lt(a, i, () => void 0);
				e && (r.lazy = Object.assign(r.lazy || {}, { [t]: e }));
			}
		});
	}
	return ["loader", "action"].forEach((e) => {
		let i = t[e];
		if (typeof i == "function" && n[e].length > 0) {
			let t = i[Pt] ?? i, a = Lt(n[e], t, (...e) => zt(e[0]));
			a && (e === "loader" && t.hydrate === !0 && (a.hydrate = !0), a[Pt] = t, r[e] = a);
		}
	}), t.middleware && t.middleware.length > 0 && n.middleware.length > 0 && (r.middleware = t.middleware.map((e) => {
		let t = e[Pt] ?? e, r = Lt(n.middleware, t, (...e) => zt(e[0]));
		return r ? (r[Pt] = t, r) : e;
	})), r;
}
function It(e, t) {
	let n = {
		navigate: [],
		fetch: []
	};
	if (t.forEach((e) => e({ instrument(e) {
		let t = Object.keys(e);
		for (let r of t) e[r] && n[r].push(e[r]);
	} })), n.navigate.length > 0) {
		let t = e.navigate[Pt] ?? e.navigate, r = Lt(n.navigate, t, (...t) => {
			let [n, r] = t;
			return {
				to: typeof n == "number" || typeof n == "string" ? n : n ? q(n) : ".",
				...Bt(e, r ?? {})
			};
		});
		r && (r[Pt] = t, e.navigate = r);
	}
	if (n.fetch.length > 0) {
		let t = e.fetch[Pt] ?? e.fetch, r = Lt(n.fetch, t, (...t) => {
			let [n, , r, i] = t;
			return {
				href: r ?? ".",
				fetcherKey: n,
				...Bt(e, i ?? {})
			};
		});
		r && (r[Pt] = t, e.fetch = r);
	}
	return e;
}
function Lt(e, t, n) {
	return e.length === 0 ? null : async (...r) => {
		let i = await Rt(e, n(...r), () => t(...r), e.length - 1);
		if (i.type === "error") throw i.value;
		return i.value;
	};
}
async function Rt(e, t, n, r) {
	let i = e[r], a;
	if (i) {
		let o, s = async () => (o ? console.error("You cannot call instrumented handlers more than once") : o = Rt(e, t, n, r - 1), a = await o, G(a, "Expected a result"), a.type === "error" && a.value instanceof Error ? {
			status: "error",
			error: a.value
		} : {
			status: "success",
			error: void 0
		});
		try {
			await i(s, t);
		} catch (e) {
			console.error("An instrumentation function threw an error:", e);
		}
		o || await s(), await o;
	} else try {
		a = {
			type: "success",
			value: await n()
		};
	} catch (e) {
		a = {
			type: "error",
			value: e
		};
	}
	return a || {
		type: "error",
		value: /* @__PURE__ */ Error("No result assigned in instrumentation chain.")
	};
}
function zt(e) {
	let { request: t, context: n, params: r, pattern: i } = e;
	return {
		request: Vt(t),
		params: { ...r },
		pattern: i,
		context: Ht(n)
	};
}
function Bt(e, t) {
	return {
		currentUrl: q(e.state.location),
		..."formMethod" in t ? { formMethod: t.formMethod } : {},
		..."formEncType" in t ? { formEncType: t.formEncType } : {},
		..."formData" in t ? { formData: t.formData } : {},
		..."body" in t ? { body: t.body } : {}
	};
}
function Vt(e) {
	return {
		method: e.method,
		url: e.url,
		headers: { get: (...t) => e.headers.get(...t) }
	};
}
function Ht(e) {
	if (Wt(e)) {
		let t = { ...e };
		return Object.freeze(t), t;
	}
	return { get: (t) => e.get(t) };
}
var Ut = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Wt(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Object.getOwnPropertyNames(t).sort().join("\0") === Ut;
}
var Gt = new URL("http://localhost");
function Kt(e) {
	if (e.createURL) return e.createURL("/");
	try {
		return new URL(e.createHref("/"), Gt);
	} catch {
		return Gt;
	}
}
function qt(e, t) {
	return e.origin === t.origin && (e.origin !== "null" || e.protocol === t.protocol && e.host === t.host);
}
function Jt(e, t) {
	if (e.startsWith("//")) return !0;
	let n = t.protocol.toLowerCase();
	return e.toLowerCase().startsWith(n) ? t.host === "" || e.slice(n.length).startsWith("//") : !1;
}
function Yt(e, t, n, r) {
	let i = null;
	try {
		i = e == null ? null : new URL(e, n);
	} catch {}
	let a = new URL(t, n), o = i != null && !qt(i, n), s = !qt(a, n);
	if (r === "reject") {
		if (o || s) throw Error("External navigation is not allowed");
	} else if (s && (i == null || !Jt(e, i) || !qt(i, a))) throw Error("External navigation is not allowed");
}
var Xt = [
	"POST",
	"PUT",
	"PATCH",
	"DELETE"
], Zt = new Set(Xt), Qt = ["GET", ...Xt], $t = new Set(Qt), en = /* @__PURE__ */ new Set([
	301,
	302,
	303,
	307,
	308
]), tn = /* @__PURE__ */ new Set([307, 308]), nn = {
	state: "idle",
	location: void 0,
	matches: void 0,
	historyAction: void 0,
	formMethod: void 0,
	formAction: void 0,
	formEncType: void 0,
	formData: void 0,
	json: void 0,
	text: void 0
}, rn = {
	state: "idle",
	data: void 0,
	formMethod: void 0,
	formAction: void 0,
	formEncType: void 0,
	formData: void 0,
	json: void 0,
	text: void 0
}, an = {
	state: "unblocked",
	proceed: void 0,
	reset: void 0,
	location: void 0
}, on = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }), sn = "remix-router-transitions", cn = Symbol("ResetLoaderData"), ln, un, dn, fn, pn = class {
	constructor(e) {
		Oe(this, ln), Oe(this, un), Oe(this, dn), Oe(this, fn), ke(this, ln, e), ke(this, un, Ze(e));
	}
	get stableRoutes() {
		return W(this, ln);
	}
	get activeRoutes() {
		return W(this, dn) ?? W(this, ln);
	}
	get branches() {
		return W(this, fn) ?? W(this, un);
	}
	get hasHMRRoutes() {
		return W(this, dn) != null;
	}
	setRoutes(e) {
		ke(this, ln, e), ke(this, un, Ze(e));
	}
	setHmrRoutes(e) {
		ke(this, dn, e), ke(this, fn, Ze(e));
	}
	commitHmrRoutes() {
		W(this, dn) && (ke(this, ln, W(this, dn)), ke(this, un, W(this, fn)), ke(this, dn, void 0), ke(this, fn, void 0));
	}
};
ln = /* @__PURE__ */ new WeakMap(), un = /* @__PURE__ */ new WeakMap(), dn = /* @__PURE__ */ new WeakMap(), fn = /* @__PURE__ */ new WeakMap();
function mn(e) {
	let t = e.window ? e.window : typeof window < "u" ? window : void 0, n = t !== void 0 && t.document !== void 0 && t.document.createElement !== void 0;
	G(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
	let r = e.hydrationRouteProperties || [], i = e.mapRouteProperties || on, a = i;
	if (e.instrumentations) {
		let t = e.instrumentations;
		a = (e) => ({
			...i(e),
			...Ft(t.map((e) => e.route).filter(Boolean), e)
		});
	}
	let o = {}, s = new pn(Ke(e.routes, a, void 0, o)), c = e.basename || "/";
	c.startsWith("/") || (c = `/${c}`);
	let l = e.dataStrategy || jn, u = { ...e.future }, d = null, f = /* @__PURE__ */ new Set(), p = null, m = null, h = null, g = null, _ = e.hydrationData != null, v = Ye(s.activeRoutes, e.history.location, c, !1, s.branches), y = !1, b = null, x, S;
	if (v == null && !e.patchRoutesOnNavigation) {
		let t = nr(404, { pathname: e.history.location.pathname }), { matches: n, route: r } = tr(s.activeRoutes);
		x = !0, S = !x, v = n, b = { [r.id]: t };
	} else if (v && !e.hydrationData && We(v, s.activeRoutes, e.history.location.pathname).active && (v = null), !v) {
		x = !1, S = !x, v = [];
		let t = We(null, s.activeRoutes, e.history.location.pathname);
		t.active && t.matches && (y = !0, v = t.matches);
	} else if (v.some((e) => e.route.lazy)) x = !1, S = !x;
	else if (!v.some((e) => yn(e.route))) x = !0, S = !x;
	else {
		let t = e.hydrationData ? e.hydrationData.loaderData : null, n = e.hydrationData ? e.hydrationData.errors : null, r = v;
		if (n) {
			let e = v.findIndex((e) => n[e.route.id] !== void 0);
			r = r.slice(0, e + 1);
		}
		S = !1, x = !0, r.forEach((e) => {
			let r = bn(e.route, t, n);
			S ||= r.renderFallback, x &&= !r.shouldLoad;
		});
	}
	let C, w = {
		historyAction: e.history.action,
		location: e.history.location,
		matches: v,
		initialized: x,
		renderFallback: S,
		navigation: nn,
		restoreScrollPosition: e.hydrationData == null && null,
		preventScrollReset: !1,
		revalidation: "idle",
		loaderData: e.hydrationData && e.hydrationData.loaderData || {},
		actionData: e.hydrationData && e.hydrationData.actionData || null,
		errors: e.hydrationData && e.hydrationData.errors || b,
		fetchers: /* @__PURE__ */ new Map(),
		blockers: /* @__PURE__ */ new Map()
	}, T = "POP", E = null, D = !1, O, k = !1, A = /* @__PURE__ */ new Map(), j = null, M = !1, N = !1, ee = /* @__PURE__ */ new Set(), P = /* @__PURE__ */ new Map(), te = 0, ne = -1, F = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Set(), re = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Map(), z, ae = null;
	function oe() {
		if (d = e.history.listen(({ action: t, location: n, delta: r }) => {
			if (z) {
				z(), z = void 0;
				return;
			}
			K(R.size === 0 || r != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
			let i = Pe({
				currentLocation: w.location,
				nextLocation: n,
				historyAction: t
			});
			if (i && r != null) {
				let t = new Promise((e) => {
					z = e;
				});
				e.history.go(r * -1), Ne(i, {
					state: "blocked",
					location: n,
					proceed() {
						Ne(i, {
							state: "proceeding",
							proceed: void 0,
							reset: void 0,
							location: n
						}), t.then(() => e.history.go(r));
					},
					reset() {
						let e = new Map(w.blockers);
						e.set(i, an), B({ blockers: e });
					}
				}), E?.resolve(), E = null;
				return;
			}
			return de(t, n);
		}), n) {
			Tr(t, A);
			let e = () => Er(t, A);
			t.addEventListener("pagehide", e), j = () => t.removeEventListener("pagehide", e);
		}
		return w.initialized || de("POP", w.location, { initialHydration: !0 }), C;
	}
	function se() {
		d && d(), j && j(), f.clear(), O && O.abort(), w.fetchers.forEach((e, t) => U(w.fetchers, t)), w.blockers.forEach((e, t) => Me(t));
	}
	function ce(e) {
		if (f.add(e), p) {
			let { newErrors: t } = p;
			p = null, e(w, {
				deletedFetchers: [],
				newErrors: t,
				viewTransitionOpts: void 0,
				flushSync: !1
			});
		}
		return () => f.delete(e);
	}
	function B(e, t = {}) {
		e.matches &&= e.matches.map((e) => {
			let t = o[e.route.id], n = e.route;
			return n.element !== t.element || n.errorElement !== t.errorElement || n.hydrateFallbackElement !== t.hydrateFallbackElement ? {
				...e,
				route: t
			} : e;
		}), w = {
			...w,
			...e
		};
		let n = [], r = [];
		w.fetchers.forEach((e, t) => {
			e.state === "idle" && (L.has(t) ? n.push(t) : r.push(t));
		}), L.forEach((e) => {
			!w.fetchers.has(e) && !P.has(e) && n.push(e);
		}), f.size === 0 && (p = { newErrors: e.errors ?? null }), [...f].forEach((r) => r(w, {
			deletedFetchers: n,
			newErrors: e.errors ?? null,
			viewTransitionOpts: t.viewTransitionOpts,
			flushSync: t.flushSync === !0
		})), n.forEach((e) => U(w.fetchers, e)), r.forEach((e) => w.fetchers.delete(e));
	}
	function le(t, n, { flushSync: r } = {}) {
		let i = w.actionData != null && w.navigation.formMethod != null && Y(w.navigation.formMethod) && w.navigation.state === "loading" && t.state?._isRedirect !== !0, a;
		a = n.actionData ? Object.keys(n.actionData).length > 0 ? n.actionData : null : i ? w.actionData : null;
		let o = n.loaderData ? Qn(w.loaderData, n.loaderData, n.matches || [], n.errors) : w.loaderData, c = w.blockers;
		c.size > 0 && (c = new Map(c), c.forEach((e, t) => c.set(t, an)));
		let l = !M && Ue(t, n.matches || w.matches), u = D === !0 || w.navigation.formMethod != null && Y(w.navigation.formMethod) && t.state?._isRedirect !== !0;
		s.commitHmrRoutes(), M || T === "POP" || (T === "PUSH" ? e.history.push(t, t.state) : T === "REPLACE" && e.history.replace(t, t.state));
		let d;
		if (T === "POP") {
			let e = A.get(w.location.pathname);
			e && e.has(t.pathname) ? d = {
				currentLocation: w.location,
				nextLocation: t
			} : A.has(t.pathname) && (d = {
				currentLocation: t,
				nextLocation: w.location
			});
		} else if (k) {
			let e = A.get(w.location.pathname);
			e ? e.add(t.pathname) : (e = /* @__PURE__ */ new Set([t.pathname]), A.set(w.location.pathname, e)), d = {
				currentLocation: w.location,
				nextLocation: t
			};
		}
		B({
			...n,
			actionData: a,
			loaderData: o,
			historyAction: T,
			location: t,
			initialized: !0,
			renderFallback: !1,
			navigation: nn,
			revalidation: "idle",
			restoreScrollPosition: l,
			preventScrollReset: u,
			blockers: c
		}, {
			viewTransitionOpts: d,
			flushSync: r === !0
		}), T = "POP", D = !1, k = !1, M = !1, N = !1, E?.resolve(), E = null, ae?.resolve(), ae = null;
	}
	async function V(t, n) {
		if (E?.resolve(), E = null, typeof t == "number") {
			E ||= Dr();
			let n = E.promise;
			return e.history.go(t), n;
		}
		let { path: r, submission: i, error: a } = _n(!1, gn(w.location, w.matches, c, t, n?.fromRouteId, n?.relative), n), o;
		if (n?.mask) {
			let t = typeof n.mask == "string" ? Le(n.mask) : {
				...w.location.mask,
				...n.mask
			};
			if (o = {
				pathname: t.pathname ?? "",
				search: t.search ?? "",
				hash: t.hash ?? ""
			}, je.test(o.pathname)) throw Error("External navigation is not allowed");
			o.pathname.startsWith("\\") && (o.pathname = o.pathname.replace(/^\\+/, "/")), Yt(typeof n.mask == "string" ? n.mask : q(n.mask), q(o), e.history.createURL("/"), "reject");
		}
		let s = w.location, l = Ie(s, r, n && n.state, void 0, o);
		l = {
			...l,
			...e.history.encodeLocation(l)
		}, Yt(t == null ? e.history.createHref(w.location) : typeof t == "string" ? t : q(t), e.history.createHref(l.mask || l), e.history.createURL("/"), "reject");
		let u = n && n.replace != null ? n.replace : void 0, d = "PUSH";
		u === !0 ? d = "REPLACE" : u === !1 || i != null && Y(i.formMethod) && i.formAction === w.location.pathname + w.location.search && (d = "REPLACE");
		let f = n && "preventScrollReset" in n ? n.preventScrollReset === !0 : void 0, p = (n && n.flushSync) === !0, m = Pe({
			currentLocation: s,
			nextLocation: l,
			historyAction: d
		});
		if (m) {
			Ne(m, {
				state: "blocked",
				location: l,
				proceed() {
					Ne(m, {
						state: "proceeding",
						proceed: void 0,
						reset: void 0,
						location: l
					}), V(t, n);
				},
				reset() {
					let e = new Map(w.blockers);
					e.set(m, an), B({ blockers: e });
				}
			});
			return;
		}
		await de(d, l, {
			submission: i,
			pendingError: a,
			preventScrollReset: f,
			replace: n && n.replace,
			enableViewTransition: n && n.viewTransition,
			flushSync: p,
			callSiteDefaultShouldRevalidate: n && n.defaultShouldRevalidate
		});
	}
	function ue() {
		ae ||= Dr(), xe(), B({ revalidation: "loading" });
		let e = ae.promise;
		return w.navigation.state === "submitting" ? e : w.navigation.state === "idle" ? (de(w.historyAction, w.location, { startUninterruptedRevalidation: !0 }), e) : (de(T || w.historyAction, w.navigation.location, {
			overrideNavigation: w.navigation,
			enableViewTransition: k === !0
		}), e);
	}
	async function de(t, n, r) {
		O && O.abort(), O = null, T = t, M = (r && r.startUninterruptedRevalidation) === !0, He(w.location, w.matches), D = (r && r.preventScrollReset) === !0, k = (r && r.enableViewTransition) === !0;
		let i = s.activeRoutes, a = r?.initialHydration && w.matches && w.matches.length > 0 && !y ? w.matches : Ye(i, n, c, !1, s.branches), o = (r && r.flushSync) === !0;
		if (a && w.initialized && !N && ar(w.location, n) && !(r && r.submission && Y(r.submission.formMethod))) {
			le(n, { matches: a }, { flushSync: o });
			return;
		}
		let l = We(a, i, n.pathname);
		if (l.active && l.matches && (a = l.matches), !a) {
			let { error: e, notFoundMatches: t, route: r } = Fe(n.pathname);
			le(n, {
				matches: t,
				loaderData: {},
				errors: { [r.id]: e }
			}, { flushSync: o });
			return;
		}
		let u = r && r.overrideNavigation ? {
			...r.overrideNavigation,
			matches: a,
			historyAction: t
		} : void 0;
		O = new AbortController();
		let d = Kn(e.history, n, O.signal, r && r.submission), f = e.getContext ? await e.getContext() : new Be(), p;
		if (r && r.pendingError) p = [er(a).route.id, {
			type: "error",
			error: r.pendingError
		}];
		else if (r && r.submission && Y(r.submission.formMethod)) {
			let i = await fe(d, n, r.submission, a, t, f, l.active, r && r.initialHydration === !0, {
				replace: r.replace,
				flushSync: o
			});
			if (i.shortCircuited) return;
			if (i.pendingActionResult) {
				let [e, t] = i.pendingActionResult;
				if (ur(t) && At(t.error) && t.error.status === 404) {
					O = null, le(n, {
						matches: i.matches,
						loaderData: {},
						errors: { [e]: t.error }
					});
					return;
				}
			}
			a = i.matches || a, p = i.pendingActionResult, u = br(n, a, t, r.submission), o = !1, l.active = !1, d = Kn(e.history, d.url, d.signal);
		}
		let { shortCircuited: m, matches: h, loaderData: g, errors: _, workingFetchers: v } = await pe(d, n, a, t, f, l.active, u, r && r.submission, r && r.fetcherSubmission, r && r.replace, r && r.initialHydration === !0, o, p, r && r.callSiteDefaultShouldRevalidate);
		m || (O = null, le(n, {
			matches: h || a,
			...$n(p),
			loaderData: g,
			errors: _,
			...v ? { fetchers: v } : {}
		}));
	}
	async function fe(t, n, i, l, u, d, f, p, m = {}) {
		if (xe(), B({ navigation: xr(n, l, u, i) }, { flushSync: m.flushSync === !0 }), f) {
			let e = await Ge(l, n.pathname, t.signal);
			if (e.type === "aborted") return { shortCircuited: !0 };
			if (e.type === "error") {
				if (e.partialMatches.length === 0) {
					let { matches: t, route: n } = tr(s.activeRoutes);
					return {
						matches: t,
						pendingActionResult: [n.id, {
							type: "error",
							error: e.error
						}]
					};
				}
				let t = er(e.partialMatches).route.id;
				return {
					matches: e.partialMatches,
					pendingActionResult: [t, {
						type: "error",
						error: e.error
					}]
				};
			}
			if (e.matches) l = e.matches;
			else {
				let { notFoundMatches: e, error: t, route: r } = Fe(n.pathname);
				return {
					matches: e,
					pendingActionResult: [r.id, {
						type: "error",
						error: t
					}]
				};
			}
		}
		let h, g = vr(l, n);
		if (!g.route.action && !g.route.lazy) h = {
			type: "error",
			error: nr(405, {
				method: t.method,
				pathname: n.pathname,
				routeId: g.route.id
			})
		};
		else {
			let e = await H(t, n, Ln(a, o, t, n, l, g, p ? [] : r, d), d, null);
			if (h = e[g.route.id], !h) {
				for (let t of l) if (e[t.route.id]) {
					h = e[t.route.id];
					break;
				}
			}
			if (t.signal.aborted) return { shortCircuited: !0 };
		}
		if (dr(h)) {
			let n;
			return n = m && m.replace != null ? m.replace : Gn(h.response.headers.get("Location"), new URL(t.url), c, e.history) === w.location.pathname + w.location.search, await ye(t, h, !0, {
				submission: i,
				replace: n
			}), { shortCircuited: !0 };
		}
		if (ur(h)) {
			let e = er(l, g.route.id);
			return (m && m.replace) !== !0 && (T = "PUSH"), {
				matches: l,
				pendingActionResult: [
					e.route.id,
					h,
					g.route.id
				]
			};
		}
		return {
			matches: l,
			pendingActionResult: [g.route.id, h]
		};
	}
	async function pe(t, n, i, l, u, d, f, p, m, h, g, _, v, y) {
		let b = f || br(n, i, l, p), x = p || m || yr(b), S = !M && !g;
		if (d) {
			if (S) {
				let e = me(v);
				B({
					navigation: b,
					...e === void 0 ? {} : { actionData: e }
				}, { flushSync: _ });
			}
			let e = await Ge(i, n.pathname, t.signal);
			if (e.type === "aborted") return { shortCircuited: !0 };
			if (e.type === "error") {
				if (e.partialMatches.length === 0) {
					let { matches: t, route: n } = tr(s.activeRoutes);
					return {
						matches: t,
						loaderData: {},
						errors: { [n.id]: e.error }
					};
				}
				let t = er(e.partialMatches).route.id;
				return {
					matches: e.partialMatches,
					loaderData: {},
					errors: { [t]: e.error }
				};
			}
			if (e.matches) i = e.matches;
			else {
				let { error: e, notFoundMatches: t, route: r } = Fe(n.pathname);
				return {
					matches: t,
					loaderData: {},
					errors: { [r.id]: e }
				};
			}
		}
		let C = s.activeRoutes, { dsMatches: T, revalidatingFetchers: E } = vn(t, u, a, o, e.history, w, i, x, n, g ? [] : r, g === !0, N, ee, L, re, I, C, c, e.patchRoutesOnNavigation != null, s.branches, v, y);
		if (ne = ++te, !e.dataStrategy && !T.some((e) => e.shouldLoad) && !T.some((e) => e.route.middleware && e.route.middleware.length > 0) && E.length === 0) {
			let e = new Map(w.fetchers), t = Oe(e);
			return le(n, {
				matches: i,
				loaderData: {},
				errors: v && ur(v[1]) ? { [v[0]]: v[1].error } : null,
				...$n(v),
				...t ? { fetchers: e } : {}
			}, { flushSync: _ }), { shortCircuited: !0 };
		}
		if (S) {
			let e = {};
			if (!d) {
				e.navigation = b;
				let t = me(v);
				t !== void 0 && (e.actionData = t);
			}
			E.length > 0 && (e.fetchers = he(E)), B(e, { flushSync: _ });
		}
		E.forEach((e) => {
			De(e.key), e.controller && P.set(e.key, e.controller);
		});
		let D = () => E.forEach((e) => De(e.key));
		O && O.signal.addEventListener("abort", D);
		let { loaderResults: k, fetcherResults: A } = await be(T, E, t, n, u);
		if (t.signal.aborted) return { shortCircuited: !0 };
		O && O.signal.removeEventListener("abort", D), E.forEach((e) => P.delete(e.key));
		let j = rr(k);
		if (j) return await ye(t, j.result, !0, { replace: h }), { shortCircuited: !0 };
		if (j = rr(A), j) return I.add(j.key), await ye(t, j.result, !0, { replace: h }), { shortCircuited: !0 };
		let F = new Map(w.fetchers), { loaderData: ie, errors: R } = Zn(w, i, k, v, E, A, F);
		g && w.errors && (R = {
			...w.errors,
			...R
		});
		let z = Oe(F), ae = ke(ne, F), oe = z || ae || E.length > 0;
		return {
			matches: i,
			loaderData: ie,
			errors: R,
			...oe ? { workingFetchers: F } : {}
		};
	}
	function me(e) {
		if (e && !ur(e[1])) return { [e[0]]: e[1].data };
		if (w.actionData) return Object.keys(w.actionData).length === 0 ? null : w.actionData;
	}
	function he(e) {
		let t = new Map(w.fetchers);
		return e.forEach((e) => {
			let n = t.get(e.key), r = Sr(void 0, n ? n.data : void 0);
			t.set(e.key, r);
		}), t;
	}
	async function ge(t, n, r, i) {
		De(t);
		let a = (i && i.flushSync) === !0, o = s.activeRoutes, l = gn(w.location, w.matches, c, r, n, i?.relative), u = Ye(o, l, c, !1, s.branches), d = We(u, o, l);
		if (d.active && d.matches && (u = d.matches), !u) {
			Ce(t, n, nr(404, { pathname: l }), { flushSync: a });
			return;
		}
		let { path: f, submission: p, error: m } = _n(!0, l, i);
		if (m) {
			Ce(t, n, m, { flushSync: a });
			return;
		}
		let h = e.getContext ? await e.getContext() : new Be(), g = (i && i.preventScrollReset) === !0;
		if (p && Y(p.formMethod)) {
			await _e(t, n, f, u, h, d.active, a, g, p, i && i.defaultShouldRevalidate);
			return;
		}
		re.set(t, {
			routeId: n,
			path: f
		}), await ve(t, n, f, u, h, d.active, a, g, p);
	}
	async function _e(t, n, i, l, u, d, f, p, m, h) {
		xe(), re.delete(t), Se(t, Cr(m, w.fetchers.get(t)), { flushSync: f });
		let g = new AbortController(), _ = Kn(e.history, i, g.signal, m);
		if (d) {
			let e = await Ge(l, new URL(_.url).pathname, _.signal, t);
			if (e.type === "aborted") return;
			if (e.type === "error") {
				Ce(t, n, e.error, { flushSync: f });
				return;
			}
			if (e.matches) l = e.matches;
			else {
				Ce(t, n, nr(404, { pathname: i }), { flushSync: f });
				return;
			}
		}
		let v = vr(l, i);
		if (!v.route.action && !v.route.lazy) {
			Ce(t, n, nr(405, {
				method: m.formMethod,
				pathname: i,
				routeId: n
			}), { flushSync: f });
			return;
		}
		P.set(t, g);
		let y = te, b = Ln(a, o, _, i, l, v, r, u), x = await H(_, i, b, u, t), S = x[v.route.id];
		if (!S) {
			for (let e of b) if (x[e.route.id]) {
				S = x[e.route.id];
				break;
			}
		}
		if (_.signal.aborted) {
			P.get(t) === g && P.delete(t);
			return;
		}
		if (L.has(t)) {
			if (dr(S) || ur(S)) {
				Se(t, wr(void 0));
				return;
			}
		} else {
			if (dr(S)) {
				if (P.delete(t), ne > y) {
					Se(t, wr(void 0));
					return;
				}
				return I.add(t), Se(t, Sr(m)), ye(_, S, !1, {
					fetcherSubmission: m,
					preventScrollReset: p
				});
			}
			if (ur(S)) {
				Ce(t, n, S.error);
				return;
			}
		}
		let C = w.navigation.location || w.location, E = Kn(e.history, C, g.signal), D = s.activeRoutes, k = w.navigation.state === "idle" ? w.matches : Ye(D, w.navigation.location, c, !1, s.branches);
		G(k, "Didn't find any matches after fetcher action");
		let A = ++te;
		F.set(t, A);
		let { dsMatches: j, revalidatingFetchers: M } = vn(E, u, a, o, e.history, w, k, m, C, r, !1, N, ee, L, re, I, D, c, e.patchRoutesOnNavigation != null, s.branches, [v.route.id, S], h), ie = Sr(m, S.data), R = new Map(w.fetchers);
		R.set(t, ie), M.filter((e) => e.key !== t).forEach((e) => {
			let t = e.key, n = R.get(t), r = Sr(void 0, n ? n.data : void 0);
			R.set(t, r), De(t), e.controller && P.set(t, e.controller);
		}), B({ fetchers: R });
		let z = () => M.forEach((e) => De(e.key));
		g.signal.addEventListener("abort", z);
		let { loaderResults: ae, fetcherResults: oe } = await be(j, M, E, C, u);
		if (g.signal.aborted) return;
		g.signal.removeEventListener("abort", z), F.delete(t), P.delete(t), M.forEach((e) => P.delete(e.key));
		let se = w.fetchers.has(t), ce = (e) => {
			if (!se) return e;
			let n = new Map(e.fetchers);
			return n.set(t, wr(S.data)), {
				...e,
				fetchers: n
			};
		}, V = rr(ae);
		if (V) return w = ce(w), ye(E, V.result, !1, { preventScrollReset: p });
		if (V = rr(oe), V) return I.add(V.key), w = ce(w), ye(E, V.result, !1, { preventScrollReset: p });
		let ue = new Map(w.fetchers);
		se && ue.set(t, wr(S.data));
		let { loaderData: de, errors: fe } = Zn(w, k, ae, void 0, M, oe, ue);
		ke(A, ue), w.navigation.state === "loading" && A > ne ? (G(T, "Expected pending action"), O && O.abort(), le(w.navigation.location, {
			matches: k,
			loaderData: de,
			errors: fe,
			fetchers: ue
		})) : (B({
			errors: fe,
			loaderData: Qn(w.loaderData, de, k, fe),
			fetchers: ue
		}), N = !1);
	}
	async function ve(t, n, i, s, c, l, u, d, f) {
		let p = w.fetchers.get(t);
		Se(t, Sr(f, p ? p.data : void 0), { flushSync: u });
		let m = new AbortController(), h = Kn(e.history, i, m.signal);
		if (l) {
			let e = await Ge(s, new URL(h.url).pathname, h.signal, t);
			if (e.type === "aborted") return;
			if (e.type === "error") {
				Ce(t, n, e.error, { flushSync: u });
				return;
			}
			if (e.matches) s = e.matches;
			else {
				Ce(t, n, nr(404, { pathname: i }), { flushSync: u });
				return;
			}
		}
		let g = vr(s, i);
		P.set(t, m);
		let _ = te, v = await H(h, i, Ln(a, o, h, i, s, g, r, c), c, t), y = v[g.route.id];
		if (!y) {
			for (let e of s) if (v[e.route.id]) {
				y = v[e.route.id];
				break;
			}
		}
		if (P.get(t) === m && P.delete(t), !h.signal.aborted) {
			if (L.has(t)) {
				Se(t, wr(void 0));
				return;
			}
			if (dr(y)) {
				if (ne > _) {
					Se(t, wr(void 0));
					return;
				}
				I.add(t), await ye(h, y, !1, { preventScrollReset: d });
				return;
			}
			if (ur(y)) {
				Ce(t, n, y.error);
				return;
			}
			Se(t, wr(y.data));
		}
	}
	async function ye(r, i, a, { submission: o, fetcherSubmission: s, preventScrollReset: l, replace: u } = {}) {
		a || (E?.resolve(), E = null), i.response.headers.has("X-Remix-Revalidate") && (N = !0);
		let d = i.response.headers.get("Location");
		G(d, "Expected a Location header on the redirect Response");
		let f = d, p = new URL(r.url);
		d = Gn(d, p, c, e.history), Yt(f, d, p, "allow-explicit");
		let m = Ie(w.location, d, { _isRedirect: !0 });
		if (n) {
			let e = !1;
			if (i.response.headers.has("X-Remix-Reload-Document")) e = !0;
			else if (gt(d)) {
				let n = Re(t, d, !0);
				e = n.origin !== t.location.origin || J(n.pathname, c) == null;
			}
			if (e) {
				u ? t.location.replace(d) : t.location.assign(d);
				return;
			}
		}
		O = null;
		let h = u === !0 || i.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH", { formMethod: g, formAction: _, formEncType: v } = w.navigation;
		!o && !s && g && _ && v && (o = yr(w.navigation));
		let y = o || s;
		tn.has(i.response.status) && y && Y(y.formMethod) ? await de(h, m, {
			submission: {
				...y,
				formAction: d
			},
			preventScrollReset: l || D,
			enableViewTransition: a ? k : void 0
		}) : await de(h, m, {
			overrideNavigation: br(m, [], h, o),
			fetcherSubmission: s,
			preventScrollReset: l || D,
			enableViewTransition: a ? k : void 0
		});
	}
	async function H(e, t, n, r, i) {
		let a, o = {};
		try {
			a = await Rn(l, e, t, n, i, r, !1);
		} catch (e) {
			return n.filter((e) => e.shouldLoad).forEach((t) => {
				o[t.route.id] = {
					type: "error",
					error: e
				};
			}), o;
		}
		if (e.signal.aborted) return o;
		if (!Y(e.method)) for (let e of n) {
			if (a[e.route.id]?.type === "error") break;
			!a.hasOwnProperty(e.route.id) && !w.loaderData.hasOwnProperty(e.route.id) && (!w.errors || !w.errors.hasOwnProperty(e.route.id)) && e.shouldCallHandler() && (a[e.route.id] = {
				type: "error",
				result: /* @__PURE__ */ Error(`No result returned from dataStrategy for route ${e.route.id}`)
			});
		}
		for (let [t, r] of Object.entries(a)) if (lr(r)) {
			let i = r.result;
			o[t] = {
				type: "redirect",
				response: Hn(i, e, t, n, c)
			};
		} else o[t] = await Vn(r);
		return o;
	}
	async function be(e, t, n, r, i) {
		let a = H(n, r, e, i, null), o = Promise.all(t.map(async (e) => {
			if (e.matches && e.match && e.request && e.controller) {
				let t = (await H(e.request, e.path, e.matches, i, e.key))[e.match.route.id];
				return { [e.key]: t };
			}
			return Promise.resolve({ [e.key]: {
				type: "error",
				error: nr(404, { pathname: e.path })
			} });
		}));
		return {
			loaderResults: await a,
			fetcherResults: (await o).reduce((e, t) => Object.assign(e, t), {})
		};
	}
	function xe() {
		N = !0, re.forEach((e, t) => {
			P.has(t) && ee.add(t), De(t);
		});
	}
	function Se(e, t, n = {}) {
		let r = new Map(w.fetchers);
		r.set(e, t), B({ fetchers: r }, { flushSync: (n && n.flushSync) === !0 });
	}
	function Ce(e, t, n, r = {}) {
		let i = er(w.matches, t), a = new Map(w.fetchers);
		U(a, e), B({
			errors: { [i.route.id]: n },
			fetchers: a
		}, { flushSync: (r && r.flushSync) === !0 });
	}
	function we(e) {
		return ie.set(e, (ie.get(e) || 0) + 1), L.has(e) && L.delete(e), w.fetchers.get(e) || rn;
	}
	function Te(e, t) {
		De(e, t?.reason), Se(e, wr(null));
	}
	function U(e, t) {
		let n = w.fetchers.get(t);
		P.has(t) && !(n && n.state === "loading" && F.has(t)) && De(t), re.delete(t), F.delete(t), I.delete(t), L.delete(t), ee.delete(t), e.delete(t);
	}
	function Ee(e) {
		let t = (ie.get(e) || 0) - 1;
		t <= 0 ? (ie.delete(e), L.add(e)) : ie.set(e, t), B({ fetchers: new Map(w.fetchers) });
	}
	function De(e, t) {
		let n = P.get(e);
		n && (n.abort(t), P.delete(e));
	}
	function W(e, t) {
		for (let n of e) {
			let e = t.get(n);
			G(e, `Expected fetcher: ${n}`);
			let r = wr(e.data);
			t.set(n, r);
		}
	}
	function Oe(e) {
		let t = [], n = !1;
		for (let r of I) {
			let i = e.get(r);
			G(i, `Expected fetcher: ${r}`), i.state === "loading" && (I.delete(r), t.push(r), n = !0);
		}
		return W(t, e), n;
	}
	function ke(e, t) {
		let n = [];
		for (let [r, i] of F) if (i < e) {
			let e = t.get(r);
			G(e, `Expected fetcher: ${r}`), e.state === "loading" && (De(r), F.delete(r), n.push(r));
		}
		return W(n, t), n.length > 0;
	}
	function Ae(e, t) {
		let n = w.blockers.get(e) || an;
		return R.get(e) !== t && R.set(e, t), n;
	}
	function Me(e) {
		w.blockers.delete(e), R.delete(e);
	}
	function Ne(e, t) {
		let n = w.blockers.get(e) || an;
		G(n.state === "unblocked" && t.state === "blocked" || n.state === "blocked" && t.state === "blocked" || n.state === "blocked" && t.state === "proceeding" || n.state === "blocked" && t.state === "unblocked" || n.state === "proceeding" && t.state === "unblocked", `Invalid blocker state transition: ${n.state} -> ${t.state}`);
		let r = new Map(w.blockers);
		r.set(e, t), B({ blockers: r });
	}
	function Pe({ currentLocation: e, nextLocation: t, historyAction: n }) {
		if (R.size === 0) return;
		R.size > 1 && K(!1, "A router only supports one blocker at a time");
		let r = Array.from(R.entries()), [i, a] = r[r.length - 1], o = w.blockers.get(i);
		if (!(o && o.state === "proceeding") && a({
			currentLocation: e,
			nextLocation: t,
			historyAction: n
		})) return i;
	}
	function Fe(e) {
		let t = nr(404, { pathname: e }), n = s.activeRoutes, { matches: r, route: i } = tr(n);
		return {
			notFoundMatches: r,
			route: i,
			error: t
		};
	}
	function ze(e, t, n) {
		if (m = e, g = t, h = n || null, !_ && w.navigation === nn) {
			_ = !0;
			let e = Ue(w.location, w.matches);
			e != null && B({ restoreScrollPosition: e });
		}
		return () => {
			m = null, g = null, h = null;
		};
	}
	function Ve(e, t) {
		return h && h(e, t.map((e) => Xe(e, w.loaderData))) || e.key;
	}
	function He(e, t) {
		if (m && g) {
			let n = Ve(e, t);
			m[n] = g();
		}
	}
	function Ue(e, t) {
		if (m) {
			let n = Ve(e, t), r = m[n];
			if (typeof r == "number") return r;
		}
		return null;
	}
	function We(t, n, r) {
		if (e.patchRoutesOnNavigation) {
			let e = s.branches;
			if (!t) return {
				active: !0,
				matches: Ye(n, r, c, !0, e) || []
			};
			if (Object.keys(t[0].params).length > 0) return {
				active: !0,
				matches: Ye(n, r, c, !0, e)
			};
		}
		return {
			active: !1,
			matches: null
		};
	}
	async function Ge(t, n, r, i) {
		if (!e.patchRoutesOnNavigation) return {
			type: "success",
			matches: t
		};
		let l = t;
		for (;;) {
			let t = o;
			try {
				await e.patchRoutesOnNavigation({
					signal: r,
					path: n,
					matches: l,
					fetcherKey: i,
					patch: (e, n) => {
						r.aborted || wn(e, n, s, t, a, !1);
					}
				});
			} catch (e) {
				return {
					type: "error",
					error: e,
					partialMatches: l
				};
			}
			if (r.aborted) return { type: "aborted" };
			let u = s.branches, d = Ye(s.activeRoutes, n, c, !1, u), f = null;
			if (d && (Object.keys(d[0].params).length === 0 || (f = Ye(s.activeRoutes, n, c, !0, u), !(f && l.length < f.length && qe(l, f.slice(0, l.length)))))) return {
				type: "success",
				matches: d
			};
			if (f ||= Ye(s.activeRoutes, n, c, !0, u), !f || qe(l, f)) return {
				type: "success",
				matches: null
			};
			l = f;
		}
	}
	function qe(e, t) {
		return e.length === t.length && e.every((e, n) => e.route.id === t[n].route.id);
	}
	function Je(e) {
		o = {}, s.setHmrRoutes(Ke(e, a, void 0, o));
	}
	function Ze(e, t, n = !1) {
		wn(e, t, s, o, a, n), s.hasHMRRoutes || B({});
	}
	return C = {
		get basename() {
			return c;
		},
		get future() {
			return u;
		},
		get state() {
			return w;
		},
		get routes() {
			return s.stableRoutes;
		},
		get branches() {
			return s.branches;
		},
		get manifest() {
			return o;
		},
		get window() {
			return t;
		},
		initialize: oe,
		subscribe: ce,
		enableScrollRestoration: ze,
		navigate: V,
		fetch: ge,
		revalidate: ue,
		createHref: (t) => e.history.createHref(t),
		createURL: (t) => e.history.createURL(t),
		encodeLocation: (t) => e.history.encodeLocation(t),
		getFetcher: we,
		resetFetcher: Te,
		deleteFetcher: Ee,
		dispose: se,
		getBlocker: Ae,
		deleteBlocker: Me,
		patchRoutes: Ze,
		_internalFetchControllers: P,
		_internalSetRoutes: Je,
		_internalSetStateDoNotUseOrYouWillBreakYourApp(e) {
			B(e);
		}
	}, e.instrumentations && (C = It(C, e.instrumentations.map((e) => e.router).filter(Boolean))), C;
}
function hn(e) {
	return e != null && ("formData" in e && e.formData != null || "body" in e && e.body !== void 0);
}
function gn(e, t, n, r, i, a) {
	let o, s;
	if (i) {
		o = [];
		for (let e of t) if (o.push(e), e.route.id === i) {
			s = e;
			break;
		}
	} else o = t, s = t[t.length - 1];
	let c = St(r || ".", xt(o), J(e.pathname, n) || e.pathname, a === "path");
	if (r ?? (c.search = e.search, c.hash = e.hash), (r == null || r === "" || r === ".") && s) {
		let e = _r(c.search);
		if (s.route.index && !e) c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index";
		else if (!s.route.index && e) {
			let e = new URLSearchParams(c.search), t = e.getAll("index");
			e.delete("index"), t.filter((e) => e).forEach((t) => e.append("index", t));
			let n = e.toString();
			c.search = n ? `?${n}` : "";
		}
	}
	return n !== "/" && (c.pathname = ht({
		basename: n,
		pathname: c.pathname
	})), q(c);
}
function _n(e, t, n) {
	if (!n || !hn(n)) return { path: t };
	if (n.formMethod && !gr(n.formMethod)) return {
		path: t,
		error: nr(405, { method: n.formMethod })
	};
	let r = () => ({
		path: t,
		error: nr(400, { type: "invalid-body" })
	}), i = (n.formMethod || "get").toUpperCase(), a = ir(t);
	if (n.body !== void 0) {
		if (n.formEncType === "text/plain") {
			if (!Y(i)) return r();
			let e = typeof n.body == "string" ? n.body : n.body instanceof FormData || n.body instanceof URLSearchParams ? Array.from(n.body.entries()).reduce((e, [t, n]) => `${e}${t}=${n}
`, "") : String(n.body);
			return {
				path: t,
				submission: {
					formMethod: i,
					formAction: a,
					formEncType: n.formEncType,
					formData: void 0,
					json: void 0,
					text: e
				}
			};
		}
		if (n.formEncType === "application/json") {
			if (!Y(i)) return r();
			try {
				let e = typeof n.body == "string" ? JSON.parse(n.body) : n.body;
				return {
					path: t,
					submission: {
						formMethod: i,
						formAction: a,
						formEncType: n.formEncType,
						formData: void 0,
						json: e,
						text: void 0
					}
				};
			} catch {
				return r();
			}
		}
	}
	G(typeof FormData == "function", "FormData is not available in this environment");
	let o, s;
	if (n.formData) o = Jn(n.formData), s = n.formData;
	else if (n.body instanceof FormData) o = Jn(n.body), s = n.body;
	else if (n.body instanceof URLSearchParams) o = n.body, s = Yn(o);
	else if (n.body == null) o = new URLSearchParams(), s = new FormData();
	else try {
		o = new URLSearchParams(n.body), s = Yn(o);
	} catch {
		return r();
	}
	let c = {
		formMethod: i,
		formAction: a,
		formEncType: n && n.formEncType || "application/x-www-form-urlencoded",
		formData: s,
		json: void 0,
		text: void 0
	};
	if (Y(c.formMethod)) return {
		path: t,
		submission: c
	};
	let l = Le(t);
	return e && l.search && _r(l.search) && o.append("index", ""), l.search = `?${o}`, {
		path: q(l),
		submission: c
	};
}
function vn(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x) {
	let S = b ? ur(b[1]) ? b[1].error : b[1].data : void 0, C = i.createURL(a.location), w = i.createURL(c), T;
	if (u && a.errors) {
		let e = Object.keys(a.errors)[0];
		T = o.findIndex((t) => t.route.id === e);
	} else if (b && ur(b[1])) {
		let e = b[0];
		T = o.findIndex((t) => t.route.id === e) - 1;
	}
	let E = b ? b[1].statusCode : void 0, D = E && E >= 400, O = {
		currentUrl: C,
		currentParams: a.matches[0]?.params || {},
		nextUrl: w,
		nextParams: o[0].params,
		...s,
		actionResult: S,
		actionStatus: E
	}, k = jt(o), A = o.map((i, o) => {
		let { route: s } = i, f = null;
		if (T != null && o > T) f = !1;
		else if (s.lazy) f = !0;
		else if (!yn(s)) f = !1;
		else if (u) {
			let { shouldLoad: e } = bn(s, a.loaderData, a.errors);
			f = e;
		} else xn(a.loaderData, a.matches[o], i) && (f = !0);
		if (f !== null) return In(n, r, e, c, k, i, l, t, f);
		let p = !1;
		typeof x == "boolean" ? p = x : D ? p = !1 : d || C.pathname + C.search === w.pathname + w.search ? p = !0 : C.search === w.search ? Sn(a.matches[o], i) && (p = !0) : p = !0;
		let m = {
			...O,
			defaultShouldRevalidate: p
		}, h = Cn(i, m);
		return In(n, r, e, c, k, i, l, t, h, m, x);
	}), j = [];
	return m.forEach((e, s) => {
		if (u || !o.some((t) => t.route.id === e.routeId) || p.has(s)) return;
		let c = a.fetchers.get(s), m = c && c.state !== "idle" && c.data === void 0, b = Ye(g, e.path, _ ?? "/", !1, y);
		if (!b) {
			if (v && m) return;
			j.push({
				key: s,
				routeId: e.routeId,
				path: e.path,
				matches: null,
				match: null,
				request: null,
				controller: null
			});
			return;
		}
		if (h.has(s)) return;
		let S = vr(b, e.path), C = new AbortController(), w = Kn(i, e.path, C.signal), T = null;
		if (f.has(s)) f.delete(s), T = Ln(n, r, w, e.path, b, S, l, t);
		else if (m) d && (T = Ln(n, r, w, e.path, b, S, l, t));
		else {
			let i;
			i = typeof x == "boolean" ? x : !D && d;
			let a = {
				...O,
				defaultShouldRevalidate: i
			};
			Cn(S, a) && (T = Ln(n, r, w, e.path, b, S, l, t, a));
		}
		T && j.push({
			key: s,
			routeId: e.routeId,
			path: e.path,
			matches: T,
			match: S,
			request: w,
			controller: C
		});
	}), {
		dsMatches: A,
		revalidatingFetchers: j
	};
}
function yn(e) {
	return e.loader != null || e.middleware != null && e.middleware.length > 0;
}
function bn(e, t, n) {
	if (e.lazy) return {
		shouldLoad: !0,
		renderFallback: !0
	};
	if (!yn(e)) return {
		shouldLoad: !1,
		renderFallback: !1
	};
	let r = t != null && e.id in t, i = n != null && n[e.id] !== void 0;
	if (!r && i) return {
		shouldLoad: !1,
		renderFallback: !1
	};
	if (typeof e.loader == "function" && e.loader.hydrate === !0) return {
		shouldLoad: !0,
		renderFallback: !r
	};
	let a = !r && !i;
	return {
		shouldLoad: a,
		renderFallback: a
	};
}
function xn(e, t, n) {
	let r = !t || n.route.id !== t.route.id, i = !e.hasOwnProperty(n.route.id);
	return r || i;
}
function Sn(e, t) {
	let n = e.route.path;
	return e.pathname !== t.pathname || n != null && n.endsWith("*") && e.params["*"] !== t.params["*"];
}
function Cn(e, t) {
	if (e.route.shouldRevalidate) {
		let n = e.route.shouldRevalidate(t);
		if (typeof n == "boolean") return n;
	}
	return t.defaultShouldRevalidate;
}
function wn(e, t, n, r, i, a) {
	let o;
	if (e) {
		let t = r[e];
		G(t, `No route found to patch children into: routeId = ${e}`), t.children ||= [], o = t.children;
	} else o = n.activeRoutes;
	let s = [], c = [];
	if (t.forEach((e) => {
		let t = o.find((t) => Tn(e, t));
		t ? c.push({
			existingRoute: t,
			newRoute: e
		}) : s.push(e);
	}), s.length > 0) {
		let t = Ke(s, i, [
			e || "_",
			"patch",
			String(o?.length || "0")
		], r);
		o.push(...t);
	}
	if (a && c.length > 0) for (let e = 0; e < c.length; e++) {
		let { existingRoute: t, newRoute: n } = c[e], r = t, [a] = Ke([n], i, [], {}, !0);
		Object.assign(r, {
			element: a.element ? a.element : r.element,
			errorElement: a.errorElement ? a.errorElement : r.errorElement,
			hydrateFallbackElement: a.hydrateFallbackElement ? a.hydrateFallbackElement : r.hydrateFallbackElement
		});
	}
	n.hasHMRRoutes || n.setRoutes([...n.activeRoutes]);
}
function Tn(e, t) {
	return "id" in e && "id" in t && e.id === t.id ? !0 : e.index !== t.index || e.path !== t.path || e.caseSensitive !== t.caseSensitive ? !1 : (!e.children || e.children.length === 0) && (!t.children || t.children.length === 0) ? !0 : e.children?.every((e, n) => t.children?.some((t) => Tn(e, t))) ?? !1;
}
var En = /* @__PURE__ */ new WeakMap(), Dn = ({ key: e, route: t, manifest: n, mapRouteProperties: r }) => {
	let i = n[t.id];
	if (G(i, "No route found in manifest"), !i.lazy || typeof i.lazy != "object") return;
	let a = i.lazy[e];
	if (!a) return;
	let o = En.get(i);
	o || (o = {}, En.set(i, o));
	let s = o[e];
	if (s) return s;
	let c = (async () => {
		let t = He(e), n = i[e] !== void 0 && e !== "hasErrorBoundary";
		if (t) K(!t, "Route property " + e + " is not a supported lazy route property. This property will be ignored."), o[e] = Promise.resolve();
		else if (n) K(!1, `Route "${i.id}" has a static property "${e}" defined. The lazy property will be ignored.`);
		else {
			let t = await a();
			t != null && (Object.assign(i, { [e]: t }), Object.assign(i, r(i)));
		}
		typeof i.lazy == "object" && (i.lazy[e] = void 0, Object.values(i.lazy).every((e) => e === void 0) && (i.lazy = void 0));
	})();
	return o[e] = c, c;
}, On = /* @__PURE__ */ new WeakMap();
function kn(e, t, n, r, i) {
	let a = n[e.id];
	if (G(a, "No route found in manifest"), !e.lazy) return {
		lazyRoutePromise: void 0,
		lazyHandlerPromise: void 0
	};
	if (typeof e.lazy == "function") {
		let t = On.get(a);
		if (t) return {
			lazyRoutePromise: t,
			lazyHandlerPromise: t
		};
		let n = (async () => {
			G(typeof e.lazy == "function", "No lazy route function found");
			let t = await e.lazy(), n = {};
			for (let e in t) {
				let r = t[e];
				if (r === void 0) continue;
				let i = We(e), o = a[e] !== void 0 && e !== "hasErrorBoundary";
				i ? K(!i, "Route property " + e + " is not a supported property to be returned from a lazy route function. This property will be ignored.") : o ? K(!o, `Route "${a.id}" has a static property "${e}" defined but its lazy function is also returning a value for this property. The lazy route property "${e}" will be ignored.`) : n[e] = r;
			}
			Object.assign(a, n), Object.assign(a, {
				...r(a),
				lazy: void 0
			});
		})();
		return On.set(a, n), n.catch(() => {}), {
			lazyRoutePromise: n,
			lazyHandlerPromise: n
		};
	}
	let o = Object.keys(e.lazy), s = [], c;
	for (let a of o) {
		if (i && i.includes(a)) continue;
		let o = Dn({
			key: a,
			route: e,
			manifest: n,
			mapRouteProperties: r
		});
		o && (s.push(o), a === t && (c = o));
	}
	let l = s.length > 0 ? Promise.all(s).then(() => {}) : void 0;
	return l?.catch(() => {}), c?.catch(() => {}), {
		lazyRoutePromise: l,
		lazyHandlerPromise: c
	};
}
async function An(e) {
	let t = e.matches.filter((e) => e.shouldLoad), n = {};
	return (await Promise.all(t.map((e) => e.resolve()))).forEach((e, r) => {
		n[t[r].route.id] = e;
	}), n;
}
async function jn(e) {
	return e.matches.some((e) => e.route.middleware) ? Mn(e, () => An(e)) : An(e);
}
function Mn(e, t) {
	return Nn(e, t, (e) => {
		if (hr(e)) throw e;
		return e;
	}, sr, n);
	function n(t, n, r) {
		if (r) return Promise.resolve(Object.assign(r.value, { [n]: {
			type: "error",
			result: t
		} }));
		{
			let { matches: r } = e, i = er(r, r[Math.min(Math.max(r.findIndex((e) => e.route.id === n), 0), Math.max(r.findIndex((e) => e.shouldCallHandler()), 0))].route.id).route.id;
			return Promise.resolve({ [i]: {
				type: "error",
				result: t
			} });
		}
	}
}
async function Nn(e, t, n, r, i) {
	let { matches: a, ...o } = e;
	return await Pn(o, a.flatMap((e) => e.route.middleware ? e.route.middleware.map((t) => [e.route.id, t]) : []), t, n, r, i);
}
async function Pn(e, t, n, r, i, a, o = 0) {
	let { request: s } = e;
	if (s.signal.aborted) throw s.signal.reason ?? /* @__PURE__ */ Error(`Request aborted: ${s.method} ${s.url}`);
	let c = t[o];
	if (!c) return await n();
	let [l, u] = c, d, f = async () => {
		if (d) throw Error("You may only call `next()` once per middleware");
		try {
			return d = { value: await Pn(e, t, n, r, i, a, o + 1) }, d.value;
		} catch (e) {
			return d = { value: await a(e, l, d) }, d.value;
		}
	};
	try {
		let t = await u(e, f), n = t == null ? void 0 : r(t);
		return i(n) ? n : d ? n ?? d.value : (d = { value: await f() }, d.value);
	} catch (e) {
		return await a(e, l, d);
	}
}
function Fn(e, t, n, r, i) {
	let a = Dn({
		key: "middleware",
		route: r.route,
		manifest: t,
		mapRouteProperties: e
	}), o = kn(r.route, Y(n.method) ? "action" : "loader", t, e, i);
	return {
		middleware: a,
		route: o.lazyRoutePromise,
		handler: o.lazyHandlerPromise
	};
}
function In(e, t, n, r, i, a, o, s, c, l = null, u) {
	let d = !1, f = Fn(e, t, n, a, o);
	return {
		...a,
		_lazyPromises: f,
		shouldLoad: c,
		shouldRevalidateArgs: l,
		shouldCallHandler(e) {
			return d = !0, l ? typeof u == "boolean" ? Cn(a, {
				...l,
				defaultShouldRevalidate: u
			}) : typeof e == "boolean" ? Cn(a, {
				...l,
				defaultShouldRevalidate: e
			}) : Cn(a, l) : c;
		},
		resolve(e) {
			let { lazy: t, loader: o, middleware: l } = a.route, u = d || c || e && !Y(n.method) && (t || o), p = l && l.length > 0 && !o && !t;
			return u && (Y(n.method) || !p) ? zn({
				request: n,
				path: r,
				pattern: i,
				match: a,
				lazyHandlerPromise: f?.handler,
				lazyRoutePromise: f?.route,
				handlerOverride: e,
				scopedContext: s
			}) : Promise.resolve({
				type: "data",
				result: void 0
			});
		}
	};
}
function Ln(e, t, n, r, i, a, o, s, c = null) {
	return i.map((l) => l.route.id === a.route.id ? In(e, t, n, r, jt(i), l, o, s, !0, c) : {
		...l,
		shouldLoad: !1,
		shouldRevalidateArgs: c,
		shouldCallHandler: () => !1,
		_lazyPromises: Fn(e, t, n, l, o),
		resolve: () => Promise.resolve({
			type: "data",
			result: void 0
		})
	});
}
async function Rn(e, t, n, r, i, a, o) {
	r.some((e) => e._lazyPromises?.middleware) && await Promise.all(r.map((e) => e._lazyPromises?.middleware));
	let s = {
		request: t,
		url: qn(t, n),
		pattern: jt(r),
		params: r[0].params,
		context: a,
		matches: r
	}, c = o ? () => {
		throw Error("You cannot call `runClientMiddleware()` from a static handler `dataStrategy`. Middleware is run outside of `dataStrategy` during SSR in order to bubble up the Response.  You can enable middleware via the `respond` API in `query`/`queryRoute`");
	} : (e) => {
		let t = s;
		return Mn(t, () => e({
			...t,
			fetcherKey: i,
			runClientMiddleware: () => {
				throw Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler");
			}
		}));
	}, l = await e({
		...s,
		fetcherKey: i,
		runClientMiddleware: c
	});
	try {
		await Promise.all(r.flatMap((e) => [e._lazyPromises?.handler, e._lazyPromises?.route]));
	} catch {}
	return l;
}
async function zn({ request: e, path: t, pattern: n, match: r, lazyHandlerPromise: i, lazyRoutePromise: a, handlerOverride: o, scopedContext: s }) {
	let c, l, u = Y(e.method), d = u ? "action" : "loader", f = (i) => {
		let a, c = new Promise((e, t) => a = t);
		l = () => a(), e.signal.addEventListener("abort", l);
		let u = (a) => typeof i == "function" ? i({
			request: e,
			url: qn(e, t),
			pattern: n,
			params: r.params,
			context: s
		}, ...a === void 0 ? [] : [a]) : Promise.reject(/* @__PURE__ */ Error(`You cannot call the handler for a route which defines a boolean "${d}" [routeId: ${r.route.id}]`)), f = (async () => {
			try {
				return {
					type: "data",
					result: await (o ? o((e) => u(e)) : u())
				};
			} catch (e) {
				return {
					type: "error",
					result: e
				};
			}
		})();
		return Promise.race([f, c]);
	};
	try {
		let t = u ? r.route.action : r.route.loader;
		if (i || a) {
			if (t) {
				let e, [n] = await Promise.all([
					f(t).catch((t) => {
						e = t;
					}),
					i,
					a
				]);
				if (e !== void 0) throw e;
				c = n;
			} else {
				await i;
				let t = u ? r.route.action : r.route.loader;
				if (t) [c] = await Promise.all([f(t), a]);
				else if (d === "action") {
					let t = new URL(e.url), n = t.pathname + t.search;
					throw nr(405, {
						method: e.method,
						pathname: n,
						routeId: r.route.id
					});
				} else return {
					type: "data",
					result: void 0
				};
			}
		} else if (t) c = await f(t);
		else {
			let t = new URL(e.url);
			throw nr(404, { pathname: t.pathname + t.search });
		}
	} catch (e) {
		return {
			type: "error",
			result: e
		};
	} finally {
		l && e.signal.removeEventListener("abort", l);
	}
	return c;
}
async function Bn(e) {
	let t = e.headers.get("Content-Type");
	return t && /\bapplication\/json\b/.test(t) ? e.body == null ? null : e.json() : e.text();
}
async function Vn(e) {
	let { result: t, type: n } = e;
	if (pr(t)) {
		let e;
		try {
			e = await Bn(t);
		} catch (e) {
			return {
				type: "error",
				error: e
			};
		}
		return n === "error" ? {
			type: "error",
			error: new kt(t.status, t.statusText, e),
			statusCode: t.status,
			headers: t.headers
		} : {
			type: "data",
			data: e,
			statusCode: t.status,
			headers: t.headers
		};
	}
	return n === "error" ? fr(t) ? t.data instanceof Error ? {
		type: "error",
		error: t.data,
		statusCode: t.init?.status,
		headers: t.init?.headers ? new Headers(t.init.headers) : void 0
	} : {
		type: "error",
		error: or(t),
		statusCode: At(t) ? t.status : void 0,
		headers: t.init?.headers ? new Headers(t.init.headers) : void 0
	} : {
		type: "error",
		error: t,
		statusCode: At(t) ? t.status : void 0
	} : fr(t) ? {
		type: "data",
		data: t.data,
		statusCode: t.init?.status,
		headers: t.init?.headers ? new Headers(t.init.headers) : void 0
	} : {
		type: "data",
		data: t
	};
}
function Hn(e, t, n, r, i) {
	let a = e.headers.get("Location");
	if (G(a, "Redirects returned/thrown from loaders/actions must have a Location header"), !gt(a)) {
		let o = r.slice(0, r.findIndex((e) => e.route.id === n) + 1);
		a = gn(new URL(t.url), o, i, a), e.headers.set("Location", a);
	}
	return e;
}
var Un = [
	"about:",
	"blob:",
	"chrome:",
	"chrome-untrusted:",
	"content:",
	"data:",
	"devtools:",
	"file:",
	"filesystem:",
	"javascript:"
];
function Wn(e) {
	try {
		return Un.includes(new URL(e).protocol);
	} catch {
		return !1;
	}
}
function Gn(e, t, n, r) {
	if (gt(e)) {
		let r = e, i = je.test(r) ? new URL(Me(r, t.protocol)) : new URL(r);
		if (Wn(i.toString())) throw Error("Invalid redirect location");
		let a = J(i.pathname, n) != null;
		if (i.origin === t.origin && a) return Ct(i.pathname) + i.search + i.hash;
	}
	try {
		if (Wn(r.createURL(e).toString())) throw Error("Invalid redirect location");
	} catch {}
	return e;
}
function Kn(e, t, n, r) {
	let i = e.createURL(ir(t)).toString(), a = { signal: n };
	if (r && Y(r.formMethod)) {
		let { formMethod: e, formEncType: t } = r;
		a.method = e.toUpperCase(), t === "application/json" ? (a.headers = new Headers({ "Content-Type": t }), a.body = JSON.stringify(r.json)) : a.body = t === "text/plain" ? r.text : t === "application/x-www-form-urlencoded" && r.formData ? Jn(r.formData) : r.formData;
	}
	return new Request(i, a);
}
function qn(e, t) {
	let n = new URL(e.url), r = typeof t == "string" ? Le(t) : t;
	if (n.pathname = r.pathname || "/", r.search) {
		let e = new URLSearchParams(r.search), t = e.getAll("index");
		e.delete("index");
		for (let n of t.filter(Boolean)) e.append("index", n);
		n.search = e.size ? `?${e.toString()}` : "";
	} else n.search = "";
	return n.hash = r.hash || "", n;
}
function Jn(e) {
	let t = new URLSearchParams();
	for (let [n, r] of e.entries()) t.append(n, typeof r == "string" ? r : r.name);
	return t;
}
function Yn(e) {
	let t = new FormData();
	for (let [n, r] of e.entries()) t.append(n, r);
	return t;
}
function Xn(e, t, n, r = !1, i = !1) {
	let a = {}, o = null, s, c = !1, l = {}, u = n && ur(n[1]) ? n[1].error : void 0;
	return e.forEach((n) => {
		if (!(n.route.id in t)) return;
		let d = n.route.id, f = t[d];
		if (G(!dr(f), "Cannot handle redirect results in processLoaderData"), ur(f)) {
			let t = f.error;
			if (u !== void 0 && (t = u, u = void 0), o ||= {}, i) o[d] = t;
			else {
				let n = er(e, d);
				o[n.route.id] ?? (o[n.route.id] = t);
			}
			r || (a[d] = cn), c || (c = !0, s = At(f.error) ? f.error.status : 500), f.headers && (l[d] = f.headers);
		} else a[d] = f.data, f.statusCode && f.statusCode !== 200 && !c && (s = f.statusCode), f.headers && (l[d] = f.headers);
	}), u !== void 0 && n && (o = { [n[0]]: u }, n[2] && (a[n[2]] = void 0)), {
		loaderData: a,
		errors: o,
		statusCode: s || 200,
		loaderHeaders: l
	};
}
function Zn(e, t, n, r, i, a, o) {
	let { loaderData: s, errors: c } = Xn(t, n, r);
	return i.filter((e) => !e.matches || e.matches.some((e) => e.shouldLoad)).forEach((t) => {
		let { key: n, match: r, controller: i } = t;
		if (i && i.signal.aborted) return;
		let s = a[n];
		if (G(s, "Did not find corresponding fetcher result"), ur(s)) {
			let t = er(e.matches, r?.route.id);
			c && c[t.route.id] || (c = {
				...c,
				[t.route.id]: s.error
			}), o.delete(n);
		} else if (dr(s)) G(!1, "Unhandled fetcher revalidation redirect");
		else {
			let e = wr(s.data);
			o.set(n, e);
		}
	}), {
		loaderData: s,
		errors: c
	};
}
function Qn(e, t, n, r) {
	let i = Object.entries(t).filter(([, e]) => e !== cn).reduce((e, [t, n]) => (e[t] = n, e), {});
	for (let a of n) {
		let n = a.route.id;
		if (!t.hasOwnProperty(n) && e.hasOwnProperty(n) && a.route.loader && (i[n] = e[n]), r && r.hasOwnProperty(n)) break;
	}
	return i;
}
function $n(e) {
	return e ? ur(e[1]) ? { actionData: {} } : { actionData: { [e[0]]: e[1].data } } : {};
}
function er(e, t) {
	return (t ? e.slice(0, e.findIndex((e) => e.route.id === t) + 1) : [...e]).reverse().find((e) => e.route.hasErrorBoundary === !0) || e[0];
}
function tr(e) {
	let t = e.length === 1 ? e[0] : e.find((e) => e.index || !e.path || e.path === "/") || { id: "__shim-error-route__" };
	return {
		matches: [{
			params: {},
			pathname: "",
			pathnameBase: "",
			route: t
		}],
		route: t
	};
}
function nr(e, { pathname: t, routeId: n, method: r, type: i, message: a } = {}) {
	let o = "Unknown Server Error", s = "Unknown @remix-run/router error";
	return e === 400 ? (o = "Bad Request", r && t && n ? s = `You made a ${r} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.` : i === "invalid-body" && (s = "Unable to encode submission body")) : e === 403 ? (o = "Forbidden", s = `Route "${n}" does not match URL "${t}"`) : e === 404 ? (o = "Not Found", s = `No route matches URL "${t}"`) : e === 405 && (o = "Method Not Allowed", r && t && n ? s = `You made a ${r.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.` : r && (s = `Invalid request method "${r.toUpperCase()}"`)), new kt(e || 500, o, Error(s), !0);
}
function rr(e) {
	let t = Object.entries(e);
	for (let e = t.length - 1; e >= 0; e--) {
		let [n, r] = t[e];
		if (dr(r)) return {
			key: n,
			result: r
		};
	}
}
function ir(e) {
	return q({
		...typeof e == "string" ? Le(e) : e,
		hash: ""
	});
}
function ar(e, t) {
	return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash || t.hash !== "";
}
function or(e) {
	return new kt(e.init?.status ?? 500, e.init?.statusText ?? "Internal Server Error", e.data);
}
function sr(e) {
	return typeof e == "object" && !!e && Object.entries(e).every(([e, t]) => typeof e == "string" && cr(t));
}
function cr(e) {
	return typeof e == "object" && !!e && "type" in e && "result" in e && (e.type === "data" || e.type === "error");
}
function lr(e) {
	return pr(e.result) && en.has(e.result.status);
}
function ur(e) {
	return e.type === "error";
}
function dr(e) {
	return (e && e.type) === "redirect";
}
function fr(e) {
	return typeof e == "object" && !!e && "type" in e && "data" in e && "init" in e && e.type === "DataWithResponseInit";
}
function pr(e) {
	return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && e.body !== void 0;
}
function mr(e) {
	return en.has(e);
}
function hr(e) {
	return pr(e) && mr(e.status) && e.headers.has("Location");
}
function gr(e) {
	return $t.has(e.toUpperCase());
}
function Y(e) {
	return Zt.has(e.toUpperCase());
}
function _r(e) {
	return new URLSearchParams(e).getAll("index").some((e) => e === "");
}
function vr(e, t) {
	let n = typeof t == "string" ? Le(t).search : t.search;
	if (e[e.length - 1].route.index && _r(n || "")) return e[e.length - 1];
	let r = bt(e);
	return r[r.length - 1];
}
function yr(e) {
	let { formMethod: t, formAction: n, formEncType: r, text: i, formData: a, json: o } = e;
	if (!(!t || !n || !r)) {
		if (i != null) return {
			formMethod: t,
			formAction: n,
			formEncType: r,
			formData: void 0,
			json: void 0,
			text: i
		};
		if (a != null) return {
			formMethod: t,
			formAction: n,
			formEncType: r,
			formData: a,
			json: void 0,
			text: void 0
		};
		if (o !== void 0) return {
			formMethod: t,
			formAction: n,
			formEncType: r,
			formData: void 0,
			json: o,
			text: void 0
		};
	}
}
function br(e, t, n, r) {
	return r ? {
		state: "loading",
		location: e,
		matches: t,
		historyAction: n,
		formMethod: r.formMethod,
		formAction: r.formAction,
		formEncType: r.formEncType,
		formData: r.formData,
		json: r.json,
		text: r.text
	} : {
		state: "loading",
		location: e,
		matches: t,
		historyAction: n,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0
	};
}
function xr(e, t, n, r) {
	return {
		state: "submitting",
		location: e,
		matches: t,
		historyAction: n,
		formMethod: r.formMethod,
		formAction: r.formAction,
		formEncType: r.formEncType,
		formData: r.formData,
		json: r.json,
		text: r.text
	};
}
function Sr(e, t) {
	return e ? {
		state: "loading",
		formMethod: e.formMethod,
		formAction: e.formAction,
		formEncType: e.formEncType,
		formData: e.formData,
		json: e.json,
		text: e.text,
		data: t
	} : {
		state: "loading",
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
		data: t
	};
}
function Cr(e, t) {
	return {
		state: "submitting",
		formMethod: e.formMethod,
		formAction: e.formAction,
		formEncType: e.formEncType,
		formData: e.formData,
		json: e.json,
		text: e.text,
		data: t ? t.data : void 0
	};
}
function wr(e) {
	return {
		state: "idle",
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
		data: e
	};
}
function Tr(e, t) {
	try {
		let n = e.sessionStorage.getItem(sn);
		if (n) {
			let e = JSON.parse(n);
			for (let [n, r] of Object.entries(e || {})) r && Array.isArray(r) && t.set(n, new Set(r || []));
		}
	} catch {}
}
function Er(e, t) {
	if (t.size > 0) {
		let n = {};
		for (let [e, r] of t) n[e] = [...r];
		try {
			e.sessionStorage.setItem(sn, JSON.stringify(n));
		} catch (e) {
			K(!1, `Failed to save applied view transitions in sessionStorage (${e}).`);
		}
	}
}
function Dr() {
	let e, t, n = new Promise((r, i) => {
		e = async (e) => {
			r(e);
			try {
				await n;
			} catch {}
		}, t = async (e) => {
			i(e);
			try {
				await n;
			} catch {}
		};
	});
	return {
		promise: n,
		resolve: e,
		reject: t
	};
}
var Or = U.createContext(null);
Or.displayName = "DataRouter";
var kr = U.createContext(null);
kr.displayName = "DataRouterState";
var Ar = U.createContext(!1);
function jr() {
	return U.useContext(Ar);
}
var Mr = U.createContext({ isTransitioning: !1 });
Mr.displayName = "ViewTransition";
var Nr = U.createContext(/* @__PURE__ */ new Map());
Nr.displayName = "Fetchers";
var Pr = U.createContext(null);
Pr.displayName = "Await";
var Fr = U.createContext(null);
Fr.displayName = "Navigation";
var Ir = U.createContext(null);
Ir.displayName = "Location";
var Lr = U.createContext({
	outlet: null,
	matches: [],
	isDataRoute: !1
});
Lr.displayName = "Route";
var Rr = U.createContext(null);
Rr.displayName = "RouteError";
var zr = "REACT_ROUTER_ERROR", Br = "REDIRECT", Vr = "ROUTE_ERROR_RESPONSE";
function Hr(e) {
	if (e.startsWith(`${zr}:${Br}:{`)) try {
		let t = JSON.parse(e.slice(28));
		if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.location == "string" && typeof t.reloadDocument == "boolean" && typeof t.replace == "boolean") return t;
	} catch {}
}
function Ur(e) {
	if (e.startsWith(`${zr}:${Vr}:{`)) try {
		let t = JSON.parse(e.slice(40));
		if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string") return new kt(t.status, t.statusText, t.data);
	} catch {}
}
function Wr(e, { relative: t } = {}) {
	G(Gr(), "useHref() may be used only in the context of a <Router> component.");
	let { basename: n, navigator: r } = U.useContext(Fr), { hash: i, pathname: a, search: o } = Xr(e, { relative: t }), s = a;
	return n !== "/" && (s = a === "/" ? n : wt([n, a])), r.createHref({
		pathname: s,
		search: o,
		hash: i
	});
}
function Gr() {
	return U.useContext(Ir) != null;
}
function X() {
	return G(Gr(), "useLocation() may be used only in the context of a <Router> component."), U.useContext(Ir).location;
}
var Kr = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function qr(e) {
	U.useContext(Fr).static || U.useLayoutEffect(e);
}
function Jr() {
	let { isDataRoute: e } = U.useContext(Lr);
	return e ? hi() : Yr();
}
function Yr() {
	G(Gr(), "useNavigate() may be used only in the context of a <Router> component.");
	let e = U.useContext(Or), { basename: t, navigator: n } = U.useContext(Fr), { matches: r } = U.useContext(Lr), { pathname: i } = X(), a = JSON.stringify(xt(r)), o = U.useRef(!1);
	return qr(() => {
		o.current = !0;
	}), U.useCallback((r, s = {}) => {
		if (K(o.current, Kr), !o.current) return;
		if (typeof r == "number") {
			n.go(r);
			return;
		}
		let c = St(r, JSON.parse(a), i, s.relative === "path");
		e == null && t !== "/" && (c.pathname = c.pathname === "/" ? t : wt([t, c.pathname])), Yt(typeof r == "string" ? r : q(r), n.createHref(c), Kt(n), "reject"), (s.replace ? n.replace : n.push)(c, s.state, s);
	}, [
		t,
		n,
		a,
		i,
		e
	]);
}
U.createContext(null);
function Xr(e, { relative: t } = {}) {
	let { matches: n } = U.useContext(Lr), { pathname: r } = X(), i = JSON.stringify(xt(n));
	return U.useMemo(() => St(e, JSON.parse(i), r, t === "path"), [
		e,
		i,
		r,
		t
	]);
}
function Zr(e, t) {
	return Qr(e, t);
}
function Qr(e, t, n) {
	G(Gr(), "useRoutes() may be used only in the context of a <Router> component.");
	let { navigator: r } = U.useContext(Fr), { matches: i } = U.useContext(Lr), a = i[i.length - 1], o = a ? a.params : {}, s = a ? a.pathname : "/", c = a ? a.pathnameBase : "/", l = a && a.route;
	{
		let e = l && l.path || "";
		_i(s, !l || e.endsWith("*") || e.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e === "/" ? "*" : `${e}/*`}">.`);
	}
	let u = X(), d;
	if (t) {
		let e = typeof t == "string" ? Le(t) : t;
		G(c === "/" || e.pathname?.startsWith(c), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`), d = e;
	} else d = u;
	let f = d.pathname || "/", p = f;
	if (c !== "/") {
		let e = c.replace(/^\//, "").split("/");
		p = "/" + f.replace(/^\//, "").split("/").slice(e.length).join("/");
	}
	let m = n && n.state.matches.length ? n.state.matches.map((e) => Object.assign(e, { route: n.manifest[e.route.id] || e.route })) : Je(e, { pathname: p });
	K(l || m != null, `No routes matched location "${d.pathname}${d.search}${d.hash}" `), K(m == null || m[m.length - 1].route.element !== void 0 || m[m.length - 1].route.Component !== void 0 || m[m.length - 1].route.lazy !== void 0, `Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
	let h = ai(m && m.map((e) => Object.assign({}, e, {
		params: Object.assign({}, o, e.params),
		pathname: wt([c, r.encodeLocation ? r.encodeLocation(e.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : e.pathname]),
		pathnameBase: e.pathnameBase === "/" ? c : wt([c, r.encodeLocation ? r.encodeLocation(e.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : e.pathnameBase])
	})), i, n);
	return t && h ? /* @__PURE__ */ U.createElement(Ir.Provider, { value: {
		location: {
			pathname: "/",
			search: "",
			hash: "",
			state: null,
			key: "default",
			mask: void 0,
			...d
		},
		navigationType: "POP"
	} }, h) : h;
}
function $r() {
	let e = fi(), t = At(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, r = "rgba(200,200,200, 0.5)", i = {
		padding: "0.5rem",
		backgroundColor: r
	}, a = {
		padding: "2px 4px",
		backgroundColor: r
	}, o = null;
	return console.error("Error handled by React Router default ErrorBoundary:", e), o = /* @__PURE__ */ U.createElement(U.Fragment, null, /* @__PURE__ */ U.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ U.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ U.createElement("code", { style: a }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ U.createElement("code", { style: a }, "errorElement"), " prop on your route.")), /* @__PURE__ */ U.createElement(U.Fragment, null, /* @__PURE__ */ U.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ U.createElement("h3", { style: { fontStyle: "italic" } }, t), n ? /* @__PURE__ */ U.createElement("pre", { style: i }, n) : null, o);
}
var ei = /* @__PURE__ */ U.createElement($r, null), ti = class extends U.Component {
	constructor(e) {
		super(e), this.state = {
			location: e.location,
			revalidation: e.revalidation,
			error: e.error
		};
	}
	static getDerivedStateFromError(e) {
		return { error: e };
	}
	static getDerivedStateFromProps(e, t) {
		return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
			error: e.error,
			location: e.location,
			revalidation: e.revalidation
		} : {
			error: e.error === void 0 ? t.error : e.error,
			location: t.location,
			revalidation: e.revalidation || t.revalidation
		};
	}
	componentDidCatch(e, t) {
		this.props.onError ? this.props.onError(e, t) : console.error("React Router caught the following error during render", e);
	}
	render() {
		let e = this.state.error;
		if (this.context && typeof e == "object" && e && "digest" in e && typeof e.digest == "string") {
			let t = Ur(e.digest);
			t && (e = t);
		}
		let t = e === void 0 ? this.props.children : /* @__PURE__ */ U.createElement(Lr.Provider, { value: this.props.routeContext }, /* @__PURE__ */ U.createElement(Rr.Provider, {
			value: e,
			children: this.props.component
		}));
		return this.context ? /* @__PURE__ */ U.createElement(ri, { error: e }, t) : t;
	}
};
ti.contextType = Ar;
var ni = /* @__PURE__ */ new WeakMap();
function ri({ children: e, error: t }) {
	let { basename: n, navigator: r } = U.useContext(Fr);
	if (typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
		let e = Hr(t.digest);
		if (e) {
			let i = ni.get(t);
			if (i) throw i;
			let a = Nt(e.location, n), o = a.absoluteURL || a.to;
			if (Yt(e.location, o, Kt(r), "allow-explicit"), Wn(o)) throw Error("Invalid redirect location");
			if (Mt && !ni.get(t)) {
				if (a.isExternal || e.reloadDocument) window.location.href = o;
				else {
					let n = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(a.to, { replace: e.replace }));
					throw ni.set(t, n), n;
				}
			}
			return /* @__PURE__ */ U.createElement("meta", {
				httpEquiv: "refresh",
				content: `0;url=${o}`
			});
		}
	}
	return e;
}
function ii({ routeContext: e, match: t, children: n }) {
	let r = U.useContext(Or);
	return r && r.static && r.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = t.route.id), /* @__PURE__ */ U.createElement(Lr.Provider, { value: e }, n);
}
function ai(e, t = [], n) {
	let r = n?.state;
	if (e == null) {
		if (!r) return null;
		if (r.errors) e = r.matches;
		else if (t.length === 0 && !r.initialized && r.matches.length > 0) e = r.matches;
		else return null;
	}
	let i = e, a = r?.errors;
	if (a != null) {
		let e = i.findIndex((e) => e.route.id && a?.[e.route.id] !== void 0);
		G(e >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`), i = i.slice(0, Math.min(i.length, e + 1));
	}
	let o = !1, s = -1;
	if (n && r) {
		o = r.renderFallback;
		for (let e = 0; e < i.length; e++) {
			let t = i[e];
			if ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (s = e), t.route.id) {
				let { loaderData: e, errors: a } = r, c = t.route.loader && !e.hasOwnProperty(t.route.id) && (!a || a[t.route.id] === void 0);
				if (t.route.lazy || c) {
					n.isStatic && (o = !0), i = s >= 0 ? i.slice(0, s + 1) : [i[0]];
					break;
				}
			}
		}
	}
	let c = n?.onError, l = r && c ? (e, t) => {
		c(e, {
			location: r.location,
			params: r.matches?.[0]?.params ?? {},
			pattern: jt(r.matches),
			errorInfo: t
		});
	} : void 0;
	return i.reduceRight((e, n, c) => {
		let u, d = !1, f = null, p = null;
		r && (u = a && n.route.id ? a[n.route.id] : void 0, f = n.route.errorElement || ei, o && (s < 0 && c === 0 ? (_i("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), d = !0, p = null) : s === c && (d = !0, p = n.route.hydrateFallbackElement || null)));
		let m = t.concat(i.slice(0, c + 1)), h = () => {
			let t;
			return t = u ? f : d ? p : n.route.Component ? /* @__PURE__ */ U.createElement(n.route.Component, null) : n.route.element ? n.route.element : e, /* @__PURE__ */ U.createElement(ii, {
				match: n,
				routeContext: {
					outlet: e,
					matches: m,
					isDataRoute: r != null
				},
				children: t
			});
		};
		return r && (n.route.ErrorBoundary || n.route.errorElement || c === 0) ? /* @__PURE__ */ U.createElement(ti, {
			location: r.location,
			revalidation: r.revalidation,
			component: f,
			error: u,
			children: h(),
			routeContext: {
				outlet: null,
				matches: m,
				isDataRoute: !0
			},
			onError: l
		}) : h();
	}, null);
}
function oi(e) {
	return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function si(e) {
	let t = U.useContext(Or);
	return G(t, oi(e)), t;
}
function ci(e) {
	let t = U.useContext(kr);
	return G(t, oi(e)), t;
}
function li(e) {
	let t = U.useContext(Lr);
	return G(t, oi(e)), t;
}
function ui(e) {
	let t = li(e), n = t.matches[t.matches.length - 1];
	return G(n.route.id, `${e} can only be used on routes that contain a unique "id"`), n.route.id;
}
function di() {
	return ui("useRouteId");
}
function fi() {
	let e = U.useContext(Rr), t = ci("useRouteError"), n = ui("useRouteError");
	return e === void 0 ? t.errors?.[n] : e;
}
var pi = 0;
function mi(e) {
	let { router: t, basename: n } = si("useBlocker"), r = ci("useBlocker"), [i, a] = U.useState(""), o = U.useCallback((t) => {
		if (typeof e != "function") return !!e;
		if (n === "/") return e(t);
		let { currentLocation: r, nextLocation: i, historyAction: a } = t;
		return e({
			currentLocation: {
				...r,
				pathname: J(r.pathname, n) || r.pathname
			},
			nextLocation: {
				...i,
				pathname: J(i.pathname, n) || i.pathname
			},
			historyAction: a
		});
	}, [n, e]);
	return U.useEffect(() => {
		let e = String(++pi);
		return a(e), () => t.deleteBlocker(e);
	}, [t]), U.useEffect(() => {
		i !== "" && t.getBlocker(i, o);
	}, [
		t,
		i,
		o
	]), i && r.blockers.has(i) ? r.blockers.get(i) : an;
}
function hi() {
	let { router: e } = si("useNavigate"), t = ui("useNavigate"), n = U.useRef(!1);
	return qr(() => {
		n.current = !0;
	}), U.useCallback(async (r, i = {}) => {
		K(n.current, Kr), n.current && (typeof r == "number" ? await e.navigate(r) : await e.navigate(r, {
			fromRouteId: t,
			...i
		}));
	}, [e, t]);
}
var gi = {};
function _i(e, t, n) {
	!t && !gi[e] && (gi[e] = !0, K(!1, n));
}
var vi = {};
function yi(e, t) {
	!e && !vi[t] && (vi[t] = !0, console.warn(t));
}
var bi = U.useOptimistic, xi = () => void 0;
function Si(e) {
	return bi ? bi(e) : [e, xi];
}
function Ci(e) {
	let t = { hasErrorBoundary: e.hasErrorBoundary || e.ErrorBoundary != null || e.errorElement != null };
	return e.Component && (e.element && K(!1, "You should not include both `Component` and `element` on your route - `Component` will be used."), Object.assign(t, {
		element: U.createElement(e.Component),
		Component: void 0
	})), e.HydrateFallback && (e.hydrateFallbackElement && K(!1, "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."), Object.assign(t, {
		hydrateFallbackElement: U.createElement(e.HydrateFallback),
		HydrateFallback: void 0
	})), e.ErrorBoundary && (e.errorElement && K(!1, "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."), Object.assign(t, {
		errorElement: U.createElement(e.ErrorBoundary),
		ErrorBoundary: void 0
	})), t;
}
var wi = ["HydrateFallback", "hydrateFallbackElement"];
function Ti(e, t) {
	return mn({
		basename: t?.basename,
		getContext: t?.getContext,
		future: t?.future,
		history: Pe({
			initialEntries: t?.initialEntries,
			initialIndex: t?.initialIndex
		}),
		hydrationData: t?.hydrationData,
		routes: e,
		hydrationRouteProperties: wi,
		mapRouteProperties: Ci,
		dataStrategy: t?.dataStrategy,
		patchRoutesOnNavigation: t?.patchRoutesOnNavigation,
		instrumentations: t?.instrumentations
	}).initialize();
}
var Ei = class {
	constructor() {
		this.status = "pending", this.promise = new Promise((e, t) => {
			this.resolve = (t) => {
				this.status === "pending" && (this.status = "resolved", e(t));
			}, this.reject = (e) => {
				this.status === "pending" && (this.status = "rejected", t(e));
			};
		});
	}
};
function Di({ router: e, flushSync: t, onError: n, useTransitions: r }) {
	r = jr() || r;
	let [i, a] = U.useState(e.state), [o, s] = Si(i), [c, l] = U.useState(), [u, d] = U.useState({ isTransitioning: !1 }), [f, p] = U.useState(), [m, h] = U.useState(), [g, _] = U.useState(), v = U.useRef(/* @__PURE__ */ new Map()), y = U.useCallback((i, { deletedFetchers: o, newErrors: c, flushSync: u, viewTransitionOpts: g }) => {
		c && n && Object.values(c).forEach((e) => n(e, {
			location: i.location,
			params: i.matches[0]?.params ?? {},
			pattern: jt(i.matches)
		})), i.fetchers.forEach((e, t) => {
			e.data !== void 0 && v.current.set(t, e.data);
		}), o.forEach((e) => v.current.delete(e)), yi(u === !1 || t != null, "You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from \"react-router/dom\"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.");
		let y = e.window != null && e.window.document != null && typeof e.window.document.startViewTransition == "function";
		if (yi(g == null || y, "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."), !g || !y) {
			t && u ? t(() => a(i)) : r === !1 ? a(i) : U.startTransition(() => {
				r === !0 && s((e) => Oi(e, i)), a(i);
			});
			return;
		}
		if (t && u) {
			t(() => {
				m && (f?.resolve(), m.skipTransition()), d({
					isTransitioning: !0,
					flushSync: !0,
					currentLocation: g.currentLocation,
					nextLocation: g.nextLocation
				});
			});
			let n = e.window.document.startViewTransition(() => {
				t(() => a(i));
			});
			n.finished.finally(() => {
				t(() => {
					p(void 0), h(void 0), l(void 0), d({ isTransitioning: !1 });
				});
			}), t(() => h(n));
			return;
		}
		m ? (f?.resolve(), m.skipTransition(), _({
			state: i,
			currentLocation: g.currentLocation,
			nextLocation: g.nextLocation
		})) : (l(i), d({
			isTransitioning: !0,
			flushSync: !1,
			currentLocation: g.currentLocation,
			nextLocation: g.nextLocation
		}));
	}, [
		e.window,
		t,
		m,
		f,
		r,
		s,
		n
	]);
	U.useLayoutEffect(() => e.subscribe(y), [e, y]), U.useEffect(() => {
		u.isTransitioning && !u.flushSync && p(new Ei());
	}, [u]), U.useEffect(() => {
		if (f && c && e.window) {
			let t = c, n = f.promise, i = e.window.document.startViewTransition(async () => {
				r === !1 ? a(t) : U.startTransition(() => {
					r === !0 && s((e) => Oi(e, t)), a(t);
				}), await n;
			});
			i.finished.finally(() => {
				p(void 0), h(void 0), l(void 0), d({ isTransitioning: !1 });
			}), h(i);
		}
	}, [
		c,
		f,
		e.window,
		r,
		s
	]), U.useEffect(() => {
		f && c && o.location.key === c.location.key && f.resolve();
	}, [
		f,
		m,
		o.location,
		c
	]), U.useEffect(() => {
		!u.isTransitioning && g && (l(g.state), d({
			isTransitioning: !0,
			flushSync: !1,
			currentLocation: g.currentLocation,
			nextLocation: g.nextLocation
		}), _(void 0));
	}, [u.isTransitioning, g]);
	let b = U.useMemo(() => ({
		createHref: e.createHref,
		createURL: e.createURL,
		encodeLocation: e.encodeLocation,
		go: (t) => e.navigate(t),
		push: (t, n, r) => e.navigate(t, {
			state: n,
			preventScrollReset: r?.preventScrollReset
		}),
		replace: (t, n, r) => e.navigate(t, {
			replace: !0,
			state: n,
			preventScrollReset: r?.preventScrollReset
		})
	}), [e]), x = e.basename || "/", S = U.useMemo(() => ({
		router: e,
		navigator: b,
		static: !1,
		basename: x,
		onError: n
	}), [
		e,
		b,
		x,
		n
	]);
	return /* @__PURE__ */ U.createElement(U.Fragment, null, /* @__PURE__ */ U.createElement(Or.Provider, { value: S }, /* @__PURE__ */ U.createElement(kr.Provider, { value: o }, /* @__PURE__ */ U.createElement(Nr.Provider, { value: v.current }, /* @__PURE__ */ U.createElement(Mr.Provider, { value: u }, /* @__PURE__ */ U.createElement(Ni, {
		basename: x,
		location: o.location,
		navigationType: o.historyAction,
		navigator: b,
		useTransitions: r
	}, /* @__PURE__ */ U.createElement(ki, {
		routes: e.routes,
		manifest: e.manifest,
		future: e.future,
		state: o,
		isStatic: !1,
		onError: n
	})))))), null);
}
function Oi(e, t) {
	return {
		...e,
		navigation: t.navigation.state === "idle" ? e.navigation : t.navigation,
		revalidation: t.revalidation === "idle" ? e.revalidation : t.revalidation,
		actionData: t.navigation.state === "submitting" ? e.actionData : t.actionData,
		fetchers: t.fetchers
	};
}
var ki = U.memo(Ai);
function Ai({ routes: e, manifest: t, future: n, state: r, isStatic: i, onError: a }) {
	return Qr(e, void 0, {
		manifest: t,
		state: r,
		isStatic: i,
		onError: a,
		future: n
	});
}
function ji({ to: e, replace: t, state: n, relative: r }) {
	G(Gr(), "<Navigate> may be used only in the context of a <Router> component.");
	let { static: i, navigator: a } = U.useContext(Fr);
	K(!i, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
	let { matches: o } = U.useContext(Lr), { pathname: s } = X(), c = Jr(), l = St(e, xt(o), s, r === "path");
	Yt(typeof e == "string" ? e : q(e), a.createHref(l), Kt(a), "reject");
	let u = JSON.stringify(l);
	return U.useEffect(() => {
		c(JSON.parse(u), {
			replace: t,
			state: n,
			relative: r
		});
	}, [
		c,
		u,
		r,
		t,
		n
	]), null;
}
function Mi(e) {
	G(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
}
function Ni({ basename: e = "/", children: t = null, location: n, navigationType: r = "POP", navigator: i, static: a = !1, useTransitions: o }) {
	G(!Gr(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
	let s = e.replace(/^\/*/, "/"), c = U.useMemo(() => ({
		basename: s,
		navigator: i,
		static: a,
		useTransitions: o,
		future: {}
	}), [
		s,
		i,
		a,
		o
	]);
	typeof n == "string" && (n = Le(n));
	let { pathname: l = "/", search: u = "", hash: d = "", state: f = null, key: p = "default", mask: m } = n, h = U.useMemo(() => {
		let e = J(l, s);
		return e == null ? null : {
			location: {
				pathname: e,
				search: u,
				hash: d,
				state: f,
				key: p,
				mask: m
			},
			navigationType: r
		};
	}, [
		s,
		l,
		u,
		d,
		f,
		p,
		r,
		m
	]);
	return K(h != null, `<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`), h == null ? null : /* @__PURE__ */ U.createElement(Fr.Provider, { value: c }, /* @__PURE__ */ U.createElement(Ir.Provider, {
		children: t,
		value: h
	}));
}
function Pi({ children: e, location: t }) {
	return Zr(Fi(e), t);
}
U.Component;
function Fi(e, t = []) {
	let n = [];
	return U.Children.forEach(e, (e, r) => {
		if (!U.isValidElement(e)) return;
		let i = [...t, r];
		if (e.type === U.Fragment) {
			n.push.apply(n, Fi(e.props.children, i));
			return;
		}
		G(e.type === Mi, `[${typeof e.type == "string" ? e.type : e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), G(!e.props.index || !e.props.children, "An index route cannot have child routes.");
		let a = {
			id: e.props.id || i.join("-"),
			caseSensitive: e.props.caseSensitive,
			element: e.props.element,
			Component: e.props.Component,
			index: e.props.index,
			path: e.props.path,
			middleware: e.props.middleware,
			loader: e.props.loader,
			action: e.props.action,
			hydrateFallbackElement: e.props.hydrateFallbackElement,
			HydrateFallback: e.props.HydrateFallback,
			errorElement: e.props.errorElement,
			ErrorBoundary: e.props.ErrorBoundary,
			hasErrorBoundary: e.props.hasErrorBoundary === !0 || e.props.ErrorBoundary != null || e.props.errorElement != null,
			shouldRevalidate: e.props.shouldRevalidate,
			handle: e.props.handle,
			lazy: e.props.lazy
		};
		e.props.children && (a.children = Fi(e.props.children, i)), n.push(a);
	}), n;
}
var Ii = "get", Li = "application/x-www-form-urlencoded";
function Ri(e) {
	return typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function zi(e) {
	return Ri(e) && e.tagName.toLowerCase() === "button";
}
function Bi(e) {
	return Ri(e) && e.tagName.toLowerCase() === "form";
}
function Vi(e) {
	return Ri(e) && e.tagName.toLowerCase() === "input";
}
function Hi(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Ui(e, t) {
	return e.button === 0 && (!t || t === "_self") && !Hi(e);
}
var Wi = null;
function Gi() {
	if (Wi === null) try {
		new FormData(document.createElement("form"), 0), Wi = !1;
	} catch {
		Wi = !0;
	}
	return Wi;
}
var Ki = /* @__PURE__ */ new Set([
	"application/x-www-form-urlencoded",
	"multipart/form-data",
	"text/plain"
]);
function qi(e) {
	return e != null && !Ki.has(e) ? (K(!1, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Li}"`), null) : e;
}
function Ji(e, t) {
	let n, r, i, a, o;
	if (Bi(e)) {
		let o = e.getAttribute("action");
		r = o ? J(o, t) : null, n = e.getAttribute("method") || Ii, i = qi(e.getAttribute("enctype")) || Li, a = new FormData(e);
	} else if (zi(e) || Vi(e) && (e.type === "submit" || e.type === "image")) {
		let o = e.form;
		if (o == null) throw Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
		let s = e.getAttribute("formaction") || o.getAttribute("action");
		if (r = s ? J(s, t) : null, n = e.getAttribute("formmethod") || o.getAttribute("method") || Ii, i = qi(e.getAttribute("formenctype")) || qi(o.getAttribute("enctype")) || Li, a = new FormData(o, e), !Gi()) {
			let { name: t, type: n, value: r } = e;
			if (n === "image") {
				let e = t ? `${t}.` : "";
				a.append(`${e}x`, "0"), a.append(`${e}y`, "0");
			} else t && a.append(t, r);
		}
	} else if (Ri(e)) throw Error("Cannot submit element that is not <form>, <button>, or <input type=\"submit|image\">");
	else n = Ii, r = null, i = Li, o = e;
	return a && i === "text/plain" && (o = a, a = void 0), {
		action: r,
		method: n.toLowerCase(),
		encType: i,
		formData: a,
		body: o
	};
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Yi(e, t) {
	if (e === !1 || e == null) throw Error(t);
}
function Xi(e, t, n, r) {
	let i = typeof e == "string" ? new URL(e, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e;
	return i.pathname = n ? i.pathname.endsWith("/") ? `${i.pathname}_.${r}` : `${i.pathname}.${r}` : i.pathname === "/" ? `_root.${r}` : t && J(i.pathname, t) === "/" ? `${Tt(t)}/_root.${r}` : `${Tt(i.pathname)}.${r}`, i;
}
async function Zi(e, t) {
	if (e.id in t) return t[e.id];
	try {
		let n = await import(
			/* @vite-ignore */
			/* webpackIgnore: true */
			e.module
);
		return t[e.id] = n, n;
	} catch (t) {
		return console.error(`Error loading route module \`${e.module}\`, reloading page...`), console.error(t), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {});
	}
}
function Qi(e) {
	return e != null && typeof e.page == "string";
}
function $i(e) {
	return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function ea(e, t, n) {
	return aa((await Promise.all(e.map(async (e) => {
		let r = t.routes[e.route.id];
		if (r) {
			let e = await Zi(r, n);
			return e.links ? e.links() : [];
		}
		return [];
	}))).flat(1).filter($i).filter((e) => e.rel === "stylesheet" || e.rel === "preload").map((e) => e.rel === "stylesheet" ? {
		...e,
		rel: "prefetch",
		as: "style"
	} : {
		...e,
		rel: "prefetch"
	}));
}
function ta(e, t, n, r, i, a) {
	let o = (e, t) => !n[t] || e.route.id !== n[t].route.id, s = (e, t) => n[t].pathname !== e.pathname || n[t].route.path?.endsWith("*") && n[t].params["*"] !== e.params["*"];
	return a === "assets" ? t.filter((e, t) => o(e, t) || s(e, t)) : a === "data" ? t.filter((t, a) => {
		let c = r.routes[t.route.id];
		if (!c || !c.hasLoader) return !1;
		if (o(t, a) || s(t, a)) return !0;
		if (t.route.shouldRevalidate) {
			let r = t.route.shouldRevalidate({
				currentUrl: new URL(i.pathname + i.search + i.hash, window.origin),
				currentParams: n[0]?.params || {},
				nextUrl: new URL(e, window.origin),
				nextParams: t.params,
				defaultShouldRevalidate: !0
			});
			if (typeof r == "boolean") return r;
		}
		return !0;
	}) : [];
}
function na(e, t, { includeHydrateFallback: n } = {}) {
	return ra(e.map((e) => {
		let r = t.routes[e.route.id];
		if (!r) return [];
		let i = [r.module];
		return r.clientActionModule && (i = i.concat(r.clientActionModule)), r.clientLoaderModule && (i = i.concat(r.clientLoaderModule)), n && r.hydrateFallbackModule && (i = i.concat(r.hydrateFallbackModule)), r.imports && (i = i.concat(r.imports)), i;
	}).flat(1));
}
function ra(e) {
	return [...new Set(e)];
}
function ia(e) {
	let t = {}, n = Object.keys(e).sort();
	for (let r of n) t[r] = e[r];
	return t;
}
function aa(e, t) {
	let n = /* @__PURE__ */ new Set(), r = new Set(t);
	return e.reduce((e, i) => {
		if (t && !Qi(i) && i.as === "script" && i.href && r.has(i.href)) return e;
		let a = JSON.stringify(ia(i));
		return n.has(a) || (n.add(a), e.push({
			key: a,
			link: i
		})), e;
	}, []);
}
function oa() {
	let e = U.useContext(Or);
	return Yi(e, "You must render this element inside a <DataRouterContext.Provider> element"), e;
}
function sa() {
	let e = U.useContext(kr);
	return Yi(e, "You must render this element inside a <DataRouterStateContext.Provider> element"), e;
}
var ca = U.createContext(void 0);
ca.displayName = "FrameworkContext";
function la() {
	let e = U.useContext(ca);
	return Yi(e, "You must render this element inside a <HydratedRouter> element"), e;
}
function ua(e, t) {
	let n = U.useContext(ca), [r, i] = U.useState(!1), [a, o] = U.useState(!1), { onFocus: s, onBlur: c, onMouseEnter: l, onMouseLeave: u, onTouchStart: d } = t, f = U.useRef(null);
	U.useEffect(() => {
		if (e === "render" && o(!0), e === "viewport") {
			let e = new IntersectionObserver((e) => {
				e.forEach((e) => {
					o(e.isIntersecting);
				});
			}, { threshold: .5 });
			return f.current && e.observe(f.current), () => {
				e.disconnect();
			};
		}
	}, [e]), U.useEffect(() => {
		if (r) {
			let e = setTimeout(() => {
				o(!0);
			}, 100);
			return () => {
				clearTimeout(e);
			};
		}
	}, [r]);
	let p = () => {
		i(!0);
	}, m = () => {
		i(!1), o(!1);
	};
	return n ? e === "intent" ? [
		a,
		f,
		{
			onFocus: da(s, p),
			onBlur: da(c, m),
			onMouseEnter: da(l, p),
			onMouseLeave: da(u, m),
			onTouchStart: da(d, p)
		}
	] : [
		a,
		f,
		{}
	] : [
		!1,
		f,
		{}
	];
}
function da(e, t) {
	return (n) => {
		e && e(n), n.defaultPrevented || t(n);
	};
}
function fa({ page: e, ...t }) {
	let n = jr(), { nonce: r } = la(), { router: i } = oa(), a = U.useMemo(() => Je(i.routes, e, i.basename), [
		i.routes,
		e,
		i.basename
	]);
	return a ? (t.nonce == null && r && (t = {
		...t,
		nonce: r
	}), n ? /* @__PURE__ */ U.createElement(ma, {
		page: e,
		matches: a,
		...t
	}) : /* @__PURE__ */ U.createElement(ha, {
		page: e,
		matches: a,
		...t
	})) : null;
}
function pa(e) {
	let { manifest: t, routeModules: n } = la(), [r, i] = U.useState([]);
	return U.useEffect(() => {
		let r = !1;
		return ea(e, t, n).then((e) => {
			r || i(e);
		}), () => {
			r = !0;
		};
	}, [
		e,
		t,
		n
	]), r;
}
function ma({ page: e, matches: t, ...n }) {
	let r = X(), { future: i } = la(), { basename: a } = oa(), o = U.useMemo(() => {
		if (e === r.pathname + r.search + r.hash) return [];
		let n = Xi(e, a, i.v8_trailingSlashAwareDataRequests, "rsc"), o = !1, s = [];
		for (let e of t) typeof e.route.shouldRevalidate == "function" ? o = !0 : s.push(e.route.id);
		return o && s.length > 0 && n.searchParams.set("_routes", s.join(",")), [n.pathname + n.search];
	}, [
		a,
		i.v8_trailingSlashAwareDataRequests,
		e,
		r,
		t
	]);
	return /* @__PURE__ */ U.createElement(U.Fragment, null, o.map((e) => /* @__PURE__ */ U.createElement("link", {
		key: e,
		rel: "prefetch",
		as: "fetch",
		href: e,
		...n
	})));
}
function ha({ page: e, matches: t, ...n }) {
	let r = X(), { future: i, manifest: a, routeModules: o } = la(), { basename: s } = oa(), { loaderData: c, matches: l } = sa(), u = U.useMemo(() => ta(e, t, l, a, r, "data"), [
		e,
		t,
		l,
		a,
		r
	]), d = U.useMemo(() => ta(e, t, l, a, r, "assets"), [
		e,
		t,
		l,
		a,
		r
	]), f = U.useMemo(() => {
		if (e === r.pathname + r.search + r.hash) return [];
		let n = /* @__PURE__ */ new Set(), l = !1;
		if (t.forEach((e) => {
			let t = a.routes[e.route.id];
			!t || !t.hasLoader || (!u.some((t) => t.route.id === e.route.id) && e.route.id in c && o[e.route.id]?.shouldRevalidate || t.hasClientLoader ? l = !0 : n.add(e.route.id));
		}), n.size === 0) return [];
		let d = Xi(e, s, i.v8_trailingSlashAwareDataRequests, "data");
		return l && n.size > 0 && d.searchParams.set("_routes", t.filter((e) => n.has(e.route.id)).map((e) => e.route.id).join(",")), [d.pathname + d.search];
	}, [
		s,
		i.v8_trailingSlashAwareDataRequests,
		c,
		r,
		a,
		u,
		t,
		e,
		o
	]), p = U.useMemo(() => na(d, a), [d, a]), m = pa(d);
	return /* @__PURE__ */ U.createElement(U.Fragment, null, f.map((e) => /* @__PURE__ */ U.createElement("link", {
		key: e,
		rel: "prefetch",
		as: "fetch",
		href: e,
		...n
	})), p.map((e) => /* @__PURE__ */ U.createElement("link", {
		key: e,
		rel: "modulepreload",
		href: e,
		...n
	})), m.map(({ key: e, link: t }) => /* @__PURE__ */ U.createElement("link", {
		key: e,
		nonce: n.nonce,
		...t,
		crossOrigin: t.crossOrigin ?? n.crossOrigin
	})));
}
function ga(...e) {
	return (t) => {
		e.forEach((e) => {
			typeof e == "function" ? e(t) : e != null && (e.current = t);
		});
	};
}
U.Component;
var _a = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
try {
	_a && (window.__reactRouterVersion = "7.18.3");
} catch {}
var Z = U.forwardRef(function({ onClick: e, discover: t = "render", prefetch: n = "none", relative: r, reloadDocument: i, replace: a, mask: o, state: s, target: c, to: l, preventScrollReset: u, viewTransition: d, defaultShouldRevalidate: f, ...p }, m) {
	let { basename: h, navigator: g, useTransitions: _ } = U.useContext(Fr), v = typeof l == "string" && Ae.test(l), y = Nt(l, h);
	l = y.to;
	let b = Wr(l, { relative: r }), x = X(), S = null;
	if (o) {
		let e = St(o, [], x.mask ? x.mask.pathname : "/", !0);
		h !== "/" && (e.pathname = e.pathname === "/" ? h : wt([h, e.pathname])), S = g.createHref(e);
	}
	let [C, w, T] = ua(n, p), E = Sa(l, {
		replace: a,
		mask: o,
		state: s,
		target: c,
		preventScrollReset: u,
		relative: r,
		viewTransition: d,
		defaultShouldRevalidate: f,
		useTransitions: _
	});
	function D(t) {
		e && e(t), t.defaultPrevented || E(t);
	}
	let O = !(y.isExternal || i), k = /* @__PURE__ */ U.createElement("a", {
		...p,
		...T,
		href: (O ? S : void 0) || y.absoluteURL || b,
		onClick: O ? D : e,
		ref: ga(m, w),
		target: c,
		"data-discover": !v && t === "render" ? "true" : void 0
	});
	return C && !v ? /* @__PURE__ */ U.createElement(U.Fragment, null, k, /* @__PURE__ */ U.createElement(fa, { page: b })) : k;
});
Z.displayName = "Link";
var va = U.forwardRef(function({ "aria-current": e = "page", caseSensitive: t = !1, className: n = "", end: r = !1, style: i, to: a, viewTransition: o, children: s, ...c }, l) {
	let u = Xr(a, { relative: c.relative }), d = X(), f = U.useContext(kr), { navigator: p, basename: m } = U.useContext(Fr), h = f != null && Da(u) && o === !0, g = p.encodeLocation ? p.encodeLocation(u).pathname : u.pathname, _ = d.pathname, v = f && f.navigation && f.navigation.location ? f.navigation.location.pathname : null;
	t || (_ = _.toLowerCase(), v = v ? v.toLowerCase() : null, g = g.toLowerCase()), v && m && (v = J(v, m) || v);
	let y = g !== "/" && g.endsWith("/") ? g.length - 1 : g.length, b = _ === g || !r && _.startsWith(g) && _.charAt(y) === "/", x = v != null && (v === g || !r && v.startsWith(g) && v.charAt(g.length) === "/"), S = {
		isActive: b,
		isPending: x,
		isTransitioning: h
	}, C = b ? e : void 0, w;
	w = typeof n == "function" ? n(S) : [
		n,
		b ? "active" : null,
		x ? "pending" : null,
		h ? "transitioning" : null
	].filter(Boolean).join(" ");
	let T = typeof i == "function" ? i(S) : i;
	return /* @__PURE__ */ U.createElement(Z, {
		...c,
		"aria-current": C,
		className: w,
		ref: l,
		style: T,
		to: a,
		viewTransition: o
	}, typeof s == "function" ? s(S) : s);
});
va.displayName = "NavLink";
var ya = U.forwardRef(({ discover: e = "render", fetcherKey: t, navigate: n, reloadDocument: r, replace: i, state: a, method: o = Ii, action: s, onSubmit: c, relative: l, preventScrollReset: u, viewTransition: d, defaultShouldRevalidate: f, ...p }, m) => {
	let { useTransitions: h } = U.useContext(Fr), g = Ta(), _ = Ea(s, { relative: l }), v = o.toLowerCase() === "get" ? "get" : "post", y = typeof s == "string" && Ae.test(s);
	return /* @__PURE__ */ U.createElement("form", {
		ref: m,
		method: v,
		action: _,
		onSubmit: r ? c : (e) => {
			if (c && c(e), e.defaultPrevented) return;
			e.preventDefault();
			let r = e.nativeEvent.submitter, s = r?.getAttribute("formmethod") || o, p = () => g(r || e.currentTarget, {
				fetcherKey: t,
				method: s,
				navigate: n,
				replace: i,
				state: a,
				relative: l,
				preventScrollReset: u,
				viewTransition: d,
				defaultShouldRevalidate: f
			});
			h && n !== !1 ? U.startTransition(() => p()) : p();
		},
		...p,
		"data-discover": !y && e === "render" ? "true" : void 0
	});
});
ya.displayName = "Form";
function ba(e) {
	return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function xa(e) {
	let t = U.useContext(Or);
	return G(t, ba(e)), t;
}
function Sa(e, { target: t, replace: n, mask: r, state: i, preventScrollReset: a, relative: o, viewTransition: s, defaultShouldRevalidate: c, useTransitions: l } = {}) {
	let u = Jr(), d = X(), f = Xr(e, { relative: o });
	return U.useCallback((p) => {
		if (Ui(p, t)) {
			p.preventDefault();
			let t = n === void 0 ? q(d) === q(f) : n, m = () => u(e, {
				replace: t,
				mask: r,
				state: i,
				preventScrollReset: a,
				relative: o,
				viewTransition: s,
				defaultShouldRevalidate: c
			});
			l ? U.startTransition(() => m()) : m();
		}
	}, [
		d,
		u,
		f,
		n,
		r,
		i,
		t,
		e,
		a,
		o,
		s,
		c,
		l
	]);
}
var Ca = 0, wa = () => `__${String(++Ca)}__`;
function Ta() {
	let { router: e } = xa("useSubmit"), { basename: t } = U.useContext(Fr), n = di(), r = e.fetch, i = e.navigate;
	return U.useCallback(async (e, a = {}) => {
		let { action: o, method: s, encType: c, formData: l, body: u } = Ji(e, t);
		if (a.navigate === !1) {
			let e = a.fetcherKey || wa();
			await r(e, n, a.action || o, {
				defaultShouldRevalidate: a.defaultShouldRevalidate,
				preventScrollReset: a.preventScrollReset,
				formData: l,
				body: u,
				formMethod: a.method || s,
				formEncType: a.encType || c,
				flushSync: a.flushSync
			});
		} else await i(a.action || o, {
			defaultShouldRevalidate: a.defaultShouldRevalidate,
			preventScrollReset: a.preventScrollReset,
			formData: l,
			body: u,
			formMethod: a.method || s,
			formEncType: a.encType || c,
			replace: a.replace,
			state: a.state,
			fromRouteId: n,
			flushSync: a.flushSync,
			viewTransition: a.viewTransition
		});
	}, [
		r,
		i,
		t,
		n
	]);
}
function Ea(e, { relative: t } = {}) {
	let { basename: n } = U.useContext(Fr), r = U.useContext(Lr);
	G(r, "useFormAction must be used inside a RouteContext");
	let [i] = r.matches.slice(-1), a = { ...Xr(e || ".", { relative: t }) }, o = X();
	if (e == null) {
		a.search = o.search;
		let e = new URLSearchParams(a.search), t = e.getAll("index");
		if (t.some((e) => e === "")) {
			e.delete("index"), t.filter((e) => e).forEach((t) => e.append("index", t));
			let n = e.toString();
			a.search = n ? `?${n}` : "";
		}
	}
	return (!e || e === ".") && i.route.index && (a.search = a.search ? a.search.replace(/^\?/, "?index&") : "?index"), n !== "/" && (a.pathname = a.pathname === "/" ? n : wt([n, a.pathname])), q(a);
}
function Da(e, { relative: t } = {}) {
	let n = U.useContext(Mr);
	G(n != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
	let { basename: r } = xa("useViewTransitionState"), i = Xr(e, { relative: t });
	if (!n.isTransitioning) return !1;
	let a = J(n.currentLocation.pathname, r) || n.currentLocation.pathname, o = J(n.nextLocation.pathname, r) || n.nextLocation.pathname;
	return dt(i.pathname, o) != null || dt(i.pathname, a) != null;
}
//#endregion
//#region apps/web/src/ApplicationErrorBoundary.tsx
var Q = g();
function Oa() {
	return /* @__PURE__ */ (0, Q.jsxs)("main", {
		className: "direction-project-loading is-error application-error",
		role: "alert",
		children: [
			/* @__PURE__ */ (0, Q.jsx)("h1", { children: "Cabane couldn’t open this view" }),
			/* @__PURE__ */ (0, Q.jsx)("p", { children: "Something went wrong. Reload the page to try again. Any changes that weren’t saved may be lost." }),
			/* @__PURE__ */ (0, Q.jsx)("button", {
				type: "button",
				onClick: () => window.location.reload(),
				children: "Reload page"
			})
		]
	});
}
function ka() {
	let e = fi();
	return (0, U.useEffect)(() => {
		console.error("Cabane route failed:", e);
	}, [e]), /* @__PURE__ */ (0, Q.jsx)(Oa, {});
}
var Aa = class extends U.Component {
	state = { hasError: !1 };
	static getDerivedStateFromError() {
		return { hasError: !0 };
	}
	componentDidCatch(e, t) {
		console.error("Cabane application failed:", e, t.componentStack);
	}
	render() {
		return this.state.hasError ? /* @__PURE__ */ (0, Q.jsx)(Oa, {}) : this.props.children;
	}
}, ja = /* @__PURE__ */ e(n(), 1), Ma = class extends Error {
	constructor() {
		super("This workspace changed on Home Assistant."), this.name = "HaWorkspaceConflictError";
	}
}, Na = class extends Error {
	constructor() {
		super("Cabane workspace storage is not installed on this Home Assistant instance."), this.name = "HaWorkspaceUnavailableError";
	}
}, Pa = (e) => {
	if (e && typeof e == "object" && "code" in e && typeof e.code == "string") return e.code;
};
function Fa(e) {
	let t = async (t) => {
		try {
			return await e(t);
		} catch (e) {
			let t = Pa(e);
			throw t === "conflict" ? new Ma() : [
				"unknown_command",
				"unknown_error",
				"not_found"
			].includes(t ?? "") ? new Na() : e;
		}
	};
	return {
		list: () => t({ type: "cabane/workspaces/list" }),
		get: (e) => t({
			type: "cabane/workspaces/get",
			home_id: e
		}),
		put: (e, n, r) => t({
			type: "cabane/workspaces/put",
			home_id: e,
			document: n,
			expected_version: r
		}),
		delete: (e, n) => t({
			type: "cabane/workspaces/delete",
			home_id: e,
			expected_version: n
		})
	};
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceDialog.tsx
function Ia({ title: e, titleIcon: t, busy: n, error: r, onCancel: i, children: a }) {
	let o = x(), s = (0, U.useRef)(null), c = (0, U.useId)();
	return (0, U.useEffect)(() => {
		let e = o.root.activeElement;
		return s.current?.showModal?.(), () => e?.focus();
	}, [o]), /* @__PURE__ */ (0, Q.jsxs)("dialog", {
		ref: s,
		className: "workspace-dialog",
		"aria-labelledby": c,
		onCancel: (e) => {
			e.preventDefault(), n || i();
		},
		children: [
			/* @__PURE__ */ (0, Q.jsxs)("h2", {
				id: c,
				children: [t, e]
			}),
			a,
			r && /* @__PURE__ */ (0, Q.jsx)("p", {
				role: "alert",
				className: "workspace-error",
				children: r
			}),
			/* @__PURE__ */ (0, Q.jsx)("button", {
				type: "button",
				disabled: n,
				onClick: i,
				children: "Cancel"
			})
		]
	});
}
//#endregion
//#region apps/web/src/workspaces/ha-model-assets.ts
var La = class extends Error {
	constructor() {
		super("Update the Cabane Home Assistant integration to sync houses with GLB models."), this.name = "HaAssetUpgradeRequiredError";
	}
}, Ra = (e) => {
	let t = "";
	for (let n = 0; n < e.length; n += 8192) t += String.fromCharCode(...e.subarray(n, n + 8192));
	return btoa(t);
}, za = (e) => Uint8Array.from(atob(e), (e) => e.charCodeAt(0));
function Ba(e) {
	let t = async () => {
		try {
			let t = await e({ type: "cabane/assets/capabilities" });
			if (t.version !== 1 || t.chunk_bytes !== F.chunkBytes) throw new La();
		} catch (e) {
			throw e instanceof La || e && typeof e == "object" && "code" in e && e.code === "unknown_command" ? new La() : e;
		}
	};
	return {
		upload: async (n) => {
			if (!n.length) return;
			await t();
			let r = /* @__PURE__ */ new Set();
			for (let t = 0; t < n.length; t += 1024) {
				let i = await e({
					type: "cabane/assets/has",
					hashes: n.slice(t, t + 1024).map((e) => e.sha256)
				});
				for (let e of i.missing) r.add(e);
			}
			for (let t of n) {
				if (!r.has(t.sha256)) continue;
				let { upload_id: n } = await e({
					type: "cabane/assets/begin",
					sha256: t.sha256,
					byte_length: t.byteLength
				});
				for (let r = 0; r < t.byteLength; r += F.chunkBytes) {
					let i = t.bytes.subarray(r, r + F.chunkBytes);
					if ((await e({
						type: "cabane/assets/upload",
						upload_id: n,
						offset: r,
						data: Ra(i)
					})).offset !== r + i.byteLength) throw Error("The GLB upload was interrupted. Retry synchronization.");
				}
				await e({
					type: "cabane/assets/finish",
					upload_id: n
				});
			}
		},
		download: async (n, r) => {
			if (!n.length) return;
			await t();
			let i = [];
			for (let t of n) {
				let n = null;
				try {
					n = await r(t.sha256);
				} catch {}
				if (n && n.byteLength === t.byteLength && await o(n) === t.sha256) continue;
				let a = new Uint8Array(t.byteLength);
				for (let n = 0; n < t.byteLength;) {
					let r = await e({
						type: "cabane/assets/get",
						sha256: t.sha256,
						offset: n
					}), i = za(r.data);
					if (r.byte_length !== t.byteLength || r.offset !== n || !i.length || i.length > F.chunkBytes || n + i.length > a.length) throw Error("The GLB download is incomplete. Retry synchronization.");
					a.set(i, n), n += i.length;
				}
				if (await o(a) !== t.sha256) throw Error("GLB integrity check failed. The previous home is unchanged.");
				i.push({
					...t,
					bytes: a
				});
			}
			await P(i);
		}
	};
}
function Va(e, t) {
	let n = Fa(e), r = Ba(e);
	return {
		...n,
		get: async (e) => {
			let i = await n.get(e);
			return i?.document && !i.corrupt && await r.download(ae(i.document), (e) => t.read(e)), i;
		},
		put: async (e, i, a) => (await r.upload(await t.verify(ae(i))), n.put(e, i, a))
	};
}
//#endregion
//#region apps/web/src/workspaces/workspace-sync-coordinator.ts
function Ha(e) {
	let t = /* @__PURE__ */ new Map(), n = (e, n) => {
		let r = (t.get(e) ?? Promise.resolve()).catch(() => void 0).then(n);
		return t.set(e, r), r.finally(() => {
			t.get(e) === r && t.delete(e);
		}).catch(() => void 0), r;
	}, r = async (t) => {
		let n = await e.repository.read(t);
		if (!n?.record) throw Error(n?.error ?? "The local workspace is unavailable.");
		return n;
	}, i = async (t, n, r, i) => {
		await e.cursors.write({
			origin: t,
			homeId: n.metadata.id,
			enabled: i,
			remoteVersion: r,
			acknowledgedFingerprint: await e.fingerprint(n)
		});
	}, a = (e) => e && typeof e == "object" && "name" in e && ["HaWorkspaceUnavailableError", "HaAssetUpgradeRequiredError"].includes(String(e.name)) ? {
		kind: "unavailable",
		detail: e instanceof Error ? e.message : "Update the Cabane integration."
	} : {
		kind: "disconnected",
		detail: e instanceof Error ? e.message : "Home Assistant is unavailable."
	}, o = (t, o) => n(t, async () => {
		let n = await e.cursors.read(o, t);
		if (!n?.enabled) return { kind: "off" };
		let s = await r(t), c = await e.fingerprint(s), l;
		try {
			l = await e.client.get(t);
		} catch (e) {
			return a(e);
		}
		if (!l?.document) return {
			kind: "conflict",
			detail: "The HA copy was removed."
		};
		if (l.corrupt) return {
			kind: "conflict",
			detail: "The HA copy is damaged. Download its raw data for recovery."
		};
		let u = c !== n.acknowledgedFingerprint, d = l.version !== n.remoteVersion;
		if (u && d) return { kind: "conflict" };
		if (d) try {
			let n = await e.restore(l.document, s.record.revision, t);
			return await i(o, n, l.version, !0), {
				kind: "synced",
				detail: "restored"
			};
		} catch (e) {
			return re({
				kind: "conflict",
				detail: e instanceof Error ? e.message : void 0
			});
		}
		if (!u) return { kind: "synced" };
		try {
			let n = await e.client.put(t, e.serialize(s), l.version);
			await i(o, s, n, !0);
			let a = await r(t);
			return await e.fingerprint(a) === c ? { kind: "synced" } : { kind: "pending" };
		} catch (e) {
			return e && typeof e == "object" && ("name" in e && e.name === "HaWorkspaceConflictError" || "code" in e && e.code === "conflict") ? { kind: "conflict" } : a(e);
		}
	}), s = async (t, n, a = !1) => {
		let o = await r(t), s = await e.cursors.read(n, t), c = await e.client.get(t);
		if (c?.corrupt) return {
			kind: "conflict",
			detail: "The HA copy is damaged."
		};
		if (c?.document && (!s || c.version !== s.remoteVersion)) return { kind: "conflict" };
		let l = await e.client.put(t, e.serialize(o), c?.version ?? null);
		await i(n, o, l, a || (s?.enabled ?? !1));
		let u = await r(t);
		return { kind: a || s?.enabled ? await e.fingerprint(u) === await e.fingerprint(o) ? "synced" : "pending" : "off" };
	}, c = (e, t) => n(e, () => s(e, t)), l = (e, t) => n(e, () => s(e, t, !0)), u = async (t, n, r = !1) => {
		let a = await e.client.get(t);
		if (!a?.document) throw Error("No HA copy of this workspace exists.");
		if (a.corrupt) throw Error("The HA copy is damaged. Download its raw data for recovery.");
		let o = await e.repository.read(t), s = await e.cursors.read(n, t);
		if (o && !o.record) return {
			kind: "conflict",
			detail: "The browser copy needs recovery. Download it before replacing it."
		};
		if (o?.record && (!s || await e.fingerprint(o) !== s.acknowledgedFingerprint)) return {
			kind: "conflict",
			detail: "This browser's copy has changes. Choose which copy to keep."
		};
		let c = await e.restore(a.document, o?.record?.revision, t);
		return await i(n, c, a.version, r || (s?.enabled ?? !1)), { kind: r || s?.enabled ? "synced" : "off" };
	};
	return {
		reconcile: o,
		manualSave: c,
		enableSync: l,
		manualRestore: (e, t) => n(e, () => u(e, t)),
		openRemote: (e, t) => n(e, () => u(e, t, !0)),
		setEnabled: (t, r, i) => n(t, async () => {
			let n = await e.cursors.read(r, t);
			if (!n) throw Error("Save this workspace to Home Assistant before enabling sync.");
			return await e.cursors.write({
				...n,
				enabled: i
			}), { kind: i ? "pending" : "off" };
		}),
		resolveConflict: (t, a, o, s) => n(t, async () => {
			let n = await e.client.get(t);
			if (s !== void 0 && n?.version !== s) return {
				kind: "conflict",
				detail: "The HA copy changed again. Review it before replacing."
			};
			let c = await e.cursors.read(a, t);
			if (o === "remote") {
				if (!n?.document) throw Error("The HA copy was removed.");
				if (n.corrupt) throw Error("The HA copy is damaged. Download its raw data for recovery.");
				let o = await r(t), s = await e.restore(n.document, o.record.revision, t);
				await i(a, s, n.version, c?.enabled ?? !1);
			} else {
				let o = await r(t), s = await e.client.put(t, e.serialize(o), n?.version ?? null);
				await i(a, o, s, c?.enabled ?? !1);
			}
			return { kind: c?.enabled ? "synced" : "off" };
		}),
		deleteRemote: (t, r) => n(t, async () => {
			let n = await e.client.get(t);
			if (!n?.document) throw Error("No HA copy of this workspace exists.");
			return await e.client.delete(t, n.version), await e.cursors.remove(r, t), { kind: "off" };
		})
	};
}
//#endregion
//#region apps/web/src/workspaces/workspace-sync-state.ts
var Ua = (e, t) => `${e}\u0000${t}`, Wa = (e, t, n) => r(e, "readonly", I, (e, r, i) => r(e.objectStore(I).get(Ua(t, n)), (e) => i(e ?? null))), Ga = (e, t) => r(e, "readwrite", I, (e, n, r) => n(e.objectStore(I).put(t, Ua(t.origin, t.homeId)), () => r())), Ka = (e, t, n) => r(e, "readwrite", I, (e, r, i) => r(e.objectStore(I).delete(Ua(t, n)), () => i()));
async function qa(e, t) {
	let n = E(JSON.parse(ce(e, t)));
	return v(new TextEncoder().encode(n));
}
//#endregion
//#region apps/web/src/workspaces/workspace-remote-transfer.ts
function Ja(e, t, n, r, i) {
	let a;
	try {
		a = JSON.parse(t);
	} catch {
		throw Error("The HA workspace copy is not valid JSON.");
	}
	if (!a || typeof a != "object" || !("format" in a) || a.format !== "cabane-workspace") throw Error("The HA workspace copy is not a private Cabane backup.");
	let o = ue(t, V);
	if (r && o.record.homeId !== r) throw Error("The HA workspace copy belongs to a different workspace.");
	if (i && S(o.homeAssistantUrl) !== S(i)) throw Error("This saved workspace belongs to a different Home Assistant. Open it from its original server.");
	let s = {
		id: o.record.homeId,
		name: o.name,
		homeAssistantUrl: o.homeAssistantUrl,
		hasPublished: o.hasPublished,
		createdAt: Date.now()
	};
	return e.restoreExact(o.record, s, n);
}
//#endregion
//#region apps/web/src/workspaces/useWorkspaceSyncCoordinator.ts
function Ya(e, t) {
	let n = ee(), r = (0, U.useMemo)(() => Va(n.sendStorageMessage, A(window.indexedDB)), [n.sendStorageMessage]);
	return {
		runtime: n,
		client: r,
		coordinator: (0, U.useMemo)(() => Ha({
			repository: e,
			client: r,
			cursors: {
				read: (e, t) => Wa(window.indexedDB, e, t),
				write: (e) => Ga(window.indexedDB, e),
				remove: (e, t) => Ka(window.indexedDB, e, t)
			},
			fingerprint: (e) => qa(e.metadata, e.record),
			serialize: (e) => ce(e.metadata, e.record),
			restore: (r, i, a) => Ja(e, r, i, a, t ?? n.origin ?? void 0)
		}), [
			r,
			e,
			t,
			n.origin
		])
	};
}
//#endregion
//#region apps/web/src/workspaces/HomeAssistantIcon.tsx
function Xa() {
	return /* @__PURE__ */ (0, Q.jsx)("svg", {
		className: "workspace-ha-icon",
		viewBox: "0 0 24 24",
		fill: "#18bcf2",
		"aria-hidden": "true",
		focusable: "false",
		children: /* @__PURE__ */ (0, Q.jsx)("path", { d: "m12.151 1.5882c-.3262 0-.6523.1291-.8996.3867l-8.3848 8.7354c-.0619.0644-.1223.1368-.1807.2154-.0588.0789-.1151.1638-.1688.2534-.2593.4325-.4552.9749-.5232 1.4555-.0026.018-.0076.0369-.0094.0548-.0121.0987-.0184.1944-.0184.2857v8.0124a1.2731 1.2731 0 001.2731 1.2731h7.8313l-3.4484-3.593a1.7399 1.7399 0 111.0803-1.125l2.6847 2.7972v-10.248a1.7399 1.7399 0 111.5276-0v7.187l2.6702-2.782a1.7399 1.7399 0 111.0566 1.1505l-3.7269 3.8831v2.7299h8.174a1.2471 1.2471 0 001.2471-1.2471v-8.0375c0-.0912-.0059-.1868-.0184-.2855-.0603-.4935-.2636-1.0617-.5326-1.5105-.0537-.0896-.1101-.1745-.1684-.253-.0588-.079-.1191-.1513-.181-.2158l-8.3848-8.7363c-.2473-.2577-.5735-.3866-.8995-.3864" })
	});
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceDeleteDialog.tsx
function Za({ name: e, busy: t, error: n, onDelete: r, onCancel: i, onBackup: a, local: o = !0, remote: s = "absent", server: c, onRetry: l }) {
	let u = s !== "absent";
	return /* @__PURE__ */ (0, Q.jsxs)(Ia, {
		title: `Delete ${e}?`,
		busy: t,
		error: n,
		onCancel: i,
		children: [
			/* @__PURE__ */ (0, Q.jsx)("p", { children: o && u ? "Remove it from this browser, or delete the saved Home Assistant copy too. Permanent deletion cannot be undone." : o ? "Permanently removes this workspace, its design, and mappings from this browser. There is no undo." : "Permanently removes the saved Home Assistant copy. There is no undo." }),
			c && /* @__PURE__ */ (0, Q.jsxs)("p", {
				className: "workspace-delete-server",
				children: ["Home Assistant: ", c]
			}),
			s === "checking" && /* @__PURE__ */ (0, Q.jsx)("p", {
				role: "status",
				children: "Checking the Home Assistant copy…"
			}),
			s === "error" && /* @__PURE__ */ (0, Q.jsx)("button", {
				type: "button",
				disabled: t,
				onClick: l,
				children: "Retry Home Assistant"
			}),
			s === "present" && /* @__PURE__ */ (0, Q.jsx)("p", { children: "Other devices may still have browser copies." }),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "workspace-delete-actions",
				children: [o && u && /* @__PURE__ */ (0, Q.jsx)("button", {
					type: "button",
					disabled: t,
					onClick: () => r("local"),
					children: "Remove locally"
				}), /* @__PURE__ */ (0, Q.jsx)("button", {
					type: "button",
					className: "workspace-danger",
					disabled: t || (u ? s !== "present" : !o),
					onClick: () => r("permanent"),
					children: "Delete permanently"
				})]
			}),
			/* @__PURE__ */ (0, Q.jsx)("button", {
				type: "button",
				disabled: t,
				onClick: a,
				children: "Download backup"
			}),
			t && /* @__PURE__ */ (0, Q.jsx)("p", {
				role: "status",
				children: "Working…"
			})
		]
	});
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceDeletion.tsx
function Qa(e) {
	let n = t()?.origin ?? e.target.entry?.metadata.homeAssistantUrl ?? e.target.origin ?? null;
	return /* @__PURE__ */ (0, Q.jsx)(T, {
		homeAssistantUrl: n,
		children: /* @__PURE__ */ (0, Q.jsx)($a, { ...e })
	});
}
function $a({ repository: e, target: n, onDeleteLocal: r, onDeleted: i, onCancel: a, onBusyChange: o }) {
	let s = ee(), c = t(), { client: l } = Ya(e), u = (0, U.useMemo)(() => Fa(s.sendStorageMessage), [s.sendStorageMessage]), d = n.entry, f = d?.metadata.id ?? n.saved.home_id, p = d?.metadata.name ?? n.saved.name, m = c?.origin ?? s.origin ?? d?.metadata.homeAssistantUrl ?? n.origin ?? null, [h, g] = (0, U.useState)(n.saved ? "present" : m ? "checking" : "absent"), [_, v] = (0, U.useState)(n.saved?.version ?? null), [y, b] = (0, U.useState)(!1), [x, S] = (0, U.useState)(null), [C, w] = (0, U.useState)(0);
	(0, U.useEffect)(() => {
		if (!m || n.saved && C === 0) return;
		if (s.status !== "connected") {
			g("error");
			return;
		}
		let e = !0;
		return g("checking"), u.get(f).then((t) => {
			e && (v(t?.document ? t.version : null), g(t?.document ? "present" : "absent"), S(null));
		}).catch((t) => {
			e && (g("error"), S(t instanceof Error ? t.message : "Could not check the Home Assistant copy."));
		}), () => {
			e = !1;
		};
	}, [
		m,
		f,
		u,
		s.status,
		n.saved,
		C
	]);
	let T = async (e) => {
		b(!0), o(!0), S(null);
		try {
			await e();
		} catch (e) {
			S(e instanceof Error ? e.message : "Could not complete this action. Try again.");
		} finally {
			b(!1), o(!1);
		}
	}, E = async () => {
		if (d) {
			let t = await e.read(f);
			if (t?.record) await Te(ce(t.metadata, t.record), `${f}-backup.cabane`);
			else {
				let t = await e.readRaw(f);
				if (t === null) throw Error("No saved record exists.");
				z(t, `${f}-recovery.json`);
			}
		} else {
			let e = await u.get(f);
			if (!e?.document) throw Error("No Home Assistant copy exists.");
			if (e.corrupt) z(e.document, `${f}-ha-recovery.json`);
			else {
				let e = await l.get(f);
				if (!e?.document) throw Error("No Home Assistant copy exists.");
				await Te(e.document, `${f}-backup.cabane`);
			}
		}
	}, D = async (t) => {
		if (d) {
			let t = await e.read(f);
			if (!t || t.record?.revision !== d.record?.revision) throw Error("This workspace changed. Cancel and reopen Delete to review it.");
		}
		if (t === "permanent" && m && h !== "absent") {
			if (h !== "present" || _ === null) throw Error("Check the Home Assistant copy before deleting it.");
			try {
				await u.delete(f, _);
			} catch (e) {
				throw g("error"), e;
			}
			g("absent"), v(null);
		}
		let n = /* @__PURE__ */ new Set([m, d?.metadata.homeAssistantUrl]);
		for (let e of n) e && await Ka(window.indexedDB, e, f);
		d && await r(), await i();
	}, O = (0, U.useCallback)(() => {
		S(null), w((e) => e + 1), s.status !== "connected" && (s.status === "disconnected" || s.status === "unconfigured" ? s.connect() : s.retry());
	}, [s]);
	return /* @__PURE__ */ (0, Q.jsx)(Za, {
		name: p,
		local: !!d,
		remote: h,
		server: m,
		busy: y,
		error: x ?? (h === "error" ? s.error ?? "Connect to Home Assistant to check or delete its saved copy. Local removal is still available." : null),
		onCancel: a,
		onRetry: O,
		onBackup: () => void T(E),
		onDelete: (e) => void T(() => D(e))
	});
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceHaLibrary.tsx
function eo({ repository: e, onRestored: n, onBusyChange: r, localWorkspaceIds: i, disabled: a = !1 }) {
	let o = t(), { runtime: s, client: c, coordinator: l } = Ya(e), [u, d] = (0, U.useState)([]), [f, p] = (0, U.useState)(null), [m, h] = (0, U.useState)(null), [g, _] = (0, U.useState)(!1), [v, y] = (0, U.useState)(null), b = v !== null || g;
	(0, U.useEffect)(() => {
		r?.(b);
	}, [b, r]);
	let x = (0, U.useCallback)(async () => {
		try {
			d(await c.list()), p(null);
		} catch (e) {
			p(e instanceof Error ? e.message : "Could not list HA workspaces.");
		}
	}, [c]), S = i?.join("\0");
	(0, U.useEffect)(() => {
		if (s.status !== "connected") return;
		x();
		let e = () => void x();
		return window.addEventListener("focus", e), () => window.removeEventListener("focus", e);
	}, [
		s.status,
		x,
		S
	]);
	let C = async (e) => {
		y(e.home_id), p(null);
		try {
			if ((await l.openRemote(e.home_id, s.origin)).kind === "conflict") throw Error("This browser has different changes. Open the local workspace to review its saved copies.");
			await n(e.home_id);
		} catch (e) {
			p(e instanceof Error ? e.message : "Could not restore this workspace.");
		} finally {
			y(null);
		}
	}, w = async (e) => {
		try {
			let t = await c.get(e.home_id);
			if (!t?.document) throw Error("No HA copy exists.");
			z(t.document, `${e.home_id}-ha-recovery.json`);
		} catch (e) {
			p(e instanceof Error ? e.message : "Could not download HA data.");
		}
	}, T = m && /* @__PURE__ */ (0, Q.jsx)(Qa, {
		repository: e,
		target: {
			saved: m,
			origin: s.origin
		},
		onCancel: () => h(null),
		onBusyChange: _,
		onDeleted: async () => {
			d((e) => e.filter((e) => e.home_id !== m.home_id)), h(null), p(null);
		}
	});
	if (i) {
		let e = u.filter((e) => !e.corrupt && !i.includes(e.home_id));
		return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
			s.status === "connected" && e.map((e) => /* @__PURE__ */ (0, Q.jsxs)("article", {
				className: "workspace-card workspace-card--suggested",
				children: [
					/* @__PURE__ */ (0, Q.jsx)("button", {
						type: "button",
						className: "workspace-card-target",
						disabled: b || a,
						"aria-label": `Add ${e.name} from Home Assistant`,
						"aria-busy": v === e.home_id,
						onClick: () => void C(e)
					}),
					/* @__PURE__ */ (0, Q.jsxs)("details", { children: [/* @__PURE__ */ (0, Q.jsx)("summary", {
						"aria-label": `Actions for ${e.name}`,
						children: "•••"
					}), /* @__PURE__ */ (0, Q.jsx)("div", {
						className: "workspace-menu",
						children: /* @__PURE__ */ (0, Q.jsx)("button", {
							type: "button",
							disabled: b || a,
							onClick: () => h(e),
							children: "Delete"
						})
					})] }),
					/* @__PURE__ */ (0, Q.jsx)("h2", { children: e.name }),
					/* @__PURE__ */ (0, Q.jsx)("p", {
						className: "workspace-suggestion-description",
						children: "Saved in Home Assistant"
					}),
					/* @__PURE__ */ (0, Q.jsxs)("p", {
						className: "workspace-server workspace-suggestion-server",
						children: [/* @__PURE__ */ (0, Q.jsx)(Xa, {}), /* @__PURE__ */ (0, Q.jsx)("span", { children: new URL(s.origin).host })]
					}),
					/* @__PURE__ */ (0, Q.jsx)("div", {
						className: "workspace-card-footer",
						children: /* @__PURE__ */ (0, Q.jsxs)("span", {
							className: "workspace-suggestion-action",
							children: [/* @__PURE__ */ (0, Q.jsx)(H, { name: "plus" }), v === e.home_id ? "Adding workspace…" : "Add workspace"]
						})
					})
				]
			}, e.home_id)),
			T,
			(f || s.error) && /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "workspace-suggestion-error",
				children: [/* @__PURE__ */ (0, Q.jsx)("p", {
					role: "alert",
					className: "workspace-error",
					children: f ?? s.error
				}), /* @__PURE__ */ (0, Q.jsx)("button", {
					type: "button",
					disabled: b || a,
					onClick: () => {
						s.status === "connected" ? x() : s.retry();
					},
					children: "Retry suggested workspaces"
				})]
			})
		] });
	}
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "workspace-ha-library-content",
		children: [
			s.status === "connected" ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
				/* @__PURE__ */ (0, Q.jsx)("button", {
					type: "button",
					onClick: () => void x(),
					children: "Refresh"
				}),
				u.length === 0 && !f && /* @__PURE__ */ (0, Q.jsx)("p", { children: "No Cabane workspaces saved on this HA instance." }),
				u.map((e) => /* @__PURE__ */ (0, Q.jsxs)("div", { children: [
					/* @__PURE__ */ (0, Q.jsx)("span", { children: e.name }),
					/* @__PURE__ */ (0, Q.jsx)("button", {
						type: "button",
						disabled: b,
						onClick: () => void (e.corrupt ? w(e) : C(e)),
						children: e.corrupt ? "Download raw data" : "Open"
					}),
					/* @__PURE__ */ (0, Q.jsx)("button", {
						type: "button",
						disabled: b,
						onClick: () => h(e),
						children: "Delete"
					})
				] }, e.home_id))
			] }) : o ? /* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("p", {
				role: "status",
				children: s.error ?? "Waiting for Home Assistant…"
			}), ["error", "disconnected"].includes(s.status) && /* @__PURE__ */ (0, Q.jsx)("button", {
				type: "button",
				onClick: s.retry,
				children: "Retry connection"
			})] }) : /* @__PURE__ */ (0, Q.jsx)("button", {
				type: "button",
				onClick: s.connect,
				children: "Sign in to Home Assistant"
			}),
			T,
			s.error && /* @__PURE__ */ (0, Q.jsx)("p", {
				role: "alert",
				children: s.error
			}),
			f && /* @__PURE__ */ (0, Q.jsx)("p", {
				role: "alert",
				children: f
			})
		]
	});
}
function to({ repository: e, onRestored: n, initialOrigin: r, onBusyChange: i }) {
	let a = t(), [o, s] = (0, U.useState)(() => window.sessionStorage.getItem("cabane:ha-library-origin") ?? r ?? ""), c = a?.origin ?? S(o);
	return (0, U.useEffect)(() => {
		c && !a && window.sessionStorage.setItem("cabane:ha-library-origin", c);
	}, [c, a]), /* @__PURE__ */ (0, Q.jsxs)("section", {
		className: "workspace-ha-library",
		children: [
			a ? /* @__PURE__ */ (0, Q.jsxs)("p", { children: [
				"Choose a workspace saved on ",
				a.origin,
				". Sign-in is managed by Home Assistant."
			] }) : /* @__PURE__ */ (0, Q.jsx)("p", { children: "Sign in to choose a saved workspace." }),
			!a && /* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Home Assistant address", /* @__PURE__ */ (0, Q.jsx)("input", {
				value: o,
				onChange: (e) => s(e.target.value),
				placeholder: "Enter HTTPS address"
			})] }),
			c && /* @__PURE__ */ (0, Q.jsx)(T, {
				homeAssistantUrl: c,
				children: /* @__PURE__ */ (0, Q.jsx)(eo, {
					repository: e,
					onRestored: n,
					onBusyChange: i
				})
			}, c)
		]
	});
}
function no({ repository: e, onRestored: n, localWorkspaceIds: r, busy: i, onBusyChange: a }) {
	let o = t();
	return o ? /* @__PURE__ */ (0, Q.jsx)(T, {
		homeAssistantUrl: o.origin,
		children: /* @__PURE__ */ (0, Q.jsx)(eo, {
			repository: e,
			onRestored: n,
			localWorkspaceIds: r,
			disabled: i,
			onBusyChange: a
		})
	}, o.origin) : null;
}
//#endregion
//#region apps/web/src/workspaces/NativeWorkspaceWelcome.tsx
function ro({ session: e, repository: t, onRestored: n, onBuild: r, onExplore: i, onCancel: a }) {
	let [o, c] = (0, U.useState)({ kind: "checking" }), [l, u] = (0, U.useState)(!1), [d, f] = (0, U.useState)(0);
	return (0, U.useEffect)(() => {
		let t = !0;
		c({ kind: "checking" });
		let n = window.setTimeout(() => {
			t = !1, c({
				kind: "error",
				message: "Home Assistant took too long to check saved homes. Try again."
			});
		}, 1e4);
		return (async () => {
			let t = s(window.location.href, e.origin);
			if (t) throw Error(t);
			if (e.connection.connected === !1) throw Error("Home Assistant is disconnected. Reconnect and try again.");
			return Fa((t) => e.connection.sendMessagePromise(t)).list();
		})().then((e) => {
			t && c({ kind: e.length ? "saved" : "empty" });
		}).catch((e) => {
			t && c({
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
	]), o.kind === "checking" ? /* @__PURE__ */ (0, Q.jsx)("main", {
		className: "direction-project-loading",
		role: "status",
		children: "Checking for homes saved on Home Assistant…"
	}) : o.kind === "empty" ? /* @__PURE__ */ (0, Q.jsx)(ji, {
		to: "/welcome",
		replace: !0
	}) : /* @__PURE__ */ (0, Q.jsx)("main", {
		className: "workspace-library",
		children: /* @__PURE__ */ (0, Q.jsxs)(Ia, {
			title: "Import a workspace",
			busy: l,
			error: o.kind === "error" ? o.message : null,
			onCancel: () => void a(),
			children: [o.kind === "saved" ? /* @__PURE__ */ (0, Q.jsx)(to, {
				repository: t,
				onRestored: n,
				initialOrigin: e.origin,
				onBusyChange: u
			}) : /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("p", { children: "Could not check your saved homes." }), /* @__PURE__ */ (0, Q.jsx)("button", {
				type: "button",
				onClick: () => f((e) => e + 1),
				children: "Try again"
			})] }), /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "workspace-library-actions",
				children: [/* @__PURE__ */ (0, Q.jsx)("button", {
					type: "button",
					disabled: l,
					onClick: () => void r(),
					children: "Create a new home"
				}), /* @__PURE__ */ (0, Q.jsx)("button", {
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
//#region apps/web/src/workspaces/workspace-open-link.ts
var io = (e) => /^[A-Za-z0-9_-]{1,200}$/.test(e), ao = (e) => {
	let t = S(e);
	return t && (e === t || e === `${t}/`) ? t : null;
};
function oo(e) {
	let t = new URLSearchParams(e).get("action");
	return t === "sync" || t === "dashboard" || t === "device" ? t : null;
}
function so(e, t, n, r) {
	let i = ao(n);
	if (!io(t) || !i) throw Error("A valid workspace and Home Assistant address are required.");
	let a = new URL(`/open/${encodeURIComponent(t)}`, e);
	if (!["https:", "http:"].includes(a.protocol) || a.username || a.password) throw Error("Invalid Cabane address.");
	return a.searchParams.set("ha", i), r && a.searchParams.set("view", "dashboard"), a.href;
}
function co(e) {
	try {
		let t = new URL(e), n = /^\/open\/([^/]+)$/.exec(t.pathname), r = n ? decodeURIComponent(n[1]) : "", i = ao(t.searchParams.get("ha") ?? "");
		return !io(r) || !i ? null : {
			homeId: r,
			origin: i,
			dashboard: t.searchParams.get("view") === "dashboard"
		};
	} catch {
		return null;
	}
}
//#endregion
//#region apps/web/src/editor-routes.ts
var lo = [
	{
		path: "/build",
		handle: { mode: "construct" }
	},
	{
		path: "/workspaces/:workspaceId/shortcuts",
		handle: {
			mode: "construct",
			panel: "action-bar"
		}
	},
	{
		path: "/workspaces/:workspaceId/action-bar",
		handle: {
			mode: "construct",
			panel: "action-bar"
		}
	},
	{
		path: "/workspaces/:workspaceId/construct",
		handle: { mode: "construct" }
	},
	{
		path: "/workspaces/:workspaceId/arrange",
		handle: { mode: "furnish" }
	},
	{
		path: "/workspaces/:workspaceId/connect",
		handle: { mode: "connect" }
	},
	{
		path: "/workspaces/:workspaceId/connect/rooms",
		handle: {
			mode: "connect",
			view: "rooms"
		}
	},
	{
		path: "/workspaces/:workspaceId/connect/devices",
		handle: {
			mode: "connect",
			view: "devices"
		}
	}
];
function uo(e) {
	return Je(lo, e)?.[0].route.handle ?? null;
}
function $(e) {
	return `/workspaces/${encodeURIComponent(e)}`;
}
function fo(e) {
	return `${$(e)}/construct?agent-pilot=1`;
}
function po(e) {
	return new URLSearchParams(e).get("agent-pilot") === "1";
}
function mo(e) {
	return Je([{ path: "/workspaces/:workspaceId/*" }], e)?.[0].params.workspaceId ?? null;
}
function ho(e, t) {
	let n = $(t);
	return e.panel === "home-assistant" ? `${n}/home-assistant` : e.panel === "action-bar" ? `${n}/shortcuts` : e.mode === "construct" ? `${n}/construct` : e.mode === "furnish" ? `${n}/arrange` : e.relationshipId ? `${n}/connect/devices` : e.view ? `${n}/connect/${e.view}` : `${n}/connect`;
}
function go(e, t) {
	return !uo(t) || mo(t) !== e;
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceOpenPage.tsx
function _o({ repository: e, target: t, onOpened: n }) {
	let { runtime: r, coordinator: i } = Ya(e, t.origin), a = (0, U.useRef)(!1), [o, s] = (0, U.useState)(!1), [c, l] = (0, U.useState)(null), [u, d] = (0, U.useState)(!1), f = (0, U.useCallback)(async () => {
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
	(0, U.useEffect)(() => {
		r.status === "connected" && !a.current && (a.current = !0, f());
	}, [r.status, f]);
	let p = [
		"authenticating",
		"connecting",
		"reconnecting"
	].includes(r.status);
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("header", {
		className: "ha-page__header",
		children: [/* @__PURE__ */ (0, Q.jsx)("h1", { children: "Open your home" }), /* @__PURE__ */ (0, Q.jsx)("p", { children: t.origin })]
	}), /* @__PURE__ */ (0, Q.jsxs)("section", {
		className: "ha-section",
		children: [
			o ? /* @__PURE__ */ (0, Q.jsx)("p", {
				role: "status",
				children: "Opening your saved home…"
			}) : r.status === "connected" ? c && !u ? /* @__PURE__ */ (0, Q.jsx)("button", {
				className: "ha-primary",
				onClick: () => void f(),
				children: "Try again"
			}) : null : /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("p", { children: "Sign in to Home Assistant to open this home here." }), /* @__PURE__ */ (0, Q.jsxs)("button", {
				className: "ha-primary",
				disabled: p,
				onClick: r.connect,
				children: [p ? "Signing in…" : "Sign in & open", /* @__PURE__ */ (0, Q.jsx)(H, { name: "external" })]
			})] }),
			r.error && /* @__PURE__ */ (0, Q.jsx)("p", {
				role: "alert",
				className: "ha-error",
				children: r.error
			}),
			c && /* @__PURE__ */ (0, Q.jsx)("p", {
				role: "alert",
				className: "ha-error",
				children: c
			}),
			u && /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "ha-actions",
				children: [/* @__PURE__ */ (0, Q.jsx)(Z, {
					to: `${$(t.homeId)}/home-assistant?action=sync`,
					children: "Review copies"
				}), /* @__PURE__ */ (0, Q.jsx)(Z, {
					to: $(t.homeId),
					children: "Open browser copy"
				})]
			}),
			/* @__PURE__ */ (0, Q.jsx)("p", {
				className: "ha-help",
				children: "This browser will stay in sync. Access requires your Home Assistant sign-in."
			})
		]
	})] });
}
function vo({ repository: e, onOpened: t }) {
	let n = X(), r = co(new URL(`${n.pathname}${n.search}`, window.location.origin).href);
	return /* @__PURE__ */ (0, Q.jsx)("main", {
		className: "ha-page",
		children: /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "ha-page__content",
			children: [/* @__PURE__ */ (0, Q.jsx)("nav", {
				className: "ha-page__nav",
				children: /* @__PURE__ */ (0, Q.jsxs)(Z, {
					to: "/workspaces",
					children: [/* @__PURE__ */ (0, Q.jsx)(H, { name: "back" }), "Workspaces"]
				})
			}), r ? /* @__PURE__ */ (0, Q.jsx)(T, {
				homeAssistantUrl: r.origin,
				children: /* @__PURE__ */ (0, Q.jsx)(_o, {
					repository: e,
					target: r,
					onOpened: t
				})
			}, `${r.origin}/${r.homeId}`) : /* @__PURE__ */ (0, Q.jsxs)("header", {
				className: "ha-page__header",
				children: [
					/* @__PURE__ */ (0, Q.jsx)("h1", { children: "This link is incomplete" }),
					/* @__PURE__ */ (0, Q.jsx)("p", { children: "Open the home from your Home Assistant library." }),
					/* @__PURE__ */ (0, Q.jsx)(Z, {
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
var yo = "cabane:last-opened-workspace", bo = (e) => `cabane:workspace-preview:${e}`;
function xo() {
	try {
		return window.localStorage.getItem(yo);
	} catch {
		return null;
	}
}
function So(e) {
	try {
		window.localStorage.setItem(yo, e);
	} catch {}
}
function Co(e) {
	try {
		return window.localStorage.getItem(bo(e));
	} catch {
		return null;
	}
}
function wo(e, t) {
	if (!(!t.width || !t.height)) try {
		let n = document.createElement("canvas"), r = Math.min(640 / t.width, 480 / t.height, 1);
		n.width = Math.max(1, Math.round(t.width * r)), n.height = Math.max(1, Math.round(t.height * r));
		let i = n.getContext("2d");
		if (!i) return;
		i.drawImage(t, 0, 0, n.width, n.height), window.localStorage.setItem(bo(e), n.toDataURL("image/webp", .75));
	} catch {}
}
function To(e) {
	try {
		window.localStorage.removeItem(bo(e)), xo() === e && window.localStorage.removeItem(yo);
	} catch {}
}
//#endregion
//#region apps/web/src/onboarding-config.ts
var Eo = {
	available: !1,
	source: "https://github.com/cabane-app/cabane",
	selfHost: "https://github.com/cabane-app/cabane#readme"
};
//#endregion
//#region apps/web/src/workspaces/first-onboarding-light.ts
function Do(e, t) {
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
function Oo(e) {
	let t = Jr(), n = X(), [r, i] = (0, U.useState)(null), [a, o] = (0, U.useState)(!1), [s, l] = (0, U.useState)(!1), u = (0, U.useRef)(!1), [d, f] = (0, U.useState)(null), [m, h] = (0, U.useState)(null), g = (0, U.useCallback)(async () => {
		if (e) try {
			i(await e.readOnboarding());
		} catch {
			f("Getting-started preferences are unavailable. Your workspaces are still available.");
		} finally {
			o(!0);
		}
	}, [e]);
	return (0, U.useEffect)(() => {
		g();
		let e = () => {
			g();
		};
		return window.addEventListener("focus", e), () => window.removeEventListener("focus", e);
	}, [g]), {
		state: r,
		loaded: a,
		busy: s,
		error: d,
		deleted: m,
		dismiss: (0, U.useCallback)(async (t) => {
			i((e) => e && {
				...e,
				[t === "welcome" ? "welcomeDismissed" : "nudgeDismissed"]: !0
			});
			try {
				await e?.dismissOnboarding(t);
			} catch {
				f("This preference could not be saved. You can keep using your home.");
			}
		}, [e]),
		start: (0, U.useCallback)(async (r, i) => {
			if (!(!e || u.current)) {
				u.current = !0, l(!0), f(null), h(null);
				try {
					let a = await e.readOnboarding(), o = await e.startOnboarding(r, { ...i === void 0 ? {} : { replaceDeletedId: i } });
					if (!o.record) throw Error(o.error ?? "Open Workspaces to recover this home.");
					let s = C();
					try {
						s = c(window.localStorage, o.metadata.id).record;
					} catch {}
					let l = s.launch?.target ?? (r === "connect" && o.record.publishedAt !== 0 ? Do(L(o.record.published), "open-plan-living") : void 0), u = {
						...s,
						launch: {
							entry: r,
							introductionDismissed: !0,
							starterConsumed: !0,
							nudgeDismissed: !0,
							firstControlConfirmed: s.launch?.firstControlConfirmed ?? !1,
							...l ? { target: l } : {}
						}
					}, d = !1;
					try {
						d = p(window.localStorage, o.metadata.id, u);
					} catch {}
					if (d || f("Setup progress could not be saved. Your new home is safe in Workspaces."), r === "build" && a?.destinations.build !== o.metadata.id && me(o.metadata.id), await g(), r === "build") {
						n.pathname !== "/build" && await t("/build");
						return;
					}
					l && o.metadata.homeAssistantUrl && o.record.bindings[o.metadata.homeAssistantUrl]?.published.entityIdsBySlotId[l.slotId] ? await t($(o.metadata.id)) : await t(ho({
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
					f(e instanceof Error ? e.message : "Could not open your home. Please try again."), e instanceof ie && h({
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
			g,
			n.pathname
		]),
		clearError: () => {
			f(null), h(null);
		}
	};
}
//#endregion
//#region apps/web/src/workspaces/workspace-availability.ts
function ko(e, t = !1, n) {
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
function Ao({ entry: e, busy: n, onOpen: r, onAction: i, onRecover: a, onExportRaw: o }) {
	let { metadata: s, record: c, error: l } = e, u = t(), [d, f] = (0, U.useState)(null), [p, m] = (0, U.useState)(!1), [h, g] = (0, U.useState)(!1), [_, v] = (0, U.useState)(!s.homeAssistantUrl);
	(0, U.useEffect)(() => {
		let e = !0;
		f(null), m(!1), g(!1), v(!s.homeAssistantUrl);
		let t = () => {
			s.homeAssistantUrl && Wa(window.indexedDB, s.homeAssistantUrl, s.id).then(async (t) => {
				let n = !!(t && c && await qa(s, c) !== t.acknowledgedFingerprint);
				e && (f(t), m(n), v(!0));
			}).catch(() => {
				e && (g(!0), v(!0));
			});
		};
		return t(), window.addEventListener("focus", t), () => {
			e = !1, window.removeEventListener("focus", t);
		};
	}, [
		s.id,
		s.homeAssistantUrl,
		c,
		s
	]);
	let y = ko(d, p), b = {
		settings: "Home Assistant settings",
		sync: "Sync with Home Assistant",
		dashboard: "Add to Home Assistant",
		device: "Open on another device",
		"agent-pilot": "Connect LLM agent",
		rename: "Rename",
		duplicate: "Duplicate",
		export: "Export",
		delete: "Delete"
	}, x = Co(s.id), S = c && JSON.stringify(c.draft) !== JSON.stringify(c.published);
	return /* @__PURE__ */ (0, Q.jsxs)("article", {
		className: `workspace-card${l ? " workspace-card--recovery" : ""}`,
		children: [
			!l && /* @__PURE__ */ (0, Q.jsx)("button", {
				className: "workspace-card-target",
				disabled: n,
				onClick: r,
				"aria-label": `Open ${s.name}`
			}),
			/* @__PURE__ */ (0, Q.jsxs)("details", { children: [/* @__PURE__ */ (0, Q.jsx)("summary", {
				"aria-label": `Actions for ${s.name}`,
				children: "•••"
			}), /* @__PURE__ */ (0, Q.jsx)("div", {
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
				].filter((e) => (e !== "sync" || !d?.enabled) && (e !== "agent-pilot" || !!u)).map((e) => /* @__PURE__ */ (0, Q.jsx)("button", {
					disabled: n || !!(l && e !== "delete"),
					onClick: (t) => {
						let n = t.currentTarget.closest("details");
						n?.removeAttribute("open"), n?.querySelector("summary")?.focus(), i(e);
					},
					children: b[e]
				}, e))
			})] }),
			x && /* @__PURE__ */ (0, Q.jsx)("img", {
				className: "workspace-preview",
				src: x,
				alt: `Preview of ${s.name}`,
				loading: "lazy"
			}),
			/* @__PURE__ */ (0, Q.jsx)("h2", { children: s.name }),
			/* @__PURE__ */ (0, Q.jsxs)("dl", {
				className: "workspace-availability",
				children: [/* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("dt", { children: "Connection" }), /* @__PURE__ */ (0, Q.jsxs)("dd", { children: [/* @__PURE__ */ (0, Q.jsx)(H, { name: "devices" }), s.homeAssistantUrl ? "HA configured" : "HA not connected"] })] }), /* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("dt", { children: "Storage" }), /* @__PURE__ */ (0, Q.jsxs)("dd", { children: [/* @__PURE__ */ (0, Q.jsx)(H, { name: h ? "warning" : y.icon }), h ? "Storage unavailable" : _ ? y.label : "Checking storage…"] })] })]
			}),
			(l || !s.hasPublished || S) && /* @__PURE__ */ (0, Q.jsx)("p", {
				className: "workspace-status",
				children: l ? "Needs recovery" : s.hasPublished ? "Unapplied changes" : "Draft"
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "workspace-card-footer",
				children: [/* @__PURE__ */ (0, Q.jsx)("p", {
					className: "workspace-server",
					children: s.homeAssistantUrl && /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(Xa, {}), /* @__PURE__ */ (0, Q.jsx)("span", { children: new URL(s.homeAssistantUrl).host })] })
				}), !l && /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "workspace-card-arrow",
					"aria-hidden": "true",
					children: "→"
				})]
			}),
			l ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("p", {
				className: "workspace-error",
				children: l
			}), /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "workspace-card-recovery",
				children: [/* @__PURE__ */ (0, Q.jsx)("button", {
					disabled: n,
					onClick: a,
					children: "Recover workspace"
				}), /* @__PURE__ */ (0, Q.jsx)("button", {
					disabled: n,
					onClick: o,
					children: "Export raw data"
				})]
			})] }) : null
		]
	});
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceNameDialog.tsx
function jo({ action: e, initialName: t, busy: n, error: r, onSave: i, onCancel: a }) {
	let [o, s] = (0, U.useState)(t);
	return /* @__PURE__ */ (0, Q.jsx)(Ia, {
		title: e === "create" ? "New workspace" : e === "rename" ? "Rename workspace" : "Duplicate workspace",
		busy: n,
		error: r,
		onCancel: a,
		children: /* @__PURE__ */ (0, Q.jsxs)("form", {
			onSubmit: (e) => {
				e.preventDefault(), o.trim() && i(o.trim());
			},
			children: [
				/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Workspace name", /* @__PURE__ */ (0, Q.jsx)("input", {
					autoFocus: !0,
					required: !0,
					value: o,
					onChange: (e) => s(e.target.value)
				})] }),
				e === "duplicate" && /* @__PURE__ */ (0, Q.jsx)("p", { children: "The copy includes the saved design, connection, and mappings." }),
				/* @__PURE__ */ (0, Q.jsx)("button", {
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
function Mo({ mode: e, busy: t, error: n, onImport: r, onExport: i, onCancel: a, remoteImport: o }) {
	let s = X(), c = Jr(), [l, u] = (0, U.useState)(() => new URLSearchParams(s.search).get("import") === "home-assistant" ? "ha" : "file"), [d, f] = (0, U.useState)(""), [p, m] = (0, U.useState)(null);
	return /* @__PURE__ */ (0, Q.jsxs)(Ia, {
		title: e === "import" ? "Import workspace" : "Export workspace",
		titleIcon: e === "import" ? /* @__PURE__ */ (0, Q.jsx)(H, { name: "import" }) : void 0,
		busy: t,
		error: p ?? n,
		onCancel: a,
		children: [e === "import" && o && /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "workspace-import-sources",
			"aria-label": "Import source",
			children: [/* @__PURE__ */ (0, Q.jsxs)("button", {
				"aria-pressed": l === "file",
				onClick: () => {
					c("/workspaces", { replace: !0 }), u("file");
				},
				children: [/* @__PURE__ */ (0, Q.jsx)(H, { name: "file" }), "From file"]
			}), /* @__PURE__ */ (0, Q.jsxs)("button", {
				"aria-pressed": l === "ha",
				onClick: () => {
					c("/workspaces?import=home-assistant", { replace: !0 }), u("ha");
				},
				children: [/* @__PURE__ */ (0, Q.jsx)(Xa, {}), "From Home Assistant"]
			})]
		}), e === "import" && l === "ha" ? o : e === "import" ? /* @__PURE__ */ (0, Q.jsxs)("form", {
			onSubmit: (e) => {
				e.preventDefault(), r(d);
			},
			children: [
				/* @__PURE__ */ (0, Q.jsx)("p", { children: "A project or backup creates a new workspace." }),
				/* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Cabane archive or JSON file", /* @__PURE__ */ (0, Q.jsx)("input", {
					type: "file",
					accept: ".cabane,.json,application/zip,application/json",
					disabled: t,
					onChange: (e) => {
						(async () => {
							let t = e.target.files?.[0];
							if (m(null), f(""), t) try {
								f((await pe(t)).json);
							} catch (e) {
								m(e instanceof Error ? e.message : "Could not read that file. Please choose it again.");
							}
						})();
					}
				})] }),
				/* @__PURE__ */ (0, Q.jsxs)("button", {
					className: "workspace-primary",
					disabled: t || !d,
					children: [/* @__PURE__ */ (0, Q.jsx)(H, { name: "import" }), t ? "Importing…" : "Import workspace"]
				})
			]
		}) : /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "workspace-export-options",
			children: [
				/* @__PURE__ */ (0, Q.jsx)("p", { children: "Export the latest saved version." }),
				/* @__PURE__ */ (0, Q.jsxs)("button", {
					disabled: t,
					onClick: () => i(!1),
					children: ["Portable design", /* @__PURE__ */ (0, Q.jsx)("span", { children: "Design only, without connection or mappings." })]
				}),
				/* @__PURE__ */ (0, Q.jsxs)("button", {
					disabled: t,
					onClick: () => i(!0),
					children: ["Private backup", /* @__PURE__ */ (0, Q.jsx)("span", { children: "Design, drafts, connection, and mappings. No credentials." })]
				})
			]
		})]
	});
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceLibrary.tsx
function No(e) {
	let n = t(), r = m("cabane-icon.png"), i = X(), a = Jr(), [o, s] = (0, U.useState)(() => new URLSearchParams(i.search).get("import") === "home-assistant" ? { action: "import" } : null), [c, l] = (0, U.useState)(!1), [u, d] = (0, U.useState)(null), f = (e) => {
		d(null), s(e);
	}, p = async (e) => {
		l(!0), d(null);
		try {
			await e(), s(null);
		} catch (e) {
			d(e instanceof Error ? e.message : "Could not complete this action. Please try again.");
		} finally {
			l(!1);
		}
	}, h = e.entries.filter((t) => !t.error && t.metadata.id !== e.demoWorkspaceId), g = () => {
		h.length === 1 ? p(() => e.onSettings(h[0].metadata.id, "dashboard")) : f({ action: "setup-ha" });
	}, _ = () => {
		s(null), d(null), a("/workspaces", { replace: !0 });
	};
	return /* @__PURE__ */ (0, Q.jsxs)("main", {
		className: "workspace-library",
		children: [
			/* @__PURE__ */ (0, Q.jsxs)("header", {
				className: "workspace-library-header",
				children: [/* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsxs)("p", {
					className: "workspace-brand",
					children: [/* @__PURE__ */ (0, Q.jsx)("img", {
						src: r,
						alt: "",
						width: "28",
						height: "33"
					}), "Cabane"]
				}), /* @__PURE__ */ (0, Q.jsx)("h1", { children: "Your workspaces" })] }), /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "workspace-library-actions",
					children: [/* @__PURE__ */ (0, Q.jsxs)("button", {
						className: "workspace-primary",
						disabled: c,
						onClick: () => f({ action: "create" }),
						children: [/* @__PURE__ */ (0, Q.jsx)(H, { name: "plus" }), "New workspace"]
					}), /* @__PURE__ */ (0, Q.jsxs)("button", {
						disabled: c,
						onClick: () => f({ action: "import" }),
						children: [/* @__PURE__ */ (0, Q.jsx)(H, { name: "import" }), "Import workspace"]
					})]
				})]
			}),
			e.onSettings && !n && /* @__PURE__ */ (0, Q.jsx)("div", {
				className: "workspace-ha-entry",
				children: /* @__PURE__ */ (0, Q.jsxs)("button", {
					disabled: c,
					onClick: g,
					children: ["Add Cabane to Home Assistant", /* @__PURE__ */ (0, Q.jsx)(H, { name: "chevron" })]
				})
			}),
			!o && u && /* @__PURE__ */ (0, Q.jsx)("p", {
				role: "alert",
				className: "workspace-error",
				children: u
			}),
			!e.entries.length && /* @__PURE__ */ (0, Q.jsxs)("section", {
				className: "workspace-empty",
				children: [/* @__PURE__ */ (0, Q.jsx)("h2", { children: "A place for your next home" }), /* @__PURE__ */ (0, Q.jsx)("p", { children: "Create a workspace from scratch, or import a saved Cabane project." })]
			}),
			/* @__PURE__ */ (0, Q.jsxs)("section", {
				className: "workspace-grid",
				"aria-label": "Homes",
				children: [e.entries.map((t) => /* @__PURE__ */ (0, Q.jsx)(Ao, {
					entry: t,
					busy: c,
					onOpen: () => void p(() => e.onOpen(t.metadata.id)),
					onAction: (n) => [
						"settings",
						"sync",
						"dashboard",
						"device"
					].includes(n) ? void p(() => e.onSettings?.(t.metadata.id, n === "settings" ? void 0 : n) ?? Promise.resolve()) : n === "agent-pilot" ? void p(() => e.onAgentPilot(t.metadata.id)) : f({
						action: n,
						entry: t
					}),
					onRecover: () => void p(() => e.onRecover(t.metadata.id)),
					onExportRaw: () => void p(() => e.onExportRaw(t.metadata.id))
				}, t.metadata.id)), e.renderSuggestions?.(c, l)]
			}),
			o?.action === "setup-ha" && /* @__PURE__ */ (0, Q.jsxs)(Ia, {
				title: "Add Cabane to Home Assistant",
				busy: c,
				error: u,
				onCancel: _,
				children: [
					/* @__PURE__ */ (0, Q.jsx)("p", { children: h.length ? "Choose the home to sync with Home Assistant." : "Create or import a home first. You can keep using Cabane in this browser." }),
					/* @__PURE__ */ (0, Q.jsx)("div", {
						className: "workspace-setup-homes",
						children: h.map((t) => /* @__PURE__ */ (0, Q.jsx)("button", {
							disabled: c,
							onClick: () => void p(() => e.onSettings(t.metadata.id, "dashboard")),
							children: t.metadata.name
						}, t.metadata.id))
					}),
					!h.length && /* @__PURE__ */ (0, Q.jsx)("button", {
						onClick: () => f({ action: "create" }),
						children: "Create a home"
					})
				]
			}),
			o && (o.action === "create" || o.action === "rename" || o.action === "duplicate") && /* @__PURE__ */ (0, Q.jsx)(jo, {
				action: o.action,
				initialName: o.action === "create" ? "" : `${o.entry.metadata.name}${o.action === "duplicate" ? " copy" : ""}`,
				busy: c,
				error: u,
				onCancel: _,
				onSave: (t) => void p(() => o.action === "create" ? e.onCreate(t) : o.action === "rename" ? e.onRename(o.entry.metadata.id, t) : e.onDuplicate(o.entry.metadata.id, t))
			}),
			o?.action === "delete" && e.renderDelete(o.entry, _, l),
			(o?.action === "import" || o?.action === "export") && /* @__PURE__ */ (0, Q.jsx)(Mo, {
				mode: o.action,
				busy: c,
				error: u,
				onCancel: _,
				remoteImport: e.remoteImport,
				onImport: (t) => void p(() => e.onImport(t)),
				onExport: (t) => void p(() => e.onExport(o.entry.metadata.id, t))
			})
		]
	});
}
//#endregion
//#region apps/web/src/workspaces/workspace-weather-source.ts
function Po(e, t, n) {
	let r = k(t), i = e.bindings[r] ?? {
		draft: j(e.homeId),
		published: j(e.homeId),
		manualRoomIds: [],
		manualSlotIds: []
	};
	return {
		...e,
		bindings: {
			...e.bindings,
			[r]: {
				...i,
				draft: {
					...i.draft,
					weatherSource: n
				},
				published: {
					...i.published,
					weatherSource: n
				}
			}
		}
	};
}
//#endregion
//#region apps/web/src/workspaces/workspace-tool-state.ts
function Fo(e, t, n) {
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
function Io(e, t, n) {
	let r = (0, U.useRef)(e), i = (0, U.useRef)({
		onSaved: t,
		onError: n
	});
	(0, U.useLayoutEffect)(() => {
		r.current = e;
	}, [e]), (0, U.useLayoutEffect)(() => {
		i.current = {
			onSaved: t,
			onError: n
		};
	});
	let a = (0, U.useMemo)(() => f(se(window.indexedDB), V), []);
	return (0, U.useMemo)(() => {
		let e = Promise.resolve();
		return {
			storage: {
				read: (e) => r.current.published.toolState?.[e],
				write: (t, n) => {
					let o = structuredClone(n), s = e.then(async () => {
						let e = r.current, n = await a.replace(Fo(e, t, o), e.revision);
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
					let s = await a.replace(Po(e, t, n), e.revision);
					r.current = s, i.current.onSaved(s);
				});
				return e = s.catch(() => void 0), s;
			}
		};
	}, [a]);
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceDestinations.tsx
function Lo({ id: e, origin: n, intent: r, ready: i, panelReady: a }) {
	let o = t(), [s, c] = (0, U.useState)(r === "device" ? r : null), [l, u] = (0, U.useState)("");
	(0, U.useEffect)(() => {
		r === "device" && c(r);
	}, [r]);
	let d = o ? "" : so(window.location.origin, e, n, s === "dashboard"), f = async () => {
		try {
			await navigator.clipboard.writeText(d), u("Link copied.");
		} catch {
			u("Select the URL above to copy it.");
		}
	};
	return o ? /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "ha-destinations",
		children: [
			/* @__PURE__ */ (0, Q.jsx)("h3", { children: "Open your home on another device" }),
			/* @__PURE__ */ (0, Q.jsx)("p", { children: "Open Cabane in your Home Assistant sidebar on the other device. Choose Workspaces → Import workspace → From Home Assistant to select this home." }),
			!i && /* @__PURE__ */ (0, Q.jsx)("p", {
				role: "status",
				children: "Waiting for this home to finish syncing. Your changes are saved in this browser."
			})
		]
	}) : /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "ha-destinations",
		children: [a && i && /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "ha-setup-surface",
			children: [
				/* @__PURE__ */ (0, Q.jsx)("h3", { children: "Your home is ready" }),
				/* @__PURE__ */ (0, Q.jsx)("p", { children: "Find Cabane in your Home Assistant sidebar." }),
				/* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "ha-sidebar-preview",
					"aria-label": "Cabane sidebar entry",
					children: [
						/* @__PURE__ */ (0, Q.jsx)(H, { name: "roof" }),
						"Cabane",
						/* @__PURE__ */ (0, Q.jsx)(H, { name: "check" })
					]
				}),
				/* @__PURE__ */ (0, Q.jsxs)("a", {
					className: "ha-primary ha-link-button",
					href: `${n}/cabane`,
					target: "_blank",
					rel: "noreferrer",
					children: ["Open in Home Assistant", /* @__PURE__ */ (0, Q.jsx)(H, { name: "external" })]
				}),
				/* @__PURE__ */ (0, Q.jsxs)("details", {
					className: "ha-setup-disclosure",
					children: [/* @__PURE__ */ (0, Q.jsx)("summary", { children: "Using the mobile app?" }), /* @__PURE__ */ (0, Q.jsx)("p", { children: "Open the Home Assistant app, open its sidebar, and choose Cabane. Use the same Home Assistant instance." })]
				}),
				/* @__PURE__ */ (0, Q.jsxs)("details", {
					className: "ha-setup-disclosure",
					children: [/* @__PURE__ */ (0, Q.jsx)("summary", { children: "Home not showing up?" }), /* @__PURE__ */ (0, Q.jsx)("p", { children: "In Cabane’s sidebar panel, choose Import workspace → From Home Assistant and open this home. Older versions may call this Open from Home Assistant." })]
				})
			]
		}), /* @__PURE__ */ (0, Q.jsxs)("details", {
			className: "ha-setup-disclosure",
			open: r === "device" || void 0,
			children: [
				/* @__PURE__ */ (0, Q.jsx)("summary", { children: "Other ways to open this home" }),
				/* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "ha-actions",
					children: [/* @__PURE__ */ (0, Q.jsxs)("button", {
						"aria-pressed": s === "dashboard",
						onClick: () => {
							c("dashboard"), u("");
						},
						children: [/* @__PURE__ */ (0, Q.jsx)(H, { name: "grid" }), "Use a Webpage card"]
					}), /* @__PURE__ */ (0, Q.jsxs)("button", {
						"aria-pressed": s === "device",
						onClick: () => {
							c("device"), u("");
						},
						children: [/* @__PURE__ */ (0, Q.jsx)(H, { name: "external" }), "Open on another device"]
					})]
				}),
				s && /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "ha-destination-detail",
					children: [
						/* @__PURE__ */ (0, Q.jsx)("h3", { children: s === "dashboard" ? "Add a Webpage card in Home Assistant" : "Open your home on another device" }),
						/* @__PURE__ */ (0, Q.jsx)("p", { children: s === "dashboard" ? "Paste this URL into the card. Sign in when it first opens." : "Send this link to your other browser or device, then sign in to HA." }),
						i ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
							/* @__PURE__ */ (0, Q.jsx)("label", {
								htmlFor: "ha-workspace-link",
								children: s === "dashboard" ? "Dashboard URL" : "Workspace URL"
							}),
							/* @__PURE__ */ (0, Q.jsx)("input", {
								id: "ha-workspace-link",
								readOnly: !0,
								value: d,
								onFocus: (e) => e.currentTarget.select()
							}),
							/* @__PURE__ */ (0, Q.jsxs)("button", {
								onClick: () => void f(),
								children: [/* @__PURE__ */ (0, Q.jsx)(H, { name: "duplicate" }), s === "dashboard" ? "Copy dashboard URL" : "Copy link"]
							})
						] }) : /* @__PURE__ */ (0, Q.jsx)("p", {
							role: "status",
							children: "Waiting for this home to finish syncing. Your changes are saved in this browser."
						}),
						l && /* @__PURE__ */ (0, Q.jsx)("p", {
							className: "ha-notice",
							role: "status",
							children: l
						})
					]
				})
			]
		})]
	});
}
//#endregion
//#region apps/web/src/workspaces/ha-integration-links.ts
var Ro = "https://github.com/cabane-app/cabane-home-assistant", zo = `${Ro}#install`;
//#endregion
//#region apps/web/src/workspaces/WorkspaceHaInstall.tsx
function Bo({ origin: e, checking: t, panelError: n, onCheck: r }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "ha-setup-surface",
		children: [
			/* @__PURE__ */ (0, Q.jsx)("h3", { children: n ? "Could not check the Cabane sidebar" : "Install Cabane" }),
			n ? /* @__PURE__ */ (0, Q.jsx)("p", { children: "Try again when Home Assistant is available." }) : /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
				/* @__PURE__ */ (0, Q.jsx)("p", { children: "Add Cabane to your Home Assistant sidebar." }),
				/* @__PURE__ */ (0, Q.jsxs)("ol", {
					className: "ha-install-steps",
					children: [
						/* @__PURE__ */ (0, Q.jsxs)("li", { children: [
							"In HACS, add",
							" ",
							/* @__PURE__ */ (0, Q.jsx)("a", {
								href: Ro,
								target: "_blank",
								rel: "noreferrer",
								children: "cabane-app/cabane-home-assistant"
							}),
							" ",
							"as a custom repository of type ",
							/* @__PURE__ */ (0, Q.jsx)("strong", { children: "Integration" }),
							"."
						] }),
						/* @__PURE__ */ (0, Q.jsx)("li", { children: "Download or update Cabane, then restart Home Assistant." }),
						/* @__PURE__ */ (0, Q.jsxs)("li", { children: [
							"In ",
							/* @__PURE__ */ (0, Q.jsx)("strong", { children: "Settings → Devices & services" }),
							", choose",
							" ",
							/* @__PURE__ */ (0, Q.jsx)("strong", { children: "Add integration → Cabane" }),
							"."
						] })
					]
				}),
				/* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "ha-actions",
					children: [/* @__PURE__ */ (0, Q.jsxs)("a", {
						className: "ha-primary ha-link-button",
						href: `${e}/hacs`,
						target: "_blank",
						rel: "noreferrer",
						children: ["Install with HACS", /* @__PURE__ */ (0, Q.jsx)(H, { name: "external" })]
					}), /* @__PURE__ */ (0, Q.jsxs)("a", {
						href: `${e}/config/integrations/dashboard`,
						target: "_blank",
						rel: "noreferrer",
						children: ["Open integrations", /* @__PURE__ */ (0, Q.jsx)(H, { name: "external" })]
					})]
				})
			] }),
			/* @__PURE__ */ (0, Q.jsx)("button", {
				className: "ha-check-install",
				disabled: t,
				onClick: r,
				children: t ? "Checking…" : "Check again"
			}),
			!n && /* @__PURE__ */ (0, Q.jsxs)("details", {
				className: "ha-setup-disclosure",
				children: [
					/* @__PURE__ */ (0, Q.jsx)("summary", { children: "Install manually or get help" }),
					/* @__PURE__ */ (0, Q.jsx)("p", { children: "Use the full cabane.zip release, including its frontend. Restart Home Assistant, then add the Cabane integration." }),
					/* @__PURE__ */ (0, Q.jsxs)("a", {
						href: zo,
						target: "_blank",
						rel: "noreferrer",
						children: ["Setup guide", /* @__PURE__ */ (0, Q.jsx)(H, { name: "external" })]
					})
				]
			})
		]
	});
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceHaStorage.tsx
var Vo = (0, U.createContext)(null);
function Ho({ id: e, origin: t, repository: n, hidden: r = !1, children: i }) {
	let { runtime: a, coordinator: o } = Ya(n, t), [s, c] = (0, U.useState)({ kind: "off" }), l = (0, U.useRef)(!1), u = (0, U.useRef)(0), d = (0, U.useCallback)(async () => {
		if (r || !t || l.current) return;
		let n = u.current;
		l.current = !0;
		try {
			let r = (await Wa(window.indexedDB, t, e))?.enabled ? a.status === "connected" ? await o.reconcile(e, t) : { kind: "disconnected" } : { kind: "off" };
			if (n !== u.current) return;
			c(r), r.detail === "restored" && window.location.reload();
		} catch (e) {
			n === u.current && c({
				kind: "disconnected",
				detail: e instanceof Error ? e.message : "Home Assistant is unavailable."
			});
		} finally {
			l.current = !1;
		}
	}, [
		r,
		t,
		e,
		a.status,
		o
	]);
	return (0, U.useEffect)(() => {
		c({ kind: "off" }), d();
		let e = window.setInterval(() => {
			d();
		}, 3e3);
		return () => {
			u.current += 1, window.clearInterval(e);
		};
	}, [d]), /* @__PURE__ */ (0, Q.jsx)(Vo.Provider, {
		value: r ? null : {
			id: e,
			origin: t,
			repository: n,
			coordinator: o,
			backgroundStatus: s,
			refreshBackground: d
		},
		children: i
	});
}
var Uo = () => (0, U.useContext)(Vo);
function Wo() {
	let e = (0, U.useContext)(Vo);
	return e ? /* @__PURE__ */ (0, Q.jsx)(Go, { ...e }) : null;
}
function Go({ id: e, origin: n, repository: r }) {
	let i = X(), a = t(), o = !!(a && a.origin === n), s = Ya(r, n), c = (0, U.useContext)(Vo), l = c?.coordinator ?? s.coordinator, { runtime: u, client: d } = s, [f, p] = (0, U.useState)("checking"), m = (0, U.useRef)(0), [h, g] = (0, U.useState)(!1), [_, v] = (0, U.useState)(!1), [y, b] = (0, U.useState)(!1), [x, S] = (0, U.useState)(!1), [C, w] = (0, U.useState)(!1), [T, E] = (0, U.useState)({ kind: "off" }), [D, O] = (0, U.useState)(!1), [k, j] = (0, U.useState)(null), [M, N] = (0, U.useState)(null), ee = (0, U.useCallback)(async () => {
		if (!n) return;
		let t = await Wa(window.indexedDB, n, e);
		w(t?.enabled ?? !1);
		let r = await d.get(e);
		return S(!!r?.document), t;
	}, [
		d,
		e,
		n
	]), { sendStorageMessage: P } = u, te = (0, U.useCallback)(async () => {
		let e = ++m.current;
		b(!0), j(null), p("checking");
		let [t, n] = await Promise.allSettled([d.list(), o ? Promise.resolve(null) : P({ type: "get_panels" })]);
		if (e === m.current) {
			p(o ? "ready" : n.status === "rejected" ? "error" : n.value?.cabane?.component_name === "custom" && n.value.cabane.config?._panel_custom?.name === "cabane-panel" ? "ready" : "missing");
			try {
				if (t.status === "rejected") throw t.reason;
				await ee(), e === m.current && v(!0);
			} catch (t) {
				if (e !== m.current) return;
				v(!1), t instanceof Na || j(t instanceof Error ? t.message : "Could not reach Home Assistant. Try again.");
			} finally {
				e === m.current && (g(!0), b(!1));
			}
		}
	}, [
		d,
		ee,
		P,
		o
	]);
	(0, U.useEffect)(() => {
		let t = !0;
		return S(!1), w(!1), n && Wa(window.indexedDB, n, e).then((e) => {
			t && (S(!!e), w(e?.enabled ?? !1));
		}).catch(() => {
			t && j("Could not read this browser's sync settings.");
		}), () => {
			t = !1;
		};
	}, [n, e]), (0, U.useEffect)(() => (g(!1), v(!1), E({ kind: "off" }), j(null), N(null), n && u.status === "connected" && te(), () => {
		m.current += 1;
	}), [
		n,
		u.status,
		e,
		te
	]);
	let ne = c?.backgroundStatus;
	(0, U.useEffect)(() => {
		ne && ne.kind !== "off" && E(ne);
	}, [ne]), (0, U.useEffect)(() => {
		if (c || !C || !n) return;
		let t = window.setInterval(() => {
			l.reconcile(e, n).then((e) => {
				E(e), e.detail === "restored" && window.location.reload();
			});
		}, 3e3);
		return () => window.clearInterval(t);
	}, [
		c,
		C,
		n,
		l,
		e
	]);
	let F = async (e, t, n = !1) => {
		O(!0), j(null), N(null);
		try {
			let r = await e();
			E(r), await ee(), r.kind !== "conflict" && (N(t ?? null), n && window.location.reload());
		} catch (e) {
			j(e instanceof Error ? e.message : "Could not complete the request. Try again.");
		} finally {
			O(!1);
		}
	}, I = async (e, t) => {
		let n = await A(window.indexedDB).verify(ae(e));
		fe(R(e, n), t, "application/zip");
	}, re = async () => {
		let t = await r.read(e);
		t?.record && await I(ce(t.metadata, t.record), `${e}-before-load.cabane`);
	}, ie = (t) => F(async () => {
		if (t === "remote") return await re(), l.resolveConflict(e, n, t);
		let r = await d.get(e);
		return r?.document && await I(r.document, `${e}-before-replace.cabane`), l.resolveConflict(e, n, t, r?.version);
	}, "Copy updated.", t === "remote"), L = oo(i.search), z = C ? u.status !== "connected" || T.kind === "disconnected" || T.kind === "unavailable" ? "Sync interrupted" : T.kind === "conflict" ? "Sync needs attention" : T.kind === "synced" ? "Synced with HA" : T.kind === "pending" ? "Changes pending" : "Checking sync…" : x ? "Saved to HA · sync off" : y ? "Checking storage…" : "Local only", oe = f !== "ready" || !_ ? 1 : !C || T.kind !== "synced" ? 2 : 3;
	return /* @__PURE__ */ (0, Q.jsxs)("section", {
		className: "ha-section ha-setup",
		id: "workspace-storage",
		"aria-labelledby": "ha-storage-title",
		children: [
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "ha-section__heading",
				children: [/* @__PURE__ */ (0, Q.jsx)("h2", {
					id: "ha-storage-title",
					children: "Set up Cabane"
				}), /* @__PURE__ */ (0, Q.jsxs)("span", {
					className: `ha-status${T.kind === "synced" && C && u.status === "connected" ? " is-connected" : ""}`,
					children: [/* @__PURE__ */ (0, Q.jsx)(H, { name: C ? "refresh" : x ? "save" : "monitor" }), z]
				})]
			}),
			/* @__PURE__ */ (0, Q.jsx)("p", { children: "Your home, available inside Home Assistant." }),
			u.status === "connected" && /* @__PURE__ */ (0, Q.jsx)("ol", {
				className: "ha-setup-progress",
				"aria-label": "Setup progress",
				children: [
					"Install",
					"Sync your home",
					"Open Cabane"
				].map((e, t) => /* @__PURE__ */ (0, Q.jsxs)("li", {
					"aria-current": oe === t + 1 ? "step" : void 0,
					className: oe > t + 1 ? "is-complete" : "",
					children: [/* @__PURE__ */ (0, Q.jsx)(H, { name: oe > t + 1 ? "check" : t === 0 ? "import" : t === 1 ? "refresh" : "grid" }), e]
				}, e))
			}),
			u.status === "connected" ? y || !h ? /* @__PURE__ */ (0, Q.jsx)("p", {
				role: "status",
				children: "Checking the Cabane integration…"
			}) : /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
				(f !== "ready" || !_) && /* @__PURE__ */ (0, Q.jsx)(Bo, {
					origin: n,
					checking: y,
					panelError: f === "error" || !!k,
					onCheck: () => void te()
				}),
				T.kind === "unavailable" && T.detail && /* @__PURE__ */ (0, Q.jsx)("p", {
					role: "alert",
					children: T.detail
				}),
				_ && /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
					!C && (f === "ready" || L !== "dashboard") ? /* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "ha-storage-activate",
						children: [
							/* @__PURE__ */ (0, Q.jsx)("h3", { children: "Bring your home with you" }),
							/* @__PURE__ */ (0, Q.jsx)("p", { children: "Save this home to Home Assistant and keep changes in sync." }),
							/* @__PURE__ */ (0, Q.jsxs)("button", {
								className: "ha-primary",
								disabled: D,
								onClick: () => void F(() => l.enableSync(e, n)),
								children: [/* @__PURE__ */ (0, Q.jsx)(H, { name: "refresh" }), D ? "Enabling sync…" : "Enable sync"]
							}),
							/* @__PURE__ */ (0, Q.jsx)("p", {
								className: "ha-help",
								children: "Stores your home and device mappings on HA, accessible to its signed-in users. Changes sync automatically while Cabane is open."
							})
						]
					}) : null,
					T.kind === "conflict" && /* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "ha-storage-state",
						role: "alert",
						children: [
							/* @__PURE__ */ (0, Q.jsx)("strong", { children: "Choose which copy to keep" }),
							/* @__PURE__ */ (0, Q.jsxs)("p", { children: [T.detail ?? "This browser and Home Assistant both have changes.", " The replaced copy will be downloaded first."] }),
							/* @__PURE__ */ (0, Q.jsxs)("div", {
								className: "ha-actions",
								children: [/* @__PURE__ */ (0, Q.jsx)("button", {
									disabled: D,
									onClick: () => void ie("local"),
									children: "Keep browser copy"
								}), /* @__PURE__ */ (0, Q.jsx)("button", {
									disabled: D,
									onClick: () => void ie("remote"),
									children: "Keep Home Assistant copy"
								})]
							})
						]
					}),
					T.kind === "disconnected" && /* @__PURE__ */ (0, Q.jsx)("p", {
						role: "status",
						children: "Sync paused. Your changes are saved in this browser."
					}),
					n && x && C && /* @__PURE__ */ (0, Q.jsx)(Lo, {
						id: e,
						origin: n,
						intent: L,
						panelReady: f === "ready",
						ready: T.kind === "synced" && u.status === "connected"
					}),
					/* @__PURE__ */ (0, Q.jsxs)("details", {
						className: "ha-storage-manage",
						children: [
							/* @__PURE__ */ (0, Q.jsx)("summary", { children: "Manage saved copy" }),
							C && /* @__PURE__ */ (0, Q.jsxs)("div", {
								className: "ha-sync-row",
								children: [/* @__PURE__ */ (0, Q.jsx)("label", {
									id: "ha-auto-label",
									htmlFor: "ha-auto",
									children: "Sync automatically"
								}), /* @__PURE__ */ (0, Q.jsx)(he, {
									id: "ha-auto",
									labelledBy: "ha-auto-label",
									checked: C,
									disabled: D,
									onChange: () => void F(() => l.setEnabled(e, n, !1))
								})]
							}),
							/* @__PURE__ */ (0, Q.jsxs)("div", {
								className: "ha-actions",
								children: [
									/* @__PURE__ */ (0, Q.jsxs)("button", {
										disabled: D,
										onClick: () => void F(() => l.manualSave(e, n)),
										children: [/* @__PURE__ */ (0, Q.jsx)(H, { name: "export" }), "Save a copy now"]
									}),
									/* @__PURE__ */ (0, Q.jsxs)("button", {
										disabled: D || !x,
										onClick: () => {
											window.confirm("Load the Home Assistant copy? Your browser copy will be downloaded as a backup first.") && F(async () => (await re(), l.manualRestore(e, n)), void 0, !0);
										},
										children: [/* @__PURE__ */ (0, Q.jsx)(H, { name: "import" }), "Load saved copy"]
									}),
									/* @__PURE__ */ (0, Q.jsxs)("button", {
										className: "ha-danger",
										disabled: D || !x,
										onClick: () => {
											window.confirm("Delete the copy on Home Assistant? Your browser's workspace will remain. Automatic sync will turn off.") && F(() => l.deleteRemote(e, n), "Home Assistant copy deleted. Your browser copy is safe.");
										},
										children: [/* @__PURE__ */ (0, Q.jsx)(H, { name: "delete" }), "Delete saved copy"]
									})
								]
							})
						]
					})
				] })
			] }) : /* @__PURE__ */ (0, Q.jsx)("p", { children: "Connect Home Assistant first" }),
			k && /* @__PURE__ */ (0, Q.jsx)("p", {
				className: "ha-error",
				role: "alert",
				children: k
			}),
			M && /* @__PURE__ */ (0, Q.jsx)("p", {
				className: "ha-notice",
				role: "status",
				children: M
			})
		]
	});
}
//#endregion
//#region apps/web/src/workspaces/HomeAssistantPage.tsx
function Ko({ record: e, lifecycle: n, origin: r, onChangeOrigin: i, onRecordChange: a, isDemo: o, onCreatePersonal: s }) {
	let c = X(), l = oo(c.search) === "dashboard", u = t(), d = m("cabane-icon.png"), f = ee(), p = Uo(), [h, g] = (0, U.useState)(r ?? ""), [_, v] = (0, U.useState)(!r), [y, b] = (0, U.useState)(!1), [x, S] = (0, U.useState)(null), [C, T] = (0, U.useState)(null), [E, D] = (0, U.useState)(null), O = [
		"authenticating",
		"connecting",
		"reconnecting"
	].includes(f.status), k = f.status === "connected";
	(0, U.useEffect)(() => {
		if (k && !u) try {
			let t = JSON.parse(window.sessionStorage.getItem("cabane:editor-return:v1") ?? "null"), n = t && typeof t == "object" ? t : null;
			n?.workspaceId === e.homeId && n?.panel === "home-assistant" && window.sessionStorage.removeItem(ge);
		} catch {}
	}, [
		k,
		e.homeId,
		u
	]);
	let A = async (e) => {
		b(!0), T(null), D(null);
		try {
			await e();
		} catch (e) {
			T(e instanceof Error ? e.message : "Please try again.");
		} finally {
			b(!1);
		}
	}, j = ve(f, async (t) => {
		await i(t), u || window.sessionStorage.setItem(ge, JSON.stringify({
			workspaceId: e.homeId,
			mode: "connect",
			panel: "home-assistant",
			destination: oo(c.search)
		})), v(!1);
	}), M = l && k ? "details" : "div", N = l ? "details" : "div", P = async (e) => {
		if (!(y || O)) {
			b(!0), S(null);
			try {
				await j(e);
			} catch (e) {
				S(e instanceof Error ? e.message : "Could not start sign-in. Please try again.");
			} finally {
				b(!1);
			}
		}
	}, te = async () => (await p?.repository.read(e.homeId))?.record ?? e, ne = async () => {
		let t = await te(), n = ce({
			name: t.draft.home.name,
			homeAssistantUrl: r,
			hasPublished: t.publishedAt !== 0
		}, t);
		await Te(n, `${e.homeId}-backup.cabane`), D("Backup downloaded.");
	}, F = async (e) => {
		let t = await te(), r = le(t, (await pe(e)).json, V);
		if (!window.confirm("Replace this home's draft with the backup? Your current draft will be downloaded first. The published home stays unchanged until you save in the editor.")) return;
		await ne();
		let i = await n.autosave(t, r.project, void 0, r.bindings);
		if (i.status === "storage-error") throw i.error;
		if (i.status !== "saved") throw Error("This backup could not be saved. Your draft is unchanged.");
		a(i.record), D("Backup imported into the draft. Open the editor to review and save it.");
	};
	return /* @__PURE__ */ (0, Q.jsx)("main", {
		className: `ha-page${l ? " ha-page--setup" : ""}`,
		children: /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "ha-page__content",
			children: [
				/* @__PURE__ */ (0, Q.jsxs)("nav", {
					className: "ha-page__nav",
					"aria-label": "Workspace navigation",
					children: [/* @__PURE__ */ (0, Q.jsxs)(Z, {
						to: "/workspaces",
						children: [/* @__PURE__ */ (0, Q.jsx)(H, { name: "back" }), "Workspaces"]
					}), /* @__PURE__ */ (0, Q.jsxs)(Z, {
						to: $(e.homeId),
						children: ["Open home", /* @__PURE__ */ (0, Q.jsx)(H, { name: "chevron" })]
					})]
				}),
				/* @__PURE__ */ (0, Q.jsxs)("header", {
					className: "ha-page__header",
					children: [/* @__PURE__ */ (0, Q.jsx)("h1", { children: l ? "Cabane in Home Assistant" : "Home Assistant" }), /* @__PURE__ */ (0, Q.jsx)("p", { children: e.draft.home.name })]
				}),
				o ? /* @__PURE__ */ (0, Q.jsxs)("section", {
					className: "ha-section",
					children: [
						/* @__PURE__ */ (0, Q.jsx)("h2", { children: "Make this home yours" }),
						/* @__PURE__ */ (0, Q.jsx)("p", { children: "The demo uses simulated devices. Create your own workspace to connect Home Assistant and save across devices." }),
						/* @__PURE__ */ (0, Q.jsxs)("button", {
							className: "ha-primary",
							onClick: s,
							children: ["Create my workspace", /* @__PURE__ */ (0, Q.jsx)(H, { name: "chevron" })]
						})
					]
				}) : /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)(M, {
					className: l && k ? "ha-connection-details" : void 0,
					children: [l && k && /* @__PURE__ */ (0, Q.jsxs)("summary", { children: [
						/* @__PURE__ */ (0, Q.jsx)(H, { name: "check" }),
						"Connected to ",
						r ? new URL(r).host : "Home Assistant"
					] }), /* @__PURE__ */ (0, Q.jsxs)("section", {
						className: "ha-section",
						"aria-labelledby": "ha-connection-title",
						children: [
							/* @__PURE__ */ (0, Q.jsxs)("div", {
								className: "ha-section__heading",
								children: [/* @__PURE__ */ (0, Q.jsx)("h2", {
									id: "ha-connection-title",
									children: "Connection"
								}), /* @__PURE__ */ (0, Q.jsxs)("span", {
									role: "status",
									className: `ha-status${k ? " is-connected" : ""}`,
									children: [/* @__PURE__ */ (0, Q.jsx)("i", {}), k ? "Connected" : O ? "Connecting…" : r ? "Disconnected" : "Not connected"]
								})]
							}),
							u ? /* @__PURE__ */ (0, Q.jsxs)("div", {
								className: "ha-connection-row",
								children: [
									/* @__PURE__ */ (0, Q.jsx)("p", { children: "Sign-in is managed by Home Assistant." }),
									/* @__PURE__ */ (0, Q.jsx)("p", {
										className: "ha-address",
										children: u.origin
									}),
									r && r !== u.origin && /* @__PURE__ */ (0, Q.jsxs)("p", {
										role: "alert",
										children: [
											"This workspace uses a different Home Assistant: ",
											r,
											". Select this instance explicitly; its mappings remain separate."
										]
									}),
									/* @__PURE__ */ (0, Q.jsxs)("div", {
										className: "ha-actions",
										children: [
											r !== u.origin && /* @__PURE__ */ (0, Q.jsx)("button", {
												className: "ha-primary",
												disabled: y,
												onClick: () => void A(() => i(u.origin)),
												children: "Use this Home Assistant"
											}),
											r === u.origin && ["error", "disconnected"].includes(f.status) && /* @__PURE__ */ (0, Q.jsx)("button", {
												disabled: y,
												onClick: f.retry,
												children: "Retry connection"
											}),
											r && /* @__PURE__ */ (0, Q.jsx)("button", {
												disabled: y,
												onClick: () => void A(async () => {
													await i(null), await f.disconnect();
												}),
												children: "Disconnect workspace"
											})
										]
									}),
									/* @__PURE__ */ (0, Q.jsx)("p", {
										className: "ha-help",
										children: "Disconnecting this workspace keeps you signed in to Home Assistant."
									})
								]
							}) : _ ? /* @__PURE__ */ (0, Q.jsxs)("form", {
								noValidate: !0,
								onSubmit: (e) => {
									if (e.preventDefault(), y || O) return;
									let t = w(h);
									S(t.error), t.normalized && P(t.normalized);
								},
								children: [
									/* @__PURE__ */ (0, Q.jsx)("label", {
										htmlFor: "ha-address",
										children: "Home Assistant URL"
									}),
									/* @__PURE__ */ (0, Q.jsxs)("div", {
										className: "ha-address-form",
										children: [
											/* @__PURE__ */ (0, Q.jsx)("input", {
												id: "ha-address",
												type: "url",
												inputMode: "url",
												required: !0,
												"aria-invalid": !!x,
												"aria-describedby": `ha-address-help${x ? " ha-connection-error" : ""}`,
												placeholder: "https://home.example.com",
												autoCapitalize: "none",
												spellCheck: !1,
												value: h,
												disabled: y || O,
												onChange: (e) => {
													g(e.target.value), S(null);
												}
											}),
											/* @__PURE__ */ (0, Q.jsxs)("button", {
												className: "ha-primary",
												disabled: y || O,
												children: [y ? "Preparing sign-in…" : O ? "Connecting…" : "Connect", /* @__PURE__ */ (0, Q.jsx)(H, { name: "external" })]
											}),
											r && /* @__PURE__ */ (0, Q.jsx)("button", {
												type: "button",
												disabled: y,
												onClick: () => {
													v(!1), g(r), S(null);
												},
												children: "Cancel"
											})
										]
									}),
									/* @__PURE__ */ (0, Q.jsx)("p", {
										id: "ha-address-help",
										className: "ha-help",
										children: "Enter the full HTTPS address, including https:// and a port if needed, with no path. Use an address with a certificate trusted by this browser. Home Assistant handles sign-in, then returns you here."
									})
								]
							}) : /* @__PURE__ */ (0, Q.jsxs)("div", {
								className: "ha-connection-row",
								children: [/* @__PURE__ */ (0, Q.jsx)("p", {
									className: "ha-address",
									children: r
								}), /* @__PURE__ */ (0, Q.jsxs)("div", {
									className: "ha-actions",
									children: [/* @__PURE__ */ (0, Q.jsx)("button", {
										disabled: y || O,
										onClick: () => {
											v(!0), S(null);
										},
										children: "Change URL"
									}), k ? /* @__PURE__ */ (0, Q.jsx)("button", {
										disabled: y,
										onClick: () => void A(async () => {
											await f.disconnect(), await i(null), g(""), v(!0);
										}),
										children: "Disconnect"
									}) : /* @__PURE__ */ (0, Q.jsx)("button", {
										className: "ha-primary",
										disabled: y || O,
										onClick: () => void P(r),
										children: y ? "Preparing sign-in…" : O ? "Connecting…" : "Reconnect"
									})]
								})]
							}),
							x && /* @__PURE__ */ (0, Q.jsx)("p", {
								id: "ha-connection-error",
								role: "alert",
								className: "ha-error",
								children: x
							}),
							f.error && /* @__PURE__ */ (0, Q.jsx)("p", {
								role: "alert",
								className: "ha-error",
								children: f.error
							})
						]
					})]
				}), /* @__PURE__ */ (0, Q.jsx)(Wo, {})] }),
				/* @__PURE__ */ (0, Q.jsxs)(N, {
					className: l ? "ha-setup-disclosure" : void 0,
					children: [l && /* @__PURE__ */ (0, Q.jsx)("summary", { children: "File backups" }), /* @__PURE__ */ (0, Q.jsxs)("section", {
						className: "ha-section",
						"aria-labelledby": "ha-backups-title",
						children: [
							/* @__PURE__ */ (0, Q.jsx)("h2", {
								id: "ha-backups-title",
								children: "Backups"
							}),
							/* @__PURE__ */ (0, Q.jsx)("p", { children: "Keep a file with your full workspace: design, drafts, and device mappings. Sign-in credentials are never included." }),
							/* @__PURE__ */ (0, Q.jsxs)("div", {
								className: "ha-actions",
								children: [/* @__PURE__ */ (0, Q.jsxs)("button", {
									disabled: y,
									onClick: () => void A(ne),
									children: [/* @__PURE__ */ (0, Q.jsx)(H, { name: "export" }), "Export backup"]
								}), /* @__PURE__ */ (0, Q.jsxs)("label", {
									className: `ha-file-button${y ? " is-disabled" : ""}`,
									children: [
										/* @__PURE__ */ (0, Q.jsx)(H, { name: "import" }),
										"Import backup",
										/* @__PURE__ */ (0, Q.jsx)("input", {
											type: "file",
											accept: ".cabane,.json,application/zip,application/json",
											disabled: y,
											onChange: (e) => {
												let t = e.target.files?.[0];
												e.target.value = "", t && A(() => F(t));
											}
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, Q.jsx)("p", {
								className: "ha-help",
								children: "Import replaces this home’s draft. Review it in the editor before saving."
							})
						]
					})]
				}),
				C && /* @__PURE__ */ (0, Q.jsx)("p", {
					role: "alert",
					className: "ha-error",
					children: C
				}),
				E && /* @__PURE__ */ (0, Q.jsx)("p", {
					role: "status",
					className: "ha-notice",
					children: E
				}),
				/* @__PURE__ */ (0, Q.jsxs)("footer", {
					className: "ha-page__footer",
					children: [
						/* @__PURE__ */ (0, Q.jsx)("img", {
							src: d,
							alt: "",
							width: "18",
							height: "22"
						}),
						"Cabane",
						/* @__PURE__ */ (0, Q.jsx)("span", { children: "Your home, on your terms." })
					]
				})
			]
		})
	});
}
//#endregion
//#region apps/web/src/RoutedHomeEditor.tsx
var qo = (0, U.lazy)(() => import("./assets/HomeEditor-DMOD61Tg.js").then((e) => ({ default: e.HomeEditor })));
function Jo({ onClose: e, ...t }) {
	let n = X(), r = Jr(), i = (0, U.useMemo)(() => ({
		...n.state?.editorRequest,
		...uo(n.pathname)
	}), [n.pathname, n.state]), a = po(n.search), o = () => {
		let e = new URLSearchParams(n.search);
		e.delete("agent-pilot"), r(`${n.pathname}${e.size ? `?${e}` : ""}`, { replace: !0 });
	}, s = (0, U.useRef)(!1), c = mi(({ nextLocation: e }) => !s.current && go(t.initialRecord.homeId, e.pathname)), l = (e, n = !1) => {
		r(ho(e, t.initialRecord.homeId), {
			replace: n,
			state: { editorRequest: e }
		});
	};
	return /* @__PURE__ */ (0, Q.jsx)(U.Suspense, {
		fallback: /* @__PURE__ */ (0, Q.jsx)("main", {
			className: "direction-project-loading",
			children: "Opening the editor…"
		}),
		children: /* @__PURE__ */ (0, Q.jsx)(qo, {
			...t,
			agentPilotOpen: a,
			onAgentPilotClose: o,
			initialRequest: i,
			onWorkspaces: () => void r("/workspaces"),
			onHomeAssistantSettings: () => void r(`${$(t.initialRecord.homeId)}/home-assistant`),
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
				s.current = !0, e(n, i), c.state === "blocked" ? c.proceed() : r($(t.initialRecord.homeId));
			}
		})
	});
}
//#endregion
//#region apps/web/src/ConnectedProduct.tsx
function Yo({ record: e, lifecycle: n, homeAssistantUrl: r, onHomeAssistantUrlChange: i, recoveryMessage: a, recoveryRaw: o, initialRequest: s, onboarding: c }) {
	let [u, d] = (0, U.useState)(e), f = (0, U.useMemo)(() => u.publishedAt === 0 ? null : L(u.published), [u.published, u.publishedAt]), p = (0, U.useMemo)(() => l(u.published, V).deviceModels, [u.published]), [m, h] = (0, U.useState)({
		message: a,
		raw: o
	}), [g, _] = (0, U.useState)(null), v = Io(u, d, _), [y, b] = (0, U.useState)(!1), x = Jr(), S = X(), C = t(), [w] = (0, U.useState)(() => s ?? (C ? null : be(e.homeId))), T = (0, U.useEffectEvent)(() => {
		if (w) {
			let e = new URLSearchParams(S.search);
			w.destination && e.set("action", w.destination), x(`${ho(w, u.homeId)}${e.size ? `?${e}` : ""}`, {
				replace: !0,
				state: { editorRequest: w }
			}), window.sessionStorage.removeItem(ge);
		}
	});
	(0, U.useEffect)(() => {
		T();
	}, []);
	let E = async (e) => {
		await v.flush();
		let t = ho(e, u.homeId);
		x(t, { state: { editorRequest: e } });
	}, D = r ? k(r) : null, O = (0, U.useMemo)(() => ({
		profile: (D ? u.bindings[D]?.published : void 0) ?? j(u.homeId),
		saveWeatherSource: D ? (e) => v.saveWeatherSource(D, e) : void 0,
		loaded: !0,
		hasStoredProfile: !!(D && u.bindings[D]),
		save: () => void 0
	}), [
		D,
		u,
		v
	]), A = /* @__PURE__ */ (0, Q.jsx)(Jo, {
		initialRecord: u,
		lifecycle: n,
		recoveryMessage: m.message,
		recoveryRaw: m.raw,
		homeAssistantUrl: r,
		onPrepareOrigin: async (e, t) => {
			let n = await i(t, e) ?? e;
			return d(n), n;
		},
		onClose: (e, t) => {
			h({
				message: void 0,
				raw: void 0
			}), d(e), b(t === "applied"), window.sessionStorage.removeItem(ge);
		}
	}), N = u.publishedAt === 0 ? /* @__PURE__ */ (0, Q.jsx)(ji, {
		to: ho({ mode: "construct" }, u.homeId),
		replace: !0
	}) : /* @__PURE__ */ (0, Q.jsx)(ne, {
		storage: v.storage,
		children: /* @__PURE__ */ (0, Q.jsx)(xe, { children: /* @__PURE__ */ (0, Q.jsx)(M, {
			manifest: f,
			architectureModels: Se,
			onboarding: c,
			walkTools: _e,
			deviceModels: p,
			homeAssistantUrl: r,
			onHomeAssistantUrlChange: (e) => {
				_(null), Promise.resolve().then(() => i(e, u)).then((e) => {
					e && d(e);
				}).catch((e) => _(e instanceof Error ? e.message : "Connection settings could not be saved."));
			},
			onHomeAssistantSettings: () => void x(`${$(u.homeId)}/home-assistant`),
			onWorkspaces: () => void x("/workspaces"),
			renderActionBarDeviceIcon: (e) => /* @__PURE__ */ (0, Q.jsx)(Ce, {
				modelId: e,
				models: p
			}),
			bindingManager: O,
			constructionApplied: y,
			onEditHome: (e = "construct") => {
				E({ mode: e });
			},
			onCustomizeActionBar: () => {
				E({
					mode: "construct",
					panel: "action-bar"
				});
			},
			onOpenConnect: (e, t) => {
				E({
					mode: "connect",
					view: e,
					...t === void 0 ? {} : { roomId: t }
				});
			},
			onExportBrowserData: () => z(ce({
				name: u.draft.home.name,
				homeAssistantUrl: r,
				hasPublished: u.publishedAt !== 0
			}, u), `${u.homeId}-private-workspace.json`)
		}) })
	});
	return /* @__PURE__ */ (0, Q.jsxs)(te, { children: [g && /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "workspace-connection-error",
		role: "alert",
		children: [g, /* @__PURE__ */ (0, Q.jsx)("button", {
			type: "button",
			onClick: () => _(null),
			children: "Dismiss"
		})]
	}), /* @__PURE__ */ (0, Q.jsxs)(Pi, { children: [
		/* @__PURE__ */ (0, Q.jsx)(Mi, {
			path: "/welcome",
			element: N
		}),
		/* @__PURE__ */ (0, Q.jsx)(Mi, {
			path: "/demo",
			element: N
		}),
		/* @__PURE__ */ (0, Q.jsx)(Mi, {
			path: "/workspaces/:workspaceId",
			element: N
		}),
		/* @__PURE__ */ (0, Q.jsx)(Mi, {
			path: "/workspaces/:workspaceId/home-assistant",
			element: /* @__PURE__ */ (0, Q.jsx)(Ko, {
				record: u,
				lifecycle: n,
				origin: r,
				onChangeOrigin: async (e) => {
					let t = await i(e, u);
					t && d(t);
				},
				onRecordChange: d,
				isDemo: c?.isDemo ?? !1,
				onCreatePersonal: () => {
					c?.start("connect");
				}
			})
		}),
		/* @__PURE__ */ (0, Q.jsx)(Mi, {
			path: "/workspaces/:workspaceId/mobile-editor",
			element: /* @__PURE__ */ (0, Q.jsx)(ji, {
				to: ho({ mode: new URLSearchParams(S.search).get("mode") === "arrange" ? "furnish" : "construct" }, u.homeId),
				replace: !0
			})
		}),
		lo.map(({ path: e }) => /* @__PURE__ */ (0, Q.jsx)(Mi, {
			path: e,
			element: A
		}, e)),
		/* @__PURE__ */ (0, Q.jsx)(Mi, {
			path: "*",
			element: /* @__PURE__ */ (0, Q.jsx)(ji, {
				to: $(u.homeId),
				replace: !0
			})
		})
	] })] }, u.homeId);
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceModelAssetNotice.tsx
function Xo({ record: e, id: t }) {
	let [n, r] = (0, U.useState)(!1);
	return (0, U.useEffect)(() => {
		let t = !0;
		r(!1);
		let n = a([e.draft, e.published]);
		return n.length && A(window.indexedDB).verify(n).catch(() => {
			t && r(!0);
		}), () => {
			t = !1;
		};
	}, [e]), n ? /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "workspace-connection-error workspace-model-assets-error",
		role: "alert",
		children: [
			/* @__PURE__ */ (0, Q.jsx)("strong", { children: "Some personal models could not load." }),
			/* @__PURE__ */ (0, Q.jsx)("span", { children: "A GLB file is missing, damaged, or unavailable. Restore a complete .cabane backup or load the saved home from Home Assistant." }),
			/* @__PURE__ */ (0, Q.jsxs)("div", { children: [
				/* @__PURE__ */ (0, Q.jsx)(Z, {
					to: "/workspaces",
					children: "Workspaces"
				}),
				/* @__PURE__ */ (0, Q.jsx)(Z, {
					to: `/workspaces/${encodeURIComponent(t)}/home-assistant`,
					children: "Home Assistant"
				}),
				/* @__PURE__ */ (0, Q.jsx)("button", {
					onClick: () => window.location.reload(),
					children: "Try again"
				})
			] })
		]
	}) : null;
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceHost.tsx
function Zo({ id: e, repository: t, onboarding: n }) {
	let r = X(), a = Jr(), o = (0, U.useCallback)((t) => wo(e, t), [e]), s = n.state?.demoWorkspaceId === e, [c] = (0, U.useState)(() => ye(window.indexedDB, e)), [l, u] = (0, U.useState)(null), [d, f] = (0, U.useState)(null);
	return (0, U.useEffect)(() => {
		let n = !0;
		return t.read(e).then(async (t) => {
			let r = t?.record ? {
				status: "ready",
				record: t.record
			} : await c.load();
			if (n) {
				if (!t) {
					f("This workspace is not saved in this browser.");
					return;
				}
				So(e), u({
					record: r.record,
					metadata: t.metadata,
					...r.status === "recovery" ? {
						recoveryMessage: r.reason,
						recoveryRaw: r.raw
					} : {}
				});
			}
		}).catch((e) => {
			n && f(e instanceof Error ? e.message : "Could not load this home.");
		}), () => {
			n = !1;
		};
	}, [
		e,
		c,
		t
	]), (0, U.useEffect)(() => {
		let n = !0, r = () => {
			t.read(e).then((e) => {
				n && (e ? l && e.metadata.homeAssistantUrl !== l.metadata.homeAssistantUrl && f("This workspace's connection changed in another tab. Reopen it from Workspaces.") : f("This workspace was deleted in another tab."));
			}).catch(() => {
				n && f("Could not verify this workspace. Reopen it from Workspaces.");
			});
		};
		return window.addEventListener("focus", r), () => {
			n = !1, window.removeEventListener("focus", r);
		};
	}, [
		e,
		t,
		l
	]), d ? /* @__PURE__ */ (0, Q.jsxs)("main", {
		className: "direction-project-loading is-error",
		children: [
			/* @__PURE__ */ (0, Q.jsx)("strong", { children: "Could not open this workspace." }),
			/* @__PURE__ */ (0, Q.jsx)("p", { children: d }),
			/* @__PURE__ */ (0, Q.jsx)(Z, {
				to: "/workspaces?import=home-assistant",
				children: "Open from Home Assistant"
			}),
			/* @__PURE__ */ (0, Q.jsx)(Z, {
				to: "/workspaces",
				children: "Workspaces"
			})
		]
	}) : l ? /* @__PURE__ */ (0, Q.jsx)(i.Provider, {
		value: o,
		children: /* @__PURE__ */ (0, Q.jsx)(T, {
			hostSession: s ? null : void 0,
			homeAssistantUrl: s ? null : l.metadata.homeAssistantUrl,
			children: /* @__PURE__ */ (0, Q.jsxs)(Ho, {
				id: e,
				origin: l.metadata.homeAssistantUrl,
				repository: t,
				hidden: s,
				children: [/* @__PURE__ */ (0, Q.jsx)(Xo, {
					record: l.record,
					id: e
				}), /* @__PURE__ */ (0, Q.jsx)(Yo, {
					onboarding: {
						isDemo: s,
						welcome: s && r.pathname === "/welcome",
						nudgeDismissed: n.state?.nudgeDismissed ?? !0,
						busy: n.busy,
						start: n.start,
						dismiss: async (e) => {
							e === "welcome" && a("/demo"), await n.dismiss(e);
						},
						openWelcome: () => void a("/welcome"),
						links: Eo
					},
					record: l.record,
					lifecycle: c,
					recoveryMessage: l.recoveryMessage,
					recoveryRaw: l.recoveryRaw,
					homeAssistantUrl: l.metadata.homeAssistantUrl,
					onHomeAssistantUrlChange: async (n, r) => {
						let i = await t.setConnection(e, (r ?? l.record).revision, n);
						if (!i.record) throw Error("Could not save the connection.");
						return u((e) => e && {
							...e,
							metadata: i.metadata,
							record: i.record
						}), i.record;
					}
				})]
			})
		})
	}) : /* @__PURE__ */ (0, Q.jsx)("main", {
		className: "direction-project-loading",
		children: "Loading your home…"
	});
}
//#endregion
//#region apps/web/src/workspaces/BuildWorkspaceEntry.tsx
function Qo({ onboarding: e }) {
	let t = (0, U.useRef)(!1);
	return (0, U.useEffect)(() => {
		t.current || (t.current = !0, e.start("build"));
	}, [e, e.start]), /* @__PURE__ */ (0, Q.jsx)("main", {
		className: "direction-project-loading",
		children: e.error ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
			/* @__PURE__ */ (0, Q.jsx)("strong", { children: "Could not start your home." }),
			/* @__PURE__ */ (0, Q.jsx)("p", { children: e.error }),
			/* @__PURE__ */ (0, Q.jsx)("button", {
				disabled: e.busy,
				onClick: () => void e.start("build"),
				children: "Try again"
			}),
			/* @__PURE__ */ (0, Q.jsx)(Z, {
				to: "/workspaces",
				children: "Workspaces"
			})
		] }) : "Opening your home…"
	});
}
//#endregion
//#region apps/web/src/workspaces/migrate-single-home-storage.ts
var $o = "cabane:ha-url:v1", es = "cabane:ha-auth:v1";
function ts(e) {
	return S(e.getItem($o));
}
async function ns(e, t, n) {
	if (await e.migrationDone()) return;
	let r = await e.read(t);
	if (r?.error) return;
	let i = ts(n);
	r?.record && i && !r.metadata.homeAssistantUrl && (r = await e.setConnection(t, r.record.revision, i)), r?.record && i && await B(r.record, i);
	let a = n.getItem(es);
	if (a) {
		let e = JSON.parse(a), t = S(e.hassUrl);
		if (!t || !e.clientId) throw Error("The saved Home Assistant sign-in needs recovery.");
		let r = d(t, e.clientId);
		if (n.getItem(r) === null && n.setItem(r, a), !h(n, t, e.clientId)) throw Error("Could not preserve the saved Home Assistant sign-in.");
	}
	n.removeItem(es), n.removeItem($o), r?.record && i && (n.removeItem(O(i, t)), n.removeItem(D(i, t))), await e.finishMigration();
}
//#endregion
//#region apps/web/src/workspaces/initialize-workspaces.ts
async function rs(e, t, { skipLegacyMigration: n = !1 } = {}) {
	let r = y(e, V), i, a = null;
	try {
		!n && !await r.migrationDone() && (a = ts(t));
	} catch (e) {
		i = e instanceof Error ? e.message : "Saved connection data needs recovery.";
	}
	let o = {
		...oe,
		home: {
			...oe.home,
			name: "Demo home"
		}
	};
	await r.initialize(o, a);
	try {
		n || await ns(r, oe.home.id, t);
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
function is() {
	let e = X(), n = t(), r = Jr(), [i, a] = (0, U.useState)(null);
	(0, U.useEffect)(() => {
		e.pathname !== "/" && a(null);
	}, [e.pathname]);
	let [o, s] = (0, U.useState)(null), c = Oo(o), [l, u] = (0, U.useState)(null), [d, f] = (0, U.useState)(null), [p, m] = (0, U.useState)(), [h] = (0, U.useState)(() => !!n), [g] = (0, U.useState)(() => n ? null : be());
	(0, U.useEffect)(() => {
		let e = !0;
		return rs(window.indexedDB, window.localStorage, { skipLegacyMigration: h }).then(async (t) => {
			let n = await t.repository.list();
			e && (s(t.repository), u(n), m(t.migrationError));
		}).catch((t) => {
			e && f(t instanceof Error ? t.message : "Browser storage is unavailable.");
		}), () => {
			e = !1;
		};
	}, [h]);
	let _ = (0, U.useCallback)(async () => {
		o && u(await o.list());
	}, [o]);
	(0, U.useEffect)(() => {
		if (e.pathname !== "/" && e.pathname !== "/workspaces") return;
		let t = () => {
			_().catch((e) => f(String(e)));
		};
		return t(), window.addEventListener("focus", t), () => window.removeEventListener("focus", t);
	}, [_, e.pathname]);
	let v = (0, U.useCallback)(async (e) => {
		await _(), await r($(e), { replace: !0 });
	}, [_, r]);
	if (d) return /* @__PURE__ */ (0, Q.jsxs)("main", {
		className: "direction-project-loading is-error",
		children: [
			/* @__PURE__ */ (0, Q.jsx)("strong", { children: "Could not load your workspaces." }),
			/* @__PURE__ */ (0, Q.jsx)("p", { children: d }),
			/* @__PURE__ */ (0, Q.jsx)("button", {
				onClick: () => window.location.reload(),
				children: "Try again"
			})
		]
	});
	if (!o || !l) return /* @__PURE__ */ (0, Q.jsx)("main", {
		className: "direction-project-loading",
		children: "Loading your workspaces…"
	});
	if (e.pathname.startsWith("/open/")) return /* @__PURE__ */ (0, Q.jsx)(vo, {
		repository: o,
		onOpened: v
	});
	let y = !n && e.pathname !== "/workspaces" && new URLSearchParams(e.search).has("auth_callback"), b = y ? g : null;
	if (y) {
		if (!b || !l.some((e) => e.metadata.id === b.workspaceId)) return /* @__PURE__ */ (0, Q.jsxs)("main", {
			className: "direction-project-loading is-error",
			children: [
				/* @__PURE__ */ (0, Q.jsx)("strong", { children: "This sign-in no longer has a workspace." }),
				/* @__PURE__ */ (0, Q.jsx)("p", { children: "Open the intended workspace and sign in again." }),
				/* @__PURE__ */ (0, Q.jsx)("button", {
					onClick: () => void r("/workspaces", { replace: !0 }),
					children: "Workspaces"
				})
			]
		});
		if (mo(e.pathname) !== b.workspaceId) return /* @__PURE__ */ (0, Q.jsx)(ji, {
			to: `${$(b.workspaceId)}${e.search}`,
			replace: !0
		});
	}
	if (e.pathname === "/") {
		if (i) return /* @__PURE__ */ (0, Q.jsx)(ji, {
			to: i,
			replace: !0
		});
		if (!c.loaded) return /* @__PURE__ */ (0, Q.jsx)("main", {
			className: "direction-project-loading",
			children: "Loading your home…"
		});
		if (n && c.state && !c.state.welcomeDismissed && l.length === 1 && l[0].metadata.id === c.state.demoWorkspaceId) return /* @__PURE__ */ (0, Q.jsx)(ro, {
			session: n,
			repository: o,
			onRestored: async (e) => {
				a($(e)), await _(), await c.dismiss("welcome");
			},
			onBuild: async () => {
				a("/build");
			},
			onExplore: async () => {
				a("/demo"), await c.dismiss("welcome");
			},
			onCancel: async () => {
				a("/workspaces"), await c.dismiss("welcome");
			}
		});
		let e = l.find((e) => e.metadata.id === xo()) ?? (l.length === 1 ? l[0] : void 0);
		return e && c.state && e.metadata.id === c.state.demoWorkspaceId ? /* @__PURE__ */ (0, Q.jsx)(ji, {
			to: c.state.welcomeDismissed ? "/demo" : "/welcome",
			replace: !0
		}) : /* @__PURE__ */ (0, Q.jsx)(ji, {
			to: e ? $(e.metadata.id) : "/workspaces",
			replace: !0
		});
	}
	let x = e.pathname === "/welcome" || e.pathname === "/demo", S = e.pathname === "/build";
	if ((x || S) && !c.loaded) return /* @__PURE__ */ (0, Q.jsx)("main", {
		className: "direction-project-loading",
		children: "Loading your home…"
	});
	if (x && !l.some((e) => e.metadata.id === c.state?.demoWorkspaceId)) return /* @__PURE__ */ (0, Q.jsxs)("main", {
		className: "direction-project-loading is-error",
		children: [/* @__PURE__ */ (0, Q.jsx)("strong", { children: "The demo home is no longer in this browser." }), /* @__PURE__ */ (0, Q.jsx)(Z, {
			to: "/workspaces",
			children: "Workspaces"
		})]
	});
	if (S && !c.state?.destinations.build) return /* @__PURE__ */ (0, Q.jsx)(Qo, { onboarding: c });
	let C = x ? c.state?.demoWorkspaceId : S ? c.state?.destinations.build : mo(e.pathname);
	if (C) return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [c.error && /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "workspace-connection-error",
		role: "alert",
		children: [
			c.error,
			c.deleted && /* @__PURE__ */ (0, Q.jsx)("button", {
				disabled: c.busy,
				onClick: () => void c.start(c.deleted.path, c.deleted.id),
				children: "Create a new home"
			}),
			/* @__PURE__ */ (0, Q.jsx)("button", {
				onClick: () => void r("/workspaces"),
				children: "Workspaces"
			}),
			/* @__PURE__ */ (0, Q.jsx)("button", {
				onClick: c.clearError,
				children: "Dismiss"
			})
		]
	}), c.loaded ? /* @__PURE__ */ (0, Q.jsx)(Zo, {
		id: C,
		repository: o,
		onboarding: c
	}, C) : /* @__PURE__ */ (0, Q.jsx)("main", {
		className: "direction-project-loading",
		children: "Loading your home…"
	})] });
	if (e.pathname !== "/workspaces") return /* @__PURE__ */ (0, Q.jsx)(ji, {
		to: "/",
		replace: !0
	});
	let w = (e) => {
		let t = l.find((t) => t.metadata.id === e);
		if (!t) throw Error("Workspace no longer exists. Refresh the library.");
		return t;
	}, T = (e) => {
		let t = w(e);
		if (!t.record) throw Error(t.error ?? "This home needs recovery.");
		return t.record;
	}, D = async (e) => {
		await r($(e));
	}, O = async (e) => {
		let t = w(e), n = await o.readRaw(e);
		if (t.record && (await o.read(e))?.record?.revision !== t.record.revision) throw Error("This workspace changed. Refresh before deleting it.");
		await o.delete(e, n), await de(e), To(e), we(e);
		try {
			window.localStorage.removeItem(N(e));
		} catch {}
	};
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [p && /* @__PURE__ */ (0, Q.jsxs)("p", {
		role: "alert",
		className: "workspace-error",
		children: [p, " Your saved source data has been retained."]
	}), /* @__PURE__ */ (0, Q.jsx)(No, {
		demoWorkspaceId: c.state?.demoWorkspaceId,
		onSettings: async (e, t) => {
			await r(`${$(e)}/home-assistant${t ? `?action=${t}` : ""}`);
		},
		onAgentPilot: async (e) => {
			await r(fo(e));
		},
		entries: l,
		onOpen: D,
		onRecover: D,
		onCreate: async (e) => {
			let t = await o.createBlank(e);
			me(t.metadata.id), await _(), await D(t.metadata.id);
		},
		onRename: async (e, t) => {
			await o.rename(e, T(e).revision, t), await _();
		},
		onDuplicate: async (e, t) => {
			await o.duplicate(e, T(e).revision, t), await _();
		},
		renderDelete: (e, t, n) => /* @__PURE__ */ (0, Q.jsx)(Qa, {
			repository: o,
			target: { entry: e },
			onDeleteLocal: () => O(e.metadata.id),
			onDeleted: async () => {
				await _(), t();
			},
			onCancel: t,
			onBusyChange: n
		}),
		onImport: async (e) => {
			let t = ue(e, V), n = await o.create(t.record, t);
			await _(), await D(n.metadata.id);
		},
		onExport: async (e, t) => {
			let n = w(e), r = T(e), i = t ? ce(n.metadata, r) : E(r.draft);
			await Te(i, `${e}-${t ? "backup" : "project"}.cabane`);
		},
		onExportRaw: async (e) => {
			let t = await o.readRaw(e);
			if (t === null) throw Error("No saved record exists.");
			z(t, `${e}-recovery.json`);
		},
		renderSuggestions: (e, t) => /* @__PURE__ */ (0, Q.jsx)(no, {
			repository: o,
			onRestored: v,
			localWorkspaceIds: l.map((e) => e.metadata.id),
			busy: e,
			onBusyChange: t
		}),
		remoteImport: /* @__PURE__ */ (0, Q.jsx)(to, {
			repository: o,
			onRestored: async (e) => {
				await _(), await D(e);
			},
			initialOrigin: l.find((e) => e.metadata.homeAssistantUrl)?.metadata.homeAssistantUrl ?? null
		})
	})] });
}
//#endregion
//#region apps/web/src/panel/panel-element.ts
var as = /* @__PURE__ */ new WeakMap();
function os(e, t) {
	let n = as.get(e);
	n || as.set(e, n = /* @__PURE__ */ new Map());
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
function ss(e) {
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
			this.ownerDocument.defaultView?.addEventListener("resize", this.#c), this.#r ??= os(this.ownerDocument, new URL("cabane-fonts.css", e.assetBaseUrl).href), typeof ResizeObserver < "u" && (this.#n = new ResizeObserver(() => this.#l()), this.#n.observe(this.#i)), this.#l(), this.#u();
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
var cs = new URL(
	/* @vite-ignore */
	"./",
	import.meta.url
).href;
customElements.get("cabane-panel") || customElements.define("cabane-panel", ss({
	assetBaseUrl: cs,
	mount({ container: e, portalContainer: t, root: n, session: r }) {
		let i = (0, ja.createRoot)(e), a = Ti([{
			path: "*",
			errorElement: /* @__PURE__ */ (0, Q.jsx)(ka, {}),
			element: /* @__PURE__ */ (0, Q.jsx)(is, {})
		}], { initialEntries: ["/"] }), o = {
			root: n,
			container: e,
			portalContainer: t,
			eventTarget: n,
			assetBaseUrl: cs
		}, s = (e) => i.render(/* @__PURE__ */ (0, Q.jsx)(U.StrictMode, { children: /* @__PURE__ */ (0, Q.jsx)(Aa, { children: /* @__PURE__ */ (0, Q.jsx)(u, {
			environment: o,
			children: /* @__PURE__ */ (0, Q.jsx)(b, {
				session: e,
				children: /* @__PURE__ */ (0, Q.jsx)(Di, { router: a })
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
