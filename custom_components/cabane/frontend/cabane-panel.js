import { r as e } from "./assets/rolldown-runtime-B0aSnxlc.js";
import { $n as t, A as n, At as r, Bi as i, Bn as a, Dt as o, Et as s, I as c, Jn as l, Jt as u, Kn as d, L as f, Li as p, M as m, N as h, Ot as g, Pi as _, Qn as v, R as y, Tt as b, Un as x, V as S, Wt as C, Yn as w, Yt as T, Zn as E, Zt as D, an as O, bn as k, cr as A, h as j, j as M, kt as N, lr as ee, s as P, sr as te, ur as F, v as I, z as L, zi as ne, zt as re } from "./assets/LaserIcon-InPSXJpx.js";
import { A as ie, B as R, C as ae, D as oe, E as z, F as se, H as ce, I as B, N as le, O as ue, P as de, R as V, T as fe, d as pe, f as me, h as he, j as ge, l as _e, m as ve, n as ye, o as be, p as xe, t as Se, y as Ce, z as we } from "./assets/ShortcutDeviceIcon-CC_78COr.js";
//#region node_modules/react-router/dist/development/chunk-BV7QT456.mjs
var H = /* @__PURE__ */ e(i(), 1), Te = (e) => {
	throw TypeError(e);
}, Ee = (e, t, n) => t.has(e) || Te("Cannot " + n), U = (e, t, n) => (Ee(e, t, "read from private field"), n ? n.call(e) : t.get(e)), W = (e, t, n) => t.has(e) ? Te("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), De = (e, t, n, r) => (Ee(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Oe = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i, ke = /^[\\/]{2}/;
function Ae(e, t) {
	return t + e.replace(/\\/g, "/");
}
function je(e) {
	return typeof e == "object" && !!e && "pathname" in e && "search" in e && "hash" in e && "state" in e && "key" in e;
}
function Me(e = {}) {
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
		let a = Pe(i ? l().pathname : "/", e, t, n, r);
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
			let t = typeof e == "string" ? Fe(e) : e;
			return {
				pathname: t.pathname || "",
				search: t.search || "",
				hash: t.hash || ""
			};
		},
		push(e, t) {
			o = "PUSH";
			let n = je(e) ? e : u(e, t);
			a += 1, i.splice(a, i.length, n), r && s && s({
				action: o,
				location: n,
				delta: 1
			});
		},
		replace(e, t) {
			o = "REPLACE";
			let n = je(e) ? e : u(e, t);
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
function Ne() {
	return Math.random().toString(36).substring(2, 10);
}
function Pe(e, t, n = null, r, i) {
	return {
		pathname: typeof e == "string" ? e : e.pathname,
		search: "",
		hash: "",
		...typeof t == "string" ? Fe(t) : t,
		state: n,
		key: t && t.key || r || Ne(),
		mask: i
	};
}
function q({ pathname: e = "/", search: t = "", hash: n = "" }) {
	return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n), e;
}
function Fe(e) {
	let t = {};
	if (e) {
		let n = e.indexOf("#");
		n >= 0 && (t.hash = e.substring(n), e = e.substring(0, n));
		let r = e.indexOf("?");
		r >= 0 && (t.search = e.substring(r), e = e.substring(0, r)), e && (t.pathname = e);
	}
	return t;
}
function Ie(e, t, n = !1) {
	let r = "http://localhost";
	e && (r = e.location.origin === "null" ? e.location.href : e.location.origin), G(r, "No window.location.(origin|href) available to create URL");
	let i = typeof t == "string" ? t : q(t);
	return i = i.replace(/ $/, "%20"), !n && ke.test(i) && (i = r + i), new URL(i, r);
}
var Le, Re = class {
	constructor(e) {
		if (W(this, Le, /* @__PURE__ */ new Map()), e) for (let [t, n] of e) this.set(t, n);
	}
	get(e) {
		if (U(this, Le).has(e)) return U(this, Le).get(e);
		if (e.defaultValue !== void 0) return e.defaultValue;
		throw Error("No value found for context");
	}
	set(e, t) {
		U(this, Le).set(e, t);
	}
};
Le = /* @__PURE__ */ new WeakMap();
var ze = /* @__PURE__ */ new Set([
	"lazy",
	"caseSensitive",
	"path",
	"id",
	"index",
	"children"
]);
function Be(e) {
	return ze.has(e);
}
var Ve = /* @__PURE__ */ new Set([
	"lazy",
	"caseSensitive",
	"path",
	"id",
	"index",
	"middleware",
	"children"
]);
function He(e) {
	return Ve.has(e);
}
function Ue(e) {
	return e.index === !0;
}
function We(e, t, n = [], r = {}, i = !1) {
	return e.map((e, a) => {
		let o = [...n, String(a)], s = typeof e.id == "string" ? e.id : o.join("-");
		if (G(e.index !== !0 || !e.children, "Cannot specify children on an index route"), G(i || !r[s], `Found a route id collision on id "${s}".  Route id's must be globally unique within Data Router usages`), Ue(e)) {
			let n = {
				...e,
				id: s
			};
			return r[s] = Ge(n, t(n)), n;
		}
		{
			let n = {
				...e,
				id: s,
				children: void 0
			};
			return r[s] = Ge(n, t(n)), e.children && (n.children = We(e.children, t, o, r, i)), n;
		}
	});
}
function Ge(e, t) {
	return Object.assign(e, {
		...t,
		...typeof t.lazy == "object" && t.lazy != null ? { lazy: {
			...e.lazy,
			...t.lazy
		} } : {}
	});
}
function Ke(e, t, n = "/") {
	return qe(e, t, n, !1);
}
function qe(e, t, n, r, i) {
	let a = J((typeof t == "string" ? Fe(t) : t).pathname || "/", n);
	if (a == null) return null;
	let o = i ?? Ye(e), s = null, c = ft(a);
	for (let e = 0; s == null && e < o.length; ++e) s = ct(o[e], c, r);
	return s;
}
function Je(e, t) {
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
function Ye(e) {
	let t = Xe(e);
	return Qe(t), t;
}
function Xe(e, t = [], n = [], r = "", i = !1) {
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
		let l = St([r, c.relativePath]), u = n.concat(c);
		e.children && e.children.length > 0 && (G(e.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${l}".`), Xe(e.children, t, u, l, o)), !(e.path == null && !e.index) && t.push({
			path: l,
			score: ot(l, e.index),
			routesMeta: u.map((e, t) => {
				let [n, r] = dt(e.relativePath, e.caseSensitive, t === u.length - 1);
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
		else for (let n of Ze(e.path)) a(e, t, !0, n);
	}), t;
}
function Ze(e) {
	let t = e.split("/");
	if (t.length === 0) return [];
	let [n, ...r] = t, i = n.endsWith("?"), a = n.replace(/\?$/, "");
	if (r.length === 0) return i ? [a, ""] : [a];
	let o = Ze(r.join("/")), s = [];
	return s.push(...o.map((e) => e === "" ? a : [a, e].join("/"))), i && s.push(...o), s.map((t) => e.startsWith("/") && t === "" ? "/" : t);
}
function Qe(e) {
	e.sort((e, t) => e.score === t.score ? st(e.routesMeta.map((e) => e.childrenIndex), t.routesMeta.map((e) => e.childrenIndex)) : t.score - e.score);
}
var $e = /^:[\w-]+$/, et = 3, tt = 2, nt = 1, rt = 10, it = -2, at = (e) => e === "*";
function ot(e, t) {
	let n = e.split("/"), r = n.length;
	return n.some(at) && (r += it), t && (r += tt), n.filter((e) => !at(e)).reduce((e, t) => e + ($e.test(t) ? et : t === "" ? nt : rt), r);
}
function st(e, t) {
	return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function ct(e, t, n = !1) {
	let { routesMeta: r } = e, i = {}, a = "/", o = [];
	for (let e = 0; e < r.length; ++e) {
		let s = r[e], c = e === r.length - 1, l = a === "/" ? t : t.slice(a.length) || "/", u = {
			path: s.relativePath,
			caseSensitive: s.caseSensitive,
			end: c
		}, d = s.matcher && s.compiledParams ? ut(u, l, s.matcher, s.compiledParams) : lt(u, l), f = s.route;
		if (!d && c && n && !r[r.length - 1].route.index && (d = lt({
			path: s.relativePath,
			caseSensitive: s.caseSensitive,
			end: !1
		}, l)), !d) return null;
		Object.assign(i, d.params), o.push({
			params: i,
			pathname: St([a, d.pathname]),
			pathnameBase: wt(St([a, d.pathnameBase])),
			route: f
		}), d.pathnameBase !== "/" && (a = St([a, d.pathnameBase]));
	}
	return o;
}
function lt(e, t) {
	typeof e == "string" && (e = {
		path: e,
		caseSensitive: !1,
		end: !0
	});
	let [n, r] = dt(e.path, e.caseSensitive, e.end);
	return ut(e, t, n, r);
}
function ut(e, t, n, r) {
	let i = t.match(n);
	if (!i) return null;
	let a = i[0], o = Ct(a, 1), s = i.slice(1);
	return {
		params: r.reduce((e, { paramName: t, isOptional: n }, r) => {
			if (t === "*") {
				let e = s[r] || "";
				o = Ct(a.slice(0, a.length - e.length), 1);
			}
			let i = s[r];
			return e[t] = n && !i ? void 0 : (i || "").replace(/%2F/g, "/"), e;
		}, {}),
		pathname: a,
		pathnameBase: o,
		pattern: e
	};
}
function dt(e, t = !1, n = !0) {
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
function ft(e) {
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
function pt({ basename: e, pathname: t }) {
	return t === "/" ? e : St([e, t]);
}
var mt = (e) => Oe.test(e);
function ht(e, t = "/") {
	let { pathname: n, search: r = "", hash: i = "" } = typeof e == "string" ? Fe(e) : e, a;
	return n ? (n = xt(n), a = n.startsWith("/") || n.startsWith("\\") ? gt(n.substring(1), "/") : gt(n, t)) : a = t, {
		pathname: a,
		search: Tt(r),
		hash: Et(i)
	};
}
function gt(e, t) {
	let n = Ct(t).split("/");
	return e.split("/").forEach((e) => {
		e === ".." ? n.length > 1 && n.pop() : e !== "." && n.push(e);
	}), n.length > 1 ? n.join("/") : "/";
}
function _t(e, t, n, r) {
	return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function vt(e) {
	return e.filter((e, t) => t === 0 || e.route.path && e.route.path.length > 0);
}
function yt(e) {
	let t = vt(e);
	return t.map((e, n) => n === t.length - 1 ? e.pathname : e.pathnameBase);
}
function bt(e, t, n, r = !1) {
	let i;
	typeof e == "string" ? i = Fe(e) : (i = { ...e }, G(!i.pathname || !i.pathname.includes("?"), _t("?", "pathname", "search", i)), G(!i.pathname || !i.pathname.includes("#"), _t("#", "pathname", "hash", i)), G(!i.search || !i.search.includes("#"), _t("#", "search", "hash", i)));
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
	let c = ht(i, s), l = o && o !== "/" && o.endsWith("/"), u = (a || o === ".") && n.endsWith("/");
	return !c.pathname.endsWith("/") && (l || u) && (c.pathname += "/"), c;
}
var xt = (e) => e.replace(/[\\/]{2,}/g, "/"), St = (e) => xt(e.join("/"));
function Ct(e, t = 0) {
	let n = e.length;
	for (; n > t && e.charCodeAt(n - 1) === 47;) n--;
	return n === e.length ? e : e.slice(0, n);
}
var wt = (e) => Ct(e).replace(/^\/*/, "/"), Tt = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Et = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, Dt = class {
	constructor(e, t, n, r = !1) {
		this.status = e, this.statusText = t || "", this.internal = r, n instanceof Error ? (this.data = n.toString(), this.error = n) : this.data = n;
	}
};
function Ot(e) {
	return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
function kt(e) {
	return St(e.map((e) => e.route.path).filter(Boolean)) || "/";
}
var At = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function jt(e, t) {
	let n = e;
	if (typeof n != "string" || !Oe.test(n)) return {
		absoluteURL: void 0,
		isExternal: !1,
		to: n
	};
	let r = n, i = !1;
	if (At) try {
		let e = new URL(window.location.href), r = ke.test(n) ? new URL(Ae(n, e.protocol)) : new URL(n), a = J(r.pathname, t);
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
var Mt = Symbol("Uninstrumented");
function Nt(e, t) {
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
		let e = Ft(n.lazy, t.lazy, () => void 0);
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
				let e = Ft(a, i, () => void 0);
				e && (r.lazy = Object.assign(r.lazy || {}, { [t]: e }));
			}
		});
	}
	return ["loader", "action"].forEach((e) => {
		let i = t[e];
		if (typeof i == "function" && n[e].length > 0) {
			let t = i[Mt] ?? i, a = Ft(n[e], t, (...e) => Lt(e[0]));
			a && (e === "loader" && t.hydrate === !0 && (a.hydrate = !0), a[Mt] = t, r[e] = a);
		}
	}), t.middleware && t.middleware.length > 0 && n.middleware.length > 0 && (r.middleware = t.middleware.map((e) => {
		let t = e[Mt] ?? e, r = Ft(n.middleware, t, (...e) => Lt(e[0]));
		return r ? (r[Mt] = t, r) : e;
	})), r;
}
function Pt(e, t) {
	let n = {
		navigate: [],
		fetch: []
	};
	if (t.forEach((e) => e({ instrument(e) {
		let t = Object.keys(e);
		for (let r of t) e[r] && n[r].push(e[r]);
	} })), n.navigate.length > 0) {
		let t = e.navigate[Mt] ?? e.navigate, r = Ft(n.navigate, t, (...t) => {
			let [n, r] = t;
			return {
				to: typeof n == "number" || typeof n == "string" ? n : n ? q(n) : ".",
				...Rt(e, r ?? {})
			};
		});
		r && (r[Mt] = t, e.navigate = r);
	}
	if (n.fetch.length > 0) {
		let t = e.fetch[Mt] ?? e.fetch, r = Ft(n.fetch, t, (...t) => {
			let [n, , r, i] = t;
			return {
				href: r ?? ".",
				fetcherKey: n,
				...Rt(e, i ?? {})
			};
		});
		r && (r[Mt] = t, e.fetch = r);
	}
	return e;
}
function Ft(e, t, n) {
	return e.length === 0 ? null : async (...r) => {
		let i = await It(e, n(...r), () => t(...r), e.length - 1);
		if (i.type === "error") throw i.value;
		return i.value;
	};
}
async function It(e, t, n, r) {
	let i = e[r], a;
	if (i) {
		let o, s = async () => (o ? console.error("You cannot call instrumented handlers more than once") : o = It(e, t, n, r - 1), a = await o, G(a, "Expected a result"), a.type === "error" && a.value instanceof Error ? {
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
function Lt(e) {
	let { request: t, context: n, params: r, pattern: i } = e;
	return {
		request: zt(t),
		params: { ...r },
		pattern: i,
		context: Bt(n)
	};
}
function Rt(e, t) {
	return {
		currentUrl: q(e.state.location),
		..."formMethod" in t ? { formMethod: t.formMethod } : {},
		..."formEncType" in t ? { formEncType: t.formEncType } : {},
		..."formData" in t ? { formData: t.formData } : {},
		..."body" in t ? { body: t.body } : {}
	};
}
function zt(e) {
	return {
		method: e.method,
		url: e.url,
		headers: { get: (...t) => e.headers.get(...t) }
	};
}
function Bt(e) {
	if (Ht(e)) {
		let t = { ...e };
		return Object.freeze(t), t;
	}
	return { get: (t) => e.get(t) };
}
var Vt = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Ht(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Object.getOwnPropertyNames(t).sort().join("\0") === Vt;
}
var Ut = new URL("http://localhost");
function Wt(e) {
	if (e.createURL) return e.createURL("/");
	try {
		return new URL(e.createHref("/"), Ut);
	} catch {
		return Ut;
	}
}
function Gt(e, t) {
	return e.origin === t.origin && (e.origin !== "null" || e.protocol === t.protocol && e.host === t.host);
}
function Kt(e, t) {
	if (e.startsWith("//")) return !0;
	let n = t.protocol.toLowerCase();
	return e.toLowerCase().startsWith(n) ? t.host === "" || e.slice(n.length).startsWith("//") : !1;
}
function qt(e, t, n, r) {
	let i = null;
	try {
		i = e == null ? null : new URL(e, n);
	} catch {}
	let a = new URL(t, n), o = i != null && !Gt(i, n), s = !Gt(a, n);
	if (r === "reject") {
		if (o || s) throw Error("External navigation is not allowed");
	} else if (s && (i == null || !Kt(e, i) || !Gt(i, a))) throw Error("External navigation is not allowed");
}
var Jt = [
	"POST",
	"PUT",
	"PATCH",
	"DELETE"
], Yt = new Set(Jt), Xt = ["GET", ...Jt], Zt = new Set(Xt), Qt = /* @__PURE__ */ new Set([
	301,
	302,
	303,
	307,
	308
]), $t = /* @__PURE__ */ new Set([307, 308]), en = {
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
}, tn = {
	state: "idle",
	data: void 0,
	formMethod: void 0,
	formAction: void 0,
	formEncType: void 0,
	formData: void 0,
	json: void 0,
	text: void 0
}, nn = {
	state: "unblocked",
	proceed: void 0,
	reset: void 0,
	location: void 0
}, rn = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }), an = "remix-router-transitions", on = Symbol("ResetLoaderData"), sn, cn, ln, un, dn = class {
	constructor(e) {
		W(this, sn), W(this, cn), W(this, ln), W(this, un), De(this, sn, e), De(this, cn, Ye(e));
	}
	get stableRoutes() {
		return U(this, sn);
	}
	get activeRoutes() {
		return U(this, ln) ?? U(this, sn);
	}
	get branches() {
		return U(this, un) ?? U(this, cn);
	}
	get hasHMRRoutes() {
		return U(this, ln) != null;
	}
	setRoutes(e) {
		De(this, sn, e), De(this, cn, Ye(e));
	}
	setHmrRoutes(e) {
		De(this, ln, e), De(this, un, Ye(e));
	}
	commitHmrRoutes() {
		U(this, ln) && (De(this, sn, U(this, ln)), De(this, cn, U(this, un)), De(this, ln, void 0), De(this, un, void 0));
	}
};
sn = /* @__PURE__ */ new WeakMap(), cn = /* @__PURE__ */ new WeakMap(), ln = /* @__PURE__ */ new WeakMap(), un = /* @__PURE__ */ new WeakMap();
function fn(e) {
	let t = e.window ? e.window : typeof window < "u" ? window : void 0, n = t !== void 0 && t.document !== void 0 && t.document.createElement !== void 0;
	G(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
	let r = e.hydrationRouteProperties || [], i = e.mapRouteProperties || rn, a = i;
	if (e.instrumentations) {
		let t = e.instrumentations;
		a = (e) => ({
			...i(e),
			...Nt(t.map((e) => e.route).filter(Boolean), e)
		});
	}
	let o = {}, s = new dn(We(e.routes, a, void 0, o)), c = e.basename || "/";
	c.startsWith("/") || (c = `/${c}`);
	let l = e.dataStrategy || kn, u = { ...e.future }, d = null, f = /* @__PURE__ */ new Set(), p = null, m = null, h = null, g = null, _ = e.hydrationData != null, v = qe(s.activeRoutes, e.history.location, c, !1, s.branches), y = !1, b = null, x, S;
	if (v == null && !e.patchRoutesOnNavigation) {
		let t = er(404, { pathname: e.history.location.pathname }), { matches: n, route: r } = $n(s.activeRoutes);
		x = !0, S = !x, v = n, b = { [r.id]: t };
	} else if (v && !e.hydrationData && Ge(v, s.activeRoutes, e.history.location.pathname).active && (v = null), !v) {
		x = !1, S = !x, v = [];
		let t = Ge(null, s.activeRoutes, e.history.location.pathname);
		t.active && t.matches && (y = !0, v = t.matches);
	} else if (v.some((e) => e.route.lazy)) x = !1, S = !x;
	else if (!v.some((e) => _n(e.route))) x = !0, S = !x;
	else {
		let t = e.hydrationData ? e.hydrationData.loaderData : null, n = e.hydrationData ? e.hydrationData.errors : null, r = v;
		if (n) {
			let e = v.findIndex((e) => n[e.route.id] !== void 0);
			r = r.slice(0, e + 1);
		}
		S = !1, x = !0, r.forEach((e) => {
			let r = vn(e.route, t, n);
			S ||= r.renderFallback, x &&= !r.shouldLoad;
		});
	}
	let C, w = {
		historyAction: e.history.action,
		location: e.history.location,
		matches: v,
		initialized: x,
		renderFallback: S,
		navigation: en,
		restoreScrollPosition: e.hydrationData == null && null,
		preventScrollReset: !1,
		revalidation: "idle",
		loaderData: e.hydrationData && e.hydrationData.loaderData || {},
		actionData: e.hydrationData && e.hydrationData.actionData || null,
		errors: e.hydrationData && e.hydrationData.errors || b,
		fetchers: /* @__PURE__ */ new Map(),
		blockers: /* @__PURE__ */ new Map()
	}, T = "POP", E = null, D = !1, O, k = !1, A = /* @__PURE__ */ new Map(), j = null, M = !1, N = !1, ee = /* @__PURE__ */ new Set(), P = /* @__PURE__ */ new Map(), te = 0, F = -1, I = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Set(), ne = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Map(), ae, oe = null;
	function z() {
		if (d = e.history.listen(({ action: t, location: n, delta: r }) => {
			if (ae) {
				ae(), ae = void 0;
				return;
			}
			K(R.size === 0 || r != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
			let i = Le({
				currentLocation: w.location,
				nextLocation: n,
				historyAction: t
			});
			if (i && r != null) {
				let t = new Promise((e) => {
					ae = e;
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
						e.set(i, nn), B({ blockers: e });
					}
				}), E?.resolve(), E = null;
				return;
			}
			return V(t, n);
		}), n) {
			Cr(t, A);
			let e = () => wr(t, A);
			t.addEventListener("pagehide", e), j = () => t.removeEventListener("pagehide", e);
		}
		return w.initialized || V("POP", w.location, { initialHydration: !0 }), C;
	}
	function se() {
		d && d(), j && j(), f.clear(), O && O.abort(), w.fetchers.forEach((e, t) => Ee(w.fetchers, t)), w.blockers.forEach((e, t) => Me(t));
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
			e.state === "idle" && (ie.has(t) ? n.push(t) : r.push(t));
		}), ie.forEach((e) => {
			!w.fetchers.has(e) && !P.has(e) && n.push(e);
		}), f.size === 0 && (p = { newErrors: e.errors ?? null }), [...f].forEach((r) => r(w, {
			deletedFetchers: n,
			newErrors: e.errors ?? null,
			viewTransitionOpts: t.viewTransitionOpts,
			flushSync: t.flushSync === !0
		})), n.forEach((e) => Ee(w.fetchers, e)), r.forEach((e) => w.fetchers.delete(e));
	}
	function le(t, n, { flushSync: r } = {}) {
		let i = w.actionData != null && w.navigation.formMethod != null && Y(w.navigation.formMethod) && w.navigation.state === "loading" && t.state?._isRedirect !== !0, a;
		a = n.actionData ? Object.keys(n.actionData).length > 0 ? n.actionData : null : i ? w.actionData : null;
		let o = n.loaderData ? Xn(w.loaderData, n.loaderData, n.matches || [], n.errors) : w.loaderData, c = w.blockers;
		c.size > 0 && (c = new Map(c), c.forEach((e, t) => c.set(t, nn)));
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
			navigation: en,
			revalidation: "idle",
			restoreScrollPosition: l,
			preventScrollReset: u,
			blockers: c
		}, {
			viewTransitionOpts: d,
			flushSync: r === !0
		}), T = "POP", D = !1, k = !1, M = !1, N = !1, E?.resolve(), E = null, oe?.resolve(), oe = null;
	}
	async function ue(t, n) {
		if (E?.resolve(), E = null, typeof t == "number") {
			E ||= Tr();
			let n = E.promise;
			return e.history.go(t), n;
		}
		let { path: r, submission: i, error: a } = hn(!1, mn(w.location, w.matches, c, t, n?.fromRouteId, n?.relative), n), o;
		if (n?.mask) {
			let t = typeof n.mask == "string" ? Fe(n.mask) : {
				...w.location.mask,
				...n.mask
			};
			if (o = {
				pathname: t.pathname ?? "",
				search: t.search ?? "",
				hash: t.hash ?? ""
			}, ke.test(o.pathname)) throw Error("External navigation is not allowed");
			o.pathname.startsWith("\\") && (o.pathname = o.pathname.replace(/^\\+/, "/")), qt(typeof n.mask == "string" ? n.mask : q(n.mask), q(o), e.history.createURL("/"), "reject");
		}
		let s = w.location, l = Pe(s, r, n && n.state, void 0, o);
		l = {
			...l,
			...e.history.encodeLocation(l)
		}, qt(t == null ? e.history.createHref(w.location) : typeof t == "string" ? t : q(t), e.history.createHref(l.mask || l), e.history.createURL("/"), "reject");
		let u = n && n.replace != null ? n.replace : void 0, d = "PUSH";
		u === !0 ? d = "REPLACE" : u === !1 || i != null && Y(i.formMethod) && i.formAction === w.location.pathname + w.location.search && (d = "REPLACE");
		let f = n && "preventScrollReset" in n ? n.preventScrollReset === !0 : void 0, p = (n && n.flushSync) === !0, m = Le({
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
					}), ue(t, n);
				},
				reset() {
					let e = new Map(w.blockers);
					e.set(m, nn), B({ blockers: e });
				}
			});
			return;
		}
		await V(d, l, {
			submission: i,
			pendingError: a,
			preventScrollReset: f,
			replace: n && n.replace,
			enableViewTransition: n && n.viewTransition,
			flushSync: p,
			callSiteDefaultShouldRevalidate: n && n.defaultShouldRevalidate
		});
	}
	function de() {
		oe ||= Tr(), Se(), B({ revalidation: "loading" });
		let e = oe.promise;
		return w.navigation.state === "submitting" ? e : w.navigation.state === "idle" ? (V(w.historyAction, w.location, { startUninterruptedRevalidation: !0 }), e) : (V(T || w.historyAction, w.navigation.location, {
			overrideNavigation: w.navigation,
			enableViewTransition: k === !0
		}), e);
	}
	async function V(t, n, r) {
		O && O.abort(), O = null, T = t, M = (r && r.startUninterruptedRevalidation) === !0, He(w.location, w.matches), D = (r && r.preventScrollReset) === !0, k = (r && r.enableViewTransition) === !0;
		let i = s.activeRoutes, a = r?.initialHydration && w.matches && w.matches.length > 0 && !y ? w.matches : qe(i, n, c, !1, s.branches), o = (r && r.flushSync) === !0;
		if (a && w.initialized && !N && rr(w.location, n) && !(r && r.submission && Y(r.submission.formMethod))) {
			le(n, { matches: a }, { flushSync: o });
			return;
		}
		let l = Ge(a, i, n.pathname);
		if (l.active && l.matches && (a = l.matches), !a) {
			let { error: e, notFoundMatches: t, route: r } = ze(n.pathname);
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
		let d = Wn(e.history, n, O.signal, r && r.submission), f = e.getContext ? await e.getContext() : new Re(), p;
		if (r && r.pendingError) p = [Qn(a).route.id, {
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
				if (cr(t) && Ot(t.error) && t.error.status === 404) {
					O = null, le(n, {
						matches: i.matches,
						loaderData: {},
						errors: { [e]: t.error }
					});
					return;
				}
			}
			a = i.matches || a, p = i.pendingActionResult, u = vr(n, a, t, r.submission), o = !1, l.active = !1, d = Wn(e.history, d.url, d.signal);
		}
		let { shortCircuited: m, matches: h, loaderData: g, errors: _, workingFetchers: v } = await pe(d, n, a, t, f, l.active, u, r && r.submission, r && r.fetcherSubmission, r && r.replace, r && r.initialHydration === !0, o, p, r && r.callSiteDefaultShouldRevalidate);
		m || (O = null, le(n, {
			matches: h || a,
			...Zn(p),
			loaderData: g,
			errors: _,
			...v ? { fetchers: v } : {}
		}));
	}
	async function fe(t, n, i, l, u, d, f, p, m = {}) {
		if (Se(), B({ navigation: yr(n, l, u, i) }, { flushSync: m.flushSync === !0 }), f) {
			let e = await Ke(l, n.pathname, t.signal);
			if (e.type === "aborted") return { shortCircuited: !0 };
			if (e.type === "error") {
				if (e.partialMatches.length === 0) {
					let { matches: t, route: n } = $n(s.activeRoutes);
					return {
						matches: t,
						pendingActionResult: [n.id, {
							type: "error",
							error: e.error
						}]
					};
				}
				let t = Qn(e.partialMatches).route.id;
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
				let { notFoundMatches: e, error: t, route: r } = ze(n.pathname);
				return {
					matches: e,
					pendingActionResult: [r.id, {
						type: "error",
						error: t
					}]
				};
			}
		}
		let h, g = gr(l, n);
		if (!g.route.action && !g.route.lazy) h = {
			type: "error",
			error: er(405, {
				method: t.method,
				pathname: n.pathname,
				routeId: g.route.id
			})
		};
		else {
			let e = await be(t, n, Fn(a, o, t, n, l, g, p ? [] : r, d), d, null);
			if (h = e[g.route.id], !h) {
				for (let t of l) if (e[t.route.id]) {
					h = e[t.route.id];
					break;
				}
			}
			if (t.signal.aborted) return { shortCircuited: !0 };
		}
		if (lr(h)) {
			let n;
			return n = m && m.replace != null ? m.replace : Un(h.response.headers.get("Location"), new URL(t.url), c, e.history) === w.location.pathname + w.location.search, await ye(t, h, !0, {
				submission: i,
				replace: n
			}), { shortCircuited: !0 };
		}
		if (cr(h)) {
			let e = Qn(l, g.route.id);
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
		let b = f || vr(n, i, l, p), x = p || m || _r(b), S = !M && !g;
		if (d) {
			if (S) {
				let e = me(v);
				B({
					navigation: b,
					...e === void 0 ? {} : { actionData: e }
				}, { flushSync: _ });
			}
			let e = await Ke(i, n.pathname, t.signal);
			if (e.type === "aborted") return { shortCircuited: !0 };
			if (e.type === "error") {
				if (e.partialMatches.length === 0) {
					let { matches: t, route: n } = $n(s.activeRoutes);
					return {
						matches: t,
						loaderData: {},
						errors: { [n.id]: e.error }
					};
				}
				let t = Qn(e.partialMatches).route.id;
				return {
					matches: e.partialMatches,
					loaderData: {},
					errors: { [t]: e.error }
				};
			}
			if (e.matches) i = e.matches;
			else {
				let { error: e, notFoundMatches: t, route: r } = ze(n.pathname);
				return {
					matches: t,
					loaderData: {},
					errors: { [r.id]: e }
				};
			}
		}
		let C = s.activeRoutes, { dsMatches: T, revalidatingFetchers: E } = gn(t, u, a, o, e.history, w, i, x, n, g ? [] : r, g === !0, N, ee, ie, ne, L, C, c, e.patchRoutesOnNavigation != null, s.branches, v, y);
		if (F = ++te, !e.dataStrategy && !T.some((e) => e.shouldLoad) && !T.some((e) => e.route.middleware && e.route.middleware.length > 0) && E.length === 0) {
			let e = new Map(w.fetchers), t = Oe(e);
			return le(n, {
				matches: i,
				loaderData: {},
				errors: v && cr(v[1]) ? { [v[0]]: v[1].error } : null,
				...Zn(v),
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
			W(e.key), e.controller && P.set(e.key, e.controller);
		});
		let D = () => E.forEach((e) => W(e.key));
		O && O.signal.addEventListener("abort", D);
		let { loaderResults: k, fetcherResults: A } = await xe(T, E, t, n, u);
		if (t.signal.aborted) return { shortCircuited: !0 };
		O && O.signal.removeEventListener("abort", D), E.forEach((e) => P.delete(e.key));
		let j = tr(k);
		if (j) return await ye(t, j.result, !0, { replace: h }), { shortCircuited: !0 };
		if (j = tr(A), j) return L.add(j.key), await ye(t, j.result, !0, { replace: h }), { shortCircuited: !0 };
		let I = new Map(w.fetchers), { loaderData: re, errors: R } = Yn(w, i, k, v, E, A, I);
		g && w.errors && (R = {
			...w.errors,
			...R
		});
		let ae = Oe(I), oe = Ae(F, I), z = ae || oe || E.length > 0;
		return {
			matches: i,
			loaderData: re,
			errors: R,
			...z ? { workingFetchers: I } : {}
		};
	}
	function me(e) {
		if (e && !cr(e[1])) return { [e[0]]: e[1].data };
		if (w.actionData) return Object.keys(w.actionData).length === 0 ? null : w.actionData;
	}
	function he(e) {
		let t = new Map(w.fetchers);
		return e.forEach((e) => {
			let n = t.get(e.key), r = br(void 0, n ? n.data : void 0);
			t.set(e.key, r);
		}), t;
	}
	async function ge(t, n, r, i) {
		W(t);
		let a = (i && i.flushSync) === !0, o = s.activeRoutes, l = mn(w.location, w.matches, c, r, n, i?.relative), u = qe(o, l, c, !1, s.branches), d = Ge(u, o, l);
		if (d.active && d.matches && (u = d.matches), !u) {
			we(t, n, er(404, { pathname: l }), { flushSync: a });
			return;
		}
		let { path: f, submission: p, error: m } = hn(!0, l, i);
		if (m) {
			we(t, n, m, { flushSync: a });
			return;
		}
		let h = e.getContext ? await e.getContext() : new Re(), g = (i && i.preventScrollReset) === !0;
		if (p && Y(p.formMethod)) {
			await _e(t, n, f, u, h, d.active, a, g, p, i && i.defaultShouldRevalidate);
			return;
		}
		ne.set(t, {
			routeId: n,
			path: f
		}), await ve(t, n, f, u, h, d.active, a, g, p);
	}
	async function _e(t, n, i, l, u, d, f, p, m, h) {
		Se(), ne.delete(t), Ce(t, xr(m, w.fetchers.get(t)), { flushSync: f });
		let g = new AbortController(), _ = Wn(e.history, i, g.signal, m);
		if (d) {
			let e = await Ke(l, new URL(_.url).pathname, _.signal, t);
			if (e.type === "aborted") return;
			if (e.type === "error") {
				we(t, n, e.error, { flushSync: f });
				return;
			}
			if (e.matches) l = e.matches;
			else {
				we(t, n, er(404, { pathname: i }), { flushSync: f });
				return;
			}
		}
		let v = gr(l, i);
		if (!v.route.action && !v.route.lazy) {
			we(t, n, er(405, {
				method: m.formMethod,
				pathname: i,
				routeId: n
			}), { flushSync: f });
			return;
		}
		P.set(t, g);
		let y = te, b = Fn(a, o, _, i, l, v, r, u), x = await be(_, i, b, u, t), S = x[v.route.id];
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
		if (ie.has(t)) {
			if (lr(S) || cr(S)) {
				Ce(t, Sr(void 0));
				return;
			}
		} else {
			if (lr(S)) {
				if (P.delete(t), F > y) {
					Ce(t, Sr(void 0));
					return;
				}
				return L.add(t), Ce(t, br(m)), ye(_, S, !1, {
					fetcherSubmission: m,
					preventScrollReset: p
				});
			}
			if (cr(S)) {
				we(t, n, S.error);
				return;
			}
		}
		let C = w.navigation.location || w.location, E = Wn(e.history, C, g.signal), D = s.activeRoutes, k = w.navigation.state === "idle" ? w.matches : qe(D, w.navigation.location, c, !1, s.branches);
		G(k, "Didn't find any matches after fetcher action");
		let A = ++te;
		I.set(t, A);
		let { dsMatches: j, revalidatingFetchers: M } = gn(E, u, a, o, e.history, w, k, m, C, r, !1, N, ee, ie, ne, L, D, c, e.patchRoutesOnNavigation != null, s.branches, [v.route.id, S], h), re = br(m, S.data), R = new Map(w.fetchers);
		R.set(t, re), M.filter((e) => e.key !== t).forEach((e) => {
			let t = e.key, n = R.get(t), r = br(void 0, n ? n.data : void 0);
			R.set(t, r), W(t), e.controller && P.set(t, e.controller);
		}), B({ fetchers: R });
		let ae = () => M.forEach((e) => W(e.key));
		g.signal.addEventListener("abort", ae);
		let { loaderResults: oe, fetcherResults: z } = await xe(j, M, E, C, u);
		if (g.signal.aborted) return;
		g.signal.removeEventListener("abort", ae), I.delete(t), P.delete(t), M.forEach((e) => P.delete(e.key));
		let se = w.fetchers.has(t), ce = (e) => {
			if (!se) return e;
			let n = new Map(e.fetchers);
			return n.set(t, Sr(S.data)), {
				...e,
				fetchers: n
			};
		}, ue = tr(oe);
		if (ue) return w = ce(w), ye(E, ue.result, !1, { preventScrollReset: p });
		if (ue = tr(z), ue) return L.add(ue.key), w = ce(w), ye(E, ue.result, !1, { preventScrollReset: p });
		let de = new Map(w.fetchers);
		se && de.set(t, Sr(S.data));
		let { loaderData: V, errors: fe } = Yn(w, k, oe, void 0, M, z, de);
		Ae(A, de), w.navigation.state === "loading" && A > F ? (G(T, "Expected pending action"), O && O.abort(), le(w.navigation.location, {
			matches: k,
			loaderData: V,
			errors: fe,
			fetchers: de
		})) : (B({
			errors: fe,
			loaderData: Xn(w.loaderData, V, k, fe),
			fetchers: de
		}), N = !1);
	}
	async function ve(t, n, i, s, c, l, u, d, f) {
		let p = w.fetchers.get(t);
		Ce(t, br(f, p ? p.data : void 0), { flushSync: u });
		let m = new AbortController(), h = Wn(e.history, i, m.signal);
		if (l) {
			let e = await Ke(s, new URL(h.url).pathname, h.signal, t);
			if (e.type === "aborted") return;
			if (e.type === "error") {
				we(t, n, e.error, { flushSync: u });
				return;
			}
			if (e.matches) s = e.matches;
			else {
				we(t, n, er(404, { pathname: i }), { flushSync: u });
				return;
			}
		}
		let g = gr(s, i);
		P.set(t, m);
		let _ = te, v = await be(h, i, Fn(a, o, h, i, s, g, r, c), c, t), y = v[g.route.id];
		if (!y) {
			for (let e of s) if (v[e.route.id]) {
				y = v[e.route.id];
				break;
			}
		}
		if (P.get(t) === m && P.delete(t), !h.signal.aborted) {
			if (ie.has(t)) {
				Ce(t, Sr(void 0));
				return;
			}
			if (lr(y)) {
				if (F > _) {
					Ce(t, Sr(void 0));
					return;
				}
				L.add(t), await ye(h, y, !1, { preventScrollReset: d });
				return;
			}
			if (cr(y)) {
				we(t, n, y.error);
				return;
			}
			Ce(t, Sr(y.data));
		}
	}
	async function ye(r, i, a, { submission: o, fetcherSubmission: s, preventScrollReset: l, replace: u } = {}) {
		a || (E?.resolve(), E = null), i.response.headers.has("X-Remix-Revalidate") && (N = !0);
		let d = i.response.headers.get("Location");
		G(d, "Expected a Location header on the redirect Response");
		let f = d, p = new URL(r.url);
		d = Un(d, p, c, e.history), qt(f, d, p, "allow-explicit");
		let m = Pe(w.location, d, { _isRedirect: !0 });
		if (n) {
			let e = !1;
			if (i.response.headers.has("X-Remix-Reload-Document")) e = !0;
			else if (mt(d)) {
				let n = Ie(t, d, !0);
				e = n.origin !== t.location.origin || J(n.pathname, c) == null;
			}
			if (e) {
				u ? t.location.replace(d) : t.location.assign(d);
				return;
			}
		}
		O = null;
		let h = u === !0 || i.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH", { formMethod: g, formAction: _, formEncType: v } = w.navigation;
		!o && !s && g && _ && v && (o = _r(w.navigation));
		let y = o || s;
		$t.has(i.response.status) && y && Y(y.formMethod) ? await V(h, m, {
			submission: {
				...y,
				formAction: d
			},
			preventScrollReset: l || D,
			enableViewTransition: a ? k : void 0
		}) : await V(h, m, {
			overrideNavigation: vr(m, [], h, o),
			fetcherSubmission: s,
			preventScrollReset: l || D,
			enableViewTransition: a ? k : void 0
		});
	}
	async function be(e, t, n, r, i) {
		let a, o = {};
		try {
			a = await In(l, e, t, n, i, r, !1);
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
		for (let [t, r] of Object.entries(a)) if (sr(r)) {
			let i = r.result;
			o[t] = {
				type: "redirect",
				response: Bn(i, e, t, n, c)
			};
		} else o[t] = await zn(r);
		return o;
	}
	async function xe(e, t, n, r, i) {
		let a = be(n, r, e, i, null), o = Promise.all(t.map(async (e) => {
			if (e.matches && e.match && e.request && e.controller) {
				let t = (await be(e.request, e.path, e.matches, i, e.key))[e.match.route.id];
				return { [e.key]: t };
			}
			return Promise.resolve({ [e.key]: {
				type: "error",
				error: er(404, { pathname: e.path })
			} });
		}));
		return {
			loaderResults: await a,
			fetcherResults: (await o).reduce((e, t) => Object.assign(e, t), {})
		};
	}
	function Se() {
		N = !0, ne.forEach((e, t) => {
			P.has(t) && ee.add(t), W(t);
		});
	}
	function Ce(e, t, n = {}) {
		let r = new Map(w.fetchers);
		r.set(e, t), B({ fetchers: r }, { flushSync: (n && n.flushSync) === !0 });
	}
	function we(e, t, n, r = {}) {
		let i = Qn(w.matches, t), a = new Map(w.fetchers);
		Ee(a, e), B({
			errors: { [i.route.id]: n },
			fetchers: a
		}, { flushSync: (r && r.flushSync) === !0 });
	}
	function H(e) {
		return re.set(e, (re.get(e) || 0) + 1), ie.has(e) && ie.delete(e), w.fetchers.get(e) || tn;
	}
	function Te(e, t) {
		W(e, t?.reason), Ce(e, Sr(null));
	}
	function Ee(e, t) {
		let n = w.fetchers.get(t);
		P.has(t) && !(n && n.state === "loading" && I.has(t)) && W(t), ne.delete(t), I.delete(t), L.delete(t), ie.delete(t), ee.delete(t), e.delete(t);
	}
	function U(e) {
		let t = (re.get(e) || 0) - 1;
		t <= 0 ? (re.delete(e), ie.add(e)) : re.set(e, t), B({ fetchers: new Map(w.fetchers) });
	}
	function W(e, t) {
		let n = P.get(e);
		n && (n.abort(t), P.delete(e));
	}
	function De(e, t) {
		for (let n of e) {
			let e = t.get(n);
			G(e, `Expected fetcher: ${n}`);
			let r = Sr(e.data);
			t.set(n, r);
		}
	}
	function Oe(e) {
		let t = [], n = !1;
		for (let r of L) {
			let i = e.get(r);
			G(i, `Expected fetcher: ${r}`), i.state === "loading" && (L.delete(r), t.push(r), n = !0);
		}
		return De(t, e), n;
	}
	function Ae(e, t) {
		let n = [];
		for (let [r, i] of I) if (i < e) {
			let e = t.get(r);
			G(e, `Expected fetcher: ${r}`), e.state === "loading" && (W(r), I.delete(r), n.push(r));
		}
		return De(n, t), n.length > 0;
	}
	function je(e, t) {
		let n = w.blockers.get(e) || nn;
		return R.get(e) !== t && R.set(e, t), n;
	}
	function Me(e) {
		w.blockers.delete(e), R.delete(e);
	}
	function Ne(e, t) {
		let n = w.blockers.get(e) || nn;
		G(n.state === "unblocked" && t.state === "blocked" || n.state === "blocked" && t.state === "blocked" || n.state === "blocked" && t.state === "proceeding" || n.state === "blocked" && t.state === "unblocked" || n.state === "proceeding" && t.state === "unblocked", `Invalid blocker state transition: ${n.state} -> ${t.state}`);
		let r = new Map(w.blockers);
		r.set(e, t), B({ blockers: r });
	}
	function Le({ currentLocation: e, nextLocation: t, historyAction: n }) {
		if (R.size === 0) return;
		R.size > 1 && K(!1, "A router only supports one blocker at a time");
		let r = Array.from(R.entries()), [i, a] = r[r.length - 1], o = w.blockers.get(i);
		if (!(o && o.state === "proceeding") && a({
			currentLocation: e,
			nextLocation: t,
			historyAction: n
		})) return i;
	}
	function ze(e) {
		let t = er(404, { pathname: e }), n = s.activeRoutes, { matches: r, route: i } = $n(n);
		return {
			notFoundMatches: r,
			route: i,
			error: t
		};
	}
	function Be(e, t, n) {
		if (m = e, g = t, h = n || null, !_ && w.navigation === en) {
			_ = !0;
			let e = Ue(w.location, w.matches);
			e != null && B({ restoreScrollPosition: e });
		}
		return () => {
			m = null, g = null, h = null;
		};
	}
	function Ve(e, t) {
		return h && h(e, t.map((e) => Je(e, w.loaderData))) || e.key;
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
	function Ge(t, n, r) {
		if (e.patchRoutesOnNavigation) {
			let e = s.branches;
			if (!t) return {
				active: !0,
				matches: qe(n, r, c, !0, e) || []
			};
			if (Object.keys(t[0].params).length > 0) return {
				active: !0,
				matches: qe(n, r, c, !0, e)
			};
		}
		return {
			active: !1,
			matches: null
		};
	}
	async function Ke(t, n, r, i) {
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
						r.aborted || Sn(e, n, s, t, a, !1);
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
			let u = s.branches, d = qe(s.activeRoutes, n, c, !1, u), f = null;
			if (d && (Object.keys(d[0].params).length === 0 || (f = qe(s.activeRoutes, n, c, !0, u), !(f && l.length < f.length && Ye(l, f.slice(0, l.length)))))) return {
				type: "success",
				matches: d
			};
			if (f ||= qe(s.activeRoutes, n, c, !0, u), !f || Ye(l, f)) return {
				type: "success",
				matches: null
			};
			l = f;
		}
	}
	function Ye(e, t) {
		return e.length === t.length && e.every((e, n) => e.route.id === t[n].route.id);
	}
	function Xe(e) {
		o = {}, s.setHmrRoutes(We(e, a, void 0, o));
	}
	function Ze(e, t, n = !1) {
		Sn(e, t, s, o, a, n), s.hasHMRRoutes || B({});
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
		initialize: z,
		subscribe: ce,
		enableScrollRestoration: Be,
		navigate: ue,
		fetch: ge,
		revalidate: de,
		createHref: (t) => e.history.createHref(t),
		createURL: (t) => e.history.createURL(t),
		encodeLocation: (t) => e.history.encodeLocation(t),
		getFetcher: H,
		resetFetcher: Te,
		deleteFetcher: U,
		dispose: se,
		getBlocker: je,
		deleteBlocker: Me,
		patchRoutes: Ze,
		_internalFetchControllers: P,
		_internalSetRoutes: Xe,
		_internalSetStateDoNotUseOrYouWillBreakYourApp(e) {
			B(e);
		}
	}, e.instrumentations && (C = Pt(C, e.instrumentations.map((e) => e.router).filter(Boolean))), C;
}
function pn(e) {
	return e != null && ("formData" in e && e.formData != null || "body" in e && e.body !== void 0);
}
function mn(e, t, n, r, i, a) {
	let o, s;
	if (i) {
		o = [];
		for (let e of t) if (o.push(e), e.route.id === i) {
			s = e;
			break;
		}
	} else o = t, s = t[t.length - 1];
	let c = bt(r || ".", yt(o), J(e.pathname, n) || e.pathname, a === "path");
	if (r ?? (c.search = e.search, c.hash = e.hash), (r == null || r === "" || r === ".") && s) {
		let e = hr(c.search);
		if (s.route.index && !e) c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index";
		else if (!s.route.index && e) {
			let e = new URLSearchParams(c.search), t = e.getAll("index");
			e.delete("index"), t.filter((e) => e).forEach((t) => e.append("index", t));
			let n = e.toString();
			c.search = n ? `?${n}` : "";
		}
	}
	return n !== "/" && (c.pathname = pt({
		basename: n,
		pathname: c.pathname
	})), q(c);
}
function hn(e, t, n) {
	if (!n || !pn(n)) return { path: t };
	if (n.formMethod && !mr(n.formMethod)) return {
		path: t,
		error: er(405, { method: n.formMethod })
	};
	let r = () => ({
		path: t,
		error: er(400, { type: "invalid-body" })
	}), i = (n.formMethod || "get").toUpperCase(), a = nr(t);
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
	if (n.formData) o = Kn(n.formData), s = n.formData;
	else if (n.body instanceof FormData) o = Kn(n.body), s = n.body;
	else if (n.body instanceof URLSearchParams) o = n.body, s = qn(o);
	else if (n.body == null) o = new URLSearchParams(), s = new FormData();
	else try {
		o = new URLSearchParams(n.body), s = qn(o);
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
	let l = Fe(t);
	return e && l.search && hr(l.search) && o.append("index", ""), l.search = `?${o}`, {
		path: q(l),
		submission: c
	};
}
function gn(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x) {
	let S = b ? cr(b[1]) ? b[1].error : b[1].data : void 0, C = i.createURL(a.location), w = i.createURL(c), T;
	if (u && a.errors) {
		let e = Object.keys(a.errors)[0];
		T = o.findIndex((t) => t.route.id === e);
	} else if (b && cr(b[1])) {
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
	}, k = kt(o), A = o.map((i, o) => {
		let { route: s } = i, f = null;
		if (T != null && o > T) f = !1;
		else if (s.lazy) f = !0;
		else if (!_n(s)) f = !1;
		else if (u) {
			let { shouldLoad: e } = vn(s, a.loaderData, a.errors);
			f = e;
		} else yn(a.loaderData, a.matches[o], i) && (f = !0);
		if (f !== null) return Pn(n, r, e, c, k, i, l, t, f);
		let p = !1;
		typeof x == "boolean" ? p = x : D ? p = !1 : d || C.pathname + C.search === w.pathname + w.search ? p = !0 : C.search === w.search ? bn(a.matches[o], i) && (p = !0) : p = !0;
		let m = {
			...O,
			defaultShouldRevalidate: p
		}, h = xn(i, m);
		return Pn(n, r, e, c, k, i, l, t, h, m, x);
	}), j = [];
	return m.forEach((e, s) => {
		if (u || !o.some((t) => t.route.id === e.routeId) || p.has(s)) return;
		let c = a.fetchers.get(s), m = c && c.state !== "idle" && c.data === void 0, b = qe(g, e.path, _ ?? "/", !1, y);
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
		let S = gr(b, e.path), C = new AbortController(), w = Wn(i, e.path, C.signal), T = null;
		if (f.has(s)) f.delete(s), T = Fn(n, r, w, e.path, b, S, l, t);
		else if (m) d && (T = Fn(n, r, w, e.path, b, S, l, t));
		else {
			let i;
			i = typeof x == "boolean" ? x : !D && d;
			let a = {
				...O,
				defaultShouldRevalidate: i
			};
			xn(S, a) && (T = Fn(n, r, w, e.path, b, S, l, t, a));
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
function _n(e) {
	return e.loader != null || e.middleware != null && e.middleware.length > 0;
}
function vn(e, t, n) {
	if (e.lazy) return {
		shouldLoad: !0,
		renderFallback: !0
	};
	if (!_n(e)) return {
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
function yn(e, t, n) {
	let r = !t || n.route.id !== t.route.id, i = !e.hasOwnProperty(n.route.id);
	return r || i;
}
function bn(e, t) {
	let n = e.route.path;
	return e.pathname !== t.pathname || n != null && n.endsWith("*") && e.params["*"] !== t.params["*"];
}
function xn(e, t) {
	if (e.route.shouldRevalidate) {
		let n = e.route.shouldRevalidate(t);
		if (typeof n == "boolean") return n;
	}
	return t.defaultShouldRevalidate;
}
function Sn(e, t, n, r, i, a) {
	let o;
	if (e) {
		let t = r[e];
		G(t, `No route found to patch children into: routeId = ${e}`), t.children ||= [], o = t.children;
	} else o = n.activeRoutes;
	let s = [], c = [];
	if (t.forEach((e) => {
		let t = o.find((t) => Cn(e, t));
		t ? c.push({
			existingRoute: t,
			newRoute: e
		}) : s.push(e);
	}), s.length > 0) {
		let t = We(s, i, [
			e || "_",
			"patch",
			String(o?.length || "0")
		], r);
		o.push(...t);
	}
	if (a && c.length > 0) for (let e = 0; e < c.length; e++) {
		let { existingRoute: t, newRoute: n } = c[e], r = t, [a] = We([n], i, [], {}, !0);
		Object.assign(r, {
			element: a.element ? a.element : r.element,
			errorElement: a.errorElement ? a.errorElement : r.errorElement,
			hydrateFallbackElement: a.hydrateFallbackElement ? a.hydrateFallbackElement : r.hydrateFallbackElement
		});
	}
	n.hasHMRRoutes || n.setRoutes([...n.activeRoutes]);
}
function Cn(e, t) {
	return "id" in e && "id" in t && e.id === t.id ? !0 : e.index !== t.index || e.path !== t.path || e.caseSensitive !== t.caseSensitive ? !1 : (!e.children || e.children.length === 0) && (!t.children || t.children.length === 0) ? !0 : e.children?.every((e, n) => t.children?.some((t) => Cn(e, t))) ?? !1;
}
var wn = /* @__PURE__ */ new WeakMap(), Tn = ({ key: e, route: t, manifest: n, mapRouteProperties: r }) => {
	let i = n[t.id];
	if (G(i, "No route found in manifest"), !i.lazy || typeof i.lazy != "object") return;
	let a = i.lazy[e];
	if (!a) return;
	let o = wn.get(i);
	o || (o = {}, wn.set(i, o));
	let s = o[e];
	if (s) return s;
	let c = (async () => {
		let t = Be(e), n = i[e] !== void 0 && e !== "hasErrorBoundary";
		if (t) K(!t, "Route property " + e + " is not a supported lazy route property. This property will be ignored."), o[e] = Promise.resolve();
		else if (n) K(!1, `Route "${i.id}" has a static property "${e}" defined. The lazy property will be ignored.`);
		else {
			let t = await a();
			t != null && (Object.assign(i, { [e]: t }), Object.assign(i, r(i)));
		}
		typeof i.lazy == "object" && (i.lazy[e] = void 0, Object.values(i.lazy).every((e) => e === void 0) && (i.lazy = void 0));
	})();
	return o[e] = c, c;
}, En = /* @__PURE__ */ new WeakMap();
function Dn(e, t, n, r, i) {
	let a = n[e.id];
	if (G(a, "No route found in manifest"), !e.lazy) return {
		lazyRoutePromise: void 0,
		lazyHandlerPromise: void 0
	};
	if (typeof e.lazy == "function") {
		let t = En.get(a);
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
				let i = He(e), o = a[e] !== void 0 && e !== "hasErrorBoundary";
				i ? K(!i, "Route property " + e + " is not a supported property to be returned from a lazy route function. This property will be ignored.") : o ? K(!o, `Route "${a.id}" has a static property "${e}" defined but its lazy function is also returning a value for this property. The lazy route property "${e}" will be ignored.`) : n[e] = r;
			}
			Object.assign(a, n), Object.assign(a, {
				...r(a),
				lazy: void 0
			});
		})();
		return En.set(a, n), n.catch(() => {}), {
			lazyRoutePromise: n,
			lazyHandlerPromise: n
		};
	}
	let o = Object.keys(e.lazy), s = [], c;
	for (let a of o) {
		if (i && i.includes(a)) continue;
		let o = Tn({
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
async function On(e) {
	let t = e.matches.filter((e) => e.shouldLoad), n = {};
	return (await Promise.all(t.map((e) => e.resolve()))).forEach((e, r) => {
		n[t[r].route.id] = e;
	}), n;
}
async function kn(e) {
	return e.matches.some((e) => e.route.middleware) ? An(e, () => On(e)) : On(e);
}
function An(e, t) {
	return jn(e, t, (e) => {
		if (pr(e)) throw e;
		return e;
	}, ar, n);
	function n(t, n, r) {
		if (r) return Promise.resolve(Object.assign(r.value, { [n]: {
			type: "error",
			result: t
		} }));
		{
			let { matches: r } = e, i = Qn(r, r[Math.min(Math.max(r.findIndex((e) => e.route.id === n), 0), Math.max(r.findIndex((e) => e.shouldCallHandler()), 0))].route.id).route.id;
			return Promise.resolve({ [i]: {
				type: "error",
				result: t
			} });
		}
	}
}
async function jn(e, t, n, r, i) {
	let { matches: a, ...o } = e;
	return await Mn(o, a.flatMap((e) => e.route.middleware ? e.route.middleware.map((t) => [e.route.id, t]) : []), t, n, r, i);
}
async function Mn(e, t, n, r, i, a, o = 0) {
	let { request: s } = e;
	if (s.signal.aborted) throw s.signal.reason ?? /* @__PURE__ */ Error(`Request aborted: ${s.method} ${s.url}`);
	let c = t[o];
	if (!c) return await n();
	let [l, u] = c, d, f = async () => {
		if (d) throw Error("You may only call `next()` once per middleware");
		try {
			return d = { value: await Mn(e, t, n, r, i, a, o + 1) }, d.value;
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
function Nn(e, t, n, r, i) {
	let a = Tn({
		key: "middleware",
		route: r.route,
		manifest: t,
		mapRouteProperties: e
	}), o = Dn(r.route, Y(n.method) ? "action" : "loader", t, e, i);
	return {
		middleware: a,
		route: o.lazyRoutePromise,
		handler: o.lazyHandlerPromise
	};
}
function Pn(e, t, n, r, i, a, o, s, c, l = null, u) {
	let d = !1, f = Nn(e, t, n, a, o);
	return {
		...a,
		_lazyPromises: f,
		shouldLoad: c,
		shouldRevalidateArgs: l,
		shouldCallHandler(e) {
			return d = !0, l ? typeof u == "boolean" ? xn(a, {
				...l,
				defaultShouldRevalidate: u
			}) : typeof e == "boolean" ? xn(a, {
				...l,
				defaultShouldRevalidate: e
			}) : xn(a, l) : c;
		},
		resolve(e) {
			let { lazy: t, loader: o, middleware: l } = a.route, u = d || c || e && !Y(n.method) && (t || o), p = l && l.length > 0 && !o && !t;
			return u && (Y(n.method) || !p) ? Ln({
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
function Fn(e, t, n, r, i, a, o, s, c = null) {
	return i.map((l) => l.route.id === a.route.id ? Pn(e, t, n, r, kt(i), l, o, s, !0, c) : {
		...l,
		shouldLoad: !1,
		shouldRevalidateArgs: c,
		shouldCallHandler: () => !1,
		_lazyPromises: Nn(e, t, n, l, o),
		resolve: () => Promise.resolve({
			type: "data",
			result: void 0
		})
	});
}
async function In(e, t, n, r, i, a, o) {
	r.some((e) => e._lazyPromises?.middleware) && await Promise.all(r.map((e) => e._lazyPromises?.middleware));
	let s = {
		request: t,
		url: Gn(t, n),
		pattern: kt(r),
		params: r[0].params,
		context: a,
		matches: r
	}, c = o ? () => {
		throw Error("You cannot call `runClientMiddleware()` from a static handler `dataStrategy`. Middleware is run outside of `dataStrategy` during SSR in order to bubble up the Response.  You can enable middleware via the `respond` API in `query`/`queryRoute`");
	} : (e) => {
		let t = s;
		return An(t, () => e({
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
async function Ln({ request: e, path: t, pattern: n, match: r, lazyHandlerPromise: i, lazyRoutePromise: a, handlerOverride: o, scopedContext: s }) {
	let c, l, u = Y(e.method), d = u ? "action" : "loader", f = (i) => {
		let a, c = new Promise((e, t) => a = t);
		l = () => a(), e.signal.addEventListener("abort", l);
		let u = (a) => typeof i == "function" ? i({
			request: e,
			url: Gn(e, t),
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
					throw er(405, {
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
			throw er(404, { pathname: t.pathname + t.search });
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
async function Rn(e) {
	let t = e.headers.get("Content-Type");
	return t && /\bapplication\/json\b/.test(t) ? e.body == null ? null : e.json() : e.text();
}
async function zn(e) {
	let { result: t, type: n } = e;
	if (dr(t)) {
		let e;
		try {
			e = await Rn(t);
		} catch (e) {
			return {
				type: "error",
				error: e
			};
		}
		return n === "error" ? {
			type: "error",
			error: new Dt(t.status, t.statusText, e),
			statusCode: t.status,
			headers: t.headers
		} : {
			type: "data",
			data: e,
			statusCode: t.status,
			headers: t.headers
		};
	}
	return n === "error" ? ur(t) ? t.data instanceof Error ? {
		type: "error",
		error: t.data,
		statusCode: t.init?.status,
		headers: t.init?.headers ? new Headers(t.init.headers) : void 0
	} : {
		type: "error",
		error: ir(t),
		statusCode: Ot(t) ? t.status : void 0,
		headers: t.init?.headers ? new Headers(t.init.headers) : void 0
	} : {
		type: "error",
		error: t,
		statusCode: Ot(t) ? t.status : void 0
	} : ur(t) ? {
		type: "data",
		data: t.data,
		statusCode: t.init?.status,
		headers: t.init?.headers ? new Headers(t.init.headers) : void 0
	} : {
		type: "data",
		data: t
	};
}
function Bn(e, t, n, r, i) {
	let a = e.headers.get("Location");
	if (G(a, "Redirects returned/thrown from loaders/actions must have a Location header"), !mt(a)) {
		let o = r.slice(0, r.findIndex((e) => e.route.id === n) + 1);
		a = mn(new URL(t.url), o, i, a), e.headers.set("Location", a);
	}
	return e;
}
var Vn = [
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
function Hn(e) {
	try {
		return Vn.includes(new URL(e).protocol);
	} catch {
		return !1;
	}
}
function Un(e, t, n, r) {
	if (mt(e)) {
		let r = e, i = ke.test(r) ? new URL(Ae(r, t.protocol)) : new URL(r);
		if (Hn(i.toString())) throw Error("Invalid redirect location");
		let a = J(i.pathname, n) != null;
		if (i.origin === t.origin && a) return xt(i.pathname) + i.search + i.hash;
	}
	try {
		if (Hn(r.createURL(e).toString())) throw Error("Invalid redirect location");
	} catch {}
	return e;
}
function Wn(e, t, n, r) {
	let i = e.createURL(nr(t)).toString(), a = { signal: n };
	if (r && Y(r.formMethod)) {
		let { formMethod: e, formEncType: t } = r;
		a.method = e.toUpperCase(), t === "application/json" ? (a.headers = new Headers({ "Content-Type": t }), a.body = JSON.stringify(r.json)) : a.body = t === "text/plain" ? r.text : t === "application/x-www-form-urlencoded" && r.formData ? Kn(r.formData) : r.formData;
	}
	return new Request(i, a);
}
function Gn(e, t) {
	let n = new URL(e.url), r = typeof t == "string" ? Fe(t) : t;
	if (n.pathname = r.pathname || "/", r.search) {
		let e = new URLSearchParams(r.search), t = e.getAll("index");
		e.delete("index");
		for (let n of t.filter(Boolean)) e.append("index", n);
		n.search = e.size ? `?${e.toString()}` : "";
	} else n.search = "";
	return n.hash = r.hash || "", n;
}
function Kn(e) {
	let t = new URLSearchParams();
	for (let [n, r] of e.entries()) t.append(n, typeof r == "string" ? r : r.name);
	return t;
}
function qn(e) {
	let t = new FormData();
	for (let [n, r] of e.entries()) t.append(n, r);
	return t;
}
function Jn(e, t, n, r = !1, i = !1) {
	let a = {}, o = null, s, c = !1, l = {}, u = n && cr(n[1]) ? n[1].error : void 0;
	return e.forEach((n) => {
		if (!(n.route.id in t)) return;
		let d = n.route.id, f = t[d];
		if (G(!lr(f), "Cannot handle redirect results in processLoaderData"), cr(f)) {
			let t = f.error;
			if (u !== void 0 && (t = u, u = void 0), o ||= {}, i) o[d] = t;
			else {
				let n = Qn(e, d);
				o[n.route.id] ?? (o[n.route.id] = t);
			}
			r || (a[d] = on), c || (c = !0, s = Ot(f.error) ? f.error.status : 500), f.headers && (l[d] = f.headers);
		} else a[d] = f.data, f.statusCode && f.statusCode !== 200 && !c && (s = f.statusCode), f.headers && (l[d] = f.headers);
	}), u !== void 0 && n && (o = { [n[0]]: u }, n[2] && (a[n[2]] = void 0)), {
		loaderData: a,
		errors: o,
		statusCode: s || 200,
		loaderHeaders: l
	};
}
function Yn(e, t, n, r, i, a, o) {
	let { loaderData: s, errors: c } = Jn(t, n, r);
	return i.filter((e) => !e.matches || e.matches.some((e) => e.shouldLoad)).forEach((t) => {
		let { key: n, match: r, controller: i } = t;
		if (i && i.signal.aborted) return;
		let s = a[n];
		if (G(s, "Did not find corresponding fetcher result"), cr(s)) {
			let t = Qn(e.matches, r?.route.id);
			c && c[t.route.id] || (c = {
				...c,
				[t.route.id]: s.error
			}), o.delete(n);
		} else if (lr(s)) G(!1, "Unhandled fetcher revalidation redirect");
		else {
			let e = Sr(s.data);
			o.set(n, e);
		}
	}), {
		loaderData: s,
		errors: c
	};
}
function Xn(e, t, n, r) {
	let i = Object.entries(t).filter(([, e]) => e !== on).reduce((e, [t, n]) => (e[t] = n, e), {});
	for (let a of n) {
		let n = a.route.id;
		if (!t.hasOwnProperty(n) && e.hasOwnProperty(n) && a.route.loader && (i[n] = e[n]), r && r.hasOwnProperty(n)) break;
	}
	return i;
}
function Zn(e) {
	return e ? cr(e[1]) ? { actionData: {} } : { actionData: { [e[0]]: e[1].data } } : {};
}
function Qn(e, t) {
	return (t ? e.slice(0, e.findIndex((e) => e.route.id === t) + 1) : [...e]).reverse().find((e) => e.route.hasErrorBoundary === !0) || e[0];
}
function $n(e) {
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
function er(e, { pathname: t, routeId: n, method: r, type: i, message: a } = {}) {
	let o = "Unknown Server Error", s = "Unknown @remix-run/router error";
	return e === 400 ? (o = "Bad Request", r && t && n ? s = `You made a ${r} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.` : i === "invalid-body" && (s = "Unable to encode submission body")) : e === 403 ? (o = "Forbidden", s = `Route "${n}" does not match URL "${t}"`) : e === 404 ? (o = "Not Found", s = `No route matches URL "${t}"`) : e === 405 && (o = "Method Not Allowed", r && t && n ? s = `You made a ${r.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.` : r && (s = `Invalid request method "${r.toUpperCase()}"`)), new Dt(e || 500, o, Error(s), !0);
}
function tr(e) {
	let t = Object.entries(e);
	for (let e = t.length - 1; e >= 0; e--) {
		let [n, r] = t[e];
		if (lr(r)) return {
			key: n,
			result: r
		};
	}
}
function nr(e) {
	return q({
		...typeof e == "string" ? Fe(e) : e,
		hash: ""
	});
}
function rr(e, t) {
	return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash || t.hash !== "";
}
function ir(e) {
	return new Dt(e.init?.status ?? 500, e.init?.statusText ?? "Internal Server Error", e.data);
}
function ar(e) {
	return typeof e == "object" && !!e && Object.entries(e).every(([e, t]) => typeof e == "string" && or(t));
}
function or(e) {
	return typeof e == "object" && !!e && "type" in e && "result" in e && (e.type === "data" || e.type === "error");
}
function sr(e) {
	return dr(e.result) && Qt.has(e.result.status);
}
function cr(e) {
	return e.type === "error";
}
function lr(e) {
	return (e && e.type) === "redirect";
}
function ur(e) {
	return typeof e == "object" && !!e && "type" in e && "data" in e && "init" in e && e.type === "DataWithResponseInit";
}
function dr(e) {
	return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && e.body !== void 0;
}
function fr(e) {
	return Qt.has(e);
}
function pr(e) {
	return dr(e) && fr(e.status) && e.headers.has("Location");
}
function mr(e) {
	return Zt.has(e.toUpperCase());
}
function Y(e) {
	return Yt.has(e.toUpperCase());
}
function hr(e) {
	return new URLSearchParams(e).getAll("index").some((e) => e === "");
}
function gr(e, t) {
	let n = typeof t == "string" ? Fe(t).search : t.search;
	if (e[e.length - 1].route.index && hr(n || "")) return e[e.length - 1];
	let r = vt(e);
	return r[r.length - 1];
}
function _r(e) {
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
function vr(e, t, n, r) {
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
function yr(e, t, n, r) {
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
function br(e, t) {
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
function xr(e, t) {
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
function Sr(e) {
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
function Cr(e, t) {
	try {
		let n = e.sessionStorage.getItem(an);
		if (n) {
			let e = JSON.parse(n);
			for (let [n, r] of Object.entries(e || {})) r && Array.isArray(r) && t.set(n, new Set(r || []));
		}
	} catch {}
}
function wr(e, t) {
	if (t.size > 0) {
		let n = {};
		for (let [e, r] of t) n[e] = [...r];
		try {
			e.sessionStorage.setItem(an, JSON.stringify(n));
		} catch (e) {
			K(!1, `Failed to save applied view transitions in sessionStorage (${e}).`);
		}
	}
}
function Tr() {
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
var Er = H.createContext(null);
Er.displayName = "DataRouter";
var Dr = H.createContext(null);
Dr.displayName = "DataRouterState";
var Or = H.createContext(!1);
function kr() {
	return H.useContext(Or);
}
var Ar = H.createContext({ isTransitioning: !1 });
Ar.displayName = "ViewTransition";
var jr = H.createContext(/* @__PURE__ */ new Map());
jr.displayName = "Fetchers";
var Mr = H.createContext(null);
Mr.displayName = "Await";
var Nr = H.createContext(null);
Nr.displayName = "Navigation";
var Pr = H.createContext(null);
Pr.displayName = "Location";
var Fr = H.createContext({
	outlet: null,
	matches: [],
	isDataRoute: !1
});
Fr.displayName = "Route";
var Ir = H.createContext(null);
Ir.displayName = "RouteError";
var Lr = "REACT_ROUTER_ERROR", Rr = "REDIRECT", zr = "ROUTE_ERROR_RESPONSE";
function Br(e) {
	if (e.startsWith(`${Lr}:${Rr}:{`)) try {
		let t = JSON.parse(e.slice(28));
		if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.location == "string" && typeof t.reloadDocument == "boolean" && typeof t.replace == "boolean") return t;
	} catch {}
}
function Vr(e) {
	if (e.startsWith(`${Lr}:${zr}:{`)) try {
		let t = JSON.parse(e.slice(40));
		if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string") return new Dt(t.status, t.statusText, t.data);
	} catch {}
}
function Hr(e, { relative: t } = {}) {
	G(Ur(), "useHref() may be used only in the context of a <Router> component.");
	let { basename: n, navigator: r } = H.useContext(Nr), { hash: i, pathname: a, search: o } = Jr(e, { relative: t }), s = a;
	return n !== "/" && (s = a === "/" ? n : St([n, a])), r.createHref({
		pathname: s,
		search: o,
		hash: i
	});
}
function Ur() {
	return H.useContext(Pr) != null;
}
function X() {
	return G(Ur(), "useLocation() may be used only in the context of a <Router> component."), H.useContext(Pr).location;
}
var Wr = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Gr(e) {
	H.useContext(Nr).static || H.useLayoutEffect(e);
}
function Kr() {
	let { isDataRoute: e } = H.useContext(Fr);
	return e ? pi() : qr();
}
function qr() {
	G(Ur(), "useNavigate() may be used only in the context of a <Router> component.");
	let e = H.useContext(Er), { basename: t, navigator: n } = H.useContext(Nr), { matches: r } = H.useContext(Fr), { pathname: i } = X(), a = JSON.stringify(yt(r)), o = H.useRef(!1);
	return Gr(() => {
		o.current = !0;
	}), H.useCallback((r, s = {}) => {
		if (K(o.current, Wr), !o.current) return;
		if (typeof r == "number") {
			n.go(r);
			return;
		}
		let c = bt(r, JSON.parse(a), i, s.relative === "path");
		e == null && t !== "/" && (c.pathname = c.pathname === "/" ? t : St([t, c.pathname])), qt(typeof r == "string" ? r : q(r), n.createHref(c), Wt(n), "reject"), (s.replace ? n.replace : n.push)(c, s.state, s);
	}, [
		t,
		n,
		a,
		i,
		e
	]);
}
H.createContext(null);
function Jr(e, { relative: t } = {}) {
	let { matches: n } = H.useContext(Fr), { pathname: r } = X(), i = JSON.stringify(yt(n));
	return H.useMemo(() => bt(e, JSON.parse(i), r, t === "path"), [
		e,
		i,
		r,
		t
	]);
}
function Yr(e, t) {
	return Xr(e, t);
}
function Xr(e, t, n) {
	G(Ur(), "useRoutes() may be used only in the context of a <Router> component.");
	let { navigator: r } = H.useContext(Nr), { matches: i } = H.useContext(Fr), a = i[i.length - 1], o = a ? a.params : {}, s = a ? a.pathname : "/", c = a ? a.pathnameBase : "/", l = a && a.route;
	{
		let e = l && l.path || "";
		hi(s, !l || e.endsWith("*") || e.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e === "/" ? "*" : `${e}/*`}">.`);
	}
	let u = X(), d;
	if (t) {
		let e = typeof t == "string" ? Fe(t) : t;
		G(c === "/" || e.pathname?.startsWith(c), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`), d = e;
	} else d = u;
	let f = d.pathname || "/", p = f;
	if (c !== "/") {
		let e = c.replace(/^\//, "").split("/");
		p = "/" + f.replace(/^\//, "").split("/").slice(e.length).join("/");
	}
	let m = n && n.state.matches.length ? n.state.matches.map((e) => Object.assign(e, { route: n.manifest[e.route.id] || e.route })) : Ke(e, { pathname: p });
	K(l || m != null, `No routes matched location "${d.pathname}${d.search}${d.hash}" `), K(m == null || m[m.length - 1].route.element !== void 0 || m[m.length - 1].route.Component !== void 0 || m[m.length - 1].route.lazy !== void 0, `Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
	let h = ri(m && m.map((e) => Object.assign({}, e, {
		params: Object.assign({}, o, e.params),
		pathname: St([c, r.encodeLocation ? r.encodeLocation(e.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : e.pathname]),
		pathnameBase: e.pathnameBase === "/" ? c : St([c, r.encodeLocation ? r.encodeLocation(e.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : e.pathnameBase])
	})), i, n);
	return t && h ? /* @__PURE__ */ H.createElement(Pr.Provider, { value: {
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
function Zr() {
	let e = ui(), t = Ot(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, r = "rgba(200,200,200, 0.5)", i = {
		padding: "0.5rem",
		backgroundColor: r
	}, a = {
		padding: "2px 4px",
		backgroundColor: r
	}, o = null;
	return console.error("Error handled by React Router default ErrorBoundary:", e), o = /* @__PURE__ */ H.createElement(H.Fragment, null, /* @__PURE__ */ H.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ H.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ H.createElement("code", { style: a }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ H.createElement("code", { style: a }, "errorElement"), " prop on your route.")), /* @__PURE__ */ H.createElement(H.Fragment, null, /* @__PURE__ */ H.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ H.createElement("h3", { style: { fontStyle: "italic" } }, t), n ? /* @__PURE__ */ H.createElement("pre", { style: i }, n) : null, o);
}
var Qr = /* @__PURE__ */ H.createElement(Zr, null), $r = class extends H.Component {
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
			let t = Vr(e.digest);
			t && (e = t);
		}
		let t = e === void 0 ? this.props.children : /* @__PURE__ */ H.createElement(Fr.Provider, { value: this.props.routeContext }, /* @__PURE__ */ H.createElement(Ir.Provider, {
			value: e,
			children: this.props.component
		}));
		return this.context ? /* @__PURE__ */ H.createElement(ti, { error: e }, t) : t;
	}
};
$r.contextType = Or;
var ei = /* @__PURE__ */ new WeakMap();
function ti({ children: e, error: t }) {
	let { basename: n, navigator: r } = H.useContext(Nr);
	if (typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
		let e = Br(t.digest);
		if (e) {
			let i = ei.get(t);
			if (i) throw i;
			let a = jt(e.location, n), o = a.absoluteURL || a.to;
			if (qt(e.location, o, Wt(r), "allow-explicit"), Hn(o)) throw Error("Invalid redirect location");
			if (At && !ei.get(t)) {
				if (a.isExternal || e.reloadDocument) window.location.href = o;
				else {
					let n = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(a.to, { replace: e.replace }));
					throw ei.set(t, n), n;
				}
			}
			return /* @__PURE__ */ H.createElement("meta", {
				httpEquiv: "refresh",
				content: `0;url=${o}`
			});
		}
	}
	return e;
}
function ni({ routeContext: e, match: t, children: n }) {
	let r = H.useContext(Er);
	return r && r.static && r.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = t.route.id), /* @__PURE__ */ H.createElement(Fr.Provider, { value: e }, n);
}
function ri(e, t = [], n) {
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
			pattern: kt(r.matches),
			errorInfo: t
		});
	} : void 0;
	return i.reduceRight((e, n, c) => {
		let u, d = !1, f = null, p = null;
		r && (u = a && n.route.id ? a[n.route.id] : void 0, f = n.route.errorElement || Qr, o && (s < 0 && c === 0 ? (hi("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), d = !0, p = null) : s === c && (d = !0, p = n.route.hydrateFallbackElement || null)));
		let m = t.concat(i.slice(0, c + 1)), h = () => {
			let t;
			return t = u ? f : d ? p : n.route.Component ? /* @__PURE__ */ H.createElement(n.route.Component, null) : n.route.element ? n.route.element : e, /* @__PURE__ */ H.createElement(ni, {
				match: n,
				routeContext: {
					outlet: e,
					matches: m,
					isDataRoute: r != null
				},
				children: t
			});
		};
		return r && (n.route.ErrorBoundary || n.route.errorElement || c === 0) ? /* @__PURE__ */ H.createElement($r, {
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
function ii(e) {
	return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function ai(e) {
	let t = H.useContext(Er);
	return G(t, ii(e)), t;
}
function oi(e) {
	let t = H.useContext(Dr);
	return G(t, ii(e)), t;
}
function si(e) {
	let t = H.useContext(Fr);
	return G(t, ii(e)), t;
}
function ci(e) {
	let t = si(e), n = t.matches[t.matches.length - 1];
	return G(n.route.id, `${e} can only be used on routes that contain a unique "id"`), n.route.id;
}
function li() {
	return ci("useRouteId");
}
function ui() {
	let e = H.useContext(Ir), t = oi("useRouteError"), n = ci("useRouteError");
	return e === void 0 ? t.errors?.[n] : e;
}
var di = 0;
function fi(e) {
	let { router: t, basename: n } = ai("useBlocker"), r = oi("useBlocker"), [i, a] = H.useState(""), o = H.useCallback((t) => {
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
	return H.useEffect(() => {
		let e = String(++di);
		return a(e), () => t.deleteBlocker(e);
	}, [t]), H.useEffect(() => {
		i !== "" && t.getBlocker(i, o);
	}, [
		t,
		i,
		o
	]), i && r.blockers.has(i) ? r.blockers.get(i) : nn;
}
function pi() {
	let { router: e } = ai("useNavigate"), t = ci("useNavigate"), n = H.useRef(!1);
	return Gr(() => {
		n.current = !0;
	}), H.useCallback(async (r, i = {}) => {
		K(n.current, Wr), n.current && (typeof r == "number" ? await e.navigate(r) : await e.navigate(r, {
			fromRouteId: t,
			...i
		}));
	}, [e, t]);
}
var mi = {};
function hi(e, t, n) {
	!t && !mi[e] && (mi[e] = !0, K(!1, n));
}
var gi = {};
function _i(e, t) {
	!e && !gi[t] && (gi[t] = !0, console.warn(t));
}
var vi = H.useOptimistic, yi = () => void 0;
function bi(e) {
	return vi ? vi(e) : [e, yi];
}
function xi(e) {
	let t = { hasErrorBoundary: e.hasErrorBoundary || e.ErrorBoundary != null || e.errorElement != null };
	return e.Component && (e.element && K(!1, "You should not include both `Component` and `element` on your route - `Component` will be used."), Object.assign(t, {
		element: H.createElement(e.Component),
		Component: void 0
	})), e.HydrateFallback && (e.hydrateFallbackElement && K(!1, "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."), Object.assign(t, {
		hydrateFallbackElement: H.createElement(e.HydrateFallback),
		HydrateFallback: void 0
	})), e.ErrorBoundary && (e.errorElement && K(!1, "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."), Object.assign(t, {
		errorElement: H.createElement(e.ErrorBoundary),
		ErrorBoundary: void 0
	})), t;
}
var Si = ["HydrateFallback", "hydrateFallbackElement"];
function Ci(e, t) {
	return fn({
		basename: t?.basename,
		getContext: t?.getContext,
		future: t?.future,
		history: Me({
			initialEntries: t?.initialEntries,
			initialIndex: t?.initialIndex
		}),
		hydrationData: t?.hydrationData,
		routes: e,
		hydrationRouteProperties: Si,
		mapRouteProperties: xi,
		dataStrategy: t?.dataStrategy,
		patchRoutesOnNavigation: t?.patchRoutesOnNavigation,
		instrumentations: t?.instrumentations
	}).initialize();
}
var wi = class {
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
function Ti({ router: e, flushSync: t, onError: n, useTransitions: r }) {
	r = kr() || r;
	let [i, a] = H.useState(e.state), [o, s] = bi(i), [c, l] = H.useState(), [u, d] = H.useState({ isTransitioning: !1 }), [f, p] = H.useState(), [m, h] = H.useState(), [g, _] = H.useState(), v = H.useRef(/* @__PURE__ */ new Map()), y = H.useCallback((i, { deletedFetchers: o, newErrors: c, flushSync: u, viewTransitionOpts: g }) => {
		c && n && Object.values(c).forEach((e) => n(e, {
			location: i.location,
			params: i.matches[0]?.params ?? {},
			pattern: kt(i.matches)
		})), i.fetchers.forEach((e, t) => {
			e.data !== void 0 && v.current.set(t, e.data);
		}), o.forEach((e) => v.current.delete(e)), _i(u === !1 || t != null, "You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from \"react-router/dom\"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.");
		let y = e.window != null && e.window.document != null && typeof e.window.document.startViewTransition == "function";
		if (_i(g == null || y, "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."), !g || !y) {
			t && u ? t(() => a(i)) : r === !1 ? a(i) : H.startTransition(() => {
				r === !0 && s((e) => Ei(e, i)), a(i);
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
	H.useLayoutEffect(() => e.subscribe(y), [e, y]), H.useEffect(() => {
		u.isTransitioning && !u.flushSync && p(new wi());
	}, [u]), H.useEffect(() => {
		if (f && c && e.window) {
			let t = c, n = f.promise, i = e.window.document.startViewTransition(async () => {
				r === !1 ? a(t) : H.startTransition(() => {
					r === !0 && s((e) => Ei(e, t)), a(t);
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
	]), H.useEffect(() => {
		f && c && o.location.key === c.location.key && f.resolve();
	}, [
		f,
		m,
		o.location,
		c
	]), H.useEffect(() => {
		!u.isTransitioning && g && (l(g.state), d({
			isTransitioning: !0,
			flushSync: !1,
			currentLocation: g.currentLocation,
			nextLocation: g.nextLocation
		}), _(void 0));
	}, [u.isTransitioning, g]);
	let b = H.useMemo(() => ({
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
	}), [e]), x = e.basename || "/", S = H.useMemo(() => ({
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
	return /* @__PURE__ */ H.createElement(H.Fragment, null, /* @__PURE__ */ H.createElement(Er.Provider, { value: S }, /* @__PURE__ */ H.createElement(Dr.Provider, { value: o }, /* @__PURE__ */ H.createElement(jr.Provider, { value: v.current }, /* @__PURE__ */ H.createElement(Ar.Provider, { value: u }, /* @__PURE__ */ H.createElement(ji, {
		basename: x,
		location: o.location,
		navigationType: o.historyAction,
		navigator: b,
		useTransitions: r
	}, /* @__PURE__ */ H.createElement(Di, {
		routes: e.routes,
		manifest: e.manifest,
		future: e.future,
		state: o,
		isStatic: !1,
		onError: n
	})))))), null);
}
function Ei(e, t) {
	return {
		...e,
		navigation: t.navigation.state === "idle" ? e.navigation : t.navigation,
		revalidation: t.revalidation === "idle" ? e.revalidation : t.revalidation,
		actionData: t.navigation.state === "submitting" ? e.actionData : t.actionData,
		fetchers: t.fetchers
	};
}
var Di = H.memo(Oi);
function Oi({ routes: e, manifest: t, future: n, state: r, isStatic: i, onError: a }) {
	return Xr(e, void 0, {
		manifest: t,
		state: r,
		isStatic: i,
		onError: a,
		future: n
	});
}
function ki({ to: e, replace: t, state: n, relative: r }) {
	G(Ur(), "<Navigate> may be used only in the context of a <Router> component.");
	let { static: i, navigator: a } = H.useContext(Nr);
	K(!i, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
	let { matches: o } = H.useContext(Fr), { pathname: s } = X(), c = Kr(), l = bt(e, yt(o), s, r === "path");
	qt(typeof e == "string" ? e : q(e), a.createHref(l), Wt(a), "reject");
	let u = JSON.stringify(l);
	return H.useEffect(() => {
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
function Ai(e) {
	G(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
}
function ji({ basename: e = "/", children: t = null, location: n, navigationType: r = "POP", navigator: i, static: a = !1, useTransitions: o }) {
	G(!Ur(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
	let s = e.replace(/^\/*/, "/"), c = H.useMemo(() => ({
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
	typeof n == "string" && (n = Fe(n));
	let { pathname: l = "/", search: u = "", hash: d = "", state: f = null, key: p = "default", mask: m } = n, h = H.useMemo(() => {
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
	return K(h != null, `<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`), h == null ? null : /* @__PURE__ */ H.createElement(Nr.Provider, { value: c }, /* @__PURE__ */ H.createElement(Pr.Provider, {
		children: t,
		value: h
	}));
}
function Mi({ children: e, location: t }) {
	return Yr(Ni(e), t);
}
H.Component;
function Ni(e, t = []) {
	let n = [];
	return H.Children.forEach(e, (e, r) => {
		if (!H.isValidElement(e)) return;
		let i = [...t, r];
		if (e.type === H.Fragment) {
			n.push.apply(n, Ni(e.props.children, i));
			return;
		}
		G(e.type === Ai, `[${typeof e.type == "string" ? e.type : e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), G(!e.props.index || !e.props.children, "An index route cannot have child routes.");
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
		e.props.children && (a.children = Ni(e.props.children, i)), n.push(a);
	}), n;
}
var Pi = "get", Fi = "application/x-www-form-urlencoded";
function Ii(e) {
	return typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function Li(e) {
	return Ii(e) && e.tagName.toLowerCase() === "button";
}
function Ri(e) {
	return Ii(e) && e.tagName.toLowerCase() === "form";
}
function zi(e) {
	return Ii(e) && e.tagName.toLowerCase() === "input";
}
function Bi(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Vi(e, t) {
	return e.button === 0 && (!t || t === "_self") && !Bi(e);
}
function Hi(e = "") {
	return new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((t, n) => {
		let r = e[n];
		return t.concat(Array.isArray(r) ? r.map((e) => [n, e]) : [[n, r]]);
	}, []));
}
function Ui(e, t) {
	let n = Hi(e);
	return t && t.forEach((e, r) => {
		n.has(r) || t.getAll(r).forEach((e) => {
			n.append(r, e);
		});
	}), n;
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
	return e != null && !Ki.has(e) ? (K(!1, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Fi}"`), null) : e;
}
function Ji(e, t) {
	let n, r, i, a, o;
	if (Ri(e)) {
		let o = e.getAttribute("action");
		r = o ? J(o, t) : null, n = e.getAttribute("method") || Pi, i = qi(e.getAttribute("enctype")) || Fi, a = new FormData(e);
	} else if (Li(e) || zi(e) && (e.type === "submit" || e.type === "image")) {
		let o = e.form;
		if (o == null) throw Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
		let s = e.getAttribute("formaction") || o.getAttribute("action");
		if (r = s ? J(s, t) : null, n = e.getAttribute("formmethod") || o.getAttribute("method") || Pi, i = qi(e.getAttribute("formenctype")) || qi(o.getAttribute("enctype")) || Fi, a = new FormData(o, e), !Gi()) {
			let { name: t, type: n, value: r } = e;
			if (n === "image") {
				let e = t ? `${t}.` : "";
				a.append(`${e}x`, "0"), a.append(`${e}y`, "0");
			} else t && a.append(t, r);
		}
	} else if (Ii(e)) throw Error("Cannot submit element that is not <form>, <button>, or <input type=\"submit|image\">");
	else n = Pi, r = null, i = Fi, o = e;
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
	return i.pathname = n ? i.pathname.endsWith("/") ? `${i.pathname}_.${r}` : `${i.pathname}.${r}` : i.pathname === "/" ? `_root.${r}` : t && J(i.pathname, t) === "/" ? `${Ct(t)}/_root.${r}` : `${Ct(i.pathname)}.${r}`, i;
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
	let e = H.useContext(Er);
	return Yi(e, "You must render this element inside a <DataRouterContext.Provider> element"), e;
}
function sa() {
	let e = H.useContext(Dr);
	return Yi(e, "You must render this element inside a <DataRouterStateContext.Provider> element"), e;
}
var ca = H.createContext(void 0);
ca.displayName = "FrameworkContext";
function la() {
	let e = H.useContext(ca);
	return Yi(e, "You must render this element inside a <HydratedRouter> element"), e;
}
function ua(e, t) {
	let n = H.useContext(ca), [r, i] = H.useState(!1), [a, o] = H.useState(!1), { onFocus: s, onBlur: c, onMouseEnter: l, onMouseLeave: u, onTouchStart: d } = t, f = H.useRef(null);
	H.useEffect(() => {
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
	}, [e]), H.useEffect(() => {
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
	let n = kr(), { nonce: r } = la(), { router: i } = oa(), a = H.useMemo(() => Ke(i.routes, e, i.basename), [
		i.routes,
		e,
		i.basename
	]);
	return a ? (t.nonce == null && r && (t = {
		...t,
		nonce: r
	}), n ? /* @__PURE__ */ H.createElement(ma, {
		page: e,
		matches: a,
		...t
	}) : /* @__PURE__ */ H.createElement(ha, {
		page: e,
		matches: a,
		...t
	})) : null;
}
function pa(e) {
	let { manifest: t, routeModules: n } = la(), [r, i] = H.useState([]);
	return H.useEffect(() => {
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
	let r = X(), { future: i } = la(), { basename: a } = oa(), o = H.useMemo(() => {
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
	return /* @__PURE__ */ H.createElement(H.Fragment, null, o.map((e) => /* @__PURE__ */ H.createElement("link", {
		key: e,
		rel: "prefetch",
		as: "fetch",
		href: e,
		...n
	})));
}
function ha({ page: e, matches: t, ...n }) {
	let r = X(), { future: i, manifest: a, routeModules: o } = la(), { basename: s } = oa(), { loaderData: c, matches: l } = sa(), u = H.useMemo(() => ta(e, t, l, a, r, "data"), [
		e,
		t,
		l,
		a,
		r
	]), d = H.useMemo(() => ta(e, t, l, a, r, "assets"), [
		e,
		t,
		l,
		a,
		r
	]), f = H.useMemo(() => {
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
	]), p = H.useMemo(() => na(d, a), [d, a]), m = pa(d);
	return /* @__PURE__ */ H.createElement(H.Fragment, null, f.map((e) => /* @__PURE__ */ H.createElement("link", {
		key: e,
		rel: "prefetch",
		as: "fetch",
		href: e,
		...n
	})), p.map((e) => /* @__PURE__ */ H.createElement("link", {
		key: e,
		rel: "modulepreload",
		href: e,
		...n
	})), m.map(({ key: e, link: t }) => /* @__PURE__ */ H.createElement("link", {
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
H.Component;
var _a = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
try {
	_a && (window.__reactRouterVersion = "7.18.3");
} catch {}
var Z = H.forwardRef(function({ onClick: e, discover: t = "render", prefetch: n = "none", relative: r, reloadDocument: i, replace: a, mask: o, state: s, target: c, to: l, preventScrollReset: u, viewTransition: d, defaultShouldRevalidate: f, ...p }, m) {
	let { basename: h, navigator: g, useTransitions: _ } = H.useContext(Nr), v = typeof l == "string" && Oe.test(l), y = jt(l, h);
	l = y.to;
	let b = Hr(l, { relative: r }), x = X(), S = null;
	if (o) {
		let e = bt(o, [], x.mask ? x.mask.pathname : "/", !0);
		h !== "/" && (e.pathname = e.pathname === "/" ? h : St([h, e.pathname])), S = g.createHref(e);
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
	let O = !(y.isExternal || i), k = /* @__PURE__ */ H.createElement("a", {
		...p,
		...T,
		href: (O ? S : void 0) || y.absoluteURL || b,
		onClick: O ? D : e,
		ref: ga(m, w),
		target: c,
		"data-discover": !v && t === "render" ? "true" : void 0
	});
	return C && !v ? /* @__PURE__ */ H.createElement(H.Fragment, null, k, /* @__PURE__ */ H.createElement(fa, { page: b })) : k;
});
Z.displayName = "Link";
var va = H.forwardRef(function({ "aria-current": e = "page", caseSensitive: t = !1, className: n = "", end: r = !1, style: i, to: a, viewTransition: o, children: s, ...c }, l) {
	let u = Jr(a, { relative: c.relative }), d = X(), f = H.useContext(Dr), { navigator: p, basename: m } = H.useContext(Nr), h = f != null && Oa(u) && o === !0, g = p.encodeLocation ? p.encodeLocation(u).pathname : u.pathname, _ = d.pathname, v = f && f.navigation && f.navigation.location ? f.navigation.location.pathname : null;
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
	return /* @__PURE__ */ H.createElement(Z, {
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
var ya = H.forwardRef(({ discover: e = "render", fetcherKey: t, navigate: n, reloadDocument: r, replace: i, state: a, method: o = Pi, action: s, onSubmit: c, relative: l, preventScrollReset: u, viewTransition: d, defaultShouldRevalidate: f, ...p }, m) => {
	let { useTransitions: h } = H.useContext(Nr), g = Ea(), _ = Da(s, { relative: l }), v = o.toLowerCase() === "get" ? "get" : "post", y = typeof s == "string" && Oe.test(s);
	return /* @__PURE__ */ H.createElement("form", {
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
			h && n !== !1 ? H.startTransition(() => p()) : p();
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
	let t = H.useContext(Er);
	return G(t, ba(e)), t;
}
function Sa(e, { target: t, replace: n, mask: r, state: i, preventScrollReset: a, relative: o, viewTransition: s, defaultShouldRevalidate: c, useTransitions: l } = {}) {
	let u = Kr(), d = X(), f = Jr(e, { relative: o });
	return H.useCallback((p) => {
		if (Vi(p, t)) {
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
			l ? H.startTransition(() => m()) : m();
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
function Ca(e) {
	K(typeof URLSearchParams < "u", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");
	let t = H.useRef(Hi(e)), n = H.useRef(!1), r = X(), i = H.useMemo(() => Ui(r.search, n.current ? null : t.current), [r.search]), a = Kr();
	return [i, H.useCallback((e, t) => {
		let r = Hi(typeof e == "function" ? e(new URLSearchParams(i)) : e);
		n.current = !0, a("?" + r, t);
	}, [a, i])];
}
var wa = 0, Ta = () => `__${String(++wa)}__`;
function Ea() {
	let { router: e } = xa("useSubmit"), { basename: t } = H.useContext(Nr), n = li(), r = e.fetch, i = e.navigate;
	return H.useCallback(async (e, a = {}) => {
		let { action: o, method: s, encType: c, formData: l, body: u } = Ji(e, t);
		if (a.navigate === !1) {
			let e = a.fetcherKey || Ta();
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
function Da(e, { relative: t } = {}) {
	let { basename: n } = H.useContext(Nr), r = H.useContext(Fr);
	G(r, "useFormAction must be used inside a RouteContext");
	let [i] = r.matches.slice(-1), a = { ...Jr(e || ".", { relative: t }) }, o = X();
	if (e == null) {
		a.search = o.search;
		let e = new URLSearchParams(a.search), t = e.getAll("index");
		if (t.some((e) => e === "")) {
			e.delete("index"), t.filter((e) => e).forEach((t) => e.append("index", t));
			let n = e.toString();
			a.search = n ? `?${n}` : "";
		}
	}
	return (!e || e === ".") && i.route.index && (a.search = a.search ? a.search.replace(/^\?/, "?index&") : "?index"), n !== "/" && (a.pathname = a.pathname === "/" ? n : St([n, a.pathname])), q(a);
}
function Oa(e, { relative: t } = {}) {
	let n = H.useContext(Ar);
	G(n != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
	let { basename: r } = xa("useViewTransitionState"), i = Jr(e, { relative: t });
	if (!n.isTransitioning) return !1;
	let a = J(n.currentLocation.pathname, r) || n.currentLocation.pathname, o = J(n.nextLocation.pathname, r) || n.nextLocation.pathname;
	return lt(i.pathname, o) != null || lt(i.pathname, a) != null;
}
//#endregion
//#region apps/web/src/ApplicationErrorBoundary.tsx
var Q = ne();
function ka() {
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
function Aa() {
	let e = ui();
	return (0, H.useEffect)(() => {
		console.error("Cabane route failed:", e);
	}, [e]), /* @__PURE__ */ (0, Q.jsx)(ka, {});
}
var ja = class extends H.Component {
	state = { hasError: !1 };
	static getDerivedStateFromError() {
		return { hasError: !0 };
	}
	componentDidCatch(e, t) {
		console.error("Cabane application failed:", e, t.componentStack);
	}
	render() {
		return this.state.hasError ? /* @__PURE__ */ (0, Q.jsx)(ka, {}) : this.props.children;
	}
}, Ma = /* @__PURE__ */ e(p(), 1), Na = class extends Error {
	constructor() {
		super("This workspace changed on Home Assistant."), this.name = "HaWorkspaceConflictError";
	}
}, Pa = class extends Error {
	constructor() {
		super("Cabane workspace storage is not installed on this Home Assistant instance."), this.name = "HaWorkspaceUnavailableError";
	}
}, Fa = (e) => {
	if (e && typeof e == "object" && "code" in e && typeof e.code == "string") return e.code;
};
function Ia(e) {
	let t = async (t) => {
		try {
			return await e(t);
		} catch (e) {
			let t = Fa(e);
			throw t === "conflict" ? new Na() : [
				"unknown_command",
				"unknown_error",
				"not_found"
			].includes(t ?? "") ? new Pa() : e;
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
function La({ title: e, titleIcon: t, busy: n, error: r, onCancel: i, children: a }) {
	let o = ee(), s = (0, H.useRef)(null);
	return (0, H.useEffect)(() => {
		let e = o.root.activeElement;
		return s.current?.showModal?.(), () => e?.focus();
	}, [o]), /* @__PURE__ */ (0, Q.jsxs)("dialog", {
		ref: s,
		className: "workspace-dialog",
		"aria-labelledby": "workspace-dialog-title",
		onCancel: (e) => {
			e.preventDefault(), n || i();
		},
		children: [
			/* @__PURE__ */ (0, Q.jsxs)("h2", {
				id: "workspace-dialog-title",
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
var Ra = class extends Error {
	constructor() {
		super("Update the Cabane Home Assistant integration to sync houses with GLB models."), this.name = "HaAssetUpgradeRequiredError";
	}
}, za = (e) => {
	let t = "";
	for (let n = 0; n < e.length; n += 8192) t += String.fromCharCode(...e.subarray(n, n + 8192));
	return btoa(t);
}, Ba = (e) => Uint8Array.from(atob(e), (e) => e.charCodeAt(0));
function Va(e) {
	let t = async () => {
		try {
			let t = await e({ type: "cabane/assets/capabilities" });
			if (t.version !== 1 || t.chunk_bytes !== w.chunkBytes) throw new Ra();
		} catch (e) {
			throw e instanceof Ra || e && typeof e == "object" && "code" in e && e.code === "unknown_command" ? new Ra() : e;
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
				for (let r = 0; r < t.byteLength; r += w.chunkBytes) {
					let i = t.bytes.subarray(r, r + w.chunkBytes);
					if ((await e({
						type: "cabane/assets/upload",
						upload_id: n,
						offset: r,
						data: za(i)
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
				if (n && n.byteLength === t.byteLength && await E(n) === t.sha256) continue;
				let a = new Uint8Array(t.byteLength);
				for (let n = 0; n < t.byteLength;) {
					let r = await e({
						type: "cabane/assets/get",
						sha256: t.sha256,
						offset: n
					}), i = Ba(r.data);
					if (r.byte_length !== t.byteLength || r.offset !== n || !i.length || i.length > w.chunkBytes || n + i.length > a.length) throw Error("The GLB download is incomplete. Retry synchronization.");
					a.set(i, n), n += i.length;
				}
				if (await E(a) !== t.sha256) throw Error("GLB integrity check failed. The previous home is unchanged.");
				i.push({
					...t,
					bytes: a
				});
			}
			await x(i);
		}
	};
}
function Ha(e, t) {
	let n = Ia(e), r = Va(e);
	return {
		...n,
		get: async (e) => {
			let i = await n.get(e);
			return i?.document && !i.corrupt && await r.download(V(i.document), (e) => t.read(e)), i;
		},
		put: async (e, i, a) => (await r.upload(await t.verify(V(i))), n.put(e, i, a))
	};
}
//#endregion
//#region apps/web/src/workspaces/workspace-sync-coordinator.ts
function Ua(e) {
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
			return F({
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
var Wa = (e, t) => `${e}\u0000${t}`, Ga = (e, t, n) => l(e, "readonly", d, (e, r, i) => r(e.objectStore(d).get(Wa(t, n)), (e) => i(e ?? null))), Ka = (e, t) => l(e, "readwrite", d, (e, n, r) => n(e.objectStore(d).put(t, Wa(t.origin, t.homeId)), () => r())), qa = (e, t, n) => l(e, "readwrite", d, (e, r, i) => r(e.objectStore(d).delete(Wa(t, n)), () => i()));
async function Ja(e, n) {
	let r = O(JSON.parse(de(e, n)));
	return t(new TextEncoder().encode(r));
}
//#endregion
//#region apps/web/src/workspaces/workspace-remote-transfer.ts
function Ya(e, t, n, r, i) {
	let a;
	try {
		a = JSON.parse(t);
	} catch {
		throw Error("The HA workspace copy is not valid JSON.");
	}
	if (!a || typeof a != "object" || !("format" in a) || a.format !== "cabane-workspace") throw Error("The HA workspace copy is not a private Cabane backup.");
	let o = se(t, ge);
	if (r && o.record.homeId !== r) throw Error("The HA workspace copy belongs to a different workspace.");
	if (i && N(o.homeAssistantUrl) !== N(i)) throw Error("This saved workspace belongs to a different Home Assistant. Open it from its original server.");
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
function Xa(e, t) {
	let n = S(), r = (0, H.useMemo)(() => Ha(n.sendStorageMessage, a(window.indexedDB)), [n.sendStorageMessage]);
	return {
		runtime: n,
		client: r,
		coordinator: (0, H.useMemo)(() => Ua({
			repository: e,
			client: r,
			cursors: {
				read: (e, t) => Ga(window.indexedDB, e, t),
				write: (e) => Ka(window.indexedDB, e),
				remove: (e, t) => qa(window.indexedDB, e, t)
			},
			fingerprint: (e) => Ja(e.metadata, e.record),
			serialize: (e) => de(e.metadata, e.record),
			restore: (r, i, a) => Ya(e, r, i, a, t ?? n.origin ?? void 0)
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
function Za() {
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
//#region apps/web/src/workspaces/WorkspaceHaLibrary.tsx
function Qa({ repository: e, onRestored: t, onBusyChange: n, localWorkspaceIds: r, disabled: i = !1 }) {
	let a = L(), { runtime: o, client: s, coordinator: c } = Xa(e), [l, u] = (0, H.useState)([]), [d, f] = (0, H.useState)(null), [p, m] = (0, H.useState)(null), h = p !== null;
	(0, H.useEffect)(() => {
		n?.(h);
	}, [h, n]);
	let g = (0, H.useCallback)(async () => {
		try {
			u(await s.list()), f(null);
		} catch (e) {
			f(e instanceof Error ? e.message : "Could not list HA workspaces.");
		}
	}, [s]);
	(0, H.useEffect)(() => {
		if (o.status !== "connected") return;
		g();
		let e = () => void g();
		return window.addEventListener("focus", e), () => window.removeEventListener("focus", e);
	}, [o.status, g]);
	let _ = async (e) => {
		m(e.home_id), f(null);
		try {
			if ((await c.openRemote(e.home_id, o.origin)).kind === "conflict") throw Error("This browser has different changes. Open the local workspace to review its saved copies.");
			await t(e.home_id);
		} catch (e) {
			f(e instanceof Error ? e.message : "Could not restore this workspace.");
		} finally {
			m(null);
		}
	}, v = async (e) => {
		try {
			let t = await s.get(e.home_id);
			if (!t?.document) throw Error("No HA copy exists.");
			ae(t.document, `${e.home_id}-ha-recovery.json`);
		} catch (e) {
			f(e instanceof Error ? e.message : "Could not download HA data.");
		}
	};
	if (r) {
		let e = l.filter((e) => !e.corrupt && !r.includes(e.home_id));
		return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [o.status === "connected" && e.map((e) => /* @__PURE__ */ (0, Q.jsxs)("article", {
			className: "workspace-card workspace-card--suggested",
			children: [
				/* @__PURE__ */ (0, Q.jsx)("button", {
					type: "button",
					className: "workspace-card-target",
					disabled: h || i,
					"aria-label": `Add ${e.name} from Home Assistant`,
					"aria-busy": p === e.home_id,
					onClick: () => void _(e)
				}),
				/* @__PURE__ */ (0, Q.jsx)("h2", { children: e.name }),
				/* @__PURE__ */ (0, Q.jsx)("p", {
					className: "workspace-suggestion-description",
					children: "Saved in Home Assistant"
				}),
				/* @__PURE__ */ (0, Q.jsxs)("p", {
					className: "workspace-server workspace-suggestion-server",
					children: [/* @__PURE__ */ (0, Q.jsx)(Za, {}), /* @__PURE__ */ (0, Q.jsx)("span", { children: new URL(o.origin).host })]
				}),
				/* @__PURE__ */ (0, Q.jsx)("div", {
					className: "workspace-card-footer",
					children: /* @__PURE__ */ (0, Q.jsxs)("span", {
						className: "workspace-suggestion-action",
						children: [/* @__PURE__ */ (0, Q.jsx)(z, { name: "plus" }), p === e.home_id ? "Adding workspace…" : "Add workspace"]
					})
				})
			]
		}, e.home_id)), (d || o.error) && /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "workspace-suggestion-error",
			children: [/* @__PURE__ */ (0, Q.jsx)("p", {
				role: "alert",
				className: "workspace-error",
				children: d ?? o.error
			}), /* @__PURE__ */ (0, Q.jsx)("button", {
				type: "button",
				disabled: h || i,
				onClick: () => {
					o.status === "connected" ? g() : o.retry();
				},
				children: "Retry suggested workspaces"
			})]
		})] });
	}
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "workspace-ha-library-content",
		children: [
			o.status === "connected" ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
				/* @__PURE__ */ (0, Q.jsx)("button", {
					type: "button",
					onClick: () => void g(),
					children: "Refresh"
				}),
				l.length === 0 && !d && /* @__PURE__ */ (0, Q.jsx)("p", { children: "No Cabane workspaces saved on this HA instance." }),
				l.map((e) => /* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("span", { children: e.name }), /* @__PURE__ */ (0, Q.jsx)("button", {
					type: "button",
					disabled: h,
					onClick: () => void (e.corrupt ? v(e) : _(e)),
					children: e.corrupt ? "Download raw data" : "Open"
				})] }, e.home_id))
			] }) : a ? /* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("p", {
				role: "status",
				children: o.error ?? "Waiting for Home Assistant…"
			}), ["error", "disconnected"].includes(o.status) && /* @__PURE__ */ (0, Q.jsx)("button", {
				type: "button",
				onClick: o.retry,
				children: "Retry connection"
			})] }) : /* @__PURE__ */ (0, Q.jsx)("button", {
				type: "button",
				onClick: o.connect,
				children: "Sign in to Home Assistant"
			}),
			o.error && /* @__PURE__ */ (0, Q.jsx)("p", {
				role: "alert",
				children: o.error
			}),
			d && /* @__PURE__ */ (0, Q.jsx)("p", {
				role: "alert",
				children: d
			})
		]
	});
}
function $a({ repository: e, onRestored: t, initialOrigin: n, onBusyChange: r }) {
	let i = L(), [a, o] = (0, H.useState)(() => window.sessionStorage.getItem("cabane:ha-library-origin") ?? n ?? ""), s = i?.origin ?? N(a);
	return (0, H.useEffect)(() => {
		s && !i && window.sessionStorage.setItem("cabane:ha-library-origin", s);
	}, [s, i]), /* @__PURE__ */ (0, Q.jsxs)("section", {
		className: "workspace-ha-library",
		children: [
			i ? /* @__PURE__ */ (0, Q.jsxs)("p", { children: [
				"Choose a workspace saved on ",
				i.origin,
				". Sign-in is managed by Home Assistant."
			] }) : /* @__PURE__ */ (0, Q.jsx)("p", { children: "Sign in to choose a saved workspace." }),
			!i && /* @__PURE__ */ (0, Q.jsxs)("label", { children: ["Home Assistant address", /* @__PURE__ */ (0, Q.jsx)("input", {
				value: a,
				onChange: (e) => o(e.target.value),
				placeholder: "Enter HTTPS address"
			})] }),
			s && /* @__PURE__ */ (0, Q.jsx)(f, {
				homeAssistantUrl: s,
				children: /* @__PURE__ */ (0, Q.jsx)(Qa, {
					repository: e,
					onRestored: t,
					onBusyChange: r
				})
			}, s)
		]
	});
}
function eo({ repository: e, onRestored: t, localWorkspaceIds: n, busy: r, onBusyChange: i }) {
	let a = L();
	return a ? /* @__PURE__ */ (0, Q.jsx)(f, {
		homeAssistantUrl: a.origin,
		children: /* @__PURE__ */ (0, Q.jsx)(Qa, {
			repository: e,
			onRestored: t,
			localWorkspaceIds: n,
			disabled: r,
			onBusyChange: i
		})
	}, a.origin) : null;
}
//#endregion
//#region apps/web/src/workspaces/NativeWorkspaceWelcome.tsx
function to({ session: e, repository: t, onRestored: n, onBuild: r, onExplore: i, onCancel: a }) {
	let [s, c] = (0, H.useState)({ kind: "checking" }), [l, u] = (0, H.useState)(!1), [d, f] = (0, H.useState)(0);
	return (0, H.useEffect)(() => {
		let t = !0;
		c({ kind: "checking" });
		let n = window.setTimeout(() => {
			t = !1, c({
				kind: "error",
				message: "Home Assistant took too long to check saved homes. Try again."
			});
		}, 1e4);
		return (async () => {
			let t = o(window.location.href, e.origin);
			if (t) throw Error(t);
			if (e.connection.connected === !1) throw Error("Home Assistant is disconnected. Reconnect and try again.");
			return Ia((t) => e.connection.sendMessagePromise(t)).list();
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
	]), s.kind === "checking" ? /* @__PURE__ */ (0, Q.jsx)("main", {
		className: "direction-project-loading",
		role: "status",
		children: "Checking for homes saved on Home Assistant…"
	}) : s.kind === "empty" ? /* @__PURE__ */ (0, Q.jsx)(ki, {
		to: "/welcome",
		replace: !0
	}) : /* @__PURE__ */ (0, Q.jsx)("main", {
		className: "workspace-library",
		children: /* @__PURE__ */ (0, Q.jsxs)(La, {
			title: "Import a workspace",
			busy: l,
			error: s.kind === "error" ? s.message : null,
			onCancel: () => void a(),
			children: [s.kind === "saved" ? /* @__PURE__ */ (0, Q.jsx)($a, {
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
var no = (e) => /^[A-Za-z0-9_-]{1,200}$/.test(e), ro = (e) => {
	let t = N(e);
	return t && (e === t || e === `${t}/`) ? t : null;
};
function io(e) {
	let t = new URLSearchParams(e).get("action");
	return t === "sync" || t === "dashboard" || t === "device" ? t : null;
}
function ao(e, t, n, r) {
	let i = ro(n);
	if (!no(t) || !i) throw Error("A valid workspace and Home Assistant address are required.");
	let a = new URL(`/open/${encodeURIComponent(t)}`, e);
	if (!["https:", "http:"].includes(a.protocol) || a.username || a.password) throw Error("Invalid Cabane address.");
	return a.searchParams.set("ha", i), r && a.searchParams.set("view", "dashboard"), a.href;
}
function oo(e) {
	try {
		let t = new URL(e), n = /^\/open\/([^/]+)$/.exec(t.pathname), r = n ? decodeURIComponent(n[1]) : "", i = ro(t.searchParams.get("ha") ?? "");
		return !no(r) || !i ? null : {
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
var so = [
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
function co(e, t) {
	return `${$(e)}/mobile-editor?mode=${t === "furnish" ? "arrange" : "construct"}`;
}
function lo(e) {
	return Ke(so, e)?.[0].route.handle ?? null;
}
function $(e) {
	return `/workspaces/${encodeURIComponent(e)}`;
}
function uo(e) {
	return Ke([{ path: "/workspaces/:workspaceId/*" }], e)?.[0].params.workspaceId ?? null;
}
function fo(e, t) {
	let n = $(t);
	return e.panel === "home-assistant" ? `${n}/home-assistant` : e.panel === "action-bar" ? `${n}/shortcuts` : e.mode === "construct" ? `${n}/construct` : e.mode === "furnish" ? `${n}/arrange` : e.relationshipId ? `${n}/connect/devices` : e.view ? `${n}/connect/${e.view}` : `${n}/connect`;
}
function po(e, t) {
	return !lo(t) || uo(t) !== e;
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceOpenPage.tsx
function mo({ repository: e, target: t, onOpened: n }) {
	let { runtime: r, coordinator: i } = Xa(e, t.origin), a = (0, H.useRef)(!1), [o, s] = (0, H.useState)(!1), [c, l] = (0, H.useState)(null), [u, d] = (0, H.useState)(!1), f = (0, H.useCallback)(async () => {
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
	(0, H.useEffect)(() => {
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
				children: [p ? "Signing in…" : "Sign in & open", /* @__PURE__ */ (0, Q.jsx)(z, { name: "external" })]
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
function ho({ repository: e, onOpened: t }) {
	let n = X(), r = oo(new URL(`${n.pathname}${n.search}`, window.location.origin).href);
	return /* @__PURE__ */ (0, Q.jsx)("main", {
		className: "ha-page",
		children: /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "ha-page__content",
			children: [/* @__PURE__ */ (0, Q.jsx)("nav", {
				className: "ha-page__nav",
				children: /* @__PURE__ */ (0, Q.jsxs)(Z, {
					to: "/workspaces",
					children: [/* @__PURE__ */ (0, Q.jsx)(z, { name: "back" }), "Workspaces"]
				})
			}), r ? /* @__PURE__ */ (0, Q.jsx)(f, {
				homeAssistantUrl: r.origin,
				children: /* @__PURE__ */ (0, Q.jsx)(mo, {
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
var go = "cabane:last-opened-workspace", _o = (e) => `cabane:workspace-preview:${e}`;
function vo() {
	try {
		return window.localStorage.getItem(go);
	} catch {
		return null;
	}
}
function yo(e) {
	try {
		window.localStorage.setItem(go, e);
	} catch {}
}
function bo(e) {
	try {
		return window.localStorage.getItem(_o(e));
	} catch {
		return null;
	}
}
function xo(e, t) {
	if (!(!t.width || !t.height)) try {
		let n = document.createElement("canvas"), r = Math.min(640 / t.width, 480 / t.height, 1);
		n.width = Math.max(1, Math.round(t.width * r)), n.height = Math.max(1, Math.round(t.height * r));
		let i = n.getContext("2d");
		if (!i) return;
		i.drawImage(t, 0, 0, n.width, n.height), window.localStorage.setItem(_o(e), n.toDataURL("image/webp", .75));
	} catch {}
}
function So(e) {
	try {
		window.localStorage.removeItem(_o(e)), vo() === e && window.localStorage.removeItem(go);
	} catch {}
}
//#endregion
//#region apps/web/src/onboarding-config.ts
var Co = {
	available: !1,
	source: "https://github.com/cabane-app/cabane",
	selfHost: "https://github.com/cabane-app/cabane#readme"
};
//#endregion
//#region apps/web/src/workspaces/first-onboarding-light.ts
function wo(e, t) {
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
function To(e) {
	let t = Kr(), i = X(), [a, o] = (0, H.useState)(null), [s, c] = (0, H.useState)(!1), [l, u] = (0, H.useState)(!1), d = (0, H.useRef)(!1), [f, p] = (0, H.useState)(null), [h, g] = (0, H.useState)(null), _ = (0, H.useCallback)(async () => {
		if (e) try {
			o(await e.readOnboarding());
		} catch {
			p("Getting-started preferences are unavailable. Your workspaces are still available.");
		} finally {
			c(!0);
		}
	}, [e]);
	return (0, H.useEffect)(() => {
		_();
		let e = () => {
			_();
		};
		return window.addEventListener("focus", e), () => window.removeEventListener("focus", e);
	}, [_]), {
		state: a,
		loaded: s,
		busy: l,
		error: f,
		deleted: h,
		dismiss: (0, H.useCallback)(async (t) => {
			o((e) => e && {
				...e,
				[t === "welcome" ? "welcomeDismissed" : "nudgeDismissed"]: !0
			});
			try {
				await e?.dismissOnboarding(t);
			} catch {
				p("This preference could not be saved. You can keep using your home.");
			}
		}, [e]),
		start: (0, H.useCallback)(async (a, o) => {
			if (!(!e || d.current)) {
				d.current = !0, u(!0), p(null), g(null);
				try {
					let r = await e.readOnboarding(), s = await e.startOnboarding(a, { ...o === void 0 ? {} : { replaceDeletedId: o } });
					if (!s.record) throw Error(s.error ?? "Open Workspaces to recover this home.");
					let c = n();
					try {
						c = M(window.localStorage, s.metadata.id).record;
					} catch {}
					let l = c.launch?.target ?? (a === "connect" && s.record.publishedAt !== 0 ? wo(oe(s.record.published), "open-plan-living") : void 0), u = {
						...c,
						launch: {
							entry: a,
							introductionDismissed: !0,
							starterConsumed: !0,
							nudgeDismissed: !0,
							firstControlConfirmed: c.launch?.firstControlConfirmed ?? !1,
							...l ? { target: l } : {}
						}
					}, d = !1;
					try {
						d = m(window.localStorage, s.metadata.id, u);
					} catch {}
					if (d || p("Setup progress could not be saved. Your new home is safe in Workspaces."), a === "build" && r?.destinations.build !== s.metadata.id && ve(s.metadata.id), await _(), a === "build") {
						i.pathname !== "/build" && await t("/build");
						return;
					}
					l && s.metadata.homeAssistantUrl && s.record.bindings[s.metadata.homeAssistantUrl]?.published.entityIdsBySlotId[l.slotId] ? await t($(s.metadata.id)) : await t(fo({
						mode: "connect",
						view: "devices",
						...l?.roomId === void 0 ? {} : { roomId: l?.roomId },
						...l?.deviceId === void 0 ? {} : { relationshipId: l?.deviceId }
					}, s.metadata.id), { state: { editorRequest: {
						mode: "connect",
						view: "devices",
						roomId: l?.roomId,
						relationshipId: l?.deviceId
					} } });
				} catch (e) {
					p(e instanceof Error ? e.message : "Could not open your home. Please try again."), e instanceof r && g({
						path: a,
						id: e.workspaceId
					});
				} finally {
					d.current = !1, u(!1);
				}
			}
		}, [
			e,
			t,
			_,
			i.pathname
		]),
		clearError: () => {
			p(null), g(null);
		}
	};
}
//#endregion
//#region apps/web/src/workspaces/workspace-availability.ts
function Eo(e, t = !1, n) {
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
function Do({ entry: e, busy: t, onOpen: n, onAction: r, onRecover: i, onExportRaw: a }) {
	let { metadata: o, record: s, error: c } = e, [l, u] = (0, H.useState)(null), [d, f] = (0, H.useState)(!1), [p, m] = (0, H.useState)(!1), [h, g] = (0, H.useState)(!o.homeAssistantUrl);
	(0, H.useEffect)(() => {
		let e = !0;
		u(null), f(!1), m(!1), g(!o.homeAssistantUrl);
		let t = () => {
			o.homeAssistantUrl && Ga(window.indexedDB, o.homeAssistantUrl, o.id).then(async (t) => {
				let n = !!(t && s && await Ja(o, s) !== t.acknowledgedFingerprint);
				e && (u(t), f(n), g(!0));
			}).catch(() => {
				e && (m(!0), g(!0));
			});
		};
		return t(), window.addEventListener("focus", t), () => {
			e = !1, window.removeEventListener("focus", t);
		};
	}, [
		o.id,
		o.homeAssistantUrl,
		s,
		o
	]);
	let _ = Eo(l, d), v = {
		settings: "Home Assistant settings",
		sync: "Sync with Home Assistant",
		dashboard: "Add to Home Assistant",
		device: "Open on another device",
		rename: "Rename",
		duplicate: "Duplicate",
		export: "Export",
		delete: "Delete"
	}, y = bo(o.id), b = s && JSON.stringify(s.draft) !== JSON.stringify(s.published);
	return /* @__PURE__ */ (0, Q.jsxs)("article", {
		className: `workspace-card${c ? " workspace-card--recovery" : ""}`,
		children: [
			!c && /* @__PURE__ */ (0, Q.jsx)("button", {
				className: "workspace-card-target",
				disabled: t,
				onClick: n,
				"aria-label": `Open ${o.name}`
			}),
			/* @__PURE__ */ (0, Q.jsxs)("details", { children: [/* @__PURE__ */ (0, Q.jsx)("summary", {
				"aria-label": `Actions for ${o.name}`,
				children: "•••"
			}), /* @__PURE__ */ (0, Q.jsx)("div", {
				className: "workspace-menu",
				children: [
					"settings",
					"sync",
					"dashboard",
					"device",
					"rename",
					"duplicate",
					"export",
					"delete"
				].filter((e) => e !== "sync" || !l?.enabled).map((e) => /* @__PURE__ */ (0, Q.jsx)("button", {
					disabled: t || !!(c && e !== "delete"),
					onClick: (t) => {
						let n = t.currentTarget.closest("details");
						n?.removeAttribute("open"), n?.querySelector("summary")?.focus(), r(e);
					},
					children: v[e]
				}, e))
			})] }),
			y && /* @__PURE__ */ (0, Q.jsx)("img", {
				className: "workspace-preview",
				src: y,
				alt: `Preview of ${o.name}`,
				loading: "lazy"
			}),
			/* @__PURE__ */ (0, Q.jsx)("h2", { children: o.name }),
			/* @__PURE__ */ (0, Q.jsxs)("dl", {
				className: "workspace-availability",
				children: [/* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("dt", { children: "Connection" }), /* @__PURE__ */ (0, Q.jsxs)("dd", { children: [/* @__PURE__ */ (0, Q.jsx)(z, { name: "devices" }), o.homeAssistantUrl ? "HA configured" : "HA not connected"] })] }), /* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("dt", { children: "Storage" }), /* @__PURE__ */ (0, Q.jsxs)("dd", { children: [/* @__PURE__ */ (0, Q.jsx)(z, { name: p ? "warning" : _.icon }), p ? "Storage unavailable" : h ? _.label : "Checking storage…"] })] })]
			}),
			(c || !o.hasPublished || b) && /* @__PURE__ */ (0, Q.jsx)("p", {
				className: "workspace-status",
				children: c ? "Needs recovery" : o.hasPublished ? "Unapplied changes" : "Draft"
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "workspace-card-footer",
				children: [/* @__PURE__ */ (0, Q.jsx)("p", {
					className: "workspace-server",
					children: o.homeAssistantUrl && /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(Za, {}), /* @__PURE__ */ (0, Q.jsx)("span", { children: new URL(o.homeAssistantUrl).host })] })
				}), !c && /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "workspace-card-arrow",
					"aria-hidden": "true",
					children: "→"
				})]
			}),
			c ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("p", {
				className: "workspace-error",
				children: c
			}), /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "workspace-card-recovery",
				children: [/* @__PURE__ */ (0, Q.jsx)("button", {
					disabled: t,
					onClick: i,
					children: "Recover workspace"
				}), /* @__PURE__ */ (0, Q.jsx)("button", {
					disabled: t,
					onClick: a,
					children: "Export raw data"
				})]
			})] }) : null
		]
	});
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceNameDialog.tsx
function Oo({ action: e, initialName: t, busy: n, error: r, onSave: i, onCancel: a }) {
	let [o, s] = (0, H.useState)(t);
	return /* @__PURE__ */ (0, Q.jsx)(La, {
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
//#region apps/web/src/workspaces/WorkspaceDeleteDialog.tsx
function ko({ name: e, busy: t, error: n, onDelete: r, onCancel: i }) {
	return /* @__PURE__ */ (0, Q.jsxs)(La, {
		title: `Delete ${e}?`,
		busy: t,
		error: n,
		onCancel: i,
		children: [/* @__PURE__ */ (0, Q.jsx)("p", { children: "This permanently removes this workspace, its saved design, and mappings from this browser. Export a backup first if you want to keep it." }), /* @__PURE__ */ (0, Q.jsx)("button", {
			className: "workspace-danger",
			disabled: t,
			onClick: r,
			children: t ? "Deleting…" : "Delete workspace"
		})]
	});
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceTransferDialog.tsx
function Ao({ mode: e, busy: t, error: n, onImport: r, onExport: i, onCancel: a, remoteImport: o }) {
	let s = X(), c = Kr(), [l, u] = (0, H.useState)(() => new URLSearchParams(s.search).get("import") === "home-assistant" ? "ha" : "file"), [d, f] = (0, H.useState)(""), [p, m] = (0, H.useState)(null);
	return /* @__PURE__ */ (0, Q.jsxs)(La, {
		title: e === "import" ? "Import workspace" : "Export workspace",
		titleIcon: e === "import" ? /* @__PURE__ */ (0, Q.jsx)(z, { name: "import" }) : void 0,
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
				children: [/* @__PURE__ */ (0, Q.jsx)(z, { name: "file" }), "From file"]
			}), /* @__PURE__ */ (0, Q.jsxs)("button", {
				"aria-pressed": l === "ha",
				onClick: () => {
					c("/workspaces?import=home-assistant", { replace: !0 }), u("ha");
				},
				children: [/* @__PURE__ */ (0, Q.jsx)(Za, {}), "From Home Assistant"]
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
								f((await R(t)).json);
							} catch (e) {
								m(e instanceof Error ? e.message : "Could not read that file. Please choose it again.");
							}
						})();
					}
				})] }),
				/* @__PURE__ */ (0, Q.jsxs)("button", {
					className: "workspace-primary",
					disabled: t || !d,
					children: [/* @__PURE__ */ (0, Q.jsx)(z, { name: "import" }), t ? "Importing…" : "Import workspace"]
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
function jo(e) {
	let t = L(), n = A("cabane-icon.png"), r = X(), i = Kr(), [a, o] = (0, H.useState)(() => new URLSearchParams(r.search).get("import") === "home-assistant" ? { action: "import" } : null), [s, c] = (0, H.useState)(!1), [l, u] = (0, H.useState)(null), d = (e) => {
		u(null), o(e);
	}, f = async (e) => {
		c(!0), u(null);
		try {
			await e(), o(null);
		} catch (e) {
			u(e instanceof Error ? e.message : "Could not complete this action. Please try again.");
		} finally {
			c(!1);
		}
	}, p = e.entries.filter((t) => !t.error && t.metadata.id !== e.demoWorkspaceId), m = () => {
		p.length === 1 ? f(() => e.onSettings(p[0].metadata.id, "dashboard")) : d({ action: "setup-ha" });
	}, h = () => {
		o(null), u(null), i("/workspaces", { replace: !0 });
	};
	return /* @__PURE__ */ (0, Q.jsxs)("main", {
		className: "workspace-library",
		children: [
			/* @__PURE__ */ (0, Q.jsxs)("header", {
				className: "workspace-library-header",
				children: [/* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsxs)("p", {
					className: "workspace-brand",
					children: [/* @__PURE__ */ (0, Q.jsx)("img", {
						src: n,
						alt: "",
						width: "28",
						height: "33"
					}), "Cabane"]
				}), /* @__PURE__ */ (0, Q.jsx)("h1", { children: "Your workspaces" })] }), /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "workspace-library-actions",
					children: [/* @__PURE__ */ (0, Q.jsxs)("button", {
						className: "workspace-primary",
						disabled: s,
						onClick: () => d({ action: "create" }),
						children: [/* @__PURE__ */ (0, Q.jsx)(z, { name: "plus" }), "New workspace"]
					}), /* @__PURE__ */ (0, Q.jsxs)("button", {
						disabled: s,
						onClick: () => d({ action: "import" }),
						children: [/* @__PURE__ */ (0, Q.jsx)(z, { name: "import" }), "Import workspace"]
					})]
				})]
			}),
			e.onSettings && !t && /* @__PURE__ */ (0, Q.jsx)("div", {
				className: "workspace-ha-entry",
				children: /* @__PURE__ */ (0, Q.jsxs)("button", {
					disabled: s,
					onClick: m,
					children: ["Add Cabane to Home Assistant", /* @__PURE__ */ (0, Q.jsx)(z, { name: "chevron" })]
				})
			}),
			!a && l && /* @__PURE__ */ (0, Q.jsx)("p", {
				role: "alert",
				className: "workspace-error",
				children: l
			}),
			!e.entries.length && /* @__PURE__ */ (0, Q.jsxs)("section", {
				className: "workspace-empty",
				children: [/* @__PURE__ */ (0, Q.jsx)("h2", { children: "A place for your next home" }), /* @__PURE__ */ (0, Q.jsx)("p", { children: "Create a workspace from scratch, or import a saved Cabane project." })]
			}),
			/* @__PURE__ */ (0, Q.jsxs)("section", {
				className: "workspace-grid",
				"aria-label": "Homes",
				children: [e.entries.map((t) => /* @__PURE__ */ (0, Q.jsx)(Do, {
					entry: t,
					busy: s,
					onOpen: () => void f(() => e.onOpen(t.metadata.id)),
					onAction: (n) => [
						"settings",
						"sync",
						"dashboard",
						"device"
					].includes(n) ? void f(() => e.onSettings?.(t.metadata.id, n === "settings" ? void 0 : n) ?? Promise.resolve()) : d({
						action: n,
						entry: t
					}),
					onRecover: () => void f(() => e.onRecover(t.metadata.id)),
					onExportRaw: () => void f(() => e.onExportRaw(t.metadata.id))
				}, t.metadata.id)), e.renderSuggestions?.(s, c)]
			}),
			a?.action === "setup-ha" && /* @__PURE__ */ (0, Q.jsxs)(La, {
				title: "Add Cabane to Home Assistant",
				busy: s,
				error: l,
				onCancel: h,
				children: [
					/* @__PURE__ */ (0, Q.jsx)("p", { children: p.length ? "Choose the home to sync with Home Assistant." : "Create or import a home first. You can keep using Cabane in this browser." }),
					/* @__PURE__ */ (0, Q.jsx)("div", {
						className: "workspace-setup-homes",
						children: p.map((t) => /* @__PURE__ */ (0, Q.jsx)("button", {
							disabled: s,
							onClick: () => void f(() => e.onSettings(t.metadata.id, "dashboard")),
							children: t.metadata.name
						}, t.metadata.id))
					}),
					!p.length && /* @__PURE__ */ (0, Q.jsx)("button", {
						onClick: () => d({ action: "create" }),
						children: "Create a home"
					})
				]
			}),
			a && (a.action === "create" || a.action === "rename" || a.action === "duplicate") && /* @__PURE__ */ (0, Q.jsx)(Oo, {
				action: a.action,
				initialName: a.action === "create" ? "" : `${a.entry.metadata.name}${a.action === "duplicate" ? " copy" : ""}`,
				busy: s,
				error: l,
				onCancel: h,
				onSave: (t) => void f(() => a.action === "create" ? e.onCreate(t) : a.action === "rename" ? e.onRename(a.entry.metadata.id, t) : e.onDuplicate(a.entry.metadata.id, t))
			}),
			a?.action === "delete" && /* @__PURE__ */ (0, Q.jsx)(ko, {
				name: a.entry.metadata.name,
				busy: s,
				error: l,
				onCancel: h,
				onDelete: () => void f(() => e.onDelete(a.entry.metadata.id))
			}),
			(a?.action === "import" || a?.action === "export") && /* @__PURE__ */ (0, Q.jsx)(Ao, {
				mode: a.action,
				busy: s,
				error: l,
				onCancel: h,
				remoteImport: e.remoteImport,
				onImport: (t) => void f(() => e.onImport(t)),
				onExport: (t) => void f(() => e.onExport(a.entry.metadata.id, t))
			})
		]
	});
}
//#endregion
//#region apps/web/src/workspaces/workspace-weather-source.ts
function Mo(e, t, n) {
	let r = C(t), i = e.bindings[r] ?? {
		draft: u(e.homeId),
		published: u(e.homeId),
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
function No(e, t, n) {
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
function Po(e, t, n) {
	let r = (0, H.useRef)(e), i = (0, H.useRef)({
		onSaved: t,
		onError: n
	});
	(0, H.useLayoutEffect)(() => {
		r.current = e;
	}, [e]), (0, H.useLayoutEffect)(() => {
		i.current = {
			onSaved: t,
			onError: n
		};
	});
	let a = (0, H.useMemo)(() => re(ce(window.indexedDB), ge), []);
	return (0, H.useMemo)(() => {
		let e = Promise.resolve();
		return {
			storage: {
				read: (e) => r.current.published.toolState?.[e],
				write: (t, n) => {
					let o = structuredClone(n), s = e.then(async () => {
						let e = r.current, n = await a.replace(No(e, t, o), e.revision);
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
					let s = await a.replace(Mo(e, t, n), e.revision);
					r.current = s, i.current.onSaved(s);
				});
				return e = s.catch(() => void 0), s;
			}
		};
	}, [a]);
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceDestinations.tsx
function Fo({ id: e, origin: t, intent: n, ready: r, panelReady: i }) {
	let a = L(), [o, s] = (0, H.useState)(n === "device" ? n : null), [c, l] = (0, H.useState)("");
	(0, H.useEffect)(() => {
		n === "device" && s(n);
	}, [n]);
	let u = a ? "" : ao(window.location.origin, e, t, o === "dashboard"), d = async () => {
		try {
			await navigator.clipboard.writeText(u), l("Link copied.");
		} catch {
			l("Select the URL above to copy it.");
		}
	};
	return a ? /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "ha-destinations",
		children: [
			/* @__PURE__ */ (0, Q.jsx)("h3", { children: "Open your home on another device" }),
			/* @__PURE__ */ (0, Q.jsx)("p", { children: "Open Cabane in your Home Assistant sidebar on the other device. Choose Workspaces → Import workspace → From Home Assistant to select this home." }),
			!r && /* @__PURE__ */ (0, Q.jsx)("p", {
				role: "status",
				children: "Waiting for this home to finish syncing. Your changes are saved in this browser."
			})
		]
	}) : /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "ha-destinations",
		children: [i && r && /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "ha-setup-surface",
			children: [
				/* @__PURE__ */ (0, Q.jsx)("h3", { children: "Your home is ready" }),
				/* @__PURE__ */ (0, Q.jsx)("p", { children: "Find Cabane in your Home Assistant sidebar." }),
				/* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "ha-sidebar-preview",
					"aria-label": "Cabane sidebar entry",
					children: [
						/* @__PURE__ */ (0, Q.jsx)(z, { name: "roof" }),
						"Cabane",
						/* @__PURE__ */ (0, Q.jsx)(z, { name: "check" })
					]
				}),
				/* @__PURE__ */ (0, Q.jsxs)("a", {
					className: "ha-primary ha-link-button",
					href: `${t}/cabane`,
					target: "_blank",
					rel: "noreferrer",
					children: ["Open in Home Assistant", /* @__PURE__ */ (0, Q.jsx)(z, { name: "external" })]
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
			open: n === "device" || void 0,
			children: [
				/* @__PURE__ */ (0, Q.jsx)("summary", { children: "Other ways to open this home" }),
				/* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "ha-actions",
					children: [/* @__PURE__ */ (0, Q.jsxs)("button", {
						"aria-pressed": o === "dashboard",
						onClick: () => {
							s("dashboard"), l("");
						},
						children: [/* @__PURE__ */ (0, Q.jsx)(z, { name: "grid" }), "Use a Webpage card"]
					}), /* @__PURE__ */ (0, Q.jsxs)("button", {
						"aria-pressed": o === "device",
						onClick: () => {
							s("device"), l("");
						},
						children: [/* @__PURE__ */ (0, Q.jsx)(z, { name: "external" }), "Open on another device"]
					})]
				}),
				o && /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "ha-destination-detail",
					children: [
						/* @__PURE__ */ (0, Q.jsx)("h3", { children: o === "dashboard" ? "Add a Webpage card in Home Assistant" : "Open your home on another device" }),
						/* @__PURE__ */ (0, Q.jsx)("p", { children: o === "dashboard" ? "Paste this URL into the card. Sign in when it first opens." : "Send this link to your other browser or device, then sign in to HA." }),
						r ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
							/* @__PURE__ */ (0, Q.jsx)("label", {
								htmlFor: "ha-workspace-link",
								children: o === "dashboard" ? "Dashboard URL" : "Workspace URL"
							}),
							/* @__PURE__ */ (0, Q.jsx)("input", {
								id: "ha-workspace-link",
								readOnly: !0,
								value: u,
								onFocus: (e) => e.currentTarget.select()
							}),
							/* @__PURE__ */ (0, Q.jsxs)("button", {
								onClick: () => void d(),
								children: [/* @__PURE__ */ (0, Q.jsx)(z, { name: "duplicate" }), o === "dashboard" ? "Copy dashboard URL" : "Copy link"]
							})
						] }) : /* @__PURE__ */ (0, Q.jsx)("p", {
							role: "status",
							children: "Waiting for this home to finish syncing. Your changes are saved in this browser."
						}),
						c && /* @__PURE__ */ (0, Q.jsx)("p", {
							className: "ha-notice",
							role: "status",
							children: c
						})
					]
				})
			]
		})]
	});
}
//#endregion
//#region apps/web/src/workspaces/ha-integration-links.ts
var Io = "https://github.com/cabane-app/cabane-home-assistant", Lo = `${Io}#install`;
//#endregion
//#region apps/web/src/workspaces/WorkspaceHaInstall.tsx
function Ro({ origin: e, checking: t, panelError: n, onCheck: r }) {
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
								href: Io,
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
						children: ["Install with HACS", /* @__PURE__ */ (0, Q.jsx)(z, { name: "external" })]
					}), /* @__PURE__ */ (0, Q.jsxs)("a", {
						href: `${e}/config/integrations/dashboard`,
						target: "_blank",
						rel: "noreferrer",
						children: ["Open integrations", /* @__PURE__ */ (0, Q.jsx)(z, { name: "external" })]
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
						href: Lo,
						target: "_blank",
						rel: "noreferrer",
						children: ["Setup guide", /* @__PURE__ */ (0, Q.jsx)(z, { name: "external" })]
					})
				]
			})
		]
	});
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceHaStorage.tsx
var zo = (0, H.createContext)(null);
function Bo({ id: e, origin: t, repository: n, hidden: r = !1, children: i }) {
	let { runtime: a, coordinator: o } = Xa(n, t), [s, c] = (0, H.useState)({ kind: "off" }), l = (0, H.useRef)(!1), u = (0, H.useRef)(0), d = (0, H.useCallback)(async () => {
		if (r || !t || l.current) return;
		let n = u.current;
		l.current = !0;
		try {
			let r = (await Ga(window.indexedDB, t, e))?.enabled ? a.status === "connected" ? await o.reconcile(e, t) : { kind: "disconnected" } : { kind: "off" };
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
	return (0, H.useEffect)(() => {
		c({ kind: "off" }), d();
		let e = window.setInterval(() => {
			d();
		}, 3e3);
		return () => {
			u.current += 1, window.clearInterval(e);
		};
	}, [d]), /* @__PURE__ */ (0, Q.jsx)(zo.Provider, {
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
var Vo = () => (0, H.useContext)(zo);
function Ho() {
	let e = (0, H.useContext)(zo);
	return e ? /* @__PURE__ */ (0, Q.jsx)(Uo, { ...e }) : null;
}
function Uo({ id: e, origin: t, repository: n }) {
	let r = X(), i = L(), o = !!(i && i.origin === t), s = Xa(n, t), c = (0, H.useContext)(zo), l = c?.coordinator ?? s.coordinator, { runtime: u, client: d } = s, [f, p] = (0, H.useState)("checking"), m = (0, H.useRef)(0), [h, g] = (0, H.useState)(!1), [_, v] = (0, H.useState)(!1), [y, b] = (0, H.useState)(!1), [x, S] = (0, H.useState)(!1), [C, w] = (0, H.useState)(!1), [T, E] = (0, H.useState)({ kind: "off" }), [D, O] = (0, H.useState)(!1), [k, A] = (0, H.useState)(null), [j, M] = (0, H.useState)(null), N = (0, H.useCallback)(async () => {
		if (!t) return;
		let n = await Ga(window.indexedDB, t, e);
		w(n?.enabled ?? !1);
		let r = await d.get(e);
		return S(!!r?.document), n;
	}, [
		d,
		e,
		t
	]), { sendStorageMessage: ee } = u, P = (0, H.useCallback)(async () => {
		let e = ++m.current;
		b(!0), A(null), p("checking");
		let [t, n] = await Promise.allSettled([d.list(), o ? Promise.resolve(null) : ee({ type: "get_panels" })]);
		if (e === m.current) {
			p(o ? "ready" : n.status === "rejected" ? "error" : n.value?.cabane?.component_name === "custom" && n.value.cabane.config?._panel_custom?.name === "cabane-panel" ? "ready" : "missing");
			try {
				if (t.status === "rejected") throw t.reason;
				await N(), e === m.current && v(!0);
			} catch (t) {
				if (e !== m.current) return;
				v(!1), t instanceof Pa || A(t instanceof Error ? t.message : "Could not reach Home Assistant. Try again.");
			} finally {
				e === m.current && (g(!0), b(!1));
			}
		}
	}, [
		d,
		N,
		ee,
		o
	]);
	(0, H.useEffect)(() => {
		let n = !0;
		return S(!1), w(!1), t && Ga(window.indexedDB, t, e).then((e) => {
			n && (S(!!e), w(e?.enabled ?? !1));
		}).catch(() => {
			n && A("Could not read this browser's sync settings.");
		}), () => {
			n = !1;
		};
	}, [t, e]), (0, H.useEffect)(() => (g(!1), v(!1), E({ kind: "off" }), A(null), M(null), t && u.status === "connected" && P(), () => {
		m.current += 1;
	}), [
		t,
		u.status,
		e,
		P
	]);
	let te = c?.backgroundStatus;
	(0, H.useEffect)(() => {
		te && te.kind !== "off" && E(te);
	}, [te]), (0, H.useEffect)(() => {
		if (c || !C || !t) return;
		let n = window.setInterval(() => {
			l.reconcile(e, t).then((e) => {
				E(e), e.detail === "restored" && window.location.reload();
			});
		}, 3e3);
		return () => window.clearInterval(n);
	}, [
		c,
		C,
		t,
		l,
		e
	]);
	let F = async (e, t, n = !1) => {
		O(!0), A(null), M(null);
		try {
			let r = await e();
			E(r), await N(), r.kind !== "conflict" && (M(t ?? null), n && window.location.reload());
		} catch (e) {
			A(e instanceof Error ? e.message : "Could not complete the request. Try again.");
		} finally {
			O(!1);
		}
	}, I = async (e, t) => {
		let n = await a(window.indexedDB).verify(V(e));
		we(B(e, n), t, "application/zip");
	}, ne = async () => {
		let t = await n.read(e);
		t?.record && await I(de(t.metadata, t.record), `${e}-before-load.cabane`);
	}, re = (n) => F(async () => {
		if (n === "remote") return await ne(), l.resolveConflict(e, t, n);
		let r = await d.get(e);
		return r?.document && await I(r.document, `${e}-before-replace.cabane`), l.resolveConflict(e, t, n, r?.version);
	}, "Copy updated.", n === "remote"), ie = io(r.search), R = C ? u.status !== "connected" || T.kind === "disconnected" || T.kind === "unavailable" ? "Sync interrupted" : T.kind === "conflict" ? "Sync needs attention" : T.kind === "synced" ? "Synced with HA" : T.kind === "pending" ? "Changes pending" : "Checking sync…" : x ? "Saved to HA · sync off" : y ? "Checking storage…" : "Local only", ae = f !== "ready" || !_ ? 1 : !C || T.kind !== "synced" ? 2 : 3;
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
					children: [/* @__PURE__ */ (0, Q.jsx)(z, { name: C ? "refresh" : x ? "save" : "monitor" }), R]
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
					"aria-current": ae === t + 1 ? "step" : void 0,
					className: ae > t + 1 ? "is-complete" : "",
					children: [/* @__PURE__ */ (0, Q.jsx)(z, { name: ae > t + 1 ? "check" : t === 0 ? "import" : t === 1 ? "refresh" : "grid" }), e]
				}, e))
			}),
			u.status === "connected" ? y || !h ? /* @__PURE__ */ (0, Q.jsx)("p", {
				role: "status",
				children: "Checking the Cabane integration…"
			}) : /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
				(f !== "ready" || !_) && /* @__PURE__ */ (0, Q.jsx)(Ro, {
					origin: t,
					checking: y,
					panelError: f === "error" || !!k,
					onCheck: () => void P()
				}),
				T.kind === "unavailable" && T.detail && /* @__PURE__ */ (0, Q.jsx)("p", {
					role: "alert",
					children: T.detail
				}),
				_ && /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
					!C && (f === "ready" || ie !== "dashboard") ? /* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "ha-storage-activate",
						children: [
							/* @__PURE__ */ (0, Q.jsx)("h3", { children: "Bring your home with you" }),
							/* @__PURE__ */ (0, Q.jsx)("p", { children: "Save this home to Home Assistant and keep changes in sync." }),
							/* @__PURE__ */ (0, Q.jsxs)("button", {
								className: "ha-primary",
								disabled: D,
								onClick: () => void F(() => l.enableSync(e, t)),
								children: [/* @__PURE__ */ (0, Q.jsx)(z, { name: "refresh" }), D ? "Enabling sync…" : "Enable sync"]
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
									onClick: () => void re("local"),
									children: "Keep browser copy"
								}), /* @__PURE__ */ (0, Q.jsx)("button", {
									disabled: D,
									onClick: () => void re("remote"),
									children: "Keep Home Assistant copy"
								})]
							})
						]
					}),
					T.kind === "disconnected" && /* @__PURE__ */ (0, Q.jsx)("p", {
						role: "status",
						children: "Sync paused. Your changes are saved in this browser."
					}),
					t && x && C && /* @__PURE__ */ (0, Q.jsx)(Fo, {
						id: e,
						origin: t,
						intent: ie,
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
								}), /* @__PURE__ */ (0, Q.jsx)("button", {
									id: "ha-auto",
									className: "ha-switch",
									role: "switch",
									"aria-labelledby": "ha-auto-label",
									"aria-checked": C,
									disabled: D,
									onClick: () => void F(() => l.setEnabled(e, t, !1)),
									children: /* @__PURE__ */ (0, Q.jsx)("span", {})
								})]
							}),
							/* @__PURE__ */ (0, Q.jsxs)("div", {
								className: "ha-actions",
								children: [
									/* @__PURE__ */ (0, Q.jsxs)("button", {
										disabled: D,
										onClick: () => void F(() => l.manualSave(e, t)),
										children: [/* @__PURE__ */ (0, Q.jsx)(z, { name: "export" }), "Save a copy now"]
									}),
									/* @__PURE__ */ (0, Q.jsxs)("button", {
										disabled: D || !x,
										onClick: () => {
											window.confirm("Load the Home Assistant copy? Your browser copy will be downloaded as a backup first.") && F(async () => (await ne(), l.manualRestore(e, t)), void 0, !0);
										},
										children: [/* @__PURE__ */ (0, Q.jsx)(z, { name: "import" }), "Load saved copy"]
									}),
									/* @__PURE__ */ (0, Q.jsxs)("button", {
										className: "ha-danger",
										disabled: D || !x,
										onClick: () => {
											window.confirm("Delete the copy on Home Assistant? Your browser's workspace will remain. Automatic sync will turn off.") && F(() => l.deleteRemote(e, t), "Home Assistant copy deleted. Your browser copy is safe.");
										},
										children: [/* @__PURE__ */ (0, Q.jsx)(z, { name: "delete" }), "Delete saved copy"]
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
			j && /* @__PURE__ */ (0, Q.jsx)("p", {
				className: "ha-notice",
				role: "status",
				children: j
			})
		]
	});
}
//#endregion
//#region apps/web/src/workspaces/HomeAssistantPage.tsx
function Wo({ record: e, lifecycle: t, origin: n, onChangeOrigin: r, onRecordChange: i, isDemo: o, onCreatePersonal: s }) {
	let l = X(), u = io(l.search) === "dashboard", d = L(), f = A("cabane-icon.png"), p = S(), m = Vo(), [h, g] = (0, H.useState)(n ?? ""), [_, v] = (0, H.useState)(!n), [y, b] = (0, H.useState)(!1), [x, C] = (0, H.useState)(null), [w, T] = (0, H.useState)(null), [E, D] = (0, H.useState)(null), O = [
		"authenticating",
		"connecting",
		"reconnecting"
	].includes(p.status), k = p.status === "connected";
	(0, H.useEffect)(() => {
		if (k && !d) try {
			let t = JSON.parse(window.sessionStorage.getItem("cabane:editor-return:v1") ?? "null"), n = t && typeof t == "object" ? t : null;
			n?.workspaceId === e.homeId && n?.panel === "home-assistant" && window.sessionStorage.removeItem(_e);
		} catch {}
	}, [
		k,
		e.homeId,
		d
	]);
	let j = async (e) => {
		b(!0), T(null), D(null);
		try {
			await e();
		} catch (e) {
			T(e instanceof Error ? e.message : "Please try again.");
		} finally {
			b(!1);
		}
	}, M = me(p, async (t) => {
		await r(t), d || window.sessionStorage.setItem(_e, JSON.stringify({
			workspaceId: e.homeId,
			mode: "connect",
			panel: "home-assistant",
			destination: io(l.search)
		})), v(!1);
	}), N = u && k ? "details" : "div", ee = u ? "details" : "div", P = async (e) => {
		if (!(y || O)) {
			b(!0), C(null);
			try {
				await M(e);
			} catch (e) {
				C(e instanceof Error ? e.message : "Could not start sign-in. Please try again.");
			} finally {
				b(!1);
			}
		}
	}, te = async () => (await m?.repository.read(e.homeId))?.record ?? e, F = async () => {
		let t = await te(), r = de({
			name: t.draft.home.name,
			homeAssistantUrl: n,
			hasPublished: t.publishedAt !== 0
		}, t), i = await a(window.indexedDB).verify(V(r));
		we(B(r, i), `${e.homeId}-backup.cabane`, "application/zip"), D("Backup downloaded.");
	}, I = async (e) => {
		let n = await te(), r = fe(n, (await R(e)).json, ge);
		if (!window.confirm("Replace this home's draft with the backup? Your current draft will be downloaded first. The published home stays unchanged until you save in the editor.")) return;
		await F();
		let a = await t.autosave(n, r.project, void 0, r.bindings);
		if (a.status === "storage-error") throw a.error;
		if (a.status !== "saved") throw Error("This backup could not be saved. Your draft is unchanged.");
		i(a.record), D("Backup imported into the draft. Open the editor to review and save it.");
	};
	return /* @__PURE__ */ (0, Q.jsx)("main", {
		className: `ha-page${u ? " ha-page--setup" : ""}`,
		children: /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "ha-page__content",
			children: [
				/* @__PURE__ */ (0, Q.jsxs)("nav", {
					className: "ha-page__nav",
					"aria-label": "Workspace navigation",
					children: [/* @__PURE__ */ (0, Q.jsxs)(Z, {
						to: "/workspaces",
						children: [/* @__PURE__ */ (0, Q.jsx)(z, { name: "back" }), "Workspaces"]
					}), /* @__PURE__ */ (0, Q.jsxs)(Z, {
						to: $(e.homeId),
						children: ["Open home", /* @__PURE__ */ (0, Q.jsx)(z, { name: "chevron" })]
					})]
				}),
				/* @__PURE__ */ (0, Q.jsxs)("header", {
					className: "ha-page__header",
					children: [/* @__PURE__ */ (0, Q.jsx)("h1", { children: u ? "Cabane in Home Assistant" : "Home Assistant" }), /* @__PURE__ */ (0, Q.jsx)("p", { children: e.draft.home.name })]
				}),
				o ? /* @__PURE__ */ (0, Q.jsxs)("section", {
					className: "ha-section",
					children: [
						/* @__PURE__ */ (0, Q.jsx)("h2", { children: "Make this home yours" }),
						/* @__PURE__ */ (0, Q.jsx)("p", { children: "The demo uses simulated devices. Create your own workspace to connect Home Assistant and save across devices." }),
						/* @__PURE__ */ (0, Q.jsxs)("button", {
							className: "ha-primary",
							onClick: s,
							children: ["Create my workspace", /* @__PURE__ */ (0, Q.jsx)(z, { name: "chevron" })]
						})
					]
				}) : /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)(N, {
					className: u && k ? "ha-connection-details" : void 0,
					children: [u && k && /* @__PURE__ */ (0, Q.jsxs)("summary", { children: [
						/* @__PURE__ */ (0, Q.jsx)(z, { name: "check" }),
						"Connected to ",
						n ? new URL(n).host : "Home Assistant"
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
									children: [/* @__PURE__ */ (0, Q.jsx)("i", {}), k ? "Connected" : O ? "Connecting…" : n ? "Disconnected" : "Not connected"]
								})]
							}),
							d ? /* @__PURE__ */ (0, Q.jsxs)("div", {
								className: "ha-connection-row",
								children: [
									/* @__PURE__ */ (0, Q.jsx)("p", { children: "Sign-in is managed by Home Assistant." }),
									/* @__PURE__ */ (0, Q.jsx)("p", {
										className: "ha-address",
										children: d.origin
									}),
									n && n !== d.origin && /* @__PURE__ */ (0, Q.jsxs)("p", {
										role: "alert",
										children: [
											"This workspace uses a different Home Assistant: ",
											n,
											". Select this instance explicitly; its mappings remain separate."
										]
									}),
									/* @__PURE__ */ (0, Q.jsxs)("div", {
										className: "ha-actions",
										children: [
											n !== d.origin && /* @__PURE__ */ (0, Q.jsx)("button", {
												className: "ha-primary",
												disabled: y,
												onClick: () => void j(() => r(d.origin)),
												children: "Use this Home Assistant"
											}),
											n === d.origin && ["error", "disconnected"].includes(p.status) && /* @__PURE__ */ (0, Q.jsx)("button", {
												disabled: y,
												onClick: p.retry,
												children: "Retry connection"
											}),
											n && /* @__PURE__ */ (0, Q.jsx)("button", {
												disabled: y,
												onClick: () => void j(async () => {
													await r(null), await p.disconnect();
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
									let t = c(h);
									C(t.error), t.normalized && P(t.normalized);
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
													g(e.target.value), C(null);
												}
											}),
											/* @__PURE__ */ (0, Q.jsxs)("button", {
												className: "ha-primary",
												disabled: y || O,
												children: [y ? "Preparing sign-in…" : O ? "Connecting…" : "Connect", /* @__PURE__ */ (0, Q.jsx)(z, { name: "external" })]
											}),
											n && /* @__PURE__ */ (0, Q.jsx)("button", {
												type: "button",
												disabled: y,
												onClick: () => {
													v(!1), g(n), C(null);
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
									children: n
								}), /* @__PURE__ */ (0, Q.jsxs)("div", {
									className: "ha-actions",
									children: [/* @__PURE__ */ (0, Q.jsx)("button", {
										disabled: y || O,
										onClick: () => {
											v(!0), C(null);
										},
										children: "Change URL"
									}), k ? /* @__PURE__ */ (0, Q.jsx)("button", {
										disabled: y,
										onClick: () => void j(async () => {
											await p.disconnect(), await r(null), g(""), v(!0);
										}),
										children: "Disconnect"
									}) : /* @__PURE__ */ (0, Q.jsx)("button", {
										className: "ha-primary",
										disabled: y || O,
										onClick: () => void P(n),
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
							p.error && /* @__PURE__ */ (0, Q.jsx)("p", {
								role: "alert",
								className: "ha-error",
								children: p.error
							})
						]
					})]
				}), /* @__PURE__ */ (0, Q.jsx)(Ho, {})] }),
				/* @__PURE__ */ (0, Q.jsxs)(ee, {
					className: u ? "ha-setup-disclosure" : void 0,
					children: [u && /* @__PURE__ */ (0, Q.jsx)("summary", { children: "File backups" }), /* @__PURE__ */ (0, Q.jsxs)("section", {
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
									onClick: () => void j(F),
									children: [/* @__PURE__ */ (0, Q.jsx)(z, { name: "export" }), "Export backup"]
								}), /* @__PURE__ */ (0, Q.jsxs)("label", {
									className: `ha-file-button${y ? " is-disabled" : ""}`,
									children: [
										/* @__PURE__ */ (0, Q.jsx)(z, { name: "import" }),
										"Import backup",
										/* @__PURE__ */ (0, Q.jsx)("input", {
											type: "file",
											accept: ".cabane,.json,application/zip,application/json",
											disabled: y,
											onChange: (e) => {
												let t = e.target.files?.[0];
												e.target.value = "", t && j(() => I(t));
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
				w && /* @__PURE__ */ (0, Q.jsx)("p", {
					role: "alert",
					className: "ha-error",
					children: w
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
							src: f,
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
var Go = (0, H.lazy)(() => import("./assets/HomeEditor-Dsv5sJTf.js").then((e) => ({ default: e.HomeEditor })));
function Ko({ onClose: e, ...t }) {
	let n = X(), r = Kr(), i = (0, H.useMemo)(() => ({
		...n.state?.editorRequest,
		...lo(n.pathname)
	}), [n.pathname, n.state]), a = (0, H.useRef)(!1), o = fi(({ nextLocation: e }) => !a.current && po(t.initialRecord.homeId, e.pathname)), s = (e, n = !1) => {
		r(fo(e, t.initialRecord.homeId), {
			replace: n,
			state: { editorRequest: e }
		});
	};
	return /* @__PURE__ */ (0, Q.jsx)(H.Suspense, {
		fallback: /* @__PURE__ */ (0, Q.jsx)("main", {
			className: "direction-project-loading",
			children: "Opening the editor…"
		}),
		children: /* @__PURE__ */ (0, Q.jsx)(Go, {
			...t,
			initialRequest: i,
			onWorkspaces: () => void r("/workspaces"),
			onHomeAssistantSettings: () => void r(`${$(t.initialRecord.homeId)}/home-assistant`),
			onRecoveryWorkspaces: () => {
				a.current = !0, r("/workspaces");
			},
			navigation: {
				request: i,
				go: s,
				exitRequested: o.state === "blocked"
			},
			onClose: (n, i) => {
				a.current = !0, e(n, i), o.state === "blocked" ? o.proceed() : r($(t.initialRecord.homeId));
			}
		})
	});
}
//#endregion
//#region apps/web/src/mobile-editor/MobileEditorPrompt.tsx
var qo = "cabane:mobile-editor-prompt-dismissed", Jo = "https://cabane.my";
function Yo() {
	return window.matchMedia("(max-width: 760px)").matches;
}
function Xo() {
	try {
		return window.sessionStorage.getItem(qo) === "true";
	} catch {
		return !1;
	}
}
function Zo({ workspaceId: e, demoWorkspaceId: t }) {
	let n = Kr(), [r] = Ca(), [i, a] = (0, H.useState)(""), o = r.get("mode") === "arrange" ? "furnish" : "construct", s = () => {
		try {
			window.sessionStorage.setItem(qo, "true");
		} catch {}
		n(fo({ mode: o }, e), { replace: !0 });
	}, c = async () => {
		try {
			navigator.share ? (await navigator.share({
				title: "Cabane",
				url: Jo
			}), a("Link shared.")) : navigator.clipboard?.writeText ? (await navigator.clipboard.writeText(Jo), a("Link copied. Open it on your other device.")) : a(`Open ${Jo} on your other device.`);
		} catch (e) {
			if (e instanceof DOMException && e.name === "AbortError") return;
			a(`Sharing was unavailable. Open ${Jo} on your other device.`);
		}
	};
	return /* @__PURE__ */ (0, Q.jsx)("main", {
		className: "mobile-editor-prompt",
		role: "dialog",
		"aria-modal": "true",
		"aria-labelledby": "mobile-editor-title",
		"aria-describedby": "mobile-editor-description",
		children: /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "mobile-editor-prompt__panel",
			children: [
				/* @__PURE__ */ (0, Q.jsx)("button", {
					className: "mobile-editor-prompt__close",
					type: "button",
					"aria-label": "Dismiss and build on mobile",
					onClick: s,
					children: "×"
				}),
				/* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "mobile-editor-prompt__visual",
					"aria-hidden": "true",
					children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "mobile-editor-prompt__screen",
						children: [
							/* @__PURE__ */ (0, Q.jsxs)("div", {
								className: "mobile-editor-prompt__screen-bar",
								children: [
									/* @__PURE__ */ (0, Q.jsx)("span", {}),
									/* @__PURE__ */ (0, Q.jsx)("span", {}),
									/* @__PURE__ */ (0, Q.jsx)("span", {})
								]
							}),
							/* @__PURE__ */ (0, Q.jsxs)("div", {
								className: "mobile-editor-prompt__floor",
								children: [
									/* @__PURE__ */ (0, Q.jsx)("span", {}),
									/* @__PURE__ */ (0, Q.jsx)("span", {}),
									/* @__PURE__ */ (0, Q.jsx)("span", {}),
									/* @__PURE__ */ (0, Q.jsx)("span", {})
								]
							}),
							/* @__PURE__ */ (0, Q.jsxs)("div", {
								className: "mobile-editor-prompt__screen-rail",
								children: [
									/* @__PURE__ */ (0, Q.jsx)("span", {}),
									/* @__PURE__ */ (0, Q.jsx)("span", {}),
									/* @__PURE__ */ (0, Q.jsx)("span", {})
								]
							})
						]
					}), /* @__PURE__ */ (0, Q.jsx)("div", {
						className: "mobile-editor-prompt__phone",
						children: /* @__PURE__ */ (0, Q.jsxs)("div", {
							className: "mobile-editor-prompt__phone-plan",
							children: [/* @__PURE__ */ (0, Q.jsx)("span", {}), /* @__PURE__ */ (0, Q.jsx)("span", {})]
						})
					})]
				}),
				/* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "mobile-editor-prompt__content",
					children: [
						/* @__PURE__ */ (0, Q.jsx)("h1", {
							id: "mobile-editor-title",
							children: "Make room for the bigger picture."
						}),
						/* @__PURE__ */ (0, Q.jsx)("p", {
							id: "mobile-editor-description",
							children: "Construct and Arrange work best on a desktop, where there’s space to shape every detail of your home."
						}),
						/* @__PURE__ */ (0, Q.jsxs)("div", {
							className: "mobile-editor-prompt__actions",
							children: [
								/* @__PURE__ */ (0, Q.jsxs)("button", {
									type: "button",
									className: "mobile-editor-prompt__demo",
									disabled: !t,
									onClick: () => {
										t && n("/demo");
									},
									children: [/* @__PURE__ */ (0, Q.jsx)("span", { children: "Explore the demo" }), /* @__PURE__ */ (0, Q.jsx)("small", { children: "See what Cabane can look like. Try turning your phone sideways!" })]
								}),
								/* @__PURE__ */ (0, Q.jsx)("button", {
									type: "button",
									className: "mobile-editor-prompt__share",
									onClick: () => void c(),
									children: "Share to my other device"
								}),
								/* @__PURE__ */ (0, Q.jsx)("button", {
									type: "button",
									className: "mobile-editor-prompt__continue",
									onClick: s,
									children: "Build on mobile anyway"
								})
							]
						}),
						!t && /* @__PURE__ */ (0, Q.jsx)("p", {
							className: "mobile-editor-prompt__note",
							children: "The demo home is no longer in this browser."
						}),
						i && /* @__PURE__ */ (0, Q.jsx)("p", {
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
function Qo({ record: e, lifecycle: t, homeAssistantUrl: n, onHomeAssistantUrlChange: r, recoveryMessage: i, recoveryRaw: a, initialRequest: o, onboarding: s, demoWorkspaceId: c }) {
	let [l, d] = (0, H.useState)(e), f = (0, H.useMemo)(() => l.publishedAt === 0 ? null : oe(l.published), [l.published, l.publishedAt]), p = (0, H.useMemo)(() => k(l.published, ge).deviceModels, [l.published]), [m, h] = (0, H.useState)({
		message: i,
		raw: a
	}), [g, v] = (0, H.useState)(null), y = Po(l, d, v), [b, x] = (0, H.useState)(!1), S = Kr(), w = X(), T = L(), [E] = (0, H.useState)(() => o ?? (T ? null : pe(e.homeId))), D = (0, H.useEffectEvent)(() => {
		if (E) {
			let e = new URLSearchParams(w.search);
			E.destination && e.set("action", E.destination), S(`${fo(E, l.homeId)}${e.size ? `?${e}` : ""}`, {
				replace: !0,
				state: { editorRequest: E }
			}), window.sessionStorage.removeItem(_e);
		}
	});
	(0, H.useEffect)(() => {
		D();
	}, []);
	let O = async (e) => {
		await y.flush();
		let t = (e.mode === "construct" || e.mode === "furnish") && !e.panel && Yo() && !Xo() ? co(l.homeId, e.mode) : fo(e, l.homeId);
		S(t, { state: { editorRequest: e } });
	}, A = n ? C(n) : null, M = (0, H.useMemo)(() => ({
		profile: (A ? l.bindings[A]?.published : void 0) ?? u(l.homeId),
		saveWeatherSource: A ? (e) => y.saveWeatherSource(A, e) : void 0,
		loaded: !0,
		hasStoredProfile: !!(A && l.bindings[A]),
		save: () => void 0
	}), [
		A,
		l,
		y
	]), N = /* @__PURE__ */ (0, Q.jsx)(Ko, {
		initialRecord: l,
		lifecycle: t,
		recoveryMessage: m.message,
		recoveryRaw: m.raw,
		homeAssistantUrl: n,
		onPrepareOrigin: async (e, t) => {
			let n = await r(t, e) ?? e;
			return d(n), n;
		},
		onClose: (e, t) => {
			h({
				message: void 0,
				raw: void 0
			}), d(e), x(t === "applied"), window.sessionStorage.removeItem(_e);
		}
	}), ee = l.publishedAt === 0 ? /* @__PURE__ */ (0, Q.jsx)(ki, {
		to: fo({ mode: "construct" }, l.homeId),
		replace: !0
	}) : /* @__PURE__ */ (0, Q.jsx)(_, {
		storage: y.storage,
		children: /* @__PURE__ */ (0, Q.jsx)(ye, { children: /* @__PURE__ */ (0, Q.jsx)(P, {
			manifest: f,
			architectureModels: be,
			onboarding: s,
			walkTools: xe,
			deviceModels: p,
			homeAssistantUrl: n,
			onHomeAssistantUrlChange: (e) => {
				v(null), Promise.resolve().then(() => r(e, l)).then((e) => {
					e && d(e);
				}).catch((e) => v(e instanceof Error ? e.message : "Connection settings could not be saved."));
			},
			onHomeAssistantSettings: () => void S(`${$(l.homeId)}/home-assistant`),
			onWorkspaces: () => void S("/workspaces"),
			renderActionBarDeviceIcon: (e) => /* @__PURE__ */ (0, Q.jsx)(Se, {
				modelId: e,
				models: p
			}),
			bindingManager: M,
			constructionApplied: b,
			onEditHome: (e = "construct") => {
				O({ mode: e });
			},
			onCustomizeActionBar: () => {
				O({
					mode: "construct",
					panel: "action-bar"
				});
			},
			onOpenConnect: (e, t) => {
				O({
					mode: "connect",
					view: e,
					...t === void 0 ? {} : { roomId: t }
				});
			},
			onExportBrowserData: () => ae(de({
				name: l.draft.home.name,
				homeAssistantUrl: n,
				hasPublished: l.publishedAt !== 0
			}, l), `${l.homeId}-private-workspace.json`)
		}) })
	});
	return /* @__PURE__ */ (0, Q.jsxs)(j, { children: [g && /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "workspace-connection-error",
		role: "alert",
		children: [g, /* @__PURE__ */ (0, Q.jsx)("button", {
			type: "button",
			onClick: () => v(null),
			children: "Dismiss"
		})]
	}), /* @__PURE__ */ (0, Q.jsxs)(Mi, { children: [
		/* @__PURE__ */ (0, Q.jsx)(Ai, {
			path: "/welcome",
			element: ee
		}),
		/* @__PURE__ */ (0, Q.jsx)(Ai, {
			path: "/demo",
			element: ee
		}),
		/* @__PURE__ */ (0, Q.jsx)(Ai, {
			path: "/workspaces/:workspaceId",
			element: ee
		}),
		/* @__PURE__ */ (0, Q.jsx)(Ai, {
			path: "/workspaces/:workspaceId/home-assistant",
			element: /* @__PURE__ */ (0, Q.jsx)(Wo, {
				record: l,
				lifecycle: t,
				origin: n,
				onChangeOrigin: async (e) => {
					let t = await r(e, l);
					t && d(t);
				},
				onRecordChange: d,
				isDemo: s?.isDemo ?? !1,
				onCreatePersonal: () => {
					s?.start("connect");
				}
			})
		}),
		/* @__PURE__ */ (0, Q.jsx)(Ai, {
			path: "/workspaces/:workspaceId/mobile-editor",
			element: /* @__PURE__ */ (0, Q.jsx)(Zo, {
				workspaceId: l.homeId,
				demoWorkspaceId: c
			})
		}),
		so.map(({ path: e, handle: t }) => /* @__PURE__ */ (0, Q.jsx)(Ai, {
			path: e,
			element: (t.mode === "construct" || t.mode === "furnish") && !t.panel && Yo() && !Xo() ? e === "/build" ? /* @__PURE__ */ (0, Q.jsx)(Zo, {
				workspaceId: l.homeId,
				demoWorkspaceId: c
			}) : /* @__PURE__ */ (0, Q.jsx)(ki, {
				to: co(l.homeId, t.mode),
				replace: !0
			}) : N
		}, e)),
		/* @__PURE__ */ (0, Q.jsx)(Ai, {
			path: "*",
			element: /* @__PURE__ */ (0, Q.jsx)(ki, {
				to: $(l.homeId),
				replace: !0
			})
		})
	] })] }, l.homeId);
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceModelAssetNotice.tsx
function $o({ record: e, id: t }) {
	let [n, r] = (0, H.useState)(!1);
	return (0, H.useEffect)(() => {
		let t = !0;
		r(!1);
		let n = v([e.draft, e.published]);
		return n.length && a(window.indexedDB).verify(n).catch(() => {
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
function es({ id: e, repository: t, onboarding: n, demoWorkspaceId: r }) {
	let i = X(), a = Kr(), o = (0, H.useCallback)((t) => xo(e, t), [e]), s = n.state?.demoWorkspaceId === e, [c] = (0, H.useState)(() => ue(window.indexedDB, e)), [l, u] = (0, H.useState)(null), [d, p] = (0, H.useState)(null);
	return (0, H.useEffect)(() => {
		let n = !0;
		return t.read(e).then(async (t) => {
			let r = t?.record ? {
				status: "ready",
				record: t.record
			} : await c.load();
			if (n) {
				if (!t) {
					p("This workspace is not saved in this browser.");
					return;
				}
				yo(e), u({
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
	]), (0, H.useEffect)(() => {
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
	}) : l ? /* @__PURE__ */ (0, Q.jsx)(I.Provider, {
		value: o,
		children: /* @__PURE__ */ (0, Q.jsx)(f, {
			hostSession: s ? null : void 0,
			homeAssistantUrl: s ? null : l.metadata.homeAssistantUrl,
			children: /* @__PURE__ */ (0, Q.jsxs)(Bo, {
				id: e,
				origin: l.metadata.homeAssistantUrl,
				repository: t,
				hidden: s,
				children: [/* @__PURE__ */ (0, Q.jsx)($o, {
					record: l.record,
					id: e
				}), /* @__PURE__ */ (0, Q.jsx)(Qo, {
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
						links: Co
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
function ts({ onboarding: e }) {
	let t = (0, H.useRef)(!1);
	return (0, H.useEffect)(() => {
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
var ns = "cabane:ha-url:v1", rs = "cabane:ha-auth:v1";
function is(e) {
	return N(e.getItem(ns));
}
async function as(e, t, n) {
	if (await e.migrationDone()) return;
	let r = await e.read(t);
	if (r?.error) return;
	let i = is(n);
	r?.record && i && !r.metadata.homeAssistantUrl && (r = await e.setConnection(t, r.record.revision, i)), r?.record && i && await ie(r.record, i);
	let a = n.getItem(rs);
	if (a) {
		let e = JSON.parse(a), t = N(e.hassUrl);
		if (!t || !e.clientId) throw Error("The saved Home Assistant sign-in needs recovery.");
		let r = s(t, e.clientId);
		if (n.getItem(r) === null && n.setItem(r, a), !g(n, t, e.clientId)) throw Error("Could not preserve the saved Home Assistant sign-in.");
	}
	n.removeItem(rs), n.removeItem(ns), r?.record && i && (n.removeItem(D(i, t)), n.removeItem(T(i, t))), await e.finishMigration();
}
//#endregion
//#region apps/web/src/workspaces/initialize-workspaces.ts
async function os(e, t, { skipLegacyMigration: n = !1 } = {}) {
	let r = b(e, ge), i, a = null;
	try {
		!n && !await r.migrationDone() && (a = is(t));
	} catch (e) {
		i = e instanceof Error ? e.message : "Saved connection data needs recovery.";
	}
	let o = {
		...le,
		home: {
			...le.home,
			name: "Demo home"
		}
	};
	await r.initialize(o, a);
	try {
		n || await as(r, le.home.id, t);
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
function ss() {
	let e = X(), t = L(), n = Kr(), [r, i] = (0, H.useState)(null);
	(0, H.useEffect)(() => {
		e.pathname !== "/" && i(null);
	}, [e.pathname]);
	let [o, s] = (0, H.useState)(null), c = To(o), [l, u] = (0, H.useState)(null), [d, f] = (0, H.useState)(null), [p, m] = (0, H.useState)(), [g] = (0, H.useState)(() => !!t), [_] = (0, H.useState)(() => t ? null : pe());
	(0, H.useEffect)(() => {
		let e = !0;
		return os(window.indexedDB, window.localStorage, { skipLegacyMigration: g }).then(async (t) => {
			let n = await t.repository.list();
			e && (s(t.repository), u(n), m(t.migrationError));
		}).catch((t) => {
			e && f(t instanceof Error ? t.message : "Browser storage is unavailable.");
		}), () => {
			e = !1;
		};
	}, [g]);
	let v = (0, H.useCallback)(async () => {
		o && u(await o.list());
	}, [o]);
	(0, H.useEffect)(() => {
		if (e.pathname !== "/" && e.pathname !== "/workspaces") return;
		let t = () => {
			v().catch((e) => f(String(e)));
		};
		return t(), window.addEventListener("focus", t), () => window.removeEventListener("focus", t);
	}, [v, e.pathname]);
	let y = (0, H.useCallback)(async (e) => {
		await v(), await n($(e), { replace: !0 });
	}, [v, n]);
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
	if (e.pathname.startsWith("/open/")) return /* @__PURE__ */ (0, Q.jsx)(ho, {
		repository: o,
		onOpened: y
	});
	let b = !t && e.pathname !== "/workspaces" && new URLSearchParams(e.search).has("auth_callback"), x = b ? _ : null;
	if (b) {
		if (!x || !l.some((e) => e.metadata.id === x.workspaceId)) return /* @__PURE__ */ (0, Q.jsxs)("main", {
			className: "direction-project-loading is-error",
			children: [
				/* @__PURE__ */ (0, Q.jsx)("strong", { children: "This sign-in no longer has a workspace." }),
				/* @__PURE__ */ (0, Q.jsx)("p", { children: "Open the intended workspace and sign in again." }),
				/* @__PURE__ */ (0, Q.jsx)("button", {
					onClick: () => void n("/workspaces", { replace: !0 }),
					children: "Workspaces"
				})
			]
		});
		if (uo(e.pathname) !== x.workspaceId) return /* @__PURE__ */ (0, Q.jsx)(ki, {
			to: `${$(x.workspaceId)}${e.search}`,
			replace: !0
		});
	}
	if (e.pathname === "/") {
		if (r) return /* @__PURE__ */ (0, Q.jsx)(ki, {
			to: r,
			replace: !0
		});
		if (!c.loaded) return /* @__PURE__ */ (0, Q.jsx)("main", {
			className: "direction-project-loading",
			children: "Loading your home…"
		});
		if (t && c.state && !c.state.welcomeDismissed && l.length === 1 && l[0].metadata.id === c.state.demoWorkspaceId) return /* @__PURE__ */ (0, Q.jsx)(to, {
			session: t,
			repository: o,
			onRestored: async (e) => {
				i($(e)), await v(), await c.dismiss("welcome");
			},
			onBuild: async () => {
				i("/build");
			},
			onExplore: async () => {
				i("/demo"), await c.dismiss("welcome");
			},
			onCancel: async () => {
				i("/workspaces"), await c.dismiss("welcome");
			}
		});
		let e = l.find((e) => e.metadata.id === vo()) ?? (l.length === 1 ? l[0] : void 0);
		return e && c.state && e.metadata.id === c.state.demoWorkspaceId ? /* @__PURE__ */ (0, Q.jsx)(ki, {
			to: c.state.welcomeDismissed ? "/demo" : "/welcome",
			replace: !0
		}) : /* @__PURE__ */ (0, Q.jsx)(ki, {
			to: e ? $(e.metadata.id) : "/workspaces",
			replace: !0
		});
	}
	let S = e.pathname === "/welcome" || e.pathname === "/demo", C = e.pathname === "/build";
	if ((S || C) && !c.loaded) return /* @__PURE__ */ (0, Q.jsx)("main", {
		className: "direction-project-loading",
		children: "Loading your home…"
	});
	if (S && !l.some((e) => e.metadata.id === c.state?.demoWorkspaceId)) return /* @__PURE__ */ (0, Q.jsxs)("main", {
		className: "direction-project-loading is-error",
		children: [/* @__PURE__ */ (0, Q.jsx)("strong", { children: "The demo home is no longer in this browser." }), /* @__PURE__ */ (0, Q.jsx)(Z, {
			to: "/workspaces",
			children: "Workspaces"
		})]
	});
	if (C && !c.state?.destinations.build) return /* @__PURE__ */ (0, Q.jsx)(ts, { onboarding: c });
	let w = S ? c.state?.demoWorkspaceId : C ? c.state?.destinations.build : uo(e.pathname);
	if (w) return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [c.error && /* @__PURE__ */ (0, Q.jsxs)("div", {
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
				onClick: () => void n("/workspaces"),
				children: "Workspaces"
			}),
			/* @__PURE__ */ (0, Q.jsx)("button", {
				onClick: c.clearError,
				children: "Dismiss"
			})
		]
	}), c.loaded ? /* @__PURE__ */ (0, Q.jsx)(es, {
		id: w,
		repository: o,
		onboarding: c,
		demoWorkspaceId: l.some((e) => e.metadata.id === c.state?.demoWorkspaceId) ? c.state?.demoWorkspaceId ?? null : null
	}, w) : /* @__PURE__ */ (0, Q.jsx)("main", {
		className: "direction-project-loading",
		children: "Loading your home…"
	})] });
	if (e.pathname !== "/workspaces") return /* @__PURE__ */ (0, Q.jsx)(ki, {
		to: "/",
		replace: !0
	});
	let T = (e) => {
		let t = l.find((t) => t.metadata.id === e);
		if (!t) throw Error("Workspace no longer exists. Refresh the library.");
		return t;
	}, E = (e) => {
		let t = T(e);
		if (!t.record) throw Error(t.error ?? "This home needs recovery.");
		return t.record;
	}, D = async (e) => {
		await n($(e));
	};
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [p && /* @__PURE__ */ (0, Q.jsxs)("p", {
		role: "alert",
		className: "workspace-error",
		children: [p, " Your saved source data has been retained."]
	}), /* @__PURE__ */ (0, Q.jsx)(jo, {
		demoWorkspaceId: c.state?.demoWorkspaceId,
		onSettings: async (e, t) => {
			await n(`${$(e)}/home-assistant${t ? `?action=${t}` : ""}`);
		},
		entries: l,
		onOpen: D,
		onRecover: D,
		onCreate: async (e) => {
			let t = await o.createBlank(e);
			ve(t.metadata.id), await v(), await D(t.metadata.id);
		},
		onRename: async (e, t) => {
			await o.rename(e, E(e).revision, t), await v();
		},
		onDuplicate: async (e, t) => {
			await o.duplicate(e, E(e).revision, t), await v();
		},
		onDelete: async (e) => {
			let t = T(e), n = await o.readRaw(e);
			if (t.record && (await o.read(e))?.record?.revision !== t.record.revision) throw Error("This workspace changed. Refresh before deleting it.");
			await o.delete(e, n), await Ce(e), So(e), he(e);
			try {
				window.localStorage.removeItem(h(e));
			} catch {}
			await v();
		},
		onImport: async (e) => {
			let t = se(e, ge), n = await o.create(t.record, t);
			await v(), await D(n.metadata.id);
		},
		onExport: async (e, t) => {
			let n = T(e), r = E(e), i = t ? de(n.metadata, r) : O(r.draft), o = await a(window.indexedDB).verify(V(i));
			we(B(i, o), `${e}-${t ? "backup" : "project"}.cabane`, "application/zip");
		},
		onExportRaw: async (e) => {
			let t = await o.readRaw(e);
			if (t === null) throw Error("No saved record exists.");
			ae(t, `${e}-recovery.json`);
		},
		renderSuggestions: (e, t) => /* @__PURE__ */ (0, Q.jsx)(eo, {
			repository: o,
			onRestored: y,
			localWorkspaceIds: l.map((e) => e.metadata.id),
			busy: e,
			onBusyChange: t
		}),
		remoteImport: /* @__PURE__ */ (0, Q.jsx)($a, {
			repository: o,
			onRestored: async (e) => {
				await v(), await D(e);
			},
			initialOrigin: l.find((e) => e.metadata.homeAssistantUrl)?.metadata.homeAssistantUrl ?? null
		})
	})] });
}
//#endregion
//#region apps/web/src/panel/panel-element.ts
var cs = /* @__PURE__ */ new WeakMap();
function ls(e, t) {
	let n = cs.get(e);
	n || cs.set(e, n = /* @__PURE__ */ new Map());
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
function us(e) {
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
			this.ownerDocument.defaultView?.addEventListener("resize", this.#c), this.#r ??= ls(this.ownerDocument, new URL("cabane-fonts.css", e.assetBaseUrl).href), typeof ResizeObserver < "u" && (this.#n = new ResizeObserver(() => this.#l()), this.#n.observe(this.#i)), this.#l(), this.#u();
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
var ds = new URL(
	/* @vite-ignore */
	"./",
	import.meta.url
).href;
customElements.get("cabane-panel") || customElements.define("cabane-panel", us({
	assetBaseUrl: ds,
	mount({ container: e, portalContainer: t, root: n, session: r }) {
		let i = (0, Ma.createRoot)(e), a = Ci([{
			path: "*",
			errorElement: /* @__PURE__ */ (0, Q.jsx)(Aa, {}),
			element: /* @__PURE__ */ (0, Q.jsx)(ss, {})
		}], { initialEntries: ["/"] }), o = {
			root: n,
			container: e,
			portalContainer: t,
			eventTarget: n,
			assetBaseUrl: ds
		}, s = (e) => i.render(/* @__PURE__ */ (0, Q.jsx)(H.StrictMode, { children: /* @__PURE__ */ (0, Q.jsx)(ja, { children: /* @__PURE__ */ (0, Q.jsx)(te, {
			environment: o,
			children: /* @__PURE__ */ (0, Q.jsx)(y, {
				session: e,
				children: /* @__PURE__ */ (0, Q.jsx)(Ti, { router: a })
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
