import { r as e } from "./assets/rolldown-runtime-B0aSnxlc.js";
import { $ as t, An as n, Bt as r, C as i, D as a, Dn as o, E as s, F as c, Ft as l, G as u, It as d, Jt as f, Lt as p, O as m, On as h, Q as g, Rt as _, S as v, U as y, Ut as b, Vt as x, X as S, Xt as C, Z as w, _ as T, _r as E, at as D, b as O, d as k, f as A, g as j, h as M, it as N, kn as ee, l as P, m as te, n as ne, nt as re, o as ie, qt as ae, rt as oe, st as F, t as I, tn as se, v as ce, w as le, y as ue, yr as de, zt as L } from "./assets/ShortcutDeviceIcon-BYrUAyEC.js";
//#region node_modules/react-router/dist/development/chunk-BV7QT456.mjs
var R = /* @__PURE__ */ e(de(), 1), fe = (e) => {
	throw TypeError(e);
}, pe = (e, t, n) => t.has(e) || fe("Cannot " + n), z = (e, t, n) => (pe(e, t, "read from private field"), n ? n.call(e) : t.get(e)), me = (e, t, n) => t.has(e) ? fe("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), he = (e, t, n, r) => (pe(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), ge = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i, _e = /^[\\/]{2}/;
function ve(e, t) {
	return t + e.replace(/\\/g, "/");
}
function ye(e) {
	return typeof e == "object" && !!e && "pathname" in e && "search" in e && "hash" in e && "state" in e && "key" in e;
}
function be(e = {}) {
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
		let a = Se(i ? l().pathname : "/", e, t, n, r);
		return V(a.pathname.charAt(0) === "/", `relative pathnames are not supported in memory history: ${JSON.stringify(e)}`), a;
	}
	function d(e) {
		return typeof e == "string" ? e : H(e);
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
			let t = typeof e == "string" ? U(e) : e;
			return {
				pathname: t.pathname || "",
				search: t.search || "",
				hash: t.hash || ""
			};
		},
		push(e, t) {
			o = "PUSH";
			let n = ye(e) ? e : u(e, t);
			a += 1, i.splice(a, i.length, n), r && s && s({
				action: o,
				location: n,
				delta: 1
			});
		},
		replace(e, t) {
			o = "REPLACE";
			let n = ye(e) ? e : u(e, t);
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
function B(e, t) {
	if (e === !1 || e == null) throw Error(t);
}
function V(e, t) {
	if (!e) {
		typeof console < "u" && console.warn(t);
		try {
			throw Error(t);
		} catch {}
	}
}
function xe() {
	return Math.random().toString(36).substring(2, 10);
}
function Se(e, t, n = null, r, i) {
	return {
		pathname: typeof e == "string" ? e : e.pathname,
		search: "",
		hash: "",
		...typeof t == "string" ? U(t) : t,
		state: n,
		key: t && t.key || r || xe(),
		mask: i
	};
}
function H({ pathname: e = "/", search: t = "", hash: n = "" }) {
	return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n), e;
}
function U(e) {
	let t = {};
	if (e) {
		let n = e.indexOf("#");
		n >= 0 && (t.hash = e.substring(n), e = e.substring(0, n));
		let r = e.indexOf("?");
		r >= 0 && (t.search = e.substring(r), e = e.substring(0, r)), e && (t.pathname = e);
	}
	return t;
}
function Ce(e, t, n = !1) {
	let r = "http://localhost";
	e && (r = e.location.origin === "null" ? e.location.href : e.location.origin), B(r, "No window.location.(origin|href) available to create URL");
	let i = typeof t == "string" ? t : H(t);
	return i = i.replace(/ $/, "%20"), !n && _e.test(i) && (i = r + i), new URL(i, r);
}
var W, we = class {
	constructor(e) {
		if (me(this, W, /* @__PURE__ */ new Map()), e) for (let [t, n] of e) this.set(t, n);
	}
	get(e) {
		if (z(this, W).has(e)) return z(this, W).get(e);
		if (e.defaultValue !== void 0) return e.defaultValue;
		throw Error("No value found for context");
	}
	set(e, t) {
		z(this, W).set(e, t);
	}
};
W = /* @__PURE__ */ new WeakMap();
var Te = /* @__PURE__ */ new Set([
	"lazy",
	"caseSensitive",
	"path",
	"id",
	"index",
	"children"
]);
function Ee(e) {
	return Te.has(e);
}
var De = /* @__PURE__ */ new Set([
	"lazy",
	"caseSensitive",
	"path",
	"id",
	"index",
	"middleware",
	"children"
]);
function Oe(e) {
	return De.has(e);
}
function ke(e) {
	return e.index === !0;
}
function Ae(e, t, n = [], r = {}, i = !1) {
	return e.map((e, a) => {
		let o = [...n, String(a)], s = typeof e.id == "string" ? e.id : o.join("-");
		if (B(e.index !== !0 || !e.children, "Cannot specify children on an index route"), B(i || !r[s], `Found a route id collision on id "${s}".  Route id's must be globally unique within Data Router usages`), ke(e)) {
			let n = {
				...e,
				id: s
			};
			return r[s] = je(n, t(n)), n;
		}
		{
			let n = {
				...e,
				id: s,
				children: void 0
			};
			return r[s] = je(n, t(n)), e.children && (n.children = Ae(e.children, t, o, r, i)), n;
		}
	});
}
function je(e, t) {
	return Object.assign(e, {
		...t,
		...typeof t.lazy == "object" && t.lazy != null ? { lazy: {
			...e.lazy,
			...t.lazy
		} } : {}
	});
}
function Me(e, t, n = "/") {
	return Ne(e, t, n, !1);
}
function Ne(e, t, n, r, i) {
	let a = G((typeof t == "string" ? U(t) : t).pathname || "/", n);
	if (a == null) return null;
	let o = i ?? Fe(e), s = null, c = Qe(a);
	for (let e = 0; s == null && e < o.length; ++e) s = Je(o[e], c, r);
	return s;
}
function Pe(e, t) {
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
function Fe(e) {
	let t = Ie(e);
	return Re(t), t;
}
function Ie(e, t = [], n = [], r = "", i = !1) {
	let a = (e, a, o = i, s) => {
		let c = {
			relativePath: s === void 0 ? e.path || "" : s,
			caseSensitive: e.caseSensitive === !0,
			childrenIndex: a,
			route: e
		};
		if (c.relativePath.startsWith("/")) {
			if (!c.relativePath.startsWith(r) && o) return;
			B(c.relativePath.startsWith(r), `Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), c.relativePath = c.relativePath.slice(r.length);
		}
		let l = K([r, c.relativePath]), u = n.concat(c);
		e.children && e.children.length > 0 && (B(e.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${l}".`), Ie(e.children, t, u, l, o)), !(e.path == null && !e.index) && t.push({
			path: l,
			score: Ke(l, e.index),
			routesMeta: u.map((e, t) => {
				let [n, r] = Ze(e.relativePath, e.caseSensitive, t === u.length - 1);
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
		else for (let n of Le(e.path)) a(e, t, !0, n);
	}), t;
}
function Le(e) {
	let t = e.split("/");
	if (t.length === 0) return [];
	let [n, ...r] = t, i = n.endsWith("?"), a = n.replace(/\?$/, "");
	if (r.length === 0) return i ? [a, ""] : [a];
	let o = Le(r.join("/")), s = [];
	return s.push(...o.map((e) => e === "" ? a : [a, e].join("/"))), i && s.push(...o), s.map((t) => e.startsWith("/") && t === "" ? "/" : t);
}
function Re(e) {
	e.sort((e, t) => e.score === t.score ? qe(e.routesMeta.map((e) => e.childrenIndex), t.routesMeta.map((e) => e.childrenIndex)) : t.score - e.score);
}
var ze = /^:[\w-]+$/, Be = 3, Ve = 2, He = 1, Ue = 10, We = -2, Ge = (e) => e === "*";
function Ke(e, t) {
	let n = e.split("/"), r = n.length;
	return n.some(Ge) && (r += We), t && (r += Ve), n.filter((e) => !Ge(e)).reduce((e, t) => e + (ze.test(t) ? Be : t === "" ? He : Ue), r);
}
function qe(e, t) {
	return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function Je(e, t, n = !1) {
	let { routesMeta: r } = e, i = {}, a = "/", o = [];
	for (let e = 0; e < r.length; ++e) {
		let s = r[e], c = e === r.length - 1, l = a === "/" ? t : t.slice(a.length) || "/", u = {
			path: s.relativePath,
			caseSensitive: s.caseSensitive,
			end: c
		}, d = s.matcher && s.compiledParams ? Xe(u, l, s.matcher, s.compiledParams) : Ye(u, l), f = s.route;
		if (!d && c && n && !r[r.length - 1].route.index && (d = Ye({
			path: s.relativePath,
			caseSensitive: s.caseSensitive,
			end: !1
		}, l)), !d) return null;
		Object.assign(i, d.params), o.push({
			params: i,
			pathname: K([a, d.pathname]),
			pathnameBase: lt(K([a, d.pathnameBase])),
			route: f
		}), d.pathnameBase !== "/" && (a = K([a, d.pathnameBase]));
	}
	return o;
}
function Ye(e, t) {
	typeof e == "string" && (e = {
		path: e,
		caseSensitive: !1,
		end: !0
	});
	let [n, r] = Ze(e.path, e.caseSensitive, e.end);
	return Xe(e, t, n, r);
}
function Xe(e, t, n, r) {
	let i = t.match(n);
	if (!i) return null;
	let a = i[0], o = ct(a, 1), s = i.slice(1);
	return {
		params: r.reduce((e, { paramName: t, isOptional: n }, r) => {
			if (t === "*") {
				let e = s[r] || "";
				o = ct(a.slice(0, a.length - e.length), 1);
			}
			let i = s[r];
			return e[t] = n && !i ? void 0 : (i || "").replace(/%2F/g, "/"), e;
		}, {}),
		pathname: a,
		pathnameBase: o,
		pattern: e
	};
}
function Ze(e, t = !1, n = !0) {
	V(e === "*" || !e.endsWith("*") || e.endsWith("/*"), `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`);
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
function Qe(e) {
	try {
		return e.split("/").map((e) => decodeURIComponent(e).replace(/\//g, "%2F")).join("/");
	} catch (t) {
		return V(!1, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`), e;
	}
}
function G(e, t) {
	if (t === "/") return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
	return r && r !== "/" ? null : e.slice(n) || "/";
}
function $e({ basename: e, pathname: t }) {
	return t === "/" ? e : K([e, t]);
}
var et = (e) => ge.test(e);
function tt(e, t = "/") {
	let { pathname: n, search: r = "", hash: i = "" } = typeof e == "string" ? U(e) : e, a;
	return n ? (n = st(n), a = n.startsWith("/") || n.startsWith("\\") ? nt(n.substring(1), "/") : nt(n, t)) : a = t, {
		pathname: a,
		search: ut(r),
		hash: dt(i)
	};
}
function nt(e, t) {
	let n = ct(t).split("/");
	return e.split("/").forEach((e) => {
		e === ".." ? n.length > 1 && n.pop() : e !== "." && n.push(e);
	}), n.length > 1 ? n.join("/") : "/";
}
function rt(e, t, n, r) {
	return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function it(e) {
	return e.filter((e, t) => t === 0 || e.route.path && e.route.path.length > 0);
}
function at(e) {
	let t = it(e);
	return t.map((e, n) => n === t.length - 1 ? e.pathname : e.pathnameBase);
}
function ot(e, t, n, r = !1) {
	let i;
	typeof e == "string" ? i = U(e) : (i = { ...e }, B(!i.pathname || !i.pathname.includes("?"), rt("?", "pathname", "search", i)), B(!i.pathname || !i.pathname.includes("#"), rt("#", "pathname", "hash", i)), B(!i.search || !i.search.includes("#"), rt("#", "search", "hash", i)));
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
	let c = tt(i, s), l = o && o !== "/" && o.endsWith("/"), u = (a || o === ".") && n.endsWith("/");
	return !c.pathname.endsWith("/") && (l || u) && (c.pathname += "/"), c;
}
var st = (e) => e.replace(/[\\/]{2,}/g, "/"), K = (e) => st(e.join("/"));
function ct(e, t = 0) {
	let n = e.length;
	for (; n > t && e.charCodeAt(n - 1) === 47;) n--;
	return n === e.length ? e : e.slice(0, n);
}
var lt = (e) => ct(e).replace(/^\/*/, "/"), ut = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, dt = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, ft = class {
	constructor(e, t, n, r = !1) {
		this.status = e, this.statusText = t || "", this.internal = r, n instanceof Error ? (this.data = n.toString(), this.error = n) : this.data = n;
	}
};
function pt(e) {
	return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
function mt(e) {
	return K(e.map((e) => e.route.path).filter(Boolean)) || "/";
}
var ht = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function gt(e, t) {
	let n = e;
	if (typeof n != "string" || !ge.test(n)) return {
		absoluteURL: void 0,
		isExternal: !1,
		to: n
	};
	let r = n, i = !1;
	if (ht) try {
		let e = new URL(window.location.href), r = _e.test(n) ? new URL(ve(n, e.protocol)) : new URL(n), a = G(r.pathname, t);
		r.origin === e.origin && a != null ? n = a + r.search + r.hash : i = !0;
	} catch {
		V(!1, `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
	}
	return {
		absoluteURL: r,
		isExternal: i,
		to: n
	};
}
var _t = Symbol("Uninstrumented");
function vt(e, t) {
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
		let e = bt(n.lazy, t.lazy, () => void 0);
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
				let e = bt(a, i, () => void 0);
				e && (r.lazy = Object.assign(r.lazy || {}, { [t]: e }));
			}
		});
	}
	return ["loader", "action"].forEach((e) => {
		let i = t[e];
		if (typeof i == "function" && n[e].length > 0) {
			let t = i[_t] ?? i, a = bt(n[e], t, (...e) => St(e[0]));
			a && (e === "loader" && t.hydrate === !0 && (a.hydrate = !0), a[_t] = t, r[e] = a);
		}
	}), t.middleware && t.middleware.length > 0 && n.middleware.length > 0 && (r.middleware = t.middleware.map((e) => {
		let t = e[_t] ?? e, r = bt(n.middleware, t, (...e) => St(e[0]));
		return r ? (r[_t] = t, r) : e;
	})), r;
}
function yt(e, t) {
	let n = {
		navigate: [],
		fetch: []
	};
	if (t.forEach((e) => e({ instrument(e) {
		let t = Object.keys(e);
		for (let r of t) e[r] && n[r].push(e[r]);
	} })), n.navigate.length > 0) {
		let t = e.navigate[_t] ?? e.navigate, r = bt(n.navigate, t, (...t) => {
			let [n, r] = t;
			return {
				to: typeof n == "number" || typeof n == "string" ? n : n ? H(n) : ".",
				...Ct(e, r ?? {})
			};
		});
		r && (r[_t] = t, e.navigate = r);
	}
	if (n.fetch.length > 0) {
		let t = e.fetch[_t] ?? e.fetch, r = bt(n.fetch, t, (...t) => {
			let [n, , r, i] = t;
			return {
				href: r ?? ".",
				fetcherKey: n,
				...Ct(e, i ?? {})
			};
		});
		r && (r[_t] = t, e.fetch = r);
	}
	return e;
}
function bt(e, t, n) {
	return e.length === 0 ? null : async (...r) => {
		let i = await xt(e, n(...r), () => t(...r), e.length - 1);
		if (i.type === "error") throw i.value;
		return i.value;
	};
}
async function xt(e, t, n, r) {
	let i = e[r], a;
	if (i) {
		let o, s = async () => (o ? console.error("You cannot call instrumented handlers more than once") : o = xt(e, t, n, r - 1), a = await o, B(a, "Expected a result"), a.type === "error" && a.value instanceof Error ? {
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
function St(e) {
	let { request: t, context: n, params: r, pattern: i } = e;
	return {
		request: wt(t),
		params: { ...r },
		pattern: i,
		context: Tt(n)
	};
}
function Ct(e, t) {
	return {
		currentUrl: H(e.state.location),
		..."formMethod" in t ? { formMethod: t.formMethod } : {},
		..."formEncType" in t ? { formEncType: t.formEncType } : {},
		..."formData" in t ? { formData: t.formData } : {},
		..."body" in t ? { body: t.body } : {}
	};
}
function wt(e) {
	return {
		method: e.method,
		url: e.url,
		headers: { get: (...t) => e.headers.get(...t) }
	};
}
function Tt(e) {
	if (Dt(e)) {
		let t = { ...e };
		return Object.freeze(t), t;
	}
	return { get: (t) => e.get(t) };
}
var Et = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Dt(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Object.getOwnPropertyNames(t).sort().join("\0") === Et;
}
var Ot = new URL("http://localhost");
function kt(e) {
	if (e.createURL) return e.createURL("/");
	try {
		return new URL(e.createHref("/"), Ot);
	} catch {
		return Ot;
	}
}
function At(e, t) {
	return e.origin === t.origin && (e.origin !== "null" || e.protocol === t.protocol && e.host === t.host);
}
function jt(e, t) {
	if (e.startsWith("//")) return !0;
	let n = t.protocol.toLowerCase();
	return e.toLowerCase().startsWith(n) ? t.host === "" || e.slice(n.length).startsWith("//") : !1;
}
function Mt(e, t, n, r) {
	let i = null;
	try {
		i = e == null ? null : new URL(e, n);
	} catch {}
	let a = new URL(t, n), o = i != null && !At(i, n), s = !At(a, n);
	if (r === "reject") {
		if (o || s) throw Error("External navigation is not allowed");
	} else if (s && (i == null || !jt(e, i) || !At(i, a))) throw Error("External navigation is not allowed");
}
var Nt = [
	"POST",
	"PUT",
	"PATCH",
	"DELETE"
], Pt = new Set(Nt), Ft = ["GET", ...Nt], It = new Set(Ft), Lt = /* @__PURE__ */ new Set([
	301,
	302,
	303,
	307,
	308
]), Rt = /* @__PURE__ */ new Set([307, 308]), zt = {
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
}, Bt = {
	state: "idle",
	data: void 0,
	formMethod: void 0,
	formAction: void 0,
	formEncType: void 0,
	formData: void 0,
	json: void 0,
	text: void 0
}, Vt = {
	state: "unblocked",
	proceed: void 0,
	reset: void 0,
	location: void 0
}, Ht = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }), Ut = "remix-router-transitions", Wt = Symbol("ResetLoaderData"), Gt, Kt, qt, Jt, Yt = class {
	constructor(e) {
		me(this, Gt), me(this, Kt), me(this, qt), me(this, Jt), he(this, Gt, e), he(this, Kt, Fe(e));
	}
	get stableRoutes() {
		return z(this, Gt);
	}
	get activeRoutes() {
		return z(this, qt) ?? z(this, Gt);
	}
	get branches() {
		return z(this, Jt) ?? z(this, Kt);
	}
	get hasHMRRoutes() {
		return z(this, qt) != null;
	}
	setRoutes(e) {
		he(this, Gt, e), he(this, Kt, Fe(e));
	}
	setHmrRoutes(e) {
		he(this, qt, e), he(this, Jt, Fe(e));
	}
	commitHmrRoutes() {
		z(this, qt) && (he(this, Gt, z(this, qt)), he(this, Kt, z(this, Jt)), he(this, qt, void 0), he(this, Jt, void 0));
	}
};
Gt = /* @__PURE__ */ new WeakMap(), Kt = /* @__PURE__ */ new WeakMap(), qt = /* @__PURE__ */ new WeakMap(), Jt = /* @__PURE__ */ new WeakMap();
function Xt(e) {
	let t = e.window ? e.window : typeof window < "u" ? window : void 0, n = t !== void 0 && t.document !== void 0 && t.document.createElement !== void 0;
	B(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
	let r = e.hydrationRouteProperties || [], i = e.mapRouteProperties || Ht, a = i;
	if (e.instrumentations) {
		let t = e.instrumentations;
		a = (e) => ({
			...i(e),
			...vt(t.map((e) => e.route).filter(Boolean), e)
		});
	}
	let o = {}, s = new Yt(Ae(e.routes, a, void 0, o)), c = e.basename || "/";
	c.startsWith("/") || (c = `/${c}`);
	let l = e.dataStrategy || mn, u = { ...e.future }, d = null, f = /* @__PURE__ */ new Set(), p = null, m = null, h = null, g = null, _ = e.hydrationData != null, v = Ne(s.activeRoutes, e.history.location, c, !1, s.branches), y = !1, b = null, x, S;
	if (v == null && !e.patchRoutesOnNavigation) {
		let t = q(404, { pathname: e.history.location.pathname }), { matches: n, route: r } = Rn(s.activeRoutes);
		x = !0, S = !x, v = n, b = { [r.id]: t };
	} else if (v && !e.hydrationData && Xe(v, s.activeRoutes, e.history.location.pathname).active && (v = null), !v) {
		x = !1, S = !x, v = [];
		let t = Xe(null, s.activeRoutes, e.history.location.pathname);
		t.active && t.matches && (y = !0, v = t.matches);
	} else if (v.some((e) => e.route.lazy)) x = !1, S = !x;
	else if (!v.some((e) => tn(e.route))) x = !0, S = !x;
	else {
		let t = e.hydrationData ? e.hydrationData.loaderData : null, n = e.hydrationData ? e.hydrationData.errors : null, r = v;
		if (n) {
			let e = v.findIndex((e) => n[e.route.id] !== void 0);
			r = r.slice(0, e + 1);
		}
		S = !1, x = !0, r.forEach((e) => {
			let r = nn(e.route, t, n);
			S ||= r.renderFallback, x &&= !r.shouldLoad;
		});
	}
	let C, w = {
		historyAction: e.history.action,
		location: e.history.location,
		matches: v,
		initialized: x,
		renderFallback: S,
		navigation: zt,
		restoreScrollPosition: e.hydrationData == null && null,
		preventScrollReset: !1,
		revalidation: "idle",
		loaderData: e.hydrationData && e.hydrationData.loaderData || {},
		actionData: e.hydrationData && e.hydrationData.actionData || null,
		errors: e.hydrationData && e.hydrationData.errors || b,
		fetchers: /* @__PURE__ */ new Map(),
		blockers: /* @__PURE__ */ new Map()
	}, T = "POP", E = null, D = !1, O, k = !1, A = /* @__PURE__ */ new Map(), j = null, M = !1, N = !1, ee = /* @__PURE__ */ new Set(), P = /* @__PURE__ */ new Map(), te = 0, ne = -1, re = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Set(), ae = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Set(), I = /* @__PURE__ */ new Map(), se, ce = null;
	function le() {
		if (d = e.history.listen(({ action: t, location: n, delta: r }) => {
			if (se) {
				se(), se = void 0;
				return;
			}
			V(I.size === 0 || r != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
			let i = We({
				currentLocation: w.location,
				nextLocation: n,
				historyAction: t
			});
			if (i && r != null) {
				let t = new Promise((e) => {
					se = e;
				});
				e.history.go(r * -1), Ue(i, {
					state: "blocked",
					location: n,
					proceed() {
						Ue(i, {
							state: "proceeding",
							proceed: void 0,
							reset: void 0,
							location: n
						}), t.then(() => e.history.go(r));
					},
					reset() {
						let e = new Map(w.blockers);
						e.set(i, Vt), L({ blockers: e });
					}
				}), E?.resolve(), E = null;
				return;
			}
			return z(t, n);
		}), n) {
			or(t, A);
			let e = () => sr(t, A);
			t.addEventListener("pagehide", e), j = () => t.removeEventListener("pagehide", e);
		}
		return w.initialized || z("POP", w.location, { initialHydration: !0 }), C;
	}
	function ue() {
		d && d(), j && j(), f.clear(), O && O.abort(), w.fetchers.forEach((e, t) => Fe(w.fetchers, t)), w.blockers.forEach((e, t) => He(t));
	}
	function de(e) {
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
	function L(e, t = {}) {
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
			e.state === "idle" && (F.has(t) ? n.push(t) : r.push(t));
		}), F.forEach((e) => {
			!w.fetchers.has(e) && !P.has(e) && n.push(e);
		}), f.size === 0 && (p = { newErrors: e.errors ?? null }), [...f].forEach((r) => r(w, {
			deletedFetchers: n,
			newErrors: e.errors ?? null,
			viewTransitionOpts: t.viewTransitionOpts,
			flushSync: t.flushSync === !0
		})), n.forEach((e) => Fe(w.fetchers, e)), r.forEach((e) => w.fetchers.delete(e));
	}
	function R(t, n, { flushSync: r } = {}) {
		let i = w.actionData != null && w.navigation.formMethod != null && Y(w.navigation.formMethod) && w.navigation.state === "loading" && t.state?._isRedirect !== !0, a;
		a = n.actionData ? Object.keys(n.actionData).length > 0 ? n.actionData : null : i ? w.actionData : null;
		let o = n.loaderData ? Fn(w.loaderData, n.loaderData, n.matches || [], n.errors) : w.loaderData, c = w.blockers;
		c.size > 0 && (c = new Map(c), c.forEach((e, t) => c.set(t, Vt)));
		let l = !M && Ye(t, n.matches || w.matches), u = D === !0 || w.navigation.formMethod != null && Y(w.navigation.formMethod) && t.state?._isRedirect !== !0;
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
		L({
			...n,
			actionData: a,
			loaderData: o,
			historyAction: T,
			location: t,
			initialized: !0,
			renderFallback: !1,
			navigation: zt,
			revalidation: "idle",
			restoreScrollPosition: l,
			preventScrollReset: u,
			blockers: c
		}, {
			viewTransitionOpts: d,
			flushSync: r === !0
		}), T = "POP", D = !1, k = !1, M = !1, N = !1, E?.resolve(), E = null, ce?.resolve(), ce = null;
	}
	async function fe(t, n) {
		if (E?.resolve(), E = null, typeof t == "number") {
			E ||= cr();
			let n = E.promise;
			return e.history.go(t), n;
		}
		let { path: r, submission: i, error: a } = $t(!1, Qt(w.location, w.matches, c, t, n?.fromRouteId, n?.relative), n), o;
		if (n?.mask) {
			let t = typeof n.mask == "string" ? U(n.mask) : {
				...w.location.mask,
				...n.mask
			};
			if (o = {
				pathname: t.pathname ?? "",
				search: t.search ?? "",
				hash: t.hash ?? ""
			}, _e.test(o.pathname)) throw Error("External navigation is not allowed");
			o.pathname.startsWith("\\") && (o.pathname = o.pathname.replace(/^\\+/, "/")), Mt(typeof n.mask == "string" ? n.mask : H(n.mask), H(o), e.history.createURL("/"), "reject");
		}
		let s = w.location, l = Se(s, r, n && n.state, void 0, o);
		l = {
			...l,
			...e.history.encodeLocation(l)
		}, Mt(t == null ? e.history.createHref(w.location) : typeof t == "string" ? t : H(t), e.history.createHref(l.mask || l), e.history.createURL("/"), "reject");
		let u = n && n.replace != null ? n.replace : void 0, d = "PUSH";
		u === !0 ? d = "REPLACE" : u === !1 || i != null && Y(i.formMethod) && i.formAction === w.location.pathname + w.location.search && (d = "REPLACE");
		let f = n && "preventScrollReset" in n ? n.preventScrollReset === !0 : void 0, p = (n && n.flushSync) === !0, m = We({
			currentLocation: s,
			nextLocation: l,
			historyAction: d
		});
		if (m) {
			Ue(m, {
				state: "blocked",
				location: l,
				proceed() {
					Ue(m, {
						state: "proceeding",
						proceed: void 0,
						reset: void 0,
						location: l
					}), fe(t, n);
				},
				reset() {
					let e = new Map(w.blockers);
					e.set(m, Vt), L({ blockers: e });
				}
			});
			return;
		}
		await z(d, l, {
			submission: i,
			pendingError: a,
			preventScrollReset: f,
			replace: n && n.replace,
			enableViewTransition: n && n.viewTransition,
			flushSync: p,
			callSiteDefaultShouldRevalidate: n && n.defaultShouldRevalidate
		});
	}
	function pe() {
		ce ||= cr(), De(), L({ revalidation: "loading" });
		let e = ce.promise;
		return w.navigation.state === "submitting" ? e : w.navigation.state === "idle" ? (z(w.historyAction, w.location, { startUninterruptedRevalidation: !0 }), e) : (z(T || w.historyAction, w.navigation.location, {
			overrideNavigation: w.navigation,
			enableViewTransition: k === !0
		}), e);
	}
	async function z(t, n, r) {
		O && O.abort(), O = null, T = t, M = (r && r.startUninterruptedRevalidation) === !0, Je(w.location, w.matches), D = (r && r.preventScrollReset) === !0, k = (r && r.enableViewTransition) === !0;
		let i = s.activeRoutes, a = r?.initialHydration && w.matches && w.matches.length > 0 && !y ? w.matches : Ne(i, n, c, !1, s.branches), o = (r && r.flushSync) === !0;
		if (a && w.initialized && !N && Vn(w.location, n) && !(r && r.submission && Y(r.submission.formMethod))) {
			R(n, { matches: a }, { flushSync: o });
			return;
		}
		let l = Xe(a, i, n.pathname);
		if (l.active && l.matches && (a = l.matches), !a) {
			let { error: e, notFoundMatches: t, route: r } = Ge(n.pathname);
			R(n, {
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
		let d = kn(e.history, n, O.signal, r && r.submission), f = e.getContext ? await e.getContext() : new we(), p;
		if (r && r.pendingError) p = [Ln(a).route.id, {
			type: "error",
			error: r.pendingError
		}];
		else if (r && r.submission && Y(r.submission.formMethod)) {
			let i = await me(d, n, r.submission, a, t, f, l.active, r && r.initialHydration === !0, {
				replace: r.replace,
				flushSync: o
			});
			if (i.shortCircuited) return;
			if (i.pendingActionResult) {
				let [e, t] = i.pendingActionResult;
				if (J(t) && pt(t.error) && t.error.status === 404) {
					O = null, R(n, {
						matches: i.matches,
						loaderData: {},
						errors: { [e]: t.error }
					});
					return;
				}
			}
			a = i.matches || a, p = i.pendingActionResult, u = tr(n, a, t, r.submission), o = !1, l.active = !1, d = kn(e.history, d.url, d.signal);
		}
		let { shortCircuited: m, matches: h, loaderData: g, errors: _, workingFetchers: v } = await he(d, n, a, t, f, l.active, u, r && r.submission, r && r.fetcherSubmission, r && r.replace, r && r.initialHydration === !0, o, p, r && r.callSiteDefaultShouldRevalidate);
		m || (O = null, R(n, {
			matches: h || a,
			...In(p),
			loaderData: g,
			errors: _,
			...v ? { fetchers: v } : {}
		}));
	}
	async function me(t, n, i, l, u, d, f, p, m = {}) {
		if (De(), L({ navigation: nr(n, l, u, i) }, { flushSync: m.flushSync === !0 }), f) {
			let e = await Ze(l, n.pathname, t.signal);
			if (e.type === "aborted") return { shortCircuited: !0 };
			if (e.type === "error") {
				if (e.partialMatches.length === 0) {
					let { matches: t, route: n } = Rn(s.activeRoutes);
					return {
						matches: t,
						pendingActionResult: [n.id, {
							type: "error",
							error: e.error
						}]
					};
				}
				let t = Ln(e.partialMatches).route.id;
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
				let { notFoundMatches: e, error: t, route: r } = Ge(n.pathname);
				return {
					matches: e,
					pendingActionResult: [r.id, {
						type: "error",
						error: t
					}]
				};
			}
		}
		let h, g = $n(l, n);
		if (!g.route.action && !g.route.lazy) h = {
			type: "error",
			error: q(405, {
				method: t.method,
				pathname: n.pathname,
				routeId: g.route.id
			})
		};
		else {
			let e = await Te(t, n, bn(a, o, t, n, l, g, p ? [] : r, d), d, null);
			if (h = e[g.route.id], !h) {
				for (let t of l) if (e[t.route.id]) {
					h = e[t.route.id];
					break;
				}
			}
			if (t.signal.aborted) return { shortCircuited: !0 };
		}
		if (Kn(h)) {
			let n;
			return n = m && m.replace != null ? m.replace : On(h.response.headers.get("Location"), new URL(t.url), c, e.history) === w.location.pathname + w.location.search, await W(t, h, !0, {
				submission: i,
				replace: n
			}), { shortCircuited: !0 };
		}
		if (J(h)) {
			let e = Ln(l, g.route.id);
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
	async function he(t, n, i, l, u, d, f, p, m, h, g, _, v, y) {
		let b = f || tr(n, i, l, p), x = p || m || er(b), S = !M && !g;
		if (d) {
			if (S) {
				let e = ge(v);
				L({
					navigation: b,
					...e === void 0 ? {} : { actionData: e }
				}, { flushSync: _ });
			}
			let e = await Ze(i, n.pathname, t.signal);
			if (e.type === "aborted") return { shortCircuited: !0 };
			if (e.type === "error") {
				if (e.partialMatches.length === 0) {
					let { matches: t, route: n } = Rn(s.activeRoutes);
					return {
						matches: t,
						loaderData: {},
						errors: { [n.id]: e.error }
					};
				}
				let t = Ln(e.partialMatches).route.id;
				return {
					matches: e.partialMatches,
					loaderData: {},
					errors: { [t]: e.error }
				};
			}
			if (e.matches) i = e.matches;
			else {
				let { error: e, notFoundMatches: t, route: r } = Ge(n.pathname);
				return {
					matches: t,
					loaderData: {},
					errors: { [r.id]: e }
				};
			}
		}
		let C = s.activeRoutes, { dsMatches: T, revalidatingFetchers: E } = en(t, u, a, o, e.history, w, i, x, n, g ? [] : r, g === !0, N, ee, F, ae, ie, C, c, e.patchRoutesOnNavigation != null, s.branches, v, y);
		if (ne = ++te, !e.dataStrategy && !T.some((e) => e.shouldLoad) && !T.some((e) => e.route.middleware && e.route.middleware.length > 0) && E.length === 0) {
			let e = new Map(w.fetchers), t = ze(e);
			return R(n, {
				matches: i,
				loaderData: {},
				errors: v && J(v[1]) ? { [v[0]]: v[1].error } : null,
				...In(v),
				...t ? { fetchers: e } : {}
			}, { flushSync: _ }), { shortCircuited: !0 };
		}
		if (S) {
			let e = {};
			if (!d) {
				e.navigation = b;
				let t = ge(v);
				t !== void 0 && (e.actionData = t);
			}
			E.length > 0 && (e.fetchers = ve(E)), L(e, { flushSync: _ });
		}
		E.forEach((e) => {
			Le(e.key), e.controller && P.set(e.key, e.controller);
		});
		let D = () => E.forEach((e) => Le(e.key));
		O && O.signal.addEventListener("abort", D);
		let { loaderResults: k, fetcherResults: A } = await Ee(T, E, t, n, u);
		if (t.signal.aborted) return { shortCircuited: !0 };
		O && O.signal.removeEventListener("abort", D), E.forEach((e) => P.delete(e.key));
		let j = zn(k);
		if (j) return await W(t, j.result, !0, { replace: h }), { shortCircuited: !0 };
		if (j = zn(A), j) return ie.add(j.key), await W(t, j.result, !0, { replace: h }), { shortCircuited: !0 };
		let re = new Map(w.fetchers), { loaderData: oe, errors: I } = Pn(w, i, k, v, E, A, re);
		g && w.errors && (I = {
			...w.errors,
			...I
		});
		let se = ze(re), ce = Be(ne, re), le = se || ce || E.length > 0;
		return {
			matches: i,
			loaderData: oe,
			errors: I,
			...le ? { workingFetchers: re } : {}
		};
	}
	function ge(e) {
		if (e && !J(e[1])) return { [e[0]]: e[1].data };
		if (w.actionData) return Object.keys(w.actionData).length === 0 ? null : w.actionData;
	}
	function ve(e) {
		let t = new Map(w.fetchers);
		return e.forEach((e) => {
			let n = t.get(e.key), r = rr(void 0, n ? n.data : void 0);
			t.set(e.key, r);
		}), t;
	}
	async function ye(t, n, r, i) {
		Le(t);
		let a = (i && i.flushSync) === !0, o = s.activeRoutes, l = Qt(w.location, w.matches, c, r, n, i?.relative), u = Ne(o, l, c, !1, s.branches), d = Xe(u, o, l);
		if (d.active && d.matches && (u = d.matches), !u) {
			ke(t, n, q(404, { pathname: l }), { flushSync: a });
			return;
		}
		let { path: f, submission: p, error: m } = $t(!0, l, i);
		if (m) {
			ke(t, n, m, { flushSync: a });
			return;
		}
		let h = e.getContext ? await e.getContext() : new we(), g = (i && i.preventScrollReset) === !0;
		if (p && Y(p.formMethod)) {
			await be(t, n, f, u, h, d.active, a, g, p, i && i.defaultShouldRevalidate);
			return;
		}
		ae.set(t, {
			routeId: n,
			path: f
		}), await xe(t, n, f, u, h, d.active, a, g, p);
	}
	async function be(t, n, i, l, u, d, f, p, m, h) {
		De(), ae.delete(t), Oe(t, ir(m, w.fetchers.get(t)), { flushSync: f });
		let g = new AbortController(), _ = kn(e.history, i, g.signal, m);
		if (d) {
			let e = await Ze(l, new URL(_.url).pathname, _.signal, t);
			if (e.type === "aborted") return;
			if (e.type === "error") {
				ke(t, n, e.error, { flushSync: f });
				return;
			}
			if (e.matches) l = e.matches;
			else {
				ke(t, n, q(404, { pathname: i }), { flushSync: f });
				return;
			}
		}
		let v = $n(l, i);
		if (!v.route.action && !v.route.lazy) {
			ke(t, n, q(405, {
				method: m.formMethod,
				pathname: i,
				routeId: n
			}), { flushSync: f });
			return;
		}
		P.set(t, g);
		let y = te, b = bn(a, o, _, i, l, v, r, u), x = await Te(_, i, b, u, t), S = x[v.route.id];
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
		if (F.has(t)) {
			if (Kn(S) || J(S)) {
				Oe(t, ar(void 0));
				return;
			}
		} else {
			if (Kn(S)) {
				if (P.delete(t), ne > y) {
					Oe(t, ar(void 0));
					return;
				}
				return ie.add(t), Oe(t, rr(m)), W(_, S, !1, {
					fetcherSubmission: m,
					preventScrollReset: p
				});
			}
			if (J(S)) {
				ke(t, n, S.error);
				return;
			}
		}
		let C = w.navigation.location || w.location, E = kn(e.history, C, g.signal), D = s.activeRoutes, k = w.navigation.state === "idle" ? w.matches : Ne(D, w.navigation.location, c, !1, s.branches);
		B(k, "Didn't find any matches after fetcher action");
		let A = ++te;
		re.set(t, A);
		let { dsMatches: j, revalidatingFetchers: M } = en(E, u, a, o, e.history, w, k, m, C, r, !1, N, ee, F, ae, ie, D, c, e.patchRoutesOnNavigation != null, s.branches, [v.route.id, S], h), oe = rr(m, S.data), I = new Map(w.fetchers);
		I.set(t, oe), M.filter((e) => e.key !== t).forEach((e) => {
			let t = e.key, n = I.get(t), r = rr(void 0, n ? n.data : void 0);
			I.set(t, r), Le(t), e.controller && P.set(t, e.controller);
		}), L({ fetchers: I });
		let se = () => M.forEach((e) => Le(e.key));
		g.signal.addEventListener("abort", se);
		let { loaderResults: ce, fetcherResults: le } = await Ee(j, M, E, C, u);
		if (g.signal.aborted) return;
		g.signal.removeEventListener("abort", se), re.delete(t), P.delete(t), M.forEach((e) => P.delete(e.key));
		let ue = w.fetchers.has(t), de = (e) => {
			if (!ue) return e;
			let n = new Map(e.fetchers);
			return n.set(t, ar(S.data)), {
				...e,
				fetchers: n
			};
		}, fe = zn(ce);
		if (fe) return w = de(w), W(E, fe.result, !1, { preventScrollReset: p });
		if (fe = zn(le), fe) return ie.add(fe.key), w = de(w), W(E, fe.result, !1, { preventScrollReset: p });
		let pe = new Map(w.fetchers);
		ue && pe.set(t, ar(S.data));
		let { loaderData: z, errors: me } = Pn(w, k, ce, void 0, M, le, pe);
		Be(A, pe), w.navigation.state === "loading" && A > ne ? (B(T, "Expected pending action"), O && O.abort(), R(w.navigation.location, {
			matches: k,
			loaderData: z,
			errors: me,
			fetchers: pe
		})) : (L({
			errors: me,
			loaderData: Fn(w.loaderData, z, k, me),
			fetchers: pe
		}), N = !1);
	}
	async function xe(t, n, i, s, c, l, u, d, f) {
		let p = w.fetchers.get(t);
		Oe(t, rr(f, p ? p.data : void 0), { flushSync: u });
		let m = new AbortController(), h = kn(e.history, i, m.signal);
		if (l) {
			let e = await Ze(s, new URL(h.url).pathname, h.signal, t);
			if (e.type === "aborted") return;
			if (e.type === "error") {
				ke(t, n, e.error, { flushSync: u });
				return;
			}
			if (e.matches) s = e.matches;
			else {
				ke(t, n, q(404, { pathname: i }), { flushSync: u });
				return;
			}
		}
		let g = $n(s, i);
		P.set(t, m);
		let _ = te, v = await Te(h, i, bn(a, o, h, i, s, g, r, c), c, t), y = v[g.route.id];
		if (!y) {
			for (let e of s) if (v[e.route.id]) {
				y = v[e.route.id];
				break;
			}
		}
		if (P.get(t) === m && P.delete(t), !h.signal.aborted) {
			if (F.has(t)) {
				Oe(t, ar(void 0));
				return;
			}
			if (Kn(y)) {
				if (ne > _) {
					Oe(t, ar(void 0));
					return;
				}
				ie.add(t), await W(h, y, !1, { preventScrollReset: d });
				return;
			}
			if (J(y)) {
				ke(t, n, y.error);
				return;
			}
			Oe(t, ar(y.data));
		}
	}
	async function W(r, i, a, { submission: o, fetcherSubmission: s, preventScrollReset: l, replace: u } = {}) {
		a || (E?.resolve(), E = null), i.response.headers.has("X-Remix-Revalidate") && (N = !0);
		let d = i.response.headers.get("Location");
		B(d, "Expected a Location header on the redirect Response");
		let f = d, p = new URL(r.url);
		d = On(d, p, c, e.history), Mt(f, d, p, "allow-explicit");
		let m = Se(w.location, d, { _isRedirect: !0 });
		if (n) {
			let e = !1;
			if (i.response.headers.has("X-Remix-Reload-Document")) e = !0;
			else if (et(d)) {
				let n = Ce(t, d, !0);
				e = n.origin !== t.location.origin || G(n.pathname, c) == null;
			}
			if (e) {
				u ? t.location.replace(d) : t.location.assign(d);
				return;
			}
		}
		O = null;
		let h = u === !0 || i.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH", { formMethod: g, formAction: _, formEncType: v } = w.navigation;
		!o && !s && g && _ && v && (o = er(w.navigation));
		let y = o || s;
		Rt.has(i.response.status) && y && Y(y.formMethod) ? await z(h, m, {
			submission: {
				...y,
				formAction: d
			},
			preventScrollReset: l || D,
			enableViewTransition: a ? k : void 0
		}) : await z(h, m, {
			overrideNavigation: tr(m, [], h, o),
			fetcherSubmission: s,
			preventScrollReset: l || D,
			enableViewTransition: a ? k : void 0
		});
	}
	async function Te(e, t, n, r, i) {
		let a, o = {};
		try {
			a = await xn(l, e, t, n, i, r, !1);
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
		for (let [t, r] of Object.entries(a)) if (Gn(r)) {
			let i = r.result;
			o[t] = {
				type: "redirect",
				response: Tn(i, e, t, n, c)
			};
		} else o[t] = await wn(r);
		return o;
	}
	async function Ee(e, t, n, r, i) {
		let a = Te(n, r, e, i, null), o = Promise.all(t.map(async (e) => {
			if (e.matches && e.match && e.request && e.controller) {
				let t = (await Te(e.request, e.path, e.matches, i, e.key))[e.match.route.id];
				return { [e.key]: t };
			}
			return Promise.resolve({ [e.key]: {
				type: "error",
				error: q(404, { pathname: e.path })
			} });
		}));
		return {
			loaderResults: await a,
			fetcherResults: (await o).reduce((e, t) => Object.assign(e, t), {})
		};
	}
	function De() {
		N = !0, ae.forEach((e, t) => {
			P.has(t) && ee.add(t), Le(t);
		});
	}
	function Oe(e, t, n = {}) {
		let r = new Map(w.fetchers);
		r.set(e, t), L({ fetchers: r }, { flushSync: (n && n.flushSync) === !0 });
	}
	function ke(e, t, n, r = {}) {
		let i = Ln(w.matches, t), a = new Map(w.fetchers);
		Fe(a, e), L({
			errors: { [i.route.id]: n },
			fetchers: a
		}, { flushSync: (r && r.flushSync) === !0 });
	}
	function je(e) {
		return oe.set(e, (oe.get(e) || 0) + 1), F.has(e) && F.delete(e), w.fetchers.get(e) || Bt;
	}
	function Me(e, t) {
		Le(e, t?.reason), Oe(e, ar(null));
	}
	function Fe(e, t) {
		let n = w.fetchers.get(t);
		P.has(t) && !(n && n.state === "loading" && re.has(t)) && Le(t), ae.delete(t), re.delete(t), ie.delete(t), F.delete(t), ee.delete(t), e.delete(t);
	}
	function Ie(e) {
		let t = (oe.get(e) || 0) - 1;
		t <= 0 ? (oe.delete(e), F.add(e)) : oe.set(e, t), L({ fetchers: new Map(w.fetchers) });
	}
	function Le(e, t) {
		let n = P.get(e);
		n && (n.abort(t), P.delete(e));
	}
	function Re(e, t) {
		for (let n of e) {
			let e = t.get(n);
			B(e, `Expected fetcher: ${n}`);
			let r = ar(e.data);
			t.set(n, r);
		}
	}
	function ze(e) {
		let t = [], n = !1;
		for (let r of ie) {
			let i = e.get(r);
			B(i, `Expected fetcher: ${r}`), i.state === "loading" && (ie.delete(r), t.push(r), n = !0);
		}
		return Re(t, e), n;
	}
	function Be(e, t) {
		let n = [];
		for (let [r, i] of re) if (i < e) {
			let e = t.get(r);
			B(e, `Expected fetcher: ${r}`), e.state === "loading" && (Le(r), re.delete(r), n.push(r));
		}
		return Re(n, t), n.length > 0;
	}
	function Ve(e, t) {
		let n = w.blockers.get(e) || Vt;
		return I.get(e) !== t && I.set(e, t), n;
	}
	function He(e) {
		w.blockers.delete(e), I.delete(e);
	}
	function Ue(e, t) {
		let n = w.blockers.get(e) || Vt;
		B(n.state === "unblocked" && t.state === "blocked" || n.state === "blocked" && t.state === "blocked" || n.state === "blocked" && t.state === "proceeding" || n.state === "blocked" && t.state === "unblocked" || n.state === "proceeding" && t.state === "unblocked", `Invalid blocker state transition: ${n.state} -> ${t.state}`);
		let r = new Map(w.blockers);
		r.set(e, t), L({ blockers: r });
	}
	function We({ currentLocation: e, nextLocation: t, historyAction: n }) {
		if (I.size === 0) return;
		I.size > 1 && V(!1, "A router only supports one blocker at a time");
		let r = Array.from(I.entries()), [i, a] = r[r.length - 1], o = w.blockers.get(i);
		if (!(o && o.state === "proceeding") && a({
			currentLocation: e,
			nextLocation: t,
			historyAction: n
		})) return i;
	}
	function Ge(e) {
		let t = q(404, { pathname: e }), n = s.activeRoutes, { matches: r, route: i } = Rn(n);
		return {
			notFoundMatches: r,
			route: i,
			error: t
		};
	}
	function Ke(e, t, n) {
		if (m = e, g = t, h = n || null, !_ && w.navigation === zt) {
			_ = !0;
			let e = Ye(w.location, w.matches);
			e != null && L({ restoreScrollPosition: e });
		}
		return () => {
			m = null, g = null, h = null;
		};
	}
	function qe(e, t) {
		return h && h(e, t.map((e) => Pe(e, w.loaderData))) || e.key;
	}
	function Je(e, t) {
		if (m && g) {
			let n = qe(e, t);
			m[n] = g();
		}
	}
	function Ye(e, t) {
		if (m) {
			let n = qe(e, t), r = m[n];
			if (typeof r == "number") return r;
		}
		return null;
	}
	function Xe(t, n, r) {
		if (e.patchRoutesOnNavigation) {
			let e = s.branches;
			if (!t) return {
				active: !0,
				matches: Ne(n, r, c, !0, e) || []
			};
			if (Object.keys(t[0].params).length > 0) return {
				active: !0,
				matches: Ne(n, r, c, !0, e)
			};
		}
		return {
			active: !1,
			matches: null
		};
	}
	async function Ze(t, n, r, i) {
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
						r.aborted || sn(e, n, s, t, a, !1);
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
			let u = s.branches, d = Ne(s.activeRoutes, n, c, !1, u), f = null;
			if (d && (Object.keys(d[0].params).length === 0 || (f = Ne(s.activeRoutes, n, c, !0, u), !(f && l.length < f.length && Qe(l, f.slice(0, l.length)))))) return {
				type: "success",
				matches: d
			};
			if (f ||= Ne(s.activeRoutes, n, c, !0, u), !f || Qe(l, f)) return {
				type: "success",
				matches: null
			};
			l = f;
		}
	}
	function Qe(e, t) {
		return e.length === t.length && e.every((e, n) => e.route.id === t[n].route.id);
	}
	function $e(e) {
		o = {}, s.setHmrRoutes(Ae(e, a, void 0, o));
	}
	function tt(e, t, n = !1) {
		sn(e, t, s, o, a, n), s.hasHMRRoutes || L({});
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
		initialize: le,
		subscribe: de,
		enableScrollRestoration: Ke,
		navigate: fe,
		fetch: ye,
		revalidate: pe,
		createHref: (t) => e.history.createHref(t),
		createURL: (t) => e.history.createURL(t),
		encodeLocation: (t) => e.history.encodeLocation(t),
		getFetcher: je,
		resetFetcher: Me,
		deleteFetcher: Ie,
		dispose: ue,
		getBlocker: Ve,
		deleteBlocker: He,
		patchRoutes: tt,
		_internalFetchControllers: P,
		_internalSetRoutes: $e,
		_internalSetStateDoNotUseOrYouWillBreakYourApp(e) {
			L(e);
		}
	}, e.instrumentations && (C = yt(C, e.instrumentations.map((e) => e.router).filter(Boolean))), C;
}
function Zt(e) {
	return e != null && ("formData" in e && e.formData != null || "body" in e && e.body !== void 0);
}
function Qt(e, t, n, r, i, a) {
	let o, s;
	if (i) {
		o = [];
		for (let e of t) if (o.push(e), e.route.id === i) {
			s = e;
			break;
		}
	} else o = t, s = t[t.length - 1];
	let c = ot(r || ".", at(o), G(e.pathname, n) || e.pathname, a === "path");
	if (r ?? (c.search = e.search, c.hash = e.hash), (r == null || r === "" || r === ".") && s) {
		let e = Qn(c.search);
		if (s.route.index && !e) c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index";
		else if (!s.route.index && e) {
			let e = new URLSearchParams(c.search), t = e.getAll("index");
			e.delete("index"), t.filter((e) => e).forEach((t) => e.append("index", t));
			let n = e.toString();
			c.search = n ? `?${n}` : "";
		}
	}
	return n !== "/" && (c.pathname = $e({
		basename: n,
		pathname: c.pathname
	})), H(c);
}
function $t(e, t, n) {
	if (!n || !Zt(n)) return { path: t };
	if (n.formMethod && !Zn(n.formMethod)) return {
		path: t,
		error: q(405, { method: n.formMethod })
	};
	let r = () => ({
		path: t,
		error: q(400, { type: "invalid-body" })
	}), i = (n.formMethod || "get").toUpperCase(), a = Bn(t);
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
	B(typeof FormData == "function", "FormData is not available in this environment");
	let o, s;
	if (n.formData) o = jn(n.formData), s = n.formData;
	else if (n.body instanceof FormData) o = jn(n.body), s = n.body;
	else if (n.body instanceof URLSearchParams) o = n.body, s = Mn(o);
	else if (n.body == null) o = new URLSearchParams(), s = new FormData();
	else try {
		o = new URLSearchParams(n.body), s = Mn(o);
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
	let l = U(t);
	return e && l.search && Qn(l.search) && o.append("index", ""), l.search = `?${o}`, {
		path: H(l),
		submission: c
	};
}
function en(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x) {
	let S = b ? J(b[1]) ? b[1].error : b[1].data : void 0, C = i.createURL(a.location), w = i.createURL(c), T;
	if (u && a.errors) {
		let e = Object.keys(a.errors)[0];
		T = o.findIndex((t) => t.route.id === e);
	} else if (b && J(b[1])) {
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
	}, k = mt(o), A = o.map((i, o) => {
		let { route: s } = i, f = null;
		if (T != null && o > T) f = !1;
		else if (s.lazy) f = !0;
		else if (!tn(s)) f = !1;
		else if (u) {
			let { shouldLoad: e } = nn(s, a.loaderData, a.errors);
			f = e;
		} else rn(a.loaderData, a.matches[o], i) && (f = !0);
		if (f !== null) return yn(n, r, e, c, k, i, l, t, f);
		let p = !1;
		typeof x == "boolean" ? p = x : D ? p = !1 : d || C.pathname + C.search === w.pathname + w.search ? p = !0 : C.search === w.search ? an(a.matches[o], i) && (p = !0) : p = !0;
		let m = {
			...O,
			defaultShouldRevalidate: p
		}, h = on(i, m);
		return yn(n, r, e, c, k, i, l, t, h, m, x);
	}), j = [];
	return m.forEach((e, s) => {
		if (u || !o.some((t) => t.route.id === e.routeId) || p.has(s)) return;
		let c = a.fetchers.get(s), m = c && c.state !== "idle" && c.data === void 0, b = Ne(g, e.path, _ ?? "/", !1, y);
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
		let S = $n(b, e.path), C = new AbortController(), w = kn(i, e.path, C.signal), T = null;
		if (f.has(s)) f.delete(s), T = bn(n, r, w, e.path, b, S, l, t);
		else if (m) d && (T = bn(n, r, w, e.path, b, S, l, t));
		else {
			let i;
			i = typeof x == "boolean" ? x : !D && d;
			let a = {
				...O,
				defaultShouldRevalidate: i
			};
			on(S, a) && (T = bn(n, r, w, e.path, b, S, l, t, a));
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
function tn(e) {
	return e.loader != null || e.middleware != null && e.middleware.length > 0;
}
function nn(e, t, n) {
	if (e.lazy) return {
		shouldLoad: !0,
		renderFallback: !0
	};
	if (!tn(e)) return {
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
function rn(e, t, n) {
	let r = !t || n.route.id !== t.route.id, i = !e.hasOwnProperty(n.route.id);
	return r || i;
}
function an(e, t) {
	let n = e.route.path;
	return e.pathname !== t.pathname || n != null && n.endsWith("*") && e.params["*"] !== t.params["*"];
}
function on(e, t) {
	if (e.route.shouldRevalidate) {
		let n = e.route.shouldRevalidate(t);
		if (typeof n == "boolean") return n;
	}
	return t.defaultShouldRevalidate;
}
function sn(e, t, n, r, i, a) {
	let o;
	if (e) {
		let t = r[e];
		B(t, `No route found to patch children into: routeId = ${e}`), t.children ||= [], o = t.children;
	} else o = n.activeRoutes;
	let s = [], c = [];
	if (t.forEach((e) => {
		let t = o.find((t) => cn(e, t));
		t ? c.push({
			existingRoute: t,
			newRoute: e
		}) : s.push(e);
	}), s.length > 0) {
		let t = Ae(s, i, [
			e || "_",
			"patch",
			String(o?.length || "0")
		], r);
		o.push(...t);
	}
	if (a && c.length > 0) for (let e = 0; e < c.length; e++) {
		let { existingRoute: t, newRoute: n } = c[e], r = t, [a] = Ae([n], i, [], {}, !0);
		Object.assign(r, {
			element: a.element ? a.element : r.element,
			errorElement: a.errorElement ? a.errorElement : r.errorElement,
			hydrateFallbackElement: a.hydrateFallbackElement ? a.hydrateFallbackElement : r.hydrateFallbackElement
		});
	}
	n.hasHMRRoutes || n.setRoutes([...n.activeRoutes]);
}
function cn(e, t) {
	return "id" in e && "id" in t && e.id === t.id ? !0 : e.index !== t.index || e.path !== t.path || e.caseSensitive !== t.caseSensitive ? !1 : (!e.children || e.children.length === 0) && (!t.children || t.children.length === 0) ? !0 : e.children?.every((e, n) => t.children?.some((t) => cn(e, t))) ?? !1;
}
var ln = /* @__PURE__ */ new WeakMap(), un = ({ key: e, route: t, manifest: n, mapRouteProperties: r }) => {
	let i = n[t.id];
	if (B(i, "No route found in manifest"), !i.lazy || typeof i.lazy != "object") return;
	let a = i.lazy[e];
	if (!a) return;
	let o = ln.get(i);
	o || (o = {}, ln.set(i, o));
	let s = o[e];
	if (s) return s;
	let c = (async () => {
		let t = Ee(e), n = i[e] !== void 0 && e !== "hasErrorBoundary";
		if (t) V(!t, "Route property " + e + " is not a supported lazy route property. This property will be ignored."), o[e] = Promise.resolve();
		else if (n) V(!1, `Route "${i.id}" has a static property "${e}" defined. The lazy property will be ignored.`);
		else {
			let t = await a();
			t != null && (Object.assign(i, { [e]: t }), Object.assign(i, r(i)));
		}
		typeof i.lazy == "object" && (i.lazy[e] = void 0, Object.values(i.lazy).every((e) => e === void 0) && (i.lazy = void 0));
	})();
	return o[e] = c, c;
}, dn = /* @__PURE__ */ new WeakMap();
function fn(e, t, n, r, i) {
	let a = n[e.id];
	if (B(a, "No route found in manifest"), !e.lazy) return {
		lazyRoutePromise: void 0,
		lazyHandlerPromise: void 0
	};
	if (typeof e.lazy == "function") {
		let t = dn.get(a);
		if (t) return {
			lazyRoutePromise: t,
			lazyHandlerPromise: t
		};
		let n = (async () => {
			B(typeof e.lazy == "function", "No lazy route function found");
			let t = await e.lazy(), n = {};
			for (let e in t) {
				let r = t[e];
				if (r === void 0) continue;
				let i = Oe(e), o = a[e] !== void 0 && e !== "hasErrorBoundary";
				i ? V(!i, "Route property " + e + " is not a supported property to be returned from a lazy route function. This property will be ignored.") : o ? V(!o, `Route "${a.id}" has a static property "${e}" defined but its lazy function is also returning a value for this property. The lazy route property "${e}" will be ignored.`) : n[e] = r;
			}
			Object.assign(a, n), Object.assign(a, {
				...r(a),
				lazy: void 0
			});
		})();
		return dn.set(a, n), n.catch(() => {}), {
			lazyRoutePromise: n,
			lazyHandlerPromise: n
		};
	}
	let o = Object.keys(e.lazy), s = [], c;
	for (let a of o) {
		if (i && i.includes(a)) continue;
		let o = un({
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
async function pn(e) {
	let t = e.matches.filter((e) => e.shouldLoad), n = {};
	return (await Promise.all(t.map((e) => e.resolve()))).forEach((e, r) => {
		n[t[r].route.id] = e;
	}), n;
}
async function mn(e) {
	return e.matches.some((e) => e.route.middleware) ? hn(e, () => pn(e)) : pn(e);
}
function hn(e, t) {
	return gn(e, t, (e) => {
		if (Xn(e)) throw e;
		return e;
	}, Un, n);
	function n(t, n, r) {
		if (r) return Promise.resolve(Object.assign(r.value, { [n]: {
			type: "error",
			result: t
		} }));
		{
			let { matches: r } = e, i = Ln(r, r[Math.min(Math.max(r.findIndex((e) => e.route.id === n), 0), Math.max(r.findIndex((e) => e.shouldCallHandler()), 0))].route.id).route.id;
			return Promise.resolve({ [i]: {
				type: "error",
				result: t
			} });
		}
	}
}
async function gn(e, t, n, r, i) {
	let { matches: a, ...o } = e;
	return await _n(o, a.flatMap((e) => e.route.middleware ? e.route.middleware.map((t) => [e.route.id, t]) : []), t, n, r, i);
}
async function _n(e, t, n, r, i, a, o = 0) {
	let { request: s } = e;
	if (s.signal.aborted) throw s.signal.reason ?? /* @__PURE__ */ Error(`Request aborted: ${s.method} ${s.url}`);
	let c = t[o];
	if (!c) return await n();
	let [l, u] = c, d, f = async () => {
		if (d) throw Error("You may only call `next()` once per middleware");
		try {
			return d = { value: await _n(e, t, n, r, i, a, o + 1) }, d.value;
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
function vn(e, t, n, r, i) {
	let a = un({
		key: "middleware",
		route: r.route,
		manifest: t,
		mapRouteProperties: e
	}), o = fn(r.route, Y(n.method) ? "action" : "loader", t, e, i);
	return {
		middleware: a,
		route: o.lazyRoutePromise,
		handler: o.lazyHandlerPromise
	};
}
function yn(e, t, n, r, i, a, o, s, c, l = null, u) {
	let d = !1, f = vn(e, t, n, a, o);
	return {
		...a,
		_lazyPromises: f,
		shouldLoad: c,
		shouldRevalidateArgs: l,
		shouldCallHandler(e) {
			return d = !0, l ? typeof u == "boolean" ? on(a, {
				...l,
				defaultShouldRevalidate: u
			}) : typeof e == "boolean" ? on(a, {
				...l,
				defaultShouldRevalidate: e
			}) : on(a, l) : c;
		},
		resolve(e) {
			let { lazy: t, loader: o, middleware: l } = a.route, u = d || c || e && !Y(n.method) && (t || o), p = l && l.length > 0 && !o && !t;
			return u && (Y(n.method) || !p) ? Sn({
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
function bn(e, t, n, r, i, a, o, s, c = null) {
	return i.map((l) => l.route.id === a.route.id ? yn(e, t, n, r, mt(i), l, o, s, !0, c) : {
		...l,
		shouldLoad: !1,
		shouldRevalidateArgs: c,
		shouldCallHandler: () => !1,
		_lazyPromises: vn(e, t, n, l, o),
		resolve: () => Promise.resolve({
			type: "data",
			result: void 0
		})
	});
}
async function xn(e, t, n, r, i, a, o) {
	r.some((e) => e._lazyPromises?.middleware) && await Promise.all(r.map((e) => e._lazyPromises?.middleware));
	let s = {
		request: t,
		url: An(t, n),
		pattern: mt(r),
		params: r[0].params,
		context: a,
		matches: r
	}, c = o ? () => {
		throw Error("You cannot call `runClientMiddleware()` from a static handler `dataStrategy`. Middleware is run outside of `dataStrategy` during SSR in order to bubble up the Response.  You can enable middleware via the `respond` API in `query`/`queryRoute`");
	} : (e) => {
		let t = s;
		return hn(t, () => e({
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
async function Sn({ request: e, path: t, pattern: n, match: r, lazyHandlerPromise: i, lazyRoutePromise: a, handlerOverride: o, scopedContext: s }) {
	let c, l, u = Y(e.method), d = u ? "action" : "loader", f = (i) => {
		let a, c = new Promise((e, t) => a = t);
		l = () => a(), e.signal.addEventListener("abort", l);
		let u = (a) => typeof i == "function" ? i({
			request: e,
			url: An(e, t),
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
					throw q(405, {
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
			throw q(404, { pathname: t.pathname + t.search });
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
async function Cn(e) {
	let t = e.headers.get("Content-Type");
	return t && /\bapplication\/json\b/.test(t) ? e.body == null ? null : e.json() : e.text();
}
async function wn(e) {
	let { result: t, type: n } = e;
	if (Jn(t)) {
		let e;
		try {
			e = await Cn(t);
		} catch (e) {
			return {
				type: "error",
				error: e
			};
		}
		return n === "error" ? {
			type: "error",
			error: new ft(t.status, t.statusText, e),
			statusCode: t.status,
			headers: t.headers
		} : {
			type: "data",
			data: e,
			statusCode: t.status,
			headers: t.headers
		};
	}
	return n === "error" ? qn(t) ? t.data instanceof Error ? {
		type: "error",
		error: t.data,
		statusCode: t.init?.status,
		headers: t.init?.headers ? new Headers(t.init.headers) : void 0
	} : {
		type: "error",
		error: Hn(t),
		statusCode: pt(t) ? t.status : void 0,
		headers: t.init?.headers ? new Headers(t.init.headers) : void 0
	} : {
		type: "error",
		error: t,
		statusCode: pt(t) ? t.status : void 0
	} : qn(t) ? {
		type: "data",
		data: t.data,
		statusCode: t.init?.status,
		headers: t.init?.headers ? new Headers(t.init.headers) : void 0
	} : {
		type: "data",
		data: t
	};
}
function Tn(e, t, n, r, i) {
	let a = e.headers.get("Location");
	if (B(a, "Redirects returned/thrown from loaders/actions must have a Location header"), !et(a)) {
		let o = r.slice(0, r.findIndex((e) => e.route.id === n) + 1);
		a = Qt(new URL(t.url), o, i, a), e.headers.set("Location", a);
	}
	return e;
}
var En = [
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
function Dn(e) {
	try {
		return En.includes(new URL(e).protocol);
	} catch {
		return !1;
	}
}
function On(e, t, n, r) {
	if (et(e)) {
		let r = e, i = _e.test(r) ? new URL(ve(r, t.protocol)) : new URL(r);
		if (Dn(i.toString())) throw Error("Invalid redirect location");
		let a = G(i.pathname, n) != null;
		if (i.origin === t.origin && a) return st(i.pathname) + i.search + i.hash;
	}
	try {
		if (Dn(r.createURL(e).toString())) throw Error("Invalid redirect location");
	} catch {}
	return e;
}
function kn(e, t, n, r) {
	let i = e.createURL(Bn(t)).toString(), a = { signal: n };
	if (r && Y(r.formMethod)) {
		let { formMethod: e, formEncType: t } = r;
		a.method = e.toUpperCase(), t === "application/json" ? (a.headers = new Headers({ "Content-Type": t }), a.body = JSON.stringify(r.json)) : a.body = t === "text/plain" ? r.text : t === "application/x-www-form-urlencoded" && r.formData ? jn(r.formData) : r.formData;
	}
	return new Request(i, a);
}
function An(e, t) {
	let n = new URL(e.url), r = typeof t == "string" ? U(t) : t;
	if (n.pathname = r.pathname || "/", r.search) {
		let e = new URLSearchParams(r.search), t = e.getAll("index");
		e.delete("index");
		for (let n of t.filter(Boolean)) e.append("index", n);
		n.search = e.size ? `?${e.toString()}` : "";
	} else n.search = "";
	return n.hash = r.hash || "", n;
}
function jn(e) {
	let t = new URLSearchParams();
	for (let [n, r] of e.entries()) t.append(n, typeof r == "string" ? r : r.name);
	return t;
}
function Mn(e) {
	let t = new FormData();
	for (let [n, r] of e.entries()) t.append(n, r);
	return t;
}
function Nn(e, t, n, r = !1, i = !1) {
	let a = {}, o = null, s, c = !1, l = {}, u = n && J(n[1]) ? n[1].error : void 0;
	return e.forEach((n) => {
		if (!(n.route.id in t)) return;
		let d = n.route.id, f = t[d];
		if (B(!Kn(f), "Cannot handle redirect results in processLoaderData"), J(f)) {
			let t = f.error;
			if (u !== void 0 && (t = u, u = void 0), o ||= {}, i) o[d] = t;
			else {
				let n = Ln(e, d);
				o[n.route.id] ?? (o[n.route.id] = t);
			}
			r || (a[d] = Wt), c || (c = !0, s = pt(f.error) ? f.error.status : 500), f.headers && (l[d] = f.headers);
		} else a[d] = f.data, f.statusCode && f.statusCode !== 200 && !c && (s = f.statusCode), f.headers && (l[d] = f.headers);
	}), u !== void 0 && n && (o = { [n[0]]: u }, n[2] && (a[n[2]] = void 0)), {
		loaderData: a,
		errors: o,
		statusCode: s || 200,
		loaderHeaders: l
	};
}
function Pn(e, t, n, r, i, a, o) {
	let { loaderData: s, errors: c } = Nn(t, n, r);
	return i.filter((e) => !e.matches || e.matches.some((e) => e.shouldLoad)).forEach((t) => {
		let { key: n, match: r, controller: i } = t;
		if (i && i.signal.aborted) return;
		let s = a[n];
		if (B(s, "Did not find corresponding fetcher result"), J(s)) {
			let t = Ln(e.matches, r?.route.id);
			c && c[t.route.id] || (c = {
				...c,
				[t.route.id]: s.error
			}), o.delete(n);
		} else if (Kn(s)) B(!1, "Unhandled fetcher revalidation redirect");
		else {
			let e = ar(s.data);
			o.set(n, e);
		}
	}), {
		loaderData: s,
		errors: c
	};
}
function Fn(e, t, n, r) {
	let i = Object.entries(t).filter(([, e]) => e !== Wt).reduce((e, [t, n]) => (e[t] = n, e), {});
	for (let a of n) {
		let n = a.route.id;
		if (!t.hasOwnProperty(n) && e.hasOwnProperty(n) && a.route.loader && (i[n] = e[n]), r && r.hasOwnProperty(n)) break;
	}
	return i;
}
function In(e) {
	return e ? J(e[1]) ? { actionData: {} } : { actionData: { [e[0]]: e[1].data } } : {};
}
function Ln(e, t) {
	return (t ? e.slice(0, e.findIndex((e) => e.route.id === t) + 1) : [...e]).reverse().find((e) => e.route.hasErrorBoundary === !0) || e[0];
}
function Rn(e) {
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
function q(e, { pathname: t, routeId: n, method: r, type: i, message: a } = {}) {
	let o = "Unknown Server Error", s = "Unknown @remix-run/router error";
	return e === 400 ? (o = "Bad Request", r && t && n ? s = `You made a ${r} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.` : i === "invalid-body" && (s = "Unable to encode submission body")) : e === 403 ? (o = "Forbidden", s = `Route "${n}" does not match URL "${t}"`) : e === 404 ? (o = "Not Found", s = `No route matches URL "${t}"`) : e === 405 && (o = "Method Not Allowed", r && t && n ? s = `You made a ${r.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.` : r && (s = `Invalid request method "${r.toUpperCase()}"`)), new ft(e || 500, o, Error(s), !0);
}
function zn(e) {
	let t = Object.entries(e);
	for (let e = t.length - 1; e >= 0; e--) {
		let [n, r] = t[e];
		if (Kn(r)) return {
			key: n,
			result: r
		};
	}
}
function Bn(e) {
	return H({
		...typeof e == "string" ? U(e) : e,
		hash: ""
	});
}
function Vn(e, t) {
	return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash || t.hash !== "";
}
function Hn(e) {
	return new ft(e.init?.status ?? 500, e.init?.statusText ?? "Internal Server Error", e.data);
}
function Un(e) {
	return typeof e == "object" && !!e && Object.entries(e).every(([e, t]) => typeof e == "string" && Wn(t));
}
function Wn(e) {
	return typeof e == "object" && !!e && "type" in e && "result" in e && (e.type === "data" || e.type === "error");
}
function Gn(e) {
	return Jn(e.result) && Lt.has(e.result.status);
}
function J(e) {
	return e.type === "error";
}
function Kn(e) {
	return (e && e.type) === "redirect";
}
function qn(e) {
	return typeof e == "object" && !!e && "type" in e && "data" in e && "init" in e && e.type === "DataWithResponseInit";
}
function Jn(e) {
	return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && e.body !== void 0;
}
function Yn(e) {
	return Lt.has(e);
}
function Xn(e) {
	return Jn(e) && Yn(e.status) && e.headers.has("Location");
}
function Zn(e) {
	return It.has(e.toUpperCase());
}
function Y(e) {
	return Pt.has(e.toUpperCase());
}
function Qn(e) {
	return new URLSearchParams(e).getAll("index").some((e) => e === "");
}
function $n(e, t) {
	let n = typeof t == "string" ? U(t).search : t.search;
	if (e[e.length - 1].route.index && Qn(n || "")) return e[e.length - 1];
	let r = it(e);
	return r[r.length - 1];
}
function er(e) {
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
function tr(e, t, n, r) {
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
function nr(e, t, n, r) {
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
function rr(e, t) {
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
function ir(e, t) {
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
function ar(e) {
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
function or(e, t) {
	try {
		let n = e.sessionStorage.getItem(Ut);
		if (n) {
			let e = JSON.parse(n);
			for (let [n, r] of Object.entries(e || {})) r && Array.isArray(r) && t.set(n, new Set(r || []));
		}
	} catch {}
}
function sr(e, t) {
	if (t.size > 0) {
		let n = {};
		for (let [e, r] of t) n[e] = [...r];
		try {
			e.sessionStorage.setItem(Ut, JSON.stringify(n));
		} catch (e) {
			V(!1, `Failed to save applied view transitions in sessionStorage (${e}).`);
		}
	}
}
function cr() {
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
var lr = R.createContext(null);
lr.displayName = "DataRouter";
var ur = R.createContext(null);
ur.displayName = "DataRouterState";
var dr = R.createContext(!1);
function fr() {
	return R.useContext(dr);
}
var pr = R.createContext({ isTransitioning: !1 });
pr.displayName = "ViewTransition";
var mr = R.createContext(/* @__PURE__ */ new Map());
mr.displayName = "Fetchers";
var hr = R.createContext(null);
hr.displayName = "Await";
var X = R.createContext(null);
X.displayName = "Navigation";
var gr = R.createContext(null);
gr.displayName = "Location";
var _r = R.createContext({
	outlet: null,
	matches: [],
	isDataRoute: !1
});
_r.displayName = "Route";
var vr = R.createContext(null);
vr.displayName = "RouteError";
var yr = "REACT_ROUTER_ERROR", br = "REDIRECT", xr = "ROUTE_ERROR_RESPONSE";
function Sr(e) {
	if (e.startsWith(`${yr}:${br}:{`)) try {
		let t = JSON.parse(e.slice(28));
		if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.location == "string" && typeof t.reloadDocument == "boolean" && typeof t.replace == "boolean") return t;
	} catch {}
}
function Cr(e) {
	if (e.startsWith(`${yr}:${xr}:{`)) try {
		let t = JSON.parse(e.slice(40));
		if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string") return new ft(t.status, t.statusText, t.data);
	} catch {}
}
function wr(e, { relative: t } = {}) {
	B(Tr(), "useHref() may be used only in the context of a <Router> component.");
	let { basename: n, navigator: r } = R.useContext(X), { hash: i, pathname: a, search: o } = Ar(e, { relative: t }), s = a;
	return n !== "/" && (s = a === "/" ? n : K([n, a])), r.createHref({
		pathname: s,
		search: o,
		hash: i
	});
}
function Tr() {
	return R.useContext(gr) != null;
}
function Z() {
	return B(Tr(), "useLocation() may be used only in the context of a <Router> component."), R.useContext(gr).location;
}
var Er = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Dr(e) {
	R.useContext(X).static || R.useLayoutEffect(e);
}
function Or() {
	let { isDataRoute: e } = R.useContext(_r);
	return e ? Yr() : kr();
}
function kr() {
	B(Tr(), "useNavigate() may be used only in the context of a <Router> component.");
	let e = R.useContext(lr), { basename: t, navigator: n } = R.useContext(X), { matches: r } = R.useContext(_r), { pathname: i } = Z(), a = JSON.stringify(at(r)), o = R.useRef(!1);
	return Dr(() => {
		o.current = !0;
	}), R.useCallback((r, s = {}) => {
		if (V(o.current, Er), !o.current) return;
		if (typeof r == "number") {
			n.go(r);
			return;
		}
		let c = ot(r, JSON.parse(a), i, s.relative === "path");
		e == null && t !== "/" && (c.pathname = c.pathname === "/" ? t : K([t, c.pathname])), Mt(typeof r == "string" ? r : H(r), n.createHref(c), kt(n), "reject"), (s.replace ? n.replace : n.push)(c, s.state, s);
	}, [
		t,
		n,
		a,
		i,
		e
	]);
}
R.createContext(null);
function Ar(e, { relative: t } = {}) {
	let { matches: n } = R.useContext(_r), { pathname: r } = Z(), i = JSON.stringify(at(n));
	return R.useMemo(() => ot(e, JSON.parse(i), r, t === "path"), [
		e,
		i,
		r,
		t
	]);
}
function jr(e, t) {
	return Mr(e, t);
}
function Mr(e, t, n) {
	B(Tr(), "useRoutes() may be used only in the context of a <Router> component.");
	let { navigator: r } = R.useContext(X), { matches: i } = R.useContext(_r), a = i[i.length - 1], o = a ? a.params : {}, s = a ? a.pathname : "/", c = a ? a.pathnameBase : "/", l = a && a.route;
	{
		let e = l && l.path || "";
		Zr(s, !l || e.endsWith("*") || e.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e === "/" ? "*" : `${e}/*`}">.`);
	}
	let u = Z(), d;
	if (t) {
		let e = typeof t == "string" ? U(t) : t;
		B(c === "/" || e.pathname?.startsWith(c), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`), d = e;
	} else d = u;
	let f = d.pathname || "/", p = f;
	if (c !== "/") {
		let e = c.replace(/^\//, "").split("/");
		p = "/" + f.replace(/^\//, "").split("/").slice(e.length).join("/");
	}
	let m = n && n.state.matches.length ? n.state.matches.map((e) => Object.assign(e, { route: n.manifest[e.route.id] || e.route })) : Me(e, { pathname: p });
	V(l || m != null, `No routes matched location "${d.pathname}${d.search}${d.hash}" `), V(m == null || m[m.length - 1].route.element !== void 0 || m[m.length - 1].route.Component !== void 0 || m[m.length - 1].route.lazy !== void 0, `Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
	let h = zr(m && m.map((e) => Object.assign({}, e, {
		params: Object.assign({}, o, e.params),
		pathname: K([c, r.encodeLocation ? r.encodeLocation(e.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : e.pathname]),
		pathnameBase: e.pathnameBase === "/" ? c : K([c, r.encodeLocation ? r.encodeLocation(e.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : e.pathnameBase])
	})), i, n);
	return t && h ? /* @__PURE__ */ R.createElement(gr.Provider, { value: {
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
function Nr() {
	let e = Kr(), t = pt(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, r = "rgba(200,200,200, 0.5)", i = {
		padding: "0.5rem",
		backgroundColor: r
	}, a = {
		padding: "2px 4px",
		backgroundColor: r
	}, o = null;
	return console.error("Error handled by React Router default ErrorBoundary:", e), o = /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ R.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ R.createElement("code", { style: a }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ R.createElement("code", { style: a }, "errorElement"), " prop on your route.")), /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ R.createElement("h3", { style: { fontStyle: "italic" } }, t), n ? /* @__PURE__ */ R.createElement("pre", { style: i }, n) : null, o);
}
var Pr = /* @__PURE__ */ R.createElement(Nr, null), Fr = class extends R.Component {
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
			let t = Cr(e.digest);
			t && (e = t);
		}
		let t = e === void 0 ? this.props.children : /* @__PURE__ */ R.createElement(_r.Provider, { value: this.props.routeContext }, /* @__PURE__ */ R.createElement(vr.Provider, {
			value: e,
			children: this.props.component
		}));
		return this.context ? /* @__PURE__ */ R.createElement(Lr, { error: e }, t) : t;
	}
};
Fr.contextType = dr;
var Ir = /* @__PURE__ */ new WeakMap();
function Lr({ children: e, error: t }) {
	let { basename: n, navigator: r } = R.useContext(X);
	if (typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
		let e = Sr(t.digest);
		if (e) {
			let i = Ir.get(t);
			if (i) throw i;
			let a = gt(e.location, n), o = a.absoluteURL || a.to;
			if (Mt(e.location, o, kt(r), "allow-explicit"), Dn(o)) throw Error("Invalid redirect location");
			if (ht && !Ir.get(t)) {
				if (a.isExternal || e.reloadDocument) window.location.href = o;
				else {
					let n = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(a.to, { replace: e.replace }));
					throw Ir.set(t, n), n;
				}
			}
			return /* @__PURE__ */ R.createElement("meta", {
				httpEquiv: "refresh",
				content: `0;url=${o}`
			});
		}
	}
	return e;
}
function Rr({ routeContext: e, match: t, children: n }) {
	let r = R.useContext(lr);
	return r && r.static && r.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = t.route.id), /* @__PURE__ */ R.createElement(_r.Provider, { value: e }, n);
}
function zr(e, t = [], n) {
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
		B(e >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`), i = i.slice(0, Math.min(i.length, e + 1));
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
			pattern: mt(r.matches),
			errorInfo: t
		});
	} : void 0;
	return i.reduceRight((e, n, c) => {
		let u, d = !1, f = null, p = null;
		r && (u = a && n.route.id ? a[n.route.id] : void 0, f = n.route.errorElement || Pr, o && (s < 0 && c === 0 ? (Zr("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), d = !0, p = null) : s === c && (d = !0, p = n.route.hydrateFallbackElement || null)));
		let m = t.concat(i.slice(0, c + 1)), h = () => {
			let t;
			return t = u ? f : d ? p : n.route.Component ? /* @__PURE__ */ R.createElement(n.route.Component, null) : n.route.element ? n.route.element : e, /* @__PURE__ */ R.createElement(Rr, {
				match: n,
				routeContext: {
					outlet: e,
					matches: m,
					isDataRoute: r != null
				},
				children: t
			});
		};
		return r && (n.route.ErrorBoundary || n.route.errorElement || c === 0) ? /* @__PURE__ */ R.createElement(Fr, {
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
function Br(e) {
	return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Vr(e) {
	let t = R.useContext(lr);
	return B(t, Br(e)), t;
}
function Hr(e) {
	let t = R.useContext(ur);
	return B(t, Br(e)), t;
}
function Ur(e) {
	let t = R.useContext(_r);
	return B(t, Br(e)), t;
}
function Wr(e) {
	let t = Ur(e), n = t.matches[t.matches.length - 1];
	return B(n.route.id, `${e} can only be used on routes that contain a unique "id"`), n.route.id;
}
function Gr() {
	return Wr("useRouteId");
}
function Kr() {
	let e = R.useContext(vr), t = Hr("useRouteError"), n = Wr("useRouteError");
	return e === void 0 ? t.errors?.[n] : e;
}
var qr = 0;
function Jr(e) {
	let { router: t, basename: n } = Vr("useBlocker"), r = Hr("useBlocker"), [i, a] = R.useState(""), o = R.useCallback((t) => {
		if (typeof e != "function") return !!e;
		if (n === "/") return e(t);
		let { currentLocation: r, nextLocation: i, historyAction: a } = t;
		return e({
			currentLocation: {
				...r,
				pathname: G(r.pathname, n) || r.pathname
			},
			nextLocation: {
				...i,
				pathname: G(i.pathname, n) || i.pathname
			},
			historyAction: a
		});
	}, [n, e]);
	return R.useEffect(() => {
		let e = String(++qr);
		return a(e), () => t.deleteBlocker(e);
	}, [t]), R.useEffect(() => {
		i !== "" && t.getBlocker(i, o);
	}, [
		t,
		i,
		o
	]), i && r.blockers.has(i) ? r.blockers.get(i) : Vt;
}
function Yr() {
	let { router: e } = Vr("useNavigate"), t = Wr("useNavigate"), n = R.useRef(!1);
	return Dr(() => {
		n.current = !0;
	}), R.useCallback(async (r, i = {}) => {
		V(n.current, Er), n.current && (typeof r == "number" ? await e.navigate(r) : await e.navigate(r, {
			fromRouteId: t,
			...i
		}));
	}, [e, t]);
}
var Xr = {};
function Zr(e, t, n) {
	!t && !Xr[e] && (Xr[e] = !0, V(!1, n));
}
var Qr = {};
function $r(e, t) {
	!e && !Qr[t] && (Qr[t] = !0, console.warn(t));
}
var ei = R.useOptimistic, ti = () => void 0;
function ni(e) {
	return ei ? ei(e) : [e, ti];
}
function ri(e) {
	let t = { hasErrorBoundary: e.hasErrorBoundary || e.ErrorBoundary != null || e.errorElement != null };
	return e.Component && (e.element && V(!1, "You should not include both `Component` and `element` on your route - `Component` will be used."), Object.assign(t, {
		element: R.createElement(e.Component),
		Component: void 0
	})), e.HydrateFallback && (e.hydrateFallbackElement && V(!1, "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."), Object.assign(t, {
		hydrateFallbackElement: R.createElement(e.HydrateFallback),
		HydrateFallback: void 0
	})), e.ErrorBoundary && (e.errorElement && V(!1, "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."), Object.assign(t, {
		errorElement: R.createElement(e.ErrorBoundary),
		ErrorBoundary: void 0
	})), t;
}
var ii = ["HydrateFallback", "hydrateFallbackElement"];
function ai(e, t) {
	return Xt({
		basename: t?.basename,
		getContext: t?.getContext,
		future: t?.future,
		history: be({
			initialEntries: t?.initialEntries,
			initialIndex: t?.initialIndex
		}),
		hydrationData: t?.hydrationData,
		routes: e,
		hydrationRouteProperties: ii,
		mapRouteProperties: ri,
		dataStrategy: t?.dataStrategy,
		patchRoutesOnNavigation: t?.patchRoutesOnNavigation,
		instrumentations: t?.instrumentations
	}).initialize();
}
var oi = class {
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
function si({ router: e, flushSync: t, onError: n, useTransitions: r }) {
	r = fr() || r;
	let [i, a] = R.useState(e.state), [o, s] = ni(i), [c, l] = R.useState(), [u, d] = R.useState({ isTransitioning: !1 }), [f, p] = R.useState(), [m, h] = R.useState(), [g, _] = R.useState(), v = R.useRef(/* @__PURE__ */ new Map()), y = R.useCallback((i, { deletedFetchers: o, newErrors: c, flushSync: u, viewTransitionOpts: g }) => {
		c && n && Object.values(c).forEach((e) => n(e, {
			location: i.location,
			params: i.matches[0]?.params ?? {},
			pattern: mt(i.matches)
		})), i.fetchers.forEach((e, t) => {
			e.data !== void 0 && v.current.set(t, e.data);
		}), o.forEach((e) => v.current.delete(e)), $r(u === !1 || t != null, "You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from \"react-router/dom\"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.");
		let y = e.window != null && e.window.document != null && typeof e.window.document.startViewTransition == "function";
		if ($r(g == null || y, "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."), !g || !y) {
			t && u ? t(() => a(i)) : r === !1 ? a(i) : R.startTransition(() => {
				r === !0 && s((e) => ci(e, i)), a(i);
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
	R.useLayoutEffect(() => e.subscribe(y), [e, y]), R.useEffect(() => {
		u.isTransitioning && !u.flushSync && p(new oi());
	}, [u]), R.useEffect(() => {
		if (f && c && e.window) {
			let t = c, n = f.promise, i = e.window.document.startViewTransition(async () => {
				r === !1 ? a(t) : R.startTransition(() => {
					r === !0 && s((e) => ci(e, t)), a(t);
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
	]), R.useEffect(() => {
		f && c && o.location.key === c.location.key && f.resolve();
	}, [
		f,
		m,
		o.location,
		c
	]), R.useEffect(() => {
		!u.isTransitioning && g && (l(g.state), d({
			isTransitioning: !0,
			flushSync: !1,
			currentLocation: g.currentLocation,
			nextLocation: g.nextLocation
		}), _(void 0));
	}, [u.isTransitioning, g]);
	let b = R.useMemo(() => ({
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
	}), [e]), x = e.basename || "/", S = R.useMemo(() => ({
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
	return /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(lr.Provider, { value: S }, /* @__PURE__ */ R.createElement(ur.Provider, { value: o }, /* @__PURE__ */ R.createElement(mr.Provider, { value: v.current }, /* @__PURE__ */ R.createElement(pr.Provider, { value: u }, /* @__PURE__ */ R.createElement(pi, {
		basename: x,
		location: o.location,
		navigationType: o.historyAction,
		navigator: b,
		useTransitions: r
	}, /* @__PURE__ */ R.createElement(li, {
		routes: e.routes,
		manifest: e.manifest,
		future: e.future,
		state: o,
		isStatic: !1,
		onError: n
	})))))), null);
}
function ci(e, t) {
	return {
		...e,
		navigation: t.navigation.state === "idle" ? e.navigation : t.navigation,
		revalidation: t.revalidation === "idle" ? e.revalidation : t.revalidation,
		actionData: t.navigation.state === "submitting" ? e.actionData : t.actionData,
		fetchers: t.fetchers
	};
}
var li = R.memo(ui);
function ui({ routes: e, manifest: t, future: n, state: r, isStatic: i, onError: a }) {
	return Mr(e, void 0, {
		manifest: t,
		state: r,
		isStatic: i,
		onError: a,
		future: n
	});
}
function di({ to: e, replace: t, state: n, relative: r }) {
	B(Tr(), "<Navigate> may be used only in the context of a <Router> component.");
	let { static: i, navigator: a } = R.useContext(X);
	V(!i, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
	let { matches: o } = R.useContext(_r), { pathname: s } = Z(), c = Or(), l = ot(e, at(o), s, r === "path");
	Mt(typeof e == "string" ? e : H(e), a.createHref(l), kt(a), "reject");
	let u = JSON.stringify(l);
	return R.useEffect(() => {
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
function fi(e) {
	B(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
}
function pi({ basename: e = "/", children: t = null, location: n, navigationType: r = "POP", navigator: i, static: a = !1, useTransitions: o }) {
	B(!Tr(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
	let s = e.replace(/^\/*/, "/"), c = R.useMemo(() => ({
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
	typeof n == "string" && (n = U(n));
	let { pathname: l = "/", search: u = "", hash: d = "", state: f = null, key: p = "default", mask: m } = n, h = R.useMemo(() => {
		let e = G(l, s);
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
	return V(h != null, `<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`), h == null ? null : /* @__PURE__ */ R.createElement(X.Provider, { value: c }, /* @__PURE__ */ R.createElement(gr.Provider, {
		children: t,
		value: h
	}));
}
function mi({ children: e, location: t }) {
	return jr(hi(e), t);
}
R.Component;
function hi(e, t = []) {
	let n = [];
	return R.Children.forEach(e, (e, r) => {
		if (!R.isValidElement(e)) return;
		let i = [...t, r];
		if (e.type === R.Fragment) {
			n.push.apply(n, hi(e.props.children, i));
			return;
		}
		B(e.type === fi, `[${typeof e.type == "string" ? e.type : e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), B(!e.props.index || !e.props.children, "An index route cannot have child routes.");
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
		e.props.children && (a.children = hi(e.props.children, i)), n.push(a);
	}), n;
}
var gi = "get", _i = "application/x-www-form-urlencoded";
function vi(e) {
	return typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function yi(e) {
	return vi(e) && e.tagName.toLowerCase() === "button";
}
function bi(e) {
	return vi(e) && e.tagName.toLowerCase() === "form";
}
function xi(e) {
	return vi(e) && e.tagName.toLowerCase() === "input";
}
function Si(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Ci(e, t) {
	return e.button === 0 && (!t || t === "_self") && !Si(e);
}
function wi(e = "") {
	return new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((t, n) => {
		let r = e[n];
		return t.concat(Array.isArray(r) ? r.map((e) => [n, e]) : [[n, r]]);
	}, []));
}
function Ti(e, t) {
	let n = wi(e);
	return t && t.forEach((e, r) => {
		n.has(r) || t.getAll(r).forEach((e) => {
			n.append(r, e);
		});
	}), n;
}
var Ei = null;
function Di() {
	if (Ei === null) try {
		new FormData(document.createElement("form"), 0), Ei = !1;
	} catch {
		Ei = !0;
	}
	return Ei;
}
var Oi = /* @__PURE__ */ new Set([
	"application/x-www-form-urlencoded",
	"multipart/form-data",
	"text/plain"
]);
function ki(e) {
	return e != null && !Oi.has(e) ? (V(!1, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${_i}"`), null) : e;
}
function Ai(e, t) {
	let n, r, i, a, o;
	if (bi(e)) {
		let o = e.getAttribute("action");
		r = o ? G(o, t) : null, n = e.getAttribute("method") || gi, i = ki(e.getAttribute("enctype")) || _i, a = new FormData(e);
	} else if (yi(e) || xi(e) && (e.type === "submit" || e.type === "image")) {
		let o = e.form;
		if (o == null) throw Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
		let s = e.getAttribute("formaction") || o.getAttribute("action");
		if (r = s ? G(s, t) : null, n = e.getAttribute("formmethod") || o.getAttribute("method") || gi, i = ki(e.getAttribute("formenctype")) || ki(o.getAttribute("enctype")) || _i, a = new FormData(o, e), !Di()) {
			let { name: t, type: n, value: r } = e;
			if (n === "image") {
				let e = t ? `${t}.` : "";
				a.append(`${e}x`, "0"), a.append(`${e}y`, "0");
			} else t && a.append(t, r);
		}
	} else if (vi(e)) throw Error("Cannot submit element that is not <form>, <button>, or <input type=\"submit|image\">");
	else n = gi, r = null, i = _i, o = e;
	return a && i === "text/plain" && (o = a, a = void 0), {
		action: r,
		method: n.toLowerCase(),
		encType: i,
		formData: a,
		body: o
	};
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function ji(e, t) {
	if (e === !1 || e == null) throw Error(t);
}
function Mi(e, t, n, r) {
	let i = typeof e == "string" ? new URL(e, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e;
	return i.pathname = n ? i.pathname.endsWith("/") ? `${i.pathname}_.${r}` : `${i.pathname}.${r}` : i.pathname === "/" ? `_root.${r}` : t && G(i.pathname, t) === "/" ? `${ct(t)}/_root.${r}` : `${ct(i.pathname)}.${r}`, i;
}
async function Ni(e, t) {
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
function Pi(e) {
	return e != null && typeof e.page == "string";
}
function Fi(e) {
	return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function Ii(e, t, n) {
	return Vi((await Promise.all(e.map(async (e) => {
		let r = t.routes[e.route.id];
		if (r) {
			let e = await Ni(r, n);
			return e.links ? e.links() : [];
		}
		return [];
	}))).flat(1).filter(Fi).filter((e) => e.rel === "stylesheet" || e.rel === "preload").map((e) => e.rel === "stylesheet" ? {
		...e,
		rel: "prefetch",
		as: "style"
	} : {
		...e,
		rel: "prefetch"
	}));
}
function Li(e, t, n, r, i, a) {
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
function Ri(e, t, { includeHydrateFallback: n } = {}) {
	return zi(e.map((e) => {
		let r = t.routes[e.route.id];
		if (!r) return [];
		let i = [r.module];
		return r.clientActionModule && (i = i.concat(r.clientActionModule)), r.clientLoaderModule && (i = i.concat(r.clientLoaderModule)), n && r.hydrateFallbackModule && (i = i.concat(r.hydrateFallbackModule)), r.imports && (i = i.concat(r.imports)), i;
	}).flat(1));
}
function zi(e) {
	return [...new Set(e)];
}
function Bi(e) {
	let t = {}, n = Object.keys(e).sort();
	for (let r of n) t[r] = e[r];
	return t;
}
function Vi(e, t) {
	let n = /* @__PURE__ */ new Set(), r = new Set(t);
	return e.reduce((e, i) => {
		if (t && !Pi(i) && i.as === "script" && i.href && r.has(i.href)) return e;
		let a = JSON.stringify(Bi(i));
		return n.has(a) || (n.add(a), e.push({
			key: a,
			link: i
		})), e;
	}, []);
}
function Hi() {
	let e = R.useContext(lr);
	return ji(e, "You must render this element inside a <DataRouterContext.Provider> element"), e;
}
function Ui() {
	let e = R.useContext(ur);
	return ji(e, "You must render this element inside a <DataRouterStateContext.Provider> element"), e;
}
var Wi = R.createContext(void 0);
Wi.displayName = "FrameworkContext";
function Gi() {
	let e = R.useContext(Wi);
	return ji(e, "You must render this element inside a <HydratedRouter> element"), e;
}
function Ki(e, t) {
	let n = R.useContext(Wi), [r, i] = R.useState(!1), [a, o] = R.useState(!1), { onFocus: s, onBlur: c, onMouseEnter: l, onMouseLeave: u, onTouchStart: d } = t, f = R.useRef(null);
	R.useEffect(() => {
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
	}, [e]), R.useEffect(() => {
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
			onFocus: qi(s, p),
			onBlur: qi(c, m),
			onMouseEnter: qi(l, p),
			onMouseLeave: qi(u, m),
			onTouchStart: qi(d, p)
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
function qi(e, t) {
	return (n) => {
		e && e(n), n.defaultPrevented || t(n);
	};
}
function Ji({ page: e, ...t }) {
	let n = fr(), { nonce: r } = Gi(), { router: i } = Hi(), a = R.useMemo(() => Me(i.routes, e, i.basename), [
		i.routes,
		e,
		i.basename
	]);
	return a ? (t.nonce == null && r && (t = {
		...t,
		nonce: r
	}), n ? /* @__PURE__ */ R.createElement(Xi, {
		page: e,
		matches: a,
		...t
	}) : /* @__PURE__ */ R.createElement(Zi, {
		page: e,
		matches: a,
		...t
	})) : null;
}
function Yi(e) {
	let { manifest: t, routeModules: n } = Gi(), [r, i] = R.useState([]);
	return R.useEffect(() => {
		let r = !1;
		return Ii(e, t, n).then((e) => {
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
function Xi({ page: e, matches: t, ...n }) {
	let r = Z(), { future: i } = Gi(), { basename: a } = Hi(), o = R.useMemo(() => {
		if (e === r.pathname + r.search + r.hash) return [];
		let n = Mi(e, a, i.v8_trailingSlashAwareDataRequests, "rsc"), o = !1, s = [];
		for (let e of t) typeof e.route.shouldRevalidate == "function" ? o = !0 : s.push(e.route.id);
		return o && s.length > 0 && n.searchParams.set("_routes", s.join(",")), [n.pathname + n.search];
	}, [
		a,
		i.v8_trailingSlashAwareDataRequests,
		e,
		r,
		t
	]);
	return /* @__PURE__ */ R.createElement(R.Fragment, null, o.map((e) => /* @__PURE__ */ R.createElement("link", {
		key: e,
		rel: "prefetch",
		as: "fetch",
		href: e,
		...n
	})));
}
function Zi({ page: e, matches: t, ...n }) {
	let r = Z(), { future: i, manifest: a, routeModules: o } = Gi(), { basename: s } = Hi(), { loaderData: c, matches: l } = Ui(), u = R.useMemo(() => Li(e, t, l, a, r, "data"), [
		e,
		t,
		l,
		a,
		r
	]), d = R.useMemo(() => Li(e, t, l, a, r, "assets"), [
		e,
		t,
		l,
		a,
		r
	]), f = R.useMemo(() => {
		if (e === r.pathname + r.search + r.hash) return [];
		let n = /* @__PURE__ */ new Set(), l = !1;
		if (t.forEach((e) => {
			let t = a.routes[e.route.id];
			!t || !t.hasLoader || (!u.some((t) => t.route.id === e.route.id) && e.route.id in c && o[e.route.id]?.shouldRevalidate || t.hasClientLoader ? l = !0 : n.add(e.route.id));
		}), n.size === 0) return [];
		let d = Mi(e, s, i.v8_trailingSlashAwareDataRequests, "data");
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
	]), p = R.useMemo(() => Ri(d, a), [d, a]), m = Yi(d);
	return /* @__PURE__ */ R.createElement(R.Fragment, null, f.map((e) => /* @__PURE__ */ R.createElement("link", {
		key: e,
		rel: "prefetch",
		as: "fetch",
		href: e,
		...n
	})), p.map((e) => /* @__PURE__ */ R.createElement("link", {
		key: e,
		rel: "modulepreload",
		href: e,
		...n
	})), m.map(({ key: e, link: t }) => /* @__PURE__ */ R.createElement("link", {
		key: e,
		nonce: n.nonce,
		...t,
		crossOrigin: t.crossOrigin ?? n.crossOrigin
	})));
}
function Qi(...e) {
	return (t) => {
		e.forEach((e) => {
			typeof e == "function" ? e(t) : e != null && (e.current = t);
		});
	};
}
R.Component;
var $i = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
try {
	$i && (window.__reactRouterVersion = "7.18.3");
} catch {}
var ea = R.forwardRef(function({ onClick: e, discover: t = "render", prefetch: n = "none", relative: r, reloadDocument: i, replace: a, mask: o, state: s, target: c, to: l, preventScrollReset: u, viewTransition: d, defaultShouldRevalidate: f, ...p }, m) {
	let { basename: h, navigator: g, useTransitions: _ } = R.useContext(X), v = typeof l == "string" && ge.test(l), y = gt(l, h);
	l = y.to;
	let b = wr(l, { relative: r }), x = Z(), S = null;
	if (o) {
		let e = ot(o, [], x.mask ? x.mask.pathname : "/", !0);
		h !== "/" && (e.pathname = e.pathname === "/" ? h : K([h, e.pathname])), S = g.createHref(e);
	}
	let [C, w, T] = Ki(n, p), E = aa(l, {
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
	let O = !(y.isExternal || i), k = /* @__PURE__ */ R.createElement("a", {
		...p,
		...T,
		href: (O ? S : void 0) || y.absoluteURL || b,
		onClick: O ? D : e,
		ref: Qi(m, w),
		target: c,
		"data-discover": !v && t === "render" ? "true" : void 0
	});
	return C && !v ? /* @__PURE__ */ R.createElement(R.Fragment, null, k, /* @__PURE__ */ R.createElement(Ji, { page: b })) : k;
});
ea.displayName = "Link";
var ta = R.forwardRef(function({ "aria-current": e = "page", caseSensitive: t = !1, className: n = "", end: r = !1, style: i, to: a, viewTransition: o, children: s, ...c }, l) {
	let u = Ar(a, { relative: c.relative }), d = Z(), f = R.useContext(ur), { navigator: p, basename: m } = R.useContext(X), h = f != null && da(u) && o === !0, g = p.encodeLocation ? p.encodeLocation(u).pathname : u.pathname, _ = d.pathname, v = f && f.navigation && f.navigation.location ? f.navigation.location.pathname : null;
	t || (_ = _.toLowerCase(), v = v ? v.toLowerCase() : null, g = g.toLowerCase()), v && m && (v = G(v, m) || v);
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
	return /* @__PURE__ */ R.createElement(ea, {
		...c,
		"aria-current": C,
		className: w,
		ref: l,
		style: T,
		to: a,
		viewTransition: o
	}, typeof s == "function" ? s(S) : s);
});
ta.displayName = "NavLink";
var na = R.forwardRef(({ discover: e = "render", fetcherKey: t, navigate: n, reloadDocument: r, replace: i, state: a, method: o = gi, action: s, onSubmit: c, relative: l, preventScrollReset: u, viewTransition: d, defaultShouldRevalidate: f, ...p }, m) => {
	let { useTransitions: h } = R.useContext(X), g = la(), _ = ua(s, { relative: l }), v = o.toLowerCase() === "get" ? "get" : "post", y = typeof s == "string" && ge.test(s);
	return /* @__PURE__ */ R.createElement("form", {
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
			h && n !== !1 ? R.startTransition(() => p()) : p();
		},
		...p,
		"data-discover": !y && e === "render" ? "true" : void 0
	});
});
na.displayName = "Form";
function ra(e) {
	return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function ia(e) {
	let t = R.useContext(lr);
	return B(t, ra(e)), t;
}
function aa(e, { target: t, replace: n, mask: r, state: i, preventScrollReset: a, relative: o, viewTransition: s, defaultShouldRevalidate: c, useTransitions: l } = {}) {
	let u = Or(), d = Z(), f = Ar(e, { relative: o });
	return R.useCallback((p) => {
		if (Ci(p, t)) {
			p.preventDefault();
			let t = n === void 0 ? H(d) === H(f) : n, m = () => u(e, {
				replace: t,
				mask: r,
				state: i,
				preventScrollReset: a,
				relative: o,
				viewTransition: s,
				defaultShouldRevalidate: c
			});
			l ? R.startTransition(() => m()) : m();
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
function oa(e) {
	V(typeof URLSearchParams < "u", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");
	let t = R.useRef(wi(e)), n = R.useRef(!1), r = Z(), i = R.useMemo(() => Ti(r.search, n.current ? null : t.current), [r.search]), a = Or();
	return [i, R.useCallback((e, t) => {
		let r = wi(typeof e == "function" ? e(new URLSearchParams(i)) : e);
		n.current = !0, a("?" + r, t);
	}, [a, i])];
}
var sa = 0, ca = () => `__${String(++sa)}__`;
function la() {
	let { router: e } = ia("useSubmit"), { basename: t } = R.useContext(X), n = Gr(), r = e.fetch, i = e.navigate;
	return R.useCallback(async (e, a = {}) => {
		let { action: o, method: s, encType: c, formData: l, body: u } = Ai(e, t);
		if (a.navigate === !1) {
			let e = a.fetcherKey || ca();
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
function ua(e, { relative: t } = {}) {
	let { basename: n } = R.useContext(X), r = R.useContext(_r);
	B(r, "useFormAction must be used inside a RouteContext");
	let [i] = r.matches.slice(-1), a = { ...Ar(e || ".", { relative: t }) }, o = Z();
	if (e == null) {
		a.search = o.search;
		let e = new URLSearchParams(a.search), t = e.getAll("index");
		if (t.some((e) => e === "")) {
			e.delete("index"), t.filter((e) => e).forEach((t) => e.append("index", t));
			let n = e.toString();
			a.search = n ? `?${n}` : "";
		}
	}
	return (!e || e === ".") && i.route.index && (a.search = a.search ? a.search.replace(/^\?/, "?index&") : "?index"), n !== "/" && (a.pathname = a.pathname === "/" ? n : K([n, a.pathname])), H(a);
}
function da(e, { relative: t } = {}) {
	let n = R.useContext(pr);
	B(n != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
	let { basename: r } = ia("useViewTransitionState"), i = Ar(e, { relative: t });
	if (!n.isTransitioning) return !1;
	let a = G(n.currentLocation.pathname, r) || n.currentLocation.pathname, o = G(n.nextLocation.pathname, r) || n.nextLocation.pathname;
	return Ye(i.pathname, o) != null || Ye(i.pathname, a) != null;
}
//#endregion
//#region packages/engine/src/styles.css
var fa = /* @__PURE__ */ e(E(), 1), pa = "cabane:last-opened-workspace", ma = (e) => `cabane:workspace-preview:${e}`;
function ha() {
	try {
		return window.localStorage.getItem(pa);
	} catch {
		return null;
	}
}
function ga(e) {
	try {
		window.localStorage.setItem(pa, e);
	} catch {}
}
function _a(e) {
	try {
		return window.localStorage.getItem(ma(e));
	} catch {
		return null;
	}
}
function va(e, t) {
	if (!(!t.width || !t.height)) try {
		let n = document.createElement("canvas"), r = Math.min(640 / t.width, 480 / t.height, 1);
		n.width = Math.max(1, Math.round(t.width * r)), n.height = Math.max(1, Math.round(t.height * r));
		let i = n.getContext("2d");
		if (!i) return;
		i.drawImage(t, 0, 0, n.width, n.height), window.localStorage.setItem(ma(e), n.toDataURL("image/webp", .75));
	} catch {}
}
function ya(e) {
	try {
		window.localStorage.removeItem(ma(e)), ha() === e && window.localStorage.removeItem(pa);
	} catch {}
}
//#endregion
//#region apps/web/src/onboarding-config.ts
var ba = {
	available: !1,
	source: "https://github.com/julien-meichelbeck/smart-home-3d",
	selfHost: "https://github.com/julien-meichelbeck/smart-home-3d#readme"
}, xa = [
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
function Sa(e, t) {
	return `${Q(e)}/mobile-editor?mode=${t === "furnish" ? "arrange" : "construct"}`;
}
function Ca(e) {
	return Me(xa, e)?.[0].route.handle ?? null;
}
function Q(e) {
	return `/workspaces/${encodeURIComponent(e)}`;
}
function wa(e) {
	return Me([{ path: "/workspaces/:workspaceId/*" }], e)?.[0].params.workspaceId ?? null;
}
function Ta(e, t) {
	let n = Q(t);
	return e.panel === "home-assistant" ? `${n}/home-assistant` : e.panel === "action-bar" ? `${n}/shortcuts` : e.mode === "construct" ? `${n}/construct` : e.mode === "furnish" ? `${n}/arrange` : e.relationshipId ? `${n}/connect/devices` : e.view ? `${n}/connect/${e.view}` : `${n}/connect`;
}
function Ea(e, t) {
	return !Ca(t) || wa(t) !== e;
}
//#endregion
//#region apps/web/src/workspaces/first-onboarding-light.ts
function Da(e, t) {
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
function Oa(e) {
	let t = Or(), n = Z(), [r, i] = (0, R.useState)(null), [o, s] = (0, R.useState)(!1), [c, l] = (0, R.useState)(!1), u = (0, R.useRef)(!1), [d, f] = (0, R.useState)(null), [p, m] = (0, R.useState)(null), h = (0, R.useCallback)(async () => {
		if (e) try {
			i(await e.readOnboarding());
		} catch {
			f("Getting-started preferences are unavailable. Your workspaces are still available.");
		} finally {
			s(!0);
		}
	}, [e]);
	return (0, R.useEffect)(() => {
		h();
		let e = () => {
			h();
		};
		return window.addEventListener("focus", e), () => window.removeEventListener("focus", e);
	}, [h]), {
		state: r,
		loaded: o,
		busy: c,
		error: d,
		deleted: p,
		dismiss: (0, R.useCallback)(async (t) => {
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
		start: (0, R.useCallback)(async (r, i) => {
			if (!(!e || u.current)) {
				u.current = !0, l(!0), f(null), m(null);
				try {
					let o = await e.readOnboarding(), s = await e.startOnboarding(r, { replaceDeletedId: i });
					if (!s.record) throw Error(s.error ?? "Open Workspaces to recover this home.");
					let c = S();
					try {
						c = w(window.localStorage, s.metadata.id).record;
					} catch {}
					let l = c.launch?.target ?? (r === "connect" && s.record.publishedAt !== 0 ? Da(ue(s.record.published), "open-plan-living") : void 0), u = {
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
						d = g(window.localStorage, s.metadata.id, u);
					} catch {}
					if (d || f("Setup progress could not be saved. Your new home is safe in Workspaces."), r === "build" && o?.destinations.build !== s.metadata.id && a(s.metadata.id), await h(), r === "build") {
						n.pathname !== "/build" && await t("/build");
						return;
					}
					l && s.metadata.homeAssistantUrl && s.record.bindings[s.metadata.homeAssistantUrl]?.published.entityIdsBySlotId[l.slotId] ? await t(Q(s.metadata.id)) : await t(Ta({
						mode: "connect",
						view: "devices",
						roomId: l?.roomId,
						relationshipId: l?.deviceId
					}, s.metadata.id), { state: { editorRequest: {
						mode: "connect",
						view: "devices",
						roomId: l?.roomId,
						relationshipId: l?.deviceId
					} } });
				} catch (e) {
					f(e instanceof Error ? e.message : "Could not open your home. Please try again."), e instanceof L && m({
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
			h,
			n.pathname
		]),
		clearError: () => {
			f(null), m(null);
		}
	};
}
//#endregion
//#region apps/web/src/workspaces/workspace-sync-state.ts
var ka = (e, t) => `${e}\u0000${t}`, Aa = (e, t, n) => x(e, "readonly", r, (e, i, a) => i(e.objectStore(r).get(ka(t, n)), (e) => a(e ?? null))), ja = (e, t) => x(e, "readwrite", r, (e, n, i) => n(e.objectStore(r).put(t, ka(t.origin, t.homeId)), () => i())), Ma = (e, t, n) => x(e, "readwrite", r, (e, i, a) => i(e.objectStore(r).delete(ka(t, n)), () => a()));
async function Na(e, t) {
	let n = se(JSON.parse(T(e, t))), r = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(n));
	return Array.from(new Uint8Array(r), (e) => e.toString(16).padStart(2, "0")).join("");
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceCard.tsx
var $ = n();
function Pa({ entry: e, busy: t, onOpen: n, onAction: r, onRecover: i, onExportRaw: a }) {
	let { metadata: o, record: s, error: c } = e, [l, u] = (0, R.useState)(null);
	(0, R.useEffect)(() => {
		let e = !0;
		u(null);
		let t = () => {
			o.homeAssistantUrl && Aa(window.indexedDB, o.homeAssistantUrl, o.id).then((t) => {
				e && u(t);
			}).catch(() => void 0);
		};
		return t(), window.addEventListener("focus", t), () => {
			e = !1, window.removeEventListener("focus", t);
		};
	}, [o.id, o.homeAssistantUrl]);
	let d = _a(o.id), f = s && JSON.stringify(s.draft) !== JSON.stringify(s.published);
	return /* @__PURE__ */ (0, $.jsxs)("article", {
		className: `workspace-card${c ? " workspace-card--recovery" : ""}`,
		children: [
			!c && /* @__PURE__ */ (0, $.jsx)("button", {
				className: "workspace-card-target",
				disabled: t,
				onClick: n,
				"aria-label": `Open ${o.name}`
			}),
			/* @__PURE__ */ (0, $.jsxs)("details", { children: [/* @__PURE__ */ (0, $.jsx)("summary", {
				"aria-label": `Actions for ${o.name}`,
				children: "•••"
			}), /* @__PURE__ */ (0, $.jsx)("div", {
				className: "workspace-menu",
				children: [
					"settings",
					"rename",
					"duplicate",
					"export",
					"delete"
				].map((e) => /* @__PURE__ */ (0, $.jsx)("button", {
					disabled: t || !!(c && e !== "delete"),
					onClick: (t) => {
						let n = t.currentTarget.closest("details");
						n?.removeAttribute("open"), n?.querySelector("summary")?.focus(), r(e);
					},
					children: e === "settings" ? "Home Assistant" : e[0].toUpperCase() + e.slice(1)
				}, e))
			})] }),
			d && /* @__PURE__ */ (0, $.jsx)("img", {
				className: "workspace-preview",
				src: d,
				alt: `Preview of ${o.name}`,
				loading: "lazy"
			}),
			/* @__PURE__ */ (0, $.jsx)("h2", { children: o.name }),
			l && /* @__PURE__ */ (0, $.jsxs)("span", {
				className: "workspace-sync",
				title: l.enabled ? "Automatic sync is enabled for this workspace" : "A copy of this workspace is saved on Home Assistant",
				children: [/* @__PURE__ */ (0, $.jsx)(j, { name: l.enabled ? "refresh" : "save" }), l.enabled ? "Auto-sync on" : "Saved on HA"]
			}),
			(c || !o.hasPublished || f) && /* @__PURE__ */ (0, $.jsx)("p", {
				className: "workspace-status",
				children: c ? "Needs recovery" : o.hasPublished ? "Unapplied changes" : "Draft"
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "workspace-card-footer",
				children: [/* @__PURE__ */ (0, $.jsxs)("p", {
					className: "workspace-server",
					title: o.homeAssistantUrl ?? void 0,
					children: [o.homeAssistantUrl && /* @__PURE__ */ (0, $.jsxs)("svg", {
						"aria-hidden": "true",
						viewBox: "0 0 24 24",
						width: "16",
						height: "16",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.7",
						children: [
							/* @__PURE__ */ (0, $.jsx)("path", { d: "m3 11 9-8 9 8v10H3Z" }),
							/* @__PURE__ */ (0, $.jsx)("path", { d: "M12 20v-8m0 4-4-4m4 2 4-4" }),
							/* @__PURE__ */ (0, $.jsx)("circle", {
								cx: "8",
								cy: "11",
								r: "1"
							}),
							/* @__PURE__ */ (0, $.jsx)("circle", {
								cx: "16",
								cy: "9",
								r: "1"
							})
						]
					}), /* @__PURE__ */ (0, $.jsx)("span", { children: o.homeAssistantUrl ? new URL(o.homeAssistantUrl).host : "No connection yet" })]
				}), !c && /* @__PURE__ */ (0, $.jsx)("span", {
					className: "workspace-card-arrow",
					"aria-hidden": "true",
					children: "→"
				})]
			}),
			c ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("p", {
				className: "workspace-error",
				children: c
			}), /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "workspace-card-recovery",
				children: [/* @__PURE__ */ (0, $.jsx)("button", {
					disabled: t,
					onClick: i,
					children: "Recover workspace"
				}), /* @__PURE__ */ (0, $.jsx)("button", {
					disabled: t,
					onClick: a,
					children: "Export raw data"
				})]
			})] }) : null
		]
	});
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceDialog.tsx
function Fa({ title: e, busy: t, error: n, onCancel: r, children: i }) {
	let a = ee(), o = (0, R.useRef)(null);
	return (0, R.useEffect)(() => {
		let e = a.root.activeElement;
		return o.current?.showModal?.(), () => e?.focus();
	}, []), /* @__PURE__ */ (0, $.jsxs)("dialog", {
		ref: o,
		className: "workspace-dialog",
		"aria-labelledby": "workspace-dialog-title",
		onCancel: (e) => {
			e.preventDefault(), t || r();
		},
		children: [
			/* @__PURE__ */ (0, $.jsx)("h2", {
				id: "workspace-dialog-title",
				children: e
			}),
			i,
			n && /* @__PURE__ */ (0, $.jsx)("p", {
				role: "alert",
				className: "workspace-error",
				children: n
			}),
			/* @__PURE__ */ (0, $.jsx)("button", {
				type: "button",
				disabled: t,
				onClick: r,
				children: "Cancel"
			})
		]
	});
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceNameDialog.tsx
function Ia({ action: e, initialName: t, busy: n, error: r, onSave: i, onCancel: a }) {
	let [o, s] = (0, R.useState)(t);
	return /* @__PURE__ */ (0, $.jsx)(Fa, {
		title: e === "create" ? "New workspace" : e === "rename" ? "Rename workspace" : "Duplicate workspace",
		busy: n,
		error: r,
		onCancel: a,
		children: /* @__PURE__ */ (0, $.jsxs)("form", {
			onSubmit: (e) => {
				e.preventDefault(), o.trim() && i(o.trim());
			},
			children: [
				/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Workspace name", /* @__PURE__ */ (0, $.jsx)("input", {
					autoFocus: !0,
					required: !0,
					value: o,
					onChange: (e) => s(e.target.value)
				})] }),
				e === "duplicate" && /* @__PURE__ */ (0, $.jsx)("p", { children: "The copy includes the saved design, connection, and mappings." }),
				/* @__PURE__ */ (0, $.jsx)("button", {
					className: "workspace-primary",
					disabled: n || !o.trim(),
					children: n ? "Saving…" : e === "rename" ? "Save name" : e === "duplicate" ? "Duplicate" : "Create workspace"
				})
			]
		})
	});
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceDeleteDialog.tsx
function La({ name: e, busy: t, error: n, onDelete: r, onCancel: i }) {
	return /* @__PURE__ */ (0, $.jsxs)(Fa, {
		title: `Delete ${e}?`,
		busy: t,
		error: n,
		onCancel: i,
		children: [/* @__PURE__ */ (0, $.jsx)("p", { children: "This permanently removes this workspace, its saved design, and mappings from this browser. Export a backup first if you want to keep it." }), /* @__PURE__ */ (0, $.jsx)("button", {
			className: "workspace-danger",
			disabled: t,
			onClick: r,
			children: t ? "Deleting…" : "Delete workspace"
		})]
	});
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceTransferDialog.tsx
function Ra({ mode: e, busy: t, error: n, onImport: r, onExport: i, onCancel: a, remoteImport: o }) {
	let s = Z(), c = Or(), [l, u] = (0, R.useState)(() => new URLSearchParams(s.search).get("import") === "home-assistant" ? "ha" : "file"), [d, f] = (0, R.useState)(""), [p, m] = (0, R.useState)(null);
	return /* @__PURE__ */ (0, $.jsxs)(Fa, {
		title: e === "import" ? "Import a workspace" : "Export workspace",
		busy: t,
		error: p ?? n,
		onCancel: a,
		children: [e === "import" && o && /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "workspace-import-sources",
			"aria-label": "Import source",
			children: [/* @__PURE__ */ (0, $.jsx)("button", {
				"aria-pressed": l === "file",
				onClick: () => {
					c("/workspaces", { replace: !0 }), u("file");
				},
				children: "From a file"
			}), /* @__PURE__ */ (0, $.jsx)("button", {
				"aria-pressed": l === "ha",
				onClick: () => {
					c("/workspaces?import=home-assistant", { replace: !0 }), u("ha");
				},
				children: "From Home Assistant"
			})]
		}), e === "import" && l === "ha" ? o : e === "import" ? /* @__PURE__ */ (0, $.jsxs)("form", {
			onSubmit: (e) => {
				e.preventDefault(), r(d);
			},
			children: [
				/* @__PURE__ */ (0, $.jsx)("p", { children: "A project or backup creates a new workspace." }),
				/* @__PURE__ */ (0, $.jsxs)("label", { children: ["Cabane JSON file", /* @__PURE__ */ (0, $.jsx)("input", {
					type: "file",
					accept: ".json,application/json",
					disabled: t,
					onChange: async (e) => {
						let t = e.target.files?.[0];
						if (m(null), f(""), t) try {
							f(await t.text());
						} catch {
							m("Could not read that file. Please choose it again.");
						}
					}
				})] }),
				/* @__PURE__ */ (0, $.jsx)("button", {
					className: "workspace-primary",
					disabled: t || !d,
					children: t ? "Importing…" : "Import workspace"
				})
			]
		}) : /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "workspace-export-options",
			children: [
				/* @__PURE__ */ (0, $.jsx)("p", { children: "Export the latest saved version." }),
				/* @__PURE__ */ (0, $.jsxs)("button", {
					disabled: t,
					onClick: () => i(!1),
					children: ["Portable design", /* @__PURE__ */ (0, $.jsx)("span", { children: "Design only, without connection or mappings." })]
				}),
				/* @__PURE__ */ (0, $.jsxs)("button", {
					disabled: t,
					onClick: () => i(!0),
					children: ["Private backup", /* @__PURE__ */ (0, $.jsx)("span", { children: "Design, drafts, connection, and mappings. No credentials." })]
				})
			]
		})]
	});
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceLibrary.tsx
function za(e) {
	let t = h("cabane-icon.png"), n = Z(), r = Or(), [i, a] = (0, R.useState)(() => new URLSearchParams(n.search).get("import") === "home-assistant" ? { action: "import" } : null), [o, s] = (0, R.useState)(!1), [c, l] = (0, R.useState)(null), u = (e) => {
		l(null), a(e);
	}, d = async (e) => {
		s(!0), l(null);
		try {
			await e(), a(null);
		} catch (e) {
			l(e instanceof Error ? e.message : "Could not complete this action. Please try again.");
		} finally {
			s(!1);
		}
	}, f = () => {
		a(null), l(null), r("/workspaces", { replace: !0 });
	};
	return /* @__PURE__ */ (0, $.jsxs)("main", {
		className: "workspace-library",
		children: [
			/* @__PURE__ */ (0, $.jsxs)("header", {
				className: "workspace-library-header",
				children: [/* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsxs)("p", {
					className: "workspace-brand",
					children: [/* @__PURE__ */ (0, $.jsx)("img", {
						src: t,
						alt: "",
						width: "28",
						height: "33"
					}), "Cabane"]
				}), /* @__PURE__ */ (0, $.jsx)("h1", { children: "Your workspaces" })] }), /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "workspace-library-actions",
					children: [/* @__PURE__ */ (0, $.jsx)("button", {
						disabled: o,
						onClick: () => u({ action: "import" }),
						children: "Import"
					}), /* @__PURE__ */ (0, $.jsx)("button", {
						className: "workspace-primary",
						disabled: o,
						onClick: () => u({ action: "create" }),
						children: "New workspace"
					})]
				})]
			}),
			!i && c && /* @__PURE__ */ (0, $.jsx)("p", {
				role: "alert",
				className: "workspace-error",
				children: c
			}),
			e.entries.length ? /* @__PURE__ */ (0, $.jsx)("section", {
				className: "workspace-grid",
				"aria-label": "Homes",
				children: e.entries.map((t) => /* @__PURE__ */ (0, $.jsx)(Pa, {
					entry: t,
					busy: o,
					onOpen: () => void d(() => e.onOpen(t.metadata.id)),
					onAction: (n) => n === "settings" ? void d(() => e.onSettings?.(t.metadata.id) ?? Promise.resolve()) : u({
						action: n,
						entry: t
					}),
					onRecover: () => void d(() => e.onRecover(t.metadata.id)),
					onExportRaw: () => void d(() => e.onExportRaw(t.metadata.id))
				}, t.metadata.id))
			}) : /* @__PURE__ */ (0, $.jsxs)("section", {
				className: "workspace-empty",
				children: [/* @__PURE__ */ (0, $.jsx)("h2", { children: "A place for your next home" }), /* @__PURE__ */ (0, $.jsx)("p", { children: "Create a workspace from scratch, or import a saved Cabane project." })]
			}),
			i && (i.action === "create" || i.action === "rename" || i.action === "duplicate") && /* @__PURE__ */ (0, $.jsx)(Ia, {
				action: i.action,
				initialName: i.action === "create" ? "" : `${i.entry.metadata.name}${i.action === "duplicate" ? " copy" : ""}`,
				busy: o,
				error: c,
				onCancel: f,
				onSave: (t) => void d(() => i.action === "create" ? e.onCreate(t) : i.action === "rename" ? e.onRename(i.entry.metadata.id, t) : e.onDuplicate(i.entry.metadata.id, t))
			}),
			i?.action === "delete" && /* @__PURE__ */ (0, $.jsx)(La, {
				name: i.entry.metadata.name,
				busy: o,
				error: c,
				onCancel: f,
				onDelete: () => void d(() => e.onDelete(i.entry.metadata.id))
			}),
			(i?.action === "import" || i?.action === "export") && /* @__PURE__ */ (0, $.jsx)(Ra, {
				mode: i.action,
				busy: o,
				error: c,
				onCancel: f,
				remoteImport: e.remoteImport,
				onImport: (t) => void d(() => e.onImport(t)),
				onExport: (t) => void d(() => e.onExport(i.entry.metadata.id, t))
			})
		]
	});
}
//#endregion
//#region apps/web/src/workspaces/ha-workspace-client.ts
var Ba = class extends Error {
	constructor() {
		super("This workspace changed on Home Assistant."), this.name = "HaWorkspaceConflictError";
	}
}, Va = class extends Error {
	constructor() {
		super("Cabane workspace storage is not installed on this Home Assistant instance."), this.name = "HaWorkspaceUnavailableError";
	}
}, Ha = (e) => {
	if (e && typeof e == "object" && "code" in e && typeof e.code == "string") return e.code;
};
function Ua(e) {
	let t = async (t) => {
		try {
			return await e(t);
		} catch (e) {
			let t = Ha(e);
			throw t === "conflict" ? new Ba() : [
				"unknown_command",
				"unknown_error",
				"not_found"
			].includes(t ?? "") ? new Va() : e;
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
//#region apps/web/src/workspaces/workspace-remote-transfer.ts
function Wa(e, t, n, r) {
	let i;
	try {
		i = JSON.parse(t);
	} catch {
		throw Error("The HA workspace copy is not valid JSON.");
	}
	if (!i || typeof i != "object" || !("format" in i) || i.format !== "cabane-workspace") throw Error("The HA workspace copy is not a private Cabane backup.");
	let a = ce(t, le);
	if (r && a.record.homeId !== r) throw Error("The HA workspace copy belongs to a different workspace.");
	let o = {
		id: a.record.homeId,
		name: a.name,
		homeAssistantUrl: a.homeAssistantUrl,
		hasPublished: a.hasPublished,
		createdAt: Date.now()
	};
	return e.restoreExact(a.record, o, n);
}
//#endregion
//#region apps/web/src/workspaces/workspace-sync-coordinator.ts
function Ga(e) {
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
	}, a = (e) => e && typeof e == "object" && "name" in e && e.name === "HaWorkspaceUnavailableError" ? { kind: "unavailable" } : {
		kind: "disconnected",
		detail: e instanceof Error ? e.message : "Home Assistant is unavailable."
	};
	return {
		reconcile: (t, o) => n(t, async () => {
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
				return {
					kind: "conflict",
					detail: e instanceof Error ? e.message : void 0
				};
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
		}),
		manualSave: (t, a) => n(t, async () => {
			let n = await r(t), o = await e.cursors.read(a, t), s = await e.client.get(t);
			if (s?.corrupt) return {
				kind: "conflict",
				detail: "The HA copy is damaged."
			};
			if (s?.document && (!o || s.version !== o.remoteVersion)) return { kind: "conflict" };
			let c = await e.client.put(t, e.serialize(n), s?.version ?? null);
			return await i(a, n, c, o?.enabled ?? !1), { kind: o?.enabled ? "synced" : "off" };
		}),
		manualRestore: (t, r) => n(t, async () => {
			let n = await e.client.get(t);
			if (!n?.document) throw Error("No HA copy of this workspace exists.");
			if (n.corrupt) throw Error("The HA copy is damaged. Download its raw data for recovery.");
			let a = await e.repository.read(t), o = await e.cursors.read(r, t);
			if (a?.record && (!o || await e.fingerprint(a) !== o.acknowledgedFingerprint)) return {
				kind: "conflict",
				detail: "This browser's copy has changes. Choose which copy to keep."
			};
			let s = await e.restore(n.document, a?.record?.revision, t);
			return await i(r, s, n.version, o?.enabled ?? !1), { kind: o?.enabled ? "synced" : "off" };
		}),
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
//#region apps/web/src/workspaces/WorkspaceHaStorage.tsx
function Ka(e) {
	let t = F(), n = (0, R.useMemo)(() => Ua(t.sendStorageMessage), [t.sendStorageMessage]);
	return {
		runtime: t,
		client: n,
		coordinator: (0, R.useMemo)(() => Ga({
			repository: e,
			client: n,
			cursors: {
				read: (e, t) => Aa(window.indexedDB, e, t),
				write: (e) => ja(window.indexedDB, e),
				remove: (e, t) => Ma(window.indexedDB, e, t)
			},
			fingerprint: (e) => Na(e.metadata, e.record),
			serialize: (e) => T(e.metadata, e.record),
			restore: (t, n, r) => Wa(e, t, n, r)
		}), [n, e])
	};
}
var qa = (0, R.createContext)(null);
function Ja({ id: e, origin: t, repository: n, hidden: r = !1, children: i }) {
	let { runtime: a, coordinator: o } = Ka(n), [s, c] = (0, R.useState)({ kind: "off" }), l = (0, R.useCallback)(async () => {
		if (!(r || !t) && !(!(await Aa(window.indexedDB, t, e))?.enabled || a.status !== "connected")) try {
			let n = await o.reconcile(e, t);
			c(n), n.detail === "restored" && window.location.reload();
		} catch (e) {
			c({
				kind: "disconnected",
				detail: e instanceof Error ? e.message : "Home Assistant is unavailable."
			});
		}
	}, [
		r,
		t,
		e,
		a.status,
		o
	]);
	return (0, R.useEffect)(() => {
		l();
		let e = window.setInterval(() => {
			l();
		}, 3e3);
		return () => window.clearInterval(e);
	}, [l]), /* @__PURE__ */ (0, $.jsx)(qa.Provider, {
		value: r ? null : {
			id: e,
			origin: t,
			repository: n,
			coordinator: o,
			backgroundStatus: s,
			refreshBackground: l
		},
		children: i
	});
}
var Ya = () => (0, R.useContext)(qa);
function Xa() {
	let e = (0, R.useContext)(qa);
	return e ? /* @__PURE__ */ (0, $.jsx)(Za, { ...e }) : null;
}
function Za({ id: e, origin: t, repository: n }) {
	let r = Ka(n), i = (0, R.useContext)(qa), a = i?.coordinator ?? r.coordinator, { runtime: o, client: s } = r, [c, l] = (0, R.useState)(!1), [u, d] = (0, R.useState)(!1), [f, p] = (0, R.useState)(!1), [m, h] = (0, R.useState)(!1), [g, _] = (0, R.useState)(!1), [v, y] = (0, R.useState)({ kind: "off" }), [b, x] = (0, R.useState)(!1), [S, C] = (0, R.useState)(null), [w, E] = (0, R.useState)(null), D = (0, R.useCallback)(async () => {
		if (!t) return;
		let n = await Aa(window.indexedDB, t, e);
		_(n?.enabled ?? !1);
		let r = await s.get(e);
		return h(!!r?.document), n;
	}, [
		s,
		e,
		t
	]), O = (0, R.useCallback)(async () => {
		p(!0), C(null);
		try {
			await s.list(), await D(), d(!0);
		} catch (e) {
			d(!1), e instanceof Va || C(e instanceof Error ? e.message : "Could not reach Home Assistant. Try again.");
		} finally {
			l(!0), p(!1);
		}
	}, [s, D]);
	(0, R.useEffect)(() => {
		l(!1), d(!1), h(!1), _(!1), y({ kind: "off" }), C(null), E(null);
		let n = !0;
		return t && o.status === "connected" && Aa(window.indexedDB, t, e).then((e) => {
			n && e && O();
		}).catch(() => void 0), () => {
			n = !1;
		};
	}, [
		t,
		o.status,
		e,
		O
	]), (0, R.useEffect)(() => {
		i?.backgroundStatus.kind !== "off" && i && y(i.backgroundStatus);
	}, [i?.backgroundStatus]), (0, R.useEffect)(() => {
		if (i || !g || !t) return;
		let n = window.setInterval(() => {
			a.reconcile(e, t).then((e) => {
				y(e), e.detail === "restored" && window.location.reload();
			});
		}, 3e3);
		return () => window.clearInterval(n);
	}, [
		i,
		g,
		t,
		a,
		e
	]);
	let k = async (e, t, n = !1) => {
		x(!0), C(null), E(null);
		try {
			let r = await e();
			y(r), await D(), r.kind !== "conflict" && (E(t ?? null), n && window.location.reload());
		} catch (e) {
			C(e instanceof Error ? e.message : "Could not complete the request. Try again.");
		} finally {
			x(!1);
		}
	}, A = async () => {
		let t = await n.read(e);
		t?.record && P(T(t.metadata, t.record), `${e}-before-load.json`);
	}, M = (n) => k(async () => {
		if (n === "remote") return await A(), a.resolveConflict(e, t, n);
		let r = await s.get(e);
		return r?.document && P(r.document, `${e}-before-replace.json`), a.resolveConflict(e, t, n, r?.version);
	}, "Copy updated.", n === "remote");
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		className: "ha-section",
		"aria-labelledby": "ha-storage-title",
		children: [
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "ha-section__heading",
				children: [/* @__PURE__ */ (0, $.jsx)("h2", {
					id: "ha-storage-title",
					children: "Save across devices"
				}), u && m && /* @__PURE__ */ (0, $.jsxs)("span", {
					className: "ha-status is-connected",
					children: [/* @__PURE__ */ (0, $.jsx)("i", {}), g ? v.kind === "synced" ? "Up to date" : "Auto-sync on" : "Saved on Home Assistant"]
				})]
			}),
			/* @__PURE__ */ (0, $.jsx)("p", { children: "Keep your workspace on Home Assistant to open it on another browser or device." }),
			o.status === "connected" ? u ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
				!m && /* @__PURE__ */ (0, $.jsx)("p", {
					className: "ha-help",
					children: "Ready. Save this workspace to create its first copy on Home Assistant."
				}),
				/* @__PURE__ */ (0, $.jsxs)("div", {
					className: "ha-actions",
					children: [/* @__PURE__ */ (0, $.jsxs)("button", {
						className: "ha-primary",
						disabled: b,
						onClick: () => void k(() => a.manualSave(e, t), "Workspace saved on Home Assistant."),
						children: [/* @__PURE__ */ (0, $.jsx)(j, { name: "export" }), "Save"]
					}), /* @__PURE__ */ (0, $.jsxs)("button", {
						disabled: b || !m,
						onClick: () => {
							window.confirm("Load the Home Assistant copy? Your browser copy will be downloaded as a backup first.") && k(async () => (await A(), a.manualRestore(e, t)), void 0, !0);
						},
						children: [/* @__PURE__ */ (0, $.jsx)(j, { name: "import" }), "Load"]
					})]
				}),
				/* @__PURE__ */ (0, $.jsxs)("div", {
					className: "ha-sync-row",
					children: [/* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsx)("label", {
						id: "ha-auto-label",
						htmlFor: "ha-auto",
						children: "Sync automatically"
					}), /* @__PURE__ */ (0, $.jsx)("p", { children: m ? "Keep changes in sync while this workspace is open." : "Save once to turn on automatic sync." })] }), /* @__PURE__ */ (0, $.jsx)("button", {
						id: "ha-auto",
						className: "ha-switch",
						role: "switch",
						"aria-labelledby": "ha-auto-label",
						"aria-checked": g,
						disabled: b || !m,
						onClick: () => void k(() => a.setEnabled(e, t, !g)),
						children: /* @__PURE__ */ (0, $.jsx)("span", {})
					})]
				}),
				v.kind === "conflict" && /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "ha-storage-state",
					role: "alert",
					children: [
						/* @__PURE__ */ (0, $.jsx)("strong", { children: "Choose which copy to keep" }),
						/* @__PURE__ */ (0, $.jsxs)("p", { children: [v.detail ?? "This browser and Home Assistant both have changes.", " The replaced copy will be downloaded first."] }),
						/* @__PURE__ */ (0, $.jsxs)("div", {
							className: "ha-actions",
							children: [/* @__PURE__ */ (0, $.jsx)("button", {
								disabled: b,
								onClick: () => void M("local"),
								children: "Keep browser copy"
							}), /* @__PURE__ */ (0, $.jsx)("button", {
								disabled: b,
								onClick: () => void M("remote"),
								children: "Keep Home Assistant copy"
							})]
						})
					]
				}),
				v.kind === "disconnected" && /* @__PURE__ */ (0, $.jsx)("p", {
					role: "status",
					children: "Sync paused. Your changes are saved in this browser."
				}),
				m && /* @__PURE__ */ (0, $.jsxs)("button", {
					className: "ha-danger",
					disabled: b,
					onClick: () => {
						window.confirm("Delete the copy on Home Assistant? This browser's workspace will remain. Automatic sync will turn off.") && k(() => a.deleteRemote(e, t), "Home Assistant copy deleted. Your browser copy is safe.");
					},
					children: [/* @__PURE__ */ (0, $.jsx)(j, { name: "delete" }), "Delete saved copy"]
				}),
				/* @__PURE__ */ (0, $.jsx)("p", {
					className: "ha-help",
					children: "Shared with everyone signed in to this Home Assistant instance."
				})
			] }) : /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "ha-storage-state",
				children: [
					/* @__PURE__ */ (0, $.jsx)("strong", { children: c && !S ? "Install the Cabane integration" : "Use your Home Assistant for storage" }),
					/* @__PURE__ */ (0, $.jsx)("p", { children: c && !S ? "Your Home Assistant needs the free Cabane integration before it can store workspaces." : "We’ll check that the Cabane integration is installed. Nothing is uploaded until you save." }),
					/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "ha-actions",
						children: [c && !S && /* @__PURE__ */ (0, $.jsxs)("a", {
							href: "https://github.com/cabane-app/cabane-home-assistant#installation",
							target: "_blank",
							rel: "noreferrer",
							children: ["Setup guide", /* @__PURE__ */ (0, $.jsx)(j, { name: "external" })]
						}), /* @__PURE__ */ (0, $.jsx)("button", {
							className: c ? void 0 : "ha-primary",
							disabled: f,
							onClick: () => void O(),
							children: f ? "Checking…" : c ? "Check again" : "Enable HA storage"
						})]
					})
				]
			}) : /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "ha-storage-state",
				children: [/* @__PURE__ */ (0, $.jsx)("strong", { children: "Connect Home Assistant first" }), /* @__PURE__ */ (0, $.jsx)("p", { children: "Use the connection above, then enable storage here." })]
			}),
			S && /* @__PURE__ */ (0, $.jsx)("p", {
				className: "ha-error",
				role: "alert",
				children: S
			}),
			w && /* @__PURE__ */ (0, $.jsx)("p", {
				className: "ha-notice",
				role: "status",
				children: w
			})
		]
	});
}
function Qa({ repository: e, onRestored: t }) {
	let { runtime: n, client: r } = Ka(e), i = D(), [a, o] = (0, R.useState)([]), [s, c] = (0, R.useState)(null), [l, u] = (0, R.useState)(!1), d = (0, R.useCallback)(async () => {
		try {
			o(await r.list()), c(null);
		} catch (e) {
			c(e instanceof Error ? e.message : "Could not list HA workspaces.");
		}
	}, [r]);
	(0, R.useEffect)(() => {
		n.status === "connected" && d();
	}, [n.status, d]);
	let f = async (i) => {
		u(!0), c(null);
		try {
			if (await e.read(i.home_id)) throw Error("This workspace already exists in this browser. Open it to resolve the copies.");
			let a = await r.get(i.home_id);
			if (!a?.document) throw Error("This HA copy was removed. Refresh the list.");
			if (a.corrupt) throw Error("This HA copy is damaged. Download its raw data for recovery.");
			await Wa(e, a.document, void 0, i.home_id), await ja(window.indexedDB, {
				origin: n.origin,
				homeId: i.home_id,
				enabled: !1,
				remoteVersion: a.version,
				acknowledgedFingerprint: await Na((await e.read(i.home_id)).metadata, (await e.read(i.home_id)).record)
			}), await t(i.home_id);
		} catch (e) {
			c(e instanceof Error ? e.message : "Could not restore this workspace.");
		} finally {
			u(!1);
		}
	}, p = async (e) => {
		try {
			let t = await r.get(e.home_id);
			if (!t?.document) throw Error("No HA copy exists.");
			P(t.document, `${e.home_id}-ha-recovery.json`);
		} catch (e) {
			c(e instanceof Error ? e.message : "Could not download HA data.");
		}
	};
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "workspace-ha-library-content",
		children: [n.status === "connected" ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
			/* @__PURE__ */ (0, $.jsx)("button", {
				type: "button",
				onClick: () => void d(),
				children: "Refresh"
			}),
			a.length === 0 && !s && /* @__PURE__ */ (0, $.jsx)("p", { children: "No Cabane workspaces saved on this HA instance." }),
			a.map((e) => /* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsx)("span", { children: e.name }), /* @__PURE__ */ (0, $.jsx)("button", {
				type: "button",
				disabled: l,
				onClick: () => void (e.corrupt ? p(e) : f(e)),
				children: e.corrupt ? "Download raw data" : "Load workspace"
			})] }, e.home_id))
		] }) : i ? /* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsx)("p", {
			role: "status",
			children: n.error ?? "Waiting for Home Assistant…"
		}), ["error", "disconnected"].includes(n.status) && /* @__PURE__ */ (0, $.jsx)("button", {
			type: "button",
			onClick: n.retry,
			children: "Retry connection"
		})] }) : /* @__PURE__ */ (0, $.jsx)("button", {
			type: "button",
			onClick: n.connect,
			children: "Sign in to Home Assistant"
		}), s && /* @__PURE__ */ (0, $.jsx)("p", {
			role: "alert",
			children: s
		})]
	});
}
function $a({ repository: e, onRestored: t, initialOrigin: n }) {
	let r = D(), [i, a] = (0, R.useState)(() => window.sessionStorage.getItem("cabane:ha-library-origin") ?? n ?? ""), o = r?.origin ?? _(i);
	return (0, R.useEffect)(() => {
		o && !r && window.sessionStorage.setItem("cabane:ha-library-origin", o);
	}, [o, r]), /* @__PURE__ */ (0, $.jsxs)("section", {
		className: "workspace-ha-library",
		children: [
			r ? /* @__PURE__ */ (0, $.jsxs)("p", { children: [
				"Choose a workspace saved on ",
				r.origin,
				". Sign-in is managed by Home Assistant."
			] }) : /* @__PURE__ */ (0, $.jsx)("p", { children: "Sign in to choose a saved workspace." }),
			!r && /* @__PURE__ */ (0, $.jsxs)("label", { children: ["Home Assistant address", /* @__PURE__ */ (0, $.jsx)("input", {
				value: i,
				onChange: (e) => a(e.target.value),
				placeholder: "Enter HTTPS address"
			})] }),
			o && /* @__PURE__ */ (0, $.jsx)(oe, {
				homeAssistantUrl: o,
				children: /* @__PURE__ */ (0, $.jsx)(Qa, {
					repository: e,
					onRestored: t
				})
			}, o)
		]
	});
}
//#endregion
//#region apps/web/src/workspaces/HomeAssistantPage.tsx
function eo({ record: e, lifecycle: t, origin: n, onChangeOrigin: r, onRecordChange: i, isDemo: a, onCreatePersonal: o }) {
	let s = D(), c = h("cabane-icon.png"), l = F(), u = Ya(), [d, f] = (0, R.useState)(n ?? ""), [p, m] = (0, R.useState)(!n), [g, _] = (0, R.useState)(!1), [v, y] = (0, R.useState)(null), [b, x] = (0, R.useState)(null), S = [
		"authenticating",
		"connecting",
		"reconnecting"
	].includes(l.status), C = l.status === "connected";
	(0, R.useEffect)(() => {
		if (C && !s) try {
			let t = JSON.parse(window.sessionStorage.getItem("cabane:editor-return:v1") ?? "null");
			t?.workspaceId === e.homeId && t?.panel === "home-assistant" && window.sessionStorage.removeItem(A);
		} catch {}
	}, [
		C,
		e.homeId,
		s
	]);
	let w = async (e) => {
		_(!0), y(null), x(null);
		try {
			await e();
		} catch (e) {
			y(e instanceof Error ? e.message : "Please try again.");
		} finally {
			_(!1);
		}
	}, E = M(l, async (t) => {
		await r(t), s || window.sessionStorage.setItem(A, JSON.stringify({
			workspaceId: e.homeId,
			mode: "connect",
			panel: "home-assistant"
		})), m(!1);
	}), O = async () => (await u?.repository.read(e.homeId))?.record ?? e, N = async () => {
		let t = await O();
		P(T({
			name: t.draft.home.name,
			homeAssistantUrl: n,
			hasPublished: t.publishedAt !== 0
		}, t), `${e.homeId}-backup.json`), x("Backup downloaded.");
	}, ee = async (e) => {
		let n = await O(), r = k(n, await e.text(), le);
		if (!window.confirm("Replace this home's draft with the backup? Your current draft will be downloaded first. The published home stays unchanged until you save in the editor.")) return;
		await N();
		let a = await t.autosave(n, r.project, void 0, r.bindings);
		if (a.status === "storage-error") throw a.error;
		if (a.status !== "saved") throw Error("This backup could not be saved. Your draft is unchanged.");
		i(a.record), x("Backup imported into the draft. Open the editor to review and save it.");
	};
	return /* @__PURE__ */ (0, $.jsx)("main", {
		className: "ha-page",
		children: /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "ha-page__content",
			children: [
				/* @__PURE__ */ (0, $.jsxs)("nav", {
					className: "ha-page__nav",
					"aria-label": "Workspace navigation",
					children: [/* @__PURE__ */ (0, $.jsxs)(ea, {
						to: "/workspaces",
						children: [/* @__PURE__ */ (0, $.jsx)(j, { name: "back" }), "Workspaces"]
					}), /* @__PURE__ */ (0, $.jsxs)(ea, {
						to: Q(e.homeId),
						children: ["Open home", /* @__PURE__ */ (0, $.jsx)(j, { name: "chevron" })]
					})]
				}),
				/* @__PURE__ */ (0, $.jsxs)("header", {
					className: "ha-page__header",
					children: [/* @__PURE__ */ (0, $.jsx)("h1", { children: "Home Assistant" }), /* @__PURE__ */ (0, $.jsx)("p", { children: e.draft.home.name })]
				}),
				a ? /* @__PURE__ */ (0, $.jsxs)("section", {
					className: "ha-section",
					children: [
						/* @__PURE__ */ (0, $.jsx)("h2", { children: "Make this home yours" }),
						/* @__PURE__ */ (0, $.jsx)("p", { children: "The demo uses simulated devices. Create your own workspace to connect Home Assistant and save across devices." }),
						/* @__PURE__ */ (0, $.jsxs)("button", {
							className: "ha-primary",
							onClick: o,
							children: ["Create my workspace", /* @__PURE__ */ (0, $.jsx)(j, { name: "chevron" })]
						})
					]
				}) : /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("section", {
					className: "ha-section",
					"aria-labelledby": "ha-connection-title",
					children: [
						/* @__PURE__ */ (0, $.jsxs)("div", {
							className: "ha-section__heading",
							children: [/* @__PURE__ */ (0, $.jsx)("h2", {
								id: "ha-connection-title",
								children: "Connection"
							}), /* @__PURE__ */ (0, $.jsxs)("span", {
								className: `ha-status${C ? " is-connected" : ""}`,
								children: [/* @__PURE__ */ (0, $.jsx)("i", {}), C ? "Connected" : S ? "Connecting…" : n ? "Disconnected" : "Not connected"]
							})]
						}),
						s ? /* @__PURE__ */ (0, $.jsxs)("div", {
							className: "ha-connection-row",
							children: [
								/* @__PURE__ */ (0, $.jsx)("p", { children: "Sign-in is managed by Home Assistant." }),
								/* @__PURE__ */ (0, $.jsx)("p", {
									className: "ha-address",
									children: s.origin
								}),
								n && n !== s.origin && /* @__PURE__ */ (0, $.jsxs)("p", {
									role: "alert",
									children: [
										"This workspace uses a different Home Assistant: ",
										n,
										". Select this instance explicitly; its mappings remain separate."
									]
								}),
								/* @__PURE__ */ (0, $.jsxs)("div", {
									className: "ha-actions",
									children: [
										n !== s.origin && /* @__PURE__ */ (0, $.jsx)("button", {
											className: "ha-primary",
											disabled: g,
											onClick: () => void w(() => r(s.origin)),
											children: "Use this Home Assistant"
										}),
										n === s.origin && ["error", "disconnected"].includes(l.status) && /* @__PURE__ */ (0, $.jsx)("button", {
											disabled: g,
											onClick: l.retry,
											children: "Retry connection"
										}),
										n && /* @__PURE__ */ (0, $.jsx)("button", {
											disabled: g,
											onClick: () => void w(async () => {
												await r(null), await l.disconnect();
											}),
											children: "Disconnect workspace"
										})
									]
								}),
								/* @__PURE__ */ (0, $.jsx)("p", {
									className: "ha-help",
									children: "Disconnecting this workspace keeps you signed in to Home Assistant."
								})
							]
						}) : p ? /* @__PURE__ */ (0, $.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault();
								let t = re(d);
								t.error ? y(t.error) : t.normalized && w(() => E(t.normalized));
							},
							children: [
								/* @__PURE__ */ (0, $.jsx)("label", {
									htmlFor: "ha-address",
									children: "Home Assistant URL"
								}),
								/* @__PURE__ */ (0, $.jsxs)("div", {
									className: "ha-address-form",
									children: [
										/* @__PURE__ */ (0, $.jsx)("input", {
											id: "ha-address",
											type: "url",
											required: !0,
											placeholder: "https://home.example.com",
											autoCapitalize: "none",
											spellCheck: !1,
											value: d,
											disabled: g || S,
											onChange: (e) => f(e.target.value)
										}),
										/* @__PURE__ */ (0, $.jsxs)("button", {
											className: "ha-primary",
											disabled: g || S,
											children: [S ? "Connecting…" : "Connect", /* @__PURE__ */ (0, $.jsx)(j, { name: "external" })]
										}),
										n && /* @__PURE__ */ (0, $.jsx)("button", {
											type: "button",
											disabled: g,
											onClick: () => {
												m(!1), f(n);
											},
											children: "Cancel"
										})
									]
								}),
								/* @__PURE__ */ (0, $.jsx)("p", {
									className: "ha-help",
									children: "Sign in securely on Home Assistant. You’ll return to this page."
								})
							]
						}) : /* @__PURE__ */ (0, $.jsxs)("div", {
							className: "ha-connection-row",
							children: [/* @__PURE__ */ (0, $.jsx)("p", {
								className: "ha-address",
								children: n
							}), /* @__PURE__ */ (0, $.jsxs)("div", {
								className: "ha-actions",
								children: [/* @__PURE__ */ (0, $.jsx)("button", {
									disabled: g || S,
									onClick: () => m(!0),
									children: "Change URL"
								}), C ? /* @__PURE__ */ (0, $.jsx)("button", {
									disabled: g,
									onClick: () => void w(async () => {
										await l.disconnect(), await r(null), f(""), m(!0);
									}),
									children: "Disconnect"
								}) : /* @__PURE__ */ (0, $.jsx)("button", {
									className: "ha-primary",
									disabled: g || S,
									onClick: () => void w(() => E(n)),
									children: "Reconnect"
								})]
							})]
						}),
						l.error && /* @__PURE__ */ (0, $.jsx)("p", {
							role: "alert",
							className: "ha-error",
							children: l.error
						})
					]
				}), /* @__PURE__ */ (0, $.jsx)(Xa, {})] }),
				/* @__PURE__ */ (0, $.jsxs)("section", {
					className: "ha-section",
					"aria-labelledby": "ha-backups-title",
					children: [
						/* @__PURE__ */ (0, $.jsx)("h2", {
							id: "ha-backups-title",
							children: "Backups"
						}),
						/* @__PURE__ */ (0, $.jsx)("p", { children: "Keep a file with your full workspace: design, drafts, and device mappings. Sign-in credentials are never included." }),
						/* @__PURE__ */ (0, $.jsxs)("div", {
							className: "ha-actions",
							children: [/* @__PURE__ */ (0, $.jsxs)("button", {
								disabled: g,
								onClick: () => void w(N),
								children: [/* @__PURE__ */ (0, $.jsx)(j, { name: "export" }), "Export backup"]
							}), /* @__PURE__ */ (0, $.jsxs)("label", {
								className: `ha-file-button${g ? " is-disabled" : ""}`,
								children: [
									/* @__PURE__ */ (0, $.jsx)(j, { name: "import" }),
									"Import backup",
									/* @__PURE__ */ (0, $.jsx)("input", {
										type: "file",
										accept: ".json,application/json",
										disabled: g,
										onChange: (e) => {
											let t = e.target.files?.[0];
											e.target.value = "", t && w(() => ee(t));
										}
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, $.jsx)("p", {
							className: "ha-help",
							children: "Import replaces this home’s draft. Review it in the editor before saving."
						})
					]
				}),
				v && /* @__PURE__ */ (0, $.jsx)("p", {
					role: "alert",
					className: "ha-error",
					children: v
				}),
				b && /* @__PURE__ */ (0, $.jsx)("p", {
					role: "status",
					className: "ha-notice",
					children: b
				}),
				/* @__PURE__ */ (0, $.jsxs)("footer", {
					className: "ha-page__footer",
					children: [
						/* @__PURE__ */ (0, $.jsx)("img", {
							src: c,
							alt: "",
							width: "18",
							height: "22"
						}),
						"Cabane",
						/* @__PURE__ */ (0, $.jsx)("span", { children: "Your home, on your terms." })
					]
				})
			]
		})
	});
}
//#endregion
//#region apps/web/src/RoutedHomeEditor.tsx
var to = (0, R.lazy)(() => import("./assets/HomeEditor-Pz8jXvh_.js").then((e) => ({ default: e.HomeEditor })));
function no({ onClose: e, ...t }) {
	let n = Z(), r = Or(), i = (0, R.useMemo)(() => ({
		...n.state?.editorRequest,
		...Ca(n.pathname)
	}), [n.pathname, n.state]), a = (0, R.useRef)(!1), o = Jr(({ nextLocation: e }) => !a.current && Ea(t.initialRecord.homeId, e.pathname)), s = (e, n = !1) => {
		r(Ta(e, t.initialRecord.homeId), {
			replace: n,
			state: { editorRequest: e }
		});
	};
	return /* @__PURE__ */ (0, $.jsx)(R.Suspense, {
		fallback: /* @__PURE__ */ (0, $.jsx)("main", {
			className: "direction-project-loading",
			children: "Opening the editor…"
		}),
		children: /* @__PURE__ */ (0, $.jsx)(to, {
			...t,
			initialRequest: i,
			onWorkspaces: () => void r("/workspaces"),
			onHomeAssistantSettings: () => void r(`${Q(t.initialRecord.homeId)}/home-assistant`),
			onRecoveryWorkspaces: () => {
				a.current = !0, r("/workspaces");
			},
			navigation: {
				request: i,
				go: s,
				exitRequested: o.state === "blocked"
			},
			onClose: (n, i) => {
				a.current = !0, e(n, i), o.state === "blocked" ? o.proceed() : r(Q(t.initialRecord.homeId));
			}
		})
	});
}
//#endregion
//#region apps/web/src/mobile-editor/MobileEditorPrompt.tsx
var ro = "cabane:mobile-editor-prompt-dismissed", io = "https://cabane.my";
function ao() {
	return window.matchMedia("(max-width: 760px)").matches;
}
function oo() {
	try {
		return window.sessionStorage.getItem(ro) === "true";
	} catch {
		return !1;
	}
}
function so({ workspaceId: e, demoWorkspaceId: t }) {
	let n = Or(), [r] = oa(), [i, a] = (0, R.useState)(""), o = r.get("mode") === "arrange" ? "furnish" : "construct", s = () => {
		try {
			window.sessionStorage.setItem(ro, "true");
		} catch {}
		n(Ta({ mode: o }, e), { replace: !0 });
	}, c = async () => {
		try {
			navigator.share ? (await navigator.share({
				title: "Cabane",
				url: io
			}), a("Link shared.")) : navigator.clipboard?.writeText ? (await navigator.clipboard.writeText(io), a("Link copied. Open it on your other device.")) : a(`Open ${io} on your other device.`);
		} catch (e) {
			if (e instanceof DOMException && e.name === "AbortError") return;
			a(`Sharing was unavailable. Open ${io} on your other device.`);
		}
	};
	return /* @__PURE__ */ (0, $.jsx)("main", {
		className: "mobile-editor-prompt",
		role: "dialog",
		"aria-modal": "true",
		"aria-labelledby": "mobile-editor-title",
		"aria-describedby": "mobile-editor-description",
		children: /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "mobile-editor-prompt__panel",
			children: [
				/* @__PURE__ */ (0, $.jsx)("button", {
					className: "mobile-editor-prompt__close",
					type: "button",
					"aria-label": "Dismiss and build on mobile",
					onClick: s,
					children: "×"
				}),
				/* @__PURE__ */ (0, $.jsxs)("div", {
					className: "mobile-editor-prompt__visual",
					"aria-hidden": "true",
					children: [/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "mobile-editor-prompt__screen",
						children: [
							/* @__PURE__ */ (0, $.jsxs)("div", {
								className: "mobile-editor-prompt__screen-bar",
								children: [
									/* @__PURE__ */ (0, $.jsx)("span", {}),
									/* @__PURE__ */ (0, $.jsx)("span", {}),
									/* @__PURE__ */ (0, $.jsx)("span", {})
								]
							}),
							/* @__PURE__ */ (0, $.jsxs)("div", {
								className: "mobile-editor-prompt__floor",
								children: [
									/* @__PURE__ */ (0, $.jsx)("span", {}),
									/* @__PURE__ */ (0, $.jsx)("span", {}),
									/* @__PURE__ */ (0, $.jsx)("span", {}),
									/* @__PURE__ */ (0, $.jsx)("span", {})
								]
							}),
							/* @__PURE__ */ (0, $.jsxs)("div", {
								className: "mobile-editor-prompt__screen-rail",
								children: [
									/* @__PURE__ */ (0, $.jsx)("span", {}),
									/* @__PURE__ */ (0, $.jsx)("span", {}),
									/* @__PURE__ */ (0, $.jsx)("span", {})
								]
							})
						]
					}), /* @__PURE__ */ (0, $.jsx)("div", {
						className: "mobile-editor-prompt__phone",
						children: /* @__PURE__ */ (0, $.jsxs)("div", {
							className: "mobile-editor-prompt__phone-plan",
							children: [/* @__PURE__ */ (0, $.jsx)("span", {}), /* @__PURE__ */ (0, $.jsx)("span", {})]
						})
					})]
				}),
				/* @__PURE__ */ (0, $.jsxs)("div", {
					className: "mobile-editor-prompt__content",
					children: [
						/* @__PURE__ */ (0, $.jsx)("h1", {
							id: "mobile-editor-title",
							children: "Make room for the bigger picture."
						}),
						/* @__PURE__ */ (0, $.jsx)("p", {
							id: "mobile-editor-description",
							children: "Construct and Arrange work best on a desktop, where there’s space to shape every detail of your home."
						}),
						/* @__PURE__ */ (0, $.jsxs)("div", {
							className: "mobile-editor-prompt__actions",
							children: [
								/* @__PURE__ */ (0, $.jsxs)("button", {
									type: "button",
									className: "mobile-editor-prompt__demo",
									disabled: !t,
									onClick: () => {
										t && n("/demo");
									},
									children: [/* @__PURE__ */ (0, $.jsx)("span", { children: "Explore the demo" }), /* @__PURE__ */ (0, $.jsx)("small", { children: "See what Cabane can look like. Try turning your phone sideways!" })]
								}),
								/* @__PURE__ */ (0, $.jsx)("button", {
									type: "button",
									className: "mobile-editor-prompt__share",
									onClick: () => void c(),
									children: "Share to my other device"
								}),
								/* @__PURE__ */ (0, $.jsx)("button", {
									type: "button",
									className: "mobile-editor-prompt__continue",
									onClick: s,
									children: "Build on mobile anyway"
								})
							]
						}),
						!t && /* @__PURE__ */ (0, $.jsx)("p", {
							className: "mobile-editor-prompt__note",
							children: "The demo home is no longer in this browser."
						}),
						i && /* @__PURE__ */ (0, $.jsx)("p", {
							className: "mobile-editor-prompt__status",
							role: "status",
							children: i
						})
					]
				})
			]
		})
	});
}
//#endregion
//#region apps/web/src/ConnectedProduct.tsx
function co({ record: e, lifecycle: t, homeAssistantUrl: n, onHomeAssistantUrlChange: r, recoveryMessage: a, recoveryRaw: o, initialRequest: s, onboarding: l, demoWorkspaceId: u }) {
	let [d, f] = (0, R.useState)(e), p = (0, R.useMemo)(() => d.publishedAt === 0 ? null : ue(d.published), [d.published, d.publishedAt]), [m, h] = (0, R.useState)({
		message: a,
		raw: o
	}), [g, _] = (0, R.useState)(null), [v, x] = (0, R.useState)(!1), S = Or(), C = Z(), w = D(), [E] = (0, R.useState)(() => s ?? (w ? null : te(e.homeId)));
	(0, R.useEffect)(() => {
		E && (S(`${Ta(E, d.homeId)}${C.search}`, {
			replace: !0,
			state: { editorRequest: E }
		}), window.sessionStorage.removeItem(A));
	}, []);
	let O = (e) => {
		let t = (e.mode === "construct" || e.mode === "furnish") && !e.panel && ao() && !oo() ? Sa(d.homeId, e.mode) : Ta(e, d.homeId);
		S(t, { state: { editorRequest: e } });
	}, k = n ? b(n) : null, j = (0, R.useMemo)(() => ({
		profile: (k ? d.bindings[k]?.published : void 0) ?? ae(d.homeId),
		loaded: !0,
		hasStoredProfile: !!(k && d.bindings[k]),
		save: () => void 0
	}), [k, d]), M = /* @__PURE__ */ (0, $.jsx)(no, {
		initialRecord: d,
		lifecycle: t,
		recoveryMessage: m.message,
		recoveryRaw: m.raw,
		homeAssistantUrl: n,
		onPrepareOrigin: async (e, t) => {
			let n = await r(t, e) ?? e;
			return f(n), n;
		},
		onClose: (e, t) => {
			h({
				message: void 0,
				raw: void 0
			}), f(e), x(t === "applied"), window.sessionStorage.removeItem(A);
		}
	}), N = d.publishedAt === 0 ? /* @__PURE__ */ (0, $.jsx)(di, {
		to: Ta({ mode: "construct" }, d.homeId),
		replace: !0
	}) : /* @__PURE__ */ (0, $.jsx)(ne, { children: /* @__PURE__ */ (0, $.jsx)(c, {
		manifest: p,
		architectureModels: ie,
		onboarding: l,
		deviceModels: i,
		homeAssistantUrl: n,
		onHomeAssistantUrlChange: (e) => {
			_(null), Promise.resolve().then(() => r(e, d)).then((e) => {
				e && f(e);
			}).catch((e) => _(e instanceof Error ? e.message : "Connection settings could not be saved."));
		},
		onHomeAssistantSettings: () => void S(`${Q(d.homeId)}/home-assistant`),
		onWorkspaces: () => void S("/workspaces"),
		renderActionBarDeviceIcon: (e) => /* @__PURE__ */ (0, $.jsx)(I, {
			modelId: e,
			models: i
		}),
		bindingManager: j,
		constructionApplied: v,
		onEditHome: (e = "construct") => O({ mode: e }),
		onCustomizeActionBar: () => O({
			mode: "construct",
			panel: "action-bar"
		}),
		onOpenConnect: (e, t) => O({
			mode: "connect",
			view: e,
			roomId: t
		}),
		onExportBrowserData: () => P(T({
			name: d.draft.home.name,
			homeAssistantUrl: n,
			hasPublished: d.publishedAt !== 0
		}, d), `${d.homeId}-private-workspace.json`)
	}) });
	return /* @__PURE__ */ (0, $.jsxs)(y, { children: [g && /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "workspace-connection-error",
		role: "alert",
		children: [g, /* @__PURE__ */ (0, $.jsx)("button", {
			type: "button",
			onClick: () => _(null),
			children: "Dismiss"
		})]
	}), /* @__PURE__ */ (0, $.jsxs)(mi, { children: [
		/* @__PURE__ */ (0, $.jsx)(fi, {
			path: "/welcome",
			element: N
		}),
		/* @__PURE__ */ (0, $.jsx)(fi, {
			path: "/demo",
			element: N
		}),
		/* @__PURE__ */ (0, $.jsx)(fi, {
			path: "/workspaces/:workspaceId",
			element: N
		}),
		/* @__PURE__ */ (0, $.jsx)(fi, {
			path: "/workspaces/:workspaceId/home-assistant",
			element: /* @__PURE__ */ (0, $.jsx)(eo, {
				record: d,
				lifecycle: t,
				origin: n,
				onChangeOrigin: async (e) => {
					let t = await r(e, d);
					t && f(t);
				},
				onRecordChange: f,
				isDemo: l?.isDemo ?? !1,
				onCreatePersonal: () => l?.start("connect")
			})
		}),
		/* @__PURE__ */ (0, $.jsx)(fi, {
			path: "/workspaces/:workspaceId/mobile-editor",
			element: /* @__PURE__ */ (0, $.jsx)(so, {
				workspaceId: d.homeId,
				demoWorkspaceId: u
			})
		}),
		xa.map(({ path: e, handle: t }) => /* @__PURE__ */ (0, $.jsx)(fi, {
			path: e,
			element: (t.mode === "construct" || t.mode === "furnish") && !t.panel && ao() && !oo() ? e === "/build" ? /* @__PURE__ */ (0, $.jsx)(so, {
				workspaceId: d.homeId,
				demoWorkspaceId: u
			}) : /* @__PURE__ */ (0, $.jsx)(di, {
				to: Sa(d.homeId, t.mode),
				replace: !0
			}) : M
		}, e)),
		/* @__PURE__ */ (0, $.jsx)(fi, {
			path: "*",
			element: /* @__PURE__ */ (0, $.jsx)(di, {
				to: Q(d.homeId),
				replace: !0
			})
		})
	] })] }, d.homeId);
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceHost.tsx
function lo({ id: e, repository: t, onboarding: n, demoWorkspaceId: r }) {
	let i = Z(), a = Or(), o = (0, R.useCallback)((t) => va(e, t), [e]), s = n.state?.demoWorkspaceId === e, [c] = (0, R.useState)(() => O(window.indexedDB, e)), [l, d] = (0, R.useState)(null), [f, p] = (0, R.useState)(null);
	return (0, R.useEffect)(() => {
		let n = !0;
		return t.read(e).then(async (t) => {
			let r = t?.record ? {
				status: "ready",
				record: t.record
			} : await c.load();
			if (n) {
				if (!t) {
					p("This workspace no longer exists.");
					return;
				}
				ga(e), d({
					record: r.record,
					metadata: t.metadata,
					...r.status === "recovery" ? {
						recoveryMessage: r.reason,
						recoveryRaw: r.raw
					} : {}
				});
			}
		}).catch((e) => {
			n && p(e instanceof Error ? e.message : "Could not load this home.");
		}), () => {
			n = !1;
		};
	}, [
		e,
		c,
		t
	]), (0, R.useEffect)(() => {
		let n = !0, r = () => {
			t.read(e).then((e) => {
				n && (e ? l && e.metadata.homeAssistantUrl !== l.metadata.homeAssistantUrl && p("This workspace's connection changed in another tab. Reopen it from Workspaces.") : p("This workspace was deleted in another tab."));
			}).catch(() => {
				n && p("Could not verify this workspace. Reopen it from Workspaces.");
			});
		};
		return window.addEventListener("focus", r), () => {
			n = !1, window.removeEventListener("focus", r);
		};
	}, [
		e,
		t,
		l?.metadata.homeAssistantUrl
	]), f ? /* @__PURE__ */ (0, $.jsxs)("main", {
		className: "direction-project-loading is-error",
		children: [
			/* @__PURE__ */ (0, $.jsx)("strong", { children: "Could not open this workspace." }),
			/* @__PURE__ */ (0, $.jsx)("p", { children: f }),
			/* @__PURE__ */ (0, $.jsx)(ea, {
				to: "/workspaces",
				children: "Workspaces"
			})
		]
	}) : l ? /* @__PURE__ */ (0, $.jsx)(u.Provider, {
		value: o,
		children: /* @__PURE__ */ (0, $.jsx)(oe, {
			hostSession: s ? null : void 0,
			homeAssistantUrl: s ? null : l.metadata.homeAssistantUrl,
			children: /* @__PURE__ */ (0, $.jsx)(Ja, {
				id: e,
				origin: l.metadata.homeAssistantUrl,
				repository: t,
				hidden: s,
				children: /* @__PURE__ */ (0, $.jsx)(co, {
					demoWorkspaceId: r,
					onboarding: {
						isDemo: s,
						welcome: s && i.pathname === "/welcome",
						nudgeDismissed: n.state?.nudgeDismissed ?? !0,
						busy: n.busy,
						start: n.start,
						dismiss: async (e) => {
							e === "welcome" && a("/demo"), await n.dismiss(e);
						},
						openWelcome: () => void a("/welcome"),
						links: ba
					},
					record: l.record,
					lifecycle: c,
					recoveryMessage: l.recoveryMessage,
					recoveryRaw: l.recoveryRaw,
					homeAssistantUrl: l.metadata.homeAssistantUrl,
					onHomeAssistantUrlChange: async (n, r) => {
						let i = await t.setConnection(e, (r ?? l.record).revision, n);
						if (!i.record) throw Error("Could not save the connection.");
						return d((e) => e && {
							...e,
							metadata: i.metadata,
							record: i.record
						}), i.record;
					}
				})
			})
		})
	}) : /* @__PURE__ */ (0, $.jsx)("main", {
		className: "direction-project-loading",
		children: "Loading your home…"
	});
}
//#endregion
//#region apps/web/src/workspaces/BuildWorkspaceEntry.tsx
function uo({ onboarding: e }) {
	let t = (0, R.useRef)(!1);
	return (0, R.useEffect)(() => {
		t.current || (t.current = !0, e.start("build"));
	}, [e.start]), /* @__PURE__ */ (0, $.jsx)("main", {
		className: "direction-project-loading",
		children: e.error ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
			/* @__PURE__ */ (0, $.jsx)("strong", { children: "Could not start your home." }),
			/* @__PURE__ */ (0, $.jsx)("p", { children: e.error }),
			/* @__PURE__ */ (0, $.jsx)("button", {
				disabled: e.busy,
				onClick: () => void e.start("build"),
				children: "Try again"
			}),
			/* @__PURE__ */ (0, $.jsx)(ea, {
				to: "/workspaces",
				children: "Workspaces"
			})
		] }) : "Opening your home…"
	});
}
//#endregion
//#region apps/web/src/workspaces/migrate-single-home-storage.ts
var fo = "cabane:ha-url:v1", po = "cabane:ha-auth:v1";
function mo(e) {
	return _(e.getItem(fo));
}
async function ho(e, t, n) {
	if (await e.migrationDone()) return;
	let r = await e.read(t);
	if (r?.error) return;
	let i = mo(n);
	r?.record && i && !r.metadata.homeAssistantUrl && (r = await e.setConnection(t, r.record.revision, i)), r?.record && i && await v(r.record, i);
	let a = n.getItem(po);
	if (a) {
		let e = JSON.parse(a), t = _(e.hassUrl);
		if (!t || !e.clientId) throw Error("The saved Home Assistant sign-in needs recovery.");
		let r = d(t, e.clientId);
		if (n.getItem(r) === null && n.setItem(r, a), !p(n, t, e.clientId)) throw Error("Could not preserve the saved Home Assistant sign-in.");
	}
	n.removeItem(po), n.removeItem(fo), r?.record && i && (n.removeItem(C(i, t)), n.removeItem(f(i, t))), await e.finishMigration();
}
//#endregion
//#region apps/web/src/workspaces/initialize-workspaces.ts
async function go(e, t, { skipLegacyMigration: n = !1 } = {}) {
	let r = l(e, le), i, a = null;
	try {
		!n && !await r.migrationDone() && (a = mo(t));
	} catch (e) {
		i = e instanceof Error ? e.message : "Saved connection data needs recovery.";
	}
	let o = {
		...s,
		home: {
			...s.home,
			name: "Demo home"
		}
	};
	await r.initialize(o, a);
	try {
		n || await ho(r, s.home.id, t);
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
function _o() {
	let e = Z(), n = D(), r = Or(), [i, o] = (0, R.useState)(null), s = Oa(i), [c, l] = (0, R.useState)(null), [u, d] = (0, R.useState)(null), [f, p] = (0, R.useState)(), [h] = (0, R.useState)(() => n ? null : te());
	(0, R.useEffect)(() => {
		let e = !0;
		return go(window.indexedDB, window.localStorage, { skipLegacyMigration: !!n }).then(async (t) => {
			let n = await t.repository.list();
			e && (o(t.repository), l(n), p(t.migrationError));
		}).catch((t) => {
			e && d(t instanceof Error ? t.message : "Browser storage is unavailable.");
		}), () => {
			e = !1;
		};
	}, []);
	let g = (0, R.useCallback)(async () => {
		i && l(await i.list());
	}, [i]);
	if ((0, R.useEffect)(() => {
		if (e.pathname !== "/" && e.pathname !== "/workspaces") return;
		let t = () => {
			g().catch((e) => d(String(e)));
		};
		return t(), window.addEventListener("focus", t), () => window.removeEventListener("focus", t);
	}, [g, e.pathname]), u) return /* @__PURE__ */ (0, $.jsxs)("main", {
		className: "direction-project-loading is-error",
		children: [
			/* @__PURE__ */ (0, $.jsx)("strong", { children: "Could not load your workspaces." }),
			/* @__PURE__ */ (0, $.jsx)("p", { children: u }),
			/* @__PURE__ */ (0, $.jsx)("button", {
				onClick: () => window.location.reload(),
				children: "Try again"
			})
		]
	});
	if (!i || !c) return /* @__PURE__ */ (0, $.jsx)("main", {
		className: "direction-project-loading",
		children: "Loading your workspaces…"
	});
	let _ = !n && e.pathname !== "/workspaces" && new URLSearchParams(e.search).has("auth_callback"), v = _ ? h : null;
	if (_) {
		if (!v || !c.some((e) => e.metadata.id === v.workspaceId)) return /* @__PURE__ */ (0, $.jsxs)("main", {
			className: "direction-project-loading is-error",
			children: [
				/* @__PURE__ */ (0, $.jsx)("strong", { children: "This sign-in no longer has a workspace." }),
				/* @__PURE__ */ (0, $.jsx)("p", { children: "Open the intended workspace and sign in again." }),
				/* @__PURE__ */ (0, $.jsx)("button", {
					onClick: () => void r("/workspaces", { replace: !0 }),
					children: "Workspaces"
				})
			]
		});
		if (wa(e.pathname) !== v.workspaceId) return /* @__PURE__ */ (0, $.jsx)(di, {
			to: `${Q(v.workspaceId)}${e.search}`,
			replace: !0
		});
	}
	if (e.pathname === "/") {
		if (!s.loaded) return /* @__PURE__ */ (0, $.jsx)("main", {
			className: "direction-project-loading",
			children: "Loading your home…"
		});
		let e = c.find((e) => e.metadata.id === ha()) ?? (c.length === 1 ? c[0] : void 0);
		return e && s.state && e.metadata.id === s.state.demoWorkspaceId ? /* @__PURE__ */ (0, $.jsx)(di, {
			to: s.state.welcomeDismissed ? "/demo" : "/welcome",
			replace: !0
		}) : /* @__PURE__ */ (0, $.jsx)(di, {
			to: e ? Q(e.metadata.id) : "/workspaces",
			replace: !0
		});
	}
	let y = e.pathname === "/welcome" || e.pathname === "/demo", b = e.pathname === "/build";
	if ((y || b) && !s.loaded) return /* @__PURE__ */ (0, $.jsx)("main", {
		className: "direction-project-loading",
		children: "Loading your home…"
	});
	if (y && !c.some((e) => e.metadata.id === s.state?.demoWorkspaceId)) return /* @__PURE__ */ (0, $.jsxs)("main", {
		className: "direction-project-loading is-error",
		children: [/* @__PURE__ */ (0, $.jsx)("strong", { children: "The demo home is no longer in this browser." }), /* @__PURE__ */ (0, $.jsx)(ea, {
			to: "/workspaces",
			children: "Workspaces"
		})]
	});
	if (b && !s.state?.destinations.build) return /* @__PURE__ */ (0, $.jsx)(uo, { onboarding: s });
	let x = y ? s.state?.demoWorkspaceId : b ? s.state?.destinations.build : wa(e.pathname);
	if (x) return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [s.error && /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "workspace-connection-error",
		role: "alert",
		children: [
			s.error,
			s.deleted && /* @__PURE__ */ (0, $.jsx)("button", {
				disabled: s.busy,
				onClick: () => void s.start(s.deleted.path, s.deleted.id),
				children: "Create a new home"
			}),
			/* @__PURE__ */ (0, $.jsx)("button", {
				onClick: () => void r("/workspaces"),
				children: "Workspaces"
			}),
			/* @__PURE__ */ (0, $.jsx)("button", {
				onClick: s.clearError,
				children: "Dismiss"
			})
		]
	}), s.loaded ? /* @__PURE__ */ (0, $.jsx)(lo, {
		id: x,
		repository: i,
		onboarding: s,
		demoWorkspaceId: c.some((e) => e.metadata.id === s.state?.demoWorkspaceId) ? s.state?.demoWorkspaceId ?? null : null
	}, x) : /* @__PURE__ */ (0, $.jsx)("main", {
		className: "direction-project-loading",
		children: "Loading your home…"
	})] });
	if (e.pathname !== "/workspaces") return /* @__PURE__ */ (0, $.jsx)(di, {
		to: "/",
		replace: !0
	});
	let S = (e) => {
		let t = c.find((t) => t.metadata.id === e);
		if (!t) throw Error("Workspace no longer exists. Refresh the library.");
		return t;
	}, C = (e) => {
		let t = S(e);
		if (!t.record) throw Error(t.error ?? "This home needs recovery.");
		return t.record;
	}, w = async (e) => {
		await r(Q(e));
	};
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [f && /* @__PURE__ */ (0, $.jsxs)("p", {
		role: "alert",
		className: "workspace-error",
		children: [f, " Your saved source data has been retained."]
	}), /* @__PURE__ */ (0, $.jsx)(za, {
		onSettings: async (e) => {
			await r(`${Q(e)}/home-assistant`);
		},
		entries: c,
		onOpen: w,
		onRecover: w,
		onCreate: async (e) => {
			let t = await i.createBlank(e);
			a(t.metadata.id), await g(), await w(t.metadata.id);
		},
		onRename: async (e, t) => {
			await i.rename(e, C(e).revision, t), await g();
		},
		onDuplicate: async (e, t) => {
			await i.duplicate(e, C(e).revision, t), await g();
		},
		onDelete: async (e) => {
			let n = S(e), r = await i.readRaw(e);
			if (n.record && (await i.read(e))?.record?.revision !== n.record.revision) throw Error("This workspace changed. Refresh before deleting it.");
			await i.delete(e, r), ya(e), m(e);
			try {
				window.localStorage.removeItem(t(e));
			} catch {}
			await g();
		},
		onImport: async (e) => {
			let t = ce(e, le), n = await i.create(t.record, t);
			await g(), await w(n.metadata.id);
		},
		onExport: async (e, t) => {
			let n = S(e), r = C(e);
			P(t ? T(n.metadata, r) : se(r.draft), `${e}-${t ? "backup" : "project"}.json`);
		},
		onExportRaw: async (e) => {
			let t = await i.readRaw(e);
			if (t === null) throw Error("No saved record exists.");
			P(t, `${e}-recovery.json`);
		},
		remoteImport: /* @__PURE__ */ (0, $.jsx)($a, {
			repository: i,
			onRestored: async (e) => {
				await g(), await w(e);
			},
			initialOrigin: c.find((e) => e.metadata.homeAssistantUrl)?.metadata.homeAssistantUrl ?? null
		})
	})] });
}
//#endregion
//#region apps/web/src/panel/panel-element.ts
var vo = /* @__PURE__ */ new WeakMap();
function yo(e, t) {
	let n = vo.get(e);
	n || vo.set(e, n = /* @__PURE__ */ new Map());
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
function bo(e) {
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
			this.ownerDocument.defaultView?.addEventListener("resize", this.#c), this.#r ??= yo(this.ownerDocument, new URL("cabane-fonts.css", e.assetBaseUrl).href), typeof ResizeObserver < "u" && (this.#n = new ResizeObserver(() => this.#l()), this.#n.observe(this.#i)), this.#l(), this.#u();
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
var xo = new URL(
	/* @vite-ignore */
	"./",
	import.meta.url
).href;
customElements.get("cabane-panel") || customElements.define("cabane-panel", bo({
	assetBaseUrl: xo,
	mount({ container: e, portalContainer: t, root: n, session: r }) {
		let i = (0, fa.createRoot)(e), a = ai([{
			path: "*",
			element: /* @__PURE__ */ (0, $.jsx)(_o, {})
		}], { initialEntries: ["/"] }), s = {
			root: n,
			container: e,
			portalContainer: t,
			eventTarget: n,
			assetBaseUrl: xo
		}, c = (e) => i.render(/* @__PURE__ */ (0, $.jsx)(R.StrictMode, { children: /* @__PURE__ */ (0, $.jsx)(o, {
			environment: s,
			children: /* @__PURE__ */ (0, $.jsx)(N, {
				session: e,
				children: /* @__PURE__ */ (0, $.jsx)(si, { router: a })
			})
		}) }));
		return c(r), {
			update: c,
			dispose() {
				i.unmount(), a.dispose();
			}
		};
	}
}));
//#endregion
