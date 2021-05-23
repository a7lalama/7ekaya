!function(a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a);
    } : b(a);
}("undefined" != typeof window ? window : this, function(a, b) {
    "use strict";
    var c = [], d = Object.getPrototypeOf, e = c.slice, f = c.flat ? function(a) {
        return c.flat.call(a);
    } : function(a) {
        return c.concat.apply([], a);
    }, g = c.push, h = c.indexOf, i = {}, j = i.toString, k = i.hasOwnProperty, l = k.toString, m = l.call(Object), n = {}, o = function(a) {
        return "function" == typeof a && "number" != typeof a.nodeType;
    }, p = function(a) {
        return null != a && a === a.window;
    }, q = a.document, r = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function s(a, b, c) {
        var d, e, f = (c = c || q).createElement("script");
        if (f.text = a, b) for (d in r) (e = b[d] || b.getAttribute && b.getAttribute(d)) && f.setAttribute(d, e);
        c.head.appendChild(f).parentNode.removeChild(f);
    }
    function t(a) {
        return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a;
    }
    var u = "3.5.1", v = function(a, b) {
        return new v.fn.init(a, b);
    };
    function w(a) {
        var b = !!a && "length" in a && a.length, c = t(a);
        return !o(a) && !p(a) && ("array" === c || 0 === b || "number" == typeof b && 0 < b && b - 1 in a);
    }
    v.fn = v.prototype = {
        jquery: u,
        constructor: v,
        length: 0,
        toArray: function() {
            return e.call(this);
        },
        get: function(a) {
            return null == a ? e.call(this) : a < 0 ? this[a + this.length] : this[a];
        },
        pushStack: function(a) {
            var b = v.merge(this.constructor(), a);
            return b.prevObject = this, b;
        },
        each: function(a) {
            return v.each(this, a);
        },
        map: function(a) {
            return this.pushStack(v.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        even: function() {
            return this.pushStack(v.grep(this, function(a, b) {
                return (b + 1) % 2;
            }));
        },
        odd: function() {
            return this.pushStack(v.grep(this, function(a, b) {
                return b % 2;
            }));
        },
        eq: function(a) {
            var b = this.length, c = +a + (a < 0 ? b : 0);
            return this.pushStack(0 <= c && c < b ? [ this[c] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, v.extend = v.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || o(g) || (g = {}), 
        h === i && (g = this, h--); h < i; h++) if (null != (a = arguments[h])) for (b in a) d = a[b], 
        "__proto__" !== b && g !== d && (j && d && (v.isPlainObject(d) || (e = Array.isArray(d))) ? (c = g[b], 
        f = e && !Array.isArray(c) ? [] : e || v.isPlainObject(c) ? c : {}, e = !1, g[b] = v.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g;
    }, v.extend({
        expando: "jQuery" + (u + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a);
        },
        noop: function() {},
        isPlainObject: function(a) {
            var b, c;
            return !(!a || "[object Object]" !== j.call(a)) && (!(b = d(a)) || "function" == typeof (c = k.call(b, "constructor") && b.constructor) && l.call(c) === m);
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0;
        },
        globalEval: function(a, b, c) {
            s(a, {
                nonce: b && b.nonce
            }, c);
        },
        each: function(a, b) {
            var c, d = 0;
            if (w(a)) {
                for (c = a.length; d < c; d++) if (!1 === b.call(a[d], d, a[d])) break;
            } else for (d in a) if (!1 === b.call(a[d], d, a[d])) break;
            return a;
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (w(Object(a)) ? v.merge(c, "string" == typeof a ? [ a ] : a) : g.call(c, a)), 
            c;
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : h.call(b, a, c);
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            for (var d = [], e = 0, f = a.length, g = !c; e < f; e++) !b(a[e], e) !== g && d.push(a[e]);
            return d;
        },
        map: function(a, b, c) {
            var d, e, g = 0, h = [];
            if (w(a)) for (d = a.length; g < d; g++) null != (e = b(a[g], g, c)) && h.push(e); else for (g in a) null != (e = b(a[g], g, c)) && h.push(e);
            return f(h);
        },
        guid: 1,
        support: n
    }), "function" == typeof Symbol && (v.fn[Symbol.iterator] = c[Symbol.iterator]), 
    v.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase();
    });
    var x = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date(), v = a.document, w = 0, x = 0, y = ib(), z = ib(), A = ib(), B = ib(), C = function(a, b) {
            return a === b && (l = !0), 0;
        }, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
            for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
            return -1;
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\[\\da-fA-F]{1,6}" + L + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+", N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]", O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)", P = new RegExp(L + "+", "g"), Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), R = new RegExp("^" + L + "*," + L + "*"), S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), T = new RegExp(L + "|>"), U = new RegExp(O), V = new RegExp("^" + M + "$"), W = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M + "|[*])"),
            ATTR: new RegExp("^" + N),
            PSEUDO: new RegExp("^" + O),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
        }, X = /HTML$/i, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = new RegExp("\\\\[\\da-fA-F]{1,6}" + L + "?|\\\\([^\\r\\n\\f])", "g"), cb = function(a, b) {
            var c = "0x" + a.slice(1) - 65536;
            return b || (c < 0 ? String.fromCharCode(c + 65536) : String.fromCharCode(c >> 10 | 55296, 1023 & c | 56320));
        }, db = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, eb = function(a, b) {
            return b ? "\x00" === a ? "�" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
        }, fb = function() {
            m();
        }, gb = ub(function(a) {
            return !0 === a.disabled && "fieldset" === a.nodeName.toLowerCase();
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
        } catch (b) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b));
                } : function(a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]) ;
                    a.length = c - 1;
                }
            };
        }
        function hb(a, b, d, e) {
            var f, h, j, k, l, o, r, s = b && b.ownerDocument, v = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== v && 9 !== v && 11 !== v) return d;
            if (!e && (m(b), b = b || n, p)) {
                if (11 !== v && (l = _.exec(a))) if (f = l[1]) {
                    if (9 === v) {
                        if (!(j = b.getElementById(f))) return d;
                        if (j.id === f) return d.push(j), d;
                    } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), 
                    d;
                } else {
                    if (l[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                    if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), 
                    d;
                }
                if (c.qsa && !B[a + " "] && (!q || !q.test(a)) && (1 !== v || "object" !== b.nodeName.toLowerCase())) {
                    if (r = a, s = b, 1 === v && (T.test(a) || S.test(a))) {
                        (s = ab.test(a) && rb(b.parentNode) || b) === b && c.scope || ((k = b.getAttribute("id")) ? k = k.replace(db, eb) : b.setAttribute("id", k = u)), 
                        h = (o = g(a)).length;
                        while (h--) o[h] = (k ? "#" + k : ":scope") + " " + tb(o[h]);
                        r = o.join(",");
                    }
                    try {
                        return H.apply(d, s.querySelectorAll(r)), d;
                    } catch (b) {
                        B(a, !0);
                    } finally {
                        k === u && b.removeAttribute("id");
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e);
        }
        function ib() {
            var a = [];
            return function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
            };
        }
        function jb(a) {
            return a[u] = !0, a;
        }
        function kb(a) {
            var b = n.createElement("fieldset");
            try {
                return !!a(b);
            } catch (a) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function lb(a, b) {
            var c = a.split("|"), e = c.length;
            while (e--) d.attrHandle[c[e]] = b;
        }
        function mb(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (d) return d;
            if (c) while (c = c.nextSibling) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function nb(a) {
            return function(b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a;
            };
        }
        function ob(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function pb(a) {
            return function(b) {
                return "form" in b ? b.parentNode && !1 === b.disabled ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && gb(b) === a : b.disabled === a : "label" in b && b.disabled === a;
            };
        }
        function qb(a) {
            return jb(function(b) {
                return b = +b, jb(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function rb(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }
        for (b in c = hb.support = {}, f = hb.isXML = function(a) {
            var b = a.namespaceURI, c = (a.ownerDocument || a).documentElement;
            return !X.test(b || c && c.nodeName || "HTML");
        }, m = hb.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g != n && 9 === g.nodeType && g.documentElement && (o = (n = g).documentElement, 
            p = !f(n), v != n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", fb, !1) : e.attachEvent && e.attachEvent("onunload", fb)), 
            c.scope = kb(function(a) {
                return o.appendChild(a).appendChild(n.createElement("div")), "undefined" != typeof a.querySelectorAll && !a.querySelectorAll(":scope fieldset div").length;
            }), c.attributes = kb(function(a) {
                return a.className = "i", !a.getAttribute("className");
            }), c.getElementsByTagName = kb(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
            }), c.getElementsByClassName = $.test(n.getElementsByClassName), c.getById = kb(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
            }), c.getById ? (d.filter.ID = function(a) {
                var b = a.replace(bb, cb);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }, d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [ c ] : [];
                }
            }) : (d.filter.ID = function(a) {
                var b = a.replace(bb, cb);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }, d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c, d, e, f = b.getElementById(a);
                    if (f) {
                        if ((c = f.getAttributeNode("id")) && c.value === a) return [ f ];
                        e = b.getElementsByName(a), d = 0;
                        while (f = e[d++]) if ((c = f.getAttributeNode("id")) && c.value === a) return [ f ];
                    }
                    return [];
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a);
            }, r = [], q = [], (c.qsa = $.test(n.querySelectorAll)) && (kb(function(a) {
                var b;
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), 
                a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), 
                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), (b = n.createElement("input")).setAttribute("name", ""), 
                a.appendChild(b), a.querySelectorAll("[name='']").length || q.push("\\[" + L + "*name" + L + "*=" + L + "*(?:''|\"\")"), 
                a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]"), 
                a.querySelectorAll("\\\f"), q.push("[\\r\\n\\f]");
            }), kb(function(a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), 
                2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), 
                o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), 
                a.querySelectorAll("*,:x"), q.push(",.*:");
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && kb(function(a) {
                c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", O);
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), 
            b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) while (b = b.parentNode) if (b === a) return !0;
                return !1;
            }, C = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d || (1 & (d = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1) || !c.sortDetached && b.compareDocumentPosition(a) === d ? a == n || a.ownerDocument == v && t(v, a) ? -1 : b == n || b.ownerDocument == v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, g = [ a ], h = [ b ];
                if (!e || !f) return a == n ? -1 : b == n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return mb(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? mb(g[d], h[d]) : g[d] == v ? -1 : h[d] == v ? 1 : 0;
            }), n;
        }, hb.matches = function(a, b) {
            return hb(a, null, null, b);
        }, hb.matchesSelector = function(a, b) {
            if (m(a), c.matchesSelector && p && !B[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (a) {
                B(b, !0);
            }
            return 0 < hb(b, n, null, [ a ]).length;
        }, hb.contains = function(a, b) {
            return (a.ownerDocument || a) != n && m(a), t(a, b);
        }, hb.attr = function(a, b) {
            (a.ownerDocument || a) != n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        }, hb.escape = function(a) {
            return (a + "").replace(db, eb);
        }, hb.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, hb.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(C), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1);
            }
            return k = null, a;
        }, e = hb.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
                } else if (3 === f || 4 === f) return a.nodeValue;
            } else while (b = a[d++]) c += e(b);
            return c;
        }, (d = hb.selectors = {
            cacheLength: 50,
            createPseudo: jb,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(bb, cb), a[3] = (a[3] || a[4] || a[5] || "").replace(bb, cb), 
                    "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || hb.error(a[0]), 
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && hb.error(a[0]), 
                    a;
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), 
                    a[2] = c.slice(0, b)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(bb, cb).toLowerCase();
                    return "*" === a ? function() {
                        return !0;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = hb.attr(d, a);
                        return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && -1 < e.indexOf(c) : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? -1 < (" " + e.replace(P, " ") + " ").indexOf(c) : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"));
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p]) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                t = (n = (j = (k = (l = (m = q)[u] || (m[u] = {}))[m.uniqueID] || (l[m.uniqueID] = {}))[a] || [])[0] === w && j[1]) && j[2], 
                                m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if (1 === m.nodeType && ++t && m === b) {
                                    k[a] = [ w, n, t ];
                                    break;
                                }
                            } else if (s && (t = n = (j = (k = (l = (m = b)[u] || (m[u] = {}))[m.uniqueID] || (l[m.uniqueID] = {}))[a] || [])[0] === w && j[1]), 
                            !1 === t) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && ((k = (l = m[u] || (m[u] = {}))[m.uniqueID] || (l[m.uniqueID] = {}))[a] = [ w, t ]), 
                            m === b)) break;
                            return (t -= e) === d || t % d == 0 && 0 <= t / d;
                        }
                    };
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || hb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : 1 < e.length ? (c = [ a, a, "", b ], d.setFilters.hasOwnProperty(a.toLowerCase()) ? jb(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--) a[d = J(a, f[g])] = !(c[d] = f[g]);
                    }) : function(a) {
                        return e(a, 0, c);
                    }) : e;
                }
            },
            pseudos: {
                not: jb(function(a) {
                    var b = [], c = [], d = h(a.replace(Q, "$1"));
                    return d[u] ? jb(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
                    };
                }),
                has: jb(function(a) {
                    return function(b) {
                        return 0 < hb(a, b).length;
                    };
                }),
                contains: jb(function(a) {
                    return a = a.replace(bb, cb), function(b) {
                        return -1 < (b.textContent || e(b)).indexOf(a);
                    };
                }),
                lang: jb(function(a) {
                    return V.test(a || "") || hb.error("unsupported lang: " + a), a = a.replace(bb, cb).toLowerCase(), 
                    function(b) {
                        var c;
                        do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === o;
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: pb(!1),
                disabled: pb(!0),
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected;
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !d.pseudos.empty(a);
                },
                header: function(a) {
                    return Z.test(a.nodeName);
                },
                input: function(a) {
                    return Y.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                },
                first: qb(function() {
                    return [ 0 ];
                }),
                last: qb(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: qb(function(a, b, c) {
                    return [ c < 0 ? c + b : c ];
                }),
                even: qb(function(a, b) {
                    for (var c = 0; c < b; c += 2) a.push(c);
                    return a;
                }),
                odd: qb(function(a, b) {
                    for (var c = 1; c < b; c += 2) a.push(c);
                    return a;
                }),
                lt: qb(function(a, b, c) {
                    for (var d = c < 0 ? c + b : b < c ? b : c; 0 <= --d; ) a.push(d);
                    return a;
                }),
                gt: qb(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; ++d < b; ) a.push(d);
                    return a;
                })
            }
        }).pseudos.nth = d.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) d.pseudos[b] = nb(b);
        for (b in {
            submit: !0,
            reset: !0
        }) d.pseudos[b] = ob(b);
        function sb() {}
        function tb(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
            return d;
        }
        function ub(a, b, c) {
            var d = b.dir, e = b.next, f = e || d, g = c && "parentNode" === f, h = x++;
            return b.first ? function(b, c, e) {
                while (b = b[d]) if (1 === b.nodeType || g) return a(b, c, e);
                return !1;
            } : function(b, c, i) {
                var j, k, l, m = [ w, h ];
                if (i) {
                    while (b = b[d]) if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
                } else while (b = b[d]) if (1 === b.nodeType || g) if (k = (l = b[u] || (b[u] = {}))[b.uniqueID] || (l[b.uniqueID] = {}), 
                e && e === b.nodeName.toLowerCase()) b = b[d] || b; else {
                    if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];
                    if ((k[f] = m)[2] = a(b, c, i)) return !0;
                }
                return !1;
            };
        }
        function vb(a) {
            return 1 < a.length ? function(b, c, d) {
                var e = a.length;
                while (e--) if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function wb(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) (f = a[h]) && (c && !c(f, d, e) || (g.push(f), 
            j && b.push(h)));
            return g;
        }
        function xb(a, b, c, d, e, f) {
            return d && !d[u] && (d = xb(d)), e && !e[u] && (e = xb(e, f)), jb(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || function(a, b, c) {
                    for (var d = 0, e = b.length; d < e; d++) hb(a, b[d], c);
                    return c;
                }(b || "*", h.nodeType ? [ h ] : h, []), q = !a || !f && b ? p : wb(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = wb(r, n), d(j, [], h, i), k = j.length;
                    while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--) (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i);
                        }
                        k = r.length;
                        while (k--) (l = r[k]) && -1 < (j = e ? J(f, l) : m[k]) && (f[j] = !(g[j] = l));
                    }
                } else r = wb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
            });
        }
        function yb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ub(function(a) {
                return a === b;
            }, h, !0), l = ub(function(a) {
                return -1 < J(b, a);
            }, h, !0), m = [ function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e;
            } ]; i < f; i++) if (c = d.relative[a[i].type]) m = [ ub(vb(m), c) ]; else {
                if ((c = d.filter[a[i].type].apply(null, a[i].matches))[u]) {
                    for (e = ++i; e < f; e++) if (d.relative[a[e].type]) break;
                    return xb(1 < i && vb(m), 1 < i && tb(a.slice(0, i - 1).concat({
                        value: " " === a[i - 2].type ? "*" : ""
                    })).replace(Q, "$1"), c, i < e && yb(a.slice(i, e)), e < f && yb(a = a.slice(e)), e < f && tb(a));
                }
                m.push(c);
            }
            return vb(m);
        }
        return sb.prototype = d.filters = d.pseudos, d.setFilters = new sb(), g = hb.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                for (g in c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), 
                c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length)), d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), 
                f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break;
            }
            return b ? h.length : h ? hb.error(a) : z(a, i).slice(0);
        }, h = hb.compile = function(a, b) {
            var c, e, f, h, i, k, l = [], o = [], q = A[a + " "];
            if (!q) {
                b || (b = g(a)), c = b.length;
                while (c--) (q = yb(b[c]))[u] ? l.push(q) : o.push(q);
                (q = A(a, (e = o, h = 0 < (f = l).length, i = 0 < e.length, k = function(a, b, c, g, k) {
                    var l, o, q, r = 0, s = "0", t = a && [], u = [], v = j, x = a || i && d.find.TAG("*", k), y = w += null == v ? 1 : Math.random() || .1, z = x.length;
                    for (k && (j = b == n || b || k); s !== z && null != (l = x[s]); s++) {
                        if (i && l) {
                            o = 0, b || l.ownerDocument == n || (m(l), c = !p);
                            while (q = e[o++]) if (q(l, b || n, c)) {
                                g.push(l);
                                break;
                            }
                            k && (w = y);
                        }
                        h && ((l = !q && l) && r--, a && t.push(l));
                    }
                    if (r += s, h && s !== r) {
                        o = 0;
                        while (q = f[o++]) q(t, u, b, c);
                        if (a) {
                            if (0 < r) while (s--) t[s] || u[s] || (u[s] = F.call(g));
                            u = wb(u);
                        }
                        H.apply(g, u), k && !a && 0 < u.length && 1 < r + f.length && hb.uniqueSort(g);
                    }
                    return k && (w = y, j = v), t;
                }, h ? jb(k) : k))).selector = a;
            }
            return q;
        }, i = hb.select = function(a, b, c, e) {
            var f, i, j, k, l, m = "function" == typeof a && a, n = !e && g(a = m.selector || a);
            if (c = c || [], 1 === n.length) {
                if (2 < (i = n[0] = n[0].slice(0)).length && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
                    if (!(b = (d.find.ID(j.matches[0].replace(bb, cb), b) || [])[0])) return c;
                    m && (b = b.parentNode), a = a.slice(i.shift().value.length);
                }
                f = W.needsContext.test(a) ? 0 : i.length;
                while (f--) {
                    if (j = i[f], d.relative[k = j.type]) break;
                    if ((l = d.find[k]) && (e = l(j.matches[0].replace(bb, cb), ab.test(i[0].type) && rb(b.parentNode) || b))) {
                        if (i.splice(f, 1), !(a = e.length && tb(i))) return H.apply(c, e), c;
                        break;
                    }
                }
            }
            return (m || h(a, n))(e, b, !p, c, !b || ab.test(a) && rb(b.parentNode) || b), c;
        }, c.sortStable = u.split("").sort(C).join("") === u, c.detectDuplicates = !!l, 
        m(), c.sortDetached = kb(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
        }), kb(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || lb("type|href|height|width", function(a, b, c) {
            if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), c.attributes && kb(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || lb("value", function(a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
        }), kb(function(a) {
            return null == a.getAttribute("disabled");
        }) || lb(K, function(a, b, c) {
            var d;
            if (!c) return !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), hb;
    }(a);
    v.find = x, v.expr = x.selectors, v.expr[":"] = v.expr.pseudos, v.uniqueSort = v.unique = x.uniqueSort, 
    v.text = x.getText, v.isXMLDoc = x.isXML, v.contains = x.contains, v.escapeSelector = x.escape;
    var y = function(a, b, c) {
        var d = [], e = void 0 !== c;
        while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
            if (e && v(a).is(c)) break;
            d.push(a);
        }
        return d;
    }, z = function(a, b) {
        for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
        return c;
    }, A = v.expr.match.needsContext;
    function B(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }
    var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function D(a, b, c) {
        return o(b) ? v.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c;
        }) : b.nodeType ? v.grep(a, function(a) {
            return a === b !== c;
        }) : "string" != typeof b ? v.grep(a, function(a) {
            return -1 < h.call(b, a) !== c;
        }) : v.filter(b, a, c);
    }
    v.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? v.find.matchesSelector(d, a) ? [ d ] : [] : v.find.matches(a, v.grep(b, function(a) {
            return 1 === a.nodeType;
        }));
    }, v.fn.extend({
        find: function(a) {
            var b, c, d = this.length, e = this;
            if ("string" != typeof a) return this.pushStack(v(a).filter(function() {
                for (b = 0; b < d; b++) if (v.contains(e[b], this)) return !0;
            }));
            for (c = this.pushStack([]), b = 0; b < d; b++) v.find(a, e[b], c);
            return 1 < d ? v.uniqueSort(c) : c;
        },
        filter: function(a) {
            return this.pushStack(D(this, a || [], !1));
        },
        not: function(a) {
            return this.pushStack(D(this, a || [], !0));
        },
        is: function(a) {
            return !!D(this, "string" == typeof a && A.test(a) ? v(a) : a || [], !1).length;
        }
    });
    var E, F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (v.fn.init = function(a, b, c) {
        var d, e;
        if (!a) return this;
        if (c = c || E, "string" == typeof a) {
            if (!(d = "<" === a[0] && ">" === a[a.length - 1] && 3 <= a.length ? [ null, a, null ] : F.exec(a)) || !d[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (d[1]) {
                if (b = b instanceof v ? b[0] : b, v.merge(this, v.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : q, !0)), 
                C.test(d[1]) && v.isPlainObject(b)) for (d in b) o(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
                return this;
            }
            return (e = q.getElementById(d[2])) && (this[0] = e, this.length = 1), this;
        }
        return a.nodeType ? (this[0] = a, this.length = 1, this) : o(a) ? void 0 !== c.ready ? c.ready(a) : a(v) : v.makeArray(a, this);
    }).prototype = v.fn, E = v(q);
    var G = /^(?:parents|prev(?:Until|All))/, H = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function I(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType) ;
        return a;
    }
    v.fn.extend({
        has: function(a) {
            var b = v(a, this), c = b.length;
            return this.filter(function() {
                for (var a = 0; a < c; a++) if (v.contains(this, b[a])) return !0;
            });
        },
        closest: function(a, b) {
            var c, d = 0, e = this.length, f = [], g = "string" != typeof a && v(a);
            if (!A.test(a)) for (;d < e; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? -1 < g.index(c) : 1 === c.nodeType && v.find.matchesSelector(c, a))) {
                f.push(c);
                break;
            }
            return this.pushStack(1 < f.length ? v.uniqueSort(f) : f);
        },
        index: function(a) {
            return a ? "string" == typeof a ? h.call(v(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            return this.pushStack(v.uniqueSort(v.merge(this.get(), v(a, b))));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    }), v.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return y(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return y(a, "parentNode", c);
        },
        next: function(a) {
            return I(a, "nextSibling");
        },
        prev: function(a) {
            return I(a, "previousSibling");
        },
        nextAll: function(a) {
            return y(a, "nextSibling");
        },
        prevAll: function(a) {
            return y(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return y(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return y(a, "previousSibling", c);
        },
        siblings: function(a) {
            return z((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return z(a.firstChild);
        },
        contents: function(a) {
            return null != a.contentDocument && d(a.contentDocument) ? a.contentDocument : (B(a, "template") && (a = a.content || a), 
            v.merge([], a.childNodes));
        }
    }, function(a, b) {
        v.fn[a] = function(c, d) {
            var e = v.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = v.filter(d, e)), 
            1 < this.length && (H[a] || v.uniqueSort(e), G.test(a) && e.reverse()), this.pushStack(e);
        };
    });
    var J = /[^\x20\t\r\n\f]+/g;
    function K(a) {
        return a;
    }
    function L(a) {
        throw a;
    }
    function M(a, b, c, d) {
        var e;
        try {
            a && o(e = a.promise) ? e.call(a).done(b).fail(c) : a && o(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [ a ].slice(d));
        } catch (a) {
            c.apply(void 0, [ a ]);
        }
    }
    v.Callbacks = function(a) {
        var b, c;
        a = "string" == typeof a ? (b = a, c = {}, v.each(b.match(J) || [], function(a, b) {
            c[b] = !0;
        }), c) : v.extend({}, a);
        var d, e, f, g, h = [], i = [], j = -1, k = function() {
            for (g = g || a.once, f = d = !0; i.length; j = -1) {
                e = i.shift();
                while (++j < h.length) !1 === h[j].apply(e[0], e[1]) && a.stopOnFalse && (j = h.length, 
                e = !1);
            }
            a.memory || (e = !1), d = !1, g && (h = e ? [] : "");
        }, l = {
            add: function() {
                return h && (e && !d && (j = h.length - 1, i.push(e)), function b(c) {
                    v.each(c, function(c, d) {
                        o(d) ? a.unique && l.has(d) || h.push(d) : d && d.length && "string" !== t(d) && b(d);
                    });
                }(arguments), e && !d && k()), this;
            },
            remove: function() {
                return v.each(arguments, function(a, b) {
                    var c;
                    while (-1 < (c = v.inArray(b, h, c))) h.splice(c, 1), c <= j && j--;
                }), this;
            },
            has: function(a) {
                return a ? -1 < v.inArray(a, h) : 0 < h.length;
            },
            empty: function() {
                return h && (h = []), this;
            },
            disable: function() {
                return g = i = [], h = e = "", this;
            },
            disabled: function() {
                return !h;
            },
            lock: function() {
                return g = i = [], e || d || (h = e = ""), this;
            },
            locked: function() {
                return !!g;
            },
            fireWith: function(a, b) {
                return g || (b = [ a, (b = b || []).slice ? b.slice() : b ], i.push(b), d || k()), 
                this;
            },
            fire: function() {
                return l.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!f;
            }
        };
        return l;
    }, v.extend({
        Deferred: function(b) {
            var c = [ [ "notify", "progress", v.Callbacks("memory"), v.Callbacks("memory"), 2 ], [ "resolve", "done", v.Callbacks("once memory"), v.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", v.Callbacks("once memory"), v.Callbacks("once memory"), 1, "rejected" ] ], d = "pending", e = {
                state: function() {
                    return d;
                },
                always: function() {
                    return f.done(arguments).fail(arguments), this;
                },
                "catch": function(a) {
                    return e.then(null, a);
                },
                pipe: function() {
                    var a = arguments;
                    return v.Deferred(function(b) {
                        v.each(c, function(c, d) {
                            var e = o(a[d[4]]) && a[d[4]];
                            f[d[1]](function() {
                                var a = e && e.apply(this, arguments);
                                a && o(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [ a ] : arguments);
                            });
                        }), a = null;
                    }).promise();
                },
                then: function(b, d, e) {
                    var f = 0;
                    function g(b, c, d, e) {
                        return function() {
                            var h = this, i = arguments, j = function() {
                                var a, j;
                                if (!(b < f)) {
                                    if ((a = d.apply(h, i)) === c.promise()) throw new TypeError("Thenable self-resolution");
                                    j = a && ("object" == typeof a || "function" == typeof a) && a.then, o(j) ? e ? j.call(a, g(f, c, K, e), g(f, c, L, e)) : (f++, 
                                    j.call(a, g(f, c, K, e), g(f, c, L, e), g(f, c, K, c.notifyWith))) : (d !== K && (h = void 0, 
                                    i = [ a ]), (e || c.resolveWith)(h, i));
                                }
                            }, k = e ? j : function() {
                                try {
                                    a();
                                } catch (a) {
                                    v.Deferred.exceptionHook && v.Deferred.exceptionHook(a, k.stackTrace), f <= b + 1 && (d !== L && (h = void 0, 
                                    i = [ a ]), c.rejectWith(h, i));
                                }
                            };
                            b ? k() : (v.Deferred.getStackHook && (k.stackTrace = v.Deferred.getStackHook()), 
                            a.setTimeout(k));
                        };
                    }
                    return v.Deferred(function(a) {
                        c[0][3].add(g(0, a, o(e) ? e : K, a.notifyWith)), c[1][3].add(g(0, a, o(b) ? b : K)), 
                        c[2][3].add(g(0, a, o(d) ? d : L));
                    }).promise();
                },
                promise: function(a) {
                    return null != a ? v.extend(a, e) : e;
                }
            }, f = {};
            return v.each(c, function(a, b) {
                var g = b[2], h = b[5];
                e[b[1]] = g.add, h && g.add(function() {
                    d = h;
                }, c[3 - a][2].disable, c[3 - a][3].disable, c[0][2].lock, c[0][3].lock), g.add(b[3].fire), 
                f[b[0]] = function() {
                    return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
                }, f[b[0] + "With"] = g.fireWith;
            }), e.promise(f), b && b.call(f, f), f;
        },
        when: function(a) {
            var b = arguments.length, c = b, d = Array(c), f = e.call(arguments), g = v.Deferred(), h = function(a) {
                return function(c) {
                    d[a] = this, f[a] = 1 < arguments.length ? e.call(arguments) : c, --b || g.resolveWith(d, f);
                };
            };
            if (b <= 1 && (M(a, g.done(h(c)).resolve, g.reject, !b), "pending" === g.state() || o(f[c] && f[c].then))) return g.then();
            while (c--) M(f[c], h(c), g.reject);
            return g.promise();
        }
    });
    var N = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    v.Deferred.exceptionHook = function(b, c) {
        a.console && a.console.warn && b && N.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
    }, v.readyException = function(b) {
        a.setTimeout(function() {
            throw b;
        });
    };
    var O = v.Deferred();
    function P() {
        q.removeEventListener("DOMContentLoaded", P), a.removeEventListener("load", P), 
        v.ready();
    }
    v.fn.ready = function(a) {
        return O.then(a)["catch"](function(a) {
            v.readyException(a);
        }), this;
    }, v.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(a) {
            (!0 === a ? --v.readyWait : v.isReady) || (v.isReady = !0) !== a && 0 < --v.readyWait || O.resolveWith(q, [ v ]);
        }
    }), v.ready.then = O.then, "complete" === q.readyState || "loading" !== q.readyState && !q.documentElement.doScroll ? a.setTimeout(v.ready) : (q.addEventListener("DOMContentLoaded", P), 
    a.addEventListener("load", P));
    var Q = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === t(c)) for (h in e = !0, c) Q(a, b, h, c[h], !0, f, g); else if (void 0 !== d && (e = !0, 
        o(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
            return j.call(v(a), c);
        })), b)) for (;h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    }, R = /^-ms-/, S = /-([a-z])/g;
    function T(a, b) {
        return b.toUpperCase();
    }
    function U(a) {
        return a.replace(R, "ms-").replace(S, T);
    }
    var V = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
    function W() {
        this.expando = v.expando + W.uid++;
    }
    W.uid = 1, W.prototype = {
        cache: function(a) {
            var b = a[this.expando];
            return b || (b = {}, V(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b;
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[U(b)] = c; else for (d in b) e[U(d)] = b[d];
            return e;
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][U(b)];
        },
        access: function(a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), 
            void 0 !== c ? c : b);
        },
        remove: function(a, b) {
            var c, d = a[this.expando];
            if (void 0 !== d) {
                if (void 0 !== b) {
                    c = (b = Array.isArray(b) ? b.map(U) : (b = U(b)) in d ? [ b ] : b.match(J) || []).length;
                    while (c--) delete d[b[c]];
                }
                (void 0 === b || v.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !v.isEmptyObject(b);
        }
    };
    var X = new W(), Y = new W(), Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, $ = /[A-Z]/g;
    function _(a, b, c) {
        var d, e;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace($, "-$&").toLowerCase(), 
        "string" == typeof (c = a.getAttribute(d))) {
            try {
                c = "true" === (e = c) || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e);
            } catch (a) {}
            Y.set(a, b, c);
        } else c = void 0;
        return c;
    }
    v.extend({
        hasData: function(a) {
            return Y.hasData(a) || X.hasData(a);
        },
        data: function(a, b, c) {
            return Y.access(a, b, c);
        },
        removeData: function(a, b) {
            Y.remove(a, b);
        },
        _data: function(a, b, c) {
            return X.access(a, b, c);
        },
        _removeData: function(a, b) {
            X.remove(a, b);
        }
    }), v.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = Y.get(f), 1 === f.nodeType && !X.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && 0 === (d = g[c].name).indexOf("data-") && (d = U(d.slice(5)), 
                    _(f, d, e[d]));
                    X.set(f, "hasDataAttrs", !0);
                }
                return e;
            }
            return "object" == typeof a ? this.each(function() {
                Y.set(this, a);
            }) : Q(this, function(b) {
                var c;
                if (f && void 0 === b) return void 0 !== (c = Y.get(f, a)) ? c : void 0 !== (c = _(f, a)) ? c : void 0;
                this.each(function() {
                    Y.set(this, a, b);
                });
            }, null, b, 1 < arguments.length, null, !0);
        },
        removeData: function(a) {
            return this.each(function() {
                Y.remove(this, a);
            });
        }
    }), v.extend({
        queue: function(a, b, c) {
            var d;
            if (a) return b = (b || "fx") + "queue", d = X.get(a, b), c && (!d || Array.isArray(c) ? d = X.access(a, b, v.makeArray(c)) : d.push(c)), 
            d || [];
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = v.queue(a, b), d = c.length, e = c.shift(), f = v._queueHooks(a, b);
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), 
            delete f.stop, e.call(a, function() {
                v.dequeue(a, b);
            }, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return X.get(a, c) || X.access(a, c, {
                empty: v.Callbacks("once memory").add(function() {
                    X.remove(a, [ b + "queue", c ]);
                })
            });
        }
    }), v.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? v.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = v.queue(this, a, b);
                v._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && v.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                v.dequeue(this, a);
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, b) {
            var c, d = 1, e = v.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [ f ]);
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) (c = X.get(f[g], a + "queueHooks")) && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b);
        }
    });
    var ab = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, bb = new RegExp("^(?:([+-])=|)(" + ab + ")([a-z%]*)$", "i"), cb = [ "Top", "Right", "Bottom", "Left" ], db = q.documentElement, eb = function(a) {
        return v.contains(a.ownerDocument, a);
    }, fb = {
        composed: !0
    };
    db.getRootNode && (eb = function(a) {
        return v.contains(a.ownerDocument, a) || a.getRootNode(fb) === a.ownerDocument;
    });
    var gb = function(a, b) {
        return "none" === (a = b || a).style.display || "" === a.style.display && eb(a) && "none" === v.css(a, "display");
    };
    function hb(a, b, c, d) {
        var e, f, g = 20, h = d ? function() {
            return d.cur();
        } : function() {
            return v.css(a, b, "");
        }, i = h(), j = c && c[3] || (v.cssNumber[b] ? "" : "px"), k = a.nodeType && (v.cssNumber[b] || "px" !== j && +i) && bb.exec(v.css(a, b));
        if (k && k[3] !== j) {
            i /= 2, j = j || k[3], k = +i || 1;
            while (g--) v.style(a, b, k + j), (1 - f) * (1 - (f = h() / i || .5)) <= 0 && (g = 0), 
            k /= f;
            k *= 2, v.style(a, b, k + j), c = c || [];
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, 
        d.start = k, d.end = e)), e;
    }
    var ib = {};
    function jb(a, b) {
        for (var c, d, e, f, g, h, i, j = [], k = 0, l = a.length; k < l; k++) (d = a[k]).style && (c = d.style.display, 
        b ? ("none" === c && (j[k] = X.get(d, "display") || null, j[k] || (d.style.display = "")), 
        "" === d.style.display && gb(d) && (j[k] = (i = g = f = void 0, g = (e = d).ownerDocument, 
        h = e.nodeName, (i = ib[h]) || (f = g.body.appendChild(g.createElement(h)), i = v.css(f, "display"), 
        f.parentNode.removeChild(f), "none" === i && (i = "block"), ib[h] = i)))) : "none" !== c && (j[k] = "none", 
        X.set(d, "display", c)));
        for (k = 0; k < l; k++) null != j[k] && (a[k].style.display = j[k]);
        return a;
    }
    v.fn.extend({
        show: function() {
            return jb(this, !0);
        },
        hide: function() {
            return jb(this);
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                gb(this) ? v(this).show() : v(this).hide();
            });
        }
    });
    var kb, lb, mb = /^(?:checkbox|radio)$/i, nb = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, ob = /^$|^module$|\/(?:java|ecma)script/i;
    kb = q.createDocumentFragment().appendChild(q.createElement("div")), (lb = q.createElement("input")).setAttribute("type", "radio"), 
    lb.setAttribute("checked", "checked"), lb.setAttribute("name", "t"), kb.appendChild(lb), 
    n.checkClone = kb.cloneNode(!0).cloneNode(!0).lastChild.checked, kb.innerHTML = "<textarea>x</textarea>", 
    n.noCloneChecked = !!kb.cloneNode(!0).lastChild.defaultValue, kb.innerHTML = "<option></option>", 
    n.option = !!kb.lastChild;
    var pb = {
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    function qb(a, b) {
        var c;
        return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], 
        void 0 === b || b && B(a, b) ? v.merge([ a ], c) : c;
    }
    function rb(a, b) {
        for (var c = 0, d = a.length; c < d; c++) X.set(a[c], "globalEval", !b || X.get(b[c], "globalEval"));
    }
    pb.tbody = pb.tfoot = pb.colgroup = pb.caption = pb.thead, pb.th = pb.td, n.option || (pb.optgroup = pb.option = [ 1, "<select multiple='multiple'>", "</select>" ]);
    var sb = /<|&#?\w+;/;
    function tb(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++) if ((f = a[n]) || 0 === f) if ("object" === t(f)) v.merge(m, f.nodeType ? [ f ] : f); else if (sb.test(f)) {
            g = g || l.appendChild(b.createElement("div")), h = (nb.exec(f) || [ "", "" ])[1].toLowerCase(), 
            i = pb[h] || pb._default, g.innerHTML = i[1] + v.htmlPrefilter(f) + i[2], k = i[0];
            while (k--) g = g.lastChild;
            v.merge(m, g.childNodes), (g = l.firstChild).textContent = "";
        } else m.push(b.createTextNode(f));
        l.textContent = "", n = 0;
        while (f = m[n++]) if (d && -1 < v.inArray(f, d)) e && e.push(f); else if (j = eb(f), 
        g = qb(l.appendChild(f), "script"), j && rb(g), c) {
            k = 0;
            while (f = g[k++]) ob.test(f.type || "") && c.push(f);
        }
        return l;
    }
    var ub = /^key/, vb = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, wb = /^([^.]*)(?:\.(.+)|)/;
    function xb() {
        return !0;
    }
    function yb() {
        return !1;
    }
    function zb(a, b) {
        return a === function() {
            try {
                return q.activeElement;
            } catch (a) {}
        }() == ("focus" === b);
    }
    function Ab(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            for (h in "string" != typeof c && (d = d || c, c = void 0), b) Ab(a, h, c, d, b[h], f);
            return a;
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, 
        d = void 0) : (e = d, d = c, c = void 0)), !1 === e) e = yb; else if (!e) return a;
        return 1 === f && (g = e, (e = function(a) {
            return v().off(a), g.apply(this, arguments);
        }).guid = g.guid || (g.guid = v.guid++)), a.each(function() {
            v.event.add(this, b, e, d, c);
        });
    }
    function Bb(a, b, c) {
        c ? (X.set(a, b, !1), v.event.add(a, b, {
            namespace: !1,
            handler: function(a) {
                var d, f, g = X.get(this, b);
                if (1 & a.isTrigger && this[b]) {
                    if (g.length) (v.event.special[b] || {}).delegateType && a.stopPropagation(); else if (g = e.call(arguments), 
                    X.set(this, b, g), d = c(this, b), this[b](), g !== (f = X.get(this, b)) || d ? X.set(this, b, !1) : f = {}, 
                    g !== f) return a.stopImmediatePropagation(), a.preventDefault(), f.value;
                } else g.length && (X.set(this, b, {
                    value: v.event.trigger(v.extend(g[0], v.Event.prototype), g.slice(1), this)
                }), a.stopImmediatePropagation());
            }
        })) : void 0 === X.get(a, b) && v.event.add(a, b, xb);
    }
    v.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = X.get(a);
            if (V(a)) {
                c.handler && (c = (f = c).handler, e = f.selector), e && v.find.matchesSelector(db, e), 
                c.guid || (c.guid = v.guid++), (i = q.events) || (i = q.events = Object.create(null)), 
                (g = q.handle) || (g = q.handle = function(b) {
                    return "undefined" != typeof v && v.event.triggered !== b.type ? v.event.dispatch.apply(a, arguments) : void 0;
                }), j = (b = (b || "").match(J) || [ "" ]).length;
                while (j--) n = p = (h = wb.exec(b[j]) || [])[1], o = (h[2] || "").split(".").sort(), 
                n && (l = v.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, 
                l = v.event.special[n] || {}, k = v.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && v.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || ((m = i[n] = []).delegateCount = 0, l.setup && !1 !== l.setup.call(a, d, o, g) || a.addEventListener && a.addEventListener(n, g)), 
                l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), 
                v.event.global[n] = !0);
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = X.hasData(a) && X.get(a);
            if (q && (i = q.events)) {
                j = (b = (b || "").match(J) || [ "" ]).length;
                while (j--) if (n = p = (h = wb.exec(b[j]) || [])[1], o = (h[2] || "").split(".").sort(), 
                n) {
                    l = v.event.special[n] || {}, m = i[n = (d ? l.delegateType : l.bindType) || n] || [], 
                    h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                    while (f--) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), 
                    k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && !1 !== l.teardown.call(a, o, q.handle) || v.removeEvent(a, n, q.handle), 
                    delete i[n]);
                } else for (n in i) v.event.remove(a, n + b[j], c, d, !0);
                v.isEmptyObject(i) && X.remove(a, "handle events");
            }
        },
        dispatch: function(a) {
            var b, c, d, e, f, g, h = new Array(arguments.length), i = v.event.fix(a), j = (X.get(this, "events") || Object.create(null))[i.type] || [], k = v.event.special[i.type] || {};
            for (h[0] = i, b = 1; b < arguments.length; b++) h[b] = arguments[b];
            if (i.delegateTarget = this, !k.preDispatch || !1 !== k.preDispatch.call(this, i)) {
                g = v.event.handlers.call(this, i, j), b = 0;
                while ((e = g[b++]) && !i.isPropagationStopped()) {
                    i.currentTarget = e.elem, c = 0;
                    while ((f = e.handlers[c++]) && !i.isImmediatePropagationStopped()) i.rnamespace && !1 !== f.namespace && !i.rnamespace.test(f.namespace) || (i.handleObj = f, 
                    i.data = f.data, void 0 !== (d = ((v.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h)) && !1 === (i.result = d) && (i.preventDefault(), 
                    i.stopPropagation()));
                }
                return k.postDispatch && k.postDispatch.call(this, i), i.result;
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g, h = [], i = b.delegateCount, j = a.target;
            if (i && j.nodeType && !("click" === a.type && 1 <= a.button)) for (;j !== this; j = j.parentNode || this) if (1 === j.nodeType && ("click" !== a.type || !0 !== j.disabled)) {
                for (f = [], g = {}, c = 0; c < i; c++) void 0 === g[e = (d = b[c]).selector + " "] && (g[e] = d.needsContext ? -1 < v(e, this).index(j) : v.find(e, this, null, [ j ]).length), 
                g[e] && f.push(d);
                f.length && h.push({
                    elem: j,
                    handlers: f
                });
            }
            return j = this, i < b.length && h.push({
                elem: j,
                handlers: b.slice(i)
            }), h;
        },
        addProp: function(a, b) {
            Object.defineProperty(v.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: o(b) ? function() {
                    if (this.originalEvent) return b(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[a];
                },
                set: function(b) {
                    Object.defineProperty(this, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: b
                    });
                }
            });
        },
        fix: function(a) {
            return a[v.expando] ? a : new v.Event(a);
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(a) {
                    var b = this || a;
                    return mb.test(b.type) && b.click && B(b, "input") && Bb(b, "click", xb), !1;
                },
                trigger: function(a) {
                    var b = this || a;
                    return mb.test(b.type) && b.click && B(b, "input") && Bb(b, "click"), !0;
                },
                _default: function(a) {
                    var b = a.target;
                    return mb.test(b.type) && b.click && B(b, "input") && X.get(b, "click") || B(b, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                }
            }
        }
    }, v.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c);
    }, v.Event = function(a, b) {
        if (!(this instanceof v.Event)) return new v.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? xb : yb, 
        this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, 
        this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, 
        b && v.extend(this, b), this.timeStamp = a && a.timeStamp || Date.now(), this[v.expando] = !0;
    }, v.Event.prototype = {
        constructor: v.Event,
        isDefaultPrevented: yb,
        isPropagationStopped: yb,
        isImmediatePropagationStopped: yb,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = xb, a && !this.isSimulated && a.preventDefault();
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = xb, a && !this.isSimulated && a.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = xb, a && !this.isSimulated && a.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, v.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(a) {
            var b = a.button;
            return null == a.which && ub.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && vb.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
        }
    }, v.event.addProp), v.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        v.event.special[a] = {
            setup: function() {
                return Bb(this, a, zb), !1;
            },
            trigger: function() {
                return Bb(this, a), !0;
            },
            delegateType: b
        };
    }), v.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        v.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = a.relatedTarget, e = a.handleObj;
                return d && (d === this || v.contains(this, d)) || (a.type = e.origType, c = e.handler.apply(this, arguments), 
                a.type = b), c;
            }
        };
    }), v.fn.extend({
        on: function(a, b, c, d) {
            return Ab(this, a, b, c, d);
        },
        one: function(a, b, c, d) {
            return Ab(this, a, b, c, d, 1);
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, v(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), 
            this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this;
            }
            return !1 !== b && "function" != typeof b || (c = b, b = void 0), !1 === c && (c = yb), 
            this.each(function() {
                v.event.remove(this, a, c, b);
            });
        }
    });
    var Cb = /<script|<style|<link/i, Db = /checked\s*(?:[^=]|=\s*.checked.)/i, Eb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Fb(a, b) {
        return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr") && v(a).children("tbody")[0] || a;
    }
    function Gb(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }
    function Hb(a) {
        return "true/" === (a.type || "").slice(0, 5) ? a.type = a.type.slice(5) : a.removeAttribute("type"), 
        a;
    }
    function Ib(a, b) {
        var c, d, e, f, g, h;
        if (1 === b.nodeType) {
            if (X.hasData(a) && (h = X.get(a).events)) for (e in X.remove(b, "handle events"), 
            h) for (c = 0, d = h[e].length; c < d; c++) v.event.add(b, e, h[e][c]);
            Y.hasData(a) && (f = Y.access(a), g = v.extend({}, f), Y.set(b, g));
        }
    }
    function Jb(a, b, c, d) {
        b = f(b);
        var e, g, h, i, j, k, l = 0, m = a.length, p = m - 1, q = b[0], r = o(q);
        if (r || 1 < m && "string" == typeof q && !n.checkClone && Db.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), Jb(f, b, c, d);
        });
        if (m && (g = (e = tb(b, a[0].ownerDocument, !1, a, d)).firstChild, 1 === e.childNodes.length && (e = g), 
        g || d)) {
            for (i = (h = v.map(qb(e, "script"), Gb)).length; l < m; l++) j = e, l !== p && (j = v.clone(j, !0, !0), 
            i && v.merge(h, qb(j, "script"))), c.call(a[l], j, l);
            if (i) for (k = h[h.length - 1].ownerDocument, v.map(h, Hb), l = 0; l < i; l++) j = h[l], 
            ob.test(j.type || "") && !X.access(j, "globalEval") && v.contains(k, j) && (j.src && "module" !== (j.type || "").toLowerCase() ? v._evalUrl && !j.noModule && v._evalUrl(j.src, {
                nonce: j.nonce || j.getAttribute("nonce")
            }, k) : s(j.textContent.replace(Eb, ""), j, k));
        }
        return a;
    }
    function Kb(a, b, c) {
        for (var d, e = b ? v.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || v.cleanData(qb(d)), 
        d.parentNode && (c && eb(d) && rb(qb(d, "script")), d.parentNode.removeChild(d));
        return a;
    }
    v.extend({
        htmlPrefilter: function(a) {
            return a;
        },
        clone: function(a, b, c) {
            var d, e, f, g, h, i, j, k = a.cloneNode(!0), l = eb(a);
            if (!(n.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || v.isXMLDoc(a))) for (g = qb(k), 
            d = 0, e = (f = qb(a)).length; d < e; d++) h = f[d], i = g[d], "input" === (j = i.nodeName.toLowerCase()) && mb.test(h.type) ? i.checked = h.checked : "input" !== j && "textarea" !== j || (i.defaultValue = h.defaultValue);
            if (b) if (c) for (f = f || qb(a), g = g || qb(k), d = 0, e = f.length; d < e; d++) Ib(f[d], g[d]); else Ib(a, k);
            return 0 < (g = qb(k, "script")).length && rb(g, !l && qb(a, "script")), k;
        },
        cleanData: function(a) {
            for (var b, c, d, e = v.event.special, f = 0; void 0 !== (c = a[f]); f++) if (V(c)) {
                if (b = c[X.expando]) {
                    if (b.events) for (d in b.events) e[d] ? v.event.remove(c, d) : v.removeEvent(c, d, b.handle);
                    c[X.expando] = void 0;
                }
                c[Y.expando] && (c[Y.expando] = void 0);
            }
        }
    }), v.fn.extend({
        detach: function(a) {
            return Kb(this, a, !0);
        },
        remove: function(a) {
            return Kb(this, a);
        },
        text: function(a) {
            return Q(this, function(a) {
                return void 0 === a ? v.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
                });
            }, null, a, arguments.length);
        },
        append: function() {
            return Jb(this, arguments, function(a) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Fb(this, a).appendChild(a);
            });
        },
        prepend: function() {
            return Jb(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Fb(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return Jb(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return Jb(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (v.cleanData(qb(a, !1)), 
            a.textContent = "");
            return this;
        },
        clone: function(a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function() {
                return v.clone(this, a, b);
            });
        },
        html: function(a) {
            return Q(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Cb.test(a) && !pb[(nb.exec(a) || [ "", "" ])[1].toLowerCase()]) {
                    a = v.htmlPrefilter(a);
                    try {
                        for (;c < d; c++) 1 === (b = this[c] || {}).nodeType && (v.cleanData(qb(b, !1)), 
                        b.innerHTML = a);
                        b = 0;
                    } catch (a) {}
                }
                b && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var a = [];
            return Jb(this, arguments, function(b) {
                var c = this.parentNode;
                v.inArray(this, a) < 0 && (v.cleanData(qb(this)), c && c.replaceChild(b, this));
            }, a);
        }
    }), v.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        v.fn[a] = function(a) {
            for (var c, d = [], e = v(a), f = e.length - 1, h = 0; h <= f; h++) c = h === f ? this : this.clone(!0), 
            v(e[h])[b](c), g.apply(d, c.get());
            return this.pushStack(d);
        };
    });
    var Lb = new RegExp("^(" + ab + ")(?!px)[a-z%]+$", "i"), Mb = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a), c.getComputedStyle(b);
    }, Nb = function(a, b, c) {
        var d, e, f = {};
        for (e in b) f[e] = a.style[e], a.style[e] = b[e];
        for (e in d = c.call(a), b) a.style[e] = f[e];
        return d;
    }, Ob = new RegExp(cb.join("|"), "i");
    function Pb(a, b, c) {
        var d, e, f, g, h = a.style;
        return (c = c || Mb(a)) && ("" !== (g = c.getPropertyValue(b) || c[b]) || eb(a) || (g = v.style(a, b)), 
        !n.pixelBoxStyles() && Lb.test(g) && Ob.test(b) && (d = h.width, e = h.minWidth, 
        f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, 
        h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
    }
    function Qb(a, b) {
        return {
            get: function() {
                if (!a()) return (this.get = b).apply(this, arguments);
                delete this.get;
            }
        };
    }
    !function() {
        function b() {
            if (k) {
                j.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", 
                k.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", 
                db.appendChild(j).appendChild(k);
                var b = a.getComputedStyle(k);
                d = "1%" !== b.top, i = 12 === c(b.marginLeft), k.style.right = "60%", g = 36 === c(b.right), 
                e = 36 === c(b.width), k.style.position = "absolute", f = 12 === c(k.offsetWidth / 3), 
                db.removeChild(j), k = null;
            }
        }
        function c(a) {
            return Math.round(parseFloat(a));
        }
        var d, e, f, g, h, i, j = q.createElement("div"), k = q.createElement("div");
        k.style && (k.style.backgroundClip = "content-box", k.cloneNode(!0).style.backgroundClip = "", 
        n.clearCloneStyle = "content-box" === k.style.backgroundClip, v.extend(n, {
            boxSizingReliable: function() {
                return b(), e;
            },
            pixelBoxStyles: function() {
                return b(), g;
            },
            pixelPosition: function() {
                return b(), d;
            },
            reliableMarginLeft: function() {
                return b(), i;
            },
            scrollboxSize: function() {
                return b(), f;
            },
            reliableTrDimensions: function() {
                var b, c, d, e;
                return null == h && (b = q.createElement("table"), c = q.createElement("tr"), d = q.createElement("div"), 
                b.style.cssText = "position:absolute;left:-11111px", c.style.height = "1px", d.style.height = "9px", 
                db.appendChild(b).appendChild(c).appendChild(d), e = a.getComputedStyle(c), h = 3 < parseInt(e.height), 
                db.removeChild(b)), h;
            }
        }));
    }();
    var Rb = [ "Webkit", "Moz", "ms" ], Sb = q.createElement("div").style, Tb = {};
    function Ub(a) {
        var b = v.cssProps[a] || Tb[a];
        return b || (a in Sb ? a : Tb[a] = function(a) {
            var b = a[0].toUpperCase() + a.slice(1), c = Rb.length;
            while (c--) if ((a = Rb[c] + b) in Sb) return a;
        }(a) || a);
    }
    var Vb = /^(none|table(?!-c[ea]).+)/, Wb = /^--/, Xb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Yb = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Zb(a, b, c) {
        var d = bb.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
    }
    function $b(a, b, c, d, e, f) {
        var g = "width" === b ? 1 : 0, h = 0, i = 0;
        if (c === (d ? "border" : "content")) return 0;
        for (;g < 4; g += 2) "margin" === c && (i += v.css(a, c + cb[g], !0, e)), d ? ("content" === c && (i -= v.css(a, "padding" + cb[g], !0, e)), 
        "margin" !== c && (i -= v.css(a, "border" + cb[g] + "Width", !0, e))) : (i += v.css(a, "padding" + cb[g], !0, e), 
        "padding" !== c ? i += v.css(a, "border" + cb[g] + "Width", !0, e) : h += v.css(a, "border" + cb[g] + "Width", !0, e));
        return !d && 0 <= f && (i += Math.max(0, Math.ceil(a["offset" + b[0].toUpperCase() + b.slice(1)] - f - i - h - .5)) || 0), 
        i;
    }
    function _b(a, b, c) {
        var d = Mb(a), e = (!n.boxSizingReliable() || c) && "border-box" === v.css(a, "boxSizing", !1, d), f = e, g = Pb(a, b, d), h = "offset" + b[0].toUpperCase() + b.slice(1);
        if (Lb.test(g)) {
            if (!c) return g;
            g = "auto";
        }
        return (!n.boxSizingReliable() && e || !n.reliableTrDimensions() && B(a, "tr") || "auto" === g || !parseFloat(g) && "inline" === v.css(a, "display", !1, d)) && a.getClientRects().length && (e = "border-box" === v.css(a, "boxSizing", !1, d), 
        (f = h in a) && (g = a[h])), (g = parseFloat(g) || 0) + $b(a, b, c || (e ? "border" : "content"), f, d, g) + "px";
    }
    function ac(a, b, c, d, e) {
        return new ac.prototype.init(a, b, c, d, e);
    }
    v.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Pb(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = U(b), i = Wb.test(b), j = a.style;
                if (i || (b = Ub(h)), g = v.cssHooks[b] || v.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b];
                "string" === (f = typeof c) && (e = bb.exec(c)) && e[1] && (c = hb(a, b, e), f = "number"), 
                null != c && c == c && ("number" !== f || i || (c += e && e[3] || (v.cssNumber[h] ? "" : "px")), 
                n.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), 
                g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c));
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = U(b);
            return Wb.test(b) || (b = Ub(h)), (g = v.cssHooks[b] || v.cssHooks[h]) && "get" in g && (e = g.get(a, !0, c)), 
            void 0 === e && (e = Pb(a, b, d)), "normal" === e && b in Yb && (e = Yb[b]), "" === c || c ? (f = parseFloat(e), 
            !0 === c || isFinite(f) ? f || 0 : e) : e;
        }
    }), v.each([ "height", "width" ], function(a, b) {
        v.cssHooks[b] = {
            get: function(a, c, d) {
                if (c) return !Vb.test(v.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? _b(a, b, d) : Nb(a, Xb, function() {
                    return _b(a, b, d);
                });
            },
            set: function(a, c, d) {
                var e, f = Mb(a), g = !n.scrollboxSize() && "absolute" === f.position, h = (g || d) && "border-box" === v.css(a, "boxSizing", !1, f), i = d ? $b(a, b, d, h, f) : 0;
                return h && g && (i -= Math.ceil(a["offset" + b[0].toUpperCase() + b.slice(1)] - parseFloat(f[b]) - $b(a, b, "border", !1, f) - .5)), 
                i && (e = bb.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = v.css(a, b)), 
                Zb(0, c, i);
            }
        };
    }), v.cssHooks.marginLeft = Qb(n.reliableMarginLeft, function(a, b) {
        if (b) return (parseFloat(Pb(a, "marginLeft")) || a.getBoundingClientRect().left - Nb(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left;
        })) + "px";
    }), v.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        v.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [ c ]; d < 4; d++) e[a + cb[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, "margin" !== a && (v.cssHooks[a + b].set = Zb);
    }), v.fn.extend({
        css: function(a, b) {
            return Q(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (Array.isArray(b)) {
                    for (d = Mb(a), e = b.length; g < e; g++) f[b[g]] = v.css(a, b[g], !1, d);
                    return f;
                }
                return void 0 !== c ? v.style(a, b, c) : v.css(a, b);
            }, a, b, 1 < arguments.length);
        }
    }), ((v.Tween = ac).prototype = {
        constructor: ac,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || v.easing._default, this.options = b, 
            this.start = this.now = this.cur(), this.end = d, this.unit = f || (v.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = ac.propHooks[this.prop];
            return a && a.get ? a.get(this) : ac.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = ac.propHooks[this.prop];
            return this.options.duration ? this.pos = b = v.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, 
            this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            c && c.set ? c.set(this) : ac.propHooks._default.set(this), this;
        }
    }).init.prototype = ac.prototype, (ac.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = v.css(a.elem, a.prop, "")) && "auto" !== b ? b : 0;
            },
            set: function(a) {
                v.fx.step[a.prop] ? v.fx.step[a.prop](a) : 1 !== a.elem.nodeType || !v.cssHooks[a.prop] && null == a.elem.style[Ub(a.prop)] ? a.elem[a.prop] = a.now : v.style(a.elem, a.prop, a.now + a.unit);
            }
        }
    }).scrollTop = ac.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, v.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        },
        _default: "swing"
    }, v.fx = ac.prototype.init, v.fx.step = {};
    var bc, cc, dc, ec, fc = /^(?:toggle|show|hide)$/, gc = /queueHooks$/;
    function hc() {
        cc && (!1 === q.hidden && a.requestAnimationFrame ? a.requestAnimationFrame(hc) : a.setTimeout(hc, v.fx.interval), 
        v.fx.tick());
    }
    function ic() {
        return a.setTimeout(function() {
            bc = void 0;
        }), bc = Date.now();
    }
    function jc(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; d < 4; d += 2 - b) e["margin" + (c = cb[d])] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e;
    }
    function kc(a, b, c) {
        for (var d, e = (lc.tweeners[b] || []).concat(lc.tweeners["*"]), f = 0, g = e.length; f < g; f++) if (d = e[f].call(c, b, a)) return d;
    }
    function lc(a, b, c) {
        var d, e, f = 0, g = lc.prefilters.length, h = v.Deferred().always(function() {
            delete i.elem;
        }), i = function() {
            if (e) return !1;
            for (var b = bc || ic(), c = Math.max(0, j.startTime + j.duration - b), d = 1 - (c / j.duration || 0), f = 0, g = j.tweens.length; f < g; f++) j.tweens[f].run(d);
            return h.notifyWith(a, [ j, d, c ]), d < 1 && g ? c : (g || h.notifyWith(a, [ j, 1, 0 ]), 
            h.resolveWith(a, [ j ]), !1);
        }, j = h.promise({
            elem: a,
            props: v.extend({}, b),
            opts: v.extend(!0, {
                specialEasing: {},
                easing: v.easing._default
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: bc || ic(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = v.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; c < d; c++) j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [ j, 1, 0 ]), h.resolveWith(a, [ j, b ])) : h.rejectWith(a, [ j, b ]), 
                this;
            }
        }), k = j.props;
        for ((!function(a, b) {
            var c, d, e, f, g;
            for (c in a) if (e = b[d = U(c)], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), 
            c !== d && (a[d] = f, delete a[c]), (g = v.cssHooks[d]) && "expand" in g) for (c in f = g.expand(f), 
            delete a[d], f) c in a || (a[c] = f[c], b[c] = e); else b[d] = e;
        }(k, j.opts.specialEasing)); f < g; f++) if (d = lc.prefilters[f].call(j, a, k, j.opts)) return o(d.stop) && (v._queueHooks(j.elem, j.opts.queue).stop = d.stop.bind(d)), 
        d;
        return v.map(k, kc, j), o(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), 
        v.fx.timer(v.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j;
    }
    v.Animation = v.extend(lc, {
        tweeners: {
            "*": [ function(a, b) {
                var c = this.createTween(a, b);
                return hb(c.elem, a, bb.exec(b), c), c;
            } ]
        },
        tweener: function(a, b) {
            o(a) ? (b = a, a = [ "*" ]) : a = a.match(J);
            for (var c, d = 0, e = a.length; d < e; d++) c = a[d], lc.tweeners[c] = lc.tweeners[c] || [], 
            lc.tweeners[c].unshift(b);
        },
        prefilters: [ function(a, b, c) {
            var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b, m = this, n = {}, o = a.style, p = a.nodeType && gb(a), q = X.get(a, "fxshow");
            for (d in c.queue || (null == (g = v._queueHooks(a, "fx")).unqueued && (g.unqueued = 0, 
            h = g.empty.fire, g.empty.fire = function() {
                g.unqueued || h();
            }), g.unqueued++, m.always(function() {
                m.always(function() {
                    g.unqueued--, v.queue(a, "fx").length || g.empty.fire();
                });
            })), b) if (e = b[d], fc.test(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0;
                }
                n[d] = q && q[d] || v.style(a, d);
            }
            if ((i = !v.isEmptyObject(b)) || !v.isEmptyObject(n)) for (d in l && 1 === a.nodeType && (c.overflow = [ o.overflow, o.overflowX, o.overflowY ], 
            null == (j = q && q.display) && (j = X.get(a, "display")), "none" === (k = v.css(a, "display")) && (j ? k = j : (jb([ a ], !0), 
            j = a.style.display || j, k = v.css(a, "display"), jb([ a ]))), ("inline" === k || "inline-block" === k && null != j) && "none" === v.css(a, "float") && (i || (m.done(function() {
                o.display = j;
            }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), 
            c.overflow && (o.overflow = "hidden", m.always(function() {
                o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
            })), i = !1, n) i || (q ? "hidden" in q && (p = q.hidden) : q = X.access(a, "fxshow", {
                display: j
            }), f && (q.hidden = !p), p && jb([ a ], !0), m.done(function() {
                for (d in p || jb([ a ]), X.remove(a, "fxshow"), n) v.style(a, d, n[d]);
            })), i = kc(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, 
            i.start = 0));
        } ],
        prefilter: function(a, b) {
            b ? lc.prefilters.unshift(a) : lc.prefilters.push(a);
        }
    }), v.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? v.extend({}, a) : {
            complete: c || !c && b || o(a) && a,
            duration: a,
            easing: c && b || b && !o(b) && b
        };
        return v.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in v.fx.speeds ? d.duration = v.fx.speeds[d.duration] : d.duration = v.fx.speeds._default), 
        null != d.queue && !0 !== d.queue || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            o(d.old) && d.old.call(this), d.queue && v.dequeue(this, d.queue);
        }, d;
    }, v.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(gb).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = v.isEmptyObject(a), f = v.speed(b, c, d), g = function() {
                var b = lc(this, v.extend({}, a), f);
                (e || X.get(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || !1 === f.queue ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c);
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && this.queue(a || "fx", []), 
            this.each(function() {
                var b = !0, e = null != a && a + "queueHooks", f = v.timers, g = X.get(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && gc.test(e) && d(g[e]);
                for (e = f.length; e--; ) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), 
                b = !1, f.splice(e, 1));
                !b && c || v.dequeue(this, a);
            });
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var b, c = X.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = v.timers, g = d ? d.length : 0;
                for (c.finish = !0, v.queue(this, a, []), e && e.stop && e.stop.call(this, !0), 
                b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                f.splice(b, 1));
                for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), v.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = v.fn[b];
        v.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(jc(b, !0), a, d, e);
        };
    }), v.each({
        slideDown: jc("show"),
        slideUp: jc("hide"),
        slideToggle: jc("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        v.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), v.timers = [], v.fx.tick = function() {
        var a, b = 0, c = v.timers;
        for (bc = Date.now(); b < c.length; b++) (a = c[b])() || c[b] !== a || c.splice(b--, 1);
        c.length || v.fx.stop(), bc = void 0;
    }, v.fx.timer = function(a) {
        v.timers.push(a), v.fx.start();
    }, v.fx.interval = 13, v.fx.start = function() {
        cc || (cc = !0, hc());
    }, v.fx.stop = function() {
        cc = null;
    }, v.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, v.fn.delay = function(b, c) {
        return b = v.fx && v.fx.speeds[b] || b, c = c || "fx", this.queue(c, function(c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function() {
                a.clearTimeout(e);
            };
        });
    }, dc = q.createElement("input"), ec = q.createElement("select").appendChild(q.createElement("option")), 
    dc.type = "checkbox", n.checkOn = "" !== dc.value, n.optSelected = ec.selected, 
    (dc = q.createElement("input")).value = "t", dc.type = "radio", n.radioValue = "t" === dc.value;
    var mc, nc = v.expr.attrHandle;
    v.fn.extend({
        attr: function(a, b) {
            return Q(this, v.attr, a, b, 1 < arguments.length);
        },
        removeAttr: function(a) {
            return this.each(function() {
                v.removeAttr(this, a);
            });
        }
    }), v.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? v.prop(a, b, c) : (1 === f && v.isXMLDoc(a) || (e = v.attrHooks[b.toLowerCase()] || (v.expr.match.bool.test(b) ? mc : void 0)), 
            void 0 !== c ? null === c ? void v.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), 
            c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : null == (d = v.find.attr(a, b)) ? void 0 : d);
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!n.radioValue && "radio" === b && B(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d = 0, e = b && b.match(J);
            if (e && 1 === a.nodeType) while (c = e[d++]) a.removeAttribute(c);
        }
    }), mc = {
        set: function(a, b, c) {
            return !1 === b ? v.removeAttr(a, c) : a.setAttribute(c, c), c;
        }
    }, v.each(v.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = nc[b] || v.find.attr;
        nc[b] = function(a, b, d) {
            var e, f, g = b.toLowerCase();
            return d || (f = nc[g], nc[g] = e, e = null != c(a, b, d) ? g : null, nc[g] = f), 
            e;
        };
    });
    var oc = /^(?:input|select|textarea|button)$/i, pc = /^(?:a|area)$/i;
    function qc(a) {
        return (a.match(J) || []).join(" ");
    }
    function rc(a) {
        return a.getAttribute && a.getAttribute("class") || "";
    }
    function sc(a) {
        return Array.isArray(a) ? a : "string" == typeof a && a.match(J) || [];
    }
    v.fn.extend({
        prop: function(a, b) {
            return Q(this, v.prop, a, b, 1 < arguments.length);
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[v.propFix[a] || a];
            });
        }
    }), v.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && v.isXMLDoc(a) || (b = v.propFix[b] || b, 
            e = v.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = v.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : oc.test(a.nodeName) || pc.test(a.nodeName) && a.href ? 0 : -1;
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), n.optSelected || (v.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        }
    }), v.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        v.propFix[this.toLowerCase()] = this;
    }), v.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (o(a)) return this.each(function(b) {
                v(this).addClass(a.call(this, b, rc(this)));
            });
            if ((b = sc(a)).length) while (c = this[i++]) if (e = rc(c), d = 1 === c.nodeType && " " + qc(e) + " ") {
                g = 0;
                while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                e !== (h = qc(d)) && c.setAttribute("class", h);
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (o(a)) return this.each(function(b) {
                v(this).removeClass(a.call(this, b, rc(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ((b = sc(a)).length) while (c = this[i++]) if (e = rc(c), d = 1 === c.nodeType && " " + qc(e) + " ") {
                g = 0;
                while (f = b[g++]) while (-1 < d.indexOf(" " + f + " ")) d = d.replace(" " + f + " ", " ");
                e !== (h = qc(d)) && c.setAttribute("class", h);
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a, d = "string" === c || Array.isArray(a);
            return "boolean" == typeof b && d ? b ? this.addClass(a) : this.removeClass(a) : o(a) ? this.each(function(c) {
                v(this).toggleClass(a.call(this, c, rc(this), b), b);
            }) : this.each(function() {
                var b, e, f, g;
                if (d) {
                    e = 0, f = v(this), g = sc(a);
                    while (b = g[e++]) f.hasClass(b) ? f.removeClass(b) : f.addClass(b);
                } else void 0 !== a && "boolean" !== c || ((b = rc(this)) && X.set(this, "__className__", b), 
                this.setAttribute && this.setAttribute("class", b || !1 === a ? "" : X.get(this, "__className__") || ""));
            });
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++]) if (1 === c.nodeType && -1 < (" " + qc(rc(c)) + " ").indexOf(b)) return !0;
            return !1;
        }
    });
    var tc = /\r/g;
    v.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = o(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (null == (e = d ? a.call(this, c, v(this).val()) : a) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = v.map(e, function(a) {
                    return null == a ? "" : a + "";
                })), (b = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()]) && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
            })) : e ? (b = v.valHooks[e.type] || v.valHooks[e.nodeName.toLowerCase()]) && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : "string" == typeof (c = e.value) ? c.replace(tc, "") : null == c ? "" : c : void 0;
        }
    }), v.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = v.find.attr(a, "value");
                    return null != b ? b : qc(v.text(a));
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e = a.options, f = a.selectedIndex, g = "select-one" === a.type, h = g ? null : [], i = g ? f + 1 : e.length;
                    for (d = f < 0 ? i : g ? f : 0; d < i; d++) if (((c = e[d]).selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B(c.parentNode, "optgroup"))) {
                        if (b = v(c).val(), g) return b;
                        h.push(b);
                    }
                    return h;
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = v.makeArray(b), g = e.length;
                    while (g--) ((d = e[g]).selected = -1 < v.inArray(v.valHooks.option.get(d), f)) && (c = !0);
                    return c || (a.selectedIndex = -1), f;
                }
            }
        }
    }), v.each([ "radio", "checkbox" ], function() {
        v.valHooks[this] = {
            set: function(a, b) {
                if (Array.isArray(b)) return a.checked = -1 < v.inArray(v(a).val(), b);
            }
        }, n.checkOn || (v.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    }), n.focusin = "onfocusin" in a;
    var uc = /^(?:focusinfocus|focusoutblur)$/, vc = function(a) {
        a.stopPropagation();
    };
    v.extend(v.event, {
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, l, m, n, r = [ d || q ], s = k.call(b, "type") ? b.type : b, t = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = n = h = d = d || q, 3 !== d.nodeType && 8 !== d.nodeType && !uc.test(s + v.event.triggered) && (-1 < s.indexOf(".") && (s = (t = s.split(".")).shift(), 
            t.sort()), j = s.indexOf(":") < 0 && "on" + s, (b = b[v.expando] ? b : new v.Event(s, "object" == typeof b && b)).isTrigger = e ? 2 : 3, 
            b.namespace = t.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + t.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            b.result = void 0, b.target || (b.target = d), c = null == c ? [ b ] : v.makeArray(c, [ b ]), 
            m = v.event.special[s] || {}, e || !m.trigger || !1 !== m.trigger.apply(d, c))) {
                if (!e && !m.noBubble && !p(d)) {
                    for (i = m.delegateType || s, uc.test(i + s) || (g = g.parentNode); g; g = g.parentNode) r.push(g), 
                    h = g;
                    h === (d.ownerDocument || q) && r.push(h.defaultView || h.parentWindow || a);
                }
                f = 0;
                while ((g = r[f++]) && !b.isPropagationStopped()) n = g, b.type = 1 < f ? i : m.bindType || s, 
                (l = (X.get(g, "events") || Object.create(null))[b.type] && X.get(g, "handle")) && l.apply(g, c), 
                (l = j && g[j]) && l.apply && V(g) && (b.result = l.apply(g, c), !1 === b.result && b.preventDefault());
                return b.type = s, e || b.isDefaultPrevented() || m._default && !1 !== m._default.apply(r.pop(), c) || !V(d) || j && o(d[s]) && !p(d) && ((h = d[j]) && (d[j] = null), 
                v.event.triggered = s, b.isPropagationStopped() && n.addEventListener(s, vc), d[s](), 
                b.isPropagationStopped() && n.removeEventListener(s, vc), v.event.triggered = void 0, 
                h && (d[j] = h)), b.result;
            }
        },
        simulate: function(a, b, c) {
            var d = v.extend(new v.Event(), c, {
                type: a,
                isSimulated: !0
            });
            v.event.trigger(d, null, b);
        }
    }), v.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                v.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            if (c) return v.event.trigger(a, b, c, !0);
        }
    }), n.focusin || v.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            v.event.simulate(b, a.target, v.event.fix(a));
        };
        v.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this.document || this, e = X.access(d, b);
                e || d.addEventListener(a, c, !0), X.access(d, b, (e || 0) + 1);
            },
            teardown: function() {
                var d = this.ownerDocument || this.document || this, e = X.access(d, b) - 1;
                e ? X.access(d, b, e) : (d.removeEventListener(a, c, !0), X.remove(d, b));
            }
        };
    });
    var wc = a.location, xc = {
        guid: Date.now()
    }, yc = /\?/;
    v.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = new a.DOMParser().parseFromString(b, "text/xml");
        } catch (b) {
            c = void 0;
        }
        return c && !c.getElementsByTagName("parsererror").length || v.error("Invalid XML: " + b), 
        c;
    };
    var zc = /\[\]$/, Ac = /\r?\n/g, Bc = /^(?:submit|button|image|reset|file)$/i, Cc = /^(?:input|select|textarea|keygen)/i;
    function Dc(a, b, c, d) {
        var e;
        if (Array.isArray(b)) v.each(b, function(b, e) {
            c || zc.test(a) ? d(a, e) : Dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d);
        }); else if (c || "object" !== t(b)) d(a, b); else for (e in b) Dc(a + "[" + e + "]", b[e], c, d);
    }
    v.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            var c = o(b) ? b() : b;
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
        };
        if (null == a) return "";
        if (Array.isArray(a) || a.jquery && !v.isPlainObject(a)) v.each(a, function() {
            e(this.name, this.value);
        }); else for (c in a) Dc(c, a[c], b, e);
        return d.join("&");
    }, v.fn.extend({
        serialize: function() {
            return v.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = v.prop(this, "elements");
                return a ? v.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !v(this).is(":disabled") && Cc.test(this.nodeName) && !Bc.test(a) && (this.checked || !mb.test(a));
            }).map(function(a, b) {
                var c = v(this).val();
                return null == c ? null : Array.isArray(c) ? v.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Ac, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(Ac, "\r\n")
                };
            }).get();
        }
    });
    var Ec = /%20/g, Fc = /#.*$/, Gc = /([?&])_=[^&]*/, Hc = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ic = /^(?:GET|HEAD)$/, Jc = /^\/\//, Kc = {}, Lc = {}, Mc = "*/".concat("*"), Nc = q.createElement("a");
    function Oc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(J) || [];
            if (o(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function Pc(a, b, c, d) {
        var e = {}, f = a === Lc;
        function g(h) {
            var i;
            return e[h] = !0, v.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), 
                g(j), !1);
            }), i;
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*");
    }
    function Qc(a, b) {
        var c, d, e = v.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && v.extend(!0, a, d), a;
    }
    Nc.href = wc.href, v.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: wc.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wc.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Mc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": v.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Qc(Qc(a, v.ajaxSettings), b) : Qc(v.ajaxSettings, a);
        },
        ajaxPrefilter: Oc(Kc),
        ajaxTransport: Oc(Lc),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var d, e, f, g, h, i, j, k, l, m, n = v.ajaxSetup({}, c), o = n.context || n, p = n.context && (o.nodeType || o.jquery) ? v(o) : v.event, r = v.Deferred(), s = v.Callbacks("once memory"), t = n.statusCode || {}, u = {}, w = {}, x = "canceled", y = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (j) {
                        if (!g) {
                            g = {};
                            while (b = Hc.exec(f)) g[b[1].toLowerCase() + " "] = (g[b[1].toLowerCase() + " "] || []).concat(b[2]);
                        }
                        b = g[a.toLowerCase() + " "];
                    }
                    return null == b ? null : b.join(", ");
                },
                getAllResponseHeaders: function() {
                    return j ? f : null;
                },
                setRequestHeader: function(a, b) {
                    return null == j && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, u[a] = b), 
                    this;
                },
                overrideMimeType: function(a) {
                    return null == j && (n.mimeType = a), this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (j) y.always(a[y.status]); else for (b in a) t[b] = [ t[b], a[b] ];
                    return this;
                },
                abort: function(a) {
                    var b = a || x;
                    return d && d.abort(b), z(0, b), this;
                }
            };
            if (r.promise(y), n.url = ((b || n.url || wc.href) + "").replace(Jc, wc.protocol + "//"), 
            n.type = c.method || c.type || n.method || n.type, n.dataTypes = (n.dataType || "*").toLowerCase().match(J) || [ "" ], 
            null == n.crossDomain) {
                i = q.createElement("a");
                try {
                    i.href = n.url, i.href = i.href, n.crossDomain = Nc.protocol + "//" + Nc.host != i.protocol + "//" + i.host;
                } catch (b) {
                    n.crossDomain = !0;
                }
            }
            if (n.data && n.processData && "string" != typeof n.data && (n.data = v.param(n.data, n.traditional)), 
            Pc(Kc, n, c, y), j) return y;
            for (l in (k = v.event && n.global) && 0 == v.active++ && v.event.trigger("ajaxStart"), 
            n.type = n.type.toUpperCase(), n.hasContent = !Ic.test(n.type), e = n.url.replace(Fc, ""), 
            n.hasContent ? n.data && n.processData && 0 === (n.contentType || "").indexOf("application/x-www-form-urlencoded") && (n.data = n.data.replace(Ec, "+")) : (m = n.url.slice(e.length), 
            n.data && (n.processData || "string" == typeof n.data) && (e += (yc.test(e) ? "&" : "?") + n.data, 
            delete n.data), !1 === n.cache && (e = e.replace(Gc, "$1"), m = (yc.test(e) ? "&" : "?") + "_=" + xc.guid++ + m), 
            n.url = e + m), n.ifModified && (v.lastModified[e] && y.setRequestHeader("If-Modified-Since", v.lastModified[e]), 
            v.etag[e] && y.setRequestHeader("If-None-Match", v.etag[e])), (n.data && n.hasContent && !1 !== n.contentType || c.contentType) && y.setRequestHeader("Content-Type", n.contentType), 
            y.setRequestHeader("Accept", n.dataTypes[0] && n.accepts[n.dataTypes[0]] ? n.accepts[n.dataTypes[0]] + ("*" !== n.dataTypes[0] ? ", " + Mc + "; q=0.01" : "") : n.accepts["*"]), 
            n.headers) y.setRequestHeader(l, n.headers[l]);
            if (n.beforeSend && (!1 === n.beforeSend.call(o, y, n) || j)) return y.abort();
            if (x = "abort", s.add(n.complete), y.done(n.success), y.fail(n.error), d = Pc(Lc, n, c, y)) {
                if (y.readyState = 1, k && p.trigger("ajaxSend", [ y, n ]), j) return y;
                n.async && 0 < n.timeout && (h = a.setTimeout(function() {
                    y.abort("timeout");
                }, n.timeout));
                try {
                    j = !1, d.send(u, z);
                } catch (b) {
                    if (j) throw b;
                    z(-1, b);
                }
            } else z(-1, "No Transport");
            function z(b, c, g, i) {
                var l, m, q, u, w, x = c;
                j || (j = !0, h && a.clearTimeout(h), d = void 0, f = i || "", y.readyState = 0 < b ? 4 : 0, 
                l = 200 <= b && b < 300 || 304 === b, g && (u = function(a, b, c) {
                    var d, e, f, g, h = a.contents, i = a.dataTypes;
                    while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
                    if (d) for (e in h) if (h[e] && h[e].test(d)) {
                        i.unshift(e);
                        break;
                    }
                    if (i[0] in c) f = i[0]; else {
                        for (e in c) {
                            if (!i[0] || a.converters[e + " " + i[0]]) {
                                f = e;
                                break;
                            }
                            g || (g = e);
                        }
                        f = f || g;
                    }
                    if (f) return f !== i[0] && i.unshift(f), c[f];
                }(n, y, g)), !l && -1 < v.inArray("script", n.dataTypes) && (n.converters["text script"] = function() {}), 
                u = function(a, b, c, d) {
                    var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
                    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
                    f = k.shift();
                    while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), 
                    i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
                        if (!(g = j[i + " " + f] || j["* " + f])) for (e in j) if ((h = e.split(" "))[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                            !0 === g ? g = j[e] : !0 !== j[e] && (f = h[0], k.unshift(h[1]));
                            break;
                        }
                        if (!0 !== g) if (g && a["throws"]) b = g(b); else try {
                            b = g(b);
                        } catch (a) {
                            return {
                                state: "parsererror",
                                error: g ? a : "No conversion from " + i + " to " + f
                            };
                        }
                    }
                    return {
                        state: "success",
                        data: b
                    };
                }(n, u, y, l), l ? (n.ifModified && ((w = y.getResponseHeader("Last-Modified")) && (v.lastModified[e] = w), 
                (w = y.getResponseHeader("etag")) && (v.etag[e] = w)), 204 === b || "HEAD" === n.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = u.state, 
                m = u.data, l = !(q = u.error))) : (q = x, !b && x || (x = "error", b < 0 && (b = 0))), 
                y.status = b, y.statusText = (c || x) + "", l ? r.resolveWith(o, [ m, x, y ]) : r.rejectWith(o, [ y, x, q ]), 
                y.statusCode(t), t = void 0, k && p.trigger(l ? "ajaxSuccess" : "ajaxError", [ y, n, l ? m : q ]), 
                s.fireWith(o, [ y, x ]), k && (p.trigger("ajaxComplete", [ y, n ]), --v.active || v.event.trigger("ajaxStop")));
            }
            return y;
        },
        getJSON: function(a, b, c) {
            return v.get(a, b, c, "json");
        },
        getScript: function(a, b) {
            return v.get(a, void 0, b, "script");
        }
    }), v.each([ "get", "post" ], function(a, b) {
        v[b] = function(a, c, d, e) {
            return o(c) && (e = e || d, d = c, c = void 0), v.ajax(v.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, v.isPlainObject(a) && a));
        };
    }), v.ajaxPrefilter(function(a) {
        var b;
        for (b in a.headers) "content-type" === b.toLowerCase() && (a.contentType = a.headers[b] || "");
    }), v._evalUrl = function(a, b, c) {
        return v.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(a) {
                v.globalEval(a, b, c);
            }
        });
    }, v.fn.extend({
        wrapAll: function(a) {
            var b;
            return this[0] && (o(a) && (a = a.call(this[0])), b = v(a, this[0].ownerDocument).eq(0).clone(!0), 
            this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a;
            }).append(this)), this;
        },
        wrapInner: function(a) {
            return o(a) ? this.each(function(b) {
                v(this).wrapInner(a.call(this, b));
            }) : this.each(function() {
                var b = v(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = o(a);
            return this.each(function(c) {
                v(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function(a) {
            return this.parent(a).not("body").each(function() {
                v(this).replaceWith(this.childNodes);
            }), this;
        }
    }), v.expr.pseudos.hidden = function(a) {
        return !v.expr.pseudos.visible(a);
    }, v.expr.pseudos.visible = function(a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
    }, v.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest();
        } catch (b) {}
    };
    var Rc = {
        0: 200,
        1223: 204
    }, Sc = v.ajaxSettings.xhr();
    n.cors = !!Sc && "withCredentials" in Sc, n.ajax = Sc = !!Sc, v.ajaxTransport(function(b) {
        var c, d;
        if (n.cors || Sc && !b.crossDomain) return {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) h[g] = b.xhrFields[g];
                for (g in b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), 
                e) h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.ontimeout = h.onreadystatechange = null, 
                        "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rc[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()));
                    };
                }, h.onload = c(), d = h.onerror = h.ontimeout = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d();
                    });
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null);
                } catch (e) {
                    if (c) throw e;
                }
            },
            abort: function() {
                c && c();
            }
        };
    }), v.ajaxPrefilter(function(a) {
        a.crossDomain && (a.contents.script = !1);
    }), v.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return v.globalEval(a), a;
            }
        }
    }), v.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), v.ajaxTransport("script", function(a) {
        var b, c;
        if (a.crossDomain || a.scriptAttrs) return {
            send: function(d, e) {
                b = v("<script>").attr(a.scriptAttrs || {}).prop({
                    charset: a.scriptCharset,
                    src: a.url
                }).on("load error", c = function(a) {
                    b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type);
                }), q.head.appendChild(b[0]);
            },
            abort: function() {
                c && c();
            }
        };
    });
    var Tc, Uc = [], Vc = /(=)\?(?=&|$)|\?\?/;
    v.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Uc.pop() || v.expando + "_" + xc.guid++;
            return this[a] = !0, a;
        }
    }), v.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = !1 !== b.jsonp && (Vc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Vc.test(b.data) && "data");
        if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = o(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, 
        h ? b[h] = b[h].replace(Vc, "$1" + e) : !1 !== b.jsonp && (b.url += (yc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), 
        b.converters["script json"] = function() {
            return g || v.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments;
        }, d.always(function() {
            void 0 === f ? v(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, 
            Uc.push(e)), g && o(f) && f(g[0]), g = f = void 0;
        }), "script";
    }), n.createHTMLDocument = ((Tc = q.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 
    2 === Tc.childNodes.length), v.parseHTML = function(a, b, c) {
        return "string" != typeof a ? [] : ("boolean" == typeof b && (c = b, b = !1), b || (n.createHTMLDocument ? ((d = (b = q.implementation.createHTMLDocument("")).createElement("base")).href = q.location.href, 
        b.head.appendChild(d)) : b = q), f = !c && [], (e = C.exec(a)) ? [ b.createElement(e[1]) ] : (e = tb([ a ], b, f), 
        f && f.length && v(f).remove(), v.merge([], e.childNodes)));
        var d, e, f;
    }, v.fn.load = function(a, b, c) {
        var d, e, f, g = this, h = a.indexOf(" ");
        return -1 < h && (d = qc(a.slice(h)), a = a.slice(0, h)), o(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), 
        0 < g.length && v.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? v("<div>").append(v.parseHTML(a)).find(d) : a);
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [ a.responseText, b, a ]);
            });
        }), this;
    }, v.expr.pseudos.animated = function(a) {
        return v.grep(v.timers, function(b) {
            return a === b.elem;
        }).length;
    }, v.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j = v.css(a, "position"), k = v(a), l = {};
            "static" === j && (a.style.position = "relative"), h = k.offset(), f = v.css(a, "top"), 
            i = v.css(a, "left"), ("absolute" === j || "fixed" === j) && -1 < (f + i).indexOf("auto") ? (g = (d = k.position()).top, 
            e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), o(b) && (b = b.call(a, c, v.extend({}, h))), 
            null != b.top && (l.top = b.top - h.top + g), null != b.left && (l.left = b.left - h.left + e), 
            "using" in b ? b.using.call(a, l) : ("number" == typeof l.top && (l.top += "px"), 
            "number" == typeof l.left && (l.left += "px"), k.css(l));
        }
    }, v.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                v.offset.setOffset(this, a, b);
            });
            var b, c, d = this[0];
            return d ? d.getClientRects().length ? (b = d.getBoundingClientRect(), c = d.ownerDocument.defaultView, 
            {
                top: b.top + c.pageYOffset,
                left: b.left + c.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0;
        },
        position: function() {
            if (this[0]) {
                var a, b, c, d = this[0], e = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === v.css(d, "position")) b = d.getBoundingClientRect(); else {
                    b = this.offset(), c = d.ownerDocument, a = d.offsetParent || c.documentElement;
                    while (a && (a === c.body || a === c.documentElement) && "static" === v.css(a, "position")) a = a.parentNode;
                    a && a !== d && 1 === a.nodeType && ((e = v(a).offset()).top += v.css(a, "borderTopWidth", !0), 
                    e.left += v.css(a, "borderLeftWidth", !0));
                }
                return {
                    top: b.top - e.top - v.css(d, "marginTop", !0),
                    left: b.left - e.left - v.css(d, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && "static" === v.css(a, "position")) a = a.offsetParent;
                return a || db;
            });
        }
    }), v.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        v.fn[a] = function(d) {
            return Q(this, function(a, d, e) {
                var f;
                if (p(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e) return f ? f[b] : a[d];
                f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e;
            }, a, d, arguments.length);
        };
    }), v.each([ "top", "left" ], function(a, b) {
        v.cssHooks[b] = Qb(n.pixelPosition, function(a, c) {
            if (c) return c = Pb(a, b), Lb.test(c) ? v(a).position()[b] + "px" : c;
        });
    }), v.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        v.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            v.fn[d] = function(e, f) {
                var g = arguments.length && (c || "boolean" != typeof e), h = c || (!0 === e || !0 === f ? "margin" : "border");
                return Q(this, function(b, c, e) {
                    var f;
                    return p(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, 
                    Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? v.css(b, c, h) : v.style(b, c, e, h);
                }, b, g ? e : void 0, g);
            };
        });
    }), v.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        v.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), v.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        },
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        }
    }), v.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) {
        v.fn[b] = function(a, c) {
            return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b);
        };
    });
    var Wc = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    v.proxy = function(a, b) {
        var c, d, f;
        if ("string" == typeof b && (c = a[b], b = a, a = c), o(a)) return d = e.call(arguments, 2), 
        (f = function() {
            return a.apply(b || this, d.concat(e.call(arguments)));
        }).guid = a.guid = a.guid || v.guid++, f;
    }, v.holdReady = function(a) {
        a ? v.readyWait++ : v.ready(!0);
    }, v.isArray = Array.isArray, v.parseJSON = JSON.parse, v.nodeName = B, v.isFunction = o, 
    v.isWindow = p, v.camelCase = U, v.type = t, v.now = Date.now, v.isNumeric = function(a) {
        var b = v.type(a);
        return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
    }, v.trim = function(a) {
        return null == a ? "" : (a + "").replace(Wc, "");
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return v;
    });
    var Xc = a.jQuery, Yc = a.$;
    return v.noConflict = function(b) {
        return a.$ === v && (a.$ = Yc), b && a.jQuery === v && (a.jQuery = Xc), v;
    }, "undefined" == typeof b && (a.jQuery = a.$ = v), v;
});
