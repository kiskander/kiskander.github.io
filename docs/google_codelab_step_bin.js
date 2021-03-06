(function () {
    "use strict";
    var aa = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
        ba =
            "function" == typeof Object.create
                ? Object.create
                : function (a) {
                      function b() {}
                      b.prototype = a;
                      return new b();
                  },
        k;
    if ("function" == typeof Object.setPrototypeOf) k = Object.setPrototypeOf;
    else {
        var l;
        a: {
            var ca = { B: !0 },
                da = {};
            try {
                da.__proto__ = ca;
                l = da.B;
                break a;
            } catch (a) {}
            l = !1;
        }
        k = l
            ? function (a, b) {
                  a.__proto__ = b;
                  if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
                  return a;
              }
            : null;
    }
    var ea = k,
        m = this;
    function n() {}
    function p(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var d = Object.prototype.toString.call(a);
                if ("[object Window]" == d) return "object";
                if ("[object Array]" == d || ("number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))) return "array";
                if ("[object Function]" == d || ("undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))) return "function";
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b;
    }
    function q(a) {
        var b = typeof a;
        return ("object" == b && null != a) || "function" == b;
    }
    var fa = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
        ha = 0;
    function r(a, b) {
        function d() {}
        d.prototype = b.prototype;
        a.A = b.prototype;
        a.prototype = new d();
        a.prototype.constructor = a;
        a.D = function (a, d, f) {
            for (var c = Array(arguments.length - 2), e = 2; e < arguments.length; e++) c[e - 2] = arguments[e];
            return b.prototype[d].apply(a, c);
        };
    }
    function ia() {
        0 != ja && (this[fa] || (this[fa] = ++ha));
    }
    var ja = 0;
    var ka;
    var la = Array.prototype.indexOf
        ? function (a, b) {
              return Array.prototype.indexOf.call(a, b, void 0);
          }
        : function (a, b) {
              if ("string" == typeof a) return "string" == typeof b && 1 == b.length ? a.indexOf(b, 0) : -1;
              for (var d = 0; d < a.length; d++) if (d in a && a[d] === b) return d;
              return -1;
          };
    var ma = String.prototype.trim
        ? function (a) {
              return a.trim();
          }
        : function (a) {
              return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
          };
    function na(a) {
        if (!oa.test(a)) return a;
        -1 != a.indexOf("&") && (a = a.replace(pa, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(qa, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(ra, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(sa, "&quot;"));
        -1 != a.indexOf("'") && (a = a.replace(ta, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(ua, "&#0;"));
        return a;
    }
    var pa = /&/g,
        qa = /</g,
        ra = />/g,
        sa = /"/g,
        ta = /'/g,
        ua = /\x00/g,
        oa = /[\x00&<>"']/;
    function t(a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
    }
    var u;
    a: {
        var va = m.navigator;
        if (va) {
            var wa = va.userAgent;
            if (wa) {
                u = wa;
                break a;
            }
        }
        u = "";
    }
    function v(a) {
        v[" "](a);
        return a;
    }
    v[" "] = n;
    var xa = -1 != u.indexOf("Opera"),
        w = -1 != u.indexOf("Trident") || -1 != u.indexOf("MSIE"),
        ya = -1 != u.indexOf("Edge"),
        za = -1 != u.indexOf("Gecko") && !(-1 != u.toLowerCase().indexOf("webkit") && -1 == u.indexOf("Edge")) && !(-1 != u.indexOf("Trident") || -1 != u.indexOf("MSIE")) && -1 == u.indexOf("Edge"),
        Aa = -1 != u.toLowerCase().indexOf("webkit") && -1 == u.indexOf("Edge");
    function Ba() {
        var a = m.document;
        return a ? a.documentMode : void 0;
    }
    var x;
    a: {
        var y = "",
            z = (function () {
                var a = u;
                if (za) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (ya) return /Edge\/([\d\.]+)/.exec(a);
                if (w) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Aa) return /WebKit\/(\S+)/.exec(a);
                if (xa) return /(?:Version)[ \/]?(\S+)/.exec(a);
            })();
        z && (y = z ? z[1] : "");
        if (w) {
            var A = Ba();
            if (null != A && A > parseFloat(y)) {
                x = String(A);
                break a;
            }
        }
        x = y;
    }
    var B = {},
        Ea;
    var Fa = m.document;
    Ea = Fa && w ? Ba() || ("CSS1Compat" == Fa.compatMode ? parseInt(x, 10) : 5) : void 0;
    var C;
    (C = !w) || (C = 9 <= Number(Ea));
    var Ga = C,
        D;
    if ((D = w)) {
        var E;
        if (Object.prototype.hasOwnProperty.call(B, "9")) E = B["9"];
        else {
            for (var F = 0, Ha = ma(String(x)).split("."), Ia = ma("9").split("."), Ja = Math.max(Ha.length, Ia.length), G = 0; 0 == F && G < Ja; G++) {
                var Ka = Ha[G] || "",
                    La = Ia[G] || "";
                do {
                    var H = /(\d*)(\D*)(.*)/.exec(Ka) || ["", "", "", ""],
                        I = /(\d*)(\D*)(.*)/.exec(La) || ["", "", "", ""];
                    if (0 == H[0].length && 0 == I[0].length) break;
                    F = t(0 == H[1].length ? 0 : parseInt(H[1], 10), 0 == I[1].length ? 0 : parseInt(I[1], 10)) || t(0 == H[2].length, 0 == I[2].length) || t(H[2], I[2]);
                    Ka = H[3];
                    La = I[3];
                } while (0 == F);
            }
            E = B["9"] = 0 <= F;
        }
        D = !E;
    }
    var Ma = D,
        Na = (function () {
            if (!m.addEventListener || !Object.defineProperty) return !1;
            var a = !1,
                b = Object.defineProperty({}, "passive", {
                    get: function () {
                        a = !0;
                    },
                });
            m.addEventListener("test", n, b);
            m.removeEventListener("test", n, b);
            return a;
        })();
    function J(a, b) {
        this.type = a;
        this.a = this.target = b;
    }
    J.prototype.b = function () {};
    function K(a, b) {
        J.call(this, a ? a.type : "");
        this.relatedTarget = this.a = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.m = null;
        if (a) {
            var d = (this.type = a.type),
                c = a.changedTouches ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.a = b;
            if ((b = a.relatedTarget)) {
                if (za) {
                    a: {
                        try {
                            v(b.nodeName);
                            var e = !0;
                            break a;
                        } catch (f) {}
                        e = !1;
                    }
                    e || (b = null);
                }
            } else "mouseover" == d ? (b = a.fromElement) : "mouseout" == d && (b = a.toElement);
            this.relatedTarget = b;
            null === c
                ? ((this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX), (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY), (this.screenX = a.screenX || 0), (this.screenY = a.screenY || 0))
                : ((this.clientX = void 0 !== c.clientX ? c.clientX : c.pageX), (this.clientY = void 0 !== c.clientY ? c.clientY : c.pageY), (this.screenX = c.screenX || 0), (this.screenY = c.screenY || 0));
            this.button = a.button;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = "string" == typeof a.pointerType ? a.pointerType : Oa[a.pointerType] || "";
            this.m = a;
            a.defaultPrevented && this.b();
        }
    }
    r(K, J);
    var Oa = { 2: "touch", 3: "pen", 4: "mouse" };
    K.prototype.b = function () {
        K.A.b.call(this);
        var a = this.m;
        if (a.preventDefault) a.preventDefault();
        else if (((a.returnValue = !1), Ma))
            try {
                if (a.ctrlKey || (112 <= a.keyCode && 123 >= a.keyCode)) a.keyCode = -1;
            } catch (b) {}
    };
    var L = "closure_listenable_" + ((1e6 * Math.random()) | 0),
        Pa = 0;
    function Qa(a, b, d, c, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = d;
        this.capture = !!c;
        this.a = e;
        this.key = ++Pa;
        this.g = this.j = !1;
    }
    function Ra(a) {
        a.g = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.a = null;
    }
    function M(a) {
        this.src = a;
        this.a = {};
        this.b = 0;
    }
    M.prototype.add = function (a, b, d, c, e) {
        var f = a.toString();
        a = this.a[f];
        a || ((a = this.a[f] = []), this.b++);
        var g;
        a: {
            for (g = 0; g < a.length; ++g) {
                var h = a[g];
                if (!h.g && h.listener == b && h.capture == !!c && h.a == e) break a;
            }
            g = -1;
        }
        -1 < g ? ((b = a[g]), d || (b.j = !1)) : ((b = new Qa(b, this.src, f, !!c, e)), (b.j = d), a.push(b));
        return b;
    };
    var N = "closure_lm_" + ((1e6 * Math.random()) | 0),
        O = {},
        Sa = 0;
    function Ta(a, b, d, c, e) {
        if (c && c.once) return Ua(a, b, d, c, e);
        if ("array" == p(b)) {
            for (var f = 0; f < b.length; f++) Ta(a, b[f], d, c, e);
            return null;
        }
        d = Va(d);
        return a && a[L] ? a.a(b, d, q(c) ? !!c.capture : !!c, e) : Wa(a, b, d, !1, c, e);
    }
    function Wa(a, b, d, c, e, f) {
        if (!b) throw Error("Invalid event type");
        var g = q(e) ? !!e.capture : !!e,
            h = P(a);
        h || (a[N] = h = new M(a));
        d = h.add(b, d, c, g, f);
        if (d.proxy) return d;
        c = Xa();
        d.proxy = c;
        c.src = a;
        c.listener = d;
        if (a.addEventListener) Na || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), c, e);
        else if (a.attachEvent) a.attachEvent(Ya(b.toString()), c);
        else if (a.addListener && a.removeListener) a.addListener(c);
        else throw Error("addEventListener and attachEvent are unavailable.");
        Sa++;
        return d;
    }
    function Xa() {
        var a = Za,
            b = Ga
                ? function (d) {
                      return a.call(b.src, b.listener, d);
                  }
                : function (d) {
                      d = a.call(b.src, b.listener, d);
                      if (!d) return d;
                  };
        return b;
    }
    function Ua(a, b, d, c, e) {
        if ("array" == p(b)) {
            for (var f = 0; f < b.length; f++) Ua(a, b[f], d, c, e);
            return null;
        }
        d = Va(d);
        return a && a[L] ? a.b(b, d, q(c) ? !!c.capture : !!c, e) : Wa(a, b, d, !0, c, e);
    }
    function Ya(a) {
        return a in O ? O[a] : (O[a] = "on" + a);
    }
    function $a(a, b, d, c) {
        var e = !0;
        if ((a = P(a)))
            if ((b = a.a[b.toString()]))
                for (b = b.concat(), a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.capture == d && !f.g && ((f = ab(f, c)), (e = e && !1 !== f));
                }
        return e;
    }
    function ab(a, b) {
        var d = a.listener,
            c = a.a || a.src;
        if (a.j && "number" != typeof a && a && !a.g) {
            var e = a.src;
            if (e && e[L]) e.m(a);
            else {
                var f = a.type,
                    g = a.proxy;
                e.removeEventListener ? e.removeEventListener(f, g, a.capture) : e.detachEvent ? e.detachEvent(Ya(f), g) : e.addListener && e.removeListener && e.removeListener(g);
                Sa--;
                if ((f = P(e))) {
                    g = a.type;
                    var h;
                    if ((h = g in f.a)) {
                        h = f.a[g];
                        var Ca = la(h, a),
                            Da;
                        (Da = 0 <= Ca) && Array.prototype.splice.call(h, Ca, 1);
                        h = Da;
                    }
                    h && (Ra(a), 0 == f.a[g].length && (delete f.a[g], f.b--));
                    0 == f.b && ((f.src = null), (e[N] = null));
                } else Ra(a);
            }
        }
        return d.call(c, b);
    }
    function Za(a, b) {
        if (a.g) return !0;
        if (!Ga) {
            if (!b)
                a: {
                    b = ["window", "event"];
                    for (var d = m, c = 0; c < b.length; c++)
                        if (((d = d[b[c]]), null == d)) {
                            b = null;
                            break a;
                        }
                    b = d;
                }
            c = b;
            b = new K(c, this);
            d = !0;
            if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                a: {
                    var e = !1;
                    if (0 == c.keyCode)
                        try {
                            c.keyCode = -1;
                            break a;
                        } catch (g) {
                            e = !0;
                        }
                    if (e || void 0 == c.returnValue) c.returnValue = !0;
                }
                c = [];
                for (e = b.a; e; e = e.parentNode) c.push(e);
                a = a.type;
                for (e = c.length - 1; 0 <= e; e--) {
                    b.a = c[e];
                    var f = $a(c[e], a, !0, b);
                    d = d && f;
                }
                for (e = 0; e < c.length; e++) (b.a = c[e]), (f = $a(c[e], a, !1, b)), (d = d && f);
            }
            return d;
        }
        return ab(a, new K(b, this));
    }
    function P(a) {
        a = a[N];
        return a instanceof M ? a : null;
    }
    var Q = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
    function Va(a) {
        if ("function" == p(a)) return a;
        a[Q] ||
            (a[Q] = function (b) {
                return a.handleEvent(b);
            });
        return a[Q];
    }
    function R(a) {
        ia.call(this);
        this.a = a;
        this.b = {};
    }
    r(R, ia);
    var bb = [];
    function cb(a, b, d) {
        var c = "copy";
        "array" != p(c) && (c && (bb[0] = c.toString()), (c = bb));
        for (var e = 0; e < c.length; e++) {
            var f = Ta(b, c[e], d || a.handleEvent, !1, a.a || a);
            if (!f) break;
            a.b[f.key] = f;
        }
    }
    R.prototype.handleEvent = function () {
        throw Error("EventHandler.handleEvent not implemented");
    };
    function S() {
        this.a = db;
    }
    var db = {};
    var T = {},
        eb = {};
    function U() {
        throw Error("Do not instantiate directly");
    }
    U.prototype.v = null;
    U.prototype.toString = function () {
        return this.o;
    };
    function V() {
        U.call(this);
    }
    r(V, U);
    V.prototype.l = T;
    function fb(a) {
        if (null != a)
            switch (a.v) {
                case 1:
                    return 1;
                case -1:
                    return -1;
                case 0:
                    return 0;
            }
        return null;
    }
    function gb(a) {
        return null != a && a.l === T ? a : a instanceof S ? W(a instanceof S && a.constructor === S && a.a === db ? "" : "type_error:SafeHtml", null) : W(na(String(String(a))), fb(a));
    }
    var W = (function (a) {
        function b(a) {
            this.o = a;
        }
        b.prototype = a.prototype;
        return function (a, c) {
            a = new b(String(a));
            void 0 !== c && (a.v = c);
            return a;
        };
    })(V);
    var hb = (function (a) {
        var b = !1,
            d;
        return function () {
            b || ((d = a()), (b = !0));
            return d;
        };
    })(function () {
        var a = document.createElement("div");
        a.innerHTML = "<div><div></div></div>";
        var b = a.firstChild.firstChild;
        a.innerHTML = "";
        return !b.parentElement;
    });
    function ib(a) {
        for (var b; (b = a.firstChild); ) a.removeChild(b);
    }
    function jb(a, b) {
        a.insertBefore(b, a.childNodes[0] || null);
    }
    function kb() {
        this.a = m.document || document;
    }
    function lb(a) {
        a = a || mb;
        var b = a.label;
        b = W('<h2 class="step-title">' + gb(a.step) + ". " + gb(b) + "</h2>");
        a = (ka || (ka = new kb())).a.createElement("DIV");
        b: {
            if (b instanceof U) {
                if (b.l === T) {
                    b = b.o;
                    break b;
                }
                if (b.l === eb) {
                    b = na(b.o);
                    break b;
                }
            }
            b = "zSoyz";
        }
        if (hb()) for (; a.lastChild; ) a.removeChild(a.lastChild);
        a.innerHTML = b;
        1 == a.childNodes.length && ((b = a.firstChild), 1 == b.nodeType && (a = b));
        return a;
    }
    var mb = {}; /*

 Copyright 2018 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
    function X() {
        var a = HTMLElement.call(this) || this;
        a.h = null;
        a.c = null;
        a.w = !1;
        a.u = "0";
        a.s = "";
        a.i = null;
        a.f = null;
        a.C = new R();
        return a;
    }
    var Y = HTMLElement;
    X.prototype = ba(Y.prototype);
    X.prototype.constructor = X;
    if (ea) ea(X, Y);
    else
        for (var Z in Y)
            if ("prototype" != Z)
                if (Object.defineProperties) {
                    var nb = Object.getOwnPropertyDescriptor(Y, Z);
                    nb && Object.defineProperty(X, Z, nb);
                } else X[Z] = Y[Z];
    X.A = Y.prototype;
    X.prototype.connectedCallback = function () {
        ob(this);
    };
    X.prototype.connectedCallback = X.prototype.connectedCallback;
    X.prototype.attributeChangedCallback = function (a) {
        if ("label" === a || "step" === a)
            if ((this.hasAttribute("label") && (this.s = this.getAttribute("label")), this.hasAttribute("step") && (this.u = this.getAttribute("step")), this.i)) {
                a = lb({ step: this.u, label: this.s });
                var b = this.i,
                    d = b.parentNode;
                d && d.replaceChild(a, b);
                this.i = a;
            }
    };
    X.prototype.attributeChangedCallback = X.prototype.attributeChangedCallback;
    function ob(a) {
        if (!a.w) {
            var b = a.getElementsByTagName("google-codelab-about");
            0 < b.length && ((a.f = b[0]), a.f.parentNode.removeChild(a.f));
            a.h = document.createElement("div");
            a.h.classList.add("instructions");
            a.c = document.createElement("div");
            a.c.classList.add("inner");
            a.c.innerHTML = a.innerHTML;
            a.h.appendChild(a.c);
            ib(a);
            b = lb({ step: a.u, label: a.s });
            a.i = b;
            jb(a.c, b);
            a.c.querySelectorAll("pre code").forEach(function (b) {
                var c = window.prettyPrintOne(b.innerHTML);
                b.innerHTML = c;
                cb(a.C, b, function () {
                    var a = new CustomEvent("google-codelab-action", { detail: { category: "snippet", action: "copy", label: b.textContent.substring(0, 500) } });
                    document.body.dispatchEvent(a);
                });
            });
            a.f && a.appendChild(a.f);
            a.appendChild(a.h);
            a.w = !0;
        }
    }
    aa.Object.defineProperties(X, {
        observedAttributes: {
            configurable: !0,
            enumerable: !0,
            get: function () {
                return ["label", "step"];
            },
        },
    });
    try {
        window.customElements.define("google-codelab-step", X);
    } catch (a) {
        console.warn("googlecodelabs.CodelabStep", a);
    }
}.call(this));
