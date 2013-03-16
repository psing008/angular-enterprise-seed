/*
 From http://code.angularjs.org/snapshot/angular.min.js 1/11/13 (working around bug found when using accordion)

 AngularJS v1.0.4-51d501aa
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
 */
(function (U, ba, p) {
    'use strict';
    function m(b, a, c) {
        var d;
        if (b)if (N(b))for (d in b)d != "prototype" && d != "length" && d != "name" && b.hasOwnProperty(d) && a.call(c, b[d], d); else if (b.forEach && b.forEach !== m)b.forEach(a, c); else if (L(b) && wa(b.length))for (d = 0; d < b.length; d++)a.call(c, b[d], d); else for (d in b)b.hasOwnProperty(d) && a.call(c, b[d], d);
        return b
    }

    function lb(b) {
        var a = [], c;
        for (c in b)b.hasOwnProperty(c) && a.push(c);
        return a.sort()
    }

    function ec(b, a, c) {
        for (var d = lb(b), e = 0; e < d.length; e++)a.call(c, b[d[e]], d[e]);
        return d
    }

    function mb(b) {
        return function (a, c) {
            b(c, a)
        }
    }

    function xa() {
        for (var b = Y.length, a; b;) {
            b--;
            a = Y[b].charCodeAt(0);
            if (a == 57)return Y[b] = "A", Y.join("");
            if (a == 90)Y[b] = "0"; else return Y[b] = String.fromCharCode(a + 1), Y.join("")
        }
        Y.unshift("0");
        return Y.join("")
    }

    function x(b) {
        m(arguments, function (a) {
            a !== b && m(a, function (a, d) {
                b[d] = a
            })
        });
        return b
    }

    function G(b) {
        return parseInt(b, 10)
    }

    function ya(b, a) {
        return x(new (x(function () {
        }, {prototype:b})), a)
    }

    function D() {
    }

    function ma(b) {
        return b
    }

    function J(b) {
        return function () {
            return b
        }
    }

    function u(b) {
        return typeof b == "undefined"
    }

    function v(b) {
        return typeof b != "undefined"
    }

    function L(b) {
        return b != null && typeof b == "object"
    }

    function F(b) {
        return typeof b == "string"
    }

    function wa(b) {
        return typeof b == "number"
    }

    function na(b) {
        return Sa.apply(b) == "[object Date]"
    }

    function H(b) {
        return Sa.apply(b) == "[object Array]"
    }

    function N(b) {
        return typeof b == "function"
    }

    function oa(b) {
        return b && b.document && b.location && b.alert && b.setInterval
    }

    function R(b) {
        return F(b) ? b.replace(/^\s*/, "").replace(/\s*$/, "") : b
    }

    function fc(b) {
        return b &&
            (b.nodeName || b.bind && b.find)
    }

    function Ta(b, a, c) {
        var d = [];
        m(b, function (b, g, i) {
            d.push(a.call(c, b, g, i))
        });
        return d
    }

    function gc(b, a) {
        var c = 0, d;
        if (H(b) || F(b))return b.length; else if (L(b))for (d in b)(!a || b.hasOwnProperty(d)) && c++;
        return c
    }

    function za(b, a) {
        if (b.indexOf)return b.indexOf(a);
        for (var c = 0; c < b.length; c++)if (a === b[c])return c;
        return-1
    }

    function Ua(b, a) {
        var c = za(b, a);
        c >= 0 && b.splice(c, 1);
        return a
    }

    function V(b, a) {
        if (oa(b) || b && b.$evalAsync && b.$watch)throw B("Can't copy Window or Scope");
        if (a) {
            if (b ===
                a)throw B("Can't copy equivalent objects or arrays");
            if (H(b)) {
                for (; a.length;)a.pop();
                for (var c = 0; c < b.length; c++)a.push(V(b[c]))
            } else for (c in m(a, function (b, c) {
                delete a[c]
            }), b)a[c] = V(b[c])
        } else(a = b) && (H(b) ? a = V(b, []) : na(b) ? a = new Date(b.getTime()) : L(b) && (a = V(b, {})));
        return a
    }

    function hc(b, a) {
        var a = a || {}, c;
        for (c in b)b.hasOwnProperty(c) && c.substr(0, 2) !== "$$" && (a[c] = b[c]);
        return a
    }

    function ha(b, a) {
        if (b === a)return!0;
        if (b === null || a === null)return!1;
        if (b !== b && a !== a)return!0;
        var c = typeof b, d;
        if (c == typeof a &&
            c == "object")if (H(b)) {
            if ((c = b.length) == a.length) {
                for (d = 0; d < c; d++)if (!ha(b[d], a[d]))return!1;
                return!0
            }
        } else if (na(b))return na(a) && b.getTime() == a.getTime(); else {
            if (b && b.$evalAsync && b.$watch || a && a.$evalAsync && a.$watch || oa(b) || oa(a))return!1;
            c = {};
            for (d in b) {
                if (d.charAt(0) !== "$" && !N(b[d]) && !ha(b[d], a[d]))return!1;
                c[d] = !0
            }
            for (d in a)if (!c[d] && d.charAt(0) !== "$" && !N(a[d]))return!1;
            return!0
        }
        return!1
    }

    function Va(b, a) {
        var c = arguments.length > 2 ? ia.call(arguments, 2) : [];
        return N(a) && !(a instanceof RegExp) ? c.length ?
            function () {
                return arguments.length ? a.apply(b, c.concat(ia.call(arguments, 0))) : a.apply(b, c)
            } : function () {
            return arguments.length ? a.apply(b, arguments) : a.call(b)
        } : a
    }

    function ic(b, a) {
        var c = a;
        /^\$+/.test(b) ? c = p : oa(a) ? c = "$WINDOW" : a && ba === a ? c = "$DOCUMENT" : a && a.$evalAsync && a.$watch && (c = "$SCOPE");
        return c
    }

    function ca(b, a) {
        return JSON.stringify(b, ic, a ? "  " : null)
    }

    function nb(b) {
        return F(b) ? JSON.parse(b) : b
    }

    function Wa(b) {
        b && b.length !== 0 ? (b = E("" + b), b = !(b == "f" || b == "0" || b == "false" || b == "no" || b == "n" || b == "[]")) : b = !1;
        return b
    }

    function pa(b) {
        b = s(b).clone();
        try {
            b.html("")
        } catch (a) {
        }
        return s("<div>").append(b).html().match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
            return"<" + E(b)
        })
    }

    function Xa(b) {
        var a = {}, c, d;
        m((b || "").split("&"), function (b) {
            b && (c = b.split("="), d = decodeURIComponent(c[0]), a[d] = v(c[1]) ? decodeURIComponent(c[1]) : !0)
        });
        return a
    }

    function ob(b) {
        var a = [];
        m(b, function (b, d) {
            a.push(Ya(d, !0) + (b === !0 ? "" : "=" + Ya(b, !0)))
        });
        return a.length ? a.join("&") : ""
    }

    function Za(b) {
        return Ya(b, !0).replace(/%26/gi, "&").replace(/%3D/gi,
            "=").replace(/%2B/gi, "+")
    }

    function Ya(b, a) {
        return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(a ? null : /%20/g, "+")
    }

    function jc(b, a) {
        function c(a) {
            a && d.push(a)
        }

        var d = [b], e, g, i = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"], f = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        m(i, function (a) {
            i[a] = !0;
            c(ba.getElementById(a));
            a = a.replace(":", "\\:");
            b.querySelectorAll && (m(b.querySelectorAll("." + a), c), m(b.querySelectorAll("." + a + "\\:"), c), m(b.querySelectorAll("[" +
                a + "]"), c))
        });
        m(d, function (a) {
            if (!e) {
                var b = f.exec(" " + a.className + " ");
                b ? (e = a, g = (b[2] || "").replace(/\s+/g, ",")) : m(a.attributes, function (b) {
                    if (!e && i[b.name])e = a, g = b.value
                })
            }
        });
        e && a(e, g ? [g] : [])
    }

    function pb(b, a) {
        b = s(b);
        a = a || [];
        a.unshift(["$provide", function (a) {
            a.value("$rootElement", b)
        }]);
        a.unshift("ng");
        var c = qb(a);
        c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, i) {
            a.$apply(function () {
                b.data("$injector", i);
                c(b)(a)
            })
        }]);
        return c
    }

    function $a(b, a) {
        a = a || "_";
        return b.replace(kc,
            function (b, d) {
                return(d ? a : "") + b.toLowerCase()
            })
    }

    function qa(b, a, c) {
        if (!b)throw new B("Argument '" + (a || "?") + "' is " + (c || "required"));
        return b
    }

    function ra(b, a, c) {
        c && H(b) && (b = b[b.length - 1]);
        qa(N(b), a, "not a function, got " + (b && typeof b == "object" ? b.constructor.name || "Object" : typeof b));
        return b
    }

    function lc(b) {
        function a(a, b, e) {
            return a[b] || (a[b] = e())
        }

        return a(a(b, "angular", Object), "module", function () {
            var b = {};
            return function (d, e, g) {
                e && b.hasOwnProperty(d) && (b[d] = null);
                return a(b, d, function () {
                    function a(c, d, e) {
                        return function () {
                            b[e || "push"]([c, d, arguments]);
                            return j
                        }
                    }

                    if (!e)throw B("No module: " + d);
                    var b = [], c = [], k = a("$injector", "invoke"), j = {_invokeQueue:b, _runBlocks:c, requires:e, name:d, provider:a("$provide", "provider"), factory:a("$provide", "factory"), service:a("$provide", "service"), value:a("$provide", "value"), constant:a("$provide", "constant", "unshift"), filter:a("$filterProvider", "register"), controller:a("$controllerProvider", "register"), directive:a("$compileProvider", "directive"), config:k, run:function (a) {
                        c.push(a);
                        return this
                    }};
                    g && k(g);
                    return j
                })
            }
        })
    }

    function rb(b) {
        return b.replace(mc,function (a, b, d, e) {
            return e ? d.toUpperCase() : d
        }).replace(nc, "Moz$1")
    }

    function ab(b, a) {
        function c() {
            var e;
            for (var b = [this], c = a, i, f, h, k, j, l; b.length;) {
                i = b.shift();
                f = 0;
                for (h = i.length; f < h; f++) {
                    k = s(i[f]);
                    c ? k.triggerHandler("$destroy") : c = !c;
                    j = 0;
                    for (e = (l = k.children()).length, k = e; j < k; j++)b.push(ja(l[j]))
                }
            }
            return d.apply(this, arguments)
        }

        var d = ja.fn[b], d = d.$original || d;
        c.$original = d;
        ja.fn[b] = c
    }

    function Q(b) {
        if (b instanceof Q)return b;
        if (!(this instanceof
            Q)) {
            if (F(b) && b.charAt(0) != "<")throw B("selectors not implemented");
            return new Q(b)
        }
        if (F(b)) {
            var a = ba.createElement("div");
            a.innerHTML = "<div>&#160;</div>" + b;
            a.removeChild(a.firstChild);
            bb(this, a.childNodes);
            this.remove()
        } else bb(this, b)
    }

    function cb(b) {
        return b.cloneNode(!0)
    }

    function sa(b) {
        sb(b);
        for (var a = 0, b = b.childNodes || []; a < b.length; a++)sa(b[a])
    }

    function tb(b, a, c) {
        var d = Z(b, "events");
        Z(b, "handle") && (u(a) ? m(d, function (a, c) {
            db(b, c, a);
            delete d[c]
        }) : u(c) ? (db(b, a, d[a]), delete d[a]) : Ua(d[a], c))
    }

    function sb(b) {
        var a =
            b[Aa], c = Ba[a];
        c && (c.handle && (c.events.$destroy && c.handle({}, "$destroy"), tb(b)), delete Ba[a], b[Aa] = p)
    }

    function Z(b, a, c) {
        var d = b[Aa], d = Ba[d || -1];
        if (v(c))d || (b[Aa] = d = ++oc, d = Ba[d] = {}), d[a] = c; else return d && d[a]
    }

    function ub(b, a, c) {
        var d = Z(b, "data"), e = v(c), g = !e && v(a), i = g && !L(a);
        !d && !i && Z(b, "data", d = {});
        if (e)d[a] = c; else if (g)if (i)return d && d[a]; else x(d, a); else return d
    }

    function Ca(b, a) {
        return(" " + b.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") > -1
    }

    function vb(b, a) {
        a && m(a.split(" "), function (a) {
            b.className =
                R((" " + b.className + " ").replace(/[\n\t]/g, " ").replace(" " + R(a) + " ", " "))
        })
    }

    function wb(b, a) {
        a && m(a.split(" "), function (a) {
            if (!Ca(b, a))b.className = R(b.className + " " + R(a))
        })
    }

    function bb(b, a) {
        if (a)for (var a = !a.nodeName && v(a.length) && !oa(a) ? a : [a], c = 0; c < a.length; c++)b.push(a[c])
    }

    function xb(b, a) {
        return Da(b, "$" + (a || "ngController") + "Controller")
    }

    function Da(b, a, c) {
        b = s(b);
        for (b[0].nodeType == 9 && (b = b.find("html")); b.length;) {
            if (c = b.data(a))return c;
            b = b.parent()
        }
    }

    function yb(b, a) {
        var c = Ea[a.toLowerCase()];
        return c && zb[b.nodeName] && c
    }

    function pc(b, a) {
        var c = function (c, e) {
            if (!c.preventDefault)c.preventDefault = function () {
                c.returnValue = !1
            };
            if (!c.stopPropagation)c.stopPropagation = function () {
                c.cancelBubble = !0
            };
            if (!c.target)c.target = c.srcElement || ba;
            if (u(c.defaultPrevented)) {
                var g = c.preventDefault;
                c.preventDefault = function () {
                    c.defaultPrevented = !0;
                    g.call(c)
                };
                c.defaultPrevented = !1
            }
            c.isDefaultPrevented = function () {
                return c.defaultPrevented
            };
            m(a[e || c.type], function (a) {
                a.call(b, c)
            });
            $ <= 8 ? (c.preventDefault = null,
                c.stopPropagation = null, c.isDefaultPrevented = null) : (delete c.preventDefault, delete c.stopPropagation, delete c.isDefaultPrevented)
        };
        c.elem = b;
        return c
    }

    function fa(b) {
        var a = typeof b, c;
        if (a == "object" && b !== null)if (typeof(c = b.$$hashKey) == "function")c = b.$$hashKey(); else {
            if (c === p)c = b.$$hashKey = xa()
        } else c = b;
        return a + ":" + c
    }

    function Fa(b) {
        m(b, this.put, this)
    }

    function eb() {
    }

    function Ab(b) {
        var a, c;
        if (typeof b == "function") {
            if (!(a = b.$inject))a = [], c = b.toString().replace(qc, ""), c = c.match(rc), m(c[1].split(sc), function (b) {
                b.replace(tc,
                    function (b, c, d) {
                        a.push(d)
                    })
            }), b.$inject = a
        } else H(b) ? (c = b.length - 1, ra(b[c], "fn"), a = b.slice(0, c)) : ra(b, "fn", !0);
        return a
    }

    function qb(b) {
        function a(a) {
            return function (b, c) {
                if (L(b))m(b, mb(a)); else return a(b, c)
            }
        }

        function c(a, b) {
            if (N(b) || H(b))b = l.instantiate(b);
            if (!b.$get)throw B("Provider " + a + " must define $get factory method.");
            return j[a + f] = b
        }

        function d(a, b) {
            return c(a, {$get:b})
        }

        function e(a) {
            var b = [];
            m(a, function (a) {
                if (!k.get(a))if (k.put(a, !0), F(a)) {
                    var c = ta(a);
                    b = b.concat(e(c.requires)).concat(c._runBlocks);
                    try {
                        for (var d = c._invokeQueue, c = 0, f = d.length; c < f; c++) {
                            var h = d[c], g = h[0] == "$injector" ? l : l.get(h[0]);
                            g[h[1]].apply(g, h[2])
                        }
                    } catch (n) {
                        throw n.message && (n.message += " from " + a), n;
                    }
                } else if (N(a))try {
                    b.push(l.invoke(a))
                } catch (i) {
                    throw i.message && (i.message += " from " + a), i;
                } else if (H(a))try {
                    b.push(l.invoke(a))
                } catch (j) {
                    throw j.message && (j.message += " from " + String(a[a.length - 1])), j;
                } else ra(a, "module")
            });
            return b
        }

        function g(a, b) {
            function c(d) {
                if (typeof d !== "string")throw B("Service name expected");
                if (a.hasOwnProperty(d)) {
                    if (a[d] ===
                        i)throw B("Circular dependency: " + h.join(" <- "));
                    return a[d]
                } else try {
                    return h.unshift(d), a[d] = i, a[d] = b(d)
                } finally {
                    h.shift()
                }
            }

            function d(a, b, e) {
                var f = [], h = Ab(a), k, g, n;
                g = 0;
                for (k = h.length; g < k; g++)n = h[g], f.push(e && e.hasOwnProperty(n) ? e[n] : c(n));
                a.$inject || (a = a[k]);
                switch (b ? -1 : f.length) {
                    case 0:
                        return a();
                    case 1:
                        return a(f[0]);
                    case 2:
                        return a(f[0], f[1]);
                    case 3:
                        return a(f[0], f[1], f[2]);
                    case 4:
                        return a(f[0], f[1], f[2], f[3]);
                    case 5:
                        return a(f[0], f[1], f[2], f[3], f[4]);
                    case 6:
                        return a(f[0], f[1], f[2], f[3], f[4],
                            f[5]);
                    case 7:
                        return a(f[0], f[1], f[2], f[3], f[4], f[5], f[6]);
                    case 8:
                        return a(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7]);
                    case 9:
                        return a(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8]);
                    case 10:
                        return a(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9]);
                    default:
                        return a.apply(b, f)
                }
            }

            return{invoke:d, instantiate:function (a, b) {
                var c = function () {
                }, e;
                c.prototype = (H(a) ? a[a.length - 1] : a).prototype;
                c = new c;
                e = d(a, c, b);
                return L(e) ? e : c
            }, get:c, annotate:Ab}
        }

        var i = {}, f = "Provider", h = [], k = new Fa, j = {$provide:{provider:a(c), factory:a(d),
            service:a(function (a, b) {
                return d(a, ["$injector", function (a) {
                    return a.instantiate(b)
                }])
            }), value:a(function (a, b) {
                return d(a, J(b))
            }), constant:a(function (a, b) {
                j[a] = b;
                o[a] = b
            }), decorator:function (a, b) {
                var c = l.get(a + f), d = c.$get;
                c.$get = function () {
                    var a = r.invoke(d, c);
                    return r.invoke(b, null, {$delegate:a})
                }
            }}}, l = g(j, function () {
            throw B("Unknown provider: " + h.join(" <- "));
        }), o = {}, r = o.$injector = g(o, function (a) {
            a = l.get(a + f);
            return r.invoke(a.$get, a)
        });
        m(e(b), function (a) {
            r.invoke(a || D)
        });
        return r
    }

    function uc() {
        var b =
            !0;
        this.disableAutoScrolling = function () {
            b = !1
        };
        this.$get = ["$window", "$location", "$rootScope", function (a, c, d) {
            function e(a) {
                var b = null;
                m(a, function (a) {
                    !b && E(a.nodeName) === "a" && (b = a)
                });
                return b
            }

            function g() {
                var b = c.hash(), d;
                b ? (d = i.getElementById(b)) ? d.scrollIntoView() : (d = e(i.getElementsByName(b))) ? d.scrollIntoView() : b === "top" && a.scrollTo(0, 0) : a.scrollTo(0, 0)
            }

            var i = a.document;
            b && d.$watch(function () {
                return c.hash()
            }, function () {
                d.$evalAsync(g)
            });
            return g
        }]
    }

    function vc(b, a, c, d) {
        function e(a) {
            try {
                a.apply(null,
                    ia.call(arguments, 1))
            } finally {
                if (n--, n === 0)for (; w.length;)try {
                    w.pop()()
                } catch (b) {
                    c.error(b)
                }
            }
        }

        function g(a, b) {
            (function da() {
                m(q, function (a) {
                    a()
                });
                t = b(da, a)
            })()
        }

        function i() {
            O != f.url() && (O = f.url(), m(A, function (a) {
                a(f.url())
            }))
        }

        var f = this, h = a[0], k = b.location, j = b.history, l = b.setTimeout, o = b.clearTimeout, r = {};
        f.isMock = !1;
        var n = 0, w = [];
        f.$$completeOutstandingRequest = e;
        f.$$incOutstandingRequestCount = function () {
            n++
        };
        f.notifyWhenNoOutstandingRequests = function (a) {
            m(q, function (a) {
                a()
            });
            n === 0 ? a() : w.push(a)
        };
        var q = [], t;
        f.addPollFn = function (a) {
            u(t) && g(100, l);
            q.push(a);
            return a
        };
        var O = k.href, C = a.find("base");
        f.url = function (a, b) {
            if (a) {
                if (O != a)return O = a, d.history ? b ? j.replaceState(null, "", a) : (j.pushState(null, "", a), C.attr("href", C.attr("href"))) : b ? k.replace(a) : k.href = a, f
            } else return k.href.replace(/%27/g, "'")
        };
        var A = [], K = !1;
        f.onUrlChange = function (a) {
            K || (d.history && s(b).bind("popstate", i), d.hashchange ? s(b).bind("hashchange", i) : f.addPollFn(i), K = !0);
            A.push(a);
            return a
        };
        f.baseHref = function () {
            var a = C.attr("href");
            return a ? a.replace(/^https?\:\/\/[^\/]*/, "") : a
        };
        var ga = {}, y = "", M = f.baseHref();
        f.cookies = function (a, b) {
            var d, e, f, k;
            if (a)if (b === p)h.cookie = escape(a) + "=;path=" + M + ";expires=Thu, 01 Jan 1970 00:00:00 GMT"; else {
                if (F(b))d = (h.cookie = escape(a) + "=" + escape(b) + ";path=" + M).length + 1, d > 4096 && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!")
            } else {
                if (h.cookie !== y) {
                    y = h.cookie;
                    d = y.split("; ");
                    ga = {};
                    for (f = 0; f < d.length; f++)e = d[f], k = e.indexOf("="), k > 0 && (ga[unescape(e.substring(0,
                        k))] = unescape(e.substring(k + 1)))
                }
                return ga
            }
        };
        f.defer = function (a, b) {
            var c;
            n++;
            c = l(function () {
                delete r[c];
                e(a)
            }, b || 0);
            r[c] = !0;
            return c
        };
        f.defer.cancel = function (a) {
            return r[a] ? (delete r[a], o(a), e(D), !0) : !1
        }
    }

    function wc() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function (b, a, c, d) {
            return new vc(b, d, a, c)
        }]
    }

    function xc() {
        this.$get = function () {
            function b(b, d) {
                function e(a) {
                    if (a != l) {
                        if (o) {
                            if (o == a)o = a.n
                        } else o = a;
                        g(a.n, a.p);
                        g(a, l);
                        l = a;
                        l.n = null
                    }
                }

                function g(a, b) {
                    if (a != b) {
                        if (a)a.p = b;
                        if (b)b.n = a
                    }
                }

                if (b in
                    a)throw B("cacheId " + b + " taken");
                var i = 0, f = x({}, d, {id:b}), h = {}, k = d && d.capacity || Number.MAX_VALUE, j = {}, l = null, o = null;
                return a[b] = {put:function (a, b) {
                    var c = j[a] || (j[a] = {key:a});
                    e(c);
                    u(b) || (a in h || i++, h[a] = b, i > k && this.remove(o.key))
                }, get:function (a) {
                    var b = j[a];
                    if (b)return e(b), h[a]
                }, remove:function (a) {
                    var b = j[a];
                    if (b) {
                        if (b == l)l = b.p;
                        if (b == o)o = b.n;
                        g(b.n, b.p);
                        delete j[a];
                        delete h[a];
                        i--
                    }
                }, removeAll:function () {
                    h = {};
                    i = 0;
                    j = {};
                    l = o = null
                }, destroy:function () {
                    j = f = h = null;
                    delete a[b]
                }, info:function () {
                    return x({},
                        f, {size:i})
                }}
            }

            var a = {};
            b.info = function () {
                var b = {};
                m(a, function (a, e) {
                    b[e] = a.info()
                });
                return b
            };
            b.get = function (b) {
                return a[b]
            };
            return b
        }
    }

    function yc() {
        this.$get = ["$cacheFactory", function (b) {
            return b("templates")
        }]
    }

    function Bb(b) {
        var a = {}, c = "Directive", d = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/, e = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/, g = "Template must have exactly one root element. was: ";
        this.directive = function f(d, e) {
            F(d) ? (qa(e, "directive"), a.hasOwnProperty(d) || (a[d] = [], b.factory(d + c, ["$injector", "$exceptionHandler",
                function (b, c) {
                    var e = [];
                    m(a[d], function (a) {
                        try {
                            var f = b.invoke(a);
                            if (N(f))f = {compile:J(f)}; else if (!f.compile && f.link)f.compile = J(f.link);
                            f.priority = f.priority || 0;
                            f.name = f.name || d;
                            f.require = f.require || f.controller && f.name;
                            f.restrict = f.restrict || "A";
                            e.push(f)
                        } catch (k) {
                            c(k)
                        }
                    });
                    return e
                }])), a[d].push(e)) : m(d, mb(f));
            return this
        };
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", function (b, h, k, j, l, o, r, n) {
            function w(a, b, c) {
                a instanceof s ||
                (a = s(a));
                m(a, function (b, c) {
                    b.nodeType == 3 && (a[c] = s(b).wrap("<span></span>").parent()[0])
                });
                var d = t(a, b, a, c);
                return function (b, c) {
                    qa(b, "scope");
                    var e = c ? ua.clone.call(a) : a;
                    e.data("$scope", b);
                    q(e, "ng-scope");
                    c && c(e, b);
                    d && d(b, e, e);
                    return e
                }
            }

            function q(a, b) {
                try {
                    a.addClass(b)
                } catch (c) {
                }
            }

            function t(a, b, c, d) {
                function e(a, c, d, k) {
                    for (var g, h, j, n, o, l = 0, r = 0, q = f.length; l < q; r++)j = c[r], g = f[l++], h = f[l++], g ? (g.scope ? (n = a.$new(L(g.scope)), s(j).data("$scope", n)) : n = a, (o = g.transclude) || !k && b ? g(h, n, j, d, function (b) {
                        return function (c) {
                            var d =
                                a.$new();
                            return b(d, c).bind("$destroy", Va(d, d.$destroy))
                        }
                    }(o || b)) : g(h, n, j, p, k)) : h && h(a, j.childNodes, p, k)
                }

                for (var f = [], k, g, h, j = 0; j < a.length; j++)g = new da, k = O(a[j], [], g, d), g = (k = k.length ? C(k, a[j], g, b, c) : null) && k.terminal || !a[j].childNodes.length ? null : t(a[j].childNodes, k ? k.transclude : b), f.push(k), f.push(g), h = h || k || g;
                return h ? e : null
            }

            function O(a, b, c, f) {
                var k = c.$attr, g;
                switch (a.nodeType) {
                    case 1:
                        A(b, ea(Cb(a).toLowerCase()), "E", f);
                        var h, j, n;
                        g = a.attributes;
                        for (var o = 0, l = g && g.length; o < l; o++)if (h = g[o], h.specified)j =
                            h.name, n = ea(j.toLowerCase()), k[n] = j, c[n] = h = R($ && j == "href" ? decodeURIComponent(a.getAttribute(j, 2)) : h.value), yb(a, n) && (c[n] = !0), W(a, b, h, n), A(b, n, "A", f);
                        a = a.className;
                        if (F(a) && a !== "")for (; g = e.exec(a);)n = ea(g[2]), A(b, n, "C", f) && (c[n] = R(g[3])), a = a.substr(g.index + g[0].length);
                        break;
                    case 3:
                        I(b, a.nodeValue);
                        break;
                    case 8:
                        try {
                            if (g = d.exec(a.nodeValue))n = ea(g[1]), A(b, n, "M", f) && (c[n] = R(g[2]))
                        } catch (r) {
                        }
                }
                b.sort(y);
                return b
            }

            function C(a, b, c, d, e) {
                function f(a, b) {
                    if (a)a.require = z.require, l.push(a);
                    if (b)b.require = z.require,
                        aa.push(b)
                }

                function h(a, b) {
                    var c, d = "data", e = !1;
                    if (F(a)) {
                        for (; (c = a.charAt(0)) == "^" || c == "?";)a = a.substr(1), c == "^" && (d = "inheritedData"), e = e || c == "?";
                        c = b[d]("$" + a + "Controller");
                        if (!c && !e)throw B("No controller: " + a);
                    } else H(a) && (c = [], m(a, function (a) {
                        c.push(h(a, b))
                    }));
                    return c
                }

                function j(a, d, e, f, g) {
                    var n, q, w, K, t;
                    n = b === e ? c : hc(c, new da(s(e), c.$attr));
                    q = n.$$element;
                    if (C) {
                        var zc = /^\s*([@=&])\s*(\w*)\s*$/, O = d.$parent || d;
                        m(C.scope, function (a, b) {
                            var c = a.match(zc) || [], e = c[2] || b, f, g, k;
                            switch (c[1]) {
                                case "@":
                                    n.$observe(e,
                                        function (a) {
                                            d[b] = a
                                        });
                                    n.$$observers[e].$$scope = O;
                                    break;
                                case "=":
                                    g = o(n[e]);
                                    k = g.assign || function () {
                                        f = d[b] = g(O);
                                        throw B(Db + n[e] + " (directive: " + C.name + ")");
                                    };
                                    f = d[b] = g(O);
                                    d.$watch(function () {
                                        var a = g(O);
                                        a !== d[b] && (a !== f ? f = d[b] = a : k(O, a = f = d[b]));
                                        return a
                                    });
                                    break;
                                case "&":
                                    g = o(n[e]);
                                    d[b] = function (a) {
                                        return g(O, a)
                                    };
                                    break;
                                default:
                                    throw B("Invalid isolate scope definition for directive " + C.name + ": " + a);
                            }
                        })
                    }
                    u && m(u, function (a) {
                        var b = {$scope:d, $element:q, $attrs:n, $transclude:g};
                        t = a.controller;
                        t == "@" && (t = n[a.name]);
                        q.data("$" + a.name + "Controller", r(t, b))
                    });
                    f = 0;
                    for (w = l.length; f < w; f++)try {
                        K = l[f], K(d, q, n, K.require && h(K.require, q))
                    } catch (y) {
                        k(y, pa(q))
                    }
                    a && a(d, e.childNodes, p, g);
                    f = 0;
                    for (w = aa.length; f < w; f++)try {
                        K = aa[f], K(d, q, n, K.require && h(K.require, q))
                    } catch (Ha) {
                        k(Ha, pa(q))
                    }
                }

                for (var n = -Number.MAX_VALUE, l = [], aa = [], t = null, C = null, A = null, y = c.$$element = s(b), z, I, W, D, v = d, u, x, X, E = 0, G = a.length; E < G; E++) {
                    z = a[E];
                    W = p;
                    if (n > z.priority)break;
                    if (X = z.scope)M("isolated scope", C, z, y), L(X) && (q(y, "ng-isolate-scope"), C = z), q(y, "ng-scope"),
                        t = t || z;
                    I = z.name;
                    if (X = z.controller)u = u || {}, M("'" + I + "' controller", u[I], z, y), u[I] = z;
                    if (X = z.transclude)M("transclusion", D, z, y), D = z, n = z.priority, X == "element" ? (W = s(b), y = c.$$element = s("<\!-- " + I + ": " + c[I] + " --\>"), b = y[0], Ga(e, s(W[0]), b), v = w(W, d, n)) : (W = s(cb(b)).contents(), y.html(""), v = w(W, d));
                    if (X = z.template)if (M("template", A, z, y), A = z, X = Ha(X), z.replace) {
                        W = s("<div>" + R(X) + "</div>").contents();
                        b = W[0];
                        if (W.length != 1 || b.nodeType !== 1)throw new B(g + X);
                        Ga(e, y, b);
                        I = {$attr:{}};
                        a = a.concat(O(b, a.splice(E + 1, a.length -
                            (E + 1)), I));
                        K(c, I);
                        G = a.length
                    } else y.html(X);
                    if (z.templateUrl)M("template", A, z, y), A = z, j = ga(a.splice(E, a.length - E), j, y, c, e, z.replace, v), G = a.length; else if (z.compile)try {
                        x = z.compile(y, c, v), N(x) ? f(null, x) : x && f(x.pre, x.post)
                    } catch (J) {
                        k(J, pa(y))
                    }
                    if (z.terminal)j.terminal = !0, n = Math.max(n, z.priority)
                }
                j.scope = t && t.scope;
                j.transclude = D && v;
                return j
            }

            function A(d, e, g, h) {
                var j = !1;
                if (a.hasOwnProperty(e))for (var n, e = b.get(e + c), o = 0, l = e.length; o < l; o++)try {
                    if (n = e[o], (h === p || h > n.priority) && n.restrict.indexOf(g) != -1)d.push(n),
                        j = !0
                } catch (r) {
                    k(r)
                }
                return j
            }

            function K(a, b) {
                var c = b.$attr, d = a.$attr, e = a.$$element;
                m(a, function (d, e) {
                    e.charAt(0) != "$" && (b[e] && (d += (e === "style" ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                });
                m(b, function (b, f) {
                    f == "class" ? (q(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : f == "style" ? e.attr("style", e.attr("style") + ";" + b) : f.charAt(0) != "$" && !a.hasOwnProperty(f) && (a[f] = b, d[f] = c[f])
                })
            }

            function ga(a, b, c, d, e, f, k) {
                var h = [], n, o, r = c[0], q = a.shift(), w = x({}, q, {controller:null, templateUrl:null, transclude:null, scope:null});
                c.html("");
                j.get(q.templateUrl, {cache:l}).success(function (j) {
                    var l, q, j = Ha(j);
                    if (f) {
                        q = s("<div>" + R(j) + "</div>").contents();
                        l = q[0];
                        if (q.length != 1 || l.nodeType !== 1)throw new B(g + j);
                        j = {$attr:{}};
                        Ga(e, c, l);
                        O(l, a, j);
                        K(d, j)
                    } else l = r, c.html(j);
                    a.unshift(w);
                    n = C(a, c, d, k);
                    for (o = t(c.contents(), k); h.length;) {
                        var aa = h.pop(), j = h.pop();
                        q = h.pop();
                        var y = h.pop(), m = l;
                        q !== r && (m = cb(l), Ga(j, s(q), m));
                        n(function () {
                            b(o, y, m, e, aa)
                        }, y, m, e, aa)
                    }
                    h = null
                }).error(function (a, b, c, d) {
                        throw B("Failed to load template: " + d.url);
                    });
                return function (a, c, d, e, f) {
                    h ? (h.push(c), h.push(d), h.push(e), h.push(f)) : n(function () {
                        b(o, c, d, e, f)
                    }, c, d, e, f)
                }
            }

            function y(a, b) {
                return b.priority - a.priority
            }

            function M(a, b, c, d) {
                if (b)throw B("Multiple directives [" + b.name + ", " + c.name + "] asking for " + a + " on: " + pa(d));
            }

            function I(a, b) {
                var c = h(b, !0);
                c && a.push({priority:0, compile:J(function (a, b) {
                    var d = b.parent(), e = d.data("$binding") || [];
                    e.push(c);
                    q(d.data("$binding", e), "ng-binding");
                    a.$watch(c, function (a) {
                        b[0].nodeValue = a
                    })
                })})
            }

            function W(a, b, c, d) {
                var e = h(c, !0);
                e && b.push({priority:100,
                    compile:J(function (a, b, c) {
                        b = c.$$observers || (c.$$observers = {});
                        d === "class" && (e = h(c[d], !0));
                        c[d] = p;
                        (b[d] || (b[d] = [])).$$inter = !0;
                        (c.$$observers && c.$$observers[d].$$scope || a).$watch(e, function (a) {
                            c.$set(d, a)
                        })
                    })})
            }

            function Ga(a, b, c) {
                var d = b[0], e = d.parentNode, f, g;
                if (a) {
                    f = 0;
                    for (g = a.length; f < g; f++)if (a[f] == d) {
                        a[f] = c;
                        break
                    }
                }
                e && e.replaceChild(c, d);
                c[s.expando] = d[s.expando];
                b[0] = c
            }

            var da = function (a, b) {
                this.$$element = a;
                this.$attr = b || {}
            };
            da.prototype = {$normalize:ea, $set:function (a, b, c, d) {
                var e = yb(this.$$element[0],
                    a), f = this.$$observers;
                e && (this.$$element.prop(a, b), d = e);
                this[a] = b;
                d ? this.$attr[a] = d : (d = this.$attr[a]) || (this.$attr[a] = d = $a(a, "-"));
                c !== !1 && (b === null || b === p ? this.$$element.removeAttr(d) : this.$$element.attr(d, b));
                f && m(f[a], function (a) {
                    try {
                        a(b)
                    } catch (c) {
                        k(c)
                    }
                })
            }, $observe:function (a, b) {
                var c = this, d = c.$$observers || (c.$$observers = {}), e = d[a] || (d[a] = []);
                e.push(b);
                n.$evalAsync(function () {
                    e.$$inter || b(c[a])
                });
                return b
            }};
            var D = h.startSymbol(), aa = h.endSymbol(), Ha = D == "{{" || aa == "}}" ? ma : function (a) {
                return a.replace(/\{\{/g,
                    D).replace(/}}/g, aa)
            };
            return w
        }]
    }

    function ea(b) {
        return rb(b.replace(Ac, ""))
    }

    function Bc() {
        var b = {};
        this.register = function (a, c) {
            L(a) ? x(b, a) : b[a] = c
        };
        this.$get = ["$injector", "$window", function (a, c) {
            return function (d, e) {
                if (F(d)) {
                    var g = d, d = b.hasOwnProperty(g) ? b[g] : fb(e.$scope, g, !0) || fb(c, g, !0);
                    ra(d, g, !0)
                }
                return a.instantiate(d, e)
            }
        }]
    }

    function Cc() {
        this.$get = ["$window", function (b) {
            return s(b.document)
        }]
    }

    function Dc() {
        this.$get = ["$log", function (b) {
            return function (a, c) {
                b.error.apply(b, arguments)
            }
        }]
    }

    function Ec() {
        var b =
            "{{", a = "}}";
        this.startSymbol = function (a) {
            return a ? (b = a, this) : b
        };
        this.endSymbol = function (b) {
            return b ? (a = b, this) : a
        };
        this.$get = ["$parse", function (c) {
            function d(d, f) {
                for (var h, k, j = 0, l = [], o = d.length, r = !1, n = []; j < o;)(h = d.indexOf(b, j)) != -1 && (k = d.indexOf(a, h + e)) != -1 ? (j != h && l.push(d.substring(j, h)), l.push(j = c(r = d.substring(h + e, k))), j.exp = r, j = k + g, r = !0) : (j != o && l.push(d.substring(j)), j = o);
                if (!(o = l.length))l.push(""), o = 1;
                if (!f || r)return n.length = o, j = function (a) {
                    for (var b = 0, c = o, d; b < c; b++) {
                        if (typeof(d = l[b]) == "function")d =
                            d(a), d == null || d == p ? d = "" : typeof d != "string" && (d = ca(d));
                        n[b] = d
                    }
                    return n.join("")
                }, j.exp = d, j.parts = l, j
            }

            var e = b.length, g = a.length;
            d.startSymbol = function () {
                return b
            };
            d.endSymbol = function () {
                return a
            };
            return d
        }]
    }

    function Eb(b) {
        for (var b = b.split("/"), a = b.length; a--;)b[a] = Za(b[a]);
        return b.join("/")
    }

    function va(b, a) {
        var c = Fb.exec(b), c = {protocol:c[1], host:c[3], port:G(c[5]) || Gb[c[1]] || null, path:c[6] || "/", search:c[8], hash:c[10]};
        if (a)a.$$protocol = c.protocol, a.$$host = c.host, a.$$port = c.port;
        return c
    }

    function ka(b, a, c) {
        return b + "://" + a + (c == Gb[b] ? "" : ":" + c)
    }

    function Fc(b, a, c) {
        var d = va(b);
        return decodeURIComponent(d.path) != a || u(d.hash) || d.hash.indexOf(c) !== 0 ? b : ka(d.protocol, d.host, d.port) + a.substr(0, a.lastIndexOf("/")) + d.hash.substr(c.length)
    }

    function Gc(b, a, c) {
        var d = va(b);
        if (decodeURIComponent(d.path) == a)return b; else {
            var e = d.search && "?" + d.search || "", g = d.hash && "#" + d.hash || "", i = a.substr(0, a.lastIndexOf("/")), f = d.path.substr(i.length);
            if (d.path.indexOf(i) !== 0)throw B('Invalid url "' + b + '", missing path prefix "' +
                i + '" !');
            return ka(d.protocol, d.host, d.port) + a + "#" + c + f + e + g
        }
    }

    function gb(b, a, c) {
        a = a || "";
        this.$$parse = function (b) {
            var c = va(b, this);
            if (c.path.indexOf(a) !== 0)throw B('Invalid url "' + b + '", missing path prefix "' + a + '" !');
            this.$$path = decodeURIComponent(c.path.substr(a.length));
            this.$$search = Xa(c.search);
            this.$$hash = c.hash && decodeURIComponent(c.hash) || "";
            this.$$compose()
        };
        this.$$compose = function () {
            var b = ob(this.$$search), c = this.$$hash ? "#" + Za(this.$$hash) : "";
            this.$$url = Eb(this.$$path) + (b ? "?" + b : "") + c;
            this.$$absUrl =
                ka(this.$$protocol, this.$$host, this.$$port) + a + this.$$url
        };
        this.$$rewriteAppUrl = function (a) {
            if (a.indexOf(c) == 0)return a
        };
        this.$$parse(b)
    }

    function Ia(b, a, c) {
        var d;
        this.$$parse = function (b) {
            var c = va(b, this);
            if (c.hash && c.hash.indexOf(a) !== 0)throw B('Invalid url "' + b + '", missing hash prefix "' + a + '" !');
            d = c.path + (c.search ? "?" + c.search : "");
            c = Hc.exec((c.hash || "").substr(a.length));
            this.$$path = c[1] ? (c[1].charAt(0) == "/" ? "" : "/") + decodeURIComponent(c[1]) : "";
            this.$$search = Xa(c[3]);
            this.$$hash = c[5] && decodeURIComponent(c[5]) ||
                "";
            this.$$compose()
        };
        this.$$compose = function () {
            var b = ob(this.$$search), c = this.$$hash ? "#" + Za(this.$$hash) : "";
            this.$$url = Eb(this.$$path) + (b ? "?" + b : "") + c;
            this.$$absUrl = ka(this.$$protocol, this.$$host, this.$$port) + d + (this.$$url ? "#" + a + this.$$url : "")
        };
        this.$$rewriteAppUrl = function (a) {
            if (a.indexOf(c) == 0)return a
        };
        this.$$parse(b)
    }

    function Hb(b, a, c, d) {
        Ia.apply(this, arguments);
        this.$$rewriteAppUrl = function (b) {
            if (b.indexOf(c) == 0)return c + d + "#" + a + b.substr(c.length)
        }
    }

    function Ja(b) {
        return function () {
            return this[b]
        }
    }

    function Ib(b, a) {
        return function (c) {
            if (u(c))return this[b];
            this[b] = a(c);
            this.$$compose();
            return this
        }
    }

    function Ic() {
        var b = "", a = !1;
        this.hashPrefix = function (a) {
            return v(a) ? (b = a, this) : b
        };
        this.html5Mode = function (b) {
            return v(b) ? (a = b, this) : a
        };
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function (c, d, e, g) {
            function i(a) {
                c.$broadcast("$locationChangeSuccess", f.absUrl(), a)
            }

            var f, h, k, j = d.url(), l = va(j);
            a ? (h = d.baseHref() || "/", k = h.substr(0, h.lastIndexOf("/")), l = ka(l.protocol, l.host, l.port) + k + "/",
                f = e.history ? new gb(Fc(j, h, b), k, l) : new Hb(Gc(j, h, b), b, l, h.substr(k.length + 1))) : (l = ka(l.protocol, l.host, l.port) + (l.path || "") + (l.search ? "?" + l.search : "") + "#" + b + "/", f = new Ia(j, b, l));
            g.bind("click", function (a) {
                if (!a.ctrlKey && !(a.metaKey || a.which == 2)) {
                    for (var b = s(a.target); E(b[0].nodeName) !== "a";)if (b[0] === g[0] || !(b = b.parent())[0])return;
                    var d = b.prop("href"), e = f.$$rewriteAppUrl(d);
                    d && !b.attr("target") && e && (f.$$parse(e), c.$apply(), a.preventDefault(), U.angular["ff-684208-preventDefault"] = !0)
                }
            });
            f.absUrl() !=
                j && d.url(f.absUrl(), !0);
            d.onUrlChange(function (a) {
                f.absUrl() != a && (c.$evalAsync(function () {
                    var b = f.absUrl();
                    f.$$parse(a);
                    i(b)
                }), c.$$phase || c.$digest())
            });
            var o = 0;
            c.$watch(function () {
                var a = d.url(), b = f.$$replace;
                if (!o || a != f.absUrl())o++, c.$evalAsync(function () {
                    c.$broadcast("$locationChangeStart", f.absUrl(), a).defaultPrevented ? f.$$parse(a) : (d.url(f.absUrl(), b), i(a))
                });
                f.$$replace = !1;
                return o
            });
            return f
        }]
    }

    function Jc() {
        this.$get = ["$window", function (b) {
            function a(a) {
                a instanceof B && (a.stack ? a = a.message &&
                    a.stack.indexOf(a.message) === -1 ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                return a
            }

            function c(c) {
                var e = b.console || {}, g = e[c] || e.log || D;
                return g.apply ? function () {
                    var b = [];
                    m(arguments, function (c) {
                        b.push(a(c))
                    });
                    return g.apply(e, b)
                } : function (a, b) {
                    g(a, b)
                }
            }

            return{log:c("log"), warn:c("warn"), info:c("info"), error:c("error")}
        }]
    }

    function Kc(b, a) {
        function c(a) {
            return a.indexOf(q) != -1
        }

        function d() {
            return n + 1 < b.length ? b.charAt(n + 1) : !1
        }

        function e(a) {
            return"0" <=
                a && a <= "9"
        }

        function g(a) {
            return a == " " || a == "\r" || a == "\t" || a == "\n" || a == "\u000b" || a == "\u00a0"
        }

        function i(a) {
            return"a" <= a && a <= "z" || "A" <= a && a <= "Z" || "_" == a || a == "$"
        }

        function f(a) {
            return a == "-" || a == "+" || e(a)
        }

        function h(a, c, d) {
            d = d || n;
            throw B("Lexer Error: " + a + " at column" + (v(c) ? "s " + c + "-" + n + " [" + b.substring(c, d) + "]" : " " + d) + " in expression [" + b + "].");
        }

        function k() {
            for (var a = "", c = n; n < b.length;) {
                var k = E(b.charAt(n));
                if (k == "." || e(k))a += k; else {
                    var g = d();
                    if (k == "e" && f(g))a += k; else if (f(k) && g && e(g) && a.charAt(a.length -
                        1) == "e")a += k; else if (f(k) && (!g || !e(g)) && a.charAt(a.length - 1) == "e")h("Invalid exponent"); else break
                }
                n++
            }
            a *= 1;
            o.push({index:c, text:a, json:!0, fn:function () {
                return a
            }})
        }

        function j() {
            for (var c = "", d = n, f, k, h; n < b.length;) {
                var j = b.charAt(n);
                if (j == "." || i(j) || e(j))j == "." && (f = n), c += j; else break;
                n++
            }
            if (f)for (k = n; k < b.length;) {
                j = b.charAt(k);
                if (j == "(") {
                    h = c.substr(f - d + 1);
                    c = c.substr(0, f - d);
                    n = k;
                    break
                }
                if (g(j))k++; else break
            }
            d = {index:d, text:c};
            if (Ka.hasOwnProperty(c))d.fn = d.json = Ka[c]; else {
                var l = Jb(c, a);
                d.fn = x(function (a, b) {
                    return l(a, b)
                }, {assign:function (a, b) {
                    return Kb(a, c, b)
                }})
            }
            o.push(d);
            h && (o.push({index:f, text:".", json:!1}), o.push({index:f + 1, text:h, json:!1}))
        }

        function l(a) {
            var c = n;
            n++;
            for (var d = "", e = a, f = !1; n < b.length;) {
                var k = b.charAt(n);
                e += k;
                if (f)k == "u" ? (k = b.substring(n + 1, n + 5), k.match(/[\da-f]{4}/i) || h("Invalid unicode escape [\\u" + k + "]"), n += 4, d += String.fromCharCode(parseInt(k, 16))) : (f = Lc[k], d += f ? f : k), f = !1; else if (k == "\\")f = !0; else if (k == a) {
                    n++;
                    o.push({index:c, text:e, string:d, json:!0, fn:function () {
                        return d
                    }});
                    return
                } else d += k;
                n++
            }
            h("Unterminated quote", c)
        }

        for (var o = [], r, n = 0, w = [], q, t = ":"; n < b.length;) {
            q = b.charAt(n);
            if (c("\"'"))l(q); else if (e(q) || c(".") && e(d()))k(); else if (i(q)) {
                if (j(), "{,".indexOf(t) != -1 && w[0] == "{" && (r = o[o.length - 1]))r.json = r.text.indexOf(".") == -1
            } else if (c("(){}[].,;:"))o.push({index:n, text:q, json:":[,".indexOf(t) != -1 && c("{[") || c("}]:,")}), c("{[") && w.unshift(q), c("}]") && w.shift(), n++; else if (g(q)) {
                n++;
                continue
            } else {
                var m = q + d(), C = Ka[q], A = Ka[m];
                A ? (o.push({index:n, text:m, fn:A}), n += 2) : C ? (o.push({index:n,
                    text:q, fn:C, json:"[,:".indexOf(t) != -1 && c("+-")}), n += 1) : h("Unexpected next character ", n, n + 1)
            }
            t = q
        }
        return o
    }

    function Mc(b, a, c, d) {
        function e(a, c) {
            throw B("Syntax Error: Token '" + c.text + "' " + a + " at column " + (c.index + 1) + " of the expression [" + b + "] starting at [" + b.substring(c.index) + "].");
        }

        function g() {
            if (M.length === 0)throw B("Unexpected end of expression: " + b);
            return M[0]
        }

        function i(a, b, c, d) {
            if (M.length > 0) {
                var e = M[0], f = e.text;
                if (f == a || f == b || f == c || f == d || !a && !b && !c && !d)return e
            }
            return!1
        }

        function f(b, c, d, f) {
            return(b = i(b, c, d, f)) ? (a && !b.json && e("is not valid json", b), M.shift(), b) : !1
        }

        function h(a) {
            f(a) || e("is unexpected, expecting [" + a + "]", i())
        }

        function k(a, b) {
            return function (c, d) {
                return a(c, d, b)
            }
        }

        function j(a, b, c) {
            return function (d, e) {
                return b(d, e, a, c)
            }
        }

        function l() {
            for (var a = []; ;)if (M.length > 0 && !i("}", ")", ";", "]") && a.push(v()), !f(";"))return a.length == 1 ? a[0] : function (b, c) {
                for (var d, e = 0; e < a.length; e++) {
                    var f = a[e];
                    f && (d = f(b, c))
                }
                return d
            }
        }

        function o() {
            for (var a = f(), b = c(a.text), d = []; ;)if (a = f(":"))d.push(I());
            else {
                var e = function (a, c, e) {
                    for (var e = [e], f = 0; f < d.length; f++)e.push(d[f](a, c));
                    return b.apply(a, e)
                };
                return function () {
                    return e
                }
            }
        }

        function r() {
            for (var a = n(), b; ;)if (b = f("||"))a = j(a, b.fn, n()); else return a
        }

        function n() {
            var a = w(), b;
            if (b = f("&&"))a = j(a, b.fn, n());
            return a
        }

        function w() {
            var a = q(), b;
            if (b = f("==", "!="))a = j(a, b.fn, w());
            return a
        }

        function q() {
            var a;
            a = t();
            for (var b; b = f("+", "-");)a = j(a, b.fn, t());
            if (b = f("<", ">", "<=", ">="))a = j(a, b.fn, q());
            return a
        }

        function t() {
            for (var a = m(), b; b = f("*", "/", "%");)a = j(a,
                b.fn, m());
            return a
        }

        function m() {
            var a;
            return f("+") ? C() : (a = f("-")) ? j(ga, a.fn, m()) : (a = f("!")) ? k(a.fn, m()) : C()
        }

        function C() {
            var a;
            if (f("("))a = v(), h(")"); else if (f("["))a = A(); else if (f("{"))a = K(); else {
                var b = f();
                (a = b.fn) || e("not a primary expression", b)
            }
            for (var c; b = f("(", "[", ".");)b.text === "(" ? (a = s(a, c), c = null) : b.text === "[" ? (c = a, a = da(a)) : b.text === "." ? (c = a, a = u(a)) : e("IMPOSSIBLE");
            return a
        }

        function A() {
            var a = [];
            if (g().text != "]") {
                do a.push(I()); while (f(","))
            }
            h("]");
            return function (b, c) {
                for (var d = [], e = 0; e <
                    a.length; e++)d.push(a[e](b, c));
                return d
            }
        }

        function K() {
            var a = [];
            if (g().text != "}") {
                do {
                    var b = f(), b = b.string || b.text;
                    h(":");
                    var c = I();
                    a.push({key:b, value:c})
                } while (f(","))
            }
            h("}");
            return function (b, c) {
                for (var d = {}, e = 0; e < a.length; e++) {
                    var f = a[e], k = f.value(b, c);
                    d[f.key] = k
                }
                return d
            }
        }

        var ga = J(0), y, M = Kc(b, d), I = function () {
            var a = r(), c, d;
            return(d = f("=")) ? (a.assign || e("implies assignment but [" + b.substring(0, d.index) + "] can not be assigned to", d), c = r(), function (b, d) {
                return a.assign(b, c(b, d), d)
            }) : a
        }, s = function (a, b) {
            var c = [];
            if (g().text != ")") {
                do c.push(I()); while (f(","))
            }
            h(")");
            return function (d, e) {
                for (var f = [], k = b ? b(d, e) : d, h = 0; h < c.length; h++)f.push(c[h](d, e));
                h = a(d, e) || D;
                return h.apply ? h.apply(k, f) : h(f[0], f[1], f[2], f[3], f[4])
            }
        }, u = function (a) {
            var b = f().text, c = Jb(b, d);
            return x(function (b, d) {
                return c(a(b, d), d)
            }, {assign:function (c, d, e) {
                return Kb(a(c, e), b, d)
            }})
        }, da = function (a) {
            var b = I();
            h("]");
            return x(function (c, d) {
                var e = a(c, d), f = b(c, d), k;
                if (!e)return p;
                if ((e = e[f]) && e.then) {
                    k = e;
                    if (!("$$v"in e))k.$$v = p, k.then(function (a) {
                        k.$$v =
                            a
                    });
                    e = e.$$v
                }
                return e
            }, {assign:function (c, d, e) {
                return a(c, e)[b(c, e)] = d
            }})
        }, v = function () {
            for (var a = I(), b; ;)if (b = f("|"))a = j(a, b.fn, o()); else return a
        };
        a ? (I = r, s = u = da = v = function () {
            e("is not valid json", {text:b, index:0})
        }, y = C()) : y = l();
        M.length !== 0 && e("is an unexpected token", M[0]);
        return y
    }

    function Kb(b, a, c) {
        for (var a = a.split("."), d = 0; a.length > 1; d++) {
            var e = a.shift(), g = b[e];
            g || (g = {}, b[e] = g);
            b = g
        }
        return b[a.shift()] = c
    }

    function fb(b, a, c) {
        if (!a)return b;
        for (var a = a.split("."), d, e = b, g = a.length, i = 0; i < g; i++)d =
            a[i], b && (b = (e = b)[d]);
        return!c && N(b) ? Va(e, b) : b
    }

    function Lb(b, a, c, d, e) {
        return function (g, i) {
            var f = i && i.hasOwnProperty(b) ? i : g, h;
            if (f === null || f === p)return f;
            if ((f = f[b]) && f.then) {
                if (!("$$v"in f))h = f, h.$$v = p, h.then(function (a) {
                    h.$$v = a
                });
                f = f.$$v
            }
            if (!a || f === null || f === p)return f;
            if ((f = f[a]) && f.then) {
                if (!("$$v"in f))h = f, h.$$v = p, h.then(function (a) {
                    h.$$v = a
                });
                f = f.$$v
            }
            if (!c || f === null || f === p)return f;
            if ((f = f[c]) && f.then) {
                if (!("$$v"in f))h = f, h.$$v = p, h.then(function (a) {
                    h.$$v = a
                });
                f = f.$$v
            }
            if (!d || f === null || f === p)return f;
            if ((f = f[d]) && f.then) {
                if (!("$$v"in f))h = f, h.$$v = p, h.then(function (a) {
                    h.$$v = a
                });
                f = f.$$v
            }
            if (!e || f === null || f === p)return f;
            if ((f = f[e]) && f.then) {
                if (!("$$v"in f))h = f, h.$$v = p, h.then(function (a) {
                    h.$$v = a
                });
                f = f.$$v
            }
            return f
        }
    }

    function Jb(b, a) {
        if (hb.hasOwnProperty(b))return hb[b];
        var c = b.split("."), d = c.length, e;
        if (a)e = d < 6 ? Lb(c[0], c[1], c[2], c[3], c[4]) : function (a, b) {
            var e = 0, k;
            do k = Lb(c[e++], c[e++], c[e++], c[e++], c[e++])(a, b), b = p, a = k; while (e < d);
            return k
        }; else {
            var g = "var l, fn, p;\n";
            m(c, function (a, b) {
                g += "if(s === null || s === undefined) return s;\nl=s;\ns=" +
                    (b ? "s" : '((k&&k.hasOwnProperty("' + a + '"))?k:s)') + '["' + a + '"];\nif (s && s.then) {\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n'
            });
            g += "return s;";
            e = Function("s", "k", g);
            e.toString = function () {
                return g
            }
        }
        return hb[b] = e
    }

    function Nc() {
        var b = {};
        this.$get = ["$filter", "$sniffer", function (a, c) {
            return function (d) {
                switch (typeof d) {
                    case "string":
                        return b.hasOwnProperty(d) ? b[d] : b[d] = Mc(d, !1, a, c.csp);
                    case "function":
                        return d;
                    default:
                        return D
                }
            }
        }]
    }

    function Oc() {
        this.$get =
            ["$rootScope", "$exceptionHandler", function (b, a) {
                return Pc(function (a) {
                    b.$evalAsync(a)
                }, a)
            }]
    }

    function Pc(b, a) {
        function c(a) {
            return a
        }

        function d(a) {
            return i(a)
        }

        var e = function () {
            var f = [], h, k;
            return k = {resolve:function (a) {
                if (f) {
                    var c = f;
                    f = p;
                    h = g(a);
                    c.length && b(function () {
                        for (var a, b = 0, d = c.length; b < d; b++)a = c[b], h.then(a[0], a[1])
                    })
                }
            }, reject:function (a) {
                k.resolve(i(a))
            }, promise:{then:function (b, k) {
                var g = e(), i = function (d) {
                    try {
                        g.resolve((b || c)(d))
                    } catch (e) {
                        a(e), g.reject(e)
                    }
                }, n = function (b) {
                    try {
                        g.resolve((k ||
                            d)(b))
                    } catch (c) {
                        a(c), g.reject(c)
                    }
                };
                f ? f.push([i, n]) : h.then(i, n);
                return g.promise
            }}}
        }, g = function (a) {
            return a && a.then ? a : {then:function (c) {
                var d = e();
                b(function () {
                    d.resolve(c(a))
                });
                return d.promise
            }}
        }, i = function (a) {
            return{then:function (c, k) {
                var g = e();
                b(function () {
                    g.resolve((k || d)(a))
                });
                return g.promise
            }}
        };
        return{defer:e, reject:i, when:function (f, h, k) {
            var j = e(), l, o = function (b) {
                try {
                    return(h || c)(b)
                } catch (d) {
                    return a(d), i(d)
                }
            }, r = function (b) {
                try {
                    return(k || d)(b)
                } catch (c) {
                    return a(c), i(c)
                }
            };
            b(function () {
                g(f).then(function (a) {
                    l ||
                    (l = !0, j.resolve(g(a).then(o, r)))
                }, function (a) {
                    l || (l = !0, j.resolve(r(a)))
                })
            });
            return j.promise
        }, all:function (a) {
            var b = e(), c = a.length, d = [];
            c ? m(a, function (a, e) {
                g(a).then(function (a) {
                    e in d || (d[e] = a, --c || b.resolve(d))
                }, function (a) {
                    e in d || b.reject(a)
                })
            }) : b.resolve(d);
            return b.promise
        }}
    }

    function Qc() {
        var b = {};
        this.when = function (a, c) {
            b[a] = x({reloadOnSearch:!0}, c);
            if (a) {
                var d = a[a.length - 1] == "/" ? a.substr(0, a.length - 1) : a + "/";
                b[d] = {redirectTo:a}
            }
            return this
        };
        this.otherwise = function (a) {
            this.when(null, a);
            return this
        };
        this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", function (a, c, d, e, g, i, f) {
            function h() {
                var b = k(), h = r.current;
                if (b && h && b.$route === h.$route && ha(b.pathParams, h.pathParams) && !b.reloadOnSearch && !o)h.params = b.params, V(h.params, d), a.$broadcast("$routeUpdate", h); else if (b || h)o = !1, a.$broadcast("$routeChangeStart", b, h), (r.current = b) && b.redirectTo && (F(b.redirectTo) ? c.path(j(b.redirectTo, b.params)).search(b.params).replace() : c.url(b.redirectTo(b.pathParams, c.path(),
                    c.search())).replace()), e.when(b).then(function () {
                    if (b) {
                        var a = [], c = [], d;
                        m(b.resolve || {}, function (b, d) {
                            a.push(d);
                            c.push(F(b) ? g.get(b) : g.invoke(b))
                        });
                        if (!v(d = b.template))if (v(d = b.templateUrl))d = i.get(d, {cache:f}).then(function (a) {
                            return a.data
                        });
                        v(d) && (a.push("$template"), c.push(d));
                        return e.all(c).then(function (b) {
                            var c = {};
                            m(b, function (b, d) {
                                c[a[d]] = b
                            });
                            return c
                        })
                    }
                }).then(function (c) {
                        if (b == r.current) {
                            if (b)b.locals = c, V(b.params, d);
                            a.$broadcast("$routeChangeSuccess", b, h)
                        }
                    }, function (c) {
                        b == r.current && a.$broadcast("$routeChangeError",
                            b, h, c)
                    })
            }

            function k() {
                var a, d;
                m(b, function (b, e) {
                    if (!d && (a = l(c.path(), e)))d = ya(b, {params:x({}, c.search(), a), pathParams:a}), d.$route = b
                });
                return d || b[null] && ya(b[null], {params:{}, pathParams:{}})
            }

            function j(a, b) {
                var c = [];
                m((a || "").split(":"), function (a, d) {
                    if (d == 0)c.push(a); else {
                        var e = a.match(/(\w+)(.*)/), f = e[1];
                        c.push(b[f]);
                        c.push(e[2] || "");
                        delete b[f]
                    }
                });
                return c.join("")
            }

            var l = function (a, b) {
                var c = "^" + b.replace(/([\.\\\(\)\^\$])/g, "\\$1") + "$", d = [], e = {};
                m(b.split(/[^\w:]/), function (a) {
                    if (a && a.charAt(0) ===
                        ":") {
                        var b = RegExp(a + "([\\W])");
                        c.match(b) && (c = c.replace(b, "([^\\/]*)$1"), d.push(a.substr(1)))
                    }
                });
                var f = a.match(RegExp(c));
                f && m(d, function (a, b) {
                    e[a] = f[b + 1]
                });
                return f ? e : null
            }, o = !1, r = {routes:b, reload:function () {
                o = !0;
                a.$evalAsync(h)
            }};
            a.$on("$locationChangeSuccess", h);
            return r
        }]
    }

    function Rc() {
        this.$get = J({})
    }

    function Sc() {
        var b = 10;
        this.digestTtl = function (a) {
            arguments.length && (b = a);
            return b
        };
        this.$get = ["$injector", "$exceptionHandler", "$parse", function (a, c, d) {
            function e() {
                this.$id = xa();
                this.$$phase = this.$parent =
                    this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                this["this"] = this.$root = this;
                this.$$destroyed = !1;
                this.$$asyncQueue = [];
                this.$$listeners = {}
            }

            function g(a) {
                if (h.$$phase)throw B(h.$$phase + " already in progress");
                h.$$phase = a
            }

            function i(a, b) {
                var c = d(a);
                ra(c, b);
                return c
            }

            function f() {
            }

            e.prototype = {$new:function (a) {
                if (N(a))throw B("API-CHANGE: Use $controller to instantiate controllers.");
                a ? (a = new e, a.$root = this.$root) : (a = function () {
                }, a.prototype = this, a = new a, a.$id =
                    xa());
                a["this"] = a;
                a.$$listeners = {};
                a.$parent = this;
                a.$$asyncQueue = [];
                a.$$watchers = a.$$nextSibling = a.$$childHead = a.$$childTail = null;
                a.$$prevSibling = this.$$childTail;
                this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = a : this.$$childHead = this.$$childTail = a;
                return a
            }, $watch:function (a, b, c) {
                var d = i(a, "watch"), e = this.$$watchers, g = {fn:b, last:f, get:d, exp:a, eq:!!c};
                if (!N(b)) {
                    var h = i(b || D, "listener");
                    g.fn = function (a, b, c) {
                        h(c)
                    }
                }
                if (!e)e = this.$$watchers = [];
                e.unshift(g);
                return function () {
                    Ua(e, g)
                }
            },
                $digest:function () {
                    var a, d, e, i, r, n, m, q = b, t, p = [], C, A;
                    g("$digest");
                    do {
                        m = !1;
                        t = this;
                        do {
                            for (r = t.$$asyncQueue; r.length;)try {
                                t.$eval(r.shift())
                            } catch (K) {
                                c(K)
                            }
                            if (i = t.$$watchers)for (n = i.length; n--;)try {
                                if (a = i[n], (d = a.get(t)) !== (e = a.last) && !(a.eq ? ha(d, e) : typeof d == "number" && typeof e == "number" && isNaN(d) && isNaN(e)))m = !0, a.last = a.eq ? V(d) : d, a.fn(d, e === f ? d : e, t), q < 5 && (C = 4 - q, p[C] || (p[C] = []), A = N(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp, A += "; newVal: " + ca(d) + "; oldVal: " + ca(e), p[C].push(A))
                            } catch (s) {
                                c(s)
                            }
                            if (!(i =
                                t.$$childHead || t !== this && t.$$nextSibling))for (; t !== this && !(i = t.$$nextSibling);)t = t.$parent
                        } while (t = i);
                        if (m && !q--)throw h.$$phase = null, B(b + " $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: " + ca(p));
                    } while (m || r.length);
                    h.$$phase = null
                }, $destroy:function () {
                    if (!(h == this || this.$$destroyed)) {
                        var a = this.$parent;
                        this.$broadcast("$destroy");
                        this.$$destroyed = !0;
                        if (a.$$childHead == this)a.$$childHead = this.$$nextSibling;
                        if (a.$$childTail == this)a.$$childTail = this.$$prevSibling;
                        if (this.$$prevSibling)this.$$prevSibling.$$nextSibling =
                            this.$$nextSibling;
                        if (this.$$nextSibling)this.$$nextSibling.$$prevSibling = this.$$prevSibling;
                        this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null
                    }
                }, $eval:function (a, b) {
                    return d(a)(this, b)
                }, $evalAsync:function (a) {
                    this.$$asyncQueue.push(a)
                }, $apply:function (a) {
                    try {
                        return g("$apply"), this.$eval(a)
                    } catch (b) {
                        c(b)
                    } finally {
                        h.$$phase = null;
                        try {
                            h.$digest()
                        } catch (d) {
                            throw c(d), d;
                        }
                    }
                }, $on:function (a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []);
                    c.push(b);
                    return function () {
                        c[za(c,
                            b)] = null
                    }
                }, $emit:function (a, b) {
                    var d = [], e, f = this, g = !1, h = {name:a, targetScope:f, stopPropagation:function () {
                        g = !0
                    }, preventDefault:function () {
                        h.defaultPrevented = !0
                    }, defaultPrevented:!1}, i = [h].concat(ia.call(arguments, 1)), m, p;
                    do {
                        e = f.$$listeners[a] || d;
                        h.currentScope = f;
                        m = 0;
                        for (p = e.length; m < p; m++)if (e[m])try {
                            if (e[m].apply(null, i), g)return h
                        } catch (C) {
                            c(C)
                        } else e.splice(m, 1), m--, p--;
                        f = f.$parent
                    } while (f);
                    return h
                }, $broadcast:function (a, b) {
                    var d = this, e = this, f = {name:a, targetScope:this, preventDefault:function () {
                        f.defaultPrevented = !0
                    }, defaultPrevented:!1}, h = [f].concat(ia.call(arguments, 1)), g, i;
                    do {
                        d = e;
                        f.currentScope = d;
                        e = d.$$listeners[a] || [];
                        g = 0;
                        for (i = e.length; g < i; g++)if (e[g])try {
                            e[g].apply(null, h)
                        } catch (m) {
                            c(m)
                        } else e.splice(g, 1), g--, i--;
                        if (!(e = d.$$childHead || d !== this && d.$$nextSibling))for (; d !== this && !(e = d.$$nextSibling);)d = d.$parent
                    } while (d = e);
                    return f
                }};
            var h = new e;
            return h
        }]
    }

    function Tc() {
        this.$get = ["$window", function (b) {
            var a = {}, c = G((/android (\d+)/.exec(E(b.navigator.userAgent)) || [])[1]);
            return{history:!(!b.history || !b.history.pushState ||
                c < 4), hashchange:"onhashchange"in b && (!b.document.documentMode || b.document.documentMode > 7), hasEvent:function (c) {
                if (c == "input" && $ == 9)return!1;
                if (u(a[c])) {
                    var e = b.document.createElement("div");
                    a[c] = "on" + c in e
                }
                return a[c]
            }, csp:!1}
        }]
    }

    function Uc() {
        this.$get = J(U)
    }

    function Mb(b) {
        var a = {}, c, d, e;
        if (!b)return a;
        m(b.split("\n"), function (b) {
            e = b.indexOf(":");
            c = E(R(b.substr(0, e)));
            d = R(b.substr(e + 1));
            c && (a[c] ? a[c] += ", " + d : a[c] = d)
        });
        return a
    }

    function Nb(b) {
        var a = L(b) ? b : p;
        return function (c) {
            a || (a = Mb(b));
            return c ?
                a[E(c)] || null : a
        }
    }

    function Ob(b, a, c) {
        if (N(c))return c(b, a);
        m(c, function (c) {
            b = c(b, a)
        });
        return b
    }

    function Vc() {
        var b = /^\s*(\[|\{[^\{])/, a = /[\}\]]\s*$/, c = /^\)\]\}',?\n/, d = this.defaults = {transformResponse:[function (d) {
            F(d) && (d = d.replace(c, ""), b.test(d) && a.test(d) && (d = nb(d, !0)));
            return d
        }], transformRequest:[function (a) {
            return L(a) && Sa.apply(a) !== "[object File]" ? ca(a) : a
        }], headers:{common:{Accept:"application/json, text/plain, */*", "X-Requested-With":"XMLHttpRequest"}, post:{"Content-Type":"application/json;charset=utf-8"},
            put:{"Content-Type":"application/json;charset=utf-8"}}}, e = this.responseInterceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function (a, b, c, h, k, j) {
            function l(a) {
                function c(a) {
                    var b = x({}, a, {data:Ob(a.data, a.headers, f)});
                    return 200 <= a.status && a.status < 300 ? b : k.reject(b)
                }

                a.method = la(a.method);
                var e = a.transformRequest || d.transformRequest, f = a.transformResponse || d.transformResponse, h = d.headers, h = x({"X-XSRF-TOKEN":b.cookies()["XSRF-TOKEN"]}, h.common, h[E(a.method)],
                    a.headers), e = Ob(a.data, Nb(h), e), g;
                u(a.data) && delete h["Content-Type"];
                g = o(a, e, h);
                g = g.then(c, c);
                m(w, function (a) {
                    g = a(g)
                });
                g.success = function (b) {
                    g.then(function (c) {
                        b(c.data, c.status, c.headers, a)
                    });
                    return g
                };
                g.error = function (b) {
                    g.then(null, function (c) {
                        b(c.data, c.status, c.headers, a)
                    });
                    return g
                };
                return g
            }

            function o(b, c, d) {
                function e(a, b, c) {
                    m && (200 <= a && a < 300 ? m.put(w, [a, b, Mb(c)]) : m.remove(w));
                    f(b, a, c);
                    h.$apply()
                }

                function f(a, c, d) {
                    c = Math.max(c, 0);
                    (200 <= c && c < 300 ? j.resolve : j.reject)({data:a, status:c, headers:Nb(d),
                        config:b})
                }

                function i() {
                    var a = za(l.pendingRequests, b);
                    a !== -1 && l.pendingRequests.splice(a, 1)
                }

                var j = k.defer(), o = j.promise, m, p, w = r(b.url, b.params);
                l.pendingRequests.push(b);
                o.then(i, i);
                b.cache && b.method == "GET" && (m = L(b.cache) ? b.cache : n);
                if (m)if (p = m.get(w))if (p.then)return p.then(i, i), p; else H(p) ? f(p[1], p[0], V(p[2])) : f(p, 200, {}); else m.put(w, o);
                p || a(b.method, w, c, e, d, b.timeout, b.withCredentials);
                return o
            }

            function r(a, b) {
                if (!b)return a;
                var c = [];
                ec(b, function (a, b) {
                    a == null || a == p || (L(a) && (a = ca(a)), c.push(encodeURIComponent(b) +
                        "=" + encodeURIComponent(a)))
                });
                return a + (a.indexOf("?") == -1 ? "?" : "&") + c.join("&")
            }

            var n = c("$http"), w = [];
            m(e, function (a) {
                w.push(F(a) ? j.get(a) : j.invoke(a))
            });
            l.pendingRequests = [];
            (function (a) {
                m(arguments, function (a) {
                    l[a] = function (b, c) {
                        return l(x(c || {}, {method:a, url:b}))
                    }
                })
            })("get", "delete", "head", "jsonp");
            (function (a) {
                m(arguments, function (a) {
                    l[a] = function (b, c, d) {
                        return l(x(d || {}, {method:a, url:b, data:c}))
                    }
                })
            })("post", "put");
            l.defaults = d;
            return l
        }]
    }

    function Wc() {
        this.$get = ["$browser", "$window", "$document",
            function (b, a, c) {
                return Xc(b, Yc, b.defer, a.angular.callbacks, c[0], a.location.protocol.replace(":", ""))
            }]
    }

    function Xc(b, a, c, d, e, g) {
        function i(a, b) {
            var c = e.createElement("script"), d = function () {
                e.body.removeChild(c);
                b && b()
            };
            c.type = "text/javascript";
            c.src = a;
            $ ? c.onreadystatechange = function () {
                /loaded|complete/.test(c.readyState) && d()
            } : c.onload = c.onerror = d;
            e.body.appendChild(c)
        }

        return function (e, h, k, j, l, o, r) {
            function n(a, c, d, e) {
                c = (h.match(Fb) || ["", g])[1] == "file" ? d ? 200 : 404 : c;
                a(c == 1223 ? 204 : c, d, e);
                b.$$completeOutstandingRequest(D)
            }

            b.$$incOutstandingRequestCount();
            h = h || b.url();
            if (E(e) == "jsonp") {
                var p = "_" + (d.counter++).toString(36);
                d[p] = function (a) {
                    d[p].data = a
                };
                i(h.replace("JSON_CALLBACK", "angular.callbacks." + p), function () {
                    d[p].data ? n(j, 200, d[p].data) : n(j, -2);
                    delete d[p]
                })
            } else {
                var q = new a;
                q.open(e, h, !0);
                m(l, function (a, b) {
                    a && q.setRequestHeader(b, a)
                });
                var t;
                q.onreadystatechange = function () {
                    q.readyState == 4 && n(j, t || q.status, q.responseText, q.getAllResponseHeaders())
                };
                if (r)q.withCredentials = !0;
                q.send(k || "");
                o > 0 && c(function () {
                    t = -1;
                    q.abort()
                }, o)
            }
        }
    }

    function Zc() {
        this.$get = function () {
            return{id:"en-us", NUMBER_FORMATS:{DECIMAL_SEP:".", GROUP_SEP:",", PATTERNS:[
                {minInt:1, minFrac:0, maxFrac:3, posPre:"", posSuf:"", negPre:"-", negSuf:"", gSize:3, lgSize:3},
                {minInt:1, minFrac:2, maxFrac:2, posPre:"\u00a4", posSuf:"", negPre:"(\u00a4", negSuf:")", gSize:3, lgSize:3}
            ], CURRENCY_SYM:"$"}, DATETIME_FORMATS:{MONTH:"January,February,March,April,May,June,July,August,September,October,November,December".split(","), SHORTMONTH:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                DAY:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), SHORTDAY:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","), AMPMS:["AM", "PM"], medium:"MMM d, y h:mm:ss a", "short":"M/d/yy h:mm a", fullDate:"EEEE, MMMM d, y", longDate:"MMMM d, y", mediumDate:"MMM d, y", shortDate:"M/d/yy", mediumTime:"h:mm:ss a", shortTime:"h:mm a"}, pluralCat:function (b) {
                return b === 1 ? "one" : "other"
            }}
        }
    }

    function $c() {
        this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function (b, a, c, d) {
            function e(e, f, h) {
                var k = c.defer(),
                    j = k.promise, l = v(h) && !h, f = a.defer(function () {
                        try {
                            k.resolve(e())
                        } catch (a) {
                            k.reject(a), d(a)
                        }
                        l || b.$apply()
                    }, f), h = function () {
                        delete g[j.$$timeoutId]
                    };
                j.$$timeoutId = f;
                g[f] = k;
                j.then(h, h);
                return j
            }

            var g = {};
            e.cancel = function (b) {
                return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject("canceled"), a.defer.cancel(b.$$timeoutId)) : !1
            };
            return e
        }]
    }

    function Pb(b) {
        function a(a, e) {
            return b.factory(a + c, e)
        }

        var c = "Filter";
        this.register = a;
        this.$get = ["$injector", function (a) {
            return function (b) {
                return a.get(b + c)
            }
        }];
        a("currency",
            Qb);
        a("date", Rb);
        a("filter", ad);
        a("json", bd);
        a("limitTo", cd);
        a("lowercase", dd);
        a("number", Sb);
        a("orderBy", Tb);
        a("uppercase", ed)
    }

    function ad() {
        return function (b, a) {
            if (!(b instanceof Array))return b;
            var c = [];
            c.check = function (a) {
                for (var b = 0; b < c.length; b++)if (!c[b](a))return!1;
                return!0
            };
            var d = function (a, b) {
                if (b.charAt(0) === "!")return!d(a, b.substr(1));
                switch (typeof a) {
                    case "boolean":
                    case "number":
                    case "string":
                        return("" + a).toLowerCase().indexOf(b) > -1;
                    case "object":
                        for (var c in a)if (c.charAt(0) !== "$" &&
                            d(a[c], b))return!0;
                        return!1;
                    case "array":
                        for (c = 0; c < a.length; c++)if (d(a[c], b))return!0;
                        return!1;
                    default:
                        return!1
                }
            };
            switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                    a = {$:a};
                case "object":
                    for (var e in a)e == "$" ? function () {
                        var b = ("" + a[e]).toLowerCase();
                        b && c.push(function (a) {
                            return d(a, b)
                        })
                    }() : function () {
                        var b = e, f = ("" + a[e]).toLowerCase();
                        f && c.push(function (a) {
                            return d(fb(a, b), f)
                        })
                    }();
                    break;
                case "function":
                    c.push(a);
                    break;
                default:
                    return b
            }
            for (var g = [], i = 0; i < b.length; i++) {
                var f = b[i];
                c.check(f) &&
                g.push(f)
            }
            return g
        }
    }

    function Qb(b) {
        var a = b.NUMBER_FORMATS;
        return function (b, d) {
            if (u(d))d = a.CURRENCY_SYM;
            return Ub(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, 2).replace(/\u00A4/g, d)
        }
    }

    function Sb(b) {
        var a = b.NUMBER_FORMATS;
        return function (b, d) {
            return Ub(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d)
        }
    }

    function Ub(b, a, c, d, e) {
        if (isNaN(b) || !isFinite(b))return"";
        var g = b < 0, b = Math.abs(b), i = b + "", f = "", h = [], k = !1;
        if (i.indexOf("e") !== -1) {
            var j = i.match(/([\d\.]+)e(-?)(\d+)/);
            j && j[2] == "-" && j[3] > e + 1 ? i = "0" : (f = i, k = !0)
        }
        if (!k) {
            i =
                (i.split(Vb)[1] || "").length;
            u(e) && (e = Math.min(Math.max(a.minFrac, i), a.maxFrac));
            var i = Math.pow(10, e), b = Math.round(b * i) / i, b = ("" + b).split(Vb), i = b[0], b = b[1] || "", k = 0, j = a.lgSize, l = a.gSize;
            if (i.length >= j + l)for (var k = i.length - j, o = 0; o < k; o++)(k - o) % l === 0 && o !== 0 && (f += c), f += i.charAt(o);
            for (o = k; o < i.length; o++)(i.length - o) % j === 0 && o !== 0 && (f += c), f += i.charAt(o);
            for (; b.length < e;)b += "0";
            e && (f += d + b.substr(0, e))
        }
        h.push(g ? a.negPre : a.posPre);
        h.push(f);
        h.push(g ? a.negSuf : a.posSuf);
        return h.join("")
    }

    function ib(b, a, c) {
        var d =
            "";
        b < 0 && (d = "-", b = -b);
        for (b = "" + b; b.length < a;)b = "0" + b;
        c && (b = b.substr(b.length - a));
        return d + b
    }

    function P(b, a, c, d) {
        return function (e) {
            e = e["get" + b]();
            if (c > 0 || e > -c)e += c;
            e === 0 && c == -12 && (e = 12);
            return ib(e, a, d)
        }
    }

    function La(b, a) {
        return function (c, d) {
            var e = c["get" + b](), g = la(a ? "SHORT" + b : b);
            return d[g][e]
        }
    }

    function Rb(b) {
        function a(a) {
            var b;
            if (b = a.match(c)) {
                var a = new Date(0), g = 0, i = 0;
                b[9] && (g = G(b[9] + b[10]), i = G(b[9] + b[11]));
                a.setUTCFullYear(G(b[1]), G(b[2]) - 1, G(b[3]));
                a.setUTCHours(G(b[4] || 0) - g, G(b[5] || 0) - i, G(b[6] ||
                    0), G(b[7] || 0))
            }
            return a
        }

        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (c, e) {
            var g = "", i = [], f, h, e = e || "mediumDate", e = b.DATETIME_FORMATS[e] || e;
            F(c) && (c = fd.test(c) ? G(c) : a(c));
            wa(c) && (c = new Date(c));
            if (!na(c))return c;
            for (; e;)(h = gd.exec(e)) ? (i = i.concat(ia.call(h, 1)), e = i.pop()) : (i.push(e), e = null);
            m(i, function (a) {
                f = hd[a];
                g += f ? f(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            });
            return g
        }
    }

    function bd() {
        return function (b) {
            return ca(b,
                !0)
        }
    }

    function cd() {
        return function (b, a) {
            if (!(b instanceof Array))return b;
            var a = G(a), c = [], d, e;
            if (!b || !(b instanceof Array))return c;
            a > b.length ? a = b.length : a < -b.length && (a = -b.length);
            a > 0 ? (d = 0, e = a) : (d = b.length + a, e = b.length);
            for (; d < e; d++)c.push(b[d]);
            return c
        }
    }

    function Tb(b) {
        return function (a, c, d) {
            function e(a, b) {
                return Wa(b) ? function (b, c) {
                    return a(c, b)
                } : a
            }

            if (!(a instanceof Array))return a;
            if (!c)return a;
            for (var c = H(c) ? c : [c], c = Ta(c, function (a) {
                var c = !1, d = a || ma;
                if (F(a)) {
                    if (a.charAt(0) == "+" || a.charAt(0) ==
                        "-")c = a.charAt(0) == "-", a = a.substring(1);
                    d = b(a)
                }
                return e(function (a, b) {
                    var c;
                    c = d(a);
                    var e = d(b), f = typeof c, g = typeof e;
                    f == g ? (f == "string" && (c = c.toLowerCase()), f == "string" && (e = e.toLowerCase()), c = c === e ? 0 : c < e ? -1 : 1) : c = f < g ? -1 : 1;
                    return c
                }, c)
            }), g = [], i = 0; i < a.length; i++)g.push(a[i]);
            return g.sort(e(function (a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (e !== 0)return e
                }
                return 0
            }, d))
        }
    }

    function S(b) {
        N(b) && (b = {link:b});
        b.restrict = b.restrict || "AC";
        return J(b)
    }

    function Wb(b, a) {
        function c(a, c) {
            c = c ? "-" + $a(c, "-") :
                "";
            b.removeClass((a ? Ma : Na) + c).addClass((a ? Na : Ma) + c)
        }

        var d = this, e = b.parent().controller("form") || Oa, g = 0, i = d.$error = {};
        d.$name = a.name;
        d.$dirty = !1;
        d.$pristine = !0;
        d.$valid = !0;
        d.$invalid = !1;
        e.$addControl(d);
        b.addClass(Pa);
        c(!0);
        d.$addControl = function (a) {
            a.$name && !d.hasOwnProperty(a.$name) && (d[a.$name] = a)
        };
        d.$removeControl = function (a) {
            a.$name && d[a.$name] === a && delete d[a.$name];
            m(i, function (b, c) {
                d.$setValidity(c, !0, a)
            })
        };
        d.$setValidity = function (a, b, k) {
            var j = i[a];
            if (b) {
                if (j && (Ua(j, k), !j.length)) {
                    g--;
                    if (!g)c(b),
                        d.$valid = !0, d.$invalid = !1;
                    i[a] = !1;
                    c(!0, a);
                    e.$setValidity(a, !0, d)
                }
            } else {
                g || c(b);
                if (j) {
                    if (za(j, k) != -1)return
                } else i[a] = j = [], g++, c(!1, a), e.$setValidity(a, !1, d);
                j.push(k);
                d.$valid = !1;
                d.$invalid = !0
            }
        };
        d.$setDirty = function () {
            b.removeClass(Pa).addClass(Xb);
            d.$dirty = !0;
            d.$pristine = !1;
            e.$setDirty()
        }
    }

    function T(b) {
        return u(b) || b === "" || b === null || b !== b
    }

    function Qa(b, a, c, d, e, g) {
        var i = function () {
            var c = R(a.val());
            d.$viewValue !== c && b.$apply(function () {
                d.$setViewValue(c)
            })
        };
        if (e.hasEvent("input"))a.bind("input", i);
        else {
            var f;
            a.bind("keydown", function (a) {
                a = a.keyCode;
                a === 91 || 15 < a && a < 19 || 37 <= a && a <= 40 || f || (f = g.defer(function () {
                    i();
                    f = null
                }))
            });
            a.bind("change", i)
        }
        d.$render = function () {
            a.val(T(d.$viewValue) ? "" : d.$viewValue)
        };
        var h = c.ngPattern, k = function (a, b) {
            return T(b) || a.test(b) ? (d.$setValidity("pattern", !0), b) : (d.$setValidity("pattern", !1), p)
        };
        h && (h.match(/^\/(.*)\/$/) ? (h = RegExp(h.substr(1, h.length - 2)), e = function (a) {
            return k(h, a)
        }) : e = function (a) {
            var c = b.$eval(h);
            if (!c || !c.test)throw new B("Expected " + h + " to be a RegExp but was " +
                c);
            return k(c, a)
        }, d.$formatters.push(e), d.$parsers.push(e));
        if (c.ngMinlength) {
            var j = G(c.ngMinlength), e = function (a) {
                return!T(a) && a.length < j ? (d.$setValidity("minlength", !1), p) : (d.$setValidity("minlength", !0), a)
            };
            d.$parsers.push(e);
            d.$formatters.push(e)
        }
        if (c.ngMaxlength) {
            var l = G(c.ngMaxlength), c = function (a) {
                return!T(a) && a.length > l ? (d.$setValidity("maxlength", !1), p) : (d.$setValidity("maxlength", !0), a)
            };
            d.$parsers.push(c);
            d.$formatters.push(c)
        }
    }

    function jb(b, a) {
        b = "ngClass" + b;
        return S(function (c, d, e) {
            function g(b, d) {
                if (a === !0 || c.$index % 2 === a)d && b !== d && i(d), f(b)
            }

            function i(a) {
                L(a) && !H(a) && (a = Ta(a, function (a, b) {
                    if (a)return b
                }));
                d.removeClass(H(a) ? a.join(" ") : a)
            }

            function f(a) {
                L(a) && !H(a) && (a = Ta(a, function (a, b) {
                    if (a)return b
                }));
                a && d.addClass(H(a) ? a.join(" ") : a)
            }

            c.$watch(e[b], g, !0);
            e.$observe("class", function () {
                var a = c.$eval(e[b]);
                g(a, a)
            });
            b !== "ngClass" && c.$watch("$index", function (d, g) {
                var j = d % 2;
                j !== g % 2 && (j == a ? f(c.$eval(e[b])) : i(c.$eval(e[b])))
            })
        })
    }

    var E = function (b) {
        return F(b) ? b.toLowerCase() : b
    }, la = function (b) {
        return F(b) ?
            b.toUpperCase() : b
    }, B = U.Error, $ = G((/msie (\d+)/.exec(E(navigator.userAgent)) || [])[1]), s, ja, ia = [].slice, Ra = [].push, Sa = Object.prototype.toString, Yb = U.angular || (U.angular = {}), ta, Cb, Y = ["0", "0", "0"];
    D.$inject = [];
    ma.$inject = [];
    Cb = $ < 9 ? function (b) {
        b = b.nodeName ? b : b[0];
        return b.scopeName && b.scopeName != "HTML" ? la(b.scopeName + ":" + b.nodeName) : b.nodeName
    } : function (b) {
        return b.nodeName ? b.nodeName : b[0].nodeName
    };
    var kc = /[A-Z]/g, id = {full:"1.0.4-51d501aa", major:1, minor:0, dot:4, codeName:"bewildering-hair"}, Ba = Q.cache =
    {}, Aa = Q.expando = "ng-" + (new Date).getTime(), oc = 1, Zb = U.document.addEventListener ? function (b, a, c) {
        b.addEventListener(a, c, !1)
    } : function (b, a, c) {
        b.attachEvent("on" + a, c)
    }, db = U.document.removeEventListener ? function (b, a, c) {
        b.removeEventListener(a, c, !1)
    } : function (b, a, c) {
        b.detachEvent("on" + a, c)
    }, mc = /([\:\-\_]+(.))/g, nc = /^moz([A-Z])/, ua = Q.prototype = {ready:function (b) {
        function a() {
            c || (c = !0, b())
        }

        var c = !1;
        this.bind("DOMContentLoaded", a);
        Q(U).bind("load", a)
    }, toString:function () {
        var b = [];
        m(this, function (a) {
            b.push("" +
                a)
        });
        return"[" + b.join(", ") + "]"
    }, eq:function (b) {
        return b >= 0 ? s(this[b]) : s(this[this.length + b])
    }, length:0, push:Ra, sort:[].sort, splice:[].splice}, Ea = {};
    m("multiple,selected,checked,disabled,readOnly,required".split(","), function (b) {
        Ea[E(b)] = b
    });
    var zb = {};
    m("input,select,option,textarea,button,form".split(","), function (b) {
        zb[la(b)] = !0
    });
    m({data:ub, inheritedData:Da, scope:function (b) {
        return Da(b, "$scope")
    }, controller:xb, injector:function (b) {
        return Da(b, "$injector")
    }, removeAttr:function (b, a) {
        b.removeAttribute(a)
    },
        hasClass:Ca, css:function (b, a, c) {
            a = rb(a);
            if (v(c))b.style[a] = c; else {
                var d;
                $ <= 8 && (d = b.currentStyle && b.currentStyle[a], d === "" && (d = "auto"));
                d = d || b.style[a];
                $ <= 8 && (d = d === "" ? p : d);
                return d
            }
        }, attr:function (b, a, c) {
            var d = E(a);
            if (Ea[d])if (v(c))c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d)); else return b[a] || (b.attributes.getNamedItem(a) || D).specified ? d : p; else if (v(c))b.setAttribute(a, c); else if (b.getAttribute)return b = b.getAttribute(a, 2), b === null ? p : b
        }, prop:function (b, a, c) {
            if (v(c))b[a] = c; else return b[a]
        },
        text:x($ < 9 ? function (b, a) {
            if (b.nodeType == 1) {
                if (u(a))return b.innerText;
                b.innerText = a
            } else {
                if (u(a))return b.nodeValue;
                b.nodeValue = a
            }
        } : function (b, a) {
            if (u(a))return b.textContent;
            b.textContent = a
        }, {$dv:""}), val:function (b, a) {
            if (u(a))return b.value;
            b.value = a
        }, html:function (b, a) {
            if (u(a))return b.innerHTML;
            for (var c = 0, d = b.childNodes; c < d.length; c++)sa(d[c]);
            b.innerHTML = a
        }}, function (b, a) {
        Q.prototype[a] = function (a, d) {
            var e, g;
            if ((b.length == 2 && b !== Ca && b !== xb ? a : d) === p)if (L(a)) {
                for (e = 0; e < this.length; e++)if (b ===
                    ub)b(this[e], a); else for (g in a)b(this[e], g, a[g]);
                return this
            } else {
                if (this.length)return b(this[0], a, d)
            } else {
                for (e = 0; e < this.length; e++)b(this[e], a, d);
                return this
            }
            return b.$dv
        }
    });
    m({removeData:sb, dealoc:sa, bind:function a(c, d, e) {
        var g = Z(c, "events"), i = Z(c, "handle");
        g || Z(c, "events", g = {});
        i || Z(c, "handle", i = pc(c, g));
        m(d.split(" "), function (d) {
            var h = g[d];
            if (!h) {
                if (d == "mouseenter" || d == "mouseleave") {
                    var k = 0;
                    g.mouseenter = [];
                    g.mouseleave = [];
                    a(c, "mouseover", function (a) {
                        k++;
                        k == 1 && i(a, "mouseenter")
                    });
                    a(c, "mouseout",
                        function (a) {
                            k--;
                            k == 0 && i(a, "mouseleave")
                        })
                } else Zb(c, d, i), g[d] = [];
                h = g[d]
            }
            h.push(e)
        })
    }, unbind:tb, replaceWith:function (a, c) {
        var d, e = a.parentNode;
        sa(a);
        m(new Q(c), function (c) {
            d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
            d = c
        })
    }, children:function (a) {
        var c = [];
        m(a.childNodes, function (a) {
            a.nodeType === 1 && c.push(a)
        });
        return c
    }, contents:function (a) {
        return a.childNodes || []
    }, append:function (a, c) {
        m(new Q(c), function (c) {
            a.nodeType === 1 && a.appendChild(c)
        })
    }, prepend:function (a, c) {
        if (a.nodeType === 1) {
            var d = a.firstChild;
            m(new Q(c), function (c) {
                d ? a.insertBefore(c, d) : (a.appendChild(c), d = c)
            })
        }
    }, wrap:function (a, c) {
        var c = s(c)[0], d = a.parentNode;
        d && d.replaceChild(c, a);
        c.appendChild(a)
    }, remove:function (a) {
        sa(a);
        var c = a.parentNode;
        c && c.removeChild(a)
    }, after:function (a, c) {
        var d = a, e = a.parentNode;
        m(new Q(c), function (a) {
            e.insertBefore(a, d.nextSibling);
            d = a
        })
    }, addClass:wb, removeClass:vb, toggleClass:function (a, c, d) {
        u(d) && (d = !Ca(a, c));
        (d ? wb : vb)(a, c)
    }, parent:function (a) {
        return(a = a.parentNode) && a.nodeType !== 11 ? a : null
    }, next:function (a) {
        if (a.nextElementSibling)return a.nextElementSibling;
        for (a = a.nextSibling; a != null && a.nodeType !== 1;)a = a.nextSibling;
        return a
    }, find:function (a, c) {
        return a.getElementsByTagName(c)
    }, clone:cb, triggerHandler:function (a, c) {
        var d = (Z(a, "events") || {})[c];
        m(d, function (c) {
            c.call(a, null)
        })
    }}, function (a, c) {
        Q.prototype[c] = function (c, e) {
            for (var g, i = 0; i < this.length; i++)g == p ? (g = a(this[i], c, e), g !== p && (g = s(g))) : bb(g, a(this[i], c, e));
            return g == p ? this : g
        }
    });
    Fa.prototype = {put:function (a, c) {
        this[fa(a)] = c
    }, get:function (a) {
        return this[fa(a)]
    }, remove:function (a) {
        var c = this[a = fa(a)];
        delete this[a];
        return c
    }};
    eb.prototype = {push:function (a, c) {
        var d = this[a = fa(a)];
        d ? d.push(c) : this[a] = [c]
    }, shift:function (a) {
        var c = this[a = fa(a)];
        if (c)return c.length == 1 ? (delete this[a], c[0]) : c.shift()
    }, peek:function (a) {
        if (a = this[fa(a)])return a[0]
    }};
    var rc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, sc = /,/, tc = /^\s*(_?)(\S+?)\1\s*$/, qc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, Db = "Non-assignable model expression: ";
    Bb.$inject = ["$provide"];
    var Ac = /^(x[\:\-_]|data[\:\-_])/i, Fb = /^([^:]+):\/\/(\w+:{0,1}\w*@)?([\w\.-]*)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/,
        $b = /^([^\?#]*)?(\?([^#]*))?(#(.*))?$/, Hc = $b, Gb = {http:80, https:443, ftp:21};
    gb.prototype = {$$replace:!1, absUrl:Ja("$$absUrl"), url:function (a, c) {
        if (u(a))return this.$$url;
        var d = $b.exec(a);
        d[1] && this.path(decodeURIComponent(d[1]));
        if (d[2] || d[1])this.search(d[3] || "");
        this.hash(d[5] || "", c);
        return this
    }, protocol:Ja("$$protocol"), host:Ja("$$host"), port:Ja("$$port"), path:Ib("$$path", function (a) {
        return a.charAt(0) == "/" ? a : "/" + a
    }), search:function (a, c) {
        if (u(a))return this.$$search;
        v(c) ? c === null ? delete this.$$search[a] :
            this.$$search[a] = c : this.$$search = F(a) ? Xa(a) : a;
        this.$$compose();
        return this
    }, hash:Ib("$$hash", ma), replace:function () {
        this.$$replace = !0;
        return this
    }};
    Ia.prototype = ya(gb.prototype);
    Hb.prototype = ya(Ia.prototype);
    var Ka = {"null":function () {
        return null
    }, "true":function () {
        return!0
    }, "false":function () {
        return!1
    }, undefined:D, "+":function (a, c, d, e) {
        d = d(a, c);
        e = e(a, c);
        return v(d) ? v(e) ? d + e : d : v(e) ? e : p
    }, "-":function (a, c, d, e) {
        d = d(a, c);
        e = e(a, c);
        return(v(d) ? d : 0) - (v(e) ? e : 0)
    }, "*":function (a, c, d, e) {
        return d(a, c) * e(a, c)
    },
        "/":function (a, c, d, e) {
            return d(a, c) / e(a, c)
        }, "%":function (a, c, d, e) {
            return d(a, c) % e(a, c)
        }, "^":function (a, c, d, e) {
            return d(a, c) ^ e(a, c)
        }, "=":D, "==":function (a, c, d, e) {
            return d(a, c) == e(a, c)
        }, "!=":function (a, c, d, e) {
            return d(a, c) != e(a, c)
        }, "<":function (a, c, d, e) {
            return d(a, c) < e(a, c)
        }, ">":function (a, c, d, e) {
            return d(a, c) > e(a, c)
        }, "<=":function (a, c, d, e) {
            return d(a, c) <= e(a, c)
        }, ">=":function (a, c, d, e) {
            return d(a, c) >= e(a, c)
        }, "&&":function (a, c, d, e) {
            return d(a, c) && e(a, c)
        }, "||":function (a, c, d, e) {
            return d(a, c) || e(a, c)
        },
        "&":function (a, c, d, e) {
            return d(a, c) & e(a, c)
        }, "|":function (a, c, d, e) {
            return e(a, c)(a, c, d(a, c))
        }, "!":function (a, c, d) {
            return!d(a, c)
        }}, Lc = {n:"\n", f:"\u000c", r:"\r", t:"\t", v:"\u000b", "'":"'", '"':'"'}, hb = {}, Yc = U.XMLHttpRequest || function () {
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0")
        } catch (a) {
        }
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0")
        } catch (c) {
        }
        try {
            return new ActiveXObject("Msxml2.XMLHTTP")
        } catch (d) {
        }
        throw new B("This browser does not support XMLHttpRequest.");
    };
    Pb.$inject = ["$provide"];
    Qb.$inject =
        ["$locale"];
    Sb.$inject = ["$locale"];
    var Vb = ".", hd = {yyyy:P("FullYear", 4), yy:P("FullYear", 2, 0, !0), y:P("FullYear", 1), MMMM:La("Month"), MMM:La("Month", !0), MM:P("Month", 2, 1), M:P("Month", 1, 1), dd:P("Date", 2), d:P("Date", 1), HH:P("Hours", 2), H:P("Hours", 1), hh:P("Hours", 2, -12), h:P("Hours", 1, -12), mm:P("Minutes", 2), m:P("Minutes", 1), ss:P("Seconds", 2), s:P("Seconds", 1), EEEE:La("Day"), EEE:La("Day", !0), a:function (a, c) {
        return a.getHours() < 12 ? c.AMPMS[0] : c.AMPMS[1]
    }, Z:function (a) {
        a = a.getTimezoneOffset();
        return ib(a / 60, 2) +
            ib(Math.abs(a % 60), 2)
    }}, gd = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, fd = /^\d+$/;
    Rb.$inject = ["$locale"];
    var dd = J(E), ed = J(la);
    Tb.$inject = ["$parse"];
    var jd = J({restrict:"E", compile:function (a, c) {
        c.href || c.$set("href", "");
        return function (a, c) {
            c.bind("click", function (a) {
                c.attr("href") || a.preventDefault()
            })
        }
    }}), kb = {};
    m(Ea, function (a, c) {
        var d = ea("ng-" + c);
        kb[d] = function () {
            return{priority:100, compile:function () {
                return function (a, g, i) {
                    a.$watch(i[d], function (a) {
                        i.$set(c, !!a)
                    })
                }
            }}
        }
    });
    m(["src", "href"], function (a) {
        var c = ea("ng-" + a);
        kb[c] = function () {
            return{priority:99, link:function (d, e, g) {
                g.$observe(c, function (c) {
                    c && (g.$set(a, c), $ && e.prop(a, c))
                })
            }}
        }
    });
    var Oa = {$addControl:D, $removeControl:D, $setValidity:D, $setDirty:D};
    Wb.$inject = ["$element", "$attrs", "$scope"];
    var Ra = function (a) {
        return["$timeout", function (c) {
            var d = {name:"form", restrict:"E", controller:Wb, compile:function () {
                return{pre:function (a, d, i, f) {
                    if (!i.action) {
                        var h = function (a) {
                            a.preventDefault ? a.preventDefault() : a.returnValue = !1
                        };
                        Zb(d[0], "submit", h);
                        d.bind("$destroy", function () {
                            c(function () {
                                db(d[0], "submit", h)
                            }, 0, !1)
                        })
                    }
                    var k = d.parent().controller("form"), j = i.name || i.ngForm;
                    j && (a[j] = f);
                    k && d.bind("$destroy", function () {
                        k.$removeControl(f);
                        j && (a[j] = p);
                        x(f, Oa)
                    })
                }}
            }};
            return a ? x(V(d), {restrict:"EAC"}) : d
        }]
    }, kd = Ra(), ld = Ra(!0), md = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, nd = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, od = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, ac = {text:Qa, number:function (a, c, d, e, g, i) {
        Qa(a, c, d, e, g, i);
        e.$parsers.push(function (a) {
            var c = T(a);
            return c || od.test(a) ? (e.$setValidity("number", !0), a === "" ? null : c ? a : parseFloat(a)) : (e.$setValidity("number", !1), p)
        });
        e.$formatters.push(function (a) {
            return T(a) ? "" : "" + a
        });
        if (d.min) {
            var f = parseFloat(d.min), a = function (a) {
                return!T(a) && a < f ? (e.$setValidity("min", !1), p) : (e.$setValidity("min", !0), a)
            };
            e.$parsers.push(a);
            e.$formatters.push(a)
        }
        if (d.max) {
            var h = parseFloat(d.max), d = function (a) {
                return!T(a) && a > h ? (e.$setValidity("max", !1), p) : (e.$setValidity("max",
                    !0), a)
            };
            e.$parsers.push(d);
            e.$formatters.push(d)
        }
        e.$formatters.push(function (a) {
            return T(a) || wa(a) ? (e.$setValidity("number", !0), a) : (e.$setValidity("number", !1), p)
        })
    }, url:function (a, c, d, e, g, i) {
        Qa(a, c, d, e, g, i);
        a = function (a) {
            return T(a) || md.test(a) ? (e.$setValidity("url", !0), a) : (e.$setValidity("url", !1), p)
        };
        e.$formatters.push(a);
        e.$parsers.push(a)
    }, email:function (a, c, d, e, g, i) {
        Qa(a, c, d, e, g, i);
        a = function (a) {
            return T(a) || nd.test(a) ? (e.$setValidity("email", !0), a) : (e.$setValidity("email", !1), p)
        };
        e.$formatters.push(a);
        e.$parsers.push(a)
    }, radio:function (a, c, d, e) {
        u(d.name) && c.attr("name", xa());
        c.bind("click", function () {
            c[0].checked && a.$apply(function () {
                e.$setViewValue(d.value)
            })
        });
        e.$render = function () {
            c[0].checked = d.value == e.$viewValue
        };
        d.$observe("value", e.$render)
    }, checkbox:function (a, c, d, e) {
        var g = d.ngTrueValue, i = d.ngFalseValue;
        F(g) || (g = !0);
        F(i) || (i = !1);
        c.bind("click", function () {
            a.$apply(function () {
                e.$setViewValue(c[0].checked)
            })
        });
        e.$render = function () {
            c[0].checked = e.$viewValue
        };
        e.$formatters.push(function (a) {
            return a ===
                g
        });
        e.$parsers.push(function (a) {
            return a ? g : i
        })
    }, hidden:D, button:D, submit:D, reset:D}, bc = ["$browser", "$sniffer", function (a, c) {
        return{restrict:"E", require:"?ngModel", link:function (d, e, g, i) {
            i && (ac[E(g.type)] || ac.text)(d, e, g, i, c, a)
        }}
    }], Na = "ng-valid", Ma = "ng-invalid", Pa = "ng-pristine", Xb = "ng-dirty", pd = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", function (a, c, d, e, g) {
        function i(a, c) {
            c = c ? "-" + $a(c, "-") : "";
            e.removeClass((a ? Ma : Na) + c).addClass((a ? Na : Ma) + c)
        }

        this.$modelValue = this.$viewValue = Number.NaN;
        this.$parsers = [];
        this.$formatters = [];
        this.$viewChangeListeners = [];
        this.$pristine = !0;
        this.$dirty = !1;
        this.$valid = !0;
        this.$invalid = !1;
        this.$name = d.name;
        var f = g(d.ngModel), h = f.assign;
        if (!h)throw B(Db + d.ngModel + " (" + pa(e) + ")");
        this.$render = D;
        var k = e.inheritedData("$formController") || Oa, j = 0, l = this.$error = {};
        e.addClass(Pa);
        i(!0);
        this.$setValidity = function (a, c) {
            if (l[a] !== !c) {
                if (c) {
                    if (l[a] && j--, !j)i(!0), this.$valid = !0, this.$invalid = !1
                } else i(!1), this.$invalid = !0, this.$valid = !1, j++;
                l[a] = !c;
                i(c, a);
                k.$setValidity(a,
                    c, this)
            }
        };
        this.$setViewValue = function (d) {
            this.$viewValue = d;
            if (this.$pristine)this.$dirty = !0, this.$pristine = !1, e.removeClass(Pa).addClass(Xb), k.$setDirty();
            m(this.$parsers, function (a) {
                d = a(d)
            });
            if (this.$modelValue !== d)this.$modelValue = d, h(a, d), m(this.$viewChangeListeners, function (a) {
                try {
                    a()
                } catch (d) {
                    c(d)
                }
            })
        };
        var o = this;
        a.$watch(function () {
            var c = f(a);
            if (o.$modelValue !== c) {
                var d = o.$formatters, e = d.length;
                for (o.$modelValue = c; e--;)c = d[e](c);
                if (o.$viewValue !== c)o.$viewValue = c, o.$render()
            }
        })
    }], qd = function () {
        return{require:["ngModel",
            "^?form"], controller:pd, link:function (a, c, d, e) {
            var g = e[0], i = e[1] || Oa;
            i.$addControl(g);
            c.bind("$destroy", function () {
                i.$removeControl(g)
            })
        }}
    }, rd = J({require:"ngModel", link:function (a, c, d, e) {
        e.$viewChangeListeners.push(function () {
            a.$eval(d.ngChange)
        })
    }}), cc = function () {
        return{require:"?ngModel", link:function (a, c, d, e) {
            if (e) {
                d.required = !0;
                var g = function (a) {
                    if (d.required && (T(a) || a === !1))e.$setValidity("required", !1); else return e.$setValidity("required", !0), a
                };
                e.$formatters.push(g);
                e.$parsers.unshift(g);
                d.$observe("required", function () {
                    g(e.$viewValue)
                })
            }
        }}
    }, sd = function () {
        return{require:"ngModel", link:function (a, c, d, e) {
            var g = (a = /\/(.*)\//.exec(d.ngList)) && RegExp(a[1]) || d.ngList || ",";
            e.$parsers.push(function (a) {
                var c = [];
                a && m(a.split(g), function (a) {
                    a && c.push(R(a))
                });
                return c
            });
            e.$formatters.push(function (a) {
                return H(a) ? a.join(", ") : p
            })
        }}
    }, td = /^(true|false|\d+)$/, ud = function () {
        return{priority:100, compile:function (a, c) {
            return td.test(c.ngValue) ? function (a, c, g) {
                g.$set("value", a.$eval(g.ngValue))
            } : function (a, c, g) {
                a.$watch(g.ngValue, function (a) {
                    g.$set("value", a, !1)
                })
            }
        }}
    }, vd = S(function (a, c, d) {
        c.addClass("ng-binding").data("$binding", d.ngBind);
        a.$watch(d.ngBind, function (a) {
            c.text(a == p ? "" : a)
        })
    }), wd = ["$interpolate", function (a) {
        return function (c, d, e) {
            c = a(d.attr(e.$attr.ngBindTemplate));
            d.addClass("ng-binding").data("$binding", c);
            e.$observe("ngBindTemplate", function (a) {
                d.text(a)
            })
        }
    }], xd = [function () {
        return function (a, c, d) {
            c.addClass("ng-binding").data("$binding", d.ngBindHtmlUnsafe);
            a.$watch(d.ngBindHtmlUnsafe,
                function (a) {
                    c.html(a || "")
                })
        }
    }], yd = jb("", !0), zd = jb("Odd", 0), Ad = jb("Even", 1), Bd = S({compile:function (a, c) {
        c.$set("ngCloak", p);
        a.removeClass("ng-cloak")
    }}), Cd = [function () {
        return{scope:!0, controller:"@"}
    }], Dd = ["$sniffer", function (a) {
        return{priority:1E3, compile:function () {
            a.csp = !0
        }}
    }], dc = {};
    m("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave".split(" "), function (a) {
        var c = ea("ng-" + a);
        dc[c] = ["$parse", function (d) {
            return function (e, g, i) {
                var f = d(i[c]);
                g.bind(E(a), function (a) {
                    e.$apply(function () {
                        f(e,
                            {$event:a})
                    })
                })
            }
        }]
    });
    var Ed = S(function (a, c, d) {
        c.bind("submit", function () {
            a.$apply(d.ngSubmit)
        })
    }), Fd = ["$http", "$templateCache", "$anchorScroll", "$compile", function (a, c, d, e) {
        return{restrict:"ECA", terminal:!0, compile:function (g, i) {
            var f = i.ngInclude || i.src, h = i.onload || "", k = i.autoscroll;
            return function (g, i) {
                var o = 0, m, n = function () {
                    m && (m.$destroy(), m = null);
                    i.html("")
                };
                g.$watch(f, function (f) {
                    var p = ++o;
                    f ? a.get(f, {cache:c}).success(function (a) {
                        p === o && (m && m.$destroy(), m = g.$new(), i.html(a), e(i.contents())(m),
                            v(k) && (!k || g.$eval(k)) && d(), m.$emit("$includeContentLoaded"), g.$eval(h))
                    }).error(function () {
                            p === o && n()
                        }) : n()
                })
            }
        }}
    }], Gd = S({compile:function () {
        return{pre:function (a, c, d) {
            a.$eval(d.ngInit)
        }}
    }}), Hd = S({terminal:!0, priority:1E3}), Id = ["$locale", "$interpolate", function (a, c) {
        var d = /{}/g;
        return{restrict:"EA", link:function (e, g, i) {
            var f = i.count, h = g.attr(i.$attr.when), k = i.offset || 0, j = e.$eval(h), l = {}, o = c.startSymbol(), r = c.endSymbol();
            m(j, function (a, e) {
                l[e] = c(a.replace(d, o + f + "-" + k + r))
            });
            e.$watch(function () {
                var c =
                    parseFloat(e.$eval(f));
                return isNaN(c) ? "" : (j[c] || (c = a.pluralCat(c - k)), l[c](e, g, !0))
            }, function (a) {
                g.text(a)
            })
        }}
    }], Jd = S({transclude:"element", priority:1E3, terminal:!0, compile:function (a, c, d) {
        return function (a, c, i) {
            var f = i.ngRepeat, i = f.match(/^\s*(.+)\s+in\s+(.*)\s*$/), h, k, j;
            if (!i)throw B("Expected ngRepeat in form of '_item_ in _collection_' but got '" + f + "'.");
            f = i[1];
            h = i[2];
            i = f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
            if (!i)throw B("'item' in 'item in collection' should be identifier or (key, value) but got '" +
                f + "'.");
            k = i[3] || i[1];
            j = i[2];
            var l = new eb;
            a.$watch(function (a) {
                var e, f, i = a.$eval(h), m = gc(i, !0), p, s = new eb, C, A, v, u, y = c;
                if (H(i))v = i || []; else {
                    v = [];
                    for (C in i)i.hasOwnProperty(C) && C.charAt(0) != "$" && v.push(C);
                    v.sort()
                }
                e = 0;
                for (f = v.length; e < f; e++) {
                    C = i === v ? e : v[e];
                    A = i[C];
                    if (u = l.shift(A)) {
                        p = u.scope;
                        s.push(A, u);
                        if (e !== u.index)u.index = e, y.after(u.element);
                        y = u.element
                    } else p = a.$new();
                    p[k] = A;
                    j && (p[j] = C);
                    p.$index = e;
                    p.$first = e === 0;
                    p.$last = e === m - 1;
                    p.$middle = !(p.$first || p.$last);
                    u || d(p, function (a) {
                        y.after(a);
                        u = {scope:p,
                            element:y = a, index:e};
                        s.push(A, u)
                    })
                }
                for (C in l)if (l.hasOwnProperty(C))for (v = l[C]; v.length;)A = v.pop(), A.element.remove(), A.scope.$destroy();
                l = s
            })
        }
    }}), Kd = S(function (a, c, d) {
        a.$watch(d.ngShow, function (a) {
            c.css("display", Wa(a) ? "" : "none")
        })
    }), Ld = S(function (a, c, d) {
        a.$watch(d.ngHide, function (a) {
            c.css("display", Wa(a) ? "none" : "")
        })
    }), Md = S(function (a, c, d) {
        a.$watch(d.ngStyle, function (a, d) {
            d && a !== d && m(d, function (a, d) {
                c.css(d, "")
            });
            a && c.css(a)
        }, !0)
    }), Nd = J({restrict:"EA", compile:function (a, c) {
        var d = c.ngSwitch || c.on,
            e = {};
        a.data("ng-switch", e);
        return function (a, i) {
            var f, h, k;
            a.$watch(d, function (d) {
                h && (k.$destroy(), h.remove(), h = k = null);
                if (f = e["!" + d] || e["?"])a.$eval(c.change), k = a.$new(), f(k, function (a) {
                    h = a;
                    i.append(a)
                })
            })
        }
    }}), Od = S({transclude:"element", priority:500, compile:function (a, c, d) {
        a = a.inheritedData("ng-switch");
        qa(a);
        a["!" + c.ngSwitchWhen] = d
    }}), Pd = S({transclude:"element", priority:500, compile:function (a, c, d) {
        a = a.inheritedData("ng-switch");
        qa(a);
        a["?"] = d
    }}), Qd = S({controller:["$transclude", "$element", function (a, c) {
        a(function (a) {
            c.append(a)
        })
    }]}), Rd = ["$http", "$templateCache", "$route", "$anchorScroll", "$compile", "$controller", function (a, c, d, e, g, i) {
        return{restrict:"ECA", terminal:!0, link:function (a, c, k) {
            function j() {
                var j = d.current && d.current.locals, k = j && j.$template;
                if (k) {
                    c.html(k);
                    l && (l.$destroy(), l = null);
                    var k = g(c.contents()), p = d.current;
                    l = p.scope = a.$new();
                    if (p.controller)j.$scope = l, j = i(p.controller, j), c.contents().data("$ngControllerController", j);
                    k(l);
                    l.$emit("$viewContentLoaded");
                    l.$eval(m);
                    e()
                } else c.html(""),
                    l && (l.$destroy(), l = null)
            }

            var l, m = k.onload || "";
            a.$on("$routeChangeSuccess", j);
            j()
        }}
    }], Sd = ["$templateCache", function (a) {
        return{restrict:"E", terminal:!0, compile:function (c, d) {
            d.type == "text/ng-template" && a.put(d.id, c[0].text)
        }}
    }], Td = J({terminal:!0}), Ud = ["$compile", "$parse", function (a, c) {
        var d = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/, e = {$setViewValue:D};
        return{restrict:"E", require:["select",
            "?ngModel"], controller:["$element", "$scope", "$attrs", function (a, c, d) {
            var h = this, k = {}, j = e, l;
            h.databound = d.ngModel;
            h.init = function (a, c, d) {
                j = a;
                l = d
            };
            h.addOption = function (c) {
                k[c] = !0;
                j.$viewValue == c && (a.val(c), l.parent() && l.remove())
            };
            h.removeOption = function (a) {
                this.hasOption(a) && (delete k[a], j.$viewValue == a && this.renderUnknownOption(a))
            };
            h.renderUnknownOption = function (c) {
                c = "? " + fa(c) + " ?";
                l.val(c);
                a.prepend(l);
                a.val(c);
                l.prop("selected", !0)
            };
            h.hasOption = function (a) {
                return k.hasOwnProperty(a)
            };
            c.$on("$destroy",
                function () {
                    h.renderUnknownOption = D
                })
        }], link:function (e, i, f, h) {
            function k(a, c, d, e) {
                d.$render = function () {
                    var a = d.$viewValue;
                    e.hasOption(a) ? (A.parent() && A.remove(), c.val(a), a === "" && t.prop("selected", !0)) : u(a) && t ? c.val("") : e.renderUnknownOption(a)
                };
                c.bind("change", function () {
                    a.$apply(function () {
                        A.parent() && A.remove();
                        d.$setViewValue(c.val())
                    })
                })
            }

            function j(a, c, d) {
                var e;
                d.$render = function () {
                    var a = new Fa(d.$viewValue);
                    m(c.find("option"), function (c) {
                        c.selected = v(a.get(c.value))
                    })
                };
                a.$watch(function () {
                    ha(e,
                        d.$viewValue) || (e = V(d.$viewValue), d.$render())
                });
                c.bind("change", function () {
                    a.$apply(function () {
                        var a = [];
                        m(c.find("option"), function (c) {
                            c.selected && a.push(c.value)
                        });
                        d.$setViewValue(a)
                    })
                })
            }

            function l(e, f, g) {
                function h() {
                    var a = {"":[]}, c = [""], d, i, t, u, s;
                    t = g.$modelValue;
                    u = r(e) || [];
                    var y = l ? lb(u) : u, A, w, x;
                    w = {};
                    s = !1;
                    var z, B;
                    if (n)s = new Fa(t); else if (t === null || q)a[""].push({selected:t === null, id:"", label:""}), s = !0;
                    for (x = 0; A = y.length, x < A; x++) {
                        w[k] = u[l ? w[l] = y[x] : x];
                        d = m(e, w) || "";
                        if (!(i = a[d]))i = a[d] = [], c.push(d);
                        n ? d = s.remove(o(e, w)) != p : (d = t === o(e, w), s = s || d);
                        z = j(e, w);
                        z = z === p ? "" : z;
                        i.push({id:l ? y[x] : x, label:z, selected:d})
                    }
                    !n && !s && a[""].unshift({id:"?", label:"", selected:!0});
                    w = 0;
                    for (y = c.length; w < y; w++) {
                        d = c[w];
                        i = a[d];
                        if (v.length <= w)t = {element:C.clone().attr("label", d), label:i.label}, u = [t], v.push(u), f.append(t.element); else if (u = v[w], t = u[0], t.label != d)t.element.attr("label", t.label = d);
                        z = null;
                        x = 0;
                        for (A = i.length; x < A; x++)if (d = i[x], s = u[x + 1]) {
                            z = s.element;
                            if (s.label !== d.label)z.text(s.label = d.label);
                            if (s.id !== d.id)z.val(s.id =
                                d.id);
                            if (s.element.selected !== d.selected)z.prop("selected", s.selected = d.selected)
                        } else d.id === "" && q ? B = q : (B = D.clone()).val(d.id).attr("selected", d.selected).text(d.label), u.push({element:B, label:d.label, id:d.id, selected:d.selected}), z ? z.after(B) : t.element.append(B), z = B;
                        for (x++; u.length > x;)u.pop().element.remove()
                    }
                    for (; v.length > w;)v.pop()[0].element.remove()
                }

                var i;
                if (!(i = w.match(d)))throw B("Expected ngOptions in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '" + w + "'.");
                var j = c(i[2] || i[1]), k = i[4] || i[6], l = i[5], m = c(i[3] || ""), o = c(i[2] ? i[1] : k), r = c(i[7]), v = [
                    [
                        {element:f, label:""}
                    ]
                ];
                q && (a(q)(e), q.removeClass("ng-scope"), q.remove());
                f.html("");
                f.bind("change", function () {
                    e.$apply(function () {
                        var a, c = r(e) || [], d = {}, h, i, j, m, q, s;
                        if (n) {
                            i = [];
                            m = 0;
                            for (s = v.length; m < s; m++) {
                                a = v[m];
                                j = 1;
                                for (q = a.length; j < q; j++)if ((h = a[j].element)[0].selected)h = h.val(), l && (d[l] = h), d[k] = c[h], i.push(o(e, d))
                            }
                        } else h = f.val(), h == "?" ? i = p : h == "" ? i = null : (d[k] = c[h], l && (d[l] = h), i = o(e, d));
                        g.$setViewValue(i)
                    })
                });
                g.$render =
                    h;
                e.$watch(h)
            }

            if (h[1]) {
                for (var o = h[0], r = h[1], n = f.multiple, w = f.ngOptions, q = !1, t, D = s(ba.createElement("option")), C = s(ba.createElement("optgroup")), A = D.clone(), h = 0, x = i.children(), E = x.length; h < E; h++)if (x[h].value == "") {
                    t = q = x.eq(h);
                    break
                }
                o.init(r, q, A);
                if (n && (f.required || f.ngRequired)) {
                    var y = function (a) {
                        r.$setValidity("required", !f.required || a && a.length);
                        return a
                    };
                    r.$parsers.push(y);
                    r.$formatters.unshift(y);
                    f.$observe("required", function () {
                        y(r.$viewValue)
                    })
                }
                w ? l(e, i, r) : n ? j(e, i, r) : k(e, i, r, o)
            }
        }}
    }], Vd = ["$interpolate",
        function (a) {
            var c = {addOption:D, removeOption:D};
            return{restrict:"E", priority:100, compile:function (d, e) {
                if (u(e.value)) {
                    var g = a(d.text(), !0);
                    g || e.$set("value", d.text())
                }
                return function (a, d, e) {
                    var k = d.parent(), j = k.data("$selectController") || k.parent().data("$selectController");
                    j && j.databound ? d.prop("selected", !1) : j = c;
                    g ? a.$watch(g, function (a, c) {
                        e.$set("value", a);
                        a !== c && j.removeOption(c);
                        j.addOption(a)
                    }) : j.addOption(e.value);
                    d.bind("$destroy", function () {
                        j.removeOption(e.value)
                    })
                }
            }}
        }], Wd = J({restrict:"E",
        terminal:!0});
    (ja = U.jQuery) ? (s = ja, x(ja.fn, {scope:ua.scope, controller:ua.controller, injector:ua.injector, inheritedData:ua.inheritedData}), ab("remove", !0), ab("empty"), ab("html")) : s = Q;
    Yb.element = s;
    (function (a) {
        x(a, {bootstrap:pb, copy:V, extend:x, equals:ha, element:s, forEach:m, injector:qb, noop:D, bind:Va, toJson:ca, fromJson:nb, identity:ma, isUndefined:u, isDefined:v, isString:F, isFunction:N, isObject:L, isNumber:wa, isElement:fc, isArray:H, version:id, isDate:na, lowercase:E, uppercase:la, callbacks:{counter:0}});
        ta =
            lc(U);
        try {
            ta("ngLocale")
        } catch (c) {
            ta("ngLocale", []).provider("$locale", Zc)
        }
        ta("ng", ["ngLocale"], ["$provide", function (a) {
            a.provider("$compile", Bb).directive({a:jd, input:bc, textarea:bc, form:kd, script:Sd, select:Ud, style:Wd, option:Vd, ngBind:vd, ngBindHtmlUnsafe:xd, ngBindTemplate:wd, ngClass:yd, ngClassEven:Ad, ngClassOdd:zd, ngCsp:Dd, ngCloak:Bd, ngController:Cd, ngForm:ld, ngHide:Ld, ngInclude:Fd, ngInit:Gd, ngNonBindable:Hd, ngPluralize:Id, ngRepeat:Jd, ngShow:Kd, ngSubmit:Ed, ngStyle:Md, ngSwitch:Nd, ngSwitchWhen:Od,
                ngSwitchDefault:Pd, ngOptions:Td, ngView:Rd, ngTransclude:Qd, ngModel:qd, ngList:sd, ngChange:rd, required:cc, ngRequired:cc, ngValue:ud}).directive(kb).directive(dc);
            a.provider({$anchorScroll:uc, $browser:wc, $cacheFactory:xc, $controller:Bc, $document:Cc, $exceptionHandler:Dc, $filter:Pb, $interpolate:Ec, $http:Vc, $httpBackend:Wc, $location:Ic, $log:Jc, $parse:Nc, $route:Qc, $routeParams:Rc, $rootScope:Sc, $q:Oc, $sniffer:Tc, $templateCache:yc, $timeout:$c, $window:Uc})
        }])
    })(Yb);
    s(ba).ready(function () {
        jc(ba, pb)
    })
})(window,
    document);
angular.element(document).find("head").append('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak{display:none;}ng\\:form{display:block;}</style>');