import { r as e } from "./assets/rolldown-runtime-B0aSnxlc.js";
import { $t as t, B as n, Cr as r, D as i, Da as a, Ea as o, Fr as s, Ft as c, G as l, H as u, It as d, J as f, K as p, Lt as m, Mn as h, Mr as g, Nr as _, Nt as v, Pr as y, Pt as b, Rt as x, Sr as S, V as C, X as w, _r as T, ba as E, br as D, dr as O, in as k, l as A, mn as j, mr as M, on as N, q as ee, qt as P, rn as te, w as ne, wa as F, wr as re, yr as ie, z as ae } from "./assets/LaserIcon-CWcHrvsH.js";
import { A as I, B as L, E as R, H as oe, I as se, K as ce, L as le, N as z, O as ue, P as B, R as de, S as fe, U as pe, W as me, _ as he, d as ge, f as _e, g as ve, h as ye, j as be, k as V, m as xe, n as Se, s as Ce, t as we, v as Te, z as Ee } from "./assets/ShortcutDeviceIcon-DFvKs-Re.js";
//#region node_modules/react-router/dist/development/chunk-BV7QT456.mjs
var H = /* @__PURE__ */ e(a(), 1), De = (e) => {
	throw TypeError(e);
}, Oe = (e, t, n) => t.has(e) || De("Cannot " + n), U = (e, t, n) => (Oe(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ke = (e, t, n) => t.has(e) ? De("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Ae = (e, t, n, r) => (Oe(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), je = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i, Me = /^[\\/]{2}/;
function Ne(e, t) {
	return t + e.replace(/\\/g, "/");
}
function Pe(e) {
	return typeof e == "object" && !!e && "pathname" in e && "search" in e && "hash" in e && "state" in e && "key" in e;
}
function Fe(e = {}) {
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
		let a = Le(i ? l().pathname : "/", e, t, n, r);
		return G(a.pathname.charAt(0) === "/", `relative pathnames are not supported in memory history: ${JSON.stringify(e)}`), a;
	}
	function d(e) {
		return typeof e == "string" ? e : K(e);
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
			let t = typeof e == "string" ? Re(e) : e;
			return {
				pathname: t.pathname || "",
				search: t.search || "",
				hash: t.hash || ""
			};
		},
		push(e, t) {
			o = "PUSH";
			let n = Pe(e) ? e : u(e, t);
			a += 1, i.splice(a, i.length, n), r && s && s({
				action: o,
				location: n,
				delta: 1
			});
		},
		replace(e, t) {
			o = "REPLACE";
			let n = Pe(e) ? e : u(e, t);
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
function W(e, t) {
	if (e === !1 || e == null) throw Error(t);
}
function G(e, t) {
	if (!e) {
		typeof console < "u" && console.warn(t);
		try {
			throw Error(t);
		} catch {}
	}
}
function Ie() {
	return Math.random().toString(36).substring(2, 10);
}
function Le(e, t, n = null, r, i) {
	return {
		pathname: typeof e == "string" ? e : e.pathname,
		search: "",
		hash: "",
		...typeof t == "string" ? Re(t) : t,
		state: n,
		key: t && t.key || r || Ie(),
		mask: i
	};
}
function K({ pathname: e = "/", search: t = "", hash: n = "" }) {
	return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n), e;
}
function Re(e) {
	let t = {};
	if (e) {
		let n = e.indexOf("#");
		n >= 0 && (t.hash = e.substring(n), e = e.substring(0, n));
		let r = e.indexOf("?");
		r >= 0 && (t.search = e.substring(r), e = e.substring(0, r)), e && (t.pathname = e);
	}
	return t;
}
function ze(e, t, n = !1) {
	let r = "http://localhost";
	e && (r = e.location.origin === "null" ? e.location.href : e.location.origin), W(r, "No window.location.(origin|href) available to create URL");
	let i = typeof t == "string" ? t : K(t);
	return i = i.replace(/ $/, "%20"), !n && Me.test(i) && (i = r + i), new URL(i, r);
}
var Be, Ve = class {
	constructor(e) {
		if (ke(this, Be, /* @__PURE__ */ new Map()), e) for (let [t, n] of e) this.set(t, n);
	}
	get(e) {
		if (U(this, Be).has(e)) return U(this, Be).get(e);
		if (e.defaultValue !== void 0) return e.defaultValue;
		throw Error("No value found for context");
	}
	set(e, t) {
		U(this, Be).set(e, t);
	}
};
Be = /* @__PURE__ */ new WeakMap();
var He = /* @__PURE__ */ new Set([
	"lazy",
	"caseSensitive",
	"path",
	"id",
	"index",
	"children"
]);
function Ue(e) {
	return He.has(e);
}
var We = /* @__PURE__ */ new Set([
	"lazy",
	"caseSensitive",
	"path",
	"id",
	"index",
	"middleware",
	"children"
]);
function Ge(e) {
	return We.has(e);
}
function Ke(e) {
	return e.index === !0;
}
function qe(e, t, n = [], r = {}, i = !1) {
	return e.map((e, a) => {
		let o = [...n, String(a)], s = typeof e.id == "string" ? e.id : o.join("-");
		if (W(e.index !== !0 || !e.children, "Cannot specify children on an index route"), W(i || !r[s], `Found a route id collision on id "${s}".  Route id's must be globally unique within Data Router usages`), Ke(e)) {
			let n = {
				...e,
				id: s
			};
			return r[s] = Je(n, t(n)), n;
		}
		{
			let n = {
				...e,
				id: s,
				children: void 0
			};
			return r[s] = Je(n, t(n)), e.children && (n.children = qe(e.children, t, o, r, i)), n;
		}
	});
}
function Je(e, t) {
	return Object.assign(e, {
		...t,
		...typeof t.lazy == "object" && t.lazy != null ? { lazy: {
			...e.lazy,
			...t.lazy
		} } : {}
	});
}
function Ye(e, t, n = "/") {
	return Xe(e, t, n, !1);
}
function Xe(e, t, n, r, i) {
	let a = q((typeof t == "string" ? Re(t) : t).pathname || "/", n);
	if (a == null) return null;
	let o = i ?? Qe(e), s = null, c = ht(a);
	for (let e = 0; s == null && e < o.length; ++e) s = dt(o[e], c, r);
	return s;
}
function Ze(e, t) {
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
function Qe(e) {
	let t = $e(e);
	return tt(t), t;
}
function $e(e, t = [], n = [], r = "", i = !1) {
	let a = (e, a, o = i, s) => {
		let c = {
			relativePath: s === void 0 ? e.path || "" : s,
			caseSensitive: e.caseSensitive === !0,
			childrenIndex: a,
			route: e
		};
		if (c.relativePath.startsWith("/")) {
			if (!c.relativePath.startsWith(r) && o) return;
			W(c.relativePath.startsWith(r), `Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), c.relativePath = c.relativePath.slice(r.length);
		}
		let l = Tt([r, c.relativePath]), u = n.concat(c);
		e.children && e.children.length > 0 && (W(e.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${l}".`), $e(e.children, t, u, l, o)), !(e.path == null && !e.index) && t.push({
			path: l,
			score: lt(l, e.index),
			routesMeta: u.map((e, t) => {
				let [n, r] = mt(e.relativePath, e.caseSensitive, t === u.length - 1);
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
		else for (let n of et(e.path)) a(e, t, !0, n);
	}), t;
}
function et(e) {
	let t = e.split("/");
	if (t.length === 0) return [];
	let [n, ...r] = t, i = n.endsWith("?"), a = n.replace(/\?$/, "");
	if (r.length === 0) return i ? [a, ""] : [a];
	let o = et(r.join("/")), s = [];
	return s.push(...o.map((e) => e === "" ? a : [a, e].join("/"))), i && s.push(...o), s.map((t) => e.startsWith("/") && t === "" ? "/" : t);
}
function tt(e) {
	e.sort((e, t) => e.score === t.score ? ut(e.routesMeta.map((e) => e.childrenIndex), t.routesMeta.map((e) => e.childrenIndex)) : t.score - e.score);
}
var nt = /^:[\w-]+$/, rt = 3, it = 2, at = 1, ot = 10, st = -2, ct = (e) => e === "*";
function lt(e, t) {
	let n = e.split("/"), r = n.length;
	return n.some(ct) && (r += st), t && (r += it), n.filter((e) => !ct(e)).reduce((e, t) => e + (nt.test(t) ? rt : t === "" ? at : ot), r);
}
function ut(e, t) {
	return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function dt(e, t, n = !1) {
	let { routesMeta: r } = e, i = {}, a = "/", o = [];
	for (let e = 0; e < r.length; ++e) {
		let s = r[e], c = e === r.length - 1, l = a === "/" ? t : t.slice(a.length) || "/", u = {
			path: s.relativePath,
			caseSensitive: s.caseSensitive,
			end: c
		}, d = s.matcher && s.compiledParams ? pt(u, l, s.matcher, s.compiledParams) : ft(u, l), f = s.route;
		if (!d && c && n && !r[r.length - 1].route.index && (d = ft({
			path: s.relativePath,
			caseSensitive: s.caseSensitive,
			end: !1
		}, l)), !d) return null;
		Object.assign(i, d.params), o.push({
			params: i,
			pathname: Tt([a, d.pathname]),
			pathnameBase: Dt(Tt([a, d.pathnameBase])),
			route: f
		}), d.pathnameBase !== "/" && (a = Tt([a, d.pathnameBase]));
	}
	return o;
}
function ft(e, t) {
	typeof e == "string" && (e = {
		path: e,
		caseSensitive: !1,
		end: !0
	});
	let [n, r] = mt(e.path, e.caseSensitive, e.end);
	return pt(e, t, n, r);
}
function pt(e, t, n, r) {
	let i = t.match(n);
	if (!i) return null;
	let a = i[0], o = Et(a, 1), s = i.slice(1);
	return {
		params: r.reduce((e, { paramName: t, isOptional: n }, r) => {
			if (t === "*") {
				let e = s[r] || "";
				o = Et(a.slice(0, a.length - e.length), 1);
			}
			let i = s[r];
			return e[t] = n && !i ? void 0 : (i || "").replace(/%2F/g, "/"), e;
		}, {}),
		pathname: a,
		pathnameBase: o,
		pattern: e
	};
}
function mt(e, t = !1, n = !0) {
	G(e === "*" || !e.endsWith("*") || e.endsWith("/*"), `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`);
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
function ht(e) {
	try {
		return e.split("/").map((e) => decodeURIComponent(e).replace(/\//g, "%2F")).join("/");
	} catch (t) {
		return G(!1, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`), e;
	}
}
function q(e, t) {
	if (t === "/") return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
	return r && r !== "/" ? null : e.slice(n) || "/";
}
function gt({ basename: e, pathname: t }) {
	return t === "/" ? e : Tt([e, t]);
}
var _t = (e) => je.test(e);
function vt(e, t = "/") {
	let { pathname: n, search: r = "", hash: i = "" } = typeof e == "string" ? Re(e) : e, a;
	return n ? (n = wt(n), a = n.startsWith("/") || n.startsWith("\\") ? yt(n.substring(1), "/") : yt(n, t)) : a = t, {
		pathname: a,
		search: Ot(r),
		hash: kt(i)
	};
}
function yt(e, t) {
	let n = Et(t).split("/");
	return e.split("/").forEach((e) => {
		e === ".." ? n.length > 1 && n.pop() : e !== "." && n.push(e);
	}), n.length > 1 ? n.join("/") : "/";
}
function bt(e, t, n, r) {
	return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function xt(e) {
	return e.filter((e, t) => t === 0 || e.route.path && e.route.path.length > 0);
}
function St(e) {
	let t = xt(e);
	return t.map((e, n) => n === t.length - 1 ? e.pathname : e.pathnameBase);
}
function Ct(e, t, n, r = !1) {
	let i;
	typeof e == "string" ? i = Re(e) : (i = { ...e }, W(!i.pathname || !i.pathname.includes("?"), bt("?", "pathname", "search", i)), W(!i.pathname || !i.pathname.includes("#"), bt("#", "pathname", "hash", i)), W(!i.search || !i.search.includes("#"), bt("#", "search", "hash", i)));
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
	let c = vt(i, s), l = o && o !== "/" && o.endsWith("/"), u = (a || o === ".") && n.endsWith("/");
	return !c.pathname.endsWith("/") && (l || u) && (c.pathname += "/"), c;
}
var wt = (e) => e.replace(/[\\/]{2,}/g, "/"), Tt = (e) => wt(e.join("/"));
function Et(e, t = 0) {
	let n = e.length;
	for (; n > t && e.charCodeAt(n - 1) === 47;) n--;
	return n === e.length ? e : e.slice(0, n);
}
var Dt = (e) => Et(e).replace(/^\/*/, "/"), Ot = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, kt = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, At = class {
	constructor(e, t, n, r = !1) {
		this.status = e, this.statusText = t || "", this.internal = r, n instanceof Error ? (this.data = n.toString(), this.error = n) : this.data = n;
	}
};
function jt(e) {
	return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
function Mt(e) {
	return Tt(e.map((e) => e.route.path).filter(Boolean)) || "/";
}
var Nt = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function Pt(e, t) {
	let n = e;
	if (typeof n != "string" || !je.test(n)) return {
		absoluteURL: void 0,
		isExternal: !1,
		to: n
	};
	let r = n, i = !1;
	if (Nt) try {
		let e = new URL(window.location.href), r = Me.test(n) ? new URL(Ne(n, e.protocol)) : new URL(n), a = q(r.pathname, t);
		r.origin === e.origin && a != null ? n = a + r.search + r.hash : i = !0;
	} catch {
		G(!1, `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
	}
	return {
		absoluteURL: r,
		isExternal: i,
		to: n
	};
}
var Ft = Symbol("Uninstrumented");
function It(e, t) {
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
		let e = Rt(n.lazy, t.lazy, () => void 0);
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
				let e = Rt(a, i, () => void 0);
				e && (r.lazy = Object.assign(r.lazy || {}, { [t]: e }));
			}
		});
	}
	return ["loader", "action"].forEach((e) => {
		let i = t[e];
		if (typeof i == "function" && n[e].length > 0) {
			let t = i[Ft] ?? i, a = Rt(n[e], t, (...e) => Bt(e[0]));
			a && (e === "loader" && t.hydrate === !0 && (a.hydrate = !0), a[Ft] = t, r[e] = a);
		}
	}), t.middleware && t.middleware.length > 0 && n.middleware.length > 0 && (r.middleware = t.middleware.map((e) => {
		let t = e[Ft] ?? e, r = Rt(n.middleware, t, (...e) => Bt(e[0]));
		return r ? (r[Ft] = t, r) : e;
	})), r;
}
function Lt(e, t) {
	let n = {
		navigate: [],
		fetch: []
	};
	if (t.forEach((e) => e({ instrument(e) {
		let t = Object.keys(e);
		for (let r of t) e[r] && n[r].push(e[r]);
	} })), n.navigate.length > 0) {
		let t = e.navigate[Ft] ?? e.navigate, r = Rt(n.navigate, t, (...t) => {
			let [n, r] = t;
			return {
				to: typeof n == "number" || typeof n == "string" ? n : n ? K(n) : ".",
				...Vt(e, r ?? {})
			};
		});
		r && (r[Ft] = t, e.navigate = r);
	}
	if (n.fetch.length > 0) {
		let t = e.fetch[Ft] ?? e.fetch, r = Rt(n.fetch, t, (...t) => {
			let [n, , r, i] = t;
			return {
				href: r ?? ".",
				fetcherKey: n,
				...Vt(e, i ?? {})
			};
		});
		r && (r[Ft] = t, e.fetch = r);
	}
	return e;
}
function Rt(e, t, n) {
	return e.length === 0 ? null : async (...r) => {
		let i = await zt(e, n(...r), () => t(...r), e.length - 1);
		if (i.type === "error") throw i.value;
		return i.value;
	};
}
async function zt(e, t, n, r) {
	let i = e[r], a;
	if (i) {
		let o, s = async () => (o ? console.error("You cannot call instrumented handlers more than once") : o = zt(e, t, n, r - 1), a = await o, W(a, "Expected a result"), a.type === "error" && a.value instanceof Error ? {
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
function Bt(e) {
	let { request: t, context: n, params: r, pattern: i } = e;
	return {
		request: Ht(t),
		params: { ...r },
		pattern: i,
		context: Ut(n)
	};
}
function Vt(e, t) {
	return {
		currentUrl: K(e.state.location),
		..."formMethod" in t ? { formMethod: t.formMethod } : {},
		..."formEncType" in t ? { formEncType: t.formEncType } : {},
		..."formData" in t ? { formData: t.formData } : {},
		..."body" in t ? { body: t.body } : {}
	};
}
function Ht(e) {
	return {
		method: e.method,
		url: e.url,
		headers: { get: (...t) => e.headers.get(...t) }
	};
}
function Ut(e) {
	if (Gt(e)) {
		let t = { ...e };
		return Object.freeze(t), t;
	}
	return { get: (t) => e.get(t) };
}
var Wt = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Gt(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Object.getOwnPropertyNames(t).sort().join("\0") === Wt;
}
var Kt = new URL("http://localhost");
function qt(e) {
	if (e.createURL) return e.createURL("/");
	try {
		return new URL(e.createHref("/"), Kt);
	} catch {
		return Kt;
	}
}
function Jt(e, t) {
	return e.origin === t.origin && (e.origin !== "null" || e.protocol === t.protocol && e.host === t.host);
}
function Yt(e, t) {
	if (e.startsWith("//")) return !0;
	let n = t.protocol.toLowerCase();
	return e.toLowerCase().startsWith(n) ? t.host === "" || e.slice(n.length).startsWith("//") : !1;
}
function Xt(e, t, n, r) {
	let i = null;
	try {
		i = e == null ? null : new URL(e, n);
	} catch {}
	let a = new URL(t, n), o = i != null && !Jt(i, n), s = !Jt(a, n);
	if (r === "reject") {
		if (o || s) throw Error("External navigation is not allowed");
	} else if (s && (i == null || !Yt(e, i) || !Jt(i, a))) throw Error("External navigation is not allowed");
}
var Zt = [
	"POST",
	"PUT",
	"PATCH",
	"DELETE"
], Qt = new Set(Zt), $t = ["GET", ...Zt], en = new Set($t), tn = /* @__PURE__ */ new Set([
	301,
	302,
	303,
	307,
	308
]), nn = /* @__PURE__ */ new Set([307, 308]), rn = {
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
}, an = {
	state: "idle",
	data: void 0,
	formMethod: void 0,
	formAction: void 0,
	formEncType: void 0,
	formData: void 0,
	json: void 0,
	text: void 0
}, on = {
	state: "unblocked",
	proceed: void 0,
	reset: void 0,
	location: void 0
}, sn = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }), cn = "remix-router-transitions", ln = Symbol("ResetLoaderData"), un, dn, fn, pn, mn = class {
	constructor(e) {
		ke(this, un), ke(this, dn), ke(this, fn), ke(this, pn), Ae(this, un, e), Ae(this, dn, Qe(e));
	}
	get stableRoutes() {
		return U(this, un);
	}
	get activeRoutes() {
		return U(this, fn) ?? U(this, un);
	}
	get branches() {
		return U(this, pn) ?? U(this, dn);
	}
	get hasHMRRoutes() {
		return U(this, fn) != null;
	}
	setRoutes(e) {
		Ae(this, un, e), Ae(this, dn, Qe(e));
	}
	setHmrRoutes(e) {
		Ae(this, fn, e), Ae(this, pn, Qe(e));
	}
	commitHmrRoutes() {
		U(this, fn) && (Ae(this, un, U(this, fn)), Ae(this, dn, U(this, pn)), Ae(this, fn, void 0), Ae(this, pn, void 0));
	}
};
un = /* @__PURE__ */ new WeakMap(), dn = /* @__PURE__ */ new WeakMap(), fn = /* @__PURE__ */ new WeakMap(), pn = /* @__PURE__ */ new WeakMap();
function hn(e) {
	let t = e.window ? e.window : typeof window < "u" ? window : void 0, n = t !== void 0 && t.document !== void 0 && t.document.createElement !== void 0;
	W(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
	let r = e.hydrationRouteProperties || [], i = e.mapRouteProperties || sn, a = i;
	if (e.instrumentations) {
		let t = e.instrumentations;
		a = (e) => ({
			...i(e),
			...It(t.map((e) => e.route).filter(Boolean), e)
		});
	}
	let o = {}, s = new mn(qe(e.routes, a, void 0, o)), c = e.basename || "/";
	c.startsWith("/") || (c = `/${c}`);
	let l = e.dataStrategy || Mn, u = { ...e.future }, d = null, f = /* @__PURE__ */ new Set(), p = null, m = null, h = null, g = null, _ = e.hydrationData != null, v = Xe(s.activeRoutes, e.history.location, c, !1, s.branches), y = !1, b = null, x, S;
	if (v == null && !e.patchRoutesOnNavigation) {
		let t = rr(404, { pathname: e.history.location.pathname }), { matches: n, route: r } = nr(s.activeRoutes);
		x = !0, S = !x, v = n, b = { [r.id]: t };
	} else if (v && !e.hydrationData && Ge(v, s.activeRoutes, e.history.location.pathname).active && (v = null), !v) {
		x = !1, S = !x, v = [];
		let t = Ge(null, s.activeRoutes, e.history.location.pathname);
		t.active && t.matches && (y = !0, v = t.matches);
	} else if (v.some((e) => e.route.lazy)) x = !1, S = !x;
	else if (!v.some((e) => bn(e.route))) x = !0, S = !x;
	else {
		let t = e.hydrationData ? e.hydrationData.loaderData : null, n = e.hydrationData ? e.hydrationData.errors : null, r = v;
		if (n) {
			let e = v.findIndex((e) => n[e.route.id] !== void 0);
			r = r.slice(0, e + 1);
		}
		S = !1, x = !0, r.forEach((e) => {
			let r = xn(e.route, t, n);
			S ||= r.renderFallback, x &&= !r.shouldLoad;
		});
	}
	let C, w = {
		historyAction: e.history.action,
		location: e.history.location,
		matches: v,
		initialized: x,
		renderFallback: S,
		navigation: rn,
		restoreScrollPosition: e.hydrationData == null && null,
		preventScrollReset: !1,
		revalidation: "idle",
		loaderData: e.hydrationData && e.hydrationData.loaderData || {},
		actionData: e.hydrationData && e.hydrationData.actionData || null,
		errors: e.hydrationData && e.hydrationData.errors || b,
		fetchers: /* @__PURE__ */ new Map(),
		blockers: /* @__PURE__ */ new Map()
	}, T = "POP", E = null, D = !1, O, k = !1, A = /* @__PURE__ */ new Map(), j = null, M = !1, N = !1, ee = /* @__PURE__ */ new Set(), P = /* @__PURE__ */ new Map(), te = 0, ne = -1, F = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Set(), ie = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Set(), L = /* @__PURE__ */ new Map(), R, oe = null;
	function se() {
		if (d = e.history.listen(({ action: t, location: n, delta: r }) => {
			if (R) {
				R(), R = void 0;
				return;
			}
			G(L.size === 0 || r != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
			let i = Fe({
				currentLocation: w.location,
				nextLocation: n,
				historyAction: t
			});
			if (i && r != null) {
				let t = new Promise((e) => {
					R = e;
				});
				e.history.go(r * -1), Pe(i, {
					state: "blocked",
					location: n,
					proceed() {
						Pe(i, {
							state: "proceeding",
							proceed: void 0,
							reset: void 0,
							location: n
						}), t.then(() => e.history.go(r));
					},
					reset() {
						let e = new Map(w.blockers);
						e.set(i, on), z({ blockers: e });
					}
				}), E?.resolve(), E = null;
				return;
			}
			return fe(t, n);
		}), n) {
			Er(t, A);
			let e = () => Dr(t, A);
			t.addEventListener("pagehide", e), j = () => t.removeEventListener("pagehide", e);
		}
		return w.initialized || fe("POP", w.location, { initialHydration: !0 }), C;
	}
	function ce() {
		d && d(), j && j(), f.clear(), O && O.abort(), w.fetchers.forEach((e, t) => H(w.fetchers, t)), w.blockers.forEach((e, t) => Ne(t));
	}
	function le(e) {
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
	function z(e, t = {}) {
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
			e.state === "idle" && (I.has(t) ? n.push(t) : r.push(t));
		}), I.forEach((e) => {
			!w.fetchers.has(e) && !P.has(e) && n.push(e);
		}), f.size === 0 && (p = { newErrors: e.errors ?? null }), [...f].forEach((r) => r(w, {
			deletedFetchers: n,
			newErrors: e.errors ?? null,
			viewTransitionOpts: t.viewTransitionOpts,
			flushSync: t.flushSync === !0
		})), n.forEach((e) => H(w.fetchers, e)), r.forEach((e) => w.fetchers.delete(e));
	}
	function ue(t, n, { flushSync: r } = {}) {
		let i = w.actionData != null && w.navigation.formMethod != null && J(w.navigation.formMethod) && w.navigation.state === "loading" && t.state?._isRedirect !== !0, a;
		a = n.actionData ? Object.keys(n.actionData).length > 0 ? n.actionData : null : i ? w.actionData : null;
		let o = n.loaderData ? $n(w.loaderData, n.loaderData, n.matches || [], n.errors) : w.loaderData, c = w.blockers;
		c.size > 0 && (c = new Map(c), c.forEach((e, t) => c.set(t, on)));
		let l = !M && We(t, n.matches || w.matches), u = D === !0 || w.navigation.formMethod != null && J(w.navigation.formMethod) && t.state?._isRedirect !== !0;
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
		z({
			...n,
			actionData: a,
			loaderData: o,
			historyAction: T,
			location: t,
			initialized: !0,
			renderFallback: !1,
			navigation: rn,
			revalidation: "idle",
			restoreScrollPosition: l,
			preventScrollReset: u,
			blockers: c
		}, {
			viewTransitionOpts: d,
			flushSync: r === !0
		}), T = "POP", D = !1, k = !1, M = !1, N = !1, E?.resolve(), E = null, oe?.resolve(), oe = null;
	}
	async function B(t, n) {
		if (E?.resolve(), E = null, typeof t == "number") {
			E ||= Or();
			let n = E.promise;
			return e.history.go(t), n;
		}
		let { path: r, submission: i, error: a } = vn(!1, _n(w.location, w.matches, c, t, n?.fromRouteId, n?.relative), n), o;
		if (n?.mask) {
			let t = typeof n.mask == "string" ? Re(n.mask) : {
				...w.location.mask,
				...n.mask
			};
			if (o = {
				pathname: t.pathname ?? "",
				search: t.search ?? "",
				hash: t.hash ?? ""
			}, Me.test(o.pathname)) throw Error("External navigation is not allowed");
			o.pathname.startsWith("\\") && (o.pathname = o.pathname.replace(/^\\+/, "/")), Xt(typeof n.mask == "string" ? n.mask : K(n.mask), K(o), e.history.createURL("/"), "reject");
		}
		let s = w.location, l = Le(s, r, n && n.state, void 0, o);
		l = {
			...l,
			...e.history.encodeLocation(l)
		}, Xt(t == null ? e.history.createHref(w.location) : typeof t == "string" ? t : K(t), e.history.createHref(l.mask || l), e.history.createURL("/"), "reject");
		let u = n && n.replace != null ? n.replace : void 0, d = "PUSH";
		u === !0 ? d = "REPLACE" : u === !1 || i != null && J(i.formMethod) && i.formAction === w.location.pathname + w.location.search && (d = "REPLACE");
		let f = n && "preventScrollReset" in n ? n.preventScrollReset === !0 : void 0, p = (n && n.flushSync) === !0, m = Fe({
			currentLocation: s,
			nextLocation: l,
			historyAction: d
		});
		if (m) {
			Pe(m, {
				state: "blocked",
				location: l,
				proceed() {
					Pe(m, {
						state: "proceeding",
						proceed: void 0,
						reset: void 0,
						location: l
					}), B(t, n);
				},
				reset() {
					let e = new Map(w.blockers);
					e.set(m, on), z({ blockers: e });
				}
			});
			return;
		}
		await fe(d, l, {
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
		oe ||= Or(), Se(), z({ revalidation: "loading" });
		let e = oe.promise;
		return w.navigation.state === "submitting" ? e : w.navigation.state === "idle" ? (fe(w.historyAction, w.location, { startUninterruptedRevalidation: !0 }), e) : (fe(T || w.historyAction, w.navigation.location, {
			overrideNavigation: w.navigation,
			enableViewTransition: k === !0
		}), e);
	}
	async function fe(t, n, r) {
		O && O.abort(), O = null, T = t, M = (r && r.startUninterruptedRevalidation) === !0, Ue(w.location, w.matches), D = (r && r.preventScrollReset) === !0, k = (r && r.enableViewTransition) === !0;
		let i = s.activeRoutes, a = r?.initialHydration && w.matches && w.matches.length > 0 && !y ? w.matches : Xe(i, n, c, !1, s.branches), o = (r && r.flushSync) === !0;
		if (a && w.initialized && !N && or(w.location, n) && !(r && r.submission && J(r.submission.formMethod))) {
			ue(n, { matches: a }, { flushSync: o });
			return;
		}
		let l = Ge(a, i, n.pathname);
		if (l.active && l.matches && (a = l.matches), !a) {
			let { error: e, notFoundMatches: t, route: r } = Ie(n.pathname);
			ue(n, {
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
		let d = qn(e.history, n, O.signal, r && r.submission), f = e.getContext ? await e.getContext() : new Ve(), p;
		if (r && r.pendingError) p = [tr(a).route.id, {
			type: "error",
			error: r.pendingError
		}];
		else if (r && r.submission && J(r.submission.formMethod)) {
			let i = await pe(d, n, r.submission, a, t, f, l.active, r && r.initialHydration === !0, {
				replace: r.replace,
				flushSync: o
			});
			if (i.shortCircuited) return;
			if (i.pendingActionResult) {
				let [e, t] = i.pendingActionResult;
				if (dr(t) && jt(t.error) && t.error.status === 404) {
					O = null, ue(n, {
						matches: i.matches,
						loaderData: {},
						errors: { [e]: t.error }
					});
					return;
				}
			}
			a = i.matches || a, p = i.pendingActionResult, u = xr(n, a, t, r.submission), o = !1, l.active = !1, d = qn(e.history, d.url, d.signal);
		}
		let { shortCircuited: m, matches: h, loaderData: g, errors: _, workingFetchers: v } = await me(d, n, a, t, f, l.active, u, r && r.submission, r && r.fetcherSubmission, r && r.replace, r && r.initialHydration === !0, o, p, r && r.callSiteDefaultShouldRevalidate);
		m || (O = null, ue(n, {
			matches: h || a,
			...er(p),
			loaderData: g,
			errors: _,
			...v ? { fetchers: v } : {}
		}));
	}
	async function pe(t, n, i, l, u, d, f, p, m = {}) {
		if (Se(), z({ navigation: Sr(n, l, u, i) }, { flushSync: m.flushSync === !0 }), f) {
			let e = await Ke(l, n.pathname, t.signal);
			if (e.type === "aborted") return { shortCircuited: !0 };
			if (e.type === "error") {
				if (e.partialMatches.length === 0) {
					let { matches: t, route: n } = nr(s.activeRoutes);
					return {
						matches: t,
						pendingActionResult: [n.id, {
							type: "error",
							error: e.error
						}]
					};
				}
				let t = tr(e.partialMatches).route.id;
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
				let { notFoundMatches: e, error: t, route: r } = Ie(n.pathname);
				return {
					matches: e,
					pendingActionResult: [r.id, {
						type: "error",
						error: t
					}]
				};
			}
		}
		let h, g = yr(l, n);
		if (!g.route.action && !g.route.lazy) h = {
			type: "error",
			error: rr(405, {
				method: t.method,
				pathname: n.pathname,
				routeId: g.route.id
			})
		};
		else {
			let e = await V(t, n, Rn(a, o, t, n, l, g, p ? [] : r, d), d, null);
			if (h = e[g.route.id], !h) {
				for (let t of l) if (e[t.route.id]) {
					h = e[t.route.id];
					break;
				}
			}
			if (t.signal.aborted) return { shortCircuited: !0 };
		}
		if (fr(h)) {
			let n;
			return n = m && m.replace != null ? m.replace : Kn(h.response.headers.get("Location"), new URL(t.url), c, e.history) === w.location.pathname + w.location.search, await be(t, h, !0, {
				submission: i,
				replace: n
			}), { shortCircuited: !0 };
		}
		if (dr(h)) {
			let e = tr(l, g.route.id);
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
	async function me(t, n, i, l, u, d, f, p, m, h, g, _, v, y) {
		let b = f || xr(n, i, l, p), x = p || m || br(b), S = !M && !g;
		if (d) {
			if (S) {
				let e = he(v);
				z({
					navigation: b,
					...e === void 0 ? {} : { actionData: e }
				}, { flushSync: _ });
			}
			let e = await Ke(i, n.pathname, t.signal);
			if (e.type === "aborted") return { shortCircuited: !0 };
			if (e.type === "error") {
				if (e.partialMatches.length === 0) {
					let { matches: t, route: n } = nr(s.activeRoutes);
					return {
						matches: t,
						loaderData: {},
						errors: { [n.id]: e.error }
					};
				}
				let t = tr(e.partialMatches).route.id;
				return {
					matches: e.partialMatches,
					loaderData: {},
					errors: { [t]: e.error }
				};
			}
			if (e.matches) i = e.matches;
			else {
				let { error: e, notFoundMatches: t, route: r } = Ie(n.pathname);
				return {
					matches: t,
					loaderData: {},
					errors: { [r.id]: e }
				};
			}
		}
		let C = s.activeRoutes, { dsMatches: T, revalidatingFetchers: E } = yn(t, u, a, o, e.history, w, i, x, n, g ? [] : r, g === !0, N, ee, I, ie, re, C, c, e.patchRoutesOnNavigation != null, s.branches, v, y);
		if (ne = ++te, !e.dataStrategy && !T.some((e) => e.shouldLoad) && !T.some((e) => e.route.middleware && e.route.middleware.length > 0) && E.length === 0) {
			let e = new Map(w.fetchers), t = ke(e);
			return ue(n, {
				matches: i,
				loaderData: {},
				errors: v && dr(v[1]) ? { [v[0]]: v[1].error } : null,
				...er(v),
				...t ? { fetchers: e } : {}
			}, { flushSync: _ }), { shortCircuited: !0 };
		}
		if (S) {
			let e = {};
			if (!d) {
				e.navigation = b;
				let t = he(v);
				t !== void 0 && (e.actionData = t);
			}
			E.length > 0 && (e.fetchers = ge(E)), z(e, { flushSync: _ });
		}
		E.forEach((e) => {
			Oe(e.key), e.controller && P.set(e.key, e.controller);
		});
		let D = () => E.forEach((e) => Oe(e.key));
		O && O.signal.addEventListener("abort", D);
		let { loaderResults: k, fetcherResults: A } = await xe(T, E, t, n, u);
		if (t.signal.aborted) return { shortCircuited: !0 };
		O && O.signal.removeEventListener("abort", D), E.forEach((e) => P.delete(e.key));
		let j = ir(k);
		if (j) return await be(t, j.result, !0, { replace: h }), { shortCircuited: !0 };
		if (j = ir(A), j) return re.add(j.key), await be(t, j.result, !0, { replace: h }), { shortCircuited: !0 };
		let F = new Map(w.fetchers), { loaderData: ae, errors: L } = Qn(w, i, k, v, E, A, F);
		g && w.errors && (L = {
			...w.errors,
			...L
		});
		let R = ke(F), oe = Ae(ne, F), se = R || oe || E.length > 0;
		return {
			matches: i,
			loaderData: ae,
			errors: L,
			...se ? { workingFetchers: F } : {}
		};
	}
	function he(e) {
		if (e && !dr(e[1])) return { [e[0]]: e[1].data };
		if (w.actionData) return Object.keys(w.actionData).length === 0 ? null : w.actionData;
	}
	function ge(e) {
		let t = new Map(w.fetchers);
		return e.forEach((e) => {
			let n = t.get(e.key), r = Cr(void 0, n ? n.data : void 0);
			t.set(e.key, r);
		}), t;
	}
	async function _e(t, n, r, i) {
		Oe(t);
		let a = (i && i.flushSync) === !0, o = s.activeRoutes, l = _n(w.location, w.matches, c, r, n, i?.relative), u = Xe(o, l, c, !1, s.branches), d = Ge(u, o, l);
		if (d.active && d.matches && (u = d.matches), !u) {
			we(t, n, rr(404, { pathname: l }), { flushSync: a });
			return;
		}
		let { path: f, submission: p, error: m } = vn(!0, l, i);
		if (m) {
			we(t, n, m, { flushSync: a });
			return;
		}
		let h = e.getContext ? await e.getContext() : new Ve(), g = (i && i.preventScrollReset) === !0;
		if (p && J(p.formMethod)) {
			await ve(t, n, f, u, h, d.active, a, g, p, i && i.defaultShouldRevalidate);
			return;
		}
		ie.set(t, {
			routeId: n,
			path: f
		}), await ye(t, n, f, u, h, d.active, a, g, p);
	}
	async function ve(t, n, i, l, u, d, f, p, m, h) {
		Se(), ie.delete(t), Ce(t, wr(m, w.fetchers.get(t)), { flushSync: f });
		let g = new AbortController(), _ = qn(e.history, i, g.signal, m);
		if (d) {
			let e = await Ke(l, new URL(_.url).pathname, _.signal, t);
			if (e.type === "aborted") return;
			if (e.type === "error") {
				we(t, n, e.error, { flushSync: f });
				return;
			}
			if (e.matches) l = e.matches;
			else {
				we(t, n, rr(404, { pathname: i }), { flushSync: f });
				return;
			}
		}
		let v = yr(l, i);
		if (!v.route.action && !v.route.lazy) {
			we(t, n, rr(405, {
				method: m.formMethod,
				pathname: i,
				routeId: n
			}), { flushSync: f });
			return;
		}
		P.set(t, g);
		let y = te, b = Rn(a, o, _, i, l, v, r, u), x = await V(_, i, b, u, t), S = x[v.route.id];
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
		if (I.has(t)) {
			if (fr(S) || dr(S)) {
				Ce(t, Tr(void 0));
				return;
			}
		} else {
			if (fr(S)) {
				if (P.delete(t), ne > y) {
					Ce(t, Tr(void 0));
					return;
				}
				return re.add(t), Ce(t, Cr(m)), be(_, S, !1, {
					fetcherSubmission: m,
					preventScrollReset: p
				});
			}
			if (dr(S)) {
				we(t, n, S.error);
				return;
			}
		}
		let C = w.navigation.location || w.location, E = qn(e.history, C, g.signal), D = s.activeRoutes, k = w.navigation.state === "idle" ? w.matches : Xe(D, w.navigation.location, c, !1, s.branches);
		W(k, "Didn't find any matches after fetcher action");
		let A = ++te;
		F.set(t, A);
		let { dsMatches: j, revalidatingFetchers: M } = yn(E, u, a, o, e.history, w, k, m, C, r, !1, N, ee, I, ie, re, D, c, e.patchRoutesOnNavigation != null, s.branches, [v.route.id, S], h), ae = Cr(m, S.data), L = new Map(w.fetchers);
		L.set(t, ae), M.filter((e) => e.key !== t).forEach((e) => {
			let t = e.key, n = L.get(t), r = Cr(void 0, n ? n.data : void 0);
			L.set(t, r), Oe(t), e.controller && P.set(t, e.controller);
		}), z({ fetchers: L });
		let R = () => M.forEach((e) => Oe(e.key));
		g.signal.addEventListener("abort", R);
		let { loaderResults: oe, fetcherResults: se } = await xe(j, M, E, C, u);
		if (g.signal.aborted) return;
		g.signal.removeEventListener("abort", R), F.delete(t), P.delete(t), M.forEach((e) => P.delete(e.key));
		let ce = w.fetchers.has(t), le = (e) => {
			if (!ce) return e;
			let n = new Map(e.fetchers);
			return n.set(t, Tr(S.data)), {
				...e,
				fetchers: n
			};
		}, B = ir(oe);
		if (B) return w = le(w), be(E, B.result, !1, { preventScrollReset: p });
		if (B = ir(se), B) return re.add(B.key), w = le(w), be(E, B.result, !1, { preventScrollReset: p });
		let de = new Map(w.fetchers);
		ce && de.set(t, Tr(S.data));
		let { loaderData: fe, errors: pe } = Qn(w, k, oe, void 0, M, se, de);
		Ae(A, de), w.navigation.state === "loading" && A > ne ? (W(T, "Expected pending action"), O && O.abort(), ue(w.navigation.location, {
			matches: k,
			loaderData: fe,
			errors: pe,
			fetchers: de
		})) : (z({
			errors: pe,
			loaderData: $n(w.loaderData, fe, k, pe),
			fetchers: de
		}), N = !1);
	}
	async function ye(t, n, i, s, c, l, u, d, f) {
		let p = w.fetchers.get(t);
		Ce(t, Cr(f, p ? p.data : void 0), { flushSync: u });
		let m = new AbortController(), h = qn(e.history, i, m.signal);
		if (l) {
			let e = await Ke(s, new URL(h.url).pathname, h.signal, t);
			if (e.type === "aborted") return;
			if (e.type === "error") {
				we(t, n, e.error, { flushSync: u });
				return;
			}
			if (e.matches) s = e.matches;
			else {
				we(t, n, rr(404, { pathname: i }), { flushSync: u });
				return;
			}
		}
		let g = yr(s, i);
		P.set(t, m);
		let _ = te, v = await V(h, i, Rn(a, o, h, i, s, g, r, c), c, t), y = v[g.route.id];
		if (!y) {
			for (let e of s) if (v[e.route.id]) {
				y = v[e.route.id];
				break;
			}
		}
		if (P.get(t) === m && P.delete(t), !h.signal.aborted) {
			if (I.has(t)) {
				Ce(t, Tr(void 0));
				return;
			}
			if (fr(y)) {
				if (ne > _) {
					Ce(t, Tr(void 0));
					return;
				}
				re.add(t), await be(h, y, !1, { preventScrollReset: d });
				return;
			}
			if (dr(y)) {
				we(t, n, y.error);
				return;
			}
			Ce(t, Tr(y.data));
		}
	}
	async function be(r, i, a, { submission: o, fetcherSubmission: s, preventScrollReset: l, replace: u } = {}) {
		a || (E?.resolve(), E = null), i.response.headers.has("X-Remix-Revalidate") && (N = !0);
		let d = i.response.headers.get("Location");
		W(d, "Expected a Location header on the redirect Response");
		let f = d, p = new URL(r.url);
		d = Kn(d, p, c, e.history), Xt(f, d, p, "allow-explicit");
		let m = Le(w.location, d, { _isRedirect: !0 });
		if (n) {
			let e = !1;
			if (i.response.headers.has("X-Remix-Reload-Document")) e = !0;
			else if (_t(d)) {
				let n = ze(t, d, !0);
				e = n.origin !== t.location.origin || q(n.pathname, c) == null;
			}
			if (e) {
				u ? t.location.replace(d) : t.location.assign(d);
				return;
			}
		}
		O = null;
		let h = u === !0 || i.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH", { formMethod: g, formAction: _, formEncType: v } = w.navigation;
		!o && !s && g && _ && v && (o = br(w.navigation));
		let y = o || s;
		nn.has(i.response.status) && y && J(y.formMethod) ? await fe(h, m, {
			submission: {
				...y,
				formAction: d
			},
			preventScrollReset: l || D,
			enableViewTransition: a ? k : void 0
		}) : await fe(h, m, {
			overrideNavigation: xr(m, [], h, o),
			fetcherSubmission: s,
			preventScrollReset: l || D,
			enableViewTransition: a ? k : void 0
		});
	}
	async function V(e, t, n, r, i) {
		let a, o = {};
		try {
			a = await zn(l, e, t, n, i, r, !1);
		} catch (e) {
			return n.filter((e) => e.shouldLoad).forEach((t) => {
				o[t.route.id] = {
					type: "error",
					error: e
				};
			}), o;
		}
		if (e.signal.aborted) return o;
		if (!J(e.method)) for (let e of n) {
			if (a[e.route.id]?.type === "error") break;
			!a.hasOwnProperty(e.route.id) && !w.loaderData.hasOwnProperty(e.route.id) && (!w.errors || !w.errors.hasOwnProperty(e.route.id)) && e.shouldCallHandler() && (a[e.route.id] = {
				type: "error",
				result: /* @__PURE__ */ Error(`No result returned from dataStrategy for route ${e.route.id}`)
			});
		}
		for (let [t, r] of Object.entries(a)) if (ur(r)) {
			let i = r.result;
			o[t] = {
				type: "redirect",
				response: Un(i, e, t, n, c)
			};
		} else o[t] = await Hn(r);
		return o;
	}
	async function xe(e, t, n, r, i) {
		let a = V(n, r, e, i, null), o = Promise.all(t.map(async (e) => {
			if (e.matches && e.match && e.request && e.controller) {
				let t = (await V(e.request, e.path, e.matches, i, e.key))[e.match.route.id];
				return { [e.key]: t };
			}
			return Promise.resolve({ [e.key]: {
				type: "error",
				error: rr(404, { pathname: e.path })
			} });
		}));
		return {
			loaderResults: await a,
			fetcherResults: (await o).reduce((e, t) => Object.assign(e, t), {})
		};
	}
	function Se() {
		N = !0, ie.forEach((e, t) => {
			P.has(t) && ee.add(t), Oe(t);
		});
	}
	function Ce(e, t, n = {}) {
		let r = new Map(w.fetchers);
		r.set(e, t), z({ fetchers: r }, { flushSync: (n && n.flushSync) === !0 });
	}
	function we(e, t, n, r = {}) {
		let i = tr(w.matches, t), a = new Map(w.fetchers);
		H(a, e), z({
			errors: { [i.route.id]: n },
			fetchers: a
		}, { flushSync: (r && r.flushSync) === !0 });
	}
	function Te(e) {
		return ae.set(e, (ae.get(e) || 0) + 1), I.has(e) && I.delete(e), w.fetchers.get(e) || an;
	}
	function Ee(e, t) {
		Oe(e, t?.reason), Ce(e, Tr(null));
	}
	function H(e, t) {
		let n = w.fetchers.get(t);
		P.has(t) && !(n && n.state === "loading" && F.has(t)) && Oe(t), ie.delete(t), F.delete(t), re.delete(t), I.delete(t), ee.delete(t), e.delete(t);
	}
	function De(e) {
		let t = (ae.get(e) || 0) - 1;
		t <= 0 ? (ae.delete(e), I.add(e)) : ae.set(e, t), z({ fetchers: new Map(w.fetchers) });
	}
	function Oe(e, t) {
		let n = P.get(e);
		n && (n.abort(t), P.delete(e));
	}
	function U(e, t) {
		for (let n of e) {
			let e = t.get(n);
			W(e, `Expected fetcher: ${n}`);
			let r = Tr(e.data);
			t.set(n, r);
		}
	}
	function ke(e) {
		let t = [], n = !1;
		for (let r of re) {
			let i = e.get(r);
			W(i, `Expected fetcher: ${r}`), i.state === "loading" && (re.delete(r), t.push(r), n = !0);
		}
		return U(t, e), n;
	}
	function Ae(e, t) {
		let n = [];
		for (let [r, i] of F) if (i < e) {
			let e = t.get(r);
			W(e, `Expected fetcher: ${r}`), e.state === "loading" && (Oe(r), F.delete(r), n.push(r));
		}
		return U(n, t), n.length > 0;
	}
	function je(e, t) {
		let n = w.blockers.get(e) || on;
		return L.get(e) !== t && L.set(e, t), n;
	}
	function Ne(e) {
		w.blockers.delete(e), L.delete(e);
	}
	function Pe(e, t) {
		let n = w.blockers.get(e) || on;
		W(n.state === "unblocked" && t.state === "blocked" || n.state === "blocked" && t.state === "blocked" || n.state === "blocked" && t.state === "proceeding" || n.state === "blocked" && t.state === "unblocked" || n.state === "proceeding" && t.state === "unblocked", `Invalid blocker state transition: ${n.state} -> ${t.state}`);
		let r = new Map(w.blockers);
		r.set(e, t), z({ blockers: r });
	}
	function Fe({ currentLocation: e, nextLocation: t, historyAction: n }) {
		if (L.size === 0) return;
		L.size > 1 && G(!1, "A router only supports one blocker at a time");
		let r = Array.from(L.entries()), [i, a] = r[r.length - 1], o = w.blockers.get(i);
		if (!(o && o.state === "proceeding") && a({
			currentLocation: e,
			nextLocation: t,
			historyAction: n
		})) return i;
	}
	function Ie(e) {
		let t = rr(404, { pathname: e }), n = s.activeRoutes, { matches: r, route: i } = nr(n);
		return {
			notFoundMatches: r,
			route: i,
			error: t
		};
	}
	function Be(e, t, n) {
		if (m = e, g = t, h = n || null, !_ && w.navigation === rn) {
			_ = !0;
			let e = We(w.location, w.matches);
			e != null && z({ restoreScrollPosition: e });
		}
		return () => {
			m = null, g = null, h = null;
		};
	}
	function He(e, t) {
		return h && h(e, t.map((e) => Ze(e, w.loaderData))) || e.key;
	}
	function Ue(e, t) {
		if (m && g) {
			let n = He(e, t);
			m[n] = g();
		}
	}
	function We(e, t) {
		if (m) {
			let n = He(e, t), r = m[n];
			if (typeof r == "number") return r;
		}
		return null;
	}
	function Ge(t, n, r) {
		if (e.patchRoutesOnNavigation) {
			let e = s.branches;
			if (!t) return {
				active: !0,
				matches: Xe(n, r, c, !0, e) || []
			};
			if (Object.keys(t[0].params).length > 0) return {
				active: !0,
				matches: Xe(n, r, c, !0, e)
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
						r.aborted || Tn(e, n, s, t, a, !1);
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
			let u = s.branches, d = Xe(s.activeRoutes, n, c, !1, u), f = null;
			if (d && (Object.keys(d[0].params).length === 0 || (f = Xe(s.activeRoutes, n, c, !0, u), !(f && l.length < f.length && Je(l, f.slice(0, l.length)))))) return {
				type: "success",
				matches: d
			};
			if (f ||= Xe(s.activeRoutes, n, c, !0, u), !f || Je(l, f)) return {
				type: "success",
				matches: null
			};
			l = f;
		}
	}
	function Je(e, t) {
		return e.length === t.length && e.every((e, n) => e.route.id === t[n].route.id);
	}
	function Ye(e) {
		o = {}, s.setHmrRoutes(qe(e, a, void 0, o));
	}
	function Qe(e, t, n = !1) {
		Tn(e, t, s, o, a, n), s.hasHMRRoutes || z({});
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
		initialize: se,
		subscribe: le,
		enableScrollRestoration: Be,
		navigate: B,
		fetch: _e,
		revalidate: de,
		createHref: (t) => e.history.createHref(t),
		createURL: (t) => e.history.createURL(t),
		encodeLocation: (t) => e.history.encodeLocation(t),
		getFetcher: Te,
		resetFetcher: Ee,
		deleteFetcher: De,
		dispose: ce,
		getBlocker: je,
		deleteBlocker: Ne,
		patchRoutes: Qe,
		_internalFetchControllers: P,
		_internalSetRoutes: Ye,
		_internalSetStateDoNotUseOrYouWillBreakYourApp(e) {
			z(e);
		}
	}, e.instrumentations && (C = Lt(C, e.instrumentations.map((e) => e.router).filter(Boolean))), C;
}
function gn(e) {
	return e != null && ("formData" in e && e.formData != null || "body" in e && e.body !== void 0);
}
function _n(e, t, n, r, i, a) {
	let o, s;
	if (i) {
		o = [];
		for (let e of t) if (o.push(e), e.route.id === i) {
			s = e;
			break;
		}
	} else o = t, s = t[t.length - 1];
	let c = Ct(r || ".", St(o), q(e.pathname, n) || e.pathname, a === "path");
	if (r ?? (c.search = e.search, c.hash = e.hash), (r == null || r === "" || r === ".") && s) {
		let e = vr(c.search);
		if (s.route.index && !e) c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index";
		else if (!s.route.index && e) {
			let e = new URLSearchParams(c.search), t = e.getAll("index");
			e.delete("index"), t.filter((e) => e).forEach((t) => e.append("index", t));
			let n = e.toString();
			c.search = n ? `?${n}` : "";
		}
	}
	return n !== "/" && (c.pathname = gt({
		basename: n,
		pathname: c.pathname
	})), K(c);
}
function vn(e, t, n) {
	if (!n || !gn(n)) return { path: t };
	if (n.formMethod && !_r(n.formMethod)) return {
		path: t,
		error: rr(405, { method: n.formMethod })
	};
	let r = () => ({
		path: t,
		error: rr(400, { type: "invalid-body" })
	}), i = (n.formMethod || "get").toUpperCase(), a = ar(t);
	if (n.body !== void 0) {
		if (n.formEncType === "text/plain") {
			if (!J(i)) return r();
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
			if (!J(i)) return r();
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
	W(typeof FormData == "function", "FormData is not available in this environment");
	let o, s;
	if (n.formData) o = Yn(n.formData), s = n.formData;
	else if (n.body instanceof FormData) o = Yn(n.body), s = n.body;
	else if (n.body instanceof URLSearchParams) o = n.body, s = Xn(o);
	else if (n.body == null) o = new URLSearchParams(), s = new FormData();
	else try {
		o = new URLSearchParams(n.body), s = Xn(o);
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
	if (J(c.formMethod)) return {
		path: t,
		submission: c
	};
	let l = Re(t);
	return e && l.search && vr(l.search) && o.append("index", ""), l.search = `?${o}`, {
		path: K(l),
		submission: c
	};
}
function yn(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x) {
	let S = b ? dr(b[1]) ? b[1].error : b[1].data : void 0, C = i.createURL(a.location), w = i.createURL(c), T;
	if (u && a.errors) {
		let e = Object.keys(a.errors)[0];
		T = o.findIndex((t) => t.route.id === e);
	} else if (b && dr(b[1])) {
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
	}, k = Mt(o), A = o.map((i, o) => {
		let { route: s } = i, f = null;
		if (T != null && o > T) f = !1;
		else if (s.lazy) f = !0;
		else if (!bn(s)) f = !1;
		else if (u) {
			let { shouldLoad: e } = xn(s, a.loaderData, a.errors);
			f = e;
		} else Sn(a.loaderData, a.matches[o], i) && (f = !0);
		if (f !== null) return Ln(n, r, e, c, k, i, l, t, f);
		let p = !1;
		typeof x == "boolean" ? p = x : D ? p = !1 : d || C.pathname + C.search === w.pathname + w.search ? p = !0 : C.search === w.search ? Cn(a.matches[o], i) && (p = !0) : p = !0;
		let m = {
			...O,
			defaultShouldRevalidate: p
		}, h = wn(i, m);
		return Ln(n, r, e, c, k, i, l, t, h, m, x);
	}), j = [];
	return m.forEach((e, s) => {
		if (u || !o.some((t) => t.route.id === e.routeId) || p.has(s)) return;
		let c = a.fetchers.get(s), m = c && c.state !== "idle" && c.data === void 0, b = Xe(g, e.path, _ ?? "/", !1, y);
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
		let S = yr(b, e.path), C = new AbortController(), w = qn(i, e.path, C.signal), T = null;
		if (f.has(s)) f.delete(s), T = Rn(n, r, w, e.path, b, S, l, t);
		else if (m) d && (T = Rn(n, r, w, e.path, b, S, l, t));
		else {
			let i;
			i = typeof x == "boolean" ? x : !D && d;
			let a = {
				...O,
				defaultShouldRevalidate: i
			};
			wn(S, a) && (T = Rn(n, r, w, e.path, b, S, l, t, a));
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
function bn(e) {
	return e.loader != null || e.middleware != null && e.middleware.length > 0;
}
function xn(e, t, n) {
	if (e.lazy) return {
		shouldLoad: !0,
		renderFallback: !0
	};
	if (!bn(e)) return {
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
function Sn(e, t, n) {
	let r = !t || n.route.id !== t.route.id, i = !e.hasOwnProperty(n.route.id);
	return r || i;
}
function Cn(e, t) {
	let n = e.route.path;
	return e.pathname !== t.pathname || n != null && n.endsWith("*") && e.params["*"] !== t.params["*"];
}
function wn(e, t) {
	if (e.route.shouldRevalidate) {
		let n = e.route.shouldRevalidate(t);
		if (typeof n == "boolean") return n;
	}
	return t.defaultShouldRevalidate;
}
function Tn(e, t, n, r, i, a) {
	let o;
	if (e) {
		let t = r[e];
		W(t, `No route found to patch children into: routeId = ${e}`), t.children ||= [], o = t.children;
	} else o = n.activeRoutes;
	let s = [], c = [];
	if (t.forEach((e) => {
		let t = o.find((t) => En(e, t));
		t ? c.push({
			existingRoute: t,
			newRoute: e
		}) : s.push(e);
	}), s.length > 0) {
		let t = qe(s, i, [
			e || "_",
			"patch",
			String(o?.length || "0")
		], r);
		o.push(...t);
	}
	if (a && c.length > 0) for (let e = 0; e < c.length; e++) {
		let { existingRoute: t, newRoute: n } = c[e], r = t, [a] = qe([n], i, [], {}, !0);
		Object.assign(r, {
			element: a.element ? a.element : r.element,
			errorElement: a.errorElement ? a.errorElement : r.errorElement,
			hydrateFallbackElement: a.hydrateFallbackElement ? a.hydrateFallbackElement : r.hydrateFallbackElement
		});
	}
	n.hasHMRRoutes || n.setRoutes([...n.activeRoutes]);
}
function En(e, t) {
	return "id" in e && "id" in t && e.id === t.id ? !0 : e.index !== t.index || e.path !== t.path || e.caseSensitive !== t.caseSensitive ? !1 : (!e.children || e.children.length === 0) && (!t.children || t.children.length === 0) ? !0 : e.children?.every((e, n) => t.children?.some((t) => En(e, t))) ?? !1;
}
var Dn = /* @__PURE__ */ new WeakMap(), On = ({ key: e, route: t, manifest: n, mapRouteProperties: r }) => {
	let i = n[t.id];
	if (W(i, "No route found in manifest"), !i.lazy || typeof i.lazy != "object") return;
	let a = i.lazy[e];
	if (!a) return;
	let o = Dn.get(i);
	o || (o = {}, Dn.set(i, o));
	let s = o[e];
	if (s) return s;
	let c = (async () => {
		let t = Ue(e), n = i[e] !== void 0 && e !== "hasErrorBoundary";
		if (t) G(!t, "Route property " + e + " is not a supported lazy route property. This property will be ignored."), o[e] = Promise.resolve();
		else if (n) G(!1, `Route "${i.id}" has a static property "${e}" defined. The lazy property will be ignored.`);
		else {
			let t = await a();
			t != null && (Object.assign(i, { [e]: t }), Object.assign(i, r(i)));
		}
		typeof i.lazy == "object" && (i.lazy[e] = void 0, Object.values(i.lazy).every((e) => e === void 0) && (i.lazy = void 0));
	})();
	return o[e] = c, c;
}, kn = /* @__PURE__ */ new WeakMap();
function An(e, t, n, r, i) {
	let a = n[e.id];
	if (W(a, "No route found in manifest"), !e.lazy) return {
		lazyRoutePromise: void 0,
		lazyHandlerPromise: void 0
	};
	if (typeof e.lazy == "function") {
		let t = kn.get(a);
		if (t) return {
			lazyRoutePromise: t,
			lazyHandlerPromise: t
		};
		let n = (async () => {
			W(typeof e.lazy == "function", "No lazy route function found");
			let t = await e.lazy(), n = {};
			for (let e in t) {
				let r = t[e];
				if (r === void 0) continue;
				let i = Ge(e), o = a[e] !== void 0 && e !== "hasErrorBoundary";
				i ? G(!i, "Route property " + e + " is not a supported property to be returned from a lazy route function. This property will be ignored.") : o ? G(!o, `Route "${a.id}" has a static property "${e}" defined but its lazy function is also returning a value for this property. The lazy route property "${e}" will be ignored.`) : n[e] = r;
			}
			Object.assign(a, n), Object.assign(a, {
				...r(a),
				lazy: void 0
			});
		})();
		return kn.set(a, n), n.catch(() => {}), {
			lazyRoutePromise: n,
			lazyHandlerPromise: n
		};
	}
	let o = Object.keys(e.lazy), s = [], c;
	for (let a of o) {
		if (i && i.includes(a)) continue;
		let o = On({
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
async function jn(e) {
	let t = e.matches.filter((e) => e.shouldLoad), n = {};
	return (await Promise.all(t.map((e) => e.resolve()))).forEach((e, r) => {
		n[t[r].route.id] = e;
	}), n;
}
async function Mn(e) {
	return e.matches.some((e) => e.route.middleware) ? Nn(e, () => jn(e)) : jn(e);
}
function Nn(e, t) {
	return Pn(e, t, (e) => {
		if (gr(e)) throw e;
		return e;
	}, cr, n);
	function n(t, n, r) {
		if (r) return Promise.resolve(Object.assign(r.value, { [n]: {
			type: "error",
			result: t
		} }));
		{
			let { matches: r } = e, i = tr(r, r[Math.min(Math.max(r.findIndex((e) => e.route.id === n), 0), Math.max(r.findIndex((e) => e.shouldCallHandler()), 0))].route.id).route.id;
			return Promise.resolve({ [i]: {
				type: "error",
				result: t
			} });
		}
	}
}
async function Pn(e, t, n, r, i) {
	let { matches: a, ...o } = e;
	return await Fn(o, a.flatMap((e) => e.route.middleware ? e.route.middleware.map((t) => [e.route.id, t]) : []), t, n, r, i);
}
async function Fn(e, t, n, r, i, a, o = 0) {
	let { request: s } = e;
	if (s.signal.aborted) throw s.signal.reason ?? /* @__PURE__ */ Error(`Request aborted: ${s.method} ${s.url}`);
	let c = t[o];
	if (!c) return await n();
	let [l, u] = c, d, f = async () => {
		if (d) throw Error("You may only call `next()` once per middleware");
		try {
			return d = { value: await Fn(e, t, n, r, i, a, o + 1) }, d.value;
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
function In(e, t, n, r, i) {
	let a = On({
		key: "middleware",
		route: r.route,
		manifest: t,
		mapRouteProperties: e
	}), o = An(r.route, J(n.method) ? "action" : "loader", t, e, i);
	return {
		middleware: a,
		route: o.lazyRoutePromise,
		handler: o.lazyHandlerPromise
	};
}
function Ln(e, t, n, r, i, a, o, s, c, l = null, u) {
	let d = !1, f = In(e, t, n, a, o);
	return {
		...a,
		_lazyPromises: f,
		shouldLoad: c,
		shouldRevalidateArgs: l,
		shouldCallHandler(e) {
			return d = !0, l ? typeof u == "boolean" ? wn(a, {
				...l,
				defaultShouldRevalidate: u
			}) : typeof e == "boolean" ? wn(a, {
				...l,
				defaultShouldRevalidate: e
			}) : wn(a, l) : c;
		},
		resolve(e) {
			let { lazy: t, loader: o, middleware: l } = a.route, u = d || c || e && !J(n.method) && (t || o), p = l && l.length > 0 && !o && !t;
			return u && (J(n.method) || !p) ? Bn({
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
function Rn(e, t, n, r, i, a, o, s, c = null) {
	return i.map((l) => l.route.id === a.route.id ? Ln(e, t, n, r, Mt(i), l, o, s, !0, c) : {
		...l,
		shouldLoad: !1,
		shouldRevalidateArgs: c,
		shouldCallHandler: () => !1,
		_lazyPromises: In(e, t, n, l, o),
		resolve: () => Promise.resolve({
			type: "data",
			result: void 0
		})
	});
}
async function zn(e, t, n, r, i, a, o) {
	r.some((e) => e._lazyPromises?.middleware) && await Promise.all(r.map((e) => e._lazyPromises?.middleware));
	let s = {
		request: t,
		url: Jn(t, n),
		pattern: Mt(r),
		params: r[0].params,
		context: a,
		matches: r
	}, c = o ? () => {
		throw Error("You cannot call `runClientMiddleware()` from a static handler `dataStrategy`. Middleware is run outside of `dataStrategy` during SSR in order to bubble up the Response.  You can enable middleware via the `respond` API in `query`/`queryRoute`");
	} : (e) => {
		let t = s;
		return Nn(t, () => e({
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
async function Bn({ request: e, path: t, pattern: n, match: r, lazyHandlerPromise: i, lazyRoutePromise: a, handlerOverride: o, scopedContext: s }) {
	let c, l, u = J(e.method), d = u ? "action" : "loader", f = (i) => {
		let a, c = new Promise((e, t) => a = t);
		l = () => a(), e.signal.addEventListener("abort", l);
		let u = (a) => typeof i == "function" ? i({
			request: e,
			url: Jn(e, t),
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
					throw rr(405, {
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
			throw rr(404, { pathname: t.pathname + t.search });
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
async function Vn(e) {
	let t = e.headers.get("Content-Type");
	return t && /\bapplication\/json\b/.test(t) ? e.body == null ? null : e.json() : e.text();
}
async function Hn(e) {
	let { result: t, type: n } = e;
	if (mr(t)) {
		let e;
		try {
			e = await Vn(t);
		} catch (e) {
			return {
				type: "error",
				error: e
			};
		}
		return n === "error" ? {
			type: "error",
			error: new At(t.status, t.statusText, e),
			statusCode: t.status,
			headers: t.headers
		} : {
			type: "data",
			data: e,
			statusCode: t.status,
			headers: t.headers
		};
	}
	return n === "error" ? pr(t) ? t.data instanceof Error ? {
		type: "error",
		error: t.data,
		statusCode: t.init?.status,
		headers: t.init?.headers ? new Headers(t.init.headers) : void 0
	} : {
		type: "error",
		error: sr(t),
		statusCode: jt(t) ? t.status : void 0,
		headers: t.init?.headers ? new Headers(t.init.headers) : void 0
	} : {
		type: "error",
		error: t,
		statusCode: jt(t) ? t.status : void 0
	} : pr(t) ? {
		type: "data",
		data: t.data,
		statusCode: t.init?.status,
		headers: t.init?.headers ? new Headers(t.init.headers) : void 0
	} : {
		type: "data",
		data: t
	};
}
function Un(e, t, n, r, i) {
	let a = e.headers.get("Location");
	if (W(a, "Redirects returned/thrown from loaders/actions must have a Location header"), !_t(a)) {
		let o = r.slice(0, r.findIndex((e) => e.route.id === n) + 1);
		a = _n(new URL(t.url), o, i, a), e.headers.set("Location", a);
	}
	return e;
}
var Wn = [
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
function Gn(e) {
	try {
		return Wn.includes(new URL(e).protocol);
	} catch {
		return !1;
	}
}
function Kn(e, t, n, r) {
	if (_t(e)) {
		let r = e, i = Me.test(r) ? new URL(Ne(r, t.protocol)) : new URL(r);
		if (Gn(i.toString())) throw Error("Invalid redirect location");
		let a = q(i.pathname, n) != null;
		if (i.origin === t.origin && a) return wt(i.pathname) + i.search + i.hash;
	}
	try {
		if (Gn(r.createURL(e).toString())) throw Error("Invalid redirect location");
	} catch {}
	return e;
}
function qn(e, t, n, r) {
	let i = e.createURL(ar(t)).toString(), a = { signal: n };
	if (r && J(r.formMethod)) {
		let { formMethod: e, formEncType: t } = r;
		a.method = e.toUpperCase(), t === "application/json" ? (a.headers = new Headers({ "Content-Type": t }), a.body = JSON.stringify(r.json)) : a.body = t === "text/plain" ? r.text : t === "application/x-www-form-urlencoded" && r.formData ? Yn(r.formData) : r.formData;
	}
	return new Request(i, a);
}
function Jn(e, t) {
	let n = new URL(e.url), r = typeof t == "string" ? Re(t) : t;
	if (n.pathname = r.pathname || "/", r.search) {
		let e = new URLSearchParams(r.search), t = e.getAll("index");
		e.delete("index");
		for (let n of t.filter(Boolean)) e.append("index", n);
		n.search = e.size ? `?${e.toString()}` : "";
	} else n.search = "";
	return n.hash = r.hash || "", n;
}
function Yn(e) {
	let t = new URLSearchParams();
	for (let [n, r] of e.entries()) t.append(n, typeof r == "string" ? r : r.name);
	return t;
}
function Xn(e) {
	let t = new FormData();
	for (let [n, r] of e.entries()) t.append(n, r);
	return t;
}
function Zn(e, t, n, r = !1, i = !1) {
	let a = {}, o = null, s, c = !1, l = {}, u = n && dr(n[1]) ? n[1].error : void 0;
	return e.forEach((n) => {
		if (!(n.route.id in t)) return;
		let d = n.route.id, f = t[d];
		if (W(!fr(f), "Cannot handle redirect results in processLoaderData"), dr(f)) {
			let t = f.error;
			if (u !== void 0 && (t = u, u = void 0), o ||= {}, i) o[d] = t;
			else {
				let n = tr(e, d);
				o[n.route.id] ?? (o[n.route.id] = t);
			}
			r || (a[d] = ln), c || (c = !0, s = jt(f.error) ? f.error.status : 500), f.headers && (l[d] = f.headers);
		} else a[d] = f.data, f.statusCode && f.statusCode !== 200 && !c && (s = f.statusCode), f.headers && (l[d] = f.headers);
	}), u !== void 0 && n && (o = { [n[0]]: u }, n[2] && (a[n[2]] = void 0)), {
		loaderData: a,
		errors: o,
		statusCode: s || 200,
		loaderHeaders: l
	};
}
function Qn(e, t, n, r, i, a, o) {
	let { loaderData: s, errors: c } = Zn(t, n, r);
	return i.filter((e) => !e.matches || e.matches.some((e) => e.shouldLoad)).forEach((t) => {
		let { key: n, match: r, controller: i } = t;
		if (i && i.signal.aborted) return;
		let s = a[n];
		if (W(s, "Did not find corresponding fetcher result"), dr(s)) {
			let t = tr(e.matches, r?.route.id);
			c && c[t.route.id] || (c = {
				...c,
				[t.route.id]: s.error
			}), o.delete(n);
		} else if (fr(s)) W(!1, "Unhandled fetcher revalidation redirect");
		else {
			let e = Tr(s.data);
			o.set(n, e);
		}
	}), {
		loaderData: s,
		errors: c
	};
}
function $n(e, t, n, r) {
	let i = Object.entries(t).filter(([, e]) => e !== ln).reduce((e, [t, n]) => (e[t] = n, e), {});
	for (let a of n) {
		let n = a.route.id;
		if (!t.hasOwnProperty(n) && e.hasOwnProperty(n) && a.route.loader && (i[n] = e[n]), r && r.hasOwnProperty(n)) break;
	}
	return i;
}
function er(e) {
	return e ? dr(e[1]) ? { actionData: {} } : { actionData: { [e[0]]: e[1].data } } : {};
}
function tr(e, t) {
	return (t ? e.slice(0, e.findIndex((e) => e.route.id === t) + 1) : [...e]).reverse().find((e) => e.route.hasErrorBoundary === !0) || e[0];
}
function nr(e) {
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
function rr(e, { pathname: t, routeId: n, method: r, type: i, message: a } = {}) {
	let o = "Unknown Server Error", s = "Unknown @remix-run/router error";
	return e === 400 ? (o = "Bad Request", r && t && n ? s = `You made a ${r} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.` : i === "invalid-body" && (s = "Unable to encode submission body")) : e === 403 ? (o = "Forbidden", s = `Route "${n}" does not match URL "${t}"`) : e === 404 ? (o = "Not Found", s = `No route matches URL "${t}"`) : e === 405 && (o = "Method Not Allowed", r && t && n ? s = `You made a ${r.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.` : r && (s = `Invalid request method "${r.toUpperCase()}"`)), new At(e || 500, o, Error(s), !0);
}
function ir(e) {
	let t = Object.entries(e);
	for (let e = t.length - 1; e >= 0; e--) {
		let [n, r] = t[e];
		if (fr(r)) return {
			key: n,
			result: r
		};
	}
}
function ar(e) {
	return K({
		...typeof e == "string" ? Re(e) : e,
		hash: ""
	});
}
function or(e, t) {
	return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash || t.hash !== "";
}
function sr(e) {
	return new At(e.init?.status ?? 500, e.init?.statusText ?? "Internal Server Error", e.data);
}
function cr(e) {
	return typeof e == "object" && !!e && Object.entries(e).every(([e, t]) => typeof e == "string" && lr(t));
}
function lr(e) {
	return typeof e == "object" && !!e && "type" in e && "result" in e && (e.type === "data" || e.type === "error");
}
function ur(e) {
	return mr(e.result) && tn.has(e.result.status);
}
function dr(e) {
	return e.type === "error";
}
function fr(e) {
	return (e && e.type) === "redirect";
}
function pr(e) {
	return typeof e == "object" && !!e && "type" in e && "data" in e && "init" in e && e.type === "DataWithResponseInit";
}
function mr(e) {
	return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && e.body !== void 0;
}
function hr(e) {
	return tn.has(e);
}
function gr(e) {
	return mr(e) && hr(e.status) && e.headers.has("Location");
}
function _r(e) {
	return en.has(e.toUpperCase());
}
function J(e) {
	return Qt.has(e.toUpperCase());
}
function vr(e) {
	return new URLSearchParams(e).getAll("index").some((e) => e === "");
}
function yr(e, t) {
	let n = typeof t == "string" ? Re(t).search : t.search;
	if (e[e.length - 1].route.index && vr(n || "")) return e[e.length - 1];
	let r = xt(e);
	return r[r.length - 1];
}
function br(e) {
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
function xr(e, t, n, r) {
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
function Sr(e, t, n, r) {
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
function Cr(e, t) {
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
function wr(e, t) {
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
function Tr(e) {
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
function Er(e, t) {
	try {
		let n = e.sessionStorage.getItem(cn);
		if (n) {
			let e = JSON.parse(n);
			for (let [n, r] of Object.entries(e || {})) r && Array.isArray(r) && t.set(n, new Set(r || []));
		}
	} catch {}
}
function Dr(e, t) {
	if (t.size > 0) {
		let n = {};
		for (let [e, r] of t) n[e] = [...r];
		try {
			e.sessionStorage.setItem(cn, JSON.stringify(n));
		} catch (e) {
			G(!1, `Failed to save applied view transitions in sessionStorage (${e}).`);
		}
	}
}
function Or() {
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
var kr = H.createContext(null);
kr.displayName = "DataRouter";
var Ar = H.createContext(null);
Ar.displayName = "DataRouterState";
var jr = H.createContext(!1);
function Mr() {
	return H.useContext(jr);
}
var Nr = H.createContext({ isTransitioning: !1 });
Nr.displayName = "ViewTransition";
var Pr = H.createContext(/* @__PURE__ */ new Map());
Pr.displayName = "Fetchers";
var Fr = H.createContext(null);
Fr.displayName = "Await";
var Y = H.createContext(null);
Y.displayName = "Navigation";
var Ir = H.createContext(null);
Ir.displayName = "Location";
var Lr = H.createContext({
	outlet: null,
	matches: [],
	isDataRoute: !1
});
Lr.displayName = "Route";
var Rr = H.createContext(null);
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
		if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string") return new At(t.status, t.statusText, t.data);
	} catch {}
}
function Wr(e, { relative: t } = {}) {
	W(Gr(), "useHref() may be used only in the context of a <Router> component.");
	let { basename: n, navigator: r } = H.useContext(Y), { hash: i, pathname: a, search: o } = Xr(e, { relative: t }), s = a;
	return n !== "/" && (s = a === "/" ? n : Tt([n, a])), r.createHref({
		pathname: s,
		search: o,
		hash: i
	});
}
function Gr() {
	return H.useContext(Ir) != null;
}
function X() {
	return W(Gr(), "useLocation() may be used only in the context of a <Router> component."), H.useContext(Ir).location;
}
var Kr = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function qr(e) {
	H.useContext(Y).static || H.useLayoutEffect(e);
}
function Jr() {
	let { isDataRoute: e } = H.useContext(Lr);
	return e ? hi() : Yr();
}
function Yr() {
	W(Gr(), "useNavigate() may be used only in the context of a <Router> component.");
	let e = H.useContext(kr), { basename: t, navigator: n } = H.useContext(Y), { matches: r } = H.useContext(Lr), { pathname: i } = X(), a = JSON.stringify(St(r)), o = H.useRef(!1);
	return qr(() => {
		o.current = !0;
	}), H.useCallback((r, s = {}) => {
		if (G(o.current, Kr), !o.current) return;
		if (typeof r == "number") {
			n.go(r);
			return;
		}
		let c = Ct(r, JSON.parse(a), i, s.relative === "path");
		e == null && t !== "/" && (c.pathname = c.pathname === "/" ? t : Tt([t, c.pathname])), Xt(typeof r == "string" ? r : K(r), n.createHref(c), qt(n), "reject"), (s.replace ? n.replace : n.push)(c, s.state, s);
	}, [
		t,
		n,
		a,
		i,
		e
	]);
}
H.createContext(null);
function Xr(e, { relative: t } = {}) {
	let { matches: n } = H.useContext(Lr), { pathname: r } = X(), i = JSON.stringify(St(n));
	return H.useMemo(() => Ct(e, JSON.parse(i), r, t === "path"), [
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
	W(Gr(), "useRoutes() may be used only in the context of a <Router> component.");
	let { navigator: r } = H.useContext(Y), { matches: i } = H.useContext(Lr), a = i[i.length - 1], o = a ? a.params : {}, s = a ? a.pathname : "/", c = a ? a.pathnameBase : "/", l = a && a.route;
	{
		let e = l && l.path || "";
		_i(s, !l || e.endsWith("*") || e.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e === "/" ? "*" : `${e}/*`}">.`);
	}
	let u = X(), d;
	if (t) {
		let e = typeof t == "string" ? Re(t) : t;
		W(c === "/" || e.pathname?.startsWith(c), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`), d = e;
	} else d = u;
	let f = d.pathname || "/", p = f;
	if (c !== "/") {
		let e = c.replace(/^\//, "").split("/");
		p = "/" + f.replace(/^\//, "").split("/").slice(e.length).join("/");
	}
	let m = n && n.state.matches.length ? n.state.matches.map((e) => Object.assign(e, { route: n.manifest[e.route.id] || e.route })) : Ye(e, { pathname: p });
	G(l || m != null, `No routes matched location "${d.pathname}${d.search}${d.hash}" `), G(m == null || m[m.length - 1].route.element !== void 0 || m[m.length - 1].route.Component !== void 0 || m[m.length - 1].route.lazy !== void 0, `Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
	let h = ai(m && m.map((e) => Object.assign({}, e, {
		params: Object.assign({}, o, e.params),
		pathname: Tt([c, r.encodeLocation ? r.encodeLocation(e.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : e.pathname]),
		pathnameBase: e.pathnameBase === "/" ? c : Tt([c, r.encodeLocation ? r.encodeLocation(e.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : e.pathnameBase])
	})), i, n);
	return t && h ? /* @__PURE__ */ H.createElement(Ir.Provider, { value: {
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
	let e = fi(), t = jt(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, r = "rgba(200,200,200, 0.5)", i = {
		padding: "0.5rem",
		backgroundColor: r
	}, a = {
		padding: "2px 4px",
		backgroundColor: r
	}, o = null;
	return console.error("Error handled by React Router default ErrorBoundary:", e), o = /* @__PURE__ */ H.createElement(H.Fragment, null, /* @__PURE__ */ H.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ H.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ H.createElement("code", { style: a }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ H.createElement("code", { style: a }, "errorElement"), " prop on your route.")), /* @__PURE__ */ H.createElement(H.Fragment, null, /* @__PURE__ */ H.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ H.createElement("h3", { style: { fontStyle: "italic" } }, t), n ? /* @__PURE__ */ H.createElement("pre", { style: i }, n) : null, o);
}
var ei = /* @__PURE__ */ H.createElement($r, null), ti = class extends H.Component {
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
		let t = e === void 0 ? this.props.children : /* @__PURE__ */ H.createElement(Lr.Provider, { value: this.props.routeContext }, /* @__PURE__ */ H.createElement(Rr.Provider, {
			value: e,
			children: this.props.component
		}));
		return this.context ? /* @__PURE__ */ H.createElement(ri, { error: e }, t) : t;
	}
};
ti.contextType = jr;
var ni = /* @__PURE__ */ new WeakMap();
function ri({ children: e, error: t }) {
	let { basename: n, navigator: r } = H.useContext(Y);
	if (typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
		let e = Hr(t.digest);
		if (e) {
			let i = ni.get(t);
			if (i) throw i;
			let a = Pt(e.location, n), o = a.absoluteURL || a.to;
			if (Xt(e.location, o, qt(r), "allow-explicit"), Gn(o)) throw Error("Invalid redirect location");
			if (Nt && !ni.get(t)) {
				if (a.isExternal || e.reloadDocument) window.location.href = o;
				else {
					let n = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(a.to, { replace: e.replace }));
					throw ni.set(t, n), n;
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
function ii({ routeContext: e, match: t, children: n }) {
	let r = H.useContext(kr);
	return r && r.static && r.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = t.route.id), /* @__PURE__ */ H.createElement(Lr.Provider, { value: e }, n);
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
		W(e >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`), i = i.slice(0, Math.min(i.length, e + 1));
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
			pattern: Mt(r.matches),
			errorInfo: t
		});
	} : void 0;
	return i.reduceRight((e, n, c) => {
		let u, d = !1, f = null, p = null;
		r && (u = a && n.route.id ? a[n.route.id] : void 0, f = n.route.errorElement || ei, o && (s < 0 && c === 0 ? (_i("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), d = !0, p = null) : s === c && (d = !0, p = n.route.hydrateFallbackElement || null)));
		let m = t.concat(i.slice(0, c + 1)), h = () => {
			let t;
			return t = u ? f : d ? p : n.route.Component ? /* @__PURE__ */ H.createElement(n.route.Component, null) : n.route.element ? n.route.element : e, /* @__PURE__ */ H.createElement(ii, {
				match: n,
				routeContext: {
					outlet: e,
					matches: m,
					isDataRoute: r != null
				},
				children: t
			});
		};
		return r && (n.route.ErrorBoundary || n.route.errorElement || c === 0) ? /* @__PURE__ */ H.createElement(ti, {
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
	let t = H.useContext(kr);
	return W(t, oi(e)), t;
}
function ci(e) {
	let t = H.useContext(Ar);
	return W(t, oi(e)), t;
}
function li(e) {
	let t = H.useContext(Lr);
	return W(t, oi(e)), t;
}
function ui(e) {
	let t = li(e), n = t.matches[t.matches.length - 1];
	return W(n.route.id, `${e} can only be used on routes that contain a unique "id"`), n.route.id;
}
function di() {
	return ui("useRouteId");
}
function fi() {
	let e = H.useContext(Rr), t = ci("useRouteError"), n = ui("useRouteError");
	return e === void 0 ? t.errors?.[n] : e;
}
var pi = 0;
function mi(e) {
	let { router: t, basename: n } = si("useBlocker"), r = ci("useBlocker"), [i, a] = H.useState(""), o = H.useCallback((t) => {
		if (typeof e != "function") return !!e;
		if (n === "/") return e(t);
		let { currentLocation: r, nextLocation: i, historyAction: a } = t;
		return e({
			currentLocation: {
				...r,
				pathname: q(r.pathname, n) || r.pathname
			},
			nextLocation: {
				...i,
				pathname: q(i.pathname, n) || i.pathname
			},
			historyAction: a
		});
	}, [n, e]);
	return H.useEffect(() => {
		let e = String(++pi);
		return a(e), () => t.deleteBlocker(e);
	}, [t]), H.useEffect(() => {
		i !== "" && t.getBlocker(i, o);
	}, [
		t,
		i,
		o
	]), i && r.blockers.has(i) ? r.blockers.get(i) : on;
}
function hi() {
	let { router: e } = si("useNavigate"), t = ui("useNavigate"), n = H.useRef(!1);
	return qr(() => {
		n.current = !0;
	}), H.useCallback(async (r, i = {}) => {
		G(n.current, Kr), n.current && (typeof r == "number" ? await e.navigate(r) : await e.navigate(r, {
			fromRouteId: t,
			...i
		}));
	}, [e, t]);
}
var gi = {};
function _i(e, t, n) {
	!t && !gi[e] && (gi[e] = !0, G(!1, n));
}
var vi = {};
function yi(e, t) {
	!e && !vi[t] && (vi[t] = !0, console.warn(t));
}
var bi = H.useOptimistic, xi = () => void 0;
function Si(e) {
	return bi ? bi(e) : [e, xi];
}
function Ci(e) {
	let t = { hasErrorBoundary: e.hasErrorBoundary || e.ErrorBoundary != null || e.errorElement != null };
	return e.Component && (e.element && G(!1, "You should not include both `Component` and `element` on your route - `Component` will be used."), Object.assign(t, {
		element: H.createElement(e.Component),
		Component: void 0
	})), e.HydrateFallback && (e.hydrateFallbackElement && G(!1, "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."), Object.assign(t, {
		hydrateFallbackElement: H.createElement(e.HydrateFallback),
		HydrateFallback: void 0
	})), e.ErrorBoundary && (e.errorElement && G(!1, "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."), Object.assign(t, {
		errorElement: H.createElement(e.ErrorBoundary),
		ErrorBoundary: void 0
	})), t;
}
var wi = ["HydrateFallback", "hydrateFallbackElement"];
function Ti(e, t) {
	return hn({
		basename: t?.basename,
		getContext: t?.getContext,
		future: t?.future,
		history: Fe({
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
	r = Mr() || r;
	let [i, a] = H.useState(e.state), [o, s] = Si(i), [c, l] = H.useState(), [u, d] = H.useState({ isTransitioning: !1 }), [f, p] = H.useState(), [m, h] = H.useState(), [g, _] = H.useState(), v = H.useRef(/* @__PURE__ */ new Map()), y = H.useCallback((i, { deletedFetchers: o, newErrors: c, flushSync: u, viewTransitionOpts: g }) => {
		c && n && Object.values(c).forEach((e) => n(e, {
			location: i.location,
			params: i.matches[0]?.params ?? {},
			pattern: Mt(i.matches)
		})), i.fetchers.forEach((e, t) => {
			e.data !== void 0 && v.current.set(t, e.data);
		}), o.forEach((e) => v.current.delete(e)), yi(u === !1 || t != null, "You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from \"react-router/dom\"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.");
		let y = e.window != null && e.window.document != null && typeof e.window.document.startViewTransition == "function";
		if (yi(g == null || y, "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."), !g || !y) {
			t && u ? t(() => a(i)) : r === !1 ? a(i) : H.startTransition(() => {
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
	H.useLayoutEffect(() => e.subscribe(y), [e, y]), H.useEffect(() => {
		u.isTransitioning && !u.flushSync && p(new Ei());
	}, [u]), H.useEffect(() => {
		if (f && c && e.window) {
			let t = c, n = f.promise, i = e.window.document.startViewTransition(async () => {
				r === !1 ? a(t) : H.startTransition(() => {
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
	return /* @__PURE__ */ H.createElement(H.Fragment, null, /* @__PURE__ */ H.createElement(kr.Provider, { value: S }, /* @__PURE__ */ H.createElement(Ar.Provider, { value: o }, /* @__PURE__ */ H.createElement(Pr.Provider, { value: v.current }, /* @__PURE__ */ H.createElement(Nr.Provider, { value: u }, /* @__PURE__ */ H.createElement(Ni, {
		basename: x,
		location: o.location,
		navigationType: o.historyAction,
		navigator: b,
		useTransitions: r
	}, /* @__PURE__ */ H.createElement(ki, {
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
var ki = H.memo(Ai);
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
	W(Gr(), "<Navigate> may be used only in the context of a <Router> component.");
	let { static: i, navigator: a } = H.useContext(Y);
	G(!i, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
	let { matches: o } = H.useContext(Lr), { pathname: s } = X(), c = Jr(), l = Ct(e, St(o), s, r === "path");
	Xt(typeof e == "string" ? e : K(e), a.createHref(l), qt(a), "reject");
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
function Mi(e) {
	W(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
}
function Ni({ basename: e = "/", children: t = null, location: n, navigationType: r = "POP", navigator: i, static: a = !1, useTransitions: o }) {
	W(!Gr(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
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
	typeof n == "string" && (n = Re(n));
	let { pathname: l = "/", search: u = "", hash: d = "", state: f = null, key: p = "default", mask: m } = n, h = H.useMemo(() => {
		let e = q(l, s);
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
	return G(h != null, `<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`), h == null ? null : /* @__PURE__ */ H.createElement(Y.Provider, { value: c }, /* @__PURE__ */ H.createElement(Ir.Provider, {
		children: t,
		value: h
	}));
}
function Pi({ children: e, location: t }) {
	return Zr(Fi(e), t);
}
H.Component;
function Fi(e, t = []) {
	let n = [];
	return H.Children.forEach(e, (e, r) => {
		if (!H.isValidElement(e)) return;
		let i = [...t, r];
		if (e.type === H.Fragment) {
			n.push.apply(n, Fi(e.props.children, i));
			return;
		}
		W(e.type === Mi, `[${typeof e.type == "string" ? e.type : e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), W(!e.props.index || !e.props.children, "An index route cannot have child routes.");
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
function Wi(e = "") {
	return new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((t, n) => {
		let r = e[n];
		return t.concat(Array.isArray(r) ? r.map((e) => [n, e]) : [[n, r]]);
	}, []));
}
function Gi(e, t) {
	let n = Wi(e);
	return t && t.forEach((e, r) => {
		n.has(r) || t.getAll(r).forEach((e) => {
			n.append(r, e);
		});
	}), n;
}
var Ki = null;
function qi() {
	if (Ki === null) try {
		new FormData(document.createElement("form"), 0), Ki = !1;
	} catch {
		Ki = !0;
	}
	return Ki;
}
var Ji = /* @__PURE__ */ new Set([
	"application/x-www-form-urlencoded",
	"multipart/form-data",
	"text/plain"
]);
function Yi(e) {
	return e != null && !Ji.has(e) ? (G(!1, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Li}"`), null) : e;
}
function Xi(e, t) {
	let n, r, i, a, o;
	if (Bi(e)) {
		let o = e.getAttribute("action");
		r = o ? q(o, t) : null, n = e.getAttribute("method") || Ii, i = Yi(e.getAttribute("enctype")) || Li, a = new FormData(e);
	} else if (zi(e) || Vi(e) && (e.type === "submit" || e.type === "image")) {
		let o = e.form;
		if (o == null) throw Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
		let s = e.getAttribute("formaction") || o.getAttribute("action");
		if (r = s ? q(s, t) : null, n = e.getAttribute("formmethod") || o.getAttribute("method") || Ii, i = Yi(e.getAttribute("formenctype")) || Yi(o.getAttribute("enctype")) || Li, a = new FormData(o, e), !qi()) {
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
function Zi(e, t) {
	if (e === !1 || e == null) throw Error(t);
}
function Qi(e, t, n, r) {
	let i = typeof e == "string" ? new URL(e, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e;
	return i.pathname = n ? i.pathname.endsWith("/") ? `${i.pathname}_.${r}` : `${i.pathname}.${r}` : i.pathname === "/" ? `_root.${r}` : t && q(i.pathname, t) === "/" ? `${Et(t)}/_root.${r}` : `${Et(i.pathname)}.${r}`, i;
}
async function $i(e, t) {
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
function ea(e) {
	return e != null && typeof e.page == "string";
}
function ta(e) {
	return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function na(e, t, n) {
	return sa((await Promise.all(e.map(async (e) => {
		let r = t.routes[e.route.id];
		if (r) {
			let e = await $i(r, n);
			return e.links ? e.links() : [];
		}
		return [];
	}))).flat(1).filter(ta).filter((e) => e.rel === "stylesheet" || e.rel === "preload").map((e) => e.rel === "stylesheet" ? {
		...e,
		rel: "prefetch",
		as: "style"
	} : {
		...e,
		rel: "prefetch"
	}));
}
function ra(e, t, n, r, i, a) {
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
function ia(e, t, { includeHydrateFallback: n } = {}) {
	return aa(e.map((e) => {
		let r = t.routes[e.route.id];
		if (!r) return [];
		let i = [r.module];
		return r.clientActionModule && (i = i.concat(r.clientActionModule)), r.clientLoaderModule && (i = i.concat(r.clientLoaderModule)), n && r.hydrateFallbackModule && (i = i.concat(r.hydrateFallbackModule)), r.imports && (i = i.concat(r.imports)), i;
	}).flat(1));
}
function aa(e) {
	return [...new Set(e)];
}
function oa(e) {
	let t = {}, n = Object.keys(e).sort();
	for (let r of n) t[r] = e[r];
	return t;
}
function sa(e, t) {
	let n = /* @__PURE__ */ new Set(), r = new Set(t);
	return e.reduce((e, i) => {
		if (t && !ea(i) && i.as === "script" && i.href && r.has(i.href)) return e;
		let a = JSON.stringify(oa(i));
		return n.has(a) || (n.add(a), e.push({
			key: a,
			link: i
		})), e;
	}, []);
}
function ca() {
	let e = H.useContext(kr);
	return Zi(e, "You must render this element inside a <DataRouterContext.Provider> element"), e;
}
function la() {
	let e = H.useContext(Ar);
	return Zi(e, "You must render this element inside a <DataRouterStateContext.Provider> element"), e;
}
var ua = H.createContext(void 0);
ua.displayName = "FrameworkContext";
function da() {
	let e = H.useContext(ua);
	return Zi(e, "You must render this element inside a <HydratedRouter> element"), e;
}
function fa(e, t) {
	let n = H.useContext(ua), [r, i] = H.useState(!1), [a, o] = H.useState(!1), { onFocus: s, onBlur: c, onMouseEnter: l, onMouseLeave: u, onTouchStart: d } = t, f = H.useRef(null);
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
			onFocus: pa(s, p),
			onBlur: pa(c, m),
			onMouseEnter: pa(l, p),
			onMouseLeave: pa(u, m),
			onTouchStart: pa(d, p)
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
function pa(e, t) {
	return (n) => {
		e && e(n), n.defaultPrevented || t(n);
	};
}
function ma({ page: e, ...t }) {
	let n = Mr(), { nonce: r } = da(), { router: i } = ca(), a = H.useMemo(() => Ye(i.routes, e, i.basename), [
		i.routes,
		e,
		i.basename
	]);
	return a ? (t.nonce == null && r && (t = {
		...t,
		nonce: r
	}), n ? /* @__PURE__ */ H.createElement(ga, {
		page: e,
		matches: a,
		...t
	}) : /* @__PURE__ */ H.createElement(_a, {
		page: e,
		matches: a,
		...t
	})) : null;
}
function ha(e) {
	let { manifest: t, routeModules: n } = da(), [r, i] = H.useState([]);
	return H.useEffect(() => {
		let r = !1;
		return na(e, t, n).then((e) => {
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
function ga({ page: e, matches: t, ...n }) {
	let r = X(), { future: i } = da(), { basename: a } = ca(), o = H.useMemo(() => {
		if (e === r.pathname + r.search + r.hash) return [];
		let n = Qi(e, a, i.v8_trailingSlashAwareDataRequests, "rsc"), o = !1, s = [];
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
function _a({ page: e, matches: t, ...n }) {
	let r = X(), { future: i, manifest: a, routeModules: o } = da(), { basename: s } = ca(), { loaderData: c, matches: l } = la(), u = H.useMemo(() => ra(e, t, l, a, r, "data"), [
		e,
		t,
		l,
		a,
		r
	]), d = H.useMemo(() => ra(e, t, l, a, r, "assets"), [
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
		let d = Qi(e, s, i.v8_trailingSlashAwareDataRequests, "data");
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
	]), p = H.useMemo(() => ia(d, a), [d, a]), m = ha(d);
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
function va(...e) {
	return (t) => {
		e.forEach((e) => {
			typeof e == "function" ? e(t) : e != null && (e.current = t);
		});
	};
}
H.Component;
var ya = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
try {
	ya && (window.__reactRouterVersion = "7.18.3");
} catch {}
var Z = H.forwardRef(function({ onClick: e, discover: t = "render", prefetch: n = "none", relative: r, reloadDocument: i, replace: a, mask: o, state: s, target: c, to: l, preventScrollReset: u, viewTransition: d, defaultShouldRevalidate: f, ...p }, m) {
	let { basename: h, navigator: g, useTransitions: _ } = H.useContext(Y), v = typeof l == "string" && je.test(l), y = Pt(l, h);
	l = y.to;
	let b = Wr(l, { relative: r }), x = X(), S = null;
	if (o) {
		let e = Ct(o, [], x.mask ? x.mask.pathname : "/", !0);
		h !== "/" && (e.pathname = e.pathname === "/" ? h : Tt([h, e.pathname])), S = g.createHref(e);
	}
	let [C, w, T] = fa(n, p), E = wa(l, {
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
		ref: va(m, w),
		target: c,
		"data-discover": !v && t === "render" ? "true" : void 0
	});
	return C && !v ? /* @__PURE__ */ H.createElement(H.Fragment, null, k, /* @__PURE__ */ H.createElement(ma, { page: b })) : k;
});
Z.displayName = "Link";
var ba = H.forwardRef(function({ "aria-current": e = "page", caseSensitive: t = !1, className: n = "", end: r = !1, style: i, to: a, viewTransition: o, children: s, ...c }, l) {
	let u = Xr(a, { relative: c.relative }), d = X(), f = H.useContext(Ar), { navigator: p, basename: m } = H.useContext(Y), h = f != null && Aa(u) && o === !0, g = p.encodeLocation ? p.encodeLocation(u).pathname : u.pathname, _ = d.pathname, v = f && f.navigation && f.navigation.location ? f.navigation.location.pathname : null;
	t || (_ = _.toLowerCase(), v = v ? v.toLowerCase() : null, g = g.toLowerCase()), v && m && (v = q(v, m) || v);
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
ba.displayName = "NavLink";
var xa = H.forwardRef(({ discover: e = "render", fetcherKey: t, navigate: n, reloadDocument: r, replace: i, state: a, method: o = Ii, action: s, onSubmit: c, relative: l, preventScrollReset: u, viewTransition: d, defaultShouldRevalidate: f, ...p }, m) => {
	let { useTransitions: h } = H.useContext(Y), g = Oa(), _ = ka(s, { relative: l }), v = o.toLowerCase() === "get" ? "get" : "post", y = typeof s == "string" && je.test(s);
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
xa.displayName = "Form";
function Sa(e) {
	return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Ca(e) {
	let t = H.useContext(kr);
	return W(t, Sa(e)), t;
}
function wa(e, { target: t, replace: n, mask: r, state: i, preventScrollReset: a, relative: o, viewTransition: s, defaultShouldRevalidate: c, useTransitions: l } = {}) {
	let u = Jr(), d = X(), f = Xr(e, { relative: o });
	return H.useCallback((p) => {
		if (Ui(p, t)) {
			p.preventDefault();
			let t = n === void 0 ? K(d) === K(f) : n, m = () => u(e, {
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
function Ta(e) {
	G(typeof URLSearchParams < "u", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");
	let t = H.useRef(Wi(e)), n = H.useRef(!1), r = X(), i = H.useMemo(() => Gi(r.search, n.current ? null : t.current), [r.search]), a = Jr();
	return [i, H.useCallback((e, t) => {
		let r = Wi(typeof e == "function" ? e(new URLSearchParams(i)) : e);
		n.current = !0, a("?" + r, t);
	}, [a, i])];
}
var Ea = 0, Da = () => `__${String(++Ea)}__`;
function Oa() {
	let { router: e } = Ca("useSubmit"), { basename: t } = H.useContext(Y), n = di(), r = e.fetch, i = e.navigate;
	return H.useCallback(async (e, a = {}) => {
		let { action: o, method: s, encType: c, formData: l, body: u } = Xi(e, t);
		if (a.navigate === !1) {
			let e = a.fetcherKey || Da();
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
function ka(e, { relative: t } = {}) {
	let { basename: n } = H.useContext(Y), r = H.useContext(Lr);
	W(r, "useFormAction must be used inside a RouteContext");
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
	return (!e || e === ".") && i.route.index && (a.search = a.search ? a.search.replace(/^\?/, "?index&") : "?index"), n !== "/" && (a.pathname = a.pathname === "/" ? n : Tt([n, a.pathname])), K(a);
}
function Aa(e, { relative: t } = {}) {
	let n = H.useContext(Nr);
	W(n != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
	let { basename: r } = Ca("useViewTransitionState"), i = Xr(e, { relative: t });
	if (!n.isTransitioning) return !1;
	let a = q(n.currentLocation.pathname, r) || n.currentLocation.pathname, o = q(n.nextLocation.pathname, r) || n.nextLocation.pathname;
	return ft(i.pathname, o) != null || ft(i.pathname, a) != null;
}
//#endregion
//#region apps/web/src/ApplicationErrorBoundary.tsx
var Q = o();
function ja() {
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
function Ma() {
	let e = fi();
	return (0, H.useEffect)(() => {
		console.error("Cabane route failed:", e);
	}, [e]), /* @__PURE__ */ (0, Q.jsx)(ja, {});
}
var Na = class extends H.Component {
	state = { hasError: !1 };
	static getDerivedStateFromError() {
		return { hasError: !0 };
	}
	componentDidCatch(e, t) {
		console.error("Cabane application failed:", e, t.componentStack);
	}
	render() {
		return this.state.hasError ? /* @__PURE__ */ (0, Q.jsx)(ja, {}) : this.props.children;
	}
}, Pa = /* @__PURE__ */ e(F(), 1), Fa = class extends Error {
	constructor() {
		super("This workspace changed on Home Assistant."), this.name = "HaWorkspaceConflictError";
	}
}, Ia = class extends Error {
	constructor() {
		super("Cabane workspace storage is not installed on this Home Assistant instance."), this.name = "HaWorkspaceUnavailableError";
	}
}, La = (e) => {
	if (e && typeof e == "object" && "code" in e && typeof e.code == "string") return e.code;
};
function Ra(e) {
	let t = async (t) => {
		try {
			return await e(t);
		} catch (e) {
			let t = La(e);
			throw t === "conflict" ? new Fa() : [
				"unknown_command",
				"unknown_error",
				"not_found"
			].includes(t ?? "") ? new Ia() : e;
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
function za({ title: e, titleIcon: t, busy: n, error: r, onCancel: i, children: a }) {
	let o = y(), s = (0, H.useRef)(null), c = (0, H.useId)();
	return (0, H.useEffect)(() => {
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
var Ba = class extends Error {
	constructor() {
		super("Update the Cabane Home Assistant integration to sync houses with GLB models."), this.name = "HaAssetUpgradeRequiredError";
	}
}, Va = (e) => {
	let t = "";
	for (let n = 0; n < e.length; n += 8192) t += String.fromCharCode(...e.subarray(n, n + 8192));
	return btoa(t);
}, Ha = (e) => Uint8Array.from(atob(e), (e) => e.charCodeAt(0));
function Ua(e) {
	let t = async () => {
		try {
			let t = await e({ type: "cabane/assets/capabilities" });
			if (t.version !== 1 || t.chunk_bytes !== D.chunkBytes) throw new Ba();
		} catch (e) {
			throw e instanceof Ba || e && typeof e == "object" && "code" in e && e.code === "unknown_command" ? new Ba() : e;
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
				for (let r = 0; r < t.byteLength; r += D.chunkBytes) {
					let i = t.bytes.subarray(r, r + D.chunkBytes);
					if ((await e({
						type: "cabane/assets/upload",
						upload_id: n,
						offset: r,
						data: Va(i)
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
				if (n && n.byteLength === t.byteLength && await S(n) === t.sha256) continue;
				let a = new Uint8Array(t.byteLength);
				for (let n = 0; n < t.byteLength;) {
					let r = await e({
						type: "cabane/assets/get",
						sha256: t.sha256,
						offset: n
					}), i = Ha(r.data);
					if (r.byte_length !== t.byteLength || r.offset !== n || !i.length || i.length > D.chunkBytes || n + i.length > a.length) throw Error("The GLB download is incomplete. Retry synchronization.");
					a.set(i, n), n += i.length;
				}
				if (await S(a) !== t.sha256) throw Error("GLB integrity check failed. The previous home is unchanged.");
				i.push({
					...t,
					bytes: a
				});
			}
			await M(i);
		}
	};
}
function Wa(e, t) {
	let n = Ra(e), r = Ua(e);
	return {
		...n,
		get: async (e) => {
			let i = await n.get(e);
			return i?.document && !i.corrupt && await r.download(oe(i.document), (e) => t.read(e)), i;
		},
		put: async (e, i, a) => (await r.upload(await t.verify(oe(i))), n.put(e, i, a))
	};
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
	}, a = (e) => e && typeof e == "object" && "name" in e && ["HaWorkspaceUnavailableError", "HaAssetUpgradeRequiredError"].includes(String(e.name)) ? {
		kind: "unavailable",
		detail: e instanceof Error ? e.message : "Update the Cabane integration."
	} : {
		kind: "disconnected",
		detail: e instanceof Error ? e.message : "Home Assistant is unavailable."
	}, o = (t, o) => n(t, async () => {
		let n = await e.cursors.read(o, t);
		if (!n?.enabled) return { kind: "off" };
		let c = await r(t), l = await e.fingerprint(c), u;
		try {
			u = await e.client.get(t);
		} catch (e) {
			return a(e);
		}
		if (!u?.document) return {
			kind: "conflict",
			detail: "The HA copy was removed."
		};
		if (u.corrupt) return {
			kind: "conflict",
			detail: "The HA copy is damaged. Download its raw data for recovery."
		};
		let d = l !== n.acknowledgedFingerprint, f = u.version !== n.remoteVersion;
		if (d && f) return { kind: "conflict" };
		if (f) try {
			let n = await e.restore(u.document, c.record.revision, t);
			return await i(o, n, u.version, !0), {
				kind: "synced",
				detail: "restored"
			};
		} catch (e) {
			return s({
				kind: "conflict",
				detail: e instanceof Error ? e.message : void 0
			});
		}
		if (!d) return { kind: "synced" };
		try {
			let n = await e.client.put(t, e.serialize(c), u.version);
			await i(o, c, n, !0);
			let a = await r(t);
			return await e.fingerprint(a) === l ? { kind: "synced" } : { kind: "pending" };
		} catch (e) {
			return e && typeof e == "object" && ("name" in e && e.name === "HaWorkspaceConflictError" || "code" in e && e.code === "conflict") ? { kind: "conflict" } : a(e);
		}
	}), c = async (t, n, a = !1) => {
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
	}, l = (e, t) => n(e, () => c(e, t)), u = (e, t) => n(e, () => c(e, t, !0)), d = async (t, n, r = !1) => {
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
		manualSave: l,
		enableSync: u,
		manualRestore: (e, t) => n(e, () => d(e, t)),
		openRemote: (e, t) => n(e, () => d(e, t, !0)),
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
var Ka = (e, t) => `${e}\u0000${t}`, qa = (e, t, n) => ie(e, "readonly", T, (e, r, i) => r(e.objectStore(T).get(Ka(t, n)), (e) => i(e ?? null))), Ja = (e, t) => ie(e, "readwrite", T, (e, n, r) => n(e.objectStore(T).put(t, Ka(t.origin, t.homeId)), () => r())), Ya = (e, t, n) => ie(e, "readwrite", T, (e, r, i) => r(e.objectStore(T).delete(Ka(t, n)), () => i()));
async function Xa(e, t) {
	let n = j(JSON.parse(le(e, t)));
	return re(new TextEncoder().encode(n));
}
//#endregion
//#region apps/web/src/workspaces/workspace-remote-transfer.ts
function Za(e, t, n, r, i) {
	let a;
	try {
		a = JSON.parse(t);
	} catch {
		throw Error("The HA workspace copy is not valid JSON.");
	}
	if (!a || typeof a != "object" || !("format" in a) || a.format !== "cabane-workspace") throw Error("The HA workspace copy is not a private Cabane backup.");
	let o = de(t, B);
	if (r && o.record.homeId !== r) throw Error("The HA workspace copy belongs to a different workspace.");
	if (i && m(o.homeAssistantUrl) !== m(i)) throw Error("This saved workspace belongs to a different Home Assistant. Open it from its original server.");
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
function Qa(e, t) {
	let n = w(), r = (0, H.useMemo)(() => Wa(n.sendStorageMessage, O(window.indexedDB)), [n.sendStorageMessage]);
	return {
		runtime: n,
		client: r,
		coordinator: (0, H.useMemo)(() => Ga({
			repository: e,
			client: r,
			cursors: {
				read: (e, t) => qa(window.indexedDB, e, t),
				write: (e) => Ja(window.indexedDB, e),
				remove: (e, t) => Ya(window.indexedDB, e, t)
			},
			fingerprint: (e) => Xa(e.metadata, e.record),
			serialize: (e) => le(e.metadata, e.record),
			restore: (r, i, a) => Za(e, r, i, a, t ?? n.origin ?? void 0)
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
function $a() {
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
function eo({ name: e, busy: t, error: n, onDelete: r, onCancel: i, onBackup: a, local: o = !0, remote: s = "absent", server: c, onRetry: l }) {
	let u = s !== "absent";
	return /* @__PURE__ */ (0, Q.jsxs)(za, {
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
function to(e) {
	let t = f()?.origin ?? e.target.entry?.metadata.homeAssistantUrl ?? e.target.origin ?? null;
	return /* @__PURE__ */ (0, Q.jsx)(p, {
		homeAssistantUrl: t,
		children: /* @__PURE__ */ (0, Q.jsx)(no, { ...e })
	});
}
function no({ repository: e, target: t, onDeleteLocal: n, onDeleted: r, onCancel: i, onBusyChange: a }) {
	let o = w(), s = f(), { client: c } = Qa(e), l = (0, H.useMemo)(() => Ra(o.sendStorageMessage), [o.sendStorageMessage]), u = t.entry, d = u?.metadata.id ?? t.saved.home_id, p = u?.metadata.name ?? t.saved.name, m = s?.origin ?? o.origin ?? u?.metadata.homeAssistantUrl ?? t.origin ?? null, [h, g] = (0, H.useState)(t.saved ? "present" : m ? "checking" : "absent"), [_, v] = (0, H.useState)(t.saved?.version ?? null), [y, b] = (0, H.useState)(!1), [x, S] = (0, H.useState)(null), [C, T] = (0, H.useState)(0);
	(0, H.useEffect)(() => {
		if (!m || t.saved && C === 0) return;
		if (o.status !== "connected") {
			g("error");
			return;
		}
		let e = !0;
		return g("checking"), l.get(d).then((t) => {
			e && (v(t?.document ? t.version : null), g(t?.document ? "present" : "absent"), S(null));
		}).catch((t) => {
			e && (g("error"), S(t instanceof Error ? t.message : "Could not check the Home Assistant copy."));
		}), () => {
			e = !1;
		};
	}, [
		m,
		d,
		l,
		o.status,
		t.saved,
		C
	]);
	let E = async (e) => {
		b(!0), a(!0), S(null);
		try {
			await e();
		} catch (e) {
			S(e instanceof Error ? e.message : "Could not complete this action. Try again.");
		} finally {
			b(!1), a(!1);
		}
	}, D = async () => {
		if (u) {
			let t = await e.read(d);
			if (t?.record) await Ee(le(t.metadata, t.record), `${d}-backup.cabane`);
			else {
				let t = await e.readRaw(d);
				if (t === null) throw Error("No saved record exists.");
				R(t, `${d}-recovery.json`);
			}
		} else {
			let e = await l.get(d);
			if (!e?.document) throw Error("No Home Assistant copy exists.");
			if (e.corrupt) R(e.document, `${d}-ha-recovery.json`);
			else {
				let e = await c.get(d);
				if (!e?.document) throw Error("No Home Assistant copy exists.");
				await Ee(e.document, `${d}-backup.cabane`);
			}
		}
	}, O = async (t) => {
		if (u) {
			let t = await e.read(d);
			if (!t || t.record?.revision !== u.record?.revision) throw Error("This workspace changed. Cancel and reopen Delete to review it.");
		}
		if (t === "permanent" && m && h !== "absent") {
			if (h !== "present" || _ === null) throw Error("Check the Home Assistant copy before deleting it.");
			try {
				await l.delete(d, _);
			} catch (e) {
				throw g("error"), e;
			}
			g("absent"), v(null);
		}
		let i = /* @__PURE__ */ new Set([m, u?.metadata.homeAssistantUrl]);
		for (let e of i) e && await Ya(window.indexedDB, e, d);
		u && await n(), await r();
	}, k = (0, H.useCallback)(() => {
		S(null), T((e) => e + 1), o.status !== "connected" && (o.status === "disconnected" || o.status === "unconfigured" ? o.connect() : o.retry());
	}, [o]);
	return /* @__PURE__ */ (0, Q.jsx)(eo, {
		name: p,
		local: !!u,
		remote: h,
		server: m,
		busy: y,
		error: x ?? (h === "error" ? o.error ?? "Connect to Home Assistant to check or delete its saved copy. Local removal is still available." : null),
		onCancel: i,
		onRetry: k,
		onBackup: () => void E(D),
		onDelete: (e) => void E(() => O(e))
	});
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceHaLibrary.tsx
function ro({ repository: e, onRestored: t, onBusyChange: n, localWorkspaceIds: r, disabled: i = !1 }) {
	let a = f(), { runtime: o, client: s, coordinator: c } = Qa(e), [l, u] = (0, H.useState)([]), [d, p] = (0, H.useState)(null), [m, h] = (0, H.useState)(null), [g, _] = (0, H.useState)(!1), [v, y] = (0, H.useState)(null), b = v !== null || g;
	(0, H.useEffect)(() => {
		n?.(b);
	}, [b, n]);
	let x = (0, H.useCallback)(async () => {
		try {
			u(await s.list()), p(null);
		} catch (e) {
			p(e instanceof Error ? e.message : "Could not list HA workspaces.");
		}
	}, [s]), S = r?.join("\0");
	(0, H.useEffect)(() => {
		if (o.status !== "connected") return;
		x();
		let e = () => void x();
		return window.addEventListener("focus", e), () => window.removeEventListener("focus", e);
	}, [
		o.status,
		x,
		S
	]);
	let C = async (e) => {
		y(e.home_id), p(null);
		try {
			if ((await c.openRemote(e.home_id, o.origin)).kind === "conflict") throw Error("This browser has different changes. Open the local workspace to review its saved copies.");
			await t(e.home_id);
		} catch (e) {
			p(e instanceof Error ? e.message : "Could not restore this workspace.");
		} finally {
			y(null);
		}
	}, w = async (e) => {
		try {
			let t = await s.get(e.home_id);
			if (!t?.document) throw Error("No HA copy exists.");
			R(t.document, `${e.home_id}-ha-recovery.json`);
		} catch (e) {
			p(e instanceof Error ? e.message : "Could not download HA data.");
		}
	}, T = m && /* @__PURE__ */ (0, Q.jsx)(to, {
		repository: e,
		target: {
			saved: m,
			origin: o.origin
		},
		onCancel: () => h(null),
		onBusyChange: _,
		onDeleted: async () => {
			u((e) => e.filter((e) => e.home_id !== m.home_id)), h(null), p(null);
		}
	});
	if (r) {
		let e = l.filter((e) => !e.corrupt && !r.includes(e.home_id));
		return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
			o.status === "connected" && e.map((e) => /* @__PURE__ */ (0, Q.jsxs)("article", {
				className: "workspace-card workspace-card--suggested",
				children: [
					/* @__PURE__ */ (0, Q.jsx)("button", {
						type: "button",
						className: "workspace-card-target",
						disabled: b || i,
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
							disabled: b || i,
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
						children: [/* @__PURE__ */ (0, Q.jsx)($a, {}), /* @__PURE__ */ (0, Q.jsx)("span", { children: new URL(o.origin).host })]
					}),
					/* @__PURE__ */ (0, Q.jsx)("div", {
						className: "workspace-card-footer",
						children: /* @__PURE__ */ (0, Q.jsxs)("span", {
							className: "workspace-suggestion-action",
							children: [/* @__PURE__ */ (0, Q.jsx)(V, { name: "plus" }), v === e.home_id ? "Adding workspace…" : "Add workspace"]
						})
					})
				]
			}, e.home_id)),
			T,
			(d || o.error) && /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "workspace-suggestion-error",
				children: [/* @__PURE__ */ (0, Q.jsx)("p", {
					role: "alert",
					className: "workspace-error",
					children: d ?? o.error
				}), /* @__PURE__ */ (0, Q.jsx)("button", {
					type: "button",
					disabled: b || i,
					onClick: () => {
						o.status === "connected" ? x() : o.retry();
					},
					children: "Retry suggested workspaces"
				})]
			})
		] });
	}
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "workspace-ha-library-content",
		children: [
			o.status === "connected" ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
				/* @__PURE__ */ (0, Q.jsx)("button", {
					type: "button",
					onClick: () => void x(),
					children: "Refresh"
				}),
				l.length === 0 && !d && /* @__PURE__ */ (0, Q.jsx)("p", { children: "No Cabane workspaces saved on this HA instance." }),
				l.map((e) => /* @__PURE__ */ (0, Q.jsxs)("div", { children: [
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
			T,
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
function io({ repository: e, onRestored: t, initialOrigin: n, onBusyChange: r }) {
	let i = f(), [a, o] = (0, H.useState)(() => window.sessionStorage.getItem("cabane:ha-library-origin") ?? n ?? ""), s = i?.origin ?? m(a);
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
			s && /* @__PURE__ */ (0, Q.jsx)(p, {
				homeAssistantUrl: s,
				children: /* @__PURE__ */ (0, Q.jsx)(ro, {
					repository: e,
					onRestored: t,
					onBusyChange: r
				})
			}, s)
		]
	});
}
function ao({ repository: e, onRestored: t, localWorkspaceIds: n, busy: r, onBusyChange: i }) {
	let a = f();
	return a ? /* @__PURE__ */ (0, Q.jsx)(p, {
		homeAssistantUrl: a.origin,
		children: /* @__PURE__ */ (0, Q.jsx)(ro, {
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
function oo({ session: e, repository: t, onRestored: n, onBuild: r, onExplore: i, onCancel: a }) {
	let [o, s] = (0, H.useState)({ kind: "checking" }), [c, l] = (0, H.useState)(!1), [u, d] = (0, H.useState)(0);
	return (0, H.useEffect)(() => {
		let t = !0;
		s({ kind: "checking" });
		let n = window.setTimeout(() => {
			t = !1, s({
				kind: "error",
				message: "Home Assistant took too long to check saved homes. Try again."
			});
		}, 1e4);
		return (async () => {
			let t = b(window.location.href, e.origin);
			if (t) throw Error(t);
			if (e.connection.connected === !1) throw Error("Home Assistant is disconnected. Reconnect and try again.");
			return Ra((t) => e.connection.sendMessagePromise(t)).list();
		})().then((e) => {
			t && s({ kind: e.length ? "saved" : "empty" });
		}).catch((e) => {
			t && s({
				kind: "error",
				message: e instanceof Error ? e.message : "Could not check saved homes on Home Assistant."
			});
		}).finally(() => window.clearTimeout(n)), () => {
			t = !1, window.clearTimeout(n);
		};
	}, [
		e.connection,
		e.origin,
		u
	]), o.kind === "checking" ? /* @__PURE__ */ (0, Q.jsx)("main", {
		className: "direction-project-loading",
		role: "status",
		children: "Checking for homes saved on Home Assistant…"
	}) : o.kind === "empty" ? /* @__PURE__ */ (0, Q.jsx)(ji, {
		to: "/welcome",
		replace: !0
	}) : /* @__PURE__ */ (0, Q.jsx)("main", {
		className: "workspace-library",
		children: /* @__PURE__ */ (0, Q.jsxs)(za, {
			title: "Import a workspace",
			busy: c,
			error: o.kind === "error" ? o.message : null,
			onCancel: () => void a(),
			children: [o.kind === "saved" ? /* @__PURE__ */ (0, Q.jsx)(io, {
				repository: t,
				onRestored: n,
				initialOrigin: e.origin,
				onBusyChange: l
			}) : /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("p", { children: "Could not check your saved homes." }), /* @__PURE__ */ (0, Q.jsx)("button", {
				type: "button",
				onClick: () => d((e) => e + 1),
				children: "Try again"
			})] }), /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "workspace-library-actions",
				children: [/* @__PURE__ */ (0, Q.jsx)("button", {
					type: "button",
					disabled: c,
					onClick: () => void r(),
					children: "Create a new home"
				}), /* @__PURE__ */ (0, Q.jsx)("button", {
					type: "button",
					disabled: c,
					onClick: () => void i(),
					children: "Explore the demo"
				})]
			})]
		})
	});
}
//#endregion
//#region apps/web/src/workspaces/workspace-open-link.ts
var so = (e) => /^[A-Za-z0-9_-]{1,200}$/.test(e), co = (e) => {
	let t = m(e);
	return t && (e === t || e === `${t}/`) ? t : null;
};
function lo(e) {
	let t = new URLSearchParams(e).get("action");
	return t === "sync" || t === "dashboard" || t === "device" ? t : null;
}
function uo(e, t, n, r) {
	let i = co(n);
	if (!so(t) || !i) throw Error("A valid workspace and Home Assistant address are required.");
	let a = new URL(`/open/${encodeURIComponent(t)}`, e);
	if (!["https:", "http:"].includes(a.protocol) || a.username || a.password) throw Error("Invalid Cabane address.");
	return a.searchParams.set("ha", i), r && a.searchParams.set("view", "dashboard"), a.href;
}
function fo(e) {
	try {
		let t = new URL(e), n = /^\/open\/([^/]+)$/.exec(t.pathname), r = n ? decodeURIComponent(n[1]) : "", i = co(t.searchParams.get("ha") ?? "");
		return !so(r) || !i ? null : {
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
var po = [
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
function mo(e, t) {
	return `${$(e)}/mobile-editor?mode=${t === "furnish" ? "arrange" : "construct"}`;
}
function ho(e) {
	return Ye(po, e)?.[0].route.handle ?? null;
}
function $(e) {
	return `/workspaces/${encodeURIComponent(e)}`;
}
function go(e) {
	return Ye([{ path: "/workspaces/:workspaceId/*" }], e)?.[0].params.workspaceId ?? null;
}
function _o(e, t) {
	let n = $(t);
	return e.panel === "home-assistant" ? `${n}/home-assistant` : e.panel === "action-bar" ? `${n}/shortcuts` : e.mode === "construct" ? `${n}/construct` : e.mode === "furnish" ? `${n}/arrange` : e.relationshipId ? `${n}/connect/devices` : e.view ? `${n}/connect/${e.view}` : `${n}/connect`;
}
function vo(e, t) {
	return !ho(t) || go(t) !== e;
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceOpenPage.tsx
function yo({ repository: e, target: t, onOpened: n }) {
	let { runtime: r, coordinator: i } = Qa(e, t.origin), a = (0, H.useRef)(!1), [o, s] = (0, H.useState)(!1), [c, l] = (0, H.useState)(null), [u, d] = (0, H.useState)(!1), f = (0, H.useCallback)(async () => {
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
				children: [p ? "Signing in…" : "Sign in & open", /* @__PURE__ */ (0, Q.jsx)(V, { name: "external" })]
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
function bo({ repository: e, onOpened: t }) {
	let n = X(), r = fo(new URL(`${n.pathname}${n.search}`, window.location.origin).href);
	return /* @__PURE__ */ (0, Q.jsx)("main", {
		className: "ha-page",
		children: /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "ha-page__content",
			children: [/* @__PURE__ */ (0, Q.jsx)("nav", {
				className: "ha-page__nav",
				children: /* @__PURE__ */ (0, Q.jsxs)(Z, {
					to: "/workspaces",
					children: [/* @__PURE__ */ (0, Q.jsx)(V, { name: "back" }), "Workspaces"]
				})
			}), r ? /* @__PURE__ */ (0, Q.jsx)(p, {
				homeAssistantUrl: r.origin,
				children: /* @__PURE__ */ (0, Q.jsx)(yo, {
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
var xo = "cabane:last-opened-workspace", So = (e) => `cabane:workspace-preview:${e}`;
function Co() {
	try {
		return window.localStorage.getItem(xo);
	} catch {
		return null;
	}
}
function wo(e) {
	try {
		window.localStorage.setItem(xo, e);
	} catch {}
}
function To(e) {
	try {
		return window.localStorage.getItem(So(e));
	} catch {
		return null;
	}
}
function Eo(e, t) {
	if (!(!t.width || !t.height)) try {
		let n = document.createElement("canvas"), r = Math.min(640 / t.width, 480 / t.height, 1);
		n.width = Math.max(1, Math.round(t.width * r)), n.height = Math.max(1, Math.round(t.height * r));
		let i = n.getContext("2d");
		if (!i) return;
		i.drawImage(t, 0, 0, n.width, n.height), window.localStorage.setItem(So(e), n.toDataURL("image/webp", .75));
	} catch {}
}
function Do(e) {
	try {
		window.localStorage.removeItem(So(e)), Co() === e && window.localStorage.removeItem(xo);
	} catch {}
}
//#endregion
//#region apps/web/src/onboarding-config.ts
var Oo = {
	available: !1,
	source: "https://github.com/cabane-app/cabane",
	selfHost: "https://github.com/cabane-app/cabane#readme"
};
//#endregion
//#region apps/web/src/workspaces/first-onboarding-light.ts
function ko(e, t) {
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
function Ao(e) {
	let t = Jr(), r = X(), [i, a] = (0, H.useState)(null), [o, s] = (0, H.useState)(!1), [c, l] = (0, H.useState)(!1), u = (0, H.useRef)(!1), [d, f] = (0, H.useState)(null), [p, m] = (0, H.useState)(null), h = (0, H.useCallback)(async () => {
		if (e) try {
			a(await e.readOnboarding());
		} catch {
			f("Getting-started preferences are unavailable. Your workspaces are still available.");
		} finally {
			s(!0);
		}
	}, [e]);
	return (0, H.useEffect)(() => {
		h();
		let e = () => {
			h();
		};
		return window.addEventListener("focus", e), () => window.removeEventListener("focus", e);
	}, [h]), {
		state: i,
		loaded: o,
		busy: c,
		error: d,
		deleted: p,
		dismiss: (0, H.useCallback)(async (t) => {
			a((e) => e && {
				...e,
				[t === "welcome" ? "welcomeDismissed" : "nudgeDismissed"]: !0
			});
			try {
				await e?.dismissOnboarding(t);
			} catch {
				f("This preference could not be saved. You can keep using your home.");
			}
		}, [e]),
		start: (0, H.useCallback)(async (i, a) => {
			if (!(!e || u.current)) {
				u.current = !0, l(!0), f(null), m(null);
				try {
					let o = await e.readOnboarding(), s = await e.startOnboarding(i, { ...a === void 0 ? {} : { replaceDeletedId: a } });
					if (!s.record) throw Error(s.error ?? "Open Workspaces to recover this home.");
					let c = ae();
					try {
						c = n(window.localStorage, s.metadata.id).record;
					} catch {}
					let l = c.launch?.target ?? (i === "connect" && s.record.publishedAt !== 0 ? ko(I(s.record.published), "open-plan-living") : void 0), u = {
						...c,
						launch: {
							entry: i,
							introductionDismissed: !0,
							starterConsumed: !0,
							nudgeDismissed: !0,
							firstControlConfirmed: c.launch?.firstControlConfirmed ?? !1,
							...l ? { target: l } : {}
						}
					}, d = !1;
					try {
						d = C(window.localStorage, s.metadata.id, u);
					} catch {}
					if (d || f("Setup progress could not be saved. Your new home is safe in Workspaces."), i === "build" && o?.destinations.build !== s.metadata.id && he(s.metadata.id), await h(), i === "build") {
						r.pathname !== "/build" && await t("/build");
						return;
					}
					l && s.metadata.homeAssistantUrl && s.record.bindings[s.metadata.homeAssistantUrl]?.published.entityIdsBySlotId[l.slotId] ? await t($(s.metadata.id)) : await t(_o({
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
					f(e instanceof Error ? e.message : "Could not open your home. Please try again."), e instanceof x && m({
						path: i,
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
			r.pathname
		]),
		clearError: () => {
			f(null), m(null);
		}
	};
}
//#endregion
//#region apps/web/src/workspaces/workspace-availability.ts
function jo(e, t = !1, n) {
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
function Mo({ entry: e, busy: t, onOpen: n, onAction: r, onRecover: i, onExportRaw: a }) {
	let { metadata: o, record: s, error: c } = e, [l, u] = (0, H.useState)(null), [d, f] = (0, H.useState)(!1), [p, m] = (0, H.useState)(!1), [h, g] = (0, H.useState)(!o.homeAssistantUrl);
	(0, H.useEffect)(() => {
		let e = !0;
		u(null), f(!1), m(!1), g(!o.homeAssistantUrl);
		let t = () => {
			o.homeAssistantUrl && qa(window.indexedDB, o.homeAssistantUrl, o.id).then(async (t) => {
				let n = !!(t && s && await Xa(o, s) !== t.acknowledgedFingerprint);
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
	let _ = jo(l, d), v = {
		settings: "Home Assistant settings",
		sync: "Sync with Home Assistant",
		dashboard: "Add to Home Assistant",
		device: "Open on another device",
		rename: "Rename",
		duplicate: "Duplicate",
		export: "Export",
		delete: "Delete"
	}, y = To(o.id), b = s && JSON.stringify(s.draft) !== JSON.stringify(s.published);
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
				children: [/* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("dt", { children: "Connection" }), /* @__PURE__ */ (0, Q.jsxs)("dd", { children: [/* @__PURE__ */ (0, Q.jsx)(V, { name: "devices" }), o.homeAssistantUrl ? "HA configured" : "HA not connected"] })] }), /* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsx)("dt", { children: "Storage" }), /* @__PURE__ */ (0, Q.jsxs)("dd", { children: [/* @__PURE__ */ (0, Q.jsx)(V, { name: p ? "warning" : _.icon }), p ? "Storage unavailable" : h ? _.label : "Checking storage…"] })] })]
			}),
			(c || !o.hasPublished || b) && /* @__PURE__ */ (0, Q.jsx)("p", {
				className: "workspace-status",
				children: c ? "Needs recovery" : o.hasPublished ? "Unapplied changes" : "Draft"
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "workspace-card-footer",
				children: [/* @__PURE__ */ (0, Q.jsx)("p", {
					className: "workspace-server",
					children: o.homeAssistantUrl && /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)($a, {}), /* @__PURE__ */ (0, Q.jsx)("span", { children: new URL(o.homeAssistantUrl).host })] })
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
function No({ action: e, initialName: t, busy: n, error: r, onSave: i, onCancel: a }) {
	let [o, s] = (0, H.useState)(t);
	return /* @__PURE__ */ (0, Q.jsx)(za, {
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
function Po({ mode: e, busy: t, error: n, onImport: r, onExport: i, onCancel: a, remoteImport: o }) {
	let s = X(), c = Jr(), [l, u] = (0, H.useState)(() => new URLSearchParams(s.search).get("import") === "home-assistant" ? "ha" : "file"), [d, f] = (0, H.useState)(""), [p, m] = (0, H.useState)(null);
	return /* @__PURE__ */ (0, Q.jsxs)(za, {
		title: e === "import" ? "Import workspace" : "Export workspace",
		titleIcon: e === "import" ? /* @__PURE__ */ (0, Q.jsx)(V, { name: "import" }) : void 0,
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
				children: [/* @__PURE__ */ (0, Q.jsx)(V, { name: "file" }), "From file"]
			}), /* @__PURE__ */ (0, Q.jsxs)("button", {
				"aria-pressed": l === "ha",
				onClick: () => {
					c("/workspaces?import=home-assistant", { replace: !0 }), u("ha");
				},
				children: [/* @__PURE__ */ (0, Q.jsx)($a, {}), "From Home Assistant"]
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
								f((await me(t)).json);
							} catch (e) {
								m(e instanceof Error ? e.message : "Could not read that file. Please choose it again.");
							}
						})();
					}
				})] }),
				/* @__PURE__ */ (0, Q.jsxs)("button", {
					className: "workspace-primary",
					disabled: t || !d,
					children: [/* @__PURE__ */ (0, Q.jsx)(V, { name: "import" }), t ? "Importing…" : "Import workspace"]
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
function Fo(e) {
	let t = f(), n = _("cabane-icon.png"), r = X(), i = Jr(), [a, o] = (0, H.useState)(() => new URLSearchParams(r.search).get("import") === "home-assistant" ? { action: "import" } : null), [s, c] = (0, H.useState)(!1), [l, u] = (0, H.useState)(null), d = (e) => {
		u(null), o(e);
	}, p = async (e) => {
		c(!0), u(null);
		try {
			await e(), o(null);
		} catch (e) {
			u(e instanceof Error ? e.message : "Could not complete this action. Please try again.");
		} finally {
			c(!1);
		}
	}, m = e.entries.filter((t) => !t.error && t.metadata.id !== e.demoWorkspaceId), h = () => {
		m.length === 1 ? p(() => e.onSettings(m[0].metadata.id, "dashboard")) : d({ action: "setup-ha" });
	}, g = () => {
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
						children: [/* @__PURE__ */ (0, Q.jsx)(V, { name: "plus" }), "New workspace"]
					}), /* @__PURE__ */ (0, Q.jsxs)("button", {
						disabled: s,
						onClick: () => d({ action: "import" }),
						children: [/* @__PURE__ */ (0, Q.jsx)(V, { name: "import" }), "Import workspace"]
					})]
				})]
			}),
			e.onSettings && !t && /* @__PURE__ */ (0, Q.jsx)("div", {
				className: "workspace-ha-entry",
				children: /* @__PURE__ */ (0, Q.jsxs)("button", {
					disabled: s,
					onClick: h,
					children: ["Add Cabane to Home Assistant", /* @__PURE__ */ (0, Q.jsx)(V, { name: "chevron" })]
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
				children: [e.entries.map((t) => /* @__PURE__ */ (0, Q.jsx)(Mo, {
					entry: t,
					busy: s,
					onOpen: () => void p(() => e.onOpen(t.metadata.id)),
					onAction: (n) => [
						"settings",
						"sync",
						"dashboard",
						"device"
					].includes(n) ? void p(() => e.onSettings?.(t.metadata.id, n === "settings" ? void 0 : n) ?? Promise.resolve()) : d({
						action: n,
						entry: t
					}),
					onRecover: () => void p(() => e.onRecover(t.metadata.id)),
					onExportRaw: () => void p(() => e.onExportRaw(t.metadata.id))
				}, t.metadata.id)), e.renderSuggestions?.(s, c)]
			}),
			a?.action === "setup-ha" && /* @__PURE__ */ (0, Q.jsxs)(za, {
				title: "Add Cabane to Home Assistant",
				busy: s,
				error: l,
				onCancel: g,
				children: [
					/* @__PURE__ */ (0, Q.jsx)("p", { children: m.length ? "Choose the home to sync with Home Assistant." : "Create or import a home first. You can keep using Cabane in this browser." }),
					/* @__PURE__ */ (0, Q.jsx)("div", {
						className: "workspace-setup-homes",
						children: m.map((t) => /* @__PURE__ */ (0, Q.jsx)("button", {
							disabled: s,
							onClick: () => void p(() => e.onSettings(t.metadata.id, "dashboard")),
							children: t.metadata.name
						}, t.metadata.id))
					}),
					!m.length && /* @__PURE__ */ (0, Q.jsx)("button", {
						onClick: () => d({ action: "create" }),
						children: "Create a home"
					})
				]
			}),
			a && (a.action === "create" || a.action === "rename" || a.action === "duplicate") && /* @__PURE__ */ (0, Q.jsx)(No, {
				action: a.action,
				initialName: a.action === "create" ? "" : `${a.entry.metadata.name}${a.action === "duplicate" ? " copy" : ""}`,
				busy: s,
				error: l,
				onCancel: g,
				onSave: (t) => void p(() => a.action === "create" ? e.onCreate(t) : a.action === "rename" ? e.onRename(a.entry.metadata.id, t) : e.onDuplicate(a.entry.metadata.id, t))
			}),
			a?.action === "delete" && e.renderDelete(a.entry, g, c),
			(a?.action === "import" || a?.action === "export") && /* @__PURE__ */ (0, Q.jsx)(Po, {
				mode: a.action,
				busy: s,
				error: l,
				onCancel: g,
				remoteImport: e.remoteImport,
				onImport: (t) => void p(() => e.onImport(t)),
				onExport: (t) => void p(() => e.onExport(a.entry.metadata.id, t))
			})
		]
	});
}
//#endregion
//#region apps/web/src/workspaces/workspace-weather-source.ts
function Io(e, n, r) {
	let i = t(n), a = e.bindings[i] ?? {
		draft: te(e.homeId),
		published: te(e.homeId),
		manualRoomIds: [],
		manualSlotIds: []
	};
	return {
		...e,
		bindings: {
			...e.bindings,
			[i]: {
				...a,
				draft: {
					...a.draft,
					weatherSource: r
				},
				published: {
					...a.published,
					weatherSource: r
				}
			}
		}
	};
}
//#endregion
//#region apps/web/src/workspaces/workspace-tool-state.ts
function Lo(e, t, n) {
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
function Ro(e, t, n) {
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
	let a = (0, H.useMemo)(() => P(ce(window.indexedDB), B), []);
	return (0, H.useMemo)(() => {
		let e = Promise.resolve();
		return {
			storage: {
				read: (e) => r.current.published.toolState?.[e],
				write: (t, n) => {
					let o = structuredClone(n), s = e.then(async () => {
						let e = r.current, n = await a.replace(Lo(e, t, o), e.revision);
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
					let s = await a.replace(Io(e, t, n), e.revision);
					r.current = s, i.current.onSaved(s);
				});
				return e = s.catch(() => void 0), s;
			}
		};
	}, [a]);
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceDestinations.tsx
function zo({ id: e, origin: t, intent: n, ready: r, panelReady: i }) {
	let a = f(), [o, s] = (0, H.useState)(n === "device" ? n : null), [c, l] = (0, H.useState)("");
	(0, H.useEffect)(() => {
		n === "device" && s(n);
	}, [n]);
	let u = a ? "" : uo(window.location.origin, e, t, o === "dashboard"), d = async () => {
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
						/* @__PURE__ */ (0, Q.jsx)(V, { name: "roof" }),
						"Cabane",
						/* @__PURE__ */ (0, Q.jsx)(V, { name: "check" })
					]
				}),
				/* @__PURE__ */ (0, Q.jsxs)("a", {
					className: "ha-primary ha-link-button",
					href: `${t}/cabane`,
					target: "_blank",
					rel: "noreferrer",
					children: ["Open in Home Assistant", /* @__PURE__ */ (0, Q.jsx)(V, { name: "external" })]
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
						children: [/* @__PURE__ */ (0, Q.jsx)(V, { name: "grid" }), "Use a Webpage card"]
					}), /* @__PURE__ */ (0, Q.jsxs)("button", {
						"aria-pressed": o === "device",
						onClick: () => {
							s("device"), l("");
						},
						children: [/* @__PURE__ */ (0, Q.jsx)(V, { name: "external" }), "Open on another device"]
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
								children: [/* @__PURE__ */ (0, Q.jsx)(V, { name: "duplicate" }), o === "dashboard" ? "Copy dashboard URL" : "Copy link"]
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
var Bo = "https://github.com/cabane-app/cabane-home-assistant", Vo = `${Bo}#install`;
//#endregion
//#region apps/web/src/workspaces/WorkspaceHaInstall.tsx
function Ho({ origin: e, checking: t, panelError: n, onCheck: r }) {
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
								href: Bo,
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
						children: ["Install with HACS", /* @__PURE__ */ (0, Q.jsx)(V, { name: "external" })]
					}), /* @__PURE__ */ (0, Q.jsxs)("a", {
						href: `${e}/config/integrations/dashboard`,
						target: "_blank",
						rel: "noreferrer",
						children: ["Open integrations", /* @__PURE__ */ (0, Q.jsx)(V, { name: "external" })]
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
						href: Vo,
						target: "_blank",
						rel: "noreferrer",
						children: ["Setup guide", /* @__PURE__ */ (0, Q.jsx)(V, { name: "external" })]
					})
				]
			})
		]
	});
}
//#endregion
//#region apps/web/src/workspaces/WorkspaceHaStorage.tsx
var Uo = (0, H.createContext)(null);
function Wo({ id: e, origin: t, repository: n, hidden: r = !1, children: i }) {
	let { runtime: a, coordinator: o } = Qa(n, t), [s, c] = (0, H.useState)({ kind: "off" }), l = (0, H.useRef)(!1), u = (0, H.useRef)(0), d = (0, H.useCallback)(async () => {
		if (r || !t || l.current) return;
		let n = u.current;
		l.current = !0;
		try {
			let r = (await qa(window.indexedDB, t, e))?.enabled ? a.status === "connected" ? await o.reconcile(e, t) : { kind: "disconnected" } : { kind: "off" };
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
	}, [d]), /* @__PURE__ */ (0, Q.jsx)(Uo.Provider, {
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
var Go = () => (0, H.useContext)(Uo);
function Ko() {
	let e = (0, H.useContext)(Uo);
	return e ? /* @__PURE__ */ (0, Q.jsx)(qo, { ...e }) : null;
}
function qo({ id: e, origin: t, repository: n }) {
	let r = X(), i = f(), a = !!(i && i.origin === t), o = Qa(n, t), s = (0, H.useContext)(Uo), c = s?.coordinator ?? o.coordinator, { runtime: l, client: u } = o, [d, p] = (0, H.useState)("checking"), m = (0, H.useRef)(0), [h, g] = (0, H.useState)(!1), [_, v] = (0, H.useState)(!1), [y, b] = (0, H.useState)(!1), [x, S] = (0, H.useState)(!1), [C, w] = (0, H.useState)(!1), [T, E] = (0, H.useState)({ kind: "off" }), [D, k] = (0, H.useState)(!1), [A, j] = (0, H.useState)(null), [M, N] = (0, H.useState)(null), ee = (0, H.useCallback)(async () => {
		if (!t) return;
		let n = await qa(window.indexedDB, t, e);
		w(n?.enabled ?? !1);
		let r = await u.get(e);
		return S(!!r?.document), n;
	}, [
		u,
		e,
		t
	]), { sendStorageMessage: P } = l, te = (0, H.useCallback)(async () => {
		let e = ++m.current;
		b(!0), j(null), p("checking");
		let [t, n] = await Promise.allSettled([u.list(), a ? Promise.resolve(null) : P({ type: "get_panels" })]);
		if (e === m.current) {
			p(a ? "ready" : n.status === "rejected" ? "error" : n.value?.cabane?.component_name === "custom" && n.value.cabane.config?._panel_custom?.name === "cabane-panel" ? "ready" : "missing");
			try {
				if (t.status === "rejected") throw t.reason;
				await ee(), e === m.current && v(!0);
			} catch (t) {
				if (e !== m.current) return;
				v(!1), t instanceof Ia || j(t instanceof Error ? t.message : "Could not reach Home Assistant. Try again.");
			} finally {
				e === m.current && (g(!0), b(!1));
			}
		}
	}, [
		u,
		ee,
		P,
		a
	]);
	(0, H.useEffect)(() => {
		let n = !0;
		return S(!1), w(!1), t && qa(window.indexedDB, t, e).then((e) => {
			n && (S(!!e), w(e?.enabled ?? !1));
		}).catch(() => {
			n && j("Could not read this browser's sync settings.");
		}), () => {
			n = !1;
		};
	}, [t, e]), (0, H.useEffect)(() => (g(!1), v(!1), E({ kind: "off" }), j(null), N(null), t && l.status === "connected" && te(), () => {
		m.current += 1;
	}), [
		t,
		l.status,
		e,
		te
	]);
	let ne = s?.backgroundStatus;
	(0, H.useEffect)(() => {
		ne && ne.kind !== "off" && E(ne);
	}, [ne]), (0, H.useEffect)(() => {
		if (s || !C || !t) return;
		let n = window.setInterval(() => {
			c.reconcile(e, t).then((e) => {
				E(e), e.detail === "restored" && window.location.reload();
			});
		}, 3e3);
		return () => window.clearInterval(n);
	}, [
		s,
		C,
		t,
		c,
		e
	]);
	let F = async (e, t, n = !1) => {
		k(!0), j(null), N(null);
		try {
			let r = await e();
			E(r), await ee(), r.kind !== "conflict" && (N(t ?? null), n && window.location.reload());
		} catch (e) {
			j(e instanceof Error ? e.message : "Could not complete the request. Try again.");
		} finally {
			k(!1);
		}
	}, re = async (e, t) => {
		let n = await O(window.indexedDB).verify(oe(e));
		pe(L(e, n), t, "application/zip");
	}, ie = async () => {
		let t = await n.read(e);
		t?.record && await re(le(t.metadata, t.record), `${e}-before-load.cabane`);
	}, ae = (n) => F(async () => {
		if (n === "remote") return await ie(), c.resolveConflict(e, t, n);
		let r = await u.get(e);
		return r?.document && await re(r.document, `${e}-before-replace.cabane`), c.resolveConflict(e, t, n, r?.version);
	}, "Copy updated.", n === "remote"), I = lo(r.search), R = C ? l.status !== "connected" || T.kind === "disconnected" || T.kind === "unavailable" ? "Sync interrupted" : T.kind === "conflict" ? "Sync needs attention" : T.kind === "synced" ? "Synced with HA" : T.kind === "pending" ? "Changes pending" : "Checking sync…" : x ? "Saved to HA · sync off" : y ? "Checking storage…" : "Local only", se = d !== "ready" || !_ ? 1 : !C || T.kind !== "synced" ? 2 : 3;
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
					className: `ha-status${T.kind === "synced" && C && l.status === "connected" ? " is-connected" : ""}`,
					children: [/* @__PURE__ */ (0, Q.jsx)(V, { name: C ? "refresh" : x ? "save" : "monitor" }), R]
				})]
			}),
			/* @__PURE__ */ (0, Q.jsx)("p", { children: "Your home, available inside Home Assistant." }),
			l.status === "connected" && /* @__PURE__ */ (0, Q.jsx)("ol", {
				className: "ha-setup-progress",
				"aria-label": "Setup progress",
				children: [
					"Install",
					"Sync your home",
					"Open Cabane"
				].map((e, t) => /* @__PURE__ */ (0, Q.jsxs)("li", {
					"aria-current": se === t + 1 ? "step" : void 0,
					className: se > t + 1 ? "is-complete" : "",
					children: [/* @__PURE__ */ (0, Q.jsx)(V, { name: se > t + 1 ? "check" : t === 0 ? "import" : t === 1 ? "refresh" : "grid" }), e]
				}, e))
			}),
			l.status === "connected" ? y || !h ? /* @__PURE__ */ (0, Q.jsx)("p", {
				role: "status",
				children: "Checking the Cabane integration…"
			}) : /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
				(d !== "ready" || !_) && /* @__PURE__ */ (0, Q.jsx)(Ho, {
					origin: t,
					checking: y,
					panelError: d === "error" || !!A,
					onCheck: () => void te()
				}),
				T.kind === "unavailable" && T.detail && /* @__PURE__ */ (0, Q.jsx)("p", {
					role: "alert",
					children: T.detail
				}),
				_ && /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
					!C && (d === "ready" || I !== "dashboard") ? /* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "ha-storage-activate",
						children: [
							/* @__PURE__ */ (0, Q.jsx)("h3", { children: "Bring your home with you" }),
							/* @__PURE__ */ (0, Q.jsx)("p", { children: "Save this home to Home Assistant and keep changes in sync." }),
							/* @__PURE__ */ (0, Q.jsxs)("button", {
								className: "ha-primary",
								disabled: D,
								onClick: () => void F(() => c.enableSync(e, t)),
								children: [/* @__PURE__ */ (0, Q.jsx)(V, { name: "refresh" }), D ? "Enabling sync…" : "Enable sync"]
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
									onClick: () => void ae("local"),
									children: "Keep browser copy"
								}), /* @__PURE__ */ (0, Q.jsx)("button", {
									disabled: D,
									onClick: () => void ae("remote"),
									children: "Keep Home Assistant copy"
								})]
							})
						]
					}),
					T.kind === "disconnected" && /* @__PURE__ */ (0, Q.jsx)("p", {
						role: "status",
						children: "Sync paused. Your changes are saved in this browser."
					}),
					t && x && C && /* @__PURE__ */ (0, Q.jsx)(zo, {
						id: e,
						origin: t,
						intent: I,
						panelReady: d === "ready",
						ready: T.kind === "synced" && l.status === "connected"
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
								}), /* @__PURE__ */ (0, Q.jsx)(ge, {
									id: "ha-auto",
									labelledBy: "ha-auto-label",
									checked: C,
									disabled: D,
									onChange: () => void F(() => c.setEnabled(e, t, !1))
								})]
							}),
							/* @__PURE__ */ (0, Q.jsxs)("div", {
								className: "ha-actions",
								children: [
									/* @__PURE__ */ (0, Q.jsxs)("button", {
										disabled: D,
										onClick: () => void F(() => c.manualSave(e, t)),
										children: [/* @__PURE__ */ (0, Q.jsx)(V, { name: "export" }), "Save a copy now"]
									}),
									/* @__PURE__ */ (0, Q.jsxs)("button", {
										disabled: D || !x,
										onClick: () => {
											window.confirm("Load the Home Assistant copy? Your browser copy will be downloaded as a backup first.") && F(async () => (await ie(), c.manualRestore(e, t)), void 0, !0);
										},
										children: [/* @__PURE__ */ (0, Q.jsx)(V, { name: "import" }), "Load saved copy"]
									}),
									/* @__PURE__ */ (0, Q.jsxs)("button", {
										className: "ha-danger",
										disabled: D || !x,
										onClick: () => {
											window.confirm("Delete the copy on Home Assistant? Your browser's workspace will remain. Automatic sync will turn off.") && F(() => c.deleteRemote(e, t), "Home Assistant copy deleted. Your browser copy is safe.");
										},
										children: [/* @__PURE__ */ (0, Q.jsx)(V, { name: "delete" }), "Delete saved copy"]
									})
								]
							})
						]
					})
				] })
			] }) : /* @__PURE__ */ (0, Q.jsx)("p", { children: "Connect Home Assistant first" }),
			A && /* @__PURE__ */ (0, Q.jsx)("p", {
				className: "ha-error",
				role: "alert",
				children: A
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
function Jo({ record: e, lifecycle: t, origin: n, onChangeOrigin: r, onRecordChange: i, isDemo: a, onCreatePersonal: o }) {
	let s = X(), c = lo(s.search) === "dashboard", u = f(), d = _("cabane-icon.png"), p = w(), m = Go(), [h, g] = (0, H.useState)(n ?? ""), [v, y] = (0, H.useState)(!n), [b, x] = (0, H.useState)(!1), [S, C] = (0, H.useState)(null), [T, E] = (0, H.useState)(null), [D, O] = (0, H.useState)(null), k = [
		"authenticating",
		"connecting",
		"reconnecting"
	].includes(p.status), A = p.status === "connected";
	(0, H.useEffect)(() => {
		if (A && !u) try {
			let t = JSON.parse(window.sessionStorage.getItem("cabane:editor-return:v1") ?? "null"), n = t && typeof t == "object" ? t : null;
			n?.workspaceId === e.homeId && n?.panel === "home-assistant" && window.sessionStorage.removeItem(_e);
		} catch {}
	}, [
		A,
		e.homeId,
		u
	]);
	let j = async (e) => {
		x(!0), E(null), O(null);
		try {
			await e();
		} catch (e) {
			E(e instanceof Error ? e.message : "Please try again.");
		} finally {
			x(!1);
		}
	}, M = ye(p, async (t) => {
		await r(t), u || window.sessionStorage.setItem(_e, JSON.stringify({
			workspaceId: e.homeId,
			mode: "connect",
			panel: "home-assistant",
			destination: lo(s.search)
		})), y(!1);
	}), N = c && A ? "details" : "div", ee = c ? "details" : "div", P = async (e) => {
		if (!(b || k)) {
			x(!0), C(null);
			try {
				await M(e);
			} catch (e) {
				C(e instanceof Error ? e.message : "Could not start sign-in. Please try again.");
			} finally {
				x(!1);
			}
		}
	}, te = async () => (await m?.repository.read(e.homeId))?.record ?? e, ne = async () => {
		let t = await te(), r = le({
			name: t.draft.home.name,
			homeAssistantUrl: n,
			hasPublished: t.publishedAt !== 0
		}, t);
		await Ee(r, `${e.homeId}-backup.cabane`), O("Backup downloaded.");
	}, F = async (e) => {
		let n = await te(), r = ue(n, (await me(e)).json, B);
		if (!window.confirm("Replace this home's draft with the backup? Your current draft will be downloaded first. The published home stays unchanged until you save in the editor.")) return;
		await ne();
		let a = await t.autosave(n, r.project, void 0, r.bindings);
		if (a.status === "storage-error") throw a.error;
		if (a.status !== "saved") throw Error("This backup could not be saved. Your draft is unchanged.");
		i(a.record), O("Backup imported into the draft. Open the editor to review and save it.");
	};
	return /* @__PURE__ */ (0, Q.jsx)("main", {
		className: `ha-page${c ? " ha-page--setup" : ""}`,
		children: /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "ha-page__content",
			children: [
				/* @__PURE__ */ (0, Q.jsxs)("nav", {
					className: "ha-page__nav",
					"aria-label": "Workspace navigation",
					children: [/* @__PURE__ */ (0, Q.jsxs)(Z, {
						to: "/workspaces",
						children: [/* @__PURE__ */ (0, Q.jsx)(V, { name: "back" }), "Workspaces"]
					}), /* @__PURE__ */ (0, Q.jsxs)(Z, {
						to: $(e.homeId),
						children: ["Open home", /* @__PURE__ */ (0, Q.jsx)(V, { name: "chevron" })]
					})]
				}),
				/* @__PURE__ */ (0, Q.jsxs)("header", {
					className: "ha-page__header",
					children: [/* @__PURE__ */ (0, Q.jsx)("h1", { children: c ? "Cabane in Home Assistant" : "Home Assistant" }), /* @__PURE__ */ (0, Q.jsx)("p", { children: e.draft.home.name })]
				}),
				a ? /* @__PURE__ */ (0, Q.jsxs)("section", {
					className: "ha-section",
					children: [
						/* @__PURE__ */ (0, Q.jsx)("h2", { children: "Make this home yours" }),
						/* @__PURE__ */ (0, Q.jsx)("p", { children: "The demo uses simulated devices. Create your own workspace to connect Home Assistant and save across devices." }),
						/* @__PURE__ */ (0, Q.jsxs)("button", {
							className: "ha-primary",
							onClick: o,
							children: ["Create my workspace", /* @__PURE__ */ (0, Q.jsx)(V, { name: "chevron" })]
						})
					]
				}) : /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)(N, {
					className: c && A ? "ha-connection-details" : void 0,
					children: [c && A && /* @__PURE__ */ (0, Q.jsxs)("summary", { children: [
						/* @__PURE__ */ (0, Q.jsx)(V, { name: "check" }),
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
									className: `ha-status${A ? " is-connected" : ""}`,
									children: [/* @__PURE__ */ (0, Q.jsx)("i", {}), A ? "Connected" : k ? "Connecting…" : n ? "Disconnected" : "Not connected"]
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
									n && n !== u.origin && /* @__PURE__ */ (0, Q.jsxs)("p", {
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
											n !== u.origin && /* @__PURE__ */ (0, Q.jsx)("button", {
												className: "ha-primary",
												disabled: b,
												onClick: () => void j(() => r(u.origin)),
												children: "Use this Home Assistant"
											}),
											n === u.origin && ["error", "disconnected"].includes(p.status) && /* @__PURE__ */ (0, Q.jsx)("button", {
												disabled: b,
												onClick: p.retry,
												children: "Retry connection"
											}),
											n && /* @__PURE__ */ (0, Q.jsx)("button", {
												disabled: b,
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
							}) : v ? /* @__PURE__ */ (0, Q.jsxs)("form", {
								noValidate: !0,
								onSubmit: (e) => {
									if (e.preventDefault(), b || k) return;
									let t = l(h);
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
												"aria-invalid": !!S,
												"aria-describedby": `ha-address-help${S ? " ha-connection-error" : ""}`,
												placeholder: "https://home.example.com",
												autoCapitalize: "none",
												spellCheck: !1,
												value: h,
												disabled: b || k,
												onChange: (e) => {
													g(e.target.value), C(null);
												}
											}),
											/* @__PURE__ */ (0, Q.jsxs)("button", {
												className: "ha-primary",
												disabled: b || k,
												children: [b ? "Preparing sign-in…" : k ? "Connecting…" : "Connect", /* @__PURE__ */ (0, Q.jsx)(V, { name: "external" })]
											}),
											n && /* @__PURE__ */ (0, Q.jsx)("button", {
												type: "button",
												disabled: b,
												onClick: () => {
													y(!1), g(n), C(null);
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
										disabled: b || k,
										onClick: () => {
											y(!0), C(null);
										},
										children: "Change URL"
									}), A ? /* @__PURE__ */ (0, Q.jsx)("button", {
										disabled: b,
										onClick: () => void j(async () => {
											await p.disconnect(), await r(null), g(""), y(!0);
										}),
										children: "Disconnect"
									}) : /* @__PURE__ */ (0, Q.jsx)("button", {
										className: "ha-primary",
										disabled: b || k,
										onClick: () => void P(n),
										children: b ? "Preparing sign-in…" : k ? "Connecting…" : "Reconnect"
									})]
								})]
							}),
							S && /* @__PURE__ */ (0, Q.jsx)("p", {
								id: "ha-connection-error",
								role: "alert",
								className: "ha-error",
								children: S
							}),
							p.error && /* @__PURE__ */ (0, Q.jsx)("p", {
								role: "alert",
								className: "ha-error",
								children: p.error
							})
						]
					})]
				}), /* @__PURE__ */ (0, Q.jsx)(Ko, {})] }),
				/* @__PURE__ */ (0, Q.jsxs)(ee, {
					className: c ? "ha-setup-disclosure" : void 0,
					children: [c && /* @__PURE__ */ (0, Q.jsx)("summary", { children: "File backups" }), /* @__PURE__ */ (0, Q.jsxs)("section", {
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
									disabled: b,
									onClick: () => void j(ne),
									children: [/* @__PURE__ */ (0, Q.jsx)(V, { name: "export" }), "Export backup"]
								}), /* @__PURE__ */ (0, Q.jsxs)("label", {
									className: `ha-file-button${b ? " is-disabled" : ""}`,
									children: [
										/* @__PURE__ */ (0, Q.jsx)(V, { name: "import" }),
										"Import backup",
										/* @__PURE__ */ (0, Q.jsx)("input", {
											type: "file",
											accept: ".cabane,.json,application/zip,application/json",
											disabled: b,
											onChange: (e) => {
												let t = e.target.files?.[0];
												e.target.value = "", t && j(() => F(t));
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
				T && /* @__PURE__ */ (0, Q.jsx)("p", {
					role: "alert",
					className: "ha-error",
					children: T
				}),
				D && /* @__PURE__ */ (0, Q.jsx)("p", {
					role: "status",
					className: "ha-notice",
					children: D
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
var Yo = (0, H.lazy)(() => import("./assets/HomeEditor-D8epZJ4y.js").then((e) => ({ default: e.HomeEditor })));
function Xo({ onClose: e, ...t }) {
	let n = X(), r = Jr(), i = (0, H.useMemo)(() => ({
		...n.state?.editorRequest,
		...ho(n.pathname)
	}), [n.pathname, n.state]), a = (0, H.useRef)(!1), o = mi(({ nextLocation: e }) => !a.current && vo(t.initialRecord.homeId, e.pathname)), s = (e, n = !1) => {
		r(_o(e, t.initialRecord.homeId), {
			replace: n,
			state: { editorRequest: e }
		});
	};
	return /* @__PURE__ */ (0, Q.jsx)(H.Suspense, {
		fallback: /* @__PURE__ */ (0, Q.jsx)("main", {
			className: "direction-project-loading",
			children: "Opening the editor…"
		}),
		children: /* @__PURE__ */ (0, Q.jsx)(Yo, {
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
				exitRequested: o.state === "blocked",
				cancelExit: () => {
					o.state === "blocked" && o.reset();
				}
			},
			onClose: (n, i) => {
				a.current = !0, e(n, i), o.state === "blocked" ? o.proceed() : r($(t.initialRecord.homeId));
			}
		})
	});
}
//#endregion
//#region apps/web/src/mobile-editor/MobileEditorPrompt.tsx
var Zo = "cabane:mobile-editor-prompt-dismissed", Qo = "https://cabane.my";
function $o() {
	return window.matchMedia("(max-width: 760px)").matches;
}
function es() {
	try {
		return window.sessionStorage.getItem(Zo) === "true";
	} catch {
		return !1;
	}
}
function ts({ workspaceId: e, demoWorkspaceId: t }) {
	let n = Jr(), [r] = Ta(), [i, a] = (0, H.useState)(""), o = r.get("mode") === "arrange" ? "furnish" : "construct", s = () => {
		try {
			window.sessionStorage.setItem(Zo, "true");
		} catch {}
		n(_o({ mode: o }, e), { replace: !0 });
	}, c = async () => {
		try {
			navigator.share ? (await navigator.share({
				title: "Cabane",
				url: Qo
			}), a("Link shared.")) : navigator.clipboard?.writeText ? (await navigator.clipboard.writeText(Qo), a("Link copied. Open it on your other device.")) : a(`Open ${Qo} on your other device.`);
		} catch (e) {
			if (e instanceof DOMException && e.name === "AbortError") return;
			a(`Sharing was unavailable. Open ${Qo} on your other device.`);
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
function ns({ record: e, lifecycle: n, homeAssistantUrl: r, onHomeAssistantUrlChange: i, recoveryMessage: a, recoveryRaw: o, initialRequest: s, onboarding: c, demoWorkspaceId: l }) {
	let [u, d] = (0, H.useState)(e), p = (0, H.useMemo)(() => u.publishedAt === 0 ? null : I(u.published), [u.published, u.publishedAt]), m = (0, H.useMemo)(() => h(u.published, B).deviceModels, [u.published]), [g, _] = (0, H.useState)({
		message: a,
		raw: o
	}), [v, y] = (0, H.useState)(null), b = Ro(u, d, y), [x, S] = (0, H.useState)(!1), C = Jr(), w = X(), T = f(), [D] = (0, H.useState)(() => s ?? (T ? null : xe(e.homeId))), O = (0, H.useEffectEvent)(() => {
		if (D) {
			let e = new URLSearchParams(w.search);
			D.destination && e.set("action", D.destination), C(`${_o(D, u.homeId)}${e.size ? `?${e}` : ""}`, {
				replace: !0,
				state: { editorRequest: D }
			}), window.sessionStorage.removeItem(_e);
		}
	});
	(0, H.useEffect)(() => {
		O();
	}, []);
	let k = async (e) => {
		await b.flush();
		let t = (e.mode === "construct" || e.mode === "furnish") && !e.panel && $o() && !es() ? mo(u.homeId, e.mode) : _o(e, u.homeId);
		C(t, { state: { editorRequest: e } });
	}, j = r ? t(r) : null, M = (0, H.useMemo)(() => ({
		profile: (j ? u.bindings[j]?.published : void 0) ?? te(u.homeId),
		saveWeatherSource: j ? (e) => b.saveWeatherSource(j, e) : void 0,
		loaded: !0,
		hasStoredProfile: !!(j && u.bindings[j]),
		save: () => void 0
	}), [
		j,
		u,
		b
	]), N = /* @__PURE__ */ (0, Q.jsx)(Xo, {
		initialRecord: u,
		lifecycle: n,
		recoveryMessage: g.message,
		recoveryRaw: g.raw,
		homeAssistantUrl: r,
		onPrepareOrigin: async (e, t) => {
			let n = await i(t, e) ?? e;
			return d(n), n;
		},
		onClose: (e, t) => {
			_({
				message: void 0,
				raw: void 0
			}), d(e), S(t === "applied"), window.sessionStorage.removeItem(_e);
		}
	}), ee = u.publishedAt === 0 ? /* @__PURE__ */ (0, Q.jsx)(ji, {
		to: _o({ mode: "construct" }, u.homeId),
		replace: !0
	}) : /* @__PURE__ */ (0, Q.jsx)(E, {
		storage: b.storage,
		children: /* @__PURE__ */ (0, Q.jsx)(Se, { children: /* @__PURE__ */ (0, Q.jsx)(A, {
			manifest: p,
			architectureModels: Ce,
			onboarding: c,
			walkTools: ve,
			deviceModels: m,
			homeAssistantUrl: r,
			onHomeAssistantUrlChange: (e) => {
				y(null), Promise.resolve().then(() => i(e, u)).then((e) => {
					e && d(e);
				}).catch((e) => y(e instanceof Error ? e.message : "Connection settings could not be saved."));
			},
			onHomeAssistantSettings: () => void C(`${$(u.homeId)}/home-assistant`),
			onWorkspaces: () => void C("/workspaces"),
			renderActionBarDeviceIcon: (e) => /* @__PURE__ */ (0, Q.jsx)(we, {
				modelId: e,
				models: m
			}),
			bindingManager: M,
			constructionApplied: x,
			onEditHome: (e = "construct") => {
				k({ mode: e });
			},
			onCustomizeActionBar: () => {
				k({
					mode: "construct",
					panel: "action-bar"
				});
			},
			onOpenConnect: (e, t) => {
				k({
					mode: "connect",
					view: e,
					...t === void 0 ? {} : { roomId: t }
				});
			},
			onExportBrowserData: () => R(le({
				name: u.draft.home.name,
				homeAssistantUrl: r,
				hasPublished: u.publishedAt !== 0
			}, u), `${u.homeId}-private-workspace.json`)
		}) })
	});
	return /* @__PURE__ */ (0, Q.jsxs)(ne, { children: [v && /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "workspace-connection-error",
		role: "alert",
		children: [v, /* @__PURE__ */ (0, Q.jsx)("button", {
			type: "button",
			onClick: () => y(null),
			children: "Dismiss"
		})]
	}), /* @__PURE__ */ (0, Q.jsxs)(Pi, { children: [
		/* @__PURE__ */ (0, Q.jsx)(Mi, {
			path: "/welcome",
			element: ee
		}),
		/* @__PURE__ */ (0, Q.jsx)(Mi, {
			path: "/demo",
			element: ee
		}),
		/* @__PURE__ */ (0, Q.jsx)(Mi, {
			path: "/workspaces/:workspaceId",
			element: ee
		}),
		/* @__PURE__ */ (0, Q.jsx)(Mi, {
			path: "/workspaces/:workspaceId/home-assistant",
			element: /* @__PURE__ */ (0, Q.jsx)(Jo, {
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
			element: /* @__PURE__ */ (0, Q.jsx)(ts, {
				workspaceId: u.homeId,
				demoWorkspaceId: l
			})
		}),
		po.map(({ path: e, handle: t }) => /* @__PURE__ */ (0, Q.jsx)(Mi, {
			path: e,
			element: (t.mode === "construct" || t.mode === "furnish") && !t.panel && $o() && !es() ? e === "/build" ? /* @__PURE__ */ (0, Q.jsx)(ts, {
				workspaceId: u.homeId,
				demoWorkspaceId: l
			}) : /* @__PURE__ */ (0, Q.jsx)(ji, {
				to: mo(u.homeId, t.mode),
				replace: !0
			}) : N
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
function rs({ record: e, id: t }) {
	let [n, i] = (0, H.useState)(!1);
	return (0, H.useEffect)(() => {
		let t = !0;
		i(!1);
		let n = r([e.draft, e.published]);
		return n.length && O(window.indexedDB).verify(n).catch(() => {
			t && i(!0);
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
function is({ id: e, repository: t, onboarding: n, demoWorkspaceId: r }) {
	let a = X(), o = Jr(), s = (0, H.useCallback)((t) => Eo(e, t), [e]), c = n.state?.demoWorkspaceId === e, [l] = (0, H.useState)(() => be(window.indexedDB, e)), [u, d] = (0, H.useState)(null), [f, m] = (0, H.useState)(null);
	return (0, H.useEffect)(() => {
		let n = !0;
		return t.read(e).then(async (t) => {
			let r = t?.record ? {
				status: "ready",
				record: t.record
			} : await l.load();
			if (n) {
				if (!t) {
					m("This workspace is not saved in this browser.");
					return;
				}
				wo(e), d({
					record: r.record,
					metadata: t.metadata,
					...r.status === "recovery" ? {
						recoveryMessage: r.reason,
						recoveryRaw: r.raw
					} : {}
				});
			}
		}).catch((e) => {
			n && m(e instanceof Error ? e.message : "Could not load this home.");
		}), () => {
			n = !1;
		};
	}, [
		e,
		l,
		t
	]), (0, H.useEffect)(() => {
		let n = !0, r = () => {
			t.read(e).then((e) => {
				n && (e ? u && e.metadata.homeAssistantUrl !== u.metadata.homeAssistantUrl && m("This workspace's connection changed in another tab. Reopen it from Workspaces.") : m("This workspace was deleted in another tab."));
			}).catch(() => {
				n && m("Could not verify this workspace. Reopen it from Workspaces.");
			});
		};
		return window.addEventListener("focus", r), () => {
			n = !1, window.removeEventListener("focus", r);
		};
	}, [
		e,
		t,
		u
	]), f ? /* @__PURE__ */ (0, Q.jsxs)("main", {
		className: "direction-project-loading is-error",
		children: [
			/* @__PURE__ */ (0, Q.jsx)("strong", { children: "Could not open this workspace." }),
			/* @__PURE__ */ (0, Q.jsx)("p", { children: f }),
			/* @__PURE__ */ (0, Q.jsx)(Z, {
				to: "/workspaces?import=home-assistant",
				children: "Open from Home Assistant"
			}),
			/* @__PURE__ */ (0, Q.jsx)(Z, {
				to: "/workspaces",
				children: "Workspaces"
			})
		]
	}) : u ? /* @__PURE__ */ (0, Q.jsx)(i.Provider, {
		value: s,
		children: /* @__PURE__ */ (0, Q.jsx)(p, {
			hostSession: c ? null : void 0,
			homeAssistantUrl: c ? null : u.metadata.homeAssistantUrl,
			children: /* @__PURE__ */ (0, Q.jsxs)(Wo, {
				id: e,
				origin: u.metadata.homeAssistantUrl,
				repository: t,
				hidden: c,
				children: [/* @__PURE__ */ (0, Q.jsx)(rs, {
					record: u.record,
					id: e
				}), /* @__PURE__ */ (0, Q.jsx)(ns, {
					demoWorkspaceId: r,
					onboarding: {
						isDemo: c,
						welcome: c && a.pathname === "/welcome",
						nudgeDismissed: n.state?.nudgeDismissed ?? !0,
						busy: n.busy,
						start: n.start,
						dismiss: async (e) => {
							e === "welcome" && o("/demo"), await n.dismiss(e);
						},
						openWelcome: () => void o("/welcome"),
						links: Oo
					},
					record: u.record,
					lifecycle: l,
					recoveryMessage: u.recoveryMessage,
					recoveryRaw: u.recoveryRaw,
					homeAssistantUrl: u.metadata.homeAssistantUrl,
					onHomeAssistantUrlChange: async (n, r) => {
						let i = await t.setConnection(e, (r ?? u.record).revision, n);
						if (!i.record) throw Error("Could not save the connection.");
						return d((e) => e && {
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
function as({ onboarding: e }) {
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
var os = "cabane:ha-url:v1", ss = "cabane:ha-auth:v1";
function cs(e) {
	return m(e.getItem(os));
}
async function ls(e, t, n) {
	if (await e.migrationDone()) return;
	let r = await e.read(t);
	if (r?.error) return;
	let i = cs(n);
	r?.record && i && !r.metadata.homeAssistantUrl && (r = await e.setConnection(t, r.record.revision, i)), r?.record && i && await z(r.record, i);
	let a = n.getItem(ss);
	if (a) {
		let e = JSON.parse(a), t = m(e.hassUrl);
		if (!t || !e.clientId) throw Error("The saved Home Assistant sign-in needs recovery.");
		let r = c(t, e.clientId);
		if (n.getItem(r) === null && n.setItem(r, a), !d(n, t, e.clientId)) throw Error("Could not preserve the saved Home Assistant sign-in.");
	}
	n.removeItem(ss), n.removeItem(os), r?.record && i && (n.removeItem(N(i, t)), n.removeItem(k(i, t))), await e.finishMigration();
}
//#endregion
//#region apps/web/src/workspaces/initialize-workspaces.ts
async function us(e, t, { skipLegacyMigration: n = !1 } = {}) {
	let r = v(e, B), i, a = null;
	try {
		!n && !await r.migrationDone() && (a = cs(t));
	} catch (e) {
		i = e instanceof Error ? e.message : "Saved connection data needs recovery.";
	}
	let o = {
		...se,
		home: {
			...se.home,
			name: "Demo home"
		}
	};
	await r.initialize(o, a);
	try {
		n || await ls(r, se.home.id, t);
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
function ds() {
	let e = X(), t = f(), n = Jr(), [r, i] = (0, H.useState)(null);
	(0, H.useEffect)(() => {
		e.pathname !== "/" && i(null);
	}, [e.pathname]);
	let [a, o] = (0, H.useState)(null), s = Ao(a), [c, l] = (0, H.useState)(null), [d, p] = (0, H.useState)(null), [m, h] = (0, H.useState)(), [g] = (0, H.useState)(() => !!t), [_] = (0, H.useState)(() => t ? null : xe());
	(0, H.useEffect)(() => {
		let e = !0;
		return us(window.indexedDB, window.localStorage, { skipLegacyMigration: g }).then(async (t) => {
			let n = await t.repository.list();
			e && (o(t.repository), l(n), h(t.migrationError));
		}).catch((t) => {
			e && p(t instanceof Error ? t.message : "Browser storage is unavailable.");
		}), () => {
			e = !1;
		};
	}, [g]);
	let v = (0, H.useCallback)(async () => {
		a && l(await a.list());
	}, [a]);
	(0, H.useEffect)(() => {
		if (e.pathname !== "/" && e.pathname !== "/workspaces") return;
		let t = () => {
			v().catch((e) => p(String(e)));
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
	if (!a || !c) return /* @__PURE__ */ (0, Q.jsx)("main", {
		className: "direction-project-loading",
		children: "Loading your workspaces…"
	});
	if (e.pathname.startsWith("/open/")) return /* @__PURE__ */ (0, Q.jsx)(bo, {
		repository: a,
		onOpened: y
	});
	let b = !t && e.pathname !== "/workspaces" && new URLSearchParams(e.search).has("auth_callback"), x = b ? _ : null;
	if (b) {
		if (!x || !c.some((e) => e.metadata.id === x.workspaceId)) return /* @__PURE__ */ (0, Q.jsxs)("main", {
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
		if (go(e.pathname) !== x.workspaceId) return /* @__PURE__ */ (0, Q.jsx)(ji, {
			to: `${$(x.workspaceId)}${e.search}`,
			replace: !0
		});
	}
	if (e.pathname === "/") {
		if (r) return /* @__PURE__ */ (0, Q.jsx)(ji, {
			to: r,
			replace: !0
		});
		if (!s.loaded) return /* @__PURE__ */ (0, Q.jsx)("main", {
			className: "direction-project-loading",
			children: "Loading your home…"
		});
		if (t && s.state && !s.state.welcomeDismissed && c.length === 1 && c[0].metadata.id === s.state.demoWorkspaceId) return /* @__PURE__ */ (0, Q.jsx)(oo, {
			session: t,
			repository: a,
			onRestored: async (e) => {
				i($(e)), await v(), await s.dismiss("welcome");
			},
			onBuild: async () => {
				i("/build");
			},
			onExplore: async () => {
				i("/demo"), await s.dismiss("welcome");
			},
			onCancel: async () => {
				i("/workspaces"), await s.dismiss("welcome");
			}
		});
		let e = c.find((e) => e.metadata.id === Co()) ?? (c.length === 1 ? c[0] : void 0);
		return e && s.state && e.metadata.id === s.state.demoWorkspaceId ? /* @__PURE__ */ (0, Q.jsx)(ji, {
			to: s.state.welcomeDismissed ? "/demo" : "/welcome",
			replace: !0
		}) : /* @__PURE__ */ (0, Q.jsx)(ji, {
			to: e ? $(e.metadata.id) : "/workspaces",
			replace: !0
		});
	}
	let S = e.pathname === "/welcome" || e.pathname === "/demo", C = e.pathname === "/build";
	if ((S || C) && !s.loaded) return /* @__PURE__ */ (0, Q.jsx)("main", {
		className: "direction-project-loading",
		children: "Loading your home…"
	});
	if (S && !c.some((e) => e.metadata.id === s.state?.demoWorkspaceId)) return /* @__PURE__ */ (0, Q.jsxs)("main", {
		className: "direction-project-loading is-error",
		children: [/* @__PURE__ */ (0, Q.jsx)("strong", { children: "The demo home is no longer in this browser." }), /* @__PURE__ */ (0, Q.jsx)(Z, {
			to: "/workspaces",
			children: "Workspaces"
		})]
	});
	if (C && !s.state?.destinations.build) return /* @__PURE__ */ (0, Q.jsx)(as, { onboarding: s });
	let w = S ? s.state?.demoWorkspaceId : C ? s.state?.destinations.build : go(e.pathname);
	if (w) return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [s.error && /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "workspace-connection-error",
		role: "alert",
		children: [
			s.error,
			s.deleted && /* @__PURE__ */ (0, Q.jsx)("button", {
				disabled: s.busy,
				onClick: () => void s.start(s.deleted.path, s.deleted.id),
				children: "Create a new home"
			}),
			/* @__PURE__ */ (0, Q.jsx)("button", {
				onClick: () => void n("/workspaces"),
				children: "Workspaces"
			}),
			/* @__PURE__ */ (0, Q.jsx)("button", {
				onClick: s.clearError,
				children: "Dismiss"
			})
		]
	}), s.loaded ? /* @__PURE__ */ (0, Q.jsx)(is, {
		id: w,
		repository: a,
		onboarding: s,
		demoWorkspaceId: c.some((e) => e.metadata.id === s.state?.demoWorkspaceId) ? s.state?.demoWorkspaceId ?? null : null
	}, w) : /* @__PURE__ */ (0, Q.jsx)("main", {
		className: "direction-project-loading",
		children: "Loading your home…"
	})] });
	if (e.pathname !== "/workspaces") return /* @__PURE__ */ (0, Q.jsx)(ji, {
		to: "/",
		replace: !0
	});
	let T = (e) => {
		let t = c.find((t) => t.metadata.id === e);
		if (!t) throw Error("Workspace no longer exists. Refresh the library.");
		return t;
	}, E = (e) => {
		let t = T(e);
		if (!t.record) throw Error(t.error ?? "This home needs recovery.");
		return t.record;
	}, D = async (e) => {
		await n($(e));
	}, O = async (e) => {
		let t = T(e), n = await a.readRaw(e);
		if (t.record && (await a.read(e))?.record?.revision !== t.record.revision) throw Error("This workspace changed. Refresh before deleting it.");
		await a.delete(e, n), await fe(e), Do(e), Te(e);
		try {
			window.localStorage.removeItem(u(e));
		} catch {}
	};
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [m && /* @__PURE__ */ (0, Q.jsxs)("p", {
		role: "alert",
		className: "workspace-error",
		children: [m, " Your saved source data has been retained."]
	}), /* @__PURE__ */ (0, Q.jsx)(Fo, {
		demoWorkspaceId: s.state?.demoWorkspaceId,
		onSettings: async (e, t) => {
			await n(`${$(e)}/home-assistant${t ? `?action=${t}` : ""}`);
		},
		entries: c,
		onOpen: D,
		onRecover: D,
		onCreate: async (e) => {
			let t = await a.createBlank(e);
			he(t.metadata.id), await v(), await D(t.metadata.id);
		},
		onRename: async (e, t) => {
			await a.rename(e, E(e).revision, t), await v();
		},
		onDuplicate: async (e, t) => {
			await a.duplicate(e, E(e).revision, t), await v();
		},
		renderDelete: (e, t, n) => /* @__PURE__ */ (0, Q.jsx)(to, {
			repository: a,
			target: { entry: e },
			onDeleteLocal: () => O(e.metadata.id),
			onDeleted: async () => {
				await v(), t();
			},
			onCancel: t,
			onBusyChange: n
		}),
		onImport: async (e) => {
			let t = de(e, B), n = await a.create(t.record, t);
			await v(), await D(n.metadata.id);
		},
		onExport: async (e, t) => {
			let n = T(e), r = E(e), i = t ? le(n.metadata, r) : j(r.draft);
			await Ee(i, `${e}-${t ? "backup" : "project"}.cabane`);
		},
		onExportRaw: async (e) => {
			let t = await a.readRaw(e);
			if (t === null) throw Error("No saved record exists.");
			R(t, `${e}-recovery.json`);
		},
		renderSuggestions: (e, t) => /* @__PURE__ */ (0, Q.jsx)(ao, {
			repository: a,
			onRestored: y,
			localWorkspaceIds: c.map((e) => e.metadata.id),
			busy: e,
			onBusyChange: t
		}),
		remoteImport: /* @__PURE__ */ (0, Q.jsx)(io, {
			repository: a,
			onRestored: async (e) => {
				await v(), await D(e);
			},
			initialOrigin: c.find((e) => e.metadata.homeAssistantUrl)?.metadata.homeAssistantUrl ?? null
		})
	})] });
}
//#endregion
//#region apps/web/src/panel/panel-element.ts
var fs = /* @__PURE__ */ new WeakMap();
function ps(e, t) {
	let n = fs.get(e);
	n || fs.set(e, n = /* @__PURE__ */ new Map());
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
function ms(e) {
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
			this.ownerDocument.defaultView?.addEventListener("resize", this.#c), this.#r ??= ps(this.ownerDocument, new URL("cabane-fonts.css", e.assetBaseUrl).href), typeof ResizeObserver < "u" && (this.#n = new ResizeObserver(() => this.#l()), this.#n.observe(this.#i)), this.#l(), this.#u();
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
var hs = new URL(
	/* @vite-ignore */
	"./",
	import.meta.url
).href;
customElements.get("cabane-panel") || customElements.define("cabane-panel", ms({
	assetBaseUrl: hs,
	mount({ container: e, portalContainer: t, root: n, session: r }) {
		let i = (0, Pa.createRoot)(e), a = Ti([{
			path: "*",
			errorElement: /* @__PURE__ */ (0, Q.jsx)(Ma, {}),
			element: /* @__PURE__ */ (0, Q.jsx)(ds, {})
		}], { initialEntries: ["/"] }), o = {
			root: n,
			container: e,
			portalContainer: t,
			eventTarget: n,
			assetBaseUrl: hs
		}, s = (e) => i.render(/* @__PURE__ */ (0, Q.jsx)(H.StrictMode, { children: /* @__PURE__ */ (0, Q.jsx)(Na, { children: /* @__PURE__ */ (0, Q.jsx)(g, {
			environment: o,
			children: /* @__PURE__ */ (0, Q.jsx)(ee, {
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
