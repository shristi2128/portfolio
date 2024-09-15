var lv = Object.defineProperty;
var cv = (r, e, t) => e in r ? lv(r, e, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: t
}) : r[e] = t;
var ne = (r, e, t) => (cv(r, typeof e != "symbol" ? e + "" : e, t), t);
(function() {
	const e = document.createElement("link").relList;
	if (e && e.supports && e.supports("modulepreload")) return;
	for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
	new MutationObserver(i => {
		for (const s of i)
			if (s.type === "childList")
				for (const o of s.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && n(o)
	}).observe(document, {
		childList: !0,
		subtree: !0
	});

	function t(i) {
		const s = {};
		return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
	}

	function n(i) {
		if (i.ep) return;
		i.ep = !0;
		const s = t(i);
		fetch(i.href, s)
	}
})();

function Ff(r, e) {
	for (var t = 0; t < e.length; t++) {
		var n = e[t];
		n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n)
	}
}

function Du(r, e, t) {
	return e && Ff(r.prototype, e), t && Ff(r, t), r
}

function Fr() {
	return (Fr = Object.assign || function(r) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n])
		}
		return r
	}).apply(this, arguments)
}

function sc(r, e) {
	r.prototype = Object.create(e.prototype), r.prototype.constructor = r, r.__proto__ = e
}

function tg(r) {
	return (tg = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e)
	})(r)
}

function Iu(r, e) {
	return (Iu = Object.setPrototypeOf || function(t, n) {
		return t.__proto__ = n, t
	})(r, e)
}

function ng(r, e, t) {
	return (ng = function() {
		if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
		} catch {
			return !1
		}
	}() ? Reflect.construct : function(n, i, s) {
		var o = [null];
		o.push.apply(o, i);
		var a = new(Function.bind.apply(n, o));
		return s && Iu(a, s.prototype), a
	}).apply(null, arguments)
}

function ig(r) {
	var e = typeof Map == "function" ? new Map : void 0;
	return (ig = function(t) {
		if (t === null || Function.toString.call(t).indexOf("[native code]") === -1) return t;
		if (typeof t != "function") throw new TypeError("Super expression must either be null or a function");
		if (e !== void 0) {
			if (e.has(t)) return e.get(t);
			e.set(t, n)
		}

		function n() {
			return ng(t, arguments, tg(this).constructor)
		}
		return n.prototype = Object.create(t.prototype, {
			constructor: {
				value: n,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), Iu(n, t)
	})(r)
}

function Ts(r, e) {
	try {
		var t = r()
	} catch (n) {
		return e(n)
	}
	return t && t.then ? t.then(void 0, e) : t
}
typeof Symbol < "u" && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), typeof Symbol < "u" && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
var Ki, hv = "2.9.7",
	uv = function() {};
(function(r) {
	r[r.off = 0] = "off", r[r.error = 1] = "error", r[r.warning = 2] = "warning", r[r.info = 3] = "info", r[r.debug = 4] = "debug"
})(Ki || (Ki = {}));
var zf = Ki.off,
	zr = function() {
		function r(t) {
			this.t = t
		}
		r.getLevel = function() {
			return zf
		}, r.setLevel = function(t) {
			return zf = Ki[t]
		};
		var e = r.prototype;
		return e.error = function() {
			for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
			this.i(console.error, Ki.error, n)
		}, e.warn = function() {
			for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
			this.i(console.warn, Ki.warning, n)
		}, e.info = function() {
			for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
			this.i(console.info, Ki.info, n)
		}, e.debug = function() {
			for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
			this.i(console.log, Ki.debug, n)
		}, e.i = function(t, n, i) {
			n <= r.getLevel() && t.apply(console, ["[" + this.t + "] "].concat(i))
		}, r
	}(),
	Cr = Ou,
	fv = sg,
	dv = Fu,
	pv = og,
	mv = ag,
	rg = "/",
	gv = new RegExp(["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"), "g");

function Fu(r, e) {
	for (var t, n = [], i = 0, s = 0, o = "", a = e && e.delimiter || rg, l = e && e.whitelist || void 0, c = !1;
		(t = gv.exec(r)) !== null;) {
		var h = t[0],
			u = t[1],
			f = t.index;
		if (o += r.slice(s, f), s = f + h.length, u) o += u[1], c = !0;
		else {
			var d = "",
				p = t[2],
				m = t[3],
				v = t[4],
				g = t[5];
			if (!c && o.length) {
				var _ = o.length - 1,
					w = o[_];
				(!l || l.indexOf(w) > -1) && (d = w, o = o.slice(0, _))
			}
			o && (n.push(o), o = "", c = !1);
			var x = m || v,
				y = d || a;
			n.push({
				name: p || i++,
				prefix: d,
				delimiter: y,
				optional: g === "?" || g === "*",
				repeat: g === "+" || g === "*",
				pattern: x ? _v(x) : "[^" + Ri(y === a ? y : y + a) + "]+?"
			})
		}
	}
	return (o || s < r.length) && n.push(o + r.substr(s)), n
}

function sg(r, e) {
	return function(t, n) {
		var i = r.exec(t);
		if (!i) return !1;
		for (var s = i[0], o = i.index, a = {}, l = n && n.decode || decodeURIComponent, c = 1; c < i.length; c++)
			if (i[c] !== void 0) {
				var h = e[c - 1];
				a[h.name] = h.repeat ? i[c].split(h.delimiter).map(function(u) {
					return l(u, h)
				}) : l(i[c], h)
			} return {
			path: s,
			index: o,
			params: a
		}
	}
}

function og(r, e) {
	for (var t = new Array(r.length), n = 0; n < r.length; n++) typeof r[n] == "object" && (t[n] = new RegExp("^(?:" + r[n].pattern + ")$", zu(e)));
	return function(i, s) {
		for (var o = "", a = s && s.encode || encodeURIComponent, l = !s || s.validate !== !1, c = 0; c < r.length; c++) {
			var h = r[c];
			if (typeof h != "string") {
				var u, f = i ? i[h.name] : void 0;
				if (Array.isArray(f)) {
					if (!h.repeat) throw new TypeError('Expected "' + h.name + '" to not repeat, but got array');
					if (f.length === 0) {
						if (h.optional) continue;
						throw new TypeError('Expected "' + h.name + '" to not be empty')
					}
					for (var d = 0; d < f.length; d++) {
						if (u = a(f[d], h), l && !t[c].test(u)) throw new TypeError('Expected all "' + h.name + '" to match "' + h.pattern + '"');
						o += (d === 0 ? h.prefix : h.delimiter) + u
					}
				} else if (typeof f != "string" && typeof f != "number" && typeof f != "boolean") {
					if (!h.optional) throw new TypeError('Expected "' + h.name + '" to be ' + (h.repeat ? "an array" : "a string"))
				} else {
					if (u = a(String(f), h), l && !t[c].test(u)) throw new TypeError('Expected "' + h.name + '" to match "' + h.pattern + '", but got "' + u + '"');
					o += h.prefix + u
				}
			} else o += h
		}
		return o
	}
}

function Ri(r) {
	return r.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
}

function _v(r) {
	return r.replace(/([=!:$/()])/g, "\\$1")
}

function zu(r) {
	return r && r.sensitive ? "" : "i"
}

function ag(r, e, t) {
	for (var n = (t = t || {}).strict, i = t.start !== !1, s = t.end !== !1, o = t.delimiter || rg, a = [].concat(t.endsWith || []).map(Ri).concat("$").join("|"), l = i ? "^" : "", c = 0; c < r.length; c++) {
		var h = r[c];
		if (typeof h == "string") l += Ri(h);
		else {
			var u = h.repeat ? "(?:" + h.pattern + ")(?:" + Ri(h.delimiter) + "(?:" + h.pattern + "))*" : h.pattern;
			e && e.push(h), l += h.optional ? h.prefix ? "(?:" + Ri(h.prefix) + "(" + u + "))?" : "(" + u + ")?" : Ri(h.prefix) + "(" + u + ")"
		}
	}
	if (s) n || (l += "(?:" + Ri(o) + ")?"), l += a === "$" ? "$" : "(?=" + a + ")";
	else {
		var f = r[r.length - 1],
			d = typeof f == "string" ? f[f.length - 1] === o : f === void 0;
		n || (l += "(?:" + Ri(o) + "(?=" + a + "))?"), d || (l += "(?=" + Ri(o) + "|" + a + ")")
	}
	return new RegExp(l, zu(t))
}

function Ou(r, e, t) {
	return r instanceof RegExp ? function(n, i) {
		if (!i) return n;
		var s = n.source.match(/\((?!\?)/g);
		if (s)
			for (var o = 0; o < s.length; o++) i.push({
				name: o,
				prefix: null,
				delimiter: null,
				optional: !1,
				repeat: !1,
				pattern: null
			});
		return n
	}(r, e) : Array.isArray(r) ? function(n, i, s) {
		for (var o = [], a = 0; a < n.length; a++) o.push(Ou(n[a], i, s).source);
		return new RegExp("(?:" + o.join("|") + ")", zu(s))
	}(r, e, t) : function(n, i, s) {
		return ag(Fu(n, s), i, s)
	}(r, e, t)
}
Cr.match = function(r, e) {
	var t = [];
	return sg(Ou(r, t, e), t)
}, Cr.regexpToFunction = fv, Cr.parse = dv, Cr.compile = function(r, e) {
	return og(Fu(r, e), e)
}, Cr.tokensToFunction = pv, Cr.tokensToRegExp = mv;
var _i = {
		container: "container",
		history: "history",
		namespace: "namespace",
		prefix: "data-barba",
		prevent: "prevent",
		wrapper: "wrapper"
	},
	Or = new(function() {
		function r() {
			this.o = _i, this.u = new DOMParser
		}
		var e = r.prototype;
		return e.toString = function(t) {
			return t.outerHTML
		}, e.toDocument = function(t) {
			return this.u.parseFromString(t, "text/html")
		}, e.toElement = function(t) {
			var n = document.createElement("div");
			return n.innerHTML = t, n
		}, e.getHtml = function(t) {
			return t === void 0 && (t = document), this.toString(t.documentElement)
		}, e.getWrapper = function(t) {
			return t === void 0 && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]')
		}, e.getContainer = function(t) {
			return t === void 0 && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]')
		}, e.removeContainer = function(t) {
			document.body.contains(t) && t.parentNode.removeChild(t)
		}, e.addContainer = function(t, n) {
			var i = this.getContainer();
			i ? this.s(t, i) : n.appendChild(t)
		}, e.getNamespace = function(t) {
			t === void 0 && (t = document);
			var n = t.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]");
			return n ? n.getAttribute(this.o.prefix + "-" + this.o.namespace) : null
		}, e.getHref = function(t) {
			if (t.tagName && t.tagName.toLowerCase() === "a") {
				if (typeof t.href == "string") return t.href;
				var n = t.getAttribute("href") || t.getAttribute("xlink:href");
				if (n) return this.resolveUrl(n.baseVal || n)
			}
			return null
		}, e.resolveUrl = function() {
			for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
			var s = n.length;
			if (s === 0) throw new Error("resolveUrl requires at least one argument; got none.");
			var o = document.createElement("base");
			if (o.href = arguments[0], s === 1) return o.href;
			var a = document.getElementsByTagName("head")[0];
			a.insertBefore(o, a.firstChild);
			for (var l, c = document.createElement("a"), h = 1; h < s; h++) c.href = arguments[h], o.href = l = c.href;
			return a.removeChild(o), l
		}, e.s = function(t, n) {
			n.parentNode.insertBefore(t, n.nextSibling)
		}, r
	}()),
	lg = new(function() {
		function r() {
			this.h = [], this.v = -1
		}
		var e = r.prototype;
		return e.init = function(t, n) {
			this.l = "barba";
			var i = {
				ns: n,
				scroll: {
					x: window.scrollX,
					y: window.scrollY
				},
				url: t
			};
			this.h.push(i), this.v = 0;
			var s = {
				from: this.l,
				index: 0,
				states: [].concat(this.h)
			};
			window.history && window.history.replaceState(s, "", t)
		}, e.change = function(t, n, i) {
			if (i && i.state) {
				var s = i.state,
					o = s.index;
				n = this.m(this.v - o), this.replace(s.states), this.v = o
			} else this.add(t, n);
			return n
		}, e.add = function(t, n) {
			var i = this.size,
				s = this.p(n),
				o = {
					ns: "tmp",
					scroll: {
						x: window.scrollX,
						y: window.scrollY
					},
					url: t
				};
			this.h.push(o), this.v = i;
			var a = {
				from: this.l,
				index: i,
				states: [].concat(this.h)
			};
			switch (s) {
				case "push":
					window.history && window.history.pushState(a, "", t);
					break;
				case "replace":
					window.history && window.history.replaceState(a, "", t)
			}
		}, e.update = function(t, n) {
			var i = n || this.v,
				s = Fr({}, this.get(i), {}, t);
			this.set(i, s)
		}, e.remove = function(t) {
			t ? this.h.splice(t, 1) : this.h.pop(), this.v--
		}, e.clear = function() {
			this.h = [], this.v = -1
		}, e.replace = function(t) {
			this.h = t
		}, e.get = function(t) {
			return this.h[t]
		}, e.set = function(t, n) {
			return this.h[t] = n
		}, e.p = function(t) {
			var n = "push",
				i = t,
				s = _i.prefix + "-" + _i.history;
			return i.hasAttribute && i.hasAttribute(s) && (n = i.getAttribute(s)), n
		}, e.m = function(t) {
			return Math.abs(t) > 1 ? t > 0 ? "forward" : "back" : t === 0 ? "popstate" : t > 0 ? "back" : "forward"
		}, Du(r, [{
			key: "current",
			get: function() {
				return this.h[this.v]
			}
		}, {
			key: "state",
			get: function() {
				return this.h[this.h.length - 1]
			}
		}, {
			key: "previous",
			get: function() {
				return this.v < 1 ? null : this.h[this.v - 1]
			}
		}, {
			key: "size",
			get: function() {
				return this.h.length
			}
		}]), r
	}()),
	kl = function(r, e) {
		try {
			var t = function() {
				if (!e.next.html) return Promise.resolve(r).then(function(n) {
					var i = e.next;
					if (n) {
						var s = Or.toElement(n);
						i.namespace = Or.getNamespace(s), i.container = Or.getContainer(s), i.html = n, lg.update({
							ns: i.namespace
						});
						var o = Or.toDocument(n);
						document.title = o.title
					}
				})
			}();
			return Promise.resolve(t && t.then ? t.then(function() {}) : void 0)
		} catch (n) {
			return Promise.reject(n)
		}
	},
	cg = Cr,
	vv = {
		__proto__: null,
		update: kl,
		nextTick: function() {
			return new Promise(function(r) {
				window.requestAnimationFrame(r)
			})
		},
		pathToRegexp: cg
	},
	hg = function() {
		return window.location.origin
	},
	ia = function(r) {
		return r === void 0 && (r = window.location.href), Ul(r).port
	},
	Ul = function(r) {
		var e, t = r.match(/:\d+/);
		if (t === null) /^http/.test(r) && (e = 80), /^https/.test(r) && (e = 443);
		else {
			var n = t[0].substring(1);
			e = parseInt(n, 10)
		}
		var i, s = r.replace(hg(), ""),
			o = {},
			a = s.indexOf("#");
		a >= 0 && (i = s.slice(a + 1), s = s.slice(0, a));
		var l = s.indexOf("?");
		return l >= 0 && (o = ug(s.slice(l + 1)), s = s.slice(0, l)), {
			hash: i,
			path: s,
			port: e,
			query: o
		}
	},
	ug = function(r) {
		return r.split("&").reduce(function(e, t) {
			var n = t.split("=");
			return e[n[0]] = n[1], e
		}, {})
	},
	Dh = function(r) {
		return r === void 0 && (r = window.location.href), r.replace(/(\/#.*|\/|#.*)$/, "")
	},
	xv = {
		__proto__: null,
		getHref: function() {
			return window.location.href
		},
		getOrigin: hg,
		getPort: ia,
		getPath: function(r) {
			return r === void 0 && (r = window.location.href), Ul(r).path
		},
		parse: Ul,
		parseQuery: ug,
		clean: Dh
	};

function yv(r, e, t) {
	return e === void 0 && (e = 2e3), new Promise(function(n, i) {
		var s = new XMLHttpRequest;
		s.onreadystatechange = function() {
			if (s.readyState === XMLHttpRequest.DONE) {
				if (s.status === 200) n(s.responseText);
				else if (s.status) {
					var o = {
						status: s.status,
						statusText: s.statusText
					};
					t(r, o), i(o)
				}
			}
		}, s.ontimeout = function() {
			var o = new Error("Timeout error [" + e + "]");
			t(r, o), i(o)
		}, s.onerror = function() {
			var o = new Error("Fetch error");
			t(r, o), i(o)
		}, s.open("GET", r), s.timeout = e, s.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"), s.setRequestHeader("x-barba", "yes"), s.send()
	})
}
var wv = function(r) {
	return !!r && (typeof r == "object" || typeof r == "function") && typeof r.then == "function"
};

function Ps(r, e) {
	return e === void 0 && (e = {}),
		function() {
			for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
			var s = !1,
				o = new Promise(function(a, l) {
					e.async = function() {
						return s = !0,
							function(h, u) {
								h ? l(h) : a(u)
							}
					};
					var c = r.apply(e, n);
					s || (wv(c) ? c.then(a, l) : a(c))
				});
			return o
		}
}
var Qi = new(function(r) {
		function e() {
			var n;
			return (n = r.call(this) || this).logger = new zr("@barba/core"), n.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeOnce", "once", "afterOnce", "before", "beforeLeave", "leave", "afterLeave", "beforeEnter", "enter", "afterEnter", "after"], n.registered = new Map, n.init(), n
		}
		sc(e, r);
		var t = e.prototype;
		return t.init = function() {
			var n = this;
			this.registered.clear(), this.all.forEach(function(i) {
				n[i] || (n[i] = function(s, o) {
					n.registered.has(i) || n.registered.set(i, new Set), n.registered.get(i).add({
						ctx: o || {},
						fn: s
					})
				})
			})
		}, t.do = function(n) {
			for (var i = this, s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), a = 1; a < s; a++) o[a - 1] = arguments[a];
			if (this.registered.has(n)) {
				var l = Promise.resolve();
				return this.registered.get(n).forEach(function(c) {
					l = l.then(function() {
						return Ps(c.fn, c.ctx).apply(void 0, o)
					})
				}), l.catch(function(c) {
					i.logger.debug("Hook error [" + n + "]"), i.logger.error(c)
				})
			}
			return Promise.resolve()
		}, t.clear = function() {
			var n = this;
			this.all.forEach(function(i) {
				delete n[i]
			}), this.init()
		}, t.help = function() {
			this.logger.info("Available hooks: " + this.all.join(","));
			var n = [];
			this.registered.forEach(function(i, s) {
				return n.push(s)
			}), this.logger.info("Registered hooks: " + n.join(","))
		}, e
	}(uv)),
	fg = function() {
		function r(e) {
			if (this.P = [], typeof e == "boolean") this.g = e;
			else {
				var t = Array.isArray(e) ? e : [e];
				this.P = t.map(function(n) {
					return cg(n)
				})
			}
		}
		return r.prototype.checkHref = function(e) {
			if (typeof this.g == "boolean") return this.g;
			var t = Ul(e).path;
			return this.P.some(function(n) {
				return n.exec(t) !== null
			})
		}, r
	}(),
	bv = function(r) {
		function e(n) {
			var i;
			return (i = r.call(this, n) || this).k = new Map, i
		}
		sc(e, r);
		var t = e.prototype;
		return t.set = function(n, i, s) {
			return this.k.set(n, {
				action: s,
				request: i
			}), {
				action: s,
				request: i
			}
		}, t.get = function(n) {
			return this.k.get(n)
		}, t.getRequest = function(n) {
			return this.k.get(n).request
		}, t.getAction = function(n) {
			return this.k.get(n).action
		}, t.has = function(n) {
			return !this.checkHref(n) && this.k.has(n)
		}, t.delete = function(n) {
			return this.k.delete(n)
		}, t.update = function(n, i) {
			var s = Fr({}, this.k.get(n), {}, i);
			return this.k.set(n, s), s
		}, e
	}(fg),
	Mv = function() {
		return !window.history.pushState
	},
	Sv = function(r) {
		return !r.el || !r.href
	},
	Tv = function(r) {
		var e = r.event;
		return e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey
	},
	Ev = function(r) {
		var e = r.el;
		return e.hasAttribute("target") && e.target === "_blank"
	},
	Av = function(r) {
		var e = r.el;
		return e.protocol !== void 0 && window.location.protocol !== e.protocol || e.hostname !== void 0 && window.location.hostname !== e.hostname
	},
	Cv = function(r) {
		var e = r.el;
		return e.port !== void 0 && ia() !== ia(e.href)
	},
	Lv = function(r) {
		var e = r.el;
		return e.getAttribute && typeof e.getAttribute("download") == "string"
	},
	Rv = function(r) {
		return r.el.hasAttribute(_i.prefix + "-" + _i.prevent)
	},
	Pv = function(r) {
		return !!r.el.closest("[" + _i.prefix + "-" + _i.prevent + '="all"]')
	},
	Dv = function(r) {
		var e = r.href;
		return Dh(e) === Dh() && ia(e) === ia()
	},
	Iv = function(r) {
		function e(n) {
			var i;
			return (i = r.call(this, n) || this).suite = [], i.tests = new Map, i.init(), i
		}
		sc(e, r);
		var t = e.prototype;
		return t.init = function() {
			this.add("pushState", Mv), this.add("exists", Sv), this.add("newTab", Tv), this.add("blank", Ev), this.add("corsDomain", Av), this.add("corsPort", Cv), this.add("download", Lv), this.add("preventSelf", Rv), this.add("preventAll", Pv), this.add("sameUrl", Dv, !1)
		}, t.add = function(n, i, s) {
			s === void 0 && (s = !0), this.tests.set(n, i), s && this.suite.push(n)
		}, t.run = function(n, i, s, o) {
			return this.tests.get(n)({
				el: i,
				event: s,
				href: o
			})
		}, t.checkLink = function(n, i, s) {
			var o = this;
			return this.suite.some(function(a) {
				return o.run(a, n, i, s)
			})
		}, e
	}(fg),
	Ec = function(r) {
		function e(t, n) {
			var i;
			n === void 0 && (n = "Barba error");
			for (var s = arguments.length, o = new Array(s > 2 ? s - 2 : 0), a = 2; a < s; a++) o[a - 2] = arguments[a];
			return (i = r.call.apply(r, [this].concat(o)) || this).error = t, i.label = n, Error.captureStackTrace && Error.captureStackTrace(function(l) {
				if (l === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return l
			}(i), e), i.name = "BarbaError", i
		}
		return sc(e, r), e
	}(ig(Error)),
	Fv = function() {
		function r(t) {
			t === void 0 && (t = []), this.logger = new zr("@barba/core"), this.all = [], this.page = [], this.once = [], this.A = [{
				name: "namespace",
				type: "strings"
			}, {
				name: "custom",
				type: "function"
			}], t && (this.all = this.all.concat(t)), this.update()
		}
		var e = r.prototype;
		return e.add = function(t, n) {
			switch (t) {
				case "rule":
					this.A.splice(n.position || 0, 0, n.value);
					break;
				case "transition":
				default:
					this.all.push(n)
			}
			this.update()
		}, e.resolve = function(t, n) {
			var i = this;
			n === void 0 && (n = {});
			var s = n.once ? this.once : this.page;
			s = s.filter(n.self ? function(f) {
				return f.name && f.name === "self"
			} : function(f) {
				return !f.name || f.name !== "self"
			});
			var o = new Map,
				a = s.find(function(f) {
					var d = !0,
						p = {};
					return !(!n.self || f.name !== "self") || (i.A.reverse().forEach(function(m) {
						d && (d = i.R(f, m, t, p), f.from && f.to && (d = i.R(f, m, t, p, "from") && i.R(f, m, t, p, "to")), f.from && !f.to && (d = i.R(f, m, t, p, "from")), !f.from && f.to && (d = i.R(f, m, t, p, "to")))
					}), o.set(f, p), d)
				}),
				l = o.get(a),
				c = [];
			if (c.push(n.once ? "once" : "page"), n.self && c.push("self"), l) {
				var h, u = [a];
				Object.keys(l).length > 0 && u.push(l), (h = this.logger).info.apply(h, ["Transition found [" + c.join(",") + "]"].concat(u))
			} else this.logger.info("No transition found [" + c.join(",") + "]");
			return a
		}, e.update = function() {
			var t = this;
			this.all = this.all.map(function(n) {
				return t.T(n)
			}).sort(function(n, i) {
				return n.priority - i.priority
			}).reverse().map(function(n) {
				return delete n.priority, n
			}), this.page = this.all.filter(function(n) {
				return n.leave !== void 0 || n.enter !== void 0
			}), this.once = this.all.filter(function(n) {
				return n.once !== void 0
			})
		}, e.R = function(t, n, i, s, o) {
			var a = !0,
				l = !1,
				c = t,
				h = n.name,
				u = h,
				f = h,
				d = h,
				p = o ? c[o] : c,
				m = o === "to" ? i.next : i.current;
			if (o ? p && p[h] : p[h]) {
				switch (n.type) {
					case "strings":
					default:
						var v = Array.isArray(p[u]) ? p[u] : [p[u]];
						m[u] && v.indexOf(m[u]) !== -1 && (l = !0), v.indexOf(m[u]) === -1 && (a = !1);
						break;
					case "object":
						var g = Array.isArray(p[f]) ? p[f] : [p[f]];
						m[f] ? (m[f].name && g.indexOf(m[f].name) !== -1 && (l = !0), g.indexOf(m[f].name) === -1 && (a = !1)) : a = !1;
						break;
					case "function":
						p[d](i) ? l = !0 : a = !1
				}
				l && (o ? (s[o] = s[o] || {}, s[o][h] = c[o][h]) : s[h] = c[h])
			}
			return a
		}, e.O = function(t, n, i) {
			var s = 0;
			return (t[n] || t.from && t.from[n] || t.to && t.to[n]) && (s += Math.pow(10, i), t.from && t.from[n] && (s += 1), t.to && t.to[n] && (s += 2)), s
		}, e.T = function(t) {
			var n = this;
			t.priority = 0;
			var i = 0;
			return this.A.forEach(function(s, o) {
				i += n.O(t, s.name, o + 1)
			}), t.priority = i, t
		}, r
	}(),
	zv = function() {
		function r(t) {
			t === void 0 && (t = []), this.logger = new zr("@barba/core"), this.S = !1, this.store = new Fv(t)
		}
		var e = r.prototype;
		return e.get = function(t, n) {
			return this.store.resolve(t, n)
		}, e.doOnce = function(t) {
			var n = t.data,
				i = t.transition;
			try {
				var s = function() {
						o.S = !1
					},
					o = this,
					a = i || {};
				o.S = !0;
				var l = Ts(function() {
					return Promise.resolve(o.j("beforeOnce", n, a)).then(function() {
						return Promise.resolve(o.once(n, a)).then(function() {
							return Promise.resolve(o.j("afterOnce", n, a)).then(function() {})
						})
					})
				}, function(c) {
					o.S = !1, o.logger.debug("Transition error [before/after/once]"), o.logger.error(c)
				});
				return Promise.resolve(l && l.then ? l.then(s) : s())
			} catch (c) {
				return Promise.reject(c)
			}
		}, e.doPage = function(t) {
			var n = t.data,
				i = t.transition,
				s = t.page,
				o = t.wrapper;
			try {
				var a = function(d) {
						if (l) return d;
						c.S = !1
					},
					l = !1,
					c = this,
					h = i || {},
					u = h.sync === !0 || !1;
				c.S = !0;
				var f = Ts(function() {
					function d() {
						return Promise.resolve(c.j("before", n, h)).then(function() {
							var m = !1;

							function v(_) {
								return m ? _ : Promise.resolve(c.remove(n)).then(function() {
									return Promise.resolve(c.j("after", n, h)).then(function() {})
								})
							}
							var g = function() {
								if (u) return Ts(function() {
									return Promise.resolve(c.add(n, o)).then(function() {
										return Promise.resolve(c.j("beforeLeave", n, h)).then(function() {
											return Promise.resolve(c.j("beforeEnter", n, h)).then(function() {
												return Promise.resolve(Promise.all([c.leave(n, h), c.enter(n, h)])).then(function() {
													return Promise.resolve(c.j("afterLeave", n, h)).then(function() {
														return Promise.resolve(c.j("afterEnter", n, h)).then(function() {})
													})
												})
											})
										})
									})
								}, function(y) {
									if (c.M(y)) throw new Ec(y, "Transition error [sync]")
								});
								var _ = function(y) {
										return m ? y : Ts(function() {
											var b = function() {
												if (w !== !1) return Promise.resolve(c.add(n, o)).then(function() {
													return Promise.resolve(c.j("beforeEnter", n, h)).then(function() {
														return Promise.resolve(c.enter(n, h, w)).then(function() {
															return Promise.resolve(c.j("afterEnter", n, h)).then(function() {})
														})
													})
												})
											}();
											if (b && b.then) return b.then(function() {})
										}, function(b) {
											if (c.M(b)) throw new Ec(b, "Transition error [before/after/enter]")
										})
									},
									w = !1,
									x = Ts(function() {
										return Promise.resolve(c.j("beforeLeave", n, h)).then(function() {
											return Promise.resolve(Promise.all([c.leave(n, h), kl(s, n)]).then(function(y) {
												return y[0]
											})).then(function(y) {
												return w = y, Promise.resolve(c.j("afterLeave", n, h)).then(function() {})
											})
										})
									}, function(y) {
										if (c.M(y)) throw new Ec(y, "Transition error [before/after/leave]")
									});
								return x && x.then ? x.then(_) : _(x)
							}();
							return g && g.then ? g.then(v) : v(g)
						})
					}
					var p = function() {
						if (u) return Promise.resolve(kl(s, n)).then(function() {})
					}();
					return p && p.then ? p.then(d) : d()
				}, function(d) {
					throw c.S = !1, d.name && d.name === "BarbaError" ? (c.logger.debug(d.label), c.logger.error(d.error), d) : (c.logger.debug("Transition error [page]"), c.logger.error(d), d)
				});
				return Promise.resolve(f && f.then ? f.then(a) : a(f))
			} catch (d) {
				return Promise.reject(d)
			}
		}, e.once = function(t, n) {
			try {
				return Promise.resolve(Qi.do("once", t, n)).then(function() {
					return n.once ? Ps(n.once, n)(t) : Promise.resolve()
				})
			} catch (i) {
				return Promise.reject(i)
			}
		}, e.leave = function(t, n) {
			try {
				return Promise.resolve(Qi.do("leave", t, n)).then(function() {
					return n.leave ? Ps(n.leave, n)(t) : Promise.resolve()
				})
			} catch (i) {
				return Promise.reject(i)
			}
		}, e.enter = function(t, n, i) {
			try {
				return Promise.resolve(Qi.do("enter", t, n)).then(function() {
					return n.enter ? Ps(n.enter, n)(t, i) : Promise.resolve()
				})
			} catch (s) {
				return Promise.reject(s)
			}
		}, e.add = function(t, n) {
			try {
				return Or.addContainer(t.next.container, n), Qi.do("nextAdded", t), Promise.resolve()
			} catch (i) {
				return Promise.reject(i)
			}
		}, e.remove = function(t) {
			try {
				return Or.removeContainer(t.current.container), Qi.do("currentRemoved", t), Promise.resolve()
			} catch (n) {
				return Promise.reject(n)
			}
		}, e.M = function(t) {
			return t.message ? !/Timeout error|Fetch error/.test(t.message) : !t.status
		}, e.j = function(t, n, i) {
			try {
				return Promise.resolve(Qi.do(t, n, i)).then(function() {
					return i[t] ? Ps(i[t], i)(n) : Promise.resolve()
				})
			} catch (s) {
				return Promise.reject(s)
			}
		}, Du(r, [{
			key: "isRunning",
			get: function() {
				return this.S
			},
			set: function(t) {
				this.S = t
			}
		}, {
			key: "hasOnce",
			get: function() {
				return this.store.once.length > 0
			}
		}, {
			key: "hasSelf",
			get: function() {
				return this.store.all.some(function(t) {
					return t.name === "self"
				})
			}
		}, {
			key: "shouldWait",
			get: function() {
				return this.store.all.some(function(t) {
					return t.to && !t.to.route || t.sync
				})
			}
		}]), r
	}(),
	Ov = function() {
		function r(e) {
			var t = this;
			this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"], this.byNamespace = new Map, e.length !== 0 && (e.forEach(function(n) {
				t.byNamespace.set(n.namespace, n)
			}), this.names.forEach(function(n) {
				Qi[n](t.L(n))
			}))
		}
		return r.prototype.L = function(e) {
			var t = this;
			return function(n) {
				var i = e.match(/enter/i) ? n.next : n.current,
					s = t.byNamespace.get(i.namespace);
				return s && s[e] ? Ps(s[e], s)(n) : Promise.resolve()
			}
		}, r
	}();
Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(r) {
	var e = this;
	do {
		if (e.matches(r)) return e;
		e = e.parentElement || e.parentNode
	} while (e !== null && e.nodeType === 1);
	return null
});
var Nv = {
		container: null,
		html: "",
		namespace: "",
		url: {
			hash: "",
			href: "",
			path: "",
			port: null,
			query: {}
		}
	},
	Bv = new(function() {
		function r() {
			this.version = hv, this.schemaPage = Nv, this.Logger = zr, this.logger = new zr("@barba/core"), this.plugins = [], this.hooks = Qi, this.dom = Or, this.helpers = vv, this.history = lg, this.request = yv, this.url = xv
		}
		var e = r.prototype;
		return e.use = function(t, n) {
			var i = this.plugins;
			i.indexOf(t) > -1 ? this.logger.warn("Plugin [" + t.name + "] already installed.") : typeof t.install == "function" ? (t.install(this, n), i.push(t)) : this.logger.warn("Plugin [" + t.name + '] has no "install" method.')
		}, e.init = function(t) {
			var n = t === void 0 ? {} : t,
				i = n.transitions,
				s = i === void 0 ? [] : i,
				o = n.views,
				a = o === void 0 ? [] : o,
				l = n.schema,
				c = l === void 0 ? _i : l,
				h = n.requestError,
				u = n.timeout,
				f = u === void 0 ? 2e3 : u,
				d = n.cacheIgnore,
				p = d !== void 0 && d,
				m = n.prefetchIgnore,
				v = m !== void 0 && m,
				g = n.preventRunning,
				_ = g !== void 0 && g,
				w = n.prevent,
				x = w === void 0 ? null : w,
				y = n.debug,
				b = n.logLevel;
			if (zr.setLevel((y !== void 0 && y) === !0 ? "debug" : b === void 0 ? "off" : b), this.logger.info(this.version), Object.keys(c).forEach(function(O) {
					_i[O] && (_i[O] = c[O])
				}), this.$ = h, this.timeout = f, this.cacheIgnore = p, this.prefetchIgnore = v, this.preventRunning = _, this._ = this.dom.getWrapper(), !this._) throw new Error("[@barba/core] No Barba wrapper found");
			this._.setAttribute("aria-live", "polite"), this.q();
			var S = this.data.current;
			if (!S.container) throw new Error("[@barba/core] No Barba container found");
			if (this.cache = new bv(p), this.prevent = new Iv(v), this.transitions = new zv(s), this.views = new Ov(a), x !== null) {
				if (typeof x != "function") throw new Error("[@barba/core] Prevent should be a function");
				this.prevent.add("preventCustom", x)
			}
			this.history.init(S.url.href, S.namespace), this.B = this.B.bind(this), this.U = this.U.bind(this), this.D = this.D.bind(this), this.F(), this.plugins.forEach(function(O) {
				return O.init()
			});
			var D = this.data;
			D.trigger = "barba", D.next = D.current, D.current = Fr({}, this.schemaPage), this.hooks.do("ready", D), this.once(D), this.q()
		}, e.destroy = function() {
			this.q(), this.H(), this.history.clear(), this.hooks.clear(), this.plugins = []
		}, e.force = function(t) {
			window.location.assign(t)
		}, e.go = function(t, n, i) {
			var s;
			if (n === void 0 && (n = "barba"), this.transitions.isRunning) this.force(t);
			else if (!(s = n === "popstate" ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(t) : this.prevent.run("sameUrl", null, null, t)) || this.transitions.hasSelf) return n = this.history.change(t, n, i), i && (i.stopPropagation(), i.preventDefault()), this.page(t, n, s)
		}, e.once = function(t) {
			try {
				var n = this;
				return Promise.resolve(n.hooks.do("beforeEnter", t)).then(function() {
					function i() {
						return Promise.resolve(n.hooks.do("afterEnter", t)).then(function() {})
					}
					var s = function() {
						if (n.transitions.hasOnce) {
							var o = n.transitions.get(t, {
								once: !0
							});
							return Promise.resolve(n.transitions.doOnce({
								transition: o,
								data: t
							})).then(function() {})
						}
					}();
					return s && s.then ? s.then(i) : i()
				})
			} catch (i) {
				return Promise.reject(i)
			}
		}, e.page = function(t, n, i) {
			try {
				var s = function() {
						var c = o.data;
						return Promise.resolve(o.hooks.do("page", c)).then(function() {
							var h = Ts(function() {
								var u = o.transitions.get(c, {
									once: !1,
									self: i
								});
								return Promise.resolve(o.transitions.doPage({
									data: c,
									page: a,
									transition: u,
									wrapper: o._
								})).then(function() {
									o.q()
								})
							}, function() {
								zr.getLevel() === 0 && o.force(c.current.url.href)
							});
							if (h && h.then) return h.then(function() {})
						})
					},
					o = this;
				o.data.next.url = Fr({
					href: t
				}, o.url.parse(t)), o.data.trigger = n;
				var a = o.cache.has(t) ? o.cache.update(t, {
						action: "click"
					}).request : o.cache.set(t, o.request(t, o.timeout, o.onRequestError.bind(o, n)), "click").request,
					l = function() {
						if (o.transitions.shouldWait) return Promise.resolve(kl(a, o.data)).then(function() {})
					}();
				return Promise.resolve(l && l.then ? l.then(s) : s())
			} catch (c) {
				return Promise.reject(c)
			}
		}, e.onRequestError = function(t) {
			this.transitions.isRunning = !1;
			for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) i[s - 1] = arguments[s];
			var o = i[0],
				a = i[1],
				l = this.cache.getAction(o);
			return this.cache.delete(o), !(this.$ && this.$(t, l, o, a) === !1 || (l === "click" && this.force(o), 1))
		}, e.prefetch = function(t) {
			var n = this;
			this.cache.has(t) || this.cache.set(t, this.request(t, this.timeout, this.onRequestError.bind(this, "barba")).catch(function(i) {
				n.logger.error(i)
			}), "prefetch")
		}, e.F = function() {
			this.prefetchIgnore !== !0 && (document.addEventListener("mouseover", this.B), document.addEventListener("touchstart", this.B)), document.addEventListener("click", this.U), window.addEventListener("popstate", this.D)
		}, e.H = function() {
			this.prefetchIgnore !== !0 && (document.removeEventListener("mouseover", this.B), document.removeEventListener("touchstart", this.B)), document.removeEventListener("click", this.U), window.removeEventListener("popstate", this.D)
		}, e.B = function(t) {
			var n = this,
				i = this.I(t);
			if (i) {
				var s = this.dom.getHref(i);
				this.prevent.checkHref(s) || this.cache.has(s) || this.cache.set(s, this.request(s, this.timeout, this.onRequestError.bind(this, i)).catch(function(o) {
					n.logger.error(o)
				}), "enter")
			}
		}, e.U = function(t) {
			var n = this.I(t);
			if (n) return this.transitions.isRunning && this.preventRunning ? (t.preventDefault(), void t.stopPropagation()) : void this.go(this.dom.getHref(n), n, t)
		}, e.D = function(t) {
			this.go(this.url.getHref(), "popstate", t)
		}, e.I = function(t) {
			for (var n = t.target; n && !this.dom.getHref(n);) n = n.parentNode;
			if (n && !this.prevent.checkLink(n, t, this.dom.getHref(n))) return n
		}, e.q = function() {
			var t = this.url.getHref(),
				n = {
					container: this.dom.getContainer(),
					html: this.dom.getHtml(),
					namespace: this.dom.getNamespace(),
					url: Fr({
						href: t
					}, this.url.parse(t))
				};
			this.C = {
				current: n,
				next: Fr({}, this.schemaPage),
				trigger: void 0
			}, this.hooks.do("reset", this.data)
		}, Du(r, [{
			key: "data",
			get: function() {
				return this.C
			}
		}, {
			key: "wrapper",
			get: function() {
				return this._
			}
		}]), r
	}());

function Pi(r) {
	if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	return r
}

function dg(r, e) {
	r.prototype = Object.create(e.prototype), r.prototype.constructor = r, r.__proto__ = e
}
/*!
 * GSAP 3.12.3
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Gn = {
		autoSleep: 120,
		force3D: "auto",
		nullTargetWarn: 1,
		units: {
			lineHeight: ""
		}
	},
	Ys = {
		duration: .5,
		overwrite: !1,
		delay: 0
	},
	Nu, tn, Mt, Zn = 1e8,
	at = 1 / Zn,
	Ih = Math.PI * 2,
	kv = Ih / 4,
	Uv = 0,
	pg = Math.sqrt,
	Vv = Math.cos,
	Hv = Math.sin,
	jt = function(e) {
		return typeof e == "string"
	},
	St = function(e) {
		return typeof e == "function"
	},
	ki = function(e) {
		return typeof e == "number"
	},
	Bu = function(e) {
		return typeof e > "u"
	},
	wi = function(e) {
		return typeof e == "object"
	},
	Tn = function(e) {
		return e !== !1
	},
	ku = function() {
		return typeof window < "u"
	},
	La = function(e) {
		return St(e) || jt(e)
	},
	mg = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {},
	nn = Array.isArray,
	Fh = /(?:-?\.?\d|\.)+/gi,
	gg = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
	Ds = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
	Ac = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
	_g = /[+-]=-?[.\d]+/,
	vg = /[^,'"\[\]\s]+/gi,
	Gv = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
	gt, Yn, zh, Uu, Wn = {},
	Vl = {},
	xg, yg = function(e) {
		return (Vl = jr(e, Wn)) && Rn
	},
	Vu = function(e, t) {
		return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
	},
	ra = function(e, t) {
		return !t && console.warn(e)
	},
	wg = function(e, t) {
		return e && (Wn[e] = t) && Vl && (Vl[e] = t) || Wn
	},
	sa = function() {
		return 0
	},
	Wv = {
		suppressEvents: !0,
		isStart: !0,
		kill: !1
	},
	bl = {
		suppressEvents: !0,
		kill: !1
	},
	qv = {
		suppressEvents: !0
	},
	Hu = {},
	sr = [],
	Oh = {},
	bg, On = {},
	Cc = {},
	Of = 30,
	Ml = [],
	Gu = "",
	Wu = function(e) {
		var t = e[0],
			n, i;
		if (wi(t) || St(t) || (e = [e]), !(n = (t._gsap || {}).harness)) {
			for (i = Ml.length; i-- && !Ml[i].targetTest(t););
			n = Ml[i]
		}
		for (i = e.length; i--;) e[i] && (e[i]._gsap || (e[i]._gsap = new Xg(e[i], n))) || e.splice(i, 1);
		return e
	},
	kr = function(e) {
		return e._gsap || Wu(Jn(e))[0]._gsap
	},
	Mg = function(e, t, n) {
		return (n = e[t]) && St(n) ? e[t]() : Bu(n) && e.getAttribute && e.getAttribute(t) || n
	},
	En = function(e, t) {
		return (e = e.split(",")).forEach(t) || e
	},
	At = function(e) {
		return Math.round(e * 1e5) / 1e5 || 0
	},
	qt = function(e) {
		return Math.round(e * 1e7) / 1e7 || 0
	},
	ks = function(e, t) {
		var n = t.charAt(0),
			i = parseFloat(t.substr(2));
		return e = parseFloat(e), n === "+" ? e + i : n === "-" ? e - i : n === "*" ? e * i : e / i
	},
	Xv = function(e, t) {
		for (var n = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < n;);
		return i < n
	},
	Hl = function() {
		var e = sr.length,
			t = sr.slice(0),
			n, i;
		for (Oh = {}, sr.length = 0, n = 0; n < e; n++) i = t[n], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
	},
	Sg = function(e, t, n, i) {
		sr.length && !tn && Hl(), e.render(t, n, i || tn && t < 0 && (e._initted || e._startAt)), sr.length && !tn && Hl()
	},
	Tg = function(e) {
		var t = parseFloat(e);
		return (t || t === 0) && (e + "").match(vg).length < 2 ? t : jt(e) ? e.trim() : e
	},
	Eg = function(e) {
		return e
	},
	ei = function(e, t) {
		for (var n in t) n in e || (e[n] = t[n]);
		return e
	},
	Yv = function(e) {
		return function(t, n) {
			for (var i in n) i in t || i === "duration" && e || i === "ease" || (t[i] = n[i])
		}
	},
	jr = function(e, t) {
		for (var n in t) e[n] = t[n];
		return e
	},
	Nf = function r(e, t) {
		for (var n in t) n !== "__proto__" && n !== "constructor" && n !== "prototype" && (e[n] = wi(t[n]) ? r(e[n] || (e[n] = {}), t[n]) : t[n]);
		return e
	},
	Gl = function(e, t) {
		var n = {},
			i;
		for (i in e) i in t || (n[i] = e[i]);
		return n
	},
	Ho = function(e) {
		var t = e.parent || gt,
			n = e.keyframes ? Yv(nn(e.keyframes)) : ei;
		if (Tn(e.inherit))
			for (; t;) n(e, t.vars.defaults), t = t.parent || t._dp;
		return e
	},
	jv = function(e, t) {
		for (var n = e.length, i = n === t.length; i && n-- && e[n] === t[n];);
		return n < 0
	},
	Ag = function(e, t, n, i, s) {
		n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
		var o = e[i],
			a;
		if (s)
			for (a = t[s]; o && o[s] > a;) o = o._prev;
		return o ? (t._next = o._next, o._next = t) : (t._next = e[n], e[n] = t), t._next ? t._next._prev = t : e[i] = t, t._prev = o, t.parent = t._dp = e, t
	},
	oc = function(e, t, n, i) {
		n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
		var s = t._prev,
			o = t._next;
		s ? s._next = o : e[n] === t && (e[n] = o), o ? o._prev = s : e[i] === t && (e[i] = s), t._next = t._prev = t.parent = null
	},
	mr = function(e, t) {
		e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
	},
	Ur = function(e, t) {
		if (e && (!t || t._end > e._dur || t._start < 0))
			for (var n = e; n;) n._dirty = 1, n = n.parent;
		return e
	},
	$v = function(e) {
		for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
		return e
	},
	Nh = function(e, t, n, i) {
		return e._startAt && (tn ? e._startAt.revert(bl) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, i))
	},
	Zv = function r(e) {
		return !e || e._ts && r(e.parent)
	},
	Bf = function(e) {
		return e._repeat ? js(e._tTime, e = e.duration() + e._rDelay) * e : 0
	},
	js = function(e, t) {
		var n = Math.floor(e /= t);
		return e && n === e ? n - 1 : n
	},
	Wl = function(e, t) {
		return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
	},
	ac = function(e) {
		return e._end = qt(e._start + (e._tDur / Math.abs(e._ts || e._rts || at) || 0))
	},
	lc = function(e, t) {
		var n = e._dp;
		return n && n.smoothChildTiming && e._ts && (e._start = qt(n._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), ac(e), n._dirty || Ur(n, e)), e
	},
	Cg = function(e, t) {
		var n;
		if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (n = Wl(e.rawTime(), t), (!t._dur || ya(0, t.totalDuration(), n) - t._tTime > at) && t.render(n, !0)), Ur(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
			if (e._dur < e.duration())
				for (n = e; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
			e._zTime = -at
		}
	},
	pi = function(e, t, n, i) {
		return t.parent && mr(t), t._start = qt((ki(n) ? n : n || e !== gt ? Xn(e, n, t) : e._time) + t._delay), t._end = qt(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Ag(e, t, "_first", "_last", e._sort ? "_start" : 0), Bh(t) || (e._recent = t), i || Cg(e, t), e._ts < 0 && lc(e, e._tTime), e
	},
	Lg = function(e, t) {
		return (Wn.ScrollTrigger || Vu("scrollTrigger", t)) && Wn.ScrollTrigger.create(t, e)
	},
	Rg = function(e, t, n, i, s) {
		if (Xu(e, t, s), !e._initted) return 1;
		if (!n && e._pt && !tn && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && bg !== Bn.frame) return sr.push(e), e._lazy = [s, i], 1
	},
	Jv = function r(e) {
		var t = e.parent;
		return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || r(t))
	},
	Bh = function(e) {
		var t = e.data;
		return t === "isFromStart" || t === "isStart"
	},
	Qv = function(e, t, n, i) {
		var s = e.ratio,
			o = t < 0 || !t && (!e._start && Jv(e) && !(!e._initted && Bh(e)) || (e._ts < 0 || e._dp._ts < 0) && !Bh(e)) ? 0 : 1,
			a = e._rDelay,
			l = 0,
			c, h, u;
		if (a && e._repeat && (l = ya(0, e._tDur, t), h = js(l, a), e._yoyo && h & 1 && (o = 1 - o), h !== js(e._tTime, a) && (s = 1 - o, e.vars.repeatRefresh && e._initted && e.invalidate())), o !== s || tn || i || e._zTime === at || !t && e._zTime) {
			if (!e._initted && Rg(e, t, i, n, l)) return;
			for (u = e._zTime, e._zTime = t || (n ? at : 0), n || (n = t && !u), e.ratio = o, e._from && (o = 1 - o), e._time = 0, e._tTime = l, c = e._pt; c;) c.r(o, c.d), c = c._next;
			t < 0 && Nh(e, t, n, !0), e._onUpdate && !n && Hn(e, "onUpdate"), l && e._repeat && !n && e.parent && Hn(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === o && (o && mr(e, 1), !n && !tn && (Hn(e, o ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
		} else e._zTime || (e._zTime = t)
	},
	Kv = function(e, t, n) {
		var i;
		if (n > t)
			for (i = e._first; i && i._start <= n;) {
				if (i.data === "isPause" && i._start > t) return i;
				i = i._next
			} else
				for (i = e._last; i && i._start >= n;) {
					if (i.data === "isPause" && i._start < t) return i;
					i = i._prev
				}
	},
	$s = function(e, t, n, i) {
		var s = e._repeat,
			o = qt(t) || 0,
			a = e._tTime / e._tDur;
		return a && !i && (e._time *= o / e._dur), e._dur = o, e._tDur = s ? s < 0 ? 1e10 : qt(o * (s + 1) + e._rDelay * s) : o, a > 0 && !i && lc(e, e._tTime = e._tDur * a), e.parent && ac(e), n || Ur(e.parent, e), e
	},
	kf = function(e) {
		return e instanceof dn ? Ur(e) : $s(e, e._dur)
	},
	ex = {
		_start: 0,
		endTime: sa,
		totalDuration: sa
	},
	Xn = function r(e, t, n) {
		var i = e.labels,
			s = e._recent || ex,
			o = e.duration() >= Zn ? s.endTime(!1) : e._dur,
			a, l, c;
		return jt(t) && (isNaN(t) || t in i) ? (l = t.charAt(0), c = t.substr(-1) === "%", a = t.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (t = t.replace(/=/, "")), (l === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (c ? (a < 0 ? s : n).totalDuration() / 100 : 1)) : a < 0 ? (t in i || (i[t] = o), i[t]) : (l = parseFloat(t.charAt(a - 1) + t.substr(a + 1)), c && n && (l = l / 100 * (nn(n) ? n[0] : n).totalDuration()), a > 1 ? r(e, t.substr(0, a - 1), n) + l : o + l)) : t == null ? o : +t
	},
	Go = function(e, t, n) {
		var i = ki(t[1]),
			s = (i ? 2 : 1) + (e < 2 ? 0 : 1),
			o = t[s],
			a, l;
		if (i && (o.duration = t[1]), o.parent = n, e) {
			for (a = o, l = n; l && !("immediateRender" in a);) a = l.vars.defaults || {}, l = Tn(l.vars.inherit) && l.parent;
			o.immediateRender = Tn(a.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[s - 1]
		}
		return new Lt(t[0], o, t[s + 1])
	},
	wr = function(e, t) {
		return e || e === 0 ? t(e) : t
	},
	ya = function(e, t, n) {
		return n < e ? e : n > t ? t : n
	},
	en = function(e, t) {
		return !jt(e) || !(t = Gv.exec(e)) ? "" : t[1]
	},
	tx = function(e, t, n) {
		return wr(n, function(i) {
			return ya(e, t, i)
		})
	},
	kh = [].slice,
	Pg = function(e, t) {
		return e && wi(e) && "length" in e && (!t && !e.length || e.length - 1 in e && wi(e[0])) && !e.nodeType && e !== Yn
	},
	nx = function(e, t, n) {
		return n === void 0 && (n = []), e.forEach(function(i) {
			var s;
			return jt(i) && !t || Pg(i, 1) ? (s = n).push.apply(s, Jn(i)) : n.push(i)
		}) || n
	},
	Jn = function(e, t, n) {
		return Mt && !t && Mt.selector ? Mt.selector(e) : jt(e) && !n && (zh || !Zs()) ? kh.call((t || Uu).querySelectorAll(e), 0) : nn(e) ? nx(e, n) : Pg(e) ? kh.call(e, 0) : e ? [e] : []
	},
	Uh = function(e) {
		return e = Jn(e)[0] || ra("Invalid scope") || {},
			function(t) {
				var n = e.current || e.nativeElement || e;
				return Jn(t, n.querySelectorAll ? n : n === e ? ra("Invalid scope") || Uu.createElement("div") : e)
			}
	},
	Dg = function(e) {
		return e.sort(function() {
			return .5 - Math.random()
		})
	},
	Ig = function(e) {
		if (St(e)) return e;
		var t = wi(e) ? e : {
				each: e
			},
			n = Vr(t.ease),
			i = t.from || 0,
			s = parseFloat(t.base) || 0,
			o = {},
			a = i > 0 && i < 1,
			l = isNaN(i) || a,
			c = t.axis,
			h = i,
			u = i;
		return jt(i) ? h = u = {
				center: .5,
				edges: .5,
				end: 1
			} [i] || 0 : !a && l && (h = i[0], u = i[1]),
			function(f, d, p) {
				var m = (p || t).length,
					v = o[m],
					g, _, w, x, y, b, S, D, O;
				if (!v) {
					if (O = t.grid === "auto" ? 0 : (t.grid || [1, Zn])[1], !O) {
						for (S = -Zn; S < (S = p[O++].getBoundingClientRect().left) && O < m;);
						O < m && O--
					}
					for (v = o[m] = [], g = l ? Math.min(O, m) * h - .5 : i % O, _ = O === Zn ? 0 : l ? m * u / O - .5 : i / O | 0, S = 0, D = Zn, b = 0; b < m; b++) w = b % O - g, x = _ - (b / O | 0), v[b] = y = c ? Math.abs(c === "y" ? x : w) : pg(w * w + x * x), y > S && (S = y), y < D && (D = y);
					i === "random" && Dg(v), v.max = S - D, v.min = D, v.v = m = (parseFloat(t.amount) || parseFloat(t.each) * (O > m ? m - 1 : c ? c === "y" ? m / O : O : Math.max(O, m / O)) || 0) * (i === "edges" ? -1 : 1), v.b = m < 0 ? s - m : s, v.u = en(t.amount || t.each) || 0, n = n && m < 0 ? Gg(n) : n
				}
				return m = (v[f] - v.min) / v.max || 0, qt(v.b + (n ? n(m) : m) * v.v) + v.u
			}
	},
	Vh = function(e) {
		var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
		return function(n) {
			var i = qt(Math.round(parseFloat(n) / e) * e * t);
			return (i - i % 1) / t + (ki(n) ? 0 : en(n))
		}
	},
	Fg = function(e, t) {
		var n = nn(e),
			i, s;
		return !n && wi(e) && (i = n = e.radius || Zn, e.values ? (e = Jn(e.values), (s = !ki(e[0])) && (i *= i)) : e = Vh(e.increment)), wr(t, n ? St(e) ? function(o) {
			return s = e(o), Math.abs(s - o) <= i ? s : o
		} : function(o) {
			for (var a = parseFloat(s ? o.x : o), l = parseFloat(s ? o.y : 0), c = Zn, h = 0, u = e.length, f, d; u--;) s ? (f = e[u].x - a, d = e[u].y - l, f = f * f + d * d) : f = Math.abs(e[u] - a), f < c && (c = f, h = u);
			return h = !i || c <= i ? e[h] : o, s || h === o || ki(o) ? h : h + en(o)
		} : Vh(e))
	},
	zg = function(e, t, n, i) {
		return wr(nn(e) ? !t : n === !0 ? !!(n = 0) : !i, function() {
			return nn(e) ? e[~~(Math.random() * e.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + n * .99)) / n) * n * i) / i
		})
	},
	ix = function() {
		for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
		return function(i) {
			return t.reduce(function(s, o) {
				return o(s)
			}, i)
		}
	},
	rx = function(e, t) {
		return function(n) {
			return e(parseFloat(n)) + (t || en(n))
		}
	},
	sx = function(e, t, n) {
		return Ng(e, t, 0, 1, n)
	},
	Og = function(e, t, n) {
		return wr(n, function(i) {
			return e[~~t(i)]
		})
	},
	ox = function r(e, t, n) {
		var i = t - e;
		return nn(e) ? Og(e, r(0, e.length), t) : wr(n, function(s) {
			return (i + (s - e) % i) % i + e
		})
	},
	ax = function r(e, t, n) {
		var i = t - e,
			s = i * 2;
		return nn(e) ? Og(e, r(0, e.length - 1), t) : wr(n, function(o) {
			return o = (s + (o - e) % s) % s || 0, e + (o > i ? s - o : o)
		})
	},
	oa = function(e) {
		for (var t = 0, n = "", i, s, o, a; ~(i = e.indexOf("random(", t));) o = e.indexOf(")", i), a = e.charAt(i + 7) === "[", s = e.substr(i + 7, o - i - 7).match(a ? vg : Fh), n += e.substr(t, i - t) + zg(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5), t = o + 1;
		return n + e.substr(t, e.length - t)
	},
	Ng = function(e, t, n, i, s) {
		var o = t - e,
			a = i - n;
		return wr(s, function(l) {
			return n + ((l - e) / o * a || 0)
		})
	},
	lx = function r(e, t, n, i) {
		var s = isNaN(e + t) ? 0 : function(d) {
			return (1 - d) * e + d * t
		};
		if (!s) {
			var o = jt(e),
				a = {},
				l, c, h, u, f;
			if (n === !0 && (i = 1) && (n = null), o) e = {
				p: e
			}, t = {
				p: t
			};
			else if (nn(e) && !nn(t)) {
				for (h = [], u = e.length, f = u - 2, c = 1; c < u; c++) h.push(r(e[c - 1], e[c]));
				u--, s = function(p) {
					p *= u;
					var m = Math.min(f, ~~p);
					return h[m](p - m)
				}, n = t
			} else i || (e = jr(nn(e) ? [] : {}, e));
			if (!h) {
				for (l in t) qu.call(a, e, l, "get", t[l]);
				s = function(p) {
					return $u(p, a) || (o ? e.p : e)
				}
			}
		}
		return wr(n, s)
	},
	Uf = function(e, t, n) {
		var i = e.labels,
			s = Zn,
			o, a, l;
		for (o in i) a = i[o] - t, a < 0 == !!n && a && s > (a = Math.abs(a)) && (l = o, s = a);
		return l
	},
	Hn = function(e, t, n) {
		var i = e.vars,
			s = i[t],
			o = Mt,
			a = e._ctx,
			l, c, h;
		if (s) return l = i[t + "Params"], c = i.callbackScope || e, n && sr.length && Hl(), a && (Mt = a), h = l ? s.apply(c, l) : s.call(c), Mt = o, h
	},
	Io = function(e) {
		return mr(e), e.scrollTrigger && e.scrollTrigger.kill(!!tn), e.progress() < 1 && Hn(e, "onInterrupt"), e
	},
	Is, Bg = [],
	kg = function(e) {
		if (ku() && e) {
			e = !e.name && e.default || e;
			var t = e.name,
				n = St(e),
				i = t && !n && e.init ? function() {
					this._props = []
				} : e,
				s = {
					init: sa,
					render: $u,
					add: qu,
					kill: Sx,
					modifier: Mx,
					rawVars: 0
				},
				o = {
					targetTest: 0,
					get: 0,
					getSetter: ju,
					aliases: {},
					register: 0
				};
			if (Zs(), e !== i) {
				if (On[t]) return;
				ei(i, ei(Gl(e, s), o)), jr(i.prototype, jr(s, Gl(e, o))), On[i.prop = t] = i, e.targetTest && (Ml.push(i), Hu[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
			}
			wg(t, i), e.register && e.register(Rn, i, An)
		} else e && Bg.push(e)
	},
	ot = 255,
	Fo = {
		aqua: [0, ot, ot],
		lime: [0, ot, 0],
		silver: [192, 192, 192],
		black: [0, 0, 0],
		maroon: [128, 0, 0],
		teal: [0, 128, 128],
		blue: [0, 0, ot],
		navy: [0, 0, 128],
		white: [ot, ot, ot],
		olive: [128, 128, 0],
		yellow: [ot, ot, 0],
		orange: [ot, 165, 0],
		gray: [128, 128, 128],
		purple: [128, 0, 128],
		green: [0, 128, 0],
		red: [ot, 0, 0],
		pink: [ot, 192, 203],
		cyan: [0, ot, ot],
		transparent: [ot, ot, ot, 0]
	},
	Lc = function(e, t, n) {
		return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (n - t) * e * 6 : e < .5 ? n : e * 3 < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * ot + .5 | 0
	},
	Ug = function(e, t, n) {
		var i = e ? ki(e) ? [e >> 16, e >> 8 & ot, e & ot] : 0 : Fo.black,
			s, o, a, l, c, h, u, f, d, p;
		if (!i) {
			if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Fo[e]) i = Fo[e];
			else if (e.charAt(0) === "#") {
				if (e.length < 6 && (s = e.charAt(1), o = e.charAt(2), a = e.charAt(3), e = "#" + s + s + o + o + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9) return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & ot, i & ot, parseInt(e.substr(7), 16) / 255];
				e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & ot, e & ot]
			} else if (e.substr(0, 3) === "hsl") {
				if (i = p = e.match(Fh), !t) l = +i[0] % 360 / 360, c = +i[1] / 100, h = +i[2] / 100, o = h <= .5 ? h * (c + 1) : h + c - h * c, s = h * 2 - o, i.length > 3 && (i[3] *= 1), i[0] = Lc(l + 1 / 3, s, o), i[1] = Lc(l, s, o), i[2] = Lc(l - 1 / 3, s, o);
				else if (~e.indexOf("=")) return i = e.match(gg), n && i.length < 4 && (i[3] = 1), i
			} else i = e.match(Fh) || Fo.transparent;
			i = i.map(Number)
		}
		return t && !p && (s = i[0] / ot, o = i[1] / ot, a = i[2] / ot, u = Math.max(s, o, a), f = Math.min(s, o, a), h = (u + f) / 2, u === f ? l = c = 0 : (d = u - f, c = h > .5 ? d / (2 - u - f) : d / (u + f), l = u === s ? (o - a) / d + (o < a ? 6 : 0) : u === o ? (a - s) / d + 2 : (s - o) / d + 4, l *= 60), i[0] = ~~(l + .5), i[1] = ~~(c * 100 + .5), i[2] = ~~(h * 100 + .5)), n && i.length < 4 && (i[3] = 1), i
	},
	Vg = function(e) {
		var t = [],
			n = [],
			i = -1;
		return e.split(or).forEach(function(s) {
			var o = s.match(Ds) || [];
			t.push.apply(t, o), n.push(i += o.length + 1)
		}), t.c = n, t
	},
	Vf = function(e, t, n) {
		var i = "",
			s = (e + i).match(or),
			o = t ? "hsla(" : "rgba(",
			a = 0,
			l, c, h, u;
		if (!s) return e;
		if (s = s.map(function(f) {
				return (f = Ug(f, t, 1)) && o + (t ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) + ")"
			}), n && (h = Vg(e), l = n.c, l.join(i) !== h.c.join(i)))
			for (c = e.replace(or, "1").split(Ds), u = c.length - 1; a < u; a++) i += c[a] + (~l.indexOf(a) ? s.shift() || o + "0,0,0,0)" : (h.length ? h : s.length ? s : n).shift());
		if (!c)
			for (c = e.split(or), u = c.length - 1; a < u; a++) i += c[a] + s[a];
		return i + c[u]
	},
	or = function() {
		var r = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
			e;
		for (e in Fo) r += "|" + e + "\\b";
		return new RegExp(r + ")", "gi")
	}(),
	cx = /hsl[a]?\(/,
	Hg = function(e) {
		var t = e.join(" "),
			n;
		if (or.lastIndex = 0, or.test(t)) return n = cx.test(t), e[1] = Vf(e[1], n), e[0] = Vf(e[0], n, Vg(e[1])), !0
	},
	aa, Bn = function() {
		var r = Date.now,
			e = 500,
			t = 33,
			n = r(),
			i = n,
			s = 1e3 / 240,
			o = s,
			a = [],
			l, c, h, u, f, d, p = function m(v) {
				var g = r() - i,
					_ = v === !0,
					w, x, y, b;
				if (g > e && (n += g - t), i += g, y = i - n, w = y - o, (w > 0 || _) && (b = ++u.frame, f = y - u.time * 1e3, u.time = y = y / 1e3, o += w + (w >= s ? 4 : s - w), x = 1), _ || (l = c(m)), x)
					for (d = 0; d < a.length; d++) a[d](y, f, b, v)
			};
		return u = {
			time: 0,
			frame: 0,
			tick: function() {
				p(!0)
			},
			deltaRatio: function(v) {
				return f / (1e3 / (v || 60))
			},
			wake: function() {
				xg && (!zh && ku() && (Yn = zh = window, Uu = Yn.document || {}, Wn.gsap = Rn, (Yn.gsapVersions || (Yn.gsapVersions = [])).push(Rn.version), yg(Vl || Yn.GreenSockGlobals || !Yn.gsap && Yn || {}), h = Yn.requestAnimationFrame, Bg.forEach(kg)), l && u.sleep(), c = h || function(v) {
					return setTimeout(v, o - u.time * 1e3 + 1 | 0)
				}, aa = 1, p(2))
			},
			sleep: function() {
				(h ? Yn.cancelAnimationFrame : clearTimeout)(l), aa = 0, c = sa
			},
			lagSmoothing: function(v, g) {
				e = v || 1 / 0, t = Math.min(g || 33, e)
			},
			fps: function(v) {
				s = 1e3 / (v || 240), o = u.time * 1e3 + s
			},
			add: function(v, g, _) {
				var w = g ? function(x, y, b, S) {
					v(x, y, b, S), u.remove(w)
				} : v;
				return u.remove(v), a[_ ? "unshift" : "push"](w), Zs(), w
			},
			remove: function(v, g) {
				~(g = a.indexOf(v)) && a.splice(g, 1) && d >= g && d--
			},
			_listeners: a
		}, u
	}(),
	Zs = function() {
		return !aa && Bn.wake()
	},
	Ze = {},
	hx = /^[\d.\-M][\d.\-,\s]/,
	ux = /["']/g,
	fx = function(e) {
		for (var t = {}, n = e.substr(1, e.length - 3).split(":"), i = n[0], s = 1, o = n.length, a, l, c; s < o; s++) l = n[s], a = s !== o - 1 ? l.lastIndexOf(",") : l.length, c = l.substr(0, a), t[i] = isNaN(c) ? c.replace(ux, "").trim() : +c, i = l.substr(a + 1).trim();
		return t
	},
	dx = function(e) {
		var t = e.indexOf("(") + 1,
			n = e.indexOf(")"),
			i = e.indexOf("(", t);
		return e.substring(t, ~i && i < n ? e.indexOf(")", n + 1) : n)
	},
	px = function(e) {
		var t = (e + "").split("("),
			n = Ze[t[0]];
		return n && t.length > 1 && n.config ? n.config.apply(null, ~e.indexOf("{") ? [fx(t[1])] : dx(e).split(",").map(Tg)) : Ze._CE && hx.test(e) ? Ze._CE("", e) : n
	},
	Gg = function(e) {
		return function(t) {
			return 1 - e(1 - t)
		}
	},
	Wg = function r(e, t) {
		for (var n = e._first, i; n;) n instanceof dn ? r(n, t) : n.vars.yoyoEase && (!n._yoyo || !n._repeat) && n._yoyo !== t && (n.timeline ? r(n.timeline, t) : (i = n._ease, n._ease = n._yEase, n._yEase = i, n._yoyo = t)), n = n._next
	},
	Vr = function(e, t) {
		return e && (St(e) ? e : Ze[e] || px(e)) || t
	},
	ts = function(e, t, n, i) {
		n === void 0 && (n = function(l) {
			return 1 - t(1 - l)
		}), i === void 0 && (i = function(l) {
			return l < .5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2
		});
		var s = {
				easeIn: t,
				easeOut: n,
				easeInOut: i
			},
			o;
		return En(e, function(a) {
			Ze[a] = Wn[a] = s, Ze[o = a.toLowerCase()] = n;
			for (var l in s) Ze[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = Ze[a + "." + l] = s[l]
		}), s
	},
	qg = function(e) {
		return function(t) {
			return t < .5 ? (1 - e(1 - t * 2)) / 2 : .5 + e((t - .5) * 2) / 2
		}
	},
	Rc = function r(e, t, n) {
		var i = t >= 1 ? t : 1,
			s = (n || (e ? .3 : .45)) / (t < 1 ? t : 1),
			o = s / Ih * (Math.asin(1 / i) || 0),
			a = function(h) {
				return h === 1 ? 1 : i * Math.pow(2, -10 * h) * Hv((h - o) * s) + 1
			},
			l = e === "out" ? a : e === "in" ? function(c) {
				return 1 - a(1 - c)
			} : qg(a);
		return s = Ih / s, l.config = function(c, h) {
			return r(e, c, h)
		}, l
	},
	Pc = function r(e, t) {
		t === void 0 && (t = 1.70158);
		var n = function(o) {
				return o ? --o * o * ((t + 1) * o + t) + 1 : 0
			},
			i = e === "out" ? n : e === "in" ? function(s) {
				return 1 - n(1 - s)
			} : qg(n);
		return i.config = function(s) {
			return r(e, s)
		}, i
	};
En("Linear,Quad,Cubic,Quart,Quint,Strong", function(r, e) {
	var t = e < 5 ? e + 1 : e;
	ts(r + ",Power" + (t - 1), e ? function(n) {
		return Math.pow(n, t)
	} : function(n) {
		return n
	}, function(n) {
		return 1 - Math.pow(1 - n, t)
	}, function(n) {
		return n < .5 ? Math.pow(n * 2, t) / 2 : 1 - Math.pow((1 - n) * 2, t) / 2
	})
});
Ze.Linear.easeNone = Ze.none = Ze.Linear.easeIn;
ts("Elastic", Rc("in"), Rc("out"), Rc());
(function(r, e) {
	var t = 1 / e,
		n = 2 * t,
		i = 2.5 * t,
		s = function(a) {
			return a < t ? r * a * a : a < n ? r * Math.pow(a - 1.5 / e, 2) + .75 : a < i ? r * (a -= 2.25 / e) * a + .9375 : r * Math.pow(a - 2.625 / e, 2) + .984375
		};
	ts("Bounce", function(o) {
		return 1 - s(1 - o)
	}, s)
})(7.5625, 2.75);
ts("Expo", function(r) {
	return r ? Math.pow(2, 10 * (r - 1)) : 0
});
ts("Circ", function(r) {
	return -(pg(1 - r * r) - 1)
});
ts("Sine", function(r) {
	return r === 1 ? 1 : -Vv(r * kv) + 1
});
ts("Back", Pc("in"), Pc("out"), Pc());
Ze.SteppedEase = Ze.steps = Wn.SteppedEase = {
	config: function(e, t) {
		e === void 0 && (e = 1);
		var n = 1 / e,
			i = e + (t ? 0 : 1),
			s = t ? 1 : 0,
			o = 1 - at;
		return function(a) {
			return ((i * ya(0, o, a) | 0) + s) * n
		}
	}
};
Ys.ease = Ze["quad.out"];
En("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(r) {
	return Gu += r + "," + r + "Params,"
});
var Xg = function(e, t) {
		this.id = Uv++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : Mg, this.set = t ? t.getSetter : ju
	},
	la = function() {
		function r(t) {
			this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, $s(this, +t.duration, 1, 1), this.data = t.data, Mt && (this._ctx = Mt, Mt.data.push(this)), aa || Bn.wake()
		}
		var e = r.prototype;
		return e.delay = function(n) {
			return n || n === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + n - this._delay), this._delay = n, this) : this._delay
		}, e.duration = function(n) {
			return arguments.length ? this.totalDuration(this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n) : this.totalDuration() && this._dur
		}, e.totalDuration = function(n) {
			return arguments.length ? (this._dirty = 0, $s(this, this._repeat < 0 ? n : (n - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
		}, e.totalTime = function(n, i) {
			if (Zs(), !arguments.length) return this._tTime;
			var s = this._dp;
			if (s && s.smoothChildTiming && this._ts) {
				for (lc(this, n), !s._dp || s.parent || Cg(s, this); s && s.parent;) s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0), s = s.parent;
				!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && n < this._tDur || this._ts < 0 && n > 0 || !this._tDur && !n) && pi(this._dp, this, this._start - this._delay)
			}
			return (this._tTime !== n || !this._dur && !i || this._initted && Math.abs(this._zTime) === at || !n && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = n), Sg(this, n, i)), this
		}, e.time = function(n, i) {
			return arguments.length ? this.totalTime(Math.min(this.totalDuration(), n + Bf(this)) % (this._dur + this._rDelay) || (n ? this._dur : 0), i) : this._time
		}, e.totalProgress = function(n, i) {
			return arguments.length ? this.totalTime(this.totalDuration() * n, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
		}, e.progress = function(n, i) {
			return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) + Bf(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
		}, e.iteration = function(n, i) {
			var s = this.duration() + this._rDelay;
			return arguments.length ? this.totalTime(this._time + (n - 1) * s, i) : this._repeat ? js(this._tTime, s) + 1 : 1
		}, e.timeScale = function(n, i) {
			if (!arguments.length) return this._rts === -at ? 0 : this._rts;
			if (this._rts === n) return this;
			var s = this.parent && this._ts ? Wl(this.parent._time, this) : this._tTime;
			return this._rts = +n || 0, this._ts = this._ps || n === -at ? 0 : this._rts, this.totalTime(ya(-Math.abs(this._delay), this._tDur, s), i !== !1), ac(this), $v(this)
		}, e.paused = function(n) {
			return arguments.length ? (this._ps !== n && (this._ps = n, n ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Zs(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== at && (this._tTime -= at)))), this) : this._ps
		}, e.startTime = function(n) {
			if (arguments.length) {
				this._start = n;
				var i = this.parent || this._dp;
				return i && (i._sort || !this.parent) && pi(i, this, n - this._delay), this
			}
			return this._start
		}, e.endTime = function(n) {
			return this._start + (Tn(n) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
		}, e.rawTime = function(n) {
			var i = this.parent || this._dp;
			return i ? n && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Wl(i.rawTime(n), this) : this._tTime : this._tTime
		}, e.revert = function(n) {
			n === void 0 && (n = qv);
			var i = tn;
			return tn = n, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(n), this.totalTime(-.01, n.suppressEvents)), this.data !== "nested" && n.kill !== !1 && this.kill(), tn = i, this
		}, e.globalTime = function(n) {
			for (var i = this, s = arguments.length ? n : i.rawTime(); i;) s = i._start + s / (Math.abs(i._ts) || 1), i = i._dp;
			return !this.parent && this._sat ? this._sat.globalTime(n) : s
		}, e.repeat = function(n) {
			return arguments.length ? (this._repeat = n === 1 / 0 ? -2 : n, kf(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
		}, e.repeatDelay = function(n) {
			if (arguments.length) {
				var i = this._time;
				return this._rDelay = n, kf(this), i ? this.time(i) : this
			}
			return this._rDelay
		}, e.yoyo = function(n) {
			return arguments.length ? (this._yoyo = n, this) : this._yoyo
		}, e.seek = function(n, i) {
			return this.totalTime(Xn(this, n), Tn(i))
		}, e.restart = function(n, i) {
			return this.play().totalTime(n ? -this._delay : 0, Tn(i))
		}, e.play = function(n, i) {
			return n != null && this.seek(n, i), this.reversed(!1).paused(!1)
		}, e.reverse = function(n, i) {
			return n != null && this.seek(n || this.totalDuration(), i), this.reversed(!0).paused(!1)
		}, e.pause = function(n, i) {
			return n != null && this.seek(n, i), this.paused(!0)
		}, e.resume = function() {
			return this.paused(!1)
		}, e.reversed = function(n) {
			return arguments.length ? (!!n !== this.reversed() && this.timeScale(-this._rts || (n ? -at : 0)), this) : this._rts < 0
		}, e.invalidate = function() {
			return this._initted = this._act = 0, this._zTime = -at, this
		}, e.isActive = function() {
			var n = this.parent || this._dp,
				i = this._start,
				s;
			return !!(!n || this._ts && this._initted && n.isActive() && (s = n.rawTime(!0)) >= i && s < this.endTime(!0) - at)
		}, e.eventCallback = function(n, i, s) {
			var o = this.vars;
			return arguments.length > 1 ? (i ? (o[n] = i, s && (o[n + "Params"] = s), n === "onUpdate" && (this._onUpdate = i)) : delete o[n], this) : o[n]
		}, e.then = function(n) {
			var i = this;
			return new Promise(function(s) {
				var o = St(n) ? n : Eg,
					a = function() {
						var c = i.then;
						i.then = null, St(o) && (o = o(i)) && (o.then || o === i) && (i.then = c), s(o), i.then = c
					};
				i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? a() : i._prom = a
			})
		}, e.kill = function() {
			Io(this)
		}, r
	}();
ei(la.prototype, {
	_time: 0,
	_start: 0,
	_end: 0,
	_tTime: 0,
	_tDur: 0,
	_dirty: 0,
	_repeat: 0,
	_yoyo: !1,
	parent: null,
	_initted: !1,
	_rDelay: 0,
	_ts: 1,
	_dp: 0,
	ratio: 0,
	_zTime: -at,
	_prom: 0,
	_ps: !1,
	_rts: 1
});
var dn = function(r) {
	dg(e, r);

	function e(n, i) {
		var s;
		return n === void 0 && (n = {}), s = r.call(this, n) || this, s.labels = {}, s.smoothChildTiming = !!n.smoothChildTiming, s.autoRemoveChildren = !!n.autoRemoveChildren, s._sort = Tn(n.sortChildren), gt && pi(n.parent || gt, Pi(s), i), n.reversed && s.reverse(), n.paused && s.paused(!0), n.scrollTrigger && Lg(Pi(s), n.scrollTrigger), s
	}
	var t = e.prototype;
	return t.to = function(i, s, o) {
		return Go(0, arguments, this), this
	}, t.from = function(i, s, o) {
		return Go(1, arguments, this), this
	}, t.fromTo = function(i, s, o, a) {
		return Go(2, arguments, this), this
	}, t.set = function(i, s, o) {
		return s.duration = 0, s.parent = this, Ho(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new Lt(i, s, Xn(this, o), 1), this
	}, t.call = function(i, s, o) {
		return pi(this, Lt.delayedCall(0, i, s), o)
	}, t.staggerTo = function(i, s, o, a, l, c, h) {
		return o.duration = s, o.stagger = o.stagger || a, o.onComplete = c, o.onCompleteParams = h, o.parent = this, new Lt(i, o, Xn(this, l)), this
	}, t.staggerFrom = function(i, s, o, a, l, c, h) {
		return o.runBackwards = 1, Ho(o).immediateRender = Tn(o.immediateRender), this.staggerTo(i, s, o, a, l, c, h)
	}, t.staggerFromTo = function(i, s, o, a, l, c, h, u) {
		return a.startAt = o, Ho(a).immediateRender = Tn(a.immediateRender), this.staggerTo(i, s, a, l, c, h, u)
	}, t.render = function(i, s, o) {
		var a = this._time,
			l = this._dirty ? this.totalDuration() : this._tDur,
			c = this._dur,
			h = i <= 0 ? 0 : qt(i),
			u = this._zTime < 0 != i < 0 && (this._initted || !c),
			f, d, p, m, v, g, _, w, x, y, b, S;
		if (this !== gt && h > l && i >= 0 && (h = l), h !== this._tTime || o || u) {
			if (a !== this._time && c && (h += this._time - a, i += this._time - a), f = h, x = this._start, w = this._ts, g = !w, u && (c || (a = this._zTime), (i || !s) && (this._zTime = i)), this._repeat) {
				if (b = this._yoyo, v = c + this._rDelay, this._repeat < -1 && i < 0) return this.totalTime(v * 100 + i, s, o);
				if (f = qt(h % v), h === l ? (m = this._repeat, f = c) : (m = ~~(h / v), m && m === h / v && (f = c, m--), f > c && (f = c)), y = js(this._tTime, v), !a && this._tTime && y !== m && this._tTime - y * v - this._dur <= 0 && (y = m), b && m & 1 && (f = c - f, S = 1), m !== y && !this._lock) {
					var D = b && y & 1,
						O = D === (b && m & 1);
					if (m < y && (D = !D), a = D ? 0 : h % c ? c : h, this._lock = 1, this.render(a || (S ? 0 : qt(m * v)), s, !c)._lock = 0, this._tTime = h, !s && this.parent && Hn(this, "onRepeat"), this.vars.repeatRefresh && !S && (this.invalidate()._lock = 1), a && a !== this._time || g !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
					if (c = this._dur, l = this._tDur, O && (this._lock = 2, a = D ? c : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !S && this.invalidate()), this._lock = 0, !this._ts && !g) return this;
					Wg(this, S)
				}
			}
			if (this._hasPause && !this._forcing && this._lock < 2 && (_ = Kv(this, qt(a), qt(f)), _ && (h -= f - (f = _._start))), this._tTime = h, this._time = f, this._act = !w, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, a = 0), !a && f && !s && !m && (Hn(this, "onStart"), this._tTime !== h)) return this;
			if (f >= a && i >= 0)
				for (d = this._first; d;) {
					if (p = d._next, (d._act || f >= d._start) && d._ts && _ !== d) {
						if (d.parent !== this) return this.render(i, s, o);
						if (d.render(d._ts > 0 ? (f - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (f - d._start) * d._ts, s, o), f !== this._time || !this._ts && !g) {
							_ = 0, p && (h += this._zTime = -at);
							break
						}
					}
					d = p
				} else {
					d = this._last;
					for (var z = i < 0 ? i : f; d;) {
						if (p = d._prev, (d._act || z <= d._end) && d._ts && _ !== d) {
							if (d.parent !== this) return this.render(i, s, o);
							if (d.render(d._ts > 0 ? (z - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (z - d._start) * d._ts, s, o || tn && (d._initted || d._startAt)), f !== this._time || !this._ts && !g) {
								_ = 0, p && (h += this._zTime = z ? -at : at);
								break
							}
						}
						d = p
					}
				}
			if (_ && !s && (this.pause(), _.render(f >= a ? 0 : -at)._zTime = f >= a ? 1 : -1, this._ts)) return this._start = x, ac(this), this.render(i, s, o);
			this._onUpdate && !s && Hn(this, "onUpdate", !0), (h === l && this._tTime >= this.totalDuration() || !h && a) && (x === this._start || Math.abs(w) !== Math.abs(this._ts)) && (this._lock || ((i || !c) && (h === l && this._ts > 0 || !h && this._ts < 0) && mr(this, 1), !s && !(i < 0 && !a) && (h || a || !l) && (Hn(this, h === l && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < l && this.timeScale() > 0) && this._prom())))
		}
		return this
	}, t.add = function(i, s) {
		var o = this;
		if (ki(s) || (s = Xn(this, s, i)), !(i instanceof la)) {
			if (nn(i)) return i.forEach(function(a) {
				return o.add(a, s)
			}), this;
			if (jt(i)) return this.addLabel(i, s);
			if (St(i)) i = Lt.delayedCall(0, i);
			else return this
		}
		return this !== i ? pi(this, i, s) : this
	}, t.getChildren = function(i, s, o, a) {
		i === void 0 && (i = !0), s === void 0 && (s = !0), o === void 0 && (o = !0), a === void 0 && (a = -Zn);
		for (var l = [], c = this._first; c;) c._start >= a && (c instanceof Lt ? s && l.push(c) : (o && l.push(c), i && l.push.apply(l, c.getChildren(!0, s, o)))), c = c._next;
		return l
	}, t.getById = function(i) {
		for (var s = this.getChildren(1, 1, 1), o = s.length; o--;)
			if (s[o].vars.id === i) return s[o]
	}, t.remove = function(i) {
		return jt(i) ? this.removeLabel(i) : St(i) ? this.killTweensOf(i) : (oc(this, i), i === this._recent && (this._recent = this._last), Ur(this))
	}, t.totalTime = function(i, s) {
		return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = qt(Bn.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), r.prototype.totalTime.call(this, i, s), this._forcing = 0, this) : this._tTime
	}, t.addLabel = function(i, s) {
		return this.labels[i] = Xn(this, s), this
	}, t.removeLabel = function(i) {
		return delete this.labels[i], this
	}, t.addPause = function(i, s, o) {
		var a = Lt.delayedCall(0, s || sa, o);
		return a.data = "isPause", this._hasPause = 1, pi(this, a, Xn(this, i))
	}, t.removePause = function(i) {
		var s = this._first;
		for (i = Xn(this, i); s;) s._start === i && s.data === "isPause" && mr(s), s = s._next
	}, t.killTweensOf = function(i, s, o) {
		for (var a = this.getTweensOf(i, o), l = a.length; l--;) er !== a[l] && a[l].kill(i, s);
		return this
	}, t.getTweensOf = function(i, s) {
		for (var o = [], a = Jn(i), l = this._first, c = ki(s), h; l;) l instanceof Lt ? Xv(l._targets, a) && (c ? (!er || l._initted && l._ts) && l.globalTime(0) <= s && l.globalTime(l.totalDuration()) > s : !s || l.isActive()) && o.push(l) : (h = l.getTweensOf(a, s)).length && o.push.apply(o, h), l = l._next;
		return o
	}, t.tweenTo = function(i, s) {
		s = s || {};
		var o = this,
			a = Xn(o, i),
			l = s,
			c = l.startAt,
			h = l.onStart,
			u = l.onStartParams,
			f = l.immediateRender,
			d, p = Lt.to(o, ei({
				ease: s.ease || "none",
				lazy: !1,
				immediateRender: !1,
				time: a,
				overwrite: "auto",
				duration: s.duration || Math.abs((a - (c && "time" in c ? c.time : o._time)) / o.timeScale()) || at,
				onStart: function() {
					if (o.pause(), !d) {
						var v = s.duration || Math.abs((a - (c && "time" in c ? c.time : o._time)) / o.timeScale());
						p._dur !== v && $s(p, v, 0, 1).render(p._time, !0, !0), d = 1
					}
					h && h.apply(p, u || [])
				}
			}, s));
		return f ? p.render(0) : p
	}, t.tweenFromTo = function(i, s, o) {
		return this.tweenTo(s, ei({
			startAt: {
				time: Xn(this, i)
			}
		}, o))
	}, t.recent = function() {
		return this._recent
	}, t.nextLabel = function(i) {
		return i === void 0 && (i = this._time), Uf(this, Xn(this, i))
	}, t.previousLabel = function(i) {
		return i === void 0 && (i = this._time), Uf(this, Xn(this, i), 1)
	}, t.currentLabel = function(i) {
		return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + at)
	}, t.shiftChildren = function(i, s, o) {
		o === void 0 && (o = 0);
		for (var a = this._first, l = this.labels, c; a;) a._start >= o && (a._start += i, a._end += i), a = a._next;
		if (s)
			for (c in l) l[c] >= o && (l[c] += i);
		return Ur(this)
	}, t.invalidate = function(i) {
		var s = this._first;
		for (this._lock = 0; s;) s.invalidate(i), s = s._next;
		return r.prototype.invalidate.call(this, i)
	}, t.clear = function(i) {
		i === void 0 && (i = !0);
		for (var s = this._first, o; s;) o = s._next, this.remove(s), s = o;
		return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), Ur(this)
	}, t.totalDuration = function(i) {
		var s = 0,
			o = this,
			a = o._last,
			l = Zn,
			c, h, u;
		if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -i : i));
		if (o._dirty) {
			for (u = o.parent; a;) c = a._prev, a._dirty && a.totalDuration(), h = a._start, h > l && o._sort && a._ts && !o._lock ? (o._lock = 1, pi(o, a, h - a._delay, 1)._lock = 0) : l = h, h < 0 && a._ts && (s -= h, (!u && !o._dp || u && u.smoothChildTiming) && (o._start += h / o._ts, o._time -= h, o._tTime -= h), o.shiftChildren(-h, !1, -1 / 0), l = 0), a._end > s && a._ts && (s = a._end), a = c;
			$s(o, o === gt && o._time > s ? o._time : s, 1, 1), o._dirty = 0
		}
		return o._tDur
	}, e.updateRoot = function(i) {
		if (gt._ts && (Sg(gt, Wl(i, gt)), bg = Bn.frame), Bn.frame >= Of) {
			Of += Gn.autoSleep || 120;
			var s = gt._first;
			if ((!s || !s._ts) && Gn.autoSleep && Bn._listeners.length < 2) {
				for (; s && !s._ts;) s = s._next;
				s || Bn.sleep()
			}
		}
	}, e
}(la);
ei(dn.prototype, {
	_lock: 0,
	_hasPause: 0,
	_forcing: 0
});
var mx = function(e, t, n, i, s, o, a) {
		var l = new An(this._pt, e, t, 0, 1, Qg, null, s),
			c = 0,
			h = 0,
			u, f, d, p, m, v, g, _;
		for (l.b = n, l.e = i, n += "", i += "", (g = ~i.indexOf("random(")) && (i = oa(i)), o && (_ = [n, i], o(_, e, t), n = _[0], i = _[1]), f = n.match(Ac) || []; u = Ac.exec(i);) p = u[0], m = i.substring(c, u.index), d ? d = (d + 1) % 5 : m.substr(-5) === "rgba(" && (d = 1), p !== f[h++] && (v = parseFloat(f[h - 1]) || 0, l._pt = {
			_next: l._pt,
			p: m || h === 1 ? m : ",",
			s: v,
			c: p.charAt(1) === "=" ? ks(v, p) - v : parseFloat(p) - v,
			m: d && d < 4 ? Math.round : 0
		}, c = Ac.lastIndex);
		return l.c = c < i.length ? i.substring(c, i.length) : "", l.fp = a, (_g.test(i) || g) && (l.e = 0), this._pt = l, l
	},
	qu = function(e, t, n, i, s, o, a, l, c, h) {
		St(i) && (i = i(s || 0, e, o));
		var u = e[t],
			f = n !== "get" ? n : St(u) ? c ? e[t.indexOf("set") || !St(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](c) : e[t]() : u,
			d = St(u) ? c ? yx : Zg : Yu,
			p;
		if (jt(i) && (~i.indexOf("random(") && (i = oa(i)), i.charAt(1) === "=" && (p = ks(f, i) + (en(f) || 0), (p || p === 0) && (i = p))), !h || f !== i || Hh) return !isNaN(f * i) && i !== "" ? (p = new An(this._pt, e, t, +f || 0, i - (f || 0), typeof u == "boolean" ? bx : Jg, 0, d), c && (p.fp = c), a && p.modifier(a, this, e), this._pt = p) : (!u && !(t in e) && Vu(t, i), mx.call(this, e, t, f, i, d, l || Gn.stringFilter, c))
	},
	gx = function(e, t, n, i, s) {
		if (St(e) && (e = Wo(e, s, t, n, i)), !wi(e) || e.style && e.nodeType || nn(e) || mg(e)) return jt(e) ? Wo(e, s, t, n, i) : e;
		var o = {},
			a;
		for (a in e) o[a] = Wo(e[a], s, t, n, i);
		return o
	},
	Yg = function(e, t, n, i, s, o) {
		var a, l, c, h;
		if (On[e] && (a = new On[e]).init(s, a.rawVars ? t[e] : gx(t[e], i, s, o, n), n, i, o) !== !1 && (n._pt = l = new An(n._pt, s, e, 0, 1, a.render, a, 0, a.priority), n !== Is))
			for (c = n._ptLookup[n._targets.indexOf(s)], h = a._props.length; h--;) c[a._props[h]] = l;
		return a
	},
	er, Hh, Xu = function r(e, t, n) {
		var i = e.vars,
			s = i.ease,
			o = i.startAt,
			a = i.immediateRender,
			l = i.lazy,
			c = i.onUpdate,
			h = i.runBackwards,
			u = i.yoyoEase,
			f = i.keyframes,
			d = i.autoRevert,
			p = e._dur,
			m = e._startAt,
			v = e._targets,
			g = e.parent,
			_ = g && g.data === "nested" ? g.vars.targets : v,
			w = e._overwrite === "auto" && !Nu,
			x = e.timeline,
			y, b, S, D, O, z, P, M, E, R, V, N, k;
		if (x && (!f || !s) && (s = "none"), e._ease = Vr(s, Ys.ease), e._yEase = u ? Gg(Vr(u === !0 ? s : u, Ys.ease)) : 0, u && e._yoyo && !e._repeat && (u = e._yEase, e._yEase = e._ease, e._ease = u), e._from = !x && !!i.runBackwards, !x || f && !i.stagger) {
			if (M = v[0] ? kr(v[0]).harness : 0, N = M && i[M.prop], y = Gl(i, Hu), m && (m._zTime < 0 && m.progress(1), t < 0 && h && a && !d ? m.render(-1, !0) : m.revert(h && p ? bl : Wv), m._lazy = 0), o) {
				if (mr(e._startAt = Lt.set(v, ei({
						data: "isStart",
						overwrite: !1,
						parent: g,
						immediateRender: !0,
						lazy: !m && Tn(l),
						startAt: null,
						delay: 0,
						onUpdate: c && function() {
							return Hn(e, "onUpdate")
						},
						stagger: 0
					}, o))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (tn || !a && !d) && e._startAt.revert(bl), a && p && t <= 0 && n <= 0) {
					t && (e._zTime = t);
					return
				}
			} else if (h && p && !m) {
				if (t && (a = !1), S = ei({
						overwrite: !1,
						data: "isFromStart",
						lazy: a && !m && Tn(l),
						immediateRender: a,
						stagger: 0,
						parent: g
					}, y), N && (S[M.prop] = N), mr(e._startAt = Lt.set(v, S)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (tn ? e._startAt.revert(bl) : e._startAt.render(-1, !0)), e._zTime = t, !a) r(e._startAt, at, at);
				else if (!t) return
			}
			for (e._pt = e._ptCache = 0, l = p && Tn(l) || l && !p, b = 0; b < v.length; b++) {
				if (O = v[b], P = O._gsap || Wu(v)[b]._gsap, e._ptLookup[b] = R = {}, Oh[P.id] && sr.length && Hl(), V = _ === v ? b : _.indexOf(O), M && (E = new M).init(O, N || y, e, V, _) !== !1 && (e._pt = D = new An(e._pt, O, E.name, 0, 1, E.render, E, 0, E.priority), E._props.forEach(function(J) {
						R[J] = D
					}), E.priority && (z = 1)), !M || N)
					for (S in y) On[S] && (E = Yg(S, y, e, V, O, _)) ? E.priority && (z = 1) : R[S] = D = qu.call(e, O, S, "get", y[S], V, _, 0, i.stringFilter);
				e._op && e._op[b] && e.kill(O, e._op[b]), w && e._pt && (er = e, gt.killTweensOf(O, R, e.globalTime(t)), k = !e.parent, er = 0), e._pt && l && (Oh[P.id] = 1)
			}
			z && Kg(e), e._onInit && e._onInit(e)
		}
		e._onUpdate = c, e._initted = (!e._op || e._pt) && !k, f && t <= 0 && x.render(Zn, !0, !0)
	},
	_x = function(e, t, n, i, s, o, a, l) {
		var c = (e._pt && e._ptCache || (e._ptCache = {}))[t],
			h, u, f, d;
		if (!c)
			for (c = e._ptCache[t] = [], f = e._ptLookup, d = e._targets.length; d--;) {
				if (h = f[d][t], h && h.d && h.d._pt)
					for (h = h.d._pt; h && h.p !== t && h.fp !== t;) h = h._next;
				if (!h) return Hh = 1, e.vars[t] = "+=0", Xu(e, a), Hh = 0, l ? ra(t + " not eligible for reset") : 1;
				c.push(h)
			}
		for (d = c.length; d--;) u = c[d], h = u._pt || u, h.s = (i || i === 0) && !s ? i : h.s + (i || 0) + o * h.c, h.c = n - h.s, u.e && (u.e = At(n) + en(u.e)), u.b && (u.b = h.s + en(u.b))
	},
	vx = function(e, t) {
		var n = e[0] ? kr(e[0]).harness : 0,
			i = n && n.aliases,
			s, o, a, l;
		if (!i) return t;
		s = jr({}, t);
		for (o in i)
			if (o in s)
				for (l = i[o].split(","), a = l.length; a--;) s[l[a]] = s[o];
		return s
	},
	xx = function(e, t, n, i) {
		var s = t.ease || i || "power1.inOut",
			o, a;
		if (nn(t)) a = n[e] || (n[e] = []), t.forEach(function(l, c) {
			return a.push({
				t: c / (t.length - 1) * 100,
				v: l,
				e: s
			})
		});
		else
			for (o in t) a = n[o] || (n[o] = []), o === "ease" || a.push({
				t: parseFloat(e),
				v: t[o],
				e: s
			})
	},
	Wo = function(e, t, n, i, s) {
		return St(e) ? e.call(t, n, i, s) : jt(e) && ~e.indexOf("random(") ? oa(e) : e
	},
	jg = Gu + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
	$g = {};
En(jg + ",id,stagger,delay,duration,paused,scrollTrigger", function(r) {
	return $g[r] = 1
});
var Lt = function(r) {
	dg(e, r);

	function e(n, i, s, o) {
		var a;
		typeof i == "number" && (s.duration = i, i = s, s = null), a = r.call(this, o ? i : Ho(i)) || this;
		var l = a.vars,
			c = l.duration,
			h = l.delay,
			u = l.immediateRender,
			f = l.stagger,
			d = l.overwrite,
			p = l.keyframes,
			m = l.defaults,
			v = l.scrollTrigger,
			g = l.yoyoEase,
			_ = i.parent || gt,
			w = (nn(n) || mg(n) ? ki(n[0]) : "length" in i) ? [n] : Jn(n),
			x, y, b, S, D, O, z, P;
		if (a._targets = w.length ? Wu(w) : ra("GSAP target " + n + " not found. https://gsap.com", !Gn.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = d, p || f || La(c) || La(h)) {
			if (i = a.vars, x = a.timeline = new dn({
					data: "nested",
					defaults: m || {},
					targets: _ && _.data === "nested" ? _.vars.targets : w
				}), x.kill(), x.parent = x._dp = Pi(a), x._start = 0, f || La(c) || La(h)) {
				if (S = w.length, z = f && Ig(f), wi(f))
					for (D in f) ~jg.indexOf(D) && (P || (P = {}), P[D] = f[D]);
				for (y = 0; y < S; y++) b = Gl(i, $g), b.stagger = 0, g && (b.yoyoEase = g), P && jr(b, P), O = w[y], b.duration = +Wo(c, Pi(a), y, O, w), b.delay = (+Wo(h, Pi(a), y, O, w) || 0) - a._delay, !f && S === 1 && b.delay && (a._delay = h = b.delay, a._start += h, b.delay = 0), x.to(O, b, z ? z(y, O, w) : 0), x._ease = Ze.none;
				x.duration() ? c = h = 0 : a.timeline = 0
			} else if (p) {
				Ho(ei(x.vars.defaults, {
					ease: "none"
				})), x._ease = Vr(p.ease || i.ease || "none");
				var M = 0,
					E, R, V;
				if (nn(p)) p.forEach(function(N) {
					return x.to(w, N, ">")
				}), x.duration();
				else {
					b = {};
					for (D in p) D === "ease" || D === "easeEach" || xx(D, p[D], b, p.easeEach);
					for (D in b)
						for (E = b[D].sort(function(N, k) {
								return N.t - k.t
							}), M = 0, y = 0; y < E.length; y++) R = E[y], V = {
							ease: R.e,
							duration: (R.t - (y ? E[y - 1].t : 0)) / 100 * c
						}, V[D] = R.v, x.to(w, V, M), M += V.duration;
					x.duration() < c && x.to({}, {
						duration: c - x.duration()
					})
				}
			}
			c || a.duration(c = x.duration())
		} else a.timeline = 0;
		return d === !0 && !Nu && (er = Pi(a), gt.killTweensOf(w), er = 0), pi(_, Pi(a), s), i.reversed && a.reverse(), i.paused && a.paused(!0), (u || !c && !p && a._start === qt(_._time) && Tn(u) && Zv(Pi(a)) && _.data !== "nested") && (a._tTime = -at, a.render(Math.max(0, -h) || 0)), v && Lg(Pi(a), v), a
	}
	var t = e.prototype;
	return t.render = function(i, s, o) {
		var a = this._time,
			l = this._tDur,
			c = this._dur,
			h = i < 0,
			u = i > l - at && !h ? l : i < at ? 0 : i,
			f, d, p, m, v, g, _, w, x;
		if (!c) Qv(this, i, s, o);
		else if (u !== this._tTime || !i || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== h) {
			if (f = u, w = this.timeline, this._repeat) {
				if (m = c + this._rDelay, this._repeat < -1 && h) return this.totalTime(m * 100 + i, s, o);
				if (f = qt(u % m), u === l ? (p = this._repeat, f = c) : (p = ~~(u / m), p && p === qt(u / m) && (f = c, p--), f > c && (f = c)), g = this._yoyo && p & 1, g && (x = this._yEase, f = c - f), v = js(this._tTime, m), f === a && !o && this._initted && p === v) return this._tTime = u, this;
				p !== v && (w && this._yEase && Wg(w, g), this.vars.repeatRefresh && !g && !this._lock && this._time !== c && this._initted && (this._lock = o = 1, this.render(qt(m * p), !0).invalidate()._lock = 0))
			}
			if (!this._initted) {
				if (Rg(this, h ? i : f, o, s, u)) return this._tTime = 0, this;
				if (a !== this._time && !(o && this.vars.repeatRefresh && p !== v)) return this;
				if (c !== this._dur) return this.render(i, s, o)
			}
			if (this._tTime = u, this._time = f, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = _ = (x || this._ease)(f / c), this._from && (this.ratio = _ = 1 - _), f && !a && !s && !p && (Hn(this, "onStart"), this._tTime !== u)) return this;
			for (d = this._pt; d;) d.r(_, d.d), d = d._next;
			w && w.render(i < 0 ? i : !f && g ? -at : w._dur * w._ease(f / this._dur), s, o) || this._startAt && (this._zTime = i), this._onUpdate && !s && (h && Nh(this, i, s, o), Hn(this, "onUpdate")), this._repeat && p !== v && this.vars.onRepeat && !s && this.parent && Hn(this, "onRepeat"), (u === this._tDur || !u) && this._tTime === u && (h && !this._onUpdate && Nh(this, i, !0, !0), (i || !c) && (u === this._tDur && this._ts > 0 || !u && this._ts < 0) && mr(this, 1), !s && !(h && !a) && (u || a || g) && (Hn(this, u === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < l && this.timeScale() > 0) && this._prom()))
		}
		return this
	}, t.targets = function() {
		return this._targets
	}, t.invalidate = function(i) {
		return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), r.prototype.invalidate.call(this, i)
	}, t.resetTo = function(i, s, o, a, l) {
		aa || Bn.wake(), this._ts || this.play();
		var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
			h;
		return this._initted || Xu(this, c), h = this._ease(c / this._dur), _x(this, i, s, o, a, h, c, l) ? this.resetTo(i, s, o, a, 1) : (lc(this, 0), this.parent || Ag(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
	}, t.kill = function(i, s) {
		if (s === void 0 && (s = "all"), !i && (!s || s === "all")) return this._lazy = this._pt = 0, this.parent ? Io(this) : this;
		if (this.timeline) {
			var o = this.timeline.totalDuration();
			return this.timeline.killTweensOf(i, s, er && er.vars.overwrite !== !0)._first || Io(this), this.parent && o !== this.timeline.totalDuration() && $s(this, this._dur * this.timeline._tDur / o, 0, 1), this
		}
		var a = this._targets,
			l = i ? Jn(i) : a,
			c = this._ptLookup,
			h = this._pt,
			u, f, d, p, m, v, g;
		if ((!s || s === "all") && jv(a, l)) return s === "all" && (this._pt = 0), Io(this);
		for (u = this._op = this._op || [], s !== "all" && (jt(s) && (m = {}, En(s, function(_) {
				return m[_] = 1
			}), s = m), s = vx(a, s)), g = a.length; g--;)
			if (~l.indexOf(a[g])) {
				f = c[g], s === "all" ? (u[g] = s, p = f, d = {}) : (d = u[g] = u[g] || {}, p = s);
				for (m in p) v = f && f[m], v && ((!("kill" in v.d) || v.d.kill(m) === !0) && oc(this, v, "_pt"), delete f[m]), d !== "all" && (d[m] = 1)
			} return this._initted && !this._pt && h && Io(this), this
	}, e.to = function(i, s) {
		return new e(i, s, arguments[2])
	}, e.from = function(i, s) {
		return Go(1, arguments)
	}, e.delayedCall = function(i, s, o, a) {
		return new e(s, 0, {
			immediateRender: !1,
			lazy: !1,
			overwrite: !1,
			delay: i,
			onComplete: s,
			onReverseComplete: s,
			onCompleteParams: o,
			onReverseCompleteParams: o,
			callbackScope: a
		})
	}, e.fromTo = function(i, s, o) {
		return Go(2, arguments)
	}, e.set = function(i, s) {
		return s.duration = 0, s.repeatDelay || (s.repeat = 0), new e(i, s)
	}, e.killTweensOf = function(i, s, o) {
		return gt.killTweensOf(i, s, o)
	}, e
}(la);
ei(Lt.prototype, {
	_targets: [],
	_lazy: 0,
	_startAt: 0,
	_op: 0,
	_onInit: 0
});
En("staggerTo,staggerFrom,staggerFromTo", function(r) {
	Lt[r] = function() {
		var e = new dn,
			t = kh.call(arguments, 0);
		return t.splice(r === "staggerFromTo" ? 5 : 4, 0, 0), e[r].apply(e, t)
	}
});
var Yu = function(e, t, n) {
		return e[t] = n
	},
	Zg = function(e, t, n) {
		return e[t](n)
	},
	yx = function(e, t, n, i) {
		return e[t](i.fp, n)
	},
	wx = function(e, t, n) {
		return e.setAttribute(t, n)
	},
	ju = function(e, t) {
		return St(e[t]) ? Zg : Bu(e[t]) && e.setAttribute ? wx : Yu
	},
	Jg = function(e, t) {
		return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t)
	},
	bx = function(e, t) {
		return t.set(t.t, t.p, !!(t.s + t.c * e), t)
	},
	Qg = function(e, t) {
		var n = t._pt,
			i = "";
		if (!e && t.b) i = t.b;
		else if (e === 1 && t.e) i = t.e;
		else {
			for (; n;) i = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) + i, n = n._next;
			i += t.c
		}
		t.set(t.t, t.p, i, t)
	},
	$u = function(e, t) {
		for (var n = t._pt; n;) n.r(e, n.d), n = n._next
	},
	Mx = function(e, t, n, i) {
		for (var s = this._pt, o; s;) o = s._next, s.p === i && s.modifier(e, t, n), s = o
	},
	Sx = function(e) {
		for (var t = this._pt, n, i; t;) i = t._next, t.p === e && !t.op || t.op === e ? oc(this, t, "_pt") : t.dep || (n = 1), t = i;
		return !n
	},
	Tx = function(e, t, n, i) {
		i.mSet(e, t, i.m.call(i.tween, n, i.mt), i)
	},
	Kg = function(e) {
		for (var t = e._pt, n, i, s, o; t;) {
			for (n = t._next, i = s; i && i.pr > t.pr;) i = i._next;
			(t._prev = i ? i._prev : o) ? t._prev._next = t: s = t, (t._next = i) ? i._prev = t : o = t, t = n
		}
		e._pt = s
	},
	An = function() {
		function r(t, n, i, s, o, a, l, c, h) {
			this.t = n, this.s = s, this.c = o, this.p = i, this.r = a || Jg, this.d = l || this, this.set = c || Yu, this.pr = h || 0, this._next = t, t && (t._prev = this)
		}
		var e = r.prototype;
		return e.modifier = function(n, i, s) {
			this.mSet = this.mSet || this.set, this.set = Tx, this.m = n, this.mt = s, this.tween = i
		}, r
	}();
En(Gu + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(r) {
	return Hu[r] = 1
});
Wn.TweenMax = Wn.TweenLite = Lt;
Wn.TimelineLite = Wn.TimelineMax = dn;
gt = new dn({
	sortChildren: !1,
	defaults: Ys,
	autoRemoveChildren: !0,
	id: "root",
	smoothChildTiming: !0
});
Gn.stringFilter = Hg;
var Hr = [],
	Sl = {},
	Ex = [],
	Hf = 0,
	Ax = 0,
	Dc = function(e) {
		return (Sl[e] || Ex).map(function(t) {
			return t()
		})
	},
	Gh = function() {
		var e = Date.now(),
			t = [];
		e - Hf > 2 && (Dc("matchMediaInit"), Hr.forEach(function(n) {
			var i = n.queries,
				s = n.conditions,
				o, a, l, c;
			for (a in i) o = Yn.matchMedia(i[a]).matches, o && (l = 1), o !== s[a] && (s[a] = o, c = 1);
			c && (n.revert(), l && t.push(n))
		}), Dc("matchMediaRevert"), t.forEach(function(n) {
			return n.onMatch(n, function(i) {
				return n.add(null, i)
			})
		}), Hf = e, Dc("matchMedia"))
	},
	e_ = function() {
		function r(t, n) {
			this.selector = n && Uh(n), this.data = [], this._r = [], this.isReverted = !1, this.id = Ax++, t && this.add(t)
		}
		var e = r.prototype;
		return e.add = function(n, i, s) {
			St(n) && (s = i, i = n, n = St);
			var o = this,
				a = function() {
					var c = Mt,
						h = o.selector,
						u;
					return c && c !== o && c.data.push(o), s && (o.selector = Uh(s)), Mt = o, u = i.apply(o, arguments), St(u) && o._r.push(u), Mt = c, o.selector = h, o.isReverted = !1, u
				};
			return o.last = a, n === St ? a(o, function(l) {
				return o.add(null, l)
			}) : n ? o[n] = a : a
		}, e.ignore = function(n) {
			var i = Mt;
			Mt = null, n(this), Mt = i
		}, e.getTweens = function() {
			var n = [];
			return this.data.forEach(function(i) {
				return i instanceof r ? n.push.apply(n, i.getTweens()) : i instanceof Lt && !(i.parent && i.parent.data === "nested") && n.push(i)
			}), n
		}, e.clear = function() {
			this._r.length = this.data.length = 0
		}, e.kill = function(n, i) {
			var s = this;
			if (n ? function() {
					for (var a = s.getTweens(), l = s.data.length, c; l--;) c = s.data[l], c.data === "isFlip" && (c.revert(), c.getChildren(!0, !0, !1).forEach(function(h) {
						return a.splice(a.indexOf(h), 1)
					}));
					for (a.map(function(h) {
							return {
								g: h._dur || h._delay || h._sat && !h._sat.vars.immediateRender ? h.globalTime(0) : -1 / 0,
								t: h
							}
						}).sort(function(h, u) {
							return u.g - h.g || -1 / 0
						}).forEach(function(h) {
							return h.t.revert(n)
						}), l = s.data.length; l--;) c = s.data[l], c instanceof dn ? c.data !== "nested" && (c.scrollTrigger && c.scrollTrigger.revert(), c.kill()) : !(c instanceof Lt) && c.revert && c.revert(n);
					s._r.forEach(function(h) {
						return h(n, s)
					}), s.isReverted = !0
				}() : this.data.forEach(function(a) {
					return a.kill && a.kill()
				}), this.clear(), i)
				for (var o = Hr.length; o--;) Hr[o].id === this.id && Hr.splice(o, 1)
		}, e.revert = function(n) {
			this.kill(n || {})
		}, r
	}(),
	Cx = function() {
		function r(t) {
			this.contexts = [], this.scope = t
		}
		var e = r.prototype;
		return e.add = function(n, i, s) {
			wi(n) || (n = {
				matches: n
			});
			var o = new e_(0, s || this.scope),
				a = o.conditions = {},
				l, c, h;
			Mt && !o.selector && (o.selector = Mt.selector), this.contexts.push(o), i = o.add("onMatch", i), o.queries = n;
			for (c in n) c === "all" ? h = 1 : (l = Yn.matchMedia(n[c]), l && (Hr.indexOf(o) < 0 && Hr.push(o), (a[c] = l.matches) && (h = 1), l.addListener ? l.addListener(Gh) : l.addEventListener("change", Gh)));
			return h && i(o, function(u) {
				return o.add(null, u)
			}), this
		}, e.revert = function(n) {
			this.kill(n || {})
		}, e.kill = function(n) {
			this.contexts.forEach(function(i) {
				return i.kill(n, !0)
			})
		}, r
	}(),
	ql = {
		registerPlugin: function() {
			for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
			t.forEach(function(i) {
				return kg(i)
			})
		},
		timeline: function(e) {
			return new dn(e)
		},
		getTweensOf: function(e, t) {
			return gt.getTweensOf(e, t)
		},
		getProperty: function(e, t, n, i) {
			jt(e) && (e = Jn(e)[0]);
			var s = kr(e || {}).get,
				o = n ? Eg : Tg;
			return n === "native" && (n = ""), e && (t ? o((On[t] && On[t].get || s)(e, t, n, i)) : function(a, l, c) {
				return o((On[a] && On[a].get || s)(e, a, l, c))
			})
		},
		quickSetter: function(e, t, n) {
			if (e = Jn(e), e.length > 1) {
				var i = e.map(function(h) {
						return Rn.quickSetter(h, t, n)
					}),
					s = i.length;
				return function(h) {
					for (var u = s; u--;) i[u](h)
				}
			}
			e = e[0] || {};
			var o = On[t],
				a = kr(e),
				l = a.harness && (a.harness.aliases || {})[t] || t,
				c = o ? function(h) {
					var u = new o;
					Is._pt = 0, u.init(e, n ? h + n : h, Is, 0, [e]), u.render(1, u), Is._pt && $u(1, Is)
				} : a.set(e, l);
			return o ? c : function(h) {
				return c(e, l, n ? h + n : h, a, 1)
			}
		},
		quickTo: function(e, t, n) {
			var i, s = Rn.to(e, jr((i = {}, i[t] = "+=0.1", i.paused = !0, i), n || {})),
				o = function(l, c, h) {
					return s.resetTo(t, l, c, h)
				};
			return o.tween = s, o
		},
		isTweening: function(e) {
			return gt.getTweensOf(e, !0).length > 0
		},
		defaults: function(e) {
			return e && e.ease && (e.ease = Vr(e.ease, Ys.ease)), Nf(Ys, e || {})
		},
		config: function(e) {
			return Nf(Gn, e || {})
		},
		registerEffect: function(e) {
			var t = e.name,
				n = e.effect,
				i = e.plugins,
				s = e.defaults,
				o = e.extendTimeline;
			(i || "").split(",").forEach(function(a) {
				return a && !On[a] && !Wn[a] && ra(t + " effect requires " + a + " plugin.")
			}), Cc[t] = function(a, l, c) {
				return n(Jn(a), ei(l || {}, s), c)
			}, o && (dn.prototype[t] = function(a, l, c) {
				return this.add(Cc[t](a, wi(l) ? l : (c = l) && {}, this), c)
			})
		},
		registerEase: function(e, t) {
			Ze[e] = Vr(t)
		},
		parseEase: function(e, t) {
			return arguments.length ? Vr(e, t) : Ze
		},
		getById: function(e) {
			return gt.getById(e)
		},
		exportRoot: function(e, t) {
			e === void 0 && (e = {});
			var n = new dn(e),
				i, s;
			for (n.smoothChildTiming = Tn(e.smoothChildTiming), gt.remove(n), n._dp = 0, n._time = n._tTime = gt._time, i = gt._first; i;) s = i._next, (t || !(!i._dur && i instanceof Lt && i.vars.onComplete === i._targets[0])) && pi(n, i, i._start - i._delay), i = s;
			return pi(gt, n, 0), n
		},
		context: function(e, t) {
			return e ? new e_(e, t) : Mt
		},
		matchMedia: function(e) {
			return new Cx(e)
		},
		matchMediaRefresh: function() {
			return Hr.forEach(function(e) {
				var t = e.conditions,
					n, i;
				for (i in t) t[i] && (t[i] = !1, n = 1);
				n && e.revert()
			}) || Gh()
		},
		addEventListener: function(e, t) {
			var n = Sl[e] || (Sl[e] = []);
			~n.indexOf(t) || n.push(t)
		},
		removeEventListener: function(e, t) {
			var n = Sl[e],
				i = n && n.indexOf(t);
			i >= 0 && n.splice(i, 1)
		},
		utils: {
			wrap: ox,
			wrapYoyo: ax,
			distribute: Ig,
			random: zg,
			snap: Fg,
			normalize: sx,
			getUnit: en,
			clamp: tx,
			splitColor: Ug,
			toArray: Jn,
			selector: Uh,
			mapRange: Ng,
			pipe: ix,
			unitize: rx,
			interpolate: lx,
			shuffle: Dg
		},
		install: yg,
		effects: Cc,
		ticker: Bn,
		updateRoot: dn.updateRoot,
		plugins: On,
		globalTimeline: gt,
		core: {
			PropTween: An,
			globals: wg,
			Tween: Lt,
			Timeline: dn,
			Animation: la,
			getCache: kr,
			_removeLinkedListItem: oc,
			reverting: function() {
				return tn
			},
			context: function(e) {
				return e && Mt && (Mt.data.push(e), e._ctx = Mt), Mt
			},
			suppressOverwrites: function(e) {
				return Nu = e
			}
		}
	};
En("to,from,fromTo,delayedCall,set,killTweensOf", function(r) {
	return ql[r] = Lt[r]
});
Bn.add(dn.updateRoot);
Is = ql.to({}, {
	duration: 0
});
var Lx = function(e, t) {
		for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t;) n = n._next;
		return n
	},
	Rx = function(e, t) {
		var n = e._targets,
			i, s, o;
		for (i in t)
			for (s = n.length; s--;) o = e._ptLookup[s][i], o && (o = o.d) && (o._pt && (o = Lx(o, i)), o && o.modifier && o.modifier(t[i], e, n[s], i))
	},
	Ic = function(e, t) {
		return {
			name: e,
			rawVars: 1,
			init: function(i, s, o) {
				o._onInit = function(a) {
					var l, c;
					if (jt(s) && (l = {}, En(s, function(h) {
							return l[h] = 1
						}), s = l), t) {
						l = {};
						for (c in s) l[c] = t(s[c]);
						s = l
					}
					Rx(a, s)
				}
			}
		}
	},
	Rn = ql.registerPlugin({
		name: "attr",
		init: function(e, t, n, i, s) {
			var o, a, l;
			this.tween = n;
			for (o in t) l = e.getAttribute(o) || "", a = this.add(e, "setAttribute", (l || 0) + "", t[o], i, s, 0, 0, o), a.op = o, a.b = l, this._props.push(o)
		},
		render: function(e, t) {
			for (var n = t._pt; n;) tn ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), n = n._next
		}
	}, {
		name: "endArray",
		init: function(e, t) {
			for (var n = t.length; n--;) this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1)
		}
	}, Ic("roundProps", Vh), Ic("modifiers"), Ic("snap", Fg)) || ql;
Lt.version = dn.version = Rn.version = "3.12.3";
xg = 1;
ku() && Zs();
Ze.Power0;
Ze.Power1;
Ze.Power2;
Ze.Power3;
Ze.Power4;
Ze.Linear;
Ze.Quad;
Ze.Cubic;
Ze.Quart;
Ze.Quint;
Ze.Strong;
Ze.Elastic;
Ze.Back;
Ze.SteppedEase;
Ze.Bounce;
Ze.Sine;
Ze.Expo;
Ze.Circ;
/*!
 * CSSPlugin 3.12.3
 * https://gsap.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Gf, tr, Us, Zu, Nr, Wf, Ju, Px = function() {
		return typeof window < "u"
	},
	Ui = {},
	Lr = 180 / Math.PI,
	Vs = Math.PI / 180,
	is = Math.atan2,
	qf = 1e8,
	Qu = /([A-Z])/g,
	Dx = /(left|right|width|margin|padding|x)/i,
	Ix = /[\s,\(]\S/,
	mi = {
		autoAlpha: "opacity,visibility",
		scale: "scaleX,scaleY",
		alpha: "opacity"
	},
	Wh = function(e, t) {
		return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
	},
	Fx = function(e, t) {
		return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
	},
	zx = function(e, t) {
		return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
	},
	Ox = function(e, t) {
		var n = t.s + t.c * e;
		t.set(t.t, t.p, ~~(n + (n < 0 ? -.5 : .5)) + t.u, t)
	},
	t_ = function(e, t) {
		return t.set(t.t, t.p, e ? t.e : t.b, t)
	},
	n_ = function(e, t) {
		return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t)
	},
	Nx = function(e, t, n) {
		return e.style[t] = n
	},
	Bx = function(e, t, n) {
		return e.style.setProperty(t, n)
	},
	kx = function(e, t, n) {
		return e._gsap[t] = n
	},
	Ux = function(e, t, n) {
		return e._gsap.scaleX = e._gsap.scaleY = n
	},
	Vx = function(e, t, n, i, s) {
		var o = e._gsap;
		o.scaleX = o.scaleY = n, o.renderTransform(s, o)
	},
	Hx = function(e, t, n, i, s) {
		var o = e._gsap;
		o[t] = n, o.renderTransform(s, o)
	},
	_t = "transform",
	Cn = _t + "Origin",
	Gx = function r(e, t) {
		var n = this,
			i = this.target,
			s = i.style,
			o = i._gsap;
		if (e in Ui && s) {
			if (this.tfm = this.tfm || {}, e !== "transform") e = mi[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(a) {
				return n.tfm[a] = Di(i, a)
			}) : this.tfm[e] = o.x ? o[e] : Di(i, e), e === Cn && (this.tfm.zOrigin = o.zOrigin);
			else return mi.transform.split(",").forEach(function(a) {
				return r.call(n, a, t)
			});
			if (this.props.indexOf(_t) >= 0) return;
			o.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(Cn, t, "")), e = _t
		}(s || t) && this.props.push(e, t, s[e])
	},
	i_ = function(e) {
		e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
	},
	Wx = function() {
		var e = this.props,
			t = this.target,
			n = t.style,
			i = t._gsap,
			s, o;
		for (s = 0; s < e.length; s += 3) e[s + 1] ? t[e[s]] = e[s + 2] : e[s + 2] ? n[e[s]] = e[s + 2] : n.removeProperty(e[s].substr(0, 2) === "--" ? e[s] : e[s].replace(Qu, "-$1").toLowerCase());
		if (this.tfm) {
			for (o in this.tfm) i[o] = this.tfm[o];
			i.svg && (i.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), s = Ju(), (!s || !s.isStart) && !n[_t] && (i_(n), i.zOrigin && n[Cn] && (n[Cn] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1)
		}
	},
	r_ = function(e, t) {
		var n = {
			target: e,
			props: [],
			revert: Wx,
			save: Gx
		};
		return e._gsap || Rn.core.getCache(e), t && t.split(",").forEach(function(i) {
			return n.save(i)
		}), n
	},
	s_, qh = function(e, t) {
		var n = tr.createElementNS ? tr.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : tr.createElement(e);
		return n && n.style ? n : tr.createElement(e)
	},
	vi = function r(e, t, n) {
		var i = getComputedStyle(e);
		return i[t] || i.getPropertyValue(t.replace(Qu, "-$1").toLowerCase()) || i.getPropertyValue(t) || !n && r(e, Js(t) || t, 1) || ""
	},
	Xf = "O,Moz,ms,Ms,Webkit".split(","),
	Js = function(e, t, n) {
		var i = t || Nr,
			s = i.style,
			o = 5;
		if (e in s && !n) return e;
		for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(Xf[o] + e in s););
		return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Xf[o] : "") + e
	},
	Xh = function() {
		Px() && window.document && (Gf = window, tr = Gf.document, Us = tr.documentElement, Nr = qh("div") || {
			style: {}
		}, qh("div"), _t = Js(_t), Cn = _t + "Origin", Nr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", s_ = !!Js("perspective"), Ju = Rn.core.reverting, Zu = 1)
	},
	Fc = function r(e) {
		var t = qh("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
			n = this.parentNode,
			i = this.nextSibling,
			s = this.style.cssText,
			o;
		if (Us.appendChild(t), t.appendChild(this), this.style.display = "block", e) try {
			o = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = r
		} catch {} else this._gsapBBox && (o = this._gsapBBox());
		return n && (i ? n.insertBefore(this, i) : n.appendChild(this)), Us.removeChild(t), this.style.cssText = s, o
	},
	Yf = function(e, t) {
		for (var n = t.length; n--;)
			if (e.hasAttribute(t[n])) return e.getAttribute(t[n])
	},
	o_ = function(e) {
		var t;
		try {
			t = e.getBBox()
		} catch {
			t = Fc.call(e, !0)
		}
		return t && (t.width || t.height) || e.getBBox === Fc || (t = Fc.call(e, !0)), t && !t.width && !t.x && !t.y ? {
			x: +Yf(e, ["x", "cx", "x1"]) || 0,
			y: +Yf(e, ["y", "cy", "y1"]) || 0,
			width: 0,
			height: 0
		} : t
	},
	a_ = function(e) {
		return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && o_(e))
	},
	$r = function(e, t) {
		if (t) {
			var n = e.style,
				i;
			t in Ui && t !== Cn && (t = _t), n.removeProperty ? (i = t.substr(0, 2), (i === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), n.removeProperty(i === "--" ? t : t.replace(Qu, "-$1").toLowerCase())) : n.removeAttribute(t)
		}
	},
	nr = function(e, t, n, i, s, o) {
		var a = new An(e._pt, t, n, 0, 1, o ? n_ : t_);
		return e._pt = a, a.b = i, a.e = s, e._props.push(n), a
	},
	jf = {
		deg: 1,
		rad: 1,
		turn: 1
	},
	qx = {
		grid: 1,
		flex: 1
	},
	gr = function r(e, t, n, i) {
		var s = parseFloat(n) || 0,
			o = (n + "").trim().substr((s + "").length) || "px",
			a = Nr.style,
			l = Dx.test(t),
			c = e.tagName.toLowerCase() === "svg",
			h = (c ? "client" : "offset") + (l ? "Width" : "Height"),
			u = 100,
			f = i === "px",
			d = i === "%",
			p, m, v, g;
		if (i === o || !s || jf[i] || jf[o]) return s;
		if (o !== "px" && !f && (s = r(e, t, n, "px")), g = e.getCTM && a_(e), (d || o === "%") && (Ui[t] || ~t.indexOf("adius"))) return p = g ? e.getBBox()[l ? "width" : "height"] : e[h], At(d ? s / p * u : s / 100 * p);
		if (a[l ? "width" : "height"] = u + (f ? o : i), m = ~t.indexOf("adius") || i === "em" && e.appendChild && !c ? e : e.parentNode, g && (m = (e.ownerSVGElement || {}).parentNode), (!m || m === tr || !m.appendChild) && (m = tr.body), v = m._gsap, v && d && v.width && l && v.time === Bn.time && !v.uncache) return At(s / v.width * u);
		if (d && (t === "height" || t === "width")) {
			var _ = e.style[t];
			e.style[t] = u + i, p = e[h], _ ? e.style[t] = _ : $r(e, t)
		} else(d || o === "%") && !qx[vi(m, "display")] && (a.position = vi(e, "position")), m === e && (a.position = "static"), m.appendChild(Nr), p = Nr[h], m.removeChild(Nr), a.position = "absolute";
		return l && d && (v = kr(m), v.time = Bn.time, v.width = m[h]), At(f ? p * s / u : p && s ? u / p * s : 0)
	},
	Di = function(e, t, n, i) {
		var s;
		return Zu || Xh(), t in mi && t !== "transform" && (t = mi[t], ~t.indexOf(",") && (t = t.split(",")[0])), Ui[t] && t !== "transform" ? (s = ha(e, i), s = t !== "transformOrigin" ? s[t] : s.svg ? s.origin : Yl(vi(e, Cn)) + " " + s.zOrigin + "px") : (s = e.style[t], (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) && (s = Xl[t] && Xl[t](e, t, n) || vi(e, t) || Mg(e, t) || (t === "opacity" ? 1 : 0))), n && !~(s + "").trim().indexOf(" ") ? gr(e, t, s, n) + n : s
	},
	Xx = function(e, t, n, i) {
		if (!n || n === "none") {
			var s = Js(t, e, 1),
				o = s && vi(e, s, 1);
			o && o !== n ? (t = s, n = o) : t === "borderColor" && (n = vi(e, "borderTopColor"))
		}
		var a = new An(this._pt, e.style, t, 0, 1, Qg),
			l = 0,
			c = 0,
			h, u, f, d, p, m, v, g, _, w, x, y;
		if (a.b = n, a.e = i, n += "", i += "", i === "auto" && (m = e.style[t], e.style[t] = i, i = vi(e, t) || i, m ? e.style[t] = m : $r(e, t)), h = [n, i], Hg(h), n = h[0], i = h[1], f = n.match(Ds) || [], y = i.match(Ds) || [], y.length) {
			for (; u = Ds.exec(i);) v = u[0], _ = i.substring(l, u.index), p ? p = (p + 1) % 5 : (_.substr(-5) === "rgba(" || _.substr(-5) === "hsla(") && (p = 1), v !== (m = f[c++] || "") && (d = parseFloat(m) || 0, x = m.substr((d + "").length), v.charAt(1) === "=" && (v = ks(d, v) + x), g = parseFloat(v), w = v.substr((g + "").length), l = Ds.lastIndex - w.length, w || (w = w || Gn.units[t] || x, l === i.length && (i += w, a.e += w)), x !== w && (d = gr(e, t, m, w) || 0), a._pt = {
				_next: a._pt,
				p: _ || c === 1 ? _ : ",",
				s: d,
				c: g - d,
				m: p && p < 4 || t === "zIndex" ? Math.round : 0
			});
			a.c = l < i.length ? i.substring(l, i.length) : ""
		} else a.r = t === "display" && i === "none" ? n_ : t_;
		return _g.test(i) && (a.e = 0), this._pt = a, a
	},
	$f = {
		top: "0%",
		bottom: "100%",
		left: "0%",
		right: "100%",
		center: "50%"
	},
	Yx = function(e) {
		var t = e.split(" "),
			n = t[0],
			i = t[1] || "50%";
		return (n === "top" || n === "bottom" || i === "left" || i === "right") && (e = n, n = i, i = e), t[0] = $f[n] || n, t[1] = $f[i] || i, t.join(" ")
	},
	jx = function(e, t) {
		if (t.tween && t.tween._time === t.tween._dur) {
			var n = t.t,
				i = n.style,
				s = t.u,
				o = n._gsap,
				a, l, c;
			if (s === "all" || s === !0) i.cssText = "", l = 1;
			else
				for (s = s.split(","), c = s.length; --c > -1;) a = s[c], Ui[a] && (l = 1, a = a === "transformOrigin" ? Cn : _t), $r(n, a);
			l && ($r(n, _t), o && (o.svg && n.removeAttribute("transform"), ha(n, 1), o.uncache = 1, i_(i)))
		}
	},
	Xl = {
		clearProps: function(e, t, n, i, s) {
			if (s.data !== "isFromStart") {
				var o = e._pt = new An(e._pt, t, n, 0, 0, jx);
				return o.u = i, o.pr = -10, o.tween = s, e._props.push(n), 1
			}
		}
	},
	ca = [1, 0, 0, 1, 0, 0],
	l_ = {},
	c_ = function(e) {
		return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
	},
	Zf = function(e) {
		var t = vi(e, _t);
		return c_(t) ? ca : t.substr(7).match(gg).map(At)
	},
	Ku = function(e, t) {
		var n = e._gsap || kr(e),
			i = e.style,
			s = Zf(e),
			o, a, l, c;
		return n.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, s = [l.a, l.b, l.c, l.d, l.e, l.f], s.join(",") === "1,0,0,1,0,0" ? ca : s) : (s === ca && !e.offsetParent && e !== Us && !n.svg && (l = i.display, i.display = "block", o = e.parentNode, (!o || !e.offsetParent) && (c = 1, a = e.nextElementSibling, Us.appendChild(e)), s = Zf(e), l ? i.display = l : $r(e, "display"), c && (a ? o.insertBefore(e, a) : o ? o.appendChild(e) : Us.removeChild(e))), t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s)
	},
	Yh = function(e, t, n, i, s, o) {
		var a = e._gsap,
			l = s || Ku(e, !0),
			c = a.xOrigin || 0,
			h = a.yOrigin || 0,
			u = a.xOffset || 0,
			f = a.yOffset || 0,
			d = l[0],
			p = l[1],
			m = l[2],
			v = l[3],
			g = l[4],
			_ = l[5],
			w = t.split(" "),
			x = parseFloat(w[0]) || 0,
			y = parseFloat(w[1]) || 0,
			b, S, D, O;
		n ? l !== ca && (S = d * v - p * m) && (D = x * (v / S) + y * (-m / S) + (m * _ - v * g) / S, O = x * (-p / S) + y * (d / S) - (d * _ - p * g) / S, x = D, y = O) : (b = o_(e), x = b.x + (~w[0].indexOf("%") ? x / 100 * b.width : x), y = b.y + (~(w[1] || w[0]).indexOf("%") ? y / 100 * b.height : y), !("xOrigin" in a) && (x || y) && (x -= b.x, y -= b.y)), i || i !== !1 && a.smooth ? (g = x - c, _ = y - h, a.xOffset = u + (g * d + _ * m) - g, a.yOffset = f + (g * p + _ * v) - _) : a.xOffset = a.yOffset = 0, a.xOrigin = x, a.yOrigin = y, a.smooth = !!i, a.origin = t, a.originIsAbsolute = !!n, e.style[Cn] = "0px 0px", o && (nr(o, a, "xOrigin", c, x), nr(o, a, "yOrigin", h, y), nr(o, a, "xOffset", u, a.xOffset), nr(o, a, "yOffset", f, a.yOffset)), e.setAttribute("data-svg-origin", x + " " + y)
	},
	ha = function(e, t) {
		var n = e._gsap || new Xg(e);
		if ("x" in n && !t && !n.uncache) return n;
		var i = e.style,
			s = n.scaleX < 0,
			o = "px",
			a = "deg",
			l = getComputedStyle(e),
			c = vi(e, Cn) || "0",
			h, u, f, d, p, m, v, g, _, w, x, y, b, S, D, O, z, P, M, E, R, V, N, k, J, se, A, Y, de, U, W, te;
		return h = u = f = m = v = g = _ = w = x = 0, d = p = 1, n.svg = !!(e.getCTM && a_(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[_t] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[_t] !== "none" ? l[_t] : "")), i.scale = i.rotate = i.translate = "none"), S = Ku(e, n.svg), n.svg && (n.uncache ? (J = e.getBBox(), c = n.xOrigin - J.x + "px " + (n.yOrigin - J.y) + "px", k = "") : k = !t && e.getAttribute("data-svg-origin"), Yh(e, k || c, !!k || n.originIsAbsolute, n.smooth !== !1, S)), y = n.xOrigin || 0, b = n.yOrigin || 0, S !== ca && (P = S[0], M = S[1], E = S[2], R = S[3], h = V = S[4], u = N = S[5], S.length === 6 ? (d = Math.sqrt(P * P + M * M), p = Math.sqrt(R * R + E * E), m = P || M ? is(M, P) * Lr : 0, _ = E || R ? is(E, R) * Lr + m : 0, _ && (p *= Math.abs(Math.cos(_ * Vs))), n.svg && (h -= y - (y * P + b * E), u -= b - (y * M + b * R))) : (te = S[6], U = S[7], A = S[8], Y = S[9], de = S[10], W = S[11], h = S[12], u = S[13], f = S[14], D = is(te, de), v = D * Lr, D && (O = Math.cos(-D), z = Math.sin(-D), k = V * O + A * z, J = N * O + Y * z, se = te * O + de * z, A = V * -z + A * O, Y = N * -z + Y * O, de = te * -z + de * O, W = U * -z + W * O, V = k, N = J, te = se), D = is(-E, de), g = D * Lr, D && (O = Math.cos(-D), z = Math.sin(-D), k = P * O - A * z, J = M * O - Y * z, se = E * O - de * z, W = R * z + W * O, P = k, M = J, E = se), D = is(M, P), m = D * Lr, D && (O = Math.cos(D), z = Math.sin(D), k = P * O + M * z, J = V * O + N * z, M = M * O - P * z, N = N * O - V * z, P = k, V = J), v && Math.abs(v) + Math.abs(m) > 359.9 && (v = m = 0, g = 180 - g), d = At(Math.sqrt(P * P + M * M + E * E)), p = At(Math.sqrt(N * N + te * te)), D = is(V, N), _ = Math.abs(D) > 2e-4 ? D * Lr : 0, x = W ? 1 / (W < 0 ? -W : W) : 0), n.svg && (k = e.getAttribute("transform"), n.forceCSS = e.setAttribute("transform", "") || !c_(vi(e, _t)), k && e.setAttribute("transform", k))), Math.abs(_) > 90 && Math.abs(_) < 270 && (s ? (d *= -1, _ += m <= 0 ? 180 : -180, m += m <= 0 ? 180 : -180) : (p *= -1, _ += _ <= 0 ? 180 : -180)), t = t || n.uncache, n.x = h - ((n.xPercent = h && (!t && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-h) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + o, n.y = u - ((n.yPercent = u && (!t && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + o, n.z = f + o, n.scaleX = At(d), n.scaleY = At(p), n.rotation = At(m) + a, n.rotationX = At(v) + a, n.rotationY = At(g) + a, n.skewX = _ + a, n.skewY = w + a, n.transformPerspective = x + o, (n.zOrigin = parseFloat(c.split(" ")[2]) || !t && n.zOrigin || 0) && (i[Cn] = Yl(c)), n.svg || (n.xOffset = n.yOffset = 0), n.force3D = Gn.force3D, n.renderTransform = n.svg ? Zx : s_ ? h_ : $x, n.uncache = 0, n
	},
	Yl = function(e) {
		return (e = e.split(" "))[0] + " " + e[1]
	},
	zc = function(e, t, n) {
		var i = en(t);
		return At(parseFloat(t) + parseFloat(gr(e, "x", n + "px", i))) + i
	},
	$x = function(e, t) {
		t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, h_(e, t)
	},
	Mr = "0deg",
	vo = "0px",
	Sr = ") ",
	h_ = function(e, t) {
		var n = t || this,
			i = n.xPercent,
			s = n.yPercent,
			o = n.x,
			a = n.y,
			l = n.z,
			c = n.rotation,
			h = n.rotationY,
			u = n.rotationX,
			f = n.skewX,
			d = n.skewY,
			p = n.scaleX,
			m = n.scaleY,
			v = n.transformPerspective,
			g = n.force3D,
			_ = n.target,
			w = n.zOrigin,
			x = "",
			y = g === "auto" && e && e !== 1 || g === !0;
		if (w && (u !== Mr || h !== Mr)) {
			var b = parseFloat(h) * Vs,
				S = Math.sin(b),
				D = Math.cos(b),
				O;
			b = parseFloat(u) * Vs, O = Math.cos(b), o = zc(_, o, S * O * -w), a = zc(_, a, -Math.sin(b) * -w), l = zc(_, l, D * O * -w + w)
		}
		v !== vo && (x += "perspective(" + v + Sr), (i || s) && (x += "translate(" + i + "%, " + s + "%) "), (y || o !== vo || a !== vo || l !== vo) && (x += l !== vo || y ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + Sr), c !== Mr && (x += "rotate(" + c + Sr), h !== Mr && (x += "rotateY(" + h + Sr), u !== Mr && (x += "rotateX(" + u + Sr), (f !== Mr || d !== Mr) && (x += "skew(" + f + ", " + d + Sr), (p !== 1 || m !== 1) && (x += "scale(" + p + ", " + m + Sr), _.style[_t] = x || "translate(0, 0)"
	},
	Zx = function(e, t) {
		var n = t || this,
			i = n.xPercent,
			s = n.yPercent,
			o = n.x,
			a = n.y,
			l = n.rotation,
			c = n.skewX,
			h = n.skewY,
			u = n.scaleX,
			f = n.scaleY,
			d = n.target,
			p = n.xOrigin,
			m = n.yOrigin,
			v = n.xOffset,
			g = n.yOffset,
			_ = n.forceCSS,
			w = parseFloat(o),
			x = parseFloat(a),
			y, b, S, D, O;
		l = parseFloat(l), c = parseFloat(c), h = parseFloat(h), h && (h = parseFloat(h), c += h, l += h), l || c ? (l *= Vs, c *= Vs, y = Math.cos(l) * u, b = Math.sin(l) * u, S = Math.sin(l - c) * -f, D = Math.cos(l - c) * f, c && (h *= Vs, O = Math.tan(c - h), O = Math.sqrt(1 + O * O), S *= O, D *= O, h && (O = Math.tan(h), O = Math.sqrt(1 + O * O), y *= O, b *= O)), y = At(y), b = At(b), S = At(S), D = At(D)) : (y = u, D = f, b = S = 0), (w && !~(o + "").indexOf("px") || x && !~(a + "").indexOf("px")) && (w = gr(d, "x", o, "px"), x = gr(d, "y", a, "px")), (p || m || v || g) && (w = At(w + p - (p * y + m * S) + v), x = At(x + m - (p * b + m * D) + g)), (i || s) && (O = d.getBBox(), w = At(w + i / 100 * O.width), x = At(x + s / 100 * O.height)), O = "matrix(" + y + "," + b + "," + S + "," + D + "," + w + "," + x + ")", d.setAttribute("transform", O), _ && (d.style[_t] = O)
	},
	Jx = function(e, t, n, i, s) {
		var o = 360,
			a = jt(s),
			l = parseFloat(s) * (a && ~s.indexOf("rad") ? Lr : 1),
			c = l - i,
			h = i + c + "deg",
			u, f;
		return a && (u = s.split("_")[1], u === "short" && (c %= o, c !== c % (o / 2) && (c += c < 0 ? o : -o)), u === "cw" && c < 0 ? c = (c + o * qf) % o - ~~(c / o) * o : u === "ccw" && c > 0 && (c = (c - o * qf) % o - ~~(c / o) * o)), e._pt = f = new An(e._pt, t, n, i, c, Fx), f.e = h, f.u = "deg", e._props.push(n), f
	},
	Jf = function(e, t) {
		for (var n in t) e[n] = t[n];
		return e
	},
	Qx = function(e, t, n) {
		var i = Jf({}, n._gsap),
			s = "perspective,force3D,transformOrigin,svgOrigin",
			o = n.style,
			a, l, c, h, u, f, d, p;
		i.svg ? (c = n.getAttribute("transform"), n.setAttribute("transform", ""), o[_t] = t, a = ha(n, 1), $r(n, _t), n.setAttribute("transform", c)) : (c = getComputedStyle(n)[_t], o[_t] = t, a = ha(n, 1), o[_t] = c);
		for (l in Ui) c = i[l], h = a[l], c !== h && s.indexOf(l) < 0 && (d = en(c), p = en(h), u = d !== p ? gr(n, l, c, p) : parseFloat(c), f = parseFloat(h), e._pt = new An(e._pt, a, l, u, f - u, Wh), e._pt.u = p || 0, e._props.push(l));
		Jf(a, i)
	};
En("padding,margin,Width,Radius", function(r, e) {
	var t = "Top",
		n = "Right",
		i = "Bottom",
		s = "Left",
		o = (e < 3 ? [t, n, i, s] : [t + s, t + n, i + n, i + s]).map(function(a) {
			return e < 2 ? r + a : "border" + a + r
		});
	Xl[e > 1 ? "border" + r : r] = function(a, l, c, h, u) {
		var f, d;
		if (arguments.length < 4) return f = o.map(function(p) {
			return Di(a, p, c)
		}), d = f.join(" "), d.split(f[0]).length === 5 ? f[0] : d;
		f = (h + "").split(" "), d = {}, o.forEach(function(p, m) {
			return d[p] = f[m] = f[m] || f[(m - 1) / 2 | 0]
		}), a.init(l, d, u)
	}
});
var u_ = {
	name: "css",
	register: Xh,
	targetTest: function(e) {
		return e.style && e.nodeType
	},
	init: function(e, t, n, i, s) {
		var o = this._props,
			a = e.style,
			l = n.vars.startAt,
			c, h, u, f, d, p, m, v, g, _, w, x, y, b, S, D;
		Zu || Xh(), this.styles = this.styles || r_(e), D = this.styles.props, this.tween = n;
		for (m in t)
			if (m !== "autoRound" && (h = t[m], !(On[m] && Yg(m, t, n, i, e, s)))) {
				if (d = typeof h, p = Xl[m], d === "function" && (h = h.call(n, i, e, s), d = typeof h), d === "string" && ~h.indexOf("random(") && (h = oa(h)), p) p(this, e, m, h, n) && (S = 1);
				else if (m.substr(0, 2) === "--") c = (getComputedStyle(e).getPropertyValue(m) + "").trim(), h += "", or.lastIndex = 0, or.test(c) || (v = en(c), g = en(h)), g ? v !== g && (c = gr(e, m, c, g) + g) : v && (h += v), this.add(a, "setProperty", c, h, i, s, 0, 0, m), o.push(m), D.push(m, 0, a[m]);
				else if (d !== "undefined") {
					if (l && m in l ? (c = typeof l[m] == "function" ? l[m].call(n, i, e, s) : l[m], jt(c) && ~c.indexOf("random(") && (c = oa(c)), en(c + "") || c === "auto" || (c += Gn.units[m] || en(Di(e, m)) || ""), (c + "").charAt(1) === "=" && (c = Di(e, m))) : c = Di(e, m), f = parseFloat(c), _ = d === "string" && h.charAt(1) === "=" && h.substr(0, 2), _ && (h = h.substr(2)), u = parseFloat(h), m in mi && (m === "autoAlpha" && (f === 1 && Di(e, "visibility") === "hidden" && u && (f = 0), D.push("visibility", 0, a.visibility), nr(this, a, "visibility", f ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), m !== "scale" && m !== "transform" && (m = mi[m], ~m.indexOf(",") && (m = m.split(",")[0]))), w = m in Ui, w) {
						if (this.styles.save(m), x || (y = e._gsap, y.renderTransform && !t.parseTransform || ha(e, t.parseTransform), b = t.smoothOrigin !== !1 && y.smooth, x = this._pt = new An(this._pt, a, _t, 0, 1, y.renderTransform, y, 0, -1), x.dep = 1), m === "scale") this._pt = new An(this._pt, y, "scaleY", y.scaleY, (_ ? ks(y.scaleY, _ + u) : u) - y.scaleY || 0, Wh), this._pt.u = 0, o.push("scaleY", m), m += "X";
						else if (m === "transformOrigin") {
							D.push(Cn, 0, a[Cn]), h = Yx(h), y.svg ? Yh(e, h, 0, b, 0, this) : (g = parseFloat(h.split(" ")[2]) || 0, g !== y.zOrigin && nr(this, y, "zOrigin", y.zOrigin, g), nr(this, a, m, Yl(c), Yl(h)));
							continue
						} else if (m === "svgOrigin") {
							Yh(e, h, 1, b, 0, this);
							continue
						} else if (m in l_) {
							Jx(this, y, m, f, _ ? ks(f, _ + h) : h);
							continue
						} else if (m === "smoothOrigin") {
							nr(this, y, "smooth", y.smooth, h);
							continue
						} else if (m === "force3D") {
							y[m] = h;
							continue
						} else if (m === "transform") {
							Qx(this, h, e);
							continue
						}
					} else m in a || (m = Js(m) || m);
					if (w || (u || u === 0) && (f || f === 0) && !Ix.test(h) && m in a) v = (c + "").substr((f + "").length), u || (u = 0), g = en(h) || (m in Gn.units ? Gn.units[m] : v), v !== g && (f = gr(e, m, c, g)), this._pt = new An(this._pt, w ? y : a, m, f, (_ ? ks(f, _ + u) : u) - f, !w && (g === "px" || m === "zIndex") && t.autoRound !== !1 ? Ox : Wh), this._pt.u = g || 0, v !== g && g !== "%" && (this._pt.b = c, this._pt.r = zx);
					else if (m in a) Xx.call(this, e, m, c, _ ? _ + h : h);
					else if (m in e) this.add(e, m, c || e[m], _ ? _ + h : h, i, s);
					else if (m !== "parseTransform") {
						Vu(m, h);
						continue
					}
					w || (m in a ? D.push(m, 0, a[m]) : D.push(m, 1, c || e[m])), o.push(m)
				}
			} S && Kg(this)
	},
	render: function(e, t) {
		if (t.tween._time || !Ju())
			for (var n = t._pt; n;) n.r(e, n.d), n = n._next;
		else t.styles.revert()
	},
	get: Di,
	aliases: mi,
	getSetter: function(e, t, n) {
		var i = mi[t];
		return i && i.indexOf(",") < 0 && (t = i), t in Ui && t !== Cn && (e._gsap.x || Di(e, "x")) ? n && Wf === n ? t === "scale" ? Ux : kx : (Wf = n || {}) && (t === "scale" ? Vx : Hx) : e.style && !Bu(e.style[t]) ? Nx : ~t.indexOf("-") ? Bx : ju(e, t)
	},
	core: {
		_removeProperty: $r,
		_getMatrix: Ku
	}
};
Rn.utils.checkPrefix = Js;
Rn.core.getStyleSaver = r_;
(function(r, e, t, n) {
	var i = En(r + "," + e + "," + t, function(s) {
		Ui[s] = 1
	});
	En(e, function(s) {
		Gn.units[s] = "deg", l_[s] = 1
	}), mi[i[13]] = r + "," + e, En(n, function(s) {
		var o = s.split(":");
		mi[o[1]] = i[o[0]]
	})
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
En("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(r) {
	Gn.units[r] = "px"
});
Rn.registerPlugin(u_);
var tt = Rn.registerPlugin(u_) || Rn;
tt.core.Tween;
/*!
 * EasePack 3.12.3
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var kn, Ra, f_ = function() {
		return kn || typeof window < "u" && (kn = window.gsap) && kn.registerPlugin && kn
	},
	jh = function(e, t) {
		return !!(typeof e > "u" ? t : e && !~(e + "").indexOf("false"))
	},
	Kx = function(e) {
		if (kn = e || f_(), kn) {
			Ra = kn.registerEase;
			var t = kn.parseEase(),
				n = function(o) {
					return function(a) {
						var l = .5 + a / 2;
						o.config = function(c) {
							return o(2 * (1 - c) * c * l + c * c)
						}
					}
				},
				i;
			for (i in t) t[i].config || n(t[i]);
			Ra("slow", Qs), Ra("expoScale", ef), Ra("rough", Ks);
			for (i in qo) i !== "version" && kn.core.globals(i, qo[i])
		}
	},
	d_ = function(e, t, n) {
		e = Math.min(1, e || .7);
		var i = e < 1 ? t || t === 0 ? t : .7 : 0,
			s = (1 - e) / 2,
			o = s + e,
			a = jh(n);
		return function(l) {
			var c = l + (.5 - l) * i;
			return l < s ? a ? 1 - (l = 1 - l / s) * l : c - (l = 1 - l / s) * l * l * l * c : l > o ? a ? l === 1 ? 0 : 1 - (l = (l - o) / s) * l : c + (l - c) * (l = (l - o) / s) * l * l * l : a ? 1 : c
		}
	},
	p_ = function(e, t, n) {
		var i = Math.log(t / e),
			s = t - e;
		return n && (n = kn.parseEase(n)),
			function(o) {
				return (e * Math.exp(i * (n ? n(o) : o)) - e) / s
			}
	},
	Oc = function(e, t, n) {
		this.t = e, this.v = t, n && (this.next = n, n.prev = this, this.c = n.v - t, this.gap = n.t - e)
	},
	m_ = function(e) {
		typeof e != "object" && (e = {
			points: +e || 20
		});
		for (var t = e.taper || "none", n = [], i = 0, s = (+e.points || 20) | 0, o = s, a = jh(e.randomize, !0), l = jh(e.clamp), c = kn ? kn.parseEase(e.template) : 0, h = (+e.strength || 1) * .4, u, f, d, p, m, v, g; --o > -1;) u = a ? Math.random() : 1 / s * o, f = c ? c(u) : u, t === "none" ? d = h : t === "out" ? (p = 1 - u, d = p * p * h) : t === "in" ? d = u * u * h : u < .5 ? (p = u * 2, d = p * p * .5 * h) : (p = (1 - u) * 2, d = p * p * .5 * h), a ? f += Math.random() * d - d * .5 : o % 2 ? f += d * .5 : f -= d * .5, l && (f > 1 ? f = 1 : f < 0 && (f = 0)), n[i++] = {
			x: u,
			y: f
		};
		for (n.sort(function(_, w) {
				return _.x - w.x
			}), v = new Oc(1, 1, null), o = s; o--;) m = n[o], v = new Oc(m.x, m.y, v);
		return g = new Oc(0, 0, v.t ? v : v.next),
			function(_) {
				var w = g;
				if (_ > w.t) {
					for (; w.next && _ >= w.t;) w = w.next;
					w = w.prev
				} else
					for (; w.prev && _ <= w.t;) w = w.prev;
				return g = w, w.v + (_ - w.t) / w.gap * w.c
			}
	},
	Qs = d_(.7);
Qs.ease = Qs;
Qs.config = d_;
var ef = p_(1, 2);
ef.config = p_;
var Ks = m_();
Ks.ease = Ks;
Ks.config = m_;
var qo = {
	SlowMo: Qs,
	RoughEase: Ks,
	ExpoScaleEase: ef
};
for (var Qf in qo) qo[Qf].register = Kx, qo[Qf].version = "3.12.3";
f_() && kn.registerPlugin(Qs);

function Kf(r, e) {
	for (var t = 0; t < e.length; t++) {
		var n = e[t];
		n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n)
	}
}

function ey(r, e, t) {
	return e && Kf(r.prototype, e), t && Kf(r, t), r
}
/*!
 * Observer 3.12.3
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Zt, Tl, Un, ir, rr, Hs, g_, Rr, Xo, __, Oi, oi, v_, x_ = function() {
		return Zt || typeof window < "u" && (Zt = window.gsap) && Zt.registerPlugin && Zt
	},
	y_ = 1,
	Fs = [],
	Ye = [],
	xi = [],
	Yo = Date.now,
	$h = function(e, t) {
		return t
	},
	ty = function() {
		var e = Xo.core,
			t = e.bridge || {},
			n = e._scrollers,
			i = e._proxies;
		n.push.apply(n, Ye), i.push.apply(i, xi), Ye = n, xi = i, $h = function(o, a) {
			return t[o](a)
		}
	},
	ar = function(e, t) {
		return ~xi.indexOf(e) && xi[xi.indexOf(e) + 1][t]
	},
	jo = function(e) {
		return !!~__.indexOf(e)
	},
	ln = function(e, t, n, i, s) {
		return e.addEventListener(t, n, {
			passive: !i,
			capture: !!s
		})
	},
	an = function(e, t, n, i) {
		return e.removeEventListener(t, n, !!i)
	},
	Pa = "scrollLeft",
	Da = "scrollTop",
	Zh = function() {
		return Oi && Oi.isPressed || Ye.cache++
	},
	jl = function(e, t) {
		var n = function i(s) {
			if (s || s === 0) {
				y_ && (Un.history.scrollRestoration = "manual");
				var o = Oi && Oi.isPressed;
				s = i.v = Math.round(s) || (Oi && Oi.iOS ? 1 : 0), e(s), i.cacheID = Ye.cache, o && $h("ss", s)
			} else(t || Ye.cache !== i.cacheID || $h("ref")) && (i.cacheID = Ye.cache, i.v = e());
			return i.v + i.offset
		};
		return n.offset = 0, e && n
	},
	pn = {
		s: Pa,
		p: "left",
		p2: "Left",
		os: "right",
		os2: "Right",
		d: "width",
		d2: "Width",
		a: "x",
		sc: jl(function(r) {
			return arguments.length ? Un.scrollTo(r, Ot.sc()) : Un.pageXOffset || ir[Pa] || rr[Pa] || Hs[Pa] || 0
		})
	},
	Ot = {
		s: Da,
		p: "top",
		p2: "Top",
		os: "bottom",
		os2: "Bottom",
		d: "height",
		d2: "Height",
		a: "y",
		op: pn,
		sc: jl(function(r) {
			return arguments.length ? Un.scrollTo(pn.sc(), r) : Un.pageYOffset || ir[Da] || rr[Da] || Hs[Da] || 0
		})
	},
	Mn = function(e, t) {
		return (t && t._ctx && t._ctx.selector || Zt.utils.toArray)(e)[0] || (typeof e == "string" && Zt.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
	},
	_r = function(e, t) {
		var n = t.s,
			i = t.sc;
		jo(e) && (e = ir.scrollingElement || rr);
		var s = Ye.indexOf(e),
			o = i === Ot.sc ? 1 : 2;
		!~s && (s = Ye.push(e) - 1), Ye[s + o] || ln(e, "scroll", Zh);
		var a = Ye[s + o],
			l = a || (Ye[s + o] = jl(ar(e, n), !0) || (jo(e) ? i : jl(function(c) {
				return arguments.length ? e[n] = c : e[n]
			})));
		return l.target = e, a || (l.smooth = Zt.getProperty(e, "scrollBehavior") === "smooth"), l
	},
	Jh = function(e, t, n) {
		var i = e,
			s = e,
			o = Yo(),
			a = o,
			l = t || 50,
			c = Math.max(500, l * 3),
			h = function(p, m) {
				var v = Yo();
				m || v - o > l ? (s = i, i = p, a = o, o = v) : n ? i += p : i = s + (p - s) / (v - a) * (o - a)
			},
			u = function() {
				s = i = n ? 0 : i, a = o = 0
			},
			f = function(p) {
				var m = a,
					v = s,
					g = Yo();
				return (p || p === 0) && p !== i && h(p), o === a || g - a > c ? 0 : (i + (n ? v : -v)) / ((n ? g : o) - m) * 1e3
			};
		return {
			update: h,
			reset: u,
			getVelocity: f
		}
	},
	xo = function(e, t) {
		return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
	},
	ed = function(e) {
		var t = Math.max.apply(Math, e),
			n = Math.min.apply(Math, e);
		return Math.abs(t) >= Math.abs(n) ? t : n
	},
	w_ = function() {
		Xo = Zt.core.globals().ScrollTrigger, Xo && Xo.core && ty()
	},
	b_ = function(e) {
		return Zt = e || x_(), !Tl && Zt && typeof document < "u" && document.body && (Un = window, ir = document, rr = ir.documentElement, Hs = ir.body, __ = [Un, ir, rr, Hs], Zt.utils.clamp, v_ = Zt.core.context || function() {}, Rr = "onpointerenter" in Hs ? "pointer" : "mouse", g_ = Dt.isTouch = Un.matchMedia && Un.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Un || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, oi = Dt.eventTypes = ("ontouchstart" in rr ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in rr ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
			return y_ = 0
		}, 500), w_(), Tl = 1), Tl
	};
pn.op = Ot;
Ye.cache = 0;
var Dt = function() {
	function r(t) {
		this.init(t)
	}
	var e = r.prototype;
	return e.init = function(n) {
		Tl || b_(Zt) || console.warn("Please gsap.registerPlugin(Observer)"), Xo || w_();
		var i = n.tolerance,
			s = n.dragMinimum,
			o = n.type,
			a = n.target,
			l = n.lineHeight,
			c = n.debounce,
			h = n.preventDefault,
			u = n.onStop,
			f = n.onStopDelay,
			d = n.ignore,
			p = n.wheelSpeed,
			m = n.event,
			v = n.onDragStart,
			g = n.onDragEnd,
			_ = n.onDrag,
			w = n.onPress,
			x = n.onRelease,
			y = n.onRight,
			b = n.onLeft,
			S = n.onUp,
			D = n.onDown,
			O = n.onChangeX,
			z = n.onChangeY,
			P = n.onChange,
			M = n.onToggleX,
			E = n.onToggleY,
			R = n.onHover,
			V = n.onHoverEnd,
			N = n.onMove,
			k = n.ignoreCheck,
			J = n.isNormalizer,
			se = n.onGestureStart,
			A = n.onGestureEnd,
			Y = n.onWheel,
			de = n.onEnable,
			U = n.onDisable,
			W = n.onClick,
			te = n.scrollSpeed,
			q = n.capture,
			oe = n.allowClicks,
			ce = n.lockAxis,
			ie = n.onLockAxis;
		this.target = a = Mn(a) || rr, this.vars = n, d && (d = Zt.utils.toArray(d)), i = i || 1e-9, s = s || 0, p = p || 1, te = te || 1, o = o || "wheel,touch,pointer", c = c !== !1, l || (l = parseFloat(Un.getComputedStyle(Hs).lineHeight) || 22);
		var me, we, j, Z, ee, ge, ue, H = this,
			Re = 0,
			Ne = 0,
			Qe = _r(a, pn),
			L = _r(a, Ot),
			C = Qe(),
			K = L(),
			ae = ~o.indexOf("touch") && !~o.indexOf("pointer") && oi[0] === "pointerdown",
			le = jo(a),
			Q = a.ownerDocument || ir,
			Pe = [0, 0, 0],
			Se = [0, 0, 0],
			pe = 0,
			F = function() {
				return pe = Yo()
			},
			he = function(Ie, Je) {
				return (H.event = Ie) && d && ~d.indexOf(Ie.target) || Je && ae && Ie.pointerType !== "touch" || k && k(Ie, Je)
			},
			re = function() {
				H._vx.reset(), H._vy.reset(), we.pause(), u && u(H)
			},
			Fe = function() {
				var Ie = H.deltaX = ed(Pe),
					Je = H.deltaY = ed(Se),
					yt = Math.abs(Ie) >= i,
					ye = Math.abs(Je) >= i;
				P && (yt || ye) && P(H, Ie, Je, Pe, Se), yt && (y && H.deltaX > 0 && y(H), b && H.deltaX < 0 && b(H), O && O(H), M && H.deltaX < 0 != Re < 0 && M(H), Re = H.deltaX, Pe[0] = Pe[1] = Pe[2] = 0), ye && (D && H.deltaY > 0 && D(H), S && H.deltaY < 0 && S(H), z && z(H), E && H.deltaY < 0 != Ne < 0 && E(H), Ne = H.deltaY, Se[0] = Se[1] = Se[2] = 0), (Z || j) && (N && N(H), j && (_(H), j = !1), Z = !1), ge && !(ge = !1) && ie && ie(H), ee && (Y(H), ee = !1), me = 0
			},
			be = function(Ie, Je, yt) {
				Pe[yt] += Ie, Se[yt] += Je, H._vx.update(Ie), H._vy.update(Je), c ? me || (me = requestAnimationFrame(Fe)) : Fe()
			},
			Ue = function(Ie, Je) {
				ce && !ue && (H.axis = ue = Math.abs(Ie) > Math.abs(Je) ? "x" : "y", ge = !0), ue !== "y" && (Pe[2] += Ie, H._vx.update(Ie, !0)), ue !== "x" && (Se[2] += Je, H._vy.update(Je, !0)), c ? me || (me = requestAnimationFrame(Fe)) : Fe()
			},
			_e = function(Ie) {
				if (!he(Ie, 1)) {
					Ie = xo(Ie, h);
					var Je = Ie.clientX,
						yt = Ie.clientY,
						ye = Je - H.x,
						We = yt - H.y,
						T = H.isDragging;
					H.x = Je, H.y = yt, (T || Math.abs(H.startX - Je) >= s || Math.abs(H.startY - yt) >= s) && (_ && (j = !0), T || (H.isDragging = !0), Ue(ye, We), T || v && v(H))
				}
			},
			ze = H.onPress = function(Ge) {
				he(Ge, 1) || Ge && Ge.button || (H.axis = ue = null, we.pause(), H.isPressed = !0, Ge = xo(Ge), Re = Ne = 0, H.startX = H.x = Ge.clientX, H.startY = H.y = Ge.clientY, H._vx.reset(), H._vy.reset(), ln(J ? a : Q, oi[1], _e, h, !0), H.deltaX = H.deltaY = 0, w && w(H))
			},
			je = H.onRelease = function(Ge) {
				if (!he(Ge, 1)) {
					an(J ? a : Q, oi[1], _e, !0);
					var Ie = !isNaN(H.y - H.startY),
						Je = H.isDragging,
						yt = Je && (Math.abs(H.x - H.startX) > 3 || Math.abs(H.y - H.startY) > 3),
						ye = xo(Ge);
					!yt && Ie && (H._vx.reset(), H._vy.reset(), h && oe && Zt.delayedCall(.08, function() {
						if (Yo() - pe > 300 && !Ge.defaultPrevented) {
							if (Ge.target.click) Ge.target.click();
							else if (Q.createEvent) {
								var We = Q.createEvent("MouseEvents");
								We.initMouseEvent("click", !0, !0, Un, 1, ye.screenX, ye.screenY, ye.clientX, ye.clientY, !1, !1, !1, !1, 0, null), Ge.target.dispatchEvent(We)
							}
						}
					})), H.isDragging = H.isGesturing = H.isPressed = !1, u && Je && !J && we.restart(!0), g && Je && g(H), x && x(H, yt)
				}
			},
			Te = function(Ie) {
				return Ie.touches && Ie.touches.length > 1 && (H.isGesturing = !0) && se(Ie, H.isDragging)
			},
			kt = function() {
				return (H.isGesturing = !1) || A(H)
			},
			xt = function(Ie) {
				if (!he(Ie)) {
					var Je = Qe(),
						yt = L();
					be((Je - C) * te, (yt - K) * te, 1), C = Je, K = yt, u && we.restart(!0)
				}
			},
			It = function(Ie) {
				if (!he(Ie)) {
					Ie = xo(Ie, h), Y && (ee = !0);
					var Je = (Ie.deltaMode === 1 ? l : Ie.deltaMode === 2 ? Un.innerHeight : 1) * p;
					be(Ie.deltaX * Je, Ie.deltaY * Je, 0), u && !J && we.restart(!0)
				}
			},
			yn = function(Ie) {
				if (!he(Ie)) {
					var Je = Ie.clientX,
						yt = Ie.clientY,
						ye = Je - H.x,
						We = yt - H.y;
					H.x = Je, H.y = yt, Z = !0, u && we.restart(!0), (ye || We) && Ue(ye, We)
				}
			},
			hi = function(Ie) {
				H.event = Ie, R(H)
			},
			Vi = function(Ie) {
				H.event = Ie, V(H)
			},
			wn = function(Ie) {
				return he(Ie) || xo(Ie, h) && W(H)
			};
		we = H._dc = Zt.delayedCall(f || .25, re).pause(), H.deltaX = H.deltaY = 0, H._vx = Jh(0, 50, !0), H._vy = Jh(0, 50, !0), H.scrollX = Qe, H.scrollY = L, H.isDragging = H.isGesturing = H.isPressed = !1, v_(this), H.enable = function(Ge) {
			return H.isEnabled || (ln(le ? Q : a, "scroll", Zh), o.indexOf("scroll") >= 0 && ln(le ? Q : a, "scroll", xt, h, q), o.indexOf("wheel") >= 0 && ln(a, "wheel", It, h, q), (o.indexOf("touch") >= 0 && g_ || o.indexOf("pointer") >= 0) && (ln(a, oi[0], ze, h, q), ln(Q, oi[2], je), ln(Q, oi[3], je), oe && ln(a, "click", F, !1, !0), W && ln(a, "click", wn), se && ln(Q, "gesturestart", Te), A && ln(Q, "gestureend", kt), R && ln(a, Rr + "enter", hi), V && ln(a, Rr + "leave", Vi), N && ln(a, Rr + "move", yn)), H.isEnabled = !0, Ge && Ge.type && ze(Ge), de && de(H)), H
		}, H.disable = function() {
			H.isEnabled && (Fs.filter(function(Ge) {
				return Ge !== H && jo(Ge.target)
			}).length || an(le ? Q : a, "scroll", Zh), H.isPressed && (H._vx.reset(), H._vy.reset(), an(J ? a : Q, oi[1], _e, !0)), an(le ? Q : a, "scroll", xt, q), an(a, "wheel", It, q), an(a, oi[0], ze, q), an(Q, oi[2], je), an(Q, oi[3], je), an(a, "click", F, !0), an(a, "click", wn), an(Q, "gesturestart", Te), an(Q, "gestureend", kt), an(a, Rr + "enter", hi), an(a, Rr + "leave", Vi), an(a, Rr + "move", yn), H.isEnabled = H.isPressed = H.isDragging = !1, U && U(H))
		}, H.kill = H.revert = function() {
			H.disable();
			var Ge = Fs.indexOf(H);
			Ge >= 0 && Fs.splice(Ge, 1), Oi === H && (Oi = 0)
		}, Fs.push(H), J && jo(a) && (Oi = H), H.enable(m)
	}, ey(r, [{
		key: "velocityX",
		get: function() {
			return this._vx.getVelocity()
		}
	}, {
		key: "velocityY",
		get: function() {
			return this._vy.getVelocity()
		}
	}]), r
}();
Dt.version = "3.12.3";
Dt.create = function(r) {
	return new Dt(r)
};
Dt.register = b_;
Dt.getAll = function() {
	return Fs.slice()
};
Dt.getById = function(r) {
	return Fs.filter(function(e) {
		return e.vars.id === r
	})[0]
};
x_() && Zt.registerPlugin(Dt);
/*!
 * ScrollTrigger 3.12.3
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Me, Es, $e, mt, ai, ct, M_, $l, ua, zs, El, Ia, Qt, cc, Qh, hn, td, nd, As, S_, Nc, T_, cn, E_, A_, C_, Ji, Kh, tf, Gs, nf, rf, eu, Bc, Fa = 1,
	fn = Date.now,
	kc = fn(),
	Qn = 0,
	zo = 0,
	id = function(e, t, n) {
		var i = zn(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
		return n["_" + t + "Clamp"] = i, i ? e.substr(6, e.length - 7) : e
	},
	rd = function(e, t) {
		return t && (!zn(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e
	},
	ny = function r() {
		return zo && requestAnimationFrame(r)
	},
	sd = function() {
		return cc = 1
	},
	od = function() {
		return cc = 0
	},
	fi = function(e) {
		return e
	},
	Oo = function(e) {
		return Math.round(e * 1e5) / 1e5 || 0
	},
	L_ = function() {
		return typeof window < "u"
	},
	R_ = function() {
		return Me || L_() && (Me = window.gsap) && Me.registerPlugin && Me
	},
	Zr = function(e) {
		return !!~M_.indexOf(e)
	},
	P_ = function(e) {
		return (e === "Height" ? nf : $e["inner" + e]) || ai["client" + e] || ct["client" + e]
	},
	D_ = function(e) {
		return ar(e, "getBoundingClientRect") || (Zr(e) ? function() {
			return Dl.width = $e.innerWidth, Dl.height = nf, Dl
		} : function() {
			return Fi(e)
		})
	},
	iy = function(e, t, n) {
		var i = n.d,
			s = n.d2,
			o = n.a;
		return (o = ar(e, "getBoundingClientRect")) ? function() {
			return o()[i]
		} : function() {
			return (t ? P_(s) : e["client" + s]) || 0
		}
	},
	ry = function(e, t) {
		return !t || ~xi.indexOf(e) ? D_(e) : function() {
			return Dl
		}
	},
	gi = function(e, t) {
		var n = t.s,
			i = t.d2,
			s = t.d,
			o = t.a;
		return Math.max(0, (n = "scroll" + i) && (o = ar(e, n)) ? o() - D_(e)()[s] : Zr(e) ? (ai[n] || ct[n]) - P_(i) : e[n] - e["offset" + i])
	},
	za = function(e, t) {
		for (var n = 0; n < As.length; n += 3)(!t || ~t.indexOf(As[n + 1])) && e(As[n], As[n + 1], As[n + 2])
	},
	zn = function(e) {
		return typeof e == "string"
	},
	mn = function(e) {
		return typeof e == "function"
	},
	Al = function(e) {
		return typeof e == "number"
	},
	Pr = function(e) {
		return typeof e == "object"
	},
	yo = function(e, t, n) {
		return e && e.progress(t ? 0 : 1) && n && e.pause()
	},
	Uc = function(e, t) {
		if (e.enabled) {
			var n = e._ctx ? e._ctx.add(function() {
				return t(e)
			}) : t(e);
			n && n.totalTime && (e.callbackAnimation = n)
		}
	},
	rs = Math.abs,
	I_ = "left",
	F_ = "top",
	sf = "right",
	of = "bottom",
	Gr = "width",
	Wr = "height",
	$o = "Right",
	Zo = "Left",
	Jo = "Top",
	Qo = "Bottom",
	Ct = "padding",
	jn = "margin",
	eo = "Width",
	af = "Height",
	Ht = "px",
	$n = function(e) {
		return $e.getComputedStyle(e)
	},
	sy = function(e) {
		var t = $n(e).position;
		e.style.position = t === "absolute" || t === "fixed" ? t : "relative"
	},
	ad = function(e, t) {
		for (var n in t) n in e || (e[n] = t[n]);
		return e
	},
	Fi = function(e, t) {
		var n = t && $n(e)[Qh] !== "matrix(1, 0, 0, 1, 0, 0)" && Me.to(e, {
				x: 0,
				y: 0,
				xPercent: 0,
				yPercent: 0,
				rotation: 0,
				rotationX: 0,
				rotationY: 0,
				scale: 1,
				skewX: 0,
				skewY: 0
			}).progress(1),
			i = e.getBoundingClientRect();
		return n && n.progress(0).kill(), i
	},
	tu = function(e, t) {
		var n = t.d2;
		return e["offset" + n] || e["client" + n] || 0
	},
	z_ = function(e) {
		var t = [],
			n = e.labels,
			i = e.duration(),
			s;
		for (s in n) t.push(n[s] / i);
		return t
	},
	oy = function(e) {
		return function(t) {
			return Me.utils.snap(z_(e), t)
		}
	},
	lf = function(e) {
		var t = Me.utils.snap(e),
			n = Array.isArray(e) && e.slice(0).sort(function(i, s) {
				return i - s
			});
		return n ? function(i, s, o) {
			o === void 0 && (o = .001);
			var a;
			if (!s) return t(i);
			if (s > 0) {
				for (i -= o, a = 0; a < n.length; a++)
					if (n[a] >= i) return n[a];
				return n[a - 1]
			} else
				for (a = n.length, i += o; a--;)
					if (n[a] <= i) return n[a];
			return n[0]
		} : function(i, s, o) {
			o === void 0 && (o = .001);
			var a = t(i);
			return !s || Math.abs(a - i) < o || a - i < 0 == s < 0 ? a : t(s < 0 ? i - e : i + e)
		}
	},
	ay = function(e) {
		return function(t, n) {
			return lf(z_(e))(t, n.direction)
		}
	},
	Oa = function(e, t, n, i) {
		return n.split(",").forEach(function(s) {
			return e(t, s, i)
		})
	},
	Wt = function(e, t, n, i, s) {
		return e.addEventListener(t, n, {
			passive: !i,
			capture: !!s
		})
	},
	Gt = function(e, t, n, i) {
		return e.removeEventListener(t, n, !!i)
	},
	Na = function(e, t, n) {
		n = n && n.wheelHandler, n && (e(t, "wheel", n), e(t, "touchmove", n))
	},
	ld = {
		startColor: "green",
		endColor: "red",
		indent: 0,
		fontSize: "16px",
		fontWeight: "normal"
	},
	Ba = {
		toggleActions: "play",
		anticipatePin: 0
	},
	Zl = {
		top: 0,
		left: 0,
		center: .5,
		bottom: 1,
		right: 1
	},
	Cl = function(e, t) {
		if (zn(e)) {
			var n = e.indexOf("="),
				i = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
			~n && (e.indexOf("%") > n && (i *= t / 100), e = e.substr(0, n - 1)), e = i + (e in Zl ? Zl[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
		}
		return e
	},
	ka = function(e, t, n, i, s, o, a, l) {
		var c = s.startColor,
			h = s.endColor,
			u = s.fontSize,
			f = s.indent,
			d = s.fontWeight,
			p = mt.createElement("div"),
			m = Zr(n) || ar(n, "pinType") === "fixed",
			v = e.indexOf("scroller") !== -1,
			g = m ? ct : n,
			_ = e.indexOf("start") !== -1,
			w = _ ? c : h,
			x = "border-color:" + w + ";font-size:" + u + ";color:" + w + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
		return x += "position:" + ((v || l) && m ? "fixed;" : "absolute;"), (v || l || !m) && (x += (i === Ot ? sf : of) + ":" + (o + parseFloat(f)) + "px;"), a && (x += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = _, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = x, p.innerText = t || t === 0 ? e + "-" + t : e, g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p), p._offset = p["offset" + i.op.d2], Ll(p, 0, i, _), p
	},
	Ll = function(e, t, n, i) {
		var s = {
				display: "block"
			},
			o = n[i ? "os2" : "p2"],
			a = n[i ? "p2" : "os2"];
		e._isFlipped = i, s[n.a + "Percent"] = i ? -100 : 0, s[n.a] = i ? "1px" : 0, s["border" + o + eo] = 1, s["border" + a + eo] = 0, s[n.p] = t + "px", Me.set(e, s)
	},
	qe = [],
	nu = {},
	fa, cd = function() {
		return fn() - Qn > 34 && (fa || (fa = requestAnimationFrame(Ni)))
	},
	ss = function() {
		(!cn || !cn.isPressed || cn.startX > ct.clientWidth) && (Ye.cache++, cn ? fa || (fa = requestAnimationFrame(Ni)) : Ni(), Qn || Qr("scrollStart"), Qn = fn())
	},
	Vc = function() {
		C_ = $e.innerWidth, A_ = $e.innerHeight
	},
	No = function() {
		Ye.cache++, !Qt && !T_ && !mt.fullscreenElement && !mt.webkitFullscreenElement && (!E_ || C_ !== $e.innerWidth || Math.abs($e.innerHeight - A_) > $e.innerHeight * .25) && $l.restart(!0)
	},
	Jr = {},
	ly = [],
	O_ = function r() {
		return Gt(He, "scrollEnd", r) || Br(!0)
	},
	Qr = function(e) {
		return Jr[e] && Jr[e].map(function(t) {
			return t()
		}) || ly
	},
	Fn = [],
	N_ = function(e) {
		for (var t = 0; t < Fn.length; t += 5)(!e || Fn[t + 4] && Fn[t + 4].query === e) && (Fn[t].style.cssText = Fn[t + 1], Fn[t].getBBox && Fn[t].setAttribute("transform", Fn[t + 2] || ""), Fn[t + 3].uncache = 1)
	},
	cf = function(e, t) {
		var n;
		for (hn = 0; hn < qe.length; hn++) n = qe[hn], n && (!t || n._ctx === t) && (e ? n.kill(1) : n.revert(!0, !0));
		rf = !0, t && N_(t), t || Qr("revert")
	},
	B_ = function(e, t) {
		Ye.cache++, (t || !un) && Ye.forEach(function(n) {
			return mn(n) && n.cacheID++ && (n.rec = 0)
		}), zn(e) && ($e.history.scrollRestoration = tf = e)
	},
	un, qr = 0,
	hd, cy = function() {
		if (hd !== qr) {
			var e = hd = qr;
			requestAnimationFrame(function() {
				return e === qr && Br(!0)
			})
		}
	},
	k_ = function() {
		ct.appendChild(Gs), nf = !cn && Gs.offsetHeight || $e.innerHeight, ct.removeChild(Gs)
	},
	ud = function(e) {
		return ua(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
			return t.style.display = e ? "none" : "block"
		})
	},
	Br = function(e, t) {
		if (Qn && !e) {
			Wt(He, "scrollEnd", O_);
			return
		}
		k_(), un = He.isRefreshing = !0, Ye.forEach(function(i) {
			return mn(i) && ++i.cacheID && (i.rec = i())
		});
		var n = Qr("refreshInit");
		S_ && He.sort(), t || cf(), Ye.forEach(function(i) {
			mn(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0))
		}), qe.slice(0).forEach(function(i) {
			return i.refresh()
		}), rf = !1, qe.forEach(function(i) {
			if (i._subPinOffset && i.pin) {
				var s = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
					o = i.pin[s];
				i.revert(!0, 1), i.adjustPinSpacing(i.pin[s] - o), i.refresh()
			}
		}), eu = 1, ud(!0), qe.forEach(function(i) {
			var s = gi(i.scroller, i._dir),
				o = i.vars.end === "max" || i._endClamp && i.end > s,
				a = i._startClamp && i.start >= s;
			(o || a) && i.setPositions(a ? s - 1 : i.start, o ? Math.max(a ? s : i.start + 1, s) : i.end, !0)
		}), ud(!1), eu = 0, n.forEach(function(i) {
			return i && i.render && i.render(-1)
		}), Ye.forEach(function(i) {
			mn(i) && (i.smooth && requestAnimationFrame(function() {
				return i.target.style.scrollBehavior = "smooth"
			}), i.rec && i(i.rec))
		}), B_(tf, 1), $l.pause(), qr++, un = 2, Ni(2), qe.forEach(function(i) {
			return mn(i.vars.onRefresh) && i.vars.onRefresh(i)
		}), un = He.isRefreshing = !1, Qr("refresh")
	},
	iu = 0,
	Rl = 1,
	Ko, Ni = function(e) {
		if (e === 2 || !un && !rf) {
			He.isUpdating = !0, Ko && Ko.update(0);
			var t = qe.length,
				n = fn(),
				i = n - kc >= 50,
				s = t && qe[0].scroll();
			if (Rl = iu > s ? -1 : 1, un || (iu = s), i && (Qn && !cc && n - Qn > 200 && (Qn = 0, Qr("scrollEnd")), El = kc, kc = n), Rl < 0) {
				for (hn = t; hn-- > 0;) qe[hn] && qe[hn].update(0, i);
				Rl = 1
			} else
				for (hn = 0; hn < t; hn++) qe[hn] && qe[hn].update(0, i);
			He.isUpdating = !1
		}
		fa = 0
	},
	ru = [I_, F_, of, sf, jn + Qo, jn + $o, jn + Jo, jn + Zo, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
	Pl = ru.concat([Gr, Wr, "boxSizing", "max" + eo, "max" + af, "position", jn, Ct, Ct + Jo, Ct + $o, Ct + Qo, Ct + Zo]),
	hy = function(e, t, n) {
		Ws(n);
		var i = e._gsap;
		if (i.spacerIsNative) Ws(i.spacerState);
		else if (e._gsap.swappedIn) {
			var s = t.parentNode;
			s && (s.insertBefore(e, t), s.removeChild(t))
		}
		e._gsap.swappedIn = !1
	},
	Hc = function(e, t, n, i) {
		if (!e._gsap.swappedIn) {
			for (var s = ru.length, o = t.style, a = e.style, l; s--;) l = ru[s], o[l] = n[l];
			o.position = n.position === "absolute" ? "absolute" : "relative", n.display === "inline" && (o.display = "inline-block"), a[of] = a[sf] = "auto", o.flexBasis = n.flexBasis || "auto", o.overflow = "visible", o.boxSizing = "border-box", o[Gr] = tu(e, pn) + Ht, o[Wr] = tu(e, Ot) + Ht, o[Ct] = a[jn] = a[F_] = a[I_] = "0", Ws(i), a[Gr] = a["max" + eo] = n[Gr], a[Wr] = a["max" + af] = n[Wr], a[Ct] = n[Ct], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
		}
	},
	uy = /([A-Z])/g,
	Ws = function(e) {
		if (e) {
			var t = e.t.style,
				n = e.length,
				i = 0,
				s, o;
			for ((e.t._gsap || Me.core.getCache(e.t)).uncache = 1; i < n; i += 2) o = e[i + 1], s = e[i], o ? t[s] = o : t[s] && t.removeProperty(s.replace(uy, "-$1").toLowerCase())
		}
	},
	Ua = function(e) {
		for (var t = Pl.length, n = e.style, i = [], s = 0; s < t; s++) i.push(Pl[s], n[Pl[s]]);
		return i.t = e, i
	},
	fy = function(e, t, n) {
		for (var i = [], s = e.length, o = n ? 8 : 0, a; o < s; o += 2) a = e[o], i.push(a, a in t ? t[a] : e[o + 1]);
		return i.t = e.t, i
	},
	Dl = {
		left: 0,
		top: 0
	},
	fd = function(e, t, n, i, s, o, a, l, c, h, u, f, d, p) {
		mn(e) && (e = e(l)), zn(e) && e.substr(0, 3) === "max" && (e = f + (e.charAt(4) === "=" ? Cl("0" + e.substr(3), n) : 0));
		var m = d ? d.time() : 0,
			v, g, _;
		if (d && d.seek(0), isNaN(e) || (e = +e), Al(e)) d && (e = Me.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, f, e)), a && Ll(a, n, i, !0);
		else {
			mn(t) && (t = t(l));
			var w = (e || "0").split(" "),
				x, y, b, S;
			_ = Mn(t, l) || ct, x = Fi(_) || {}, (!x || !x.left && !x.top) && $n(_).display === "none" && (S = _.style.display, _.style.display = "block", x = Fi(_), S ? _.style.display = S : _.style.removeProperty("display")), y = Cl(w[0], x[i.d]), b = Cl(w[1] || "0", n), e = x[i.p] - c[i.p] - h + y + s - b, a && Ll(a, b, i, n - b < 20 || a._isStart && b > 20), n -= n - b
		}
		if (p && (l[p] = e || -.001, e < 0 && (e = 0)), o) {
			var D = e + n,
				O = o._isStart;
			v = "scroll" + i.d2, Ll(o, D, i, O && D > 20 || !O && (u ? Math.max(ct[v], ai[v]) : o.parentNode[v]) <= D + 1), u && (c = Fi(a), u && (o.style[i.op.p] = c[i.op.p] - i.op.m - o._offset + Ht))
		}
		return d && _ && (v = Fi(_), d.seek(f), g = Fi(_), d._caScrollDist = v[i.p] - g[i.p], e = e / d._caScrollDist * f), d && d.seek(m), d ? e : Math.round(e)
	},
	dy = /(webkit|moz|length|cssText|inset)/i,
	dd = function(e, t, n, i) {
		if (e.parentNode !== t) {
			var s = e.style,
				o, a;
			if (t === ct) {
				e._stOrig = s.cssText, a = $n(e);
				for (o in a) !+o && !dy.test(o) && a[o] && typeof s[o] == "string" && o !== "0" && (s[o] = a[o]);
				s.top = n, s.left = i
			} else s.cssText = e._stOrig;
			Me.core.getCache(e).uncache = 1, t.appendChild(e)
		}
	},
	U_ = function(e, t, n) {
		var i = t,
			s = i;
		return function(o) {
			var a = Math.round(e());
			return a !== i && a !== s && Math.abs(a - i) > 3 && Math.abs(a - s) > 3 && (o = a, n && n()), s = i, i = o, o
		}
	},
	Va = function(e, t, n) {
		var i = {};
		i[t.p] = "+=" + n, Me.set(e, i)
	},
	pd = function(e, t) {
		var n = _r(e, t),
			i = "_scroll" + t.p2,
			s = function o(a, l, c, h, u) {
				var f = o.tween,
					d = l.onComplete,
					p = {};
				c = c || n();
				var m = U_(n, c, function() {
					f.kill(), o.tween = 0
				});
				return u = h && u || 0, h = h || a - c, f && f.kill(), l[i] = a, l.modifiers = p, p[i] = function() {
					return m(c + h * f.ratio + u * f.ratio * f.ratio)
				}, l.onUpdate = function() {
					Ye.cache++, o.tween && Ni()
				}, l.onComplete = function() {
					o.tween = 0, d && d.call(f)
				}, f = o.tween = Me.to(e, l), f
			};
		return e[i] = n, n.wheelHandler = function() {
			return s.tween && s.tween.kill() && (s.tween = 0)
		}, Wt(e, "wheel", n.wheelHandler), He.isTouch && Wt(e, "touchmove", n.wheelHandler), s
	},
	He = function() {
		function r(t, n) {
			Es || r.register(Me) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Kh(this), this.init(t, n)
		}
		var e = r.prototype;
		return e.init = function(n, i) {
			if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !zo) {
				this.update = this.refresh = this.kill = fi;
				return
			}
			n = ad(zn(n) || Al(n) || n.nodeType ? {
				trigger: n
			} : n, Ba);
			var s = n,
				o = s.onUpdate,
				a = s.toggleClass,
				l = s.id,
				c = s.onToggle,
				h = s.onRefresh,
				u = s.scrub,
				f = s.trigger,
				d = s.pin,
				p = s.pinSpacing,
				m = s.invalidateOnRefresh,
				v = s.anticipatePin,
				g = s.onScrubComplete,
				_ = s.onSnapComplete,
				w = s.once,
				x = s.snap,
				y = s.pinReparent,
				b = s.pinSpacer,
				S = s.containerAnimation,
				D = s.fastScrollEnd,
				O = s.preventOverlaps,
				z = n.horizontal || n.containerAnimation && n.horizontal !== !1 ? pn : Ot,
				P = !u && u !== 0,
				M = Mn(n.scroller || $e),
				E = Me.core.getCache(M),
				R = Zr(M),
				V = ("pinType" in n ? n.pinType : ar(M, "pinType") || R && "fixed") === "fixed",
				N = [n.onEnter, n.onLeave, n.onEnterBack, n.onLeaveBack],
				k = P && n.toggleActions.split(" "),
				J = "markers" in n ? n.markers : Ba.markers,
				se = R ? 0 : parseFloat($n(M)["border" + z.p2 + eo]) || 0,
				A = this,
				Y = n.onRefreshInit && function() {
					return n.onRefreshInit(A)
				},
				de = iy(M, R, z),
				U = ry(M, R),
				W = 0,
				te = 0,
				q = 0,
				oe = _r(M, z),
				ce, ie, me, we, j, Z, ee, ge, ue, H, Re, Ne, Qe, L, C, K, ae, le, Q, Pe, Se, pe, F, he, re, Fe, be, Ue, _e, ze, je, Te, kt, xt, It, yn, hi, Vi, wn;
			if (A._startClamp = A._endClamp = !1, A._dir = z, v *= 45, A.scroller = M, A.scroll = S ? S.time.bind(S) : oe, we = oe(), A.vars = n, i = i || n.animation, "refreshPriority" in n && (S_ = 1, n.refreshPriority === -9999 && (Ko = A)), E.tweenScroll = E.tweenScroll || {
					top: pd(M, Ot),
					left: pd(M, pn)
				}, A.tweenTo = ce = E.tweenScroll[z.p], A.scrubDuration = function(ye) {
					kt = Al(ye) && ye, kt ? Te ? Te.duration(ye) : Te = Me.to(i, {
						ease: "expo",
						totalProgress: "+=0",
						duration: kt,
						paused: !0,
						onComplete: function() {
							return g && g(A)
						}
					}) : (Te && Te.progress(1).kill(), Te = 0)
				}, i && (i.vars.lazy = !1, i._initted && !A.isReverted || i.vars.immediateRender !== !1 && n.immediateRender !== !1 && i.duration() && i.render(0, !0, !0), A.animation = i.pause(), i.scrollTrigger = A, A.scrubDuration(u), ze = 0, l || (l = i.vars.id)), x && ((!Pr(x) || x.push) && (x = {
					snapTo: x
				}), "scrollBehavior" in ct.style && Me.set(R ? [ct, ai] : M, {
					scrollBehavior: "auto"
				}), Ye.forEach(function(ye) {
					return mn(ye) && ye.target === (R ? mt.scrollingElement || ai : M) && (ye.smooth = !1)
				}), me = mn(x.snapTo) ? x.snapTo : x.snapTo === "labels" ? oy(i) : x.snapTo === "labelsDirectional" ? ay(i) : x.directional !== !1 ? function(ye, We) {
					return lf(x.snapTo)(ye, fn() - te < 500 ? 0 : We.direction)
				} : Me.utils.snap(x.snapTo), xt = x.duration || {
					min: .1,
					max: 2
				}, xt = Pr(xt) ? zs(xt.min, xt.max) : zs(xt, xt), It = Me.delayedCall(x.delay || kt / 2 || .1, function() {
					var ye = oe(),
						We = fn() - te < 500,
						T = ce.tween;
					if ((We || Math.abs(A.getVelocity()) < 10) && !T && !cc && W !== ye) {
						var B = (ye - Z) / L,
							X = i && !P ? i.totalProgress() : B,
							G = We ? 0 : (X - je) / (fn() - El) * 1e3 || 0,
							$ = Me.utils.clamp(-B, 1 - B, rs(G / 2) * G / .185),
							Le = B + (x.inertia === !1 ? 0 : $),
							Ee = zs(0, 1, me(Le, A)),
							Ae = Math.round(Z + Ee * L),
							xe = x,
							Ve = xe.onStart,
							Ce = xe.onInterrupt,
							Be = xe.onComplete;
						if (ye <= ee && ye >= Z && Ae !== ye) {
							if (T && !T._initted && T.data <= rs(Ae - ye)) return;
							x.inertia === !1 && ($ = Ee - B), ce(Ae, {
								duration: xt(rs(Math.max(rs(Le - X), rs(Ee - X)) * .185 / G / .05 || 0)),
								ease: x.ease || "power3",
								data: rs(Ae - ye),
								onInterrupt: function() {
									return It.restart(!0) && Ce && Ce(A)
								},
								onComplete: function() {
									A.update(), W = oe(), Te && i && i.progress(Ee), ze = je = i && !P ? i.totalProgress() : A.progress, _ && _(A), Be && Be(A)
								}
							}, ye, $ * L, Ae - ye - $ * L), Ve && Ve(A, ce.tween)
						}
					} else A.isActive && W !== ye && It.restart(!0)
				}).pause()), l && (nu[l] = A), f = A.trigger = Mn(f || d !== !0 && d), wn = f && f._gsap && f._gsap.stRevert, wn && (wn = wn(A)), d = d === !0 ? f : Mn(d), zn(a) && (a = {
					targets: f,
					className: a
				}), d && (p === !1 || p === jn || (p = !p && d.parentNode && d.parentNode.style && $n(d.parentNode).display === "flex" ? !1 : Ct), A.pin = d, ie = Me.core.getCache(d), ie.spacer ? C = ie.pinState : (b && (b = Mn(b), b && !b.nodeType && (b = b.current || b.nativeElement), ie.spacerIsNative = !!b, b && (ie.spacerState = Ua(b))), ie.spacer = le = b || mt.createElement("div"), le.classList.add("pin-spacer"), l && le.classList.add("pin-spacer-" + l), ie.pinState = C = Ua(d)), n.force3D !== !1 && Me.set(d, {
					force3D: !0
				}), A.spacer = le = ie.spacer, _e = $n(d), he = _e[p + z.os2], Pe = Me.getProperty(d), Se = Me.quickSetter(d, z.a, Ht), Hc(d, le, _e), ae = Ua(d)), J) {
				Ne = Pr(J) ? ad(J, ld) : ld, H = ka("scroller-start", l, M, z, Ne, 0), Re = ka("scroller-end", l, M, z, Ne, 0, H), Q = H["offset" + z.op.d2];
				var Ge = Mn(ar(M, "content") || M);
				ge = this.markerStart = ka("start", l, Ge, z, Ne, Q, 0, S), ue = this.markerEnd = ka("end", l, Ge, z, Ne, Q, 0, S), S && (Vi = Me.quickSetter([ge, ue], z.a, Ht)), !V && !(xi.length && ar(M, "fixedMarkers") === !0) && (sy(R ? ct : M), Me.set([H, Re], {
					force3D: !0
				}), Fe = Me.quickSetter(H, z.a, Ht), Ue = Me.quickSetter(Re, z.a, Ht))
			}
			if (S) {
				var Ie = S.vars.onUpdate,
					Je = S.vars.onUpdateParams;
				S.eventCallback("onUpdate", function() {
					A.update(0, 0, 1), Ie && Ie.apply(S, Je || [])
				})
			}
			if (A.previous = function() {
					return qe[qe.indexOf(A) - 1]
				}, A.next = function() {
					return qe[qe.indexOf(A) + 1]
				}, A.revert = function(ye, We) {
					if (!We) return A.kill(!0);
					var T = ye !== !1 || !A.enabled,
						B = Qt;
					T !== A.isReverted && (T && (yn = Math.max(oe(), A.scroll.rec || 0), q = A.progress, hi = i && i.progress()), ge && [ge, ue, H, Re].forEach(function(X) {
						return X.style.display = T ? "none" : "block"
					}), T && (Qt = A, A.update(T)), d && (!y || !A.isActive) && (T ? hy(d, le, C) : Hc(d, le, $n(d), re)), T || A.update(T), Qt = B, A.isReverted = T)
				}, A.refresh = function(ye, We, T, B) {
					if (!((Qt || !A.enabled) && !We)) {
						if (d && ye && Qn) {
							Wt(r, "scrollEnd", O_);
							return
						}!un && Y && Y(A), Qt = A, ce.tween && !T && (ce.tween.kill(), ce.tween = 0), Te && Te.pause(), m && i && i.revert({
							kill: !1
						}).invalidate(), A.isReverted || A.revert(!0, !0), A._subPinOffset = !1;
						var X = de(),
							G = U(),
							$ = S ? S.duration() : gi(M, z),
							Le = L <= .01,
							Ee = 0,
							Ae = B || 0,
							xe = Pr(T) ? T.end : n.end,
							Ve = n.endTrigger || f,
							Ce = Pr(T) ? T.start : n.start || (n.start === 0 || !f ? 0 : d ? "0 0" : "0 100%"),
							Be = A.pinnedContainer = n.pinnedContainer && Mn(n.pinnedContainer, A),
							Ke = f && Math.max(0, qe.indexOf(A)) || 0,
							wt = Ke,
							ht, ke, Ut, ut, st, ft, Tt, Pn, Ft, ni, bt, go, Ca;
						for (J && Pr(T) && (go = Me.getProperty(H, z.p), Ca = Me.getProperty(Re, z.p)); wt--;) ft = qe[wt], ft.end || ft.refresh(0, 1) || (Qt = A), Tt = ft.pin, Tt && (Tt === f || Tt === d || Tt === Be) && !ft.isReverted && (ni || (ni = []), ni.unshift(ft), ft.revert(!0, !0)), ft !== qe[wt] && (Ke--, wt--);
						for (mn(Ce) && (Ce = Ce(A)), Ce = id(Ce, "start", A), Z = fd(Ce, f, X, z, oe(), ge, H, A, G, se, V, $, S, A._startClamp && "_startClamp") || (d ? -.001 : 0), mn(xe) && (xe = xe(A)), zn(xe) && !xe.indexOf("+=") && (~xe.indexOf(" ") ? xe = (zn(Ce) ? Ce.split(" ")[0] : "") + xe : (Ee = Cl(xe.substr(2), X), xe = zn(Ce) ? Ce : (S ? Me.utils.mapRange(0, S.duration(), S.scrollTrigger.start, S.scrollTrigger.end, Z) : Z) + Ee, Ve = f)), xe = id(xe, "end", A), ee = Math.max(Z, fd(xe || (Ve ? "100% 0" : $), Ve, X, z, oe() + Ee, ue, Re, A, G, se, V, $, S, A._endClamp && "_endClamp")) || -.001, Ee = 0, wt = Ke; wt--;) ft = qe[wt], Tt = ft.pin, Tt && ft.start - ft._pinPush <= Z && !S && ft.end > 0 && (ht = ft.end - (A._startClamp ? Math.max(0, ft.start) : ft.start), (Tt === f && ft.start - ft._pinPush < Z || Tt === Be) && isNaN(Ce) && (Ee += ht * (1 - ft.progress)), Tt === d && (Ae += ht));
						if (Z += Ee, ee += Ee, A._startClamp && (A._startClamp += Ee), A._endClamp && !un && (A._endClamp = ee || -.001, ee = Math.min(ee, gi(M, z))), L = ee - Z || (Z -= .01) && .001, Le && (q = Me.utils.clamp(0, 1, Me.utils.normalize(Z, ee, yn))), A._pinPush = Ae, ge && Ee && (ht = {}, ht[z.a] = "+=" + Ee, Be && (ht[z.p] = "-=" + oe()), Me.set([ge, ue], ht)), d && !(eu && A.end >= gi(M, z))) ht = $n(d), ut = z === Ot, Ut = oe(), pe = parseFloat(Pe(z.a)) + Ae, !$ && ee > 1 && (bt = (R ? mt.scrollingElement || ai : M).style, bt = {
							style: bt,
							value: bt["overflow" + z.a.toUpperCase()]
						}, R && $n(ct)["overflow" + z.a.toUpperCase()] !== "scroll" && (bt.style["overflow" + z.a.toUpperCase()] = "scroll")), Hc(d, le, ht), ae = Ua(d), ke = Fi(d, !0), Pn = V && _r(M, ut ? pn : Ot)(), p && (re = [p + z.os2, L + Ae + Ht], re.t = le, wt = p === Ct ? tu(d, z) + L + Ae : 0, wt && (re.push(z.d, wt + Ht), le.style.flexBasis !== "auto" && (le.style.flexBasis = wt + Ht)), Ws(re), Be && qe.forEach(function(_o) {
							_o.pin === Be && _o.vars.pinSpacing !== !1 && (_o._subPinOffset = !0)
						}), V && oe(yn)), V && (st = {
							top: ke.top + (ut ? Ut - Z : Pn) + Ht,
							left: ke.left + (ut ? Pn : Ut - Z) + Ht,
							boxSizing: "border-box",
							position: "fixed"
						}, st[Gr] = st["max" + eo] = Math.ceil(ke.width) + Ht, st[Wr] = st["max" + af] = Math.ceil(ke.height) + Ht, st[jn] = st[jn + Jo] = st[jn + $o] = st[jn + Qo] = st[jn + Zo] = "0", st[Ct] = ht[Ct], st[Ct + Jo] = ht[Ct + Jo], st[Ct + $o] = ht[Ct + $o], st[Ct + Qo] = ht[Ct + Qo], st[Ct + Zo] = ht[Ct + Zo], K = fy(C, st, y), un && oe(0)), i ? (Ft = i._initted, Nc(1), i.render(i.duration(), !0, !0), F = Pe(z.a) - pe + L + Ae, be = Math.abs(L - F) > 1, V && be && K.splice(K.length - 2, 2), i.render(0, !0, !0), Ft || i.invalidate(!0), i.parent || i.totalTime(i.totalTime()), Nc(0)) : F = L, bt && (bt.value ? bt.style["overflow" + z.a.toUpperCase()] = bt.value : bt.style.removeProperty("overflow-" + z.a));
						else if (f && oe() && !S)
							for (ke = f.parentNode; ke && ke !== ct;) ke._pinOffset && (Z -= ke._pinOffset, ee -= ke._pinOffset), ke = ke.parentNode;
						ni && ni.forEach(function(_o) {
							return _o.revert(!1, !0)
						}), A.start = Z, A.end = ee, we = j = un ? yn : oe(), !S && !un && (we < yn && oe(yn), A.scroll.rec = 0), A.revert(!1, !0), te = fn(), It && (W = -1, It.restart(!0)), Qt = 0, i && P && (i._initted || hi) && i.progress() !== hi && i.progress(hi || 0, !0).render(i.time(), !0, !0), (Le || q !== A.progress || S) && (i && !P && i.totalProgress(S && Z < -.001 && !q ? Me.utils.normalize(Z, ee, 0) : q, !0), A.progress = Le || (we - Z) / L === q ? 0 : q), d && p && (le._pinOffset = Math.round(A.progress * F)), Te && Te.invalidate(), isNaN(go) || (go -= Me.getProperty(H, z.p), Ca -= Me.getProperty(Re, z.p), Va(H, z, go), Va(ge, z, go - (B || 0)), Va(Re, z, Ca), Va(ue, z, Ca - (B || 0))), Le && !un && A.update(), h && !un && !Qe && (Qe = !0, h(A), Qe = !1)
					}
				}, A.getVelocity = function() {
					return (oe() - j) / (fn() - El) * 1e3 || 0
				}, A.endAnimation = function() {
					yo(A.callbackAnimation), i && (Te ? Te.progress(1) : i.paused() ? P || yo(i, A.direction < 0, 1) : yo(i, i.reversed()))
				}, A.labelToScroll = function(ye) {
					return i && i.labels && (Z || A.refresh() || Z) + i.labels[ye] / i.duration() * L || 0
				}, A.getTrailing = function(ye) {
					var We = qe.indexOf(A),
						T = A.direction > 0 ? qe.slice(0, We).reverse() : qe.slice(We + 1);
					return (zn(ye) ? T.filter(function(B) {
						return B.vars.preventOverlaps === ye
					}) : T).filter(function(B) {
						return A.direction > 0 ? B.end <= Z : B.start >= ee
					})
				}, A.update = function(ye, We, T) {
					if (!(S && !T && !ye)) {
						var B = un === !0 ? yn : A.scroll(),
							X = ye ? 0 : (B - Z) / L,
							G = X < 0 ? 0 : X > 1 ? 1 : X || 0,
							$ = A.progress,
							Le, Ee, Ae, xe, Ve, Ce, Be, Ke;
						if (We && (j = we, we = S ? oe() : B, x && (je = ze, ze = i && !P ? i.totalProgress() : G)), v && !G && d && !Qt && !Fa && Qn && Z < B + (B - j) / (fn() - El) * v && (G = 1e-4), G !== $ && A.enabled) {
							if (Le = A.isActive = !!G && G < 1, Ee = !!$ && $ < 1, Ce = Le !== Ee, Ve = Ce || !!G != !!$, A.direction = G > $ ? 1 : -1, A.progress = G, Ve && !Qt && (Ae = G && !$ ? 0 : G === 1 ? 1 : $ === 1 ? 2 : 3, P && (xe = !Ce && k[Ae + 1] !== "none" && k[Ae + 1] || k[Ae], Ke = i && (xe === "complete" || xe === "reset" || xe in i))), O && (Ce || Ke) && (Ke || u || !i) && (mn(O) ? O(A) : A.getTrailing(O).forEach(function(Ut) {
									return Ut.endAnimation()
								})), P || (Te && !Qt && !Fa ? (Te._dp._time - Te._start !== Te._time && Te.render(Te._dp._time - Te._start), Te.resetTo ? Te.resetTo("totalProgress", G, i._tTime / i._tDur) : (Te.vars.totalProgress = G, Te.invalidate().restart())) : i && i.totalProgress(G, !!(Qt && (te || ye)))), d) {
								if (ye && p && (le.style[p + z.os2] = he), !V) Se(Oo(pe + F * G));
								else if (Ve) {
									if (Be = !ye && G > $ && ee + 1 > B && B + 1 >= gi(M, z), y)
										if (!ye && (Le || Be)) {
											var wt = Fi(d, !0),
												ht = B - Z;
											dd(d, ct, wt.top + (z === Ot ? ht : 0) + Ht, wt.left + (z === Ot ? 0 : ht) + Ht)
										} else dd(d, le);
									Ws(Le || Be ? K : ae), be && G < 1 && Le || Se(pe + (G === 1 && !Be ? F : 0))
								}
							}
							x && !ce.tween && !Qt && !Fa && It.restart(!0), a && (Ce || w && G && (G < 1 || !Bc)) && ua(a.targets).forEach(function(Ut) {
								return Ut.classList[Le || w ? "add" : "remove"](a.className)
							}), o && !P && !ye && o(A), Ve && !Qt ? (P && (Ke && (xe === "complete" ? i.pause().totalProgress(1) : xe === "reset" ? i.restart(!0).pause() : xe === "restart" ? i.restart(!0) : i[xe]()), o && o(A)), (Ce || !Bc) && (c && Ce && Uc(A, c), N[Ae] && Uc(A, N[Ae]), w && (G === 1 ? A.kill(!1, 1) : N[Ae] = 0), Ce || (Ae = G === 1 ? 1 : 3, N[Ae] && Uc(A, N[Ae]))), D && !Le && Math.abs(A.getVelocity()) > (Al(D) ? D : 2500) && (yo(A.callbackAnimation), Te ? Te.progress(1) : yo(i, xe === "reverse" ? 1 : !G, 1))) : P && o && !Qt && o(A)
						}
						if (Ue) {
							var ke = S ? B / S.duration() * (S._caScrollDist || 0) : B;
							Fe(ke + (H._isFlipped ? 1 : 0)), Ue(ke)
						}
						Vi && Vi(-B / S.duration() * (S._caScrollDist || 0))
					}
				}, A.enable = function(ye, We) {
					A.enabled || (A.enabled = !0, Wt(M, "resize", No), R || Wt(M, "scroll", ss), Y && Wt(r, "refreshInit", Y), ye !== !1 && (A.progress = q = 0, we = j = W = oe()), We !== !1 && A.refresh())
				}, A.getTween = function(ye) {
					return ye && ce ? ce.tween : Te
				}, A.setPositions = function(ye, We, T, B) {
					if (S) {
						var X = S.scrollTrigger,
							G = S.duration(),
							$ = X.end - X.start;
						ye = X.start + $ * ye / G, We = X.start + $ * We / G
					}
					A.refresh(!1, !1, {
						start: rd(ye, T && !!A._startClamp),
						end: rd(We, T && !!A._endClamp)
					}, B), A.update()
				}, A.adjustPinSpacing = function(ye) {
					if (re && ye) {
						var We = re.indexOf(z.d) + 1;
						re[We] = parseFloat(re[We]) + ye + Ht, re[1] = parseFloat(re[1]) + ye + Ht, Ws(re)
					}
				}, A.disable = function(ye, We) {
					if (A.enabled && (ye !== !1 && A.revert(!0, !0), A.enabled = A.isActive = !1, We || Te && Te.pause(), yn = 0, ie && (ie.uncache = 1), Y && Gt(r, "refreshInit", Y), It && (It.pause(), ce.tween && ce.tween.kill() && (ce.tween = 0)), !R)) {
						for (var T = qe.length; T--;)
							if (qe[T].scroller === M && qe[T] !== A) return;
						Gt(M, "resize", No), R || Gt(M, "scroll", ss)
					}
				}, A.kill = function(ye, We) {
					A.disable(ye, We), Te && !We && Te.kill(), l && delete nu[l];
					var T = qe.indexOf(A);
					T >= 0 && qe.splice(T, 1), T === hn && Rl > 0 && hn--, T = 0, qe.forEach(function(B) {
						return B.scroller === A.scroller && (T = 1)
					}), T || un || (A.scroll.rec = 0), i && (i.scrollTrigger = null, ye && i.revert({
						kill: !1
					}), We || i.kill()), ge && [ge, ue, H, Re].forEach(function(B) {
						return B.parentNode && B.parentNode.removeChild(B)
					}), Ko === A && (Ko = 0), d && (ie && (ie.uncache = 1), T = 0, qe.forEach(function(B) {
						return B.pin === d && T++
					}), T || (ie.spacer = 0)), n.onKill && n.onKill(A)
				}, qe.push(A), A.enable(!1, !1), wn && wn(A), i && i.add && !L) {
				var yt = A.update;
				A.update = function() {
					A.update = yt, Z || ee || A.refresh()
				}, Me.delayedCall(.01, A.update), L = .01, Z = ee = 0
			} else A.refresh();
			d && cy()
		}, r.register = function(n) {
			return Es || (Me = n || R_(), L_() && window.document && r.enable(), Es = zo), Es
		}, r.defaults = function(n) {
			if (n)
				for (var i in n) Ba[i] = n[i];
			return Ba
		}, r.disable = function(n, i) {
			zo = 0, qe.forEach(function(o) {
				return o[i ? "kill" : "disable"](n)
			}), Gt($e, "wheel", ss), Gt(mt, "scroll", ss), clearInterval(Ia), Gt(mt, "touchcancel", fi), Gt(ct, "touchstart", fi), Oa(Gt, mt, "pointerdown,touchstart,mousedown", sd), Oa(Gt, mt, "pointerup,touchend,mouseup", od), $l.kill(), za(Gt);
			for (var s = 0; s < Ye.length; s += 3) Na(Gt, Ye[s], Ye[s + 1]), Na(Gt, Ye[s], Ye[s + 2])
		}, r.enable = function() {
			if ($e = window, mt = document, ai = mt.documentElement, ct = mt.body, Me && (ua = Me.utils.toArray, zs = Me.utils.clamp, Kh = Me.core.context || fi, Nc = Me.core.suppressOverwrites || fi, tf = $e.history.scrollRestoration || "auto", iu = $e.pageYOffset, Me.core.globals("ScrollTrigger", r), ct)) {
				zo = 1, Gs = document.createElement("div"), Gs.style.height = "100vh", Gs.style.position = "absolute", k_(), ny(), Dt.register(Me), r.isTouch = Dt.isTouch, Ji = Dt.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Wt($e, "wheel", ss), M_ = [$e, mt, ai, ct], Me.matchMedia ? (r.matchMedia = function(l) {
					var c = Me.matchMedia(),
						h;
					for (h in l) c.add(h, l[h]);
					return c
				}, Me.addEventListener("matchMediaInit", function() {
					return cf()
				}), Me.addEventListener("matchMediaRevert", function() {
					return N_()
				}), Me.addEventListener("matchMedia", function() {
					Br(0, 1), Qr("matchMedia")
				}), Me.matchMedia("(orientation: portrait)", function() {
					return Vc(), Vc
				})) : console.warn("Requires GSAP 3.11.0 or later"), Vc(), Wt(mt, "scroll", ss);
				var n = ct.style,
					i = n.borderTopStyle,
					s = Me.core.Animation.prototype,
					o, a;
				for (s.revert || Object.defineProperty(s, "revert", {
						value: function() {
							return this.time(-.01, !0)
						}
					}), n.borderTopStyle = "solid", o = Fi(ct), Ot.m = Math.round(o.top + Ot.sc()) || 0, pn.m = Math.round(o.left + pn.sc()) || 0, i ? n.borderTopStyle = i : n.removeProperty("border-top-style"), Ia = setInterval(cd, 250), Me.delayedCall(.5, function() {
						return Fa = 0
					}), Wt(mt, "touchcancel", fi), Wt(ct, "touchstart", fi), Oa(Wt, mt, "pointerdown,touchstart,mousedown", sd), Oa(Wt, mt, "pointerup,touchend,mouseup", od), Qh = Me.utils.checkPrefix("transform"), Pl.push(Qh), Es = fn(), $l = Me.delayedCall(.2, Br).pause(), As = [mt, "visibilitychange", function() {
						var l = $e.innerWidth,
							c = $e.innerHeight;
						mt.hidden ? (td = l, nd = c) : (td !== l || nd !== c) && No()
					}, mt, "DOMContentLoaded", Br, $e, "load", Br, $e, "resize", No], za(Wt), qe.forEach(function(l) {
						return l.enable(0, 1)
					}), a = 0; a < Ye.length; a += 3) Na(Gt, Ye[a], Ye[a + 1]), Na(Gt, Ye[a], Ye[a + 2])
			}
		}, r.config = function(n) {
			"limitCallbacks" in n && (Bc = !!n.limitCallbacks);
			var i = n.syncInterval;
			i && clearInterval(Ia) || (Ia = i) && setInterval(cd, i), "ignoreMobileResize" in n && (E_ = r.isTouch === 1 && n.ignoreMobileResize), "autoRefreshEvents" in n && (za(Gt) || za(Wt, n.autoRefreshEvents || "none"), T_ = (n.autoRefreshEvents + "").indexOf("resize") === -1)
		}, r.scrollerProxy = function(n, i) {
			var s = Mn(n),
				o = Ye.indexOf(s),
				a = Zr(s);
			~o && Ye.splice(o, a ? 6 : 2), i && (a ? xi.unshift($e, i, ct, i, ai, i) : xi.unshift(s, i))
		}, r.clearMatchMedia = function(n) {
			qe.forEach(function(i) {
				return i._ctx && i._ctx.query === n && i._ctx.kill(!0, !0)
			})
		}, r.isInViewport = function(n, i, s) {
			var o = (zn(n) ? Mn(n) : n).getBoundingClientRect(),
				a = o[s ? Gr : Wr] * i || 0;
			return s ? o.right - a > 0 && o.left + a < $e.innerWidth : o.bottom - a > 0 && o.top + a < $e.innerHeight
		}, r.positionInViewport = function(n, i, s) {
			zn(n) && (n = Mn(n));
			var o = n.getBoundingClientRect(),
				a = o[s ? Gr : Wr],
				l = i == null ? a / 2 : i in Zl ? Zl[i] * a : ~i.indexOf("%") ? parseFloat(i) * a / 100 : parseFloat(i) || 0;
			return s ? (o.left + l) / $e.innerWidth : (o.top + l) / $e.innerHeight
		}, r.killAll = function(n) {
			if (qe.slice(0).forEach(function(s) {
					return s.vars.id !== "ScrollSmoother" && s.kill()
				}), n !== !0) {
				var i = Jr.killAll || [];
				Jr = {}, i.forEach(function(s) {
					return s()
				})
			}
		}, r
	}();
He.version = "3.12.3";
He.saveStyles = function(r) {
	return r ? ua(r).forEach(function(e) {
		if (e && e.style) {
			var t = Fn.indexOf(e);
			t >= 0 && Fn.splice(t, 5), Fn.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), Me.core.getCache(e), Kh())
		}
	}) : Fn
};
He.revert = function(r, e) {
	return cf(!r, e)
};
He.create = function(r, e) {
	return new He(r, e)
};
He.refresh = function(r) {
	return r ? No() : (Es || He.register()) && Br(!0)
};
He.update = function(r) {
	return ++Ye.cache && Ni(r === !0 ? 2 : 0)
};
He.clearScrollMemory = B_;
He.maxScroll = function(r, e) {
	return gi(r, e ? pn : Ot)
};
He.getScrollFunc = function(r, e) {
	return _r(Mn(r), e ? pn : Ot)
};
He.getById = function(r) {
	return nu[r]
};
He.getAll = function() {
	return qe.filter(function(r) {
		return r.vars.id !== "ScrollSmoother"
	})
};
He.isScrolling = function() {
	return !!Qn
};
He.snapDirectional = lf;
He.addEventListener = function(r, e) {
	var t = Jr[r] || (Jr[r] = []);
	~t.indexOf(e) || t.push(e)
};
He.removeEventListener = function(r, e) {
	var t = Jr[r],
		n = t && t.indexOf(e);
	n >= 0 && t.splice(n, 1)
};
He.batch = function(r, e) {
	var t = [],
		n = {},
		i = e.interval || .016,
		s = e.batchMax || 1e9,
		o = function(c, h) {
			var u = [],
				f = [],
				d = Me.delayedCall(i, function() {
					h(u, f), u = [], f = []
				}).pause();
			return function(p) {
				u.length || d.restart(!0), u.push(p.trigger), f.push(p), s <= u.length && d.progress(1)
			}
		},
		a;
	for (a in e) n[a] = a.substr(0, 2) === "on" && mn(e[a]) && a !== "onRefreshInit" ? o(a, e[a]) : e[a];
	return mn(s) && (s = s(), Wt(He, "refresh", function() {
		return s = e.batchMax()
	})), ua(r).forEach(function(l) {
		var c = {};
		for (a in n) c[a] = n[a];
		c.trigger = l, t.push(He.create(c))
	}), t
};
var md = function(e, t, n, i) {
		return t > i ? e(i) : t < 0 && e(0), n > i ? (i - t) / (n - t) : n < 0 ? t / (t - n) : 1
	},
	Gc = function r(e, t) {
		t === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = t === !0 ? "auto" : t ? "pan-" + t + (Dt.isTouch ? " pinch-zoom" : "") : "none", e === ai && r(ct, t)
	},
	Ha = {
		auto: 1,
		scroll: 1
	},
	py = function(e) {
		var t = e.event,
			n = e.target,
			i = e.axis,
			s = (t.changedTouches ? t.changedTouches[0] : t).target,
			o = s._gsap || Me.core.getCache(s),
			a = fn(),
			l;
		if (!o._isScrollT || a - o._isScrollT > 2e3) {
			for (; s && s !== ct && (s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth || !(Ha[(l = $n(s)).overflowY] || Ha[l.overflowX]));) s = s.parentNode;
			o._isScroll = s && s !== n && !Zr(s) && (Ha[(l = $n(s)).overflowY] || Ha[l.overflowX]), o._isScrollT = a
		}(o._isScroll || i === "x") && (t.stopPropagation(), t._gsapAllow = !0)
	},
	V_ = function(e, t, n, i) {
		return Dt.create({
			target: e,
			capture: !0,
			debounce: !1,
			lockAxis: !0,
			type: t,
			onWheel: i = i && py,
			onPress: i,
			onDrag: i,
			onScroll: i,
			onEnable: function() {
				return n && Wt(mt, Dt.eventTypes[0], _d, !1, !0)
			},
			onDisable: function() {
				return Gt(mt, Dt.eventTypes[0], _d, !0)
			}
		})
	},
	my = /(input|label|select|textarea)/i,
	gd, _d = function(e) {
		var t = my.test(e.target.tagName);
		(t || gd) && (e._gsapAllow = !0, gd = t)
	},
	gy = function(e) {
		Pr(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
		var t = e,
			n = t.normalizeScrollX,
			i = t.momentum,
			s = t.allowNestedScroll,
			o = t.onRelease,
			a, l, c = Mn(e.target) || ai,
			h = Me.core.globals().ScrollSmoother,
			u = h && h.get(),
			f = Ji && (e.content && Mn(e.content) || u && e.content !== !1 && !u.smooth() && u.content()),
			d = _r(c, Ot),
			p = _r(c, pn),
			m = 1,
			v = (Dt.isTouch && $e.visualViewport ? $e.visualViewport.scale * $e.visualViewport.width : $e.outerWidth) / $e.innerWidth,
			g = 0,
			_ = mn(i) ? function() {
				return i(a)
			} : function() {
				return i || 2.8
			},
			w, x, y = V_(c, e.type, !0, s),
			b = function() {
				return x = !1
			},
			S = fi,
			D = fi,
			O = function() {
				l = gi(c, Ot), D = zs(Ji ? 1 : 0, l), n && (S = zs(0, gi(c, pn))), w = qr
			},
			z = function() {
				f._gsap.y = Oo(parseFloat(f._gsap.y) + d.offset) + "px", f.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(f._gsap.y) + ", 0, 1)", d.offset = d.cacheID = 0
			},
			P = function() {
				if (x) {
					requestAnimationFrame(b);
					var J = Oo(a.deltaY / 2),
						se = D(d.v - J);
					if (f && se !== d.v + d.offset) {
						d.offset = se - d.v;
						var A = Oo((parseFloat(f && f._gsap.y) || 0) - d.offset);
						f.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + A + ", 0, 1)", f._gsap.y = A + "px", d.cacheID = Ye.cache, Ni()
					}
					return !0
				}
				d.offset && z(), x = !0
			},
			M, E, R, V, N = function() {
				O(), M.isActive() && M.vars.scrollY > l && (d() > l ? M.progress(1) && d(l) : M.resetTo("scrollY", l))
			};
		return f && Me.set(f, {
			y: "+=0"
		}), e.ignoreCheck = function(k) {
			return Ji && k.type === "touchmove" && P() || m > 1.05 && k.type !== "touchstart" || a.isGesturing || k.touches && k.touches.length > 1
		}, e.onPress = function() {
			x = !1;
			var k = m;
			m = Oo(($e.visualViewport && $e.visualViewport.scale || 1) / v), M.pause(), k !== m && Gc(c, m > 1.01 ? !0 : n ? !1 : "x"), E = p(), R = d(), O(), w = qr
		}, e.onRelease = e.onGestureStart = function(k, J) {
			if (d.offset && z(), !J) V.restart(!0);
			else {
				Ye.cache++;
				var se = _(),
					A, Y;
				n && (A = p(), Y = A + se * .05 * -k.velocityX / .227, se *= md(p, A, Y, gi(c, pn)), M.vars.scrollX = S(Y)), A = d(), Y = A + se * .05 * -k.velocityY / .227, se *= md(d, A, Y, gi(c, Ot)), M.vars.scrollY = D(Y), M.invalidate().duration(se).play(.01), (Ji && M.vars.scrollY >= l || A >= l - 1) && Me.to({}, {
					onUpdate: N,
					duration: se
				})
			}
			o && o(k)
		}, e.onWheel = function() {
			M._ts && M.pause(), fn() - g > 1e3 && (w = 0, g = fn())
		}, e.onChange = function(k, J, se, A, Y) {
			if (qr !== w && O(), J && n && p(S(A[2] === J ? E + (k.startX - k.x) : p() + J - A[1])), se) {
				d.offset && z();
				var de = Y[2] === se,
					U = de ? R + k.startY - k.y : d() + se - Y[1],
					W = D(U);
				de && U !== W && (R += W - U), d(W)
			}(se || J) && Ni()
		}, e.onEnable = function() {
			Gc(c, n ? !1 : "x"), He.addEventListener("refresh", N), Wt($e, "resize", N), d.smooth && (d.target.style.scrollBehavior = "auto", d.smooth = p.smooth = !1), y.enable()
		}, e.onDisable = function() {
			Gc(c, !0), Gt($e, "resize", N), He.removeEventListener("refresh", N), y.kill()
		}, e.lockAxis = e.lockAxis !== !1, a = new Dt(e), a.iOS = Ji, Ji && !d() && d(1), Ji && Me.ticker.add(fi), V = a._dc, M = Me.to(a, {
			ease: "power4",
			paused: !0,
			scrollX: n ? "+=0.1" : "+=0",
			scrollY: "+=0.1",
			modifiers: {
				scrollY: U_(d, d(), function() {
					return M.pause()
				})
			},
			onUpdate: Ni,
			onComplete: V.vars.onComplete
		}), a
	};
He.sort = function(r) {
	return qe.sort(r || function(e, t) {
		return (e.vars.refreshPriority || 0) * -1e6 + e.start - (t.start + (t.vars.refreshPriority || 0) * -1e6)
	})
};
He.observe = function(r) {
	return new Dt(r)
};
He.normalizeScroll = function(r) {
	if (typeof r > "u") return cn;
	if (r === !0 && cn) return cn.enable();
	if (r === !1) {
		cn && cn.kill(), cn = r;
		return
	}
	var e = r instanceof Dt ? r : gy(r);
	return cn && cn.target === e.target && cn.kill(), Zr(e.target) && (cn = e), e
};
He.core = {
	_getVelocityProp: Jh,
	_inputObserver: V_,
	_scrollers: Ye,
	_proxies: xi,
	bridge: {
		ss: function() {
			Qn || Qr("scrollStart"), Qn = fn()
		},
		ref: function() {
			return Qt
		}
	}
};
R_() && Me.registerPlugin(He);

function su() {
	return su = Object.assign ? Object.assign.bind() : function(r) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n])
		}
		return r
	}, su.apply(this, arguments)
}

function Jl(r, e, t) {
	return Math.max(r, Math.min(e, t))
}
class _y {
	advance(e) {
		var t;
		if (!this.isRunning) return;
		let n = !1;
		if (this.lerp) this.value = (i = this.value, s = this.to, (1 - (o = 1 - Math.exp(-60 * this.lerp * e))) * i + o * s), Math.round(this.value) === this.to && (this.value = this.to, n = !0);
		else {
			this.currentTime += e;
			const a = Jl(0, this.currentTime / this.duration, 1);
			n = a >= 1;
			const l = n ? 1 : this.easing(a);
			this.value = this.from + (this.to - this.from) * l
		}
		var i, s, o;
		(t = this.onUpdate) == null || t.call(this, this.value, n), n && this.stop()
	}
	stop() {
		this.isRunning = !1
	}
	fromTo(e, t, {
		lerp: n = .1,
		duration: i = 1,
		easing: s = l => l,
		onStart: o,
		onUpdate: a
	}) {
		this.from = this.value = e, this.to = t, this.lerp = n, this.duration = i, this.easing = s, this.currentTime = 0, this.isRunning = !0, o == null || o(), this.onUpdate = a
	}
}
class vy {
	constructor({
		wrapper: e,
		content: t,
		autoResize: n = !0
	} = {}) {
		if (this.resize = () => {
				this.onWrapperResize(), this.onContentResize()
			}, this.onWrapperResize = () => {
				this.wrapper === window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
			}, this.onContentResize = () => {
				this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth
			}, this.wrapper = e, this.content = t, n) {
			const i = function(s, o) {
				let a;
				return function() {
					let l = arguments,
						c = this;
					clearTimeout(a), a = setTimeout(function() {
						s.apply(c, l)
					}, 250)
				}
			}(this.resize);
			this.wrapper !== window && (this.wrapperResizeObserver = new ResizeObserver(i), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(i), this.contentResizeObserver.observe(this.content)
		}
		this.resize()
	}
	destroy() {
		var e, t;
		(e = this.wrapperResizeObserver) == null || e.disconnect(), (t = this.contentResizeObserver) == null || t.disconnect()
	}
	get limit() {
		return {
			x: this.scrollWidth - this.width,
			y: this.scrollHeight - this.height
		}
	}
}
class H_ {
	constructor() {
		this.events = {}
	}
	emit(e, ...t) {
		let n = this.events[e] || [];
		for (let i = 0, s = n.length; i < s; i++) n[i](...t)
	}
	on(e, t) {
		var n;
		return (n = this.events[e]) != null && n.push(t) || (this.events[e] = [t]), () => {
			var i;
			this.events[e] = (i = this.events[e]) == null ? void 0 : i.filter(s => t !== s)
		}
	}
	off(e, t) {
		var n;
		this.events[e] = (n = this.events[e]) == null ? void 0 : n.filter(i => t !== i)
	}
	destroy() {
		this.events = {}
	}
}
class xy {
	constructor(e, {
		wheelMultiplier: t = 1,
		touchMultiplier: n = 2,
		normalizeWheel: i = !1
	}) {
		this.onTouchStart = s => {
			const {
				clientX: o,
				clientY: a
			} = s.targetTouches ? s.targetTouches[0] : s;
			this.touchStart.x = o, this.touchStart.y = a, this.lastDelta = {
				x: 0,
				y: 0
			}
		}, this.onTouchMove = s => {
			const {
				clientX: o,
				clientY: a
			} = s.targetTouches ? s.targetTouches[0] : s, l = -(o - this.touchStart.x) * this.touchMultiplier, c = -(a - this.touchStart.y) * this.touchMultiplier;
			this.touchStart.x = o, this.touchStart.y = a, this.lastDelta = {
				x: l,
				y: c
			}, this.emitter.emit("scroll", {
				deltaX: l,
				deltaY: c,
				event: s
			})
		}, this.onTouchEnd = s => {
			this.emitter.emit("scroll", {
				deltaX: this.lastDelta.x,
				deltaY: this.lastDelta.y,
				event: s
			})
		}, this.onWheel = s => {
			let {
				deltaX: o,
				deltaY: a
			} = s;
			this.normalizeWheel && (o = Jl(-100, o, 100), a = Jl(-100, a, 100)), o *= this.wheelMultiplier, a *= this.wheelMultiplier, this.emitter.emit("scroll", {
				deltaX: o,
				deltaY: a,
				event: s
			})
		}, this.element = e, this.wheelMultiplier = t, this.touchMultiplier = n, this.normalizeWheel = i, this.touchStart = {
			x: null,
			y: null
		}, this.emitter = new H_, this.element.addEventListener("wheel", this.onWheel, {
			passive: !1
		}), this.element.addEventListener("touchstart", this.onTouchStart, {
			passive: !1
		}), this.element.addEventListener("touchmove", this.onTouchMove, {
			passive: !1
		}), this.element.addEventListener("touchend", this.onTouchEnd, {
			passive: !1
		})
	}
	on(e, t) {
		return this.emitter.on(e, t)
	}
	destroy() {
		this.emitter.destroy(), this.element.removeEventListener("wheel", this.onWheel, {
			passive: !1
		}), this.element.removeEventListener("touchstart", this.onTouchStart, {
			passive: !1
		}), this.element.removeEventListener("touchmove", this.onTouchMove, {
			passive: !1
		}), this.element.removeEventListener("touchend", this.onTouchEnd, {
			passive: !1
		})
	}
}
class yy {
	constructor({
		wrapper: e = window,
		content: t = document.documentElement,
		wheelEventsTarget: n = e,
		eventsTarget: i = n,
		smoothWheel: s = !0,
		smoothTouch: o = !1,
		syncTouch: a = !1,
		syncTouchLerp: l = .1,
		__iosNoInertiaSyncTouchLerp: c = .4,
		touchInertiaMultiplier: h = 35,
		duration: u,
		easing: f = y => Math.min(1, 1.001 - Math.pow(2, -10 * y)),
		lerp: d = !u && .1,
		infinite: p = !1,
		orientation: m = "vertical",
		gestureOrientation: v = "vertical",
		touchMultiplier: g = 1,
		wheelMultiplier: _ = 1,
		normalizeWheel: w = !1,
		autoResize: x = !0
	} = {}) {
		this.onVirtualScroll = ({
			deltaX: y,
			deltaY: b,
			event: S
		}) => {
			if (S.ctrlKey) return;
			const D = S.type.includes("touch"),
				O = S.type.includes("wheel");
			if (this.options.gestureOrientation === "both" && y === 0 && b === 0 || this.options.gestureOrientation === "vertical" && b === 0 || this.options.gestureOrientation === "horizontal" && y === 0 || D && this.options.gestureOrientation === "vertical" && this.scroll === 0 && !this.options.infinite && b <= 0) return;
			let z = S.composedPath();
			if (z = z.slice(0, z.indexOf(this.rootElement)), z.find(R => {
					var V;
					return (R.hasAttribute == null ? void 0 : R.hasAttribute("data-lenis-prevent")) || D && (R.hasAttribute == null ? void 0 : R.hasAttribute("data-lenis-prevent-touch")) || O && (R.hasAttribute == null ? void 0 : R.hasAttribute("data-lenis-prevent-wheel")) || ((V = R.classList) == null ? void 0 : V.contains("lenis"))
				})) return;
			if (this.isStopped || this.isLocked) return void S.preventDefault();
			if (this.isSmooth = (this.options.smoothTouch || this.options.syncTouch) && D || this.options.smoothWheel && O, !this.isSmooth) return this.isScrolling = !1, void this.animate.stop();
			S.preventDefault();
			let P = b;
			this.options.gestureOrientation === "both" ? P = Math.abs(b) > Math.abs(y) ? b : y : this.options.gestureOrientation === "horizontal" && (P = y);
			const M = D && this.options.syncTouch,
				E = D && S.type === "touchend" && Math.abs(P) > 1;
			E && (P = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + P, su({
				programmatic: !1
			}, M && {
				lerp: E ? this.syncTouchLerp : this.options.__iosNoInertiaSyncTouchLerp
			}))
		}, this.onNativeScroll = () => {
			if (!this.__preventNextScrollEvent && !this.isScrolling) {
				const y = this.animatedScroll;
				this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.direction = Math.sign(this.animatedScroll - y), this.emit()
			}
		}, window.lenisVersion = "1.0.29", e !== document.documentElement && e !== document.body || (e = window), this.options = {
			wrapper: e,
			content: t,
			wheelEventsTarget: n,
			eventsTarget: i,
			smoothWheel: s,
			smoothTouch: o,
			syncTouch: a,
			syncTouchLerp: l,
			__iosNoInertiaSyncTouchLerp: c,
			touchInertiaMultiplier: h,
			duration: u,
			easing: f,
			lerp: d,
			infinite: p,
			gestureOrientation: v,
			orientation: m,
			touchMultiplier: g,
			wheelMultiplier: _,
			normalizeWheel: w,
			autoResize: x
		}, this.animate = new _y, this.emitter = new H_, this.dimensions = new vy({
			wrapper: e,
			content: t,
			autoResize: x
		}), this.toggleClass("lenis", !0), this.velocity = 0, this.isLocked = !1, this.isStopped = !1, this.isSmooth = a || s || o, this.isScrolling = !1, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, {
			passive: !1
		}), this.virtualScroll = new xy(i, {
			touchMultiplier: g,
			wheelMultiplier: _,
			normalizeWheel: w
		}), this.virtualScroll.on("scroll", this.onVirtualScroll)
	}
	destroy() {
		this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, {
			passive: !1
		}), this.virtualScroll.destroy(), this.dimensions.destroy(), this.toggleClass("lenis", !1), this.toggleClass("lenis-smooth", !1), this.toggleClass("lenis-scrolling", !1), this.toggleClass("lenis-stopped", !1), this.toggleClass("lenis-locked", !1)
	}
	on(e, t) {
		return this.emitter.on(e, t)
	}
	off(e, t) {
		return this.emitter.off(e, t)
	}
	setScroll(e) {
		this.isHorizontal ? this.rootElement.scrollLeft = e : this.rootElement.scrollTop = e
	}
	resize() {
		this.dimensions.resize()
	}
	emit() {
		this.emitter.emit("scroll", this)
	}
	reset() {
		this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.animate.stop()
	}
	start() {
		this.isStopped = !1, this.reset()
	}
	stop() {
		this.isStopped = !0, this.animate.stop(), this.reset()
	}
	raf(e) {
		const t = e - (this.time || e);
		this.time = e, this.animate.advance(.001 * t)
	}
	scrollTo(e, {
		offset: t = 0,
		immediate: n = !1,
		lock: i = !1,
		duration: s = this.options.duration,
		easing: o = this.options.easing,
		lerp: a = !s && this.options.lerp,
		onComplete: l = null,
		force: c = !1,
		programmatic: h = !0
	} = {}) {
		if (!this.isStopped && !this.isLocked || c) {
			if (["top", "left", "start"].includes(e)) e = 0;
			else if (["bottom", "right", "end"].includes(e)) e = this.limit;
			else {
				var u;
				let f;
				if (typeof e == "string" ? f = document.querySelector(e) : (u = e) != null && u.nodeType && (f = e), f) {
					if (this.options.wrapper !== window) {
						const p = this.options.wrapper.getBoundingClientRect();
						t -= this.isHorizontal ? p.left : p.top
					}
					const d = f.getBoundingClientRect();
					e = (this.isHorizontal ? d.left : d.top) + this.animatedScroll
				}
			}
			if (typeof e == "number") {
				if (e += t, e = Math.round(e), this.options.infinite ? h && (this.targetScroll = this.animatedScroll = this.scroll) : e = Jl(0, e, this.limit), n) return this.animatedScroll = this.targetScroll = e, this.setScroll(this.scroll), this.reset(), void(l == null || l(this));
				if (!h) {
					if (e === this.targetScroll) return;
					this.targetScroll = e
				}
				this.animate.fromTo(this.animatedScroll, e, {
					duration: s,
					easing: o,
					lerp: a,
					onStart: () => {
						i && (this.isLocked = !0), this.isScrolling = !0
					},
					onUpdate: (f, d) => {
						this.isScrolling = !0, this.velocity = f - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = f, this.setScroll(this.scroll), h && (this.targetScroll = f), d || this.emit(), d && (this.reset(), this.emit(), l == null || l(this), this.__preventNextScrollEvent = !0, requestAnimationFrame(() => {
							delete this.__preventNextScrollEvent
						}))
					}
				})
			}
		}
	}
	get rootElement() {
		return this.options.wrapper === window ? document.documentElement : this.options.wrapper
	}
	get limit() {
		return this.dimensions.limit[this.isHorizontal ? "x" : "y"]
	}
	get isHorizontal() {
		return this.options.orientation === "horizontal"
	}
	get actualScroll() {
		return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
	}
	get scroll() {
		return this.options.infinite ? (this.animatedScroll % (e = this.limit) + e) % e : this.animatedScroll;
		var e
	}
	get progress() {
		return this.limit === 0 ? 1 : this.scroll / this.limit
	}
	get isSmooth() {
		return this.__isSmooth
	}
	set isSmooth(e) {
		this.__isSmooth !== e && (this.__isSmooth = e, this.toggleClass("lenis-smooth", e))
	}
	get isScrolling() {
		return this.__isScrolling
	}
	set isScrolling(e) {
		this.__isScrolling !== e && (this.__isScrolling = e, this.toggleClass("lenis-scrolling", e))
	}
	get isStopped() {
		return this.__isStopped
	}
	set isStopped(e) {
		this.__isStopped !== e && (this.__isStopped = e, this.toggleClass("lenis-stopped", e))
	}
	get isLocked() {
		return this.__isLocked
	}
	set isLocked(e) {
		this.__isLocked !== e && (this.__isLocked = e, this.toggleClass("lenis-locked", e))
	}
	get className() {
		let e = "lenis";
		return this.isStopped && (e += " lenis-stopped"), this.isLocked && (e += " lenis-locked"), this.isScrolling && (e += " lenis-scrolling"), this.isSmooth && (e += " lenis-smooth"), e
	}
	toggleClass(e, t) {
		this.rootElement.classList.toggle(e, t), this.emitter.emit("className change", this)
	}
}
const wy = r => ({
		x: r.clientX,
		y: r.clientY
	}),
	by = (r, e, t, n) => {
		var i = r - t,
			s = e - n;
		return Math.hypot(i, s)
	},
	G_ = (r, e, t) => (1 - t) * r + t * e;
let ou = {
	x: 0,
	y: 0
};
const My = (r, e = !1) => (window.addEventListener("mousemove", t => ou = wy(t)), new Sy(r, e));
class Sy {
	constructor(e, t = !1) {
		ne(this, "DOM");
		ne(this, "renderedStyles");
		ne(this, "hover");
		ne(this, "requestId");
		ne(this, "rect");
		ne(this, "distanceToTrigger");
		ne(this, "isFixed");
		ne(this, "onResize", () => {});
		this.DOM = {
			el: e
		}, this.isFixed = t, this.renderedStyles = {
			tx: {
				previous: 0,
				current: 0,
				amt: .1
			},
			ty: {
				previous: 0,
				current: 0,
				amt: .1
			}
		}, this.hover = !1, this.calculateSizePosition(), this.initEvents(), this.requestId = requestAnimationFrame(() => this.render())
	}
	calculateSizePosition() {
		this.rect = this.DOM.el.getBoundingClientRect();
		const e = 1;
		this.distanceToTrigger = this.rect.width * e
	}
	initEvents() {
		this.onResize = () => this.calculateSizePosition(), window.addEventListener("resize", this.onResize)
	}
	render() {
		if (!this.distanceToTrigger) return;
		this.requestId = void 0, this.rect = this.DOM.el.getBoundingClientRect();
		const e = ou.x + window.scrollX,
			t = ou.y + 0,
			n = this.rect.left + this.rect.width / 2,
			i = this.rect.top + this.rect.height / 2,
			s = by(e, t, n, i);
		let o = 0,
			a = 0;
		s < this.distanceToTrigger ? (this.hover || this.enter(), o = (e - n) * .3, a = (t - i) * .3) : this.hover && this.leave(), this.renderedStyles.tx.current = o, this.renderedStyles.ty.current = a;
		for (const l in this.renderedStyles) this.renderedStyles[l].previous = G_(this.renderedStyles[l].previous, this.renderedStyles[l].current, this.renderedStyles[l].amt);
		this.DOM.el.style.transform = `
        translate3d(
          ${this.renderedStyles.tx.previous}px,
          ${this.renderedStyles.ty.previous}px,
          0
        )
      `, requestAnimationFrame(() => this.render())
	}
	enter() {
		this.hover = !0
	}
	leave() {
		this.hover = !1
	}
}
/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const hf = "136",
	Ty = 0,
	vd = 1,
	Ey = 2,
	W_ = 1,
	Ay = 2,
	Bo = 3,
	da = 0,
	zt = 1,
	Kr = 2,
	q_ = 1,
	lr = 0,
	ea = 1,
	xd = 2,
	yd = 3,
	wd = 4,
	Cy = 5,
	Cs = 100,
	Ly = 101,
	Ry = 102,
	bd = 103,
	Md = 104,
	Py = 200,
	Dy = 201,
	Iy = 202,
	Fy = 203,
	X_ = 204,
	Y_ = 205,
	zy = 206,
	Oy = 207,
	Ny = 208,
	By = 209,
	ky = 210,
	Uy = 0,
	Vy = 1,
	Hy = 2,
	au = 3,
	Gy = 4,
	Wy = 5,
	qy = 6,
	Xy = 7,
	hc = 0,
	Yy = 1,
	jy = 2,
	cr = 0,
	$y = 1,
	Zy = 2,
	Jy = 3,
	Qy = 4,
	Ky = 5,
	j_ = 300,
	wa = 301,
	ba = 302,
	lu = 303,
	cu = 304,
	uc = 306,
	uf = 307,
	hu = 1e3,
	Vn = 1001,
	uu = 1002,
	Pt = 1003,
	Sd = 1004,
	Td = 1005,
	gn = 1006,
	ew = 1007,
	fc = 1008,
	Bi = 1009,
	tw = 1010,
	nw = 1011,
	pa = 1012,
	iw = 1013,
	Il = 1014,
	zi = 1015,
	Xr = 1016,
	rw = 1017,
	sw = 1018,
	ow = 1019,
	qs = 1020,
	aw = 1021,
	hr = 1022,
	Xt = 1023,
	lw = 1024,
	cw = 1025,
	Yr = 1026,
	to = 1027,
	hw = 1028,
	uw = 1029,
	fw = 1030,
	dw = 1031,
	pw = 1032,
	mw = 1033,
	Ed = 33776,
	Ad = 33777,
	Cd = 33778,
	Ld = 33779,
	Rd = 35840,
	Pd = 35841,
	Dd = 35842,
	Id = 35843,
	gw = 36196,
	Fd = 37492,
	zd = 37496,
	_w = 37808,
	vw = 37809,
	xw = 37810,
	yw = 37811,
	ww = 37812,
	bw = 37813,
	Mw = 37814,
	Sw = 37815,
	Tw = 37816,
	Ew = 37817,
	Aw = 37818,
	Cw = 37819,
	Lw = 37820,
	Rw = 37821,
	Pw = 36492,
	Dw = 37840,
	Iw = 37841,
	Fw = 37842,
	zw = 37843,
	Ow = 37844,
	Nw = 37845,
	Bw = 37846,
	kw = 37847,
	Uw = 37848,
	Vw = 37849,
	Hw = 37850,
	Gw = 37851,
	Ww = 37852,
	qw = 37853,
	Xw = 2200,
	Yw = 2201,
	jw = 2202,
	Ql = 2300,
	Kl = 2301,
	Wc = 2302,
	Os = 2400,
	Ns = 2401,
	ec = 2402,
	ff = 2500,
	$_ = 2501,
	$w = 0,
	li = 3e3,
	oo = 3001,
	Zw = 3200,
	Jw = 3201,
	ao = 0,
	Qw = 1,
	qc = 7680,
	Kw = 519,
	ma = 35044,
	tc = 35048,
	Od = "300 es";
class ns {
	addEventListener(e, t) {
		this._listeners === void 0 && (this._listeners = {});
		const n = this._listeners;
		n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t)
	}
	hasEventListener(e, t) {
		if (this._listeners === void 0) return !1;
		const n = this._listeners;
		return n[e] !== void 0 && n[e].indexOf(t) !== -1
	}
	removeEventListener(e, t) {
		if (this._listeners === void 0) return;
		const i = this._listeners[e];
		if (i !== void 0) {
			const s = i.indexOf(t);
			s !== -1 && i.splice(s, 1)
		}
	}
	dispatchEvent(e) {
		if (this._listeners === void 0) return;
		const n = this._listeners[e.type];
		if (n !== void 0) {
			e.target = this;
			const i = n.slice(0);
			for (let s = 0, o = i.length; s < o; s++) i[s].call(this, e);
			e.target = null
		}
	}
}
const $t = [];
for (let r = 0; r < 256; r++) $t[r] = (r < 16 ? "0" : "") + r.toString(16);
const Xc = Math.PI / 180,
	fu = 180 / Math.PI;

function yi() {
	const r = Math.random() * 4294967295 | 0,
		e = Math.random() * 4294967295 | 0,
		t = Math.random() * 4294967295 | 0,
		n = Math.random() * 4294967295 | 0;
	return ($t[r & 255] + $t[r >> 8 & 255] + $t[r >> 16 & 255] + $t[r >> 24 & 255] + "-" + $t[e & 255] + $t[e >> 8 & 255] + "-" + $t[e >> 16 & 15 | 64] + $t[e >> 24 & 255] + "-" + $t[t & 63 | 128] + $t[t >> 8 & 255] + "-" + $t[t >> 16 & 255] + $t[t >> 24 & 255] + $t[n & 255] + $t[n >> 8 & 255] + $t[n >> 16 & 255] + $t[n >> 24 & 255]).toUpperCase()
}

function Nn(r, e, t) {
	return Math.max(e, Math.min(t, r))
}

function e1(r, e) {
	return (r % e + e) % e
}

function Yc(r, e, t) {
	return (1 - t) * r + t * e
}

function Nd(r) {
	return (r & r - 1) === 0 && r !== 0
}

function t1(r) {
	return Math.pow(2, Math.floor(Math.log(r) / Math.LN2))
}
class fe {
	constructor(e = 0, t = 0) {
		this.x = e, this.y = t
	}
	get width() {
		return this.x
	}
	set width(e) {
		this.x = e
	}
	get height() {
		return this.y
	}
	set height(e) {
		this.y = e
	}
	set(e, t) {
		return this.x = e, this.y = t, this
	}
	setScalar(e) {
		return this.x = e, this.y = e, this
	}
	setX(e) {
		return this.x = e, this
	}
	setY(e) {
		return this.y = e, this
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			default:
				throw new Error("index is out of range: " + e)
		}
		return this
	}
	getComponent(e) {
		switch (e) {
			case 0:
				return this.x;
			case 1:
				return this.y;
			default:
				throw new Error("index is out of range: " + e)
		}
	}
	clone() {
		return new this.constructor(this.x, this.y)
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this
	}
	add(e, t) {
		return t !== void 0 ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this)
	}
	addScalar(e) {
		return this.x += e, this.y += e, this
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this
	}
	sub(e, t) {
		return t !== void 0 ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this)
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this
	}
	multiply(e) {
		return this.x *= e.x, this.y *= e.y, this
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e)
	}
	applyMatrix3(e) {
		const t = this.x,
			n = this.y,
			i = e.elements;
		return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this
	}
	clamp(e, t) {
		return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this
	}
	clampScalar(e, t) {
		return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this
	}
	clampLength(e, t) {
		const n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this
	}
	roundToZero() {
		return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this
	}
	dot(e) {
		return this.x * e.x + this.y * e.y
	}
	cross(e) {
		return this.x * e.y - this.y * e.x
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y)
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y)
	}
	normalize() {
		return this.divideScalar(this.length() || 1)
	}
	angle() {
		return Math.atan2(-this.y, -this.x) + Math.PI
	}
	distanceTo(e) {
		return Math.sqrt(this.distanceToSquared(e))
	}
	distanceToSquared(e) {
		const t = this.x - e.x,
			n = this.y - e.y;
		return t * t + n * n
	}
	manhattanDistanceTo(e) {
		return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e)
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this
	}
	equals(e) {
		return e.x === this.x && e.y === this.y
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e
	}
	fromBufferAttribute(e, t, n) {
		return n !== void 0 && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this
	}
	rotateAround(e, t) {
		const n = Math.cos(t),
			i = Math.sin(t),
			s = this.x - e.x,
			o = this.y - e.y;
		return this.x = s * n - o * i + e.x, this.y = s * i + o * n + e.y, this
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this
	}*[Symbol.iterator]() {
		yield this.x, yield this.y
	}
}
fe.prototype.isVector2 = !0;
class Jt {
	constructor() {
		this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
	}
	set(e, t, n, i, s, o, a, l, c) {
		const h = this.elements;
		return h[0] = e, h[1] = i, h[2] = a, h[3] = t, h[4] = s, h[5] = l, h[6] = n, h[7] = o, h[8] = c, this
	}
	identity() {
		return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
	}
	copy(e) {
		const t = this.elements,
			n = e.elements;
		return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this
	}
	extractBasis(e, t, n) {
		return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this
	}
	setFromMatrix4(e) {
		const t = e.elements;
		return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
	}
	multiply(e) {
		return this.multiplyMatrices(this, e)
	}
	premultiply(e) {
		return this.multiplyMatrices(e, this)
	}
	multiplyMatrices(e, t) {
		const n = e.elements,
			i = t.elements,
			s = this.elements,
			o = n[0],
			a = n[3],
			l = n[6],
			c = n[1],
			h = n[4],
			u = n[7],
			f = n[2],
			d = n[5],
			p = n[8],
			m = i[0],
			v = i[3],
			g = i[6],
			_ = i[1],
			w = i[4],
			x = i[7],
			y = i[2],
			b = i[5],
			S = i[8];
		return s[0] = o * m + a * _ + l * y, s[3] = o * v + a * w + l * b, s[6] = o * g + a * x + l * S, s[1] = c * m + h * _ + u * y, s[4] = c * v + h * w + u * b, s[7] = c * g + h * x + u * S, s[2] = f * m + d * _ + p * y, s[5] = f * v + d * w + p * b, s[8] = f * g + d * x + p * S, this
	}
	multiplyScalar(e) {
		const t = this.elements;
		return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this
	}
	determinant() {
		const e = this.elements,
			t = e[0],
			n = e[1],
			i = e[2],
			s = e[3],
			o = e[4],
			a = e[5],
			l = e[6],
			c = e[7],
			h = e[8];
		return t * o * h - t * a * c - n * s * h + n * a * l + i * s * c - i * o * l
	}
	invert() {
		const e = this.elements,
			t = e[0],
			n = e[1],
			i = e[2],
			s = e[3],
			o = e[4],
			a = e[5],
			l = e[6],
			c = e[7],
			h = e[8],
			u = h * o - a * c,
			f = a * l - h * s,
			d = c * s - o * l,
			p = t * u + n * f + i * d;
		if (p === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
		const m = 1 / p;
		return e[0] = u * m, e[1] = (i * c - h * n) * m, e[2] = (a * n - i * o) * m, e[3] = f * m, e[4] = (h * t - i * l) * m, e[5] = (i * s - a * t) * m, e[6] = d * m, e[7] = (n * l - c * t) * m, e[8] = (o * t - n * s) * m, this
	}
	transpose() {
		let e;
		const t = this.elements;
		return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this
	}
	getNormalMatrix(e) {
		return this.setFromMatrix4(e).invert().transpose()
	}
	transposeIntoArray(e) {
		const t = this.elements;
		return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this
	}
	setUvTransform(e, t, n, i, s, o, a) {
		const l = Math.cos(s),
			c = Math.sin(s);
		return this.set(n * l, n * c, -n * (l * o + c * a) + o + e, -i * c, i * l, -i * (-c * o + l * a) + a + t, 0, 0, 1), this
	}
	scale(e, t) {
		const n = this.elements;
		return n[0] *= e, n[3] *= e, n[6] *= e, n[1] *= t, n[4] *= t, n[7] *= t, this
	}
	rotate(e) {
		const t = Math.cos(e),
			n = Math.sin(e),
			i = this.elements,
			s = i[0],
			o = i[3],
			a = i[6],
			l = i[1],
			c = i[4],
			h = i[7];
		return i[0] = t * s + n * l, i[3] = t * o + n * c, i[6] = t * a + n * h, i[1] = -n * s + t * l, i[4] = -n * o + t * c, i[7] = -n * a + t * h, this
	}
	translate(e, t) {
		const n = this.elements;
		return n[0] += e * n[2], n[3] += e * n[5], n[6] += e * n[8], n[1] += t * n[2], n[4] += t * n[5], n[7] += t * n[8], this
	}
	equals(e) {
		const t = this.elements,
			n = e.elements;
		for (let i = 0; i < 9; i++)
			if (t[i] !== n[i]) return !1;
		return !0
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
		return this
	}
	toArray(e = [], t = 0) {
		const n = this.elements;
		return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e
	}
	clone() {
		return new this.constructor().fromArray(this.elements)
	}
}
Jt.prototype.isMatrix3 = !0;

function Z_(r) {
	if (r.length === 0) return -1 / 0;
	let e = r[0];
	for (let t = 1, n = r.length; t < n; ++t) r[t] > e && (e = r[t]);
	return e
}

function dc(r) {
	return document.createElementNS("http://www.w3.org/1999/xhtml", r)
}
let os;
class lo {
	static getDataURL(e) {
		if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
		let t;
		if (e instanceof HTMLCanvasElement) t = e;
		else {
			os === void 0 && (os = dc("canvas")), os.width = e.width, os.height = e.height;
			const n = os.getContext("2d");
			e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = os
		}
		return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", .6)) : t.toDataURL("image/png")
	}
}
let n1 = 0,
	sn = class du extends ns {
		constructor(e = du.DEFAULT_IMAGE, t = du.DEFAULT_MAPPING, n = Vn, i = Vn, s = gn, o = fc, a = Xt, l = Bi, c = 1, h = li) {
			super(), Object.defineProperty(this, "id", {
				value: n1++
			}), this.uuid = yi(), this.name = "", this.image = e, this.mipmaps = [], this.mapping = t, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new fe(0, 0), this.repeat = new fe(1, 1), this.center = new fe(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Jt, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1
		}
		updateMatrix() {
			this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
		}
		clone() {
			return new this.constructor().copy(this)
		}
		copy(e) {
			return this.name = e.name, this.image = e.image, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this.userData = JSON.parse(JSON.stringify(e.userData)), this
		}
		toJSON(e) {
			const t = e === void 0 || typeof e == "string";
			if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
			const n = {
				metadata: {
					version: 4.5,
					type: "Texture",
					generator: "Texture.toJSON"
				},
				uuid: this.uuid,
				name: this.name,
				mapping: this.mapping,
				repeat: [this.repeat.x, this.repeat.y],
				offset: [this.offset.x, this.offset.y],
				center: [this.center.x, this.center.y],
				rotation: this.rotation,
				wrap: [this.wrapS, this.wrapT],
				format: this.format,
				type: this.type,
				encoding: this.encoding,
				minFilter: this.minFilter,
				magFilter: this.magFilter,
				anisotropy: this.anisotropy,
				flipY: this.flipY,
				premultiplyAlpha: this.premultiplyAlpha,
				unpackAlignment: this.unpackAlignment
			};
			if (this.image !== void 0) {
				const i = this.image;
				if (i.uuid === void 0 && (i.uuid = yi()), !t && e.images[i.uuid] === void 0) {
					let s;
					if (Array.isArray(i)) {
						s = [];
						for (let o = 0, a = i.length; o < a; o++) i[o].isDataTexture ? s.push(jc(i[o].image)) : s.push(jc(i[o]))
					} else s = jc(i);
					e.images[i.uuid] = {
						uuid: i.uuid,
						url: s
					}
				}
				n.image = i.uuid
			}
			return JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n
		}
		dispose() {
			this.dispatchEvent({
				type: "dispose"
			})
		}
		transformUv(e) {
			if (this.mapping !== j_) return e;
			if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
				case hu:
					e.x = e.x - Math.floor(e.x);
					break;
				case Vn:
					e.x = e.x < 0 ? 0 : 1;
					break;
				case uu:
					Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
					break
			}
			if (e.y < 0 || e.y > 1) switch (this.wrapT) {
				case hu:
					e.y = e.y - Math.floor(e.y);
					break;
				case Vn:
					e.y = e.y < 0 ? 0 : 1;
					break;
				case uu:
					Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
					break
			}
			return this.flipY && (e.y = 1 - e.y), e
		}
		set needsUpdate(e) {
			e === !0 && this.version++
		}
	};
sn.DEFAULT_IMAGE = void 0;
sn.DEFAULT_MAPPING = j_;
sn.prototype.isTexture = !0;

function jc(r) {
	return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? lo.getDataURL(r) : r.data ? {
		data: Array.prototype.slice.call(r.data),
		width: r.width,
		height: r.height,
		type: r.data.constructor.name
	} : (console.warn("THREE.Texture: Unable to serialize Texture."), {})
}
class rt {
	constructor(e = 0, t = 0, n = 0, i = 1) {
		this.x = e, this.y = t, this.z = n, this.w = i
	}
	get width() {
		return this.z
	}
	set width(e) {
		this.z = e
	}
	get height() {
		return this.w
	}
	set height(e) {
		this.w = e
	}
	set(e, t, n, i) {
		return this.x = e, this.y = t, this.z = n, this.w = i, this
	}
	setScalar(e) {
		return this.x = e, this.y = e, this.z = e, this.w = e, this
	}
	setX(e) {
		return this.x = e, this
	}
	setY(e) {
		return this.y = e, this
	}
	setZ(e) {
		return this.z = e, this
	}
	setW(e) {
		return this.w = e, this
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			case 2:
				this.z = t;
				break;
			case 3:
				this.w = t;
				break;
			default:
				throw new Error("index is out of range: " + e)
		}
		return this
	}
	getComponent(e) {
		switch (e) {
			case 0:
				return this.x;
			case 1:
				return this.y;
			case 2:
				return this.z;
			case 3:
				return this.w;
			default:
				throw new Error("index is out of range: " + e)
		}
	}
	clone() {
		return new this.constructor(this.x, this.y, this.z, this.w)
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this
	}
	add(e, t) {
		return t !== void 0 ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this)
	}
	addScalar(e) {
		return this.x += e, this.y += e, this.z += e, this.w += e, this
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this
	}
	sub(e, t) {
		return t !== void 0 ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this)
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this
	}
	multiply(e) {
		return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this
	}
	applyMatrix4(e) {
		const t = this.x,
			n = this.y,
			i = this.z,
			s = this.w,
			o = e.elements;
		return this.x = o[0] * t + o[4] * n + o[8] * i + o[12] * s, this.y = o[1] * t + o[5] * n + o[9] * i + o[13] * s, this.z = o[2] * t + o[6] * n + o[10] * i + o[14] * s, this.w = o[3] * t + o[7] * n + o[11] * i + o[15] * s, this
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e)
	}
	setAxisAngleFromQuaternion(e) {
		this.w = 2 * Math.acos(e.w);
		const t = Math.sqrt(1 - e.w * e.w);
		return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this
	}
	setAxisAngleFromRotationMatrix(e) {
		let t, n, i, s;
		const l = e.elements,
			c = l[0],
			h = l[4],
			u = l[8],
			f = l[1],
			d = l[5],
			p = l[9],
			m = l[2],
			v = l[6],
			g = l[10];
		if (Math.abs(h - f) < .01 && Math.abs(u - m) < .01 && Math.abs(p - v) < .01) {
			if (Math.abs(h + f) < .1 && Math.abs(u + m) < .1 && Math.abs(p + v) < .1 && Math.abs(c + d + g - 3) < .1) return this.set(1, 0, 0, 0), this;
			t = Math.PI;
			const w = (c + 1) / 2,
				x = (d + 1) / 2,
				y = (g + 1) / 2,
				b = (h + f) / 4,
				S = (u + m) / 4,
				D = (p + v) / 4;
			return w > x && w > y ? w < .01 ? (n = 0, i = .707106781, s = .707106781) : (n = Math.sqrt(w), i = b / n, s = S / n) : x > y ? x < .01 ? (n = .707106781, i = 0, s = .707106781) : (i = Math.sqrt(x), n = b / i, s = D / i) : y < .01 ? (n = .707106781, i = .707106781, s = 0) : (s = Math.sqrt(y), n = S / s, i = D / s), this.set(n, i, s, t), this
		}
		let _ = Math.sqrt((v - p) * (v - p) + (u - m) * (u - m) + (f - h) * (f - h));
		return Math.abs(_) < .001 && (_ = 1), this.x = (v - p) / _, this.y = (u - m) / _, this.z = (f - h) / _, this.w = Math.acos((c + d + g - 1) / 2), this
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this
	}
	clamp(e, t) {
		return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this
	}
	clampScalar(e, t) {
		return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this
	}
	clampLength(e, t) {
		const n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
	}
	roundToZero() {
		return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
	}
	dot(e) {
		return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
	}
	normalize() {
		return this.divideScalar(this.length() || 1)
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e)
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this
	}
	equals(e) {
		return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e
	}
	fromBufferAttribute(e, t, n) {
		return n !== void 0 && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this
	}*[Symbol.iterator]() {
		yield this.x, yield this.y, yield this.z, yield this.w
	}
}
rt.prototype.isVector4 = !0;
class Kn extends ns {
	constructor(e, t, n = {}) {
		super(), this.width = e, this.height = t, this.depth = 1, this.scissor = new rt(0, 0, e, t), this.scissorTest = !1, this.viewport = new rt(0, 0, e, t), this.texture = new sn(void 0, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.image = {
			width: e,
			height: t,
			depth: 1
		}, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : gn, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null
	}
	setTexture(e) {
		e.image = {
			width: this.width,
			height: this.height,
			depth: this.depth
		}, this.texture = e
	}
	setSize(e, t, n = 1) {
		(this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t)
	}
	clone() {
		return new this.constructor().copy(this)
	}
	copy(e) {
		return this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.image = {
			...this.texture.image
		}, this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.depthTexture = e.depthTexture, this
	}
	dispose() {
		this.dispatchEvent({
			type: "dispose"
		})
	}
}
Kn.prototype.isWebGLRenderTarget = !0;
class i1 extends Kn {
	constructor(e, t, n) {
		super(e, t);
		const i = this.texture;
		this.texture = [];
		for (let s = 0; s < n; s++) this.texture[s] = i.clone()
	}
	setSize(e, t, n = 1) {
		if (this.width !== e || this.height !== t || this.depth !== n) {
			this.width = e, this.height = t, this.depth = n;
			for (let i = 0, s = this.texture.length; i < s; i++) this.texture[i].image.width = e, this.texture[i].image.height = t, this.texture[i].image.depth = n;
			this.dispose()
		}
		return this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t), this
	}
	copy(e) {
		this.dispose(), this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.set(0, 0, this.width, this.height), this.scissor.set(0, 0, this.width, this.height), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.depthTexture = e.depthTexture, this.texture.length = 0;
		for (let t = 0, n = e.texture.length; t < n; t++) this.texture[t] = e.texture[t].clone();
		return this
	}
}
i1.prototype.isWebGLMultipleRenderTargets = !0;
class df extends Kn {
	constructor(e, t, n = {}) {
		super(e, t, n), this.samples = 4, this.ignoreDepthForMultisampleCopy = n.ignoreDepth !== void 0 ? n.ignoreDepth : !0, this.useRenderToTexture = n.useRenderToTexture !== void 0 ? n.useRenderToTexture : !1, this.useRenderbuffer = this.useRenderToTexture === !1
	}
	copy(e) {
		return super.copy.call(this, e), this.samples = e.samples, this.useRenderToTexture = e.useRenderToTexture, this.useRenderbuffer = e.useRenderbuffer, this
	}
}
df.prototype.isWebGLMultisampleRenderTarget = !0;
class Ln {
	constructor(e = 0, t = 0, n = 0, i = 1) {
		this._x = e, this._y = t, this._z = n, this._w = i
	}
	static slerp(e, t, n, i) {
		return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."), n.slerpQuaternions(e, t, i)
	}
	static slerpFlat(e, t, n, i, s, o, a) {
		let l = n[i + 0],
			c = n[i + 1],
			h = n[i + 2],
			u = n[i + 3];
		const f = s[o + 0],
			d = s[o + 1],
			p = s[o + 2],
			m = s[o + 3];
		if (a === 0) {
			e[t + 0] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u;
			return
		}
		if (a === 1) {
			e[t + 0] = f, e[t + 1] = d, e[t + 2] = p, e[t + 3] = m;
			return
		}
		if (u !== m || l !== f || c !== d || h !== p) {
			let v = 1 - a;
			const g = l * f + c * d + h * p + u * m,
				_ = g >= 0 ? 1 : -1,
				w = 1 - g * g;
			if (w > Number.EPSILON) {
				const y = Math.sqrt(w),
					b = Math.atan2(y, g * _);
				v = Math.sin(v * b) / y, a = Math.sin(a * b) / y
			}
			const x = a * _;
			if (l = l * v + f * x, c = c * v + d * x, h = h * v + p * x, u = u * v + m * x, v === 1 - a) {
				const y = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
				l *= y, c *= y, h *= y, u *= y
			}
		}
		e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u
	}
	static multiplyQuaternionsFlat(e, t, n, i, s, o) {
		const a = n[i],
			l = n[i + 1],
			c = n[i + 2],
			h = n[i + 3],
			u = s[o],
			f = s[o + 1],
			d = s[o + 2],
			p = s[o + 3];
		return e[t] = a * p + h * u + l * d - c * f, e[t + 1] = l * p + h * f + c * u - a * d, e[t + 2] = c * p + h * d + a * f - l * u, e[t + 3] = h * p - a * u - l * f - c * d, e
	}
	get x() {
		return this._x
	}
	set x(e) {
		this._x = e, this._onChangeCallback()
	}
	get y() {
		return this._y
	}
	set y(e) {
		this._y = e, this._onChangeCallback()
	}
	get z() {
		return this._z
	}
	set z(e) {
		this._z = e, this._onChangeCallback()
	}
	get w() {
		return this._w
	}
	set w(e) {
		this._w = e, this._onChangeCallback()
	}
	set(e, t, n, i) {
		return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this
	}
	clone() {
		return new this.constructor(this._x, this._y, this._z, this._w)
	}
	copy(e) {
		return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this
	}
	setFromEuler(e, t) {
		if (!(e && e.isEuler)) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
		const n = e._x,
			i = e._y,
			s = e._z,
			o = e._order,
			a = Math.cos,
			l = Math.sin,
			c = a(n / 2),
			h = a(i / 2),
			u = a(s / 2),
			f = l(n / 2),
			d = l(i / 2),
			p = l(s / 2);
		switch (o) {
			case "XYZ":
				this._x = f * h * u + c * d * p, this._y = c * d * u - f * h * p, this._z = c * h * p + f * d * u, this._w = c * h * u - f * d * p;
				break;
			case "YXZ":
				this._x = f * h * u + c * d * p, this._y = c * d * u - f * h * p, this._z = c * h * p - f * d * u, this._w = c * h * u + f * d * p;
				break;
			case "ZXY":
				this._x = f * h * u - c * d * p, this._y = c * d * u + f * h * p, this._z = c * h * p + f * d * u, this._w = c * h * u - f * d * p;
				break;
			case "ZYX":
				this._x = f * h * u - c * d * p, this._y = c * d * u + f * h * p, this._z = c * h * p - f * d * u, this._w = c * h * u + f * d * p;
				break;
			case "YZX":
				this._x = f * h * u + c * d * p, this._y = c * d * u + f * h * p, this._z = c * h * p - f * d * u, this._w = c * h * u - f * d * p;
				break;
			case "XZY":
				this._x = f * h * u - c * d * p, this._y = c * d * u - f * h * p, this._z = c * h * p + f * d * u, this._w = c * h * u + f * d * p;
				break;
			default:
				console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o)
		}
		return t !== !1 && this._onChangeCallback(), this
	}
	setFromAxisAngle(e, t) {
		const n = t / 2,
			i = Math.sin(n);
		return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this
	}
	setFromRotationMatrix(e) {
		const t = e.elements,
			n = t[0],
			i = t[4],
			s = t[8],
			o = t[1],
			a = t[5],
			l = t[9],
			c = t[2],
			h = t[6],
			u = t[10],
			f = n + a + u;
		if (f > 0) {
			const d = .5 / Math.sqrt(f + 1);
			this._w = .25 / d, this._x = (h - l) * d, this._y = (s - c) * d, this._z = (o - i) * d
		} else if (n > a && n > u) {
			const d = 2 * Math.sqrt(1 + n - a - u);
			this._w = (h - l) / d, this._x = .25 * d, this._y = (i + o) / d, this._z = (s + c) / d
		} else if (a > u) {
			const d = 2 * Math.sqrt(1 + a - n - u);
			this._w = (s - c) / d, this._x = (i + o) / d, this._y = .25 * d, this._z = (l + h) / d
		} else {
			const d = 2 * Math.sqrt(1 + u - n - a);
			this._w = (o - i) / d, this._x = (s + c) / d, this._y = (l + h) / d, this._z = .25 * d
		}
		return this._onChangeCallback(), this
	}
	setFromUnitVectors(e, t) {
		let n = e.dot(t) + 1;
		return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize()
	}
	angleTo(e) {
		return 2 * Math.acos(Math.abs(Nn(this.dot(e), -1, 1)))
	}
	rotateTowards(e, t) {
		const n = this.angleTo(e);
		if (n === 0) return this;
		const i = Math.min(1, t / n);
		return this.slerp(e, i), this
	}
	identity() {
		return this.set(0, 0, 0, 1)
	}
	invert() {
		return this.conjugate()
	}
	conjugate() {
		return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this
	}
	dot(e) {
		return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
	}
	lengthSq() {
		return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
	}
	length() {
		return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
	}
	normalize() {
		let e = this.length();
		return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this
	}
	multiply(e, t) {
		return t !== void 0 ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e)
	}
	premultiply(e) {
		return this.multiplyQuaternions(e, this)
	}
	multiplyQuaternions(e, t) {
		const n = e._x,
			i = e._y,
			s = e._z,
			o = e._w,
			a = t._x,
			l = t._y,
			c = t._z,
			h = t._w;
		return this._x = n * h + o * a + i * c - s * l, this._y = i * h + o * l + s * a - n * c, this._z = s * h + o * c + n * l - i * a, this._w = o * h - n * a - i * l - s * c, this._onChangeCallback(), this
	}
	slerp(e, t) {
		if (t === 0) return this;
		if (t === 1) return this.copy(e);
		const n = this._x,
			i = this._y,
			s = this._z,
			o = this._w;
		let a = o * e._w + n * e._x + i * e._y + s * e._z;
		if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1) return this._w = o, this._x = n, this._y = i, this._z = s, this;
		const l = 1 - a * a;
		if (l <= Number.EPSILON) {
			const d = 1 - t;
			return this._w = d * o + t * this._w, this._x = d * n + t * this._x, this._y = d * i + t * this._y, this._z = d * s + t * this._z, this.normalize(), this._onChangeCallback(), this
		}
		const c = Math.sqrt(l),
			h = Math.atan2(c, a),
			u = Math.sin((1 - t) * h) / c,
			f = Math.sin(t * h) / c;
		return this._w = o * u + this._w * f, this._x = n * u + this._x * f, this._y = i * u + this._y * f, this._z = s * u + this._z * f, this._onChangeCallback(), this
	}
	slerpQuaternions(e, t, n) {
		this.copy(e).slerp(t, n)
	}
	random() {
		const e = Math.random(),
			t = Math.sqrt(1 - e),
			n = Math.sqrt(e),
			i = 2 * Math.PI * Math.random(),
			s = 2 * Math.PI * Math.random();
		return this.set(t * Math.cos(i), n * Math.sin(s), n * Math.cos(s), t * Math.sin(i))
	}
	equals(e) {
		return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
	}
	fromArray(e, t = 0) {
		return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this
	}
	toArray(e = [], t = 0) {
		return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e
	}
	fromBufferAttribute(e, t) {
		return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this
	}
	_onChange(e) {
		return this._onChangeCallback = e, this
	}
	_onChangeCallback() {}
}
Ln.prototype.isQuaternion = !0;
class I {
	constructor(e = 0, t = 0, n = 0) {
		this.x = e, this.y = t, this.z = n
	}
	set(e, t, n) {
		return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this
	}
	setScalar(e) {
		return this.x = e, this.y = e, this.z = e, this
	}
	setX(e) {
		return this.x = e, this
	}
	setY(e) {
		return this.y = e, this
	}
	setZ(e) {
		return this.z = e, this
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			case 2:
				this.z = t;
				break;
			default:
				throw new Error("index is out of range: " + e)
		}
		return this
	}
	getComponent(e) {
		switch (e) {
			case 0:
				return this.x;
			case 1:
				return this.y;
			case 2:
				return this.z;
			default:
				throw new Error("index is out of range: " + e)
		}
	}
	clone() {
		return new this.constructor(this.x, this.y, this.z)
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this.z = e.z, this
	}
	add(e, t) {
		return t !== void 0 ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this)
	}
	addScalar(e) {
		return this.x += e, this.y += e, this.z += e, this
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this
	}
	sub(e, t) {
		return t !== void 0 ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this)
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this.z -= e, this
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this
	}
	multiply(e, t) {
		return t !== void 0 ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this)
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this.z *= e, this
	}
	multiplyVectors(e, t) {
		return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this
	}
	applyEuler(e) {
		return e && e.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(Bd.setFromEuler(e))
	}
	applyAxisAngle(e, t) {
		return this.applyQuaternion(Bd.setFromAxisAngle(e, t))
	}
	applyMatrix3(e) {
		const t = this.x,
			n = this.y,
			i = this.z,
			s = e.elements;
		return this.x = s[0] * t + s[3] * n + s[6] * i, this.y = s[1] * t + s[4] * n + s[7] * i, this.z = s[2] * t + s[5] * n + s[8] * i, this
	}
	applyNormalMatrix(e) {
		return this.applyMatrix3(e).normalize()
	}
	applyMatrix4(e) {
		const t = this.x,
			n = this.y,
			i = this.z,
			s = e.elements,
			o = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
		return this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * o, this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * o, this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * o, this
	}
	applyQuaternion(e) {
		const t = this.x,
			n = this.y,
			i = this.z,
			s = e.x,
			o = e.y,
			a = e.z,
			l = e.w,
			c = l * t + o * i - a * n,
			h = l * n + a * t - s * i,
			u = l * i + s * n - o * t,
			f = -s * t - o * n - a * i;
		return this.x = c * l + f * -s + h * -a - u * -o, this.y = h * l + f * -o + u * -s - c * -a, this.z = u * l + f * -a + c * -o - h * -s, this
	}
	project(e) {
		return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)
	}
	unproject(e) {
		return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)
	}
	transformDirection(e) {
		const t = this.x,
			n = this.y,
			i = this.z,
			s = e.elements;
		return this.x = s[0] * t + s[4] * n + s[8] * i, this.y = s[1] * t + s[5] * n + s[9] * i, this.z = s[2] * t + s[6] * n + s[10] * i, this.normalize()
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this.z /= e.z, this
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e)
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this
	}
	clamp(e, t) {
		return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this
	}
	clampScalar(e, t) {
		return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this
	}
	clampLength(e, t) {
		const n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
	}
	roundToZero() {
		return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
	}
	dot(e) {
		return this.x * e.x + this.y * e.y + this.z * e.z
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y + this.z * this.z
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
	}
	normalize() {
		return this.divideScalar(this.length() || 1)
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e)
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this
	}
	cross(e, t) {
		return t !== void 0 ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t)) : this.crossVectors(this, e)
	}
	crossVectors(e, t) {
		const n = e.x,
			i = e.y,
			s = e.z,
			o = t.x,
			a = t.y,
			l = t.z;
		return this.x = i * l - s * a, this.y = s * o - n * l, this.z = n * a - i * o, this
	}
	projectOnVector(e) {
		const t = e.lengthSq();
		if (t === 0) return this.set(0, 0, 0);
		const n = e.dot(this) / t;
		return this.copy(e).multiplyScalar(n)
	}
	projectOnPlane(e) {
		return $c.copy(this).projectOnVector(e), this.sub($c)
	}
	reflect(e) {
		return this.sub($c.copy(e).multiplyScalar(2 * this.dot(e)))
	}
	angleTo(e) {
		const t = Math.sqrt(this.lengthSq() * e.lengthSq());
		if (t === 0) return Math.PI / 2;
		const n = this.dot(e) / t;
		return Math.acos(Nn(n, -1, 1))
	}
	distanceTo(e) {
		return Math.sqrt(this.distanceToSquared(e))
	}
	distanceToSquared(e) {
		const t = this.x - e.x,
			n = this.y - e.y,
			i = this.z - e.z;
		return t * t + n * n + i * i
	}
	manhattanDistanceTo(e) {
		return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
	}
	setFromSpherical(e) {
		return this.setFromSphericalCoords(e.radius, e.phi, e.theta)
	}
	setFromSphericalCoords(e, t, n) {
		const i = Math.sin(t) * e;
		return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this
	}
	setFromCylindrical(e) {
		return this.setFromCylindricalCoords(e.radius, e.theta, e.y)
	}
	setFromCylindricalCoords(e, t, n) {
		return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this
	}
	setFromMatrixPosition(e) {
		const t = e.elements;
		return this.x = t[12], this.y = t[13], this.z = t[14], this
	}
	setFromMatrixScale(e) {
		const t = this.setFromMatrixColumn(e, 0).length(),
			n = this.setFromMatrixColumn(e, 1).length(),
			i = this.setFromMatrixColumn(e, 2).length();
		return this.x = t, this.y = n, this.z = i, this
	}
	setFromMatrixColumn(e, t) {
		return this.fromArray(e.elements, t * 4)
	}
	setFromMatrix3Column(e, t) {
		return this.fromArray(e.elements, t * 3)
	}
	equals(e) {
		return e.x === this.x && e.y === this.y && e.z === this.z
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e
	}
	fromBufferAttribute(e, t, n) {
		return n !== void 0 && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this
	}
	randomDirection() {
		const e = (Math.random() - .5) * 2,
			t = Math.random() * Math.PI * 2,
			n = Math.sqrt(1 - e ** 2);
		return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this
	}*[Symbol.iterator]() {
		yield this.x, yield this.y, yield this.z
	}
}
I.prototype.isVector3 = !0;
const $c = new I,
	Bd = new Ln;
class ci {
	constructor(e = new I(1 / 0, 1 / 0, 1 / 0), t = new I(-1 / 0, -1 / 0, -1 / 0)) {
		this.min = e, this.max = t
	}
	set(e, t) {
		return this.min.copy(e), this.max.copy(t), this
	}
	setFromArray(e) {
		let t = 1 / 0,
			n = 1 / 0,
			i = 1 / 0,
			s = -1 / 0,
			o = -1 / 0,
			a = -1 / 0;
		for (let l = 0, c = e.length; l < c; l += 3) {
			const h = e[l],
				u = e[l + 1],
				f = e[l + 2];
			h < t && (t = h), u < n && (n = u), f < i && (i = f), h > s && (s = h), u > o && (o = u), f > a && (a = f)
		}
		return this.min.set(t, n, i), this.max.set(s, o, a), this
	}
	setFromBufferAttribute(e) {
		let t = 1 / 0,
			n = 1 / 0,
			i = 1 / 0,
			s = -1 / 0,
			o = -1 / 0,
			a = -1 / 0;
		for (let l = 0, c = e.count; l < c; l++) {
			const h = e.getX(l),
				u = e.getY(l),
				f = e.getZ(l);
			h < t && (t = h), u < n && (n = u), f < i && (i = f), h > s && (s = h), u > o && (o = u), f > a && (a = f)
		}
		return this.min.set(t, n, i), this.max.set(s, o, a), this
	}
	setFromPoints(e) {
		this.makeEmpty();
		for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
		return this
	}
	setFromCenterAndSize(e, t) {
		const n = wo.copy(t).multiplyScalar(.5);
		return this.min.copy(e).sub(n), this.max.copy(e).add(n), this
	}
	setFromObject(e) {
		return this.makeEmpty(), this.expandByObject(e)
	}
	clone() {
		return new this.constructor().copy(this)
	}
	copy(e) {
		return this.min.copy(e.min), this.max.copy(e.max), this
	}
	makeEmpty() {
		return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
	}
	isEmpty() {
		return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
	}
	getCenter(e) {
		return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
	}
	getSize(e) {
		return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
	}
	expandByPoint(e) {
		return this.min.min(e), this.max.max(e), this
	}
	expandByVector(e) {
		return this.min.sub(e), this.max.add(e), this
	}
	expandByScalar(e) {
		return this.min.addScalar(-e), this.max.addScalar(e), this
	}
	expandByObject(e) {
		e.updateWorldMatrix(!1, !1);
		const t = e.geometry;
		t !== void 0 && (t.boundingBox === null && t.computeBoundingBox(), Zc.copy(t.boundingBox), Zc.applyMatrix4(e.matrixWorld), this.union(Zc));
		const n = e.children;
		for (let i = 0, s = n.length; i < s; i++) this.expandByObject(n[i]);
		return this
	}
	containsPoint(e) {
		return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z)
	}
	containsBox(e) {
		return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
	}
	getParameter(e, t) {
		return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
	}
	intersectsBox(e) {
		return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z)
	}
	intersectsSphere(e) {
		return this.clampPoint(e.center, wo), wo.distanceToSquared(e.center) <= e.radius * e.radius
	}
	intersectsPlane(e) {
		let t, n;
		return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant
	}
	intersectsTriangle(e) {
		if (this.isEmpty()) return !1;
		this.getCenter(bo), Ga.subVectors(this.max, bo), as.subVectors(e.a, bo), ls.subVectors(e.b, bo), cs.subVectors(e.c, bo), Hi.subVectors(ls, as), Gi.subVectors(cs, ls), Tr.subVectors(as, cs);
		let t = [0, -Hi.z, Hi.y, 0, -Gi.z, Gi.y, 0, -Tr.z, Tr.y, Hi.z, 0, -Hi.x, Gi.z, 0, -Gi.x, Tr.z, 0, -Tr.x, -Hi.y, Hi.x, 0, -Gi.y, Gi.x, 0, -Tr.y, Tr.x, 0];
		return !Jc(t, as, ls, cs, Ga) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Jc(t, as, ls, cs, Ga)) ? !1 : (Wa.crossVectors(Hi, Gi), t = [Wa.x, Wa.y, Wa.z], Jc(t, as, ls, cs, Ga))
	}
	clampPoint(e, t) {
		return t.copy(e).clamp(this.min, this.max)
	}
	distanceToPoint(e) {
		return wo.copy(e).clamp(this.min, this.max).sub(e).length()
	}
	getBoundingSphere(e) {
		return this.getCenter(e.center), e.radius = this.getSize(wo).length() * .5, e
	}
	intersect(e) {
		return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this
	}
	union(e) {
		return this.min.min(e.min), this.max.max(e.max), this
	}
	applyMatrix4(e) {
		return this.isEmpty() ? this : (Si[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Si[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Si[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Si[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Si[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Si[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Si[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Si[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Si), this)
	}
	translate(e) {
		return this.min.add(e), this.max.add(e), this
	}
	equals(e) {
		return e.min.equals(this.min) && e.max.equals(this.max)
	}
}
ci.prototype.isBox3 = !0;
const Si = [new I, new I, new I, new I, new I, new I, new I, new I],
	wo = new I,
	Zc = new ci,
	as = new I,
	ls = new I,
	cs = new I,
	Hi = new I,
	Gi = new I,
	Tr = new I,
	bo = new I,
	Ga = new I,
	Wa = new I,
	Er = new I;

function Jc(r, e, t, n, i) {
	for (let s = 0, o = r.length - 3; s <= o; s += 3) {
		Er.fromArray(r, s);
		const a = i.x * Math.abs(Er.x) + i.y * Math.abs(Er.y) + i.z * Math.abs(Er.z),
			l = e.dot(Er),
			c = t.dot(Er),
			h = n.dot(Er);
		if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > a) return !1
	}
	return !0
}
const r1 = new ci,
	kd = new I,
	qa = new I,
	Qc = new I;
class co {
	constructor(e = new I, t = -1) {
		this.center = e, this.radius = t
	}
	set(e, t) {
		return this.center.copy(e), this.radius = t, this
	}
	setFromPoints(e, t) {
		const n = this.center;
		t !== void 0 ? n.copy(t) : r1.setFromPoints(e).getCenter(n);
		let i = 0;
		for (let s = 0, o = e.length; s < o; s++) i = Math.max(i, n.distanceToSquared(e[s]));
		return this.radius = Math.sqrt(i), this
	}
	copy(e) {
		return this.center.copy(e.center), this.radius = e.radius, this
	}
	isEmpty() {
		return this.radius < 0
	}
	makeEmpty() {
		return this.center.set(0, 0, 0), this.radius = -1, this
	}
	containsPoint(e) {
		return e.distanceToSquared(this.center) <= this.radius * this.radius
	}
	distanceToPoint(e) {
		return e.distanceTo(this.center) - this.radius
	}
	intersectsSphere(e) {
		const t = this.radius + e.radius;
		return e.center.distanceToSquared(this.center) <= t * t
	}
	intersectsBox(e) {
		return e.intersectsSphere(this)
	}
	intersectsPlane(e) {
		return Math.abs(e.distanceToPoint(this.center)) <= this.radius
	}
	clampPoint(e, t) {
		const n = this.center.distanceToSquared(e);
		return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t
	}
	getBoundingBox(e) {
		return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e)
	}
	applyMatrix4(e) {
		return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this
	}
	translate(e) {
		return this.center.add(e), this
	}
	expandByPoint(e) {
		Qc.subVectors(e, this.center);
		const t = Qc.lengthSq();
		if (t > this.radius * this.radius) {
			const n = Math.sqrt(t),
				i = (n - this.radius) * .5;
			this.center.add(Qc.multiplyScalar(i / n)), this.radius += i
		}
		return this
	}
	union(e) {
		return this.center.equals(e.center) === !0 ? qa.set(0, 0, 1).multiplyScalar(e.radius) : qa.subVectors(e.center, this.center).normalize().multiplyScalar(e.radius), this.expandByPoint(kd.copy(e.center).add(qa)), this.expandByPoint(kd.copy(e.center).sub(qa)), this
	}
	equals(e) {
		return e.center.equals(this.center) && e.radius === this.radius
	}
	clone() {
		return new this.constructor().copy(this)
	}
}
const Ti = new I,
	Kc = new I,
	Xa = new I,
	Wi = new I,
	eh = new I,
	Ya = new I,
	th = new I;
class ho {
	constructor(e = new I, t = new I(0, 0, -1)) {
		this.origin = e, this.direction = t
	}
	set(e, t) {
		return this.origin.copy(e), this.direction.copy(t), this
	}
	copy(e) {
		return this.origin.copy(e.origin), this.direction.copy(e.direction), this
	}
	at(e, t) {
		return t.copy(this.direction).multiplyScalar(e).add(this.origin)
	}
	lookAt(e) {
		return this.direction.copy(e).sub(this.origin).normalize(), this
	}
	recast(e) {
		return this.origin.copy(this.at(e, Ti)), this
	}
	closestPointToPoint(e, t) {
		t.subVectors(e, this.origin);
		const n = t.dot(this.direction);
		return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin)
	}
	distanceToPoint(e) {
		return Math.sqrt(this.distanceSqToPoint(e))
	}
	distanceSqToPoint(e) {
		const t = Ti.subVectors(e, this.origin).dot(this.direction);
		return t < 0 ? this.origin.distanceToSquared(e) : (Ti.copy(this.direction).multiplyScalar(t).add(this.origin), Ti.distanceToSquared(e))
	}
	distanceSqToSegment(e, t, n, i) {
		Kc.copy(e).add(t).multiplyScalar(.5), Xa.copy(t).sub(e).normalize(), Wi.copy(this.origin).sub(Kc);
		const s = e.distanceTo(t) * .5,
			o = -this.direction.dot(Xa),
			a = Wi.dot(this.direction),
			l = -Wi.dot(Xa),
			c = Wi.lengthSq(),
			h = Math.abs(1 - o * o);
		let u, f, d, p;
		if (h > 0)
			if (u = o * l - a, f = o * a - l, p = s * h, u >= 0)
				if (f >= -p)
					if (f <= p) {
						const m = 1 / h;
						u *= m, f *= m, d = u * (u + o * f + 2 * a) + f * (o * u + f + 2 * l) + c
					} else f = s, u = Math.max(0, -(o * f + a)), d = -u * u + f * (f + 2 * l) + c;
		else f = -s, u = Math.max(0, -(o * f + a)), d = -u * u + f * (f + 2 * l) + c;
		else f <= -p ? (u = Math.max(0, -(-o * s + a)), f = u > 0 ? -s : Math.min(Math.max(-s, -l), s), d = -u * u + f * (f + 2 * l) + c) : f <= p ? (u = 0, f = Math.min(Math.max(-s, -l), s), d = f * (f + 2 * l) + c) : (u = Math.max(0, -(o * s + a)), f = u > 0 ? s : Math.min(Math.max(-s, -l), s), d = -u * u + f * (f + 2 * l) + c);
		else f = o > 0 ? -s : s, u = Math.max(0, -(o * f + a)), d = -u * u + f * (f + 2 * l) + c;
		return n && n.copy(this.direction).multiplyScalar(u).add(this.origin), i && i.copy(Xa).multiplyScalar(f).add(Kc), d
	}
	intersectSphere(e, t) {
		Ti.subVectors(e.center, this.origin);
		const n = Ti.dot(this.direction),
			i = Ti.dot(Ti) - n * n,
			s = e.radius * e.radius;
		if (i > s) return null;
		const o = Math.sqrt(s - i),
			a = n - o,
			l = n + o;
		return a < 0 && l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t)
	}
	intersectsSphere(e) {
		return this.distanceSqToPoint(e.center) <= e.radius * e.radius
	}
	distanceToPlane(e) {
		const t = e.normal.dot(this.direction);
		if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
		const n = -(this.origin.dot(e.normal) + e.constant) / t;
		return n >= 0 ? n : null
	}
	intersectPlane(e, t) {
		const n = this.distanceToPlane(e);
		return n === null ? null : this.at(n, t)
	}
	intersectsPlane(e) {
		const t = e.distanceToPoint(this.origin);
		return t === 0 || e.normal.dot(this.direction) * t < 0
	}
	intersectBox(e, t) {
		let n, i, s, o, a, l;
		const c = 1 / this.direction.x,
			h = 1 / this.direction.y,
			u = 1 / this.direction.z,
			f = this.origin;
		return c >= 0 ? (n = (e.min.x - f.x) * c, i = (e.max.x - f.x) * c) : (n = (e.max.x - f.x) * c, i = (e.min.x - f.x) * c), h >= 0 ? (s = (e.min.y - f.y) * h, o = (e.max.y - f.y) * h) : (s = (e.max.y - f.y) * h, o = (e.min.y - f.y) * h), n > o || s > i || ((s > n || n !== n) && (n = s), (o < i || i !== i) && (i = o), u >= 0 ? (a = (e.min.z - f.z) * u, l = (e.max.z - f.z) * u) : (a = (e.max.z - f.z) * u, l = (e.min.z - f.z) * u), n > l || a > i) || ((a > n || n !== n) && (n = a), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t)
	}
	intersectsBox(e) {
		return this.intersectBox(e, Ti) !== null
	}
	intersectTriangle(e, t, n, i, s) {
		eh.subVectors(t, e), Ya.subVectors(n, e), th.crossVectors(eh, Ya);
		let o = this.direction.dot(th),
			a;
		if (o > 0) {
			if (i) return null;
			a = 1
		} else if (o < 0) a = -1, o = -o;
		else return null;
		Wi.subVectors(this.origin, e);
		const l = a * this.direction.dot(Ya.crossVectors(Wi, Ya));
		if (l < 0) return null;
		const c = a * this.direction.dot(eh.cross(Wi));
		if (c < 0 || l + c > o) return null;
		const h = -a * Wi.dot(th);
		return h < 0 ? null : this.at(h / o, s)
	}
	applyMatrix4(e) {
		return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
	}
	equals(e) {
		return e.origin.equals(this.origin) && e.direction.equals(this.direction)
	}
	clone() {
		return new this.constructor().copy(this)
	}
}
class Oe {
	constructor() {
		this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
	}
	set(e, t, n, i, s, o, a, l, c, h, u, f, d, p, m, v) {
		const g = this.elements;
		return g[0] = e, g[4] = t, g[8] = n, g[12] = i, g[1] = s, g[5] = o, g[9] = a, g[13] = l, g[2] = c, g[6] = h, g[10] = u, g[14] = f, g[3] = d, g[7] = p, g[11] = m, g[15] = v, this
	}
	identity() {
		return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
	}
	clone() {
		return new Oe().fromArray(this.elements)
	}
	copy(e) {
		const t = this.elements,
			n = e.elements;
		return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this
	}
	copyPosition(e) {
		const t = this.elements,
			n = e.elements;
		return t[12] = n[12], t[13] = n[13], t[14] = n[14], this
	}
	setFromMatrix3(e) {
		const t = e.elements;
		return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this
	}
	extractBasis(e, t, n) {
		return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this
	}
	makeBasis(e, t, n) {
		return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this
	}
	extractRotation(e) {
		const t = this.elements,
			n = e.elements,
			i = 1 / hs.setFromMatrixColumn(e, 0).length(),
			s = 1 / hs.setFromMatrixColumn(e, 1).length(),
			o = 1 / hs.setFromMatrixColumn(e, 2).length();
		return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
	}
	makeRotationFromEuler(e) {
		e && e.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
		const t = this.elements,
			n = e.x,
			i = e.y,
			s = e.z,
			o = Math.cos(n),
			a = Math.sin(n),
			l = Math.cos(i),
			c = Math.sin(i),
			h = Math.cos(s),
			u = Math.sin(s);
		if (e.order === "XYZ") {
			const f = o * h,
				d = o * u,
				p = a * h,
				m = a * u;
			t[0] = l * h, t[4] = -l * u, t[8] = c, t[1] = d + p * c, t[5] = f - m * c, t[9] = -a * l, t[2] = m - f * c, t[6] = p + d * c, t[10] = o * l
		} else if (e.order === "YXZ") {
			const f = l * h,
				d = l * u,
				p = c * h,
				m = c * u;
			t[0] = f + m * a, t[4] = p * a - d, t[8] = o * c, t[1] = o * u, t[5] = o * h, t[9] = -a, t[2] = d * a - p, t[6] = m + f * a, t[10] = o * l
		} else if (e.order === "ZXY") {
			const f = l * h,
				d = l * u,
				p = c * h,
				m = c * u;
			t[0] = f - m * a, t[4] = -o * u, t[8] = p + d * a, t[1] = d + p * a, t[5] = o * h, t[9] = m - f * a, t[2] = -o * c, t[6] = a, t[10] = o * l
		} else if (e.order === "ZYX") {
			const f = o * h,
				d = o * u,
				p = a * h,
				m = a * u;
			t[0] = l * h, t[4] = p * c - d, t[8] = f * c + m, t[1] = l * u, t[5] = m * c + f, t[9] = d * c - p, t[2] = -c, t[6] = a * l, t[10] = o * l
		} else if (e.order === "YZX") {
			const f = o * l,
				d = o * c,
				p = a * l,
				m = a * c;
			t[0] = l * h, t[4] = m - f * u, t[8] = p * u + d, t[1] = u, t[5] = o * h, t[9] = -a * h, t[2] = -c * h, t[6] = d * u + p, t[10] = f - m * u
		} else if (e.order === "XZY") {
			const f = o * l,
				d = o * c,
				p = a * l,
				m = a * c;
			t[0] = l * h, t[4] = -u, t[8] = c * h, t[1] = f * u + m, t[5] = o * h, t[9] = d * u - p, t[2] = p * u - d, t[6] = a * h, t[10] = m * u + f
		}
		return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
	}
	makeRotationFromQuaternion(e) {
		return this.compose(s1, e, o1)
	}
	lookAt(e, t, n) {
		const i = this.elements;
		return Dn.subVectors(e, t), Dn.lengthSq() === 0 && (Dn.z = 1), Dn.normalize(), qi.crossVectors(n, Dn), qi.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Dn.x += 1e-4 : Dn.z += 1e-4, Dn.normalize(), qi.crossVectors(n, Dn)), qi.normalize(), ja.crossVectors(Dn, qi), i[0] = qi.x, i[4] = ja.x, i[8] = Dn.x, i[1] = qi.y, i[5] = ja.y, i[9] = Dn.y, i[2] = qi.z, i[6] = ja.z, i[10] = Dn.z, this
	}
	multiply(e, t) {
		return t !== void 0 ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e)
	}
	premultiply(e) {
		return this.multiplyMatrices(e, this)
	}
	multiplyMatrices(e, t) {
		const n = e.elements,
			i = t.elements,
			s = this.elements,
			o = n[0],
			a = n[4],
			l = n[8],
			c = n[12],
			h = n[1],
			u = n[5],
			f = n[9],
			d = n[13],
			p = n[2],
			m = n[6],
			v = n[10],
			g = n[14],
			_ = n[3],
			w = n[7],
			x = n[11],
			y = n[15],
			b = i[0],
			S = i[4],
			D = i[8],
			O = i[12],
			z = i[1],
			P = i[5],
			M = i[9],
			E = i[13],
			R = i[2],
			V = i[6],
			N = i[10],
			k = i[14],
			J = i[3],
			se = i[7],
			A = i[11],
			Y = i[15];
		return s[0] = o * b + a * z + l * R + c * J, s[4] = o * S + a * P + l * V + c * se, s[8] = o * D + a * M + l * N + c * A, s[12] = o * O + a * E + l * k + c * Y, s[1] = h * b + u * z + f * R + d * J, s[5] = h * S + u * P + f * V + d * se, s[9] = h * D + u * M + f * N + d * A, s[13] = h * O + u * E + f * k + d * Y, s[2] = p * b + m * z + v * R + g * J, s[6] = p * S + m * P + v * V + g * se, s[10] = p * D + m * M + v * N + g * A, s[14] = p * O + m * E + v * k + g * Y, s[3] = _ * b + w * z + x * R + y * J, s[7] = _ * S + w * P + x * V + y * se, s[11] = _ * D + w * M + x * N + y * A, s[15] = _ * O + w * E + x * k + y * Y, this
	}
	multiplyScalar(e) {
		const t = this.elements;
		return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this
	}
	determinant() {
		const e = this.elements,
			t = e[0],
			n = e[4],
			i = e[8],
			s = e[12],
			o = e[1],
			a = e[5],
			l = e[9],
			c = e[13],
			h = e[2],
			u = e[6],
			f = e[10],
			d = e[14],
			p = e[3],
			m = e[7],
			v = e[11],
			g = e[15];
		return p * (+s * l * u - i * c * u - s * a * f + n * c * f + i * a * d - n * l * d) + m * (+t * l * d - t * c * f + s * o * f - i * o * d + i * c * h - s * l * h) + v * (+t * c * u - t * a * d - s * o * u + n * o * d + s * a * h - n * c * h) + g * (-i * a * h - t * l * u + t * a * f + i * o * u - n * o * f + n * l * h)
	}
	transpose() {
		const e = this.elements;
		let t;
		return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
	}
	setPosition(e, t, n) {
		const i = this.elements;
		return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this
	}
	invert() {
		const e = this.elements,
			t = e[0],
			n = e[1],
			i = e[2],
			s = e[3],
			o = e[4],
			a = e[5],
			l = e[6],
			c = e[7],
			h = e[8],
			u = e[9],
			f = e[10],
			d = e[11],
			p = e[12],
			m = e[13],
			v = e[14],
			g = e[15],
			_ = u * v * c - m * f * c + m * l * d - a * v * d - u * l * g + a * f * g,
			w = p * f * c - h * v * c - p * l * d + o * v * d + h * l * g - o * f * g,
			x = h * m * c - p * u * c + p * a * d - o * m * d - h * a * g + o * u * g,
			y = p * u * l - h * m * l - p * a * f + o * m * f + h * a * v - o * u * v,
			b = t * _ + n * w + i * x + s * y;
		if (b === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		const S = 1 / b;
		return e[0] = _ * S, e[1] = (m * f * s - u * v * s - m * i * d + n * v * d + u * i * g - n * f * g) * S, e[2] = (a * v * s - m * l * s + m * i * c - n * v * c - a * i * g + n * l * g) * S, e[3] = (u * l * s - a * f * s - u * i * c + n * f * c + a * i * d - n * l * d) * S, e[4] = w * S, e[5] = (h * v * s - p * f * s + p * i * d - t * v * d - h * i * g + t * f * g) * S, e[6] = (p * l * s - o * v * s - p * i * c + t * v * c + o * i * g - t * l * g) * S, e[7] = (o * f * s - h * l * s + h * i * c - t * f * c - o * i * d + t * l * d) * S, e[8] = x * S, e[9] = (p * u * s - h * m * s - p * n * d + t * m * d + h * n * g - t * u * g) * S, e[10] = (o * m * s - p * a * s + p * n * c - t * m * c - o * n * g + t * a * g) * S, e[11] = (h * a * s - o * u * s - h * n * c + t * u * c + o * n * d - t * a * d) * S, e[12] = y * S, e[13] = (h * m * i - p * u * i + p * n * f - t * m * f - h * n * v + t * u * v) * S, e[14] = (p * a * i - o * m * i - p * n * l + t * m * l + o * n * v - t * a * v) * S, e[15] = (o * u * i - h * a * i + h * n * l - t * u * l - o * n * f + t * a * f) * S, this
	}
	scale(e) {
		const t = this.elements,
			n = e.x,
			i = e.y,
			s = e.z;
		return t[0] *= n, t[4] *= i, t[8] *= s, t[1] *= n, t[5] *= i, t[9] *= s, t[2] *= n, t[6] *= i, t[10] *= s, t[3] *= n, t[7] *= i, t[11] *= s, this
	}
	getMaxScaleOnAxis() {
		const e = this.elements,
			t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
			n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
			i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
		return Math.sqrt(Math.max(t, n, i))
	}
	makeTranslation(e, t, n) {
		return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this
	}
	makeRotationX(e) {
		const t = Math.cos(e),
			n = Math.sin(e);
		return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this
	}
	makeRotationY(e) {
		const t = Math.cos(e),
			n = Math.sin(e);
		return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this
	}
	makeRotationZ(e) {
		const t = Math.cos(e),
			n = Math.sin(e);
		return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
	}
	makeRotationAxis(e, t) {
		const n = Math.cos(t),
			i = Math.sin(t),
			s = 1 - n,
			o = e.x,
			a = e.y,
			l = e.z,
			c = s * o,
			h = s * a;
		return this.set(c * o + n, c * a - i * l, c * l + i * a, 0, c * a + i * l, h * a + n, h * l - i * o, 0, c * l - i * a, h * l + i * o, s * l * l + n, 0, 0, 0, 0, 1), this
	}
	makeScale(e, t, n) {
		return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this
	}
	makeShear(e, t, n, i, s, o) {
		return this.set(1, n, s, 0, e, 1, o, 0, t, i, 1, 0, 0, 0, 0, 1), this
	}
	compose(e, t, n) {
		const i = this.elements,
			s = t._x,
			o = t._y,
			a = t._z,
			l = t._w,
			c = s + s,
			h = o + o,
			u = a + a,
			f = s * c,
			d = s * h,
			p = s * u,
			m = o * h,
			v = o * u,
			g = a * u,
			_ = l * c,
			w = l * h,
			x = l * u,
			y = n.x,
			b = n.y,
			S = n.z;
		return i[0] = (1 - (m + g)) * y, i[1] = (d + x) * y, i[2] = (p - w) * y, i[3] = 0, i[4] = (d - x) * b, i[5] = (1 - (f + g)) * b, i[6] = (v + _) * b, i[7] = 0, i[8] = (p + w) * S, i[9] = (v - _) * S, i[10] = (1 - (f + m)) * S, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this
	}
	decompose(e, t, n) {
		const i = this.elements;
		let s = hs.set(i[0], i[1], i[2]).length();
		const o = hs.set(i[4], i[5], i[6]).length(),
			a = hs.set(i[8], i[9], i[10]).length();
		this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], ii.copy(this);
		const c = 1 / s,
			h = 1 / o,
			u = 1 / a;
		return ii.elements[0] *= c, ii.elements[1] *= c, ii.elements[2] *= c, ii.elements[4] *= h, ii.elements[5] *= h, ii.elements[6] *= h, ii.elements[8] *= u, ii.elements[9] *= u, ii.elements[10] *= u, t.setFromRotationMatrix(ii), n.x = s, n.y = o, n.z = a, this
	}
	makePerspective(e, t, n, i, s, o) {
		o === void 0 && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
		const a = this.elements,
			l = 2 * s / (t - e),
			c = 2 * s / (n - i),
			h = (t + e) / (t - e),
			u = (n + i) / (n - i),
			f = -(o + s) / (o - s),
			d = -2 * o * s / (o - s);
		return a[0] = l, a[4] = 0, a[8] = h, a[12] = 0, a[1] = 0, a[5] = c, a[9] = u, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = f, a[14] = d, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this
	}
	makeOrthographic(e, t, n, i, s, o) {
		const a = this.elements,
			l = 1 / (t - e),
			c = 1 / (n - i),
			h = 1 / (o - s),
			u = (t + e) * l,
			f = (n + i) * c,
			d = (o + s) * h;
		return a[0] = 2 * l, a[4] = 0, a[8] = 0, a[12] = -u, a[1] = 0, a[5] = 2 * c, a[9] = 0, a[13] = -f, a[2] = 0, a[6] = 0, a[10] = -2 * h, a[14] = -d, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this
	}
	equals(e) {
		const t = this.elements,
			n = e.elements;
		for (let i = 0; i < 16; i++)
			if (t[i] !== n[i]) return !1;
		return !0
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
		return this
	}
	toArray(e = [], t = 0) {
		const n = this.elements;
		return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e
	}
}
Oe.prototype.isMatrix4 = !0;
const hs = new I,
	ii = new Oe,
	s1 = new I(0, 0, 0),
	o1 = new I(1, 1, 1),
	qi = new I,
	ja = new I,
	Dn = new I,
	Ud = new Oe,
	Vd = new Ln;
let pc = class J_ {
	constructor(e = 0, t = 0, n = 0, i = J_.DefaultOrder) {
		this._x = e, this._y = t, this._z = n, this._order = i
	}
	get x() {
		return this._x
	}
	set x(e) {
		this._x = e, this._onChangeCallback()
	}
	get y() {
		return this._y
	}
	set y(e) {
		this._y = e, this._onChangeCallback()
	}
	get z() {
		return this._z
	}
	set z(e) {
		this._z = e, this._onChangeCallback()
	}
	get order() {
		return this._order
	}
	set order(e) {
		this._order = e, this._onChangeCallback()
	}
	set(e, t, n, i = this._order) {
		return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this
	}
	clone() {
		return new this.constructor(this._x, this._y, this._z, this._order)
	}
	copy(e) {
		return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this
	}
	setFromRotationMatrix(e, t = this._order, n = !0) {
		const i = e.elements,
			s = i[0],
			o = i[4],
			a = i[8],
			l = i[1],
			c = i[5],
			h = i[9],
			u = i[2],
			f = i[6],
			d = i[10];
		switch (t) {
			case "XYZ":
				this._y = Math.asin(Nn(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-h, d), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(f, c), this._z = 0);
				break;
			case "YXZ":
				this._x = Math.asin(-Nn(h, -1, 1)), Math.abs(h) < .9999999 ? (this._y = Math.atan2(a, d), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, s), this._z = 0);
				break;
			case "ZXY":
				this._x = Math.asin(Nn(f, -1, 1)), Math.abs(f) < .9999999 ? (this._y = Math.atan2(-u, d), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, s));
				break;
			case "ZYX":
				this._y = Math.asin(-Nn(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(f, d), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-o, c));
				break;
			case "YZX":
				this._z = Math.asin(Nn(l, -1, 1)), Math.abs(l) < .9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(a, d));
				break;
			case "XZY":
				this._z = Math.asin(-Nn(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(f, c), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-h, d), this._y = 0);
				break;
			default:
				console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t)
		}
		return this._order = t, n === !0 && this._onChangeCallback(), this
	}
	setFromQuaternion(e, t, n) {
		return Ud.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ud, t, n)
	}
	setFromVector3(e, t = this._order) {
		return this.set(e.x, e.y, e.z, t)
	}
	reorder(e) {
		return Vd.setFromEuler(this), this.setFromQuaternion(Vd, e)
	}
	equals(e) {
		return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
	}
	fromArray(e) {
		return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this
	}
	toArray(e = [], t = 0) {
		return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e
	}
	toVector3(e) {
		return e ? e.set(this._x, this._y, this._z) : new I(this._x, this._y, this._z)
	}
	_onChange(e) {
		return this._onChangeCallback = e, this
	}
	_onChangeCallback() {}
};
pc.prototype.isEuler = !0;
pc.DefaultOrder = "XYZ";
pc.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class Q_ {
	constructor() {
		this.mask = 1
	}
	set(e) {
		this.mask = (1 << e | 0) >>> 0
	}
	enable(e) {
		this.mask |= 1 << e | 0
	}
	enableAll() {
		this.mask = -1
	}
	toggle(e) {
		this.mask ^= 1 << e | 0
	}
	disable(e) {
		this.mask &= ~(1 << e | 0)
	}
	disableAll() {
		this.mask = 0
	}
	test(e) {
		return (this.mask & e.mask) !== 0
	}
	isEnabled(e) {
		return (this.mask & (1 << e | 0)) !== 0
	}
}
let a1 = 0;
const Hd = new I,
	us = new Ln,
	Ei = new Oe,
	$a = new I,
	Mo = new I,
	l1 = new I,
	c1 = new Ln,
	Gd = new I(1, 0, 0),
	Wd = new I(0, 1, 0),
	qd = new I(0, 0, 1),
	h1 = {
		type: "added"
	},
	Xd = {
		type: "removed"
	};
class nt extends ns {
	constructor() {
		super(), Object.defineProperty(this, "id", {
			value: a1++
		}), this.uuid = yi(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = nt.DefaultUp.clone();
		const e = new I,
			t = new pc,
			n = new Ln,
			i = new I(1, 1, 1);

		function s() {
			n.setFromEuler(t, !1)
		}

		function o() {
			t.setFromQuaternion(n, void 0, !1)
		}
		t._onChange(s), n._onChange(o), Object.defineProperties(this, {
			position: {
				configurable: !0,
				enumerable: !0,
				value: e
			},
			rotation: {
				configurable: !0,
				enumerable: !0,
				value: t
			},
			quaternion: {
				configurable: !0,
				enumerable: !0,
				value: n
			},
			scale: {
				configurable: !0,
				enumerable: !0,
				value: i
			},
			modelViewMatrix: {
				value: new Oe
			},
			normalMatrix: {
				value: new Jt
			}
		}), this.matrix = new Oe, this.matrixWorld = new Oe, this.matrixAutoUpdate = nt.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new Q_, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {}
	}
	onBeforeRender() {}
	onAfterRender() {}
	applyMatrix4(e) {
		this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale)
	}
	applyQuaternion(e) {
		return this.quaternion.premultiply(e), this
	}
	setRotationFromAxisAngle(e, t) {
		this.quaternion.setFromAxisAngle(e, t)
	}
	setRotationFromEuler(e) {
		this.quaternion.setFromEuler(e, !0)
	}
	setRotationFromMatrix(e) {
		this.quaternion.setFromRotationMatrix(e)
	}
	setRotationFromQuaternion(e) {
		this.quaternion.copy(e)
	}
	rotateOnAxis(e, t) {
		return us.setFromAxisAngle(e, t), this.quaternion.multiply(us), this
	}
	rotateOnWorldAxis(e, t) {
		return us.setFromAxisAngle(e, t), this.quaternion.premultiply(us), this
	}
	rotateX(e) {
		return this.rotateOnAxis(Gd, e)
	}
	rotateY(e) {
		return this.rotateOnAxis(Wd, e)
	}
	rotateZ(e) {
		return this.rotateOnAxis(qd, e)
	}
	translateOnAxis(e, t) {
		return Hd.copy(e).applyQuaternion(this.quaternion), this.position.add(Hd.multiplyScalar(t)), this
	}
	translateX(e) {
		return this.translateOnAxis(Gd, e)
	}
	translateY(e) {
		return this.translateOnAxis(Wd, e)
	}
	translateZ(e) {
		return this.translateOnAxis(qd, e)
	}
	localToWorld(e) {
		return e.applyMatrix4(this.matrixWorld)
	}
	worldToLocal(e) {
		return e.applyMatrix4(Ei.copy(this.matrixWorld).invert())
	}
	lookAt(e, t, n) {
		e.isVector3 ? $a.copy(e) : $a.set(e, t, n);
		const i = this.parent;
		this.updateWorldMatrix(!0, !1), Mo.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Ei.lookAt(Mo, $a, this.up) : Ei.lookAt($a, Mo, this.up), this.quaternion.setFromRotationMatrix(Ei), i && (Ei.extractRotation(i.matrixWorld), us.setFromRotationMatrix(Ei), this.quaternion.premultiply(us.invert()))
	}
	add(e) {
		if (arguments.length > 1) {
			for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
			return this
		}
		return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(h1)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this)
	}
	remove(e) {
		if (arguments.length > 1) {
			for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
			return this
		}
		const t = this.children.indexOf(e);
		return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Xd)), this
	}
	removeFromParent() {
		const e = this.parent;
		return e !== null && e.remove(this), this
	}
	clear() {
		for (let e = 0; e < this.children.length; e++) {
			const t = this.children[e];
			t.parent = null, t.dispatchEvent(Xd)
		}
		return this.children.length = 0, this
	}
	attach(e) {
		return this.updateWorldMatrix(!0, !1), Ei.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Ei.multiply(e.parent.matrixWorld)), e.applyMatrix4(Ei), this.add(e), e.updateWorldMatrix(!1, !0), this
	}
	getObjectById(e) {
		return this.getObjectByProperty("id", e)
	}
	getObjectByName(e) {
		return this.getObjectByProperty("name", e)
	}
	getObjectByProperty(e, t) {
		if (this[e] === t) return this;
		for (let n = 0, i = this.children.length; n < i; n++) {
			const o = this.children[n].getObjectByProperty(e, t);
			if (o !== void 0) return o
		}
	}
	getWorldPosition(e) {
		return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
	}
	getWorldQuaternion(e) {
		return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Mo, e, l1), e
	}
	getWorldScale(e) {
		return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Mo, c1, e), e
	}
	getWorldDirection(e) {
		this.updateWorldMatrix(!0, !1);
		const t = this.matrixWorld.elements;
		return e.set(t[8], t[9], t[10]).normalize()
	}
	raycast() {}
	traverse(e) {
		e(this);
		const t = this.children;
		for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e)
	}
	traverseVisible(e) {
		if (this.visible === !1) return;
		e(this);
		const t = this.children;
		for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e)
	}
	traverseAncestors(e) {
		const t = this.parent;
		t !== null && (e(t), t.traverseAncestors(e))
	}
	updateMatrix() {
		this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
	}
	updateMatrixWorld(e) {
		this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
		const t = this.children;
		for (let n = 0, i = t.length; n < i; n++) t[n].updateMatrixWorld(e)
	}
	updateWorldMatrix(e, t) {
		const n = this.parent;
		if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
			const i = this.children;
			for (let s = 0, o = i.length; s < o; s++) i[s].updateWorldMatrix(!1, !0)
		}
	}
	toJSON(e) {
		const t = e === void 0 || typeof e == "string",
			n = {};
		t && (e = {
			geometries: {},
			materials: {},
			textures: {},
			images: {},
			shapes: {},
			skeletons: {},
			animations: {}
		}, n.metadata = {
			version: 4.5,
			type: "Object",
			generator: "Object3D.toJSON"
		});
		const i = {};
		i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), JSON.stringify(this.userData) !== "{}" && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON()));

		function s(a, l) {
			return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid
		}
		if (this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && (i.environment = this.environment.toJSON(e).uuid);
		else if (this.isMesh || this.isLine || this.isPoints) {
			i.geometry = s(e.geometries, this.geometry);
			const a = this.geometry.parameters;
			if (a !== void 0 && a.shapes !== void 0) {
				const l = a.shapes;
				if (Array.isArray(l))
					for (let c = 0, h = l.length; c < h; c++) {
						const u = l[c];
						s(e.shapes, u)
					} else s(e.shapes, l)
			}
		}
		if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
			if (Array.isArray(this.material)) {
				const a = [];
				for (let l = 0, c = this.material.length; l < c; l++) a.push(s(e.materials, this.material[l]));
				i.material = a
			} else i.material = s(e.materials, this.material);
		if (this.children.length > 0) {
			i.children = [];
			for (let a = 0; a < this.children.length; a++) i.children.push(this.children[a].toJSON(e).object)
		}
		if (this.animations.length > 0) {
			i.animations = [];
			for (let a = 0; a < this.animations.length; a++) {
				const l = this.animations[a];
				i.animations.push(s(e.animations, l))
			}
		}
		if (t) {
			const a = o(e.geometries),
				l = o(e.materials),
				c = o(e.textures),
				h = o(e.images),
				u = o(e.shapes),
				f = o(e.skeletons),
				d = o(e.animations);
			a.length > 0 && (n.geometries = a), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), f.length > 0 && (n.skeletons = f), d.length > 0 && (n.animations = d)
		}
		return n.object = i, n;

		function o(a) {
			const l = [];
			for (const c in a) {
				const h = a[c];
				delete h.metadata, l.push(h)
			}
			return l
		}
	}
	clone(e) {
		return new this.constructor().copy(this, e)
	}
	copy(e, t = !0) {
		if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
			for (let n = 0; n < e.children.length; n++) {
				const i = e.children[n];
				this.add(i.clone())
			}
		return this
	}
}
nt.DefaultUp = new I(0, 1, 0);
nt.DefaultMatrixAutoUpdate = !0;
nt.prototype.isObject3D = !0;
const ri = new I,
	Ai = new I,
	nh = new I,
	Ci = new I,
	fs = new I,
	ds = new I,
	Yd = new I,
	ih = new I,
	rh = new I,
	sh = new I;
class Nt {
	constructor(e = new I, t = new I, n = new I) {
		this.a = e, this.b = t, this.c = n
	}
	static getNormal(e, t, n, i) {
		i.subVectors(n, t), ri.subVectors(e, t), i.cross(ri);
		const s = i.lengthSq();
		return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0)
	}
	static getBarycoord(e, t, n, i, s) {
		ri.subVectors(i, t), Ai.subVectors(n, t), nh.subVectors(e, t);
		const o = ri.dot(ri),
			a = ri.dot(Ai),
			l = ri.dot(nh),
			c = Ai.dot(Ai),
			h = Ai.dot(nh),
			u = o * c - a * a;
		if (u === 0) return s.set(-2, -1, -1);
		const f = 1 / u,
			d = (c * l - a * h) * f,
			p = (o * h - a * l) * f;
		return s.set(1 - d - p, p, d)
	}
	static containsPoint(e, t, n, i) {
		return this.getBarycoord(e, t, n, i, Ci), Ci.x >= 0 && Ci.y >= 0 && Ci.x + Ci.y <= 1
	}
	static getUV(e, t, n, i, s, o, a, l) {
		return this.getBarycoord(e, t, n, i, Ci), l.set(0, 0), l.addScaledVector(s, Ci.x), l.addScaledVector(o, Ci.y), l.addScaledVector(a, Ci.z), l
	}
	static isFrontFacing(e, t, n, i) {
		return ri.subVectors(n, t), Ai.subVectors(e, t), ri.cross(Ai).dot(i) < 0
	}
	set(e, t, n) {
		return this.a.copy(e), this.b.copy(t), this.c.copy(n), this
	}
	setFromPointsAndIndices(e, t, n, i) {
		return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this
	}
	setFromAttributeAndIndices(e, t, n, i) {
		return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this
	}
	clone() {
		return new this.constructor().copy(this)
	}
	copy(e) {
		return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this
	}
	getArea() {
		return ri.subVectors(this.c, this.b), Ai.subVectors(this.a, this.b), ri.cross(Ai).length() * .5
	}
	getMidpoint(e) {
		return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
	}
	getNormal(e) {
		return Nt.getNormal(this.a, this.b, this.c, e)
	}
	getPlane(e) {
		return e.setFromCoplanarPoints(this.a, this.b, this.c)
	}
	getBarycoord(e, t) {
		return Nt.getBarycoord(e, this.a, this.b, this.c, t)
	}
	getUV(e, t, n, i, s) {
		return Nt.getUV(e, this.a, this.b, this.c, t, n, i, s)
	}
	containsPoint(e) {
		return Nt.containsPoint(e, this.a, this.b, this.c)
	}
	isFrontFacing(e) {
		return Nt.isFrontFacing(this.a, this.b, this.c, e)
	}
	intersectsBox(e) {
		return e.intersectsTriangle(this)
	}
	closestPointToPoint(e, t) {
		const n = this.a,
			i = this.b,
			s = this.c;
		let o, a;
		fs.subVectors(i, n), ds.subVectors(s, n), ih.subVectors(e, n);
		const l = fs.dot(ih),
			c = ds.dot(ih);
		if (l <= 0 && c <= 0) return t.copy(n);
		rh.subVectors(e, i);
		const h = fs.dot(rh),
			u = ds.dot(rh);
		if (h >= 0 && u <= h) return t.copy(i);
		const f = l * u - h * c;
		if (f <= 0 && l >= 0 && h <= 0) return o = l / (l - h), t.copy(n).addScaledVector(fs, o);
		sh.subVectors(e, s);
		const d = fs.dot(sh),
			p = ds.dot(sh);
		if (p >= 0 && d <= p) return t.copy(s);
		const m = d * c - l * p;
		if (m <= 0 && c >= 0 && p <= 0) return a = c / (c - p), t.copy(n).addScaledVector(ds, a);
		const v = h * p - d * u;
		if (v <= 0 && u - h >= 0 && d - p >= 0) return Yd.subVectors(s, i), a = (u - h) / (u - h + (d - p)), t.copy(i).addScaledVector(Yd, a);
		const g = 1 / (v + m + f);
		return o = m * g, a = f * g, t.copy(n).addScaledVector(fs, o).addScaledVector(ds, a)
	}
	equals(e) {
		return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
	}
}
let u1 = 0;
class on extends ns {
	constructor() {
		super(), Object.defineProperty(this, "id", {
			value: u1++
		}), this.uuid = yi(), this.name = "", this.type = "Material", this.fog = !0, this.blending = ea, this.side = da, this.vertexColors = !1, this.opacity = 1, this.format = Xt, this.transparent = !1, this.blendSrc = X_, this.blendDst = Y_, this.blendEquation = Cs, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = au, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Kw, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = qc, this.stencilZFail = qc, this.stencilZPass = qc, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0
	}
	get alphaTest() {
		return this._alphaTest
	}
	set alphaTest(e) {
		this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e
	}
	onBuild() {}
	onBeforeRender() {}
	onBeforeCompile() {}
	customProgramCacheKey() {
		return this.onBeforeCompile.toString()
	}
	setValues(e) {
		if (e !== void 0)
			for (const t in e) {
				const n = e[t];
				if (n === void 0) {
					console.warn("THREE.Material: '" + t + "' parameter is undefined.");
					continue
				}
				if (t === "shading") {
					console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = n === q_;
					continue
				}
				const i = this[t];
				if (i === void 0) {
					console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.");
					continue
				}
				i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n
			}
	}
	toJSON(e) {
		const t = e === void 0 || typeof e == "string";
		t && (e = {
			textures: {},
			images: {}
		});
		const n = {
			metadata: {
				version: 4.5,
				type: "Material",
				generator: "Material.toJSON"
			}
		};
		n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== ea && (n.blending = this.blending), this.side !== da && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.format !== Xt && (n.format = this.format), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = this.flatShading), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData);

		function i(s) {
			const o = [];
			for (const a in s) {
				const l = s[a];
				delete l.metadata, o.push(l)
			}
			return o
		}
		if (t) {
			const s = i(e.textures),
				o = i(e.images);
			s.length > 0 && (n.textures = s), o.length > 0 && (n.images = o)
		}
		return n
	}
	clone() {
		return new this.constructor().copy(this)
	}
	copy(e) {
		this.name = e.name, this.fog = e.fog, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.format = e.format, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
		const t = e.clippingPlanes;
		let n = null;
		if (t !== null) {
			const i = t.length;
			n = new Array(i);
			for (let s = 0; s !== i; ++s) n[s] = t[s].clone()
		}
		return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this
	}
	dispose() {
		this.dispatchEvent({
			type: "dispose"
		})
	}
	set needsUpdate(e) {
		e === !0 && this.version++
	}
}
on.prototype.isMaterial = !0;
const K_ = {
		aliceblue: 15792383,
		antiquewhite: 16444375,
		aqua: 65535,
		aquamarine: 8388564,
		azure: 15794175,
		beige: 16119260,
		bisque: 16770244,
		black: 0,
		blanchedalmond: 16772045,
		blue: 255,
		blueviolet: 9055202,
		brown: 10824234,
		burlywood: 14596231,
		cadetblue: 6266528,
		chartreuse: 8388352,
		chocolate: 13789470,
		coral: 16744272,
		cornflowerblue: 6591981,
		cornsilk: 16775388,
		crimson: 14423100,
		cyan: 65535,
		darkblue: 139,
		darkcyan: 35723,
		darkgoldenrod: 12092939,
		darkgray: 11119017,
		darkgreen: 25600,
		darkgrey: 11119017,
		darkkhaki: 12433259,
		darkmagenta: 9109643,
		darkolivegreen: 5597999,
		darkorange: 16747520,
		darkorchid: 10040012,
		darkred: 9109504,
		darksalmon: 15308410,
		darkseagreen: 9419919,
		darkslateblue: 4734347,
		darkslategray: 3100495,
		darkslategrey: 3100495,
		darkturquoise: 52945,
		darkviolet: 9699539,
		deeppink: 16716947,
		deepskyblue: 49151,
		dimgray: 6908265,
		dimgrey: 6908265,
		dodgerblue: 2003199,
		firebrick: 11674146,
		floralwhite: 16775920,
		forestgreen: 2263842,
		fuchsia: 16711935,
		gainsboro: 14474460,
		ghostwhite: 16316671,
		gold: 16766720,
		goldenrod: 14329120,
		gray: 8421504,
		green: 32768,
		greenyellow: 11403055,
		grey: 8421504,
		honeydew: 15794160,
		hotpink: 16738740,
		indianred: 13458524,
		indigo: 4915330,
		ivory: 16777200,
		khaki: 15787660,
		lavender: 15132410,
		lavenderblush: 16773365,
		lawngreen: 8190976,
		lemonchiffon: 16775885,
		lightblue: 11393254,
		lightcoral: 15761536,
		lightcyan: 14745599,
		lightgoldenrodyellow: 16448210,
		lightgray: 13882323,
		lightgreen: 9498256,
		lightgrey: 13882323,
		lightpink: 16758465,
		lightsalmon: 16752762,
		lightseagreen: 2142890,
		lightskyblue: 8900346,
		lightslategray: 7833753,
		lightslategrey: 7833753,
		lightsteelblue: 11584734,
		lightyellow: 16777184,
		lime: 65280,
		limegreen: 3329330,
		linen: 16445670,
		magenta: 16711935,
		maroon: 8388608,
		mediumaquamarine: 6737322,
		mediumblue: 205,
		mediumorchid: 12211667,
		mediumpurple: 9662683,
		mediumseagreen: 3978097,
		mediumslateblue: 8087790,
		mediumspringgreen: 64154,
		mediumturquoise: 4772300,
		mediumvioletred: 13047173,
		midnightblue: 1644912,
		mintcream: 16121850,
		mistyrose: 16770273,
		moccasin: 16770229,
		navajowhite: 16768685,
		navy: 128,
		oldlace: 16643558,
		olive: 8421376,
		olivedrab: 7048739,
		orange: 16753920,
		orangered: 16729344,
		orchid: 14315734,
		palegoldenrod: 15657130,
		palegreen: 10025880,
		paleturquoise: 11529966,
		palevioletred: 14381203,
		papayawhip: 16773077,
		peachpuff: 16767673,
		peru: 13468991,
		pink: 16761035,
		plum: 14524637,
		powderblue: 11591910,
		purple: 8388736,
		rebeccapurple: 6697881,
		red: 16711680,
		rosybrown: 12357519,
		royalblue: 4286945,
		saddlebrown: 9127187,
		salmon: 16416882,
		sandybrown: 16032864,
		seagreen: 3050327,
		seashell: 16774638,
		sienna: 10506797,
		silver: 12632256,
		skyblue: 8900331,
		slateblue: 6970061,
		slategray: 7372944,
		slategrey: 7372944,
		snow: 16775930,
		springgreen: 65407,
		steelblue: 4620980,
		tan: 13808780,
		teal: 32896,
		thistle: 14204888,
		tomato: 16737095,
		turquoise: 4251856,
		violet: 15631086,
		wheat: 16113331,
		white: 16777215,
		whitesmoke: 16119285,
		yellow: 16776960,
		yellowgreen: 10145074
	},
	si = {
		h: 0,
		s: 0,
		l: 0
	},
	Za = {
		h: 0,
		s: 0,
		l: 0
	};

function oh(r, e, t) {
	return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * 6 * (2 / 3 - t) : r
}

function ah(r) {
	return r < .04045 ? r * .0773993808 : Math.pow(r * .9478672986 + .0521327014, 2.4)
}

function lh(r) {
	return r < .0031308 ? r * 12.92 : 1.055 * Math.pow(r, .41666) - .055
}
class De {
	constructor(e, t, n) {
		return t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n)
	}
	set(e) {
		return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this
	}
	setScalar(e) {
		return this.r = e, this.g = e, this.b = e, this
	}
	setHex(e) {
		return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, this
	}
	setRGB(e, t, n) {
		return this.r = e, this.g = t, this.b = n, this
	}
	setHSL(e, t, n) {
		if (e = e1(e, 1), t = Nn(t, 0, 1), n = Nn(n, 0, 1), t === 0) this.r = this.g = this.b = n;
		else {
			const i = n <= .5 ? n * (1 + t) : n + t - n * t,
				s = 2 * n - i;
			this.r = oh(s, i, e + 1 / 3), this.g = oh(s, i, e), this.b = oh(s, i, e - 1 / 3)
		}
		return this
	}
	setStyle(e) {
		function t(i) {
			i !== void 0 && parseFloat(i) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
		}
		let n;
		if (n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) {
			let i;
			const s = n[1],
				o = n[2];
			switch (s) {
				case "rgb":
				case "rgba":
					if (i = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return this.r = Math.min(255, parseInt(i[1], 10)) / 255, this.g = Math.min(255, parseInt(i[2], 10)) / 255, this.b = Math.min(255, parseInt(i[3], 10)) / 255, t(i[4]), this;
					if (i = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return this.r = Math.min(100, parseInt(i[1], 10)) / 100, this.g = Math.min(100, parseInt(i[2], 10)) / 100, this.b = Math.min(100, parseInt(i[3], 10)) / 100, t(i[4]), this;
					break;
				case "hsl":
				case "hsla":
					if (i = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) {
						const a = parseFloat(i[1]) / 360,
							l = parseInt(i[2], 10) / 100,
							c = parseInt(i[3], 10) / 100;
						return t(i[4]), this.setHSL(a, l, c)
					}
					break
			}
		} else if (n = /^\#([A-Fa-f\d]+)$/.exec(e)) {
			const i = n[1],
				s = i.length;
			if (s === 3) return this.r = parseInt(i.charAt(0) + i.charAt(0), 16) / 255, this.g = parseInt(i.charAt(1) + i.charAt(1), 16) / 255, this.b = parseInt(i.charAt(2) + i.charAt(2), 16) / 255, this;
			if (s === 6) return this.r = parseInt(i.charAt(0) + i.charAt(1), 16) / 255, this.g = parseInt(i.charAt(2) + i.charAt(3), 16) / 255, this.b = parseInt(i.charAt(4) + i.charAt(5), 16) / 255, this
		}
		return e && e.length > 0 ? this.setColorName(e) : this
	}
	setColorName(e) {
		const t = K_[e.toLowerCase()];
		return t !== void 0 ? this.setHex(t) : console.warn("THREE.Color: Unknown color " + e), this
	}
	clone() {
		return new this.constructor(this.r, this.g, this.b)
	}
	copy(e) {
		return this.r = e.r, this.g = e.g, this.b = e.b, this
	}
	copySRGBToLinear(e) {
		return this.r = ah(e.r), this.g = ah(e.g), this.b = ah(e.b), this
	}
	copyLinearToSRGB(e) {
		return this.r = lh(e.r), this.g = lh(e.g), this.b = lh(e.b), this
	}
	convertSRGBToLinear() {
		return this.copySRGBToLinear(this), this
	}
	convertLinearToSRGB() {
		return this.copyLinearToSRGB(this), this
	}
	getHex() {
		return this.r * 255 << 16 ^ this.g * 255 << 8 ^ this.b * 255 << 0
	}
	getHexString() {
		return ("000000" + this.getHex().toString(16)).slice(-6)
	}
	getHSL(e) {
		const t = this.r,
			n = this.g,
			i = this.b,
			s = Math.max(t, n, i),
			o = Math.min(t, n, i);
		let a, l;
		const c = (o + s) / 2;
		if (o === s) a = 0, l = 0;
		else {
			const h = s - o;
			switch (l = c <= .5 ? h / (s + o) : h / (2 - s - o), s) {
				case t:
					a = (n - i) / h + (n < i ? 6 : 0);
					break;
				case n:
					a = (i - t) / h + 2;
					break;
				case i:
					a = (t - n) / h + 4;
					break
			}
			a /= 6
		}
		return e.h = a, e.s = l, e.l = c, e
	}
	getStyle() {
		return "rgb(" + (this.r * 255 | 0) + "," + (this.g * 255 | 0) + "," + (this.b * 255 | 0) + ")"
	}
	offsetHSL(e, t, n) {
		return this.getHSL(si), si.h += e, si.s += t, si.l += n, this.setHSL(si.h, si.s, si.l), this
	}
	add(e) {
		return this.r += e.r, this.g += e.g, this.b += e.b, this
	}
	addColors(e, t) {
		return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this
	}
	addScalar(e) {
		return this.r += e, this.g += e, this.b += e, this
	}
	sub(e) {
		return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this
	}
	multiply(e) {
		return this.r *= e.r, this.g *= e.g, this.b *= e.b, this
	}
	multiplyScalar(e) {
		return this.r *= e, this.g *= e, this.b *= e, this
	}
	lerp(e, t) {
		return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this
	}
	lerpColors(e, t, n) {
		return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this
	}
	lerpHSL(e, t) {
		this.getHSL(si), e.getHSL(Za);
		const n = Yc(si.h, Za.h, t),
			i = Yc(si.s, Za.s, t),
			s = Yc(si.l, Za.l, t);
		return this.setHSL(n, i, s), this
	}
	equals(e) {
		return e.r === this.r && e.g === this.g && e.b === this.b
	}
	fromArray(e, t = 0) {
		return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this
	}
	toArray(e = [], t = 0) {
		return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e
	}
	fromBufferAttribute(e, t) {
		return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), e.normalized === !0 && (this.r /= 255, this.g /= 255, this.b /= 255), this
	}
	toJSON() {
		return this.getHex()
	}
}
De.NAMES = K_;
De.prototype.isColor = !0;
De.prototype.r = 1;
De.prototype.g = 1;
De.prototype.b = 1;
class pf extends on {
	constructor(e) {
		super(), this.type = "MeshBasicMaterial", this.color = new De(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = hc, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(e)
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this
	}
}
pf.prototype.isMeshBasicMaterial = !0;
const lt = new I,
	Ja = new fe;
class Bt {
	constructor(e, t, n) {
		if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
		this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n === !0, this.usage = ma, this.updateRange = {
			offset: 0,
			count: -1
		}, this.version = 0
	}
	onUploadCallback() {}
	set needsUpdate(e) {
		e === !0 && this.version++
	}
	setUsage(e) {
		return this.usage = e, this
	}
	copy(e) {
		return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this
	}
	copyAt(e, t, n) {
		e *= this.itemSize, n *= t.itemSize;
		for (let i = 0, s = this.itemSize; i < s; i++) this.array[e + i] = t.array[n + i];
		return this
	}
	copyArray(e) {
		return this.array.set(e), this
	}
	copyColorsArray(e) {
		const t = this.array;
		let n = 0;
		for (let i = 0, s = e.length; i < s; i++) {
			let o = e[i];
			o === void 0 && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), o = new De), t[n++] = o.r, t[n++] = o.g, t[n++] = o.b
		}
		return this
	}
	copyVector2sArray(e) {
		const t = this.array;
		let n = 0;
		for (let i = 0, s = e.length; i < s; i++) {
			let o = e[i];
			o === void 0 && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), o = new fe), t[n++] = o.x, t[n++] = o.y
		}
		return this
	}
	copyVector3sArray(e) {
		const t = this.array;
		let n = 0;
		for (let i = 0, s = e.length; i < s; i++) {
			let o = e[i];
			o === void 0 && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), o = new I), t[n++] = o.x, t[n++] = o.y, t[n++] = o.z
		}
		return this
	}
	copyVector4sArray(e) {
		const t = this.array;
		let n = 0;
		for (let i = 0, s = e.length; i < s; i++) {
			let o = e[i];
			o === void 0 && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), o = new rt), t[n++] = o.x, t[n++] = o.y, t[n++] = o.z, t[n++] = o.w
		}
		return this
	}
	applyMatrix3(e) {
		if (this.itemSize === 2)
			for (let t = 0, n = this.count; t < n; t++) Ja.fromBufferAttribute(this, t), Ja.applyMatrix3(e), this.setXY(t, Ja.x, Ja.y);
		else if (this.itemSize === 3)
			for (let t = 0, n = this.count; t < n; t++) lt.fromBufferAttribute(this, t), lt.applyMatrix3(e), this.setXYZ(t, lt.x, lt.y, lt.z);
		return this
	}
	applyMatrix4(e) {
		for (let t = 0, n = this.count; t < n; t++) lt.x = this.getX(t), lt.y = this.getY(t), lt.z = this.getZ(t), lt.applyMatrix4(e), this.setXYZ(t, lt.x, lt.y, lt.z);
		return this
	}
	applyNormalMatrix(e) {
		for (let t = 0, n = this.count; t < n; t++) lt.x = this.getX(t), lt.y = this.getY(t), lt.z = this.getZ(t), lt.applyNormalMatrix(e), this.setXYZ(t, lt.x, lt.y, lt.z);
		return this
	}
	transformDirection(e) {
		for (let t = 0, n = this.count; t < n; t++) lt.x = this.getX(t), lt.y = this.getY(t), lt.z = this.getZ(t), lt.transformDirection(e), this.setXYZ(t, lt.x, lt.y, lt.z);
		return this
	}
	set(e, t = 0) {
		return this.array.set(e, t), this
	}
	getX(e) {
		return this.array[e * this.itemSize]
	}
	setX(e, t) {
		return this.array[e * this.itemSize] = t, this
	}
	getY(e) {
		return this.array[e * this.itemSize + 1]
	}
	setY(e, t) {
		return this.array[e * this.itemSize + 1] = t, this
	}
	getZ(e) {
		return this.array[e * this.itemSize + 2]
	}
	setZ(e, t) {
		return this.array[e * this.itemSize + 2] = t, this
	}
	getW(e) {
		return this.array[e * this.itemSize + 3]
	}
	setW(e, t) {
		return this.array[e * this.itemSize + 3] = t, this
	}
	setXY(e, t, n) {
		return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this
	}
	setXYZ(e, t, n, i) {
		return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this
	}
	setXYZW(e, t, n, i, s) {
		return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = s, this
	}
	onUpload(e) {
		return this.onUploadCallback = e, this
	}
	clone() {
		return new this.constructor(this.array, this.itemSize).copy(this)
	}
	toJSON() {
		const e = {
			itemSize: this.itemSize,
			type: this.array.constructor.name,
			array: Array.prototype.slice.call(this.array),
			normalized: this.normalized
		};
		return this.name !== "" && (e.name = this.name), this.usage !== ma && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e
	}
}
Bt.prototype.isBufferAttribute = !0;
class e0 extends Bt {
	constructor(e, t, n) {
		super(new Uint16Array(e), t, n)
	}
}
class t0 extends Bt {
	constructor(e, t, n) {
		super(new Uint32Array(e), t, n)
	}
}
class f1 extends Bt {
	constructor(e, t, n) {
		super(new Uint16Array(e), t, n)
	}
}
f1.prototype.isFloat16BufferAttribute = !0;
class Yt extends Bt {
	constructor(e, t, n) {
		super(new Float32Array(e), t, n)
	}
}
let d1 = 0;
const qn = new Oe,
	ch = new nt,
	ps = new I,
	In = new ci,
	So = new ci,
	Vt = new I;
class pt extends ns {
	constructor() {
		super(), Object.defineProperty(this, "id", {
			value: d1++
		}), this.uuid = yi(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
			start: 0,
			count: 1 / 0
		}, this.userData = {}
	}
	getIndex() {
		return this.index
	}
	setIndex(e) {
		return Array.isArray(e) ? this.index = new(Z_(e) > 65535 ? t0 : e0)(e, 1) : this.index = e, this
	}
	getAttribute(e) {
		return this.attributes[e]
	}
	setAttribute(e, t) {
		return this.attributes[e] = t, this
	}
	deleteAttribute(e) {
		return delete this.attributes[e], this
	}
	hasAttribute(e) {
		return this.attributes[e] !== void 0
	}
	addGroup(e, t, n = 0) {
		this.groups.push({
			start: e,
			count: t,
			materialIndex: n
		})
	}
	clearGroups() {
		this.groups = []
	}
	setDrawRange(e, t) {
		this.drawRange.start = e, this.drawRange.count = t
	}
	applyMatrix4(e) {
		const t = this.attributes.position;
		t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
		const n = this.attributes.normal;
		if (n !== void 0) {
			const s = new Jt().getNormalMatrix(e);
			n.applyNormalMatrix(s), n.needsUpdate = !0
		}
		const i = this.attributes.tangent;
		return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this
	}
	applyQuaternion(e) {
		return qn.makeRotationFromQuaternion(e), this.applyMatrix4(qn), this
	}
	rotateX(e) {
		return qn.makeRotationX(e), this.applyMatrix4(qn), this
	}
	rotateY(e) {
		return qn.makeRotationY(e), this.applyMatrix4(qn), this
	}
	rotateZ(e) {
		return qn.makeRotationZ(e), this.applyMatrix4(qn), this
	}
	translate(e, t, n) {
		return qn.makeTranslation(e, t, n), this.applyMatrix4(qn), this
	}
	scale(e, t, n) {
		return qn.makeScale(e, t, n), this.applyMatrix4(qn), this
	}
	lookAt(e) {
		return ch.lookAt(e), ch.updateMatrix(), this.applyMatrix4(ch.matrix), this
	}
	center() {
		return this.computeBoundingBox(), this.boundingBox.getCenter(ps).negate(), this.translate(ps.x, ps.y, ps.z), this
	}
	setFromPoints(e) {
		const t = [];
		for (let n = 0, i = e.length; n < i; n++) {
			const s = e[n];
			t.push(s.x, s.y, s.z || 0)
		}
		return this.setAttribute("position", new Yt(t, 3)), this
	}
	computeBoundingBox() {
		this.boundingBox === null && (this.boundingBox = new ci);
		const e = this.attributes.position,
			t = this.morphAttributes.position;
		if (e && e.isGLBufferAttribute) {
			console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(new I(-1 / 0, -1 / 0, -1 / 0), new I(1 / 0, 1 / 0, 1 / 0));
			return
		}
		if (e !== void 0) {
			if (this.boundingBox.setFromBufferAttribute(e), t)
				for (let n = 0, i = t.length; n < i; n++) {
					const s = t[n];
					In.setFromBufferAttribute(s), this.morphTargetsRelative ? (Vt.addVectors(this.boundingBox.min, In.min), this.boundingBox.expandByPoint(Vt), Vt.addVectors(this.boundingBox.max, In.max), this.boundingBox.expandByPoint(Vt)) : (this.boundingBox.expandByPoint(In.min), this.boundingBox.expandByPoint(In.max))
				}
		} else this.boundingBox.makeEmpty();
		(isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
	}
	computeBoundingSphere() {
		this.boundingSphere === null && (this.boundingSphere = new co);
		const e = this.attributes.position,
			t = this.morphAttributes.position;
		if (e && e.isGLBufferAttribute) {
			console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new I, 1 / 0);
			return
		}
		if (e) {
			const n = this.boundingSphere.center;
			if (In.setFromBufferAttribute(e), t)
				for (let s = 0, o = t.length; s < o; s++) {
					const a = t[s];
					So.setFromBufferAttribute(a), this.morphTargetsRelative ? (Vt.addVectors(In.min, So.min), In.expandByPoint(Vt), Vt.addVectors(In.max, So.max), In.expandByPoint(Vt)) : (In.expandByPoint(So.min), In.expandByPoint(So.max))
				}
			In.getCenter(n);
			let i = 0;
			for (let s = 0, o = e.count; s < o; s++) Vt.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(Vt));
			if (t)
				for (let s = 0, o = t.length; s < o; s++) {
					const a = t[s],
						l = this.morphTargetsRelative;
					for (let c = 0, h = a.count; c < h; c++) Vt.fromBufferAttribute(a, c), l && (ps.fromBufferAttribute(e, c), Vt.add(ps)), i = Math.max(i, n.distanceToSquared(Vt))
				}
			this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
		}
	}
	computeTangents() {
		const e = this.index,
			t = this.attributes;
		if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
			console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
			return
		}
		const n = e.array,
			i = t.position.array,
			s = t.normal.array,
			o = t.uv.array,
			a = i.length / 3;
		t.tangent === void 0 && this.setAttribute("tangent", new Bt(new Float32Array(4 * a), 4));
		const l = t.tangent.array,
			c = [],
			h = [];
		for (let z = 0; z < a; z++) c[z] = new I, h[z] = new I;
		const u = new I,
			f = new I,
			d = new I,
			p = new fe,
			m = new fe,
			v = new fe,
			g = new I,
			_ = new I;

		function w(z, P, M) {
			u.fromArray(i, z * 3), f.fromArray(i, P * 3), d.fromArray(i, M * 3), p.fromArray(o, z * 2), m.fromArray(o, P * 2), v.fromArray(o, M * 2), f.sub(u), d.sub(u), m.sub(p), v.sub(p);
			const E = 1 / (m.x * v.y - v.x * m.y);
			isFinite(E) && (g.copy(f).multiplyScalar(v.y).addScaledVector(d, -m.y).multiplyScalar(E), _.copy(d).multiplyScalar(m.x).addScaledVector(f, -v.x).multiplyScalar(E), c[z].add(g), c[P].add(g), c[M].add(g), h[z].add(_), h[P].add(_), h[M].add(_))
		}
		let x = this.groups;
		x.length === 0 && (x = [{
			start: 0,
			count: n.length
		}]);
		for (let z = 0, P = x.length; z < P; ++z) {
			const M = x[z],
				E = M.start,
				R = M.count;
			for (let V = E, N = E + R; V < N; V += 3) w(n[V + 0], n[V + 1], n[V + 2])
		}
		const y = new I,
			b = new I,
			S = new I,
			D = new I;

		function O(z) {
			S.fromArray(s, z * 3), D.copy(S);
			const P = c[z];
			y.copy(P), y.sub(S.multiplyScalar(S.dot(P))).normalize(), b.crossVectors(D, P);
			const E = b.dot(h[z]) < 0 ? -1 : 1;
			l[z * 4] = y.x, l[z * 4 + 1] = y.y, l[z * 4 + 2] = y.z, l[z * 4 + 3] = E
		}
		for (let z = 0, P = x.length; z < P; ++z) {
			const M = x[z],
				E = M.start,
				R = M.count;
			for (let V = E, N = E + R; V < N; V += 3) O(n[V + 0]), O(n[V + 1]), O(n[V + 2])
		}
	}
	computeVertexNormals() {
		const e = this.index,
			t = this.getAttribute("position");
		if (t !== void 0) {
			let n = this.getAttribute("normal");
			if (n === void 0) n = new Bt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
			else
				for (let f = 0, d = n.count; f < d; f++) n.setXYZ(f, 0, 0, 0);
			const i = new I,
				s = new I,
				o = new I,
				a = new I,
				l = new I,
				c = new I,
				h = new I,
				u = new I;
			if (e)
				for (let f = 0, d = e.count; f < d; f += 3) {
					const p = e.getX(f + 0),
						m = e.getX(f + 1),
						v = e.getX(f + 2);
					i.fromBufferAttribute(t, p), s.fromBufferAttribute(t, m), o.fromBufferAttribute(t, v), h.subVectors(o, s), u.subVectors(i, s), h.cross(u), a.fromBufferAttribute(n, p), l.fromBufferAttribute(n, m), c.fromBufferAttribute(n, v), a.add(h), l.add(h), c.add(h), n.setXYZ(p, a.x, a.y, a.z), n.setXYZ(m, l.x, l.y, l.z), n.setXYZ(v, c.x, c.y, c.z)
				} else
					for (let f = 0, d = t.count; f < d; f += 3) i.fromBufferAttribute(t, f + 0), s.fromBufferAttribute(t, f + 1), o.fromBufferAttribute(t, f + 2), h.subVectors(o, s), u.subVectors(i, s), h.cross(u), n.setXYZ(f + 0, h.x, h.y, h.z), n.setXYZ(f + 1, h.x, h.y, h.z), n.setXYZ(f + 2, h.x, h.y, h.z);
			this.normalizeNormals(), n.needsUpdate = !0
		}
	}
	merge(e, t) {
		if (!(e && e.isBufferGeometry)) {
			console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e);
			return
		}
		t === void 0 && (t = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
		const n = this.attributes;
		for (const i in n) {
			if (e.attributes[i] === void 0) continue;
			const o = n[i].array,
				a = e.attributes[i],
				l = a.array,
				c = a.itemSize * t,
				h = Math.min(l.length, o.length - c);
			for (let u = 0, f = c; u < h; u++, f++) o[f] = l[u]
		}
		return this
	}
	normalizeNormals() {
		const e = this.attributes.normal;
		for (let t = 0, n = e.count; t < n; t++) Vt.fromBufferAttribute(e, t), Vt.normalize(), e.setXYZ(t, Vt.x, Vt.y, Vt.z)
	}
	toNonIndexed() {
		function e(a, l) {
			const c = a.array,
				h = a.itemSize,
				u = a.normalized,
				f = new c.constructor(l.length * h);
			let d = 0,
				p = 0;
			for (let m = 0, v = l.length; m < v; m++) {
				a.isInterleavedBufferAttribute ? d = l[m] * a.data.stride + a.offset : d = l[m] * h;
				for (let g = 0; g < h; g++) f[p++] = c[d++]
			}
			return new Bt(f, h, u)
		}
		if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
		const t = new pt,
			n = this.index.array,
			i = this.attributes;
		for (const a in i) {
			const l = i[a],
				c = e(l, n);
			t.setAttribute(a, c)
		}
		const s = this.morphAttributes;
		for (const a in s) {
			const l = [],
				c = s[a];
			for (let h = 0, u = c.length; h < u; h++) {
				const f = c[h],
					d = e(f, n);
				l.push(d)
			}
			t.morphAttributes[a] = l
		}
		t.morphTargetsRelative = this.morphTargetsRelative;
		const o = this.groups;
		for (let a = 0, l = o.length; a < l; a++) {
			const c = o[a];
			t.addGroup(c.start, c.count, c.materialIndex)
		}
		return t
	}
	toJSON() {
		const e = {
			metadata: {
				version: 4.5,
				type: "BufferGeometry",
				generator: "BufferGeometry.toJSON"
			}
		};
		if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
			const l = this.parameters;
			for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
			return e
		}
		e.data = {
			attributes: {}
		};
		const t = this.index;
		t !== null && (e.data.index = {
			type: t.array.constructor.name,
			array: Array.prototype.slice.call(t.array)
		});
		const n = this.attributes;
		for (const l in n) {
			const c = n[l];
			e.data.attributes[l] = c.toJSON(e.data)
		}
		const i = {};
		let s = !1;
		for (const l in this.morphAttributes) {
			const c = this.morphAttributes[l],
				h = [];
			for (let u = 0, f = c.length; u < f; u++) {
				const d = c[u];
				h.push(d.toJSON(e.data))
			}
			h.length > 0 && (i[l] = h, s = !0)
		}
		s && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
		const o = this.groups;
		o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
		const a = this.boundingSphere;
		return a !== null && (e.data.boundingSphere = {
			center: a.center.toArray(),
			radius: a.radius
		}), e
	}
	clone() {
		return new this.constructor().copy(this)
	}
	copy(e) {
		this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
		const t = {};
		this.name = e.name;
		const n = e.index;
		n !== null && this.setIndex(n.clone(t));
		const i = e.attributes;
		for (const c in i) {
			const h = i[c];
			this.setAttribute(c, h.clone(t))
		}
		const s = e.morphAttributes;
		for (const c in s) {
			const h = [],
				u = s[c];
			for (let f = 0, d = u.length; f < d; f++) h.push(u[f].clone(t));
			this.morphAttributes[c] = h
		}
		this.morphTargetsRelative = e.morphTargetsRelative;
		const o = e.groups;
		for (let c = 0, h = o.length; c < h; c++) {
			const u = o[c];
			this.addGroup(u.start, u.count, u.materialIndex)
		}
		const a = e.boundingBox;
		a !== null && (this.boundingBox = a.clone());
		const l = e.boundingSphere;
		return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, e.parameters !== void 0 && (this.parameters = Object.assign({}, e.parameters)), this
	}
	dispose() {
		this.dispatchEvent({
			type: "dispose"
		})
	}
}
pt.prototype.isBufferGeometry = !0;
const jd = new Oe,
	ms = new ho,
	hh = new co,
	Xi = new I,
	Yi = new I,
	ji = new I,
	uh = new I,
	fh = new I,
	dh = new I,
	Qa = new I,
	Ka = new I,
	el = new I,
	tl = new fe,
	nl = new fe,
	il = new fe,
	ph = new I,
	rl = new I;
let vn = class extends nt {
	constructor(e = new pt, t = new pf) {
		super(), this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets()
	}
	copy(e) {
		return super.copy(e), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this
	}
	updateMorphTargets() {
		const e = this.geometry;
		if (e.isBufferGeometry) {
			const t = e.morphAttributes,
				n = Object.keys(t);
			if (n.length > 0) {
				const i = t[n[0]];
				if (i !== void 0) {
					this.morphTargetInfluences = [], this.morphTargetDictionary = {};
					for (let s = 0, o = i.length; s < o; s++) {
						const a = i[s].name || String(s);
						this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s
					}
				}
			}
		} else {
			const t = e.morphTargets;
			t !== void 0 && t.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
		}
	}
	raycast(e, t) {
		const n = this.geometry,
			i = this.material,
			s = this.matrixWorld;
		if (i === void 0 || (n.boundingSphere === null && n.computeBoundingSphere(), hh.copy(n.boundingSphere), hh.applyMatrix4(s), e.ray.intersectsSphere(hh) === !1) || (jd.copy(s).invert(), ms.copy(e.ray).applyMatrix4(jd), n.boundingBox !== null && ms.intersectsBox(n.boundingBox) === !1)) return;
		let o;
		if (n.isBufferGeometry) {
			const a = n.index,
				l = n.attributes.position,
				c = n.morphAttributes.position,
				h = n.morphTargetsRelative,
				u = n.attributes.uv,
				f = n.attributes.uv2,
				d = n.groups,
				p = n.drawRange;
			if (a !== null)
				if (Array.isArray(i))
					for (let m = 0, v = d.length; m < v; m++) {
						const g = d[m],
							_ = i[g.materialIndex],
							w = Math.max(g.start, p.start),
							x = Math.min(a.count, Math.min(g.start + g.count, p.start + p.count));
						for (let y = w, b = x; y < b; y += 3) {
							const S = a.getX(y),
								D = a.getX(y + 1),
								O = a.getX(y + 2);
							o = sl(this, _, e, ms, l, c, h, u, f, S, D, O), o && (o.faceIndex = Math.floor(y / 3), o.face.materialIndex = g.materialIndex, t.push(o))
						}
					} else {
						const m = Math.max(0, p.start),
							v = Math.min(a.count, p.start + p.count);
						for (let g = m, _ = v; g < _; g += 3) {
							const w = a.getX(g),
								x = a.getX(g + 1),
								y = a.getX(g + 2);
							o = sl(this, i, e, ms, l, c, h, u, f, w, x, y), o && (o.faceIndex = Math.floor(g / 3), t.push(o))
						}
					} else if (l !== void 0)
						if (Array.isArray(i))
							for (let m = 0, v = d.length; m < v; m++) {
								const g = d[m],
									_ = i[g.materialIndex],
									w = Math.max(g.start, p.start),
									x = Math.min(l.count, Math.min(g.start + g.count, p.start + p.count));
								for (let y = w, b = x; y < b; y += 3) {
									const S = y,
										D = y + 1,
										O = y + 2;
									o = sl(this, _, e, ms, l, c, h, u, f, S, D, O), o && (o.faceIndex = Math.floor(y / 3), o.face.materialIndex = g.materialIndex, t.push(o))
								}
							} else {
								const m = Math.max(0, p.start),
									v = Math.min(l.count, p.start + p.count);
								for (let g = m, _ = v; g < _; g += 3) {
									const w = g,
										x = g + 1,
										y = g + 2;
									o = sl(this, i, e, ms, l, c, h, u, f, w, x, y), o && (o.faceIndex = Math.floor(g / 3), t.push(o))
								}
							}
		} else n.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
	}
};
vn.prototype.isMesh = !0;

function p1(r, e, t, n, i, s, o, a) {
	let l;
	if (e.side === zt ? l = n.intersectTriangle(o, s, i, !0, a) : l = n.intersectTriangle(i, s, o, e.side !== Kr, a), l === null) return null;
	rl.copy(a), rl.applyMatrix4(r.matrixWorld);
	const c = t.ray.origin.distanceTo(rl);
	return c < t.near || c > t.far ? null : {
		distance: c,
		point: rl.clone(),
		object: r
	}
}

function sl(r, e, t, n, i, s, o, a, l, c, h, u) {
	Xi.fromBufferAttribute(i, c), Yi.fromBufferAttribute(i, h), ji.fromBufferAttribute(i, u);
	const f = r.morphTargetInfluences;
	if (s && f) {
		Qa.set(0, 0, 0), Ka.set(0, 0, 0), el.set(0, 0, 0);
		for (let p = 0, m = s.length; p < m; p++) {
			const v = f[p],
				g = s[p];
			v !== 0 && (uh.fromBufferAttribute(g, c), fh.fromBufferAttribute(g, h), dh.fromBufferAttribute(g, u), o ? (Qa.addScaledVector(uh, v), Ka.addScaledVector(fh, v), el.addScaledVector(dh, v)) : (Qa.addScaledVector(uh.sub(Xi), v), Ka.addScaledVector(fh.sub(Yi), v), el.addScaledVector(dh.sub(ji), v)))
		}
		Xi.add(Qa), Yi.add(Ka), ji.add(el)
	}
	r.isSkinnedMesh && (r.boneTransform(c, Xi), r.boneTransform(h, Yi), r.boneTransform(u, ji));
	const d = p1(r, e, t, n, Xi, Yi, ji, ph);
	if (d) {
		a && (tl.fromBufferAttribute(a, c), nl.fromBufferAttribute(a, h), il.fromBufferAttribute(a, u), d.uv = Nt.getUV(ph, Xi, Yi, ji, tl, nl, il, new fe)), l && (tl.fromBufferAttribute(l, c), nl.fromBufferAttribute(l, h), il.fromBufferAttribute(l, u), d.uv2 = Nt.getUV(ph, Xi, Yi, ji, tl, nl, il, new fe));
		const p = {
			a: c,
			b: h,
			c: u,
			normal: new I,
			materialIndex: 0
		};
		Nt.getNormal(Xi, Yi, ji, p.normal), d.face = p
	}
	return d
}
class Ma extends pt {
	constructor(e = 1, t = 1, n = 1, i = 1, s = 1, o = 1) {
		super(), this.type = "BoxGeometry", this.parameters = {
			width: e,
			height: t,
			depth: n,
			widthSegments: i,
			heightSegments: s,
			depthSegments: o
		};
		const a = this;
		i = Math.floor(i), s = Math.floor(s), o = Math.floor(o);
		const l = [],
			c = [],
			h = [],
			u = [];
		let f = 0,
			d = 0;
		p("z", "y", "x", -1, -1, n, t, e, o, s, 0), p("z", "y", "x", 1, -1, n, t, -e, o, s, 1), p("x", "z", "y", 1, 1, e, n, t, i, o, 2), p("x", "z", "y", 1, -1, e, n, -t, i, o, 3), p("x", "y", "z", 1, -1, e, t, n, i, s, 4), p("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(l), this.setAttribute("position", new Yt(c, 3)), this.setAttribute("normal", new Yt(h, 3)), this.setAttribute("uv", new Yt(u, 2));

		function p(m, v, g, _, w, x, y, b, S, D, O) {
			const z = x / S,
				P = y / D,
				M = x / 2,
				E = y / 2,
				R = b / 2,
				V = S + 1,
				N = D + 1;
			let k = 0,
				J = 0;
			const se = new I;
			for (let A = 0; A < N; A++) {
				const Y = A * P - E;
				for (let de = 0; de < V; de++) {
					const U = de * z - M;
					se[m] = U * _, se[v] = Y * w, se[g] = R, c.push(se.x, se.y, se.z), se[m] = 0, se[v] = 0, se[g] = b > 0 ? 1 : -1, h.push(se.x, se.y, se.z), u.push(de / S), u.push(1 - A / D), k += 1
				}
			}
			for (let A = 0; A < D; A++)
				for (let Y = 0; Y < S; Y++) {
					const de = f + Y + V * A,
						U = f + Y + V * (A + 1),
						W = f + (Y + 1) + V * (A + 1),
						te = f + (Y + 1) + V * A;
					l.push(de, U, te), l.push(U, W, te), J += 6
				}
			a.addGroup(d, J, O), d += J, f += k
		}
	}
	static fromJSON(e) {
		return new Ma(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments)
	}
}

function no(r) {
	const e = {};
	for (const t in r) {
		e[t] = {};
		for (const n in r[t]) {
			const i = r[t][n];
			i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i
		}
	}
	return e
}

function Kt(r) {
	const e = {};
	for (let t = 0; t < r.length; t++) {
		const n = no(r[t]);
		for (const i in n) e[i] = n[i]
	}
	return e
}
const m1 = {
	clone: no,
	merge: Kt
};
var g1 = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
	_1 = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class vr extends on {
	constructor(e) {
		super(), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = g1, this.fragmentShader = _1, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
			derivatives: !1,
			fragDepth: !1,
			drawBuffers: !1,
			shaderTextureLOD: !1
		}, this.defaultAttributeValues = {
			color: [1, 1, 1],
			uv: [0, 0],
			uv2: [0, 0]
		}, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && (e.attributes !== void 0 && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(e))
	}
	copy(e) {
		return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = no(e.uniforms), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this
	}
	toJSON(e) {
		const t = super.toJSON(e);
		t.glslVersion = this.glslVersion, t.uniforms = {};
		for (const i in this.uniforms) {
			const o = this.uniforms[i].value;
			o && o.isTexture ? t.uniforms[i] = {
				type: "t",
				value: o.toJSON(e).uuid
			} : o && o.isColor ? t.uniforms[i] = {
				type: "c",
				value: o.getHex()
			} : o && o.isVector2 ? t.uniforms[i] = {
				type: "v2",
				value: o.toArray()
			} : o && o.isVector3 ? t.uniforms[i] = {
				type: "v3",
				value: o.toArray()
			} : o && o.isVector4 ? t.uniforms[i] = {
				type: "v4",
				value: o.toArray()
			} : o && o.isMatrix3 ? t.uniforms[i] = {
				type: "m3",
				value: o.toArray()
			} : o && o.isMatrix4 ? t.uniforms[i] = {
				type: "m4",
				value: o.toArray()
			} : t.uniforms[i] = {
				value: o
			}
		}
		Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader;
		const n = {};
		for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0);
		return Object.keys(n).length > 0 && (t.extensions = n), t
	}
}
vr.prototype.isShaderMaterial = !0;
let mf = class extends nt {
	constructor() {
		super(), this.type = "Camera", this.matrixWorldInverse = new Oe, this.projectionMatrix = new Oe, this.projectionMatrixInverse = new Oe
	}
	copy(e, t) {
		return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this
	}
	getWorldDirection(e) {
		this.updateWorldMatrix(!0, !1);
		const t = this.matrixWorld.elements;
		return e.set(-t[8], -t[9], -t[10]).normalize()
	}
	updateMatrixWorld(e) {
		super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert()
	}
	updateWorldMatrix(e, t) {
		super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert()
	}
	clone() {
		return new this.constructor().copy(this)
	}
};
mf.prototype.isCamera = !0;
class Sn extends mf {
	constructor(e = 50, t = 1, n = .1, i = 2e3) {
		super(), this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
	}
	copy(e, t) {
		return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this
	}
	setFocalLength(e) {
		const t = .5 * this.getFilmHeight() / e;
		this.fov = fu * 2 * Math.atan(t), this.updateProjectionMatrix()
	}
	getFocalLength() {
		const e = Math.tan(Xc * .5 * this.fov);
		return .5 * this.getFilmHeight() / e
	}
	getEffectiveFOV() {
		return fu * 2 * Math.atan(Math.tan(Xc * .5 * this.fov) / this.zoom)
	}
	getFilmWidth() {
		return this.filmGauge * Math.min(this.aspect, 1)
	}
	getFilmHeight() {
		return this.filmGauge / Math.max(this.aspect, 1)
	}
	setViewOffset(e, t, n, i, s, o) {
		this.aspect = e / t, this.view === null && (this.view = {
			enabled: !0,
			fullWidth: 1,
			fullHeight: 1,
			offsetX: 0,
			offsetY: 0,
			width: 1,
			height: 1
		}), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = o, this.updateProjectionMatrix()
	}
	clearViewOffset() {
		this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix()
	}
	updateProjectionMatrix() {
		const e = this.near;
		let t = e * Math.tan(Xc * .5 * this.fov) / this.zoom,
			n = 2 * t,
			i = this.aspect * n,
			s = -.5 * i;
		const o = this.view;
		if (this.view !== null && this.view.enabled) {
			const l = o.fullWidth,
				c = o.fullHeight;
			s += o.offsetX * i / l, t -= o.offsetY * n / c, i *= o.width / l, n *= o.height / c
		}
		const a = this.filmOffset;
		a !== 0 && (s += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
	}
	toJSON(e) {
		const t = super.toJSON(e);
		return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t
	}
}
Sn.prototype.isPerspectiveCamera = !0;
const gs = 90,
	_s = 1;
class gf extends nt {
	constructor(e, t, n) {
		if (super(), this.type = "CubeCamera", n.isWebGLCubeRenderTarget !== !0) {
			console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
			return
		}
		this.renderTarget = n;
		const i = new Sn(gs, _s, e, t);
		i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new I(1, 0, 0)), this.add(i);
		const s = new Sn(gs, _s, e, t);
		s.layers = this.layers, s.up.set(0, -1, 0), s.lookAt(new I(-1, 0, 0)), this.add(s);
		const o = new Sn(gs, _s, e, t);
		o.layers = this.layers, o.up.set(0, 0, 1), o.lookAt(new I(0, 1, 0)), this.add(o);
		const a = new Sn(gs, _s, e, t);
		a.layers = this.layers, a.up.set(0, 0, -1), a.lookAt(new I(0, -1, 0)), this.add(a);
		const l = new Sn(gs, _s, e, t);
		l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new I(0, 0, 1)), this.add(l);
		const c = new Sn(gs, _s, e, t);
		c.layers = this.layers, c.up.set(0, -1, 0), c.lookAt(new I(0, 0, -1)), this.add(c)
	}
	update(e, t) {
		this.parent === null && this.updateMatrixWorld();
		const n = this.renderTarget,
			[i, s, o, a, l, c] = this.children,
			h = e.xr.enabled,
			u = e.getRenderTarget();
		e.xr.enabled = !1;
		const f = n.texture.generateMipmaps;
		n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, s), e.setRenderTarget(n, 2), e.render(t, o), e.setRenderTarget(n, 3), e.render(t, a), e.setRenderTarget(n, 4), e.render(t, l), n.texture.generateMipmaps = f, e.setRenderTarget(n, 5), e.render(t, c), e.setRenderTarget(u), e.xr.enabled = h
	}
}
class mc extends sn {
	constructor(e, t, n, i, s, o, a, l, c, h) {
		e = e !== void 0 ? e : [], t = t !== void 0 ? t : wa, super(e, t, n, i, s, o, a, l, c, h), this.flipY = !1
	}
	get images() {
		return this.image
	}
	set images(e) {
		this.image = e
	}
}
mc.prototype.isCubeTexture = !0;
class n0 extends Kn {
	constructor(e, t, n) {
		Number.isInteger(t) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"), t = n), super(e, e, t), t = t || {}, this.texture = new mc(void 0, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : gn, this.texture._needsFlipEnvMap = !1
	}
	fromEquirectangularTexture(e, t) {
		this.texture.type = t.type, this.texture.format = Xt, this.texture.encoding = t.encoding, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
		const n = {
				uniforms: {
					tEquirect: {
						value: null
					}
				},
				vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
				fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
			},
			i = new Ma(5, 5, 5),
			s = new vr({
				name: "CubemapFromEquirect",
				uniforms: no(n.uniforms),
				vertexShader: n.vertexShader,
				fragmentShader: n.fragmentShader,
				side: zt,
				blending: lr
			});
		s.uniforms.tEquirect.value = t;
		const o = new vn(i, s),
			a = t.minFilter;
		return t.minFilter === fc && (t.minFilter = gn), new gf(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this
	}
	clear(e, t, n, i) {
		const s = e.getRenderTarget();
		for (let o = 0; o < 6; o++) e.setRenderTarget(this, o), e.clear(t, n, i);
		e.setRenderTarget(s)
	}
}
n0.prototype.isWebGLCubeRenderTarget = !0;
const mh = new I,
	v1 = new I,
	x1 = new Jt;
let Ii = class {
	constructor(e = new I(1, 0, 0), t = 0) {
		this.normal = e, this.constant = t
	}
	set(e, t) {
		return this.normal.copy(e), this.constant = t, this
	}
	setComponents(e, t, n, i) {
		return this.normal.set(e, t, n), this.constant = i, this
	}
	setFromNormalAndCoplanarPoint(e, t) {
		return this.normal.copy(e), this.constant = -t.dot(this.normal), this
	}
	setFromCoplanarPoints(e, t, n) {
		const i = mh.subVectors(n, t).cross(v1.subVectors(e, t)).normalize();
		return this.setFromNormalAndCoplanarPoint(i, e), this
	}
	copy(e) {
		return this.normal.copy(e.normal), this.constant = e.constant, this
	}
	normalize() {
		const e = 1 / this.normal.length();
		return this.normal.multiplyScalar(e), this.constant *= e, this
	}
	negate() {
		return this.constant *= -1, this.normal.negate(), this
	}
	distanceToPoint(e) {
		return this.normal.dot(e) + this.constant
	}
	distanceToSphere(e) {
		return this.distanceToPoint(e.center) - e.radius
	}
	projectPoint(e, t) {
		return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)
	}
	intersectLine(e, t) {
		const n = e.delta(mh),
			i = this.normal.dot(n);
		if (i === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
		const s = -(e.start.dot(this.normal) + this.constant) / i;
		return s < 0 || s > 1 ? null : t.copy(n).multiplyScalar(s).add(e.start)
	}
	intersectsLine(e) {
		const t = this.distanceToPoint(e.start),
			n = this.distanceToPoint(e.end);
		return t < 0 && n > 0 || n < 0 && t > 0
	}
	intersectsBox(e) {
		return e.intersectsPlane(this)
	}
	intersectsSphere(e) {
		return e.intersectsPlane(this)
	}
	coplanarPoint(e) {
		return e.copy(this.normal).multiplyScalar(-this.constant)
	}
	applyMatrix4(e, t) {
		const n = t || x1.getNormalMatrix(e),
			i = this.coplanarPoint(mh).applyMatrix4(e),
			s = this.normal.applyMatrix3(n).normalize();
		return this.constant = -i.dot(s), this
	}
	translate(e) {
		return this.constant -= e.dot(this.normal), this
	}
	equals(e) {
		return e.normal.equals(this.normal) && e.constant === this.constant
	}
	clone() {
		return new this.constructor().copy(this)
	}
};
Ii.prototype.isPlane = !0;
const vs = new co,
	ol = new I;
class gc {
	constructor(e = new Ii, t = new Ii, n = new Ii, i = new Ii, s = new Ii, o = new Ii) {
		this.planes = [e, t, n, i, s, o]
	}
	set(e, t, n, i, s, o) {
		const a = this.planes;
		return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(i), a[4].copy(s), a[5].copy(o), this
	}
	copy(e) {
		const t = this.planes;
		for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
		return this
	}
	setFromProjectionMatrix(e) {
		const t = this.planes,
			n = e.elements,
			i = n[0],
			s = n[1],
			o = n[2],
			a = n[3],
			l = n[4],
			c = n[5],
			h = n[6],
			u = n[7],
			f = n[8],
			d = n[9],
			p = n[10],
			m = n[11],
			v = n[12],
			g = n[13],
			_ = n[14],
			w = n[15];
		return t[0].setComponents(a - i, u - l, m - f, w - v).normalize(), t[1].setComponents(a + i, u + l, m + f, w + v).normalize(), t[2].setComponents(a + s, u + c, m + d, w + g).normalize(), t[3].setComponents(a - s, u - c, m - d, w - g).normalize(), t[4].setComponents(a - o, u - h, m - p, w - _).normalize(), t[5].setComponents(a + o, u + h, m + p, w + _).normalize(), this
	}
	intersectsObject(e) {
		const t = e.geometry;
		return t.boundingSphere === null && t.computeBoundingSphere(), vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(vs)
	}
	intersectsSprite(e) {
		return vs.center.set(0, 0, 0), vs.radius = .7071067811865476, vs.applyMatrix4(e.matrixWorld), this.intersectsSphere(vs)
	}
	intersectsSphere(e) {
		const t = this.planes,
			n = e.center,
			i = -e.radius;
		for (let s = 0; s < 6; s++)
			if (t[s].distanceToPoint(n) < i) return !1;
		return !0
	}
	intersectsBox(e) {
		const t = this.planes;
		for (let n = 0; n < 6; n++) {
			const i = t[n];
			if (ol.x = i.normal.x > 0 ? e.max.x : e.min.x, ol.y = i.normal.y > 0 ? e.max.y : e.min.y, ol.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(ol) < 0) return !1
		}
		return !0
	}
	containsPoint(e) {
		const t = this.planes;
		for (let n = 0; n < 6; n++)
			if (t[n].distanceToPoint(e) < 0) return !1;
		return !0
	}
	clone() {
		return new this.constructor().copy(this)
	}
}

function i0() {
	let r = null,
		e = !1,
		t = null,
		n = null;

	function i(s, o) {
		t(s, o), n = r.requestAnimationFrame(i)
	}
	return {
		start: function() {
			e !== !0 && t !== null && (n = r.requestAnimationFrame(i), e = !0)
		},
		stop: function() {
			r.cancelAnimationFrame(n), e = !1
		},
		setAnimationLoop: function(s) {
			t = s
		},
		setContext: function(s) {
			r = s
		}
	}
}

function y1(r, e) {
	const t = e.isWebGL2,
		n = new WeakMap;

	function i(c, h) {
		const u = c.array,
			f = c.usage,
			d = r.createBuffer();
		r.bindBuffer(h, d), r.bufferData(h, u, f), c.onUploadCallback();
		let p = 5126;
		return u instanceof Float32Array ? p = 5126 : u instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : u instanceof Uint16Array ? c.isFloat16BufferAttribute ? t ? p = 5131 : console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.") : p = 5123 : u instanceof Int16Array ? p = 5122 : u instanceof Uint32Array ? p = 5125 : u instanceof Int32Array ? p = 5124 : u instanceof Int8Array ? p = 5120 : (u instanceof Uint8Array || u instanceof Uint8ClampedArray) && (p = 5121), {
			buffer: d,
			type: p,
			bytesPerElement: u.BYTES_PER_ELEMENT,
			version: c.version
		}
	}

	function s(c, h, u) {
		const f = h.array,
			d = h.updateRange;
		r.bindBuffer(u, c), d.count === -1 ? r.bufferSubData(u, 0, f) : (t ? r.bufferSubData(u, d.offset * f.BYTES_PER_ELEMENT, f, d.offset, d.count) : r.bufferSubData(u, d.offset * f.BYTES_PER_ELEMENT, f.subarray(d.offset, d.offset + d.count)), d.count = -1)
	}

	function o(c) {
		return c.isInterleavedBufferAttribute && (c = c.data), n.get(c)
	}

	function a(c) {
		c.isInterleavedBufferAttribute && (c = c.data);
		const h = n.get(c);
		h && (r.deleteBuffer(h.buffer), n.delete(c))
	}

	function l(c, h) {
		if (c.isGLBufferAttribute) {
			const f = n.get(c);
			(!f || f.version < c.version) && n.set(c, {
				buffer: c.buffer,
				type: c.type,
				bytesPerElement: c.elementSize,
				version: c.version
			});
			return
		}
		c.isInterleavedBufferAttribute && (c = c.data);
		const u = n.get(c);
		u === void 0 ? n.set(c, i(c, h)) : u.version < c.version && (s(u.buffer, c, h), u.version = c.version)
	}
	return {
		get: o,
		remove: a,
		update: l
	}
}
class _c extends pt {
	constructor(e = 1, t = 1, n = 1, i = 1) {
		super(), this.type = "PlaneGeometry", this.parameters = {
			width: e,
			height: t,
			widthSegments: n,
			heightSegments: i
		};
		const s = e / 2,
			o = t / 2,
			a = Math.floor(n),
			l = Math.floor(i),
			c = a + 1,
			h = l + 1,
			u = e / a,
			f = t / l,
			d = [],
			p = [],
			m = [],
			v = [];
		for (let g = 0; g < h; g++) {
			const _ = g * f - o;
			for (let w = 0; w < c; w++) {
				const x = w * u - s;
				p.push(x, -_, 0), m.push(0, 0, 1), v.push(w / a), v.push(1 - g / l)
			}
		}
		for (let g = 0; g < l; g++)
			for (let _ = 0; _ < a; _++) {
				const w = _ + c * g,
					x = _ + c * (g + 1),
					y = _ + 1 + c * (g + 1),
					b = _ + 1 + c * g;
				d.push(w, x, b), d.push(x, y, b)
			}
		this.setIndex(d), this.setAttribute("position", new Yt(p, 3)), this.setAttribute("normal", new Yt(m, 3)), this.setAttribute("uv", new Yt(v, 2))
	}
	static fromJSON(e) {
		return new _c(e.width, e.height, e.widthSegments, e.heightSegments)
	}
}
var w1 = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,
	b1 = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
	M1 = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
	S1 = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
	T1 = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
	E1 = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
	A1 = "vec3 transformed = vec3( position );",
	C1 = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
	L1 = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,
	R1 = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
	P1 = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,
	D1 = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
	I1 = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
	F1 = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
	z1 = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
	O1 = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
	N1 = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
	B1 = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,
	k1 = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,
	U1 = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		return texture2D( envMap, uv ).rgb;
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
	V1 = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
	H1 = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
	G1 = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,
	W1 = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
	q1 = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
	X1 = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
	Y1 = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
	j1 = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
	$1 = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
	Z1 = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
	J1 = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
	Q1 = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
	K1 = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
	eb = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
	tb = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
	nb = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
	ib = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,
	rb = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
	sb = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
	ob = `vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,
	ab = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
	lb = `#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,
	cb = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
	hb = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,
	ub = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
	fb = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,
	db = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= specularColorMapTexelToLinear( texture2D( specularColorMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= sheenColorMapTexelToLinear( texture2D( sheenColorMap, vUv ) ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,
	pb = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
	mb = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
	gb = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
	_b = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,
	vb = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
	xb = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
	yb = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
	wb = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
	bb = `#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,
	Mb = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
	Sb = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
	Tb = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
	Eb = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
	Ab = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
	Cb = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,
	Lb = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,
	Rb = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,
	Pb = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,
	Db = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
	Ib = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
	Fb = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
	zb = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
	Ob = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,
	Nb = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,
	Bb = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,
	kb = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,
	Ub = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
	Vb = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,
	Hb = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
	Gb = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
	Wb = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
	qb = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
	Xb = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
	Yb = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
	jb = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
	$b = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
	Zb = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,
	Jb = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
	Qb = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
	Kb = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,
	eM = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
	tM = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
	nM = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
	iM = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
	rM = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
	sM = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
	oM = `#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,
	aM = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,
	lM = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,
	cM = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,
	hM = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,
	uM = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,
	fM = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,
	dM = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,
	pM = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const mM = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
	gM = `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
	_M = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
	vM = `#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
	xM = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
	yM = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
	wM = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
	bM = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
	MM = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
	SM = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
	TM = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
	EM = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
	AM = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
	CM = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
	LM = `#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
	RM = `uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
	PM = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
	DM = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
	IM = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
	FM = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,
	zM = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
	OM = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
	NM = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
	BM = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
	kM = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
	UM = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
	VM = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
	HM = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
	GM = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
	WM = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
	qM = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
	XM = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
	Xe = {
		alphamap_fragment: w1,
		alphamap_pars_fragment: b1,
		alphatest_fragment: M1,
		alphatest_pars_fragment: S1,
		aomap_fragment: T1,
		aomap_pars_fragment: E1,
		begin_vertex: A1,
		beginnormal_vertex: C1,
		bsdfs: L1,
		bumpmap_pars_fragment: R1,
		clipping_planes_fragment: P1,
		clipping_planes_pars_fragment: D1,
		clipping_planes_pars_vertex: I1,
		clipping_planes_vertex: F1,
		color_fragment: z1,
		color_pars_fragment: O1,
		color_pars_vertex: N1,
		color_vertex: B1,
		common: k1,
		cube_uv_reflection_fragment: U1,
		defaultnormal_vertex: V1,
		displacementmap_pars_vertex: H1,
		displacementmap_vertex: G1,
		emissivemap_fragment: W1,
		emissivemap_pars_fragment: q1,
		encodings_fragment: X1,
		encodings_pars_fragment: Y1,
		envmap_fragment: j1,
		envmap_common_pars_fragment: $1,
		envmap_pars_fragment: Z1,
		envmap_pars_vertex: J1,
		envmap_physical_pars_fragment: lb,
		envmap_vertex: Q1,
		fog_vertex: K1,
		fog_pars_vertex: eb,
		fog_fragment: tb,
		fog_pars_fragment: nb,
		gradientmap_pars_fragment: ib,
		lightmap_fragment: rb,
		lightmap_pars_fragment: sb,
		lights_lambert_vertex: ob,
		lights_pars_begin: ab,
		lights_toon_fragment: cb,
		lights_toon_pars_fragment: hb,
		lights_phong_fragment: ub,
		lights_phong_pars_fragment: fb,
		lights_physical_fragment: db,
		lights_physical_pars_fragment: pb,
		lights_fragment_begin: mb,
		lights_fragment_maps: gb,
		lights_fragment_end: _b,
		logdepthbuf_fragment: vb,
		logdepthbuf_pars_fragment: xb,
		logdepthbuf_pars_vertex: yb,
		logdepthbuf_vertex: wb,
		map_fragment: bb,
		map_pars_fragment: Mb,
		map_particle_fragment: Sb,
		map_particle_pars_fragment: Tb,
		metalnessmap_fragment: Eb,
		metalnessmap_pars_fragment: Ab,
		morphnormal_vertex: Cb,
		morphtarget_pars_vertex: Lb,
		morphtarget_vertex: Rb,
		normal_fragment_begin: Pb,
		normal_fragment_maps: Db,
		normal_pars_fragment: Ib,
		normal_pars_vertex: Fb,
		normal_vertex: zb,
		normalmap_pars_fragment: Ob,
		clearcoat_normal_fragment_begin: Nb,
		clearcoat_normal_fragment_maps: Bb,
		clearcoat_pars_fragment: kb,
		output_fragment: Ub,
		packing: Vb,
		premultiplied_alpha_fragment: Hb,
		project_vertex: Gb,
		dithering_fragment: Wb,
		dithering_pars_fragment: qb,
		roughnessmap_fragment: Xb,
		roughnessmap_pars_fragment: Yb,
		shadowmap_pars_fragment: jb,
		shadowmap_pars_vertex: $b,
		shadowmap_vertex: Zb,
		shadowmask_pars_fragment: Jb,
		skinbase_vertex: Qb,
		skinning_pars_vertex: Kb,
		skinning_vertex: eM,
		skinnormal_vertex: tM,
		specularmap_fragment: nM,
		specularmap_pars_fragment: iM,
		tonemapping_fragment: rM,
		tonemapping_pars_fragment: sM,
		transmission_fragment: oM,
		transmission_pars_fragment: aM,
		uv_pars_fragment: lM,
		uv_pars_vertex: cM,
		uv_vertex: hM,
		uv2_pars_fragment: uM,
		uv2_pars_vertex: fM,
		uv2_vertex: dM,
		worldpos_vertex: pM,
		background_vert: mM,
		background_frag: gM,
		cube_vert: _M,
		cube_frag: vM,
		depth_vert: xM,
		depth_frag: yM,
		distanceRGBA_vert: wM,
		distanceRGBA_frag: bM,
		equirect_vert: MM,
		equirect_frag: SM,
		linedashed_vert: TM,
		linedashed_frag: EM,
		meshbasic_vert: AM,
		meshbasic_frag: CM,
		meshlambert_vert: LM,
		meshlambert_frag: RM,
		meshmatcap_vert: PM,
		meshmatcap_frag: DM,
		meshnormal_vert: IM,
		meshnormal_frag: FM,
		meshphong_vert: zM,
		meshphong_frag: OM,
		meshphysical_vert: NM,
		meshphysical_frag: BM,
		meshtoon_vert: kM,
		meshtoon_frag: UM,
		points_vert: VM,
		points_frag: HM,
		shadow_vert: GM,
		shadow_frag: WM,
		sprite_vert: qM,
		sprite_frag: XM
	},
	ve = {
		common: {
			diffuse: {
				value: new De(16777215)
			},
			opacity: {
				value: 1
			},
			map: {
				value: null
			},
			uvTransform: {
				value: new Jt
			},
			uv2Transform: {
				value: new Jt
			},
			alphaMap: {
				value: null
			},
			alphaTest: {
				value: 0
			}
		},
		specularmap: {
			specularMap: {
				value: null
			}
		},
		envmap: {
			envMap: {
				value: null
			},
			flipEnvMap: {
				value: -1
			},
			reflectivity: {
				value: 1
			},
			ior: {
				value: 1.5
			},
			refractionRatio: {
				value: .98
			}
		},
		aomap: {
			aoMap: {
				value: null
			},
			aoMapIntensity: {
				value: 1
			}
		},
		lightmap: {
			lightMap: {
				value: null
			},
			lightMapIntensity: {
				value: 1
			}
		},
		emissivemap: {
			emissiveMap: {
				value: null
			}
		},
		bumpmap: {
			bumpMap: {
				value: null
			},
			bumpScale: {
				value: 1
			}
		},
		normalmap: {
			normalMap: {
				value: null
			},
			normalScale: {
				value: new fe(1, 1)
			}
		},
		displacementmap: {
			displacementMap: {
				value: null
			},
			displacementScale: {
				value: 1
			},
			displacementBias: {
				value: 0
			}
		},
		roughnessmap: {
			roughnessMap: {
				value: null
			}
		},
		metalnessmap: {
			metalnessMap: {
				value: null
			}
		},
		gradientmap: {
			gradientMap: {
				value: null
			}
		},
		fog: {
			fogDensity: {
				value: 25e-5
			},
			fogNear: {
				value: 1
			},
			fogFar: {
				value: 2e3
			},
			fogColor: {
				value: new De(16777215)
			}
		},
		lights: {
			ambientLightColor: {
				value: []
			},
			lightProbe: {
				value: []
			},
			directionalLights: {
				value: [],
				properties: {
					direction: {},
					color: {}
				}
			},
			directionalLightShadows: {
				value: [],
				properties: {
					shadowBias: {},
					shadowNormalBias: {},
					shadowRadius: {},
					shadowMapSize: {}
				}
			},
			directionalShadowMap: {
				value: []
			},
			directionalShadowMatrix: {
				value: []
			},
			spotLights: {
				value: [],
				properties: {
					color: {},
					position: {},
					direction: {},
					distance: {},
					coneCos: {},
					penumbraCos: {},
					decay: {}
				}
			},
			spotLightShadows: {
				value: [],
				properties: {
					shadowBias: {},
					shadowNormalBias: {},
					shadowRadius: {},
					shadowMapSize: {}
				}
			},
			spotShadowMap: {
				value: []
			},
			spotShadowMatrix: {
				value: []
			},
			pointLights: {
				value: [],
				properties: {
					color: {},
					position: {},
					decay: {},
					distance: {}
				}
			},
			pointLightShadows: {
				value: [],
				properties: {
					shadowBias: {},
					shadowNormalBias: {},
					shadowRadius: {},
					shadowMapSize: {},
					shadowCameraNear: {},
					shadowCameraFar: {}
				}
			},
			pointShadowMap: {
				value: []
			},
			pointShadowMatrix: {
				value: []
			},
			hemisphereLights: {
				value: [],
				properties: {
					direction: {},
					skyColor: {},
					groundColor: {}
				}
			},
			rectAreaLights: {
				value: [],
				properties: {
					color: {},
					position: {},
					width: {},
					height: {}
				}
			},
			ltc_1: {
				value: null
			},
			ltc_2: {
				value: null
			}
		},
		points: {
			diffuse: {
				value: new De(16777215)
			},
			opacity: {
				value: 1
			},
			size: {
				value: 1
			},
			scale: {
				value: 1
			},
			map: {
				value: null
			},
			alphaMap: {
				value: null
			},
			alphaTest: {
				value: 0
			},
			uvTransform: {
				value: new Jt
			}
		},
		sprite: {
			diffuse: {
				value: new De(16777215)
			},
			opacity: {
				value: 1
			},
			center: {
				value: new fe(.5, .5)
			},
			rotation: {
				value: 0
			},
			map: {
				value: null
			},
			alphaMap: {
				value: null
			},
			alphaTest: {
				value: 0
			},
			uvTransform: {
				value: new Jt
			}
		}
	},
	di = {
		basic: {
			uniforms: Kt([ve.common, ve.specularmap, ve.envmap, ve.aomap, ve.lightmap, ve.fog]),
			vertexShader: Xe.meshbasic_vert,
			fragmentShader: Xe.meshbasic_frag
		},
		lambert: {
			uniforms: Kt([ve.common, ve.specularmap, ve.envmap, ve.aomap, ve.lightmap, ve.emissivemap, ve.fog, ve.lights, {
				emissive: {
					value: new De(0)
				}
			}]),
			vertexShader: Xe.meshlambert_vert,
			fragmentShader: Xe.meshlambert_frag
		},
		phong: {
			uniforms: Kt([ve.common, ve.specularmap, ve.envmap, ve.aomap, ve.lightmap, ve.emissivemap, ve.bumpmap, ve.normalmap, ve.displacementmap, ve.fog, ve.lights, {
				emissive: {
					value: new De(0)
				},
				specular: {
					value: new De(1118481)
				},
				shininess: {
					value: 30
				}
			}]),
			vertexShader: Xe.meshphong_vert,
			fragmentShader: Xe.meshphong_frag
		},
		standard: {
			uniforms: Kt([ve.common, ve.envmap, ve.aomap, ve.lightmap, ve.emissivemap, ve.bumpmap, ve.normalmap, ve.displacementmap, ve.roughnessmap, ve.metalnessmap, ve.fog, ve.lights, {
				emissive: {
					value: new De(0)
				},
				roughness: {
					value: 1
				},
				metalness: {
					value: 0
				},
				envMapIntensity: {
					value: 1
				}
			}]),
			vertexShader: Xe.meshphysical_vert,
			fragmentShader: Xe.meshphysical_frag
		},
		toon: {
			uniforms: Kt([ve.common, ve.aomap, ve.lightmap, ve.emissivemap, ve.bumpmap, ve.normalmap, ve.displacementmap, ve.gradientmap, ve.fog, ve.lights, {
				emissive: {
					value: new De(0)
				}
			}]),
			vertexShader: Xe.meshtoon_vert,
			fragmentShader: Xe.meshtoon_frag
		},
		matcap: {
			uniforms: Kt([ve.common, ve.bumpmap, ve.normalmap, ve.displacementmap, ve.fog, {
				matcap: {
					value: null
				}
			}]),
			vertexShader: Xe.meshmatcap_vert,
			fragmentShader: Xe.meshmatcap_frag
		},
		points: {
			uniforms: Kt([ve.points, ve.fog]),
			vertexShader: Xe.points_vert,
			fragmentShader: Xe.points_frag
		},
		dashed: {
			uniforms: Kt([ve.common, ve.fog, {
				scale: {
					value: 1
				},
				dashSize: {
					value: 1
				},
				totalSize: {
					value: 2
				}
			}]),
			vertexShader: Xe.linedashed_vert,
			fragmentShader: Xe.linedashed_frag
		},
		depth: {
			uniforms: Kt([ve.common, ve.displacementmap]),
			vertexShader: Xe.depth_vert,
			fragmentShader: Xe.depth_frag
		},
		normal: {
			uniforms: Kt([ve.common, ve.bumpmap, ve.normalmap, ve.displacementmap, {
				opacity: {
					value: 1
				}
			}]),
			vertexShader: Xe.meshnormal_vert,
			fragmentShader: Xe.meshnormal_frag
		},
		sprite: {
			uniforms: Kt([ve.sprite, ve.fog]),
			vertexShader: Xe.sprite_vert,
			fragmentShader: Xe.sprite_frag
		},
		background: {
			uniforms: {
				uvTransform: {
					value: new Jt
				},
				t2D: {
					value: null
				}
			},
			vertexShader: Xe.background_vert,
			fragmentShader: Xe.background_frag
		},
		cube: {
			uniforms: Kt([ve.envmap, {
				opacity: {
					value: 1
				}
			}]),
			vertexShader: Xe.cube_vert,
			fragmentShader: Xe.cube_frag
		},
		equirect: {
			uniforms: {
				tEquirect: {
					value: null
				}
			},
			vertexShader: Xe.equirect_vert,
			fragmentShader: Xe.equirect_frag
		},
		distanceRGBA: {
			uniforms: Kt([ve.common, ve.displacementmap, {
				referencePosition: {
					value: new I
				},
				nearDistance: {
					value: 1
				},
				farDistance: {
					value: 1e3
				}
			}]),
			vertexShader: Xe.distanceRGBA_vert,
			fragmentShader: Xe.distanceRGBA_frag
		},
		shadow: {
			uniforms: Kt([ve.lights, ve.fog, {
				color: {
					value: new De(0)
				},
				opacity: {
					value: 1
				}
			}]),
			vertexShader: Xe.shadow_vert,
			fragmentShader: Xe.shadow_frag
		}
	};
di.physical = {
	uniforms: Kt([di.standard.uniforms, {
		clearcoat: {
			value: 0
		},
		clearcoatMap: {
			value: null
		},
		clearcoatRoughness: {
			value: 0
		},
		clearcoatRoughnessMap: {
			value: null
		},
		clearcoatNormalScale: {
			value: new fe(1, 1)
		},
		clearcoatNormalMap: {
			value: null
		},
		sheen: {
			value: 0
		},
		sheenColor: {
			value: new De(0)
		},
		sheenColorMap: {
			value: null
		},
		sheenRoughness: {
			value: 0
		},
		sheenRoughnessMap: {
			value: null
		},
		transmission: {
			value: 0
		},
		transmissionMap: {
			value: null
		},
		transmissionSamplerSize: {
			value: new fe
		},
		transmissionSamplerMap: {
			value: null
		},
		thickness: {
			value: 0
		},
		thicknessMap: {
			value: null
		},
		attenuationDistance: {
			value: 0
		},
		attenuationColor: {
			value: new De(0)
		},
		specularIntensity: {
			value: 0
		},
		specularIntensityMap: {
			value: null
		},
		specularColor: {
			value: new De(1, 1, 1)
		},
		specularColorMap: {
			value: null
		}
	}]),
	vertexShader: Xe.meshphysical_vert,
	fragmentShader: Xe.meshphysical_frag
};

function YM(r, e, t, n, i) {
	const s = new De(0);
	let o = 0,
		a, l, c = null,
		h = 0,
		u = null;

	function f(p, m) {
		let v = !1,
			g = m.isScene === !0 ? m.background : null;
		g && g.isTexture && (g = e.get(g));
		const _ = r.xr,
			w = _.getSession && _.getSession();
		w && w.environmentBlendMode === "additive" && (g = null), g === null ? d(s, o) : g && g.isColor && (d(g, 1), v = !0), (r.autoClear || v) && r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil), g && (g.isCubeTexture || g.mapping === uc) ? (l === void 0 && (l = new vn(new Ma(1, 1, 1), new vr({
			name: "BackgroundCubeMaterial",
			uniforms: no(di.cube.uniforms),
			vertexShader: di.cube.vertexShader,
			fragmentShader: di.cube.fragmentShader,
			side: zt,
			depthTest: !1,
			depthWrite: !1,
			fog: !1
		})), l.geometry.deleteAttribute("normal"), l.geometry.deleteAttribute("uv"), l.onBeforeRender = function(x, y, b) {
			this.matrixWorld.copyPosition(b.matrixWorld)
		}, Object.defineProperty(l.material, "envMap", {
			get: function() {
				return this.uniforms.envMap.value
			}
		}), n.update(l)), l.material.uniforms.envMap.value = g, l.material.uniforms.flipEnvMap.value = g.isCubeTexture && g.isRenderTargetTexture === !1 ? -1 : 1, (c !== g || h !== g.version || u !== r.toneMapping) && (l.material.needsUpdate = !0, c = g, h = g.version, u = r.toneMapping), p.unshift(l, l.geometry, l.material, 0, 0, null)) : g && g.isTexture && (a === void 0 && (a = new vn(new _c(2, 2), new vr({
			name: "BackgroundMaterial",
			uniforms: no(di.background.uniforms),
			vertexShader: di.background.vertexShader,
			fragmentShader: di.background.fragmentShader,
			side: da,
			depthTest: !1,
			depthWrite: !1,
			fog: !1
		})), a.geometry.deleteAttribute("normal"), Object.defineProperty(a.material, "map", {
			get: function() {
				return this.uniforms.t2D.value
			}
		}), n.update(a)), a.material.uniforms.t2D.value = g, g.matrixAutoUpdate === !0 && g.updateMatrix(), a.material.uniforms.uvTransform.value.copy(g.matrix), (c !== g || h !== g.version || u !== r.toneMapping) && (a.material.needsUpdate = !0, c = g, h = g.version, u = r.toneMapping), p.unshift(a, a.geometry, a.material, 0, 0, null))
	}

	function d(p, m) {
		t.buffers.color.setClear(p.r, p.g, p.b, m, i)
	}
	return {
		getClearColor: function() {
			return s
		},
		setClearColor: function(p, m = 1) {
			s.set(p), o = m, d(s, o)
		},
		getClearAlpha: function() {
			return o
		},
		setClearAlpha: function(p) {
			o = p, d(s, o)
		},
		render: f
	}
}

function jM(r, e, t, n) {
	const i = r.getParameter(34921),
		s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"),
		o = n.isWebGL2 || s !== null,
		a = {},
		l = m(null);
	let c = l;

	function h(E, R, V, N, k) {
		let J = !1;
		if (o) {
			const se = p(N, V, R);
			c !== se && (c = se, f(c.object)), J = v(N, k), J && g(N, k)
		} else {
			const se = R.wireframe === !0;
			(c.geometry !== N.id || c.program !== V.id || c.wireframe !== se) && (c.geometry = N.id, c.program = V.id, c.wireframe = se, J = !0)
		}
		E.isInstancedMesh === !0 && (J = !0), k !== null && t.update(k, 34963), J && (S(E, R, V, N), k !== null && r.bindBuffer(34963, t.get(k).buffer))
	}

	function u() {
		return n.isWebGL2 ? r.createVertexArray() : s.createVertexArrayOES()
	}

	function f(E) {
		return n.isWebGL2 ? r.bindVertexArray(E) : s.bindVertexArrayOES(E)
	}

	function d(E) {
		return n.isWebGL2 ? r.deleteVertexArray(E) : s.deleteVertexArrayOES(E)
	}

	function p(E, R, V) {
		const N = V.wireframe === !0;
		let k = a[E.id];
		k === void 0 && (k = {}, a[E.id] = k);
		let J = k[R.id];
		J === void 0 && (J = {}, k[R.id] = J);
		let se = J[N];
		return se === void 0 && (se = m(u()), J[N] = se), se
	}

	function m(E) {
		const R = [],
			V = [],
			N = [];
		for (let k = 0; k < i; k++) R[k] = 0, V[k] = 0, N[k] = 0;
		return {
			geometry: null,
			program: null,
			wireframe: !1,
			newAttributes: R,
			enabledAttributes: V,
			attributeDivisors: N,
			object: E,
			attributes: {},
			index: null
		}
	}

	function v(E, R) {
		const V = c.attributes,
			N = E.attributes;
		let k = 0;
		for (const J in N) {
			const se = V[J],
				A = N[J];
			if (se === void 0 || se.attribute !== A || se.data !== A.data) return !0;
			k++
		}
		return c.attributesNum !== k || c.index !== R
	}

	function g(E, R) {
		const V = {},
			N = E.attributes;
		let k = 0;
		for (const J in N) {
			const se = N[J],
				A = {};
			A.attribute = se, se.data && (A.data = se.data), V[J] = A, k++
		}
		c.attributes = V, c.attributesNum = k, c.index = R
	}

	function _() {
		const E = c.newAttributes;
		for (let R = 0, V = E.length; R < V; R++) E[R] = 0
	}

	function w(E) {
		x(E, 0)
	}

	function x(E, R) {
		const V = c.newAttributes,
			N = c.enabledAttributes,
			k = c.attributeDivisors;
		V[E] = 1, N[E] === 0 && (r.enableVertexAttribArray(E), N[E] = 1), k[E] !== R && ((n.isWebGL2 ? r : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](E, R), k[E] = R)
	}

	function y() {
		const E = c.newAttributes,
			R = c.enabledAttributes;
		for (let V = 0, N = R.length; V < N; V++) R[V] !== E[V] && (r.disableVertexAttribArray(V), R[V] = 0)
	}

	function b(E, R, V, N, k, J) {
		n.isWebGL2 === !0 && (V === 5124 || V === 5125) ? r.vertexAttribIPointer(E, R, V, k, J) : r.vertexAttribPointer(E, R, V, N, k, J)
	}

	function S(E, R, V, N) {
		if (n.isWebGL2 === !1 && (E.isInstancedMesh || N.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null) return;
		_();
		const k = N.attributes,
			J = V.getAttributes(),
			se = R.defaultAttributeValues;
		for (const A in J) {
			const Y = J[A];
			if (Y.location >= 0) {
				let de = k[A];
				if (de === void 0 && (A === "instanceMatrix" && E.instanceMatrix && (de = E.instanceMatrix), A === "instanceColor" && E.instanceColor && (de = E.instanceColor)), de !== void 0) {
					const U = de.normalized,
						W = de.itemSize,
						te = t.get(de);
					if (te === void 0) continue;
					const q = te.buffer,
						oe = te.type,
						ce = te.bytesPerElement;
					if (de.isInterleavedBufferAttribute) {
						const ie = de.data,
							me = ie.stride,
							we = de.offset;
						if (ie && ie.isInstancedInterleavedBuffer) {
							for (let j = 0; j < Y.locationSize; j++) x(Y.location + j, ie.meshPerAttribute);
							E.isInstancedMesh !== !0 && N._maxInstanceCount === void 0 && (N._maxInstanceCount = ie.meshPerAttribute * ie.count)
						} else
							for (let j = 0; j < Y.locationSize; j++) w(Y.location + j);
						r.bindBuffer(34962, q);
						for (let j = 0; j < Y.locationSize; j++) b(Y.location + j, W / Y.locationSize, oe, U, me * ce, (we + W / Y.locationSize * j) * ce)
					} else {
						if (de.isInstancedBufferAttribute) {
							for (let ie = 0; ie < Y.locationSize; ie++) x(Y.location + ie, de.meshPerAttribute);
							E.isInstancedMesh !== !0 && N._maxInstanceCount === void 0 && (N._maxInstanceCount = de.meshPerAttribute * de.count)
						} else
							for (let ie = 0; ie < Y.locationSize; ie++) w(Y.location + ie);
						r.bindBuffer(34962, q);
						for (let ie = 0; ie < Y.locationSize; ie++) b(Y.location + ie, W / Y.locationSize, oe, U, W * ce, W / Y.locationSize * ie * ce)
					}
				} else if (se !== void 0) {
					const U = se[A];
					if (U !== void 0) switch (U.length) {
						case 2:
							r.vertexAttrib2fv(Y.location, U);
							break;
						case 3:
							r.vertexAttrib3fv(Y.location, U);
							break;
						case 4:
							r.vertexAttrib4fv(Y.location, U);
							break;
						default:
							r.vertexAttrib1fv(Y.location, U)
					}
				}
			}
		}
		y()
	}

	function D() {
		P();
		for (const E in a) {
			const R = a[E];
			for (const V in R) {
				const N = R[V];
				for (const k in N) d(N[k].object), delete N[k];
				delete R[V]
			}
			delete a[E]
		}
	}

	function O(E) {
		if (a[E.id] === void 0) return;
		const R = a[E.id];
		for (const V in R) {
			const N = R[V];
			for (const k in N) d(N[k].object), delete N[k];
			delete R[V]
		}
		delete a[E.id]
	}

	function z(E) {
		for (const R in a) {
			const V = a[R];
			if (V[E.id] === void 0) continue;
			const N = V[E.id];
			for (const k in N) d(N[k].object), delete N[k];
			delete V[E.id]
		}
	}

	function P() {
		M(), c !== l && (c = l, f(c.object))
	}

	function M() {
		l.geometry = null, l.program = null, l.wireframe = !1
	}
	return {
		setup: h,
		reset: P,
		resetDefaultState: M,
		dispose: D,
		releaseStatesOfGeometry: O,
		releaseStatesOfProgram: z,
		initAttributes: _,
		enableAttribute: w,
		disableUnusedAttributes: y
	}
}

function $M(r, e, t, n) {
	const i = n.isWebGL2;
	let s;

	function o(c) {
		s = c
	}

	function a(c, h) {
		r.drawArrays(s, c, h), t.update(h, s, 1)
	}

	function l(c, h, u) {
		if (u === 0) return;
		let f, d;
		if (i) f = r, d = "drawArraysInstanced";
		else if (f = e.get("ANGLE_instanced_arrays"), d = "drawArraysInstancedANGLE", f === null) {
			console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
			return
		}
		f[d](s, c, h, u), t.update(h, s, u)
	}
	this.setMode = o, this.render = a, this.renderInstances = l
}

function ZM(r, e, t) {
	let n;

	function i() {
		if (n !== void 0) return n;
		if (e.has("EXT_texture_filter_anisotropic") === !0) {
			const S = e.get("EXT_texture_filter_anisotropic");
			n = r.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
		} else n = 0;
		return n
	}

	function s(S) {
		if (S === "highp") {
			if (r.getShaderPrecisionFormat(35633, 36338).precision > 0 && r.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
			S = "mediump"
		}
		return S === "mediump" && r.getShaderPrecisionFormat(35633, 36337).precision > 0 && r.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
	}
	const o = typeof WebGL2RenderingContext < "u" && r instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext < "u" && r instanceof WebGL2ComputeRenderingContext;
	let a = t.precision !== void 0 ? t.precision : "highp";
	const l = s(a);
	l !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", l, "instead."), a = l);
	const c = o || e.has("WEBGL_draw_buffers"),
		h = t.logarithmicDepthBuffer === !0,
		u = r.getParameter(34930),
		f = r.getParameter(35660),
		d = r.getParameter(3379),
		p = r.getParameter(34076),
		m = r.getParameter(34921),
		v = r.getParameter(36347),
		g = r.getParameter(36348),
		_ = r.getParameter(36349),
		w = f > 0,
		x = o || e.has("OES_texture_float"),
		y = w && x,
		b = o ? r.getParameter(36183) : 0;
	return {
		isWebGL2: o,
		drawBuffers: c,
		getMaxAnisotropy: i,
		getMaxPrecision: s,
		precision: a,
		logarithmicDepthBuffer: h,
		maxTextures: u,
		maxVertexTextures: f,
		maxTextureSize: d,
		maxCubemapSize: p,
		maxAttributes: m,
		maxVertexUniforms: v,
		maxVaryings: g,
		maxFragmentUniforms: _,
		vertexTextures: w,
		floatFragmentTextures: x,
		floatVertexTextures: y,
		maxSamples: b
	}
}

function JM(r) {
	const e = this;
	let t = null,
		n = 0,
		i = !1,
		s = !1;
	const o = new Ii,
		a = new Jt,
		l = {
			value: null,
			needsUpdate: !1
		};
	this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, f, d) {
		const p = u.length !== 0 || f || n !== 0 || i;
		return i = f, t = h(u, d, 0), n = u.length, p
	}, this.beginShadows = function() {
		s = !0, h(null)
	}, this.endShadows = function() {
		s = !1, c()
	}, this.setState = function(u, f, d) {
		const p = u.clippingPlanes,
			m = u.clipIntersection,
			v = u.clipShadows,
			g = r.get(u);
		if (!i || p === null || p.length === 0 || s && !v) s ? h(null) : c();
		else {
			const _ = s ? 0 : n,
				w = _ * 4;
			let x = g.clippingState || null;
			l.value = x, x = h(p, f, w, d);
			for (let y = 0; y !== w; ++y) x[y] = t[y];
			g.clippingState = x, this.numIntersection = m ? this.numPlanes : 0, this.numPlanes += _
		}
	};

	function c() {
		l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0
	}

	function h(u, f, d, p) {
		const m = u !== null ? u.length : 0;
		let v = null;
		if (m !== 0) {
			if (v = l.value, p !== !0 || v === null) {
				const g = d + m * 4,
					_ = f.matrixWorldInverse;
				a.getNormalMatrix(_), (v === null || v.length < g) && (v = new Float32Array(g));
				for (let w = 0, x = d; w !== m; ++w, x += 4) o.copy(u[w]).applyMatrix4(_, a), o.normal.toArray(v, x), v[x + 3] = o.constant
			}
			l.value = v, l.needsUpdate = !0
		}
		return e.numPlanes = m, e.numIntersection = 0, v
	}
}

function QM(r) {
	let e = new WeakMap;

	function t(o, a) {
		return a === lu ? o.mapping = wa : a === cu && (o.mapping = ba), o
	}

	function n(o) {
		if (o && o.isTexture && o.isRenderTargetTexture === !1) {
			const a = o.mapping;
			if (a === lu || a === cu)
				if (e.has(o)) {
					const l = e.get(o).texture;
					return t(l, o.mapping)
				} else {
					const l = o.image;
					if (l && l.height > 0) {
						const c = r.getRenderTarget(),
							h = new n0(l.height / 2);
						return h.fromEquirectangularTexture(r, o), e.set(o, h), r.setRenderTarget(c), o.addEventListener("dispose", i), t(h.texture, o.mapping)
					} else return null
				}
		}
		return o
	}

	function i(o) {
		const a = o.target;
		a.removeEventListener("dispose", i);
		const l = e.get(a);
		l !== void 0 && (e.delete(a), l.dispose())
	}

	function s() {
		e = new WeakMap
	}
	return {
		get: n,
		dispose: s
	}
}
class vc extends mf {
	constructor(e = -1, t = 1, n = 1, i = -1, s = .1, o = 2e3) {
		super(), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = s, this.far = o, this.updateProjectionMatrix()
	}
	copy(e, t) {
		return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this
	}
	setViewOffset(e, t, n, i, s, o) {
		this.view === null && (this.view = {
			enabled: !0,
			fullWidth: 1,
			fullHeight: 1,
			offsetX: 0,
			offsetY: 0,
			width: 1,
			height: 1
		}), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = o, this.updateProjectionMatrix()
	}
	clearViewOffset() {
		this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix()
	}
	updateProjectionMatrix() {
		const e = (this.right - this.left) / (2 * this.zoom),
			t = (this.top - this.bottom) / (2 * this.zoom),
			n = (this.right + this.left) / 2,
			i = (this.top + this.bottom) / 2;
		let s = n - e,
			o = n + e,
			a = i + t,
			l = i - t;
		if (this.view !== null && this.view.enabled) {
			const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
				h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
			s += c * this.view.offsetX, o = s + c * this.view.width, a -= h * this.view.offsetY, l = a - h * this.view.height
		}
		this.projectionMatrix.makeOrthographic(s, o, a, l, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
	}
	toJSON(e) {
		const t = super.toJSON(e);
		return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t
	}
}
vc.prototype.isOrthographicCamera = !0;
class xc extends vr {
	constructor(e) {
		super(e), this.type = "RawShaderMaterial"
	}
}
xc.prototype.isRawShaderMaterial = !0;
const Xs = 4,
	ur = 8,
	ui = Math.pow(2, ur),
	r0 = [.125, .215, .35, .446, .526, .582],
	s0 = ur - Xs + 1 + r0.length,
	xs = 20,
	nc = {
		[li]: 0,
		[oo]: 1
	},
	gh = new vc,
	{
		_lodPlanes: To,
		_sizeLods: $d,
		_sigmas: al
	} = eS(),
	Zd = new De;
let _h = null;
const Dr = (1 + Math.sqrt(5)) / 2,
	ys = 1 / Dr,
	Jd = [new I(1, 1, 1), new I(-1, 1, 1), new I(1, 1, -1), new I(-1, 1, -1), new I(0, Dr, ys), new I(0, Dr, -ys), new I(ys, 0, Dr), new I(-ys, 0, Dr), new I(Dr, ys, 0), new I(-Dr, ys, 0)];
class KM {
	constructor(e) {
		this._renderer = e, this._pingPongRenderTarget = null, this._blurMaterial = tS(xs), this._equirectShader = null, this._cubemapShader = null, this._compileMaterial(this._blurMaterial)
	}
	fromScene(e, t = 0, n = .1, i = 100) {
		_h = this._renderer.getRenderTarget();
		const s = this._allocateTargets();
		return this._sceneToCubeUV(e, n, i, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s
	}
	fromEquirectangular(e) {
		return this._fromTexture(e)
	}
	fromCubemap(e) {
		return this._fromTexture(e)
	}
	compileCubemapShader() {
		this._cubemapShader === null && (this._cubemapShader = ep(), this._compileMaterial(this._cubemapShader))
	}
	compileEquirectangularShader() {
		this._equirectShader === null && (this._equirectShader = Kd(), this._compileMaterial(this._equirectShader))
	}
	dispose() {
		this._blurMaterial.dispose(), this._cubemapShader !== null && this._cubemapShader.dispose(), this._equirectShader !== null && this._equirectShader.dispose();
		for (let e = 0; e < To.length; e++) To[e].dispose()
	}
	_cleanup(e) {
		this._pingPongRenderTarget.dispose(), this._renderer.setRenderTarget(_h), e.scissorTest = !1, ll(e, 0, 0, e.width, e.height)
	}
	_fromTexture(e) {
		_h = this._renderer.getRenderTarget();
		const t = this._allocateTargets(e);
		return this._textureToCubeUV(e, t), this._applyPMREM(t), this._cleanup(t), t
	}
	_allocateTargets(e) {
		const t = {
				magFilter: gn,
				minFilter: gn,
				generateMipmaps: !1,
				type: Xr,
				format: Xt,
				encoding: li,
				depthBuffer: !1
			},
			n = Qd(t);
		return n.depthBuffer = !e, this._pingPongRenderTarget = Qd(t), n
	}
	_compileMaterial(e) {
		const t = new vn(To[0], e);
		this._renderer.compile(t, gh)
	}
	_sceneToCubeUV(e, t, n, i) {
		const a = new Sn(90, 1, t, n),
			l = [1, -1, 1, 1, 1, 1],
			c = [1, 1, 1, -1, -1, -1],
			h = this._renderer,
			u = h.autoClear,
			f = h.toneMapping;
		h.getClearColor(Zd), h.toneMapping = cr, h.autoClear = !1;
		const d = new pf({
				name: "PMREM.Background",
				side: zt,
				depthWrite: !1,
				depthTest: !1
			}),
			p = new vn(new Ma, d);
		let m = !1;
		const v = e.background;
		v ? v.isColor && (d.color.copy(v), e.background = null, m = !0) : (d.color.copy(Zd), m = !0);
		for (let g = 0; g < 6; g++) {
			const _ = g % 3;
			_ == 0 ? (a.up.set(0, l[g], 0), a.lookAt(c[g], 0, 0)) : _ == 1 ? (a.up.set(0, 0, l[g]), a.lookAt(0, c[g], 0)) : (a.up.set(0, l[g], 0), a.lookAt(0, 0, c[g])), ll(i, _ * ui, g > 2 ? ui : 0, ui, ui), h.setRenderTarget(i), m && h.render(p, a), h.render(e, a)
		}
		p.geometry.dispose(), p.material.dispose(), h.toneMapping = f, h.autoClear = u, e.background = v
	}
	_setEncoding(e, t) {
		this._renderer.capabilities.isWebGL2 === !0 && t.format === Xt && t.type === Bi && t.encoding === oo ? e.value = nc[li] : e.value = nc[t.encoding]
	}
	_textureToCubeUV(e, t) {
		const n = this._renderer,
			i = e.mapping === wa || e.mapping === ba;
		i ? this._cubemapShader == null && (this._cubemapShader = ep()) : this._equirectShader == null && (this._equirectShader = Kd());
		const s = i ? this._cubemapShader : this._equirectShader,
			o = new vn(To[0], s),
			a = s.uniforms;
		a.envMap.value = e, i || a.texelSize.value.set(1 / e.image.width, 1 / e.image.height), this._setEncoding(a.inputEncoding, e), ll(t, 0, 0, 3 * ui, 2 * ui), n.setRenderTarget(t), n.render(o, gh)
	}
	_applyPMREM(e) {
		const t = this._renderer,
			n = t.autoClear;
		t.autoClear = !1;
		for (let i = 1; i < s0; i++) {
			const s = Math.sqrt(al[i] * al[i] - al[i - 1] * al[i - 1]),
				o = Jd[(i - 1) % Jd.length];
			this._blur(e, i - 1, i, s, o)
		}
		t.autoClear = n
	}
	_blur(e, t, n, i, s) {
		const o = this._pingPongRenderTarget;
		this._halfBlur(e, o, t, n, i, "latitudinal", s), this._halfBlur(o, e, n, n, i, "longitudinal", s)
	}
	_halfBlur(e, t, n, i, s, o, a) {
		const l = this._renderer,
			c = this._blurMaterial;
		o !== "latitudinal" && o !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
		const h = 3,
			u = new vn(To[i], c),
			f = c.uniforms,
			d = $d[n] - 1,
			p = isFinite(s) ? Math.PI / (2 * d) : 2 * Math.PI / (2 * xs - 1),
			m = s / p,
			v = isFinite(s) ? 1 + Math.floor(h * m) : xs;
		v > xs && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${xs}`);
		const g = [];
		let _ = 0;
		for (let b = 0; b < xs; ++b) {
			const S = b / m,
				D = Math.exp(-S * S / 2);
			g.push(D), b == 0 ? _ += D : b < v && (_ += 2 * D)
		}
		for (let b = 0; b < g.length; b++) g[b] = g[b] / _;
		f.envMap.value = e.texture, f.samples.value = v, f.weights.value = g, f.latitudinal.value = o === "latitudinal", a && (f.poleAxis.value = a), f.dTheta.value = p, f.mipInt.value = ur - n;
		const w = $d[i],
			x = 3 * Math.max(0, ui - 2 * w),
			y = (i === 0 ? 0 : 2 * ui) + 2 * w * (i > ur - Xs ? i - ur + Xs : 0);
		ll(t, x, y, 3 * w, 2 * w), l.setRenderTarget(t), l.render(u, gh)
	}
}

function eS() {
	const r = [],
		e = [],
		t = [];
	let n = ur;
	for (let i = 0; i < s0; i++) {
		const s = Math.pow(2, n);
		e.push(s);
		let o = 1 / s;
		i > ur - Xs ? o = r0[i - ur + Xs - 1] : i == 0 && (o = 0), t.push(o);
		const a = 1 / (s - 1),
			l = -a / 2,
			c = 1 + a / 2,
			h = [l, l, c, l, c, c, l, l, c, c, l, c],
			u = 6,
			f = 6,
			d = 3,
			p = 2,
			m = 1,
			v = new Float32Array(d * f * u),
			g = new Float32Array(p * f * u),
			_ = new Float32Array(m * f * u);
		for (let x = 0; x < u; x++) {
			const y = x % 3 * 2 / 3 - 1,
				b = x > 2 ? 0 : -1,
				S = [y, b, 0, y + 2 / 3, b, 0, y + 2 / 3, b + 1, 0, y, b, 0, y + 2 / 3, b + 1, 0, y, b + 1, 0];
			v.set(S, d * f * x), g.set(h, p * f * x);
			const D = [x, x, x, x, x, x];
			_.set(D, m * f * x)
		}
		const w = new pt;
		w.setAttribute("position", new Bt(v, d)), w.setAttribute("uv", new Bt(g, p)), w.setAttribute("faceIndex", new Bt(_, m)), r.push(w), n > Xs && n--
	}
	return {
		_lodPlanes: r,
		_sizeLods: e,
		_sigmas: t
	}
}

function Qd(r) {
	const e = new Kn(3 * ui, 3 * ui, r);
	return e.texture.mapping = uc, e.texture.name = "PMREM.cubeUv", e.scissorTest = !0, e
}

function ll(r, e, t, n, i) {
	r.viewport.set(e, t, n, i), r.scissor.set(e, t, n, i)
}

function tS(r) {
	const e = new Float32Array(r),
		t = new I(0, 1, 0);
	return new xc({
		name: "SphericalGaussianBlur",
		defines: {
			n: r
		},
		uniforms: {
			envMap: {
				value: null
			},
			samples: {
				value: 1
			},
			weights: {
				value: e
			},
			latitudinal: {
				value: !1
			},
			dTheta: {
				value: 0
			},
			mipInt: {
				value: 0
			},
			poleAxis: {
				value: t
			}
		},
		vertexShader: _f(),
		fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${vf()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
		blending: lr,
		depthTest: !1,
		depthWrite: !1
	})
}

function Kd() {
	const r = new fe(1, 1);
	return new xc({
		name: "EquirectangularToCubeUV",
		uniforms: {
			envMap: {
				value: null
			},
			texelSize: {
				value: r
			},
			inputEncoding: {
				value: nc[li]
			}
		},
		vertexShader: _f(),
		fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${vf()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

			}
		`,
		blending: lr,
		depthTest: !1,
		depthWrite: !1
	})
}

function ep() {
	return new xc({
		name: "CubemapToCubeUV",
		uniforms: {
			envMap: {
				value: null
			},
			inputEncoding: {
				value: nc[li]
			}
		},
		vertexShader: _f(),
		fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${vf()}

			void main() {

				gl_FragColor = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) );

			}
		`,
		blending: lr,
		depthTest: !1,
		depthWrite: !1
	})
}

function _f() {
	return `

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
}

function vf() {
	return `

		uniform int inputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else {

				return sRGBToLinear( value );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`
}

function nS(r) {
	let e = new WeakMap,
		t = null;

	function n(a) {
		if (a && a.isTexture && a.isRenderTargetTexture === !1) {
			const l = a.mapping,
				c = l === lu || l === cu,
				h = l === wa || l === ba;
			if (c || h) {
				if (e.has(a)) return e.get(a).texture;
				{
					const u = a.image;
					if (c && u && u.height > 0 || h && u && i(u)) {
						const f = r.getRenderTarget();
						t === null && (t = new KM(r));
						const d = c ? t.fromEquirectangular(a) : t.fromCubemap(a);
						return e.set(a, d), r.setRenderTarget(f), a.addEventListener("dispose", s), d.texture
					} else return null
				}
			}
		}
		return a
	}

	function i(a) {
		let l = 0;
		const c = 6;
		for (let h = 0; h < c; h++) a[h] !== void 0 && l++;
		return l === c
	}

	function s(a) {
		const l = a.target;
		l.removeEventListener("dispose", s);
		const c = e.get(l);
		c !== void 0 && (e.delete(l), c.dispose())
	}

	function o() {
		e = new WeakMap, t !== null && (t.dispose(), t = null)
	}
	return {
		get: n,
		dispose: o
	}
}

function iS(r) {
	const e = {};

	function t(n) {
		if (e[n] !== void 0) return e[n];
		let i;
		switch (n) {
			case "WEBGL_depth_texture":
				i = r.getExtension("WEBGL_depth_texture") || r.getExtension("MOZ_WEBGL_depth_texture") || r.getExtension("WEBKIT_WEBGL_depth_texture");
				break;
			case "EXT_texture_filter_anisotropic":
				i = r.getExtension("EXT_texture_filter_anisotropic") || r.getExtension("MOZ_EXT_texture_filter_anisotropic") || r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
				break;
			case "WEBGL_compressed_texture_s3tc":
				i = r.getExtension("WEBGL_compressed_texture_s3tc") || r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
				break;
			case "WEBGL_compressed_texture_pvrtc":
				i = r.getExtension("WEBGL_compressed_texture_pvrtc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
				break;
			default:
				i = r.getExtension(n)
		}
		return e[n] = i, i
	}
	return {
		has: function(n) {
			return t(n) !== null
		},
		init: function(n) {
			n.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture")
		},
		get: function(n) {
			const i = t(n);
			return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i
		}
	}
}

function rS(r, e, t, n) {
	const i = {},
		s = new WeakMap;

	function o(u) {
		const f = u.target;
		f.index !== null && e.remove(f.index);
		for (const p in f.attributes) e.remove(f.attributes[p]);
		f.removeEventListener("dispose", o), delete i[f.id];
		const d = s.get(f);
		d && (e.remove(d), s.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount, t.memory.geometries--
	}

	function a(u, f) {
		return i[f.id] === !0 || (f.addEventListener("dispose", o), i[f.id] = !0, t.memory.geometries++), f
	}

	function l(u) {
		const f = u.attributes;
		for (const p in f) e.update(f[p], 34962);
		const d = u.morphAttributes;
		for (const p in d) {
			const m = d[p];
			for (let v = 0, g = m.length; v < g; v++) e.update(m[v], 34962)
		}
	}

	function c(u) {
		const f = [],
			d = u.index,
			p = u.attributes.position;
		let m = 0;
		if (d !== null) {
			const _ = d.array;
			m = d.version;
			for (let w = 0, x = _.length; w < x; w += 3) {
				const y = _[w + 0],
					b = _[w + 1],
					S = _[w + 2];
				f.push(y, b, b, S, S, y)
			}
		} else {
			const _ = p.array;
			m = p.version;
			for (let w = 0, x = _.length / 3 - 1; w < x; w += 3) {
				const y = w + 0,
					b = w + 1,
					S = w + 2;
				f.push(y, b, b, S, S, y)
			}
		}
		const v = new(Z_(f) > 65535 ? t0 : e0)(f, 1);
		v.version = m;
		const g = s.get(u);
		g && e.remove(g), s.set(u, v)
	}

	function h(u) {
		const f = s.get(u);
		if (f) {
			const d = u.index;
			d !== null && f.version < d.version && c(u)
		} else c(u);
		return s.get(u)
	}
	return {
		get: a,
		update: l,
		getWireframeAttribute: h
	}
}

function sS(r, e, t, n) {
	const i = n.isWebGL2;
	let s;

	function o(f) {
		s = f
	}
	let a, l;

	function c(f) {
		a = f.type, l = f.bytesPerElement
	}

	function h(f, d) {
		r.drawElements(s, d, a, f * l), t.update(d, s, 1)
	}

	function u(f, d, p) {
		if (p === 0) return;
		let m, v;
		if (i) m = r, v = "drawElementsInstanced";
		else if (m = e.get("ANGLE_instanced_arrays"), v = "drawElementsInstancedANGLE", m === null) {
			console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
			return
		}
		m[v](s, d, a, f * l, p), t.update(d, s, p)
	}
	this.setMode = o, this.setIndex = c, this.render = h, this.renderInstances = u
}

function oS(r) {
	const e = {
			geometries: 0,
			textures: 0
		},
		t = {
			frame: 0,
			calls: 0,
			triangles: 0,
			points: 0,
			lines: 0
		};

	function n(s, o, a) {
		switch (t.calls++, o) {
			case 4:
				t.triangles += a * (s / 3);
				break;
			case 1:
				t.lines += a * (s / 2);
				break;
			case 3:
				t.lines += a * (s - 1);
				break;
			case 2:
				t.lines += a * s;
				break;
			case 0:
				t.points += a * s;
				break;
			default:
				console.error("THREE.WebGLInfo: Unknown draw mode:", o);
				break
		}
	}

	function i() {
		t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0
	}
	return {
		memory: e,
		render: t,
		programs: null,
		autoReset: !0,
		reset: i,
		update: n
	}
}
class xf extends sn {
	constructor(e = null, t = 1, n = 1, i = 1) {
		super(null), this.image = {
			data: e,
			width: t,
			height: n,
			depth: i
		}, this.magFilter = Pt, this.minFilter = Pt, this.wrapR = Vn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
	}
}
xf.prototype.isDataTexture2DArray = !0;

function aS(r, e) {
	return r[0] - e[0]
}

function lS(r, e) {
	return Math.abs(e[1]) - Math.abs(r[1])
}

function tp(r, e) {
	let t = 1;
	const n = e.isInterleavedBufferAttribute ? e.data.array : e.array;
	n instanceof Int8Array ? t = 127 : n instanceof Int16Array ? t = 32767 : n instanceof Int32Array ? t = 2147483647 : console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ", n), r.divideScalar(t)
}

function cS(r, e, t) {
	const n = {},
		i = new Float32Array(8),
		s = new WeakMap,
		o = new I,
		a = [];
	for (let c = 0; c < 8; c++) a[c] = [c, 0];

	function l(c, h, u, f) {
		const d = c.morphTargetInfluences;
		if (e.isWebGL2 === !0) {
			const p = h.morphAttributes.position.length;
			let m = s.get(h);
			if (m === void 0 || m.count !== p) {
				m !== void 0 && m.texture.dispose();
				const _ = h.morphAttributes.normal !== void 0,
					w = h.morphAttributes.position,
					x = h.morphAttributes.normal || [],
					y = h.attributes.position.count,
					b = _ === !0 ? 2 : 1;
				let S = y * b,
					D = 1;
				S > e.maxTextureSize && (D = Math.ceil(S / e.maxTextureSize), S = e.maxTextureSize);
				const O = new Float32Array(S * D * 4 * p),
					z = new xf(O, S, D, p);
				z.format = Xt, z.type = zi, z.needsUpdate = !0;
				const P = b * 4;
				for (let M = 0; M < p; M++) {
					const E = w[M],
						R = x[M],
						V = S * D * 4 * M;
					for (let N = 0; N < E.count; N++) {
						o.fromBufferAttribute(E, N), E.normalized === !0 && tp(o, E);
						const k = N * P;
						O[V + k + 0] = o.x, O[V + k + 1] = o.y, O[V + k + 2] = o.z, O[V + k + 3] = 0, _ === !0 && (o.fromBufferAttribute(R, N), R.normalized === !0 && tp(o, R), O[V + k + 4] = o.x, O[V + k + 5] = o.y, O[V + k + 6] = o.z, O[V + k + 7] = 0)
					}
				}
				m = {
					count: p,
					texture: z,
					size: new fe(S, D)
				}, s.set(h, m)
			}
			let v = 0;
			for (let _ = 0; _ < d.length; _++) v += d[_];
			const g = h.morphTargetsRelative ? 1 : 1 - v;
			f.getUniforms().setValue(r, "morphTargetBaseInfluence", g), f.getUniforms().setValue(r, "morphTargetInfluences", d), f.getUniforms().setValue(r, "morphTargetsTexture", m.texture, t), f.getUniforms().setValue(r, "morphTargetsTextureSize", m.size)
		} else {
			const p = d === void 0 ? 0 : d.length;
			let m = n[h.id];
			if (m === void 0 || m.length !== p) {
				m = [];
				for (let x = 0; x < p; x++) m[x] = [x, 0];
				n[h.id] = m
			}
			for (let x = 0; x < p; x++) {
				const y = m[x];
				y[0] = x, y[1] = d[x]
			}
			m.sort(lS);
			for (let x = 0; x < 8; x++) x < p && m[x][1] ? (a[x][0] = m[x][0], a[x][1] = m[x][1]) : (a[x][0] = Number.MAX_SAFE_INTEGER, a[x][1] = 0);
			a.sort(aS);
			const v = h.morphAttributes.position,
				g = h.morphAttributes.normal;
			let _ = 0;
			for (let x = 0; x < 8; x++) {
				const y = a[x],
					b = y[0],
					S = y[1];
				b !== Number.MAX_SAFE_INTEGER && S ? (v && h.getAttribute("morphTarget" + x) !== v[b] && h.setAttribute("morphTarget" + x, v[b]), g && h.getAttribute("morphNormal" + x) !== g[b] && h.setAttribute("morphNormal" + x, g[b]), i[x] = S, _ += S) : (v && h.hasAttribute("morphTarget" + x) === !0 && h.deleteAttribute("morphTarget" + x), g && h.hasAttribute("morphNormal" + x) === !0 && h.deleteAttribute("morphNormal" + x), i[x] = 0)
			}
			const w = h.morphTargetsRelative ? 1 : 1 - _;
			f.getUniforms().setValue(r, "morphTargetBaseInfluence", w), f.getUniforms().setValue(r, "morphTargetInfluences", i)
		}
	}
	return {
		update: l
	}
}

function hS(r, e, t, n) {
	let i = new WeakMap;

	function s(l) {
		const c = n.render.frame,
			h = l.geometry,
			u = e.get(l, h);
		return i.get(u) !== c && (e.update(u), i.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === !1 && l.addEventListener("dispose", a), t.update(l.instanceMatrix, 34962), l.instanceColor !== null && t.update(l.instanceColor, 34962)), u
	}

	function o() {
		i = new WeakMap
	}

	function a(l) {
		const c = l.target;
		c.removeEventListener("dispose", a), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor)
	}
	return {
		update: s,
		dispose: o
	}
}
class o0 extends sn {
	constructor(e = null, t = 1, n = 1, i = 1) {
		super(null), this.image = {
			data: e,
			width: t,
			height: n,
			depth: i
		}, this.magFilter = Pt, this.minFilter = Pt, this.wrapR = Vn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
	}
}
o0.prototype.isDataTexture3D = !0;
const a0 = new sn,
	l0 = new xf,
	c0 = new o0,
	h0 = new mc,
	np = [],
	ip = [],
	rp = new Float32Array(16),
	sp = new Float32Array(9),
	op = new Float32Array(4);

function uo(r, e, t) {
	const n = r[0];
	if (n <= 0 || n > 0) return r;
	const i = e * t;
	let s = np[i];
	if (s === void 0 && (s = new Float32Array(i), np[i] = s), e !== 0) {
		n.toArray(s, 0);
		for (let o = 1, a = 0; o !== e; ++o) a += t, r[o].toArray(s, a)
	}
	return s
}

function xn(r, e) {
	if (r.length !== e.length) return !1;
	for (let t = 0, n = r.length; t < n; t++)
		if (r[t] !== e[t]) return !1;
	return !0
}

function rn(r, e) {
	for (let t = 0, n = e.length; t < n; t++) r[t] = e[t]
}

function yc(r, e) {
	let t = ip[e];
	t === void 0 && (t = new Int32Array(e), ip[e] = t);
	for (let n = 0; n !== e; ++n) t[n] = r.allocateTextureUnit();
	return t
}

function uS(r, e) {
	const t = this.cache;
	t[0] !== e && (r.uniform1f(this.addr, e), t[0] = e)
}

function fS(r, e) {
	const t = this.cache;
	if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y) && (r.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
	else {
		if (xn(t, e)) return;
		r.uniform2fv(this.addr, e), rn(t, e)
	}
}

function dS(r, e) {
	const t = this.cache;
	if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
	else if (e.r !== void 0)(t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (r.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
	else {
		if (xn(t, e)) return;
		r.uniform3fv(this.addr, e), rn(t, e)
	}
}

function pS(r, e) {
	const t = this.cache;
	if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
	else {
		if (xn(t, e)) return;
		r.uniform4fv(this.addr, e), rn(t, e)
	}
}

function mS(r, e) {
	const t = this.cache,
		n = e.elements;
	if (n === void 0) {
		if (xn(t, e)) return;
		r.uniformMatrix2fv(this.addr, !1, e), rn(t, e)
	} else {
		if (xn(t, n)) return;
		op.set(n), r.uniformMatrix2fv(this.addr, !1, op), rn(t, n)
	}
}

function gS(r, e) {
	const t = this.cache,
		n = e.elements;
	if (n === void 0) {
		if (xn(t, e)) return;
		r.uniformMatrix3fv(this.addr, !1, e), rn(t, e)
	} else {
		if (xn(t, n)) return;
		sp.set(n), r.uniformMatrix3fv(this.addr, !1, sp), rn(t, n)
	}
}

function _S(r, e) {
	const t = this.cache,
		n = e.elements;
	if (n === void 0) {
		if (xn(t, e)) return;
		r.uniformMatrix4fv(this.addr, !1, e), rn(t, e)
	} else {
		if (xn(t, n)) return;
		rp.set(n), r.uniformMatrix4fv(this.addr, !1, rp), rn(t, n)
	}
}

function vS(r, e) {
	const t = this.cache;
	t[0] !== e && (r.uniform1i(this.addr, e), t[0] = e)
}

function xS(r, e) {
	const t = this.cache;
	xn(t, e) || (r.uniform2iv(this.addr, e), rn(t, e))
}

function yS(r, e) {
	const t = this.cache;
	xn(t, e) || (r.uniform3iv(this.addr, e), rn(t, e))
}

function wS(r, e) {
	const t = this.cache;
	xn(t, e) || (r.uniform4iv(this.addr, e), rn(t, e))
}

function bS(r, e) {
	const t = this.cache;
	t[0] !== e && (r.uniform1ui(this.addr, e), t[0] = e)
}

function MS(r, e) {
	const t = this.cache;
	xn(t, e) || (r.uniform2uiv(this.addr, e), rn(t, e))
}

function SS(r, e) {
	const t = this.cache;
	xn(t, e) || (r.uniform3uiv(this.addr, e), rn(t, e))
}

function TS(r, e) {
	const t = this.cache;
	xn(t, e) || (r.uniform4uiv(this.addr, e), rn(t, e))
}

function ES(r, e, t) {
	const n = this.cache,
		i = t.allocateTextureUnit();
	n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.safeSetTexture2D(e || a0, i)
}

function AS(r, e, t) {
	const n = this.cache,
		i = t.allocateTextureUnit();
	n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || c0, i)
}

function CS(r, e, t) {
	const n = this.cache,
		i = t.allocateTextureUnit();
	n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.safeSetTextureCube(e || h0, i)
}

function LS(r, e, t) {
	const n = this.cache,
		i = t.allocateTextureUnit();
	n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || l0, i)
}

function RS(r) {
	switch (r) {
		case 5126:
			return uS;
		case 35664:
			return fS;
		case 35665:
			return dS;
		case 35666:
			return pS;
		case 35674:
			return mS;
		case 35675:
			return gS;
		case 35676:
			return _S;
		case 5124:
		case 35670:
			return vS;
		case 35667:
		case 35671:
			return xS;
		case 35668:
		case 35672:
			return yS;
		case 35669:
		case 35673:
			return wS;
		case 5125:
			return bS;
		case 36294:
			return MS;
		case 36295:
			return SS;
		case 36296:
			return TS;
		case 35678:
		case 36198:
		case 36298:
		case 36306:
		case 35682:
			return ES;
		case 35679:
		case 36299:
		case 36307:
			return AS;
		case 35680:
		case 36300:
		case 36308:
		case 36293:
			return CS;
		case 36289:
		case 36303:
		case 36311:
		case 36292:
			return LS
	}
}

function PS(r, e) {
	r.uniform1fv(this.addr, e)
}

function DS(r, e) {
	const t = uo(e, this.size, 2);
	r.uniform2fv(this.addr, t)
}

function IS(r, e) {
	const t = uo(e, this.size, 3);
	r.uniform3fv(this.addr, t)
}

function FS(r, e) {
	const t = uo(e, this.size, 4);
	r.uniform4fv(this.addr, t)
}

function zS(r, e) {
	const t = uo(e, this.size, 4);
	r.uniformMatrix2fv(this.addr, !1, t)
}

function OS(r, e) {
	const t = uo(e, this.size, 9);
	r.uniformMatrix3fv(this.addr, !1, t)
}

function NS(r, e) {
	const t = uo(e, this.size, 16);
	r.uniformMatrix4fv(this.addr, !1, t)
}

function BS(r, e) {
	r.uniform1iv(this.addr, e)
}

function kS(r, e) {
	r.uniform2iv(this.addr, e)
}

function US(r, e) {
	r.uniform3iv(this.addr, e)
}

function VS(r, e) {
	r.uniform4iv(this.addr, e)
}

function HS(r, e) {
	r.uniform1uiv(this.addr, e)
}

function GS(r, e) {
	r.uniform2uiv(this.addr, e)
}

function WS(r, e) {
	r.uniform3uiv(this.addr, e)
}

function qS(r, e) {
	r.uniform4uiv(this.addr, e)
}

function XS(r, e, t) {
	const n = e.length,
		i = yc(t, n);
	r.uniform1iv(this.addr, i);
	for (let s = 0; s !== n; ++s) t.safeSetTexture2D(e[s] || a0, i[s])
}

function YS(r, e, t) {
	const n = e.length,
		i = yc(t, n);
	r.uniform1iv(this.addr, i);
	for (let s = 0; s !== n; ++s) t.setTexture3D(e[s] || c0, i[s])
}

function jS(r, e, t) {
	const n = e.length,
		i = yc(t, n);
	r.uniform1iv(this.addr, i);
	for (let s = 0; s !== n; ++s) t.safeSetTextureCube(e[s] || h0, i[s])
}

function $S(r, e, t) {
	const n = e.length,
		i = yc(t, n);
	r.uniform1iv(this.addr, i);
	for (let s = 0; s !== n; ++s) t.setTexture2DArray(e[s] || l0, i[s])
}

function ZS(r) {
	switch (r) {
		case 5126:
			return PS;
		case 35664:
			return DS;
		case 35665:
			return IS;
		case 35666:
			return FS;
		case 35674:
			return zS;
		case 35675:
			return OS;
		case 35676:
			return NS;
		case 5124:
		case 35670:
			return BS;
		case 35667:
		case 35671:
			return kS;
		case 35668:
		case 35672:
			return US;
		case 35669:
		case 35673:
			return VS;
		case 5125:
			return HS;
		case 36294:
			return GS;
		case 36295:
			return WS;
		case 36296:
			return qS;
		case 35678:
		case 36198:
		case 36298:
		case 36306:
		case 35682:
			return XS;
		case 35679:
		case 36299:
		case 36307:
			return YS;
		case 35680:
		case 36300:
		case 36308:
		case 36293:
			return jS;
		case 36289:
		case 36303:
		case 36311:
		case 36292:
			return $S
	}
}

function JS(r, e, t) {
	this.id = r, this.addr = t, this.cache = [], this.setValue = RS(e.type)
}

function u0(r, e, t) {
	this.id = r, this.addr = t, this.cache = [], this.size = e.size, this.setValue = ZS(e.type)
}
u0.prototype.updateCache = function(r) {
	const e = this.cache;
	r instanceof Float32Array && e.length !== r.length && (this.cache = new Float32Array(r.length)), rn(e, r)
};

function f0(r) {
	this.id = r, this.seq = [], this.map = {}
}
f0.prototype.setValue = function(r, e, t) {
	const n = this.seq;
	for (let i = 0, s = n.length; i !== s; ++i) {
		const o = n[i];
		o.setValue(r, e[o.id], t)
	}
};
const vh = /(\w+)(\])?(\[|\.)?/g;

function ap(r, e) {
	r.seq.push(e), r.map[e.id] = e
}

function QS(r, e, t) {
	const n = r.name,
		i = n.length;
	for (vh.lastIndex = 0;;) {
		const s = vh.exec(n),
			o = vh.lastIndex;
		let a = s[1];
		const l = s[2] === "]",
			c = s[3];
		if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === i) {
			ap(t, c === void 0 ? new JS(a, r, e) : new u0(a, r, e));
			break
		} else {
			let u = t.map[a];
			u === void 0 && (u = new f0(a), ap(t, u)), t = u
		}
	}
}

function fr(r, e) {
	this.seq = [], this.map = {};
	const t = r.getProgramParameter(e, 35718);
	for (let n = 0; n < t; ++n) {
		const i = r.getActiveUniform(e, n),
			s = r.getUniformLocation(e, i.name);
		QS(i, s, this)
	}
}
fr.prototype.setValue = function(r, e, t, n) {
	const i = this.map[e];
	i !== void 0 && i.setValue(r, t, n)
};
fr.prototype.setOptional = function(r, e, t) {
	const n = e[t];
	n !== void 0 && this.setValue(r, t, n)
};
fr.upload = function(r, e, t, n) {
	for (let i = 0, s = e.length; i !== s; ++i) {
		const o = e[i],
			a = t[o.id];
		a.needsUpdate !== !1 && o.setValue(r, a.value, n)
	}
};
fr.seqWithValue = function(r, e) {
	const t = [];
	for (let n = 0, i = r.length; n !== i; ++n) {
		const s = r[n];
		s.id in e && t.push(s)
	}
	return t
};

function lp(r, e, t) {
	const n = r.createShader(e);
	return r.shaderSource(n, t), r.compileShader(n), n
}
let KS = 0;

function eT(r) {
	const e = r.split(`
`);
	for (let t = 0; t < e.length; t++) e[t] = t + 1 + ": " + e[t];
	return e.join(`
`)
}

function d0(r) {
	switch (r) {
		case li:
			return ["Linear", "( value )"];
		case oo:
			return ["sRGB", "( value )"];
		default:
			return console.warn("THREE.WebGLProgram: Unsupported encoding:", r), ["Linear", "( value )"]
	}
}

function cp(r, e, t) {
	const n = r.getShaderParameter(e, 35713),
		i = r.getShaderInfoLog(e).trim();
	return n && i === "" ? "" : t.toUpperCase() + `

` + i + `

` + eT(r.getShaderSource(e))
}

function Ar(r, e) {
	const t = d0(e);
	return "vec4 " + r + "( vec4 value ) { return " + t[0] + "ToLinear" + t[1] + "; }"
}

function tT(r, e) {
	const t = d0(e);
	return "vec4 " + r + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }"
}

function nT(r, e) {
	let t;
	switch (e) {
		case $y:
			t = "Linear";
			break;
		case Zy:
			t = "Reinhard";
			break;
		case Jy:
			t = "OptimizedCineon";
			break;
		case Qy:
			t = "ACESFilmic";
			break;
		case Ky:
			t = "Custom";
			break;
		default:
			console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear"
	}
	return "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
}

function iT(r) {
	return [r.extensionDerivatives || r.envMapCubeUV || r.bumpMap || r.tangentSpaceNormalMap || r.clearcoatNormalMap || r.flatShading || r.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "", (r.extensionFragDepth || r.logarithmicDepthBuffer) && r.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", r.extensionDrawBuffers && r.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (r.extensionShaderTextureLOD || r.envMap || r.transmission) && r.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(ko).join(`
`)
}

function rT(r) {
	const e = [];
	for (const t in r) {
		const n = r[t];
		n !== !1 && e.push("#define " + t + " " + n)
	}
	return e.join(`
`)
}

function sT(r, e) {
	const t = {},
		n = r.getProgramParameter(e, 35721);
	for (let i = 0; i < n; i++) {
		const s = r.getActiveAttrib(e, i),
			o = s.name;
		let a = 1;
		s.type === 35674 && (a = 2), s.type === 35675 && (a = 3), s.type === 35676 && (a = 4), t[o] = {
			type: s.type,
			location: r.getAttribLocation(e, o),
			locationSize: a
		}
	}
	return t
}

function ko(r) {
	return r !== ""
}

function hp(r, e) {
	return r.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows)
}

function up(r, e) {
	return r.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
}
const oT = /^[ \t]*#include +<([\w\d./]+)>/gm;

function pu(r) {
	return r.replace(oT, aT)
}

function aT(r, e) {
	const t = Xe[e];
	if (t === void 0) throw new Error("Can not resolve #include <" + e + ">");
	return pu(t)
}
const lT = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
	cT = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

function fp(r) {
	return r.replace(cT, p0).replace(lT, hT)
}

function hT(r, e, t, n) {
	return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), p0(r, e, t, n)
}

function p0(r, e, t, n) {
	let i = "";
	for (let s = parseInt(e); s < parseInt(t); s++) i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
	return i
}

function dp(r) {
	let e = "precision " + r.precision + ` float;
precision ` + r.precision + " int;";
	return r.precision === "highp" ? e += `
#define HIGH_PRECISION` : r.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : r.precision === "lowp" && (e += `
#define LOW_PRECISION`), e
}

function uT(r) {
	let e = "SHADOWMAP_TYPE_BASIC";
	return r.shadowMapType === W_ ? e = "SHADOWMAP_TYPE_PCF" : r.shadowMapType === Ay ? e = "SHADOWMAP_TYPE_PCF_SOFT" : r.shadowMapType === Bo && (e = "SHADOWMAP_TYPE_VSM"), e
}

function fT(r) {
	let e = "ENVMAP_TYPE_CUBE";
	if (r.envMap) switch (r.envMapMode) {
		case wa:
		case ba:
			e = "ENVMAP_TYPE_CUBE";
			break;
		case uc:
		case uf:
			e = "ENVMAP_TYPE_CUBE_UV";
			break
	}
	return e
}

function dT(r) {
	let e = "ENVMAP_MODE_REFLECTION";
	if (r.envMap) switch (r.envMapMode) {
		case ba:
		case uf:
			e = "ENVMAP_MODE_REFRACTION";
			break
	}
	return e
}

function pT(r) {
	let e = "ENVMAP_BLENDING_NONE";
	if (r.envMap) switch (r.combine) {
		case hc:
			e = "ENVMAP_BLENDING_MULTIPLY";
			break;
		case Yy:
			e = "ENVMAP_BLENDING_MIX";
			break;
		case jy:
			e = "ENVMAP_BLENDING_ADD";
			break
	}
	return e
}

function mT(r, e, t, n) {
	const i = r.getContext(),
		s = t.defines;
	let o = t.vertexShader,
		a = t.fragmentShader;
	const l = uT(t),
		c = fT(t),
		h = dT(t),
		u = pT(t),
		f = t.isWebGL2 ? "" : iT(t),
		d = rT(s),
		p = i.createProgram();
	let m, v, g = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
	t.isRawShaderMaterial ? (m = [d].filter(ko).join(`
`), m.length > 0 && (m += `
`), v = [f, d].filter(ko).join(`
`), v.length > 0 && (v += `
`)) : (m = [dp(t), "#define SHADER_NAME " + t.shaderName, d, t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define MAX_BONES " + t.maxBones, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + h : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.displacementMap && t.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", t.vertexTangents ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUvs ? "#define USE_UV" : "", t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.useVertexTexture ? "#define BONE_TEXTURE" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", t.morphTargets && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", t.morphTargets && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(ko).join(`
`), v = [f, dp(t), "#define SHADER_NAME " + t.shaderName, d, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + c : "", t.envMap ? "#define " + h : "", t.envMap ? "#define " + u : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUvs ? "#define USE_UV" : "", t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", (t.extensionShaderTextureLOD || t.envMap) && t.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== cr ? "#define TONE_MAPPING" : "", t.toneMapping !== cr ? Xe.tonemapping_pars_fragment : "", t.toneMapping !== cr ? nT("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.format === hr ? "#define OPAQUE" : "", Xe.encodings_pars_fragment, t.map ? Ar("mapTexelToLinear", t.mapEncoding) : "", t.matcap ? Ar("matcapTexelToLinear", t.matcapEncoding) : "", t.envMap ? Ar("envMapTexelToLinear", t.envMapEncoding) : "", t.emissiveMap ? Ar("emissiveMapTexelToLinear", t.emissiveMapEncoding) : "", t.specularColorMap ? Ar("specularColorMapTexelToLinear", t.specularColorMapEncoding) : "", t.sheenColorMap ? Ar("sheenColorMapTexelToLinear", t.sheenColorMapEncoding) : "", t.lightMap ? Ar("lightMapTexelToLinear", t.lightMapEncoding) : "", tT("linearToOutputTexel", t.outputEncoding), t.depthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(ko).join(`
`)), o = pu(o), o = hp(o, t), o = up(o, t), a = pu(a), a = hp(a, t), a = up(a, t), o = fp(o), a = fp(a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (g = `#version 300 es
`, m = ["precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + m, v = ["#define varying in", t.glslVersion === Od ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === Od ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + v);
	const _ = g + m + o,
		w = g + v + a,
		x = lp(i, 35633, _),
		y = lp(i, 35632, w);
	if (i.attachShader(p, x), i.attachShader(p, y), t.index0AttributeName !== void 0 ? i.bindAttribLocation(p, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(p, 0, "position"), i.linkProgram(p), r.debug.checkShaderErrors) {
		const D = i.getProgramInfoLog(p).trim(),
			O = i.getShaderInfoLog(x).trim(),
			z = i.getShaderInfoLog(y).trim();
		let P = !0,
			M = !0;
		if (i.getProgramParameter(p, 35714) === !1) {
			P = !1;
			const E = cp(i, x, "vertex"),
				R = cp(i, y, "fragment");
			console.error("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(p, 35715) + `

Program Info Log: ` + D + `
` + E + `
` + R)
		} else D !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", D) : (O === "" || z === "") && (M = !1);
		M && (this.diagnostics = {
			runnable: P,
			programLog: D,
			vertexShader: {
				log: O,
				prefix: m
			},
			fragmentShader: {
				log: z,
				prefix: v
			}
		})
	}
	i.deleteShader(x), i.deleteShader(y);
	let b;
	this.getUniforms = function() {
		return b === void 0 && (b = new fr(i, p)), b
	};
	let S;
	return this.getAttributes = function() {
		return S === void 0 && (S = sT(i, p)), S
	}, this.destroy = function() {
		n.releaseStatesOfProgram(this), i.deleteProgram(p), this.program = void 0
	}, this.name = t.shaderName, this.id = KS++, this.cacheKey = e, this.usedTimes = 1, this.program = p, this.vertexShader = x, this.fragmentShader = y, this
}
let gT = 0;
class _T {
	constructor() {
		this.shaderCache = new Map, this.materialCache = new Map
	}
	update(e) {
		const t = e.vertexShader,
			n = e.fragmentShader,
			i = this._getShaderStage(t),
			s = this._getShaderStage(n),
			o = this._getShaderCacheForMaterial(e);
		return o.has(i) === !1 && (o.add(i), i.usedTimes++), o.has(s) === !1 && (o.add(s), s.usedTimes++), this
	}
	remove(e) {
		const t = this.materialCache.get(e);
		for (const n of t) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n);
		return this.materialCache.delete(e), this
	}
	getVertexShaderID(e) {
		return this._getShaderStage(e.vertexShader).id
	}
	getFragmentShaderID(e) {
		return this._getShaderStage(e.fragmentShader).id
	}
	dispose() {
		this.shaderCache.clear(), this.materialCache.clear()
	}
	_getShaderCacheForMaterial(e) {
		const t = this.materialCache;
		return t.has(e) === !1 && t.set(e, new Set), t.get(e)
	}
	_getShaderStage(e) {
		const t = this.shaderCache;
		if (t.has(e) === !1) {
			const n = new vT;
			t.set(e, n)
		}
		return t.get(e)
	}
}
class vT {
	constructor() {
		this.id = gT++, this.usedTimes = 0
	}
}

function xT(r, e, t, n, i, s, o) {
	const a = new Q_,
		l = new _T,
		c = [],
		h = i.isWebGL2,
		u = i.logarithmicDepthBuffer,
		f = i.floatVertexTextures,
		d = i.maxVertexUniforms,
		p = i.vertexTextures;
	let m = i.precision;
	const v = {
		MeshDepthMaterial: "depth",
		MeshDistanceMaterial: "distanceRGBA",
		MeshNormalMaterial: "normal",
		MeshBasicMaterial: "basic",
		MeshLambertMaterial: "lambert",
		MeshPhongMaterial: "phong",
		MeshToonMaterial: "toon",
		MeshStandardMaterial: "physical",
		MeshPhysicalMaterial: "physical",
		MeshMatcapMaterial: "matcap",
		LineBasicMaterial: "basic",
		LineDashedMaterial: "dashed",
		PointsMaterial: "points",
		ShadowMaterial: "shadow",
		SpriteMaterial: "sprite"
	};

	function g(M) {
		const R = M.skeleton.bones;
		if (f) return 1024;
		{
			const N = Math.floor((d - 20) / 4),
				k = Math.min(N, R.length);
			return k < R.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + R.length + " bones. This GPU supports " + k + "."), 0) : k
		}
	}

	function _(M) {
		let E;
		return M && M.isTexture ? E = M.encoding : M && M.isWebGLRenderTarget ? (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), E = M.texture.encoding) : E = li, h && M && M.isTexture && M.format === Xt && M.type === Bi && M.encoding === oo && (E = li), E
	}

	function w(M, E, R, V, N) {
		const k = V.fog,
			J = M.isMeshStandardMaterial ? V.environment : null,
			se = (M.isMeshStandardMaterial ? t : e).get(M.envMap || J),
			A = v[M.type],
			Y = N.isSkinnedMesh ? g(N) : 0;
		M.precision !== null && (m = i.getMaxPrecision(M.precision), m !== M.precision && console.warn("THREE.WebGLProgram.getParameters:", M.precision, "not supported, using", m, "instead."));
		let de, U, W, te;
		if (A) {
			const me = di[A];
			de = me.vertexShader, U = me.fragmentShader
		} else de = M.vertexShader, U = M.fragmentShader, l.update(M), W = l.getVertexShaderID(M), te = l.getFragmentShaderID(M);
		const q = r.getRenderTarget(),
			oe = M.alphaTest > 0,
			ce = M.clearcoat > 0;
		return {
			isWebGL2: h,
			shaderID: A,
			shaderName: M.type,
			vertexShader: de,
			fragmentShader: U,
			defines: M.defines,
			customVertexShaderID: W,
			customFragmentShaderID: te,
			isRawShaderMaterial: M.isRawShaderMaterial === !0,
			glslVersion: M.glslVersion,
			precision: m,
			instancing: N.isInstancedMesh === !0,
			instancingColor: N.isInstancedMesh === !0 && N.instanceColor !== null,
			supportsVertexTextures: p,
			outputEncoding: q !== null ? _(q.texture) : r.outputEncoding,
			map: !!M.map,
			mapEncoding: _(M.map),
			matcap: !!M.matcap,
			matcapEncoding: _(M.matcap),
			envMap: !!se,
			envMapMode: se && se.mapping,
			envMapEncoding: _(se),
			envMapCubeUV: !!se && (se.mapping === uc || se.mapping === uf),
			lightMap: !!M.lightMap,
			lightMapEncoding: _(M.lightMap),
			aoMap: !!M.aoMap,
			emissiveMap: !!M.emissiveMap,
			emissiveMapEncoding: _(M.emissiveMap),
			bumpMap: !!M.bumpMap,
			normalMap: !!M.normalMap,
			objectSpaceNormalMap: M.normalMapType === Qw,
			tangentSpaceNormalMap: M.normalMapType === ao,
			clearcoat: ce,
			clearcoatMap: ce && !!M.clearcoatMap,
			clearcoatRoughnessMap: ce && !!M.clearcoatRoughnessMap,
			clearcoatNormalMap: ce && !!M.clearcoatNormalMap,
			displacementMap: !!M.displacementMap,
			roughnessMap: !!M.roughnessMap,
			metalnessMap: !!M.metalnessMap,
			specularMap: !!M.specularMap,
			specularIntensityMap: !!M.specularIntensityMap,
			specularColorMap: !!M.specularColorMap,
			specularColorMapEncoding: _(M.specularColorMap),
			alphaMap: !!M.alphaMap,
			alphaTest: oe,
			gradientMap: !!M.gradientMap,
			sheen: M.sheen > 0,
			sheenColorMap: !!M.sheenColorMap,
			sheenColorMapEncoding: _(M.sheenColorMap),
			sheenRoughnessMap: !!M.sheenRoughnessMap,
			transmission: M.transmission > 0,
			transmissionMap: !!M.transmissionMap,
			thicknessMap: !!M.thicknessMap,
			combine: M.combine,
			vertexTangents: !!M.normalMap && !!N.geometry && !!N.geometry.attributes.tangent,
			vertexColors: M.vertexColors,
			vertexAlphas: M.vertexColors === !0 && !!N.geometry && !!N.geometry.attributes.color && N.geometry.attributes.color.itemSize === 4,
			vertexUvs: !!M.map || !!M.bumpMap || !!M.normalMap || !!M.specularMap || !!M.alphaMap || !!M.emissiveMap || !!M.roughnessMap || !!M.metalnessMap || !!M.clearcoatMap || !!M.clearcoatRoughnessMap || !!M.clearcoatNormalMap || !!M.displacementMap || !!M.transmissionMap || !!M.thicknessMap || !!M.specularIntensityMap || !!M.specularColorMap || !!M.sheenColorMap || !!M.sheenRoughnessMap,
			uvsVertexOnly: !(M.map || M.bumpMap || M.normalMap || M.specularMap || M.alphaMap || M.emissiveMap || M.roughnessMap || M.metalnessMap || M.clearcoatNormalMap || M.transmission > 0 || M.transmissionMap || M.thicknessMap || M.specularIntensityMap || M.specularColorMap || M.sheen > 0 || M.sheenColorMap || M.sheenRoughnessMap) && !!M.displacementMap,
			fog: !!k,
			useFog: M.fog,
			fogExp2: k && k.isFogExp2,
			flatShading: !!M.flatShading,
			sizeAttenuation: M.sizeAttenuation,
			logarithmicDepthBuffer: u,
			skinning: N.isSkinnedMesh === !0 && Y > 0,
			maxBones: Y,
			useVertexTexture: f,
			morphTargets: !!N.geometry && !!N.geometry.morphAttributes.position,
			morphNormals: !!N.geometry && !!N.geometry.morphAttributes.normal,
			morphTargetsCount: N.geometry && N.geometry.morphAttributes.position ? N.geometry.morphAttributes.position.length : 0,
			numDirLights: E.directional.length,
			numPointLights: E.point.length,
			numSpotLights: E.spot.length,
			numRectAreaLights: E.rectArea.length,
			numHemiLights: E.hemi.length,
			numDirLightShadows: E.directionalShadowMap.length,
			numPointLightShadows: E.pointShadowMap.length,
			numSpotLightShadows: E.spotShadowMap.length,
			numClippingPlanes: o.numPlanes,
			numClipIntersection: o.numIntersection,
			format: M.format,
			dithering: M.dithering,
			shadowMapEnabled: r.shadowMap.enabled && R.length > 0,
			shadowMapType: r.shadowMap.type,
			toneMapping: M.toneMapped ? r.toneMapping : cr,
			physicallyCorrectLights: r.physicallyCorrectLights,
			premultipliedAlpha: M.premultipliedAlpha,
			doubleSided: M.side === Kr,
			flipSided: M.side === zt,
			depthPacking: M.depthPacking !== void 0 ? M.depthPacking : !1,
			index0AttributeName: M.index0AttributeName,
			extensionDerivatives: M.extensions && M.extensions.derivatives,
			extensionFragDepth: M.extensions && M.extensions.fragDepth,
			extensionDrawBuffers: M.extensions && M.extensions.drawBuffers,
			extensionShaderTextureLOD: M.extensions && M.extensions.shaderTextureLOD,
			rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
			rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
			rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
			customProgramCacheKey: M.customProgramCacheKey()
		}
	}

	function x(M) {
		const E = [];
		if (M.shaderID ? E.push(M.shaderID) : (E.push(M.customVertexShaderID), E.push(M.customFragmentShaderID)), M.defines !== void 0)
			for (const R in M.defines) E.push(R), E.push(M.defines[R]);
		return M.isRawShaderMaterial === !1 && (y(E, M), b(E, M), E.push(r.outputEncoding)), E.push(M.customProgramCacheKey), E.join()
	}

	function y(M, E) {
		M.push(E.precision), M.push(E.outputEncoding), M.push(E.mapEncoding), M.push(E.matcapEncoding), M.push(E.envMapMode), M.push(E.envMapEncoding), M.push(E.lightMapEncoding), M.push(E.emissiveMapEncoding), M.push(E.combine), M.push(E.vertexUvs), M.push(E.fogExp2), M.push(E.sizeAttenuation), M.push(E.maxBones), M.push(E.morphTargetsCount), M.push(E.numDirLights), M.push(E.numPointLights), M.push(E.numSpotLights), M.push(E.numHemiLights), M.push(E.numRectAreaLights), M.push(E.numDirLightShadows), M.push(E.numPointLightShadows), M.push(E.numSpotLightShadows), M.push(E.shadowMapType), M.push(E.toneMapping), M.push(E.numClippingPlanes), M.push(E.numClipIntersection), M.push(E.format), M.push(E.specularColorMapEncoding), M.push(E.sheenColorMapEncoding)
	}

	function b(M, E) {
		a.disableAll(), E.isWebGL2 && a.enable(0), E.supportsVertexTextures && a.enable(1), E.instancing && a.enable(2), E.instancingColor && a.enable(3), E.map && a.enable(4), E.matcap && a.enable(5), E.envMap && a.enable(6), E.envMapCubeUV && a.enable(7), E.lightMap && a.enable(8), E.aoMap && a.enable(9), E.emissiveMap && a.enable(10), E.bumpMap && a.enable(11), E.normalMap && a.enable(12), E.objectSpaceNormalMap && a.enable(13), E.tangentSpaceNormalMap && a.enable(14), E.clearcoat && a.enable(15), E.clearcoatMap && a.enable(16), E.clearcoatRoughnessMap && a.enable(17), E.clearcoatNormalMap && a.enable(18), E.displacementMap && a.enable(19), E.specularMap && a.enable(20), E.roughnessMap && a.enable(21), E.metalnessMap && a.enable(22), E.gradientMap && a.enable(23), E.alphaMap && a.enable(24), E.alphaTest && a.enable(25), E.vertexColors && a.enable(26), E.vertexAlphas && a.enable(27), E.vertexUvs && a.enable(28), E.vertexTangents && a.enable(29), E.uvsVertexOnly && a.enable(30), E.fog && a.enable(31), M.push(a.mask), a.disableAll(), E.useFog && a.enable(0), E.flatShading && a.enable(1), E.logarithmicDepthBuffer && a.enable(2), E.skinning && a.enable(3), E.useVertexTexture && a.enable(4), E.morphTargets && a.enable(5), E.morphNormals && a.enable(6), E.premultipliedAlpha && a.enable(7), E.shadowMapEnabled && a.enable(8), E.physicallyCorrectLights && a.enable(9), E.doubleSided && a.enable(10), E.flipSided && a.enable(11), E.depthPacking && a.enable(12), E.dithering && a.enable(13), E.specularIntensityMap && a.enable(14), E.specularColorMap && a.enable(15), E.transmission && a.enable(16), E.transmissionMap && a.enable(17), E.thicknessMap && a.enable(18), E.sheen && a.enable(19), E.sheenColorMap && a.enable(20), E.sheenRoughnessMap && a.enable(21), M.push(a.mask)
	}

	function S(M) {
		const E = v[M.type];
		let R;
		if (E) {
			const V = di[E];
			R = m1.clone(V.uniforms)
		} else R = M.uniforms;
		return R
	}

	function D(M, E) {
		let R;
		for (let V = 0, N = c.length; V < N; V++) {
			const k = c[V];
			if (k.cacheKey === E) {
				R = k, ++R.usedTimes;
				break
			}
		}
		return R === void 0 && (R = new mT(r, E, M, s), c.push(R)), R
	}

	function O(M) {
		if (--M.usedTimes === 0) {
			const E = c.indexOf(M);
			c[E] = c[c.length - 1], c.pop(), M.destroy()
		}
	}

	function z(M) {
		l.remove(M)
	}

	function P() {
		l.dispose()
	}
	return {
		getParameters: w,
		getProgramCacheKey: x,
		getUniforms: S,
		acquireProgram: D,
		releaseProgram: O,
		releaseShaderCache: z,
		programs: c,
		dispose: P
	}
}

function yT() {
	let r = new WeakMap;

	function e(s) {
		let o = r.get(s);
		return o === void 0 && (o = {}, r.set(s, o)), o
	}

	function t(s) {
		r.delete(s)
	}

	function n(s, o, a) {
		r.get(s)[o] = a
	}

	function i() {
		r = new WeakMap
	}
	return {
		get: e,
		remove: t,
		update: n,
		dispose: i
	}
}

function wT(r, e) {
	return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.material.id !== e.material.id ? r.material.id - e.material.id : r.z !== e.z ? r.z - e.z : r.id - e.id
}

function pp(r, e) {
	return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.z !== e.z ? e.z - r.z : r.id - e.id
}

function mp() {
	const r = [];
	let e = 0;
	const t = [],
		n = [],
		i = [];

	function s() {
		e = 0, t.length = 0, n.length = 0, i.length = 0
	}

	function o(u, f, d, p, m, v) {
		let g = r[e];
		return g === void 0 ? (g = {
			id: u.id,
			object: u,
			geometry: f,
			material: d,
			groupOrder: p,
			renderOrder: u.renderOrder,
			z: m,
			group: v
		}, r[e] = g) : (g.id = u.id, g.object = u, g.geometry = f, g.material = d, g.groupOrder = p, g.renderOrder = u.renderOrder, g.z = m, g.group = v), e++, g
	}

	function a(u, f, d, p, m, v) {
		const g = o(u, f, d, p, m, v);
		d.transmission > 0 ? n.push(g) : d.transparent === !0 ? i.push(g) : t.push(g)
	}

	function l(u, f, d, p, m, v) {
		const g = o(u, f, d, p, m, v);
		d.transmission > 0 ? n.unshift(g) : d.transparent === !0 ? i.unshift(g) : t.unshift(g)
	}

	function c(u, f) {
		t.length > 1 && t.sort(u || wT), n.length > 1 && n.sort(f || pp), i.length > 1 && i.sort(f || pp)
	}

	function h() {
		for (let u = e, f = r.length; u < f; u++) {
			const d = r[u];
			if (d.id === null) break;
			d.id = null, d.object = null, d.geometry = null, d.material = null, d.group = null
		}
	}
	return {
		opaque: t,
		transmissive: n,
		transparent: i,
		init: s,
		push: a,
		unshift: l,
		finish: h,
		sort: c
	}
}

function bT() {
	let r = new WeakMap;

	function e(n, i) {
		let s;
		return r.has(n) === !1 ? (s = new mp, r.set(n, [s])) : i >= r.get(n).length ? (s = new mp, r.get(n).push(s)) : s = r.get(n)[i], s
	}

	function t() {
		r = new WeakMap
	}
	return {
		get: e,
		dispose: t
	}
}

function MT() {
	const r = {};
	return {
		get: function(e) {
			if (r[e.id] !== void 0) return r[e.id];
			let t;
			switch (e.type) {
				case "DirectionalLight":
					t = {
						direction: new I,
						color: new De
					};
					break;
				case "SpotLight":
					t = {
						position: new I,
						direction: new I,
						color: new De,
						distance: 0,
						coneCos: 0,
						penumbraCos: 0,
						decay: 0
					};
					break;
				case "PointLight":
					t = {
						position: new I,
						color: new De,
						distance: 0,
						decay: 0
					};
					break;
				case "HemisphereLight":
					t = {
						direction: new I,
						skyColor: new De,
						groundColor: new De
					};
					break;
				case "RectAreaLight":
					t = {
						color: new De,
						position: new I,
						halfWidth: new I,
						halfHeight: new I
					};
					break
			}
			return r[e.id] = t, t
		}
	}
}

function ST() {
	const r = {};
	return {
		get: function(e) {
			if (r[e.id] !== void 0) return r[e.id];
			let t;
			switch (e.type) {
				case "DirectionalLight":
					t = {
						shadowBias: 0,
						shadowNormalBias: 0,
						shadowRadius: 1,
						shadowMapSize: new fe
					};
					break;
				case "SpotLight":
					t = {
						shadowBias: 0,
						shadowNormalBias: 0,
						shadowRadius: 1,
						shadowMapSize: new fe
					};
					break;
				case "PointLight":
					t = {
						shadowBias: 0,
						shadowNormalBias: 0,
						shadowRadius: 1,
						shadowMapSize: new fe,
						shadowCameraNear: 1,
						shadowCameraFar: 1e3
					};
					break
			}
			return r[e.id] = t, t
		}
	}
}
let TT = 0;

function ET(r, e) {
	return (e.castShadow ? 1 : 0) - (r.castShadow ? 1 : 0)
}

function AT(r, e) {
	const t = new MT,
		n = ST(),
		i = {
			version: 0,
			hash: {
				directionalLength: -1,
				pointLength: -1,
				spotLength: -1,
				rectAreaLength: -1,
				hemiLength: -1,
				numDirectionalShadows: -1,
				numPointShadows: -1,
				numSpotShadows: -1
			},
			ambient: [0, 0, 0],
			probe: [],
			directional: [],
			directionalShadow: [],
			directionalShadowMap: [],
			directionalShadowMatrix: [],
			spot: [],
			spotShadow: [],
			spotShadowMap: [],
			spotShadowMatrix: [],
			rectArea: [],
			rectAreaLTC1: null,
			rectAreaLTC2: null,
			point: [],
			pointShadow: [],
			pointShadowMap: [],
			pointShadowMatrix: [],
			hemi: []
		};
	for (let h = 0; h < 9; h++) i.probe.push(new I);
	const s = new I,
		o = new Oe,
		a = new Oe;

	function l(h, u) {
		let f = 0,
			d = 0,
			p = 0;
		for (let O = 0; O < 9; O++) i.probe[O].set(0, 0, 0);
		let m = 0,
			v = 0,
			g = 0,
			_ = 0,
			w = 0,
			x = 0,
			y = 0,
			b = 0;
		h.sort(ET);
		const S = u !== !0 ? Math.PI : 1;
		for (let O = 0, z = h.length; O < z; O++) {
			const P = h[O],
				M = P.color,
				E = P.intensity,
				R = P.distance,
				V = P.shadow && P.shadow.map ? P.shadow.map.texture : null;
			if (P.isAmbientLight) f += M.r * E * S, d += M.g * E * S, p += M.b * E * S;
			else if (P.isLightProbe)
				for (let N = 0; N < 9; N++) i.probe[N].addScaledVector(P.sh.coefficients[N], E);
			else if (P.isDirectionalLight) {
				const N = t.get(P);
				if (N.color.copy(P.color).multiplyScalar(P.intensity * S), P.castShadow) {
					const k = P.shadow,
						J = n.get(P);
					J.shadowBias = k.bias, J.shadowNormalBias = k.normalBias, J.shadowRadius = k.radius, J.shadowMapSize = k.mapSize, i.directionalShadow[m] = J, i.directionalShadowMap[m] = V, i.directionalShadowMatrix[m] = P.shadow.matrix, x++
				}
				i.directional[m] = N, m++
			} else if (P.isSpotLight) {
				const N = t.get(P);
				if (N.position.setFromMatrixPosition(P.matrixWorld), N.color.copy(M).multiplyScalar(E * S), N.distance = R, N.coneCos = Math.cos(P.angle), N.penumbraCos = Math.cos(P.angle * (1 - P.penumbra)), N.decay = P.decay, P.castShadow) {
					const k = P.shadow,
						J = n.get(P);
					J.shadowBias = k.bias, J.shadowNormalBias = k.normalBias, J.shadowRadius = k.radius, J.shadowMapSize = k.mapSize, i.spotShadow[g] = J, i.spotShadowMap[g] = V, i.spotShadowMatrix[g] = P.shadow.matrix, b++
				}
				i.spot[g] = N, g++
			} else if (P.isRectAreaLight) {
				const N = t.get(P);
				N.color.copy(M).multiplyScalar(E), N.halfWidth.set(P.width * .5, 0, 0), N.halfHeight.set(0, P.height * .5, 0), i.rectArea[_] = N, _++
			} else if (P.isPointLight) {
				const N = t.get(P);
				if (N.color.copy(P.color).multiplyScalar(P.intensity * S), N.distance = P.distance, N.decay = P.decay, P.castShadow) {
					const k = P.shadow,
						J = n.get(P);
					J.shadowBias = k.bias, J.shadowNormalBias = k.normalBias, J.shadowRadius = k.radius, J.shadowMapSize = k.mapSize, J.shadowCameraNear = k.camera.near, J.shadowCameraFar = k.camera.far, i.pointShadow[v] = J, i.pointShadowMap[v] = V, i.pointShadowMatrix[v] = P.shadow.matrix, y++
				}
				i.point[v] = N, v++
			} else if (P.isHemisphereLight) {
				const N = t.get(P);
				N.skyColor.copy(P.color).multiplyScalar(E * S), N.groundColor.copy(P.groundColor).multiplyScalar(E * S), i.hemi[w] = N, w++
			}
		}
		_ > 0 && (e.isWebGL2 || r.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = ve.LTC_FLOAT_1, i.rectAreaLTC2 = ve.LTC_FLOAT_2) : r.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = ve.LTC_HALF_1, i.rectAreaLTC2 = ve.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = f, i.ambient[1] = d, i.ambient[2] = p;
		const D = i.hash;
		(D.directionalLength !== m || D.pointLength !== v || D.spotLength !== g || D.rectAreaLength !== _ || D.hemiLength !== w || D.numDirectionalShadows !== x || D.numPointShadows !== y || D.numSpotShadows !== b) && (i.directional.length = m, i.spot.length = g, i.rectArea.length = _, i.point.length = v, i.hemi.length = w, i.directionalShadow.length = x, i.directionalShadowMap.length = x, i.pointShadow.length = y, i.pointShadowMap.length = y, i.spotShadow.length = b, i.spotShadowMap.length = b, i.directionalShadowMatrix.length = x, i.pointShadowMatrix.length = y, i.spotShadowMatrix.length = b, D.directionalLength = m, D.pointLength = v, D.spotLength = g, D.rectAreaLength = _, D.hemiLength = w, D.numDirectionalShadows = x, D.numPointShadows = y, D.numSpotShadows = b, i.version = TT++)
	}

	function c(h, u) {
		let f = 0,
			d = 0,
			p = 0,
			m = 0,
			v = 0;
		const g = u.matrixWorldInverse;
		for (let _ = 0, w = h.length; _ < w; _++) {
			const x = h[_];
			if (x.isDirectionalLight) {
				const y = i.directional[f];
				y.direction.setFromMatrixPosition(x.matrixWorld), s.setFromMatrixPosition(x.target.matrixWorld), y.direction.sub(s), y.direction.transformDirection(g), f++
			} else if (x.isSpotLight) {
				const y = i.spot[p];
				y.position.setFromMatrixPosition(x.matrixWorld), y.position.applyMatrix4(g), y.direction.setFromMatrixPosition(x.matrixWorld), s.setFromMatrixPosition(x.target.matrixWorld), y.direction.sub(s), y.direction.transformDirection(g), p++
			} else if (x.isRectAreaLight) {
				const y = i.rectArea[m];
				y.position.setFromMatrixPosition(x.matrixWorld), y.position.applyMatrix4(g), a.identity(), o.copy(x.matrixWorld), o.premultiply(g), a.extractRotation(o), y.halfWidth.set(x.width * .5, 0, 0), y.halfHeight.set(0, x.height * .5, 0), y.halfWidth.applyMatrix4(a), y.halfHeight.applyMatrix4(a), m++
			} else if (x.isPointLight) {
				const y = i.point[d];
				y.position.setFromMatrixPosition(x.matrixWorld), y.position.applyMatrix4(g), d++
			} else if (x.isHemisphereLight) {
				const y = i.hemi[v];
				y.direction.setFromMatrixPosition(x.matrixWorld), y.direction.transformDirection(g), y.direction.normalize(), v++
			}
		}
	}
	return {
		setup: l,
		setupView: c,
		state: i
	}
}

function gp(r, e) {
	const t = new AT(r, e),
		n = [],
		i = [];

	function s() {
		n.length = 0, i.length = 0
	}

	function o(u) {
		n.push(u)
	}

	function a(u) {
		i.push(u)
	}

	function l(u) {
		t.setup(n, u)
	}

	function c(u) {
		t.setupView(n, u)
	}
	return {
		init: s,
		state: {
			lightsArray: n,
			shadowsArray: i,
			lights: t
		},
		setupLights: l,
		setupLightsView: c,
		pushLight: o,
		pushShadow: a
	}
}

function CT(r, e) {
	let t = new WeakMap;

	function n(s, o = 0) {
		let a;
		return t.has(s) === !1 ? (a = new gp(r, e), t.set(s, [a])) : o >= t.get(s).length ? (a = new gp(r, e), t.get(s).push(a)) : a = t.get(s)[o], a
	}

	function i() {
		t = new WeakMap
	}
	return {
		get: n,
		dispose: i
	}
}
class m0 extends on {
	constructor(e) {
		super(), this.type = "MeshDepthMaterial", this.depthPacking = Zw, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(e)
	}
	copy(e) {
		return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this
	}
}
m0.prototype.isMeshDepthMaterial = !0;
class g0 extends on {
	constructor(e) {
		super(), this.type = "MeshDistanceMaterial", this.referencePosition = new I, this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(e)
	}
	copy(e) {
		return super.copy(e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this
	}
}
g0.prototype.isMeshDistanceMaterial = !0;
const LT = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
	RT = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;

function _0(r, e, t) {
	let n = new gc;
	const i = new fe,
		s = new fe,
		o = new rt,
		a = new m0({
			depthPacking: Jw
		}),
		l = new g0,
		c = {},
		h = t.maxTextureSize,
		u = {
			0: zt,
			1: da,
			2: Kr
		},
		f = new vr({
			defines: {
				VSM_SAMPLES: 8
			},
			uniforms: {
				shadow_pass: {
					value: null
				},
				resolution: {
					value: new fe
				},
				radius: {
					value: 4
				}
			},
			vertexShader: LT,
			fragmentShader: RT
		}),
		d = f.clone();
	d.defines.HORIZONTAL_PASS = 1;
	const p = new pt;
	p.setAttribute("position", new Bt(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
	const m = new vn(p, f),
		v = this;
	this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = W_, this.render = function(x, y, b) {
		if (v.enabled === !1 || v.autoUpdate === !1 && v.needsUpdate === !1 || x.length === 0) return;
		const S = r.getRenderTarget(),
			D = r.getActiveCubeFace(),
			O = r.getActiveMipmapLevel(),
			z = r.state;
		z.setBlending(lr), z.buffers.color.setClear(1, 1, 1, 1), z.buffers.depth.setTest(!0), z.setScissorTest(!1);
		for (let P = 0, M = x.length; P < M; P++) {
			const E = x[P],
				R = E.shadow;
			if (R === void 0) {
				console.warn("THREE.WebGLShadowMap:", E, "has no shadow.");
				continue
			}
			if (R.autoUpdate === !1 && R.needsUpdate === !1) continue;
			i.copy(R.mapSize);
			const V = R.getFrameExtents();
			if (i.multiply(V), s.copy(R.mapSize), (i.x > h || i.y > h) && (i.x > h && (s.x = Math.floor(h / V.x), i.x = s.x * V.x, R.mapSize.x = s.x), i.y > h && (s.y = Math.floor(h / V.y), i.y = s.y * V.y, R.mapSize.y = s.y)), R.map === null && !R.isPointLightShadow && this.type === Bo) {
				const k = {
					minFilter: gn,
					magFilter: gn,
					format: Xt
				};
				R.map = new Kn(i.x, i.y, k), R.map.texture.name = E.name + ".shadowMap", R.mapPass = new Kn(i.x, i.y, k), R.camera.updateProjectionMatrix()
			}
			if (R.map === null) {
				const k = {
					minFilter: Pt,
					magFilter: Pt,
					format: Xt
				};
				R.map = new Kn(i.x, i.y, k), R.map.texture.name = E.name + ".shadowMap", R.camera.updateProjectionMatrix()
			}
			r.setRenderTarget(R.map), r.clear();
			const N = R.getViewportCount();
			for (let k = 0; k < N; k++) {
				const J = R.getViewport(k);
				o.set(s.x * J.x, s.y * J.y, s.x * J.z, s.y * J.w), z.viewport(o), R.updateMatrices(E, k), n = R.getFrustum(), w(y, b, R.camera, E, this.type)
			}!R.isPointLightShadow && this.type === Bo && g(R, b), R.needsUpdate = !1
		}
		v.needsUpdate = !1, r.setRenderTarget(S, D, O)
	};

	function g(x, y) {
		const b = e.update(m);
		f.defines.VSM_SAMPLES !== x.blurSamples && (f.defines.VSM_SAMPLES = x.blurSamples, d.defines.VSM_SAMPLES = x.blurSamples, f.needsUpdate = !0, d.needsUpdate = !0), f.uniforms.shadow_pass.value = x.map.texture, f.uniforms.resolution.value = x.mapSize, f.uniforms.radius.value = x.radius, r.setRenderTarget(x.mapPass), r.clear(), r.renderBufferDirect(y, null, b, f, m, null), d.uniforms.shadow_pass.value = x.mapPass.texture, d.uniforms.resolution.value = x.mapSize, d.uniforms.radius.value = x.radius, r.setRenderTarget(x.map), r.clear(), r.renderBufferDirect(y, null, b, d, m, null)
	}

	function _(x, y, b, S, D, O, z) {
		let P = null;
		const M = S.isPointLight === !0 ? x.customDistanceMaterial : x.customDepthMaterial;
		if (M !== void 0 ? P = M : P = S.isPointLight === !0 ? l : a, r.localClippingEnabled && b.clipShadows === !0 && b.clippingPlanes.length !== 0 || b.displacementMap && b.displacementScale !== 0 || b.alphaMap && b.alphaTest > 0) {
			const E = P.uuid,
				R = b.uuid;
			let V = c[E];
			V === void 0 && (V = {}, c[E] = V);
			let N = V[R];
			N === void 0 && (N = P.clone(), V[R] = N), P = N
		}
		return P.visible = b.visible, P.wireframe = b.wireframe, z === Bo ? P.side = b.shadowSide !== null ? b.shadowSide : b.side : P.side = b.shadowSide !== null ? b.shadowSide : u[b.side], P.alphaMap = b.alphaMap, P.alphaTest = b.alphaTest, P.clipShadows = b.clipShadows, P.clippingPlanes = b.clippingPlanes, P.clipIntersection = b.clipIntersection, P.displacementMap = b.displacementMap, P.displacementScale = b.displacementScale, P.displacementBias = b.displacementBias, P.wireframeLinewidth = b.wireframeLinewidth, P.linewidth = b.linewidth, S.isPointLight === !0 && P.isMeshDistanceMaterial === !0 && (P.referencePosition.setFromMatrixPosition(S.matrixWorld), P.nearDistance = D, P.farDistance = O), P
	}

	function w(x, y, b, S, D) {
		if (x.visible === !1) return;
		if (x.layers.test(y.layers) && (x.isMesh || x.isLine || x.isPoints) && (x.castShadow || x.receiveShadow && D === Bo) && (!x.frustumCulled || n.intersectsObject(x))) {
			x.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse, x.matrixWorld);
			const P = e.update(x),
				M = x.material;
			if (Array.isArray(M)) {
				const E = P.groups;
				for (let R = 0, V = E.length; R < V; R++) {
					const N = E[R],
						k = M[N.materialIndex];
					if (k && k.visible) {
						const J = _(x, P, k, S, b.near, b.far, D);
						r.renderBufferDirect(b, null, P, J, x, N)
					}
				}
			} else if (M.visible) {
				const E = _(x, P, M, S, b.near, b.far, D);
				r.renderBufferDirect(b, null, P, E, x, null)
			}
		}
		const z = x.children;
		for (let P = 0, M = z.length; P < M; P++) w(z[P], y, b, S, D)
	}
}

function PT(r, e, t) {
	const n = t.isWebGL2;

	function i() {
		let F = !1;
		const he = new rt;
		let re = null;
		const Fe = new rt(0, 0, 0, 0);
		return {
			setMask: function(be) {
				re !== be && !F && (r.colorMask(be, be, be, be), re = be)
			},
			setLocked: function(be) {
				F = be
			},
			setClear: function(be, Ue, _e, ze, je) {
				je === !0 && (be *= ze, Ue *= ze, _e *= ze), he.set(be, Ue, _e, ze), Fe.equals(he) === !1 && (r.clearColor(be, Ue, _e, ze), Fe.copy(he))
			},
			reset: function() {
				F = !1, re = null, Fe.set(-1, 0, 0, 0)
			}
		}
	}

	function s() {
		let F = !1,
			he = null,
			re = null,
			Fe = null;
		return {
			setTest: function(be) {
				be ? U(2929) : W(2929)
			},
			setMask: function(be) {
				he !== be && !F && (r.depthMask(be), he = be)
			},
			setFunc: function(be) {
				if (re !== be) {
					if (be) switch (be) {
						case Uy:
							r.depthFunc(512);
							break;
						case Vy:
							r.depthFunc(519);
							break;
						case Hy:
							r.depthFunc(513);
							break;
						case au:
							r.depthFunc(515);
							break;
						case Gy:
							r.depthFunc(514);
							break;
						case Wy:
							r.depthFunc(518);
							break;
						case qy:
							r.depthFunc(516);
							break;
						case Xy:
							r.depthFunc(517);
							break;
						default:
							r.depthFunc(515)
					} else r.depthFunc(515);
					re = be
				}
			},
			setLocked: function(be) {
				F = be
			},
			setClear: function(be) {
				Fe !== be && (r.clearDepth(be), Fe = be)
			},
			reset: function() {
				F = !1, he = null, re = null, Fe = null
			}
		}
	}

	function o() {
		let F = !1,
			he = null,
			re = null,
			Fe = null,
			be = null,
			Ue = null,
			_e = null,
			ze = null,
			je = null;
		return {
			setTest: function(Te) {
				F || (Te ? U(2960) : W(2960))
			},
			setMask: function(Te) {
				he !== Te && !F && (r.stencilMask(Te), he = Te)
			},
			setFunc: function(Te, kt, xt) {
				(re !== Te || Fe !== kt || be !== xt) && (r.stencilFunc(Te, kt, xt), re = Te, Fe = kt, be = xt)
			},
			setOp: function(Te, kt, xt) {
				(Ue !== Te || _e !== kt || ze !== xt) && (r.stencilOp(Te, kt, xt), Ue = Te, _e = kt, ze = xt)
			},
			setLocked: function(Te) {
				F = Te
			},
			setClear: function(Te) {
				je !== Te && (r.clearStencil(Te), je = Te)
			},
			reset: function() {
				F = !1, he = null, re = null, Fe = null, be = null, Ue = null, _e = null, ze = null, je = null
			}
		}
	}
	const a = new i,
		l = new s,
		c = new o;
	let h = {},
		u = {},
		f = null,
		d = !1,
		p = null,
		m = null,
		v = null,
		g = null,
		_ = null,
		w = null,
		x = null,
		y = !1,
		b = null,
		S = null,
		D = null,
		O = null,
		z = null;
	const P = r.getParameter(35661);
	let M = !1,
		E = 0;
	const R = r.getParameter(7938);
	R.indexOf("WebGL") !== -1 ? (E = parseFloat(/^WebGL (\d)/.exec(R)[1]), M = E >= 1) : R.indexOf("OpenGL ES") !== -1 && (E = parseFloat(/^OpenGL ES (\d)/.exec(R)[1]), M = E >= 2);
	let V = null,
		N = {};
	const k = r.getParameter(3088),
		J = r.getParameter(2978),
		se = new rt().fromArray(k),
		A = new rt().fromArray(J);

	function Y(F, he, re) {
		const Fe = new Uint8Array(4),
			be = r.createTexture();
		r.bindTexture(F, be), r.texParameteri(F, 10241, 9728), r.texParameteri(F, 10240, 9728);
		for (let Ue = 0; Ue < re; Ue++) r.texImage2D(he + Ue, 0, 6408, 1, 1, 0, 6408, 5121, Fe);
		return be
	}
	const de = {};
	de[3553] = Y(3553, 3553, 1), de[34067] = Y(34067, 34069, 6), a.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), U(2929), l.setFunc(au), we(!1), j(vd), U(2884), ie(lr);

	function U(F) {
		h[F] !== !0 && (r.enable(F), h[F] = !0)
	}

	function W(F) {
		h[F] !== !1 && (r.disable(F), h[F] = !1)
	}

	function te(F, he) {
		return u[F] !== he ? (r.bindFramebuffer(F, he), u[F] = he, n && (F === 36009 && (u[36160] = he), F === 36160 && (u[36009] = he)), !0) : !1
	}

	function q(F) {
		return f !== F ? (r.useProgram(F), f = F, !0) : !1
	}
	const oe = {
		[Cs]: 32774,
		[Ly]: 32778,
		[Ry]: 32779
	};
	if (n) oe[bd] = 32775, oe[Md] = 32776;
	else {
		const F = e.get("EXT_blend_minmax");
		F !== null && (oe[bd] = F.MIN_EXT, oe[Md] = F.MAX_EXT)
	}
	const ce = {
		[Py]: 0,
		[Dy]: 1,
		[Iy]: 768,
		[X_]: 770,
		[ky]: 776,
		[Ny]: 774,
		[zy]: 772,
		[Fy]: 769,
		[Y_]: 771,
		[By]: 775,
		[Oy]: 773
	};

	function ie(F, he, re, Fe, be, Ue, _e, ze) {
		if (F === lr) {
			d === !0 && (W(3042), d = !1);
			return
		}
		if (d === !1 && (U(3042), d = !0), F !== Cy) {
			if (F !== p || ze !== y) {
				if ((m !== Cs || _ !== Cs) && (r.blendEquation(32774), m = Cs, _ = Cs), ze) switch (F) {
					case ea:
						r.blendFuncSeparate(1, 771, 1, 771);
						break;
					case xd:
						r.blendFunc(1, 1);
						break;
					case yd:
						r.blendFuncSeparate(0, 0, 769, 771);
						break;
					case wd:
						r.blendFuncSeparate(0, 768, 0, 770);
						break;
					default:
						console.error("THREE.WebGLState: Invalid blending: ", F);
						break
				} else switch (F) {
					case ea:
						r.blendFuncSeparate(770, 771, 1, 771);
						break;
					case xd:
						r.blendFunc(770, 1);
						break;
					case yd:
						r.blendFunc(0, 769);
						break;
					case wd:
						r.blendFunc(0, 768);
						break;
					default:
						console.error("THREE.WebGLState: Invalid blending: ", F);
						break
				}
				v = null, g = null, w = null, x = null, p = F, y = ze
			}
			return
		}
		be = be || he, Ue = Ue || re, _e = _e || Fe, (he !== m || be !== _) && (r.blendEquationSeparate(oe[he], oe[be]), m = he, _ = be), (re !== v || Fe !== g || Ue !== w || _e !== x) && (r.blendFuncSeparate(ce[re], ce[Fe], ce[Ue], ce[_e]), v = re, g = Fe, w = Ue, x = _e), p = F, y = null
	}

	function me(F, he) {
		F.side === Kr ? W(2884) : U(2884);
		let re = F.side === zt;
		he && (re = !re), we(re), F.blending === ea && F.transparent === !1 ? ie(lr) : ie(F.blending, F.blendEquation, F.blendSrc, F.blendDst, F.blendEquationAlpha, F.blendSrcAlpha, F.blendDstAlpha, F.premultipliedAlpha), l.setFunc(F.depthFunc), l.setTest(F.depthTest), l.setMask(F.depthWrite), a.setMask(F.colorWrite);
		const Fe = F.stencilWrite;
		c.setTest(Fe), Fe && (c.setMask(F.stencilWriteMask), c.setFunc(F.stencilFunc, F.stencilRef, F.stencilFuncMask), c.setOp(F.stencilFail, F.stencilZFail, F.stencilZPass)), ee(F.polygonOffset, F.polygonOffsetFactor, F.polygonOffsetUnits), F.alphaToCoverage === !0 ? U(32926) : W(32926)
	}

	function we(F) {
		b !== F && (F ? r.frontFace(2304) : r.frontFace(2305), b = F)
	}

	function j(F) {
		F !== Ty ? (U(2884), F !== S && (F === vd ? r.cullFace(1029) : F === Ey ? r.cullFace(1028) : r.cullFace(1032))) : W(2884), S = F
	}

	function Z(F) {
		F !== D && (M && r.lineWidth(F), D = F)
	}

	function ee(F, he, re) {
		F ? (U(32823), (O !== he || z !== re) && (r.polygonOffset(he, re), O = he, z = re)) : W(32823)
	}

	function ge(F) {
		F ? U(3089) : W(3089)
	}

	function ue(F) {
		F === void 0 && (F = 33984 + P - 1), V !== F && (r.activeTexture(F), V = F)
	}

	function H(F, he) {
		V === null && ue();
		let re = N[V];
		re === void 0 && (re = {
			type: void 0,
			texture: void 0
		}, N[V] = re), (re.type !== F || re.texture !== he) && (r.bindTexture(F, he || de[F]), re.type = F, re.texture = he)
	}

	function Re() {
		const F = N[V];
		F !== void 0 && F.type !== void 0 && (r.bindTexture(F.type, null), F.type = void 0, F.texture = void 0)
	}

	function Ne() {
		try {
			r.compressedTexImage2D.apply(r, arguments)
		} catch (F) {
			console.error("THREE.WebGLState:", F)
		}
	}

	function Qe() {
		try {
			r.texSubImage2D.apply(r, arguments)
		} catch (F) {
			console.error("THREE.WebGLState:", F)
		}
	}

	function L() {
		try {
			r.texSubImage3D.apply(r, arguments)
		} catch (F) {
			console.error("THREE.WebGLState:", F)
		}
	}

	function C() {
		try {
			r.compressedTexSubImage2D.apply(r, arguments)
		} catch (F) {
			console.error("THREE.WebGLState:", F)
		}
	}

	function K() {
		try {
			r.texStorage2D.apply(r, arguments)
		} catch (F) {
			console.error("THREE.WebGLState:", F)
		}
	}

	function ae() {
		try {
			r.texStorage3D.apply(r, arguments)
		} catch (F) {
			console.error("THREE.WebGLState:", F)
		}
	}

	function le() {
		try {
			r.texImage2D.apply(r, arguments)
		} catch (F) {
			console.error("THREE.WebGLState:", F)
		}
	}

	function Q() {
		try {
			r.texImage3D.apply(r, arguments)
		} catch (F) {
			console.error("THREE.WebGLState:", F)
		}
	}

	function Pe(F) {
		se.equals(F) === !1 && (r.scissor(F.x, F.y, F.z, F.w), se.copy(F))
	}

	function Se(F) {
		A.equals(F) === !1 && (r.viewport(F.x, F.y, F.z, F.w), A.copy(F))
	}

	function pe() {
		r.disable(3042), r.disable(2884), r.disable(2929), r.disable(32823), r.disable(3089), r.disable(2960), r.disable(32926), r.blendEquation(32774), r.blendFunc(1, 0), r.blendFuncSeparate(1, 0, 1, 0), r.colorMask(!0, !0, !0, !0), r.clearColor(0, 0, 0, 0), r.depthMask(!0), r.depthFunc(513), r.clearDepth(1), r.stencilMask(4294967295), r.stencilFunc(519, 0, 4294967295), r.stencilOp(7680, 7680, 7680), r.clearStencil(0), r.cullFace(1029), r.frontFace(2305), r.polygonOffset(0, 0), r.activeTexture(33984), r.bindFramebuffer(36160, null), n === !0 && (r.bindFramebuffer(36009, null), r.bindFramebuffer(36008, null)), r.useProgram(null), r.lineWidth(1), r.scissor(0, 0, r.canvas.width, r.canvas.height), r.viewport(0, 0, r.canvas.width, r.canvas.height), h = {}, V = null, N = {}, u = {}, f = null, d = !1, p = null, m = null, v = null, g = null, _ = null, w = null, x = null, y = !1, b = null, S = null, D = null, O = null, z = null, se.set(0, 0, r.canvas.width, r.canvas.height), A.set(0, 0, r.canvas.width, r.canvas.height), a.reset(), l.reset(), c.reset()
	}
	return {
		buffers: {
			color: a,
			depth: l,
			stencil: c
		},
		enable: U,
		disable: W,
		bindFramebuffer: te,
		useProgram: q,
		setBlending: ie,
		setMaterial: me,
		setFlipSided: we,
		setCullFace: j,
		setLineWidth: Z,
		setPolygonOffset: ee,
		setScissorTest: ge,
		activeTexture: ue,
		bindTexture: H,
		unbindTexture: Re,
		compressedTexImage2D: Ne,
		texImage2D: le,
		texImage3D: Q,
		texStorage2D: K,
		texStorage3D: ae,
		texSubImage2D: Qe,
		texSubImage3D: L,
		compressedTexSubImage2D: C,
		scissor: Pe,
		viewport: Se,
		reset: pe
	}
}

function DT(r, e, t, n, i, s, o) {
	const a = i.isWebGL2,
		l = i.maxTextures,
		c = i.maxCubemapSize,
		h = i.maxTextureSize,
		u = i.maxSamples,
		d = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : void 0,
		p = new WeakMap;
	let m, v = !1;
	try {
		v = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null
	} catch {}

	function g(L, C) {
		return v ? new OffscreenCanvas(L, C) : dc("canvas")
	}

	function _(L, C, K, ae) {
		let le = 1;
		if ((L.width > ae || L.height > ae) && (le = ae / Math.max(L.width, L.height)), le < 1 || C === !0)
			if (typeof HTMLImageElement < "u" && L instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && L instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && L instanceof ImageBitmap) {
				const Q = C ? t1 : Math.floor,
					Pe = Q(le * L.width),
					Se = Q(le * L.height);
				m === void 0 && (m = g(Pe, Se));
				const pe = K ? g(Pe, Se) : m;
				return pe.width = Pe, pe.height = Se, pe.getContext("2d").drawImage(L, 0, 0, Pe, Se), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + L.width + "x" + L.height + ") to (" + Pe + "x" + Se + ")."), pe
			} else return "data" in L && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + L.width + "x" + L.height + ")."), L;
		return L
	}

	function w(L) {
		return Nd(L.width) && Nd(L.height)
	}

	function x(L) {
		return a ? !1 : L.wrapS !== Vn || L.wrapT !== Vn || L.minFilter !== Pt && L.minFilter !== gn
	}

	function y(L, C) {
		return L.generateMipmaps && C && L.minFilter !== Pt && L.minFilter !== gn
	}

	function b(L) {
		r.generateMipmap(L)
	}

	function S(L, C, K, ae) {
		if (a === !1) return C;
		if (L !== null) {
			if (r[L] !== void 0) return r[L];
			console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + L + "'")
		}
		let le = C;
		return C === 6403 && (K === 5126 && (le = 33326), K === 5131 && (le = 33325), K === 5121 && (le = 33321)), C === 6407 && (K === 5126 && (le = 34837), K === 5131 && (le = 34843), K === 5121 && (le = 32849)), C === 6408 && (K === 5126 && (le = 34836), K === 5131 && (le = 34842), K === 5121 && (le = ae === oo ? 35907 : 32856)), (le === 33325 || le === 33326 || le === 34842 || le === 34836) && e.get("EXT_color_buffer_float"), le
	}

	function D(L, C, K) {
		return y(L, K) === !0 || L.isFramebufferTexture && L.minFilter !== Pt && L.minFilter !== gn ? Math.log2(Math.max(C.width, C.height)) + 1 : L.mipmaps !== void 0 && L.mipmaps.length > 0 ? L.mipmaps.length : L.isCompressedTexture && Array.isArray(L.image) ? C.mipmaps.length : 1
	}

	function O(L) {
		return L === Pt || L === Sd || L === Td ? 9728 : 9729
	}

	function z(L) {
		const C = L.target;
		C.removeEventListener("dispose", z), M(C), C.isVideoTexture && p.delete(C), o.memory.textures--
	}

	function P(L) {
		const C = L.target;
		C.removeEventListener("dispose", P), E(C)
	}

	function M(L) {
		const C = n.get(L);
		C.__webglInit !== void 0 && (r.deleteTexture(C.__webglTexture), n.remove(L))
	}

	function E(L) {
		const C = L.texture,
			K = n.get(L),
			ae = n.get(C);
		if (L) {
			if (ae.__webglTexture !== void 0 && (r.deleteTexture(ae.__webglTexture), o.memory.textures--), L.depthTexture && L.depthTexture.dispose(), L.isWebGLCubeRenderTarget)
				for (let le = 0; le < 6; le++) r.deleteFramebuffer(K.__webglFramebuffer[le]), K.__webglDepthbuffer && r.deleteRenderbuffer(K.__webglDepthbuffer[le]);
			else r.deleteFramebuffer(K.__webglFramebuffer), K.__webglDepthbuffer && r.deleteRenderbuffer(K.__webglDepthbuffer), K.__webglMultisampledFramebuffer && r.deleteFramebuffer(K.__webglMultisampledFramebuffer), K.__webglColorRenderbuffer && r.deleteRenderbuffer(K.__webglColorRenderbuffer), K.__webglDepthRenderbuffer && r.deleteRenderbuffer(K.__webglDepthRenderbuffer);
			if (L.isWebGLMultipleRenderTargets)
				for (let le = 0, Q = C.length; le < Q; le++) {
					const Pe = n.get(C[le]);
					Pe.__webglTexture && (r.deleteTexture(Pe.__webglTexture), o.memory.textures--), n.remove(C[le])
				}
			n.remove(C), n.remove(L)
		}
	}
	let R = 0;

	function V() {
		R = 0
	}

	function N() {
		const L = R;
		return L >= l && console.warn("THREE.WebGLTextures: Trying to use " + L + " texture units while this GPU supports only " + l), R += 1, L
	}

	function k(L, C) {
		const K = n.get(L);
		if (L.isVideoTexture && ue(L), L.version > 0 && K.__version !== L.version) {
			const ae = L.image;
			if (ae === void 0) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
			else if (ae.complete === !1) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
			else {
				te(K, L, C);
				return
			}
		}
		t.activeTexture(33984 + C), t.bindTexture(3553, K.__webglTexture)
	}

	function J(L, C) {
		const K = n.get(L);
		if (L.version > 0 && K.__version !== L.version) {
			te(K, L, C);
			return
		}
		t.activeTexture(33984 + C), t.bindTexture(35866, K.__webglTexture)
	}

	function se(L, C) {
		const K = n.get(L);
		if (L.version > 0 && K.__version !== L.version) {
			te(K, L, C);
			return
		}
		t.activeTexture(33984 + C), t.bindTexture(32879, K.__webglTexture)
	}

	function A(L, C) {
		const K = n.get(L);
		if (L.version > 0 && K.__version !== L.version) {
			q(K, L, C);
			return
		}
		t.activeTexture(33984 + C), t.bindTexture(34067, K.__webglTexture)
	}
	const Y = {
			[hu]: 10497,
			[Vn]: 33071,
			[uu]: 33648
		},
		de = {
			[Pt]: 9728,
			[Sd]: 9984,
			[Td]: 9986,
			[gn]: 9729,
			[ew]: 9985,
			[fc]: 9987
		};

	function U(L, C, K) {
		if (K ? (r.texParameteri(L, 10242, Y[C.wrapS]), r.texParameteri(L, 10243, Y[C.wrapT]), (L === 32879 || L === 35866) && r.texParameteri(L, 32882, Y[C.wrapR]), r.texParameteri(L, 10240, de[C.magFilter]), r.texParameteri(L, 10241, de[C.minFilter])) : (r.texParameteri(L, 10242, 33071), r.texParameteri(L, 10243, 33071), (L === 32879 || L === 35866) && r.texParameteri(L, 32882, 33071), (C.wrapS !== Vn || C.wrapT !== Vn) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), r.texParameteri(L, 10240, O(C.magFilter)), r.texParameteri(L, 10241, O(C.minFilter)), C.minFilter !== Pt && C.minFilter !== gn && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), e.has("EXT_texture_filter_anisotropic") === !0) {
			const ae = e.get("EXT_texture_filter_anisotropic");
			if (C.type === zi && e.has("OES_texture_float_linear") === !1 || a === !1 && C.type === Xr && e.has("OES_texture_half_float_linear") === !1) return;
			(C.anisotropy > 1 || n.get(C).__currentAnisotropy) && (r.texParameterf(L, ae.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(C.anisotropy, i.getMaxAnisotropy())), n.get(C).__currentAnisotropy = C.anisotropy)
		}
	}

	function W(L, C) {
		L.__webglInit === void 0 && (L.__webglInit = !0, C.addEventListener("dispose", z), L.__webglTexture = r.createTexture(), o.memory.textures++)
	}

	function te(L, C, K) {
		let ae = 3553;
		C.isDataTexture2DArray && (ae = 35866), C.isDataTexture3D && (ae = 32879), W(L, C), t.activeTexture(33984 + K), t.bindTexture(ae, L.__webglTexture), r.pixelStorei(37440, C.flipY), r.pixelStorei(37441, C.premultiplyAlpha), r.pixelStorei(3317, C.unpackAlignment), r.pixelStorei(37443, 0);
		const le = x(C) && w(C.image) === !1,
			Q = _(C.image, le, !1, h),
			Pe = w(Q) || a,
			Se = s.convert(C.format);
		let pe = s.convert(C.type),
			F = S(C.internalFormat, Se, pe, C.encoding);
		U(ae, C, Pe);
		let he;
		const re = C.mipmaps,
			Fe = a && C.isVideoTexture !== !0,
			be = L.__version === void 0,
			Ue = D(C, Q, Pe);
		if (C.isDepthTexture) F = 6402, a ? C.type === zi ? F = 36012 : C.type === Il ? F = 33190 : C.type === qs ? F = 35056 : F = 33189 : C.type === zi && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), C.format === Yr && F === 6402 && C.type !== pa && C.type !== Il && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), C.type = pa, pe = s.convert(C.type)), C.format === to && F === 6402 && (F = 34041, C.type !== qs && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), C.type = qs, pe = s.convert(C.type))), Fe && be ? t.texStorage2D(3553, 1, F, Q.width, Q.height) : t.texImage2D(3553, 0, F, Q.width, Q.height, 0, Se, pe, null);
		else if (C.isDataTexture)
			if (re.length > 0 && Pe) {
				Fe && be && t.texStorage2D(3553, Ue, F, re[0].width, re[0].height);
				for (let _e = 0, ze = re.length; _e < ze; _e++) he = re[_e], Fe ? t.texSubImage2D(3553, 0, 0, 0, he.width, he.height, Se, pe, he.data) : t.texImage2D(3553, _e, F, he.width, he.height, 0, Se, pe, he.data);
				C.generateMipmaps = !1
			} else Fe ? (be && t.texStorage2D(3553, Ue, F, Q.width, Q.height), t.texSubImage2D(3553, 0, 0, 0, Q.width, Q.height, Se, pe, Q.data)) : t.texImage2D(3553, 0, F, Q.width, Q.height, 0, Se, pe, Q.data);
		else if (C.isCompressedTexture) {
			Fe && be && t.texStorage2D(3553, Ue, F, re[0].width, re[0].height);
			for (let _e = 0, ze = re.length; _e < ze; _e++) he = re[_e], C.format !== Xt && C.format !== hr ? Se !== null ? Fe ? t.compressedTexSubImage2D(3553, _e, 0, 0, he.width, he.height, Se, he.data) : t.compressedTexImage2D(3553, _e, F, he.width, he.height, 0, he.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Fe ? t.texSubImage2D(3553, _e, 0, 0, he.width, he.height, Se, pe, he.data) : t.texImage2D(3553, _e, F, he.width, he.height, 0, Se, pe, he.data)
		} else if (C.isDataTexture2DArray) Fe ? (be && t.texStorage3D(35866, Ue, F, Q.width, Q.height, Q.depth), t.texSubImage3D(35866, 0, 0, 0, 0, Q.width, Q.height, Q.depth, Se, pe, Q.data)) : t.texImage3D(35866, 0, F, Q.width, Q.height, Q.depth, 0, Se, pe, Q.data);
		else if (C.isDataTexture3D) Fe ? (be && t.texStorage3D(32879, Ue, F, Q.width, Q.height, Q.depth), t.texSubImage3D(32879, 0, 0, 0, 0, Q.width, Q.height, Q.depth, Se, pe, Q.data)) : t.texImage3D(32879, 0, F, Q.width, Q.height, Q.depth, 0, Se, pe, Q.data);
		else if (C.isFramebufferTexture) Fe && be ? t.texStorage2D(3553, Ue, F, Q.width, Q.height) : t.texImage2D(3553, 0, F, Q.width, Q.height, 0, Se, pe, null);
		else if (re.length > 0 && Pe) {
			Fe && be && t.texStorage2D(3553, Ue, F, re[0].width, re[0].height);
			for (let _e = 0, ze = re.length; _e < ze; _e++) he = re[_e], Fe ? t.texSubImage2D(3553, _e, 0, 0, Se, pe, he) : t.texImage2D(3553, _e, F, Se, pe, he);
			C.generateMipmaps = !1
		} else Fe ? (be && t.texStorage2D(3553, Ue, F, Q.width, Q.height), t.texSubImage2D(3553, 0, 0, 0, Se, pe, Q)) : t.texImage2D(3553, 0, F, Se, pe, Q);
		y(C, Pe) && b(ae), L.__version = C.version, C.onUpdate && C.onUpdate(C)
	}

	function q(L, C, K) {
		if (C.image.length !== 6) return;
		W(L, C), t.activeTexture(33984 + K), t.bindTexture(34067, L.__webglTexture), r.pixelStorei(37440, C.flipY), r.pixelStorei(37441, C.premultiplyAlpha), r.pixelStorei(3317, C.unpackAlignment), r.pixelStorei(37443, 0);
		const ae = C && (C.isCompressedTexture || C.image[0].isCompressedTexture),
			le = C.image[0] && C.image[0].isDataTexture,
			Q = [];
		for (let _e = 0; _e < 6; _e++) !ae && !le ? Q[_e] = _(C.image[_e], !1, !0, c) : Q[_e] = le ? C.image[_e].image : C.image[_e];
		const Pe = Q[0],
			Se = w(Pe) || a,
			pe = s.convert(C.format),
			F = s.convert(C.type),
			he = S(C.internalFormat, pe, F, C.encoding),
			re = a && C.isVideoTexture !== !0,
			Fe = L.__version === void 0;
		let be = D(C, Pe, Se);
		U(34067, C, Se);
		let Ue;
		if (ae) {
			re && Fe && t.texStorage2D(34067, be, he, Pe.width, Pe.height);
			for (let _e = 0; _e < 6; _e++) {
				Ue = Q[_e].mipmaps;
				for (let ze = 0; ze < Ue.length; ze++) {
					const je = Ue[ze];
					C.format !== Xt && C.format !== hr ? pe !== null ? re ? t.compressedTexSubImage2D(34069 + _e, ze, 0, 0, je.width, je.height, pe, je.data) : t.compressedTexImage2D(34069 + _e, ze, he, je.width, je.height, 0, je.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : re ? t.texSubImage2D(34069 + _e, ze, 0, 0, je.width, je.height, pe, F, je.data) : t.texImage2D(34069 + _e, ze, he, je.width, je.height, 0, pe, F, je.data)
				}
			}
		} else {
			Ue = C.mipmaps, re && Fe && (Ue.length > 0 && be++, t.texStorage2D(34067, be, he, Q[0].width, Q[0].height));
			for (let _e = 0; _e < 6; _e++)
				if (le) {
					re ? t.texSubImage2D(34069 + _e, 0, 0, 0, Q[_e].width, Q[_e].height, pe, F, Q[_e].data) : t.texImage2D(34069 + _e, 0, he, Q[_e].width, Q[_e].height, 0, pe, F, Q[_e].data);
					for (let ze = 0; ze < Ue.length; ze++) {
						const Te = Ue[ze].image[_e].image;
						re ? t.texSubImage2D(34069 + _e, ze + 1, 0, 0, Te.width, Te.height, pe, F, Te.data) : t.texImage2D(34069 + _e, ze + 1, he, Te.width, Te.height, 0, pe, F, Te.data)
					}
				} else {
					re ? t.texSubImage2D(34069 + _e, 0, 0, 0, pe, F, Q[_e]) : t.texImage2D(34069 + _e, 0, he, pe, F, Q[_e]);
					for (let ze = 0; ze < Ue.length; ze++) {
						const je = Ue[ze];
						re ? t.texSubImage2D(34069 + _e, ze + 1, 0, 0, pe, F, je.image[_e]) : t.texImage2D(34069 + _e, ze + 1, he, pe, F, je.image[_e])
					}
				}
		}
		y(C, Se) && b(34067), L.__version = C.version, C.onUpdate && C.onUpdate(C)
	}

	function oe(L, C, K, ae, le) {
		const Q = s.convert(K.format),
			Pe = s.convert(K.type),
			Se = S(K.internalFormat, Q, Pe, K.encoding);
		n.get(C).__hasExternalTextures || (le === 32879 || le === 35866 ? t.texImage3D(le, 0, Se, C.width, C.height, C.depth, 0, Q, Pe, null) : t.texImage2D(le, 0, Se, C.width, C.height, 0, Q, Pe, null)), t.bindFramebuffer(36160, L), C.useRenderToTexture ? d.framebufferTexture2DMultisampleEXT(36160, ae, le, n.get(K).__webglTexture, 0, ge(C)) : r.framebufferTexture2D(36160, ae, le, n.get(K).__webglTexture, 0), t.bindFramebuffer(36160, null)
	}

	function ce(L, C, K) {
		if (r.bindRenderbuffer(36161, L), C.depthBuffer && !C.stencilBuffer) {
			let ae = 33189;
			if (K || C.useRenderToTexture) {
				const le = C.depthTexture;
				le && le.isDepthTexture && (le.type === zi ? ae = 36012 : le.type === Il && (ae = 33190));
				const Q = ge(C);
				C.useRenderToTexture ? d.renderbufferStorageMultisampleEXT(36161, Q, ae, C.width, C.height) : r.renderbufferStorageMultisample(36161, Q, ae, C.width, C.height)
			} else r.renderbufferStorage(36161, ae, C.width, C.height);
			r.framebufferRenderbuffer(36160, 36096, 36161, L)
		} else if (C.depthBuffer && C.stencilBuffer) {
			const ae = ge(C);
			K && C.useRenderbuffer ? r.renderbufferStorageMultisample(36161, ae, 35056, C.width, C.height) : C.useRenderToTexture ? d.renderbufferStorageMultisampleEXT(36161, ae, 35056, C.width, C.height) : r.renderbufferStorage(36161, 34041, C.width, C.height), r.framebufferRenderbuffer(36160, 33306, 36161, L)
		} else {
			const ae = C.isWebGLMultipleRenderTargets === !0 ? C.texture[0] : C.texture,
				le = s.convert(ae.format),
				Q = s.convert(ae.type),
				Pe = S(ae.internalFormat, le, Q, ae.encoding),
				Se = ge(C);
			K && C.useRenderbuffer ? r.renderbufferStorageMultisample(36161, Se, Pe, C.width, C.height) : C.useRenderToTexture ? d.renderbufferStorageMultisampleEXT(36161, Se, Pe, C.width, C.height) : r.renderbufferStorage(36161, Pe, C.width, C.height)
		}
		r.bindRenderbuffer(36161, null)
	}

	function ie(L, C) {
		if (C && C.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
		if (t.bindFramebuffer(36160, L), !(C.depthTexture && C.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
		(!n.get(C.depthTexture).__webglTexture || C.depthTexture.image.width !== C.width || C.depthTexture.image.height !== C.height) && (C.depthTexture.image.width = C.width, C.depthTexture.image.height = C.height, C.depthTexture.needsUpdate = !0), k(C.depthTexture, 0);
		const ae = n.get(C.depthTexture).__webglTexture,
			le = ge(C);
		if (C.depthTexture.format === Yr) C.useRenderToTexture ? d.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, ae, 0, le) : r.framebufferTexture2D(36160, 36096, 3553, ae, 0);
		else if (C.depthTexture.format === to) C.useRenderToTexture ? d.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, ae, 0, le) : r.framebufferTexture2D(36160, 33306, 3553, ae, 0);
		else throw new Error("Unknown depthTexture format")
	}

	function me(L) {
		const C = n.get(L),
			K = L.isWebGLCubeRenderTarget === !0;
		if (L.depthTexture && !C.__autoAllocateDepthBuffer) {
			if (K) throw new Error("target.depthTexture not supported in Cube render targets");
			ie(C.__webglFramebuffer, L)
		} else if (K) {
			C.__webglDepthbuffer = [];
			for (let ae = 0; ae < 6; ae++) t.bindFramebuffer(36160, C.__webglFramebuffer[ae]), C.__webglDepthbuffer[ae] = r.createRenderbuffer(), ce(C.__webglDepthbuffer[ae], L, !1)
		} else t.bindFramebuffer(36160, C.__webglFramebuffer), C.__webglDepthbuffer = r.createRenderbuffer(), ce(C.__webglDepthbuffer, L, !1);
		t.bindFramebuffer(36160, null)
	}

	function we(L, C, K) {
		const ae = n.get(L);
		C !== void 0 && oe(ae.__webglFramebuffer, L, L.texture, 36064, 3553), K !== void 0 && me(L)
	}

	function j(L) {
		const C = L.texture,
			K = n.get(L),
			ae = n.get(C);
		L.addEventListener("dispose", P), L.isWebGLMultipleRenderTargets !== !0 && (ae.__webglTexture === void 0 && (ae.__webglTexture = r.createTexture()), ae.__version = C.version, o.memory.textures++);
		const le = L.isWebGLCubeRenderTarget === !0,
			Q = L.isWebGLMultipleRenderTargets === !0,
			Pe = C.isDataTexture3D || C.isDataTexture2DArray,
			Se = w(L) || a;
		if (a && C.format === hr && (C.type === zi || C.type === Xr) && (C.format = Xt, console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")), le) {
			K.__webglFramebuffer = [];
			for (let pe = 0; pe < 6; pe++) K.__webglFramebuffer[pe] = r.createFramebuffer()
		} else if (K.__webglFramebuffer = r.createFramebuffer(), Q)
			if (i.drawBuffers) {
				const pe = L.texture;
				for (let F = 0, he = pe.length; F < he; F++) {
					const re = n.get(pe[F]);
					re.__webglTexture === void 0 && (re.__webglTexture = r.createTexture(), o.memory.textures++)
				}
			} else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
		else if (L.useRenderbuffer)
			if (a) {
				K.__webglMultisampledFramebuffer = r.createFramebuffer(), K.__webglColorRenderbuffer = r.createRenderbuffer(), r.bindRenderbuffer(36161, K.__webglColorRenderbuffer);
				const pe = s.convert(C.format),
					F = s.convert(C.type),
					he = S(C.internalFormat, pe, F, C.encoding),
					re = ge(L);
				r.renderbufferStorageMultisample(36161, re, he, L.width, L.height), t.bindFramebuffer(36160, K.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(36160, 36064, 36161, K.__webglColorRenderbuffer), r.bindRenderbuffer(36161, null), L.depthBuffer && (K.__webglDepthRenderbuffer = r.createRenderbuffer(), ce(K.__webglDepthRenderbuffer, L, !0)), t.bindFramebuffer(36160, null)
			} else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
		if (le) {
			t.bindTexture(34067, ae.__webglTexture), U(34067, C, Se);
			for (let pe = 0; pe < 6; pe++) oe(K.__webglFramebuffer[pe], L, C, 36064, 34069 + pe);
			y(C, Se) && b(34067), t.unbindTexture()
		} else if (Q) {
			const pe = L.texture;
			for (let F = 0, he = pe.length; F < he; F++) {
				const re = pe[F],
					Fe = n.get(re);
				t.bindTexture(3553, Fe.__webglTexture), U(3553, re, Se), oe(K.__webglFramebuffer, L, re, 36064 + F, 3553), y(re, Se) && b(3553)
			}
			t.unbindTexture()
		} else {
			let pe = 3553;
			Pe && (a ? pe = C.isDataTexture3D ? 32879 : 35866 : console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")), t.bindTexture(pe, ae.__webglTexture), U(pe, C, Se), oe(K.__webglFramebuffer, L, C, 36064, pe), y(C, Se) && b(pe), t.unbindTexture()
		}
		L.depthBuffer && me(L)
	}

	function Z(L) {
		const C = w(L) || a,
			K = L.isWebGLMultipleRenderTargets === !0 ? L.texture : [L.texture];
		for (let ae = 0, le = K.length; ae < le; ae++) {
			const Q = K[ae];
			if (y(Q, C)) {
				const Pe = L.isWebGLCubeRenderTarget ? 34067 : 3553,
					Se = n.get(Q).__webglTexture;
				t.bindTexture(Pe, Se), b(Pe), t.unbindTexture()
			}
		}
	}

	function ee(L) {
		if (L.useRenderbuffer)
			if (a) {
				const C = L.width,
					K = L.height;
				let ae = 16384;
				const le = [36064],
					Q = L.stencilBuffer ? 33306 : 36096;
				L.depthBuffer && le.push(Q), L.ignoreDepthForMultisampleCopy || (L.depthBuffer && (ae |= 256), L.stencilBuffer && (ae |= 1024));
				const Pe = n.get(L);
				t.bindFramebuffer(36008, Pe.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, Pe.__webglFramebuffer), L.ignoreDepthForMultisampleCopy && (r.invalidateFramebuffer(36008, [Q]), r.invalidateFramebuffer(36009, [Q])), r.blitFramebuffer(0, 0, C, K, 0, 0, C, K, ae, 9728), r.invalidateFramebuffer(36008, le), t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, Pe.__webglMultisampledFramebuffer)
			} else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")
	}

	function ge(L) {
		return a && (L.useRenderbuffer || L.useRenderToTexture) ? Math.min(u, L.samples) : 0
	}

	function ue(L) {
		const C = o.render.frame;
		p.get(L) !== C && (p.set(L, C), L.update())
	}
	let H = !1,
		Re = !1;

	function Ne(L, C) {
		L && L.isWebGLRenderTarget && (H === !1 && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), H = !0), L = L.texture), k(L, C)
	}

	function Qe(L, C) {
		L && L.isWebGLCubeRenderTarget && (Re === !1 && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), Re = !0), L = L.texture), A(L, C)
	}
	this.allocateTextureUnit = N, this.resetTextureUnits = V, this.setTexture2D = k, this.setTexture2DArray = J, this.setTexture3D = se, this.setTextureCube = A, this.rebindTextures = we, this.setupRenderTarget = j, this.updateRenderTargetMipmap = Z, this.updateMultisampleRenderTarget = ee, this.setupDepthRenderbuffer = me, this.setupFrameBufferTexture = oe, this.safeSetTexture2D = Ne, this.safeSetTextureCube = Qe
}

function IT(r, e, t) {
	const n = t.isWebGL2;

	function i(s) {
		let o;
		if (s === Bi) return 5121;
		if (s === rw) return 32819;
		if (s === sw) return 32820;
		if (s === ow) return 33635;
		if (s === tw) return 5120;
		if (s === nw) return 5122;
		if (s === pa) return 5123;
		if (s === iw) return 5124;
		if (s === Il) return 5125;
		if (s === zi) return 5126;
		if (s === Xr) return n ? 5131 : (o = e.get("OES_texture_half_float"), o !== null ? o.HALF_FLOAT_OES : null);
		if (s === aw) return 6406;
		if (s === hr) return 6407;
		if (s === Xt) return 6408;
		if (s === lw) return 6409;
		if (s === cw) return 6410;
		if (s === Yr) return 6402;
		if (s === to) return 34041;
		if (s === hw) return 6403;
		if (s === uw) return 36244;
		if (s === fw) return 33319;
		if (s === dw) return 33320;
		if (s === pw) return 36248;
		if (s === mw) return 36249;
		if (s === Ed || s === Ad || s === Cd || s === Ld)
			if (o = e.get("WEBGL_compressed_texture_s3tc"), o !== null) {
				if (s === Ed) return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
				if (s === Ad) return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
				if (s === Cd) return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
				if (s === Ld) return o.COMPRESSED_RGBA_S3TC_DXT5_EXT
			} else return null;
		if (s === Rd || s === Pd || s === Dd || s === Id)
			if (o = e.get("WEBGL_compressed_texture_pvrtc"), o !== null) {
				if (s === Rd) return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
				if (s === Pd) return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
				if (s === Dd) return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
				if (s === Id) return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
			} else return null;
		if (s === gw) return o = e.get("WEBGL_compressed_texture_etc1"), o !== null ? o.COMPRESSED_RGB_ETC1_WEBGL : null;
		if ((s === Fd || s === zd) && (o = e.get("WEBGL_compressed_texture_etc"), o !== null)) {
			if (s === Fd) return o.COMPRESSED_RGB8_ETC2;
			if (s === zd) return o.COMPRESSED_RGBA8_ETC2_EAC
		}
		if (s === _w || s === vw || s === xw || s === yw || s === ww || s === bw || s === Mw || s === Sw || s === Tw || s === Ew || s === Aw || s === Cw || s === Lw || s === Rw || s === Dw || s === Iw || s === Fw || s === zw || s === Ow || s === Nw || s === Bw || s === kw || s === Uw || s === Vw || s === Hw || s === Gw || s === Ww || s === qw) return o = e.get("WEBGL_compressed_texture_astc"), o !== null ? s : null;
		if (s === Pw) return o = e.get("EXT_texture_compression_bptc"), o !== null ? s : null;
		if (s === qs) return n ? 34042 : (o = e.get("WEBGL_depth_texture"), o !== null ? o.UNSIGNED_INT_24_8_WEBGL : null)
	}
	return {
		convert: i
	}
}
class v0 extends Sn {
	constructor(e = []) {
		super(), this.cameras = e
	}
}
v0.prototype.isArrayCamera = !0;
class Uo extends nt {
	constructor() {
		super(), this.type = "Group"
	}
}
Uo.prototype.isGroup = !0;
const FT = {
	type: "move"
};
class xh {
	constructor() {
		this._targetRay = null, this._grip = null, this._hand = null
	}
	getHandSpace() {
		return this._hand === null && (this._hand = new Uo, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
			pinching: !1
		}), this._hand
	}
	getTargetRaySpace() {
		return this._targetRay === null && (this._targetRay = new Uo, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new I, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new I), this._targetRay
	}
	getGripSpace() {
		return this._grip === null && (this._grip = new Uo, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new I, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new I), this._grip
	}
	dispatchEvent(e) {
		return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this
	}
	disconnect(e) {
		return this.dispatchEvent({
			type: "disconnected",
			data: e
		}), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this
	}
	update(e, t, n) {
		let i = null,
			s = null,
			o = null;
		const a = this._targetRay,
			l = this._grip,
			c = this._hand;
		if (e && t.session.visibilityState !== "visible-blurred")
			if (a !== null && (i = t.getPose(e.targetRaySpace, n), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(FT))), c && e.hand) {
				o = !0;
				for (const m of e.hand.values()) {
					const v = t.getJointPose(m, n);
					if (c.joints[m.jointName] === void 0) {
						const _ = new Uo;
						_.matrixAutoUpdate = !1, _.visible = !1, c.joints[m.jointName] = _, c.add(_)
					}
					const g = c.joints[m.jointName];
					v !== null && (g.matrix.fromArray(v.transform.matrix), g.matrix.decompose(g.position, g.rotation, g.scale), g.jointRadius = v.radius), g.visible = v !== null
				}
				const h = c.joints["index-finger-tip"],
					u = c.joints["thumb-tip"],
					f = h.position.distanceTo(u.position),
					d = .02,
					p = .005;
				c.inputState.pinching && f > d + p ? (c.inputState.pinching = !1, this.dispatchEvent({
					type: "pinchend",
					handedness: e.handedness,
					target: this
				})) : !c.inputState.pinching && f <= d - p && (c.inputState.pinching = !0, this.dispatchEvent({
					type: "pinchstart",
					handedness: e.handedness,
					target: this
				}))
			} else l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1));
		return a !== null && (a.visible = i !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = o !== null), this
	}
}
class mu extends sn {
	constructor(e, t, n, i, s, o, a, l, c, h) {
		if (h = h !== void 0 ? h : Yr, h !== Yr && h !== to) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
		n === void 0 && h === Yr && (n = pa), n === void 0 && h === to && (n = qs), super(null, i, s, o, a, l, h, n, c), this.image = {
			width: e,
			height: t
		}, this.magFilter = a !== void 0 ? a : Pt, this.minFilter = l !== void 0 ? l : Pt, this.flipY = !1, this.generateMipmaps = !1
	}
}
mu.prototype.isDepthTexture = !0;
class zT extends ns {
	constructor(e, t) {
		super();
		const n = this;
		let i = null,
			s = 1,
			o = null,
			a = "local-floor";
		const l = e.extensions.has("WEBGL_multisampled_render_to_texture");
		let c = null,
			h = null,
			u = null,
			f = null,
			d = !1,
			p = null;
		const m = t.getContextAttributes();
		let v = null,
			g = null;
		const _ = [],
			w = new Map,
			x = new Sn;
		x.layers.enable(1), x.viewport = new rt;
		const y = new Sn;
		y.layers.enable(2), y.viewport = new rt;
		const b = [x, y],
			S = new v0;
		S.layers.enable(1), S.layers.enable(2);
		let D = null,
			O = null;
		this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(A) {
			let Y = _[A];
			return Y === void 0 && (Y = new xh, _[A] = Y), Y.getTargetRaySpace()
		}, this.getControllerGrip = function(A) {
			let Y = _[A];
			return Y === void 0 && (Y = new xh, _[A] = Y), Y.getGripSpace()
		}, this.getHand = function(A) {
			let Y = _[A];
			return Y === void 0 && (Y = new xh, _[A] = Y), Y.getHandSpace()
		};

		function z(A) {
			const Y = w.get(A.inputSource);
			Y && Y.dispatchEvent({
				type: A.type,
				data: A.inputSource
			})
		}

		function P() {
			w.forEach(function(A, Y) {
				A.disconnect(Y)
			}), w.clear(), D = null, O = null, e.setRenderTarget(v), f = null, u = null, h = null, i = null, g = null, se.stop(), n.isPresenting = !1, n.dispatchEvent({
				type: "sessionend"
			})
		}
		this.setFramebufferScaleFactor = function(A) {
			s = A, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
		}, this.setReferenceSpaceType = function(A) {
			a = A, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
		}, this.getReferenceSpace = function() {
			return o
		}, this.getBaseLayer = function() {
			return u !== null ? u : f
		}, this.getBinding = function() {
			return h
		}, this.getFrame = function() {
			return p
		}, this.getSession = function() {
			return i
		}, this.setSession = async function(A) {
			if (i = A, i !== null) {
				if (v = e.getRenderTarget(), i.addEventListener("select", z), i.addEventListener("selectstart", z), i.addEventListener("selectend", z), i.addEventListener("squeeze", z), i.addEventListener("squeezestart", z), i.addEventListener("squeezeend", z), i.addEventListener("end", P), i.addEventListener("inputsourceschange", M), m.xrCompatible !== !0 && await t.makeXRCompatible(), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
					const Y = {
						antialias: i.renderState.layers === void 0 ? m.antialias : !0,
						alpha: m.alpha,
						depth: m.depth,
						stencil: m.stencil,
						framebufferScaleFactor: s
					};
					f = new XRWebGLLayer(i, t, Y), i.updateRenderState({
						baseLayer: f
					}), g = new Kn(f.framebufferWidth, f.framebufferHeight, {
						format: Xt,
						type: Bi,
						encoding: e.outputEncoding
					})
				} else {
					d = m.antialias;
					let Y = null,
						de = null,
						U = null;
					m.depth && (U = m.stencil ? 35056 : 33190, Y = m.stencil ? to : Yr, de = m.stencil ? qs : pa);
					const W = {
						colorFormat: m.alpha || d ? 32856 : 32849,
						depthFormat: U,
						scaleFactor: s
					};
					h = new XRWebGLBinding(i, t), u = h.createProjectionLayer(W), i.updateRenderState({
						layers: [u]
					}), d ? g = new df(u.textureWidth, u.textureHeight, {
						format: Xt,
						type: Bi,
						depthTexture: new mu(u.textureWidth, u.textureHeight, de, void 0, void 0, void 0, void 0, void 0, void 0, Y),
						stencilBuffer: m.stencil,
						ignoreDepth: u.ignoreDepthValues,
						useRenderToTexture: l,
						encoding: e.outputEncoding
					}) : g = new Kn(u.textureWidth, u.textureHeight, {
						format: m.alpha ? Xt : hr,
						type: Bi,
						depthTexture: new mu(u.textureWidth, u.textureHeight, de, void 0, void 0, void 0, void 0, void 0, void 0, Y),
						stencilBuffer: m.stencil,
						ignoreDepth: u.ignoreDepthValues,
						encoding: e.outputEncoding
					})
				}
				this.setFoveation(1), o = await i.requestReferenceSpace(a), se.setContext(i), se.start(), n.isPresenting = !0, n.dispatchEvent({
					type: "sessionstart"
				})
			}
		};

		function M(A) {
			const Y = i.inputSources;
			for (let de = 0; de < _.length; de++) w.set(Y[de], _[de]);
			for (let de = 0; de < A.removed.length; de++) {
				const U = A.removed[de],
					W = w.get(U);
				W && (W.dispatchEvent({
					type: "disconnected",
					data: U
				}), w.delete(U))
			}
			for (let de = 0; de < A.added.length; de++) {
				const U = A.added[de],
					W = w.get(U);
				W && W.dispatchEvent({
					type: "connected",
					data: U
				})
			}
		}
		const E = new I,
			R = new I;

		function V(A, Y, de) {
			E.setFromMatrixPosition(Y.matrixWorld), R.setFromMatrixPosition(de.matrixWorld);
			const U = E.distanceTo(R),
				W = Y.projectionMatrix.elements,
				te = de.projectionMatrix.elements,
				q = W[14] / (W[10] - 1),
				oe = W[14] / (W[10] + 1),
				ce = (W[9] + 1) / W[5],
				ie = (W[9] - 1) / W[5],
				me = (W[8] - 1) / W[0],
				we = (te[8] + 1) / te[0],
				j = q * me,
				Z = q * we,
				ee = U / (-me + we),
				ge = ee * -me;
			Y.matrixWorld.decompose(A.position, A.quaternion, A.scale), A.translateX(ge), A.translateZ(ee), A.matrixWorld.compose(A.position, A.quaternion, A.scale), A.matrixWorldInverse.copy(A.matrixWorld).invert();
			const ue = q + ee,
				H = oe + ee,
				Re = j - ge,
				Ne = Z + (U - ge),
				Qe = ce * oe / H * ue,
				L = ie * oe / H * ue;
			A.projectionMatrix.makePerspective(Re, Ne, Qe, L, ue, H)
		}

		function N(A, Y) {
			Y === null ? A.matrixWorld.copy(A.matrix) : A.matrixWorld.multiplyMatrices(Y.matrixWorld, A.matrix), A.matrixWorldInverse.copy(A.matrixWorld).invert()
		}
		this.updateCamera = function(A) {
			if (i === null) return;
			S.near = y.near = x.near = A.near, S.far = y.far = x.far = A.far, (D !== S.near || O !== S.far) && (i.updateRenderState({
				depthNear: S.near,
				depthFar: S.far
			}), D = S.near, O = S.far);
			const Y = A.parent,
				de = S.cameras;
			N(S, Y);
			for (let W = 0; W < de.length; W++) N(de[W], Y);
			S.matrixWorld.decompose(S.position, S.quaternion, S.scale), A.position.copy(S.position), A.quaternion.copy(S.quaternion), A.scale.copy(S.scale), A.matrix.copy(S.matrix), A.matrixWorld.copy(S.matrixWorld);
			const U = A.children;
			for (let W = 0, te = U.length; W < te; W++) U[W].updateMatrixWorld(!0);
			de.length === 2 ? V(S, x, y) : S.projectionMatrix.copy(x.projectionMatrix)
		}, this.getCamera = function() {
			return S
		}, this.getFoveation = function() {
			if (u !== null) return u.fixedFoveation;
			if (f !== null) return f.fixedFoveation
		}, this.setFoveation = function(A) {
			u !== null && (u.fixedFoveation = A), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = A)
		};
		let k = null;

		function J(A, Y) {
			if (c = Y.getViewerPose(o), p = Y, c !== null) {
				const U = c.views;
				f !== null && (e.setRenderTargetFramebuffer(g, f.framebuffer), e.setRenderTarget(g));
				let W = !1;
				U.length !== S.cameras.length && (S.cameras.length = 0, W = !0);
				for (let te = 0; te < U.length; te++) {
					const q = U[te];
					let oe = null;
					if (f !== null) oe = f.getViewport(q);
					else {
						const ie = h.getViewSubImage(u, q);
						oe = ie.viewport, te === 0 && (e.setRenderTargetTextures(g, ie.colorTexture, u.ignoreDepthValues ? void 0 : ie.depthStencilTexture), e.setRenderTarget(g))
					}
					const ce = b[te];
					ce.matrix.fromArray(q.transform.matrix), ce.projectionMatrix.fromArray(q.projectionMatrix), ce.viewport.set(oe.x, oe.y, oe.width, oe.height), te === 0 && S.matrix.copy(ce.matrix), W === !0 && S.cameras.push(ce)
				}
			}
			const de = i.inputSources;
			for (let U = 0; U < _.length; U++) {
				const W = _[U],
					te = de[U];
				W.update(te, Y, o)
			}
			k && k(A, Y), p = null
		}
		const se = new i0;
		se.setAnimationLoop(J), this.setAnimationLoop = function(A) {
			k = A
		}, this.dispose = function() {}
	}
}

function OT(r) {
	function e(g, _) {
		g.fogColor.value.copy(_.color), _.isFog ? (g.fogNear.value = _.near, g.fogFar.value = _.far) : _.isFogExp2 && (g.fogDensity.value = _.density)
	}

	function t(g, _, w, x, y) {
		_.isMeshBasicMaterial ? n(g, _) : _.isMeshLambertMaterial ? (n(g, _), l(g, _)) : _.isMeshToonMaterial ? (n(g, _), h(g, _)) : _.isMeshPhongMaterial ? (n(g, _), c(g, _)) : _.isMeshStandardMaterial ? (n(g, _), _.isMeshPhysicalMaterial ? f(g, _, y) : u(g, _)) : _.isMeshMatcapMaterial ? (n(g, _), d(g, _)) : _.isMeshDepthMaterial ? (n(g, _), p(g, _)) : _.isMeshDistanceMaterial ? (n(g, _), m(g, _)) : _.isMeshNormalMaterial ? (n(g, _), v(g, _)) : _.isLineBasicMaterial ? (i(g, _), _.isLineDashedMaterial && s(g, _)) : _.isPointsMaterial ? o(g, _, w, x) : _.isSpriteMaterial ? a(g, _) : _.isShadowMaterial ? (g.color.value.copy(_.color), g.opacity.value = _.opacity) : _.isShaderMaterial && (_.uniformsNeedUpdate = !1)
	}

	function n(g, _) {
		g.opacity.value = _.opacity, _.color && g.diffuse.value.copy(_.color), _.emissive && g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity), _.map && (g.map.value = _.map), _.alphaMap && (g.alphaMap.value = _.alphaMap), _.specularMap && (g.specularMap.value = _.specularMap), _.alphaTest > 0 && (g.alphaTest.value = _.alphaTest);
		const w = r.get(_).envMap;
		w && (g.envMap.value = w, g.flipEnvMap.value = w.isCubeTexture && w.isRenderTargetTexture === !1 ? -1 : 1, g.reflectivity.value = _.reflectivity, g.ior.value = _.ior, g.refractionRatio.value = _.refractionRatio), _.lightMap && (g.lightMap.value = _.lightMap, g.lightMapIntensity.value = _.lightMapIntensity), _.aoMap && (g.aoMap.value = _.aoMap, g.aoMapIntensity.value = _.aoMapIntensity);
		let x;
		_.map ? x = _.map : _.specularMap ? x = _.specularMap : _.displacementMap ? x = _.displacementMap : _.normalMap ? x = _.normalMap : _.bumpMap ? x = _.bumpMap : _.roughnessMap ? x = _.roughnessMap : _.metalnessMap ? x = _.metalnessMap : _.alphaMap ? x = _.alphaMap : _.emissiveMap ? x = _.emissiveMap : _.clearcoatMap ? x = _.clearcoatMap : _.clearcoatNormalMap ? x = _.clearcoatNormalMap : _.clearcoatRoughnessMap ? x = _.clearcoatRoughnessMap : _.specularIntensityMap ? x = _.specularIntensityMap : _.specularColorMap ? x = _.specularColorMap : _.transmissionMap ? x = _.transmissionMap : _.thicknessMap ? x = _.thicknessMap : _.sheenColorMap ? x = _.sheenColorMap : _.sheenRoughnessMap && (x = _.sheenRoughnessMap), x !== void 0 && (x.isWebGLRenderTarget && (x = x.texture), x.matrixAutoUpdate === !0 && x.updateMatrix(), g.uvTransform.value.copy(x.matrix));
		let y;
		_.aoMap ? y = _.aoMap : _.lightMap && (y = _.lightMap), y !== void 0 && (y.isWebGLRenderTarget && (y = y.texture), y.matrixAutoUpdate === !0 && y.updateMatrix(), g.uv2Transform.value.copy(y.matrix))
	}

	function i(g, _) {
		g.diffuse.value.copy(_.color), g.opacity.value = _.opacity
	}

	function s(g, _) {
		g.dashSize.value = _.dashSize, g.totalSize.value = _.dashSize + _.gapSize, g.scale.value = _.scale
	}

	function o(g, _, w, x) {
		g.diffuse.value.copy(_.color), g.opacity.value = _.opacity, g.size.value = _.size * w, g.scale.value = x * .5, _.map && (g.map.value = _.map), _.alphaMap && (g.alphaMap.value = _.alphaMap), _.alphaTest > 0 && (g.alphaTest.value = _.alphaTest);
		let y;
		_.map ? y = _.map : _.alphaMap && (y = _.alphaMap), y !== void 0 && (y.matrixAutoUpdate === !0 && y.updateMatrix(), g.uvTransform.value.copy(y.matrix))
	}

	function a(g, _) {
		g.diffuse.value.copy(_.color), g.opacity.value = _.opacity, g.rotation.value = _.rotation, _.map && (g.map.value = _.map), _.alphaMap && (g.alphaMap.value = _.alphaMap), _.alphaTest > 0 && (g.alphaTest.value = _.alphaTest);
		let w;
		_.map ? w = _.map : _.alphaMap && (w = _.alphaMap), w !== void 0 && (w.matrixAutoUpdate === !0 && w.updateMatrix(), g.uvTransform.value.copy(w.matrix))
	}

	function l(g, _) {
		_.emissiveMap && (g.emissiveMap.value = _.emissiveMap)
	}

	function c(g, _) {
		g.specular.value.copy(_.specular), g.shininess.value = Math.max(_.shininess, 1e-4), _.emissiveMap && (g.emissiveMap.value = _.emissiveMap), _.bumpMap && (g.bumpMap.value = _.bumpMap, g.bumpScale.value = _.bumpScale, _.side === zt && (g.bumpScale.value *= -1)), _.normalMap && (g.normalMap.value = _.normalMap, g.normalScale.value.copy(_.normalScale), _.side === zt && g.normalScale.value.negate()), _.displacementMap && (g.displacementMap.value = _.displacementMap, g.displacementScale.value = _.displacementScale, g.displacementBias.value = _.displacementBias)
	}

	function h(g, _) {
		_.gradientMap && (g.gradientMap.value = _.gradientMap), _.emissiveMap && (g.emissiveMap.value = _.emissiveMap), _.bumpMap && (g.bumpMap.value = _.bumpMap, g.bumpScale.value = _.bumpScale, _.side === zt && (g.bumpScale.value *= -1)), _.normalMap && (g.normalMap.value = _.normalMap, g.normalScale.value.copy(_.normalScale), _.side === zt && g.normalScale.value.negate()), _.displacementMap && (g.displacementMap.value = _.displacementMap, g.displacementScale.value = _.displacementScale, g.displacementBias.value = _.displacementBias)
	}

	function u(g, _) {
		g.roughness.value = _.roughness, g.metalness.value = _.metalness, _.roughnessMap && (g.roughnessMap.value = _.roughnessMap), _.metalnessMap && (g.metalnessMap.value = _.metalnessMap), _.emissiveMap && (g.emissiveMap.value = _.emissiveMap), _.bumpMap && (g.bumpMap.value = _.bumpMap, g.bumpScale.value = _.bumpScale, _.side === zt && (g.bumpScale.value *= -1)), _.normalMap && (g.normalMap.value = _.normalMap, g.normalScale.value.copy(_.normalScale), _.side === zt && g.normalScale.value.negate()), _.displacementMap && (g.displacementMap.value = _.displacementMap, g.displacementScale.value = _.displacementScale, g.displacementBias.value = _.displacementBias), r.get(_).envMap && (g.envMapIntensity.value = _.envMapIntensity)
	}

	function f(g, _, w) {
		u(g, _), g.ior.value = _.ior, _.sheen > 0 && (g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen), g.sheenRoughness.value = _.sheenRoughness, _.sheenColorMap && (g.sheenColorMap.value = _.sheenColorMap), _.sheenRoughnessMap && (g.sheenRoughnessMap.value = _.sheenRoughnessMap)), _.clearcoat > 0 && (g.clearcoat.value = _.clearcoat, g.clearcoatRoughness.value = _.clearcoatRoughness, _.clearcoatMap && (g.clearcoatMap.value = _.clearcoatMap), _.clearcoatRoughnessMap && (g.clearcoatRoughnessMap.value = _.clearcoatRoughnessMap), _.clearcoatNormalMap && (g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale), g.clearcoatNormalMap.value = _.clearcoatNormalMap, _.side === zt && g.clearcoatNormalScale.value.negate())), _.transmission > 0 && (g.transmission.value = _.transmission, g.transmissionSamplerMap.value = w.texture, g.transmissionSamplerSize.value.set(w.width, w.height), _.transmissionMap && (g.transmissionMap.value = _.transmissionMap), g.thickness.value = _.thickness, _.thicknessMap && (g.thicknessMap.value = _.thicknessMap), g.attenuationDistance.value = _.attenuationDistance, g.attenuationColor.value.copy(_.attenuationColor)), g.specularIntensity.value = _.specularIntensity, g.specularColor.value.copy(_.specularColor), _.specularIntensityMap && (g.specularIntensityMap.value = _.specularIntensityMap), _.specularColorMap && (g.specularColorMap.value = _.specularColorMap)
	}

	function d(g, _) {
		_.matcap && (g.matcap.value = _.matcap), _.bumpMap && (g.bumpMap.value = _.bumpMap, g.bumpScale.value = _.bumpScale, _.side === zt && (g.bumpScale.value *= -1)), _.normalMap && (g.normalMap.value = _.normalMap, g.normalScale.value.copy(_.normalScale), _.side === zt && g.normalScale.value.negate()), _.displacementMap && (g.displacementMap.value = _.displacementMap, g.displacementScale.value = _.displacementScale, g.displacementBias.value = _.displacementBias)
	}

	function p(g, _) {
		_.displacementMap && (g.displacementMap.value = _.displacementMap, g.displacementScale.value = _.displacementScale, g.displacementBias.value = _.displacementBias)
	}

	function m(g, _) {
		_.displacementMap && (g.displacementMap.value = _.displacementMap, g.displacementScale.value = _.displacementScale, g.displacementBias.value = _.displacementBias), g.referencePosition.value.copy(_.referencePosition), g.nearDistance.value = _.nearDistance, g.farDistance.value = _.farDistance
	}

	function v(g, _) {
		_.bumpMap && (g.bumpMap.value = _.bumpMap, g.bumpScale.value = _.bumpScale, _.side === zt && (g.bumpScale.value *= -1)), _.normalMap && (g.normalMap.value = _.normalMap, g.normalScale.value.copy(_.normalScale), _.side === zt && g.normalScale.value.negate()), _.displacementMap && (g.displacementMap.value = _.displacementMap, g.displacementScale.value = _.displacementScale, g.displacementBias.value = _.displacementBias)
	}
	return {
		refreshFogUniforms: e,
		refreshMaterialUniforms: t
	}
}

function NT() {
	const r = dc("canvas");
	return r.style.display = "block", r
}

function it(r = {}) {
	const e = r.canvas !== void 0 ? r.canvas : NT(),
		t = r.context !== void 0 ? r.context : null,
		n = r.alpha !== void 0 ? r.alpha : !1,
		i = r.depth !== void 0 ? r.depth : !0,
		s = r.stencil !== void 0 ? r.stencil : !0,
		o = r.antialias !== void 0 ? r.antialias : !1,
		a = r.premultipliedAlpha !== void 0 ? r.premultipliedAlpha : !0,
		l = r.preserveDrawingBuffer !== void 0 ? r.preserveDrawingBuffer : !1,
		c = r.powerPreference !== void 0 ? r.powerPreference : "default",
		h = r.failIfMajorPerformanceCaveat !== void 0 ? r.failIfMajorPerformanceCaveat : !1;
	let u = null,
		f = null;
	const d = [],
		p = [];
	this.domElement = e, this.debug = {
		checkShaderErrors: !0
	}, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = li, this.physicallyCorrectLights = !1, this.toneMapping = cr, this.toneMappingExposure = 1;
	const m = this;
	let v = !1,
		g = 0,
		_ = 0,
		w = null,
		x = -1,
		y = null;
	const b = new rt,
		S = new rt;
	let D = null,
		O = e.width,
		z = e.height,
		P = 1,
		M = null,
		E = null;
	const R = new rt(0, 0, O, z),
		V = new rt(0, 0, O, z);
	let N = !1;
	const k = [],
		J = new gc;
	let se = !1,
		A = !1,
		Y = null;
	const de = new Oe,
		U = new I,
		W = {
			background: null,
			fog: null,
			environment: null,
			overrideMaterial: null,
			isScene: !0
		};

	function te() {
		return w === null ? P : 1
	}
	let q = t;

	function oe(T, B) {
		for (let X = 0; X < T.length; X++) {
			const G = T[X],
				$ = e.getContext(G, B);
			if ($ !== null) return $
		}
		return null
	}
	try {
		const T = {
			alpha: n,
			depth: i,
			stencil: s,
			antialias: o,
			premultipliedAlpha: a,
			preserveDrawingBuffer: l,
			powerPreference: c,
			failIfMajorPerformanceCaveat: h
		};
		if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${hf}`), e.addEventListener("webglcontextlost", Fe, !1), e.addEventListener("webglcontextrestored", be, !1), q === null) {
			const B = ["webgl2", "webgl", "experimental-webgl"];
			if (m.isWebGL1Renderer === !0 && B.shift(), q = oe(B, T), q === null) throw oe(B) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
		}
		q.getShaderPrecisionFormat === void 0 && (q.getShaderPrecisionFormat = function() {
			return {
				rangeMin: 1,
				rangeMax: 1,
				precision: 1
			}
		})
	} catch (T) {
		throw console.error("THREE.WebGLRenderer: " + T.message), T
	}
	let ce, ie, me, we, j, Z, ee, ge, ue, H, Re, Ne, Qe, L, C, K, ae, le, Q, Pe, Se, pe, F;

	function he() {
		ce = new iS(q), ie = new ZM(q, ce, r), ce.init(ie), pe = new IT(q, ce, ie), me = new PT(q, ce, ie), k[0] = 1029, we = new oS, j = new yT, Z = new DT(q, ce, me, j, ie, pe, we), ee = new QM(m), ge = new nS(m), ue = new y1(q, ie), F = new jM(q, ce, ue, ie), H = new rS(q, ue, we, F), Re = new hS(q, H, ue, we), Q = new cS(q, ie, Z), K = new JM(j), Ne = new xT(m, ee, ge, ce, ie, F, K), Qe = new OT(j), L = new bT, C = new CT(ce, ie), le = new YM(m, ee, me, Re, a), ae = new _0(m, Re, ie), Pe = new $M(q, ce, we, ie), Se = new sS(q, ce, we, ie), we.programs = Ne.programs, m.capabilities = ie, m.extensions = ce, m.properties = j, m.renderLists = L, m.shadowMap = ae, m.state = me, m.info = we
	}
	he();
	const re = new zT(m, q);
	this.xr = re, this.getContext = function() {
		return q
	}, this.getContextAttributes = function() {
		return q.getContextAttributes()
	}, this.forceContextLoss = function() {
		const T = ce.get("WEBGL_lose_context");
		T && T.loseContext()
	}, this.forceContextRestore = function() {
		const T = ce.get("WEBGL_lose_context");
		T && T.restoreContext()
	}, this.getPixelRatio = function() {
		return P
	}, this.setPixelRatio = function(T) {
		T !== void 0 && (P = T, this.setSize(O, z, !1))
	}, this.getSize = function(T) {
		return T.set(O, z)
	}, this.setSize = function(T, B, X) {
		if (re.isPresenting) {
			console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
			return
		}
		O = T, z = B, e.width = Math.floor(T * P), e.height = Math.floor(B * P), X !== !1 && (e.style.width = T + "px", e.style.height = B + "px"), this.setViewport(0, 0, T, B)
	}, this.getDrawingBufferSize = function(T) {
		return T.set(O * P, z * P).floor()
	}, this.setDrawingBufferSize = function(T, B, X) {
		O = T, z = B, P = X, e.width = Math.floor(T * X), e.height = Math.floor(B * X), this.setViewport(0, 0, T, B)
	}, this.getCurrentViewport = function(T) {
		return T.copy(b)
	}, this.getViewport = function(T) {
		return T.copy(R)
	}, this.setViewport = function(T, B, X, G) {
		T.isVector4 ? R.set(T.x, T.y, T.z, T.w) : R.set(T, B, X, G), me.viewport(b.copy(R).multiplyScalar(P).floor())
	}, this.getScissor = function(T) {
		return T.copy(V)
	}, this.setScissor = function(T, B, X, G) {
		T.isVector4 ? V.set(T.x, T.y, T.z, T.w) : V.set(T, B, X, G), me.scissor(S.copy(V).multiplyScalar(P).floor())
	}, this.getScissorTest = function() {
		return N
	}, this.setScissorTest = function(T) {
		me.setScissorTest(N = T)
	}, this.setOpaqueSort = function(T) {
		M = T
	}, this.setTransparentSort = function(T) {
		E = T
	}, this.getClearColor = function(T) {
		return T.copy(le.getClearColor())
	}, this.setClearColor = function() {
		le.setClearColor.apply(le, arguments)
	}, this.getClearAlpha = function() {
		return le.getClearAlpha()
	}, this.setClearAlpha = function() {
		le.setClearAlpha.apply(le, arguments)
	}, this.clear = function(T, B, X) {
		let G = 0;
		(T === void 0 || T) && (G |= 16384), (B === void 0 || B) && (G |= 256), (X === void 0 || X) && (G |= 1024), q.clear(G)
	}, this.clearColor = function() {
		this.clear(!0, !1, !1)
	}, this.clearDepth = function() {
		this.clear(!1, !0, !1)
	}, this.clearStencil = function() {
		this.clear(!1, !1, !0)
	}, this.dispose = function() {
		e.removeEventListener("webglcontextlost", Fe, !1), e.removeEventListener("webglcontextrestored", be, !1), L.dispose(), C.dispose(), j.dispose(), ee.dispose(), ge.dispose(), Re.dispose(), F.dispose(), Ne.dispose(), re.dispose(), re.removeEventListener("sessionstart", kt), re.removeEventListener("sessionend", xt), Y && (Y.dispose(), Y = null), It.stop()
	};

	function Fe(T) {
		T.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), v = !0
	}

	function be() {
		console.log("THREE.WebGLRenderer: Context Restored."), v = !1;
		const T = we.autoReset,
			B = ae.enabled,
			X = ae.autoUpdate,
			G = ae.needsUpdate,
			$ = ae.type;
		he(), we.autoReset = T, ae.enabled = B, ae.autoUpdate = X, ae.needsUpdate = G, ae.type = $
	}

	function Ue(T) {
		const B = T.target;
		B.removeEventListener("dispose", Ue), _e(B)
	}

	function _e(T) {
		ze(T), j.remove(T)
	}

	function ze(T) {
		const B = j.get(T).programs;
		B !== void 0 && (B.forEach(function(X) {
			Ne.releaseProgram(X)
		}), T.isShaderMaterial && Ne.releaseShaderCache(T))
	}
	this.renderBufferDirect = function(T, B, X, G, $, Le) {
		B === null && (B = W);
		const Ee = $.isMesh && $.matrixWorld.determinant() < 0,
			Ae = yt(T, B, X, G, $);
		me.setMaterial(G, Ee);
		let xe = X.index;
		const Ve = X.attributes.position;
		if (xe === null) {
			if (Ve === void 0 || Ve.count === 0) return
		} else if (xe.count === 0) return;
		let Ce = 1;
		G.wireframe === !0 && (xe = H.getWireframeAttribute(X), Ce = 2), F.setup($, G, Ae, X, xe);
		let Be, Ke = Pe;
		xe !== null && (Be = ue.get(xe), Ke = Se, Ke.setIndex(Be));
		const wt = xe !== null ? xe.count : Ve.count,
			ht = X.drawRange.start * Ce,
			ke = X.drawRange.count * Ce,
			Ut = Le !== null ? Le.start * Ce : 0,
			ut = Le !== null ? Le.count * Ce : 1 / 0,
			st = Math.max(ht, Ut),
			ft = Math.min(wt, ht + ke, Ut + ut) - 1,
			Tt = Math.max(0, ft - st + 1);
		if (Tt !== 0) {
			if ($.isMesh) G.wireframe === !0 ? (me.setLineWidth(G.wireframeLinewidth * te()), Ke.setMode(1)) : Ke.setMode(4);
			else if ($.isLine) {
				let Pn = G.linewidth;
				Pn === void 0 && (Pn = 1), me.setLineWidth(Pn * te()), $.isLineSegments ? Ke.setMode(1) : $.isLineLoop ? Ke.setMode(2) : Ke.setMode(3)
			} else $.isPoints ? Ke.setMode(0) : $.isSprite && Ke.setMode(4);
			if ($.isInstancedMesh) Ke.renderInstances(st, Tt, $.count);
			else if (X.isInstancedBufferGeometry) {
				const Pn = Math.min(X.instanceCount, X._maxInstanceCount);
				Ke.renderInstances(st, Tt, Pn)
			} else Ke.render(st, Tt)
		}
	}, this.compile = function(T, B) {
		f = C.get(T), f.init(), p.push(f), T.traverseVisible(function(X) {
			X.isLight && X.layers.test(B.layers) && (f.pushLight(X), X.castShadow && f.pushShadow(X))
		}), f.setupLights(m.physicallyCorrectLights), T.traverse(function(X) {
			const G = X.material;
			if (G)
				if (Array.isArray(G))
					for (let $ = 0; $ < G.length; $++) {
						const Le = G[$];
						Ie(Le, T, X)
					} else Ie(G, T, X)
		}), p.pop(), f = null
	};
	let je = null;

	function Te(T) {
		je && je(T)
	}

	function kt() {
		It.stop()
	}

	function xt() {
		It.start()
	}
	const It = new i0;
	It.setAnimationLoop(Te), typeof window < "u" && It.setContext(window), this.setAnimationLoop = function(T) {
		je = T, re.setAnimationLoop(T), T === null ? It.stop() : It.start()
	}, re.addEventListener("sessionstart", kt), re.addEventListener("sessionend", xt), this.render = function(T, B) {
		if (B !== void 0 && B.isCamera !== !0) {
			console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
			return
		}
		if (v === !0) return;
		T.autoUpdate === !0 && T.updateMatrixWorld(), B.parent === null && B.updateMatrixWorld(), re.enabled === !0 && re.isPresenting === !0 && (re.cameraAutoUpdate === !0 && re.updateCamera(B), B = re.getCamera()), T.isScene === !0 && T.onBeforeRender(m, T, B, w), f = C.get(T, p.length), f.init(), p.push(f), de.multiplyMatrices(B.projectionMatrix, B.matrixWorldInverse), J.setFromProjectionMatrix(de), A = this.localClippingEnabled, se = K.init(this.clippingPlanes, A, B), u = L.get(T, d.length), u.init(), d.push(u), yn(T, B, 0, m.sortObjects), u.finish(), m.sortObjects === !0 && u.sort(M, E), se === !0 && K.beginShadows();
		const X = f.state.shadowsArray;
		if (ae.render(X, T, B), se === !0 && K.endShadows(), this.info.autoReset === !0 && this.info.reset(), le.render(u, T), f.setupLights(m.physicallyCorrectLights), B.isArrayCamera) {
			const G = B.cameras;
			for (let $ = 0, Le = G.length; $ < Le; $++) {
				const Ee = G[$];
				hi(u, T, Ee, Ee.viewport)
			}
		} else hi(u, T, B);
		w !== null && (Z.updateMultisampleRenderTarget(w), Z.updateRenderTargetMipmap(w)), T.isScene === !0 && T.onAfterRender(m, T, B), me.buffers.depth.setTest(!0), me.buffers.depth.setMask(!0), me.buffers.color.setMask(!0), me.setPolygonOffset(!1), F.resetDefaultState(), x = -1, y = null, p.pop(), p.length > 0 ? f = p[p.length - 1] : f = null, d.pop(), d.length > 0 ? u = d[d.length - 1] : u = null
	};

	function yn(T, B, X, G) {
		if (T.visible === !1) return;
		if (T.layers.test(B.layers)) {
			if (T.isGroup) X = T.renderOrder;
			else if (T.isLOD) T.autoUpdate === !0 && T.update(B);
			else if (T.isLight) f.pushLight(T), T.castShadow && f.pushShadow(T);
			else if (T.isSprite) {
				if (!T.frustumCulled || J.intersectsSprite(T)) {
					G && U.setFromMatrixPosition(T.matrixWorld).applyMatrix4(de);
					const Ee = Re.update(T),
						Ae = T.material;
					Ae.visible && u.push(T, Ee, Ae, X, U.z, null)
				}
			} else if ((T.isMesh || T.isLine || T.isPoints) && (T.isSkinnedMesh && T.skeleton.frame !== we.render.frame && (T.skeleton.update(), T.skeleton.frame = we.render.frame), !T.frustumCulled || J.intersectsObject(T))) {
				G && U.setFromMatrixPosition(T.matrixWorld).applyMatrix4(de);
				const Ee = Re.update(T),
					Ae = T.material;
				if (Array.isArray(Ae)) {
					const xe = Ee.groups;
					for (let Ve = 0, Ce = xe.length; Ve < Ce; Ve++) {
						const Be = xe[Ve],
							Ke = Ae[Be.materialIndex];
						Ke && Ke.visible && u.push(T, Ee, Ke, X, U.z, Be)
					}
				} else Ae.visible && u.push(T, Ee, Ae, X, U.z, null)
			}
		}
		const Le = T.children;
		for (let Ee = 0, Ae = Le.length; Ee < Ae; Ee++) yn(Le[Ee], B, X, G)
	}

	function hi(T, B, X, G) {
		const $ = T.opaque,
			Le = T.transmissive,
			Ee = T.transparent;
		f.setupLightsView(X), Le.length > 0 && Vi($, B, X), G && me.viewport(b.copy(G)), $.length > 0 && wn($, B, X), Le.length > 0 && wn(Le, B, X), Ee.length > 0 && wn(Ee, B, X)
	}

	function Vi(T, B, X) {
		if (Y === null) {
			const Ee = o === !0 && ie.isWebGL2 === !0 ? df : Kn;
			Y = new Ee(1024, 1024, {
				generateMipmaps: !0,
				type: pe.convert(Xr) !== null ? Xr : Bi,
				minFilter: fc,
				magFilter: Pt,
				wrapS: Vn,
				wrapT: Vn,
				useRenderToTexture: ce.has("WEBGL_multisampled_render_to_texture")
			})
		}
		const G = m.getRenderTarget();
		m.setRenderTarget(Y), m.clear();
		const $ = m.toneMapping;
		m.toneMapping = cr, wn(T, B, X), m.toneMapping = $, Z.updateMultisampleRenderTarget(Y), Z.updateRenderTargetMipmap(Y), m.setRenderTarget(G)
	}

	function wn(T, B, X) {
		const G = B.isScene === !0 ? B.overrideMaterial : null;
		for (let $ = 0, Le = T.length; $ < Le; $++) {
			const Ee = T[$],
				Ae = Ee.object,
				xe = Ee.geometry,
				Ve = G === null ? Ee.material : G,
				Ce = Ee.group;
			Ae.layers.test(X.layers) && Ge(Ae, B, X, xe, Ve, Ce)
		}
	}

	function Ge(T, B, X, G, $, Le) {
		T.onBeforeRender(m, B, X, G, $, Le), T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse, T.matrixWorld), T.normalMatrix.getNormalMatrix(T.modelViewMatrix), $.onBeforeRender(m, B, X, G, T, Le), $.transparent === !0 && $.side === Kr ? ($.side = zt, $.needsUpdate = !0, m.renderBufferDirect(X, B, G, $, T, Le), $.side = da, $.needsUpdate = !0, m.renderBufferDirect(X, B, G, $, T, Le), $.side = Kr) : m.renderBufferDirect(X, B, G, $, T, Le), T.onAfterRender(m, B, X, G, $, Le)
	}

	function Ie(T, B, X) {
		B.isScene !== !0 && (B = W);
		const G = j.get(T),
			$ = f.state.lights,
			Le = f.state.shadowsArray,
			Ee = $.state.version,
			Ae = Ne.getParameters(T, $.state, Le, B, X),
			xe = Ne.getProgramCacheKey(Ae);
		let Ve = G.programs;
		G.environment = T.isMeshStandardMaterial ? B.environment : null, G.fog = B.fog, G.envMap = (T.isMeshStandardMaterial ? ge : ee).get(T.envMap || G.environment), Ve === void 0 && (T.addEventListener("dispose", Ue), Ve = new Map, G.programs = Ve);
		let Ce = Ve.get(xe);
		if (Ce !== void 0) {
			if (G.currentProgram === Ce && G.lightsStateVersion === Ee) return Je(T, Ae), Ce
		} else Ae.uniforms = Ne.getUniforms(T), T.onBuild(X, Ae, m), T.onBeforeCompile(Ae, m), Ce = Ne.acquireProgram(Ae, xe), Ve.set(xe, Ce), G.uniforms = Ae.uniforms;
		const Be = G.uniforms;
		(!T.isShaderMaterial && !T.isRawShaderMaterial || T.clipping === !0) && (Be.clippingPlanes = K.uniform), Je(T, Ae), G.needsLights = We(T), G.lightsStateVersion = Ee, G.needsLights && (Be.ambientLightColor.value = $.state.ambient, Be.lightProbe.value = $.state.probe, Be.directionalLights.value = $.state.directional, Be.directionalLightShadows.value = $.state.directionalShadow, Be.spotLights.value = $.state.spot, Be.spotLightShadows.value = $.state.spotShadow, Be.rectAreaLights.value = $.state.rectArea, Be.ltc_1.value = $.state.rectAreaLTC1, Be.ltc_2.value = $.state.rectAreaLTC2, Be.pointLights.value = $.state.point, Be.pointLightShadows.value = $.state.pointShadow, Be.hemisphereLights.value = $.state.hemi, Be.directionalShadowMap.value = $.state.directionalShadowMap, Be.directionalShadowMatrix.value = $.state.directionalShadowMatrix, Be.spotShadowMap.value = $.state.spotShadowMap, Be.spotShadowMatrix.value = $.state.spotShadowMatrix, Be.pointShadowMap.value = $.state.pointShadowMap, Be.pointShadowMatrix.value = $.state.pointShadowMatrix);
		const Ke = Ce.getUniforms(),
			wt = fr.seqWithValue(Ke.seq, Be);
		return G.currentProgram = Ce, G.uniformsList = wt, Ce
	}

	function Je(T, B) {
		const X = j.get(T);
		X.outputEncoding = B.outputEncoding, X.instancing = B.instancing, X.skinning = B.skinning, X.morphTargets = B.morphTargets, X.morphNormals = B.morphNormals, X.morphTargetsCount = B.morphTargetsCount, X.numClippingPlanes = B.numClippingPlanes, X.numIntersection = B.numClipIntersection, X.vertexAlphas = B.vertexAlphas, X.vertexTangents = B.vertexTangents, X.toneMapping = B.toneMapping
	}

	function yt(T, B, X, G, $) {
		B.isScene !== !0 && (B = W), Z.resetTextureUnits();
		const Le = B.fog,
			Ee = G.isMeshStandardMaterial ? B.environment : null,
			Ae = w === null ? m.outputEncoding : w.texture.encoding,
			xe = (G.isMeshStandardMaterial ? ge : ee).get(G.envMap || Ee),
			Ve = G.vertexColors === !0 && !!X.attributes.color && X.attributes.color.itemSize === 4,
			Ce = !!G.normalMap && !!X.attributes.tangent,
			Be = !!X.morphAttributes.position,
			Ke = !!X.morphAttributes.normal,
			wt = X.morphAttributes.position ? X.morphAttributes.position.length : 0,
			ht = G.toneMapped ? m.toneMapping : cr,
			ke = j.get(G),
			Ut = f.state.lights;
		if (se === !0 && (A === !0 || T !== y)) {
			const bt = T === y && G.id === x;
			K.setState(G, T, bt)
		}
		let ut = !1;
		G.version === ke.__version ? (ke.needsLights && ke.lightsStateVersion !== Ut.state.version || ke.outputEncoding !== Ae || $.isInstancedMesh && ke.instancing === !1 || !$.isInstancedMesh && ke.instancing === !0 || $.isSkinnedMesh && ke.skinning === !1 || !$.isSkinnedMesh && ke.skinning === !0 || ke.envMap !== xe || G.fog && ke.fog !== Le || ke.numClippingPlanes !== void 0 && (ke.numClippingPlanes !== K.numPlanes || ke.numIntersection !== K.numIntersection) || ke.vertexAlphas !== Ve || ke.vertexTangents !== Ce || ke.morphTargets !== Be || ke.morphNormals !== Ke || ke.toneMapping !== ht || ie.isWebGL2 === !0 && ke.morphTargetsCount !== wt) && (ut = !0) : (ut = !0, ke.__version = G.version);
		let st = ke.currentProgram;
		ut === !0 && (st = Ie(G, B, $));
		let ft = !1,
			Tt = !1,
			Pn = !1;
		const Ft = st.getUniforms(),
			ni = ke.uniforms;
		if (me.useProgram(st.program) && (ft = !0, Tt = !0, Pn = !0), G.id !== x && (x = G.id, Tt = !0), ft || y !== T) {
			if (Ft.setValue(q, "projectionMatrix", T.projectionMatrix), ie.logarithmicDepthBuffer && Ft.setValue(q, "logDepthBufFC", 2 / (Math.log(T.far + 1) / Math.LN2)), y !== T && (y = T, Tt = !0, Pn = !0), G.isShaderMaterial || G.isMeshPhongMaterial || G.isMeshToonMaterial || G.isMeshStandardMaterial || G.envMap) {
				const bt = Ft.map.cameraPosition;
				bt !== void 0 && bt.setValue(q, U.setFromMatrixPosition(T.matrixWorld))
			}(G.isMeshPhongMaterial || G.isMeshToonMaterial || G.isMeshLambertMaterial || G.isMeshBasicMaterial || G.isMeshStandardMaterial || G.isShaderMaterial) && Ft.setValue(q, "isOrthographic", T.isOrthographicCamera === !0), (G.isMeshPhongMaterial || G.isMeshToonMaterial || G.isMeshLambertMaterial || G.isMeshBasicMaterial || G.isMeshStandardMaterial || G.isShaderMaterial || G.isShadowMaterial || $.isSkinnedMesh) && Ft.setValue(q, "viewMatrix", T.matrixWorldInverse)
		}
		if ($.isSkinnedMesh) {
			Ft.setOptional(q, $, "bindMatrix"), Ft.setOptional(q, $, "bindMatrixInverse");
			const bt = $.skeleton;
			bt && (ie.floatVertexTextures ? (bt.boneTexture === null && bt.computeBoneTexture(), Ft.setValue(q, "boneTexture", bt.boneTexture, Z), Ft.setValue(q, "boneTextureSize", bt.boneTextureSize)) : Ft.setOptional(q, bt, "boneMatrices"))
		}
		return X && (X.morphAttributes.position !== void 0 || X.morphAttributes.normal !== void 0) && Q.update($, X, G, st), (Tt || ke.receiveShadow !== $.receiveShadow) && (ke.receiveShadow = $.receiveShadow, Ft.setValue(q, "receiveShadow", $.receiveShadow)), Tt && (Ft.setValue(q, "toneMappingExposure", m.toneMappingExposure), ke.needsLights && ye(ni, Pn), Le && G.fog && Qe.refreshFogUniforms(ni, Le), Qe.refreshMaterialUniforms(ni, G, P, z, Y), fr.upload(q, ke.uniformsList, ni, Z)), G.isShaderMaterial && G.uniformsNeedUpdate === !0 && (fr.upload(q, ke.uniformsList, ni, Z), G.uniformsNeedUpdate = !1), G.isSpriteMaterial && Ft.setValue(q, "center", $.center), Ft.setValue(q, "modelViewMatrix", $.modelViewMatrix), Ft.setValue(q, "normalMatrix", $.normalMatrix), Ft.setValue(q, "modelMatrix", $.matrixWorld), st
	}

	function ye(T, B) {
		T.ambientLightColor.needsUpdate = B, T.lightProbe.needsUpdate = B, T.directionalLights.needsUpdate = B, T.directionalLightShadows.needsUpdate = B, T.pointLights.needsUpdate = B, T.pointLightShadows.needsUpdate = B, T.spotLights.needsUpdate = B, T.spotLightShadows.needsUpdate = B, T.rectAreaLights.needsUpdate = B, T.hemisphereLights.needsUpdate = B
	}

	function We(T) {
		return T.isMeshLambertMaterial || T.isMeshToonMaterial || T.isMeshPhongMaterial || T.isMeshStandardMaterial || T.isShadowMaterial || T.isShaderMaterial && T.lights === !0
	}
	this.getActiveCubeFace = function() {
		return g
	}, this.getActiveMipmapLevel = function() {
		return _
	}, this.getRenderTarget = function() {
		return w
	}, this.setRenderTargetTextures = function(T, B, X) {
		j.get(T.texture).__webglTexture = B, j.get(T.depthTexture).__webglTexture = X;
		const G = j.get(T);
		G.__hasExternalTextures = !0, G.__hasExternalTextures && (G.__autoAllocateDepthBuffer = X === void 0, G.__autoAllocateDepthBuffer || T.useRenderToTexture && (console.warn("render-to-texture extension was disabled because an external texture was provided"), T.useRenderToTexture = !1, T.useRenderbuffer = !0))
	}, this.setRenderTargetFramebuffer = function(T, B) {
		const X = j.get(T);
		X.__webglFramebuffer = B, X.__useDefaultFramebuffer = B === void 0
	}, this.setRenderTarget = function(T, B = 0, X = 0) {
		w = T, g = B, _ = X;
		let G = !0;
		if (T) {
			const xe = j.get(T);
			xe.__useDefaultFramebuffer !== void 0 ? (me.bindFramebuffer(36160, null), G = !1) : xe.__webglFramebuffer === void 0 ? Z.setupRenderTarget(T) : xe.__hasExternalTextures && Z.rebindTextures(T, j.get(T.texture).__webglTexture, j.get(T.depthTexture).__webglTexture)
		}
		let $ = null,
			Le = !1,
			Ee = !1;
		if (T) {
			const xe = T.texture;
			(xe.isDataTexture3D || xe.isDataTexture2DArray) && (Ee = !0);
			const Ve = j.get(T).__webglFramebuffer;
			T.isWebGLCubeRenderTarget ? ($ = Ve[B], Le = !0) : T.useRenderbuffer ? $ = j.get(T).__webglMultisampledFramebuffer : $ = Ve, b.copy(T.viewport), S.copy(T.scissor), D = T.scissorTest
		} else b.copy(R).multiplyScalar(P).floor(), S.copy(V).multiplyScalar(P).floor(), D = N;
		if (me.bindFramebuffer(36160, $) && ie.drawBuffers && G) {
			let xe = !1;
			if (T)
				if (T.isWebGLMultipleRenderTargets) {
					const Ve = T.texture;
					if (k.length !== Ve.length || k[0] !== 36064) {
						for (let Ce = 0, Be = Ve.length; Ce < Be; Ce++) k[Ce] = 36064 + Ce;
						k.length = Ve.length, xe = !0
					}
				} else(k.length !== 1 || k[0] !== 36064) && (k[0] = 36064, k.length = 1, xe = !0);
			else(k.length !== 1 || k[0] !== 1029) && (k[0] = 1029, k.length = 1, xe = !0);
			xe && (ie.isWebGL2 ? q.drawBuffers(k) : ce.get("WEBGL_draw_buffers").drawBuffersWEBGL(k))
		}
		if (me.viewport(b), me.scissor(S), me.setScissorTest(D), Le) {
			const xe = j.get(T.texture);
			q.framebufferTexture2D(36160, 36064, 34069 + B, xe.__webglTexture, X)
		} else if (Ee) {
			const xe = j.get(T.texture),
				Ve = B || 0;
			q.framebufferTextureLayer(36160, 36064, xe.__webglTexture, X || 0, Ve)
		}
		x = -1
	}, this.readRenderTargetPixels = function(T, B, X, G, $, Le, Ee) {
		if (!(T && T.isWebGLRenderTarget)) {
			console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
			return
		}
		let Ae = j.get(T).__webglFramebuffer;
		if (T.isWebGLCubeRenderTarget && Ee !== void 0 && (Ae = Ae[Ee]), Ae) {
			me.bindFramebuffer(36160, Ae);
			try {
				const xe = T.texture,
					Ve = xe.format,
					Ce = xe.type;
				if (Ve !== Xt && pe.convert(Ve) !== q.getParameter(35739)) {
					console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
					return
				}
				const Be = Ce === Xr && (ce.has("EXT_color_buffer_half_float") || ie.isWebGL2 && ce.has("EXT_color_buffer_float"));
				if (Ce !== Bi && pe.convert(Ce) !== q.getParameter(35738) && !(Ce === zi && (ie.isWebGL2 || ce.has("OES_texture_float") || ce.has("WEBGL_color_buffer_float"))) && !Be) {
					console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
					return
				}
				q.checkFramebufferStatus(36160) === 36053 ? B >= 0 && B <= T.width - G && X >= 0 && X <= T.height - $ && q.readPixels(B, X, G, $, pe.convert(Ve), pe.convert(Ce), Le) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
			} finally {
				const xe = w !== null ? j.get(w).__webglFramebuffer : null;
				me.bindFramebuffer(36160, xe)
			}
		}
	}, this.copyFramebufferToTexture = function(T, B, X = 0) {
		if (B.isFramebufferTexture !== !0) {
			console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");
			return
		}
		const G = Math.pow(2, -X),
			$ = Math.floor(B.image.width * G),
			Le = Math.floor(B.image.height * G);
		Z.setTexture2D(B, 0), q.copyTexSubImage2D(3553, X, 0, 0, T.x, T.y, $, Le), me.unbindTexture()
	}, this.copyTextureToTexture = function(T, B, X, G = 0) {
		const $ = B.image.width,
			Le = B.image.height,
			Ee = pe.convert(X.format),
			Ae = pe.convert(X.type);
		Z.setTexture2D(X, 0), q.pixelStorei(37440, X.flipY), q.pixelStorei(37441, X.premultiplyAlpha), q.pixelStorei(3317, X.unpackAlignment), B.isDataTexture ? q.texSubImage2D(3553, G, T.x, T.y, $, Le, Ee, Ae, B.image.data) : B.isCompressedTexture ? q.compressedTexSubImage2D(3553, G, T.x, T.y, B.mipmaps[0].width, B.mipmaps[0].height, Ee, B.mipmaps[0].data) : q.texSubImage2D(3553, G, T.x, T.y, Ee, Ae, B.image), G === 0 && X.generateMipmaps && q.generateMipmap(3553), me.unbindTexture()
	}, this.copyTextureToTexture3D = function(T, B, X, G, $ = 0) {
		if (m.isWebGL1Renderer) {
			console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
			return
		}
		const Le = T.max.x - T.min.x + 1,
			Ee = T.max.y - T.min.y + 1,
			Ae = T.max.z - T.min.z + 1,
			xe = pe.convert(G.format),
			Ve = pe.convert(G.type);
		let Ce;
		if (G.isDataTexture3D) Z.setTexture3D(G, 0), Ce = 32879;
		else if (G.isDataTexture2DArray) Z.setTexture2DArray(G, 0), Ce = 35866;
		else {
			console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
			return
		}
		q.pixelStorei(37440, G.flipY), q.pixelStorei(37441, G.premultiplyAlpha), q.pixelStorei(3317, G.unpackAlignment);
		const Be = q.getParameter(3314),
			Ke = q.getParameter(32878),
			wt = q.getParameter(3316),
			ht = q.getParameter(3315),
			ke = q.getParameter(32877),
			Ut = X.isCompressedTexture ? X.mipmaps[0] : X.image;
		q.pixelStorei(3314, Ut.width), q.pixelStorei(32878, Ut.height), q.pixelStorei(3316, T.min.x), q.pixelStorei(3315, T.min.y), q.pixelStorei(32877, T.min.z), X.isDataTexture || X.isDataTexture3D ? q.texSubImage3D(Ce, $, B.x, B.y, B.z, Le, Ee, Ae, xe, Ve, Ut.data) : X.isCompressedTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), q.compressedTexSubImage3D(Ce, $, B.x, B.y, B.z, Le, Ee, Ae, xe, Ut.data)) : q.texSubImage3D(Ce, $, B.x, B.y, B.z, Le, Ee, Ae, xe, Ve, Ut), q.pixelStorei(3314, Be), q.pixelStorei(32878, Ke), q.pixelStorei(3316, wt), q.pixelStorei(3315, ht), q.pixelStorei(32877, ke), $ === 0 && G.generateMipmaps && q.generateMipmap(Ce), me.unbindTexture()
	}, this.initTexture = function(T) {
		Z.setTexture2D(T, 0), me.unbindTexture()
	}, this.resetState = function() {
		g = 0, _ = 0, w = null, me.reset(), F.reset()
	}, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
		detail: this
	}))
}
it.prototype.isWebGLRenderer = !0;
class BT extends it {}
BT.prototype.isWebGL1Renderer = !0;
class yf extends nt {
	constructor() {
		super(), this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
			detail: this
		}))
	}
	copy(e, t) {
		return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.autoUpdate = e.autoUpdate, this.matrixAutoUpdate = e.matrixAutoUpdate, this
	}
	toJSON(e) {
		const t = super.toJSON(e);
		return this.fog !== null && (t.object.fog = this.fog.toJSON()), t
	}
}
yf.prototype.isScene = !0;
class Sa {
	constructor(e, t) {
		this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = ma, this.updateRange = {
			offset: 0,
			count: -1
		}, this.version = 0, this.uuid = yi()
	}
	onUploadCallback() {}
	set needsUpdate(e) {
		e === !0 && this.version++
	}
	setUsage(e) {
		return this.usage = e, this
	}
	copy(e) {
		return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this
	}
	copyAt(e, t, n) {
		e *= this.stride, n *= t.stride;
		for (let i = 0, s = this.stride; i < s; i++) this.array[e + i] = t.array[n + i];
		return this
	}
	set(e, t = 0) {
		return this.array.set(e, t), this
	}
	clone(e) {
		e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = yi()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
		const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),
			n = new this.constructor(t, this.stride);
		return n.setUsage(this.usage), n
	}
	onUpload(e) {
		return this.onUploadCallback = e, this
	}
	toJSON(e) {
		return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = yi()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))), {
			uuid: this.uuid,
			buffer: this.array.buffer._uuid,
			type: this.array.constructor.name,
			stride: this.stride
		}
	}
}
Sa.prototype.isInterleavedBuffer = !0;
const Et = new I;
class ga {
	constructor(e, t, n, i = !1) {
		this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i === !0
	}
	get count() {
		return this.data.count
	}
	get array() {
		return this.data.array
	}
	set needsUpdate(e) {
		this.data.needsUpdate = e
	}
	applyMatrix4(e) {
		for (let t = 0, n = this.data.count; t < n; t++) Et.x = this.getX(t), Et.y = this.getY(t), Et.z = this.getZ(t), Et.applyMatrix4(e), this.setXYZ(t, Et.x, Et.y, Et.z);
		return this
	}
	applyNormalMatrix(e) {
		for (let t = 0, n = this.count; t < n; t++) Et.x = this.getX(t), Et.y = this.getY(t), Et.z = this.getZ(t), Et.applyNormalMatrix(e), this.setXYZ(t, Et.x, Et.y, Et.z);
		return this
	}
	transformDirection(e) {
		for (let t = 0, n = this.count; t < n; t++) Et.x = this.getX(t), Et.y = this.getY(t), Et.z = this.getZ(t), Et.transformDirection(e), this.setXYZ(t, Et.x, Et.y, Et.z);
		return this
	}
	setX(e, t) {
		return this.data.array[e * this.data.stride + this.offset] = t, this
	}
	setY(e, t) {
		return this.data.array[e * this.data.stride + this.offset + 1] = t, this
	}
	setZ(e, t) {
		return this.data.array[e * this.data.stride + this.offset + 2] = t, this
	}
	setW(e, t) {
		return this.data.array[e * this.data.stride + this.offset + 3] = t, this
	}
	getX(e) {
		return this.data.array[e * this.data.stride + this.offset]
	}
	getY(e) {
		return this.data.array[e * this.data.stride + this.offset + 1]
	}
	getZ(e) {
		return this.data.array[e * this.data.stride + this.offset + 2]
	}
	getW(e) {
		return this.data.array[e * this.data.stride + this.offset + 3]
	}
	setXY(e, t, n) {
		return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this
	}
	setXYZ(e, t, n, i) {
		return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this
	}
	setXYZW(e, t, n, i, s) {
		return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = s, this
	}
	clone(e) {
		if (e === void 0) {
			console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
			const t = [];
			for (let n = 0; n < this.count; n++) {
				const i = n * this.data.stride + this.offset;
				for (let s = 0; s < this.itemSize; s++) t.push(this.data.array[i + s])
			}
			return new Bt(new this.array.constructor(t), this.itemSize, this.normalized)
		} else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new ga(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized)
	}
	toJSON(e) {
		if (e === void 0) {
			console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");
			const t = [];
			for (let n = 0; n < this.count; n++) {
				const i = n * this.data.stride + this.offset;
				for (let s = 0; s < this.itemSize; s++) t.push(this.data.array[i + s])
			}
			return {
				itemSize: this.itemSize,
				type: this.array.constructor.name,
				array: t,
				normalized: this.normalized
			}
		} else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
			isInterleavedBufferAttribute: !0,
			itemSize: this.itemSize,
			data: this.data.uuid,
			offset: this.offset,
			normalized: this.normalized
		}
	}
}
ga.prototype.isInterleavedBufferAttribute = !0;
class x0 extends on {
	constructor(e) {
		super(), this.type = "SpriteMaterial", this.color = new De(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.setValues(e)
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this
	}
}
x0.prototype.isSpriteMaterial = !0;
let ws;
const Eo = new I,
	bs = new I,
	Ms = new I,
	Ss = new fe,
	Ao = new fe,
	y0 = new Oe,
	cl = new I,
	Co = new I,
	hl = new I,
	_p = new fe,
	yh = new fe,
	vp = new fe;
class kT extends nt {
	constructor(e) {
		if (super(), this.type = "Sprite", ws === void 0) {
			ws = new pt;
			const t = new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]),
				n = new Sa(t, 5);
			ws.setIndex([0, 1, 2, 0, 2, 3]), ws.setAttribute("position", new ga(n, 3, 0, !1)), ws.setAttribute("uv", new ga(n, 2, 3, !1))
		}
		this.geometry = ws, this.material = e !== void 0 ? e : new x0, this.center = new fe(.5, .5)
	}
	raycast(e, t) {
		e.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), bs.setFromMatrixScale(this.matrixWorld), y0.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), Ms.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && bs.multiplyScalar(-Ms.z);
		const n = this.material.rotation;
		let i, s;
		n !== 0 && (s = Math.cos(n), i = Math.sin(n));
		const o = this.center;
		ul(cl.set(-.5, -.5, 0), Ms, o, bs, i, s), ul(Co.set(.5, -.5, 0), Ms, o, bs, i, s), ul(hl.set(.5, .5, 0), Ms, o, bs, i, s), _p.set(0, 0), yh.set(1, 0), vp.set(1, 1);
		let a = e.ray.intersectTriangle(cl, Co, hl, !1, Eo);
		if (a === null && (ul(Co.set(-.5, .5, 0), Ms, o, bs, i, s), yh.set(0, 1), a = e.ray.intersectTriangle(cl, hl, Co, !1, Eo), a === null)) return;
		const l = e.ray.origin.distanceTo(Eo);
		l < e.near || l > e.far || t.push({
			distance: l,
			point: Eo.clone(),
			uv: Nt.getUV(Eo, cl, Co, hl, _p, yh, vp, new fe),
			face: null,
			object: this
		})
	}
	copy(e) {
		return super.copy(e), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this
	}
}
kT.prototype.isSprite = !0;

function ul(r, e, t, n, i, s) {
	Ss.subVectors(r, t).addScalar(.5).multiply(n), i !== void 0 ? (Ao.x = s * Ss.x - i * Ss.y, Ao.y = i * Ss.x + s * Ss.y) : Ao.copy(Ss), r.copy(e), r.x += Ao.x, r.y += Ao.y, r.applyMatrix4(y0)
}
const xp = new I,
	yp = new rt,
	wp = new rt,
	UT = new I,
	bp = new Oe;
class w0 extends vn {
	constructor(e, t) {
		super(e, t), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new Oe, this.bindMatrixInverse = new Oe
	}
	copy(e) {
		return super.copy(e), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, this
	}
	bind(e, t) {
		this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert()
	}
	pose() {
		this.skeleton.pose()
	}
	normalizeSkinWeights() {
		const e = new rt,
			t = this.geometry.attributes.skinWeight;
		for (let n = 0, i = t.count; n < i; n++) {
			e.x = t.getX(n), e.y = t.getY(n), e.z = t.getZ(n), e.w = t.getW(n);
			const s = 1 / e.manhattanLength();
			s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w)
		}
	}
	updateMatrixWorld(e) {
		super.updateMatrixWorld(e), this.bindMode === "attached" ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === "detached" ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
	}
	boneTransform(e, t) {
		const n = this.skeleton,
			i = this.geometry;
		yp.fromBufferAttribute(i.attributes.skinIndex, e), wp.fromBufferAttribute(i.attributes.skinWeight, e), xp.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
		for (let s = 0; s < 4; s++) {
			const o = wp.getComponent(s);
			if (o !== 0) {
				const a = yp.getComponent(s);
				bp.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]), t.addScaledVector(UT.copy(xp).applyMatrix4(bp), o)
			}
		}
		return t.applyMatrix4(this.bindMatrixInverse)
	}
}
w0.prototype.isSkinnedMesh = !0;
class VT extends nt {
	constructor() {
		super(), this.type = "Bone"
	}
}
VT.prototype.isBone = !0;
class b0 extends sn {
	constructor(e = null, t = 1, n = 1, i, s, o, a, l, c = Pt, h = Pt, u, f) {
		super(null, o, a, l, c, h, i, s, u, f), this.image = {
			data: e,
			width: t,
			height: n
		}, this.magFilter = c, this.minFilter = h, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
	}
}
b0.prototype.isDataTexture = !0;
class gu extends Bt {
	constructor(e, t, n, i = 1) {
		typeof n == "number" && (i = n, n = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), super(e, t, n), this.meshPerAttribute = i
	}
	copy(e) {
		return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this
	}
	toJSON() {
		const e = super.toJSON();
		return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e
	}
}
gu.prototype.isInstancedBufferAttribute = !0;
const Mp = new Oe,
	Sp = new Oe,
	fl = [],
	Lo = new vn;
class HT extends vn {
	constructor(e, t, n) {
		super(e, t), this.instanceMatrix = new gu(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.frustumCulled = !1
	}
	copy(e) {
		return super.copy(e), this.instanceMatrix.copy(e.instanceMatrix), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, this
	}
	getColorAt(e, t) {
		t.fromArray(this.instanceColor.array, e * 3)
	}
	getMatrixAt(e, t) {
		t.fromArray(this.instanceMatrix.array, e * 16)
	}
	raycast(e, t) {
		const n = this.matrixWorld,
			i = this.count;
		if (Lo.geometry = this.geometry, Lo.material = this.material, Lo.material !== void 0)
			for (let s = 0; s < i; s++) {
				this.getMatrixAt(s, Mp), Sp.multiplyMatrices(n, Mp), Lo.matrixWorld = Sp, Lo.raycast(e, fl);
				for (let o = 0, a = fl.length; o < a; o++) {
					const l = fl[o];
					l.instanceId = s, l.object = this, t.push(l)
				}
				fl.length = 0
			}
	}
	setColorAt(e, t) {
		this.instanceColor === null && (this.instanceColor = new gu(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3)
	}
	setMatrixAt(e, t) {
		t.toArray(this.instanceMatrix.array, e * 16)
	}
	updateMorphTargets() {}
	dispose() {
		this.dispatchEvent({
			type: "dispose"
		})
	}
}
HT.prototype.isInstancedMesh = !0;
class Ta extends on {
	constructor(e) {
		super(), this.type = "LineBasicMaterial", this.color = new De(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.setValues(e)
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this
	}
}
Ta.prototype.isLineBasicMaterial = !0;
const Tp = new I,
	Ep = new I,
	Ap = new Oe,
	wh = new ho,
	dl = new co;
class wf extends nt {
	constructor(e = new pt, t = new Ta) {
		super(), this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets()
	}
	copy(e) {
		return super.copy(e), this.material = e.material, this.geometry = e.geometry, this
	}
	computeLineDistances() {
		const e = this.geometry;
		if (e.isBufferGeometry)
			if (e.index === null) {
				const t = e.attributes.position,
					n = [0];
				for (let i = 1, s = t.count; i < s; i++) Tp.fromBufferAttribute(t, i - 1), Ep.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += Tp.distanceTo(Ep);
				e.setAttribute("lineDistance", new Yt(n, 1))
			} else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
		else e.isGeometry && console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
		return this
	}
	raycast(e, t) {
		const n = this.geometry,
			i = this.matrixWorld,
			s = e.params.Line.threshold,
			o = n.drawRange;
		if (n.boundingSphere === null && n.computeBoundingSphere(), dl.copy(n.boundingSphere), dl.applyMatrix4(i), dl.radius += s, e.ray.intersectsSphere(dl) === !1) return;
		Ap.copy(i).invert(), wh.copy(e.ray).applyMatrix4(Ap);
		const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
			l = a * a,
			c = new I,
			h = new I,
			u = new I,
			f = new I,
			d = this.isLineSegments ? 2 : 1;
		if (n.isBufferGeometry) {
			const p = n.index,
				v = n.attributes.position;
			if (p !== null) {
				const g = Math.max(0, o.start),
					_ = Math.min(p.count, o.start + o.count);
				for (let w = g, x = _ - 1; w < x; w += d) {
					const y = p.getX(w),
						b = p.getX(w + 1);
					if (c.fromBufferAttribute(v, y), h.fromBufferAttribute(v, b), wh.distanceSqToSegment(c, h, f, u) > l) continue;
					f.applyMatrix4(this.matrixWorld);
					const D = e.ray.origin.distanceTo(f);
					D < e.near || D > e.far || t.push({
						distance: D,
						point: u.clone().applyMatrix4(this.matrixWorld),
						index: w,
						face: null,
						faceIndex: null,
						object: this
					})
				}
			} else {
				const g = Math.max(0, o.start),
					_ = Math.min(v.count, o.start + o.count);
				for (let w = g, x = _ - 1; w < x; w += d) {
					if (c.fromBufferAttribute(v, w), h.fromBufferAttribute(v, w + 1), wh.distanceSqToSegment(c, h, f, u) > l) continue;
					f.applyMatrix4(this.matrixWorld);
					const b = e.ray.origin.distanceTo(f);
					b < e.near || b > e.far || t.push({
						distance: b,
						point: u.clone().applyMatrix4(this.matrixWorld),
						index: w,
						face: null,
						faceIndex: null,
						object: this
					})
				}
			}
		} else n.isGeometry && console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
	}
	updateMorphTargets() {
		const e = this.geometry;
		if (e.isBufferGeometry) {
			const t = e.morphAttributes,
				n = Object.keys(t);
			if (n.length > 0) {
				const i = t[n[0]];
				if (i !== void 0) {
					this.morphTargetInfluences = [], this.morphTargetDictionary = {};
					for (let s = 0, o = i.length; s < o; s++) {
						const a = i[s].name || String(s);
						this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s
					}
				}
			}
		} else {
			const t = e.morphTargets;
			t !== void 0 && t.length > 0 && console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
		}
	}
}
wf.prototype.isLine = !0;
const Cp = new I,
	Lp = new I;
class bf extends wf {
	constructor(e, t) {
		super(e, t), this.type = "LineSegments"
	}
	computeLineDistances() {
		const e = this.geometry;
		if (e.isBufferGeometry)
			if (e.index === null) {
				const t = e.attributes.position,
					n = [];
				for (let i = 0, s = t.count; i < s; i += 2) Cp.fromBufferAttribute(t, i), Lp.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + Cp.distanceTo(Lp);
				e.setAttribute("lineDistance", new Yt(n, 1))
			} else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
		else e.isGeometry && console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
		return this
	}
}
bf.prototype.isLineSegments = !0;
class GT extends wf {
	constructor(e, t) {
		super(e, t), this.type = "LineLoop"
	}
}
GT.prototype.isLineLoop = !0;
class M0 extends on {
	constructor(e) {
		super(), this.type = "PointsMaterial", this.color = new De(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.setValues(e)
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this
	}
}
M0.prototype.isPointsMaterial = !0;
const Rp = new Oe,
	_u = new ho,
	pl = new co,
	ml = new I;
class WT extends nt {
	constructor(e = new pt, t = new M0) {
		super(), this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets()
	}
	copy(e) {
		return super.copy(e), this.material = e.material, this.geometry = e.geometry, this
	}
	raycast(e, t) {
		const n = this.geometry,
			i = this.matrixWorld,
			s = e.params.Points.threshold,
			o = n.drawRange;
		if (n.boundingSphere === null && n.computeBoundingSphere(), pl.copy(n.boundingSphere), pl.applyMatrix4(i), pl.radius += s, e.ray.intersectsSphere(pl) === !1) return;
		Rp.copy(i).invert(), _u.copy(e.ray).applyMatrix4(Rp);
		const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
			l = a * a;
		if (n.isBufferGeometry) {
			const c = n.index,
				u = n.attributes.position;
			if (c !== null) {
				const f = Math.max(0, o.start),
					d = Math.min(c.count, o.start + o.count);
				for (let p = f, m = d; p < m; p++) {
					const v = c.getX(p);
					ml.fromBufferAttribute(u, v), Pp(ml, v, l, i, e, t, this)
				}
			} else {
				const f = Math.max(0, o.start),
					d = Math.min(u.count, o.start + o.count);
				for (let p = f, m = d; p < m; p++) ml.fromBufferAttribute(u, p), Pp(ml, p, l, i, e, t, this)
			}
		} else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
	}
	updateMorphTargets() {
		const e = this.geometry;
		if (e.isBufferGeometry) {
			const t = e.morphAttributes,
				n = Object.keys(t);
			if (n.length > 0) {
				const i = t[n[0]];
				if (i !== void 0) {
					this.morphTargetInfluences = [], this.morphTargetDictionary = {};
					for (let s = 0, o = i.length; s < o; s++) {
						const a = i[s].name || String(s);
						this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s
					}
				}
			}
		} else {
			const t = e.morphTargets;
			t !== void 0 && t.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
		}
	}
}
WT.prototype.isPoints = !0;

function Pp(r, e, t, n, i, s, o) {
	const a = _u.distanceSqToPoint(r);
	if (a < t) {
		const l = new I;
		_u.closestPointToPoint(r, l), l.applyMatrix4(n);
		const c = i.ray.origin.distanceTo(l);
		if (c < i.near || c > i.far) return;
		s.push({
			distance: c,
			distanceToRay: Math.sqrt(a),
			point: l,
			index: e,
			face: null,
			object: o
		})
	}
}
class qT extends sn {
	constructor(e, t, n, i, s, o, a, l, c) {
		super(e, t, n, i, s, o, a, l, c), this.format = a !== void 0 ? a : hr, this.minFilter = o !== void 0 ? o : gn, this.magFilter = s !== void 0 ? s : gn, this.generateMipmaps = !1;
		const h = this;

		function u() {
			h.needsUpdate = !0, e.requestVideoFrameCallback(u)
		}
		"requestVideoFrameCallback" in e && e.requestVideoFrameCallback(u)
	}
	clone() {
		return new this.constructor(this.image).copy(this)
	}
	update() {
		const e = this.image;
		"requestVideoFrameCallback" in e === !1 && e.readyState >= e.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
	}
}
qT.prototype.isVideoTexture = !0;
class XT extends sn {
	constructor(e, t, n) {
		super({
			width: e,
			height: t
		}), this.format = n, this.magFilter = Pt, this.minFilter = Pt, this.generateMipmaps = !1, this.needsUpdate = !0
	}
}
XT.prototype.isFramebufferTexture = !0;
class YT extends sn {
	constructor(e, t, n, i, s, o, a, l, c, h, u, f) {
		super(null, o, a, l, c, h, i, s, u, f), this.image = {
			width: t,
			height: n
		}, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1
	}
}
YT.prototype.isCompressedTexture = !0;
class jT extends sn {
	constructor(e, t, n, i, s, o, a, l, c) {
		super(e, t, n, i, s, o, a, l, c), this.needsUpdate = !0
	}
}
jT.prototype.isCanvasTexture = !0;
class ti {
	constructor() {
		this.type = "Curve", this.arcLengthDivisions = 200
	}
	getPoint() {
		return console.warn("THREE.Curve: .getPoint() not implemented."), null
	}
	getPointAt(e, t) {
		const n = this.getUtoTmapping(e);
		return this.getPoint(n, t)
	}
	getPoints(e = 5) {
		const t = [];
		for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
		return t
	}
	getSpacedPoints(e = 5) {
		const t = [];
		for (let n = 0; n <= e; n++) t.push(this.getPointAt(n / e));
		return t
	}
	getLength() {
		const e = this.getLengths();
		return e[e.length - 1]
	}
	getLengths(e = this.arcLengthDivisions) {
		if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
		this.needsUpdate = !1;
		const t = [];
		let n, i = this.getPoint(0),
			s = 0;
		t.push(0);
		for (let o = 1; o <= e; o++) n = this.getPoint(o / e), s += n.distanceTo(i), t.push(s), i = n;
		return this.cacheArcLengths = t, t
	}
	updateArcLengths() {
		this.needsUpdate = !0, this.getLengths()
	}
	getUtoTmapping(e, t) {
		const n = this.getLengths();
		let i = 0;
		const s = n.length;
		let o;
		t ? o = t : o = e * n[s - 1];
		let a = 0,
			l = s - 1,
			c;
		for (; a <= l;)
			if (i = Math.floor(a + (l - a) / 2), c = n[i] - o, c < 0) a = i + 1;
			else if (c > 0) l = i - 1;
		else {
			l = i;
			break
		}
		if (i = l, n[i] === o) return i / (s - 1);
		const h = n[i],
			f = n[i + 1] - h,
			d = (o - h) / f;
		return (i + d) / (s - 1)
	}
	getTangent(e, t) {
		let i = e - 1e-4,
			s = e + 1e-4;
		i < 0 && (i = 0), s > 1 && (s = 1);
		const o = this.getPoint(i),
			a = this.getPoint(s),
			l = t || (o.isVector2 ? new fe : new I);
		return l.copy(a).sub(o).normalize(), l
	}
	getTangentAt(e, t) {
		const n = this.getUtoTmapping(e);
		return this.getTangent(n, t)
	}
	computeFrenetFrames(e, t) {
		const n = new I,
			i = [],
			s = [],
			o = [],
			a = new I,
			l = new Oe;
		for (let d = 0; d <= e; d++) {
			const p = d / e;
			i[d] = this.getTangentAt(p, new I)
		}
		s[0] = new I, o[0] = new I;
		let c = Number.MAX_VALUE;
		const h = Math.abs(i[0].x),
			u = Math.abs(i[0].y),
			f = Math.abs(i[0].z);
		h <= c && (c = h, n.set(1, 0, 0)), u <= c && (c = u, n.set(0, 1, 0)), f <= c && n.set(0, 0, 1), a.crossVectors(i[0], n).normalize(), s[0].crossVectors(i[0], a), o[0].crossVectors(i[0], s[0]);
		for (let d = 1; d <= e; d++) {
			if (s[d] = s[d - 1].clone(), o[d] = o[d - 1].clone(), a.crossVectors(i[d - 1], i[d]), a.length() > Number.EPSILON) {
				a.normalize();
				const p = Math.acos(Nn(i[d - 1].dot(i[d]), -1, 1));
				s[d].applyMatrix4(l.makeRotationAxis(a, p))
			}
			o[d].crossVectors(i[d], s[d])
		}
		if (t === !0) {
			let d = Math.acos(Nn(s[0].dot(s[e]), -1, 1));
			d /= e, i[0].dot(a.crossVectors(s[0], s[e])) > 0 && (d = -d);
			for (let p = 1; p <= e; p++) s[p].applyMatrix4(l.makeRotationAxis(i[p], d * p)), o[p].crossVectors(i[p], s[p])
		}
		return {
			tangents: i,
			normals: s,
			binormals: o
		}
	}
	clone() {
		return new this.constructor().copy(this)
	}
	copy(e) {
		return this.arcLengthDivisions = e.arcLengthDivisions, this
	}
	toJSON() {
		const e = {
			metadata: {
				version: 4.5,
				type: "Curve",
				generator: "Curve.toJSON"
			}
		};
		return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e
	}
	fromJSON(e) {
		return this.arcLengthDivisions = e.arcLengthDivisions, this
	}
}
class wc extends ti {
	constructor(e = 0, t = 0, n = 1, i = 1, s = 0, o = Math.PI * 2, a = !1, l = 0) {
		super(), this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = i, this.aStartAngle = s, this.aEndAngle = o, this.aClockwise = a, this.aRotation = l
	}
	getPoint(e, t) {
		const n = t || new fe,
			i = Math.PI * 2;
		let s = this.aEndAngle - this.aStartAngle;
		const o = Math.abs(s) < Number.EPSILON;
		for (; s < 0;) s += i;
		for (; s > i;) s -= i;
		s < Number.EPSILON && (o ? s = 0 : s = i), this.aClockwise === !0 && !o && (s === i ? s = -i : s = s - i);
		const a = this.aStartAngle + e * s;
		let l = this.aX + this.xRadius * Math.cos(a),
			c = this.aY + this.yRadius * Math.sin(a);
		if (this.aRotation !== 0) {
			const h = Math.cos(this.aRotation),
				u = Math.sin(this.aRotation),
				f = l - this.aX,
				d = c - this.aY;
			l = f * h - d * u + this.aX, c = f * u + d * h + this.aY
		}
		return n.set(l, c)
	}
	copy(e) {
		return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this
	}
	toJSON() {
		const e = super.toJSON();
		return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e
	}
	fromJSON(e) {
		return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this
	}
}
wc.prototype.isEllipseCurve = !0;
class S0 extends wc {
	constructor(e, t, n, i, s, o) {
		super(e, t, n, n, i, s, o), this.type = "ArcCurve"
	}
}
S0.prototype.isArcCurve = !0;

function Mf() {
	let r = 0,
		e = 0,
		t = 0,
		n = 0;

	function i(s, o, a, l) {
		r = s, e = a, t = -3 * s + 3 * o - 2 * a - l, n = 2 * s - 2 * o + a + l
	}
	return {
		initCatmullRom: function(s, o, a, l, c) {
			i(o, a, c * (a - s), c * (l - o))
		},
		initNonuniformCatmullRom: function(s, o, a, l, c, h, u) {
			let f = (o - s) / c - (a - s) / (c + h) + (a - o) / h,
				d = (a - o) / h - (l - o) / (h + u) + (l - a) / u;
			f *= h, d *= h, i(o, a, f, d)
		},
		calc: function(s) {
			const o = s * s,
				a = o * s;
			return r + e * s + t * o + n * a
		}
	}
}
const gl = new I,
	bh = new Mf,
	Mh = new Mf,
	Sh = new Mf;
class T0 extends ti {
	constructor(e = [], t = !1, n = "centripetal", i = .5) {
		super(), this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = i
	}
	getPoint(e, t = new I) {
		const n = t,
			i = this.points,
			s = i.length,
			o = (s - (this.closed ? 0 : 1)) * e;
		let a = Math.floor(o),
			l = o - a;
		this.closed ? a += a > 0 ? 0 : (Math.floor(Math.abs(a) / s) + 1) * s : l === 0 && a === s - 1 && (a = s - 2, l = 1);
		let c, h;
		this.closed || a > 0 ? c = i[(a - 1) % s] : (gl.subVectors(i[0], i[1]).add(i[0]), c = gl);
		const u = i[a % s],
			f = i[(a + 1) % s];
		if (this.closed || a + 2 < s ? h = i[(a + 2) % s] : (gl.subVectors(i[s - 1], i[s - 2]).add(i[s - 1]), h = gl), this.curveType === "centripetal" || this.curveType === "chordal") {
			const d = this.curveType === "chordal" ? .5 : .25;
			let p = Math.pow(c.distanceToSquared(u), d),
				m = Math.pow(u.distanceToSquared(f), d),
				v = Math.pow(f.distanceToSquared(h), d);
			m < 1e-4 && (m = 1), p < 1e-4 && (p = m), v < 1e-4 && (v = m), bh.initNonuniformCatmullRom(c.x, u.x, f.x, h.x, p, m, v), Mh.initNonuniformCatmullRom(c.y, u.y, f.y, h.y, p, m, v), Sh.initNonuniformCatmullRom(c.z, u.z, f.z, h.z, p, m, v)
		} else this.curveType === "catmullrom" && (bh.initCatmullRom(c.x, u.x, f.x, h.x, this.tension), Mh.initCatmullRom(c.y, u.y, f.y, h.y, this.tension), Sh.initCatmullRom(c.z, u.z, f.z, h.z, this.tension));
		return n.set(bh.calc(l), Mh.calc(l), Sh.calc(l)), n
	}
	copy(e) {
		super.copy(e), this.points = [];
		for (let t = 0, n = e.points.length; t < n; t++) {
			const i = e.points[t];
			this.points.push(i.clone())
		}
		return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this
	}
	toJSON() {
		const e = super.toJSON();
		e.points = [];
		for (let t = 0, n = this.points.length; t < n; t++) {
			const i = this.points[t];
			e.points.push(i.toArray())
		}
		return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e
	}
	fromJSON(e) {
		super.fromJSON(e), this.points = [];
		for (let t = 0, n = e.points.length; t < n; t++) {
			const i = e.points[t];
			this.points.push(new I().fromArray(i))
		}
		return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this
	}
}
T0.prototype.isCatmullRomCurve3 = !0;

function Dp(r, e, t, n, i) {
	const s = (n - e) * .5,
		o = (i - t) * .5,
		a = r * r,
		l = r * a;
	return (2 * t - 2 * n + s + o) * l + (-3 * t + 3 * n - 2 * s - o) * a + s * r + t
}

function $T(r, e) {
	const t = 1 - r;
	return t * t * e
}

function ZT(r, e) {
	return 2 * (1 - r) * r * e
}

function JT(r, e) {
	return r * r * e
}

function ta(r, e, t, n) {
	return $T(r, e) + ZT(r, t) + JT(r, n)
}

function QT(r, e) {
	const t = 1 - r;
	return t * t * t * e
}

function KT(r, e) {
	const t = 1 - r;
	return 3 * t * t * r * e
}

function eE(r, e) {
	return 3 * (1 - r) * r * r * e
}

function tE(r, e) {
	return r * r * r * e
}

function na(r, e, t, n, i) {
	return QT(r, e) + KT(r, t) + eE(r, n) + tE(r, i)
}
class Sf extends ti {
	constructor(e = new fe, t = new fe, n = new fe, i = new fe) {
		super(), this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i
	}
	getPoint(e, t = new fe) {
		const n = t,
			i = this.v0,
			s = this.v1,
			o = this.v2,
			a = this.v3;
		return n.set(na(e, i.x, s.x, o.x, a.x), na(e, i.y, s.y, o.y, a.y)), n
	}
	copy(e) {
		return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this
	}
	toJSON() {
		const e = super.toJSON();
		return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this
	}
}
Sf.prototype.isCubicBezierCurve = !0;
class E0 extends ti {
	constructor(e = new I, t = new I, n = new I, i = new I) {
		super(), this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i
	}
	getPoint(e, t = new I) {
		const n = t,
			i = this.v0,
			s = this.v1,
			o = this.v2,
			a = this.v3;
		return n.set(na(e, i.x, s.x, o.x, a.x), na(e, i.y, s.y, o.y, a.y), na(e, i.z, s.z, o.z, a.z)), n
	}
	copy(e) {
		return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this
	}
	toJSON() {
		const e = super.toJSON();
		return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this
	}
}
E0.prototype.isCubicBezierCurve3 = !0;
class bc extends ti {
	constructor(e = new fe, t = new fe) {
		super(), this.type = "LineCurve", this.v1 = e, this.v2 = t
	}
	getPoint(e, t = new fe) {
		const n = t;
		return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n
	}
	getPointAt(e, t) {
		return this.getPoint(e, t)
	}
	getTangent(e, t) {
		const n = t || new fe;
		return n.copy(this.v2).sub(this.v1).normalize(), n
	}
	copy(e) {
		return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this
	}
	toJSON() {
		const e = super.toJSON();
		return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
	}
}
bc.prototype.isLineCurve = !0;
class nE extends ti {
	constructor(e = new I, t = new I) {
		super(), this.type = "LineCurve3", this.isLineCurve3 = !0, this.v1 = e, this.v2 = t
	}
	getPoint(e, t = new I) {
		const n = t;
		return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n
	}
	getPointAt(e, t) {
		return this.getPoint(e, t)
	}
	copy(e) {
		return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this
	}
	toJSON() {
		const e = super.toJSON();
		return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
	}
}
class Tf extends ti {
	constructor(e = new fe, t = new fe, n = new fe) {
		super(), this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n
	}
	getPoint(e, t = new fe) {
		const n = t,
			i = this.v0,
			s = this.v1,
			o = this.v2;
		return n.set(ta(e, i.x, s.x, o.x), ta(e, i.y, s.y, o.y)), n
	}
	copy(e) {
		return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this
	}
	toJSON() {
		const e = super.toJSON();
		return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
	}
}
Tf.prototype.isQuadraticBezierCurve = !0;
class A0 extends ti {
	constructor(e = new I, t = new I, n = new I) {
		super(), this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n
	}
	getPoint(e, t = new I) {
		const n = t,
			i = this.v0,
			s = this.v1,
			o = this.v2;
		return n.set(ta(e, i.x, s.x, o.x), ta(e, i.y, s.y, o.y), ta(e, i.z, s.z, o.z)), n
	}
	copy(e) {
		return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this
	}
	toJSON() {
		const e = super.toJSON();
		return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
	}
}
A0.prototype.isQuadraticBezierCurve3 = !0;
class Ef extends ti {
	constructor(e = []) {
		super(), this.type = "SplineCurve", this.points = e
	}
	getPoint(e, t = new fe) {
		const n = t,
			i = this.points,
			s = (i.length - 1) * e,
			o = Math.floor(s),
			a = s - o,
			l = i[o === 0 ? o : o - 1],
			c = i[o],
			h = i[o > i.length - 2 ? i.length - 1 : o + 1],
			u = i[o > i.length - 3 ? i.length - 1 : o + 2];
		return n.set(Dp(a, l.x, c.x, h.x, u.x), Dp(a, l.y, c.y, h.y, u.y)), n
	}
	copy(e) {
		super.copy(e), this.points = [];
		for (let t = 0, n = e.points.length; t < n; t++) {
			const i = e.points[t];
			this.points.push(i.clone())
		}
		return this
	}
	toJSON() {
		const e = super.toJSON();
		e.points = [];
		for (let t = 0, n = this.points.length; t < n; t++) {
			const i = this.points[t];
			e.points.push(i.toArray())
		}
		return e
	}
	fromJSON(e) {
		super.fromJSON(e), this.points = [];
		for (let t = 0, n = e.points.length; t < n; t++) {
			const i = e.points[t];
			this.points.push(new fe().fromArray(i))
		}
		return this
	}
}
Ef.prototype.isSplineCurve = !0;
var C0 = Object.freeze({
	__proto__: null,
	ArcCurve: S0,
	CatmullRomCurve3: T0,
	CubicBezierCurve: Sf,
	CubicBezierCurve3: E0,
	EllipseCurve: wc,
	LineCurve: bc,
	LineCurve3: nE,
	QuadraticBezierCurve: Tf,
	QuadraticBezierCurve3: A0,
	SplineCurve: Ef
});
class iE extends ti {
	constructor() {
		super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1
	}
	add(e) {
		this.curves.push(e)
	}
	closePath() {
		const e = this.curves[0].getPoint(0),
			t = this.curves[this.curves.length - 1].getPoint(1);
		e.equals(t) || this.curves.push(new bc(t, e))
	}
	getPoint(e, t) {
		const n = e * this.getLength(),
			i = this.getCurveLengths();
		let s = 0;
		for (; s < i.length;) {
			if (i[s] >= n) {
				const o = i[s] - n,
					a = this.curves[s],
					l = a.getLength(),
					c = l === 0 ? 0 : 1 - o / l;
				return a.getPointAt(c, t)
			}
			s++
		}
		return null
	}
	getLength() {
		const e = this.getCurveLengths();
		return e[e.length - 1]
	}
	updateArcLengths() {
		this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
	}
	getCurveLengths() {
		if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
		const e = [];
		let t = 0;
		for (let n = 0, i = this.curves.length; n < i; n++) t += this.curves[n].getLength(), e.push(t);
		return this.cacheLengths = e, e
	}
	getSpacedPoints(e = 40) {
		const t = [];
		for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
		return this.autoClose && t.push(t[0]), t
	}
	getPoints(e = 12) {
		const t = [];
		let n;
		for (let i = 0, s = this.curves; i < s.length; i++) {
			const o = s[i],
				a = o && o.isEllipseCurve ? e * 2 : o && (o.isLineCurve || o.isLineCurve3) ? 1 : o && o.isSplineCurve ? e * o.points.length : e,
				l = o.getPoints(a);
			for (let c = 0; c < l.length; c++) {
				const h = l[c];
				n && n.equals(h) || (t.push(h), n = h)
			}
		}
		return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t
	}
	copy(e) {
		super.copy(e), this.curves = [];
		for (let t = 0, n = e.curves.length; t < n; t++) {
			const i = e.curves[t];
			this.curves.push(i.clone())
		}
		return this.autoClose = e.autoClose, this
	}
	toJSON() {
		const e = super.toJSON();
		e.autoClose = this.autoClose, e.curves = [];
		for (let t = 0, n = this.curves.length; t < n; t++) {
			const i = this.curves[t];
			e.curves.push(i.toJSON())
		}
		return e
	}
	fromJSON(e) {
		super.fromJSON(e), this.autoClose = e.autoClose, this.curves = [];
		for (let t = 0, n = e.curves.length; t < n; t++) {
			const i = e.curves[t];
			this.curves.push(new C0[i.type]().fromJSON(i))
		}
		return this
	}
}
class vu extends iE {
	constructor(e) {
		super(), this.type = "Path", this.currentPoint = new fe, e && this.setFromPoints(e)
	}
	setFromPoints(e) {
		this.moveTo(e[0].x, e[0].y);
		for (let t = 1, n = e.length; t < n; t++) this.lineTo(e[t].x, e[t].y);
		return this
	}
	moveTo(e, t) {
		return this.currentPoint.set(e, t), this
	}
	lineTo(e, t) {
		const n = new bc(this.currentPoint.clone(), new fe(e, t));
		return this.curves.push(n), this.currentPoint.set(e, t), this
	}
	quadraticCurveTo(e, t, n, i) {
		const s = new Tf(this.currentPoint.clone(), new fe(e, t), new fe(n, i));
		return this.curves.push(s), this.currentPoint.set(n, i), this
	}
	bezierCurveTo(e, t, n, i, s, o) {
		const a = new Sf(this.currentPoint.clone(), new fe(e, t), new fe(n, i), new fe(s, o));
		return this.curves.push(a), this.currentPoint.set(s, o), this
	}
	splineThru(e) {
		const t = [this.currentPoint.clone()].concat(e),
			n = new Ef(t);
		return this.curves.push(n), this.currentPoint.copy(e[e.length - 1]), this
	}
	arc(e, t, n, i, s, o) {
		const a = this.currentPoint.x,
			l = this.currentPoint.y;
		return this.absarc(e + a, t + l, n, i, s, o), this
	}
	absarc(e, t, n, i, s, o) {
		return this.absellipse(e, t, n, n, i, s, o), this
	}
	ellipse(e, t, n, i, s, o, a, l) {
		const c = this.currentPoint.x,
			h = this.currentPoint.y;
		return this.absellipse(e + c, t + h, n, i, s, o, a, l), this
	}
	absellipse(e, t, n, i, s, o, a, l) {
		const c = new wc(e, t, n, i, s, o, a, l);
		if (this.curves.length > 0) {
			const u = c.getPoint(0);
			u.equals(this.currentPoint) || this.lineTo(u.x, u.y)
		}
		this.curves.push(c);
		const h = c.getPoint(1);
		return this.currentPoint.copy(h), this
	}
	copy(e) {
		return super.copy(e), this.currentPoint.copy(e.currentPoint), this
	}
	toJSON() {
		const e = super.toJSON();
		return e.currentPoint = this.currentPoint.toArray(), e
	}
	fromJSON(e) {
		return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this
	}
}
class Ea extends vu {
	constructor(e) {
		super(e), this.uuid = yi(), this.type = "Shape", this.holes = []
	}
	getPointsHoles(e) {
		const t = [];
		for (let n = 0, i = this.holes.length; n < i; n++) t[n] = this.holes[n].getPoints(e);
		return t
	}
	extractPoints(e) {
		return {
			shape: this.getPoints(e),
			holes: this.getPointsHoles(e)
		}
	}
	copy(e) {
		super.copy(e), this.holes = [];
		for (let t = 0, n = e.holes.length; t < n; t++) {
			const i = e.holes[t];
			this.holes.push(i.clone())
		}
		return this
	}
	toJSON() {
		const e = super.toJSON();
		e.uuid = this.uuid, e.holes = [];
		for (let t = 0, n = this.holes.length; t < n; t++) {
			const i = this.holes[t];
			e.holes.push(i.toJSON())
		}
		return e
	}
	fromJSON(e) {
		super.fromJSON(e), this.uuid = e.uuid, this.holes = [];
		for (let t = 0, n = e.holes.length; t < n; t++) {
			const i = e.holes[t];
			this.holes.push(new vu().fromJSON(i))
		}
		return this
	}
}
const rE = {
	triangulate: function(r, e, t = 2) {
		const n = e && e.length,
			i = n ? e[0] * t : r.length;
		let s = L0(r, 0, i, t, !0);
		const o = [];
		if (!s || s.next === s.prev) return o;
		let a, l, c, h, u, f, d;
		if (n && (s = cE(r, e, s, t)), r.length > 80 * t) {
			a = c = r[0], l = h = r[1];
			for (let p = t; p < i; p += t) u = r[p], f = r[p + 1], u < a && (a = u), f < l && (l = f), u > c && (c = u), f > h && (h = f);
			d = Math.max(c - a, h - l), d = d !== 0 ? 1 / d : 0
		}
		return _a(s, o, t, a, l, d), o
	}
};

function L0(r, e, t, n, i) {
	let s, o;
	if (i === yE(r, e, t, n) > 0)
		for (s = e; s < t; s += n) o = Ip(s, r[s], r[s + 1], o);
	else
		for (s = t - n; s >= e; s -= n) o = Ip(s, r[s], r[s + 1], o);
	return o && Mc(o, o.next) && (xa(o), o = o.next), o
}

function xr(r, e) {
	if (!r) return r;
	e || (e = r);
	let t = r,
		n;
	do
		if (n = !1, !t.steiner && (Mc(t, t.next) || vt(t.prev, t, t.next) === 0)) {
			if (xa(t), t = e = t.prev, t === t.next) break;
			n = !0
		} else t = t.next; while (n || t !== e);
	return e
}

function _a(r, e, t, n, i, s, o) {
	if (!r) return;
	!o && s && pE(r, n, i, s);
	let a = r,
		l, c;
	for (; r.prev !== r.next;) {
		if (l = r.prev, c = r.next, s ? oE(r, n, i, s) : sE(r)) {
			e.push(l.i / t), e.push(r.i / t), e.push(c.i / t), xa(r), r = c.next, a = c.next;
			continue
		}
		if (r = c, r === a) {
			o ? o === 1 ? (r = aE(xr(r), e, t), _a(r, e, t, n, i, s, 2)) : o === 2 && lE(r, e, t, n, i, s) : _a(xr(r), e, t, n, i, s, 1);
			break
		}
	}
}

function sE(r) {
	const e = r.prev,
		t = r,
		n = r.next;
	if (vt(e, t, n) >= 0) return !1;
	let i = r.next.next;
	for (; i !== r.prev;) {
		if (Bs(e.x, e.y, t.x, t.y, n.x, n.y, i.x, i.y) && vt(i.prev, i, i.next) >= 0) return !1;
		i = i.next
	}
	return !0
}

function oE(r, e, t, n) {
	const i = r.prev,
		s = r,
		o = r.next;
	if (vt(i, s, o) >= 0) return !1;
	const a = i.x < s.x ? i.x < o.x ? i.x : o.x : s.x < o.x ? s.x : o.x,
		l = i.y < s.y ? i.y < o.y ? i.y : o.y : s.y < o.y ? s.y : o.y,
		c = i.x > s.x ? i.x > o.x ? i.x : o.x : s.x > o.x ? s.x : o.x,
		h = i.y > s.y ? i.y > o.y ? i.y : o.y : s.y > o.y ? s.y : o.y,
		u = xu(a, l, e, t, n),
		f = xu(c, h, e, t, n);
	let d = r.prevZ,
		p = r.nextZ;
	for (; d && d.z >= u && p && p.z <= f;) {
		if (d !== r.prev && d !== r.next && Bs(i.x, i.y, s.x, s.y, o.x, o.y, d.x, d.y) && vt(d.prev, d, d.next) >= 0 || (d = d.prevZ, p !== r.prev && p !== r.next && Bs(i.x, i.y, s.x, s.y, o.x, o.y, p.x, p.y) && vt(p.prev, p, p.next) >= 0)) return !1;
		p = p.nextZ
	}
	for (; d && d.z >= u;) {
		if (d !== r.prev && d !== r.next && Bs(i.x, i.y, s.x, s.y, o.x, o.y, d.x, d.y) && vt(d.prev, d, d.next) >= 0) return !1;
		d = d.prevZ
	}
	for (; p && p.z <= f;) {
		if (p !== r.prev && p !== r.next && Bs(i.x, i.y, s.x, s.y, o.x, o.y, p.x, p.y) && vt(p.prev, p, p.next) >= 0) return !1;
		p = p.nextZ
	}
	return !0
}

function aE(r, e, t) {
	let n = r;
	do {
		const i = n.prev,
			s = n.next.next;
		!Mc(i, s) && R0(i, n, n.next, s) && va(i, s) && va(s, i) && (e.push(i.i / t), e.push(n.i / t), e.push(s.i / t), xa(n), xa(n.next), n = r = s), n = n.next
	} while (n !== r);
	return xr(n)
}

function lE(r, e, t, n, i, s) {
	let o = r;
	do {
		let a = o.next.next;
		for (; a !== o.prev;) {
			if (o.i !== a.i && _E(o, a)) {
				let l = P0(o, a);
				o = xr(o, o.next), l = xr(l, l.next), _a(o, e, t, n, i, s), _a(l, e, t, n, i, s);
				return
			}
			a = a.next
		}
		o = o.next
	} while (o !== r)
}

function cE(r, e, t, n) {
	const i = [];
	let s, o, a, l, c;
	for (s = 0, o = e.length; s < o; s++) a = e[s] * n, l = s < o - 1 ? e[s + 1] * n : r.length, c = L0(r, a, l, n, !1), c === c.next && (c.steiner = !0), i.push(gE(c));
	for (i.sort(hE), s = 0; s < i.length; s++) uE(i[s], t), t = xr(t, t.next);
	return t
}

function hE(r, e) {
	return r.x - e.x
}

function uE(r, e) {
	if (e = fE(r, e), e) {
		const t = P0(e, r);
		xr(e, e.next), xr(t, t.next)
	}
}

function fE(r, e) {
	let t = e;
	const n = r.x,
		i = r.y;
	let s = -1 / 0,
		o;
	do {
		if (i <= t.y && i >= t.next.y && t.next.y !== t.y) {
			const f = t.x + (i - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
			if (f <= n && f > s) {
				if (s = f, f === n) {
					if (i === t.y) return t;
					if (i === t.next.y) return t.next
				}
				o = t.x < t.next.x ? t : t.next
			}
		}
		t = t.next
	} while (t !== e);
	if (!o) return null;
	if (n === s) return o;
	const a = o,
		l = o.x,
		c = o.y;
	let h = 1 / 0,
		u;
	t = o;
	do n >= t.x && t.x >= l && n !== t.x && Bs(i < c ? n : s, i, l, c, i < c ? s : n, i, t.x, t.y) && (u = Math.abs(i - t.y) / (n - t.x), va(t, r) && (u < h || u === h && (t.x > o.x || t.x === o.x && dE(o, t))) && (o = t, h = u)), t = t.next; while (t !== a);
	return o
}

function dE(r, e) {
	return vt(r.prev, r, e.prev) < 0 && vt(e.next, r, r.next) < 0
}

function pE(r, e, t, n) {
	let i = r;
	do i.z === null && (i.z = xu(i.x, i.y, e, t, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next; while (i !== r);
	i.prevZ.nextZ = null, i.prevZ = null, mE(i)
}

function mE(r) {
	let e, t, n, i, s, o, a, l, c = 1;
	do {
		for (t = r, r = null, s = null, o = 0; t;) {
			for (o++, n = t, a = 0, e = 0; e < c && (a++, n = n.nextZ, !!n); e++);
			for (l = c; a > 0 || l > 0 && n;) a !== 0 && (l === 0 || !n || t.z <= n.z) ? (i = t, t = t.nextZ, a--) : (i = n, n = n.nextZ, l--), s ? s.nextZ = i : r = i, i.prevZ = s, s = i;
			t = n
		}
		s.nextZ = null, c *= 2
	} while (o > 1);
	return r
}

function xu(r, e, t, n, i) {
	return r = 32767 * (r - t) * i, e = 32767 * (e - n) * i, r = (r | r << 8) & 16711935, r = (r | r << 4) & 252645135, r = (r | r << 2) & 858993459, r = (r | r << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, r | e << 1
}

function gE(r) {
	let e = r,
		t = r;
	do(e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next; while (e !== r);
	return t
}

function Bs(r, e, t, n, i, s, o, a) {
	return (i - o) * (e - a) - (r - o) * (s - a) >= 0 && (r - o) * (n - a) - (t - o) * (e - a) >= 0 && (t - o) * (s - a) - (i - o) * (n - a) >= 0
}

function _E(r, e) {
	return r.next.i !== e.i && r.prev.i !== e.i && !vE(r, e) && (va(r, e) && va(e, r) && xE(r, e) && (vt(r.prev, r, e.prev) || vt(r, e.prev, e)) || Mc(r, e) && vt(r.prev, r, r.next) > 0 && vt(e.prev, e, e.next) > 0)
}

function vt(r, e, t) {
	return (e.y - r.y) * (t.x - e.x) - (e.x - r.x) * (t.y - e.y)
}

function Mc(r, e) {
	return r.x === e.x && r.y === e.y
}

function R0(r, e, t, n) {
	const i = vl(vt(r, e, t)),
		s = vl(vt(r, e, n)),
		o = vl(vt(t, n, r)),
		a = vl(vt(t, n, e));
	return !!(i !== s && o !== a || i === 0 && _l(r, t, e) || s === 0 && _l(r, n, e) || o === 0 && _l(t, r, n) || a === 0 && _l(t, e, n))
}

function _l(r, e, t) {
	return e.x <= Math.max(r.x, t.x) && e.x >= Math.min(r.x, t.x) && e.y <= Math.max(r.y, t.y) && e.y >= Math.min(r.y, t.y)
}

function vl(r) {
	return r > 0 ? 1 : r < 0 ? -1 : 0
}

function vE(r, e) {
	let t = r;
	do {
		if (t.i !== r.i && t.next.i !== r.i && t.i !== e.i && t.next.i !== e.i && R0(t, t.next, r, e)) return !0;
		t = t.next
	} while (t !== r);
	return !1
}

function va(r, e) {
	return vt(r.prev, r, r.next) < 0 ? vt(r, e, r.next) >= 0 && vt(r, r.prev, e) >= 0 : vt(r, e, r.prev) < 0 || vt(r, r.next, e) < 0
}

function xE(r, e) {
	let t = r,
		n = !1;
	const i = (r.x + e.x) / 2,
		s = (r.y + e.y) / 2;
	do t.y > s != t.next.y > s && t.next.y !== t.y && i < (t.next.x - t.x) * (s - t.y) / (t.next.y - t.y) + t.x && (n = !n), t = t.next; while (t !== r);
	return n
}

function P0(r, e) {
	const t = new yu(r.i, r.x, r.y),
		n = new yu(e.i, e.x, e.y),
		i = r.next,
		s = e.prev;
	return r.next = e, e.prev = r, t.next = i, i.prev = t, n.next = t, t.prev = n, s.next = n, n.prev = s, n
}

function Ip(r, e, t, n) {
	const i = new yu(r, e, t);
	return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i
}

function xa(r) {
	r.next.prev = r.prev, r.prev.next = r.next, r.prevZ && (r.prevZ.nextZ = r.nextZ), r.nextZ && (r.nextZ.prevZ = r.prevZ)
}

function yu(r, e, t) {
	this.i = r, this.x = e, this.y = t, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
}

function yE(r, e, t, n) {
	let i = 0;
	for (let s = e, o = t - n; s < t; s += n) i += (r[o] - r[s]) * (r[s + 1] + r[o + 1]), o = s;
	return i
}
class dr {
	static area(e) {
		const t = e.length;
		let n = 0;
		for (let i = t - 1, s = 0; s < t; i = s++) n += e[i].x * e[s].y - e[s].x * e[i].y;
		return n * .5
	}
	static isClockWise(e) {
		return dr.area(e) < 0
	}
	static triangulateShape(e, t) {
		const n = [],
			i = [],
			s = [];
		Fp(e), zp(n, e);
		let o = e.length;
		t.forEach(Fp);
		for (let l = 0; l < t.length; l++) i.push(o), o += t[l].length, zp(n, t[l]);
		const a = rE.triangulate(n, i);
		for (let l = 0; l < a.length; l += 3) s.push(a.slice(l, l + 3));
		return s
	}
}

function Fp(r) {
	const e = r.length;
	e > 2 && r[e - 1].equals(r[0]) && r.pop()
}

function zp(r, e) {
	for (let t = 0; t < e.length; t++) r.push(e[t].x), r.push(e[t].y)
}
class fo extends pt {
	constructor(e = new Ea([new fe(.5, .5), new fe(-.5, .5), new fe(-.5, -.5), new fe(.5, -.5)]), t = {}) {
		super(), this.type = "ExtrudeGeometry", this.parameters = {
			shapes: e,
			options: t
		}, e = Array.isArray(e) ? e : [e];
		const n = this,
			i = [],
			s = [];
		for (let a = 0, l = e.length; a < l; a++) {
			const c = e[a];
			o(c)
		}
		this.setAttribute("position", new Yt(i, 3)), this.setAttribute("uv", new Yt(s, 2)), this.computeVertexNormals();

		function o(a) {
			const l = [],
				c = t.curveSegments !== void 0 ? t.curveSegments : 12,
				h = t.steps !== void 0 ? t.steps : 1;
			let u = t.depth !== void 0 ? t.depth : 1,
				f = t.bevelEnabled !== void 0 ? t.bevelEnabled : !0,
				d = t.bevelThickness !== void 0 ? t.bevelThickness : .2,
				p = t.bevelSize !== void 0 ? t.bevelSize : d - .1,
				m = t.bevelOffset !== void 0 ? t.bevelOffset : 0,
				v = t.bevelSegments !== void 0 ? t.bevelSegments : 3;
			const g = t.extrudePath,
				_ = t.UVGenerator !== void 0 ? t.UVGenerator : wE;
			t.amount !== void 0 && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), u = t.amount);
			let w, x = !1,
				y, b, S, D;
			g && (w = g.getSpacedPoints(h), x = !0, f = !1, y = g.computeFrenetFrames(h, !1), b = new I, S = new I, D = new I), f || (v = 0, d = 0, p = 0, m = 0);
			const O = a.extractPoints(c);
			let z = O.shape;
			const P = O.holes;
			if (!dr.isClockWise(z)) {
				z = z.reverse();
				for (let j = 0, Z = P.length; j < Z; j++) {
					const ee = P[j];
					dr.isClockWise(ee) && (P[j] = ee.reverse())
				}
			}
			const E = dr.triangulateShape(z, P),
				R = z;
			for (let j = 0, Z = P.length; j < Z; j++) {
				const ee = P[j];
				z = z.concat(ee)
			}

			function V(j, Z, ee) {
				return Z || console.error("THREE.ExtrudeGeometry: vec does not exist"), Z.clone().multiplyScalar(ee).add(j)
			}
			const N = z.length,
				k = E.length;

			function J(j, Z, ee) {
				let ge, ue, H;
				const Re = j.x - Z.x,
					Ne = j.y - Z.y,
					Qe = ee.x - j.x,
					L = ee.y - j.y,
					C = Re * Re + Ne * Ne,
					K = Re * L - Ne * Qe;
				if (Math.abs(K) > Number.EPSILON) {
					const ae = Math.sqrt(C),
						le = Math.sqrt(Qe * Qe + L * L),
						Q = Z.x - Ne / ae,
						Pe = Z.y + Re / ae,
						Se = ee.x - L / le,
						pe = ee.y + Qe / le,
						F = ((Se - Q) * L - (pe - Pe) * Qe) / (Re * L - Ne * Qe);
					ge = Q + Re * F - j.x, ue = Pe + Ne * F - j.y;
					const he = ge * ge + ue * ue;
					if (he <= 2) return new fe(ge, ue);
					H = Math.sqrt(he / 2)
				} else {
					let ae = !1;
					Re > Number.EPSILON ? Qe > Number.EPSILON && (ae = !0) : Re < -Number.EPSILON ? Qe < -Number.EPSILON && (ae = !0) : Math.sign(Ne) === Math.sign(L) && (ae = !0), ae ? (ge = -Ne, ue = Re, H = Math.sqrt(C)) : (ge = Re, ue = Ne, H = Math.sqrt(C / 2))
				}
				return new fe(ge / H, ue / H)
			}
			const se = [];
			for (let j = 0, Z = R.length, ee = Z - 1, ge = j + 1; j < Z; j++, ee++, ge++) ee === Z && (ee = 0), ge === Z && (ge = 0), se[j] = J(R[j], R[ee], R[ge]);
			const A = [];
			let Y, de = se.concat();
			for (let j = 0, Z = P.length; j < Z; j++) {
				const ee = P[j];
				Y = [];
				for (let ge = 0, ue = ee.length, H = ue - 1, Re = ge + 1; ge < ue; ge++, H++, Re++) H === ue && (H = 0), Re === ue && (Re = 0), Y[ge] = J(ee[ge], ee[H], ee[Re]);
				A.push(Y), de = de.concat(Y)
			}
			for (let j = 0; j < v; j++) {
				const Z = j / v,
					ee = d * Math.cos(Z * Math.PI / 2),
					ge = p * Math.sin(Z * Math.PI / 2) + m;
				for (let ue = 0, H = R.length; ue < H; ue++) {
					const Re = V(R[ue], se[ue], ge);
					oe(Re.x, Re.y, -ee)
				}
				for (let ue = 0, H = P.length; ue < H; ue++) {
					const Re = P[ue];
					Y = A[ue];
					for (let Ne = 0, Qe = Re.length; Ne < Qe; Ne++) {
						const L = V(Re[Ne], Y[Ne], ge);
						oe(L.x, L.y, -ee)
					}
				}
			}
			const U = p + m;
			for (let j = 0; j < N; j++) {
				const Z = f ? V(z[j], de[j], U) : z[j];
				x ? (S.copy(y.normals[0]).multiplyScalar(Z.x), b.copy(y.binormals[0]).multiplyScalar(Z.y), D.copy(w[0]).add(S).add(b), oe(D.x, D.y, D.z)) : oe(Z.x, Z.y, 0)
			}
			for (let j = 1; j <= h; j++)
				for (let Z = 0; Z < N; Z++) {
					const ee = f ? V(z[Z], de[Z], U) : z[Z];
					x ? (S.copy(y.normals[j]).multiplyScalar(ee.x), b.copy(y.binormals[j]).multiplyScalar(ee.y), D.copy(w[j]).add(S).add(b), oe(D.x, D.y, D.z)) : oe(ee.x, ee.y, u / h * j)
				}
			for (let j = v - 1; j >= 0; j--) {
				const Z = j / v,
					ee = d * Math.cos(Z * Math.PI / 2),
					ge = p * Math.sin(Z * Math.PI / 2) + m;
				for (let ue = 0, H = R.length; ue < H; ue++) {
					const Re = V(R[ue], se[ue], ge);
					oe(Re.x, Re.y, u + ee)
				}
				for (let ue = 0, H = P.length; ue < H; ue++) {
					const Re = P[ue];
					Y = A[ue];
					for (let Ne = 0, Qe = Re.length; Ne < Qe; Ne++) {
						const L = V(Re[Ne], Y[Ne], ge);
						x ? oe(L.x, L.y + w[h - 1].y, w[h - 1].x + ee) : oe(L.x, L.y, u + ee)
					}
				}
			}
			W(), te();

			function W() {
				const j = i.length / 3;
				if (f) {
					let Z = 0,
						ee = N * Z;
					for (let ge = 0; ge < k; ge++) {
						const ue = E[ge];
						ce(ue[2] + ee, ue[1] + ee, ue[0] + ee)
					}
					Z = h + v * 2, ee = N * Z;
					for (let ge = 0; ge < k; ge++) {
						const ue = E[ge];
						ce(ue[0] + ee, ue[1] + ee, ue[2] + ee)
					}
				} else {
					for (let Z = 0; Z < k; Z++) {
						const ee = E[Z];
						ce(ee[2], ee[1], ee[0])
					}
					for (let Z = 0; Z < k; Z++) {
						const ee = E[Z];
						ce(ee[0] + N * h, ee[1] + N * h, ee[2] + N * h)
					}
				}
				n.addGroup(j, i.length / 3 - j, 0)
			}

			function te() {
				const j = i.length / 3;
				let Z = 0;
				q(R, Z), Z += R.length;
				for (let ee = 0, ge = P.length; ee < ge; ee++) {
					const ue = P[ee];
					q(ue, Z), Z += ue.length
				}
				n.addGroup(j, i.length / 3 - j, 1)
			}

			function q(j, Z) {
				let ee = j.length;
				for (; --ee >= 0;) {
					const ge = ee;
					let ue = ee - 1;
					ue < 0 && (ue = j.length - 1);
					for (let H = 0, Re = h + v * 2; H < Re; H++) {
						const Ne = N * H,
							Qe = N * (H + 1),
							L = Z + ge + Ne,
							C = Z + ue + Ne,
							K = Z + ue + Qe,
							ae = Z + ge + Qe;
						ie(L, C, K, ae)
					}
				}
			}

			function oe(j, Z, ee) {
				l.push(j), l.push(Z), l.push(ee)
			}

			function ce(j, Z, ee) {
				me(j), me(Z), me(ee);
				const ge = i.length / 3,
					ue = _.generateTopUV(n, i, ge - 3, ge - 2, ge - 1);
				we(ue[0]), we(ue[1]), we(ue[2])
			}

			function ie(j, Z, ee, ge) {
				me(j), me(Z), me(ge), me(Z), me(ee), me(ge);
				const ue = i.length / 3,
					H = _.generateSideWallUV(n, i, ue - 6, ue - 3, ue - 2, ue - 1);
				we(H[0]), we(H[1]), we(H[3]), we(H[1]), we(H[2]), we(H[3])
			}

			function me(j) {
				i.push(l[j * 3 + 0]), i.push(l[j * 3 + 1]), i.push(l[j * 3 + 2])
			}

			function we(j) {
				s.push(j.x), s.push(j.y)
			}
		}
	}
	toJSON() {
		const e = super.toJSON(),
			t = this.parameters.shapes,
			n = this.parameters.options;
		return bE(t, n, e)
	}
	static fromJSON(e, t) {
		const n = [];
		for (let s = 0, o = e.shapes.length; s < o; s++) {
			const a = t[e.shapes[s]];
			n.push(a)
		}
		const i = e.options.extrudePath;
		return i !== void 0 && (e.options.extrudePath = new C0[i.type]().fromJSON(i)), new fo(n, e.options)
	}
}
const wE = {
	generateTopUV: function(r, e, t, n, i) {
		const s = e[t * 3],
			o = e[t * 3 + 1],
			a = e[n * 3],
			l = e[n * 3 + 1],
			c = e[i * 3],
			h = e[i * 3 + 1];
		return [new fe(s, o), new fe(a, l), new fe(c, h)]
	},
	generateSideWallUV: function(r, e, t, n, i, s) {
		const o = e[t * 3],
			a = e[t * 3 + 1],
			l = e[t * 3 + 2],
			c = e[n * 3],
			h = e[n * 3 + 1],
			u = e[n * 3 + 2],
			f = e[i * 3],
			d = e[i * 3 + 1],
			p = e[i * 3 + 2],
			m = e[s * 3],
			v = e[s * 3 + 1],
			g = e[s * 3 + 2];
		return Math.abs(a - h) < Math.abs(o - c) ? [new fe(o, 1 - l), new fe(c, 1 - u), new fe(f, 1 - p), new fe(m, 1 - g)] : [new fe(a, 1 - l), new fe(h, 1 - u), new fe(d, 1 - p), new fe(v, 1 - g)]
	}
};

function bE(r, e, t) {
	if (t.shapes = [], Array.isArray(r))
		for (let n = 0, i = r.length; n < i; n++) {
			const s = r[n];
			t.shapes.push(s.uuid)
		} else t.shapes.push(r.uuid);
	return e.extrudePath !== void 0 && (t.options.extrudePath = e.extrudePath.toJSON()), t
}
class Af extends pt {
	constructor(e = new Ea([new fe(0, .5), new fe(-.5, -.5), new fe(.5, -.5)]), t = 12) {
		super(), this.type = "ShapeGeometry", this.parameters = {
			shapes: e,
			curveSegments: t
		};
		const n = [],
			i = [],
			s = [],
			o = [];
		let a = 0,
			l = 0;
		if (Array.isArray(e) === !1) c(e);
		else
			for (let h = 0; h < e.length; h++) c(e[h]), this.addGroup(a, l, h), a += l, l = 0;
		this.setIndex(n), this.setAttribute("position", new Yt(i, 3)), this.setAttribute("normal", new Yt(s, 3)), this.setAttribute("uv", new Yt(o, 2));

		function c(h) {
			const u = i.length / 3,
				f = h.extractPoints(t);
			let d = f.shape;
			const p = f.holes;
			dr.isClockWise(d) === !1 && (d = d.reverse());
			for (let v = 0, g = p.length; v < g; v++) {
				const _ = p[v];
				dr.isClockWise(_) === !0 && (p[v] = _.reverse())
			}
			const m = dr.triangulateShape(d, p);
			for (let v = 0, g = p.length; v < g; v++) {
				const _ = p[v];
				d = d.concat(_)
			}
			for (let v = 0, g = d.length; v < g; v++) {
				const _ = d[v];
				i.push(_.x, _.y, 0), s.push(0, 0, 1), o.push(_.x, _.y)
			}
			for (let v = 0, g = m.length; v < g; v++) {
				const _ = m[v],
					w = _[0] + u,
					x = _[1] + u,
					y = _[2] + u;
				n.push(w, x, y), l += 3
			}
		}
	}
	toJSON() {
		const e = super.toJSON(),
			t = this.parameters.shapes;
		return ME(t, e)
	}
	static fromJSON(e, t) {
		const n = [];
		for (let i = 0, s = e.shapes.length; i < s; i++) {
			const o = t[e.shapes[i]];
			n.push(o)
		}
		return new Af(n, e.curveSegments)
	}
}

function ME(r, e) {
	if (e.shapes = [], Array.isArray(r))
		for (let t = 0, n = r.length; t < n; t++) {
			const i = r[t];
			e.shapes.push(i.uuid)
		} else e.shapes.push(r.uuid);
	return e
}
class SE extends on {
	constructor(e) {
		super(), this.type = "ShadowMaterial", this.color = new De(0), this.transparent = !0, this.setValues(e)
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this
	}
}
SE.prototype.isShadowMaterial = !0;
class D0 extends on {
	constructor(e) {
		super(), this.defines = {
			STANDARD: ""
		}, this.type = "MeshStandardMaterial", this.color = new De(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new De(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ao, this.normalScale = new fe(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.setValues(e)
	}
	copy(e) {
		return super.copy(e), this.defines = {
			STANDARD: ""
		}, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this
	}
}
D0.prototype.isMeshStandardMaterial = !0;
class TE extends D0 {
	constructor(e) {
		super(), this.defines = {
			STANDARD: "",
			PHYSICAL: ""
		}, this.type = "MeshPhysicalMaterial", this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new fe(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
			get: function() {
				return Nn(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1)
			},
			set: function(t) {
				this.ior = (1 + .4 * t) / (1 - .4 * t)
			}
		}), this.sheenColor = new De(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 0, this.attenuationColor = new De(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new De(1, 1, 1), this.specularColorMap = null, this._sheen = 0, this._clearcoat = 0, this._transmission = 0, this.setValues(e)
	}
	get sheen() {
		return this._sheen
	}
	set sheen(e) {
		this._sheen > 0 != e > 0 && this.version++, this._sheen = e
	}
	get clearcoat() {
		return this._clearcoat
	}
	set clearcoat(e) {
		this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e
	}
	get transmission() {
		return this._transmission
	}
	set transmission(e) {
		this._transmission > 0 != e > 0 && this.version++, this._transmission = e
	}
	copy(e) {
		return super.copy(e), this.defines = {
			STANDARD: "",
			PHYSICAL: ""
		}, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.ior = e.ior, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this
	}
}
TE.prototype.isMeshPhysicalMaterial = !0;
class EE extends on {
	constructor(e) {
		super(), this.type = "MeshPhongMaterial", this.color = new De(16777215), this.specular = new De(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new De(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ao, this.normalScale = new fe(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = hc, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.setValues(e)
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this
	}
}
EE.prototype.isMeshPhongMaterial = !0;
class AE extends on {
	constructor(e) {
		super(), this.defines = {
			TOON: ""
		}, this.type = "MeshToonMaterial", this.color = new De(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new De(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ao, this.normalScale = new fe(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(e)
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.gradientMap = e.gradientMap, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this
	}
}
AE.prototype.isMeshToonMaterial = !0;
class CE extends on {
	constructor(e) {
		super(), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ao, this.normalScale = new fe(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.flatShading = !1, this.setValues(e)
	}
	copy(e) {
		return super.copy(e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.flatShading = e.flatShading, this
	}
}
CE.prototype.isMeshNormalMaterial = !0;
class LE extends on {
	constructor(e) {
		super(), this.type = "MeshLambertMaterial", this.color = new De(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new De(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = hc, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(e)
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this
	}
}
LE.prototype.isMeshLambertMaterial = !0;
class RE extends on {
	constructor(e) {
		super(), this.defines = {
			MATCAP: ""
		}, this.type = "MeshMatcapMaterial", this.color = new De(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ao, this.normalScale = new fe(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.flatShading = !1, this.setValues(e)
	}
	copy(e) {
		return super.copy(e), this.defines = {
			MATCAP: ""
		}, this.color.copy(e.color), this.matcap = e.matcap, this.map = e.map, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.flatShading = e.flatShading, this
	}
}
RE.prototype.isMeshMatcapMaterial = !0;
class PE extends Ta {
	constructor(e) {
		super(), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(e)
	}
	copy(e) {
		return super.copy(e), this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this
	}
}
PE.prototype.isLineDashedMaterial = !0;
const dt = {
	arraySlice: function(r, e, t) {
		return dt.isTypedArray(r) ? new r.constructor(r.subarray(e, t !== void 0 ? t : r.length)) : r.slice(e, t)
	},
	convertArray: function(r, e, t) {
		return !r || !t && r.constructor === e ? r : typeof e.BYTES_PER_ELEMENT == "number" ? new e(r) : Array.prototype.slice.call(r)
	},
	isTypedArray: function(r) {
		return ArrayBuffer.isView(r) && !(r instanceof DataView)
	},
	getKeyframeOrder: function(r) {
		function e(i, s) {
			return r[i] - r[s]
		}
		const t = r.length,
			n = new Array(t);
		for (let i = 0; i !== t; ++i) n[i] = i;
		return n.sort(e), n
	},
	sortedArray: function(r, e, t) {
		const n = r.length,
			i = new r.constructor(n);
		for (let s = 0, o = 0; o !== n; ++s) {
			const a = t[s] * e;
			for (let l = 0; l !== e; ++l) i[o++] = r[a + l]
		}
		return i
	},
	flattenJSON: function(r, e, t, n) {
		let i = 1,
			s = r[0];
		for (; s !== void 0 && s[n] === void 0;) s = r[i++];
		if (s === void 0) return;
		let o = s[n];
		if (o !== void 0)
			if (Array.isArray(o))
				do o = s[n], o !== void 0 && (e.push(s.time), t.push.apply(t, o)), s = r[i++]; while (s !== void 0);
			else if (o.toArray !== void 0)
			do o = s[n], o !== void 0 && (e.push(s.time), o.toArray(t, t.length)), s = r[i++]; while (s !== void 0);
		else
			do o = s[n], o !== void 0 && (e.push(s.time), t.push(o)), s = r[i++]; while (s !== void 0)
	},
	subclip: function(r, e, t, n, i = 30) {
		const s = r.clone();
		s.name = e;
		const o = [];
		for (let l = 0; l < s.tracks.length; ++l) {
			const c = s.tracks[l],
				h = c.getValueSize(),
				u = [],
				f = [];
			for (let d = 0; d < c.times.length; ++d) {
				const p = c.times[d] * i;
				if (!(p < t || p >= n)) {
					u.push(c.times[d]);
					for (let m = 0; m < h; ++m) f.push(c.values[d * h + m])
				}
			}
			u.length !== 0 && (c.times = dt.convertArray(u, c.times.constructor), c.values = dt.convertArray(f, c.values.constructor), o.push(c))
		}
		s.tracks = o;
		let a = 1 / 0;
		for (let l = 0; l < s.tracks.length; ++l) a > s.tracks[l].times[0] && (a = s.tracks[l].times[0]);
		for (let l = 0; l < s.tracks.length; ++l) s.tracks[l].shift(-1 * a);
		return s.resetDuration(), s
	},
	makeClipAdditive: function(r, e = 0, t = r, n = 30) {
		n <= 0 && (n = 30);
		const i = t.tracks.length,
			s = e / n;
		for (let o = 0; o < i; ++o) {
			const a = t.tracks[o],
				l = a.ValueTypeName;
			if (l === "bool" || l === "string") continue;
			const c = r.tracks.find(function(g) {
				return g.name === a.name && g.ValueTypeName === l
			});
			if (c === void 0) continue;
			let h = 0;
			const u = a.getValueSize();
			a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (h = u / 3);
			let f = 0;
			const d = c.getValueSize();
			c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (f = d / 3);
			const p = a.times.length - 1;
			let m;
			if (s <= a.times[0]) {
				const g = h,
					_ = u - h;
				m = dt.arraySlice(a.values, g, _)
			} else if (s >= a.times[p]) {
				const g = p * u + h,
					_ = g + u - h;
				m = dt.arraySlice(a.values, g, _)
			} else {
				const g = a.createInterpolant(),
					_ = h,
					w = u - h;
				g.evaluate(s), m = dt.arraySlice(g.resultBuffer, _, w)
			}
			l === "quaternion" && new Ln().fromArray(m).normalize().conjugate().toArray(m);
			const v = c.times.length;
			for (let g = 0; g < v; ++g) {
				const _ = g * d + f;
				if (l === "quaternion") Ln.multiplyQuaternionsFlat(c.values, _, m, 0, c.values, _);
				else {
					const w = d - f * 2;
					for (let x = 0; x < w; ++x) c.values[_ + x] -= m[x]
				}
			}
		}
		return r.blendMode = $_, r
	}
};
class yr {
	constructor(e, t, n, i) {
		this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {}
	}
	evaluate(e) {
		const t = this.parameterPositions;
		let n = this._cachedIndex,
			i = t[n],
			s = t[n - 1];
		e: {
			t: {
				let o;n: {
					i: if (!(e < i)) {
						for (let a = n + 2;;) {
							if (i === void 0) {
								if (e < s) break i;
								return n = t.length, this._cachedIndex = n, this.afterEnd_(n - 1, e, s)
							}
							if (n === a) break;
							if (s = i, i = t[++n], e < i) break t
						}
						o = t.length;
						break n
					}if (!(e >= s)) {
						const a = t[1];
						e < a && (n = 2, s = a);
						for (let l = n - 2;;) {
							if (s === void 0) return this._cachedIndex = 0, this.beforeStart_(0, e, i);
							if (n === l) break;
							if (i = s, s = t[--n - 1], e >= s) break t
						}
						o = n, n = 0;
						break n
					}
					break e
				}
				for (; n < o;) {
					const a = n + o >>> 1;
					e < t[a] ? o = a : n = a + 1
				}
				if (i = t[n], s = t[n - 1], s === void 0) return this._cachedIndex = 0,
				this.beforeStart_(0, e, i);
				if (i === void 0) return n = t.length,
				this._cachedIndex = n,
				this.afterEnd_(n - 1, s, e)
			}
			this._cachedIndex = n,
			this.intervalChanged_(n, s, i)
		}
		return this.interpolate_(n, s, e, i)
	}
	getSettings_() {
		return this.settings || this.DefaultSettings_
	}
	copySampleValue_(e) {
		const t = this.resultBuffer,
			n = this.sampleValues,
			i = this.valueSize,
			s = e * i;
		for (let o = 0; o !== i; ++o) t[o] = n[s + o];
		return t
	}
	interpolate_() {
		throw new Error("call to abstract method")
	}
	intervalChanged_() {}
}
yr.prototype.beforeStart_ = yr.prototype.copySampleValue_;
yr.prototype.afterEnd_ = yr.prototype.copySampleValue_;
class DE extends yr {
	constructor(e, t, n, i) {
		super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
			endingStart: Os,
			endingEnd: Os
		}
	}
	intervalChanged_(e, t, n) {
		const i = this.parameterPositions;
		let s = e - 2,
			o = e + 1,
			a = i[s],
			l = i[o];
		if (a === void 0) switch (this.getSettings_().endingStart) {
			case Ns:
				s = e, a = 2 * t - n;
				break;
			case ec:
				s = i.length - 2, a = t + i[s] - i[s + 1];
				break;
			default:
				s = e, a = n
		}
		if (l === void 0) switch (this.getSettings_().endingEnd) {
			case Ns:
				o = e, l = 2 * n - t;
				break;
			case ec:
				o = 1, l = n + i[1] - i[0];
				break;
			default:
				o = e - 1, l = t
		}
		const c = (n - t) * .5,
			h = this.valueSize;
		this._weightPrev = c / (t - a), this._weightNext = c / (l - n), this._offsetPrev = s * h, this._offsetNext = o * h
	}
	interpolate_(e, t, n, i) {
		const s = this.resultBuffer,
			o = this.sampleValues,
			a = this.valueSize,
			l = e * a,
			c = l - a,
			h = this._offsetPrev,
			u = this._offsetNext,
			f = this._weightPrev,
			d = this._weightNext,
			p = (n - t) / (i - t),
			m = p * p,
			v = m * p,
			g = -f * v + 2 * f * m - f * p,
			_ = (1 + f) * v + (-1.5 - 2 * f) * m + (-.5 + f) * p + 1,
			w = (-1 - d) * v + (1.5 + d) * m + .5 * p,
			x = d * v - d * m;
		for (let y = 0; y !== a; ++y) s[y] = g * o[h + y] + _ * o[c + y] + w * o[l + y] + x * o[u + y];
		return s
	}
}
class I0 extends yr {
	constructor(e, t, n, i) {
		super(e, t, n, i)
	}
	interpolate_(e, t, n, i) {
		const s = this.resultBuffer,
			o = this.sampleValues,
			a = this.valueSize,
			l = e * a,
			c = l - a,
			h = (n - t) / (i - t),
			u = 1 - h;
		for (let f = 0; f !== a; ++f) s[f] = o[c + f] * u + o[l + f] * h;
		return s
	}
}
class IE extends yr {
	constructor(e, t, n, i) {
		super(e, t, n, i)
	}
	interpolate_(e) {
		return this.copySampleValue_(e - 1)
	}
}
class Mi {
	constructor(e, t, n, i) {
		if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
		if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
		this.name = e, this.times = dt.convertArray(t, this.TimeBufferType), this.values = dt.convertArray(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation)
	}
	static toJSON(e) {
		const t = e.constructor;
		let n;
		if (t.toJSON !== this.toJSON) n = t.toJSON(e);
		else {
			n = {
				name: e.name,
				times: dt.convertArray(e.times, Array),
				values: dt.convertArray(e.values, Array)
			};
			const i = e.getInterpolation();
			i !== e.DefaultInterpolation && (n.interpolation = i)
		}
		return n.type = e.ValueTypeName, n
	}
	InterpolantFactoryMethodDiscrete(e) {
		return new IE(this.times, this.values, this.getValueSize(), e)
	}
	InterpolantFactoryMethodLinear(e) {
		return new I0(this.times, this.values, this.getValueSize(), e)
	}
	InterpolantFactoryMethodSmooth(e) {
		return new DE(this.times, this.values, this.getValueSize(), e)
	}
	setInterpolation(e) {
		let t;
		switch (e) {
			case Ql:
				t = this.InterpolantFactoryMethodDiscrete;
				break;
			case Kl:
				t = this.InterpolantFactoryMethodLinear;
				break;
			case Wc:
				t = this.InterpolantFactoryMethodSmooth;
				break
		}
		if (t === void 0) {
			const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
			if (this.createInterpolant === void 0)
				if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
				else throw new Error(n);
			return console.warn("THREE.KeyframeTrack:", n), this
		}
		return this.createInterpolant = t, this
	}
	getInterpolation() {
		switch (this.createInterpolant) {
			case this.InterpolantFactoryMethodDiscrete:
				return Ql;
			case this.InterpolantFactoryMethodLinear:
				return Kl;
			case this.InterpolantFactoryMethodSmooth:
				return Wc
		}
	}
	getValueSize() {
		return this.values.length / this.times.length
	}
	shift(e) {
		if (e !== 0) {
			const t = this.times;
			for (let n = 0, i = t.length; n !== i; ++n) t[n] += e
		}
		return this
	}
	scale(e) {
		if (e !== 1) {
			const t = this.times;
			for (let n = 0, i = t.length; n !== i; ++n) t[n] *= e
		}
		return this
	}
	trim(e, t) {
		const n = this.times,
			i = n.length;
		let s = 0,
			o = i - 1;
		for (; s !== i && n[s] < e;) ++s;
		for (; o !== -1 && n[o] > t;) --o;
		if (++o, s !== 0 || o !== i) {
			s >= o && (o = Math.max(o, 1), s = o - 1);
			const a = this.getValueSize();
			this.times = dt.arraySlice(n, s, o), this.values = dt.arraySlice(this.values, s * a, o * a)
		}
		return this
	}
	validate() {
		let e = !0;
		const t = this.getValueSize();
		t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
		const n = this.times,
			i = this.values,
			s = n.length;
		s === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
		let o = null;
		for (let a = 0; a !== s; a++) {
			const l = n[a];
			if (typeof l == "number" && isNaN(l)) {
				console.error("THREE.KeyframeTrack: Time is not a valid number.", this, a, l), e = !1;
				break
			}
			if (o !== null && o > l) {
				console.error("THREE.KeyframeTrack: Out of order keys.", this, a, l, o), e = !1;
				break
			}
			o = l
		}
		if (i !== void 0 && dt.isTypedArray(i))
			for (let a = 0, l = i.length; a !== l; ++a) {
				const c = i[a];
				if (isNaN(c)) {
					console.error("THREE.KeyframeTrack: Value is not a valid number.", this, a, c), e = !1;
					break
				}
			}
		return e
	}
	optimize() {
		const e = dt.arraySlice(this.times),
			t = dt.arraySlice(this.values),
			n = this.getValueSize(),
			i = this.getInterpolation() === Wc,
			s = e.length - 1;
		let o = 1;
		for (let a = 1; a < s; ++a) {
			let l = !1;
			const c = e[a],
				h = e[a + 1];
			if (c !== h && (a !== 1 || c !== e[0]))
				if (i) l = !0;
				else {
					const u = a * n,
						f = u - n,
						d = u + n;
					for (let p = 0; p !== n; ++p) {
						const m = t[u + p];
						if (m !== t[f + p] || m !== t[d + p]) {
							l = !0;
							break
						}
					}
				} if (l) {
				if (a !== o) {
					e[o] = e[a];
					const u = a * n,
						f = o * n;
					for (let d = 0; d !== n; ++d) t[f + d] = t[u + d]
				}++o
			}
		}
		if (s > 0) {
			e[o] = e[s];
			for (let a = s * n, l = o * n, c = 0; c !== n; ++c) t[l + c] = t[a + c];
			++o
		}
		return o !== e.length ? (this.times = dt.arraySlice(e, 0, o), this.values = dt.arraySlice(t, 0, o * n)) : (this.times = e, this.values = t), this
	}
	clone() {
		const e = dt.arraySlice(this.times, 0),
			t = dt.arraySlice(this.values, 0),
			n = this.constructor,
			i = new n(this.name, e, t);
		return i.createInterpolant = this.createInterpolant, i
	}
}
Mi.prototype.TimeBufferType = Float32Array;
Mi.prototype.ValueBufferType = Float32Array;
Mi.prototype.DefaultInterpolation = Kl;
class po extends Mi {}
po.prototype.ValueTypeName = "bool";
po.prototype.ValueBufferType = Array;
po.prototype.DefaultInterpolation = Ql;
po.prototype.InterpolantFactoryMethodLinear = void 0;
po.prototype.InterpolantFactoryMethodSmooth = void 0;
class F0 extends Mi {}
F0.prototype.ValueTypeName = "color";
class ic extends Mi {}
ic.prototype.ValueTypeName = "number";
class FE extends yr {
	constructor(e, t, n, i) {
		super(e, t, n, i)
	}
	interpolate_(e, t, n, i) {
		const s = this.resultBuffer,
			o = this.sampleValues,
			a = this.valueSize,
			l = (n - t) / (i - t);
		let c = e * a;
		for (let h = c + a; c !== h; c += 4) Ln.slerpFlat(s, 0, o, c - a, o, c, l);
		return s
	}
}
class Aa extends Mi {
	InterpolantFactoryMethodLinear(e) {
		return new FE(this.times, this.values, this.getValueSize(), e)
	}
}
Aa.prototype.ValueTypeName = "quaternion";
Aa.prototype.DefaultInterpolation = Kl;
Aa.prototype.InterpolantFactoryMethodSmooth = void 0;
class mo extends Mi {}
mo.prototype.ValueTypeName = "string";
mo.prototype.ValueBufferType = Array;
mo.prototype.DefaultInterpolation = Ql;
mo.prototype.InterpolantFactoryMethodLinear = void 0;
mo.prototype.InterpolantFactoryMethodSmooth = void 0;
class rc extends Mi {}
rc.prototype.ValueTypeName = "vector";
class Op {
	constructor(e, t = -1, n, i = ff) {
		this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = yi(), this.duration < 0 && this.resetDuration()
	}
	static parse(e) {
		const t = [],
			n = e.tracks,
			i = 1 / (e.fps || 1);
		for (let o = 0, a = n.length; o !== a; ++o) t.push(OE(n[o]).scale(i));
		const s = new this(e.name, e.duration, t, e.blendMode);
		return s.uuid = e.uuid, s
	}
	static toJSON(e) {
		const t = [],
			n = e.tracks,
			i = {
				name: e.name,
				duration: e.duration,
				tracks: t,
				uuid: e.uuid,
				blendMode: e.blendMode
			};
		for (let s = 0, o = n.length; s !== o; ++s) t.push(Mi.toJSON(n[s]));
		return i
	}
	static CreateFromMorphTargetSequence(e, t, n, i) {
		const s = t.length,
			o = [];
		for (let a = 0; a < s; a++) {
			let l = [],
				c = [];
			l.push((a + s - 1) % s, a, (a + 1) % s), c.push(0, 1, 0);
			const h = dt.getKeyframeOrder(l);
			l = dt.sortedArray(l, 1, h), c = dt.sortedArray(c, 1, h), !i && l[0] === 0 && (l.push(s), c.push(c[0])), o.push(new ic(".morphTargetInfluences[" + t[a].name + "]", l, c).scale(1 / n))
		}
		return new this(e, -1, o)
	}
	static findByName(e, t) {
		let n = e;
		if (!Array.isArray(e)) {
			const i = e;
			n = i.geometry && i.geometry.animations || i.animations
		}
		for (let i = 0; i < n.length; i++)
			if (n[i].name === t) return n[i];
		return null
	}
	static CreateClipsFromMorphTargetSequences(e, t, n) {
		const i = {},
			s = /^([\w-]*?)([\d]+)$/;
		for (let a = 0, l = e.length; a < l; a++) {
			const c = e[a],
				h = c.name.match(s);
			if (h && h.length > 1) {
				const u = h[1];
				let f = i[u];
				f || (i[u] = f = []), f.push(c)
			}
		}
		const o = [];
		for (const a in i) o.push(this.CreateFromMorphTargetSequence(a, i[a], t, n));
		return o
	}
	static parseAnimation(e, t) {
		if (!e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
		const n = function(u, f, d, p, m) {
				if (d.length !== 0) {
					const v = [],
						g = [];
					dt.flattenJSON(d, v, g, p), v.length !== 0 && m.push(new u(f, v, g))
				}
			},
			i = [],
			s = e.name || "default",
			o = e.fps || 30,
			a = e.blendMode;
		let l = e.length || -1;
		const c = e.hierarchy || [];
		for (let u = 0; u < c.length; u++) {
			const f = c[u].keys;
			if (!(!f || f.length === 0))
				if (f[0].morphTargets) {
					const d = {};
					let p;
					for (p = 0; p < f.length; p++)
						if (f[p].morphTargets)
							for (let m = 0; m < f[p].morphTargets.length; m++) d[f[p].morphTargets[m]] = -1;
					for (const m in d) {
						const v = [],
							g = [];
						for (let _ = 0; _ !== f[p].morphTargets.length; ++_) {
							const w = f[p];
							v.push(w.time), g.push(w.morphTarget === m ? 1 : 0)
						}
						i.push(new ic(".morphTargetInfluence[" + m + "]", v, g))
					}
					l = d.length * (o || 1)
				} else {
					const d = ".bones[" + t[u].name + "]";
					n(rc, d + ".position", f, "pos", i), n(Aa, d + ".quaternion", f, "rot", i), n(rc, d + ".scale", f, "scl", i)
				}
		}
		return i.length === 0 ? null : new this(s, l, i, a)
	}
	resetDuration() {
		const e = this.tracks;
		let t = 0;
		for (let n = 0, i = e.length; n !== i; ++n) {
			const s = this.tracks[n];
			t = Math.max(t, s.times[s.times.length - 1])
		}
		return this.duration = t, this
	}
	trim() {
		for (let e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
		return this
	}
	validate() {
		let e = !0;
		for (let t = 0; t < this.tracks.length; t++) e = e && this.tracks[t].validate();
		return e
	}
	optimize() {
		for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
		return this
	}
	clone() {
		const e = [];
		for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
		return new this.constructor(this.name, this.duration, e, this.blendMode)
	}
	toJSON() {
		return this.constructor.toJSON(this)
	}
}

function zE(r) {
	switch (r.toLowerCase()) {
		case "scalar":
		case "double":
		case "float":
		case "number":
		case "integer":
			return ic;
		case "vector":
		case "vector2":
		case "vector3":
		case "vector4":
			return rc;
		case "color":
			return F0;
		case "quaternion":
			return Aa;
		case "bool":
		case "boolean":
			return po;
		case "string":
			return mo
	}
	throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + r)
}

function OE(r) {
	if (r.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
	const e = zE(r.type);
	if (r.times === void 0) {
		const t = [],
			n = [];
		dt.flattenJSON(r.keys, t, n, "value"), r.times = t, r.values = n
	}
	return e.parse !== void 0 ? e.parse(r) : new e(r.name, r.times, r.values, r.interpolation)
}
const io = {
	enabled: !1,
	files: {},
	add: function(r, e) {
		this.enabled !== !1 && (this.files[r] = e)
	},
	get: function(r) {
		if (this.enabled !== !1) return this.files[r]
	},
	remove: function(r) {
		delete this.files[r]
	},
	clear: function() {
		this.files = {}
	}
};
class NE {
	constructor(e, t, n) {
		const i = this;
		let s = !1,
			o = 0,
			a = 0,
			l;
		const c = [];
		this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
			a++, s === !1 && i.onStart !== void 0 && i.onStart(h, o, a), s = !0
		}, this.itemEnd = function(h) {
			o++, i.onProgress !== void 0 && i.onProgress(h, o, a), o === a && (s = !1, i.onLoad !== void 0 && i.onLoad())
		}, this.itemError = function(h) {
			i.onError !== void 0 && i.onError(h)
		}, this.resolveURL = function(h) {
			return l ? l(h) : h
		}, this.setURLModifier = function(h) {
			return l = h, this
		}, this.addHandler = function(h, u) {
			return c.push(h, u), this
		}, this.removeHandler = function(h) {
			const u = c.indexOf(h);
			return u !== -1 && c.splice(u, 2), this
		}, this.getHandler = function(h) {
			for (let u = 0, f = c.length; u < f; u += 2) {
				const d = c[u],
					p = c[u + 1];
				if (d.global && (d.lastIndex = 0), d.test(h)) return p
			}
			return null
		}
	}
}
const BE = new NE;
class br {
	constructor(e) {
		this.manager = e !== void 0 ? e : BE, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}
	}
	load() {}
	loadAsync(e, t) {
		const n = this;
		return new Promise(function(i, s) {
			n.load(e, i, t, s)
		})
	}
	parse() {}
	setCrossOrigin(e) {
		return this.crossOrigin = e, this
	}
	setWithCredentials(e) {
		return this.withCredentials = e, this
	}
	setPath(e) {
		return this.path = e, this
	}
	setResourcePath(e) {
		return this.resourcePath = e, this
	}
	setRequestHeader(e) {
		return this.requestHeader = e, this
	}
}
const Li = {};
class kE extends br {
	constructor(e) {
		super(e)
	}
	load(e, t, n, i) {
		e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
		const s = io.get(e);
		if (s !== void 0) return this.manager.itemStart(e), setTimeout(() => {
			t && t(s), this.manager.itemEnd(e)
		}, 0), s;
		if (Li[e] !== void 0) {
			Li[e].push({
				onLoad: t,
				onProgress: n,
				onError: i
			});
			return
		}
		Li[e] = [], Li[e].push({
			onLoad: t,
			onProgress: n,
			onError: i
		});
		const o = new Request(e, {
			headers: new Headers(this.requestHeader),
			credentials: this.withCredentials ? "include" : "same-origin"
		});
		fetch(o).then(a => {
			if (a.status === 200 || a.status === 0) {
				if (a.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || a.body.getReader === void 0) return a;
				const l = Li[e],
					c = a.body.getReader(),
					h = a.headers.get("Content-Length"),
					u = h ? parseInt(h) : 0,
					f = u !== 0;
				let d = 0;
				const p = new ReadableStream({
					start(m) {
						v();

						function v() {
							c.read().then(({
								done: g,
								value: _
							}) => {
								if (g) m.close();
								else {
									d += _.byteLength;
									const w = new ProgressEvent("progress", {
										lengthComputable: f,
										loaded: d,
										total: u
									});
									for (let x = 0, y = l.length; x < y; x++) {
										const b = l[x];
										b.onProgress && b.onProgress(w)
									}
									m.enqueue(_), v()
								}
							})
						}
					}
				});
				return new Response(p)
			} else throw Error(`fetch for "${a.url}" responded with ${a.status}: ${a.statusText}`)
		}).then(a => {
			switch (this.responseType) {
				case "arraybuffer":
					return a.arrayBuffer();
				case "blob":
					return a.blob();
				case "document":
					return a.text().then(l => new DOMParser().parseFromString(l, this.mimeType));
				case "json":
					return a.json();
				default:
					return a.text()
			}
		}).then(a => {
			io.add(e, a);
			const l = Li[e];
			delete Li[e];
			for (let c = 0, h = l.length; c < h; c++) {
				const u = l[c];
				u.onLoad && u.onLoad(a)
			}
		}).catch(a => {
			const l = Li[e];
			if (l === void 0) throw this.manager.itemError(e), a;
			delete Li[e];
			for (let c = 0, h = l.length; c < h; c++) {
				const u = l[c];
				u.onError && u.onError(a)
			}
			this.manager.itemError(e)
		}).finally(() => {
			this.manager.itemEnd(e)
		}), this.manager.itemStart(e)
	}
	setResponseType(e) {
		return this.responseType = e, this
	}
	setMimeType(e) {
		return this.mimeType = e, this
	}
}
class z0 extends br {
	constructor(e) {
		super(e)
	}
	load(e, t, n, i) {
		this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
		const s = this,
			o = io.get(e);
		if (o !== void 0) return s.manager.itemStart(e), setTimeout(function() {
			t && t(o), s.manager.itemEnd(e)
		}, 0), o;
		const a = dc("img");

		function l() {
			h(), io.add(e, this), t && t(this), s.manager.itemEnd(e)
		}

		function c(u) {
			h(), i && i(u), s.manager.itemError(e), s.manager.itemEnd(e)
		}

		function h() {
			a.removeEventListener("load", l, !1), a.removeEventListener("error", c, !1)
		}
		return a.addEventListener("load", l, !1), a.addEventListener("error", c, !1), e.substr(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), s.manager.itemStart(e), a.src = e, a
	}
}
class UE extends br {
	constructor(e) {
		super(e)
	}
	load(e, t, n, i) {
		const s = new mc,
			o = new z0(this.manager);
		o.setCrossOrigin(this.crossOrigin), o.setPath(this.path);
		let a = 0;

		function l(c) {
			o.load(e[c], function(h) {
				s.images[c] = h, a++, a === 6 && (s.needsUpdate = !0, t && t(s))
			}, void 0, i)
		}
		for (let c = 0; c < e.length; ++c) l(c);
		return s
	}
}
class VE extends br {
	constructor(e) {
		super(e)
	}
	load(e, t, n, i) {
		const s = new sn,
			o = new z0(this.manager);
		return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function(a) {
			s.image = a, s.needsUpdate = !0, t !== void 0 && t(s)
		}, n, i), s
	}
}
class bi extends nt {
	constructor(e, t = 1) {
		super(), this.type = "Light", this.color = new De(e), this.intensity = t
	}
	dispose() {}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.intensity = e.intensity, this
	}
	toJSON(e) {
		const t = super.toJSON(e);
		return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t
	}
}
bi.prototype.isLight = !0;
class HE extends bi {
	constructor(e, t, n) {
		super(e, n), this.type = "HemisphereLight", this.position.copy(nt.DefaultUp), this.updateMatrix(), this.groundColor = new De(t)
	}
	copy(e) {
		return bi.prototype.copy.call(this, e), this.groundColor.copy(e.groundColor), this
	}
}
HE.prototype.isHemisphereLight = !0;
const Np = new Oe,
	Bp = new I,
	kp = new I;
class Cf {
	constructor(e) {
		this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new fe(512, 512), this.map = null, this.mapPass = null, this.matrix = new Oe, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new gc, this._frameExtents = new fe(1, 1), this._viewportCount = 1, this._viewports = [new rt(0, 0, 1, 1)]
	}
	getViewportCount() {
		return this._viewportCount
	}
	getFrustum() {
		return this._frustum
	}
	updateMatrices(e) {
		const t = this.camera,
			n = this.matrix;
		Bp.setFromMatrixPosition(e.matrixWorld), t.position.copy(Bp), kp.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(kp), t.updateMatrixWorld(), Np.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Np), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(t.projectionMatrix), n.multiply(t.matrixWorldInverse)
	}
	getViewport(e) {
		return this._viewports[e]
	}
	getFrameExtents() {
		return this._frameExtents
	}
	dispose() {
		this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose()
	}
	copy(e) {
		return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this
	}
	clone() {
		return new this.constructor().copy(this)
	}
	toJSON() {
		const e = {};
		return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e
	}
}
class O0 extends Cf {
	constructor() {
		super(new Sn(50, 1, .5, 500)), this.focus = 1
	}
	updateMatrices(e) {
		const t = this.camera,
			n = fu * 2 * e.angle * this.focus,
			i = this.mapSize.width / this.mapSize.height,
			s = e.distance || t.far;
		(n !== t.fov || i !== t.aspect || s !== t.far) && (t.fov = n, t.aspect = i, t.far = s, t.updateProjectionMatrix()), super.updateMatrices(e)
	}
	copy(e) {
		return super.copy(e), this.focus = e.focus, this
	}
}
O0.prototype.isSpotLightShadow = !0;
class GE extends bi {
	constructor(e, t, n = 0, i = Math.PI / 3, s = 0, o = 1) {
		super(e, t), this.type = "SpotLight", this.position.copy(nt.DefaultUp), this.updateMatrix(), this.target = new nt, this.distance = n, this.angle = i, this.penumbra = s, this.decay = o, this.shadow = new O0
	}
	get power() {
		return this.intensity * Math.PI
	}
	set power(e) {
		this.intensity = e / Math.PI
	}
	dispose() {
		this.shadow.dispose()
	}
	copy(e) {
		return super.copy(e), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
	}
}
GE.prototype.isSpotLight = !0;
const Up = new Oe,
	Ro = new I,
	Th = new I;
class N0 extends Cf {
	constructor() {
		super(new Sn(90, 1, .5, 500)), this._frameExtents = new fe(4, 2), this._viewportCount = 6, this._viewports = [new rt(2, 1, 1, 1), new rt(0, 1, 1, 1), new rt(3, 1, 1, 1), new rt(1, 1, 1, 1), new rt(3, 0, 1, 1), new rt(1, 0, 1, 1)], this._cubeDirections = [new I(1, 0, 0), new I(-1, 0, 0), new I(0, 0, 1), new I(0, 0, -1), new I(0, 1, 0), new I(0, -1, 0)], this._cubeUps = [new I(0, 1, 0), new I(0, 1, 0), new I(0, 1, 0), new I(0, 1, 0), new I(0, 0, 1), new I(0, 0, -1)]
	}
	updateMatrices(e, t = 0) {
		const n = this.camera,
			i = this.matrix,
			s = e.distance || n.far;
		s !== n.far && (n.far = s, n.updateProjectionMatrix()), Ro.setFromMatrixPosition(e.matrixWorld), n.position.copy(Ro), Th.copy(n.position), Th.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(Th), n.updateMatrixWorld(), i.makeTranslation(-Ro.x, -Ro.y, -Ro.z), Up.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Up)
	}
}
N0.prototype.isPointLightShadow = !0;
class WE extends bi {
	constructor(e, t, n = 0, i = 1) {
		super(e, t), this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new N0
	}
	get power() {
		return this.intensity * 4 * Math.PI
	}
	set power(e) {
		this.intensity = e / (4 * Math.PI)
	}
	dispose() {
		this.shadow.dispose()
	}
	copy(e) {
		return super.copy(e), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this
	}
}
WE.prototype.isPointLight = !0;
class B0 extends Cf {
	constructor() {
		super(new vc(-5, 5, 5, -5, .5, 500))
	}
}
B0.prototype.isDirectionalLightShadow = !0;
class qE extends bi {
	constructor(e, t) {
		super(e, t), this.type = "DirectionalLight", this.position.copy(nt.DefaultUp), this.updateMatrix(), this.target = new nt, this.shadow = new B0
	}
	dispose() {
		this.shadow.dispose()
	}
	copy(e) {
		return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
	}
}
qE.prototype.isDirectionalLight = !0;
class XE extends bi {
	constructor(e, t) {
		super(e, t), this.type = "AmbientLight"
	}
}
XE.prototype.isAmbientLight = !0;
class YE extends bi {
	constructor(e, t, n = 10, i = 10) {
		super(e, t), this.type = "RectAreaLight", this.width = n, this.height = i
	}
	get power() {
		return this.intensity * this.width * this.height * Math.PI
	}
	set power(e) {
		this.intensity = e / (this.width * this.height * Math.PI)
	}
	copy(e) {
		return super.copy(e), this.width = e.width, this.height = e.height, this
	}
	toJSON(e) {
		const t = super.toJSON(e);
		return t.object.width = this.width, t.object.height = this.height, t
	}
}
YE.prototype.isRectAreaLight = !0;
class k0 {
	constructor() {
		this.coefficients = [];
		for (let e = 0; e < 9; e++) this.coefficients.push(new I)
	}
	set(e) {
		for (let t = 0; t < 9; t++) this.coefficients[t].copy(e[t]);
		return this
	}
	zero() {
		for (let e = 0; e < 9; e++) this.coefficients[e].set(0, 0, 0);
		return this
	}
	getAt(e, t) {
		const n = e.x,
			i = e.y,
			s = e.z,
			o = this.coefficients;
		return t.copy(o[0]).multiplyScalar(.282095), t.addScaledVector(o[1], .488603 * i), t.addScaledVector(o[2], .488603 * s), t.addScaledVector(o[3], .488603 * n), t.addScaledVector(o[4], 1.092548 * (n * i)), t.addScaledVector(o[5], 1.092548 * (i * s)), t.addScaledVector(o[6], .315392 * (3 * s * s - 1)), t.addScaledVector(o[7], 1.092548 * (n * s)), t.addScaledVector(o[8], .546274 * (n * n - i * i)), t
	}
	getIrradianceAt(e, t) {
		const n = e.x,
			i = e.y,
			s = e.z,
			o = this.coefficients;
		return t.copy(o[0]).multiplyScalar(.886227), t.addScaledVector(o[1], 2 * .511664 * i), t.addScaledVector(o[2], 2 * .511664 * s), t.addScaledVector(o[3], 2 * .511664 * n), t.addScaledVector(o[4], 2 * .429043 * n * i), t.addScaledVector(o[5], 2 * .429043 * i * s), t.addScaledVector(o[6], .743125 * s * s - .247708), t.addScaledVector(o[7], 2 * .429043 * n * s), t.addScaledVector(o[8], .429043 * (n * n - i * i)), t
	}
	add(e) {
		for (let t = 0; t < 9; t++) this.coefficients[t].add(e.coefficients[t]);
		return this
	}
	addScaledSH(e, t) {
		for (let n = 0; n < 9; n++) this.coefficients[n].addScaledVector(e.coefficients[n], t);
		return this
	}
	scale(e) {
		for (let t = 0; t < 9; t++) this.coefficients[t].multiplyScalar(e);
		return this
	}
	lerp(e, t) {
		for (let n = 0; n < 9; n++) this.coefficients[n].lerp(e.coefficients[n], t);
		return this
	}
	equals(e) {
		for (let t = 0; t < 9; t++)
			if (!this.coefficients[t].equals(e.coefficients[t])) return !1;
		return !0
	}
	copy(e) {
		return this.set(e.coefficients)
	}
	clone() {
		return new this.constructor().copy(this)
	}
	fromArray(e, t = 0) {
		const n = this.coefficients;
		for (let i = 0; i < 9; i++) n[i].fromArray(e, t + i * 3);
		return this
	}
	toArray(e = [], t = 0) {
		const n = this.coefficients;
		for (let i = 0; i < 9; i++) n[i].toArray(e, t + i * 3);
		return e
	}
	static getBasisAt(e, t) {
		const n = e.x,
			i = e.y,
			s = e.z;
		t[0] = .282095, t[1] = .488603 * i, t[2] = .488603 * s, t[3] = .488603 * n, t[4] = 1.092548 * n * i, t[5] = 1.092548 * i * s, t[6] = .315392 * (3 * s * s - 1), t[7] = 1.092548 * n * s, t[8] = .546274 * (n * n - i * i)
	}
}
k0.prototype.isSphericalHarmonics3 = !0;
class Lf extends bi {
	constructor(e = new k0, t = 1) {
		super(void 0, t), this.sh = e
	}
	copy(e) {
		return super.copy(e), this.sh.copy(e.sh), this
	}
	fromJSON(e) {
		return this.intensity = e.intensity, this.sh.fromArray(e.sh), this
	}
	toJSON(e) {
		const t = super.toJSON(e);
		return t.object.sh = this.sh.toArray(), t
	}
}
Lf.prototype.isLightProbe = !0;
class jE {
	static decodeText(e) {
		if (typeof TextDecoder < "u") return new TextDecoder().decode(e);
		let t = "";
		for (let n = 0, i = e.length; n < i; n++) t += String.fromCharCode(e[n]);
		try {
			return decodeURIComponent(escape(t))
		} catch {
			return t
		}
	}
	static extractUrlBase(e) {
		const t = e.lastIndexOf("/");
		return t === -1 ? "./" : e.substr(0, t + 1)
	}
	static resolveURL(e, t) {
		return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e)
	}
}
class $E extends pt {
	constructor() {
		super(), this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0
	}
	copy(e) {
		return super.copy(e), this.instanceCount = e.instanceCount, this
	}
	clone() {
		return new this.constructor().copy(this)
	}
	toJSON() {
		const e = super.toJSON(this);
		return e.instanceCount = this.instanceCount, e.isInstancedBufferGeometry = !0, e
	}
}
$E.prototype.isInstancedBufferGeometry = !0;
class ZE extends br {
	constructor(e) {
		super(e), typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = {
			premultiplyAlpha: "none"
		}
	}
	setOptions(e) {
		return this.options = e, this
	}
	load(e, t, n, i) {
		e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
		const s = this,
			o = io.get(e);
		if (o !== void 0) return s.manager.itemStart(e), setTimeout(function() {
			t && t(o), s.manager.itemEnd(e)
		}, 0), o;
		const a = {};
		a.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", a.headers = this.requestHeader, fetch(e, a).then(function(l) {
			return l.blob()
		}).then(function(l) {
			return createImageBitmap(l, Object.assign(s.options, {
				colorSpaceConversion: "none"
			}))
		}).then(function(l) {
			io.add(e, l), t && t(l), s.manager.itemEnd(e)
		}).catch(function(l) {
			i && i(l), s.manager.itemError(e), s.manager.itemEnd(e)
		}), s.manager.itemStart(e)
	}
}
ZE.prototype.isImageBitmapLoader = !0;
let xl;
const JE = {
	getContext: function() {
		return xl === void 0 && (xl = new(window.AudioContext || window.webkitAudioContext)), xl
	},
	setContext: function(r) {
		xl = r
	}
};
class QE extends br {
	constructor(e) {
		super(e)
	}
	load(e, t, n, i) {
		const s = this,
			o = new kE(this.manager);
		o.setResponseType("arraybuffer"), o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(a) {
			try {
				const l = a.slice(0);
				JE.getContext().decodeAudioData(l, function(h) {
					t(h)
				})
			} catch (l) {
				i ? i(l) : console.error(l), s.manager.itemError(e)
			}
		}, n, i)
	}
}
class KE extends Lf {
	constructor(e, t, n = 1) {
		super(void 0, n);
		const i = new De().set(e),
			s = new De().set(t),
			o = new I(i.r, i.g, i.b),
			a = new I(s.r, s.g, s.b),
			l = Math.sqrt(Math.PI),
			c = l * Math.sqrt(.75);
		this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l), this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c)
	}
}
KE.prototype.isHemisphereLightProbe = !0;
class eA extends Lf {
	constructor(e, t = 1) {
		super(void 0, t);
		const n = new De().set(e);
		this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI))
	}
}
eA.prototype.isAmbientLightProbe = !0;
class tA extends nt {
	constructor(e) {
		super(), this.type = "Audio", this.listener = e, this.context = e.context, this.gain = this.context.createGain(), this.gain.connect(e.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = !1, this.filters = []
	}
	getOutput() {
		return this.gain
	}
	setNodeSource(e) {
		return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = e, this.connect(), this
	}
	setMediaElementSource(e) {
		return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(e), this.connect(), this
	}
	setMediaStreamSource(e) {
		return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(e), this.connect(), this
	}
	setBuffer(e) {
		return this.buffer = e, this.sourceType = "buffer", this.autoplay && this.play(), this
	}
	play(e = 0) {
		if (this.isPlaying === !0) {
			console.warn("THREE.Audio: Audio is already playing.");
			return
		}
		if (this.hasPlaybackControl === !1) {
			console.warn("THREE.Audio: this Audio has no playback control.");
			return
		}
		this._startedAt = this.context.currentTime + e;
		const t = this.context.createBufferSource();
		return t.buffer = this.buffer, t.loop = this.loop, t.loopStart = this.loopStart, t.loopEnd = this.loopEnd, t.onended = this.onEnded.bind(this), t.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = t, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect()
	}
	pause() {
		if (this.hasPlaybackControl === !1) {
			console.warn("THREE.Audio: this Audio has no playback control.");
			return
		}
		return this.isPlaying === !0 && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, this.loop === !0 && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this
	}
	stop() {
		if (this.hasPlaybackControl === !1) {
			console.warn("THREE.Audio: this Audio has no playback control.");
			return
		}
		return this._progress = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this
	}
	connect() {
		if (this.filters.length > 0) {
			this.source.connect(this.filters[0]);
			for (let e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].connect(this.filters[e]);
			this.filters[this.filters.length - 1].connect(this.getOutput())
		} else this.source.connect(this.getOutput());
		return this._connected = !0, this
	}
	disconnect() {
		if (this.filters.length > 0) {
			this.source.disconnect(this.filters[0]);
			for (let e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].disconnect(this.filters[e]);
			this.filters[this.filters.length - 1].disconnect(this.getOutput())
		} else this.source.disconnect(this.getOutput());
		return this._connected = !1, this
	}
	getFilters() {
		return this.filters
	}
	setFilters(e) {
		return e || (e = []), this._connected === !0 ? (this.disconnect(), this.filters = e.slice(), this.connect()) : this.filters = e.slice(), this
	}
	setDetune(e) {
		if (this.detune = e, this.source.detune !== void 0) return this.isPlaying === !0 && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this
	}
	getDetune() {
		return this.detune
	}
	getFilter() {
		return this.getFilters()[0]
	}
	setFilter(e) {
		return this.setFilters(e ? [e] : [])
	}
	setPlaybackRate(e) {
		if (this.hasPlaybackControl === !1) {
			console.warn("THREE.Audio: this Audio has no playback control.");
			return
		}
		return this.playbackRate = e, this.isPlaying === !0 && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this
	}
	getPlaybackRate() {
		return this.playbackRate
	}
	onEnded() {
		this.isPlaying = !1
	}
	getLoop() {
		return this.hasPlaybackControl === !1 ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop
	}
	setLoop(e) {
		if (this.hasPlaybackControl === !1) {
			console.warn("THREE.Audio: this Audio has no playback control.");
			return
		}
		return this.loop = e, this.isPlaying === !0 && (this.source.loop = this.loop), this
	}
	setLoopStart(e) {
		return this.loopStart = e, this
	}
	setLoopEnd(e) {
		return this.loopEnd = e, this
	}
	getVolume() {
		return this.gain.gain.value
	}
	setVolume(e) {
		return this.gain.gain.setTargetAtTime(e, this.context.currentTime, .01), this
	}
}
class nA {
	constructor(e, t, n) {
		this.binding = e, this.valueSize = n;
		let i, s, o;
		switch (t) {
			case "quaternion":
				i = this._slerp, s = this._slerpAdditive, o = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(n * 6), this._workIndex = 5;
				break;
			case "string":
			case "bool":
				i = this._select, s = this._select, o = this._setAdditiveIdentityOther, this.buffer = new Array(n * 5);
				break;
			default:
				i = this._lerp, s = this._lerpAdditive, o = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(n * 5)
		}
		this._mixBufferRegion = i, this._mixBufferRegionAdditive = s, this._setIdentity = o, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0
	}
	accumulate(e, t) {
		const n = this.buffer,
			i = this.valueSize,
			s = e * i + i;
		let o = this.cumulativeWeight;
		if (o === 0) {
			for (let a = 0; a !== i; ++a) n[s + a] = n[a];
			o = t
		} else {
			o += t;
			const a = t / o;
			this._mixBufferRegion(n, s, 0, a, i)
		}
		this.cumulativeWeight = o
	}
	accumulateAdditive(e) {
		const t = this.buffer,
			n = this.valueSize,
			i = n * this._addIndex;
		this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(t, i, 0, e, n), this.cumulativeWeightAdditive += e
	}
	apply(e) {
		const t = this.valueSize,
			n = this.buffer,
			i = e * t + t,
			s = this.cumulativeWeight,
			o = this.cumulativeWeightAdditive,
			a = this.binding;
		if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, s < 1) {
			const l = t * this._origIndex;
			this._mixBufferRegion(n, i, l, 1 - s, t)
		}
		o > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * t, 1, t);
		for (let l = t, c = t + t; l !== c; ++l)
			if (n[l] !== n[l + t]) {
				a.setValue(n, i);
				break
			}
	}
	saveOriginalState() {
		const e = this.binding,
			t = this.buffer,
			n = this.valueSize,
			i = n * this._origIndex;
		e.getValue(t, i);
		for (let s = n, o = i; s !== o; ++s) t[s] = t[i + s % n];
		this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0
	}
	restoreOriginalState() {
		const e = this.valueSize * 3;
		this.binding.setValue(this.buffer, e)
	}
	_setAdditiveIdentityNumeric() {
		const e = this._addIndex * this.valueSize,
			t = e + this.valueSize;
		for (let n = e; n < t; n++) this.buffer[n] = 0
	}
	_setAdditiveIdentityQuaternion() {
		this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1
	}
	_setAdditiveIdentityOther() {
		const e = this._origIndex * this.valueSize,
			t = this._addIndex * this.valueSize;
		for (let n = 0; n < this.valueSize; n++) this.buffer[t + n] = this.buffer[e + n]
	}
	_select(e, t, n, i, s) {
		if (i >= .5)
			for (let o = 0; o !== s; ++o) e[t + o] = e[n + o]
	}
	_slerp(e, t, n, i) {
		Ln.slerpFlat(e, t, e, t, e, n, i)
	}
	_slerpAdditive(e, t, n, i, s) {
		const o = this._workIndex * s;
		Ln.multiplyQuaternionsFlat(e, o, e, t, e, n), Ln.slerpFlat(e, t, e, t, e, o, i)
	}
	_lerp(e, t, n, i, s) {
		const o = 1 - i;
		for (let a = 0; a !== s; ++a) {
			const l = t + a;
			e[l] = e[l] * o + e[n + a] * i
		}
	}
	_lerpAdditive(e, t, n, i, s) {
		for (let o = 0; o !== s; ++o) {
			const a = t + o;
			e[a] = e[a] + e[n + o] * i
		}
	}
}
const Rf = "\\[\\]\\.:\\/",
	iA = new RegExp("[" + Rf + "]", "g"),
	Pf = "[^" + Rf + "]",
	rA = "[^" + Rf.replace("\\.", "") + "]",
	sA = /((?:WC+[\/:])*)/.source.replace("WC", Pf),
	oA = /(WCOD+)?/.source.replace("WCOD", rA),
	aA = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Pf),
	lA = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Pf),
	cA = new RegExp("^" + sA + oA + aA + lA + "$"),
	hA = ["material", "materials", "bones"];
class uA {
	constructor(e, t, n) {
		const i = n || et.parseTrackName(t);
		this._targetGroup = e, this._bindings = e.subscribe_(t, i)
	}
	getValue(e, t) {
		this.bind();
		const n = this._targetGroup.nCachedObjects_,
			i = this._bindings[n];
		i !== void 0 && i.getValue(e, t)
	}
	setValue(e, t) {
		const n = this._bindings;
		for (let i = this._targetGroup.nCachedObjects_, s = n.length; i !== s; ++i) n[i].setValue(e, t)
	}
	bind() {
		const e = this._bindings;
		for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind()
	}
	unbind() {
		const e = this._bindings;
		for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind()
	}
}
class et {
	constructor(e, t, n) {
		this.path = t, this.parsedPath = n || et.parseTrackName(t), this.node = et.findNode(e, this.parsedPath.nodeName) || e, this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
	}
	static create(e, t, n) {
		return e && e.isAnimationObjectGroup ? new et.Composite(e, t, n) : new et(e, t, n)
	}
	static sanitizeNodeName(e) {
		return e.replace(/\s/g, "_").replace(iA, "")
	}
	static parseTrackName(e) {
		const t = cA.exec(e);
		if (!t) throw new Error("PropertyBinding: Cannot parse trackName: " + e);
		const n = {
				nodeName: t[2],
				objectName: t[3],
				objectIndex: t[4],
				propertyName: t[5],
				propertyIndex: t[6]
			},
			i = n.nodeName && n.nodeName.lastIndexOf(".");
		if (i !== void 0 && i !== -1) {
			const s = n.nodeName.substring(i + 1);
			hA.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = s)
		}
		if (n.propertyName === null || n.propertyName.length === 0) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
		return n
	}
	static findNode(e, t) {
		if (!t || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e;
		if (e.skeleton) {
			const n = e.skeleton.getBoneByName(t);
			if (n !== void 0) return n
		}
		if (e.children) {
			const n = function(s) {
					for (let o = 0; o < s.length; o++) {
						const a = s[o];
						if (a.name === t || a.uuid === t) return a;
						const l = n(a.children);
						if (l) return l
					}
					return null
				},
				i = n(e.children);
			if (i) return i
		}
		return null
	}
	_getValue_unavailable() {}
	_setValue_unavailable() {}
	_getValue_direct(e, t) {
		e[t] = this.targetObject[this.propertyName]
	}
	_getValue_array(e, t) {
		const n = this.resolvedProperty;
		for (let i = 0, s = n.length; i !== s; ++i) e[t++] = n[i]
	}
	_getValue_arrayElement(e, t) {
		e[t] = this.resolvedProperty[this.propertyIndex]
	}
	_getValue_toArray(e, t) {
		this.resolvedProperty.toArray(e, t)
	}
	_setValue_direct(e, t) {
		this.targetObject[this.propertyName] = e[t]
	}
	_setValue_direct_setNeedsUpdate(e, t) {
		this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0
	}
	_setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
		this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0
	}
	_setValue_array(e, t) {
		const n = this.resolvedProperty;
		for (let i = 0, s = n.length; i !== s; ++i) n[i] = e[t++]
	}
	_setValue_array_setNeedsUpdate(e, t) {
		const n = this.resolvedProperty;
		for (let i = 0, s = n.length; i !== s; ++i) n[i] = e[t++];
		this.targetObject.needsUpdate = !0
	}
	_setValue_array_setMatrixWorldNeedsUpdate(e, t) {
		const n = this.resolvedProperty;
		for (let i = 0, s = n.length; i !== s; ++i) n[i] = e[t++];
		this.targetObject.matrixWorldNeedsUpdate = !0
	}
	_setValue_arrayElement(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t]
	}
	_setValue_arrayElement_setNeedsUpdate(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0
	}
	_setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0
	}
	_setValue_fromArray(e, t) {
		this.resolvedProperty.fromArray(e, t)
	}
	_setValue_fromArray_setNeedsUpdate(e, t) {
		this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0
	}
	_setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
		this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0
	}
	_getValue_unbound(e, t) {
		this.bind(), this.getValue(e, t)
	}
	_setValue_unbound(e, t) {
		this.bind(), this.setValue(e, t)
	}
	bind() {
		let e = this.node;
		const t = this.parsedPath,
			n = t.objectName,
			i = t.propertyName;
		let s = t.propertyIndex;
		if (e || (e = et.findNode(this.rootNode, t.nodeName) || this.rootNode, this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
			console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
			return
		}
		if (n) {
			let c = t.objectIndex;
			switch (n) {
				case "materials":
					if (!e.material) {
						console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
						return
					}
					if (!e.material.materials) {
						console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
						return
					}
					e = e.material.materials;
					break;
				case "bones":
					if (!e.skeleton) {
						console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
						return
					}
					e = e.skeleton.bones;
					for (let h = 0; h < e.length; h++)
						if (e[h].name === c) {
							c = h;
							break
						} break;
				default:
					if (e[n] === void 0) {
						console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
						return
					}
					e = e[n]
			}
			if (c !== void 0) {
				if (e[c] === void 0) {
					console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
					return
				}
				e = e[c]
			}
		}
		const o = e[i];
		if (o === void 0) {
			const c = t.nodeName;
			console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + i + " but it wasn't found.", e);
			return
		}
		let a = this.Versioning.None;
		this.targetObject = e, e.needsUpdate !== void 0 ? a = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (a = this.Versioning.MatrixWorldNeedsUpdate);
		let l = this.BindingType.Direct;
		if (s !== void 0) {
			if (i === "morphTargetInfluences") {
				if (!e.geometry) {
					console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
					return
				}
				if (e.geometry.isBufferGeometry) {
					if (!e.geometry.morphAttributes) {
						console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
						return
					}
					e.morphTargetDictionary[s] !== void 0 && (s = e.morphTargetDictionary[s])
				} else {
					console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.", this);
					return
				}
			}
			l = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = s
		} else o.fromArray !== void 0 && o.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (l = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = i;
		this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][a]
	}
	unbind() {
		this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
	}
}
et.Composite = uA;
et.prototype.BindingType = {
	Direct: 0,
	EntireArray: 1,
	ArrayElement: 2,
	HasFromToArray: 3
};
et.prototype.Versioning = {
	None: 0,
	NeedsUpdate: 1,
	MatrixWorldNeedsUpdate: 2
};
et.prototype.GetterByBindingType = [et.prototype._getValue_direct, et.prototype._getValue_array, et.prototype._getValue_arrayElement, et.prototype._getValue_toArray];
et.prototype.SetterByBindingTypeAndVersioning = [
	[et.prototype._setValue_direct, et.prototype._setValue_direct_setNeedsUpdate, et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],
	[et.prototype._setValue_array, et.prototype._setValue_array_setNeedsUpdate, et.prototype._setValue_array_setMatrixWorldNeedsUpdate],
	[et.prototype._setValue_arrayElement, et.prototype._setValue_arrayElement_setNeedsUpdate, et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],
	[et.prototype._setValue_fromArray, et.prototype._setValue_fromArray_setNeedsUpdate, et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]
];
class fA {
	constructor(e, t, n = null, i = t.blendMode) {
		this._mixer = e, this._clip = t, this._localRoot = n, this.blendMode = i;
		const s = t.tracks,
			o = s.length,
			a = new Array(o),
			l = {
				endingStart: Os,
				endingEnd: Os
			};
		for (let c = 0; c !== o; ++c) {
			const h = s[c].createInterpolant(null);
			a[c] = h, h.settings = l
		}
		this._interpolantSettings = l, this._interpolants = a, this._propertyBindings = new Array(o), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = Yw, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
	}
	play() {
		return this._mixer._activateAction(this), this
	}
	stop() {
		return this._mixer._deactivateAction(this), this.reset()
	}
	reset() {
		return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
	}
	isRunning() {
		return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this)
	}
	isScheduled() {
		return this._mixer._isActiveAction(this)
	}
	startAt(e) {
		return this._startTime = e, this
	}
	setLoop(e, t) {
		return this.loop = e, this.repetitions = t, this
	}
	setEffectiveWeight(e) {
		return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading()
	}
	getEffectiveWeight() {
		return this._effectiveWeight
	}
	fadeIn(e) {
		return this._scheduleFading(e, 0, 1)
	}
	fadeOut(e) {
		return this._scheduleFading(e, 1, 0)
	}
	crossFadeFrom(e, t, n) {
		if (e.fadeOut(t), this.fadeIn(t), n) {
			const i = this._clip.duration,
				s = e._clip.duration,
				o = s / i,
				a = i / s;
			e.warp(1, o, t), this.warp(a, 1, t)
		}
		return this
	}
	crossFadeTo(e, t, n) {
		return e.crossFadeFrom(this, t, n)
	}
	stopFading() {
		const e = this._weightInterpolant;
		return e !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this
	}
	setEffectiveTimeScale(e) {
		return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping()
	}
	getEffectiveTimeScale() {
		return this._effectiveTimeScale
	}
	setDuration(e) {
		return this.timeScale = this._clip.duration / e, this.stopWarping()
	}
	syncWith(e) {
		return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping()
	}
	halt(e) {
		return this.warp(this._effectiveTimeScale, 0, e)
	}
	warp(e, t, n) {
		const i = this._mixer,
			s = i.time,
			o = this.timeScale;
		let a = this._timeScaleInterpolant;
		a === null && (a = i._lendControlInterpolant(), this._timeScaleInterpolant = a);
		const l = a.parameterPositions,
			c = a.sampleValues;
		return l[0] = s, l[1] = s + n, c[0] = e / o, c[1] = t / o, this
	}
	stopWarping() {
		const e = this._timeScaleInterpolant;
		return e !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this
	}
	getMixer() {
		return this._mixer
	}
	getClip() {
		return this._clip
	}
	getRoot() {
		return this._localRoot || this._mixer._root
	}
	_update(e, t, n, i) {
		if (!this.enabled) {
			this._updateWeight(e);
			return
		}
		const s = this._startTime;
		if (s !== null) {
			const l = (e - s) * n;
			if (l < 0 || n === 0) return;
			this._startTime = null, t = n * l
		}
		t *= this._updateTimeScale(e);
		const o = this._updateTime(t),
			a = this._updateWeight(e);
		if (a > 0) {
			const l = this._interpolants,
				c = this._propertyBindings;
			switch (this.blendMode) {
				case $_:
					for (let h = 0, u = l.length; h !== u; ++h) l[h].evaluate(o), c[h].accumulateAdditive(a);
					break;
				case ff:
				default:
					for (let h = 0, u = l.length; h !== u; ++h) l[h].evaluate(o), c[h].accumulate(i, a)
			}
		}
	}
	_updateWeight(e) {
		let t = 0;
		if (this.enabled) {
			t = this.weight;
			const n = this._weightInterpolant;
			if (n !== null) {
				const i = n.evaluate(e)[0];
				t *= i, e > n.parameterPositions[1] && (this.stopFading(), i === 0 && (this.enabled = !1))
			}
		}
		return this._effectiveWeight = t, t
	}
	_updateTimeScale(e) {
		let t = 0;
		if (!this.paused) {
			t = this.timeScale;
			const n = this._timeScaleInterpolant;
			if (n !== null) {
				const i = n.evaluate(e)[0];
				t *= i, e > n.parameterPositions[1] && (this.stopWarping(), t === 0 ? this.paused = !0 : this.timeScale = t)
			}
		}
		return this._effectiveTimeScale = t, t
	}
	_updateTime(e) {
		const t = this._clip.duration,
			n = this.loop;
		let i = this.time + e,
			s = this._loopCount;
		const o = n === jw;
		if (e === 0) return s === -1 ? i : o && (s & 1) === 1 ? t - i : i;
		if (n === Xw) {
			s === -1 && (this._loopCount = 0, this._setEndings(!0, !0, !1));
			e: {
				if (i >= t) i = t;
				else if (i < 0) i = 0;
				else {
					this.time = i;
					break e
				}
				this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
				this.time = i,
				this._mixer.dispatchEvent({
					type: "finished",
					action: this,
					direction: e < 0 ? -1 : 1
				})
			}
		} else {
			if (s === -1 && (e >= 0 ? (s = 0, this._setEndings(!0, this.repetitions === 0, o)) : this._setEndings(this.repetitions === 0, !0, o)), i >= t || i < 0) {
				const a = Math.floor(i / t);
				i -= t * a, s += Math.abs(a);
				const l = this.repetitions - s;
				if (l <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, i = e > 0 ? t : 0, this.time = i, this._mixer.dispatchEvent({
					type: "finished",
					action: this,
					direction: e > 0 ? 1 : -1
				});
				else {
					if (l === 1) {
						const c = e < 0;
						this._setEndings(c, !c, o)
					} else this._setEndings(!1, !1, o);
					this._loopCount = s, this.time = i, this._mixer.dispatchEvent({
						type: "loop",
						action: this,
						loopDelta: a
					})
				}
			} else this.time = i;
			if (o && (s & 1) === 1) return t - i
		}
		return i
	}
	_setEndings(e, t, n) {
		const i = this._interpolantSettings;
		n ? (i.endingStart = Ns, i.endingEnd = Ns) : (e ? i.endingStart = this.zeroSlopeAtStart ? Ns : Os : i.endingStart = ec, t ? i.endingEnd = this.zeroSlopeAtEnd ? Ns : Os : i.endingEnd = ec)
	}
	_scheduleFading(e, t, n) {
		const i = this._mixer,
			s = i.time;
		let o = this._weightInterpolant;
		o === null && (o = i._lendControlInterpolant(), this._weightInterpolant = o);
		const a = o.parameterPositions,
			l = o.sampleValues;
		return a[0] = s, l[0] = t, a[1] = s + e, l[1] = n, this
	}
}
class dA extends ns {
	constructor(e) {
		super(), this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
	}
	_bindAction(e, t) {
		const n = e._localRoot || this._root,
			i = e._clip.tracks,
			s = i.length,
			o = e._propertyBindings,
			a = e._interpolants,
			l = n.uuid,
			c = this._bindingsByRootAndName;
		let h = c[l];
		h === void 0 && (h = {}, c[l] = h);
		for (let u = 0; u !== s; ++u) {
			const f = i[u],
				d = f.name;
			let p = h[d];
			if (p !== void 0) o[u] = p;
			else {
				if (p = o[u], p !== void 0) {
					p._cacheIndex === null && (++p.referenceCount, this._addInactiveBinding(p, l, d));
					continue
				}
				const m = t && t._propertyBindings[u].binding.parsedPath;
				p = new nA(et.create(n, d, m), f.ValueTypeName, f.getValueSize()), ++p.referenceCount, this._addInactiveBinding(p, l, d), o[u] = p
			}
			a[u].resultBuffer = p.buffer
		}
	}
	_activateAction(e) {
		if (!this._isActiveAction(e)) {
			if (e._cacheIndex === null) {
				const n = (e._localRoot || this._root).uuid,
					i = e._clip.uuid,
					s = this._actionsByClip[i];
				this._bindAction(e, s && s.knownActions[0]), this._addInactiveAction(e, i, n)
			}
			const t = e._propertyBindings;
			for (let n = 0, i = t.length; n !== i; ++n) {
				const s = t[n];
				s.useCount++ === 0 && (this._lendBinding(s), s.saveOriginalState())
			}
			this._lendAction(e)
		}
	}
	_deactivateAction(e) {
		if (this._isActiveAction(e)) {
			const t = e._propertyBindings;
			for (let n = 0, i = t.length; n !== i; ++n) {
				const s = t[n];
				--s.useCount === 0 && (s.restoreOriginalState(), this._takeBackBinding(s))
			}
			this._takeBackAction(e)
		}
	}
	_initMemoryManager() {
		this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
		const e = this;
		this.stats = {
			actions: {
				get total() {
					return e._actions.length
				},
				get inUse() {
					return e._nActiveActions
				}
			},
			bindings: {
				get total() {
					return e._bindings.length
				},
				get inUse() {
					return e._nActiveBindings
				}
			},
			controlInterpolants: {
				get total() {
					return e._controlInterpolants.length
				},
				get inUse() {
					return e._nActiveControlInterpolants
				}
			}
		}
	}
	_isActiveAction(e) {
		const t = e._cacheIndex;
		return t !== null && t < this._nActiveActions
	}
	_addInactiveAction(e, t, n) {
		const i = this._actions,
			s = this._actionsByClip;
		let o = s[t];
		if (o === void 0) o = {
			knownActions: [e],
			actionByRoot: {}
		}, e._byClipCacheIndex = 0, s[t] = o;
		else {
			const a = o.knownActions;
			e._byClipCacheIndex = a.length, a.push(e)
		}
		e._cacheIndex = i.length, i.push(e), o.actionByRoot[n] = e
	}
	_removeInactiveAction(e) {
		const t = this._actions,
			n = t[t.length - 1],
			i = e._cacheIndex;
		n._cacheIndex = i, t[i] = n, t.pop(), e._cacheIndex = null;
		const s = e._clip.uuid,
			o = this._actionsByClip,
			a = o[s],
			l = a.knownActions,
			c = l[l.length - 1],
			h = e._byClipCacheIndex;
		c._byClipCacheIndex = h, l[h] = c, l.pop(), e._byClipCacheIndex = null;
		const u = a.actionByRoot,
			f = (e._localRoot || this._root).uuid;
		delete u[f], l.length === 0 && delete o[s], this._removeInactiveBindingsForAction(e)
	}
	_removeInactiveBindingsForAction(e) {
		const t = e._propertyBindings;
		for (let n = 0, i = t.length; n !== i; ++n) {
			const s = t[n];
			--s.referenceCount === 0 && this._removeInactiveBinding(s)
		}
	}
	_lendAction(e) {
		const t = this._actions,
			n = e._cacheIndex,
			i = this._nActiveActions++,
			s = t[i];
		e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s
	}
	_takeBackAction(e) {
		const t = this._actions,
			n = e._cacheIndex,
			i = --this._nActiveActions,
			s = t[i];
		e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s
	}
	_addInactiveBinding(e, t, n) {
		const i = this._bindingsByRootAndName,
			s = this._bindings;
		let o = i[t];
		o === void 0 && (o = {}, i[t] = o), o[n] = e, e._cacheIndex = s.length, s.push(e)
	}
	_removeInactiveBinding(e) {
		const t = this._bindings,
			n = e.binding,
			i = n.rootNode.uuid,
			s = n.path,
			o = this._bindingsByRootAndName,
			a = o[i],
			l = t[t.length - 1],
			c = e._cacheIndex;
		l._cacheIndex = c, t[c] = l, t.pop(), delete a[s], Object.keys(a).length === 0 && delete o[i]
	}
	_lendBinding(e) {
		const t = this._bindings,
			n = e._cacheIndex,
			i = this._nActiveBindings++,
			s = t[i];
		e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s
	}
	_takeBackBinding(e) {
		const t = this._bindings,
			n = e._cacheIndex,
			i = --this._nActiveBindings,
			s = t[i];
		e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s
	}
	_lendControlInterpolant() {
		const e = this._controlInterpolants,
			t = this._nActiveControlInterpolants++;
		let n = e[t];
		return n === void 0 && (n = new I0(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), n.__cacheIndex = t, e[t] = n), n
	}
	_takeBackControlInterpolant(e) {
		const t = this._controlInterpolants,
			n = e.__cacheIndex,
			i = --this._nActiveControlInterpolants,
			s = t[i];
		e.__cacheIndex = i, t[i] = e, s.__cacheIndex = n, t[n] = s
	}
	clipAction(e, t, n) {
		const i = t || this._root,
			s = i.uuid;
		let o = typeof e == "string" ? Op.findByName(i, e) : e;
		const a = o !== null ? o.uuid : e,
			l = this._actionsByClip[a];
		let c = null;
		if (n === void 0 && (o !== null ? n = o.blendMode : n = ff), l !== void 0) {
			const u = l.actionByRoot[s];
			if (u !== void 0 && u.blendMode === n) return u;
			c = l.knownActions[0], o === null && (o = c._clip)
		}
		if (o === null) return null;
		const h = new fA(this, o, t, n);
		return this._bindAction(h, c), this._addInactiveAction(h, a, s), h
	}
	existingAction(e, t) {
		const n = t || this._root,
			i = n.uuid,
			s = typeof e == "string" ? Op.findByName(n, e) : e,
			o = s ? s.uuid : e,
			a = this._actionsByClip[o];
		return a !== void 0 && a.actionByRoot[i] || null
	}
	stopAllAction() {
		const e = this._actions,
			t = this._nActiveActions;
		for (let n = t - 1; n >= 0; --n) e[n].stop();
		return this
	}
	update(e) {
		e *= this.timeScale;
		const t = this._actions,
			n = this._nActiveActions,
			i = this.time += e,
			s = Math.sign(e),
			o = this._accuIndex ^= 1;
		for (let c = 0; c !== n; ++c) t[c]._update(i, e, s, o);
		const a = this._bindings,
			l = this._nActiveBindings;
		for (let c = 0; c !== l; ++c) a[c].apply(o);
		return this
	}
	setTime(e) {
		this.time = 0;
		for (let t = 0; t < this._actions.length; t++) this._actions[t].time = 0;
		return this.update(e)
	}
	getRoot() {
		return this._root
	}
	uncacheClip(e) {
		const t = this._actions,
			n = e.uuid,
			i = this._actionsByClip,
			s = i[n];
		if (s !== void 0) {
			const o = s.knownActions;
			for (let a = 0, l = o.length; a !== l; ++a) {
				const c = o[a];
				this._deactivateAction(c);
				const h = c._cacheIndex,
					u = t[t.length - 1];
				c._cacheIndex = null, c._byClipCacheIndex = null, u._cacheIndex = h, t[h] = u, t.pop(), this._removeInactiveBindingsForAction(c)
			}
			delete i[n]
		}
	}
	uncacheRoot(e) {
		const t = e.uuid,
			n = this._actionsByClip;
		for (const o in n) {
			const a = n[o].actionByRoot,
				l = a[t];
			l !== void 0 && (this._deactivateAction(l), this._removeInactiveAction(l))
		}
		const i = this._bindingsByRootAndName,
			s = i[t];
		if (s !== void 0)
			for (const o in s) {
				const a = s[o];
				a.restoreOriginalState(), this._removeInactiveBinding(a)
			}
	}
	uncacheAction(e, t) {
		const n = this.existingAction(e, t);
		n !== null && (this._deactivateAction(n), this._removeInactiveAction(n))
	}
}
dA.prototype._controlInterpolantsResultBuffer = new Float32Array(1);
class pA extends Sa {
	constructor(e, t, n = 1) {
		super(e, t), this.meshPerAttribute = n
	}
	copy(e) {
		return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this
	}
	clone(e) {
		const t = super.clone(e);
		return t.meshPerAttribute = this.meshPerAttribute, t
	}
	toJSON(e) {
		const t = super.toJSON(e);
		return t.isInstancedInterleavedBuffer = !0, t.meshPerAttribute = this.meshPerAttribute, t
	}
}
pA.prototype.isInstancedInterleavedBuffer = !0;
const $i = new I,
	yl = new Oe,
	Eh = new Oe;
class mA extends bf {
	constructor(e) {
		const t = U0(e),
			n = new pt,
			i = [],
			s = [],
			o = new De(0, 0, 1),
			a = new De(0, 1, 0);
		for (let c = 0; c < t.length; c++) {
			const h = t[c];
			h.parent && h.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), s.push(o.r, o.g, o.b), s.push(a.r, a.g, a.b))
		}
		n.setAttribute("position", new Yt(i, 3)), n.setAttribute("color", new Yt(s, 3));
		const l = new Ta({
			vertexColors: !0,
			depthTest: !1,
			depthWrite: !1,
			toneMapped: !1,
			transparent: !0
		});
		super(n, l), this.type = "SkeletonHelper", this.isSkeletonHelper = !0, this.root = e, this.bones = t, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1
	}
	updateMatrixWorld(e) {
		const t = this.bones,
			n = this.geometry,
			i = n.getAttribute("position");
		Eh.copy(this.root.matrixWorld).invert();
		for (let s = 0, o = 0; s < t.length; s++) {
			const a = t[s];
			a.parent && a.parent.isBone && (yl.multiplyMatrices(Eh, a.matrixWorld), $i.setFromMatrixPosition(yl), i.setXYZ(o, $i.x, $i.y, $i.z), yl.multiplyMatrices(Eh, a.parent.matrixWorld), $i.setFromMatrixPosition(yl), i.setXYZ(o + 1, $i.x, $i.y, $i.z), o += 2)
		}
		n.getAttribute("position").needsUpdate = !0, super.updateMatrixWorld(e)
	}
}

function U0(r) {
	const e = [];
	r && r.isBone && e.push(r);
	for (let t = 0; t < r.children.length; t++) e.push.apply(e, U0(r.children[t]));
	return e
}
class gA extends bf {
	constructor(e = 10, t = 10, n = 4473924, i = 8947848) {
		n = new De(n), i = new De(i);
		const s = t / 2,
			o = e / t,
			a = e / 2,
			l = [],
			c = [];
		for (let f = 0, d = 0, p = -a; f <= t; f++, p += o) {
			l.push(-a, 0, p, a, 0, p), l.push(p, 0, -a, p, 0, a);
			const m = f === s ? n : i;
			m.toArray(c, d), d += 3, m.toArray(c, d), d += 3, m.toArray(c, d), d += 3, m.toArray(c, d), d += 3
		}
		const h = new pt;
		h.setAttribute("position", new Yt(l, 3)), h.setAttribute("color", new Yt(c, 3));
		const u = new Ta({
			vertexColors: !0,
			toneMapped: !1
		});
		super(h, u), this.type = "GridHelper"
	}
}
const _A = new Float32Array(1);
new Int32Array(_A.buffer);
ti.create = function(r, e) {
	return console.log("THREE.Curve.create() has been deprecated"), r.prototype = Object.create(ti.prototype), r.prototype.constructor = r, r.prototype.getPoint = e, r
};
vu.prototype.fromPoints = function(r) {
	return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(r)
};
gA.prototype.setColors = function() {
	console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
};
mA.prototype.update = function() {
	console.error("THREE.SkeletonHelper: update() no longer needs to be called.")
};
br.prototype.extractUrlBase = function(r) {
	return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), jE.extractUrlBase(r)
};
br.Handlers = {
	add: function() {
		console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")
	},
	get: function() {
		console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")
	}
};
ci.prototype.center = function(r) {
	return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(r)
};
ci.prototype.empty = function() {
	return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty()
};
ci.prototype.isIntersectionBox = function(r) {
	return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(r)
};
ci.prototype.isIntersectionSphere = function(r) {
	return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(r)
};
ci.prototype.size = function(r) {
	return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(r)
};
co.prototype.empty = function() {
	return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."), this.isEmpty()
};
gc.prototype.setFromMatrix = function(r) {
	return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."), this.setFromProjectionMatrix(r)
};
Jt.prototype.flattenToArrayOffset = function(r, e) {
	return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(r, e)
};
Jt.prototype.multiplyVector3 = function(r) {
	return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), r.applyMatrix3(this)
};
Jt.prototype.multiplyVector3Array = function() {
	console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
};
Jt.prototype.applyToBufferAttribute = function(r) {
	return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."), r.applyMatrix3(this)
};
Jt.prototype.applyToVector3Array = function() {
	console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
};
Jt.prototype.getInverse = function(r) {
	return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(r).invert()
};
Oe.prototype.extractPosition = function(r) {
	return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(r)
};
Oe.prototype.flattenToArrayOffset = function(r, e) {
	return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(r, e)
};
Oe.prototype.getPosition = function() {
	return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), new I().setFromMatrixColumn(this, 3)
};
Oe.prototype.setRotationFromQuaternion = function(r) {
	return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(r)
};
Oe.prototype.multiplyToArray = function() {
	console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
};
Oe.prototype.multiplyVector3 = function(r) {
	return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), r.applyMatrix4(this)
};
Oe.prototype.multiplyVector4 = function(r) {
	return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), r.applyMatrix4(this)
};
Oe.prototype.multiplyVector3Array = function() {
	console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
};
Oe.prototype.rotateAxis = function(r) {
	console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), r.transformDirection(this)
};
Oe.prototype.crossVector = function(r) {
	return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), r.applyMatrix4(this)
};
Oe.prototype.translate = function() {
	console.error("THREE.Matrix4: .translate() has been removed.")
};
Oe.prototype.rotateX = function() {
	console.error("THREE.Matrix4: .rotateX() has been removed.")
};
Oe.prototype.rotateY = function() {
	console.error("THREE.Matrix4: .rotateY() has been removed.")
};
Oe.prototype.rotateZ = function() {
	console.error("THREE.Matrix4: .rotateZ() has been removed.")
};
Oe.prototype.rotateByAxis = function() {
	console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
};
Oe.prototype.applyToBufferAttribute = function(r) {
	return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."), r.applyMatrix4(this)
};
Oe.prototype.applyToVector3Array = function() {
	console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
};
Oe.prototype.makeFrustum = function(r, e, t, n, i, s) {
	return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(r, e, n, t, i, s)
};
Oe.prototype.getInverse = function(r) {
	return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(r).invert()
};
Ii.prototype.isIntersectionLine = function(r) {
	return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(r)
};
Ln.prototype.multiplyVector3 = function(r) {
	return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), r.applyQuaternion(this)
};
Ln.prototype.inverse = function() {
	return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."), this.invert()
};
ho.prototype.isIntersectionBox = function(r) {
	return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(r)
};
ho.prototype.isIntersectionPlane = function(r) {
	return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(r)
};
ho.prototype.isIntersectionSphere = function(r) {
	return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(r)
};
Nt.prototype.area = function() {
	return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea()
};
Nt.prototype.barycoordFromPoint = function(r, e) {
	return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(r, e)
};
Nt.prototype.midpoint = function(r) {
	return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(r)
};
Nt.prototypenormal = function(r) {
	return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(r)
};
Nt.prototype.plane = function(r) {
	return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(r)
};
Nt.barycoordFromPoint = function(r, e, t, n, i) {
	return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), Nt.getBarycoord(r, e, t, n, i)
};
Nt.normal = function(r, e, t, n) {
	return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), Nt.getNormal(r, e, t, n)
};
Ea.prototype.extractAllPoints = function(r) {
	return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(r)
};
Ea.prototype.extrude = function(r) {
	return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new fo(this, r)
};
Ea.prototype.makeGeometry = function(r) {
	return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new Af(this, r)
};
fe.prototype.fromAttribute = function(r, e, t) {
	return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(r, e, t)
};
fe.prototype.distanceToManhattan = function(r) {
	return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(r)
};
fe.prototype.lengthManhattan = function() {
	return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
};
I.prototype.setEulerFromRotationMatrix = function() {
	console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
};
I.prototype.setEulerFromQuaternion = function() {
	console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
};
I.prototype.getPositionFromMatrix = function(r) {
	return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(r)
};
I.prototype.getScaleFromMatrix = function(r) {
	return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(r)
};
I.prototype.getColumnFromMatrix = function(r, e) {
	return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, r)
};
I.prototype.applyProjection = function(r) {
	return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(r)
};
I.prototype.fromAttribute = function(r, e, t) {
	return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(r, e, t)
};
I.prototype.distanceToManhattan = function(r) {
	return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(r)
};
I.prototype.lengthManhattan = function() {
	return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
};
rt.prototype.fromAttribute = function(r, e, t) {
	return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(r, e, t)
};
rt.prototype.lengthManhattan = function() {
	return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
};
nt.prototype.getChildByName = function(r) {
	return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(r)
};
nt.prototype.renderDepth = function() {
	console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
};
nt.prototype.translate = function(r, e) {
	return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, r)
};
nt.prototype.getWorldRotation = function() {
	console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")
};
nt.prototype.applyMatrix = function(r) {
	return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(r)
};
Object.defineProperties(nt.prototype, {
	eulerOrder: {
		get: function() {
			return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order
		},
		set: function(r) {
			console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = r
		}
	},
	useQuaternion: {
		get: function() {
			console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
		},
		set: function() {
			console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
		}
	}
});
vn.prototype.setDrawMode = function() {
	console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
};
Object.defineProperties(vn.prototype, {
	drawMode: {
		get: function() {
			return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), $w
		},
		set: function() {
			console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
		}
	}
});
w0.prototype.initBones = function() {
	console.error("THREE.SkinnedMesh: initBones() has been removed.")
};
Sn.prototype.setLens = function(r, e) {
	console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), e !== void 0 && (this.filmGauge = e), this.setFocalLength(r)
};
Object.defineProperties(bi.prototype, {
	onlyShadow: {
		set: function() {
			console.warn("THREE.Light: .onlyShadow has been removed.")
		}
	},
	shadowCameraFov: {
		set: function(r) {
			console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = r
		}
	},
	shadowCameraLeft: {
		set: function(r) {
			console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = r
		}
	},
	shadowCameraRight: {
		set: function(r) {
			console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = r
		}
	},
	shadowCameraTop: {
		set: function(r) {
			console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = r
		}
	},
	shadowCameraBottom: {
		set: function(r) {
			console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = r
		}
	},
	shadowCameraNear: {
		set: function(r) {
			console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = r
		}
	},
	shadowCameraFar: {
		set: function(r) {
			console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = r
		}
	},
	shadowCameraVisible: {
		set: function() {
			console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
		}
	},
	shadowBias: {
		set: function(r) {
			console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = r
		}
	},
	shadowDarkness: {
		set: function() {
			console.warn("THREE.Light: .shadowDarkness has been removed.")
		}
	},
	shadowMapWidth: {
		set: function(r) {
			console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = r
		}
	},
	shadowMapHeight: {
		set: function(r) {
			console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = r
		}
	}
});
Object.defineProperties(Bt.prototype, {
	length: {
		get: function() {
			return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length
		}
	},
	dynamic: {
		get: function() {
			return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.usage === tc
		},
		set: function() {
			console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(tc)
		}
	}
});
Bt.prototype.setDynamic = function(r) {
	return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(r === !0 ? tc : ma), this
};
Bt.prototype.copyIndicesArray = function() {
	console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")
}, Bt.prototype.setArray = function() {
	console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
};
pt.prototype.addIndex = function(r) {
	console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(r)
};
pt.prototype.addAttribute = function(r, e) {
	return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), !(e && e.isBufferAttribute) && !(e && e.isInterleavedBufferAttribute) ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(r, new Bt(arguments[1], arguments[2]))) : r === "index" ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e), this) : this.setAttribute(r, e)
};
pt.prototype.addDrawCall = function(r, e, t) {
	t !== void 0 && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(r, e)
};
pt.prototype.clearDrawCalls = function() {
	console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
};
pt.prototype.computeOffsets = function() {
	console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
};
pt.prototype.removeAttribute = function(r) {
	return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(r)
};
pt.prototype.applyMatrix = function(r) {
	return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(r)
};
Object.defineProperties(pt.prototype, {
	drawcalls: {
		get: function() {
			return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
		}
	},
	offsets: {
		get: function() {
			return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
		}
	}
});
Sa.prototype.setDynamic = function(r) {
	return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(r === !0 ? tc : ma), this
};
Sa.prototype.setArray = function() {
	console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
};
fo.prototype.getArrays = function() {
	console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")
};
fo.prototype.addShapeList = function() {
	console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")
};
fo.prototype.addShape = function() {
	console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")
};
yf.prototype.dispose = function() {
	console.error("THREE.Scene: .dispose() has been removed.")
};
Object.defineProperties(on.prototype, {
	wrapAround: {
		get: function() {
			console.warn("THREE.Material: .wrapAround has been removed.")
		},
		set: function() {
			console.warn("THREE.Material: .wrapAround has been removed.")
		}
	},
	overdraw: {
		get: function() {
			console.warn("THREE.Material: .overdraw has been removed.")
		},
		set: function() {
			console.warn("THREE.Material: .overdraw has been removed.")
		}
	},
	wrapRGB: {
		get: function() {
			return console.warn("THREE.Material: .wrapRGB has been removed."), new De
		}
	},
	shading: {
		get: function() {
			console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.")
		},
		set: function(r) {
			console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = r === q_
		}
	},
	stencilMask: {
		get: function() {
			return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask
		},
		set: function(r) {
			console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = r
		}
	},
	vertexTangents: {
		get: function() {
			console.warn("THREE." + this.type + ": .vertexTangents has been removed.")
		},
		set: function() {
			console.warn("THREE." + this.type + ": .vertexTangents has been removed.")
		}
	}
});
Object.defineProperties(vr.prototype, {
	derivatives: {
		get: function() {
			return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives
		},
		set: function(r) {
			console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = r
		}
	}
});
it.prototype.clearTarget = function(r, e, t, n) {
	console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(r), this.clear(e, t, n)
};
it.prototype.animate = function(r) {
	console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(r)
};
it.prototype.getCurrentRenderTarget = function() {
	return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget()
};
it.prototype.getMaxAnisotropy = function() {
	return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy()
};
it.prototype.getPrecision = function() {
	return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision
};
it.prototype.resetGLState = function() {
	return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset()
};
it.prototype.supportsFloatTextures = function() {
	return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float")
};
it.prototype.supportsHalfFloatTextures = function() {
	return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float")
};
it.prototype.supportsStandardDerivatives = function() {
	return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives")
};
it.prototype.supportsCompressedTextureS3TC = function() {
	return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc")
};
it.prototype.supportsCompressedTexturePVRTC = function() {
	return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc")
};
it.prototype.supportsBlendMinMax = function() {
	return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax")
};
it.prototype.supportsVertexTextures = function() {
	return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures
};
it.prototype.supportsInstancedArrays = function() {
	return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays")
};
it.prototype.enableScissorTest = function(r) {
	console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(r)
};
it.prototype.initMaterial = function() {
	console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
};
it.prototype.addPrePlugin = function() {
	console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
};
it.prototype.addPostPlugin = function() {
	console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
};
it.prototype.updateShadowMap = function() {
	console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
};
it.prototype.setFaceCulling = function() {
	console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")
};
it.prototype.allocTextureUnit = function() {
	console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")
};
it.prototype.setTexture = function() {
	console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")
};
it.prototype.setTexture2D = function() {
	console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")
};
it.prototype.setTextureCube = function() {
	console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")
};
it.prototype.getActiveMipMapLevel = function() {
	return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel()
};
Object.defineProperties(it.prototype, {
	shadowMapEnabled: {
		get: function() {
			return this.shadowMap.enabled
		},
		set: function(r) {
			console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = r
		}
	},
	shadowMapType: {
		get: function() {
			return this.shadowMap.type
		},
		set: function(r) {
			console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = r
		}
	},
	shadowMapCullFace: {
		get: function() {
			console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
		},
		set: function() {
			console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
		}
	},
	context: {
		get: function() {
			return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext()
		}
	},
	vr: {
		get: function() {
			return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"), this.xr
		}
	},
	gammaInput: {
		get: function() {
			return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."), !1
		},
		set: function() {
			console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")
		}
	},
	gammaOutput: {
		get: function() {
			return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), !1
		},
		set: function(r) {
			console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), this.outputEncoding = r === !0 ? oo : li
		}
	},
	toneMappingWhitePoint: {
		get: function() {
			return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."), 1
		},
		set: function() {
			console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")
		}
	},
	gammaFactor: {
		get: function() {
			return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."), 2
		},
		set: function() {
			console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")
		}
	}
});
Object.defineProperties(_0.prototype, {
	cullFace: {
		get: function() {
			console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
		},
		set: function() {
			console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
		}
	},
	renderReverseSided: {
		get: function() {
			console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
		},
		set: function() {
			console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
		}
	},
	renderSingleSided: {
		get: function() {
			console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
		},
		set: function() {
			console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
		}
	}
});
Object.defineProperties(Kn.prototype, {
	wrapS: {
		get: function() {
			return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS
		},
		set: function(r) {
			console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = r
		}
	},
	wrapT: {
		get: function() {
			return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT
		},
		set: function(r) {
			console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = r
		}
	},
	magFilter: {
		get: function() {
			return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter
		},
		set: function(r) {
			console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = r
		}
	},
	minFilter: {
		get: function() {
			return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter
		},
		set: function(r) {
			console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = r
		}
	},
	anisotropy: {
		get: function() {
			return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy
		},
		set: function(r) {
			console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = r
		}
	},
	offset: {
		get: function() {
			return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset
		},
		set: function(r) {
			console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = r
		}
	},
	repeat: {
		get: function() {
			return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat
		},
		set: function(r) {
			console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = r
		}
	},
	format: {
		get: function() {
			return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format
		},
		set: function(r) {
			console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = r
		}
	},
	type: {
		get: function() {
			return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type
		},
		set: function(r) {
			console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = r
		}
	},
	generateMipmaps: {
		get: function() {
			return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps
		},
		set: function(r) {
			console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = r
		}
	}
});
tA.prototype.load = function(r) {
	console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
	const e = this;
	return new QE().load(r, function(n) {
		e.setBuffer(n)
	}), this
};
gf.prototype.updateCubeMap = function(r, e) {
	return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(r, e)
};
gf.prototype.clear = function(r, e, t, n) {
	return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."), this.renderTarget.clear(r, e, t, n)
};
lo.crossOrigin = void 0;
lo.loadTexture = function(r, e, t, n) {
	console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
	const i = new VE;
	i.setCrossOrigin(this.crossOrigin);
	const s = i.load(r, t, void 0, n);
	return e && (s.mapping = e), s
};
lo.loadTextureCube = function(r, e, t, n) {
	console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
	const i = new UE;
	i.setCrossOrigin(this.crossOrigin);
	const s = i.load(r, t, void 0, n);
	return e && (s.mapping = e), s
};
lo.loadCompressedTexture = function() {
	console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
};
lo.loadCompressedTextureCube = function() {
	console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
};
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
	detail: {
		revision: hf
	}
}));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = hf);
const vA = `
uniform float time;
varying vec2 vUv;
varying vec3 vPosition;
uniform vec2 pixels;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,
	xA = `
uniform float time;
uniform float progress;
uniform sampler2D uDataTexture;
uniform sampler2D uTexture;

uniform vec4 resolution;
varying vec2 vUv;
varying vec3 vPosition;
void main()	{
  vec2 coords = vUv;

  float texture_ratio = resolution.z / resolution.w;
  float canvas_ratio = resolution.x / resolution.y;

  if(texture_ratio > canvas_ratio) {
    float diff = canvas_ratio / texture_ratio;
    coords.x *= diff;
    coords.x += (1. - diff) / 2.;
  }
  else {
    float diff = texture_ratio / canvas_ratio;
    coords.y *= diff;
    coords.y += (1. - diff) / 2.;
  }

  vec4 offset = texture2D(uDataTexture,vUv);

  gl_FragColor = texture2D(uTexture,coords - 0.02*offset.rg);
}
`;

function yA(r, e, t) {
	return Math.max(e, Math.min(r, t))
}
class wA {
	constructor(e) {
		ne(this, "scene");
		ne(this, "container");
		ne(this, "img");
		ne(this, "width");
		ne(this, "height");
		ne(this, "time");
		ne(this, "isPlaying");
		ne(this, "mouse");
		ne(this, "renderer");
		ne(this, "camera");
		ne(this, "settings");
		ne(this, "imageAspect");
		ne(this, "size");
		ne(this, "material");
		ne(this, "texture");
		ne(this, "geometry");
		ne(this, "plane");
		this.scene = new yf, this.container = e.dom ?? document.body;
		const t = this.container.getBoundingClientRect();
		this.img = this.container.querySelector("img"), this.width = t.width, this.height = t.height, this.renderer = new it, this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.setSize(this.width, this.height), this.renderer.setClearColor(16777215, 1), this.imageAspect = 1, this.size = 0, this.container.appendChild(this.renderer.domElement);
		var n = 1;
		this.camera = new vc(n / -2, n / 2, n / 2, n / -2, -1e3, 1e3), this.camera.position.set(0, 0, 2), this.time = 0, this.mouse = {
			x: 0,
			y: 0,
			prevX: 0,
			prevY: 0,
			vX: 0,
			vY: 0
		}, this.isPlaying = !0, this.settings = {
			grid: this.getValue("grid") || 34,
			mouse: this.getValue("mouse") || .25,
			strength: this.getValue("strength") || 1,
			relaxation: this.getValue("relaxation") || .9
		}, this.addObjects(), this.resize(), this.render(), this.setupResize(), this.mouseEvents()
	}
	getValue(e) {
		return parseFloat(this.container.getAttribute("data-" + e) ?? "")
	}
	mouseMoveHandler(e) {
		e.type === "touchmove" && e.preventDefault();
		const t = e.type === "touchmove" ? e.touches[0].clientX : e.clientX,
			n = e.type === "touchmove" ? e.touches[0].clientY : e.clientY,
			i = this.container.getBoundingClientRect();
		this.mouse.x = (t - i.left) / this.width, this.mouse.y = (n - i.top) / this.height, this.mouse.vX = this.mouse.x - this.mouse.prevX, this.mouse.vY = this.mouse.y - this.mouse.prevY, this.mouse.prevX = this.mouse.x, this.mouse.prevY = this.mouse.y
	}
	mouseEvents() {
		this.container.addEventListener("mousemove", this.mouseMoveHandler.bind(this)), this.container.addEventListener("touchmove", this.mouseMoveHandler.bind(this))
	}
	setupResize() {
		window.addEventListener("resize", this.resize.bind(this, !1))
	}
	resize(e = !1) {
		var n, i, s, o;
		const t = this.container.getBoundingClientRect();
		this.width = t.width, this.height = t.height, this.renderer.setSize(this.width, this.height), this.imageAspect = (((n = this.img) == null ? void 0 : n.naturalWidth) ?? 1) / (((i = this.img) == null ? void 0 : i.naturalHeight) ?? 1), this.material && (this.material.uniforms.resolution.value.x = this.width, this.material.uniforms.resolution.value.y = this.height, this.material.uniforms.resolution.value.z = ((s = this.img) == null ? void 0 : s.naturalWidth) ?? 1, this.material.uniforms.resolution.value.w = ((o = this.img) == null ? void 0 : o.naturalHeight) ?? 1), this.camera.updateProjectionMatrix(), (so() && e || !so()) && this.regenerateGrid()
	}
	regenerateGrid() {
		var o;
		this.size = this.settings.grid;
		const e = this.container.getBoundingClientRect(),
			t = Math.round(e.width / this.size),
			n = Math.round(e.height / this.size),
			i = t * n,
			s = new Float32Array(3 * i);
		for (let a = 0; a < i; a++) {
			let l = Math.random() * 255 - 125,
				c = Math.random() * 255 - 125;
			const h = a * 3;
			s[h] = l, s[h + 1] = c, s[h + 2] = l
		}
		this.texture = new b0(s, t, n, hr, zi), this.texture.magFilter = this.texture.minFilter = Pt, this.material && (this.material.uniforms.uDataTexture.value = this.texture, this.material.uniforms.uDataTexture.value.needsUpdate = !0), (o = this.container) == null || o.setAttribute("data-image-loaded", "")
	}
	addObjects() {
		if (this.regenerateGrid(), this.img) {
			let e = new sn(this.img);
			e.needsUpdate = !0, this.material = new vr({
				side: Kr,
				uniforms: {
					time: {
						value: 0
					},
					resolution: {
						value: new rt
					},
					uTexture: {
						value: e
					},
					uDataTexture: {
						value: this.texture
					}
				},
				vertexShader: vA,
				fragmentShader: xA
			}), this.geometry = new _c(1, 1, 1, 1), this.plane = new vn(this.geometry, this.material), this.scene.add(this.plane)
		}
	}
	updateDataTexture() {
		const e = this.container.getBoundingClientRect(),
			t = Math.round(e.width / this.size),
			n = Math.round(e.height / this.size);
		if (this.texture) {
			let i = this.texture.image.data;
			for (let c = 0; c < i.length; c += 3) i[c] *= this.settings.relaxation, i[c + 1] *= this.settings.relaxation;
			let s = t * this.mouse.x,
				o = n * (1 - this.mouse.y),
				a = t * this.settings.mouse,
				l = this.height / this.width;
			for (let c = 0; c < t; c++)
				for (let h = 0; h < n; h++) {
					let u = (s - c) ** 2 / l + (o - h) ** 2,
						f = a ** 2;
					if (u < f) {
						let d = 3 * (c + t * h),
							p = a / Math.sqrt(u);
						p = yA(p, 0, 10), i[d] += this.settings.strength * 100 * this.mouse.vX * p, i[d + 1] -= this.settings.strength * 100 * this.mouse.vY * p
					}
				}
			this.mouse.vX *= .9, this.mouse.vY *= .9, this.texture.needsUpdate = !0
		}
	}
	render() {
		this.isPlaying && (this.time += .05, this.updateDataTexture(), this.material && (this.material.uniforms.time.value = this.time), requestAnimationFrame(this.render.bind(this)), this.renderer.render(this.scene, this.camera))
	}
	dispose() {
		window.removeEventListener("resize", this.resize.bind(this, !1)), this.container.removeEventListener("mousemove", this.mouseMoveHandler.bind(this)), this.container.removeEventListener("touchmove", this.mouseMoveHandler.bind(this)), this.container.removeChild(this.renderer.domElement), this.renderer.dispose()
	}
}
var Vo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Df(r) {
	return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r
}
var V0 = {
	exports: {}
};
(function(r, e) {
	(function(t, n) {
		r.exports = n()
	})(Vo, function() {
		var t = document,
			n = t.createTextNode.bind(t);

		function i(U, W, te) {
			U.style.setProperty(W, te)
		}

		function s(U, W) {
			return U.appendChild(W)
		}

		function o(U, W, te, q) {
			var oe = t.createElement("span");
			return W && (oe.className = W), te && (!q && oe.setAttribute("data-" + W, te), oe.textContent = te), U && s(U, oe) || oe
		}

		function a(U, W) {
			return U.getAttribute("data-" + W)
		}

		function l(U, W) {
			return !U || U.length == 0 ? [] : U.nodeName ? [U] : [].slice.call(U[0].nodeName ? U : (W || t).querySelectorAll(U))
		}

		function c(U) {
			for (var W = []; U--;) W[U] = [];
			return W
		}

		function h(U, W) {
			U && U.some(W)
		}

		function u(U) {
			return function(W) {
				return U[W]
			}
		}

		function f(U, W, te) {
			var q = "--" + W,
				oe = q + "-index";
			h(te, function(ce, ie) {
				Array.isArray(ce) ? h(ce, function(me) {
					i(me, oe, ie)
				}) : i(ce, oe, ie)
			}), i(U, q + "-total", te.length)
		}
		var d = {};

		function p(U, W, te) {
			var q = te.indexOf(U);
			if (q == -1) te.unshift(U), h(d[U].depends, function(ce) {
				p(ce, U, te)
			});
			else {
				var oe = te.indexOf(W);
				te.splice(q, 1), te.splice(oe, 0, U)
			}
			return te
		}

		function m(U, W, te, q) {
			return {
				by: U,
				depends: W,
				key: te,
				split: q
			}
		}

		function v(U) {
			return p(U, 0, []).map(u(d))
		}

		function g(U) {
			d[U.by] = U
		}

		function _(U, W, te, q, oe) {
			U.normalize();
			var ce = [],
				ie = document.createDocumentFragment();
			q && ce.push(U.previousSibling);
			var me = [];
			return l(U.childNodes).some(function(we) {
				if (we.tagName && !we.hasChildNodes()) {
					me.push(we);
					return
				}
				if (we.childNodes && we.childNodes.length) {
					me.push(we), ce.push.apply(ce, _(we, W, te, q, oe));
					return
				}
				var j = we.wholeText || "",
					Z = j.trim();
				Z.length && (j[0] === " " && me.push(n(" ")), h(Z.split(te), function(ee, ge) {
					ge && oe && me.push(o(ie, "whitespace", " ", oe));
					var ue = o(ie, W, ee);
					ce.push(ue), me.push(ue)
				}), j[j.length - 1] === " " && me.push(n(" ")))
			}), h(me, function(we) {
				s(ie, we)
			}), U.innerHTML = "", s(U, ie), ce
		}
		var w = 0;

		function x(U, W) {
			for (var te in W) U[te] = W[te];
			return U
		}
		var y = "words",
			b = m(y, w, "word", function(U) {
				return _(U, "word", /\s+/, 0, 1)
			}),
			S = "chars",
			D = m(S, [y], "char", function(U, W, te) {
				var q = [];
				return h(te[y], function(oe, ce) {
					q.push.apply(q, _(oe, "char", "", W.whitespace && ce))
				}), q
			});

		function O(U) {
			U = U || {};
			var W = U.key;
			return l(U.target || "[data-splitting]").map(function(te) {
				var q = te["ðŸŒ"];
				if (!U.force && q) return q;
				q = te["ðŸŒ"] = {
					el: te
				};
				var oe = v(U.by || a(te, "splitting") || S),
					ce = x({}, U);
				return h(oe, function(ie) {
					if (ie.split) {
						var me = ie.by,
							we = (W ? "-" + W : "") + ie.key,
							j = ie.split(te, ce, q);
						we && f(te, we, j), q[me] = j, te.classList.add(me)
					}
				}), te.classList.add("splitting"), q
			})
		}

		function z(U) {
			U = U || {};
			var W = U.target = o();
			return W.innerHTML = U.content, O(U), W.outerHTML
		}
		O.html = z, O.add = g;

		function P(U, W, te) {
			var q = l(W.matching || U.children, U),
				oe = {};
			return h(q, function(ce) {
				var ie = Math.round(ce[te]);
				(oe[ie] || (oe[ie] = [])).push(ce)
			}), Object.keys(oe).map(Number).sort(M).map(u(oe))
		}

		function M(U, W) {
			return U - W
		}
		var E = m("lines", [y], "line", function(U, W, te) {
				return P(U, {
					matching: te[y]
				}, "offsetTop")
			}),
			R = m("items", w, "item", function(U, W) {
				return l(W.matching || U.children, U)
			}),
			V = m("rows", w, "row", function(U, W) {
				return P(U, W, "offsetTop")
			}),
			N = m("cols", w, "col", function(U, W) {
				return P(U, W, "offsetLeft")
			}),
			k = m("grid", ["rows", "cols"]),
			J = "layout",
			se = m(J, w, w, function(U, W) {
				var te = W.rows = +(W.rows || a(U, "rows") || 1),
					q = W.columns = +(W.columns || a(U, "columns") || 1);
				if (W.image = W.image || a(U, "image") || U.currentSrc || U.src, W.image) {
					var oe = l("img", U)[0];
					W.image = oe && (oe.currentSrc || oe.src)
				}
				W.image && i(U, "background-image", "url(" + W.image + ")");
				for (var ce = te * q, ie = [], me = o(w, "cell-grid"); ce--;) {
					var we = o(me, "cell");
					o(we, "cell-inner"), ie.push(we)
				}
				return s(U, me), ie
			}),
			A = m("cellRows", [J], "row", function(U, W, te) {
				var q = W.rows,
					oe = c(q);
				return h(te[J], function(ce, ie, me) {
					oe[Math.floor(ie / (me.length / q))].push(ce)
				}), oe
			}),
			Y = m("cellColumns", [J], "col", function(U, W, te) {
				var q = W.columns,
					oe = c(q);
				return h(te[J], function(ce, ie) {
					oe[ie % q].push(ce)
				}), oe
			}),
			de = m("cells", ["cellRows", "cellColumns"], "cell", function(U, W, te) {
				return te[J]
			});
		return g(b), g(D), g(E), g(R), g(V), g(N), g(k), g(se), g(A), g(Y), g(de), O
	})
})(V0);
var bA = V0.exports;
const Ls = Df(bA);
class MA {
	constructor(e, t) {
		ne(this, "DOM", {
			el: null,
			title: null
		});
		ne(this, "thumbGrid");
		ne(this, "mouseEnterTimeout", null);
		ne(this, "mouseLeaveTimeout", null);
		ne(this, "enterTL", null);
		ne(this, "leaveTL", null);
		this.DOM.el = e, this.thumbGrid = t, this.DOM.title = this.DOM.el.querySelector(".list__el__title"), tt.set(this.DOM.title, {
			willChange: "transform, opacity"
		})
	}
}
class SA {
	constructor(e) {
		ne(this, "DOM", {
			el: null,
			items: null
		});
		this.DOM.el = e, this.DOM.items = this.DOM.el.querySelectorAll(".thumbgrid__item"), tt.set(this.DOM.items, {
			willChange: "transform, opacity"
		})
	}
}

function Vp(r) {
	let e = r[0],
		t = r[1],
		n = r[2];
	return Math.sqrt(e * e + t * t + n * n)
}

function wu(r, e) {
	return r[0] = e[0], r[1] = e[1], r[2] = e[2], r
}

function TA(r, e, t, n) {
	return r[0] = e, r[1] = t, r[2] = n, r
}

function Hp(r, e, t) {
	return r[0] = e[0] + t[0], r[1] = e[1] + t[1], r[2] = e[2] + t[2], r
}

function Gp(r, e, t) {
	return r[0] = e[0] - t[0], r[1] = e[1] - t[1], r[2] = e[2] - t[2], r
}

function EA(r, e, t) {
	return r[0] = e[0] * t[0], r[1] = e[1] * t[1], r[2] = e[2] * t[2], r
}

function AA(r, e, t) {
	return r[0] = e[0] / t[0], r[1] = e[1] / t[1], r[2] = e[2] / t[2], r
}

function Ah(r, e, t) {
	return r[0] = e[0] * t, r[1] = e[1] * t, r[2] = e[2] * t, r
}

function CA(r, e) {
	let t = e[0] - r[0],
		n = e[1] - r[1],
		i = e[2] - r[2];
	return Math.sqrt(t * t + n * n + i * i)
}

function LA(r, e) {
	let t = e[0] - r[0],
		n = e[1] - r[1],
		i = e[2] - r[2];
	return t * t + n * n + i * i
}

function Wp(r) {
	let e = r[0],
		t = r[1],
		n = r[2];
	return e * e + t * t + n * n
}

function RA(r, e) {
	return r[0] = -e[0], r[1] = -e[1], r[2] = -e[2], r
}

function PA(r, e) {
	return r[0] = 1 / e[0], r[1] = 1 / e[1], r[2] = 1 / e[2], r
}

function bu(r, e) {
	let t = e[0],
		n = e[1],
		i = e[2],
		s = t * t + n * n + i * i;
	return s > 0 && (s = 1 / Math.sqrt(s)), r[0] = e[0] * s, r[1] = e[1] * s, r[2] = e[2] * s, r
}

function H0(r, e) {
	return r[0] * e[0] + r[1] * e[1] + r[2] * e[2]
}

function qp(r, e, t) {
	let n = e[0],
		i = e[1],
		s = e[2],
		o = t[0],
		a = t[1],
		l = t[2];
	return r[0] = i * l - s * a, r[1] = s * o - n * l, r[2] = n * a - i * o, r
}

function DA(r, e, t, n) {
	let i = e[0],
		s = e[1],
		o = e[2];
	return r[0] = i + n * (t[0] - i), r[1] = s + n * (t[1] - s), r[2] = o + n * (t[2] - o), r
}

function IA(r, e, t) {
	let n = e[0],
		i = e[1],
		s = e[2],
		o = t[3] * n + t[7] * i + t[11] * s + t[15];
	return o = o || 1, r[0] = (t[0] * n + t[4] * i + t[8] * s + t[12]) / o, r[1] = (t[1] * n + t[5] * i + t[9] * s + t[13]) / o, r[2] = (t[2] * n + t[6] * i + t[10] * s + t[14]) / o, r
}

function FA(r, e, t) {
	let n = e[0],
		i = e[1],
		s = e[2],
		o = t[3] * n + t[7] * i + t[11] * s + t[15];
	return o = o || 1, r[0] = (t[0] * n + t[4] * i + t[8] * s) / o, r[1] = (t[1] * n + t[5] * i + t[9] * s) / o, r[2] = (t[2] * n + t[6] * i + t[10] * s) / o, r
}

function zA(r, e, t) {
	let n = e[0],
		i = e[1],
		s = e[2];
	return r[0] = n * t[0] + i * t[3] + s * t[6], r[1] = n * t[1] + i * t[4] + s * t[7], r[2] = n * t[2] + i * t[5] + s * t[8], r
}

function OA(r, e, t) {
	let n = e[0],
		i = e[1],
		s = e[2],
		o = t[0],
		a = t[1],
		l = t[2],
		c = t[3],
		h = a * s - l * i,
		u = l * n - o * s,
		f = o * i - a * n,
		d = a * f - l * u,
		p = l * h - o * f,
		m = o * u - a * h,
		v = c * 2;
	return h *= v, u *= v, f *= v, d *= 2, p *= 2, m *= 2, r[0] = n + h + d, r[1] = i + u + p, r[2] = s + f + m, r
}
const NA = function() {
	const r = [0, 0, 0],
		e = [0, 0, 0];
	return function(t, n) {
		wu(r, t), wu(e, n), bu(r, r), bu(e, e);
		let i = H0(r, e);
		return i > 1 ? 0 : i < -1 ? Math.PI : Math.acos(i)
	}
}();

function BA(r, e) {
	return r[0] === e[0] && r[1] === e[1] && r[2] === e[2]
}
class Rt extends Array {
	constructor(e = 0, t = e, n = e) {
		return super(e, t, n), this
	}
	get x() {
		return this[0]
	}
	get y() {
		return this[1]
	}
	get z() {
		return this[2]
	}
	set x(e) {
		this[0] = e
	}
	set y(e) {
		this[1] = e
	}
	set z(e) {
		this[2] = e
	}
	set(e, t = e, n = e) {
		return e.length ? this.copy(e) : (TA(this, e, t, n), this)
	}
	copy(e) {
		return wu(this, e), this
	}
	add(e, t) {
		return t ? Hp(this, e, t) : Hp(this, this, e), this
	}
	sub(e, t) {
		return t ? Gp(this, e, t) : Gp(this, this, e), this
	}
	multiply(e) {
		return e.length ? EA(this, this, e) : Ah(this, this, e), this
	}
	divide(e) {
		return e.length ? AA(this, this, e) : Ah(this, this, 1 / e), this
	}
	inverse(e = this) {
		return PA(this, e), this
	}
	len() {
		return Vp(this)
	}
	distance(e) {
		return e ? CA(this, e) : Vp(this)
	}
	squaredLen() {
		return Wp(this)
	}
	squaredDistance(e) {
		return e ? LA(this, e) : Wp(this)
	}
	negate(e = this) {
		return RA(this, e), this
	}
	cross(e, t) {
		return t ? qp(this, e, t) : qp(this, this, e), this
	}
	scale(e) {
		return Ah(this, this, e), this
	}
	normalize() {
		return bu(this, this), this
	}
	dot(e) {
		return H0(this, e)
	}
	equals(e) {
		return BA(this, e)
	}
	applyMatrix3(e) {
		return zA(this, this, e), this
	}
	applyMatrix4(e) {
		return IA(this, this, e), this
	}
	scaleRotateMatrix4(e) {
		return FA(this, this, e), this
	}
	applyQuaternion(e) {
		return OA(this, this, e), this
	}
	angle(e) {
		return NA(this, e)
	}
	lerp(e, t) {
		return DA(this, this, e, t), this
	}
	clone() {
		return new Rt(this[0], this[1], this[2])
	}
	fromArray(e, t = 0) {
		return this[0] = e[t], this[1] = e[t + 1], this[2] = e[t + 2], this
	}
	toArray(e = [], t = 0) {
		return e[t] = this[0], e[t + 1] = this[1], e[t + 2] = this[2], e
	}
	transformDirection(e) {
		const t = this[0],
			n = this[1],
			i = this[2];
		return this[0] = e[0] * t + e[4] * n + e[8] * i, this[1] = e[1] * t + e[5] * n + e[9] * i, this[2] = e[2] * t + e[6] * n + e[10] * i, this.normalize()
	}
}
const Xp = new Rt;
let kA = 1,
	UA = 1,
	Yp = !1;
class VA {
	constructor(e, t = {}) {
		e.canvas || console.error("gl not passed as first argument to Geometry"), this.gl = e, this.attributes = t, this.id = kA++, this.VAOs = {}, this.drawRange = {
			start: 0,
			count: 0
		}, this.instancedCount = 0, this.gl.renderer.bindVertexArray(null), this.gl.renderer.currentGeometry = null, this.glState = this.gl.renderer.state;
		for (let n in t) this.addAttribute(n, t[n])
	}
	addAttribute(e, t) {
		if (this.attributes[e] = t, t.id = UA++, t.size = t.size || 1, t.type = t.type || (t.data.constructor === Float32Array ? this.gl.FLOAT : t.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT), t.target = e === "index" ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER, t.normalized = t.normalized || !1, t.stride = t.stride || 0, t.offset = t.offset || 0, t.count = t.count || (t.stride ? t.data.byteLength / t.stride : t.data.length / t.size), t.divisor = t.instanced || 0, t.needsUpdate = !1, t.usage = t.usage || this.gl.STATIC_DRAW, t.buffer || this.updateAttribute(t), t.divisor) {
			if (this.isInstanced = !0, this.instancedCount && this.instancedCount !== t.count * t.divisor) return console.warn("geometry has multiple instanced buffers of different length"), this.instancedCount = Math.min(this.instancedCount, t.count * t.divisor);
			this.instancedCount = t.count * t.divisor
		} else e === "index" ? this.drawRange.count = t.count : this.attributes.index || (this.drawRange.count = Math.max(this.drawRange.count, t.count))
	}
	updateAttribute(e) {
		const t = !e.buffer;
		t && (e.buffer = this.gl.createBuffer()), this.glState.boundBuffer !== e.buffer && (this.gl.bindBuffer(e.target, e.buffer), this.glState.boundBuffer = e.buffer), t ? this.gl.bufferData(e.target, e.data, e.usage) : this.gl.bufferSubData(e.target, 0, e.data), e.needsUpdate = !1
	}
	setIndex(e) {
		this.addAttribute("index", e)
	}
	setDrawRange(e, t) {
		this.drawRange.start = e, this.drawRange.count = t
	}
	setInstancedCount(e) {
		this.instancedCount = e
	}
	createVAO(e) {
		this.VAOs[e.attributeOrder] = this.gl.renderer.createVertexArray(), this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]), this.bindAttributes(e)
	}
	bindAttributes(e) {
		e.attributeLocations.forEach((t, {
			name: n,
			type: i
		}) => {
			if (!this.attributes[n]) {
				console.warn(`active attribute ${n} not being supplied`);
				return
			}
			const s = this.attributes[n];
			this.gl.bindBuffer(s.target, s.buffer), this.glState.boundBuffer = s.buffer;
			let o = 1;
			i === 35674 && (o = 2), i === 35675 && (o = 3), i === 35676 && (o = 4);
			const a = s.size / o,
				l = o === 1 ? 0 : o * o * 4,
				c = o === 1 ? 0 : o * 4;
			for (let h = 0; h < o; h++) this.gl.vertexAttribPointer(t + h, a, s.type, s.normalized, s.stride + l, s.offset + h * c), this.gl.enableVertexAttribArray(t + h), this.gl.renderer.vertexAttribDivisor(t + h, s.divisor)
		}), this.attributes.index && this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer)
	}
	draw({
		program: e,
		mode: t = this.gl.TRIANGLES
	}) {
		var i;
		this.gl.renderer.currentGeometry !== `${this.id}_${e.attributeOrder}` && (this.VAOs[e.attributeOrder] || this.createVAO(e), this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]), this.gl.renderer.currentGeometry = `${this.id}_${e.attributeOrder}`), e.attributeLocations.forEach((s, {
			name: o
		}) => {
			const a = this.attributes[o];
			a.needsUpdate && this.updateAttribute(a)
		});
		let n = 2;
		((i = this.attributes.index) == null ? void 0 : i.type) === this.gl.UNSIGNED_INT && (n = 4), this.isInstanced ? this.attributes.index ? this.gl.renderer.drawElementsInstanced(t, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * n, this.instancedCount) : this.gl.renderer.drawArraysInstanced(t, this.drawRange.start, this.drawRange.count, this.instancedCount) : this.attributes.index ? this.gl.drawElements(t, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * n) : this.gl.drawArrays(t, this.drawRange.start, this.drawRange.count)
	}
	getPosition() {
		const e = this.attributes.position;
		if (e.data) return e;
		if (!Yp) return console.warn("No position buffer data found to compute bounds"), Yp = !0
	}
	computeBoundingBox(e) {
		e || (e = this.getPosition());
		const t = e.data,
			n = e.size;
		this.bounds || (this.bounds = {
			min: new Rt,
			max: new Rt,
			center: new Rt,
			scale: new Rt,
			radius: 1 / 0
		});
		const i = this.bounds.min,
			s = this.bounds.max,
			o = this.bounds.center,
			a = this.bounds.scale;
		i.set(1 / 0), s.set(-1 / 0);
		for (let l = 0, c = t.length; l < c; l += n) {
			const h = t[l],
				u = t[l + 1],
				f = t[l + 2];
			i.x = Math.min(h, i.x), i.y = Math.min(u, i.y), i.z = Math.min(f, i.z), s.x = Math.max(h, s.x), s.y = Math.max(u, s.y), s.z = Math.max(f, s.z)
		}
		a.sub(s, i), o.add(i, s).divide(2)
	}
	computeBoundingSphere(e) {
		e || (e = this.getPosition());
		const t = e.data,
			n = e.size;
		this.bounds || this.computeBoundingBox(e);
		let i = 0;
		for (let s = 0, o = t.length; s < o; s += n) Xp.fromArray(t, s), i = Math.max(i, this.bounds.center.squaredDistance(Xp));
		this.bounds.radius = Math.sqrt(i)
	}
	remove() {
		for (let e in this.VAOs) this.gl.renderer.deleteVertexArray(this.VAOs[e]), delete this.VAOs[e];
		for (let e in this.attributes) this.gl.deleteBuffer(this.attributes[e].buffer), delete this.attributes[e]
	}
}
let HA = 1;
const jp = {};
class G0 {
	constructor(e, {
		vertex: t,
		fragment: n,
		uniforms: i = {},
		transparent: s = !1,
		cullFace: o = e.BACK,
		frontFace: a = e.CCW,
		depthTest: l = !0,
		depthWrite: c = !0,
		depthFunc: h = e.LESS
	} = {}) {
		e.canvas || console.error("gl not passed as first argument to Program"), this.gl = e, this.uniforms = i, this.id = HA++, t || console.warn("vertex shader not supplied"), n || console.warn("fragment shader not supplied"), this.transparent = s, this.cullFace = o, this.frontFace = a, this.depthTest = l, this.depthWrite = c, this.depthFunc = h, this.blendFunc = {}, this.blendEquation = {}, this.transparent && !this.blendFunc.src && (this.gl.renderer.premultipliedAlpha ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA) : this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA)), this.vertexShader = e.createShader(e.VERTEX_SHADER), this.fragmentShader = e.createShader(e.FRAGMENT_SHADER), this.program = e.createProgram(), e.attachShader(this.program, this.vertexShader), e.attachShader(this.program, this.fragmentShader), this.setShaders({
			vertex: t,
			fragment: n
		})
	}
	setShaders({
		vertex: e,
		fragment: t
	}) {
		if (e && (this.gl.shaderSource(this.vertexShader, e), this.gl.compileShader(this.vertexShader), this.gl.getShaderInfoLog(this.vertexShader) !== "" && console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${$p(e)}`)), t && (this.gl.shaderSource(this.fragmentShader, t), this.gl.compileShader(this.fragmentShader), this.gl.getShaderInfoLog(this.fragmentShader) !== "" && console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${$p(t)}`)), this.gl.linkProgram(this.program), !this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) return console.warn(this.gl.getProgramInfoLog(this.program));
		this.uniformLocations = new Map;
		let n = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_UNIFORMS);
		for (let o = 0; o < n; o++) {
			let a = this.gl.getActiveUniform(this.program, o);
			this.uniformLocations.set(a, this.gl.getUniformLocation(this.program, a.name));
			const l = a.name.match(/(\w+)/g);
			a.uniformName = l[0], a.nameComponents = l.slice(1)
		}
		this.attributeLocations = new Map;
		const i = [],
			s = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_ATTRIBUTES);
		for (let o = 0; o < s; o++) {
			const a = this.gl.getActiveAttrib(this.program, o),
				l = this.gl.getAttribLocation(this.program, a.name);
			l !== -1 && (i[l] = a.name, this.attributeLocations.set(a, l))
		}
		this.attributeOrder = i.join("")
	}
	setBlendFunc(e, t, n, i) {
		this.blendFunc.src = e, this.blendFunc.dst = t, this.blendFunc.srcAlpha = n, this.blendFunc.dstAlpha = i, e && (this.transparent = !0)
	}
	setBlendEquation(e, t) {
		this.blendEquation.modeRGB = e, this.blendEquation.modeAlpha = t
	}
	applyState() {
		this.depthTest ? this.gl.renderer.enable(this.gl.DEPTH_TEST) : this.gl.renderer.disable(this.gl.DEPTH_TEST), this.cullFace ? this.gl.renderer.enable(this.gl.CULL_FACE) : this.gl.renderer.disable(this.gl.CULL_FACE), this.blendFunc.src ? this.gl.renderer.enable(this.gl.BLEND) : this.gl.renderer.disable(this.gl.BLEND), this.cullFace && this.gl.renderer.setCullFace(this.cullFace), this.gl.renderer.setFrontFace(this.frontFace), this.gl.renderer.setDepthMask(this.depthWrite), this.gl.renderer.setDepthFunc(this.depthFunc), this.blendFunc.src && this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha), this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha)
	}
	use({
		flipFaces: e = !1
	} = {}) {
		let t = -1;
		this.gl.renderer.state.currentProgram === this.id || (this.gl.useProgram(this.program), this.gl.renderer.state.currentProgram = this.id), this.uniformLocations.forEach((i, s) => {
			let o = this.uniforms[s.uniformName];
			for (const a of s.nameComponents) {
				if (!o) break;
				if (a in o) o = o[a];
				else {
					if (Array.isArray(o.value)) break;
					o = void 0;
					break
				}
			}
			if (!o) return Zp(`Active uniform ${s.name} has not been supplied`);
			if (o && o.value === void 0) return Zp(`${s.name} uniform is missing a value parameter`);
			if (o.value.texture) return t = t + 1, o.value.update(t), Ch(this.gl, s.type, i, t);
			if (o.value.length && o.value[0].texture) {
				const a = [];
				return o.value.forEach(l => {
					t = t + 1, l.update(t), a.push(t)
				}), Ch(this.gl, s.type, i, a)
			}
			Ch(this.gl, s.type, i, o.value)
		}), this.applyState(), e && this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW)
	}
	remove() {
		this.gl.deleteProgram(this.program)
	}
}

function Ch(r, e, t, n) {
	n = n.length ? GA(n) : n;
	const i = r.renderer.state.uniformLocations.get(t);
	if (n.length)
		if (i === void 0 || i.length !== n.length) r.renderer.state.uniformLocations.set(t, n.slice(0));
		else {
			if (WA(i, n)) return;
			i.set ? i.set(n) : qA(i, n), r.renderer.state.uniformLocations.set(t, i)
		}
	else {
		if (i === n) return;
		r.renderer.state.uniformLocations.set(t, n)
	}
	switch (e) {
		case 5126:
			return n.length ? r.uniform1fv(t, n) : r.uniform1f(t, n);
		case 35664:
			return r.uniform2fv(t, n);
		case 35665:
			return r.uniform3fv(t, n);
		case 35666:
			return r.uniform4fv(t, n);
		case 35670:
		case 5124:
		case 35678:
		case 35680:
			return n.length ? r.uniform1iv(t, n) : r.uniform1i(t, n);
		case 35671:
		case 35667:
			return r.uniform2iv(t, n);
		case 35672:
		case 35668:
			return r.uniform3iv(t, n);
		case 35673:
		case 35669:
			return r.uniform4iv(t, n);
		case 35674:
			return r.uniformMatrix2fv(t, !1, n);
		case 35675:
			return r.uniformMatrix3fv(t, !1, n);
		case 35676:
			return r.uniformMatrix4fv(t, !1, n)
	}
}

function $p(r) {
	let e = r.split(`
`);
	for (let t = 0; t < e.length; t++) e[t] = t + 1 + ": " + e[t];
	return e.join(`
`)
}

function GA(r) {
	const e = r.length,
		t = r[0].length;
	if (t === void 0) return r;
	const n = e * t;
	let i = jp[n];
	i || (jp[n] = i = new Float32Array(n));
	for (let s = 0; s < e; s++) i.set(r[s], s * t);
	return i
}

function WA(r, e) {
	if (r.length !== e.length) return !1;
	for (let t = 0, n = r.length; t < n; t++)
		if (r[t] !== e[t]) return !1;
	return !0
}

function qA(r, e) {
	for (let t = 0, n = r.length; t < n; t++) r[t] = e[t]
}
let Lh = 0;

function Zp(r) {
	Lh > 100 || (console.warn(r), Lh++, Lh > 100 && console.warn("More than 100 program warnings - stopping logs."))
}
const Rh = new Rt;
let XA = 1;
class W0 {
	constructor({
		canvas: e = document.createElement("canvas"),
		width: t = 300,
		height: n = 150,
		dpr: i = 1,
		alpha: s = !1,
		depth: o = !0,
		stencil: a = !1,
		antialias: l = !1,
		premultipliedAlpha: c = !1,
		preserveDrawingBuffer: h = !1,
		powerPreference: u = "default",
		autoClear: f = !0,
		webgl: d = 2
	} = {}) {
		const p = {
			alpha: s,
			depth: o,
			stencil: a,
			antialias: l,
			premultipliedAlpha: c,
			preserveDrawingBuffer: h,
			powerPreference: u
		};
		this.dpr = i, this.alpha = s, this.color = !0, this.depth = o, this.stencil = a, this.premultipliedAlpha = c, this.autoClear = f, this.id = XA++, d === 2 && (this.gl = e.getContext("webgl2", p)), this.isWebgl2 = !!this.gl, this.gl || (this.gl = e.getContext("webgl", p)), this.gl || console.error("unable to create webgl context"), this.gl.renderer = this, this.setSize(t, n), this.state = {}, this.state.blendFunc = {
			src: this.gl.ONE,
			dst: this.gl.ZERO
		}, this.state.blendEquation = {
			modeRGB: this.gl.FUNC_ADD
		}, this.state.cullFace = !1, this.state.frontFace = this.gl.CCW, this.state.depthMask = !0, this.state.depthFunc = this.gl.LESS, this.state.premultiplyAlpha = !1, this.state.flipY = !1, this.state.unpackAlignment = 4, this.state.framebuffer = null, this.state.viewport = {
			x: 0,
			y: 0,
			width: null,
			height: null
		}, this.state.textureUnits = [], this.state.activeTextureUnit = 0, this.state.boundBuffer = null, this.state.uniformLocations = new Map, this.state.currentProgram = null, this.extensions = {}, this.isWebgl2 ? (this.getExtension("EXT_color_buffer_float"), this.getExtension("OES_texture_float_linear")) : (this.getExtension("OES_texture_float"), this.getExtension("OES_texture_float_linear"), this.getExtension("OES_texture_half_float"), this.getExtension("OES_texture_half_float_linear"), this.getExtension("OES_element_index_uint"), this.getExtension("OES_standard_derivatives"), this.getExtension("EXT_sRGB"), this.getExtension("WEBGL_depth_texture"), this.getExtension("WEBGL_draw_buffers")), this.getExtension("WEBGL_compressed_texture_astc"), this.getExtension("EXT_texture_compression_bptc"), this.getExtension("WEBGL_compressed_texture_s3tc"), this.getExtension("WEBGL_compressed_texture_etc1"), this.getExtension("WEBGL_compressed_texture_pvrtc"), this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"), this.vertexAttribDivisor = this.getExtension("ANGLE_instanced_arrays", "vertexAttribDivisor", "vertexAttribDivisorANGLE"), this.drawArraysInstanced = this.getExtension("ANGLE_instanced_arrays", "drawArraysInstanced", "drawArraysInstancedANGLE"), this.drawElementsInstanced = this.getExtension("ANGLE_instanced_arrays", "drawElementsInstanced", "drawElementsInstancedANGLE"), this.createVertexArray = this.getExtension("OES_vertex_array_object", "createVertexArray", "createVertexArrayOES"), this.bindVertexArray = this.getExtension("OES_vertex_array_object", "bindVertexArray", "bindVertexArrayOES"), this.deleteVertexArray = this.getExtension("OES_vertex_array_object", "deleteVertexArray", "deleteVertexArrayOES"), this.drawBuffers = this.getExtension("WEBGL_draw_buffers", "drawBuffers", "drawBuffersWEBGL"), this.parameters = {}, this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS), this.parameters.maxAnisotropy = this.getExtension("EXT_texture_filter_anisotropic") ? this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
	}
	setSize(e, t) {
		this.width = e, this.height = t, this.gl.canvas.width = e * this.dpr, this.gl.canvas.height = t * this.dpr, this.gl.canvas.style && Object.assign(this.gl.canvas.style, {
			width: e + "px",
			height: t + "px"
		})
	}
	setViewport(e, t, n = 0, i = 0) {
		this.state.viewport.width === e && this.state.viewport.height === t || (this.state.viewport.width = e, this.state.viewport.height = t, this.state.viewport.x = n, this.state.viewport.y = i, this.gl.viewport(n, i, e, t))
	}
	setScissor(e, t, n = 0, i = 0) {
		this.gl.scissor(n, i, e, t)
	}
	enable(e) {
		this.state[e] !== !0 && (this.gl.enable(e), this.state[e] = !0)
	}
	disable(e) {
		this.state[e] !== !1 && (this.gl.disable(e), this.state[e] = !1)
	}
	setBlendFunc(e, t, n, i) {
		this.state.blendFunc.src === e && this.state.blendFunc.dst === t && this.state.blendFunc.srcAlpha === n && this.state.blendFunc.dstAlpha === i || (this.state.blendFunc.src = e, this.state.blendFunc.dst = t, this.state.blendFunc.srcAlpha = n, this.state.blendFunc.dstAlpha = i, n !== void 0 ? this.gl.blendFuncSeparate(e, t, n, i) : this.gl.blendFunc(e, t))
	}
	setBlendEquation(e, t) {
		e = e || this.gl.FUNC_ADD, !(this.state.blendEquation.modeRGB === e && this.state.blendEquation.modeAlpha === t) && (this.state.blendEquation.modeRGB = e, this.state.blendEquation.modeAlpha = t, t !== void 0 ? this.gl.blendEquationSeparate(e, t) : this.gl.blendEquation(e))
	}
	setCullFace(e) {
		this.state.cullFace !== e && (this.state.cullFace = e, this.gl.cullFace(e))
	}
	setFrontFace(e) {
		this.state.frontFace !== e && (this.state.frontFace = e, this.gl.frontFace(e))
	}
	setDepthMask(e) {
		this.state.depthMask !== e && (this.state.depthMask = e, this.gl.depthMask(e))
	}
	setDepthFunc(e) {
		this.state.depthFunc !== e && (this.state.depthFunc = e, this.gl.depthFunc(e))
	}
	activeTexture(e) {
		this.state.activeTextureUnit !== e && (this.state.activeTextureUnit = e, this.gl.activeTexture(this.gl.TEXTURE0 + e))
	}
	bindFramebuffer({
		target: e = this.gl.FRAMEBUFFER,
		buffer: t = null
	} = {}) {
		this.state.framebuffer !== t && (this.state.framebuffer = t, this.gl.bindFramebuffer(e, t))
	}
	getExtension(e, t, n) {
		return t && this.gl[t] ? this.gl[t].bind(this.gl) : (this.extensions[e] || (this.extensions[e] = this.gl.getExtension(e)), t ? this.extensions[e] ? this.extensions[e][n].bind(this.extensions[e]) : null : this.extensions[e])
	}
	sortOpaque(e, t) {
		return e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.program.id !== t.program.id ? e.program.id - t.program.id : e.zDepth !== t.zDepth ? e.zDepth - t.zDepth : t.id - e.id
	}
	sortTransparent(e, t) {
		return e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.zDepth !== t.zDepth ? t.zDepth - e.zDepth : t.id - e.id
	}
	sortUI(e, t) {
		return e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.program.id !== t.program.id ? e.program.id - t.program.id : t.id - e.id
	}
	getRenderList({
		scene: e,
		camera: t,
		frustumCull: n,
		sort: i
	}) {
		let s = [];
		if (t && n && t.updateFrustum(), e.traverse(o => {
				if (!o.visible) return !0;
				o.draw && (n && o.frustumCulled && t && !t.frustumIntersectsMesh(o) || s.push(o))
			}), i) {
			const o = [],
				a = [],
				l = [];
			s.forEach(c => {
				c.program.transparent ? c.program.depthTest ? a.push(c) : l.push(c) : o.push(c), c.zDepth = 0, !(c.renderOrder !== 0 || !c.program.depthTest || !t) && (c.worldMatrix.getTranslation(Rh), Rh.applyMatrix4(t.projectionViewMatrix), c.zDepth = Rh.z)
			}), o.sort(this.sortOpaque), a.sort(this.sortTransparent), l.sort(this.sortUI), s = o.concat(a, l)
		}
		return s
	}
	render({
		scene: e,
		camera: t,
		target: n = null,
		update: i = !0,
		sort: s = !0,
		frustumCull: o = !0,
		clear: a
	}) {
		n === null ? (this.bindFramebuffer(), this.setViewport(this.width * this.dpr, this.height * this.dpr)) : (this.bindFramebuffer(n), this.setViewport(n.width, n.height)), (a || this.autoClear && a !== !1) && (this.depth && (!n || n.depth) && (this.enable(this.gl.DEPTH_TEST), this.setDepthMask(!0)), this.gl.clear((this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0))), i && e.updateMatrixWorld(), t && t.updateMatrixWorld(), this.getRenderList({
			scene: e,
			camera: t,
			frustumCull: o,
			sort: s
		}).forEach(c => {
			c.draw({
				camera: t
			})
		})
	}
}

function YA(r, e) {
	return r[0] = e[0], r[1] = e[1], r[2] = e[2], r[3] = e[3], r
}

function jA(r, e, t, n, i) {
	return r[0] = e, r[1] = t, r[2] = n, r[3] = i, r
}

function $A(r, e) {
	let t = e[0],
		n = e[1],
		i = e[2],
		s = e[3],
		o = t * t + n * n + i * i + s * s;
	return o > 0 && (o = 1 / Math.sqrt(o)), r[0] = t * o, r[1] = n * o, r[2] = i * o, r[3] = s * o, r
}

function ZA(r, e) {
	return r[0] * e[0] + r[1] * e[1] + r[2] * e[2] + r[3] * e[3]
}

function JA(r) {
	return r[0] = 0, r[1] = 0, r[2] = 0, r[3] = 1, r
}

function QA(r, e, t) {
	t = t * .5;
	let n = Math.sin(t);
	return r[0] = n * e[0], r[1] = n * e[1], r[2] = n * e[2], r[3] = Math.cos(t), r
}

function Jp(r, e, t) {
	let n = e[0],
		i = e[1],
		s = e[2],
		o = e[3],
		a = t[0],
		l = t[1],
		c = t[2],
		h = t[3];
	return r[0] = n * h + o * a + i * c - s * l, r[1] = i * h + o * l + s * a - n * c, r[2] = s * h + o * c + n * l - i * a, r[3] = o * h - n * a - i * l - s * c, r
}

function KA(r, e, t) {
	t *= .5;
	let n = e[0],
		i = e[1],
		s = e[2],
		o = e[3],
		a = Math.sin(t),
		l = Math.cos(t);
	return r[0] = n * l + o * a, r[1] = i * l + s * a, r[2] = s * l - i * a, r[3] = o * l - n * a, r
}

function e2(r, e, t) {
	t *= .5;
	let n = e[0],
		i = e[1],
		s = e[2],
		o = e[3],
		a = Math.sin(t),
		l = Math.cos(t);
	return r[0] = n * l - s * a, r[1] = i * l + o * a, r[2] = s * l + n * a, r[3] = o * l - i * a, r
}

function t2(r, e, t) {
	t *= .5;
	let n = e[0],
		i = e[1],
		s = e[2],
		o = e[3],
		a = Math.sin(t),
		l = Math.cos(t);
	return r[0] = n * l + i * a, r[1] = i * l - n * a, r[2] = s * l + o * a, r[3] = o * l - s * a, r
}

function n2(r, e, t, n) {
	let i = e[0],
		s = e[1],
		o = e[2],
		a = e[3],
		l = t[0],
		c = t[1],
		h = t[2],
		u = t[3],
		f, d, p, m, v;
	return d = i * l + s * c + o * h + a * u, d < 0 && (d = -d, l = -l, c = -c, h = -h, u = -u), 1 - d > 1e-6 ? (f = Math.acos(d), p = Math.sin(f), m = Math.sin((1 - n) * f) / p, v = Math.sin(n * f) / p) : (m = 1 - n, v = n), r[0] = m * i + v * l, r[1] = m * s + v * c, r[2] = m * o + v * h, r[3] = m * a + v * u, r
}

function i2(r, e) {
	let t = e[0],
		n = e[1],
		i = e[2],
		s = e[3],
		o = t * t + n * n + i * i + s * s,
		a = o ? 1 / o : 0;
	return r[0] = -t * a, r[1] = -n * a, r[2] = -i * a, r[3] = s * a, r
}

function r2(r, e) {
	return r[0] = -e[0], r[1] = -e[1], r[2] = -e[2], r[3] = e[3], r
}

function s2(r, e) {
	let t = e[0] + e[4] + e[8],
		n;
	if (t > 0) n = Math.sqrt(t + 1), r[3] = .5 * n, n = .5 / n, r[0] = (e[5] - e[7]) * n, r[1] = (e[6] - e[2]) * n, r[2] = (e[1] - e[3]) * n;
	else {
		let i = 0;
		e[4] > e[0] && (i = 1), e[8] > e[i * 3 + i] && (i = 2);
		let s = (i + 1) % 3,
			o = (i + 2) % 3;
		n = Math.sqrt(e[i * 3 + i] - e[s * 3 + s] - e[o * 3 + o] + 1), r[i] = .5 * n, n = .5 / n, r[3] = (e[s * 3 + o] - e[o * 3 + s]) * n, r[s] = (e[s * 3 + i] + e[i * 3 + s]) * n, r[o] = (e[o * 3 + i] + e[i * 3 + o]) * n
	}
	return r
}

function o2(r, e, t = "YXZ") {
	let n = Math.sin(e[0] * .5),
		i = Math.cos(e[0] * .5),
		s = Math.sin(e[1] * .5),
		o = Math.cos(e[1] * .5),
		a = Math.sin(e[2] * .5),
		l = Math.cos(e[2] * .5);
	return t === "XYZ" ? (r[0] = n * o * l + i * s * a, r[1] = i * s * l - n * o * a, r[2] = i * o * a + n * s * l, r[3] = i * o * l - n * s * a) : t === "YXZ" ? (r[0] = n * o * l + i * s * a, r[1] = i * s * l - n * o * a, r[2] = i * o * a - n * s * l, r[3] = i * o * l + n * s * a) : t === "ZXY" ? (r[0] = n * o * l - i * s * a, r[1] = i * s * l + n * o * a, r[2] = i * o * a + n * s * l, r[3] = i * o * l - n * s * a) : t === "ZYX" ? (r[0] = n * o * l - i * s * a, r[1] = i * s * l + n * o * a, r[2] = i * o * a - n * s * l, r[3] = i * o * l + n * s * a) : t === "YZX" ? (r[0] = n * o * l + i * s * a, r[1] = i * s * l + n * o * a, r[2] = i * o * a - n * s * l, r[3] = i * o * l - n * s * a) : t === "XZY" && (r[0] = n * o * l - i * s * a, r[1] = i * s * l - n * o * a, r[2] = i * o * a + n * s * l, r[3] = i * o * l + n * s * a), r
}
const a2 = YA,
	l2 = jA,
	c2 = ZA,
	h2 = $A;
class u2 extends Array {
	constructor(e = 0, t = 0, n = 0, i = 1) {
		super(e, t, n, i), this.onChange = () => {}, this._target = this;
		const s = ["0", "1", "2", "3"];
		return new Proxy(this, {
			set(o, a) {
				const l = Reflect.set(...arguments);
				return l && s.includes(a) && o.onChange(), l
			}
		})
	}
	get x() {
		return this[0]
	}
	get y() {
		return this[1]
	}
	get z() {
		return this[2]
	}
	get w() {
		return this[3]
	}
	set x(e) {
		this._target[0] = e, this.onChange()
	}
	set y(e) {
		this._target[1] = e, this.onChange()
	}
	set z(e) {
		this._target[2] = e, this.onChange()
	}
	set w(e) {
		this._target[3] = e, this.onChange()
	}
	identity() {
		return JA(this._target), this.onChange(), this
	}
	set(e, t, n, i) {
		return e.length ? this.copy(e) : (l2(this._target, e, t, n, i), this.onChange(), this)
	}
	rotateX(e) {
		return KA(this._target, this._target, e), this.onChange(), this
	}
	rotateY(e) {
		return e2(this._target, this._target, e), this.onChange(), this
	}
	rotateZ(e) {
		return t2(this._target, this._target, e), this.onChange(), this
	}
	inverse(e = this._target) {
		return i2(this._target, e), this.onChange(), this
	}
	conjugate(e = this._target) {
		return r2(this._target, e), this.onChange(), this
	}
	copy(e) {
		return a2(this._target, e), this.onChange(), this
	}
	normalize(e = this._target) {
		return h2(this._target, e), this.onChange(), this
	}
	multiply(e, t) {
		return t ? Jp(this._target, e, t) : Jp(this._target, this._target, e), this.onChange(), this
	}
	dot(e) {
		return c2(this._target, e)
	}
	fromMatrix3(e) {
		return s2(this._target, e), this.onChange(), this
	}
	fromEuler(e, t) {
		return o2(this._target, e, e.order), t || this.onChange(), this
	}
	fromAxisAngle(e, t) {
		return QA(this._target, e, t), this.onChange(), this
	}
	slerp(e, t) {
		return n2(this._target, this._target, e, t), this.onChange(), this
	}
	fromArray(e, t = 0) {
		return this._target[0] = e[t], this._target[1] = e[t + 1], this._target[2] = e[t + 2], this._target[3] = e[t + 3], this.onChange(), this
	}
	toArray(e = [], t = 0) {
		return e[t] = this[0], e[t + 1] = this[1], e[t + 2] = this[2], e[t + 3] = this[3], e
	}
}
const f2 = 1e-6;

function d2(r, e) {
	return r[0] = e[0], r[1] = e[1], r[2] = e[2], r[3] = e[3], r[4] = e[4], r[5] = e[5], r[6] = e[6], r[7] = e[7], r[8] = e[8], r[9] = e[9], r[10] = e[10], r[11] = e[11], r[12] = e[12], r[13] = e[13], r[14] = e[14], r[15] = e[15], r
}

function p2(r, e, t, n, i, s, o, a, l, c, h, u, f, d, p, m, v) {
	return r[0] = e, r[1] = t, r[2] = n, r[3] = i, r[4] = s, r[5] = o, r[6] = a, r[7] = l, r[8] = c, r[9] = h, r[10] = u, r[11] = f, r[12] = d, r[13] = p, r[14] = m, r[15] = v, r
}

function m2(r) {
	return r[0] = 1, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 0, r[5] = 1, r[6] = 0, r[7] = 0, r[8] = 0, r[9] = 0, r[10] = 1, r[11] = 0, r[12] = 0, r[13] = 0, r[14] = 0, r[15] = 1, r
}

function g2(r, e) {
	let t = e[0],
		n = e[1],
		i = e[2],
		s = e[3],
		o = e[4],
		a = e[5],
		l = e[6],
		c = e[7],
		h = e[8],
		u = e[9],
		f = e[10],
		d = e[11],
		p = e[12],
		m = e[13],
		v = e[14],
		g = e[15],
		_ = t * a - n * o,
		w = t * l - i * o,
		x = t * c - s * o,
		y = n * l - i * a,
		b = n * c - s * a,
		S = i * c - s * l,
		D = h * m - u * p,
		O = h * v - f * p,
		z = h * g - d * p,
		P = u * v - f * m,
		M = u * g - d * m,
		E = f * g - d * v,
		R = _ * E - w * M + x * P + y * z - b * O + S * D;
	return R ? (R = 1 / R, r[0] = (a * E - l * M + c * P) * R, r[1] = (i * M - n * E - s * P) * R, r[2] = (m * S - v * b + g * y) * R, r[3] = (f * b - u * S - d * y) * R, r[4] = (l * z - o * E - c * O) * R, r[5] = (t * E - i * z + s * O) * R, r[6] = (v * x - p * S - g * w) * R, r[7] = (h * S - f * x + d * w) * R, r[8] = (o * M - a * z + c * D) * R, r[9] = (n * z - t * M - s * D) * R, r[10] = (p * b - m * x + g * _) * R, r[11] = (u * x - h * b - d * _) * R, r[12] = (a * O - o * P - l * D) * R, r[13] = (t * P - n * O + i * D) * R, r[14] = (m * w - p * y - v * _) * R, r[15] = (h * y - u * w + f * _) * R, r) : null
}

function _2(r) {
	let e = r[0],
		t = r[1],
		n = r[2],
		i = r[3],
		s = r[4],
		o = r[5],
		a = r[6],
		l = r[7],
		c = r[8],
		h = r[9],
		u = r[10],
		f = r[11],
		d = r[12],
		p = r[13],
		m = r[14],
		v = r[15],
		g = e * o - t * s,
		_ = e * a - n * s,
		w = e * l - i * s,
		x = t * a - n * o,
		y = t * l - i * o,
		b = n * l - i * a,
		S = c * p - h * d,
		D = c * m - u * d,
		O = c * v - f * d,
		z = h * m - u * p,
		P = h * v - f * p,
		M = u * v - f * m;
	return g * M - _ * P + w * z + x * O - y * D + b * S
}

function Qp(r, e, t) {
	let n = e[0],
		i = e[1],
		s = e[2],
		o = e[3],
		a = e[4],
		l = e[5],
		c = e[6],
		h = e[7],
		u = e[8],
		f = e[9],
		d = e[10],
		p = e[11],
		m = e[12],
		v = e[13],
		g = e[14],
		_ = e[15],
		w = t[0],
		x = t[1],
		y = t[2],
		b = t[3];
	return r[0] = w * n + x * a + y * u + b * m, r[1] = w * i + x * l + y * f + b * v, r[2] = w * s + x * c + y * d + b * g, r[3] = w * o + x * h + y * p + b * _, w = t[4], x = t[5], y = t[6], b = t[7], r[4] = w * n + x * a + y * u + b * m, r[5] = w * i + x * l + y * f + b * v, r[6] = w * s + x * c + y * d + b * g, r[7] = w * o + x * h + y * p + b * _, w = t[8], x = t[9], y = t[10], b = t[11], r[8] = w * n + x * a + y * u + b * m, r[9] = w * i + x * l + y * f + b * v, r[10] = w * s + x * c + y * d + b * g, r[11] = w * o + x * h + y * p + b * _, w = t[12], x = t[13], y = t[14], b = t[15], r[12] = w * n + x * a + y * u + b * m, r[13] = w * i + x * l + y * f + b * v, r[14] = w * s + x * c + y * d + b * g, r[15] = w * o + x * h + y * p + b * _, r
}

function v2(r, e, t) {
	let n = t[0],
		i = t[1],
		s = t[2],
		o, a, l, c, h, u, f, d, p, m, v, g;
	return e === r ? (r[12] = e[0] * n + e[4] * i + e[8] * s + e[12], r[13] = e[1] * n + e[5] * i + e[9] * s + e[13], r[14] = e[2] * n + e[6] * i + e[10] * s + e[14], r[15] = e[3] * n + e[7] * i + e[11] * s + e[15]) : (o = e[0], a = e[1], l = e[2], c = e[3], h = e[4], u = e[5], f = e[6], d = e[7], p = e[8], m = e[9], v = e[10], g = e[11], r[0] = o, r[1] = a, r[2] = l, r[3] = c, r[4] = h, r[5] = u, r[6] = f, r[7] = d, r[8] = p, r[9] = m, r[10] = v, r[11] = g, r[12] = o * n + h * i + p * s + e[12], r[13] = a * n + u * i + m * s + e[13], r[14] = l * n + f * i + v * s + e[14], r[15] = c * n + d * i + g * s + e[15]), r
}

function x2(r, e, t) {
	let n = t[0],
		i = t[1],
		s = t[2];
	return r[0] = e[0] * n, r[1] = e[1] * n, r[2] = e[2] * n, r[3] = e[3] * n, r[4] = e[4] * i, r[5] = e[5] * i, r[6] = e[6] * i, r[7] = e[7] * i, r[8] = e[8] * s, r[9] = e[9] * s, r[10] = e[10] * s, r[11] = e[11] * s, r[12] = e[12], r[13] = e[13], r[14] = e[14], r[15] = e[15], r
}

function y2(r, e, t, n) {
	let i = n[0],
		s = n[1],
		o = n[2],
		a = Math.hypot(i, s, o),
		l, c, h, u, f, d, p, m, v, g, _, w, x, y, b, S, D, O, z, P, M, E, R, V;
	return Math.abs(a) < f2 ? null : (a = 1 / a, i *= a, s *= a, o *= a, l = Math.sin(t), c = Math.cos(t), h = 1 - c, u = e[0], f = e[1], d = e[2], p = e[3], m = e[4], v = e[5], g = e[6], _ = e[7], w = e[8], x = e[9], y = e[10], b = e[11], S = i * i * h + c, D = s * i * h + o * l, O = o * i * h - s * l, z = i * s * h - o * l, P = s * s * h + c, M = o * s * h + i * l, E = i * o * h + s * l, R = s * o * h - i * l, V = o * o * h + c, r[0] = u * S + m * D + w * O, r[1] = f * S + v * D + x * O, r[2] = d * S + g * D + y * O, r[3] = p * S + _ * D + b * O, r[4] = u * z + m * P + w * M, r[5] = f * z + v * P + x * M, r[6] = d * z + g * P + y * M, r[7] = p * z + _ * P + b * M, r[8] = u * E + m * R + w * V, r[9] = f * E + v * R + x * V, r[10] = d * E + g * R + y * V, r[11] = p * E + _ * R + b * V, e !== r && (r[12] = e[12], r[13] = e[13], r[14] = e[14], r[15] = e[15]), r)
}

function w2(r, e) {
	return r[0] = e[12], r[1] = e[13], r[2] = e[14], r
}

function q0(r, e) {
	let t = e[0],
		n = e[1],
		i = e[2],
		s = e[4],
		o = e[5],
		a = e[6],
		l = e[8],
		c = e[9],
		h = e[10];
	return r[0] = Math.hypot(t, n, i), r[1] = Math.hypot(s, o, a), r[2] = Math.hypot(l, c, h), r
}

function b2(r) {
	let e = r[0],
		t = r[1],
		n = r[2],
		i = r[4],
		s = r[5],
		o = r[6],
		a = r[8],
		l = r[9],
		c = r[10];
	const h = e * e + t * t + n * n,
		u = i * i + s * s + o * o,
		f = a * a + l * l + c * c;
	return Math.sqrt(Math.max(h, u, f))
}
const M2 = function() {
	const r = [1, 1, 1];
	return function(e, t) {
		let n = r;
		q0(n, t);
		let i = 1 / n[0],
			s = 1 / n[1],
			o = 1 / n[2],
			a = t[0] * i,
			l = t[1] * s,
			c = t[2] * o,
			h = t[4] * i,
			u = t[5] * s,
			f = t[6] * o,
			d = t[8] * i,
			p = t[9] * s,
			m = t[10] * o,
			v = a + u + m,
			g = 0;
		return v > 0 ? (g = Math.sqrt(v + 1) * 2, e[3] = .25 * g, e[0] = (f - p) / g, e[1] = (d - c) / g, e[2] = (l - h) / g) : a > u && a > m ? (g = Math.sqrt(1 + a - u - m) * 2, e[3] = (f - p) / g, e[0] = .25 * g, e[1] = (l + h) / g, e[2] = (d + c) / g) : u > m ? (g = Math.sqrt(1 + u - a - m) * 2, e[3] = (d - c) / g, e[0] = (l + h) / g, e[1] = .25 * g, e[2] = (f + p) / g) : (g = Math.sqrt(1 + m - a - u) * 2, e[3] = (l - h) / g, e[0] = (d + c) / g, e[1] = (f + p) / g, e[2] = .25 * g), e
	}
}();

function S2(r, e, t, n) {
	let i = e[0],
		s = e[1],
		o = e[2],
		a = e[3],
		l = i + i,
		c = s + s,
		h = o + o,
		u = i * l,
		f = i * c,
		d = i * h,
		p = s * c,
		m = s * h,
		v = o * h,
		g = a * l,
		_ = a * c,
		w = a * h,
		x = n[0],
		y = n[1],
		b = n[2];
	return r[0] = (1 - (p + v)) * x, r[1] = (f + w) * x, r[2] = (d - _) * x, r[3] = 0, r[4] = (f - w) * y, r[5] = (1 - (u + v)) * y, r[6] = (m + g) * y, r[7] = 0, r[8] = (d + _) * b, r[9] = (m - g) * b, r[10] = (1 - (u + p)) * b, r[11] = 0, r[12] = t[0], r[13] = t[1], r[14] = t[2], r[15] = 1, r
}

function T2(r, e) {
	let t = e[0],
		n = e[1],
		i = e[2],
		s = e[3],
		o = t + t,
		a = n + n,
		l = i + i,
		c = t * o,
		h = n * o,
		u = n * a,
		f = i * o,
		d = i * a,
		p = i * l,
		m = s * o,
		v = s * a,
		g = s * l;
	return r[0] = 1 - u - p, r[1] = h + g, r[2] = f - v, r[3] = 0, r[4] = h - g, r[5] = 1 - c - p, r[6] = d + m, r[7] = 0, r[8] = f + v, r[9] = d - m, r[10] = 1 - c - u, r[11] = 0, r[12] = 0, r[13] = 0, r[14] = 0, r[15] = 1, r
}

function E2(r, e, t, n, i) {
	let s = 1 / Math.tan(e / 2),
		o = 1 / (n - i);
	return r[0] = s / t, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 0, r[5] = s, r[6] = 0, r[7] = 0, r[8] = 0, r[9] = 0, r[10] = (i + n) * o, r[11] = -1, r[12] = 0, r[13] = 0, r[14] = 2 * i * n * o, r[15] = 0, r
}

function A2(r, e, t, n, i, s, o) {
	let a = 1 / (e - t),
		l = 1 / (n - i),
		c = 1 / (s - o);
	return r[0] = -2 * a, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 0, r[5] = -2 * l, r[6] = 0, r[7] = 0, r[8] = 0, r[9] = 0, r[10] = 2 * c, r[11] = 0, r[12] = (e + t) * a, r[13] = (i + n) * l, r[14] = (o + s) * c, r[15] = 1, r
}

function C2(r, e, t, n) {
	let i = e[0],
		s = e[1],
		o = e[2],
		a = n[0],
		l = n[1],
		c = n[2],
		h = i - t[0],
		u = s - t[1],
		f = o - t[2],
		d = h * h + u * u + f * f;
	d === 0 ? f = 1 : (d = 1 / Math.sqrt(d), h *= d, u *= d, f *= d);
	let p = l * f - c * u,
		m = c * h - a * f,
		v = a * u - l * h;
	return d = p * p + m * m + v * v, d === 0 && (c ? a += 1e-6 : l ? c += 1e-6 : l += 1e-6, p = l * f - c * u, m = c * h - a * f, v = a * u - l * h, d = p * p + m * m + v * v), d = 1 / Math.sqrt(d), p *= d, m *= d, v *= d, r[0] = p, r[1] = m, r[2] = v, r[3] = 0, r[4] = u * v - f * m, r[5] = f * p - h * v, r[6] = h * m - u * p, r[7] = 0, r[8] = h, r[9] = u, r[10] = f, r[11] = 0, r[12] = i, r[13] = s, r[14] = o, r[15] = 1, r
}

function Kp(r, e, t) {
	return r[0] = e[0] + t[0], r[1] = e[1] + t[1], r[2] = e[2] + t[2], r[3] = e[3] + t[3], r[4] = e[4] + t[4], r[5] = e[5] + t[5], r[6] = e[6] + t[6], r[7] = e[7] + t[7], r[8] = e[8] + t[8], r[9] = e[9] + t[9], r[10] = e[10] + t[10], r[11] = e[11] + t[11], r[12] = e[12] + t[12], r[13] = e[13] + t[13], r[14] = e[14] + t[14], r[15] = e[15] + t[15], r
}

function em(r, e, t) {
	return r[0] = e[0] - t[0], r[1] = e[1] - t[1], r[2] = e[2] - t[2], r[3] = e[3] - t[3], r[4] = e[4] - t[4], r[5] = e[5] - t[5], r[6] = e[6] - t[6], r[7] = e[7] - t[7], r[8] = e[8] - t[8], r[9] = e[9] - t[9], r[10] = e[10] - t[10], r[11] = e[11] - t[11], r[12] = e[12] - t[12], r[13] = e[13] - t[13], r[14] = e[14] - t[14], r[15] = e[15] - t[15], r
}

function L2(r, e, t) {
	return r[0] = e[0] * t, r[1] = e[1] * t, r[2] = e[2] * t, r[3] = e[3] * t, r[4] = e[4] * t, r[5] = e[5] * t, r[6] = e[6] * t, r[7] = e[7] * t, r[8] = e[8] * t, r[9] = e[9] * t, r[10] = e[10] * t, r[11] = e[11] * t, r[12] = e[12] * t, r[13] = e[13] * t, r[14] = e[14] * t, r[15] = e[15] * t, r
}
class pr extends Array {
	constructor(e = 1, t = 0, n = 0, i = 0, s = 0, o = 1, a = 0, l = 0, c = 0, h = 0, u = 1, f = 0, d = 0, p = 0, m = 0, v = 1) {
		return super(e, t, n, i, s, o, a, l, c, h, u, f, d, p, m, v), this
	}
	get x() {
		return this[12]
	}
	get y() {
		return this[13]
	}
	get z() {
		return this[14]
	}
	get w() {
		return this[15]
	}
	set x(e) {
		this[12] = e
	}
	set y(e) {
		this[13] = e
	}
	set z(e) {
		this[14] = e
	}
	set w(e) {
		this[15] = e
	}
	set(e, t, n, i, s, o, a, l, c, h, u, f, d, p, m, v) {
		return e.length ? this.copy(e) : (p2(this, e, t, n, i, s, o, a, l, c, h, u, f, d, p, m, v), this)
	}
	translate(e, t = this) {
		return v2(this, t, e), this
	}
	rotate(e, t, n = this) {
		return y2(this, n, e, t), this
	}
	scale(e, t = this) {
		return x2(this, t, typeof e == "number" ? [e, e, e] : e), this
	}
	add(e, t) {
		return t ? Kp(this, e, t) : Kp(this, this, e), this
	}
	sub(e, t) {
		return t ? em(this, e, t) : em(this, this, e), this
	}
	multiply(e, t) {
		return e.length ? t ? Qp(this, e, t) : Qp(this, this, e) : L2(this, this, e), this
	}
	identity() {
		return m2(this), this
	}
	copy(e) {
		return d2(this, e), this
	}
	fromPerspective({
		fov: e,
		aspect: t,
		near: n,
		far: i
	} = {}) {
		return E2(this, e, t, n, i), this
	}
	fromOrthogonal({
		left: e,
		right: t,
		bottom: n,
		top: i,
		near: s,
		far: o
	}) {
		return A2(this, e, t, n, i, s, o), this
	}
	fromQuaternion(e) {
		return T2(this, e), this
	}
	setPosition(e) {
		return this.x = e[0], this.y = e[1], this.z = e[2], this
	}
	inverse(e = this) {
		return g2(this, e), this
	}
	compose(e, t, n) {
		return S2(this, e, t, n), this
	}
	getRotation(e) {
		return M2(e, this), this
	}
	getTranslation(e) {
		return w2(e, this), this
	}
	getScaling(e) {
		return q0(e, this), this
	}
	getMaxScaleOnAxis() {
		return b2(this)
	}
	lookAt(e, t, n) {
		return C2(this, e, t, n), this
	}
	determinant() {
		return _2(this)
	}
	fromArray(e, t = 0) {
		return this[0] = e[t], this[1] = e[t + 1], this[2] = e[t + 2], this[3] = e[t + 3], this[4] = e[t + 4], this[5] = e[t + 5], this[6] = e[t + 6], this[7] = e[t + 7], this[8] = e[t + 8], this[9] = e[t + 9], this[10] = e[t + 10], this[11] = e[t + 11], this[12] = e[t + 12], this[13] = e[t + 13], this[14] = e[t + 14], this[15] = e[t + 15], this
	}
	toArray(e = [], t = 0) {
		return e[t] = this[0], e[t + 1] = this[1], e[t + 2] = this[2], e[t + 3] = this[3], e[t + 4] = this[4], e[t + 5] = this[5], e[t + 6] = this[6], e[t + 7] = this[7], e[t + 8] = this[8], e[t + 9] = this[9], e[t + 10] = this[10], e[t + 11] = this[11], e[t + 12] = this[12], e[t + 13] = this[13], e[t + 14] = this[14], e[t + 15] = this[15], e
	}
}

function R2(r, e, t = "YXZ") {
	return t === "XYZ" ? (r[1] = Math.asin(Math.min(Math.max(e[8], -1), 1)), Math.abs(e[8]) < .99999 ? (r[0] = Math.atan2(-e[9], e[10]), r[2] = Math.atan2(-e[4], e[0])) : (r[0] = Math.atan2(e[6], e[5]), r[2] = 0)) : t === "YXZ" ? (r[0] = Math.asin(-Math.min(Math.max(e[9], -1), 1)), Math.abs(e[9]) < .99999 ? (r[1] = Math.atan2(e[8], e[10]), r[2] = Math.atan2(e[1], e[5])) : (r[1] = Math.atan2(-e[2], e[0]), r[2] = 0)) : t === "ZXY" ? (r[0] = Math.asin(Math.min(Math.max(e[6], -1), 1)), Math.abs(e[6]) < .99999 ? (r[1] = Math.atan2(-e[2], e[10]), r[2] = Math.atan2(-e[4], e[5])) : (r[1] = 0, r[2] = Math.atan2(e[1], e[0]))) : t === "ZYX" ? (r[1] = Math.asin(-Math.min(Math.max(e[2], -1), 1)), Math.abs(e[2]) < .99999 ? (r[0] = Math.atan2(e[6], e[10]), r[2] = Math.atan2(e[1], e[0])) : (r[0] = 0, r[2] = Math.atan2(-e[4], e[5]))) : t === "YZX" ? (r[2] = Math.asin(Math.min(Math.max(e[1], -1), 1)), Math.abs(e[1]) < .99999 ? (r[0] = Math.atan2(-e[9], e[5]), r[1] = Math.atan2(-e[2], e[0])) : (r[0] = 0, r[1] = Math.atan2(e[8], e[10]))) : t === "XZY" && (r[2] = Math.asin(-Math.min(Math.max(e[4], -1), 1)), Math.abs(e[4]) < .99999 ? (r[0] = Math.atan2(e[6], e[5]), r[1] = Math.atan2(e[8], e[0])) : (r[0] = Math.atan2(-e[9], e[10]), r[1] = 0)), r
}
const tm = new pr;
class P2 extends Array {
	constructor(e = 0, t = e, n = e, i = "YXZ") {
		super(e, t, n), this.order = i, this.onChange = () => {}, this._target = this;
		const s = ["0", "1", "2"];
		return new Proxy(this, {
			set(o, a) {
				const l = Reflect.set(...arguments);
				return l && s.includes(a) && o.onChange(), l
			}
		})
	}
	get x() {
		return this[0]
	}
	get y() {
		return this[1]
	}
	get z() {
		return this[2]
	}
	set x(e) {
		this._target[0] = e, this.onChange()
	}
	set y(e) {
		this._target[1] = e, this.onChange()
	}
	set z(e) {
		this._target[2] = e, this.onChange()
	}
	set(e, t = e, n = e) {
		return e.length ? this.copy(e) : (this._target[0] = e, this._target[1] = t, this._target[2] = n, this.onChange(), this)
	}
	copy(e) {
		return this._target[0] = e[0], this._target[1] = e[1], this._target[2] = e[2], this.onChange(), this
	}
	reorder(e) {
		return this._target.order = e, this.onChange(), this
	}
	fromRotationMatrix(e, t = this.order) {
		return R2(this._target, e, t), this.onChange(), this
	}
	fromQuaternion(e, t = this.order, n) {
		return tm.fromQuaternion(e), this._target.fromRotationMatrix(tm, t), n || this.onChange(), this
	}
	fromArray(e, t = 0) {
		return this._target[0] = e[t], this._target[1] = e[t + 1], this._target[2] = e[t + 2], this
	}
	toArray(e = [], t = 0) {
		return e[t] = this[0], e[t + 1] = this[1], e[t + 2] = this[2], e
	}
}
class Sc {
	constructor() {
		this.parent = null, this.children = [], this.visible = !0, this.matrix = new pr, this.worldMatrix = new pr, this.matrixAutoUpdate = !0, this.worldMatrixNeedsUpdate = !1, this.position = new Rt, this.quaternion = new u2, this.scale = new Rt(1), this.rotation = new P2, this.up = new Rt(0, 1, 0), this.rotation._target.onChange = () => this.quaternion.fromEuler(this.rotation, !0), this.quaternion._target.onChange = () => this.rotation.fromQuaternion(this.quaternion, void 0, !0)
	}
	setParent(e, t = !0) {
		this.parent && e !== this.parent && this.parent.removeChild(this, !1), this.parent = e, t && e && e.addChild(this, !1)
	}
	addChild(e, t = !0) {
		~this.children.indexOf(e) || this.children.push(e), t && e.setParent(this, !1)
	}
	removeChild(e, t = !0) {
		~this.children.indexOf(e) && this.children.splice(this.children.indexOf(e), 1), t && e.setParent(null, !1)
	}
	updateMatrixWorld(e) {
		this.matrixAutoUpdate && this.updateMatrix(), (this.worldMatrixNeedsUpdate || e) && (this.parent === null ? this.worldMatrix.copy(this.matrix) : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix), this.worldMatrixNeedsUpdate = !1, e = !0);
		for (let t = 0, n = this.children.length; t < n; t++) this.children[t].updateMatrixWorld(e)
	}
	updateMatrix() {
		this.matrix.compose(this.quaternion, this.position, this.scale), this.worldMatrixNeedsUpdate = !0
	}
	traverse(e) {
		if (!e(this))
			for (let t = 0, n = this.children.length; t < n; t++) this.children[t].traverse(e)
	}
	decompose() {
		this.matrix.getTranslation(this.position), this.matrix.getRotation(this.quaternion._target), this.matrix.getScaling(this.scale), this.rotation.fromQuaternion(this.quaternion)
	}
	lookAt(e, t = !1) {
		t ? this.matrix.lookAt(this.position, e, this.up) : this.matrix.lookAt(e, this.position, this.up), this.matrix.getRotation(this.quaternion._target), this.rotation.fromQuaternion(this.quaternion)
	}
}
const D2 = new pr,
	I2 = new Rt,
	F2 = new Rt;
class X0 extends Sc {
	constructor(e, {
		near: t = .1,
		far: n = 100,
		fov: i = 45,
		aspect: s = 1,
		left: o,
		right: a,
		bottom: l,
		top: c,
		zoom: h = 1
	} = {}) {
		super(), Object.assign(this, {
			near: t,
			far: n,
			fov: i,
			aspect: s,
			left: o,
			right: a,
			bottom: l,
			top: c,
			zoom: h
		}), this.projectionMatrix = new pr, this.viewMatrix = new pr, this.projectionViewMatrix = new pr, this.worldPosition = new Rt, this.type = o || a ? "orthographic" : "perspective", this.type === "orthographic" ? this.orthographic() : this.perspective()
	}
	perspective({
		near: e = this.near,
		far: t = this.far,
		fov: n = this.fov,
		aspect: i = this.aspect
	} = {}) {
		return Object.assign(this, {
			near: e,
			far: t,
			fov: n,
			aspect: i
		}), this.projectionMatrix.fromPerspective({
			fov: n * (Math.PI / 180),
			aspect: i,
			near: e,
			far: t
		}), this.type = "perspective", this
	}
	orthographic({
		near: e = this.near,
		far: t = this.far,
		left: n = this.left || -1,
		right: i = this.right || 1,
		bottom: s = this.bottom || -1,
		top: o = this.top || 1,
		zoom: a = this.zoom
	} = {}) {
		return Object.assign(this, {
			near: e,
			far: t,
			left: n,
			right: i,
			bottom: s,
			top: o,
			zoom: a
		}), n /= a, i /= a, s /= a, o /= a, this.projectionMatrix.fromOrthogonal({
			left: n,
			right: i,
			bottom: s,
			top: o,
			near: e,
			far: t
		}), this.type = "orthographic", this
	}
	updateMatrixWorld() {
		return super.updateMatrixWorld(), this.viewMatrix.inverse(this.worldMatrix), this.worldMatrix.getTranslation(this.worldPosition), this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix), this
	}
	lookAt(e) {
		return super.lookAt(e, !0), this
	}
	project(e) {
		return e.applyMatrix4(this.viewMatrix), e.applyMatrix4(this.projectionMatrix), this
	}
	unproject(e) {
		return e.applyMatrix4(D2.inverse(this.projectionMatrix)), e.applyMatrix4(this.worldMatrix), this
	}
	updateFrustum() {
		this.frustum || (this.frustum = [new Rt, new Rt, new Rt, new Rt, new Rt, new Rt]);
		const e = this.projectionViewMatrix;
		this.frustum[0].set(e[3] - e[0], e[7] - e[4], e[11] - e[8]).constant = e[15] - e[12], this.frustum[1].set(e[3] + e[0], e[7] + e[4], e[11] + e[8]).constant = e[15] + e[12], this.frustum[2].set(e[3] + e[1], e[7] + e[5], e[11] + e[9]).constant = e[15] + e[13], this.frustum[3].set(e[3] - e[1], e[7] - e[5], e[11] - e[9]).constant = e[15] - e[13], this.frustum[4].set(e[3] - e[2], e[7] - e[6], e[11] - e[10]).constant = e[15] - e[14], this.frustum[5].set(e[3] + e[2], e[7] + e[6], e[11] + e[10]).constant = e[15] + e[14];
		for (let t = 0; t < 6; t++) {
			const n = 1 / this.frustum[t].distance();
			this.frustum[t].multiply(n), this.frustum[t].constant *= n
		}
	}
	frustumIntersectsMesh(e, t = e.worldMatrix) {
		if (!e.geometry.attributes.position || ((!e.geometry.bounds || e.geometry.bounds.radius === 1 / 0) && e.geometry.computeBoundingSphere(), !e.geometry.bounds)) return !0;
		const n = I2;
		n.copy(e.geometry.bounds.center), n.applyMatrix4(t);
		const i = e.geometry.bounds.radius * t.getMaxScaleOnAxis();
		return this.frustumIntersectsSphere(n, i)
	}
	frustumIntersectsSphere(e, t) {
		const n = F2;
		for (let i = 0; i < 6; i++) {
			const s = this.frustum[i];
			if (n.copy(s).dot(e) + s.constant < -t) return !1
		}
		return !0
	}
}

function z2(r, e) {
	return r[0] = e[0], r[1] = e[1], r[2] = e[2], r[3] = e[4], r[4] = e[5], r[5] = e[6], r[6] = e[8], r[7] = e[9], r[8] = e[10], r
}

function O2(r, e) {
	let t = e[0],
		n = e[1],
		i = e[2],
		s = e[3],
		o = t + t,
		a = n + n,
		l = i + i,
		c = t * o,
		h = n * o,
		u = n * a,
		f = i * o,
		d = i * a,
		p = i * l,
		m = s * o,
		v = s * a,
		g = s * l;
	return r[0] = 1 - u - p, r[3] = h - g, r[6] = f + v, r[1] = h + g, r[4] = 1 - c - p, r[7] = d - m, r[2] = f - v, r[5] = d + m, r[8] = 1 - c - u, r
}

function N2(r, e) {
	return r[0] = e[0], r[1] = e[1], r[2] = e[2], r[3] = e[3], r[4] = e[4], r[5] = e[5], r[6] = e[6], r[7] = e[7], r[8] = e[8], r
}

function B2(r, e, t, n, i, s, o, a, l, c) {
	return r[0] = e, r[1] = t, r[2] = n, r[3] = i, r[4] = s, r[5] = o, r[6] = a, r[7] = l, r[8] = c, r
}

function k2(r) {
	return r[0] = 1, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 1, r[5] = 0, r[6] = 0, r[7] = 0, r[8] = 1, r
}

function U2(r, e) {
	let t = e[0],
		n = e[1],
		i = e[2],
		s = e[3],
		o = e[4],
		a = e[5],
		l = e[6],
		c = e[7],
		h = e[8],
		u = h * o - a * c,
		f = -h * s + a * l,
		d = c * s - o * l,
		p = t * u + n * f + i * d;
	return p ? (p = 1 / p, r[0] = u * p, r[1] = (-h * n + i * c) * p, r[2] = (a * n - i * o) * p, r[3] = f * p, r[4] = (h * t - i * l) * p, r[5] = (-a * t + i * s) * p, r[6] = d * p, r[7] = (-c * t + n * l) * p, r[8] = (o * t - n * s) * p, r) : null
}

function nm(r, e, t) {
	let n = e[0],
		i = e[1],
		s = e[2],
		o = e[3],
		a = e[4],
		l = e[5],
		c = e[6],
		h = e[7],
		u = e[8],
		f = t[0],
		d = t[1],
		p = t[2],
		m = t[3],
		v = t[4],
		g = t[5],
		_ = t[6],
		w = t[7],
		x = t[8];
	return r[0] = f * n + d * o + p * c, r[1] = f * i + d * a + p * h, r[2] = f * s + d * l + p * u, r[3] = m * n + v * o + g * c, r[4] = m * i + v * a + g * h, r[5] = m * s + v * l + g * u, r[6] = _ * n + w * o + x * c, r[7] = _ * i + w * a + x * h, r[8] = _ * s + w * l + x * u, r
}

function V2(r, e, t) {
	let n = e[0],
		i = e[1],
		s = e[2],
		o = e[3],
		a = e[4],
		l = e[5],
		c = e[6],
		h = e[7],
		u = e[8],
		f = t[0],
		d = t[1];
	return r[0] = n, r[1] = i, r[2] = s, r[3] = o, r[4] = a, r[5] = l, r[6] = f * n + d * o + c, r[7] = f * i + d * a + h, r[8] = f * s + d * l + u, r
}

function H2(r, e, t) {
	let n = e[0],
		i = e[1],
		s = e[2],
		o = e[3],
		a = e[4],
		l = e[5],
		c = e[6],
		h = e[7],
		u = e[8],
		f = Math.sin(t),
		d = Math.cos(t);
	return r[0] = d * n + f * o, r[1] = d * i + f * a, r[2] = d * s + f * l, r[3] = d * o - f * n, r[4] = d * a - f * i, r[5] = d * l - f * s, r[6] = c, r[7] = h, r[8] = u, r
}

function G2(r, e, t) {
	let n = t[0],
		i = t[1];
	return r[0] = n * e[0], r[1] = n * e[1], r[2] = n * e[2], r[3] = i * e[3], r[4] = i * e[4], r[5] = i * e[5], r[6] = e[6], r[7] = e[7], r[8] = e[8], r
}

function W2(r, e) {
	let t = e[0],
		n = e[1],
		i = e[2],
		s = e[3],
		o = e[4],
		a = e[5],
		l = e[6],
		c = e[7],
		h = e[8],
		u = e[9],
		f = e[10],
		d = e[11],
		p = e[12],
		m = e[13],
		v = e[14],
		g = e[15],
		_ = t * a - n * o,
		w = t * l - i * o,
		x = t * c - s * o,
		y = n * l - i * a,
		b = n * c - s * a,
		S = i * c - s * l,
		D = h * m - u * p,
		O = h * v - f * p,
		z = h * g - d * p,
		P = u * v - f * m,
		M = u * g - d * m,
		E = f * g - d * v,
		R = _ * E - w * M + x * P + y * z - b * O + S * D;
	return R ? (R = 1 / R, r[0] = (a * E - l * M + c * P) * R, r[1] = (l * z - o * E - c * O) * R, r[2] = (o * M - a * z + c * D) * R, r[3] = (i * M - n * E - s * P) * R, r[4] = (t * E - i * z + s * O) * R, r[5] = (n * z - t * M - s * D) * R, r[6] = (m * S - v * b + g * y) * R, r[7] = (v * x - p * S - g * w) * R, r[8] = (p * b - m * x + g * _) * R, r) : null
}
class q2 extends Array {
	constructor(e = 1, t = 0, n = 0, i = 0, s = 1, o = 0, a = 0, l = 0, c = 1) {
		return super(e, t, n, i, s, o, a, l, c), this
	}
	set(e, t, n, i, s, o, a, l, c) {
		return e.length ? this.copy(e) : (B2(this, e, t, n, i, s, o, a, l, c), this)
	}
	translate(e, t = this) {
		return V2(this, t, e), this
	}
	rotate(e, t = this) {
		return H2(this, t, e), this
	}
	scale(e, t = this) {
		return G2(this, t, e), this
	}
	multiply(e, t) {
		return t ? nm(this, e, t) : nm(this, this, e), this
	}
	identity() {
		return k2(this), this
	}
	copy(e) {
		return N2(this, e), this
	}
	fromMatrix4(e) {
		return z2(this, e), this
	}
	fromQuaternion(e) {
		return O2(this, e), this
	}
	fromBasis(e, t, n) {
		return this.set(e[0], e[1], e[2], t[0], t[1], t[2], n[0], n[1], n[2]), this
	}
	inverse(e = this) {
		return U2(this, e), this
	}
	getNormalMatrix(e) {
		return W2(this, e), this
	}
}
let X2 = 0;
class Y0 extends Sc {
	constructor(e, {
		geometry: t,
		program: n,
		mode: i = e.TRIANGLES,
		frustumCulled: s = !0,
		renderOrder: o = 0
	} = {}) {
		super(), e.canvas || console.error("gl not passed as first argument to Mesh"), this.gl = e, this.id = X2++, this.geometry = t, this.program = n, this.mode = i, this.frustumCulled = s, this.renderOrder = o, this.modelViewMatrix = new pr, this.normalMatrix = new q2, this.beforeRenderCallbacks = [], this.afterRenderCallbacks = []
	}
	onBeforeRender(e) {
		return this.beforeRenderCallbacks.push(e), this
	}
	onAfterRender(e) {
		return this.afterRenderCallbacks.push(e), this
	}
	draw({
		camera: e
	} = {}) {
		e && (this.program.uniforms.modelMatrix || Object.assign(this.program.uniforms, {
			modelMatrix: {
				value: null
			},
			viewMatrix: {
				value: null
			},
			modelViewMatrix: {
				value: null
			},
			normalMatrix: {
				value: null
			},
			projectionMatrix: {
				value: null
			},
			cameraPosition: {
				value: null
			}
		}), this.program.uniforms.projectionMatrix.value = e.projectionMatrix, this.program.uniforms.cameraPosition.value = e.worldPosition, this.program.uniforms.viewMatrix.value = e.viewMatrix, this.modelViewMatrix.multiply(e.viewMatrix, this.worldMatrix), this.normalMatrix.getNormalMatrix(this.modelViewMatrix), this.program.uniforms.modelMatrix.value = this.worldMatrix, this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix, this.program.uniforms.normalMatrix.value = this.normalMatrix), this.beforeRenderCallbacks.forEach(n => n && n({
			mesh: this,
			camera: e
		}));
		let t = this.program.cullFace && this.worldMatrix.determinant() < 0;
		this.program.use({
			flipFaces: t
		}), this.geometry.draw({
			mode: this.mode,
			program: this.program
		}), this.afterRenderCallbacks.forEach(n => n && n({
			mesh: this,
			camera: e
		}))
	}
}
const im = new Uint8Array(4);

function rm(r) {
	return (r & r - 1) === 0
}
let Y2 = 1;
class j0 {
	constructor(e, {
		image: t,
		target: n = e.TEXTURE_2D,
		type: i = e.UNSIGNED_BYTE,
		format: s = e.RGBA,
		internalFormat: o = s,
		wrapS: a = e.CLAMP_TO_EDGE,
		wrapT: l = e.CLAMP_TO_EDGE,
		generateMipmaps: c = !0,
		minFilter: h = c ? e.NEAREST_MIPMAP_LINEAR : e.LINEAR,
		magFilter: u = e.LINEAR,
		premultiplyAlpha: f = !1,
		unpackAlignment: d = 4,
		flipY: p = n == e.TEXTURE_2D,
		anisotropy: m = 0,
		level: v = 0,
		width: g,
		height: _ = g
	} = {}) {
		this.gl = e, this.id = Y2++, this.image = t, this.target = n, this.type = i, this.format = s, this.internalFormat = o, this.minFilter = h, this.magFilter = u, this.wrapS = a, this.wrapT = l, this.generateMipmaps = c, this.premultiplyAlpha = f, this.unpackAlignment = d, this.flipY = p, this.anisotropy = Math.min(m, this.gl.renderer.parameters.maxAnisotropy), this.level = v, this.width = g, this.height = _, this.texture = this.gl.createTexture(), this.store = {
			image: null
		}, this.glState = this.gl.renderer.state, this.state = {}, this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR, this.state.magFilter = this.gl.LINEAR, this.state.wrapS = this.gl.REPEAT, this.state.wrapT = this.gl.REPEAT, this.state.anisotropy = 0
	}
	bind() {
		this.glState.textureUnits[this.glState.activeTextureUnit] !== this.id && (this.gl.bindTexture(this.target, this.texture), this.glState.textureUnits[this.glState.activeTextureUnit] = this.id)
	}
	update(e = 0) {
		const t = !(this.image === this.store.image && !this.needsUpdate);
		if ((t || this.glState.textureUnits[e] !== this.id) && (this.gl.renderer.activeTexture(e), this.bind()), !!t) {
			if (this.needsUpdate = !1, this.flipY !== this.glState.flipY && (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY), this.glState.flipY = this.flipY), this.premultiplyAlpha !== this.glState.premultiplyAlpha && (this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha), this.glState.premultiplyAlpha = this.premultiplyAlpha), this.unpackAlignment !== this.glState.unpackAlignment && (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment), this.glState.unpackAlignment = this.unpackAlignment), this.minFilter !== this.state.minFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter), this.state.minFilter = this.minFilter), this.magFilter !== this.state.magFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter), this.state.magFilter = this.magFilter), this.wrapS !== this.state.wrapS && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS), this.state.wrapS = this.wrapS), this.wrapT !== this.state.wrapT && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT), this.state.wrapT = this.wrapT), this.anisotropy && this.anisotropy !== this.state.anisotropy && (this.gl.texParameterf(this.target, this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT, this.anisotropy), this.state.anisotropy = this.anisotropy), this.image) {
				if (this.image.width && (this.width = this.image.width, this.height = this.image.height), this.target === this.gl.TEXTURE_CUBE_MAP)
					for (let n = 0; n < 6; n++) this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + n, this.level, this.internalFormat, this.format, this.type, this.image[n]);
				else if (ArrayBuffer.isView(this.image)) this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image);
				else if (this.image.isCompressedTexture)
					for (let n = 0; n < this.image.length; n++) this.gl.compressedTexImage2D(this.target, n, this.internalFormat, this.image[n].width, this.image[n].height, 0, this.image[n].data);
				else this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image);
				this.generateMipmaps && (!this.gl.renderer.isWebgl2 && (!rm(this.image.width) || !rm(this.image.height)) ? (this.generateMipmaps = !1, this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE, this.minFilter = this.gl.LINEAR) : this.gl.generateMipmap(this.target)), this.onUpdate && this.onUpdate()
			} else if (this.target === this.gl.TEXTURE_CUBE_MAP)
				for (let n = 0; n < 6; n++) this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, im);
			else this.width ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null) : this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, im);
			this.store.image = this.image
		}
	}
}
class Tc extends VA {
	constructor(e, {
		width: t = 1,
		height: n = 1,
		widthSegments: i = 1,
		heightSegments: s = 1,
		attributes: o = {}
	} = {}) {
		const a = i,
			l = s,
			c = (a + 1) * (l + 1),
			h = a * l * 6,
			u = new Float32Array(c * 3),
			f = new Float32Array(c * 3),
			d = new Float32Array(c * 2),
			p = h > 65536 ? new Uint32Array(h) : new Uint16Array(h);
		Tc.buildPlane(u, f, d, p, t, n, 0, a, l), Object.assign(o, {
			position: {
				size: 3,
				data: u
			},
			normal: {
				size: 3,
				data: f
			},
			uv: {
				size: 2,
				data: d
			},
			index: {
				data: p
			}
		}), super(e, o)
	}
	static buildPlane(e, t, n, i, s, o, a, l, c, h = 0, u = 1, f = 2, d = 1, p = -1, m = 0, v = 0) {
		const g = m,
			_ = s / l,
			w = o / c;
		for (let x = 0; x <= c; x++) {
			let y = x * w - o / 2;
			for (let b = 0; b <= l; b++, m++) {
				let S = b * _ - s / 2;
				if (e[m * 3 + h] = S * d, e[m * 3 + u] = y * p, e[m * 3 + f] = a / 2, t[m * 3 + h] = 0, t[m * 3 + u] = 0, t[m * 3 + f] = a >= 0 ? 1 : -1, n[m * 2] = b / l, n[m * 2 + 1] = 1 - x / c, x === c || b === l) continue;
				let D = g + b + x * (l + 1),
					O = g + b + (x + 1) * (l + 1),
					z = g + b + (x + 1) * (l + 1) + 1,
					P = g + b + x * (l + 1) + 1;
				i[v * 6] = D, i[v * 6 + 1] = O, i[v * 6 + 2] = P, i[v * 6 + 3] = O, i[v * 6 + 4] = z, i[v * 6 + 5] = P, v++
			}
		}
	}
}
var sm = !1,
	Ir, Mu, Su, Fl, zl, $0, Ol, Tu, Eu, Au, Z0, Cu, Lu, J0, Q0;

function bn() {
	if (!sm) {
		sm = !0;
		var r = navigator.userAgent,
			e = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(r),
			t = /(Mac OS X)|(Windows)|(Linux)/.exec(r);
		if (Cu = /\b(iPhone|iP[ao]d)/.exec(r), Lu = /\b(iP[ao]d)/.exec(r), Au = /Android/i.exec(r), J0 = /FBAN\/\w+;/i.exec(r), Q0 = /Mobile/i.exec(r), Z0 = !!/Win64/.exec(r), e) {
			Ir = e[1] ? parseFloat(e[1]) : e[5] ? parseFloat(e[5]) : NaN, Ir && document && document.documentMode && (Ir = document.documentMode);
			var n = /(?:Trident\/(\d+.\d+))/.exec(r);
			$0 = n ? parseFloat(n[1]) + 4 : Ir, Mu = e[2] ? parseFloat(e[2]) : NaN, Su = e[3] ? parseFloat(e[3]) : NaN, Fl = e[4] ? parseFloat(e[4]) : NaN, Fl ? (e = /(?:Chrome\/(\d+\.\d+))/.exec(r), zl = e && e[1] ? parseFloat(e[1]) : NaN) : zl = NaN
		} else Ir = Mu = Su = zl = Fl = NaN;
		if (t) {
			if (t[1]) {
				var i = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(r);
				Ol = i ? parseFloat(i[1].replace("_", ".")) : !0
			} else Ol = !1;
			Tu = !!t[2], Eu = !!t[3]
		} else Ol = Tu = Eu = !1
	}
}
var Ru = {
		ie: function() {
			return bn() || Ir
		},
		ieCompatibilityMode: function() {
			return bn() || $0 > Ir
		},
		ie64: function() {
			return Ru.ie() && Z0
		},
		firefox: function() {
			return bn() || Mu
		},
		opera: function() {
			return bn() || Su
		},
		webkit: function() {
			return bn() || Fl
		},
		safari: function() {
			return Ru.webkit()
		},
		chrome: function() {
			return bn() || zl
		},
		windows: function() {
			return bn() || Tu
		},
		osx: function() {
			return bn() || Ol
		},
		linux: function() {
			return bn() || Eu
		},
		iphone: function() {
			return bn() || Cu
		},
		mobile: function() {
			return bn() || Cu || Lu || Au || Q0
		},
		nativeApp: function() {
			return bn() || J0
		},
		android: function() {
			return bn() || Au
		},
		ipad: function() {
			return bn() || Lu
		}
	},
	j2 = Ru,
	wl = !!(typeof window < "u" && window.document && window.document.createElement),
	$2 = {
		canUseDOM: wl,
		canUseWorkers: typeof Worker < "u",
		canUseEventListeners: wl && !!(window.addEventListener || window.attachEvent),
		canUseViewport: wl && !!window.screen,
		isInWorker: !wl
	},
	Z2 = $2,
	K0 = Z2,
	ev;
K0.canUseDOM && (ev = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0);
/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
function J2(r, e) {
	if (!K0.canUseDOM || e && !("addEventListener" in document)) return !1;
	var t = "on" + r,
		n = t in document;
	if (!n) {
		var i = document.createElement("div");
		i.setAttribute(t, "return;"), n = typeof i[t] == "function"
	}
	return !n && ev && r === "wheel" && (n = document.implementation.hasFeature("Events.wheel", "3.0")), n
}
var Q2 = J2,
	K2 = j2,
	e3 = Q2,
	om = 10,
	am = 40,
	lm = 800;

function tv(r) {
	var e = 0,
		t = 0,
		n = 0,
		i = 0;
	return "detail" in r && (t = r.detail), "wheelDelta" in r && (t = -r.wheelDelta / 120), "wheelDeltaY" in r && (t = -r.wheelDeltaY / 120), "wheelDeltaX" in r && (e = -r.wheelDeltaX / 120), "axis" in r && r.axis === r.HORIZONTAL_AXIS && (e = t, t = 0), n = e * om, i = t * om, "deltaY" in r && (i = r.deltaY), "deltaX" in r && (n = r.deltaX), (n || i) && r.deltaMode && (r.deltaMode == 1 ? (n *= am, i *= am) : (n *= lm, i *= lm)), n && !e && (e = n < 1 ? -1 : 1), i && !t && (t = i < 1 ? -1 : 1), {
		spinX: e,
		spinY: t,
		pixelX: n,
		pixelY: i
	}
}
tv.getEventType = function() {
	return K2.firefox() ? "DOMMouseScroll" : e3("wheel") ? "wheel" : "mousewheel"
};
var t3 = tv,
	n3 = t3;
const nv = Df(n3),
	i3 = `
precision highp float;

uniform vec2 uImageSizes;
uniform vec2 uPlaneSizes;
uniform sampler2D tMap;

varying vec2 vUv;

void main() {
  vec2 ratio = vec2(
    min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
    min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
  );

  vec2 uv = vec2(
    vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
    vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
  );

  gl_FragColor.rgb = texture2D(tMap, uv).rgb;
  gl_FragColor.a = 1.0;
}

`,
	r3 = `
#define PI 3.1415926535897932384626433832795

precision highp float;
precision highp int;

attribute vec3 position;
attribute vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

uniform float uStrength;
uniform vec2 uViewportSizes;

varying vec2 vUv;

void main() {
  vec4 newPosition = modelViewMatrix * vec4(position, 1.0);

  newPosition.z += sin(newPosition.y / uViewportSizes.y * PI + PI / 2.0) * -uStrength * 2.0;

  vUv = uv;

  gl_Position = projectionMatrix * newPosition;
}

`;
class s3 {
	constructor({
		element: e,
		geometry: t,
		gl: n,
		height: i,
		scene: s,
		screen: o,
		viewport: a
	}) {
		ne(this, "element");
		ne(this, "image");
		ne(this, "extra");
		ne(this, "height");
		ne(this, "geometry");
		ne(this, "gl");
		ne(this, "screen");
		ne(this, "scene");
		ne(this, "viewport");
		ne(this, "plane");
		ne(this, "bounds");
		ne(this, "isBefore");
		ne(this, "isAfter");
		var l;
		this.element = e, this.image = (l = this.element) == null ? void 0 : l.querySelector("img"), this.extra = 0, this.height = i, this.geometry = t, this.gl = n, this.scene = s, this.screen = o, this.viewport = a, this.isBefore = !1, this.isAfter = !1, this.createMesh(), this.createBounds(), this.onResize()
	}
	createMesh() {
		if (this.gl && this.image) {
			const e = new Image,
				t = new j0(this.gl, {
					generateMipmaps: !1
				});
			e.src = this.image.src, e.onload = i => {
				n.uniforms.uImageSizes.value = [e.naturalWidth, e.naturalHeight], t.image = e
			};
			const n = new G0(this.gl, {
				fragment: i3,
				vertex: r3,
				uniforms: {
					tMap: {
						value: t
					},
					uPlaneSizes: {
						value: [0, 0]
					},
					uImageSizes: {
						value: [0, 0]
					},
					uViewportSizes: {
						value: [this.viewport.width, this.viewport.height]
					},
					uStrength: {
						value: 0
					}
				},
				transparent: !0
			});
			this.plane = new Y0(this.gl, {
				geometry: this.geometry,
				program: n
			}), this.plane.setParent(this.scene)
		}
	}
	createBounds() {
		var e;
		this.bounds = (e = this.element) == null ? void 0 : e.getBoundingClientRect(), this.updateScale(), this.updateX(), this.updateY(), this.plane && (this.plane.program.uniforms.uPlaneSizes.value = [this.plane.scale.x, this.plane.scale.y])
	}
	updateScale() {
		this.plane && (this.plane.scale.x = this.viewport.width * this.bounds.width / this.screen.width, this.plane.scale.y = this.viewport.height * this.bounds.height / this.screen.height)
	}
	updateX(e = 0) {
		this.plane && (this.plane.position.x = -(this.viewport.width / 2) + this.plane.scale.x / 2 + (this.bounds.left - e) / this.screen.width * this.viewport.width)
	}
	updateY(e = 0) {
		this.plane && (this.plane.position.y = this.viewport.height / 2 - this.plane.scale.y / 2 - (this.bounds.top - e) / this.screen.height * this.viewport.height - this.extra)
	}
	update(e, t) {
		this.updateScale(), this.updateX(), this.updateY(e.current);
		const n = (this.plane ? this.plane.scale.y : 1) / 2,
			i = this.viewport.height / 2;
		this.plane && (this.isBefore = this.plane.position.y + n < -i, this.isAfter = this.plane.position.y - n > i), t === "up" && this.isBefore && (this.extra -= this.height, this.isBefore = !1, this.isAfter = !1), t === "down" && this.isAfter && (this.extra += this.height, this.isBefore = !1, this.isAfter = !1), this.plane && (this.plane.program.uniforms.uStrength.value = (e.current - e.last) / this.screen.width * 10)
	}
	onResize(e) {
		if (this.extra = 0, e) {
			const {
				height: t,
				screen: n,
				viewport: i
			} = e;
			t && (this.height = t), n && (this.screen = n), i && (this.viewport = i, this.plane && (this.plane.program.uniforms.uViewportSizes.value = [this.viewport.width, this.viewport.height]))
		}
		this.createBounds()
	}
}
class o3 {
	constructor() {
		ne(this, "scroll");
		ne(this, "speed");
		ne(this, "gallery");
		ne(this, "renderer");
		ne(this, "gl");
		ne(this, "camera");
		ne(this, "scene");
		ne(this, "planeGeometry");
		ne(this, "mediasElements");
		ne(this, "medias");
		ne(this, "galleryHeight");
		ne(this, "isDown");
		ne(this, "start");
		ne(this, "screen");
		ne(this, "viewport");
		ne(this, "galleryBounds");
		ne(this, "direction");
		this.medias = [], this.screen = {
			height: 0,
			width: 0
		}, this.viewport = {
			height: 0,
			width: 0
		}, this.direction = "down", this.scene = null, this.galleryHeight = 0, this.isDown = !1, this.start = 0, this.scroll = {
			ease: .05,
			current: 0,
			target: 0,
			last: 0
		}, this.speed = 2, this.createRenderer(), this.createCamera(), this.createScene(), this.createGallery(), this.onResize(), this.createGeometry(), this.createMedias(), this.update(), this.addEventListeners()
	}
	createGallery() {
		this.gallery = document.querySelector(".lab__gallery")
	}
	createRenderer() {
		var e;
		this.renderer = new W0({
			alpha: !0
		}), this.gl = this.renderer.gl, this.gl.canvas.classList.add("lab__canvas"), document.querySelector(".lab__canvas--wrapper") !== null && ((e = document.querySelector(".lab__canvas--wrapper")) == null || e.appendChild(this.gl.canvas))
	}
	createCamera() {
		this.gl && (this.camera = new X0(this.gl), this.camera.fov = 45, this.camera.position.z = 5)
	}
	createScene() {
		this.scene = new Sc
	}
	createGeometry() {
		this.gl && (this.planeGeometry = new Tc(this.gl, {
			heightSegments: 10
		}))
	}
	createMedias() {
		this.mediasElements = document.querySelectorAll(".lab__gallery__figure"), this.medias = Array.from(this.mediasElements).map(e => new s3({
			element: e,
			geometry: this.planeGeometry,
			gl: this.gl,
			height: this.galleryHeight,
			scene: this.scene,
			screen: this.screen,
			viewport: this.viewport
		}))
	}
	onTouchDown(e) {
		e.preventDefault(), this.isDown = !0, this.scroll.position = this.scroll.current, this.start = e.touches ? e.touches[0].clientY : e.clientY
	}
	onTouchMove(e) {
		if (!this.isDown) return;
		const t = e.touches ? e.touches[0].clientY : e.clientY,
			n = (this.start - t) * 4;
		this.scroll.target = (this.scroll.position ?? 0) + n
	}
	onTouchUp() {
		this.isDown = !1
	}
	onWheel(e) {
		const n = nv(e).pixelY;
		this.scroll.target += n * .4
	}
	onResize() {
		var i, s, o;
		this.screen = {
			height: window.innerHeight,
			width: window.innerWidth
		}, (i = this.renderer) == null || i.setSize(this.screen.width, this.screen.height), (s = this.camera) == null || s.perspective({
			aspect: this.gl ? this.gl.canvas.width / this.gl.canvas.height : 1
		});
		const e = (this.camera ? this.camera.fov : 1) * (Math.PI / 180),
			t = 2 * Math.tan(e / 2) * (this.camera ? this.camera.position.z : 1),
			n = t * (this.camera ? this.camera.aspect : 1);
		this.viewport = {
			height: t,
			width: n
		}, this.galleryBounds = (o = this.gallery) == null ? void 0 : o.getBoundingClientRect(), this.galleryHeight = this.viewport.height * this.galleryBounds.height / this.screen.height, this.medias && this.medias.forEach(a => a.onResize({
			height: this.galleryHeight,
			screen: this.screen,
			viewport: this.viewport
		}))
	}
	update() {
		var e;
		this.scroll.target += this.speed, this.scroll.current = G_(this.scroll.current, this.scroll.target, this.scroll.ease), this.scroll.current > this.scroll.last ? (this.direction = "down", this.speed = 2) : this.scroll.current < this.scroll.last && (this.direction = "up", this.speed = -2), this.medias && this.medias.forEach(t => t.update(this.scroll, this.direction)), (e = this.renderer) == null || e.render({
			scene: this.scene,
			camera: this.camera
		}), this.scroll.last = this.scroll.current, window.requestAnimationFrame(this.update.bind(this))
	}
	addEventListeners() {
		window.addEventListener("resize", this.onResize.bind(this)), window.addEventListener("mousewheel", this.onWheel.bind(this)), window.addEventListener("wheel", this.onWheel.bind(this)), window.addEventListener("mousedown", this.onTouchDown.bind(this)), window.addEventListener("mousemove", this.onTouchMove.bind(this)), window.addEventListener("mouseup", this.onTouchUp.bind(this)), window.addEventListener("touchstart", this.onTouchDown.bind(this)), window.addEventListener("touchmove", this.onTouchMove.bind(this)), window.addEventListener("touchend", this.onTouchUp.bind(this))
	}
	dispose() {
		window.removeEventListener("resize", this.onResize.bind(this)), window.removeEventListener("mousewheel", this.onWheel.bind(this)), window.removeEventListener("wheel", this.onWheel.bind(this)), window.removeEventListener("mouseup", this.onTouchUp.bind(this)), window.removeEventListener("mousedown", this.onTouchDown.bind(this)), window.removeEventListener("mousemove", this.onTouchMove.bind(this)), window.removeEventListener("touchstart", this.onTouchDown.bind(this)), window.removeEventListener("touchmove", this.onTouchMove.bind(this)), window.removeEventListener("touchend", this.onTouchUp.bind(this)), this.gl && this.gl.canvas.remove()
	}
}

function a3(r) {
	var e = typeof r;
	return r != null && (e == "object" || e == "function")
}
var iv = a3,
	l3 = typeof Vo == "object" && Vo && Vo.Object === Object && Vo,
	c3 = l3,
	h3 = c3,
	u3 = typeof self == "object" && self && self.Object === Object && self,
	f3 = h3 || u3 || Function("return this")(),
	rv = f3,
	d3 = rv,
	p3 = function() {
		return d3.Date.now()
	},
	m3 = p3,
	g3 = /\s/;

function _3(r) {
	for (var e = r.length; e-- && g3.test(r.charAt(e)););
	return e
}
var v3 = _3,
	x3 = v3,
	y3 = /^\s+/;

function w3(r) {
	return r && r.slice(0, x3(r) + 1).replace(y3, "")
}
var b3 = w3,
	M3 = rv,
	S3 = M3.Symbol,
	sv = S3,
	cm = sv,
	ov = Object.prototype,
	T3 = ov.hasOwnProperty,
	E3 = ov.toString,
	Po = cm ? cm.toStringTag : void 0;

function A3(r) {
	var e = T3.call(r, Po),
		t = r[Po];
	try {
		r[Po] = void 0;
		var n = !0
	} catch {}
	var i = E3.call(r);
	return n && (e ? r[Po] = t : delete r[Po]), i
}
var C3 = A3,
	L3 = Object.prototype,
	R3 = L3.toString;

function P3(r) {
	return R3.call(r)
}
var D3 = P3,
	hm = sv,
	I3 = C3,
	F3 = D3,
	z3 = "[object Null]",
	O3 = "[object Undefined]",
	um = hm ? hm.toStringTag : void 0;

function N3(r) {
	return r == null ? r === void 0 ? O3 : z3 : um && um in Object(r) ? I3(r) : F3(r)
}
var B3 = N3;

function k3(r) {
	return r != null && typeof r == "object"
}
var U3 = k3,
	V3 = B3,
	H3 = U3,
	G3 = "[object Symbol]";

function W3(r) {
	return typeof r == "symbol" || H3(r) && V3(r) == G3
}
var q3 = W3,
	X3 = b3,
	fm = iv,
	Y3 = q3,
	dm = NaN,
	j3 = /^[-+]0x[0-9a-f]+$/i,
	$3 = /^0b[01]+$/i,
	Z3 = /^0o[0-7]+$/i,
	J3 = parseInt;

function Q3(r) {
	if (typeof r == "number") return r;
	if (Y3(r)) return dm;
	if (fm(r)) {
		var e = typeof r.valueOf == "function" ? r.valueOf() : r;
		r = fm(e) ? e + "" : e
	}
	if (typeof r != "string") return r === 0 ? r : +r;
	r = X3(r);
	var t = $3.test(r);
	return t || Z3.test(r) ? J3(r.slice(2), t ? 2 : 8) : j3.test(r) ? dm : +r
}
var K3 = Q3,
	eC = iv,
	Ph = m3,
	pm = K3,
	tC = "Expected a function",
	nC = Math.max,
	iC = Math.min;

function rC(r, e, t) {
	var n, i, s, o, a, l, c = 0,
		h = !1,
		u = !1,
		f = !0;
	if (typeof r != "function") throw new TypeError(tC);
	e = pm(e) || 0, eC(t) && (h = !!t.leading, u = "maxWait" in t, s = u ? nC(pm(t.maxWait) || 0, e) : s, f = "trailing" in t ? !!t.trailing : f);

	function d(b) {
		var S = n,
			D = i;
		return n = i = void 0, c = b, o = r.apply(D, S), o
	}

	function p(b) {
		return c = b, a = setTimeout(g, e), h ? d(b) : o
	}

	function m(b) {
		var S = b - l,
			D = b - c,
			O = e - S;
		return u ? iC(O, s - D) : O
	}

	function v(b) {
		var S = b - l,
			D = b - c;
		return l === void 0 || S >= e || S < 0 || u && D >= s
	}

	function g() {
		var b = Ph();
		if (v(b)) return _(b);
		a = setTimeout(g, m(b))
	}

	function _(b) {
		return a = void 0, f && n ? d(b) : (n = i = void 0, o)
	}

	function w() {
		a !== void 0 && clearTimeout(a), c = 0, n = l = i = a = void 0
	}

	function x() {
		return a === void 0 ? o : _(Ph())
	}

	function y() {
		var b = Ph(),
			S = v(b);
		if (n = arguments, i = this, l = b, S) {
			if (a === void 0) return p(l);
			if (u) return clearTimeout(a), a = setTimeout(g, e), d(l)
		}
		return a === void 0 && (a = setTimeout(g, e)), o
	}
	return y.cancel = w, y.flush = x, y
}
var sC = rC;
const oC = Df(sC),
	mm = "/Images/Toast&Tonic/Signs-01.jpg",
	gm = "/Images/Toast&Tonic/Signs-02.jpg",
	_m = "/projects/01/3.webp",
	vm = "/projects/01/4.webp",
	xm = "/projects/01/5.webp",
	ym = "/projects/01/6.webp",
	wm = "/projects/01/7.webp",
	bm = "/projects/01/8.webp",
	Mm = "/projects/02/1.webp",
	Sm = "/projects/02/2.webp",
	Tm = "/projects/02/3.webp",
	Em = "/projects/02/4.webp",
	Am = "/projects/02/5.webp",
	Cm = "/projects/02/6.webp",
	Lm = "/projects/02/7.webp",
	Rm = "/projects/03/1.webp",
	Pm = "/projects/03/2.webp",
	Dm = "/projects/03/3.webp",
	Im = "/projects/03/4.webp",
	Fm = "/projects/03/5.webp",
	zm = "/projects/03/6.webp",
	Om = "/projects/03/7.webp",
	Nm = "/projects/04/1.webp",
	Bm = "/projects/04/2.webp",
	km = "/projects/04/3.webp",
	Um = "/projects/04/4.webp",
	Vm = "/projects/04/5.webp",
	Hm = "/projects/05/1.webp",
	Gm = "/projects/05/2.webp",
	Wm = "/projects/05/3.webp",
	qm = "/projects/05/4.webp",
	Xm = "/projects/05/5.webp",
	Ym = "/projects/05/6.webp",
	jm = "/projects/06/1.webp",
	$m = "/projects/06/2.webp",
	Zm = "/projects/06/3.webp",
	Jm = "/projects/06/4.webp",
	Qm = "/projects/06/5.webp",
	Km = "/projects/06/6.webp",
	aC = {
		1: [{
			image: mm
		}, {
			image: gm
		}, {
			image: _m
		}, {
			image: vm
		}, {
			image: bm
		}, {
			image: ym
		}, {
			image: wm
		}, {
			image: xm
		}, {
			image: mm
		}, {
			image: gm
		}, {
			image: _m
		}, {
			image: vm
		}, {
			image: bm
		}, {
			image: ym
		}, {
			image: wm
		}, {
			image: xm
		}],
		2: [{
			image: Mm
		}, {
			image: Sm
		}, {
			image: Tm
		}, {
			image: Em
		}, {
			image: Am
		}, {
			image: Cm
		}, {
			image: Lm
		}, {
			image: Mm
		}, {
			image: Sm
		}, {
			image: Tm
		}, {
			image: Em
		}, {
			image: Am
		}, {
			image: Cm
		}, {
			image: Lm
		}],
		3: [{
			image: Rm
		}, {
			image: Pm
		}, {
			image: Dm
		}, {
			image: Im
		}, {
			image: Fm
		}, {
			image: zm
		}, {
			image: Om
		}, {
			image: Rm
		}, {
			image: Pm
		}, {
			image: Dm
		}, {
			image: Im
		}, {
			image: Fm
		}, {
			image: zm
		}, {
			image: Om
		}],
		4: [{
			image: Nm
		}, {
			image: Bm
		}, {
			image: km
		}, {
			image: Um
		}, {
			image: Vm
		}, {
			image: Nm
		}, {
			image: Bm
		}, {
			image: km
		}, {
			image: Um
		}, {
			image: Vm
		}],
		5: [{
			image: Hm
		}, {
			image: Gm
		}, {
			image: Wm
		}, {
			image: qm
		}, {
			image: Xm
		}, {
			image: Ym
		}, {
			image: Hm
		}, {
			image: Gm
		}, {
			image: Wm
		}, {
			image: qm
		}, {
			image: Xm
		}, {
			image: Ym
		}],
		6: [{
			image: jm
		}, {
			image: $m
		}, {
			image: Zm
		}, {
			image: Jm
		}, {
			image: Qm
		}, {
			image: Km
		}, {
			image: jm
		}, {
			image: $m
		}, {
			image: Zm
		}, {
			image: Jm
		}, {
			image: Qm
		}, {
			image: Km
		}]
	},
	lC = `
precision highp float;
 
uniform vec2 uImageSizes;
uniform vec2 uPlaneSizes;
uniform sampler2D tMap;
 
varying vec2 vUv;
 
void main() {
  vec2 ratio = vec2(
    min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
    min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
  );
 
  vec2 uv = vec2(
    vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
    vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
  );
 
  gl_FragColor.rgb = texture2D(tMap, uv).rgb;
  gl_FragColor.a = 1.0;
}
`,
	cC = `
precision highp float;
 
attribute vec3 position;
attribute vec2 uv;
 
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

uniform float uStrength;
uniform vec2 uViewportSizes;

uniform vec2 uOffset;
 
varying vec2 vUv;

float PI = 3.141529;

vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset) {
  position.x += sin(uv.y * PI) * offset.x;
  position.y += sin(uv.x * PI) * offset.y;

  return position;
}
 
void main() {
  // vUv = uv;
 
  // vec3 p = deformationCurve(position, uv, uOffset);
 
  // gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);

  vec4 newPosition = modelViewMatrix * vec4(position, 1.0);

  newPosition.z += sin(newPosition.x / uViewportSizes.x * PI + PI / 2.0) * -uStrength * 2.0;

  vUv = uv;

  gl_Position = projectionMatrix * newPosition;
}
`;
class hC {
	constructor({
		geometry: e,
		gl: t,
		image: n,
		index: i,
		length: s,
		scene: o,
		screen: a,
		viewport: l
	}) {
		ne(this, "image");
		ne(this, "index");
		ne(this, "length");
		ne(this, "scale");
		ne(this, "padding");
		ne(this, "width");
		ne(this, "widthTotal");
		ne(this, "x");
		ne(this, "extra");
		ne(this, "geometry");
		ne(this, "gl");
		ne(this, "screen");
		ne(this, "scene");
		ne(this, "viewport");
		ne(this, "plane");
		ne(this, "bounds");
		ne(this, "offset");
		ne(this, "isBefore");
		ne(this, "isAfter");
		ne(this, "program");
		this.extra = 0, this.scale = 0, this.padding = .5, this.width = 0, this.widthTotal = 0, this.x = 0, this.geometry = e, this.gl = t, this.image = n, this.index = i, this.length = s, this.scene = o, this.screen = a, this.viewport = l, this.offset = [0, 0], this.isBefore = !1, this.isAfter = !1, this.createShader(), this.createMesh(), this.onResize()
	}
	createShader() {
		var e, t;
		if (this.gl) {
			const n = new j0(this.gl, {
				generateMipmaps: !1
			});
			this.program = new G0(this.gl, {
				fragment: lC,
				vertex: cC,
				uniforms: {
					tMap: {
						value: n
					},
					uPlaneSizes: {
						value: [0, 0]
					},
					uImageSizes: {
						value: [0, 0]
					},
					uViewportSizes: {
						value: [((e = this.viewport) == null ? void 0 : e.width) ?? 0, ((t = this.viewport) == null ? void 0 : t.height) ?? 0]
					},
					uStrength: {
						value: 0
					},
					uSpeed: {
						value: 0
					},
					uTime: {
						value: 0
					},
					uOffset: {
						value: [0, 0]
					}
				},
				transparent: !0
			});
			const i = new Image;
			i.src = this.image, i.onload = s => {
				n.image = i, this.program && (this.program.uniforms.uImageSizes.value = [i.naturalWidth, i.naturalHeight])
			}
		}
	}
	createMesh() {
		this.gl && (this.plane = new Y0(this.gl, {
			geometry: this.geometry,
			program: this.program
		}), this.scene && this.plane.setParent(this.scene))
	}
	onResize({
		screen: e,
		viewport: t
	} = {}) {
		var n;
		e && (this.screen = e), t && this.plane && (this.viewport = t, this.plane.program.uniforms.uViewportSizes.value = [this.viewport.width, this.viewport.height]), this.scale = (((n = this.screen) == null ? void 0 : n.height) ?? 0) / 550, this.plane && (this.viewport && this.screen && (this.plane.scale.y = this.viewport.height * (488 * this.scale) / this.screen.height, this.plane.scale.x = this.viewport.width * (650 * this.scale) / this.screen.width), this.plane.program.uniforms.uPlaneSizes.value = [this.plane.scale.x, this.plane.scale.y], this.width = this.plane.scale.x + this.padding, this.widthTotal = this.width * this.length), this.x = this.width * this.index
	}
	update(e, t) {
		var n, i;
		if (this.plane) {
			this.plane.position.x = this.x - e.current - this.extra;
			const s = this.plane.scale.x / 2,
				o = ((n = this.viewport) == null ? void 0 : n.width) ?? 0;
			this.isBefore = this.plane.position.x + s < -o, this.isAfter = this.plane.position.x - s > o, t === "right" && this.isBefore && (this.extra -= this.widthTotal, this.isBefore = !1, this.isAfter = !1), t === "left" && this.isAfter && (this.extra += this.widthTotal, this.isBefore = !1, this.isAfter = !1), this.plane.program.uniforms.uStrength.value = (e.current - e.last) / (((i = this.screen) == null ? void 0 : i.width) ?? 1) * (so() ? 300 : 2e3)
		}
	}
	dispose() {}
}

function uC(r, e, t) {
	return r + (e - r) * t
}
class fC {
	constructor(e) {
		ne(this, "scroll");
		ne(this, "parentNode");
		ne(this, "container");
		ne(this, "renderer");
		ne(this, "gl");
		ne(this, "camera");
		ne(this, "scene");
		ne(this, "planeGeometry");
		ne(this, "mediasElements");
		ne(this, "onCheckDebounce");
		ne(this, "mediasImages");
		ne(this, "medias");
		ne(this, "isDown");
		ne(this, "start");
		ne(this, "screen");
		ne(this, "viewport");
		ne(this, "direction");
		this.scroll = {
			ease: .05,
			current: 0,
			target: 0,
			last: 0
		}, this.parentNode = e, this.container = e.querySelector(".work-details__gallery__container"), this.onCheckDebounce = oC(this.onCheck, 200), this.mediasImages = [], this.medias = [], this.isDown = !1, this.start = 0, this.createRenderer(), this.createCamera(), this.createScene(), this.onResize(), this.createGeometry(), this.createMedias(), this.update(), this.addEventListeners()
	}
	createRenderer() {
		this.renderer = new W0({
			alpha: !0
		}), this.gl = this.renderer.gl, this.gl.clearColor(0, 0, 0, 0), this.container && this.container.appendChild(this.gl.canvas)
	}
	createCamera() {
		this.gl && (this.camera = new X0(this.gl), this.camera.fov = 45, this.camera.position.z = 20)
	}
	createScene() {
		this.scene = new Sc
	}
	createGeometry() {
		this.gl && (this.planeGeometry = new Tc(this.gl, {
			heightSegments: 50,
			widthSegments: 100
		}))
	}
	createMedias() {
		const e = parseInt(this.parentNode.querySelector(".work-details").dataset.project || "0");
		this.mediasImages = aC[e], this.medias = this.mediasImages.map(({
			image: t
		}, n) => new hC({
			geometry: this.planeGeometry,
			gl: this.gl,
			image: t,
			index: n,
			length: this.mediasImages.length,
			scene: this.scene,
			screen: this.screen,
			viewport: this.viewport
		}))
	}
	onTouchDown(e) {
		this.isDown = !0, this.scroll.position = this.scroll.current, this.start = e.touches ? e.touches[0].clientX : e.clientX
	}
	onTouchMove(e) {
		if (e.type === "touchmove" && e.preventDefault(), !this.isDown) return;
		const t = e.touches ? e.touches[0].clientX : e.clientX,
			n = (this.start - t) * (so() ? .15 : .07);
		this.scroll.position !== void 0 && (this.scroll.target = this.scroll.position + n)
	}
	onTouchUp() {
		this.isDown = !1, this.onCheck()
	}
	onWheel(e) {
		const n = nv(e).pixelY;
		this.scroll.target += n * .025, this.onCheckDebounce()
	}
	onResize() {
		var i, s, o, a, l, c, h, u, f;
		this.screen = {
			height: (((i = this.container) == null ? void 0 : i.getBoundingClientRect().height) ?? 0) / .66375,
			width: ((s = this.container) == null ? void 0 : s.getBoundingClientRect().width) ?? 0
		}, (o = this.renderer) == null || o.setSize(this.screen.width, this.screen.height), (c = this.camera) == null || c.perspective({
			aspect: (((a = this.gl) == null ? void 0 : a.canvas.width) ?? 0) / (((l = this.gl) == null ? void 0 : l.canvas.height) ?? 0)
		});
		const e = (((h = this.camera) == null ? void 0 : h.fov) ?? 0) * (Math.PI / 180),
			t = 2 * Math.tan(e / 2) * (((u = this.camera) == null ? void 0 : u.position.z) ?? 0) / 1.5,
			n = t * (((f = this.camera) == null ? void 0 : f.aspect) ?? 0);
		this.viewport = {
			height: t,
			width: n
		}, this.medias && this.medias.forEach(d => d.onResize({
			screen: this.screen,
			viewport: this.viewport
		}))
	}
	onCheck() {
		const {
			width: e
		} = this.medias[0], t = Math.round(Math.abs(this.scroll.target) / e), n = e * t;
		this.scroll.target < 0 ? this.scroll.target = -n : this.scroll.target = n
	}
	update() {
		var e;
		this.scroll.current = uC(this.scroll.current, this.scroll.target, this.scroll.ease), this.scroll.current > this.scroll.last ? this.direction = "right" : this.direction = "left", this.medias && this.medias.forEach(t => t.update(this.scroll, this.direction)), (e = this.renderer) == null || e.render({
			scene: this.scene,
			camera: this.camera
		}), this.scroll.last = this.scroll.current, window.requestAnimationFrame(this.update.bind(this))
	}
	addEventListeners() {
		var e, t, n, i, s, o;
		window.addEventListener("resize", this.onResize.bind(this)), window.addEventListener("wheel", this.onWheel.bind(this)), (e = this.container) == null || e.addEventListener("mousedown", this.onTouchDown.bind(this)), (t = this.container) == null || t.addEventListener("mousemove", this.onTouchMove.bind(this)), (n = this.container) == null || n.addEventListener("mouseup", this.onTouchUp.bind(this)), (i = this.container) == null || i.addEventListener("touchstart", this.onTouchDown.bind(this)), (s = this.container) == null || s.addEventListener("touchmove", this.onTouchMove.bind(this)), (o = this.container) == null || o.addEventListener("touchend", this.onTouchUp.bind(this))
	}
	dispose() {
		var e, t, n, i, s, o;
		window.removeEventListener("resize", this.onResize.bind(this)), window.removeEventListener("wheel", this.onWheel.bind(this)), (e = this.container) == null || e.removeEventListener("mousedown", this.onTouchDown.bind(this)), (t = this.container) == null || t.removeEventListener("mousemove", this.onTouchMove.bind(this)), (n = this.container) == null || n.removeEventListener("mouseup", this.onTouchUp.bind(this)), (i = this.container) == null || i.removeEventListener("touchstart", this.onTouchDown.bind(this)), (s = this.container) == null || s.removeEventListener("touchmove", this.onTouchMove.bind(this)), (o = this.container) == null || o.removeEventListener("touchend", this.onTouchUp.bind(this)), this.medias.forEach(a => a.dispose())
	}
}
const ro = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let If = "rough({ template: circ.easeOut, strength: 4, points: 50, taper: 'out', randomize: true, clamp:  true})";
const _n = (r, e, t = {}) => {
		let {
			duration: n,
			delay: i
		} = {
			duration: t.duration || .08,
			delay: t.delay || .3
		};
		r.to(e.hasAttribute("data-splitting") ? e.querySelectorAll(".word") : e, {
			duration: 1,
			opacity: 1,
			stagger: {
				each: n,
				from: "random"
			},
			ease: If
		}, i), e.hasAttribute("data-triangle") && r.to(e, {
			"--triangle-opacity": 1,
			duration: 1
		}, "<")
	},
	es = (r, e, t = {}) => {
		let {
			duration: n,
			delay: i
		} = {
			duration: t.duration || .08,
			delay: t.delay || 0
		};
		const s = e.querySelectorAll(".char");
		s.forEach((o, a) => {
			let l = o.innerHTML;
			r.fromTo(o, {
				opacity: 0
			}, {
				duration: .03,
				innerHTML: () => ro[Math.floor(Math.random() * ro.length)],
				repeat: 1,
				repeatRefresh: !0,
				opacity: 1,
				repeatDelay: .03,
				onComplete: () => {
					tt.set(o, {
						innerHTML: l,
						delay: .03
					})
				}
			}, (a + 1) * n + i), e.hasAttribute("data-triangle") && r.to(e, {
				"--triangle-opacity": 1,
				duration: 1
			}, (s.length + 2) * n)
		})
	},
	dC = () => {
		const r = document.querySelector(".header"),
			e = tt.timeline();
		e.to(".header__logo", {
			opacity: 1
		}), es(e, r == null ? void 0 : r.querySelector(".header__baseline")), r == null || r.querySelectorAll(".header__nav__el").forEach((t, n) => {
			_n(e, t, {
				delay: (n + 1) * .4
			})
		})
	},
	pC = () => {
		const r = document.querySelector(".footer"),
			e = tt.timeline({
				scrollTrigger: {
					trigger: r,
					start: "top bottom",
					end: "bottom center"
				}
			});
		e.to(r, {
			opacity: 1
		}), r != null && r.querySelector(".footer__title") && _n(e, r == null ? void 0 : r.querySelector(".footer__title")), r != null && r.querySelector(".footer__location") && es(e, r == null ? void 0 : r.querySelector(".footer__location")), r != null && r.querySelector(".footer__mail a") && _n(e, r == null ? void 0 : r.querySelector(".footer__mail a")), r != null && r.querySelector(".footer__time > span:first-child") && es(e, r == null ? void 0 : r.querySelector(".footer__time > span:first-child")), r != null && r.querySelector(".footer__time > span:last-child") && _n(e, r == null ? void 0 : r.querySelector(".footer__time > span:last-child")), r == null || r.querySelectorAll(".footer__socials__el a").forEach((t, n) => {
			_n(e, t, {
				delay: (n + 1) * .25
			})
		})
	},
	mC = () => {
		document.querySelectorAll("[data-section-animation]").forEach(n => {
			n.querySelectorAll("[data-section-text-animation]").forEach((s, o) => {
				s.dataset.speed, tt.timeline({
					scrollTrigger: {
						trigger: s,
						start: "top bottom",
						end: "bottom center+=200px"
					},
					delay: n.hasAttribute("data-delay-animation") ? (o + 1) * .3 : .2
				}).fromTo(s, {
					opacity: 0
				}, {
					opacity: 1,
					onStart: () => {
						s.querySelectorAll("[data-image]").forEach(a => {
							a.imageHover.regenerateGrid()
						}), s.hasAttribute("data-image") && s.imageHover.regenerateGrid()
					}
				})
			})
		}), document.querySelectorAll("[data-splitting][data-title-animation]").forEach(n => {
			n.querySelectorAll(".char").forEach((s, o) => {
				let a = s.innerHTML;
				tt.fromTo(s, {
					opacity: 0
				}, {
					duration: .03,
					innerHTML: () => ro[Math.floor(Math.random() * ro.length)],
					repeat: 1,
					repeatRefresh: !0,
					opacity: 1,
					repeatDelay: .03,
					delay: (o + 1) * .08,
					onComplete: () => {
						tt.set(s, {
							innerHTML: a,
							delay: .03
						})
					},
					scrollTrigger: {
						trigger: n,
						start: "top bottom",
						end: "bottom center"
					}
				})
			}), tt.to(n, {
				"--triangle-opacity": 1,
				duration: 1,
				delay: 1.3,
				scrollTrigger: {
					trigger: n,
					start: "top bottom",
					end: "bottom center"
				}
			})
		}), document.querySelectorAll("[data-text-animation]").forEach(n => {
			const i = n.dataset.textAnimationDuration ?? .09;
			tt.timeline({
				scrollTrigger: {
					trigger: n,
					start: "top bottom",
					end: "bottom center"
				}
			}).to(n.querySelectorAll(".word"), {
				opacity: 1,
				duration: 1,
				stagger: {
					each: i,
					from: "random"
				},
				ease: If
			}, .3), tt.to(n, {
				"--triangle-opacity": 1,
				duration: 1,
				delay: 1,
				scrollTrigger: {
					trigger: n,
					start: "top bottom",
					end: "bottom center"
				}
			})
		})
	},
	gC = () => {
		if (!so()) {
			let e = [];
			[...document.querySelectorAll(".thumbgrid__wrap > .thumbgrid")].forEach(i => {
				e.push(new SA(i))
			});
			const t = document.querySelector(".list");
			let n = [];
			t && [...t.querySelectorAll(".list__el")].forEach((i, s) => {
				n.push(new MA(i, e[s]))
			}), n.forEach(i => {
				i.DOM.el && (i.DOM.el.addEventListener("mouseenter", () => {
					i.mouseEnterTimeout !== null && clearTimeout(i.mouseEnterTimeout), i.leaveTL && i.leaveTL.kill(), i.mouseEnterTimeout = setTimeout(() => {
						i.thumbGrid.DOM.el && i.thumbGrid.DOM.el.classList.add("thumbgrid--current"), i.enterTL = tt.timeline({
							defaults: {
								duration: .5,
								ease: "expo"
							}
						}).addLabel("start", 0).fromTo(i.thumbGrid.DOM.items, {
							opacity: 0,
							scale: .5
						}, {
							stagger: .045,
							opacity: 1,
							scale: 1
						}, "start")
					}, 20)
				}), i.DOM.el.addEventListener("mouseleave", () => {
					i.mouseEnterTimeout !== null && clearTimeout(i.mouseEnterTimeout), i.mouseLeaveTimeout !== null && clearTimeout(i.mouseLeaveTimeout), i.enterTL && i.enterTL.kill(), i.mouseLeaveTimeout = setTimeout(() => {
						i.thumbGrid.DOM.el && i.thumbGrid.DOM.el.classList.remove("thumbgrid--current"), i.leaveTL = tt.timeline({
							defaults: {
								duration: .3,
								ease: "power3"
							}
						}).addLabel("start", 0).to(i.thumbGrid.DOM.items, {
							opacity: 0,
							scale: .5
						}, "start")
					}, 20)
				}))
			})
		}
		document.querySelectorAll("[data-section-animation]").forEach(e => {
			e.querySelectorAll("[data-section-text-animation]").forEach((n, i) => {
				const s = tt.timeline({
					delay: (i + .5) * .4
				});
				s.to(n, {
					duration: .6,
					opacity: 1
				}), n.querySelectorAll("[data-splitting][data-title-animation]").forEach(l => {
					l.dataset.textAnimationDuration, l.querySelectorAll(".char").forEach((h, u) => {
						let f = h.innerHTML;
						s.fromTo(h, {
							opacity: 0
						}, {
							duration: .03,
							innerHTML: () => ro[Math.floor(Math.random() * ro.length)],
							repeat: 1,
							repeatRefresh: !0,
							opacity: 1,
							repeatDelay: .03,
							delay: (u + 1) * .001,
							onComplete: () => {
								tt.set(h, {
									innerHTML: f,
									delay: .03
								})
							}
						}, "<")
					})
				}), n.querySelectorAll("[data-text-animation]").forEach(l => {
					s.to(l.querySelectorAll(".word"), {
						opacity: 1,
						duration: 1,
						stagger: {
							each: .09,
							from: "random"
						},
						ease: If
					}).to(l, {
						"--triangle-opacity": 1,
						duration: 1,
						scrollTrigger: {
							trigger: l,
							start: "top bottom",
							end: "bottom center"
						}
					}, ">")
				})
			})
		})
	};
let Nl = null;
const _C = () => {
		Nl && (Nl.dispose(), Nl = null)
	},
	vC = (r = document.body) => {
		Nl = new fC(r);
		const e = tt.timeline();
		es(e, r.querySelector(".work-details__title")), e.fromTo(r.querySelector(".work-details__gallery"), {
			opacity: 0
		}, {
			opacity: 1,
			duration: 1
		}, .8), r.querySelectorAll(".work-details__header > p").forEach((t, n) => {
			es(e, t, {
				delay: (n + 2) * .3
			})
		}), _n(e, r.querySelector(".work-details__description"), {
			delay: 1
		}), r.querySelector(".work-details__link") && _n(e, r.querySelector(".work-details__link"), {
			delay: 1.6
		}), r.querySelectorAll(".work-details__nav > a, .work-details__nav ul li").forEach((t, n) => {
			_n(e, t, {
				delay: (n + 2) * .3
			})
		}), e.to(r.querySelector(".work-details__nav"), {
			"--lines-opacity": 1,
			duration: 1
		}, "<"), _n(e, r.querySelector(".work-details__back"), {
			delay: 2
		}), _n(e, r.querySelector("hr"), {
			delay: 2.3
		})
	};
let Bl = null;
const xC = () => {
		Bl && (Bl.dispose(), Bl = null)
	},
	yC = () => {
		document.querySelector("canvas.lab__canvas") || (Bl = new o3), document.documentElement.classList.remove("no-js"), document.documentElement.classList.add("js");
		const r = document.querySelectorAll('img:not([src*="https://tympanus.net/codrops/wp-content/banners/"])');
		let e = 0;
		Array.from(r).forEach(n => {
			const i = new Image;
			i.src = n.src, i.onload = s => {
				e += 1, e === r.length && document.documentElement.classList.remove("loading")
			}
		});
		const t = tt.timeline();
		es(t, document.querySelector(".lab__title")), t.to(".lab__canvas", {
			opacity: 1
		}), _n(t, document.querySelector(".lab__text"))
	},
	wC = () => {
		const r = tt.timeline();
		_n(r, document.querySelector(".error-page__title")), es(r, document.querySelector(".error-page__subtitle")), _n(r, document.querySelector(".error-page__text"), {
			delay: .6
		}), _n(r, document.querySelector(".error-page__link"), {
			delay: .9
		})
	};
tt.registerPlugin(He);
tt.registerPlugin(Ks);
const bC = new yy;

function av(r) {
	bC.raf(r), requestAnimationFrame(av)
}
requestAnimationFrame(av);
const MC = () => {
	document.querySelectorAll("[data-tilt]").forEach(r => {
		My(r, !0)
	})
};
let Pu = [];
const SC = () => {
		document.querySelectorAll("[data-image]").forEach(r => {
			const e = new wA({
				dom: r
			});
			r.imageHover = e, Pu.push(e)
		})
	},
	so = () => /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
	Do = (r = null) => {
		SC(), so() || MC();
		const e = document.querySelector(".header");
		let t = window.scrollY;
		window.addEventListener("scroll", () => {
			let n = window.scrollY;
			t > n || n <= window.innerHeight / 2 ? e == null || e.classList.remove("header--hidden") : t < n && (e == null || e.classList.add("header--hidden")), t = window.scrollY
		}), dC(), pC(), r && r()
	},
	eg = () => {
		document.querySelectorAll(".header a").forEach(r => {
			r.addEventListener("click", e => {
				e.currentTarget.href === window.location.href && (e.preventDefault(), e.stopPropagation())
			})
		}), Bv.init({
			transitions: [{
				name: "transition",
				async leave(r) {
					return _C(), xC(), He.getAll().forEach(t => {
						t.kill()
					}), Pu.forEach(t => {
						t.dispose()
					}), Pu = [], document.body.style.overflow = "", document.body.classList.remove("error-page"), tt.to(r.current.container, {
						opacity: 0,
						onComplete: () => {
							var t;
							return (t = r.current.container.querySelector(".footer")) == null ? void 0 : t.remove()
						}
					})
				}
			}],
			views: [{
				namespace: "home",
				afterEnter() {
					return window.scrollTo({
						top: 0
					}), He.getAll().forEach(e => {
						e.kill()
					}), Ls(), Rs(), tt.timeline().set(Zi, {
						transform: "translate(0, 100%) scaleY(1)"
					}).to(Zi, {
						transform: "translate(0, 0) scaleY(0)",
						duration: 1.6,
						ease: "power3.inOut",
						onComplete: () => {
							Do(mC), He.refresh(!0)
						}
					})
				}
			}, {
				namespace: "404",
				afterEnter() {
					return Ls(), Rs(), document.body.classList.add("error-page"), Do(wC)
				}
			}, {
				namespace: "works",
				afterEnter() {
					return window.scrollTo({
						top: 0
					}), He.getAll().forEach(e => {
						e.kill()
					}), Ls(), Rs(), tt.timeline().set(Zi, {
						transform: "translate(0, 100%) scaleY(1)"
					}).to(Zi, {
						transform: "translate(0, 0) scaleY(0)",
						duration: 1.6,
						ease: "power3.inOut",
						onComplete: () => {
							Do(gC), He.refresh(!0)
						}
					})
				}
			}, {
				namespace: "work-details",
				afterEnter(r) {
					return window.scrollTo({
						top: 0
					}), He.getAll().forEach(t => {
						t.kill()
					}), Ls(), Rs(), tt.timeline().set(Zi, {
						transform: "translate(0, 100%) scaleY(1)"
					}).to(Zi, {
						transform: "translate(0, 0) scaleY(0)",
						duration: 1.6,
						ease: "power3.inOut",
						onComplete: () => {
							Do(() => vC(r.next.container)), He.refresh(!0)
						}
					})
				}
			}, {
				namespace: "design-lab",
				afterEnter() {
					return window.scrollTo({
						top: 0
					}), He.getAll().forEach(e => {
						e.kill()
					}), Ls(), Rs(), document.body.style.overflow = "hidden", tt.timeline().set(Zi, {
						transform: "translate(0, 100%) scaleY(1)"
					}).to(Zi, {
						transform: "translate(0, 0) scaleY(0)",
						duration: 1.6,
						ease: "power3.inOut",
						onComplete: () => {
							Do(yC), He.refresh(!0)
						}
					})
				}
			}]
		})
	},
	Rs = () => {
		tt.set([".header__logo", ".header__baseline .char", ".header__nav__el .word", ".header__nav__el:not([data-splitting])", ".footer__title .word", ".footer__location .char", ".footer__mail a .word", ".footer__time > span:first-child .char", ".footer__time > span:last-child .word", ".footer__socials__el a .word", "[data-section-text-animation]", "[data-splitting][data-title-animation] .char", "[data-text-animation] .word", ".work-details__title .char", ".work-details__gallery", ".work-details__header > p .char", ".work-details__description .word", ".work-details__link .word", ".work-details__nav > a", ".work-details__nav ul li", ".work-details__back .word", ".work-details hr", ".lab__title .char", ".lab__text .word", ".lab__canvas", ".error-page__title .word", ".error-page__text .word", ".error-page__subtitle .char", ".error-page__link"], {
			opacity: 0
		}), tt.set("[data-triangle]", {
			"--triangle-opacity": 0
		})
	},
	Zi = document.querySelector(".transition"),
	TC = () => {
		const r = document.querySelector(".loading");
		if (r) {
			let e = 0;
			const t = r == null ? void 0 : r.querySelectorAll(".loading__digits span"),
				n = document.querySelector(".loading__logo");
			_n(tt.timeline(), n), Ls(), Rs();
			const i = setInterval(() => {
				t == null || t.forEach(s => s.innerHTML = `${e}`), e++, e === 101 && (clearInterval(i), r.style.translate = "0 -100%", r.style.opacity = "0", eg())
			}, 10)
		} else eg()
	},
	EC = () => {
		TC()
	};
EC();
// Function to set the initial scroll position to the original content
function setInitialScrollPosition(scrollableSection) {
    const totalScrollWidth = scrollableSection.scrollWidth / 3;
    scrollableSection.scrollLeft = totalScrollWidth; // Set scroll to start of original content
}

// Function to handle the infinite scroll behavior
function handleScroll(scrollableSection) {
    const scrollSpeed = 1; // You can adjust this value

    scrollableSection.addEventListener('wheel', function(event) {
        event.preventDefault();

        // Scroll horizontally based on wheel event
        scrollableSection.scrollBy({
            left: -event.deltaY * scrollSpeed, // Multiply to increase scroll speed
            behavior: 'auto'  // Immediate scroll for smooth looping
        });

        // Get the total scrollable width (excluding clones)
        const totalScrollWidth = scrollableSection.scrollWidth / 3;

        // Adjust scroll position for infinite loop
        if (scrollableSection.scrollLeft >= 2 * totalScrollWidth) {
            scrollableSection.scrollLeft = totalScrollWidth; // Loop back to original content
        } else if (scrollableSection.scrollLeft <= 0) {
            scrollableSection.scrollLeft = totalScrollWidth; // Loop forward to original content
        }
    });
}

// Initialize scrollable section and attach events
function initScrollFeature() {
    const scrollableSection = document.getElementById('scrollable-section');
    
    if (scrollableSection) {
        // Set initial scroll position
        setInitialScrollPosition(scrollableSection);

        // Set up scroll behavior
        handleScroll(scrollableSection);
    }
}

// Observer to detect DOM changes (useful in SPAs or dynamic content loading)
function observeDOMChanges() {
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type === 'childList') {
                const scrollableSection = document.getElementById('scrollable-section');
                if (scrollableSection && !scrollableSection.getAttribute('data-initialized')) {
                    scrollableSection.setAttribute('data-initialized', 'true');
                    initScrollFeature(); // Re-initialize the feature
                }
            }
        }
    });

    // Start observing the document body for changes
    observer.observe(document.body, {
        childList: true,  // Watch for additions/removals of child nodes
        subtree: true     // Watch for all nodes within the body
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    initScrollFeature();
    observeDOMChanges();  // Start observing the DOM
});

// Re-initialize on back/forward navigation
window.addEventListener('popstate', initScrollFeature);
function openModal(imageElement) {
    // Get the modal and image inside the modal
    var modal = document.getElementById("imageModal");
    var fullImage = document.getElementById("fullImage");
    
    // Set the modal image source to the clicked thumbnail's source
    fullImage.src = imageElement.src;
    
    // Display the modal
    modal.style.display = "flex";
  }
  function closeModal() {
      // Hide the modal
      document.getElementById("imageModal").style.display = "none";
  }
